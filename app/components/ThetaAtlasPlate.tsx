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
    <figure className="plate theta-atlas" id="region-atlas">
      <fieldset className="reader-atlas-controls"><legend>Explore the eigenvalue region</legend>
        <label><input type="radio" name="atlas-view" value="single" defaultChecked /> One region: order four</label>
        <label><input type="radio" name="atlas-view" value="comparison" /> Compare orders one–seven</label>
      </fieldset>
      <div className="plate-heading" aria-hidden="true">
        <span>Plate I</span>
        <span className="atlas-single-copy">Allowed region · order IV</span><span className="atlas-comparison-copy">Orders I–VII</span>
      </div>
      <svg
        className="theta-figure"
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-labelledby="theta-atlas-title theta-atlas-description"
      >
        <title id="theta-atlas-title">
          The stochastic eigenvalue region and its comparison with other orders
        </title>
        <desc id="theta-atlas-description">
          The starting view shows the filled order-four eigenvalue region, with a dashed unit circle for reference. The comparison view shows the nested boundaries of Theta four
          through Theta seven, the exact triangle and real interval for
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
          data-atlas-single-fill
          className="theta-atlas-fill"
          d={regions[0].path}
        />
        <path
          data-atlas-comparison-fill
          className="theta-atlas-fill"
          d={regions[regions.length - 1].path}
        />
        <path
          data-atlas-comparison-fill
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
          ["3", "exact triangle and real interval"],
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
        <p className="atlas-single-copy"><strong>The shading represents the allowed region Θ₄.</strong> Every point in Θ₄ is an eigenvalue of some four-state stochastic matrix; a point outside the exact region cannot occur at order four. The drawing approximates its boundary. The dashed circle marks the elementary bound |λ| ≤ 1.</p>
        <p className="atlas-comparison-copy"><strong>More states allow a larger region.</strong> Compare the labelled boundaries; the shaded outer region belongs to order seven. Orders two and three provide elementary starting examples.</p>
        <p>Orders four–seven are sampled numerical drawings of the proved boundary equations.</p>
        <details><summary>Exact cases and numerical provenance</summary><p>The regions Θ<sub>1</sub> through Θ
        <sub>7</sub> in one coordinate plane. Orders one, two, and three are
        drawn from their exact elementary descriptions; the contours for
        orders four through seven are evaluated cell by cell from the
        radial boundary equation in the manuscript. Those contours are
        sampled numerical polylines, with 34 points per Farey interval before
        shared endpoints are removed; SVG coordinates are rounded to 0.01.
        The exact regions are nested by the matrix-padding argument in Topic I;
        Topic XI compares their scalar candidates.</p></details>
      </figcaption>
    </figure>
  );
}
