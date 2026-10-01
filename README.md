# The Karpelevič theorem — guided proof website

The public site is https://bfmave.github.io/karpelevic/.

The current preprint is **A structural proof of the Karpelevič theorem**, by
Brecht Verbeken and Vincent Ginis, [arXiv:2609.26058v2](https://arxiv.org/abs/2609.26058v2),
revised 23 September 2026. The reader uses the supplied teaching manuscript,
**A proof of the Karpelevič theorem via invariant polygons**, as its teaching
source. These versions have the same mathematical proof route; their titles
and exposition differ.

All fourteen topics were rewritten on 1 October 2026 for readers with basic
analysis and linear algebra. Topics I–XII build and complete the theorem;
Topic XIII treats gauges and asymptotics; Topic XIV gives the eight-state
worked example and retains the order-selectable boundary explorer.

The illustrated edition restores visible topic introductions (imported
results, new definitions, strategy, and payoff), chapter and section
navigation, and fourteen teaching-figure sets placed beside the relevant
explanations. Source statements remain available throughout, with individual
proof disclosures. The journal-style typography and mathematical atlas are
retained, and the site's public identity is **The Karpelevič theorem**.

## Development and checks

Node.js 22.13 or newer is required. Run `npm ci` and `npm run dev`.

`npm run release:check` type-checks, lints, builds, runs the numerical,
accessibility, source-retention, and rendered-page tests, then verifies the
GitHub Pages artifact. The existing Pages workflow publishes pushes to main.

## Source and educational content

- `content/paper/karpelevic-invariant-polygons.tex`: the supplied teaching source.
- `content/paper/arxiv-v2.tex`: the downloaded current arXiv source, retained for version comparison.
- `content/topics/topic-1.md` through `topic-14.md`: editable educational guides.
- `app/data/reader-topics.ts`: titles, reader questions, and source locations.
- `app/data/reader.generated.json`: native MathML guides and complete source passages.
- `scripts/generate-reader.mjs`: deterministic conversion and source-reference resolution.
- `app/components/proof/CurrentProofChapter.tsx`: the shared reader and exact diagrams.
- `public/paper/critical-invariant-polygons.pdf`: the downloaded arXiv v2 PDF.
- `public/paper/teaching-manuscript.pdf`: the supplied teaching manuscript PDF.
- `app/lib/karpelevic-boundary-core.js` and `public/code/`: unchanged numerical source and checks.

After editing a guide or teaching source, run `npm run content:reader` with
Pandoc installed. Generation validates all cross-topic references. Builds
run `npm run content:reader:check`, which checks the source and all guide
hashes without requiring Pandoc in CI. All 50 labeled equations, 26 proofs,
three figure captions, and 35 references from the supplied manuscript remain
available in the reader. Original diagrams remain in the supplied PDF.
The teaching figures distinguish exact models and verified numerical
illustrations from critical configurations and from proofs of extremality.
On narrow screens, wide diagrams scroll inside their own frames so their
labels remain legible and the page itself does not overflow.

The previous edition's hand-authored and generated reader files are retained
for provenance but no longer supply the public proof routes. Its obsolete
result/plate/standalone inventories are retained in `tests/previous-edition/`.
The active tests verify the new source-based edition and preserve the
numerical solver and live accessibility regressions.

## Rights

The archived 24 July 2026 manuscript v1 is licensed CC BY 4.0. The current
arXiv record also supplies its license. No additional blanket license has
been selected for website-only material; see `RIGHTS.md`.

## Project record

`PROJECT_STATUS.md` records the current rewrite and verification.
`docs/proof-audits/reader-2026-10-01.md` records the dependency map,
version comparison, independent review, and corrected teaching bottlenecks.
