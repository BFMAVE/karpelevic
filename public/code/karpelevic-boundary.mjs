/**
 * Numerical Karpelevic boundary curves from exact Farey-Ito data.
 *
 * This dependency-free module is the single numerical source used by the
 * website, the GitHub Pages controller, and the downloadable source file.
 * `scripts/generate-boundary-module.mjs` copies it byte-for-byte to
 * `public/code/karpelevic-boundary.mjs` (with a legacy `.js` copy).
 *
 * Exact combinatorial data: reduced Farey fractions, consecutive pairs,
 * endpoint relabelling, and the integers d=floor(n/q) and e=s-dq.
 * Numerical data: moduli on open Farey intervals, obtained in binary64
 * arithmetic by bisection.
 */

// Every cross-product used to order fractions is then at most
// MAX_EXACT_ORDER^2 and therefore remains a safe JavaScript integer.
export const MAX_EXACT_ORDER = Math.floor(Math.sqrt(Number.MAX_SAFE_INTEGER));
export const DEFAULT_BISECTION_ITERATIONS = 90;

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

function greatestCommonDivisor(a, b) {
  let left = Math.abs(a);
  let right = Math.abs(b);
  while (right !== 0) [left, right] = [right, left % right];
  return left;
}

function reducedFraction(value, name) {
  if (
    !value ||
    !Number.isSafeInteger(value.numerator) ||
    !Number.isSafeInteger(value.denominator) ||
    value.denominator < 1 ||
    value.numerator < 0 ||
    value.numerator > value.denominator ||
    greatestCommonDivisor(value.numerator, value.denominator) !== 1
  ) {
    throw new RangeError(
      `${name} must be a reduced fraction between zero and one`,
    );
  }
  return value;
}

export function fareySequence(order) {
  const n = exactOrder(order);
  const fractions = [];
  for (let denominator = 1; denominator <= n; denominator += 1) {
    for (let numerator = 0; numerator <= denominator; numerator += 1) {
      if (greatestCommonDivisor(numerator, denominator) === 1) {
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

export function fareyPairParameters(left, right, order) {
  const n = exactOrder(order);
  if (n < 2) {
    throw new RangeError(
      "fareyPairParameters requires order at least 2 so the relabelled denominators satisfy q < s",
    );
  }
  const leftFraction = reducedFraction(left, "left");
  const rightFraction = reducedFraction(right, "right");
  const determinant =
    leftFraction.denominator * rightFraction.numerator -
    leftFraction.numerator * rightFraction.denominator;
  if (
    leftFraction.denominator > n ||
    rightFraction.denominator > n ||
    determinant !== 1 ||
    leftFraction.denominator + rightFraction.denominator <= n
  ) {
    throw new RangeError(
      "left and right must be consecutive increasing fractions in the Farey sequence of this order",
    );
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

function arcData(angleFraction, left, right, order) {
  const n = exactOrder(order);
  if (n < 3) {
    throw new RangeError(
      "Use the exact order-one or order-two boundary description",
    );
  }
  if (!Number.isFinite(angleFraction)) {
    throw new RangeError("angleFraction must be finite");
  }
  const leftFraction = reducedFraction(left, "left");
  const rightFraction = reducedFraction(right, "right");
  const parameters = fareyPairParameters(leftFraction, rightFraction, n);
  const leftValue = leftFraction.numerator / leftFraction.denominator;
  const rightValue = rightFraction.numerator / rightFraction.denominator;
  return {
    n,
    leftFraction,
    rightFraction,
    parameters,
    leftValue,
    rightValue,
  };
}

// Math.sin(Math.PI * value) loses most of its relative accuracy when value is
// very close to an integer. Reducing first keeps the order-three terminal
// limit stable even at the last representable binary64 values below 1/2.
function sineOfPiMultiple(value) {
  const nearestInteger = Math.round(value);
  const remainder = value - nearestInteger;
  if (Math.abs(remainder) < 0.25) {
    const sign = nearestInteger % 2 === 0 ? 1 : -1;
    return sign * Math.sin(Math.PI * remainder);
  }
  return Math.sin(Math.PI * value);
}

/**
 * Solve the Ito scalar equation on the strict interior of one Farey interval.
 * Endpoint values are deliberately excluded: at n=3 and x=1/2 the nonreal
 * arc has one-sided limiting modulus 1/2, whereas the outer radial boundary
 * value is 1 because the boundary also contains -1.
 */
export function itoArcRadius(
  angleFraction,
  left,
  right,
  order,
  iterations = DEFAULT_BISECTION_ITERATIONS,
) {
  positiveInteger(iterations, "iterations");
  const {
    n,
    leftValue,
    rightValue,
    parameters,
  } = arcData(
    angleFraction,
    left,
    right,
    order,
  );
  if (!(leftValue < angleFraction && angleFraction < rightValue)) {
    throw new RangeError(
      "angleFraction must lie strictly inside the specified Farey interval",
    );
  }

  const { p, q, r, s, d } = parameters;
  // Subtract the represented endpoint first. The algebraically equivalent
  // forms q*x-p and s*x-r can round to zero at the next binary64 number after
  // a Farey endpoint and would erase a valid strict-interior displacement.
  const terminalOrderThreeArc =
    n === 3 && p === 1 && q === 2 && r === 1 && s === 3;
  const terminalDistance = terminalOrderThreeArc
    ? rightValue - angleFraction
    : 0;
  const aOverPi = terminalOrderThreeArc
    ? 4 * terminalDistance
    : 2 * q * Math.abs(angleFraction - p / q);
  const bOverPi = terminalOrderThreeArc
    ? 1 - 6 * terminalDistance
    : (2 * s * Math.abs(angleFraction - r / s)) / d;
  const sineA = sineOfPiMultiple(aOverPi);
  const sineB = sineOfPiMultiple(bOverPi);
  // On the terminal order-three arc, A+B=pi(1-2*delta). Computing
  // sin(2*pi*delta) directly preserves the final binary64 point below 1/2.
  const target = terminalOrderThreeArc
    ? sineOfPiMultiple(2 * terminalDistance)
    : sineOfPiMultiple(aOverPi + bOverPi);
  const residual = (rho) =>
    rho ** (s / d) * sineA +
    rho ** q * sineB -
    target;

  const lowerResidual = residual(0);
  // This factored identity avoids catastrophic cancellation in
  // sin(A)+sin(B)-sin(A+B) at representable points next to an endpoint.
  const upperResidualFactors = [
    sineOfPiMultiple(aOverPi / 2),
    sineOfPiMultiple(bOverPi / 2),
    sineOfPiMultiple((aOverPi + bOverPi) / 2),
  ];
  if (
    !Number.isFinite(lowerResidual) ||
    !(lowerResidual < 0) ||
    !upperResidualFactors.every(
      (factor) => Number.isFinite(factor) && factor > 0,
    )
  ) {
    throw new RangeError(
      "the scalar radial equation must have a finite sign-changing bracket on (0,1)",
    );
  }

  let lower = 0;
  let upper = 1;
  for (let iteration = 0; iteration < iterations; iteration += 1) {
    const midpoint = (lower + upper) / 2;
    if (midpoint === lower || midpoint === upper) break;
    if (residual(midpoint) < 0) lower = midpoint;
    else upper = midpoint;
  }
  const estimate = (lower + upper) / 2;
  return estimate < 1 ? estimate : lower;
}

/**
 * Return the outer radial boundary value associated with a Farey interval.
 * Every Farey endpoint has radial value 1, including x=1/2 at order three.
 * Use `itoArcRadius` for the open nonreal arc and its one-sided limit.
 */
export function radialBoundaryRadius(
  angleFraction,
  left,
  right,
  order,
  iterations = DEFAULT_BISECTION_ITERATIONS,
) {
  positiveInteger(iterations, "iterations");
  const { leftValue, rightValue } = arcData(
    angleFraction,
    left,
    right,
    order,
  );
  if (angleFraction === leftValue || angleFraction === rightValue) return 1;
  return itoArcRadius(angleFraction, left, right, order, iterations);
}

/**
 * @deprecated Use `radialBoundaryRadius`; this name is retained for backward
 * compatibility with earlier downloadable examples.
 */
export function boundaryRadius(
  angleFraction,
  left,
  right,
  order,
  iterations = DEFAULT_BISECTION_ITERATIONS,
) {
  return radialBoundaryRadius(
    angleFraction,
    left,
    right,
    order,
    iterations,
  );
}

function polarPoint(angleFraction, radius) {
  return {
    real: radius * Math.cos(2 * Math.PI * angleFraction),
    imaginary: radius * Math.sin(2 * Math.PI * angleFraction),
    angleFraction,
    radius,
  };
}

/**
 * Sample the closed upper boundary. `samplesPerInterval` counts the points on
 * each nonreal Farey branch, including its two endpoints before shared
 * endpoints are deduplicated. The exceptional real segment at order three is
 * represented exactly by its two endpoints.
 */
export function upperBoundary(order, samplesPerInterval = 80) {
  const n = exactOrder(order);
  if (n < 3) {
    throw new RangeError("upperBoundary is defined here for order at least 3");
  }
  positiveInteger(samplesPerInterval, "samplesPerInterval");
  if (samplesPerInterval < 2) {
    throw new RangeError(
      "samplesPerInterval must be at least 2 for a sampled boundary",
    );
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
      for (let sample = 1; sample < samplesPerInterval - 1; sample += 1) {
        const x =
          leftValue +
          ((rightValue - leftValue) * sample) / (samplesPerInterval - 1);
        points.push(polarPoint(x, itoArcRadius(x, left, right, n)));
      }
      // The open nonreal arc tends to -1/2, while the outer radial endpoint
      // on the same ray is -1. Together they give the exact attached segment.
      points.push({
        real: -0.5,
        imaginary: 0,
        angleFraction: 0.5,
        radius: 0.5,
      });
      points.push({
        real: -1,
        imaginary: 0,
        angleFraction: 0.5,
        radius: 1,
      });
      continue;
    }

    for (let sample = 0; sample < samplesPerInterval; sample += 1) {
      if (index > 0 && sample === 0) continue;
      const x =
        leftValue +
        ((rightValue - leftValue) * sample) / (samplesPerInterval - 1);
      const radius =
        sample === 0 || sample === samplesPerInterval - 1
          ? 1
          : itoArcRadius(x, left, right, n);
      points.push(polarPoint(x, radius));
    }
  }
  return points;
}

/**
 * Sample the full boundary. At order three the closed SVG walk necessarily
 * traverses the attached real segment once in each direction.
 */
export function fullBoundary(order, samplesPerInterval = 80) {
  const n = exactOrder(order);
  positiveInteger(samplesPerInterval, "samplesPerInterval");
  if (n === 1) {
    return [{ real: 1, imaginary: 0, angleFraction: 0, radius: 1 }];
  }
  if (n === 2) {
    return [
      { real: -1, imaginary: 0, angleFraction: 0.5, radius: 1 },
      { real: 1, imaginary: 0, angleFraction: 0, radius: 1 },
    ];
  }
  const upper = upperBoundary(n, samplesPerInterval);
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
