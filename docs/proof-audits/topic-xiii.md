# Topic XIII audit record

Route: `/proof/topic-xiii/`

Canonical source: Theorem II.3.1 and Part II, Section II.9, manuscript pages 71 and 85–89.

## Adversarial read 1 — mathematical closure and source fidelity

- Confirmed that Lemma II.9.1 and Proposition II.9.2 include mechanically generated canonical statements and complete proofs.
- Confirmed that Theorem II.3.1 retains its original manuscript number and statement, while its complete canonical proof is attached only after the Section II.9 prerequisites.
- Checked the radial-boundary lemma in both directions: maximal points are non-interior; continuity gives a two-dimensional neighborhood below the graph; positivity plus compactness puts the origin in the interior.
- Recomputed the order-three trace bound: `(tr A)^2 <= 3 tr(A^2)` gives `3y^2 <= (1-x)^2`, and nonnegative diagonal gives `x >= -1/2`.
- Checked both explicit order-three realizations, the terminal polynomial factorization, the real-root interval, the vertical nonreal branch, and the two scalar-cell identifications.
- Checked the induction’s new-shell branch against the equality-profile corollary.
- Checked the inherited branch’s full squeeze: order embedding, induction, candidate nesting, and attainment force equality throughout.
- Checked endpoint realization by a cyclic permutation matrix padded with absorbing states.
- Checked that the continuous-radius lemma is used only for `n>=4`; the discontinuous order-three terminal graph is handled directly.
- Checked that the theorem is classified as classical and cites Karpelevič and Ito; no novelty label is attached to the theorem statement.

Issues found and fixed during this read:

- Fixed a runtime JSX error caused by unescaped braces in the deterministic order-three SVG label.
- Added first-use explanations of Euclidean open disk, the extreme value theorem, conjugate-pair spectra, the stochastic eigenvalue `1`, `tr(A^2)`, and the precise Cauchy–Schwarz inequality used.
- Added a visual two-branch induction map and explicitly separated actual radius `R_n` from candidate radius `K_n`.

Status after read 1: **pass**.

## Adversarial read 2 — independent post-implementation review

- Verified the generated source hash against the canonical TeX and visually inspected manuscript pages 85–89. Lemma II.9.1, Proposition II.9.2, Theorem II.3.1, and the complete final proof remain mechanically identical to the manuscript.
- Rechecked the radial-boundary lemma: maximal points are non-interior, continuity supplies an open disk below the graph, and the positive minimum on the compact circle handles the origin.
- Recomputed the order-three trace inequalities, both explicit realization families, both scalar-cell identifications, and the endpoint jump. No defect was found in the formal or guided calculation.
- Rechecked the induction branch by branch. The new-shell branch uses the equality-profile result; the inherited branch gives `R_n=R_(n-1)=K_(n-1)<=K_n<=R_n`; endpoint roots of unity and the continuous full-circle radius then complete the topological boundary argument.
- Found a mathematically misleading plate: it drew the segment from `-1` to `-1/2` at the height of `conj(omega)`, rather than on the real axis. Redrew the complex-plane geometry at the correct scaled coordinates: `1` and `-1/2` lie on the real axis, `omega` and `conj(omega)` form the vertical side, and the extra real segment runs from `-1` to `-1/2`.
- Added first-use definitions of the actual radius `R_n` and candidate radius `K_n` before Proposition II.9.2 uses them, and defined the radial hull explicitly.
- Clarified that the boundary lemma uses Euclidean interior in the full plane, not relative interior in a line or curve.
- Split the Topic X and Topic XI dependencies so the upper comparison and independent realization/equality steps link to their correct chapters. Topic XII now links directly to Part B, where `K_n` and candidate nesting are stated.
- Repaired all sixteen cross-topic references in the formal proofs. Every external target was checked, and the Topic XIII route has no unresolved local anchors.

Status after read 2: **pass**. The mathematical arguments required no correction; one mathematical figure and several dependency/accessibility defects were corrected.
