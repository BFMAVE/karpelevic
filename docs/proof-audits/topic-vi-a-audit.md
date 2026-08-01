# Topic VI-A audit — The local projective escape

## Scope

- Local route: `/proof/topic-vi/a/`
- Canonical source: `Complete_Karp_arXiv.pdf`, pages 41–45.
- Formal inventory: Lemma 7.6, Lemma 7.7, and Theorem 7.8.
- Physical split only: this is the first page of Roman Topic VI, not a new Roman topic.

## Adversarial read 1 — dependencies and novice readability

- “Projective line `AB`” explicitly says that juxtaposition names a line rather than multiplication.
- The slope notation is separated into edge slope, support slope, and incoming-ray slope before the calibration inequalities appear.
- The calibrated return `W*` is described as an exact test seed, not a numerical approximation.
- Lemma 7.7 defines a real projectivity, a pole-free neighbourhood, and “arbitrarily small” before the two fractional-linear cases are used.
- Theorem 7.8 defines the signed seed parameter, corridor projectivity, normalized coordinate, holonomy coordinate, calibration determinant, and triple-sign persistence.
- Every prerequisite is explicit: Topic V supplies the corridor and admissible chart; Topic II supplies the finite triple-sign criterion. The only background fact, the fractional-linear form of a line projectivity fixing zero, is stated and algebraically used in full.
- The corridor plate was removed from Lemma 7.6 because the same plate already leads the physical page. This avoids a second identical illustration without removing mathematical information.

The guided proof notes track the manuscript proof in its original order: chart, slope ordering, induction, final calibration; then normalization, diagonal subtraction, the two algebraic cases; then projectivity, poles, determinant factorization, sign persistence, and final parameter choice.

## Adversarial read 2 — formal proof, provenance, and rendering

- A release-blocking DOM check found zero proof disclosures in the first implementation because the generated item map contained statements only. Each of the three cards now mechanically appends the canonical proof block immediately following its source statement, with balanced container extraction.
- The live page therefore has three proof disclosures for its three proved results, followed by the explanatory notes and closed by default.
- Cross-topic links to Definition 7.4, Proposition 7.5, and the Topic II triple-sign lemma were opened successfully as part of the 38-target grouped audit across Topics V–VII.
- Every local equation reference resolves. No proof step appeals to global polygon invariance; the page correctly stops at local strict convexity and the closing half-plane conclusion.
- The provenance display distinguishes the new convex-chain calibration, the elementary projective fixed-point lemma, and the Karpelevič antecedent to projective escape without promoting that antecedent to “Previously known.”
- Fresh browser load: three formal results, three complete proofs, no duplicate IDs, no missing anchors, no console warnings or errors, no disallowed antecedent badge, and no horizontal overflow at desktop or 390-by-844 mobile width.

## Outcome

Passes both audits locally. Topic VI-A exports exactly the local escape contract needed by VI-B and claims nothing global prematurely.

## Independent adversarial review — 2026-08-01

The page was re-read against the canonical TeX and the rendered output after a fresh build. The generated source hash matches `Complete_Karp_arXiv.tex`; the three statements and the three proof bodies are obtained mechanically with balanced containers.

- The proof order remains dependency-closed: the admissible chart comes from Topic V, calibration is proved before the fixed-point lemma is applied, and the page stops at local half-plane escape rather than importing the later global deformation.
- The sign calibration's use of oriented boundary order is now an explicit Topic I import rather than an unnamed premise.
- The primers define the line notation, the three distinct slope families, projective naturality, the normalized holonomy coordinate, poles, the signed determinant, and triple-sign persistence before their first result-level use.
- The summary statistic incorrectly reported 22 guided steps; the three cards contain 8, 4, and 8 steps, so the displayed total is now 20.
- Provenance uses only the approved categories. Lemma 7.6 is sourced as the manuscript's new calibration, Lemma 7.7 to precise projective background, and the Karpelevič antecedent to Theorem 7.8 remains unbadged rather than being promoted to “Previously known.”
- The rendered route contains 3 formal results, 3 complete proof disclosures, and 42 unique IDs. Every fragment resolves.
- Fresh browser checks at 1280 pixels and 390-by-844 pixels found no horizontal page overflow, duplicate ID, warning, or error. All disclosures remain closed on first load.

Independent outcome: pass after correcting the guided-step total.
