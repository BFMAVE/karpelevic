# Topic VI-A — Student-perspective review report

- Route: /proof/topic-vi/a/
- Manuscript scope: PDF pages 41–45.
- Formal inventory: 1 theorem and 2 lemmas.
- Student baseline: one standard linear-algebra course; no specialist
  background.
- Review status: recommendations only; no page changes implemented.

## Independent reading 1

### Where the reader’s understanding holds

- The page promises a direct corridor argument rather than hiding a projective
  theorem; Lemma 7.7 (/proof/topic-vi/a/#part-i-item-46) does isolate and prove
  the one-dimensional algebra.
- Lemma 7.6 (/proof/topic-vi/a/#part-i-item-45) defines the slope roles and gives
  a complete sign induction.
- Theorem 7.8 (/proof/topic-vi/a/#part-i-item-47) checks each perspectivity,
  removes poles on one common interval, composes the projectivity, factors the
  determinant, and preserves cyclic order.
- Plate VI-A.1 successfully translates a scalar sign into the required planar
  orientation/half-plane sign.

### Questions and points of friction, in reading order

1. Lemma 7.6 uses the support-slope fact
   \(s_i<\ell_i<s_{i+1}\) without a local wedge proof or figure. The current
   corridor figure does not label the moving points \(Z_i,R_i\) that carry the
   induction.
2. The page inherits projective-line language from Topic V. Without a local link
   to a projective-coordinate primer, the declared reader cannot independently
   parse projective lines, perspectivities, poles, or projective determinant
   signs.
3. In Theorem 7.8, the \(\tau=0\) recursion and final point \(C_{m+1}\) are
   formally checked but would be much easier to retain with a labelled frame.
4. The heading “Topic VI · Part A of XIV” has an ambiguous hierarchy.

## Independent reading 2

### Where the reader’s understanding holds

- This reader regarded VI-A as the strongest dense page in the first half.
- Lemma 7.6 was judged genuinely line-by-line; Lemma 7.7 cleanly separated
  \(a\ne1\) and \(a=1\); and Theorem 7.8 delayed the parameter choice until all
  finite open conditions held on one interval.
- Triple-sign persistence correctly imports the finite certificate from Topic
  II rather than using an unsupported perturbation slogan.

### Questions and points of friction, in reading order

1. Lemma 7.7 starts from
   \(u(\tau)=a\tau/(1+c\tau)\) but does not derive it from a general
   fractional-linear map fixing zero, despite the dependency contract saying
   the normal form is proved where used.
2. Theorem 7.8 uses \(\mathbb P^1(\mathbb R)\), projective completion, projective
   isomorphism, and perspectivity without a minimal local dictionary.
3. This reader independently requested a support-wedge diagram for Lemma 7.6.
4. “Each coordinate map has at most one pole” should be tied explicitly to the
   denominator of its fractional-linear formula.

## Cross-reading synthesis

Both readings find the formal structure unusually strong. The only genuinely
missing local bridge is projective vocabulary, together with the promised but
undisplayed normal-form derivation. The slope and \(\tau=0\) requests are
pedagogical refinements rather than logical failures.

### Needed

1. **Lemma 7.7, /proof/topic-vi/a/#part-i-item-46 — fixed-point normal form.**
   Starting from \((A\tau+B)/(C\tau+D)\), use \(u(0)=0\) and projective rescaling
   to derive \(u(\tau)=a\tau/(1+c\tau)\) in one line.
2. **Before Theorem 7.8, /proof/topic-vi/a/#part-i-item-47 — projective-line
   dictionary.** Define \(\mathbb P^1(\mathbb R)\), affine chart, point at
   infinity, projective isomorphism, and why projection from a centre lying on
   neither line gives such an isomorphism. Link this recap to the fuller Topic V
   primer.

### Advised

1. **Lemma 7.6, /proof/topic-vi/a/#part-i-item-45 — support-slope interval.**
   Prove in one sentence that a strict support through a vertex lies in the open
   angular wedge between incident sides, and add a two-step diagram with
   \(Z_i,R_i,r_i,s_i,\ell_i,s_{i+1}\).
2. **Theorem 7.8, /proof/topic-vi/a/#part-i-item-47 — poles.** Remind the reader
   that the denominator of a nonconstant fractional-linear map has at most one
   zero, which supplies the common pole-free interval after finitely many maps.
3. **Theorem 7.8, /proof/topic-vi/a/#part-i-item-47 — initial calibration.**
   Label the \(\tau=0\) frame so the recursion
   \(X_i\mapsto X_{i+1}\), the fixed points, and final \(C_{m+1}\) can be read
   directly.

### Would be nice to add

1. **Page heading.** Change the statistic to “Topic VI of XIV · Part A.”
2. **Theorem 7.8, /proof/topic-vi/a/#part-i-item-47.** Add a \(\tau\)-slider
   displaying the recursive intersections and the scalar points
   \(u(\tau),\tau\).
3. **Lemma 7.7, /proof/topic-vi/a/#part-i-item-46.** Add an optional geometric
   fixed-point-multiplicity explanation of the same escape lemma.

## Recommendation count

- Needed: 2
- Advised: 3
- Would be nice to add: 3

## Author decisions

Pending.
