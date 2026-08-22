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
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
const pages = [
  ["index.html", "Under construction"],
  ["history/index.html", "How a geometric question became an arithmetic boundary"],
  ["journey/index.html", "An eigenvalue region for Leslie matrices"],
  ["proof/index.html", "How the Proof Works"],
  [
    "proof/topic-ii/index.html",
    "Support inequalities and boundary contact",
  ],
  [
    "proof/topic-iii/index.html",
    "Half-open sides and image-edge half-plane intersections",
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
    "proof/topic-vi/index.html",
    "A projective deformation and the first-return step Δ = 1",
  ],
  [
    "proof/topic-vii/index.html",
    "Consecutive Farey fractions and the finite product equation for N≥4",
  ],
  [
    "proof/topic-viii/index.html",
    "Returning to stochastic eigenvalue regions",
  ],
  [
    "proof/topic-ix/index.html",
    "Candidate curves from the Ito equation on Farey intervals",
  ],
  [
    "proof/topic-x/index.html",
    "The radial upper bound and its equality case",
  ],
  [
    "proof/topic-xi/index.html",
    "Explicit stochastic realization of the candidate curve",
  ],
  [
    "proof/topic-xii/index.html",
    "From local Farey comparisons to global monotonicity",
  ],
  [
    "proof/topic-xiii/index.html",
    "The Karpelevič theorem in Ito’s formulation",
  ],
  [
    "proof/topic-xiv/index.html",
    "The complete order-seven example and an interactive boundary plot",
  ],
  [
    "prerequisites/index.html",
    "The background used in Topic I",
  ],
];

const firstPublicationDates = new Map([
  ["index.html", "28 July 2026"],
  ["history/index.html", "28 July 2026"],
  ["journey/index.html", "28 July 2026"],
  ["prerequisites/index.html", "29 July 2026"],
  ["proof/index.html", "29 July 2026"],
  ["proof/topic-ii/index.html", "6 August 2026"],
  ["proof/topic-iii/index.html", "13 August 2026"],
  ["proof/topic-iv/index.html", "13 August 2026"],
  ["proof/topic-v/index.html", "14 August 2026"],
  ["proof/topic-vi/index.html", "15 August 2026"],
  ["proof/topic-vii/index.html", "20 August 2026"],
  ["proof/topic-viii/index.html", "20 August 2026"],
  ["proof/topic-ix/index.html", "20 August 2026"],
  ["proof/topic-x/index.html", "21 August 2026"],
  ["proof/topic-xi/index.html", "22 August 2026"],
  ["proof/topic-xii/index.html", "22 August 2026"],
  ["proof/topic-xiii/index.html", "22 August 2026"],
  ["proof/topic-xiv/index.html", "22 August 2026"],
]);

for (const [relativePath, expectedText] of pages) {
  const html = await readFile(path.join(outputRoot, relativePath), "utf8");
  const visibleText = visibleTextFromHtml(html);

  assert.match(html, new RegExp(expectedText));
  assert.match(visibleText, /Website online since\s+28 July 2026/);
  assert.match(visibleText, /Last revised\s+\d{1,2} [A-Z][a-z]+ 20\d{2}/);
  assert.doesNotMatch(visibleText, /Site build|Last updated/);
  if (firstPublicationDates.has(relativePath)) {
    assert.match(
      visibleText,
      new RegExp(`First published\\s+${firstPublicationDates.get(relativePath)}`),
    );
  }
  assert.doesNotMatch(html, /(?:href|src)="\/assets\//);
  assert.doesNotMatch(html, /<script\b[^>]*>self\.__VINEXT/);
  assert.match(html, /\/karpelevic\/assets\//);
  assert.match(html, /\/karpelevic\/contact\.js/);
  if (relativePath === "proof/index.html") {
    assert.match(html, /\/karpelevic\/proof\.js/);
  } else {
    assert.doesNotMatch(html, /\/karpelevic\/proof\.js/);
  }
  if (
    relativePath.startsWith("proof/topic-") &&
    relativePath !== "proof/topic-xiv/index.html"
  ) {
    assert.match(html, /\/karpelevic\/proof-chapter\.js/);
  } else {
    assert.doesNotMatch(html, /\/karpelevic\/proof-chapter\.js/);
  }
  if (relativePath === "proof/topic-xiv/index.html") {
    assert.match(html, /\/karpelevic\/topic-xiv\.js/);
  } else {
    assert.doesNotMatch(html, /\/karpelevic\/topic-xiv\.js/);
  }
}

{
  const html = await readFile(path.join(outputRoot, "index.html"), "utf8");
  const visibleText = visibleTextFromHtml(html);
  assert.match(visibleText, /Published on Zenodo/);
  assert.match(visibleText, /24 July 2026/);
  assert.match(visibleText, /Website edition/);
  assert.match(visibleText, /Last revised\s+22 August 2026/);
  assert.match(visibleText, /108-page site-hosted PDF/);
  assert.doesNotMatch(html, />Prepared</);
}

for (const [relativePath, target, message] of [
  [
    "proof/topic-vi/a/index.html",
    "/karpelevic/proof/topic-vi/#lem:holonomy-calibration",
    "Topic VI is now one chapter",
  ],
  [
    "proof/topic-vi/b/index.html",
    "/karpelevic/proof/topic-vi/#lem:deformation-admissibility",
    "Topic VI is now one chapter",
  ],
  [
    "proof/topic-xii/a/index.html",
    "/karpelevic/proof/topic-xii/",
    "Topic XII is now one continuous chapter",
  ],
  [
    "proof/topic-xii/b/index.html",
    "/karpelevic/proof/topic-xii/#karp:lem:nesting-case-split",
    "Topic XII is now one continuous chapter",
  ],
]) {
  const html = await readFile(path.join(outputRoot, relativePath), "utf8");
  assert.match(html, new RegExp(message));
  assert.match(html, new RegExp(target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.doesNotMatch(html, /<script\b/i);
}

for (const relativePath of [
  "proof/index.html",
  "proof/topic-ii/index.html",
  "proof/topic-iii/index.html",
  "proof/topic-iv/index.html",
  "proof/topic-v/index.html",
  "proof/topic-vi/index.html",
  "proof/topic-vii/index.html",
  "proof/topic-viii/index.html",
  "proof/topic-ix/index.html",
  "proof/topic-x/index.html",
  "proof/topic-xi/index.html",
  "proof/topic-xii/index.html",
  "proof/topic-xiii/index.html",
  "proof/topic-xiv/index.html",
]) {
  const html = await readFile(path.join(outputRoot, relativePath), "utf8");
  assert.doesNotMatch(html, /Forthcoming/);
  assert.match(html, /href="\/karpelevic\/proof\/topic-xiii\//);
  assert.match(html, /href="\/karpelevic\/proof\/topic-xiv\//);
}

{
  const html = await readFile(
    path.join(outputRoot, "proof/topic-vi/index.html"),
    "utf8",
  );
  const visibleText = visibleTextFromHtml(html);
  assert.match(html, /data-proof-route="topic-vi"/);
  assert.match(html, /Notation and exact facts imported from Topics II–V/);
  assert.match(
    visibleText,
    /Let V be the underlying\s+two-dimensional real vector space/i,
  );
  assert.match(
    visibleText,
    /there are integers q\s*(?:>|&gt;)\s*0 and\s+h\s*≥\s*0/i,
  );
  assert.match(html, /Plate VI\.1/);
  assert.match(html, /Plate VI\.4/);
  assert.match(html, /Numerical illustration/);
  assert.match(html, /Interior image vertex excluded by Theorem 3\.2/);
  assert.match(html, /Open all proofs/);
  assert.match(html, /Close all proofs/);
  assert.doesNotMatch(html, /advanced-arrow-global-ledger[^"']*\)/);
  assert.doesNotMatch(
    visibleText,
    /projective corridor|hereditary saturation|legal mutation|contact surgery|side-continuation|contact rotation|four-set accounting|first principal theorem|image-polygon vertex|invariant replacement polygon/i,
  );
  assert.match(
    html,
    /class="[^"]*proof-topic-control-next[^"]*"[^>]*href="\/karpelevic\/proof\/topic-vii\//,
  );
}

{
  const html = await readFile(
    path.join(outputRoot, "proof/topic-vii/index.html"),
    "utf8",
  );
  const visibleText = visibleTextFromHtml(html);
  assert.match(html, /data-proof-route="topic-vii"/);
  assert.match(html, /Notation and return cases imported from Topics I–VI/);
  assert.match(
    visibleText,
    /arg\s*\+\s*\(z\)\s+denotes the unique\s+argument in \(0,2π\)/i,
  );
  assert.match(
    visibleText,
    /Theorem 1\.4 and equations \(1\.5\)–\(1\.9\) are stated before the three return cases/i,
  );
  assert.match(
    visibleText,
    /All eight result statements and all eight complete proofs remain present exactly once/i,
  );
  assert.match(html, /id="thm:complex-monodromy"/);
  assert.equal(
    [...html.matchAll(/\sid="thm:complex-monodromy"/g)].length,
    1,
    "Theorem 1.4 must have one anchor on Topic VII.",
  );
  assert.equal(
    [...html.matchAll(/\sid="eq:hetero-parameters"/g)].length,
    1,
    "Equation (1.5) must be stated once on Topic VII.",
  );
  assert.match(html, /id="topic-vii-theorem-1-4-proof"/);
  assert.match(html, /href="\/karpelevic\/proof\/topic-vi\//);
  assert.match(
    html,
    /class="[^"]*proof-topic-control-next[^"]*"[^>]*href="\/karpelevic\/proof\/topic-viii\//,
  );
  assert.doesNotMatch(
    visibleText,
    /heterogeneous Ito product|homogeneous product|signed remainder|Farey carrier|Jensen sheet/i,
  );
}

{
  const html = await readFile(
    path.join(outputRoot, "proof/topic-viii/index.html"),
    "utf8",
  );
  const visibleText = visibleTextFromHtml(html);
  assert.match(html, /data-proof-route="topic-viii"/);
  assert.match(html, /Returning to stochastic eigenvalue regions/i);
  assert.match(html, /id="topic-viii-topic-vii-handoff"/);
  assert.match(html, /href="\/karpelevic\/proof\/topic-vii\/#part-i-item-4"/);
  assert.match(html, /id="topic-viii-radial-function"/);
  assert.match(visibleText, /Let\s+n≥2\s+and\s+θ∈ℝ/i);
  assert.match(visibleText, /compact,\s+hence\s+the\s+maximum\s+is\s+attained/i);
  assert.match(
    visibleText,
    /star-shapedness[\s\S]{0,180}?identifies\s+the\s+whole\s+ray\s+intersection/i,
  );
  assert.match(html, /id="karp:eq:new-shell"/);
  assert.match(html, /id="topic-viii-exact-sources"/);
  assert.doesNotMatch(visibleText, /Rᴺ|Θᴺ/);
  assert.match(
    html,
    /class="[^"]*proof-topic-control-next[^"]*"[^>]*href="\/karpelevic\/proof\/topic-ix\//,
  );
}

{
  const html = await readFile(
    path.join(outputRoot, "proof/topic-ix/index.html"),
    "utf8",
  );
  const visibleText = visibleTextFromHtml(html);
  assert.match(html, /data-proof-route="topic-ix"/);
  assert.match(
    visibleText,
    /Candidate curves from the Ito equation on Farey intervals/i,
  );
  assert.match(visibleText, /row-stochastic/i);
  assert.match(visibleText, /Θₙ is the set of all complex eigenvalues/i);
  assert.match(visibleText, /exp\(2πit\) runs once along the upper unit semicircle/i);
  assert.match(visibleText, /the ray at argument 2πx is/i);
  assert.match(html, /q&lt;s/);
  assert.match(visibleText, /A unique modulus at each prescribed argument/i);
  assert.match(visibleText, /Certified numerical evaluation/i);
  assert.match(visibleText, /Kirkland–Laffey–Šmigoc \(2020\)/i);
  assert.match(html, /id="topic-ix-exact-sources"/);
  assert.match(
    html,
    /class="[^"]*proof-topic-control-previous[^"]*"[^>]*href="\/karpelevic\/proof\/topic-viii\//,
  );
  assert.match(
    html,
    /class="[^"]*proof-topic-control-next[^"]*"[^>]*href="\/karpelevic\/proof\/topic-x\//,
  );
}

{
  const html = await readFile(
    path.join(outputRoot, "proof/topic-x/index.html"),
    "utf8",
  );
  const visibleText = visibleTextFromHtml(html);
  assert.match(html, /data-proof-route="topic-x"/);
  assert.match(visibleText, /The radial upper bound and its equality case/i);
  assert.match(visibleText, /radial boundary point that first appears at order N/i);
  assert.match(html, /q&lt;s/);
  assert.match(visibleText, /du\/dβ=ρᑫ sin A\/\|μᑫ−β\|²&gt;0/i);
  assert.match(visibleText, /ρ≤ρ\*/);
  assert.match(visibleText, /Reflection reverses the selected Farey interval/i);
  assert.match(visibleText, /Equality in Jensen’s inequality forces equal factor arguments/i);
  assert.match(html, /id="topic-x-exact-sources"/);
  assert.match(
    html,
    /class="[^"]*proof-topic-control-previous[^"]*"[^>]*href="\/karpelevic\/proof\/topic-ix\//,
  );
  assert.match(
    html,
    /class="[^"]*proof-topic-control-next[^"]*"[^>]*href="\/karpelevic\/proof\/topic-xi\//,
  );
  assert.doesNotMatch(
    html,
    /data-proof-topic-number="11"(?:(?!<\/li>)[\s\S])*Forthcoming/i,
  );
  assert.doesNotMatch(
    visibleText,
    /log-sine potential|convex equalization|strict Jensen|non-inherited radial maximum|continuous arguments on a zero-free path/i,
  );
}

{
  const html = await readFile(
    path.join(outputRoot, "proof/topic-xi/index.html"),
    "utf8",
  );
  const visibleText = visibleTextFromHtml(html);
  assert.match(html, /data-proof-route="topic-xi"/);
  assert.match(visibleText, /Explicit stochastic realization of the candidate curve/i);
  assert.match(visibleText, /Directed-cycle expansion of the characteristic polynomial/i);
  assert.match(visibleText, /Stochastic realization of the compact candidate (?:arc|curve)/i);
  assert.match(visibleText, /Θ\s*N is the set of all eigenvalues of row-stochastic matrices/i);
  assert.match(html, /data-topic-xi-equation-plate="attainment"/);
  assert.match(html, /data-edge-kind="local-return"/);
  assert.match(html, /data-edge-kind="inter-block"/);
  assert.match(html, /data-edge-weight="beta"/);
  assert.match(html, /data-edge-weight="alpha"/);
  assert.match(html, /data-regime="s-lt-dq"/);
  assert.match(html, /data-boundary-case="s-eq-dq"/);
  assert.match(html, /data-regime="s-gt-dq"/);
  assert.match(html, /id="topic-xi-exact-sources"/);
  assert.match(
    html,
    /class="[^"]*proof-topic-control-previous[^"]*"[^>]*href="\/karpelevic\/proof\/topic-x\//,
  );
  assert.match(
    html,
    /class="[^"]*proof-topic-control-next[^"]*"[^>]*href="\/karpelevic\/proof\/topic-xii\//,
  );
  assert.doesNotMatch(
    html,
    /<li>(?:(?!<\/li>)[\s\S])*data-proof-topic-number="12"(?:(?!<\/li>)[\s\S])*Forthcoming/i,
  );
  assert.doesNotMatch(
    visibleText,
    /cycle cover term|global cross cycle|cross edge|tail-row adjacency|constant parameter list|Rᴺ|Θᴺ/i,
  );
  assert.doesNotMatch(html, /<\/(?:var|sub|sup)>[A-Za-z]/);
}

{
  const html = await readFile(
    path.join(outputRoot, "proof/topic-xii/index.html"),
    "utf8",
  );
  const visibleText = visibleTextFromHtml(html);
  assert.match(html, /data-proof-route="topic-xii"/);
  assert.match(visibleText, /Manuscript pages\s+94–101/);
  assert.match(html, /id="karp:lem:mediant-expansion"/);
  assert.match(html, /id="karp:lem:multiplicity-padding"/);
  assert.match(html, /id="karp:lem:nesting-case-split"/);
  assert.match(html, /id="karp:thm:candidate-nesting"/);
  assert.match(html, /id="topic-xii-contract-heading"/);
  assert.equal(
    [...html.matchAll(/\sid="topic-xii-contract-heading"/g)].length,
    1,
    "Topic XII dependency heading must have one anchor.",
  );
  const classLists = [...html.matchAll(/class="([^"]+)"/g)].map((match) =>
    match[1].split(/\s+/),
  );
  assert.equal(
    classLists.filter((tokens) => tokens.includes("topic-i-textbook-item")).length,
    4,
    "Topic XII must contain all four formal results.",
  );
  assert.equal(
    classLists.filter((tokens) => tokens.includes("topic-i-proof-disclosure")).length,
    4,
    "Topic XII must contain all four complete proofs.",
  );
  assert.match(
    html,
    /class="[^"]*proof-topic-control-previous[^"]*"[^>]*href="\/karpelevic\/proof\/topic-xi\//,
  );
  assert.match(
    html,
    /class="[^"]*proof-topic-control-next[^"]*"[^>]*href="\/karpelevic\/proof\/topic-xiii\//i,
  );
  assert.match(html, /href="\/karpelevic\/proof\/topic-xiii\//);
  assert.match(html, /href="\/karpelevic\/proof\/topic-ix\//);
  assert.match(
    html,
    /href="\/karpelevic\/proof\/topic-x\/#karp:thm:hetero-sharp"/,
  );
  for (const number of [1, 2, 3]) {
    assert.equal(
      [...html.matchAll(new RegExp(`Plate XII\\.${number}\\.`, "g"))].length,
      1,
      `Topic XII must contain Plate XII.${number} exactly once.`,
    );
  }
  assert.doesNotMatch(
    html,
    /<li>(?:(?!<\/li>)[\s\S])*data-proof-topic-number="12"(?:(?!<\/li>)[\s\S])*Forthcoming/i,
  );
  assert.doesNotMatch(html, /data-proof-topic-number="13"[^>]*aria-disabled="true"/i);
  assert.doesNotMatch(html, /proof-chapter-parts|\/proof\/topic-xii\/[ab]\//i);
  assert.doesNotMatch(
    visibleText,
    /Part A|Part B|Topic XII-A|Topic XII-B|reciprocal-chord|multiplicity padding|mediant expansion|cell split|carrier interval|candidate nesting|provenance badge/i,
  );
}

{
  const html = await readFile(
    path.join(outputRoot, "proof/topic-xiii/index.html"),
    "utf8",
  );
  const visibleText = visibleTextFromHtml(html);
  assert.match(html, /data-proof-route="topic-xiii"/);
  assert.match(visibleText, /Manuscript pages\s+101–105/);
  assert.match(visibleText, /Karpelevič theorem in Ito’s formulation/i);
  assert.match(visibleText, /First published\s+22 August 2026/);
  assert.match(
    html,
    /class="[^"]*proof-topic-control-previous[^"]*"[^>]*href="\/karpelevic\/proof\/topic-xii\//,
  );
  assert.match(
    html,
    /class="[^"]*proof-topic-control-next[^"]*"[^>]*href="\/karpelevic\/proof\/topic-xiv\//,
  );
  const classLists = [...html.matchAll(/class="([^"]+)"/g)].map((match) =>
    match[1].split(/\s+/),
  );
  assert.equal(
    classLists.filter((tokens) => tokens.includes("topic-i-textbook-item")).length,
    3,
    "Topic XIII must contain all three formal results.",
  );
  assert.equal(
    classLists.filter((tokens) => tokens.includes("topic-i-proof-disclosure")).length,
    3,
    "Topic XIII must contain all three complete proofs.",
  );
  for (const number of [1, 2, 3]) {
    assert.equal(
      [...html.matchAll(new RegExp("Plate XIII\\." + number + "\\.", "g"))].length,
      1,
      "Topic XIII must contain Plate XIII." + number + " exactly once.",
    );
  }
}

{
  const html = await readFile(
    path.join(outputRoot, "proof/topic-xiv/index.html"),
    "utf8",
  );
  const visibleText = visibleTextFromHtml(html);
  assert.match(html, /data-proof-route="topic-xiv"/);
  assert.match(visibleText, /Manuscript pages\s+105–108/);
  assert.match(visibleText, /First published\s+22 August 2026/);
  assert.match(visibleText, /Nine Farey intervals cover 0≤x≤1\/2/);
  assert.match(visibleText, /Laurent equation/i);
  assert.match(visibleText, /intermediate value theorem gives existence/i);
  assert.match(visibleText, /The scalar equation gives α\+β=1/i);
  assert.doesNotMatch(visibleText, /Only the radius changes|homogeneous form/i);
  assert.doesNotMatch(html, /data-proof-chapter-controls="true"/);
  assert.doesNotMatch(html, /\/karpelevic\/proof-chapter\.js/);
  assert.match(html, /\/karpelevic\/topic-xiv\.js/);
  assert.match(
    visibleText,
    /Worked example, source, tests, and numerical plot complete/i,
  );
  const table = html.match(
    /<table class="topic-xiv-interval-table"[\s\S]*?<\/table>/i,
  )?.[0];
  assert.ok(table, "Topic XIV contains the semantic order-seven table.");
  assert.equal(
    [...table.matchAll(/<tr>/g)].length,
    10,
    "Topic XIV table has one header row and nine Farey-pair rows.",
  );
  assert.equal(
    [...html.matchAll(/\sid="karp:fig:n7-region"/g)].length,
    1,
    "Topic XIV has one order-seven figure anchor.",
  );
  assert.match(html, /data-order-seven-boundary-svg/);
  const boundaryPathTag = html.match(
    /<path\b(?=[^>]*data-order-seven-boundary-path)[^>]*>/i,
  )?.[0];
  assert.ok(boundaryPathTag, "Topic XIV has a marked boundary path.");
  assert.match(boundaryPathTag, /\sd="[^"]+"/);
  assert.match(
    html,
    /<line\b(?=[^>]*data-worked-ray)(?=[^>]*data-angle-fraction="3\/8")[^>]*>/i,
  );
  assert.match(html, /data-worked-boundary-point/);
  assert.match(visibleText, /marked endpoint is the complex point\s+λ=/i);
  assert.match(visibleText, /ρ is the unique solution/i);
  assert.match(html, /href="\/karpelevic\/code\/karpelevic-boundary\.js"/);
  assert.match(html, /href="\/karpelevic\/code\/karpelevic-boundary\.test\.mjs"/);
  assert.match(html, /data-boundary-order-input/);
  assert.match(html, /Enter an integer from 1 to 40/i);
}

{
  const html = await readFile(
    path.join(outputRoot, "proof/topic-iii/index.html"),
    "utf8",
  );
  const visibleText = visibleTextFromHtml(html);
  assert.match(html, /data-proof-route="topic-iii"/);
  assert.match(html, /Right-half-open side convention/);
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
  assert.match(html, /The side-label translation σ/);
  assert.doesNotMatch(html, /The cyclic permutation σ/);
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
  assert.match(html, /Exact diagram/);
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
await access(path.join(outputRoot, "topic-xiv.js"));
await access(path.join(outputRoot, "code/karpelevic-boundary.js"));
await access(path.join(outputRoot, "code/karpelevic-boundary.test.mjs"));
await access(path.join(outputRoot, ".nojekyll"));

await assert.rejects(access(path.join(outputRoot, ".vite")));
await access(path.join(outputRoot, "proof/topic-xiii/index.html"));
await access(path.join(outputRoot, "proof/topic-xiv/index.html"));
await access(path.join(outputRoot, "proof/topic-xii/a/index.html"));
await access(path.join(outputRoot, "proof/topic-xii/b/index.html"));
await access(path.join(outputRoot, "proof/topic-xii/index.html"));
const publicAssetEntries = await readdir(path.join(outputRoot, "assets"));
assert.equal(
  publicAssetEntries.some((entry) => entry.endsWith(".js")),
  false,
  "The public static asset directory must not expose later-topic client bundles.",
);
