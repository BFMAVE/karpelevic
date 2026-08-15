import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const outputRoot = path.join(projectRoot, "pages-out");
const visibleTextFromHtml = (html) =>
  html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<annotation\b[\s\S]*?<\/annotation>/gi, " ")
    .replace(/<[^>]*>/g, " ");
const pages = [
  ["index.html", "Under construction"],
  ["history/index.html", "How a geometric question became an arithmetic boundary"],
  ["journey/index.html", "An eigenvalue region for Leslie matrices"],
  ["proof/index.html", "How the Proof Works"],
  [
    "proof/topic-ii/index.html",
    "From convex order to contact on every side",
  ],
  [
    "proof/topic-iii/index.html",
    "Half-open boundary assignments and edge clipping",
  ],
  [
    "proof/topic-iv/index.html",
    "From endpoint order to one interval of relative-interior contacts",
  ],
  [
    "proof/topic-v/index.html",
    "Rotation arithmetic, the first-return decomposition, and projective preparation",
  ],
  [
    "prerequisites/index.html",
    "The small library this reader assumes",
  ],
];

for (const [relativePath, expectedText] of pages) {
  const html = await readFile(path.join(outputRoot, relativePath), "utf8");

  assert.match(html, new RegExp(expectedText));
  assert.doesNotMatch(html, /(?:href|src)="\/assets\//);
  assert.doesNotMatch(html, /<script\b[^>]*>self\.__VINEXT/);
  assert.match(html, /\/karpelevic\/assets\//);
  assert.match(html, /\/karpelevic\/contact\.js/);
  if (relativePath === "proof/index.html") {
    assert.match(html, /\/karpelevic\/proof\.js/);
  } else {
    assert.doesNotMatch(html, /\/karpelevic\/proof\.js/);
  }
  if (relativePath.startsWith("proof/topic-")) {
    assert.match(html, /\/karpelevic\/proof-chapter\.js/);
  } else {
    assert.doesNotMatch(html, /\/karpelevic\/proof-chapter\.js/);
  }
}

for (const relativePath of [
  "proof/index.html",
  "proof/topic-ii/index.html",
  "proof/topic-iii/index.html",
  "proof/topic-iv/index.html",
  "proof/topic-v/index.html",
]) {
  const html = await readFile(path.join(outputRoot, relativePath), "utf8");
  assert.match(html, /Forthcoming/);
  assert.doesNotMatch(
    html,
    /href="\/karpelevic\/proof\/topic-(?:vi(?:\/[ab])?|vii|viii|ix|x|xi|xii(?:\/[ab])?|xiii|xiv)\//,
  );
}

{
  const html = await readFile(
    path.join(outputRoot, "proof/topic-iii/index.html"),
    "utf8",
  );
  const visibleText = visibleTextFromHtml(html);
  assert.match(html, /data-proof-route="topic-iii"/);
  assert.match(html, /Assignment to half-open sides/);
  assert.match(html, /This is only the membership statement/);
  assert.match(html, /Positive closed and open boundary arcs/);
  assert.match(html, /Discarded arc and old-vertex count/);
  assert.doesNotMatch(
    visibleText,
    /labelled boundary slot|ownership word|zero-side signature|radius-one anchor|cyclic shift[^<]*κ and source vertex|strict mixture|shared-side edge|source shelf|support gap|boundary mixture|collinear candidates|closed dependency chain|Nothing is smuggled|\bcap(?:s|ped|ping)?\b/i,
  );
}

{
  const html = await readFile(
    path.join(outputRoot, "proof/topic-iv/index.html"),
    "utf8",
  );
  const visibleText = visibleTextFromHtml(html);
  assert.match(html, /data-proof-route="topic-iv"/);
  assert.match(html, /Topic IV at a glance/);
  assert.match(html, /The proof in four steps/);
  assert.match(html, /Standing assumptions for the half-open contact data/);
  assert.match(html, /\(A0\)/);
  assert.match(html, /\(A1\)/);
  assert.match(html, /\(A4\)/);
  assert.match(html, /Multiplication by λ is <i>N<\/i>-critical/);
  assert.doesNotMatch(html, /assumptions \(A1\)–\(A4\)/);
  assert.match(html, /The label-preserving bijection b/);
  assert.match(html, /The cyclic permutation σ/);
  assert.match(
    visibleText,
    /Write\s+comp\(\s*S\s*\)\s+for the number of connected components/i,
  );
  assert.match(html, /φ=\|<i>S<\/i>\|/);
  assert.match(html, /Standing assumption for Section 5/);
  assert.equal(
    [...html.matchAll(/\sid="eq:kappa-proper"/g)].length,
    1,
    "Equation 4.18 must have exactly one permalink target.",
  );
  assert.equal(
    [...html.matchAll(/aria-label="Equation 4\.18, permalink"/g)].length,
    1,
    "Equation 4.18 must be visibly rendered exactly once.",
  );
  assert.match(html, /aria-label="Equation 5\.11, permalink"/);
  assert.match(html, /Plate IV\.1/);
  assert.match(html, /Plate IV\.5/);
  assert.match(html, /Exact finite example/);
  assert.match(html, /Exact geometric configuration/);
  assert.match(html, /Schematic lifted-angle example with κ=3/);
  assert.match(html, /hollow circle is the excluded left endpoint Θ₂/);
  assert.match(html, /Schematic local geometry · exact symbolic update/);
  assert.match(html, /No numerical contact system is asserted by the plate/);
  assert.doesNotMatch(html, /S=\{1\}/);
  assert.match(html, /Exact finite arithmetic example/);
  assert.match(html, /Q=λP/);
  assert.match(html, /S=\{4,5,6,7\}/);
  assert.match(html, /θ=arg<sub>\+<\/sub>\(λ\)∈\(0,2π\)/);
  assert.match(
    html,
    /Thus every image vertex belongs to exactly one half-open side, and every half-open side contains exactly one image vertex\./,
  );
  assert.match(html, /proof-chapter\.js/);
  assert.doesNotMatch(
    visibleText,
    /\b(?:field|fields|ledger|ownership|owned|owns|certificate|audit|chip|chips|boolean board|mutation|mutations|surgery|surgeries|block|blocks|score|scores|collision|collisions|strict landing|strict side|strict sides|strict-index|edge-cap|controlled reflection|endpoint path)\b/i,
  );
}

{
  const html = await readFile(
    path.join(outputRoot, "proof/topic-v/index.html"),
    "utf8",
  );
  const visibleText = visibleTextFromHtml(html);
  assert.match(html, /data-proof-route="topic-v"/);
  assert.match(html, /Polygon and contact notation imported from Topic IV/);
  assert.match(html, /Theorem 6\.1/);
  assert.match(html, /Proposition 7\.3/);
  assert.match(html, /Definition 7\.4/);
  assert.match(html, /Plate V\.1/);
  assert.match(html, /Plate V\.4/);
  assert.match(html, /data-incidence-count="8"/);
  assert.match(html, /data-incidence-verified="true"/);
  assert.match(visibleText, /unimodular record-vector chain/i);
  assert.match(visibleText, /does not yet prove Δ=1/i);
  assert.match(visibleText, /Exceptional case N=3/);
  assert.match(
    visibleText,
    /This is the precise bridge to the record terminology used below/i,
  );
  assert.match(
    visibleText,
    /every earlier residue is smaller, and its deficit is therefore\s+φ/i,
  );
  assert.match(
    visibleText,
    /declared time-zero record, whose deficit is\s+N\s*=\s*φ/i,
  );
  assert.match(visibleText, /M∖\{b\*\}/);
  assert.match(visibleText, /ω\(z\)≥ε₀ for every z∈P/);
  assert.match(visibleText, /All results assigned to this topic are proved/);
  assert.doesNotMatch(visibleText, /Supporting lines at the return vertices/i);
  assert.doesNotMatch(visibleText, /These are all three eigenvalues/i);
  assert.doesNotMatch(visibleText, /M°/);
  assert.doesNotMatch(
    visibleText,
    /\b(?:field|fields|ledger|ownership|owned|owns|seed|anchor|anchors|conservation law|virtual short return|corridor holonomy|strict convex polygon|strict convexity)\b/i,
  );
  assert.doesNotMatch(
    visibleText,
    /vertices are exactly the upper-record vectors|corresponding primitive lattice vectors form the visible sail/i,
  );
}

await access(path.join(outputRoot, "favicon.svg"));
await access(path.join(outputRoot, "contact.js"));
await access(path.join(outputRoot, "proof.js"));
await access(path.join(outputRoot, "proof-chapter.js"));
await access(path.join(outputRoot, ".nojekyll"));

await assert.rejects(access(path.join(outputRoot, ".vite")));
await assert.rejects(access(path.join(outputRoot, "code")));
await assert.rejects(access(path.join(outputRoot, "proof/topic-vi")));
const publicAssetEntries = await readdir(path.join(outputRoot, "assets"));
assert.equal(
  publicAssetEntries.some((entry) => entry.endsWith(".js")),
  false,
  "The public static asset directory must not expose later-topic client bundles.",
);
