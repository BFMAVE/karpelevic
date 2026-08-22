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
  | "sparse-cases";

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
  const angleA = Math.PI / 6;
  const angleB = (3 * Math.PI) / 4;
  const angleSum = angleA + angleB;
  const betaZqLength = Math.sin(angleB) / Math.sin(angleSum);
  const alphaWLength = Math.sin(angleA) / Math.sin(angleSum);
  const unitLength = mobile ? 70 : 130;
  const origin = mobile ? { x: 65, y: 110 } : { x: 170, y: 110 };
  const joint = {
    x: origin.x + unitLength * betaZqLength * Math.cos(-angleA),
    y: origin.y - unitLength * betaZqLength * Math.sin(-angleA),
  };
  const endpoint = {
    x: joint.x + unitLength * alphaWLength * Math.cos(angleB),
    y: joint.y - unitLength * alphaWLength * Math.sin(angleB),
  };
  const totalY = mobile ? 296 : 315;
  const labelSize = mobile ? 17 : 16;
  const angleRadius = mobile ? 31 : 44;
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
      <text
        data-vector-example="n=3,x=11/24"
        fill={ink}
        fontSize={labelSize}
        textAnchor="middle"
        x={mobile ? 160 : 340}
        y={mobile ? 45 : 34}
      >
        n = 3, x = 11/24; A = π/6, B = 3π/4
      </text>
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
        data-example-x="11/24"
        data-mathematical-angle="-pi/6"
        data-real-component-sign="positive"
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
        data-example-x="11/24"
        data-mathematical-angle="3pi/4"
        data-real-component-sign="negative"
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
        data-vector-guide="B-horizontal"
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
        d={`M${origin.x + angleRadius} ${origin.y} A${angleRadius} ${angleRadius} 0 0 1 ${redAnglePoint.x} ${redAnglePoint.y}`}
        data-vector-angle="minus-A"
        fill="none"
        stroke={red}
        strokeWidth="2"
      />
      <path
        d={`M${joint.x + angleRadius} ${joint.y} A${angleRadius} ${angleRadius} 0 0 0 ${tealAnglePoint.x} ${tealAnglePoint.y}`}
        data-vector-angle="B"
        fill="none"
        stroke={teal}
        strokeWidth="2"
      />
      <text
        fill={red}
        fontSize={labelSize}
        x={origin.x + angleRadius * 0.84}
        y={origin.y + angleRadius * 0.28}
      >
        −A
      </text>
      <text
        fill={teal}
        fontSize={labelSize}
        x={joint.x + angleRadius * 0.38}
        y={joint.y - angleRadius * 0.94}
      >
        B
      </text>
      <text
        fill={red}
        fontSize={labelSize}
        textAnchor="middle"
        x={(origin.x + joint.x) / 2 - (mobile ? 10 : 16)}
        y={(origin.y + joint.y) / 2 - (mobile ? 17 : 24)}
      >
        βz^q
      </text>
      <text
        fill={teal}
        fontSize={labelSize}
        textAnchor="middle"
        x={(joint.x + endpoint.x) / 2 + (mobile ? 15 : 18)}
        y={(joint.y + endpoint.y) / 2 + (mobile ? 15 : 20)}
      >
        αw
      </text>
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
  const scale = mobile ? 160 : 180;
  const junctionX = mobile ? 190 : 390;
  const minusOneX = junctionX - scale / 2;
  const imaginaryAxisX = junctionX + scale / 2;
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
        data-complex-axis="imaginary"
        stroke={ink}
        strokeWidth="1.6"
        x1={imaginaryAxisX}
        x2={imaginaryAxisX}
        y1={rootY - (mobile ? 28 : 32)}
        y2={realAxisY}
      />
      <line
        data-imaginary-level="sqrt(3)/2"
        stroke={ink}
        strokeDasharray="4 5"
        strokeWidth="1.2"
        x1={junctionX}
        x2={imaginaryAxisX}
        y1={rootY}
        y2={rootY}
      />
      <line
        data-axis-tick="sqrt(3)/2"
        stroke={ink}
        strokeWidth="2"
        x1={imaginaryAxisX - 6}
        x2={imaginaryAxisX + 6}
        y1={rootY}
        y2={rootY}
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
      <g data-complex-point="exp-plus-2pi-i-over-3" data-imaginary-part="sqrt(3)/2" data-real-part="-0.5">
        <Dot color={ink} x={junctionX} y={rootY} />
      </g>
      <text fill={ink} fontSize={labelSize} textAnchor="middle" x={minusOneX} y={realAxisY + 34}>−1</text>
      <text fill={ink} fontSize={labelSize} textAnchor="middle" x={junctionX} y={realAxisY + 34}>−1/2</text>
      <text
        data-exact-coordinate="-1/2+(sqrt(3)/2)i"
        fill={ink}
        fontSize={labelSize}
        textAnchor="middle"
        x={junctionX}
        y={rootY - (mobile ? 20 : 24)}
      >
        −1/2 + (√3/2)i
      </text>
      <text
        fill={ink}
        fontSize={labelSize}
        textAnchor="middle"
        x={imaginaryAxisX}
        y={rootY - (mobile ? 35 : 39)}
      >
        Im
      </text>
      <text
        fill={ink}
        fontSize={labelSize}
        textAnchor={mobile ? "end" : "start"}
        x={mobile ? 307 : imaginaryAxisX + 9}
        y={rootY + 6}
      >
        √3/2
      </text>
      <text
        fill={red}
        fontSize={labelSize}
        textAnchor={mobile ? "end" : "start"}
        x={mobile ? junctionX - 12 : junctionX + 18}
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

function Reflection({ marker, mobile = false }: { marker: string; mobile?: boolean }) {
  const labelSize = mobile ? 16 : 15;
  const smallSize = mobile ? 16 : 14;
  const topY = mobile ? 78 : 82;
  const bottomY = mobile ? 220 : 232;
  const leftX = mobile ? 42 : 72;
  const rightX = mobile ? 278 : 322;
  const sourceLeft = { x: mobile ? 78 : 118, y: topY };
  const sourceRight = { x: mobile ? 242 : 278, y: topY };
  const targetLeft = { x: mobile ? 78 : 118, y: bottomY };
  const targetRight = { x: mobile ? 242 : 278, y: bottomY };
  const axisY = mobile ? 395 : 232;
  const origin = mobile ? { x: 120, y: axisY } : { x: 492, y: axisY };
  const lambda = mobile ? { x: 218, y: 335 } : { x: 590, y: 162 };
  const mu = mobile ? { x: 218, y: 455 } : { x: 590, y: 302 };
  const axisStart = mobile ? 42 : 390;
  const axisEnd = mobile ? 292 : 650;

  return (
    <>
      <text fill={ink} fontSize={labelSize} textAnchor="middle" x={(leftX + rightX) / 2} y={mobile ? 30 : 30}>
        p/q &lt; y &lt; r/s
      </text>
      <line data-farey-row="source" x1={leftX} y1={topY} x2={rightX} y2={topY} stroke={ink} strokeWidth="2" />
      <g data-denominator="q" data-farey-endpoint="p/q" data-row="source">
        <Dot x={sourceLeft.x} y={sourceLeft.y} color={red} />
        <text fill={ink} fontSize={labelSize} textAnchor="middle" x={sourceLeft.x} y={topY - 16}>p/q</text>
      </g>
      <g data-denominator="s" data-farey-endpoint="r/s" data-row="source">
        <Dot x={sourceRight.x} y={sourceRight.y} color={red} />
        <text fill={ink} fontSize={labelSize} textAnchor="middle" x={sourceRight.x} y={topY - 16}>r/s</text>
      </g>
      <text fill={copper} fontSize={smallSize} textAnchor="middle" x={(leftX + rightX) / 2} y={topY + 25}>t ↦ 1−t</text>
      <path
        d={`M${sourceLeft.x} ${sourceLeft.y + 8} L${targetRight.x} ${targetRight.y - 8}`}
        data-reflection-map="p/q-to-(q-p)/q"
        data-source-denominator="q"
        data-target-denominator="q"
        fill="none"
        markerEnd={`url(#${marker})`}
        stroke={red}
        strokeWidth="2.5"
      />
      <path
        d={`M${sourceRight.x} ${sourceRight.y + 8} L${targetLeft.x} ${targetLeft.y - 8}`}
        data-reflection-map="r/s-to-(s-r)/s"
        data-source-denominator="s"
        data-target-denominator="s"
        fill="none"
        markerEnd={`url(#${marker})`}
        stroke={red}
        strokeWidth="2.5"
      />
      <line data-farey-row="reflected" x1={leftX} y1={bottomY} x2={rightX} y2={bottomY} stroke={ink} strokeWidth="2" />
      <g data-denominator="s" data-farey-endpoint="(s-r)/s" data-row="reflected">
        <Dot x={targetLeft.x} y={targetLeft.y} color={teal} />
        <text fill={ink} fontSize={labelSize} textAnchor="middle" x={targetLeft.x} y={bottomY + 27}>(s−r)/s</text>
      </g>
      <g data-denominator="q" data-farey-endpoint="(q-p)/q" data-row="reflected">
        <Dot x={targetRight.x} y={targetRight.y} color={teal} />
        <text fill={ink} fontSize={labelSize} textAnchor="middle" x={targetRight.x} y={bottomY + 27}>(q−p)/q</text>
      </g>
      <text fill={ink} fontSize={smallSize} textAnchor="middle" x={(leftX + rightX) / 2} y={bottomY + (mobile ? 55 : 54)}>
        (s−r)/s &lt; x &lt; (q−p)/q
      </text>

      <line data-complex-axis="real" x1={axisStart} y1={axisY} x2={axisEnd} y2={axisY} stroke={ink} strokeWidth="2" />
      <line x1={origin.x} y1={axisY - (mobile ? 78 : 112)} x2={origin.x} y2={axisY + (mobile ? 78 : 112)} stroke={copper} strokeDasharray="5 5" strokeWidth="1.6" />
      <text fill={ink} fontSize={smallSize} x={axisEnd - 20} y={axisY - 9}>Re</text>
      <text fill={ink} fontSize={smallSize} x={origin.x + 8} y={axisY - (mobile ? 66 : 98)}>Im</text>
      <circle cx={origin.x} cy={origin.y} data-complex-origin="true" fill={paper} r="5" stroke={ink} strokeWidth="2" />
      <line data-conjugate-ray="lambda" x1={origin.x} y1={origin.y} x2={lambda.x} y2={lambda.y} stroke={red} strokeWidth="2.5" markerEnd={`url(#${marker})`} />
      <line data-conjugate-ray="mu" x1={origin.x} y1={origin.y} x2={mu.x} y2={mu.y} stroke={teal} strokeWidth="2.5" markerEnd={`url(#${marker}-teal)`} />
      <circle cx={lambda.x} cy={lambda.y} data-complex-point="lambda" data-modulus="rho" fill={red} r="6" />
      <circle cx={mu.x} cy={mu.y} data-complex-point="mu" data-modulus="rho" fill={teal} r="6" />
      <text fill={red} fontSize={labelSize} x={lambda.x + 10} y={lambda.y - 8}>λ</text>
      <text fill={teal} fontSize={labelSize} x={mu.x + 10} y={mu.y + 18}>μ=λ̄</text>
      <text fill={ink} fontSize={smallSize} textAnchor="middle" x={(axisStart + axisEnd) / 2} y={mobile ? 492 : 370}>|μ|=|λ|</text>
    </>
  );
}

function Jensen({ mobile = false }: { mobile?: boolean }) {
  const start = mobile ? { x: 35, y: 300 } : { x: 130, y: 300 };
  const control = mobile ? { x: 160, y: 315 } : { x: 340, y: 310 };
  const end = mobile ? { x: 285, y: 85 } : { x: 550, y: 85 };
  const meanX = (start.x + 2 * control.x + end.x) / 4;
  const graphMeanY = (start.y + 2 * control.y + end.y) / 4;
  const secantMeanY = (start.y + end.y) / 2;
  const labelSize = mobile ? 16 : 15;
  const curve = `M${start.x} ${start.y} Q${control.x} ${control.y} ${end.x} ${end.y}`;
  return (
    <>
      <text fill={ink} fontSize={labelSize} textAnchor="middle" x={mobile ? 160 : 340} y={mobile ? 28 : 32}>
        F″(u)=csc²(M−u)&gt;0
      </text>
      <path d={curve} data-jensen-curve="quadratic" fill="none" stroke={ink} strokeWidth="3" />
      <line
        data-jensen-secant="two-input"
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
        stroke={copper}
        strokeWidth="2.2"
        strokeDasharray="7 6"
      />
      <circle cx={start.x} cy={start.y} data-jensen-input="u1" fill={red} r="6" />
      <circle cx={end.x} cy={end.y} data-jensen-input="u2" fill={red} r="6" />
      <circle cx={meanX} cy={secantMeanY} data-jensen-mean="secant" fill={copper} r="5" />
      <circle cx={meanX} cy={graphMeanY} data-jensen-mean="graph" fill={teal} r="6" />
      <line
        data-jensen-gap="strict"
        x1={meanX}
        y1={secantMeanY}
        x2={meanX}
        y2={graphMeanY}
        stroke={teal}
        strokeWidth="2"
        strokeDasharray="5 5"
      />
      <text fill={red} fontSize={labelSize} x={start.x - (mobile ? 4 : 10)} y={start.y + 26}>u₁</text>
      <text fill={red} fontSize={labelSize} x={end.x - 4} y={end.y - 14}>u₂</text>
      <text fill={teal} fontSize={labelSize} textAnchor="middle" x={meanX} y={graphMeanY + 28}>(u₁+u₂)/2</text>
      <text fill={ink} fontSize={labelSize} textAnchor="middle" x={mobile ? 160 : 340} y={mobile ? 360 : 355}>
        F((u₁+u₂)/2)&lt;(F(u₁)+F(u₂))/2
      </text>
      <text fill={ink} fontSize={labelSize} textAnchor="middle" x={mobile ? 160 : 340} y={mobile ? 390 : 383}>
        equality in d inputs iff u₁=⋯=u<tspan baselineShift="sub" fontSize={labelSize}>d</tspan>
      </text>
    </>
  );
}

function CycleLedger({ marker, mobile = false }: { marker: string; mobile?: boolean }) {
  if (mobile) {
    const rows = [92, 245, 398];
    return (
      <>
        {rows.map((y, index) => (
          <g data-block={index + 1} key={y}>
            <text x="20" y={y + 6} fill={ink} fontSize="16">B{index + 1}</text>
            <Dot x={78} y={y} r={5} />
            <Dot x={148} y={y} r={5} />
            <Dot x={218} y={y} color={red} r={5} />
            <path data-edge-kind="internal" d={`M84 ${y} L141 ${y} M154 ${y} L211 ${y}`} stroke={ink} strokeWidth="2.4" markerEnd={`url(#${marker}-ink)`} />
            <path data-edge-kind="local-return" data-edge-weight="beta" d={`M218 ${y - 9} Q148 ${y - 63} 78 ${y - 9}`} fill="none" stroke={copper} strokeWidth="3" markerEnd={`url(#${marker}-copper)`} />
            <text x="145" y={y - 52} fill={copper} fontSize="17" textAnchor="middle">β</text>
          </g>
        ))}
        <g data-cycle-kind="all-inter-block">
          <path data-edge-kind="inter-block" data-edge-weight="alpha" d="M224 100 Q270 128 78 237" fill="none" stroke={red} strokeWidth="3" markerEnd={`url(#${marker})`} />
          <path data-edge-kind="inter-block" data-edge-weight="alpha" d="M224 253 Q270 281 78 390" fill="none" stroke={red} strokeWidth="3" markerEnd={`url(#${marker})`} />
          <path data-edge-kind="inter-block" data-edge-weight="alpha" d="M224 406 Q305 500 292 62 Q286 34 84 83" fill="none" stroke={red} strokeWidth="3" markerEnd={`url(#${marker})`} />
          <text x="249" y="148" fill={red} fontSize="17">α</text>
          <text x="249" y="301" fill={red} fontSize="17">α</text>
          <text x="278" y="466" fill={red} fontSize="17">α</text>
        </g>
        <text x="160" y="535" fill={ink} fontSize="16" textAnchor="middle">within-block cycles or the cycle through all blocks</text>
      </>
    );
  }

  const blocks = [115, 335, 555];
  return (
    <>
      {blocks.map((base, index) => (
        <g data-block={index + 1} key={base}>
          <Dot x={base - 45} y={185} /><Dot x={base} y={185} /><Dot x={base + 45} y={185} color={red} />
          <path data-edge-kind="internal" d={`M${base - 38} 185 L${base - 7} 185 M${base + 7} 185 L${base + 38} 185`} stroke={ink} strokeWidth="2.4" markerEnd={`url(#${marker}-ink)`} />
          <path data-edge-kind="local-return" data-edge-weight="beta" d={`M${base + 45} 170 Q${base} 98 ${base - 45} 170`} fill="none" stroke={copper} strokeWidth="3" markerEnd={`url(#${marker}-copper)`} />
          <text x={base} y="112" fill={copper} fontSize="17" textAnchor="middle">β</text>
          <text x={base + 35} y="215" fill={red} fontSize="16">T{index + 1}</text>
        </g>
      ))}
      <g data-cycle-kind="all-inter-block">
        <path data-edge-kind="inter-block" data-edge-weight="alpha" d="M160 200 Q225 285 290 200" fill="none" stroke={red} strokeWidth="3.5" markerEnd={`url(#${marker})`} />
        <path data-edge-kind="inter-block" data-edge-weight="alpha" d="M380 200 Q445 285 510 200" fill="none" stroke={red} strokeWidth="3.5" markerEnd={`url(#${marker})`} />
        <path data-edge-kind="inter-block" data-edge-weight="alpha" d="M600 176 Q640 55 340 48 Q40 55 70 176" fill="none" stroke={red} strokeWidth="3.5" markerEnd={`url(#${marker})`} />
        <text x="225" y="270" fill={red} fontSize="17" textAnchor="middle">α</text>
        <text x="445" y="270" fill={red} fontSize="17" textAnchor="middle">α</text>
        <text x="340" y="38" fill={red} fontSize="17" textAnchor="middle">α</text>
      </g>
      <text x="340" y="337" fill={ink} fontSize="17" textAnchor="middle">the cycle through all blocks meets every within-block cycle</text>
    </>
  );
}

function SparseCases({ marker, mobile = false }: { marker: string; mobile?: boolean }) {
  if (mobile) {
    return (
      <>
        <g data-regime="s-le-dq">
          <text x="18" y="36" fill={ink} fontSize="17">s ≤ dq: enter a block part-way through</text>
          <Dot x={40} y={105} r={5} /><Dot x={100} y={105} r={5} /><Dot x={160} y={105} color={red} r={5} />
          <Dot x={205} y={105} r={5} /><Dot x={260} y={105} color={red} r={5} />
          <path data-edge-kind="internal" d="M46 105 L93 105 M106 105 L153 105 M211 105 L253 105" stroke={ink} strokeWidth="2.4" markerEnd={`url(#${marker}-ink)`} />
          <path data-edge-kind="inter-block" data-edge-weight="alpha" data-entry-length="ell-1" d="M166 112 Q184 144 205 112" fill="none" stroke={red} strokeWidth="3" markerEnd={`url(#${marker})`} />
          <text x="178" y="129" fill={red} fontSize="17">α</text>
          <text data-math-label="ell-1" x="184" y="157" fill={red} fontSize="17" textAnchor="middle">ℓ₁=s−(d−1)q</text>
        </g>
        <g data-regime="s-gt-dq">
          <text x="18" y="232" fill={ink} fontSize="17">s &gt; dq: subdivide one inter-block edge</text>
          <Dot x={25} y={315} color={red} r={5} /><Dot x={91} y={315} color={copper} r={5} /><Dot x={226} y={315} color={copper} r={5} /><Dot x={295} y={315} r={5} />
          <path data-edge-kind="subdivided-inter-block" data-edge-weight="alpha" d="M31 315 L84 315" stroke={red} strokeWidth="2.8" markerEnd={`url(#${marker})`} />
          <path data-edge-kind="subdivision" data-edge-weight="one" d="M97 315 L132 315 M184 315 L219 315 M232 315 L288 315" stroke={ink} strokeWidth="2.4" markerEnd={`url(#${marker}-ink)`} />
          <text x="58" y="296" fill={red} fontSize="17" textAnchor="middle">α</text>
          <text data-subdivision-vertex="w-1" x="91" y="347" fill={copper} fontSize="17" textAnchor="middle">w₁</text>
          <text data-subdivision-vertex="ellipsis" x="159" y="322" fill={ink} fontSize="22" textAnchor="middle">⋯</text>
          <text data-subdivision-vertex="w-K" x="226" y="347" fill={copper} fontSize="17" textAnchor="middle">w<tspan baselineShift="sub" fontSize="16">K</tspan></text>
          <text x="158" y="382" fill={ink} fontSize="16" textAnchor="middle">K=s−dq new vertices; remaining edge weights are 1</text>
        </g>
      </>
    );
  }

  return (
    <>
      <g data-regime="s-le-dq">
        <text x="56" y="42" fill={ink} fontSize="18">s ≤ dq: an inter-block edge enters part-way through a block</text>
        <Dot x={80} y={125} /><Dot x={145} y={125} /><Dot x={210} y={125} color={red} />
        <Dot x={365} y={125} /><Dot x={430} y={125} /><Dot x={495} y={125} color={red} />
        <path data-edge-kind="internal" d="M86 125 L138 125 M151 125 L203 125 M371 125 L423 125 M436 125 L488 125" stroke={ink} strokeWidth="2.5" markerEnd={`url(#${marker}-ink)`} />
        <path data-edge-kind="inter-block" data-edge-weight="alpha" data-entry-length="ell-1" d="M216 139 Q290 210 365 139" fill="none" stroke={red} strokeWidth="3" markerEnd={`url(#${marker})`} />
        <text x="246" y="167" fill={red} fontSize="18">α</text>
        <text data-math-label="ell-1" x="290" y="205" fill={red} fontSize="18" textAnchor="middle">ℓ₁=s−(d−1)q</text>
      </g>
      <g data-regime="s-gt-dq">
        <text x="56" y="255" fill={ink} fontSize="18">s &gt; dq: K=s−dq subdivision vertices lengthen one inter-block edge</text>
        <Dot x={75} y={325} color={red} /><Dot x={180} y={325} color={copper} /><Dot x={450} y={325} color={copper} /><Dot x={570} y={325} />
        <path data-edge-kind="subdivided-inter-block" data-edge-weight="alpha" d="M82 325 L173 325" stroke={red} strokeWidth="3" markerEnd={`url(#${marker})`} />
        <path data-edge-kind="subdivision" data-edge-weight="one" d="M187 325 L270 325 M370 325 L443 325 M457 325 L563 325" stroke={ink} strokeWidth="2.5" markerEnd={`url(#${marker}-ink)`} />
        <text x="128" y="305" fill={red} fontSize="18" textAnchor="middle">α</text>
        <text data-subdivision-vertex="w-1" x="180" y="360" fill={copper} fontSize="18" textAnchor="middle">w₁</text>
        <text data-subdivision-vertex="ellipsis" x="320" y="333" fill={ink} fontSize="25" textAnchor="middle">⋯</text>
        <text data-subdivision-vertex="w-K" x="450" y="360" fill={copper} fontSize="18" textAnchor="middle">w<tspan baselineShift="sub" fontSize="16">K</tspan></text>
        <text x="510" y="305" fill={ink} fontSize="17" textAnchor="middle">weight 1</text>
      </g>
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
      <marker id={`${marker}-copper`} markerHeight="7" markerWidth="8" orient="auto" refX="7" refY="3.5">
        <path d="M0,0 L8,3.5 L0,7 Z" fill={copper} />
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
    status: "Exact obtuse vector-equation diagram",
    title: "An obtuse n = 3 instance of 1 = βz^q + αw",
    description:
      "For n equals three and x equals eleven twenty-fourths, A equals pi over six and B equals three pi over four. A red vector beta z to the q at angle minus A and a teal vector alpha w at the obtuse angle B are joined head to tail. The teal vector has negative real component. Their imaginary components cancel and their real components sum to the positive real vector one, drawn on a parallel line below so that its ink arrowhead remains distinct from the teal arrowhead.",
    caption:
      "Plate IX.2. On the n=3 Farey interval [1/3,1/2], take x=11/24, so A=π/6 and B=3π/4. In 1=βz^q+αw with w^d=z^s, βz^q has argument −A=−π/6 and αw has argument B=3π/4. Their imaginary components cancel; αw has negative real component, while the two real components sum to one. The total vector is translated downward only to keep the arrowheads distinct.",
  },
  "terminal-three": {
    status: "Exact algebraic diagram",
    title: "The exceptional candidate curve for n = 3",
    description:
      "The nonreal branch is the exact vertical segment with real part minus one half, from exp of two pi i over three down to minus one half. The selected real branch is the exact horizontal segment from minus one half to minus one.",
    caption:
      "Plate IX.3. For n=3, the nonreal branch is the vertical segment {−1/2+iy: 0≤y≤√3/2}, and the selected real branch is [−1,−1/2].",
  },
  reflection: {
    status: "Exact order diagram — distances not to scale",
    title: "Reflection reverses the selected Farey interval",
    description:
      "Two rational rows show that t maps to one minus t by crossing arrows: p over q maps to q minus p over q, and r over s maps to s minus r over s. A second panel shows mu equal to the complex conjugate of lambda across the real axis at the same modulus.",
    caption:
      "Plate X.1. From p/q<y<r/s, the map t↦1−t gives (s−r)/s<x<(q−p)/q: p/q maps to (q−p)/q and r/s maps to (s−r)/s. Endpoint order reverses while denominators are preserved. In the conjugate case μ=λ̄ is the reflection of λ across the real axis and |μ|=|λ|. Rational-row spacings are schematic.",
  },
  jensen: {
    status: "Strict-convexity schematic — not to scale",
    title: "Equality in Jensen’s inequality forces equal factor arguments",
    description:
      "A quadratic strictly convex graph lies below the secant at the mean of two inputs. The displayed strict inequality is the two-input instance of the d-input Jensen inequality used in the proof.",
    caption:
      "Plate X.2. The drawing shows the two-input case F((u₁+u₂)/2)<(F(u₁)+F(u₂))/2. In the proof, F((Σuⱼ)/d)≤ΣF(uⱼ)/d, with equality exactly when u₁=⋯=u_d. Since β↦u(β) is strictly increasing, equality is equivalent to β₁=⋯=β_d.",
  },
  "cycle-ledger": { title: "Within-block cycles and the cycle through all blocks", description: "Three directed blocks have copper return edges of weight beta and red inter-block edges of weight alpha. The graph contains all these edges simultaneously.", caption: "Plate XI.1. The graph contains all displayed edges simultaneously. A pairwise vertex-disjoint cycle collection may contain any subset of the within-block cycles, or the single cycle through all blocks; that cycle meets every within-block cycle, so the two alternatives cannot be selected together." },
  "sparse-cases": {
    title: "The two graph regimes before padding",
    description: "When s is at most d q, an inter-block edge enters part-way through a block. When s exceeds d q, one inter-block edge is subdivided through K new vertices.",
    caption: (
      <>
        Plate XI.2. If s≤dq, the chosen entry positions leave ℓⱼ vertices to be
        traversed in block j and make the cycle through all blocks have length s.
        If s&gt;dq, inserting K=s−dq vertices w₁,…,w<sub>K</sub> on one
        inter-block edge increases that cycle&apos;s length from dq to s; the first
        replacement edge has weight α and the remaining replacement edges have
        weight 1.
      </>
    ),
  },
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
    kind === "terminal-three" ||
    kind === "reflection" ||
    kind === "jensen" ||
    kind === "cycle-ledger" ||
    kind === "sparse-cases";
  const mobileMinLabelSize =
    kind === "reflection" || kind === "jensen" || kind === "cycle-ledger" || kind === "sparse-cases"
      ? 16
      : kind === "farey-five" || kind === "rooted-chord" || kind === "terminal-three"
      ? 17
      : 18;
  const mobileViewBox =
    kind === "cycle-ledger"
      ? "0 0 320 570"
      : kind === "sparse-cases"
        ? "0 0 320 410"
        : kind === "reflection"
      ? "0 0 320 500"
      : kind === "jensen"
        ? "0 0 320 410"
        : "0 0 320 390";
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
      </svg>
      {hasDedicatedMobileLayout ? (
        <svg
          aria-labelledby={`sf-${kind}-mobile-title sf-${kind}-mobile-desc`}
          className="topic-ii-concept-svg topic-ii-concept-svg-mobile"
          data-figure-layout="mobile"
          data-mobile-min-label-size={mobileMinLabelSize}
          role="img"
          viewBox={mobileViewBox}
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
          {kind === "reflection" ? <Reflection marker={mobileMarker} mobile /> : null}
          {kind === "jensen" ? <Jensen mobile /> : null}
          {kind === "cycle-ledger" ? <CycleLedger marker={mobileMarker} mobile /> : null}
          {kind === "sparse-cases" ? <SparseCases marker={mobileMarker} mobile /> : null}
        </svg>
      ) : null}
      <figcaption>{description.caption}</figcaption>
    </figure>
  );
}

export function StochasticAttainmentComparison() {
  return (
    <figure className="topic-ii-concept-figure topic-xi-attainment-comparison">
      <div className="topic-ii-concept-heading">
        <span>Exact implication diagram</span>
        <span>Attainment closes the radial comparison</span>
      </div>
      <div
        aria-label="The upper bound rho at most rho star and the realization bound rho star at most rho imply equality and equal Jensen parameters."
        className="topic-xi-attainment-grid"
        data-topic-xi-equation-plate="attainment"
      >
        <section>
          <p>Topic X · upper comparison</p>
          <math aria-label="rho is at most rho star" display="block">
            <mrow><mi>ρ</mi><mo>≤</mo><msub><mi>ρ</mi><mo>∗</mo></msub></mrow>
          </math>
          <span>The strict-convexity argument gives the outward bound.</span>
        </section>
        <section>
          <p>Topic XI · stochastic realization</p>
          <math aria-label="rho star is at most R sub N of theta, which equals rho" display="block">
            <mrow>
              <msub><mi>ρ</mi><mo>∗</mo></msub><mo>≤</mo>
              <msub><mi>R</mi><mi>N</mi></msub><mo>(</mo><mi>θ</mi><mo>)</mo>
              <mo>=</mo><mi>ρ</mi>
            </mrow>
          </math>
          <span>The constructed matrix makes the candidate radius attainable.</span>
        </section>
        <section>
          <p>Equality case</p>
          <math aria-label="rho equals rho star, all beta parameters agree, and all alpha parameters agree" display="block">
            <mrow>
              <mi>ρ</mi><mo>=</mo><msub><mi>ρ</mi><mo>∗</mo></msub>
              <mo>,</mo>
              <msub><mi>β</mi><mn>1</mn></msub><mo>=</mo><mo>⋯</mo><mo>=</mo><msub><mi>β</mi><mi>d</mi></msub>
              <mo>,</mo>
              <msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>⋯</mo><mo>=</mo><msub><mi>α</mi><mi>d</mi></msub>
            </mrow>
          </math>
          <span>Equality activates the strict Jensen equality condition.</span>
        </section>
      </div>
      <figcaption>
        Plate XI.3. Topic X supplies ρ≤ρ*. Corollary II.7.4 supplies an order-<var>N</var>
        {" "}stochastic matrix with eigenvalue ρ*e<sup>iθ</sup>, so radial maximality gives
        ρ*≤R<sub>N</sub>(θ)=ρ. Hence ρ=ρ*, and strict Jensen equality forces
        β₁=⋯=β<sub>d</sub> and α₁=⋯=α<sub>d</sub>.
      </figcaption>
    </figure>
  );
}
