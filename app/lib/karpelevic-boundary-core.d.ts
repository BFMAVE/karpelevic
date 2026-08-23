export type FareyFraction = {
  numerator: number;
  denominator: number;
};

export type FareyPairParameters = {
  p: number;
  q: number;
  r: number;
  s: number;
  d: number;
  e: number;
};

export type BoundaryPoint = {
  real: number;
  imaginary: number;
  angleFraction: number;
  radius: number;
};

export const MAX_EXACT_ORDER: number;
export const DEFAULT_BISECTION_ITERATIONS: number;

export function fareySequence(order: number): FareyFraction[];
export function upperFarey(order: number): FareyFraction[];
export function fareyPairParameters(
  left: FareyFraction,
  right: FareyFraction,
  order: number,
): FareyPairParameters;
/**
 * Solve the Ito scalar equation on the strict interior of one Farey interval.
 * Farey endpoints are rejected, because the order-three terminal arc has
 * one-sided limiting modulus 1/2 at x=1/2 while the outer radial value is 1.
 */
export function itoArcRadius(
  angleFraction: number,
  left: FareyFraction,
  right: FareyFraction,
  order: number,
  iterations?: number,
): number;
/** Return the outer radial-boundary value, including value 1 at endpoints. */
export function radialBoundaryRadius(
  angleFraction: number,
  left: FareyFraction,
  right: FareyFraction,
  order: number,
  iterations?: number,
): number;
/**
 * @deprecated Use radialBoundaryRadius. This alias is retained for backward
 * compatibility with earlier downloadable examples.
 */
export function boundaryRadius(
  angleFraction: number,
  left: FareyFraction,
  right: FareyFraction,
  order: number,
  iterations?: number,
): number;
export function upperBoundary(
  order: number,
  samplesPerInterval?: number,
): BoundaryPoint[];
/**
 * Sample the full boundary. At order three the exact attached real segment is
 * traversed once in each direction by the closed polygonal walk.
 */
export function fullBoundary(
  order: number,
  samplesPerInterval?: number,
): BoundaryPoint[];
