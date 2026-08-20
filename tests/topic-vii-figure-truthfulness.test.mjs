import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("topic-vii-figure-truthfulness", `${process.pid}-${Date.now()}`);
const workerPromise = import(workerUrl.href).then(({ default: worker }) => worker);

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
  const title = `<title id="advanced-${kind}-title">`;
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

test("Plate VII.1 uses staggered local-interval layouts on desktop and mobile", async () => {
  const html = await render("/proof/topic-vii");
  const figure = figureMarkup(html, "farey-reflection");

  assert.match(figure, /viewBox="0 0 360 430"/);
  assert.equal(
    [...figure.matchAll(/data-label-layout="staggered"/g)].length,
    4,
    "each of the two rows is staggered in both layouts",
  );
  assert.equal(
    [...figure.matchAll(/data-local-interval-scale="true"/g)].length,
    4,
  );
  assert.equal(
    [...figure.matchAll(/data-label-leader="true"/g)].length,
    12,
    "each fraction has a leader in both layouts",
  );

  for (const fraction of ["1/3", "3/8", "2/5", "3/5", "5/8", "2/3"]) {
    assert.equal(
      [...figure.matchAll(new RegExp(`data-farey-label="${fraction}"`, "g"))].length,
      2,
      `${fraction} appears once per layout`,
    );
  }

  const markerReferences = [
    ...figure.matchAll(/marker-end="url\(#([^)]+)\)"/g),
  ].map((match) => match[1]);
  assert.deepEqual(
    new Set(markerReferences),
    new Set(["advanced-arrow-farey-reflection", "advanced-arrow-farey-reflection-mobile"]),
  );
  assert.match(visibleText(figure), /reflection reverses (?:the interval and maps|the order)/i);
});

test("Plate VII.2 shows the half-open factor path and its argument range", async () => {
  const html = await render("/proof/topic-vii");
  const figure = figureMarkup(html, "jensen-sheet");
  const compactText = visibleText(figure).replace(/\s+/g, "");

  assert.match(figure, /viewBox="0 0 360 420"/);
  assert.equal([...figure.matchAll(/data-coordinate-axis="real"/g)].length, 2);
  assert.equal([...figure.matchAll(/data-coordinate-axis="imaginary"/g)].length, 2);
  assert.equal(
    [...figure.matchAll(/data-endpoint="mu-q" data-inclusion="included"/g)].length,
    2,
  );
  assert.equal(
    [...figure.matchAll(/data-endpoint="mu-q-minus-one" data-inclusion="excluded"/g)].length,
    2,
  );
  assert.equal(
    [...figure.matchAll(/data-parameter-direction="beta-up-to-one"/g)].length,
    2,
  );
  assert.ok(
    [...figure.matchAll(/<tspan baseline-shift="super" font-size="(?:11|12)">q<\/tspan>/g)].length >= 8,
    "powers of mu use SVG superscripts in both layouts",
  );
  assert.match(compactText, /A≤arg\(μq−β\)<M<π/);
  assert.match(visibleText(figure), /β ↑ 1/);
  assert.match(visibleText(figure), /filled endpoint μ\^q corresponds to β=0/i);
  assert.match(visibleText(figure), /open endpoint μ\^q−1 is approached as β↑1/i);

  const directionArrows = [
    ...figure.matchAll(/<path[^>]*data-parameter-direction="beta-up-to-one"[^>]*marker-end="url\(#([^)]+)\)"/g),
  ].map((match) => match[1]);
  assert.deepEqual(directionArrows, [
    "advanced-arrow-jensen-sheet",
    "advanced-arrow-jensen-sheet-mobile",
  ]);
});
