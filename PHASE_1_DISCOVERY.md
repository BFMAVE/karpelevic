# Phase 1 — Discovery and Content Audit

**Project:** *Critical Invariant Polygons and the Farey–Ito Boundary of Stochastic Spectra*

**Authors:** Brecht Verbeken and Vincent Ginis

**Audit date:** 28 July 2026
**Status:** Ready for author review

This document records the Phase 1 findings. It is an architectural and
editorial proposal, not a literature-level certification of novelty.
Classifications marked **provisional** must be checked against the primary
literature and approved by the authors before publication.

## 1. Executive Findings

1. The arXiv manuscript is a 91-page, two-part paper with two TikZ figures.
2. Part I develops the intrinsic critical-invariant-polygon machinery.
3. Part II applies that machinery to the classical stochastic eigenvalue
   region and supplies the scalar boundary extraction, sharp inequality,
   realization, nesting, and complete order-seven example.
4. The longer original source adds a self-contained numerical appendix with a
   concise boundary-extraction routine using Farey sequences and fixed-iteration
   bisection.
5. The manuscript itself explicitly identifies the Karpelevič–Ito region as
   classical and names the principal prior sources. This gives the website a
   sound starting point for a careful contribution ledger.
6. The current local project is a generic Vinext/Cloudflare starter. It has no
   commits and no remote. The public GitHub repository currently contains only
   the temporary one-page placeholder.
7. The public replacement must remain undeployed until the final author
   approval in Phase 7.

## 2. Canonical Source Inventory

### Manuscript package

| Source | Audit result | Proposed use |
|---|---|---|
| `Complete_Karp_arXiv.pdf` | 91 A4 pages; two figures; PDF created 24 July 2026; no embedded forms, scripts, or attachments | Canonical reader/download asset until superseded |
| `Complete_Karp_arXiv.tex` | 8,452 lines; complete arXiv manuscript | Canonical source for abstract, theorem wording, equations, labels, bibliography, and deterministic diagrams |
| `arxiv_metadata.txt` | Title, authors, affiliations, abstract, categories, MSC, funding, compiler notes; no arXiv identifier | Metadata source; identifiers remain configurable |
| `Complete_Karp.tex` | 8,579 lines; longer original | Source of the numerical extraction appendix |

### Verified PDF metadata

- Title: *Critical Invariant Polygons and the Farey–Ito Boundary of Stochastic Spectra*
- Subtitle in manuscript: *Contact Return Normal Forms, Projective Holonomy, and the Karpelevič–Ito Theorem*
- Authors: Brecht Verbeken and Vincent Ginis
- Pages: 91
- Figures: 2
- PDF SHA-256:
  `2eeeb486b959edab4badf08e2585cde84227cc0896ec5371ea39f2e1d999bf66`
- The arXiv metadata describes the submission package as prepared but supplies
  no arXiv identifier, journal reference, journal DOI, or report number.

The source notes that the arXiv variant omits only the appendix titled “A
complete numerical extraction routine” and adds the funding section.

## 3. Manuscript Content Map

Page references below follow the manuscript’s printed table of contents.

### Part I — Critical Invariant Polygons and Farey Return Normal Forms

| Section | Page | Website relevance |
|---|---:|---|
| The intrinsic theorem | 2 | Core definitions, criticality, principal structural theorem |
| Relation with the stochastic eigenvalue literature | 5 | Initial prior-art framing |
| Logical architecture | 5 | Excellent source for an explanatory proof-flow diagram |
| Elliptic coordinates and convex preliminaries | 6 | Background for the Problem page |
| Hereditary saturation | 12 | Candidate contribution-ledger item |
| One-sided contact selection | 15 | Candidate contribution-ledger item; first figure |
| Contact mutations and interval reduction | 24 | Candidate contribution-ledger item |
| Finite rotation sections from the lattice sail | 31 | Farey/lattice explanatory material |
| Projective no-skipping | 35 | Candidate contribution-ledger item |
| Complex return monodromy and Farey arithmetic | 51 | Bridge from polygon contacts to Farey data |
| Stochastic-matrix corollary | 59 | Invariant-polygon criterion and stochastic interpretation |
| Conclusion | 61 | Concise summary of the Part I logical chain |
| Foundational finite-dimensional tools | 61 | Self-contained background and proof dependencies |

### Part II — Invariant Polygons and the Farey–Ito Boundary

| Section | Page | Website relevance |
|---|---:|---|
| Introduction and proof architecture | 66 | Best source for the two-minute orientation |
| Farey data, candidate arcs, and direct extraction | 67 | Problem and Explore pages |
| Scalar radius equation | 68 | Verified numerical visualization contract |
| Main theorem | 71 | Classical theorem statement; must not be presented as new |
| Invariant polygons and elementary structure | 71 | Accessible explanation of why polygons arise |
| Critical-polygon input from Part I | 73 | Bridge between the paper’s two parts |
| Log-sine equalization and sharp radial inequality | 75 | Candidate new proof route |
| Explicit stochastic realization and attainment | 77 | Constructive realization; novelty must be checked against prior realizations |
| Farey refinement and nesting in the order | 79 | Candidate new proof route |
| Completion of the proof | 85 | Global assembly |
| Base orders | 86 | Small examples for the Problem page |
| Complete order-seven example | 89 | Main Explore-page test case |
| Worked ray \(x=3/8\) | 89 | Exact numerical verification fixture |
| Order-seven region | 90 | Hero/plate candidate |
| Concluding structural remarks | 90 | Editorially cautious summary |

## 4. Provisional Contribution Ledger

### Classical results and established problem setting

These must be presented as established, not as discoveries of this paper:

- the stochastic eigenvalue-region problem;
- the full Karpelevič theorem describing the region;
- the Farey/Ito formulation of boundary arcs;
- the fact that later literature contains matrix realizations and structural
  treatments of the region;
- Farey-sequence adjacency and standard elementary convexity/linear algebra;
- the meanings of row-stochastic matrices, eigenvalues, and \(\Theta_n\);
- the small orders \(\Theta_1=\{1\}\) and \(\Theta_2=[-1,1]\);
- unit-disk bounds, conjugation symmetry, and roots of unity on the unit circle.

### Known background included for self-containment

The manuscript treats these as tools rather than headline novelty:

- Perron–Frobenius and nonnegative spectral-radius bounds;
- strict separation, polarity, Hausdorff convergence, and polygon area;
- Smith normal form and lattice-index facts;
- elementary projective geometry;
- the invariant-polygon criterion linking stochastic eigenvalues to
  \(\lambda P\subseteq P\), subject to literature verification of the exact
  formulation;
- radial filling and compactness arguments;
- the scalar Farey carrier equation as the paper’s chosen direct extraction
  form of the classical boundary.

### Provisional new structural results

The manuscript presents the following as its intrinsic structural chain.
Publication copy should say “the paper proves” until the literature audit and
author classification are complete:

- radially critical elliptic contractions and polygonal complexity as the
  organizing framework;
- hereditary saturation;
- a one-sided contact representation;
- exact contact mutations and interval reduction;
- the finite return section expressed through the unimodular lattice sail;
- projective no-skipping / adjacent first return;
- contact-return normal form;
- return monodromy yielding a heterogeneous Ito product and exact lifted
  phase identity;
- the derivation of the Farey–Ito boundary from critical invariant polygons.

### Provisional new proof routes or interpretations

- the invariant-polygon-first derivation of the stochastic boundary;
- strict log-sine equalization of heterogeneous monodromy factors;
- the direct sparse realization used for attainment;
- scalar Farey-refinement nesting from order \(n-1\) to \(n\);
- the separation of intrinsic planar dynamics from the downstream stochastic
  corollary;
- the interpretation of Farey adjacency and the Ito product as scalar shadows
  of adjacent contact return.

The direct sparse realization must be compared carefully with Ito and the
2017, 2020, and 2022 realization literature before it is described as novel.

### Things the manuscript does not claim

- It does not claim the Karpelevič–Ito theorem or its classical boundary region
  as new.
- It does not claim that explicit stochastic boundary realizations are new in
  general.
- It does not use or claim uniqueness of invariant polygons, contact topology,
  or stochastic realizers.
- It does not claim that algebraic padding factors are additional strict
  contacts.
- Part I makes no \(N=3\) critical-polygon assertion.
- It does not claim that the numerical plot is evidence in place of proof.
- It does not currently claim a journal publication, DOI, arXiv identifier, or
  peer-review status.

## 5. Initial Historical Source Inventory

The manuscript cites six principal sources:

| Year | Source | Provisional role for the History page |
|---:|---|---|
| 1946 | N. A. Dmitriev and E. B. Dynkin, “On characteristic roots of stochastic matrices” | Early stochastic eigenvalue-region work |
| 1951 | F. I. Karpelevič, “On the characteristic roots of matrices with nonnegative elements” | Full classical solution |
| 1997 | H. Ito, “A new statement about the theorem determining the region of eigenvalues of stochastic matrices” | Farey/polynomial reformulation |
| 2017 | C. R. Johnson and P. Paparella, “A matricial view of the Karpelevič theorem” | Matricial formulation and interpretation |
| 2020 | S. Kirkland, T. Laffey, and H. Šmigoc, “The Karpelevič region revisited” | Later structural treatment |
| 2022 | S. Kirkland and H. Šmigoc, “Stochastic matrices realising the boundary of the Karpelevič region” | Boundary realizations |

This is an inventory, not yet the Phase 4 source ledger. The History page
will require primary-source verification of exact claims, stable links/DOIs,
name transliterations, and any earlier or intermediate sources omitted by the
current bibliography.

## 6. Reusable Mathematical Material

### Existing deterministic figures

1. **Half-open ownership/contact surgery** — TikZ source around the Part I
   one-sided-contact section; rendered on PDF page 17. It can become a
   redrawn web plate explaining endpoint ownership and mutation.
2. **Boundary of \(\Theta_7\)** — PGFPlots/TikZ source at the end of Part II;
   rendered on PDF page 91. It includes the unit circle, Farey boundary nodes,
   the \(x=3/8\) ray, and its marked solution.

The order-seven TeX currently stores a long coordinate list. The website
should regenerate those points from the scalar equation rather than copying
the coordinate list.

### Numerical routine in the longer manuscript

The numerical appendix supplies:

- `farey_sequence(n)`
- `upper_farey(n)`
- `cell_data(left, right, n)`
- `boundary_radius(x, left, right, n, iterations=90)`
- `upper_boundary(n, points_per_cell=80)`
- `plot_region(n, points_per_cell=100)`

The algorithm uses exact rational Farey data and a fixed-iteration numerical
bisection for the radius. The web version should preserve that separation:

- Farey fractions, adjacency, cell labels, \(q,s,d,e\): exact integer/rational
  computation.
- Boundary radius and plotted coordinates: explicitly labeled numerical
  approximation.

### Required numerical checks before interactive publication

- Farey adjacency determinant and denominator-sum conditions.
- Endpoint behavior, including the exceptional \(n=3\) terminal cell.
- Residual sign change and monotonicity on \(\rho\in[0,1]\).
- The worked \(n=7,\ x=3/8\) values:
  - \(\rho=0.940100221928822853\ldots\)
  - \(\alpha=0.655850787368397414\ldots\)
  - \(\beta=0.344149212631602586\ldots\)
  - \(\lambda=-0.664751241920849+0.664751241920849\,i\)
- Conjugation symmetry.
- Unit-circle Farey endpoints.
- Agreement with the manuscript’s \(\Theta_7\) plate.
- Candidate nesting tests across several consecutive orders.

### Additional deterministic plates to derive from the paper

- a row-stochastic matrix and its convex-combination action;
- \(\lambda P\subseteq P\) for a small invariant polygon;
- a Farey-cell/lattice-sail diagram;
- the scalar chord/ray construction;
- the sparse block graph realizing a carrier polynomial;
- the two-part proof architecture as a semantic flow diagram.

## 7. Reference-Site Information Architecture Audit

Reference: <https://roed314.github.io/gq2/>

### Useful patterns to adapt

- The homepage moves from **problem** to **theorem/result** to **how it was
  found**, giving readers several depths of entry.
- A first navigation group contains the primary scholarly actions; a second
  group leads to evidence, reproducibility, and development material.
- Explanatory prose links directly to exact locations in the interactive
  paper.
- The paper has a deep table of contents, search, and readability controls.
- Development history is separated into stages and highlights key turning
  points without confusing process records with proof.
- Errata and citation are persistent footer-level destinations.

### Patterns not to copy

- visual design, colors, typography, wording, or layout;
- the reference project’s formalization/verifier hierarchy, which is not
  relevant to this paper;
- its very large transcript-level development record;
- claims about AI-assisted discovery or validation that do not apply here.

### Proposed translation for this project

- Use the Home page for **problem → classical answer → this paper’s route →
  personal motivation**.
- Use The Paper as the canonical scholarly action.
- Use Problem, History, and What This Paper Adds as three distinct layers:
  explanation, prior art, and novelty ledger.
- Use My Journey for an authored narrative rather than a transcript archive.
- Use Updates and Errata as the persistent correction and accountability hub.
- Deep-link accessible explanations to exact PDF sections/pages.

## 8. Local Repository and Hosting Audit

### Current state

- Local path: `/Users/brechtverbeken/paper-project-site`
- Git branch: `main`
- Git commits: none
- Git remote: none
- Current local architecture: Vinext/React/Cloudflare starter
- `.openai/hosting.json`: present, with no D1 or R2 bindings
- Current implementation: one placeholder React page plus a standalone
  `docs/index.html`
- Current public repository: <https://github.com/BFMAVE/karpelevic>
- Current public site: <https://bfmave.github.io/karpelevic/>

The local starter is not synchronized with the public repository. Its test
file still describes the deleted starter skeleton and should not be treated as
a valid production test.

### Recommended architecture for author approval

Use **Astro in fully static-output mode**, with:

- Markdown/MDX or structured data files for revisable prose;
- Astro layouts and components for presentation;
- KaTeX rendered at build time;
- vanilla TypeScript/Canvas or deterministic SVG for the future explorer;
- a single GitHub Pages workflow that builds to `dist/`;
- a configured base path of `/karpelevic`;
- no runtime server, database, authentication, analytics, or cookies.

Why this fits:

- static by default and well matched to GitHub Pages;
- content is naturally separated from components and CSS;
- mathematical pages can remain mostly HTML with minimal client JavaScript;
- interactive visualization can be added later as an isolated client module;
- project-subpath handling is explicit;
- build-time Git metadata can drive page timestamps.

The current generic Cloudflare starter should be replaced only after this
architecture is approved. The project record, audit documents, and manuscript
assets will be preserved.

## 9. Proposed File Tree

```text
paper-project-site/
├── .github/
│   └── workflows/
│       └── pages.yml
├── public/
│   ├── paper/
│   │   └── critical-invariant-polygons.pdf
│   ├── source/
│   ├── fonts/
│   └── icons/
├── scripts/
│   ├── git-page-dates.mjs
│   ├── verify-paper-assets.mjs
│   └── verify-region.mjs
├── src/
│   ├── components/
│   │   ├── SiteHeader.astro
│   │   ├── SiteFooter.astro
│   │   ├── LastUpdated.astro
│   │   ├── Plate.astro
│   │   ├── MathNote.astro
│   │   ├── PdfViewer.astro
│   │   ├── CitationBlock.astro
│   │   └── ErrataNotice.astro
│   ├── content/
│   │   ├── home.md
│   │   ├── problem.md
│   │   ├── history.md
│   │   ├── journey.md
│   │   ├── contribution.md
│   │   ├── explore.md
│   │   ├── paper.md
│   │   └── updates.md
│   ├── data/
│   │   ├── site.ts
│   │   ├── paper.ts
│   │   ├── bibliography.ts
│   │   ├── history.ts
│   │   ├── contributions.ts
│   │   └── updates.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── lib/
│   │   ├── git-dates.ts
│   │   ├── paths.ts
│   │   └── math/
│   │       ├── farey.ts
│   │       ├── region.ts
│   │       └── invariant-polygon.ts
│   ├── pages/
│   │   ├── index.astro
│   │   ├── problem/index.astro
│   │   ├── history/index.astro
│   │   ├── journey/index.astro
│   │   ├── contribution/index.astro
│   │   ├── explore/index.astro
│   │   ├── paper/index.astro
│   │   └── updates/index.astro
│   └── styles/
│       ├── tokens.css
│       ├── global.css
│       ├── components.css
│       └── print.css
├── tests/
│   ├── content.test.mjs
│   ├── timestamps.test.mjs
│   ├── paths.test.mjs
│   └── region.test.mjs
├── astro.config.mjs
├── package.json
├── PROJECT_STATUS.md
└── PHASE_1_DISCOVERY.md
```

## 10. Automatic Timestamp Design

Each route will map to one source content file. During the build:

1. run `git log -1 --format=%cI -- <content-file>`;
2. use that commit timestamp for the page;
3. fall back to `SOURCE_DATE_EPOCH`, then the build timestamp, when Git history
   is unavailable;
4. render `<time datetime="ISO-8601">Last updated 28 July 2026</time>`;
5. link the nearby wording to `/updates/`;
6. expose the short Git commit and build timestamp in the footer.

The GitHub Pages workflow must use:

```yaml
- uses: actions/checkout@v4
  with:
    fetch-depth: 0
```

Tests will fail if a route lacks a `<time datetime>` value or if the base-path
URL handling is wrong.

## 11. Victorian Scientific Journal Design Tokens

### Color

| Token | Value | Role |
|---|---|---|
| `--paper` | `#F4EEDD` | Main warm ivory ground |
| `--paper-deep` | `#E8DEC7` | Inset plates and metadata bands |
| `--ink` | `#17263D` | Dark navy body and headings |
| `--ink-soft` | `#3A4658` | Secondary text |
| `--oxblood` | `#7A2638` | Primary accent and important rules |
| `--copper` | `#955C38` | Secondary accent and interactive states |
| `--rule` | `#B8A98E` | Fine non-text rules |
| `--wash` | `rgba(122, 38, 56, 0.06)` | Restrained accent wash |

Contrast against `--paper`:

- navy: 13.12:1
- soft navy: 8.25:1
- oxblood: 8.38:1
- copper: 4.69:1

### Typography

- Display/headings: **Cormorant Garamond**, self-hosted, Latin Extended.
- Body: **Source Serif 4**, self-hosted, Latin Extended.
- Interface labels and metadata: a restrained system sans-serif stack.
- Equations: KaTeX fonts, loaded locally.
- Headings use sentence case; small caps are reserved for plate labels,
  running metadata, and navigation.
- Target body measure: 66–74 characters.
- Body line height: 1.65–1.75.

### Type scale

```text
--step--1: clamp(0.82rem, 0.80rem + 0.08vw, 0.88rem)
--step-0:  clamp(1.05rem, 1.01rem + 0.20vw, 1.18rem)
--step-1:  clamp(1.35rem, 1.24rem + 0.55vw, 1.72rem)
--step-2:  clamp(1.75rem, 1.53rem + 1.10vw, 2.45rem)
--step-3:  clamp(2.35rem, 1.93rem + 2.10vw, 3.75rem)
--step-4:  clamp(3.10rem, 2.35rem + 3.75vw, 5.90rem)
```

### Spacing and layout

- `--space-1` through `--space-8`: 0.35, 0.6, 1, 1.5, 2.25, 3.5, 5.5, 8rem.
- Main reading column: 46rem maximum.
- Wide figure column: 76rem maximum.
- Page gutters: `clamp(1rem, 4vw, 4.5rem)`.
- Hairline rules: 1px; major rules: 2px double or paired hairlines.
- Border radii remain small or absent; plates should feel typeset, not card-based.

### Figures and plates

- Figure label pattern: `Plate I · The order-seven region`.
- Navy linework on ivory; oxblood for one highlighted ray/contact only.
- Fine cross-hatching or stippling generated in SVG/CSS where mathematically
  useful.
- No ornamental equations, faux engraving filters, or degraded paper effects.
- Paper texture: a very low-opacity CSS gradient/noise layer that disappears
  in high-contrast and print modes.

### Motion and interaction

- Motion is functional and under 180ms.
- `prefers-reduced-motion: reduce` removes nonessential transitions.
- Focus rings use a 2px oxblood outline with a 3px paper offset.
- Interactive charts must remain keyboard-readable through summaries, data
  tables, or equivalent controls.

## 12. Page-Level Content Inventory

### Home

Available now:

- title, authors, affiliations;
- formal abstract;
- two-part proof architecture;
- accessible classical problem statement;
- concise manuscript-backed structural summary;
- \(\Theta_7\) hero material;
- required project-aim sentence.

Needs author input or approval:

- personal “why I care” paragraph;
- exact manuscript status/version wording;
- Zenodo button behavior while no DOI exists.

### The Problem

Available now:

- definition of \(\Theta_n\);
- invariant-polygon criterion;
- radial filling and unit-circle facts;
- small orders;
- Farey-cell and scalar-radius definitions;
- order-seven example and worked ray;
- exact PDF section/page targets.

Needed during Phase 4:

- an accessible exposition layer;
- deterministic small-\(n\) plates;
- checks that every simplification preserves the mathematics.

### History

Available now:

- six core bibliography entries;
- the manuscript’s cautious one-paragraph literature positioning.

Needed during Phase 4:

- primary-source verification;
- exact statement of each contribution;
- stable bibliographic links and identifiers;
- author review of transliteration and historical emphasis.

### My Journey

Available now:

- only formal manuscript facts: collaboration and the two-part structure.

Missing:

- how Brecht encountered the problem;
- motivation, failed approaches, turning points, collaboration story, reasons
  for the two-part development, and current open interests.

No prose should be invented. Phase 5 should begin with structured author
prompts.

### What This Paper Adds

Available now:

- the manuscript’s explicit proof dependency ledger;
- the provisional classification in this audit;
- the “does not claim” constraints.

Needed during Phases 4–5:

- literature verification of every novelty classification;
- author approval of the comparison table;
- careful treatment of sparse realizations relative to prior work.

### Explore

Available now:

- a complete numerical extraction routine;
- exact Farey-cell data;
- a scalar bisection problem;
- the order-seven region and \(x=3/8\) verification fixture.

Deferred to Phase 6 as requested.

### The Paper

Available now:

- title, authors, affiliations, emails, formal abstract, PDF, checksum,
  table of contents, citation source data, and funding statement.

Missing/configurable:

- Zenodo DOI/URL;
- arXiv identifier/URL;
- author-approved manuscript status and version label;
- source-archive publication choice.

### Updates and Errata

Available now:

- GitHub repository and GitHub Issues as the preferred reporting route;
- manuscript emails as possible alternatives, subject to author approval;
- initial version facts and PDF checksum.

Needed:

- author decision on public reporting email;
- versioning convention for paper and site;
- first entry documenting the initial site build.

## 13. Genuinely Blocking Information

Nothing blocks Phase 2’s local visual specimen.

Before Phase 3 can be approved, the authors should decide:

1. the exact manuscript status/version wording;
2. whether a missing Zenodo/arXiv record is shown as “forthcoming” or omitted
   until available; and
3. whether Updates and Errata should use GitHub Issues only or also publish an
   email address.

Phase 5 is blocked on author-supplied personal narrative. Public claims in the
contribution ledger are blocked on the primary-literature audit and author
approval.

## 14. Decisions Requested at the Phase 1 Review Point

1. Approve or revise the Astro static-site architecture and proposed file tree.
2. Approve or revise the Victorian design tokens and typography direction.
3. Confirm that the provisional novelty categories are suitable as an audit
   framework, without yet approving the claims for publication.
4. Confirm the preferred manuscript status/version wording.
5. Choose GitHub Issues only, or GitHub Issues plus a published email address,
   for Updates and Errata.

No site scaffolding, page implementation, remote push, or replacement
deployment should occur until this review point is approved.
