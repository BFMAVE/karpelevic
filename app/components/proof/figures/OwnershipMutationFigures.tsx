type FigureKind =
  | "half-open"
  | "face-rigidity"
  | "replacement"
  | "clip"
  | "area-minimizer"
  | "hausdorff"
  | "endpoint-ledger"
  | "interlacing"
  | "lifted-shift"
  | "surgery"
  | "residue-block";

const ink = "#14273d";
const red = "#8b2f35";
const copper = "#a2683a";
const accessibleCopper = "#70411f";
const teal = "#2f626b";
const violet = "#5c4778";
const paper = "#f5efdd";
const pale = "#d8e2e7";

const line = { fill: "none", stroke: ink, strokeWidth: 2.4 } as const;
const accentLine = { fill: "none", stroke: red, strokeWidth: 4 } as const;

function Dot({ x, y, accent = false, open = false }: { x: number; y: number; accent?: boolean; open?: boolean }) {
  return (
    <circle
      cx={x}
      cy={y}
      r="6"
      fill={open ? paper : accent ? red : ink}
      stroke={accent ? red : ink}
      strokeWidth="2"
    />
  );
}

function HalfOpen() {
  return (
    <>
      <path d="M90 225 L310 105 L545 205" {...line} />
      <path d="M90 225 L310 105" {...accentLine} />
      <Dot x={90} y={225} open accent />
      <Dot x={310} y={105} accent />
      <Dot x={545} y={205} />
      <text x="55" y="255" fill={red}>xᵢ₋₁ ∉ Eᵢ⁺</text>
      <text x="43" y="283" fill={accessibleCopper}>xᵢ₋₁ ∈ Eᵢ₋₁⁺</text>
      <text x="268" y="80" fill={red}>xᵢ ∈ Eᵢ⁺</text>
      <text x="430" y="244" fill={ink}>outgoing side Eᵢ₊₁</text>
      <text x="340" y="315" fill={ink} fontSize="18" textAnchor="middle">Eᵢ⁺ = (xᵢ₋₁, xᵢ]</text>
    </>
  );
}

function HalfOpenMobile() {
  return (
    <>
      <path d="M34 205 L180 82 L326 196" {...line} />
      <path d="M34 205 L180 82" {...accentLine} />
      <Dot x={34} y={205} open accent />
      <Dot x={180} y={82} accent />
      <Dot x={326} y={196} />
      <text x="180" y="42" fill={red} fontSize="17" textAnchor="middle">xᵢ ∈ Eᵢ⁺</text>
      <text x="180" y="258" fill={ink} fontSize="18" textAnchor="middle">Eᵢ⁺ = (xᵢ₋₁, xᵢ]</text>
      <text x="180" y="305" fill={red} fontSize="17" textAnchor="middle">xᵢ₋₁ ∉ Eᵢ⁺</text>
      <text x="180" y="336" fill={accessibleCopper} fontSize="17" textAnchor="middle">xᵢ₋₁ ∈ Eᵢ₋₁⁺</text>
      <text x="180" y="378" fill={ink} fontSize="15" textAnchor="middle">the shared endpoint belongs to the incoming side</text>
    </>
  );
}

function FaceRigidity() {
  return (
    <>
      <polygon points="105,260 150,80 485,65 590,225 420,290" fill={pale} stroke={ink} strokeWidth="2.4" />
      <line x1="125" y1="81.12" x2="520" y2="63.43" stroke={red} strokeWidth="3" />
      <Dot x={220} y={76.87} accent />
      <Dot x={420} y={67.91} accent />
      <Dot x={320} y={72.39} />
      <text x="207" y="48" fill={ink}>A</text>
      <text x="417" y="42" fill={ink}>B</text>
      <text x="282" y="111" fill={ink}>(1−s)A+sB</text>
      {[112, 142, 172].map((y) => <line key={y} x1="135" y1={y} x2="520" y2={y - 17.24} stroke={copper} strokeWidth="1" strokeDasharray="7 7" />)}
      <text x="340" y="330" fill={ink} fontSize="16" textAnchor="middle">both endpoints lie on the same exposed side</text>
    </>
  );
}

function FaceRigidityMobile() {
  return (
    <>
      <polygon points="34,278 74,96 290,78 328,246 244,320 96,326" fill={pale} stroke={ink} strokeWidth="2.4" />
      <line x1="62" y1="97" x2="308" y2="76" stroke={red} strokeWidth="3" />
      <Dot x={112} y={92.7} accent />
      <Dot x={260} y={80.1} accent />
      <Dot x={186} y={86.4} />
      <text x="105" y="62" fill={ink} fontSize="17">A</text>
      <text x="257" y="50" fill={ink} fontSize="17">B</text>
      <text x="186" y="132" fill={ink} fontSize="16" textAnchor="middle">(1−s)A + sB</text>
      <text x="180" y="365" fill={ink} fontSize="16" textAnchor="middle">all three points lie on the same</text>
      <text x="180" y="390" fill={ink} fontSize="16" textAnchor="middle">exposed side of the polygon</text>
    </>
  );
}

function VertexReplacement() {
  return (
    <>
      <text x="180" y="24" fill={ink} textAnchor="middle">before</text>
      <path d="M55 270 L205 70 L330 255" {...line} />
      <path d="M55 270 L145 150" stroke={red} strokeWidth="4" fill="none" />
      <Dot x={55} y={270} />
      <Dot x={145} y={150} accent />
      <Dot x={205} y={70} />
      <Dot x={330} y={255} />
      <text x="34" y="297" fill={ink}>xᵢ₋₁</text>
      <text x="116" y="137" fill={red}>ξᵢ</text>
      <text x="217" y="68" fill={ink}>xᵢ</text>
      <text x="309" y="282" fill={ink}>xᵢ₊₁</text>

      <line x1="342" y1="185" x2="380" y2="185" stroke={copper} strokeWidth="2.5" />
      <path d="M372 178 L382 185 L372 192" fill="none" stroke={copper} strokeWidth="2.5" />

      <text x="520" y="24" fill={ink} textAnchor="middle">after replacing xᵢ by ξᵢ</text>
      <path d="M390 270 L480 150 L655 255" fill="none" stroke={red} strokeWidth="3.2" />
      <path d="M480 150 L540 70 L655 255" fill="none" stroke={copper} strokeWidth="1.8" strokeDasharray="7 7" />
      <Dot x={390} y={270} />
      <Dot x={480} y={150} accent />
      <circle cx="540" cy="70" r="6" fill={paper} stroke={copper} strokeWidth="2" />
      <path d="M534 64 L546 76 M546 64 L534 76" stroke={copper} strokeWidth="1.8" />
      <Dot x={655} y={255} />
      <text x="367" y="297" fill={ink}>xᵢ₋₁</text>
      <text x="450" y="137" fill={red}>ξᵢ</text>
      <text x="550" y="77" fill={copper}>xᵢ removed</text>
      <text x="615" y="282" fill={ink}>xᵢ₊₁</text>
      <text x="589" y="214" fill={ink} fontSize="20" fontStyle="italic">P′</text>

      <path d="M404 321 H479" stroke={ink} strokeWidth="2.2" />
      <circle cx="404" cy="321" r="5" fill={paper} stroke={ink} strokeWidth="2" />
      <circle cx="479" cy="321" r="5" fill={red} stroke={red} strokeWidth="2" />
      <path d="M493 321 H568" stroke={ink} strokeWidth="2.2" />
      <circle cx="493" cy="321" r="5" fill={paper} stroke={ink} strokeWidth="2" />
      <circle cx="568" cy="321" r="5" fill={red} stroke={red} strokeWidth="2" />
      <text x="442" y="349" fill={ink} fontSize="14" textAnchor="middle">(xᵢ₋₁, ξᵢ]</text>
      <text x="531" y="349" fill={ink} fontSize="14" textAnchor="middle">(ξᵢ, xᵢ₊₁]</text>
    </>
  );
}

type Point = readonly [number, number];

function regularHeptagonClipGeometry(cx = 340, cy = 188, radius = 142) {
  const vertices = Array.from({ length: 7 }, (_, index) => {
    // Decreasing SVG angles correspond to increasing mathematical angles because
    // the SVG y-axis points downward.
    const angle = -Math.PI / 2 - (2 * Math.PI * index) / 7;
    return [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)] as Point;
  });
  const imageVertices = vertices.map((point, index) => {
    const next = vertices[(index + 1) % vertices.length];
    return [(point[0] + next[0]) / 2, (point[1] + next[1]) / 2] as Point;
  });
  const removedVertex = vertices[0];
  const rightEndpoint = imageVertices[6];
  const leftEndpoint = imageVertices[0];
  const retained = [rightEndpoint, leftEndpoint, ...vertices.slice(1)] as readonly Point[];
  return { cx, cy, radius, vertices, imageVertices, removedVertex, rightEndpoint, leftEndpoint, retained };
}

function VertexReplacementMobile() {
  return (
    <>
      <text x="180" y="22" fill={ink} fontSize="19" textAnchor="middle">before</text>
      <path d="M42 220 L154 58 L310 220" {...line} />
      <path d="M42 220 L104 130" stroke={red} strokeWidth="4" fill="none" />
      <Dot x={42} y={220} />
      <Dot x={104} y={130} accent />
      <Dot x={154} y={58} />
      <Dot x={310} y={220} />
      <text x="23" y="246" fill={ink} fontSize="16">xᵢ₋₁</text>
      <text x="76" y="119" fill={red} fontSize="17">ξᵢ</text>
      <text x="166" y="63" fill={ink} fontSize="17">xᵢ</text>
      <text x="286" y="246" fill={ink} fontSize="16">xᵢ₊₁</text>

      <line x1="180" y1="250" x2="180" y2="292" stroke={copper} strokeWidth="2.5" />
      <path d="M173 282 L180 293 L187 282" fill="none" stroke={copper} strokeWidth="2.5" />

      <text x="180" y="326" fill={ink} fontSize="19" textAnchor="middle">after replacing xᵢ by ξᵢ</text>
      <path d="M42 520 L104 430 L310 520" fill="none" stroke={red} strokeWidth="3.2" />
      <path d="M104 430 L154 358 L310 520" fill="none" stroke={copper} strokeWidth="1.8" strokeDasharray="7 7" />
      <Dot x={42} y={520} />
      <Dot x={104} y={430} accent />
      <circle cx="154" cy="358" r="6" fill={paper} stroke={copper} strokeWidth="2" />
      <path d="M148 352 L160 364 M160 352 L148 364" stroke={copper} strokeWidth="1.8" />
      <Dot x={310} y={520} />
      <text x="23" y="546" fill={ink} fontSize="16">xᵢ₋₁</text>
      <text x="76" y="419" fill={red} fontSize="17">ξᵢ</text>
      <text x="164" y="365" fill={copper} fontSize="16">xᵢ removed</text>
      <text x="286" y="546" fill={ink} fontSize="16">xᵢ₊₁</text>
      <text x="231" y="474" fill={ink} fontSize="19" fontStyle="italic">P′</text>
      <text x="88" y="586" fill={ink} fontSize="15" textAnchor="middle">(xᵢ₋₁, ξᵢ]</text>
      <text x="247" y="586" fill={ink} fontSize="15" textAnchor="middle">(ξᵢ, xᵢ₊₁]</text>
    </>
  );
}

function ImageEdgeClipMobile() {
  const { cx, cy, vertices, imageVertices, removedVertex, rightEndpoint, leftEndpoint, retained } = regularHeptagonClipGeometry(180, 250, 116);
  const points = (items: readonly Point[]) => items.map(([x, y]) => `${x},${y}`).join(" ");
  return (
    <>
      <text x="180" y="30" fill={ink} fontSize="17" textAnchor="middle">one old vertex is removed</text>
      <path d={`M180 38 L${removedVertex[0]} ${removedVertex[1] - 8}`} stroke={ink} strokeWidth="1.5" />
      <polygon points={points(retained)} fill={pale} opacity="0.72" />
      <polygon points={points([rightEndpoint, removedVertex, leftEndpoint])} fill={red} opacity="0.14" />
      <polygon points={points(vertices)} fill="none" stroke={ink} strokeWidth="2.6" />
      <polygon points={points(imageVertices)} fill={paper} fillOpacity="0.72" stroke={red} strokeWidth="2.2" />
      <polyline points={points([rightEndpoint, removedVertex, leftEndpoint])} fill="none" stroke={copper} strokeWidth="5" />
      <line x1={rightEndpoint[0]} y1={rightEndpoint[1]} x2={leftEndpoint[0]} y2={leftEndpoint[1]} stroke={red} strokeWidth="4" />
      <Dot x={removedVertex[0]} y={removedVertex[1]} />
      <Dot x={leftEndpoint[0]} y={leftEndpoint[1]} accent />
      <Dot x={rightEndpoint[0]} y={rightEndpoint[1]} accent />
      <circle cx={cx} cy={cy} r="3.5" fill={ink} />
      <text x={cx + 10} y={cy + 5} fill={ink} fontSize="15">0</text>
      <text x="18" y="112" fill={copper} fontSize="16">discarded arc</text>
      <path d={`M118 116 L${leftEndpoint[0] - 5} ${leftEndpoint[1] - 1}`} stroke={copper} strokeWidth="1.4" />
      <text x="235" y="112" fill={red} fontSize="16">edge of Q</text>
      <path d={`M278 117 L${rightEndpoint[0] + 4} ${rightEndpoint[1] - 1}`} stroke={red} strokeWidth="1.4" />
      <text x="17" y="198" fill={red} fontSize="16">removed region</text>
      <path d="M135 193 L168 148" stroke={red} strokeWidth="1.4" />
      <text x="272" y="245" fill={red} fontSize="17">Q = λP</text>
      <text x="180" y="405" fill={ink} fontSize="17" textAnchor="middle">Q stays in the retained half-plane,</text>
      <text x="180" y="430" fill={ink} fontSize="17" textAnchor="middle">so λ(P ∩ H) stays there as well.</text>
    </>
  );
}

function AreaMinimizerMobile() {
  const center = [180, 220] as const;
  const radius = 115;
  const v = [180, 105] as const;
  const p1 = [263, 148] as const;
  const p2 = [288, 234] as const;
  const p3 = [245, 313] as const;
  const p4 = [133, 324] as const;
  const p5 = [72, 250] as const;
  const p6 = [86, 158] as const;
  const leftEndpoint = [95.1, 278] as const;
  const rightEndpoint = [264.1, 278] as const;
  const polygon = [v, p1, p2, p3, p4, p5, p6];
  const retained = [v, p1, p2, rightEndpoint, leftEndpoint, p5, p6];
  const removedRegion = [rightEndpoint, p3, p4, leftEndpoint];
  const points = (items: readonly Point[]) => items.map(([x, y]) => `${x},${y}`).join(" ");
  return (
    <>
      <circle cx={center[0]} cy={center[1]} r={radius} fill="none" stroke={copper} strokeWidth="1.7" strokeDasharray="7 7" />
      <polygon points={points(retained)} fill={pale} opacity="0.75" />
      <polygon points={points(removedRegion)} fill={red} opacity="0.15" />
      <polygon points={points(polygon)} fill="none" stroke={ink} strokeWidth="2.6" />
      <polyline points={points([rightEndpoint, p3, p4, leftEndpoint])} fill="none" stroke={copper} strokeWidth="5" />
      <line x1={leftEndpoint[0]} y1={leftEndpoint[1]} x2={rightEndpoint[0]} y2={rightEndpoint[1]} stroke={red} strokeWidth="4" />
      <Dot x={v[0]} y={v[1]} accent />
      <Dot x={p3[0]} y={p3[1]} />
      <Dot x={p4[0]} y={p4[1]} />
      <Dot x={leftEndpoint[0]} y={leftEndpoint[1]} open accent />
      <Dot x={rightEndpoint[0]} y={rightEndpoint[1]} open accent />
      <circle cx={center[0]} cy={center[1]} r="3.5" fill={ink} />
      <text x="192" y="96" fill={red} fontSize="17">v, |v| = 1</text>
      <text x="237" y="130" fill={copper} fontSize="16">unit circle</text>
      <text x="180" y="238" fill={ink} fontSize="16" textAnchor="middle">retained polygon P ∩ H</text>
      <text x="270" y="269" fill={red} fontSize="16">image edge</text>
      <text x="180" y="306" fill={red} fontSize="15" textAnchor="middle">removed region</text>
      <text x="180" y="359" fill={copper} fontSize="16" textAnchor="middle">discarded open boundary arc Aⱼ°</text>
      <text x="180" y="414" fill={ink} fontSize="17" textAnchor="middle">The vertex v satisfying |v| = 1 remains.</text>
      <text x="180" y="438" fill={ink} fontSize="17" textAnchor="middle">The clipped polygon stays normalized.</text>
    </>
  );
}

export function verifyRegularHeptagonClipGeometry() {
  const geometry = regularHeptagonClipGeometry();
  const { cx, cy, vertices, imageVertices, rightEndpoint, leftEndpoint } = geometry;
  const theta = Math.PI / 7;
  const rho = Math.cos(theta);
  const tolerance = 1e-8;
  const cross = (a: Point, b: Point, p: Point) =>
    (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]);
  const distance = (a: Point, b: Point) => Math.hypot(a[0] - b[0], a[1] - b[1]);

  const lambdaErrors = vertices.map((point, index) => {
    const dx = point[0] - cx;
    const dy = point[1] - cy;
    const transformed: Point = [
      cx + rho * (dx * Math.cos(theta) + dy * Math.sin(theta)),
      cy + rho * (-dx * Math.sin(theta) + dy * Math.cos(theta)),
    ];
    return distance(transformed, imageVertices[index]);
  });

  const centroid: Point = [
    vertices.reduce((sum, point) => sum + point[0], 0) / vertices.length,
    vertices.reduce((sum, point) => sum + point[1], 0) / vertices.length,
  ];
  const imageContained = vertices.every((start, index) => {
    const end = vertices[(index + 1) % vertices.length];
    const inwardOrientation = Math.sign(cross(start, end, centroid));
    return imageVertices.every((point) => cross(start, end, point) * inwardOrientation >= -tolerance);
  });

  const imageSideSigns = imageVertices.slice(1, 6).map((point) => cross(rightEndpoint, leftEndpoint, point));
  const retainedSign = Math.sign(imageSideSigns.find((value) => Math.abs(value) > tolerance) ?? 0);
  const removedOldVertexCount = vertices.filter((point) => {
    const sign = Math.sign(cross(rightEndpoint, leftEndpoint, point));
    return sign !== 0 && sign !== retainedSign;
  }).length;

  return {
    lambdaImageError: Math.max(...lambdaErrors),
    imageContained,
    removedOldVertexCount,
    valid: Math.max(...lambdaErrors) < tolerance && imageContained && removedOldVertexCount === 1,
  };
}

function ImageEdgeClip() {
  const { cx, cy, vertices, imageVertices, removedVertex, rightEndpoint, leftEndpoint, retained } = regularHeptagonClipGeometry();
  const verification = verifyRegularHeptagonClipGeometry();
  if (!verification.valid) throw new Error("The exact regular-heptagon clipping plate failed its geometric verification.");
  const points = (items: readonly Point[]) => items.map(([x, y]) => `${x},${y}`).join(" ");

  return (
    <>
      <polygon points={points(retained)} fill={pale} opacity="0.72" />
      <polygon points={points([rightEndpoint, removedVertex, leftEndpoint])} fill={red} opacity="0.14" />
      <polygon points={points(vertices)} fill="none" stroke={ink} strokeWidth="2.6" />
      <polygon points={points(imageVertices)} fill={paper} fillOpacity="0.72" stroke={red} strokeWidth="2.2" />
      <polyline points={points([rightEndpoint, removedVertex, leftEndpoint])} fill="none" stroke={copper} strokeWidth="5" />
      <line x1={rightEndpoint[0]} y1={rightEndpoint[1]} x2={leftEndpoint[0]} y2={leftEndpoint[1]} stroke={red} strokeWidth="4" />
      <Dot x={removedVertex[0]} y={removedVertex[1]} />
      <Dot x={leftEndpoint[0]} y={leftEndpoint[1]} accent />
      <Dot x={rightEndpoint[0]} y={rightEndpoint[1]} accent />
      <circle cx={cx} cy={cy} r="3.5" fill={ink} />
      <text x={cx + 10} y={cy + 5} fill={ink} fontSize="15">0</text>
      <text x="340" y="23" fill={ink} fontSize="15" textAnchor="middle">one old vertex lies on the discarded boundary arc</text>
      <path d="M340 29 L340 39" stroke={ink} strokeWidth="1.4" />
      <text x="490" y="62" fill={red} fontSize="15">chosen edge of Q</text>
      <path d={`M482 66 L${rightEndpoint[0] + 7} ${rightEndpoint[1] - 1}`} stroke={red} strokeWidth="1.4" fill="none" />
      <text x="456" y="168" fill={red}>Q = λP</text>
      <text x="75" y="121" fill={copper} fontSize="15">discarded boundary arc</text>
      <path d={`M215 116 L${leftEndpoint[0] - 7} ${leftEndpoint[1] + 1}`} stroke={copper} strokeWidth="1.4" fill="none" />
      <text x="65" y="167" fill={red} fontSize="15">removed 2D region</text>
      <path d="M205 162 L314 60" stroke={red} strokeWidth="1.4" fill="none" />
      <text x="340" y="354" fill={ink} fontSize="16" textAnchor="middle">the retained half-plane contains all of Q, hence also λ(P ∩ H)</text>
    </>
  );
}

function AreaMinimizer() {
  const center = [320, 170] as const;
  const unitRadius = 125;
  const v = [320, 45] as const;
  const p1 = [410, 92] as const;
  const p2 = [438, 185] as const;
  const p3 = [390, 270] as const;
  const p4 = [267, 282] as const;
  const p5 = [202, 205] as const;
  const p6 = [218, 104] as const;
  const leftEndpoint = [223.1, 230] as const;
  const rightEndpoint = [412.6, 230] as const;
  const polygon = [v, p1, p2, p3, p4, p5, p6];
  const retained = [v, p1, p2, rightEndpoint, leftEndpoint, p5, p6];
  const removedRegion = [rightEndpoint, p3, p4, leftEndpoint];
  const points = (items: readonly (readonly [number, number])[]) => items.map(([x, y]) => `${x},${y}`).join(" ");

  return (
    <>
      <circle cx={center[0]} cy={center[1]} r={unitRadius} fill="none" stroke={copper} strokeWidth="1.7" strokeDasharray="7 7" />
      <polygon points={points(retained)} fill={pale} opacity="0.75" />
      <polygon points={points(removedRegion)} fill={red} opacity="0.15" />
      <polygon points={points(polygon)} fill="none" stroke={ink} strokeWidth="2.6" />
      <polyline points={points([rightEndpoint, p3, p4, leftEndpoint])} fill="none" stroke={copper} strokeWidth="5" />
      <line x1={leftEndpoint[0]} y1={leftEndpoint[1]} x2={rightEndpoint[0]} y2={rightEndpoint[1]} stroke={red} strokeWidth="4" />
      <Dot x={v[0]} y={v[1]} accent />
      <Dot x={p3[0]} y={p3[1]} />
      <Dot x={p4[0]} y={p4[1]} />
      <Dot x={leftEndpoint[0]} y={leftEndpoint[1]} open accent />
      <Dot x={rightEndpoint[0]} y={rightEndpoint[1]} open accent />
      <circle cx={center[0]} cy={center[1]} r="3.5" fill={ink} />
      <text x="333" y="40" fill={red}>v, |v| = 1</text>
      <text x="454" y="66" fill={copper} fontSize="15">normalizing unit circle</text>
      <text x="455" y="226" fill={red} fontSize="15">chosen image edge</text>
      <text x="320" y="211" fill={ink} fontSize="15" textAnchor="middle">retained polygon P ∩ H</text>
      <text x="320" y="262" fill={red} fontSize="14" textAnchor="middle">removed 2D region</text>
      <text x="320" y="325" fill={copper} fontSize="15" textAnchor="middle">discarded open boundary arc Aⱼ°</text>
      <text x="320" y="353" fill={ink} fontSize="15" textAnchor="middle">the vertex v satisfying |v| = 1 remains, so the clipped polygon stays normalized</text>
    </>
  );
}

function Hausdorff() {
  return (
    <>
      <polygon points="135,235 210,87 420,74 548,200 445,294 230,305" fill="none" stroke={copper} strokeWidth="2" strokeDasharray="8 7" />
      <polygon points="150,224 220,100 410,86 530,204 435,281 240,290" fill={pale} stroke={ink} strokeWidth="2.6" />
      <line x1="135" y1="235" x2="150" y2="224" stroke={red} strokeWidth="2.5" />
      <line x1="420" y1="74" x2="410" y2="86" stroke={red} strokeWidth="2.5" />
      <circle cx="335" cy="193" r="40" fill="none" stroke={red} strokeWidth="2" />
      <text x="184" y="73" fill={accessibleCopper} fontSize="17">Pₖ</text>
      <text x="218" y="124" fill={ink} fontSize="17">P</text>
      <text x="348" y="190" fill={red}>z + r𝔻̄</text>
      <text x="88" y="331" fill={ink}>every point of either polygon lies within εₖ of the other</text>
    </>
  );
}

function HausdorffMobile() {
  return (
    <>
      <polygon points="31,245 80,82 267,68 333,222 280,311 80,323" fill="none" stroke={copper} strokeWidth="2.3" strokeDasharray="8 7" />
      <polygon points="45,233 91,96 255,82 318,224 267,295 93,307" fill={pale} stroke={ink} strokeWidth="2.8" />
      <line x1="31" y1="245" x2="45" y2="233" stroke={red} strokeWidth="2.5" />
      <line x1="267" y1="68" x2="255" y2="82" stroke={red} strokeWidth="2.5" />
      <circle cx="190" cy="203" r="37" fill="none" stroke={red} strokeWidth="2.2" />
      <text x="64" y="63" fill={accessibleCopper} fontSize="18">Pₖ</text>
      <text x="98" y="121" fill={ink} fontSize="18">P</text>
      <text x="190" y="208" fill={red} fontSize="16" textAnchor="middle">z + r𝔻̄</text>
      <text x="180" y="367" fill={ink} fontSize="16" textAnchor="middle">each polygon lies within εₖ</text>
      <text x="180" y="392" fill={ink} fontSize="16" textAnchor="middle">of the other</text>
    </>
  );
}

const endpointLedgerR = [1, 2, 1, 1, 1, 0, 1, 1] as const;
const endpointLedgerC = [0, 0, 1, 1, 1, 1, 0, 0] as const;
const endpointLedgerEll = endpointLedgerR.map(
  (value, index) => value + endpointLedgerC[index] - endpointLedgerC[(index + 1) % endpointLedgerC.length],
);

function EndpointLedger() {
  const columns = Array.from({ length: endpointLedgerR.length }, (_, index) => index);
  const x = (index: number) => 155 + index * 61;
  return (
    <>
      <text x="64" y="65" fill={ink} fontSize="16">side index j</text>
      <text x="64" y="132" fill={ink} fontSize="16">gap rⱼ</text>
      <text x="64" y="205" fill={ink} fontSize="16">flag cⱼ</text>
      <text x="64" y="278" fill={ink} fontSize="16">opposite ℓⱼ</text>
      {columns.map((index) => (
        <text key={`j-${index}`} x={x(index)} y="65" fill={ink} textAnchor="middle">{index}</text>
      ))}
      {endpointLedgerR.map((value, index) => (
        <g key={`r-${index}`}>
          <rect
            x={x(index) - 22}
            y="101"
            width="44"
            height="42"
            rx="7"
            fill={value === 1 ? paper : "#edd5d3"}
            stroke={value === 1 ? copper : red}
            strokeWidth={value === 1 ? 1.5 : 2.5}
          />
          <text x={x(index)} y="129" fill={value === 1 ? ink : red} textAnchor="middle">{value}</text>
        </g>
      ))}
      {endpointLedgerC.map((value, index) => (
        <g key={`c-${index}`}>
          <rect x={x(index) - 22} y="174" width="44" height="42" rx="7" fill={value ? pale : paper} stroke={ink} strokeWidth="1.5" />
          <text x={x(index)} y="202" fill={ink} textAnchor="middle">{value}</text>
        </g>
      ))}
      <path d={`M${x(1)} 168 Q${(x(1) + x(2)) / 2} 147 ${x(2)} 168`} fill="none" stroke={red} strokeWidth="2.5" />
      <text x={(x(1) + x(2)) / 2} y="151" fill={red} fontSize="14" textAnchor="middle">0→1</text>
      <path d={`M${x(5)} 168 Q${(x(5) + x(6)) / 2} 147 ${x(6)} 168`} fill="none" stroke={red} strokeWidth="2.5" />
      <text x={(x(5) + x(6)) / 2} y="151" fill={red} fontSize="14" textAnchor="middle">1→0</text>
      {endpointLedgerEll.map((value, index) => (
        <g key={`ell-${index}`}>
          <rect x={x(index) - 22} y="247" width="44" height="42" rx="7" fill={pale} stroke={accessibleCopper} strokeWidth="1.5" />
          <text x={x(index)} y="275" fill={ink} textAnchor="middle">{value}</text>
        </g>
      ))}
      <text x="340" y="336" fill={ink} fontSize="16" textAnchor="middle">converting to the opposite half-open convention turns the 2/0 pair into eight 1s</text>
    </>
  );
}

function EndpointLedgerMobilePanel({ start, top, transition }: { start: number; top: number; transition: "rise" | "fall" }) {
  const indices = Array.from({ length: 4 }, (_, offset) => start + offset);
  const x = (offset: number) => 105 + offset * 62;
  return (
    <>
      <text x="24" y={top + 18} fill={ink} fontSize="15" fontWeight="700">indices {start}–{start + 3}</text>
      <text x="120" y={top + 18} fill={red} fontSize="13">{transition === "rise" ? "c₁→c₂ is 0→1" : "c₅→c₆ is 1→0"}</text>
      <text x="35" y={top + 55} fill={ink} fontSize="14">j</text>
      <text x="35" y={top + 98} fill={ink} fontSize="14">rⱼ</text>
      <text x="35" y={top + 143} fill={ink} fontSize="14">cⱼ</text>
      <text x="35" y={top + 188} fill={ink} fontSize="14">ℓⱼ</text>
      {indices.map((index, offset) => (
        <text key={`mobile-j-${index}`} x={x(offset)} y={top + 55} fill={ink} fontSize="15" textAnchor="middle">{index}</text>
      ))}
      {indices.map((index, offset) => {
        const value = endpointLedgerR[index];
        return (
          <g key={`mobile-r-${index}`}>
            <rect x={x(offset) - 20} y={top + 72} width="40" height="32" rx="6" fill={value === 1 ? paper : "#edd5d3"} stroke={value === 1 ? accessibleCopper : red} strokeWidth={value === 1 ? 1.5 : 2.5} />
            <text x={x(offset)} y={top + 94} fill={value === 1 ? ink : red} fontSize="15" textAnchor="middle">{value}</text>
          </g>
        );
      })}
      {indices.map((index, offset) => (
        <g key={`mobile-c-${index}`}>
          <rect x={x(offset) - 20} y={top + 117} width="40" height="32" rx="6" fill={endpointLedgerC[index] ? pale : paper} stroke={ink} strokeWidth="1.5" />
          <text x={x(offset)} y={top + 139} fill={ink} fontSize="15" textAnchor="middle">{endpointLedgerC[index]}</text>
        </g>
      ))}
      {indices.map((index, offset) => (
        <g key={`mobile-ell-${index}`}>
          <rect x={x(offset) - 20} y={top + 162} width="40" height="32" rx="6" fill={pale} stroke={accessibleCopper} strokeWidth="1.5" />
          <text x={x(offset)} y={top + 184} fill={ink} fontSize="15" textAnchor="middle">{endpointLedgerEll[index]}</text>
        </g>
      ))}
    </>
  );
}

function EndpointLedgerMobile() {
  return (
    <>
      <EndpointLedgerMobilePanel start={0} top={12} transition="rise" />
      <line x1="22" y1="222" x2="338" y2="222" stroke={ink} strokeWidth="1" opacity=".35" />
      <EndpointLedgerMobilePanel start={4} top={236} transition="fall" />
      <text x="180" y="472" fill={ink} fontSize="14" textAnchor="middle">the exceptional 2/0 pair becomes eight 1s</text>
      <text x="180" y="492" fill={ink} fontSize="14" textAnchor="middle">after converting to the opposite half-open convention</text>
    </>
  );
}

function Interlacing() {
  const { vertices: outer, imageVertices: inner } = regularHeptagonClipGeometry(340, 183, 138);
  const verification = verifyRegularHeptagonInterlacingGeometry();
  if (!verification.valid) throw new Error("The exact regular-heptagon interlacing plate failed its geometric verification.");
  const selectedStart = inner[6];
  const selectedVertex = outer[0];
  const selectedEnd = inner[0];
  return (
    <>
      <polygon points={outer.map((point) => point.join(",")).join(" ")} fill="none" stroke={ink} strokeWidth="2.6" />
      <path d={`M${selectedStart[0]} ${selectedStart[1]} L${selectedVertex[0]} ${selectedVertex[1]} L${selectedEnd[0]} ${selectedEnd[1]}`} fill="none" stroke="#eadcca" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
      <path d={`M${selectedStart[0]} ${selectedStart[1]} L${selectedVertex[0]} ${selectedVertex[1]} L${selectedEnd[0]} ${selectedEnd[1]}`} fill="none" stroke={accessibleCopper} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points={inner.map((point) => point.join(",")).join(" ")} fill="none" stroke={red} strokeWidth="2.3" />
      {outer.map(([x, y], index) => <g key={`outer-${index}`}><Dot x={x} y={y} />{index === 0 ? <circle cx={x} cy={y} r="13" fill="none" stroke={accessibleCopper} strokeWidth="2" /> : null}</g>)}
      {inner.map(([x, y], index) => index === 6 ? <Dot key={`inner-${index}`} x={x} y={y} accent open /> : <Dot key={`inner-${index}`} x={x} y={y} accent />)}
      <text x="327" y="27" fill={ink} fontSize="16">x₀</text>
      <text x="421" y="112" fill={accessibleCopper} fontSize="14">open y₆</text>
      <text x="197" y="110" fill={accessibleCopper} fontSize="14">closed y₀</text>
      <circle cx="91" cy="52" r="5" fill={ink} /><text x="105" y="57" fill={ink} fontSize="14">outer x-vertices</text>
      <circle cx="91" cy="78" r="5" fill={red} /><text x="105" y="83" fill={ink} fontSize="14">y-vertices of Q = λP</text>
      <text x="340" y="337" fill={ink} fontSize="16" textAnchor="middle">for λ = cos(π/7) exp(iπ/7), each yᵢ is the midpoint of [xᵢ,xᵢ₊₁]</text>
      <text x="340" y="360" fill={ink} fontSize="16" textAnchor="middle">the exact half-open boundary arc (y₆,y₀] contains exactly x₀</text>
    </>
  );
}

function InterlacingMobile() {
  const { vertices: outer, imageVertices: inner } = regularHeptagonClipGeometry(180, 186, 122);
  const selectedStart = inner[6];
  const selectedVertex = outer[0];
  const selectedEnd = inner[0];
  return (
    <>
      <polygon points={outer.map((point) => point.join(",")).join(" ")} fill="none" stroke={ink} strokeWidth="2.8" />
      <path d={`M${selectedStart[0]} ${selectedStart[1]} L${selectedVertex[0]} ${selectedVertex[1]} L${selectedEnd[0]} ${selectedEnd[1]}`} fill="none" stroke="#eadcca" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
      <path d={`M${selectedStart[0]} ${selectedStart[1]} L${selectedVertex[0]} ${selectedVertex[1]} L${selectedEnd[0]} ${selectedEnd[1]}`} fill="none" stroke={accessibleCopper} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points={inner.map((point) => point.join(",")).join(" ")} fill="none" stroke={red} strokeWidth="2.4" />
      {outer.map(([x, y], index) => <g key={`mobile-outer-${index}`}><circle cx={x} cy={y} r="5.5" fill={ink} stroke={ink} strokeWidth="2" />{index === 0 ? <circle cx={x} cy={y} r="12" fill="none" stroke={accessibleCopper} strokeWidth="2" /> : null}</g>)}
      {inner.map(([x, y], index) => <circle key={`mobile-inner-${index}`} cx={x} cy={y} r="5.5" fill={index === 6 ? paper : red} stroke={red} strokeWidth="2" />)}
      <text x="170" y="34" fill={ink} fontSize="16">x₀</text>
      <text x="238" y="124" fill={accessibleCopper} fontSize="14">open y₆</text>
      <text x="65" y="124" fill={accessibleCopper} fontSize="14">closed y₀</text>
      <text x="180" y="347" fill={ink} fontSize="15" textAnchor="middle">the highlighted gap is (y₆,y₀]</text>
      <text x="180" y="370" fill={ink} fontSize="15" textAnchor="middle">and its unique outer vertex is x₀</text>
      <text x="180" y="398" fill={ink} fontSize="14" textAnchor="middle">λ = cos(π/7) exp(iπ/7) and Q = λP</text>
      <circle cx="78" cy="425" r="4.5" fill={ink} /><text x="91" y="430" fill={ink} fontSize="13">x-vertices</text>
      <circle cx="216" cy="425" r="4.5" fill={red} /><text x="229" y="430" fill={ink} fontSize="13">y-vertices of Q</text>
    </>
  );
}

export function verifyRegularHeptagonInterlacingGeometry() {
  const { cx, cy, vertices, imageVertices } = regularHeptagonClipGeometry();
  const baseVerification = verifyRegularHeptagonClipGeometry();
  const tolerance = 1e-8;
  const twoPi = 2 * Math.PI;
  const angle = ([x, y]: Point) => {
    const value = Math.atan2(cy - y, x - cx);
    return value < 0 ? value + twoPi : value;
  };
  const positiveTurn = (from: number, to: number) => (to - from + twoPi) % twoPi;
  const startAngle = angle(imageVertices[6]);
  const endAngle = angle(imageVertices[0]);
  const gapWidth = positiveTurn(startAngle, endAngle);
  const verticesInHalfOpenGap = vertices.filter((point) => {
    const turn = positiveTurn(startAngle, angle(point));
    return turn > tolerance && turn <= gapWidth + tolerance;
  });

  return {
    ...baseVerification,
    verticesInSelectedGap: verticesInHalfOpenGap.length,
    selectedVertexIsX0: verticesInHalfOpenGap.length === 1 && verticesInHalfOpenGap[0] === vertices[0],
    valid: baseVerification.valid && verticesInHalfOpenGap.length === 1 && verticesInHalfOpenGap[0] === vertices[0],
  };
}

function LiftedShift({ markerId }: { markerId: string }) {
  const ticks = [80,184,288,392,496,600];
  return (
    <>
      <text x="62" y="34" fill={ink} fontSize="14" fontWeight="700">schematic example with κ=3</text>
      <rect x={ticks[2]} y="207" width={ticks[3] - ticks[2]} height="46" rx="5" fill={pale} opacity=".85" />
      <line x1="62" y1="230" x2="618" y2="230" stroke={ink} strokeWidth="2" />
      {ticks.map((x, index) => <g key={index}><line x1={x} y1="215" x2={x} y2="248" stroke={ink} /><text x={x} y="278" fill={ink} fontSize="16" textAnchor="middle">Θ{index}</text></g>)}
      <path d={`M${ticks[0]} 188 Q236 55 ${ticks[3]} 188`} fill="none" stroke={red} strokeWidth="3" markerEnd={`url(#${markerId})`} />
      <text x="236" y="72" fill={red} fontSize="16" textAnchor="middle">add the multiplier’s argument</text>
      <circle cx={ticks[2]} cy="230" r="7" fill={paper} stroke={red} strokeWidth="3" />
      <circle cx={ticks[3]} cy="230" r="7" fill={red} stroke={red} strokeWidth="3" />
      <polygon points="344,222 352,230 344,238 336,230" fill={accessibleCopper} stroke={paper} strokeWidth="2" />
      <text x="278" y="185" fill={red} fontSize="13" textAnchor="end">excluded left endpoint</text>
      <text x="360" y="199" fill={accessibleCopper} fontSize="14">relative-interior landing</text>
      <text x="340" y="309" fill={ink} fontSize="16" textAnchor="middle">● endpoint alternative: the lifted angle lands exactly at Θ₃</text>
      <text x="340" y="340" fill={ink} fontSize="15" textAnchor="middle">◆ relative-interior alternative: it lands strictly between Θ₂ and Θ₃</text>
    </>
  );
}

function LiftedShiftMobile({ markerId }: { markerId: string }) {
  const ticks = [43,111,179,247,315];
  return (
    <>
      <text x="25" y="25" fill={ink} fontSize="14" fontWeight="700">schematic example with κ=3</text>
      <rect x={ticks[2]} y="177" width={ticks[3] - ticks[2]} height="44" rx="5" fill={pale} opacity=".85" />
      <line x1="25" y1="199" x2="335" y2="199" stroke={ink} strokeWidth="2.2" />
      {ticks.map((x, index) => <g key={index}><line x1={x} y1="184" x2={x} y2="217" stroke={ink} /><text x={x} y="244" fill={ink} fontSize="15" textAnchor="middle">Θ{index}</text></g>)}
      <path d={`M${ticks[0]} 158 Q145 40 ${ticks[3]} 158`} fill="none" stroke={red} strokeWidth="3" markerEnd={`url(#${markerId})`} />
      <text x="151" y="57" fill={red} fontSize="14" textAnchor="middle">add the multiplier’s argument</text>
      <circle cx={ticks[2]} cy="199" r="7" fill={paper} stroke={red} strokeWidth="3" />
      <circle cx={ticks[3]} cy="199" r="7" fill={red} stroke={red} strokeWidth="3" />
      <polygon points="215,192 222,199 215,206 208,199" fill={accessibleCopper} stroke={paper} strokeWidth="2" />
      <text x="170" y="158" fill={red} fontSize="12" textAnchor="end">excluded endpoint</text>
      <text x="225" y="170" fill={accessibleCopper} fontSize="12">relative interior</text>
      <text x="180" y="283" fill={ink} fontSize="14" textAnchor="middle">● endpoint: landing exactly at Θ₃</text>
      <text x="180" y="310" fill={ink} fontSize="14" textAnchor="middle">◆ relative interior: landing inside (Θ₂,Θ₃)</text>
    </>
  );
}

function Surgery({ markerId }: { markerId: string }) {
  return (
    <>
      <text x="45" y="35" fill={ink} fontSize="16" fontWeight="700">local vertex replacement (schematic)</text>
      <path d="M42 267 L160 78 L306 178" fill="none" stroke={ink} strokeWidth="2.6" />
      <path d="M42 267 L111 157 L306 178" fill="none" stroke={red} strokeWidth="3.5" />
      <path d="M111 157 L160 78 L306 178" fill="none" stroke={accessibleCopper} strokeWidth="2" strokeDasharray="7 6" />
      <Dot x={42} y={267} /><Dot x={111} y={157} accent /><Dot x={306} y={178} />
      <circle cx="160" cy="78" r="7" fill={paper} stroke={accessibleCopper} strokeWidth="2" />
      <path d="M154 72 L166 84 M166 72 L154 84" stroke={accessibleCopper} strokeWidth="2" />
      <text x="137" y="57" fill={accessibleCopper} fontSize="14">xᵢ removed</text>
      <text x="58" y="148" fill={red} fontSize="14">x′ᵢ=ξᵢ</text>
      <text x="58" y="302" fill={ink} fontSize="14">solid red = new boundary</text>

      <line x1="342" y1="34" x2="342" y2="310" stroke={ink} strokeWidth="1" opacity=".32" />
      <text x="370" y="35" fill={ink} fontSize="16" fontWeight="700">symbolic membership update (exact)</text>
      <rect x="370" y="51" width="278" height="72" rx="7" fill={paper} stroke={accessibleCopper} strokeWidth="1.8" />
      <text x="384" y="75" fill={ink} fontSize="14" fontWeight="700">Before</text>
      <text x="450" y="75" fill={ink} fontSize="14">i ∈ S</text>
      <text x="528" y="75" fill={ink} fontSize="14">i+1 ∉ S</text>
      <text x="384" y="103" fill={ink} fontSize="13.5">i+κ may or may not already belong to S</text>
      <path d="M509 130 L509 161" fill="none" stroke={red} strokeWidth="2.8" markerEnd={`url(#${markerId})`} />
      <text x="577" y="149" fill={red} fontSize="13">replace xᵢ</text>
      <rect x="370" y="171" width="278" height="70" rx="7" fill="#f7e9e7" stroke={red} strokeWidth="1.8" />
      <text x="384" y="194" fill={ink} fontSize="14" fontWeight="700">After</text>
      <text x="449" y="194" fill={ink} fontSize="14">i ∉ S′</text>
      <text x="528" y="194" fill={ink} fontSize="14">i+κ ∈ S′</text>
      <text x="509" y="224" fill={red} fontSize="15" fontWeight="700" textAnchor="middle">{"S′=(S∖{i})∪{i+κ}"}</text>
      <rect x="370" y="254" width="278" height="73" rx="7" fill={pale} stroke={ink} strokeWidth="1.2" />
      <text x="384" y="276" fill={ink} fontSize="13">All other memberships are unchanged.</text>
      <text x="384" y="298" fill={ink} fontSize="13">If i+κ ∉ S, then |S′|=|S|.</text>
      <text x="384" y="318" fill={ink} fontSize="13">If i+κ ∈ S, then |S′|=|S|−1.</text>
      <text x="340" y="356" fill={ink} fontSize="13.5" textAnchor="middle">No numerical contact system is asserted in this schematic.</text>
    </>
  );
}

function SurgeryMobile({ markerId }: { markerId: string }) {
  return (
    <>
      <text x="24" y="28" fill={ink} fontSize="16" fontWeight="700">local vertex replacement (schematic)</text>
      <path d="M30 250 L157 54 L329 181" fill="none" stroke={ink} strokeWidth="2.8" />
      <path d="M30 250 L105 143 L329 181" fill="none" stroke={red} strokeWidth="3.6" />
      <path d="M105 143 L157 54 L329 181" fill="none" stroke={accessibleCopper} strokeWidth="2" strokeDasharray="7 6" />
      <circle cx="30" cy="250" r="6" fill={ink} stroke={ink} strokeWidth="2" />
      <circle cx="105" cy="143" r="6" fill={red} stroke={red} strokeWidth="2" />
      <circle cx="329" cy="181" r="6" fill={ink} stroke={ink} strokeWidth="2" />
      <circle cx="157" cy="54" r="7" fill={paper} stroke={accessibleCopper} strokeWidth="2" />
      <path d="M151 48 L163 60 M163 48 L151 60" stroke={accessibleCopper} strokeWidth="2" />
      <text x="170" y="54" fill={accessibleCopper} fontSize="14">xᵢ removed</text>
      <text x="58" y="132" fill={red} fontSize="14">x′ᵢ=ξᵢ</text>
      <text x="180" y="283" fill={ink} fontSize="14" textAnchor="middle">dashed old corner · solid new boundary</text>
      <line x1="24" y1="305" x2="336" y2="305" stroke={ink} strokeWidth="1" opacity=".32" />
      <text x="24" y="334" fill={ink} fontSize="16" fontWeight="700">symbolic membership update (exact)</text>
      <rect x="24" y="351" width="312" height="86" rx="7" fill={paper} stroke={accessibleCopper} strokeWidth="1.8" />
      <text x="39" y="376" fill={ink} fontSize="14" fontWeight="700">Before</text>
      <text x="106" y="376" fill={ink} fontSize="14">i ∈ S</text>
      <text x="177" y="376" fill={ink} fontSize="14">i+1 ∉ S</text>
      <text x="39" y="407" fill={ink} fontSize="13.5">i+κ may or may not already belong to S</text>
      <path d="M180 445 L180 473" fill="none" stroke={red} strokeWidth="2.8" markerEnd={`url(#${markerId})`} />
      <text x="196" y="463" fill={red} fontSize="13">replace xᵢ</text>
      <rect x="24" y="485" width="312" height="82" rx="7" fill="#f7e9e7" stroke={red} strokeWidth="1.8" />
      <text x="39" y="510" fill={ink} fontSize="14" fontWeight="700">After</text>
      <text x="105" y="510" fill={ink} fontSize="14">i ∉ S′</text>
      <text x="177" y="510" fill={ink} fontSize="14">i+κ ∈ S′</text>
      <text x="180" y="544" fill={red} fontSize="15" fontWeight="700" textAnchor="middle">{"S′=(S∖{i})∪{i+κ}"}</text>
      <rect x="24" y="583" width="312" height="94" rx="7" fill={pale} stroke={ink} strokeWidth="1.2" />
      <text x="39" y="607" fill={ink} fontSize="13">All other memberships are unchanged.</text>
      <text x="39" y="632" fill={ink} fontSize="13">If i+κ ∉ S, then |S′|=|S|.</text>
      <text x="39" y="655" fill={ink} fontSize="13">If i+κ ∈ S, then |S′|=|S|−1.</text>
      <text x="180" y="704" fill={ink} fontSize="13" textAnchor="middle">No numerical contact system is asserted.</text>
    </>
  );
}

const residueColors = [red, accessibleCopper, teal, violet] as const;

function regularPolygonPoints(cx: number, cy: number, radius: number, sides: number, rotation = 0): string {
  return Array.from({ length: sides }, (_, index) => {
    const angle = rotation + (2 * Math.PI * index) / sides;
    return `${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`;
  }).join(" ");
}

function ResidueNode({ x, y, index, size = 18, fontSize = 15 }: { x: number; y: number; index: number; size?: number; fontSize?: number }) {
  const residue = index % 4;
  const common = { fill: residueColors[residue], stroke: ink, strokeWidth: 2 };
  return (
    <g>
      {residue === 0 ? <circle cx={x} cy={y} r={size} {...common} /> : null}
      {residue === 1 ? <rect x={x - size} y={y - size} width={2 * size} height={2 * size} rx={Math.max(3, size / 4)} {...common} /> : null}
      {residue === 2 ? <polygon points={`${x},${y - size - 2} ${x + size + 2},${y} ${x},${y + size + 2} ${x - size - 2},${y}`} {...common} /> : null}
      {residue === 3 ? <polygon points={regularPolygonPoints(x, y, size + 1, 6, Math.PI / 6)} {...common} /> : null}
      <text x={x} y={y + fontSize * .34} fill={paper} fontSize={fontSize} fontWeight="700" textAnchor="middle">{index}</text>
    </g>
  );
}

function cyclicPoint(cx: number, cy: number, radius: number, index: number, count = 12): Point {
  const angle = -Math.PI / 2 + (2 * Math.PI * index) / count;
  return [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)];
}

function ResidueBlock({ markerId }: { markerId: string }) {
  const cx = 300;
  const cy = 162;
  const radius = 112;
  const nodes = Array.from({ length: 12 }, (_, index) => cyclicPoint(cx, cy, radius, index));
  const intervalStart = cyclicPoint(cx, cy, radius, 4);
  const intervalEnd = cyclicPoint(cx, cy, radius, 7);
  const startTick = cyclicPoint(cx, cy, 142, 4);
  const endTick = cyclicPoint(cx, cy, 142, 7);
  return (
    <>
      <path d={`M${intervalStart[0]} ${intervalStart[1]} A${radius} ${radius} 0 0 1 ${intervalEnd[0]} ${intervalEnd[1]}`} fill="none" stroke="#eadcca" strokeWidth="44" strokeLinecap="round" />
      <path d={`M${intervalStart[0]} ${intervalStart[1]} A${radius} ${radius} 0 0 1 ${intervalEnd[0]} ${intervalEnd[1]}`} fill="none" stroke={accessibleCopper} strokeWidth="2" strokeDasharray="5 5" opacity=".9" />
      <path d="M286 35 C150 -5 70 82 169 207 C176 216 183 221 187 223" fill="none" stroke={red} strokeWidth="2.8" markerEnd={`url(#${markerId})`} />
      <text x="66" y="28" fill={ink} fontSize="14" fontWeight="700">permutation σ(j)=j+κ</text>
      <text x="66" y="48" fill={ink} fontSize="14">example: 0↦8 for κ=8</text>
      {nodes.map(([x, y], index) => <ResidueNode key={index} x={x} y={y} index={index} />)}
      <line x1={intervalStart[0] + 17} y1={intervalStart[1] + 10} x2={startTick[0]} y2={startTick[1]} stroke={accessibleCopper} strokeWidth="3" />
      <line x1={intervalEnd[0] - 17} y1={intervalEnd[1] + 10} x2={endTick[0]} y2={endTick[1]} stroke={accessibleCopper} strokeWidth="3" />
      <text x={cx} y="322" fill={accessibleCopper} fontSize="15" fontWeight="700" textAnchor="middle">cyclic interval S = {`{4,5,6,7}`}</text>

      <text x="482" y="48" fill={ink} fontSize="15" fontWeight="700">residue mod 4</text>
      {[0,1,2,3].map((residue, row) => (
        <g key={`legend-${residue}`}>
          <ResidueNode x={502} y={79 + row * 47} index={residue} size={14} fontSize={12} />
          <text x="529" y={84 + row * 47} fill={ink} fontSize="14">j ≡ {residue}</text>
        </g>
      ))}
      <text x="480" y="282" fill={ink} fontSize="14">φ=|S|=4=δ</text>
      <text x="480" y="305" fill={ink} fontSize="14">N−φ=8=[κ]₁₂</text>
      <text x="480" y="328" fill={ink} fontSize="13">the arrow is σ, not a set update</text>
      <text x="340" y="357" fill={ink} fontSize="14" textAnchor="middle">shape and color both encode the four residue classes</text>
    </>
  );
}

function ResidueBlockMobile({ markerId }: { markerId: string }) {
  const cx = 180;
  const cy = 148;
  const radius = 86;
  const nodes = Array.from({ length: 12 }, (_, index) => cyclicPoint(cx, cy, radius, index));
  const intervalStart = cyclicPoint(cx, cy, radius, 4);
  const intervalEnd = cyclicPoint(cx, cy, radius, 7);
  const startTick = cyclicPoint(cx, cy, 108, 4);
  const endTick = cyclicPoint(cx, cy, 108, 7);
  return (
    <>
      <path d={`M${intervalStart[0]} ${intervalStart[1]} A${radius} ${radius} 0 0 1 ${intervalEnd[0]} ${intervalEnd[1]}`} fill="none" stroke="#eadcca" strokeWidth="36" strokeLinecap="round" />
      <path d={`M${intervalStart[0]} ${intervalStart[1]} A${radius} ${radius} 0 0 1 ${intervalEnd[0]} ${intervalEnd[1]}`} fill="none" stroke={accessibleCopper} strokeWidth="2" strokeDasharray="5 5" />
      <path d="M168 48 C76 8 18 79 78 181 C83 190 88 196 91 198" fill="none" stroke={red} strokeWidth="2.7" markerEnd={`url(#${markerId})`} />
      <text x="13" y="20" fill={ink} fontSize="13" fontWeight="700">σ(j)=j+κ</text>
      <text x="13" y="38" fill={ink} fontSize="13">0↦8, κ=8</text>
      {nodes.map(([x, y], index) => <ResidueNode key={index} x={x} y={y} index={index} size={15} fontSize={12} />)}
      <line x1={intervalStart[0] + 14} y1={intervalStart[1] + 8} x2={startTick[0]} y2={startTick[1]} stroke={accessibleCopper} strokeWidth="3" />
      <line x1={intervalEnd[0] - 14} y1={intervalEnd[1] + 8} x2={endTick[0]} y2={endTick[1]} stroke={accessibleCopper} strokeWidth="3" />
      <text x="180" y="267" fill={accessibleCopper} fontSize="14" fontWeight="700" textAnchor="middle">cyclic interval S={`{4,5,6,7}`}</text>

      <text x="18" y="304" fill={ink} fontSize="14" fontWeight="700">residue mod 4 — shape + color</text>
      {[0,1,2,3].map((residue) => {
        const column = residue % 2;
        const row = Math.floor(residue / 2);
        const x = 38 + column * 172;
        const y = 334 + row * 45;
        return <g key={`mobile-legend-${residue}`}><ResidueNode x={x} y={y} index={residue} size={13} fontSize={11} /><text x={x + 25} y={y + 5} fill={ink} fontSize="13">j ≡ {residue}</text></g>;
      })}
      <text x="180" y="424" fill={ink} fontSize="14" textAnchor="middle">φ=4=δ and N−φ=8=[κ]₁₂</text>
      <text x="180" y="447" fill={ink} fontSize="14" textAnchor="middle">the arrow shows σ, not a set update</text>
    </>
  );
}

const descriptions: Record<FigureKind, { title: string; description: string; caption: string; status?: string }> = {
  "half-open": { title: "One endpoint, one half-open side", description: "The right-half-open side E i plus excludes x i minus one, while the preceding half-open side E i minus one plus includes that same vertex.", caption: "Plate III.1. For Eᵢ⁺=(xᵢ₋₁,xᵢ], the shared vertex satisfies xᵢ₋₁ ∉ Eᵢ⁺ but xᵢ₋₁ ∈ Eᵢ₋₁⁺. Thus every polygon vertex belongs to exactly one right-half-open side." },
  "face-rigidity": { title: "A boundary convex combination lies in one face", description: "Two points and their strict convex combination lie on one supporting side of a polygon.", caption: "Plate III.2. Equality in a supporting functional forces both endpoints—and therefore their segment—onto the same exposed side." },
  replacement: { title: "Replacing one vertex by a boundary contact", description: "Before-and-after boundary diagrams show a point in the relative interior of one side replacing the following vertex, together with the resulting two half-open sides.", caption: "Plate III.3. Schematic local replacement: the modified polygon P′ replaces xᵢ by ξᵢ. The point ξᵢ is included in (xᵢ₋₁, ξᵢ] and excluded from (ξᵢ, xᵢ₊₁]." },
  clip: { title: "Clipping along an image edge", description: "An exact regular-heptagon construction in which the image polygon has its vertices at the side midpoints of the outer polygon; one image edge cuts off exactly one old vertex.", caption: "Plate III.4. Exact regular-heptagon model: for λ = cos(π/7) exp(iπ/7), the vertices of Q = λP are the side midpoints of P. The chosen edge of Q cuts off the boundary arc containing exactly one old vertex, while Q remains in the retained half-plane." },
  hausdorff: { title: "Two-sided convergence of polygons", description: "The dashed approximating polygon P k and the solid limit polygon P lie close in both directions; the disk z plus r D bar remains inside the limit.", caption: "Plate III.5. Hausdorff convergence controls both directions between Pₖ and P; the fixed interior disk z+r𝔻̄ supplies the positive area margin." },
  "area-minimizer": { title: "The two-vertex case ruled out by area minimality", description: "A schematic normalized polygon lies inside the unit circle. The vertex v satisfying absolute value v equals one remains after an image-edge chord removes a two-dimensional region whose open boundary arc contains two old vertices.", caption: "Plate III.6. The two-vertex case ruled out by area minimality: the discarded open boundary arc and the removed two-dimensional region are different objects. Because the vertex v satisfying |v|=1 remains in the retained polygon, the clip preserves normalization and strictly lowers area." },
  "endpoint-ledger": { title: "The finite endpoint count", description: "An exact eight-index example with one boundary-arc count equal to two, one equal to zero, a binary endpoint word, and all counts in the opposite half-open convention equal to one.", caption: "Plate IV.1. Exact finite example. Here r=(1,2,1,1,1,0,1,1) and c=(0,0,1,1,1,1,0,0). The unique rise occurs at the 2, the unique fall at the 0, and ℓⱼ=rⱼ+cⱼ−cⱼ₊₁=1 at every side index.", status: "Exact finite example" },
  interlacing: { title: "Global cyclic interlacing", description: "An exact regular-heptagon configuration with Q equal to lambda P for lambda equal to cosine pi over seven times exponential i pi over seven. Every y vertex is a side midpoint of P. The boundary arc from y six to y zero is open at y six, closed at y zero, and contains exactly x zero.", caption: "Plate IV.2. Exact regular-heptagon configuration. For λ=cos(π/7) exp(iπ/7), Q=λP and yᵢ=(xᵢ+xᵢ₊₁)/2. Thus the highlighted half-open boundary arc (y₆,y₀] contains exactly x₀.", status: "Exact geometric configuration" },
  "lifted-shift": { title: "The cyclic shift on the real angle line", description: "A schematic lifted-angle example with kappa equal to three. The arrow from Theta zero to Theta three means add the multiplier's argument. A hollow circle at Theta two marks the excluded left endpoint, a filled circle at Theta three marks an endpoint landing, and a diamond strictly between them marks the distinct relative-interior landing.", caption: "Plate IV.3. Schematic lifted-angle example with κ=3. The arrow means “add the multiplier’s argument.” The hollow circle is the excluded left endpoint Θ₂; the filled circle is an endpoint landing at Θ₃; and the diamond is the distinct relative-interior landing in (Θ₂,Θ₃).", status: "Schematic lifted-angle example with κ=3" },
  surgery: { title: "One vertex replacement and its symbolic membership update", description: "A schematic local polygon drawing is paired with the exact symbolic update S prime equals S without i, union i plus kappa. Before replacement, i belongs to S, i plus one does not belong to S, and i plus kappa may or may not already belong to S. Afterwards, i does not belong to S prime, i plus kappa belongs to S prime, and every other membership is unchanged. The cardinality is preserved if i plus kappa was absent and decreases by one if it was already present. No numerical contact system is asserted.", caption: "Plate IV.4. Schematic local geometry · exact symbolic update. Under the permitted replacement hypotheses i∈S and i+1∉S, one has S′=(S∖{i})∪{i+κ}, with every other membership unchanged. If i+κ∉S, then |S′|=|S|; if i+κ∈S, then |S′|=|S|−1. No numerical contact system is asserted by the plate.", status: "Schematic local geometry · exact symbolic update" },
  "residue-block": { title: "Shift orbits and a reduced cyclic interval", description: "An exact finite example with twelve cyclic side indices and kappa equal to eight. Color and shape jointly encode the four residue classes. The cyclic interval S consists of four, five, six, and seven. An external arrow illustrates the permutation sigma of zero equals eight, not a vertex-replacement update.", caption: "Plate IV.5. Exact finite arithmetic example. For N=12, κ=8, and S={4,5,6,7}, one has φ=|S|=4=δ and N−φ=8=[κ]₁₂. The arrow 0↦8 illustrates the permutation σ(j)=j+κ; it is not itself a permitted update of S.", status: "Exact finite arithmetic example" },
};

export function OwnershipMutationFigure({ kind, id }: { kind: FigureKind; id: string }) {
  const copy = descriptions[kind];
  const isTopicIIIPlate = ["half-open", "face-rigidity", "replacement", "clip", "hausdorff", "area-minimizer"].includes(kind);
  const titleId = `${id}-title`;
  const descriptionId = `${id}-description`;
  const markerId = `${id}-arrow`;
  const mobileMarkerId = `${markerId}-mobile`;
  const mobileViewBoxes: Partial<Record<FigureKind, string>> = {
    "half-open": "0 0 360 405",
    "face-rigidity": "0 0 360 415",
    replacement: "0 0 360 610",
    clip: "0 0 360 455",
    "area-minimizer": "0 0 360 465",
    hausdorff: "0 0 360 420",
    "endpoint-ledger": "0 0 360 505",
    interlacing: "0 0 360 455",
    "lifted-shift": "0 0 360 330",
    surgery: "0 0 360 730",
    "residue-block": "0 0 360 470",
  };
  const mobileViewBox = mobileViewBoxes[kind];
  const hasMobileLayout = Boolean(mobileViewBox);
  return (
    <figure className="topic-ii-concept-figure" id={id}>
      <div className="topic-ii-concept-heading"><span>{isTopicIIIPlate ? "Mathematical plate" : copy.status}</span><span>{copy.title}</span></div>
      <svg
        role="img"
        aria-labelledby={`${titleId} ${descriptionId}`}
        className={hasMobileLayout ? "topic-ii-concept-svg topic-ii-concept-svg-desktop" : undefined}
        viewBox="0 0 680 370"
      >
        <title id={titleId}>{copy.title}</title><desc id={descriptionId}>{copy.description}</desc>
        <defs><marker id={markerId} markerHeight="7" markerWidth="8" orient="auto" refX="7" refY="3.5"><path d="M0,0 L8,3.5 L0,7 Z" fill={red} /></marker></defs>
        {kind === "half-open" ? <HalfOpen /> : null}{kind === "face-rigidity" ? <FaceRigidity /> : null}
        {kind === "replacement" ? <VertexReplacement /> : null}{kind === "clip" ? <ImageEdgeClip /> : null}
        {kind === "area-minimizer" ? <AreaMinimizer /> : null}{kind === "hausdorff" ? <Hausdorff /> : null}
        {kind === "endpoint-ledger" ? <EndpointLedger /> : null}{kind === "interlacing" ? <Interlacing /> : null}
        {kind === "lifted-shift" ? <LiftedShift markerId={markerId} /> : null}{kind === "surgery" ? <Surgery markerId={markerId} /> : null}
        {kind === "residue-block" ? <ResidueBlock markerId={markerId} /> : null}
      </svg>
      {hasMobileLayout ? (
        <svg
          role="img"
          aria-label={`${copy.title}. ${copy.description} Compact mobile layout.`}
          className="topic-ii-concept-svg topic-ii-concept-svg-mobile"
          data-figure-layout="mobile"
          viewBox={mobileViewBox ?? "0 0 360 465"}
        >
          <defs><marker id={mobileMarkerId} markerHeight="7" markerWidth="8" orient="auto" refX="7" refY="3.5"><path d="M0,0 L8,3.5 L0,7 Z" fill={red} /></marker></defs>
          {kind === "half-open" ? <HalfOpenMobile /> : null}
          {kind === "face-rigidity" ? <FaceRigidityMobile /> : null}
          {kind === "replacement" ? <VertexReplacementMobile /> : null}
          {kind === "clip" ? <ImageEdgeClipMobile /> : null}
          {kind === "area-minimizer" ? <AreaMinimizerMobile /> : null}
          {kind === "hausdorff" ? <HausdorffMobile /> : null}
          {kind === "endpoint-ledger" ? <EndpointLedgerMobile /> : null}
          {kind === "interlacing" ? <InterlacingMobile /> : null}
          {kind === "lifted-shift" ? <LiftedShiftMobile markerId={mobileMarkerId} /> : null}
          {kind === "surgery" ? <SurgeryMobile markerId={mobileMarkerId} /> : null}
          {kind === "residue-block" ? <ResidueBlockMobile markerId={mobileMarkerId} /> : null}
        </svg>
      ) : null}
      <figcaption>{copy.caption}</figcaption>
    </figure>
  );
}
