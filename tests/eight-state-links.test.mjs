import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import test from "node:test";
import vm from "node:vm";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import ts from "typescript";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const require = createRequire(import.meta.url);
const expectedTargets = [[3], [4], [5], [6], [7], [0], [0, 1], [1, 2]];

async function component() {
  const output = ts.transpileModule(await read("app/components/proof/EightStateLinks.tsx"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  const compiled = { exports: {} };
  vm.runInNewContext(output, { module: compiled, exports: compiled.exports, require });
  return compiled.exports;
}

// Laurent polynomials with integer coefficients. The scalar equation gives
// sin(2h)/sin(h) = r^3(1+r), so all turn identities can be checked exactly.
const polynomial = (...terms) => new Map(terms.filter(([, coefficient]) => coefficient));
function add(...values) {
  const result = new Map();
  for (const value of values) for (const [power, coefficient] of value) {
    result.set(power, (result.get(power) ?? 0) + coefficient);
  }
  return polynomial(...result);
}
function multiply(left, right) {
  return add(...Array.from(left, ([a, x]) => polynomial(...Array.from(right, ([b, y]) => [a + b, x * y]))));
}
const shift = (value, power, factor = 1) => polynomial(...Array.from(value, ([a, x]) => [a + power, factor * x]));
const coefficients = (value) => Array.from(value).sort(([a], [b]) => a - b);

test("all eight octagon turn identities follow algebraically from the scalar equation", () => {
  const one = polynomial([0, 1]);
  const sine2 = polynomial([3, 1], [4, 1]);
  const sine3 = add(multiply(sine2, sine2), shift(one, 0, -1));
  // h=pi/7 also gives sin(4h)=sin(3h) and sin(5h)=sin(2h).
  const sines = [polynomial(), one, sine2, sine3, sine3, sine2, one, polynomial()];
  const radiusPowers = [0, -1, -2, 1, 0, -1, 2, 1, 0, -1];
  const angles = [0, 2, 4, 5, 7, 9, 10, 12, 14, 16];
  const U = add(shift(sine2, 1), shift(sine2, -1), shift(sine3, 0, -1));
  const V = multiply(polynomial([0, 1], [1, 1]), polynomial([0, 1], [7, -1]));
  const expected = [
    shift(U, -2), multiply(polynomial([-1, 1], [0, 1]), V),
    shift(V, -2), U, multiply(polynomial([1, 1], [2, 1]), V),
    V, shift(U, 2), U,
  ];
  for (let i = 0; i < 8; i++) {
    const turn = add(
      shift(sines[angles[i + 1] - angles[i]], radiusPowers[i] + radiusPowers[i + 1]),
      shift(sines[angles[i + 2] - angles[i + 1]], radiusPowers[i + 1] + radiusPowers[i + 2]),
      shift(sines[angles[i + 2] - angles[i]], radiusPowers[i] + radiusPowers[i + 2], -1),
    );
    assert.deepEqual(coefficients(turn), coefficients(expected[i]), `turn T_${i} / sin(h)`);
  }
  // D_(5,7) is the consecutive turn T_5, not a separate numerical premise.
  assert.deepEqual(coefficients(expected[5]), [[0, 1], [1, 1], [7, -1], [8, -1]]);
});

function exactExample() {
  const h = Math.PI / 7;
  let lower = .97, upper = .98;
  for (let i = 0; i < 60; i++) {
    const middle = (lower + upper) / 2;
    if (middle ** 3 * (1 + middle) < 2 * Math.cos(h)) lower = middle;
    else upper = middle;
  }
  const rho = (lower + upper) / 2;
  const powers = [0, -1, -2, 1, 0, -1, 2, 1];
  const angles = [0, 2, 4, 5, 7, 9, 10, 12];
  const vertices = angles.map((angle, i) => [rho ** powers[i] * Math.cos(angle * h), rho ** powers[i] * Math.sin(angle * h)]);
  const z = [rho * Math.cos(5 * h), rho * Math.sin(5 * h)];
  const images = vertices.map(([x, y]) => [z[0] * x - z[1] * y, z[1] * x + z[0] * y]);
  return { h, rho, vertices, images, alpha: rho / (1 + rho), beta: 1 / (1 + rho) };
}
const subtract = (left, right) => left.map((value, i) => value - right[i]);
const det = ([a, b], [c, d]) => a * d - b * c;

test("the authored eight rows realise the exact example and both strict side contacts", async () => {
  const { eightStateRows } = await component();
  const { h, rho, vertices, images, alpha, beta } = exactExample();
  assert.ok(rho > .97061308028062 && rho < .97061308028063);
  const U = (rho + 1 / rho) * Math.sin(2 * h) - Math.sin(3 * h);
  const V = (1 + rho) * (1 - rho ** 7) * Math.sin(h);
  assert.ok(U > 0 && V > 0 && alpha > 0 && beta > 0);
  for (let row = 0; row < 8; row++) {
    const entries = eightStateRows[row].targets;
    assert.deepEqual(Array.from(entries, (target) => target.state), expectedTargets[row]);
    const weights = Array.from(entries, (target) => target.weight === "1" ? 1 : target.weight === "β" ? beta : alpha);
    assert.ok(Math.abs(weights.reduce((sum, weight) => sum + weight, 0) - 1) < 1e-15);
    const average = [0, 1].map((axis) => entries.reduce((sum, target, i) => sum + weights[i] * vertices[target.state][axis], 0));
    assert.ok(Math.hypot(...subtract(average, images[row])) < 2e-14, `row ${row}: Mv=zv`);
    const next = (row + 1) % 8, after = (row + 2) % 8;
    assert.ok(det(subtract(vertices[next], vertices[row]), subtract(vertices[after], vertices[row])) > .15);
    if (row >= 6) {
      const [a, b] = entries.map((entry) => vertices[entry.state]);
      const side = subtract(b, a), offset = subtract(images[row], a);
      assert.ok(Math.abs(det(side, offset)) < 2e-14, "the image lies on its specified side");
      const parameter = (offset[0] * side[0] + offset[1] * side[1]) / (side[0] ** 2 + side[1] ** 2);
      assert.ok(parameter > 0 && parameter < 1);
      assert.ok(Math.abs(parameter - alpha) < 2e-14, "alpha is the strict segment parameter");
    }
  }
});

test("native row equations retain an honest row-six fallback and all matrix subscripts", async () => {
  const { EightStateLinks } = await component();
  const html = renderToStaticMarkup(createElement(EightStateLinks));
  assert.match(html, /data-eight-state-controls="[^"]*" hidden=""/);
  assert.match(html, /<label for="eight-state-row">/);
  assert.match(html, /aria-controls="eight-state-selected-relation"/);
  const panels = [...html.matchAll(/<div data-eight-state-relation="(\d)"([^>]*)>([\s\S]*?)<\/div>/g)];
  assert.equal(panels.length, 8);
  for (const [whole, number, attributes, body] of panels) {
    const row = Number(number);
    assert.equal(attributes.includes('hidden=""'), row !== 6);
    const words = row < 6
      ? `Row ${row}: z times v ${row} equals v ${expectedTargets[row][0]}.`
      : `Row ${row}: z times v ${row} equals beta times v ${expectedTargets[row][0]} plus alpha times v ${expectedTargets[row][1]}, which is contact c ${row - 5}.`;
    assert.ok(whole.includes(`aria-label="${words}"`), `spoken exact equation for row ${row}`);
    for (const target of expectedTargets[row]) {
      assert.ok(body.includes(`<msub><mi>M</mi><mrow><mn>${row}</mn><mo>,</mo><mn>${target}</mn></mrow></msub>`));
    }
  }
  assert.match(html, /role="status" aria-live="polite" aria-atomic="true"/);
  assert.match(html, /Double circle:[\s\S]*Diamond:[\s\S]*Triangles:/);
});

function node(dataset = {}) {
  return { dataset, style: {}, hidden: false, value: "", textContent: "", events: new Map(), addEventListener(type, callback) { this.events.set(type, callback); } };
}

async function controllerFixture(readyState) {
  const select = node(), controls = node(), announcement = node();
  select.value = "6"; controls.hidden = true;
  const relations = expectedTargets.map((targets, row) => node({ eightStateRelation: String(row), eightStateAnnouncementText: `exact row ${row} with targets ${targets.join(",")}` }));
  const groups = Object.fromEntries([
    ["row-diagram", "eightStateRowDiagram"], ["source-highlight", "eightStateSourceHighlight"],
    ["image-highlight", "eightStateImageHighlight"], ["target-highlight", "eightStateTargetHighlight"],
    ["node", "eightStateNode"],
  ].map(([attribute, property]) => [`[data-eight-state-${attribute}]`, expectedTargets.map((_, i) => node({ [property]: String(i) }))]));
  groups["[data-eight-state-edge-from]"] = expectedTargets.flatMap((targets, from) => targets.map((to) => node({ eightStateEdgeFrom: String(from), eightStateEdgeTo: String(to) })));
  const scope = { querySelectorAll(selector) { return groups[selector] ?? []; } };
  const links = node({ eightStateDefault: "6" });
  links.closest = (selector) => selector === ".reader-guide" ? scope : null;
  links.querySelector = (selector) => ({ "[data-eight-state-select]": select, "[data-eight-state-controls]": controls, "[data-eight-state-announcement]": announcement })[selector];
  links.querySelectorAll = () => relations;
  const scheduled = [], events = new Map();
  vm.runInNewContext(await read("public/eight-state-links.js"), {
    document: { readyState, querySelectorAll() { return [links]; } },
    window: { setTimeout(callback) { scheduled.push(callback); }, addEventListener(type, callback) { events.set(type, callback); } },
  });
  return { select, controls, announcement, relations, groups, links, scheduled, events };
}

test("all eight selections connect the same row, image, targets and outgoing edges reversibly", async () => {
  const fixture = await controllerFixture("complete");
  const { select, controls, announcement, relations, groups, links, scheduled } = fixture;
  assert.equal(controls.hidden, true, "no mutation before the deferred enhancement");
  assert.equal(links.dataset.eightStateEnhanced, undefined);
  assert.equal(scheduled.length, 1);
  scheduled[0]();
  assert.equal(controls.hidden, false);
  assert.equal(announcement.textContent, "", "initial fallback does not cause a live announcement");
  for (const row of [6, 0, 1, 2, 3, 4, 5, 7, 6]) {
    select.value = String(row); select.events.get("change")();
    assert.equal(links.dataset.eightStateSelected, String(row));
    assert.deepEqual(relations.map((panel) => !panel.hidden), expectedTargets.map((_, i) => i === row));
    for (const attribute of ["row-diagram", "source-highlight", "image-highlight"]) {
      assert.deepEqual(groups[`[data-eight-state-${attribute}]`].map((item) => item.style.display !== "none"), expectedTargets.map((_, i) => i === row));
    }
    assert.deepEqual(groups["[data-eight-state-target-highlight]"].map((item) => item.style.display !== "none"), expectedTargets.map((_, i) => expectedTargets[row].includes(i)));
    assert.deepEqual(groups["[data-eight-state-node]"].map((item) => item.dataset.eightStateRole), expectedTargets.map((_, i) => i === row ? "source" : expectedTargets[row].includes(i) ? "target" : "other"));
    const activeEdges = groups["[data-eight-state-edge-from]"].filter((item) => item.dataset.eightStateActive === "true");
    assert.deepEqual(activeEdges.map((item) => Number(item.dataset.eightStateEdgeTo)), expectedTargets[row]);
    assert.equal(announcement.textContent, relations[row].dataset.eightStateAnnouncementText);
  }
  select.value = "99"; select.events.get("change")();
  assert.equal(links.dataset.eightStateSelected, "6", "invalid input preserves the displayed relation");
});

test("a still-loading page waits for load and a deferred task before enhancing", async () => {
  const { controls, scheduled, events } = await controllerFixture("loading");
  assert.equal(scheduled.length, 0);
  assert.equal(controls.hidden, true);
  events.get("load")();
  assert.equal(controls.hidden, true);
  assert.equal(scheduled.length, 1);
  scheduled[0]();
  assert.equal(controls.hidden, false);
});
