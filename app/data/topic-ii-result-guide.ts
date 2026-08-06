export type TopicIINewVocabulary = {
  term: string;
  definition: string;
  formula?: "lifted-arguments" | "support-function" | "neumann-series";
};

export type TopicIIResultGuide = {
  manuscriptLabel: string;
  role: "Main argument" | "Foundation brought forward" | "Consequence";
  newVocabulary: readonly TopicIINewVocabulary[];
};

export const topicIIPedagogicalOrder = [
  11, 12, 13, 14, 15, 65, 67, 16, 17, 18,
] as const;

export const topicIIManuscriptLabels: Readonly<Record<number, string>> = {
  11: "Lemma 2.7",
  12: "Lemma 2.8",
  13: "Lemma 2.9",
  14: "Lemma 2.10",
  15: "Proposition 3.1",
  16: "Theorem 3.2",
  17: "Remark 3.3",
  18: "Lemma 4.1",
  65: "Lemma A.1",
  67: "Lemma A.3",
} as const;

export const topicIIResultGuides: Readonly<
  Record<number, TopicIIResultGuide>
> = {
  11: {
    manuscriptLabel: "Lemma 2.7",
    role: "Main argument",
    newVocabulary: [
      {
        term: "Oriented determinant",
        definition:
          "For vectors a=(a₁,a₂) and b=(b₁,b₂), det(a,b)=a₁b₂−a₂b₁. It is positive exactly when the turn from a to b is counterclockwise through an angle strictly between 0 and π. Equivalently, det(q−p,z−p)>0 places z strictly to the left of the directed line p→q.",
      },
      {
        term: "Cyclic triple",
        definition:
          "A triple of boundary points (zᵢ,zⱼ,zₖ) in increasing cyclic order around the polygon, written with indices i<j<k in one chosen starting point.",
      },
      {
        term: "Exposed edge",
        definition:
          "A segment is an exposed edge of a convex hull when one supporting line meets the hull in exactly that segment. A supporting line “exposes” a face F if the face is exactly the set where the supporting inequality is tight. In this lemma the consistent determinant sign puts every other displayed point strictly on one side of each consecutive segment, so that segment must be a boundary edge.",
      },
      {
        term: "Complete certificate",
        definition:
          "A finite list is a complete certificate when the listed conditions are necessary and sufficient for the target property. If every condition holds, the target property follows; if the target property fails, at least one condition must fail.",
      },
    ],
  },
  12: {
    manuscriptLabel: "Lemma 2.8",
    role: "Main argument",
    newVocabulary: [
      {
        term: "Continuous point function",
        definition:
          "A continuous map ϕ:(−δ,δ)→V, where V is the real plane used throughout the chapter (and may be identified with ℝ² or ℂ). The word ‘point’ only says that each value ϕ(τ) is a point of that plane: as τ changes slightly, the point moves without jumps.",
      },
      {
        term: "Common-neighbourhood argument",
        definition:
          "If finitely many conditions are strict and remain true at τ=0, each gives an open interval of τ where it still holds. Their finite intersection is a nonempty open interval on which all of them hold simultaneously.",
      },
      {
        term: "Simultaneous admissibility",
        definition:
          "All required strict inequalities and open-segment conditions hold on one common interval around τ=0. Finiteness matters: intersecting finitely many open neighbourhoods still leaves an open neighbourhood of 0.",
      },
      {
        term: "Affine coordinate on a side",
        definition:
          "A point w on the line through p and q has a unique expression w=(1−α)p+αq when p≠q. It lies in the relative interior of [p,q] exactly when 0<α<1.",
      },
    ],
  },
  13: {
    manuscriptLabel: "Lemma 2.9",
    role: "Main argument",
    newVocabulary: [
      {
        term: "Direction vector of a line",
        definition:
          "Any nonzero vector parallel to the line. A point y lies on the line through x with direction v exactly when det(v,y−x)=0.",
      },
    ],
  },
  14: {
    manuscriptLabel: "Lemma 2.10",
    role: "Main argument",
    newVocabulary: [
      {
        term: "Lifted arguments",
        definition:
          "Angles chosen as real numbers rather than only modulo 2π. They obey the periodic lift relation below, which records an unbroken counterclockwise circuit and makes each angular gap an ordinary real number.",
        formula: "lifted-arguments",
      },
      {
        term: "Argument along a segment",
        definition:
          "For a nonzero differentiable path z(t), a continuous branch of its polar angle satisfies d Arg(z(t))/dt=det(z(t),z′(t))/|z(t)|². Here the side avoids 0 because 0 is an interior point and the side lies on the boundary.",
      },
    ],
  },
  15: {
    manuscriptLabel: "Proposition 3.1",
    role: "Main argument",
    newVocabulary: [
      {
        term: "Support function and support number",
        definition:
          "For a compact convex set P, the support function assigns to each vector u the largest value of the functional z↦⟨u,z⟩ on P. For an outward unit normal to a side, the corresponding support number is that side’s signed distance from 0 in the adapted Euclidean metric. It is positive because 0 lies in the interior.",
        formula: "support-function",
      },
      {
        term: "Normal fan",
        definition:
          "The cyclic rays generated by the outward side normals. Each direction lies in a cone between two adjacent rays; inside that cone its support value is determined by the two support inequalities meeting at the corresponding vertex.",
      },
      {
        term: "Nonnegative transfer matrix BΦ(θ)",
        definition:
          "For each row i, rotate uᵢ backwards by θ and express it as aᵢuⱼ+bᵢuⱼ₊₁ in the containing fan cone. The only nonzero entries in row i are those coefficients aᵢ,bᵢ≥0. Thus BΦ(θ) records how the rotated directions interpolate between adjacent fan rays.",
      },
      {
        term: "Componentwise inequality",
        definition:
          "The notation ρBh≤h means (ρBh)ᵢ≤hᵢ for every coordinate i. Each coordinate is precisely one supporting-side inequality for λP⊆P.",
      },
    ],
  },
  65: {
    manuscriptLabel: "Lemma A.1",
    role: "Foundation brought forward",
    newVocabulary: [
      {
        term: "Entrywise nonnegative matrix",
        definition:
          "A real matrix B=(bᵢⱼ) with bᵢⱼ≥0 for every i,j. Consequently x≥0 implies Bx≥0, and |Bz|≤B|z| coordinatewise.",
      },
      {
        term: "Spectral radius, spr(B)",
        definition:
          "spr(B) is the maximum of |λ| over all eigenvalues λ of B. For nonnegative matrices this governs how powers of B scale: if spr(B)<1, Perron–Frobenius arguments give strong contraction-type conclusions.",
      },
      {
        term: "Weighted supremum norm",
        definition:
          "For a vector x with all coordinates positive, ‖z‖ₓ=maxᵢ |zᵢ|/xᵢ. It rescales the coordinate axes so that the comparison Bx≤cx becomes the operator-norm bound ‖B‖ₓ≤c.",
      },
      {
        term: "Right and left Perron vectors",
        definition:
          "Nonzero vectors v,w≥0 satisfying Bv=spr(B)v and Bᵀw=spr(B)w. The proof on this page establishes their existence even when B is reducible; no irreducibility assumption is being hidden.",
      },
      {
        term: "Probability simplex",
        definition:
          "The compact set of vectors x≥0 with Σᵢxᵢ=1; its interior consists of the vectors with every coordinate positive. Normalising eigenvectors here prevents them from escaping to infinity during a limiting argument.",
      },
    ],
  },
  67: {
    manuscriptLabel: "Lemma A.3",
    role: "Foundation brought forward",
    newVocabulary: [
      {
        term: "Polar set",
        definition:
          "For 0 in the interior of K, the polar is K°={y:⟨y,x⟩≤1 for every x∈K}. A point y records one normalised supporting inequality for K.",
      },
      {
        term: "Adjoint",
        definition:
          "The linear map A* defined by ⟨A*y,x⟩=⟨y,Ax⟩ for all x,y. This identity reverses an invariant inclusion: AK⊆K implies A*K°⊆K°.",
      },
      {
        term: "Irredundant inequality",
        definition:
          "A defining half-plane inequality that cannot be deleted without enlarging the set. Each vertex x of K gives the irredundant polar inequality ⟨y,x⟩≤1 and therefore one genuine side of K°.",
      },
      {
        term: "Dual face",
        definition:
          "For a vertex x of K, Fₓ={y∈K°:⟨y,x⟩=1} is the corresponding side of K°. Thus polarity exchanges vertices and sides.",
      },
    ],
  },
  16: {
    manuscriptLabel: "Theorem 3.2",
    role: "Main argument",
    newVocabulary: [
      {
        term: "Saturation",
        definition:
          "Side saturation means every side of R has nonempty intersection with TR (equivalently, each support inequality is tight). Vertex saturation means every vertex of TR lies on ∂R. The theorem proves both, for every invariant polygon with the same vertex budget N=νpoly(T).",
      },
      {
        term: "Vertex budget",
        definition:
          "The fixed value N=νpoly(T), the minimal number of vertices among T-invariant polygons (or ∞ if none exist). In this topic the budget is fixed once and for all for the contraction T under study.",
      },
      {
        term: "Support slack",
        definition:
          "For support vector h and matrix B, define slack q:=h−ρBh. Each coordinate is qᵢ=hᵢ−(ρBh)ᵢ and is ≥0 by invariance. qᵢ=0 is tight saturation of side i, while qᵢ>0 means that side is not hit by TR.",
      },
      {
        term: "Vanishing slack",
        definition:
          "The condition q=0, i.e. h=ρBh coordinatewise. Vanishing slack means every side inequality is tight, so every side intersects TR.",
      },
      {
        term: "Meets",
        definition:
          "For sets A and B, A meets B means A∩B is nonempty. Here a polygon side meets TR if they share at least one point.",
      },
      {
        term: "Positive spanning",
        definition:
          "Vectors uᵢ positively span the plane when every vector is a nonnegative linear combination of them, equivalently when their positive cone is all of ℝ². For finitely many half-planes with these outward normals, there is no nonzero direction in which one can escape to infinity.",
      },
      {
        term: "Recession cone",
        definition:
          "The directions d for which z+td remains in a convex set for every t≥0. For {z:⟨uᵢ,z⟩≤hᵢ}, it is {d:⟨uᵢ,d⟩≤0 for all i}. Positive spanning makes this cone {0}, hence the finite half-plane intersection is bounded.",
      },
      {
        term: "Complementarity",
        definition:
          "If w≥0 and q=h−ρBh≥0 satisfy wᵀq=0, then every product wᵢqᵢ is zero. Once every wᵢ is proved positive, all slacks qᵢ vanish, so every supporting inequality is attained.",
      },
      {
        term: "Neumann series",
        definition:
          "When the spectral radius of M is smaller than 1, the required inverse has the convergent expansion displayed below. In this proof, the series produces a nonnegative comparison vector used to perturb support data.",
        formula: "neumann-series",
      },
    ],
  },
  17: {
    manuscriptLabel: "Remark 3.3",
    role: "Consequence",
    newVocabulary: [
      {
        term: "Hereditary",
        definition:
          "The conclusion is not tied to one initially chosen critical polygon. It applies again to every later replacement polygon once that polygon has independently been shown to remain an invariant N-gon.",
      },
    ],
  },
  18: {
    manuscriptLabel: "Lemma 4.1",
    role: "Main argument",
    newVocabulary: [
      {
        term: "Witness",
        definition:
          "A concrete vertex q of Q lying on the side E. The lemma upgrades the set-level statement E∩Q≠∅ to a vertex-level contact, which is the discrete datum needed later.",
      },
    ],
  },
} as const;
