// Parked material for prerequisite topics II–VIII. Not rendered yet.
export type PrerequisiteReference = {
  id: string;
  authors: string;
  title: string;
  publication: string;
  href?: string;
};

export type PrerequisiteChapter = {
  slug: string;
  numeral: string;
  title: string;
  deck: string;
  vocabulary: readonly {
    term: string;
    definition: string;
  }[];
  facts: readonly {
    title: string;
    statement: string;
    explanation: string;
  }[];
  example: {
    title: string;
    introduction: string;
    steps: readonly {
      label: string;
      text: string;
    }[];
    conclusion: string;
  };
  partIUse: readonly {
    label: string;
    text: string;
    href: string;
  }[];
  referenceIds: readonly string[];
};

export const prerequisiteReferences: readonly PrerequisiteReference[] = [
  {
    id: "horn-johnson-2013",
    authors: "R. A. Horn and C. R. Johnson",
    title: "Matrix Analysis",
    publication: "2nd ed., Cambridge University Press, 2013.",
    href: "https://doi.org/10.1017/CBO9781139020411",
  },
  {
    id: "seneta-2006",
    authors: "E. Seneta",
    title: "Non-negative Matrices and Markov Chains",
    publication: "Revised printing, Springer, 2006.",
    href: "https://doi.org/10.1007/0-387-32792-4",
  },
  {
    id: "schneider-2014",
    authors: "R. Schneider",
    title: "Convex Bodies: The Brunn–Minkowski Theory",
    publication: "2nd expanded ed., Cambridge University Press, 2014.",
    href: "https://doi.org/10.1017/CBO9781139003858",
  },
  {
    id: "rockafellar-1970",
    authors: "R. T. Rockafellar",
    title: "Convex Analysis",
    publication: "Princeton University Press, 1970.",
    href: "https://press.princeton.edu/books/paperback/9780691015866/convex-analysis",
  },
  {
    id: "slater-1967",
    authors: "N. B. Slater",
    title: "Gaps and steps for the sequence nθ mod 1",
    publication:
      "Proceedings of the Cambridge Philosophical Society 63(4) (1967), 1115–1123.",
    href: "https://doi.org/10.1017/S0305004100042195",
  },
  {
    id: "hardy-wright-2008",
    authors: "G. H. Hardy and E. M. Wright",
    title: "An Introduction to the Theory of Numbers",
    publication: "6th ed., revised by D. R. Heath-Brown and J. H. Silverman, Oxford University Press, 2008.",
  },
  {
    id: "coxeter-2003",
    authors: "H. S. M. Coxeter",
    title: "Projective Geometry",
    publication: "2nd ed., Springer, 2003.",
    href: "https://doi.org/10.1007/978-1-4612-0899-7",
  },
  {
    id: "karpelevic-1951",
    authors: "F. I. Karpelevič",
    title: "On the characteristic roots of matrices with nonnegative elements",
    publication:
      "Izv. Akad. Nauk SSSR Ser. Mat. 15(4) (1951), 361–383.",
    href: "https://www.mathnet.ru/eng/im3317",
  },
] as const;

export const prerequisiteChapters: readonly PrerequisiteChapter[] = [
  {
    slug: "linear-algebra",
    numeral: "I",
    title: "Linear algebra for an elliptic contraction",
    deck:
      "The proof begins with a real map of a two-dimensional plane, but its most economical description is complex multiplication. This chapter explains that translation and the one Perron–Frobenius tool later used to eliminate slack.",
    vocabulary: [
      {
        term: "Eigenvalue and eigenvector",
        definition:
          "A scalar λ and a nonzero vector v satisfying Av = λv. The vector keeps its direction under A; only its scale, and over ℂ its phase, change.",
      },
      {
        term: "Spectral radius",
        definition:
          "The number ρ(A) = max{|λ| : λ is an eigenvalue of A}. A contraction in this reader has spectral radius below one.",
      },
      {
        term: "Complex structure",
        definition:
          "A real-linear map J with J² = −I. Declaring multiplication by i to mean J turns the real plane into a one-dimensional complex vector space.",
      },
      {
        term: "Nonnegative matrix",
        definition:
          "A matrix B whose entries are all at least zero. Such a matrix preserves the nonnegative coordinate cone.",
      },
    ],
    facts: [
      {
        title: "The discriminant detects nonreal eigenvalues",
        statement:
          "For a real 2 × 2 matrix T, the eigenvalues are nonreal exactly when tr(T)² < 4 det(T).",
        explanation:
          "The characteristic polynomial is x² − tr(T)x + det(T). Its discriminant is negative precisely in the nonreal case.",
      },
      {
        title: "An elliptic map has two adapted orientations",
        statement:
          "If the eigenvalues are ρe^{±iθ}, then the two complex structures J± make T equal to multiplication by ρe^{±iθ}.",
        explanation:
          "The two choices are conjugate and induce opposite orientations. The proof may use one orientation for contact bookkeeping and later select the other for monodromy.",
      },
      {
        title: "A weighted norm bounds the spectrum",
        statement:
          "If B ≥ 0, x > 0, and Bx ≤ cx coordinatewise, then ρ(B) ≤ c.",
        explanation:
          "Use the weighted supremum norm ‖z‖x = max_i |z_i|/x_i. Positivity gives |Bz| ≤ B|z| ≤ c‖z‖x x, so the operator norm is at most c.",
      },
      {
        title: "Perron vectors exist at the spectral radius",
        statement:
          "For B ≥ 0 there are nonzero v,w ≥ 0 with Bv = ρ(B)v and Bᵀw = ρ(B)w.",
        explanation:
          "These right and left vectors provide the positive weights used in the saturation argument.",
      },
    ],
    example: {
      title: "A rotation-contraction written as a matrix",
      introduction:
        "Take ρ = 0.7 and θ = π/3. In the standard oriented plane, multiplication by 0.7e^{iπ/3} is the real matrix",
      steps: [
        {
          label: "Trace",
          text:
            "tr(T) = 2ρ cos θ = 0.7.",
        },
        {
          label: "Determinant",
          text:
            "det(T) = ρ² = 0.49.",
        },
        {
          label: "Discriminant",
          text:
            "tr(T)² − 4 det(T) = 0.49 − 1.96 = −1.47 < 0.",
        },
        {
          label: "Dynamics",
          text:
            "Every vector rotates by 60° and shrinks to 70% of its length.",
        },
      ],
      conclusion:
        "The eigenvalues are 0.7e^{±iπ/3}; changing the complex orientation exchanges them without changing the underlying real map.",
    },
    partIUse: [
      {
        label: "Topic I",
        text:
          "Adapted complex structures, covariance, and orientation reversal.",
        href: "/proof/#topic-language",
      },
      {
        label: "Topic II",
        text:
          "The weighted spectral-radius bound and Perron vectors drive hereditary saturation.",
        href: "/proof/#topic-active-sides",
      },
      {
        label: "Topic VIII",
        text:
          "Standard spectral bounds and conjugate pairs return in the stochastic application.",
        href: "/proof/#topic-spectra",
      },
    ],
    referenceIds: ["horn-johnson-2013", "seneta-2006"],
  },
  {
    slug: "convexity",
    numeral: "II",
    title: "Planar convexity and polygonal duality",
    deck:
      "Invariant polygons are controlled simultaneously by their vertices and by their supporting lines. The proof moves repeatedly between these two descriptions, clips caps, takes limits, and compares areas.",
    vocabulary: [
      {
        term: "Convex combination",
        definition:
          "A sum t₁x₁ + ··· + tₖxₖ with tᵢ ≥ 0 and Σtᵢ = 1. It is the formal meaning of lying between or inside given points.",
      },
      {
        term: "Extreme point",
        definition:
          "A point of a convex set that is not a nontrivial convex combination of two other points of the set. The extreme points of a strict polygon are exactly its vertices.",
      },
      {
        term: "Supporting line and face",
        definition:
          "A line on which a linear functional reaches its maximum over the polygon. The points attaining that maximum form the exposed face.",
      },
      {
        term: "Polar",
        definition:
          "For 0 in the interior of P, the polar is P° = {y : ⟨y,x⟩ ≤ 1 for every x in P}. Vertices of P correspond to sides of P°.",
      },
    ],
    facts: [
      {
        title: "Linear maps preserve convex combinations",
        statement:
          "A(Σtᵢxᵢ) = ΣtᵢA(xᵢ).",
        explanation:
          "Consequently, to check AP ⊆ P for a polygon, it is enough to check the images of its vertices.",
      },
      {
        title: "Equality on a face is rigid",
        statement:
          "If a convex combination reaches a supporting line, every point with positive weight lies on that same face.",
        explanation:
          "No positive weighted deficit can be cancelled because all points lie on the same side of a supporting line.",
      },
      {
        title: "Polarity reverses the viewpoint",
        statement:
          "If AP ⊆ P, then A*P° ⊆ P°.",
        explanation:
          "For y ∈ P° and x ∈ P, ⟨A*y,x⟩ = ⟨y,Ax⟩ ≤ 1. In the polar, supporting inequalities become vertices.",
      },
      {
        title: "Proper inclusion strictly increases area",
        statement:
          "If K ⊊ L are compact planar convex bodies with interior, then area(K) < area(L).",
        explanation:
          "Strict separation finds a positive-area triangular region of L outside K. This converts a geometric clipping into a strict contradiction.",
      },
    ],
    example: {
      title: "Why a side contact must come from an image vertex",
      introduction:
        "Let P = conv{x₁,…,xN} and suppose TP touches a supporting side E of P at y.",
      steps: [
        {
          label: "Expand y",
          text:
            "Because TP = conv{Tx₁,…,TxN}, write y = ΣtᵢTxᵢ.",
        },
        {
          label: "Apply the support functional",
          text:
            "If ℓ ≤ c on P and ℓ(y) = c, then c = Σtᵢℓ(Txᵢ) with every ℓ(Txᵢ) ≤ c.",
        },
        {
          label: "Use rigidity",
          text:
            "Every term with tᵢ > 0 must itself satisfy ℓ(Txᵢ) = c.",
        },
        {
          label: "Choose a witness",
          text:
            "At least one coefficient is positive, so some image vertex Txᵢ lies on E.",
        },
      ],
      conclusion:
        "This elementary equality argument turns the global statement “TP meets E” into the discrete contact witness needed by the ownership ledger.",
    },
    partIUse: [
      {
        label: "Topics I–II",
        text:
          "Strictness, supporting faces, normal fans, polarity, and saturation.",
        href: "/proof/#topic-active-sides",
      },
      {
        label: "Topics III–IV",
        text:
          "Face rigidity, edge-cap clipping, Hausdorff limits, and area minimality.",
        href: "/proof/#topic-ownership",
      },
      {
        label: "Topic VI",
        text:
          "Strict support inequalities keep the global corridor deformation admissible.",
        href: "/proof/#topic-unit-return",
      },
    ],
    referenceIds: ["schneider-2014", "rockafellar-1970"],
  },
  {
    slug: "cyclic-arithmetic",
    numeral: "III",
    title: "Finite cyclic arithmetic and first returns",
    deck:
      "Once contacts have been reduced to one interval, the geometry temporarily becomes arithmetic on ℤ/Nℤ. The essential questions are orbit decomposition, first return, two-height towers, and determinant-one lattice data.",
    vocabulary: [
      {
        term: "Cyclic group ℤ/Nℤ",
        definition:
          "The residues 0,…,N−1 with addition modulo N. Moving past N−1 wraps back to zero.",
      },
      {
        term: "Rotation by κ",
        definition:
          "The translation σ(i) = i + κ mod N. It has gcd(N,κ) distinct cycles, each of length N/gcd(N,κ).",
      },
      {
        term: "First return",
        definition:
          "For I ⊆ ℤ/Nℤ, the first positive time H(i) for which σ^{H(i)}(i) lies in I again.",
      },
      {
        term: "Return tower",
        definition:
          "The orbit segment i,σ(i),…,σ^{H(i)−1}(i). Towers based at the return section partition the cyclic state space.",
      },
    ],
    facts: [
      {
        title: "The gcd counts cycles",
        statement:
          "Translation by κ on ℤ/Nℤ has δ = gcd(N,κ) orbits.",
        explanation:
          "The subgroup generated by κ consists of multiples of δ and has N/δ elements. Its δ cosets are precisely the orbits.",
      },
      {
        title: "The Euclidean algorithm records closest returns",
        statement:
          "Remainders in the Euclidean algorithm for N and κ identify record-small positive residues of multiples of κ modulo N.",
        explanation:
          "These records are the finite analogue of best rational approximations for a circle rotation.",
      },
      {
        title: "Consecutive records are unimodular",
        statement:
          "The corresponding integer vectors have determinant ±1.",
        explanation:
          "A larger determinant would leave another lattice point inside the associated parallelogram and produce an intermediate record.",
      },
      {
        title: "An interval has two return heights",
        statement:
          "For the consecutive record interval used in Part I, every first-return time is one of two integers q and q+h.",
        explanation:
          "The two heights are the two ways an orbit can cross the interval boundary before returning.",
      },
    ],
    example: {
      title: "N = 11, step κ = 4, section I = {0,1,2,3}",
      introduction:
        "The full orbit is 0 → 4 → 8 → 1 → 5 → 9 → 2 → 6 → 10 → 3 → 7 → 0.",
      steps: [
        {
          label: "From 0",
          text:
            "0 → 4 → 8 → 1, so H(0) = 3.",
        },
        {
          label: "From 1",
          text:
            "1 → 5 → 9 → 2, so H(1) = 3.",
        },
        {
          label: "From 2",
          text:
            "2 → 6 → 10 → 3, so H(2) = 3.",
        },
        {
          label: "From 3",
          text:
            "3 → 7 → 0, so H(3) = 2.",
        },
      ],
      conclusion:
        "The four towers have heights 3,3,3,2 and contain 11 states altogether. This is the two-height phenomenon in a small example.",
    },
    partIUse: [
      {
        label: "Topic IV",
        text:
          "The contact rotation becomes a translation after the strict contacts form one interval.",
        href: "/proof/#topic-mutation",
      },
      {
        label: "Topic V",
        text:
          "The finite rotation theorem and lattice sail produce the return-edge ledger.",
        href: "/proof/#topic-rotation",
      },
      {
        label: "Topic VII",
        text:
          "Determinant-one return data becomes Farey adjacency.",
        href: "/proof/#topic-farey-return",
      },
    ],
    referenceIds: ["slater-1967", "hardy-wright-2008"],
  },
  {
    slug: "projective-farey",
    numeral: "IV",
    title: "Projective geometry and Farey cells",
    deck:
      "The last prerequisite shelf joins two subjects. Projective geometry explains why successive boundary projections have a rigid return map; Farey arithmetic names the determinant-one cell selected by the return towers.",
    vocabulary: [
      {
        term: "Central projection",
        definition:
          "Given a center C and two lines, send x on the first line to the intersection of Cx with the second line.",
      },
      {
        term: "Projectivity",
        definition:
          "A composition of central projections. In an affine coordinate t on a line it has the form H(t) = (at+b)/(ct+d).",
      },
      {
        term: "Farey sequence FN",
        definition:
          "All reduced fractions between zero and one whose denominator is at most N, arranged in increasing order.",
      },
      {
        term: "Farey neighbours",
        definition:
          "Consecutive fractions p/q < r/s in FN. They satisfy qr − ps = 1 and q+s > N.",
      },
    ],
    facts: [
      {
        title: "Projectivities are fractional-linear",
        statement:
          "After choosing affine coordinates on the source and target lines, a central projection is represented by (at+b)/(ct+d).",
        explanation:
          "Compositions remain of the same form, so an entire corridor has one fractional-linear holonomy.",
      },
      {
        title: "A nonidentity projectivity has isolated fixed points",
        statement:
          "H(t) = t reduces to ct² + (d−a)t − b = 0.",
        explanation:
          "Unless every coefficient vanishes and H is the identity, there are at most two fixed points. A nearby point can therefore escape the fixed set.",
      },
      {
        title: "The determinant-one criterion is exact",
        statement:
          "Reduced p/q < r/s are Farey neighbours at an order where both appear exactly when qr − ps = 1 and q+s exceeds that order.",
        explanation:
          "If the determinant is one, every fraction strictly between them has denominator at least q+s.",
      },
      {
        title: "The mediant is the first newcomer",
        statement:
          "The mediant (p+r)/(q+s) lies strictly between p/q and r/s and has the smallest possible new denominator.",
        explanation:
          "It is the arithmetic point at which a Farey cell splits when the order reaches q+s.",
      },
    ],
    example: {
      title: "The cell from 1/3 to 2/5",
      introduction:
        "These fractions are reduced and ordered because 1/3 < 2/5.",
      steps: [
        {
          label: "Determinant",
          text:
            "3·2 − 1·5 = 1, so they are unimodular neighbours.",
        },
        {
          label: "Order five",
          text:
            "Their denominators are at most five and 3+5 = 8 > 5, so no fraction of F5 lies between them.",
        },
        {
          label: "Mediant",
          text:
            "(1+2)/(3+5) = 3/8 lies strictly between them.",
        },
        {
          label: "First split",
          text:
            "The denominator eight shows that this cell first splits at Farey order eight.",
        },
      ],
      conclusion:
        "This is also the paper’s worked ray x = 3/8: the arithmetic label is not decorative but records the first refinement of the neighbouring cell.",
    },
    partIUse: [
      {
        label: "Topic VI",
        text:
          "For N≥4, the return projectivity and fixed-point escape rule out a first-return step larger than one.",
        href: "/proof/#topic-unit-return",
      },
      {
        label: "Topic VII",
        text:
          "For N≥4, unimodular return data becomes a Farey carrier and complex monodromy identity; the smaller orders are treated directly.",
        href: "/proof/#topic-farey-return",
      },
      {
        label: "History",
        text:
          "The historical page explains how Farey-indexed boundary arcs entered the stochastic-eigenvalue literature.",
        href: "/history/",
      },
    ],
    referenceIds: [
      "coxeter-2003",
      "hardy-wright-2008",
      "karpelevic-1951",
    ],
  },
] as const;

export const prerequisitesContent = {
  title: "Prerequisites",
  subtitle: "The small library this reader assumes",
  deck:
    "Four compact, illustrated chapters containing the background used repeatedly in Part I. This is not a general textbook: every definition, example, and fact has been selected because the proof calls on it later.",
} as const;

export function getPrerequisiteReference(
  id: string,
): PrerequisiteReference | undefined {
  return prerequisiteReferences.find((reference) => reference.id === id);
}
