export type TopicIICommentary = {
  intuition: string;
  architecture: readonly string[];
  takeaway: string;
  figure?: "triple-sign" | "normal-fan" | "polar-saturation";
};

export const topicIICommentary: Readonly<
  Partial<Record<number, TopicIICommentary>>
> = {
  11: {
    figure: "triple-sign",
    intuition:
      "Convexity can be certified without first drawing the convex hull. If every cyclically ordered triple has the same nonzero orientation, then each consecutive segment sees every remaining point strictly on its inner side and must therefore be an exposed boundary edge.",
    architecture: [
      "Necessity is imported from Lemma 2.6: positive boundary order and positive determinant describe the same orientation.",
      "For sufficiency, fix one consecutive pair zᵢ,zᵢ₊₁. The triple inequalities put every other point strictly in the same open half-plane.",
      "That half-plane statement exposes [zᵢ,zᵢ₊₁]. Repeating it for every i proves that all displayed points, and no hidden ones, are the vertices in the displayed order.",
    ],
    takeaway:
      "A finite list of strict determinant signs is a complete certificate of strict convex position.",
  },
  12: {
    intuition:
      "Later deformations must preserve several kinds of geometry at once: strict convexity, points remaining inside specified open sides, and test points staying strictly inside selected supporting half-planes. Each condition is open; because only finitely many occur, one small interval preserves all of them together.",
    architecture: [
      "Write strict convexity as the finitely many positive determinants supplied by Lemma 2.7.",
      "Write membership in a moving open segment as 0<αₐ(τ)<1 using one continuous affine coordinate.",
      "Write every remaining requirement as positivity of a continuous determinant, then intersect the finitely many neighbourhoods on which those quantities stay positive.",
    ],
    takeaway:
      "The lemma is the common-neighbourhood device that prevents a later local perturbation from breaking an unlisted global condition.",
  },
  14: {
    intuition:
      "Because the origin is inside the polygon, every positive side keeps 0 strictly on its left. The determinant of two consecutive radius vectors is therefore positive, so their angular gap is strictly between 0 and π. Along the side, the same determinant is the numerator of the derivative of polar angle.",
    architecture: [
      "Use the open left-half-plane description of the interior at the point 0.",
      "Translate the resulting determinant sign into a lifted angular gap.",
      "Parametrise one side linearly and differentiate its argument; the numerator simplifies to the same positive determinant.",
    ],
    takeaway:
      "Positive boundary motion is also strictly increasing polar motion, side by side.",
  },
  15: {
    figure: "normal-fan",
    intuition:
      "Containment of one polygon in another is equivalent to a finite list of support inequalities. For a fixed normal fan, rotating a side normal backwards lands between two adjacent fan rays, so its support value is a nonnegative linear combination of two support numbers. The matrix BΦ(θ) stores exactly those combinations.",
    architecture: [
      "In one fan cone, the two adjacent support lines meet at a vertex that maximises every nonnegative combination of their normals.",
      "Apply that observation to e⁻ⁱᶿuᵢ to compute hP(e⁻ⁱᶿuᵢ)=(Bh)ᵢ.",
      "Use hλP(uᵢ)=ρhP(e⁻ⁱᶿuᵢ). Checking the side normals is sufficient because their half-planes define P.",
      "The same row decompositions give Bu=e⁻ⁱᶿu. Strictness for a fixed fan is a finite set of open inequalities in h, so it persists under small support perturbations.",
    ],
    takeaway:
      "The geometric inclusion λP⊆P becomes the coordinatewise matrix inequality ρBh≤h.",
  },
  65: {
    intuition:
      "The saturation argument needs Perron vectors without assuming that its nonnegative transfer matrix is irreducible. This appendix lemma supplies exactly that strength and proves it from finite-dimensional compactness and approximation by strictly positive matrices.",
    architecture: [
      "A positive comparison vector x turns Bx≤cx into an operator-norm bound, hence spr(B)≤c.",
      "For a strictly positive matrix, minimise maxᵢ(Ax)ᵢ/xᵢ on the open probability simplex; the minimiser cannot approach the boundary and must satisfy Ax=Mx.",
      "Approximate a general B≥0 by B+ε11ᵀ. A resolvent/Neumann-series comparison proves convergence of the Perron roots, while compactness of the simplex gives limiting right and left eigenvectors.",
    ],
    takeaway:
      "Reducibility may create zero coordinates, but it does not destroy nonnegative left and right eigenvectors at the spectral radius.",
  },
  67: {
    intuition:
      "Polarity turns every vertex into one supporting side and every side into one vertex. It is the mechanism that converts the already-proved side-touching statement into vertex touching without repeating the spectral argument.",
    architecture: [
      "Inner and outer disks around K give reciprocal outer and inner disks around K°, proving compactness and nonempty interior.",
      "The adjoint identity transports invariance from K to K°.",
      "Each vertex inequality is shown irredundant by a strict supporting functional; therefore it contributes one nondegenerate polar side.",
      "Equality ⟨y,x⟩=1 cannot occur with x in the interior, since a short step from x in the direction y would violate the polar inequality.",
    ],
    takeaway:
      "In the polar polygon, side contact is the dual statement of vertex contact in the original polygon.",
  },
  16: {
    figure: "polar-saturation",
    intuition:
      "Radial criticality leaves no unused support inequality. If the transfer inequality had spectral slack, the support vector could be perturbed to admit a slightly larger radial map. A left Perron vector then detects exactly which sides could still have slack; any missing coordinates would themselves define a smaller invariant polygon, contradicting minimal complexity.",
    architecture: [
      "Complexity first forces R to have exactly N vertices; Topic I supplies 0∈int(R), so the normal-fan description applies.",
      "If spr(ρB)<1, a Neumann-series vector perturbs the support numbers while preserving strictness and creates an invariant N-gon for (1+η)T. Criticality rules this out, so spr(ρB)=1.",
      "A nonnegative left Perron vector w gives complementarity. Its positive support S satisfies Σᵢ∈S wᵢuᵢ=0.",
      "If S were proper, its normals positively span the plane and their retained half-planes form a compact invariant polygon with at most |S|<N vertices. This contradicts νpoly(T)=N, so w>0 and every support slack vanishes.",
      "Vanishing slack makes every side meet TR. Apply the same side argument to the polar under T*; the vertex–side duality of Lemma A.3 then places every vertex of TR on ∂R.",
    ],
    takeaway:
      "Criticality forces complete contact, and the argument survives every later admissible replacement polygon.",
  },
} as const;
