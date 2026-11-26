import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const script = await readFile(new URL("../public/proof-chapter.js", import.meta.url), "utf8");
function setup(detailTarget) {
  const handlers = {}, documentHandlers = {}, scheduled = [];
  const notation = { open: true, contains: () => false, querySelector: () => ({ getBoundingClientRect: () => ({ height: 92 }) }) };
  const proof = { open: false, addEventListener() {} };
  const modeButton = (mode) => ({
    dataset: { chapterReadingModeButton: mode },
    addEventListener(name, fn) { this[name] = fn; },
    setAttribute(name, value) { this[name] = value; },
  });
  const buttons = [modeButton("guided"), modeButton("formal")];
  const controls = {
    dataset: {}, hidden: true, querySelector: () => null,
    querySelectorAll: (selector) => selector.includes("reading-mode") ? buttons : [],
  };
  const chapter = {
    dataset: { chapterReadingMode: detailTarget ? "guided" : "formal", chapterDetailTarget: detailTarget },
    style: { values: {}, setProperty(name, value) { this.values[name] = value; } },
    querySelector: (selector) => selector.includes("notation") ? notation : controls,
    querySelectorAll: () => [proof], contains: () => true,
  };
  const disclosure = { tagName: "DETAILS", open: false, parentElement: chapter };
  const guided = { parentElement: disclosure, closest: () => ({}), scrollIntoView(options) { this.scrolled = options; } };
  const source = {
    parentElement: disclosure, closest: (selector) => selector === ".proof-chapter-proof" ? disclosure : null,
    scrollIntoView(options) { this.scrolled = options; }, focus(options) { this.focused = options; },
  };
  const location = { origin: "https://bfmave.github.io", pathname: "/karpelevic/proof/topic-vi/", search: "", hash: "", href: "https://bfmave.github.io/karpelevic/proof/topic-vi/" };
  const window = {
    location, setTimeout: (fn) => scheduled.push(fn),
    matchMedia: () => ({ matches: false, addEventListener() {} }),
    addEventListener: (name, fn) => { handlers[name] = fn; },
  };
  const document = {
    readyState: "complete", getElementById: (id) => ({ guided, source })[id],
    querySelectorAll: (selector) => selector === "[data-proof-chapter]" ? [chapter] : [],
    addEventListener: (name, fn) => { documentHandlers[name] = fn; },
  };
  vm.runInNewContext(script, { window, document, URL });
  scheduled[0]();
  return { handlers, documentHandlers, location, notation, chapter, disclosure, guided, source, proof, buttons };
}

test("a section jump closes the tall reference and clears even a wrapped summary", () => {
  const state = setup();
  state.location.hash = "#guided";
  state.handlers.hashchange();
  assert.equal(state.notation.open, false);
  assert.equal(state.chapter.dataset.chapterReadingMode, "guided");
  assert.equal(state.disclosure.open, true);
  assert.ok(Number.parseFloat(state.chapter.style.values["--reader-anchor-clearance"]) > 92);
  assert.equal(state.guided.scrolled.block, "start");
});

test("following the same fragment again still dismisses the reference", () => {
  const state = setup();
  state.location.hash = "#source";
  state.handlers.hashchange();
  state.notation.open = true;
  state.documentHandlers.click({ button: 0, target: { closest: () => ({ href: state.location.href + "#source" }) } });
  assert.equal(state.notation.open, false);
  assert.equal(state.chapter.dataset.chapterReadingMode, "formal");
  state.notation.open = true;
  state.documentHandlers.click({ button: 0, metaKey: true, target: { closest: () => ({ href: state.location.href + "#source" }) } });
  assert.equal(state.notation.open, true, "opening a separate tab does not change the current reference");
});

test("the Perfect–Mirsky controls open and focus the detailed argument and return to the lesson", () => {
  const { buttons, chapter, proof, source, guided, location, handlers } = setup("source");
  const [lesson, detailed] = buttons;
  assert.equal(proof.open, false);
  detailed.click();
  assert.equal(detailed["aria-pressed"], "true");
  assert.equal(proof.open, true);
  assert.equal(source.focused.preventScroll, true);
  assert.equal(source.scrolled.block, "start");
  location.hash = "#guided";
  handlers.hashchange();
  assert.equal(lesson["aria-pressed"], "true");
  assert.equal(proof.open, false);
  assert.equal(guided.scrolled.block, "start");
  location.hash = "#source";
  handlers.hashchange();
  assert.equal(chapter.dataset.chapterReadingMode, "formal");
  assert.equal(proof.open, true);
});
