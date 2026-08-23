type CompletionFigureKind = "radial-boundary" | "order-three" | "induction";

const ink = "#14273d";
const red = "#8b2f35";
const copper = "#a2683a";
const teal = "#3f6f78";
const paper = "#f5efdd";
const pale = "#d8e2e7";

function RadialBoundary() {
  const rays = [
    [335, 205, 558, 205],
    [335, 205, 515, 94],
    [335, 205, 350, 60],
    [335, 205, 168, 88],
    [335, 205, 115, 205],
    [335, 205, 180, 328],
    [335, 205, 360, 360],
    [335, 205, 535, 315],
  ];
  return (
    <>
      <polygon points="558,205 515,94 350,60 168,88 115,205 180,328 360,360 535,315" fill={pale} stroke={ink} strokeWidth="3" strokeLinejoin="round" />
      {rays.map(([x1, y1, x2, y2], index) => <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} stroke={copper} strokeWidth="1.8" opacity=".75" />)}
      <circle cx="335" cy="205" r="5" fill={red} />
      <circle cx="515" cy="94" r="7" fill={red} />
      <line x1="335" y1="205" x2="515" y2="94" stroke={red} strokeWidth="3.4" />
      <text x="416" y="125" fill={red}>ρₛ(u)u</text>
      <text x="445" y="174" fill={ink}>u∈S¹</text>
      <text x="350" y="225" fill={ink}>0</text>
      <text x="548" y="339" fill={ink}>S</text>
    </>
  );
}

function OrderThree() {
  const realAxisY = 235;
  const halfX = 235;
  const rightX = 550;
  const unitScale = (rightX - halfX) / 1.5;
  const omegaImaginaryOffset = unitScale * Math.sqrt(3) / 2;
  const topY = realAxisY - omegaImaginaryOffset;
  const bottomY = realAxisY + omegaImaginaryOffset;
  const minusOneX = 130;
  return (
    <>
      <text x="340" y="30" fill={ink} textAnchor="middle">Θ₃ = conv{"{1, ω, ω̄}"} ∪ [−1, −1/2]</text>
      <line x1="65" y1={realAxisY} x2="615" y2={realAxisY} stroke={copper} strokeWidth="1.8" strokeDasharray="8 7" />
      <polygon points={`${rightX},${realAxisY} ${halfX},${topY} ${halfX},${bottomY}`} fill={pale} stroke={ink} strokeWidth="3" />
      <line x1={minusOneX} y1={realAxisY} x2={halfX} y2={realAxisY} stroke={red} strokeWidth="6" />
      <circle cx={rightX} cy={realAxisY} r="7" fill={ink} />
      <circle cx={halfX} cy={topY} r="7" fill={ink} />
      <circle cx={halfX} cy={bottomY} r="7" fill={ink} />
      <circle cx={halfX} cy={realAxisY} r="7" fill={red} />
      <circle cx={minusOneX} cy={realAxisY} r="7" fill={red} />
      <text x="562" y="246" fill={ink}>1</text>
      <text x="204" y="72" fill={ink}>ω</text>
      <text x="252" y="430" fill={ink}>ω̄ = −1/2−i√3/2</text>
      <text x="112" y="267" fill={red}>−1</text>
      <text x="211" y="267" fill={red}>−1/2</text>
      <text x="337" y="183" fill={ink}>{"conv{1, ω, ω̄}"}</text>
      <text x="183" y="211" fill={red} textAnchor="middle">[−1, −1/2]</text>
    </>
  );
}

function Induction() {
  return (
    <>
      <rect x="115" y="32" width="450" height="78" rx="5" fill={pale} stroke={ink} strokeWidth="2.4" />
      <text x="340" y="62" fill={ink} textAnchor="middle">n≥4 and θ lies in an open Farey interval</text>
      <text x="340" y="91" fill={ink} textAnchor="middle">λₙ=Rₙ(θ)eⁱθ ∈ Θₙ</text>
      <path d="M340 110 L340 140 M340 140 L177 168 M340 140 L503 168" fill="none" stroke={ink} strokeWidth="2.6" />
      <polygon points="177,168 169,151 185,151" fill={ink} />
      <polygon points="503,168 495,151 511,151" fill={ink} />
      <rect x="30" y="173" width="294" height="156" rx="5" fill={paper} stroke={red} strokeWidth="3" />
      <text x="52" y="207" fill={red}>Case 1: λₙ ∉ Θₙ₋₁</text>
      <text x="52" y="246" fill={ink}>Topics X–XI imply</text>
      <text x="177" y="288" fill={ink} textAnchor="middle">Rₙ(θ)=Kₙ(θ)</text>
      <rect x="356" y="173" width="294" height="156" rx="5" fill={paper} stroke={teal} strokeWidth="3" />
      <text x="378" y="207" fill={teal}>Case 2: λₙ ∈ Θₙ₋₁</text>
      <text x="503" y="246" fill={ink} textAnchor="middle">Rₙ ≤ Rₙ₋₁ = Kₙ₋₁</text>
      <text x="503" y="283" fill={ink} textAnchor="middle">≤ Kₙ ≤ Rₙ</text>
      <path d="M177 329 L177 352 L340 378 M503 329 L503 352 L340 378" fill="none" stroke={copper} strokeWidth="2.8" />
      <polygon points="340,390 332,373 348,373" fill={copper} />
      <rect x="205" y="382" width="270" height="62" rx="5" fill={pale} stroke={ink} strokeWidth="2.4" />
      <text x="340" y="420" fill={ink} textAnchor="middle">Rₙ(θ)=Kₙ(θ)</text>
    </>
  );
}

const copy: Record<CompletionFigureKind, { status: string; title: string; description: string; caption: string }> = {
  "radial-boundary": {
    status: "Schematic radial geometry — not to scale",
    title: "Boundary from a continuous radial function",
    description: "A schematic star-shaped set S with radial endpoint rho sub S of u times u for directions u on the unit circle.",
    caption: "Plate XIII.1. For each direction u∈S¹, the intersection of S with the corresponding ray is the segment from 0 to ρₛ(u)u. Continuity of ρₛ makes every strictly shorter nonzero point an interior point, so the radial endpoints form the topological boundary.",
  },
  "order-three": {
    status: "Exact region — drawn to scale",
    title: "The exceptional region at order three",
    description: "Theta three is exactly the convex hull of one and the two cubic roots of unity, union the real segment from minus one to minus one half.",
    caption: "Plate XIII.2. The exact region is Θ₃=conv{1,ω,ω̄}∪[−1,−1/2]. The displayed matrix families realize the triangle boundary and the additional real segment; star-shapedness with respect to 0 fills the triangle.",
  },
  induction: {
    status: "Exact implication diagram",
    title: "Induction by membership in Θₙ₋₁",
    description: "The induction separates according as the order n radial maximizer belongs to Theta n minus one, and both cases imply equality of R n and K n.",
    caption: "Plate XIII.3. If λₙ∉Θₙ₋₁, Topics X–XI give Rₙ(θ)=Kₙ(θ). If λₙ∈Θₙ₋₁, membership, the induction hypothesis, Topic XII monotonicity, and attainment give Rₙ≤Rₙ₋₁=Kₙ₋₁≤Kₙ≤Rₙ, so equality follows.",
  },
};

export function CompletionFigure({ kind }: { kind: CompletionFigureKind }) {
  const description = copy[kind];
  return (
    <figure className="topic-ii-concept-figure">
      <div className="topic-ii-concept-heading">
        <span>{description.status}</span>
        <span>{description.title}</span>
      </div>
      <svg role="img" aria-labelledby={`complete-${kind}-title complete-${kind}-desc`} viewBox="0 0 680 470">
        <title id={`complete-${kind}-title`}>{description.title}</title>
        <desc id={`complete-${kind}-desc`}>{description.description}</desc>
        {kind === "radial-boundary" ? <RadialBoundary /> : null}
        {kind === "order-three" ? <OrderThree /> : null}
        {kind === "induction" ? <Induction /> : null}
      </svg>
      <figcaption>{description.caption}</figcaption>
    </figure>
  );
}
