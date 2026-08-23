import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";
import {
  MAX_EXACT_ORDER,
  boundaryRadius,
  fareyPairParameters,
  fareySequence,
  fullBoundary,
  itoArcRadius,
  radialBoundaryRadius,
  upperBoundary,
  upperFarey,
} from "../public/code/karpelevic-boundary.js";
import { composeTopicXIVRuntime } from "../scripts/lib/topic-xiv-runtime.mjs";

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

test("the downloadable module is byte-identical to the canonical numerical core", async () => {
  const [canonical, published] = await Promise.all([
    readFile(new URL("../app/lib/karpelevic-boundary-core.js", import.meta.url), "utf8"),
    readFile(new URL("../public/code/karpelevic-boundary.js", import.meta.url), "utf8"),
  ]);
  assert.equal(published, canonical);
});

test("the composed classic-script runtime is strict, valid, and executable", async () => {
  const source = await composeTopicXIVRuntime(
    new URL("..", import.meta.url).pathname,
  );
  assert.match(source, /\"use strict\";/);
  assert.doesNotMatch(source, /^\s*export\b/m);
  assert.doesNotThrow(() =>
    vm.runInNewContext(source, {
      document: { querySelector: () => null },
    }),
  );
});

test("order-seven Farey table is exact", () => {
  const fractions = upperFarey(7);
  assert.equal(fractions.length, 10);
  assert.deepEqual(fractions[0], { numerator: 0, denominator: 1 });
  assert.deepEqual(fractions.at(-1), { numerator: 1, denominator: 2 });

  for (let index = 0; index < fractions.length - 1; index += 1) {
    const left = fractions[index];
    const right = fractions[index + 1];
    assert.equal(
      left.denominator * right.numerator -
        left.numerator * right.denominator,
      1,
    );
    assert.ok(left.denominator + right.denominator > 7);
  }

  assert.deepEqual(
    fractions.slice(0, -1).map((left, index) => {
      const { p, q, r, s, d, e } = fareyPairParameters(
        left,
        fractions[index + 1],
        7,
      );
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

test("the computation at x=3/8 reproduces the manuscript", () => {
  const fractions = upperFarey(7);
  const left = fractions.find(
    (fraction) => fraction.numerator === 1 && fraction.denominator === 3,
  );
  const right = fractions.find(
    (fraction) => fraction.numerator === 2 && fraction.denominator === 5,
  );
  assert.ok(left && right);
  assert.deepEqual(fareyPairParameters(left, right, 7), {
    p: 1,
    q: 3,
    r: 2,
    s: 5,
    d: 2,
    e: -1,
  });
  const radius = itoArcRadius(3 / 8, left, right, 7);
  assert.ok(Math.abs(radius - 0.940100221928822853) < 1e-15);

  const A = Math.PI / 4;
  const B = Math.PI / 8;
  const alpha = (radius ** (5 / 2) * Math.sin(A)) / Math.sin(A + B);
  const beta = (radius ** 3 * Math.sin(B)) / Math.sin(A + B);
  const lambda = {
    real: radius * Math.cos((3 * Math.PI) / 4),
    imaginary: radius * Math.sin((3 * Math.PI) / 4),
  };
  const multiply = (leftValue, rightValue) => ({
    real:
      leftValue.real * rightValue.real -
      leftValue.imaginary * rightValue.imaginary,
    imaginary:
      leftValue.real * rightValue.imaginary +
      leftValue.imaginary * rightValue.real,
  });
  const lambdaCubed = multiply(multiply(lambda, lambda), lambda);
  const polynomialLeft = multiply(
    { real: lambdaCubed.real - beta, imaginary: lambdaCubed.imaginary },
    { real: lambdaCubed.real - beta, imaginary: lambdaCubed.imaginary },
  );
  const polynomialResidual = {
    real: polynomialLeft.real - alpha ** 2 * lambda.real,
    imaginary: polynomialLeft.imaginary - alpha ** 2 * lambda.imaginary,
  };
  assert.ok(Math.abs(alpha - 0.655850787368397414) < 1e-15);
  assert.ok(Math.abs(beta - 0.344149212631602586) < 1e-15);
  assert.ok(Math.abs(alpha + beta - 1) < 1e-15);
  assert.ok(
    Math.hypot(polynomialResidual.real, polynomialResidual.imaginary) < 1e-14,
  );
});

test("the worked order-seven matrix is stochastic and has the stated determinant", () => {
  const left = { numerator: 1, denominator: 3 };
  const right = { numerator: 2, denominator: 5 };
  const radius = itoArcRadius(3 / 8, left, right, 7);
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

test("sampled interval radii solve the scalar equation through order forty", () => {
  // Nine 80-point intervals with their eight shared endpoints removed, exactly
  // matching the manuscript appendix's np.linspace convention.
  assert.equal(upperBoundary(7, 80).length, 9 * 80 - 8);

  for (let order = 3; order <= 40; order += 1) {
    const fractions = upperFarey(order);
    for (let index = 0; index < fractions.length - 1; index += 1) {
      const left = fractions[index];
      const right = fractions[index + 1];
      const leftValue = left.numerator / left.denominator;
      const rightValue = right.numerator / right.denominator;
      for (const proportion of [0.1, 0.5, 0.9]) {
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

test("UI-supported orders have finite points in normalized angular order", () => {
  for (let order = 1; order <= 40; order += 1) {
    const full = fullBoundary(order, 11);
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

    const upper = upperBoundary(order, 11);
    for (let index = 0; index < upper.length; index += 1) {
      assert.ok(upper[index].angleFraction >= 0);
      assert.ok(upper[index].angleFraction <= 0.5);
      if (index > 0) {
        assert.ok(
          upper[index - 1].angleFraction <= upper[index].angleFraction,
        );
      }
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

test("endpoint subtraction preserves an ordinary adjacent binary64 point", () => {
  const left = { numerator: 1, denominator: 3 };
  const right = { numerator: 1, denominator: 2 };
  const radius = itoArcRadius(nextUp(1 / 3), left, right, 4);
  assert.ok(Number.isFinite(radius));
  assert.ok(radius > 0 && radius < 1);
});

test("the order-three arc limit and outer radial endpoint remain distinct", () => {
  const left = { numerator: 1, denominator: 3 };
  const right = { numerator: 1, denominator: 2 };

  assert.throws(() => itoArcRadius(1 / 2, left, right, 3), RangeError);
  assert.equal(radialBoundaryRadius(1 / 2, left, right, 3), 1);
  assert.equal(boundaryRadius(1 / 2, left, right, 3), 1);

  const nearEndpoint = itoArcRadius(1 / 2 - 1e-5, left, right, 3);
  assert.ok(Math.abs(nearEndpoint - 1 / 2) < 1e-8);
  const finalBinary64InteriorPoint = 1 / 2 - Number.EPSILON / 4;
  assert.ok(
    Math.abs(
      itoArcRadius(finalBinary64InteriorPoint, left, right, 3) - 1 / 2,
    ) < Number.EPSILON,
  );
});

test("order-three exceptional real segment is retained", () => {
  const points = upperBoundary(3, 40);
  // Forty points on each nonreal interval, with the shared root of unity
  // deduplicated, followed by the exact real-segment endpoint -1.
  assert.equal(points.length, 80);
  assert.ok(points.every((point) => Number.isFinite(point.real) && Number.isFinite(point.imaginary)));
  assert.ok(
    points.some(
      (point) =>
        Math.abs(point.real + 0.5) < 1e-12 &&
        Math.abs(point.imaginary - Math.sqrt(3) / 2) < 1e-12,
    ),
  );
  const junction = points.findIndex(
    (point) => point.real === -0.5 && point.imaginary === 0,
  );
  assert.ok(junction > 0);
  assert.ok(points[junction - 1].imaginary > 0);
  assert.equal(points[junction + 1].real, -1);
  assert.equal(points[junction + 1].imaginary, 0);

  for (const point of points) {
    if (point.angleFraction <= 1 / 3) {
      assert.ok(
        Math.abs(point.real + Math.sqrt(3) * point.imaginary - 1) < 2e-14,
      );
    } else if (point.imaginary > 0) {
      assert.ok(Math.abs(point.real + 1 / 2) < 2e-14);
    }
  }

  const closed = fullBoundary(3, 40);
  assert.deepEqual(
    closed.slice(junction, junction + 3).map((point) => point.real),
    [-0.5, -1, -0.5],
  );
});

test("orders one and two use exact boundary descriptions", () => {
  assert.deepEqual(fullBoundary(1), [
    { real: 1, imaginary: 0, angleFraction: 0, radius: 1 },
  ]);
  assert.deepEqual(fullBoundary(2), [
    { real: -1, imaginary: 0, angleFraction: 0.5, radius: 1 },
    { real: 1, imaginary: 0, angleFraction: 0, radius: 1 },
  ]);
});

test("full boundary is conjugation symmetric", () => {
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

test("public functions reject ambiguous or unsafe input", () => {
  for (const order of [0, -1, 1.5, Number.NaN, Number.POSITIVE_INFINITY]) {
    assert.throws(() => fareySequence(order), RangeError);
  }
  assert.throws(() => fareySequence(MAX_EXACT_ORDER + 1), RangeError);
  assert.throws(() => upperBoundary(3, 0), RangeError);
  assert.throws(() => upperBoundary(3, 1), RangeError);
  assert.throws(() => upperBoundary(3, 2.5), RangeError);

  const fractions = upperFarey(7);
  const left = fractions.find(
    (fraction) => fraction.numerator === 1 && fraction.denominator === 3,
  );
  const right = fractions.find(
    (fraction) => fraction.numerator === 2 && fraction.denominator === 5,
  );
  assert.ok(left && right);
  assert.throws(() => boundaryRadius(3 / 8, left, right, 7, 0), RangeError);
  assert.throws(() => itoArcRadius(1 / 3, left, right, 7), RangeError);
  assert.throws(
    () =>
      boundaryRadius(
        3 / 8,
        { numerator: 1, denominator: 4 },
        right,
        7,
      ),
    RangeError,
  );
  assert.throws(() => fareyPairParameters(right, left, 7), RangeError);
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
      fareyPairParameters(
        { numerator: 1, denominator: 8 },
        { numerator: 1, denominator: 7 },
        7,
      ),
    RangeError,
  );
  assert.throws(
    () =>
      fareyPairParameters(
        { numerator: 0, denominator: 1 },
        { numerator: 2, denominator: 7 },
        7,
      ),
    RangeError,
  );
});
