function FlatTurnDrawing() {
  return (
    <svg
      aria-label="A rectangular polygon whose top edge has been unnecessarily split at a middle point"
      role="img"
      viewBox="0 0 330 245"
    >
      <text className="strict-polygon-kicker" x="20" y="26">
        A FLAT TURN
      </text>
      <path
        className="strict-polygon-shape"
        d="M48 202 L48 69 L282 69 L282 202 Z"
      />
      <path
        className="strict-polygon-edge"
        d="M48 69 L165 69 M165 69 L282 69"
      />
      <circle className="strict-polygon-vertex" cx="48" cy="69" r="5" />
      <circle className="strict-polygon-false-vertex" cx="165" cy="69" r="6" />
      <circle className="strict-polygon-vertex" cx="282" cy="69" r="5" />
      <text className="strict-polygon-label" x="38" y="55">
        a
      </text>
      <text className="strict-polygon-label strict-polygon-accent" x="158" y="54">
        m
      </text>
      <text className="strict-polygon-label" x="278" y="55">
        b
      </text>
      <text className="strict-polygon-small" x="99" y="91" textAnchor="middle">
        e₁
      </text>
      <text className="strict-polygon-small" x="226" y="91" textAnchor="middle">
        e₂
      </text>
      <line className="strict-polygon-guide" x1="48" x2="282" y1="222" y2="222" />
      <line className="strict-polygon-guide" x1="48" x2="48" y1="216" y2="228" />
      <line className="strict-polygon-guide" x1="282" x2="282" y1="216" y2="228" />
      <text className="strict-polygon-note" x="165" y="240" textAnchor="middle">
        [a,b] is the one maximal side
      </text>
    </svg>
  );
}

function ExtremePointDrawing() {
  return (
    <svg
      aria-label="A polygon with an extreme point at which two noncollinear adjacent sides meet"
      role="img"
      viewBox="0 0 330 245"
    >
      <text className="strict-polygon-kicker" x="20" y="26">
        AN EXTREME POINT
      </text>
      <path
        className="strict-polygon-shape"
        d="M47 204 L47 174 L165 55 L283 174 L283 204 Z"
      />
      <path
        className="strict-polygon-edge"
        d="M47 174 L165 55 L283 174"
      />
      <circle className="strict-polygon-vertex" cx="165" cy="55" r="6" />
      <text className="strict-polygon-label strict-polygon-accent" x="174" y="49">
        v
      </text>
      <text
        className="strict-polygon-small"
        x="100"
        y="111"
        textAnchor="middle"
        transform="rotate(-45 100 111)"
      >
        e₁
      </text>
      <text
        className="strict-polygon-small"
        x="230"
        y="111"
        textAnchor="middle"
        transform="rotate(45 230 111)"
      >
        e₂
      </text>
      <path
        className="strict-polygon-angle"
        d="M144 76 Q165 88 186 76"
      />
      <text className="strict-polygon-note" x="165" y="232" textAnchor="middle">
        the boundary changes direction at v
      </text>
    </svg>
  );
}

function EdgeContactDrawing() {
  return (
    <svg
      aria-label="A supporting line that follows a polygon side and therefore contacts an entire edge"
      role="img"
      viewBox="0 0 330 270"
    >
      <text className="strict-polygon-kicker" x="20" y="26">
        EXPOSES A WHOLE SIDE
      </text>
      <path
        className="strict-polygon-shape"
        d="M78 218 L165 58 L284 218 Z"
      />
      <line
        className="strict-polygon-support-line"
        x1="41"
        x2="187"
        y1="244"
        y2="2"
      />
      <path
        className="strict-polygon-contact-edge"
        d="M78 218 L165 58"
      />
      <circle className="strict-polygon-vertex" cx="165" cy="58" r="5" />
      <text className="strict-polygon-label" x="175" y="53">
        v
      </text>
      <text className="strict-polygon-small strict-polygon-accent" x="58" y="124">
        contact face
      </text>
      <text className="strict-polygon-note" x="165" y="257" textAnchor="middle">
        the whole highlighted side is touched
      </text>
    </svg>
  );
}

function VertexContactDrawing() {
  return (
    <svg
      aria-label="A supporting line exposing one vertex, together with an interior covector represented as a normal arrow after choosing an inner product"
      role="img"
      viewBox="0 0 330 270"
    >
      <text className="strict-polygon-kicker" x="20" y="26">
        EXPOSES ONE VERTEX
      </text>
      <path
        className="strict-polygon-normal-cone"
        d="M165 76 L97 7 L233 7 Z"
      />
      <path
        className="strict-polygon-normal-boundary"
        d="M165 76 L105 16 M165 76 L225 16"
      />
      <line
        className="strict-polygon-normal"
        x1="165"
        x2="165"
        y1="76"
        y2="22"
      />
      <path
        className="strict-polygon-normal-head"
        d="M165 16 L159 27 L171 27 Z"
      />
      <text className="strict-polygon-small strict-polygon-accent" x="177" y="34">
        ℓ ↔ n
      </text>
      <text className="strict-polygon-small" x="238" y="22">
        Nₚ(v) ⊂ V*
      </text>
      <line
        className="strict-polygon-support-line"
        x1="30"
        x2="300"
        y1="76"
        y2="76"
      />
      <path
        className="strict-polygon-shape"
        d="M58 232 L165 76 L272 232 Z"
      />
      <circle className="strict-polygon-contact-point" cx="165" cy="76" r="7" />
      <text className="strict-polygon-label" x="176" y="98">
        v
      </text>
      <text className="strict-polygon-note" x="165" y="257" textAnchor="middle">
        the line touches P only at v
      </text>
    </svg>
  );
}

export function StrictPolygonExplainer() {
  return (
    <details className="strict-polygon-explainer">
      <summary>
        <span>Definitions and figures</span>
        What do “complete vertex list,” “maximal side,” and “vertex-exposing
        supporting line” mean?
      </summary>

      <div className="strict-polygon-explainer-body">
        <section>
          <p className="section-label">1 · Extreme points only</p>
          <h6>Adjacent and collinear sides</h6>
          <p>
            Two sides are <strong>adjacent</strong> when they occur one after
            the other along the polygon boundary and share an endpoint. They
            are <strong>collinear</strong> when both lie on the same straight
            line. Thus, if <i>m</i> lies between <i>a</i> and <i>b</i>, the
            adjacent segments [<i>a</i>,<i>m</i>] and [
            <i>m</i>,<i>b</i>] are collinear: the boundary does not turn at{" "}
            <i>m</i>, so <i>m</i> is not an extreme point.
          </p>
          <p>
            A <strong>maximal boundary segment</strong> is a straight segment
            contained in the boundary that cannot be extended at either end
            while remaining a straight boundary segment. In the left-hand
            picture below, [<i>a</i>,<i>b</i>] is maximal; neither of its two
            shorter pieces is. At an extreme point of the polygon, by
            contrast, the boundary changes direction.
          </p>
          <p>
            Throughout the reader guide, a polygon has nonempty interior and
            is displayed by its <strong>complete cyclic vertex list</strong>:
            the list contains every extreme point exactly once and no other
            points. Thus it has no repeated vertices or points inserted along
            a side. Definition 1.2 records this standing convention, and the
            reader guide thereafter simply says “polygon.”
          </p>

          <figure className="strict-polygon-figure">
            <div className="strict-polygon-plate-grid">
              <FlatTurnDrawing />
              <ExtremePointDrawing />
            </div>
            <figcaption>
              <span>Figure I.3.</span> A point inserted halfway along a
              straight edge merely subdivides one side (left). An extreme
              point is where two adjacent sides have different supporting
              lines and the boundary turns (right).
            </figcaption>
          </figure>
        </section>

        <section>
          <p className="section-label">2 · How a line can touch a corner</p>
          <h6>Normal cones and vertex-exposing supporting lines</h6>
          <p>
            A <strong>supporting line</strong> through a vertex <i>v</i>{" "}
            leaves the entire polygon in one of its two closed half-planes.
            Its <strong>contact face</strong> is simply the set of polygon
            points lying on that line. The contact face can be a whole side,
            or it can be the single point {"{"}<i>v</i>{"}"}.
          </p>
          <p>
            The intrinsic <strong>normal cone</strong> at <i>v</i> lives in
            the dual plane <i>V</i>
            <sup>*</sup>:
          </p>
          <p className="strict-polygon-equation">
            <i>N</i>
            <sub>P</sub>(<i>v</i>) = {"{"}
            <i>ℓ</i> ∈ <i>V</i>
            <sup>*</sup> : <i>ℓ</i>(<i>x</i>−<i>v</i>) ≤ 0 for every{" "}
            <i>x</i> ∈ <i>P</i>
            {"}"}.
          </p>
          <p>
            Thus its elements are linear functionals, or covectors—not
            intrinsically vectors with a dot product. If we choose an
            auxiliary inner product, every covector <i>ℓ</i> can be
            represented by a normal arrow <i>n</i>; the wedge of arrows in
            the drawing is this convenient representation of the dual cone.
            At an extreme point the normal cone is two-dimensional and has
            nonempty interior. At a point inserted in the interior of a side,
            the normal cone is only one ray.
          </p>
          <p>
            A <strong>nonzero covector</strong> on the boundary of the cone
            exposes an entire incident side. A covector in the interior
            produces a supporting line whose contact face is exactly {"{"}
            <i>v</i>
            {"}"}. We therefore say that the line <strong>exposes the vertex{" "}
            <i>v</i></strong>, or that it is a vertex-exposing supporting line.
          </p>
          <p>
            Both lines pictured below pass through the vertex <i>v</i>. The
            left one exposes an entire incident side; the right one exposes
            only <i>v</i>, because its contact face is the singleton {"{"}<i>v</i>{"}"}.
          </p>

          <figure className="strict-polygon-figure">
            <div className="strict-polygon-plate-grid">
              <EdgeContactDrawing />
              <VertexContactDrawing />
            </div>
            <figcaption>
              <span>Figure I.4.</span> Two supporting lines through the same
              vertex <i>v</i>. A nonzero boundary covector exposes a complete
              side (left). An interior covector <i>ℓ</i> exposes only <i>v</i>{" "}
              (right), so its contact face is the singleton {"{"}<i>v</i>{"}"}.
              The arrow <i>n</i> represents <i>ℓ</i> only after an auxiliary
              inner product has been chosen.
            </figcaption>
          </figure>
        </section>

        <aside className="strict-polygon-conclusion">
          <strong>What the manuscript sentence is saying.</strong>
          Once the displayed vertex list contains exactly the extreme points,
          there are no flat turns. Consequently every displayed side is
          already the longest straight piece of boundary in that direction,
          and the normal cone at every vertex has an open set of covectors
          that expose that vertex alone.
        </aside>
      </div>
    </details>
  );
}
