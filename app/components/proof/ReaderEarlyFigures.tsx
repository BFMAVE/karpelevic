import type { ReactNode } from "react";

type Point = readonly [number, number];

const ink = "#18394b";
const teal = "#256977";
const red = "#a3404a";
const gold = "#94662e";
const pale = "#e7efed";
const paper = "#fbf8f0";
const muted = "#697d85";

function points(values: readonly Point[]): string {
  return values.map(([x, y]) => `${x},${y}`).join(" ");
}

function plane([x, y]: Point, [ox, oy]: Point, scale: number): Point {
  return [ox + scale * x, oy - scale * y];
}

function Dot({ at, color = ink, open = false, radius = 6 }: { at: Point; color?: string; open?: boolean; radius?: number }) {
  return <circle cx={at[0]} cy={at[1]} r={radius} fill={open ? paper : color} stroke={color} strokeWidth={2.5} />;
}

function Label({ at, children, color = ink, anchor = "start", size = 23 }: { at: Point; children: ReactNode; color?: string; anchor?: "start" | "middle" | "end"; size?: number }) {
  return <text x={at[0]} y={at[1]} fill={color} textAnchor={anchor} fontSize={size}>{children}</text>;
}

function Segment({ from, to, color = ink, dashed = false, width = 2.5, arrow }: { from: Point; to: Point; color?: string; dashed?: boolean; width?: number; arrow?: string }) {
  return <line x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} stroke={color} strokeWidth={width} strokeDasharray={dashed ? "7 6" : undefined} markerEnd={arrow ? `url(#${arrow})` : undefined} />;
}

function TeachingFigure({ id, title, description, height, children, caption, controls }: { id: string; title: string; description: string; height: number; children: ReactNode; caption: ReactNode; controls?: ReactNode }) {
  return (
    <figure className="reader-teaching-figure">
      <p className="reader-figure-scroll-hint">Scroll across the diagram →</p>
      {controls}
      <div className="reader-figure-visual" tabIndex={0} role="region" aria-label={`${title}; scroll horizontally if needed`}>
        <svg viewBox={`0 0 660 ${height}`} role="img" aria-labelledby={`${id}-title ${id}-desc`} style={{ display: "block", width: "100%", background: paper, fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
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
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function AveragingPolygon() {
  const id = "reader-i-averaging";
  const origin: Point = [210, 175];
  const vertices: Point[] = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const images: Point[] = [[0.5, 0.5], [-0.5, 0.5], [-0.5, -0.5], [0.5, -0.5]];
  const map = (p: Point) => plane(p, origin, 120);
  return (
    <TeachingFigure id={id} height={350} title="A matrix row is a geometric averaging instruction" description="The diamond with vertices 1, i, minus 1, minus i contains its image under lambda equals (1+i)/2. The images are exactly the four side midpoints. An arrow sends the vertex 1 to the midpoint of the side joining 1 and i." caption={<>Exact invariant example: A = (I + C)/2 and v = (1, i, −1, −i)ᵀ give Av = ((1 + i)/2)v. The blue diamond contains the red image square because each image is a side midpoint. The illustration establishes containment; the general boundary proof must still establish maximality.</>}>
      <Segment from={[55, 175]} to={[357, 175]} color={muted} width={1} />
      <Segment from={[210, 25]} to={[210, 325]} color={muted} width={1} />
      <polygon points={points(vertices.map(map))} fill={pale} stroke={teal} strokeWidth={3} />
      <polygon points={points(images.map(map))} fill={red} fillOpacity={0.12} stroke={red} strokeWidth={3} />
      <Segment from={map([1, 0])} to={map([0.5, 0.5])} color={gold} width={3} arrow={`${id}-arrow`} />
      <Segment from={origin} to={map([0.5, 0.5])} color={gold} dashed width={1.5} />
      {vertices.map((p, j) => <Dot key={`v-${j}`} at={map(p)} color={teal} />)}
      {images.map((p, j) => <Dot key={`c-${j}`} at={map(p)} color={red} />)}
      <Label at={[345, 180]}>1</Label>
      <Label at={[210, 38]} anchor="middle">i</Label>
      <Label at={[55, 184]}>−1</Label>
      <Label at={[210, 330]} anchor="middle">−i</Label>
      <Label at={[195, 199]} size={20}>0</Label>
      <Label at={[285, 102]} color={red}>(1+i)/2</Label>
      <Label at={[402, 73]} color={teal}>original P</Label>
      <Label at={[402, 112]} color={red}>image λP</Label>
      <Label at={[402, 182]}>λ = (1+i)/2</Label>
      <Label at={[402, 224]}>rotation: 45°</Label>
      <Label at={[402, 266]}>scale: 1/√2</Label>
      <Label at={[330, 340]} anchor="middle" size={21}>row 1: average 1 and i with weights 1/2, 1/2</Label>
    </TeachingFigure>
  );
}

function InteriorAndPolar() {
  const id = "reader-ii-polar";
  const diamond: Point[] = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const square: Point[] = [[1, 1], [-1, 1], [-1, -1], [1, -1]];
  const contactImage: Point[] = [[0.5, 0.5], [-0.5, 0.5], [-0.5, -0.5], [0.5, -0.5]];
  const interiorImage: Point[] = [[0.25, 0.25], [-0.25, 0.25], [-0.25, -0.25], [0.25, -0.25]];
  const left = (p: Point) => plane(p, [165, 195], 108);
  const right = (p: Point) => plane(p, [490, 195], 108);
  return (
    <TeachingFigure id={id} height={355} title="Interior slack and polar side contact are different geometric tests" description="On the left, the image of a diamond under (1+i)/4 is strictly interior, while doubling the multiplier reaches the side midpoints. On the right, the diamond's polar is a square. For the contact multiplier (1+i)/2 the adjoint maps polar vertex (1,1) to the polar boundary point (1,0), certifying contact with the original side x+y=1." caption={<>Left: ζ₀ = (1 + i)/4 has room to move outward in this polygon; its image coordinate (1 + i)/4 has positive weights 3/8, 3/8, 1/8, 1/8 on all four vertices. It therefore illustrates the nonextremal interior case. Right: for the contact multiplier ζ = (1 + i)/2, P° is the square and T* sends a = (1,1) to (1,0). The equality (T*a) · (1,0) = 1 says that T(1,0) = (1/2,1/2) touches the original side x + y = 1.</>}>
      <Label at={[165, 40]} anchor="middle">Interior image</Label>
      <Label at={[490, 40]} anchor="middle">Polar contact</Label>
      <polygon points={points(diamond.map(left))} fill={pale} stroke={teal} strokeWidth={3} />
      <polygon points={points(contactImage.map(left))} fill="none" stroke={gold} strokeWidth={2.5} strokeDasharray="7 6" />
      <polygon points={points(interiorImage.map(left))} fill={red} fillOpacity={0.15} stroke={red} strokeWidth={3} />
      <Segment from={left([0.25, 0.25])} to={left([0.5, 0.5])} color={gold} width={3} arrow={`${id}-arrow`} />
      <Dot at={left([0.25, 0.25])} color={red} />
      <Label at={[165, 331]} anchor="middle">ζ₀P ⊂ interior P</Label>
      <polygon points={points(square.map(right))} fill={pale} stroke={teal} strokeWidth={3} />
      <polygon points={points(diamond.map(right))} fill={gold} fillOpacity={0.1} stroke={gold} strokeWidth={3} />
      <Dot at={right([1, 1])} color={teal} />
      <Dot at={right([1, 0])} color={red} />
      <Segment from={right([1, 1])} to={right([1, 0])} color={red} width={3} arrow={`${id}-arrow`} />
      <Label at={[485, 72]} anchor="middle" color={teal}>a = (1,1)</Label>
      <Label at={[612, 207]} color={red}>T*a</Label>
      <Label at={[490, 331]} anchor="middle">P° = [−1,1]²</Label>
    </TeachingFigure>
  );
}

function HalfOpenAssignment() {
  const id = "reader-iii-half-open";
  const start: Point = [65, 253];
  const shared: Point = [330, 65];
  const end: Point = [595, 253];
  const contact: Point = [(start[0] + shared[0]) / 2, (start[1] + shared[1]) / 2];
  return (
    <TeachingFigure id={id} height={425} title="The incoming half-open side owns the shared corner" description="Two adjacent sides share vertex vi. The incoming blue side excludes its starting vertex and includes vi. The outgoing gold side excludes vi and includes its own ending vertex. The red midpoint contact belongs to the incoming side. Separate interval diagrams below show that the shared corner is counted once." caption={<>An endpoint convention changes the assignment, not the polygon. The side (vᵢ₋₁, vᵢ] includes the shared corner vᵢ; the next side (vᵢ, vᵢ₊₁] excludes it. The red midpoint is an interior contact with αᵢ = βᵢ = 1/2. This local diagram illustrates membership; the cut argument proves that one consistent convention assigns all image vertices simultaneously.</>}>
      <Segment from={start} to={shared} color={teal} width={4} />
      <Segment from={shared} to={end} color={gold} width={4} />
      <Dot at={start} color={teal} open />
      <Dot at={shared} color={gold} open radius={11} />
      <Dot at={shared} color={teal} radius={5} />
      <Dot at={end} color={gold} />
      <Dot at={contact} color={red} />
      <Label at={[330, 34]} anchor="middle">vᵢ</Label>
      <Label at={[65, 289]} anchor="middle">vᵢ₋₁</Label>
      <Label at={[595, 289]} anchor="middle">vᵢ₊₁</Label>
      <Label at={[118, 103]} color={teal}>incoming</Label>
      <Label at={[435, 103]} color={gold}>outgoing</Label>
      <Label at={[142, 223]} color={red}>cᵢ</Label>
      <Segment from={[60, 348]} to={[280, 348]} color={teal} width={3} />
      <Dot at={[60, 348]} color={teal} open />
      <Dot at={[280, 348]} color={teal} />
      <Segment from={[380, 348]} to={[600, 348]} color={gold} width={3} />
      <Dot at={[380, 348]} color={gold} open />
      <Dot at={[600, 348]} color={gold} />
      <Label at={[170, 389]} anchor="middle" color={teal}>(vᵢ₋₁, vᵢ]</Label>
      <Label at={[490, 389]} anchor="middle" color={gold}>(vᵢ, vᵢ₊₁]</Label>
    </TeachingFigure>
  );
}

function LocalReplacement() {
  const id = "reader-iv-replacement";
  const old: Point[] = [[0, 0], [2, 2], [4, 0], [4, -1.5], [0, -1.5]];
  const next: Point[] = [[0, 0], [1, 1], [4, 0], [4, -1.5], [0, -1.5]];
  const removed: Point[] = [[1, 1], [2, 2], [4, 0]];
  const left = (p: Point) => plane(p, [70, 240], 50);
  const right = (p: Point) => plane(p, [400, 240], 50);
  return (
    <TeachingFigure id={id} height={450} title="A factor reversal replaces one corner and transfers its positive weight" description="A convex polygon corner vi is replaced by the midpoint ci on its preceding side, forming a proper subpolygon. The removed corner and old edges are dashed. The displayed permitted coefficient transfer changes alpha at i from one half to one and alpha at i+kappa from one to one half, preserving one positive logarithmic weight." caption={<>The corner diagram is a local geometric model: cᵢ is the midpoint of vᵢ₋₁vᵢ. In the proof, βᵢ &gt; 0, βᵢ₊₁ = 0 and the factor reversal establish that this move preserves invariance and the eigenvalue. The permitted numerical transfer takes αᵢ = 1/2 and αᵢ₊κ = 1 to 1 and 1/2: the weight log 2 changes its index without changing the contact count. A positive target weight would instead merge two contacts, which minimum count forbids.</>}>
      <Label at={[170, 50]} anchor="middle">Before</Label>
      <Label at={[500, 50]} anchor="middle">After</Label>
      <polygon points={points(old.map(left))} fill={pale} stroke={teal} strokeWidth={3} />
      <polygon points={points(next.map(right))} fill={pale} stroke={red} strokeWidth={3} />
      <polyline points={points(removed.map(right))} fill="none" stroke={gold} strokeWidth={2.5} strokeDasharray="7 6" />
      <polygon points={points(removed.map(right))} fill={gold} fillOpacity={0.12} />
      <Dot at={left([1, 1])} color={red} />
      <Dot at={left([2, 2])} color={teal} />
      <Dot at={right([1, 1])} color={red} />
      <Dot at={right([2, 2])} color={gold} open />
      <Label at={[170, 123]} anchor="middle">vᵢ</Label>
      <Label at={[91, 188]} color={red}>cᵢ</Label>
      <Label at={[58, 271]} anchor="end" size={20}>vᵢ₋₁</Label>
      <Label at={[282, 271]} anchor="start" size={20}>vᵢ₊₁</Label>
      <Label at={[388, 271]} anchor="end" size={20}>vᵢ₋₁</Label>
      <Label at={[612, 271]} anchor="start" size={20}>vᵢ₊₁</Label>
      <Label at={[500, 119]} anchor="middle" color={gold}>removed</Label>
      <Label at={[429, 179]} color={red}>v′ᵢ = cᵢ</Label>
      <Segment from={[315, 245]} to={[365, 245]} color={ink} arrow={`${id}-arrow`} />
      <Label at={[330, 386]} anchor="middle">αᵢ: 1/2 → 1</Label>
      <Label at={[330, 425]} anchor="middle">αᵢ₊κ: 1 → 1/2</Label>
    </TeachingFigure>
  );
}

function RecordsAndTowers() {
  const id = "reader-v-towers";
  const residues = [0, 3, 6, 1, 4, 7, 2, 5];
  const records = new Set([0, 1, 2, 5]);
  const chart = (t: number, r: number): Point => [85 + 68 * t, 245 - 21 * r];
  const towers = [{ x: 215, values: [1, 4, 7], contact: "c₂", height: 3 }, { x: 455, values: [2, 5, 0, 3, 6], contact: "c₁", height: 5 }];
  return (
    <TeachingFigure id={id} height={615} title="Record residues determine two towers that cover all eight indices" description="For N=8 and kappa=3, residues are 0,3,6,1,4,7,2,5. Records occur at times 0,1,2,5. The record deficits 2 and 1 give q=3, h=2 and Delta=1. Towers contain vertices 1,4,7 and 2,5,0,3,6, then return to interior contacts on sides 2 and 1." caption={<>Exact index arithmetic, N = 8 and κ = 3. The red residues are records. Deficit 2 at time h = 2 and the next deficit 1 at time 5 give q = 3 and Δ = 1. The two towers have heights 3 and 5 and contain eight distinct vertex indices. Their terminal red boxes are side contacts c₂ and c₁, not vertex equalities. This arithmetic diagram does not assert the existence of an extremal polygon with the specified contact data.</>}>
      <Label at={[330, 35]} anchor="middle">Residues [3t]₈</Label>
      <Segment from={[66, 245]} to={[615, 245]} color={muted} width={1.5} />
      <Segment from={[66, 245]} to={[66, 60]} color={muted} width={1.5} />
      {[0, 4, 8].map((r) => <Label key={r} at={[50, 253 - 21 * r]} anchor="end" size={20}>{r}</Label>)}
      <polyline points={points(residues.map((r, t) => chart(t, r)))} fill="none" stroke={muted} strokeWidth={2} strokeDasharray="5 5" />
      {residues.map((r, t) => <g key={t}><Dot at={chart(t, r)} color={records.has(t) ? red : teal} /><Label at={[chart(t, r)[0], chart(t, r)[1] - 17]} anchor="middle" color={records.has(t) ? red : teal}>{r}</Label><Label at={[chart(t, r)[0], 275]} anchor="middle" size={20}>{t}</Label></g>)}
      <Label at={[613, 275]} size={20}>t</Label>
      <Label at={[330, 318]} anchor="middle">Tower bases: 1 and 2</Label>
      {towers.map(({ x, values, contact, height }) => <g key={x}>
        {values.map((v, j) => {
          const y = 355 + 39 * j;
          return <g key={v}>
            {j > 0 && <Segment from={[x, y - 30]} to={[x, y - 11]} color={teal} width={2} arrow={`${id}-arrow`} />}
            <circle cx={x} cy={y} r={14} fill={j === 0 ? pale : paper} stroke={teal} strokeWidth={2} />
            <Label at={[x, y + 8]} anchor="middle">{v}</Label>
          </g>;
        })}
        <Segment from={[x, 369 + 39 * (values.length - 1)]} to={[x, 385 + 39 * (values.length - 1)]} color={red} width={2} dashed arrow={`${id}-arrow`} />
        <rect x={x - 35} y={392 + 39 * (values.length - 1)} width={70} height={35} rx={5} fill={red} fillOpacity={0.12} stroke={red} strokeWidth={2} />
        <Label at={[x, 418 + 39 * (values.length - 1)]} anchor="middle" color={red}>{contact}</Label>
        <Label at={[x - 63, 403]} anchor="end" size={21}>H = {height}</Label>
      </g>)}
      <Label at={[330, 605]} anchor="middle">3 + 5 = 8 distinct tower positions</Label>
    </TeachingFigure>
  );
}

function ProjectionChain() {
  const id = "reader-vi-projection";
  const map = (p: Point) => plane(p, [75, 375], 105);
  const xs: Point[] = [[0, 0], [1, 0], [2, 1], [3, 3]];
  const c2: Point = [1.5, 0.5];
  const c3: Point = [2.5, 2];
  const z: Point = [12 / 7, 4 / 7];
  const final: Point = [33 / 14, 25 / 14];
  const controls = (
    <div className="reader-projection-controls" data-projection-controls hidden role="group" aria-label="Projection construction steps">
      <button type="button" data-projection-step="1" aria-pressed="false">1. The chain</button>
      <button type="button" data-projection-step="2" aria-pressed="false">2. First projection</button>
      <button type="button" data-projection-step="3" aria-pressed="true">3. Closing projection</button>
      <p data-projection-status aria-live="polite">The complete projection chain is visible.</p>
    </div>
  );
  return (
    <TeachingFigure id={id} height={440} controls={controls} title="An exact two-step projection chain lands strictly between the closing contacts" description="The convex quadrilateral has vertices (0,0),(1,0),(2,1),(3,3). The line L2 has equation y=3x/2−2 and exposes X2. Projection from X0 through C2=(3/2,1/2) meets L2 at Z2=(12/7,4/7). Projection from Z2 through X3 onto the contact line C2C3 meets it at (33/14,25/14), strictly between C2 and C3. Starting at X1 gives X2 and then C3." caption={<>The source&apos;s exact projection model, with ℓ = 2. Blue vertices form a convex quadrilateral; the dashed teal line exposes X₂. Following the red projection path from X₀ gives Z₂ = (12/7,4/7), then Π(X₀) = (33/14,25/14) = C₃ + (C₂ − C₃)/7 on the gold contact line. Starting at X₁ instead gives X₂ and C₃. This illustrates the chain lemma, not an invariant polygon for a specified eigenvalue.</>}>
      <polygon points={points(xs.map(map))} fill={pale} stroke={ink} strokeWidth={2.5} />
      <Segment from={map([1.1, -0.35])} to={map([3.15, 2.725])} color={teal} dashed />
      <Segment from={map([1.1, -0.1])} to={map([3.15, 2.975])} color={gold} width={3} />
      {xs.map((p, j) => <Dot key={j} at={map(p)} />)}
      <Dot at={map(c2)} color={gold} />
      <Dot at={map(c3)} color={gold} />
      <g data-projection-phase="2">
        <Segment from={map(xs[0])} to={map(z)} color={red} width={3} />
        <Dot at={map(z)} color={red} />
        <Segment from={map(z)} to={[284, 349]} color={red} width={1.2} />
        <Label at={[290, 363]} color={red}>Z₂</Label>
      </g>
      <g data-projection-phase="3">
        <Segment from={map(z)} to={map(xs[3])} color={red} width={3} />
        <Dot at={map(final)} color={red} radius={7} />
        <Segment from={map(final)} to={[457, 235]} color={red} width={1.2} />
        <Label at={[465, 242]} color={red}>Π(X₀)</Label>
      </g>
      <Label at={[58, 407]}>X₀</Label>
      <Label at={[144, 408]}>X₁</Label>
      <Label at={[300, 290]}>X₂</Label>
      <Label at={[410, 59]}>X₃</Label>
      <Label at={[212, 360]} color={gold}>C₂</Label>
      <Label at={[349, 152]} color={gold}>C₃</Label>
      <Label at={[467, 103]} color={teal}>L₂</Label>
      <Label at={[467, 150]} color={gold}>K = C₂C₃</Label>
      <Label at={[330, 34]} anchor="middle">Intersections keep the contacts fixed</Label>
    </TeachingFigure>
  );
}

function QuadraticClosing() {
  const id = "reader-vi-closing";
  const xy = (t: number, value: number): Point => [78 + ((t + 0.08) / 0.22) * 482, 298 - ((value + 0.18) / 0.34) * 228];
  const samples = Array.from({ length: 89 }, (_, j) => -0.08 + (0.22 * j) / 88);
  const curve = samples.map((t) => xy(t, t / (1 + 6 * t)));
  const diagonal = samples.map((t) => xy(t, t));
  const zero = xy(0, 0);
  const test = 0.1;
  return (
    <TeachingFigure id={id} height={380} title="A positive closing defect can be second order" description="For the exact projection chain, u(t)=t/(1+6t). The graph u(t) lies below the diagonal u=t on both sides of zero near zero, while sharing the same tangent there. Their vertical difference is 6t²/(1+6t), positive for sufficiently small nonzero t. At t=1/10 the difference is 3/80." caption={<>For the preceding chain, moving X₁ to (1 − t,0) gives a final-side intersection with coordinate u(t) = t/(1 + 6t). The returning point has coordinate t. Their gap is 6t²/(1 + 6t), positive on either side of zero near zero even though its first derivative vanishes. At t = 1/10, u = 1/16 and the gap is 3/80. This is the second-order possibility the general proof must retain.</>}>
      <polygon points={points([...diagonal, ...curve.toReversed()])} fill={red} fillOpacity={0.1} />
      <Segment from={[61, zero[1]]} to={[589, zero[1]]} color={muted} width={1.5} />
      <Segment from={[zero[0], 322]} to={[zero[0], 56]} color={muted} width={1.5} />
      <polyline points={points(diagonal)} fill="none" stroke={gold} strokeWidth={3} strokeDasharray="7 6" />
      <polyline points={points(curve)} fill="none" stroke={teal} strokeWidth={3.5} />
      <Segment from={xy(test, test)} to={xy(test, test / (1 + 6 * test))} color={red} width={5} />
      <Dot at={zero} color={ink} radius={5} />
      <Label at={[zero[0] - 20, zero[1] + 28]}>0</Label>
      <Label at={[597, zero[1] + 8]}>t</Label>
      <Label at={[zero[0] + 17, 68]}>u</Label>
      <Label at={[555, 68]} color={gold}>u = t</Label>
      <Label at={[455, 160]} color={teal}>u(t)</Label>
      <Label at={[490, 117]} color={red} size={20}>gap</Label>
      <Label at={[330, 35]} anchor="middle">u(t) = t / (1 + 6t)</Label>
      <Label at={[330, 350]} anchor="middle">same tangent at 0 • positive inward gap</Label>
    </TeachingFigure>
  );
}

function PentagonWinding() {
  const id = "reader-vii-winding";
  const vertices: Point[] = Array.from({ length: 5 }, (_, j) => [Math.cos((2 * Math.PI * j) / 5), Math.sin((2 * Math.PI * j) / 5)] as Point);
  const images = vertices.map(([x, y], j): Point => [(x + vertices[(j + 1) % 5][0]) / 2, (y + vertices[(j + 1) % 5][1]) / 2]);
  const left = (p: Point) => plane(p, [192, 198], 125);
  const ring = (p: Point) => plane(p, [490, 198], 78);
  return (
    <TeachingFigure id={id} height={380} title="Five midpoint factors have one full real turn" description="A regular pentagon contains its image under lambda=(1+exp(2πi/5))/2, with all image vertices at side midpoints. Each factor lambda−1/2 equals exp(2πi/5)/2. Five increments of 72 degrees sum to 360 degrees, even though the resulting product is positive real." caption={<>Exact pentagon example: λ = (1 + η)/2 with η = exp(2πi/5). The red image vertices are blue-side midpoints. Each recurrence contributes λ − 1/2 = η/2, so five factors give (λ − 1/2)⁵ = (1/2)⁵. Their real argument sum is 5 × 2π/5 = 2π. The factor-turn circle illustrates argument addition, while the polygon supplies the actual midpoint recurrences. Regularity and equal coefficients are features of this example, not assumptions in the general product theorem.</>}>
      <Label at={[192, 35]} anchor="middle">Midpoint contacts</Label>
      <Label at={[490, 35]} anchor="middle">Factor turns</Label>
      <polygon points={points(vertices.map(left))} fill={pale} stroke={teal} strokeWidth={3} />
      <polygon points={points(images.map(left))} fill={red} fillOpacity={0.12} stroke={red} strokeWidth={3} />
      {vertices.map((p, j) => <Dot key={`v-${j}`} at={left(p)} color={teal} />)}
      {images.map((p, j) => <Dot key={`c-${j}`} at={left(p)} color={red} />)}
      <Segment from={left(vertices[0])} to={left(images[0])} color={gold} width={3} arrow={`${id}-arrow`} />
      <Label at={[326, 206]}>1</Label>
      <Label at={[230, 63]}>η</Label>
      <circle cx="490" cy="198" r="78" fill="none" stroke={muted} strokeWidth={1.5} strokeDasharray="5 5" />
      {vertices.map((p, j) => {
        const start = ring(p);
        const end = ring(vertices[(j + 1) % 5]);
        const angle = (2 * Math.PI * (j + 0.5)) / 5;
        const label = plane([Math.cos(angle), Math.sin(angle)], [490, 198], 112);
        return <g key={j}>
          <path d={`M${start[0]} ${start[1]} A78 78 0 0 0 ${end[0]} ${end[1]}`} fill="none" stroke={gold} strokeWidth={3} markerEnd={`url(#${id}-arrow)`} />
          <Dot at={start} color={gold} radius={4} />
          <Label at={label} anchor="middle" color={gold} size={21}>72°</Label>
        </g>;
      })}
      <Label at={[490, 205]} anchor="middle">2π</Label>
      <Label at={[192, 354]} anchor="middle">λ = (1+η)/2</Label>
      <Label at={[490, 354]} anchor="middle">5 × 72° = 360°</Label>
    </TeachingFigure>
  );
}

export function ReaderEarlyFigure({ number }: { number: number }) {
  switch (number) {
    case 1: return <AveragingPolygon />;
    case 2: return <InteriorAndPolar />;
    case 3: return <HalfOpenAssignment />;
    case 4: return <LocalReplacement />;
    case 5: return <RecordsAndTowers />;
    case 6: return <><ProjectionChain /><QuadraticClosing /></>;
    case 7: return <PentagonWinding />;
    default: return null;
  }
}
