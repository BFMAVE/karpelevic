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
} from "./karpelevic-boundary.mjs";

const multiply = (left, right) => ({
  real: left.real * right.real - left.imaginary * right.imaginary,
  imaginary: left.real * right.imaginary + left.imaginary * right.real,
});

function determinant(matrix) {
  const work = matrix.map((row) => [...row]);
  let value = 1;
  for (let column = 0; column < work.length; column += 1) {
    let pivot = column;
    for (let row = column + 1; row < work.length; row += 1) {
      if (Math.abs(work[row][column]) > Math.abs(work[pivot][column])) {
        pivot = row;
      }
    }
    if (Math.abs(work[pivot][column]) < 1e-15) return 0;
    if (pivot !== column) {
      [work[pivot], work[column]] = [work[column], work[pivot]];
      value *= -1;
    }
    const diagonal = work[column][column];
    value *= diagonal;
    for (let row = column + 1; row < work.length; row += 1) {
      const factor = work[row][column] / diagonal;
      for (let entry = column + 1; entry < work.length; entry += 1) {
        work[row][entry] -= factor * work[column][entry];
      }
    }
  }
  return value;
}

const adjacentFloatBuffer = new ArrayBuffer(8);
const adjacentFloatView = new DataView(adjacentFloatBuffer);

function nextUp(value) {
  if (value === 0) return Number.MIN_VALUE;
  adjacentFloatView.setFloat64(0, value, false);
  adjacentFloatView.setBigUint64(
    0,
    adjacentFloatView.getBigUint64(0, false) + 1n,
    false,
  );
  return adjacentFloatView.getFloat64(0, false);
}

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
  const beta =
    (radius ** 3 * Math.sin(Math.PI / 8)) /
    Math.sin((3 * Math.PI) / 8);
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
  assert.ok(Math.abs(alpha - 0.655850787368397414) < 1e-15);
  assert.ok(Math.abs(beta - 0.344149212631602586) < 1e-15);
  assert.ok(Math.abs(alpha + beta - 1) < 1e-15);
  assert.ok(
    Math.hypot(
      leftSide.real - alpha ** 2 * lambda.real,
      leftSide.imaginary - alpha ** 2 * lambda.imaginary,
    ) < 1e-14,
  );
});

test("the displayed order-seven matrix is stochastic and has the stated determinant", () => {
  const radius = itoArcRadius(
    3 / 8,
    { numerator: 1, denominator: 3 },
    { numerator: 2, denominator: 5 },
    7,
  );
  const alpha =
    (radius ** (5 / 2) * Math.sin(Math.PI / 4)) /
    Math.sin((3 * Math.PI) / 8);
  const beta =
    (radius ** 3 * Math.sin(Math.PI / 8)) /
    Math.sin((3 * Math.PI) / 8);
  const matrix = [
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
    [beta, 0, 0, alpha, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, alpha, 0, beta, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1],
  ];

  for (const row of matrix) {
    assert.ok(row.every((entry) => entry >= 0));
    assert.ok(Math.abs(row.reduce((sum, entry) => sum + entry, 0) - 1) < 1e-15);
  }
  for (const t of [-1, -0.25, 0, 0.4, 1.3]) {
    const characteristicMatrix = matrix.map((row, rowIndex) =>
      row.map((entry, columnIndex) =>
        (rowIndex === columnIndex ? t : 0) - entry,
      ),
    );
    const expected =
      (t - 1) * ((t ** 3 - beta) ** 2 - alpha ** 2 * t);
    assert.ok(Math.abs(determinant(characteristicMatrix) - expected) < 2e-13);
  }
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
        const lowerResidual = -Math.sin(A + B);
        const upperResidual = Math.sin(A) + Math.sin(B) - Math.sin(A + B);
        const residual =
          rho ** (s / d) * Math.sin(A) +
          rho ** q * Math.sin(B) -
          Math.sin(A + B);
        assert.ok(Math.max(s, d * q) <= order);
        assert.ok(lowerResidual < 0 && upperResidual > 0);
        assert.ok(rho > 0 && rho < 1);
        assert.ok(Math.abs(residual) < 2e-14);
      }
    }
  }
});

test("all UI-supported orders produce finite, angularly ordered points", () => {
  for (let order = 1; order <= 40; order += 1) {
    const full = fullBoundary(order, 9);
    assert.ok(
      full.every(
        (point) =>
          Number.isFinite(point.real) &&
          Number.isFinite(point.imaginary) &&
          Number.isFinite(point.radius) &&
          Number.isFinite(point.angleFraction),
      ),
    );
    if (order < 3) continue;
    const upper = upperBoundary(order, 9);
    for (let index = 1; index < upper.length; index += 1) {
      assert.ok(upper[index - 1].angleFraction <= upper[index].angleFraction);
    }
    for (let index = 1; index < full.length; index += 1) {
      assert.ok(full[index - 1].angleFraction <= full[index].angleFraction);
    }
  }
});

test("resolvable near-endpoint points retain open-interval radii", () => {
  for (let order = 3; order <= 40; order += 1) {
    const fractions = upperFarey(order);
    for (let index = 0; index < fractions.length - 1; index += 1) {
      const left = fractions[index];
      const right = fractions[index + 1];
      const leftValue = left.numerator / left.denominator;
      const rightValue = right.numerator / right.denominator;
      const offset = (rightValue - leftValue) * 1e-12;
      for (const x of [leftValue + offset, rightValue - offset]) {
        assert.ok(leftValue < x && x < rightValue);
        const radius = itoArcRadius(x, left, right, order);
        assert.ok(Number.isFinite(radius));
        assert.ok(radius > 0 && radius < 1);
      }
    }
  }
});

test("subnormal strict-interior angles retain a positive bracket", () => {
  const radius = itoArcRadius(
    Number.MIN_VALUE,
    { numerator: 0, denominator: 1 },
    { numerator: 1, denominator: 15 },
    15,
  );

  assert.ok(Number.isFinite(radius));
  assert.ok(radius > 0 && radius < 1);
});

test("the denominator-order contract excludes the degenerate order-one pair", () => {
  assert.throws(
    () =>
      fareyPairParameters(
        { numerator: 0, denominator: 1 },
        { numerator: 1, denominator: 1 },
        1,
      ),
    RangeError,
  );
});

test("endpoint subtraction preserves an ordinary adjacent binary64 point", () => {
  const left = { numerator: 1, denominator: 3 };
  const right = { numerator: 1, denominator: 2 };
  const radius = itoArcRadius(nextUp(1 / 3), left, right, 4);
  assert.ok(Number.isFinite(radius));
  assert.ok(radius > 0 && radius < 1);
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
