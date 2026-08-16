type PrerequisitePlateProps = {
  slug: string;
};

const plateCopy: Readonly<
  Record<string, { title: string; description: string; caption: string }>
> = {
  "linear-maps": {
    title: "One invariant polygon in two coordinate systems",
    description:
      "A square and its linear image, a parallelogram, are connected by an invertible coordinate map. The corresponding linear transformations are conjugate.",
    caption:
      "Plate I. Conjugacy changes coordinates, not dynamics: AP ⊆ P becomes (SAS⁻¹)(SP) ⊆ SP, and the number of extreme points is unchanged.",
  },
  "elliptic-maps": {
    title: "A real elliptic contraction in adapted complex coordinates",
    description:
      "A vector is rotated through sixty degrees and contracted by a factor of zero point seven. The same motion is shown in real coordinates and as multiplication by a complex number.",
    caption:
      "Plate I. The real matrix and the complex multiplier describe the same map. Choosing the opposite complex orientation replaces the multiplier by its conjugate.",
  },
  "convex-background": {
    title: "Extreme points, an exposed side, and a redundant boundary point",
    description:
      "A quadrilateral has four extreme points in its complete cyclic vertex list. A fifth displayed boundary point lies in the relative interior of its top side and is therefore not a vertex. A supporting line exposes the whole side.",
    caption:
      "Plate II. The point m belongs to the relative interior of an exposed face, so it is not extreme. Polygonal complexity counts the four genuine vertices, not the five displayed boundary points.",
  },
  "oriented-boundary": {
    title: "Boundary order transported through an orientation reversal",
    description:
      "A positively oriented triangle around the origin is reflected to a triangle with the opposite displayed boundary order. Vertices, rays, and the invariant geometry are transported together.",
    caption:
      "Plate III. Reflection preserves incidence and containment but reverses handedness. Boundary order, ray order, and the chosen complex multiplier are reversed or conjugated together.",
  },
  "invariant-polygons": {
    title: "A square and its rotated contracted image",
    description:
      "A square contains the image obtained by a ninety-degree rotation followed by contraction by one half. The image vertices suffice to verify the full containment.",
    caption:
      "Plate III. For P = conv{v₁,…,vN}, linearity makes TP the convex hull of Tv₁,…,TvN. Checking the finitely many image vertices therefore proves TP ⊆ P.",
  },
  "orientation-separation": {
    title: "Cyclic order inside; strict separation outside",
    description:
      "An oriented triangle surrounds the origin. A point outside it lies beyond a supporting line and is strictly separated by a linear functional.",
    caption:
      "Plate IV. The interior origin makes ray directions follow the positive boundary order. A supporting level line turns exteriority into the strict inequality ℓ(y) > max ℓ(P).",
  },
  "linear-algebra": {
    title: "A real elliptic contraction in adapted complex coordinates",
    description:
      "A vector is rotated through sixty degrees and contracted by a factor of zero point seven. The same motion is shown in real coordinates and as multiplication by a complex number.",
    caption:
      "Plate I. The real matrix and the complex multiplier describe the same map. Choosing the opposite complex orientation replaces the multiplier by its conjugate.",
  },
  convexity: {
    title: "A polygon, a supporting side, and the corresponding polar vertex",
    description:
      "A convex polygon is touched by a supporting line. In the polar polygon, that supporting inequality is represented by a vertex.",
    caption:
      "Plate II. The primal and dual descriptions carry the same information: sides of P become vertices of P°, while containment by a linear map dualizes to containment by its transpose.",
  },
  "cyclic-arithmetic": {
    title: "First returns for addition by four modulo eleven",
    description:
      "Eleven residues lie on a circle. Repeated addition of four creates one orbit, and first returns are measured to the highlighted interval from zero through three.",
    caption:
      "Plate III. The interval I = {0,1,2,3} has return heights 3, 3, 3, and 2. Its four return towers therefore account for all eleven residues exactly once.",
  },
  "projective-farey": {
    title: "A chain of perspectivities beside a Farey cell",
    description:
      "Successive central projections carry a point through three lines. Beside them, the Farey neighbours one third and two fifths enclose their mediant three eighths.",
    caption:
      "Plate IV. Projective geometry controls the return map; determinant-one arithmetic identifies the Farey cell. The two structures meet in the return data of Part I.",
  },
};

function LinearMapsDrawing() {
  return (
    <>
      <ArrowMarker id="prerequisite-arrow-linear-maps" />
      <text className="prerequisite-svg-kicker" x="192" y="44" textAnchor="middle">
        FIRST COORDINATES
      </text>
      <polygon
        className="prerequisite-polygon"
        points="92,91 288,91 288,287 92,287"
      />
      <polygon
        className="prerequisite-polygon prerequisite-polygon-dual"
        points="141,140 239,140 239,238 141,238"
      />
      <text className="prerequisite-svg-label" x="300" y="105">
        P
      </text>
      <text className="prerequisite-svg-label prerequisite-svg-accent" x="248" y="157">
        AP
      </text>
      <path
        className="prerequisite-duality"
        d="M333 190 L425 190"
        markerEnd="url(#prerequisite-arrow-linear-maps)"
      />
      <text className="prerequisite-svg-equation" x="380" y="169" textAnchor="middle">
        S
      </text>
      <text className="prerequisite-svg-small" x="380" y="215" textAnchor="middle">
        change coordinates
      </text>
      <text className="prerequisite-svg-kicker" x="579" y="44" textAnchor="middle">
        NEW COORDINATES
      </text>
      <polygon
        className="prerequisite-polygon"
        points="462,123 638,80 691,254 515,298"
      />
      <polygon
        className="prerequisite-polygon prerequisite-polygon-dual"
        points="507,153 595,132 621,219 533,241"
      />
      <text className="prerequisite-svg-label" x="681" y="89">
        SP
      </text>
      <text className="prerequisite-svg-label prerequisite-svg-accent" x="625" y="146">
        SAS⁻¹(SP)
      </text>
      <text className="prerequisite-svg-equation" x="380" y="345" textAnchor="middle">
        AP ⊆ P  ⇔  (SAS⁻¹)(SP) ⊆ SP
      </text>
    </>
  );
}

function InvariantPolygonDrawing() {
  return (
    <>
      <ArrowMarker id="prerequisite-arrow-invariant" />
      <polygon
        className="prerequisite-polygon"
        points="158,45 602,45 602,329 158,329"
      />
      <polygon
        className="prerequisite-polygon prerequisite-polygon-dual"
        points="380,116 523,187 380,258 237,187"
      />
      <circle className="prerequisite-origin" cx="380" cy="187" r="5" />
      {[
        [380, 116],
        [523, 187],
        [380, 258],
        [237, 187],
      ].map(([x, y], index) => (
        <g key={`${x}-${y}`}>
          <circle className="prerequisite-contact" cx={x} cy={y} r="7" />
          <text className="prerequisite-svg-small" x={x + 12} y={y - 10}>
            Tv{index + 1}
          </text>
        </g>
      ))}
      <path
        className="prerequisite-vector prerequisite-vector-image"
        d="M575 69 Q520 94 394 114"
        markerEnd="url(#prerequisite-arrow-invariant)"
      />
      <text className="prerequisite-svg-label" x="613" y="42">
        P
      </text>
      <text className="prerequisite-svg-label prerequisite-svg-accent" x="525" y="221">
        TP
      </text>
      <text className="prerequisite-svg-small" x="512" y="89">
        rotate + contract
      </text>
      <text className="prerequisite-svg-equation" x="380" y="363" textAnchor="middle">
        Tvᵢ ∈ P for every vertex  ⇒  TP ⊆ P
      </text>
    </>
  );
}

function ConvexBackgroundDrawing() {
  return (
    <>
      <ArrowMarker id="prerequisite-arrow-convex" />
      <polygon
        className="prerequisite-polygon"
        points="115,286 151,101 544,101 638,258 410,322"
      />
      <line className="prerequisite-support" x1="73" x2="604" y1="101" y2="101" />
      <circle className="prerequisite-contact" cx="151" cy="101" r="7" />
      <circle className="prerequisite-contact" cx="544" cy="101" r="7" />
      <circle className="prerequisite-point" cx="348" cy="101" r="6" />
      <text className="prerequisite-svg-label prerequisite-svg-accent" x="139" y="82">
        v₁
      </text>
      <text className="prerequisite-svg-label prerequisite-svg-accent" x="553" y="82">
        v₂
      </text>
      <text className="prerequisite-svg-label" x="348" y="79" textAnchor="middle">
        m
      </text>
      <text className="prerequisite-svg-small" x="348" y="133" textAnchor="middle">
        m = ½v₁ + ½v₂
      </text>
      <text className="prerequisite-svg-small" x="642" y="98">
        ℓ = hP(ℓ)
      </text>
      <path
        className="prerequisite-normal"
        d="M590 187 L590 116"
        markerEnd="url(#prerequisite-arrow-convex)"
      />
      <text className="prerequisite-svg-small" x="604" y="163">
        outward normal
      </text>
      <text className="prerequisite-svg-equation" x="348" y="364" textAnchor="middle">
        m ∈ relint([v₁,v₂])  ⇒  m ∉ Ext(P)
      </text>
    </>
  );
}

function OrientedBoundaryDrawing() {
  return (
    <>
      <ArrowMarker id="prerequisite-arrow-boundary" />
      <text className="prerequisite-svg-kicker" x="205" y="41" textAnchor="middle">
        POSITIVE ORIENTATION
      </text>
      <polygon
        className="prerequisite-polygon"
        points="80,278 205,70 352,287"
      />
      <circle className="prerequisite-origin" cx="214" cy="213" r="5" />
      {[
        [80, 278, "v₁"],
        [205, 70, "v₂"],
        [352, 287, "v₃"],
      ].map(([x, y, label]) => (
        <g key={String(label)}>
          <line className="prerequisite-guide" x1="214" x2={Number(x)} y1="213" y2={Number(y)} />
          <text className="prerequisite-svg-label" x={Number(x)} y={Number(y) - 12} textAnchor="middle">
            {label}
          </text>
        </g>
      ))}
      <path
        className="prerequisite-angle"
        d="M119 292 Q50 169 162 84"
        markerEnd="url(#prerequisite-arrow-boundary)"
      />

      <path
        className="prerequisite-duality"
        d="M372 182 L443 182"
        markerEnd="url(#prerequisite-arrow-boundary)"
      />
      <text className="prerequisite-svg-equation" x="408" y="160" textAnchor="middle">
        det S &lt; 0
      </text>

      <text className="prerequisite-svg-kicker" x="573" y="41" textAnchor="middle">
        REVERSED ORIENTATION
      </text>
      <polygon
        className="prerequisite-polygon prerequisite-polygon-dual"
        points="426,287 573,70 698,278"
      />
      <circle className="prerequisite-origin" cx="564" cy="213" r="5" />
      {[
        [698, 278, "Sv₁"],
        [573, 70, "Sv₂"],
        [426, 287, "Sv₃"],
      ].map(([x, y, label]) => (
        <g key={String(label)}>
          <line className="prerequisite-guide" x1="564" x2={Number(x)} y1="213" y2={Number(y)} />
          <text
            className="prerequisite-svg-label prerequisite-svg-accent"
            x={Number(x)}
            y={Number(y) - 12}
            textAnchor="middle"
          >
            {label}
          </text>
        </g>
      ))}
      <path
        className="prerequisite-angle"
        d="M659 292 Q728 169 616 84"
        markerEnd="url(#prerequisite-arrow-boundary)"
      />
      <text className="prerequisite-svg-equation" x="380" y="360" textAnchor="middle">
        cyclic order reverses · incidence is preserved
      </text>
    </>
  );
}

function OrientationSeparationDrawing() {
  return (
    <>
      <ArrowMarker id="prerequisite-arrow-orientation" />
      <polygon
        className="prerequisite-polygon"
        points="118,245 340,74 427,296"
      />
      <circle className="prerequisite-origin" cx="290" cy="211" r="5" />
      <path
        className="prerequisite-angle"
        d="M210 263 Q122 186 178 112"
        markerEnd="url(#prerequisite-arrow-orientation)"
      />
      <text className="prerequisite-svg-small" x="144" y="180">
        positive boundary order
      </text>
      <line className="prerequisite-guide" x1="290" x2="118" y1="211" y2="245" />
      <line className="prerequisite-guide" x1="290" x2="340" y1="211" y2="74" />
      <line className="prerequisite-guide" x1="290" x2="427" y1="211" y2="296" />
      <text className="prerequisite-svg-small" x="302" y="229">
        0
      </text>

      <line className="prerequisite-support" x1="480" x2="646" y1="326" y2="47" />
      <circle className="prerequisite-contact" cx="679" cy="99" r="8" />
      <text className="prerequisite-svg-label prerequisite-svg-accent" x="694" y="91">
        y
      </text>
      <path
        className="prerequisite-normal"
        d="M566 187 L647 236"
        markerEnd="url(#prerequisite-arrow-orientation)"
      />
      <text className="prerequisite-svg-small" x="582" y="179">
        ℓ increases
      </text>
      <text className="prerequisite-svg-equation" x="589" y="357" textAnchor="middle">
        ℓ(y) &gt; max ℓ(P)
      </text>
      <text className="prerequisite-svg-small" x="488" y="317">
        supporting line
      </text>
    </>
  );
}

function ArrowMarker({ id }: { id: string }) {
  return (
    <defs>
      <marker
        id={id}
        markerHeight="8"
        markerWidth="8"
        orient="auto"
        refX="7"
        refY="4"
        viewBox="0 0 8 8"
      >
        <path className="prerequisite-arrow-head" d="M0 0 L8 4 L0 8 Z" />
      </marker>
    </defs>
  );
}

function LinearAlgebraDrawing() {
  return (
    <>
      <ArrowMarker id="prerequisite-arrow-linear" />
      <line className="prerequisite-axis" x1="82" x2="402" y1="274" y2="274" />
      <line className="prerequisite-axis" x1="172" x2="172" y1="322" y2="48" />
      <path
        className="prerequisite-vector prerequisite-vector-original"
        d="M172 274 L352 274"
        markerEnd="url(#prerequisite-arrow-linear)"
      />
      <path
        className="prerequisite-vector prerequisite-vector-image"
        d="M172 274 L235 165"
        markerEnd="url(#prerequisite-arrow-linear)"
      />
      <path
        className="prerequisite-angle"
        d="M232 274 A60 60 0 0 0 202 222"
      />
      <circle className="prerequisite-origin" cx="172" cy="274" r="5" />
      <text className="prerequisite-svg-label" x="357" y="266">
        v
      </text>
      <text className="prerequisite-svg-label prerequisite-svg-accent" x="244" y="159">
        Tv
      </text>
      <text className="prerequisite-svg-small" x="230" y="229">
        θ = π/3
      </text>
      <text className="prerequisite-svg-small" x="234" y="183">
        |Tv| = 0.7 |v|
      </text>

      <rect className="prerequisite-inset" x="452" y="77" width="246" height="215" rx="2" />
      <text className="prerequisite-svg-kicker" x="575" y="112" textAnchor="middle">
        TWO LANGUAGES
      </text>
      <text className="prerequisite-svg-equation" x="575" y="160" textAnchor="middle">
        T = [ ρ cos θ  −ρ sin θ ]
      </text>
      <text className="prerequisite-svg-equation" x="575" y="188" textAnchor="middle">
        [ ρ sin θ   ρ cos θ ]
      </text>
      <line className="prerequisite-divider" x1="488" x2="662" y1="213" y2="213" />
      <text className="prerequisite-svg-equation prerequisite-svg-accent" x="575" y="251" textAnchor="middle">
        z ↦ 0.7eⁱᵖⁱ⁄³ z
      </text>
      <text className="prerequisite-svg-small" x="575" y="276" textAnchor="middle">
        eigenvalues 0.7e±ⁱᵖⁱ⁄³
      </text>
    </>
  );
}

function ConvexityDrawing() {
  return (
    <>
      <ArrowMarker id="prerequisite-arrow-convexity" />
      <text className="prerequisite-svg-kicker" x="220" y="45" textAnchor="middle">
        PRIMAL POLYGON P
      </text>
      <polygon
        className="prerequisite-polygon"
        points="82,245 126,103 274,66 369,154 330,293 166,310"
      />
      <line className="prerequisite-support" x1="95" x2="351" y1="81" y2="18" />
      <line className="prerequisite-normal" x1="230" x2="264" y1="87" y2="224" markerEnd="url(#prerequisite-arrow-convexity)" />
      <circle className="prerequisite-contact" cx="198" cy="85" r="7" />
      <text className="prerequisite-svg-label" x="355" y="38">
        ℓ(x) = 1
      </text>
      <text className="prerequisite-svg-small" x="265" y="238">
        outward normal ℓ
      </text>
      <text className="prerequisite-svg-label" x="335" y="286">
        P
      </text>

      <path className="prerequisite-duality" d="M403 179 L463 179" markerEnd="url(#prerequisite-arrow-convexity)" />
      <text className="prerequisite-svg-small" x="433" y="164" textAnchor="middle">
        polar
      </text>

      <text className="prerequisite-svg-kicker" x="585" y="45" textAnchor="middle">
        DUAL POLYGON P°
      </text>
      <polygon
        className="prerequisite-polygon prerequisite-polygon-dual"
        points="480,239 526,91 625,70 699,174 650,302 531,286"
      />
      <circle className="prerequisite-contact" cx="625" cy="70" r="8" />
      <line className="prerequisite-guide" x1="625" x2="625" y1="70" y2="242" />
      <text className="prerequisite-svg-label prerequisite-svg-accent" x="640" y="64">
        ℓ
      </text>
      <text className="prerequisite-svg-small" x="625" y="263" textAnchor="middle">
        one side ↔ one vertex
      </text>
    </>
  );
}

function CyclicArithmeticDrawing() {
  const centerX = 258;
  const centerY = 177;
  const radius = 122;
  const points = Array.from({ length: 11 }, (_, index) => {
    const angle = -Math.PI / 2 + (2 * Math.PI * index) / 11;
    return {
      index,
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  });
  const orbit = [0, 4, 8, 1, 5, 9, 2, 6, 10, 3, 7, 0]
    .map((index) => `${points[index].x},${points[index].y}`)
    .join(" ");

  return (
    <>
      <circle className="prerequisite-circle" cx={centerX} cy={centerY} r={radius} />
      <polyline className="prerequisite-orbit" points={orbit} />
      {points.map((point) => (
        <g key={point.index}>
          <circle
            className={point.index <= 3 ? "prerequisite-contact" : "prerequisite-point"}
            cx={point.x}
            cy={point.y}
            r={point.index <= 3 ? 7 : 5}
          />
          <text
            className="prerequisite-svg-small"
            x={point.x}
            y={point.y - 13}
            textAnchor="middle"
          >
            {point.index}
          </text>
        </g>
      ))}

      <text className="prerequisite-svg-kicker" x="575" y="64" textAnchor="middle">
        FIRST-RETURN TOWERS
      </text>
      {[3, 3, 3, 2].map((height, towerIndex) => (
        <g key={`${towerIndex}-${height}`}>
          {Array.from({ length: height }, (_, level) => (
            <rect
              className={
                level === 0
                  ? "prerequisite-tower-base"
                  : "prerequisite-tower-cell"
              }
              height="37"
              key={level}
              width="50"
              x={457 + towerIndex * 67}
              y={275 - level * 39}
            />
          ))}
          <text
            className="prerequisite-svg-label"
            x={482 + towerIndex * 67}
            y="330"
            textAnchor="middle"
          >
            {towerIndex}
          </text>
          <text
            className="prerequisite-svg-small prerequisite-svg-accent"
            x={482 + towerIndex * 67}
            y={297 - height * 39}
            textAnchor="middle"
          >
            H = {height}
          </text>
        </g>
      ))}
      <text className="prerequisite-svg-small" x="575" y="355" textAnchor="middle">
        3 + 3 + 3 + 2 = 11
      </text>
    </>
  );
}

function ProjectiveFareyDrawing() {
  return (
    <>
      <ArrowMarker id="prerequisite-arrow-projective" />
      <text className="prerequisite-svg-kicker" x="208" y="42" textAnchor="middle">
        SUCCESSIVE PERSPECTIVITIES
      </text>
      <line className="prerequisite-corridor-line" x1="60" x2="302" y1="285" y2="250" />
      <line className="prerequisite-corridor-line" x1="96" x2="331" y1="194" y2="152" />
      <line className="prerequisite-corridor-line" x1="145" x2="365" y1="96" y2="52" />
      <polyline
        className="prerequisite-projective-path"
        markerEnd="url(#prerequisite-arrow-projective)"
        points="107,278 215,173 303,64 256,257"
      />
      {[
        [107, 278, "x"],
        [215, 173, "x₁"],
        [303, 64, "x₂"],
        [256, 257, "H(x)"],
      ].map(([x, y, label]) => (
        <g key={String(label)}>
          <circle className="prerequisite-contact" cx={Number(x)} cy={Number(y)} r="6" />
          <text
            className="prerequisite-svg-small"
            x={Number(x)}
            y={Number(y) - 13}
            textAnchor="middle"
          >
            {label}
          </text>
        </g>
      ))}

      <line className="prerequisite-section-rule" x1="402" x2="402" y1="28" y2="330" />
      <text className="prerequisite-svg-kicker" x="575" y="42" textAnchor="middle">
        FAREY CELL
      </text>
      <line className="prerequisite-number-line" x1="457" x2="690" y1="211" y2="211" />
      {[
        [488, "1", "3"],
        [574, "3", "8"],
        [660, "2", "5"],
      ].map(([x, numerator, denominator], index) => (
        <g key={`${numerator}/${denominator}`}>
          <line
            className={index === 1 ? "prerequisite-tick prerequisite-tick-accent" : "prerequisite-tick"}
            x1={Number(x)}
            x2={Number(x)}
            y1="197"
            y2="225"
          />
          <text className="prerequisite-fraction-numerator" x={Number(x)} y="252" textAnchor="middle">
            {numerator}
          </text>
          <line className="prerequisite-fraction-rule" x1={Number(x) - 10} x2={Number(x) + 10} y1="258" y2="258" />
          <text className="prerequisite-fraction-denominator" x={Number(x)} y="278" textAnchor="middle">
            {denominator}
          </text>
        </g>
      ))}
      <path className="prerequisite-farey-arc" d="M488 190 Q574 92 660 190" />
      <text className="prerequisite-svg-equation" x="574" y="92" textAnchor="middle">
        3·2 − 1·5 = 1
      </text>
      <text className="prerequisite-svg-small prerequisite-svg-accent" x="574" y="184" textAnchor="middle">
        mediant
      </text>
    </>
  );
}

function Drawing({ slug }: { slug: string }) {
  switch (slug) {
    case "linear-maps":
      return <LinearMapsDrawing />;
    case "elliptic-maps":
      return <LinearAlgebraDrawing />;
    case "convex-background":
      return <ConvexBackgroundDrawing />;
    case "oriented-boundary":
      return <OrientedBoundaryDrawing />;
    case "invariant-polygons":
      return <InvariantPolygonDrawing />;
    case "orientation-separation":
      return <OrientationSeparationDrawing />;
    case "linear-algebra":
      return <LinearAlgebraDrawing />;
    case "convexity":
      return <ConvexityDrawing />;
    case "cyclic-arithmetic":
      return <CyclicArithmeticDrawing />;
    case "projective-farey":
      return <ProjectiveFareyDrawing />;
    default:
      return null;
  }
}

export function PrerequisitePlate({ slug }: PrerequisitePlateProps) {
  const copy = plateCopy[slug];

  if (!copy) {
    return null;
  }

  return (
    <figure className="prerequisite-plate">
      <div className="prerequisite-plate-heading">
        <span>Illustrated dictionary</span>
        <span>{copy.title}</span>
      </div>
      <svg
        aria-labelledby={`prerequisite-${slug}-title prerequisite-${slug}-description`}
        className="prerequisite-plate-svg"
        role="img"
        viewBox="0 0 760 380"
      >
        <title id={`prerequisite-${slug}-title`}>{copy.title}</title>
        <desc id={`prerequisite-${slug}-description`}>{copy.description}</desc>
        <Drawing slug={slug} />
      </svg>
      <figcaption>{copy.caption}</figcaption>
    </figure>
  );
}
