function CandidateEquation() {
  return (
    <math
      aria-label="T tilde equals A T A inverse, and P tilde equals A P"
      display="block"
    >
      <mrow>
        <mover>
          <mi>T</mi>
          <mo accent="true" stretchy="true">∼</mo>
        </mover>
        <mo>=</mo>
        <mi>A</mi>
        <mi>T</mi>
        <msup>
          <mi>A</mi>
          <mrow>
            <mo>−</mo>
            <mn>1</mn>
          </mrow>
        </msup>
        <mo>,</mo>
        <mspace width="2em" />
        <mover>
          <mi>P</mi>
          <mo accent="true" stretchy="true">∼</mo>
        </mover>
        <mo>=</mo>
        <mi>A</mi>
        <mi>P</mi>
        <mo>.</mo>
      </mrow>
    </math>
  );
}

function ExtremePointEquation() {
  return (
    <math
      aria-label="The extreme points of A P are A applied to the extreme points of P"
      display="block"
    >
      <mrow>
        <mi mathvariant="normal">Ext</mi>
        <mo>(</mo>
        <mi>A</mi>
        <mi>P</mi>
        <mo>)</mo>
        <mo>=</mo>
        <mi>A</mi>
        <mo>(</mo>
        <mi mathvariant="normal">Ext</mi>
        <mo>(</mo>
        <mi>P</mi>
        <mo>)</mo>
        <mo>)</mo>
        <mo>.</mo>
      </mrow>
    </math>
  );
}

function InvarianceEquation() {
  return (
    <math
      aria-label="T P is contained in P if and only if T tilde P tilde is contained in P tilde"
      display="block"
    >
      <mrow>
        <mi>T</mi>
        <mi>P</mi>
        <mo>⊆</mo>
        <mi>P</mi>
        <mspace width="1.2em" />
        <mo>⟺</mo>
        <mspace width="1.2em" />
        <mover>
          <mi>T</mi>
          <mo accent="true" stretchy="true">∼</mo>
        </mover>
        <mover>
          <mi>P</mi>
          <mo accent="true" stretchy="true">∼</mo>
        </mover>
        <mo>=</mo>
        <mo>(</mo>
        <mi>A</mi>
        <mi>T</mi>
        <msup>
          <mi>A</mi>
          <mrow>
            <mo>−</mo>
            <mn>1</mn>
          </mrow>
        </msup>
        <mo>)</mo>
        <mo>(</mo>
        <mi>A</mi>
        <mi>P</mi>
        <mo>)</mo>
        <mo>=</mo>
        <mi>A</mi>
        <mo>(</mo>
        <mi>T</mi>
        <mi>P</mi>
        <mo>)</mo>
        <mo>⊆</mo>
        <mi>A</mi>
        <mi>P</mi>
        <mo>=</mo>
        <mover>
          <mi>P</mi>
          <mo accent="true" stretchy="true">∼</mo>
        </mover>
        <mo>.</mo>
      </mrow>
    </math>
  );
}

function ComplexityEquation() {
  return (
    <math
      aria-label="The polygonal complexity of A T A inverse equals the polygonal complexity of T"
      display="block"
    >
      <mrow>
        <msub>
          <mi>ν</mi>
          <mtext>poly</mtext>
        </msub>
        <mo>(</mo>
        <mi>A</mi>
        <mi>T</mi>
        <msup>
          <mi>A</mi>
          <mrow>
            <mo>−</mo>
            <mn>1</mn>
          </mrow>
        </msup>
        <mo>)</mo>
        <mo>=</mo>
        <msub>
          <mi>ν</mi>
          <mtext>poly</mtext>
        </msub>
        <mo>(</mo>
        <mi>T</mi>
        <mo>)</mo>
        <mo>.</mo>
      </mrow>
    </math>
  );
}

function ScalingEquation() {
  return (
    <math
      aria-label="A times t T times A inverse equals t times A T A inverse"
      display="block"
    >
      <mrow>
        <mi>A</mi>
        <mo>(</mo>
        <mi>t</mi>
        <mi>T</mi>
        <mo>)</mo>
        <msup>
          <mi>A</mi>
          <mrow>
            <mo>−</mo>
            <mn>1</mn>
          </mrow>
        </msup>
        <mo>=</mo>
        <mi>t</mi>
        <mo>(</mo>
        <mi>A</mi>
        <mi>T</mi>
        <msup>
          <mi>A</mi>
          <mrow>
            <mo>−</mo>
            <mn>1</mn>
          </mrow>
        </msup>
        <mo>)</mo>
        <mo>.</mo>
      </mrow>
    </math>
  );
}

export function Proposition22ExpandedProof() {
  return (
    <div className="part-i-manuscript topic-i-expanded-proof">
      <div className="proof">
        <p>
          <em>Expanded proof.</em> Let <i>A</i> be invertible and introduce the
          conjugate map and transported polygon
        </p>
        <CandidateEquation />

        <ol className="topic-i-expanded-proof-steps">
          <li>
            <h6>The candidate polygons correspond bijectively.</h6>
            <p>
              The assignment <i>P</i> ↦ <i>AP</i> has inverse{" "}
              <i>Q</i> ↦ <i>A</i>
              <sup>−1</sup>
              <i>Q</i>. Because <i>A</i> is a linear homeomorphism, it
              preserves compactness and maps line segments to line segments.
              Hence it preserves convexity. It also maps open sets to open
              sets, so a polygon has nonempty interior exactly when its image
              does. Thus nondegenerate compact convex polygons correspond in
              both directions.
            </p>
          </li>

          <li>
            <h6>The correspondence preserves genuine vertices.</h6>
            <p>
              Suppose <i>x</i> is extreme in <i>P</i> and{" "}
              <i>Ax</i> = <i>s y</i>
              <sub>1</sub> + (1−<i>s</i>)<i>y</i>
              <sub>2</sub>, where 0&lt;<i>s</i>&lt;1 and{" "}
              <i>y</i>
              <sub>1</sub>, <i>y</i>
              <sub>2</sub>∈<i>AP</i>. Write <i>y</i>
              <sub>j</sub>=<i>Ax</i>
              <sub>j</sub> with <i>x</i>
              <sub>j</sub>∈<i>P</i>, and apply <i>A</i>
              <sup>−1</sup>. Then{" "}
              <i>x</i>=<i>s x</i>
              <sub>1</sub>+(1−<i>s</i>)<i>x</i>
              <sub>2</sub>. Extremality forces{" "}
              <i>x</i>
              <sub>1</sub>=<i>x</i>
              <sub>2</sub>=<i>x</i>. Thus <i>Ax</i> is extreme in{" "}
              <i>AP</i>. Applying the same argument to <i>A</i>
              <sup>−1</sup> gives the reverse inclusion, so
            </p>
            <ExtremePointEquation />
            <p>
              In particular, <i>P</i> and <i>AP</i> have exactly the same
              number of vertices.
            </p>
          </li>

          <li>
            <h6>Invariance is transported exactly.</h6>
            <p>
              Applying an injective map preserves and reflects set inclusion.
              Therefore
            </p>
            <InvarianceEquation />
            <p>
              The displayed implication can be read in either direction:
              applying <i>A</i>
              <sup>−1</sup> recovers <i>TP</i>⊆<i>P</i> from the transported
              inclusion.
            </p>
          </li>

          <li>
            <h6>The two minimisation problems are identical.</h6>
            <p>
              We have a bijection between all polygons admissible for{" "}
              <i>T</i> and all polygons admissible for{" "}
              <i>ATA</i>
              <sup>−1</sup>, and the bijection preserves the number of extreme
              points. The two sets of possible vertex counts are therefore
              equal. Their minima agree; if either admissible class is empty,
              both are empty and both complexities equal ∞. Hence
            </p>
            <ComplexityEquation />
          </li>

          <li>
            <h6>Radial criticality is preserved as well.</h6>
            <p>For every scalar <i>t</i>&gt;0,</p>
            <ScalingEquation />
            <p>
              The equality just proved therefore holds simultaneously for{" "}
              <i>T</i> and every radial comparison map <i>tT</i>. Consequently
              the conditions{" "}
              <i>ν</i>
              <sub>poly</sub>(<i>T</i>)=<i>N</i> and{" "}
              <i>ν</i>
              <sub>poly</sub>(<i>tT</i>)&gt;<i>N</i> for all <i>t</i>&gt;1
              hold exactly when the corresponding conditions hold for{" "}
              <i>ATA</i>
              <sup>−1</sup>. This proves conjugacy invariance of{" "}
              <i>N</i>-criticality.
            </p>
          </li>

          <li>
            <h6>The adjoint identity is the reflection case.</h6>
            <p>
              Proposition 2.1 supplies an orientation-reversing reflection{" "}
              <i>S</i> in the adapted inner product such that{" "}
              <i>STS</i>
              <sup>−1</sup>=<i>T</i>
              <sup>*</sup>. Hence{" "}
              <i>S</i>(<i>tT</i>)<i>S</i>
              <sup>−1</sup>=<i>tT</i>
              <sup>*</sup>. Applying the first part with <i>A</i>=<i>S</i>{" "}
              gives{" "}
              <i>ν</i>
              <sub>poly</sub>(<i>tT</i>
              <sup>*</sup>)=<i>ν</i>
              <sub>poly</sub>(<i>tT</i>) for every <i>t</i>&gt;0.
            </p>
          </li>
        </ol>

        <p className="topic-i-proof-end">
          This proves every assertion of Proposition 2.2. <span>□</span>
        </p>
      </div>
    </div>
  );
}
