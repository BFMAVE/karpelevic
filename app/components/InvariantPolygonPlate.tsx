const outerPoints = [
  [60, 130],
  [114, 54],
  [216, 38],
  [302, 88],
  [328, 178],
  [270, 248],
  [158, 258],
  [76, 210],
];

function transformPoint([x, y]: number[]): [number, number] {
  const centerX = 194;
  const centerY = 150;
  const scale = 0.72;
  const rotation = (31 * Math.PI) / 180;
  const shiftedX = x - centerX;
  const shiftedY = y - centerY;

  return [
    centerX +
      scale *
        (shiftedX * Math.cos(rotation) - shiftedY * Math.sin(rotation)),
    centerY +
      scale *
        (shiftedX * Math.sin(rotation) + shiftedY * Math.cos(rotation)),
  ];
}

function pointsAttribute(points: number[][]): string {
  return points
    .map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");
}

export function InvariantPolygonPlate() {
  const transformedPoints = outerPoints.map(transformPoint);

  return (
    <figure className="plate polygon-plate">
      <div className="plate-heading" aria-hidden="true">
        <span>Figure 2</span>
        <span>Schematic</span>
      </div>
      <svg
        viewBox="0 0 390 300"
        role="img"
        aria-labelledby="polygon-title polygon-description"
      >
        <title id="polygon-title">
          A polygon containing a rotated and contracted copy of itself
        </title>
        <desc id="polygon-description">
          The outer polygon P contains the smaller polygon lambda P.
          Contact between the two shapes is emphasized.
        </desc>
        <polygon
          className="polygon-outer"
          points={pointsAttribute(outerPoints)}
        />
        <polygon
          className="polygon-inner"
          points={pointsAttribute(transformedPoints)}
        />
        {transformedPoints.map(([x, y], index) => (
          <circle
            className="contact-point"
            cx={x}
            cy={y}
            r="3.5"
            key={`${x}-${y}`}
          >
            <title>{`Image vertex ${index + 1}`}</title>
          </circle>
        ))}
        <path className="rotation-arrow" d="M 180 142 A 45 45 0 0 1 219 112" />
        <path className="arrow-head" d="M 218 112 L 207 113 L 214 122" />
        <text className="polygon-label" x="62" y="118">
          P
        </text>
        <text className="polygon-label inner-label" x="235" y="174">
          λP
        </text>
      </svg>
      <figcaption>
        <span>Figure 2.</span> Schematic only: a rotation-contraction λ maps
        the polygon P into itself. At a radial extremum, the pattern of
        contacts carries the combinatorial information used in the paper.
      </figcaption>
    </figure>
  );
}
