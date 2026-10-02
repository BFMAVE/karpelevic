import type { ReactNode } from "react";
import { ReaderFigureCaption } from "./ReaderFigureCaption";

type Point = readonly [number, number];

const ink = "#18394b";
const teal = "#256977";
const red = "#a3404a";
const gold = "#94662e";
const violet = "#77548c";
const muted = "#697d85";
const pale = "#e7efed";
const paper = "#fbf8f0";

function plane([x, y]: Point, [ox, oy]: Point, scale: number): Point {
  return [ox + scale * x, oy - scale * y];
}

function points(values: readonly Point[]): string {
  return values.map(([x, y]) => `${x},${y}`).join(" ");
}

function Label({ at, children, color = ink, size = 22, anchor = "start" }: { at: Point; children: ReactNode; color?: string; size?: number; anchor?: "start" | "middle" | "end" }) {
  return <text x={at[0]} y={at[1]} fontSize={size} fill={color} textAnchor={anchor}>{children}</text>;
}

function Segment({ from, to, color = ink, dashed = false, width = 2.5, arrow }: { from: Point; to: Point; color?: string; dashed?: boolean; width?: number; arrow?: string }) {
  return <line x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} stroke={color} strokeWidth={width} strokeDasharray={dashed ? "7 6" : undefined} markerEnd={arrow ? `url(#${arrow})` : undefined} />;
}

function Dot({ at, color = ink, radius = 6 }: { at: Point; color?: string; radius?: number }) {
  return <circle cx={at[0]} cy={at[1]} r={radius} fill={color} />;
}

function Subscript({ children }: { children: ReactNode }) {
  return <tspan baselineShift="sub" fontSize="0.7em">{children}</tspan>;
}

function ExtraFigure({ id, title, description, height, children, caption }: { id: string; title: string; description: string; height: number; children: ReactNode; caption: ReactNode }) {
  const notes: Record<string, { takeaway: string; status: string }> = {
    "reader-ii-polar-correspondence": { takeaway: "Two active endpoint inequalities identify one polar vertex; moving normals moves supporting-side constraints.", status: "Exact polygon–polar correspondence, drawn from the displayed coordinates." },
    "reader-vi-network": { takeaway: "The return-index network separates the contacts preserved by construction from the one closing contact proved inward.", status: "Hypothetical skipped-return index diagram. It is not an existing invariant polygon." },
    "reader-vii-eight-state-phase": { takeaway: "The closing steps and the two factor angles together use exactly one full turn.", status: "Exact eight-state return and winding data; schematic paths and a scaled angle budget." },
  };
  return (
    <figure className="reader-teaching-figure">
      <p className="reader-figure-scroll-hint">Scroll across the diagram →</p>
      <div className="reader-figure-visual" tabIndex={0} role="region" aria-label={`${title}; scroll horizontally if needed`}>
        <svg viewBox={`0 0 760 ${height}`} role="img" aria-labelledby={`${id}-title ${id}-desc`} style={{ display: "block", width: "100%", background: paper, fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
          <title id={`${id}-title`}>{title}</title>
          <desc id={`${id}-desc`}>{description}</desc>
          <defs>
            <marker id={`${id}-arrow`} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0 0 L6 3 L0 6 Z" fill="context-stroke" />
            </marker>
          </defs>
          {children}
        </svg>
      </div>
      <ReaderFigureCaption takeaway={notes[id].takeaway} status={notes[id].status}>{caption}</ReaderFigureCaption>
    </figure>
  );
}

function PolarCorrespondence() {
  const id = "reader-ii-polar-correspondence";
  const diamond: Point[] = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const square: Point[] = [[1, 1], [-1, 1], [-1, -1], [1, -1]];
  const original = (p: Point) => plane(p, [200, 205], 110);
  const polar = (p: Point) => plane(p, [568, 205], 110);
  return (
    <ExtraFigure id={id} height={460} title="Two side endpoints determine one polar vertex" description="In the original x-plane, the diamond side joins (1,0) to (0,1) and has outward normal (1,1), since its equation is x+y=1. In the polar a-plane the first endpoint gives ax≤1 and the second gives ay≤1. The two active inequalities meet at the polar vertex a=(1,1). The two coordinate planes represent points and inequalities, respectively." caption={<>The two panels have different coordinate meanings. Left: x is an original point, and a = (1,1) is the outward normal to its highlighted side x + y = 1. Right: a is a polar point. The original endpoints give aₓ ≤ 1 and aᵧ ≤ 1; equality in both fixes the unique polar vertex (1,1). The remaining original vertices give aₓ ≥ −1 and aᵧ ≥ −1, completing P° = [−1,1]². This exact diamond example illustrates the finite-inequality proof that every original side corresponds to one polar vertex.</>}>
      <Label at={[200, 35]} anchor="middle">Original points x</Label>
      <Label at={[568, 35]} anchor="middle">Polar inequalities a</Label>
      <Segment from={[65, 205]} to={[340, 205]} color={muted} width={1} />
      <Segment from={[200, 60]} to={[200, 330]} color={muted} width={1} />
      <polygon points={points(diamond.map(original))} fill={pale} stroke={teal} strokeWidth={2.5} />
      <Segment from={original([1, 0])} to={original([0, 1])} color={ink} width={5} />
      <Segment from={original([0, 0])} to={original([1, 1])} color={teal} width={3} arrow={`${id}-arrow`} />
      <Dot at={original([1, 0])} color={red} />
      <Dot at={original([0, 1])} color={gold} />
      <Dot at={original([0, 0])} color={muted} radius={4} />
      <Label at={[330, 213]} color={red} size={21}>(1,0)</Label>
      <Label at={[185, 82]} color={gold} anchor="end" size={21}>(0,1)</Label>
      <Label at={[288, 74]} color={teal} anchor="middle" size={20}>normal (1,1)</Label>
      <Label at={[183, 228]} size={19}>0</Label>
      <Label at={[300, 265]} size={20}>x+y=1</Label>
      <Segment from={[430, 205]} to={[715, 205]} color={muted} width={1} />
      <Segment from={[568, 62]} to={[568, 330]} color={muted} width={1} />
      <polygon points={points(square.map(polar))} fill={pale} stroke={teal} strokeWidth={2.5} />
      <Segment from={polar([1, -1])} to={polar([1, 1])} color={red} width={4} />
      <Segment from={polar([-1, 1])} to={polar([1, 1])} color={gold} width={4} />
      <Dot at={polar([1, 1])} color={ink} radius={7} />
      <Label at={[697, 108]} size={22}>a</Label>
      <Label at={[694, 231]} color={red} size={20}>aₓ=1</Label>
      <Label at={[568, 81]} color={gold} anchor="middle" size={20}>aᵧ=1</Label>
      <Label at={[568, 346]} anchor="middle" size={21}>a=(1,1) is a vertex of P°</Label>
      <Label at={[380, 393]} anchor="middle" size={23} color={red}>(1,0) gives a·(1,0)≤1, hence aₓ≤1</Label>
      <Label at={[380, 433]} anchor="middle" size={23} color={gold}>(0,1) gives a·(0,1)≤1, hence aᵧ≤1</Label>
    </ExtraFigure>
  );
}

function SkippedReturnNetwork() {
  const id = "reader-vi-network";
  const phi = 7;
  const columns = Array.from({ length: phi }, (_, i) => 1 + i);
  const x = (j: number) => 125 + 85 * (j - 1);
  const baseColor = (j: number) => j === 1 ? gold : j <= 3 ? teal : muted;
  const sideColor = (j: number) => j === 4 ? gold : j === 2 || j === 3 ? violet : j === 5 || j === 6 ? teal : muted;
  const height = (j: number) => j <= 4 ? 2 : 3;
  const target = (j: number) => 1 + ((j + 2) % phi);
  const bracket = (left: number, right: number, y: number, color: string) => <path d={`M${left} ${y + 9} V${y} H${right} V${y + 9}`} fill="none" stroke={color} strokeWidth={2} />;
  return (
    <ExtraFigure id={id} height={795} title="A skipped return separates moving sources from moving side lines" description="This is the source paper's hypothetical arithmetic scheme N=17, kappa=10, phi=7, Delta=3, q=2, h=1. Moving bases 1,2,3 target sides 4,5,6. Internal moving sides 2,3 instead have fixed sources 6,7. Each base's tower advances by 10 modulo17; the first four towers have height2 and the last three have height3. Orange tower1 closes to moving side4; blue towers2,3 close to fixed side lines5,6; violet contacts on moving side lines2,3 come from fixed towers6,7. This diagram does not claim an extremal polygon with a skipped return exists." caption={<>Hypothetical skipped-return data from the paper: (N, κ, φ, Δ, q, h) = (17,10,7,3,2,1), with σ(j) = j + 3 modulo 7. M = {'{1,2,3}'} and σ(M) = {'{4,5,6}'} are separated from the internal moving sides J = {'{2,3}'}. Solid arrows are vertex equalities under F; dashed arrows end at side contacts. The blue towers move but return to fixed side lines. The violet contacts have fixed sources and moving side lines. Only the orange pair has both source and side line moving, and its contact opens inward. Uncoloured towers stay fixed. This is an index and incidence diagram for the contradiction construction, not an invariant polygon with Δ &gt; 1.</>}>
      <Label at={[380, 35]} anchor="middle">Check the contact network before extending the motion</Label>
      <Label at={[380, 67]} anchor="middle" size={20}>σ(j)=j+3 modulo 7; qφ+hΔ=2·7+1·3=17</Label>
      <g transform="translate(0 20)">
      {bracket(x(1) - 24, x(3) + 24, 92, teal)}
      <Label at={[x(2), 85]} anchor="middle" color={teal} size={20}>M: moving bases</Label>
      <Label at={[25, 134]} size={21}>bases</Label>
      {columns.map((j) => <g key={`base-${j}`}>
        <circle cx={x(j)} cy={126} r={21} fill={j <= 3 ? pale : paper} stroke={baseColor(j)} strokeWidth={2.5} />
        <Label at={[x(j), 134]} anchor="middle" color={baseColor(j)}>{j}</Label>
      </g>)}
      <Label at={[380, 177]} anchor="middle" size={20}>A target index names a side contact, not a vertex equality</Label>
      <Label at={[25, 237]} size={21}>sides</Label>
      {columns.map((j) => <g key={`side-${j}`}>
        <rect x={x(j) - 29} y={209} width={58} height={41} rx={5} fill={paper} stroke={sideColor(j)} strokeWidth={2.5} />
        <Label at={[x(j), 238]} anchor="middle" color={sideColor(j)}>E<Subscript>{j}</Subscript></Label>
      </g>)}
      {bracket(x(2) - 29, x(3) + 29, 270, violet)}
      {bracket(x(4) - 29, x(6) + 29, 270, teal)}
      <Label at={[(x(2) + x(3)) / 2, 311]} anchor="middle" color={violet} size={21}>J={'{2,3}'}</Label>
      <Label at={[x(5), 311]} anchor="middle" color={teal} size={21}>σ(M)={'{4,5,6}'}</Label>
      <Label at={[380, 350]} anchor="middle">Each moved base carries its whole tower</Label>
      {[0, 1, 2].map((t) => <Label key={t} at={[29, 398 + 70 * t]} size={21}>t={t}</Label>)}
      {columns.map((j) => <g key={`tower-${j}`}>
        {Array.from({ length: height(j) }, (_, t) => {
          const at: Point = [x(j), 390 + 70 * t];
          const index = (j + 10 * t) % 17;
          return <g key={t}>
            {t > 0 && <Segment from={[x(j), at[1] - 49]} to={[x(j), at[1] - 23]} color={baseColor(j)} arrow={`${id}-arrow`} />}
            <circle cx={at[0]} cy={at[1]} r={22} fill={j <= 3 ? pale : paper} stroke={baseColor(j)} strokeWidth={2.5} />
            <Label at={[at[0], at[1] + 7]} anchor="middle" color={baseColor(j)}>v<Subscript>{index}</Subscript></Label>
          </g>;
        })}
        <Segment from={[x(j), 412 + 70 * (height(j) - 1)]} to={[x(j), 586]} color={sideColor(target(j))} dashed arrow={`${id}-arrow`} />
        <rect x={x(j) - 29} y={590} width={58} height={43} rx={5} fill={paper} stroke={sideColor(target(j))} strokeWidth={2.5} />
        <Label at={[x(j), 618]} anchor="middle" color={sideColor(target(j))}>c<Subscript>{target(j)}</Subscript></Label>
      </g>)}
      <Label at={[22, 616]} size={17}>contacts</Label>
      <Dot at={[80, 671]} color={violet} />
      <Label at={[102, 678]} color={violet} size={21}>Fixed source, moving side line: c₂ and c₃</Label>
      <Dot at={[80, 708]} color={teal} />
      <Label at={[102, 715]} color={teal} size={21}>Moving source, fixed side line: c₅ and c₆</Label>
      <Dot at={[80, 745]} color={gold} />
      <Label at={[102, 752]} color={gold} size={21}>Both move: c₄ is the exceptional closing contact</Label>
      </g>
    </ExtraFigure>
  );
}

function EightStatePhase() {
  const id = "reader-vii-eight-state-phase";
  const rows = [
    { y: 121, label: "q=3 from v₀", vertices: [0, 3, 6], contact: 1 },
    { y: 201, label: "q=3 from v₁", vertices: [1, 4, 7], contact: 2 },
    { y: 281, label: "e=2 closing", vertices: [2, 5, 0], contact: null },
  ];
  const columns = [245, 375, 505, 635];
  const start = 84;
  const length = 590;
  const one = length / 7;
  return (
    <ExtraFigure id={id} height={600} title="The eight-state return paths keep the full closing turn" description="For N=8 and kappa=3, two three-step paths are v0 to v3 to v6 to contact c1, and v1 to v4 to v7 to contact c2. The two-step vertex closing path is v2 to v5 to v0. Its continued final label is v8, so Phi2+2theta=Phi8=Phi0+2pi. Resolving the two contacts gives factor angles u1 and u2, and the exact real identity is 2theta+u1+u2=2pi. The lower bar shows the exact angular check theta=5pi/7 and u1=u2=2pi/7, whose positive pieces sum to one full turn; these angle data alone are not an existence proof." caption={<>Continuation of Topic V, with N = 8, κ = 3, q = 3, m = 2 and e = 2. Solid arrows end at vertices; dashed arrows end at interior side contacts. Resolving c₁ and c₂ into their two endpoints gives the factors ζ³ − β₁ and ζ³ − β₂. Their arguments are the base-side increments u₁ and u₂. The closing path gives Φ₂ + 2θ = Φ₈ = Φ₀ + 2π, so 2θ + u₁ + u₂ = 2π as a real equality. The bar uses the checked values θ = 5π/7 and u₁ = u₂ = 2π/7. It illustrates the angle budget; the index and angle data alone do not prove feasibility or extremality.</>}>
      <Label at={[380, 35]} anchor="middle">Split the five-step return at its intermediate vertex v₀</Label>
      <Label at={[380, 70]} anchor="middle" size={20}>Each arrow is one multiplication by ζ</Label>
      {rows.map(({ y, label, vertices, contact }) => <g key={y}>
        <Label at={[27, y + 8]} size={21}>{label}</Label>
        {vertices.map((v, i) => <g key={i}>
          {i > 0 && <Segment from={[columns[i - 1] + 23, y]} to={[columns[i] - 25, y]} color={teal} arrow={`${id}-arrow`} />}
          <circle cx={columns[i]} cy={y} r={22} fill={pale} stroke={teal} strokeWidth={2.5} />
          <Label at={[columns[i], y + 7]} anchor="middle" color={teal}>v<Subscript>{v}</Subscript></Label>
        </g>)}
        {contact !== null ? <>
          <Segment from={[columns[2] + 23, y]} to={[columns[3] - 37, y]} color={red} dashed arrow={`${id}-arrow`} />
          <rect x={columns[3] - 33} y={y - 23} width={66} height={46} rx={5} fill={paper} stroke={red} strokeWidth={2.5} />
          <Label at={[columns[3], y + 7]} anchor="middle" color={red}>c<Subscript>{contact}</Subscript></Label>
        </> : <Label at={[580, y + 7]} color={teal} size={20}>vertex closing</Label>}
      </g>)}
      <Label at={[380, 341]} anchor="middle" size={23}>ζ³v₀=c₁,  ζ³v₁=c₂,  ζ²v₂=v₀</Label>
      <Label at={[380, 386]} anchor="middle">Real angles retain the full closing turn</Label>
      <Label at={[380, 423]} anchor="middle" size={21}>Angular check: θ=5π/7 and u₁=u₂=2π/7</Label>
      <rect x={start} y={452} width={one} height={43} fill={teal} />
      <rect x={start + one} y={452} width={one} height={43} fill={red} />
      <rect x={start + 2 * one} y={452} width={5 * one} height={43} fill={gold} />
      <Label at={[start + one / 2, 481]} anchor="middle" color={paper}>u₁</Label>
      <Label at={[start + 1.5 * one, 481]} anchor="middle" color={paper}>u₂</Label>
      <Label at={[start + 4.5 * one, 481]} anchor="middle" color={paper}>2θ: the vertex closing path</Label>
      {[{ t: 0, label: "0" }, { t: 1 / 7, label: "2π/7" }, { t: 2 / 7, label: "4π/7" }, { t: 1, label: "2π" }].map(({ t, label }) => <g key={t}>
        <Segment from={[start + length * t, 496]} to={[start + length * t, 505]} width={1.5} />
        <Label at={[start + length * t, 535]} anchor="middle" size={20}>{label}</Label>
      </g>)}
      <Label at={[380, 581]} anchor="middle" size={23}>10π/7 + 2π/7 + 2π/7 = 2π</Label>
    </ExtraFigure>
  );
}

export function ReaderEarlyExtra({ number }: { number: number }) {
  switch (number) {
    case 2: return <PolarCorrespondence />;
    case 6: return <SkippedReturnNetwork />;
    case 7: return <EightStatePhase />;
    default: return null;
  }
}
