# Illustrated reader audit — 2 October 2026

The author requested a complete audit after the first manuscript rewrite had
lost useful teaching structure and visual navigation. This edition keeps that
rewrite's source fidelity while restoring a readable, illustrated course.

## Findings and corrections

- Updated the Problem page, shared header, metadata, History, Journey, and
  background page to the current identity: *The Karpelevič theorem — an
  illustrated geometric proof*. The current public paper is *A structural
  proof of the Karpelevič theorem*, arXiv:2609.26058v2, revised 23 September
  2026. The supplied teaching manuscript is identified separately.
- Replaced the oversized generic topic hero and repeated navigation grids
  with each topic's actual title, a left-aligned chapter, a sticky topic
  directory, and links to the sections of the current explanation. The
  directory starts collapsed on mobile.
- Added visible introductions to every topic: imported tools and exact source
  links, definitions introduced here, the strategy, and the resulting payoff.
- Expanded all fourteen explanations with concrete examples, intermediate
  reasoning, and fifteen accessible SVG teaching figures. Topic VI has two
  figures and a three-step projection construction. Exact toy models are
  distinguished from claims of extremality.
- Replaced the concatenated disclosure wording with one clear label. The
  twenty-six source proofs now have individual, named disclosures. Formal
  view opens all source proofs; bulk controls, nested links, printing, and
  ordinary JavaScript-free disclosure access remain available.
- Corrected the homepage invariant-square drawing: it now actually performs
  the stated half-size 45-degree rotation. Numerical atlas curves are
  described as sampled polylines. Corrected Topic IV shoulder labels, a
  potentially ambiguous scalar label in II, and the atlas nesting citation.
- Added an elementary proof of the density of a forward irrational-rotation
  orbit in Topic I, rather than requiring that fact without explanation.

## Mathematical and source audit

An independent reviewer checked all fourteen guides, both orientation files,
the early and late SVG figures, the homepage figures, and the retained source
passages. All 218 rendered cross-topic source/import links resolve; all 37
explicit orientation anchors target the intended topic. The reader retains
all 50 labeled equations, 28 labeled formal results, 26 source proofs, three
source figure captions, and 35 bibliography entries. The original source
drawings remain in the linked teaching PDF.

Independent algebraic checks included the exact rational projection
coordinates and closing defect `6t²/(1+6t)` in VI, all 720 determinant terms
of the six-state example in X, and every row of the eight-state eigenvector
construction in XIV (maximum floating-point residual `8.4e-16`). Checks also
covered scalar examples, Jensen values, the order-seven/eight refinement,
small-order regions and the order-three endpoint discontinuity, asymmetric
polygonal gauges, and the quadratic-irrational approximation bound.

No unresolved substantive mathematical or completeness defect was found.
This is an explanatory, algebraic, and source-fidelity audit, rather than a
formal proof-assistant verification. Numerical checks do not certify drawing
error bounds; captions identify approximations explicitly. Historical
external URLs were not all reopened in this final sweep.

## Build and browser verification

- TypeScript and ESLint pass; all 58 tests pass.
- Generated content agrees with the manuscript, guides, and generator.
- The production build and GitHub Pages export verification pass, including
  all eighteen public pages, fourteen topics, both PDFs, the explorer,
  reading controls, source anchors, and compatibility redirects.
- Browser checks at desktop width 1365 and mobile width 390 cover all fourteen
  topics. Guided and fully expanded Formal views fit the mobile document
  width. Wide diagrams scroll within their own visible figure panels.
- Direct interaction checks cover the three projection phases, Guided and
  Formal views, opening and closing nested proofs, and an imported equation
  link revealing its exact source statement. The Problem, History, Journey,
  and background pages also fit mobile width.

The reader remains published through the repository's GitHub Pages workflow.
Deployment success and the served revision are checked after pushing.
