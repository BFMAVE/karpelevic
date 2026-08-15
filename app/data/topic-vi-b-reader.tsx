import { AdvancedProofFigure } from "../components/proof/AdvancedProofFigure";
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
  theorem13CompleteHtml,
  topicVIBReaderHtmlByItem,
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
    itemNumber: 48,
    label: "Lemma 7.9",
    vocabulary: [
      vocabulary(
        "Chain-label map ιᵢ",
        "The polygon label carried by Xᵢ: i in the forward branch and φ-i in the reverse branch.",
      ),
      vocabulary(
        "Contact-field map γᵢ",
        "The side label carried by Cᵢ. It is a local label map unrelated to an angle gap bearing the same Greek letter elsewhere.",
      ),
      vocabulary(
        "Base function Bⱼ(τ)",
        "The moving chain point assigned to a moved base j, and the original fixed vertex xⱼ for every base outside M.",
      ),
      vocabulary(
        "Global vertex function x̂ₖ(τ)",
        "The point λᵗBⱼ(τ) assigned through the unique tower state F(t,j)=k. The hat means deformed, not normalized.",
      ),
      vocabulary(
        "Top return V̂ₖ(τ)",
        "The image after the full height of the unique source tower whose target field is k.",
      ),
      vocabulary(
        "Exact collinearity",
        "An algebraic identity puts a return point on its assigned side line. Relative-interior membership is a separate open condition checked afterwards.",
      ),
      vocabulary(
        "Closing defect",
        "The one side inequality Gc(τ) not fixed by continuity. It is a controlled missing inequality, not a singularity.",
      ),
    ],
    intuition:
      "The tower bijection assigns every label exactly once. Moving only the selected bases determines every polygon vertex by powers of λ. The four disjoint target sets then assign each top return one and only one geometric mechanism, leaving the closing image as the sole unresolved incidence.",
    figure: "global-ledger",
    proofSteps: [
      step(
        "Embed the local chain in the global tower",
        "Use the branch label maps to identify every moving Xᵢ with one moved base. Verify separately that the two fixed corridor endpoints are genuine fixed global tower vertices.",
      ),
      step(
        "Assign every vertex once",
        "The map i↦ιᵢ is a bijection onto M, so each base has one formula. The tower map F is a bijection, so each polygon label has one state preimage and one global vertex formula.",
      ),
      step(
        "Preserve strict cyclic order",
        "At τ=0 all deformed vertices equal the original vertices. Simultaneous convex admissibility gives one interval on which the entire list stays distinct, extreme, and positively cyclic.",
      ),
      step(
        "Propagate internal states exactly",
        "For t+1<Hⱼ, direct multiplication gives λx̂F(t,j)=x̂F(t+1,j). No openness or side convention is involved.",
      ),
      step(
        "Register every strict side line",
        "Fields D are recursion lines, R∪A remain fixed, and c is the closing line. The disjoint four-set partition accounts for all strict side labels.",
      ),
      step(
        "Partition every image source",
        "Internal states and tower tops are disjoint and count N-φ and φ. Their images exhaust all N source vertices through the bijection F.",
      ),
      step(
        "Account for the four top-return classes",
        "D uses fixed sources on controlled lines, R uses supported moving sources on fixed lines, A is unchanged, and c is the one closing return Y(τ).",
      ),
      step(
        "Upgrade lines to side interiors",
        "For every nonclosing strict field, exact collinearity holds for all τ and the original contact is in the relative interior. Finite openness preserves all these incidences on one common interval.",
      ),
      step(
        "Check all nonclosing side inequalities",
        "At τ=0 the closing contact satisfies every other strict side inequality. Apply the finite perturbation lemma to all N-1 side tests, including sides not drawn in the corridor.",
      ),
      step(
        "Identify the sole image defect",
        "The source k*=F(a-1,b*) is extreme in Pτ, so invertibility of λ makes Y extreme in λPτ. If Gc>0, all N side inequalities put Y inside Pτ; every other image vertex stays on the boundary.",
      ),
      step(
        "Conclude invariance",
        "All image vertices belong to Pτ, so convexity gives λPτ⊆Pτ and Y is the unique element of Ext(λPτ)∩int(Pτ).",
      ),
    ],
    takeaway:
      "The local corridor motion has become a fully labelled invariant-polygon deformation with exactly one unresolved side inequality.",
  },
  {
    itemNumber: 49,
    label: "Theorem 7.10",
    vocabulary: [
      vocabulary(
        "Global return-corridor deformation",
        "A parameter choice satisfying every conclusion of Lemma 7.9 and also opening the closing inequality toward the polygon interior.",
      ),
    ],
    intuition:
      "Topic VI-A already found escaping parameters. Lemma 7.9 has now built one common interval on which such a parameter is globally admissible. The short proof simply chooses from their intersection.",
    proofSteps: [
      step(
        "Take a local escape",
        "Theorem 7.8 supplies nonzero escape parameters accumulating at zero.",
      ),
      step(
        "Choose it inside the global interval",
        "Select one inside the final common interval U from Lemma 7.9, after every label, side, and inequality has been stabilized.",
      ),
      step(
        "Identify the interior side",
        "Strict cyclic order makes the nonincident vertex Xₘ₋₁(τ) lie in the polygon-interior half-plane of the closing side.",
      ),
      step(
        "Apply the exact criterion",
        "The escape condition is Gc(τ)>0. Lemma 7.9(v) gives invariance and the unique interior image vertex.",
      ),
    ],
    takeaway:
      "Whenever the nonunit corridor exists, it can be opened inward without breaking any other part of the invariant polygon.",
  },
  {
    itemNumber: 50,
    label: "Theorem 7.11",
    vocabulary: [
      vocabulary(
        "Skipping",
        "A first return by Δ>1 on the strict interval. It jumps over at least one base instead of returning to the immediate cyclic successor.",
      ),
      vocabulary(
        "Hereditary image-vertex saturation",
        "For every invariant replacement N-gon of an N-critical map, every vertex of its image polygon lies on the outer polygon boundary.",
      ),
    ],
    intuition:
      "For N≥4, a skipped return gives a proper boundary chain long enough to create one interior image vertex. Criticality has already been strengthened into a statement that forbids that phenomenon for every replacement polygon, so the return step must be one.",
    proofSteps: [
      step(
        "Assume a skip in the N≥4 regime",
        "Take N≥4 and Δ>1. Lemma 7.2 supplies a proper chain, including every boundary parameter case.",
      ),
      step(
        "Assemble the corridor hypotheses",
        "Lemma 7.1 gives the required exposing supporting lines, and Proposition 7.3 gives the exact partition of source–target pairs.",
      ),
      step(
        "Run the global deformation",
        "Theorem 7.10 produces a strict invariant N-gon with Y(τ) an image-polygon vertex lying in its interior.",
      ),
      step(
        "Invoke the exact forbidden clause",
        "Hereditary image-vertex saturation says every image-polygon vertex must lie on the boundary of every such replacement polygon.",
      ),
      step(
        "Conclude unit return",
        "Within the standing N≥4 scope, the contradiction excludes Δ>1. Since Δ is a positive integer, Δ=1.",
      ),
    ],
    takeaway:
      "For every N≥4 critical polygon, a nontransversal first return advances to the adjacent base.",
  },
  {
    itemNumber: 51,
    label: "Remark 7.12",
    vocabulary: [
      vocabulary(
        "Boundary-case accounting",
        "An explicit check that limiting arithmetic values do not collapse labels, erase a support, or create an unlisted deformation case.",
      ),
    ],
    intuition:
      "No generic-position phrase is hiding an exceptional case. The shortest corridor, the equality branch, time-zero record, and arbitrary orbit number all remain literal.",
    proofSteps: [
      step("Δ=2", "The forward chain still has two internal steps and the same four-set partition."),
      step(
        "2Δ=φ+1",
        "This equality belongs to the forward branch; the single wrap r(Δ)=1 lands on the fixed anchor line.",
      ),
      step(
        "h=0",
        "Theorem 6.1 makes this equivalent to φ=N. The transported terminal side is then the ordinary cyclic identity.",
      ),
      step(
        "Any δ",
        "The orbit count enters only through φ>δ and the return section; it creates no new projective deformation case.",
      ),
    ],
    takeaway:
      "Within its stated N≥4 scope, the unit-return proof has no suppressed endpoint or orbit exception.",
  },
  {
    itemNumber: 52,
    label: "Remark 7.13",
    vocabulary: [
      vocabulary(
        "Fixed-point germ",
        "The behaviour of the normalized projectivity in an arbitrarily small neighbourhood of its fixed point.",
      ),
      vocabulary(
        "Protective invariant",
        "The combined local and global structure that allows one incidence to move while guaranteeing every other label, edge, and inequality remains valid.",
      ),
    ],
    intuition:
      "The projective germ creates the escape, but the proof is safe only because the global incidence accounting proves there is exactly one freedom and checks every other condition before using it.",
    takeaway:
      "The local return projectivity plus exhaustive global accounting is the mechanism that rules out a skipped return.",
  },
] as const;

const coreResults = guides.map((guide) =>
  makeReaderResult(topicVIBReaderHtmlByItem, guide),
);

const theorem13Item = getProofItems([3])[0];
if (!theorem13Item) throw new Error("Missing proof metadata for Theorem 1.3");

const theorem13: ProofResultData = {
  id: "part-i-item-3",
  label: "Theorem 1.3",
  kind: "Theorem",
  title: theorem13Item.title,
  purpose:
    "This assembly theorem collects hereditary saturation, exact mutation, interval reduction, and the completed return dichotomy in one intrinsic statement.",
  manuscriptHtml: theorem13CompleteHtml,
  vocabulary: [
    vocabulary(
      "Complete transversal",
      "A strict interval containing exactly one base from each orbit of the contact rotation.",
    ),
    vocabulary(
      "Return dichotomy",
      "Identity rotation gives all contacts strict; a transversal gives the common orbit return; every larger strict interval has adjacent-successor first return.",
    ),
  ],
  intuition:
    "Every module now exports exactly the contract needed by the next. The final proof is an assembly: it treats identity, transversal, and nontransversal regimes separately and never reopens the internal projective indices.",
  proofSteps: [
    step(
      "Choose coordinates and contacts",
      "Use an adapted complex coordinate, hereditary saturation, least-area selection, and cyclic interlacing to obtain the one-sided contact representation.",
    ),
    step(
      "Identity rotation",
      "If κ=N, the contact rotation is the identity, every contact is strict, no mutation is legal, and φ=N=δ.",
    ),
    step(
      "Nonidentity mutation system",
      "For 1≤κ<N, exact surgery realizes the update i↦i+κ and preserves the contact rotation.",
    ),
    step(
      "Reduce to one interval",
      "Choose a lexicographically minimal mutation-reachable strict set. Topic IV proves it is one interval of length φ≥δ.",
    ),
    step(
      "Transversal return",
      "If φ=δ, the interval meets each orbit once, so every return time equals the orbit length N/δ.",
    ),
    step(
      "Nontransversal return",
      "For N≥4, if φ>δ, Theorem 6.1 supplies a two-height return by Δ and Theorem 7.11 forces Δ=1. The N=3 critical-triangle exception lies outside Theorem 1.3.",
    ),
  ],
  takeaway:
    "The intrinsic polygonal engine is complete; no stochastic boundary theorem or Farey formula has been used.",
  sourceIds: theorem13Item.sourceIds,
  sourceRelation:
    "The theorem assembles a strengthened saturation statement with contact and first-return mechanisms having antecedents in Dmitriev-Dynkin and Karpelevič. A Karpelevič antecedent alone is not displayed as “Previously known.”",
};

export const topicVIBGroups: readonly AdvancedProofGroup[] = [
  {
    number: "I",
    title: "Transport the local motion to every label",
    introduction: (
      <p>
        The tower bijection, side-line registry, and finite side inequalities
        turn one corridor motion into a globally admissible polygonal
        deformation.
      </p>
    ),
    results: coreResults.slice(0, 1),
  },
  {
    number: "II",
    title: "Escape, contradiction, and boundary audit",
    introduction: (
      <p>
        One parameter opens the sole closing edge. Hereditary saturation
        forbids the resulting interior image vertex, including every limiting
        arithmetic case.
      </p>
    ),
    results: coreResults.slice(1),
  },
  {
    number: "III",
    title: "The completed intrinsic normal form",
    introduction: (
      <p>
        The identity, transversal, and nontransversal regimes now assemble
        into the manuscript&apos;s first principal theorem.
      </p>
    ),
    results: [theorem13],
  },
] as const;

export const topicVIBImported: readonly ProofDependency[] = [
  {
    label: "Topic V: projective scope N≥4",
    href: sitePath("/proof/topic-v/#topic-v-projective-scope"),
    explanation:
      "The local and global projective deformation is used only for N≥4; Topic V displays the critical-triangle exception separately.",
  },
  {
    label: "Topic I: adapted complex coordinates",
    href: sitePath("/proof/#prop:adapted-complex"),
    explanation:
      "The assembly proof begins by representing the elliptic contraction as multiplication by its contact eigenvalue.",
  },
  {
    label: "Topic IV: one-sided contact representative",
    href: sitePath("/proof/topic-iv/#lem:one-sided-contact"),
    explanation:
      "Least-area selection and cyclic interlacing supply the oriented contact representation used in Theorem 1.3.",
  },
  {
    label: "Topic IV: exact mutation law",
    href: sitePath("/proof/topic-iv/#cor:intrinsic-mutation-law"),
    explanation:
      "Every legal geometric surgery realizes exactly the update by the contact rotation and preserves the contact data.",
  },
  {
    label: "Topic IV: reduced strict block",
    href: sitePath("/proof/topic-iv/#lem:one-block"),
    explanation:
      "A mutation-reachable representative has one strict cyclic interval, with the transversal and nontransversal regimes separated by its orbit count.",
  },
  {
    label: "Topic VI-A: local corridor escape",
    href: sitePath("/proof/topic-vi/a/#thm:projective-corridor-escape"),
    explanation:
      "Arbitrarily small signed parameters open the closing contact toward the preceding-chain side while preserving local strict convexity.",
  },
  {
    label: "Topic V: tower bijection and exact incidence partition",
    href: sitePath("/proof/topic-v/#prop:return-edge-ledger"),
    explanation:
      "Every polygon label has one tower state and every strict top return has one of four disjoint mechanisms.",
  },
  {
    label: "Topic II: hereditary saturation",
    href: sitePath("/proof/topic-ii/#thm:hereditary-saturation"),
    explanation:
      "Every vertex of the image of every admissible replacement N-gon lies on its boundary.",
  },
  {
    label: "Topic II: simultaneous convex admissibility",
    href: sitePath("/proof/topic-ii/#part-i-item-12"),
    explanation:
      "One common neighbourhood preserves finitely many convex-order, side-incidence, and strict side inequalities.",
  },
] as const;

export const topicVIBBackground: readonly ProofDependency[] = [
  {
    label: "Extreme points under invertible maps",
    explanation:
      "The elementary identity Ext(AP)=A Ext(P) was proved in Topic I and identifies Y as a vertex of the image polygon.",
  },
] as const;

export const topicVIBSourceIds = collectSourceIds(
  topicVIBGroups.flatMap((group) => group.results),
);

export const topicVIBLeadFigure = <AdvancedProofFigure kind="global-ledger" />;
