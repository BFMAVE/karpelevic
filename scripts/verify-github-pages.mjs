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
    "From endpoint order to contact reduction",
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
]) {
  const html = await readFile(path.join(outputRoot, relativePath), "utf8");
  assert.match(html, /Forthcoming/);
  assert.doesNotMatch(
    html,
    /href="\/karpelevic\/proof\/topic-(?:v|vi(?:\/[ab])?|vii|viii|ix|x|xi|xii(?:\/[ab])?|xiii|xiv)\//,
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
  assert.match(html, /Side-continuation bijection b/);
  assert.match(html, /aria-label="Equation 5\.11, permalink"/);
  assert.match(html, /Plate IV\.1/);
  assert.match(html, /Plate IV\.5/);
  assert.match(html, /Exact finite example/);
  assert.match(html, /Exact geometric construction/);
  assert.match(html, /Schematic lifted-angle diagram/);
  assert.match(html, /Hybrid: schematic geometry · exact set update/);
  assert.match(html, /Exact finite arithmetic example/);
  assert.match(html, /Q=λP/);
  assert.match(html, /S=\{4,5,6,7\}/);
  assert.match(html, /θ=arg<sub>\+<\/sub>\(λ\)∈\(0,2π\)/);
  assert.match(html, /proof-chapter\.js/);
  assert.doesNotMatch(
    visibleText,
    /\b(?:field|fields|ledger|ownership|owned|owns|certificate|audit|chip|chips|boolean board|mutation|mutations|surgery|surgeries|group|groups|block|blocks|score|scores|collision|collisions|strict landing|strict side|strict sides|strict-index|edge-cap)\b/i,
  );
}

await access(path.join(outputRoot, "favicon.svg"));
await access(path.join(outputRoot, "contact.js"));
await access(path.join(outputRoot, "proof.js"));
await access(path.join(outputRoot, "proof-chapter.js"));
await access(path.join(outputRoot, ".nojekyll"));

await assert.rejects(access(path.join(outputRoot, ".vite")));
await assert.rejects(access(path.join(outputRoot, "code")));
await assert.rejects(access(path.join(outputRoot, "proof/topic-v")));
const publicAssetEntries = await readdir(path.join(outputRoot, "assets"));
assert.equal(
  publicAssetEntries.some((entry) => entry.endsWith(".js")),
  false,
  "The public static asset directory must not expose later-topic client bundles.",
);
