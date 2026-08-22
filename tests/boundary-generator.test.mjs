import assert from "node:assert/strict";
import test from "node:test";
import {
  MAX_EXACT_ORDER,
  boundaryRadius,
  fareyPairParameters,
  fareySequence,
  fullBoundary,
  upperBoundary,
  upperFarey,
} from "../public/code/karpelevic-boundary.js";

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
      const { q, s, d, e } = fareyPairParameters(left, fractions[index + 1], 7);
      return [q, s, d, e];
    }),
    [
      [1, 7, 7, 0],
      [6, 7, 1, 1],
      [5, 6, 1, 1],
      [4, 5, 1, 1],
      [4, 7, 1, 3],
      [3, 7, 2, 1],
      [3, 5, 2, -1],
      [5, 7, 1, 2],
      [2, 7, 3, 1],
    ],
  );
});

test("worked ray x=3/8 reproduces the manuscript", () => {
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
  const radius = boundaryRadius(3 / 8, left, right, 7);
  assert.ok(Math.abs(radius - 0.940100221928822853) < 1e-15);

  const A = Math.PI / 4;
  const B = Math.PI / 8;
  const alpha = (radius ** (5 / 2) * Math.sin(A)) / Math.sin(A + B);
  const beta = 1 - alpha;
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
  const carrierLeft = multiply(
    { real: lambdaCubed.real - beta, imaginary: lambdaCubed.imaginary },
    { real: lambdaCubed.real - beta, imaginary: lambdaCubed.imaginary },
  );
  const carrierResidual = {
    real: carrierLeft.real - alpha ** 2 * lambda.real,
    imaginary: carrierLeft.imaginary - alpha ** 2 * lambda.imaginary,
  };
  assert.ok(Math.abs(alpha - 0.655850787368397414) < 1e-15);
  assert.ok(Math.hypot(carrierResidual.real, carrierResidual.imaginary) < 1e-14);
});

test("sampled cell radii solve the scalar equation", () => {
  // Nine 80-point cells with their eight shared endpoints removed, exactly
  // matching the manuscript appendix's np.linspace convention.
  assert.equal(upperBoundary(7, 80).length, 9 * 80 - 8);

  for (let order = 3; order <= 12; order += 1) {
    const fractions = upperFarey(order);
    for (let index = 0; index < fractions.length - 1; index += 1) {
      const left = fractions[index];
      const right = fractions[index + 1];
      const x =
        (left.numerator / left.denominator +
          right.numerator / right.denominator) /
        2;
      const rho = boundaryRadius(x, left, right, order);
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
});

test("order-three exceptional real segment is retained", () => {
  const points = upperBoundary(3, 40);
  // Forty points in the first cell; then 39 open-arc samples, the exact
  // junction, and 39 new real-segment samples in the terminal cell.
  assert.equal(points.length, 40 + 39 + 1 + 39);
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
  const realSegment = points.slice(junction);
  assert.equal(realSegment[0].real, -0.5);
  assert.equal(realSegment.at(-1).real, -1);
  assert.ok(realSegment.every((point) => point.imaginary === 0));
  for (let index = 1; index < realSegment.length; index += 1) {
    assert.ok(realSegment[index].real < realSegment[index - 1].real);
  }
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
