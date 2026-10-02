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

test("all fourteen topics have concise strategies, retrievable teaching contracts, figures and distinct proof labels", async () => {
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
    assert.doesNotMatch(html, /Complete argumentOpen|reader-figure:/);
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
  const chapter = { dataset: { chapterReadingMode: "guided" }, style: { setProperty() {} }, querySelector(selector) { return selector.includes("notation") ? null : selector.includes("announcement") ? announcement : controls; }, querySelectorAll() { return [outer, inner]; }, contains() { return true; } };
  outer.parentElement = chapter;
  const target = { parentElement: inner, closest() { return null; }, scrollIntoView(options) { this.scrolled = options; } };
  const directory = { open: true, hasAttribute() { return false; } };
  const sections = { open: true, hasAttribute(name) { return name === "data-reader-section-directory"; } };
  const compact = { matches: true, addEventListener(type, callback) { this.resize = callback; } };
  const window = { location: { hash: "" }, matchMedia() { return compact; }, setTimeout(callback) { scheduled.push(callback); }, addEventListener(type, callback) { listeners.set(type, callback); } };
  const document = { readyState: "complete", addEventListener() {}, querySelectorAll(selector) { return selector.includes("projection") ? [] : selector.includes("directory") ? [directory, sections] : [chapter]; }, getElementById() { return target; } };
  vm.runInNewContext(await read("public/proof-chapter.js"), { window, document });
  scheduled[0]();
  assert.equal(directory.open, false, "mobile topic directory starts compact");
  assert.equal(sections.open, false, "mobile section directory starts compact and remains available");
  compact.matches = false;
  compact.resize();
  assert.equal(sections.open, true, "local sections expand on desktop");
  assert.equal(directory.open, false, "the complete catalogue stays available without dominating the current lesson");
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

test("supplementary diagrams appear at their guide placements with accessible keyboard regions", async () => {
  const supplemented = new Set([2, 6, 7, 8, 10, 12, 14]);
  for (const [index, route] of routes.entries()) {
    const html = await render(route);
    const figures = [...html.matchAll(/<figure\b[^>]*class="[^"]*reader-teaching-figure[^\"]*"[\s\S]*?<\/figure>/g)].map((match) => match[0]);
    assert.equal(figures.length, (index === 5 ? 2 : 1) + Number(supplemented.has(index + 1)), `${route}: all planned figures are rendered`);
    for (const figure of figures) {
      assert.match(figure, /class="reader-figure-visual"[^>]*tabindex="0"[^>]*role="region"[^>]*aria-label=/, `${route}: scrollable diagram is keyboard accessible`);
      assert.match(figure, /<title\b/);
      assert.match(figure, /<desc\b/);
      assert.match(figure, /<figcaption\b/);
    }
    assert.match(html, /<details[^>]*data-reader-section-directory/);
  }
});

test("the starting averaging diagram represents the actual row product and discloses its scope", async () => {
  const html = await render("/prerequisites/");
  const figure = html.match(/<figure\b[^>]*reader-average-figure[\s\S]*?<\/figure>/)?.[0];
  assert.ok(figure);
  const point = figure.match(/<polygon points="([^"]+)" fill="#7c302e"/);
  assert.ok(point);
  const vertices = point[1].split(" ").map((pair) => pair.split(",").map(Number));
  const centre = vertices.reduce(([x, y], [px, py]) => [x + px / 4, y + py / 4], [0, 0]);
  assert.equal((centre[0] - 230) / 125, .5, "real part is the first row weight");
  assert.equal((188 - centre[1]) / 125, .5, "imaginary part is the second row weight");
  assert.match(figure, /0\.707/);
  assert.match(figure, /This diagram shows one row/);
  assert.match(figure.replace(/<!--[\s\S]*?-->/g, ""), /Taking all rows together gives λP ⊆ P/);
  assert.match(figure, /aria-valuetext="0\.5 on 1; 0\.5 on i"/);
  assert.match(figure, /<noscript>/);
});

test("comparison diagrams distinguish series without requiring colour perception", async () => {
  for (const route of ["/proof/topic-xi/", "/proof/topic-xiii/"]) {
    const html = await render(route);
    const drawing = html.match(/<figure\b[^>]*reader-teaching-figure[\s\S]*?<\/figure>/)?.[0];
    assert.ok(drawing);
    assert.match(drawing, /stroke-dasharray=/, route);
  }
});

test("the averaging controller enables the exported example and keeps geometry, weights and announcements together", async () => {
  const callbacks = new Map(), scheduled = [];
  const element = () => ({ disabled: true, value: "0.5", textContent: "", attributes: {}, setAttribute(name, value) { this.attributes[name] = value; }, addEventListener(name, callback) { callbacks.set(name, callback); } });
  const input = element(), point = element(), row = element(), coordinate = element(), weight = element(), description = element(), status = element();
  const presets = [0, .5, 1].map((value) => ({ ...element(), dataset: { averagePreset: String(value) }, events: new Map(), addEventListener(name, callback) { this.events.set(name, callback); } }));
  const nodes = { input, point, row, coordinate, weight, description, status };
  const figure = { querySelector(selector) { return nodes[selector.match(/data-average-(\w+)/)[1]]; }, querySelectorAll() { return presets; } };
  const document = { readyState: "complete", querySelectorAll() { return [figure]; } };
  const window = { setTimeout(callback) { scheduled.push(callback); } };
  vm.runInNewContext(await read("public/weighted-average.js"), { window, document });
  scheduled[0]();
  assert.equal(input.disabled, false);
  assert.ok(presets.every((preset) => !preset.disabled));
  for (const value of [0, .15, .5, .9, 1]) {
    input.value = String(value);
    callbacks.get("input")();
    const vertices = point.attributes.points.split(" ").map((pair) => pair.split(",").map(Number));
    const [x, y] = vertices.reduce(([a, b], [px, py]) => [a + px / 4, b + py / 4], [0, 0]);
    assert.ok(Math.abs((x - 230) / 125 - value) < 1e-14);
    assert.ok(Math.abs((188 - y) / 125 - (1 - value)) < 1e-14);
    assert.ok(Math.abs((x - 230) + (188 - y) - 125) < 1e-12, "the point stays on the side");
    assert.match(status.textContent, new RegExp(Math.hypot(value, 1 - value).toFixed(3).replace(".", "\\.")));
    assert.match(description.textContent, /current coordinates/);
  }
  presets[1].events.get("click")();
  assert.equal(input.value, "0.5");
  assert.equal(presets[1].attributes["aria-pressed"], "true");
  assert.equal(presets[0].attributes["aria-pressed"], "false");
  assert.equal(row.textContent, "(0.5, 0.5, 0, 0)");
  assert.equal(input.attributes["aria-valuetext"], "0.5 on 1; 0.5 on i");
});
