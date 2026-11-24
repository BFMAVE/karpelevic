import type { TopicOrientation } from "./reader-orientation";

export const lateOrientations: Record<number, TopicOrientation> = {
  8: {
    imports: [
      { term: "Cyclic product and exact real argument identity", from: 7, anchor: "thm:product", use: "The geometry has fixed both the product and its actual turn count at the least realising order." },
      { term: "Farey adjacency", from: 7, use: "Consecutive p/q < r/s satisfy rq − ps = 1 and q + s > n; their interval has length 1/(qs)." },
      { term: "Intermediate value theorem and monotonicity", from: null, use: "A continuous increasing function crossing a target value has exactly one solution." },
    ],
    definitions: [
      { term: "Original angle θ and oriented coordinate y", meaning: "The radius Kₙ(θ) always refers to the original upper ray. Use y = θ/(2π), or 1 − θ/(2π) after conjugation, so the smaller denominator q is on the left." },
      { term: "Factor count m and angle budget A, B", meaning: "m = floor(n/q), A = 2π(qy − p), B = 2π(r − sy)/m. Both angles are positive inside the interval." },
      { term: "Interval position t", meaning: "t = (y − p/q)/(r/s − p/q), between 0 and 1; A = 2πt/s and B = 2π(1 − t)/(mq)." },
      { term: "Candidate radius Kₙ(θ)", meaning: "The unique ρ in (0,1) solving ρ^(s/m) sin A + ρ^q sin B = sin(A+B). Its boundary interpretation will be proved in Topics IX–XII." },
    ],
    strategy: "Fix the angle of the ray. The turn count gives an angle for each equal factor, and only the radius remains to be found. On the relevant interval the left side of its real equation increases with the radius, so there is only one possible solution.",
    payoff: "We have one candidate radius on each ray between neighbouring Farey directions. For n ≥ 4 it tends to 1 at each end. At order three the ray along the negative real axis needs a separate calculation.",
  },
  9: {
    imports: [
      { term: "Product together with its real phase", from: 7, anchor: "eq:product-phase", use: "The product fixes a sum of logarithmic sizes; the real phase fixes the average factor argument." },
      { term: "Candidate scalar root", from: 8, anchor: "def:candidate", use: "An inequality for the same increasing scalar function becomes an upper bound on the radius." },
      { term: "Derivatives and the fundamental theorem of calculus", from: null, use: "A strictly increasing derivative puts the graph above its tangent. Summing this inequality proves the finite form of Jensen needed here." },
    ],
    definitions: [
      { term: "Normalised factor gⱼ", meaning: "gⱼ = (w − βⱼ)/(1 − βⱼ), with w = z^q = a + ib and b > 0. Normalisation preserves its argument." },
      { term: "The common line and its angular size", meaning: "c = (1 − a)/b; every factor obeys Re gⱼ + c Im gⱼ = 1. Writing its angle as u gives |gⱼ| = 1/(cos u + c sin u)." },
      { term: "Logarithmic size F(u)", meaning: "F(u) = −log(cos u + c sin u) on 0 < u < M, where M = Arg(w − 1). Its second derivative is at least 1." },
      { term: "Average argument ū", meaning: "ū = (u₁+⋯+uₘ)/m. The real phase fixes ū=A+B; the tangent-line proof shows F(ū)≤(F(u₁)+⋯+F(uₘ))/m." },
    ],
    strategy: "As the weight varies, a normalised factor moves on a line. Use its angle to locate it on that line and express the logarithm of its length in terms of the angle. The graph lies above its tangent at the mean angle. Adding the tangent bounds makes the terms linear in the angle differences cancel.",
    payoff: "For factors satisfying the return product and its angle sum, the radius is at most the candidate radius. To reach it, every contact has to use the same weight.",
  },
  10: {
    imports: [
      { term: "Stochastic rows as convex averages", from: 1, anchor: "eq:polygon-criterion", use: "Choose a nonnegative weight for each outgoing edge so that the weights from each state sum to one." },
      { term: "Scalar candidate radius", from: 8, anchor: "eq:radial", use: "Its equation supplies positive weights α and β with α + β = 1." },
      { term: "The equality case of convexity", from: 9, anchor: "thm:convex-product", use: "Equality in the convexity bound tells us to give each branching row the same contact weight." },
      { term: "Determinant expansion", from: null, use: "Group permutation terms by disjoint directed cycles to find the full characteristic polynomial." },
    ],
    definitions: [
      { term: "Weighted transition matrix M", meaning: "An arrow u → v of weight a means Mᵤᵥ = a: u is the row and v is the column. M is distinct from the scalar angle A." },
      { term: "Local and connecting cycles", meaning: "m local q-cycles close with weights βⱼ; complementary weights 1 − βⱼ connect them into one cycle of length s." },
      { term: "Realisation order n₀", meaning: "n₀ = max(mq,s). The final connection skips or inserts vertices to obtain the required length s." },
      { term: "Selected arc parameter β(ϑ)", meaning: "The equal weight chosen at each oriented angle. We prove it decreases strictly from 1 to 0, so each interior weight corresponds to exactly one selected point." },
    ],
    strategy: "Draw one arrow for each positive entry of the proposed matrix. To find the characteristic polynomial of the matrix M, expand det(tI − M). The arrows in each nonzero term form disjoint cycles once the unused diagonal factors have been set aside. Once the matrix gives the candidate eigenvalue, differentiating the equation for that eigenvalue tells us how the point moves as its common weight changes.",
    payoff: "Every candidate point is attained. Moving the common weight from one endpoint to the other takes us once along the selected arc. Reading the characteristic polynomial also tells us when zero itself is an eigenvalue.",
  },
  11: {
    imports: [
      { term: "Candidate scalar equations", from: 8, anchor: "def:candidate", use: "Comparison is made directly between their unique roots, without assuming they already describe the boundary." },
      { term: "Strict convexity for unequal weights", from: 9, anchor: "thm:convex-product", use: "Appending a zero weight preserves the product but makes the extended parameter list unequal, forcing a strict comparison." },
      { term: "Equal-weight product at a candidate", from: 10, anchor: "eq:factor-resolution", use: "It is the starting product to which the zero-weight factor can be appended." },
      { term: "Fundamental theorem of calculus along a segment", from: null, use: "Apply ordinary real-variable calculus to the real and imaginary parts of a complex polynomial." },
    ],
    definitions: [
      { term: "Original radius and reflected coordinate", meaning: "Set ρ = Kₙ₋₁(θ) on the original upper ray first. Use x=θ/(2π), or the distinct coordinate y=1−x after reflection, in the scalar calculations." },
      { term: "Mediant ξ", meaning: "Between a/b and c/d, ξ = (a+c)/(b+d). A new order-n fraction appears in an old interval exactly when b+d=n." },
      { term: "Scalar residual", meaning: "The left side of the new scalar equation minus its right side. A negative residual at the old radius places the new root farther out." },
    ],
    strategy: "When we add one to the order, an old Farey interval either stays intact or acquires a new fraction. On an intact interval we compare the two scalar equations by convexity. On a split interval we follow the child equation along a segment and determine the sign of its change.",
    payoff: "The candidate radius at order n is at least the radius at order n − 1 on the rays covered by the comparison. Repeating this at successive orders lets us use a bound proved at an eigenvalue’s smallest order.",
  },
  12: {
    imports: [
      { term: "Polygon correspondence and radial filling", from: 1, anchor: "eq:polygon-criterion", use: "Invariant polygons translate back to stochastic eigenvalues, and every segment from zero to an attainable point is attainable for n ≥ 2." },
      { term: "Least-order geometric product", from: 7, anchor: "thm:product", use: "Use the product equation for the farthest eigenvalue on the ray at its smallest realising order, when that order is at least four." },
      { term: "Sharp upper bound", from: 9, anchor: "thm:convex-product", use: "The geometric product bounds the modulus of this eigenvalue by the candidate radius at its smallest order." },
      { term: "Attainment", from: 10, anchor: "thm:independent-realization", use: "The order-n candidate is already an eigenvalue, so it is a lower bound for the actual radial maximum." },
      { term: "Independent order comparison", from: 11, anchor: "thm:order-monotonicity", use: "Compare the least-order bound with the order-n candidate without circular reasoning." },
    ],
    definitions: [
      { term: "Actual radial maximum Rₙ(θ)", meaning: "The largest r with re^(iθ) in Θₙ. Compactness ensures the maximum is attained." },
      { term: "Least realising order k", meaning: "The smallest order of a matrix having the farthest point on this ray as an eigenvalue. It satisfies k ≤ n." },
      { term: "The exceptional order-three region", meaning: "Θ₃ is the triangle with vertices 1 and the two cubic roots of unity, together with the real segment [−1,−1/2]." },
      { term: "Interior radial gap", meaning: "At a point of radius r<Kₙ(θ), the difference Kₙ(θ)−r is positive. Continuity keeps this gap positive nearby, proving the point is interior." },
    ],
    strategy: "Start at the farthest attainable point on a ray and use the smallest matrix that realises it. Geometry bounds its radius at that order, and the comparison between orders gives a bound at n. The matrix from Topic X reaches that bound. Radial filling then gives every point between it and zero.",
    payoff: "For n ≥ 4 the actual radius Rₙ equals the proposed radius Kₙ. At order three the nonreal boundary approaches −1/2 as the angle approaches π, although the real eigenvalue −1 is attainable.",
  },
  13: {
    imports: [
      { term: "Invariant-polygon correspondence", from: 1, anchor: "eq:polygon-criterion", use: "A contraction inclusion becomes a stochastic eigenvalue condition after dividing by its proposed factor." },
      { term: "Completed boundary theorem", from: 12, anchor: "thm:karpelevic", use: "Kₙ is now the actual maximum radius, so it can give an exact optimum for polygonal measurement." },
      { term: "Farey angle budget", from: 8, anchor: "eq:angle-budget", use: "A = 2πt/s and B = 2π(1−t)/(mq) keep endpoint distance visible in the asymptotic estimate." },
      { term: "Mean-value theorem and sine estimates", from: null, use: "Estimate the scalar equation's defect at radius one and divide by its derivative." },
    ],
    definitions: [
      { term: "Polygon gauge Vₚ", meaning: "Vₚ(x) is the least scale a with x in aP. An asymmetric polygon can give Vₚ(−x) ≠ Vₚ(x), so the gauge need not be a norm." },
      { term: "Optimal factor for vertex budget N", meaning: "The smallest containment factor for the rotation-dilation among polygons with at most N vertices and zero in their interior; N is at least four." },
      { term: "Badly approximable angle fraction", meaning: "An irrational x for which |x−a/b| ≥ cₓ/b² for all rationals, for some fixed cₓ > 0." },
      { term: "Uniform relative asymptotic", meaning: "The error divided by the positive leading gap is O(N⁻²), with one constant for all open Farey intervals and all interior positions t." },
      { term: "Positive leading gap at order N", meaning: "The displayed Farey expression without its final error factor. Its relative error is bounded by one constant divided by N squared, for every interval and interior position." },
    ],
    strategy: "By what factor do we have to scale P to contain its rotated and dilated image? The boundary theorem gives the best scale for a fixed number of vertices. For large N we estimate the loss from the unit circle, keeping a factor that tends to zero at either endpoint of a Farey interval.",
    payoff: "The optimal dilation is the given multiplier’s modulus divided by the order-N boundary radius. The largest radial loss over all angles has order N⁻². At a fixed angle whose fraction of a turn is badly approximable it has order N⁻³.",
  },
  14: {
    imports: [
      { term: "First-return arithmetic", from: 5, anchor: "lem:suspension", use: "The shift κ = 3 modulo eight determines a three-step return and a five-step return." },
      { term: "Product and real winding", from: 7, anchor: "thm:product", use: "Multiply the return relations and add their continued angles; verify both resulting identities." },
      { term: "Scalar radius", from: 8, anchor: "eq:radial", use: "At θ = 5π/7, the eight-state equation simplifies to ρ⁴ + ρ³ = 2cos(π/7)." },
      { term: "Equality weights and stochastic graph", from: 10, anchor: "thm:independent-realization", use: "Use the equal-weight construction and check an eigenvector against every transition row, rather than relying on a plotted point." },
      { term: "Farey refinement", from: 11, anchor: "lem:positive-mediant", use: "Insertion of 3/8 explains why the order-eight radius exceeds the order-seven radius at the same angle." },
    ],
    definitions: [
      { term: "Eight-state source data", meaning: "The interval is (1/3,3/8), with q=3, s=8, m=2, and e=2." },
      { term: "Seven-state comparison data", meaning: "At the same angle, the interval is (1/3,2/5), with q=3, s=5, m=2, and e=−1. The two orders have different equations." },
      { term: "Numerical illustration", meaning: "Floating-point radii and plotted polylines illustrate the proved identities; they are not a replacement for the proof or an error bound for the drawn curve." },
    ],
    strategy: "For the ray at 5π/7, first follow the eight vertex labels to find the possible return paths. Then solve the radius equation, build the matrix and use its eigenvector to check where the vertices actually land. The same ray lies between different Farey neighbours at order seven.",
    payoff: "Two rows of the eight-state matrix split their weight between outgoing edges. The eigenvector shows the two corresponding images landing inside sides of the octagon. Its radius is about 0.970613, compared with 0.944301 at order seven.",
  },
};
