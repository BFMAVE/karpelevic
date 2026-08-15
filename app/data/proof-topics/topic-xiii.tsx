import { ProofDependencyContract } from "../../components/proof/ProofDependencyContract";
import { ProofResultGroup } from "../../components/proof/ProofResultGroup";
import type { ProofResultData } from "../../components/proof/ProofResult";
import { CompletionFigure } from "../../components/proof/figures/CompletionFigures";
import {
  partIIHtmlByLabel,
  partIIMainTheoremProofHtml,
  partIIProofHtmlByLabel,
} from "../part-ii-content.generated";
import { sitePath } from "../../lib/site-path";

const crossTopicAnchors: Readonly<Record<string, string>> = {
  "karp:thm:sparse-realization": sitePath("/proof/topic-xi/#karp:thm:sparse-realization"),
  "karp:eq:endpoint-labels": sitePath("/proof/topic-ix/#topic-ix-ito-family"),
  "karp:eq:A-B-absolute": sitePath("/proof/topic-ix/#topic-ix-scalar-ray"),
  "karp:eq:scalar-radius": sitePath("/proof/topic-ix/#karp:eq:scalar-radius"),
  "karp:eq:alpha-beta-ray": sitePath("/proof/topic-ix/#karp:eq:alpha-beta-ray"),
  "karp:eq:Ito-carrier": sitePath("/proof/topic-ix/#karp:eq:Ito-carrier"),
  "karp:prop:scalar-ray": sitePath("/proof/topic-ix/#karp:prop:scalar-ray"),
  "karp:prop:scalar-continuity": sitePath("/proof/topic-ix/#karp:prop:scalar-continuity"),
  "karp:def:carrier": sitePath("/proof/topic-ix/#karp:def:carrier"),
  "karp:cor:attainment": sitePath("/proof/topic-xi/#karp:cor:attainment"),
  "karp:prop:unit-circle": sitePath("/proof/topic-viii/#karp:prop:unit-circle"),
  "karp:eq:new-shell": sitePath("/proof/topic-viii/#topic-viii-new-shell-critical"),
  "karp:cor:equal-profile": sitePath("/proof/topic-xi/#karp:cor:equal-profile"),
  "karp:thm:candidate-nesting": sitePath("/proof/topic-xii/b/#karp:thm:candidate-nesting"),
  "karp:prop:compact": sitePath("/proof/topic-viii/#karp:prop:compact"),
  "karp:cor:radial-filling": sitePath("/proof/topic-viii/#karp:cor:radial-filling"),
};

function relinkCrossTopicReferences(html: string): string {
  let linked = html;
  for (const [anchor, href] of Object.entries(crossTopicAnchors)) {
    linked = linked.replaceAll(`href="#${anchor}"`, `href="${href}"`);
  }
  return linked;
}

function exactResult(label: keyof typeof partIIProofHtmlByLabel): string {
  return relinkCrossTopicReferences(
    partIIHtmlByLabel[label] + partIIProofHtmlByLabel[label],
  );
}

const radialLemma: ProofResultData = {
  id: "topic-xiii-radial-boundary",
  label: "Lemma II.9.1",
  kind: "Lemma",
  title: "Compact radial sets with continuous radius",
  purpose: "Bridge the last logical gap: prove that the outer point on every ray is the complete topological boundary, not merely a collection of radial maxima.",
  manuscriptHtml: exactResult("karp:lem:continuous-radial-boundary"),
  vocabulary: [
    {
      term: "Radially filled",
      definition: <>A set <i>S</i> is radially filled when <i>z∈S</i> and 0≤<i>t</i>≤1 imply <i>tz∈S</i>. Every attained point brings the entire segment from 0 to that point with it.</>,
      example: <>A closed disk centred at 0 is radially filled. An annulus is not, because points near its outer circle do not bring the missing segment near 0.</>,
    },
    {
      term: "Radial maximum rₛ(φ)",
      definition: <>The largest radius <i>r</i> for which <i>re</i><sup>iφ</sup> lies in <i>S</i>. Compactness makes the maximum attainable rather than merely a supremum.</>,
    },
    {
      term: "Topological boundary ∂S",
      definition: <>The points for which every sufficiently small open disk meets both <i>S</i> and its complement. Because <i>S</i> is compact and therefore closed, this is also <i>S</i> minus its Euclidean interior in the whole plane ℂ≅ℝ²—not a relative interior inside a line or curve.</>,
    },
    {
      term: "Continuous on the circle",
      definition: <>Nearby directions have nearby radial maxima, including across the identification of the angles −π and π. This prevents cracks or jumps between neighbouring ray segments.</>,
    },
    {
      term: "Positive radial maximum",
      definition: <>The assumption <i>r</i><sub>S</sub>(φ)&gt;0 for every direction. By continuity on the compact circle it then has a positive minimum, so <i>S</i> contains a small disk about the origin.</>,
    },
    {
      term: "Euclidean open disk",
      definition: <>For a centre <i>z</i> and radius ε&gt;0, the points <i>w</i> satisfying |<i>w−z</i>|&lt;ε. A point is interior precisely when some such disk around it lies in the set.</>,
    },
    {
      term: "Extreme value theorem",
      definition: <>A continuous real-valued function on a compact set attains both a minimum and a maximum. Applied to the circle, it turns pointwise positivity of <i>r</i><sub>S</sub> into one uniform positive lower bound.</>,
    },
  ],
  intuition: <>Radial filling settles each individual ray, but topology also sees nearby directions. Continuity supplies that transverse control: a point strictly below the graph has room both radially and angularly, so it lies inside a small disk contained in <i>S</i>. An outer endpoint has no such disk because moving slightly farther along its ray leaves <i>S</i>.</>,
  figure: <CompletionFigure kind="radial-boundary" />,
  proofSteps: [
    {
      title: "Describe every ray section exactly",
      explanation: <>Compactness attains <i>r</i><sub>S</sub>(φ), and radial filling contains every smaller radius. Maximality excludes every larger radius. Thus the intersection with one ray is precisely the closed segment from 0 to the displayed outer point.</>,
    },
    {
      title: "Exclude an outer point from the interior",
      explanation: <>Every open disk around <i>r</i><sub>S</sub>(φ)<i>e</i><sup>iφ</sup> contains a point obtained by moving a little farther outward on the same ray. That point contradicts maximality and lies outside <i>S</i>.</>,
    },
    {
      title: "Give a strictly shorter point radial room",
      explanation: <>For <i>z=re</i><sup>iφ</sup> with 0&lt;<i>r&lt;r</i><sub>S</sub>(φ), choose η&gt;0 so that <i>r+3η&lt;r</i><sub>S</sub>(φ). The extra factors of η create a margin that survives small changes of direction and small Euclidean displacement.</>,
    },
    {
      title: "Use continuity for angular room",
      explanation: <>For ψ near φ, continuity gives <i>r</i><sub>S</sub>(ψ)&gt;<i>r+2η</i>. A sufficiently small Euclidean disk about <i>z</i> consists of points with such nearby arguments and modulus below <i>r+η</i>, hence lies entirely in <i>S</i>.</>,
    },
    {
      title: "Handle the origin",
      explanation: <>A positive continuous function on a compact circle has a positive minimum <i>c</i>. Every direction contains its radial segment to at least <i>c</i>, so the disk |<i>z</i>|&lt;<i>c</i> lies in <i>S</i> and 0 is interior.</>,
    },
    {
      title: "Exhaust the boundary",
      explanation: <>Every strictly shorter point is interior; every radial maximum is not interior; every point of <i>S</i> lies on one of the ray segments. No further boundary point remains.</>,
    },
  ],
  takeaway: <>Once the actual radius is known continuously on every ray, the outer radial graph is automatically the full topological boundary and its radial hull is the whole set.</>,
  provenance: "Classical result",
  sourceIds: ["standard-convexity"],
  sourceRelation: <>This is a standard polar-coordinate fact for compact star-shaped planar sets. The manuscript states and proves the precise version needed here.</>,
};

const smallOrders: ProofResultData = {
  id: "topic-xiii-small-orders",
  label: "Proposition II.9.2",
  kind: "Proposition",
  title: "Orders one, two, and three",
  purpose: "Prove the induction base directly, including the exceptional real segment that makes order three unlike every later order.",
  manuscriptHtml: exactResult("karp:prop:small-orders"),
  vocabulary: [
    {
      term: "Actual outer radius Rₙ(θ)",
      definition: <>The largest radius ρ for which ρ<i>e</i><sup>iθ</sup> belongs to the stochastic eigenvalue region Θ<sub>n</sub>. Topic VIII proves that this maximum is attained.</>,
    },
    {
      term: "Candidate outer radius Kₙ(θ)",
      definition: <>Topic XII&apos;s notation for the scalar Farey–Ito radius on an open cell, with value 1 on endpoint rays. It is still only a candidate until the induction below identifies it with <i>R</i><sub>n</sub>.</>,
    },
    {
      term: "Trace tr(A)",
      definition: <>The sum of the diagonal entries of <i>A</i>. It also equals the sum of the eigenvalues, counted with algebraic multiplicity.</>,
    },
    {
      term: "Two elementary spectral facts used here",
      definition: <>A row-stochastic matrix has eigenvalue 1 because it fixes the all-ones column vector. A real matrix has its nonreal eigenvalues in conjugate pairs, so an order-three spectrum containing λ=<i>x+iy</i> also contains λ̄=<i>x−iy</i>.</>,
    },
    {
      term: "Trace of A²",
      definition: <>It equals the sum of the squares of the eigenvalues, again with algebraic multiplicity. For the spectrum 1,λ,λ̄ this gives tr(<i>A</i>²)=1+2(<i>x</i>²−<i>y</i>²).</>,
    },
    {
      term: "Cauchy–Schwarz in the form used",
      definition: <>For three real numbers <i>u</i><sub>1</sub>,<i>u</i><sub>2</sub>,<i>u</i><sub>3</sub>, one has (<i>u</i><sub>1</sub>+<i>u</i><sub>2</sub>+<i>u</i><sub>3</sub>)²≤3(<i>u</i><sub>1</sub>²+<i>u</i><sub>2</sub>²+<i>u</i><sub>3</sub>²). The proof applies this to the three diagonal entries.</>,
    },
    {
      term: "Cyclic permutation matrix C₃",
      definition: <>The row-stochastic matrix that sends state 1 to 2, 2 to 3, and 3 back to 1. Its eigenvalues are 1, ω, and ω̄, where ω=<i>e</i><sup>2πi/3</sup>.</>,
    },
    {
      term: "Convex hull conv{1,ω,ω̄}",
      definition: <>The filled triangle consisting of all nonnegative weighted averages of the three displayed vertices with weights summing to one.</>,
    },
    {
      term: "Terminal cell",
      definition: <>The last upper Farey interval [1/3,1/2]. Its nonreal carrier approaches −1/2 rather than the endpoint root −1, so the real segment [−1,−1/2] must be included separately.</>,
    },
    {
      term: "Characteristic polynomial",
      definition: <>det(<i>tI−A</i>). Its roots, with multiplicity, are exactly the eigenvalues of <i>A</i>.</>,
    },
  ],
  intuition: <>Orders one and two are elementary. At order three, trace inequalities trap every nonreal eigenvalue inside an equilateral triangle. Two explicit stochastic families attain the triangle’s boundary and the extra negative-real segment. Matching those pieces to the scalar carrier proves exactly the base identity the order-four induction will use.</>,
  figure: <CompletionFigure kind="order-three" />,
  proofSteps: [
    {
      title: "Compute orders one and two",
      explanation: <>The sole 1×1 row-stochastic matrix is [1]. A 2×2 row-stochastic matrix has rows (<i>a</i>,1−<i>a</i>) and (<i>b</i>,1−<i>b</i>); besides eigenvalue 1, its other eigenvalue is <i>a−b</i>, which runs through [−1,1].</>,
    },
    {
      title: "Parameterize a nonreal order-three spectrum",
      explanation: <>A real 3×3 matrix with one nonreal eigenvalue λ=<i>x+iy</i> also has λ̄. Row-stochasticity supplies the third eigenvalue 1. Nonnegative diagonal entries give tr(<i>A</i>)=1+2<i>x≥0</i>, hence <i>x≥−1/2</i>.</>,
    },
    {
      title: "Derive the triangular slope bounds",
      explanation: <>Cauchy–Schwarz gives (tr <i>A</i>)²≤3∑<i>a</i><sub>ii</sub>². Nonnegativity gives ∑<i>a</i><sub>ii</sub>²≤tr(<i>A</i>²), because the remaining terms <i>a</i><sub>ij</sub><i>a</i><sub>ji</sub> are nonnegative. Substituting the eigenvalue expressions yields 3<i>y</i>²≤(1−<i>x</i>)², the other two sides of the triangle.</>,
    },
    {
      title: "Attain the first two triangular sides",
      explanation: <>The convex matrix family (1−α)<i>I+αC</i><sub>3</sub> has eigenvalue (1−α)+αω, which runs along the chord [1,ω]. Real matrices give the conjugate chord [1,ω̄]. Radial filling supplies every point between these boundary chords and 0.</>,
    },
    {
      title: "Attain the terminal arc and real segment",
      explanation: <>Topic XI’s terminal sparse matrix has characteristic factor λ²+λ+α. For 0≤α≤1/4 its lower real root runs from −1 to −1/2. For 1/4&lt;α≤1 the upper root has real part −1/2 and rises to ω; conjugation supplies the lower branch.</>,
    },
    {
      title: "Identify the first scalar carrier",
      explanation: <>On [0,1/3], the cell data reduce the scalar equation to the ray equation for the straight chord β+αω. Its argument increases strictly with α, so each open ray meets it once and Topic IX’s unique radius must be that chord radius.</>,
    },
    {
      title: "Identify the terminal scalar carrier",
      explanation: <>On [1/3,1/2], the scalar equation is equivalent to λ(λ²−β)=α. Along λ=−1/2+<i>iy</i>, the argument decreases strictly from π to 2π/3 as <i>y</i> rises, so again every open ray is met exactly once. The real interval is an endpoint-ray addition, not part of that open-cell branch.</>,
    },
    {
      title: "Record the exact induction base",
      explanation: <>The upper bounds and realizations coincide, and the endpoint convention gives radius 1 at 1, ω, and −1. Therefore the actual and candidate outer radii agree for every upper direction at order three, including the jump at θ=π.</>,
    },
  ],
  takeaway: <>The theorem is completely proved for <i>n≤3</i>, and the exact equality <i>R</i><sub>3</sub>=<i>K</i><sub>3</sub> is ready for the induction step.</>,
  provenance: "Previously known",
  sourceIds: ["dmitriev-dynkin-1946", "karpelevic-1951", "ito-1997"],
  sourceRelation: <>The small stochastic regions and the exceptional order-three carrier belong to the classical theory. The proposition includes the direct calculation needed by this manuscript’s induction.</>,
};

const mainTheorem: ProofResultData = {
  id: "topic-xiii-main-theorem",
  label: "Theorem II.3.1",
  kind: "Theorem",
  title: "Karpelevič–Ito, standalone form",
  purpose: "Identify every boundary arc, the complete radially filled region, and all unit-circle points for every matrix order.",
  manuscriptHtml: relinkCrossTopicReferences(
    partIIHtmlByLabel["karp:thm:main"] + partIIMainTheoremProofHtml,
  ),
  vocabulary: [
    {
      term: "Actual outer radius Rₙ(θ)",
      definition: <>The largest ρ for which ρ<i>e</i><sup>iθ</sup> is an eigenvalue of some <i>n×n</i> row-stochastic matrix. Compactness of Θ<sub>n</sub> makes this largest value attainable.</>,
    },
    {
      term: "Candidate radius Kₙ(θ)",
      definition: <>The Farey–Ito scalar radius constructed in Topic IX and compared across orders in Topic XII. Before this theorem it is known to be attained, but has not yet been proved to exclude every farther stochastic eigenvalue on inherited rays.</>,
    },
    {
      term: "Natural order embedding",
      definition: <>Given an (<i>n−1</i>)×(<i>n−1</i>) row-stochastic matrix <i>A</i>, the block diagonal matrix <i>A⊕[1]</i> is row-stochastic of order <i>n</i> and retains every eigenvalue of <i>A</i>. Hence Θ<sub>n−1</sub>⊆Θ<sub>n</sub>.</>,
    },
    {
      term: "New-shell versus inherited",
      definition: <>An order-<i>n</i> outer point is new-shell if it is not in Θ<sub>n−1</sub>; it is inherited if it does belong to Θ<sub>n−1</sub>. These alternatives are exhaustive.</>,
    },
    {
      term: "Ordered carrier chain",
      definition: <>The continuous concatenation of the cellwise curves Γ<sub>f,g</sub><sup>(n)</sup> in increasing Farey order, beginning at 1 and ending at −1 in the upper half-plane.</>,
    },
    {
      term: "Radial hull of the boundary",
      definition: <>All points obtained by joining the origin to every boundary point: if ζ lies on the boundary, include <i>t</i>ζ for every 0≤<i>t</i>≤1. The theorem proves that this radial hull is exactly Θ<sub>n</sub>.</>,
    },
    {
      term: "Induction on n",
      definition: <>Prove the statement directly at the base orders, then assume it for <i>n−1</i> and use that assumption to prove it for <i>n</i>.</>,
    },
  ],
  intuition: <>Fix one direction. Attainment puts the candidate no farther out than the actual maximum. If the actual maximum is new, the critical-polygon inequality identifies it with the candidate. If it is inherited, the order embedding and induction identify it with the old candidate, while candidate nesting and attainment squeeze the new candidate to that same number. Once this equality is known on every ray, continuity turns the radial graph into the topological boundary.</>,
  figure: <CompletionFigure kind="induction" />,
  proofSteps: [
    {
      title: "Start from the direct base orders",
      explanation: <>Proposition II.9.2 proves <i>n=1,2,3</i>, including the exceptional order-three terminal segment. The induction may therefore begin at <i>n=4</i>.</>,
    },
    {
      title: "Embed the previous stochastic region",
      explanation: <>Padding <i>A</i> by a one-state absorbing block proves Θ<sub>n−1</sub>⊆Θ<sub>n</sub>, and hence <i>R</i><sub>n−1</sub>(θ)≤<i>R</i><sub>n</sub>(θ) on every nonreal ray.</>,
    },
    {
      title: "Place the candidate below the actual maximum",
      explanation: <>Topic XI constructs an order-<i>n</i> stochastic matrix with eigenvalue <i>K</i><sub>n</sub>(θ)<i>e</i><sup>iθ</sup>. Thus 0&lt;<i>K</i><sub>n</sub>(θ)≤<i>R</i><sub>n</sub>(θ). On an open cell the unit direction is not a root of unity of permitted order, so Topic VIII’s unit-circle result also gives <i>R</i><sub>n</sub>(θ)&lt;1.</>,
    },
    {
      title: "Resolve the new-shell branch",
      explanation: <>At this induction stage <i>n</i>≥4. If the actual outer point is absent from Θ<sub>n−1</sub>, it satisfies the exact new-shell hypotheses, so the N≥4 critical-polygon machinery applies. Topic XI’s equality-profile corollary says its modulus is the unique scalar equality radius on this ray, namely <i>K</i><sub>n</sub>(θ).</>,
    },
    {
      title: "Freeze the inherited branch",
      explanation: <>If the point belongs to Θ<sub>n−1</sub>, its modulus is at most <i>R</i><sub>n−1</sub>(θ). The order embedding gives the reverse inequality, so <i>R</i><sub>n</sub>=<i>R</i><sub>n−1</sub>. The induction hypothesis changes this common value to <i>K</i><sub>n−1</sub>.</>,
    },
    {
      title: "Close the inherited squeeze",
      explanation: <>Topic XII gives <i>K</i><sub>n−1</sub>≤<i>K</i><sub>n</sub>; Topic XI’s attainment gives <i>K</i><sub>n</sub>≤<i>R</i><sub>n</sub>. Combined with <i>R</i><sub>n</sub>=<i>K</i><sub>n−1</sub>, both inequalities are equalities.</>,
    },
    {
      title: "Restore the Farey endpoint rays",
      explanation: <>At an endpoint <i>p/q</i> with <i>q≤n</i>, the order-<i>q</i> cyclic permutation matrix realizes <i>e</i><sup>2πip/q</sup>; absorbing-state padding reaches order <i>n</i>. The unit-disk bound prevents a larger radius, so both actual and candidate radii equal 1.</>,
    },
    {
      title: "Assemble the upper and lower carrier chains",
      explanation: <>Topic IX’s endpoint continuity joins the open-cell graphs from 1 to −1. Equality <i>R</i><sub>n</sub>=<i>K</i><sub>n</sub> says no upper-half-plane stochastic eigenvalue lies beyond that chain. Real coefficients supply its complex-conjugate lower chain.</>,
    },
    {
      title: "Pass from outer points to the topological boundary",
      explanation: <>Reflect <i>K</i><sub>n</sub> to a positive continuous full-circle radial maximum. Topic VIII gives compactness and radial filling of Θ<sub>n</sub>. Lemma II.9.1 now identifies the radial graph with ∂Θ<sub>n</sub> and its radial hull with the complete set Θ<sub>n</sub>.</>,
    },
    {
      title: "Attach the unit-circle and order-three clauses",
      explanation: <>Topic VIII already classified unit-modulus points as roots of unity of order at most <i>n</i>. Proposition II.9.2 handled the only discontinuous terminal graph, so the continuous-radius lemma is never applied where its hypothesis fails.</>,
    },
  ],
  takeaway: <>The candidate carrier is now the actual boundary on every ray, its radial hull is exactly Θ<sub>n</sub>, and the Karpelevič–Ito theorem is complete.</>,
  provenance: "Classical result",
  sourceIds: ["karpelevic-1951", "ito-1997"],
  sourceRelation: <>The eigenvalue-region theorem is classical: Karpelevič proved the original form and Ito supplied the modern polynomial-arc formulation. This manuscript gives the displayed self-contained route through critical invariant polygons; the classification applies to the theorem’s statement, not to its proof.</>,
};

export function TopicXIIIContent() {
  return (
    <>
      <ProofDependencyContract
        imported={[
          {
            label: "Topic VIII · Stochastic spectra and criticality",
            href: sitePath("/proof/topic-viii/"),
            explanation: <>defines Θ<sub>n</sub> and <i>R</i><sub>n</sub>, proves compactness, conjugation symmetry, radial filling, the unit-circle classification, and the new-shell critical-polygon input.</>,
          },
          {
            label: "Topic IX · Farey–Ito candidates",
            href: sitePath("/proof/topic-ix/"),
            explanation: <>constructs the scalar candidate on each open ray, the carriers Γ<sub>f,g</sub><sup>(n)</sup>, and their endpoint continuity.</>,
          },
          {
            label: "Topic X · Sharp upper comparison",
            href: sitePath("/proof/topic-x/"),
            explanation: <>for the induction range <i>n</i>≥4, proves that every heterogeneous critical-polygon profile lies no farther out than the equal scalar profile.</>,
          },
          {
            label: "Topic XI · Attainment and the equality profile",
            href: sitePath("/proof/topic-xi/"),
            explanation: <>independently constructs a stochastic matrix attaining every candidate, then identifies a new-shell extremum with the scalar equality profile.</>,
          },
          {
            label: "Topic XII · Candidate nesting",
            href: sitePath("/proof/topic-xii/b/"),
            explanation: <>defines the packaged candidate radius <i>K</i><sub>n</sub> and proves <i>K</i><sub>n−1</sub>(θ)≤<i>K</i><sub>n</sub>(θ), the comparison that closes the inherited branch.</>,
          },
        ]}
        background={[
          {
            label: "Elementary induction and compact-set topology",
            explanation: <>the required forms are defined at first use and the compact radial-boundary lemma is proved in full below.</>,
          },
        ]}
        provedHere={<p>Lemma II.9.1 converts a continuous radial maximum into the topological boundary. Proposition II.9.2 proves the base orders. Theorem II.3.1 then closes the induction and states the complete classical region theorem.</p>}
      />

      <section className="topic-i-textbook proof-chapter-group">
        <header>
          <div>
            <p className="section-label">The final assembly map</p>
            <h3>Three tasks remain—and only three</h3>
          </div>
          <div><p>Every deep geometric and analytic estimate has already been proved. This chapter supplies one topological lemma, checks the base orders, and runs one two-branch induction.</p></div>
        </header>
        <ol className="topic-xiv-worked-steps">
          <li><span>1</span><div><h4>Topology</h4><p>Show that knowing one continuous maximum on every ray identifies the actual boundary.</p></div></li>
          <li><span>2</span><div><h4>Base cases</h4><p>Compute orders one through three directly, without appealing to the induction.</p></div></li>
          <li><span>3</span><div><h4>Induction</h4><p>On each ray, separate a genuinely new extremum from an inherited one and prove <i>R</i><sub>n</sub>=<i>K</i><sub>n</sub> in both branches.</p></div></li>
        </ol>
      </section>

      <ProofResultGroup
        number="I · The topological bridge"
        title="Outer on every ray becomes boundary everywhere"
        introduction={<p>Radial maximality is a one-dimensional statement. This lemma adds exactly the continuity needed to recover the two-dimensional topological boundary.</p>}
        results={[radialLemma]}
      />

      <ProofResultGroup
        number="II · The induction base"
        title="The exceptional small orders are computed directly"
        introduction={<p>Order three is not a cosmetic special case: its last nonreal arc ends at −1/2 while the outer point of the negative-real ray is −1.</p>}
        results={[smallOrders]}
      />

      <ProofResultGroup
        number="III · The classical theorem"
        title="Every ray, every carrier, the full boundary"
        introduction={<p>The theorem is stated with its original manuscript number from Section II.3. Its complete proof appears here only after all later ingredients have been established, matching the logical rather than the printed order.</p>}
        results={[mainTheorem]}
      />
    </>
  );
}
