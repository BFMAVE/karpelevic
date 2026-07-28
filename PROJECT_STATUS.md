# Project Status

## Project

**Critical Invariant Polygons and the Farey–Ito Boundary of Stochastic Spectra**

by Brecht Verbeken and Vincent Ginis

This file is the living project record. It should be updated at every milestone
with what is complete, what is under review, what remains, and which decisions
require author judgment.

## Goal

Design and build a maintainable GitHub Pages website that makes the paper and
its eventual Zenodo record approachable to:

1. mathematicians seeking a short orientation before reading;
2. interested readers seeking the problem and its history; and
3. Brecht Verbeken, as a personal and intellectual record of the work.

The site must distinguish carefully between the classical Karpelevič–Ito
theorem, prior formulations and realizations, self-contained background, new
structural results, new proofs or interpretations, and results not claimed as
new. Novelty must never be overstated.

## Canonical Sources

- PDF: `/Users/brechtverbeken/Desktop/research/Karp/Files and check/arxiv/Complete_Karp_arXiv.pdf`
- TeX: `/Users/brechtverbeken/Desktop/research/Karp/Files and check/arxiv/Complete_Karp_arXiv.tex`
- Metadata: `/Users/brechtverbeken/Desktop/research/Karp/Files and check/arxiv/arxiv_metadata.txt`
- Longer original with numerical appendix: `/Users/brechtverbeken/Desktop/research/Karp/Files and check/Complete_Karp.tex`
- Information-architecture reference: <https://roed314.github.io/gq2/>

The reference site may inform information architecture only. Its visual design
and wording must not be copied.

## Planned Site

Primary navigation:

- Problem
- History
- My Journey

Routes:

- `/` — Problem and two-minute project orientation
- `/history/` — sourced historical development and prior art
- `/journey/` — first-person intellectual history, with prompts where input is missing
- `/contribution/` — cautious novelty and contribution ledger
- `/explore/` — verified interactive mathematical visualization
- `/paper/` — canonical scholarly entry point and PDF
- `/updates/` — updates, corrections, errata, and reporting route

Footer navigation:

- Paper
- Zenodo
- GitHub
- Updates and Errata
- Citation

Pages named “The Main Ideas” or “Resources” must not be created.

## Design Direction

“Victorian Scientific Journal”: warm ivory paper, dark navy ink, restrained
oxblood or copper accents, fine rules, traditional serif headings, a highly
readable serif body, engraved-plate treatment for real mathematical figures,
and generous modern spacing.

Avoid steampunk, fantasy, fake handwriting, excessive parchment texture,
ornamental clutter, and decorative mathematics unrelated to the paper.
Mathematical diagrams must be generated deterministically from verified paper
material, not with generative imagery.

## Technical and Editorial Guardrails

- GitHub Pages must work under the repository subpath.
- Use a maintainable static-site architecture with content separated from presentation.
- Support mathematical typesetting with KaTeX or an equivalent.
- Use semantic, accessible HTML with keyboard, mobile, contrast, and reduced-motion support.
- Add no analytics, cookies, or third-party tracking by default.
- Every page must show a machine-readable `<time datetime="...">` last-updated value derived from the newest Git commit touching that page, with a build-time fallback.
- The build must use full Git history (`fetch-depth: 0`) and expose a site-wide build/version timestamp.
- Every page must link readers to Updates and Errata and include the agreed vibecoding disclosure.
- Do not invent a Zenodo DOI, arXiv identifier, journal status, publication status, email address, personal anecdote, novelty claim, or historical claim.
- Keep exact constructions distinct from numerical approximations.
- Preserve a clear Git history.
- Do not publish unfinished personal text or placeholder scholarly identifiers.
- Do not deploy the replacement site publicly until Brecht explicitly approves the final local preview.

## Milestones

| Phase | Scope | Status |
|---|---|---|
| 0 | Create the living project record | **Complete** |
| 1 | Discovery and content audit | **Complete** |
| 2 | Site foundation and Home-page visual specimen | **Complete — awaiting visual review** |
| 3 | Minimum coherent release: Home, Paper, Updates and Errata | Not started |
| 4 | Mathematical and historical context: Problem, History | **History first draft complete — awaiting author review** |
| 5 | Personal and contribution pages: My Journey, What This Paper Adds | **My Journey first draft complete — awaiting author review** |
| 6 | Interactive exploration | Not started |
| 7 | Final QA and author-approved deployment | **In progress — publication approved** |

## Completed

- A public placeholder repository and GitHub Pages site exist:
  - Repository: <https://github.com/BFMAVE/paper-project-site>
  - Placeholder: <https://bfmave.github.io/paper-project-site/>
- A local working project exists at `/Users/brechtverbeken/paper-project-site`.
- The canonical manuscript paths, required routes, audiences, design direction,
  review sequence, technical requirements, and deployment restriction have been recorded.
- This project-status file has been created before beginning the manuscript and content audit.
- The manuscript, metadata, figures, numerical appendix, reference website,
  local repository, and hosting configuration have been audited.
- The Phase 1 architecture, content inventory, contribution framework,
  reusable-figure inventory, numerical verification plan, proposed file tree,
  timestamp design, and Victorian design tokens are recorded in
  `PHASE_1_DISCOVERY.md`.
- An offline Home-page visual specimen has been implemented in the existing
  Vinext/React project, without changing the public GitHub Pages placeholder.
- The specimen includes the global masthead and navigation, Victorian journal
  typography and color system, responsive layouts, the project statement,
  an accessible problem introduction, a cautious contribution ledger, the
  manuscript PDF, updates-and-errata disclosure, and automatic machine-readable
  timestamps with a Git-history/build-time fallback.
- The hero plate plots \(\Theta_7\) deterministically from the Farey–Ito radial
  equation. Its implementation reproduces the manuscript's worked \(x=3/8\)
  radius and eigenvalue to the displayed precision.
- The canonical PDF has been copied to the local site and its SHA-256 checksum
  was verified as
  `2eeeb486b959edab4badf08e2585cde84227cc0896ec5371ea39f2e1d999bf66`.
- The local production build and four rendered-output checks pass.
- An author-approved destination is configured in an accessible contact form
  without displaying the address on the page. On this static site, submission
  opens a prepared message in the visitor's email application; no third-party
  form processor receives the message.
- The verified paper record is available on Zenodo at
  <https://zenodo.org/records/21529144> with DOI
  `10.5281/zenodo.21529144`.
- A full offline History page has been implemented at
  <http://localhost:3000/history>. It includes the author-requested
  first-person scope note, an annotated chronology from the Kolmogorov
  question through the present manuscript, a comparison of the polygonal,
  Farey-polynomial, and realizing-matrix viewpoints, and an explicit
  “What was known before this paper” ledger.
- The History page has 41 in-text citation links and a 12-item source ledger
  anchored in the original Dmitriev–Dynkin and Karpelevič papers, followed by
  Đoković, Ito, Johnson–Paparella, Kirkland–Laffey–Šmigoc,
  Kirkland–Šmigoc, Munger–Nickerson–Paparella, and
  Joshi–Kirkland–Šmigoc.
- The History page has passed the production build, rendered-output tests,
  desktop and mobile layout checks, internal citation checks, and a clean
  Chromium console check.
- The Problem page now ends its mathematical introduction with three explicit
  reading routes: directly to the Zenodo manuscript, into the sourced History,
  or toward the author’s personal Journey.
- The History introduction now gives its title a separate full-width line and
  uses a smaller display scale before the deck and first-person scope note.
- A self-contained Farey primer has been added before the historical timeline.
  It explains the unit-circle roots of unity, reduced fractions as rational
  angles, Farey neighbours, the mediant denominator test, the upper half-turn
  of \(F_5\), and the transition from the neighbouring pair \(1/3,2/5\) to the
  worked ray \(3/8\) at order eight.
- A full offline My Journey page has been implemented at
  <http://localhost:3000/journey>. It gives a first-person research path from
  the author’s indirect encounter with the Karpelevič theorem during the
  2018–2024 PhD, through Brando Vagenende’s work from Joanne Swift’s thesis and
  Arne Mertens’s help obtaining the English translation, to the present
  invariant-polygon manuscript.
- The Journey page treats the two Ran–Teng conjectures as the central practical
  turning point, links them to the four-cycle and tridiagonal papers, and
  distinguishes the original questions from the later results.
- The Journey page records the Data Analytics Laboratory’s self-description as
  GenAI pioneers and explains that successful AI-assisted work gave the author
  the courage to rethink Karpelevič, while retaining explicit human
  mathematical responsibility.
- The ILAS passage records that Brecht used the four-cycle result as a starting
  point for seeking a broader theorem, with Brando present at the conference.
  It then identifies Vincent as Brecht’s current postdoctoral collaborator.
- The Journey page explains that complete spectral-region classifications
  valid in every matrix size are exceptionally rare, naming the full
  Karpelevič region and Kirkland’s row-stochastic Leslie region as the
  principal all-dimensional examples in view.
- The Type II and Type III realization projects are cited separately. The
  verified Type III Zenodo record is linked directly.
- “New region of interest” is presented as the working paper on two-layer
  renewal stochastic matrices. The page states precisely that it treats the
  complete parameter family for every \(q\ge2\), not the full class of all
  stochastic matrices of order \(2q\).
- The Journey page includes an automatic per-page timestamp, a 16-item
  reference ledger, responsive layouts, the agreed AI-assistance disclosure,
  and a correction invitation.
- The Problem page now carries a visible, accessible “Under construction”
  marker.
- The Journey narrative and its reference ledger both cite Stephen Kirkland’s
  1992 all-dimensional eigenvalue region for row-stochastic Leslie matrices.
- A static GitHub Pages exporter and full-history deployment workflow now
  produce and validate Home, History, and My Journey beneath the repository
  subpath `/paper-project-site/`.

The original public placeholder is being replaced by the author-approved
three-page paper website in the current release.

## Not Yet Done

- The History-page claims have been checked against primary papers and
  official journal or author records, but the narrative and emphasis still
  require author review.
- The My Journey narrative and its account of the research sequence require
  author review before publication.
- The exact public Zenodo URL or DOI for the Type II realization paper has not
  been recovered from the public Zenodo index, so the paper is cited without an
  invented link.
- The Home-page visual direction has not yet been approved by the author.
- The standalone Paper and Updates and Errata pages have not been implemented.
- No interactive mathematics has been implemented or verified.
- No arXiv identifier, final manuscript status, or source-archive policy has
  been supplied or configured.
- The local repository is not yet connected and synchronized with the public
  GitHub repository.
- The approved GitHub Pages deployment has been prepared; the public workflow
  and final URL still require post-push verification.

## Critical Review Findings

- **The GitHub Pages blocker has been resolved.** A dedicated static exporter
  now renders the three live routes, removes worker-only hydration payloads,
  preserves the contact form with a small standalone script, rewrites assets
  beneath `/paper-project-site/`, and validates the finished artifact. The
  deployment workflow checks out full Git history and publishes that artifact.
- **The timestamps are currently fallbacks.** Every source file is still
  untracked, so Git cannot provide a page-specific modification date. There is
  also no workflow with `fetch-depth: 0`. The timestamp code is sound, but its
  promised behaviour cannot be demonstrated until the site has real commits.
- **The correction route is incomplete.** History and My Journey invite
  corrections, but the required Updates and Errata page does not exist yet.
  The Home contact form prepares a message in the reader’s mail application;
  it does not send through the site.
- **The manuscript assets need explicit labels.** The linked Zenodo PDF is
  93 pages with SHA-256
  `ca3be77169053635302798aa1ba204502db0a3267d2e76e4d8e763cede138f3b`;
  the bundled arXiv-preparation PDF is 91 pages with SHA-256
  `2eeeb486b959edab4badf08e2585cde84227cc0896ec5371ea39f2e1d999bf66`.
  These must not be presented as the same file on the future Paper page.
- **Mobile typography still needs author judgment.** The layout does not
  overflow, but the Home title occupies most of the first mobile viewport and
  the navigation and figure legend are close to the smallest comfortable
  reading size.
- **The mathematical plot lacks a numerical regression suite.** Its formula
  and the order-three exception were checked against the manuscript, but the
  current automated tests verify rendered markup and the PDF asset, not
  numerical boundary values or nesting.
- **Two Journey sources remain private working records.** The Type II and
  two-layer renewal descriptions can be checked against local manuscripts but
  do not yet have public archival links. Their wording should receive author
  approval before publication.
- **The arXiv queue paragraph is editorial rather than sourced.** It reflects
  the author’s requested explanation, but the statement that generative AI
  caused a “flood” of submissions is stronger and more contentious than the
  otherwise restrained scholarly tone.

## Next Action

Publish the approved three-page release to the existing
`BFMAVE/paper-project-site` repository, replacing its original placeholder.
Then verify the GitHub Pages workflow, public routes, assets, navigation, and
page-specific timestamps.

## Decision Log

- 28 July 2026 — The existing GitHub Pages page remains a temporary placeholder.
- 28 July 2026 — Work will proceed milestone by milestone, beginning with Phase 1 only.
- 28 July 2026 — Public deployment is withheld until explicit final approval.
- 28 July 2026 — Astro static output is the recommended architecture, pending author approval.
- 28 July 2026 — Phase 2 continues in the already-running Vinext/React project
  so the existing local hosting configuration and lockfile remain intact.
- 28 July 2026 — The Home page is the representative Phase 2 specimen.
- 28 July 2026 — Zenodo linking was initially withheld until a record could be
  verified; no identifier was invented.
- 28 July 2026 — Personal narrative remains a marked author prompt rather than
  fabricated prose.
- 28 July 2026 — Removed the periodical issue number, the “What This Paper
  Adds” primary-navigation tab, and all premature Zenodo placeholders after
  author review.
- 28 July 2026 — The full paper title now occupies its own wide band directly
  below the primary navigation.
- 28 July 2026 — The Home-page hero now uses one large central comparison of
  \(\Theta_1,\ldots,\Theta_7\), with exact base orders and numerically evaluated
  Farey–Ito contours for orders four through seven.
- 28 July 2026 — The AI-assistance disclosure is stated directly below the
  first block, beside the project purpose.
- 28 July 2026 — “First block” denotes the Home-page title, manuscript facts,
  combined \(\Theta_1,\ldots,\Theta_7\) plate, and direct statement of the
  stochastic eigenvalue problem.
- 28 July 2026 — Home now contains only the first block followed by the project
  purpose and generative-AI disclosure. The other main pages are reached only
  through the primary navigation.
- 28 July 2026 — Home states that the manuscript is currently in the arXiv
  moderation queue and will be updated when its record is released.
- 28 July 2026 — The contact form uses a private-on-page `mailto:` handoff; no
  destination address is displayed and no external form service is introduced.
- 28 July 2026 — The Status value links directly to the verified Zenodo record,
  and the Problem navigation item resolves to Home.
- 28 July 2026 — The contact panel states that mathematics is a cultural and
  community endeavour and explicitly welcomes comments and error reports.
- 28 July 2026 — The History page is framed as the author’s informed path
  through the literature, not as a complete survey or a claim to settle
  questions of priority.
- 28 July 2026 — The History synthesis treats the 1951 Karpelevič theorem as
  the classical solution, Ito’s 1997 paper as a compact equivalent
  reformulation, and the present manuscript as a new route through critical
  invariant polygons rather than a new discovery of the region.
- 28 July 2026 — The History page should be conceptually self-contained about
  Farey indexing: it now introduces rational angles and unit-circle roots
  before the chronology first invokes Ito’s formulation.
- 28 July 2026 — The Journey page contains no invented biographical material:
  its personal claims come from the author’s corrections, and its research
  chronology is anchored in the local manuscripts and public records.
- 28 July 2026 — No pull quote is used on the Journey page.
- 28 July 2026 — The ILAS account now centres on Brecht’s attempt to generalize
  the four-cycle classification, records Brando’s presence at the conference,
  and introduces Vincent as Brecht’s current postdoctoral collaborator.
- 28 July 2026 — The Journey page states that all-dimensional spectral-region
  classifications are exceptionally rare and cites Kirkland’s 1992
  row-stochastic Leslie classification alongside the classical Karpelevič
  theorem.
- 28 July 2026 — “New region of interest” refers to the two-layer renewal
  working paper and is described as a complete analysis of its structured
  family for every \(q\ge2\).

## Update Log

- 28 July 2026 — Created this living project record. Phase 0 complete; Phase 1 is next.
- 28 July 2026 — Completed the Phase 1 discovery and content audit; stopped at the review point.
- 28 July 2026 — Built and verified the offline Home-page visual specimen;
  stopped for author feedback without deploying it.
- 28 July 2026 — Fixed the Home-page hydration error caused by split text
  nodes in SVG tooltip labels; verified a clean Chromium console and reran the
  production build and rendered-output checks.
- 28 July 2026 — Applied the first visual-review revisions: simplified the
  masthead and navigation, widened the title, replaced the single-order plate
  with the combined order-one-through-seven atlas, removed unused Zenodo
  placeholders, and made the AI disclosure prominent. Build, checks, and
  browser console are clean.
- 28 July 2026 — Simplified Home to the author-defined first block plus Purpose
  and Generative AI, removed undeclared Farey terminology from the explanatory
  text, added manuscript-status spacing and a bottom “To the top” link, and
  verified that the desktop paper title occupies exactly two lines.
- 28 July 2026 — Corrected the overridden figure margin: manuscript
  label/value pairs now have a 17-pixel internal gap and the desktop figure
  begins 158 pixels after the facts. Added the arXiv queue explanation and the
  Gmail-addressed contact form; build, rendered checks, and browser console are
  clean.
- 28 July 2026 — Added the author-approved community invitation to the contact
  panel. Automatic in-page delivery remains an open deployment decision because
  GitHub Pages requires an external form endpoint or mail backend.
- 28 July 2026 — Built and verified the offline History page with an annotated
  timeline, three-language comparison, prior-art ledger, 41 in-text citations,
  12 full references, automatic timestamps, responsive layouts, and a visible
  AI-assistance disclosure. No deployment was performed.
- 28 July 2026 — Added the three Problem-page reading routes, made the History
  title smaller and full-width, and inserted the intuitive Farey-fraction
  primer with an order-five diagram and the \(3/8\) mediant example. The
  production build and all rendered-output checks pass.
- 28 July 2026 — Built the offline My Journey page with the author-approved
  personal chronology, the paired Ran–Teng conjectures, the Data Lab and GenAI
  turning point, the corrected ILAS account, the Type II and III projects,
  the complete two-layer renewal working family, and a 16-item reference
  ledger. No deployment was performed.
- 28 July 2026 — Revised the Journey page after author review: Karpelevič is
  described simply as too difficult to approach, the ILAS episode now records
  the attempted four-cycle generalization, the current postdoctoral
  collaboration with Vincent is explicit, and Kirkland’s Leslie classification
  is added to the all-dimensional context and reference ledger.
- 28 July 2026 — Removed the unfinished Explore and Paper routes from the
  primary navigation on every page. Direct links to the current manuscript
  remain available within the page content.
- 28 July 2026 — Corrected the linked Zenodo manuscript length from 91 to 93
  pages; the separate 91-page PDF is the arXiv-preparation variant. Added
  Joanne Swift’s 1972 thesis and Stephen Kirkland’s 1992 Leslie-region paper
  to the History chronology and source ledger, and linked Swift’s thesis from
  My Journey.
- 28 July 2026 — Added the missing current-page marker to the Problem
  navigation item so all three live routes now expose their active state
  consistently to assistive technology.
- 28 July 2026 — Updated the monotone-stochastic-matrix reference from its
  former preprint citation to the published 2026 Electronic Journal of Linear
  Algebra article, retaining the arXiv link alongside the journal and DOI.
- 28 July 2026 — Distinguished the 93-page Zenodo PDF and its checksum from the
  bundled 91-page arXiv-preparation PDF, and recorded the publication,
  timestamp, mobile-type, correction-route, and numerical-test findings from
  the first full-site audit.
- 28 July 2026 — A repository-subpath build probe confirmed that authored
  links and the favicon can be prefixed, but Vinext still emits root-relative
  `/assets/` URLs. The current build must therefore not be treated as a
  deployable GitHub Pages artifact.
- 28 July 2026 — The author explicitly approved public publication and directed
  this site to replace the original `BFMAVE/paper-project-site` placeholder.
- 28 July 2026 — Added the Problem-page construction marker, confirmed the
  Leslie-matrix citation in the Journey narrative and bibliography, and added
  a verified static exporter plus GitHub Pages deployment workflow.
