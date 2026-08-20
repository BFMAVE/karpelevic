import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("topic-viii-figure-truthfulness", `${process.pid}-${Date.now()}`);
const workerPromise = import(workerUrl.href).then(({ default: worker }) => worker);
const figureSourcePromise = readFile(
  new URL("../app/components/proof/figures/StochasticFareyFigures.tsx", import.meta.url),
  "utf8",
);
const globalCssPromise = readFile(new URL("../app/globals.css", import.meta.url), "utf8");

async function render(pathname) {
  const worker = await workerPromise;
  const response = await worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  return response.text();
}

function figureMarkup(html, kind) {
  const title = `<title id="sf-${kind}-title">`;
  const titleIndex = html.indexOf(title);
  assert.notEqual(titleIndex, -1, `${kind} title exists`);

  const figureStart = html.lastIndexOf("<figure", titleIndex);
  const figureEnd = html.indexOf("</figure>", titleIndex);
  assert.ok(figureStart >= 0 && figureEnd > titleIndex, `${kind} figure is complete`);
  return html.slice(figureStart, figureEnd + "</figure>".length);
}

function visibleText(markup) {
  return markup
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&")
    .replace(/\s+/g, " ");
}

function tagsWithAttribute(markup, tag, name, value) {
  const tags = [...markup.matchAll(new RegExp(`<${tag}[^>]*>`, "g"))].map((match) => match[0]);
  return tags.filter((candidate) => candidate.includes(`${name}="${value}"`));
}

function numberAttribute(tag, name) {
  const match = tag.match(new RegExp(`${name}="([^"]+)"`));
  assert.ok(match, `${name} exists on ${tag}`);
  return Number(match[1]);
}

function pointsAttribute(tag) {
  const match = tag.match(/points="([^"]+)"/);
  assert.ok(match, `points exist on ${tag}`);
  return match[1].split(" ").map((pair) => {
    const [x, y] = pair.split(",").map(Number);
    return { x, y };
  });
}

function assertClose(actual, expected, message, epsilon = 1e-8) {
  assert.ok(Math.abs(actual - expected) <= epsilon, `${message}: ${actual} != ${expected}`);
}

function angleModuloTau(angle) {
  const tau = 2 * Math.PI;
  return ((angle % tau) + tau) % tau;
}

function relativeLuminance(hex) {
  const channels = hex.match(/[0-9a-f]{2}/gi).map((channel) => Number.parseInt(channel, 16) / 255);
  const [red, green, blue] = channels.map((channel) => (
    channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
  ));
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function contrastRatio(first, second) {
  const luminances = [relativeLuminance(first), relativeLuminance(second)].sort((a, b) => b - a);
  return (luminances[0] + 0.05) / (luminances[1] + 0.05);
}

test("Plate VIII.1 is the exact equilateral midpoint construction in both layouts", async () => {
  const html = await render("/proof/topic-viii");
  const figure = figureMarkup(html, "eigenpolygon");

  assert.match(figure, />Exact diagram<\/span>/);
  assert.match(figure, /aria-labelledby="sf-eigenpolygon-title sf-eigenpolygon-desc"/);
  assert.match(figure, /aria-labelledby="sf-eigenpolygon-mobile-title sf-eigenpolygon-mobile-desc"/);
  assert.equal([...figure.matchAll(/data-figure-layout="(?:desktop|mobile)"/g)].length, 2);
  assert.match(figure, /data-figure-layout="mobile"[^>]*data-mobile-min-label-size="18"/);

  const outerPolygons = tagsWithAttribute(figure, "polygon", "data-polygon", "P").map(pointsAttribute);
  const imagePolygons = tagsWithAttribute(figure, "polygon", "data-polygon", "lambda-P").map(pointsAttribute);
  assert.equal(outerPolygons.length, 2);
  assert.equal(imagePolygons.length, 2);

  const originTags = tagsWithAttribute(figure, "g", "data-origin", "complex-multiplication");
  assert.equal(originTags.length, 2);
  assert.equal([...figure.matchAll(/data-midpoint-of="v[123],v[123]"/g)].length, 6);

  for (let layout = 0; layout < 2; layout += 1) {
    const outer = outerPolygons[layout];
    const image = imagePolygons[layout];
    const center = {
      x: outer.reduce((sum, point) => sum + point.x, 0) / 3,
      y: outer.reduce((sum, point) => sum + point.y, 0) / 3,
    };
    const expectedAngles = [Math.PI / 2, (7 * Math.PI) / 6, (11 * Math.PI) / 6];
    const radii = outer.map((point) => Math.hypot(point.x - center.x, point.y - center.y));

    for (let index = 0; index < 3; index += 1) {
      assertClose(radii[index], radii[0], `layout ${layout} radius ${index}`);
      const angle = angleModuloTau(Math.atan2(-(outer[index].y - center.y), outer[index].x - center.x));
      assertClose(angle, expectedAngles[index], `layout ${layout} angle ${index}`);
      assertClose(image[index].x, (outer[index].x + outer[(index + 1) % 3].x) / 2, `layout ${layout} midpoint x ${index}`);
      assertClose(image[index].y, (outer[index].y + outer[(index + 1) % 3].y) / 2, `layout ${layout} midpoint y ${index}`);
    }
  }

  const arrowTags = tagsWithAttribute(figure, "path", "data-complex-image-arrow", "v1-to-lambda-v1");
  assert.equal(arrowTags.length, 2);
  arrowTags.forEach((tag, layout) => {
    const path = tag.match(/d="([^"]+)"/);
    assert.ok(path);
    const values = [...path[1].matchAll(/-?\d+(?:\.\d+)?(?:e[+-]?\d+)?/gi)].map((match) => Number(match[0]));
    const image = imagePolygons[layout][0];
    assertClose(values.at(-2), image.x, `layout ${layout} arrow-end x`);
    assertClose(values.at(-1), image.y, `layout ${layout} arrow-end y`);
  });

  assert.equal([...figure.matchAll(/data-complex-map-label="z-to-lambda-z"/g)].length, 2);
  assert.match(visibleText(figure), /z ↦ λz/);

  assert.ok([...figure.matchAll(/baseline-shift="sub"/g)].length >= 14);
  assert.match(visibleText(figure), /Plate VIII\.1\./);
  assert.match(visibleText(figure), /every image vertex is a side midpoint/i);
});

test("Plate VIII.2 states exact radial-order relations in a not-to-scale diagram", async () => {
  const html = await render("/proof/topic-viii");
  const figure = figureMarkup(html, "new-shell");
  const text = visibleText(figure);

  assert.match(figure, />Exact radial-order diagram — not to scale<\/span>/);
  assert.match(figure, /aria-labelledby="sf-new-shell-title sf-new-shell-desc"/);
  assert.match(figure, /aria-labelledby="sf-new-shell-mobile-title sf-new-shell-mobile-desc"/);
  assert.equal([...figure.matchAll(/data-figure-layout="(?:desktop|mobile)"/g)].length, 2);
  assert.equal([...figure.matchAll(/data-origin-in-both-regions="true"/g)].length, 2);
  assert.equal([...figure.matchAll(/data-inclusion="included"/g)].length, 4);
  assert.equal([...figure.matchAll(/data-outward-exclusion="t-lambda"/g)].length, 2);
  assert.equal([...figure.matchAll(/data-strict-radial-inequality="true"/g)].length, 2);
  assert.ok([...figure.matchAll(/baseline-shift="sub"/g)].length >= 14);
  assert.ok([...figure.matchAll(/baseline-shift="super"/g)].length >= 4);
  assert.doesNotMatch(figure, /[RΘ]ᴺ|[RΘ]ᴺ₋₁|[RΘ]ᴺ⁻¹/);

  for (const layout of ["desktop", "mobile"]) {
    const svgMatch = figure.match(new RegExp(`<svg[^>]*data-figure-layout="${layout}"[^>]*>[\\s\\S]*?<\\/svg>`));
    assert.ok(svgMatch, `${layout} SVG exists`);
    const svg = svgMatch[0];
    const axis = tagsWithAttribute(svg, "line", "data-ray-axis", "theta")[0];
    const previous = tagsWithAttribute(svg, "line", "data-ray-intersection", "Theta-N-1")[0];
    const current = tagsWithAttribute(svg, "line", "data-ray-intersection", "Theta-N")[0];
    const exclusion = tagsWithAttribute(svg, "line", "data-outward-exclusion", "t-lambda")[0];

    assertClose(numberAttribute(previous, "x1"), numberAttribute(current, "x1"), `${layout} intervals share zero`);
    assert.ok(numberAttribute(previous, "x2") < numberAttribute(current, "x2"), `${layout} strict radial endpoint order`);
    assert.ok(numberAttribute(current, "x2") < numberAttribute(axis, "x2"), `${layout} axis extends beyond lambda`);
    assert.ok(numberAttribute(exclusion, "x1") > numberAttribute(current, "x2"), `${layout} excluded ray starts beyond lambda`);
    assertClose(numberAttribute(exclusion, "x2"), numberAttribute(axis, "x2"), `${layout} excluded ray reaches axis end`);
  }

  assert.match(text.replace(/\s+/g, ""), /RN−1\(θ\)<RN\(θ\)/);
  assert.match(text, /tλ ∉ Θ N \(t > 1\)/);
  assert.match(text, /Plate VIII\.2\./);
  assert.match(text.replace(/\s+/g, ""), /ΘN−1∩\{reiθ:r≥0\}=\{reiθ:0≤r≤RN−1\(θ\)\}/);
  assert.match(text.replace(/\s+/g, ""), /ΘN∩\{reiθ:r≥0\}=\{reiθ:0≤r≤RN\(θ\)\}/);
  assert.match(text, /every tλ with t>1 lies outside Θ N/i);
});

test("the shared copper figure color meets AA text contrast on the paper backgrounds", async () => {
  const [source, css] = await Promise.all([figureSourcePromise, globalCssPromise]);
  const copper = source.match(/const copper = "(#[0-9a-f]{6})";/i)?.[1];
  const svgPaper = source.match(/const paper = "(#[0-9a-f]{6})";/i)?.[1];
  const sitePaper = css.match(/--paper:\s*(#[0-9a-f]{6});/i)?.[1];

  assert.ok(copper, "shared figure copper is declared as a hex color");
  assert.ok(svgPaper, "SVG paper is declared as a hex color");
  assert.ok(sitePaper, "site paper is declared as a hex color");
  assert.ok(contrastRatio(copper, svgPaper) >= 4.5, "copper meets AA against SVG paper");
  assert.ok(contrastRatio(copper, sitePaper) >= 4.5, "copper meets AA against site paper");
});

test("Topic IX uses its exact responsive Plate conventions", async () => {
  const html = await render("/proof/topic-ix");
  const figure = figureMarkup(html, "farey-five");

  assert.equal([...figure.matchAll(/data-figure-layout="desktop"/g)].length, 1);
  assert.equal([...figure.matchAll(/data-figure-layout="mobile"/g)].length, 1);
  assert.match(figure, /sf-farey-five-mobile-title/);
  assert.match(figure, />Exact rational diagram<\/span>/);
  assert.match(visibleText(figure), /Plate IX\.1\./);
});
