import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const figureSourceUrl = new URL(
  "../app/components/proof/figures/CompletionFigures.tsx",
  import.meta.url,
);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("topic-xiii-figure-test", `${process.pid}-${Date.now()}`);
const workerPromise = import(workerUrl.href).then(({ default: worker }) => worker);

async function render(pathname) {
  const worker = await workerPromise;
  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("Topic XIII plates state the radial, order-three, and induction claims exactly", async () => {
  const source = await readFile(figureSourceUrl, "utf8");
  const radial = source.slice(
    source.indexOf("function RadialBoundary"),
    source.indexOf("function OrderThree"),
  );
  const orderThree = source.slice(
    source.indexOf("function OrderThree"),
    source.indexOf("function Induction"),
  );
  const induction = source.slice(
    source.indexOf("function Induction"),
    source.indexOf("const copy"),
  );

  assert.match(radial, /ρₛ\(u\)u/);
  assert.match(radial, /u∈S¹/);
  assert.match(
    radial,
    /points="558,205 515,94 350,60 168,88 115,205 180,328 360,360 535,315"/,
  );
  for (const endpoint of [
    "558, 205",
    "515, 94",
    "350, 60",
    "168, 88",
    "115, 205",
    "180, 328",
    "360, 360",
    "535, 315",
  ]) {
    assert.match(radial, new RegExp(`\\[335, 205, ${endpoint}\\]`));
  }
  assert.doesNotMatch(radial, /rₛ\(φ\)|continuity turns every/);

  assert.match(orderThree, /Θ₃ = conv/);
  assert.match(orderThree, /∪ \[−1, −1\/2\]/);
  assert.match(orderThree, /\[−1, −1\/2\]<\/text>/);
  assert.doesNotMatch(orderThree, /extra real segment/);

  assert.match(induction, /Case 1: λₙ ∉ Θₙ₋₁/);
  assert.match(induction, /Case 2: λₙ ∈ Θₙ₋₁/);
  assert.match(induction, /Rₙ ≤ Rₙ₋₁ = Kₙ₋₁/);
  assert.match(induction, /≤ Kₙ ≤ Rₙ/);
  assert.match(induction, /Rₙ\(θ\)=Kₙ\(θ\)/);
  assert.doesNotMatch(induction, /non-inherited|inherited/);

  assert.match(source, /Schematic radial geometry — not to scale/);
  assert.match(source, /Exact region — drawn to scale/);
  assert.match(source, /Exact implication diagram/);
  assert.doesNotMatch(source, /Deterministic mathematical plate/);

  const html = await render("/proof/topic-xiii").then((response) => response.text());
  const rendered = html.replace(/<script\b[\s\S]*?<\/script>/gi, " ");
  for (const number of [1, 2, 3]) {
    assert.equal(
      [...rendered.matchAll(new RegExp(`Plate XIII\\.${number}\\.`, "g"))].length,
      1,
      `rendered Plate XIII.${number} appears exactly once`,
    );
  }
  assert.match(rendered, /Schematic radial geometry — not to scale/);
  assert.match(rendered, /Exact region — drawn to scale/);
  assert.match(rendered, /Exact implication diagram/);

  const ids = new Set(
    [...rendered.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
  );
  for (const match of rendered.matchAll(/\baria-labelledby="([^"]+)"/g)) {
    for (const id of match[1].trim().split(/\s+/)) {
      assert.ok(ids.has(id), `Topic XIII ARIA label ${id} resolves`);
    }
  }
});
