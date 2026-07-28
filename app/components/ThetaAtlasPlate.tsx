import {
  svgCoordinates,
  svgPath,
  thetaBoundary,
  type PlotPoint,
} from "../lib/theta-region";

const size = 820;
const padding = 92;
const plottedOrders = [4, 5, 6, 7] as const;

function point(x: number, y: number): PlotPoint {
  return { x, y, angle: 0, radius: Math.hypot(x, y) };
}

function coordinates(x: number, y: number) {
  return svgCoordinates(point(x, y), size, padding);
}

const triangle = [
  point(1, 0),
  point(-0.5, Math.sqrt(3) / 2),
  point(-0.5, -Math.sqrt(3) / 2),
];
const trianglePath = svgPath(triangle, size, padding);
const realLeft = coordinates(-1, 0);
const realHalf = coordinates(-0.5, 0);
const realRight = coordinates(1, 0);

export function ThetaAtlasPlate() {
  const regions = plottedOrders.map((order) => ({
    order,
    path: svgPath(thetaBoundary(order, 34).boundary, size, padding),
  }));

  return (
    <figure className="plate theta-atlas">
      <div className="plate-heading" aria-hidden="true">
        <span>Plate I</span>
        <span>Orders I–VII</span>
      </div>
      <svg
        className="theta-figure"
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-labelledby="theta-atlas-title theta-atlas-description"
      >
        <title id="theta-atlas-title">
          The stochastic eigenvalue regions from order one through order seven
        </title>
        <desc id="theta-atlas-description">
          One comparison plot showing the nested boundaries of Theta four
          through Theta seven, the exact triangular region and real tail for
          Theta three, the interval Theta two, and the point Theta one.
        </desc>
        <defs>
          <pattern
            id="atlas-engraving"
            width="11"
            height="11"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(18)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="11"
              className="engraving-line"
            />
          </pattern>
        </defs>
        <line
          className="axis-line"
          x1={padding - 24}
          y1={size / 2}
          x2={size - padding + 24}
          y2={size / 2}
        />
        <line
          className="axis-line"
          x1={size / 2}
          y1={padding - 24}
          x2={size / 2}
          y2={size - padding + 24}
        />
        <circle
          className="unit-circle"
          cx={size / 2}
          cy={size / 2}
          r={(size - 2 * padding) / 2}
        />

        <path
          className="theta-atlas-fill"
          d={regions[regions.length - 1].path}
        />
        <path
          className="theta-atlas-hatching"
          d={regions[regions.length - 1].path}
        />

        {regions.map((region) => (
          <path
            className={`theta-contour theta-order-${region.order}`}
            d={region.path}
            key={region.order}
          >
            <title>{`Boundary of Θ${region.order}`}</title>
          </path>
        ))}

        <path className="theta-three-fill" d={trianglePath} />
        <path className="theta-contour theta-order-3" d={trianglePath}>
          <title>Exact boundary of Θ3</title>
        </path>
        <line
          className="theta-contour theta-order-3 theta-three-tail"
          x1={realLeft.x}
          y1={realLeft.y}
          x2={realHalf.x}
          y2={realHalf.y}
        />
        <line
          className="theta-order-2"
          x1={realLeft.x}
          y1={realLeft.y}
          x2={realRight.x}
          y2={realRight.y}
        >
          <title>Θ2 is the interval from minus one to one</title>
        </line>
        <circle
          className="theta-order-1"
          cx={realRight.x}
          cy={realRight.y}
          r="7"
        >
          <title>Θ1 is the point one</title>
        </circle>

        <text className="axis-label" x={size - padding + 31} y={size / 2 + 6}>
          1
        </text>
        <text className="axis-label" x={padding - 40} y={size / 2 + 6}>
          −1
        </text>
        <text className="axis-label" x={size / 2 + 8} y={padding - 32}>
          Im λ
        </text>
        <text className="axis-label" x={size - padding + 10} y={size / 2 + 34}>
          Re λ
        </text>
      </svg>

      <div className="atlas-legend" aria-label="Figure legend">
        {[
          ["1", "point"],
          ["2", "interval"],
          ["3", "exact polygon and tail"],
          ["4", "boundary"],
          ["5", "boundary"],
          ["6", "boundary"],
          ["7", "boundary"],
        ].map(([order, description]) => (
          <div className={`legend-item legend-order-${order}`} key={order}>
            <span className="legend-swatch" aria-hidden="true" />
            <span>
              Θ<sub>{order}</sub>
            </span>
            <small>{description}</small>
          </div>
        ))}
      </div>

      <figcaption>
        <span>Figure 1.</span> The regions Θ<sub>1</sub> through Θ
        <sub>7</sub> in one coordinate plane. Orders one, two, and three are
        drawn from their exact elementary descriptions; the contours for
        orders four through seven are evaluated cell by cell from the
        radial boundary equation in the manuscript. Each contour encloses its
        corresponding region, and the sequence is nested.
      </figcaption>
    </figure>
  );
}
