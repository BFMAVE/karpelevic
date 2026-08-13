import { TopicIIConceptFigure } from "./TopicIIConceptFigure";

export function FiniteOpennessExplainer() {
  return (
    <details
      className="topic-ii-local-explainer proof-guided-layer"
      data-guided-layer
      data-conceptual-layer
      suppressHydrationWarning
    >
      <summary>
        <span>Why the common interval exists</span>
        The finite-continuity argument, without shorthand
      </summary>
      <div className="topic-ii-local-explainer-body">
        <section>
          <h4>Output 1 — strict convex-position persistence</h4>
          <p>
            Lemma 2.7 describes strict convex position by finitely many
            positive triple determinants. Each determinant depends
            continuously on <i>τ</i>, so every one that is positive at 0
            remains positive on some interval about 0. Their common
            interval preserves the displayed cyclic polygon.
          </p>
        </section>
        <section>
          <h4>Output 2 — open-side persistence</h4>
          <p>
            For each index <i>a</i> in the finite set <i>𝒜</i>, the relevant
            moving point has an affine coordinate <i>α</i>
            <sub>a</sub>(<i>τ</i>) on its moving side. The two strict
            inequalities 0 &lt; <i>α</i>
            <sub>a</sub>(<i>τ</i>) &lt; 1 say exactly that the point remains in
            the relative interior of that side.
          </p>
        </section>
        <section>
          <h4>Output 3 — strict-side persistence</h4>
          <p>
            For every prescribed side test in the finite set <i>ℬ</i>, a
            determinant records on which open side of the supporting line
            the test point lies. Its sign is strict at <i>τ</i>=0 and hence
            persists on a sufficiently small interval.
          </p>
        </section>
        <p>
          In all three outputs the same elementary principle is used. If
          finitely many continuous real functions <i>f</i>
          <sub>1</sub>, …, <i>f</i>
          <sub>r</sub> are positive at 0, continuity gives an interval for
          each inequality, and the finite intersection of those intervals
          is still an open interval containing 0. Intersecting once more
          across the three finite families gives the single interval
          asserted by Lemma 2.8.
        </p>
      </div>
    </details>
  );
}

export function NormalFanExplainer() {
  return (
    <details
      className="topic-ii-local-explainer proof-guided-layer"
      data-guided-layer
      data-conceptual-layer
      suppressHydrationWarning
    >
      <summary>
        <span>The geometric dictionary</span>
        Why adjacent normals determine one support value
      </summary>
      <div className="topic-ii-local-explainer-body">
        <TopicIIConceptFigure kind="normal-fan" />
        <p>
          Let the side inequalities meeting at a vertex <i>v</i> be{" "}
          ⟨<i>u</i>
          <sub>j</sub>, <i>z</i>⟩ ≤ <i>h</i>
          <sub>j</sub> and ⟨<i>u</i>
          <sub>j+1</sub>, <i>z</i>⟩ ≤ <i>h</i>
          <sub>j+1</sub>. If{" "}
          <i>q</i> = <i>a</i>
          <i>u</i>
          <sub>j</sub> + <i>b</i>
          <i>u</i>
          <sub>j+1</sub> with <i>a</i>, <i>b</i> ≥ 0, then every{" "}
          <i>z</i> in the polygon satisfies
        </p>
        <p className="topic-ii-local-display">
          ⟨<i>q</i>, <i>z</i>⟩ ≤ <i>a h</i>
          <sub>j</sub> + <i>b h</i>
          <sub>j+1</sub>.
        </p>
        <p>
          At their common vertex <i>v</i>, both side inequalities are
          equalities, so the displayed upper bound is attained. It is
          therefore exactly <i>h</i>
          <sub>P</sub>(<i>q</i>). Adjacent normal rays are linearly
          independent, so <i>a</i> and <i>b</i> are unique. If{" "}
          <i>q</i> itself lies on a fan ray, the coefficient on the other
          ray is 0; choosing either neighbouring cone gives the same
          coefficient vector. This is the boundary case mentioned in the
          manuscript.
        </p>
        <p>
          This support-function dictionary is standard convex geometry;
          see Schneider, <cite>Convex Bodies</cite>, Chapter 1, §§1.3 and
          1.7, and Chapter 2, §§2.1 and 2.4. Proposition 3.1 proves the
          particular transfer formula used here.
        </p>
      </div>
    </details>
  );
}

export function SaturationGapExplainer() {
  return (
    <details
      className="topic-ii-local-explainer proof-guided-layer"
      data-guided-layer
      data-conceptual-layer
      suppressHydrationWarning
    >
      <summary>
        <span>Three compressed implications</span>
        Boundedness, contact, and complementarity unpacked
      </summary>
      <div className="topic-ii-local-explainer-body">
        <TopicIIConceptFigure kind="polar-saturation" />
        <section>
          <h4>Why positive spanning makes the retained polygon bounded</h4>
          <p>
            For{" "}
            <i>R</i>
            <sub>S</sub> = ∩
            <sub>i∈S</sub>
            {"{"}<i>z</i> : ⟨<i>u</i>
            <sub>i</sub>,<i>z</i>⟩ ≤ <i>h</i>
            <sub>i</sub>{"}"}, an escape direction <i>d</i> would have to
            satisfy ⟨<i>u</i>
            <sub>i</sub>,<i>d</i>⟩ ≤ 0 for every <i>i</i>∈<i>S</i>. If the{" "}
            <i>u</i>
            <sub>i</sub> positively span ℝ², then <i>d</i> itself is a
            nonnegative combination of them. Pairing that combination with{" "}
            <i>d</i> gives |<i>d</i>|² ≤ 0, so <i>d</i>=0. A finite
            half-plane intersection with no nonzero escape direction is
            bounded.
          </p>
        </section>
        <section>
          <h4>Why complementarity removes every support slack</h4>
          <p>
            Put <i>q</i>=<i>h</i>−<i>ρBh</i>. Both <i>w</i> and{" "}
            <i>q</i> are coordinatewise nonnegative, while the eigenvector
            calculation gives Σ
            <sub>i</sub>
            <i>w</i>
            <sub>i</sub>
            <i>q</i>
            <sub>i</sub>=0. Every summand is nonnegative, hence every
            summand is 0. After the theorem proves <i>w</i>
            <sub>i</sub>&gt;0 for all <i>i</i>, it follows that every{" "}
            <i>q</i>
            <sub>i</sub>=0.
          </p>
        </section>
        <section>
          <h4>Why equality of support values is actual side contact</h4>
          <p>
            The equality <i>h</i>
            <sub>TR</sub>(<i>u</i>
            <sub>i</sub>)=<i>h</i>
            <sub>R</sub>(<i>u</i>
            <sub>i</sub>) says that the continuous functional{" "}
            ⟨<i>u</i>
            <sub>i</sub>,·⟩ has the same maximum on the compact sets{" "}
            <i>TR</i> and <i>R</i>. It attains that maximum at some point
            of <i>TR</i>, and every point of <i>R</i> attaining it lies on
            side <i>i</i>. Hence that side meets <i>TR</i>.
          </p>
        </section>
      </div>
    </details>
  );
}
