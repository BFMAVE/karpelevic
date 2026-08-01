# Topic XI — Student-perspective review report

- Route: /proof/topic-xi/
- Manuscript scope: Part II, Section II.7, PDF pages 77–79, followed by the
  logically deferred Corollary II.6.2 from PDF pages 76–77.
- Formal inventory: 2 lemmas, 1 theorem, and 2 corollaries.
- Student baseline: one standard linear-algebra course; no specialist
  background.
- Review status: recommendations only; no page changes implemented.

## Independent reading 1

### Where the reader’s understanding holds

- The tail-row matrix convention is declared before the page translates a
  directed graph into a stochastic matrix.
- Lemma II.7.1 (/proof/topic-xi/#karp:lem:cycle-cover) derives the sign of a
  cycle contribution directly from the Leibniz determinant formula, including
  loops, and therefore does not assume prior knowledge of Coates graphs.
- Lemma II.7.2 (/proof/topic-xi/#karp:lem:sparse-cycle-collections) gives the
  essential cycle dichotomy: a simple cycle is local to one block or follows
  the unique route through every block.
- Before Theorem II.7.3, the two regimes are motivated geometrically: entering
  a block late shortens the global route, while subdividing a cross edge
  lengthens it.
- Theorem II.7.3 (/proof/topic-xi/#karp:thm:sparse-realization) computes both
  characteristic polynomials and checks the active-order bound before padding.
- Corollary II.7.4 proves attainment before the page combines it with Topic X;
  this keeps the reverse construction logically independent of the upper
  comparison.

### Questions and points of friction, in reading order

1. At Lemma II.7.2 and Plate XI.1, “entry vertex,” “deterministic suffix,” and
   the global route must be reconstructed before a graph with named vertices
   has been displayed.
2. In the shortening case of Theorem II.7.3, the proof does not spell out
   \(q+s>n\ge dq\Rightarrow s>(d-1)q\), nor combine it with \(s\le dq\), to
   verify \(1\le\ell_1\le q\).
3. The formal proof of Theorem II.7.3 includes the endpoint parameters
   \(\alpha=0\) and \(\alpha=1\), but applies the cycle-classification language
   without saying whether a zero-weight arrow remains a formal edge or is
   deleted. The guided explanation notices the issue, but the complete proof
   does not adopt either convention.
4. The theorem first constructs active order \(N_0\le n\) and then pads to
   order \(n\). The statement and proof would be easier to audit if these were
   named as two distinct stages.
5. Corollary II.7.4’s guided proof supplies the carrier-root and padding steps
   omitted from its one-line formal proof.

## Independent reading 2

### Where the reader’s understanding holds

- This reading also found the graph-to-determinant route mathematically
  convincing: the cycle sign is derived, the possible simple cycles are
  classified, row sums are checked, and both signs of \(s-dq\) are handled.
- Plate XI.2 makes the shortening-versus-lengthening idea memorable, and the
  displayed binomial expansions agree with the stated cycle collections.
- Corollary II.6.2 is correctly postponed until after stochastic attainment,
  so its squeeze does not conceal a circular argument.

### Questions and points of friction, in reading order

1. The opening contains visible spacing errors in “Asparse directed block
   graph,” “weight wis stored,” and “factor tin det(tI−A).” These make the new
   matrix convention unnecessarily difficult to parse.
2. Lemma II.7.2 refers to “the block graph used in Theorem II.7.3” before that
   graph is completely defined. In particular, the statement should say that a
   cross edge may enter an interior vertex of the next block.
3. Theorem II.7.3 asks the student to visualize cyclic block indices, terminal
   vertices, local returns, cross-edge tails, entry positions, and subdivision
   vertices from prose. Neither plate gives one fully labelled instance on
   which the characteristic polynomial can be checked.
4. The characteristic-polynomial calculation has no compact ledger recording
   each collection’s count, weight, number of used vertices, and determinant
   contribution.
5. This reading independently identified the unresolved zero-weight-edge
   convention at \(\alpha=0\) or \(\beta=0\).
6. Corollary II.7.4 (/proof/topic-xi/#karp:cor:attainment) has only a
   cross-reference as its formal proof, although the guided steps correctly
   explain why the carrier gives a nonzero root and why padding reaches exact
   order \(n\).
7. Corollary II.6.2 (/proof/topic-xi/#karp:cor:equal-profile) cites Theorem
   II.7.3 for order-\(N\) attainment, while Corollary II.7.4 is the precise
   result that includes padding to order \(N\).

## Cross-reading synthesis

Both readings accept the constructive argument and independently identify the
endpoint graph convention as the only formal gap. The early graph definition,
worked graph, inequality checks, cycle ledger, and expanded attainment proof
would make the construction independently auditable by the stated student, but
the existing prose and guided explanations allow the reader to continue; they
are therefore Advised rather than Needed. Typographical defects and an
imprecise cross-reference are also Advised under the review rubric.

### Needed

1. **Theorem II.7.3, /proof/topic-xi/#karp:thm:sparse-realization — endpoint
   graph convention.** The theorem permits \(\alpha,\beta\in[0,1]\), but its
   formal cycle classification does not say what happens when an edge weight
   is zero. State one convention inside the formal proof: either retain
   zero-weight formal arrows and observe that every cycle containing one has
   zero contribution, or prove the polynomial identity for
   \(0<\alpha,\beta<1\) and extend it to the endpoints as a polynomial identity
   in the matrix entries.

### Advised

1. **Before Lemma II.7.2,
   /proof/topic-xi/#karp:lem:sparse-cycle-collections — complete graph
   definition.** Define block vertices, terminals, local returns, cross-edge
   tails and heads, and the possibility of entering an interior vertex before
   classifying cycles. This removes the current dependence on a graph defined
   only in the following theorem.
2. **Theorem II.7.3, /proof/topic-xi/#karp:thm:sparse-realization — labelled
   instance.** Add one small graph with all vertices, entry indices, edge
   weights, and subdivision vertices labelled. A \(d=3\) instance would show
   the cyclic routing without making the picture large.
3. **Theorem II.7.3, shortening case — entry-length bounds.** Display
   \(q+s>n\ge dq\Rightarrow s>(d-1)q\) and combine it with \(s\le dq\) to prove
   \(1\le\ell_1=s-(d-1)q\le q\).
4. **Theorem II.7.3, equations (II.7.3)–(II.7.4) — cycle ledger.** Beside each
   determinant expansion, list the selected cycle collections, their number,
   total weight, used vertices, and resulting power of \(t\). This makes the
   binomial coefficients and the factor \(t^{s-dq}\) directly checkable.
5. **Theorem II.7.3 — active order versus final order.** State explicitly that
   the sparse construction has order \(N_0=\max(dq,s)\le n\), after which
   absorbing-state padding produces the claimed order-\(n\) matrix.
6. **Corollary II.7.4, /proof/topic-xi/#karp:cor:attainment — formal proof.**
   Move the essential guided steps into the formal proof: Proposition II.2.3
   makes the scalar candidate a nonzero carrier root, Theorem II.7.3 realizes
   that carrier, and absorbing-state padding gives exact order \(n\).
7. **Corollary II.6.2, /proof/topic-xi/#karp:cor:equal-profile — attainment
   citation.** Cite Corollary II.7.4 for exact-order attainment, or retain the
   theorem citation and explicitly mention its padding step.
8. **Opening and /proof/topic-xi/#karp:eq:tail-row-adjacency — typesetting.**
   Correct the missing spaces in “A sparse directed block graph,” “weight \(w\)
   is stored,” and “factor \(t\) in \(\det(tI-A)\).” Audit the remainder of the
   matrix-convention paragraph for the same token-joining defect.

### Would be nice to add

1. **Theorem II.7.3, /proof/topic-xi/#karp:thm:sparse-realization.** Pair the
   labelled graph with its actual sparse stochastic matrix and use matching
   colours for graph arrows, matrix entries, and cycle-ledger terms.
2. **After the worked realization.** Add an optional direct determinant check
   for the small matrix, clearly presented as verification rather than a
   replacement for the general proof.

## Recommendation count

- Needed: 1
- Advised: 8
- Would be nice to add: 2

## Author decisions

Pending.
