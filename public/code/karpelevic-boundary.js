/**
 * Farey–Ito boundary generator for the Karpelevič region.
 *
 * Exact data: reduced Farey fractions, neighbouring cells, denominators,
 * repeat count d=floor(n/q), and closing exponent e=s-dq.
 * Numerical data: interior radii, obtained by 90 fixed bisection steps.
 *
 * This file has no dependencies and can be imported as an ES module.
 */

// Every cross-product used to order fractions is then at most
// MAX_EXACT_ORDER² and therefore remains a safe JavaScript integer.
export const MAX_EXACT_ORDER = Math.floor(Math.sqrt(Number.MAX_SAFE_INTEGER));

function positiveInteger(value, name) {
  if (!Number.isSafeInteger(value) || value < 1) {
    throw new RangeError(`${name} must be a positive safe integer`);
  }
  return value;
}

function exactOrder(value) {
  const order = positiveInteger(value, "order");
  if (order > MAX_EXACT_ORDER) {
    throw new RangeError(
      `order must not exceed ${MAX_EXACT_ORDER} if Farey cross-products are to remain exact`,
    );
  }
  return order;
}

function reducedFraction(value, name) {
  if (
    !value ||
    !Number.isSafeInteger(value.numerator) ||
    !Number.isSafeInteger(value.denominator) ||
    value.denominator < 1 ||
    value.numerator < 0 ||
    value.numerator > value.denominator ||
    gcd(value.numerator, value.denominator) !== 1
  ) {
    throw new RangeError(
      `${name} must be a reduced fraction between zero and one`,
    );
  }
  return value;
}

function gcd(a, b) {
  let left = Math.abs(a);
  let right = Math.abs(b);
  while (right !== 0) [left, right] = [right, left % right];
  return left;
}

export function fareySequence(order) {
  const n = exactOrder(order);
  const fractions = [];
  for (let denominator = 1; denominator <= n; denominator += 1) {
    for (let numerator = 0; numerator <= denominator; numerator += 1) {
      if (gcd(numerator, denominator) === 1) {
        fractions.push({ numerator, denominator });
      }
    }
  }
  return fractions.sort(
    (left, right) =>
      left.numerator * right.denominator -
      right.numerator * left.denominator,
  );
}

export function upperFarey(order) {
  return fareySequence(order).filter(
    (fraction) => 2 * fraction.numerator <= fraction.denominator,
  );
}

export function cellData(left, right, order) {
  const n = exactOrder(order);
  const leftFraction = reducedFraction(left, "left");
  const rightFraction = reducedFraction(right, "right");
  if (leftFraction.denominator > n || rightFraction.denominator > n) {
    throw new RangeError("cell denominators must not exceed order");
  }
  const first =
    leftFraction.denominator <= rightFraction.denominator
      ? leftFraction
      : rightFraction;
  const second = first === leftFraction ? rightFraction : leftFraction;
  const d = Math.floor(n / first.denominator);
  return {
    p: first.numerator,
    q: first.denominator,
    r: second.numerator,
    s: second.denominator,
    d,
    e: second.denominator - d * first.denominator,
  };
}

export function boundaryRadius(angleFraction, left, right, order, iterations = 90) {
  const n = exactOrder(order);
  if (n < 3) throw new RangeError("Use the exact order-one or order-two description");
  positiveInteger(iterations, "iterations");
  if (!Number.isFinite(angleFraction)) {
    throw new RangeError("angleFraction must be finite");
  }
  const leftFraction = reducedFraction(left, "left");
  const rightFraction = reducedFraction(right, "right");
  if (
    leftFraction.denominator > n ||
    rightFraction.denominator > n ||
    leftFraction.denominator * rightFraction.numerator -
      leftFraction.numerator * rightFraction.denominator !==
      1 ||
    leftFraction.denominator + rightFraction.denominator <= n
  ) {
    throw new RangeError("left and right must be consecutive fractions in the Farey sequence of this order");
  }
  const leftValue = leftFraction.numerator / leftFraction.denominator;
  const rightValue = rightFraction.numerator / rightFraction.denominator;
  if (angleFraction === leftValue || angleFraction === rightValue) return 1;
  if (!(leftValue < angleFraction && angleFraction < rightValue)) {
    throw new RangeError("angleFraction must lie in the specified Farey cell");
  }

  const { p, q, r, s, d } = cellData(leftFraction, rightFraction, n);
  const A = 2 * Math.PI * Math.abs(q * angleFraction - p);
  const B = (2 * Math.PI * Math.abs(s * angleFraction - r)) / d;
  const target = Math.sin(A + B);
  const residual = (rho) =>
    rho ** (s / d) * Math.sin(A) +
    rho ** q * Math.sin(B) -
    target;

  let lower = 0;
  let upper = 1;
  for (let iteration = 0; iteration < iterations; iteration += 1) {
    const midpoint = (lower + upper) / 2;
    if (residual(midpoint) < 0) lower = midpoint;
    else upper = midpoint;
  }
  return (lower + upper) / 2;
}

function polarPoint(angleFraction, radius) {
  return {
    real: radius * Math.cos(2 * Math.PI * angleFraction),
    imaginary: radius * Math.sin(2 * Math.PI * angleFraction),
    angleFraction,
    radius,
  };
}

export function upperBoundary(order, samplesPerCell = 80) {
  const n = exactOrder(order);
  if (n < 3) throw new RangeError("upperBoundary is defined here for order at least 3");
  positiveInteger(samplesPerCell, "samplesPerCell");
  if (samplesPerCell < 2) {
    throw new RangeError("samplesPerCell must be at least 2 for a sampled boundary");
  }
  const fractions = upperFarey(n);
  const points = [];

  for (let index = 0; index < fractions.length - 1; index += 1) {
    const left = fractions[index];
    const right = fractions[index + 1];
    const leftValue = left.numerator / left.denominator;
    const rightValue = right.numerator / right.denominator;
    const terminalOrderThree =
      n === 3 &&
      left.numerator === 1 &&
      left.denominator === 3 &&
      right.numerator === 1 &&
      right.denominator === 2;

    if (terminalOrderThree) {
      for (let sample = 1; sample < samplesPerCell; sample += 1) {
        const x = leftValue + ((rightValue - leftValue) * sample) / samplesPerCell;
        points.push(polarPoint(x, boundaryRadius(x, left, right, n)));
      }
      points.push({ real: -0.5, imaginary: 0, angleFraction: 0.5, radius: 0.5 });
      for (let sample = 1; sample < samplesPerCell; sample += 1) {
        const real = -0.5 - (0.5 * sample) / (samplesPerCell - 1);
        points.push({ real, imaginary: 0, angleFraction: 0.5, radius: Math.abs(real) });
      }
      continue;
    }

    for (let sample = 0; sample < samplesPerCell; sample += 1) {
      if (index > 0 && sample === 0) continue;
      const x =
        sample === 0
          ? leftValue
          : sample === samplesPerCell - 1
            ? rightValue
          : leftValue +
            ((rightValue - leftValue) * sample) / (samplesPerCell - 1);
      points.push(polarPoint(x, boundaryRadius(x, left, right, n)));
    }
  }
  return points;
}

export function fullBoundary(order, samplesPerCell = 80) {
  const n = exactOrder(order);
  positiveInteger(samplesPerCell, "samplesPerCell");
  if (n === 1) {
    return [{ real: 1, imaginary: 0, angleFraction: 0, radius: 1 }];
  }
  if (n === 2) {
    return [
      { real: -1, imaginary: 0, angleFraction: 0.5, radius: 1 },
      { real: 1, imaginary: 0, angleFraction: 0, radius: 1 },
    ];
  }
  const upper = upperBoundary(n, samplesPerCell);
  const lower = upper
    .slice(1, -1)
    .reverse()
    .map((point) => ({
      ...point,
      imaginary: -point.imaginary,
      angleFraction: 1 - point.angleFraction,
    }));
  return [...upper, ...lower];
}
