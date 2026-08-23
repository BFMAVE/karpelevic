import {
  svgCoordinates,
  svgPath,
  thetaBoundaryForOrder,
  type PlotPoint,
} from "../../lib/theta-region";

const size = 760;
const padding = 78;
const workedRadius = 0.940100221928822853;
const samplesPerInterval = 73;

function reflectedFareyNodes(nodes: PlotPoint[]): PlotPoint[] {
  const reflected = nodes
    .filter((point) => Math.abs(point.y) > 1e-12)
    .map((point) => ({ ...point, y: -point.y, angle: 1 - point.angle }));
  return [...nodes, ...reflected];
}

function endpointMarkerTitle(point: PlotPoint): string {
  const fraction =
    String(point.fraction?.numerator) +
    "/" +
    String(point.fraction?.denominator);
  return point.y < 0
    ? "e^(−2πi·" +
        fraction +
        "), conjugate of the endpoint root corresponding to the upper-half parameter x=" +
        fraction
    : "e^(2πi·" +
        fraction +
        "), endpoint root; normalized angle x=" +
        fraction;
}

export function OrderSevenBoundaryFigure() {
  const region = thetaBoundaryForOrder(7, samplesPerInterval);
  const boundaryPath = svgPath(region.boundary, size, padding);
  const nodes = reflectedFareyNodes(region.upperFareyNodes);
  const workedPoint: PlotPoint = {
    x: workedRadius * Math.cos((3 * Math.PI) / 4),
    y: workedRadius * Math.sin((3 * Math.PI) / 4),
    angle: 3 / 8,
    radius: workedRadius,
  };
  const workedCoordinate = svgCoordinates(workedPoint, size, padding);

  return (
    <figure
      className="topic-xiv-boundary-figure"
      data-order-seven-boundary-figure
      id="karp:fig:n7-region"
    >
      <svg
        aria-describedby="order-seven-boundary-description"
        aria-labelledby="order-seven-boundary-title"
        data-order-seven-boundary-svg
        role="img"
        viewBox={"0 0 " + size + " " + size}
      >
        <title id="order-seven-boundary-title">Numerical plot of the order-seven boundary</title>
        <desc id="order-seven-boundary-description">
          A numerical polyline approximation to the boundary of Theta seven,
          symmetric about the real axis. Topic thirteen proves that the
          parametrized curves are the boundary. A pale dashed circle identifies
          the unit circle. A dashed segment runs from the origin along argument
          three pi over four to the marked boundary point lambda.
        </desc>
        <line
          className="boundary-plot-axis"
          x1={padding - 22}
          x2={size - padding + 22}
          y1={size / 2}
          y2={size / 2}
        />
        <line
          className="boundary-plot-axis"
          x1={size / 2}
          x2={size / 2}
          y1={padding - 22}
          y2={size - padding + 22}
        />
        <circle
          className="boundary-plot-unit"
          cx={size / 2}
          cy={size / 2}
          data-unit-circle
          r={(size - 2 * padding) / 2}
        />
        <path
          className="boundary-plot-region"
          d={boundaryPath}
          data-order-seven-boundary-path
        />
        {nodes.map((point) => {
          const coordinate = svgCoordinates(point, size, padding);
          return (
            <circle
              aria-hidden="true"
              className="boundary-plot-root"
              cx={coordinate.x}
              cy={coordinate.y}
              data-farey-root
              key={
                String(point.fraction?.numerator) +
                "/" +
                String(point.fraction?.denominator) +
                (point.y < 0 ? ":lower" : ":upper")
              }
              r="4.5"
            >
              <title>{endpointMarkerTitle(point)}</title>
            </circle>
          );
        })}
        <line
          className="topic-xiv-worked-ray"
          data-angle-fraction="3/8"
          data-worked-ray
          x1={size / 2}
          x2={workedCoordinate.x}
          y1={size / 2}
          y2={workedCoordinate.y}
        />
        <circle
          aria-hidden="true"
          className="topic-xiv-worked-point"
          cx={workedCoordinate.x}
          cy={workedCoordinate.y}
          data-worked-boundary-point
          r="7"
        />
        <text className="boundary-plot-label" x={size - padding + 15} y={size / 2 + 28}>
          Re λ
        </text>
        <text className="boundary-plot-label" x={size / 2 + 12} y={padding - 24}>
          Im λ
        </text>
      </svg>
      <figcaption>
        <span>Plate XIV.1.</span> By Topic XIII, the parametrized curves shown
        here form the boundary of Θ<sub>7</sub>. Each nonreal Farey branch is
        represented by a {samplesPerInterval}-point polyline; no bound on its
        geometric approximation error is asserted. The pale dashed circle is
        |λ|=1. The dashed segment lies on the ray{" "}
        {"{t e^(3πi/4) : t ≥ 0}"}. Its marked endpoint is the complex point{" "}
        λ=ρe<sup>3πi/4</sup>, where ρ is the unique solution of{" "}
        <a href="#karp:eq:n7-ray-equation">equation (II.10.2)</a>. Farey
        fractions specify the root-of-unity markers exactly; all displayed
        coordinates are floating-point approximations. Region-path coordinates
        are rounded to the nearest 0.01 in viewBox coordinates.
      </figcaption>
    </figure>
  );
}
