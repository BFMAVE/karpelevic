type TopicIConceptFigureProps = {
  kind: "adapted-complex" | "origin-and-order";
};

const figureCopy = {
  "adapted-complex": {
    title: "Constructing the adapted complex structure",
    description:
      "The elliptic map is decomposed into a real scalar part and a complex structure J satisfying J²=−I. The two signs of J give conjugate complex multipliers and opposite orientations.",
    caption:
      "Figure I.1. Cayley–Hamilton turns the traceless part of T into a complex structure: J²=−I and T=ρ(cos θ I+sin θ J).",
  },
  "origin-and-order": {
    title: "Why the origin must be interior",
    description:
      "A polygon is shown in a supporting half-plane through the origin. Equal-radius rotations of one point are marked around a circle; a later rotation crosses into the forbidden half-plane.",
    caption:
      "Figure I.2. The plotted points are the equal-radius rotations eⁱᵏᶿz, with eⁱ⁰ᶿz=z exactly. The actual iterates λᵏz=ρᵏeⁱᵏᶿz are radially shorter, but the positive factor ρᵏ does not change the sign of ℓ.",
  },
} as const;

function AdaptedComplexDrawing() {
  return (
    <>
      <defs>
        <marker
          id="topic-i-adapted-arrow"
          markerHeight="8"
          markerWidth="8"
          orient="auto"
          refX="7"
          refY="4"
          viewBox="0 0 8 8"
        >
          <path className="topic-i-concept-arrow-head" d="M0 0 L8 4 L0 8 Z" />
        </marker>
      </defs>
      <line className="topic-i-concept-axis" x1="82" x2="382" y1="273" y2="273" />
      <line className="topic-i-concept-axis" x1="164" x2="164" y1="320" y2="55" />
      <path
        className="topic-i-concept-vector"
        d="M164 273 L347 273"
        markerEnd="url(#topic-i-adapted-arrow)"
      />
      <path
        className="topic-i-concept-vector topic-i-concept-accent-line"
        d="M164 273 L229 160"
        markerEnd="url(#topic-i-adapted-arrow)"
      />
      <path
        className="topic-i-concept-angle"
        d="M226 273 A62 62 0 0 0 195 219"
      />
      <text className="topic-i-concept-label" x="350" y="263">
        v
      </text>
      <text className="topic-i-concept-label topic-i-concept-accent" x="239" y="155">
        Tv
      </text>
      <text className="topic-i-concept-small" x="226" y="226">
        θ
      </text>
      <text className="topic-i-concept-small" x="225" y="183">
        |Tv|=ρ|v|
      </text>

      <line className="topic-i-concept-divider" x1="416" x2="416" y1="45" y2="321" />
      <text className="topic-i-concept-kicker" x="584" y="72" textAnchor="middle">
        INTRINSIC DECOMPOSITION
      </text>
      <text className="topic-i-concept-equation" x="584" y="125" textAnchor="middle">
        J₊ = (ρ⁻¹T − cos θ I) / sin θ
      </text>
      <text className="topic-i-concept-equation topic-i-concept-accent" x="584" y="174" textAnchor="middle">
        J₊² = −I
      </text>
      <text className="topic-i-concept-equation" x="584" y="223" textAnchor="middle">
        T = ρ(cos θ I + sin θ J₊)
      </text>
      <line className="topic-i-concept-rule" x1="478" x2="690" y1="250" y2="250" />
      <text className="topic-i-concept-small" x="584" y="281" textAnchor="middle">
        J₊ ↔ ρeⁱᶿ
      </text>
      <text className="topic-i-concept-small" x="584" y="309" textAnchor="middle">
        J₋=−J₊ ↔ ρe⁻ⁱᶿ
      </text>
    </>
  );
}

function OriginOrderDrawing() {
  const centerX = 258;
  const centerY = 205;
  const radius = 112;
  const angles = [55, 127, 199, 271, 343];

  return (
    <>
      <defs>
        <marker
          id="topic-i-origin-arrow"
          markerHeight="8"
          markerWidth="8"
          orient="auto"
          refX="7"
          refY="4"
          viewBox="0 0 8 8"
        >
          <path className="topic-i-concept-arrow-head" d="M0 0 L8 4 L0 8 Z" />
        </marker>
      </defs>
      <line className="topic-i-concept-support" x1="56" x2="704" y1="205" y2="205" />
      <rect className="topic-i-concept-forbidden" x="56" y="205" width="648" height="130" />
      <text className="topic-i-concept-kicker" x="645" y="188" textAnchor="middle">
        ℓ ≥ 0
      </text>
      <text className="topic-i-concept-kicker topic-i-concept-accent" x="645" y="229" textAnchor="middle">
        FORBIDDEN: ℓ &lt; 0
      </text>
      <polygon
        className="topic-i-concept-polygon"
        points="86,152 184,64 365,73 452,151 374,196 167,196"
      />
      <circle className="topic-i-concept-origin" cx={centerX} cy={centerY} r="5" />
      <text className="topic-i-concept-small" x={centerX + 12} y={centerY + 17}>
        0
      </text>

      {angles.map((angle, index) => {
        const radians = (Math.PI * angle) / 180;
        const x = centerX + radius * Math.cos(radians);
        const y = centerY - radius * Math.sin(radians);
        const isForbidden = y > centerY;
        const isInitialPoint = index === 0;
        return (
          <g key={angle}>
            <line
              className={
                isForbidden
                  ? "topic-i-concept-orbit topic-i-concept-orbit-contradiction"
                  : "topic-i-concept-orbit"
              }
              x1={centerX}
              x2={x}
              y1={centerY}
              y2={y}
            />
            <circle
              data-orbit-index={index}
              data-orbit-x={x}
              data-orbit-y={y}
              data-z={isInitialPoint ? "true" : undefined}
              className={
                isForbidden || isInitialPoint
                  ? "topic-i-concept-accent-point"
                  : "topic-i-concept-orbit-point"
              }
              cx={x}
              cy={y}
              r="5"
            />
            <text className="topic-i-concept-small" x={x + 8} y={y - 8}>
              {isInitialPoint ? "z = eⁱ⁰ᶿz" : `eⁱ${index}ᶿz`}
            </text>
          </g>
        );
      })}
      <path
        className="topic-i-concept-angle"
        d="M298 148 A70 70 0 0 0 216 149"
        markerEnd="url(#topic-i-origin-arrow)"
      />
      <text className="topic-i-concept-small" x="258" y="118" textAnchor="middle">
        rotate by θ
      </text>
      <text className="topic-i-concept-equation topic-i-concept-accent" x="548" y="291" textAnchor="middle">
        k=2 already has ℓ(eⁱᵏᶿz)&lt;0
      </text>
    </>
  );
}

export function TopicIConceptFigure({ kind }: TopicIConceptFigureProps) {
  const copy = figureCopy[kind];

  return (
    <figure className="topic-i-concept-figure">
      <div className="topic-i-concept-heading">
        <span>Geometric reading</span>
        <span>{copy.title}</span>
      </div>
      <svg
        aria-labelledby={`topic-i-${kind}-title topic-i-${kind}-description`}
        role="img"
        viewBox="0 0 760 370"
      >
        <title id={`topic-i-${kind}-title`}>{copy.title}</title>
        <desc id={`topic-i-${kind}-description`}>{copy.description}</desc>
        {kind === "adapted-complex" ? (
          <AdaptedComplexDrawing />
        ) : (
          <OriginOrderDrawing />
        )}
      </svg>
      <figcaption>{copy.caption}</figcaption>
    </figure>
  );
}
