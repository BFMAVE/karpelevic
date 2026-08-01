# Topic VIII implementation audit

Canonical scope: Part II, Section II.4, manuscript pages 71–73.

## Adversarial pass 1 — logic, numbering, and dependencies

- Checked all seven cards against the canonical TeX: Proposition II.4.1, Theorem II.4.2, Corollary II.4.3, Proposition II.4.4, Lemma II.4.5, Definition II.4.6, and Proposition II.4.7.
- Confirmed that every formal statement is generated from the manuscript and every one of the six results carries its complete manuscript proof. The only proofless card is Definition II.4.6.
- Checked the two-way stochastic–polygon construction, absorbing-state padding, the unit-modulus area argument, and the two separate clauses of new-shell criticality.
- Found that the explanatory new-shell block had omitted the manuscript hypothesis `N >= 4`. Added it, together with `0 < theta < pi`, before the condition is used.
- Confirmed that the page imports only Topic I's criticality language, Topic II's strict area monotonicity, and the standard background explicitly named in the dependency contract.

## Adversarial pass 2 — non-specialist readability and figures

- Checked every specialist term at first use. Added an explicit definition of “star-shaped with respect to zero” rather than leaving it as unexplained alternate terminology for radial filling.
- Checked that compactness, convex hull, barycentric coordinates, absorbing-state padding, roots of unity, supporting functionals, and ellipticity are either defined in the relevant card or imported visibly.
- Checked both deterministic plates. The eigenvector polygon plate encodes convex averaging; the new-shell plate is explicitly captioned as a logical schematic rather than a computed spectrum.
- Confirmed that the reader distinguishes “new at order N” from “outermost on the order-N ray” and does not describe radial criticality in the wrong direction.

## Resolution

The page is closed under its displayed dependency contract and is ready for local inspection. No novelty claim was expanded beyond the manuscript/source ledger.
