import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const read = (file) => readFile(new URL("../" + file, import.meta.url), "utf8");
const inputText = await read("app/data/reader-notation.json");
const input = JSON.parse(inputText);
const generated = JSON.parse(await read("app/data/reader-notation.generated.json"));
const digest = (value) => createHash("sha256").update(value).digest("hex");
const unescapeHtml = (value) => value.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const annotations = (html) => Array.from(html.matchAll(/<annotation encoding="application\/x-tex">([\s\S]*?)<\/annotation>/g), (match) => unescapeHtml(match[1]));

test("all chapter notation is fresh MathML with every TeX expression preserved", async () => {
  assert.equal(generated.hashes.input, digest(inputText));
  assert.equal(generated.hashes.generator, digest(await read("scripts/generate-reader-notation.mjs")));
  assert.equal(Object.keys(generated.topics).length, 14);
  let count = 0;
  for (const [number, entries] of Object.entries(input.topics)) {
    assert.equal(generated.topics[number].length, entries.length);
    entries.forEach(([term, meaning], index) => {
      const rendered = generated.topics[number][index];
      for (const [markdown, html] of [[term, rendered.termHtml], [meaning, rendered.meaningHtml]]) {
        const tex = Array.from(markdown.matchAll(/\$([^$]+)\$/g), (match) => match[1]);
        assert.deepEqual(annotations(html), tex, "MathML must retain the exact formula in Topic " + number);
        if (tex.length) assert.match(html, /<math\b[^>]*xmlns="http:\/\/www.w3.org\/1998\/Math\/MathML"/);
        assert.doesNotMatch(html, /class="math (?:inline|display)"/);
      }
      count++;
    });
    assert.ok(input.localDefinitionIndices[number].every((index) => entries[index]));
  }
  assert.equal(count, 118);
});

test("notation preserves the chapter's order scope and local letter reuse", () => {
  const topic = (number) => input.topics[number].flat().join(" ");
  assert.match(topic(7), /m=\\lfloor N\/q\\rfloor/);
  assert.match(topic(8), /m=\\lfloor n\/q\\rfloor/);
  assert.match(topic(8), /does not set \$N=n\$/);
  assert.match(topic(13), /m=\\lfloor N\/q\\rfloor/);
  assert.match(topic(12), /m=\\lfloor k\/q\\rfloor/);
  assert.match(topic(6), /\$a=q\$.*\$a=q\+h\$/);
  assert.match(topic(6), /real coefficients are local.*unrelated to the return time/);
  assert.match(topic(6), /new local real coefficients of the closing function/);
  assert.match(topic(3), /\\Phi_\{i\+N\}=\\Phi_i\+2\\pi/);
  assert.match(topic(8), /\\Phi_\{i\+N\}=\\Phi_i\+2\\pi/);
  assert.doesNotMatch(Object.values(input.topics).flat(2).join(" "), /\\Phi_\{i\+n\}/);
});

test("notation remains outside the hidden guided layer and is keyboard scrollable", async () => {
  const [component, chapter, orientation] = await Promise.all([
    read("app/components/proof/ReaderNotation.tsx"),
    read("app/components/proof/CurrentProofChapter.tsx"),
    read("app/components/proof/ReaderTopicOrientation.tsx"),
  ]);
  assert.match(component, /<details className="reader-notation" data-reader-notation>/);
  assert.doesNotMatch(component, /proof-guided-layer/);
  assert.match(component, /className="reader-notation-body" tabIndex=\{0\} role="region" aria-label=/);
  assert.match(chapter, /<ReaderNotation number=\{number\} \/>\s*<GuidedChapter/);
  assert.match(orientation, /readerLocalDefinitionHtml\(number\)/);
  assert.doesNotMatch(orientation, /orientation\.definitions\.map/);
});

function element(dataset = {}) {
  return { dataset, hidden: false, value: "", textContent: "", events: new Map(), addEventListener(name, handler) { this.events.set(name, handler); } };
}
test("notation and catalogue searches accept Greek names, symbols and TeX aliases and recover after clearing", async () => {
  const entries = input.topics["6"].map((entry, index) => element({ notationSearchText: [...entry, generated.topics["6"][index].aliases].join(" ") }));
  const topics = entries.map((entry) => element({ topicSearchText: entry.dataset.notationSearchText }));
  const inputField = element(), label = element(), status = element();
  const topicField = element(), topicLabel = element(), topicStatus = element();
  const panel = { querySelector(selector) { return selector.includes("search-label") ? label : selector.includes("search-status") ? status : inputField; }, querySelectorAll() { return entries; } };
  const stages = topics.map((topic) => ({ hidden: false, querySelectorAll() { return [topic]; } }));
  const directory = { querySelector(selector) { return selector.includes("search-label") ? topicLabel : selector.includes("search-status") ? topicStatus : topicField; }, querySelectorAll(selector) { return selector.includes("stage") ? stages : topics; } };
  const scheduled = [];
  vm.runInNewContext(await read("public/reader-learning.js"), {
    window: { setTimeout(handler) { scheduled.push(handler); } },
    document: { readyState: "complete", querySelectorAll(selector) { return selector === "[data-reader-notation]" ? [panel] : selector === "[data-reader-directory]" ? [directory] : []; } },
  });
  scheduled[0]();
  for (const [queries, expectedIndices] of [
    [["kappa", "κ", "\\kappa", "KAPPA", "ϰ", "\\varkappa"], [0]],
    [["phi", "varphi", "φ", "ϕ", "\\phi", "\\varphi"], [1, 2]],
  ]) {
    for (const query of queries) {
      inputField.value = query; inputField.events.get("input")();
      topicField.value = query; topicField.events.get("input")();
      assert.deepEqual(entries.map((entry) => entry.hidden), entries.map((_, index) => !expectedIndices.includes(index)), "notation query: " + query);
      assert.deepEqual(topics.map((entry) => entry.hidden), topics.map((_, index) => !expectedIndices.includes(index)), "catalogue query: " + query);
      assert.deepEqual(stages.map((stage) => stage.hidden), topics.map((entry) => entry.hidden));
    }
  }
  for (const query of ["not-a-real-term", ""]) {
    inputField.value = query; inputField.events.get("input")();
    topicField.value = query; topicField.events.get("input")();
    assert.ok(entries.every((entry) => entry.hidden === Boolean(query)));
    assert.ok(topics.every((entry) => entry.hidden === Boolean(query)));
    assert.ok(stages.every((stage) => stage.hidden === Boolean(query)));
  }
  assert.equal(status.textContent, "");
  assert.equal(topicStatus.textContent, "");
});
