# Critical Invariant Polygons — paper website

Offline development site for:

> **Critical Invariant Polygons and the Farey–Ito Boundary of Stochastic
> Spectra**
>
> Brecht Verbeken and Vincent Ginis

The approved public release is available at
<https://bfmave.github.io/karpelevic/>.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

The default preview is <http://localhost:3000>.

## Checks

```bash
npm run lint
npm test
```

`npm test` creates a production Vinext build and verifies the public-facing
pages, all formal proof-reader routes, complete-proof inventories, internal
proof links, the bundled PDF, and the numerical boundary generator.

## Project layout

- `app/` — website routes, components, styles, and mathematical content.
- `app/data/proof-topics/` — the hand-authored educational layer for the
  later proof-reader topics.
- `public/paper/` — the verified PDF served by the website.
- `public/code/` — dependency-free mathematical code offered for download.
- `scripts/` — deterministic TeX extraction, export, and verification tools.
- `tests/` — rendered-page, proof-structure, link, and numerical checks.
- `docs/proof-drafts/` — working chapter plans and expository drafts.
- `docs/proof-audits/` — mathematical, implementation, and source audits.
- `docs/student-reviews/` — two independent student-perspective readings of
  every physical proof page and their consolidated recommendations.
- `share/` — locally generated standalone HTML editions; these large derived
  files stay local and are not committed.

Build artifacts such as `dist/`, `pages-out/`, `tmp/`, and TypeScript cache
files are generated locally and ignored by Git. The complete working project
lives in this one repository folder; the canonical manuscript files remain in
their author-designated research location and are read by the deterministic
content generators.

## Project record

- [`PROJECT_STATUS.md`](./PROJECT_STATUS.md) is the living progress and review
  record.
- [`PHASE_1_DISCOVERY.md`](./PHASE_1_DISCOVERY.md) contains the original
  content audit, architecture proposal, visual tokens, and source inventory.
- [`docs/README.md`](./docs/README.md) indexes the project’s drafts, technical
  audits, and student-review reports.
- [`docs/PROJECT_STRUCTURE.md`](./docs/PROJECT_STRUCTURE.md) records the
  canonical project root, source-of-truth hierarchy, generated artifacts, and
  the local/public boundary.

`npm run build:pages` creates and verifies the static `pages-out/` artifact
under the repository base path. The GitHub Actions workflow checks out full
history so each page can derive its visible timestamp from the latest commit
that touched its source content.
