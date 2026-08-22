export type ProofProvenance =
  | "Classical result"
  | "Previously known"
  | "Strengthened"
  | "New result";

export type ProofItemKind =
  | "Definition"
  | "Lemma"
  | "Proposition"
  | "Theorem"
  | "Corollary"
  | "Remark";

export type ProofSource = {
  id: string;
  short: string;
  citation: string;
  href?: string;
};

export type ProofItem = {
  number: number;
  kind: ProofItemKind;
  title: string;
  reading: string;
  provenance?: ProofProvenance;
  karpelevicOnlyAntecedent: boolean;
  sourceIds: readonly string[];
  sourceRelation?: string;
};

export type ProofTopic = {
  slug: string;
  eyebrow: string;
  title: string;
  question: string;
  overview: readonly string[];
  itemNumbers: readonly number[];
  manuscriptPages: string;
  appendixPages?: string;
};

export const proofSources: readonly ProofSource[] = [
  {
    id: "dmitriev-dynkin-1946",
    short: "Dmitriev–Dynkin (1946)",
    citation:
      "N. Dmitriev and E. Dynkin, “On characteristic roots of stochastic matrices,” Izv. Akad. Nauk SSSR Ser. Mat. 10(2) (1946), 167–184.",
    href: "https://www.mathnet.ru/eng/im3595",
  },
  {
    id: "karpelevic-1951",
    short: "Karpelevič (1951)",
    citation:
      "F. I. Karpelevič, “On the characteristic roots of matrices with nonnegative elements,” Izv. Akad. Nauk SSSR Ser. Mat. 15(4) (1951), 361–383.",
    href: "https://www.mathnet.ru/eng/im3317",
  },
  {
    id: "swift-1972",
    short: "Swift (1972)",
    citation:
      "J. Swift, The Location of Characteristic Roots of Stochastic Matrices, M.Sc. thesis, McGill University (1972), including an English translation of Dmitriev–Dynkin.",
    href: "https://escholarship.mcgill.ca/concern/theses/12579t72d",
  },
  {
    id: "bitsoris-1988",
    short: "Bitsoris (1988)",
    citation:
      "G. Bitsoris, “On the positive invariance of polyhedral sets for discrete-time systems,” Systems & Control Letters 11(3) (1988), 243–248.",
    href: "https://doi.org/10.1016/0167-6911(88)90065-5",
  },
  {
    id: "djokovic-1990",
    short: "Đoković (1990)",
    citation:
      "D. Ž. Đoković, “Cyclic polygons, roots of polynomials with decreasing nonnegative coefficients, and eigenvalues of stochastic matrices,” Linear Algebra and its Applications 142 (1990), 173–193.",
    href: "https://doi.org/10.1016/0024-3795(90)90266-F",
  },
  {
    id: "slater-1967",
    short: "Slater (1967)",
    citation:
      "N. B. Slater, “Gaps and steps for the sequence nθ mod 1,” Proceedings of the Cambridge Philosophical Society 63(4) (1967), 1115–1123.",
    href: "https://doi.org/10.1017/S0305004100042195",
  },
  {
    id: "german-2005",
    short: "German (2005)",
    citation:
      "O. N. German, “Klein polyhedra and lattices with positive norm minima” (2005).",
    href: "https://arxiv.org/abs/math/0504483",
  },
  {
    id: "ito-1997",
    short: "Ito (1997)",
    citation:
      "H. Ito, “A new statement about the theorem determining the region of eigenvalues of stochastic matrices,” Linear Algebra and its Applications 267 (1997), 241–246.",
    href: "https://doi.org/10.1016/S0024-3795(97)80052-3",
  },
  {
    id: "kirkland-laffey-smigoc-2020",
    short: "Kirkland–Laffey–Šmigoc (2020)",
    citation:
      "S. Kirkland, T. Laffey, and H. Šmigoc, “The Karpelevič region revisited,” Journal of Mathematical Analysis and Applications 490(2) (2020), 124332.",
    href: "https://doi.org/10.1016/j.jmaa.2020.124332",
  },
  {
    id: "coates-1959",
    short: "Coates (1959)",
    citation:
      "C. L. Coates, “Flow-graph solutions of linear algebraic equations,” IRE Transactions on Circuit Theory 6(2) (1959), 170–187.",
  },
  {
    id: "johnson-paparella-2017",
    short: "Johnson–Paparella (2017)",
    citation:
      "C. R. Johnson and P. Paparella, “A matricial view of the Karpelevič theorem,” Linear Algebra and its Applications 520 (2017), 1–15.",
    href: "https://doi.org/10.1016/j.laa.2017.01.009",
  },
  {
    id: "kirkland-smigoc-2022",
    short: "Kirkland–Šmigoc (2022)",
    citation:
      "S. Kirkland and H. Šmigoc, “Stochastic matrices realising the boundary of the Karpelevič region,” Linear Algebra and its Applications 635 (2022), 116–138.",
    href: "https://doi.org/10.1016/j.laa.2021.11.016",
  },
  {
    id: "jensen-1906",
    short: "Jensen (1906)",
    citation:
      "J. L. W. V. Jensen, “Sur les fonctions convexes et les inégalités entre les valeurs moyennes,” Acta Mathematica 30 (1906), 175–193.",
    href: "https://doi.org/10.1007/BF02418571",
  },
  {
    id: "standard-linear-algebra",
    short: "Horn–Johnson, Matrix Analysis",
    citation:
      "R. A. Horn and C. R. Johnson, Matrix Analysis, 2nd ed., Cambridge University Press (2013), especially Chapter 8, “Positive and Nonnegative Matrices.”",
    href: "https://doi.org/10.1017/CBO9781139020411",
  },
  {
    id: "standard-convexity",
    short: "Schneider, Convex Bodies",
    citation:
      "R. Schneider, Convex Bodies: The Brunn–Minkowski Theory, expanded ed., Cambridge University Press (2014): Chapter 1, §§1.1, 1.3, 1.6, 1.7, and Chapter 2, §§2.1, 2.4.",
    href: "https://doi.org/10.1017/CBO9781139003858",
  },
  {
    id: "rudin-principles",
    short: "Rudin, Principles of Mathematical Analysis",
    citation:
      "W. Rudin, Principles of Mathematical Analysis, 3rd ed., McGraw–Hill (1976), Chapter 2, “Basic Topology.”",
  },
  {
    id: "rudin-real-complex",
    short: "Rudin, Real and Complex Analysis",
    citation:
      "W. Rudin, Real and Complex Analysis, 3rd ed., McGraw–Hill (1987), Chapter 1, “Abstract Integration.”",
  },
  {
    id: "standard-projective",
    short: "Coxeter, Projective Geometry",
    citation:
      "H. S. M. Coxeter, Projective Geometry, 2nd ed., Springer (1987), especially Chapters 1–3 on projectivities and projective coordinates.",
    href: "https://link.springer.com/book/9780387406237",
  },
  {
    id: "standard-covering-spaces",
    short: "Hatcher, Algebraic Topology",
    citation:
      "A. Hatcher, Algebraic Topology, Cambridge University Press (2002), §1.3, especially the path-lifting property for covering spaces.",
    href: "https://pi.math.cornell.edu/~hatcher/AT/ATpage.html",
  },
  {
    id: "standard-farey",
    short: "Hardy–Wright, Farey series",
    citation:
      "G. H. Hardy and E. M. Wright, An Introduction to the Theory of Numbers, 6th ed., Oxford University Press (2008), Chapter III, “Farey Series and a Theorem of Minkowski.”",
    href: "https://doi.org/10.1093/oso/9780199219858.001.0001",
  },
  {
    id: "standard-lattice",
    short: "Cassels, Geometry of Numbers",
    citation:
      "J. W. S. Cassels, An Introduction to the Geometry of Numbers, Springer (1997), Chapter I, “Lattices.”",
    href: "https://doi.org/10.1007/978-3-642-62035-5",
  },
] as const;

const karpelevicOnlyAntecedent = new Set([
  3, 32, 33, 34, 35, 36, 37, 38, 40, 41, 47, 49, 50, 55, 56,
]);
const strengthened = new Set([30]);
const newResults = new Set<number>([]);
const unbadgedResults = new Set([
  4, 9, 15, 16, 27, 28, 31, 42, 44, 45, 46, 48, 57, 58, 59,
]);
const previouslyKnown = new Set([
  18, 23, 25, 26, 29, 61, 62, 64,
]);

function provenanceFor(
  number: number,
  kind: ProofItemKind,
): ProofProvenance | undefined {
  if (kind === "Definition" || kind === "Remark") {
    return undefined;
  }
  if (unbadgedResults.has(number)) return undefined;
  if (newResults.has(number)) return "New result";
  if (strengthened.has(number)) return "Strengthened";
  if (karpelevicOnlyAntecedent.has(number)) return undefined;
  if (previouslyKnown.has(number)) return "Previously known";
  return "Classical result";
}

function sourcesFor(number: number): readonly string[] {
  if ([51, 52].includes(number)) return [];
  if (number === 20) return ["standard-convexity", "swift-1972"];
  if ([15, 23].includes(number)) return ["bitsoris-1988"];
  if ([16, 18, 25, 26, 27, 28, 29, 30, 61, 62].includes(number)) {
    return ["dmitriev-dynkin-1946", "swift-1972"];
  }
  if ([3].includes(number)) {
    return ["dmitriev-dynkin-1946", "karpelevic-1951"];
  }
  if ([32, 33, 34, 35, 36, 38, 40, 41, 42, 45, 47, 48, 49, 50].includes(number)) {
    return ["karpelevic-1951"];
  }
  if ([37].includes(number)) {
    return ["karpelevic-1951", "slater-1967"];
  }
  if ([39].includes(number)) return ["german-2005"];
  if ([43, 44, 46].includes(number)) return ["standard-projective"];
  if ([53, 54].includes(number)) return ["standard-farey"];
  if ([70].includes(number)) return ["standard-lattice"];
  if ([55, 56, 57, 58].includes(number)) return ["karpelevic-1951"];
  if ([4, 59, 64].includes(number)) {
    return ["karpelevic-1951", "ito-1997", "djokovic-1990"];
  }
  if ([5, 60, 63, 65].includes(number)) return ["standard-linear-algebra"];
  if ([31].includes(number)) {
    return ["standard-covering-spaces", "standard-convexity"];
  }
  if (
    [
      2, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 19, 21, 22, 24, 66,
      67, 68, 69,
    ].includes(number)
  ) {
    return ["standard-convexity"];
  }
  return ["standard-farey"];
}

function sourceRelationFor(number: number): string | undefined {
  if ([51, 52].includes(number)) return undefined;
  if (number === 15) {
    return "Bitsoris gives a broader polyhedral-invariance antecedent. The exact planar adjacent-normal coefficient formula and eigenvector identity used here are proved on this page; no claim is made that this precise proposition appears in the cited source.";
  }
  if (number === 16) {
    return "Dmitriev–Dynkin, as translated by Swift, provides an earlier antecedent for side-intersection arguments. The full conclusion stated here—for every invariant polygon within the vertex bound, including the boundary location of every image vertex—is proved on this page, without assigning a priority category absent a precise statement-level match.";
  }
  if (number === 27) {
    return "Dmitriev–Dynkin’s half-open contact argument, available in Swift’s translation, is the historical antecedent. The precise finite endpoint identity used here is proved on this page.";
  }
  if (number === 28) {
    return "Dmitriev–Dynkin’s theorem assigning contacts to half-open sides, available in Swift’s translation, is the historical antecedent. The complete boundary-interval and endpoint-count argument used here is proved on this page.";
  }
  if (number === 29) {
    return "Swift (1972), Appendix A, §2, Supporting Theorem III, together with the proof of Basic Theorem 5.1 at A-16 (PDF p. 119), contains the one-image-per-side result. The present page fixes the labels and half-open convention explicitly.";
  }
  if (number === 30) {
    return "Swift (1972), Appendix A, §2, Basic Theorem 5.1, with the statement at A-5 and the relevant proof at A-16, supplies the half-open contact assignment. The statement here strengthens it by adding the explicit cyclic shift, the lift check, and the endpoint-equality argument.";
  }
  if (number === 31) {
    return "Hatcher, Algebraic Topology, §1.3, supplies the standard covering-space lift for circle angles, while Schneider, Chapter 1, supplies convex-boundary angular order. The exact consequence for an iterated sequence of endpoint equalities is derived here.";
  }
  if (number === 42) {
    return "Karpelevič (1951) is the closest structural antecedent. The exact finite partition displayed here is proved on this page; no claim of priority is made here.";
  }
  if (number === 44) {
    return "Coxeter supplies the classical projective background. The precise polygonal chart lemma is proved here; no claim of priority is made here because the cited source does not state this exact formulation.";
  }
  if ([57, 58].includes(number)) {
    return "The manuscript proves this exact return-case formulation. Karpelevič is cited as a structural antecedent; no priority category is assigned without a statement-level match.";
  }
  if (number === 59) {
    return "The manuscript proves the bounds for the chosen factor arguments used later. The cited works provide surrounding boundary-product context; no priority category is assigned without a statement-level match.";
  }
  if (number === 4) {
    return "The manuscript proves this exact orientation-sensitive formulation. The cited works provide classical boundary and product antecedents; no priority category is assigned without a statement-level comparison.";
  }
  if ([45, 48].includes(number)) {
    return "The exact statement and proof are supplied here. The cited literature provides historical context; no priority claim is made for this formulation.";
  }
  if (newResults.has(number)) {
    return "The displayed source is the closest antecedent. The exact statement used here appears to be new, but its older mechanism or conclusion is stated separately.";
  }
  if (strengthened.has(number)) {
    return "The cited source contains the earlier result; this manuscript states a strictly stronger version.";
  }
  if (karpelevicOnlyAntecedent.has(number)) {
    return "Karpelevič’s original argument contains an antecedent of this mechanism. That occurrence alone does not justify a “Previously known” label, so no category or priority claim is assigned here.";
  }
  if (previouslyKnown.has(number)) {
    return "The mathematical result is available in the cited literature; the manuscript includes it as part of a self-contained route.";
  }
  return "This is standard background, stated here to keep the later geometric argument self-contained.";
}

const rawItems: readonly [
  number,
  ProofItemKind,
  string,
  string,
][] = [
  [1, "Definition", "Radial polygonal criticality", "Defines N-criticality by requiring N to be the least invariant-polygon vertex count for T and requiring every tT with t>1 to need more than N vertices."],
  [2, "Definition", "Polygon and vertex-list convention", "Fixes the convention that the displayed cyclic list contains every extreme point exactly once and no other points."],
  [3, "Theorem", "Boundary contact, vertex replacement, and first returns", "For N≥4, collects the geometric reduction: a critical invariant polygon admits an order-preserving half-open contact bijection and a finite return description."],
  [4, "Theorem", "Consecutive Farey fractions and a finite product equation", "For N≥4, converts the geometric return into a finite product equation associated with two consecutive Farey fractions, with explicit real arguments for every factor."],
  [5, "Proposition", "Adapted complex structures", "Identifies an elliptic real-linear map with multiplication by one of its two conjugate complex eigenvalues."],
  [6, "Proposition", "Real-linear invariance of polygonal complexity", "Shows that changing real coordinates does not alter the least number of vertices needed for an invariant polygon."],
  [7, "Lemma", "Real-linear covariance of faces and boundary incidences", "Carries vertices, sides, faces, boundary incidences, and their labels faithfully through an invertible real-linear change of coordinates."],
  [8, "Lemma", "Coordinate reversal, orientation, and endpoint assignment", "Records how orientation, the chosen complex eigenvalue, and half-open endpoint membership change under a reversing coordinate map."],
  [9, "Lemma", "Origin is interior for a nonreal contraction", "Ensures that the invariant polygon surrounds the origin, making angular order and polarity available."],
  [10, "Lemma", "Oriented order on a convex boundary", "Relates the cyclic order of vertices and sides to the orientation seen from an interior point."],
  [11, "Lemma", "Triple-sign criterion for strict convex position", "Recognizes a polygon with the required complete cyclic vertex list from consistent signs of oriented triples."],
  [12, "Lemma", "Simultaneous preservation of convexity and side conditions under perturbation", "Shows that finitely many convexity, relative-interior, and strict determinant conditions persist during a sufficiently small deformation."],
  [13, "Lemma", "Support-face test for polygons", "Tests whether a supporting line exposes the chosen polygon vertex."],
  [14, "Lemma", "Angular monotonicity", "Shows that the argument of points on a polygon boundary increases in boundary order."],
  [15, "Proposition", "Support-function criterion in a fixed normal fan", "Translates invariance of a polygon into a compatible nonnegative coefficient matrix on its supporting normals."],
  [16, "Theorem", "Contact on every side and at every image vertex", "Proves that for every invariant polygon with at most N vertices, the image polygon intersects every side and all of its vertices lie on the outer boundary."],
  [17, "Remark", "Why the theorem applies after a polygon is modified", "Explains that the theorem applies again whenever a modified polygon remains an invariant N-gon."],
  [18, "Lemma", "A side intersecting a polygon contains one of its vertices", "Proves directly that if a side E of P intersects Q⊆P, then E contains a vertex of Q."],
  [19, "Definition", "Right-half-open side convention", "Defines which incident right-half-open side contains a boundary contact that is exactly a polygon vertex."],
  [20, "Lemma", "Half-open sides partition the boundary", "Proves that every boundary point belongs to exactly one consistently oriented half-open side."],
  [21, "Lemma", "A boundary convex combination lies on one side", "Forces both endpoints onto the same exposed side when a strict convex combination reaches the boundary."],
  [22, "Lemma", "Locating the common side from adjacent half-open memberships", "Determines the common side and endpoint from two adjacent half-open side memberships."],
  [23, "Lemma", "Determinant test for side membership and containment", "Uses a nonnegative determinant matrix to prove side memberships and polygon containment."],
  [24, "Lemma", "Side membership after replacing one vertex", "Determines the two local half-open side memberships after one polygon vertex is replaced."],
  [25, "Lemma", "Clipping along an image edge and bounding the number of vertices", "Clips along an image edge while preserving invariance and bounding the number of remaining vertices."],
  [26, "Lemma", "Boundary-arc bound for a least-area normalized polygon", "Uses a least-area normalized invariant N-gon to bound the old vertices on every discarded boundary arc."],
  [27, "Lemma", "Finite cyclic endpoint count", "Converts the two possible exceptional boundary-interval counts into a uniform count for the opposite half-open convention."],
  [28, "Lemma", "Cyclic interlacing with endpoint membership", "Proves that one consistently oriented half-open gap contains exactly one outer vertex everywhere."],
  [29, "Corollary", "One image vertex in every half-open side", "Chooses one global half-open convention that assigns exactly one image vertex to every side."],
  [30, "Lemma", "Order-preserving half-open contact assignment", "Produces a representative in which the image vertices are assigned bijectively to half-open sides by one cyclic shift."],
  [31, "Lemma", "Iteration of endpoint equalities for lifted arguments", "Iterates endpoint equalities on the real angle line after resolving the integer ambiguity in the chosen arguments."],
  [32, "Proposition", "Exact local vertex replacement", "Replaces one vertex by its contact image while preserving the complete cyclic vertex-list condition, invariance, and every required label."],
  [33, "Corollary", "Equivariance under the label-preserving bijection between old and new side sets", "Expresses the relative-interior-contact update after identifying old and new sides by their unchanged labels."],
  [34, "Corollary", "Geometric realization of every permitted update sequence", "Shows that every permitted finite sequence of updates to S comes from actual invariant polygons."],
  [35, "Corollary", "Realization of the successive updates used in Lemma 5.5", "Applies the finite realization result to the right-to-left update sequences in the reduction argument."],
  [36, "Lemma", "Reduction to one cyclic interval and a first-entrance identity", "Reduces a reachable set S to one cyclic interval and identifies the corresponding first entrance time."],
  [37, "Theorem", "First-return decomposition for a finite cyclic rotation", "Computes the first-return structure of a finite rational rotation from its residue records and lattice data."],
  [38, "Corollary", "First-return decomposition on an extended record interval", "Extends the formulas across endpoint-contact indices so that all boundary cases use the same first-return description."],
  [39, "Remark", "Record-vector chain and lattice sail", "Relates the unimodular record-vector chain to the standard convex-hull lattice sail without identifying collinear intermediate records as sail vertices."],
  [40, "Lemma", "Supporting lines exposing the base vertices", "Proves that each preimage supporting line used along the selected boundary arc exposes the corresponding polygon vertex."],
  [41, "Lemma", "The selected boundary arc omits at least one side", "Shows that one cyclic orientation gives pairwise distinct consecutive boundary vertices whose displayed sides do not exhaust the sides of the polygon."],
  [42, "Proposition", "Partition of the return source–target pairs", "Partitions the target indices under the first-return translation and records the source class of every pair."],
  [43, "Definition", "Composition of perspectivities along the selected boundary arc", "Defines a projectivity from the initial line to the terminal line by successive perspectivities."],
  [44, "Proposition", "Affine chart adapted to the selected boundary arc", "Chooses an affine chart in which the endpoint supporting lines are parallel and the selected boundary arc has strictly increasing edge slopes."],
  [45, "Lemma", "Location of the final intersection when Z₁ = X₀", "Locates the final intersection produced by the successive perspectivities for the special starting point Z₁=X₀."],
  [46, "Lemma", "Sign of t − u(t) near a fixed point of a real projectivity", "Finds arbitrarily small nonzero t for which t-u(t)>0."],
  [47, "Theorem", "A small deformation moving the final image into the interior half-plane", "For N≥4, converts the scalar inequality τ-u(τ)>0 into the required planar half-plane condition while keeping the displayed vertices distinct, in the same cyclic order, and in convex position."],
  [48, "Lemma", "Extension of the deformation to all polygon vertices", "Assuming the return-time bijection and four-case partition from Topic V, defines every deformed vertex and verifies every incidence with side index k≠c and all remaining side inequalities."],
  [49, "Theorem", "Existence of an invariant deformation with one interior image vertex", "Chooses one small parameter for which the deformed polygon is invariant and exactly one extreme point of its image lies in the polygon interior."],
  [50, "Theorem", "The first-return step satisfies Δ = 1", "For N≥4, uses Theorem 3.2's conclusion that every image vertex lies on the polygon boundary to prove that the first-return step is Δ=1."],
  [51, "Remark", "Boundary cases in the proof that Δ = 1", "Checks the limiting arithmetic values used in the proof that the first-return step is one."],
  [52, "Remark", "Local and global data used in the deformation argument", "Separates the local projective inequality from the global indexing, incidence, and side-inequality facts needed to use it."],
  [53, "Lemma", "Farey adjacency criterion", "Recognizes neighbouring reduced fractions through a determinant of absolute value one."],
  [54, "Lemma", "Reflection preserves Farey adjacency", "Reflects an interval between consecutive Farey fractions while preserving adjacency."],
  [55, "Lemma", "Conjugation and reversal of a finite recurrence", "Transfers the complete finite return calculation to the opposite orientation, including its final equation and its equality for chosen real arguments."],
  [56, "Lemma", "Identity contact permutation closes after reflection", "Shows that κ=N gives a finite backward recurrence whose conjugation and reversal yield the required arithmetic data."],
  [57, "Proposition", "More than one relative-interior contact in some orbit", "Derives the finite product equation when some contact-permutation orbit meets the relative-interior contact set more than once."],
  [58, "Proposition", "Exactly one relative-interior contact in each orbit", "Derives the finite product equation when the relative-interior contact set meets every contact-permutation orbit exactly once."],
  [59, "Lemma", "Bounds for the arguments of the factors μ^q−βⱼ", "Proves that every chosen factor argument satisfies uⱼ∈[A,M), preparing the later scalar comparison."],
  [60, "Proposition", "Compactness, conjugation, and disk bound", "Collects the elementary closure, symmetry, and unit-disk constraints on stochastic spectra."],
  [61, "Theorem", "Invariant-polygon criterion", "Equates stochastic eigenvalue realizability with the existence of a finite invariant polygon."],
  [62, "Corollary", "Star-shapedness with respect to the origin", "Shows that every radial segment from the origin to an attainable eigenvalue remains attainable."],
  [63, "Proposition", "Unit-circle points", "Identifies the attainable points of modulus one as roots of unity of order at most the matrix size."],
  [64, "Corollary", "Representative-selection Farey compression", "Applies the polygon theorem to recover the classical Farey-indexed boundary of the stochastic eigenvalue region."],
  [65, "Lemma", "Weighted spectral-radius bound and Perron vectors", "Supplies the left and right Perron vectors used in the proof of Theorem 3.2."],
  [66, "Lemma", "Strict separation", "Separates a point from a compact convex set by a strict linear inequality."],
  [67, "Lemma", "Polarity for planar polygons", "Transfers inclusion and supporting data between a polygon and its polar."],
  [68, "Lemma", "Hausdorff limits of polygons", "Keeps the vertex bound and convexity under compact Hausdorff limits."],
  [69, "Lemma", "Strict area monotonicity", "Shows that proper inclusion of planar convex bodies with interior strictly increases area."],
  [70, "Lemma", "Lattice parallelogram count", "Identifies the number of lattice classes in a parallelogram with the absolute determinant of its edge vectors."],
];

export const proofItems: readonly ProofItem[] = rawItems.map(
  ([number, kind, title, reading]) => ({
    number,
    kind,
    title,
    reading,
    provenance: provenanceFor(number, kind),
    karpelevicOnlyAntecedent: karpelevicOnlyAntecedent.has(number),
    sourceIds: sourcesFor(number),
    sourceRelation: sourceRelationFor(number),
  }),
);

export const proofTopics: readonly ProofTopic[] = [
  {
    slug: "language",
    eyebrow: "Topic I · 2 definitions · 7 results",
    title: "Critical maps and invariant polygons",
    question:
      "How can the polygon problem be stated without tying it to a particular matrix or coordinate system?",
    overview: [
      "We work on a two-dimensional real vector space and study how a linear transformation acts on compact convex polygons. The first task is to define the transformation, the polygons it preserves, and the least number of vertices such a polygon can have.",
      "Only after that vocabulary is fixed do we define radial criticality. The rest of the chapter proves that these objects behave naturally under changes of coordinates, fixes the orientation conventions, and shows that every nontrivial invariant polygon surrounds the origin.",
    ],
    itemNumbers: [1, 2, 5, 6, 7, 8, 9, 10, 66],
    manuscriptPages: "2–3 and 6–10",
    appendixPages: "Lemma A.2 on page 63",
  },
  {
    slug: "active-sides",
    eyebrow: "Topic II · 7 core results · 2 foundational lemmas · 1 remark",
    title: "Support inequalities and boundary contact",
    question:
      "Why must the image polygon TR intersect every side of an invariant polygon for an N-critical map?",
    overview: [
      "The determinant inequalities for a polygon displayed by its complete cyclic vertex list turn cyclic order into finitely many sign conditions. Proposition 3.1 then rewrites polygon invariance as the componentwise support inequality ρBΦ(θ)h≤h.",
      "A left Perron vector forces every support inequality to be attained, so TR intersects every side of R; polarity proves that every vertex of TR lies on the boundary of R. These conclusions hold for every invariant polygon with at most N vertices, not only for one initially chosen polygon.",
    ],
    itemNumbers: [11, 12, 13, 14, 15, 16, 17, 18, 65, 67],
    manuscriptPages: "10–15",
    appendixPages: "Lemmas A.1 and A.3 on pages 61 and 63",
  },
  {
    slug: "ownership",
    eyebrow: "Topic III · 1 definition · 9 results",
    title: "Half-open sides and image-edge half-plane intersections",
    question:
      "When a contact lands at a vertex, how do we assign it to exactly one of the two incident sides?",
    overview: [
      "A boundary contact is ambiguous only when it is a vertex, because that vertex lies on two closed sides. The half-open sides (xᵢ₋₁,xᵢ] form a disjoint partition of the boundary, so every contact receives one side index.",
      "Definition 4.2 and Lemmas 4.3–4.7 make the assignment precise and prepare the endpoint-order argument of Topic IV. Independently, Lemmas 4.8–4.9 use image-edge clipping, compactness, and area comparison to prove the boundary-arc bound needed there. This topic does not assume the later global interlacing result.",
    ],
    itemNumbers: [19, 20, 21, 22, 23, 24, 25, 26, 68, 69],
    manuscriptPages: "15–19",
    appendixPages: "Lemmas A.4 and A.5 on page 64",
  },
  {
    slug: "mutation",
    eyebrow: "Topic IV · 10 items",
    title: "From endpoint order to one interval of relative-interior contacts",
    question:
      "How does a geometric contact become a permitted update of a finite cyclic index set?",
    overview: [
      "The remaining endpoint lemmas finish the order-preserving half-open contact assignment. A contacted vertex can then be replaced by its image-contact point without losing the complete cyclic vertex-list property or invariance.",
      "The exact vertex replacement updates the subset S of indices whose sides have relative-interior contact. Every permitted finite update sequence is realized geometrically, and a reachable set reduces to one cyclic interval. The source notes distinguish Karpelevič’s antecedent mechanisms from the exact statements proved here.",
    ],
    itemNumbers: [27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    manuscriptPages: "19–30",
  },
  {
    slug: "rotation",
    eyebrow: "Topic V · 9 items",
    title: "Rotation arithmetic, the first-return decomposition, and projective preparation",
    question:
      "How does one cyclic interval determine its first-return decomposition, and how does Topic V prepare the N≥4 proof of Δ=1 completed in Topic VI?",
    overview: [
      "A finite cyclic rotation converts the interval from Topic IV into first-return data. Consecutive record vectors and determinant-one lattice pairs produce a two-height tower decomposition.",
      "For N≥4, the tower identities determine exposing supporting lines along a boundary arc that omits at least one side. A finite partition of return source–target pairs and a composition of perspectivities prepare the deformation argument completed in Topic VI; the page exhibits the N=3 exception separately.",
    ],
    itemNumbers: [37, 38, 39, 40, 41, 42, 43, 44, 70],
    manuscriptPages: "31–40",
    appendixPages: "Lemma A.6 on page 74",
  },
  {
    slug: "unit-return",
    eyebrow: "Topic VI · 9 results",
    title: "A projective deformation and the first-return step Δ = 1",
    question:
      "For N≥4, why does a hypothetical first-return step Δ>1 produce an invariant polygon forbidden by criticality?",
    overview: [
      "Successive perspectivities along a convex boundary chain define a real projectivity. Its behaviour near a fixed point supplies a small parameter for which the final image crosses into the polygon-interior half-plane.",
      "The return-time bijection then defines all N deformed vertices, and finitely many incidence and side inequalities remain valid simultaneously. The resulting invariant polygon has an extreme point of its image in the polygon interior, contradicting the boundary conclusion proved in Topic II and forcing Δ=1.",
    ],
    itemNumbers: [45, 46, 47, 48, 49, 50, 51, 52],
    manuscriptPages: "41–58",
  },
  {
    slug: "farey-return",
    eyebrow: "Topic VII · 7 items",
    title: "Consecutive Farey fractions and the finite product equation for N≥4",
    question:
      "For N≥4, how do the three first-return cases yield consecutive Farey fractions and one finite product equation?",
    overview: [
      "Determinant-one adjacency identifies the relevant Farey interval, and reflection orders its denominators correctly for the selected complex orientation.",
      "The proof then separates the case with exactly one relative-interior contact in each orbit from the case with more than one in some orbit. Both produce the same finite product equation with possibly different parameters βⱼ; the chosen real arguments of all factors satisfy uⱼ∈[A,M).",
    ],
    itemNumbers: [53, 54, 55, 56, 57, 58, 59],
    manuscriptPages: "4–5 and 58–67",
  },
  {
    slug: "spectra",
    eyebrow: "Topic VIII · 1 definition and 6 results",
    title: "Returning to stochastic eigenvalue regions",
    question:
      "How does a radial boundary point new at order N satisfy the manuscript’s N-critical vertex-count conditions?",
    overview: [
      "Topic VII proves Theorem 1.4's finite product equation conditionally for an N-critical planar map. This topic returns to row-stochastic matrices and proves the invariant-polytope criterion in both directions.",
      "Compactness, star-shapedness with respect to the origin, and the unit-circle classification make the radial function precise. For N≥4, a radial boundary point that first appears at order N has exact polygonal complexity N, while every outward scalar multiple has greater complexity, so the Topic VII theorem applies; orders at most three use the direct small-order argument.",
    ],
    itemNumbers: [3, 4, 60, 61, 62, 63, 64],
    manuscriptPages: "83–86",
  },
  {
    slug: "candidate-boundary",
    eyebrow: "Topic IX · the Ito equation on Farey intervals",
    title: "Candidate curves from the Ito equation on Farey intervals",
    question:
      "How does the Ito equation determine a unique modulus at each prescribed argument between consecutive Farey fractions?",
    overview: [
      "Consecutive Farey fractions determine one interval at a time. At each argument in that interval, a strictly increasing real equation determines a unique modulus and connects the resulting point to the corresponding reduced Ito polynomial.",
      "Endpoint limits and the exceptional order-three behaviour are handled explicitly. This topic constructs only the candidate curve; stochastic realization, the sharp outer bound, nesting, and identification with the boundary of the Karpelevič region remain for later topics.",
    ],
    itemNumbers: [],
    manuscriptPages: "76–82",
  },
  {
    slug: "sharp-radius",
    eyebrow: "Topic X · upper bound",
    title: "The radial upper bound and its equality case",
    question:
      "For an upper-half-plane radial boundary point that first appears at order N, why is its modulus no greater than the Topic IX radius on the corresponding Farey interval?",
    overview: [
      "For N≥4, Topic X starts with an upper-half-plane radial boundary point that belongs to the order-N region but not the order-(N−1) region. Topics VII and VIII supply a finite product equation, an exact phase equation, and bounds on the arguments of its factors; lower-half-plane points follow by complex conjugation.",
      "Jensen’s inequality for an explicitly defined strictly convex function gives the radial upper bound and characterizes equality within the finite-product hypotheses. Topic XI supplies stochastic attainment, while Topic XII handles inherited boundary points through nesting.",
    ],
    itemNumbers: [],
    manuscriptPages: "86–91",
  },
  {
    slug: "realization",
    eyebrow: "Topic XI · reverse inclusion",
    title: "Explicit stochastic realization of the candidate curve",
    question:
      "How can every candidate point be realized by an actual stochastic matrix?",
    overview: [
      "An explicit sparse row-stochastic matrix is defined by a weighted digraph. A determinant expansion over pairwise vertex-disjoint directed cycles shows that its characteristic polynomial is the reduced Ito polynomial, without importing the upper-bound argument.",
      "The construction independently proves the inclusion of every compact Topic IX candidate curve in the corresponding Karpelevič region, including the Farey endpoints and the exceptional order-three real segment.",
    ],
    itemNumbers: [],
    manuscriptPages: "91–93",
  },
  {
    slug: "nesting",
    eyebrow: "Topic XII · order comparison",
    title: "Farey refinement and monotonicity of the candidate radius",
    question:
      "Why is Kₙ(θ) nondecreasing with respect to n for 0≤θ≤π, and why does conjugation give the reflected lower-half comparison?",
    overview: [
      "Mediant insertion refines one Farey interval into two subintervals. A log-line comparison, the case where the factor count increases, and an exhaustive Farey classification compare the corresponding candidate radii.",
      "The upper-half inequality Kₙ₋₁(θ)≤Kₙ(θ), together with its conjugate lower-half comparison, is the arithmetic step used in Topic XIII when the order-n radial maximizer belongs to Θₙ₋₁.",
    ],
    itemNumbers: [],
    manuscriptPages: "94–102",
  },
  {
    slug: "karpelevic-ito",
    eyebrow: "Topic XIII · final theorem",
    title: "The Karpelevič theorem in Ito’s formulation",
    question:
      "How do the upper bound, attainment, and nesting assemble into the complete stochastic eigenvalue region?",
    overview: [
      "The small orders are proved directly. For n≥4, the induction separates according as the order-n radial maximizer lies outside or inside Θₙ₋₁; the results of Topics X–XII prove Rₙ(θ)=Kₙ(θ) in both cases.",
      "Continuity of the full-circle radial function, conjugation, star-shapedness with respect to the origin, and the unit-circle classification then identify the Farey-indexed curves with the complete topological boundary. This is where the classical theorem is finally stated and proved.",
    ],
    itemNumbers: [],
    manuscriptPages: "102–106",
  },
  {
    slug: "order-seven",
    eyebrow: "Topic XIV · worked example and interactive computation",
    title: "The complete order-seven example and an interactive boundary plot",
    question:
      "What does the theorem produce at one concrete order, and how can a reader draw further orders for themselves?",
    overview: [
      "For order seven, the general theorem yields a complete table of consecutive Farey pairs, reduced Ito polynomials, and parametrized boundary arcs. The computation at the normalized angular parameter x = 3/8 follows the scalar calculation numerically from beginning to end.",
      "The chapter documents the numerical boundary-plot implementation and publishes its source and regression tests. Its final section lets the reader select n and obtain the corresponding plot, with exact Farey data kept visibly distinct from floating-point root-finding and plotting.",
      "This interactive computation illustrates the theorem but is not part of its logical proof. Topic XIII remains the endpoint of the necessary argument; Topic XIV lets readers inspect the complete construction at order seven and then explore other orders themselves.",
    ],
    itemNumbers: [],
    manuscriptPages: "107–109",
  },
] as const;

export const proofContent = {
  title: "How the Proof Works",
  subtitle:
    "Critical invariant polygons and the Karpelevič theorem in Ito’s formulation",
  deck:
    "A fourteen-topic route from intrinsic polygon geometry to the Karpelevič theorem in Ito’s formulation. Each published chapter preserves the manuscript’s formal statements and complete proofs, then adds definitions, dependency maps, guided explanations, and verified mathematical plates. Topic XIV is a worked example rather than a proof dependency.",
  auditNote:
    "The four labels—Classical result, Previously known, Strengthened, and New result—classify mathematical statements, not proofs. A Karpelevič-only antecedent may be cited without assigning a category or priority claim. The classifications remain open to correction.",
  criticalPath:
    "5 → 16 → 30 → 32 → 36 → 37 → 42 → 48 → 50 → (57, 58) → 59 → 4 → 64",
} as const;

export function getProofItems(numbers: readonly number[]): readonly ProofItem[] {
  const wanted = new Set(numbers);
  return proofItems.filter((item) => wanted.has(item.number));
}

export function getProofSource(id: string): ProofSource | undefined {
  return proofSources.find((source) => source.id === id);
}
