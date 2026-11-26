import assert from "node:assert/strict";
import test from "node:test";
import { chordState, orderFiveWitness, polygonWitnessState, sixMarkState } from "../app/lib/perfect-mirsky-model.mjs";

test("the six-mark example distinguishes the threshold from the checkpoint case", () => {
  const threshold = sixMarkState(20);
  const checkpoint = sixMarkState(30);
  assert.equal(threshold.spacing, "1/3");
  assert.equal(threshold.total, "1");
  assert.equal(threshold.bound, "3/4");
  assert.equal(checkpoint.total, "9/8");
  assert.equal(checkpoint.bound, "2/3");
});

test("the union comparison keeps the same eigenvalue when the sixth polygon is added", () => {
  const [x, y] = orderFiveWitness;
  assert.ok(x > -.279293 && x < -.279292 && y > .7634 && y < .7637);
  for (const order of [3, 4, 5]) {
    assert.equal(polygonWitnessState(order).inside, false);
    assert.match(polygonWitnessState(order).note, new RegExp(`outside.*order ${order}`));
  }
  assert.equal(polygonWitnessState(6).inside, true);
  assert.match(polygonWitnessState(6).note, /hexagon contains the point/);
});

test("the two chord calculations agree across the slider range", () => {
  for (let percent = 0; percent <= 100; percent++) {
    const { u, x, y, chance, pairLoss, radiusLoss } = chordState(percent);
    assert.ok(Math.abs(pairLoss - u * (1 - u) * (2 - Math.SQRT2)) < 1e-14);
    assert.ok(Math.abs(radiusLoss - (1 - x * x - y * y)) < 1e-14);
    assert.ok(Math.abs(pairLoss - radiusLoss) < 1e-14);
    assert.equal(chance, 2 * u * (1 - u));
  }
});
