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
const strengthened = new Set([16, 57, 58]);
const newResults = new Set([4, 42, 45, 48, 59]);
const previouslyKnown = new Set([
  15, 18, 20, 23, 25, 26, 27, 28, 29, 30, 61, 62, 64,
]);

function provenanceFor(
  number: number,
  kind: ProofItemKind,
): ProofProvenance | undefined {
  if (kind === "Definition" || kind === "Remark") {
    return undefined;
  }
  if (newResults.has(number)) return "New result";
  if (strengthened.has(number)) return "Strengthened";
  if (karpelevicOnlyAntecedent.has(number)) return undefined;
  if (previouslyKnown.has(number)) return "Previously known";
  return "Classical result";
}

function sourcesFor(number: number): readonly string[] {
  if ([51, 52].includes(number)) return [];
  if ([15, 23].includes(number)) return ["bitsoris-1988"];
  if ([16, 18, 20, 25, 26, 27, 28, 29, 30, 61, 62].includes(number)) {
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
  if (number === 31) {
    return "This is a standard application of path lifting for the universal covering ℝ → S¹, combined with the polygonal boundary-order facts cited from convex geometry; the complete specialized argument is included here.";
  }
  if (newResults.has(number)) {
    return "The displayed source is the closest antecedent. The exact statement used here appears to be new, but its older mechanism or conclusion is stated separately.";
  }
  if (strengthened.has(number)) {
    return "The cited source contains the earlier result; this manuscript states a strictly stronger version.";
  }
  if (karpelevicOnlyAntecedent.has(number)) {
    return "Karpelevič’s original argument contains an antecedent of this mechanism. Under this site’s four-category convention, that occurrence alone does not justify a “Previously known” label, so the statement is deliberately left unbadged.";
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
  [1, "Definition", "Radial polygonal criticality", "Fixes what it means for a contraction to sit at the last, outermost radial scale at which an invariant polygon of a prescribed complexity still exists."],
  [2, "Definition", "Strict polygon", "Rules out repeated vertices and flat turns so that every side and cyclic order used later is unambiguous."],
  [3, "Theorem", "Critical-polygon contact-return normal form", "Collects the geometric reduction: a critical invariant polygon admits a rigid one-sided contact system and a finite return description."],
  [4, "Theorem", "Complex monodromy and Farey carrier", "Converts the geometric return into a branch-controlled product identity whose carrier is a Farey cell."],
  [5, "Proposition", "Adapted complex structures", "Identifies an elliptic real-linear map with multiplication by one of its two conjugate complex eigenvalues."],
  [6, "Proposition", "Real-linear invariance of polygonal complexity", "Shows that changing real coordinates does not alter the least number of vertices needed for an invariant polygon."],
  [7, "Lemma", "Real-linear covariance of contact geometry", "Carries vertices, sides, contacts, and their labels faithfully through an invertible real-linear change of coordinates."],
  [8, "Lemma", "Coordinate reversal and handedness", "Records exactly how orientation and the chosen complex eigenvalue change under a reversing coordinate map."],
  [9, "Lemma", "Origin is interior for a nonreal contraction", "Ensures that the invariant polygon surrounds the origin, making angular order and polarity available."],
  [10, "Lemma", "Oriented order on a convex boundary", "Relates the cyclic order of vertices and sides to the orientation seen from an interior point."],
  [11, "Lemma", "Triple-sign criterion for strict convex position", "Recognizes a strict polygon from consistent signs of oriented triples."],
  [12, "Lemma", "Simultaneous convex admissibility under perturbation", "Packages the finitely many strict inequalities that keep several related polygons convex during a small deformation."],
  [13, "Lemma", "Support-face test for strict polygons", "Tests whether a supporting line touches a strict polygon only at the chosen vertex."],
  [14, "Lemma", "Angular monotonicity", "Shows that the argument of points on a strict convex boundary increases in boundary order."],
  [15, "Proposition", "Normal-fan transfer", "Translates invariance of a polygon into a compatible nonnegative action on its supporting normals."],
  [16, "Theorem", "Hereditary saturation", "Strengthens side saturation from one critical polygon to every invariant polygon within the same vertex budget."],
  [17, "Remark", "Why heredity matters", "Explains why later surgeries need saturation to survive after the polygon has changed."],
  [18, "Lemma", "Side contact witnessed by an image vertex", "Turns saturation of a side into a concrete vertex whose image lands on that side."],
  [19, "Definition", "Assignment to half-open sides", "Defines which incident half-open side contains a boundary contact that is exactly a polygon vertex."],
  [20, "Lemma", "Half-open sides partition the boundary", "Proves that every boundary point belongs to exactly one consistently oriented half-open side."],
  [21, "Lemma", "A boundary convex combination lies on one side", "Forces both endpoints onto the same exposed side when a strict convex combination reaches the boundary."],
  [22, "Lemma", "Locating the common side from adjacent labels", "Determines the common side and endpoint from two adjacent half-open side memberships."],
  [23, "Lemma", "Determinant test for side membership and containment", "Uses a nonnegative determinant matrix to prove side memberships and polygon containment."],
  [24, "Lemma", "What remains true after replacing one vertex", "Determines which side memberships remain valid after one polygon vertex is replaced."],
  [25, "Lemma", "Clipping along an image edge and bounding the number of vertices", "Clips along an image edge while preserving invariance and bounding the number of remaining vertices."],
  [26, "Lemma", "Cap bound for a least-area normalized polygon", "Uses a least-area normalized polygon to rule out caps that would produce a smaller admissible competitor."],
  [27, "Lemma", "Finite cyclic endpoint ledger", "Records all endpoints on a finite cyclic set without losing the wrap-around case."],
  [28, "Lemma", "Cyclic interlacing endpoint bookkeeping", "Forces the possible contact endpoints to interlace rather than collide inconsistently."],
  [29, "Corollary", "Collision-free global half-open ownership", "Chooses one global half-open convention that assigns every contact without collision."],
  [30, "Lemma", "One-sided contact representative", "Produces a representative in which all contacts follow the same cyclic direction."],
  [31, "Lemma", "Exact lifted endpoint paths", "Lifts cyclic endpoint motion to real angles so later phase sums have no hidden modular ambiguity."],
  [32, "Proposition", "Exact contact-surgery certificate", "Replaces one vertex by its contact image while preserving strictness, invariance, and every required label."],
  [33, "Corollary", "Intrinsic exact mutation law", "Expresses contact surgery as a coordinate-free chip move on the cyclic ownership data."],
  [34, "Corollary", "Geometric realization of every legal chip sequence", "Shows that every legal combinatorial mutation sequence comes from actual invariant polygons."],
  [35, "Corollary", "Boolean sweeps are geometrically reachable", "Allows whole legal sweeps of the cyclic chip configuration to be performed geometrically."],
  [36, "Lemma", "Reduced strict block and first record", "Reduces an arbitrary contact configuration to one consecutive block and identifies its first return record."],
  [37, "Theorem", "Finite rotation return-section", "Computes the first-return structure of a finite rational rotation by Euclidean and lattice data."],
  [38, "Corollary", "Endpoint-padded upper-record sections", "Adds endpoint conventions that make the return sections work uniformly at the boundary cases."],
  [39, "Remark", "Lattice-sail interpretation", "Reads the record pairs as consecutive edges of a two-dimensional lattice sail."],
  [40, "Lemma", "Strict supports along a short return corridor", "Verifies the support inequalities needed along the finite corridor before projection begins."],
  [41, "Lemma", "Proper corridor chain", "Shows that the successive boundary segments form a genuinely nested projective corridor."],
  [42, "Proposition", "Exact return-edge ledger", "Lists every edge, endpoint, and return time needed by the global deformation with no suppressed cases."],
  [43, "Definition", "Projective corridor and holonomy", "Names the chain of projections and the return projectivity obtained after one circuit."],
  [44, "Proposition", "Admissible projective chart", "Chooses a coordinate on the initial side in which the corridor holonomy is fractional-linear and ordered."],
  [45, "Lemma", "Convex-chain calibration", "Calibrates successive projections so a point can move through the corridor without jumping across a supporting edge."],
  [46, "Lemma", "Fixed-point escape for a projectivity", "Finds a nearby point moved strictly to one side whenever the return projectivity is not the identity."],
  [47, "Theorem", "Projective corridor escape", "Combines the calibrated chain with fixed-point escape to produce a no-skipping deformation."],
  [48, "Lemma", "Global deformation admissibility", "Checks simultaneously that the entire return-corridor deformation remains a strict invariant polygon."],
  [49, "Theorem", "Global return-corridor deformation", "Assembles the local projection moves into one admissible global deformation."],
  [50, "Theorem", "Projective unit return", "Uses criticality to force the final return projectivity to be the identity."],
  [51, "Remark", "Boundary ledger", "Summarizes which edge checks keep the projective construction on the polygon boundary."],
  [52, "Remark", "Protective invariant", "Identifies the invariant that prevents the deformation from leaving the admissible class."],
  [53, "Lemma", "Farey adjacency criterion", "Recognizes neighbouring reduced fractions through a determinant of absolute value one."],
  [54, "Lemma", "Reflection Farey cell", "Reflects a Farey cell across one half-turn while preserving adjacency."],
  [55, "Lemma", "Reflected backward-return strip", "Transfers the finite return calculation to the reflected orientation needed by the contact word."],
  [56, "Lemma", "Identity-contact rotation closes after reflection", "Shows that unit projective return makes the reflected contact orbit close with the required arithmetic data."],
  [57, "Proposition", "Nontransversal case", "Derives the heterogeneous contact-product relation when the lifted return angle is strictly larger than the step."],
  [58, "Proposition", "Transversal case", "Derives the companion product relation when the lifted return angle equals the step."],
  [59, "Lemma", "Return factors lie on the Jensen sheet", "Places all heterogeneous contact factors on one controlled logarithmic sheet and extracts the scalar carrier equation."],
  [60, "Proposition", "Compactness, conjugation, and disk bound", "Collects the elementary closure, symmetry, and unit-disk constraints on stochastic spectra."],
  [61, "Theorem", "Invariant-polygon criterion", "Equates stochastic eigenvalue realizability with the existence of a finite invariant polygon."],
  [62, "Corollary", "Radial filling", "Shows that every radial segment from the origin to an attainable eigenvalue remains attainable."],
  [63, "Proposition", "Unit-circle points", "Identifies the attainable points of modulus one as roots of unity of order at most the matrix size."],
  [64, "Corollary", "Representative-selection Farey compression", "Applies the polygon theorem to recover the classical Farey-indexed boundary of the stochastic eigenvalue region."],
  [65, "Lemma", "Weighted spectral-radius bound and Perron vectors", "Supplies the positive left and right vectors used in the polar certificate for saturation."],
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
    title: "The language of critical polygons",
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
    title: "From convex order to active sides",
    question:
      "Why must every side of a critical polygon participate in the dynamics?",
    overview: [
      "Strict convexity turns cyclic order into a finite system of signs and supporting inequalities. Normal-fan transfer then rewrites polygon invariance on the dual side, where a Perron argument can detect slack.",
      "The central conclusion is hereditary saturation: not only the chosen critical polygon, but every invariant polygon within the same vertex budget has all of its sides active. This is a genuine strengthening of the earlier saturation theorem and is the safeguard needed for later surgery.",
    ],
    itemNumbers: [11, 12, 13, 14, 15, 16, 17, 18, 65, 67],
    manuscriptPages: "10–15",
    appendixPages: "Lemmas A.1 and A.3 on pages 61 and 63",
  },
  {
    slug: "ownership",
    eyebrow: "Topic III · 1 definition · 9 results",
    title: "Half-open boundary assignments and edge clipping",
    question:
      "When a contact lands at a vertex, how do we assign it to exactly one of the two incident sides?",
    overview: [
      "A boundary contact is ambiguous only when it is a vertex, because that vertex lies on two closed sides. The half-open sides (xᵢ₋₁,xᵢ] form a disjoint partition of the boundary, so every contact receives one side index.",
      "The determinant tests make this assignment precise. Clipping along an edge of the image polygon preserves invariance, and a least-area normalized polygon then gives the cap bound needed in Topic IV. This topic stops at that local bound; it does not assume the later global interlacing result.",
    ],
    itemNumbers: [19, 20, 21, 22, 23, 24, 25, 26, 68, 69],
    manuscriptPages: "15–19",
    appendixPages: "Lemmas A.4 and A.5 on page 64",
  },
  {
    slug: "mutation",
    eyebrow: "Topic IV · 10 items",
    title: "From endpoint order to contact reduction",
    question:
      "How does a geometric contact become a legal move on a finite cyclic board?",
    overview: [
      "The remaining endpoint lemmas finish the one-sided representative. A contacted vertex can then be replaced by its image-contact point without breaking strictness or invariance.",
      "That exact surgery becomes a chip mutation. Legal sequences are realized geometrically, Boolean sweeps become available, and an arbitrary configuration reduces to one strict consecutive block. Karpelevič’s 1951 proof contains antecedents of these mechanisms, but an occurrence there alone does not earn a “Previously known” badge under this site’s four-category convention.",
    ],
    itemNumbers: [27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    manuscriptPages: "19–30",
  },
  {
    slug: "rotation",
    eyebrow: "Topic V · 9 items",
    title: "Rotation arithmetic and the projective corridor",
    question:
      "What does the reduced chip block know about Euclidean remainders and return edges?",
    overview: [
      "A finite rotation section converts the reduced block into first-return data. Record pairs, determinant-one lattice cells, and endpoint padding make the arithmetic visible before it is used in geometry.",
      "The return-edge ledger is the bridge: it lists the exact sequence of supports through which a point must travel. Those supports define the projective corridor and its holonomy.",
    ],
    itemNumbers: [37, 38, 39, 40, 41, 42, 43, 44, 70],
    manuscriptPages: "31–40",
    appendixPages: "Lemma A.6 on page 65",
  },
  {
    slug: "unit-return",
    eyebrow: "Topic VI · 8 items",
    title: "Projective escape and unit return",
    question:
      "Why would a nonidentity return map contradict radial criticality?",
    overview: [
      "Successive projections along a convex chain define a projectivity on the starting side. If its holonomy is not the identity, a nearby point escapes its fixed set and initiates a controlled deformation.",
      "The hard part is global admissibility: every support, label, and strict inequality must survive at once. Once that ledger is closed, the deformation contradicts criticality and forces unit return.",
    ],
    itemNumbers: [45, 46, 47, 48, 49, 50, 51, 52],
    manuscriptPages: "41–50",
  },
  {
    slug: "farey-return",
    eyebrow: "Topic VII · 7 items",
    title: "The Farey carrier and return monodromy",
    question:
      "How does the identity return become the scalar equation of a Farey boundary arc?",
    overview: [
      "Determinant-one adjacency identifies the relevant Farey cell, and reflection aligns the rotation arithmetic with the chosen contact orientation.",
      "The proof then separates transversal from nontransversal return. Both produce a heterogeneous product of contact factors; a controlled logarithmic branch places those factors on one Jensen sheet and yields the Farey carrier.",
    ],
    itemNumbers: [53, 54, 55, 56, 57, 58, 59],
    manuscriptPages: "51–58",
  },
  {
    slug: "spectra",
    eyebrow: "Topic VIII · 7 items",
    title: "Returning to stochastic spectra",
    question:
      "How does a stochastic radial extremum become a critical planar contraction?",
    overview: [
      "This topic reattaches the geometry to row-stochastic matrices. The invariant-polygon criterion passes in both directions between a stochastic eigenvalue and a polygon with at most the prescribed number of vertices.",
      "Compactness, radial filling, and the unit-circle classification isolate new-shell radial extrema. The criticality bridge then turns such an extremum into the intrinsic monodromy data proved in Part I. This is the complete interface needed by the five proof chapters that follow.",
    ],
    itemNumbers: [3, 4, 60, 61, 62, 63, 64],
    manuscriptPages: "3–5, 59–60, 66, and 71–75",
  },
  {
    slug: "candidate-boundary",
    eyebrow: "Topic IX · candidate construction",
    title: "The candidate Farey–Ito boundary",
    question:
      "What is the exact boundary curve that the stochastic spectrum is supposed to attain?",
    overview: [
      "Consecutive Farey fractions determine one cell at a time. On each ray in that cell, a scalar radius equation selects a unique candidate point and connects it to the corresponding Ito carrier polynomial.",
      "Endpoint limits and the exceptional terminal behaviour at order three are handled explicitly. The formal Karpelevič–Ito theorem is deliberately reserved for Topic XIII; this topic constructs only the candidate that later chapters must bound and realize.",
    ],
    itemNumbers: [],
    manuscriptPages: "67–71",
  },
  {
    slug: "sharp-radius",
    eyebrow: "Topic X · upper bound",
    title: "The sharp radial upper bound",
    question:
      "Why can no stochastic eigenvalue lie beyond its candidate Farey–Ito arc?",
    overview: [
      "The critical-polygon monodromy from Part I supplies a heterogeneous Ito product and places all return factors on one controlled Jensen sheet.",
      "A strictly convex log-sine potential equalizes those factors. Its equality case identifies the unique outermost radial profile and proves the sharp cellwise upper bound.",
    ],
    itemNumbers: [],
    manuscriptPages: "73–77",
  },
  {
    slug: "realization",
    eyebrow: "Topic XI · reverse inclusion",
    title: "Explicit stochastic realizers and attainment",
    question:
      "How can every candidate boundary point be realized by an actual stochastic matrix?",
    overview: [
      "A sparse directed block graph turns the Ito carrier into a row-stochastic matrix. Cycle-cover bookkeeping computes its characteristic polynomial without importing the upper-bound argument.",
      "The resulting construction proves the reverse inclusion independently: every scalar equality point is genuinely attained in the stochastic spectrum.",
    ],
    itemNumbers: [],
    manuscriptPages: "77–79",
  },
  {
    slug: "nesting",
    eyebrow: "Topic XII · order comparison",
    title: "Farey refinement and nesting",
    question:
      "Why does increasing the matrix order enlarge the candidate region in the correct way?",
    overview: [
      "Mediant insertion refines one Farey cell into smaller cells. Log-line comparison, multiplicity padding, and an exhaustive denominator split compare the corresponding radial candidates.",
      "The candidate-nesting theorem is the global arithmetic step that lets the final proof pass from new-shell extrema to all stochastic eigenvalues by induction on the order.",
    ],
    itemNumbers: [],
    manuscriptPages: "79–85",
  },
  {
    slug: "karpelevic-ito",
    eyebrow: "Topic XIII · final theorem",
    title: "The Karpelevič–Ito theorem",
    question:
      "How do the upper bound, attainment, and nesting assemble into the complete stochastic eigenvalue region?",
    overview: [
      "The small orders are proved directly. For every later order, each ray is either genuinely new or inherited from the preceding order; the sharp inequality and nesting identify the same candidate radius in both cases.",
      "Continuity of the radial graph, conjugation, radial filling, and the unit-circle classification then identify the carrier chain with the full topological boundary. This is where the classical theorem is finally stated and proved.",
    ],
    itemNumbers: [],
    manuscriptPages: "71 and 85–89",
  },
  {
    slug: "order-seven",
    eyebrow: "Topic XIV · worked example and computational laboratory",
    title: "The complete order-seven example and boundary laboratory",
    question:
      "What does the theorem produce at one concrete order, and how can a reader draw further orders for themselves?",
    overview: [
      "Order seven turns the abstract carrier chain into a finite atlas of explicit cells, equations, and boundary arcs. The worked ray at x = 3/8 shows the scalar construction numerically from beginning to end.",
      "The chapter will also document the verified boundary-generation routine and publish that code through the project’s GitHub repository. Its final section will provide a widget in which the reader selects n and receives the corresponding drawing, with exact Farey data kept visibly distinct from numerical root-finding and plotting.",
      "This computational laboratory illustrates the theorem but is not part of its logical proof. Topic XIII remains the endpoint of the necessary argument; Topic XIV lets readers inspect the complete machinery at order seven and then explore other orders themselves.",
    ],
    itemNumbers: [],
    manuscriptPages: "89–90",
  },
] as const;

export const proofContent = {
  title: "How the Proof Works",
  subtitle: "Critical invariant polygons and the route to Karpelevič–Ito",
  deck:
    "A fourteen-topic route from intrinsic polygon geometry to the Karpelevič–Ito theorem. Each chapter preserves the manuscript’s formal statements and complete proofs, then adds definitions, dependency maps, guided explanations, and verified mathematical plates. Topic XIV is a worked example rather than a proof dependency.",
  auditNote:
    "The four labels—Classical result, Previously known, Strengthened, and New result—classify mathematical statements, not proofs. A Karpelevič-only antecedent is cited but deliberately left unbadged. The classifications remain open to correction.",
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
