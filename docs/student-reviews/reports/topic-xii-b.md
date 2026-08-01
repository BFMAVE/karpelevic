# Topic XII-B — Student-perspective review report

- Route: /proof/topic-xii/b/
- Manuscript scope: the remainder of Part II, Section II.8, PDF pages 83–85.
- Formal inventory: 1 lemma and 1 theorem.
- Student baseline: one standard linear-algebra course; no specialist
  background.
- Review status: recommendations only; no page changes implemented.

## Independent reading 1

### Where the reader’s understanding holds

- \(K_n\) is defined before either result, and the page explicitly warns that
  “candidate outer radius” is not yet a boundary theorem.
- The separate value \(K_n(\pi)=1\) is motivated by the order-three terminal
  discontinuity.
- Lemma II.8.3 (/proof/topic-xii/b/#karp:lem:nesting-case-split) proves why a
  newly inserted interior Farey fraction must be the mediant rather than merely
  citing the usual Farey-tree picture.
- Theorem II.8.4 (/proof/topic-xii/b/#karp:thm:candidate-nesting) reduces the
  interior cases to the sign of one strictly increasing scalar defect.
- The intercept-defect identity removes orientation ambiguity, and the theorem
  separately treats inherited endpoints, new endpoints, zero, the terminal
  ray, and conjugation.

### Questions and points of friction, in reading order

1. In Lemma II.8.3, the proof says that a primitive vector with intermediate
   slope has positive integer coordinates in the determinant-one endpoint
   basis, but gives neither the coordinate formulas nor a cone argument for
   positivity.
2. Theorem II.8.4 refers broadly to earlier \(A,B\) notation rather than to an
   exact proved statement of \(A>0,B>0,A+B<\pi\), even though those signs are
   what make its derivative positive.
3. The guided sentence that strictness holds “exactly” for a split cell or an
   increased multiplicity is correct for rays interior to both decompositions,
   but can be read globally, where a newly inserted endpoint is another strict
   case.

## Independent reading 2

### Where the reader’s understanding holds

- This reading also found Part B markedly easier than Part A: the local
  geometry has been reduced to an exhaustive Farey ledger and a monotone-zero
  comparison.
- Plate XII.3 accurately depicts the logical use of an old test point and the
  unique new zero.
- The four cases form a coherent partition, and the endpoint clauses prevent a
  hidden gap at \(\theta=\pi\).

### Questions and points of friction, in reading order

1. The candidate-radius definition at
   /proof/topic-xii/b/#karp:eq:Kn-pi-definition is later called equation
   (II.8.19), but the displayed definition has no visible number/permalink in
   the rendered reading flow.
2. This reading independently questioned why the lattice-basis coefficients in
   Lemma II.8.3 are positive integers rather than merely real coordinates.
3. The derivative sign in Theorem II.8.4 again depends on the shared but
   inaccessibly cited angle-range fact.
4. Equation (II.8.23) is described as “direct subtraction,” but the one
   intermediate numerator line connecting reciprocal intercept and scalar
   defect is omitted.
5. The order-three endpoint discussion would be clearer with the one-sided
   nonreal limit, the separately defined terminal candidate, and the actual
   root of unity displayed side by side.

## Cross-reading synthesis

Both readings accept the exhaustive structure and identify the same two
student-level dependencies: the determinant-one basis coordinates and the
angle-range signs. These are Needed because they justify, respectively, the
only-possible-mediant conclusion and the monotonicity at the heart of the
nesting theorem. The missing equation number is a navigation defect rather
than a mathematical blocker and is therefore Advised. Needed repairs belonging
to Topic XII-A are not duplicated here; Part B should import them through exact
links once supplied.

### Needed

1. **Lemma II.8.3,
   /proof/topic-xii/b/#karp:lem:nesting-case-split — lattice-basis
   coefficients.** For an intermediate primitive vector \(w\), display its
   determinant-one basis coordinates, for example
   \(w=\det(w,v)u+\det(u,w)v\) with the page’s chosen orientation. Use the
   intermediate-slope inequalities to prove that both coefficients are
   positive integers before the denominator inequalities force both to equal
   one.
2. **Theorem II.8.4,
   /proof/topic-xii/b/#karp:thm:candidate-nesting — angle-range import.** Link
   directly to the proved lemma establishing \(A>0,B>0,A+B<\pi\), restate
   those inequalities beside the derivative, and then conclude that both sine
   coefficients and both derivative terms are positive.

### Advised

1. **Candidate-radius definition,
   /proof/topic-xii/b/#karp:eq:Kn-pi-definition — equation navigation.** Attach
   the visible number and permalink (II.8.19) to the definition, or stop
   referring to it by that number later in the proof.
2. **Theorem II.8.4, equation (II.8.23) — intercept-defect algebra.** Expand
   “direct subtraction” by one displayed common-denominator numerator and
   identify the remaining positive factor before reading off the sign.
3. **Theorem II.8.4 — scope of strictness.** Qualify “strict exactly” as a
   statement about rays lying in the interiors of both Farey decompositions;
   then list a newly inserted endpoint separately as another globally strict
   case.
4. **Candidate-radius definition and terminal case — order three.** Add a
   compact display distinguishing
   \(\lim_{\theta\uparrow\pi}K_3(\theta)=1/2\), the convention
   \(K_3(\pi)=1\), and the endpoint eigenvalue \(-1\).
5. **Lemma II.8.3 result card — purpose grammar.** Change “Prove that…” to
   “Proves that…” so the card description is consistent with the surrounding
   results.

### Would be nice to add

1. **Before Theorem II.8.4.** Add a concrete one-order Farey diagram, such as
   \(F_4^+\to F_5^+\), colour-coding inherited endpoints, new endpoints,
   unchanged cells, and split cells.
2. **After Theorem II.8.4.** Add a compact flowchart mapping each ledger case
   to its comparison: equality, new endpoint, multiplicity padding, or mediant
   expansion.

## Recommendation count

- Needed: 2
- Advised: 5
- Would be nice to add: 2

## Author decisions

Pending.
