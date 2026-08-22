import assert from "node:assert/strict";
import test from "node:test";
import {
  boundaryRadius,
  fareyPairParameters,
} from "./karpelevic-boundary.js";

const left = { numerator: 1, denominator: 3 };
const right = { numerator: 2, denominator: 5 };

test("the order-seven ray x=3/8 matches the manuscript", () => {
  assert.deepEqual(fareyPairParameters(left, right, 7), {
    p: 1,
    q: 3,
    r: 2,
    s: 5,
    d: 2,
    e: -1,
  });

  const radius = boundaryRadius(3 / 8, left, right, 7);
  assert.ok(Math.abs(radius - 0.940100221928822853) < 1e-15);

  const alpha =
    (radius ** (5 / 2) * Math.sin(Math.PI / 4)) / Math.sin((3 * Math.PI) / 8);
  const beta = 1 - alpha;
  const angle = (3 * Math.PI) / 4;
  const lambda = {
    real: radius * Math.cos(angle),
    imaginary: radius * Math.sin(angle),
  };
  const multiply = (a, b) => ({
    real: a.real * b.real - a.imaginary * b.imaginary,
    imaginary: a.real * b.imaginary + a.imaginary * b.real,
  });
  const lambdaCubed = multiply(multiply(lambda, lambda), lambda);
  const shifted = {
    real: lambdaCubed.real - beta,
    imaginary: lambdaCubed.imaginary,
  };
  const leftSide = multiply(shifted, shifted);
  assert.ok(
    Math.hypot(
      leftSide.real - alpha ** 2 * lambda.real,
      leftSide.imaginary - alpha ** 2 * lambda.imaginary,
    ) < 1e-14,
  );
});

test("the parameter helper rejects a nonconsecutive determinant-one pair", () => {
  assert.throws(
    () =>
      fareyPairParameters(
        { numerator: 1, denominator: 3 },
        { numerator: 1, denominator: 2 },
        7,
      ),
    RangeError,
  );
});
