# Topic III — Student-perspective review report

- Route: /proof/topic-iii/
- Manuscript scope: PDF pages 15–19; Lemmas A.4 and A.5 on page 64.
- Formal inventory: 1 definition and 9 results.
- Student baseline: one standard linear-algebra course; no specialist
  background.
- Review status: recommendations only; no page changes implemented.

## Independent reading 1

### Where the reader’s understanding holds

- The opening accurately limits the page to local ownership, exact clipping,
  compactness, and the area-minimal cap bound.
- Definition 4.2 (/proof/topic-iii/#part-i-item-19) and its figure make the
  half-open convention concrete: a vertex contact has exactly one owner.
- Lemma 4.3 (/proof/topic-iii/#part-i-item-20), Lemma 4.6
  (/proof/topic-iii/#part-i-item-23), and Lemma 4.8
  (/proof/topic-iii/#part-i-item-25) provide useful finite atlases, determinant
  certificates, and an exact before/after vertex ledger.
- Lemma A.4 (/proof/topic-iii/#part-i-item-68) defines Hausdorff convergence,
  support functions, and dominated convergence before using them.
- Lemma 4.9 (/proof/topic-iii/#part-i-item-26) gives a coherent compactness and
  least-area selection argument.

### Questions and points of friction, in reading order

1. Lemma 4.4 (/proof/topic-iii/#part-i-item-21) uses “supporting affine
   functional” without explicitly excluding a constant functional. Literally,
   a constant would expose the entire polygon rather than the intended proper
   contact face.
2. Lemma 4.6 (/proof/topic-iii/#part-i-item-23) says “strict convexity gives”
   the determinant signs, reviving the terminology collision Topic I carefully
   avoided. The fact used is positive cyclic order of a strict polygon.
3. Lemma 4.7 (/proof/topic-iii/#part-i-item-24) uses \(\kappa\) and the shifted
   source \(x_{i+1-\kappa}\) without defining the conditional shifted contact
   system on this page.
4. Lemma A.4 relies on dominated convergence, which is beyond the declared
   baseline even though it is defined and sourced.
5. Lemma A.5 (/proof/topic-iii/#part-i-item-69) asserts that interior yields an
   open triangle without constructing it.
6. Lemma 4.9 excludes a segment by an abbreviated invariant-line argument.

## Independent reading 2

### Where the reader’s understanding holds

- This reader also found the progression from half-open ownership through
  clipping to least-area selection well chosen.
- Definition 4.2, Lemmas 4.3–4.5
  (/proof/topic-iii/#part-i-item-20 through
  /proof/topic-iii/#part-i-item-22), Lemma 4.8, and the normalization before
  Lemma 4.9 were all judged genuinely explanatory.
- The page was praised for distinguishing exact collinearity/contact statements
  from later global existence.

### Questions and points of friction, in reading order

1. This reading independently found Lemma 4.7 logically out of order: the page
   must say that the shifted notation is a conditional local model and that
   Topic IV later proves its global existence.
2. Lemma 4.8 uses the planar fact that a point in the relative interior of the
   line section is an interior point of the polygon when the polygon has points
   on both sides. This is central to identifying the section endpoints and is
   not proved.
3. Lemma A.4’s interior-point persistence omits the visible uniform gap
   \(h_P(u)\ge\langle u,z\rangle+r\) before passing to \(P_k\).
4. Lemma 4.9 would be clearer if it invoked Lemma 2.5 or displayed the
   affine-line argument instead of relying on a compressed sentence.

## Cross-reading synthesis

Both readings agree that the page’s overall architecture and main figures work,
and both identify Lemma 4.7 as the clearest order-of-definition problem.
Reading 1 found a precision defect in the supporting-affine-functional
definition; Reading 2 found two missing convexity inequalities. Those are
specific, local repairs rather than reasons to rewrite the page.

### Needed

1. **Lemma 4.4, /proof/topic-iii/#part-i-item-21 — supporting affine
   functional.** Require a nonzero linear part (equivalently, a nonconstant
   affine functional) and state that its maximizing set is the contact face.
2. **Lemma 4.7, /proof/topic-iii/#part-i-item-24 — shifted contact system.**
   Before the statement, fix \(\kappa\), define
   \(\xi_j=\lambda x_{j-\kappa}\), and say explicitly that this is a conditional
   local bookkeeping lemma; Lemma 4.13 will prove that one global shift exists.
3. **Lemma 4.8, /proof/topic-iii/#part-i-item-25 — line-section fact.** Prove
   that points in the relative interior of
   \(P\cap\operatorname{aff}(y_j,y_{j+1})\) are interior to \(P\) when \(P\) has
   points strictly on both sides, for example with two convex combinations.
4. **Lemma A.4, /proof/topic-iii/#part-i-item-68 — uniform support gap.** Display
   \(h_P(u)\ge\langle u,z\rangle+r\) for every unit \(u\), then choose
   \(d_H(P_k,P)<r\) before concluding that \(z\in\operatorname{int}P_k\).

### Advised

1. **Lemma 4.6, /proof/topic-iii/#part-i-item-23 — terminology.** Replace
   “strict convexity gives” with “positive cyclic order of the vertices of the
   strict polygon gives.”
2. **Lemma 4.7, /proof/topic-iii/#part-i-item-24 — order preservation.** State
   that multiplication by nonzero \(\lambda\) is an orientation-preserving
   real-linear isomorphism, so consecutive image vertices keep their cyclic
   order.
3. **Lemma A.4, /proof/topic-iii/#part-i-item-68 — analytic prerequisite.**
   Label dominated convergence as a genuine external prerequisite with an exact
   source, or offer an elementary polygonal area-continuity route.
4. **Lemma A.5, /proof/topic-iii/#part-i-item-69 — positive-area triangle.**
   Choose three nearby noncollinear points in an interior disk and display the
   contained triangle.
5. **Lemma 4.9, /proof/topic-iii/#part-i-item-26 — segment limit.** Invoke
   Lemma 2.5 directly or spell out why an invariant nondegenerate segment would
   yield an invariant real direction.
6. **Lemma 4.4, /proof/topic-iii/#part-i-item-21 — existence of support.**
   Link the chosen nonconstant supporting affine functional to the exact planar
   supporting-line existence result supplied in Topic I, rather than relying on
   the definition of support alone.

### Would be nice to add

1. **Definition 4.2, /proof/topic-iii/#part-i-item-19.** Add a small animation
   switching closed sides to right-half-open sides and removing duplicate
   endpoint ownership.
2. **Lemma 4.8, /proof/topic-iii/#part-i-item-25.** Add a second frame showing
   the support line immediately before and after the old vertex is clipped.
3. **Before Lemma 4.9, /proof/topic-iii/#part-i-item-26.** Add a short
   motivation for minimizing area rather than perimeter.

## Recommendation count

- Needed: 4
- Advised: 6
- Would be nice to add: 3

## Author decisions

Pending.
