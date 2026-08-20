import type { ReactNode } from "react";

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
const copper = "#955c38";
const teal = "#3f6f78";
const paper = "#f5efdd";
const pale = "#d8e2e7";

function Dot({ x, y, color = ink, open = false, r = 6 }: { x: number; y: number; color?: string; open?: boolean; r?: number }) {
  return <circle cx={x} cy={y} r={r} fill={open ? paper : color} stroke={color} strokeWidth="2" />;
}

type Point = { x: number; y: number };

function pointsAttribute(points: readonly Point[]): string {
  return points.map(({ x, y }) => `${x},${y}`).join(" ");
}

function equilateralPoint(center: Point, radius: number, angle: number): Point {
  return {
    x: center.x + radius * Math.cos(angle),
    y: center.y - radius * Math.sin(angle),
  };
}

function midpoint(first: Point, second: Point): Point {
  return {
    x: (first.x + second.x) / 2,
    y: (first.y + second.y) / 2,
  };
}

function Eigenpolygon({ marker, mobile = false }: { marker: string; mobile?: boolean }) {
  const center = mobile ? { x: 160, y: 175 } : { x: 340, y: 185 };
  const radius = mobile ? 115 : 145;
  const angles = [Math.PI / 2, (7 * Math.PI) / 6, (11 * Math.PI) / 6] as const;
  const vertices = angles.map((angle) => equilateralPoint(center, radius, angle));
  const imageVertices = vertices.map((vertex, index) =>
    midpoint(vertex, vertices[(index + 1) % vertices.length]),
  );
  const labelSize = mobile ? 18 : 16;
  const smallSize = mobile ? 18 : 15;
  const vertexLabels = mobile
    ? [
        { x: vertices[0].x, y: vertices[0].y - 10, anchor: "middle" as const },
        { x: vertices[1].x - 9, y: vertices[1].y + 28, anchor: "end" as const },
        { x: vertices[2].x + 9, y: vertices[2].y + 28, anchor: "start" as const },
      ]
    : [
        { x: vertices[0].x, y: vertices[0].y - 11, anchor: "middle" as const },
        { x: vertices[1].x - 12, y: vertices[1].y + 28, anchor: "end" as const },
        { x: vertices[2].x + 12, y: vertices[2].y + 28, anchor: "start" as const },
      ];
  const imageLabels = mobile
    ? [
        { x: imageVertices[0].x - 9, y: imageVertices[0].y - 13, anchor: "end" as const },
        { x: imageVertices[1].x, y: imageVertices[1].y + 29, anchor: "middle" as const },
        { x: imageVertices[2].x + 9, y: imageVertices[2].y - 13, anchor: "start" as const },
      ]
    : [
        { x: imageVertices[0].x - 10, y: imageVertices[0].y - 13, anchor: "end" as const },
        { x: imageVertices[1].x, y: imageVertices[1].y + 28, anchor: "middle" as const },
        { x: imageVertices[2].x + 10, y: imageVertices[2].y - 13, anchor: "start" as const },
      ];
  const arrowStart = vertices[0];
  const arrowEnd = imageVertices[0];
  const arrowControl = mobile ? { x: 121, y: 83 } : { x: 294, y: 72 };

  return (
    <>
      <polygon
        data-polygon="P"
        fill={pale}
        points={pointsAttribute(vertices)}
        stroke={ink}
        strokeWidth="2.6"
      />
      <polygon
        data-complex-scale="0.5"
        data-polygon="lambda-P"
        data-rotation="pi/3"
        fill="none"
        points={pointsAttribute(imageVertices)}
        stroke={red}
        strokeWidth="3.4"
      />
      <path
        d={`M${arrowStart.x} ${arrowStart.y} Q${arrowControl.x} ${arrowControl.y} ${arrowEnd.x} ${arrowEnd.y}`}
        data-complex-image-arrow="v1-to-lambda-v1"
        fill="none"
        markerEnd={`url(#${marker})`}
        stroke={copper}
        strokeWidth="2.4"
      />
      <text
        data-complex-map-label="z-to-lambda-z"
        fill={copper}
        fontSize={smallSize}
        textAnchor="middle"
        x={mobile ? 137 : 303}
        y={mobile ? 112 : 105}
      >
        z ↦ λz
      </text>
      {vertices.map((vertex, index) => (
        <g data-vertex={`v${index + 1}`} key={`v${index + 1}`}>
          <Dot x={vertex.x} y={vertex.y} />
          <text
            fill={ink}
            fontSize={labelSize}
            textAnchor={vertexLabels[index].anchor}
            x={vertexLabels[index].x}
            y={vertexLabels[index].y}
          >
            v<tspan baselineShift="sub" fontSize={labelSize}>{index + 1}</tspan>
          </text>
        </g>
      ))}
      {imageVertices.map((vertex, index) => (
        <g
          data-image-vertex={`lambda-v${index + 1}`}
          data-midpoint-of={`v${index + 1},v${((index + 1) % vertices.length) + 1}`}
          key={`lambda-v${index + 1}`}
        >
          <Dot x={vertex.x} y={vertex.y} color={red} />
          <text
            fill={red}
            fontSize={labelSize}
            textAnchor={imageLabels[index].anchor}
            x={imageLabels[index].x}
            y={imageLabels[index].y}
          >
            λv<tspan baselineShift="sub" fontSize={labelSize}>{index + 1}</tspan>
          </text>
        </g>
      ))}
      <g data-origin="complex-multiplication">
        <Dot x={center.x} y={center.y} open r={4.5} />
        <text fill={ink} fontSize={labelSize} x={center.x + 13} y={center.y - 8}>O</text>
      </g>
      <text
        fill={ink}
        fontSize={smallSize}
        textAnchor="middle"
        x={mobile ? 160 : 340}
        y={mobile ? 320 : 340}
      >
        each λv<tspan baselineShift="sub" fontSize={smallSize}>i</tspan> is a side midpoint
      </text>
      <text
        fill={red}
        fontSize={smallSize}
        textAnchor="middle"
        x={mobile ? 160 : 340}
        y={370}
      >
        λ = ½ exp(iπ/3), so λP ⊆ P
      </text>
    </>
  );
}

function IndexedSymbol({
  symbol,
  index,
  indexSize,
}: {
  symbol: "R" | "Θ";
  index: "N" | "N−1";
  indexSize: number;
}) {
  return (
    <>
      {symbol}<tspan baselineShift="sub" fontSize={indexSize}>{index}</tspan>
    </>
  );
}

function ExpITheta({ indexSize }: { indexSize: number }) {
  return <>e<tspan baselineShift="super" fontSize={indexSize}>iθ</tspan></>;
}

function NewShell({ marker, mobile = false }: { marker: string; mobile?: boolean }) {
  const originX = mobile ? 30 : 72;
  const previousX = mobile ? 130 : 288;
  const currentX = mobile ? 235 : 500;
  const rayEndX = mobile ? 302 : 622;
  const y = mobile ? 180 : 205;
  const labelSize = mobile ? 18 : 16;
  const indexSize = mobile ? 18 : 13;

  return (
    <>
      <text
        data-strict-radial-inequality="true"
        fill={ink}
        fontSize={labelSize}
        textAnchor="middle"
        x={mobile ? 160 : 347}
        y={mobile ? 48 : 68}
      >
        <IndexedSymbol symbol="R" index="N−1" indexSize={indexSize} />(θ) &lt;{" "}
        <IndexedSymbol symbol="R" index="N" indexSize={indexSize} />(θ)
      </text>
      <line
        data-ray-axis="theta"
        x1={originX}
        x2={rayEndX}
        y1={y}
        y2={y}
        stroke={ink}
        strokeWidth="2"
      />
      <line
        data-ray-intersection="Theta-N"
        x1={originX}
        x2={currentX}
        y1={y}
        y2={y}
        stroke={ink}
        strokeWidth="9"
      />
      <line
        data-ray-intersection="Theta-N-1"
        x1={originX}
        x2={previousX}
        y1={y}
        y2={y}
        stroke={copper}
        strokeWidth="5"
      />
      <line
        data-outward-exclusion="t-lambda"
        markerEnd={`url(#${marker})`}
        stroke={red}
        strokeDasharray="8 6"
        strokeWidth="3"
        x1={currentX + 10}
        x2={rayEndX}
        y1={y}
        y2={y}
      />
      <g data-origin-in-both-regions="true">
        <Dot x={originX} y={y} />
        <text fill={ink} fontSize={labelSize} textAnchor="middle" x={originX} y={y + 34}>0</text>
      </g>
      <g data-inclusion="included" data-ray-endpoint="order-N-1">
        <Dot x={previousX} y={y} color={copper} r={7} />
        <text
          fill={copper}
          fontSize={labelSize}
          textAnchor="middle"
          x={mobile ? previousX : previousX - 12}
          y={y + 48}
        >
          <IndexedSymbol symbol="R" index="N−1" indexSize={indexSize} />(θ)<ExpITheta indexSize={indexSize} />
        </text>
      </g>
      <g data-inclusion="included" data-ray-endpoint="order-N">
        <Dot x={currentX} y={y} color={red} r={8} />
        <text
          fill={red}
          fontSize={labelSize}
          textAnchor="middle"
          x={mobile ? currentX - 7 : currentX}
          y={mobile ? y - 42 : y - 38}
        >
          λ = <IndexedSymbol symbol="R" index="N" indexSize={indexSize} />(θ)<ExpITheta indexSize={indexSize} />
        </text>
      </g>
      <text
        fill={red}
        fontSize={labelSize}
        textAnchor="middle"
        x={mobile ? 240 : 556}
        y={mobile ? 282 : 282}
      >
        tλ ∉ <IndexedSymbol symbol="Θ" index="N" indexSize={indexSize} />
        <tspan x={mobile ? 240 : 556} dy={mobile ? 26 : 24}>(t &gt; 1)</tspan>
      </text>
      <text
        fill={copper}
        fontSize={labelSize}
        textAnchor="middle"
        x={mobile ? 92 : 180}
        y={mobile ? 335 : 350}
      >
        <IndexedSymbol symbol="Θ" index="N−1" indexSize={indexSize} /> on this ray
      </text>
      <text
        fill={ink}
        fontSize={labelSize}
        textAnchor="middle"
        x={mobile ? 230 : 430}
        y={mobile ? 365 : 350}
      >
        <IndexedSymbol symbol="Θ" index="N" indexSize={indexSize} /> on this ray
      </text>
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
      <text x="110" y="330" fill={ink}>the nonreal graph tends to −1/2; the real candidate curve continues to −1</text>
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

const copy: Record<FigureKind, { title: string; description: string; caption: ReactNode; status?: string }> = {
  eigenpolygon: {
    status: "Exact diagram",
    title: "An invariant equilateral triangle under complex multiplication",
    description:
      "An equilateral triangle P is centered at the marked origin O. Multiplication by lambda equal to one half times exp of i pi over three sends each vertex exactly to the midpoint of the following side, so the red image triangle lambda P is contained in P.",
    caption:
      "Plate VIII.1. Let P be the displayed equilateral triangle centered at the origin and let λ=½ exp(iπ/3). Then λv₁=(v₁+v₂)/2, λv₂=(v₂+v₃)/2, and λv₃=(v₃+v₁)/2. Thus every image vertex is a side midpoint and λP⊆P.",
  },
  "new-shell": {
    status: "Exact radial-order diagram — not to scale",
    title: "Radial endpoints at two successive matrix orders",
    description:
      "This not-to-scale diagram records exact order and inclusion relations on one ray. The order N minus one eigenvalue region intersects the ray from the origin through its included radial endpoint, the order N region continues to the included point lambda, their radial maxima satisfy R N minus one of theta less than R N of theta, and every point t lambda with t greater than one is excluded from the order N region.",
    caption: (
      <>
        Plate VIII.2. This not-to-scale order diagram records the exact ray intersections Θ<sub>N−1</sub>∩{"{re"}<sup>iθ</sup>{": r≥0}"}={"{re"}<sup>iθ</sup>{": 0≤r≤R"}<sub>N−1</sub>(θ){"}"} and Θ<sub>N</sub>∩{"{re"}<sup>iθ</sup>{": r≥0}"}={"{re"}<sup>iθ</sup>{": 0≤r≤R"}<sub>N</sub>(θ){"}"}, with R<sub>N−1</sub>(θ)&lt;R<sub>N</sub>(θ) and λ=R<sub>N</sub>(θ)e<sup>iθ</sup>. Hence λ∉Θ<sub>N−1</sub>, while every tλ with t&gt;1 lies outside Θ<sub>N</sub>.
      </>
    ),
  },
  "farey-five": { title: "The upper Farey sequence of order five", description: "A number line marks the six reduced fractions from zero to one half and highlights the cell from one third to two fifths.", caption: "Plate IX.1. Exact rational arithmetic selects the cell before any numerical radius is computed." },
  "rooted-chord": { title: "The reciprocal-coordinate Ito identity", description: "Two colored vectors at angles A and minus B join head to tail and sum to the unit real vector.", caption: "Plate IX.2. The definitions of α and β cancel the vertical components and make the horizontal components sum to one on the chosen fractional-power branch." },
  "terminal-three": { title: "The order-three terminal candidate curve", description: "A nonreal curve approaches minus one half and a real segment continues from minus one half to minus one.", caption: "Plate IX.3. The exceptional nonreal graph tends to −1/2, while the same algebraic family supplies the segment [−1,−1/2]. The curved interpolation is schematic." },
  reflection: { title: "Returning from the selected orientation", description: "A Farey interval reflects about one half while a complex point reflects across the real axis.", caption: "Plate X.1. Reflection reverses order but preserves denominators, modulus, d, e, and the absolute scalar equation." },
  jensen: { title: "Strict convexity makes the parameters constant", description: "A strictly convex graph, two separated sample points, and their mean below the joining chord.", caption: "Plate X.2. The equality for chosen real arguments fixes their mean; strict Jensen makes a common argument the unique constant-parameter case." },
  "cycle-ledger": { title: "Local cycles or one global cycle", description: "Three deterministic blocks have local return arcs and one highlighted route through every block terminal.", caption: "Plate XI.1. Any subset of local cycles is vertex-disjoint, but the global cycle meets every terminal and cannot coexist with a local cycle." },
  "sparse-cases": { title: "The two graph regimes before padding", description: "One graph routes a cross edge into the interior of a block, while another inserts a subdivision vertex on a cross edge.", caption: "Plate XI.2. When s≤dq the entry positions shorten the global route to s; when s>dq subdivision vertices lengthen it to s." },
  squeeze: { title: "Attainment closes the upper comparison", description: "Opposing arrows show rho at most rho star and rho star at most rho, meeting at equality.", caption: "Plate XI.3. Topic X supplies one inequality; the independently constructed realizing stochastic matrix supplies the other." },
};

export function StochasticFareyFigure({ kind }: { kind: FigureKind }) {
  const description = copy[kind];
  const marker = `sf-arrow-${kind}`;
  const mobileMarker = `${marker}-mobile`;
  const hasDedicatedMobileLayout = kind === "eigenpolygon" || kind === "new-shell";
  return (
    <figure className="topic-ii-concept-figure">
      <div className="topic-ii-concept-heading">
        <span>{description.status ?? "Deterministic mathematical plate"}</span>
        <span>{description.title}</span>
      </div>
      <svg
        aria-labelledby={`sf-${kind}-title sf-${kind}-desc`}
        className={hasDedicatedMobileLayout ? "topic-ii-concept-svg topic-ii-concept-svg-desktop" : undefined}
        data-figure-layout="desktop"
        role="img"
        viewBox="0 0 680 400"
      >
        <title id={`sf-${kind}-title`}>{description.title}</title>
        <desc id={`sf-${kind}-desc`}>{description.description}</desc>
        <defs>
          <marker id={marker} markerHeight="7" markerWidth="8" orient="auto" refX="7" refY="3.5">
            <path d="M0,0 L8,3.5 L0,7 Z" fill={red} />
          </marker>
        </defs>
        {kind === "eigenpolygon" ? <Eigenpolygon marker={marker} /> : null}
        {kind === "new-shell" ? <NewShell marker={marker} /> : null}
        {kind === "farey-five" ? <FareyFive /> : null}
        {kind === "rooted-chord" ? <RootedChord marker={marker} /> : null}
        {kind === "terminal-three" ? <TerminalThree /> : null}
        {kind === "reflection" ? <Reflection marker={marker} /> : null}
        {kind === "jensen" ? <Jensen /> : null}
        {kind === "cycle-ledger" ? <CycleLedger marker={marker} /> : null}
        {kind === "sparse-cases" ? <SparseCases marker={marker} /> : null}
        {kind === "squeeze" ? <Squeeze marker={marker} /> : null}
      </svg>
      {hasDedicatedMobileLayout ? (
        <svg
          aria-labelledby={`sf-${kind}-mobile-title sf-${kind}-mobile-desc`}
          className="topic-ii-concept-svg topic-ii-concept-svg-mobile"
          data-figure-layout="mobile"
          data-mobile-min-label-size="18"
          role="img"
          viewBox="0 0 320 390"
        >
          <title id={`sf-${kind}-mobile-title`}>{description.title}</title>
          <desc id={`sf-${kind}-mobile-desc`}>
            {description.description} Compact mobile layout.
          </desc>
          <defs>
            <marker id={mobileMarker} markerHeight="7" markerWidth="8" orient="auto" refX="7" refY="3.5">
              <path d="M0,0 L8,3.5 L0,7 Z" fill={red} />
            </marker>
          </defs>
          {kind === "eigenpolygon" ? <Eigenpolygon marker={mobileMarker} mobile /> : null}
          {kind === "new-shell" ? <NewShell marker={mobileMarker} mobile /> : null}
        </svg>
      ) : null}
      <figcaption>{description.caption}</figcaption>
    </figure>
  );
}
