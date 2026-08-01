# Topic III final audit — Building one-sided ownership

Date: 1 August 2026

## Audited scope

- Canonical manuscript: `Complete_Karp_arXiv.tex` and its generated HTML.
- Manuscript pages: 15–19, with Lemmas A.4–A.5 brought forward from page 64 at their first use.
- Formal inventory: Definition 4.2; Lemmas 4.3–4.9; Lemmas A.4–A.5.
- Page inventory: one definition and nine results, in three pedagogical groups.
- The formal statements and proofs are not paraphrased substitutes. They are loaded from `part-i-content.generated.ts`; the added vocabulary, intuition, figures, and guided steps sit around the complete manuscript text.

## Adversarial read 1 — mathematical closure and provenance

I read the page in dependency order and tried to identify every step that could be using a later topic, an undefined object, or an uncited theorem.

Findings and fixes:

- The initial purpose line for Definition 4.2 sounded as though the definition had already proved unique ownership. It now says that the definition *introduces the convention*; Lemma 4.3 proves the disjoint partition.
- The dependency contract originally omitted the supporting-face result used in Lemma 4.4. Lemma 2.9 is now imported explicitly and linked to its Topic II statement.
- The compactness module used sequential compactness, dominated convergence, and the fact that a polygonal boundary has area zero without defining all three for this audience. Lemma A.4 now defines them before the statement. The contract gives precise book-level sources for the two imported analysis theorems.
- The earlier-topic imports were split into exact results and anchors: Definitions 1.1–1.2, Lemmas 2.5–2.6 and 2.9, Theorem 3.2, Lemma 4.1, and Lemma A.2.
- Lemmas A.4 and A.5 occur before Lemma 4.9 on the page, so the existence of the least-area representative and strict area decrease are proved before the cap argument invokes them.
- Lemma 4.9 does not import global interlacing. Its compactness, normalization, criticality, and unique-radius-anchor steps are all visible in the complete proof and repeated in the guided architecture.
- Every nonclassical provenance badge has an actual source entry. Dmitriev–Dynkin and Swift support the historical clipping/contact mechanism; Bitsoris supports the polyhedral side-matrix mechanism; Schneider is cited for convex-body background. The badges classify statements, not the new explanatory prose.

Result: no forward dependency or missing proof obligation remained after the fixes.

## Adversarial read 2 — novice readability, interaction, and figures

I reread the page as a reader with linear algebra but without specialist convex-geometry or Karpelevič terminology, then tested both desktop and mobile renderings.

Findings and fixes:

- The inherited Topic III overview reached ahead to the endpoint ledger from Topic IV. The route now supplies a self-contained orientation that describes only the local ownership atlas, exact edge clipping, compactness, and the cap bound proved here.
- “Field,” “incoming side,” “owns,” “half-open side,” “certificate,” “image polygon,” “edge cap,” “meets,” “Hausdorff distance,” “support function,” “indicator function,” normalization, and area minimization are defined at first use.
- “Area-minimizer” no longer defines itself through the unexplained word “infimum”; it says directly that no other normalized candidate has smaller area.
- Repeated instances of the same SVG initially produced duplicate title and marker IDs. Every plate now receives a stable page-specific ID, so all `aria-labelledby` and marker references are unique.
- The explanatory line in the boundary-face plate exceeded the SVG view box. It was centered and resized; an automated bounds check now reports no clipped SVG text.
- Complete proofs remain closed by default. Opening one reveals the original manuscript proof followed by the additional numbered unpacking; definitions correctly have no artificial “proof” disclosure.
- The page has six deterministic mathematical plates. No plate is offered as evidence in place of the formal argument.

Result: the page reads as a textbook chapter rather than a list of claims, while an expert can keep every optional layer closed.

## Verification record

- ESLint on the two topic modules, their routes, and the shared figure module: passed.
- Full `npm run build`: passed; `/proof/topic-iii` is present in the route manifest.
- Browser DOM audit: ten formal items; Definition 4.2 has no proof disclosure; each of the nine results has exactly one complete proof disclosure; all are closed on initial load.
- Accessibility audit: no duplicate DOM IDs; every mathematical plate has a `<title>`, `<desc>`, figure caption, and unique `aria-labelledby` references.
- SVG audit: no text extends outside any of the six Topic III view boxes.
- Responsive audit at 1280×720 and 390×844: zero document-level horizontal overflow.
- Fresh-page console audit: no errors or warnings.

## Final disposition

Topic III is locally complete and ready for the author’s mathematical and editorial review. It has not been published by this audit.

## Independent adversarial review — 1 August 2026

This pass did not rely on the disposition above. I compared the live module result-by-result with `/Users/brechtverbeken/Desktop/research/Karp/Files and check/arxiv/Complete_Karp_arXiv.tex`, whose SHA-256 hash still equals the hash embedded in `part-i-content.generated.ts` (`36e757ad28970f5f55517a83f3218455d5c343aa1d828bc8a549739fc351dcef`).

### Findings and scoped repairs

- Rechecked the exact inventory: Definition 4.2; Lemmas 4.3–4.9; Lemmas A.4–A.5. The definition has no proof disclosure and all nine results have a balanced, canonically paired proof block ending at the manuscript proof marker.
- Replaced the proof extractor’s first-`</div>` assumption with balanced nested-`div` extraction. Topic III’s current proofs did not contain a nested proof wrapper, but using the same sound extraction rule prevents a future table or centered block from silently truncating one.
- Repaired the dependency link for Lemma 2.9 so that it reaches Topic II, and rewrote canonical manuscript references that leave the route: Lemma 2.6 and Lemma A.2 now reach Topic I, while the forward scope reference to Proposition 5.1 reaches Topic IV. Every target was fetched from the local site and its exact anchor was found.
- Added first-use explanations for image vertices, one-sided contact assignments, boundary arcs, and the exact cap count. Tightened the area-minimizer intuition from “the one radius-one anchor” to a chosen radius-one anchor, matching the proof.
- Made each classical source relation explicit about what Schneider supplies and what the manuscript specializes; the Hausdorff item separately identifies the dominated-convergence dependency.
- Corrected the boundary-face plate so that `A`, `B`, and their strict mixture lie exactly on the displayed polygon side and all comparison level lines are parallel to it.

### Independent verification

- Scoped ESLint: passed.
- Source assertion: ten formal items; nine proofs; every proof has balanced `div` nesting and the canonical terminal proof marker.
- Rendered desktop audit at 1280×720: ten result cards, nine closed proof disclosures, no proof disclosure on Definition 4.2, no duplicate IDs, no unresolved local anchors, and every badge has at least one displayed source.
- Rendered mobile audit at 390×844: no document-level horizontal overflow.
- Cross-route audit: all imported and forward-reference URLs returned HTTP 200 after canonical redirects, and every requested target ID was present.
- Fresh route console: no warnings or errors.
- No full build was run in this independent pass because the coordinating audit was still updating shared tests; build responsibility remains with the combined final verification.
