# Second mathematical audit and clarity pass — 2 October 2026

The author requested a fresh double-check before further teaching changes,
then clearer arguments and useful figures. The baseline audit was completed
read-only at `3dc9a627d2e9ce4288b25c12bcf4d4ecfc581fd3` before implementation
began. This record supplements the earlier design audit on the same date.

## Baseline findings

The source proof's dependency chain, small orders, applications, asymptotics,
and appendices passed the independent mathematical review. Three guide
statements required correction:

1. **II–III: angle representative.** The lifted angular inequalities need the
   representative `0 < theta_zeta < 2 pi`, updated after conjugation. An
   unspecified argument does not suffice for those real inequalities.
2. **VI: projectivity.** The transfer lemma needs an invertible fractional-linear
   map between completed lines. An arbitrary invertible line map does not make
   its composition fractional-linear. The source application's affine map
   `F^a` is a projectivity and satisfies the corrected hypothesis.
3. **XI: reflection and domain.** The old radius must be chosen using the
   original upper-half angle. The reflected coordinate can exceed `1/2`, where
   the upper-half radial function has not yet been extended. A separate
   reflected variable keeps the arithmetic and the geometric radius distinct.

These are corrections to the educational guides. Both source manuscripts and
both downloadable PDF files are preserved. The arXiv listing was checked afresh and
still identifies v2, revised 23 September 2026, as current:
<https://arxiv.org/abs/2609.26058>.

The baseline release checks passed: TypeScript, ESLint, all 58 tests,
production build, and Pages export validation.

## Dependency checks

| Topics | Audited dependency and explanatory bridge |
|---|---|
| I–II | Eigenvector/convex-combination correspondence; universal saturation; finite polar inequalities and active supporting constraints |
| III–IV | Count and area minimisations; angular lift; legal replacement rather than arbitrary vertex motion |
| V | Consecutive records, determinant-one integer bases, return partition; elementary Bézout and rounding explanation |
| VI | Projective transfer, exposing lines, face persistence, ordered first-return heights, and global no-skipping network |
| VII | Return-product identity, closing exponent, coprime and multiple-cycle cases, exact real winding rather than winding modulo a full turn |
| VIII–IX | Oriented Farey interval, unique scalar candidate, calculus and finite strict Jensen; equality conditions |
| X | Stochastic attainment, determinant expansion, removal of irrelevant zero factors, strictly decreasing arc parameter |
| XI | Independent refinement comparison, correct reflection domain, added-factor and unchanged-endpoint cases |
| XII | Exceptional orders, least-order upper bound, constructed lower bound, positive continuous radial function and actual topological boundary |
| XIII–XIV | Asymmetric gauges, uniform relative error, badly approximable angles, source example and numerical explorer |

The independent baseline checks included 56,167 consecutive-record pairs,
4,783,878 tower positions, and 38,476 hypothetical skipping networks for all
shifts with `N <= 120`; 60 characteristic polynomials were checked exactly
by determinant expansion. A separate early-topic audit checked 21,263 record
pairs, 542,241 tower lists, 1,962 enlarged coprime partitions, and 1,195
multiple-cycle parameter sets with `4 <= N <= 80`, plus exact rational
projection and second-order-defect formulas.

All 86 source labels, 50 labelled equations, 26 proofs, and 35 bibliography
entries were retained. The baseline's 181 source links and 37 orientation
anchors resolved. The teaching and arXiv sources have the same mathematical
labels and equivalent labelled equations, with distinct provenance disclosed.

## Teaching and figure changes

The improvements explain the bridges in the table rather than importing
specialist knowledge without introduction. Six supplementary SVG diagrams
sit beside the relevant arguments: II's side/normal correspondence, VI's
hypothetical skipped-return network, VII's return product and angle budget,
VIII's reflected interval, X's exact four-state arc, and XII's closing
inequalities. Captions separate exact examples and contradiction data from
actual extremal configurations.

The background page works out the triangle-inequality disk bound and adds
an interactive weighted average of `1, i, -1, -i`. For weights
`(alpha, 1-alpha, 0, 0)`, the illustrated point is
`alpha + i(1-alpha)`, with modulus at most one. The caption distinguishes
one row's convex average from the full eigenvector identity that gives
`lambda P` contained in `P`. The page also explains the route through the
main proof and separates the later applications and worked example.

Mobile readers can expand a section directory rather than losing it entirely.
All wide diagrams have named, keyboard-focusable scrolling regions. Plotted
comparison series use dash and marker differences as well as colour. Controls
and ordinary source disclosures retain their JavaScript-free fallbacks.

## Final verification

- Independent final review passed every revised mathematical bridge, all
  three statement corrections, the six supplementary examples, and the
  averaging illustration. Generated source and all fourteen guide hashes
  agree. All 86 labels, 50 equations, 26 proofs, 35 references, and 218
  combined source/orientation links remain present and resolved.
- TypeScript, ESLint, all 62 tests, production build, and Pages export
  validation pass. New checks cover figure placement, accessible scrolling,
  non-colour series identification, actual averaging coordinates, live
  controller updates, and the controller's presence in the exported page.
- Browser checks cover all fourteen chapters at desktop width 1365 and mobile
  width 390. Documents fit their viewport; all 21 topic figures have named
  keyboard scrolling regions and all labels fit their SVG bounds. The six
  new diagrams were visually inspected, including the tall network's two
  halves. The network header and completion-card captions received final
  spacing adjustments.
- The mobile section directory expands, and its full-row links actually jump
  to the selected heading. Keyboard arrows scroll a focused diagram. Guided
  and Formal views, nested proof opening/closing, and mobile source layout
  were checked directly.
- Browser testing caught the static export removing the new widget's React
  hydration scripts. The finished widget instead uses the site's explicit
  controller pattern. Its exported slider, keyboard input, endpoint presets,
  midpoint reset, SVG coordinates, and status text were all checked directly.
  It remains a complete static equal-weight figure without JavaScript.
- Both manuscripts and both PDF files remain unchanged. Publication uses
  the existing GitHub Pages workflow; its run and the served revision are
  checked after pushing.

The audit is mathematical and source-based; it is not a formal proof-assistant
verification, and finite numerical checks are not substitutes for proofs.
