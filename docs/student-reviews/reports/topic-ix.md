# Topic IX — Student-perspective review report

- Route: /proof/topic-ix/
- Manuscript scope: PDF pages 67–70; Part II, Section II.2.
- Formal inventory: 2 definitions, 3 results, and 1 algorithm.
- Student baseline: one standard linear-algebra course; no specialist
  background.
- Review status: recommendations only; no page changes implemented.

## Independent reading 1

### Where the reader’s understanding holds

- Denominator labels and left-to-right labels are distinguished rather than
  silently conflated.
- The page clearly separates the Ito polynomial family from the particular root
  branch selected on a ray.
- Proposition II.2.3 fixes the fractional-power sheet explicitly instead of
  appealing to an unexplained principal root.
- The order-three first-order endpoint limit and the additional real segment
  are treated openly.
- The extraction procedure separates exact rational arithmetic from numerical
  solution of one scalar equation.

### Questions and points of friction, in reading order

1. Lemma II.2.1 (/proof/topic-ix/#karp:lem:farey-adjacency-expanded) imports the
   quotient-lattice step from Topic V but does not deep-link the precise
   counting lemma.
2. Before Proposition II.2.3, the page claims that determinant one gives
   \(A>0\), \(B>0\), and \(A+B<\pi\), but the formulas and proof never appear.
   These inequalities are then used to determine every sine sign.
3. Proposition II.2.3 (/proof/topic-ix/#karp:prop:scalar-ray) compresses both the
   denominator-orientation choice and the final return from the rooted identity
   to the polynomial.
4. Proposition II.2.4 (/proof/topic-ix/#karp:prop:scalar-continuity) states the
   endpoint constants and the unique exceptional cell without showing the
   short determinant-one arithmetic.
5. Algorithm II.2.6 (/proof/topic-ix/#karp:alg:boundary) lists bare Newton
   iteration beside certified bisection and ends with unresolved future
   references.

## Independent reading 2

### Where the reader’s understanding holds

- The construction has a strong order: Farey arithmetic, polynomial family,
  monotone scalar branch, endpoint closure, and executable extraction.
- Plate IX.2 gives the rooted chord identity a useful geometric reading.
- The page consistently calls the object a candidate and does not silently
  import stochastic realization or outer-boundary status.
- The monotonicity-and-bracketing strategy in Proposition II.2.3 is appropriate
  for the intended reader once all sine signs have actually been established.

### Questions and points of friction, in reading order

1. This reading independently identified the absent angle-range proof as the
   central logical gap.
2. The formal proof of Proposition II.2.3 skips the displayed algebra involving
   \(\omega^d=1\), clearing inverse powers, and conjugation.
3. Proposition II.2.4 names a subsequential radius limit \(r\), colliding with
   the integer numerator in the standing endpoint \(r/s\).
4. The assertions that \(dq=2\) gives exactly the order-three terminal cell and
   that \(s\ge3\) in the other endpoint case are not derived.
5. The algorithm’s raw labels “7,” “karp:sec:nesting,” and
   “karp:sec:completion” cannot be followed as rendered, and unguarded Newton
   iteration is not a certified procedure.
6. Missing spaces appear beside first-use notation in the opening prose.

## Cross-reading synthesis

Both readings agree that the candidate construction is well conceived and that
the missing angle-range proof is the only indispensable mathematical repair.
The algorithm remains executable through bisection, so its Newton wording and
future-reference defects are classified as Advised rather than Needed. The
notation collision, short endpoint arithmetic, and source links are likewise
repairable without changing the core construction.

### Needed

1. **Before Proposition II.2.3,
   /proof/topic-ix/#karp:eq:A-B-absolute and
   /proof/topic-ix/#karp:prop:scalar-ray — angle-range lemma.** The proof needs
   positive sine coefficients and a valid fractional-power sheet, but it never
   derives the required signs. Insert a proved lemma covering both denominator
   orientations, deriving the determinant-one formulas for
   \(|qx-p|\) and \(|sx-r|\), and concluding
   \(A>0\), \(B>0\), and \(A+B<\pi\). Link every subsequent use of a sine sign
   to this lemma.

### Advised

1. **Lemma II.2.1,
   /proof/topic-ix/#karp:lem:farey-adjacency-expanded — lattice dependency.**
   Deep-link Topic V’s Lemma A.6 at the exact use and recall the representative
   count and the primitive-vector edge exclusion in one sentence.
2. **Proposition II.2.3, /proof/topic-ix/#karp:prop:scalar-ray — orientation
   convention.** Add a two-row table for “\(p/q\) is geometrically left” and
   “\(r/s\) is geometrically left,” showing the common sign choice and the
   resulting positive \(A,B\).
3. **Proposition II.2.3, /proof/topic-ix/#karp:prop:scalar-ray — return to the
   Ito polynomial.** Display \(\omega^d=e^{-2\pi i r}=1\), the clearing of
   inverse powers, and the final conjugation. The student should be able to see
   exactly why the chosen fractional-power sheet disappears after taking the
   \(d\)-th power.
4. **Proposition II.2.4, /proof/topic-ix/#karp:prop:scalar-continuity — endpoint
   audit.** Rename the subsequential limit to \(\rho_*\) or \(\rho_0\), derive
   \(B_0=2\pi/(dq)\) and \(A_0=2\pi/s\) from determinant one in both label
   orientations, and show the short classification making \(dq=2\) precisely
   the order-three terminal cell and giving \(s\ge3\) otherwise.
5. **Algorithm II.2.6, /proof/topic-ix/#karp:alg:boundary — certified numerical
   step.** Specify bisection as the guaranteed method, or require safeguarded
   Newton inside a maintained bracket with bisection fallback. Print the scalar
   residual, its positive derivative, and its endpoint signs so “certified” has
   an operational meaning.
6. **Algorithm II.2.6, /proof/topic-ix/#karp:alg:boundary — future links.**
   Replace “7,” “karp:sec:nesting,” and “karp:sec:completion” by named links to
   the exact Topic XI realization, Topic XII nesting, and Topic XIII completion
   results.
7. **Opening and scalar-ray setup, /proof/topic-ix/ — typography.** Repair the
   missing spaces around “signed integer \(e\)” and
   “\(\rho\in(0,1)\) satisfying,” then audit the other math/prose joins.

### Would be nice to add

1. **Before Proposition II.2.3, /proof/topic-ix/#karp:prop:scalar-ray.** Work
   one ray, preferably \(x=3/8\), all the way through cell selection,
   \(q,s,d,e,A,B\), a numerical bracket for \(\rho\), and recovery of
   \(\alpha,\beta\).
2. **Farey-label setup, /proof/topic-ix/#karp:eq:A-B-absolute.** Add a small
   diagram contrasting denominator labels with left-to-right labels; this is
   the page’s most persistent notational reversal.

## Recommendation count

- Needed: 1
- Advised: 7
- Would be nice to add: 2

## Author decisions

Pending.
