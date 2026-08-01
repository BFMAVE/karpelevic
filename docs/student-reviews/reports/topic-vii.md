# Topic VII — Student-perspective review report

- Route: /proof/topic-vii/
- Manuscript scope: PDF viewer pages 51–59; Section 8 and the assembly proof
  of Theorem 1.4.
- Formal inventory: 5 lemmas, 2 propositions, and 1 theorem.
- Student baseline: one standard linear-algebra course; no specialist
  background.
- Review status: recommendations only; no page changes implemented.

## Independent reading 1

### Where the reader’s understanding holds

- Plate VII.1 makes Farey reflection concrete and checks both determinant one
  and the denominator-sum condition.
- Lemmas 8.1–8.2 define the basic Farey vocabulary before using it, and their
  guided proofs clarify rather than merely repeat the formal arguments.
- Lemma 8.3 carefully distinguishes conjugation, reversal, signed closure, and
  lifted phase; in particular, a negative exponent is not misread as a
  negative return time.
- Plate VII.2 makes the common upper-half-plane argument branch visible.
- The case table in Theorem 1.4 is an effective summary of orientation,
  denominator order, and the sign of \(e\).

### Questions and points of friction, in reading order

1. Lemma 8.1 (/proof/topic-vii/#lem:farey-adjacency-expanded) brings in a
   half-open fundamental parallelogram, quotient representatives, and primitive
   lattice vectors at once. Topic V is linked broadly, but the exact fact used
   and the reason both coordinates are strictly internal are not recalled.
2. Before Lemma 8.4 (/proof/topic-vii/#lem:kappa-N), “monodromy output” names a
   package whose target equations (1.5)–(1.9) are not yet visible. The student
   does not initially know what each case is meant to establish.
3. Propositions 8.5–8.6 revive a large block of return notation. The earlier
   pages contain it, but understanding requires repeated backward navigation.
4. Proposition 8.6 (/proof/topic-vii/#prop:minimal-block-product) introduces the
   unique \(h\) with \(Kh\equiv-1\pmod L\) without stating why \(K\) is
   invertible modulo \(L\).
5. Several small arithmetic bridges in Propositions 8.5–8.6 and Lemma 8.7 are
   correct but compressed beyond what the stated reader can reproduce on a
   first pass.
6. The final paragraph of Theorem 1.4
   (/proof/topic-vii/#thm:complex-monodromy) invokes a rendered link labelled
   only “30,” so the intended appeal to Lemma 8.7 is not legible.

## Independent reading 2

### Where the reader’s understanding holds

- The three-stage route—Farey adjacency, return-product construction, and one
  common argument sheet—is coherent and visible.
- The page usefully distinguishes genuine factors from algebraic padding and
  warns that \(S,R\) are local arithmetic symbols.
- Lemma 8.7 gives an intuitive picture of the Jensen sheet: a factor moves
  horizontally in the upper half-plane while its lifted argument stays on one
  branch.
- Theorem 1.4 assembles genuinely different return regimes without pretending
  that their bookkeeping is identical.

### Questions and points of friction, in reading order

1. Lemma 8.1 cites Lemma A.6 but does not deep-link or restate the precise
   lattice-representative count used in the converse.
2. Lemma 8.3 (/proof/topic-vii/#lem:backward-strip-reflection) contains enough
   old and new indices that a before/after notation table is needed to verify
   the reversal \(i=d-j+1\) without guesswork.
3. Lemma 8.4 imports Lemma 2.10 and equation (4.13), neither of which appears in
   the dependency contract. Propositions 8.5–8.6 likewise rely on Theorem 6.1
   and Corollary 6.2 without precise first-use links.
4. Proposition 8.5 (/proof/topic-vii/#prop:large-block-product) uses “continuous
   rooted branch” without defining it and revives record-edge notation after a
   long interval.
5. This reading independently found the missing
   \(\gcd(K,L)=1\) step in Proposition 8.6 and found both of its arithmetic
   branches too compressed for independent reproduction.
6. The broken “30” reference and repeated renderings such as “equation
   equation (8.7)” make the cross-reference system look less reliable than the
   mathematics.

## Cross-reading synthesis

Both readings regard the mathematical route as sound and the final case table
as especially helpful. Under the strict severity rubric, only the unproved
modular inverse is classified as Needed. Missing roadmaps, deep links, notation
recaps, and the broken rendered reference materially obstruct reading but do
not by themselves sever an otherwise identifiable proof dependency.

### Needed

1. **Proposition 8.6, /proof/topic-vii/#prop:minimal-block-product — existence
   of \(h\).** The proof assumes a unique
   \(h\in\{1,\ldots,L-1\}\) with \(Kh\equiv-1\pmod L\), but a linear-algebra
   student has not been given the number-theoretic reason it exists. State
   \(\delta=\gcd(N,\kappa)\), \(K=\kappa/\delta\), and
   \(L=N/\delta\), deduce \(\gcd(K,L)=1\), and then invoke the modular inverse
   of \(K\) modulo \(L\).

### Advised

1. **Before Lemma 8.4, /proof/topic-vii/#lem:kappa-N — monodromy-output
   contract.** Display and define \(p,q,r,s,d,e,\alpha_j,\beta_j,u_j\) and the
   target identities (1.5)–(1.9), or preview Theorem 1.4 before entering the
   cases. This tells the reader what each case is proving.
2. **Lemma 8.1, /proof/topic-vii/#lem:farey-adjacency-expanded — exact lattice
   import.** Deep-link Topic V’s Lemma A.6 and recall in one sentence what its
   half-open-parallelogram count supplies. Add the short argument that
   primitiveness excludes the coordinate edges.
3. **Lemma 8.3, /proof/topic-vii/#lem:backward-strip-reflection — reflection
   notation.** Add a two-column before/after ledger for vertices, factors,
   coefficients, lifted angles, and closing exponent. This will separate the
   geometric reversal from the algebraic reindexing.
4. **Lemma 8.4, /proof/topic-vii/#lem:kappa-N — undeclared dependencies.** Add
   precise links to Lemma 2.10 and equation (4.13), with a one-line statement
   of the angle bounds actually used.
5. **Proposition 8.5, /proof/topic-vii/#prop:large-block-product — local return
   notation and branch language.** Recall \(E,L(E)\), the maximal backward
   arithmetic run, record edges, and the padded interval \(J\); replace
   “continuous rooted branch” by a definition in terms of the already
   established lifted argument. Deep-link Theorem 6.1 and Corollary 6.2 at
   their first uses and state the exact return and recurrence data they supply.
   Expand the line turning the landing on \(E_{pN+1}\) into \(p/q<x\).
6. **Proposition 8.6, /proof/topic-vii/#prop:minimal-block-product — compressed
   arithmetic.** Derive
   \(e+(d-1)q=h\) and \(b-(d-1)p=r-dp\) from the displayed definitions, and add
   a short ledger separating the \(\delta\ge2\) reflected case from the
   \(\delta=1\) padded case.
7. **Lemma 8.7, /proof/topic-vii/#lem:compression-branch — upper angle bound.**
   Print
   \(qy-p<q(r/s)-p=(rq-ps)/s=1/s\) before concluding
   \(A<2\pi/s\).
8. **Theorem 1.4, /proof/topic-vii/#thm:complex-monodromy — rendered
   cross-references.** Replace “30” by a named link to Lemma 8.7 and audit the
   duplicated “equation equation” labels. These are navigation defects rather
   than new mathematical claims, but they occur at the final assembly step.

### Would be nice to add

1. **Lemma 8.3, /proof/topic-vii/#lem:backward-strip-reflection.** Give one
   \(d=3\) index example that checks the reversal by hand.
2. **Proposition 8.6, /proof/topic-vii/#prop:minimal-block-product.** Give one
   small numerical instance of each arithmetic branch, including the resulting
   sign of \(e\).
3. **After Proposition 8.6.** Add a collapsible two- or three-factor strip
   example tracing recurrence, cancellation, Laurent form, homogeneous form,
   and phase sum.
4. **End of Topic VII.** Add a one-page notation ledger separating geometric
   input, Farey data, factor data, and phase data.

## Recommendation count

- Needed: 1
- Advised: 8
- Would be nice to add: 4

## Author decisions

Pending.
