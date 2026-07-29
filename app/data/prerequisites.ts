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
  proofSummary: string;
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
] as const;

export const prerequisiteChapters: readonly PrerequisiteChapter[] = [
  {
    slug: "elliptic-maps",
    numeral: "I",
    title: "Adapted complex structures",
    deck:
      "A standard linear-algebra course explains conjugate eigenvalues, but it may not formulate a real planar map intrinsically as complex multiplication. That formulation—and its two possible orientations—is the first specialised tool used here.",
    proofSummary:
      "How an elliptic real-linear map becomes complex multiplication, why there are exactly two adapted choices, and how handedness selects between conjugate eigenvalues.",
    vocabulary: [
      {
        term: "Complex structure on a real plane",
        definition:
          "A real-linear map J:V→V satisfying J²=−I. Declaring multiplication by i to mean J turns the real plane V into a one-dimensional complex vector space.",
      },
      {
        term: "Adapted complex structure",
        definition:
          "A complex structure J commuting with T. In the resulting complex line, T is multiplication by one scalar μ rather than an arbitrary real 2×2 matrix.",
      },
      {
        term: "Elliptic real-linear map",
        definition:
          "An invertible real planar map whose eigenvalues are nonreal. Equivalently, tr(T)²<4 det(T). Its eigenvalues are μ and μ̄.",
      },
      {
        term: "Handedness",
        definition:
          "The choice between the two orientations induced by J and −J. It determines whether the complex multiplier representing T is μ or μ̄.",
      },
    ],
    facts: [
      {
        title: "The complex structure can be recovered from T",
        statement:
          "If μ=α+iβ with β≠0, then J=(T−αI)/β satisfies J²=−I and T=αI+βJ.",
        explanation:
          "Cayley–Hamilton gives (T−αI)²=−β²I. Thus the complex coordinate is constructed from the intrinsic map; it is not an extra Euclidean choice.",
      },
      {
        title: "There are exactly two adapted choices",
        statement:
          "The two adapted complex structures are J and −J.",
        explanation:
          "They give the two conjugate descriptions Tz=μz and Tz=μ̄z. The underlying real map is unchanged.",
      },
      {
        title: "Conjugacy transports the structure",
        statement:
          "For an invertible real-linear S, the structure adapted to STS⁻¹ is SJS⁻¹.",
        explanation:
          "Indeed, (SJS⁻¹)²=−I and it commutes with STS⁻¹. Adapted complex coordinates therefore behave naturally under coordinate changes.",
      },
      {
        title: "Orientation decides whether μ is conjugated",
        statement:
          "An orientation-preserving coordinate change keeps the chosen multiplier; an orientation-reversing change exchanges μ and μ̄.",
        explanation:
          "This is the precise bridge between an intrinsic real map, an oriented polygon, and the complex phases used in the argument.",
      },
    ],
    example: {
      title: "Recovering J from a rotation-contraction",
      introduction:
        "Let T represent multiplication by μ=0.7e^{iπ/3}. Then α=0.7cos(π/3)=0.35 and β=0.7sin(π/3).",
      steps: [
        {
          label: "Remove the real part",
          text:
            "T−0.35I contains only the quarter-turn component of the map.",
        },
        {
          label: "Normalise",
          text:
            "Divide by β=0.7sin(π/3) to obtain J=(T−0.35I)/β.",
        },
        {
          label: "Check the square",
          text:
            "Cayley–Hamilton gives (T−0.35I)²=−β²I, hence J²=−I.",
        },
        {
          label: "Reverse orientation",
          text:
            "Replacing J by −J changes the multiplier from 0.7e^{iπ/3} to 0.7e^{-iπ/3}.",
        },
      ],
      conclusion:
        "The rotation angle and the complex coordinate arise from T itself, up to the unavoidable choice of orientation.",
    },
    partIUse: [
      {
        label: "Proposition 2.1",
        text:
          "Construction and uniqueness of the two adapted complex structures.",
        href: "/proof/#part-i-item-5",
      },
      {
        label: "Lemma 2.4",
        text:
          "Coordinate reversal and handedness.",
        href: "/proof/#part-i-item-8",
      },
    ],
    referenceIds: ["horn-johnson-2013"],
  },
  {
    slug: "convex-background",
    numeral: "II",
    title: "The convex-geometric vocabulary",
    deck:
      "The proof treats a polygon as a compact convex set, not merely as a cyclic list of corners. Extreme points, exposed faces, relative interiors, and strict separation supply the exact language.",
    proofSummary:
      "Extreme points, strict polygons, exposed faces, relative interiors, supporting functionals, and strict separation of a point from a compact convex set.",
    vocabulary: [
      {
        term: "Extreme point",
        definition:
          "A point x∈P that cannot be written as x=ty+(1−t)z with distinct y,z∈P and 0<t<1. For a polygon, these are precisely the genuine vertices.",
      },
      {
        term: "Exposed face",
        definition:
          "For a nonzero functional ℓ, the set F={x∈P:ℓ(x)=max_Pℓ}. It is the part of P touched by the supporting line ℓ=max_Pℓ.",
      },
      {
        term: "Relative interior",
        definition:
          "The interior taken inside the affine hull of a set. The relative interior of a polygon side is the open segment obtained by deleting its two endpoints.",
      },
      {
        term: "Strict polygon",
        definition:
          "A polygon with nonempty interior whose displayed vertices are exactly its extreme points. Adjacent sides are not collinear, and every side is a maximal boundary segment.",
      },
    ],
    facts: [
      {
        title: "Invertible linear maps preserve extreme points",
        statement:
          "Ext(SP)=S(Ext(P)) for every invertible real-linear S.",
        explanation:
          "Both S and S⁻¹ preserve convex combinations. A coordinate change therefore preserves the genuine vertex set and its cardinality.",
      },
      {
        title: "Faces are equality sets",
        statement:
          "A side e of a polygon has the form e={x∈P:ℓ(x)=hP(ℓ)}, where hP(ℓ)=max_{x∈P}ℓ(x).",
        explanation:
          "The inequality ℓ≤hP(ℓ) describes a supporting half-plane; equality singles out the touched face.",
      },
      {
        title: "A strict supporting line isolates one vertex",
        statement:
          "A supporting line through a vertex is strict when its exposed face consists of that vertex alone.",
        explanation:
          "At a strict polygonal vertex, the directions of strict supporting lines form the interior of its normal cone.",
      },
      {
        title: "Exterior points can be separated strictly",
        statement:
          "If K is compact and convex and y∉K, some ℓ satisfies ℓ(y)>max_{x∈K}ℓ(x).",
        explanation:
          "The supporting line at the maximum places all of K in one closed half-plane and y strictly in the other.",
      },
    ],
    example: {
      title: "A displayed point that is not a vertex",
      introduction:
        "Start with the square P=conv{(−1,−1),(1,−1),(1,1),(−1,1)} and insert m=(0,1) into its displayed boundary list.",
      steps: [
        {
          label: "Recognise a convex combination",
          text:
            "The point m is the midpoint of (−1,1) and (1,1).",
        },
        {
          label: "Test extremality",
          text:
            "Because m=(1/2)(−1,1)+(1/2)(1,1), it is not an extreme point.",
        },
        {
          label: "Find the exposed face",
          text:
            "For ℓ(x₁,x₂)=x₂, the equality set ℓ=1 is the entire top side, not m alone.",
        },
        {
          label: "Count correctly",
          text:
            "The polygon still has four vertices. A five-entry display does not make it a strict pentagon.",
        },
      ],
      conclusion:
        "This is why polygonal complexity counts extreme points rather than the length of an arbitrary vertex list.",
    },
    partIUse: [
      {
        label: "Definition 1.1",
        text:
          "Polygonal complexity counts the extreme points of an invariant polygon.",
        href: "/proof/#part-i-item-1",
      },
      {
        label: "Definition 1.2",
        text:
          "Strict polygons, maximal sides, and strict supporting lines.",
        href: "/proof/#part-i-item-2",
      },
      {
        label: "Lemma A.2",
        text:
          "Strict separation of an exterior point from a compact convex set.",
        href: "/proof/#part-i-item-66",
      },
    ],
    referenceIds: ["schneider-2014", "rockafellar-1970"],
  },
  {
    slug: "oriented-boundary",
    numeral: "III",
    title: "Oriented boundary order and covariance",
    deck:
      "A polygon surrounding the origin carries two compatible cyclic orders: the order along its boundary and the order of its ray directions. Topic I also tracks how those orders behave under arbitrary real-linear changes of coordinates.",
    proofSummary:
      "Positive boundary orientation, cyclic ray order from an interior point, coordinate reversal, and covariance of sides, contacts, and labels.",
    vocabulary: [
      {
        term: "Positive boundary orientation",
        definition:
          "The direction around ∂P for which the interior of P remains on the left. Reversing the orientation reverses every cyclic order used on the boundary.",
      },
      {
        term: "Cyclic order",
        definition:
          "An order defined up to the choice of a starting point. A positively oriented polygon determines a cyclic order on its vertices and sides.",
      },
      {
        term: "Ray order about an interior point",
        definition:
          "If 0∈int P, each nonzero boundary point has a direction in the oriented circle of rays from 0. These directions have their own cyclic order.",
      },
      {
        term: "Covariance",
        definition:
          "A construction is covariant when applying an invertible map S to the input applies S to every resulting geometric object: vertices, sides, faces, and contact points.",
      },
    ],
    facts: [
      {
        title: "Boundary order agrees with ray order",
        statement:
          "For 0∈int P, positively ordered boundary points occur in the same cyclic order as their rays from 0.",
        explanation:
          "Every ray meets the boundary exactly once. Along the positive boundary, its direction therefore turns monotonically around the origin.",
      },
      {
        title: "Handedness changes all orders together",
        statement:
          "An invertible S preserves these cyclic orders when det S>0 and reverses both when det S<0.",
        explanation:
          "There is no independent sign choice: the orientation of the plane, the boundary, and the adapted complex coordinate are linked.",
      },
      {
        title: "Containment is covariant",
        statement:
          "TP⊆P exactly when (STS⁻¹)(SP)⊆SP.",
        explanation:
          "Applying S transports the entire invariant-polygon problem. This is the basic identity behind coordinate-free polygonal complexity.",
      },
      {
        title: "Contact incidence is covariant",
        statement:
          "Tv∈e exactly when (STS⁻¹)(Sv)∈Se.",
        explanation:
          "The image of a side is a side, relative interiors map to relative interiors, and endpoint incidence is preserved.",
      },
    ],
    example: {
      title: "What an orientation-reversing coordinate change does",
      introduction:
        "Let P be a counterclockwise triangle around the origin and let S(x,y)=(x,−y), reflection in the horizontal axis.",
      steps: [
        {
          label: "Reverse the plane",
          text:
            "The determinant of S is −1, so S reverses orientation.",
        },
        {
          label: "Reverse the boundary",
          text:
            "The image of the counterclockwise vertex list is clockwise around SP.",
        },
        {
          label: "Reverse the ray order",
          text:
            "The directions of the image vertices occur in the opposite cyclic order around the origin.",
        },
        {
          label: "Conjugate the multiplier",
          text:
            "In adapted complex coordinates, the multiplier μ representing T is replaced by μ̄.",
        },
      ],
      conclusion:
        "All reversals are manifestations of the same change of handedness; the invariant-polygon geometry itself is unchanged.",
    },
    partIUse: [
      {
        label: "Proposition 2.2",
        text:
          "Real-linear invariance of polygonal complexity.",
        href: "/proof/#part-i-item-6",
      },
      {
        label: "Proposition 2.3",
        text:
          "Covariance of vertices, sides, contact geometry, and labels.",
        href: "/proof/#part-i-item-7",
      },
      {
        label: "Lemmas 2.4–2.6",
        text:
          "Handedness, the interior origin, and oriented boundary order.",
        href: "/proof/#part-i-item-8",
      },
    ],
    referenceIds: ["schneider-2014", "horn-johnson-2013"],
  },
] as const;

export const prerequisitesContent = {
  title: "Prerequisites for Topic I",
  subtitle: "The small library this reader assumes",
  topicTitle: "Topic I · The language of critical polygons",
  deck:
    "Three illustrated notes on background that is not normally part of a first linear-algebra course: adapted complex structures, precise polygonal convexity, and oriented boundary covariance.",
} as const;

export function getPrerequisiteReference(
  id: string,
): PrerequisiteReference | undefined {
  return prerequisiteReferences.find((reference) => reference.id === id);
}
