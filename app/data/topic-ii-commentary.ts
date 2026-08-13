export type TopicIICommentary = {
  intuition: string;
  architecture: readonly string[];
  figure?: "triple-sign" | "normal-fan" | "polar-saturation";
};

export const topicIICommentary: Readonly<
  Partial<Record<number, TopicIICommentary>>
> = {
  11: {
    figure: "triple-sign",
    intuition:
      "The determinant conditions decide convexity without first drawing the convex hull. If every cyclic triple (zᵢ,zⱼ,zₖ) in the displayed list has the same nonzero orientation, then every remaining point lies in the same open half-plane determined by each consecutive segment. That half-plane is the one containing the polygon’s interior, so the segment is an exposed boundary edge.",
    architecture: [
      "Necessity is imported from Lemma 2.6: positive boundary order and positive determinant describe the same orientation.",
      "For sufficiency, fix one consecutive pair zᵢ,zᵢ₊₁. The triple inequalities put every other point strictly in the same open half-plane.",
      "That half-plane statement exposes [zᵢ,zᵢ₊₁]. Repeating it for every i proves that the listed points are exactly the extreme points, in the displayed order.",
    ],
  },
  14: {
    intuition:
      "Because the origin is inside the polygon, every positive side keeps 0 strictly on its left. The determinant of two consecutive radius vectors is therefore positive, so their angular gap is strictly between 0 and π. Along the side, the same determinant is the numerator of the derivative of polar angle.",
    architecture: [
      "Use the open left-half-plane description of the interior at the point 0.",
      "Translate the resulting determinant sign into a lifted angular gap.",
      "Parametrise one side linearly and differentiate its argument; the numerator simplifies to the same positive determinant.",
    ],
  },
  65: {
    intuition:
      "The saturation argument needs Perron vectors without assuming that its nonnegative transfer matrix is irreducible. This appendix lemma supplies exactly that strength and proves it from finite-dimensional compactness and approximation by strictly positive matrices.",
    architecture: [
      "A positive comparison vector x turns Bx≤cx into an operator-norm bound, hence spr(B)≤c.",
      "For a strictly positive matrix, minimise maxᵢ(Ax)ᵢ/xᵢ on the open probability simplex; the minimiser cannot approach the boundary and must satisfy Ax=Mx.",
      "Approximate a general B≥0 by B+ε11ᵀ. The convergent series for (cI−B)⁻¹ proves convergence of the spectral radii, while compactness of the simplex gives limiting right and left eigenvectors.",
    ],
  },
  67: {
    intuition:
      "Polarity turns every vertex into one supporting side and every side into one vertex. It converts the conclusion that every side intersects the image polygon into the conclusion that every image vertex lies on the boundary, without repeating the spectral argument.",
    architecture: [
      "Inner and outer disks around K give reciprocal outer and inner disks around K°, proving compactness and nonempty interior.",
      "The adjoint identity transports invariance from K to K°.",
      "Each vertex inequality is shown irredundant by a strict supporting functional; therefore it contributes one nondegenerate polar side.",
      "Equality ⟨y,x⟩=1 cannot occur with x in the interior, since a short step from x in the direction y would violate the polar inequality.",
    ],
  },
} as const;
