import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const figureSource = await readFile(
  new URL("../app/components/proof/figures/StochasticFareyFigures.tsx", import.meta.url),
  "utf8",
);

test("Plate XI.1 distinguishes within-block and inter-block edges", () => {
  assert.match(figureSource, /data-edge-kind="local-return"/);
  assert.match(figureSource, /data-edge-kind="inter-block"/);
  assert.match(figureSource, /data-edge-weight="beta"/);
  assert.match(figureSource, /data-edge-weight="alpha"/);
  assert.match(figureSource, /data-cycle-kind="all-inter-block"/);
  assert.match(figureSource, /cannot be selected together/);
  assert.match(figureSource, /url\(#\$\{marker\}-copper\)/);
});

test("Plate XI.2 labels both exact graph regimes and the subdivided weights", () => {
  assert.match(figureSource, /data-regime="s-le-dq"/);
  assert.match(figureSource, /data-regime="s-gt-dq"/);
  assert.match(figureSource, /data-entry-length="ell-1"/);
  assert.match(figureSource, /data-math-label="ell-1"/);
  assert.match(figureSource, /ℓ₁=s−\(d−1\)q/);
  assert.match(figureSource, /data-edge-kind="subdivided-inter-block"/);
  assert.match(figureSource, /data-edge-weight="one"/);
  assert.match(figureSource, /data-subdivision-vertex="w-1"/);
  assert.match(figureSource, /data-subdivision-vertex="w-K"/);
  assert.match(figureSource, /K=s−dq/);
  assert.match(figureSource, /w₁,…,w<sub>K<\/sub>/);
});

test("Plate XI.3 uses semantic MathML instead of an equation SVG", () => {
  assert.match(figureSource, /data-topic-xi-equation-plate="attainment"/);
  assert.equal([...figureSource.matchAll(/<math aria-label="[^"]+" display="block">/g)].length, 3);
  assert.match(figureSource, /<msub><mi>R<\/mi><mi>N<\/mi><\/msub>/);
  assert.match(figureSource, /<msub><mi>ρ<\/mi><mo>∗<\/mo><\/msub>/);
  assert.match(figureSource, /<msub><mi>α<\/mi><mn>1<\/mn><\/msub>/);
  assert.match(figureSource, /<msub><mi>α<\/mi><mi>d<\/mi><\/msub>/);
  assert.doesNotMatch(figureSource, /<msup><mi>ρ<\/mi><mo>∗<\/mo><\/msup>/);
  assert.doesNotMatch(figureSource, /kind === "squeeze"/);
});
