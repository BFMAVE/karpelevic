import type { ReactNode } from "react";
import { ReaderFigureCaption } from "./ReaderFigureCaption";

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
  const notes: Record<string, { takeaway: string; status: string }> = {
    "reader-i-averaging": { takeaway: "Follow the arrow from 1. The first row puts half its weight at 1 and half at i, so the image is their midpoint. The other three rows give the other three midpoints.", status: "This matrix realises the displayed eigenvalue. Determining the largest possible radius at this angle requires the boundary theorem." },
    "reader-ii-polar": { takeaway: "Double the multiplier in the left panel and the four images reach the sides of the diamond. In the right panel we can read one of those contacts from a point on the edge of the polar square.", status: "Both panels use exact coordinates. The two multipliers on the left show why the smaller radius is possible without being the largest." },
    "reader-iii-half-open": { takeaway: "When a contact lands exactly on the shared corner, count it on the side that ends there. A contact halfway along that side belongs to it as well.", status: "The two adjacent sides illustrate the endpoint convention. The argument with cuts establishes that it works around the whole polygon." },
    "reader-iv-replacement": { takeaway: "Cut off the dashed corner at its contact. The positive weight moves from side i to side i + κ, where the previous weight was zero.", status: "The picture shows one corner and the change in two coefficients. Reversing the matrix factors proves that the smaller polygon still realises the same multiplier." },
    "reader-v-towers": { takeaway: "Read the entries in both columns before their final boxes. Each of the eight vertex labels occurs once. Label 0 is an intermediate stop because the marked bases are 1 and 2.", status: "The paths follow addition of 3 modulo 8. Their heights and labels are exact, and their positions on the page show only the order of the steps." },
    "reader-vi-projection": { takeaway: "Start at X₀ and follow the two red projections. The second intersection lies inside the segment from C₂ to C₃. Starting at X₁ sends us to the endpoint C₃.", status: "The coordinates give an exact local example of the projection lemma. The quadrilateral serves only to compute intersections of lines." },
    "reader-vi-closing": { takeaway: "At t = 0 the curve has the same tangent as the diagonal. Move the slider a little in either direction. The gap opens on the same side both times, while the gold line still passes through C₂.", status: "Exact local deformation model; not an invariant eigenvalue polygon. The plotted values come from u(t) = t/(1 + 6t)." },
    "reader-vii-winding": { takeaway: "Read the five angle increments around the circle. Each adds 72°, giving 360° by the time the product returns to the positive real axis.", status: "The midpoint calculation uses a regular pentagon. The general theorem allows its coefficients and angles to vary." },
  };
  return (
    <figure className="reader-teaching-figure">
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
      <ReaderFigureCaption takeaway={notes[id].takeaway} status={notes[id].status}>{caption}</ReaderFigureCaption>
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
    <TeachingFigure id={id} height={350} title="A matrix row is a geometric averaging instruction" description="A diamond has vertices 1, i, −1 and −i. An arrow from 1 points to (1+i)/2 on the upper right side. The three other side midpoints complete a smaller square inside the diamond." caption={<>Let C send each entry of v = (1, i, −1, −i)ᵀ to the next one cyclically. Then Cv = iv. Taking A = (I + C)/2 gives Av = ((1 + i)/2)v. Multiplication by (1 + i)/2 therefore sends the four blue vertices to the four red midpoints. Their convex hull is the red square, so the entire image lies inside the diamond.</>}>
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
    <TeachingFigure id={id} height={355} title="Interior slack and polar side contact are different geometric tests" description="Left panel. A small square lies strictly inside the diamond. Doubling its four vertex coordinates places them at the diamond’s side midpoints. Right panel. An arrow on the polar square sends its corner (1,1) to the edge point (1,0). The edge point has first coordinate one, which identifies the vertex (1,0) whose image meets the original side." caption={<>On the left ζ₀ = (1 + i)/4 sends 1 to a point with positive weights 3/8, 3/8, 1/8, 1/8 at the four vertices. Doubling ζ₀ produces the dashed square with a vertex at each midpoint. Now take ζ = (1 + i)/2. The normal a = (1,1) represents the original side x + y = 1. In the polar picture T*a = (1,0), whose dot product with (1,0) is one. Thus the image of the original vertex (1,0) lies on that side. Its coordinates are (1/2,1/2).</>}>
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
    <TeachingFigure id={id} height={425} title="The incoming half-open side owns the shared corner" description="Two polygon sides meet at vᵢ. In the intervals below them, a filled endpoint marks vᵢ on the incoming side and an open endpoint marks vᵢ on the outgoing side. A separate red dot halfway along the incoming side marks an interior contact." caption={<>Read each side in the direction of the vertex indices. The first side is (vᵢ₋₁, vᵢ], so it contains the corner vᵢ. The next side starts with an open endpoint there. The red dot lies halfway along the first side and uses weight 1/2 at each endpoint. If we move a contact all the way to vᵢ, the same side still receives it and its weight on vᵢ becomes one.</>}>
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
    <TeachingFigure id={id} height={450} title="A factor reversal replaces one corner and transfers its positive weight" description="At the end of a run of contacts, replace vᵢ by the midpoint cᵢ of its preceding side. Dashed lines show the removed corner. The coefficient at i changes from 1/2 to 1 and the one at i + κ changes from 1 to 1/2." caption={<>Here cᵢ is the midpoint of the segment joining vᵢ₋₁ and vᵢ. The move requires βᵢ &gt; 0 and βᵢ₊₁ = 0. Reversing the stochastic factors then gives an eigenvector with cᵢ in place of vᵢ. In the numerical example the new weight at i + κ is −log((1/2)·1) = log 2, while the weight at i becomes zero. If the target already carried positive weight, the move would reduce the number of contacts inside sides, contradicting our choice of polygon.</>}>
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
    <TeachingFigure id={id} height={615} title="Record residues determine two towers that cover all eight indices" description="The residues 0, 3, 6, 1, 4, 7, 2, 5 have new highs at times 0, 1, 2 and 5. Below the plot, one column lists 1, 4, 7 before contact c₂, and the other lists 2, 5, 0, 3, 6 before contact c₁." caption={<>With N = 8 and κ = 3, the record at time h = 2 is 6, two short of 8. The next record is 7 at time 5. Thus q = 5 − 2 = 3 and Δ = 7 − 6 = 1. The first tower has height q and the other q + h. The red box c₂ names a point inside side 2, and c₁ names one inside side 1. We obtain these possible paths from the labels alone. Constructing a polygon that has the indicated contacts takes a further argument.</>}>
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
      <p data-projection-status aria-live="polite">Both intersections are shown. The red path ends on the segment joining C₂ and C₃.</p>
    </div>
  );
  return (
    <TeachingFigure id={id} height={440} controls={controls} title="An exact two-step projection chain lands strictly between the closing contacts" description="The quadrilateral has vertices X₀ = (0,0), X₁ = (1,0), X₂ = (2,1) and X₃ = (3,3). The red line from X₀ through C₂ = (3/2,1/2) meets the supporting line y = 3x/2 − 2 at Z₂ = (12/7,4/7). The line from Z₂ through X₃ then meets the gold line at (33/14,25/14), strictly between C₂ and C₃. The path from X₁ goes through X₂ and ends at C₃." caption={<>Read the red path in two steps. First intersect the line X₀C₂ with the dashed line through X₂ to find Z₂ = (12/7,4/7). Then intersect Z₂X₃ with the gold line through C₂ and C₃. The answer is (33/14,25/14) = C₃ + (C₂ − C₃)/7. From C₃ we have gone exactly one seventh of the way to C₂, which proves that this projection lands strictly between the contacts. Repeating the same two projections from X₁ gives X₂ and then C₃.</>}>
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
  const u = test / (1 + 6 * test);
  const original: Point[] = [[0, 0], [1, 0], [2, 1], [3, 3]];
  const model = (p: Point) => plane(p, [100, 685], 70);
  const x0: Point = [0, 0];
  const x1: Point = [1 - test, 0];
  const x2: Point = [2 * (1 + 5 * test) / (1 + 6 * test), (1 + 3 * test) / (1 + 6 * test)];
  const x3: Point = [3, 3];
  const c2: Point = [1.5, 0.5];
  const returned: Point = [2.5 - test, 2 - 1.5 * test];
  const intersection: Point = [2.5 - u, 2 - 1.5 * u];
  const controls = <div className="reader-chain-motion-controls" data-chain-motion-controls hidden>
    <label htmlFor={`${id}-parameter`}>Deformation parameter t</label>
    <input id={`${id}-parameter`} type="range" min="-0.05" max="0.1" step="0.001" defaultValue="0.1" disabled data-chain-motion-input aria-describedby={`${id}-status`} />
    <button type="button" data-chain-motion-reset>Reset to t = 0</button>
    <p id={`${id}-status`} data-chain-motion-status role="status" aria-live="polite">Starting at t = 1/10 gives u = 1/16. The return lies inward by a parameter difference of 3/80, and the moving side still passes through C₂.</p>
  </div>;
  return (
    <TeachingFigure id={id} height={755} controls={controls} title="An exact local deformation preserves its contact and opens inward to second order" description="Above, u(t) = t/(1 + 6t) touches the diagonal at zero and lies below it on both sides nearby. Below, at t = 1/10, the moving vertices are X₁ = (9/10,0) and X₂ = (15/8,13/16). The returning point Y(t) is (12/5,37/20), and the intersection Y(u) is (39/16,61/32). The side through X₁ and X₂ still contains C₂ and X₂ remains on its supporting line. Along K, the returning point is separated from the final side by a parameter gap of 3/80 towards the interior." caption={<>For this quadrilateral the moving vertices are X₁(t) = (1 − t,0) and X₂(t) = (2(1 + 5t)/(1 + 6t),(1 + 3t)/(1 + 6t)). Their line passes through C₂ for every allowed t, and X₂(t) stays on its dashed supporting line. To check the last contact, compare the return Y(t) with the point Y(u) where the final side line meets K. Here u = t/(1 + 6t), giving t − u = 6t²/(1 + 6t). Near zero this is positive for either sign of t whenever t is nonzero. At t = 1/10 the two parameters are 1/10 and 1/16, a gap of 3/80. Convexity and the position of each contact inside its segment persist for sufficiently small changes.</>}>
      <g data-chain-motion-graph data-origin-x="78" data-origin-y="298" data-t-min="-0.08" data-t-span="0.22" data-u-min="-0.18" data-u-span="0.34" data-width="482" data-height="228">
        <polygon points={points([...diagonal, ...curve.toReversed()])} fill={red} fillOpacity={0.1} />
        <Segment from={[61, zero[1]]} to={[589, zero[1]]} color={muted} width={1.5} />
        <Segment from={[zero[0], 322]} to={[zero[0], 56]} color={muted} width={1.5} />
        <polyline points={points(diagonal)} fill="none" stroke={gold} strokeWidth={3} strokeDasharray="7 6" />
        <polyline points={points(curve)} fill="none" stroke={teal} strokeWidth={3.5} />
        <line data-chain-motion-graph-gap x1={xy(test, test)[0]} y1={xy(test, test)[1]} x2={xy(test, u)[0]} y2={xy(test, u)[1]} stroke={red} strokeWidth={5} />
        <circle data-chain-motion-curve-point cx={xy(test, u)[0]} cy={xy(test, u)[1]} r={5} fill={teal} />
        <Dot at={zero} color={ink} radius={5} />
        <Label at={[zero[0] - 20, zero[1] + 28]}>0</Label>
        <Label at={[597, zero[1] + 8]}>t</Label>
        <Label at={[zero[0] + 17, 68]}>u</Label>
        <Label at={[555, 68]} color={gold}>u = t</Label>
        <Label at={[455, 160]} color={teal}>u(t)</Label>
        <Label at={[490, 117]} color={red} size={20}>gap</Label>
        <Label at={[330, 35]} anchor="middle">u(t) = t / (1 + 6t)</Label>
        <Label at={[330, 350]} anchor="middle">same tangent at 0 • positive inward gap</Label>
      </g>
      <Label at={[330, 402]} anchor="middle">The same parameter in the exact quadrilateral</Label>
      <g data-chain-motion-geometry data-origin-x="100" data-origin-y="685" data-scale="70">
        <polygon points={points(original.map(model))} fill="none" stroke={muted} strokeWidth={2} strokeDasharray="6 5" />
        <polygon data-chain-motion-polygon points={points([x0, x1, x2, x3].map(model))} fill={pale} fillOpacity={0.8} stroke={teal} strokeWidth={2.5} />
        <Segment from={model([1.1, -0.35])} to={model([3.15, 2.725])} color={teal} dashed />
        <Segment from={model([1.1, -0.1])} to={model([3.15, 2.975])} color={gold} width={2} />
        <line data-chain-motion-contact-side x1={model(x1)[0]} y1={model(x1)[1]} x2={model(x2)[0]} y2={model(x2)[1]} stroke={gold} strokeWidth={4} />
        <line data-chain-motion-final-side x1={model(x2)[0]} y1={model(x2)[1]} x2={model(x3)[0]} y2={model(x3)[1]} stroke={teal} strokeWidth={4} />
        <line data-chain-motion-model-gap x1={model(returned)[0]} y1={model(returned)[1]} x2={model(intersection)[0]} y2={model(intersection)[1]} stroke={red} strokeWidth={4} />
        <Dot at={model(x0)} />
        <Dot at={model(x3)} />
        <Dot at={model(c2)} color={gold} radius={7} />
        <circle data-chain-motion-x1 cx={model(x1)[0]} cy={model(x1)[1]} r={6} fill={teal} />
        <circle data-chain-motion-x2 cx={model(x2)[0]} cy={model(x2)[1]} r={6} fill={teal} />
        <circle data-chain-motion-y cx={model(returned)[0]} cy={model(returned)[1]} r={7} fill={red} />
        <circle data-chain-motion-intersection cx={model(intersection)[0]} cy={model(intersection)[1]} r={4} fill={ink} />
        <Label at={[75, 720]} size={21}>X₀</Label>
        <Label at={[323, 475]} size={21}>X₃</Label>
        <text data-chain-motion-label="x1" x={model(x1)[0] - 12} y={model(x1)[1] + 35} textAnchor="middle" fill={teal} fontSize={21}>X₁(t)</text>
        <text data-chain-motion-label="x2" x={model(x2)[0] + 16} y={model(x2)[1] + 18} fill={teal} fontSize={21}>X₂(t)</text>
        <Label at={[188, 649]} anchor="end" color={gold} size={21}>C₂</Label>
        <Label at={[337, 534]} color={teal} size={21}>L₂</Label>
        <Label at={[337, 503]} color={gold} size={21}>K</Label>
      </g>
      <Dot at={[427, 565]} color={gold} />
      <Label at={[444, 572]} color={gold} size={20}>C₂: fixed contact</Label>
      <Dot at={[427, 610]} color={red} />
      <Label at={[444, 617]} color={red} size={20}>Y(t): return</Label>
      <Dot at={[427, 655]} color={ink} />
      <Label at={[444, 662]} size={20}>Y(u): final line</Label>
      <Label at={[444, 688]} size={20}>meets K here</Label>
      <Label at={[330, 749]} anchor="middle" size={19}>Exact local model; no invariant eigenvalue polygon is asserted</Label>
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
    <TeachingFigure id={id} height={380} title="Five midpoint factors have one full real turn" description="A smaller pentagon has a vertex at the midpoint of each side of a regular pentagon. The circle to its right marks five successive angle increments of 72 degrees. Their sum is one full turn, ending on the positive real axis." caption={<>Let η = exp(2πi/5), so consecutive vertices satisfy vⱼ₊₁ = ηvⱼ. Multiplication by λ = (1 + η)/2 sends vⱼ to the midpoint of its side. Subtracting vⱼ/2 gives the factor λ − 1/2 = η/2. Its fifth power is positive, namely (1/2)⁵. Following the arguments before multiplication gives more information. Each factor adds 2π/5, so the total angle is 2π.</>}>
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
