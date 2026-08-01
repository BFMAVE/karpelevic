# Topic V audit — Rotation arithmetic and the projective corridor

## Scope

- Local route: `/proof/topic-v/`
- Canonical source: `Complete_Karp_arXiv.pdf`, pages 31–41, with Lemma A.6 on page 65.
- Formal inventory: Lemma A.6; Theorem 6.1; Corollary 6.2; Remark 6.3; Lemmas 7.1–7.2; Proposition 7.3; Definition 7.4; Proposition 7.5.
- Editorial rule: the generated manuscript statement and proof remain the formal text; the vocabulary, intuition, deterministic plates, and numbered notes unpack that same proof.

## Adversarial read 1 — dependencies and novice readability

The read began at the top of the page while assuming only the contracts displayed there. Every first-use term needed to follow the formal argument was checked against either an inline definition or an imported result.

- The lattice vocabulary now defines primitive vectors, quotient lattices, half-open fundamental parallelograms, unimodular pairs, and the precise consequence of Smith normal form before they are used.
- The rotation vocabulary distinguishes time, residue, deficit, record vector, return tower, and equivariance. The worked values `N=13`, `κ=5` in Plate V.1 agree with the actual residues: record times `0,1,2,5`, deficits `13,8,3,1`, and vectors `(0,1),(1,1),(2,1),(5,2)`.
- Plate V.2 has three height-one towers and five height-two towers, hence `3·1+5·2=13`, and its base return is addition by five modulo eight.
- “Pulled-back support,” “short-long interface,” “proper boundary chain,” and every set in the four-part return ledger are defined at first use.
- Perspectivity, projectivity, projective completion, corridor holonomy, pencil of lines, affine projective chart, and line at infinity are defined before the projective argument.
- The imported support-face test was incorrectly described as a Topic I dependency. It is Lemma 2.7 in Topic II, so the label and link were corrected to `/proof/topic-ii/#part-i-item-13`.
- The repeated rotation-record plate inside Remark 6.3 was removed; the lead plate already provides that picture and the remark now adds only the sail interpretation.
- Two exact formal-setup sections were restored from the canonical source: the return-height/terminal-transport equations before Lemma 7.1, and the forward/reverse corridor dictionary before Lemma 7.2. This keeps every equation invoked by a later proof on a visible page.

No unannounced nonstandard object remains in the guided route. Lemma A.6 is proved on this page rather than hidden behind “standard lattice theory.”

## Adversarial read 2 — formal proof, provenance, and rendering

- The nine formal cards match the manuscript labels and order, with the appendix lemma moved to its first logical use.
- A release-blocking DOM check found that the first implementation used the generated statement map without attaching its separate generated proof blocks. The assembly now locates each canonical statement, requires the next generated block to be its proof, extracts that proof with balanced `div` parsing, and appends it before the guided notes.
- The live page now has seven proof disclosures for its seven proved results. Definition 7.4 and Remark 6.3 correctly remain proofless. Every disclosure is closed by default, and “The same proof, unpacked” follows rather than replaces the manuscript proof.
- All same-page equation references resolve. A grouped browser audit opened all 38 distinct cross-page proof targets used by Topics V–VII; every target ID exists.
- The Karpelevič-only antecedents in Theorem 6.1, Corollary 6.2, and Lemmas 7.1–7.2 do not display a “Previously known” badge. Their source note explains the unverified antecedent instead. Proposition 7.3 remains identified as the manuscript's exact new ledger.
- Deterministic figure arithmetic was recomputed from the displayed parameters. SVGs have titles, descriptions, and captions; none is presented as numerical evidence.
- Fresh browser load: nine formal results, seven complete proofs, two exact setup sections, no duplicate IDs, no missing anchors, no console warnings or errors, no disallowed antecedent badge, and no horizontal page overflow at desktop width or at a 390-by-844 mobile viewport.

## Outcome

Passes both audits locally. The page is source-closed relative to its displayed import contract and retains the complete formal manuscript proofs.

## Independent adversarial review — 2026-08-01

This review started again from the canonical TeX rather than trusting the earlier DOM totals. The generated Part I metadata has the same SHA-256 hash as `Complete_Karp_arXiv.tex`, and balanced extraction supplies all seven canonical proof bodies.

- A dependency-order defect was found in the repaired page. The two no-skipping setup blocks were rendered globally before Theorem 6.1, although the first invokes Theorem 6.1 and the second belongs after Lemma 7.1. The exact finite-rotation setup defining `[a]_N`, `L`, upper-record times, deficits, and the terminal record was also absent.
- The exact finite-rotation setup is now restored before the arithmetic results. The return-height setup now follows Remark 6.3 and precedes Lemma 7.1; the forward/reverse corridor dictionary follows Lemma 7.1 and precedes Lemma 7.2. Thus every setup appears after its dependencies and before its consumers.
- “Right-admissible contact system” and “strict field,” which occur in Theorem 6.1 before Corollary 6.2 explains their coefficients, are now explicitly defined in the theorem primer.
- Proposition 7.5's separation step is now named explicitly in the import contract and linked to the proved strict-separation lemma in Topic I.
- The rendered route contains 9 formal results, 7 complete proof disclosures, 3 exact formal setups, and 78 unique IDs. Every local and cross-page fragment resolves, and the approved provenance labels are the only labels present.
- Fresh browser checks at 1280 pixels and 390-by-844 pixels found no horizontal page overflow, duplicate ID, warning, or error. All disclosures remain closed on first load.

Independent outcome: pass after the ordering and definition repairs.
