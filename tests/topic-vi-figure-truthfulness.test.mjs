import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("topic-vi-figure-truthfulness", `${process.pid}-${Date.now()}`);
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
    .replace(/\s+/g, " ");
}

test("Plate VI.4 shows unjoined extreme-point locations without a false image polygon", async () => {
  const html = await render("/proof/topic-vi");
  const figure = figureMarkup(html, "unit-return");

  assert.equal(
    [...figure.matchAll(/<polygon class="topic-ii-figure-polygon"/g)].length,
    2,
    "the desktop and mobile layouts each contain only the outer polygon",
  );
  assert.doesNotMatch(figure, /<polygon class="topic-ii-figure-polar"|<polyline/);
  assert.doesNotMatch(figure, /<text[^>]*>\s*λP|\(schematic\)|inner polygon|not drawn to scale/i);
  assert.equal(
    [...figure.matchAll(/data-extreme-point-location="boundary"/g)].length,
    16,
    "eight boundary locations appear in each layout",
  );
  assert.equal(
    [...figure.matchAll(/data-extreme-point-location="interior"/g)].length,
    2,
    "one interior location appears in each layout",
  );
  assert.equal(
    [...figure.matchAll(/data-locations-joined="false"/g)].length,
    2,
  );
  assert.match(visibleText(figure), /no metric realization (?:is )?asserted/i);
  assert.match(visibleText(figure), /unjoined markers represent locations of extreme points/i);
});

test("Plate VI.2 identifies the positive half-plane by an explicit cyclic-order witness", async () => {
  const html = await render("/proof/topic-vi");
  const figure = figureMarkup(html, "holonomy-escape");

  assert.equal(
    [...figure.matchAll(/data-half-plane-witness="X_m-1"/g)].length,
    2,
    "the witness appears in both layouts",
  );
  assert.match(visibleText(figure), /reference segment from 0 to 1/i);
  assert.match(visibleText(figure), /unchanged cyclic order puts Xₘ₋₁\(τ\) in this half-plane/i);
  assert.doesNotMatch(visibleText(figure), /calibration interval|calibration points/i);
});

test("Plate VI.3 names its side and return indices literally while Plate V.3 is unchanged", async () => {
  const topicVIHtml = await render("/proof/topic-vi");
  const topicVIFigure = figureMarkup(topicVIHtml, "topic-vi-return-partition");
  assert.match(topicVIFigure, /side index k/);
  assert.match(topicVIFigure, /condition on return index s\(k\)=r⁻¹\(k\)/);
  assert.match(topicVIFigure, /side index k∈D/);
  assert.doesNotMatch(topicVIFigure, /target membership|inverse-source condition/);

  const topicVHtml = await render("/proof/topic-v");
  const topicVFigure = figureMarkup(topicVHtml, "global-ledger");
  assert.match(topicVFigure, /target membership/);
  assert.match(topicVFigure, /inverse-source condition/);
  assert.match(topicVFigure, /target j∈D/);
  assert.doesNotMatch(topicVFigure, /side index k|return index s\(k\)/);
});

test("Plate VI.1 presents coordinate checks as illustration and separates its mobile labels", async () => {
  const topicVIHtml = await render("/proof/topic-vi");
  const topicVIFigure = figureMarkup(topicVIHtml, "topic-vi-projective-chain");
  const topicVIText = visibleText(topicVIFigure);

  assert.match(topicVIText, /adapted numerical incidence illustration/i);
  assert.match(topicVIText, /supports? the internal consistency/i);
  assert.match(topicVIText, /projective statement is proved independently/i);
  assert.doesNotMatch(topicVIText, /incidence[- ]verified/i);
  assert.equal(
    [...topicVIFigure.matchAll(/data-topic-vi-mobile-labels="separated"/g)].length,
    1,
  );

  const topicVHtml = await render("/proof/topic-v");
  const topicVFigure = figureMarkup(topicVHtml, "projective-corridor");
  assert.doesNotMatch(topicVFigure, /data-topic-vi-mobile-labels/);
  assert.match(visibleText(topicVFigure), /Plate V\.4/);
});
