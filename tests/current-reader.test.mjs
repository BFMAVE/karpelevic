import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import test from "node:test";
import { itoArcRadius } from "../public/code/karpelevic-boundary.mjs";

const read = (file) => readFile(new URL(`../${file}`, import.meta.url), "utf8");
const reader = JSON.parse(await read("app/data/reader.generated.json"));
const tex = await read("content/paper/karpelevic-invariant-polygons.tex");
const roman = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii", "xiv"];
const routes = roman.map((r, i) => i === 0 ? "/proof/" : `/proof/topic-${r}/`);
const workerPromise = import(new URL("../dist/server/index.js", import.meta.url)).then((m) => m.default);
async function render(route) {
  const response = await (await workerPromise).fetch(new Request(`https://bfmave.github.io${route.replace(/\/$/, "") || "/"}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
  assert.equal(response.status, 200, route);
  return response.text();
}
const text = (html) => html.replace(/<script\b[\s\S]*?<\/script>/g, "").replace(/<annotation\b[\s\S]*?<\/annotation>/g, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");

test("all fourteen guides correspond to the checked-in source, with native mathematics", async () => {
  const hash = (s) => createHash("sha256").update(s).digest("hex");
  assert.equal(reader.chapters.length, 14);
  assert.equal(reader.hashes.manuscript, hash(tex));
  for (const [i, chapter] of reader.chapters.entries()) {
    const guide = await read(`content/topics/topic-${i + 1}.md`);
    assert.equal(reader.hashes.guides[i], hash(guide));
    assert.ok(guide.split(/\s+/).length > 450, `Topic ${i + 1} must contain a developed explanation`);
    assert.match(chapter.guideHtml, /<math/);
    assert.doesNotMatch(chapter.sourceHtml, /class="math (?:inline|display)"|data-reference="|\[eq:/);
  }
});

test("every labeled source equation and formal result remains available", () => {
  const labels = [...tex.matchAll(/\\label\{((?:eq|thm|lem|prop|cor):[^}]+)\}/g)].map((m) => m[1]);
  assert.ok(labels.filter((s) => s.startsWith("eq:")).length >= 50);
  const sourceHtml = reader.chapters.map((c) => c.sourceHtml).join("\n");
  for (const label of labels) assert.ok(sourceHtml.includes(`id="${label}"`), `Missing source item ${label}`);
  const proofCount = (tex.match(/\\begin\{proof\}/g) ?? []).length;
  assert.equal((sourceHtml.match(/class="proof"/g) ?? []).length, proofCount, "Every original proof must be retained");
  assert.match(sourceHtml, /Proposition A\.1/);
  assert.match(sourceHtml, /Theorem A\.2/);
  assert.match(sourceHtml, /Proposition B\.1/);
});

for (const [i, route] of routes.entries()) {
  test(`${route} renders the fresh guide and a complete accessible source passage`, async () => {
    const html = await render(route);
    assert.match(html, new RegExp(`data-proof-route="topic-${roman[i]}"`));
    assert.match(html, /id="chapter-content"[^>]*tabindex="-1"/i);
    assert.match(html, /class="reader-guide proof-guided-layer"/);
    assert.match(html, /class="proof-chapter-proof reader-source-proof"/);
    assert.match(html, /https:\/\/arxiv\.org\/abs\/2609\.26058v2/);
    assert.match(html, /23 September 2026/);
    assert.match(html, /Open all proofs/);
    assert.match(html, /First published/);
    assert.doesNotMatch(text(html), /Forthcoming|Under construction|Working edition|awaiting arXiv moderation/);
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
    assert.equal(new Set(ids).size, ids.length, `Duplicate IDs on ${route}`);
  });
}

test("cross-topic source references resolve on the rendered target, with no old fragment inventory", async () => {
  const pages = await Promise.all(routes.map(render));
  for (const html of pages) {
    for (const match of html.matchAll(/href="(?:\/karpelevic)?(\/proof\/[^"#]*)#([^"]+)"/g)) {
      const target = routes.indexOf(match[1]);
      assert.ok(target >= 0, `Unknown route ${match[1]}`);
      assert.ok(pages[target].includes(`id="${match[2]}"`), `Missing source anchor ${match[0]}`);
    }
  }
});

test("the current arXiv PDF and the supplied teaching manuscript are distinct verified downloads", async () => {
  const home = await render("/");
  assert.match(home, /A structural proof of the Karpelevič theorem/);
  assert.match(home, /The current arXiv version/);
  assert.doesNotMatch(home, /construction-notice|awaiting arXiv moderation|110-page/);
  const pdf = await readFile(new URL("../public/paper/critical-invariant-polygons.pdf", import.meta.url));
  assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
  assert.equal(createHash("sha256").update(pdf).digest("hex"), "82fb42c36499d19b7c7e1f3f14c86b53ff6ae035d11ccd5bf7a1ed7dfc50d21f");
  const teaching = await readFile(new URL("../public/paper/teaching-manuscript.pdf", import.meta.url));
  assert.equal(createHash("sha256").update(teaching).digest("hex"), "91efa05defa4f4b7ea971a8371e49f2abe0d267672d69caeffe372988a5b5e8e");
  assert.match(home, /citation_publication_date" content="2026\/09\/23/);
});

test("worked order-eight and order-seven radii agree with the executable scalar solver", () => {
  const r8 = itoArcRadius(5 / 14, { numerator: 1, denominator: 3 }, { numerator: 3, denominator: 8 }, 8);
  const r7 = itoArcRadius(5 / 14, { numerator: 1, denominator: 3 }, { numerator: 2, denominator: 5 }, 7);
  assert.ok(Math.abs(r8 - 0.9706130802806241) < 1e-13);
  assert.ok(Math.abs(r7 - 0.9443011404145278) < 1e-13);
  assert.ok(r8 > r7);
  assert.ok(Math.abs(r8 ** 4 + r8 ** 3 - 2 * Math.cos(Math.PI / 7)) < 1e-13);
});

test("the exceptional third order and exact phase remain explicit in the teaching layer", async () => {
  const [product, completion, consequences, deformation] = await Promise.all([7, 12, 13, 6].map((n) => read(`content/topics/topic-${n}.md`)));
  assert.match(product, /real equality|real numbers/);
  assert.match(completion, /1\/2/);
  assert.match(completion, /discontin/);
  assert.match(consequences, /badly approximable/);
  assert.match(consequences, /asymmetric/);
  assert.match(deformation, /G\(C_/);
  assert.match(deformation, /second order|second derivative/);
});
