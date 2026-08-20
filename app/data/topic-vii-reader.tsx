import type {
  AdvancedProofGroup,
  AdvancedProofSetup,
} from "../components/proof/AdvancedProofChapter";
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

export const topicVIISetup: AdvancedProofSetup = {
  id: "topic-vii-imported-notation",
  title: "Notation and return cases imported from Topics I–VI",
  html: String.raw`
    <p>
      Throughout Topic VII, <strong>N≥4</strong>. Let V be the underlying
      two-dimensional real vector space and let T:V→V be the fixed N-critical
      elliptic contraction. In the adapted complex coordinate of Topic I,
      T acts as multiplication by one of two conjugate nonreal eigenvalues.
      We write λ for the eigenvalue in the contact orientation inherited from
      Topic VI, set θ=arg<sub>+</sub>(λ), and write x=θ/(2π). The final product
      may instead use μ=λ̄ after an explicit reflection. For a nonzero complex
      number z that is not positive real, arg<sub>+</sub>(z) denotes the unique
      argument in (0,2π).
    </p>
    <p>
      Let P be the invariant N-gon and let κ∈{1,…,N} be the integer lift of
      its contact permutation. The value κ=N represents the identity
      permutation. In the nonidentity case, 1≤κ&lt;N and δ=gcd(N,κ) is the
      number of contact-permutation orbits. After cyclic relabelling, the
      relative-interior contact indices form 𝓑={1,…,φ}. Topic VI leaves
      exactly three disjoint and exhaustive cases: κ=N; κ&lt;N with φ=δ; or
      κ&lt;N with φ&gt;δ. In the last case the first-return map on 𝓑 is the
      cyclic shift j↦j+Δ modulo φ, and Topic VI proves Δ=1.
    </p>
    <p>
      With E<sub>i</sub>=[x<sub>i−1</sub>,x<sub>i</sub>], the assigned contact
      point has the coefficient form
      ξ<sub>i</sub>=λx<sub>i−κ</sub>=β<sub>i</sub>x<sub>i−1</sub>+
      α<sub>i</sub>x<sub>i</sub>, where α<sub>i</sub>&gt;0,
      β<sub>i</sub>≥0, and α<sub>i</sub>+β<sub>i</sub>=1.
      Thus 0&lt;β<sub>i</sub>&lt;1 (equivalently α<sub>i</sub>,β<sub>i</sub>&gt;0)
      is a relative-interior contact, while β<sub>i</sub>=0 is the retained
      endpoint x<sub>i</sub>. In the identity
      case this reads λx<sub>i</sub>=β<sub>i</sub>x<sub>i−1</sub>+
      α<sub>i</sub>x<sub>i</sub>; after a q-step return it becomes the factor
      relation (λ<sup>q</sup>−β<sub>j</sub>)x<sub>j−1</sub>=
      α<sub>j</sub>x<sub>j</sub>. The lifted vertex arguments
      Θ<sub>i</sub> are real representatives increasing along the chosen
      polygon boundary; their exact, rather than modular, differences supply
      the phase equations below.
    </p>
    <p>
      The Farey sequence F<sub>N</sub> is the increasing list of reduced
      fractions in [0,1] with denominator at most N. A <dfn>Farey interval</dfn>
      is the open interval between two consecutive terms of F<sub>N</sub>.
      Topic VII translates each of the three return cases above into one such
      interval, a varying-parameter product relation, and an exact lifted
      phase identity.
    </p>
  `,
};

function splitStatementAndProof(html: string): {
  statementHtml: string;
  proofHtml: string;
} {
  const proofStart = html.indexOf('<div class="proof">');
  if (proofStart < 0) return { statementHtml: html, proofHtml: "" };
  return {
    statementHtml: html.slice(0, proofStart),
    proofHtml: html.slice(proofStart),
  };
}

const theorem14Parts = splitStatementAndProof(theorem14CompleteHtml);

const guides: readonly ReaderResultGuide[] = [
  {
    itemNumber: 53,
    label: "Lemma 8.1",
    vocabulary: [
      vocabulary(
        "Farey sequence Fₙ",
        "The increasing list of fractions a/b in [0,1] with gcd(a,b)=1 and 1≤b≤n.",
      ),
      vocabulary(
        "Farey neighbours",
        "Two consecutive entries of Fₙ: no reduced fraction of denominator at most n lies strictly between them.",
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
    intuition:
      "Reflection changes orientation but not the lattice determinant or the denominator bound. It is the exact tool for choosing the conjugate eigenvalue while keeping an interval between consecutive Farey fractions.",
    proofSteps: [
      step(
        "Preserve reducedness",
        "gcd(d-c,d)=gcd(c,d)=1 and similarly for b-a,b.",
      ),
      step(
        "Reflect the inequalities",
        "Subtract the original interval inequalities from one; this reverses endpoint order.",
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
      "Conjugate orientation swaps the Farey endpoint denominators but preserves adjacency.",
  },
  {
    itemNumber: 55,
    label: "Lemma 8.3",
    vocabulary: [
      vocabulary(
        "Closed backward return-recurrence chain",
        "The recurrences (λ^q-bᵢ)zᵢ=aᵢzᵢ₋₁ together with the closing relation λ^h z_d=z₀.",
      ),
      vocabulary(
        "Lifted arguments Θᵢ",
        "Real-valued vertex angles chosen consistently along the polygon boundary, not residues modulo 2π.",
      ),
      vocabulary(
        "Selected conjugate eigenvalue μ",
        "The conjugate μ=λ̄. For nonreal λ with positive argument θ, its positive argument is 2π-θ.",
      ),
      vocabulary(
        "Integer closing exponent e",
        "After reversing the reflected closure, e=-h. It may be negative in the Laurent relation.",
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
        "Multiply the closed recurrence chain",
        "Multiply all forward recurrence equations, cancel the nonzero endpoint vertices with the closing relation, and obtain the Laurent relation.",
      ),
      step(
        "Clear the negative closing exponent",
        "Multiply by μ^{dq}; the resulting exponent is s=dq-h>0, so the relation is polynomial in the selected value of μ.",
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
      "Reflection preserves the complete closed recurrence chain, including its product and exact lifted phase, while selecting the conjugate eigenvalue.",
  },
  {
    itemNumber: 56,
    label: "Lemma 8.4",
    vocabulary: [
      vocabulary(
        "Identity contact permutation",
        "The integer lift is κ=N, so the contact permutation fixes every side and every contact lies in the relative interior of its side.",
      ),
      vocabulary(
        "Closed-return product data (monodromy)",
        "The selected eigenvalue, Farey interval, product parameters, and exact lifted phase obtained by multiplying the recurrence factors around one closed chain. The standard term for a product around a closed chain is monodromy; this guide otherwise calls it the closed-return product.",
      ),
    ],
    intuition:
      "When every contact returns to its own side, the recurrences naturally point backwards around one full polygon turn. Reflection turns them into the required forward recurrence chain and places the selected angle in the first Farey interval.",
    proofSteps: [
      step(
        "Build the backward recurrence chain",
        "Rearrange λxᵢ=βᵢxᵢ₋₁+αᵢxᵢ as (λ-αᵢ)zᵢ=βᵢzᵢ₋₁ and lift one complete boundary turn.",
      ),
      step(
        "Reflect the recurrence chain",
        "Use Lemma 8.3 with q=1,d=N,h=0,m=1 and reversed coefficients.",
      ),
      step(
        "Recover normalized parameters",
        "Since αᵢ+βᵢ=1, the reflected coefficients again satisfy α′=1-β′.",
      ),
      step(
        "Identify the Farey interval",
        "The contact angle lies between (N-1)/N and 1. Reflecting gives 0<y<1/N, with ordered denominators 1<N.",
      ),
    ],
    takeaway:
      "The identity return produces the Farey product data after one exact orientation reflection.",
  },
  {
    itemNumber: 57,
    label: "Proposition 8.5",
    vocabulary: [
      vocabulary(
        "Standing scope N≥4",
        "This construction uses Theorem 7.11, which proves that the first-return step is Δ=1. It therefore belongs to the N≥4 part of the argument; the N=3 case is proved directly in Topic XIII.",
      ),
      vocabulary(
        "Varying-parameter factors",
        "The factors λ^q-βⱼ may have different parameters βⱼ. A factor with βⱼ=0 merely completes the closed recurrence chain and is not an additional relative-interior contact.",
      ),
    ],
    intuition:
      "The identity Δ=1 turns every base-to-successor recurrence into one factor. Completing the recurrence chain with factors having β=0 makes the vertices cancel, while the determinant-one record edge identifies the exact Farey endpoints.",
    proofSteps: [
      step(
        "Force one orbit",
        "Because N≥4, Theorem 7.11 applies and gives Δ=1. The record identity gcd(Δ,φ)=δ therefore gives δ=1.",
      ),
      step(
        "Treat the full interval",
        "If φ=N, the initial record pair and Δ=1 force κ=1; take q=1,p=0,d=N,e=0.",
      ),
      step(
        "Extend a proper block",
        "If φ<N, extend the unit record edge backwards to E=(e,c), obtaining qκ-pN=1 and N=qd+e with 0≤e<q.",
      ),
      step(
        "Complete the recurrence chain",
        "Corollary 6.2 gives λ^q xⱼ₋₁=ξⱼ and λ^e x_d=x₀. Use the contact coefficients at relative-interior contact indices and (αⱼ,βⱼ)=(1,0) at endpoint-contact indices.",
      ),
      step(
        "Multiply and cancel",
        "The nonzero vertices cancel around the recurrence chain. The closure gives the Laurent relation, and N=qd+e gives the polynomial relation.",
      ),
      step(
        "Identify the Farey interval and product data",
        "The determinant qκ-pN=1 and denominator sum q+N>N make p/q and κ/N Farey neighbours. The lifted q-step return places x strictly between them.",
      ),
      step(
        "Fix the phase without modular ambiguity",
        "Choose each factor argument as the lifted gap between consecutive vertices. The closure index identity telescopes to equation (1.9).",
      ),
    ],
    takeaway:
      "For N≥4, the case with more than one relative-interior contact in some orbit yields a determinant-one Farey interval, a complete varying-parameter product relation, and an exact phase.",
  },
  {
    itemNumber: 58,
    label: "Proposition 8.6",
    vocabulary: [
      vocabulary(
        "One relative-interior contact in each orbit",
        "The relative-interior contact interval contains exactly one index from each contact-permutation orbit: φ=δ. In standard orbit terminology it is an orbit transversal.",
      ),
      vocabulary(
        "Orbit length L and reduced step K",
        "L=N/δ and K=κ/δ. Addition by K modulo L is one complete reduced orbit.",
      ),
    ],
    intuition:
      "When there is exactly one relative-interior contact in each orbit, the common orbit length supplies a backward recurrence chain. Whether to reflect depends on which endpoint denominator is already smaller; δ≥2 and δ=1 make opposite choices.",
    proofSteps: [
      step(
        "Build the common orbit recurrence",
        "The first L-1 destination indices are endpoint contacts and the L-th return is a relative-interior contact, giving λ^Lxᵢ=ξᵢ for each of the δ relative-interior contact indices.",
      ),
      step(
        "Close the recurrence chain",
        "Choose h with Kh≡-1 mod L. The orbit from xδ reaches x₀ through endpoint-contact indices, so λ^h xδ=x₀.",
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
        "The reflected case inherits the lifted phase from Lemma 8.3. In the δ=1 case, assign the actual vertex gap to u₁ and A to every factor with β=0, then telescope.",
      ),
    ],
    takeaway:
      "The case with exactly one relative-interior contact in each orbit also has ordered Farey product data, including the reflected negative-exponent case and the case completed by factors with β=0.",
  },
  {
    itemNumber: 59,
    label: "Lemma 8.7",
    vocabulary: [
      vocabulary(
        "Common continuous argument interval",
        "The interval [A,M) in the open upper half-plane containing the continuously chosen argument of every factor μ^q-βⱼ. Jensen's inequality is not used until a later topic.",
      ),
    ],
    intuition:
      "Every factor moves on the same horizontal segment in the upper half-plane. The Farey interval keeps that segment above the real axis, while the vertex recurrences choose the actual lifted arguments rather than only their classes modulo 2π.",
    figure: "jensen-sheet",
    proofSteps: [
      step(
        "Bound the left angle",
        "From q+s>N≥4 and q≤s obtain s≥3. Determinant one and the Farey inequalities give 0<A<2π/s<π.",
      ),
      step(
        "Keep each factor in the open upper half-plane",
        "For 0≤β<1, Im(μ^q-β)=|μ|^q sin A>0, so each factor has one argument in (0,π).",
      ),
      step(
        "Order arguments along the segment",
        "As β increases, the factor moves strictly left with fixed positive imaginary part. Its argument increases continuously from A toward M.",
      ),
      step(
        "Match geometric and analytic branches",
        "Direct vertex gaps handle the case with more than one relative-interior contact in some orbit. Reflection of the recurrence chain handles both reflected cases, and the δ=1 one-contact-per-orbit construction assigns A to its factors with β=0.",
      ),
    ],
    takeaway:
      "All factors share one controlled branch uⱼ∈[A,M), ready for the later application of Jensen’s inequality.",
  },
] as const;

const unbadgedSourceRelations = new Map<number, string>([
  [
    57,
    "The manuscript proves this exact return-case formulation. Karpelevič is cited as a structural antecedent; no priority category is assigned without a statement-level match.",
  ],
  [
    58,
    "The manuscript proves this exact return-case formulation. Karpelevič is cited as a structural antecedent; no priority category is assigned without a statement-level match.",
  ],
  [
    59,
    "The manuscript proves the common-argument-interval statement used later. The cited works provide surrounding boundary-product context; no priority category is assigned without a statement-level match.",
  ],
]);

const coreResults = guides.map((guide) => {
  const result = makeReaderResult(topicVIIReaderHtmlByItem, guide);
  const sourceRelation = unbadgedSourceRelations.get(guide.itemNumber);
  return sourceRelation
    ? { ...result, provenance: undefined, sourceRelation }
    : result;
});

const theorem14Item = getProofItems([4])[0];
if (!theorem14Item) throw new Error("Missing proof metadata for Theorem 1.4");

const theorem14ProofSteps: readonly GuidedProofStep[] = [
  step(
    "Keep the contact orientation provisional",
    "Apply the half-open contact-assignment theorem but postpone selecting μ until the return case is known.",
  ),
  step(
    "Identity case",
    "Choose μ=λ̄ and use Lemma 8.4; the ordered Farey interval has denominators 1<N.",
  ),
  step(
    "More than one relative-interior contact in some orbit",
    "In the standing N≥4 range, choose μ=λ and use Proposition 8.5 together with the first-return identity Δ=1; the right endpoint denominator is N.",
  ),
  step(
    "One relative-interior contact per orbit, δ≥2",
    "Choose μ=λ̄ and Proposition 8.6(a); reflection orders the denominators and gives a negative integer closing exponent.",
  ),
  step(
    "One relative-interior contact per orbit, δ=1",
    "Keep μ=λ and use Proposition 8.6(b); the original Farey interval already has the smaller denominator first.",
  ),
  step(
    "Unify the argument branch",
    "In every case the same selected μ satisfies the polynomial relation, Laurent relation, and phase identity. Lemma 8.7 supplies 0<A<M<π and uⱼ∈[A,M).",
  ),
];

const theorem14: ProofResultData = {
  id: "part-i-item-4",
  label: "Theorem 1.4",
  kind: "Theorem",
  title: "Closed-return product and Farey data",
  purpose:
    "States the common conclusion of the three return cases before Lemmas 8.4–8.7 prove it: one selected eigenvalue, one Farey interval, a varying-parameter product relation, and one exact phase identity.",
  manuscriptHtml: theorem14Parts.statementHtml,
  vocabulary: [
    vocabulary(
      "Selected eigenvalue μ",
      "One of the conjugate eigenvalues λ or λ̄, selected only after the return case is known and then kept fixed through every product and phase identity.",
    ),
    vocabulary(
      "Integer closing exponent e",
      "The integer e=s-dq with d=floor(N/q). It may be negative; equation (1.6) remains a polynomial relation for the selected value of μ.",
    ),
  ],
  intuition:
    "This is the target statement. Each following return case chooses its orientation exactly once, and the final disclosure assembles those cases into the proof without repeating the theorem or its equations.",
  takeaway:
    "Keep equations (1.5)–(1.9) as the common conclusion while reading the three case constructions below.",
  sourceIds: theorem14Item.sourceIds,
  sourceRelation:
    "The manuscript proves this exact orientation-sensitive formulation. The cited works provide classical boundary and product antecedents; no priority category is assigned without a statement-level comparison.",
};

const theorem14ProofAssembly = (
  <section
    aria-labelledby="topic-vii-theorem-1-4-proof-heading"
    className="topic-i-formal proof-chapter-formal proof-chapter-deferred-proof"
    id="topic-vii-theorem-1-4-proof"
  >
    <p className="section-label">Final proof assembly</p>
    <h4 id="topic-vii-theorem-1-4-proof-heading">Proof of Theorem 1.4</h4>
    <p>
      The theorem and equations (1.5)–(1.9) were stated once before the case
      analysis. This final disclosure now assembles Lemma 8.4, Propositions
      8.5–8.6, and Lemma 8.7.
    </p>
    <details className="topic-i-proof-disclosure proof-chapter-proof">
      <summary>
        <span>Complete proof</span>
        Open the manuscript proof and its guided explanation
      </summary>
      <div
        className="part-i-manuscript topic-i-collapsible-proof-text"
        dangerouslySetInnerHTML={{ __html: theorem14Parts.proofHtml }}
      />
      <section
        aria-label="Guided explanation of Theorem 1.4"
        className="proof-chapter-guided-proof"
      >
        <header>
          <h5>Guided proof</h5>
        </header>
        <ol>
          {theorem14ProofSteps.map((proofStep, index) => (
            <li key={`${index}-${proofStep.title}`}>
              <span>{index + 1}</span>
              <div>
                <h6>{proofStep.title}</h6>
                <div>{proofStep.explanation}</div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </details>
    <p className="proof-item-takeaway proof-chapter-takeaway">
      <span>What survives</span>
      The critical-polygon geometry is compressed into finite Farey product
      data without changing orientation after the eigenvalue has been selected.
    </p>
  </section>
);

export const topicVIIGroups: readonly AdvancedProofGroup[] = [
  {
    number: "I",
    title: "Farey adjacency and exact reflection",
    introduction: (
      <p>
        Lattice determinant one identifies neighbouring fractions. Reflection
        then transports a complete closed return-recurrence chain, including its lifted phase,
        to the opposite complex orientation.
      </p>
    ),
    results: coreResults.slice(0, 3),
  },
  {
    number: "II",
    title: "Build the Farey product data in every return case",
    introduction: (
      <p>
        The identity case, the case with more than one relative-interior
        contact in some orbit, and the one-contact-per-orbit case each produce
        a varying-parameter product relation. The selected orientation and
        integer closing exponent are decided separately and explicitly. The
        target theorem is stated first so its numbered equations are available
        throughout the case analysis.
      </p>
    ),
    formalSetups: [
      {
        id: "topic-vii-n-ge-4-scope",
        title: "Standing scope for the critical-polygon product theorem: N≥4",
        html: String.raw`
          <p>
            Proposition 8.5 invokes Theorem 7.11, which proves that the
            first-return step is Δ=1, and Theorem 1.4 assembles the resulting
            contact-return normal form. Both are used
            here only for <strong>N≥4</strong>. The finite Farey lemmas above do
            not require that restriction. The stochastic regions of orders
            one, two, and three are established by a separate direct proof in
            Topic XIII, which is forthcoming on the public site.
          </p>
        `,
      },
    ],
    results: [theorem14, ...coreResults.slice(3, 6)],
  },
  {
    number: "III",
    title: "One continuous argument interval and the proof assembly",
    introduction: (
      <p>
        The Farey interval places all factors on one upper-half-plane argument
        branch. The case constructions then assemble into the proof of the
        closed-return product theorem stated above.
      </p>
    ),
    results: [coreResults[6]],
    postlude: theorem14ProofAssembly,
  },
] as const;

export const topicVIIImported: readonly ProofDependency[] = [
  {
    label: "Topic VI: completed first-return cases",
    href: sitePath("/proof/topic-vi/#thm:critical-polygon-normal-form"),
    explanation:
      "For N≥4, the identity case, the one-contact-per-orbit case, and the case with more than one contact in some orbit are exhaustive; in the last case the first return is the adjacent successor.",
  },
  {
    label: "Topic V: determinant-one return interval and completed recurrence chains",
    href: sitePath("/proof/topic-v/#cor:endpoint-padded-section"),
    explanation:
      "The determinant-one record edge supplies q,p,d,e; endpoint-contact indices supply the factors with β=0 needed to complete the recurrence chain.",
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
    label: "Topic IV: half-open contact assignment",
    href: sitePath("/proof/topic-iv/#lem:one-sided-contact"),
    explanation:
      "The return cases start from one fixed contact orientation, multiplier, contact permutation, and interval of relative-interior contact indices.",
  },
  {
    label: "Topic IV: lifted endpoint paths",
    href: sitePath("/proof/topic-iv/#lem:lifted-endpoint-paths"),
    explanation:
      "Consecutive lifted vertex arguments and relative-interior side contacts remove every hidden multiple of 2π.",
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
      "Lemma 8.3 explicitly conjugates, reverses, and re-lifts the entire recurrence chain rather than relying on an informal symmetry argument.",
  },
] as const;

export const topicVIISourceIds = collectSourceIds(
  topicVIIGroups.flatMap((group) => group.results),
);
