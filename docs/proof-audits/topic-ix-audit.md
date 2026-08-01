# Topic IX implementation audit

Canonical scope: Part II, Section II.2, manuscript pages 67–70.

## Adversarial pass 1 — formulas, branches, and endpoint logic

- Checked all six cards against the canonical TeX: Lemma II.2.1, Definition II.2.2, Propositions II.2.3–II.2.4, Definition II.2.5, and Algorithm II.2.6.
- Confirmed that the three results carry their complete manuscript proofs. The two definitions and the algorithm correctly have no invented proof.
- Found and corrected three transcription errors in the explanatory setup: the endpoint labels are denominator-based and need not be left-to-right; `A = 2*pi*abs(qx-p)` and `B = (2*pi/d)*abs(sx-r)`; and the scalar equation uses exponents `s/d` and `q`, not `s` and `dq`.
- Checked the anchored `d`th-root sheet, the opposite endpoint-error signs, the vector cancellation, and the return from the rooted identity to the Ito polynomial.
- Checked both endpoint limits and reproduced the exceptional `n=3` calculation ending in `(2r-1)(r+1)^2 = 0`.
- Confirmed that no stochastic realization, upper-bound theorem, or final Karpelevič–Ito conclusion is assumed on this page.

## Adversarial pass 2 — vocabulary, algorithm, and figures

- Replaced unexplained `gcd` notation by “greatest common divisor” and replaced the potentially opaque phrase “homogeneous identity” by “uncancelled identity.”
- Added a definition of Newton iteration alongside bisection, because Algorithm II.2.6 names both methods.
- Checked that Farey sequence, reduced fraction, primitive lattice vector, mediant, root sheet, scalar residual, subsequential limit, closure, and candidate status are all defined before use.
- Found that the order-three plate incorrectly drew the nonreal arc from `-1`. Redrew it from `exp(2*pi*i/3)` to `-1/2`, leaving the separate real segment from `-1` to `-1/2`.
- Confirmed that the extraction algorithm keeps Farey selection exact and labels the radial solve as the only numerical operation.

## Resolution

The formulas and endpoint geometry now match the canonical manuscript. The page constructs only the candidate carrier and states its still-unproved status precisely.
