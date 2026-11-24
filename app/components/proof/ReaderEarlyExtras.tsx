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
    "reader-ii-polar-correspondence": { takeaway: "The endpoints (1,0) and (0,1) give two inequalities on the normal a. Making both equalities fixes one point in the polar square.", status: "The diamond and its polar square are drawn from their vertex coordinates." },
    "reader-vi-network": { takeaway: "Follow tower 1 to side 4. Both its source and its destination line move. For the blue and violet contacts, only one of those two moves.", status: "Hypothetical skipped-return index diagram. Its labels describe the configuration assumed in the proof by contradiction." },
    "reader-vii-eight-state-phase": { takeaway: "Look at the last label of the closing path. Writing it as 8 records the full turn that would disappear if we immediately wrote 0.", status: "The tower labels and angle sum are exact. The paths show the order of the steps, and the lengths of the coloured angle bars are proportional to their angles." },
  };
  return (
    <figure className="reader-teaching-figure">
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
    <ExtraFigure id={id} height={460} title="Two side endpoints determine one polar vertex" description="Two coordinate planes are shown. On the left the segment from (1,0) to (0,1) lies on x+y=1 and has outward normal (1,1). On the right the two endpoints give the lines aₓ=1 and aᵧ=1. These lines intersect at the corner (1,1) of the polar square." caption={<>In the left panel x lies in the diamond. The highlighted side consists of the points where (1,1) · x = 1. In the right panel let the normal a vary and keep the two endpoints fixed. The condition at (1,0) is aₓ ≤ 1, while (0,1) gives aᵧ ≤ 1. Equality at both endpoints singles out a = (1,1), now a point of the polar. The other two vertices give aₓ ≥ −1 and aᵧ ≥ −1, so the whole polar is the square [−1,1]².</>}>
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
    <ExtraFigure id={id} height={795} title="A skipped return separates moving sources from moving side lines" description="Seven tower bases are linked to their return sides by adding 3 modulo 7. The first four towers have height two, and the remaining three have height three. The orange tower starts at moving base 1 and ends on moving side 4. Blue towers from bases 2 and 3 end on fixed lines 5 and 6. Violet contacts on moving lines 2 and 3 come from the fixed towers at bases 6 and 7. These are hypothetical return labels used to test what a skipped return would require." caption={<>Take N = 17, κ = 10, φ = 7, Δ = 3, q = 2 and h = 1. The return rule σ adds three among the seven bases. Moving bases 1, 2 and 3 therefore affects the towers ending on sides 4, 5 and 6. The two sides between the moving bases have labels 2 and 3 and receive points from fixed towers 6 and 7. Read a solid arrow as an image equal to a vertex, and a dashed arrow as an image on a side. In blue the source moves while the destination line stays fixed. In violet the line moves through a fixed contact. Only at the orange contact c₄ do both move. The proof shows that this last return goes inward. The uncoloured towers stay fixed.</>}>
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
    <ExtraFigure id={id} height={600} title="The eight-state return paths keep the full closing turn" description="The first two rows follow three steps from v₀ through v₃ and v₆ to c₁, and from v₁ through v₄ and v₇ to c₂. The last row takes v₂ through v₅ to v₀ in two steps. Continuing the labels gives v₈ at that last position, with angle Φ₀ + 2π. Below the paths, two increments of 5π/7 and two of 2π/7 fill one full turn." caption={<>Use the eight vertices of Topic V, with κ = 3, q = 3 and m = e = 2. The last arrow in each of the first two paths reaches a side. Resolving the contacts c₁ and c₂ into averages gives the factors ζ³ − β₁ and ζ³ − β₂ and their angles u₁ and u₂ along the bases. The closing path takes two vertex steps. Its labels continue from 2 to 5 to 8, so Φ₂ + 2θ = Φ₈ = Φ₀ + 2π. Together the three paths therefore give 2θ + u₁ + u₂ = 2π. In the bar, θ = 5π/7 and u₁ = u₂ = 2π/7 make this equality visible. We still need the matrix construction and the radius bound to identify a boundary point.</>}>
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
