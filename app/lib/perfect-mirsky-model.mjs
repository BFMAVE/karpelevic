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

/** @param {number} percent */
export function chordState(percent) {
  const u = percent / 100;
  const x = 1 - u + u * chordEnd[0], y = u * chordEnd[1];
  return { u: u.toFixed(2), x, y, chance: (2 * u * (1 - u)).toFixed(3),
    loss: ((2 - Math.SQRT2) * u * (1 - u)).toFixed(4) };
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
