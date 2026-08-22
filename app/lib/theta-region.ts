import {
  fareyPairParameters,
  fullBoundary as numericalFullBoundary,
  upperFarey as numericalUpperFarey,
} from "./karpelevic-boundary-core.js";
import type {
  BoundaryPoint as NumericalBoundaryPoint,
  FareyFraction,
} from "./karpelevic-boundary-core.js";

export type { FareyFraction } from "./karpelevic-boundary-core.js";
export {
  boundaryRadius,
  itoArcRadius,
  radialBoundaryRadius,
} from "./karpelevic-boundary-core.js";

export type PlotPoint = {
  x: number;
  y: number;
  angle: number;
  radius: number;
  fraction?: FareyFraction;
};

export type FareyInterval = {
  left: FareyFraction;
  right: FareyFraction;
  p: number;
  q: number;
  r: number;
  s: number;
  d: number;
  e: number;
};

export function fareyUpper(order: number): FareyFraction[] {
  return numericalUpperFarey(order);
}

export function fareyIntervals(order: number): FareyInterval[] {
  const fractions = fareyUpper(order);
  return fractions.slice(0, -1).map((left, index) => {
    const right = fractions[index + 1];
    return {
      left,
      right,
      ...fareyPairParameters(left, right, order),
    };
  });
}

function toPlotPoint(
  point: NumericalBoundaryPoint,
  fraction?: FareyFraction,
): PlotPoint {
  return {
    x: point.real,
    y: point.imaginary,
    angle: point.angleFraction,
    radius: point.radius,
    fraction,
  };
}

function fareyNode(fraction: FareyFraction): PlotPoint {
  const angle = fraction.numerator / fraction.denominator;
  return {
    x: Math.cos(2 * Math.PI * angle),
    y: Math.sin(2 * Math.PI * angle),
    angle,
    radius: 1,
    fraction,
  };
}

export function thetaBoundary(
  order: number,
  samplesPerInterval = 29,
): {
  boundary: PlotPoint[];
  upperFareyNodes: PlotPoint[];
} {
  return {
    boundary: numericalFullBoundary(order, samplesPerInterval).map((point) =>
      toPlotPoint(point),
    ),
    upperFareyNodes: fareyUpper(order).map(fareyNode),
  };
}

export function thetaBoundaryForOrder(
  order: number,
  samplesPerInterval = 49,
): {
  boundary: PlotPoint[];
  upperFareyNodes: PlotPoint[];
  kind: "point" | "interval" | "region";
} {
  const region = thetaBoundary(order, samplesPerInterval);
  return {
    ...region,
    kind: order === 1 ? "point" : order === 2 ? "interval" : "region",
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
