export type FareyFraction = {
  numerator: number;
  denominator: number;
};

export type PlotPoint = {
  x: number;
  y: number;
  angle: number;
  radius: number;
  fraction?: FareyFraction;
};

export type FareyCell = {
  left: FareyFraction;
  right: FareyFraction;
  p: number;
  q: number;
  r: number;
  s: number;
  d: number;
  e: number;
};

function positiveSafeInteger(value: number, name: string): number {
  if (!Number.isSafeInteger(value) || value < 1) {
    throw new RangeError(`${name} must be a positive safe integer`);
  }
  return value;
}

function greatestCommonDivisor(a: number, b: number): number {
  let left = Math.abs(a);
  let right = Math.abs(b);

  while (right !== 0) {
    [left, right] = [right, left % right];
  }

  return left;
}

export function fareyUpper(order: number): FareyFraction[] {
  const n = positiveSafeInteger(order, "order");
  const fractions: FareyFraction[] = [];

  for (let denominator = 1; denominator <= n; denominator += 1) {
    for (
      let numerator = 0;
      numerator <= Math.floor(denominator / 2);
      numerator += 1
    ) {
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

export function fareyCells(order: number): FareyCell[] {
  const n = positiveSafeInteger(order, "order");
  const fractions = fareyUpper(n);
  return fractions.slice(0, -1).map((left, index) => {
    const right = fractions[index + 1];
    const first = left.denominator <= right.denominator ? left : right;
    const second = first === left ? right : left;
    const d = Math.floor(n / first.denominator);
    return {
      left,
      right,
      p: first.numerator,
      q: first.denominator,
      r: second.numerator,
      s: second.denominator,
      d,
      e: second.denominator - d * first.denominator,
    };
  });
}

function radialEquation(
  radius: number,
  order: number,
  angleFraction: number,
  left: FareyFraction,
  right: FareyFraction,
): number {
  const first =
    left.denominator <= right.denominator ? left : right;
  const second = first === left ? right : left;
  const repeats = Math.floor(order / first.denominator);
  const a =
    2 *
    Math.PI *
    Math.abs(first.denominator * angleFraction - first.numerator);
  const b =
    (2 *
      Math.PI *
      Math.abs(
        second.denominator * angleFraction - second.numerator,
      )) /
    repeats;

  return (
    radius ** (second.denominator / repeats) * Math.sin(a) +
    radius ** first.denominator * Math.sin(b) -
    Math.sin(a + b)
  );
}

export function boundaryRadius(
  order: number,
  angleFraction: number,
  left: FareyFraction,
  right: FareyFraction,
): number {
  const leftValue = left.numerator / left.denominator;
  const rightValue = right.numerator / right.denominator;

  if (
    Math.abs(angleFraction - leftValue) < Number.EPSILON ||
    Math.abs(angleFraction - rightValue) < Number.EPSILON
  ) {
    return 1;
  }

  let lower = 0;
  let upper = 1;

  for (let iteration = 0; iteration < 90; iteration += 1) {
    const midpoint = (lower + upper) / 2;

    if (
      radialEquation(
        midpoint,
        order,
        angleFraction,
        left,
        right,
      ) >
      0
    ) {
      upper = midpoint;
    } else {
      lower = midpoint;
    }
  }

  return (lower + upper) / 2;
}

function toPlotPoint(
  angleFraction: number,
  radius: number,
  fraction?: FareyFraction,
): PlotPoint {
  return {
    x: radius * Math.cos(2 * Math.PI * angleFraction),
    y: radius * Math.sin(2 * Math.PI * angleFraction),
    angle: angleFraction,
    radius,
    fraction,
  };
}

export function thetaBoundary(
  order: number,
  samplesPerCell = 28,
): {
  boundary: PlotPoint[];
  upperFareyNodes: PlotPoint[];
} {
  const fractions = fareyUpper(order);
  const upperBoundary: PlotPoint[] = [];

  for (let cell = 0; cell < fractions.length - 1; cell += 1) {
    const left = fractions[cell];
    const right = fractions[cell + 1];
    const leftValue = left.numerator / left.denominator;
    const rightValue = right.numerator / right.denominator;

    for (let sample = 0; sample <= samplesPerCell; sample += 1) {
      if (cell > 0 && sample === 0) {
        continue;
      }

      const fraction =
        leftValue +
        ((rightValue - leftValue) * sample) / samplesPerCell;
      upperBoundary.push(
        toPlotPoint(
          fraction,
          boundaryRadius(order, fraction, left, right),
        ),
      );
    }
  }

  const upperFareyNodes = fractions.map((fraction) =>
    toPlotPoint(
      fraction.numerator / fraction.denominator,
      1,
      fraction,
    ),
  );
  const lowerBoundary = upperBoundary
    .slice(1, -1)
    .reverse()
    .map((point) => ({ ...point, y: -point.y, angle: 1 - point.angle }));

  return {
    boundary: [...upperBoundary, ...lowerBoundary],
    upperFareyNodes,
  };
}

export function thetaBoundaryForOrder(
  order: number,
  samplesPerCell = 48,
): {
  boundary: PlotPoint[];
  upperFareyNodes: PlotPoint[];
  kind: "point" | "interval" | "region";
} {
  const normalizedOrder = positiveSafeInteger(order, "order");
  positiveSafeInteger(samplesPerCell, "samplesPerCell");
  if (normalizedOrder === 1) {
    return {
      boundary: [toPlotPoint(0, 1, { numerator: 0, denominator: 1 })],
      upperFareyNodes: [toPlotPoint(0, 1, { numerator: 0, denominator: 1 })],
      kind: "point",
    };
  }
  if (normalizedOrder === 2) {
    return {
      boundary: [
        { x: -1, y: 0, angle: 0.5, radius: 1 },
        { x: 1, y: 0, angle: 0, radius: 1 },
      ],
      upperFareyNodes: [
        toPlotPoint(0, 1, { numerator: 0, denominator: 1 }),
        toPlotPoint(0.5, 1, { numerator: 1, denominator: 2 }),
      ],
      kind: "interval",
    };
  }

  const fractions = fareyUpper(normalizedOrder);
  const upperBoundary: PlotPoint[] = [];
  for (let cell = 0; cell < fractions.length - 1; cell += 1) {
    const left = fractions[cell];
    const right = fractions[cell + 1];
    const leftValue = left.numerator / left.denominator;
    const rightValue = right.numerator / right.denominator;
    const terminalOrderThree =
      normalizedOrder === 3 &&
      left.numerator === 1 &&
      left.denominator === 3 &&
      right.numerator === 1 &&
      right.denominator === 2;

    if (terminalOrderThree) {
      for (let sample = 1; sample < samplesPerCell; sample += 1) {
        const angleFraction =
          leftValue + ((rightValue - leftValue) * sample) / samplesPerCell;
        upperBoundary.push(
          toPlotPoint(
            angleFraction,
            boundaryRadius(normalizedOrder, angleFraction, left, right),
          ),
        );
      }
      upperBoundary.push({ x: -0.5, y: 0, angle: 0.5, radius: 0.5 });
      for (let sample = 1; sample <= samplesPerCell; sample += 1) {
        const x = -0.5 - (0.5 * sample) / samplesPerCell;
        upperBoundary.push({ x, y: 0, angle: 0.5, radius: Math.abs(x) });
      }
      continue;
    }

    for (let sample = 0; sample <= samplesPerCell; sample += 1) {
      if (cell > 0 && sample === 0) continue;
      const angleFraction =
        leftValue + ((rightValue - leftValue) * sample) / samplesPerCell;
      upperBoundary.push(
        toPlotPoint(
          angleFraction,
          boundaryRadius(normalizedOrder, angleFraction, left, right),
        ),
      );
    }
  }

  const lowerBoundary = upperBoundary
    .slice(1, -1)
    .reverse()
    .map((point) => ({ ...point, y: -point.y, angle: 1 - point.angle }));
  return {
    boundary: [...upperBoundary, ...lowerBoundary],
    upperFareyNodes: fractions.map((fraction) =>
      toPlotPoint(fraction.numerator / fraction.denominator, 1, fraction),
    ),
    kind: "region",
  };
}

export function svgPath(
  points: PlotPoint[],
  size: number,
  padding: number,
): string {
  const radius = (size - 2 * padding) / 2;
  const center = size / 2;

  return points
    .map((point, index) => {
      const x = center + point.x * radius;
      const y = center - point.y * radius;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ")
    .concat(" Z");
}

export function svgCoordinates(
  point: PlotPoint,
  size: number,
  padding: number,
): { x: number; y: number } {
  const radius = (size - 2 * padding) / 2;
  const center = size / 2;

  return {
    x: center + point.x * radius,
    y: center - point.y * radius,
  };
}
