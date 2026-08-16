export type TopicINewVocabulary = {
  term: string;
  definition: string;
};

export type TopicIResultGuide = {
  manuscriptLabel: string;
  newVocabulary: readonly TopicINewVocabulary[];
};

export const topicIManuscriptLabels: Readonly<Record<number, string>> = {
  1: "Definition 1.1",
  2: "Definition 1.2",
  5: "Proposition 2.1",
  6: "Proposition 2.2",
  7: "Proposition 2.3",
  8: "Lemma 2.4",
  9: "Lemma 2.5",
  10: "Lemma 2.6",
  66: "Lemma A.2",
} as const;

export const topicIResultGuides: Readonly<
  Record<number, TopicIResultGuide>
> = {
  5: {
    manuscriptLabel: "Proposition 2.1",
    newVocabulary: [
      {
        term: "Complex structure",
        definition:
          "A real-linear map J:V→V satisfying J²=−I. If multiplication by i is defined to mean application of J, then the real plane V becomes a one-dimensional complex vector space.",
      },
      {
        term: "Orientation induced by J",
        definition:
          "The orientation in which every ordered basis (v,Jv), with v≠0, is positive. Replacing J by −J reverses this orientation.",
      },
      {
        term: "Adapted inner product",
        definition:
          "An inner product for which J is an isometry. In that geometry, T=ρ(cosθ I+sinθ J) is literally a rotation through θ followed by a contraction by ρ.",
      },
    ],
  },
  6: {
    manuscriptLabel: "Proposition 2.2",
    newVocabulary: [],
  },
  7: {
    manuscriptLabel: "Proposition 2.3",
    newVocabulary: [
      {
        term: "A functional exposes a face",
        definition:
          "A nonzero real-linear functional ℓ exposes the face F of a compact convex polygon P when F={x∈P:ℓ(x)=max{ℓ(y):y∈P}}. The illustrated menu immediately below shows the level-line construction and a whole-side example.",
      },
      {
        term: "Clipping",
        definition:
          "Intersecting a polygon with a closed half-plane so that a boundary cap is removed. Applying A before or after this operation gives the same transformed polygon.",
      },
      {
        term: "Covariance",
        definition:
          "A construction is covariant when a change of coordinates transports every object it produces—vertices, sides, faces, contacts, and labels—in a compatible way.",
      },
      {
        term: "The side data in equation (2.3)",
        definition:
          "The set ℰ(P) consists of the oriented sides of P, and succ(e) is the next side. The map χ assigns each vertex v to a side containing Tv. The set I consists of those assigned sides for which Tv lies in the relative interior, while head(e) is the terminal endpoint of e and σ(e)=χ(head(e)) is a cyclic shift of the side labels. Finally, A_ℰ sends each side e of P to the side Ae of AP.",
      },
    ],
  },
  8: {
    manuscriptLabel: "Lemma 2.4",
    newVocabulary: [
      {
        term: "Assignment to right-half-open sides",
        definition:
          "Every image vertex Tv is assigned to a side whose right-half-open segment (tail, head] contains Tv. Reflection changes this segment into one that includes the opposite endpoint, so endpoint assignments must be checked again.",
      },
    ],
  },
  9: {
    manuscriptLabel: "Lemma 2.5",
    newVocabulary: [
      {
        term: "Supporting functional at a boundary point",
        definition:
          "A nonzero real-linear functional ℓ whose maximum or minimum on P is attained at the chosen boundary point. If 0 lies on ∂P, the sign can be chosen so that ℓ≥0 throughout P.",
      },
      {
        term: "Finite and infinite rotation order",
        definition:
          "The rotation e^{iθ} has finite order when some positive power equals 1; otherwise it has infinite order. A finite orbit sums to zero, while an infinite orbit is dense on the unit circle.",
      },
    ],
  },
  10: {
    manuscriptLabel: "Lemma 2.6",
    newVocabulary: [
      {
        term: "Degree +1",
        definition:
          "Every ray from the interior point o meets ∂K exactly once. Traversing ∂K once in its positive orientation therefore makes the direction z−o traverse the unit circle once counterclockwise. Thus the radial map has degree +1 and preserves cyclic order.",
      },
    ],
  },
  66: {
    manuscriptLabel: "Lemma A.2",
    newVocabulary: [
      {
        term: "Strict separation",
        definition:
          "A linear functional ℓ strictly separates o from K when every x∈K satisfies ℓ(x)<ℓ(o). Geometrically, one affine hyperplane lies between the exterior point and the entire compact convex set.",
      },
    ],
  },
} as const;
