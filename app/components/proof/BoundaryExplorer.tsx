"use client";

import { useMemo, useState } from "react";
import {
  fareyCells,
  svgCoordinates,
  svgPath,
  thetaBoundaryForOrder,
  type PlotPoint,
} from "../../lib/theta-region";

const size = 760;
const padding = 78;
const maximumInteractiveOrder = 40;
const fullMarkerOrderLimit = 12;
const sparseMarkerDenominatorLimit = 12;

function fractionText(numerator: number, denominator: number): string {
  return numerator + "/" + denominator;
}

function parseOrder(draft: string): number | null {
  if (!/^\d+$/.test(draft)) return null;
  const candidate = Number(draft);
  return Number.isSafeInteger(candidate) &&
    candidate >= 1 &&
    candidate <= maximumInteractiveOrder
    ? candidate
    : null;
}

function markerNodes(order: number, upperNodes: PlotPoint[]): PlotPoint[] {
  const selected =
    order <= fullMarkerOrderLimit
      ? upperNodes
      : upperNodes.filter(
          (point) =>
            (point.fraction?.denominator ?? Number.POSITIVE_INFINITY) <=
            sparseMarkerDenominatorLimit,
        );
  const reflected = selected
    .filter((point) => Math.abs(point.y) > 1e-12)
    .map((point) => ({ ...point, y: -point.y, angle: 1 - point.angle }));
  return [...selected, ...reflected];
}

export function BoundaryExplorer() {
  const [orderDraft, setOrderDraft] = useState("7");
  const [order, setOrder] = useState(7);
  const parsedDraft = parseOrder(orderDraft);
  const errorMessage =
    parsedDraft === null
      ? "Enter an integer from 1 to 40. The plot remains at n=" + order + "."
      : null;
  const region = useMemo(() => thetaBoundaryForOrder(order, 54), [order]);
  const cells = useMemo(() => (order >= 3 ? fareyCells(order) : []), [order]);
  const nodes = useMemo(
    () => markerNodes(order, region.upperFareyNodes),
    [order, region.upperFareyNodes],
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
          <p className="section-label">Interactive numerical boundary plot</p>
          <h3 id="boundary-laboratory-heading">
            Choose n and plot an approximation to ∂Θ<sub>n</sub>
          </h3>
        </div>
        <label>
          Matrix order n
          <input
            aria-describedby={
              errorMessage
                ? "boundary-order-help boundary-order-error"
                : "boundary-order-help"
            }
            aria-errormessage={errorMessage ? "boundary-order-error" : undefined}
            aria-invalid={errorMessage ? "true" : undefined}
            data-boundary-order-input
            inputMode="numeric"
            max={maximumInteractiveOrder}
            min="1"
            onChange={(event) => {
              const draft = event.target.value;
              const candidate = parseOrder(draft);
              setOrderDraft(draft);
              if (candidate !== null) setOrder(candidate);
            }}
            step="1"
            type="number"
            value={orderDraft}
          />
        </label>
      </header>
      <p id="boundary-order-help" className="boundary-laboratory-help">
        Enter an integer from 1 to 40. Orders 1 and 2 use their exact
        elementary descriptions. From order 3 onward, each curved arc is
        sampled from the proved scalar equation using ninety bisection steps
        per sample. At order 3, the segment [−1,−1/2] on the real axis is
        inserted exactly.
      </p>
      {errorMessage ? (
        <p
          className="boundary-laboratory-error"
          data-boundary-order-error
          id="boundary-order-error"
          role="alert"
        >
          {errorMessage}
        </p>
      ) : null}

      <div className="boundary-laboratory-grid">
        <figure>
          <svg
            aria-describedby="boundary-plot-description"
            aria-label={"Boundary of Theta " + order}
            role="img"
            viewBox={"0 0 " + size + " " + size}
          >
            <desc id="boundary-plot-description">
              The stochastic eigenvalue region of order {order}, drawn in the
              complex plane. The dashed circle is the unit circle. Farey
              fractions determine boundary endpoints exactly, while the
              curved arcs and displayed coordinates are numerical.
              {order === 3
                ? " The exceptional real segment from minus one to minus one half is included exactly."
                : ""}
            </desc>
            <line className="boundary-lab-axis" x1={padding - 22} x2={size - padding + 22} y1={size / 2} y2={size / 2} />
            <line className="boundary-lab-axis" x1={size / 2} x2={size / 2} y1={padding - 22} y2={size - padding + 22} />
            <circle className="boundary-lab-unit" cx={size / 2} cy={size / 2} r={(size - 2 * padding) / 2} />
            {region.kind === "region" ? (
              <path className="boundary-lab-region" data-boundary-region d={boundaryPath} />
            ) : null}
            {region.kind === "interval" ? (
              <line className="boundary-lab-interval" data-boundary-interval x1={intervalStart.x} x2={intervalEnd.x} y1={intervalStart.y} y2={intervalEnd.y} />
            ) : null}
            {region.kind === "point" ? (
              <circle className="boundary-lab-point" data-boundary-point cx={intervalEnd.x} cy={intervalEnd.y} r="9" />
            ) : null}
            {nodes.map((point) => {
              const coordinate = svgCoordinates(point, size, padding);
              return (
                <circle
                  aria-hidden="true"
                  className="boundary-lab-root"
                  cx={coordinate.x}
                  cy={coordinate.y}
                  data-farey-root
                  key={
                    fractionText(
                      point.fraction?.numerator ?? 0,
                      point.fraction?.denominator ?? 1,
                    ) + (point.y < 0 ? ":lower" : ":upper")
                  }
                  r="4.5"
                />
              );
            })}
            <text className="boundary-lab-label" x={size - padding + 15} y={size / 2 + 28}>Re λ</text>
            <text className="boundary-lab-label" x={size / 2 + 12} y={padding - 24}>Im λ</text>
          </svg>
          <figcaption>
            <span>Numerical boundary plot.</span>{" "}
            {region.kind === "point" ? (
              <>Θ<sub>1</sub> is the exact single point 1.</>
            ) : region.kind === "interval" ? (
              <>Θ<sub>2</sub> is the exact real interval [−1,1].</>
            ) : (
              <>
                Θ<sub>{order}</sub> has {cells.length} Farey interval
                {cells.length === 1 ? "" : "s"} in 0≤x≤1/2, reflected across
                the real axis.
                {order === 3
                  ? " The segment [−1,−1/2] is exact."
                  : ""}
              </>
            )}{" "}
            The dashed circle is |λ|=1. Farey fractions specify endpoint
            roots exactly, but their SVG coordinates and all sampled arc
            coordinates are floating-point approximations.{" "}
            {order <= fullMarkerOrderLimit
              ? "All endpoint roots are marked in both half-planes."
              : "To reduce overlap above order 12, markers are limited to endpoints with denominator at most 12; the table retains every Farey pair."}
          </figcaption>
        </figure>

        <aside>
          <section>
            <p className="section-label">Exact combinatorial data</p>
            <h4>Farey pairs and reduced Ito-polynomial data</h4>
            <p>
              Fractions, Farey-neighbour tests, denominator order, and the
              integers <i>d</i> and <i>e</i> are computed exactly. The
              corresponding root-of-unity coordinates are evaluated in
              floating-point arithmetic only when the SVG is drawn.
            </p>
          </section>
          <section>
            <p className="section-label">Numerical output</p>
            <h4>Modulus and plotted curve</h4>
            <p>
              {region.kind === "region" ? (
                <>
                  Interior moduli are found by fixed-iteration bisection. The
                  SVG joins finitely many sampled points, so it is a numerical
                  plot of the proved boundary formula, not an exact symbolic
                  curve.
                  {order === 3
                    ? " The exceptional real segment is added from exact endpoints rather than sampled from that equation."
                    : ""}
                </>
              ) : (
                <>No numerical modulus solve is used at this order; the plotted description is exact.</>
              )}
            </p>
          </section>
          {cells.length > 0 ? (
            <details>
              <summary>Open all Farey pairs for n={order}</summary>
              <div className="boundary-cell-ledger">
                <table>
                  <caption>Consecutive Farey pairs and denominator-ordered data for n={order}</caption>
                  <thead>
                    <tr>
                      <th scope="col">Farey pair</th>
                      <th scope="col">(q,s)</th>
                      <th scope="col">d</th>
                      <th scope="col">e</th>
                    </tr>
                  </thead>
                  <tbody data-boundary-cell-rows>
                    {cells.map((cell) => (
                      <tr key={fractionText(cell.left.numerator, cell.left.denominator) + "-" + fractionText(cell.right.numerator, cell.right.denominator)}>
                        <th scope="row">
                          {fractionText(cell.left.numerator, cell.left.denominator)} → {fractionText(cell.right.numerator, cell.right.denominator)}
                        </th>
                        <td>({cell.q},{cell.s})</td>
                        <td>{cell.d}</td>
                        <td>{cell.e}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </details>
          ) : null}
        </aside>
      </div>
    </section>
  );
}
