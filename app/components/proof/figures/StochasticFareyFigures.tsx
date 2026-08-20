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

function FareyFive({ mobile = false }: { mobile?: boolean }) {
  const entries = [
    { value: 0, label: "0" }, { value: 1 / 5, label: "1/5" }, { value: 1 / 4, label: "1/4" },
    { value: 1 / 3, label: "1/3" }, { value: 2 / 5, label: "2/5" }, { value: 1 / 2, label: "1/2" },
  ];
  const axisStart = mobile ? 28 : 70;
  const axisEnd = mobile ? 292 : 610;
  const axisY = mobile ? 175 : 185;
  const x = (value: number) => axisStart + 2 * value * (axisEnd - axisStart);
  const labelSize = mobile ? 17 : 16;
  const labelY = mobile
    ? [212, 212, 245, 212, 245, 212]
    : entries.map(() => 235);

  return (
    <>
      <rect
        data-farey-interval="1/3,2/5"
        fill={pale}
        height={mobile ? 68 : 80}
        width={x(2 / 5) - x(1 / 3)}
        x={x(1 / 3)}
        y={axisY - (mobile ? 34 : 40)}
      />
      <line
        data-farey-axis="F5-upper-semicircle-arguments"
        stroke={ink}
        strokeWidth="2.5"
        x1={axisStart}
        x2={axisEnd}
        y1={axisY}
        y2={axisY}
      />
      {entries.map((entry, index) => (
        <g data-farey-fraction={entry.label} data-farey-position={x(entry.value)} key={entry.label}>
          <line
            stroke={entry.value === 1 / 3 || entry.value === 2 / 5 ? red : ink}
            strokeWidth="2"
            x1={x(entry.value)}
            x2={x(entry.value)}
            y1={axisY - 17}
            y2={axisY + 17}
          />
          <text
            fill={entry.value === 1 / 3 || entry.value === 2 / 5 ? red : ink}
            fontSize={labelSize}
            textAnchor="middle"
            x={x(entry.value)}
            y={labelY[index]}
          >
            {entry.label}
          </text>
        </g>
      ))}
      <line
        data-prescribed-argument="3/8"
        stroke={copper}
        strokeWidth="3"
        x1={x(3 / 8)}
        x2={x(3 / 8)}
        y1={mobile ? 95 : 110}
        y2={axisY}
      />
      <text
        fill={copper}
        fontSize={labelSize}
        textAnchor="middle"
        x={x(3 / 8)}
        y={mobile ? 72 : 90}
      >
        x = 3/8
      </text>
      {mobile ? (
        <text fill={ink} fontSize={labelSize} textAnchor="middle" x="160" y="315">
          F₅ ∩ [0, 1/2] =
          <tspan x="160" dy="25">{"{0, 1/5, 1/4, 1/3, 2/5, 1/2}"}</tspan>
        </text>
      ) : (
        <text fill={ink} fontSize={labelSize} x="112" y="315">
          F₅ ∩ [0, 1/2] = {"{0, 1/5, 1/4, 1/3, 2/5, 1/2}"}
        </text>
      )}
    </>
  );
}

function RootedChord({ marker, mobile = false }: { marker: string; mobile?: boolean }) {
  const origin = mobile ? { x: 30, y: 210 } : { x: 95, y: 225 };
  const joint = mobile ? { x: 145, y: 115 } : { x: 325, y: 90 };
  const endpoint = mobile ? { x: 290, y: 210 } : { x: 575, y: 225 };
  const totalY = mobile ? 280 : 290;
  const labelSize = mobile ? 17 : 16;
  const angleRadius = mobile ? 35 : 48;
  const redVector = { x: joint.x - origin.x, y: joint.y - origin.y };
  const tealVector = { x: endpoint.x - joint.x, y: endpoint.y - joint.y };
  const redLength = Math.hypot(redVector.x, redVector.y);
  const tealLength = Math.hypot(tealVector.x, tealVector.y);
  const redAnglePoint = {
    x: origin.x + (angleRadius * redVector.x) / redLength,
    y: origin.y + (angleRadius * redVector.y) / redLength,
  };
  const tealAnglePoint = {
    x: joint.x + (angleRadius * tealVector.x) / tealLength,
    y: joint.y + (angleRadius * tealVector.y) / tealLength,
  };

  return (
    <>
      <line
        data-vector-guide="real-axis"
        stroke={ink}
        strokeWidth="1.6"
        x1={mobile ? 18 : 70}
        x2={mobile ? 302 : 610}
        y1={origin.y}
        y2={origin.y}
      />
      <line
        data-vector="beta-z-q"
        markerEnd={`url(#${marker})`}
        stroke={red}
        strokeWidth={mobile ? 3.4 : 4}
        x1={origin.x}
        x2={joint.x}
        y1={origin.y}
        y2={joint.y}
      />
      <line
        data-vector="alpha-w"
        markerEnd={`url(#${marker}-teal)`}
        stroke={teal}
        strokeWidth={mobile ? 3.4 : 4}
        x1={joint.x}
        x2={endpoint.x}
        y1={joint.y}
        y2={endpoint.y}
      />
      <line
        data-vector-guide="minus-B-horizontal"
        stroke={teal}
        strokeDasharray="5 5"
        strokeWidth="1.5"
        x1={joint.x}
        x2={joint.x + angleRadius + (mobile ? 12 : 20)}
        y1={joint.y}
        y2={joint.y}
      />
      <line
        data-vector-guide="sum-origin"
        stroke={ink}
        strokeDasharray="4 5"
        strokeWidth="1.2"
        x1={origin.x}
        x2={origin.x}
        y1={origin.y + 7}
        y2={totalY}
      />
      <line
        data-vector-guide="sum-endpoint"
        stroke={ink}
        strokeDasharray="4 5"
        strokeWidth="1.2"
        x1={endpoint.x}
        x2={endpoint.x}
        y1={endpoint.y + 7}
        y2={totalY}
      />
      <line
        data-vector="sum-one"
        markerEnd={`url(#${marker}-ink)`}
        stroke={ink}
        strokeWidth={mobile ? 2.8 : 3}
        x1={origin.x}
        x2={endpoint.x}
        y1={totalY}
        y2={totalY}
      />
      <path
        d={`M${origin.x + angleRadius} ${origin.y} A${angleRadius} ${angleRadius} 0 0 0 ${redAnglePoint.x} ${redAnglePoint.y}`}
        data-vector-angle="A"
        fill="none"
        stroke={red}
        strokeWidth="2"
      />
      <path
        d={`M${joint.x + angleRadius} ${joint.y} A${angleRadius} ${angleRadius} 0 0 1 ${tealAnglePoint.x} ${tealAnglePoint.y}`}
        data-vector-angle="minus-B"
        fill="none"
        stroke={teal}
        strokeWidth="2"
      />
      <text fill={red} fontSize={labelSize} x={mobile ? 63 : 142} y={mobile ? 184 : 196}>A</text>
      <text fill={teal} fontSize={labelSize} x={mobile ? 180 : 382} y={mobile ? 145 : 135}>−B</text>
      <text fill={red} fontSize={labelSize} x={mobile ? 55 : 145} y={mobile ? 145 : 128}>βz^q</text>
      <text fill={teal} fontSize={labelSize} x={mobile ? 222 : 430} y={mobile ? 165 : 132}>αw</text>
      <text fill={ink} fontSize={labelSize} textAnchor="middle" x={(origin.x + endpoint.x) / 2} y={totalY + (mobile ? 32 : 30)}>
        1 = βz^q + αw
      </text>
      {mobile ? (
        <text fill={ink} fontSize={labelSize} textAnchor="middle" x="160" y="350">
          wᵈ = zˢ
          <tspan x="160" dy="25">the imaginary parts cancel</tspan>
        </text>
      ) : (
        <text fill={ink} fontSize={labelSize} textAnchor="middle" x={(origin.x + endpoint.x) / 2} y="365">
          wᵈ = zˢ; the imaginary parts cancel
        </text>
      )}
    </>
  );
}

function TerminalThree({ mobile = false }: { mobile?: boolean }) {
  const realAxisY = mobile ? 285 : 290;
  const scale = mobile ? 180 : 200;
  const junctionX = mobile ? 205 : 410;
  const minusOneX = junctionX - scale / 2;
  const rootY = realAxisY - (Math.sqrt(3) / 2) * scale;
  const labelSize = mobile ? 17 : 16;

  return (
    <>
      <line
        data-complex-axis="real"
        stroke={ink}
        strokeWidth="2"
        x1={mobile ? 48 : 235}
        x2={mobile ? 290 : 600}
        y1={realAxisY}
        y2={realAxisY}
      />
      <line
        data-exceptional-branch="nonreal"
        data-real-part="-0.5"
        stroke={red}
        strokeWidth={mobile ? 4 : 4.5}
        x1={junctionX}
        x2={junctionX}
        y1={rootY}
        y2={realAxisY}
      />
      <line
        data-exceptional-branch="real"
        data-real-interval="[-1,-1/2]"
        stroke={copper}
        strokeWidth={mobile ? 5 : 5.5}
        x1={minusOneX}
        x2={junctionX}
        y1={realAxisY}
        y2={realAxisY}
      />
      <g data-complex-point="minus-one">
        <Dot color={copper} x={minusOneX} y={realAxisY} />
      </g>
      <g data-complex-point="minus-one-half">
        <Dot color={red} x={junctionX} y={realAxisY} />
      </g>
      <g data-complex-point="exp-2pi-i-over-3" data-imaginary-part="sqrt(3)/2" data-real-part="-0.5">
        <Dot color={ink} x={junctionX} y={rootY} />
      </g>
      <text fill={ink} fontSize={labelSize} textAnchor="middle" x={minusOneX} y={realAxisY + 34}>−1</text>
      <text fill={ink} fontSize={labelSize} textAnchor="middle" x={junctionX} y={realAxisY + 34}>−1/2</text>
      <text fill={ink} fontSize={labelSize} textAnchor="middle" x={junctionX} y={rootY - 24}>e²πⁱ⁄³</text>
      <text
        fill={red}
        fontSize={labelSize}
        textAnchor={mobile ? "middle" : "start"}
        x={mobile ? 255 : junctionX + 18}
        y={(rootY + realAxisY) / 2}
      >
        Re λ = −1/2
      </text>
      <text fill={copper} fontSize={labelSize} textAnchor="middle" x={(minusOneX + junctionX) / 2} y="365">
        [−1, −1/2]
      </text>
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

function ArrowMarkers({ marker }: { marker: string }) {
  return (
    <>
      <marker id={marker} markerHeight="7" markerWidth="8" orient="auto" refX="7" refY="3.5">
        <path d="M0,0 L8,3.5 L0,7 Z" fill={red} />
      </marker>
      <marker id={`${marker}-teal`} markerHeight="7" markerWidth="8" orient="auto" refX="7" refY="3.5">
        <path d="M0,0 L8,3.5 L0,7 Z" fill={teal} />
      </marker>
      <marker id={`${marker}-ink`} markerHeight="7" markerWidth="8" orient="auto" refX="7" refY="3.5">
        <path d="M0,0 L8,3.5 L0,7 Z" fill={ink} />
      </marker>
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
  "farey-five": {
    status: "Exact rational diagram",
    title: "The fractions of F₅ in [0, 1/2]",
    description:
      "A number line places the six fractions of the Farey sequence F five from zero through one half at their exact relative positions. The interval from one third to two fifths is highlighted, and x equals three eighths is marked strictly inside it.",
    caption:
      "Plate IX.1. The fractions of F₅ in [0,1/2] are shown at their exact number-line positions. The prescribed argument x=3/8 lies strictly between 1/3 and 2/5.",
  },
  "rooted-chord": {
    status: "Exact vector-identity diagram",
    title: "The identity 1 = βz^q + αw, where w^d = z^s",
    description:
      "A red vector beta z to the q at angle A and a teal vector alpha w at angle minus B are joined head to tail. Their imaginary components cancel. Their sum is the positive real vector one, drawn on a parallel line below so that its ink arrowhead remains distinct from the teal arrowhead.",
    caption:
      "Plate IX.2. In the identity 1=βz^q+αw with w^d=z^s, the red and teal vectors have equal and opposite imaginary components. Their positive real components add to one; the total vector is translated downward only to keep the arrowheads distinct.",
  },
  "terminal-three": {
    status: "Exact algebraic diagram",
    title: "The exceptional candidate curve for n = 3",
    description:
      "The nonreal branch is the exact vertical segment with real part minus one half, from exp of two pi i over three down to minus one half. The selected real branch is the exact horizontal segment from minus one half to minus one.",
    caption:
      "Plate IX.3. For n=3, the nonreal branch is the vertical segment {−1/2+iy: 0≤y≤√3/2}, and the selected real branch is [−1,−1/2].",
  },
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
  const hasDedicatedMobileLayout =
    kind === "eigenpolygon" ||
    kind === "new-shell" ||
    kind === "farey-five" ||
    kind === "rooted-chord" ||
    kind === "terminal-three";
  const mobileMinLabelSize =
    kind === "farey-five" || kind === "rooted-chord" || kind === "terminal-three"
      ? 17
      : 18;
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
          <ArrowMarkers marker={marker} />
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
          data-mobile-min-label-size={mobileMinLabelSize}
          role="img"
          viewBox="0 0 320 390"
        >
          <title id={`sf-${kind}-mobile-title`}>{description.title}</title>
          <desc id={`sf-${kind}-mobile-desc`}>
            {description.description} Compact mobile layout.
          </desc>
          <defs>
            <ArrowMarkers marker={mobileMarker} />
          </defs>
          {kind === "eigenpolygon" ? <Eigenpolygon marker={mobileMarker} mobile /> : null}
          {kind === "new-shell" ? <NewShell marker={mobileMarker} mobile /> : null}
          {kind === "farey-five" ? <FareyFive mobile /> : null}
          {kind === "rooted-chord" ? <RootedChord marker={mobileMarker} mobile /> : null}
          {kind === "terminal-three" ? <TerminalThree mobile /> : null}
        </svg>
      ) : null}
      <figcaption>{description.caption}</figcaption>
    </figure>
  );
}
