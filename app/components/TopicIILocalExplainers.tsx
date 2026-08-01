export function FiniteOpennessExplainer() {
  return (
    <details
      className="topic-ii-local-explainer proof-guided-layer"
      data-guided-layer
      suppressHydrationWarning
    >
      <summary>
        <span>Why the common interval exists</span>
        The finite-continuity argument, without shorthand
      </summary>
      <div className="topic-ii-local-explainer-body">
        <p>
          Suppose <i>f</i>
          <sub>1</sub>, …, <i>f</i>
          <sub>r</sub> are continuous real functions and every{" "}
          <i>f</i>
          <sub>j</sub>(0) is positive. For each <i>j</i>, continuity at 0
          supplies an open interval <i>I</i>
          <sub>j</sub> on which{" "}
          <i>f</i>
          <sub>j</sub>(<i>τ</i>) remains positive. Because there are only
          finitely many functions,{" "}
          <i>I</i> = <i>I</i>
          <sub>1</sub> ∩ ··· ∩ <i>I</i>
          <sub>r</sub> is still an open interval containing 0.
        </p>
        <p>
          Lemma 2.8 applies this elementary fact three times: to the
          triple determinants certifying strict convexity, to the
          inequalities 0 &lt; <i>α</i>
          <sub>a</sub>(<i>τ</i>) &lt; 1 certifying open-side membership,
          and to the prescribed side determinants. The sets{" "}
          <i>𝒜</i>, <i>ℬ</i>, and the cyclic vertex set are finite, so one
          final intersection works for every requirement simultaneously.
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
      suppressHydrationWarning
    >
      <summary>
        <span>The geometric dictionary</span>
        Why adjacent normals determine one support value
      </summary>
      <div className="topic-ii-local-explainer-body">
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
      suppressHydrationWarning
    >
      <summary>
        <span>Three compressed implications</span>
        Boundedness, contact, and complementarity unpacked
      </summary>
      <div className="topic-ii-local-explainer-body">
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
