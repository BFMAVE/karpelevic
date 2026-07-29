type TopicIIConceptFigureProps = {
  kind: "triple-sign" | "normal-fan" | "polar-saturation";
};

const copy = {
  "triple-sign": {
    title: "One directed edge tests every remaining point",
    description:
      "A strict convex hexagon is shown with one consecutive edge directed from z zero to z one. Every other vertex lies strictly in its left half-plane.",
    caption:
      "Figure II.1. For the directed consecutive edge z₀→z₁, every other vertex has det(z₁−z₀,zₖ−z₀)>0. Repeating this finite test for every edge exposes the entire polygon.",
  },
  "normal-fan": {
    title: "One row of the normal-fan transfer matrix",
    description:
      "The direction at thirty degrees lies in the cone between adjacent unit normals at zero and sixty degrees and is their nonnegative linear combination.",
    caption:
      "Figure II.2. In this exact example, uⱼ=(1,0), uⱼ₊₁=(1/2,√3/2), and e⁻ⁱᶿuᵢ=(√3/2,1/2)=(uⱼ+uⱼ₊₁)/√3. Those two coefficients form one row of BΦ(θ).",
  },
  "polar-saturation": {
    title: "Polarity exchanges vertices and supporting sides",
    description:
      "A regular pentagon and its polar are displayed. A selected vertex of the first corresponds to a selected side of the polar.",
    caption:
      "Figure II.3. The polar inequality supplied by a vertex x of R cuts out the dual side Fₓ of R°. Side touching for T*R° therefore returns as vertex touching for TR.",
  },
} as const;

type Point = readonly [number, number];

function determinant(a: Point, b: Point): number {
  return a[0] * b[1] - a[1] * b[0];
}

function TripleSignDrawing() {
  const points: readonly Point[] = [
    [-2, -1],
    [1, -1.4],
    [2.4, 0],
    [1.5, 2],
    [-1, 2.2],
    [-2.4, 0.7],
  ];
  const toSvg = ([x, y]: Point): Point => [340 + 92 * x, 218 - 72 * y];
  const svgPoints = points.map(toSvg);
  const edge: Point = [
    points[1][0] - points[0][0],
    points[1][1] - points[0][1],
  ];
  const determinants = points.slice(2).map((point) =>
    determinant(edge, [
      point[0] - points[0][0],
      point[1] - points[0][1],
    ]),
  );

  return (
    <>
      <polygon
        className="topic-ii-figure-polygon"
        points={svgPoints.map((point) => point.join(",")).join(" ")}
      />
      <path
        className="topic-ii-figure-edge"
        d={`M${svgPoints[0][0]} ${svgPoints[0][1]} L${svgPoints[1][0]} ${svgPoints[1][1]}`}
        markerEnd="url(#topic-ii-arrow-triple-sign)"
      />
      <path
        className="topic-ii-figure-support"
        d={`M82 ${svgPoints[0][1] + 35} L662 ${svgPoints[1][1] - 42}`}
      />
      {svgPoints.map(([x, y], index) => (
        <g key={index}>
          <circle
            className={
              index < 2
                ? "topic-ii-figure-point topic-ii-figure-point-accent"
                : "topic-ii-figure-point"
            }
            cx={x}
            cy={y}
            r="6"
          />
          <text className="topic-ii-figure-small" x={x + 9} y={y - 10}>
            z{index}
          </text>
        </g>
      ))}
      <text className="topic-ii-figure-label" x="494" y="304">
        every zₖ, k≠0,1, lies strictly left
      </text>
      <g
        data-edge-x={edge[0]}
        data-edge-y={edge[1]}
        data-min-determinant={Math.min(...determinants)}
      />
    </>
  );
}

function NormalFanDrawing() {
  const coefficient = 1 / Math.sqrt(3);
  return (
    <>
      <path className="topic-ii-figure-cone" d="M130 286 L620 286 L375 43 Z" />
      <path
        className="topic-ii-figure-ray"
        d="M130 286 L620 286"
        markerEnd="url(#topic-ii-arrow-normal-fan)"
      />
      <path
        className="topic-ii-figure-ray"
        d="M130 286 L375 43"
        markerEnd="url(#topic-ii-arrow-normal-fan)"
      />
      <path
        className="topic-ii-figure-target"
        d="M130 286 L554 41"
        markerEnd="url(#topic-ii-arrow-normal-fan)"
      />
      <path className="topic-ii-figure-angle" d="M214 286 A84 84 0 0 0 203 244" />
      <path className="topic-ii-figure-angle" d="M203 244 A84 84 0 0 0 172 213" />
      <text className="topic-ii-figure-small" x="214" y="266">
        30°
      </text>
      <text className="topic-ii-figure-small" x="179" y="232">
        30°
      </text>
      <text className="topic-ii-figure-label" x="624" y="307">
        uⱼ
      </text>
      <text className="topic-ii-figure-label" x="365" y="34">
        uⱼ₊₁
      </text>
      <text className="topic-ii-figure-label topic-ii-figure-accent" x="564" y="48">
        e⁻ⁱᶿuᵢ
      </text>
      <text className="topic-ii-figure-equation" x="392" y="342" textAnchor="middle">
        e⁻ⁱᶿuᵢ = (1/√3)uⱼ + (1/√3)uⱼ₊₁
      </text>
      <g
        data-coefficient-a={coefficient}
        data-coefficient-b={coefficient}
        data-result-x={Math.sqrt(3) / 2}
        data-result-y={0.5}
      />
    </>
  );
}

function regularPolygon(
  count: number,
  radius: number,
  centreX: number,
  centreY: number,
  rotation: number,
): Point[] {
  return Array.from({ length: count }, (_, index) => {
    const angle = rotation + (2 * Math.PI * index) / count;
    return [
      centreX + radius * Math.cos(angle),
      centreY - radius * Math.sin(angle),
    ];
  });
}

function PolarSaturationDrawing() {
  const primal = regularPolygon(5, 112, 220, 183, Math.PI / 2);
  const polar = regularPolygon(5, 112, 545, 183, Math.PI / 2 + Math.PI / 5);
  const selectedVertex = primal[0];
  const dualSide = [polar[4], polar[0]];

  return (
    <>
      <polygon
        className="topic-ii-figure-polygon"
        points={primal.map((point) => point.join(",")).join(" ")}
      />
      <polygon
        className="topic-ii-figure-polygon topic-ii-figure-polar"
        points={polar.map((point) => point.join(",")).join(" ")}
      />
      <circle
        className="topic-ii-figure-point topic-ii-figure-point-accent"
        cx={selectedVertex[0]}
        cy={selectedVertex[1]}
        r="7"
      />
      <line
        className="topic-ii-figure-edge"
        x1={dualSide[0][0]}
        x2={dualSide[1][0]}
        y1={dualSide[0][1]}
        y2={dualSide[1][1]}
      />
      <path
        className="topic-ii-figure-transfer"
        d="M341 181 L420 181"
        markerEnd="url(#topic-ii-arrow-polar-saturation)"
      />
      <text className="topic-ii-figure-label" x="220" y="331" textAnchor="middle">
        vertex x of R
      </text>
      <text className="topic-ii-figure-label" x="545" y="331" textAnchor="middle">
        side Fₓ of R°
      </text>
      <text className="topic-ii-figure-small" x="381" y="161" textAnchor="middle">
        polarity
      </text>
    </>
  );
}

export function TopicIIConceptFigure({ kind }: TopicIIConceptFigureProps) {
  const figure = copy[kind];

  return (
    <figure className="topic-ii-concept-figure">
      <div className="topic-ii-concept-heading">
        <span>Verified geometric plate</span>
        <span>{figure.title}</span>
      </div>
      <svg
        aria-labelledby={`topic-ii-${kind}-title topic-ii-${kind}-description`}
        role="img"
        viewBox="0 0 760 370"
      >
        <title id={`topic-ii-${kind}-title`}>{figure.title}</title>
        <desc id={`topic-ii-${kind}-description`}>{figure.description}</desc>
        <defs>
          <marker
            id={`topic-ii-arrow-${kind}`}
            markerHeight="7"
            markerWidth="8"
            orient="auto"
            refX="7"
            refY="3.5"
          >
            <path className="topic-ii-figure-arrow-head" d="M0,0 L8,3.5 L0,7 Z" />
          </marker>
        </defs>
        {kind === "triple-sign" ? <TripleSignDrawing /> : null}
        {kind === "normal-fan" ? <NormalFanDrawing /> : null}
        {kind === "polar-saturation" ? <PolarSaturationDrawing /> : null}
      </svg>
      <figcaption>{figure.caption}</figcaption>
    </figure>
  );
}
