import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
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
];

for (const [relativePath, expectedText] of pages) {
  const html = await readFile(path.join(outputRoot, relativePath), "utf8");

  assert.match(html, new RegExp(expectedText));
  assert.doesNotMatch(html, /(?:href|src)="\/assets\//);
  assert.doesNotMatch(html, /<script\b[^>]*>self\.__VINEXT/);
  assert.match(html, /\/karpelevic\/assets\//);
  assert.match(html, /\/karpelevic\/contact\.js/);
}

await access(path.join(outputRoot, "favicon.svg"));
await access(path.join(outputRoot, "contact.js"));
await access(path.join(outputRoot, ".nojekyll"));
