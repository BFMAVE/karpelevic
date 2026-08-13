type TopicIIConceptFigureProps = {
  kind: "triple-sign" | "normal-fan" | "polar-saturation";
};

type FigureVariant = "desktop" | "mobile";

const copy = {
  "triple-sign": {
    qualification: "Verified geometric plate",
    title: "One directed edge tests every remaining point",
    description:
      "A strict convex hexagon is shown with one consecutive edge directed from z zero to z one. The dashed supporting line extends that edge exactly, and every other vertex lies strictly in its shaded left half-plane.",
    caption:
      "Figure II.1. For the directed consecutive edge z₀→z₁, every other vertex has det(z₁−z₀,zₖ−z₀)>0. The shaded region is its open left half-plane. Repeating this finite test for every edge exposes the entire polygon.",
  },
  "normal-fan": {
    qualification: "Verified geometric plate",
    title: "One row of the normal-fan transfer matrix",
    description:
      "The direction at thirty degrees lies in the cone between adjacent unit normals at zero and sixty degrees and is their nonnegative linear combination.",
    caption:
      "Figure II.2. In this exact example, uⱼ=(1,0), uⱼ₊₁=(1/2,√3/2), and e⁻ⁱᶿuᵢ=(√3/2,1/2)=(uⱼ+uⱼ₊₁)/√3. The two coefficients 1/√3 form the only nonzero entries in this row of BΦ(θ).",
  },
  "polar-saturation": {
    qualification: "Schematic polarity correspondence",
    title: "Polarity exchanges vertices and supporting sides",
    description:
      "A regular pentagon and a separately scaled schematic of its polar are displayed. A selected vertex of the first corresponds to a selected side of the polar.",
    caption:
      "Figure II.3. Schematic polarity correspondence; the two polygons are independently scaled for legibility. The polar inequality supplied by a vertex x of R cuts out the dual side Fₓ of R°. Side touching for T*R° therefore returns as vertex touching for TR.",
  },
} as const;

type Point = readonly [number, number];

function determinant(a: Point, b: Point): number {
  return a[0] * b[1] - a[1] * b[0];
}

function lineValueAtX(start: Point, end: Point, x: number): number {
  return start[1] + ((x - start[0]) * (end[1] - start[1])) / (end[0] - start[0]);
}

function TripleSignDrawing({
  arrowId,
  variant,
}: {
  arrowId: string;
  variant: FigureVariant;
}) {
  const points: readonly Point[] = [
    [-2, -1],
    [1, -1.4],
    [2.4, 0],
    [1.5, 2],
    [-1, 2.2],
    [-2.4, 0.7],
  ];
  const mobile = variant === "mobile";
  const width = mobile ? 420 : 760;
  const margin = mobile ? 20 : 34;
  const toSvg = ([x, y]: Point): Point =>
    mobile ? [210 + 63 * x, 190 - 48 * y] : [340 + 92 * x, 218 - 72 * y];
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
  const supportStart: Point = [
    margin,
    lineValueAtX(svgPoints[0], svgPoints[1], margin),
  ];
  const supportEnd: Point = [
    width - margin,
    lineValueAtX(svgPoints[0], svgPoints[1], width - margin),
  ];
  const leftBoundaryAtStart = lineValueAtX(svgPoints[0], svgPoints[1], 0);
  const leftBoundaryAtEnd = lineValueAtX(svgPoints[0], svgPoints[1], width);

  return (
    <>
      <polygon
        className="topic-ii-figure-half-plane"
        points={`0,0 ${width},0 ${width},${leftBoundaryAtEnd} 0,${leftBoundaryAtStart}`}
      />
      <polygon
        className="topic-ii-figure-polygon"
        points={svgPoints.map((point) => point.join(",")).join(" ")}
      />
      <path
        className="topic-ii-figure-support"
        data-supporting-edge="z0-z1"
        d={`M${supportStart[0]} ${supportStart[1]} L${supportEnd[0]} ${supportEnd[1]}`}
      />
      <path
        className="topic-ii-figure-edge"
        d={`M${svgPoints[0][0]} ${svgPoints[0][1]} L${svgPoints[1][0]} ${svgPoints[1][1]}`}
        markerEnd={`url(#${arrowId})`}
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
      {mobile ? (
        <text className="topic-ii-figure-label" x="210" y="305" textAnchor="middle">
          <tspan x="210">all remaining vertices lie</tspan>
          <tspan x="210" dy="19">in the shaded open half-plane</tspan>
        </text>
      ) : (
        <text className="topic-ii-figure-label" x="494" y="265">
          <tspan x="494">all remaining vertices lie</tspan>
          <tspan x="494" dy="20">in the shaded open half-plane</tspan>
        </text>
      )}
      <g
        data-edge-x={edge[0]}
        data-edge-y={edge[1]}
        data-min-determinant={Math.min(...determinants)}
      />
    </>
  );
}

function NormalFanDrawing({
  arrowId,
  variant,
}: {
  arrowId: string;
  variant: FigureVariant;
}) {
  const coefficient = 1 / Math.sqrt(3);
  const mobile = variant === "mobile";

  if (mobile) {
    return (
      <>
        <path className="topic-ii-figure-cone" d="M64 315 L356 315 L210 62.121 Z" />
        <path
          className="topic-ii-figure-ray"
          d="M64 315 L356 315"
          markerEnd={`url(#${arrowId})`}
        />
        <path
          className="topic-ii-figure-ray"
          d="M64 315 L210 62.121"
          markerEnd={`url(#${arrowId})`}
        />
        <path
          className="topic-ii-figure-target"
          d="M64 315 L316.879 169"
          markerEnd={`url(#${arrowId})`}
        />
        <path className="topic-ii-figure-angle" d="M145 315 A81 81 0 0 0 134.148 274.5" />
        <path className="topic-ii-figure-angle" d="M134.148 274.5 A81 81 0 0 0 104.5 244.852" />
        <text className="topic-ii-figure-small" x="145" y="295">30°</text>
        <text className="topic-ii-figure-small" x="111" y="264">30°</text>
        <text className="topic-ii-figure-label" x="350" y="342" textAnchor="end">uⱼ</text>
        <text className="topic-ii-figure-label" x="210" y="45" textAnchor="middle">uⱼ₊₁</text>
        <text className="topic-ii-figure-label topic-ii-figure-accent" x="325" y="159">
          e⁻ⁱᶿuᵢ
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

  return (
    <>
      <path className="topic-ii-figure-cone" d="M230 286 L530 286 L380 26.192 Z" />
      <path
        className="topic-ii-figure-ray"
        d="M230 286 L530 286"
        markerEnd={`url(#${arrowId})`}
      />
      <path
        className="topic-ii-figure-ray"
        d="M230 286 L380 26.192"
        markerEnd={`url(#${arrowId})`}
      />
      <path
        className="topic-ii-figure-target"
        d="M230 286 L489.808 136"
        markerEnd={`url(#${arrowId})`}
      />
      <path className="topic-ii-figure-angle" d="M314 286 A84 84 0 0 0 303 244" />
      <path className="topic-ii-figure-angle" d="M303 244 A84 84 0 0 0 272 213" />
      <text className="topic-ii-figure-small" x="314" y="266">30°</text>
      <text className="topic-ii-figure-small" x="279" y="232">30°</text>
      <text className="topic-ii-figure-label" x="542" y="307">uⱼ</text>
      <text className="topic-ii-figure-label" x="370" y="20">uⱼ₊₁</text>
      <text className="topic-ii-figure-label topic-ii-figure-accent" x="500" y="132">
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

function PolarSaturationDrawing({
  arrowId,
  variant,
}: {
  arrowId: string;
  variant: FigureVariant;
}) {
  const mobile = variant === "mobile";
  const primal = regularPolygon(
    5,
    mobile ? 90 : 112,
    mobile ? 210 : 220,
    mobile ? 135 : 183,
    Math.PI / 2,
  );
  const polar = regularPolygon(
    5,
    mobile ? 90 : 112,
    mobile ? 210 : 545,
    mobile ? 470 : 183,
    Math.PI / 2 + Math.PI / 5,
  );
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
        d={mobile ? "M210 292 L210 346" : "M341 181 L420 181"}
        markerEnd={`url(#${arrowId})`}
      />
      <text
        className="topic-ii-figure-label"
        x={mobile ? 210 : 220}
        y={mobile ? 260 : 331}
        textAnchor="middle"
      >
        vertex x of R
      </text>
      <text
        className="topic-ii-figure-label"
        x={mobile ? 210 : 545}
        y={mobile ? 605 : 331}
        textAnchor="middle"
      >
        side Fₓ of R°
      </text>
      <text
        className="topic-ii-figure-small"
        x={mobile ? 250 : 381}
        y={mobile ? 324 : 161}
        textAnchor="middle"
      >
        polarity
      </text>
    </>
  );
}

function ConceptFigure({ kind }: TopicIIConceptFigureProps) {
  const figure = copy[kind];
  const desktopArrowId = `topic-ii-arrow-${kind}-desktop`;
  const mobileArrowId = `topic-ii-arrow-${kind}-mobile`;
  const desktopViewBox = kind === "triple-sign" ? "0 0 760 340" : "0 0 760 370";
  const mobileViewBox =
    kind === "triple-sign"
      ? "0 0 420 350"
      : kind === "normal-fan"
        ? "0 0 420 370"
        : "0 0 420 630";

  const draw = (variant: FigureVariant, arrowId: string) => {
    if (kind === "triple-sign") {
      return <TripleSignDrawing arrowId={arrowId} variant={variant} />;
    }
    if (kind === "normal-fan") {
      return <NormalFanDrawing arrowId={arrowId} variant={variant} />;
    }
    return <PolarSaturationDrawing arrowId={arrowId} variant={variant} />;
  };

  return (
    <figure className="topic-ii-concept-figure" data-figure-kind={kind}>
      <div className="topic-ii-concept-heading">
        <span>{figure.qualification}</span>
        <span>{figure.title}</span>
      </div>
      <svg
        aria-labelledby={`topic-ii-${kind}-title topic-ii-${kind}-description`}
        className="topic-ii-concept-svg topic-ii-concept-svg-desktop"
        data-figure-layout="desktop"
        role="img"
        viewBox={desktopViewBox}
      >
        <title id={`topic-ii-${kind}-title`}>{figure.title}</title>
        <desc id={`topic-ii-${kind}-description`}>{figure.description}</desc>
        <defs>
          <marker
            id={desktopArrowId}
            markerHeight="7"
            markerWidth="8"
            orient="auto"
            refX="7"
            refY="3.5"
          >
            <path className="topic-ii-figure-arrow-head" d="M0,0 L8,3.5 L0,7 Z" />
          </marker>
        </defs>
        {draw("desktop", desktopArrowId)}
      </svg>
      <svg
        aria-label={`${figure.title}, mobile layout`}
        className="topic-ii-concept-svg topic-ii-concept-svg-mobile"
        data-figure-layout="mobile"
        role="img"
        viewBox={mobileViewBox}
      >
        <defs>
          <marker
            id={mobileArrowId}
            markerHeight="7"
            markerWidth="8"
            orient="auto"
            refX="7"
            refY="3.5"
          >
            <path className="topic-ii-figure-arrow-head" d="M0,0 L8,3.5 L0,7 Z" />
          </marker>
        </defs>
        {draw("mobile", mobileArrowId)}
      </svg>
      <figcaption>{figure.caption}</figcaption>
    </figure>
  );
}

export function TopicIIConceptFigure({ kind }: TopicIIConceptFigureProps) {
  return <ConceptFigure kind={kind} />;
}
