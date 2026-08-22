type NestingFigureKind = "mediant" | "padding" | "defect";

const ink = "#14273d";
const red = "#8b2f35";
const copper = "#a2683a";
const teal = "#3f6f78";
const paper = "#f5efdd";
const pale = "#d8e2e7";

function MediantFigure() {
  return (
    <>
      <text x="78" y="58" fill={ink}>order n−1: one Farey interval</text>
      <line data-farey-row="n-1" x1="120" y1="140" x2="560" y2="140" stroke={copper} strokeWidth="4" />
      <line x1="120" y1="120" x2="120" y2="160" stroke={ink} strokeWidth="2.4" />
      <line x1="560" y1="120" x2="560" y2="160" stroke={ink} strokeWidth="2.4" />
      <text x="98" y="195" fill={ink}>a/b</text>
      <text x="538" y="195" fill={ink}>c/d</text>

      <line x1="340" y1="166" x2="340" y2="254" stroke={teal} strokeWidth="2" strokeDasharray="6 6" />
      <text x="385" y="220" fill={teal}>insert denominator b+d=n</text>

      <text x="78" y="275" fill={ink}>order n: two Farey subintervals</text>
      <line data-farey-row="n" x1="120" y1="345" x2="340" y2="345" stroke={red} strokeWidth="4" />
      <line data-farey-row="n" x1="340" y1="345" x2="560" y2="345" stroke={red} strokeWidth="4" />
      <line x1="120" y1="325" x2="120" y2="365" stroke={ink} strokeWidth="2.4" />
      <line x1="340" y1="317" x2="340" y2="373" stroke={red} strokeWidth="3.6" />
      <line x1="560" y1="325" x2="560" y2="365" stroke={ink} strokeWidth="2.4" />
      <text x="98" y="410" fill={ink}>a/b</text>
      <text x="273" y="410" fill={red}>(a+c)/(b+d)</text>
      <text x="538" y="410" fill={ink}>c/d</text>
    </>
  );
}

function PaddingFigure() {
  const positions = [125, 225, 325, 425];
  const oldLabels = ["β₁", "⋯", "βₘ"];
  return (
    <>
      <text x="78" y="65" fill={ink}>old factor count m=M−1</text>
      {positions.slice(0, 3).map((x, index) => (
        <g key={x}>
          <circle cx={x} cy="145" r="33" fill={pale} stroke={ink} strokeWidth="2.4" />
          <text x={x - 13} y="152" fill={ink}>{oldLabels[index]}</text>
        </g>
      ))}
      <text x="474" y="151" fill={ink}>all equal to β</text>
      <path d="M125 228 L430 228" fill="none" stroke={copper} strokeWidth="3" />
      <path d="M430 228 L505 228" fill="none" stroke={red} strokeWidth="4" />
      <polygon points="505,228 489,218 489,238" fill={red} />
      <text x="80" y="270" fill={ink}>identity factor:</text>
      <text x="245" y="270" fill={ink}>
        <tspan>μ</tspan><tspan baselineShift="super" fontSize="12">−q</tspan>
        <tspan>(μ</tspan><tspan baselineShift="super" fontSize="12">q</tspan>
        <tspan>−β</tspan><tspan baselineShift="sub" fontSize="12">M</tspan><tspan>)=1</tspan>
      </text>
      {positions.map((x, index) => (
        <g key={`new-${x}`}>
          <circle
            cx={x}
            cy="340"
            r="33"
            fill={index === positions.length - 1 ? red : pale}
            stroke={index === positions.length - 1 ? red : ink}
            strokeWidth="2.4"
          />
          <text x={x - (index === positions.length - 1 ? 23 : 13)} y="347" fill={index === positions.length - 1 ? paper : ink} fontSize={index === positions.length - 1 ? "15" : undefined}>
            {index === positions.length - 1 ? (
              <><tspan>β</tspan><tspan baselineShift="sub" fontSize="11">M</tspan><tspan>=0</tspan></>
            ) : oldLabels[index]}
          </text>
        </g>
      ))}
      <text x="475" y="346" fill={red}>new parameter</text>
    </>
  );
}

function DefectFigure() {
  return (
    <>
      <line data-residual-axis="t" x1="85" y1="300" x2="610" y2="300" stroke={ink} strokeWidth="2.2" />
      <line data-residual-axis="value" x1="110" y1="385" x2="110" y2="55" stroke={ink} strokeWidth="2.2" />
      <text x="620" y="306" fill={ink}>t</text>
      <text x="38" y="48" fill={ink}>Fₙ,θ(t)</text>
      <text x="90" y="320" fill={ink}>0</text>
      <path data-residual-curve="strict-case" d="M110 365 C245 354 330 338 420 300 C490 245 545 145 590 70" fill="none" stroke={red} strokeWidth="4" />
      <circle cx="310" cy="341" r="7" fill={teal} stroke={teal} />
      <circle cx="420" cy="300" r="7" fill={red} stroke={red} />
      <line x1="310" y1="341" x2="310" y2="375" stroke={teal} strokeWidth="2" strokeDasharray="5 4" />
      <line x1="420" y1="300" x2="420" y2="375" stroke={red} strokeWidth="2" strokeDasharray="5 4" />
      <text x="245" y="403" fill={teal}>ρ₋=Kₙ₋₁</text>
      <text x="395" y="403" fill={red}>Kₙ</text>
      <text x="132" y="88" fill={ink}>strictly increasing residual</text>
      <text x="438" y="282" fill={red}>unique zero</text>
      <text x="150" y="330" fill={teal}>Fₙ,θ(ρ₋)&lt;0</text>
    </>
  );
}

const copy: Record<NestingFigureKind, { title: string; description: string; caption: string }> = {
  mediant: {
    title: "One Farey interval is divided at its mediant",
    description: "Two ordered interval rows show the old interval from a over b to c over d and the two new subintervals divided at the mediant whose denominator is b plus d equals n. Positions are schematic and not to scale.",
    caption: "Plate XII.1. Schematic interval diagram (not to scale): when a/b<c/d are consecutive in F_{n−1} and b+d=n, their mediant (a+c)/(b+d) divides the old interval into two order-n intervals.",
  },
  padding: {
    title: "Append the zero parameter",
    description: "A row of equal old beta parameters is extended by beta sub M equals zero; the corresponding algebraic factor is one.",
    caption: "Plate XII.2. The old tuple (β,…,β) is extended by the parameter β_M=0. Its corresponding factor μ^{-q}(μ^q−β_M) equals 1, so the product is unchanged, but the extended tuple is not constant and Topic X gives a strict radius comparison.",
  },
  defect: {
    title: "A sign comparison locates the new radius",
    description: "In either strict interior comparison case, the increasing scalar residual is negative at the old radius and vanishes at the new radius, so the old radius is smaller.",
    caption: "Plate XII.3. Schematic for the strict interior cases: after a mediant insertion or factor-count increase, the new increasing residual is negative at K_{n−1}(θ) and vanishes at K_n(θ).",
  },
};

export function NestingFigure({ kind }: { kind: NestingFigureKind }) {
  const description = copy[kind];
  return (
    <figure className="topic-ii-concept-figure">
      <div className="topic-ii-concept-heading">
        <span>Mathematical plate</span>
        <span>{description.title}</span>
      </div>
      <svg role="img" aria-labelledby={`nest-${kind}-title nest-${kind}-desc`} viewBox="0 0 680 450">
        <title id={`nest-${kind}-title`}>{description.title}</title>
        <desc id={`nest-${kind}-desc`}>{description.description}</desc>
        {kind === "mediant" ? <MediantFigure /> : null}
        {kind === "padding" ? <PaddingFigure /> : null}
        {kind === "defect" ? <DefectFigure /> : null}
      </svg>
      <figcaption>{description.caption}</figcaption>
    </figure>
  );
}
