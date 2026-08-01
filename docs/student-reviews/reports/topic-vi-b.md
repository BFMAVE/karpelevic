# Topic VI-B — Student-perspective review report

- Route: /proof/topic-vi/b/
- Manuscript scope: PDF pages 45–51, including the assembly proof of Theorem
  1.3; its full statement is re-displayed from PDF pages 3–4.
- Formal inventory: 3 theorems, 1 lemma, and 2 audit remarks.
- Student baseline: one standard linear-algebra course; no specialist
  background.
- Review status: recommendations only; no page changes implemented.

## Independent reading 1

### Where the reader’s understanding holds

- The dependency contract clearly says that the page must propagate one local
  corridor motion through all \(N\) labels before using it.
- Lemma 7.9 (/proof/topic-vi/b/#part-i-item-48) is formally exhaustive: the
  tower bijection assigns all vertices, internal/top sources are partitioned,
  the sets \(D,R,A,c\) are audited, and every side inequality is checked.
- Its six formal stages and eleven-step guided outline perform different jobs;
  the second reveals the bookkeeping architecture rather than merely repeating
  the proof.
- Theorem 7.10 (/proof/topic-vi/b/#part-i-item-49) correctly intersects the
  local escape set with one finite global admissibility interval.
- Theorem 7.11 (/proof/topic-vi/b/#part-i-item-50) is a concise contradiction,
  and Theorem 1.3 (/proof/topic-vi/b/#part-i-item-3) cleanly separates identity,
  transversal, and nontransversal return regimes.

### Questions and points of friction, in reading order

1. Lemma 7.9 remains cognitively heavy without one small tower containing actual
   values of \(F(t,j)\), moved bases, and deformed labels.
2. Equation (7.53) renders like
   \(\widehat V_k\in\operatorname{relint}(\widehat E)_k(\tau)\), not the intended
   \(\operatorname{relint}(\widehat E_k(\tau))\).
3. The \(s=r^{-1}\) collision inherited from Proposition 7.3 remains dangerous
   because side successor and return successor are both discussed here.
4. Theorem 1.3 defines a complete transversal using “one base from each orbit,”
   but the element type should be a strict-contact edge/element of \(I\).
5. Theorem 1.3’s intuition uses software language (“modules export contracts”)
   and the orientation note says “intermediate eigenvalue,” neither of which
   explains the mathematics to the intended reader.

## Independent reading 2

### Where the reader’s understanding holds

- This reader agreed that Lemma 7.9 closes the global ledger: exact collinearity
  is distinguished from relative-interior membership, all \(N\) sources are
  counted, and the closing image is checked against the \(N-1\) other sides.
- Theorems 7.10–7.11 were judged exact and concise once the lemma is accepted.
- Theorem 1.3’s assembly proof was praised for not reopening the projective
  calculation.

### Questions and points of friction, in reading order

1. The page introduces seven local functions on top of the imported
   \(M,M^\circ,D,R,c,A,F,H,r,s\) notation without a persistent type-grouped
   dashboard.
2. This reading independently found the \(s\)-collision and equation (7.53)
   grouping.
3. The purpose text for Theorem 7.11 says criticality forces the final return
   projectivity to be the identity. The theorem proves \(\Delta=1\), meaning
   adjacent first return; it does not prove corridor holonomy is the identity.
4. Remark 7.13 (/proof/topic-vi/b/#part-i-item-52) uses
   \(\operatorname{PGL}_2(\mathbb R)\) without definition.
5. Theorem 1.3 needs a compact recap of
   \(\mathcal E(P),\chi,I,s,\sigma,\delta,\varphi\) to function as a reusable
   principal theorem.
6. The reader wanted a small forward-branch example and nested stage navigation
   for Lemma 7.9.

## Cross-reading synthesis

Both readings regard the global proof as formally serious and the scale of its
notation as the primary educational difficulty. They independently identify the
\(s\)-collision and equation-grouping defect. Reading 2 adds two precise
terminological errors: Theorem 7.11’s purpose sentence conflates first return
with projective identity, and PGL is undefined. Reading 1 adds an ambiguous
element type in “complete transversal.” A notation dashboard and worked example
are classified as Advised because Reading 1 could follow the formal partition,
even though Reading 2 found the current load beyond the baseline.

### Needed

1. **Theorem 7.11, /proof/topic-vi/b/#part-i-item-50 — purpose text.** Replace
   “forces the final return projectivity to be the identity” by “forces the
   first-return step \(\Delta\) to equal one.” Keep corridor holonomy and finite
   first return explicitly distinct.
2. **Lemma 7.9 and Theorem 1.3,
   /proof/topic-vi/b/#part-i-item-48 and #part-i-item-3 — notation collision.**
   Rename inverse return \(s=r^{-1}\) or write \(r^{-1}\) throughout, preserving
   \(s\) for the established side successor.
3. **Lemma 7.9, equation (7.53),
   /proof/topic-vi/b/#part-i-item-48 — grouping.** Render
   \(\widehat V_k\in\operatorname{relint}(\widehat E_k(\tau))\) unambiguously and
   audit analogous indexed relative-interior expressions.
4. **Theorem 1.3, /proof/topic-vi/b/#part-i-item-3 — complete transversal.**
   Define it as a strict-contact set containing exactly one edge (or one
   precisely named element of \(I\)) from each \(\sigma\)-orbit; do not use
   “base” without a declared type.

### Advised

1. **Remark 7.13, /proof/topic-vi/b/#part-i-item-52 — PGL.** Define
   \(\operatorname{PGL}_2(\mathbb R)\) as invertible \(2\times2\) matrices modulo
   nonzero scalar multiples, or replace the group notation by “fractional-linear
   projectivities of the real projective line.” Because the notation appears in
   an optional remark, it does not block the main proof.
2. **Before Lemma 7.9, /proof/topic-vi/b/#part-i-item-48 — notation
   dashboard.** Group symbols by type: arithmetic data, base/field sets, return
   maps/heights, corridor labels, and deformed point functions.
3. **Lemma 7.9, /proof/topic-vi/b/#part-i-item-48 — worked ledger and
   navigation.** Give one small forward-branch tower with numerical \(F(t,j)\),
   \(B_j,\iota_i,\gamma_i,D,R,A,c\), and split the six proof stages into nested
   anchored disclosures while retaining one uninterrupted formal proof.
4. **Before Theorem 1.3, /proof/topic-vi/b/#part-i-item-3 — assembly
   dictionary.** Recap \(\mathcal E(P),\chi,I,s,\sigma,\delta,\varphi\) with
   links to their first definitions, then replace “modules export contracts”
   with a mathematical proof map from saturation to interval reduction to
   two-height return to no-skipping.
5. **Theorem 1.3, /proof/topic-vi/b/#part-i-item-3 — orientation note.** Replace
   “intermediate eigenvalue” with an explicit choice between \(\lambda\) and
   \(\overline\lambda\), including the effect of coordinate reversal on the
   half-open convention.
6. **Theorem 7.10, /proof/topic-vi/b/#part-i-item-49 — half-plane sign.** State
   explicitly that cyclic orientation places every relevant nonincident vertex
   on the positive side of \(G_c\).

### Would be nice to add

1. **Lemma 7.9, /proof/topic-vi/b/#part-i-item-48.** Add a global-deformation
   animation with toggles for internal sources, \(D,R,A\), and closing field
   \(c\).
2. **Lemma 7.9.** Add a “trace one source vertex” control from base through its
   tower levels to the top-return side.
3. **After Theorem 1.3, /proof/topic-vi/b/#part-i-item-3.** Add a one-page
   dependency diagram from Theorem 3.2 to Theorem 1.3, labelling exactly what
   each arrow imports.

## Recommendation count

- Needed: 4
- Advised: 6
- Would be nice to add: 3

## Author decisions

Pending.
