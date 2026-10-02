# Consistency and visibility reviews — 2 October 2026

This pass assesses the two supplied follow-up reviews against revision
`efe25efb684b395510c53dc4d023fee5bfb53784`. Their principal diagnoses are
accepted: the teaching architecture should remain, while reference consistency,
recommended navigation and combined interaction states need correction.

## Reproduced defects

At 390 × 844, opening Topic VI's notation panel and following the Lesson 1 link
placed the heading approximately 22 pixels from the top, beneath a panel about
576 pixels tall. The vertical topic directory also inherited the old atlas's
1952-pixel minimum list width. The document itself fitted the viewport, masking
this internal clipping in the preceding page-width check. Topic I's lower
vertex label and SVG row explanation occupied overlapping text boxes.

## Implemented corrections

- The vertical directory explicitly resets the list minimum width and allows
  title wrapping. Local list/title widths are checked, not only document width.
- Fragment navigation closes an expanded notation panel outside the target,
  reserves the closed summary's measured height, and opens enclosing source
  disclosures. The same-fragment case is handled even without `hashchange`.
  All chapter targets receive the offset; font readiness triggers an initial
  correction. Checks inspect the target's first line against the bar bottom.
- The open notation body is capped at 220 pixels / 28% of a phone viewport,
  with keyboard scrolling and its native dismissal summary always available.
  The helper remains available in guided and source modes.
- Reference entries are chapter-sensitive and rendered through the same Pandoc
  MathML pipeline as the lessons. Requested order n and structural order N,
  continued-angle periods, selected return times and reused projective
  coefficients are distinguished. The folded definitions use the same checked
  reference data. Search accepts characters, written names and TeX commands.
- The theorem preview precedes the route chooser. Homepage learning and chapter
  entrance links point to it, and the preview explicitly continues to the route
  chooser. Its diagram initially fits the frame.
- Topic VI's three h4 subsections appear as nested section-directory links.
  Its graph representation is justified by vertical slices, and a collapsed
  determinant expansion derives the reciprocal recurrence after proving all
  divisors are positive. II and IX add changed-inference checkpoints.
- Topic I's row sentence moves into its reflowing HTML caption, leaving the
  mathematical vertex labels at their original size.
- The combined Source-mode check at 320 pixels found two additional long
  inline identities in XIII. Inline source MathML now has a local width limit
  and horizontal scrolling; the page no longer widens to 345 pixels.
- XIV uses an elementary convexity proof at the exact scalar root. U and V
  control its eight strictly positive turns; disjoint angular sectors establish
  simplicity. The earlier interval certificate remains an optional independent
  check across an entire radius interval, rather than the learning prerequisite.
- XIV links a selected state to its outgoing graph edges, complex coordinate,
  image, contributing coordinates and native mathematical row equation. Shapes
  and line weights supplement colour. The static example remains usable before
  enhancement and all eight selections are reversible.

## Mathematical scope

The octagon simplification was derived independently from
`2 cos(h) = rho^3(1+rho)` at `h=pi/7`, not accepted on the review's authority.
The determinant expansion gives the stated eight U/V factors; the U bound
uses `rho+1/rho >= 2`, and V is positive for `0<rho<1`. The source eigenvector,
contacts and scalar equation are unchanged. The general theorem still follows
Topics I–XII; this additional argument verifies the worked example.

The projective-coordinate, recurrence, diagonal-similarity and real-phase
additions were checked against the teaching manuscript. All formal source
passages and both paper editions are retained.

## Verification and limits

TypeScript, lint, all 78 mathematical/regression tests, generated-reference
freshness and the GitHub Pages export checks pass. All fourteen formal source
passages and the four tracked manuscript/PDF files match the preceding revision.

Browser checks use 320, 390, 768 and 1440 × 844 viewports. At every width the
expanded directory's lists and all fourteen titles fit their own containers.
After a section jump the heading starts about 64 pixels from the top, below
the closed reference bar's bottom at about 45 pixels. The repeated-fragment
and Source-to-guided subsection cases also pass. The open reference body is
220 pixels tall at phone widths. All fourteen references remain visible in
Source mode at 320 pixels, with native MathML and no horizontal page overflow
after the XIII correction. Name, glyph and TeX searches match in both filters,
and clearing restores all entries. The theorem-preview entrance, fitted
initial diagram and route continuation are verified.

Every octagon row selection was exercised and returned to row six. The visible
relation, source/image markers, contributor markers, complete-graph source and
outgoing edges all agree for all eight rows. Native keyboard selection from
six to seven, fitted/enlarged diagrams and the moved Topic I caption were
checked too.

The review's unconfirmed Topic VIII collision is not treated as a defect.
No unsupported research anecdote is invented. No complete screen-reader,
real-device or cross-browser certification is claimed, and this pass does not
claim to certify all external destinations or every possible control sequence.
