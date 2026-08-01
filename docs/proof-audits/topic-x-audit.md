# Topic X implementation audit

Canonical scope: Part II, Section II.5 and Theorem II.6.1, manuscript pages 73–76.

## Adversarial pass 1 — monodromy interface and sharp inequality

- Checked all three cards against the canonical TeX: Theorem II.5.1, Lemma II.5.2, and Theorem II.6.1.
- Confirmed that each card includes its exact statement, complete manuscript proof, and a guided explanation that expands rather than replaces the formal proof.
- Checked that the wrapper imports only Part I's proved monodromy/Jensen-sheet conclusions and Topic VIII's new-shell criticality.
- Found that an explanatory block had written `M = Arg(mu^q)`. Corrected it to the manuscript's `M = Arg(mu^q-1)`, retained `A = q*vartheta-2*pi*p`, and stated the common continuous argument branch explicitly.
- Checked the phase calculation `sum u_j = d(A+B)`, the modulus calculation `sum F(u_j) = (dq-s) log rho`, the strict Jensen step, and the trigonometric reduction to the scalar inequality.
- Confirmed that Topic X proves only `rho <= rho_*`. No realization result is imported, and Corollary II.6.2 is deliberately absent from this route.

## Adversarial pass 2 — orientation and first-use definitions

- Added a visible definition of the positive lifted argument `arg_+`, then defined `vartheta` and `y` before the analytic setup uses them.
- Checked that selected multiplier, heterogeneous profile, algebraic padding, Jensen sheet, factor argument, factor potential, and strict Jensen equality are defined at first use.
- Checked the reflection plate and dictionary: conjugation reverses the cell order while preserving denominators, modulus, `d`, `e`, and the absolute scalar equation.
- Checked that the convexity plate shows the intended equality mechanism and that its caption does not claim stochastic attainment.
- Confirmed that source classifications separate the new heterogeneous inequality from its classical Karpelevič, Ito, and Jensen antecedents.

## Resolution

The upper-bound route is logically independent of realization and now uses the correct argument branch throughout.
