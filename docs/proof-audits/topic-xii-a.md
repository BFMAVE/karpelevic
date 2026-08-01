# Topic XII-A audit record

Route: `/proof/topic-xii/a/`

Canonical source: Part II, Section II.8 through Lemma II.8.2, manuscript pages 79–83.

## Adversarial read 1 — mathematical closure and source fidelity

- Confirmed that Lemmas II.8.1 and II.8.2 are injected mechanically from the canonical TeX, including their complete proofs and original equation anchors.
- Checked the determinant sign convention against equations (II.8.2)–(II.8.4): the page consistently uses `intercept > 1` if and only if `Delta(1) < 0`.
- Checked every branch of Lemma II.8.1: left subcell with `b>1`, right subcell, exceptional `b=1`, reflected orientation `d<b`, and inherited endpoints.
- Checked the floor argument when `b<d`: Farey adjacency gives `gcd(b,d)=1`; for `b>1`, `b` cannot divide `d`, so the multiplicity does not jump in the stated left-subcell branch.
- Checked that complex multiplication scales real determinants by the positive factor `|V|^(2m)`, so the right-subcell sign cannot reverse.
- Checked Lemma II.8.2’s padded product algebra, phase bookkeeping, Jensen-sheet range, strictness condition, and final monotone-zero comparison.
- Verified that neither proof imports candidate nesting, the final theorem, or stochastic attainment. The only deep imported estimate is Topic X’s heterogeneous sharp inequality.

Issues found and fixed during this read:

- Added definitions of floor, lifted argument, heterogeneous product, reciprocal radius, positive-real intercept, signed determinant test, and the log-radial function.
- Made explicit that appending `mu^(-q)(mu^q-0)=1` changes the factor count without changing the product value.
- Marked the mediant plate as schematic so its curves cannot be mistaken for computed stochastic boundaries.

Status after read 1: **pass**.

## Adversarial read 2 — independent post-implementation review

- Verified the generated source hash against the canonical TeX: `36e757ad28970f5f55517a83f3218455d5c343aa1d828bc8a549739fc351dcef` in both places.
- Compared the complete formal statements and proofs of Lemmas II.8.1 and II.8.2 with manuscript pages 79–83. Their hypotheses, case order, signs, strictness clauses, and endpoint qualifications are unchanged.
- Found a real dependency gap: the proof linked to equations (II.8.1)–(II.8.4), but the unnumbered log-line and signed-intercept setup preceding Lemma II.8.1 was not rendered. Added all four formulas, their hypotheses, anchors, and the endpoint derivative signs before the result.
- Rechecked the left subcell, right subcell, `b=1` exception, reflected denominator orientation, padded phase identity, Jensen-sheet inclusion, and strict unequal-profile conclusion. No mathematical defect was found in either formal proof or guided proof.
- Repaired every cross-topic formal-proof link so it now reaches the corresponding equation or result in Topics IX or X. There are no unresolved local anchors on the route.
- Added first-use explanations of rooted chord, relative interior of a segment, floor, coprime denominators, and `sec u=1/cos u`.
- Added a visible warning separating denominator `d` from multiplicity `m`, a potentially serious source of confusion on a linear read.
- Revised the padding plate so `beta_1, ..., beta_m` denotes an arbitrary number of factors rather than accidentally suggesting that the theorem assumes exactly three.

Status after read 2: **pass**. No proof correction was needed; the fixes close missing setup, navigation, notation, and figure-generalization gaps.
