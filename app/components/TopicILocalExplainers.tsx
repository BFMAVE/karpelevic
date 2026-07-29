import { sitePath } from "../lib/site-path";

function ExposedFacePlate() {
  return (
    <svg
      aria-label="A linear functional increasing upward, with its maximal level line touching the top side of a polygon"
      role="img"
      viewBox="0 0 680 320"
    >
      <text className="strict-polygon-kicker" x="28" y="32">
        A FUNCTIONAL EXPOSES ITS MAXIMISING FACE
      </text>

      <path
        className="strict-polygon-shape"
        d="M164 264 L108 194 L216 84 L468 84 L572 190 L510 264 Z"
      />
      <line
        className="exposed-face-level"
        x1="68"
        x2="612"
        y1="84"
        y2="84"
      />
      <line
        className="exposed-face-lower-level"
        x1="108"
        x2="572"
        y1="154"
        y2="154"
      />
      <path
        className="strict-polygon-contact-edge"
        d="M216 84 L468 84"
      />

      <line
        className="strict-polygon-normal"
        x1="340"
        x2="340"
        y1="84"
        y2="42"
      />
      <path
        className="strict-polygon-normal-head"
        d="M340 35 L333 48 L347 48 Z"
      />

      <text className="strict-polygon-label strict-polygon-accent" x="350" y="49">
        u
      </text>
      <text className="strict-polygon-small strict-polygon-accent" x="77" y="70">
        ℓ(x) = c
      </text>
      <text className="strict-polygon-small" x="118" y="144">
        ℓ(x) &lt; c
      </text>
      <text className="strict-polygon-label strict-polygon-accent" x="328" y="108">
        F
      </text>
      <text className="strict-polygon-label" x="334" y="223">
        P
      </text>
      <text className="strict-polygon-note" x="340" y="300" textAnchor="middle">
        F is exactly the part of P on the highest level line of ℓ
      </text>
    </svg>
  );
}

export function ExposedFaceExplainer() {
  return (
    <details
      className="topic-i-local-explainer"
      id="functional-exposes-face"
    >
      <summary>
        <span>Local geometric vocabulary</span>
        What does it mean for a functional to expose a face?
      </summary>

      <div className="topic-i-local-explainer-body">
        <p>
          A nonzero real-linear functional <i>ℓ</i> assigns a real number{" "}
          <i>ℓ</i>(<i>x</i>) to every point <i>x</i>. Its level sets are
          parallel straight lines. Moving those lines in the direction in
          which <i>ℓ</i> increases eventually reaches the last line that still
          meets the compact polygon <i>P</i>.
        </p>
        <p>
          Write{" "}
          <span className="topic-i-inline-math">
            <i>c</i> = max {"{"}<i>ℓ</i>(<i>x</i>) : <i>x</i> ∈ <i>P</i>
            {"}"}
          </span>
          . Then <i>P</i> lies in the half-plane{" "}
          <span className="topic-i-inline-math">
            <i>ℓ</i>(<i>x</i>) ≤ <i>c</i>
          </span>
          , while the final level line is{" "}
          <span className="topic-i-inline-math">
            <i>ℓ</i>(<i>x</i>) = <i>c</i>
          </span>
          . The set
        </p>
        <p className="topic-i-local-display">
          <i>F</i> = {"{"}<i>x</i> ∈ <i>P</i> : <i>ℓ</i>(<i>x</i>) ={" "}
          <i>c</i>{"}"}
        </p>
        <p>
          is the <strong>face exposed by <i>ℓ</i></strong>. It consists of
          every point where <i>ℓ</i> attains its maximum—not merely one
          arbitrarily chosen contact point. It may be a whole side, as below,
          or a single vertex. In the single-vertex case, the corresponding
          supporting line is strict.
        </p>

        <figure className="topic-i-local-figure">
          <ExposedFacePlate />
          <figcaption>
            <span>Figure I.5.</span> The arrow gives the direction of
            increasing <i>ℓ</i>. The top level line is supporting, and its
            entire intersection with <i>P</i> is the exposed face <i>F</i>.
          </figcaption>
        </figure>
      </div>
    </details>
  );
}

export function AffineContactExplainer() {
  return (
    <details
      className="topic-i-local-explainer"
      id="affine-contact-identities-explained"
    >
      <summary>
        <span>The displayed identities, unpacked</span>
        What does “affine contact conjugacy” mean here?
      </summary>

      <div className="topic-i-local-explainer-body">
        <p>
          The coordinate change <i>A</i> sends the polygon <i>P</i> to{" "}
          <i>AP</i>. It therefore sends each side <i>e</i> of <i>P</i> to the
          corresponding side <i>Ae</i> of <i>AP</i>. The notation{" "}
          <i>A</i>
          <sub>ℰ</sub> names precisely this side-by-side relabelling:
        </p>

        <div
          className="topic-i-affine-contact-map"
          aria-label="The side data before and after the coordinate change"
        >
          <div className="topic-i-affine-contact-heading">
            <span>On P</span>
            <span aria-hidden="true">Aℰ →</span>
            <span>On AP</span>
          </div>
          <div>
            <span>strict contact side <i>e</i> ∈ <i>I</i></span>
            <span aria-hidden="true">→</span>
            <span>strict contact side <i>Ae</i> in the target set</span>
          </div>
          <div>
            <span>next side <i>s</i>(<i>e</i>)</span>
            <span aria-hidden="true">→</span>
            <span>next side after <i>Ae</i></span>
          </div>
          <div>
            <span>contact rotation <i>σ</i>(<i>e</i>)</span>
            <span aria-hidden="true">→</span>
            <span>contact rotation of <i>Ae</i></span>
          </div>
        </div>

        <p>
          The three identities say that these target objects are exactly the
          transported versions of the original ones. Equivalently: rename
          each side by applying <i>A</i>, perform the successor or contact
          operation, and you obtain the same answer as performing the
          operation first and then applying <i>A</i>.
        </p>
        <p>
          “Conjugacy” therefore means <strong>the same combinatorial rule after
          a change of labels</strong>. It does not mean that <i>P</i> and{" "}
          <i>AP</i> are literally the same polygon.
        </p>
        <a
          className="topic-i-local-return"
          href={sitePath("/proof/#eq:affine-contact-conjugacy")}
        >
          Return to equation (2.3) ↑
        </a>
      </div>
    </details>
  );
}
