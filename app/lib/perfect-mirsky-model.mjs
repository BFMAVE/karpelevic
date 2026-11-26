/** @param {number} numerator @param {number} denominator */
export function rational(numerator, denominator) {
  let a = numerator;
  let b = denominator;
  while (b !== 0) [a, b] = [b, a % b];
  return denominator === a ? String(numerator / a) : String(numerator / a) + "/" + String(denominator / a);
}

/** @param {number} radius @param {number} angle @returns {[number, number]} */
export function onCircle(radius, angle) {
  return [radius * Math.cos(angle), radius * Math.sin(angle)];
}

/** @param {number} step */
export function sixMarkState(step) {
  return {
    a: step / 60,
    spacing: rational(step, 60),
    rowDemand: rational(3 * step, 240),
    total: rational(3 * (60 + step), 240),
    bound: rational(60, 60 + step),
    status: step > 20 ? "The two rows ask for more than one unit." :
      step === 20 ? "The two rows use exactly one unit." : "There is enough mass at i for the two rows.",
  };
}

export const chordEnd = onCircle(1, Math.PI / 4);

/** @type {[number, number]} */
export const orderFiveWitness = [-0.2792925778257751, 0.7635163746738518];

/** @param {number} order */
export function polygonWitnessState(order) {
  const [x, y] = orderFiveWitness;
  const inside = Array.from({ length: order - 2 }, (_, index) => index + 3).some((sides) => {
    const apothem = Math.cos(Math.PI / sides);
    return Array.from({ length: sides }, (_, index) => onCircle(1, (2 * index + 1) * Math.PI / sides))
      .every(([nx, ny]) => x * nx + y * ny <= apothem);
  });
  return {
    inside,
    note: inside
      ? "The hexagon contains the point. Its upper side is above this close-up."
      : "The point lies outside the union at order " + order + ".",
  };
}

/** @param {number} percent */
export function chordState(percent) {
  const u = percent / 100;
  const [endX, endY] = chordEnd;
  const x = 1 - u + u * endX;
  const y = u * endY;
  const chance = 2 * u * (1 - u);
  const squaredSide = (endX - 1) ** 2 + endY ** 2;
  const radiusSquared = x ** 2 + y ** 2;
  return { u, x, y, chance, pairLoss: chance * squaredSide / 2, radiusLoss: 1 - radiusSquared, radiusSquared };
}

export const pathLabels = [0, 1, 2, 3, 5, 7, 9];
export const circularPath = pathLabels.map((label) => onCircle(1, label * Math.PI / 18));
const pathRadius = Math.cos(Math.PI / 36);
export const correctedDistances = pathLabels.map((label, k) => {
  const [x, y] = onCircle(pathRadius ** -k, label * Math.PI / 18 - k * Math.PI / 12);
  return Math.hypot(x - 1, y);
});

/** @param {number} step */
export function pathState(step) {
  return {
    visited: circularPath.slice(0, step + 1),
    expected: onCircle(pathRadius ** step, step * Math.PI / 12),
    trace: correctedDistances.slice(0, step + 1),
    label: pathLabels[step],
    distance: correctedDistances[step].toFixed(3),
    largest: Math.max(...correctedDistances.slice(0, step + 1)).toFixed(3),
  };
}
