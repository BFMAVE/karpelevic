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
  "karp:eq:A-B-oriented-range": sitePath("/proof/topic-x/#topic-x-heterogeneous"),
  "karp:thm:hetero-sharp": sitePath("/proof/topic-x/#karp:thm:hetero-sharp"),
  "karp:lem:farey-adjacency-expanded": sitePath("/proof/topic-ix/#karp:lem:farey-adjacency-expanded"),
  "karp:eq:A-B-absolute": sitePath("/proof/topic-ix/#topic-ix-scalar-ray"),
  "karp:prop:scalar-ray": sitePath("/proof/topic-ix/#karp:prop:scalar-ray"),
  "karp:eq:padding-explicit-scalar-sign": sitePath("/proof/topic-xii/a/#karp:eq:padding-explicit-scalar-sign"),
  "karp:lem:mediant-expansion": sitePath("/proof/topic-xii/a/#karp:lem:mediant-expansion"),
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
        defines consecutive Farey endpoints, the denominator labels <i>q</i>, <i>s</i>, the multiplicity ⌊<i>n/q</i>⌋, the angles <i>A</i>, <i>B</i>, and the unique constant-parameter radius on each open ray.
      </>
    ),
  },
  {
    label: "Topic X · Sharp inequality for varying parameters",
    href: sitePath("/proof/topic-x/"),
    explanation: (
      <>
        proves that a list satisfying the finite product equation, the phase
        equation, and the bounds <i>u</i><sub>j</sub>∈[<i>A</i>,<i>M</i>) has
        radius at most the constant-parameter radius, with equality only when
        all factor parameters agree.
      </>
    ),
  },
] as const;

const partAResults: readonly ProofResultData[] = [
  {
    id: "topic-xii-mediant-expansion",
    label: "Lemma II.8.1",
    kind: "Lemma",
    title: "Mediant chord expansion in both denominator orientations",
    purpose: "Show that when a new denominator splits one old Farey interval, each new reciprocal chord moves outward relative to the old candidate on the same ray.",
    manuscriptHtml: exactResult("karp:lem:mediant-expansion"),
    vocabulary: [
      {
        term: "Mediant",
        definition: (
          <>
            The mediant of <i>a</i>/<i>b</i> and <i>c</i>/<i>d</i> is (<i>a</i>+<i>c</i>)/(<i>b</i>+<i>d</i>). For Farey neighbours, this is the unique new reduced fraction that can split their cell when the permitted denominator reaches <i>b</i>+<i>d</i>.
          </>
        ),
        example: <>Between 1/3 and 2/5 the mediant is 3/8. Its denominator 8 explains why it first appears at order eight.</>,
      },
      {
        term: "Reciprocal chord",
        definition: <>After taking the explicitly chosen root of the Ito equation and replacing the old radius ρ by its reciprocal <i>R</i>, the equation has the form 1=β<i>U</i>+α<i>V</i>. The two complex endpoints <i>U,V</i> determine the reciprocal-coordinate chord used in this comparison.</>,
      },
      {
        term: "Relative interior of a segment",
        definition: <>For distinct endpoints <i>U,V</i>, this is the segment without either endpoint: the points (1−<i>t</i>)<i>U+tV</i> with 0&lt;<i>t</i>&lt;1.</>,
      },
      {
        term: "Floor ⌊y⌋",
        definition: <>The greatest integer no larger than <i>y</i>. It appears first in <i>m</i>=⌊(<i>n</i>−1)/<i>b</i>⌋.</>,
      },
      {
        term: "Coprime denominators",
        definition: <>The denominators <i>b</i> and <i>d</i> have greatest common divisor one. Farey adjacency gives this because a common divisor would also divide <i>bc−ad=1</i>.</>,
      },
      {
        term: "Reciprocal radius",
        definition: (
          <>
            If the old candidate radius is ρ with 0&lt;ρ&lt;1, the proof writes <i>R</i>=1/ρ&gt;1. Taking reciprocals turns the Ito equation into a chord whose positive-real intercept can be compared with 1.
          </>
        ),
      },
      {
        term: "Positive-real intercept",
        definition: <>The point where the full line through two rooted endpoints crosses the positive real axis, measured by its positive real coordinate. “Intercept greater than 1” means that crossing lies strictly to the right of the point 1.</>,
        example: <>A segment may not itself reach the axis, so the proof deliberately speaks about the line through its endpoints. Formula (II.8.3) computes the crossing without relying on a drawing.</>,
      },
      {
        term: "Log-radial function of a line",
        definition: (
          <>
            For every direction φ in which a line meets the positive ray, let <i>r</i>(φ)&gt;0 be that distance from the origin and put ℓ(φ)=log <i>r</i>(φ). Formula (II.8.1) shows ℓ″(φ)&gt;0, so its slope increases strictly.
          </>
        ),
      },
      {
        term: "Signed determinant test",
        definition: <>The determinant Δ<sub>X,Y</sub>(1) records on which side of the oriented line from <i>X</i> to <i>Y</i> the point 1 lies. Formula (II.8.4) fixes the sign convention: Δ&lt;0 exactly when the positive-real intercept is greater than 1.</>,
      },
    ],
    intuition: (
      <>
        In reciprocal coordinates the old chord passes through 1. Farey insertion changes one endpoint by multiplying powers of the old endpoints. Strict convexity of the line’s log-radius says that the changed endpoint lands strictly outside the old line. A determinant then translates “outside” into the unambiguous statement that the new chord crosses the real axis after 1.
      </>
    ),
    figure: <NestingFigure kind="mediant" />,
    proofSteps: [
      {
        title: "Fix the old chord and its logarithmic radial graph",
        explanation: <><i>R</i> is the reciprocal of the old candidate radius. The vector equation writes 1 as a strict convex combination of <i>U</i> and <i>V</i>, so 1 lies in the relative interior of their segment. Consequently ℓ(0)=0, while ℓ records the logarithms of the endpoint moduli.</>,
        check: <>The coefficients α and β lie strictly between 0 and 1 because the prescribed argument lies in the open Farey interval.</>,
      },
      {
        title: "Treat the left subcell when b&lt;d and b&gt;1",
        explanation: <>Coprimality of the neighbouring denominators prevents <i>b</i> from dividing <i>d</i>; hence the multiplicity floor does not change. The new endpoint is <i>W=VU</i><sup>1/<i>m</i></sup>. Integrating the strictly increasing derivative ℓ′ over two equally scaled angular intervals proves that |<i>W</i>| is strictly larger than the old line’s radius in the direction of <i>W</i>.</>,
      },
      {
        title: "Convert radial excess into a determinant sign",
        explanation: <>Write <i>W=γV</i><sub>*</sub> with γ&gt;1 and <i>V</i><sub>*</sub> on the old segment. Collinearity cancels one determinant term, leaving −(γ−1)<i>R</i><sup><i>b</i></sup>sin <i>A</i>&lt;0. The fixed sign test therefore puts the new intercept strictly beyond 1.</>,
      },
      {
        title: "Treat the right subcell",
        explanation: <>Here <i>A&gt;mB</i>. Both new endpoints are obtained by multiplying points of the old line by <i>V</i><sup><i>m</i></sup>. Strict increase of ℓ′ again produces a scaling γ&lt;1 on the relevant old-line point. Multiplication by a nonzero complex number scales real determinants by its positive squared modulus, so it cannot reverse the sign.</>,
      },
      {
        title: "Handle the exceptional denominator b=1 directly",
        explanation: <>The divisibility argument used above is unavailable at the cell [0,1/<i>d</i>]. The proof therefore writes the radial function of an ordinary chord from 1 to a root of unity explicitly and differentiates it with respect to the endpoint angle. The derivative is negative, so the smaller new endpoint angle produces the larger radius.</>,
      },
      {
        title: "Reverse the denominator orientation by conjugation",
        explanation: <>If <i>d&lt;b</i>, complex conjugation reflects the cell and exchanges left with right while preserving denominators, moduli, scalar equations, and real intercepts. Equal denominators would force <i>b=d=1</i>, contradicting <i>n≥4</i>, so all cases are exhausted.</>,
      },
      {
        title: "Restore the endpoint rays",
        explanation: <>The strict comparison concerns open rays. At a Farey endpoint both candidate outer radii are defined to be 1, so equality there is part of the definition rather than a limiting claim.</>,
      },
    ],
    takeaway: <>Whenever order <i>n</i> inserts a mediant, both new candidate arcs lie strictly outside the old candidate arc on their open rays.</>,
    provenance: "New result",
    sourceIds: ["standard-farey", "ito-1997"],
    sourceRelation: <>Farey mediants and Ito candidate curves on consecutive-fraction intervals are established ingredients. The two-orientation signed chord comparison is the manuscript’s new nesting mechanism.</>,
  },
  {
    id: "topic-xii-multiplicity-padding",
    label: "Lemma II.8.2",
    kind: "Lemma",
    title: "Multiplicity padding",
    purpose: "Compare two orders when the Farey interval stays fixed but the integer multiplicity increases by one.",
    manuscriptHtml: exactResult("karp:lem:multiplicity-padding"),
    vocabulary: [
      {
        term: "Multiplicity",
        definition: <>For the endpoint whose denominator is <i>q</i>, the cell uses the integer <i>d</i>=⌊<i>n</i>/<i>q</i>⌋. It counts how many factors appear in the rooted product. Here it changes from <i>m</i> to <i>M=m+1</i>.</>,
      },
      {
        term: "Floor ⌊y⌋",
        definition: <>The greatest integer no larger than the real number <i>y</i>. For example, ⌊7/3⌋=2.</>,
      },
      {
        term: "Constant parameter list",
        definition: <>All factor parameters β<sub>1</sub>,…,β<sub>m</sub> are the same number β, and therefore all α<sub>j</sub>=1−β are also equal. Topic X proved that this symmetric choice uniquely maximizes the radius under the constraint on the sum of chosen real arguments.</>,
      },
      {
        term: "Appended factor equal to 1",
        definition: <>The additional parameter pair β<sub>M</sub>=0 and α<sub>M</sub>=1 contributes μ<sup>−q</sup>(μ<sup>q</sup>−0)=1. It changes the factor count but not the numerical value of the product.</>,
        example: <>This is analogous to appending a factor 1 to an ordinary product: the expression is unchanged, but it is now represented with one more factor.</>,
      },
      {
        term: "Bounds for chosen factor arguments",
        definition: <>Topic X’s strict-convexity inequality applies because every chosen factor argument belongs to [<i>A</i>,<i>M</i><sub>*</sub>), preventing hidden additions of 2π.</>,
      },
      {
        term: "Chosen real argument",
        definition: <>An ordinary complex argument is determined only modulo 2π. Here one continuous real-valued representative <i>u</i> is chosen, so the proof can add arguments as real numbers and record the winding integer explicitly.</>,
      },
      {
        term: "Varying-parameter product",
        definition: <>A product in which the factor parameters β<sub>j</sub> are allowed to differ. The constant-parameter case has β<sub>1</sub>=⋯=β<sub>M</sub>.</>,
      },
      {
        term: "Scalar residual",
        definition: <>The left side minus the right side of the scalar radius equation. It is strictly increasing in the positive radius, so a negative value means that the tested radius lies below the unique equality radius.</>,
      },
    ],
    intuition: <>Keep the old constant-parameter product, append one factor equal to 1, and reinterpret the result as an order-<i>n</i> varying-parameter product. Because the new parameter list contains both β and 0, it is not constant. Topic X’s strict inequality therefore says that making the <i>M</i> factors constant must move the candidate radius outward.</>,
    figure: <NestingFigure kind="padding" />,
    proofSteps: [
      {
        title: "Choose a common orientation",
        explanation: <>If necessary, conjugate the point and reflect the cell so that the smaller denominator <i>q</i> is on the left. This changes no modulus or scalar equation and makes the positive angular gaps <i>A</i> and <i>B</i><sub>m</sub> agree with Topic X’s sign conventions.</>,
      },
      {
        title: "Recover the old factor argument",
        explanation: <>The scalar formulas for α and β resolve μ<sup>q</sup>−β into modulus times e<sup>i(A+Bₘ)</sup>. Thus every old factor has the same chosen real argument <i>A+B</i><sub>m</sub>; the old equality for their sum follows by direct substitution rather than being assumed.</>,
      },
      {
        title: "Append exactly one identity factor",
        explanation: <>Set β<sub>M</sub>=0, α<sub>M</sub>=1, and <i>u</i><sub>M</sub>=<i>A</i>. Multiplying the old product by μ<sup>−q</sup>(μ<sup>q</sup>−0)=1 changes the exponent from <i>s−mq</i> to <i>s−Mq</i> and produces the order-<i>n</i> product exactly.</>,
      },
      {
        title: "Check the equality for chosen real arguments",
        explanation: <>Subtracting <i>qϑ</i> from the old real-argument sum and adding <i>A=qϑ−2πp</i> changes the integer winding from <i>r−mp</i> to <i>r−Mp</i>. This proves the new equality with no untracked multiple of 2π.</>,
      },
      {
        title: "Keep every factor in the permitted interval",
        explanation: <>For 0&lt;β&lt;1 the map <i>t</i>↦Arg(μ<sup>q</sup>−<i>t</i>) increases strictly. The old arguments lie strictly between <i>A</i> and the interval endpoint; the new zero factor has argument exactly <i>A</i>. Hence Topic X applies to the full padded list.</>,
      },
      {
        title: "Use strictness, not merely the weak inequality",
        explanation: <>The padded list has <i>m</i> copies of β∈(0,1) and one copy of 0. It is not constant, so the scalar residual at the old radius is strictly negative. Since the new residual is strictly increasing and vanishes at the new candidate, the old radius is strictly smaller.</>,
      },
    ],
    takeaway: <>If only the multiplicity rises, the candidate radius rises strictly on every open ray even though the Farey endpoints do not change.</>,
    provenance: "New result",
    sourceIds: ["ito-1997"],
    sourceRelation: <>Ito’s polynomial family supplies the constant-parameter candidate curve. Appending the zero parameter and using the manuscript’s sharp varying-parameter inequality to prove strict order growth is new here.</>,
  },
] as const;

const partBResults: readonly ProofResultData[] = [
  {
    id: "topic-xii-refinement-split",
    label: "Lemma II.8.3",
    kind: "Lemma",
    title: "Exhaustive order-refinement split",
    purpose: "Prove that inherited endpoints, new endpoints, unchanged cells, and mediant-split cells are the only possible comparisons between consecutive orders.",
    manuscriptHtml: exactResult("karp:lem:nesting-case-split"),
    vocabulary: [
      {
        term: "Inherited endpoint",
        definition: <>A reduced fraction already present in <i>F</i><sub>n−1</sub>; it remains an endpoint in <i>F</i><sub>n</sub>.</>,
      },
      {
        term: "Newly inserted endpoint",
        definition: <>A reduced fraction that enters for the first time at order <i>n</i>. Its reduced denominator must be exactly <i>n</i>.</>,
      },
      {
        term: "Split cell",
        definition: <>An interval between consecutive fractions of <i>F</i><sub>n−1</sub> that contains a newly inserted order-<i>n</i> fraction and therefore becomes two smaller cells.</>,
      },
      {
        term: "Exhaustive cases",
        definition: <>Cases that are mutually exclusive and collectively exhaustive: every permitted ray belongs to exactly one listed case, and no further alternative remains.</>,
      },
      {
        term: "Primitive integer vector",
        definition: <>An integer pair whose coordinates have greatest common divisor 1. A reduced fraction <i>h/n</i> corresponds to the primitive vector (<i>n,h</i>).</>,
      },
      {
        term: "Determinant-one lattice basis",
        definition: <>If <i>bc−ad=1</i>, then the integer vectors (<i>b,a</i>) and (<i>d,c</i>) form a basis of the integer lattice: every integer vector has unique integer coordinates in that basis. A vector whose slope lies strictly between their slopes has positive coordinates.</>,
      },
    ],
    intuition: <>A single step from denominator bound <i>n−1</i> to <i>n</i> can admit only fractions whose reduced denominator is exactly <i>n</i>. Between old neighbours the determinant-one lattice decomposition forces such a fraction, if present, to be their mediant. Everything else is either an endpoint or remains inside an unchanged cell.</>,
    figure: <NestingFigure kind="mediant" />,
    proofSteps: [
      {
        title: "Identify what can be new",
        explanation: <>Every fraction of denominator at most <i>n−1</i> was already eligible. Therefore a point of <i>F</i><sub>n</sub>\<i>F</i><sub>n−1</sub> has reduced denominator exactly <i>n</i>.</>,
      },
      {
        title: "Place a new fraction between old neighbours",
        explanation: <>For old neighbours <i>a/b&lt;c/d</i>, Farey adjacency gives <i>bc−ad=1</i>. The determinant-one basis writes the primitive vector (<i>n,h</i>) of an inserted fraction as <i>m(b,a)+ℓ(d,c)</i> with positive integers <i>m,ℓ</i>.</>,
      },
      {
        title: "Squeeze the denominator sum",
        explanation: <>The decomposition gives <i>n=mb+ℓd≥b+d</i>, while old adjacency at order <i>n−1</i> gives <i>b+d≥n</i>. Equality holds throughout, forcing <i>m=ℓ=1</i> and <i>h/n=(a+c)/(b+d)</i>.</>,
      },
      {
        title: "Classify the ray itself",
        explanation: <>A ray is either an old endpoint, a new endpoint, or an interior ray. An interior ray lies in an old cell, which is either split by the unique mediant or unchanged.</>,
      },
      {
        title: "Audit the unchanged multiplicity",
        explanation: <>For a fixed smaller denominator <i>q</i>, increasing the numerator of ⌊·/<i>q</i>⌋ by one changes the floor by either zero or one—never more. This completes case (iii).</>,
      },
    ],
    takeaway: <>The two local comparisons from Part A cover every open-ray change; endpoint rays require only their defining value 1.</>,
    provenance: "Classical result",
    sourceIds: ["standard-farey"],
    sourceRelation: <>The determinant-one and mediant refinement properties are classical Farey arithmetic. The exhaustive four-case classification is the manuscript’s explicit organization of those standard facts for the nesting proof.</>,
  },
  {
    id: "topic-xii-candidate-nesting",
    label: "Theorem II.8.4",
    kind: "Theorem",
    title: "Candidate nesting",
    purpose: "Assemble all local comparisons into the global inequality Kₙ₋₁(θ)≤Kₙ(θ) on every ray.",
    manuscriptHtml: exactResult("karp:thm:candidate-nesting"),
    vocabulary: [
      {
        term: "Candidate outer radius Kₙ(θ)",
        definition: <>On an open Farey-cell ray it is the unique scalar equality radius from Topic IX. At every Farey endpoint below π, and separately at θ=π, it is defined to be 1.</>,
      },
      {
        term: "Order-n scalar residual Fₙ,θ(t)",
        definition: <>The left side of the order-<i>n</i> scalar radius equation minus its right side, evaluated at a test radius <i>t</i>. Formula (II.8.22) shows that its derivative is positive for <i>t&gt;0</i>.</>,
        example: <>If F<sub>n,θ</sub>(0.8)&lt;0 and its unique zero is 0.9, strict increase certifies 0.8&lt;0.9 without solving the equation again.</>,
      },
      {
        term: "Conjugation symmetry",
        definition: <>Reflecting a complex number across the real axis changes θ to −θ but preserves its modulus. Thus a radius comparison in the upper half-plane automatically gives the lower-half-plane comparison.</>,
      },
    ],
    intuition: <>Instead of comparing two complicated curves directly, insert the old radius into the new scalar equation. The exhaustive four-case classification shows that the new residual there is always nonpositive. Because the new residual increases strictly and crosses zero exactly once, its zero must lie at or to the right of the old radius.</>,
    figure: <NestingFigure kind="defect" />,
    proofSteps: [
      {
        title: "Turn the new candidate into a unique zero",
        explanation: <>For a fixed open ray, define F<sub>n,θ</sub>(<i>t</i>) from the order-<i>n</i> scalar equation. The two sine coefficients and both exponents are positive, so the displayed derivative is positive for every <i>t&gt;0</i>. Topic IX identifies <i>K</i><sub>n</sub>(θ) as its unique zero.</>,
      },
      {
        title: "Test the old radius in an unchanged parameter case",
        explanation: <>If neither the cell nor its multiplicity changes, the scalar equation is literally the same. Hence the new residual at ρ<sub>−</sub>=<i>K</i><sub>n−1</sub>(θ) equals zero.</>,
      },
      {
        title: "Test the old radius after multiplicity padding",
        explanation: <>If the cell stays fixed but the multiplicity increases, Lemma II.8.2 gives the strict sign F<sub>n,θ</sub>(ρ<sub>−</sub>)&lt;0.</>,
      },
      {
        title: "Test the old radius in a mediant-split cell",
        explanation: <>Lemma II.8.1 makes the reciprocal chord’s intercept <i>I</i><sub>R</sub> exceed 1. Identity (II.8.23) expresses <i>I</i><sub>R</sub>−1 as a positive factor times −F<sub>n,θ</sub>(ρ<sub>−</sub>), so the residual is again strictly negative.</>,
      },
      {
        title: "Read the sign against the unique zero",
        explanation: <>All interior cases give F<sub>n,θ</sub>(ρ<sub>−</sub>)≤0. Strict increase and F<sub>n,θ</sub>(<i>K</i><sub>n</sub>)=0 force ρ<sub>−</sub>≤<i>K</i><sub>n</sub>. The inequality is strict exactly in the split or increased-multiplicity cases.</>,
      },
      {
        title: "Restore every endpoint",
        explanation: <>At a new endpoint the new value is 1 while the old ray was interior and had radius below 1. At an inherited endpoint both values are 1. The separate convention <i>K</i><sub>n</sub>(π)=1 handles the order-three terminal jump when comparing orders three and four.</>,
      },
      {
        title: "Reflect to the lower half-plane",
        explanation: <>Complex conjugation preserves every modulus and completes the full-circle statement.</>,
      },
    ],
    takeaway: <>The candidate regions grow with the matrix order. Topic XIII can therefore compare an inherited stochastic extremum with the new order’s candidate on the same ray.</>,
    provenance: "New result",
    sourceIds: ["karpelevic-1951", "ito-1997"],
    sourceRelation: <>Karpelevič’s theorem implies nesting only after the full regions have been identified. This manuscript proves candidate nesting directly, before invoking the final theorem, so it can serve inside the induction.</>,
  },
] as const;

export function TopicXIIAContent() {
  return (
    <>
      <ProofDependencyContract
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
        provedHere={<p>Lemma II.8.1 handles a newly split Farey interval in both denominator orientations. Lemma II.8.2 handles an unchanged interval whose multiplicity rises. Together they provide every nontrivial comparison at a prescribed argument needed in Part B.</p>}
      />

      <section className="topic-i-textbook proof-chapter-group">
        <header>
          <div>
            <p className="section-label">The comparison language</p>
            <h3>Why reciprocal chords can compare radii</h3>
          </div>
          <div>
            <p>On a fixed ray, a smaller original radius means a larger reciprocal radius. The old candidate becomes a reciprocal chord through 1. Both lemmas ask where the new reciprocal chord crosses the same positive real axis.</p>
          </div>
        </header>
        <div className="proof-chapter-reading-note">
          <p><strong>A notational warning.</strong> In Lemma II.8.1, <i>d</i> is the denominator in the endpoint <i>c/d</i>, while the old multiplicity is called <i>m</i>. In Lemma II.8.2, the old and new multiplicities are called <i>m</i> and <i>M=m+1</i>. These are roles, not interchangeable symbols.</p>
          <p>
            <strong>The log-radial function is explicit.</strong> Let <i>L</i> be a line not through the origin. On an interval of directions for which the ray
            {" "}<span>{"{"}<i>re</i><sup>iφ</sup>:<i>r</i>&gt;0{"}"}</span> meets <i>L</i>, call that intersection radius <i>r</i>(φ) and put ℓ(φ)=log <i>r</i>(φ). For constants <i>c</i> and φ<sub>0</sub>,
            {" "}<span className="math-inline" id="karp:eq:log-line">ℓ(φ)=<i>c</i>−log cos(φ−φ<sub>0</sub>) and ℓ″(φ)=sec²(φ−φ<sub>0</sub>)&gt;0.</span>
            {" "}Here sec <i>u</i>=1/cos <i>u</i>.
            {" "}This is equation (II.8.1), and it proves that ℓ′ is strictly increasing on the interval used below.
          </p>
          <p>
            <strong>The sign convention is fixed algebraically.</strong> For
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
        number="Part A · Two local mechanisms"
        title="Every nontrivial refinement moves the candidate outward"
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
        imported={[
          ...commonImports,
          {
            label: "Topic XII-A · The two local expansion mechanisms",
            href: sitePath("/proof/topic-xii/a/"),
            explanation: <>supplies the strict reciprocal-chord comparison for a mediant split and the strict scalar-residual sign for a multiplicity increase.</>,
          },
        ]}
        background={[
          {
            label: "Classical Farey refinement",
            explanation: <>a newly admitted reduced fraction has denominator exactly <i>n</i>, and a split between determinant-one neighbours occurs at their mediant.</>,
          },
          {
            label: "Monotone zero comparison",
            explanation: <>if a strictly increasing function is nonpositive at <i>a</i> and vanishes at <i>b</i>, then <i>a≤b</i>.</>,
          },
        ]}
        provedHere={<p>Lemma II.8.3 proves that the Farey refinement case split is exhaustive. Theorem II.8.4 applies one scalar sign test in every case and obtains the global candidate-nesting inequality.</p>}
      />

      <section className="topic-i-textbook proof-chapter-group" aria-labelledby="candidate-radius-heading">
        <header>
          <div>
            <p className="section-label">Definition before the results</p>
            <h3 id="candidate-radius-heading">The candidate outer radius Kₙ</h3>
          </div>
          <div>
            <p>This is a candidate until Topic XIII identifies it with the actual stochastic radius.</p>
          </div>
        </header>
        <div className="proof-chapter-reading-note">
          <p><strong>Open-cell rays.</strong> If <i>x=θ/(2π)</i> lies strictly between two consecutive fractions of <i>F</i><sub>n</sub><sup>+</sup>, set <i>K</i><sub>n</sub>(θ) equal to Topic IX’s unique scalar equality radius.</p>
          <p><strong>Farey endpoint rays.</strong> Set <i>K</i><sub>n</sub>(θ)=1 at every Farey endpoint below π, and define <span id="karp:eq:Kn-pi-definition"><i>K</i><sub>n</sub>(π)=1</span> separately. This separate terminal convention matters at order three: the nonreal arc approaches radius 1/2 as θ↑π, while the actual outer endpoint on that ray is −1 and has radius 1.</p>
          <p><strong>No conclusion is hidden in the name.</strong> “Outer” describes which candidate value is selected on a ray. It does not yet assert that the candidate is the boundary of Θ<sub>n</sub>.</p>
        </div>
      </section>

      <ProofResultGroup
        number="Part B · Exhaustion and assembly"
        title="From two local signs to one global nesting theorem"
        introduction={<p>The case split first proves that every ray is accounted for. The theorem then evaluates the new scalar residual at the old candidate and reads the sign against a unique zero.</p>}
        results={partBResults}
      />
    </>
  );
}
