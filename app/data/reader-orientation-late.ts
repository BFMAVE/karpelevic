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
    strategy: "Replace a many-root complex equation by one increasing real function on the chosen ray. Keep the geometric turn count to select the intended polynomial branch.",
    payoff: "One continuous candidate radius per interior ray, with endpoint value 1 for n ≥ 4. The order-three negative-ray endpoint remains exceptional.",
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
    strategy: "Draw the normalised factors on their common line, then use their arguments as the one-dimensional variable. Derive the convexity by differentiation, and prove Jensen by summing tangent-line inequalities whose linear terms cancel.",
    payoff: "The radius cannot exceed the candidate. Equality holds precisely when all contact weights βⱼ agree, under the specified product and real phase hypotheses.",
  },
  10: {
    imports: [
      { term: "Stochastic rows as convex averages", from: 1, anchor: "eq:polygon-criterion", use: "Outgoing transition weights must be nonnegative and sum to one in each row." },
      { term: "Scalar candidate radius", from: 8, anchor: "eq:radial", use: "Its equation supplies positive weights α and β with α + β = 1." },
      { term: "The equality case of convexity", from: 9, anchor: "thm:convex-product", use: "Equal weights are the parameters that must realise the sharp radius on the selected branch." },
      { term: "Determinant expansion", from: null, use: "Group permutation terms by disjoint directed cycles to find the full characteristic polynomial." },
    ],
    definitions: [
      { term: "Weighted transition matrix M", meaning: "An arrow u → v of weight a means Mᵤᵥ = a: u is the row and v is the column. M is distinct from the scalar angle A." },
      { term: "Local and connecting cycles", meaning: "m local q-cycles close with weights βⱼ; complementary weights 1 − βⱼ connect them into one cycle of length s." },
      { term: "Realisation order n₀", meaning: "n₀ = max(mq,s). The final connection skips or inserts vertices to obtain the required length s." },
      { term: "Selected arc parameter β(ϑ)", meaning: "The equal weight chosen at each oriented angle. We prove it decreases strictly from 1 to 0, so each interior weight corresponds to exactly one selected point." },
    ],
    strategy: "Build the rows first and translate the determinant into disjoint cycle choices, including their signs and powers. Then use nonvanishing derivatives to prove that the equal weight traverses the chosen arc once.",
    payoff: "Every candidate point is a stochastic eigenvalue, and each equal weight selects one point on its arc. The full characteristic polynomial distinguishes actual zero eigenvalues from zeros introduced by clearing the Ito equation.",
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
    strategy: "Separate an unchanged Farey interval from a split interval. Use strict Jensen in the first case; in the second, check the sign of a rotated polynomial derivative all along one segment.",
    payoff: "Kₙ₋₁(θ) ≤ Kₙ(θ), with exact equality cases. The bound obtained at an eigenvalue's least realising order can therefore be compared with the required order.",
  },
  12: {
    imports: [
      { term: "Polygon correspondence and radial filling", from: 1, anchor: "eq:polygon-criterion", use: "Invariant polygons translate back to stochastic eigenvalues, and every segment from zero to an attainable point is attainable for n ≥ 2." },
      { term: "Least-order geometric product", from: 7, anchor: "thm:product", use: "Apply the product to a radial maximiser at its own least realising order, when that order is at least four." },
      { term: "Sharp upper bound", from: 9, anchor: "thm:convex-product", use: "The geometric product bounds that maximiser by its own candidate radius." },
      { term: "Attainment", from: 10, anchor: "thm:independent-realization", use: "The order-n candidate is already an eigenvalue, so it is a lower bound for the actual radial maximum." },
      { term: "Independent order comparison", from: 11, anchor: "thm:order-monotonicity", use: "Compare the least-order bound with the order-n candidate without circular reasoning." },
    ],
    definitions: [
      { term: "Actual radial maximum Rₙ(θ)", meaning: "The largest r with re^(iθ) in Θₙ. Compactness ensures the maximum is attained." },
      { term: "Least realising order k", meaning: "The smallest matrix order that can have the selected maximiser as an eigenvalue; k ≤ n." },
      { term: "The exceptional order-three region", meaning: "Θ₃ is the triangle with vertices 1 and the two cubic roots of unity, together with the real segment [−1,−1/2]." },
      { term: "Interior radial gap", meaning: "At a point of radius r<Kₙ(θ), the difference Kₙ(θ)−r is positive. Continuity keeps this gap positive nearby, proving the point is interior." },
    ],
    strategy: "Check the order-three scalar domains and the unit-circle classification, then combine attainment below with the least-order bound above. Radial filling gives the whole region; continuity of the positive radial gap identifies its boundary.",
    payoff: "Rₙ = Kₙ for n ≥ 4: the candidates are exactly the boundary. At order three, the nonreal radius tends to 1/2 near angle π but the negative-ray maximum is 1.",
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
    strategy: "First solve the exact polygon-measurement problem by rescaling an invariant inclusion. Then factor the sine defect so that the small endpoint factor t(1−t) survives the error estimate.",
    payoff: "Dividing the dilation by the order-N boundary radius gives the optimal factor. The worst-angle loss is of order N⁻²; a fixed badly approximable angle has loss of order N⁻³. Endpoint-uniform relative error does not mean every irrational angle has the same rate.",
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
    strategy: "Follow the source example all the way through the paths, product, phase, scalar root, graph, and eigenvector. Compare orders only after checking their distinct Farey endpoints.",
    payoff: "A fully checked eight-state stochastic eigenvalue and a precise connection to the order-seven explorer, with the distinction between assumed polygon contacts and constructed eigenvector coordinates retained.",
  },
};
