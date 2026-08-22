import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const [figureSource, formalSource, readerSource, chapterSource, globalCss] = await Promise.all([
  readFile(
    new URL("../app/components/proof/figures/StochasticFareyFigures.tsx", import.meta.url),
    "utf8",
  ),
  readFile(new URL("../app/data/part-ii-content.generated.ts", import.meta.url), "utf8"),
  readFile(new URL("../app/data/topics-viii-xi-reader.tsx", import.meta.url), "utf8"),
  readFile(new URL("../app/data/proof-topics/topics-viii-xi.tsx", import.meta.url), "utf8"),
  readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
]);

test("Topic XI keeps the compact-curve, exceptional, and indexed-parameter repairs", () => {
  assert.match(formalSource, /Stochastic realization of the compact candidate arc/);
  assert.ok(
    formalSource.includes("\\\\Gamma_{f,g}^{(n)}\\\\subseteq\\\\Theta_n"),
    "Corollary II.7.4 states the full compact-curve inclusion",
  );
  assert.ok(
    formalSource.includes("\\\\alpha=-\\\\lambda(\\\\lambda+1)\\\\in[0,1/4]"),
    "the exceptional order-three segment has its explicit parameter",
  );
  assert.ok(
    formalSource.includes("[-1,-1/2]\\\\subseteq\\\\Theta_3"),
    "the exceptional real segment is included in Theta 3",
  );
  assert.ok(
    formalSource.includes("\\\\alpha_1=\\\\cdots=\\\\alpha_d=\\\\alpha=1-\\\\beta"),
    "Corollary II.6.2 records every indexed alpha parameter",
  );

  for (const fragment of [
    "karp:lem:cycle-cover",
    "karp:lem:sparse-cycle-collections",
    "karp:thm:sparse-realization",
    "karp:cor:attainment",
    "karp:cor:equal-profile",
  ]) {
    assert.ok(formalSource.includes(`id=\\"${fragment}\\"`), `formal fragment #${fragment} remains stable`);
    assert.ok(readerSource.includes(`completeHtml("${fragment}")`), `reader card still targets #${fragment}`);
  }
});

test("Topic XI guided prose guards the reviewed boundary cases and visible typos", () => {
  assert.match(readerSource, /α,β∈\(0,1\)/);
  assert.match(readerSource, /for s=dq no adjustment is needed/);
  assert.match(readerSource, /If s=dq, then every ℓⱼ=q and no route is shortened/);
  assert.doesNotMatch(readerSource, /title:\s*"[^"]*&gt;/);
  assert.doesNotMatch(readerSource, /homogeneous equation/i);
  assert.doesNotMatch(readerSource, /equation equation/i);
  assert.doesNotMatch(chapterSource, /If s≤dq, inter-block edges enter some\s+blocks part-way/);
});

test("Plate XI.1 distinguishes within-block and inter-block edges", () => {
  assert.match(figureSource, /data-edge-kind="local-return"/);
  assert.match(figureSource, /data-edge-kind="inter-block"/);
  assert.match(figureSource, /data-edge-weight="beta"/);
  assert.match(figureSource, /data-edge-weight="alpha"/);
  assert.match(figureSource, /data-cycle-kind="all-inter-block"/);
  assert.match(figureSource, /cannot be selected together/);
  assert.match(figureSource, /url\(#\$\{marker\}-copper\)/);
  assert.match(figureSource, /Schematic d=q=3, s=9 instance/);
  assert.match(figureSource, /B\{index \+ 1\}/);
  assert.match(figureSource, /data-terminal-vertex=/);
  assert.match(figureSource, /strokeDasharray="(?:9|10) 6"/);
  assert.doesNotMatch(figureSource, />T\{index \+ 1\}<\/text>/);
});

test("Plate XI.2 labels both exact graph regimes and the subdivided weights", () => {
  assert.match(figureSource, /data-regime="s-lt-dq"/);
  assert.match(figureSource, /data-regime="s-gt-dq"/);
  assert.match(figureSource, /data-entry-length="ell-1"/);
  assert.match(figureSource, /data-traversed-block-suffix="ell-1"/);
  assert.match(figureSource, /data-math-label="ell-1"/);
  assert.match(figureSource, /ℓ₁=s−\(d−1\)q/);
  assert.match(figureSource, /data-boundary-case="s-eq-dq"/);
  assert.match(figureSource, /s=dq: ℓⱼ=q/);
  assert.match(figureSource, /data-edge-kind="subdivided-inter-block"/);
  assert.match(figureSource, /data-edge-weight="one"/);
  assert.match(figureSource, /data-subdivision-vertex="w-1"/);
  assert.match(figureSource, /data-subdivision-vertex="w-K"/);
  assert.match(figureSource, /K=s−dq/);
  assert.match(figureSource, /w₁,…,w<sub>K<\/sub>/);
  assert.match(figureSource, /data-drawn-case="K-ge-2"/);
  assert.match(figureSource, /data-boundary-case="K-1"/);
  assert.match(figureSource, /for K=1, w₁=w<sub>K<\/sub>/);
  assert.doesNotMatch(figureSource, /s ≤ dq: an inter-block edge enters part-way/);
});

test("Plate XI.3 uses semantic MathML instead of an equation SVG", () => {
  assert.match(figureSource, /data-topic-xi-equation-plate="attainment"/);
  assert.equal([...figureSource.matchAll(/<math aria-label="[^"]+" display="block">/g)].length, 3);
  assert.match(figureSource, /<msub><mi>R<\/mi><mi>N<\/mi><\/msub>/);
  assert.match(figureSource, /<msub><mi>ρ<\/mi><mo>∗<\/mo><\/msub>/);
  assert.match(figureSource, /<msub><mi>α<\/mi><mn>1<\/mn><\/msub>/);
  assert.match(figureSource, /<msub><mi>α<\/mi><mi>d<\/mi><\/msub>/);
  assert.match(figureSource, /<msub><mi>α<\/mi><mi>d<\/mi><\/msub><mo>=<\/mo><mn>1<\/mn><mo>−<\/mo><mi>β<\/mi>/);
  assert.match(figureSource, /<mtable columnalign="center" rowspacing="0\.35em">/);
  assert.match(globalCss, /\.topic-xi-attainment-grid\s*\{[\s\S]*?grid-template-columns:\s*minmax\(0, 1fr\)/);
  assert.match(figureSource, /constructs A∈ST<sub>N<\/sub> with ρ\*e<sup>iθ<\/sup>∈σ\(A\)/);
  assert.match(figureSource, /Both bounds are equalities; strict Jensen equality gives the displayed parameter identities/);
  assert.doesNotMatch(figureSource, /Equality activates|makes the candidate radius attainable|gives the outward bound/);
  assert.doesNotMatch(figureSource, /<msup><mi>ρ<\/mi><mo>∗<\/mo><\/msup>/);
  assert.doesNotMatch(figureSource, /kind === "squeeze"/);
});
