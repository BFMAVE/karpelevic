# Topic IV authoring blueprint — From endpoint order to contact reduction

Status: local authoring document; not a public page and not a substitute for the canonical manuscript.

Canonical authority: `Complete_Karp_arXiv.tex`, lines 1606–2587, checked against PDF pages 19–30. Exact labels, hypotheses, endpoint inclusions, exceptional shift cases, and equation numbers must agree with that source.

## Page identity and internal A/B structure

This remains one website page with the global proof-reader header and one Topic IV tab. Its mathematical body is divided into two internally linked movements:

> Topic IV of XIV · 5 selection results · 5 mutation results<br>
> **From endpoint order to contact reduction**<br>
> How does a geometric contact become a legal move on a finite cyclic board?

- **IV-A — From endpoint counts to one-sided contact.** Lemma 4.10 through Lemma 4.14.
- **IV-B — From one exact surgery to one strict block.** Proposition 5.1 through Lemma 5.5.

The sticky local contents should show both A and B, but the page is not split into two routes. A reader completing IV-A has exactly the data needed to begin IV-B.

## Reader promise

By the end, a reader who knows the earlier topics should be able to explain:

1. why one of the two half-open orientations gives a collision-free global contact labelling;
2. why an order-preserving bijection of two cyclic `N`-sets is a single shift by `κ`;
3. why the contact angle lies strictly between `(κ-1)/N` and `κ/N`;
4. how replacing one polygon vertex by its image contact is a genuine geometric operation, not merely a chip-game metaphor;
5. why a lexicographically minimal reachable contact pattern consists of one consecutive block of length at least `gcd(N,κ)`.

## Exact manuscript inventory

### IV-A — endpoint order

- **Lemma 4.10 — Finite cyclic endpoint ledger**, PDF pages 19–20, TeX label `lem:cyclic-endpoint-ledger`; equations (4.5) and (4.6).
- **Lemma 4.11 — Cyclic interlacing with endpoint bookkeeping**, PDF pages 20–21, TeX label `lem:cyclic-interlacing`; equations (4.7)–(4.11).
- **Corollary 4.12 — Collision-free global half-open ownership**, PDF page 21, TeX label `cor:global-half-open-ownership`.
- **Lemma 4.13 — One-sided contact representative**, PDF page 22, TeX label `lem:one-sided-contact`; equations (4.12)–(4.14).
- **Lemma 4.14 — Exact lifted endpoint paths**, PDF page 23, TeX label `lem:lifted-endpoint-paths`; equations (4.15)–(4.17).

The displayed restriction `1≤κ<N` is equation (4.18). It is a scope condition for the mutation module, not a conclusion of Lemma 4.14.

### IV-B — contact mutation and reduction

- **Proposition 5.1 — Contact-surgery certificate: the exact local move**, PDF pages 24–27, TeX label `lem:contact-surgery`; equations (5.1)–(5.8).
- **Corollary 5.2 — Intrinsic form of the exact mutation law**, PDF page 27, TeX label `cor:intrinsic-mutation-law`; equations (5.9) and (5.10).
- **Corollary 5.3 — Geometric realization of every legal chip sequence**, PDF page 28, TeX label `cor:legal-chip-sequence`.
- **Corollary 5.4 — Boolean sweeps are geometrically reachable**, PDF page 28, TeX label `cor:boolean-sweeps-geometric`.
- **Lemma 5.5 — Reduced strict block and its first record**, PDF pages 28–30, TeX label `lem:one-block`; equations (5.11)–(5.18).

## Dependency ledger — no forward assumptions

### Imported from Topic I

- Definition 1.1: `N`-criticality.
- Definition 1.2: strict polygon, oriented sides, half-open side notation, one-sided contact representation, successor `s`, strict set `I`, and contact rotation `σ`.
- Proposition 2.3: real-linear covariance of contact geometry; needed only for Corollary 5.2’s intrinsic formulation.
- Lemma 2.4: coordinate reversal and the exact conversion of left- and right-half-open conventions.
- Lemma 2.5: `0∈int(P)`, so every vertex is nonzero and polar angles can be lifted.
- Lemma 2.6: cyclic order on a convex boundary.
- Lemma 2.7: determinant criterion for strict convex position; used in Proposition 5.1.
- Lemma 2.10: angular monotonicity along a positively oriented strict polygon; used in Lemmas 4.13 and 4.14.

### Imported from Topic II

- Theorem 3.2: hereditary saturation, especially full side touching and full image-vertex touching for every invariant polygon with at most `N` vertices.
- Lemma 4.1: a touched side contains an image vertex.

### Imported from Topic III

- Definition 4.2: right-half-open ownership.
- Lemma 4.3: half-open side atlas and zero-side sets.
- Lemma 4.4: boundary-face rigidity.
- Lemma 4.5: boundary segment locator.
- Lemma 4.6: labelled side-matrix certificate.
- Lemma 4.7: ownership of unchanged image vertices after local replacement.
- Lemma 4.8: edge-cap clipping and exact vertex count.
- Lemma 4.9: least-area cap bound.
- Lemmas A.4 and A.5: compactness/area tools, used through Lemma 4.9 but not re-proved here.

### Direct dependencies within Topic IV

- Lemma 4.10 is finite combinatorics and has no geometric dependency.
- Lemma 4.11 uses Lemma 4.10; Topic III Lemmas 4.8 and 4.9; Topic II Lemma 4.1 and Theorem 3.2; and Topic I Lemma 2.4.
- Corollary 4.12 uses Lemma 4.11 and Topic III Lemma 4.3.
- Lemma 4.13 uses Lemmas 4.9 and 4.11, Corollary 4.12, and Topic I angular monotonicity.
- Lemma 4.14 uses Lemma 4.13 and repeats its lift check explicitly.
- Proposition 5.1 uses the full right-admissible system from Lemma 4.13; Topic III Lemmas 4.3–4.7; Topic II Theorem 3.2; and Topic I Lemma 2.7.
- Corollary 5.2 uses Proposition 5.1 and Topic I Proposition 2.3.
- Corollary 5.3 is induction on Proposition 5.1.
- Corollary 5.4 is a finite induction using Corollary 5.3/Proposition 5.1.
- Lemma 5.5 uses Lemma 4.13 and Corollary 5.4.

No proof in Topic IV may assume the finite rotation theorem of Topic V. Equation (5.14) must be proved directly as a first-entry record of the residues `[mκ]_N`; it is only interpreted arithmetically in the next topic. The special branch `κ=N` is excluded from IV-B by (4.18). The page should state that the mutation conclusions are conditional on the proper-shift range and should not borrow the later proof of the identity-shift branch.

## First-use glossary for a non-specialist

Use short local `<details>` explainers immediately before the relevant formula.

- **Cyclic word:** a finite list whose last entry is followed again by the first; indices are read modulo `N`.
- **Binary word:** a word whose entries are only `0` or `1`.
- **Transition `0→1` or `1→0`:** an adjacent change as the cyclic word is read once around, including the wrap from index `N-1` to `0`.
- **Interlacing:** two cyclic point sets interlace when exactly one point of one set occurs in each prescribed gap between consecutive points of the other.
- **Orientation reversal by conjugation:** complex conjugation reflects the plane and reverses boundary order. Reindexing `x̃_i=conj(x_{-i})` restores positive cyclic order.
- **Cyclic-order-preserving bijection:** a one-to-one correspondence that sends every successor to the successor of its image. Such a map of two labelled cyclic `N`-sets is a fixed shift.
- **Integer lift `κ`:** the shift is first defined modulo `N`; choosing `κ∈{1,…,N}` records which full-angle interval contains the multiplier angle and avoids an unrecorded wrap.
- **Lifted polar angle:** a real number `Θ_i`, not merely an angle modulo `2π`, chosen so `Θ_{i+N}=Θ_i+2π`.
- **Winding integer:** the integer `m_i` in an equation that compares angles before deciding which `2π`-translate is correct.
- **Barycentric coefficients on a side:** `ξ_i=β_ix_{i-1}+α_ix_i`, with nonnegative coefficients summing to one. `β_i=0` means the contact is the endpoint `x_i`; `β_i>0` means it is in the side interior because `α_i>0` already.
- **Right-admissible contact system:** the tuple `(P,λ,κ;(α_i,β_i))` satisfying (4.12), with `P` a strict invariant `N`-gon for an `N`-critical map and exactly one image vertex in every right-half-open side.
- **Strict field / endpoint field:** field `i` is strict if `β_i>0`; it is an endpoint field if `β_i=0`.
- **Chip:** a visual marker for a strict field. It is a status marker, not a polygon vertex or image vertex.
- **Legal move:** a move at field `i` is legal when `i` is strict and field `i+1` is endpoint. Geometrically it replaces `x_i` by `ξ_i`.
- **Source and target:** source field `i` loses its strict contact; target field `i+κ` receives the strict status. This language concerns statuses; the `N` geometric image vertices remain distinct.
- **Collision:** if target `i+κ` was already strict, the set of strict statuses loses one element. It does not mean that geometric vertices collide.
- **Cyclic group:** a maximal consecutive block of occupied fields, where adjacency includes the wrap-around pair.
- **Boolean sweep:** moving chips of one group from right to left according to the same legal rule until the whole group has translated by `κ`, unless a collision occurs first.
- **Lexicographic minimum:** minimize the number of strict contacts first; among ties, minimize the number of strict groups.
- **Greatest common divisor and orbit:** `δ=gcd(N,κ)`; repeatedly adding `κ` visits exactly one residue class modulo `δ`, and each such orbit has `N/δ` fields.
- **Representative `[a]_N`:** the unique integer in `{0,…,N-1}` congruent to `a` modulo `N`.
- **First record in Lemma 5.5:** the first positive time `h` at which `[hκ]_N` reaches the interval beginning at `N-φ`; minimality makes the value exactly `N-φ` and all earlier values smaller. Do not require Topic V’s record-vector vocabulary.

## IV-A — From endpoint counts to one-sided contact

### Visual reset from Topic III

Begin with `P` and `Q=λP`, both with `N` cyclically ordered vertices on `∂P`. Each half-open gap from `y_j` to `y_{j+1}` receives two small counters:

- `r_j`: the number of `P`-vertices in `(y_j,y_{j+1}]_{∂P}`;
- `c_j`: `1` if the left endpoint `y_j` is itself a `P`-vertex, otherwise `0`.

State plainly that Topic III has already proved `r_j∈{0,1,2}` with at most one `2`; the present page determines how those counts fit together around the entire cycle.

### Lemma 4.10 — Finite cyclic endpoint ledger

**Intuitive purpose.** A single overfull gap (count `2`) creates a deficit somewhere else (count `0`). The endpoint-status word can shift the half-open convention, and the lemma proves that the opposite half-open counts all become exactly one.

**Complete proof architecture.**

1. If no `r_j` equals `2`, every `r_j≤1`; since `N` entries sum to `N`, every entry equals `1`.
2. If `r_s=2`, its excess above the baseline `1` is one.
3. No second entry exceeds `1`, so the fixed total forces a unique `r_t=0` and all other entries to equal `1`.
4. Hypothesis (4.5) gives a `0→1` transition of the binary cyclic word at `s`.
5. In any cyclic binary word the number of upward transitions equals the number of downward transitions; make this visible through the telescoping identity `Σ(c_{j+1}-c_j)=0`.
6. Every downward transition is allowed only at an index with `r_j=0`; the zero is unique, so the only downward transition occurs at `t`.
7. Equality of transition counts makes the transitions at `s` and `t` unique; elsewhere `c_j=c_{j+1}`.
8. Substitute into `ℓ_j=r_j+c_j-c_{j+1}`: at `s`, `2+0-1=1`; at `t`, `0+1-0=1`; elsewhere, `1+0=1`.

**Exact finite examples.** Draw two `N=8` rings. The first has all `r_j=1`. The second has one `2`, one `0`, and a binary word with precisely the required rise and fall. A stepper computes every `ℓ_j` visibly.

**Provenance.** Previously known in the current site ledger. Cite Dmitriev–Dynkin (1946), with Swift (1972) as the accessible English translation route, for the finite endpoint argument. State that the exact `r,c,ℓ` notation is the manuscript’s explicit modern packaging.

### Lemma 4.11 — Cyclic interlacing with endpoint bookkeeping

**Intuitive purpose.** The cap bound is local. This lemma closes the cycle: either every right-half-open `Q`-gap contains exactly one `P`-vertex, or every left-half-open gap does. In the second case the desired right-half-open ownership is already present; in the first, conjugation reverses the picture correctly.

**Complete proof architecture.**

1. Define `c_j` and `r_j` from the actual geometry; the right-half-open gaps partition `Ext(P)`, so `Σr_j=N`, equation (4.8).
2. For a nontrivial cap, relate the closed-arc count to the gap count: `k_j=r_j+c_j`, equation (4.9).
3. Combine Topic III’s cap lemmas: shared-side edges have `r_j≤1`; nontrivial caps have `k_j≤2`; at most one can attain `2`. Conclude (4.10): `0≤r_j≤2`, at most one `2`.
4. If there is no `2`, the total forces all `r_j=1`, giving alternative (i).
5. Otherwise use the total to obtain the unique pattern (4.11): one `2` at `s`, one `0` at `t`, all other counts `1`.
6. From `k_s=r_s+c_s≤2`, infer `c_s=0`.
7. Prove `c_{s+1}=1`: if `y_{s+1}` were not a `P`-vertex, the two `P`-vertices inside the open gap would be consecutive; their joining side would contain no `Q`-vertex, contradicting full side touching and Lemma 4.1.
8. Consider a downward endpoint transition `c_j=1,c_{j+1}=0` away from `t`. There `r_j=1`, hence `k_j=2`.
9. Show this cap cannot be shared-side: a shared-side gap starting at a `P`-vertex and ending before the next `P`-vertex would have `r_j=0`. Therefore it would be a second nontrivial `k=2` cap, impossible.
10. All hypotheses of Lemma 4.10 now hold; conclude every opposite count `ℓ_j=#(Ext(P)∩[y_j,y_{j+1}))` equals one, alternative (ii).
11. Translate gap interlacing into side ownership in alternative (ii): if `x_j` is the unique vertex in `[y_j,y_{j+1})`, then `x_{j-1}<y_j≤x_j`, so `y_j∈E_j^+`.
12. In alternative (i), index the unique `P`-vertex in `(y_j,y_{j+1}]` and conjugate. Complex conjugation reverses order; the reindexing `x̃_i=conj(x_{-i})` restores positive order.
13. Track endpoints exactly: conjugating `[x_j,x_{j+1})` produces `(x̃_{-j-1},x̃_{-j}]`, a right-half-open side.
14. Conjugation bijects vertices and sends `Q` to `Q̃=conj(λ)P̃`; conclude right-half-open ownership in the reflected configuration.

**Required visual.** Plate IV.1 has a synchronized geometry/count ledger. It must show both alternatives and an explicit mirror operation with arrows demonstrating which endpoint changes from included to excluded.

**Provenance.** Previously known. Cite Dmitriev–Dynkin (1946), supporting one-sided endpoint/contact argument, with Swift (1972) as the English translation route. State that the manuscript’s `r,c,ℓ` ledger and all endpoint inclusions are a fuller modern proof.

### Corollary 4.12 — Collision-free global half-open ownership

**Intuitive purpose.** Interlacing becomes a labelled bijection: every half-open side owns at least one image vertex; equal finite cardinalities and disjointness force exactly one.

**Complete proof architecture.**

1. Invoke Lemma 4.3: the `N` right-half-open sides are pairwise disjoint and cover `∂P`.
2. In the selected orientation from Lemma 4.11, each side receives at least one `Q`-vertex.
3. There are exactly `N` sides and exactly `N` image vertices.
4. Disjointness prevents one image vertex from being counted twice.
5. A surjection between two finite `N`-element sets is a bijection; hence no side owns two and no vertex has two owners.
6. Label the unique owned image in `E_i^+` by `ξ_i`.

**Provenance.** Previously known. Cite Dmitriev–Dynkin (1946), Supporting Theorem III as identified in the local literature audit, with Swift (1972) for the English translation.

### Lemma 4.13 — One-sided contact representative

**Before the statement.** Define an order-preserving bijection of cyclic sets and prove in a one-paragraph explainer that it is a shift: choose the image of one index, then successor preservation determines every other image.

**Intuitive purpose.** Global ownership tells us where each image vertex lands; cyclic order says all source-to-side labels differ by one fixed shift `κ`. Lifted angles then turn this discrete shift into a sharp rational bracket for the multiplier angle.

**Complete proof architecture.**

1. Choose the least-area normalized representative supplied by Lemma 4.9.
2. Select the orientation from Lemma 4.11: keep `(P,λ)` or replace it by the conjugate configuration. Call the resulting multiplier `μ`.
3. Corollary 4.12 gives exactly one image vertex `ξ_i` in each `E_i^+`.
4. Multiplication by nonzero `μ` preserves orientation and cyclic order. Therefore the incidence bijection from source vertices to target sides preserves successors.
5. Identify both cyclic `N`-sets with `Z/NZ`; after fixing one image, successor preservation gives a single translation `j↦j+κ`.
6. Choose the integer lift `κ∈{1,…,N}` and write `ξ_i=μx_{i-κ}`.
7. Because `ξ_i∈(x_{i-1},x_i]`, write it uniquely as `β_ix_{i-1}+α_ix_i`, with `α_i>0`, `β_i≥0`, `α_i+β_i=1`, equation (4.12).
8. Choose real lifted angles `Θ_{i+N}=Θ_i+2π` and positive multiplier argument `ϑ∈(0,2π)`.
9. Side incidence gives (4.14) with an a priori winding integer `m_i`.
10. Eliminate `m_i` separately. If `κ<N`, the relevant angle-difference interval spans `κ` positive gaps and omits at least one, so it lies in `[0,2π)`. If `κ=N`, compute the two endpoints explicitly and obtain `(0,2π]`. Since `ϑ∈(0,2π)`, only `m_i=0` fits.
11. Sum the genuine lifted inequalities over one period. Write out the two index-shift identities `ΣΘ_{i-κ}=ΣΘ_i-2πκ` and `ΣΘ_{i-1}=ΣΘ_i-2π` rather than calling them obvious.
12. Obtain `2π(κ-1)<Nϑ≤2πκ`.
13. Exclude equality on the right: equality of a sum of nonpositive deficits forces equality in every right-hand contact inequality, so all contacts are endpoints.
14. Endpoint equalities give `μx_{i-κ}=x_i`. Following one orbit of the shift, whose length is `N/gcd(N,κ)`, yields `x_i=μ^{N/gcd(N,κ)}x_i`.
15. Each vertex is nonzero because `0∈int(P)`; `|μ|<1`, so the last equality is impossible.
16. Divide by `2πN` to obtain `(κ-1)/N<y<κ/N`, equation (4.13).
17. If `κ=N`, the source of field `i` is `x_i`; an endpoint would give `μx_i=x_i`, again impossible, so every contact is strict.

**Required visual.** Plate IV.2 combines a cyclic shift board with an unwrapped angle line. Arrows `i-κ→i` on the ring correspond to intervals `(Θ_{i-1},Θ_i]` on the line. A “why no hidden full turn?” toggle displays the admissible difference interval and eliminates `m_i≠0`.

**Provenance.** Previously known. Cite Dmitriev–Dynkin (1946), Basic Theorem, and Karpelevič (1951), §2 where that contact theorem is quoted/used, with Swift (1972) as the translation route. State that the manuscript supplies the explicit cyclic-shift proof, winding audit, and strict angle bracket.

### Definition inserted after Lemma 4.13 — right-admissible contact system

This is an unnumbered manuscript definition and must remain unnumbered. Display the tuple and list every included condition. Do not define it circularly as “the thing supplied by the previous lemma.” The reader must be able to audit later uses:

- `P` is a positively oriented strict invariant `N`-gon;
- `λ` is the fixed contact multiplier for an `N`-critical map;
- `κ` is the chosen integer lift;
- equation (4.12) holds for every field;
- every right-half-open side owns exactly one image vertex;
- full side and image-vertex touching are included through Theorem 3.2.

Explain that the manuscript now renames the selected multiplier from `μ` to `λ` and never silently switches orientation during the mutation module.

### Lemma 4.14 — Exact lifted endpoint paths

**Intuitive purpose.** An endpoint contact is an exact angular equality. Consecutive endpoint contacts telescope, so repeated contact motion can be followed on the real line without losing a multiple of `2π`; the first strict contact turns the last equality into a strict interval.

**Complete proof architecture.**

1. Start again from side incidence with a possible integer `m_j`.
2. Repeat, rather than merely cite, the two range checks from Lemma 4.13 to force `m_j=0` and obtain (4.15).
3. At an endpoint contact, `λx_{j-κ}=x_j`, so the right-hand inequality is equality in lifted angle.
4. If destination fields `a+κ,…,a+tκ` are all endpoint contacts, apply the equality successively and telescope to `Θ_a+tθ=Θ_{a+tκ}`, equation (4.16).
5. If only the first `t-1` are endpoint contacts, use their equality to arrive at the source angle for the last field.
6. Apply the strict two-sided side-interior inequality at destination `a+tκ` to obtain (4.17).

**Required visual.** Plate IV.3 is an unwrapped staircase: endpoint steps land exactly on labelled angle marks; the first strict step lands inside a highlighted open interval.

**Provenance.** Classical result. Cite A. Hatcher, *Algebraic Topology* (2002), §1.3 for lifting through the universal cover, together with Schneider (2014), Chapter 1, for the convex-boundary angular order. State that the exact endpoint-path notation is adapted to this manuscript.

### Proper-shift scope, equation (4.18)

Give this a visible but concise boundary card:

> The mutation argument assumes `1≤κ<N`. When `κ=N`, Lemma 4.13 has already shown that every contact is strict, so there is no endpoint gap on which the local mutation rule can start. Topic IV makes no mutation claim for that branch.

This explains the scope without using any later theorem.

## IV-B — From exact contact surgery to one strict block

### Opening dictionary — geometry and chips shown together

Show two synchronized views from the start:

- **Geometry:** replace `x_i` by its strict image contact `ξ_i` and clip the corner.
- **Finite board:** remove the chip at `i` and add one at `i+κ`; if that target is already occupied, the occupied set loses one element.

State twice, in caption and prose, that image vertices never coalesce. The Boolean board tracks strict/endpoint status only.

### Shift-boundary register before Proposition 5.1

The manuscript’s coincidence cases must be explained, not placed in a dense unexplained formula row:

- `κ=1`: the changed source field `i+κ` is also adjacent field `i+1`.
- `κ=2`: the preceding image for the changed target is the unchanged endpoint at `i+1`.
- `κ=N-1`: the changed target is the preceding field `i-1`, but its target-side endpoints are unchanged.
- generic `3≤κ≤N-2`: no special coincidence.
- at `N=3`, `κ=2` and `κ=N-1` are the same case; use the `κ=2` row.

Use four small ring diagrams rather than a table.

### Proposition 5.1 — Contact-surgery certificate: the exact local move

**Intuitive purpose.** This is the bridge that licenses every later chip argument. It must prove all of the following for the primed polygon: exact clipping, `N` distinct extreme vertices, invariance, full touching, correct half-open labels, updated coefficients, no ownership collision, and preservation of the integer lift `κ`.

**Complete proof architecture.**

#### Setup

1. Fix a right-admissible system and `S={j:β_j>0}`.
2. Legality gives `i∈S` and `i+1∉S`, hence `ξ_i` is strict in `E_i` and `ξ_{i+1}=x_{i+1}`.
3. Set `x'_i=ξ_i`, leave every other vertex fixed, define `P'=conv{x'_j}`, and define new images `η_j=λx'_{j-κ}`.

#### Step 1 — prove this is exactly one cap clip

4. Half-open ownership and global bijectivity put no other image vertex in the boundary gap from `ξ_i` to `ξ_{i+1}`; cyclic order makes them consecutive vertices of `Q`.
5. Define the retained half-plane `H={z:D(ξ_i,x_{i+1},z)≥0}`; because `[ξ_i,x_{i+1}]` is an edge of `Q`, `Q⊆H`.
6. Write `ξ_i=βx_{i-1}+αx_i`, with `0<α,β<1`.
7. Compute equation (5.3): `D(ξ_i,x_{i+1},x_i)=-βD(x_{i-1},x_i,x_{i+1})<0`, so `x_i` is discarded.
8. Compute equation (5.4) for every other displayed vertex, explicitly noting why one summand is nonnegative and the other positive, including `k=i-1`.
9. Conclude the cutting line meets `∂P` exactly at `ξ_i,x_{i+1}` and that (5.5) holds: `P'=P∩H` with only `x_i` replaced.
10. From `Q⊆P'⊆P`, derive (5.6): `λP'⊆λP=Q⊆P'`.
11. Check the three changed consecutive-turn determinants; all are strictly positive.
12. Combine those signs with the convex-intersection description to prove the displayed primed list contains `N` distinct extreme vertices in positive order. Thus `P'` is strict.
13. Invoke hereditary saturation for the same `N`-critical multiplier to recover full side and image-vertex touching for `P'`.

#### Step 2 — exhaust all unchanged fields

14. Put `j_0=i+κ` and list the fields `i`, `i+1` when `κ≠1`, `j_0`, and all remaining fields.
15. Prove the listed cases are disjoint and exhaustive, treating `κ=1` by deliberately omitting the unchanged `i+1` row.
16. Record the endpoint status at field `i`, the unchanged endpoint at `i+1` when its source is unchanged, and all genuinely unchanged incidences. Only `η_{j_0}=λξ_i` remains.

#### Step 3 — locate the changed image

17. Set `A=λx_{i-1}=ξ_{j_0-1}` and `B=λx_i=ξ_{j_0}`.
18. Since `x_{i-1}≠x_i` and `λ≠0`, one has `A≠B`. Linearity gives (5.7): `η_{j_0}=βA+αB`, a strict interior point of `[A,B]`.
19. Verify (5.8), `A∈E'^{+}_{j_0-1}` and `B∈E'^{+}_{j_0}`, in the three coincidence regimes `κ=1`, `κ=2`, and the generic case. These diagrams must include `κ=N-1` as a labelled generic-incidence subcase.
20. Since `x'_i` is extreme and `λ≠0`, `η_{j_0}=λx'_i` is a vertex of `λP'`; full vertex touching puts it on `∂P'`.
21. Apply Topic III Lemma 4.5 to the primed polygon and the strict mixture of `A,B`. Obtain `A=x'_{j_0-1}` and `[A,B]⊆E'_{j_0}`.
22. Make the manuscript audit finding explicit: for `κ≥2`, the identity `A=ξ_{j_0-1}=x'_{j_0-1}` forces field `j_0-1` to have already been an endpoint. For `κ=2` this is the legality hypothesis; for `κ≥3` it is a consequence, not an added assumption.
23. Parameterize `B=A+t(x'_{j_0}-A)`, `t∈(0,1]`, and substitute into (5.7).
24. Read off `α'_{j_0}=α_it∈(0,1)` and `β'_{j_0}=1-α_it∈(0,1)`.

#### Step 4 — global label and matrix audit

25. Combine the field cases: `i` changes strict→endpoint, `i+κ` is strict after surgery, all other statuses remain. This gives (5.1) and (5.2).
26. Rebuild the complete half-plane representation of the primed strict polygon.
27. Use the exhaustive incidence list to place every `η_j` in its specified `E_j'^{+}`; half-open disjointness rules out global collisions.
28. Apply Lemma 4.6 to the primed vertices. In endpoint columns obtain the original side determinant; in barycentric columns obtain its nonnegative convex combination.
29. Conclude independently from the labelled matrix that all new images lie in `P'` and have the claimed exact side zeros.
30. Verify `η_j=λx'_{j-κ}` for every `j` and that the target field of source `j-κ` remains exactly `j`.
31. Therefore the integer lift `κ`, not only its residue class, is preserved; all right-admissibility requirements are now checked.

**Required visual.** Plate IV.4 is the central synchronized proof plate: a four-stage exact SVG (“before,” “clip,” “changed image located,” “final labels”) alongside the chip update. Every determinant sign in (5.3)–(5.4) should be inspectable from the drawn vertices. Long algebra remains in the collapsible proof, while the visual proof map remains visible.

**Provenance.** **No public category badge under the author’s Karpelevič-only rule.** This does not create a fifth category. Historical antecedent: F. I. Karpelevič, “On the characteristic roots of matrices with nonnegative elements,” *Izv. Akad. Nauk SSSR Ser. Mat.* 15(4) (1951), 361–383, §3, Lemma 1. The local literature audit judges the exact side labels and global ownership certificate substantially fuller than the historical argument, but the statement is not marked “Previously known” until an independent complete source is verified.

### Corollary 5.2 — Intrinsic form of the exact mutation law

**Intuitive purpose.** Proposition 5.1 was indexed. This corollary removes the dependence on the chosen numbers: “next side” is `s`, and “side reached by the contact rotation” is `σ`.

**Complete proof architecture.**

1. Positive side indexing gives `s(E_i)=E_{i+1}`.
2. Since the head of `E_i` is `x_i`, calculate `σ(E_i)=χ(x_i)=E_{i+κ}`.
3. Identify strict fields with the intrinsic strict side set `I`.
4. Translate indexed legality `i+1∉S` into intrinsic legality `s(E_i)∉I`.
5. Translate (5.2) into `I'=(I\{e})∪{σ(e)}`, equation (5.10).
6. Proposition 5.1 preserves `κ`, hence the same `σ`.
7. Apply Proposition 2.3 to carry the statement through invertible real-linear conjugacy with the transported boundary orientation.
8. State explicitly that the contact orientation selected in Lemma 4.11 is never reversed inside the mutation module.

**Provenance.** No public badge under the Karpelevič-only rule. Cite Karpelevič (1951), §3, for the chip-move antecedent; the intrinsic covariance formulation is the manuscript’s packaging.

### Corollary 5.3 — Geometric realization of every legal chip sequence

**Intuitive purpose.** A legal finite word of chip moves can be trusted: after each move there is an actual strict invariant polygon whose strict fields are exactly the new Boolean state.

**Complete proof architecture.**

1. Induct on sequence length.
2. The empty sequence is the original right-admissible polygon.
3. At an induction step, Boolean legality is exactly the pair of geometric hypotheses in Proposition 5.1 for the current polygon.
4. Apply Proposition 5.1 to produce the next right-admissible polygon.
5. Its conclusion preserves the one-sided convention and integer lift, so the next move is interpreted in the same coordinate system.
6. Equation (5.2) matches the Boolean update exactly.

**Provenance.** No public badge under the Karpelevič-only rule. Cite Karpelevič (1951), §3, “admissible” chip configurations as the historical antecedent.

### Corollary 5.4 — Boolean sweeps are geometrically reachable

**Intuitive purpose.** This specializes Corollary 5.3 to the right-to-left group sweeps used in Lemma 5.5 and makes explicit that no extra geometric-reachability assumption is hidden there.

**Complete proof architecture.**

1. Induct over the fields `i_1,…,i_m` of a proposed finite sweep.
2. At each stage the current Boolean source is strict and its right neighbour is endpoint; this is exactly Proposition 5.1’s legality condition.
3. Apply the proposition and update the strict set by (5.2).
4. Preserve right-admissibility and `κ` at every stage.
5. Conclude the entire Boolean state sequence is realized by polygons `P^{(0)},…,P^{(m)}`.

**Required visual for Corollaries 5.3–5.4.** Plate IV.5 is a keyboard-stepper with two rows: a ring of status chips and a schematic polygon. It must never imply that the chip itself is a moving geometric point; a permanent legend says “chip = strict-contact status.”

**Provenance.** No public badge under the Karpelevič-only rule. Cite Karpelevič (1951), §3, group-sweep mechanism.

### Lemma 5.5 — Reduced strict block and its first record

**Before the statement.** Define the score, groups, `δ=gcd(N,κ)`, `κ`-orbits, and `[a]_N`. Give a tiny `N=12,κ=8` example: `δ=4`, so there are four orbits, each of length three. Do not imply this example satisfies all geometric hypotheses; it illustrates only the finite arithmetic.

**Intuitive purpose.** Among all polygons reachable by legal surgery, choose a contact pattern with as few strict fields as possible and, subject to that, as few strict blocks as possible. Any collision would reduce the first count and any completed merger would reduce the second, so minimality forces a rigid pattern: one block that touches every `κ`-orbit.

**Complete proof architecture.**

#### Existence and trivial full case

1. Reachable strict sets form a nonempty subset of the finite power set of `Z/NZ`; therefore a lexicographic minimizer exists.
2. Define chip count `c(T)` and cyclic group count `g(T)`.
3. If every field is strict, the conclusion is the single full block with `φ=N` and the declared time-zero record.

#### Complete group-sweep ledger

4. Choose a proper group `G={a,…,b}`, let `R=S\G`, and sweep sources `j_r=b-r` from right to left.
5. Prove each source remains occupied until used: earlier steps remove only distinct later sources.
6. Prove the right neighbour is empty. Initially this follows from maximality of `G`; later it is the source removed in the preceding step.
7. Exclude premature reinsertion of that neighbour: if an earlier target had filled it, that earlier move would already have collided; the immediately preceding target would require `κ≡0 mod N`, excluded by `1≤κ<N`.
8. Establish the disjoint-union invariant (5.15) up to the first collision.
9. Enumerate the three possible outcomes: collision reduces chip count; collision-free nonadjacent translation preserves both counts; collision-free adjacency to `R` preserves chip count but reduces group count.
10. Explain why a temporary partial adjacency does not invalidate legality. If it already reduces groups, it contradicts minimality; otherwise only the completed translate is used.
11. Formulate the repeatability invariant for completed sweeps: `T_m=R ⊔ (G+mκ)` is reachable with the minimal score, and the translated group is proper, maximal, disjoint, and nonadjacent to `R`.
12. Induct on `m`: collision or final merger would improve the score, so neither occurs; the repeatability invariant persists.

#### Every orbit is represented

13. The shift orbits are exactly residue classes modulo `δ`, each of length `L=N/δ`.
14. If one orbit contained no strict field, every field on it would be an endpoint contact.
15. Iterating the endpoint identities once around that orbit gives `x_j=λ^Lx_j`.
16. Since `x_j≠0` and `|λ|<1`, this is impossible. Hence every residue class modulo `δ` meets `S`.

#### Distinct groups cannot share a residue

17. Suppose `p` in group `G` and `q` in another group `H` satisfy `p≡q mod δ`.
18. Then some `t∈{1,…,L-1}` has `p+tκ=q mod N`.
19. Repeat complete sweeps of `G` while other groups remain fixed.
20. Before the `t`th arrival, either a collision or merger has already improved the score, or the chip from `p` reaches occupied `q` and collides. Every case contradicts minimality.
21. Therefore distinct groups have disjoint residue sets modulo `δ`.

#### Force one group

22. If one group has at least `δ` consecutive fields, it meets every residue class; residue disjointness leaves no room for another group.
23. Otherwise each group projects to a proper cyclic interval of residues modulo `δ`.
24. These residue intervals are disjoint and cover the residue circle, so two are consecutive.
25. Choose terminal `b` and initial `c` so `δ|(c-b-1)`.
26. Because the subgroup generated by `κ` is `δZ/NZ`, choose `t` satisfying (5.17), `tκ≡c-b-1 mod N`; `t≠0` because the original groups are not adjacent.
27. Translate the first group through `t` complete sweeps. A collision is forbidden; without collision its terminal field becomes `c-1`, adjacent to the second group, causing a forbidden merger.
28. Contradiction: the minimizer has exactly one group. Since every residue occurs, its length `φ` is at least `δ`.
29. Cyclically relabel it as `{1,…,φ}`, equation (5.13).

#### Extract the first record

30. For `φ<N`, temporarily write `S=F ⊔ {0}` with fixed block `F={N-φ+1,…,N-1}`.
31. Define `a_m=[mκ]_N` and the target interval `I={N-φ,…,N-1}`.
32. The orbit of `0` consists of multiples of `δ`; because `φ≥δ`, interval `I` contains one of them. Since `0∉I`, choose the least positive entry time `h`.
33. Prove by induction the exact moving-chip identity (5.18), `S_m=F ⊔ {a_m}`.
34. For `m<h`, minimality of `h` puts `a_m<N-φ`; hence its right neighbour is outside `F` and the move is legal.
35. If target `a_{m+1}` were in `F`, the move would collide and reduce the chip count below the minimum; therefore it is empty and the induction continues.
36. At time `h`, `a_h` belongs to `I` but cannot belong to `F`, again because that would be a collision. Thus `a_h=N-φ`.
37. Every earlier `a_m` lies below `N-φ`, proving equation (5.14).
38. Explain why the final common cyclic relabelling preserves the displacement statement.
39. For `φ=N`, use the declared time-zero record.

**Required visuals.**

- Plate IV.6: exact right-to-left sweep frames with the disjoint-union invariant (5.15) beneath them.
- Plate IV.7: residue coloring for `δ=gcd(N,κ)`, showing why each orbit needs a chip and why two groups cannot share a residue.
- Plate IV.8: moving-chip path `[mκ]_N` until the first entrance at `N-φ`; show earlier values below the threshold.

**Provenance.** **No public category badge under the author’s Karpelevič-only rule.** Historical antecedent: Karpelevič (1951), §3, Lemma 3 and Theorems I–II. The current manuscript supplies a substantially fuller sweep ledger, repeatability invariant, residue argument, and first-entry induction. Do not mark the result “Previously known” unless an independent complete source for the exact argument is verified.

## End-of-page synthesis

Conclude with two synchronized chains:

**Geometry:**

`cap bounds → global interlacing → one-sided representative → exact vertex surgery → reachable reduced polygon`.

**Finite data:**

`endpoint counts → shift κ → strict-set chips → legal moves i↦i+κ → one block {1,…,φ}`.

The final sentence may point to Topic V without using its results:

> The geometry has now been compressed to a finite rotation of the cyclic fields. The next topic studies the arithmetic of the first record in (5.14).

## Deterministic figures and examples

- All cyclic boards use exact integer index arithmetic; no numerical geometry is involved.
- Plates IV.1–IV.3 use exact regular-polygon coordinates and symbolic angle labels.
- Plate IV.4 should be derived from the manuscript’s determinant formulas. If an actual numerical right-admissible mixed-contact example is not independently verified, label the polygon frames “exact incidence schematic” and do not present them as a numerical realization.
- Plates IV.5–IV.8 are deterministic finite-state diagrams. A small verifier should check each shown move’s legality, set update, chip count, group count, residue class, and record inequality.
- Provide a `N=8` cyclic-ledger example and a `N=12,κ=8` orbit example. The latter illustrates arithmetic only and must be captioned accordingly.
- Reduced-motion mode shows the full sequence as adjacent static frames.

## Provenance policy for Topic IV

The public vocabulary remains exactly the author-approved four categories: Classical result, Previously known, Strengthened, New result. There is no evidence-status badge and proofs are not classified.

For statements whose only audited antecedent is Karpelevič’s original proof, omission of a category badge is deliberate and does not create a special fifth category. A closed historical note still names the original location. This applies to Proposition 5.1, Corollaries 5.2–5.4, and Lemma 5.5. It implements the author’s rule that a Karpelevič-only occurrence is not enough for a “Previously known” mark.

### Exact source records

- N. A. Dmitriev and E. B. Dynkin, “On characteristic roots of stochastic matrices,” *Izv. Akad. Nauk SSSR Ser. Mat.* 10(2) (1946), 167–184; [Math-Net record](https://www.mathnet.ru/eng/im3595).
- J. Swift, *The Location of Characteristic Roots of Stochastic Matrices*, M.Sc. thesis, McGill University (1972), including an English translation of Dmitriev–Dynkin; [McGill record](https://escholarship.mcgill.ca/concern/theses/12579t72d).
- F. I. Karpelevič, “On the characteristic roots of matrices with nonnegative elements,” *Izv. Akad. Nauk SSSR Ser. Mat.* 15(4) (1951), 361–383; [Math-Net record](https://www.mathnet.ru/eng/im3317).
- A. Hatcher, *Algebraic Topology*, Cambridge University Press (2002), §1.3, for the covering-space lifting principle.
- R. Schneider, *Convex Bodies: The Brunn–Minkowski Theory*, expanded ed., Cambridge University Press (2014), Chapter 1, §§1.1, 1.3, 1.6, 1.7 and Chapter 2, §§2.1, 2.4; [DOI](https://doi.org/10.1017/CBO9781139003858).

## Adversarial read 1 — mathematical integrity

### Findings

1. **Implicit cyclic-shift step in Lemma 4.13.** Saying “order-preserving, hence a shift” is correct but too compressed. Successor preservation must be proved explicitly.
2. **Possible hidden winding in Lemmas 4.13–4.14.** The permitted angle-difference interval must be handled separately for `κ<N` and `κ=N` before setting `m_i=0`.
3. **Endpoint-sum equality.** Equality in the summed upper bounds forces equality term by term only after the nonnegative deficits are named.
4. **Orientation reversal.** Conjugation reverses the order and half-open endpoint convention; the reindexing `x̃_i=conj(x_{-i})` and endpoint tracking must be explicit.
5. **Proposition 5.1 case overlap.** At `N=3`, `κ=2` is also `κ=N-1`; the `κ=2` incidence row must be declared authoritative.
6. **Proposition 5.1’s hidden endpoint consequence.** The proof of the changed image forces field `i+κ-1` to be endpoint for `κ≥2`. This must be stated so the “unchanged status” ledger does not appear inconsistent.
7. **Strictness of the primed polygon.** Invariance alone does not prove that the displayed `N` points are extreme. The determinant-turn checks and intersection description are both required.
8. **Chip collision language.** Coalescence occurs only in the set of strict statuses; `λ≠0` keeps geometric image vertices distinct.
9. **Partial group sweeps in Lemma 5.5.** The argument must prove legality step by step and must not assume the group count is constant during partial sweeps.
10. **Residue coverage.** Iterating endpoint equalities needs the exact orbit length `N/δ`, nonzero vertices, and `|λ|<1`.
11. **Forward dependency risk.** Equation (5.14) must be obtained by the moving-chip induction, not by citing Topic V’s rotation-section theorem.

### Fixes incorporated into this blueprint

- The cyclic-shift argument is isolated before Lemma 4.13.
- Both winding regimes and the termwise equality argument are expanded.
- Plate IV.1 tracks orientation and endpoint inclusion through conjugation.
- The full shift-boundary register includes `N=3`.
- Proposition 5.1 Step 3 includes the forced endpoint consequence from the local audit.
- The primed-polygon determinant checks and global side-matrix audit remain separate proof obligations.
- Every chip visual carries the status-only warning.
- Lemma 5.5’s sweep legality, repeatability, residue coverage, group merger, and first-record induction are all explicit and do not cite forward material.

## Adversarial read 2 — novice clarity and reading pace

### Findings

1. Ten formal results plus a 31-step surgery proof can become unreadable if presented as one uninterrupted theorem list.
2. `r_j`, `c_j`, `ℓ_j`, `k_j`, `κ`, `δ`, `φ`, `h`, and `[mκ]_N` create a high symbol load.
3. “Interlacing,” “integer lift,” “winding,” “right-admissible,” “collision,” “group sweep,” and “record” are not first-course linear algebra vocabulary.
4. The geometric surgery and Boolean mutation can be mistaken for the same object.
5. The reason for lexicographic minimization is easy to lose inside the group-sweep proof.
6. The residue-class argument is abstract unless the reader sees an orbit.

### Fixes incorporated into this blueprint

- The one page has explicit IV-A and IV-B movements, each with its own visual reset.
- A persistent symbol ribbon shows only the symbols used in the current movement; old symbols recede when IV-B begins.
- Every nonstandard term has a first-use local explainer.
- Geometry and chips are always drawn in separate synchronized lanes with a permanent dictionary.
- Lemma 5.5 opens with the optimization principle: collision improves score coordinate one; merger improves coordinate two.
- A concrete `N=12,κ=8` orbit diagram precedes the general residue proof.
- Proposition 5.1 and Lemma 5.5 receive visible proof maps; their complete proofs are collapsible but fully annotated. Short corollary proofs do not receive repetitive walkthrough panels.

## Completion checks before coding

- Preserve exact manuscript kinds: Lemma 4.13 is a lemma, not a theorem; Corollary 4.12 and Corollaries 5.2–5.4 remain corollaries.
- Render conjugate symbols, tildes, bars, half-open intervals, modular subscripts, and disjoint-union dots correctly in MathML.
- Give every labelled display its printed number (4.5)–(5.18).
- Deep-link statements to PDF pages 19–30.
- Verify all finite examples with deterministic code and snapshot the verification output locally.
- Run the mathematical and novice adversarial reads again on the rendered page. The audits above are preliminary design audits and do not count as either of the two final post-page reviews requested by the author.
