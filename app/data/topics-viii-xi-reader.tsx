import type { ProofResultData } from "../components/proof/ProofResult";
import { StochasticFareyFigure } from "../components/proof/figures/StochasticFareyFigures";
import { sitePath } from "../lib/site-path";
import { partIIHtmlByLabel } from "./part-ii-content.generated";
import { topicsVIIItoXIProofHtmlByLabel } from "./topics-viii-xi-proofs.generated";

type PartIILabel = keyof typeof partIIHtmlByLabel;

const proofHtml = topicsVIIItoXIProofHtmlByLabel as Readonly<Record<string, string>>;

const crossTopicAnchors: Readonly<Record<string, string>> = {
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
    ["New-shell extrema are polygonally critical", "Non-inherited radial maxima are polygonally critical"],
    ["new-shell radial extremum", "non-inherited radial maximum"],
    ["new-shell extremum", "non-inherited radial maximum"],
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

export const topicVIIIResults: readonly ProofResultData[] = [
  {
    id: "topic-viii-compact",
    label: "Proposition II.4.1",
    kind: "Proposition",
    title: "Compactness, symmetry under complex conjugation, and the disk bound",
    purpose: "Establishes the three global facts needed before the radial function is defined.",
    manuscriptHtml: completeTopicVIIIHtml("karp:prop:compact"),
    vocabulary: [
      {
        term: "Row-stochastic matrix",
        definition: <>A real matrix whose entries are nonnegative and whose entries in every row sum to one.</>,
        example: <>The row <span className="math-inline">(1/4, 0, 3/4)</span> sends three numbers to the convex average using weights <span className="math-inline">1/4,0,3/4</span>.</>,
      },
      {
        term: "Eigenvalue region Θₙ",
        definition: <>The set of all complex eigenvalues occurring among all real row-stochastic matrices of order <var>n</var>.</>,
      },
      {
        term: "Compact",
        definition: <>A subset of a finite-dimensional Euclidean space is compact if and only if it is closed and bounded. A continuous image of a compact set is compact.</>,
        example: <>The stochastic matrices form a closed subset of the cube <span className="math-inline">[0,1]ⁿ²</span>.</>,
      },
      {
        term: "Closed unit disk 𝔻̄",
        definition: <>The set <span className="math-inline">𝔻̄={"{"}z∈ℂ:|z|≤1{"}"}</span>.</>,
      },
    ],
    intuition: <>A stochastic row takes an average, so it cannot make the largest coordinate larger. Real characteristic polynomials reflect nonreal roots across the real axis, and a closed eigenpair equation prevents attainable roots from disappearing in a limit.</>,
    proofSteps: [
      { title: "Compact matrix space", explanation: <>The row-sum equations and nonnegativity inequalities define a closed set. Every entry lies between zero and one, so the set of stochastic matrices is bounded and therefore compact.</> },
      { title: "The maximum-coordinate estimate", explanation: <>For an eigenvector choose an index whose coordinate has maximum modulus. The corresponding stochastic average has modulus at most that same maximum, giving <span className="math-inline">|λ|≤1</span>.</>, check: <>The chosen maximum is positive because an eigenvector is nonzero.</> },
      { title: "A closed eigenpair set", explanation: <>Inside the compact product of the stochastic matrices and the closed unit disk, the equation <span className="math-inline">det(λI−A)=0</span> is a closed condition because the determinant is continuous.</> },
      { title: "Project to the eigenvalue", explanation: <>The projection of that compact eigenpair set to its second coordinate is exactly Θₙ, so Θₙ is compact.</> },
      { title: "Reflect the root", explanation: <>A real matrix has a characteristic polynomial with real coefficients; conjugating the equation preserves zero.</> },
    ],
    takeaway: <>Every Θₙ is a closed, bounded, conjugation-symmetric subset of the unit disk.</>,
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
      { term: "Strict area monotonicity", definition: <>If one planar convex body with interior is properly contained in another, its area is strictly smaller. This was proved in Topic II.</> },
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
    takeaway: <>Each eigenvalue region Θ<sub>n</sub> is star-shaped with respect to the origin.</>,
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
    takeaway: <>The only points of Θₙ on the unit circle are roots of unity whose order does not exceed n.</>,
    provenance: "Classical result",
    sourceIds: ["karpelevic-1951", "ito-1997", "standard-linear-algebra"],
    sourceRelation: <>This is the classical unit-circle clause of the Karpelevič-Ito theorem, reproved here before any boundary arcs are used.</>,
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
      { title: "Assume zero is on the boundary", explanation: <>A supporting functional ℓ is nonnegative on P, and because P has interior there is z∈P with ℓ(z)&gt;0.</> },
      { title: "Retain the positive radial factor", explanation: <>Invariance gives <span className="math-inline">ρᵏeⁱᵏθz∈P</span>, hence <span className="math-inline">ρᵏℓ(eⁱᵏθz)≥0</span>. Since ρᵏ&gt;0, every <span className="math-inline">ℓ(eⁱᵏθz)</span> is nonnegative.</> },
      { title: "Finite rotation contradiction", explanation: <>The orbit vectors sum to zero. Their nonnegative ℓ-values also sum to zero, forcing ℓ(z)=0, contradiction.</> },
      { title: "Infinite rotation contradiction", explanation: <>Density puts some rotated point in the open half-plane where ℓ&lt;0.</> },
    ],
    takeaway: <>For multiplication by a nonreal λ with <span className="math-inline">0&lt;|λ|&lt;1</span>, every non-singleton invariant polytope has nonempty interior and contains zero in its interior.</>,
    provenance: "Classical result",
    sourceIds: ["standard-convexity"],
    sourceRelation: <>This is imported and reproved from Topic I, Lemma 2.5; supporting-line background is standard convex geometry.</>,
  },
  {
    id: "topic-viii-criticality-definition",
    label: "Definition II.4.6",
    kind: "Definition",
    title: "The vertex count νpoly and the N-critical condition",
    purpose: "Restates the manuscript’s intrinsic terminology, with every symbol and both defining inequalities made literal.",
    manuscriptHtml: completeTopicVIIIHtml("karp:def:polygonal-criticality"),
    vocabulary: [
      { term: "Extreme-point set Ext(P)", definition: <>The set of vertices of <var>P</var>, equivalently the points of <var>P</var> that are not nontrivial convex combinations of other points of <var>P</var>.</> },
      { term: "Polygonal complexity νpoly(A)", definition: <>The minimum number of vertices of a compact convex polygon <var>P</var> with nonempty interior and <span className="math-inline">AP⊆P</span>; the value is ∞ if no such polygon exists.</> },
      { term: "Spectral radius r(A)", definition: <>The maximum modulus of the complex eigenvalues of the real-linear map <var>A</var>.</> },
      { term: "Elliptic contraction — manuscript terminology", definition: <>An elliptic real-linear map whose spectral radius lies in <span className="math-inline">(0,1)</span>. For multiplication by λ, the Euclidean operator norm and spectral radius both equal |λ|.</> },
      { term: "N-critical — manuscript terminology", definition: <>The two conditions <span className="math-inline">νpoly(T)=N</span> and <span className="math-inline">νpoly(tT)&gt;N</span> for every <span className="math-inline">t&gt;1</span>.</> },
    ],
    intuition: <>The first equality records the exact minimum vertex count for <var>T</var>. The second says that multiplying <var>T</var> by any scalar <var>t&gt;1</var> makes every invariant polygon with at most <var>N</var> vertices impossible.</>,
    takeaway: <>Whenever the page says <var>N</var>-critical, it means exactly <span className="math-inline">νpoly(T)=N</span> and <span className="math-inline">νpoly(tT)&gt;N</span> for all <span className="math-inline">t&gt;1</span>.</>,
    sourceIds: [],
    sourceRelation: <>This is the Part II restatement of the definitions introduced in Topic I. Definitions receive no novelty classification.</>,
  },
  {
    id: "topic-viii-new-shell-critical",
    label: "Proposition II.4.7",
    kind: "Proposition",
    title: "A non-inherited radial maximum is N-critical",
    purpose: "Converts the two stochastic boundary conditions into the two literal vertex-count inequalities in Definition II.4.6.",
    manuscriptHtml: completeTopicVIIIHtml("karp:prop:new-shell-critical"),
    vocabulary: [
      { term: "Radial function Rₙ(θ)", definition: <>The largest radius ρ for which <span className="math-inline">ρe<sup>iθ</sup>∈Θ<sub>n</sub></span>. Compactness gives attainment; star-shapedness identifies the entire smaller ray segment.</> },
      { term: "Non-inherited radial maximum — manuscript terminology", definition: <>A point <span className="math-inline">λ=<i>R</i><sub>N</sub>(θ)e<sup>iθ</sup>∈Θ<sub>N</sub>∖Θ<sub>N−1</sub></span> with <span className="math-inline">0&lt;|λ|&lt;1</span>.</> },
      { term: "Elliptic real-linear map", definition: <>A planar real-linear map whose characteristic discriminant is negative. Multiplication by a nonreal complex number has this form.</> },
    ],
    intuition: <>Not belonging to Θ<sub>N−1</sub> says fewer than <var>N</var> vertices cannot work. Being outermost on the Θ<sub>N</sub> ray says no scalar multiple <span className="math-inline">tT<sub>λ</sub></span>, <span className="math-inline">t&gt;1</span>, can still work with at most <var>N</var> vertices.</>,
    proofSteps: [
      { title: "Write the real matrix", explanation: <>Multiplication by λ has matrix with real and imaginary parts in the basis (1,i).</> },
      { title: "Check ellipticity and contraction", explanation: <>Its discriminant is <span className="math-inline">−4(Im λ)²&lt;0</span>, while its spectral radius is |λ|∈(0,1).</> },
      { title: "At most N vertices", explanation: <>Membership in Θ<sub>N</sub> gives an invariant polytope with at most <var>N</var> vertices. Lemma II.4.5 shows that it has nonempty interior.</> },
      { title: "Not at most N−1 vertices", explanation: <>Otherwise the invariant-polytope criterion would place λ in Θ<sub>N−1</sub>, contradicting the hypothesis.</> },
      { title: "No scalar multiple tTλ with t>1 has an N-vertex polygon", explanation: <>For <var>t&gt;1</var>, the point tλ lies beyond <span className="math-inline"><i>R</i><sub>N</sub>(θ)</span>, so tλ∉Θ<sub>N</sub>. An invariant polygon with at most <var>N</var> vertices would contradict the invariant-polytope criterion.</> },
      { title: "Match the definition", explanation: <>The preceding two conclusions are exactly <span className="math-inline">νpoly(Tλ)=N</span> and <span className="math-inline">νpoly(tTλ)&gt;N</span> for all t&gt;1.</> },
    ],
    takeaway: <>For N≥4, every non-inherited radial maximum satisfies the full hypothesis of <a href={sitePath("/proof/topic-vii/#part-i-item-4")}>Topic VII&apos;s finite product theorem</a>. The lower orders are handled directly in Topic XIII.</>,
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
    title: "Farey adjacency criterion",
    purpose: "Recognizes a cell using only a determinant and a denominator bound.",
    manuscriptHtml: completeHtml("karp:lem:farey-adjacency-expanded"),
    vocabulary: [
      { term: "Reduced fraction", definition: <>A fraction a/b with b&gt;0 whose numerator and denominator have greatest common divisor one.</>, example: <>The rational number 2/6 appears in a Farey sequence as the reduced fraction 1/3.</> },
      { term: "Farey sequence Fₙ", definition: <>All reduced fractions in [0,1] with denominator at most n, written in increasing order.</> },
      { term: "Primitive lattice vector", definition: <>An integer vector whose coordinates have greatest common divisor one. The reduced fraction a/b corresponds to the primitive vector (b,a).</> },
      { term: "Mediant", definition: <>The fraction (a+c)/(b+d), which lies strictly between a/b and c/d.</> },
    ],
    intuition: <>Determinant one means the primitive endpoint rays enclose one fundamental lattice cell. The condition b+d&gt;n says even the mediant arrives with a denominator too large for Fₙ.</>,
    proofSteps: [
      { title: "Encode an intermediate fraction", explanation: <>For a/b&lt;h/k&lt;c/d, the positive integers m=ck−dh and ℓ=bh−ak measure its determinant distances from the endpoints.</> },
      { title: "Use determinant one", explanation: <>The identity bc−ad=1 gives the exact lattice decomposition <span className="math-inline">(k,h)=m(b,a)+ℓ(d,c)</span>, hence k≥b+d.</> },
      { title: "Exclude denominator at most n", explanation: <>If b+d&gt;n, every intermediate reduced fraction has denominator larger than n.</> },
      { title: "Attack determinant larger than one", explanation: <>Topic V’s lattice parallelogram lemma supplies a nonzero integer representative strictly inside the coordinate parallelogram.</> },
      { title: "Turn that point into an intermediate slope", explanation: <>It and its complementary representative have slopes strictly between the endpoints; one has first coordinate at most (b+d)/2≤n.</> },
      { title: "Exclude a small denominator sum", explanation: <>If b+d≤n, the reduced mediant lies in Fₙ between the endpoints. Both necessary conditions follow.</> },
    ],
    takeaway: <>Consecutive Farey fractions are exactly determinant-one neighbours whose denominator sum exceeds n.</>,
    provenance: "Classical result",
    sourceIds: ["standard-farey"],
    sourceRelation: <>This is the classical Farey-neighbour criterion, with the converse proved using the lattice count already established in Topic V.</>,
  },
  {
    id: "topic-ix-ito-family",
    label: "Definition II.2.2",
    kind: "Definition",
    title: "Ito polynomial family",
    purpose: "Associates one polynomial family with each interval between consecutive Farey fractions.",
    manuscriptHtml: completeHtml("karp:def:ito-family"),
    vocabulary: [
      { term: "Denominator-based labels", definition: <>The endpoint with smaller denominator is p/q and the other is r/s, so q≤s. This need not agree with left-to-right order.</> },
      { term: "Signed exponent e=s−dq", definition: <>An integer that may be negative. The reduced Ito polynomial is written in two cases so that both sides remain polynomials.</> },
      { term: "Polynomial family versus root branch", definition: <>A polynomial can have several roots. Naming the family does not yet choose a continuous root as α varies.</> },
    ],
    intuition: <>The uncancelled identity works for either sign of e. Cancelling only for λ≠0 exposes the actual reduced polynomial without silently leaving a negative exponent.</>,
    takeaway: <>The Ito family is algebraic data; the next result constructs the particular point on each ray.</>,
    sourceIds: ["ito-1997"],
    sourceRelation: <>This is Ito’s Farey-indexed polynomial formulation. Definitions receive no novelty classification.</>,
  },
  {
    id: "topic-ix-scalar-ray",
    label: "Proposition II.2.3",
    kind: "Proposition",
    title: "One scalar equation per ray",
    purpose: "Selects one and only one candidate point on each open ray without presupposing a polynomial root branch.",
    manuscriptHtml: completeHtml("karp:prop:scalar-ray"),
    vocabulary: [
      { term: "Chosen fractional-power branch", definition: <>A continuous choice of argument used to interpret a fractional power. Here it is anchored explicitly at the endpoint r/s.</> },
      { term: "Scalar residual", definition: <>The left side of equation (II.2.8) minus its right side, viewed as a real function of ρ on [0,1].</> },
    ],
    intuition: <>Two complex vectors at opposite signed angles A and B can have their vertical components cancel. The scalar equation is precisely what makes the recovered coefficients α and β add to one.</>,
    proofSteps: [
      { title: "First prove the angle range", explanation: <>Determinant one gives explicit barycentric formulas for |qx−p| and |sx−r|. They imply A&gt;0, B&gt;0, and A+B&lt;π.</> },
      { title: "A monotone scalar function", explanation: <>Both exponents are positive and both sine coefficients are positive, so the left side is continuous and strictly increasing in ρ.</> },
      { title: "Bracket the unique root", explanation: <>At ρ=0 the left side is zero. At ρ=1 it exceeds sin(A+B) by the positive three-sine identity printed in the proof.</> },
      { title: "Recover complementary coefficients", explanation: <>Equation (II.2.8) makes the two positive quantities in (II.2.9) sum to one.</> },
      { title: "Fix the fractional-power branch", explanation: <>Set z to the inverse conjugate of λ and define ωzˢ⁄ᵈ by an explicit exponential anchored at r/s. No implicit principal-root convention is used.</> },
      { title: "Cancel transverse components", explanation: <>The endpoint errors qx−p and sx−r have opposite signs. The sine-weighted vectors therefore have equal and opposite imaginary parts and real parts summing to one.</> },
      { title: "Return to the polynomial", explanation: <>Raise the rooted identity to the d-th power, use ωᵈ=1, clear inverse powers, and conjugate. This proves that the constructed λ satisfies the Ito equation.</> },
    ],
    takeaway: <>Every open ray between two consecutive Farey fractions has one explicit scalar candidate and one branch-controlled rooted identity.</>,
    provenance: "Strengthened",
    sourceIds: ["ito-1997"],
    sourceRelation: <>Ito supplies the polynomial family. The manuscript strengthens its usable form by proving unique radial selection and an explicit continuous fractional-power branch.</>,
  },
  {
    id: "topic-ix-endpoints",
    label: "Proposition II.2.4",
    kind: "Proposition",
    title: "Endpoint limits, including the order-three exception",
    purpose: "Closes the candidate arcs and identifies the one place where the nonreal graph does not reach its unit-circle endpoint.",
    manuscriptHtml: completeHtml("karp:prop:scalar-continuity"),
    vocabulary: [
      { term: "Subsequential limit", definition: <>A limit obtained after selecting a convergent subsequence. If every convergent subsequence has the same limit, the original bounded sequence converges to it.</> },
      { term: "Implicit-function theorem", definition: <>A calculus theorem that makes a solution vary continuously when the equation is continuous and its derivative in the solved-for variable does not vanish. A sequential proof is also provided in the guide.</> },
    ],
    intuition: <>At an ordinary endpoint one sine term vanishes and the other forces ρ=1. Only when the surviving sine also vanishes must one retain first-order terms; that happens exactly on the terminal order-three cell.</>,
    figure: <StochasticFareyFigure kind="terminal-three" />,
    proofSteps: [
      { title: "Continuity inside the cell", explanation: <>For xₖ→x, every subsequential radius limit solves the limiting scalar equation. Uniqueness from Proposition II.2.3 forces that limit to be ρ(x).</> },
      { title: "Approach p/q", explanation: <>Here A→0 and determinant one gives B→2π/(dq). If this angle is not π, the limiting equation is rᑫ sin B=sin B and forces r=1.</> },
      { title: "Approach r/s", explanation: <>Here B→0 and A→2π/s∈(0,π), so the surviving term forces r=1.</> },
      { title: "Locate the only degeneracy", explanation: <>The exceptional equality 2π/(dq)=π is dq=2. Under the Farey and order assumptions this is exactly n=3, q=2, d=1, cell [1/3,1/2].</> },
      { title: "Keep first-order sine terms", explanation: <>Write x=1/2−ε, divide the scalar equation by 2πε, and pass to the limit. Every limit r satisfies 2r³+3r²=1.</> },
      { title: "Choose the admissible root", explanation: <>Factoring gives (2r−1)(r+1)²=0; the only root in [0,1] is r=1/2. The recovered α tends to 1/4.</> },
    ],
    takeaway: <>All ordinary candidate arcs meet their endpoint roots of unity; the order-three terminal graph meets −1/2 instead.</>,
    provenance: "Strengthened",
    sourceIds: ["ito-1997"],
    sourceRelation: <>The Ito polynomial family and exceptional order-three boundary are classical; the manuscript derives the exact endpoint behavior directly from its scalar equation.</>,
  },
  {
    id: "topic-ix-carrier",
    label: "Definition II.2.5",
    kind: "Definition",
    title: "Cellwise Farey–Ito candidate curve",
    purpose: "Packages the raywise candidates into one closed cellwise curve without assuming an α-parametrized algebraic branch.",
    manuscriptHtml: completeHtml("karp:def:carrier"),
    vocabulary: [
      { term: "Closure", definition: <>The curve together with every limit point approached by sequences on it.</> },
      { term: "Exceptional real segment", definition: <>For n=3 the candidate curve includes [−1,−1/2], which belongs to the same algebraic family after setting α=−λ(λ+1).</> },
    ],
    intuition: <>The candidate curve is defined geometrically as a radial graph. The exceptional real segment is added only after its polynomial identity is checked.</>,
    takeaway: <>The complete scalar candidate is now a closed chain from one Farey endpoint toward the next, with the order-three correction included.</>,
    sourceIds: ["ito-1997"],
    sourceRelation: <>The polynomial family is Ito’s; the radial-graph definition is the manuscript’s branch-safe packaging. Definitions receive no novelty classification.</>,
  },
  {
    id: "topic-ix-algorithm",
    label: "Algorithm II.2.6",
    kind: "Algorithm",
    title: "Boundary extraction",
    purpose: "Turns the exact construction into a reproducible sequence of rational and numerical steps.",
    manuscriptHtml: completeHtml("karp:alg:boundary"),
    vocabulary: [
      { term: "Bisection", definition: <>A guaranteed root-finding method that repeatedly halves an interval whose endpoint residuals have opposite signs.</> },
      { term: "Newton iteration", definition: <>A root-finding method that replaces the current guess by the intercept of the tangent line. It is faster near a regular root, but bisection is the guaranteed fallback here.</> },
      { term: "Candidate status", definition: <>At this stage the point is proved unique on the scalar candidate curve and proved to satisfy its polynomial; attainment and outer-boundary status come later.</> },
    ],
    intuition: <>Farey data stay exact. Only the one-dimensional root solve is numerical, and its monotonicity provides a certified bracket.</>,
    takeaway: <>Topic IX has constructed the candidate; Topics X-XIII must still bound, realize, nest, and identify it as the actual boundary.</>,
    sourceIds: ["ito-1997"],
    sourceRelation: <>This is an algorithmic synthesis of the preceding exact statements. Algorithms receive no novelty classification.</>,
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
    takeaway: <>For every parameter list satisfying Topic VII&apos;s finite product identity, the radius is at most the unique scalar equality radius; equality requires β₁=···=βd.</>,
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
    purpose: "Applies the sparse construction to the exact α and β recovered from a scalar candidate.",
    manuscriptHtml: completeHtml("karp:cor:attainment"),
    vocabulary: [
      { term: "Attainment", definition: <>The candidate is not merely a polynomial root: it is an eigenvalue of an actual row-stochastic matrix of the required order.</> },
    ],
    intuition: <>Topic IX already computed complementary coefficients and proved that the candidate satisfies the Ito equation. The realization theorem now turns that algebraic fact into matrix membership.</>,
    proofSteps: [
      { title: "Take the raywise coefficients", explanation: <>Equation (II.2.9) supplies α,β∈[0,1] with α+β=1.</> },
      { title: "Use the Ito identity", explanation: <>Proposition II.2.3 proves that the candidate is a nonzero root of the Ito polynomial.</> },
      { title: "Apply the sparse theorem", explanation: <>Theorem II.7.3 realizes that root in a row-stochastic matrix of order at most n and pads if needed.</> },
      { title: "Read the definition of Θₙ", explanation: <>Being such an eigenvalue is exactly membership in Θₙ.</> },
    ],
    takeaway: <>Every open-ray scalar candidate belongs to Θₙ. Boundary status still waits for the outer comparison and final topology.</>,
    provenance: "Previously known",
    sourceIds: ["ito-1997", "johnson-paparella-2017", "kirkland-smigoc-2022"],
    sourceRelation: <>Attainment of the classical Karpelevič arcs is known through Johnson–Paparella’s explicit matrices and later realization work; this corollary uses the independent construction just proved.</>,
  },
  {
    id: "topic-xi-equal-profile",
    label: "Corollary II.6.2",
    kind: "Corollary",
    title: "Constant parameters at an outer radial maximum",
    purpose: "Closes the deliberately deferred equality argument by squeezing the actual extremum and the now-attained scalar candidate.",
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
    takeaway: <>For N≥4, every non-inherited radial maximum is exactly the scalar Farey–Ito candidate and all parameters in its finite product agree. Orders at most three are handled independently in Topic XIII.</>,
    provenance: "New result",
    sourceIds: ["karpelevic-1951", "ito-1997"],
    sourceRelation: <>The classical boundary is known, but the conclusion that varying critical-polygon product parameters must all coincide is specific to this manuscript’s proof.</>,
  },
] as const;

export const topicIXExactSources = [
  "G. H. Hardy and E. M. Wright, An Introduction to the Theory of Numbers, 6th ed. (2008), Chapter 3 on Farey series.",
  "H. Ito, ‘A new statement about the theorem determining the region of eigenvalues of stochastic matrices,’ Linear Algebra and its Applications 267 (1997), 241-246.",
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
