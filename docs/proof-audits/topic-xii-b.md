# Topic XII-B audit record

Route: `/proof/topic-xii/b/`

Canonical source: Part II, remainder of Section II.8, manuscript pages 83–85.

## Adversarial read 1 — mathematical closure and source fidelity

- Confirmed that Lemma II.8.3 and Theorem II.8.4 retain their canonical statements, proofs, numbers, and equation anchors.
- Checked that the unnumbered definition of `K_n` preceding Lemma II.8.3 is reproduced before either result, including the separate value `K_n(pi)=1` and the order-three terminal jump.
- Checked the exhaustive split: a new reduced fraction has denominator exactly `n`; the determinant-one decomposition forces positive coefficients; the two denominator inequalities force the mediant and exclude every other split.
- Checked that the unchanged-cell multiplicity can rise by at most one.
- Checked positivity of both sine coefficients and both exponents in the derivative of the scalar defect.
- Checked the intercept-defect identity’s sign: every omitted factor is positive, so `I_R>1` indeed implies a negative defect at the old radius.
- Checked all endpoint cases, especially `theta=pi` in the comparison from order three to order four.
- Checked that the lower-half-plane conclusion uses only modulus-preserving conjugation.

Issues found and fixed during this read:

- Added definitions of primitive integer vector and determinant-one lattice basis before the lattice decomposition appears.
- Added a concrete scalar-defect example so the final monotone-zero inference does not rely on unexplained “sign comparison” language.
- Stated explicitly that the word “outer” in “candidate outer radius” does not yet claim that the candidate is the boundary of `Theta_n`.

Status after read 1: **pass**.

## Adversarial read 2 — independent post-implementation review

- Verified the generated source hash against the canonical TeX and compared Lemma II.8.3 and Theorem II.8.4 with manuscript pages 83–85.
- Rechecked the four cases as a partition: inherited endpoint, new endpoint, unchanged old cell, and mediant-split old cell. The determinant-one decomposition forces the only inserted fraction to be the mediant, and the floor can change by at most one.
- Recomputed the derivative of the scalar defect and the sign in the intercept-defect identity. The implication `I_R>1 => F_n,theta(rho_-)<0` is correct because every omitted factor is positive.
- Rechecked all endpoint clauses, especially `K_3(pi)=1` versus the one-sided limit `1/2`. Added the missing local anchor for equation (II.8.19), so the proof’s own link now resolves.
- Repaired all cross-page links to Farey adjacency, the scalar equation, the padding sign, and Lemma II.8.1. The route has no unresolved local proof anchors.
- Corrected the glossary phrase “mutually sufficient” to the precise “mutually exclusive and collectively exhaustive.”
- Refined the dependency description: Lemma II.8.1 supplies an intercept comparison, while Lemma II.8.2 supplies the scalar-defect sign directly.
- Read the page linearly as a candidate-versus-actual argument. The visible definition and “no conclusion is hidden in the name” paragraph prevent `K_n` from being mistaken for the already-proved stochastic boundary.

Status after read 2: **pass**. The formal mathematics is unchanged and complete; equation availability, links, and expository precision were improved.
