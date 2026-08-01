# Topic XII-A — Student-perspective review report

- Route: /proof/topic-xii/a/
- Manuscript scope: Part II, Section II.8 through Lemma II.8.2, PDF pages
  79–83.
- Formal inventory: 2 lemmas.
- Student baseline: one standard linear-algebra course; no specialist
  background.
- Review status: recommendations only; no page changes implemented.

## Independent reading 1

### Where the reader’s understanding holds

- The page clearly separates the two local mechanisms by which the candidate
  can change: insertion of a mediant and an increase of multiplicity.
- The warning that \(d\) denotes an endpoint denominator in Lemma II.8.1 while
  multiplicity is \(m\) prevents a serious notation collision.
- Reciprocal radius, intercept, relative interior, log-radial function,
  padding factor, Jensen sheet, lifted argument, and scalar defect are all
  named before their main uses.
- The determinant convention makes “which chord is farther out?” an algebraic
  sign question rather than a drawing-dependent assertion.
- Lemma II.8.2 (/proof/topic-xii/a/#karp:lem:multiplicity-padding) carefully
  checks the padded product, phase, sheet, and strictness before applying the
  heterogeneous Jensen estimate.

### Questions and points of friction, in reading order

1. The comparison-language block at /proof/topic-xii/a/#karp:eq:log-line says
   that a two-line derivation is reproduced, but it only states
   \(\ell(\phi)=c-\log\cos(\phi-\phi_0)\). It does not derive this expression
   from a line equation or state where the cosine and radial intersection are
   positive.
2. In Lemma II.8.1 (/proof/topic-xii/a/#karp:lem:mediant-expansion), the rooted
   endpoints \(U,V,W,X,Y\) of the old and two new cells are asserted without a
   denominator-and-multiplicity derivation. These powers are the bridge from
   Farey insertion to the chord comparison.
3. The assertion that \(V^*\in[V,1]\) is geometrically plausible, but the proof
   does not explain why the chosen ray meets the segment rather than merely its
   supporting line.
4. The determinant reductions in equations (II.8.6) and (II.8.8) compress
   bilinear expansions into a single step.
5. In the \(b=1\) branch, the proof begins comparing the chord from \(1\) to
   \(e^{i\phi}\) without deriving why the old and new first-cell candidates
   reduce to these chords from the \(q=1\) carrier equation.
6. The \(d<b\) reduction uses conjugation and a common integer translation
   without displaying the transformed endpoints or checking the rooted scalar
   equation after the transformation.
7. Lemma II.8.2 invokes equation (II.6.3) for
   \(A>0,B_m>0,A+B_m<\pi\), but the rendered target is not an accessible exact
   statement of those facts.
8. The “direct resolution” leading to equation (II.8.13) omits the real-part
   identity that makes the resulting argument checkable.

## Independent reading 2

### Where the reader’s understanding holds

- This reading also found the local-refinement strategy well chosen and the
  multiplicity-padding lemma especially successful.
- The reciprocal-radius comparison and determinant sign convention give the
  page a coherent geometric language.
- The proof does audit the generic left cell, right cell, exceptional \(b=1\)
  case, reversed denominator orientation, padded phase identity, and strict
  unequal-profile conclusion; the difficulty is local justification and
  pacing rather than a missing overall strategy.

### Questions and points of friction, in reading order

1. This reading independently found that the promised derivation of the
   log-radial formula at /proof/topic-xii/a/#karp:eq:log-line is absent.
2. The expression \(U^{1/m}\) in Lemma II.8.1 has no declared branch. The proof
   later uses the intended argument \(A/m\), but that choice should be part of
   the definition.
3. At equation (II.8.5), the comparison uses
   \(-B+t<mt\), monotonicity of \(\ell'\), and \(\ell(0)=0\), but these facts are
   not written beside the integral calculation.
4. This reading also questioned why \(V^*\) and the later point \(Z\) lie on the
   stated old-line segments, which is needed before their collinearity signs
   can be used.
5. The right-subcell argument introduces \(X,Y,Z,\eta,\gamma\) in rapid
   succession and scales a determinant by \(|V|^{2m}\) without a diagram.
6. The reflected-denominator step needs one explicit transformation of the
   rooted endpoints and scalar equation.
7. This reading independently found the inaccessible angle-range dependency in
   Lemma II.8.2.
8. Before interpreting the final scalar sign, the proof should state
   \(A+B_M<A+B_m<\pi\).

## Cross-reading synthesis

The readings agree that the page has the right proof architecture and that its
main educational risk is compressed local geometry. The log-line formula, root
choice, endpoint derivation, segment placement, \(b=1\) identification, and
angle range are classified as Needed because each is used inside a central
proof and a linear-algebra student cannot verify the ensuing sign argument
without it. Diagrammatic support, intermediate determinant algebra, proof
segmentation, and prose normalization are Advised because the formal route
remains recoverable once those dependencies are repaired.

### Needed

1. **Comparison-language block,
   /proof/topic-xii/a/#karp:eq:log-line — polar line formula.** Begin with a
   line in normal form \(r\cos(\phi-\phi_0)=h\), choosing the normal orientation
   so that \(h>0\). Derive its positive radial intersection
   \(r=h/\cos(\phi-\phi_0)\), set \(c=\log h\), and then take logarithms to
   obtain the displayed formula. State the exact angular interval on which
   \(\cos(\phi-\phi_0)>0\) and explain why the relevant segment lies in it.
2. **Lemma II.8.1,
   /proof/topic-xii/a/#karp:lem:mediant-expansion — rooted endpoint ledger.**
   Add a denominator/multiplicity table deriving \(U,V\) for the old cell,
   \(U,W=VU^{1/m}\) for the left new cell, and \(X=UV^m,Y=V^m\) for the right
   new cell. Define \(U^{1/m}\) by its modulus and lifted argument \(A/m\), so
   no complex-root branch is implicit.
3. **Lemma II.8.1, generic chord comparisons — segment placement.** Prove that
   the chosen rays meet the actual old chord segments at \(V^*\in[V,1]\) and
   at \(Z\), not just their infinite supporting lines. Use monotonicity of
   argument on a segment avoiding the origin, or state and prove an equivalent
   convex-cone lemma before applying determinant signs.
4. **Lemma II.8.1, \(b=1\) branch — first-cell identification.** Starting from
   the \(q=1\) Ito carrier/rooted equation, derive the old and new rooted
   endpoints and show why the relevant comparison is precisely the radial
   intersection of the chord joining \(1\) to \(e^{i\phi}\).
5. **Lemma II.8.2,
   /proof/topic-xii/a/#karp:lem:multiplicity-padding — angle-range dependency.**
   Replace the inaccessible reference to equation (II.6.3) with a directly
   linked proved lemma establishing \(A>0\), \(B_m>0\), and
   \(A+B_m<\pi\) under the present Farey hypotheses. Then state
   \(A+B_M<A+B_m<\pi\) before using the final scalar-defect sign.

### Advised

1. **Lemma II.8.1, /proof/topic-xii/a/#karp:lem:mediant-expansion — proof
   structure.** Separate the proof visibly into the generic left cell, right
   cell, exceptional \(b=1\) branch, and reversed denominator orientation,
   while retaining one complete formal proof.
2. **Lemma II.8.1 — exact chord diagram.** Add a diagram carrying
   \(U,V,1,W,V^*,X,Y,Z\), the relevant rays, and the supporting lines. Plate
   XII.1 explains Farey splitting but does not depict the geometry used in the
   proof.
3. **Lemma II.8.1, equations (II.8.5) and (II.8.7) — integral comparisons.**
   Put the argument inequalities for \(\ell'\), its strict monotonicity, and the
   use of \(\ell(0)=0\) immediately below the displayed integrals.
4. **Lemma II.8.1, equations (II.8.6) and (II.8.8) — determinant algebra.**
   Print the bilinear determinant expansions and identify which terms vanish
   by collinearity before concluding the sign.
5. **Lemma II.8.1, \(d<b\) branch — reflection calculation.** Display the
   reflected endpoints and one substitution showing that conjugation followed
   by common integer translation preserves roots, multiplicities, the rooted
   scalar equation, and the positive-real intercept.
6. **Lemma II.8.2, equation (II.8.13) — phase resolution.** Print the omitted
   real-part identity and show how it fixes the lifted argument \(A+B_m\).
7. **Lemma II.8.1 result card — purpose grammar.** Change “Show that…” to
   “Shows that…” so the card describes the lemma rather than issuing an
   instruction.

### Would be nice to add

1. **After Lemma II.8.1.** Carry the concrete split
   \(1/3<2/5\) with mediant \(3/8\) through one complete reciprocal-chord
   comparison on a chosen ray, including the old and new rooted endpoints.
2. **After Lemma II.8.2.** Give a small numerical padding example in which two
   equal factors are padded by one zero factor, with both phase sums and the
   strict scalar-defect sign displayed.

## Recommendation count

- Needed: 5
- Advised: 7
- Would be nice to add: 2

## Author decisions

Pending.
