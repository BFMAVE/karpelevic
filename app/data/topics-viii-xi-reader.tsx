import type { ProofResultData } from "../components/proof/ProofResult";
import { StochasticFareyFigure } from "../components/proof/figures/StochasticFareyFigures";
import { sitePath } from "../lib/site-path";
import { partIIHtmlByLabel } from "./part-ii-content.generated";
import { topicsVIIItoXIProofHtmlByLabel } from "./topics-viii-xi-proofs.generated";

type PartIILabel = keyof typeof partIIHtmlByLabel;

const proofHtml = topicsVIIItoXIProofHtmlByLabel as Readonly<Record<string, string>>;

const crossTopicAnchors: Readonly<Record<string, string>> = {
  "lem:lattice-parallelogram-count": sitePath(
    "/proof/topic-v/#lem:lattice-parallelogram-count",
  ),
  "lem:strict-area-monotonicity": sitePath(
    "/proof/topic-iii/#part-i-item-69",
  ),
  "karp:eq:new-shell": sitePath("/proof/topic-viii/#karp:eq:new-shell"),
  "karp:prop:new-shell-critical": sitePath(
    "/proof/topic-viii/#karp:prop:new-shell-critical",
  ),
  "karp:lem:farey-adjacency-expanded": sitePath(
    "/proof/topic-ix/#karp:lem:farey-adjacency-expanded",
  ),
  "karp:eq:A-B-absolute": sitePath(
    "/proof/topic-ix/#karp:eq:A-B-absolute",
  ),
  "karp:eq:scalar-radius": sitePath(
    "/proof/topic-ix/#karp:eq:scalar-radius",
  ),
  "karp:eq:alpha-beta-ray": sitePath(
    "/proof/topic-ix/#karp:eq:alpha-beta-ray",
  ),
  "karp:eq:Ito-carrier": sitePath(
    "/proof/topic-ix/#karp:eq:Ito-carrier",
  ),
  "karp:eq:reduced-carrier": sitePath(
    "/proof/topic-ix/#karp:eq:reduced-carrier",
  ),
  "karp:prop:scalar-ray": sitePath(
    "/proof/topic-ix/#karp:prop:scalar-ray",
  ),
  "karp:thm:compression": sitePath(
    "/proof/topic-x/#karp:thm:compression",
  ),
  "karp:lem:reflection-dictionary": sitePath(
    "/proof/topic-x/#karp:lem:reflection-dictionary",
  ),
  "karp:thm:hetero-sharp": sitePath(
    "/proof/topic-x/#karp:thm:hetero-sharp",
  ),
  "karp:sec:realization": sitePath("/proof/topic-xi/"),
  "karp:sec:nesting": sitePath("/proof/topic-xii/b/"),
  "karp:sec:completion": sitePath("/proof/topic-xiii/"),
};

function relinkCrossTopicReferences(html: string): string {
  let linked = html.replaceAll(
    'href="/proof/topic-vii/#topic-vii-monodromy"',
    `href="${sitePath("/proof/topic-vii/#part-i-item-4")}"`,
  );
  for (const [anchor, href] of Object.entries(crossTopicAnchors)) {
    linked = linked.replaceAll(`href="#${anchor}"`, `href="${href}"`);
  }
  return linked;
}

function completeHtml(label: PartIILabel): string {
  return relinkCrossTopicReferences(
    `${partIIHtmlByLabel[label]}${proofHtml[label] ?? ""}`,
  );
}

function rewriteTopicVIIIVisibleTerminology(html: string): string {
  const replacements = [
    [
      "New-shell extrema are polygonally critical",
      "A radial boundary point new at order N is N-critical",
    ],
    [
      "Non-inherited radial maxima are polygonally critical",
      "A radial boundary point new at order N is N-critical",
    ],
    [
      "Polygonal complexity and radial criticality",
      "Polygonal complexity and N-criticality",
    ],
    ["new-shell radial extremum", "radial boundary point new at order N"],
    ["new-shell extremum", "radial boundary point new at order N"],
    ["Radial filling", "Star-shapedness with respect to the origin"],
    ["radial filling", "star-shapedness with respect to the origin"],
  ] as const;

  return html
    .split(/(<[^>]+>)/g)
    .map((part) => {
      if (part.startsWith("<")) return part;
      return replacements.reduce(
        (text, [from, to]) => text.replaceAll(from, to),
        part,
      );
    })
    .join("");
}

function completeTopicVIIIHtml(label: PartIILabel): string {
  return rewriteTopicVIIIVisibleTerminology(completeHtml(label));
}

function rewriteTopicIXVisibleTerminology(html: string): string {
  const replacements = [
    ["Farey adjacency criterion", "Criterion for consecutive Farey fractions"],
    ["Farey-neighbour criterion", "criterion for consecutive Farey fractions"],
    ["Farey-neighbor criterion", "criterion for consecutive Farey fractions"],
    ["Farey cells", "Farey intervals"],
    ["Farey cell", "Farey interval"],
    ["open cell", "open interval"],
    ["terminal cell", "exceptional interval"],
    ["One scalar equation per ray", "A unique modulus at each prescribed argument"],
    ["Cellwise Farey–Ito candidate curve", "Candidate curve on a Farey interval"],
    ["Boundary extraction", "Certified numerical evaluation"],
    ["q≤s", "q<s"],
    ["scalar candidate", "candidate point"],
    ["Scalar candidate", "Candidate point"],
    ["specified rooted identity", "displayed identity (II.2.10)"],
    ["rooted identity", "identity (II.2.10)"],
    ["directed error bounds", "outward-rounded interval enclosures"],
    ["directed enclosure", "outward-rounded interval enclosure"],
    [
      "lem:lattice-parallelogram-count",
      "the lattice-parallelogram lemma from Topic V",
    ],
  ] as const;

  return html
    .split(/(<[^>]+>)/g)
    .map((part) => {
      if (part.startsWith("<")) return part;
      return replacements.reduce(
        (text, [from, to]) => text.replaceAll(from, to),
        part,
      );
    })
    .join("");
}

function completeTopicIXHtml(label: PartIILabel): string {
  return rewriteTopicIXVisibleTerminology(completeHtml(label));
}

export const topicVIIIResults: readonly ProofResultData[] = [
  {
    id: "topic-viii-compact",
    label: "Proposition II.4.1",
    kind: "Proposition",
    title: "Compactness, symmetry under complex conjugation, and the disk bound",
    purpose: "Establishes the three global facts needed before the radial function is defined.",
    manuscriptHtml: completeTopicVIIIHtml("karp:prop:compact"),
    intuition: <>A stochastic row takes an average, so it cannot make the largest coordinate larger. Real characteristic polynomials reflect nonreal roots across the real axis, and a closed eigenpair equation prevents attainable roots from disappearing in a limit.</>,
    proofSteps: [
      { title: "Compact matrix space", explanation: <>The row-sum equations and nonnegativity inequalities define a closed set. Every entry lies between zero and one, so the set of stochastic matrices is bounded and therefore compact.</> },
      { title: "The maximum-coordinate estimate", explanation: <>For an eigenvector choose an index whose coordinate has maximum modulus. The corresponding stochastic average has modulus at most that same maximum, giving <span className="math-inline">|λ|≤1</span>.</>, check: <>The chosen maximum is positive because an eigenvector is nonzero.</> },
      { title: "A closed eigenpair set", explanation: <>Inside the compact product of the stochastic matrices and the closed unit disk, the equation <span className="math-inline">det(λI−A)=0</span> is a closed condition because the determinant is continuous.</> },
      { title: "Project to the eigenvalue", explanation: <>The projection of that compact eigenpair set to its second coordinate is exactly Θₙ, so Θₙ is compact.</> },
      { title: "Reflect the root", explanation: <>A real matrix has a characteristic polynomial with real coefficients; conjugating the equation preserves zero.</> },
    ],
    provenance: "Classical result",
    sourceIds: ["standard-linear-algebra", "rudin-principles", "ito-1997"],
    sourceRelation: <>The disk and symmetry statements occur in the classical theorem on stochastic eigenvalue regions; the compactness proof uses standard finite-dimensional topology.</>,
  },
  {
    id: "topic-viii-polygon-criterion",
    label: "Theorem II.4.2",
    kind: "Theorem",
    title: "Invariant-polytope criterion",
    purpose: "Proves the exact equivalence between a stochastic eigenpair and a finite invariant polytope.",
    manuscriptHtml: completeTopicVIIIHtml("karp:thm:polygon-criterion"),
    vocabulary: [
      {
        term: "Convex polytope",
        definition: <>The convex hull of finitely many points. In the plane this may be a segment; when it has nonempty interior it is a two-dimensional polygon.</>,
        example: <>Inside a triangle, three barycentric weights describe a point. The weights need not be unique if redundant points are included; existence is enough here.</>,
      },
      {
        term: "Block-diagonal enlargement",
        definition: <>If an <var>m</var>×<var>m</var> stochastic matrix has the required eigenpair and <var>m</var>&lt;<var>n</var>, replace it by <span className="math-inline">A⊕Iₙ₋ₘ</span> and append <var>n−m</var> zero coordinates to the eigenvector.</>,
      },
    ],
    intuition: <>The coordinates of a complex eigenvector are points in the plane. Each stochastic row says that the transformed coordinate λvᵢ is a convex average of all original coordinates. Conversely, convex-combination coefficients for the transformed vertices are already the rows of a stochastic matrix.</>,
    figure: <StochasticFareyFigure kind="eigenpolygon" />,
    proofSteps: [
      { title: "Take the convex hull of the eigenvector coordinates", explanation: <>Given <span className="math-inline">Av=λv</span>, place the coordinates <span className="math-inline">v₁,…,vₙ</span> in the complex plane and take their convex hull <var>P</var>.</> },
      { title: "Every transformed coordinate stays inside", explanation: <>The <var>i</var>-th eigenvector equation is a convex combination because row <var>i</var> is nonnegative and sums to one. Linear maps commute with convex hulls, so <span className="math-inline">λP⊆P</span>.</> },
      { title: "Handle the singleton hull", explanation: <>If all coordinates coincide, the nonzero eigenvector is constant and stochasticity forces λ=1. A fixed segment of positive length supplies the required non-singleton polytope.</> },
      { title: "Use convex-combination coefficients as stochastic rows", explanation: <>For each vertex xᵢ, choose convex-combination coefficients for λxᵢ in the polytope and put them in row <var>i</var>. The resulting matrix is row-stochastic and satisfies <span className="math-inline">Ax=λx</span>.</> },
      { title: "Increase the matrix order by a direct sum", explanation: <>If the polytope has <var>m&lt;n</var> vertices, set <span className="math-inline">Ã=A⊕Iₙ₋ₘ</span> and <span className="math-inline">x̃=(x₁,…,xₘ,0,…,0)ᵀ</span>. Then <span className="math-inline">Ãx̃=λx̃</span>.</>, check: <>The same construction shows <span className="math-inline">Θₘ⊆Θₙ</span> whenever <span className="math-inline">m≤n</span>.</> },
    ],
    takeaway: <>Counting stochastic states and counting vertices of an invariant polytope are the same existence problem; in particular, <span className="math-inline">Θₘ⊆Θₙ</span> for <span className="math-inline">m≤n</span>.</>,
    provenance: "Previously known",
    sourceIds: ["dmitriev-dynkin-1946", "swift-1972"],
    sourceRelation: <>Dmitriev and Dynkin use the invariant-polygon formulation; Swift supplies the English translation. The manuscript gives both directions explicitly.</>,
  },
  {
    id: "topic-viii-radial-filling",
    label: "Corollary II.4.3",
    kind: "Corollary",
    title: "Star-shapedness with respect to the origin",
    purpose: "Shows that every attainable point brings the entire segment from the origin with it.",
    manuscriptHtml: completeTopicVIIIHtml("karp:cor:radial-filling"),
    vocabulary: [
      { term: "Star-shapedness with respect to the origin", definition: <>If λ belongs to the region, then so does every <span className="math-inline">tλ</span> for <span className="math-inline">0≤t≤1</span>.</> },
      { term: "Strict area monotonicity", definition: <>If one planar convex body with interior is properly contained in another, its area is strictly smaller. See <a href={sitePath("/proof/topic-iii/#part-i-item-69")}>Topic III, Lemma A.5</a>.</> },
    ],
    intuition: <>Once an invariant polytope contains the origin, shrinking its transformed copy cannot leave it. The unit-modulus case first shows that the multiplier rotates a finite vertex orbit.</>,
    proofSteps: [
      { title: "Iteration puts zero in the polytope", explanation: <>When |λ|&lt;1, the iterates λᵏx stay in the closed polytope and converge to zero.</> },
      { title: "Convexity gives every smaller scalar multiple", explanation: <>From <span className="math-inline">0∈P</span>, convexity gives <span className="math-inline">tP⊆P</span>. Therefore <span className="math-inline">(tλ)P=t(λP)⊆tP⊆P</span>.</> },
      { title: "Unit modulus forces equality", explanation: <>If P has nonempty interior and |λ|=1, then λP and P have the same positive area. Inclusion plus strict area monotonicity forces <span className="math-inline">λP=P</span>.</> },
      { title: "A finite vertex orbit", explanation: <>Multiplication by λ permutes at most n vertices. A nonzero vertex returns after k≤n steps, so λᵏ=1.</> },
      { title: "Take the convex hull of the root orbit", explanation: <>Because <span className="math-inline">1+λ+⋯+λᵏ⁻¹=0</span>, zero is the equal-weight average of the orbit points. Their convex hull is fixed by λ and contains every smaller scalar multiple.</> },
      { title: "Handle the one-dimensional case", explanation: <>A unit-modulus image segment has the same length as the original segment, so inclusion is equality. Its supporting real line is invariant, forcing λ=±1; the nontrivial case λ=−1 uses [−1,1].</> },
    ],
    provenance: "Previously known",
    sourceIds: ["dmitriev-dynkin-1946", "swift-1972"],
    sourceRelation: <>The radial/star-shaped structure is part of the established stochastic eigenvalue theory; the page proves it through invariant polygons.</>,
  },
  {
    id: "topic-viii-unit-circle",
    label: "Proposition II.4.4",
    kind: "Proposition",
    title: "Points of Θₙ on the unit circle",
    purpose: "Identifies exactly which attainable eigenvalues can have modulus one.",
    manuscriptHtml: completeTopicVIIIHtml("karp:prop:unit-circle"),
    vocabulary: [
      { term: "Root of unity of order k", definition: <>A complex number λ with <span className="math-inline">λᵏ=1</span>, where the least positive such k is its order.</> },
      { term: "Cyclic permutation matrix", definition: <>A stochastic matrix that moves each basis state to the next and the last back to the first. Its eigenvalues are the corresponding roots of unity.</> },
    ],
    intuition: <>A unit-modulus rotation cannot fit a positive-area polygon strictly inside itself. It must permute a finite vertex set, and a finite rotation orbit is precisely a root of unity.</>,
    proofSteps: [
      { title: "Take an invariant polytope", explanation: <>Theorem II.4.2 supplies one with at most <var>n</var> vertices.</> },
      { title: "Area prevents strict inclusion", explanation: <>In the two-dimensional case, λP and P have equal area. Inclusion therefore means equality.</> },
      { title: "Permutation gives finite order", explanation: <>A nonzero vertex returns within at most n vertices, so λᵏ=1 for some k≤n.</> },
      { title: "The one-dimensional case", explanation: <>If the polytope is a segment, equal length makes λP=P; a unit complex multiplier preserving its supporting real line is 1 or −1.</> },
      { title: "Construct the converse", explanation: <>The permutation matrix of a <var>k</var>-cycle realizes every <var>k</var>-th root of unity. If <var>k&lt;n</var>, take its direct sum with <span className="math-inline">Iₙ₋ₖ</span>.</> },
    ],
    provenance: "Classical result",
    sourceIds: ["karpelevic-1951", "ito-1997", "standard-linear-algebra"],
    sourceRelation: <>This is the classical unit-circle clause of the Karpelevič theorem in Ito’s formulation, reproved here before any boundary arcs are used.</>,
  },
  {
    id: "topic-viii-origin-interior",
    label: "Lemma II.4.5",
    kind: "Lemma",
    title: "The origin is interior for a nonreal strict contraction",
    purpose: "Ensures that every invariant polytope relevant to an open upper-half-plane ray is two-dimensional and contains zero in its interior.",
    manuscriptHtml: completeTopicVIIIHtml("karp:lem:origin-interior"),
    vocabulary: [
      { term: "Supporting functional at zero", definition: <>A nonzero real-linear map ℓ such that <span className="math-inline">P⊆{"{"}x:ℓ(x)≥0{"}"}</span> and <span className="math-inline">ℓ(0)=0</span>. Its kernel is a supporting line of P at zero.</> },
      { term: "Finite order or dense powers", definition: <>The powers of a unit complex number either form a finite root-of-unity orbit or are dense on the unit circle.</> },
    ],
    intuition: <>Every orbit converges to zero. If zero lay on the boundary, one supporting half-plane would have to contain every rotated direction of a nonzero point, which is impossible for a genuinely nonreal rotation.</>,
    proofSteps: [
      { title: "Iteration reaches zero", explanation: <>The points λᵏz stay in P and converge to zero, so closedness places zero in P.</> },
      { title: "A segment of positive length is impossible", explanation: <>Once zero lies in a segment of positive length, its affine hull is a real line through zero. A nonreal rotation cannot preserve that line.</> },
      { title: "Choose a supporting functional at zero", explanation: <>If zero were on the boundary, a supporting-line theorem would give a nonzero real-linear functional ℓ with <span className="math-inline">ℓ≥0</span> on <var>P</var> and <span className="math-inline">ℓ(0)=0</span>. Since <var>P</var> has interior, choose <span className="math-inline">z∈P</span> with <span className="math-inline">ℓ(z)&gt;0</span>.</> },
      { title: "Retain the positive radial factor", explanation: <>Invariance gives <span className="math-inline">ρᵏeⁱᵏθz∈P</span>, hence <span className="math-inline">ρᵏℓ(eⁱᵏθz)≥0</span>. Since ρᵏ&gt;0, every <span className="math-inline">ℓ(eⁱᵏθz)</span> is nonnegative.</> },
      { title: "Finite rotation contradiction", explanation: <>The orbit vectors sum to zero. Their nonnegative ℓ-values also sum to zero, forcing ℓ(z)=0, contradiction.</> },
      { title: "Infinite rotation contradiction", explanation: <>Density puts some rotated point in the open half-plane where ℓ&lt;0.</> },
    ],
    sourceIds: ["standard-convexity"],
    sourceRelation: <>This result is imported and reproved from Topic I, Lemma 2.5. Its supporting-line input is standard convex geometry; no literature-priority classification is asserted.</>,
  },
  {
    id: "topic-viii-criticality-definition",
    label: "Definition II.4.6",
    kind: "Definition",
    title: "Polygonal complexity and the N-critical condition",
    purpose: "Restates the manuscript’s intrinsic terminology, with every symbol and both defining inequalities made literal.",
    manuscriptHtml: completeTopicVIIIHtml("karp:def:polygonal-criticality"),
    vocabulary: [
      { term: "Extreme-point set Ext(P)", definition: <>The set of vertices of <var>P</var>, equivalently the points of <var>P</var> that are not nontrivial convex combinations of other points of <var>P</var>.</> },
      { term: "Polygonal complexity", definition: <>The value ν<sub>poly</sub>(<i>A</i>) is the minimum number of vertices of a compact convex polygon <var>P</var> with nonempty interior and <span className="math-inline"><i>AP</i>⊆<i>P</i></span>; the value is ∞ if no such polygon exists.</> },
      { term: "Spectral radius", definition: <>The value spr(<i>A</i>) is the maximum modulus of the complex eigenvalues of the real-linear map <var>A</var>.</> },
      { term: "Elliptic contraction — manuscript terminology", definition: <>An elliptic real-linear map whose spectral radius lies in <span className="math-inline">(0,1)</span>. For multiplication by λ, the Euclidean operator norm and spr(<i>T</i><sub>λ</sub>) both equal |λ|.</> },
      { term: "N-critical — manuscript terminology", definition: <>The two conditions ν<sub>poly</sub>(<i>T</i>)=<var>N</var> and ν<sub>poly</sub>(<var>tT</var>)&gt;<var>N</var> for every <span className="math-inline">t&gt;1</span>.</> },
    ],
    intuition: <>The first equality records the exact minimum vertex count for <var>T</var>. The second says that multiplying <var>T</var> by any scalar <var>t&gt;1</var> makes every invariant polygon with at most <var>N</var> vertices impossible.</>,
    sourceIds: [],
    sourceRelation: <>This is the Part II restatement of the definitions introduced in Topic I. Definitions receive no novelty classification.</>,
  },
  {
    id: "topic-viii-new-shell-critical",
    label: "Proposition II.4.7",
    kind: "Proposition",
    title: "A radial boundary point new at order N is N-critical",
    purpose: "Converts the two stochastic boundary conditions into the two literal vertex-count inequalities in Definition II.4.6.",
    manuscriptHtml: completeTopicVIIIHtml("karp:prop:new-shell-critical"),
    intuition: <>Not belonging to Θ<sub>N−1</sub> says fewer than <var>N</var> vertices cannot work. Being outermost on the Θ<sub>N</sub> ray says no scalar multiple <span className="math-inline">tT<sub>λ</sub></span>, <span className="math-inline">t&gt;1</span>, can still work with at most <var>N</var> vertices.</>,
    proofSteps: [
      { title: "Write the real matrix", explanation: <>Multiplication by λ has matrix with real and imaginary parts in the basis (1,i).</> },
      { title: "Check ellipticity and contraction", explanation: <>Its discriminant is <span className="math-inline">−4(Im λ)²&lt;0</span>, while spr(<i>T</i><sub>λ</sub>)=|λ|∈(0,1).</> },
      { title: "At most N vertices", explanation: <>Membership in Θ<sub>N</sub> gives an invariant polytope with at most <var>N</var> vertices. Lemma II.4.5 shows that it has nonempty interior.</> },
      { title: "Not at most N−1 vertices", explanation: <>Otherwise the invariant-polytope criterion would place λ in Θ<sub>N−1</sub>, contradicting the hypothesis.</> },
      { title: "Exclude outward multiples still in the unit disk", explanation: <>If <span className="math-inline">t&gt;1</span> and <span className="math-inline">t|λ|≤1</span>, then <span className="math-inline">tλ</span> lies on the same ray at a radius larger than <i>R</i><sub>N</sub>(θ). Hence <span className="math-inline">tλ∉Θ<sub>N</sub></span>.</> },
      { title: "Exclude outward multiples beyond the unit disk", explanation: <>If <span className="math-inline">t|λ|&gt;1</span>, Proposition II.4.1 gives <span className="math-inline">tλ∉Θ<sub>N</sub></span> because Θ<sub>N</sub> lies in the closed unit disk.</> },
      { title: "Match the definition", explanation: <>The preceding conclusions are exactly ν<sub>poly</sub>(<i>T</i><sub>λ</sub>)=<var>N</var> and ν<sub>poly</sub>(<var>t</var><i>T</i><sub>λ</sub>)&gt;<var>N</var> for all <span className="math-inline">t&gt;1</span>.</> },
    ],
    takeaway: <>For <span className="math-inline">N≥4</span>, every radial boundary point in Θ<sub>N</sub>∖Θ<sub>N−1</sub> satisfying equation (II.4.3) meets the full hypothesis of <a href={sitePath("/proof/topic-vii/#part-i-item-4")}>Topic VII&apos;s finite product theorem</a>. The lower orders are handled directly in Topic XIII.</>,
    sourceIds: ["dmitriev-dynkin-1946", "karpelevic-1951"],
    sourceRelation: <>This proposition is derived in the manuscript from Theorem II.4.2, Lemma II.4.5, and Definition II.4.6. The cited works are historical antecedents for invariant polytopes and stochastic radial boundary points; no separate literature-priority claim is made here.</>,
  },
] as const;

export const topicVIIISourceIds = Array.from(
  new Set(topicVIIIResults.flatMap((result) => result.sourceIds ?? [])),
);

export const topicIXResults: readonly ProofResultData[] = [
  {
    id: "topic-ix-farey-adjacency",
    label: "Lemma II.2.1",
    kind: "Lemma",
    title: "Criterion for consecutive Farey fractions",
    purpose: "Recognizes consecutive fractions using only a determinant and a denominator bound.",
    manuscriptHtml: completeTopicIXHtml("karp:lem:farey-adjacency-expanded"),
    vocabulary: [
      { term: "Reduced fraction", definition: <>A fraction a/b with b&gt;0 whose numerator and denominator have greatest common divisor one.</>, example: <>The rational number 2/6 appears in a Farey sequence as the reduced fraction 1/3.</> },
      { term: "Farey sequence Fₙ", definition: <>All reduced fractions in [0,1] with denominator at most n, written in increasing order.</> },
      { term: "Primitive lattice vector", definition: <>An integer vector whose coordinates have greatest common divisor one. The reduced fraction a/b corresponds to the primitive vector (b,a).</> },
      { term: "Mediant", definition: <>The fraction (a+c)/(b+d), which lies strictly between a/b and c/d.</> },
    ],
    intuition: <>Determinant one means the primitive endpoint vectors form a basis of the integer lattice. The condition b+d&gt;n says even the mediant has denominator too large for Fₙ.</>,
    proofSteps: [
      { title: "Encode an intermediate fraction", explanation: <>For a/b&lt;h/k&lt;c/d, the positive integers m=ck−dh and ℓ=bh−ak are the two determinants obtained from the endpoint and intermediate primitive vectors.</> },
      { title: "Use determinant one", explanation: <>The identity bc−ad=1 gives the exact lattice decomposition <span className="math-inline">(k,h)=m(b,a)+ℓ(d,c)</span>, hence k≥b+d.</> },
      { title: "Exclude denominator at most n", explanation: <>If b+d&gt;n, every intermediate reduced fraction has denominator larger than n.</> },
      { title: "Exclude determinant larger than one", explanation: <>Topic V’s lattice-parallelogram lemma supplies a nonzero integer point strictly inside the fundamental parallelogram spanned by the endpoint vectors.</> },
      { title: "Read an intermediate slope", explanation: <>That point and its complementary representative have slopes strictly between the endpoints; one has first coordinate at most (b+d)/2≤n.</> },
      { title: "Exclude a small denominator sum", explanation: <>If b+d≤n, the reduced mediant lies in Fₙ between the endpoints. Both necessary conditions follow.</> },
    ],
    takeaway: <>Two reduced fractions in Fₙ are consecutive exactly when their determinant is one and their denominator sum exceeds <var>n</var>.</>,
    provenance: "Classical result",
    sourceIds: ["standard-farey"],
    sourceRelation: <>This is the classical criterion for consecutive Farey fractions, with the converse proved using the lattice count already established in Topic V.</>,
  },
  {
    id: "topic-ix-ito-family",
    label: "Definition II.2.2",
    kind: "Definition",
    title: "Ito polynomial family",
    purpose: "Associates one polynomial family with each interval between consecutive Farey fractions.",
    manuscriptHtml: completeTopicIXHtml("karp:def:ito-family"),
    vocabulary: [
      { term: "Reduced Ito polynomial", definition: <>After cancelling only for λ≠0, the equation is written in two cases according to the sign of the integer <span className="math-inline">e=s−dq</span>, so both sides remain polynomials.</> },
    ],
    intuition: <>The uncancelled equation works for either sign of <var>e</var>. Cancelling only for λ≠0 exposes the reduced polynomial without silently leaving a negative exponent. The polynomial equation may have several roots; it does not by itself select the continuous root used below.</>,
    takeaway: <>The Ito equation defines a polynomial family; Proposition II.2.3 selects the particular point at each argument.</>,
    sourceIds: ["ito-1997"],
    sourceRelation: <>Ito introduced this polynomial equation for two consecutive Farey fractions.</>,
  },
  {
    id: "topic-ix-scalar-ray",
    label: "Proposition II.2.3",
    kind: "Proposition",
    title: "A unique modulus at each prescribed argument",
    purpose: "Determines exactly one modulus at each argument in the open Farey interval without presupposing a polynomial root branch.",
    manuscriptHtml: completeTopicIXHtml("karp:prop:scalar-ray"),
    intuition: <>Two complex vectors at opposite signed angles A and B can have their vertical components cancel. The scalar equation is precisely what makes the recovered coefficients α and β add to one.</>,
    proofSteps: [
      { title: "Verify the angle range", explanation: <>Writing x as an affine combination of the consecutive endpoints gives explicit formulas for |qx−p| and |sx−r|. They imply A&gt;0, B&gt;0, and A+B&lt;π.</> },
      { title: "A monotone scalar function", explanation: <>Both exponents are positive and both sine coefficients are positive, so the left side is continuous and strictly increasing in ρ.</> },
      { title: "Bracket the unique root", explanation: <>At ρ=0 the left side is zero. At ρ=1 the identity <span className="math-inline">sin A+sin B−sin(A+B)=4 sin(A/2) sin(B/2) sin((A+B)/2)</span> shows that it exceeds <span className="math-inline">sin(A+B)</span>.</> },
      { title: "Recover positive coefficients summing to one", explanation: <>Equation (II.2.8) makes the two positive quantities in (II.2.9) sum to one.</> },
      { title: "Define the required fractional power", explanation: <>Set z to the inverse conjugate of λ and define ωzˢ⁄ᵈ by an explicit exponential anchored at r/s. No implicit principal-root convention is used.</> },
      { title: "Compare real and imaginary parts", explanation: <>The signed differences qx−p and sx−r have opposite signs. The sine-weighted vectors therefore have equal and opposite imaginary parts and real parts summing to one.</> },
      { title: "Recover the Ito equation", explanation: <>Raise identity (II.2.10) to the <var>d</var>-th power, use ωᵈ=1, clear inverse powers, and conjugate. This proves that the constructed λ satisfies the Ito equation.</> },
    ],
    takeaway: <>At every argument between two consecutive Farey fractions there is one explicitly determined modulus, and the resulting point satisfies identity (II.2.10) and the Ito equation.</>,
    sourceIds: ["ito-1997", "kirkland-laffey-smigoc-2020"],
    sourceRelation: <>Ito supplies the polynomial family. Kirkland–Laffey–Šmigoc (2020), Theorem 1.2 and Lemma 4.4, characterize the boundary point at each prescribed argument through a unique positive radial solution. The proof here derives equation (II.2.8), the coefficients in (II.2.9), and the explicitly defined identity (II.2.10).</>,
  },
  {
    id: "topic-ix-endpoints",
    label: "Proposition II.2.4",
    kind: "Proposition",
    title: "Endpoint limits, including the case n=3",
    purpose: "Determines the endpoint limits and hence the closure of each parametrized arc, including the one case where the nonreal graph does not reach its unit-circle endpoint.",
    manuscriptHtml: completeTopicIXHtml("karp:prop:scalar-continuity"),
    vocabulary: [
      { term: "Subsequential limit", definition: <>A limit obtained after selecting a convergent subsequence. If every convergent subsequence has the same limit, the original bounded sequence converges to it.</> },
      { term: "Implicit-function theorem", definition: <>A calculus theorem that gives a continuously differentiable local solution when the defining function is continuously differentiable and its derivative in the solved-for variable does not vanish. A direct sequential continuity proof is also provided here.</> },
    ],
    intuition: <>At an ordinary endpoint one sine term vanishes and the other forces ρ=1. Only when the surviving sine also vanishes must one retain first-order terms; that happens exactly when <span className="math-inline">n=3</span> and <span className="math-inline">[f,g]=[1/3,1/2]</span>.</>,
    figure: <StochasticFareyFigure kind="terminal-three" />,
    proofSteps: [
      { title: "Continuity inside the interval", explanation: <>For xₖ→x, every subsequential modulus limit solves the limiting real equation. Uniqueness from Proposition II.2.3 forces that limit to be ρ(x).</> },
      { title: "Smoothness inside the interval", explanation: <>The defining function is C<sup>∞</sup> in <span className="math-inline">(x,ρ)</span> and its partial derivative with respect to ρ is positive. The implicit-function theorem therefore gives C<sup>∞</sup> functions ρ, α, β, and γ on every open Farey interval.</> },
      { title: "Approach p/q", explanation: <>Here A→0 and determinant one gives B→2π/(dq). If this angle is not π, the limiting equation is ρ*ᑫ sin B=sin B and forces ρ*=1.</> },
      { title: "Approach r/s", explanation: <>Here B→0 and A→2π/s∈(0,π), so the surviving term forces ρ*=1.</> },
      { title: "Identify the only degenerate case", explanation: <>The exceptional equality 2π/(dq)=π is dq=2. Under the Farey and order assumptions this is exactly n=3, q=2, d=1, and the interval [1/3,1/2].</> },
      { title: "Keep first-order sine terms", explanation: <>Write x=1/2−ε, divide the real equation by 2πε, and pass to the limit. Every limit ρ* satisfies 2ρ*³+3ρ*²=1.</> },
      { title: "Choose the admissible root", explanation: <>Factoring gives (2ρ*−1)(ρ*+1)²=0; the only root in [0,1] is ρ*=1/2. The recovered α tends to 1/4.</> },
    ],
    takeaway: <>In every case other than <span className="math-inline">n=3</span> with <span className="math-inline">[f,g]=[1/3,1/2]</span>, the parametrized arc meets both endpoint roots of unity; in that remaining case its nonreal part approaches −1/2.</>,
    sourceIds: ["ito-1997", "kirkland-laffey-smigoc-2020"],
    sourceRelation: <>The Ito polynomial family and the <span className="math-inline">n=3</span> boundary are classical, and Kirkland–Laffey–Šmigoc (2020) use the unique radial solution to describe these arcs. This proposition records the endpoint limits needed here.</>,
  },
  {
    id: "topic-ix-carrier",
    label: "Definition II.2.5",
    kind: "Definition",
    title: "Candidate curve on a Farey interval",
    purpose: "Defines a compact candidate arc from the radial parametrization and its endpoint limits without assuming an α-parametrized algebraic branch.",
    manuscriptHtml: completeTopicIXHtml("karp:def:carrier"),
    vocabulary: [
      { term: "Closure", definition: <>The curve together with every limit point approached by sequences on it.</> },
      { term: "Additional radial fibre at x=1/2", definition: <>For <span className="math-inline">n=3</span>, the set includes [−1,−1/2] on the endpoint ray. This interval belongs to the same algebraic family after setting α=−λ(λ+1); it is not the image of a continuum of different arguments.</> },
    ],
    intuition: <>The candidate set is defined geometrically from a radial graph and its closure. The segment [−1,−1/2] is added in the case <span className="math-inline">n=3</span> only after its polynomial identity is checked.</>,
    takeaway: <>The set now contains both endpoint limits and, when <span className="math-inline">n=3</span>, the additional radial fibre [−1,−1/2].</>,
    sourceIds: ["ito-1997"],
    sourceRelation: <>The polynomial family is Ito’s; this definition takes the closure of the radial graph whose endpoint behavior was just proved.</>,
  },
  {
    id: "topic-ix-algorithm",
    label: "Algorithm II.2.6",
    kind: "Algorithm",
    title: "Certified numerical evaluation",
    purpose: "Returns either an ε-certified polar point approximation or, only when n=3 and x=1/2, the exact compact fibre [−1,−1/2].",
    manuscriptHtml: completeTopicIXHtml("karp:alg:boundary"),
    prelude: (
      <>
        <p>
          <strong>Certification contract.</strong> The input representation must
          support exact comparison with Farey endpoints and outward-rounded
          interval enclosures of every transcendental evaluation. For an
          interior argument, maintain a sign-certified bracket [L,U]. When
          <span className="math-inline"> U−L≤2ε</span>, return its midpoint; if
          an exact zero is certified, return <var>m</var> immediately. An
          outward-rounded interval enclosure containing zero may instead use
          the stated derivative lower bound to certify the same ε-error.
        </p>
        <p>
          The return type is a tagged union. At every ordinary input, the point
          variant contains the ε-certified polar pair
          <span className="math-inline"> (ρ̂,x)</span>. Only at
          <span className="math-inline"> n=3, x=1/2</span> does the exceptional
          variant return the exact compact fibre [−1,−1/2]. If Cartesian output
          has total target τ, run the radial solve with tolerance τ/2 and bound
          the unit-direction error by τ/2.
        </p>
      </>
    ),
    vocabulary: [
      { term: "Input representation and certified evaluation", definition: <>The representation of <var>x</var> must permit exact comparison with the finitely many Farey endpoints and outward-rounded interval enclosures of the required sine values and rational powers. Rational and real-algebraic inputs are sufficient examples.</> },
      { term: "Bisection bracket", definition: <>An interval [L,U] known to contain the unique zero of Fₓ. Each bisection step preserves that guarantee and halves U−L.</> },
      { term: "Polar and Cartesian output", definition: <>The polar output <span className="math-inline">(ρ̂,x)</span> denotes <span className="math-inline">ρ̂ exp(2πix)</span> and has radial error at most ε. For a Cartesian target τ, allocate τ/2 to the radial error and τ/2 to a certified unit-direction approximation.</> },
    ],
    intuition: <>Farey comparisons remain exact and every transcendental evaluation is enclosed outward. Only a one-dimensional root-finding problem is numerical, and strict monotonicity makes bisection certifiable.</>,
    proofSteps: [
      { title: "Certify the Farey interval", explanation: <>Given <span className="math-inline">n≥3</span> and an input <span className="math-inline">x∈(0,1/2)</span> in the stated representation, compare it exactly with Farey endpoints to find <span className="math-inline">f&lt;x&lt;g</span>. Label the smaller denominator p/q and the other r/s, then compute <var>d</var> exactly and enclose A and B outward.</> },
      { title: "Enclose the increasing residual", explanation: <>Set <span className="math-inline">Fₓ(ρ)=ρˢ⁄ᵈ sin A+ρᑫ sin B−sin(A+B)</span>. Proposition II.2.3 gives <span className="math-inline">Fₓ(0)&lt;0&lt;Fₓ(1)</span> and strict increase. On a positive interval, the rational power may be enclosed through <span className="math-inline">ρˢ⁄ᵈ=exp((s/d)log ρ)</span>.</> },
      { title: "Stop first by bracket width", explanation: <>Maintain a sign-certified bracket [L,U]. As soon as <span className="math-inline">U−L≤2ε</span>, its midpoint <span className="math-inline">m=(L+U)/2</span> satisfies <span className="math-inline">|m−ρ(x)|≤ε</span>.</> },
      { title: "Handle an unresolved midpoint sign", explanation: <>If <span className="math-inline">Fₓ(m)=0</span> is certified, return <var>m</var> immediately; otherwise a certified strict sign selects one half. If the outward-rounded evaluation still contains zero, the existing derivative-enclosure test certifies <span className="math-inline">|m−ρ(x)|≤ε</span> without pretending to know that sign. This includes the case where the exact root is a bisection midpoint.</> },
      { title: "Return a polar approximation", explanation: <>Return <span className="math-inline">(ρ̂,x)</span>, denoting <span className="math-inline">ρ̂ exp(2πix)</span>, with the Farey labels and numerical α̂,β̂ from equation (II.2.9). The radial error is at most ε; no coefficient-error bound is claimed. For total Cartesian target τ, allocate τ/2 to the modulus and τ/2 to the unit-direction approximation.</> },
      { title: "Return the tagged result", explanation: <>At an ordinary input, return the point-approximation variant carrying the ε-certified polar data. Only when <span className="math-inline">n=3</span> and <span className="math-inline">x=1/2</span>, return the exceptional-fibre variant carrying the exact interval [−1,−1/2]. No convergence claim is made for Newton iteration or an uncertified floating-point input.</> },
    ],
    takeaway: <>Topic IX has constructed the candidate. Topics X–XIII will prove the radial upper bound, construct realizing stochastic matrices, establish nesting across orders, and identify these arcs with ∂Θₙ.</>,
    sourceIds: ["ito-1997"],
    sourceRelation: <>This certified bisection procedure is an algorithmic consequence of the preceding exact statements.</>,
  },
] as const;

export const topicXResults: readonly ProofResultData[] = [
  {
    id: "topic-x-compression",
    label: "Theorem II.5.1",
    kind: "Theorem",
    title: "Finite product theorem from Part I",
    purpose: "For N≥4, states the complete list of data imported from the Part I geometric results and verifies that a non-inherited radial maximum satisfies its hypotheses.",
    manuscriptHtml: completeHtml("karp:thm:compression"),
    vocabulary: [
      { term: "Selected multiplier μ", definition: <>One of λ and its complex conjugate, chosen in the complex orientation in which Part I proves the finite product identity.</> },
      { term: "Chosen positive argument", definition: <>The representative in (0,2π), retained as a real angle rather than reduced modulo 2π.</> },
      { term: "Parameters αⱼ and βⱼ", definition: <>Complementary parameters αⱼ=1−βⱼ that may differ from one recurrence equation to another.</> },
      { term: "Bounds for the chosen factor arguments", definition: <>Every chosen argument uⱼ of μᑫ−βⱼ lies in the real interval [A,M), so their arithmetic mean is meaningful.</> },
      { term: "Factors with βⱼ=0", definition: <>These factors complete the finite recurrence algebraically; they are not asserted to be additional relative-interior contacts.</> },
    ],
    intuition: <>For N≥4, Topics I–VII provide a finite product identity, an exact equality for chosen real arguments, and the bounds uⱼ∈[A,M). No uniqueness of the polygon, contacts, or realizing stochastic matrix is required.</>,
    proofSteps: [
      { title: "Supply criticality", explanation: <>Proposition II.4.7 turns the non-inherited radial maximum into an N-critical elliptic contraction.</> },
      { title: "Use the Part I geometric theorem", explanation: <>The non-inherited-radial-maximum setup already fixes N≥4, so Part I Theorem 1.4 applies. As proved in Topic VII, it selects one adapted orientation and gives consecutive Farey fractions, the finite product identity, and the equality for chosen real arguments.</> },
      { title: "Name the two orientations", explanation: <>The two adapted complex structures correspond exactly to multiplication by λ and by its conjugate, hence μ is either λ or λ̄.</> },
      { title: "Identify Farey adjacency", explanation: <>Lemma II.2.1 turns consecutiveness into rq−ps=1 in the selected left-to-right orientation.</> },
      { title: "Record every output used later", explanation: <>The theorem retains both product forms, the signed e, complementary parameters, the bounds uⱼ∈[A,M), and the exact equality eϑ+Σuⱼ=2π(r−dp). No realization or nesting result enters.</> },
    ],
    takeaway: <>The deep geometry has now been reduced to precisely the scalar data needed for convex equalization.</>,
    provenance: "New result",
    sourceIds: ["karpelevic-1951", "ito-1997"],
    sourceRelation: <>The finite product with varying parameters and the bounds on its chosen factor arguments come from the manuscript’s new Part I theorem; Karpelevič and Ito are the classical boundary-arc antecedents.</>,
  },
  {
    id: "topic-x-reflection",
    label: "Lemma II.5.2",
    kind: "Lemma",
    title: "Reflection of the selected Farey data",
    purpose: "Returns the existentially selected complex orientation to the original upper-half-plane ray.",
    manuscriptHtml: completeHtml("karp:lem:reflection-dictionary"),
    vocabulary: [
      { term: "Reflected Farey interval", definition: <>The map t↦1−t sends p/q to (q−p)/q and reverses endpoint order while preserving denominators.</> },
      { term: "Absolute scalar angles", definition: <>Topic IX used absolute values so the same A,B work whichever endpoint has the smaller denominator.</> },
    ],
    intuition: <>Part I may choose the conjugate orientation for clean contact dynamics. Reflection changes handedness but not the denominator arithmetic, modulus, or scalar radius equation.</>,
    proofSteps: [
      { title: "Reflect the rational interval", explanation: <>From p/q&lt;y&lt;r/s and x=1−y obtain (s−r)/s&lt;x&lt;(q−p)/q.</> },
      { title: "Preserve denominator data", explanation: <>The transformation changes numerators but leaves q and s unchanged; therefore d and e are unchanged.</> },
      { title: "Compute both signs", explanation: <>Substitution gives qx−(q−p)=p−qy&lt;0 and sx−(s−r)=r−sy&gt;0.</> },
      { title: "Recover the same A and B", explanation: <>Absolute values turn those expressions into exactly the selected orientation’s positive angles.</> },
      { title: "Conjugate the constant parameter list", explanation: <>The real parameters and integer exponents are unchanged, so conjugation returns the Ito identity for the original cell.</> },
    ],
    takeaway: <>The reflection formulas transfer every scalar inequality proved for the selected μ exactly to the original λ.</>,
    provenance: "Classical result",
    sourceIds: ["standard-farey", "standard-linear-algebra"],
    sourceRelation: <>The ingredients are classical Farey reflection and complex conjugation; the explicit formulas prevent an orientation gap in this proof.</>,
  },
  {
    id: "topic-x-heterogeneous",
    label: "Theorem II.6.1",
    kind: "Theorem",
    title: "Sharp inequality for varying parameters",
    purpose: "Uses one strictly convex log-sine potential to put every varying parameter list inside the constant-parameter case.",
    manuscriptHtml: completeHtml("karp:thm:hetero-sharp"),
    vocabulary: [
      { term: "Factor argument u", definition: <>The continuously selected angle Arg(λᑫ−β) on [A,M), where moving β along [0,1) moves the vector horizontally without crossing zero.</> },
      { term: "Factor potential F", definition: <>The logarithmic ratio <span className="math-inline">log(|λᑫ−β|/(1−β))</span>, rewritten as <span className="math-inline">log sin M−log sin(M−u)</span>.</> },
      { term: "Strict Jensen equality", definition: <>For F″&gt;0, equality in Jensen occurs exactly when all input arguments coincide.</> },
    ],
    intuition: <>The equality for the chosen real arguments fixes their average at A+B. Taking moduli and logarithms of the product fixes their total potential. Strict convexity then makes a single common argument the unique constant-parameter case.</>,
    proofSteps: [
      { title: "Build the common factor potential", explanation: <>The triangle with vertices β, 1, and λᑫ gives F(u)=log sin M−log sin(M−u), hence F″(u)=csc²(M−u)&gt;0.</> },
      { title: "Compute the mean argument", explanation: <>Substitute e=s−dq into the equality eθ+Σuⱼ=2π(r−dp) and expand d(A+B). Both expressions are <span className="math-inline">2π(r−dp)−eθ</span>.</> },
      { title: "Turn the product into a sum", explanation: <>Take moduli and logarithms. Since αⱼ=1−βⱼ&gt;0, this gives <span className="math-inline">ΣF(uⱼ)=(dq−s)logρ</span>.</> },
      { title: "Apply strict Jensen on one interval", explanation: <>Every uⱼ and their mean A+B lie in the common interval [A,M), where F is strictly convex. This proves equation (II.6.9).</> },
      { title: "Identify equality", explanation: <>Jensen equality means all uⱼ agree. The derivative of β↦Arg(λᑫ−β) is positive, so this is equivalent to all βⱼ agreeing.</> },
      { title: "Exponentiate without changing signs", explanation: <>Substituting F and exponentiating yields the sine-ratio inequality. All sine factors used as denominators are positive on the chosen argument interval.</> },
      { title: "Use the trigonometric reduction", explanation: <>Equation (II.6.10), together with ρᑫ=sin M/sin(M−A), converts the sine-ratio inequality into the scalar radial inequality (II.6.7).</> },
    ],
    takeaway: <>For every parameter list satisfying Topic VII&apos;s finite product identity, the radius is at most the unique modulus determined in Topic IX; equality requires β₁=···=βd.</>,
    provenance: "New result",
    sourceIds: ["karpelevic-1951", "ito-1997"],
    sourceRelation: <>The varying-parameter log-sine inequality is new to the manuscript’s finite-product argument. Jensen’s inequality is the classical analytic ingredient.</>,
  },
] as const;

export const topicXIResults: readonly ProofResultData[] = [
  {
    id: "topic-xi-cycle-cover",
    label: "Lemma II.7.1",
    kind: "Lemma",
    title: "Cycle-cover coefficient rule",
    purpose: "Explains exactly how directed cycle collections contribute signs, weights, and powers of t to a characteristic polynomial.",
    manuscriptHtml: completeHtml("karp:lem:cycle-cover"),
    vocabulary: [
      { term: "Graph order N", definition: <>The total number of vertices of the finite directed graph. If selected cycles use L vertices altogether, the remaining N−L vertices supply diagonal factors t.</> },
      { term: "Tail-row adjacency", definition: <>An edge u→v of weight w is stored in Aᵤᵥ. Thus row u lists weights leaving u.</> },
      { term: "Directed simple cycle", definition: <>A closed directed route that repeats no vertex except its starting vertex at the end. A loop has length one.</> },
      { term: "Vertex-disjoint cycle collection", definition: <>A set of cycles sharing no vertex. Vertices not selected on a cycle contribute diagonal factors t.</> },
    ],
    intuition: <>A cycle of any length contributes one minus sign: its permutation sign and the minus signs from the selected matrix entries always multiply to −1.</>,
    proofSteps: [
      { title: "Start from Leibniz", explanation: <>Each determinant term chooses one entry in every row and column, hence a permutation.</> },
      { title: "One cycle's permutation sign", explanation: <>A permutation cycle of length ℓ has sign (−1)ˡ⁻¹.</> },
      { title: "One cycle's entry signs", explanation: <>Selecting −A at its ℓ vertices contributes (−1)ˡ. The product is −1, independent of ℓ.</> },
      { title: "Include loops", explanation: <>For ℓ=1 the selected term is −Aᵤᵤ from t−Aᵤᵤ, so the same rule applies.</> },
      { title: "Multiply disjoint cycles", explanation: <>k cycles give (−1)ᵏ and multiply their edge weights.</> },
      { title: "Account for unused vertices", explanation: <>Every remaining fixed vertex selects t, giving the power tᴺ⁻ᴸ.</> },
    ],
    takeaway: <>The characteristic polynomial can be read from a complete list of vertex-disjoint directed cycle collections.</>,
    provenance: "Classical result",
    sourceIds: ["coates-1959", "kirkland-smigoc-2022"],
    sourceRelation: <>This is the Coates cycle-cover determinant formula; see C. Coates (1959) and Kirkland-Šmigoc (2022), Theorem 2.2.</>,
  },
  {
    id: "topic-xi-cycle-collections",
    label: "Lemma II.7.2",
    kind: "Lemma",
    title: "Cycle collections in the sparse realization graph",
    purpose: "Proves that the designed graph has no cycles beyond the local q-cycles and one global s-cycle.",
    manuscriptHtml: completeHtml("karp:lem:sparse-cycle-collections"),
    vocabulary: [
      { term: "Deterministic block", definition: <>A directed path in which every nonterminal vertex has one outgoing edge of weight one.</> },
      { term: "Local return", definition: <>The terminal edge of weight β that returns to the beginning of the same block.</> },
      { term: "Cross edge", definition: <>The terminal edge of weight α that advances to the next block.</> },
      { term: "Subdivision vertex", definition: <>A new deterministic vertex inserted on one cross edge to lengthen the global cycle without adding a choice.</> },
    ],
    intuition: <>At every block terminal a simple cycle must commit: take the local return and close inside that block, or take cross edges all the way around every block.</>,
    proofSteps: [
      { title: "No cross edge means local", explanation: <>The deterministic path reaches the terminal, whose only within-block exit is the local return. The entire q-cycle is forced.</> },
      { title: "A cross edge fixes the suffix", explanation: <>After entering a block, the deterministic route forces the cycle to that block’s terminal.</> },
      { title: "A later local return would repeat a vertex", explanation: <>The local path would reach the already visited entry point before the original cycle closed, contradicting simplicity.</> },
      { title: "All later exits are cross", explanation: <>Repeating the same reasoning moves through all d blocks and creates one unique global cycle.</> },
      { title: "Classify disjoint collections", explanation: <>Distinct local cycles live in disjoint blocks. The global cycle visits every terminal, so it intersects every local cycle.</> },
    ],
    takeaway: <>The allowed collections are exactly an arbitrary subset of local cycles or the singleton global cycle.</>,
    provenance: "Previously known",
    sourceIds: ["johnson-paparella-2017", "kirkland-smigoc-2022"],
    sourceRelation: <>This tailored cycle list is implicit in the reduced-Ito realization graphs of Johnson-Paparella (2017) and Kirkland-Šmigoc (2022); the manuscript isolates it as a uniform lemma.</>,
  },
  {
    id: "topic-xi-sparse-realization",
    label: "Theorem II.7.3",
    kind: "Theorem",
    title: "Sparse stochastic realization of the reduced Ito polynomial",
    purpose: "Constructs a row-stochastic matrix whose characteristic polynomial is exactly the reduced Ito polynomial in both signs of s−dq.",
    manuscriptHtml: completeHtml("karp:thm:sparse-realization"),
    vocabulary: [
      { term: "States before padding", definition: <>The larger of <span className="math-inline">dq</span> and <var>s</var>: the number of states used by the sparse realization graph before optional absorbing-state padding.</> },
      { term: "Sparse", definition: <>Most matrix entries are zero: nonterminal rows have one nonzero entry and terminal rows have at most two.</> },
      { term: "Edge subdivision", definition: <>Replacing one edge by a path through K new vertices, increasing every cycle through it by K.</> },
    ],
    intuition: <>Design the graph so local cycles reproduce the binomial (tᑫ−β)ᵈ and the one global cycle supplies the remaining αᵈ monomial. The two signs of s−dq correspond to shortening the route inside blocks or lengthening one cross edge.</>,
    proofSteps: [
      { title: "Build d length-q blocks", explanation: <>Internal edges have weight one. Each terminal has a local β-return and an α-cross edge, so its outgoing total is α+β=1.</> },
      { title: "Check the state-count bound", explanation: <>The floor gives <span className="math-inline">dq ≤ n</span> and the Farey denominator gives <span className="math-inline">s ≤ n</span>, so the larger of <span className="math-inline">dq</span> and <var>s</var> is also at most <var>n</var>.</> },
      { title: "Case s≤dq: choose entry depths", explanation: <>Farey adjacency implies s&gt;(d−1)q. Set ℓ₁=s−(d−1)q and the remaining ℓⱼ=q; their sum is s.</> },
      { title: "Read the first characteristic polynomial", explanation: <>Local subsets give (tᑫ−β)ᵈ. The global length-s cycle contributes −αᵈtᵈᑫ⁻ˢ, yielding equation (II.7.3).</> },
      { title: "Case s&gt;dq: lengthen one cross edge", explanation: <>Insert K=s−dq deterministic vertices. Local subsets leave them unused and gain tᴷ; the global cycle uses them and has length s.</> },
      { title: "Read the second characteristic polynomial", explanation: <>The contributions are tˢ⁻ᵈᑫ(tᑫ−β)ᵈ and −αᵈ, giving equation (II.7.4).</> },
      { title: "Verify stochasticity and endpoints", explanation: <>All weights are nonnegative and every outgoing total is one. At α=0 or β=0, retain zero-weight formal edges or extend the polynomial identity from the open parameter interval.</> },
      { title: "Pad to order n", explanation: <>Absorbing states preserve every root of the reduced Ito polynomial. Nonzero roots of the homogeneous equation remain after the cancelled zero powers are removed.</> },
    ],
    takeaway: <>Every reduced Ito polynomial has an explicit sparse row-stochastic realization of order at most n.</>,
    provenance: "Previously known",
    sourceIds: ["ito-1997", "johnson-paparella-2017", "kirkland-smigoc-2022"],
    sourceRelation: <>Explicit reduced-Ito realizations are known from Johnson-Paparella (2017) and Kirkland-Šmigoc (2022). This manuscript directly proves one uniform construction using at most <var>n</var> states.</>,
  },
  {
    id: "topic-xi-attainment",
    label: "Corollary II.7.4",
    kind: "Corollary",
    title: "Attainment of the scalar boundary",
    purpose: "Applies the sparse construction to the exact α and β recovered from the point constructed in Topic IX.",
    manuscriptHtml: completeHtml("karp:cor:attainment"),
    vocabulary: [
      { term: "Attainment", definition: <>The candidate is not merely a polynomial root: it is an eigenvalue of an actual row-stochastic matrix of the required order.</> },
    ],
    intuition: <>Topic IX already computed complementary coefficients and proved that the candidate satisfies the Ito equation. The realization theorem now turns that algebraic fact into matrix membership.</>,
    proofSteps: [
      { title: "Take the coefficients from Topic IX", explanation: <>Equation (II.2.9) supplies α,β∈[0,1] with α+β=1.</> },
      { title: "Use the Ito identity", explanation: <>Proposition II.2.3 proves that the candidate is a nonzero root of the Ito polynomial.</> },
      { title: "Apply the sparse theorem", explanation: <>Theorem II.7.3 realizes that root in a row-stochastic matrix of order at most n and pads if needed.</> },
      { title: "Read the definition of Θₙ", explanation: <>Being such an eigenvalue is exactly membership in Θₙ.</> },
    ],
    takeaway: <>Every point constructed in Topic IX belongs to Θₙ. Boundary status still waits for the outer comparison and final topology.</>,
    provenance: "Previously known",
    sourceIds: ["ito-1997", "johnson-paparella-2017", "kirkland-smigoc-2022"],
    sourceRelation: <>Attainment of the classical Karpelevič arcs is known through Johnson–Paparella’s explicit matrices and later realization work; this corollary uses the independent construction just proved.</>,
  },
  {
    id: "topic-xi-equal-profile",
    label: "Corollary II.6.2",
    kind: "Corollary",
    title: "Constant parameters at an outer radial maximum",
    purpose: "Closes the deliberately deferred equality argument by comparing the actual extremum with the now-attained point from Topic IX.",
    manuscriptHtml: completeHtml("karp:cor:equal-profile"),
    vocabulary: [
      { term: "Two-inequality squeeze", definition: <>If ρ≤ρ* and an independent argument gives ρ*≤ρ, then both are equal and every strict equality condition used in the first inequality is activated.</> },
      { term: "Constant parameter list", definition: <>All parameters in the finite product agree: β₁=⋯=βd and therefore α₁=⋯=αd.</> },
    ],
    intuition: <>Topic X placed the actual extremum inside the candidate. Attainment places the candidate inside the actual radial maximum. Equality follows, and strict Jensen forces one common contact parameter.</>,
    proofSteps: [
      { title: "Apply the upper inequality to the selected μ", explanation: <>Theorem II.5.1 supplies exactly the finite product, the equality for chosen real arguments, and the bounds uⱼ∈[A,M) required by Theorem II.6.1.</> },
      { title: "Return to the original ray", explanation: <>If μ=λ, nothing changes; if μ=λ̄, the reflection formulas identify the same absolute A,B and modulus.</> },
      { title: "First inequality", explanation: <>Strict increase of the scalar left side turns Theorem II.6.1 into <span className="math-inline">ρ≤ρ*</span>, where ρ* is Topic IX’s equality radius.</> },
      { title: "Independent reverse inequality", explanation: <>Corollary II.7.4 puts ρ*eⁱθ in Θᴺ. Since ρ=Rᴺ(θ) is the maximal attainable radius, <span className="math-inline">ρ*≤ρ</span>.</> },
      { title: "Activate strict Jensen equality", explanation: <>Thus ρ=ρ*, so equality holds in Theorem II.6.1 and all βⱼ coincide.</> },
      { title: "Recover the original Ito equation", explanation: <>The constant-parameter product is direct when μ=λ and is conjugated back by Lemma II.5.2 when μ=λ̄.</> },
    ],
    takeaway: <>For N≥4, every non-inherited radial maximum is exactly the point determined by the Ito equation in Topic IX, and all parameters in its finite product agree. Orders at most three are handled independently in Topic XIII.</>,
    provenance: "New result",
    sourceIds: ["karpelevic-1951", "ito-1997"],
    sourceRelation: <>The classical boundary is known, but the conclusion that varying critical-polygon product parameters must all coincide is specific to this manuscript’s proof.</>,
  },
] as const;

export const topicIXExactSources = [
  "G. H. Hardy and E. M. Wright, An Introduction to the Theory of Numbers, 6th ed. (2008), Chapter 3 on Farey series.",
  "H. Ito, ‘A new statement about the theorem determining the region of eigenvalues of stochastic matrices,’ Linear Algebra and its Applications 267 (1997), 241-246.",
  "S. Kirkland, T. Laffey, and H. Šmigoc, ‘The Karpelevič region revisited,’ Journal of Mathematical Analysis and Applications 490(2) (2020), 124332, Theorem 1.2 and Lemma 4.4.",
  "S. Kirkland and H. Šmigoc, ‘Stochastic matrices realising the boundary of the Karpelevič region,’ Linear Algebra and its Applications 635 (2022), 116-138, Theorem 2.1.",
] as const;

export const topicXExactSources = [
  "Part I, Theorem 1.4 (the finite product theorem), proved in Topic VII of this reader.",
  "J. L. W. V. Jensen, ‘Sur les fonctions convexes et les inégalités entre les valeurs moyennes,’ Acta Mathematica 30 (1906), 175-193.",
  "F. I. Karpelevič (1951) and H. Ito (1997), cited as classical boundary antecedents rather than sources of the finite-product inequality with varying parameters.",
] as const;

export const topicXIExactSources = [
  "C. Coates, ‘Flow-graph solutions of linear algebraic equations,’ IRE Transactions on Circuit Theory CT-6 (1959), 170-187.",
  "C. R. Johnson and P. Paparella, ‘A matricial view of the Karpelevič theorem,’ Linear Algebra and its Applications 520 (2017), 1-15.",
  "S. Kirkland and H. Šmigoc, ‘Stochastic matrices realising the boundary of the Karpelevič region,’ Linear Algebra and its Applications 635 (2022), 116-138, especially Theorem 2.2 and Sections 3-7.",
] as const;
