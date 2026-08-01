"use client";

import { useMemo, useState } from "react";
import {
  fareyCells,
  svgCoordinates,
  svgPath,
  thetaBoundaryForOrder,
} from "../../lib/theta-region";

const size = 760;
const padding = 78;

function fractionText(numerator: number, denominator: number): string {
  return `${numerator}/${denominator}`;
}

export function BoundaryExplorer() {
  const [order, setOrder] = useState(7);
  const normalizedOrder = order;
  const region = useMemo(
    () => thetaBoundaryForOrder(normalizedOrder, 54),
    [normalizedOrder],
  );
  const cells = useMemo(
    () => (normalizedOrder >= 3 ? fareyCells(normalizedOrder) : []),
    [normalizedOrder],
  );
  const boundaryPath =
    region.kind === "region" ? svgPath(region.boundary, size, padding) : "";
  const intervalStart = svgCoordinates(
    { x: -1, y: 0, angle: 0.5, radius: 1 },
    size,
    padding,
  );
  const intervalEnd = svgCoordinates(
    { x: 1, y: 0, angle: 0, radius: 1 },
    size,
    padding,
  );

  return (
    <section className="boundary-laboratory" aria-labelledby="boundary-laboratory-heading">
      <header>
        <div>
          <p className="section-label">Interactive boundary laboratory</p>
          <h3 id="boundary-laboratory-heading">Choose an order and draw Θ<sub>n</sub></h3>
        </div>
        <label>
          Matrix order
          <input
            aria-describedby="boundary-order-help"
            inputMode="numeric"
            max="40"
            min="1"
            onChange={(event) => {
              const candidate = Number(event.target.value);
              setOrder(
                Number.isFinite(candidate)
                  ? Math.min(40, Math.max(1, Math.trunc(candidate)))
                  : 1,
              );
            }}
            step="1"
            type="number"
            value={order}
          />
        </label>
      </header>
      <p id="boundary-order-help" className="boundary-laboratory-help">
        Enter an integer from 1 to 40. Orders 1 and 2 use their exact
        elementary descriptions. From order 3 onward, each curved arc is
        sampled from the manuscript’s scalar radius equation using ninety
        bisection steps per sample. At order 3, the terminal interval from
        −1/2 to −1 on the real axis is inserted exactly.
      </p>

      <div className="boundary-laboratory-grid">
        <figure>
          <svg
            aria-describedby="boundary-plot-description"
            aria-label={`Boundary of Theta ${normalizedOrder}`}
            role="img"
            viewBox={`0 0 ${size} ${size}`}
          >
            <desc id="boundary-plot-description">
              The stochastic eigenvalue region of order {normalizedOrder},
              drawn in the complex plane from exact Farey cells, numerical
              solutions of the scalar radial equation, and, at order three,
              the exact exceptional real segment from minus one half to minus
              one.
            </desc>
            <line className="boundary-lab-axis" x1={padding - 22} x2={size - padding + 22} y1={size / 2} y2={size / 2} />
            <line className="boundary-lab-axis" x1={size / 2} x2={size / 2} y1={padding - 22} y2={size - padding + 22} />
            <circle className="boundary-lab-unit" cx={size / 2} cy={size / 2} r={(size - 2 * padding) / 2} />
            {region.kind === "region" ? (
              <path className="boundary-lab-region" d={boundaryPath} />
            ) : null}
            {region.kind === "interval" ? (
              <line className="boundary-lab-interval" x1={intervalStart.x} x2={intervalEnd.x} y1={intervalStart.y} y2={intervalEnd.y} />
            ) : null}
            {region.kind === "point" ? (
              <circle className="boundary-lab-point" cx={intervalEnd.x} cy={intervalEnd.y} r="9" />
            ) : null}
            {region.upperFareyNodes.map((point) => {
              const coordinate = svgCoordinates(point, size, padding);
              return (
                <circle
                  aria-hidden="true"
                  className="boundary-lab-root"
                  cx={coordinate.x}
                  cy={coordinate.y}
                  key={`${point.fraction?.numerator}/${point.fraction?.denominator}`}
                  r="4.5"
                />
              );
            })}
            <text className="boundary-lab-label" x={size - padding + 15} y={size / 2 + 28}>Re λ</text>
            <text className="boundary-lab-label" x={size / 2 + 12} y={padding - 24}>Im λ</text>
          </svg>
          <figcaption>
            <span>Computational plate.</span>{" "}
            {region.kind === "point" ? (
              <>Θ<sub>1</sub> is the exact single point 1.</>
            ) : region.kind === "interval" ? (
              <>Θ<sub>2</sub> is the exact real interval [−1,1].</>
            ) : (
              <>
                Θ<sub>{normalizedOrder}</sub> has {cells.length}{" "}
                upper-half-plane Farey cell{cells.length === 1 ? "" : "s"}.
                The dark nodes are exact roots of unity; curved arcs between
                them are sampled numerically.
                {normalizedOrder === 3
                  ? " The real segment from −1/2 to −1 is exact."
                  : ""}
              </>
            )}
          </figcaption>
        </figure>

        <aside>
          <section>
            <p className="section-label">Exact input</p>
            <h4>Farey cells and carrier data</h4>
            <p>
              Fractions, denominator order, the repeat count <i>d</i>, the
              closing exponent <i>e</i>, and every endpoint angle are computed
              exactly with integer arithmetic. The corresponding root-of-unity
              coordinates are evaluated numerically only when the SVG is drawn.
            </p>
          </section>
          <section>
            <p className="section-label">Numerical output</p>
            <h4>Radius and plotted curve</h4>
            <p>
              {region.kind === "region" ? (
                <>
                  Interior radii are found by fixed-iteration bisection. The
                  SVG joins finitely many sampled points, so it is a drawing
                  of the verified equation rather than an exact symbolic
                  curve.
                  {normalizedOrder === 3
                    ? " The exceptional real segment is added from its exact endpoints, not obtained by sampling that equation."
                    : ""}
                </>
              ) : (
                <>No numerical radius solve is used at this order; the plotted description is exact.</>
              )}
            </p>
          </section>
          {cells.length > 0 ? (
            <details>
              <summary>Open the complete cell ledger for n={normalizedOrder}</summary>
              <div className="boundary-cell-ledger">
                {cells.map((cell) => (
                  <div key={`${cell.left.numerator}/${cell.left.denominator}-${cell.right.numerator}/${cell.right.denominator}`}>
                    <strong>
                      {fractionText(cell.left.numerator, cell.left.denominator)} → {fractionText(cell.right.numerator, cell.right.denominator)}
                    </strong>
                    <span>
                      (q,s)=({cell.q},{cell.s}), d={cell.repeats}, e={cell.closingExponent}
                    </span>
                  </div>
                ))}
              </div>
            </details>
          ) : null}
        </aside>
      </div>
    </section>
  );
}
