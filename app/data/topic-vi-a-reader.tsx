import type { AdvancedProofGroup } from "../components/proof/AdvancedProofChapter";
import type { ProofDependency } from "../components/proof/ProofDependencyContract";
import type {
  GuidedProofStep,
  ProofVocabularyEntry,
} from "../components/proof/ProofResult";
import { sitePath } from "../lib/site-path";
import { topicVIAReaderHtmlByItem } from "./topic-v-vii-html";
import {
  collectSourceIds,
  makeReaderResult,
  type ReaderResultGuide,
} from "./topic-v-vii-result-builder";

const vocabulary = (
  term: string,
  definition: React.ReactNode,
  example?: React.ReactNode,
): ProofVocabularyEntry => ({ term, definition, example });

const step = (
  title: string,
  explanation: React.ReactNode,
  check?: React.ReactNode,
): GuidedProofStep => ({ title, explanation, check });

const guides: readonly ReaderResultGuide[] = [
  {
    itemNumber: 45,
    label: "Lemma 7.6",
    vocabulary: [
      vocabulary(
        "Projective line AB",
        "The projective line through two distinct points A and B. Juxtaposition here names a line; it is not multiplication.",
      ),
      vocabulary(
        "Projectively natural recursion",
        "A construction made only from lines and intersections. Applying a projective map before or after the construction gives the same corresponding point.",
      ),
      vocabulary(
        "Edge slope sᵢ",
        "The slope of the side [Xᵢ₋₁,Xᵢ] in the admissible affine chart.",
      ),
      vocabulary(
        "Support slope ℓᵢ",
        "The slope of the strict supporting line Lᵢ at Xᵢ. It lies strictly between the two incident side slopes.",
      ),
      vocabulary(
        "Incoming-ray slope rᵢ",
        "The slope of the line from the previous projected point Zᵢ₋₁ through the contact centre Cᵢ.",
      ),
      vocabulary(
        "Calibrated return W*",
        "The final intersection ZₘXₘ₊₁∩CₘCₘ₊₁ when the chosen starting point is Z₁=X₀. Calibration means this exact test point, not numerical approximation.",
      ),
    ],
    intuition:
      "For N≥4, the chart from Proposition 7.5 turns convexity into an ordering of slopes. Each projected point is found between two horizontal coordinates because two line differences have opposite signs. Repeating that comparison forces the final return strictly between the last two contacts.",
    proofSteps: [
      step(
        "Enter the admissible chart",
        "Use Proposition 7.5 and retain the same symbols after transformation. Incidence-defined points Zᵢ transform to the same recursion because projectivities preserve lines and intersections.",
      ),
      step(
        "Order side and support slopes",
        "Write Xᵢ=(tᵢ,fᵢ) with increasing tᵢ. The lower strict convex graph gives s₁<⋯<sₘ₊₁, while strict support gives sᵢ<ℓᵢ<sᵢ₊₁.",
      ),
      step(
        "Start the induction",
        "The formula for r₂ is a positive weighted average of s₁ and s₂, so s₁<r₂<s₂.",
      ),
      step(
        "Control every incoming ray",
        "The previous projected point lies above the backward extension of the next edge. Subtracting line values at Cᵢ and dividing by a positive horizontal difference gives rᵢ<sᵢ.",
      ),
      step(
        "Locate Zᵢ",
        "At t=cᵢ the incoming line lies above Lᵢ; at t=tᵢ it lies below. Since rᵢ<ℓᵢ, the unique intersection satisfies cᵢ<zᵢ<tᵢ.",
      ),
      step(
        "Preserve the induction invariant",
        "Because ℓᵢ<sᵢ₊₁ and zᵢ<tᵢ, the point Zᵢ lies above the backward extension of the following side.",
      ),
      step(
        "Calibrate the final line",
        "The final slope η is a strict weighted average of ℓₘ and sₘ₊₁. Comparing the final ray with the contact line at cₘ and cₘ₊₁ gives opposite signs.",
      ),
      step(
        "Return to the original chart",
        "The unique zero is W*, strictly between Cₘ and Cₘ₊₁. The inverse admissible projective map preserves this relative-interior segment.",
      ),
    ],
    takeaway:
      "The return chain started at the chosen test point ends with normalized coordinate strictly between zero and one.",
  },
  {
    itemNumber: 46,
    label: "Lemma 7.7",
    vocabulary: [
      vocabulary(
        "Real projectivity",
        "A fractional-linear automorphism of the real projective line. Near an affine fixed point zero it has form u(τ)=aτ/(1+cτ), with a≠0.",
      ),
      vocabulary(
        "Pole-free neighbourhood",
        "An interval avoiding the single affine point sent to infinity, so the fractional-linear formula is finite and continuous.",
      ),
      vocabulary(
        "Arbitrarily small parameters",
        "Every neighbourhood of zero contains a nonzero parameter with the required property; there is no fixed minimum displacement.",
      ),
    ],
    intuition:
      "A nonconstant projectivity fixing zero cannot remain on the same side of the diagonal at all nearby points once one calibrated value lies strictly below it. The algebra has only two cases: derivative different from one, or tangent to the identity.",
    proofSteps: [
      step(
        "Normalize at the fixed point",
        "On a pole-free neighbourhood, write u(τ)=aτ/(1+cτ).",
      ),
      step(
        "Subtract the diagonal",
        "Direct algebra gives τ-u(τ)=τ(1-a+cτ)/(1+cτ).",
      ),
      step(
        "Case a≠1",
        "Choose the sign of τ so τ(1-a)>0, then choose its magnitude small enough that numerator and denominator retain their limiting signs.",
      ),
      step(
        "Case a=1",
        "The hypothesis 0<u(1)<1 forces c>0. Then τ-u(τ)=cτ²/(1+cτ)>0 for every sufficiently small nonzero τ.",
      ),
    ],
    takeaway:
      "Escape parameters occur arbitrarily close to the fixed starting point, on whichever signed side the projectivity permits.",
  },
  {
    itemNumber: 47,
    label: "Theorem 7.8",
    vocabulary: [
      vocabulary(
        "Signed starting-point parameter",
        "The affine parameter in X₁(τ)=(1-τ)X₁+τX₀. Positive τ moves toward X₀; negative τ continues through X₁ in the opposite direction.",
      ),
      vocabulary(
        "Return projectivity H",
        "The global composition from the compactified starting-parameter line to the final contact line.",
      ),
      vocabulary(
        "Normalized coordinate υ",
        "The projective coordinate on CₘCₘ₊₁ with υ(Cₘ₊₁)=0 and υ(Cₘ)=1.",
      ),
      vocabulary(
        "Holonomy coordinate u",
        "The scalar projectivity υ∘H. Its value u(τ) is the normalized location where the moving closing line meets the final contact line.",
      ),
      vocabulary(
        "Calibration determinant D(t,τ)",
        "A signed two-dimensional determinant testing which side of the moving closing line contains the point z(t).",
      ),
      vocabulary(
        "Triple-sign persistence",
        "There are finitely many cyclic triple determinants. If their nonzero signs persist under a small continuous motion, the chain remains in strict convex order.",
      ),
    ],
    intuition:
      "The corridor is first collapsed to one projectivity u. The inequality τ-u(τ)>0 says that the candidate closing point lies beyond the returned line intersection along the contact segment. A positive scale factor converts that scalar ordering into the polygon's interior half-plane.",
    figure: "holonomy-escape",
    proofSteps: [
      step(
        "Verify every perspectivity",
        "Each contact centre lies on neither its source nor target strict support. The final centre Xₘ₊₁ lies on neither Lₘ nor the final contact line. Hence every projection is a projective isomorphism.",
      ),
      step(
        "Compose one global projectivity",
        "Compactify the affine starting-point parameter and compose all verified perspectivities to obtain H:P¹(R)→CₘCₘ₊₁.",
      ),
      step(
        "Calibrate zero and one",
        "At τ=0 the return is Cₘ₊₁, so u(0)=0. At τ=1 the starting point is X₀ and Lemma 7.6 identifies the return with W*, so 0<u(1)<1.",
      ),
      step(
        "Remove every local pole",
        "At τ=0 all intersections are the original finite vertices. Each coordinate map has at most one pole, so one common interval avoids the finite set of poles.",
      ),
      step(
        "Factor the half-plane determinant",
        "The returned intersection is z(u(τ)). Since D is affine in t and vanishes there, D(t,τ)=γ(τ)(t-u(τ)).",
      ),
      step(
        "Fix the sign of γ",
        "Use Cₘ=(1-σ)Xₘ₋₁+σXₘ and the calibration sign ε to compute γ(0)>0; continuity keeps γ positive after shrinking the interval.",
      ),
      step(
        "Preserve strict convexity",
        "All cyclic triple determinants are nonzero at zero. Shrink once more so every sign persists and invoke the triple-sign criterion.",
      ),
      step(
        "Choose the escape last",
        "Only after all pole, sign, and convexity conditions share one interval, choose nonzero τ with τ-u(τ)>0. Then D(τ,τ)>0 puts Y(τ) in the open half-plane containing Xₘ₋₁(τ).",
      ),
    ],
    takeaway:
      "A nonidentity local holonomy can be opened inward by an arbitrarily small signed motion while the displayed chain remains strictly convex.",
  },
] as const;

export const topicVIAResults = guides.map((guide) =>
  makeReaderResult(topicVIAReaderHtmlByItem, guide),
);

export const topicVIAGroups: readonly AdvancedProofGroup[] = [
  {
    number: "I",
    title: "Calibrate the projective return",
    introduction: (
      <p>
        The admissible chart turns convexity into ordered slopes. One
        carefully chosen starting point then returns strictly between the final
        contacts.
      </p>
    ),
    results: topicVIAResults.slice(0, 1),
  },
  {
    number: "II",
    title: "Open a nonidentity holonomy",
    introduction: (
      <p>
        The calibrated return becomes a scalar fractional-linear map. Its
        local escape is translated back into a geometric half-plane
        statement.
      </p>
    ),
    results: topicVIAResults.slice(1),
  },
] as const;

export const topicVIAImported: readonly ProofDependency[] = [
  {
    label: "Topic V: the N≥4 scope boundary",
    href: sitePath("/proof/topic-v/#topic-v-projective-scope"),
    explanation:
      "The projective construction begins only after N≥4 is imposed; the finite-rotation arithmetic before that boundary remains valid for N=3.",
  },
  {
    label: "Topic I: oriented boundary order",
    href: sitePath("/proof/#lem:oriented-boundary-order"),
    explanation:
      "The original boundary chain has one consistent nonzero sign for all cyclically ordered triples before the motion begins.",
  },
  {
    label: "Topic V: projective corridor",
    href: sitePath("/proof/topic-v/#def:projective-corridor"),
    explanation:
      "The chain, contact centres, strict supports, and corridor holonomy are already defined.",
  },
  {
    label: "Topic V: admissible projective chart",
    href: sitePath("/proof/topic-v/#prop:holonomy-chart"),
    explanation:
      "The polygon is bounded and the displayed chain is a lower convex graph with strictly increasing side slopes.",
  },
  {
    label: "Topic II: finite triple-sign certificate",
    href: sitePath("/proof/topic-ii/#part-i-item-11"),
    explanation:
      "Persistence of finitely many determinant signs preserves strict convex position and cyclic order.",
  },
] as const;

export const topicVIABackground: readonly ProofDependency[] = [
  {
    label: "Projectivities of a real line",
    explanation:
      "Their fractional-linear normal form is stated and proved directly where it is used; no hidden projective theorem remains.",
  },
] as const;

export const topicVIASourceIds = collectSourceIds(topicVIAResults);
