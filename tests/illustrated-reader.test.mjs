import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const worker = import(new URL("../dist/server/index.js", import.meta.url)).then((module) => module.default);
const roman = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii", "xiv"];
const routes = roman.map((n, i) => i === 0 ? "/proof/" : `/proof/topic-${n}/`);
async function render(route) {
  const response = await (await worker).fetch(new Request(`https://bfmave.github.io${route.replace(/\/$/, "") || "/"}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
  assert.equal(response.status, 200);
  return response.text();
}

test("every public page uses the current identity and every topic has its own primary title", async () => {
  for (const route of ["/", "/history/", "/journey/", "/prerequisites/", ...routes]) {
    const html = await render(route);
    const header = html.match(/<header class="site-header"[\s\S]*?<\/header>/)?.[0];
    assert.ok(header, route);
    assert.match(header, /The Karpelevič theorem/);
    assert.match(header, /An illustrated geometric proof/);
    assert.doesNotMatch(header, /Critical Invariant Polygons|A companion to the manuscript/);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${route}: one clear primary title`);
    if (route.startsWith("/proof/")) {
      assert.doesNotMatch(html.match(/<h1\b[^>]*>[\s\S]*?<\/h1>/)?.[0] ?? "", /How the Proof Works/);
    }
  }
});

test("all fourteen topics have visible teaching contracts, figures, local navigation, and distinct proof labels", async () => {
  for (const [index, route] of routes.entries()) {
    const html = await render(route);
    assert.match(html, /What we bring in, and what we build here/);
    assert.match(html, /New ideas and notation/);
    assert.match(html, /The idea of the argument/);
    assert.match(html, /reader-orientation-grid/);
    assert.match(html, /reader-teaching-figure/);
    assert.match(html, /reader-figure-visual/);
    assert.match(html, /aria-label="On this topic"/);
    assert.match(html.replace(/<!--[\s\S]*?-->/g, ""), new RegExp(`Read the source argument for Topic ${roman[index].toUpperCase()}`));
    assert.doesNotMatch(html, /Complete argumentOpen|reader-figure:(?:early|late)/);
    for (const match of html.matchAll(/href="#([^"?]+)"/g)) {
      assert.ok(html.includes(`id="${match[1]}"`), `${route}: missing local section ${match[1]}`);
    }
  }
  const reader = JSON.parse(await read("app/data/reader.generated.json"));
  const source = reader.chapters.map((chapter) => chapter.sourceHtml).join("\n");
  assert.equal((source.match(/data-source-proof/g) ?? []).length, 26);
  assert.equal((source.match(/class="proof"/g) ?? []).length, 26);
  assert.match(source, /<summary>Proof of Theorem 3\.5<\/summary>/);
});

test("the homepage's square illustration actually performs the stated half-size 45-degree rotation", async () => {
  const home = await render("/");
  const drawing = home.match(/<svg\b[^>]*aria-labelledby="prerequisite-invariant-polygons-title[^>]*>[\s\S]*?<\/svg>/)?.[0];
  assert.ok(drawing);
  assert.match(drawing, /forty-five-degree rotation/);
  const polygons = [...drawing.matchAll(/<polygon\b[^>]*points="([^"]+)"/g)].map((match) => match[1].split(/\s+/).map((point) => point.split(",").map(Number)));
  assert.equal(polygons.length, 2);
  for (const [index, [x, y]] of polygons[0].entries()) {
    const [imageX, imageY] = polygons[1][index];
    const real = x - 380, imaginary = 187 - y;
    const expectedX = 380 + .5 * (real * Math.cos(Math.PI / 4) - imaginary * Math.sin(Math.PI / 4));
    const expectedY = 187 - .5 * (real * Math.sin(Math.PI / 4) + imaginary * Math.cos(Math.PI / 4));
    assert.ok(Math.abs(imageX - expectedX) < 1e-12);
    assert.ok(Math.abs(imageY - expectedY) < 1e-12);
    assert.ok(imageX > 238 && imageX < 522 && imageY > 45 && imageY < 329);
  }
  assert.equal(polygons[0][1][0] - polygons[0][0][0], polygons[0][2][1] - polygons[0][1][1]);
  assert.match(home, /sampled numerical polylines/);
});

test("reading controls open the full formal proof, close all levels, and reveal deep source links", async () => {
  const listeners = new Map(), scheduled = [];
  const button = (dataset) => ({ dataset, disabled: false, attributes: {}, callbacks: new Map(), setAttribute(name, value) { this.attributes[name] = value; }, addEventListener(name, callback) { this.callbacks.set(name, callback); } });
  const guided = button({ chapterReadingModeButton: "guided" });
  const formal = button({ chapterReadingModeButton: "formal" });
  const open = button({ chapterProofs: "open" });
  const close = button({ chapterProofs: "close" });
  const announcement = { textContent: "" };
  const controls = { dataset: {}, hidden: true, querySelector() { return announcement; }, querySelectorAll(selector) { return selector.includes("reading-mode") ? [guided, formal] : [open, close]; } };
  const outer = { tagName: "DETAILS", open: false, addEventListener() {} };
  const inner = { tagName: "DETAILS", open: false, addEventListener() {}, parentElement: outer };
  const chapter = { dataset: { chapterReadingMode: "guided" }, querySelector(selector) { return selector.includes("announcement") ? announcement : controls; }, querySelectorAll() { return [outer, inner]; }, contains() { return true; } };
  outer.parentElement = chapter;
  const target = { parentElement: inner, closest() { return null; }, scrollIntoView(options) { this.scrolled = options; } };
  const directory = { open: true };
  const compact = { matches: true, addEventListener() {} };
  const window = { location: { hash: "" }, matchMedia() { return compact; }, setTimeout(callback) { scheduled.push(callback); }, addEventListener(type, callback) { listeners.set(type, callback); } };
  const document = { readyState: "complete", querySelectorAll(selector) { return selector.includes("projection") ? [] : selector.includes("directory") ? [directory] : [chapter]; }, getElementById() { return target; } };
  vm.runInNewContext(await read("public/proof-chapter.js"), { window, document });
  scheduled[0]();
  assert.equal(directory.open, false, "mobile topic directory starts compact");
  assert.equal(controls.hidden, false);
  formal.callbacks.get("click")();
  assert.equal(chapter.dataset.chapterReadingMode, "formal");
  assert.equal(formal.attributes["aria-pressed"], "true");
  assert.equal(outer.open && inner.open, true, "formal mode displays all source statements and proofs");
  close.callbacks.get("click")();
  assert.equal(outer.open || inner.open, false);
  assert.equal(close.disabled, true);
  window.location.hash = "#eq:deep-proof";
  listeners.get("hashchange")();
  assert.equal(outer.open && inner.open, true, "deep links open every ancestor disclosure");
  assert.equal(target.scrolled.behavior, "instant");
  guided.callbacks.get("click")();
  assert.equal(chapter.dataset.chapterReadingMode, "guided");
  assert.equal(guided.attributes["aria-pressed"], "true");
});
