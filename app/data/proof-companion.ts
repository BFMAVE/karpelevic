export type ProofCompanion = {
  prerequisites: readonly string[];
  steps: readonly {
    title: string;
    body: string;
  }[];
  glossary: readonly {
    term: string;
    definition: string;
  }[];
  checkpoint: {
    question: string;
    answer: string;
  };
};

export const proofPrerequisites = [
  {
    title: "Linear algebra",
    text:
      "Eigenvalues, spectral radius, real 2 × 2 matrices with a nonreal conjugate pair, and the Perron–Frobenius theorem.",
  },
  {
    title: "Planar convexity",
    text:
      "Convex hulls, extreme points, supporting lines, faces, polar polygons, and Hausdorff convergence.",
  },
  {
    title: "Finite cyclic arithmetic",
    text:
      "Arithmetic in ℤ/Nℤ, greatest common divisors, the Euclidean algorithm, and first-return times of a rational rotation.",
  },
  {
    title: "Projective and Farey basics",
    text:
      "Fractional-linear maps of a line, fixed points, reduced fractions, and the determinant-one test for Farey neighbours.",
  },
] as const;

export const proofCompanions: Readonly<Record<string, ProofCompanion>> = {
  language: {
    prerequisites: [
      "A linear map sends line segments to line segments.",
      "The eigenvalues of a real 2 × 2 matrix are either real or a conjugate pair.",
      "An invertible linear change of coordinates preserves convexity and incidence.",
    ],
    steps: [
      {
        title: "Replace a matrix by planar dynamics",
        body:
          "The object being studied is a real-linear map T on a plane. When its eigenvalues are nonreal, an adapted choice of complex coordinate makes T look exactly like multiplication by μ = ρe^{iθ}: rotate by θ and contract by ρ.",
      },
      {
        title: "Measure complexity by vertices",
        body:
          "The polygonal complexity νpoly(T) is the smallest number of vertices of a nondegenerate convex polygon P satisfying TP ⊆ P. It is a property of T, not of a particular drawing of P.",
      },
      {
        title: "Radial criticality is an extremal condition",
        body:
          "An N-critical map has an invariant N-gon, but every radial enlargement tT with t > 1 needs more than N vertices. The word radial refers to increasing the contraction factor while keeping the rotation angle fixed.",
      },
      {
        title: "Why the complete vertex list and the interior origin matter",
        body:
          "The complete cyclic vertex-list convention removes redundant displayed points and flat turns. Showing 0 lies in the polygon interior gives a well-defined angular order around the boundary, which later turns contacts into cyclic arithmetic.",
      },
    ],
    glossary: [
      {
        term: "Elliptic contraction",
        definition:
          "A real planar map with nonreal eigenvalues of modulus strictly between zero and one.",
      },
      {
        term: "Invariant polygon",
        definition:
          "A polygon P for which every point of TP remains inside P.",
      },
      {
        term: "Adapted complex coordinate",
        definition:
          "An identification of the real plane with ℂ in which T is multiplication by one chosen complex eigenvalue.",
      },
    ],
    checkpoint: {
      question:
        "Why is N-criticality stronger than merely having an invariant N-gon?",
      answer:
        "Because it also says that no slightly larger radial copy tT can have an invariant polygon with at most N vertices. That extremality is what later turns any admissible outward deformation into a contradiction.",
    },
  },
  "active-sides": {
    prerequisites: [
      "A supporting line meets a convex body in a face.",
      "A polygon can be described either by its vertices or by its supporting half-planes.",
      "For a nonnegative matrix, Perron–Frobenius supplies nonnegative eigenvectors at the spectral radius.",
    ],
    steps: [
      {
        title: "Move from vertices to supporting normals",
        body:
          "In a fixed normal fan—the zero cone, the outward-normal rays, and the two-dimensional cones between adjacent rays—the inclusion TP ⊆ P becomes a system of inequalities between the supporting functionals of P. The resulting nonnegative coefficient matrix uses the cyclically ordered unit ray generators to record how T* moves the normals.",
      },
      {
        title: "Slack would permit radial enlargement",
        body:
          "If a side were not touched by TP, its supporting inequality would have slack. A positive Perron weighting combines the inequalities so that this slack can be propagated coherently.",
      },
      {
        title: "Criticality eliminates all slack",
        body:
          "The propagated slack would allow tT for some t > 1 to preserve a polygon with at most N sides. That contradicts N-criticality. Hence every side must be active.",
      },
      {
        title: "The conclusion applies to every polygon within the bound",
        body:
          "The same argument applies to every invariant polygon with at most N vertices, not just the first chosen P. This is essential because later vertex replacements produce other invariant polygons.",
      },
    ],
    glossary: [
      {
        term: "Side meeting the image polygon",
        definition:
          "A side of P that meets TP; its supporting inequality is attained.",
      },
      {
        term: "Normal fan",
        definition:
          "The fan consisting of {0}, the outward-normal rays of the polygon, and the two-dimensional cones spanned by each adjacent pair of rays. Its cyclically ordered unit ray generators supply the vectors used in the coefficient matrix B.",
      },
      {
        term: "Polar polygon",
        definition:
          "The polygon whose points encode the supporting inequalities of the original polygon.",
      },
    ],
    checkpoint: {
      question:
        "Why does the theorem quantify over every invariant polygon with at most N vertices?",
      answer:
        "Later vertex replacements change the polygon. The proof needs the side-contact and image-vertex boundary conclusions for each resulting polygon, so the theorem quantifies over all of them from the start.",
    },
  },
  ownership: {
    prerequisites: [
      "Every nonvertex boundary point of a polygon lies on exactly one maximal side, while a vertex lies on its two incident sides.",
      "Removing a small cap from a convex polygon decreases its area.",
      "A finite cyclic order has a well-defined notion of interlacing endpoints.",
    ],
    steps: [
      {
        title: "Every side has a witness",
        body:
          "Theorem 3.2 says a side meets TP. Because TP is the convex hull of the images of the vertices, the boundary convex-combination lemma shows that some image vertex itself lies on that side.",
      },
      {
        title: "Vertices create an assignment ambiguity",
        body:
          "If Tv lands in the relative interior of a side, its side assignment is clear. If it lands at a polygon vertex, it belongs to both adjacent closed sides. Half-open sides make the assignment unique.",
      },
      {
        title: "Clipping rules out incompatible endpoint patterns",
        body:
          "If the endpoint choices interlace incorrectly, one can clip along an image edge and retain an invariant polygon with the same vertex bound but smaller area. An area-minimal representative forbids this.",
      },
      {
        title: "Local choices become one global direction",
        body:
          "The finite endpoint count shows that every contact can be assigned consistently to right-half-open sides, after reversing orientation if necessary. Thus there is an order-preserving contact bijection χ from the vertices to the half-open sides, with Tv∈χ(v).",
      },
    ],
    glossary: [
      {
        term: "Half-open side",
        definition:
          "A side with one endpoint excluded and the other included, so the half-open sides partition the boundary without overlap.",
      },
      {
        term: "Witness",
        definition:
          "A vertex v of P whose image Tv lies on a specified side.",
      },
      {
        term: "Boundary convex-combination property",
        definition:
          "If a convex combination lies on an exposed face, every positively weighted point in that combination lies on the same face.",
      },
    ],
    checkpoint: {
      question:
        "Why not simply assign a vertex contact to either adjacent side arbitrarily?",
      answer:
        "Independent local choices can collide: one image vertex may be counted twice or cyclic order can be broken. The endpoint argument proves that one global half-open convention works simultaneously.",
    },
  },
  mutation: {
    prerequisites: [
      "The contact bijection χ assigns each image vertex to a unique half-open side.",
      "The set I records which contacts lie in the relative interiors of their assigned sides.",
      "The contact permutation σ is translation by κ on the finite cyclic side set.",
    ],
    steps: [
      {
        title: "A relative-interior contact permits vertex replacement",
        body:
          "When Tv lies in the relative interior of its assigned side, the appropriate adjacent polygon vertex can be replaced by Tv. The proposition checks convexity, invariance, the number of vertices, and every side assignment.",
      },
      {
        title: "The geometry gives an exact set update",
        body:
          "If e belongs to I and σ(e) does not, the permitted vertex replacement changes I to (I∖{e})∪{σ(e)}. The geometric operation and the finite-set update now carry the same information.",
      },
      {
        title: "Ordered updates reduce the number of components",
        body:
          "Because every permitted sequence of set updates is geometrically realizable, the proof may perform them in a controlled order that reduces the number of connected components.",
      },
      {
        title: "The terminal form is one interval",
        body:
          "After finitely many updates, the relative-interior contact indices form one nonempty cyclic interval. The first return to this interval is the arithmetic object studied in the next topics.",
      },
    ],
    glossary: [
      {
        term: "Relative-interior contact",
        definition:
          "A contact point lying in the relative interior of its assigned side rather than at an endpoint.",
      },
      {
        term: "Permitted vertex replacement",
        definition:
          "The replacement corresponding to an index e∈I for which σ(e)∉I; on the index set it sends I to (I∖{e})∪{σ(e)}.",
      },
      {
        term: "Ordered update sequence",
        definition:
          "A finite list of permitted single-index updates performed in a specified order.",
      },
    ],
    checkpoint: {
      question:
        "What justifies using the finite-set update in place of the geometry?",
      answer:
        "The vertex-replacement proposition proves both directions needed here: each permitted replacement preserves the geometric hypotheses, and every finite permitted update sequence has a geometric realization.",
    },
  },
  rotation: {
    prerequisites: [
      "A translation of ℤ/Nℤ decomposes into gcd(N, κ) cycles.",
      "First returns to an interval partition an orbit into towers.",
      "A determinant of absolute value one is the two-dimensional signature of neighbouring lattice directions.",
    ],
    steps: [
      {
        title: "The contact map is a rational rotation",
        body:
          "After labeling sides by ℤ/Nℤ, σ is addition by a fixed step κ. The relative-interior contact set I is now one interval, so the question is purely finite: where does each point of I return first?",
      },
      {
        title: "Only two tower heights occur",
        body:
          "Euclidean remainder data and the lattice sail show that the first-return partition has two possible heights. The determinant-one relation guarantees that no unseen lattice point creates an intermediate return.",
      },
      {
        title: "Translate arithmetic back into edges",
        body:
          "Every tower level corresponds to a polygon vertex and every tower top corresponds to a return edge. The exact four-set partition accounts for every label once and separates the incidences by how they behave under the later motion.",
      },
      {
        title: "The return data defines a projection chain",
        body:
          "Ordered supports along the short-return orbit form a chain of boundary segments. Successive projections through this chain create the return projectivity used in Topic VI.",
      },
    ],
    glossary: [
      {
        term: "Return time",
        definition:
          "The least positive number of σ-steps needed for a point to re-enter I.",
      },
      {
        term: "Tower",
        definition:
          "One base point of I together with all orbit points visited before its first return.",
      },
      {
        term: "Lattice sail",
        definition:
          "The visible boundary of lattice points in a cone; consecutive sail vectors encode Euclidean best-return data.",
      },
    ],
    checkpoint: {
      question:
        "Why must every return source–target pair be classified before the polygon is moved?",
      answer:
        "The later deformation moves several bases at once. To prove the new polygon stays invariant, every image vertex and every receiving edge must be accounted for exactly once, including boundary cases.",
    },
  },
  "unit-return": {
    prerequisites: [
      "The projective unit-return argument is used only for N≥4; Topic V displays an explicit 3-critical triangle with Δ=2.",
      "Projection from one line to another through a fixed point is projective.",
      "A composition of projectivities on a line is fractional-linear.",
      "A nonidentity fractional-linear map has isolated fixed points.",
    ],
    steps: [
      {
        title: "Compose the projections along the boundary chain",
        body:
          "Successive central projections send a point on the first edge through the later edges and finally back to the first supporting line. Their composition is the return projectivity H.",
      },
      {
        title: "A nonidentity return projectivity moves nearby points",
        body:
          "If H is not the identity, a nearby point is moved strictly to one side of itself. Convex-chain calibration ensures that its intermediate projections stay in the correct edge intervals.",
      },
      {
        title: "Propagate the starting-point motion through the whole polygon",
        body:
          "The global admissibility theorem moves all affected tower bases and reconstructs every orbit vertex. It checks that the displayed list remains exactly the cyclic list of extreme points, together with the side assignments, image incidences, and closure.",
      },
      {
        title: "Criticality forces H = id",
        body:
          "For N≥4, the deformation would create an invariant replacement polygon with an image vertex in its interior, contradicting Theorem 3.2, which places every image vertex on the boundary of every invariant polygon within the vertex bound. Therefore the first-return step cannot skip and must equal one.",
      },
    ],
    glossary: [
      {
        term: "Boundary-contact chain",
        definition:
          "An ordered chain of boundary segments connected by central projections through prescribed vertices.",
      },
      {
        term: "Return projectivity",
        definition:
          "The map obtained by composing all projections along the boundary chain back to the starting line.",
      },
      {
        term: "Cyclic-successor conclusion",
        definition:
          "For N≥4, when some contact-permutation orbit meets I more than once, the first return moves to the next base of I rather than jumping over one or more bases.",
      },
    ],
    checkpoint: {
      question:
        "Where exactly does radial criticality enter the projective argument?",
      answer:
        "It enters at the end: once a skipped return has produced a globally admissible deformation with an interior image vertex, the boundary conclusion of Theorem 3.2 rules that deformation out. This conclusion is restricted to N≥4.",
    },
  },
  "farey-return": {
    prerequisites: [
      "This closed-return product module is used for N≥4. Orders at most three are handled by the direct small-order argument.",
      "Reduced fractions p/q and r/s are Farey neighbours when qr − ps = 1 in the chosen order.",
      "Arguments of complex numbers add under multiplication, once a common branch is fixed.",
      "A convex combination on a side supplies coefficients α + β = 1.",
    ],
    steps: [
      {
        title: "Return data selects a Farey cell",
        body:
          "The two tower heights and their lattice determinant identify consecutive reduced fractions p/q < r/s. Reflection is used when necessary to align the arithmetic orientation with the final complex coordinate.",
      },
      {
        title: "Each return contributes a contact factor",
        body:
          "A contact equation has the form μ^q − βj after normalization, where βj is the endpoint weight and αj = 1 − βj. Multiplying around the closed return-recurrence chain gives the product of the possibly varying Ito factors.",
      },
      {
        title: "The two contact-distribution cases give compatible products",
        body:
          "The case with more than one relative-interior contact in some orbit and the case with exactly one in each orbit have different closing exponents, but the homogeneous identity treats both without pretending that the signed exponent is always nonnegative.",
      },
      {
        title: "One continuous argument interval controls the phase",
        body:
          "The common-argument lemma places every normalized factor argument uj in one interval [A, M). The exact lifted phase identity then records the integer multiple of 2π without losing it.",
      },
    ],
    glossary: [
      {
        term: "Farey product data",
        definition:
          "The neighbouring fractions p/q < r/s, the associated exponents, and the factor coefficients selected by the return recurrence.",
      },
      {
        term: "Heterogeneous product",
        definition:
          "A product in which different returns may carry different contact weights βj.",
      },
      {
        term: "Common argument interval",
        definition:
          "A common branch interval for the factor arguments, chosen so convexity can later be applied without branch jumps.",
      },
    ],
    checkpoint: {
      question:
        "Why is the phase identity more than taking the argument of the product modulo 2π?",
      answer:
        "Because the later sharp inequality needs the actual lifted sum of arguments. The common interval identifies the correct integer multiple of 2π and prevents a branch jump from going unnoticed.",
    },
  },
  spectra: {
    prerequisites: [
      "Rows of a stochastic matrix are convex coefficients.",
      "A complex eigenvector can be viewed through its real and imaginary coordinate pairs.",
      "Equality in the unit-disk bound forces cyclic behaviour on the support of a stochastic matrix.",
    ],
    steps: [
      {
        title: "Matrix implies polygon",
        body:
          "Given a stochastic matrix A with eigenvalue λ and eigenvector z, take the convex hull of the planar points represented by the coordinates of z. Each row of A expresses λzj as a convex combination, so λP ⊆ P.",
      },
      {
        title: "Polygon implies matrix",
        body:
          "Conversely, write the image of each polygon vertex as a convex combination of all vertices. Those coefficients form the rows of a stochastic matrix, and the vertex-coordinate vector is an eigenvector with eigenvalue λ.",
      },
      {
        title: "Basic geometry fills the region",
        body:
          "Convex combinations with the identity prove star-shapedness with respect to the origin, compactness closes the set, conjugation gives reflection symmetry, and the unit-circle equality case leaves only roots of unity of order at most N.",
      },
      {
        title: "Apply the critical-polygon theorem at a non-inherited radial maximum",
        body:
          "For a radial maximum λ∈ΘN∖ΘN−1, multiplication by λ is N-critical. When N≥4, the critical-polygon theorem supplies the Farey cell, closed-return product, and phase data. Orders at most three are handled directly. Part II then supplies the sharp scalar boundary and realization.",
      },
    ],
    glossary: [
      {
        term: "Row-stochastic matrix",
        definition:
          "A nonnegative matrix whose entries in every row sum to one.",
      },
      {
        term: "Stochastic eigenvalue region ΘN",
        definition:
          "The set of all complex numbers occurring as eigenvalues of real row-stochastic N × N matrices.",
      },
      {
        term: "Non-inherited radial maximum",
        definition:
          "A radial maximum in ΘN that does not already belong to ΘN−1; only there must the least invariant-polygon complexity equal N.",
      },
    ],
    checkpoint: {
      question:
        "Does Part I by itself prove every radial boundary formula of the Karpelevič–Ito theorem?",
      answer:
        "No. For N≥4, Part I supplies the critical-polygon contact and first-return structure together with Farey product data; the small orders are treated directly. Part II adds the sharp log-sine inequality, explicit stochastic realization, and nesting needed for the full boundary theorem.",
    },
  },
};
