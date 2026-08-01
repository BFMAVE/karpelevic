# Topic XIV — Student-perspective review report

- Route: /proof/topic-xiv/
- Manuscript scope: PDF pages 89–90, supplemented by deterministic boundary
  code and an interactive order-\(n\) laboratory.
- Formal inventory: no new theorem; 9 Farey cells, 1 worked ray, and 1
  interactive laboratory.
- Student baseline: one standard linear-algebra course; no specialist
  background.
- Review status: recommendations only; no page changes implemented.

## Independent reading 1

### Where the reader’s understanding holds

- The page consistently distinguishes exact Farey data and symbolic equations
  from decimal solves and sampled SVG polylines.
- The nine-cell order-seven ledger audits the complete upper half-turn before
  any numerical plot is used.
- The ray \(x=3/8\) is a good stress test: it has negative closing exponent,
  \(d=2\), a nontrivial scalar equation, and a six-state active realizer padded
  to order seven.
- The discussion of ninety bisection steps versus browser precision is honest,
  and the matrix is checked by a cycle-cover factorization rather than by a
  black-box eigenvalue call.

### Questions and points of friction, in reading order

1. The orientation prose still uses future tense although the code and widget
   are already present.
2. The atlas writes cells in left-to-right Farey order but assigns \((q,s)\) by
   increasing denominator. In the final cell, for example, \(q=2\) belongs to
   the right endpoint. Without an explicit warning, the display teaches the
   plausible but false rule that \(q\) is always the left denominator.
3. The worked ray jumps from \(A=\pi/4,B=\pi/8\) and the solved radius to
   decimal \(\alpha,\beta\) without restating the formulas that produce them.
4. A numerical scalar residual and carrier-polynomial residual would clarify
   which checks are approximate and which follow exactly from the cycle
   ledger.
5. The downloadable module has no minimal import-and-call example naming its
   public entry points, and the widget ledger does not repeat the denominator
   convention.

## Independent reading 2

### Where the reader’s understanding holds

- This reader exercised the laboratory at orders 1, 2, 3, and 7 and found the
  exact exceptional descriptions and sampled-curve warnings appropriate.
- The concrete seven-state matrix was singled out as especially valuable: its
  two local three-cycles, cross cycle, and absorbing state can all be checked by
  hand.
- The chapter correctly presents computation as a reproducible example after
  the proof, not as evidence replacing Topic XIII.

### Questions and points of friction, in reading order

1. This reading also found the future-tense orientation misleading and noted
   that the generic proof-page convention does not fit a chapter with no new
   formal proof.
2. In the exact-atlas introduction (/proof/topic-xiv/#karp:sec:n7), “Only the
   radius changes continuously inside the cell” is false: the direction,
   angular gaps, radius, and weights vary; only \((q,s,d,e)\) stay fixed.
3. At the cell ledger and equation (II.10.1)
   (/proof/topic-xiv/#karp:eq:F7), the smaller-denominator convention and the
   two signs of the reduced carrier are not explained, so the table is not yet
   reproducible from its headings.
4. The worked cell check uses determinant one but omits the order-seven
   condition \(3+5>7\), which is needed to exclude an intervening fraction in
   \(F_7\).
5. The definitions
   \(A=2\pi|qx-p|\) and \(B=(2\pi/d)|sx-r|\) are not restated, hiding the
   factor \(1/d\) that explains the apparently asymmetric \(\pi/8\).
6. Equation (II.10.2)
   (/proof/topic-xiv/#karp:eq:n7-ray-equation) proves uniqueness by monotonicity
   but does not display the sign-changing bracket that proves existence and
   initializes bisection.
7. Equation (II.10.3) (/proof/topic-xiv/#karp:eq:n7-numbers) gives no formula
   recovering \(\alpha\) from \(\rho\), and the introductory exact/approximate
   sentence incorrectly omits the decimal \(\alpha,\beta,\lambda\) values from
   its list of approximations.
8. The matrix factorization (/proof/topic-xiv/#karp:eq:n7-matrix) would be more
   auditable with a three-line signed cycle ledger.
9. The software section uses IEEE-754, safe-integer range, and regression test
   without a definition or a link to the claimed test.
10. Invalid widget entries are silently clamped or truncated, so a reader can
    think that order 41 or 2.5 was accepted as entered.

## Cross-reading synthesis

The readings agree that this is a valuable and unusually honest computational
chapter. The strict Needed class is limited to two materially false sentences,
the meaning-changing denominator ambiguity, and the incomplete Farey-neighbour
criterion that teaches determinant one as sufficient at order seven. The
formulas for \(A,B\), the bisection bracket, and recovery of \(\alpha,\beta\)
are already supplied by the explicitly imported Topic IX; repeating them would
make the promised worked calculation locally reproducible, but their omission
does not block a reader who followed the route. They are therefore Advised,
along with future tense, software terminology, download instructions, and
validation feedback.

### Needed

1. **Exact-atlas introduction, /proof/topic-xiv/#karp:sec:n7 — varying cell
   data.** Replace “Only the radius changes” by: the discrete carrier data
   \((q,s,d,e)\) remain fixed, while the ray direction, gaps \(A,B\), radius
   \(\rho\), and weights \(\alpha,\beta\) vary continuously.
2. **Cell strip, equation (II.10.1), and interactive ledger,
   /proof/topic-xiv/#karp:eq:F7 — denominator convention.** State beside both
   ledgers that \(q\le s\) orders the denominators by size rather than by the
   cell’s left-to-right orientation; use \(3/7\to1/2\), where \(q=2\), as the
   explicit counterexample to the left-denominator reading and say how the
   associated numerators are retained.
3. **Worked ray, “Locate the Farey cell.”** After
   \(3\cdot2-1\cdot5=1\), add \(3+5=8>7\). Explain that determinant one gives
   adjacency in the unrestricted Farey tessellation while the denominator-sum
   condition excludes a fraction of order at most seven between these
   endpoints.
4. **Worked-ray orientation and equation (II.10.3),
   /proof/topic-xiv/#karp:eq:n7-numbers — exact versus approximate.** Say that
   the fractions, exponents, symbolic equations, and defining formulas are
   exact, while every displayed decimal for \(\rho,\alpha,\beta,\lambda\) and
   every plotted coordinate is approximate.

### Advised

1. **Opening orientation and generic reading convention.** Replace obsolete
   future tense with a present-tense inventory and say explicitly that Topic XIV
   is a verified computational example with no new formal theorem.
2. **Above equation (II.10.1), /proof/topic-xiv/#karp:eq:F7 — carrier forms.**
   Display
   \(z^e(z^q-\beta)^d-\alpha^d\) for \(e\ge0\) and
   \((z^q-\beta)^d-\alpha^dz^{-e}\) for \(e<0\), then derive one row of the
   atlas from each form.
3. **Worked ray, “Measure the angular gaps.”** Restate
   \(A=2\pi|qx-p|\) and \(B=(2\pi/d)|sx-r|\), then substitute
   \(x=3/8,q=3,s=5,d=2\) to obtain \(A=\pi/4\) and \(B=\pi/8\).
4. **Equation (II.10.2),
   /proof/topic-xiv/#karp:eq:n7-ray-equation — existence and recovery.** Show
   the scalar residual has opposite signs at \(\rho=0\) and \(\rho=1\), then
   give the exact formula that recovers \(\alpha\) from the root and set
   \(\beta=1-\alpha\).
5. **Carrier equation and matrix,
   /proof/topic-xiv/#karp:eq:n7-worked-poly and
   /proof/topic-xiv/#karp:eq:n7-matrix — cycle ledger.** List the two local
   three-cycle contributions, the unique cross-cycle contribution with its
   sign, and the absorbing-loop factor \(t-1\).
6. **Reproducible extraction section.** Define IEEE-754 double precision and
   safe integers in a closed software note, link the regression-test file, and
   state its expected value, tolerance, and exact assertion.
7. **Interactive laboratory,
   /proof/topic-xiv/#boundary-laboratory-heading — input validation.** Reject
   or visibly report nonintegral and out-of-range orders instead of silently
   truncating or clamping them; display the order actually drawn.
8. **Downloadable boundary module.** Add a copyable minimal import-and-call
   example naming the public entry points and one returned data structure.
9. **Worked ray, equations (II.10.2)–(II.10.4).** Report the scalar residual
   and carrier-polynomial residual at the displayed decimal values, clearly
   labelled as numerical checks rather than exact proofs.

### Would be nice to add

1. **Order-seven plot.** Label root-of-unity nodes by their Farey fractions on
   keyboard focus or hover.
2. **Worked bisection.** Display the first three brackets, then jump to the
   final numerical interval.
3. **Order-seven ledger and plot.** Let a focused row or boundary arc reveal its
   exact carrier equation and one sampled point.

## Recommendation count

- Needed: 4
- Advised: 9
- Would be nice to add: 3

## Author decisions

Pending.
