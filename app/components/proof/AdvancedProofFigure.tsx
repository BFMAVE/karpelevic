export type AdvancedProofFigureKind =
  | "rotation-records"
  | "return-towers"
  | "projective-corridor"
  | "holonomy-escape"
  | "global-ledger"
  | "unit-return"
  | "farey-reflection"
  | "jensen-sheet";

type FigureCopy = {
  title: string;
  description: string;
  caption: string;
};

const copy: Record<AdvancedProofFigureKind, FigureCopy> = {
  "rotation-records": {
    title: "Upper records of the rotation by five modulo thirteen",
    description:
      "A residue strip highlights record residues zero, five, ten, and twelve. A second panel plots the record vectors zero one, one one, two one, and five two against the exact cone boundary L of h b equals zero.",
    caption:
      "Plate V.1. For N=13 and κ=5, the upper-record times are 0, 1, 2, and 5, with deficits 13, 8, 3, and 1. The lower panel shows their unimodular record-vector chain and the exact cone boundary L(h,b)=0. Collinear intermediate record vectors are retained and need not be vertices of the Klein sail.",
  },
  "return-towers": {
    title: "The two-height return section",
    description:
      "Eight base columns contain three towers of height one and five towers of height two, giving thirteen states. One arrow illustrates addition of five modulo eight on the base set.",
    caption:
      "Plate V.2. The record pair V=(1,1), V′=(2,1) gives ν=8, Δ=5, q=1, h=1. The identity qν+hΔ=13 is visible as three short states plus ten long states.",
  },
  "projective-corridor": {
    title: "Composition of perspectivities along the boundary arc",
    description:
      "An exact incidence construction on a convex polygonal arc. For i from two through four, Y i lies on the supporting line L i and Y i minus one, C i, Y i are collinear. The final line through Y four and Y five passes through X five, and Y five lies on the terminal line through C four and C five.",
    caption:
      "Plate V.4. Exact incidence construction. For 2≤i≤4, the point Yᵢ lies on ℒᵢ and the line through Yᵢ₋₁ and Yᵢ passes through Cᵢ. The final line through Y₄ and Y₅ passes through X₅, while Y₅ lies on aff(C₄,C₅). Their composition is a projectivity from the initial line to the terminal line.",
  },
  "holonomy-escape": {
    title: "A scalar projectivity controls the closing half-plane",
    description:
      "The final contact segment is parameterized from zero to one. The returned intersection u of tau lies before the point tau, placing the latter on the calibrated interior side.",
    caption:
      "Plate VI-A.1. Once γ(τ)>0, the planar determinant has the sign of τ-u(τ). The inequality τ-u(τ)>0 therefore opens the closing contact inward.",
  },
  "global-ledger": {
    title: "Partition of the return incidences",
    description:
      "The target-index set script B is partitioned into D, R, the singleton c, and A. Each row records the exact inverse-source statement proved for that target class.",
    caption:
      "Plate V.3. The target-index set ℬ is partitioned as ℬ=D⊔R⊔{c}⊔A. For j∈D∪A, the inverse source s(j) lies outside M; the identity s(R)=M° describes the sources of targets in R; and s(c)=b*. This is a combinatorial classification of return incidences; no deformation is assumed.",
  },
  "unit-return": {
    title: "Incidence pattern of the forbidden interior image vertex",
    description:
      "A schematic outer polygon and convex image polygon are shown. Eight image vertices lie in outer side interiors while a highlighted ninth image vertex Y lies strictly inside the outer polygon and remains extreme in the image polygon.",
    caption:
      "Plate VI-B.2. This incidence schematic records the contradiction, not metric coordinates for λ: if Δ>1, the deformation produces Y(τ) in Ext(λPτ)∩int(Pτ), while all other image vertices remain on ∂Pτ. Hereditary image-vertex saturation forbids this, so Δ=1.",
  },
  "farey-reflection": {
    title: "A Farey cell and its reflected orientation",
    description:
      "The order-seven cell from one third to two fifths contains three eighths. Reflection maps it to the cell from three fifths to two thirds containing five eighths.",
    caption:
      "Plate VII.1. The original endpoints satisfy 3·2-1·5=1 and 3+5=8>7. Reflection preserves adjacency and swaps the endpoint denominators.",
  },
  "jensen-sheet": {
    title: "All heterogeneous factors share one upper-half-plane branch",
    description:
      "A horizontal segment in the open upper half-plane traces mu to the q minus beta. Rays from the origin have arguments from A up to but not including M.",
    caption:
      "Plate VII.2. As 0≤β<1 increases, μ^q-β moves left with fixed positive imaginary part. Its argument rises strictly from A to, but never reaches, M.",
  },
};

function RotationRecords() {
  const residues = Array.from({ length: 13 }, (_, time) => (5 * time) % 13);
  const recordTimes = [0, 1, 2, 5] as const;
  const records = recordTimes.map((time) => ({
    time,
    residue: residues[time],
    deficit: 13 - residues[time],
    b: time === 0 ? 1 : Math.ceil((5 * time) / 13),
  }));
  const latticeOrigin = { x: 84, y: 344 };
  const latticeXScale = 46;
  const latticeYScale = 61;
  const latticePoint = (h: number, b: number) => ({
    x: latticeOrigin.x + latticeXScale * h,
    y: latticeOrigin.y - latticeYScale * b,
  });
  const coneEnd = latticePoint(6, (5 * 6) / 13);

  return (
    <>
      <line className="topic-ii-figure-support" x1="58" x2="702" y1="105" y2="105" />
      {residues.map((residue, time) => {
        const x = 68 + time * 51;
        const isRecord = recordTimes.includes(time as (typeof recordTimes)[number]);
        return (
          <g key={time}>
            <line className="topic-ii-figure-support" x1={x} x2={x} y1="99" y2="112" />
            <circle
              className={isRecord ? "topic-ii-figure-point topic-ii-figure-point-accent" : "topic-ii-figure-point"}
              cx={x}
              cy={105 - 3.2 * residue}
              r={isRecord ? 6 : 3.5}
            />
            <text className="topic-ii-figure-small" x={x} y="132" textAnchor="middle">{time}</text>
          </g>
        );
      })}
      <text className="topic-ii-figure-small" x="55" y="51">residue [5t]₁₃</text>
      <text className="topic-ii-figure-small" x="380" y="151" textAnchor="middle">time t</text>
      <line className="topic-ii-figure-ray" x1={latticeOrigin.x} x2="394" y1={latticeOrigin.y} y2={latticeOrigin.y} />
      <line className="topic-ii-figure-ray" x1={latticeOrigin.x} x2={latticeOrigin.x} y1={latticeOrigin.y} y2="181" />
      <line
        className="topic-ii-figure-support"
        data-cone-boundary="L(h,b)=0"
        x1={latticeOrigin.x}
        x2={coneEnd.x}
        y1={latticeOrigin.y}
        y2={coneEnd.y}
      />
      {records.map((record) => {
        const { x, y } = latticePoint(record.time, record.b);
        return (
          <g key={record.time}>
            <circle className="topic-ii-figure-point topic-ii-figure-point-accent" cx={x} cy={y} r="6" />
            <text className="topic-ii-figure-label" x={x + 10} y={y - 8}>({record.time},{record.b})</text>
          </g>
        );
      })}
      <path
        className="topic-ii-figure-edge"
        d={records
          .map((record, index) => {
            const point = latticePoint(record.time, record.b);
            return `${index === 0 ? "M" : "L"}${point.x} ${point.y}`;
          })
          .join(" ")}
      />
      <text className="topic-ii-figure-small" x="66" y="185">b</text>
      <text className="topic-ii-figure-small" x="405" y="361">h</text>
      <text className="topic-ii-figure-small" x="210" y="320">dashed ray: L(h,b)=0</text>
      <text className="topic-ii-figure-equation" x="485" y="246">L(h,b)=5h−13b</text>
      <text className="topic-ii-figure-small" x="485" y="276">record deficits: 13, 8, 3, 1</text>
      <g data-records={records.map((record) => record.time + ":" + record.residue + ":" + record.deficit).join(",")} />
    </>
  );
}

function RotationRecordsMobile() {
  const residues = Array.from({ length: 13 }, (_, time) => (5 * time) % 13);
  const recordTimes = [0, 1, 2, 5] as const;
  const records = recordTimes.map((time) => ({
    time,
    residue: residues[time],
    deficit: 13 - residues[time],
    b: time === 0 ? 1 : Math.ceil((5 * time) / 13),
  }));
  const origin = { x: 58, y: 540 };
  const point = (h: number, b: number) => ({
    x: origin.x + 48 * h,
    y: origin.y - 58 * b,
  });
  const coneEnd = point(5.7, (5 * 5.7) / 13);
  const rows = [residues.slice(0, 7), residues.slice(7)] as const;

  return (
    <>
      <text className="topic-ii-figure-equation" x="18" y="26">residue orbit [5t]₁₃</text>
      {rows.map((row, rowIndex) => {
        const firstTime = rowIndex === 0 ? 0 : 7;
        const baseline = rowIndex === 0 ? 140 : 286;
        return (
          <g key={rowIndex}>
            <line className="topic-ii-figure-support" x1="36" x2="326" y1={baseline} y2={baseline} />
            {row.map((residue, index) => {
              const time = firstTime + index;
              const x = 46 + index * 46;
              const isRecord = recordTimes.includes(time as (typeof recordTimes)[number]);
              return (
                <g key={time}>
                  <circle
                    className={isRecord ? "topic-ii-figure-point topic-ii-figure-point-accent" : "topic-ii-figure-point"}
                    cx={x}
                    cy={baseline - 5.4 * residue}
                    r={isRecord ? 6 : 3.5}
                  />
                  <text className="topic-ii-figure-small" x={x} y={baseline + 20} textAnchor="middle">{time}</text>
                </g>
              );
            })}
            <text className="topic-ii-figure-small" x="328" y={baseline + 20} textAnchor="end">t</text>
          </g>
        );
      })}
      <text className="topic-ii-figure-equation" x="18" y="347">record-vector chain</text>
      <text className="topic-ii-figure-small" x="18" y="370">L(h,b)=5h−13b; dashed: L(h,b)=0</text>
      <line className="topic-ii-figure-ray" x1={origin.x} x2="338" y1={origin.y} y2={origin.y} />
      <line className="topic-ii-figure-ray" x1={origin.x} x2={origin.x} y1={origin.y} y2="390" />
      <line className="topic-ii-figure-support" x1={origin.x} x2={coneEnd.x} y1={origin.y} y2={coneEnd.y} />
      <path
        className="topic-ii-figure-edge"
        d={records.map((record, index) => {
          const p = point(record.time, record.b);
          return `${index === 0 ? "M" : "L"}${p.x} ${p.y}`;
        }).join(" ")}
      />
      {records.map((record) => {
        const p = point(record.time, record.b);
        return (
          <g key={record.time}>
            <circle className="topic-ii-figure-point topic-ii-figure-point-accent" cx={p.x} cy={p.y} r="6" />
            <text className="topic-ii-figure-small" x={p.x + 8} y={p.y - 10}>({record.time},{record.b})</text>
          </g>
        );
      })}
      <text className="topic-ii-figure-small" x="42" y="397">b</text>
      <text className="topic-ii-figure-small" x="342" y="556">h</text>
    </>
  );
}

function ReturnTowers() {
  const heights = [1, 1, 1, 2, 2, 2, 2, 2] as const;
  return (
    <>
      {heights.map((height, index) => {
        const x = 88 + index * 76;
        return (
          <g key={index}>
            {Array.from({ length: height }, (_, level) => (
              <rect className={level === 0 ? "topic-ii-figure-polygon" : "topic-ii-figure-polar"} height="42" key={level} width="48" x={x} y={272 - level * 48} />
            ))}
            <text className="topic-ii-figure-small" x={x + 24} y="333" textAnchor="middle">{index + 1}</text>
            <text className="topic-ii-figure-small" x={x + 24} y="298" textAnchor="middle">{height}</text>
          </g>
        );
      })}
      <path className="topic-ii-figure-edge" d="M112 350 C230 382 436 382 492 350" markerEnd="url(#advanced-arrow-return-towers)" />
      <text className="topic-ii-figure-equation" x="380" y="77" textAnchor="middle">3·1 + 5·2 = 13</text>
      <text className="topic-ii-figure-small" x="380" y="105" textAnchor="middle">base return: i ↦ i+5 (mod 8)</text>
      <g data-state-count={heights.reduce((sum, value) => sum + value, 0)} />
    </>
  );
}

function ReturnTowersMobile({ markerId }: { markerId: string }) {
  const heights = [1, 1, 1, 2, 2, 2, 2, 2] as const;
  const position = (index: number) => ({
    x: 42 + (index % 4) * 82,
    y: index < 4 ? 190 : 382,
  });
  const first = position(0);
  const sixth = position(5);

  return (
    <>
      <text className="topic-ii-figure-equation" x="180" y="34" textAnchor="middle">3·1 + 5·2 = 13</text>
      <text className="topic-ii-figure-small" x="180" y="60" textAnchor="middle">base return: i ↦ i+5 (mod 8)</text>
      {heights.map((height, index) => {
        const { x, y } = position(index);
        return (
          <g key={index}>
            {Array.from({ length: height }, (_, level) => (
              <rect
                className={level === 0 ? "topic-ii-figure-polygon" : "topic-ii-figure-polar"}
                height="42"
                key={level}
                width="52"
                x={x - 26}
                y={y - level * 48}
              />
            ))}
            <text className="topic-ii-figure-small" x={x} y={y + 65} textAnchor="middle">base {index + 1}</text>
            <text className="topic-ii-figure-label" x={x} y={y + 27} textAnchor="middle">{height}</text>
          </g>
        );
      })}
      <path
        className="topic-ii-figure-edge"
        d={`M${first.x} ${first.y + 50} C${first.x - 6} ${first.y + 105}, ${sixth.x - 45} ${sixth.y + 45}, ${sixth.x} ${sixth.y + 48}`}
        markerEnd={`url(#${markerId})`}
      />
      <text className="topic-ii-figure-small" x="180" y="318" textAnchor="middle">one illustrated return: 1 ↦ 6</text>
      <g data-state-count={heights.reduce((sum, value) => sum + value, 0)} />
    </>
  );
}

type Point = readonly [number, number];

const cross = (a: Point, b: Point, c: Point) =>
  (b[0] - a[0]) * (c[1] - a[1]) -
  (b[1] - a[1]) * (c[0] - a[0]);

const interpolate = (a: Point, b: Point, t: number): Point => [
  a[0] + t * (b[0] - a[0]),
  a[1] + t * (b[1] - a[1]),
];

const lineThroughSlope = (point: Point, slope: number): readonly [Point, Point] => [
  [point[0] - 170, point[1] - 170 * slope],
  [point[0] + 170, point[1] + 170 * slope],
];

const lineIntersection = (a: Point, b: Point, c: Point, d: Point): Point => {
  const denominator =
    (a[0] - b[0]) * (c[1] - d[1]) -
    (a[1] - b[1]) * (c[0] - d[0]);
  if (Math.abs(denominator) < 1e-12) {
    throw new Error("The deterministic projective plate contains parallel construction lines.");
  }
  const determinantAB = a[0] * b[1] - a[1] * b[0];
  const determinantCD = c[0] * d[1] - c[1] * d[0];
  return [
    (determinantAB * (c[0] - d[0]) - (a[0] - b[0]) * determinantCD) / denominator,
    (determinantAB * (c[1] - d[1]) - (a[1] - b[1]) * determinantCD) / denominator,
  ];
};

const corridorPoints: readonly Point[] = [
  [60, 280],
  [170, 220],
  [280, 175],
  [390, 145],
  [510, 125],
  [660, 120],
];

const corridorCentres: readonly Point[] = [
  interpolate(corridorPoints[1], corridorPoints[2], 0.55),
  interpolate(corridorPoints[2], corridorPoints[3], 0.45),
  interpolate(corridorPoints[3], corridorPoints[4], 0.4),
  interpolate(corridorPoints[4], corridorPoints[5], 0.7),
];

const corridorSupports = [
  lineThroughSlope(corridorPoints[2], -0.34),
  lineThroughSlope(corridorPoints[3], -0.22),
  lineThroughSlope(corridorPoints[4], -0.09),
] as const;

const corridorYPoints: readonly Point[] = (() => {
  const y1 = interpolate(corridorPoints[0], corridorPoints[1], 0.5);
  const y2 = lineIntersection(y1, corridorCentres[0], ...corridorSupports[0]);
  const y3 = lineIntersection(y2, corridorCentres[1], ...corridorSupports[1]);
  const y4 = lineIntersection(y3, corridorCentres[2], ...corridorSupports[2]);
  const y5 = lineIntersection(
    y4,
    corridorPoints[5],
    corridorCentres[2],
    corridorCentres[3],
  );
  return [y1, y2, y3, y4, y5];
})();

const projectiveIncidenceResiduals = [
  cross(corridorYPoints[0], corridorCentres[0], corridorYPoints[1]),
  cross(corridorYPoints[1], corridorCentres[1], corridorYPoints[2]),
  cross(corridorYPoints[2], corridorCentres[2], corridorYPoints[3]),
  cross(corridorYPoints[3], corridorPoints[5], corridorYPoints[4]),
  cross(...corridorSupports[0], corridorYPoints[1]),
  cross(...corridorSupports[1], corridorYPoints[2]),
  cross(...corridorSupports[2], corridorYPoints[3]),
  cross(corridorCentres[2], corridorCentres[3], corridorYPoints[4]),
];

const projectiveIncidenceMaxError = Math.max(
  ...projectiveIncidenceResiduals.map((value) => Math.abs(value)),
);

if (projectiveIncidenceMaxError > 1e-7) {
  throw new Error("The deterministic projective plate failed its incidence check.");
}

const extendLine = (a: Point, b: Point, before = 0.12, after = 0.12): readonly [Point, Point] => [
  interpolate(a, b, -before),
  interpolate(a, b, 1 + after),
];

function ProjectiveCorridorGeometry({
  markerId,
  mobile = false,
}: {
  markerId: string;
  mobile?: boolean;
}) {
  const transform = (point: Point): Point => mobile
    ? [12 + 0.45 * point[0], 50 + 1.25 * (point[1] - 100)]
    : point;
  const points = corridorPoints.map(transform);
  const centres = corridorCentres.map(transform);
  const supports = corridorSupports.map(([a, b]) => [transform(a), transform(b)] as const);
  const yPoints = corridorYPoints.map(transform);
  const terminal = extendLine(centres[2], centres[3], 0.17, 0.17);
  const initial = extendLine(points[0], points[1], 0.1, 0.1);
  const labelScale = mobile ? 0.82 : 1;

  return (
    <>
      <polyline className="topic-ii-figure-polygon" fill="none" points={points.map((point) => point.join(",")).join(" ")} />
      <line className="topic-ii-figure-transfer" x1={initial[0][0]} x2={initial[1][0]} y1={initial[0][1]} y2={initial[1][1]} />
      {supports.map(([a, b], index) => {
        return (
          <g key={index}>
            <line className="topic-ii-figure-support" x1={a[0]} x2={b[0]} y1={a[1]} y2={b[1]} />
            <text
              className="topic-ii-figure-small"
              fontSize={mobile ? 13 : undefined}
              x={a[0] + (mobile ? 8 : 16)}
              y={a[1] - (mobile ? 5 : 8)}
            >
              ℒ{index + 2}
            </text>
          </g>
        );
      })}
      <line className="topic-ii-figure-transfer" x1={terminal[0][0]} x2={terminal[1][0]} y1={terminal[0][1]} y2={terminal[1][1]} />
      <text
        className="topic-ii-figure-small"
        fontSize={mobile ? 13 : undefined}
        x={terminal[0][0]}
        y={terminal[0][1] - (mobile ? 9 : 12)}
      >
        aff(C₄,C₅)
      </text>
      {centres.map(([x, y], index) => {
        return (
          <g key={`centre-${index}`}>
            <circle className="topic-ii-figure-point topic-ii-figure-point-accent" cx={x} cy={y} r="5" />
            <text
              className="topic-ii-figure-small"
              fontSize={mobile ? 13 : undefined}
              x={x + 7 * labelScale}
              y={y - 8 * labelScale}
            >
              C{index + 2}
            </text>
          </g>
        );
      })}
      {yPoints.slice(1).map((destination, index) => {
        const source = yPoints[index];
        return (
          <line
            className="topic-ii-figure-target"
            key={`projection-${index}`}
            markerEnd={`url(#${markerId})`}
            x1={source[0]}
            x2={destination[0]}
            y1={source[1]}
            y2={destination[1]}
          />
        );
      })}
      <line
        className="topic-ii-figure-support"
        x1={yPoints[3][0]}
        x2={points[5][0]}
        y1={yPoints[3][1]}
        y2={points[5][1]}
      />
      {yPoints.map(([x, y], index) => (
        <g key={`y-${index}`}>
          <circle className="topic-ii-figure-point" cx={x} cy={y} r={mobile ? 5 : 5.5} />
          <text
            className="topic-ii-figure-label"
            fontSize={mobile ? 15 : undefined}
            x={x + (index === 4 ? -28 : 7) * labelScale}
            y={y + (index % 2 === 0 ? 20 : -10) * labelScale}
          >
            Y{index + 1}
          </text>
        </g>
      ))}
      {points.map(([x, y], index) => (
        <text
          className="topic-ii-figure-small"
          fontSize={mobile ? 12 : undefined}
          key={`x-${index}`}
          x={x + (index === 5 ? -7 : -3) * labelScale}
          y={y + (index === 5 ? -13 : 24) * labelScale}
        >
          X{index}{index === 5 ? " (final centre)" : ""}
        </text>
      ))}
      <text
        className="topic-ii-figure-small"
        fontSize={mobile ? 12 : undefined}
        x={initial[0][0]}
        y={initial[0][1] + (mobile ? 26 : 34)}
      >
        initial line
      </text>
      <g
        data-incidence-count={projectiveIncidenceResiduals.length}
        data-incidence-max-error={projectiveIncidenceMaxError}
        data-incidence-verified="true"
      />
    </>
  );
}

function ProjectiveCorridor() {
  return <ProjectiveCorridorGeometry markerId="advanced-arrow-projective-corridor" />;
}

function ProjectiveCorridorMobile({ markerId }: { markerId: string }) {
  return <ProjectiveCorridorGeometry markerId={markerId} mobile />;
}

function HolonomyEscape() {
  return (
    <>
      <line className="topic-ii-figure-ray" x1="90" x2="680" y1="238" y2="238" />
      {[150, 620, 330].map((x) => <circle className="topic-ii-figure-point" cx={x} cy="238" key={x} r="7" />)}
      <circle className="topic-ii-figure-point topic-ii-figure-point-accent" cx="440" cy="238" r="8" />
      <text className="topic-ii-figure-label" x="140" y="270">Cₘ₊₁: 0</text>
      <text className="topic-ii-figure-label" x="602" y="270">Cₘ: 1</text>
      <text className="topic-ii-figure-label" x="300" y="215">u(τ)</text>
      <text className="topic-ii-figure-label topic-ii-figure-accent" x="430" y="215">τ</text>
      <path className="topic-ii-figure-edge" d="M330 188 L440 188" markerEnd="url(#advanced-arrow-holonomy-escape)" />
      <text className="topic-ii-figure-equation" x="385" y="160" textAnchor="middle">τ-u(τ)&gt;0</text>
      <path className="topic-ii-figure-cone" d="M440 238 L586 65 L692 65 L692 238 Z" />
      <text className="topic-ii-figure-small" x="603" y="99">calibrated interior side</text>
    </>
  );
}

function GlobalLedger() {
  const rows = [
    ["D", "target j∈D", "s(j)∉M"],
    ["R", "target j∈R", "s(R)=M°"],
    ["{c}", "target c", "s(c)=b*"],
    ["A", "target j∈A", "s(j)∉M"],
  ] as const;
  return (
    <>
      <text className="topic-ii-figure-small" x="157" y="29">target class</text>
      <text className="topic-ii-figure-small" x="458" y="29">inverse-source statement</text>
      {rows.map(([label, source, target], index) => {
        const y = 83 + index * 70;
        return (
          <g key={label}>
            <rect className={label === "{c}" ? "topic-ii-figure-polar" : "topic-ii-figure-polygon"} x="52" y={y - 30} width="650" height="52" />
            <text className="topic-ii-figure-label" x="79" y={y + 3}>{label}</text>
            <text className="topic-ii-figure-small" x="157" y={y + 1}>{source}</text>
            <path className="topic-ii-figure-transfer" d={"M345 " + (y - 5) + " L430 " + (y - 5)} markerEnd="url(#advanced-arrow-global-ledger)" />
            <text className="topic-ii-figure-small" x="458" y={y + 1}>{target}</text>
          </g>
        );
      })}
      <text className="topic-ii-figure-equation" x="380" y="359" textAnchor="middle">ℬ = D ⊔ R ⊔ {"{c}"} ⊔ A</text>
    </>
  );
}

function GlobalLedgerMobile() {
  const rows = [
    ["D", "target j∈D", "s(j)∉M"],
    ["R", "target j∈R", "s(R)=M°"],
    ["{c}", "target c", "s(c)=b*"],
    ["A", "target j∈A", "s(j)∉M"],
  ] as const;

  return (
    <>
      <text className="topic-ii-figure-equation" x="180" y="30" textAnchor="middle">partition of target indices</text>
      {rows.map(([label, source, target], index) => {
        const y = 54 + index * 118;
        return (
          <g key={label}>
            <rect
              className={label === "{c}" ? "topic-ii-figure-polar" : "topic-ii-figure-polygon"}
              height="96"
              width="312"
              x="24"
              y={y}
            />
            <text className="topic-ii-figure-label" x="42" y={y + 31}>{label}</text>
            <text className="topic-ii-figure-small" x="94" y={y + 29}>{source}</text>
            <line className="topic-ii-figure-support" x1="94" x2="315" y1={y + 45} y2={y + 45} />
            <text className="topic-ii-figure-small" x="94" y={y + 72}>{target}</text>
          </g>
        );
      })}
      <text className="topic-ii-figure-equation" x="180" y="544" textAnchor="middle">ℬ = D ⊔ R ⊔ {"{c}"} ⊔ A</text>
    </>
  );
}

function UnitReturn() {
  const outer = "108,294 74,168 160,62 320,38 520,72 674,188 625,305 438,340 248,330";
  const image = "91,231 117,115 240,50 420,55 597,130 649.5,246.5 531.5,322.5 343,335 204.08,295.15";
  const contactVertices = image.split(" ").slice(0, 8);
  return (
    <>
      <polygon className="topic-ii-figure-polygon" points={outer} />
      <polygon className="topic-ii-figure-polar" points={image} />
      {contactVertices.map((point, index) => {
        const [x, y] = point.split(",").map(Number);
        return <circle className="topic-ii-figure-point" cx={x} cy={y} key={index} r="5" />;
      })}
      <circle className="topic-ii-figure-point topic-ii-figure-point-accent" cx="204.08" cy="295.15" r="9" />
      <text className="topic-ii-figure-label topic-ii-figure-accent" x="216" y="280">Y(τ)</text>
      <text className="topic-ii-figure-small" x="216" y="300">interior to Pτ</text>
      <text className="topic-ii-figure-equation" x="382" y="365" textAnchor="middle">Y(τ) ∈ Ext(λPτ) ∩ int(Pτ)</text>
    </>
  );
}

function FareyReflection() {
  const x = (value: number) => 52 + value * 650;
  const original = [[1 / 3, "1/3"], [3 / 8, "3/8"], [2 / 5, "2/5"]] as const;
  const reflected = [[3 / 5, "3/5"], [5 / 8, "5/8"], [2 / 3, "2/3"]] as const;
  return (
    <>
      <line className="topic-ii-figure-ray" x1="52" x2="702" y1="112" y2="112" />
      <line className="topic-ii-figure-ray" x1="52" x2="702" y1="278" y2="278" />
      {original.map(([value, label], index) => (
        <g key={label}>
          <circle className={index === 1 ? "topic-ii-figure-point topic-ii-figure-point-accent" : "topic-ii-figure-point"} cx={x(value)} cy="112" r={index === 1 ? 7 : 5} />
          <text className="topic-ii-figure-label" x={x(value)} y="90" textAnchor="middle">{label}</text>
        </g>
      ))}
      {reflected.map(([value, label], index) => (
        <g key={label}>
          <circle className={index === 1 ? "topic-ii-figure-point topic-ii-figure-point-accent" : "topic-ii-figure-point"} cx={x(value)} cy="278" r={index === 1 ? 7 : 5} />
          <text className="topic-ii-figure-label" x={x(value)} y="312" textAnchor="middle">{label}</text>
        </g>
      ))}
      <path className="topic-ii-figure-transfer" d="M375 144 L375 240" markerEnd="url(#advanced-arrow-farey-reflection)" />
      <text className="topic-ii-figure-equation" x="392" y="197">x ↦ 1-x</text>
      <g data-original-determinant={3 * 2 - 1 * 5} data-denominator-sum={3 + 5} />
    </>
  );
}

function JensenSheet() {
  return (
    <>
      <line className="topic-ii-figure-ray" x1="66" x2="698" y1="305" y2="305" />
      <line className="topic-ii-figure-ray" x1="118" x2="118" y1="38" y2="336" />
      <path className="topic-ii-figure-cone" d="M118 305 L487 132 L326 132 Z" />
      <line className="topic-ii-figure-target" x1="487" x2="326" y1="132" y2="132" />
      <line className="topic-ii-figure-support" x1="118" x2="487" y1="305" y2="132" />
      <line className="topic-ii-figure-support" x1="118" x2="326" y1="305" y2="132" />
      <circle className="topic-ii-figure-point topic-ii-figure-point-accent" cx="405" cy="132" r="7" />
      <text className="topic-ii-figure-label" x="493" y="119">μ^q</text>
      <text className="topic-ii-figure-label" x="278" y="119">μ^q-1</text>
      <text className="topic-ii-figure-label topic-ii-figure-accent" x="417" y="158">μ^q-β</text>
      <text className="topic-ii-figure-equation" x="218" y="275">A ≤ u &lt; M &lt; π</text>
    </>
  );
}

export function AdvancedProofFigure({ kind }: { kind: AdvancedProofFigureKind }) {
  const figure = copy[kind];
  const mobileViewBoxes: Partial<Record<AdvancedProofFigureKind, string>> = {
    "rotation-records": "0 0 360 570",
    "return-towers": "0 0 360 480",
    "global-ledger": "0 0 360 570",
    "projective-corridor": "0 0 360 390",
  };
  const mobileViewBox = mobileViewBoxes[kind];
  const hasMobileLayout = Boolean(mobileViewBox);
  const markerId = "advanced-arrow-" + kind;
  const mobileMarkerId = markerId + "-mobile";
  return (
    <figure className="topic-ii-concept-figure">
      <div className="topic-ii-concept-heading">
        <span>Deterministic mathematical plate</span>
        <span>{figure.title}</span>
      </div>
      <svg
        aria-labelledby={"advanced-" + kind + "-title advanced-" + kind + "-description"}
        className={hasMobileLayout ? "topic-ii-concept-svg topic-ii-concept-svg-desktop" : undefined}
        role="img"
        viewBox="0 0 760 390"
      >
        <title id={"advanced-" + kind + "-title"}>{figure.title}</title>
        <desc id={"advanced-" + kind + "-description"}>{figure.description}</desc>
        <defs>
          <marker id={markerId} markerHeight="7" markerWidth="8" orient="auto" refX="7" refY="3.5">
            <path className="topic-ii-figure-arrow-head" d="M0,0 L8,3.5 L0,7 Z" />
          </marker>
        </defs>
        {kind === "rotation-records" ? <RotationRecords /> : null}
        {kind === "return-towers" ? <ReturnTowers /> : null}
        {kind === "projective-corridor" ? <ProjectiveCorridor /> : null}
        {kind === "holonomy-escape" ? <HolonomyEscape /> : null}
        {kind === "global-ledger" ? <GlobalLedger /> : null}
        {kind === "unit-return" ? <UnitReturn /> : null}
        {kind === "farey-reflection" ? <FareyReflection /> : null}
        {kind === "jensen-sheet" ? <JensenSheet /> : null}
      </svg>
      {hasMobileLayout ? (
        <svg
          aria-label={`${figure.title}. ${figure.description} Compact mobile layout.`}
          className="topic-ii-concept-svg topic-ii-concept-svg-mobile"
          data-figure-layout="mobile"
          role="img"
          viewBox={mobileViewBox ?? "0 0 360 480"}
        >
          <defs>
            <marker id={mobileMarkerId} markerHeight="7" markerWidth="8" orient="auto" refX="7" refY="3.5">
              <path className="topic-ii-figure-arrow-head" d="M0,0 L8,3.5 L0,7 Z" />
            </marker>
          </defs>
          {kind === "rotation-records" ? <RotationRecordsMobile /> : null}
          {kind === "return-towers" ? <ReturnTowersMobile markerId={mobileMarkerId} /> : null}
          {kind === "global-ledger" ? <GlobalLedgerMobile /> : null}
          {kind === "projective-corridor" ? <ProjectiveCorridorMobile markerId={mobileMarkerId} /> : null}
        </svg>
      ) : null}
      <figcaption>{figure.caption}</figcaption>
    </figure>
  );
}
