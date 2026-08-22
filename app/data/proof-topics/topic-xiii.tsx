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
  "karp:thm:candidate-nesting": sitePath("/proof/topic-xii/#karp:thm:candidate-nesting"),
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

function TopicXIIISetup() {
  return (
    <section
      className="topic-i-textbook proof-chapter-group"
      aria-labelledby="topic-xiii-setup-heading"
      data-topic-xiii-setup
    >
      <header>
        <div>
          <p className="section-label">Objects fixed for the final argument</p>
          <h3 id="topic-xiii-setup-heading">Stochastic regions, Farey intervals, and radial functions</h3>
        </div>
        <div>
          <p>Topic XIII uses the following notation from Topics VIII–XII.</p>
        </div>
      </header>
      <div className="proof-chapter-reading-note">
        <p>
          <strong>Stochastic eigenvalue region.</strong> A real matrix <i>A</i>=(<i>a</i><sub>ij</sub>) is
          row-stochastic when <i>a</i><sub>ij</sub>≥0 and every row sums to 1. The set Θ<sub>n</sub> consists of all
          eigenvalues of all real <i>n</i>×<i>n</i> row-stochastic matrices.
        </p>
        <p>
          <strong>Farey intervals.</strong> <i>F</i><sub>n</sub><sup>+</sup> is the increasing list of reduced
          fractions <i>p/q</i> in [0,1/2] with <i>q</i>≤<i>n</i>. Consecutive fractions determine the open angular
          intervals used below through <i>x</i>=θ/(2π).
        </p>
        <p>
          <strong>Actual and candidate radii.</strong> For 0≤θ≤π, <i>R</i><sub>n</sub>(θ) is the largest ρ≥0 for
          which ρ<i>e</i><sup><i>iθ</i></sup>∈Θ<sub>n</sub>. On an open Farey interval, <i>K</i><sub>n</sub>(θ) is
          Topic IX&apos;s unique positive solution of the scalar radius equation; at a Farey endpoint it is defined
          to be 1. Until the theorem is proved, <i>K</i><sub>n</sub> is only a candidate for <i>R</i><sub>n</sub>.
        </p>
        <p>
          <strong>Curves.</strong> For consecutive <i>f&lt;g</i> in <i>F</i><sub>n</sub><sup>+</sup>,
          Γ<sub>f,g</sub><sup>(n)</sup> is the closure of the corresponding curve
          <i> K</i><sub>n</sub>(θ)<i>e</i><sup><i>iθ</i></sup>. At order three, the interval [1/3,1/2] additionally
          contributes the real boundary segment [−1,−1/2].
        </p>
      </div>
    </section>
  );
}

const radialLemma: ProofResultData = {
  id: "topic-xiii-radial-boundary",
  label: "Lemma II.9.1",
  kind: "Lemma",
  title: "Compact star-shaped sets with continuous radial function",
  purpose: "Prove the topological step that turns a positive continuous radial function into an exact description of the set and its boundary.",
  manuscriptHtml: exactResult("karp:lem:continuous-radial-boundary"),
  vocabulary: [
    {
      term: "Star-shaped with respect to 0",
      definition: <>A set <i>S</i> is star-shaped with respect to 0 when <i>z∈S</i> and 0≤<i>t</i>≤1 imply <i>tz∈S</i>. Every attained point brings the entire segment from 0 to that point with it.</>,
      example: <>A closed disk centred at 0 is star-shaped with respect to 0. An annulus is not, because points near its outer circle do not bring the missing segment near 0.</>,
    },
    {
      term: "Radial function ρₛ(u)",
      definition: <>For a direction <i>u</i> on the unit circle, ρ<sub>S</sub>(<i>u</i>) is the largest <i>r</i>≥0 for which <i>ru∈S</i>. Compactness makes this maximum attainable.</>,
    },
    {
      term: "Topological boundary ∂S",
      definition: <>The points for which every sufficiently small open disk meets both <i>S</i> and its complement. Because <i>S</i> is compact and therefore closed, this is also <i>S</i> minus its Euclidean interior in the whole plane ℂ≅ℝ²—not a relative interior inside a line or curve.</>,
    },
  ],
  intuition: <>Star-shapedness determines the intersection with each ray. Continuity in the direction <i>u</i> then shows that every point strictly below ρ<sub>S</sub>(<i>u</i>) has a Euclidean neighborhood inside <i>S</i>, whereas a radial endpoint cannot be interior because every outward displacement leaves <i>S</i>.</>,
  figure: <CompletionFigure kind="radial-boundary" />,
  proofSteps: [
    {
      title: "Describe every ray section exactly",
      explanation: <>For each <i>u</i>∈𝕊¹, compactness attains ρ<sub>S</sub>(<i>u</i>), star-shapedness includes every smaller radius, and maximality excludes every larger one. Hence <i>S</i>∩{"{"}<i>ru:r</i>≥0{"}"}={"{"}<i>ru</i>:0≤<i>r</i>≤ρ<sub>S</sub>(<i>u</i>){"}"}.</>,
    },
    {
      title: "Identify every strictly shorter point as interior",
      explanation: <>Let <i>z=ru</i> with 0&lt;<i>r</i>&lt;ρ<sub>S</sub>(<i>u</i>). Continuity gives a neighborhood <i>U</i> of <i>u</i> on which the radial function remains larger than <i>r</i> by a fixed margin. Continuity of the direction map <i>w↦w/|w|</i> away from 0 then gives a disk about <i>z</i> whose points have direction in <i>U</i> and modulus below the corresponding radial value. That disk lies in <i>S</i>.</>,
    },
    {
      title: "Separate the boundary endpoints from the interior",
      explanation: <>Positivity and compactness of 𝕊¹ give a uniform lower bound, so 0 is interior. Each point ρ<sub>S</sub>(<i>u</i>)<i>u</i> is not interior because a slightly larger point on the same ray is outside <i>S</i>. Since compactness makes <i>S</i> closed and every other point of <i>S</i> is interior, these radial endpoints are exactly ∂<i>S</i>.</>,
    },
  ],
  takeaway: <>Under the stated hypotheses, <i>S</i>={"{"}<i>t</i>ρ<sub>S</sub>(<i>u</i>)<i>u</i>:0≤<i>t</i>≤1, <i>u</i>∈𝕊¹{"}"} and ∂<i>S</i>={"{"}ρ<sub>S</sub>(<i>u</i>)<i>u</i>:<i>u</i>∈𝕊¹{"}"}.</>,
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
      term: "Radial functions Rₙ and Kₙ",
      definition: <><i>R</i><sub>n</sub>(θ) is the attained maximum modulus in Θ<sub>n</sub> on the ray of angle θ. The function <i>K</i><sub>n</sub>(θ) is the candidate selected by Topic IX&apos;s scalar equation and the endpoint convention.</>,
    },
    {
      term: "Trace identities",
      definition: <>For spectrum 1, λ=ξ+<i>i</i>η, and λ̄, one has tr(<i>A</i>)=1+2ξ and tr(<i>A</i>²)=1+2(ξ²−η²). Nonnegative entries and Cauchy–Schwarz imply 3η²≤(1−ξ)².</>,
    },
    {
      term: "Cyclic permutation matrix C₃",
      definition: <>The row-stochastic matrix that sends state 1 to 2, 2 to 3, and 3 back to 1. Its eigenvalues are 1, ω, and ω̄, where ω=<i>e</i><sup>2πi/3</sup>.</>,
    },
    {
      term: "Explicit matrix Mα",
      definition: <>The displayed row-stochastic matrix has characteristic polynomial (λ−1)(λ²+λ+α). Its two nontrivial roots trace the vertical sides of the triangle and the segment [−1,−1/2].</>,
    },
    {
      term: "Exceptional interval",
      definition: <>On [1/3,1/2], the nonreal root branch runs from ω to −1/2. The outer point at the endpoint ray θ=π is −1, so [−1,−1/2] is a separate real boundary segment.</>,
    },
  ],
  intuition: <>Orders one and two follow from their general matrix forms. At order three, trace inequalities place every nonreal eigenvalue in the triangle with vertices 1, ω, and ω̄. Two displayed row-stochastic matrix families attain its boundary and the additional real interval. The scalar equation then identifies the two upper nonreal boundary pieces with <i>K</i><sub>3</sub>.</>,
  figure: <CompletionFigure kind="order-three" />,
  proofSteps: [
    {
      title: "Compute orders one and two",
      explanation: <>The sole 1×1 row-stochastic matrix is [1]. A 2×2 row-stochastic matrix has rows (<i>a</i>,1−<i>a</i>) and (<i>b</i>,1−<i>b</i>); besides eigenvalue 1, its other eigenvalue is <i>a−b</i>, which runs through [−1,1].</>,
    },
    {
      title: "Parameterize a nonreal order-three spectrum",
      explanation: <>A real 3×3 matrix with λ=ξ+<i>i</i>η also has λ̄, and row-stochasticity supplies eigenvalue 1. Nonnegative diagonal entries give tr(<i>A</i>)=1+2ξ≥0, hence ξ≥−1/2. The unit-disk bound gives ξ≤1.</>,
    },
    {
      title: "Derive the triangle inequalities",
      explanation: <>Cauchy–Schwarz and entrywise nonnegativity give (tr <i>A</i>)²≤3∑<i>a</i><sub>ii</sub>²≤3 tr(<i>A</i>²). Substituting the two trace identities yields 3η²≤(1−ξ)². Together with −1/2≤ξ≤1, this is exactly the closed triangle conv{"{"}1,ω,ω̄{"}"}.</>,
    },
    {
      title: "Attain the first two triangular sides",
      explanation: <>The convex matrix family (1−α)<i>I+αC</i><sub>3</sub> has eigenvalue (1−α)+αω, which runs along the chord [1,ω]. Real matrices give the conjugate chord [1,ω̄]. Star-shapedness with respect to 0 supplies every point between these boundary chords and 0.</>,
    },
    {
      title: "Attain the remaining two sides and the real segment",
      explanation: <>For the displayed matrix <i>M</i><sub>α</sub>, det(λ<i>I−M</i><sub>α</sub>)=(λ−1)(λ²+λ+α). When 0≤α≤1/4, one real root runs from −1 to −1/2. When 1/4&lt;α≤1, its two nonreal roots run from −1/2 to ω and ω̄. The same real matrix contains both conjugate roots.</>,
    },
    {
      title: "Identify the curve on [0,1/3]",
      explanation: <>The scalar equation becomes the ray equation for the segment λ=β+αω, where α+β=1. Its argument increases strictly with α, so each ray with 0&lt;θ&lt;2π/3 meets the segment once. Topic IX&apos;s uniqueness therefore identifies its modulus with <i>K</i><sub>3</sub>(θ).</>,
    },
    {
      title: "Identify the nonreal curve on [1/3,1/2]",
      explanation: <>Here the scalar equation is equivalent to λ(λ²−β)=α. Along λ=−1/2+<i>i</i>η, the argument decreases strictly from π to 2π/3 as η rises, so every open ray is met exactly once. The interval [−1,−1/2] lies on the endpoint ray and is not part of this nonreal branch.</>,
    },
    {
      title: "Record the exact induction base",
      explanation: <>The upper bounds and realizations coincide, and the endpoint convention gives radius 1 at 1, ω, and −1. Therefore <i>R</i><sub>3</sub>(θ)=<i>K</i><sub>3</sub>(θ) for every 0≤θ≤π, including the jump at θ=π.</>,
    },
  ],
  takeaway: <>The theorem is completely proved for <i>n≤3</i>, and the exact equality <i>R</i><sub>3</sub>=<i>K</i><sub>3</sub> is ready for the induction step.</>,
  provenance: "Previously known",
  sourceIds: ["dmitriev-dynkin-1946", "karpelevic-1951", "ito-1997"],
  sourceRelation: <>The small stochastic regions and the exceptional order-three candidate curve belong to the classical theory. The proposition includes the direct calculation needed by this manuscript’s induction.</>,
};

const mainTheorem: ProofResultData = {
  id: "topic-xiii-main-theorem",
  label: "Theorem II.3.1",
  kind: "Theorem",
  title: "Karpelevič theorem in Ito’s formulation",
  purpose: "Identify every boundary arc, the complete region star-shaped with respect to 0, and all unit-circle points for every matrix order.",
  manuscriptHtml: relinkCrossTopicReferences(
    partIIHtmlByLabel["karp:thm:main"] + partIIMainTheoremProofHtml,
  ),
  vocabulary: [
    {
      term: "Block-diagonal inclusion",
      definition: <>If <i>A</i> is row-stochastic of order <i>n−1</i>, then <i>A⊕[1]</i> is row-stochastic of order <i>n</i> and retains every eigenvalue of <i>A</i>. Thus Θ<sub>n−1</sub>⊆Θ<sub>n</sub>.</>,
    },
    {
      term: "Two membership cases",
      definition: <>For λ<sub>n</sub>=<i>R</i><sub>n</sub>(θ)<i>e</i><sup><i>iθ</i></sup>, either λ<sub>n</sub>∉Θ<sub>n−1</sub> or λ<sub>n</sub>∈Θ<sub>n−1</sub>. The first case uses Topics X–XI; the second uses induction and Topic XII.</>,
    },
    {
      term: "Karpelevič boundary arcs",
      definition: <>After the equality <i>R</i><sub>n</sub>=<i>K</i><sub>n</sub> is proved, the curves Γ<sub>f,g</sub><sup>(n)</sup> on consecutive Farey intervals are the actual upper boundary arcs, not merely candidate curves.</>,
    },
    {
      term: "Induction on n",
      definition: <>Proposition II.9.2 proves orders 1–3. For <i>n</i>≥4, assume <i>R</i><sub>n−1</sub>=<i>K</i><sub>n−1</sub> and prove <i>R</i><sub>n</sub>=<i>K</i><sub>n</sub> first on open Farey intervals and then at their endpoints.</>,
    },
  ],
  intuition: <>Fix a direction in an open order-<i>n</i> Farey interval. Attainment gives <i>K</i><sub>n</sub>≤<i>R</i><sub>n</sub>. If the maximizing point is outside Θ<sub>n−1</sub>, Topics X–XI identify its modulus with <i>K</i><sub>n</sub>. If it lies in Θ<sub>n−1</sub>, block-diagonal inclusion, induction, Topic XII&apos;s monotonicity, and attainment force the same equality. Endpoint matrices settle the remaining rays, and Lemma II.9.1 converts the resulting continuous radial function into the boundary.</>,
  figure: <CompletionFigure kind="induction" />,
  proofSteps: [
    {
      title: "Start from the direct base orders",
      explanation: <>Proposition II.9.2 proves <i>n=1,2,3</i>, including the exceptional order-three segment [−1,−1/2]. Assume from now on that <i>n</i>≥4 and that the theorem holds at order <i>n−1</i>.</>,
    },
    {
      title: "Embed the previous stochastic region",
      explanation: <>Padding <i>A</i> by a one-state absorbing block proves Θ<sub>n−1</sub>⊆Θ<sub>n</sub>, and hence <i>R</i><sub>n−1</sub>(θ)≤<i>R</i><sub>n</sub>(θ) on every nonreal ray.</>,
    },
    {
      title: "Place the candidate below the actual maximum",
      explanation: <>Topic XI constructs an order-<i>n</i> stochastic matrix with eigenvalue <i>K</i><sub>n</sub>(θ)<i>e</i><sup>iθ</sup>. Thus 0&lt;<i>K</i><sub>n</sub>(θ)≤<i>R</i><sub>n</sub>(θ). At an argument in an open Farey interval, the unit direction is not a root of unity of permitted order, so Topic VIII’s unit-circle result also gives <i>R</i><sub>n</sub>(θ)&lt;1.</>,
    },
    {
      title: "Case 1: the maximizing point is outside Θₙ₋₁",
      explanation: <>If λ<sub>n</sub>=<i>R</i><sub>n</sub>(θ)<i>e</i><sup><i>iθ</i></sup> does not belong to Θ<sub>n−1</sub>, it satisfies the hypotheses established in Topic VIII. Topics X–XI then show that its modulus is the unique solution of Topic IX&apos;s scalar equation. Therefore <i>R</i><sub>n</sub>(θ)=<i>K</i><sub>n</sub>(θ).</>,
    },
    {
      title: "Case 2: the maximizing point lies in Θₙ₋₁",
      explanation: <>Membership gives <i>R</i><sub>n</sub>(θ)≤<i>R</i><sub>n−1</sub>(θ), while Θ<sub>n−1</sub>⊆Θ<sub>n</sub> gives the reverse inequality. The induction hypothesis and the fact that an open order-<i>n</i> Farey angle is also non-endpoint at order <i>n−1</i> yield <i>R</i><sub>n</sub>=<i>K</i><sub>n−1</sub>. Topic XII and attainment give <i>K</i><sub>n−1</sub>≤<i>K</i><sub>n</sub>≤<i>R</i><sub>n</sub>, so equality holds throughout.</>,
    },
    {
      title: "Prove equality at the Farey endpoints",
      explanation: <>At <i>p/q∈F</i><sub>n</sub><sup>+</sup>, the row-stochastic matrix <i>C</i><sub>q</sub>⊕<i>I</i><sub>n−q</sub> realizes <i>e</i><sup>2πip/q</sup>. The unit-disk bound prevents a larger modulus, while the endpoint definition gives <i>K</i><sub>n</sub>=1. Hence <i>R</i><sub>n</sub>=<i>K</i><sub>n</sub> for every 0≤θ≤π.</>,
    },
    {
      title: "Assemble the upper and lower boundary arcs",
      explanation: <>For <i>n</i>≥4, Topic IX&apos;s continuity result joins the curves Γ<sub>f,g</sub><sup>(n)</sup> at their Farey endpoints from 1 to −1. Equality <i>R</i><sub>n</sub>=<i>K</i><sub>n</sub> shows that this upper chain contains every upper radial endpoint; conjugation gives the lower chain.</>,
    },
    {
      title: "Identify the topological boundary and the whole region",
      explanation: <>Reflect <i>K</i><sub>n</sub> to a positive continuous radial function on 𝕊¹. Topic VIII gives compactness and star-shapedness of Θ<sub>n</sub> with respect to 0. Lemma II.9.1 shows that its endpoint set is ∂Θ<sub>n</sub> and that Θ<sub>n</sub> consists exactly of the radial segments from 0 to those endpoints.</>,
    },
    {
      title: "Match the remaining clauses of the theorem",
      explanation: <>Topic VIII&apos;s unit-circle proposition gives exactly Θ<sub>n</sub>∩{"{"}|<i>z</i>|=1{"}"}={"{"}ζ:ζ<sup>q</sup>=1 for some 1≤<i>q</i>≤<i>n</i>{"}"}. Proposition II.9.2 already handled the discontinuity of the nonreal order-three branch, so Lemma II.9.1 is used only when its continuity hypothesis holds.</>,
    },
  ],
  takeaway: <>The curves Γ<sub>f,g</sub><sup>(n)</sup> are the Karpelevič boundary arcs, their conjugates give the lower boundary, Θ<sub>n</sub> is the union of the radial segments from 0 to that boundary, and the unit-circle points are exactly the roots of unity of order at most <i>n</i>.</>,
  provenance: "Classical result",
  sourceIds: ["karpelevic-1951", "ito-1997"],
  sourceRelation: <>The eigenvalue-region theorem is classical: Karpelevič proved the original form and Ito supplied the modern polynomial-arc formulation. This manuscript gives the displayed self-contained route through critical invariant polygons; the classification applies to the theorem’s statement, not to its proof.</>,
};

export function TopicXIIIContent() {
  return (
    <>
      <TopicXIIISetup />

      <ProofDependencyContract
        imported={[
          {
            label: "Topic VIII · Stochastic eigenvalue regions and criticality",
            href: sitePath("/proof/topic-viii/"),
            explanation: <>proves that Θ<sub>n</sub> is compact, conjugation-invariant, star-shaped with respect to 0, and contained in the unit disk; it also proves attainment of <i>R</i><sub>n</sub>, the exact unit-circle classification, and the hypotheses used below when a maximizing point lies outside Θ<sub>n−1</sub>.</>,
          },
          {
            label: "Topic IX · candidate curves from the Ito equation",
            href: sitePath("/proof/topic-ix/"),
            explanation: <>for each open Farey interval, constructs the unique positive solution <i>K</i><sub>n</sub>(θ) of the scalar radius equation and the corresponding curve Γ<sub>f,g</sub><sup>(n)</sup>; for <i>n</i>≥4 it proves continuity at the endpoints.</>,
          },
          {
            label: "Topic X · Sharp upper comparison",
            href: sitePath("/proof/topic-x/"),
            explanation: <>supplies the upper comparison used, together with Topic XI, when <i>n</i>≥4, θ lies in an open order-<i>n</i> Farey interval, and <i>R</i><sub>n</sub>(θ)<i>e</i><sup><i>iθ</i></sup>∉Θ<sub>n−1</sub>.</>,
          },
          {
            label: "Topic XI · Attainment and constant parameters",
            href: sitePath("/proof/topic-xi/"),
            explanation: <>proves <i>K</i><sub>n</sub>(θ)<i>e</i><sup><i>iθ</i></sup>∈Θ<sub>n</sub> and, under the preceding open-interval hypotheses, completes the implication <i>R</i><sub>n</sub>(θ)=<i>K</i><sub>n</sub>(θ).</>,
          },
          {
            label: "Topic XII · Monotonicity of the candidate radius",
            href: sitePath("/proof/topic-xii/"),
            explanation: <>proves <i>K</i><sub>n−1</sub>(θ)≤<i>K</i><sub>n</sub>(θ) for 0≤θ≤π. This is the comparison used when the order-<i>n</i> maximizing point belongs to Θ<sub>n−1</sub>.</>,
          },
        ]}
        background={[
          {
            label: "Elementary induction and compact-set topology",
            explanation: <>the required forms are defined at first use and the compact radial-boundary lemma is proved in full below.</>,
          },
        ]}
        provedHere={<p>Lemma II.9.1 identifies a compact star-shaped set from its positive continuous radial function. Proposition II.9.2 proves orders 1–3. Theorem II.3.1 proves <i>R</i><sub>n</sub>=<i>K</i><sub>n</sub> for every order and then identifies the resulting curves with ∂Θ<sub>n</sub>.</p>}
      />

      <section className="topic-i-textbook proof-chapter-group">
        <header>
          <div>
            <p className="section-label">Logical output of Topic XIII</p>
            <h3>Topology, base orders, and the induction step</h3>
          </div>
          <div><p>The preceding topics provide the comparison and attainment results. This chapter supplies the remaining topological lemma, computes the base orders, and proves the final equality of radial functions.</p></div>
        </header>
        <ol className="topic-xiv-worked-steps">
          <li><span>1</span><div><h4>Topology</h4><p>Show that knowing one continuous maximum on every ray identifies the actual boundary.</p></div></li>
          <li><span>2</span><div><h4>Base cases</h4><p>Compute orders one through three directly, without appealing to the induction.</p></div></li>
          <li><span>3</span><div><h4>Induction</h4><p>For λ<sub>n</sub>=<i>R</i><sub>n</sub>(θ)<i>e</i><sup><i>iθ</i></sup>, treat separately λ<sub>n</sub>∉Θ<sub>n−1</sub> and λ<sub>n</sub>∈Θ<sub>n−1</sub>, proving <i>R</i><sub>n</sub>=<i>K</i><sub>n</sub> in both cases.</p></div></li>
        </ol>
      </section>

      <ProofResultGroup
        number="I · The topological lemma"
        title="A continuous radial function determines the boundary"
        introduction={<p>The ray sections determine the set once continuity guarantees that all strictly shorter points are interior.</p>}
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
        title="The radial equality and the complete boundary"
        introduction={<p>The theorem is stated with its original manuscript number from Section II.3. Its complete proof appears here only after all later ingredients have been established, matching the logical rather than the printed order.</p>}
        results={[mainTheorem]}
      />

      <section
        className="topic-i-textbook proof-chapter-group"
        aria-labelledby="topic-xiii-closing-heading"
      >
        <header>
          <div>
            <p className="section-label">Conclusion of the proof sequence</p>
            <h3 id="topic-xiii-closing-heading">The theorem proved here matches the statement in Section II.3</h3>
          </div>
          <div>
            <p>
              Topics X and XI settle the case in which the radial maximizer is outside Θ<sub>n−1</sub>;
              Topic XII supplies the monotonicity used in the complementary membership case. The two cases,
              the Farey endpoint matrices, conjugation, and Lemma II.9.1 prove every clause of Theorem II.3.1.
              Topic XIV is a worked order-seven computation illustrating the proved theorem; no part of this
              proof depends on that example.
            </p>
          </div>
        </header>
      </section>
    </>
  );
}
