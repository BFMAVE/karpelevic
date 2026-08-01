# Topic XIII — Student-perspective review report

- Route: /proof/topic-xiii/
- Manuscript scope: PDF page 71 and pages 85–89.
- Formal inventory: 1 topological lemma, 1 base-case proposition, and 1
  classical theorem.
- Student baseline: one standard linear-algebra course; no specialist
  background.
- Review status: recommendations only; no page changes implemented.

## Independent reading 1

### Where the reader’s understanding holds

- The opening “Three tasks remain” separates topology, the exceptional
  order-three base case, and the final induction before any proof begins.
- Lemma II.9.1
  (/proof/topic-xiii/#karp:lem:continuous-radial-boundary) distinguishes an
  outer point, a nonzero shorter point, and the origin instead of identifying
  radial maxima with the topological boundary by assertion.
- Proposition II.9.2 (/proof/topic-xiii/#karp:prop:small-orders) derives the
  triangular order-three bound and gives actual realizers for its nonreal
  pieces.
- Theorem II.3.1 (/proof/topic-xiii/#karp:thm:main) makes the new-shell and
  inherited induction branches visibly different and delays the topological
  conclusion until the radial equalities are established.

### Questions and points of friction, in reading order

1. Lemma II.9.1 invokes a sufficiently small Euclidean ball about a nonzero
   point without naming the simultaneous continuity estimates for modulus and
   argument away from zero.
2. Proposition II.9.2 moves from attained triangle sides to the filled triangle
   without explicitly using
   \(0=(1+\omega+\overline\omega)/3\) and convexity.
3. In the inherited branch of Theorem II.3.1, “an open order-\(n\) ray cannot
   be an inherited Farey endpoint” hides the simpler fact
   \(F_{n-1}\subset F_n\).
4. The endpoint realization uses an order-\(q\) cyclic permutation without
   showing in one line why its eigenvalues are the \(q\)-th roots of unity.

## Independent reading 2

### Where the reader’s understanding holds

- This reading also found Lemma II.9.1 one of the clearest results in the
  reader: angular room, radial room, and the positive minimum at the origin do
  genuinely different jobs.
- The order-three proposition was praised for deriving both its upper bound and
  its realizations rather than treating the base case as folklore.
- The final theorem checks Farey endpoint rays before invoking continuity and
  gives a traceable squeeze in both the new-shell and inherited branches.

### Questions and points of friction, in reading order

1. This reader independently wanted the small-ball step in Lemma II.9.1 to
   display both the argument and modulus estimates.
2. Proposition II.9.2 refers to equation (II.2.2), but Topic IX supplies no
   matching visible number or permalink. The labeling convention can be
   inferred, but the navigation address cannot be used.
3. The ray-uniqueness calculation on the chord and vertical pieces differentiates
   \(\arg z(t)\) without stating or proving
   \(\frac d{dt}\arg z(t)=\operatorname{Im}(z'(t)/z(t))\).
4. This reading independently found the triangle-filling sentence incomplete
   without the fact that the triangle is convex and contains zero.
5. The terminal quadratic-root discussion would be easier to verify if it
   separated the nonnegative- and negative-discriminant regimes at
   \(\alpha=1/4\).
6. It found the inherited-endpoint sentence opaque and wanted the full-circle
   continuity step linked explicitly to Proposition II.2.4 for \(n\ge4\).

## Cross-reading synthesis

Both readers found the final architecture sound and independently identified
the missing geometric sentence that turns attained order-three sides into the
filled triangular region. Reading 2 additionally found a central unstated
derivative identity; because that identity proves one-ray/one-point
parametrization, it is a proof dependency rather than optional enrichment. The
triangle-filling sentence is retained as Advised because the reader can
reconstruct it immediately from convexity and the displayed centroid identity;
it does not block continuation. The broken equation reference is likewise
Advised: it is a genuine navigation defect, but the convention remains
recoverable from the surrounding prose.

### Needed

1. **Proposition II.9.2,
   /proof/topic-xiii/#karp:prop:small-orders — derivative of argument.** Before
   the two ray-uniqueness calculations, derive
   \(\frac d{dt}\arg z(t)=\operatorname{Im}(z'(t)/z(t))\) for a differentiable
   zero-free path, then apply it separately to the chord and vertical
   parametrizations.

### Advised

1. **Lemma II.9.1,
   /proof/topic-xiii/#karp:lem:continuous-radial-boundary — interior ball.**
   Invoke continuity of
   \(w\mapsto(|w|,\arg w)\) near nonzero \(z\), or choose one explicit radius
   ensuring both a nearby argument and a modulus below \(r+\eta\).
2. **Proposition II.9.2,
   /proof/topic-xiii/#karp:prop:small-orders — radial filling of the
   triangle.** State
   \(0=(1+\omega+\overline\omega)/3\), hence zero lies in the attained convex
   triangle, and explain that the union of the radial segments from zero to
   its three attained sides is the whole triangle.
3. **Proposition II.9.2,
   /proof/topic-xiii/#karp:prop:small-orders — inaccessible equation
   reference.** Replace “equation (II.2.2)” with the exact visible Topic IX
   anchor that defines the denominator labeling, or restate the convention in
   one sentence at this point.
4. **Proposition II.9.2,
   /proof/topic-xiii/#karp:prop:small-orders — terminal roots.** Write the two
   quadratic roots and split the explanation into
   \(1-4\alpha\ge0\) and \(1-4\alpha<0\), showing how the real segment and
   nonreal arc arise.
5. **Theorem II.3.1, /proof/topic-xiii/#karp:thm:main — inherited endpoint.**
   Replace the opaque open-ray sentence by the direct observation
   \(F_{n-1}\subset F_n\): an old Farey endpoint remains an endpoint at order
   \(n\), so the present open cell is genuinely inherited between endpoints.
6. **Theorem II.3.1, /proof/topic-xiii/#karp:thm:main — endpoint
   realization.** Verify in one line that the order-\(q\) cyclic permutation
   has characteristic polynomial \(t^q-1\), or display its root-of-unity
   eigenvector.
7. **Theorem II.3.1, /proof/topic-xiii/#karp:thm:main — full-circle
   continuity.** Say explicitly that Proposition II.2.4 supplies the one-sided
   approach to the common value at \(-\pi\) and \(\pi\) for every \(n\ge4\).
8. **Purpose lines on Proposition II.9.2 and Theorem II.3.1.** Use grammatical
   finite verbs (“Proves” and “Identifies”) so the cards read as descriptions
   rather than commands.

### Would be nice to add

1. **Before Theorem II.3.1, /proof/topic-xiii/#karp:thm:main.** Add a compact
   dependency diagram whose arrows are labelled attainment, new-shell equality,
   order embedding, and candidate nesting.
2. **Proposition II.9.2,
   /proof/topic-xiii/#karp:prop:small-orders.** Display the \(3\times3\)
   terminal sparse matrix beside its factorized characteristic polynomial.
3. **End of Topic XIII.** Add a small polar plot of \(R_3\) distinguishing the
   chord branch, vertical branch, and negative-real segment.

## Recommendation count

- Needed: 1
- Advised: 8
- Would be nice to add: 3

## Author decisions

Pending.
