type FigureKind =
  | "half-open"
  | "face-rigidity"
  | "cap"
  | "hausdorff"
  | "endpoint-ledger"
  | "interlacing"
  | "lifted-shift"
  | "surgery"
  | "residue-block";

const ink = "#14273d";
const red = "#8b2f35";
const copper = "#a2683a";
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
      <text x="72" y="253" fill={ink}>xᵢ₋₁ excluded</text>
      <text x="268" y="80" fill={red}>xᵢ belongs only to Eᵢ⁺</text>
      <text x="430" y="244" fill={ink}>outgoing side Eᵢ₊₁</text>
      <text x="240" y="280" fill={ink} fontSize="18">Eᵢ⁺ = (xᵢ₋₁, xᵢ]</text>
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

function Cap() {
  return (
    <>
      <polygon points="105,210 190,78 370,62 555,148 505,280 260,302" fill="none" stroke={ink} strokeWidth="2.6" />
      <polygon points="151,139 280,70 463,105 530,214 382,291 184,260" fill={pale} stroke={red} strokeWidth="2.4" />
      <line x1="151" y1="139" x2="280" y2="70" stroke={red} strokeWidth="4" />
      <path d="M105 210 Q125 160 151 139 M280 70 Q235 64 190 78" fill="none" stroke={copper} strokeWidth="5" />
      <Dot x={151} y={139} accent />
      <Dot x={280} y={70} accent />
      <Dot x={190} y={78} />
      <text x="74" y="118" fill={ink}>discarded cap Aⱼ</text>
      <text x="337" y="177" fill={red}>Q = λP stays inside Hⱼ</text>
      <text x="180" y="342" fill={ink}>Pⱼ = P ∩ Hⱼ; old vertices leave, edge endpoints enter</text>
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
      <text x="348" y="190" fill={red}>interior disk</text>
      <text x="88" y="331" fill={ink}>every point of either polygon lies within εₖ of the other</text>
    </>
  );
}

function EndpointLedger() {
  const columns = Array.from({ length: 8 }, (_, index) => index);
  const r = [1, 2, 1, 1, 1, 0, 1, 1];
  const c = [0, 0, 1, 1, 1, 1, 0, 0];
  const ell = r.map((value, index) => value + c[index] - c[(index + 1) % c.length]);
  const x = (index: number) => 155 + index * 61;
  return (
    <>
      <text x="64" y="65" fill={ink} fontSize="16">field j</text>
      <text x="64" y="132" fill={ink} fontSize="16">gap rⱼ</text>
      <text x="64" y="205" fill={ink} fontSize="16">flag cⱼ</text>
      <text x="64" y="278" fill={ink} fontSize="16">opposite ℓⱼ</text>
      {columns.map((index) => (
        <text key={`j-${index}`} x={x(index)} y="65" fill={ink} textAnchor="middle">{index}</text>
      ))}
      {r.map((value, index) => (
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
      {c.map((value, index) => (
        <g key={`c-${index}`}>
          <rect x={x(index) - 22} y="174" width="44" height="42" rx="7" fill={value ? pale : paper} stroke={ink} strokeWidth="1.5" />
          <text x={x(index)} y="202" fill={ink} textAnchor="middle">{value}</text>
        </g>
      ))}
      <path d={`M${x(1)} 168 Q${(x(1) + x(2)) / 2} 147 ${x(2)} 168`} fill="none" stroke={red} strokeWidth="2.5" />
      <text x={(x(1) + x(2)) / 2} y="151" fill={red} fontSize="14" textAnchor="middle">0→1</text>
      <path d={`M${x(5)} 168 Q${(x(5) + x(6)) / 2} 147 ${x(6)} 168`} fill="none" stroke={red} strokeWidth="2.5" />
      <text x={(x(5) + x(6)) / 2} y="151" fill={red} fontSize="14" textAnchor="middle">1→0</text>
      {ell.map((value, index) => (
        <g key={`ell-${index}`}>
          <rect x={x(index) - 22} y="247" width="44" height="42" rx="7" fill={pale} stroke={copper} strokeWidth="1.5" />
          <text x={x(index)} y="275" fill={ink} textAnchor="middle">{value}</text>
        </g>
      ))}
      <text x="340" y="336" fill={ink} fontSize="16" textAnchor="middle">one 2 and one 0 become eight 1s after the endpoint correction</text>
    </>
  );
}

function Interlacing() {
  const outer = [[320,45],[500,110],[550,245],[410,320],[220,310],[95,205],[135,92]];
  const inner = outer.map(([x,y], i) => {
    const [x2,y2] = outer[(i+1)%outer.length];
    return [(x+x2)/2,(y+y2)/2];
  });
  return (
    <>
      <polygon points={outer.map(p=>p.join(",")).join(" ")} fill="none" stroke={ink} strokeWidth="2.6" />
      <polygon points={inner.map(p=>p.join(",")).join(" ")} fill="none" stroke={red} strokeWidth="2.3" />
      {outer.map(([x,y],i)=><g key={`o${i}`}><Dot x={x} y={y}/><text x={x+8} y={y-8} fill={ink}>x{i}</text></g>)}
      {inner.map(([x,y],i)=><g key={`i${i}`}><Dot x={x} y={y} accent/><text x={x+8} y={y+18} fill={red}>y{i}</text></g>)}
      <text x="340" y="356" fill={ink} fontSize="16" textAnchor="middle">one x-vertex in every half-open gap between consecutive y-vertices</text>
    </>
  );
}

function LiftedShift({ markerId }: { markerId: string }) {
  return (
    <>
      <line x1="70" y1="240" x2="590" y2="240" stroke={ink} strokeWidth="2" />
      {[0,1,2,3,4,5].map((i)=><g key={i}><line x1={95+i*92} y1="225" x2={95+i*92} y2="255" stroke={ink}/><text x={85+i*92} y="280" fill={ink}>Θ{i}</text></g>)}
      <path d="M95 200 Q233 70 371 200" fill="none" stroke={red} strokeWidth="3" markerEnd={`url(#${markerId})`} />
      <text x="195" y="82" fill={red}>add θ, shift by κ</text>
      <rect x="279" y="220" width="92" height="40" fill={pale} opacity=".8" />
      <text x="340" y="330" fill={ink} fontSize="16" textAnchor="middle">endpoint: exact landing · strict contact: landing inside the interval</text>
    </>
  );
}

function Surgery({ markerId }: { markerId: string }) {
  return (
    <>
      <text x="95" y="38" fill={ink}>geometry</text>
      <path d="M70 215 L180 90 L330 160 L430 70" {...line} />
      <path d="M70 215 L132 145 L330 160 L430 70" fill="none" stroke={red} strokeWidth="3" />
      <Dot x={180} y={90} /><Dot x={132} y={145} accent /><Dot x={330} y={160} />
      <text x="151" y="72" fill={ink}>xᵢ removed</text><text x="82" y="137" fill={red}>x′ᵢ=ξᵢ</text>
      <text x="490" y="38" fill={ink}>status board</text>
      {[0,1,2,3,4,5].map((i)=>{const a=-Math.PI/2+i*Math.PI/3;const x=520+82*Math.cos(a),y=177+82*Math.sin(a);const active=i===1||i===4;return <g key={i}><circle cx={x} cy={y} r="18" fill={i===1?copper:i===4?red:paper} stroke={ink}/><text x={x-5} y={y+5} fill={active?paper:ink}>{i}</text></g>})}
      <path d="M576 146 Q520 177 465 208" fill="none" stroke={red} strokeWidth="3" markerEnd={`url(#${markerId})`} />
      <text x="520" y="174" fill={red} fontSize="14" textAnchor="middle">example: κ=3</text>
      <text x="520" y="302" fill={red} fontSize="16" textAnchor="middle">source 1 ↦ target 4; field 2 is empty</text>
      <text x="340" y="340" fill={ink} fontSize="16" textAnchor="middle">the chip records contact status; no geometric image vertices coalesce</text>
    </>
  );
}

function ResidueBlock({ markerId }: { markerId: string }) {
  const colors = [red,copper,"#3f6f78","#6f5b8c"];
  return (
    <>
      {Array.from({length:12},(_,i)=>{const a=-Math.PI/2+i*Math.PI/6;const x=325+135*Math.cos(a),y=180+135*Math.sin(a);return <g key={i}><circle cx={x} cy={y} r="20" fill={colors[i%4]} stroke={ink}/><text x={x-7} y={y+6} fill={paper}>{i}</text></g>})}
      <path d="M325 45 Q130 95 208 248" fill="none" stroke={red} strokeWidth="2.5" markerEnd={`url(#${markerId})`} />
      <text x="155" y="76" fill={ink}>0↦8, so κ=8</text>
      <path d="M185 255 Q325 345 465 255" fill="none" stroke={red} strokeWidth="7" opacity=".7" />
      <text x="205" y="348" fill={ink}>δ=gcd(12,8)=4; every residue orbit needs a strict field</text>
    </>
  );
}

const descriptions: Record<FigureKind, { title: string; description: string; caption: string }> = {
  "half-open": { title: "One endpoint, one half-open side", description: "Two closed polygon sides share a vertex, but the incoming half-open side includes it and the outgoing half-open side excludes it.", caption: "Plate III.1. The right-half-open convention places the shared vertex in its incoming side and not in its outgoing side." },
  "face-rigidity": { title: "A boundary mixture lies in one face", description: "Two points and their strict convex combination lie on one supporting side of a polygon.", caption: "Plate III.2. Equality in a supporting functional forces both endpoints—and therefore their segment—onto the same exposed side." },
  cap: { title: "Clipping along an image edge", description: "An outer polygon, its inner image, and the cap discarded by the line of one image edge.", caption: "Plate III.3. Keeping the edge half-plane containing Q preserves λPⱼ⊆Q⊆Pⱼ and makes the vertex count explicit." },
  hausdorff: { title: "Two-sided convergence of polygons", description: "A dashed polygon and a nearby limit polygon, with corresponding displacements and an interior disk.", caption: "Plate III.4. Hausdorff convergence controls both directions; the interior disk supplies the uniform support gap used in the area argument." },
  "endpoint-ledger": { title: "The finite endpoint ledger", description: "An eight-field example with one gap count two, one gap count zero, a binary endpoint word, and opposite half-open counts all equal to one.", caption: "Plate IV.1. Here r=(1,2,1,1,1,0,1,1) and c=(0,0,1,1,1,1,0,0). The unique rise occurs at the 2, the unique fall at the 0, and ℓⱼ=rⱼ+cⱼ−cⱼ₊₁=1 in every field." },
  interlacing: { title: "Global cyclic interlacing", description: "Vertices of an inner red polygon alternate with vertices of an outer navy polygon around the same boundary order.", caption: "Plate IV.1. The endpoint ledger forces exactly one outer vertex in each consistently chosen half-open inner gap." },
  "lifted-shift": { title: "The cyclic shift on the real angle line", description: "Lifted angle marks and an arc showing addition of the multiplier angle followed by a fixed cyclic shift.", caption: "Plate IV.2. Lifting angles removes hidden multiples of 2π: endpoint contacts land exactly; strict contacts land inside a side interval." },
  surgery: { title: "One move, two synchronized descriptions", description: "A polygon corner is clipped on the left while a cyclic strict-status marker moves on the right.", caption: "Plate IV.3. Proposition 5.1 proves that the Boolean update is realized by an actual strict invariant polygon; the chip is only a status marker." },
  "residue-block": { title: "Shift orbits and the reduced block", description: "Twelve cyclic fields colored by their four residue classes, with an eight-step arrow and a highlighted consecutive block.", caption: "Plate IV.4. For N=12 and κ=8, δ=4. Endpoint equality on a whole orbit is impossible, so a minimal strict set must meet every color." },
};

export function OwnershipMutationFigure({ kind, id }: { kind: FigureKind; id: string }) {
  const copy = descriptions[kind];
  const titleId = `${id}-title`;
  const descriptionId = `${id}-description`;
  const markerId = `${id}-arrow`;
  return (
    <figure className="topic-ii-concept-figure">
      <div className="topic-ii-concept-heading"><span>Deterministic mathematical plate</span><span>{copy.title}</span></div>
      <svg role="img" aria-labelledby={`${titleId} ${descriptionId}`} viewBox="0 0 680 370">
        <title id={titleId}>{copy.title}</title><desc id={descriptionId}>{copy.description}</desc>
        <defs><marker id={markerId} markerHeight="7" markerWidth="8" orient="auto" refX="7" refY="3.5"><path d="M0,0 L8,3.5 L0,7 Z" fill={red} /></marker></defs>
        {kind === "half-open" ? <HalfOpen /> : null}{kind === "face-rigidity" ? <FaceRigidity /> : null}
        {kind === "cap" ? <Cap /> : null}{kind === "hausdorff" ? <Hausdorff /> : null}{kind === "endpoint-ledger" ? <EndpointLedger /> : null}
        {kind === "interlacing" ? <Interlacing /> : null}{kind === "lifted-shift" ? <LiftedShift markerId={markerId} /> : null}
        {kind === "surgery" ? <Surgery markerId={markerId} /> : null}{kind === "residue-block" ? <ResidueBlock markerId={markerId} /> : null}
      </svg>
      <figcaption>{copy.caption}</figcaption>
    </figure>
  );
}
