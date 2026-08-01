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
      <path d="M558 205 C540 98 435 52 350 60 C245 45 145 104 115 205 C135 300 250 370 360 360 C465 372 545 295 558 205 Z" fill={pale} stroke={ink} strokeWidth="3" />
      {rays.map(([x1, y1, x2, y2], index) => <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} stroke={copper} strokeWidth="1.8" opacity=".75" />)}
      <circle cx="335" cy="205" r="5" fill={red} />
      <circle cx="515" cy="94" r="7" fill={red} />
      <line x1="335" y1="205" x2="515" y2="94" stroke={red} strokeWidth="3.4" />
      <text x="418" y="131" fill={red}>rₛ(φ)eⁱφ</text>
      <text x="350" y="225" fill={ink}>0</text>
      <text x="120" y="406" fill={ink}>continuity turns every strictly shorter radial point into an interior point</text>
    </>
  );
}

function OrderThree() {
  const realAxisY = 235;
  const halfX = 235;
  const rightX = 550;
  const topY = 55;
  const bottomY = 415;
  const minusOneX = 130;
  return (
    <>
      <line x1="65" y1={realAxisY} x2="615" y2={realAxisY} stroke={copper} strokeWidth="1.8" strokeDasharray="8 7" />
      <polygon points={`${rightX},${realAxisY} ${halfX},${topY} ${halfX},${bottomY}`} fill={pale} stroke={ink} strokeWidth="3" />
      <line x1={minusOneX} y1={realAxisY} x2={halfX} y2={realAxisY} stroke={red} strokeWidth="6" />
      <circle cx={rightX} cy={realAxisY} r="7" fill={ink} />
      <circle cx={halfX} cy={topY} r="7" fill={ink} />
      <circle cx={halfX} cy={bottomY} r="7" fill={ink} />
      <circle cx={halfX} cy={realAxisY} r="7" fill={red} />
      <circle cx={minusOneX} cy={realAxisY} r="7" fill={red} />
      <text x="562" y="246" fill={ink}>1</text>
      <text x="211" y="39" fill={ink}>ω</text>
      <text x="252" y="410" fill={ink}>ω̄ = −1/2−i√3/2</text>
      <text x="102" y="265" fill={red}>−1</text>
      <text x="198" y="217" fill={red}>−1/2</text>
      <text x="337" y="183" fill={ink}>{"conv{1,ω,ω̄}"}</text>
      <text x="80" y="207" fill={red}>extra real segment</text>
    </>
  );
}

function Induction() {
  return (
    <>
      <rect x="238" y="45" width="205" height="58" rx="5" fill={pale} stroke={ink} strokeWidth="2.4" />
      <text x="269" y="80" fill={ink}>λₙ=Rₙ(θ)eⁱθ</text>
      <path d="M340 103 L340 145 M340 145 L190 190 M340 145 L490 190" fill="none" stroke={ink} strokeWidth="2.6" />
      <polygon points="190,190 198,173 206,190" fill={ink} />
      <polygon points="490,190 474,181 477,198" fill={ink} />
      <rect x="70" y="195" width="240" height="82" rx="5" fill={paper} stroke={red} strokeWidth="3" />
      <text x="97" y="226" fill={red}>new shell</text>
      <text x="97" y="252" fill={ink}>λₙ ∉ Θₙ₋₁</text>
      <text x="97" y="272" fill={ink}>Topic XI: Rₙ=Kₙ</text>
      <rect x="370" y="195" width="240" height="82" rx="5" fill={paper} stroke={teal} strokeWidth="3" />
      <text x="397" y="226" fill={teal}>inherited</text>
      <text x="397" y="252" fill={ink}>λₙ ∈ Θₙ₋₁</text>
      <text x="397" y="272" fill={ink}>Rₙ=Rₙ₋₁</text>
      <path d="M190 277 L190 337 L340 375 M490 277 L490 337 L340 375" fill="none" stroke={copper} strokeWidth="2.8" />
      <rect x="238" y="355" width="205" height="58" rx="5" fill={pale} stroke={ink} strokeWidth="2.4" />
      <text x="267" y="389" fill={ink}>Rₙ(θ)=Kₙ(θ)</text>
      <text x="77" y="440" fill={ink}>Every open ray enters exactly one branch; endpoints are supplied by roots of unity.</text>
    </>
  );
}

const copy: Record<CompletionFigureKind, { title: string; description: string; caption: string }> = {
  "radial-boundary": {
    title: "A continuous radial maximum is the boundary",
    description: "A radially filled compact set surrounds the origin, with rays from the origin ending on one continuous closed curve.",
    caption: "Plate XIII.1. Radial filling identifies each ray segment; continuity gives a two-dimensional neighborhood below the graph. The outer endpoint on every ray—and only that endpoint—belongs to the topological boundary.",
  },
  "order-three": {
    title: "The exceptional region at order three",
    description: "The triangle spanned by one and the two cubic roots of unity is accompanied by a real segment from minus one to minus one half.",
    caption: "Plate XIII.2. Θ₃ is the filled equilateral triangle together with [−1,−1/2]. The terminal radial graph approaches −1/2, but the outer point on the negative-real ray is −1.",
  },
  induction: {
    title: "The two-branch induction on one ray",
    description: "An outermost order n point splits into a new-shell branch and an inherited branch; both conclude that the actual and candidate radii agree.",
    caption: "Plate XIII.3. A new-shell extremum is controlled by the sharp equality theorem. An inherited extremum is squeezed by order embedding, the induction hypothesis, candidate nesting, and attainment.",
  },
};

export function CompletionFigure({ kind }: { kind: CompletionFigureKind }) {
  const description = copy[kind];
  return (
    <figure className="topic-ii-concept-figure">
      <div className="topic-ii-concept-heading">
        <span>Deterministic mathematical plate</span>
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
