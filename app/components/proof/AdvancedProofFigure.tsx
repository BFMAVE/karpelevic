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
      "A residue strip highlights record residues zero, five, ten, and twelve, together with lattice record vectors zero one, one one, two one, and five two.",
    caption:
      "Plate V.1. For N=13 and κ=5, the upper-record times are 0, 1, 2, and 5. Their deficits are 13, 8, 3, and 1. The corresponding primitive lattice vectors form the visible sail.",
  },
  "return-towers": {
    title: "The two-height return section",
    description:
      "Eight base columns contain three towers of height one and five towers of height two, giving thirteen states. Arrows on the bases show addition of five modulo eight.",
    caption:
      "Plate V.2. The record pair V=(1,1), V′=(2,1) gives ν=8, Δ=5, q=1, h=1. The identity qν+hΔ=13 is visible as three short states plus ten long states.",
  },
  "projective-corridor": {
    title: "Successive projections through a convex boundary corridor",
    description:
      "A convex polygonal chain carries four contact centres and three strict supporting lines. Projection rays join one moving point to the next support.",
    caption:
      "Plate V.3. Every arrow is a perspectivity through a labelled centre Cᵢ, not an orthogonal projection. Their composition is the corridor holonomy.",
  },
  "holonomy-escape": {
    title: "A scalar projectivity controls the closing half-plane",
    description:
      "The final contact segment is parameterized from zero to one. The returned intersection u of tau lies before the point tau, placing the latter on the calibrated interior side.",
    caption:
      "Plate VI-A.1. Once γ(τ)>0, the planar determinant has the sign of τ-u(τ). The inequality τ-u(τ)>0 therefore opens the closing contact inward.",
  },
  "global-ledger": {
    title: "Every return edge has exactly one mechanism",
    description:
      "Four horizontal registers labelled D, R, c, and A show fixed or moving sources, fixed or moving side lines, and the single unconstrained closing return.",
    caption:
      "Plate VI-B.1. D contains controlled moving side lines, R supported moving sources, A unchanged returns, and c the only closing edge. The four classes are disjoint and exhaustive.",
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
      <text className="topic-ii-figure-small" x="55" y="65">residue</text>
      <text className="topic-ii-figure-small" x="704" y="132" textAnchor="end">time</text>
      <line className="topic-ii-figure-support" x1="92" x2="368" y1="322" y2="188" />
      {records.map((record) => {
        const x = 112 + record.time * 46;
        const y = 329 - record.b * 61;
        return (
          <g key={record.time}>
            <circle className="topic-ii-figure-point topic-ii-figure-point-accent" cx={x} cy={y} r="6" />
            <text className="topic-ii-figure-label" x={x + 10} y={y - 8}>({record.time},{record.b})</text>
          </g>
        );
      })}
      <path className="topic-ii-figure-edge" d="M112 268 L158 268 L204 268 L342 207" />
      <text className="topic-ii-figure-equation" x="515" y="240">L(h,b)=5h-13b</text>
      <text className="topic-ii-figure-small" x="515" y="270">deficits: 13, 8, 3, 1</text>
      <g data-records={records.map((record) => record.time + ":" + record.residue + ":" + record.deficit).join(",")} />
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

const corridorPoints = [[74, 300], [180, 276], [284, 227], [397, 169], [520, 124], [670, 100]] as const;

function ProjectiveCorridor() {
  return (
    <>
      <polyline className="topic-ii-figure-polygon" fill="none" points={corridorPoints.map((point) => point.join(",")).join(" ")} />
      {[2, 3, 4].map((index) => {
        const [x, y] = corridorPoints[index];
        return <line className="topic-ii-figure-support" key={index} x1={x - 72} x2={x + 62} y1={y + 55} y2={y - 48} />;
      })}
      {[2, 3, 4, 5].map((index) => {
        const [ax, ay] = corridorPoints[index - 1];
        const [bx, by] = corridorPoints[index];
        const x = 0.44 * ax + 0.56 * bx;
        const y = 0.44 * ay + 0.56 * by;
        return (
          <g key={index}>
            <circle className="topic-ii-figure-point topic-ii-figure-point-accent" cx={x} cy={y} r="5" />
            <text className="topic-ii-figure-small" x={x + 7} y={y - 8}>C{index}</text>
          </g>
        );
      })}
      <path className="topic-ii-figure-target" d="M180 276 L247 250 L334 194 L456 148" markerEnd="url(#advanced-arrow-projective-corridor)" />
      {corridorPoints.map(([x, y], index) => <text className="topic-ii-figure-label" key={index} x={x - 4} y={y + 24}>X{index}</text>)}
    </>
  );
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
  const rows = [["D", "fixed source", "moving controlled line"], ["R", "supported moving source", "fixed line"], ["{c}", "seed", "closing line"], ["A", "fixed source", "fixed line"]] as const;
  return (
    <>
      {rows.map(([label, source, target], index) => {
        const y = 74 + index * 73;
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
      <text className="topic-ii-figure-equation" x="380" y="354" textAnchor="middle">B = D ⊔ R ⊔ {"{c}"} ⊔ A</text>
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
  return (
    <figure className="topic-ii-concept-figure">
      <div className="topic-ii-concept-heading">
        <span>Deterministic mathematical plate</span>
        <span>{figure.title}</span>
      </div>
      <svg aria-labelledby={"advanced-" + kind + "-title advanced-" + kind + "-description"} role="img" viewBox="0 0 760 390">
        <title id={"advanced-" + kind + "-title"}>{figure.title}</title>
        <desc id={"advanced-" + kind + "-description"}>{figure.description}</desc>
        <defs>
          <marker id={"advanced-arrow-" + kind} markerHeight="7" markerWidth="8" orient="auto" refX="7" refY="3.5">
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
      <figcaption>{figure.caption}</figcaption>
    </figure>
  );
}
