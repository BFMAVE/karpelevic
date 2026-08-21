import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("topic-x-figure-truthfulness", `${process.pid}-${Date.now()}`);
const workerPromise = import(workerUrl.href).then(({ default: worker }) => worker);

async function render(pathname) {
  const worker = await workerPromise;
  const response = await worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  assert.equal(response.status, 200);
  return response.text();
}

function figureMarkup(html, kind) {
  const titleIndex = html.indexOf(`<title id="sf-${kind}-title">`);
  assert.notEqual(titleIndex, -1, `${kind} title exists`);
  const start = html.lastIndexOf("<figure", titleIndex);
  const end = html.indexOf("</figure>", titleIndex);
  assert.ok(start >= 0 && end > titleIndex, `${kind} figure is complete`);
  return html.slice(start, end + "</figure>".length);
}

function svgMarkup(figure, layout) {
  const markerIndex = figure.indexOf(`data-figure-layout="${layout}"`);
  assert.notEqual(markerIndex, -1, `${layout} layout exists`);
  const start = figure.lastIndexOf("<svg", markerIndex);
  const end = figure.indexOf("</svg>", markerIndex);
  return figure.slice(start, end + "</svg>".length);
}

function tagsWithAttribute(markup, tag, name, value) {
  return [...markup.matchAll(new RegExp(`<${tag}[^>]*>`, "g"))]
    .map((match) => match[0])
    .filter((candidate) => candidate.includes(`${name}="${value}"`));
}

function attribute(tag, name) {
  const match = tag.match(new RegExp(`${name}="([^"]+)"`));
  assert.ok(match, `${name} exists on ${tag}`);
  return match[1];
}

function numberAttribute(tag, name) {
  return Number(attribute(tag, name));
}

function assertClose(actual, expected, message, epsilon = 1e-8) {
  assert.ok(Math.abs(actual - expected) <= epsilon, `${message}: ${actual} != ${expected}`);
}

function visibleText(markup) {
  return markup
    .replace(/<[^>]*>/g, " ")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&")
    .replace(/\s+/g, " ");
}

function assertAccessibleLayouts(figure, kind, mobileViewBox) {
  assert.match(figure, new RegExp(`aria-labelledby="sf-${kind}-title sf-${kind}-desc"`));
  assert.match(figure, new RegExp(`aria-labelledby="sf-${kind}-mobile-title sf-${kind}-mobile-desc"`));
  assert.equal([...figure.matchAll(/data-figure-layout="(?:desktop|mobile)"/g)].length, 2);
  const ids = [...figure.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length, `${kind} uses unique SVG IDs`);

  const mobile = svgMarkup(figure, "mobile");
  assert.match(mobile, new RegExp(`viewBox="${mobileViewBox}"`));
  const opening = mobile.slice(0, mobile.indexOf(">") + 1);
  const minimum = numberAttribute(opening, "data-mobile-min-label-size");
  assert.ok(minimum >= 16);
  for (const textTag of [...mobile.matchAll(/<text[^>]*>/g)].map((match) => match[0])) {
    assert.ok(numberAttribute(textTag, "font-size") >= minimum);
  }
}

test("Plate X.1 shows the order-reversing Farey reflection and complex conjugation", async () => {
  const figure = figureMarkup(await render("/proof/topic-x"), "reflection");
  assertAccessibleLayouts(figure, "reflection", "0 0 320 500");
  const text = visibleText(figure);
  assert.match(text, /p\/q < y < r\/s/);
  assert.match(text, /\(s−r\)\/s < x < \(q−p\)\/q/);
  assert.match(text, /p\/q maps to \(q−p\)\/q/);
  assert.match(text, /r\/s maps to \(s−r\)\/s/);
  assert.match(text, /\|μ\|=\|λ\|/);
  assert.match(text, /Rational-row spacings are schematic/);

  for (const layout of ["desktop", "mobile"]) {
    const svg = svgMarkup(figure, layout);
    assert.equal([...svg.matchAll(/data-farey-endpoint=/g)].length, 4);
    const firstMap = tagsWithAttribute(svg, "path", "data-reflection-map", "p/q-to-(q-p)/q")[0];
    const secondMap = tagsWithAttribute(svg, "path", "data-reflection-map", "r/s-to-(s-r)/s")[0];
    assert.ok(firstMap && secondMap);
    assert.equal(attribute(firstMap, "data-source-denominator"), attribute(firstMap, "data-target-denominator"));
    assert.equal(attribute(secondMap, "data-source-denominator"), attribute(secondMap, "data-target-denominator"));
    const firstCoordinates = [...attribute(firstMap, "d").matchAll(/-?\d+(?:\.\d+)?/g)].map((match) => Number(match[0]));
    const secondCoordinates = [...attribute(secondMap, "d").matchAll(/-?\d+(?:\.\d+)?/g)].map((match) => Number(match[0]));
    assert.ok(firstCoordinates[0] < firstCoordinates[2], `${layout}: p/q crosses right`);
    assert.ok(secondCoordinates[0] > secondCoordinates[2], `${layout}: r/s crosses left`);

    const axis = tagsWithAttribute(svg, "line", "data-complex-axis", "real")[0];
    const origin = tagsWithAttribute(svg, "circle", "data-complex-origin", "true")[0];
    const lambda = tagsWithAttribute(svg, "circle", "data-complex-point", "lambda")[0];
    const mu = tagsWithAttribute(svg, "circle", "data-complex-point", "mu")[0];
    const axisY = numberAttribute(axis, "y1");
    assertClose(numberAttribute(axis, "y2"), axisY, `${layout}: real axis horizontal`);
    assertClose(numberAttribute(lambda, "cx"), numberAttribute(mu, "cx"), `${layout}: conjugates share real part`);
    assertClose(numberAttribute(lambda, "cy") + numberAttribute(mu, "cy"), 2 * axisY, `${layout}: conjugates are axis-symmetric`);
    const originX = numberAttribute(origin, "cx");
    const originY = numberAttribute(origin, "cy");
    const lambdaRadius = Math.hypot(numberAttribute(lambda, "cx") - originX, numberAttribute(lambda, "cy") - originY);
    const muRadius = Math.hypot(numberAttribute(mu, "cx") - originX, numberAttribute(mu, "cy") - originY);
    assertClose(lambdaRadius, muRadius, `${layout}: conjugates have equal modulus`);
  }
});

test("Plate X.2 depicts a strictly convex graph below its secant at the mean", async () => {
  const figure = figureMarkup(await render("/proof/topic-x"), "jensen");
  assertAccessibleLayouts(figure, "jensen", "0 0 320 410");
  const text = visibleText(figure);
  assert.match(text, /F\(\(u₁\+u₂\)\/2\)<\(F\(u₁\)\+F\(u₂\)\)\/2/);
  assert.match(text, /F\(\(Σuⱼ\)\/d\)≤ΣF\(uⱼ\)\/d/);
  assert.match(text, /equality exactly when u₁=⋯=u_d/);
  assert.doesNotMatch(text, /Strict convexity makes the parameters constant|u₃/);

  for (const layout of ["desktop", "mobile"]) {
    const svg = svgMarkup(figure, layout);
    const curve = tagsWithAttribute(svg, "path", "data-jensen-curve", "quadratic")[0];
    const values = [...attribute(curve, "d").matchAll(/-?\d+(?:\.\d+)?/g)].map((match) => Number(match[0]));
    assert.equal(values.length, 6);
    const [x0, y0, cx, cy, x2, y2] = values;
    assertClose(cx, (x0 + x2) / 2, `${layout}: control abscissa is centered`);
    assert.ok(y0 - 2 * cy + y2 < 0, `${layout}: screen-coordinate curvature represents mathematical convexity`);

    const secant = tagsWithAttribute(svg, "line", "data-jensen-secant", "two-input")[0];
    assertClose(numberAttribute(secant, "x1"), x0, `${layout}: secant starts on graph`);
    assertClose(numberAttribute(secant, "y1"), y0, `${layout}: secant starts on graph`);
    assertClose(numberAttribute(secant, "x2"), x2, `${layout}: secant ends on graph`);
    assertClose(numberAttribute(secant, "y2"), y2, `${layout}: secant ends on graph`);

    const graphMean = tagsWithAttribute(svg, "circle", "data-jensen-mean", "graph")[0];
    const secantMean = tagsWithAttribute(svg, "circle", "data-jensen-mean", "secant")[0];
    const expectedGraphY = (y0 + 2 * cy + y2) / 4;
    const expectedSecantY = (y0 + y2) / 2;
    assertClose(numberAttribute(graphMean, "cx"), numberAttribute(secantMean, "cx"), `${layout}: means have same abscissa`);
    assertClose(numberAttribute(graphMean, "cy"), expectedGraphY, `${layout}: graph mean lies on quadratic`);
    assertClose(numberAttribute(secantMean, "cy"), expectedSecantY, `${layout}: secant midpoint is exact`);
    assert.ok(numberAttribute(graphMean, "cy") > numberAttribute(secantMean, "cy"), `${layout}: graph lies below secant in y-down coordinates`);
  }
});
