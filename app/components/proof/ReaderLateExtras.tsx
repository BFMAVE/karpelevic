import type { ReactNode } from "react";
import { ReaderFigureCaption } from "./ReaderFigureCaption";
import { EightStateLinks, eightStateRows } from "./EightStateLinks";

const ink = "#18334a";
const teal = "#315e86";
const copper = "#a24728";
const pale = "#edf1f5";
const faint = "#becbd5";

type Point = { x: number; y: number };

function sampledPath(count: number, start: number, end: number, point: (value: number) => Point) {
  return Array.from({ length: count + 1 }, (_, i) => {
    const p = point(start + (end - start) * i / count);
    return `${i ? "L" : "M"}${p.x.toFixed(3)},${p.y.toFixed(3)}`;
  }).join(" ");
}

function Dot({ x, y, color = teal, r = 5 }: Point & { color?: string; r?: number }) {
  return <circle cx={x} cy={y} r={r} fill={color} stroke="white" strokeWidth="1.5" />;
}

function ReflectionFigure({ marker }: { marker: string }) {
  const originalLeft = 1 / 4, originalRight = 1 / 3, x = 7 / 24;
  const orientedLeft = 2 / 3, orientedRight = 3 / 4, y = 1 - x;
  const originalPosition = 60 + (x - originalLeft) / (originalRight - originalLeft) * 250;
  const orientedPosition = 450 + (y - orientedLeft) / (orientedRight - orientedLeft) * 250;
  const angleScale = (angle: number) => 80 + 620 * angle / Math.PI;
  const A = Math.PI / 4, B = Math.PI / 3;
  return <>
    <text x="185" y="34" textAnchor="middle" fill={ink}>Original upper ray</text>
    <text x="575" y="34" textAnchor="middle" fill={ink}>Conjugate orientation</text>
    <g stroke={ink} strokeWidth="2">
      <line x1="60" y1="100" x2="310" y2="100" />
      <line x1="450" y1="100" x2="700" y2="100" />
      {[60, 310, 450, 700].map(position => <line key={position} x1={position} y1="91" x2={position} y2="109" />)}
      <path d="M336 100 L424 100" markerEnd={`url(#${marker})`} />
    </g>
    <Dot x={originalPosition} y={100} />
    <Dot x={orientedPosition} y={100} />
    <text x={originalPosition} y="80" textAnchor="middle" fill={teal}>x = 7/24</text>
    <text x={orientedPosition} y="80" textAnchor="middle" fill={teal}>y = 17/24</text>
    <text x="380" y="82" textAnchor="middle" fill={ink}>1 − x</text>
    <text x="60" y="136" textAnchor="middle" fill={ink}>1/4</text>
    <text x="310" y="136" textAnchor="middle" fill={ink}>1/3</text>
    <text x="450" y="136" textAnchor="middle" fill={ink}>2/3</text>
    <text x="700" y="136" textAnchor="middle" fill={ink}>3/4</text>
    <text x="185" y="170" textAnchor="middle" fill={ink}>denominators: 4 &gt; 3</text>
    <text x="575" y="170" textAnchor="middle" fill={teal}>q = 3 &lt; s = 4</text>
    <text x="185" y="204" textAnchor="middle" fill={ink}>θ = 7π/12</text>
    <text x="575" y="204" textAnchor="middle" fill={ink}>ϑ = 17π/12</text>
    <line x1="50" y1="227" x2="710" y2="227" stroke={faint} />
    <text x="380" y="258" textAnchor="middle" fill={ink}>Order five: the budget A + B stays below π</text>
    <rect x="80" y="296" width="620" height="35" rx="3" fill={pale} />
    <rect x="80" y="296" width={angleScale(A) - 80} height="35" fill={teal} />
    <rect x={angleScale(A)} y="296" width={angleScale(A + B) - angleScale(A)} height="35" fill={copper} />
    <text x={(80 + angleScale(A)) / 2} y="320" textAnchor="middle" fill="white">A = π/4</text>
    <text x={(angleScale(A) + angleScale(A + B)) / 2} y="320" textAnchor="middle" fill="white">B = π/3</text>
    {[0, Math.PI / 2, Math.PI].map(angle => <line key={angle} x1={angleScale(angle)} y1="335" x2={angleScale(angle)} y2="345" stroke={ink} />)}
    <text x="80" y="370" textAnchor="middle" fill={ink}>0</text>
    <text x={angleScale(Math.PI / 2)} y="370" textAnchor="middle" fill={ink}>π/2</text>
    <text x="700" y="370" textAnchor="middle" fill={ink}>π</text>
    <text x="380" y="411" textAnchor="middle" fill={ink}>t = 1/2, m = 1 ⇒ A + B = 7π/12</text>
    <text x="380" y="449" textAnchor="middle" fill={ink}>The reflected equation computes the radius of the original ray.</text>
  </>;
}

function ArcTraversalFigure({ marker }: { marker: string }) {
  const p = (real: number, imaginary: number) => ({ x: 90 + 225 * real, y: 300 - 225 * imaginary });
  const beta = (theta: number) => Math.cos(theta) / (Math.cos(theta) + Math.sin(theta));
  const px = (theta: number) => 445 + 250 * theta / (Math.PI / 2);
  const py = (weight: number) => 300 - 225 * weight;
  const midpoint = p(.5, .5);
  return <>
    <text x="200" y="32" textAnchor="middle" fill={ink}>Selected order-four arc</text>
    <text x="570" y="32" textAnchor="middle" fill={ink}>Its weight decreases with the angle</text>
    <g stroke={ink} strokeWidth="1.5">
      <line x1="65" y1="300" x2="339" y2="300" />
      <line x1="90" y1="323" x2="90" y2="65" />
      <line x1="445" y1="300" x2="695" y2="300" />
      <line x1="445" y1="75" x2="445" y2="300" />
    </g>
    <path d={sampledPath(80, 0, Math.PI / 2, theta => p(Math.cos(theta), Math.sin(theta)))} fill="none" stroke={faint} strokeWidth="2" strokeDasharray="5 5" />
    <line x1={p(1, 0).x} y1={p(1, 0).y} x2={p(0, 1).x} y2={p(0, 1).y} stroke={teal} strokeWidth="3" />
    <path d={`M${p(.95, .05).x},${p(.95, .05).y} L${p(.15, .85).x},${p(.15, .85).y}`} fill="none" stroke={teal} strokeWidth="3" markerEnd={`url(#${marker})`} />
    <line x1="90" y1="300" x2={midpoint.x} y2={midpoint.y} stroke={ink} strokeDasharray="4 4" />
    {[0, .25, .5, .75, 1].map(weight => <Dot key={weight} {...p(weight, 1 - weight)} />)}
    <text x="90" y="56" fill={teal}>β = 0: i</text>
    <text x="320" y="330" textAnchor="end" fill={teal}>β = 1: 1</text>
    <text x="218" y="181" fill={teal}>β = 1/2</text>
    <text x="62" y="326" fill={ink}>0</text>
    <text x="325" y="366" textAnchor="end" fill={ink}>Re z</text>
    <text x="35" y="89" fill={ink}>Im z</text>
    <path d={sampledPath(100, 0, Math.PI / 2, theta => ({ x: px(theta), y: py(beta(theta)) }))} fill="none" stroke={teal} strokeWidth="3" data-exact-beta-traversal />
    <line x1="445" y1={py(.5)} x2={px(Math.PI / 4)} y2={py(.5)} stroke={faint} strokeDasharray="4 4" />
    <line x1={px(Math.PI / 4)} y1={py(.5)} x2={px(Math.PI / 4)} y2="300" stroke={faint} strokeDasharray="4 4" />
    <Dot x={px(Math.PI / 4)} y={py(.5)} />
    <text x="445" y="56" fill={ink}>β</text>
    <text x="427" y="82" textAnchor="end" fill={ink}>1</text>
    <text x="427" y="307" textAnchor="end" fill={ink}>0</text>
    <text x="591" y="167" fill={teal}>β = 1/2</text>
    <text x="445" y="330" textAnchor="middle" fill={ink}>0</text>
    <text x="570" y="330" textAnchor="middle" fill={ink}>π/4</text>
    <text x="695" y="330" textAnchor="middle" fill={ink}>π/2</text>
    <text x="695" y="366" textAnchor="end" fill={ink}>ray angle θ</text>
    <text x="202" y="407" textAnchor="middle" fill={ink}>z = β + (1−β)i</text>
    <text x="570" y="407" textAnchor="middle" fill={ink}>β = cos θ / (cos θ + sin θ)</text>
    <text x="380" y="449" textAnchor="middle" fill={ink}>Mβ = βI + (1−β)C₄ · each row splits into a loop and a next-state arrow</text>
  </>;
}

function InequalityClosureFigure({ marker }: { marker: string }) {
  return <>
    <rect x="55" y="24" width="650" height="69" rx="7" fill={pale} stroke={faint} />
    <text x="380" y="51" textAnchor="middle" fill={ink}>Choose a maximal point z on a non-Farey ray, n ≥ 4</text>
    <text x="380" y="78" textAnchor="middle" fill={ink}>|z| = Rₙ(θ); let k ≤ n be its least realising order</text>
    <g fill="none" stroke={ink} strokeWidth="2" markerEnd={`url(#${marker})`}>
      <path d="M380 93 L380 111 L205 111 L205 136" />
      <path d="M380 93 L380 111 L555 111 L555 136" />
    </g>
    <rect x="45" y="140" width="320" height="107" rx="7" fill="white" stroke={teal} strokeWidth="2" />
    <rect x="395" y="140" width="320" height="107" rx="7" fill="white" stroke={copper} strokeWidth="2" />
    <text x="205" y="166" textAnchor="middle" fill={teal}>k ≥ 4</text>
    <text x="555" y="166" textAnchor="middle" fill={copper}>k = 3</text>
    <text x="205" y="201" textAnchor="middle" fill={ink} fontSize="25">Rₙ ≤ Kₖ ≤ Kₙ</text>
    <text x="555" y="201" textAnchor="middle" fill={ink} fontSize="25">Rₙ ≤ R₃ ≤ K₄ ≤ Kₙ</text>
    <text x="205" y="231" textAnchor="middle" fill={ink} fontSize="16">Topic IX bound → Topic XI comparison</text>
    <text x="555" y="231" textAnchor="middle" fill={ink} fontSize="16">Small orders → Topic XI comparison</text>
    <g fill="none" stroke={ink} strokeWidth="2">
      <path d="M205 247 L205 264 L380 264" />
      <path d="M555 247 L555 264 L380 264" />
      <path d="M380 264 L380 284" markerEnd={`url(#${marker})`} />
    </g>
    <rect x="225" y="289" width="310" height="50" rx="7" fill={pale} stroke={faint} />
    <text x="380" y="321" textAnchor="middle" fill={ink} fontSize="23">Upper bound: Rₙ ≤ Kₙ</text>
    <rect x="55" y="375" width="300" height="61" rx="7" fill="white" stroke={teal} strokeWidth="2" />
    <text x="205" y="400" textAnchor="middle" fill={ink} fontSize="23">Attainment: Kₙ ≤ Rₙ</text>
    <text x="205" y="423" textAnchor="middle" fill={ink} fontSize="17">Topic X builds a matrix at Kₙ</text>
    <g fill="none" stroke={ink} strokeWidth="2" markerEnd={`url(#${marker})`}>
      <path d="M380 339 L380 356 L555 356 L555 371" />
      <path d="M355 406 L391 406" />
    </g>
    <rect x="395" y="375" width="320" height="61" rx="7" fill={pale} stroke={ink} strokeWidth="2" />
    <text x="555" y="414" textAnchor="middle" fill={ink} fontSize="29">Therefore Rₙ = Kₙ</text>
    <text x="380" y="478" textAnchor="middle" fill={ink}>All radii in this diagram are evaluated at the same original angle θ.</text>
  </>;
}

function EightStatePolygonFigure({ marker }: { marker: string }) {
  const h = Math.PI / 7;
  let lower = 0, upper = 1;
  for (let step = 0; step < 64; step++) {
    const midpoint = (lower + upper) / 2;
    if (midpoint === lower || midpoint === upper) break;
    if (midpoint ** 4 + midpoint ** 3 < 2 * Math.cos(h)) lower = midpoint;
    else upper = midpoint;
  }
  const rho = (lower + upper) / 2;
  const powers = [0, -1, -2, 1, 0, -1, 2, 1];
  const angles = [0, 2, 4, 5, 7, 9, 10, 12];
  const point = (radius: number, angle: number) => ({ x: radius * Math.cos(angle), y: radius * Math.sin(angle) });
  const vertices = angles.map((angle, i) => point(rho ** powers[i], angle * h));
  const images = angles.map((angle, i) => point(rho ** (powers[i] + 1), (angle + 5) * h));
  const contacts = [point(rho ** 3, h), point(rho ** 2, 3 * h)];
  const screen = ({ x, y }: Point) => ({ x: 225 + 175 * x, y: 250 - 175 * y });
  const polygon = (points: Point[]) => points.map(p => { const q = screen(p); return `${q.x.toFixed(3)},${q.y.toFixed(3)}`; }).join(" ");
  const subscripts = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇"];
  return <>
    <text x="225" y="26" textAnchor="middle" fill={ink}>Actual eigenvector coordinates</text>
    <text x="602" y="38" textAnchor="middle" fill={ink}>Selected transition row</text>
    <line x1="25" y1="250" x2="438" y2="250" stroke={faint} />
    <line x1="225" y1="46" x2="225" y2="452" stroke={faint} />
    <polygon points={polygon(vertices)} fill={pale} stroke={ink} strokeWidth="2.5" data-eigenvector-polygon />
    <polygon points={polygon(images)} fill="none" stroke={teal} strokeWidth="3" strokeDasharray="7 5" data-image-polygon />
    {vertices.map((p, i) => {
      const q = screen(p);
      const angle = angles[i] * h;
      return <g key={i} data-eigenvector-coordinate={i}>
        <circle cx={q.x} cy={q.y} r="4.5" fill={ink} />
        <text x={q.x + 23 * Math.cos(angle)} y={q.y - 23 * Math.sin(angle) + 6} textAnchor={Math.cos(angle) >= 0 ? "start" : "end"} fill={ink}>{`v${subscripts[i]}`}</text>
      </g>;
    })}
    {images.map((p, i) => {
      const q = screen(p);
      return <rect key={i} x={q.x - 7} y={q.y - 7} width="14" height="14" fill="none" stroke={teal} strokeWidth="2" data-image-coordinate={i} />;
    })}
    {vertices.map((p, i) => {
      const q = screen(p);
      return <g key={i} data-eight-state-source-highlight={i} style={{ display: i === 6 ? "" : "none" }}>
        <circle cx={q.x} cy={q.y} r="12" fill="none" stroke={ink} strokeWidth="3" />
      </g>;
    })}
    {images.map((p, i) => {
      const q = screen(p);
      return <g key={i} data-eight-state-image-highlight={i} style={{ display: i === 6 ? "" : "none" }}>
        <polygon points={`${q.x},${q.y - 14} ${q.x + 14},${q.y} ${q.x},${q.y + 14} ${q.x - 14},${q.y}`} fill="none" stroke={copper} strokeWidth="3" />
      </g>;
    })}
    {vertices.map((p, i) => {
      const q = screen(p);
      return <g key={i} data-eight-state-target-highlight={i} style={{ display: i === 0 || i === 1 ? "" : "none" }}>
        <polygon points={`${q.x},${q.y - 15} ${q.x + 13},${q.y + 9} ${q.x - 13},${q.y + 9}`} fill="none" stroke={teal} strokeWidth="3" />
      </g>;
    })}
    {contacts.map((p, i) => <Dot key={i} {...screen(p)} color={copper} r={5} />)}
    <text x={screen(contacts[0]).x + 13} y={screen(contacts[0]).y - 12} fill={copper}>c₁</text>
    <text x={screen(contacts[1]).x + 13} y={screen(contacts[1]).y - 8} fill={copper}>c₂</text>
    <Dot x={225} y={250} color={ink} r={3} />
    <text x="235" y="271" fill={ink}>0</text>
    <line x1="472" y1="75" x2="502" y2="75" stroke={ink} strokeWidth="2.5" />
    <text x="516" y="81" fill={ink}>P: eight extreme vertices</text>
    <line x1="472" y1="108" x2="502" y2="108" stroke={teal} strokeWidth="3" strokeDasharray="7 5" />
    <text x="516" y="114" fill={teal}>zP: image polygon</text>
    <rect x="467" y="143" width="270" height="220" rx="7" fill="white" stroke={faint} />
    {eightStateRows.map(row => <g key={row.state} data-eight-state-row-diagram={row.state} style={{ display: row.state === 6 ? "" : "none" }}>
      <text x="602" y="166" textAnchor="middle" fill={ink}>Source state</text>
      <circle cx="602" cy="201" r="20" fill={pale} stroke={ink} strokeWidth="3" />
      <text x="602" y="207" textAnchor="middle" fill={ink}>{row.state}</text>
      {row.targets.map((target, i) => {
        const destinationX = row.targets.length === 1 ? 602 : i === 0 ? 544 : 660;
        const startX = row.targets.length === 1 ? 602 : i === 0 ? 592 : 612;
        return <g key={target.state} data-eight-state-edge-from={row.state} data-eight-state-edge-to={target.state}>
          <path d={`M${startX} 220 L${destinationX} 292`} fill="none" stroke={teal} strokeWidth="3" markerEnd={`url(#${marker})`} />
          <text x={row.targets.length === 1 ? 621 : i === 0 ? 549 : 656} y="254" textAnchor="middle" fill={teal}>{target.weight}</text>
          <circle cx={destinationX} cy="316" r="20" fill={pale} stroke={teal} strokeWidth="2.5" />
          <text x={destinationX} y="322" textAnchor="middle" fill={ink}>{target.state}</text>
        </g>;
      })}
      <text x="602" y="351" textAnchor="middle" fill={ink}>Destination {row.targets.length === 1 ? "state" : "states"}</text>
    </g>)}
    <text x="602" y="400" textAnchor="middle" fill={ink}>Graph nodes are row indices.</text>
    <text x="602" y="435" textAnchor="middle" fill={ink}>Read this row&apos;s equation above.</text>
    <text x="380" y="487" textAnchor="middle" fill={ink}>θ = 5π/7 · ρ ≈ {rho.toFixed(8)} · drawing uses numerical coordinates</text>
    <text x="380" y="520" textAnchor="middle" fill={ink}>Black circles are coordinates; blue squares are their z-images.</text>
  </>;
}

const copy: Record<number, { title: string; description: string; caption: string; height: number }> = {
  8: {
    title: "Reflection fixes the denominator order without changing the radius",
    description: "Two exact fractional number lines compare x equals seven over twenty-four in the original interval one quarter to one third, with y equals one minus x in the reflected interval two thirds to three quarters. The original endpoint denominators are four then three; reflection makes them three then four. At order five the factor count is one and the interior position is one half. A bar measured in radians has adjacent lengths pi over four and pi over three, whose sum seven pi over twelve is less than pi.",
    caption: "Exact Farey arithmetic and an angle bar drawn to scale. Reflection maps the original left endpoint 1/4 to the reflected right endpoint 3/4, and the original right endpoint 1/3 to the reflected left endpoint 2/3. The dots are midpoints in their respective fractional coordinates. For n=5, q=3, s=4 and m=1 give A=π/4, B=π/3. The equation uses the conjugate direction ϑ=17π/12 while its radius remains K₅(θ) at the original θ=7π/12. The bar checks A+B<π, the domain needed for positive sine coefficients and the later convexity argument.",
    height: 470,
  },
  10: {
    title: "One decreasing weight traces the selected arc once",
    description: "The selected first order-four arc is the exact line segment from one to i in the complex plane. An arrow points from one toward i as beta decreases from one to zero. Its midpoint is (one plus i) divided by two, at beta one half and ray angle pi over four. A second graph shows the exact function beta of theta equals cosine theta divided by cosine theta plus sine theta, decreasing from one to zero on angles zero to pi over two. The matrix is beta times the identity plus one minus beta times the four-cycle permutation matrix.",
    caption: "Exact order-four example. The segment has equation z=β+(1−β)i and the ray intersection has radius 1/(cos θ+sin θ). Its weight is β(θ)=cos θ/(cos θ+sin θ), with derivative −1/(cos θ+sin θ)²<0. The right graph samples that explicit function; the left arrow gives the corresponding direction along the segment. The dashed quarter-circle is a unit-modulus reference. Every point is attained by Mβ=βI+(1−β)C₄, whose rows split between a self-loop and the next state. The general derivative argument in the text proves the same strict traversal for every selected oriented Farey arc; other polynomial roots need their own branch selection.",
    height: 470,
  },
  12: {
    title: "The upper bound and attainment force equality",
    description: "A proof diagram starts with a maximal eigenvalue on a non-Farey ray at order n at least four and branches according to its least realising order k. If k is at least four, the product bound gives R n no greater than K k, and independent order comparison gives K k no greater than K n. If k is three, the triangle description and initial order comparison give R n no greater than R three no greater than K four no greater than K n. Both yield the upper bound R n no greater than K n. Independently a realizing matrix yields K n no greater than R n. Together the bounds force equality.",
    caption: "A diagram of proved inequalities, rather than a drawing to numerical scale. Rₙ(θ) is the actual maximum, Kₙ(θ) the constructed candidate, and k the maximiser's least realising order. On a non-Farey ray the maximiser is nonzero, nonreal, and inside the unit disk, so k≥3. The left path uses the geometric product at order k and the independently established comparison of scalar roots. The right path supplies the exceptional k=3 case. Attainment is a separate input from Topic X. Both inequalities refer to the same original angle, even if a scalar calculation used reflected Farey coordinates. Farey rays were already settled by the unit-circle classification.",
    height: 500,
  },
  14: {
    title: "The eight states really produce this invariant octagon",
    description: "The actual eight complex eigenvector coordinates are plotted in counterclockwise order as a convex octagon P. Its image zP has a dashed blue boundary and square markers. Six image coordinates coincide exactly with polygon vertices; the remaining two are strict interior contacts. A row selector connects the source coordinate, marked by a double circle, its image, marked by a diamond, and the coordinates in its average, marked by triangles. The adjacent small graph shows that matrix row's outgoing edges and state indices. Row six is the static example. The drawing is numerical; the text proves simplicity, positive turns, convexity and contacts analytically at the exact scalar root.",
    caption: "Coordinates use h=π/7 and the unique root ρ of ρ⁴+ρ³=2cos h. Their exact polar radii are 1,ρ⁻¹,ρ⁻²,ρ,1,ρ⁻¹,ρ²,ρ at angles 0,2h,4h,5h,7h,9h,10h,12h. The dashed polygon is their image under z=ρe⁵ⁱʰ; its squares coincide with six black vertex circles and the two copper contacts. Contact formulas are exact: c₁=ρ³eⁱʰ=βv₀+αv₁ and c₂=ρ²e³ⁱʰ=βv₁+αv₂. The lesson proves that the angularly ordered polygon is simple and all eight turn determinants are positive multiples of U or V, so all coordinates are extreme. The selected row's small graph uses state indices; its equation supplies the corresponding geometric average. The drawing uses floating-point coordinates; polygon path coordinates are rounded to 0.001 viewBox units. These are eigenvector coordinates, which need not lie in the unit disk; they are not points of the stochastic eigenvalue region.",
    height: 542,
  },
};

const captionNotes: Record<number, { takeaway: string; status: string }> = {
  8: { takeaway: "Conjugating reverses the endpoint order while preserving the radius; the two scaled angles still fit below π.", status: "Exact Farey and angle-budget model, rendered with numerical coordinates." },
  10: { takeaway: "As the angle increases from 0 to π/2, one decreasing weight moves the selected point from 1 to i exactly once.", status: "Exact order-four segment and explicit weight function; the function graph is sampled." },
  12: { takeaway: "The least-order upper bound and an independent attaining matrix meet at the same radius.", status: "Proof dependency diagram for a non-Farey ray at order n≥4." },
  14: { takeaway: "Connect a row's outgoing edges to its source coordinate, image and exact averaging equation.", status: "Numerical drawing of an analytically verified invariant octagon; the static selection is row six." },
};

export function ReaderLateExtra({ number }: { number: number }) {
  const content = copy[number];
  if (!content) return null;
  const marker = `reader-late-extra-${number}-arrow`;
  let drawing: ReactNode;
  switch (number) {
    case 8: drawing = <ReflectionFigure marker={marker} />; break;
    case 10: drawing = <ArcTraversalFigure marker={marker} />; break;
    case 12: drawing = <InequalityClosureFigure marker={marker} />; break;
    case 14: drawing = <EightStatePolygonFigure marker={marker} />; break;
    default: return null;
  }
  return <figure className="reader-teaching-figure" data-reader-late-extra={number}>
    <h4>{content.title}</h4>
    {number === 14 ? <EightStateLinks /> : null}
    <p className="reader-figure-scroll-hint">Scroll across the diagram →</p>
    <div className="reader-figure-visual" tabIndex={0} role="region" aria-label={`${content.title}. Scroll horizontally when needed to see the full diagram.`}>
      <svg viewBox={`0 0 760 ${content.height}`} role="img" aria-labelledby={`reader-late-extra-${number}-title reader-late-extra-${number}-desc`} fontSize="18" fontFamily="inherit">
        <title id={`reader-late-extra-${number}-title`}>{content.title}</title>
        <desc id={`reader-late-extra-${number}-desc`}>{content.description}</desc>
        <defs><marker id={marker} markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 Z" fill="context-stroke" /></marker></defs>
        {drawing}
      </svg>
    </div>
    <ReaderFigureCaption takeaway={captionNotes[number].takeaway} status={captionNotes[number].status}>
      {content.caption}
      {number === 14 ? <p><a href="https://github.com/BFMAVE/karpelevic/blob/main/docs/proof-audits/reader-learning-mathematics-2026-10-02.md">Reproduce the rational supporting-side certificate.</a></p> : null}
    </ReaderFigureCaption>
  </figure>;
}
