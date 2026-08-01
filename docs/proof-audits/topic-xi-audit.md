# Topic XI implementation audit

Canonical scope: Part II, Section II.7, manuscript pages 77–79, followed by the logically deferred Corollary II.6.2 from page 76.

## Adversarial pass 1 — graph determinant and independence

- Checked the displayed order against the logical dependency: Lemmas II.7.1–II.7.2, Theorem II.7.3, Corollary II.7.4, and only then Corollary II.6.2.
- Confirmed that all five cards carry their exact statements and complete manuscript proofs.
- Re-derived the cycle-cover sign from the permutation sign and the selected `-A` entries, including loops.
- Audited the sparse block graph: a simple cycle is either one local `q`-cycle or the unique global cycle, and no local cycle is vertex-disjoint from the global cycle.
- Checked both characteristic-polynomial regimes `s <= dq` and `s > dq`, the active-order bound `max(dq,s) <= n`, endpoint weights, row sums, and absorbing-state padding.
- Confirmed that attainment uses Topic IX only. Topic X enters for the first time in the final squeeze, preserving the promised independent reverse inclusion.

## Adversarial pass 2 — graph vocabulary and visual encoding

- Added the missing definition that graph order `N` is the number of vertices, so the exponent `N-L` in Lemma II.7.1 is interpretable without context.
- Checked that tail-row adjacency, directed simple cycle, vertex-disjoint collection, deterministic block, local return, cross edge, subdivision vertex, active order, sparsity, and attainment are all defined before use.
- Checked the two deterministic graph plates against the proof's route logic. The regime caption was corrected so `s > dq` displays as a mathematical inequality rather than a literal HTML entity.
- Checked the final squeeze plate and explanatory block: `rho <= rho_*` comes from Topic X and `rho_* <= rho` comes from independently proved stochastic attainment.
- Confirmed that Coates, Johnson–Paparella, and Kirkland–Šmigoc are cited exactly in the source shelf for inherited determinant and realization mechanisms.

## Resolution

The realization chapter is self-contained under its displayed imports, and the equality profile is invoked only after the candidate has been realized.
