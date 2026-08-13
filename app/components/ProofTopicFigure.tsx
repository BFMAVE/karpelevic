import type { ReactNode } from "react";

type ProofTopicFigureProps = {
  slug: string;
};

const figureCopy: Readonly<
  Record<
    string,
    {
      title: string;
      description: string;
      caption: ReactNode;
      qualification?: string;
    }
  >
> = {
  language: {
    title: "An invariant polygon and its contracted rotated image",
    description:
      "A strict outer polygon P contains a smaller rotated polygon T P. The origin lies in the interior.",
    caption:
      "Plate I. The intrinsic starting point: T acts as a rotation-contraction in adapted coordinates, while polygonal complexity counts the vertices of P.",
  },
  "active-sides": {
    qualification: "Exact geometric model",
    title: "Every side intersects the image polygon at radial criticality",
    description:
      "A regular heptagon contains its image under a rotation by pi over seven followed by contraction by cosine pi over seven; the image vertices are the side midpoints.",
    caption: (
      <>
        Plate II. An exact model: for a regular heptagon,{" "}
        <math
          aria-label="T equals rho e to the i theta, with rho equals cosine of pi over seven and theta equals pi over seven"
          display="inline"
        >
          <mrow>
            <mi>T</mi>
            <mo>=</mo>
            <mi>ρ</mi>
            <msup>
              <mi>e</mi>
              <mrow>
                <mi>i</mi>
                <mi>θ</mi>
              </mrow>
            </msup>
            <mtext> with </mtext>
            <mi>ρ</mi>
            <mo>=</mo>
            <mi mathvariant="normal">cos</mi>
            <mo>(</mo>
            <mfrac>
              <mi>π</mi>
              <mn>7</mn>
            </mfrac>
            <mo>)</mo>
            <mo>,</mo>
            <mspace width="0.45em" />
            <mi>θ</mi>
            <mo>=</mo>
            <mfrac>
              <mi>π</mi>
              <mn>7</mn>
            </mfrac>
          </mrow>
        </math>{" "}
        sends every vertex to the midpoint of the next side. Thus every side
        has nonempty intersection with <i>TP</i>. The theorem proves the same
        side-intersection conclusion for every invariant polygon with at most
        <i>N</i> vertices under an <i>N</i>-critical map, not only this
        symmetric example.
      </>
    ),
  },
  ownership: {
    title: "Half-open ownership at a vertex contact",
    description:
      "A contact at a polygon vertex belongs to two closed sides, but to exactly one side after the boundary is partitioned into half-open sides.",
    caption:
      "Plate III. The filled endpoint belongs to the displayed half-open side; the open endpoint does not. This removes vertex-contact ambiguity globally.",
  },
  mutation: {
    title: "A geometric contact mutation and its chip move",
    description:
      "A strict contact replaces a polygon vertex. On the cyclic board the corresponding occupied side moves forward by the contact rotation.",
    caption:
      "Plate IV. The surgery and chip pictures encode the same move: e leaves the strict set and σ(e) enters it.",
  },
  rotation: {
    title: "First returns of a finite rotation",
    description:
      "Eleven points on a circle are visited by repeatedly adding four modulo eleven. A highlighted interval is the return section.",
    caption:
      "Plate V. For N = 11 and step κ = 4, the orbit is 0, 4, 8, 1, 5, 9, 2, 6, 10, 3, 7, 0. First returns to the highlighted interval form finite towers.",
  },
  "unit-return": {
    title: "A projective corridor and its holonomy",
    description:
      "Successive projections carry a seed point through an ordered chain of boundary segments and return it to the starting line.",
    caption:
      "Plate VI. The dashed projection rays define a fractional-linear return map H. Criticality forces H to be the identity.",
  },
  "farey-return": {
    title: "A Farey cell and the return product",
    description:
      "The Farey neighbours one third and two fifths have determinant one, and their mediant is three eighths.",
    caption:
      "Plate VII. The determinant 3·2 − 1·5 = 1 certifies adjacency. The return monodromy supplies the heterogeneous product carried by this cell.",
  },
  spectra: {
    title: "The invariant-polygon criterion",
    description:
      "Rows of a stochastic matrix express each image vertex lambda v i as a convex combination of polygon vertices, and conversely.",
    caption:
      "Plate VIII. Stochastic coefficients and invariant polygons are two descriptions of the same containment λP ⊆ P.",
  },
};

function RotationFigure() {
  const centerX = 305;
  const centerY = 175;
  const radius = 125;
  const points = Array.from({ length: 11 }, (_, index) => {
    const angle = -Math.PI / 2 + (2 * Math.PI * index) / 11;
    return {
      index,
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  });
  const orbit = [0, 4, 8, 1, 5, 9, 2, 6, 10, 3, 7, 0];
  const orbitPoints = orbit
    .map((index) => {
      const point = points[index];
      return `${point.x},${point.y}`;
    })
    .join(" ");

  return (
    <>
      <circle className="proof-figure-muted" cx={centerX} cy={centerY} r={radius} />
      <polyline className="proof-figure-orbit" points={orbitPoints} />
      {points.map((point) => (
        <g key={point.index}>
          <circle
            className={
              point.index <= 3
                ? "proof-figure-contact"
                : "proof-figure-point"
            }
            cx={point.x}
            cy={point.y}
            r={point.index <= 3 ? 7 : 5}
          />
          <text
            className="proof-figure-small-label"
            x={point.x}
            y={point.y - 13}
            textAnchor="middle"
          >
            {point.index}
          </text>
        </g>
      ))}
      <path className="proof-figure-brace" d="M472 102 Q535 175 472 248" />
      <text className="proof-figure-label" x="555" y="161" textAnchor="middle">
        I = {"{0,1,2,3}"}
      </text>
      <text className="proof-figure-note" x="555" y="190" textAnchor="middle">
        return section
      </text>
    </>
  );
}

function ActiveSidesFigure() {
  const count = 7;
  const centreX = 380;
  const centreY = 182;
  const radius = 145;
  const vertices = Array.from({ length: count }, (_, index) => {
    const angle = -Math.PI / 2 + (2 * Math.PI * index) / count;
    return {
      x: centreX + radius * Math.cos(angle),
      y: centreY + radius * Math.sin(angle),
    };
  });
  const imageVertices = vertices.map((vertex, index) => {
    const next = vertices[(index + 1) % count];
    return {
      x: (vertex.x + next.x) / 2,
      y: (vertex.y + next.y) / 2,
    };
  });

  return (
    <>
      <polygon
        className="proof-figure-polygon"
        points={vertices.map(({ x, y }) => `${x},${y}`).join(" ")}
      />
      <polygon
        className="proof-figure-image"
        data-rho={Math.cos(Math.PI / count)}
        data-theta={Math.PI / count}
        points={imageVertices.map(({ x, y }) => `${x},${y}`).join(" ")}
      />
      {imageVertices.map(({ x, y }, index) => (
        <circle
          className="proof-figure-contact"
          cx={x}
          cy={y}
          data-contact-side={index}
          key={index}
          r="7"
        />
      ))}
      <circle className="proof-figure-origin" cx={centreX} cy={centreY} r="5" />
      <text className="proof-figure-label" x="620" y="79">P</text>
      <text
        className="proof-figure-label proof-figure-accent"
        x="445"
        y="190"
        textAnchor="middle"
      >
        TP
      </text>
    </>
  );
}

function FigureDrawing({ slug }: { slug: string }) {
  switch (slug) {
    case "language":
      return (
        <>
          <polygon
            className="proof-figure-polygon"
            points="92,235 170,76 363,42 618,106 666,252 384,322 168,302"
          />
          <polygon
            className="proof-figure-image"
            points="210,228 227,137 344,86 510,128 559,224 390,278 258,282"
          />
          <circle className="proof-figure-origin" cx="365" cy="194" r="5" />
          <path
            className="proof-figure-arrow"
            d="M365 194 Q435 142 510 128"
            markerEnd={`url(#proof-arrow-${slug})`}
          />
          <text className="proof-figure-label" x="610" y="79">P</text>
          <text className="proof-figure-label proof-figure-accent" x="518" y="153">TP</text>
          <text className="proof-figure-small-label" x="350" y="218">0</text>
          <text className="proof-figure-note" x="467" y="91">rotate + contract</text>
        </>
      );
    case "active-sides":
      return <ActiveSidesFigure />;
    case "ownership":
      return (
        <>
          <polygon
            className="proof-figure-polygon"
            points="138,265 165,92 390,44 630,155 540,306 292,322"
          />
          <line className="proof-figure-owned-side" x1="165" y1="92" x2="390" y2="44" />
          <circle className="proof-figure-open-point" cx="165" cy="92" r="8" />
          <circle className="proof-figure-closed-point" cx="390" cy="44" r="8" />
          <circle className="proof-figure-source" cx="332" cy="238" r="7" />
          <path
            className="proof-figure-arrow"
            d="M332 230 Q353 133 390 54"
            markerEnd={`url(#proof-arrow-${slug})`}
          />
          <text className="proof-figure-label" x="294" y="79">e▷ = (tail, head]</text>
          <text className="proof-figure-small-label" x="309" y="264">v</text>
          <text className="proof-figure-small-label" x="410" y="36">Tv</text>
          <text className="proof-figure-note" x="520" y="104">owned exactly once</text>
        </>
      );
    case "mutation":
      return (
        <>
          <text className="proof-figure-small-label" x="178" y="42" textAnchor="middle">before</text>
          <polygon
            className="proof-figure-polygon"
            points="55,239 92,100 211,55 318,126 292,280 145,307"
          />
          <circle className="proof-figure-contact" cx="255" cy="258" r="7" />
          <circle className="proof-figure-source" cx="292" cy="280" r="7" />
          <path className="proof-figure-arrow" d="M286 274 L261 262" markerEnd={`url(#proof-arrow-${slug})`} />
          <text className="proof-figure-small-label" x="292" y="300">h(e)</text>
          <text className="proof-figure-small-label" x="225" y="247">Tχ⁻¹(e)</text>

          <path className="proof-figure-transfer" d="M347 180 L411 180" markerEnd={`url(#proof-arrow-${slug})`} />

          <text className="proof-figure-small-label" x="566" y="42" textAnchor="middle">after</text>
          <polygon
            className="proof-figure-polygon"
            points="438,239 475,100 594,55 701,126 638,258 528,307"
          />
          <circle className="proof-figure-contact" cx="638" cy="258" r="7" />
          <text className="proof-figure-note" x="566" y="336" textAnchor="middle">
            I′ = (I ∖ {"{e}"}) ∪ {"{σ(e)}"}
          </text>
        </>
      );
    case "rotation":
      return <RotationFigure />;
    case "unit-return":
      return (
        <>
          {[
            [95, 285, 255, 260],
            [195, 205, 360, 180],
            [305, 125, 470, 100],
            [430, 255, 650, 220],
          ].map(([x1, y1, x2, y2], index) => (
            <line
              className="proof-figure-corridor-edge"
              key={index}
              x1={x1}
              x2={x2}
              y1={y1}
              y2={y2}
            />
          ))}
          <polyline
            className="proof-figure-projection"
            points="135,279 273,193 426,107 578,232 166,274"
            markerEnd={`url(#proof-arrow-${slug})`}
          />
          {[
            [135, 279, "x"],
            [273, 193, "x₁"],
            [426, 107, "x₂"],
            [578, 232, "x₃"],
            [166, 274, "H(x)"],
          ].map(([x, y, label]) => (
            <g key={String(label)}>
              <circle className="proof-figure-contact" cx={Number(x)} cy={Number(y)} r="7" />
              <text className="proof-figure-small-label" x={Number(x)} y={Number(y) - 14} textAnchor="middle">
                {label}
              </text>
            </g>
          ))}
          <text className="proof-figure-label" x="593" y="72" textAnchor="middle">projective corridor</text>
          <text className="proof-figure-note" x="593" y="102" textAnchor="middle">criticality forces H(x) = x</text>
        </>
      );
    case "farey-return":
      return (
        <>
          <line className="proof-figure-axis" x1="84" x2="676" y1="135" y2="135" />
          {[
            [170, "1", "3", "p/q"],
            [380, "3", "8", "mediant"],
            [590, "2", "5", "r/s"],
          ].map(([x, numerator, denominator, label], index) => (
            <g key={String(label)}>
              <line className="proof-figure-tick" x1={Number(x)} x2={Number(x)} y1="124" y2="147" />
              <text className={index === 1 ? "proof-figure-fraction proof-figure-accent" : "proof-figure-fraction"} x={Number(x)} y="93" textAnchor="middle">
                <tspan x={Number(x)} dy="0">{numerator}</tspan>
                <tspan x={Number(x)} dy="18">―</tspan>
                <tspan x={Number(x)} dy="18">{denominator}</tspan>
              </text>
              <text className="proof-figure-small-label" x={Number(x)} y="169" textAnchor="middle">{label}</text>
            </g>
          ))}
          <text className="proof-figure-label" x="380" y="225" textAnchor="middle">
            3·2 − 1·5 = 1
          </text>
          <text className="proof-figure-equation" x="380" y="281" textAnchor="middle">
            μˢ ∏(μᑫ − βⱼ) = μᵈᑫ ∏αⱼ
          </text>
          <text className="proof-figure-note" x="380" y="316" textAnchor="middle">
            Farey adjacency carries the return product
          </text>
        </>
      );
    case "spectra":
      return (
        <>
          <rect className="proof-figure-matrix" x="66" y="73" width="215" height="218" />
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3].map((column) => (
              <rect
                className="proof-figure-matrix-cell"
                key={`${row}-${column}`}
                x={82 + column * 46}
                y={90 + row * 46}
                width="32"
                height="32"
              />
            )),
          )}
          <text className="proof-figure-label" x="174" y="55" textAnchor="middle">A = (aᵢⱼ)</text>
          <text className="proof-figure-note" x="174" y="321" textAnchor="middle">aᵢⱼ ≥ 0,  Σⱼaᵢⱼ = 1</text>
          <path className="proof-figure-transfer" d="M303 181 L390 181" markerEnd={`url(#proof-arrow-${slug})`} />
          <polygon
            className="proof-figure-polygon"
            points="430,250 458,98 576,64 688,156 626,286 500,306"
          />
          <polygon
            className="proof-figure-image"
            points="493,240 492,142 567,106 638,164 602,246 527,271"
          />
          <circle className="proof-figure-contact" cx="602" cy="246" r="6" />
          <text className="proof-figure-label" x="678" y="116">P</text>
          <text className="proof-figure-label proof-figure-accent" x="588" y="182">λP</text>
          <text className="proof-figure-note" x="552" y="337" textAnchor="middle">λvᵢ = Σⱼaᵢⱼvⱼ</text>
        </>
      );
    default:
      return null;
  }
}

export function ProofTopicFigure({ slug }: ProofTopicFigureProps) {
  const copy = figureCopy[slug];
  if (!copy) return null;

  const titleId = `proof-figure-${slug}-title`;
  const descriptionId = `proof-figure-${slug}-description`;

  return (
    <figure className="proof-topic-figure">
      <div className="proof-topic-figure-heading">
        <span>Scientific plate</span>
        <span>{copy.qualification ?? "Schematic, not to scale"}</span>
      </div>
      <svg
        aria-labelledby={`${titleId} ${descriptionId}`}
        role="img"
        viewBox="0 0 760 360"
      >
        <title id={titleId}>{copy.title}</title>
        <desc id={descriptionId}>{copy.description}</desc>
        <defs>
          <marker
            id={`proof-arrow-${slug}`}
            markerHeight="7"
            markerWidth="8"
            orient="auto"
            refX="7"
            refY="3.5"
          >
            <path className="proof-figure-arrow-head" d="M0,0 L8,3.5 L0,7 Z" />
          </marker>
        </defs>
        <FigureDrawing slug={slug} />
      </svg>
      <figcaption>{copy.caption}</figcaption>
    </figure>
  );
}
