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
  theorem13CompleteHtml,
  topicVIReaderHtmlByItem,
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

export const topicVISetup: AdvancedProofSetup = {
  id: "topic-vi-imported-notation",
  title: "Notation and exact facts imported from Topics II–V",
  html: String.raw`
    <p>
      Throughout Topic VI, <strong>N≥4</strong>. Let V be the underlying
      two-dimensional real vector space and let T:V→V be the fixed invertible
      real-linear contraction. After choosing the complex coordinate from
      Topic I, identify V with ℂ so that Tz=λz for a nonreal number λ with
      |λ|&lt;1. For a compact convex set Q⊂V, Ext(Q) denotes its set of extreme
      points and int(Q) its interior in V. The map T is <em>N-critical</em>:
      N is the smallest number of
      vertices of a nondegenerate invariant polygon, and for every real
      t&gt;1 the enlarged map tT has no invariant polygon with at most N
      vertices. Here a <em>strict polygon</em> has nonempty interior and its
      displayed cyclic list consists exactly of its distinct extreme points,
      with no redundant listed points. The polygon
      <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>P</mi><mo>=</mo><mi mathvariant="normal">conv</mi><mo stretchy="false">{</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>x</mi><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">P=\operatorname{conv}\{x_0,\ldots,x_{N-1}\}</annotation></semantics></math>
      has exactly these extreme points in positive cyclic order and satisfies
      λP⊆P. Its side with label i is
      <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>E</mi><mi>i</mi></msub><mo>=</mo><mo stretchy="false">[</mo><msub><mi>x</mi><mrow><mi>i</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>,</mo><msub><mi>x</mi><mi>i</mi></msub><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">E_i=[x_{i-1},x_i]</annotation></semantics></math>;
      all polygon indices are read modulo N. Write
      ℰ(P)={E<sub>i</sub>:i∈ℤ/Nℤ} for the cyclic set of sides of P.
    </p>
    <p>
      Topic IV supplies contact points
      <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>ξ</mi><mi>i</mi></msub><mo>=</mo><mi>λ</mi><msub><mi>x</mi><mrow><mi>i</mi><mo>−</mo><mi>κ</mi></mrow></msub><mo>∈</mo><msub><mi>E</mi><mi>i</mi></msub></mrow><annotation encoding="application/x-tex">\xi_i=\lambda x_{i-\kappa}\in E_i</annotation></semantics></math>,
      where 1≤κ&lt;N throughout the deformation argument. (The final assembly
      of Theorem 1.3 treats the identity representative κ=N separately.)
      After cyclic relabelling, the side indices whose
      contacts lie in the relative interiors of their sides form
      <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">B</mi><mo>=</mo><mo stretchy="false">{</mo><mn>1</mn><mo>,</mo><mo>…</mo><mo>,</mo><mi>φ</mi><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">\mathcal B=\{1,\ldots,\varphi\}</annotation></semantics></math>.
      Put δ=gcd(N,κ); δ is the number of orbits of addition by κ on the N
      cyclic labels. Topic VI treats the case φ&gt;δ and proves
      that its first-return step is one. For a nondegenerate segment [a,b],
      relint[a,b] means the open segment obtained by deleting its two
      endpoints.
    </p>
    <p>
      Topic V proves that the first-return map on 𝓑 is the translation
      <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mo stretchy="false">(</mo><mi>j</mi><mo stretchy="false">)</mo><mo>=</mo><mi>j</mi><mo>+</mo><mi>Δ</mi><mspace width="0.5em"></mspace><mo stretchy="false">(</mo><mi mathvariant="normal">mod</mi><mspace width="0.3em"></mspace><mi>φ</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">r(j)=j+\Delta\pmod\varphi</annotation></semantics></math>.
      Its inverse is s. Topic V proves that there are integers q&gt;0 and
      h≥0 such that every return time H<sub>j</sub> belongs to
      {q,q+h}; when h=0 there is only one distinct height. Moreover,
      <math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>F</mi><mo stretchy="false">(</mo><mi>t</mi><mo>,</mo><mi>j</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">[</mo><mi>j</mi><mo>+</mo><mi>t</mi><mi>κ</mi><msub><mo stretchy="false">]</mo><mi>N</mi></msub><mo>,</mo><mspace width="1.5em"></mspace><mn>1</mn><mo>≤</mo><mi>j</mi><mo>≤</mo><mi>φ</mi><mo>,</mo><mspace width="0.5em"></mspace><mn>0</mn><mo>≤</mo><mi>t</mi><mo>&lt;</mo><msub><mi>H</mi><mi>j</mi></msub></mrow><annotation encoding="application/x-tex">F(t,j)=[j+t\kappa]_N,\qquad 1\le j\le\varphi,\ 0\le t&lt;H_j</annotation></semantics></math>
      is a bijection onto the N polygon labels. Thus every polygon vertex
      has one and only one return-time representation.
    </p>
    <p>
      To rule out Δ&gt;1, Topic V selects distinct consecutive boundary
      vertices X<sub>0</sub>,…,X<sub>m+1</sub> that do not traverse the whole
      polygon, contact points C<sub>i</sub> in
      relint[X<sub>i−1</sub>,X<sub>i</sub>], and supporting lines
      ℒ<sub>i</sub> meeting P only at X<sub>i</sub>. These are exactly the
      <a href="${sitePath("/proof/topic-v/#def:projective-corridor")}">boundary-contact data of Definition 7.4</a>,
      whose successive perspectivities define the line-to-line projectivity
      used below.
      Topic V also selects a set M of moved base indices, one distinguished
      base b<sub>*</sub>, and a disjoint exhaustive partition
      <math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">B</mi><mo>=</mo><mi>D</mi><mo>⊔</mo><mi>R</mi><mo>⊔</mo><mo stretchy="false">{</mo><mi>c</mi><mo stretchy="false">}</mo><mo>⊔</mo><mi>A</mi><mo>,</mo><mspace width="1.5em"></mspace><mi>c</mi><mo>=</mo><mi>r</mi><mo stretchy="false">(</mo><msub><mi>b</mi><mo>*</mo></msub><mo stretchy="false">)</mo><mo>.</mo></mrow><annotation encoding="application/x-tex">\mathcal B=D\mathbin{\dot\cup}R\mathbin{\dot\cup}\{c\}\mathbin{\dot\cup}A,\qquad c=r(b_*).</annotation></semantics></math>
      For k∈D the assigned side line moves and its source is fixed; for k∈R
      the source moves and the assigned side line is fixed; for k∈A both
      remain fixed. The incidence at c is the only one not imposed in
      advance. The forward and reverse formulas defining these sets are
      proved in <a href="${sitePath("/proof/topic-v/#prop:return-edge-ledger")}">Proposition 7.3</a>.
    </p>
    <p>
      Two earlier results supply the final logical safeguards. Lemma 2.8 from
      Topic II places any specified finite family of nonzero determinant
      signs, relative-interior incidences, and strict side inequalities on one
      common small parameter interval. Theorem 3.2 says that for every
      invariant polygon Q with at most N vertices, every extreme point of λQ
      lies on ∂Q. Topic VI will construct an invariant polygon violating that
      conclusion if Δ&gt;1.
    </p>
  `,
};

const guides: readonly ReaderResultGuide[] = [
  {
    itemNumber: 45,
    label: "Lemma 7.6",
    vocabulary: [
      vocabulary(
        "Successive perspectivities",
        "Each step projects from one projective line to the next through the displayed contact point. Their composition is the return projectivity used below.",
      ),
      vocabulary(
        "Supporting line ℒᵢ and its slope ℓᵢ",
        "ℒᵢ is the line meeting the polygon only at Xᵢ. In the affine chart chosen in Topic V, ℓᵢ denotes its slope; these are different objects.",
      ),
      vocabulary(
        "Special final intersection W*",
        "Start the recursion at Z₁=X₀. The last projection meets the final contact line at W*. Lemma 7.6 locates W* strictly between Cₘ and Cₘ₊₁.",
      ),
    ],
    intuition:
      "In the affine chart from Topic V, the selected boundary chain is a convex graph with strictly increasing side slopes. Comparing an incoming line with the supporting line at two horizontal coordinates locates each successive intersection and, at the end, places W* strictly between the final two contacts.",
    proofSteps: [
      step(
        "Use the affine chart from Topic V",
        "Write Xᵢ=(tᵢ,fᵢ) with t₀<⋯<tₘ₊₁. Convexity gives strictly increasing side slopes m₁<⋯<mₘ₊₁, and the supporting-line slope satisfies mᵢ<ℓᵢ<mᵢ₊₁.",
      ),
      step(
        "Locate the first incoming slope",
        "The displayed formula for ρ₂ has positive coefficients and a positive denominator, so it is a strict convex combination of m₁ and m₂. Hence m₁<ρ₂<m₂.",
      ),
      step(
        "Prove the inductive comparison",
        "Assume the preceding projected point lies above the backward extension of the next polygon side. Evaluating at the contact point and dividing by its positive horizontal displacement gives ρᵢ<mᵢ.",
      ),
      step(
        "Locate each Zᵢ",
        "At the contact abscissa the incoming line lies above ℒᵢ; at the vertex abscissa it lies below. Their slopes are different, so they meet once, with cᵢ<zᵢ<tᵢ.",
      ),
      step(
        "Continue the induction",
        "Because ℓᵢ<mᵢ₊₁ and zᵢ<tᵢ, the point Zᵢ lies above the backward extension of the following side, which is precisely the hypothesis required at the next step.",
      ),
      step(
        "Locate the final intersection",
        "The closing slope is a strict convex combination of ℓₘ and mₘ₊₁. Its difference from the contact line has opposite signs at Cₘ and Cₘ₊₁, so the unique zero W* lies in relint[Cₘ,Cₘ₊₁].",
      ),
      step(
        "Undo the coordinate change",
        "The inverse projective transformation preserves incidence and the relative interior of the segment, so the conclusion holds in the original coordinates.",
      ),
    ],
    takeaway:
      "For the special starting point Z₁=X₀, the return point has normalized coordinate strictly between 0 and 1.",
    sourceRelation:
      "The exact statement and proof are supplied here. The cited literature provides historical projective background; no priority claim is made for this formulation.",
  },
  {
    itemNumber: 46,
    label: "Lemma 7.7",
    vocabulary: [
      vocabulary(
        "Real projective automorphism",
        "An invertible fractional-linear map of the real projective line. Near a finite fixed point 0 it can be written u(t)=at/(1+ct), with a≠0.",
      ),
    ],
    intuition:
      "The difference t-u(t) is explicit. If the derivative at zero is not one, choosing the sign of t decides its sign; if the derivative is one, the calibration 0<u(1)<1 forces a positive quadratic leading term.",
    proofSteps: [
      step(
        "Write the fractional-linear normal form",
        "On an interval about 0 where its denominator is nonzero, write u(t)=at/(1+ct).",
      ),
      step(
        "Subtract the diagonal",
        "Direct algebra gives t-u(t)=t(1-a+ct)/(1+ct).",
      ),
      step(
        "Handle a≠1",
        "Choose the sign of t so that t(1-a)>0, then take |t| small enough that neither the numerator correction nor the denominator changes the sign.",
      ),
      step(
        "Handle a=1",
        "The inequality 0<u(1)<1 forces c>0. Therefore t-u(t)=ct²/(1+ct)>0 for every sufficiently small nonzero t.",
      ),
    ],
    takeaway:
      "Every neighbourhood of zero contains a nonzero t with t-u(t)>0; t is not required to be positive.",
  },
  {
    itemNumber: 47,
    label: "Theorem 7.8",
    vocabulary: [
      vocabulary(
        "Real deformation parameter τ",
        "The parameter in X₁(τ)=(1-τ)X₁+τX₀. It is allowed to have either sign.",
      ),
      vocabulary(
        "Scalar projective map u",
        "The composition of all successive perspectivities, followed by the affine coordinate on the final contact line that sends Cₘ₊₁ to 0 and Cₘ to 1.",
      ),
      vocabulary(
        "Planar line functional 𝒮 and its one-dimensional restriction d",
        "𝒮(x,τ) is the oriented determinant defined for every planar point x. Its restriction to x=z(t) on the final contact line is d(t,τ). Thus 𝒮>0 defines a planar half-plane, whereas the factorization d(t,τ)=γ(τ)(t-u(τ)) is one-dimensional.",
      ),
    ],
    intuition:
      "The successive projections give one scalar projective map u. The inequality u(τ)<τ compares two points on the final contact line. A positive determinant factor converts that line ordering into the statement that Y(τ) lies in the polygon-interior half-plane of the moving closing side.",
    figure: "holonomy-escape",
    proofSteps: [
      step(
        "Verify every perspectivity",
        "Each projection centre lies on neither its source nor its target line, and those lines are distinct. Hence every step is a projective isomorphism.",
      ),
      step(
        "Compose the return projectivity",
        "Compactify the starting-parameter line and compose the verified perspectivities. The final affine coordinate gives a real projective automorphism u.",
      ),
      step(
        "Calibrate u at 0 and 1",
        "At τ=0 the return is Cₘ₊₁, so u(0)=0. At τ=1, Lemma 7.6 places the return strictly between Cₘ₊₁ and Cₘ, so 0<u(1)<1.",
      ),
      step(
        "Choose a common interval with no poles",
        "At τ=0 every intersection is finite. Only finitely many denominators occur, so one open interval about zero keeps every construction finite and continuous.",
      ),
      step(
        "Separate the planar and one-dimensional determinants",
        "The inequality 𝒮(x,τ)>0 defines the open half-plane bounded by the moving final side line. On x=z(t), the returned intersection is z(u(τ)); affinity in t therefore gives d(t,τ)=γ(τ)(t-u(τ)).",
      ),
      step(
        "Determine the sign of γ",
        "Substitution at τ=0 and t=1 expresses γ(0) as a positive multiple of the oriented determinant of three consecutive chain vertices. Continuity keeps γ positive after the interval is shortened.",
      ),
      step(
        "Preserve distinctness, cyclic order, and convex position",
        "There are finitely many cyclic triple determinants. They are nonzero with a common sign at τ=0, so continuity preserves their signs on one smaller interval; the triple-sign criterion then keeps the vertices distinct, in the same cyclic order, and in convex position.",
      ),
      step(
        "Choose τ only after all open conditions hold",
        "Lemma 7.7 supplies a nonzero τ in the final interval with τ-u(τ)>0. Thus d(τ,τ)>0, equivalently 𝒮(Y(τ),τ)>0, so Y(τ) lies in the interior half-plane.",
      ),
    ],
    takeaway:
      "An arbitrarily small signed motion sends the final image into the required open half-plane while keeping the displayed vertices distinct, cyclically ordered, and in convex position.",
  },
  {
    itemNumber: 48,
    label: "Lemma 7.9",
    vocabulary: [
      vocabulary(
        "Vertex index ιᵢ",
        "The polygon index of Xᵢ: it is i in the forward case and φ-i in the reverse case.",
      ),
      vocabulary(
        "Side index kᵢ",
        "For 2≤i≤m+1, kᵢ is i in the forward case and φ-i+1 in the reverse case, so Cᵢ=ξₖᵢ. It is unrelated to the scalar factor γ(τ) in Theorem 7.8.",
      ),
      vocabulary(
        "Deformed polygon vertices x̂ₖ(τ)",
        "If F(t,j)=k, define x̂ₖ(τ)=λᵗBⱼ(τ). The bijectivity of F makes this one unambiguous definition for each polygon index k.",
      ),
      vocabulary(
        "Final image V̂ₖ(τ)",
        "For side index k, this is the image of the last point in the return-time orbit segment whose assigned side is k.",
      ),
    ],
    intuition:
      "Conditional on the return-time bijection and four-case partition proved in Topic V, moving the selected base vertices determines all N polygon vertices. Exact identities handle internal images and nonclosing final images; continuity preserves the finitely many remaining open conditions. Only the inequality for side c remains to be decided.",
    figure: "topic-vi-return-partition",
    proofSteps: [
      step(
        "Identify the local chain inside the return-time data",
        "The explicit forward and reverse formulas show that i↦ιᵢ is a bijection from the moving chain indices to M and that i↦kᵢ is a bijection onto D. They also identify b*, c, and the exponent a=H_b*.",
      ),
      step(
        "Define each base point and polygon vertex once",
        "Use Xᵢ(τ) for bases in M and xⱼ for bases outside M. Since F is bijective, the formula x̂_F(t,j)(τ)=λᵗBⱼ(τ) assigns exactly one continuous point to every polygon index.",
      ),
      step(
        "Preserve the full cyclic vertex list",
        "At τ=0 the deformed vertices equal the original vertices. Simultaneous convex admissibility yields one interval on which they remain distinct extreme points in the same positive cyclic order.",
      ),
      step(
        "Propagate internal orbit levels exactly",
        "Whenever t+1<Hⱼ, multiplication gives λx̂_F(t,j)(τ)=x̂_F(t+1,j)(τ) identically. No openness argument is involved.",
      ),
      step(
        "Use the four cases for final images",
        "For k∈D the source is fixed and the assigned line moves; for k∈R the source moves and the assigned line is fixed; for k∈A both stay fixed. In each nonclosing case, the Topic V identities give exact membership in the assigned side line.",
      ),
      step(
        "Upgrade line membership to relative-interior membership",
        "At τ=0 each nonclosing final image lies in the relative interior of its side. Finitely many open affine-coordinate inequalities preserve all those relative-interior incidences on one common interval.",
      ),
      step(
        "Preserve the other side inequalities for Y(τ)",
        "At τ=0, Y(0) lies strictly inside every side half-plane except the one with index c. Continuity preserves these N-1 strict inequalities simultaneously.",
      ),
      step(
        "State the exact remaining condition",
        "The only unchecked inequality is G_c(τ)>0. If it holds, every image vertex lies in Pτ, so λPτ⊆Pτ, while Y(τ) is the unique extreme point of λPτ in int(Pτ).",
      ),
    ],
    takeaway:
      "Using the exact Topic V bijection and partition, the local motion extends to all polygon vertices and leaves only the single inequality G_c(τ)>0 to check.",
    sourceRelation:
      "The exact statement and proof are supplied here. The cited literature provides historical context; no priority claim is made for this formulation.",
  },
  {
    itemNumber: 49,
    label: "Theorem 7.10",
    vocabulary: [],
    intuition:
      "Theorem 7.8 supplies nonzero parameters arbitrarily close to zero for which the distinguished final image is in the interior half-plane. Lemma 7.9 supplies one neighbourhood on which every other condition for the full polygon is already valid. Choosing a parameter in both sets proves the theorem.",
    proofSteps: [
      step(
        "Use the local half-plane conclusion",
        "Theorem 7.8 gives arbitrarily small nonzero τ for which the distinguished final image and Xₘ₋₁(τ) lie in the same open half-plane bounded by the moving final side line.",
      ),
      step(
        "Choose τ inside the global interval",
        "Select one of those parameters in the common interval U from Lemma 7.9, after cyclic order, all nonclosing incidences, and all other side inequalities have been stabilized.",
      ),
      step(
        "Verify the remaining inequality",
        "The preserved cyclic order and convex position identify the half-plane containing Xₘ₋₁(τ) as the polygon-interior half-plane, so the local conclusion is exactly G_c(τ)>0.",
      ),
      step(
        "Apply Lemma 7.9",
        "The lemma now gives λPτ⊆Pτ and identifies Y(τ) as the unique extreme point of λPτ lying in int(Pτ).",
      ),
    ],
    takeaway:
      "If Δ>1, there is an invariant N-gon whose image polygon has one vertex in the interior of the outer polygon.",
  },
  {
    itemNumber: 50,
    label: "Theorem 7.11",
    vocabulary: [
      vocabulary(
        "First-return step Δ",
        "For j in the base interval 𝓑, the first return of addition by κ is r(j)=j+Δ modulo φ. The conclusion Δ=1 says that the first return reaches the immediate cyclic successor.",
      ),
    ],
    intuition:
      "If Δ>1, Theorem 7.10 produces an invariant polygon Pτ with an extreme point of λPτ in int(Pτ). Topic II proves that no invariant polygon of an N-critical map can have such a point. Therefore Δ>1 is impossible.",
    figure: "unit-return",
    proofSteps: [
      step(
        "Assume N≥4 and Δ>1",
        "Topic V supplies the proper consecutive boundary chain, its exposing supporting lines, and the disjoint four-case partition required by Theorem 7.10.",
      ),
      step(
        "Construct the deformed invariant polygon",
        "Theorem 7.10 gives Pτ with λPτ⊆Pτ and Y(τ)∈Ext(λPτ)∩int(Pτ).",
      ),
      step(
        "Apply the exact Topic II conclusion",
        "Theorem 3.2 applies to every invariant polygon with at most N vertices and requires every extreme point of λPτ to lie on ∂Pτ.",
      ),
      step(
        "Derive the contradiction",
        "The same point Y(τ) cannot lie both in int(Pτ) and on ∂Pτ. Hence Δ>1 is impossible.",
      ),
      step(
        "Use positivity of the return step",
        "The return step is a positive integer. With all values greater than one excluded, Δ=1.",
      ),
    ],
    takeaway:
      "For every N≥4 critical polygon whose relative-interior contact set meets some contact-permutation orbit more than once, the first return reaches the next base index: Δ=1.",
  },
  {
    itemNumber: 51,
    label: "Remark 7.12",
    vocabulary: [],
    intuition:
      "The shortest permitted chain, the equality between the two case bounds, the time-zero record, and every possible number of contact-permutation orbits are all covered by the formulas already proved.",
    proofSteps: [
      step(
        "The value Δ=2",
        "The forward case still has m=2, so the displayed chain has the required internal projections and still omits at least one polygon side.",
      ),
      step(
        "The equality 2Δ=φ+1",
        "By definition this belongs to the forward case. The endpoint crossing in the cyclic labels is already included in the explicit formula for R.",
      ),
      step(
        "The value h=0",
        "Topic V proves h=0 exactly when φ=N. The transported terminal-side identity then reduces to the ordinary cyclic identity; no extra case is needed.",
      ),
      step(
        "Any orbit count δ",
        "Only the inequality φ>δ and the first-return decomposition use δ. No additional projective case depends on its value.",
      ),
    ],
    takeaway:
      "The proof of Δ=1 covers all endpoint and limiting arithmetic values within its stated N≥4 scope.",
  },
  {
    itemNumber: 52,
    label: "Remark 7.13",
    vocabulary: [],
    intuition:
      "The choice of τ is local, but its use is global. The local projective map provides τ-u(τ)>0; the return-time bijection, four-case partition, exact incidences, and finite side inequalities ensure that this one change extends to a valid invariant polygon.",
    takeaway:
      "The argument uses a local inequality near a fixed point together with separate global indexing, incidence, relative-interior, and side-inequality assertions.",
  },
] as const;

const guidedResults = guides.map((guide) => {
  const result = makeReaderResult(topicVIReaderHtmlByItem, guide);
  if (![45, 48].includes(guide.itemNumber)) return result;
  return { ...result, provenance: undefined };
});

const theorem13Item = getProofItems([3])[0];
if (!theorem13Item) throw new Error("Missing proof metadata for Theorem 1.3");

const theorem13: ProofResultData = {
  id: "part-i-item-3",
  label: "Theorem 1.3",
  kind: "Theorem",
  title: "Contact and first-return structure of an N-critical invariant polygon",
  purpose:
    "Assembles the contact construction, permitted local replacements, reduction to one interval, and the completed first-return cases into Theorem 1.3.",
  manuscriptHtml: theorem13CompleteHtml,
  vocabulary: [
    vocabulary(
      "One representative from each orbit",
      "A subset of the cyclic labels that contains exactly one member of every orbit of addition by κ.",
    ),
    vocabulary(
      "Three first-return cases",
      "The contact permutation is the identity; the relative-interior contact interval contains one representative from each orbit; or it contains more than one representative from some orbit, in which case Topic VI proves Δ=1 for N≥4.",
    ),
  ],
  intuition:
    "Every required component is now available. The proof separates the identity case, the one-representative-per-orbit case, and the larger-interval case, and invokes only the precise conclusion assigned to each earlier topic.",
  proofSteps: [
    step(
      "Choose the fixed coordinate and contact data",
      "Topic I gives the complex coordinate; Topics II–IV give the boundary contacts, their consistent orientation, and the permitted local vertex-replacement rule.",
    ),
    step(
      "Handle the identity contact permutation",
      "If the chosen representative is κ=N, every contact lies in the relative interior of its own side and φ=N=δ.",
    ),
    step(
      "Reduce the nonidentity case to one interval",
      "For 1≤κ<N, Topic IV realizes the permitted updates geometrically and produces one cyclic interval 𝓑 of relative-interior contact indices with φ≥δ.",
    ),
    step(
      "Handle one representative from each orbit",
      "If φ=δ, the interval meets each orbit once, so every return time is the common orbit length N/δ.",
    ),
    step(
      "Handle the larger interval",
      "If φ>δ and N≥4, Topic V supplies the two-height first-return decomposition and Theorem 7.11 proves Δ=1. Topic V states the separate N=3 critical-triangle exception explicitly.",
    ),
  ],
  takeaway:
    "The intrinsic polygonal part of the argument is complete; stochastic matrices and Farey boundary equations have not yet been used.",
  sourceIds: theorem13Item.sourceIds,
  sourceRelation:
    "The exact assembly and proof are given here. The displayed sources document earlier boundary-contact and return constructions but do not establish a statement-level priority claim for this theorem.",
};

const assemblySetup: AdvancedProofSetup = {
  id: "topic-vi-theorem-1-3-assembly",
  title: "What remains to assemble Theorem 1.3",
  html: String.raw`
    <p>
      Let ℰ(P) be the cyclic set of sides of P. For an oriented side e, write
      tail(e) and head(e) for its two endpoints in boundary order and put
      e<sup>▷</sup>=(tail(e),head(e)], the side with its tail deleted and its head
      retained. A <dfn>half-open contact assignment</dfn> is a
      cyclic-order-preserving bijection χ from the vertices of P to ℰ(P)
      such that Tv belongs to χ(v)<sup>▷</sup> for every vertex v. Thus χ
      specifies exactly which oriented half-open side receives each image
      vertex.
    </p>
    <p>
      The set I consists of those sides e for which
      Tχ<sup>−1</sup>(e) lies in relint(e). If succ(e) is the next side, then
      σ(e)=χ(head(e)) is the contact permutation. When e∈I and succ(e)∉I, the
      <dfn>permitted local vertex replacement at e</dfn> replaces head(e) by
      v′=Tχ<sup>−1</sup>(e). The induced bijection
      b<sub>e</sub>:ℰ(P)→ℰ(P′) sends e to [tail(e),v′], sends succ(e) to
      [v′,head(succ(e))], and identifies every other side with its unchanged
      boundary segment. This is the induced bijection between the old and new
      side sets, denoted by b in Theorem 1.3.
    </p>
    <p>
      The formal theorem calls this operation a <dfn>permitted local vertex
      replacement</dfn>. Its <dfn>relative-interior contact set</dfn> is I,
      and its <dfn>contact permutation</dfn> is σ.
    </p>
    <p>
      The phrase <dfn>one representative from each σ-orbit</dfn> means that
      I meets every orbit of the finite permutation σ in exactly one side.
      If δ is the number of those orbits, this condition is equivalent here
      to |I|=φ=δ. When φ&gt;δ, at least one orbit contributes more than one
      side, and the first-return calculation of Topics V–VI applies.
    </p>
    <p>
      The theorem now uses only conclusions already proved. Topic I supplies
      the complex coordinate; Topics II–IV supply the boundary contacts,
      their consistent orientation, and the permitted replacement just
      defined; Topic IV reduces I to one cyclic interval; Topic V computes
      its first returns; and Theorem 7.11 above settles the remaining N≥4
      case by proving Δ=1.
    </p>
  `,
};

export const topicVIGroups: readonly AdvancedProofGroup[] = [
  {
    number: "1",
    title: "Locate the final intersection",
    introduction: (
      <p>
        Ordered slopes in the affine chart locate the result of each
        successive perspectivity and place the special final intersection
        strictly between the last two contacts.
      </p>
    ),
    results: guidedResults.slice(0, 1),
  },
  {
    number: "2",
    title: "Choose a small parameter and identify its half-plane",
    introduction: (
      <p>
        A fractional-linear calculation gives a signed parameter with
        τ−u(τ)&gt;0. A planar determinant then translates that scalar inequality
        into the required geometric side of the moving line.
      </p>
    ),
    results: guidedResults.slice(1, 3),
  },
  {
    number: "3",
    title: "Extend the deformation and prove Δ = 1",
    introduction: (
      <p>
        The return-time bijection defines all N deformed vertices. Exact
        identities and finitely many open inequalities make the polygon
        invariant; the boundary theorem from Topic II then excludes Δ&gt;1.
      </p>
    ),
    results: guidedResults.slice(3),
  },
  {
    number: "4",
    title: "Assemble the contact and first-return conclusions",
    introduction: (
      <p>
        The identity, one-representative-per-orbit, and larger-interval cases
        now combine into Theorem 1.3.
      </p>
    ),
    formalSetups: [assemblySetup],
    results: [theorem13],
  },
] as const;

export const topicVIImported: readonly ProofDependency[] = [
  {
    label: "Topic I: N-criticality and the adapted complex coordinate",
    href: sitePath("/proof/#prop:adapted-complex"),
    explanation:
      "N-criticality is defined by the minimal invariant-polygon vertex count and its failure under every radial enlargement; the elliptic contraction is represented here by multiplication by λ.",
  },
  {
    label: "Topic IV: one cyclic interval of relative-interior contact indices",
    href: sitePath("/proof/topic-iv/#lem:one-block"),
    explanation:
      "After permitted local replacements and cyclic relabelling, the contact indices are 𝓑={1,…,φ}, with φ at least the orbit count δ.",
  },
  {
    label: "Topic V: return-time decomposition",
    href: sitePath("/proof/topic-v/#thm:rotation-section"),
    explanation: (
      <>
        The first return on 𝓑 is addition by Δ, the return times are Hⱼ,
        and F(t,j)=[j+tκ]<sub>N</sub> is a bijection onto all N polygon
        labels.
      </>
    ),
  },
  {
    label: "Topic V: boundary chain and four-case partition",
    href: sitePath("/proof/topic-v/#prop:return-edge-ledger"),
    explanation:
      "For Δ>1, a proper consecutive boundary chain is selected and 𝓑 is partitioned disjointly as D⊔R⊔{c}⊔A, with the source and assigned side line specified in each case.",
  },
  {
    label: "Topic II: simultaneous admissibility",
    href: sitePath("/proof/topic-ii/#lem:simultaneous-convex-openness"),
    explanation:
      "One common neighbourhood preserves the finite collection of cyclic determinant signs, relative-interior incidences, and strict side inequalities used below.",
  },
  {
    label: "Topic II: every image vertex lies on the outer boundary",
    href: sitePath("/proof/topic-ii/#thm:hereditary-saturation"),
    explanation:
      "Theorem 3.2 says literally: if R is an invariant polygon with at most N vertices for an N-critical map, every extreme point of λR lies on ∂R.",
  },
] as const;

export const topicVIBackground: readonly ProofDependency[] = [
  {
    label: "Real projectivities and perspectivities",
    explanation:
      "The fractional-linear normal form and every incidence condition required for the projections are stated and checked directly in Lemma 7.7 and Theorem 7.8.",
  },
];

export const topicVISourceIds = collectSourceIds(
  topicVIGroups.flatMap((group) => group.results),
);
