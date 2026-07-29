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
        title: "Why strictness and the interior origin matter",
        body:
          "Strict polygons have no redundant displayed vertices or flat turns. Showing 0 lies in their interior gives a well-defined angular order around the boundary, which later turns contacts into cyclic arithmetic.",
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
          "The normal-fan transfer replaces the inclusion TP ⊆ P by inequalities between the supporting functionals of P. The resulting nonnegative matrix records how T* moves the normals.",
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
        title: "Heredity makes the conclusion reusable",
        body:
          "The same argument applies to every admissible subpolygon with at most N vertices, not just the first chosen P. This is essential because contact surgery repeatedly replaces P by another invariant polygon.",
      },
    ],
    glossary: [
      {
        term: "Active or saturated side",
        definition:
          "A side of P that meets TP; its supporting inequality is attained.",
      },
      {
        term: "Normal fan",
        definition:
          "The cyclic collection of outward supporting directions of a polygon.",
      },
      {
        term: "Polar polygon",
        definition:
          "The polygon whose points encode the supporting inequalities of the original polygon.",
      },
    ],
    checkpoint: {
      question:
        "Why does the theorem say hereditary saturation rather than ordinary saturation?",
      answer:
        "Later mutations change the polygon. The proof needs the active-side conclusion to remain true for each new admissible polygon, so the theorem quantifies over all of them from the start.",
    },
  },
  ownership: {
    prerequisites: [
      "Every boundary point of a strict polygon lies on one side, except a vertex, which lies on two.",
      "Removing a small cap from a convex polygon decreases its area.",
      "A finite cyclic order has a well-defined notion of interlacing endpoints.",
    ],
    steps: [
      {
        title: "Every side has a witness",
        body:
          "Saturation says a side meets TP. Because TP is the convex hull of the images of the vertices, face rigidity shows that some image vertex itself lies on that side.",
      },
      {
        title: "Vertices create an ownership ambiguity",
        body:
          "If Tv lands in the relative interior of a side, ownership is clear. If it lands at a polygon vertex, it belongs to both adjacent closed sides. Half-open sides make the choice unique.",
      },
      {
        title: "Clipping rules out incompatible endpoint patterns",
        body:
          "If the endpoint choices interlace incorrectly, one can clip an edge cap and retain an invariant polygon with the same vertex budget but smaller area. An area-minimal representative forbids this.",
      },
      {
        title: "Local choices become one global direction",
        body:
          "The finite endpoint ledger shows that every contact can be owned consistently by right-half-open sides, after reversing orientation if necessary. This produces the one-sided contact representative.",
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
        term: "Face rigidity",
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
      "The one-sided contact representative labels each image vertex by a unique side.",
      "The strict-contact set I records which contacts lie in side interiors.",
      "The contact rotation σ is a translation of the finite cyclic side set.",
    ],
    steps: [
      {
        title: "A strict contact permits surgery",
        body:
          "When Tv lies strictly inside its owned side, the appropriate adjacent polygon vertex can be replaced by Tv. The exact certificate checks convexity, invariance, the number of vertices, and every ownership label.",
      },
      {
        title: "Surgery becomes a chip move",
        body:
          "Place a chip at each side in the strict set I. A legal mutation moves one chip from e to σ(e), provided the target is empty. The geometry and the finite board now carry the same information.",
      },
      {
        title: "Sweeps reduce disorder",
        body:
          "Because every legal chip sequence is geometrically realizable, the proof may use combinatorial sweeps. Moving chips in a controlled order reduces the number of separated groups.",
      },
      {
        title: "The terminal form is one interval",
        body:
          "After finitely many sweeps, the strict contacts form one nonempty cyclic interval. The first return to this interval is the arithmetic object studied in the next topics.",
      },
    ],
    glossary: [
      {
        term: "Strict contact",
        definition:
          "A contact point lying in the relative interior of its owned side rather than at an endpoint.",
      },
      {
        term: "Legal mutation",
        definition:
          "A move e ↦ σ(e) for which e is occupied by a strict contact and σ(e) is not.",
      },
      {
        term: "Boolean sweep",
        definition:
          "A simultaneous-looking update implemented as an ordered sequence of legal zero-or-one chip moves.",
      },
    ],
    checkpoint: {
      question:
        "What justifies replacing the geometric problem by a chip game?",
      answer:
        "The contact-surgery certificate proves both directions needed here: each legal move preserves the geometric hypotheses, and every finite legal chip sequence has a geometric realization.",
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
          "After labeling sides by ℤ/Nℤ, σ is addition by a fixed step κ. The strict set I is now one interval, so the question is purely finite: where does each point of I return first?",
      },
      {
        title: "Only two tower heights occur",
        body:
          "Euclidean remainder data and the lattice sail show that the first-return partition has two possible heights. The determinant-one relation guarantees that no unseen lattice point creates an intermediate return.",
      },
      {
        title: "Translate arithmetic back into edges",
        body:
          "Every tower level corresponds to a polygon vertex and every tower top corresponds to a return edge. The exact ledger accounts for all labels once and separates moving, rigid, closing, and anchor fields.",
      },
      {
        title: "The ledger defines a corridor",
        body:
          "Ordered supports along the short-return orbit form a chain of boundary segments. Successive projections through this chain create the projective holonomy used in Topic VI.",
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
        "Why is a complete return-edge ledger mathematically necessary?",
      answer:
        "The later deformation moves several bases at once. To prove the new polygon stays invariant, every image vertex and every receiving edge must be accounted for exactly once, including boundary cases.",
    },
  },
  "unit-return": {
    prerequisites: [
      "Projection from one line to another through a fixed point is projective.",
      "A composition of projectivities on a line is fractional-linear.",
      "A nonidentity fractional-linear map has isolated fixed points.",
    ],
    steps: [
      {
        title: "Compose the corridor projections",
        body:
          "The return corridor sends a point on the first edge successively through later edges and finally back to the first supporting line. This composition is the holonomy H.",
      },
      {
        title: "A nonidentity holonomy has an escape direction",
        body:
          "If H is not the identity, a nearby point is moved strictly to one side of itself. Convex-chain calibration ensures that its intermediate projections stay in the correct edge intervals.",
      },
      {
        title: "Propagate the seed through the whole polygon",
        body:
          "The global admissibility theorem moves all affected tower bases and reconstructs every orbit vertex. It checks strict convexity, side ownership, image incidences, and closure simultaneously.",
      },
      {
        title: "Criticality forces H = id",
        body:
          "The escape deformation would create radial slack and hence permit an enlargement tT with the same vertex budget. N-criticality forbids this. Therefore the return holonomy must be the identity: the return cannot skip.",
      },
    ],
    glossary: [
      {
        term: "Projective corridor",
        definition:
          "An ordered chain of boundary segments connected by central projections through prescribed vertices.",
      },
      {
        term: "Holonomy",
        definition:
          "The return map obtained by composing all corridor projections back to the starting line.",
      },
      {
        term: "No-skipping",
        definition:
          "In the nontransversal case, first return moves to the adjacent base of I rather than jumping over one or more bases.",
      },
    ],
    checkpoint: {
      question:
        "Where exactly does radial criticality enter the projective argument?",
      answer:
        "It enters at the end: once a nonidentity holonomy has produced a globally admissible deformation with radial slack, criticality rules that deformation out and therefore forces identity holonomy.",
    },
  },
  "farey-return": {
    prerequisites: [
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
          "A contact equation has the form μ^q − βj after normalization, where βj is the endpoint weight and αj = 1 − βj. Multiplying around the closed return strip gives the heterogeneous Ito product.",
      },
      {
        title: "The two return regimes give compatible products",
        body:
          "The nontransversal case and the transversal case have different closing exponents, but the homogeneous identity treats both without pretending that the signed exponent is always nonnegative.",
      },
      {
        title: "One argument sheet controls the phase",
        body:
          "The Jensen-sheet lemma places every normalized factor argument uj in one interval [A, M). The exact lifted phase identity then records the winding number without losing multiples of 2π.",
      },
    ],
    glossary: [
      {
        term: "Farey carrier",
        definition:
          "The neighbouring fractions p/q < r/s whose cell contains the normalized rotation angle.",
      },
      {
        term: "Heterogeneous product",
        definition:
          "A product in which different returns may carry different contact weights βj.",
      },
      {
        term: "Jensen sheet",
        definition:
          "A common branch interval for the factor arguments, chosen so convexity can later be applied without branch jumps.",
      },
    ],
    checkpoint: {
      question:
        "Why is the phase identity more than taking the argument of the product modulo 2π?",
      answer:
        "Because the later sharp inequality needs the actual lifted sum of arguments. The common Jensen sheet identifies the correct integer winding and prevents an unnoticed 2π error.",
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
          "Convex combinations with the identity give radial filling, compactness closes the set, conjugation gives reflection symmetry, and the unit-circle equality case leaves only roots of unity of order at most N.",
      },
      {
        title: "Apply the intrinsic theorem only at a new shell",
        body:
          "For λ in ΘN but not ΘN−1 at radial maximum, multiplication by λ is N-critical. The critical-polygon theorem therefore supplies the Farey carrier and monodromy. This recovers the classical carrier statement; Part II supplies the sharp scalar boundary and realization.",
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
        term: "New shell",
        definition:
          "The part of ΘN not already present in ΘN−1; only there must the least invariant-polygon complexity equal N.",
      },
    ],
    checkpoint: {
      question:
        "Does Part I by itself prove every radial boundary formula of the Karpelevič–Ito theorem?",
      answer:
        "No. Part I supplies the critical-polygon return normal form and Farey carrier. Part II adds the sharp log-sine inequality, explicit stochastic realization, and nesting needed for the full boundary theorem.",
    },
  },
};
