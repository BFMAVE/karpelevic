# Topic X — Student-perspective review report

- Route: /proof/topic-x/
- Manuscript scope: PDF pages 73–76; Part II, Section II.5 and Section II.6
  through Theorem II.6.1.
- Formal inventory: 2 theorems, 1 lemma, and 1 unnumbered analytic
  construction.
- Student baseline: one standard linear-algebra course; no specialist
  background.
- Review status: recommendations only; no page changes implemented.

## Independent reading 1

### Where the reader’s understanding holds

- The page clearly limits its claim to an upper comparison and does not import
  stochastic realization.
- The positive lifted argument is defined before orientation-sensitive use.
- Theorem II.5.1 is an effective wrapper for the exact geometric data imported
  from Topic VII.
- Lemma II.5.2 explicitly repairs the selected orientation instead of changing
  silently between \(\lambda\) and \(\overline\lambda\).
- Plate X.2 communicates the Jensen principle—fixed mean plus strict convexity
  favors an equal profile—and the theorem records the equality condition.

### Questions and points of friction, in reading order

1. “Why one convex function controls every factor” contains the central
   analytic engine, but the triangle and sine-law calculation producing
   \(F(u)=\log\sin M-\log\sin(M-u)\) is absent.
2. The same section treats the relation between \(\beta\) and \(u\), strict
   convexity of \(F\), and the \(\beta=0\) identity as transition prose rather
   than a stable lemma that Theorem II.6.1 can cite.
3. Theorem II.6.1 (/proof/topic-x/#karp:thm:hetero-sharp) says the argument is
   strictly increasing in \(\beta\) without displaying its derivative.
4. The exponentiation and sine-ratio reduction are compressed enough that a
   student must independently reconstruct every positivity and inequality-
   direction check.

## Independent reading 2

### Where the reader’s understanding holds

- The page has a clean proof skeleton once the factor potential is accepted:
  phase fixes the mean, the product fixes a sum of potentials, strict Jensen
  equalizes, and trigonometry returns to a radial inequality.
- The wrapper theorem and reflection dictionary make the long dependency chain
  auditable at a high level.
- The page consistently postpones the reverse inclusion and equality to Topic
  XI.

### Questions and points of friction, in reading order

1. The oriented-cell setup (/proof/topic-x/#karp:eq:oriented-cell) assumes
   \(A,B>0\) and \(A+B<\pi\), but Topic IX currently has no proved lemma to
   import for those signs.
2. No labelled triangle shows the points \(\beta,1,\lambda^q\), and the page does
   not establish that \(u\) gives a one-to-one parameterization before writing
   \(F\) as a function of \(u\).
3. The equality argument needs either the derivative of
   \(\operatorname{Arg}(\lambda^q-\beta)\) or an explicit horizontal-segment
   argument.
4. The opening and takeaway state the advertised inference
   \(\rho\le\rho_*\), but the formal theorem stops at the scalar inequality.
   The page does not display the short deduction from Topic IX’s strict
   monotonicity or the reflection back to the original ray when necessary.
5. Broken word joins occur exactly where the selected multiplier and strict
   convexity are being identified.

## Cross-reading synthesis

The readings agree that Jensen is the right and potentially elegant
compression step. They also agree that the unfamiliar factor potential cannot
be left to “elementary triangle trigonometry” for a reader with only linear
algebra. Two repairs are Needed: valid angle signs and the potential
derivation. The page already states the final upper bound correctly in its
opening and takeaway; promoting its one-line monotonicity deduction to the
formal chain is therefore Advised rather than a continuation blocker. The
remaining items are local proof expansion, terminology, or typography.

### Needed

1. **Oriented-cell setup, /proof/topic-x/#karp:eq:oriented-cell — angle signs.**
   Directly import the proved Topic IX angle-range lemma and restate the
   conclusions \(A>0\), \(B>0\), and \(A+B<\pi\). Without these signs, the
   logarithms, sine denominators, monotonicity, and selected sheet used below
   are not justified.
2. **Before Theorem II.6.1, /proof/topic-x/#karp:thm:hetero-sharp — factor-
   potential lemma.** Promote the analytic setup to a numbered lemma. Draw and
   label the triangle with vertices \(\beta,1,\lambda^q\), derive the relevant
   side ratios by the sine rule, prove that \(\beta\mapsto u\) is one-to-one on
   the stated interval, obtain
   \(F(u)=\log\sin M-\log\sin(M-u)\), compute
   \(F''(u)=\csc^2(M-u)>0\), and derive the \(\beta=0\) identity. Give equations
   (II.6.1)–(II.6.6) stable anchors that the theorem can cite.

### Advised

1. **Theorem II.6.1, /proof/topic-x/#karp:thm:hetero-sharp — equality
   parameter.** Display
   \[
   \frac{d}{d\beta}\operatorname{Arg}(z-\beta)
   =\frac{\operatorname{Im}z}{|z-\beta|^2}>0
   \]
   on the selected sheet, or give the equivalent fixed-height geometric
   argument, before converting equal arguments into equal \(\beta_j\).
2. **Theorem II.6.1, /proof/topic-x/#karp:thm:hetero-sharp — exponentiation and
   signs.** Add the intermediate exponential inequality, state the positivity
   of every sine divisor, and show the substitution leading to equation
   (II.6.10) in two or three displayed lines.
3. **After Theorem II.6.1, /proof/topic-x/#karp:thm:hetero-sharp — formal
   upper-bound deduction.** Promote the inference already stated in the
   opening and takeaway into the formal chain: compare the theorem’s scalar
   inequality with Topic IX’s unique equality radius, use strict monotonicity
   to conclude \(\rho\le\rho_*\), and invoke Lemma II.5.2 when the selected
   multiplier is \(\overline\lambda\).
4. **Lemma II.5.2, /proof/topic-x/#karp:lem:reflection-dictionary — constant
   profile.** Define the phrase at first use: all \(\beta_j\) are equal, hence
   the product is the scalar candidate profile from Topic IX.
5. **Analytic-engine prose, /proof/topic-x/ — typography and selected
   multiplier.** Repair “sox=y” and “>0throughout,” and audit every transition
   between the abstract \(\lambda\), selected \(\mu\), and reflected original
   ray.

### Would be nice to add

1. **Factor-potential section before
   /proof/topic-x/#karp:thm:hetero-sharp.** Add a graph of \(F\) on the actual
   interval \([A,M)\), marking the equal-profile mean used by Jensen.
2. **Theorem II.6.1, /proof/topic-x/#karp:thm:hetero-sharp.** Give a
   three-factor numerical example comparing a heterogeneous profile with the
   equal profile at the same mean.

## Recommendation count

- Needed: 2
- Advised: 5
- Would be nice to add: 2

## Author decisions

Pending.
