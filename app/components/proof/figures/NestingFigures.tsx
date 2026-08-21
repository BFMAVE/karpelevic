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
      <line x1="80" y1="285" x2="600" y2="285" stroke={ink} strokeWidth="2.4" />
      <line x1="145" y1="265" x2="145" y2="305" stroke={ink} strokeWidth="2.4" />
      <line x1="525" y1="265" x2="525" y2="305" stroke={ink} strokeWidth="2.4" />
      <line x1="365" y1="255" x2="365" y2="315" stroke={red} strokeWidth="3.6" />
      <text x="115" y="338" fill={ink}>a/b</text>
      <text x="495" y="338" fill={ink}>c/d</text>
      <text x="310" y="352" fill={red}>(a+c)/(b+d)</text>
      <path d="M145 225 Q335 48 525 225" fill="none" stroke={copper} strokeWidth="3" strokeDasharray="8 7" />
      <path d="M145 225 Q248 92 365 225 Q445 105 525 225" fill="none" stroke={red} strokeWidth="4" />
      <line x1="365" y1="225" x2="365" y2="185" stroke={teal} strokeWidth="2.6" />
      <text x="82" y="52" fill={ink}>old cell at order n−1</text>
      <text x="82" y="82" fill={copper}>one reciprocal chord comparison</text>
      <text x="402" y="92" fill={red}>two order-n subcells</text>
      <text x="405" y="122" fill={teal}>new denominator b+d=n</text>
      <text x="126" y="390" fill={ink}>The curves encode the comparison pattern, not Euclidean boundary arcs.</text>
    </>
  );
}

function PaddingFigure() {
  const positions = [125, 225, 325, 425];
  const oldLabels = ["β₁", "⋯", "βₘ"];
  return (
    <>
      <text x="78" y="65" fill={ink}>old multiplicity m=M−1</text>
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
      <text x="80" y="270" fill={ink}>multiply by μ⁻ᑫ(μᑫ−0)=1</text>
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
          <text x={x - 13} y="347" fill={index === positions.length - 1 ? paper : ink}>
            {index === positions.length - 1 ? "0" : oldLabels[index]}
          </text>
        </g>
      ))}
      <text x="475" y="346" fill={red}>new factor</text>
      <text x="80" y="415" fill={ink}>The product is unchanged, but its order-n parameter list is no longer constant.</text>
    </>
  );
}

function DefectFigure() {
  return (
    <>
      <line x1="85" y1="335" x2="610" y2="335" stroke={ink} strokeWidth="2.2" />
      <line x1="110" y1="385" x2="110" y2="55" stroke={ink} strokeWidth="2.2" />
      <line x1="85" y1="250" x2="610" y2="250" stroke={copper} strokeWidth="1.8" strokeDasharray="7 7" />
      <path d="M110 365 C245 350 320 310 390 250 C465 185 520 110 590 65" fill="none" stroke={red} strokeWidth="4" />
      <circle cx="300" cy="321" r="7" fill={teal} stroke={teal} />
      <circle cx="390" cy="250" r="7" fill={red} stroke={red} />
      <line x1="300" y1="321" x2="300" y2="335" stroke={teal} strokeWidth="2" />
      <line x1="390" y1="250" x2="390" y2="335" stroke={red} strokeWidth="2" />
      <text x="255" y="365" fill={teal}>ρ₋=Kₙ₋₁</text>
      <text x="360" y="365" fill={red}>Kₙ</text>
      <text x="125" y="239" fill={copper}>residual = 0</text>
      <text x="127" y="82" fill={ink}>Fₙ,θ(t) is strictly increasing</text>
      <text x="412" y="218" fill={red}>unique zero</text>
      <text x="164" y="312" fill={teal}>old candidate gives residual ≤ 0</text>
      <text x="128" y="420" fill={ink}>Therefore the old radius cannot lie to the right of the new zero.</text>
    </>
  );
}

const copy: Record<NestingFigureKind, { title: string; description: string; caption: string }> = {
  mediant: {
    title: "One Farey interval splits at its mediant",
    description: "An old interval from a over b to c over d is split by the newly admitted mediant with denominator b plus d equals n.",
    caption: "Plate XII.1. Farey refinement has only one local shape: a newly admitted mediant divides one old interval into two. The drawn curves are a comparison schematic; the proof uses signed determinants and logarithmic radial functions.",
  },
  padding: {
    title: "Padding an old product by the identity factor",
    description: "A representative row of equal beta factors, with an ellipsis for the omitted middle factors, is followed by one new factor beta equals zero.",
    caption: "Plate XII.2. The symbols β₁, …, βₘ represent an arbitrary number m of equal old factors. Multiplying by μ⁻ᑫ(μᑫ−0)=1 promotes the old Ito equation to the next multiplicity. The added zero parameter makes the new parameter list nonconstant, so making the parameters constant produces a larger candidate radius.",
  },
  defect: {
    title: "A sign comparison locates the new radius",
    description: "A strictly increasing scalar residual is nonpositive at the old radius and vanishes at the new radius, so the old radius is no larger.",
    caption: "Plate XII.3. Every refinement case is reduced to the same one-dimensional argument: evaluate the new increasing residual at the old candidate, prove the value is at most zero, and compare with its unique zero.",
  },
};

export function NestingFigure({ kind }: { kind: NestingFigureKind }) {
  const description = copy[kind];
  return (
    <figure className="topic-ii-concept-figure">
      <div className="topic-ii-concept-heading">
        <span>Deterministic mathematical plate</span>
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
