export type AdvancedProofFigureKind =
  | "rotation-records"
  | "return-towers"
  | "projective-corridor"
  | "topic-vi-projective-chain"
  | "holonomy-escape"
  | "global-ledger"
  | "topic-vi-return-partition"
  | "unit-return"
  | "farey-reflection"
  | "jensen-sheet";

type FigureCopy = {
  title: string;
  description: string;
  caption: string;
  status?: string;
};

const copy: Record<AdvancedProofFigureKind, FigureCopy> = {
  "rotation-records": {
    title: "Upper records of the rotation by five modulo thirteen",
    description:
      "A residue strip uses labelled horizontal reference guides at residues zero, five, ten, and twelve, the four record levels. A second panel plots the corresponding integer record vectors zero one, one one, two one, and five two beside the boundary ray on which L of h comma b equals zero.",
    caption:
      "Plate V.1. For N=13 and κ=5, the upper-record times are 0, 1, 2, and 5, with residues 0, 5, 10, and 12 and deficits 13, 8, 3, and 1. The labelled horizontal lines are residue-scale guides. The lower panel shows the polygonal chain through the lattice vectors associated with the upper-record times beside the boundary ray L(h,b)=0. The Klein sail is defined in Remark 6.3 and is not separately drawn; the displayed chain may contain lattice points in the relative interiors of sail edges.",
  },
  "return-towers": {
    title: "Two-height first-return decomposition",
    description:
      "Eight base columns contain three towers of height one and five towers of height two, giving thirteen cells. Every cell displays the evaluated residue F of t comma i prominently, with its domain coordinate t comma i underneath. Each tower is labelled by its height, and one arrow illustrates addition of five modulo eight on the base-index set.",
    caption:
      "Plate V.2. The record pair V=(1,1), V′=(2,1) gives ν=8, Δ=5, q=1, and h=1. Three base indices have return height Hᵢ=q=1, while five have Hᵢ=q+h=2. In each cell the large label is the evaluated residue F(t,i)=[i+5t]₁₃, and the smaller pair below it is the domain coordinate (t,i). Thus qν+hΔ=13 appears as three one-cell towers plus five two-cell towers.",
  },
  "projective-corridor": {
    status: "Numerical convex hexagon · geometry verified",
    title: "A verified sequence of perspectivities",
    description:
      "The convex hexagon P equals the convex hull of X zero through X five. The points C two through C five lie in the relative interiors of their indicated sides, and each line script L two through script L four supports P while exposing only its named vertex. The eight tested projection incidences have maximum absolute determinant residual about 3.3 times ten to the minus eleven.",
    caption:
      "Plate V.4. Verified numerical example of Definition 7.4. Let P=conv{X₀,…,X₅}. Every vertex lies strictly to the left of each nonincident oriented side (minimum signed determinant 1400), so the displayed cyclic list defines a convex hexagon. The points Cᵢ are constructed in relint[Xᵢ₋₁,Xᵢ] for 2≤i≤5. For 2≤i≤4, all other polygon vertices lie strictly on one side of ℒᵢ (minimum absolute signed determinant 1972), so ℒᵢ supports P and exposes Xᵢ. The eight required projection incidences have maximum absolute determinant residual approximately 3.3×10⁻¹¹. Their composition is a projectivity from Λ₁=aff(X₀,X₁) to K=aff(C₄,C₅).",
  },
  "topic-vi-projective-chain": {
    status: "Adapted from Topic V · incidence verified",
    title: "Successive perspectivities along the selected boundary chain",
    description:
      "Plate VI.1 adapts the incidence-verified model from Topic V. A point is projected from the source line Lambda one to the supporting lines script L two, script L three, and script L four, and then to the target line K. The successive projection centres are C two, C three, C four, and X five. The diagram is a selected local boundary arc, not a full polygon.",
    caption:
      "Plate VI.1. Adapted from Plate V.4. In this incidence-verified numerical model, projection through C₂ sends Y₁∈Λ₁ to Y₂∈ℒ₂; projection through C₃ sends Y₂ to Y₃∈ℒ₃; projection through C₄ sends Y₃ to Y₄∈ℒ₄; and the final projection through X₅ sends Y₄ to Y₅∈K=aff(C₄,C₅). The plate illustrates the successive-perspectivity mechanism used here. It shows a selected local boundary arc, not a full polygon or a universal metric configuration; all eight displayed incidence conditions have maximum absolute determinant residual approximately 3.3×10⁻¹¹.",
  },
  "holonomy-escape": {
    status: "Schematic implication · affine and planar views",
    title: "Scalar order and the corresponding planar half-plane",
    description:
      "Plate VI.2 has two panels. On the entire affine coordinate line, u of tau lies to the left of tau; neither point is assumed to lie between the calibration points zero and one. In the planar panel, z of u of tau lies on the moving closing line, while Y of tau equals z of tau and lies in the open half-plane where tilde D is positive.",
    caption:
      "Plate VI.2. In the chosen affine coordinate on the final contact line, the selected parameter satisfies u(τ)<τ. Neither point is assumed to lie in [0,1]. The planar inset keeps the separate roles of the determinants visible: D̃(q,τ)>0 defines the open half-plane, while D(t,τ)=D̃(z(t),τ) is its restriction to the final contact line. Since γ(τ)>0, the scalar inequality gives D(τ,τ)>0 and hence Y(τ)=z(τ) lies in that interior half-plane.",
  },
  "global-ledger": {
    title: "Partition of the return source–target pairs",
    description:
      "The base-index set ℬ, calligraphic B, is partitioned into D, R, the singleton containing c, and A. Each row states both the target-membership condition and the exact condition on its inverse source under s.",
    caption:
      "Plate V.3. The base-index set ℬ is partitioned as ℬ=D⊔R⊔{c}⊔A. Here M is the selected set of source indices, M∖{b*} is that set without its distinguished endpoint b*, and s is the inverse return map. For j∈D∪A, s(j)∉M; for j∈R, s(j)∈M∖{b*} and indeed s(R)=M∖{b*}; finally s(c)=b*. This classifies the source–target pairs combinatorially; no deformation is assumed.",
  },
  "topic-vi-return-partition": {
    status: "Adapted from Topic V · exact finite partition",
    title: "Four cases for the assigned side incidences",
    description:
      "Plate VI.3 displays the disjoint and exhaustive partition of the calligraphic base-index set B into D, R, the singleton c, and A. It records the target class and the position of the inverse source under s for each case.",
    caption:
      "Plate VI.3. Adapted from Plate V.3. The partition ℬ=D⊔R⊔{c}⊔A is disjoint and exhaustive. For k∈D, the assigned side line moves and the source is fixed; for k∈R, the source moves and the assigned side line is fixed; for k∈A, both remain fixed; and c is the only side index for which the final incidence is not imposed in advance. The displayed conditions involving s record the corresponding inverse sources. This is combinatorial input to the deformation, not a geometric example of the deformation itself.",
  },
  "unit-return": {
    status: "Combinatorial incidence schematic · not metric",
    title: "The forbidden interior image vertex",
    description:
      "Plate VI.4 is an incidence-only schematic, not a coordinate realization of multiplication by lambda. The other displayed image vertices lie on the boundary of the outer polygon. The highlighted vertex Y of tau remains an extreme point of the image polygon but lies strictly inside the outer polygon.",
    caption:
      "Plate VI.4. Combinatorial incidence schematic. The inner polygon is not drawn to scale as the actual linear image λPτ. The diagram records only the incidences used in the contradiction: Y(τ) is an extreme point of λPτ lying in int(Pτ), whereas every other vertex of λPτ lies on ∂Pτ. Topic II proves that every vertex of the image polygon must lie on the outer polygon boundary. The highlighted interior vertex contradicts that conclusion, so Δ=1.",
  },
  "farey-reflection": {
    title: "A Farey cell and its reflected orientation",
    description:
      "The order-seven cell from one third to two fifths contains three eighths. Reflection maps it to the cell from three fifths to two thirds containing five eighths.",
    caption:
      "Plate VII.1. The original endpoints satisfy 3·2-1·5=1 and 3+5=8>7. Reflection preserves adjacency and swaps the endpoint denominators.",
  },
  "jensen-sheet": {
    title: "All varying factors share one continuous upper-half-plane argument interval",
    description:
      "A horizontal segment in the open upper half-plane traces mu to the q minus beta. Rays from the origin have arguments from A up to but not including M.",
    caption:
      "Plate VII.2. As 0≤β<1 increases, μ^q-β moves left with fixed positive imaginary part. Its argument rises strictly from A to, but never reaches, M.",
  },
};

const recordResidueGuides = [0, 5, 10, 12] as const;
const mobileSmallTextStyle = { fontSize: 14 } as const;
const mobileLabelTextStyle = { fontSize: 15 } as const;

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
      {recordResidueGuides.map((residue) => {
        const y = 105 - 3.2 * residue;
        const labelOnRight = residue === 10;
        return (
          <g data-residue-guide={residue} key={`residue-guide-${residue}`}>
            <line className="topic-ii-figure-support" x1="58" x2="702" y1={y} y2={y} />
            <text
              className="topic-ii-figure-small"
              x={labelOnRight ? 712 : 48}
              y={y + 4}
              textAnchor={labelOnRight ? "start" : "end"}
            >
              {residue}
            </text>
          </g>
        );
      })}
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
      <text className="topic-ii-figure-small" x="58" y="43">residue [5t]₁₃</text>
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
      <text className="topic-ii-figure-small" x="210" y="320">boundary ray: L(h,b)=0</text>
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
      <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x="18" y="52">labelled residue guides</text>
      {rows.map((row, rowIndex) => {
        const firstTime = rowIndex === 0 ? 0 : 7;
        const baseline = rowIndex === 0 ? 140 : 286;
        return (
          <g key={rowIndex}>
            {recordResidueGuides.map((residue) => {
              const y = baseline - 5.4 * residue;
              const labelOnRight = residue === 10;
              return (
                <g data-residue-guide={residue} key={`mobile-residue-guide-${rowIndex}-${residue}`}>
                  <line className="topic-ii-figure-support" x1="36" x2="326" y1={y} y2={y} />
                  <text
                    className="topic-ii-figure-small"
                    style={mobileSmallTextStyle}
                    x={labelOnRight ? 331 : 31}
                    y={y + 5}
                    textAnchor={labelOnRight ? "start" : "end"}
                  >
                    {residue}
                  </text>
                </g>
              );
            })}
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
                  <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x={x} y={baseline + 21} textAnchor="middle">{time}</text>
                </g>
              );
            })}
            <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x="347" y={baseline + 21} textAnchor="middle">t</text>
          </g>
        );
      })}
      <text className="topic-ii-figure-equation" x="18" y="347">record-vector chain</text>
      <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x="18" y="370">L(h,b)=5h−13b</text>
      <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x="18" y="390">boundary ray: L(h,b)=0</text>
      <line className="topic-ii-figure-ray" x1={origin.x} x2="338" y1={origin.y} y2={origin.y} />
      <line className="topic-ii-figure-ray" x1={origin.x} x2={origin.x} y1={origin.y} y2="405" />
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
            <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x={p.x + 8} y={p.y - 10}>({record.time},{record.b})</text>
          </g>
        );
      })}
      <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x="42" y="416">b</text>
      <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x="342" y="556">h</text>
    </>
  );
}

const returnTowerHeights = [1, 1, 1, 2, 2, 2, 2, 2] as const;

const returnTowerState = (time: number, baseIndex: number) => ({
  domain: `(${time},${baseIndex})`,
  residue: (baseIndex + 5 * time) % 13,
});

function ReturnTowers() {
  return (
    <>
      {returnTowerHeights.map((height, index) => {
        const x = 88 + index * 76;
        return (
          <g key={index}>
            {Array.from({ length: height }, (_, level) => {
              const state = returnTowerState(level, index + 1);
              const y = 272 - level * 48;
              return (
                <g
                  data-domain={state.domain}
                  data-residue={state.residue}
                  data-tower-state={`F${state.domain}=${state.residue}`}
                  key={level}
                >
                  <rect className={level === 0 ? "topic-ii-figure-polygon" : "topic-ii-figure-polar"} height="42" width="48" x={x} y={y} />
                  <text className="topic-ii-figure-label" x={x + 24} y={y + 18} textAnchor="middle">F={state.residue}</text>
                  <text className="topic-ii-figure-small" x={x + 24} y={y + 35} textAnchor="middle">{state.domain}</text>
                </g>
              );
            })}
            <text className="topic-ii-figure-small" x={x + 24} y={272 - (height - 1) * 48 - 12} textAnchor="middle">Hᵢ={height}</text>
            <text className="topic-ii-figure-small" x={x + 24} y="333" textAnchor="middle">i={index + 1}</text>
          </g>
        );
      })}
      <path className="topic-ii-figure-edge" d="M112 350 C230 382 436 382 492 350" markerEnd="url(#advanced-arrow-return-towers)" />
      <text className="topic-ii-figure-equation" x="380" y="77" textAnchor="middle">3·1 + 5·2 = 13</text>
      <text className="topic-ii-figure-small" x="380" y="105" textAnchor="middle">base return: i ↦ i+5 (mod 8)</text>
      <g data-state-count={returnTowerHeights.reduce((sum, value) => sum + value, 0)} />
    </>
  );
}

function ReturnTowersMobile({ markerId }: { markerId: string }) {
  const position = (index: number) => ({
    x: 42 + (index % 4) * 82,
    y: index < 4 ? 190 : 382,
  });
  const first = position(0);
  const sixth = position(5);

  return (
    <>
      <text className="topic-ii-figure-equation" x="180" y="34" textAnchor="middle">3·1 + 5·2 = 13</text>
      <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x="180" y="60" textAnchor="middle">base return: i ↦ i+5 (mod 8)</text>
      {returnTowerHeights.map((height, index) => {
        const { x, y } = position(index);
        return (
          <g key={index}>
            {Array.from({ length: height }, (_, level) => {
              const state = returnTowerState(level, index + 1);
              const cellY = y - level * 48;
              return (
                <g
                  data-domain={state.domain}
                  data-residue={state.residue}
                  data-tower-state={`F${state.domain}=${state.residue}`}
                  key={level}
                >
                  <rect
                    className={level === 0 ? "topic-ii-figure-polygon" : "topic-ii-figure-polar"}
                    height="42"
                    width="52"
                    x={x - 26}
                    y={cellY}
                  />
                  <text className="topic-ii-figure-label" style={mobileLabelTextStyle} x={x} y={cellY + 17} textAnchor="middle">F={state.residue}</text>
                  <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x={x} y={cellY + 35} textAnchor="middle">{state.domain}</text>
                </g>
              );
            })}
            <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x={x} y={y - (height - 1) * 48 - 12} textAnchor="middle">Hᵢ={height}</text>
            <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x={x} y={y + 65} textAnchor="middle">i={index + 1}</text>
          </g>
        );
      })}
      <path
        className="topic-ii-figure-edge"
        d={`M${first.x} ${first.y + 50} C${first.x - 6} ${first.y + 105}, ${sixth.x - 45} ${sixth.y + 45}, ${sixth.x} ${sixth.y + 48}`}
        markerEnd={`url(#${markerId})`}
      />
      <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x="180" y="294" textAnchor="middle">one illustrated return: 1 ↦ 6</text>
      <g data-state-count={returnTowerHeights.reduce((sum, value) => sum + value, 0)} />
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

const corridorContactParameters = [0.55, 0.45, 0.4, 0.7] as const;

const corridorCentres: readonly Point[] = [
  interpolate(corridorPoints[1], corridorPoints[2], corridorContactParameters[0]),
  interpolate(corridorPoints[2], corridorPoints[3], corridorContactParameters[1]),
  interpolate(corridorPoints[3], corridorPoints[4], corridorContactParameters[2]),
  interpolate(corridorPoints[4], corridorPoints[5], corridorContactParameters[3]),
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

const corridorPolygonSideMargins = corridorPoints.flatMap((point, index) => {
  const nextIndex = (index + 1) % corridorPoints.length;
  return corridorPoints
    .filter((_, candidateIndex) => candidateIndex !== index && candidateIndex !== nextIndex)
    .map((candidate) => cross(point, corridorPoints[nextIndex], candidate));
});

const corridorConvexityMinimum = Math.min(...corridorPolygonSideMargins);

const projectiveSupportContactResiduals = corridorSupports.map(
  ([a, b], index) => Math.abs(cross(a, b, corridorPoints[index + 2])),
);

const projectiveSupportMargins = corridorSupports.flatMap(([a, b], index) =>
  corridorPoints
    .filter((_, candidateIndex) => candidateIndex !== index + 2)
    .map((candidate) => cross(a, b, candidate)),
);

const projectiveSupportMinimum = Math.min(...projectiveSupportMargins);
const projectiveSupportContactMaxError = Math.max(...projectiveSupportContactResiduals);

if (corridorContactParameters.some((parameter) => parameter <= 0 || parameter >= 1)) {
  throw new Error("The deterministic projective plate has a side-contact point outside a relative interior.");
}

if (corridorConvexityMinimum <= 0) {
  throw new Error("The deterministic projective plate failed its convex-hexagon check.");
}

if (projectiveSupportContactMaxError > 1e-7 || projectiveSupportMinimum <= 0) {
  throw new Error("The deterministic projective plate failed its exposing-support check.");
}

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
  verifiedPolygon = false,
}: {
  markerId: string;
  mobile?: boolean;
  verifiedPolygon?: boolean;
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
      {verifiedPolygon ? (
        <polygon className="topic-ii-figure-polygon" points={points.map((point) => point.join(",")).join(" ")} />
      ) : (
        <polyline className="topic-ii-figure-polygon" fill="none" points={points.map((point) => point.join(",")).join(" ")} />
      )}
      <line className="topic-ii-figure-transfer" x1={initial[0][0]} x2={initial[1][0]} y1={initial[0][1]} y2={initial[1][1]} />
      {supports.map(([a, b], index) => {
        return (
          <g key={index}>
            <line className="topic-ii-figure-support" x1={a[0]} x2={b[0]} y1={a[1]} y2={b[1]} />
            <text
              className="topic-ii-figure-small"
              style={mobile ? mobileSmallTextStyle : undefined}
              x={a[0] + (mobile ? (index === 1 ? -14 : 8) : 16)}
              y={a[1] - (mobile ? 5 : 16)}
            >
              ℒ{index + 2}
            </text>
          </g>
        );
      })}
      <line className="topic-ii-figure-transfer" x1={terminal[0][0]} x2={terminal[1][0]} y1={terminal[0][1]} y2={terminal[1][1]} />
      <text
        className="topic-ii-figure-small"
        style={mobile ? mobileSmallTextStyle : undefined}
        x={mobile ? 165 : terminal[0][0]}
        y={mobile ? 24 : 88}
      >
        K = aff(C₄,C₅)
      </text>
      {centres.map(([x, y], index) => {
        return (
          <g key={`centre-${index}`}>
            <circle className="topic-ii-figure-point topic-ii-figure-point-accent" cx={x} cy={y} r="5" />
            <text
              className="topic-ii-figure-small"
              style={mobile ? mobileSmallTextStyle : undefined}
              x={x + (mobile && index === 0 ? -18 : 7) * labelScale}
              y={y + (mobile && index === 0 ? 14 : -8) * labelScale}
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
            style={mobile ? mobileLabelTextStyle : undefined}
            x={x + (index === 4 ? -28 : index === 2 ? 20 : 7) * labelScale}
            y={y + (index === 2 ? -12 : index % 2 === 0 ? 20 : -10) * labelScale}
          >
            Y{index + 1}
          </text>
        </g>
      ))}
      {points.map(([x, y], index) => (
        <g key={`x-${index}`}>
          {verifiedPolygon ? (
            <circle className="topic-ii-figure-point" cx={x} cy={y} r={mobile ? 3.5 : 4} />
          ) : null}
          <text
            className="topic-ii-figure-small"
            style={mobile ? mobileSmallTextStyle : undefined}
            x={x + (index === 5 ? -7 : -3) * labelScale}
            y={y + 24 * labelScale}
          >
            X{index}
          </text>
        </g>
      ))}
      {verifiedPolygon ? (
        <text
          className="topic-ii-figure-small"
          style={mobile ? mobileSmallTextStyle : undefined}
          x={mobile ? 178 : 474}
          y={mobile ? 348 : 348}
          textAnchor="middle"
        >
          P = conv{'{'}X₀,…,X₅{'}'}
        </text>
      ) : null}
      <text
        className="topic-ii-figure-small"
        style={mobile ? mobileSmallTextStyle : undefined}
        x={initial[0][0]}
        y={initial[0][1] + (mobile ? 32 : 34)}
      >
        Λ₁ = aff(X₀,X₁)
      </text>
      <g
        data-convex-hexagon-verified={verifiedPolygon ? "true" : undefined}
        data-convexity-minimum={verifiedPolygon ? corridorConvexityMinimum : undefined}
        data-contact-parameters={verifiedPolygon ? corridorContactParameters.join(",") : undefined}
        data-incidence-count={projectiveIncidenceResiduals.length}
        data-incidence-max-error={projectiveIncidenceMaxError}
        data-incidence-verified="true"
        data-support-contact-max-error={verifiedPolygon ? projectiveSupportContactMaxError : undefined}
        data-support-minimum={verifiedPolygon ? projectiveSupportMinimum : undefined}
        data-supports-verified={verifiedPolygon ? "true" : undefined}
      />
    </>
  );
}

function ProjectiveCorridor({ markerId }: { markerId: string }) {
  return <ProjectiveCorridorGeometry markerId={markerId} verifiedPolygon />;
}

function ProjectiveCorridorMobile({ markerId }: { markerId: string }) {
  return <ProjectiveCorridorGeometry markerId={markerId} mobile verifiedPolygon />;
}

function TopicVIProjectiveChain({ markerId }: { markerId: string }) {
  return <ProjectiveCorridorGeometry markerId={markerId} />;
}

function TopicVIProjectiveChainMobile({ markerId }: { markerId: string }) {
  return <ProjectiveCorridorGeometry markerId={markerId} mobile />;
}

function HolonomyEscape({
  markerId,
  mobile = false,
}: {
  markerId: string;
  mobile?: boolean;
}) {
  if (mobile) {
    return (
      <>
        <text className="topic-ii-figure-equation" style={mobileLabelTextStyle} x="18" y="29">
          affine coordinate on the final contact line
        </text>
        <line
          className="topic-ii-figure-ray"
          markerEnd={`url(#${markerId})`}
          markerStart={`url(#${markerId})`}
          x1="20"
          x2="340"
          y1="119"
          y2="119"
        />
        <line className="topic-ii-figure-support" x1="192" x2="192" y1="107" y2="131" />
        <line className="topic-ii-figure-support" x1="315" x2="315" y1="107" y2="131" />
        <circle className="topic-ii-figure-point" cx="192" cy="119" r="5" />
        <circle className="topic-ii-figure-point" cx="315" cy="119" r="5" />
        <circle className="topic-ii-figure-point" cx="59" cy="119" r="6" />
        <circle className="topic-ii-figure-point topic-ii-figure-point-accent" cx="130" cy="119" r="7" />
        <text className="topic-ii-figure-label" style={mobileLabelTextStyle} x="42" y="98">u(τ)</text>
        <text className="topic-ii-figure-label topic-ii-figure-accent" style={mobileLabelTextStyle} x="124" y="98">τ</text>
        <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x="188" y="151">0</text>
        <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x="311" y="151">1</text>
        <path
          className="topic-ii-figure-edge"
          d="M59 72 L130 72"
          markerEnd={`url(#${markerId})`}
        />
        <text className="topic-ii-figure-equation" style={mobileLabelTextStyle} x="94" y="56" textAnchor="middle">u(τ)&lt;τ</text>
        <line className="topic-ii-figure-transfer" x1="192" x2="315" y1="169" y2="169" />
        <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x="253" y="192" textAnchor="middle">calibration interval [0,1]</text>
        <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x="180" y="218" textAnchor="middle">Only the order u(τ)&lt;τ is asserted.</text>
        <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x="180" y="240" textAnchor="middle">Neither point is assumed to lie in [0,1].</text>

        <line className="topic-ii-figure-support" x1="18" x2="342" y1="263" y2="263" />
        <text className="topic-ii-figure-equation" style={mobileLabelTextStyle} x="18" y="292">planar oriented-area test</text>
        <rect className="topic-ii-figure-half-plane" height="224" width="164" x="178" y="310" />
        <line className="topic-ii-figure-ray" x1="178" x2="178" y1="306" y2="540" />
        <line
          className="topic-ii-figure-support"
          markerEnd={`url(#${markerId})`}
          x1="42"
          x2="334"
          y1="430"
          y2="430"
        />
        <circle className="topic-ii-figure-point" cx="178" cy="339" r="6" />
        <circle className="topic-ii-figure-point" cx="178" cy="508" r="6" />
        <circle className="topic-ii-figure-point" cx="178" cy="430" r="6" />
        <circle className="topic-ii-figure-point topic-ii-figure-point-accent" cx="286" cy="430" r="8" />
        <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x="190" y="334">
          X<tspan baselineShift="sub" fontSize="14"> m</tspan>(τ)
        </text>
        <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x="190" y="526">
          X<tspan baselineShift="sub" fontSize="14"> m+1</tspan>
        </text>
        <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x="75" y="415">D̃=0</text>
        <text className="topic-ii-figure-label" style={mobileLabelTextStyle} x="92" y="457">z(u(τ))</text>
        <text className="topic-ii-figure-label topic-ii-figure-accent" style={mobileLabelTextStyle} x="222" y="457">Y(τ)=z(τ)</text>
        <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x="260" y="367" textAnchor="middle">D̃(q,τ)&gt;0</text>
        <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x="260" y="389" textAnchor="middle">open half-plane</text>
        <text className="topic-ii-figure-equation" style={mobileLabelTextStyle} x="180" y="579" textAnchor="middle">D(τ,τ)=D̃(Y(τ),τ)&gt;0</text>
      </>
    );
  }

  return (
    <>
      <text className="topic-ii-figure-equation" x="38" y="33">affine coordinate on the final contact line</text>
      <line
        className="topic-ii-figure-ray"
        markerEnd={`url(#${markerId})`}
        markerStart={`url(#${markerId})`}
        x1="48"
        x2="712"
        y1="113"
        y2="113"
      />
      <line className="topic-ii-figure-support" x1="370" x2="370" y1="101" y2="125" />
      <line className="topic-ii-figure-support" x1="630" x2="630" y1="101" y2="125" />
      <circle className="topic-ii-figure-point" cx="370" cy="113" r="5" />
      <circle className="topic-ii-figure-point" cx="630" cy="113" r="5" />
      <circle className="topic-ii-figure-point" cx="126" cy="113" r="7" />
      <circle className="topic-ii-figure-point topic-ii-figure-point-accent" cx="238" cy="113" r="8" />
      <text className="topic-ii-figure-label" x="102" y="142">u(τ)</text>
      <text className="topic-ii-figure-label topic-ii-figure-accent" x="230" y="142">τ</text>
      <text className="topic-ii-figure-small" x="366" y="142">0</text>
      <text className="topic-ii-figure-small" x="626" y="142">1</text>
      <path className="topic-ii-figure-edge" d="M126 73 L238 73" markerEnd={`url(#${markerId})`} />
      <text className="topic-ii-figure-equation" x="182" y="57" textAnchor="middle">u(τ)&lt;τ</text>
      <line className="topic-ii-figure-transfer" x1="370" x2="630" y1="160" y2="160" />
      <text className="topic-ii-figure-small" x="500" y="181" textAnchor="middle">calibration interval [0,1]</text>
      <text className="topic-ii-figure-small" x="38" y="181">Neither point is assumed to lie in [0,1].</text>

      <line className="topic-ii-figure-support" x1="28" x2="732" y1="199" y2="199" />
      <text className="topic-ii-figure-equation" x="38" y="225">planar oriented-area test</text>
      <rect className="topic-ii-figure-half-plane" height="145" width="310" x="412" y="232" />
      <line className="topic-ii-figure-ray" x1="412" x2="412" y1="228" y2="379" />
      <line
        className="topic-ii-figure-support"
        markerEnd={`url(#${markerId})`}
        x1="245"
        x2="704"
        y1="303"
        y2="303"
      />
      <circle className="topic-ii-figure-point" cx="412" cy="250" r="6" />
      <circle className="topic-ii-figure-point" cx="412" cy="356" r="6" />
      <circle className="topic-ii-figure-point" cx="412" cy="303" r="6" />
      <circle className="topic-ii-figure-point topic-ii-figure-point-accent" cx="582" cy="303" r="8" />
      <text className="topic-ii-figure-small" x="424" y="246">Xₘ(τ)</text>
      <text className="topic-ii-figure-small" x="424" y="374">Xₘ₊₁</text>
      <text className="topic-ii-figure-small" x="302" y="287">D̃=0</text>
      <text className="topic-ii-figure-label" x="320" y="331">z(u(τ))</text>
      <text className="topic-ii-figure-label topic-ii-figure-accent" x="542" y="331">Y(τ)=z(τ)</text>
      <text className="topic-ii-figure-equation" x="567" y="261" textAnchor="middle">D̃(q,τ)&gt;0</text>
      <text className="topic-ii-figure-small" x="567" y="280" textAnchor="middle">open half-plane</text>
      <text className="topic-ii-figure-equation" x="133" y="332" textAnchor="middle">D(τ,τ)&gt;0</text>
    </>
  );
}

function GlobalLedger() {
  const rows = [
    ["D", "target j∈D", "s(j)∉M"],
    ["R", "target j∈R", "s(j)∈M∖{b*}; s(R)=M∖{b*}"],
    ["{c}", "target j=c", "s(c)=b*"],
    ["A", "target j∈A", "s(j)∉M"],
  ] as const;
  return (
    <>
      <text className="topic-ii-figure-small" x="157" y="29">target membership</text>
      <text className="topic-ii-figure-small" x="458" y="29">inverse-source condition</text>
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
    ["R", "target j∈R", "s(j)∈M∖{b*}; s(R)=M∖{b*}"],
    ["{c}", "target j=c", "s(c)=b*"],
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
            <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x="94" y={y + 29}>{source}</text>
            <line className="topic-ii-figure-support" x1="94" x2="315" y1={y + 45} y2={y + 45} />
            <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x="94" y={y + 72}>{target}</text>
          </g>
        );
      })}
      <text className="topic-ii-figure-equation" x="180" y="544" textAnchor="middle">ℬ = D ⊔ R ⊔ {"{c}"} ⊔ A</text>
    </>
  );
}

const unitReturnOuter: readonly Point[] = [
  [108, 294],
  [74, 168],
  [160, 62],
  [320, 38],
  [520, 72],
  [674, 188],
  [625, 305],
  [438, 340],
  [248, 330],
];

const unitReturnImage: readonly Point[] = [
  [91, 231],
  [117, 115],
  [240, 50],
  [420, 55],
  [597, 130],
  [649.5, 246.5],
  [531.5, 322.5],
  [343, 335],
  [204.08, 295.15],
];

function UnitReturn({ mobile = false }: { mobile?: boolean }) {
  const transform = ([x, y]: Point): Point => mobile
    ? [15 + 0.47 * x, 32 + 0.89 * y]
    : [x, y];
  const outer = unitReturnOuter.map(transform);
  const image = unitReturnImage.map(transform);
  const contactVertices = image.slice(0, 8);
  const interiorVertex = image[8];
  const points = (vertices: readonly Point[]) => vertices.map((point) => point.join(",")).join(" ");
  const outerLabel = mobile ? { x: 46, y: 63 } : { x: 105, y: 74 };
  const imageLabel = mobile ? { x: 205, y: 190 } : { x: 455, y: 180 };
  const interiorLabel = mobile
    ? { x: interiorVertex[0] + 12, y: interiorVertex[1] - 12 }
    : { x: interiorVertex[0] + 12, y: interiorVertex[1] - 15 };

  return (
    <>
      {mobile ? (
        <>
          <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x="180" y="19" textAnchor="middle">
            incidence only — not a metric realization
          </text>
          <text className="topic-ii-figure-small" style={mobileSmallTextStyle} x="180" y="39" textAnchor="middle">
            of multiplication by λ
          </text>
        </>
      ) : (
        <text className="topic-ii-figure-small" x="380" y="25" textAnchor="middle">
          incidence only — not a metric realization of multiplication by λ
        </text>
      )}
      <polygon className="topic-ii-figure-polygon" points={points(outer)} />
      <polygon className="topic-ii-figure-polar" points={points(image)} />
      {contactVertices.map(([x, y], index) => (
        <circle className="topic-ii-figure-point" cx={x} cy={y} key={index} r={mobile ? 5 : 5} />
      ))}
      <circle
        className="topic-ii-figure-point topic-ii-figure-point-accent"
        cx={interiorVertex[0]}
        cy={interiorVertex[1]}
        r={mobile ? 8 : 9}
      />
      <text
        className="topic-ii-figure-label"
        style={mobile ? mobileLabelTextStyle : undefined}
        x={outerLabel.x}
        y={outerLabel.y}
      >
        P<tspan baselineShift="sub" fontSize={mobile ? 14 : 12}>τ</tspan>
      </text>
      <text
        className="topic-ii-figure-label"
        style={mobile ? mobileLabelTextStyle : undefined}
        x={imageLabel.x}
        y={imageLabel.y}
      >
        λP<tspan baselineShift="sub" fontSize={mobile ? 14 : 12}>τ</tspan>
        <tspan className="topic-ii-figure-small" dx="8" fontSize={mobile ? 14 : 12}>(schematic)</tspan>
      </text>
      <text
        className="topic-ii-figure-label topic-ii-figure-accent"
        style={mobile ? mobileLabelTextStyle : undefined}
        x={interiorLabel.x}
        y={interiorLabel.y}
      >
        Y(τ)
      </text>
      <text
        className="topic-ii-figure-equation"
        style={mobile ? mobileLabelTextStyle : undefined}
        x={mobile ? 180 : 382}
        y={mobile ? 374 : 365}
        textAnchor="middle"
      >
        Y(τ) ∈ Ext(λP<tspan baselineShift="sub" fontSize={mobile ? 14 : 12}>τ</tspan>) ∩ int(P<tspan baselineShift="sub" fontSize={mobile ? 14 : 12}>τ</tspan>)
      </text>
      <g data-incidence-only="true" data-metric-realization="false" />
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
    "topic-vi-return-partition": "0 0 360 570",
    "projective-corridor": "0 0 360 390",
    "topic-vi-projective-chain": "0 0 360 390",
    "holonomy-escape": "0 0 360 610",
    "unit-return": "0 0 360 400",
  };
  const mobileViewBox = mobileViewBoxes[kind];
  const hasMobileLayout = Boolean(mobileViewBox);
  const markerId = "advanced-arrow-" + kind;
  const mobileMarkerId = markerId + "-mobile";
  return (
    <figure className="topic-ii-concept-figure">
      <div className="topic-ii-concept-heading">
        <span>{figure.status ?? "Deterministic mathematical plate"}</span>
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
          <marker
            id={markerId}
            markerHeight="7"
            markerWidth="8"
            orient={kind === "holonomy-escape" ? "auto-start-reverse" : "auto"}
            refX="7"
            refY="3.5"
          >
            <path className="topic-ii-figure-arrow-head" d="M0,0 L8,3.5 L0,7 Z" />
          </marker>
        </defs>
        {kind === "rotation-records" ? <RotationRecords /> : null}
        {kind === "return-towers" ? <ReturnTowers /> : null}
        {kind === "projective-corridor" ? <ProjectiveCorridor markerId={markerId} /> : null}
        {kind === "topic-vi-projective-chain" ? <TopicVIProjectiveChain markerId={markerId} /> : null}
        {kind === "holonomy-escape" ? <HolonomyEscape markerId={markerId} /> : null}
        {kind === "global-ledger" || kind === "topic-vi-return-partition" ? <GlobalLedger /> : null}
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
            <marker
              id={mobileMarkerId}
              markerHeight="7"
              markerWidth="8"
              orient={kind === "holonomy-escape" ? "auto-start-reverse" : "auto"}
              refX="7"
              refY="3.5"
            >
              <path className="topic-ii-figure-arrow-head" d="M0,0 L8,3.5 L0,7 Z" />
            </marker>
          </defs>
          {kind === "rotation-records" ? <RotationRecordsMobile /> : null}
          {kind === "return-towers" ? <ReturnTowersMobile markerId={mobileMarkerId} /> : null}
          {kind === "global-ledger" || kind === "topic-vi-return-partition" ? <GlobalLedgerMobile /> : null}
          {kind === "projective-corridor" ? <ProjectiveCorridorMobile markerId={mobileMarkerId} /> : null}
          {kind === "topic-vi-projective-chain" ? <TopicVIProjectiveChainMobile markerId={mobileMarkerId} /> : null}
          {kind === "holonomy-escape" ? <HolonomyEscape markerId={mobileMarkerId} mobile /> : null}
          {kind === "unit-return" ? <UnitReturn mobile /> : null}
        </svg>
      ) : null}
      <figcaption>{figure.caption}</figcaption>
    </figure>
  );
}
