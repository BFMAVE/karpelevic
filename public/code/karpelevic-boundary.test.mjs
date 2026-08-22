import assert from "node:assert/strict";
import test from "node:test";
import {
  boundaryRadius,
  fareyPairParameters,
  fullBoundary,
  itoArcRadius,
  radialBoundaryRadius,
  upperBoundary,
  upperFarey,
} from "./karpelevic-boundary.js";

const multiply = (left, right) => ({
  real: left.real * right.real - left.imaginary * right.imaginary,
  imaginary: left.real * right.imaginary + left.imaginary * right.real,
});

test("the complete order-seven Farey table is exact", () => {
  const fractions = upperFarey(7);
  assert.equal(fractions.length, 10);
  assert.deepEqual(
    fractions.slice(0, -1).map((left, index) => {
      const right = fractions[index + 1];
      assert.equal(
        left.denominator * right.numerator -
          left.numerator * right.denominator,
        1,
      );
      assert.ok(left.denominator + right.denominator > 7);
      const { p, q, r, s, d, e } = fareyPairParameters(left, right, 7);
      return [p, q, r, s, d, e];
    }),
    [
      [0, 1, 1, 7, 7, 0],
      [1, 6, 1, 7, 1, 1],
      [1, 5, 1, 6, 1, 1],
      [1, 4, 1, 5, 1, 1],
      [1, 4, 2, 7, 1, 3],
      [1, 3, 2, 7, 2, 1],
      [1, 3, 2, 5, 2, -1],
      [2, 5, 3, 7, 1, 2],
      [1, 2, 3, 7, 3, 1],
    ],
  );
});

test("the computation at x=3/8 matches the manuscript", () => {
  const left = { numerator: 1, denominator: 3 };
  const right = { numerator: 2, denominator: 5 };
  const radius = itoArcRadius(3 / 8, left, right, 7);
  assert.ok(Math.abs(radius - 0.940100221928822853) < 1e-15);

  const alpha =
    (radius ** (5 / 2) * Math.sin(Math.PI / 4)) /
    Math.sin((3 * Math.PI) / 8);
  const beta = 1 - alpha;
  const lambda = {
    real: radius * Math.cos((3 * Math.PI) / 4),
    imaginary: radius * Math.sin((3 * Math.PI) / 4),
  };
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

test("sampled open-interval radii solve the scalar equation", () => {
  for (let order = 3; order <= 12; order += 1) {
    const fractions = upperFarey(order);
    for (let index = 0; index < fractions.length - 1; index += 1) {
      const left = fractions[index];
      const right = fractions[index + 1];
      const leftValue = left.numerator / left.denominator;
      const rightValue = right.numerator / right.denominator;
      for (const proportion of [0.2, 0.5, 0.8]) {
        const x = leftValue + proportion * (rightValue - leftValue);
        const rho = itoArcRadius(x, left, right, order);
        const { p, q, r, s, d } = fareyPairParameters(left, right, order);
        const A = 2 * Math.PI * Math.abs(q * x - p);
        const B = (2 * Math.PI * Math.abs(s * x - r)) / d;
        const residual =
          rho ** (s / d) * Math.sin(A) +
          rho ** q * Math.sin(B) -
          Math.sin(A + B);
        assert.ok(rho > 0 && rho < 1);
        assert.ok(Math.abs(residual) < 2e-14);
      }
    }
  }
});

test("order three distinguishes the nonreal arc limit from the radial endpoint", () => {
  const left = { numerator: 1, denominator: 3 };
  const right = { numerator: 1, denominator: 2 };
  assert.throws(() => itoArcRadius(1 / 2, left, right, 3), RangeError);
  assert.equal(radialBoundaryRadius(1 / 2, left, right, 3), 1);
  assert.equal(boundaryRadius(1 / 2, left, right, 3), 1);
  assert.ok(
    Math.abs(itoArcRadius(1 / 2 - 1e-5, left, right, 3) - 1 / 2) <
      1e-8,
  );
  assert.ok(
    Math.abs(
      itoArcRadius(1 / 2 - Number.EPSILON / 4, left, right, 3) - 1 / 2,
    ) < Number.EPSILON,
  );

  const upper = upperBoundary(3, 40);
  const junction = upper.findIndex(
    (point) => point.real === -0.5 && point.imaginary === 0,
  );
  assert.ok(junction > 0);
  assert.deepEqual(
    upper.slice(junction, junction + 2).map((point) => point.real),
    [-0.5, -1],
  );
  for (const point of upper) {
    if (point.angleFraction <= 1 / 3) {
      assert.ok(
        Math.abs(point.real + Math.sqrt(3) * point.imaginary - 1) < 2e-14,
      );
    } else if (point.imaginary > 0) {
      assert.ok(Math.abs(point.real + 1 / 2) < 2e-14);
    }
  }
  assert.deepEqual(
    fullBoundary(3, 40)
      .slice(junction, junction + 3)
      .map((point) => point.real),
    [-0.5, -1, -0.5],
  );
});

test("orders one and two are exact, and higher-order output is conjugation symmetric", () => {
  assert.deepEqual(fullBoundary(1), [
    { real: 1, imaginary: 0, angleFraction: 0, radius: 1 },
  ]);
  assert.deepEqual(fullBoundary(2), [
    { real: -1, imaginary: 0, angleFraction: 0.5, radius: 1 },
    { real: 1, imaginary: 0, angleFraction: 0, radius: 1 },
  ]);

  const points = fullBoundary(7, 20);
  for (const point of points) {
    assert.ok(
      points.some(
        (candidate) =>
          Math.abs(candidate.real - point.real) < 1e-12 &&
          Math.abs(candidate.imaginary + point.imaginary) < 1e-12,
      ),
    );
  }
});

test("invalid Farey data and ambiguous endpoints are rejected", () => {
  assert.throws(
    () =>
      fareyPairParameters(
        { numerator: 1, denominator: 3 },
        { numerator: 1, denominator: 2 },
        7,
      ),
    RangeError,
  );
  assert.throws(
    () =>
      itoArcRadius(
        1 / 3,
        { numerator: 1, denominator: 3 },
        { numerator: 2, denominator: 5 },
        7,
      ),
    RangeError,
  );
  assert.throws(() => upperBoundary(3, 1), RangeError);
});
