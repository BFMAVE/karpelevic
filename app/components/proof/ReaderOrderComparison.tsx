import { radialBoundaryRadius } from "../../lib/karpelevic-boundary-core.js";
import { ReaderFigureFrame } from "./ReaderFigureFrame";

const left = { numerator: 1, denominator: 3 };
const rightSeven = { numerator: 2, denominator: 5 };
const rightEight = { numerator: 3, denominator: 8 };
const firstTurn = 1 / 3;
const lastTurn = 3 / 8;
const markedTurn = 5 / 14;

function radius(turn: number, order: 7 | 8) {
  return radialBoundaryRadius(turn, left, order === 7 ? rightSeven : rightEight, order);
}

function x(turn: number) {
  return 75 + 460 * (turn - firstTurn) / (lastTurn - firstTurn);
}

function y(modulus: number) {
  return 45 + 205 * (1 - modulus) / 0.07;
}

function curve(order: 7 | 8) {
  return Array.from({ length: 81 }, (_, i) => {
    const turn = firstTurn + (lastTurn - firstTurn) * i / 80;
    return [x(turn), y(radius(turn, order))].join(",");
  }).join(" ");
}

export function ReaderOrderComparison() {
  const eight = radius(markedTurn, 8);
  const seven = radius(markedTurn, 7);
  const markerX = x(markedTurn);
  return <ReaderFigureFrame defaultView="fit">
    <figure className="reader-teaching-figure">
      <div className="reader-figure-visual" tabIndex={0} role="region" aria-label="Boundary radius by angle for orders seven and eight">
        <svg viewBox="0 0 600 305" role="img" aria-labelledby="two-orders-title two-orders-desc">
          <title id="two-orders-title">How much farther can eight states reach?</title>
          <desc id="two-orders-desc">Both boundaries start at radius one at one third of a turn. At five fourteenths of a turn the seven-state radius is about 0.9443 and the eight-state radius about 0.9706. Only the eight-state curve returns to one at three eighths of a turn.</desc>
          <g fontSize="17" fill="#18394b">
            <text x="75" y="25">Largest eigenvalue modulus</text>
            {[1, 0.98, 0.96, 0.94].map(tick => <g key={tick}>
              <line x1="70" x2="535" y1={y(tick)} y2={y(tick)} stroke="#ced6d4" />
              <text x="61" y={y(tick) + 5} textAnchor="end">{tick.toFixed(2)}</text>
            </g>)}
            <polyline points={curve(8)} fill="none" stroke="#247073" strokeWidth="3.5" />
            <polyline points={curve(7)} fill="none" stroke="#904337" strokeWidth="3" strokeDasharray="8 5" />
            <line x1={markerX} x2={markerX} y1={y(1)} y2={y(0.93)} stroke="#68787e" strokeDasharray="3 4" />
            <circle cx={markerX} cy={y(eight)} r="4.5" fill="#247073" />
            <rect x={markerX - 4} y={y(seven) - 4} width="8" height="8" fill="#904337" />
            <text x={markerX - 10} y={y(eight) - 15} textAnchor="end">8 states</text>
            <text x={markerX + 12} y={y(seven) - 9}>7 states</text>
            {([[firstTurn, "1/3"], [markedTurn, "5/14"], [lastTurn, "3/8"]] as const).map(([turn, label]) =>
              <text key={label} x={x(turn)} y="265" textAnchor="middle">{label}</text>)}
            <text x="305" y="294" textAnchor="middle">Angle in turns</text>
          </g>
        </svg>
      </div>
      <figcaption>Read vertically at 5/14 of a turn. Seven states can reach radius {seven.toFixed(4)}. An eighth state raises it to {eight.toFixed(4)}. Farther right, at 3/8 of a turn, an eight-state cycle reaches the unit circle. Both curves sample the radial equation on the indicated interval.</figcaption>
    </figure>
  </ReaderFigureFrame>;
}
