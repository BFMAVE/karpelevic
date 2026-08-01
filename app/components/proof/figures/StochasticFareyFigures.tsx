type FigureKind =
  | "eigenpolygon"
  | "new-shell"
  | "farey-five"
  | "rooted-chord"
  | "terminal-three"
  | "reflection"
  | "jensen"
  | "cycle-ledger"
  | "sparse-cases"
  | "squeeze";

const ink = "#14273d";
const red = "#8b2f35";
const copper = "#a2683a";
const teal = "#3f6f78";
const paper = "#f5efdd";
const pale = "#d8e2e7";

function Dot({ x, y, color = ink, open = false, r = 6 }: { x: number; y: number; color?: string; open?: boolean; r?: number }) {
  return <circle cx={x} cy={y} r={r} fill={open ? paper : color} stroke={color} strokeWidth="2" />;
}

function Eigenpolygon({ marker }: { marker: string }) {
  return (
    <>
      <polygon points="115,275 320,60 555,275" fill={pale} stroke={ink} strokeWidth="2.6" />
      <polygon points="215,235 330,118 455,232" fill="none" stroke={red} strokeWidth="3.4" />
      <path d="M320 60 Q430 64 463 145" fill="none" stroke={copper} strokeWidth="2.4" markerEnd={`url(#${marker})`} />
      <Dot x={115} y={275} /><Dot x={320} y={60} /><Dot x={555} y={275} />
      <Dot x={215} y={235} color={red} /><Dot x={330} y={118} color={red} /><Dot x={455} y={232} color={red} />
      <text x="300" y="40" fill={ink}>v₂</text><text x="76" y="304" fill={ink}>v₁</text><text x="560" y="303" fill={ink}>v₃</text>
      <text x="360" y="150" fill={red}>λP ⊆ P</text>
      <text x="102" y="344" fill={ink}>each λvᵢ is a convex average of the original coordinates</text>
    </>
  );
}

function NewShell() {
  return (
    <>
      <path d="M82 274 C120 80 285 42 478 94 C580 122 628 208 585 291" fill={pale} stroke={ink} strokeWidth="2.8" />
      <path d="M144 271 C170 140 286 103 430 136 C496 151 535 208 511 275" fill={paper} stroke={copper} strokeWidth="2.6" strokeDasharray="8 6" />
      <line x1="100" y1="300" x2="585" y2="95" stroke={red} strokeWidth="2.5" />
      <Dot x={521} y={122} color={red} r={7} />
      <text x="530" y="112" fill={red}>λ = Rᴺ(θ)eⁱθ</text>
      <text x="305" y="198" fill={copper}>Θᴺ₋₁</text><text x="470" y="250" fill={ink}>Θᴺ</text>
      <text x="98" y="338" fill={ink}>not in order N−1 · outermost in order N · therefore N-critical</text>
    </>
  );
}

function FareyFive() {
  const entries = [
    { value: 0, label: "0" }, { value: 1 / 5, label: "1/5" }, { value: 1 / 4, label: "1/4" },
    { value: 1 / 3, label: "1/3" }, { value: 2 / 5, label: "2/5" }, { value: 1 / 2, label: "1/2" },
  ];
  const x = (value: number) => 70 + value * 1080;
  return (
    <>
      <line x1="70" y1="185" x2="610" y2="185" stroke={ink} strokeWidth="2.5" />
      <rect x={x(1 / 3)} y="145" width={x(2 / 5) - x(1 / 3)} height="80" fill={pale} />
      {entries.map((entry) => (
        <g key={entry.label}>
          <line x1={x(entry.value)} y1="168" x2={x(entry.value)} y2="202" stroke={entry.value === 1 / 3 || entry.value === 2 / 5 ? red : ink} strokeWidth="2" />
          <text x={x(entry.value) - 13} y="235" fill={entry.value === 1 / 3 || entry.value === 2 / 5 ? red : ink}>{entry.label}</text>
        </g>
      ))}
      <line x1={x(3 / 8)} y1="110" x2={x(3 / 8)} y2="185" stroke={copper} strokeWidth="3" />
      <text x={x(3 / 8) - 32} y="90" fill={copper}>x = 3/8</text>
      <text x="138" y="315" fill={ink}>F₅⁺ = {"{0, 1/5, 1/4, 1/3, 2/5, 1/2}"}</text>
    </>
  );
}

function RootedChord({ marker }: { marker: string }) {
  return (
    <>
      <line x1="70" y1="250" x2="610" y2="250" stroke={ink} strokeWidth="1.8" />
      <path d="M90 250 L330 95" fill="none" stroke={red} strokeWidth="4" markerEnd={`url(#${marker})`} />
      <path d="M330 95 L580 250" fill="none" stroke={teal} strokeWidth="4" markerEnd={`url(#${marker})`} />
      <path d="M90 250 L580 250" fill="none" stroke={ink} strokeWidth="3" markerEnd={`url(#${marker})`} />
      <path d="M140 250 A50 50 0 0 0 132 219" fill="none" stroke={red} strokeWidth="2" />
      <path d="M530 250 A50 50 0 0 1 538 219" fill="none" stroke={teal} strokeWidth="2" />
      <text x="126" y="217" fill={red}>A</text><text x="535" y="217" fill={teal}>B</text>
      <text x="145" y="130" fill={red}>βzᑫ</text><text x="425" y="130" fill={teal}>αωzˢ⁄ᵈ</text>
      <text x="282" y="286" fill={ink}>1 = βzᑫ + αωzˢ⁄ᵈ</text>
      <text x="132" y="333" fill={ink}>the vertical components cancel; the horizontal components add to one</text>
    </>
  );
}

function TerminalThree() {
  return (
    <>
      <line x1="70" y1="250" x2="610" y2="250" stroke={ink} strokeWidth="2" />
      <path d="M245 95 C305 112 360 178 385 250" fill="none" stroke={red} strokeWidth="4" />
      <line x1="190" y1="250" x2="385" y2="250" stroke={copper} strokeWidth="5" />
      <Dot x={190} y={250} color={copper} /><Dot x={385} y={250} color={red} />
      <Dot x={245} y={95} color={ink} />
      <text x="165" y="282" fill={ink}>−1</text><text x="370" y="282" fill={ink}>−1/2</text>
      <text x="218" y="68" fill={ink}>e²πⁱ⁄³</text>
      <text x="110" y="330" fill={ink}>the nonreal graph tends to −1/2; the real carrier continues to −1</text>
    </>
  );
}

function Reflection({ marker }: { marker: string }) {
  return (
    <>
      <line x1="80" y1="95" x2="600" y2="95" stroke={ink} strokeWidth="2" />
      <line x1="340" y1="65" x2="340" y2="125" stroke={copper} strokeWidth="2" strokeDasharray="5 5" />
      <path d="M185 75 Q340 20 495 75" fill="none" stroke={red} strokeWidth="2.8" markerEnd={`url(#${marker})`} />
      <text x="168" y="145" fill={ink}>p/q</text><text x="475" y="145" fill={ink}>r/s</text>
      <text x="276" y="40" fill={red}>t ↦ 1−t</text>
      <line x1="80" y1="285" x2="600" y2="285" stroke={ink} strokeWidth="1.6" />
      <Dot x={405} y={205} color={red} /><Dot x={405} y={365} color={teal} />
      <line x1="405" y1="205" x2="405" y2="365" stroke={copper} strokeWidth="2.4" strokeDasharray="7 6" />
      <text x="420" y="205" fill={red}>λ</text><text x="420" y="365" fill={teal}>λ̄ = μ</text>
      <text x="118" y="345" fill={ink}>denominators and modulus stay fixed; orientation reverses</text>
    </>
  );
}

function Jensen() {
  const curve = "M90 310 C210 300 265 210 330 120 C400 28 500 40 590 65";
  return (
    <>
      <path d={curve} fill="none" stroke={ink} strokeWidth="3" />
      <line x1="160" y1="277" x2="495" y2="47" stroke={copper} strokeWidth="2.2" strokeDasharray="7 6" />
      <Dot x={160} y={277} color={red} /><Dot x={495} y={47} color={red} /><Dot x={328} y={122} color={teal} />
      <line x1="328" y1="122" x2="328" y2="320" stroke={teal} strokeWidth="2" strokeDasharray="5 5" />
      <text x="139" y="305" fill={red}>u₁</text><text x="486" y="80" fill={red}>u₃</text><text x="300" y="350" fill={teal}>mean = A+B</text>
      <text x="125" y="55" fill={ink}>F″(u) = csc²(M−u) &gt; 0</text>
      <text x="128" y="380" fill={ink}>equal arguments are the unique equality case</text>
    </>
  );
}

function CycleLedger({ marker }: { marker: string }) {
  const blocks = [115, 315, 515];
  return (
    <>
      {blocks.map((base, index) => (
        <g key={base}>
          <Dot x={base - 45} y={185} /><Dot x={base} y={185} /><Dot x={base + 45} y={185} color={red} />
          <path d={`M${base - 38} 185 L${base - 7} 185 M${base + 7} 185 L${base + 38} 185`} stroke={ink} strokeWidth="2.4" markerEnd={`url(#${marker})`} />
          <path d={`M${base + 45} 170 Q${base} 98 ${base - 45} 170`} fill="none" stroke={copper} strokeWidth="3" markerEnd={`url(#${marker})`} />
          <text x={base - 25} y="90" fill={copper}>local q-cycle</text>
          <text x={base + 35} y="215" fill={red}>T{index + 1}</text>
        </g>
      ))}
      <path d="M160 205 C220 315 265 315 360 205 C410 315 465 315 560 205 C635 105 70 105 70 175" fill="none" stroke={red} strokeWidth="3.5" markerEnd={`url(#${marker})`} />
      <text x="250" y="335" fill={red}>one global cycle uses every terminal</text>
    </>
  );
}

function SparseCases({ marker }: { marker: string }) {
  return (
    <>
      <text x="95" y="45" fill={ink}>s ≤ dq: cross edge enters part-way through a block</text>
      <Dot x={105} y={125} /><Dot x={175} y={125} /><Dot x={245} y={125} color={red} />
      <Dot x={390} y={125} /><Dot x={460} y={125} /><Dot x={530} y={125} color={red} />
      <path d="M105 125 L238 125 M390 125 L523 125" stroke={ink} strokeWidth="2.5" markerEnd={`url(#${marker})`} />
      <path d="M245 145 Q320 210 390 145 M530 105 Q365 25 175 105" fill="none" stroke={red} strokeWidth="3" markerEnd={`url(#${marker})`} />
      <text x="115" y="235" fill={ink}>s &gt; dq: subdivision vertices lengthen one cross edge</text>
      <Dot x={105} y={310} /><Dot x={175} y={310} color={red} /><Dot x={320} y={310} color={copper} /><Dot x={465} y={310} /><Dot x={535} y={310} color={red} />
      <path d="M105 310 L168 310 M175 310 L313 310 M320 310 L458 310 M465 310 L528 310" stroke={ink} strokeWidth="2.5" markerEnd={`url(#${marker})`} />
      <text x="286" y="345" fill={copper}>w₁</text>
    </>
  );
}

function Squeeze({ marker }: { marker: string }) {
  return (
    <>
      <Dot x={125} y={190} color={red} r={9} /><Dot x={555} y={190} color={teal} r={9} />
      <path d="M150 160 L520 160" stroke={red} strokeWidth="3" markerEnd={`url(#${marker})`} />
      <path d="M530 220 L160 220" stroke={teal} strokeWidth="3" markerEnd={`url(#${marker})`} />
      <text x="285" y="135" fill={red}>Topic X: ρ ≤ ρ*</text>
      <text x="235" y="260" fill={teal}>realization: ρ* ≤ Rᴺ(θ) = ρ</text>
      <circle cx="340" cy="190" r="45" fill={pale} stroke={ink} strokeWidth="2.4" />
      <text x="306" y="198" fill={ink}>ρ = ρ*</text>
      <text x="120" y="335" fill={ink}>the two independent inequalities meet; strict Jensen forces β₁ = ··· = βd</text>
    </>
  );
}

const copy: Record<FigureKind, { title: string; description: string; caption: string }> = {
  eigenpolygon: { title: "An eigenvector draws an invariant polygon", description: "A large triangular convex hull contains a smaller red transformed triangle.", caption: "Plate VIII.1. Each stochastic row expresses λvᵢ as a convex average, so the transformed coordinate hull lies inside the original hull." },
  "new-shell": { title: "Two meanings of new-shell extremality", description: "Two nested radial regions and one ray ending at a point on the larger region but outside the smaller region.", caption: "Plate VIII.2. Order-newness rules out N−1 vertices; radial maximality rules out every outward N-vertex witness. The curves are a logical schematic, not a computed spectrum." },
  "farey-five": { title: "The upper Farey sequence of order five", description: "A number line marks the six reduced fractions from zero to one half and highlights the cell from one third to two fifths.", caption: "Plate IX.1. Exact rational arithmetic selects the cell before any numerical radius is computed." },
  "rooted-chord": { title: "The rooted chord identity", description: "Two colored vectors at angles A and minus B join head to tail and sum to the unit real vector.", caption: "Plate IX.2. The definitions of α and β cancel the vertical components and make the horizontal components sum to one on the anchored root sheet." },
  "terminal-three": { title: "The order-three terminal carrier", description: "A nonreal curve approaches minus one half and a real segment continues from minus one half to minus one.", caption: "Plate IX.3. The exceptional nonreal graph tends to −1/2, while the same algebraic family supplies the segment [−1,−1/2]. The curved interpolation is schematic." },
  reflection: { title: "Returning from the selected orientation", description: "A Farey interval reflects about one half while a complex point reflects across the real axis.", caption: "Plate X.1. Reflection reverses order but preserves denominators, modulus, d, e, and the absolute scalar equation." },
  jensen: { title: "Strict convexity equalizes the factors", description: "A strictly convex graph, two separated sample points, and their mean below the joining chord.", caption: "Plate X.2. The lifted phase fixes the mean argument; strict Jensen makes a common argument the unique equality profile." },
  "cycle-ledger": { title: "Local cycles or one global cycle", description: "Three deterministic blocks have local return arcs and one highlighted route through every block terminal.", caption: "Plate XI.1. Any subset of local cycles is vertex-disjoint, but the global cycle meets every terminal and cannot coexist with a local cycle." },
  "sparse-cases": { title: "The two active-order graph regimes", description: "One graph routes a cross edge into the interior of a block, while another inserts a subdivision vertex on a cross edge.", caption: "Plate XI.2. When s≤dq the entry positions shorten the global route to s; when s>dq subdivision vertices lengthen it to s." },
  squeeze: { title: "Attainment closes the upper comparison", description: "Opposing arrows show rho at most rho star and rho star at most rho, meeting at equality.", caption: "Plate XI.3. Topic X supplies one inequality; the independently constructed stochastic realizer supplies the other." },
};

export function StochasticFareyFigure({ kind }: { kind: FigureKind }) {
  const description = copy[kind];
  const marker = `sf-arrow-${kind}`;
  return (
    <figure className="topic-ii-concept-figure">
      <div className="topic-ii-concept-heading">
        <span>Deterministic mathematical plate</span>
        <span>{description.title}</span>
      </div>
      <svg role="img" aria-labelledby={`sf-${kind}-title sf-${kind}-desc`} viewBox="0 0 680 400">
        <title id={`sf-${kind}-title`}>{description.title}</title>
        <desc id={`sf-${kind}-desc`}>{description.description}</desc>
        <defs>
          <marker id={marker} markerHeight="7" markerWidth="8" orient="auto" refX="7" refY="3.5">
            <path d="M0,0 L8,3.5 L0,7 Z" fill={red} />
          </marker>
        </defs>
        {kind === "eigenpolygon" ? <Eigenpolygon marker={marker} /> : null}
        {kind === "new-shell" ? <NewShell /> : null}
        {kind === "farey-five" ? <FareyFive /> : null}
        {kind === "rooted-chord" ? <RootedChord marker={marker} /> : null}
        {kind === "terminal-three" ? <TerminalThree /> : null}
        {kind === "reflection" ? <Reflection marker={marker} /> : null}
        {kind === "jensen" ? <Jensen /> : null}
        {kind === "cycle-ledger" ? <CycleLedger marker={marker} /> : null}
        {kind === "sparse-cases" ? <SparseCases marker={marker} /> : null}
        {kind === "squeeze" ? <Squeeze marker={marker} /> : null}
      </svg>
      <figcaption>{description.caption}</figcaption>
    </figure>
  );
}
