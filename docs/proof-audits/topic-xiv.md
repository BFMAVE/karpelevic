# Topic XIV audit record

Route: `/proof/topic-xiv/`

Canonical source: Part II, Section II.10, manuscript pages 89–90, plus the numerical appendix of the longer manuscript.

## Adversarial read 1 — mathematical and computational verification

- Recomputed the nine upper Farey cells of order seven and checked every determinant-one adjacency and denominator-sum condition.
- Recomputed the worked ray `x=3/8`: `(q,s,d,e)=(3,5,2,-1)`, `A=pi/4`, `B=pi/8`, and `rho=0.940100221928822853...`.
- Recomputed `alpha`, `beta`, the complex boundary point, and the residual of `(lambda^3-beta)^2=alpha^2 lambda`; the double-precision residual is below `3e-16`.
- Added a property test sampling the midpoint of every upper Farey cell for orders 3 through 12 and checking the scalar residual.
- Checked the exceptional order-three real segment and full conjugation symmetry by automated tests.
- Changed fraction sorting from floating quotients to integer cross-products, matching the page’s claim that the Farey ledger is exact within the documented order range.
- Audited the SVG distinction between exact roots/cell data and numerical sampled arcs.

Issue found and fixed during this read:

- The first version claimed an absolute error below `2^(-90)` after ninety browser bisections. That is an exact-arithmetic bracket estimate, not a valid IEEE-754 accuracy guarantee. The page now distinguishes the theoretical bracket width from the roughly fifteen trustworthy decimal digits of browser double precision, and the regression tolerance matches that limitation.

Automated checks after the fixes:

- Exact order-seven Farey ledger: pass.
- Worked ray and carrier data: pass.
- Scalar residuals across orders 3–12: pass.
- Order-three terminal segment: pass.
- Conjugation symmetry: pass.

Status after read 1: **pass**.

## Adversarial read 2 — independent implementation and runtime audit

This read compared the downloadable JavaScript line by line with the Python
routine in the longer manuscript’s numerical appendix, then exercised the
actual client widget in a clean headless Chrome session.

Issues found and fixed:

- The downloadable sampler used one more point per ordinary cell than the
  manuscript appendix and divided the exceptional real segment into a
  slightly different finite mesh. The JavaScript now follows the appendix’s
  `linspace` endpoint convention exactly. This did not change the limiting
  mathematics, but it makes the downloadable record reproducible rather than
  merely equivalent.
- Public functions silently truncated fractional orders and accepted invalid
  iteration or sampling counts. They now reject fractional, non-finite,
  nonpositive, or unsafe inputs. Farey sorting is declared exact only while
  its integer cross-products remain within JavaScript’s safe-integer range.
- The order-three test originally checked only that three distinguished
  points occurred somewhere. It now verifies the complete exact junction at
  `-1/2`, the monotone real segment to `-1`, finiteness of every sampled
  coordinate, and the nonreal arc immediately before the junction.
- The worked-ray regression now verifies `alpha` and the complex carrier
  identity, not only `rho`. The order-seven test also checks all nine
  `(q,s,d,e)` rows against the manuscript table.
- The page said that the double-precision routine reproduced every displayed
  decimal. It now distinguishes the manuscript’s high-precision value from
  the browser computation and states the actual `10^-15` regression
  tolerance.
- The first wording pass called root-of-unity SVG coordinates exact. The page
  now reserves “exact” for the reduced fractions, integer cell data, endpoint
  angles, and symbolic roots; trigonometric coordinates are correctly listed
  as numerical output.
- The widget caption described numerical arcs even at orders 1 and 2. Those
  orders now receive their exact point/interval descriptions, while order 3
  explicitly distinguishes the sampled nonreal arc from the exact real
  segment.
- Nested SVG `title` elements triggered a React hydration mismatch and an
  uncaught runtime exception. The plot now has one stable accessible name and
  description, the decorative root nodes are hidden from the accessibility
  tree, and the exact node data remain available in the textual Farey ledger.
- The number field could display `41` while silently drawing order `40`.
  Values are now integer-normalised and clamped in the controlled input, so
  the visible value, accessible label, cell ledger, and drawing always agree.
- The proof-reader stylesheet referred to three undeclared design tokens, so
  the SVG path fell back to an opaque black fill and no stroke. The intended
  aliases now resolve to the site’s ink, muted-ink, and dark-rule tokens; the
  mathematical curve and exact order-three spike are visibly distinguishable.

Runtime checks after the fixes:

- Orders `1`, `2`, `3`, and `40` all rendered without a console exception,
  `NaN`, or infinite SVG coordinate.
- Entering `41` visibly normalised the input and plot to `40`.
- Order `3` displayed two Farey cells, three exact root nodes, the sampled
  terminal arc, and the exact real segment disclosure.
- The SVG had a stable accessible name and a descriptive text alternative.
- Desktop and 390-pixel mobile visual checks showed the order-three plot with
  the intended translucent fill, navy outline, exact real spike, and no page
  overflow.
- The standalone boundary test suite passed all six tests.
- Targeted ESLint passed for the implementation, widget, page, and tests.

Status after read 2: **the Topic XIV implementation passes**. The full site
build compiled successfully; the combined proof-route and numerical suite
passed all 21 tests; `/proof/topic-xiv` and the downloadable module both
returned HTTP 200 in the final local check.
