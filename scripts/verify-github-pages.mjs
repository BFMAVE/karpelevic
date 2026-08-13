import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const outputRoot = path.join(projectRoot, "pages-out");
const pages = [
  ["index.html", "Under construction"],
  ["history/index.html", "How a geometric question became an arithmetic boundary"],
  ["journey/index.html", "An eigenvalue region for Leslie matrices"],
  ["proof/index.html", "How the Proof Works"],
  [
    "proof/topic-ii/index.html",
    "From convex order to active sides",
  ],
  [
    "proof/topic-iii/index.html",
    "Half-open boundary assignments and edge clipping",
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
}

for (const relativePath of [
  "proof/index.html",
  "proof/topic-ii/index.html",
  "proof/topic-iii/index.html",
]) {
  const html = await readFile(path.join(outputRoot, relativePath), "utf8");
  assert.match(html, /Forthcoming/);
  assert.doesNotMatch(
    html,
    /href="\/karpelevic\/proof\/topic-(?:iv|v|vi(?:\/[ab])?|vii|viii|ix|x|xi|xii(?:\/[ab])?|xiii|xiv)\//,
  );
}

{
  const html = await readFile(
    path.join(outputRoot, "proof/topic-iii/index.html"),
    "utf8",
  );
  assert.match(html, /data-proof-route="topic-iii"/);
  assert.match(html, /Assignment to half-open sides/);
  assert.match(html, /This is only the membership statement/);
  assert.match(html, /Cyclic shift[^<]*κ and source vertex/);
  assert.doesNotMatch(
    html,
    /labelled boundary slot|ownership word|zero-side signature|radius-one anchor/i,
  );
}

await access(path.join(outputRoot, "favicon.svg"));
await access(path.join(outputRoot, "contact.js"));
await access(path.join(outputRoot, "proof.js"));
await access(path.join(outputRoot, ".nojekyll"));

await assert.rejects(access(path.join(outputRoot, ".vite")));
await assert.rejects(access(path.join(outputRoot, "code")));
await assert.rejects(access(path.join(outputRoot, "proof/topic-iv")));
const publicAssetEntries = await readdir(path.join(outputRoot, "assets"));
assert.equal(
  publicAssetEntries.some((entry) => entry.endsWith(".js")),
  false,
  "The public static asset directory must not expose later-topic client bundles.",
);
