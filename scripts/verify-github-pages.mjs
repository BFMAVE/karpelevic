import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../pages-out");
const romans = ["ii","iii","iv","v","vi","vii","viii","ix","x","xi","xii","xiii","xiv"];
const routes = ["", "history/", "journey/", "prerequisites/", "proof/", ...romans.map((r) => `proof/topic-${r}/`)];
const pages = new Map();
for (const route of routes) {
  const html = await readFile(path.join(root, route, "index.html"), "utf8");
  pages.set(`/karpelevic/${route}`, html);
  assert.ok(html.includes(`rel="canonical" href="https://bfmave.github.io/karpelevic/${route}"`));
  assert.ok(html.includes('name="twitter:card" content="summary"'));
  assert.doesNotMatch(html, /Under construction|Working edition|awaiting arXiv moderation/);
  assert.doesNotMatch(html, /(?:href|src)="\/assets\//);
  if (route.startsWith("proof/")) {
    assert.match(html, /reader-guide proof-guided-layer/);
    assert.match(html, /proof-chapter-proof reader-source-proof/);
    assert.match(html, /\/karpelevic\/proof-chapter\.js/);
    assert.match(html, /https:\/\/arxiv\.org\/abs\/2609\.26058v2/);
    assert.doesNotMatch(html, /Forthcoming/);
  }
  if (route === "proof/topic-xiv/") assert.match(html, /\/karpelevic\/topic-xiv\.js/);
  if (route === "prerequisites/") {
    assert.match(html, /data-weighted-average/);
    assert.match(html, /<script src="\/karpelevic\/weighted-average\.js" defer><\/script>/);
  }
}
for (const [route, html] of pages) {
  for (const match of html.matchAll(/href="(\/karpelevic\/proof\/[^"#]*)#([^"?]+)"/g)) {
    assert.ok(pages.get(match[1])?.includes(`id="${match[2]}"`), `${route}: unresolved link ${match[0]}`);
  }
}
for (const file of ["paper/critical-invariant-polygons.pdf", "paper/teaching-manuscript.pdf", "proof-chapter.js", "topic-xiv.js", "weighted-average.js", "code/karpelevic-boundary.mjs"]) await access(path.join(root, file));
for (const route of ["proof/topic-vi/a/", "proof/topic-vi/b/", "proof/topic-xii/a/", "proof/topic-xii/b/"]) {
  const html = await readFile(path.join(root, route, "index.html"), "utf8");
  assert.match(html, /http-equiv="refresh"/);
  const match = html.match(/url=([^"#]+)(?:#([^"]+))?/);
  assert.ok(pages.has(match[1]));
  if (match[2]) assert.ok(pages.get(match[1]).includes(`id="${match[2]}"`));
}
console.log("Verified all public pages, fourteen source-linked topics, both PDFs, controls, explorer, and compatibility redirects.");
