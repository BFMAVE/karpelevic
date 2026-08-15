import type { AdvancedProofGroup } from "../components/proof/AdvancedProofChapter";
import type { ProofDependency } from "../components/proof/ProofDependencyContract";
import type {
  GuidedProofStep,
  ProofResultData,
  ProofVocabularyEntry,
} from "../components/proof/ProofResult";
import { sitePath } from "../lib/site-path";
import { getProofItems } from "./proof";
import {
  theorem14CompleteHtml,
  topicVIIReaderHtmlByItem,
} from "./topic-v-vii-html";
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
    itemNumber: 53,
    label: "Lemma 8.1",
    vocabulary: [
      vocabulary(
        "Farey sequence Fₙ",
        "The increasing list of all reduced fractions a/b in [0,1] whose denominator satisfies 1≤b≤n.",
      ),
      vocabulary(
        "Reduced fraction",
        "A fraction whose numerator and denominator have greatest common divisor one.",
      ),
      vocabulary(
        "Farey neighbours",
        "Two consecutive entries of Fₙ: no reduced fraction of denominator at most n lies strictly between them.",
      ),
      vocabulary(
        "Farey determinant",
        "For a/b<c/d, the positive integer bc-ad.",
      ),
      vocabulary(
        "Mediant",
        "The fraction (a+c)/(b+d), which lies strictly between a/b and c/d before or after reduction.",
      ),
    ],
    intuition:
      "Determinant one says the two primitive endpoint vectors form one lattice cell. The extra inequality b+d>n says that even the smallest possible intermediate denominator is too large for Fₙ.",
    proofSteps: [
      step(
        "Determinant one excludes a small denominator",
        "For an intermediate h/k, define positive integers m=ck-dh and ℓ=bh-ak. The determinant-one identity gives (k,h)=m(b,a)+ℓ(d,c), hence k≥b+d.",
      ),
      step(
        "Use the order bound",
        "If b+d>n, no intermediate element of Fₙ exists, so the endpoints are consecutive.",
      ),
      step(
        "Assume a larger determinant",
        "If D=bc-ad>1, Lemma A.6 gives a nonzero lattice representative inside the half-open parallelogram of the primitive endpoint vectors.",
      ),
      step(
        "Find an intermediate slope",
        "Reducedness excludes the open radial edges. The representative and its complement both have slopes strictly between the endpoint slopes.",
      ),
      step(
        "Find a small denominator",
        "Their positive first coordinates sum to b+d≤2n, so one is at most n. Reducing its slope can only lower the denominator, contradicting adjacency.",
      ),
      step(
        "Exclude a small mediant",
        "If b+d≤n, the reduced mediant lies in Fₙ between the endpoints. Thus adjacency also forces b+d>n.",
      ),
    ],
    takeaway:
      "Farey adjacency is exactly determinant one together with a denominator sum exceeding the order.",
  },
  {
    itemNumber: 54,
    label: "Lemma 8.2",
    vocabulary: [
      vocabulary(
        "Reflection of a Farey cell",
        "Apply x↦1-x to every point, then restore increasing order. The left and right endpoint denominators are exchanged.",
        "The order-seven cell 1/3<x<2/5 becomes 3/5<1-x<2/3.",
      ),
    ],
    intuition:
      "Reflection changes orientation but not the lattice determinant or the denominator bound. It is the exact tool for choosing the conjugate eigenvalue while keeping an ordered Farey cell.",
    proofSteps: [
      step(
        "Preserve reducedness",
        "gcd(d-c,d)=gcd(c,d)=1 and similarly for b-a,b.",
      ),
      step(
        "Reflect the inequalities",
        "Subtract the original cell inequalities from one; this reverses endpoint order.",
      ),
      step(
        "Preserve determinant one",
        "The reflected determinant simplifies to bc-ad=1, and the denominator sum remains b+d>n.",
      ),
      step(
        "Apply the adjacency criterion",
        "Lemma 8.1 makes the reflected endpoints consecutive, with denominators d then b.",
      ),
    ],
    takeaway:
      "Conjugate orientation swaps the Farey endpoint denominators but preserves the cell.",
  },
  {
    itemNumber: 55,
    label: "Lemma 8.3",
    vocabulary: [
      vocabulary(
        "Backward return strip",
        "A chain of recurrences (λ^q-bᵢ)zᵢ=aᵢzᵢ₋₁ closed by λ^h z_d=z₀.",
      ),
      vocabulary(
        "Lifted arguments Θᵢ",
        "Real-valued vertex angles chosen consistently along the polygon boundary, not residues modulo 2π.",
      ),
      vocabulary(
        "Reflected multiplier μ",
        "The conjugate μ=λ̄. For nonreal λ with positive argument θ, its positive argument is 2π-θ.",
      ),
      vocabulary(
        "Signed closing exponent e",
        "After reversing the reflected closure, e=-h. It may be negative in the Laurent identity.",
      ),
      vocabulary(
        "Homogeneous product",
        "The polynomial identity obtained by multiplying the Laurent product by μ^{dq}, eliminating a negative exponent.",
      ),
    ],
    intuition:
      "Changing orientation requires more than conjugating one equation. The vertex order must also be reversed, the closure exponent changes sign, and the lifted phase must be recomputed. The lemma performs all three operations at once.",
    proofSteps: [
      step(
        "Conjugate and reverse the cells",
        "Set wⱼ=z̄_{d-j} and reverse the coefficients. Conjugating the cell with index d-j+1 gives the forward recurrence (8.7).",
      ),
      step(
        "Reverse the closure",
        "Conjugating λ^h z_d=z₀ gives μ^h w₀=w_d. Since μ≠0, rewrite it as μ^{-h}w_d=w₀, so e=-h.",
      ),
      step(
        "Multiply the strip",
        "Multiply all forward cell equations, cancel the nonzero endpoint vertices with the signed closure, and obtain the Laurent product.",
      ),
      step(
        "Homogenize",
        "Multiply by μ^{dq}; the new closing exponent is s=dq-h>0, so the result is a polynomial identity.",
      ),
      step(
        "Reflect the angular lift",
        "Set Φⱼ=-Θ_{d-j}+C. Its consecutive gaps are the original positive gaps in reverse order and therefore belong to (0,π).",
      ),
      step(
        "Telescope the phase",
        "Use the original lifted closure and e(2π-θ) to derive exactly e arg₊(μ)+Σuⱼ=2π(m-h).",
      ),
    ],
    takeaway:
      "Reflection preserves the complete strip, including its product and exact lifted phase, while selecting the conjugate eigenvalue.",
  },
  {
    itemNumber: 56,
    label: "Lemma 8.4",
    vocabulary: [
      vocabulary(
        "Identity contact rotation",
        "The integer lift is κ=N, so every side returns to itself and every contact is strict.",
      ),
      vocabulary(
        "Monodromy output",
        "The selected eigenvalue, Farey cell, product parameters, and exact lifted phase obtained after multiplying one closed return strip.",
      ),
      vocabulary(
        "Output orientation",
        "The complex orientation chosen for the final monodromy statement. In this case it is opposite to the contact orientation.",
      ),
    ],
    intuition:
      "When every contact returns to its own side, the recurrences naturally point backwards around one full polygon turn. Reflection turns them into the required forward strip and places the output angle in the first Farey cell.",
    proofSteps: [
      step(
        "Build the backward strip",
        "Rearrange λxᵢ=βᵢxᵢ₋₁+αᵢxᵢ as (λ-αᵢ)zᵢ=βᵢzᵢ₋₁ and lift one complete boundary turn.",
      ),
      step(
        "Apply strip reflection",
        "Use Lemma 8.3 with q=1,d=N,h=0,m=1 and reversed coefficients.",
      ),
      step(
        "Recover normalized parameters",
        "Since αᵢ+βᵢ=1, the reflected coefficients again satisfy α′=1-β′.",
      ),
      step(
        "Identify the Farey cell",
        "The contact angle lies between (N-1)/N and 1. Reflecting gives 0<y<1/N, with ordered denominators 1<N.",
      ),
    ],
    takeaway:
      "The identity return produces the carrier after one exact orientation reflection.",
  },
  {
    itemNumber: 57,
    label: "Proposition 8.5",
    vocabulary: [
      vocabulary(
        "Standing scope N≥4",
        "This nontransversal construction invokes the projective unit-return theorem. It therefore belongs to the N≥4 part of the argument; the N=3 case is proved directly in Topic XIII.",
      ),
      vocabulary(
        "Nontransversal regime",
        "The strict interval contains more points than the number δ of contact-rotation orbits: φ>δ.",
      ),
      vocabulary(
        "Heterogeneous contact factors",
        "The factors λ^q-βⱼ may have different βⱼ. Each comes from one strict or padded return cell.",
      ),
      vocabulary(
        "Algebraic padding",
        "Endpoint cells use (αⱼ,βⱼ)=(1,0) to complete the record interval. They are not new strict contacts.",
      ),
    ],
    intuition:
      "Unit return turns every base-to-successor recurrence into one factor. Multiplying the complete padded strip cancels the vertices, while the determinant-one record edge identifies the exact Farey endpoints.",
    proofSteps: [
      step(
        "Force one orbit",
        "Because N≥4, Theorem 7.11 applies and gives Δ=1. The record identity gcd(Δ,φ)=δ therefore gives δ=1.",
      ),
      step(
        "Treat the full block",
        "If φ=N, the initial record pair and unit return force κ=1; take q=1,p=0,d=N,e=0.",
      ),
      step(
        "Extend a proper block",
        "If φ<N, extend the unit record edge backwards to E=(e,c), obtaining qκ-pN=1 and N=qd+e with 0≤e<q.",
      ),
      step(
        "Build the padded recurrences",
        "Corollary 6.2 gives λ^q xⱼ₋₁=ξⱼ and λ^e x_d=x₀. Substitute contact coefficients on strict fields and (1,0) on padding fields.",
      ),
      step(
        "Multiply and cancel",
        "The nonzero vertices cancel around the strip. The closure gives the Laurent product, and N=qd+e gives its homogeneous form.",
      ),
      step(
        "Find the Farey carrier",
        "The determinant qκ-pN=1 and denominator sum q+N>N make p/q and κ/N Farey neighbours. The lifted q-step return places x strictly between them.",
      ),
      step(
        "Fix the phase without modular ambiguity",
        "Choose each factor argument as the lifted gap between consecutive vertices. The closure index identity telescopes to equation (1.9).",
      ),
    ],
    takeaway:
      "For N≥4, a nontransversal critical return yields a determinant-one Farey cell, a complete heterogeneous product, and an exact phase.",
  },
  {
    itemNumber: 58,
    label: "Proposition 8.6",
    vocabulary: [
      vocabulary(
        "Transversal regime",
        "The strict block has exactly one field in each contact-rotation orbit: φ=δ.",
      ),
      vocabulary(
        "Orbit length L and reduced step K",
        "L=N/δ and K=κ/δ. Addition by K modulo L is one complete reduced orbit.",
      ),
      vocabulary(
        "Integers S and R",
        "Local arithmetic symbols S=N-h and R=κ-b. On this result card they are integers, not a strict-field set or a polygon.",
      ),
      vocabulary(
        "Genuine factor versus padded factor",
        "A genuine factor comes from consecutive polygon vertices. A padded zero factor has β=0 and receives the left-endpoint argument A.",
      ),
    ],
    intuition:
      "A transversal has one strict return per orbit, so the common orbit length supplies a backward strip. Whether to reflect depends on which endpoint denominator is already smaller; δ≥2 and δ=1 make opposite choices.",
    proofSteps: [
      step(
        "Build the common orbit recurrence",
        "The first L-1 destination fields are endpoints and the L-th return is strict, giving λ^Lxᵢ=ξᵢ for each of the δ strict fields.",
      ),
      step(
        "Close the strip",
        "Choose h with Kh≡-1 mod L. The orbit from xδ reaches x₀ through endpoint fields, so λ^h xδ=x₀.",
      ),
      step(
        "Prove the Farey determinant",
        "With b=(Kh+1)/L, S=N-h, and R=κ-b, direct calculation gives KS-RL=1 and L+S>N.",
      ),
      step(
        "Locate the angle",
        "Strict L-returns and the endpoint closure give exact lifted inequalities; subtracting their phase errors yields R/S<x<K/L.",
      ),
      step(
        "Case δ≥2",
        "Here S>L. Reflect the cell so q=L<s=S, use μ=λ̄, d=δ, and e=-h, and apply Lemma 8.3.",
      ),
      step(
        "Case δ=1",
        "Here S<N=L, so keep μ=λ and q=S<s=N. Rewrite the one genuine relation and pad the remaining factors with β=0.",
      ),
      step(
        "Complete each phase",
        "The reflected case inherits the lifted phase from Lemma 8.3. In the δ=1 case, assign the genuine vertex gap to u₁ and A to every padded factor, then telescope.",
      ),
    ],
    takeaway:
      "Every transversal return also has an ordered Farey carrier, including the reflected negative-exponent case and the singly genuine padded case.",
  },
  {
    itemNumber: 59,
    label: "Lemma 8.7",
    vocabulary: [
      vocabulary(
        "Jensen sheet",
        "The single argument branch [A,M) inside the open upper half-plane on which every factor μ^q-βⱼ lies. Jensen's inequality is not used until a later topic.",
      ),
      vocabulary(
        "Left factor angle A",
        "A=qϑ-2πp, the argument of μ^q relative to the left Farey endpoint p/q.",
      ),
      vocabulary(
        "Limiting angle M",
        "M=arg₊(μ^q-1). It is approached as β tends to one but never attained because β<1.",
      ),
    ],
    intuition:
      "Every factor moves on the same horizontal segment in the upper half-plane. The Farey cell keeps that segment above the real axis, while the vertex recurrences choose the actual lifted arguments rather than only their classes modulo 2π.",
    figure: "jensen-sheet",
    proofSteps: [
      step(
        "Bound the left angle",
        "From q+s>N≥4 and q≤s obtain s≥3. Determinant one and the Farey inequalities give 0<A<2π/s<π.",
      ),
      step(
        "Keep every factor upstairs",
        "For 0≤β<1, Im(μ^q-β)=|μ|^q sin A>0, so each factor has one argument in (0,π).",
      ),
      step(
        "Order arguments along the segment",
        "As β increases, the factor moves strictly left with fixed positive imaginary part. Its argument increases continuously from A toward M.",
      ),
      step(
        "Match geometric and analytic branches",
        "Direct vertex gaps handle the nontransversal case, strip reflection handles both reflected cases, and the δ=1 transversal construction assigns A to its padded factors.",
      ),
    ],
    takeaway:
      "All factors share one controlled branch uⱼ∈[A,M), ready for the later convex equalization argument.",
  },
] as const;

const coreResults = guides.map((guide) =>
  makeReaderResult(topicVIIReaderHtmlByItem, guide),
);

const theorem14Item = getProofItems([4])[0];
if (!theorem14Item) throw new Error("Missing proof metadata for Theorem 1.4");

const theorem14: ProofResultData = {
  id: "part-i-item-4",
  label: "Theorem 1.4",
  kind: "Theorem",
  title: theorem14Item.title,
  purpose:
    "For N≥4, this theorem eliminates all case-specific return variables and exports one selected eigenvalue, one ordered Farey cell, one heterogeneous product, and one exact phase identity.",
  manuscriptHtml: theorem14CompleteHtml,
  vocabulary: [
    vocabulary(
      "Output eigenvalue μ",
      "One of the conjugate eigenvalues λ or λ̄, selected only after the return regime is known and then kept fixed through every product and phase identity.",
    ),
    vocabulary(
      "Farey carrier",
      "The ordered neighbouring fractions p/q<y<r/s together with the finite factor data that carry the monodromy relation.",
    ),
    vocabulary(
      "Signed remainder e",
      "The integer e=s-dq with d=floor(N/q). It may be negative; the homogeneous identity remains polynomial in every case.",
    ),
  ],
  intuition:
    "The theorem is a disciplined case assembly. Each return regime chooses its orientation exactly once, then hands the same selected multiplier to the product, phase, and Jensen-sheet statements.",
  proofSteps: [
    step(
      "Keep the contact orientation provisional",
      "Apply the one-sided contact theorem but postpone selecting μ until the return regime is known.",
    ),
    step(
      "Identity case",
      "Choose μ=λ̄ and use Lemma 8.4; the ordered cell has denominators 1<N.",
    ),
    step(
      "Nontransversal case",
      "In the standing N≥4 range, choose μ=λ and use Proposition 8.5 plus unit return; the right endpoint denominator is N.",
    ),
    step(
      "Transversal with δ≥2",
      "Choose μ=λ̄ and Proposition 8.6(a); reflection orders the denominators and gives negative e.",
    ),
    step(
      "Transversal with δ=1",
      "Keep μ=λ and use Proposition 8.6(b); the original cell already has the smaller denominator first.",
    ),
    step(
      "Unify the argument branch",
      "In every case the same selected μ satisfies the homogeneous product, Laurent relation, and phase. Lemma 8.7 supplies 0<A<M<π and uⱼ∈[A,M).",
    ),
  ],
  takeaway:
    "The complete critical-polygon geometry is compressed into a finite scalar carrier without changing orientation after the output has been selected.",
  provenance: theorem14Item.provenance === "New result" ? "New result" : undefined,
  sourceIds: theorem14Item.sourceIds,
  sourceRelation:
    "The exact intrinsic carrier theorem, including orientation selection, signed closing exponent, and common Jensen sheet, is new in the manuscript's audit. The classical Karpelevič-Ito boundary and older product formulations are explicitly not claimed as new.",
};

export const topicVIIGroups: readonly AdvancedProofGroup[] = [
  {
    number: "I",
    title: "Farey adjacency and exact reflection",
    introduction: (
      <p>
        Lattice determinant one identifies neighbouring fractions. Reflection
        then transports a complete return strip, including its lifted phase,
        to the opposite complex orientation.
      </p>
    ),
    results: coreResults.slice(0, 3),
  },
  {
    number: "II",
    title: "Build the carrier in every return regime",
    introduction: (
      <p>
        Identity, nontransversal, and transversal returns each produce a
        product. The orientation and signed exponent are decided separately
        and explicitly.
      </p>
    ),
    formalSetups: [
      {
        id: "topic-vii-n-ge-4-scope",
        title: "Standing scope for critical-polygon monodromy: N≥4",
        html: String.raw`
          <p>
            Proposition 8.5 invokes projective unit return, and Theorem 1.4
            assembles the resulting contact-return normal form. Both are used
            here only for <strong>N≥4</strong>. The finite Farey lemmas above do
            not require that restriction. The stochastic regions of orders
            one, two, and three are established by a separate direct proof in
            Topic XIII, which is forthcoming on the public site.
          </p>
        `,
      },
    ],
    results: coreResults.slice(3, 6),
  },
  {
    number: "III",
    title: "One argument sheet and one theorem output",
    introduction: (
      <p>
        The Farey cell places all factors on one upper-half-plane branch. The
        case constructions then assemble into the complex monodromy theorem.
      </p>
    ),
    results: [coreResults[6], theorem14],
  },
] as const;

export const topicVIIImported: readonly ProofDependency[] = [
  {
    label: "Topic VI-B: completed return dichotomy",
    href: sitePath("/proof/topic-vi/b/#thm:critical-polygon-normal-form"),
    explanation:
      "For N≥4, identity, transversal, and nontransversal regimes are exhaustive; the nontransversal first return is the adjacent successor.",
  },
  {
    label: "Topic V: unit record section and padding",
    href: sitePath("/proof/topic-v/#cor:endpoint-padded-section"),
    explanation:
      "The determinant-one record edge supplies q,p,d,e and endpoint padding supplies exact zero factors.",
  },
  {
    label: "Topic V: lattice parallelogram count",
    href: sitePath("/proof/topic-v/#lem:lattice-parallelogram-count"),
    explanation:
      "The converse Farey-adjacency argument uses the exact determinant count to produce an intermediate primitive slope when the determinant exceeds one.",
  },
  {
    label: "Topic I: adapted complex coordinate",
    href: sitePath("/proof/#prop:adapted-complex"),
    explanation:
      "The real-linear contraction is multiplication by one of two conjugate complex eigenvalues.",
  },
  {
    label: "Topic IV: one-sided contact representative",
    href: sitePath("/proof/topic-iv/#lem:one-sided-contact"),
    explanation:
      "The return cases start from one fixed contact orientation, multiplier, contact rotation, and strict-field interval.",
  },
  {
    label: "Topic IV: lifted endpoint paths",
    href: sitePath("/proof/topic-iv/#lem:lifted-endpoint-paths"),
    explanation:
      "Consecutive lifted vertex arguments and strict side landings remove every hidden multiple of 2π.",
  },
] as const;

export const topicVIIBackground: readonly ProofDependency[] = [
  {
    label: "Classical Farey arithmetic",
    explanation:
      "The determinant-and-denominator criterion is not assumed: Lemma 8.1 proves the exact form used here from the lattice count.",
  },
  {
    label: "Complex conjugation",
    explanation:
      "Lemma 8.3 explicitly conjugates, reverses, and re-lifts the entire strip rather than relying on an informal symmetry argument.",
  },
] as const;

export const topicVIISourceIds = collectSourceIds(
  topicVIIGroups.flatMap((group) => group.results),
);
