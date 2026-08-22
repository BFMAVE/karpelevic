import { ProofDependencyContract } from "../../components/proof/ProofDependencyContract";
import { ProofResultGroup } from "../../components/proof/ProofResultGroup";
import type { ProofResultData } from "../../components/proof/ProofResult";
import { NestingFigure } from "../../components/proof/figures/NestingFigures";
import {
  partIIHtmlByLabel,
  partIIProofHtmlByLabel,
} from "../part-ii-content.generated";
import { sitePath } from "../../lib/site-path";

type FormalLabel = keyof typeof partIIProofHtmlByLabel;

const crossTopicAnchors: Readonly<Record<string, string>> = {
  "karp:eq:rooted-chord": sitePath("/proof/topic-ix/#karp:eq:rooted-chord"),
  "karp:eq:A-B-oriented-range": sitePath("/proof/topic-x/#karp:eq:A-B-oriented-range"),
  "karp:thm:hetero-sharp": sitePath("/proof/topic-x/#karp:thm:hetero-sharp"),
  "karp:lem:farey-adjacency-expanded": sitePath("/proof/topic-ix/#karp:lem:farey-adjacency-expanded"),
  "karp:eq:A-B-absolute": sitePath("/proof/topic-ix/#topic-ix-scalar-ray"),
  "karp:eq:A+B-range": sitePath("/proof/topic-ix/#karp:eq:A+B-range"),
  "karp:prop:scalar-ray": sitePath("/proof/topic-ix/#karp:prop:scalar-ray"),
  "karp:eq:padding-explicit-scalar-sign": sitePath("/proof/topic-xii/a/#karp:eq:padding-explicit-scalar-sign"),
  "karp:lem:mediant-expansion": sitePath("/proof/topic-xii/a/#karp:lem:mediant-expansion"),
  "karp:eq:Kn-pi-definition": sitePath("/proof/topic-xii/a/#karp:eq:Kn-pi-definition"),
};

function relinkCrossTopicReferences(html: string): string {
  let linked = html;
  for (const [anchor, href] of Object.entries(crossTopicAnchors)) {
    linked = linked.replaceAll(`href="#${anchor}"`, `href="${href}"`);
  }
  return linked;
}

function exactResult(label: FormalLabel): string {
  return relinkCrossTopicReferences(
    partIIHtmlByLabel[label] + partIIProofHtmlByLabel[label],
  );
}

const commonImports = [
  {
    label: "Topic IX · Farey intervals and the unique modulus",
    href: sitePath("/proof/topic-ix/"),
    explanation: (
      <>
        defines consecutive Farey endpoints, the denominator labels <i>q</i>, <i>s</i>, the factor count <i>D</i><sub>n</sub>(<i>q</i>)=⌊<i>n/q</i>⌋, the angles <i>A</i>, <i>B</i>, and the unique constant-parameter radius on each open ray.
      </>
    ),
  },
  {
    label: "Topic X, Theorem II.6.1 · Radial inequality under the finite-product and phase hypotheses",
    href: sitePath("/proof/topic-x/#karp:thm:hetero-sharp"),
    explanation: (
      <>
        proves that parameters satisfying the finite-product identity, the
        real-valued argument identity, and the bounds
        <i>u</i><sub>j</sub>∈[<i>A</i>,<i>M</i>) have radius at most the
        constant-parameter radius, with equality if and only if all
        β<sub>j</sub> agree.
      </>
    ),
  },
] as const;

const partAResults: readonly ProofResultData[] = [
  {
    id: "topic-xii-mediant-expansion",
    label: "Lemma II.8.1",
    kind: "Lemma",
    title: "Comparison after inserting a Farey mediant",
    purpose: "Compare the old candidate with each new Farey subinterval by using the line through the transformed endpoints after R=1/ρ.",
    manuscriptHtml: exactResult("karp:lem:mediant-expansion"),
    vocabulary: [
      {
        term: "Selected m-th root",
        definition: (
          <>
            The proof fixes <i>U</i><sup>1/<i>m</i></sup>=<i>R</i><sup><i>b/m</i></sup><i>e</i><sup><i>iA/m</i></sup>. This specifies both its modulus and its argument; no multivalued root is left implicit.
          </>
        ),
      },
      {
        term: "Line in reciprocal coordinates",
        definition: <>After setting <i>R</i>=1/ρ, the old equation becomes 1=β<i>U</i>+α<i>V</i>. Thus 1 lies between <i>U</i> and <i>V</i>, and the proof compares the positive-real intersection of their full line with that of the new line.</>,
      },
      {
        term: "Log-radial function of a line",
        definition: (
          <>
            On an interval of angles where the ray meets a line at positive radius <i>r</i><sub><i>L</i></sub>(φ), put ℓ<sub><i>L</i></sub>(φ)=log <i>r</i><sub><i>L</i></sub>(φ). There ℓ<sub><i>L</i></sub>″(φ)=sec²(φ−φ<sub>0</sub>)&gt;0, so its derivative is strictly increasing.
          </>
        ),
      },
      {
        term: "Determinant and real-axis intersection",
        definition: <>The convention is det(<i>z,w</i>)=Im(<span style={{ textDecoration: "overline" }}>z</span><i>w</i>). For endpoint angles <i>A,C</i>&gt;0 with <i>A+C</i>&lt;π, Δ<sub><i>X,Y</i></sub>(1)&lt;0 exactly when the line through <i>X,Y</i> meets the positive real axis beyond 1.</>,
      },
    ],
    intuition: (
      <>
        In reciprocal coordinates the old line passes through 1. Farey insertion changes one transformed endpoint by multiplying powers of the old endpoints. Strict convexity of the line’s log-radius locates the new point, and the determinant formula then shows that the new line meets the positive real axis beyond 1.
      </>
    ),
    figure: <NestingFigure kind="mediant" />,
    proofSteps: [
      {
        title: "Define the old comparison line and its log-radial function",
        explanation: <><i>R</i> is the reciprocal of the old candidate radius. The vector equation writes 1 as a strict convex combination of <i>U</i> and <i>V</i>, so 1 lies in the relative interior of their segment. Consequently ℓ(0)=0, while ℓ records the logarithms of the endpoint moduli.</>,
        check: <>The coefficients α and β lie strictly between 0 and 1 because the prescribed argument lies in the open Farey interval.</>,
      },
      {
        title: "Treat the left subinterval when b&lt;d and b&gt;1",
        explanation: <>Coprimality of the neighbouring denominators prevents <i>b</i> from dividing <i>d</i>; hence the factor count does not change. With the selected root <i>U</i><sup>1/<i>m</i></sup>=<i>R</i><sup><i>b/m</i></sup><i>e</i><sup><i>iA/m</i></sup>, the new endpoint is <i>W=VU</i><sup>1/<i>m</i></sup>. Integrating the strictly increasing derivative ℓ′ over two scaled angular intervals proves that |<i>W</i>| exceeds the old line’s radius in the direction of <i>W</i>.</>,
      },
      {
        title: "Prove ΔU,W(1)&lt;0",
        explanation: <>Write <i>W=γV</i><sub>*</sub> with γ&gt;1 and <i>V</i><sub>*</sub> on the old segment. Collinearity cancels one determinant term, leaving −(γ−1)<i>R</i><sup><i>b</i></sup>sin <i>A</i>&lt;0. The fixed sign test therefore puts the new intercept strictly beyond 1.</>,
      },
      {
        title: "Treat the right subinterval",
        explanation: <>Here <i>A&gt;mB</i>. Both new endpoints are obtained by multiplying points of the old line by <i>V</i><sup><i>m</i></sup>. Strict increase of ℓ′ again produces a scaling γ&lt;1 on the relevant old-line point. Multiplication by a nonzero complex number scales real determinants by its positive squared modulus, so it cannot reverse the sign.</>,
      },
      {
        title: "Handle b=1 by the line-intersection formula",
        explanation: <>The divisibility argument used above is unavailable on the interval [0,1/<i>d</i>]. The proof therefore writes the radial function of an ordinary chord from 1 to a root of unity explicitly and differentiates it with respect to the endpoint angle. The derivative is negative, so the smaller new endpoint angle produces the larger radius.</>,
      },
      {
        title: "Reduce d&lt;b by Farey reflection",
        explanation: <>If <i>d&lt;b</i>, complex conjugation and reduction modulo one replace the interval by 1−<i>c/d</i>&lt;1−<i>a/b</i>. The smaller denominator is then on the left, while moduli, scalar equations, and positive-real intersection coordinates are preserved.</>,
      },
      {
        title: "Handle Farey endpoint angles",
        explanation: <>The strict comparison concerns open rays. At a Farey endpoint both candidate radii are defined to be 1, so equality there is part of the definition rather than a limiting claim.</>,
      },
    ],
    takeaway: <>On either open subinterval created by the mediant, the comparison gives <i>K</i><sub>n−1</sub>(θ)&lt;<i>K</i><sub>n</sub>(θ).</>,
    sourceIds: ["standard-farey", "ito-1997"],
    sourceRelation: <>Farey mediants and Ito candidate curves on consecutive-fraction intervals are established ingredients; the signed line comparison used here is proved in full in Lemma II.8.1.</>,
  },
  {
    id: "topic-xii-multiplicity-padding",
    label: "Lemma II.8.2",
    kind: "Lemma",
    title: "Comparison when the factor count increases by one",
    purpose: "Compare consecutive orders on an unchanged Farey interval when Dₙ(q)=Dₙ₋₁(q)+1.",
    manuscriptHtml: exactResult("karp:lem:multiplicity-padding"),
    prelude: (
      <div className="proof-chapter-reading-note" id="topic-xii-exact-topic-x-input">
        <p>
          <strong>Exact Topic X input.</strong>{" "}
          <a href={sitePath("/proof/topic-x/#karp:thm:hetero-sharp")}>Theorem II.6.1</a>{" "}
          applies to parameters β<sub>1</sub>,…,β<sub>M</sub>∈[0,1] when
          μ<sup><i>s−Mq</i></sup>∏<sub><i>j</i></sub>(μ<sup><i>q</i></sup>−β<sub><i>j</i></sub>)=∏<sub><i>j</i></sub>(1−β<sub><i>j</i></sub>),
          the chosen real arguments satisfy
          (<i>s−Mq</i>)ϑ+Σ<sub><i>j</i></sub><i>u</i><sub><i>j</i></sub>=2π(<i>r−Mp</i>),
          and every <i>u</i><sub><i>j</i></sub> lies in [<i>A,M</i><sub>*</sub>).
          It gives ρ≤ρ<sub>*</sub>, with equality if and only if all β<sub><i>j</i></sub> agree.
          Lemma II.8.2 verifies these hypotheses for the extended tuple (β,…,β,0), so the conclusion is strict.
        </p>
      </div>
    ),
    vocabulary: [
      {
        term: "Factor count Dₙ(q)",
        definition: <>For an endpoint denominator <i>q</i>, set <i>D</i><sub>n</sub>(<i>q</i>)=⌊<i>n/q</i>⌋. Here the old and new values are <i>m</i> and <i>M=m+1</i>.</>,
      },
      {
        term: "Continuous argument branch",
        definition: <>Because Im(μ<sup><i>q</i></sup>)&gt;0, every μ<sup><i>q</i></sup>−<i>t</i> with 0≤<i>t</i>≤1 lies in the open upper half-plane. Its unique argument <i>u</i>(<i>t</i>)∈(0,π) satisfies <i>u</i>′(<i>t</i>)=Im(μ<sup><i>q</i></sup>)/|μ<sup><i>q</i></sup>−<i>t</i>|²&gt;0.</>,
      },
      {
        term: "Extended parameter tuple",
        definition: <>The old tuple (β,…,β) is extended to (β,…,β,0). The new parameter β<sub>M</sub>=0 contributes the identity factor μ<sup>−<i>q</i></sup>(μ<sup><i>q</i></sup>−β<sub>M</sub>)=1, so the product value is unchanged while the factor count increases.</>,
      },
      {
        term: "Increasing residual G(t)",
        definition: <><i>G</i>(<i>t</i>)=<i>t</i><sup><i>s/M</i></sup>sin <i>A</i>+<i>t</i><sup><i>q</i></sup>sin <i>B</i><sub>M</sub>−sin(<i>A+B</i><sub>M</sub>). Its derivative is positive for <i>t</i>&gt;0; therefore <i>G</i>(ρ)&lt;0=<i>G</i>(ρ<sub>n</sub>) implies ρ&lt;ρ<sub>n</sub>.</>,
      },
    ],
    intuition: <>Keep the old constant-parameter product, extend its parameter tuple by β<sub>M</sub>=0, and reinterpret the same value as an order-<i>n</i> product with one additional factor. Because (β,…,β,0) is not constant, Topic X’s equality condition is unavailable and its radius comparison is strict.</>,
    figure: <NestingFigure kind="padding" />,
    proofSteps: [
      {
        title: "Reflect so the smaller denominator is q",
        explanation: <>If necessary, conjugate the point and reflect the interval so that the smaller denominator <i>q</i> is on the left. This changes no modulus or scalar equation and makes the positive angular gaps <i>A</i> and <i>B</i><sub>m</sub> agree with Topic X’s sign conventions.</>,
      },
      {
        title: "Identify the old chosen argument",
        explanation: <>The scalar formulas for α and β resolve μ<sup>q</sup>−β into modulus times e<sup>i(A+Bₘ)</sup>. Thus every old factor has the same chosen real argument <i>A+B</i><sub>m</sub>; the old equality for their sum follows by direct substitution rather than being assumed.</>,
      },
      {
        title: "Set βM=0 and rewrite the product",
        explanation: <>Set β<sub>M</sub>=0, α<sub>M</sub>=1, and <i>u</i><sub>M</sub>=<i>A</i>. Multiplying the old product by μ<sup>−q</sup>(μ<sup>q</sup>−0)=1 changes the exponent from <i>s−mq</i> to <i>s−Mq</i> and produces the order-<i>n</i> product exactly.</>,
      },
      {
        title: "Verify the real-valued argument equality",
        explanation: <>Subtracting <i>qϑ</i> from the old real-argument sum and adding <i>A=qϑ−2πp</i> changes the integer winding from <i>r−mp</i> to <i>r−Mp</i>. This proves the new equality with no untracked multiple of 2π.</>,
      },
      {
        title: "Place every argument in the permitted interval",
        explanation: <>The upper-half-plane branch <i>u</i>(<i>t</i>)=Arg(μ<sup>q</sup>−<i>t</i>) has positive derivative. The old arguments lie strictly between <i>A</i> and <i>M</i><sub>*</sub>, while the new parameter β<sub>M</sub>=0 has argument exactly <i>A</i>. Hence Topic X applies to the full extended tuple.</>,
      },
      {
        title: "Apply Theorem II.6.1 and compare the zeros",
        explanation: <>The tuple has <i>m</i> copies of β∈(0,1) and one copy of 0. It is not constant, so Theorem II.6.1 makes <i>G</i>(ρ)&lt;0. Since <i>G</i> is strictly increasing and vanishes at the new candidate radius, the old radius is strictly smaller.</>,
      },
    ],
    takeaway: <>If only the factor count changes, then <i>K</i><sub>n−1</sub>(θ)&lt;<i>K</i><sub>n</sub>(θ) on every open ray of the unchanged Farey interval.</>,
    sourceIds: ["ito-1997"],
    sourceRelation: <>Ito’s family supplies the constant-parameter candidate, and Topic X supplies Theorem II.6.1. Lemma II.8.2 verifies that theorem’s hypotheses for (β,…,β,0) and proves the strict comparison here.</>,
  },
] as const;

const partBResults: readonly ProofResultData[] = [
  {
    id: "topic-xii-refinement-split",
    label: "Lemma II.8.3",
    kind: "Lemma",
    title: "Classification of the changes from Fₙ₋₁⁺ to Fₙ⁺",
    purpose: "Prove that inherited endpoints, new endpoints, unchanged Farey intervals, and intervals divided by a mediant exhaust the comparison between consecutive orders.",
    manuscriptHtml: exactResult("karp:lem:nesting-case-split"),
    vocabulary: [
      {
        term: "New fraction set Fₙ⁺∖Fₙ₋₁⁺",
        definition: <>These are precisely the reduced upper-half Farey fractions first admitted at order <i>n</i>. Each has reduced denominator exactly <i>n</i>.</>,
      },
      {
        term: "Unimodular basis of ℤ²",
        definition: <>Because <i>bc−ad=1</i>, the vectors (<i>b,a</i>) and (<i>d,c</i>) form a basis of ℤ². A primitive vector (<i>n,h</i>) whose slope lies strictly between theirs has positive integer coordinates in this basis.</>,
      },
    ],
    intuition: <>A single step from denominator bound <i>n−1</i> to <i>n</i> can admit only fractions whose reduced denominator is exactly <i>n</i>. Between old neighbours the unimodular-basis decomposition forces such a fraction, if present, to be their mediant. Everything else is either an endpoint or remains inside an unchanged interval.</>,
    proofSteps: [
      {
        title: "Identify what can be new",
        explanation: <>Every fraction of denominator at most <i>n−1</i> was already eligible. Therefore a point of <i>F</i><sub>n</sub>\<i>F</i><sub>n−1</sub> has reduced denominator exactly <i>n</i>.</>,
      },
      {
        title: "Place a new fraction between old neighbours",
        explanation: <>For old neighbours <i>a/b&lt;c/d</i>, Farey adjacency gives <i>bc−ad=1</i>. The resulting unimodular basis writes the primitive vector (<i>n,h</i>) of an inserted fraction as <i>m(b,a)+ℓ(d,c)</i> with positive integers <i>m,ℓ</i>.</>,
      },
      {
        title: "Compare n≥b+d with b+d≥n",
        explanation: <>The decomposition gives <i>n=mb+ℓd≥b+d</i>, while old adjacency at order <i>n−1</i> gives <i>b+d≥n</i>. Equality holds throughout, forcing <i>m=ℓ=1</i> and <i>h/n=(a+c)/(b+d)</i>.</>,
      },
      {
        title: "Classify the ray itself",
        explanation: <>The normalized angle θ/(2π) is either an old endpoint, a new endpoint, or lies inside an old interval. Such an interval is either divided by the unique mediant or unchanged.</>,
      },
      {
        title: "Determine whether Dₙ(q) changes",
        explanation: <>For a fixed smaller denominator <i>q</i>, the difference <i>D</i><sub>n</sub>(<i>q</i>)−<i>D</i><sub>n−1</sub>(<i>q</i>) is either zero or one. This completes case (iii).</>,
      },
    ],
    takeaway: <>The two local comparisons from Part A cover every open-ray change; endpoint rays require only their defining value 1.</>,
    sourceIds: ["standard-farey"],
    sourceRelation: <>This classification is derived from the classical Farey adjacency and mediant properties; the proof records explicitly why these four cases are exhaustive for the radius comparison.</>,
  },
  {
    id: "topic-xii-candidate-nesting",
    label: "Theorem II.8.4",
    kind: "Theorem",
    title: "Monotonicity of Kₙ(θ) with respect to n",
    purpose: "Assemble all local comparisons into the global inequality Kₙ₋₁(θ)≤Kₙ(θ) on every ray.",
    manuscriptHtml: exactResult("karp:thm:candidate-nesting"),
    vocabulary: [
      {
        term: "Candidate radius Kₙ(θ)",
        definition: <>On a ray whose normalized angle lies in an open Farey interval, it is the unique scalar equality radius from Topic IX. At every Farey endpoint below π, and separately at θ=π, it is defined to be 1.</>,
      },
      {
        term: "Order-n scalar residual Fₙ,θ(t)",
        definition: <>The left side of the order-<i>n</i> scalar radius equation minus its right side, evaluated at a test radius <i>t</i>. Formula (II.8.22) shows that its derivative is positive for <i>t&gt;0</i>.</>,
        example: <>If F<sub>n,θ</sub>(0.8)&lt;0 and its unique zero is 0.9, strict increase certifies 0.8&lt;0.9 without solving the equation again.</>,
      },
    ],
    intuition: <>Instead of comparing two complicated curves directly, insert the old radius into the new scalar equation. The exhaustive four-case classification shows that the new residual there is always nonpositive. Because the new residual increases strictly and crosses zero exactly once, its zero must lie at or to the right of the old radius.</>,
    figure: <NestingFigure kind="defect" />,
    proofSteps: [
      {
        title: "Define Fₙ,θ and prove it is strictly increasing",
        explanation: <>For a fixed open ray, define F<sub>n,θ</sub>(<i>t</i>) from the order-<i>n</i> scalar equation. The two sine coefficients and both exponents are positive, so the displayed derivative is positive for every <i>t&gt;0</i>. Topic IX identifies <i>K</i><sub>n</sub>(θ) as its unique zero.</>,
      },
      {
        title: "Evaluate the unchanged equation at the old radius",
        explanation: <>If neither the Farey interval nor its factor count changes, the scalar equation is literally the same. Hence the new residual at ρ<sub>−</sub>=<i>K</i><sub>n−1</sub>(θ) equals zero.</>,
      },
      {
        title: "Use Lemma II.8.2 when the factor count increases",
        explanation: <>If the interval stays fixed but its factor count increases, Lemma II.8.2 gives the strict sign F<sub>n,θ</sub>(ρ<sub>−</sub>)&lt;0.</>,
      },
      {
        title: "Use Lemma II.8.1 after a mediant insertion",
        explanation: <>Lemma II.8.1 makes the new reciprocal-coordinate line’s intercept <i>I</i><sub>R</sub> exceed 1. Identity (II.8.23) expresses <i>I</i><sub>R</sub>−1 as a positive factor times −F<sub>n,θ</sub>(ρ<sub>−</sub>), so the residual is again strictly negative.</>,
      },
      {
        title: "Use strict monotonicity to compare the two zeros",
        explanation: <>All interior cases give F<sub>n,θ</sub>(ρ<sub>−</sub>)≤0. Strict increase and F<sub>n,θ</sub>(<i>K</i><sub>n</sub>)=0 force ρ<sub>−</sub>≤<i>K</i><sub>n</sub>. The inequality is strict exactly after a mediant insertion or a factor-count increase.</>,
      },
      {
        title: "Handle Farey endpoint angles",
        explanation: <>At a new endpoint the new value is 1 while the old ray was interior and had radius below 1. At an inherited endpoint both values are 1. The separate convention <i>K</i><sub>n</sub>(π)=1 handles the order-three terminal jump when comparing orders three and four.</>,
      },
      {
        title: "Reflect to the lower half-plane",
        explanation: <>Complex conjugation preserves every modulus and completes the full-circle statement.</>,
      },
    ],
    takeaway: <>For every angle, <i>K</i><sub>n−1</sub>(θ)≤<i>K</i><sub>n</sub>(θ). Topic XIII uses this pointwise inequality when a stochastic extremum is inherited from the preceding order.</>,
    sourceIds: ["karpelevic-1951", "ito-1997"],
    sourceRelation: <>The theorem is assembled from Lemmas II.8.1–II.8.3 and the strictly increasing scalar residual. It proves pointwise monotonicity before Topic XIII identifies the candidates with the stochastic boundary.</>,
  },
] as const;

function TopicXIISetup() {
  return (
    <section
      className="topic-i-textbook proof-chapter-group"
      aria-labelledby="topic-xii-setup-heading"
      data-topic-xii-setup
    >
      <header>
        <div>
          <p className="section-label">Definitions before the comparisons</p>
          <h3 id="topic-xii-setup-heading">Farey data, factor count, and candidate radius</h3>
        </div>
        <div>
          <p>These conventions are used in both parts of Topic XII.</p>
        </div>
      </header>
      <div className="proof-chapter-reading-note">
        <p>
          <strong>Farey intervals and rays.</strong> <i>F</i><sub>n</sub> is the Farey sequence of order <i>n</i>,
          <i> F</i><sub>n</sub><sup>+</sup>=<i>F</i><sub>n</sub>∩[0,1/2], and
          ℛ<sub>θ</sub>={"{"}<i>te</i><sup><i>iθ</i></sup>:<i>t</i>≥0{"}"} is the ray of angle θ.
        </p>
        <p>
          <strong>Factor count and determinant.</strong> For an endpoint denominator <i>q</i>,
          <i> D</i><sub>n</sub>(<i>q</i>)=⌊<i>n/q</i>⌋. Throughout Topic XII,
          det(<i>z,w</i>)=Im(<span aria-label="complex conjugate of z">z̄</span><i>w</i>) under the identification ℂ≃ℝ².
        </p>
        <p>
          <strong>Candidate radius.</strong> If <i>x=θ/(2π)</i> lies in an open interval between consecutive fractions of
          <i> F</i><sub>n</sub><sup>+</sup>, then <i>K</i><sub>n</sub>(θ) is Topic IX’s unique scalar equality radius.
          At every Farey endpoint below π set <i>K</i><sub>n</sub>(θ)=1, and separately set
          {" "}<span id="karp:eq:Kn-pi-definition"><i>K</i><sub>n</sub>(π)=1</span>.
          The separate terminal convention records the order-three jump: the nonreal arc tends to radius 1/2 as θ↑π, while the endpoint −1 has radius 1.
        </p>
        <p>
          <strong>Logical status.</strong> The notation <i>K</i><sub>n</sub> denotes the candidate selected by the scalar equation.
          Topic XIII, not the notation itself, identifies this value with the outer stochastic radius.
        </p>
      </div>
    </section>
  );
}

export function TopicXIIAContent() {
  return (
    <>
      <ProofDependencyContract
        headingId="topic-xii-a-contract-heading"
        imported={commonImports}
        background={[
          {
            label: "Strict convexity of −log cos",
            explanation: <>on every interval where a line has a positive radial intersection, its log-radius has second derivative sec²&gt;0. The two-line derivation is reproduced before the first lemma in its exact proof.</>,
          },
          {
            label: "Determinants in the real plane",
            href: sitePath("/proof/#part-i-item-10"),
            explanation: <>supply the signed side test; multiplication by a nonzero complex number scales every real determinant by its positive squared modulus.</>,
          },
        ]}
        provedHere={<p>Lemma II.8.1 handles a Farey interval divided by a newly inserted mediant in both denominator orientations. Lemma II.8.2 handles an unchanged interval whose factor count rises. Together they provide every nontrivial comparison at a prescribed argument needed in Part B.</p>}
      />

      <TopicXIISetup />

      <section className="topic-i-textbook proof-chapter-group">
        <header>
          <div>
            <p className="section-label">Preliminary formulas</p>
            <h3>Line-intersection and convexity formulas</h3>
          </div>
          <div>
            <p>After replacing ρ by <i>R</i>=1/ρ, the old candidate gives a line through transformed endpoints with positive-real intersection 1. The two lemmas compare the corresponding new line or scalar residual.</p>
          </div>
        </header>
        <div className="proof-chapter-reading-note">
          <p><strong>A notational warning.</strong> In Lemma II.8.1, <i>d</i> is the denominator in the endpoint <i>c/d</i>, while the old factor count is called <i>m</i>. In Lemma II.8.2, the old and new factor counts are called <i>m</i> and <i>M=m+1</i>. These are roles, not interchangeable symbols.</p>
          <p>
            <strong>The log-radial function is explicit.</strong> Let <i>L</i> be a line not through the origin. On an interval of directions for which the ray
            {" "}<span>{"{"}<i>re</i><sup>iφ</sup>:<i>r</i>&gt;0{"}"}</span> meets <i>L</i>, call that intersection radius <i>r</i>(φ) and put ℓ(φ)=log <i>r</i>(φ). For constants <i>c</i> and φ<sub>0</sub>,
            {" "}<span className="math-inline" id="karp:eq:log-line">ℓ(φ)=<i>c</i>−log cos(φ−φ<sub>0</sub>) and ℓ″(φ)=sec²(φ−φ<sub>0</sub>)&gt;0</span>
            {" "}on the chosen interval, where |φ−φ<sub>0</sub>|&lt;π/2.
            {" "}Here sec <i>u</i>=1/cos <i>u</i>.
            {" "}This is equation (II.8.1), and it proves that ℓ′ is strictly increasing on the interval used below.
          </p>
          <p>
            <strong>The sign convention is fixed algebraically.</strong> With det(<i>z,w</i>)=Im(<span aria-label="complex conjugate of z">z̄</span><i>w</i>), take
            {" "}<span className="math-inline"><i>X=Pe</i><sup>iA</sup></span> and
            {" "}<span className="math-inline"><i>Y=Qe</i><sup>−iC</sup></span>, with <i>P,Q,A,C</i>&gt;0 and <i>A+C</i>&lt;π, define
            {" "}<span className="math-inline" id="karp:eq:two-ray-determinant">Δ<sub>X,Y</sub>(<i>r</i>)=det(<i>Y−X,r−X</i>)=<i>r</i>(<i>P</i> sin <i>A+Q</i> sin <i>C</i>)−<i>PQ</i> sin(<i>A+C</i>).</span>
          </p>
          <p>
            Its positive-real intercept is
            {" "}<span className="math-inline" id="karp:eq:two-ray-intercept"><i>I(P,Q)=PQ</i> sin(<i>A+C</i>)/(<i>P</i> sin <i>A+Q</i> sin <i>C</i>)</span>, and therefore
            {" "}<span className="math-inline" id="karp:eq:intercept-sign-test"><i>I(P,Q)</i>&gt;1 exactly when Δ<sub>X,Y</sub>(1)&lt;0.</span>
            {" "}These are equations (II.8.2)–(II.8.4). No visual “left side/right side” convention enters the proof.
          </p>
          <details className="proof-item-commentary proof-item-explainer">
            <summary>
              <span>Why moving either endpoint outward helps</span>
              Open the two derivative signs
            </summary>
            <div className="proof-item-explainer-body">
              <p>
                Holding the angles fixed, direct differentiation gives
                {" "}<span className="math-inline">∂<i>I</i>/∂<i>P</i>=<i>Q</i>² sin(<i>A+C</i>) sin <i>C</i>/(<i>P</i> sin <i>A+Q</i> sin <i>C</i>)²&gt;0</span>
                {" "}and the symmetric formula
                {" "}<span className="math-inline">∂<i>I</i>/∂<i>Q</i>=<i>P</i>² sin(<i>A+C</i>) sin <i>A</i>/(<i>P</i> sin <i>A+Q</i> sin <i>C</i>)²&gt;0</span>.
                Every sine and denominator in these formulas is positive under the displayed angle assumptions.
              </p>
            </div>
          </details>
        </div>
      </section>

      <ProofResultGroup
        number="Part A · Two comparison lemmas"
        title="The two cases where Kₙ(θ)&gt;Kₙ₋₁(θ)"
        introduction={<p>The first result changes the Farey interval. The second keeps the interval but changes the factor count. Their proofs are independent and together cover the only two ways the formula at an interior argument can change from order <i>n−1</i> to order <i>n</i>.</p>}
        results={partAResults}
      />
    </>
  );
}

export function TopicXIIBContent() {
  return (
    <>
      <ProofDependencyContract
        headingId="topic-xii-b-contract-heading"
        imported={[
          ...commonImports,
          {
            label: "Topic XII-A · The two comparison lemmas",
            href: sitePath("/proof/topic-xii/a/"),
            explanation: <>supplies the strict line-intersection comparison after a mediant insertion and the strict scalar-residual sign after a factor-count increase.</>,
          },
        ]}
        background={[
          {
            label: "Classical Farey refinement",
            explanation: <>a newly admitted reduced fraction has denominator exactly <i>n</i>, and an interval between unimodular neighbours is divided at their mediant.</>,
          },
          {
            label: "Monotone zero comparison",
            explanation: <>if a strictly increasing function is nonpositive at <i>a</i> and vanishes at <i>b</i>, then <i>a≤b</i>.</>,
          },
        ]}
        provedHere={<p>Lemma II.8.3 proves that the Farey refinement cases are exhaustive. Theorem II.8.4 applies one scalar sign test in every case and obtains the pointwise inequality <i>K</i><sub>n−1</sub>(θ)≤<i>K</i><sub>n</sub>(θ).</p>}
      />

      <section className="topic-i-textbook proof-chapter-group" aria-labelledby="topic-xii-b-candidate-radius-heading" data-topic-xii-b-recall>
        <header>
          <div>
            <p className="section-label">Notation recalled from Part A</p>
            <h3 id="topic-xii-b-candidate-radius-heading">The candidate radius Kₙ</h3>
          </div>
          <div>
            <p>Part A states the full definition before either comparison lemma.</p>
          </div>
        </header>
        <div className="proof-chapter-reading-note">
          <p>On an open Farey-interval ray, <i>K</i><sub>n</sub>(θ) is Topic IX’s unique scalar equality radius. It equals 1 at Farey endpoints and, by the separate convention in <a href={sitePath("/proof/topic-xii/a/#karp:eq:Kn-pi-definition")}>Part A</a>, at θ=π.</p>
          <p>The endpoints of an interval may be labelled <i>p/q</i> and <i>r/s</i> so that <i>q&lt;s</i>; this denominator-based labelling need not be their left-to-right order. The absolute definitions of <i>A</i> and <i>B</i> cover both orientations.</p>
        </div>
      </section>

      <ProofResultGroup
        number="Part B · Exhaustion and assembly"
        title="Proof that Kₙ₋₁(θ)≤Kₙ(θ)"
        introduction={<p>The case split first proves that every ray is accounted for. The theorem then evaluates the new scalar residual at the old candidate and reads the sign against a unique zero.</p>}
        results={partBResults}
      />
    </>
  );
}
