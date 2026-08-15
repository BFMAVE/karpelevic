import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("topic-vi-figure-controls", `${process.pid}-${Date.now()}`);
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

function groupedLines(figure, role) {
  return [
    ...figure.matchAll(
      new RegExp(`<g data-figure-line="${role}">([\\s\\S]*?)<\\/g>`, "g"),
    ),
  ].map((match) => match[1]);
}

test("proof controls say explicitly that they open and close proofs", async () => {
  const html = await render("/proof/topic-vi");

  assert.match(
    html,
    /<button[^>]*data-chapter-proofs="open"[^>]*>\s*Open all proofs\s*<\/button>/,
  );
  assert.match(
    html,
    /<button[^>]*data-chapter-proofs="close"[^>]*>\s*Close all proofs\s*<\/button>/,
  );
  assert.doesNotMatch(html, />\s*(?:Open|Close) all\s*<\/button>/);
});

test("Plate VI.2 attaches each equation label to the line it defines", async () => {
  const html = await render("/proof/topic-vi");
  const figure = figureMarkup(html, "holonomy-escape");
  const closingLines = groupedLines(figure, "moving-closing-line");
  const contactLines = groupedLines(figure, "final-contact-line");

  assert.equal(closingLines.length, 2, "desktop and mobile closing lines");
  assert.equal(contactLines.length, 2, "desktop and mobile final contact lines");
  for (const line of closingLines) {
    assert.match(line, /𝒮\(·,τ\)=0/);
    assert.doesNotMatch(line, /K=aff/);
  }
  for (const line of contactLines) {
    assert.match(line, /K=aff\(Cₘ,Cₘ₊₁\)/);
    assert.doesNotMatch(line, /𝒮\(·,τ\)=0/);
  }

  assert.match(figure, /d\(t,τ\)=𝒮\(z\(t\),τ\)/);
  assert.doesNotMatch(figure, /D̃|D\(t,τ\)/);
});

test("Plate VI.3 uses its own arrow marker and the proof's side index", async () => {
  const html = await render("/proof/topic-vi");
  const figure = figureMarkup(html, "topic-vi-return-partition");
  const markerReferences = [
    ...figure.matchAll(/marker-end="url\(#([^)]+)\)"/g),
  ].map((match) => match[1]);

  assert.equal(markerReferences.length, 4);
  assert.deepEqual(
    new Set(markerReferences),
    new Set(["advanced-arrow-topic-vi-return-partition"]),
  );
  assert.match(figure, /side index k∈D/);
  assert.match(figure, /condition on return index s\(k\)=r⁻¹\(k\)/);
  assert.match(figure, /s\(k\)∉M/);
  assert.doesNotMatch(figure, /target j|s\(j\)/);
});

test("Plate V.3 retains its notation and its own arrow marker", async () => {
  const html = await render("/proof/topic-v");
  const figure = figureMarkup(html, "global-ledger");
  const markerReferences = [
    ...figure.matchAll(/marker-end="url\(#([^)]+)\)"/g),
  ].map((match) => match[1]);

  assert.equal(markerReferences.length, 4);
  assert.deepEqual(
    new Set(markerReferences),
    new Set(["advanced-arrow-global-ledger"]),
  );
  assert.match(figure, /target j∈D/);
  assert.match(figure, /s\(j\)∉M/);
  assert.doesNotMatch(figure, /side index k|condition on return index s\(k\)|s\(k\)/);
});
