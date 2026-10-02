import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const read = (file) => readFile(new URL(`../${file}`, import.meta.url), "utf8");
const worker = import(new URL("../dist/server/index.js", import.meta.url)).then((module) => module.default);
async function render(route) {
  const response = await (await worker).fetch(new Request(`https://bfmave.github.io${route}`), { ASSETS: { fetch: async () => new Response("", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
  assert.equal(response.status, 200);
  return (await response.text()).replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
}
function element(dataset = {}) {
  return { dataset, hidden: false, disabled: false, value: "", textContent: "", attributes: {}, events: new Map(), setAttribute(name, value) { this.attributes[name] = String(value); }, addEventListener(name, handler) { this.events.set(name, handler); } };
}
async function enhance(groups) {
  const scheduled = [];
  vm.runInNewContext(await read("public/reader-learning.js"), {
    window: { setTimeout(handler) { scheduled.push(handler); } },
    document: { readyState: "complete", querySelectorAll(selector) { return groups[selector] ?? []; } },
  });
  scheduled[0]();
}

test("the learning overview identifies deferred obligations and preserves the complete-proof route", async () => {
  const html = (await render("/prerequisites")).replace(/<!--[\s\S]*?-->/g, "");
  assert.match(html, /Understand the theorem and its main ideas/);
  assert.match(html, /Study the complete proof/);
  assert.equal((html.match(/Accepted here:/g) ?? []).length, 3);
  assert.match(html, /Main case: k ≥ 4/);
  assert.match(html, /least realizing order/);
  assert.match(html, /stationary reset matrix/);
  assert.match(html, /id="main-ideas"/);
  assert.match(html, /State the answer precisely/);
  assert.match(html, /negative axis is 1\/2/);
  const home = await render("/");
  assert.match(home, /name="atlas-view"[^>]*value="single"/);
  assert.match(home, /Compare orders one–seven/);
  assert.ok(home.indexOf("Start learning") < home.indexOf("Publication, editions and verification"));
});

test("the current lesson has compact orientation, searchable notation and explicit figure scope", async () => {
  const html = await render("/proof/topic-vi");
  assert.match(html, /<details class="reader-orientation-details">/);
  assert.match(html, /<details class="reader-notation proof-guided-layer"/);
  assert.match(html, /data-topic-search-text="[^"]*κ/);
  assert.match(html, /Guided lesson/);
  assert.match(html, /Source proof/);
  assert.match(html, /Lesson 1:/);
  assert.match(html, /Lesson 2:/);
  assert.match(html, /Lesson 3:/);
  assert.match(html, /Hypothetical skipped-return index diagram/);
  assert.match(html, /Exact local deformation model; not an invariant eigenvalue polygon/);
  assert.match(html, /data-figure-view-button="fit"/);
  assert.doesNotMatch(html, /Accessibility does not lower the standard/);
  assert.match(html, /Mathematical and editorial responsibility remains with the authors/);
});

test("diagram sizing and retrieval filters update visible results and accessible state", async () => {
  const fit = element({ figureViewButton: "fit" }), enlarge = element({ figureViewButton: "enlarge" });
  const controls = element(); controls.hidden = true;
  const frame = element({ figureView: "enlarge" });
  frame.querySelector = () => controls; frame.querySelectorAll = () => [fit, enlarge];
  const input = element(), label = element(), status = element(); label.hidden = true;
  const entries = [element(), element()]; entries[0].textContent = "κ cyclic shift"; entries[1].textContent = "winding actual turns";
  const panel = { querySelector(selector) { return selector.includes("search-label") ? label : selector.includes("search-status") ? status : input; }, querySelectorAll() { return entries; } };
  const topicInput = element(), topicLabel = element(), topicStatus = element(); topicLabel.hidden = true;
  const topics = [element({ topicSearchText: "convexity Jensen IX" }), element({ topicSearchText: "winding VII κ" })];
  const stages = topics.map((topic) => ({ hidden: false, querySelectorAll() { return [topic]; } }));
  const directory = { querySelector(selector) { return selector.includes("search-label") ? topicLabel : selector.includes("search-status") ? topicStatus : topicInput; }, querySelectorAll(selector) { return selector.includes("stage") ? stages : topics; } };
  await enhance({ "[data-figure-frame]": [frame], "[data-reader-notation]": [panel], "[data-reader-directory]": [directory] });
  fit.events.get("click")();
  assert.equal(frame.dataset.figureView, "fit");
  assert.equal(fit.attributes["aria-pressed"], "true");
  assert.equal(enlarge.attributes["aria-pressed"], "false");
  assert.equal(controls.hidden, false);
  input.value = "WINDING"; input.events.get("input")();
  assert.equal(entries[0].hidden, true); assert.equal(entries[1].hidden, false);
  assert.equal(status.textContent, "1 matching notation entry.");
  topicInput.value = "κ"; topicInput.events.get("input")();
  assert.equal(topics[0].hidden, true); assert.equal(stages[0].hidden, true);
  assert.equal(topics[1].hidden, false); assert.equal(topicStatus.textContent, "1 matching topic.");
  topicInput.value = ""; topicInput.events.get("input")();
  assert.ok(topics.every((topic) => !topic.hidden));
});

test("the exact local motion keeps contact constraints while opening inward for either parameter sign", async () => {
  const names = ["polygon", "x1", "x2", "y", "intersection", "contact-side", "final-side", "model-gap", "graph-gap", "curve-point"];
  const nodes = Object.fromEntries(names.map((name) => [name, element()]));
  const geometry = element({ originX: "100", originY: "685", scale: "70" });
  const graph = element({ originX: "78", originY: "298", tMin: "-.08", tSpan: ".22", uMin: "-.18", uSpan: ".34", width: "482", height: "228" });
  const description = element(), input = element(), reset = element(), status = element(); input.value = ".1"; input.disabled = true;
  const figure = { querySelector(selector) { if (selector === "svg desc") return description; if (selector.includes("label=")) return null; if (selector.includes("geometry")) return geometry; if (selector.includes("graph]")) return graph; return nodes[selector.match(/data-chain-motion-([^\]]+)/)?.[1]]; } };
  const controls = { hidden: true, closest() { return figure; }, querySelector(selector) { return selector.includes("input") ? input : selector.includes("reset") ? reset : status; } };
  await enhance({ "[data-chain-motion-controls]": [controls] });
  assert.equal(controls.hidden, false); assert.equal(input.disabled, false);
  const unmap = (x, y) => [(Number(x) - 100) / 70, (685 - Number(y)) / 70];
  const det = ([a, b], [c, d]) => a * d - b * c;
  const sub = (a, b) => a.map((x, i) => x - b[i]);
  for (const t of [-.05, -.025, 0, .05, .1]) {
    input.value = String(t); input.events.get("input")();
    const polygon = nodes.polygon.attributes.points.split(" ").map((pair) => unmap(...pair.split(",")));
    const side = sub(polygon[2], polygon[1]);
    assert.ok(Math.abs(det(side, sub([1.5, .5], polygon[1]))) < 1e-12, "the fixed contact stays on its moving line");
    const x2 = polygon[2]; assert.ok(Math.abs(x2[1] - 1.5 * x2[0] + 2) < 1e-12, "the vertex stays on the exposing line");
    const y = unmap(nodes.y.attributes.cx, nodes.y.attributes.cy);
    const inward = det(sub(polygon[3], x2), sub(y, x2));
    assert.ok(Math.abs(inward - 3 * t * t / (1 + 6 * t)) < 1e-12);
    assert.equal(inward > 1e-13, t !== 0);
    assert.match(description.textContent, /not an invariant eigenvalue polygon/);
  }
  reset.events.get("click")();
  assert.equal(input.value, "0");
  assert.match(status.textContent, /has not moved inward/);
});

test("the drawn octagon uses the actual eigenvector and its scaled rotated images", async () => {
  const html = await render("/proof/topic-xiv");
  const polygon = html.match(/<polygon points="([^"]+)"[^>]*data-eigenvector-polygon/);
  const image = html.match(/<polygon points="([^"]+)"[^>]*data-image-polygon/);
  assert.ok(polygon && image);
  const unmap = (text) => text.split(" ").map((pair) => { const [x, y] = pair.split(",").map(Number); return [(x - 225) / 175, (250 - y) / 175]; });
  const vertices = unmap(polygon[1]), images = unmap(image[1]);
  const sub = (a, b) => a.map((x, i) => x - b[i]);
  const det = ([a, b], [c, d]) => a * d - b * c;
  const rho = .970613080280626, angle = 5 * Math.PI / 7;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) if (j !== i && j !== (i + 1) % 8) {
      assert.ok(det(sub(vertices[(i + 1) % 8], vertices[i]), sub(vertices[j], vertices[i])) > .1, "every other point is inward of each actual drawn side");
    }
    const [x, y] = vertices[i];
    assert.ok(Math.hypot(images[i][0] - rho * (x * Math.cos(angle) - y * Math.sin(angle)), images[i][1] - rho * (x * Math.sin(angle) + y * Math.cos(angle))) < 1e-5);
  }
  assert.match(html, /value="8"/);
  assert.match(html, /Compare with order seven/);
  assert.match(html, /supporting-side certificate/);
  assert.match(html, /exact contacts and certified supporting-side signs/);
});
