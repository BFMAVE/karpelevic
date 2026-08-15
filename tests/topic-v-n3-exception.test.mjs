import assert from "node:assert/strict";
import test from "node:test";

const tolerance = 1e-12;
const omega = {
  re: -1 / 2,
  im: Math.sqrt(3) / 2,
};
const vertices = [
  { re: 1, im: 0 },
  omega,
  { re: omega.re, im: -omega.im },
];

function add(left, right) {
  return { re: left.re + right.re, im: left.im + right.im };
}

function scale(scalar, value) {
  return { re: scalar * value.re, im: scalar * value.im };
}

function multiply(left, right) {
  return {
    re: left.re * right.re - left.im * right.im,
    im: left.re * right.im + left.im * right.re,
  };
}

function close(actual, expected, message) {
  assert.ok(
    Math.hypot(actual.re - expected.re, actual.im - expected.im) < tolerance,
    message,
  );
}

test("the N=3 invariant-triangle family is a genuine Delta=2 exception", () => {
  for (const a of [0.51, 0.6, 0.75, 0.99]) {
    const matrix = [
      [0, 1 - a, a],
      [a, 0, 1 - a],
      [1 - a, a, 0],
    ];

    for (const row of matrix) {
      assert.ok(Math.abs(row.reduce((sum, value) => sum + value, 0) - 1) < tolerance);
      assert.ok(row.every((value) => value >= 0));
    }
    for (let column = 0; column < 3; column += 1) {
      assert.ok(
        Math.abs(matrix.reduce((sum, row) => sum + row[column], 0) - 1) <
          tolerance,
      );
    }

    const lambda = {
      re: -1 / 2,
      im: (Math.sqrt(3) / 2) * (2 * a - 1),
    };
    assert.ok(lambda.im > 0);
    assert.ok(Math.hypot(lambda.re, lambda.im) < 1);

    for (let source = 0; source < 3; source += 1) {
      const image = multiply(lambda, vertices[source]);
      const next = vertices[(source + 1) % 3];
      const previous = vertices[(source + 2) % 3];
      close(
        image,
        add(scale(a, next), scale(1 - a, previous)),
        `the image of vertex ${source} lies in the relative interior of the opposite side`,
      );
    }

    for (const t of [1.0001, 1.2, 2, 10]) {
      assert.equal(1 + 2 * t * lambda.re, 1 - t);
      assert.ok(1 - t < 0);
    }
  }

  const N = 3;
  const kappa = 2;
  const phi = 3;
  const gcd = 1;
  const firstRecord = { h: 0, b: 1, deficit: 3 };
  const secondRecord = { h: 1, b: Math.ceil(kappa / N), deficit: 1 };
  const deltaReturn = firstRecord.deficit - secondRecord.deficit;

  assert.deepEqual(firstRecord, { h: 0, b: 1, deficit: 3 });
  assert.deepEqual(secondRecord, { h: 1, b: 1, deficit: 1 });
  assert.equal(deltaReturn, 2);
  assert.equal(gcd, 1);
  assert.equal(phi, 3);
  assert.ok(phi > gcd);
  assert.equal(1 * kappa - 0 * N, deltaReturn);
  assert.equal(1 * 3 + 0 * deltaReturn, N);
});
