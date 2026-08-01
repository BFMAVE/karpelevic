# Topic VIII — Student-perspective review report

- Route: /proof/topic-viii/
- Manuscript scope: PDF pages 71–73; Part II, Section II.4.
- Formal inventory: 1 numbered definition and 6 results.
- Student baseline: one standard linear-algebra course; no specialist
  background.
- Review status: recommendations only; no page changes implemented.

## Independent reading 1

### Where the reader’s understanding holds

- The transition from the geometric language of Part I back to row-stochastic
  matrices is well staged.
- Proposition II.4.1’s maximum-coordinate disk bound is pitched exactly at the
  assumed level.
- Plate VIII.1 and Theorem II.4.2 make the eigenvector-to-polygon dictionary
  memorable in both directions.
- Corollary II.4.3 explicitly writes the containment chain for radial filling,
  and Lemma II.4.5 restores the otherwise easily missed positive factor
  \(\rho^k\).
- Plate VIII.2 clearly separates order-newness from outward radial maximality.

### Questions and points of friction, in reading order

1. Proposition II.4.1 (/proof/topic-viii/#karp:prop:compact) uses projection of
   a compact eigenpair set. The background facts are stated, but a reader can
   still lose track of which variables are matrices and which are eigenvalues.
2. Corollary II.4.3 (/proof/topic-viii/#karp:cor:radial-filling) says the
   regular root-of-unity polygon contains zero without printing the equal-weight
   average \(1+\lambda+\cdots+\lambda^{k-1}=0\).
3. Lemma II.4.5 (/proof/topic-viii/#karp:lem:origin-interior) starts its boundary
   contradiction by choosing a supporting functional, but its existence is
   neither proved there nor linked to an exact earlier result.
4. Below equation (II.4.3) (/proof/topic-viii/#karp:eq:new-shell), the prose
   assigns the roles of the displayed clauses backwards: the first displayed
   clause contains new-shell membership, while \(0<|\lambda|<1\) is the second.
5. Definition II.4.6 does not recall what \(\operatorname{Ext}(P)\) means even
   though the surrounding section presents itself as a self-contained
   re-entry point.

## Independent reading 2

### Where the reader’s understanding holds

- This reading found Topic VIII a welcome reset after the technical return
  dynamics.
- The two directions of Theorem II.4.2 are distinct and easy to locate.
- Proposition II.4.7 gives a particularly clear four-step bridge from a
  new-shell stochastic eigenvalue to an \(N\)-critical elliptic contraction.
- The page keeps later Farey, Jensen, realization, and nesting arguments out of
  the current dependency chain.

### Questions and points of friction, in reading order

1. The opening defines \(R_n(\theta)\) for every positive \(n\), but for
   \(n=1\) and a nonzero ray the set being maximized is empty. For \(n\ge2\),
   nonemptiness of every ray also needs an explicit stochastic matrix with
   eigenvalue zero before compactness can provide a maximum.
2. Theorem II.4.2 (/proof/topic-viii/#karp:thm:polygon-criterion) pads by
   absorbing states without displaying the block matrix and padded eigenvector.
3. The segment case in Corollary II.4.3, and similarly in Proposition II.4.4,
   moves too quickly from inclusion to preservation of a real line.
4. This reader independently identified supporting-functional existence as a
   missing dependency and noted that the contract does not deep-link Topic I’s
   Lemma 2.5 even though the result is repeated here.
5. The “Exact source shelf” omits some sources named on the result cards,
   including matrix-analysis and convexity sources.
6. Several missing spaces occur in the opening mathematical prose.

## Cross-reading synthesis

Both readings find the stochastic–polygon bridge pedagogically successful.
Three points qualify as Needed: one ill-defined ray maximum, one materially
reversed explanation, and one convex-geometric existence fact required to
begin a proof. Source completeness, recalled notation, short omitted algebra,
and typography are kept at Advised under the conservative rubric.

### Needed

1. **Opening “From stochastic matrices to a radial region,”
   /proof/topic-viii/ — domain of \(R_n(\theta)\).** As written, the maximum is
   undefined for \(n=1\) away from the positive real ray. Restrict the raywise
   definition to \(n\ge2\), exhibit for example a rank-one row-stochastic
   matrix with eigenvalue zero, and then use compactness to justify attainment
   of the maximum on every ray.
2. **New-shell explanation, /proof/topic-viii/#karp:eq:new-shell — reversed
   clauses.** The prose currently teaches the two displayed conditions in the
   wrong order. Say that
   \(\lambda=R_N(\theta)e^{i\theta}\in\Theta_N\setminus\Theta_{N-1}\) expresses
   order-newness and that \(0<|\lambda|<1\) excludes the origin and unit-circle
   cases.
3. **Lemma II.4.5, /proof/topic-viii/#karp:lem:origin-interior — supporting
   functional at a boundary point.** This existence theorem is not part of a
   standard linear-algebra course and the proof cannot start without it. Add a
   two-sentence polygonal supporting-line argument, or import the exact Topic I
   result with a direct anchor; also link Topic I’s Lemma 2.5 explicitly in the
   dependency contract.

### Advised

1. **Proposition II.4.1, /proof/topic-viii/#karp:prop:compact — compact
   eigenpair set.** Write the set
   \(\{(A,\lambda):A\in\mathcal S_n,\ |\lambda|\le1,\det(\lambda I-A)=0\}\)
   explicitly and say that the determinant is continuous in the real and
   imaginary parts of \(\lambda\) before projecting to the second coordinate.
2. **Theorem II.4.2, /proof/topic-viii/#karp:thm:polygon-criterion — absorbing
   padding.** Display
   \((A\oplus I_{n-m})(x,0)=(\lambda x,0)=\lambda(x,0)\). This removes the
   student’s reasonable concern that the identity block changes the eigenpair.
3. **Corollary II.4.3, /proof/topic-viii/#karp:cor:radial-filling — zero in the
   regular orbit polygon.** Add the geometric-series identity and explain that
   zero is the equal-weight average of the orbit points.
4. **Corollary II.4.3 and Proposition II.4.4,
   /proof/topic-viii/#karp:cor:radial-filling and
   /proof/topic-viii/#karp:prop:unit-circle — segment case.** Explain that
   inclusion of unit-scaled equal-length segments is equality, hence their
   supporting real line is invariant; a unit complex multiplier preserving a
   real line is then \(\pm1\).
5. **Definition II.4.6,
   /proof/topic-viii/#karp:def:polygonal-criticality — extreme points.** Recall
   that \(\operatorname{Ext}(P)\) is the set of vertices not expressible as a
   nontrivial convex combination of other points of \(P\).
6. **Exact source shelf, /proof/topic-viii/#topic-viii-exact-sources — source
   completeness.** Add every source actually named on the result cards, with
   precise locations where possible, or rename the section so it does not
   promise a complete exact shelf.
7. **Opening and Section VIII.A, /proof/topic-viii/ — typography.** Repair the
   missing spaces around the rendered \(n\times n\) and \(\Theta_n\) joins and
   audit similar math/prose boundaries.

### Would be nice to add

1. **Proposition II.4.1, /proof/topic-viii/#karp:prop:compact.** Add a small
   projection diagram separating the matrix variable from the eigenvalue
   variable.
2. **Theorem II.4.2, /proof/topic-viii/#karp:thm:polygon-criterion.** Give one
   explicit \(3\times3\) stochastic matrix and plot the coordinates of a
   nonreal eigenvector beside Plate VIII.1.
3. **Corollary II.4.3, /proof/topic-viii/#karp:cor:radial-filling.** Add a tiny
   orbit-polygon diagram showing zero as the centroid of the roots of unity.
4. **Proposition II.4.7,
   /proof/topic-viii/#karp:prop:new-shell-critical.** Remind the reader that an
   outward scale with \(t|\lambda|>1\) is already excluded by the disk bound.

## Recommendation count

- Needed: 3
- Advised: 7
- Would be nice to add: 4

## Author decisions

Pending.
