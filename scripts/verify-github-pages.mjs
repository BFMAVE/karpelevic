import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../pages-out");
const romans = ["ii","iii","iv","v","vi","vii","viii","ix","x","xi","xii","xiii","xiv"];
const mirskyRoutes = ["perfect-mirsky/", ...romans.slice(0, 7).map((r) => `perfect-mirsky/topic-${r}/`)];
const routes = ["", "history/", "journey/", "prerequisites/", "proof/", ...romans.map((r) => `proof/topic-${r}/`), ...mirskyRoutes];
const pages = new Map();
for (const route of routes) {
  const html = await readFile(path.join(root, route, "index.html"), "utf8");
  pages.set(`/karpelevic/${route}`, html);
  assert.ok(html.includes(`rel="canonical" href="https://bfmave.github.io/karpelevic/${route}"`));
  assert.ok(html.includes('name="twitter:card" content="summary"'));
  assert.doesNotMatch(html, /Under construction|Working edition|awaiting arXiv moderation/);
  assert.doesNotMatch(html, /(?:href|src)="\/assets\//);
  if (route.startsWith("proof/") || mirskyRoutes.includes(route)) {
    assert.match(html, /reader-guide proof-guided-layer/);
    assert.match(html, /proof-chapter-proof reader-source-proof/);
    assert.match(html, /\/karpelevic\/proof-chapter\.js/);
    assert.match(html, /\/karpelevic\/reader-learning\.js/);
  }
  if (route.startsWith("proof/")) {
    assert.match(html, /https:\/\/arxiv\.org\/abs\/2609\.26058v2/);
    assert.doesNotMatch(html, /Forthcoming/);
  }
  if (mirskyRoutes.includes(route)) {
    assert.match(html, /<script type="module" src="\/karpelevic\/perfect-mirsky\.js"><\/script>/);
    assert.match(html, /https:\/\/arxiv\.org\/abs\/2611\.30905v2/);
    assert.match(html, /<math\b/);
    assert.match(html, /data-reader-section-directory/);
    assert.match(html, /data-figure-view-button="enlarge"/);
    assert.doesNotMatch(html, /name="robots"[^>]*noindex/);
    for (const [, fragment] of html.matchAll(/href="#([^"?]+)"/g)) {
      assert.ok(html.includes(`id="${fragment}"`), `${route}: unresolved link #${fragment}`);
    }
  }
  if (route === "proof/topic-xiv/") {
    assert.match(html, /\/karpelevic\/topic-xiv\.js/);
    assert.match(html, /\/karpelevic\/eight-state-links\.js/);
  }
  if (route === "prerequisites/") {
    assert.match(html, /id="main-ideas"/);
    assert.match(html, /data-weighted-average/);
    assert.match(html, /<script src="\/karpelevic\/weighted-average\.js" defer><\/script>/);
  }
}
for (const [route, html] of pages) {
  for (const [, url] of html.matchAll(/<img\b[^>]*\bsrc="([^"]*\/figures\/[^"]+)"/g)) {
    assert.ok(url.startsWith("/karpelevic/figures/"), `${route}: figure outside Pages project: ${url}`);
    await access(path.join(root, url.slice("/karpelevic/".length)));
  }
  for (const match of html.matchAll(/href="(\/karpelevic\/[^"#]*)#([^"?]+)"/g)) {
    assert.ok(pages.get(match[1])?.includes(`id="${match[2]}"`), `${route}: unresolved link ${match[0]}`);
  }
}
for (const file of ["paper/critical-invariant-polygons.pdf", "paper/teaching-manuscript.pdf", "proof-chapter.js", "reader-learning.js", "topic-xiv.js", "eight-state-links.js", "weighted-average.js", "code/karpelevic-boundary.mjs", "perfect-mirsky.js", "code/perfect-mirsky-model.mjs"]) await access(path.join(root, file));
for (const route of ["proof/topic-vi/a/", "proof/topic-vi/b/", "proof/topic-xii/a/", "proof/topic-xii/b/"]) {
  const html = await readFile(path.join(root, route, "index.html"), "utf8");
  assert.match(html, /http-equiv="refresh"/);
  const match = html.match(/url=([^"#]+)(?:#([^"]+))?/);
  assert.ok(pages.has(match[1]));
  if (match[2]) assert.ok(pages.get(match[1]).includes(`id="${match[2]}"`));
}
console.log("Verified all public pages, fourteen Karpelevič topics, eight Perfect–Mirsky topics, both PDFs, controls, explorer, and compatibility redirects.");
