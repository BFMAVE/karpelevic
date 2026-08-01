# Topic VII audit — The Farey carrier and return monodromy

## Scope

- Local route: `/proof/topic-vii/`
- Canonical source: `Complete_Karp_arXiv.pdf`, pages 51–59.
- Formal inventory: Lemmas 8.1–8.4; Propositions 8.5–8.6; Lemma 8.7; assembled Theorem 1.4.

## Adversarial read 1 — dependencies and novice readability

- Farey sequence, reduced fraction, Farey neighbour, Farey determinant, and mediant are defined before the adjacency proof. Lemma 8.1 then proves the exact determinant-and-denominator criterion instead of assuming it.
- Reflection is explained as `x ↦ 1-x` followed by restoring increasing order. Plate VII.1 verifies the concrete order-seven example: `1/3 < 3/8 < 2/5`, determinant `3·2-1·5=1`, denominator sum `3+5=8>7`, and reflected cell `3/5 < 5/8 < 2/3`.
- The backward strip vocabulary distinguishes the lifted arguments, reflected multiplier, signed closing exponent, and homogeneous product before conjugation and reversal.
- Nontransversal and transversal regimes, heterogeneous factors, algebraic padding, orbit length, reduced step, and the local integer symbols `S,R` are separated before the two product propositions.
- The Jensen sheet is defined as one argument branch, not an invocation of Jensen's inequality. Plate VII.2 correctly places `μ^q-β` on a horizontal segment in the open upper half-plane, with argument increasing from `A` toward but not attaining `M`.
- The import contract is closed by VI-B's return dichotomy, Topic V's record section and padding, Topic I's adapted complex coordinate, and Topic IV's lifted endpoint paths.
- The Farey plate was removed from Lemma 8.1 because it already leads the page.

## Adversarial read 2 — formal proof, provenance, and rendering

- A release-blocking DOM check found that only assembled Theorem 1.4 initially had a proof disclosure; the seven section-8 cards had received statements without their separate generated proof blocks. Each now mechanically appends the canonical proof immediately following its source statement.
- The live page now has eight proof disclosures: all seven section-8 proofs plus the manuscript's complete case-assembly proof of Theorem 1.4, followed by six explanatory assembly steps.
- The original proof extractor stopped at the first nested closing `div`, causing a hydration mismatch and an incomplete assembly proof. It now scans balanced `div` tags and returns the complete proof.
- The manually transcribed formal carrier statement now supplies canonical IDs for the parameter, homogeneous-product, Laurent-product, normalized-factor, and phase equations. All proof references therefore resolve locally.
- The assembled theorem's outer card formerly duplicated the canonical theorem ID; the card now uses `part-i-item-4`, leaving `thm:complex-monodromy` unique.
- The theorem consistently keeps one selected eigenvalue `μ` through the product, phase identity, and common argument sheet. The negative signed exponent in the reflected transversal case is retained, and the homogeneous identity remains the primary polynomial statement there.
- Provenance is separated correctly: strengthened product propositions cite their antecedents; the exact carrier theorem is marked new; the classical Karpelevič–Ito boundary is explicitly not claimed as new.
- A grouped browser audit opened all 38 distinct cross-page proof targets used across Topics V–VII; every target exists.
- Fresh browser load: eight formal results, eight complete proofs, no duplicate IDs, no missing anchors, no hydration mismatch, no console warnings or errors, no disallowed antecedent badge, and no horizontal overflow at desktop or 390-by-844 mobile width.

## Outcome

Passes both audits locally. Topic VII exports one ordered Farey cell, one heterogeneous product, one exact lifted phase, and one common argument branch without suppressing any orientation case.

## Independent adversarial review — 2026-08-01

The seven section-8 results and the assembled theorem were checked anew against the canonical TeX. The generated source hash matches `Complete_Karp_arXiv.tex`, and all eight proof bodies are present after balanced extraction.

- A formal-transcription defect was found in assembled Theorem 1.4. The hand-authored statement compressed several canonical displays and omitted the paragraph saying that the signed exponent is not asserted nonnegative and that the homogeneous identity is primary in the reflected transversal regime. The card now uses the exact generated theorem statement, with all five canonical equation anchors (1.5)–(1.9), followed by the complete canonical proof.
- Lemma 8.3 was correctly left unbadged as a Karpelevič-only antecedent, but its source shelf incorrectly displayed Hardy–Wright. Its source now agrees with its relation note and cites Karpelevič precisely; Hardy–Wright remains attached only to the two Farey arithmetic lemmas.
- The orientation audit found no later or circular assumption: unit return is imported from VI-B before the products; the exact reflection lemma precedes every reflected case; and Lemma 8.7 checks the common branch before Theorem 1.4 assembles it.
- The import contract now links the lattice parallelogram count used in Lemma 8.1 and separates the one-sided contact representative from the lifted endpoint-path lemma. “Monodromy output” is defined before its first use in Lemma 8.4.
- The rendered route contains 8 formal results, 8 complete proof disclosures, and 60 unique IDs. Every local and cross-page fragment resolves, and only the four approved provenance labels appear.
- Fresh browser checks at 1280 pixels and 390-by-844 pixels found no horizontal page overflow, duplicate ID, warning, or error. Expanding the complete Theorem 1.4 proof at mobile width also produced no page or proof-container overflow and no console output.

Independent outcome: pass after restoring the canonical principal statement and correcting Lemma 8.3's source.
