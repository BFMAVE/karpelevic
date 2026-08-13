export type TopicICommentary = {
  number: number;
  intuition: string;
  details: readonly {
    title: string;
    text: string;
  }[];
  takeaway: string;
  figure?: "adapted-complex" | "origin-and-order";
};

export const topicICommentary: Readonly<Record<number, TopicICommentary>> = {
  1: {
    number: 1,
    intuition:
      "Polygonal complexity is an optimisation problem over every invariant polygon, not a property of one convenient drawing. The equality νpoly(T)=N says that N is the least number of vertices of such a polygon. Radial criticality adds that, for every t>1, no polygon with at most N vertices is invariant under tT.",
    details: [
      {
        title: "The first condition",
        text:
          "The equality νpoly(T)=N says both that an invariant N-gon exists and that no invariant polygon with fewer than N extreme points exists.",
      },
      {
        title: "The radial condition",
        text:
          "For every t>1, the map tT has polygonal complexity greater than N. Multiplication by t scales every output of T by the positive factor t without changing its angular action. The value may be infinite because tT need not remain a contraction.",
      },
      {
        title: "Why the quantifier is strict",
        text:
          "Criticality is not merely the existence of an invariant N-gon. It says that every tT with t>1 requires more than N vertices, which is the extremal condition used later.",
      },
    ],
    takeaway:
      "Read N-critical as “N is the least possible vertex count for T, and no polygon with at most N vertices works for any tT with t>1.”",
  },
  2: {
    number: 2,
    intuition:
      "A polygon can be displayed with repeated points or with extra points inserted along a side. Those choices must not alter the complexity. The manuscript calls a polygon strict when its displayed list contains each extreme point exactly once and no other points. This removes redundant entries before sides and cyclic order are used.",
    details: [
      {
        title: "Extreme points only",
        text:
          "The displayed cyclic list contains every point of Ext(P) exactly once and contains no other points. A point in the relative interior of a side is a convex combination of its endpoints and therefore is not a vertex. The manuscript’s custom word “strict” does not mean strictly convex in the standard sense.",
      },
      {
        title: "Maximal sides",
        text:
          "Adjacent sides are consecutive boundary segments sharing an endpoint. If they lie on the same line, their shared endpoint is not an extreme point and their union is one longer segment. A maximal side is this longest straight boundary segment: it cannot be extended at either end while remaining in the boundary.",
      },
      {
        title: "Strict support",
        text:
          "The contact face of a supporting line is the part of the polygon lying on that line. A supporting line is strict when its contact face is the single vertex rather than a complete edge. Intrinsically, the exposing object is a nonzero covector in the dual plane; after an auxiliary inner product identifies covectors with normal arrows, such a line is strict exactly when its arrow lies in the interior of the vertex’s normal cone.",
      },
    ],
    takeaway:
      "For a strict polygon in the manuscript’s sense, every displayed vertex is an extreme point and every displayed side is a maximal boundary segment.",
  },
  5: {
    number: 5,
    figure: "adapted-complex",
    intuition:
      "The real plane has no preferred complex coordinate. An elliptic map supplies one: after normalisation, its nonreal part squares to −I and therefore acts as multiplication by i.",
    details: [
      {
        title: "Normalise the eigenvalues",
        text:
          "Write the conjugate eigenvalues as ρe^{±iθ}, where ρ=√det(T) and cos θ=tr(T)/(2ρ). Ellipticity ensures 0<θ<π, so sin θ is nonzero.",
      },
      {
        title: "Construct the complex structure",
        text:
          "Set J+=(ρ⁻¹T−cos θ I)/sin θ. Cayley–Hamilton reduces the square of the numerator to −sin²θ I, hence J+²=−I.",
      },
      {
        title: "Choose the orientation",
        text:
          "The structures J+ and J−=−J+ induce opposite orientations and make T multiplication by ρe^{iθ} and ρe^{-iθ}, respectively.",
      },
      {
        title: "Choose an adapted metric",
        text:
          "Averaging any inner product with its pullback by J+ makes J+ orthogonal. In that metric, T is literally a rotation through θ followed by contraction by ρ.",
      },
    ],
    takeaway:
      "The complex picture is intrinsic up to conjugation: it packages the real map as rotation plus contraction without selecting arbitrary Euclidean axes.",
  },
  6: {
    number: 6,
    intuition:
      "Polygonal complexity should not change when a picture is sheared, stretched, or expressed in another basis. The proof transports every polygon satisfying TP⊆P through the coordinate change.",
    details: [
      {
        title: "Transport a candidate",
        text:
          "If TP⊆P and A is invertible, then (ATA⁻¹)(AP)=A(TP)⊆AP.",
      },
      {
        title: "Preserve the vertex count",
        text:
          "Invertible linear maps preserve convex combinations in both directions, so Ext(AP)=A(Ext(P)). The polygons P and AP have the same number of extreme points.",
      },
      {
        title: "Run the argument backwards",
        text:
          "Applying the same reasoning to A⁻¹ gives the reverse inequality between the two polygonal complexities, hence equality.",
      },
    ],
    takeaway:
      "The minimum vertex count belongs to the conjugacy class of T, not to a chosen matrix or drawing.",
  },
  7: {
    number: 7,
    intuition:
      "The argument eventually modifies polygons and records which image vertex touches which side. Proposition 2.3 verifies once and for all that every such construction commutes with an invertible real-linear coordinate change.",
    details: [
      {
        title: "Faces and contacts",
        text:
          "If ℓ exposes a face F of P, then ℓ∘A⁻¹ exposes AF in AP. Side contacts, vertex contacts, relative interiors, and strict support are therefore transported exactly.",
      },
      {
        title: "Geometric operations",
        text:
          "Intersecting with a half-plane and replacing a vertex by a specified image point on the boundary commute with A. The condition that the displayed vertices are exactly the extreme points, as well as incidence equalities, invariance, and vertex counts, is preserved.",
      },
      {
        title: "Cyclic labels",
        text:
          "When the target boundary receives the orientation transported by A, the induced side bijection sends the next-side map s, the interior-contact side set I, and the cyclic shift σ to their corresponding maps and set on AP.",
      },
    ],
    takeaway:
      "A coordinate change preserves TP⊆P and transports the associated vertices, sides, side assignments, and cyclic maps.",
  },
  8: {
    number: 8,
    intuition:
      "Complex conjugation preserves the unoriented convex geometry but reverses cyclic order. One must therefore check which half-open side contains a contact at a shared endpoint.",
    details: [
      {
        title: "Intertwine the maps",
        text:
          "Complex conjugation C satisfies C(λz)=λ̄C(z). Thus λP⊆P exactly when λ̄C(P)⊆C(P).",
      },
      {
        title: "Restore positive indexing",
        text:
          "If xi is positively indexed on P, then x̃i=conj(x−i) is positively indexed on C(P). The minus sign corrects the reversed cyclic order.",
      },
      {
        title: "Track half-open sides",
        text:
          "The right-half-open side (xj−1,xj] becomes a left-half-open side after conjugation. A contact at a shared endpoint can therefore be assigned to the other incident side even though the underlying segment and incidence are preserved.",
      },
    ],
    takeaway:
      "Orientation reversal conjugates λ and reverses cyclic order; the included and excluded endpoints of every half-open side must be checked explicitly.",
  },
  9: {
    number: 9,
    figure: "origin-and-order",
    intuition:
      "A rotating contraction cannot preserve a nondegenerate polygon confined to one side of the origin: some rotated iterate must eventually enter the opposite open half-plane.",
    details: [
      {
        title: "First put 0 in P",
        text:
          "For z∈P, invariance gives λ^kz∈P. Because |λ|<1, these iterates converge to 0; compactness of P gives 0∈P.",
      },
      {
        title: "Exclude a segment",
        text:
          "If P were one-dimensional, its line through 0 would have to be preserved by the nonreal rotation e^{iθ}. A real line is preserved only for angles 0 or π, contrary to ellipticity.",
      },
      {
        title: "Assume 0 is on the boundary",
        text:
          "A supporting functional ℓ can be chosen with ℓ≥0 on P and ℓ(z)>0 for some z∈P. Invariance gives λ^kz=ρ^ke^{ikθ}z∈P, hence ρ^kℓ(e^{ikθ}z)≥0. Because ρ^k>0, this forces ℓ(e^{ikθ}z)≥0 for every k.",
      },
      {
        title: "Use the rotation orbit",
        text:
          "For finite order, the orbit sums to zero, so nonnegative functional values cannot include a positive one. For infinite order, the orbit is dense on the circle and eventually enters the half-plane ℓ<0. Both cases contradict the support inequality.",
      },
    ],
    takeaway:
      "The origin is not merely fixed by the contraction: it lies strictly inside every nontrivial invariant polygon.",
  },
  10: {
    number: 10,
    intuition:
      "Once an interior point is fixed, a convex boundary can be read by angle. This turns geometric boundary order into determinant signs and later into cyclic combinatorics.",
    details: [
      {
        title: "Choose an interior centre",
        text:
          "For three noncollinear boundary points a,b,c, choose o inside their triangle. Convexity places o in the interior of the ambient convex set K.",
      },
      {
        title: "Project radially",
        text:
          "Every ray from o meets ∂K exactly once. The map z↦(z−o)/|z−o| is therefore a homeomorphism from the boundary to the unit circle.",
      },
      {
        title: "Compare the two orders",
        text:
          "Every ray from o meets the boundary of K exactly once. Traversing the positively oriented boundary once therefore makes the direction z−o traverse the unit circle once counterclockwise. The radial map has degree +1 and preserves cyclic order. The rays to a,b,c are counterclockwise exactly when det(b−a,c−a)>0.",
      },
      {
        title: "Restrict to another polygon",
        text:
          "Applying the same determinant test to a strict polygon Q whose vertices lie on ∂K shows that Q inherits precisely the boundary order of K. No three vertices of Q are collinear: the middle point of three collinear boundary points would not be extreme.",
      },
    ],
    takeaway:
      "Positive determinant, positive boundary order, and counterclockwise ray order are three descriptions of the same orientation.",
  },
  66: {
    number: 66,
    intuition:
      "Strict separation converts the visual statement “o lies outside K” into one linear inequality. The closest point of K supplies the separating direction.",
    details: [
      {
        title: "Choose the nearest point",
        text:
          "Compactness gives y∈K minimising |o−y|. Put v=o−y, which is nonzero because o∉K.",
      },
      {
        title: "Move inside K",
        text:
          "For x∈K, the segment y+t(x−y) remains in K. The squared distance from o to this segment has a minimum at t=0.",
      },
      {
        title: "Differentiate at the minimum",
        text:
          "The one-sided derivative gives ⟨v,x−y⟩≤0. Hence the functional ℓ(z)=⟨v,z⟩ satisfies ℓ(x)≤ℓ(y) for every x∈K.",
      },
      {
        title: "Make the inequality strict",
        text:
          "Since ℓ(o)−ℓ(y)=|v|²>0, one obtains ℓ(x)<ℓ(o) throughout K.",
      },
    ],
    takeaway:
      "The vector from the nearest point y to the exterior point o is normal to a supporting hyperplane that strictly separates them.",
  },
} as const;
