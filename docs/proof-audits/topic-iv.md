# Topic IV final audit — From endpoint order to contact reduction

Date: 1 August 2026

## Audited scope

- Canonical manuscript: `Complete_Karp_arXiv.tex` and its generated HTML.
- Manuscript pages: 19–30.
- Selection half: Lemma 4.10, Lemma 4.11, Corollary 4.12, Lemma 4.13, Lemma 4.14.
- Mutation half: Proposition 5.1, Corollaries 5.2–5.4, Lemma 5.5.
- Formal inventory: ten results, each with the complete manuscript statement and proof plus an added guided explanation.

## Adversarial read 1 — mathematical closure and edge cases

I read every formal proof against the manuscript and tried to break the argument at orientation changes, endpoint conventions, small values of `N`, winding lifts, collisions, and partial group sweeps.

Findings and fixes:

- The dependency labels originally compressed several Topic I tools under inaccurate numbering. They now identify Proposition 2.3 and Lemmas 2.4–2.7 and 2.10 correctly, with exact anchors, as well as Theorem 3.2, Lemma 4.1, and the complete Topic III toolchain.
- `gcd(N,κ)` appeared in the endpoint-orbit contradiction before a novice-facing definition. The greatest common divisor and the orbit length `N/gcd(N,κ)` are now defined at the first use in Lemma 4.13.
- Lemma 4.13’s guided proof explicitly audits both lift ranges: `κ<N` and `κ=N`. The latter branch is then separated before the mutation half by the visible scope statement corresponding to equation (4.18).
- Lemma 4.11’s orientation reversal retains the right-half-open convention by tracking the included and excluded endpoints, not merely by saying “conjugate.”
- Proposition 5.1’s explanation keeps the proof obligations separate: exact clip, invariance, strict convex position, hereditary touching, unchanged labels, the changed image, coefficient update, global ownership, and preservation of the same integer lift.
- The small-order overlap is visible: for `N=3`, the `κ=2` incidence row is also the `κ=N−1` case.
- The forced endpoint status at field `j₀−1` is described as a consequence of the geometry, not an extra hypothesis.
- “Collision” is defined as collision of Boolean strict-status markers. The page explicitly states that nonzero multiplication keeps the actual image vertices distinct.
- Lemma 5.5’s architecture includes legality of partial right-to-left sweeps, the repeatability invariant after complete sweeps, residue coverage, disjoint residue sets for distinct groups, the merger contradiction, and the moving-chip proof of the first record. No theorem from Topic V is imported.
- The items whose only historical antecedent is Karpelevič’s original argument have a Karpelevič source note but no provenance badge. This implements the author’s rule without inventing a fifth displayed category.

Result: the selection-to-mutation chain is closed on this page, including its exceptional cases.

## Adversarial read 2 — novice readability, interaction, and figures

I reread the page without assuming familiarity with contact dynamics or finite cyclic bookkeeping and tested the rendered chapter at desktop and mobile widths.

Findings and fixes:

- The inherited overview still mentioned a “Previously claimed” badge, contrary to the approved four-category system. The route now supplies a new overview that explains the mathematics and states the Karpelevič-only rule without adding a category.
- “Cyclic word,” binary transition, endpoint correction, interlacing, orientation reversal, integer lift, winding integer, right-admissible system, endpoint path, strict field, chip, legal move, collision, intrinsic formulation, Boolean sweep, lexicographic minimum, residue orbit, and first record are all defined before use.
- “Cyclic group” risked being read as an algebraic group. It is now called a “group of strict fields” and explicitly defined as a maximal consecutive block.
- The page is divided internally into five selection results and five mutation results. Equation (4.18) provides a clear mathematical boundary between those halves without splitting the topic into disconnected pages.
- Seven deterministic plates distinguish geometric objects from bookkeeping. In particular, the surgery plate labels its chip as a status marker rather than an image vertex.
- Repeated figures initially shared SVG IDs; page-specific IDs now make every title, description, and arrow marker unique.
- Three long SVG annotations extended beyond their view boxes. They were centered and resized; the bounds audit now passes for all seven plates.
- Complete proofs are closed by default and open independently. The complete Proposition 5.1 proof renders without page-level horizontal overflow, including its numbered equations and incidence ledgers.

Result: Topic IV remains technically dense, but every new layer is introduced before it is used and the reader can inspect it at three levels: definition/intuition, formal statement, and full proof with guided architecture.

## Verification record

- ESLint on the two topic modules, their routes, and the shared figure module: passed.
- Full `npm run build`: passed; `/proof/topic-iv` is present in the route manifest.
- Browser DOM audit: ten result cards and exactly ten complete proof disclosures; all are closed on initial load.
- Classification audit: four “Previously known” badges, one “Classical result” badge, and no badge on the five Karpelevič-only results; each of those five still carries the exact historical source note.
- Accessibility audit: no duplicate DOM IDs; every plate has a `<title>`, `<desc>`, caption, and unique `aria-labelledby` references.
- SVG audit: no text extends outside any of the seven Topic IV view boxes.
- Responsive audit at 1280×720 and 390×844: zero document-level horizontal overflow.
- Fresh-page console audit: no errors or warnings.

## Final disposition

Topic IV is locally complete and ready for the author’s mathematical and editorial review. It has not been published by this audit.

## Independent adversarial review — 1 August 2026

This pass independently compared all ten live results with `/Users/brechtverbeken/Desktop/research/Karp/Files and check/arxiv/Complete_Karp_arXiv.tex`. The canonical source hash matches the generated-content hash (`36e757ad28970f5f55517a83f3218455d5c343aa1d828bc8a549739fc351dcef`).

### Critical finding and repair

- The earlier audit’s claim that all complete proofs rendered was false for the two proofs containing centered HTML tables. The route helper stopped at the first `</div>`, which closed Pandoc’s nested `<div class="center">` rather than the outer proof. Proposition 5.1 ended at its first incidence table and Lemma 5.5 ended at its group-sweep table.
- Replaced the naive close search with balanced nested-`div` extraction. Proposition 5.1 now contains 54,215 proof-HTML characters with three opening and three closing `div` elements and ends with “the primed tuple is right-admissible.” Lemma 5.5 now contains 44,804 characters with two opening and two closing `div` elements and ends with the declared time-zero record. The other eight proofs also end at their canonical proof markers.

### Further findings and scoped repairs

- Added the complete pre-Proposition 5.1 coincidence register: `κ=1`, `κ=2`, `κ=N−1`, the generic range, and the `N=3` overlap. This makes the changed-source/changed-target ledger auditable before the proof uses it.
- Expanded the first-use definition of a right-admissible system to include the fixed post-conjugation orientation, the `μ`-to-`λ` rename, the contact angle, equation (4.12), unique half-open ownership, and hereditary touching. Added source/target and intrinsic-representation definitions before the mutation results use them.
- Repaired all manuscript links that leave Topic IV. The cap lemmas and boundary locator now reach Topic III; side witness and hereditary saturation reach Topic II; contact covariance and its equation reach Topic I. The dependency contract now gives separate, correct links for Definition 1.2, Proposition 2.3, and Lemmas 2.4–2.7 and 2.10.
- Tightened historical notes to the audited Karpelevič locations rather than repeating one generic note. Proposition 5.1 points to §3, Lemma 1; Lemma 5.5 points to §3, Lemma 3 and Theorems I–II. These remain source notes without a fifth badge. Lemma 4.13 now also records Karpelevič §2. The shared source ledger was separately flagged to attach Hatcher, §1.3, to the classical covering-space lift used in Lemma 4.14.
- Replaced the generic interlacing picture on Lemma 4.10 with an exact eight-field endpoint ledger: `r=(1,2,1,1,1,0,1,1)`, `c=(0,0,1,1,1,1,0,0)`, and every corrected count `ℓ_j=1`.
- Corrected two mathematically false arrows. The surgery board now shows the explicit legal example `1↦4` with `κ=3` and empty neighbour 2; the residue plate labelled `κ=8` now actually points from field 0 to field 8 rather than field 4. The long surgery legend was recentered so it remains inside the SVG view box.

### Independent verification

- Scoped ESLint: passed.
- Rendered desktop audit at 1280×720: ten cards and ten closed proof disclosures; four `Previously known` badges, one `Classical result` badge, five deliberately unbadged Karpelevič-only items; no duplicate IDs, unresolved local anchors, missing source lists, SVG text overflow, or page-level horizontal overflow.
- Rendered proof-completeness audit: Proposition 5.1 includes both canonical incidence tables and its final ownership/lift audit; Lemma 5.5 includes its group-sweep table, repeatability argument, residue merger, and moving-chip induction.
- Rendered mobile audit at 390×844 with both long proofs open: no document-level horizontal overflow. Proposition 5.1’s two tables and Lemma 5.5’s table scroll inside their own containers.
- Cross-route audit: all four proof routes returned HTTP 200 after canonical redirects and every rewritten target anchor was present.
- Fresh route console: no warnings or errors.
- No full build was run in this independent pass because the coordinating audit was still updating shared tests; build responsibility remains with the combined final verification.
