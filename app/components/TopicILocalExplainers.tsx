import { sitePath } from "../lib/site-path";

export function AdjointExplainer() {
  return (
    <details className="topic-i-local-explainer" id="adjoint-explained">
      <summary>
        <span>Linear-algebra notation</span>
        What is the adjoint in the adapted inner product?
      </summary>
      <div className="topic-i-local-explainer-body">
        <p>
          Once an inner product ⟨·,·⟩ has been chosen, the{" "}
          <strong>adjoint</strong> of a real-linear map <i>A</i> is the
          unique linear map <i>A</i>
          <sup>*</sup> satisfying
        </p>
        <p className="topic-i-local-display">
          ⟨<i>Ax</i>,<i>y</i>⟩ = ⟨<i>x</i>,<i>A</i>
          <sup>*</sup>
          <i>y</i>⟩
          &nbsp; for every <i>x</i>,<i>y</i>.
        </p>
        <p>
          In an orthonormal basis, <i>A</i>
          <sup>*</sup> is represented by the transpose matrix. The word
          “orthonormal” matters: after a non-orthogonal change of coordinates,
          simply transposing the displayed matrix need not represent the
          adjoint for the original inner product.
        </p>
        <p>
          Proposition 2.1 constructs an inner product for which{" "}
          <i>J</i>
          <sub>+</sub> is an isometry, meaning that it preserves the inner
          product and therefore lengths and angles. Because <i>J</i>
          <sub>+</sub>
          <sup>2</sup>=−<i>I</i>, its inverse is −<i>J</i>
          <sub>+</sub>. An isometry satisfies{" "}
          <i>J</i>
          <sub>+</sub>
          <sup>*</sup>=<i>J</i>
          <sub>+</sub>
          <sup>−1</sup>, so here{" "}
          <i>J</i>
          <sub>+</sub>
          <sup>*</sup>=−<i>J</i>
          <sub>+</sub>. This is the identity used to compute <i>T</i>
          <sup>*</sup>.
        </p>
      </div>
    </details>
  );
}

export function HomeomorphismExplainer() {
  return (
    <details className="topic-i-local-explainer" id="homeomorphism-explained">
      <summary>
        <span>Topological vocabulary</span>
        What does “homeomorphism” contribute here?
      </summary>
      <div className="topic-i-local-explainer-body">
        <p>
          A <strong>homeomorphism</strong> is a continuous bijection whose
          inverse is also continuous. It preserves topological features such
          as open and closed sets, interior, boundary, and connectedness,
          although it need not preserve lengths or angles.
        </p>
        <p>
          Every invertible real-linear map <i>A</i> on a finite-dimensional
          plane is a homeomorphism: both <i>A</i> and its linear inverse{" "}
          <i>A</i>
          <sup>−1</sup> are continuous. The proof of Proposition 2.3 uses
          more than topology as well—linearity preserves convex
          combinations and line segments. The homeomorphism property
          preserves ambient interiors and boundaries; applying the same
          argument to the restriction of <i>A</i> between the relevant
          affine hulls preserves relative interiors.
        </p>
      </div>
    </details>
  );
}

export function HausdorffConvergenceExplainer() {
  return (
    <details
      className="topic-i-local-explainer"
      id="hausdorff-convergence-explained"
    >
      <summary>
        <span>Convergence of moving polygons</span>
        What exactly is Hausdorff convergence?
      </summary>
      <div className="topic-i-local-explainer-body">
        <p>
          For a point <i>x</i> and a nonempty compact set <i>L</i>, write{" "}
          dist(<i>x</i>,<i>L</i>) for the smallest distance from <i>x</i> to
          a point of <i>L</i>. The <strong>Hausdorff distance</strong> between
          two nonempty compact sets <i>K</i> and <i>L</i> is
        </p>
        <p className="topic-i-local-display topic-i-local-display-stacked">
          <span>
            <i>d</i>
            <sub>H</sub>(<i>K</i>,<i>L</i>) =
          </span>
          <span>
            max{"{"} sup
            <sub>x∈K</sub> dist(<i>x</i>,<i>L</i>), sup
            <sub>y∈L</sub> dist(<i>y</i>,<i>K</i>) {"}"}.
          </span>
        </p>
        <p>
          Thus <i>d</i>
          <sub>H</sub>(<i>K</i>,<i>L</i>)≤<i>ε</i> means two things at once:
          every point of <i>K</i> lies within <i>ε</i> of <i>L</i>, and every
          point of <i>L</i> lies within <i>ε</i> of <i>K</i>. A family{" "}
          <i>P</i>
          <sub>τ</sub> converges to <i>P</i>
          <sub>0</sub> in the Hausdorff sense when{" "}
          <i>d</i>
          <sub>H</sub>(<i>P</i>
          <sub>τ</sub>,<i>P</i>
          <sub>0</sub>)→0 as <i>τ</i>→0.
        </p>
        <div className="topic-i-local-example-grid">
          <article>
            <h4>A moving polygon</h4>
            <p>
              If corresponding vertices of two polygons are all within{" "}
              <i>ε</i>, then corresponding convex combinations are within{" "}
              <i>ε</i>. Hence moving every vertex continuously makes the
              polygon move continuously in Hausdorff distance.
            </p>
          </article>
          <article>
            <h4>Why conjugation preserves it</h4>
            <p>
              Complex conjugation <i>C</i> is an isometry:
              |<i>Cx</i>−<i>Cy</i>|=|<i>x</i>−<i>y</i>|. It therefore
              preserves every point-to-set distance and gives the exact
              equality{" "}
              <i>d</i>
              <sub>H</sub>(<i>C</i>(<i>K</i>),<i>C</i>(<i>L</i>))=
              <i>d</i>
              <sub>H</sub>(<i>K</i>,<i>L</i>). This proves the preservation
              claim in Lemma 2.4.
            </p>
          </article>
        </div>
        <p className="topic-i-local-source-note">
          Standard reference: R. Schneider,{" "}
          <cite>Convex Bodies: The Brunn–Minkowski Theory</cite>, 2nd ed.,
          §1.8, on the Hausdorff metric for convex bodies.
        </p>
      </div>
    </details>
  );
}

export function DenseRotationOrbitExplainer() {
  return (
    <details className="topic-i-local-explainer" id="dense-rotation-explained">
      <summary>
        <span>The orbit used in Lemma 2.5</span>
        What does “dense in the unit circle” mean, and why is it true?
      </summary>
      <div className="topic-i-local-explainer-body">
        <p>
          A subset of the unit circle is <strong>dense</strong> when every
          nonempty open arc contains one of its points. For the rotation{" "}
          <i>R</i>
          <sub>θ</sub>(<i>z</i>)=<i>e</i>
          <sup>iθ</sup>
          <i>z</i>, the orbit of a nonzero point is{" "}
          {"{"}<i>e</i>
          <sup>ikθ</sup>
          <i>z</i>:<i>k</i>≥0{"}"}. It is finite exactly when{" "}
          <i>θ</i>/(2<i>π</i>) is rational.
        </p>
        <p>
          Here is a short reason for the infinite-order case. Consider all
          integer powers and take their closure <i>H</i>. It is a{" "}
          <strong>closed subgroup</strong>: it contains 1, is closed under
          multiplication and inverses, and contains the limits of its
          convergent sequences. Since the powers are infinite and the circle
          is compact, quotients of two sufficiently close powers give
          nonidentity elements of <i>H</i> with arbitrarily small positive
          angle.
        </p>
        <p>
          Fix any angular tolerance <i>ε</i> and choose such an element with
          angle 0&lt;<i>δ</i>&lt;<i>ε</i>. Its successive powers have angles
          0,<i>δ</i>,2<i>δ</i>,… and come within <i>δ</i> of every angle
          before completing the circle. Thus <i>H</i> comes within{" "}
          <i>ε</i> of every point for every <i>ε</i>&gt;0. Since <i>H</i> is
          closed, <i>H</i> is the entire circle. Finally, the closure of the
          nonnegative powers is the same: compactness gives positive powers
          approaching 1, and multiplying those powers by any fixed negative
          power approximates that negative power using nonnegative exponents.
          Hence the forward orbit used in the lemma is dense.
        </p>
        <p>
          In Lemma 2.5, the set where the supporting functional{" "}
          <i>ℓ</i> is negative is an open semicircle. Density guarantees that
          some rotated iterate enters it, contradicting the inequality{" "}
          <i>ℓ</i>(<i>e</i>
          <sup>ikθ</sup>
          <i>z</i>)≥0.
        </p>
      </div>
    </details>
  );
}

export function DegreeOneExplainer() {
  return (
    <details className="topic-i-local-explainer" id="degree-one-explained">
      <summary>
        <span>The topological step in Lemma 2.6</span>
        What does degree +1 mean here?
      </summary>
      <div className="topic-i-local-explainer-body">
        <p>
          A continuous map from one circle to another has an integer{" "}
          <strong>degree</strong>, its signed number of turns. If a circular
          parameter <i>t</i> is lifted from angles modulo 2<i>π</i> to real
          angles, the target angle can be lifted to a continuous function{" "}
          <i>F</i> satisfying
        </p>
        <p className="topic-i-local-display">
          <i>F</i>(<i>t</i>+2<i>π</i>) =
          <i>F</i>(<i>t</i>)+2<i>πd</i>.
        </p>
        <p>
          The integer <i>d</i> is the degree. Degree +1 means that one positive
          circuit of the source produces exactly one counterclockwise circuit
          of the target; degree −1 would reverse the orientation.
        </p>
        <p>
          For the radial map{" "}
          <i>π</i>
          <sub>o</sub>(<i>z</i>)=(<i>z</i>−<i>o</i>)/|<i>z</i>−<i>o</i>|,
          every ray from the interior point <i>o</i> meets the boundary of a
          compact convex set exactly once. The map is therefore a
          homeomorphism. Traversing the positively oriented boundary keeps
          the interior on the left and turns the ray once counterclockwise,
          so its degree is +1 and it preserves cyclic order.
        </p>
      </div>
    </details>
  );
}

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
          arbitrarily chosen point of intersection. It may be a whole side,
          as below, or a single vertex. In the single-vertex case, the
          corresponding supporting line exposes that vertex.
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
        <span>Equation (2.3), unpacked</span>
        How does a coordinate change transport the side data?
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
            <span>
              side <i>e</i> ∈ <i>I</i>, with its assigned image point in the
              relative interior
            </span>
            <span aria-hidden="true">→</span>
            <span>side <i>Ae</i> in the corresponding target set</span>
          </div>
          <div>
            <span>next side <i>succ</i>(<i>e</i>)</span>
            <span aria-hidden="true">→</span>
            <span>next side after <i>Ae</i></span>
          </div>
          <div>
            <span>cyclic shift <i>σ</i>(<i>e</i>)</span>
            <span aria-hidden="true">→</span>
            <span>corresponding cyclic shift of <i>Ae</i></span>
          </div>
        </div>

        <p>
          The three identities say that these target objects are exactly the
          transported versions of the original ones. Equivalently: rename
          each side by applying <i>A</i>, then take the next side or apply the
          cyclic shift. The result is the same as applying the operation first
          and then renaming the resulting side by <i>A</i>.
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
