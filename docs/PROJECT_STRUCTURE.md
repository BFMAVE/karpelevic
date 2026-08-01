# Project structure

## Canonical project home

The complete website project belongs in:

`/Users/brechtverbeken/paper-project-site`

Do not create a second website tree beside this repository. The canonical TeX
and PDF remain in the author-designated research folder; generators read them
from there and write derived website content into this repository.

## What is authoritative

Use this order when two files appear to disagree:

1. **Mathematics:** the canonical manuscript TeX in the research folder.
2. **Educational website layer:** the hand-authored files in `app/`, especially
   topic readers, figures, definitions, and explanatory components.
3. **Mechanically extracted manuscript text:** the committed
   `app/data/*.generated.ts` files. Regenerate these with the matching script;
   do not edit their HTML payloads by hand.
4. **Rendered output:** `dist/`, `pages-out/`, `share/*.html`, and preview files.
   These are disposable derivatives and are never a source of truth.

`PROJECT_STATUS.md` is the authoritative progress and publication record.
`PHASE_1_DISCOVERY.md` is the original discovery audit, not a second status
file.

## Top-level map

| Path | Purpose | Status |
| --- | --- | --- |
| `app/` | Routes, site content, shared components, styles, mathematical figures, and runtime mathematics | Authoritative and versioned |
| `public/` | Files delivered unchanged: verified paper PDF, browser scripts, icons, and downloadable boundary code | Authoritative and versioned |
| `scripts/` | Deterministic manuscript extraction, standalone export, GitHub Pages export, and export verification | Authoritative and versioned |
| `tests/` | Rendered-page, proof-structure, link, and numerical checks | Authoritative and versioned |
| `docs/` | Drafts, technical audits, student readings, and maintainers' documentation | Authoritative and versioned |
| `.github/` | GitHub Pages build and deployment workflow | Authoritative and versioned |
| `.openai/`, `build/`, `worker/` | Vinext/Sites/Cloudflare build scaffold used by the current local build | Auxiliary infrastructure; versioned |
| `db/`, `drizzle/`, `examples/` | Optional database scaffold and example, currently unused by the paper site | Auxiliary infrastructure; versioned |
| `share/` | Portable standalone editions for sending to readers | Local derived output; HTML is ignored |
| `dist/` | Vinext production build consumed by exporters | Generated and ignored |
| `pages-out/` | Verified static GitHub Pages artifact | Generated and ignored |
| `tmp/` | Disposable audit renders and intermediate files | Generated and ignored |
| `.next/`, `.vinext/`, `.wrangler/` | Framework and local-runtime state | Generated and ignored |
| `node_modules/` | Installed dependencies | Generated and ignored |

Root configuration files (`package.json`, the lockfile, TypeScript, Vite,
Vinext, lint, and PostCSS configuration) are versioned project infrastructure.
`tsconfig.tsbuildinfo` is a generated compiler cache and is ignored.

## Inside the source tree

- `app/proof/` contains proof-reader routes. A physical split such as Topic VI
  or XII uses an `a/` and `b/` route beneath its topic.
- `app/data/proof-topics/` is the preferred home for hand-authored educational
  content for later topics.
- `app/components/proof/` holds reusable proof-reader presentation components;
  a genuinely topic-specific figure may remain in `app/components/` with a
  descriptive name.
- `app/lib/` holds reusable typed runtime mathematics and site utilities.
- `app/data/part-i-content.generated.ts`,
  `app/data/part-ii-content.generated.ts`, and
  `app/data/topics-viii-xi-proofs.generated.ts` are mechanical outputs of the
  content scripts. Their source hashes provide a manuscript-drift check.
- `public/code/` holds dependency-free mathematical code intentionally offered
  to readers. It should have deterministic tests in `tests/`.
- `public/paper/` holds the website copy of the verified manuscript PDF.

## Where future work belongs

| Work product | Location |
| --- | --- |
| Topic route | `app/proof/topic-<roman>/page.tsx` |
| Split topic route | `app/proof/topic-<roman>/a/page.tsx` and `b/page.tsx` |
| Hand-authored topic exposition | `app/data/proof-topics/` or an existing topic-reader module in `app/data/` |
| Reusable proof UI or figure | `app/components/proof/` |
| Runtime mathematical algorithm | `app/lib/` |
| Reader-downloadable algorithm | `public/code/`, with tests in `tests/` |
| Manuscript extractor or exporter | `scripts/` |
| Pre-implementation chapter plan | `docs/proof-drafts/topic-<roman>.md` |
| Mathematical/source/implementation audit | `docs/proof-audits/` |
| First or second student reading | `docs/student-reviews/raw/pass-<n>-*.md` |
| Consolidated per-page student report | `docs/student-reviews/reports/topic-<roman>.md` |
| Temporary screenshots or rendered PDF pages | `tmp/` |
| Portable HTML edition for colleagues | `share/` |

Student reports use exactly three recommendation classes: **Needed**,
**Advised**, and **Would be nice to add**. Raw readings are evidence; the
per-page report is the maintainable decision aid. Neither automatically
changes a proof page.

## Local and public boundaries

- `npm run dev` exposes the whole local reader, including Topics II–XIV.
- Topics II–XIV are local-only until the author approves them individually.
- `npm run build:pages` builds `pages-out/`. The exporter currently has an
  explicit public-route allowlist: Home, History, My Journey, Topic I at
  `/proof/`, and Prerequisites. Later proof routes are not exported merely
  because they exist locally.
- `.github/workflows/deploy-pages.yml` is the active public deployment path and
  publishes only the verified `pages-out/` artifact.
- `.openai/hosting.json` and the Cloudflare scaffold support the local Vinext
  build; their presence is not approval to publish through a second host.
- `share/*.html` may be sent directly to selected readers but is not a public
  deployment artifact. Keep its generator versioned and regenerate the HTML
  when source content changes.

Never edit `dist/`, `pages-out/`, or a standalone HTML file to fix the site.
Make the change in `app/`, `public/`, or `scripts/`, then rebuild.

## Organization audit notes (1 August 2026)

- The large working artifacts currently present at the root—`node_modules/`,
  `.next/`, `.vinext/`, `.wrangler/`, `dist/`, `pages-out/`, `tmp/`, and
  `tsconfig.tsbuildinfo`—are correctly ignored and contain no tracked files.
- The generated standalone editions in `share/` are correctly ignored by the
  `share/*.html` rule. `share/README.md` is the small maintainers' note that may
  be versioned.
- `app/_sites-preview/` is an empty, untracked remnant of the original starter.
  It has no imports or content and should not receive generated files. It can be
  removed in a later approved housekeeping pass; nothing was moved or deleted
  during this audit.
- The database example/scaffold is not generated output, but it is inactive.
  Keep future paper-site data out of `examples/`; add persistence only after a
  deliberate architectural decision.
