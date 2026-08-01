# Topic II — Student-perspective review report

- Route: /proof/topic-ii/
- Manuscript scope: PDF pages 10–15; Lemma A.1 on page 61 and Lemma A.3 on
  page 63.
- Formal inventory: 7 core results, 2 foundational lemmas, and 1 remark.
- Student baseline: one standard linear-algebra course; no specialist
  background.
- Review status: recommendations only; no page changes implemented.

## Independent reading 1

### Where the reader’s understanding holds

- The regular-heptagon opening gives saturation a concrete meaning before
  support vectors and cones appear.
- The dependency contract separates imported material from proofs supplied
  locally. “Meets,” “support slack,” “vanishing slack,” “continuous point
  function,” “complete certificate,” “vertex budget,” and “Neumann series” are
  translated into usable definitions.
- Lemma 2.7 (/proof/topic-ii/#part-i-item-11) has a helpful determinant plate;
  Lemma 2.8 (/proof/topic-ii/#part-i-item-12) explains the finite common-
  neighbourhood argument; and Theorem 3.2
  (/proof/topic-ii/#part-i-item-16) gives useful compressed explanations of
  boundedness, complementarity, and support equality.
- Lemma A.3 (/proof/topic-ii/#part-i-item-67) makes polarity serve a visible
  vertex/side-counting purpose rather than invoking it decoratively.

### Questions and points of friction, in reading order

1. Lemma 2.7 (/proof/topic-ii/#part-i-item-11) defines a cyclic triple by
   referring to boundary points even though the converse begins with an abstract
   cyclic list and is meant to prove that it is a polygonal boundary list. The
   final support-line conclusion is also compressed.
2. Lemma 2.8 (/proof/topic-ii/#part-i-item-12) chooses a functional nonzero on a
   side direction without the one-line dual-space existence argument.
3. Lemma 2.10 (/proof/topic-ii/#part-i-item-14) uses
   \(\frac d{dt}\arg z(t)=\operatorname{Im}(z'(t)/z(t))\) without derivation.
4. Lemma A.1 (/proof/topic-ii/#part-i-item-65) moves rapidly through operator
   norms, resolvents, Jordan blocks, nilpotent parts, absolute convergence, and
   the telescoping Neumann identity. Its present vocabulary does not bridge all
   of these ideas for the advertised reader.
5. In Proposition 3.1 (/proof/topic-ii/#part-i-item-15), this reader found the
   hypotheses defining \(P,\Phi,u_i,h_i\), the selected fan cone, and the rows
   of \(B_\Phi(\theta)\) insufficiently bound to the formal statement.
6. Theorem 3.2 (/proof/topic-ii/#part-i-item-16) uses a proper-cone separation
   alternative without a local proof or exact imported theorem. Persistence of
   strict slack under a small radial enlargement is correct but would be clearer
   with a named finite margin.

## Independent reading 2

### Where the reader’s understanding holds

- This reader found the page architecture strong and specifically judged the
  normal-fan setup before Proposition 3.1 readable: normals, support numbers,
  fan cones, the matrix rows, and a \(30^\circ\) example were all available.
- Lemma 2.8, Proposition 3.1, Theorem 3.2, Lemma A.3, and Lemma 4.1
  (/proof/topic-ii/#part-i-item-18) were seen as purposeful and generally
  traceable.
- The three explanatory implications below Theorem 3.2 were judged to add
  genuine reasoning rather than merely paraphrase the conclusion.

### Questions and points of friction, in reading order

1. This reading independently found the cyclic-triple wording in Lemma 2.7
   circular and also wanted the wrap \(N-1\to0\) made explicit.
2. It identified Lemma A.1’s general nonnegative-matrix case as the main
   background jump: the guided layer compresses the matrix-analysis argument
   too aggressively for one linear-algebra course.
3. It independently found the positive-cone separation step in Theorem 3.2
   unverifiable from the current page.
4. It found the fan-ray coefficient choice in Proposition 3.1 plausible but
   wanted a one-line proof of independence from the adjacent cone chosen.
5. It wanted the strict-support choice in Lemma A.3 linked to the vertex
   normal-cone construction and the positive-matrix inequality in Lemma A.1
   made coordinatewise explicit.

## Cross-reading synthesis

The readings agree on the three genuine student blockers: the circular
cyclic-triple definition, the unexpanded matrix-analysis bridge in Lemma A.1,
and the cone-separation step in Theorem 3.2. They differ on Proposition 3.1.
Because Reading 2 successfully used the preceding normal-fan setup, this report
does not call the proposition undefined. Reading 1’s experience still shows
that the formal hypotheses and row construction should be gathered into a
single local contract.

### Needed

1. **Lemma 2.7, /proof/topic-ii/#part-i-item-11 — cyclic triples.** Define cyclic
   order combinatorially on labels in \(\mathbb Z/m\mathbb Z\), not through a
   polygonal boundary that the converse has not yet constructed. State how the
   wrap \(m-1\to0\) is read in the sufficiency proof.
2. **Lemma A.1, /proof/topic-ii/#part-i-item-65 — general nonnegative matrix
   bridge.** Define the induced operator norm, resolvent, Jordan block,
   nilpotent part, and absolute convergence; show why polynomial growth times
   \(r_0^k\) decays; and write the telescoping step that identifies the matrix
   series with the inverse. Split the limiting argument into smaller claims.
3. **Theorem 3.2, /proof/topic-ii/#part-i-item-16 — proper-cone separation.**
   Insert a proved planar positive-cone separation lemma, or cite an exact
   theorem and verify its hypotheses. The earlier point-versus-compact-set
   separation lemma does not by itself visibly supply this unbounded-cone
   dichotomy.

### Advised

1. **Proposition 3.1, /proof/topic-ii/#part-i-item-15 — formal setup contract.**
   Gather \(P\), the cyclic normals \(u_i=e^{i\phi_i}\), support vector \(h\),
   normal fan \(\Phi\), selected adjacent cone, and the row construction of
   \(B_\Phi(\theta)\) immediately before the proposition. This preserves the
   setup Reading 2 found useful while preventing Reading 1’s reconstruction
   burden.
2. **Lemma 2.7, /proof/topic-ii/#part-i-item-11 — final convex-hull step.**
   Explain that each directed line through consecutive points supports the hull
   and only its two endpoints attain equality; hence every point is extreme and
   the consecutive segments are exactly the edges.
3. **Lemma 2.10, /proof/topic-ii/#part-i-item-14 — derivative of argument.**
   Derive the displayed identity in two elementary lines or point to a precise
   complex-calculus result.
4. **Lemma A.3, /proof/topic-ii/#part-i-item-67 — strict support and polarity.**
   Link the strict-support choice to the interior of a vertex normal cone, and
   add one small triangle or pentagon showing how vertices and sides exchange.
5. **Theorem 3.2, /proof/topic-ii/#part-i-item-16 — persistence of slack.**
   Name the minimum positive coordinate margin and choose \(\eta\) explicitly
   below the resulting finite bound.
6. **Proposition 3.1, /proof/topic-ii/#part-i-item-15 — fan-ray ambiguity.**
   Show in one line why a direction on a shared fan ray receives the same global
   coefficient vector from either adjacent closed cone.
7. **Lemma 2.8, /proof/topic-ii/#part-i-item-12 — separating functional.**
   Add the one-line dual-space argument that a nonzero side direction admits a
   linear functional that is nonzero on it, for example by extending the
   direction to a basis and defining the functional on that basis.
8. **Lemma A.1, /proof/topic-ii/#part-i-item-65 — coordinatewise positivity.**
   Show explicitly why strict positivity of every entry of (A), together with
   the nonzero vector (Mx-Ax\ge0), gives (A(Mx-Ax)>0) in every coordinate.

### Would be nice to add

1. **Theorem 3.2, /proof/topic-ii/#part-i-item-16.** Add an \(N=5\) schematic
   showing \(h\), \(B_\Phi h\), a slack coordinate, and the retained support set.
2. **Lemma A.1, /proof/topic-ii/#part-i-item-65.** Offer a compact optional proof
   for readers already familiar with Perron–Frobenius and resolvents.
3. **Lemma 2.8, /proof/topic-ii/#part-i-item-12.** Add one moving-side example
   with its affine coordinate \(\alpha(\tau)\).

## Recommendation count

- Needed: 3
- Advised: 8
- Would be nice to add: 3

## Author decisions

Pending.
