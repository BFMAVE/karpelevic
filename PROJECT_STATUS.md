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
- The Proof

Routes:

- `/` — Problem and two-minute project orientation
- `/history/` — sourced historical development and prior art
- `/journey/` — first-person intellectual history, with prompts where input is missing
- `/proof/` — a fourteen-topic guided reader from critical invariant polygons
  to the Karpelevič–Ito theorem, followed by a complete order-seven example
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
| 2 | Site foundation and Home-page visual specimen | **Complete — author reviewed** |
| 3 | Minimum coherent release: Home, Paper, Updates and Errata | Not started |
| 4 | Mathematical and historical context: Problem, History | **History first draft complete — awaiting author review** |
| 5 | Personal and contribution pages: My Journey, What This Paper Adds | **My Journey first draft complete — awaiting author review** |
| 6 | Interactive exploration | Not started |
| 7 | Final QA and author-approved deployment | **Current three-page release deployed and verified** |
| 8 | Fourteen-topic annotated proof reader | **Complete locally; two independent student readings and 16 classified reports complete; Topics I–III published** |

## Canonical Proof-Reader Architecture

The proof reader has **fourteen topics**. Topics I–XIII form the necessary
mathematical route to the Karpelevič–Ito theorem. Topic XIV is a worked example
and is not a dependency of the proof.

The order is pedagogical rather than a copy of the manuscript’s section order:
the reader first completes the intrinsic polygonal engine, then returns to
stochastic matrices, constructs and bounds the candidate boundary, proves
attainment and nesting, and states the classical theorem only after all of its
ingredients are available.

1. **Topic I — Critical maps and invariant polygons.**
   PDF pages 2–3 and 6–10; supporting Lemma A.2 on page 63.
   Complete locally and published.
2. **Topic II — From convex order to contact on every side.**
   PDF pages 10–15; supporting Lemmas A.1 and A.3 on pages 61 and 63.
   Complete locally and published.
3. **Topic III — Half-open boundary assignments and edge clipping.**
   PDF pages 15–19; supporting Lemmas A.4 and A.5 on page 64.
4. **Topic IV — From endpoint order to contact reduction.**
   PDF pages 19–30.
5. **Topic V — Rotation arithmetic and the projective corridor.**
   PDF pages 31–40; supporting Lemma A.6 on page 65.
6. **Topic VI — Projective escape and unit return.**
   PDF pages 41–50. This is expected to be the hardest single topic; Topics
   V–VI together are the principal structural bottleneck.
7. **Topic VII — Farey data and the closed-return product.**
   PDF pages 51–58.
8. **Topic VIII — Returning to stochastic spectra.**
   PDF pages 3–5, 59–60, 66, and 71–75. This topic includes the complete bridge
   from stochastic eigenvalues through invariant polygons and new-shell radial
   extrema to \(N\)-criticality.
9. **Topic IX — The candidate Farey–Ito boundary.**
   PDF pages 67–71. Farey cells, scalar radius equations, carrier polynomials,
   endpoint limits, and the order-three exception.
10. **Topic X — The sharp radial upper bound.**
    PDF pages 73–77. Critical monodromy, the Jensen sheet, log-sine
    equalization, and the sharp cellwise inequality.
11. **Topic XI — Constructing stochastic matrices and proving attainment.**
    PDF pages 77–79. Sparse carrier matrices and the independent reverse
    inclusion.
12. **Topic XII — Farey refinement and nesting.**
    PDF pages 79–85. This is expected to be the densest topic after the Part I
    engine.
13. **Topic XIII — The Karpelevič–Ito theorem.**
    The formal statement on page 71 and the completed proof on pages 85–89:
    small orders, induction, radial boundary identification, conjugation, and
    the unit-circle statement.
14. **Topic XIV — The complete order-seven example and boundary laboratory.**
    PDF pages 89–90, including the worked ray \(x=3/8\). This is an
    illustration of the theorem, not part of its logical proof. It has three
    planned parts:
    1. the complete order-seven Farey-cell atlas and worked ray;
    2. a documented and mathematically verified boundary-generation routine,
       published as reusable source code in the project’s GitHub repository;
    3. an interactive website widget in which the reader chooses an order
       \(n\) and receives the corresponding boundary drawing.

    The widget must expose which data are exact—Farey neighbours, denominator
    labels, endpoint roots of unity, and carrier equations—and which output is
    numerical, such as root-finding, sampling, and the rendered curve. The
    implementation should reuse or adapt the numerical routine in the longer
    original manuscript and must be checked against the complete \(n=7\)
    example and the worked ray \(x=3/8\) before publication.

The five necessary chapters after Topic VIII are therefore Topics IX–XIII.
Topic XIV is the optional but planned complete example and computational
laboratory. Its code and widget are scholarly outputs of the site, but they are
not dependencies in the proof of the Karpelevič–Ito theorem.

## Completed

- The author-approved three-page release is public:
  - Repository: <https://github.com/BFMAVE/karpelevic>
  - Website: <https://bfmave.github.io/karpelevic/>
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
  verified Zenodo records are linked directly: Type III at
  <https://zenodo.org/records/21219088> and Type II at
  <https://zenodo.org/records/21653759>.
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
  subpath `/karpelevic/`.
- The original public placeholder has been replaced by the author-approved
  Home/Problem, History, and My Journey release.
- The public Home, History, My Journey, and bundled-PDF URLs were verified in
  Chrome after deployment. All three HTML routes load without console errors,
  expose the intended three-item primary navigation, and serve their
  repository-subpath assets correctly.
- A local textbook edition of Topics I and II of **The Proof** has been
  implemented at `/proof/`. The complete route to the Karpelevič–Ito theorem
  and its order-seven example has been inventoried into fourteen consecutive
  topics. Topics I and II are public; Topics III–XIV remain local.
- Topic I contains its complete mathematical text: two numbered definitions,
  seven results, seven canonical proofs, the surrounding argument, and 39
  displayed formulas. Proposition 2.2 additionally offers an optional
  six-step expansion of its concise manuscript proof.
- The full text is generated deterministically from the canonical TeX source
  by `scripts/generate-part-i-content.mjs`. The generator converts the
  mathematics to accessible native MathML, assigns stable web theorem
  numbers and equation anchors, and records the SHA-256 hash of the source
  used for the edition.
- Topic I now begins with an explicit definition sequence for real planes,
  real-linear maps, compact nondegenerate convex polygons, invariance,
  polygonal complexity, elliptic maps, spectral radius, and elliptic
  contractions. No elliptic contraction is used in the chapter overview
  before this vocabulary is established.
- Named mathematical operators in the web edition use explicit function
  notation throughout: `tr(T)`, `det(T)`, `Ext(P)`, `relint(F)`, and
  `aff(S)`.
- The foundational definition block now explains why compactness is essential
  to the vertex-count problem and distinguishes ambient interior from relative
  interior. These longer explanations are expandable.
- Definition 1.1 and Definition 1.2 remain explicitly separate from the
  results. Their former editorial preamble and per-definition prerequisite
  callouts have been removed.
- Each of Topic I’s seven results is presented as one continuous textbook
  unit. Supporting definitions, prerequisite links, walkthroughs, and source
  notes are included only where they add useful information rather than as a
  compulsory template on every result.
- Topic I includes a deterministic overview plate and two additional inline
  concept figures. The separate illustrated prerequisite library remains
  available as a direct local route but is no longer promoted inside the
  proof chapter.
- The **How the Proof Works** title now occupies the full available page
  width before the deck and edition metadata.
- Result cards may carry one of exactly four agreed mathematical-statement
  labels: Classical result, Previously known, Strengthened, or New result.
  The labels classify statements, never the proof supplied on the website.
  Proposition 2.1 deliberately carries no classification or source panel at
  the author’s request.
- A mechanism found only in Karpelevič’s original proof does not receive a
  fifth label and is not promoted to “Previously known.” Its historical
  antecedent is cited in prose and the result remains deliberately unbadged.
  Every Classical, Previously known, or Strengthened label points to a source.
- The proof reader is progressive-enhancement friendly: Topic I is fully
  server-rendered and remains readable without JavaScript.
- The Topic I proof reader is publicly available at
  <https://bfmave.github.io/karpelevic/proof/>. The deployed page and its
  stylesheet and reading-mode script were verified directly after publication.
- Topic II, **From convex order to active sides**, is complete locally inside
  the same fourteen-topic proof reader. It contains Lemmas 2.7–2.10, Proposition
  3.1, Theorem 3.2, Remark 3.3, and Lemma 4.1, together with the two appendix
  foundations used by the theorem: Lemmas A.1 and A.3.
- Topic II deliberately presents the results in dependency order
  `2.7–2.10 → 3.1 → A.1 → A.3 → 3.2 → 3.3 → 4.1`. The appendix labels are
  preserved, but the two tools are brought forward before their first use so
  that the web chapter has no backwards dependency hidden from the reader.
- A visible dependency covenant identifies every import from Topic I,
  explicitly cites the standard convexity and matrix-analysis background, and
  distinguishes those inputs from the nine results proved in full on the
  page. The standard source shelf now gives precise Schneider and
  Horn–Johnson references.
- Every Topic II result has its manuscript label, the definitions first needed
  there, a complete statement, and—except for Remark 3.3—a complete proof in a
  closed disclosure. Longer conceptual routes are optional rather than a
  compulsory second proof.
- The chapter adds exact explanations of the finite common-neighbourhood
  argument, normal-fan support coordinates, positive spanning and recession,
  complementarity, and the passage from support equality to actual side
  contact.
- Plate II was replaced by an exact regular-heptagon construction:
  \(T=\cos(\pi/7)e^{i\pi/7}\) sends every vertex to a side midpoint. Three
  additional deterministic SVG plates illustrate the triple-sign test,
  one exact row of the normal-fan matrix, and vertex–side duality under
  polarity.
- The two-topic reader now has working Topic I/Topic II navigation, deep links
  that reveal the correct hidden topic before scrolling, Guided and Compact
  modes, and responsive navy/oxblood chapter treatments.
- A new self-contained offline edition containing Topics I and II is available
  at `/Users/brechtverbeken/Desktop/Critical_Invariant_Polygons_Topics_I_II.html`.
  The older Topic I standalone file was retained unchanged.
- The local production build, lint, and all six rendered-output test suites
  pass. The Topic II tests verify item order, manuscript labels, nine closed
  proof disclosures, formula anchors, unique element IDs, internal fragment
  targets, and deterministic figure data.
- Topic I has received a second first-use vocabulary audit. Five terms that a
  reader with linear algebra but little topology or convex geometry might not
  know now have closed, local explanations before the result that first uses
  them: the adjoint for the adapted inner product, homeomorphism, Hausdorff
  convergence, density of an infinite rotation orbit, and degree \(+1\).
- The Hausdorff-convergence explanation gives the two-sided Hausdorff-distance
  formula, the \(\varepsilon\)-neighbourhood interpretation, a moving-vertex
  polygon example, and the exact isometry argument showing why complex
  conjugation preserves Hausdorff convergence. It cites Schneider,
  *Convex Bodies*, 2nd ed., §1.8.

## Not Yet Done

- The History-page claims have been checked against primary papers and
  official journal or author records, but the narrative and emphasis still
  require author review.
- The standalone Paper and Updates and Errata pages have not been implemented.
- The standalone Explore page has not been implemented. A first verified
  interactive boundary laboratory now exists locally inside Topic XIV.
- Topics III–XIV are complete locally in the guided textbook format but have
  not been pushed or deployed; they await author review topic by topic.
- PDF page-number links and sentence-level marginal annotations have not yet
  been added. Topic I currently explains every proof in numbered conceptual
  steps without annotating every individual sentence.
- The statement classifications are a conservative first pass and still
  require author review, especially the boundary between an unbadged
  Karpelevič-only antecedent, “Strengthened,” and “New result.”
- No arXiv identifier, final manuscript status, or source-archive policy has
  been supplied or configured.
- The local repository is not yet connected and synchronized with the public
  GitHub repository.
- The public repository was updated through GitHub's browser interface, so the
  local source branch and the public static-output commit history are not yet
  synchronized as one conventional source deployment branch.

## Critical Review Findings

- **The GitHub Pages blocker has been resolved.** A dedicated static exporter
  now renders the three live routes, removes worker-only hydration payloads,
  preserves the contact form with a small standalone script, rewrites assets
  beneath `/karpelevic/`, and validates the finished artifact. The
  deployment workflow checks out full Git history and publishes that artifact.
- **The timestamps are live and machine-readable.** The source files have real
  Git history, the deployment workflow uses `fetch-depth: 0`, and every public
  HTML route exposes a visible `<time datetime="...">` value. The current build
  also retains the documented build-time fallback for history-less exports.
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

Review Topics III–XIV locally in order, beginning with Topic III. Revise each
chapter from author feedback before any deployment. The separate Paper and
Updates and Errata pages and synchronization of the public repository with the
full local source history remain later site milestones.

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
- 28 July 2026 — The author-approved Home/Problem, History, and My Journey
  release replaced the original GitHub Pages placeholder and was verified at
  <https://bfmave.github.io/karpelevic/>.
- 28 July 2026 — The repository itself was renamed from `paper-project-site`
  to `karpelevic`, moving the canonical GitHub Pages URL to
  <https://bfmave.github.io/karpelevic/>.
- 28 July 2026 — The temporary visible rename was undone before the repository
  rename. The masthead and browser-title suffix remain “Critical Invariant
  Polygons”; only the repository and URL use `karpelevic`.

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
- 28 July 2026 — Published the static release to the existing
  `BFMAVE/paper-project-site` repository through the authenticated Chrome
  session. Verified the Home, History, My Journey, and bundled-PDF URLs, the
  three-item navigation, the construction marker, the History source ledger,
  the Journey Leslie-matrix citation, Zenodo linking, and clean browser
  consoles on all HTML routes.
- 28 July 2026 — Corrected the repository-level rename: changed the GitHub
  Pages base path to `/karpelevic/`, rebuilt every internal URL, and moved the
  public project from `BFMAVE/paper-project-site` to `BFMAVE/karpelevic`.
- 28 July 2026 — Restored the original visible site identity before publishing
  the repository rename, then verified Home, History, My Journey, and the PDF
  at their new `/karpelevic/` addresses with clean browser consoles.
- 29 July 2026 — Verified the public Type II paper record on Zenodo and added
  its record and DOI links to the My Journey reference ledger.
- 29 July 2026 — Implemented the approved Topic I mathematical and editorial
  audit, the corrected rotation-orbit figure, Guided/Compact reading modes,
  full-width single-topic layout, navy topic opener, tighter reading rhythm,
  print treatment, regression tests, and interactive standalone export. The
  proposed source table was deliberately omitted.
- 29 July 2026 — Published the validated Topic I static release to the existing
  GitHub Pages project and verified the live proof route, 39 displayed
  formulas, Guided/Compact controls, stylesheet, and standalone proof script.
- 29 July 2026 — Adopted the canonical fourteen-topic proof architecture.
  Topics I–XIII now work toward the Karpelevič–Ito theorem in dependency order;
  Topic XIV is the complete order-seven example and is not a proof dependency.
  Topic VIII will absorb the full stochastic-to-criticality bridge, leaving
  five necessary chapters, Topics IX–XIII, after it.
- 1 August 2026 — Completed the local fourteen-topic proof reader. Topics
  I–XIII now preserve 93 formal statement cards and 81 complete manuscript
  proof blocks; Topic XIV supplies the verified order-seven example,
  downloadable boundary generator, and interactive order selector. The
  technical, mathematical, source, interaction, and route-closure audits were
  recorded in `docs/proof-audits/`; these were not the two independent
  student-perspective readings later requested by the author. The final build,
  lint, 28-test suite, sixteen-route closure audit, and GitHub project-subpath
  check all pass. Topics II–XIV remain deliberately unpublished.
- 1 August 2026 — Completed two genuinely independent, linear
  student-perspective readings of every physical proof page. Sixteen
  consolidated reports retain the evidence from both readings and classify 44
  recommendations as Needed, 107 as Advised, and 45 as Would be nice to add.
  No recommendation was implemented during the review.
- 6 August 2026 — Published the current Topic I reader to the existing GitHub
  Pages static branch. The release includes the fourteen-topic manuscript map,
  Topic I's complete two-definition/seven-result inventory, the current
  explanatory layers, and its cited source shelf. No Topic II–XIV page file was
  included. Updated Topic I static content commit pushed: `f02bfa2`.
- 6 August 2026 — Pushed Topic II only after the updated Topic I release.
  Topic II adds the complete reader chapter “From convex order to active
  sides” and its required stylesheet; Topics III–XIV remain unpublished.
  Static content commit: `b5b3784`; Pages retry commit: `2b5838a`. GitHub's
  Actions and Pages outage has left that deployment pending.
- 7 August 2026 — Retried the unchanged static release after GitHub recovered.
  Pages workflow `31144509651` completed successfully at deployment commit
  `c02ac0a`. The live Topic I and Topic II files have SHA-256 hashes identical
  to their validated local static artifacts.

## Current milestone — Topics I–II textbook chapters

- **Done locally:** The Proof is now a staged reader with a fourteen-topic map.
  Topics I and II are rendered in the local reader and published as separate
  GitHub Pages routes.
- **Done locally:** the visible mathematical text is extracted from the
  canonical TeX for exactly the nine Topic I items, including the complete
  proof of the strict-separation lemma from Appendix A. The two main theorems
  and the Topic II convexity lemmas are no longer included in this instalment.
- **Done locally:** the separate “How to read this page” introduction has been
  removed. The chapter now defines every foundational object before the first
  numbered item.
- **Done locally:** each numbered item keeps its formal statement and proof
  together. Supplementary walkthroughs are retained selectively rather than
  forced onto every item; references are consolidated at the end of the topic.
- **Done locally:** repeated item-level “Small library,” classification badges,
  and “Source and classification” disclosures have been removed from the
  mathematical chapter. The entire “Before beginning Topic I” prerequisite
  section has also been removed; the consolidated reference shelf remains at
  the end.
- **Done locally:** the two manuscript definitions are separated from the
  seven propositions and lemmas. Results now use the exact PDF numbering:
  Propositions 2.1–2.3, Lemmas 2.4–2.6, and Lemma A.2.
- **Done locally:** the definition-level prerequisite callouts have been
  removed. Proposition 2.2 also omits its empty “No new definitions” panel and
  its two prerequisite links.
- **Done locally:** optional pedagogical material is collapsed by default.
  The statements remain visible; the proofs of Propositions 2.1 and 2.2 are
  closed initially and open on demand. The proofs of Lemmas 2.4–2.6 and
  Lemma A.2 are now handled in the same way. Propositions 2.2, Lemmas 2.4 and
  2.6, and Lemma A.2 have no separate optional walkthrough.
- **Done locally:** Definition 1.2 now states explicitly that
  `e^⊳=(t(e),h(e)]` is a half-open line segment, not a power, and explains
  which endpoint is excluded and which is included.
- **Done locally:** Figure I.4 now contrasts two supporting lines through the
  same vertex: a non-strict line whose contact face is an entire side and a
  strict line whose contact face is the vertex alone.
- **Done locally:** Proposition 2.3 has two closed local explainers. One defines
  how a linear functional exposes the complete maximizing face and includes a
  deterministic level-line diagram. The other unpacks the three affine
  contact-transport identities as the same side operations after relabelling
  by the coordinate change.
- **Done locally:** “a functional exposes a face” is also defined immediately
  before Proposition 2.3 as
  `F={x∈P:ℓ(x)=max{ℓ(y):y∈P}}`; the adjacent closed explainer gives the
  level-line construction and a whole-side example in Figure I.5.
- **Done locally:** every labelled manuscript display now carries its printed
  equation number, and every equation cross-reference uses the standard form
  “equation (2.3)” rather than a generated verbal nickname. The numbering is
  derived deterministically from the canonical TeX, including section resets,
  Appendix A, multirow `align` displays, and `\notag` rows; unresolved or
  unsupported numbering constructs stop content generation instead of
  silently producing a wrong reference.
- **Done locally:** all generated and hand-written Topic I notation now writes
  named operators with arguments in parentheses. The deterministic TeX-to-web
  generator performs this normalization without modifying the canonical
  manuscript source.
- **Done locally:** mathematical relation colons now receive explicit,
  balanced spacing in generated MathML, including formulas involving
  `Ext(P)`, maps, and set-builder notation.
- **Done locally:** MathML tildes now use the stretchable mathematical tilde
  operator rather than a combining or spacing mark, bringing transported
  notation such as `T̃` and `P̃` closer to the manuscript’s
  `\widetilde{T}` rendering.
- **Done locally:** one expandable fourteen-topic overview records the exact main
  PDF page ranges and any supporting appendix pages for every website topic.
  The verified map is:
  - Topic I — pages 2–3 and 6–10; supporting Lemma A.2 on page 63.
  - Topic II — pages 10–15; supporting Lemmas A.1 and A.3 on pages 61 and 63.
  - Topic III — pages 15–19; supporting Lemmas A.4 and A.5 on page 64.
  - Topic IV — pages 19–30.
  - Topic V — pages 31–40; supporting Lemma A.6 on page 65.
  - Topic VI — pages 41–50.
  - Topic VII — pages 51–58.
  - Topic VIII — pages 3–5, 59–60, 66, and 71–75.
  - Topic IX — pages 67–71.
  - Topic X — pages 73–77.
  - Topic XI — pages 77–79.
  - Topic XII — pages 79–85.
  - Topic XIII — page 71 and pages 85–89.
  - Topic XIV — pages 89–90; complete order-seven example, verified
    boundary-generation code for GitHub, and an order-\(n\) drawing widget;
    not a proof dependency.
- **Done locally:** the relative-interior explanation now contains two
  concrete comparisons: a segment inside the plane, and a filled triangle
  together with one of its sides. These distinguish ambient interior from
  interior taken inside the affine hull.
- **Done locally:** a responsive-layout audit found and removed an intrinsic
  width on the Topic I stage that clipped prose at phone widths. Long display
  equations now remain contained as local horizontal scrollers without making
  the page itself overflow.
- **Verified locally:** the expanded examples, all 39 displayed formulas, and
  every generated relation colon were inspected at desktop and phone widths.
  The page has no global horizontal overflow, no clipped leaf text, and no
  browser-console errors.
- **Done locally:** Definition 1.2 no longer sends the reader to the general
  convex-geometry shelf for its core terminology. A collapsed inline lesson
  now defines adjacent collinear sides, maximal boundary segments, contact
  faces, normal cones, and supporting lines that expose one vertex, with two deterministic
  comparison plates.
- **Verified locally:** the new Definition 1.2 lesson was opened and inspected
  at desktop and phone widths. Its four SVG panels stack cleanly on phones,
  the page has no horizontal overflow, Shelf II is absent from this
  definition, and the browser console is clean.
- **Done locally:** Topic I includes two additional explanatory figures beside
  the relevant mathematics.
- **Done locally:** all topic counters use Roman numerals:
  “Topic I of XIV.”
- **Done locally:** the prerequisite overview and its three shelf links have
  been completely removed from The Proof. The dedicated `/prerequisites/`
  route is retained locally but is no longer linked from the proof chapter.
- **Done locally:** the visible page contains only the background needed for
  Topic I that is not normally covered in a first linear-algebra course:
  adapted complex structures, precise convex-geometric terminology, and
  oriented boundary order/covariance.
- **Saved for later:** the earlier drafts concerning finite rotations,
  projective geometry, and Farey cells are parked in
  `app/data/prerequisites-later.ts` and are not rendered.
- **Done locally:** a reproducible exporter creates one self-contained Topic I
  HTML file with the complete styling and fonts embedded, native expandable
  proofs and explanations intact, and no development-server or local-file
  dependencies. This is the edition intended for direct sharing.
- **Done locally:** the mathematical audit has been implemented in both the
  canonical TeX and the generated web edition. The boundary definition now
  uses closure, normal cones live intrinsically in the dual plane, the custom
  strict-polygon terminology is disambiguated, and radial criticality is
  described as the last outward scale at which (N) vertices suffice.
- **Done locally:** Proposition 2.1 explicitly records
  `det(T)>0`. Proposition 2.3 now confines its formal statement to the
  contact geometry defined in Topic I and moves later functorial constructions
  into an unnumbered consequence. Lemma 2.4 labels its forward references as a
  roadmap; Lemmas 2.5 and 2.6 include the previously omitted positivity,
  degree, and noncollinearity justifications.
- **Done locally:** Figure I.2 has been redrawn from one deterministic
  equal-radius rotation orbit. Its zeroth point is exactly `z`, and a later
  point crosses into the forbidden half-plane. The rendered-output tests
  verify these geometric facts numerically.
- **Done locally:** Topic I is full-width in standalone mode and no longer
  spends desktop space on a one-item sidebar. A keyboard-accessible
  Guided/Compact switch controls the optional topic orientation, foundational
  definitions, and first-use vocabulary without removing any formal
  statements or proofs.
- **Done locally:** the topic opener uses the navy journal band, routine
  result spacing is tighter, secondary text is larger, and print output
  removes the coloured band. These colours organize the chapter; they do not
  encode novelty.
- **Done locally:** Proposition 2.2 now presents the concise manuscript proof
  first, with the six-step pedagogical proof nested as an optional second
  layer. The repetitive walkthrough for Proposition 2.3 has been removed.
- **Author decision:** no source table was added. The end-of-topic References
  and provenance section remains a simple bibliography, as requested.
- **Verified locally:** production build, ESLint, and all six rendered-output
  tests pass. The self-contained HTML has been regenerated at both
  `share/Critical_Invariant_Polygons_Topic_I.html` and
  `/Users/brechtverbeken/Desktop/Critical_Invariant_Polygons_Topic_I.html`;
  its reading-mode controls work without a server.
- **Next:** author review of Topic III. Later topics remain offline until
  separately approved.
- **Publication status:** Topic I is live at
  <https://bfmave.github.io/karpelevic/proof/> and Topic II is live at
  <https://bfmave.github.io/karpelevic/proof/topic-ii/>. The current corrected
  two-topic public edition is Pages deployment commit `df87437`.

## Current milestone — Complete local XIV-topic proof reader

- **Done locally:** all fourteen topics now have implemented routes. Topics VI
  and XII are each divided into two physical pages so that their dense
  arguments remain readable; they still count as one mathematical topic each.
- **Done locally:** Topics III–XIII preserve the canonical manuscript number,
  full formal statement, and complete original proof. The website then adds
  first-use definitions, intuition, guided proof steps, dependency contracts,
  source notes, and deterministic mathematical plates around—not instead of—
  that formal text.
- **Done locally:** every page identifies what is imported from earlier topics,
  what standard background is being used, and what is proved on the page. The
  order is dependency-driven; no later topic is imported to justify an earlier
  one.
- **Done locally:** the visible classification system has exactly four
  statement categories: Classical result, Previously known, Strengthened, and
  New result. A Karpelevič-only antecedent is cited but left unbadged. Existing
  sources accompany every Classical, Previously known, and Strengthened badge.
- **Done locally:** Topic XIV gives the full order-seven atlas and worked ray
  `x=3/8`, includes downloadable dependency-free JavaScript for the boundary,
  and provides an interactive order selector for drawing `Theta_n`. Exact
  Farey data are visibly separated from floating-point root finding and
  plotting.
- **Verified locally:** Topic XIV’s numerical suite checks the complete
  order-seven Farey ledger, the worked `x=3/8` radius, the order-three
  exceptional segment, conjugation symmetry, and midpoint residuals for every
  Farey cell through orders 3–12.
- **Technically audited locally:** mathematical closure, source fidelity,
  dependency order, novice readability, notation, figures, links, interaction,
  and route integrity are recorded in `docs/proof-audits/`. Those audits are a
  separate layer from the independent student readings below.
- **Regression protection:** the rendered-route suite records the expected
  result-card and complete-proof counts for every formal chapter. This prevents
  a visually complete page from silently losing the manuscript proof block.
- **Final closure record:** the connected dependency, source, proof, figure,
  numerical, route, and project-subpath checks are recorded in
  `docs/proof-audits/full-reader-closure.md`.
- **Publication status:** Topics I and II are live on GitHub Pages. Topics
  III–XIV remain local only, and the public GitHub Pages exporter still
  excludes their routes.
- **Next:** author review in sequence, starting with Topic III, followed by
  targeted revisions. Do not deploy the rest of the reader without explicit
  approval.

## Current milestone — Independent student-comprehension review

- **Project organization:** `/Users/brechtverbeken/paper-project-site` is the
  canonical local repository. `docs/PROJECT_STRUCTURE.md` records the
  source-of-truth hierarchy, generated artifacts, directory conventions, and
  local/public deployment boundary.
- **Reader model:** every physical page was read twice by independent reviewers
  assuming one standard undergraduate linear-algebra course and no specialist
  convex geometry, topology, projective geometry, Farey arithmetic, stochastic
  spectral theory, or Karpelevič literature.
- **Method:** both readers proceeded linearly, opened the formal proofs and
  optional explainers, and repeatedly tested whether each concept was known or
  defined, each dependency was locatable, each inference followed, and each
  example or figure supplied real explanatory value.
- **Evidence retained:** the four raw readings are stored in
  `docs/student-reviews/raw/`. They are not replaced by the synthesis.
- **Reports complete:** `docs/student-reviews/reports/` contains one report for
  each of the 16 physical pages. Every report keeps Reading 1 and Reading 2
  separate before giving a cross-reading synthesis.
- **Classification result:** 44 Needed, 107 Advised, and 45 Would be nice to
  add recommendations; 196 recommendations in total. Needed is reserved for a
  true continuation blocker, an indispensable undefined object or implication,
  or wording that teaches a materially false mathematical idea.
- **Quality assurance:** recommendation counts match the numbered lists, report
  headings and mathematical delimiters are balanced, no control characters or
  trailing whitespace remain, and every tested report anchor resolves exactly
  once on the rendered local page.
- **Editorial status:** recommendations only. No proof page, figure, widget, or
  source content was changed as part of this review, and no review artifact was
  pushed or deployed.
- **Next:** author selection of recommendations, beginning with the Needed
  class, before any implementation pass.

## Current milestone — Topic II focused correction pass (published)

- **Done locally in the canonical TeX:** Lemma 2.10 now states the winding
  argument that produces a total angular increase of `2π`; cyclic indexing is
  defined combinatorially; Lemma 2.8 labels its three persistence outputs;
  the normal fan `Φ` and complex vector `u` are explicit; and Theorem 3.2
  contains a quantified radial enlargement and a proved planar positive-cone
  fact. All manuscript numbering and labels are unchanged.
- **Done locally in the reader:** the Lemma 2.9 teaser and “subpolygon” wording
  are corrected, each result has at most one genuinely distinct conceptual
  layer, the full formal proofs remain intact, and a compact dependency route
  makes the chain into Theorem 3.2 visible.
- **Done locally in the figures:** Figure II.1 has an exact supporting line and
  shaded open half-plane; Figure II.2 gives one verified row of
  `B_Φ(θ)`; Figure II.3 is identified as an independently scaled schematic;
  and all three figures have intentional mobile compositions. Plate II keeps
  its formula in the HTML caption and no longer places it inside the SVG.
- **Done locally in navigation and export:** the orphaned Topic III endpoint
  introduction has been removed from Topic II; public builds display Topics
  III–XIV as forthcoming without dead links; Topic II’s standalone Previous
  control points to Topic I; and the unused standalone reader script is gone.
- **Verified locally:** the production build, ESLint, 28 automated tests, the
  GitHub Pages project-subpath export, and the standalone Topic II checks pass.
  The shareable file is
  `share/Critical_Invariant_Polygons_Topic_II.html`.
- **Publication status:** the corrected Topic II edition was published on
  13 August 2026 at
  <https://bfmave.github.io/karpelevic/proof/topic-ii/> in static Pages commit
  `df87437`. The successful GitHub Pages run was `31723329029`. The live Topic
  I and Topic II files match the audited export exactly; Topic III returns 404,
  and no Topics III–XIV route or client bundle is present in the public
  package.
- **Next:** author review of Topic III locally. Publish no later topic without
  explicit approval.

## Current milestone — Topic III terminology and layout pass (published)

- **Layout corrected:** every multi-page proof chapter now has the same
  responsive horizontal gutter. At the reviewed desktop width, Topic III's
  body begins about 63 pixels from the viewport edge instead of 0 pixels; the
  navy chapter heading remains full width. Topic II keeps its existing
  spacing, and the same correction prevents the defect in Topics IV–XIV.
- **Nonstandard shorthand removed from Topic III:** the visible exposition and
  formal excerpt now state half-open side membership directly. “Field,”
  “labelled boundary slot,” “owns,” “ownership word,” “atlas,” “address,”
  “certificate,” “vertex budget,” and “radius-one anchor” are no longer used
  to explain the Topic III argument.
- **Definitions made explicit:** side index `i` is defined simply as the label
  of `E_i=[x_{i-1},x_i]`; assignment means the membership
  `z in E_i^+`; the vanishing-index set is displayed in full; and the
  conditional cyclic shift `kappa` and its source vertex are introduced before
  Lemma 4.7 uses them.
- **Mathematics preserved:** result numbers, labels, formulas, hypotheses,
  conclusions, and full proofs are unchanged. Display titles and prose now
  describe the mathematical assertions directly.
- **Verified locally:** the production build and all 29 automated tests pass.
  Chrome shows the revised page without the previous transform overlay, and
  the visible body gutter matches the intended Topic II spacing.
- **Publication status:** published on 13 August 2026 at
  <https://bfmave.github.io/karpelevic/proof/topic-iii/> in static Pages commit
  `db04f7c`. The successful GitHub Pages run was `31730388414`. The live page
  is byte-for-byte identical to the audited static export. Topics IV–XIV,
  their routes, forward links, source files, and client bundles remain absent
  from the public package; Topic IV returns 404.
- **Next:** author review of Topic IV locally. Publish no later topic without
  explicit approval.

## Current milestone — Topic I–II terminology pass (published)

- **Direct mathematical language:** avoidable shorthand has been removed from
  the rendered Topic I and Topic II chapters. In particular, the pages no
  longer use “vertex budget,” “critical polygon,” “active side,” “ownership,”
  “handedness,” “certificate,” “fan cone,” “continuous point function,” or
  “affine contact conjugacy” as explanatory terminology.
- **Necessary local terms:** polygonal complexity, \(N\)-criticality, strict
  polygon, one-sided contact representation, and hereditary saturation are
  retained because the argument uses them repeatedly. Each is now accompanied
  by its exact definition or by the explicit set membership, map, or
  inequality it abbreviates.
- **Formal text synchronized:** the corresponding canonical TeX passages were
  revised without changing theorem numbers, labels, hypotheses, conclusions,
  or proof logic, and `app/data/part-i-content.generated.ts` was regenerated.
  Side contact is written as a nonempty intersection and the cyclic map
  \(\sigma\) is described as a cyclic shift of side labels.
- **Regression protection:** the rendered-route test rejects the removed
  Topic I–II terminology so that it cannot silently return in later edits.
- **Verified locally:** the production build, all 29 automated tests, ESLint,
  and `git diff --check` pass. Browser inspection at desktop and phone widths
  found the intended 54-pixel and 20-pixel body gutters respectively, no page
  overflow, no rejected terms in visible text, and no console warnings or
  errors. Representative collapsed explanations were opened and inspected on
  both chapters.
- **Publication status:** published on 13 August 2026 at
  <https://bfmave.github.io/karpelevic/proof/> and
  <https://bfmave.github.io/karpelevic/proof/topic-ii/> in static Pages commit
  `a431704`. The public files are byte-for-byte identical to the audited local
  artifacts.
- **Next:** continue reviewing later topics locally. Publish no later topic
  without explicit approval.

## Current milestone — Topic III precision, figure, and jargon pass (published)

- **Formal precision repaired:** Topic III now states cyclic indexing modulo
  (N), defines positive open and closed boundary arcs, requires the linear
  part of a supporting affine functional to be nonzero, and never uses
  “strict convexity” as a synonym for the custom strict-polygon condition.
- **Clipping objects separated:** Lemmas 4.8–4.9 distinguish the removed
  two-dimensional region, the discarded closed boundary arc (A_j), its open
  part (A_j^\circ), and the old-vertex count (k_j). The canonical proof now
  supplies the missing supporting-functional, orientation, normalization,
  criticality, and disjoint-arc justifications.
- **Lemma 4.7 localized:** its statement concerns only the two half-open side
  memberships after replacing one vertex. It no longer assumes the global
  shift parameter that is established only in Topic IV.
- **Figures corrected:** Plate III.3 is a genuine before-and-after vertex
  replacement; Plate III.4 is an exact regular-heptagon clipping model; and
  Plate III.6 separately depicts the discarded arc and removed region in the
  least-area argument. A deterministic check verifies the Plate III.4
  multiplier to (8.04\times10^{-14}), (Q\subseteq P), and exactly one
  removed old vertex.
- **Reader-facing language simplified:** avoidable “atlas,” “ledger,”
  “certificate,” “slot,” “ownership,” “cap,” “shared-side edge,” “candidate,”
  “support gap,” and similar shorthand is absent from the rendered Topic III
  text. Recurrent mathematical terms are retained only when defined or
  explicitly imported.
- **Mobile figures rebuilt:** Plates III.3, III.4, and III.6 use dedicated
  compact layouts on phones. At a 390-pixel viewport, their labels render at
  approximately 13.5–17.1 pixels, with no horizontal overflow.
- **Sources made more exact:** Swift Appendix A, p. A-6 is cited for the
  half-open convention; Swift pp. A-8–A-9, Lemma II for the clipping count;
  and Schneider for the stated supporting-hyperplane and exposed-face facts.
  Lemma 4.7 is conservatively left without a provenance badge pending a
  separate primary-literature audit.
- **Verified locally:** the manuscript content generator, production build,
  all 29 automated tests, ESLint, `git diff --check`, the GitHub Pages
  subpath/privacy export, and the portable offline export pass. Desktop and
  mobile browser inspection found the intended 54-pixel and 20-pixel body
  gutters, no page or figure overflow, and no console warnings or errors.
- **Portable review copy:**
  `share/Critical_Invariant_Polygons_Topic_III.html`.
- **Publication status:** published on 13 August 2026 at
  <https://bfmave.github.io/karpelevic/proof/topic-iii/> in static Pages commit
  `a431704`. Legacy Pages build `1149719829` completed successfully. The live
  Topic I–III files are byte-for-byte identical to their audited artifacts;
  Topic IV remains unpublished and returns 404.
- **Next:** author review of Topic IV locally. Publish no later topic without
  explicit approval.

## Current milestone — Topic IV correction and teaching pass (published)

- **Formal typing repaired:** the canonical manuscript now defines the
  surgery-induced side-continuation bijection (b_e:\mathcal E(P)\to
  \mathcal E(P')). The headline theorem, Corollary 5.2, and the later proof
  use the well-typed identities (b\circ s=s'\circ b),
  (I'=b((I\setminus\{e\})\cup\{\sigma(e)\})), and
  \(\sigma'=b\sigma b^{-1}\).
- **Remaining mathematical precision fixes:** the conflicting phrase “strict
  convex polygon” and the duplicated strictness assertion in Proposition 5.1
  are removed. Equation (5.11), \(\delta=\gcd(N,\kappa)\), is now visible at
  the beginning of Lemma 5.5, without changing any subsequent numbering.
- **Dependencies made local:** Topic IV now includes a one-screen result
  index, a precise recall of the Topic III objects used by Lemma 4.11, a
  visible unnumbered definition of right-admissibility, reminders of the
  proper-shift scope (1\leq\kappa<N), and definitions of groups and cyclic
  relabelling at first use.
- **Five distinct mathematical plates:** the figures are numbered IV.1–IV.5.
  The half-open interval has explicit open/closed endpoints; contact surgery
  has separate before/after states; and the residue-block diagram identifies
  the exact block and uses shape as well as colour. Each plate has a dedicated
  mobile composition and accessible contrast.
- **Reading controls added:** every multi-page proof chapter now has optional
  Guided/Formal views and Open all/Close all proof controls. The controls are
  progressive enhancement, survive GitHub Pages' static export, announce
  changes accessibly, and expand all disclosures for printing.
- **Direct terminology pass:** visible Topic IV prose no longer relies on the
  custom shorthand “field,” “ledger,” “ownership,” or “certificate.” It uses
  side index, boundary-interval count, assignment, and the exact proposition
  instead. Internal legacy labels remain unchanged so existing anchors do not
  break.
- **Sources and cross-references:** Hatcher is now present in the actual
  reference list for Lemma 4.14; repeated plates are linked rather than
  rendered twice; raw equation labels and doubled “equation” link text are
  eliminated; the final bibliography heading is “References.”
- **Verified locally:** the canonical TeX compiles; the content generator is
  deterministic; the production build, all 30 automated tests, ESLint,
  `git diff --check`, and the GitHub Pages subpath/privacy export pass. Browser
  checks at desktop and 390-pixel widths found no page or figure overflow.
  Guided/Formal mode, proof controls, print expansion, and all five figures
  work without console warnings or hydration errors.
- **Publication status:** Topic IV is live at
  <https://bfmave.github.io/karpelevic/proof/topic-iv/>. The corrected source
  is recorded locally in commit `70a254e`; the static-only public Pages tree
  is commit `7377ea3` on `main`. GitHub Pages completed the legacy branch build
  on 13 August 2026, and the live HTML matches the verified local export
  byte-for-byte.
- **Public scope verified:** Topic IV is the only newly published proof
  chapter. The shared Guided/Formal and proof controls, corrected equation
  references, and the side-continuation definition also update the already
  public Topics I–III. Topics V–XIV remain absent from the public package;
  Topic V returns HTTP 404 and no public page links to a later unpublished
  topic.
- **Next:** review Topic IV online and keep Topic V local until it receives the
  same mathematical, editorial, figure, accessibility, and source audit.

## Current milestone — Topic III standalone-rigor refinement (published 13 August 2026)

- **Formal gaps closed:** Lemma 4.7 now defines the modified polygon (P') and
  proves that its displayed list consists of exactly (N) extreme points and
  that the two claimed replacement segments are exposed sides. Lemma 4.8 now
  states and proves the exact equality
  \(\partial P\setminus P_j=A_j^\circ\). Lemma 4.9 introduces
  \(T(z)=\lambda z\) locally and explicitly invokes Theorem 3.2 before using
  the clipping lemma.
- **Compactness tools completed:** Lemma A.4 defines Hausdorff distance and the
  closed unit disk, displays the uniform support margin, and identifies the
  common integrable dominating disk. Lemma A.5 replaces the abbreviated
  triangle step by an explicit positive-area homothetic disk.
- **Teaching structure corrected:** the page distinguishes the endpoint-order
  strand from the clipping/minimization strand, lists only direct earlier-topic
  dependencies, states accurately when guided proof commentary exists, and
  gives the two Rudin references used by the compactness argument.
- **Figures refined:** Plate III.1 writes both endpoint memberships literally;
  Plate III.3 labels (P'); Plate III.4 marks the origin; Plate III.5 labels
  (P_k), (P), and the interior disk; and Plate III.6 now depicts and names the
  two-vertex case ruled out by area minimality. All six plates have dedicated
  phone layouts.
- **Source audit:** Lemma 4.3 is classified as classical convex geometry.
  Dmitriev–Dynkin is named as the primary source for the clipping/minimal-
  polygon antecedent, with Swift's English translation pinpointed at Appendix
  A, p. A-6 and pp. A-8–A-9. The full formal proofs remain visible and
  self-contained.
- **Verified locally:** canonical TeX and generated content have matching hash
  `7ebe78673738fbd8e0a8856aa6f75952b9ee73639c90e115ce38e9b91f18c649`;
  Tectonic compiles; the generator is deterministic; all 30 automated tests,
  ESLint, and `git diff --check` pass. Browser checks at desktop and 390-pixel
  widths found no overflow or console errors; all nine proof disclosures and
  the Guided/Formal/Open/Close controls work.
- **Publication status:** published at
  `https://bfmave.github.io/karpelevic/proof/topic-iii/` from local source
  commit `345d55bcf13eda6415031d2c2789ed4018669981` through the static-only
  public commit `660854aef53831d6229ebcb646d160caaca8d1c8`. The deployed Topic III
  HTML is byte-identical to the audited export; Topics I–IV return HTTP 200,
  Topic V returns HTTP 404, and Topics V–XIV remain absent from the public
  route atlas.

## Current milestone — Topics V–VII portable review editions (local only)

- **Review package:** generated three self-contained HTML files in `share/`:
  Topic V, Topic VI, and Topic VII. Topic VI is now one continuous chapter
  with one header, one dependency contract, one source shelf, and four
  ordinarily numbered sections; the former Part A/Part B division is no
  longer visible. A ZIP containing the three files preserves their sibling
  navigation when the bundle is extracted into one folder.
- **Portability:** every file embeds its stylesheet, fonts, mathematical
  plates, and proof-chapter controls. It has no root-relative asset dependency
  or external script, so it can be opened directly from disk and sent as an
  ordinary HTML attachment.
- **Bundle navigation:** links among Topics V, VI, and VII point to the
  corresponding sibling HTML filenames. Links to the already published
  Topics I–IV remain web links. Topics VIII–XIV remain marked Forthcoming.
- **Audit:** Topic V contains 9 formal items and 7 complete proof disclosures;
  combined VI contains 9 and 7; VII contains 8 and 8. All local fragment
  targets resolve, no duplicate IDs occur, and all 30 project tests, ESLint,
  and `git diff --check` pass.
- **Publication status:** local review artifacts only. Nothing from Topics
  V–VII was added to the public GitHub Pages site.

## Current milestone — Topic IV rigor, provenance, and language refinement (published 14 August 2026)

- **Lemma 4.11 repaired at source:** the identity
  \(k_j=r_j+c_j\) is now established for every boundary interval before the
  proof separates supporting and proper cuts. The two-vertex case therefore
  forces a proper cut without circular reasoning.
- **Standalone setup completed:** the page displays
  \(\lambda=\rho e^{i\theta}\),
  \(\theta=\arg_+(\lambda)\), and the full dictionary between the indexed set
  \(S\) and the side maps \(I,h,s,\sigma\).
- **Literal reduction language:** Topic IV now describes vertex replacement,
  permitted updates of \(S\), connected components of \(C_N[S]\), cyclic
  intervals, the lexicographic pair
  \((|S|,\operatorname{comp}(S))\), and first entrance times directly. Result
  numbers, equation numbers, full proofs, and stable anchors are unchanged.
- **Provenance corrected:** Lemmas 4.10–4.11 are conservatively unbadged;
  Corollary 4.12 is pinpointed to Swift's Appendix A; Lemma 4.13 is marked
  Strengthened; and Lemma 4.14 is unbadged because Hatcher and Schneider
  provide background rather than the exact indexed statement.
- **Five audited plates:** Plate IV.2 is now an exact regular-heptagon model
  with \(Q=\lambda P\); Plate IV.3 is explicitly schematic; Plate IV.4
  distinguishes schematic geometry from an exact set update; and Plate IV.5
  uses the arithmetically consistent example
  \(N=12\), \(\kappa=8\), \(S=\{4,5,6,7\}\), and
  \(\varphi=\delta=4\). Every plate declares whether it is exact, schematic,
  or hybrid and has a dedicated mobile layout.
- **Verified:** the canonical TeX compiles; generated manuscript content is
  deterministic with hash
  `878fd9926194a473ed946b3b88967fe624c8864997621f2ba76b57ad95e1ee44`;
  all 30 tests, ESLint, the GitHub Pages verifier, desktop and 390-pixel
  browser checks, reading controls, and console checks pass. The live Topic IV
  file is byte-identical to the audited static export.
- **Publication status:** source changes are recorded locally in commit
  `832efb0`; the static-only public Pages tree is commit `8281457` on `main`.
  Topic IV is live at
  <https://bfmave.github.io/karpelevic/proof/topic-iv/>. Topics I–IV return
  HTTP 200, Topic V returns HTTP 404, and Topics V–XIV remain absent from the
  public package and navigation.
- **Next:** continue reviewing Topic V locally. Do not publish any later topic
  without explicit approval.

## Current milestone — Topic IV contact-figure correction (published 14 August 2026)

- **Corollary 4.12 clarified:** its statement now says directly that every
  image vertex belongs to exactly one half-open side and every half-open side
  contains exactly one image vertex. The proof and numbering are unchanged.
- **Equation (4.18) restored on the page:** the Section 5 scope panel now
  visibly displays (1\leq\kappa<N), with the manuscript's equation number,
  unique anchor, and permalink.
- **Plate IV.3 completed:** the lifted-angle diagram is explicitly a
  schematic example with \(\kappa=3\); the hollow marker is labelled as the
  excluded left endpoint, and the arrow means addition of the multiplier's
  argument.
- **Plate IV.4 corrected:** the impossible displayed contact set
  \(S=\{1\}\) has been removed. The plate now separates schematic local
  geometry from the exact symbolic update
  \(S'=(S\setminus\{i\})\cup\{i+\kappa\}\), shows both cardinality cases,
  and explicitly states that no numerical contact system is asserted.
- **Verification:** the canonical TeX compiles and its generated site content
  is deterministic; all 30 tests, ESLint, `git diff --check`, the GitHub Pages
  verifier, desktop inspection, and the dedicated 390-pixel plate layouts
  pass. The deployed Topic IV HTML has SHA-256
  `26eae38d458f53b28f9d3f27893e4c0d9b0bc86581e9f7df97392c2dafe81056`
  and is byte-identical to the audited export.
- **Publication status:** source commit `3a0df1d`; static-only public Pages
  commit `dbb9fae`. Topic IV is live at
  <https://bfmave.github.io/karpelevic/proof/topic-iv/>. Topics I–IV return
  HTTP 200; Topic V returns HTTP 404 and remains unpublished.
- **Next:** continue reviewing Topic V locally; publish no later topic without
  explicit approval.

## Current milestone — Topic V rigor and projective preparation (approved for publication 14 August 2026)

- **Rotation arithmetic repaired at source:** Equation (6.2) now carries the
  strict record inequality. Theorem 6.1 explicitly treats positive return
  heights, time zero, the terminal index range, and equal-deficit ties. The
  record-vector chain is distinguished carefully from the vertices of the
  associated lattice sail.
- **Dependency boundary made exact:** Topic V states that it prepares the
  later proof of \(\Delta=1\) but does not prove that conclusion itself.
  Proposition 7.3 is now purely the finite partition of return incidences; its
  deformation interpretation has moved to Topic VI, where the required
  objects are defined. Plate V.3 records only the exact inverse-source
  identities and asserts no deformation.
- **Projective definitions typed precisely:** Definition 7.4 defines a
  projectivity \(\Pi:\ell_1\to\ell_{m+1}\). It is not called a return map or
  self-map until a separate identification of the terminal and initial lines
  has been supplied. Proposition 7.5 uses the established strict-polygon
  terminology and spells out the affine-chart construction.
- **Educational layer and provenance tightened:** an always-visible panel
  imports the Topic IV notation, avoidable local jargon has been replaced by
  literal set and incidence language, and Propositions 7.3 and 7.5 remain
  conservatively unbadged because the cited sources do not establish those
  exact displayed formulations.
- **Four audited mathematical plates:** Plate V.1 separates the unimodular
  record chain from the Klein sail; Plate V.2 displays the exact two-height
  return tower; Plate V.3 is the combinatorial incidence partition; and Plate
  V.4 is generated from an exact projective incidence construction with eight
  checked incidences. All four have dedicated mobile layouts.
- **Verified locally:** canonical TeX and generated content have matching hash
  `579adb67c1b5dfa887b6332c175e22ff9a2f3150dc23d4755a748f999a6304c8`;
  Tectonic compiles; the generator is deterministic; all 30 automated tests,
  ESLint, `git diff --check`, the standalone exporter, and the GitHub Pages
  verifier pass. Desktop and 390-pixel browser checks found no page overflow,
  duplicate IDs, inaccessible plates, or console errors.
- **Publication status:** source changes are recorded locally in commit
  `faa3646ce863b0e6ab4080dc39c3788324e386fb`; the static-only public Pages
  tree is commit `b03ed72d88b8a46c4694c86445a5390ef8b07532` on `main`.
  Topic V is live at
  <https://bfmave.github.io/karpelevic/proof/topic-v/>. Its deployed HTML is
  byte-identical to the audited export with SHA-256
  `1cbd03cfcaa2b896439230a8b919a6f521b062a494f274577ce9f4548ce3fbdf`.
  The public package contains Topics I–V only; Topic VI returns HTTP 404 and
  every later topic remains absent and is shown as Forthcoming.

## Current milestone — Topic IV notation and reading-path refinement (published 15 August 2026)

- **Boundary-order notation made literal:** Lemma 4.11 now says that at least
  one of its two assertions holds and expresses side membership through the
  positive boundary interval rather than an undefined cyclic inequality.
- **First-use notation completed:** the page now gives four explicit standing
  assumptions for the one-sided contact data, defines
  \(\operatorname{comp}(S)\) and \(\varphi=|S|\), and describes
  \(\kappa\) as the chosen representative of a cyclic shift.
- **Contact language tightened:** Topic IV uses endpoint contact and
  relative-interior contact literally. Lemma 4.14 is now titled “Iteration of
  endpoint equalities for lifted arguments,” and its multiplier angle is
  defined directly.
- **Vertex-replacement statement reordered:** Proposition 5.1 first establishes
  membership of every changed image point in its assigned half-open side and
  only then introduces the unique side coefficients. The PDF-safe reference
  now says “the final item” rather than relying on alphabetic or numeric list
  rendering.
- **Reading route simplified:** a compact four-step proof spine precedes the
  ten numbered results; elementary duplicate glossary and walkthrough layers
  were removed where the full statement and proof already give the argument.
  Every numbered statement, complete proof, equation number, and stable anchor
  is preserved.
- **Plate wording polished:** Plate IV.2 is described as an exact
  regular-heptagon configuration; its verified geometry is unchanged.
- **Verified locally:** the canonical TeX compiles; generated content is
  deterministic and records canonical source hash
  `f334e7138f745aa3099b6d9ab64e572ea523935e1ceefe993fef851e12b53753`;
  all 30 tests, ESLint, `git diff --check`, and the GitHub Pages export verifier
  pass.
- **Publication status:** source changes are recorded locally in commit
  `adc632eb0e60713bd9532e9331527137e4111f17`; the static-only public Pages
  tree is commit `998ded5522babe5cde21b9b284bc43320a52c7af` on `main`.
  Topic IV is live at
  <https://bfmave.github.io/karpelevic/proof/topic-iv/>. Its deployed HTML is
  byte-identical to the audited export with SHA-256
  `ea80e71f1deb2dcf71742a3526110b1bcd0df7bb5a50d49a7ecdee3c89a8ad77`.
  Topics I–V return HTTP 200; Topic VI returns HTTP 404, and Topics VI–XIV
  remain absent from the public package.

## Current milestone — Topic V small-order scope and the critical-triangle exception (published 15 August 2026)

- **The scope split is now explicit:** the finite-rotation theorem remains
  valid for (N\geq2), while the projective no-skipping and return-monodromy
  arguments are stated only for (N\geq4). Orders one, two, and three enter
  the stochastic theorem through the direct small-order proof.
- **The order-three exception is proved, not merely mentioned:** Topic V gives
  an explicit doubly stochastic family (B_a), identifies its planar
  multiplier, verifies all three relative-interior contacts, proves
  3-criticality by the trace obstruction, and computes
  ((\varphi,\kappa,\delta,\Delta)=(3,2,1,2)). Thus
  (\varphi>\delta) does not imply (\Delta=1) at order three.
- **Defined-before-use standard restored:** the triangle discussion defines
  doubly and column stochastic matrices, the standard coordinate vectors,
  barycentric coordinates, the quotient map, the complex coordinate on the
  zero-sum plane, and the record-deficit calculation. Its three image formulas
  are split into separate rows for mobile reading.
- **Consequences propagated through every topic:** the abstract, Part I and
  Part II proof spines, concluding summary, Topics V–XIII, atlas summaries,
  companion guide, prerequisites, and navigation metadata now distinguish the
  direct small-order branch from the (N\geq4) projective branch. A final
  audit found no downstream theorem that silently applies unit return or
  monodromy to (N=3).
- **Projective details completed:** Proposition 7.5 explicitly quantifies its
  supporting lines, uses Φ for the projectivity and ω for its affine
  denominator, and records the constant-sign and compact lower-bound facts.
  Lemma A.6 now states why the reduced representatives remain integral.
- **Plates and portable editions refreshed:** Plates V.1–V.4 use literal
  labels, checked incidences, and dedicated mobile layouts. The standalone
  Topic V, combined Topic VI, and Topic VII files have been regenerated from a
  max-7 build; their metadata is scoped correctly and they contain no dead
  links to unpublished topics.
- **Verified locally:** the canonical TeX compiles; two content generations
  are byte-identical; the generated metadata records canonical source hash
  `32d63e959e979e46768fd946782d25b939baf8cb707e8dfbaa479b7eb0c2bc2c`;
  the generated TypeScript file has SHA-256
  `6e709415df42345e2b182ae2565aab8971e28f2c8d1a43740fe9a583c1a6c337`;
  all 32 tests, ESLint, `git diff --check`, the max-5 GitHub Pages verifier,
  and the max-7 standalone-export audit pass.
- **Publication status:** source commit `b83de86`; static-only public Pages
  commit `3c6bb3c`. Topic V is live at
  <https://bfmave.github.io/karpelevic/proof/topic-v/> and is byte-identical
  to the audited export with SHA-256
  `52bd444cde88618006d8f3984966149f18440d5bb882ba9b5216f83f4d77198d`.
  Topics I–V return HTTP 200; Topic VI returns HTTP 404 and Topics VI–XIV
  remain absent and unlinked. Next: continue reviewing Topic VI locally.

## Current milestone — Topic IV criticality dependency and clarity pass (published 15 August 2026)

- **The hidden dependency is now explicit:** the standing data begin with
  (A0), which says that multiplication by \(\lambda\) is an
  \(N\)-critical elliptic contraction. The page now calls these the five
  assumptions (A0)–(A4), links directly to Definition 1.1, and explains that
  (A0) is what permits the use of Theorem 3.2 in Proposition 5.1.
- **Definitions precede their use:** the side \(E_i\), its half-open version
  \(E_i^+\), reachable index sets, and complete right-to-left component
  updates are stated explicitly. Corollary 5.2 also says that its real-linear
  map \(T\) is the same map represented by multiplication by \(\lambda\).
- **Formal precision improved:** Lemma 4.11 expands the consecutive-vertex
  inference, and Lemma 4.13 explicitly invokes Lemmas 2.5 and 2.10 at the
  origin/angular-monotonicity step. All ten numbered results, complete proofs,
  equation numbers, and stable anchors remain unchanged.
- **Reader-facing language and plates tightened:** explanations use literal
  boundary-arc counts, endpoint indicators, endpoint or relative-interior
  cases, and removed/added side indices. Plates IV.1, IV.3, and IV.4 carry the
  corresponding labels in both desktop and mobile layouts.
- **Verified before publication:** the canonical TeX compiles; two generated
  content runs are byte-identical; all 32 tests, ESLint, `git diff --check`,
  the static Pages verifier, desktop controls, the 390-pixel mobile layout,
  internal fragments, and the live browser console pass. The generated
  metadata records canonical source hash
  `413c4e4a7c296c4b728ebfb42627a1d9bf987f50833a37e177b2fe7dafee7de2`.
- **Publication status:** source commit `0de70df`; static-only public Pages
  commit `a6d6c96`. Topic IV is live at
  <https://bfmave.github.io/karpelevic/proof/topic-iv/> and its deployed HTML
  matches the audited export with SHA-256
  `53a4372c06358742b845fff869db7e6c65509befe0dd7eae2c6e022aebebba67`.
  Topic V remains live; Topic VI returns HTTP 404, and Topics VI–XIV remain
  absent and unlinked.

## Current milestone — Topic V published; Topic VI unified offline (15 August 2026)

- **Topic V publication completed:** the reviewed Topic V precision, notation,
  source, and plate corrections are recorded in source commit `6d6a305`; the
  static-only Pages tree is commit `46ba23092ab19589a11b2ff5a2bf711631f34dab`.
  Topic V is live at
  <https://bfmave.github.io/karpelevic/proof/topic-v/>.
- **Topic VI is one continuous local chapter:** `/proof/topic-vi/` now has one
  header, one dependency contract, one source shelf, four ordinarily numbered
  sections, nine results, and seven complete proofs. The old `/a` and `/b`
  routes are redirect-only aliases to stable anchors in the unified chapter.
- **Notation and first-use explanations were tightened:** the formal and guided
  versions distinguish the supporting line \(\mathcal L_i\) from its slope
  \(\ell_i\), replace \(M^\circ\) by the explicit set
  \(M\setminus\{b_*\}\), and use literal side-index, distinguished-base,
  starting-point, accounting, and return-projectivity language. Before the
  final assembly, the page now defines a one-sided contact representation, the
  permitted local vertex replacement and its side-continuation bijection, and
  one representative from each permutation orbit.
- **The reviewer copy was refreshed:** one direct max-7 export now produces
  `share/Critical_Invariant_Polygons_Topic_VI.html`; the obsolete Part A and
  Part B standalone artifacts and merger script have been retired. The
  portable HTML remains ignored by Git and is not a public route.
- **Verified locally:** the canonical TeX has SHA-256
  `856bc76ad678279f697cfd54a9910f978e6b99e63b2a09559ef1df2c61998fcc`;
  the generated Part I data has SHA-256
  `3e097ceb4c4e001832fb9a7c5a7988217523f5c4026436abf2d15d571a6ca640`.
  ESLint, `git diff --check`, all 32 automated tests, the unified route, both
  redirect aliases, and the standalone edition pass. The browser audit found
  no duplicate IDs, horizontal overflow, stale visible notation, or runtime
  errors at desktop or phone width.
- **Publication boundary preserved:** `build:pages` remains capped at Topic V;
  Topic VI is absent from `pages-out`, has no live public link, and its public
  URL continues to return HTTP 404.

## Current milestone — Topic V proof-closure pass published (15 August 2026)

- **Four local rigor issues were closed:** the temporary assumption
  \(\Delta>1\) now precedes the transported-terminal-side calculation and
  explicitly makes \(\varphi-1\) a long base; Theorem 6.1 proves both
  directions of \(h=0\iff\nu=N\); Corollary 6.2 derives
  \(\gcd(N,\kappa)=1\) before invoking the theorem; and Definition 7.4 uses
  correctly typed projective completions \(\Lambda_i,K\) and point joins.
- **Definitions and exposition were tightened:** Topic V imports
  \(\nu_{\mathrm{poly}}\) and \(N\)-criticality directly from Topic I, gives
  the visible-boundary definition of the Klein sail, removes glossary entries
  for temporary letters, and uses literal first-return and selected-boundary-
  arc wording while preserving the established terminology, numbering, and
  stable anchors.
- **Plates were independently checked:** Plate V.1 now says that the sail is
  not separately drawn; Plate V.2 displays all thirteen evaluated residues;
  and Plate V.4 is a verified numerical convex hexagon with relative-interior
  contacts, exposing supporting lines, and eight checked perspectivity
  incidences. The adapted Topic VI plate remains an open selected-arc diagram
  and now uses \(\Lambda_1\) consistently.
- **Verification:** canonical TeX SHA-256 is
  `13ff942d2766bd736c6880738287f271fa71293cdf5a7ce7337b2b6e4efb3cee`;
  generated content SHA-256 is
  `05fa228de77739a9cc3aeef52462f815e77dbbca643b5170ab6ac91a001a1619`.
  TeX compilation, deterministic generation, all 32 tests, ESLint, static
  Pages verification, desktop/mobile browser QA, fragment checks, and the
  standalone audit pass. The refreshed standalone Topic V file has SHA-256
  `92e6355806f5d82bf7e2f8a9dfb4cebec65733e6bef386859714d4d92e273e28`.
- **Publication status:** source commit `29d4b04`; static-only Pages commit
  `c094db04cb0c5bb639a2ed4b9cecfad426a5ace0`. Topic V is live at
  <https://bfmave.github.io/karpelevic/proof/topic-v/>. The matching Pages
  build is `built`, its CSS asset returns HTTP 200, Topics I–V return HTTP
  200, and Topic VI remains unpublished with HTTP 404.

## Current milestone — conventional terminology across all topics (15 August 2026)

- **The review's central editorial point was accepted:** reader-facing coined
  labels were replaced by literal convex-geometric, projective, arithmetic,
  and finite-set language throughout Topics I–XIV, the manuscript, chapter
  summaries, figures, prerequisites, history, and source headings.
- **Representative changes:** hereditary saturation is now stated as the
  boundary-contact conclusion it proves; right-admissibility is expanded into
  its standing assumptions; contact rotation is a contact permutation or
  cyclic shift; mutations and surgery are vertex replacements; ledgers are
  counts, partitions, or case tables; the projective corridor is a
  boundary-contact chain; the Farey carrier is Farey product data or the
  relevant boundary arc; and the Jensen sheet is a common continuous argument
  interval.
- **Established terms were retained deliberately:** polygonal complexity,
  \(N\)-criticality, first-return maps and towers, projectivity,
  perspectivity, Klein sails, and Farey neighbours remain where they are
  defined and mathematically useful. The former custom “strict polygon” is now
  the polygon and complete cyclic vertex-list convention of Definition 1.2;
  the product around a closed recurrence chain is introduced once as monodromy
  and otherwise called the closed-return product. Stable theorem and
  equation labels, route keys, figure kinds, and URL fragments were preserved,
  including three legacy generated heading anchors restored after the final
  adversarial audit.
- **The public manuscript was synchronized:** the linked PDF now comes from
  the same canonical TeX as the reader and has SHA-256
  `8af67f9d5ebbe3f54b048ee8a4e0262f211ef824c4514db146c46d3476fcd396`.
  Its extracted text contains none of the retired vocabulary, apart from the
  official affiliation name “Data Analytics Laboratory.”
- **Verification:** canonical TeX compiles; the generated metadata and
  canonical source share SHA-256
  `fafc80ad45ddd204577d9d077f7845cc0b48fa4ff5283c2375602635d613d186`;
  all 32 tests, ESLint, deterministic generation, `git diff --check`, static
  Pages verification, visible-text and privacy scans, internal-fragment
  checks, and desktop/mobile browser audits pass.
- **Publication status:** the main migration is source commit `c9e8bfc`, with
  the final identity-case correction in `e25388c` and Topic X wording polish
  in `03876c4`. Static-only Pages commits are `7d870b1`, corrective PDF
  release `6d640fd`, and final public copy `b8470c0`. Topics I–V return HTTP
  200 with no retired reader-visible terminology; Topic VI returns HTTP 404,
  so Topics VI–XIV remain offline and unlinked.

## Current milestone — Topic VI reviewed and published (15 August 2026)

- **The unified chapter is now public:** Topic VI remains one continuous page
  with nine results, seven complete proofs, one prerequisite contract, and four
  sequential plates. Its local setup now defines the ambient real plane, the
  linear map and complex coordinate, extreme points and interior, the two
  possible return heights, and the imported side/contact notation before use.
- **The review's concrete defects were repaired:** Theorem 1.3 explicitly
  quantifies the return-height parameters; the planar signed-side functional
  and its line restriction have distinct notation; the remaining local symbol
  collisions were removed; Plate VI.2 attaches its zero-set label to the
  moving closing line; and Plate VI.3 uses its own arrow marker and the side
  index from the proof. Reading controls now say “Open all proofs” and “Close
  all proofs.”
- **Standalone and public links are deliberate:** the one-file reviewer copy
  is `share/Critical_Invariant_Polygons_Topic_VI.html`, with SHA-256
  `dba1e3a1c5c454aa6c71f8cf12f76d1e796b31ef3dbc61962750bfba9f90af95`.
  It links Topics I–V to their public pages, marks Topic VII forthcoming, and
  has no sibling-file dependency, external asset dependency, duplicate ID, or
  unresolved fragment.
- **Verification:** canonical TeX SHA-256 is
  `dfe1675d3d4a155655b4e0bd06a2a12a99b4b6d1dfe1c6eac75c495f2417b37c`;
  generated Part I data SHA-256 is
  `92cd8e60bfbb08c91b23b185f0086325b98595da23f739e53cd278d65c965ffb`.
  TeX compilation, deterministic generation, all 36 tests, ESLint,
  `git diff --check`, the static Pages verifier, standalone integrity checks,
  desktop and 390-pixel browser QA, proof controls, marker references,
  fragment checks, and the live console all pass. The synchronized public PDF
  retains SHA-256
  `8af67f9d5ebbe3f54b048ee8a4e0262f211ef824c4514db146c46d3476fcd396`.
- **Publication status:** source commit `0428ca4`; static-only Pages commit
  `9980215b400aa70ab937b24e16ae6a3b8caaad44`. Topic VI is live at
  <https://bfmave.github.io/karpelevic/proof/topic-vi/>. Topics I–VI return
  HTTP 200, Topic VII returns HTTP 404, and the proof index exposes VI while
  keeping VII–XIV unavailable.

## Current milestone — Topic V precision review integrated (15 August 2026)

- **The arithmetic proof was made more explicit without changing its
  structure:** Theorem 6.1 now defines consecutive upper-record vectors,
  spells out the determinant-to-residue inference, explains the
  \(\Delta/\delta\) long-base count in each cycle, and connects a hypothetical
  earlier improving time to its lattice vector. All theorem, equation, and
  permalink identifiers are unchanged.
- **Two local claims were tightened:** Remark 6.3 now records only the proved
  primitive and unimodular properties instead of asserting an unproved exact
  refinement relation with the Klein sail. Lemma 7.1 states that both range
  conclusions hold in the equality case while the later construction chooses
  the forward orientation. Proposition 7.5 now refers precisely to the images
  of the labelled vertices and sides and to cyclic order up to simultaneous
  reversal.
- **The guided reader is more self-contained:** the opening displays
  \(\lambda P\subseteq P\), Theorem 6.1 has a four-stage roadmap rather than
  new result numbers, and its guided proof is reduced from eight overlapping
  steps to four. The order-three exception is a prominent unnumbered,
  unbadged proposition titled “Critical invariant triangles with
  \(\Delta=2\),” with the exact radial criticality inequality stated in place
  of shorthand.
- **Plate V.4 now makes the epistemic boundary explicit:** it is a numerical
  illustration with consistently checked incidences and support signs, while
  the caption states that Proposition 7.5 is proved independently of the
  computation.
- **Standalone and manuscript artifacts are synchronized:** the independent
  Topic V HTML links published Topics I–VI to the public site, marks Topic VII
  forthcoming, and has SHA-256
  `f63e36015fc4cb28994f60a1d8faeef887e0029f19157cbdceed8d0d9737f49e`.
  The public PDF and compiled canonical manuscript are byte-identical with
  SHA-256
  `da2b60b48ae0ab0321cc72c929b29595a40d3484d22c07c2f5f15b1a6997cdce`.
- **Verification:** canonical TeX SHA-256 is
  `932889fd52aa284e9e2d8eefac2f04eff7c515308c177e1fe24baaecaa839db7`;
  generated Part I data SHA-256 is
  `e8abf3cc4775946333a942b348a6a35586971ff4fde921f2e8e5757a7a9e2587`.
  TeX compilation, deterministic generation, all 36 tests, ESLint,
  `git diff --check`, static Pages verification, standalone integrity checks,
  fragment and privacy scans, proof-control checks, and desktop/390-pixel
  browser QA pass.
- **Publication status:** source commit `a4bd770`; static-only Pages commit
  `c4c543a2962597e7c6b9fb83b2e0845253fba656`. Topic V and the synchronized
  PDF are live; Topics I–VI return HTTP 200 and Topic VII remains unavailable.

## Current milestone — Topic VI notation and figure truthfulness pass (15 August 2026)

- **The formal notation is type-correct:** the scalar slope formerly denoted
  by `ell_i` is now written as the slope of the supporting line
  `mathcal L_i`, while Lemma 7.9 writes the pulled-back line explicitly.
  Topic VI also uses literal exposing-line, convex-position, affine-determinant,
  half-plane, and boundary-case wording. Every theorem, equation, label,
  permalink, and the numbered Remark 7.13 is preserved.
- **The geometric plates now state exactly what they show:** Plate VI.1 treats
  its coordinates as a consistency-checked illustration and has separated
  mobile labels; Plate VI.2 displays `X_{m-1}(tau)` as the witness identifying
  the polygon-interior half-plane; Plate VI.3 names the side index and return
  index literally; and Plate VI.4 uses unjoined incidence markers instead of
  drawing an unrelated closed polygon as `lambda P_tau`.
- **The reader is leaner and more explicit:** Lemma 7.9 has one always-visible
  index-flow and four-case map, while its guided explanation is reduced from
  eight steps to four. Lemma 7.7 is unbadged and described as an elementary
  fractional-linear calculation. The standalone verifier requires public
  links to Topics I–V and keeps Topic VII unavailable.
- **Artifacts are synchronized:** canonical TeX SHA-256 is
  `9fab546ed7e1628d9dff426e8ebdabf1813a35cced4eb4dc5991a426ffc713a8`;
  generated Part I data SHA-256 is
  `59b97f4cb9cab4d9408883580a6b4c20df8686d339b95dc15a2a9495a07dfda6`;
  and the compiled/public 100-page PDF SHA-256 is
  `d3017f3527816e27551ccb499fe23913c48b9c81bd143de4adf065b32ca4a133`.
  The refreshed standalone Topic VI HTML has SHA-256
  `e4e1b135213edc783d4c927862c4b6e5d8db0faaef226869c6c70b8ea333858c`.
- **Verification:** Tectonic compiles without layout or reference warnings;
  generation is deterministic; all 40 tests, ESLint, `git diff --check`, the
  Pages verifier, standalone link/fragment/privacy checks, and figure
  truthfulness regressions pass. The public route has nine results, seven
  proofs, and Plates VI.1–VI.4, with no false inner image polygon.
- **Publication status:** source commit `9241ff2`; static-only Pages commit
  `055623bd558cd86ac7dab0cca4819bc3e761d6a0`. Topics I–VI return HTTP 200,
  Topic VII returns HTTP 404, and the synchronized manuscript PDF is live.

## Current milestone — Topics I–III standards and presentation pass (16 August 2026)

- **Three standard convex-geometric points were corrected without changing the
  proof chain:** normal cones explicitly include the zero functional;
  Proposition 2.3 now says that every nonempty proper face is exposed by a
  nonzero functional; and the normal fan is the full collection of the zero
  cone, edge-normal rays, and adjacent two-dimensional vertex cones. The
  ordered ray generators still define the same coefficient matrix.
- **Local rigor and notation were tightened:** the successor conjugacy is now
  type-correct, Theorem 3.2 cites the openness assertion used in its support
  perturbation, Lemma 4.7 identifies the determinant as affine in the moving
  point, and the closed unit disk is defined before first use. All 267
  generated IDs, theorem numbers, equation numbers, and inbound anchors are
  unchanged.
- **The public reader is more literal:** Topics II and III have descriptive
  titles, Proposition 2.3 no longer uses the unrelated phrase “contact
  geometry,” and items 15–16 are conservatively unbadged while retaining exact
  source-comparison notes. Elementary glossary entries were trimmed, while
  full statements and proofs remain.
- **Figures and accessibility were repaired:** Plate III.1 now draws the
  predecessor vertex and both adjacent half-open sides on desktop and mobile;
  the Topic II caption spacing and Topic I complex-structure description are
  correct; the main Topic I plate is explicitly schematic; and both reading
  fonts now have genuine Georgia/Times serif fallbacks. A regression test
  protects machine-readable TeX annotations against newline-corrupted control
  sequences.
- **Verification and artifacts:** Tectonic produced a clean 100-page PDF;
  canonical TeX SHA-256 is
  `8be482b94ca1ea5a7c0d5c9fd56facbbc4f47ae177d68d45d6df7d4b2f61bb49`,
  generated Part I data SHA-256 is
  `d9f2325d4335b51caff021eb8c722baf8716d4d3f21bba692cf9cb2ce05d92d0`,
  and the compiled/public PDF SHA-256 is
  `90b621fbc10cc3884dd6b60c729c3661a0f0fe5e32f37d67abfcf977196ca234`.
  ESLint, all 41 tests, deterministic generation, Pages verification,
  duplicate-ID/fragment/privacy checks, and desktop/mobile figure QA pass.
- **Publication status:** source implementation commit `7ec1661`; static-only
  Pages commit `5f84e91`. Topics I–VI return HTTP 200, Topic VII remains HTTP
  404, and the synchronized manuscript PDF is live.

## Current milestone — Topics IV–VI precision and navigation pass (16 August 2026)

- **Topic IV now states its imported facts and cyclic conventions literally:**
  the reader uses `head` and `succ`, calls \(\sigma\) a side-label translation,
  records the exact half-open boundary-count estimates used from Topic III,
  and explains why the elliptic multiplier has a positive argument in
  \((0,2\pi)\). Plate IV.5 now uses the same counterclockwise orientation as the
  earlier exact configuration.
- **Topic V's arithmetic and projective interfaces are easier to verify:**
  Remark 6.3 links and displays Theorem 6.1 correctly, Lemma A.6 starts with an
  integral vector and proves the integral representative directly, and the
  forward/reverse data of Proposition 7.3 have a compact always-visible map.
  Plates V.1–V.3 are labelled as exact diagrams; Plate V.4 remains explicitly
  numerical.
- **Topic VI's hypotheses and presentation are literal:** Theorem 1.3 now
  quantifies the invariant polygon and orientation grammatically, and the
  boundary-chain arguments state the exact non-exhaustion hypothesis instead
  of relying on the word “proper.” Its four plates are classified as numerical,
  exact, or schematic according to what they actually display.
- **Compatibility and publication boundary:** the unified Topic VI remains the
  only public chapter UI. Static `/proof/topic-vi/a/` and `/b/` aliases redirect
  to the corresponding stable anchors. Topics VII--XIV remain non-navigable and
  no unpublished theorem content or application bundle is present in the
  public tree.
- **Verification and artifacts:** all 42 tests, ESLint, deterministic
  extraction, Tectonic compilation, Pages verification, 912 internal-link and
  fragment checks, privacy scans, proof controls, and desktop/390-pixel browser
  QA pass. The canonical/public 100-page PDF SHA-256 is
  `a0ecbaa4ebcda7bbc6ddcc07834bcf10e4768d6269cb0d899f1c97f48b72a323`.
- **Publication status:** source implementation commit `6e0c55d`; static-only
  Pages commit `bc1f568`. Topics I–VI return HTTP 200, Topic VII returns HTTP
  404, and the synchronized manuscript PDF is live.

## Current milestone — Publication-date semantics (16 August 2026)

- **Reader-facing dates now describe publication history rather than build
  machinery:** public pages show an immutable `First published` date and a
  content-derived `Last revised` date. The former `Site build` and `Last
  updated` labels have been removed, and public footers say `Website online
  since 28 July 2026`.
- **The manuscript dates are unambiguous:** the archival Zenodo record is dated
  24 July 2026 and identified as the 93-page edition. The linked website
  edition is separately identified as the 100-page PDF last revised on
  16 August 2026.
- **First-publication dates are centralized:** Home, History, and Journey use
  28 July; Prerequisites and Topic I use 29 July; Topic II uses 6 August;
  Topics III–IV use 13 August; Topic V uses 14 August; and Topic VI uses
  15 August, all in 2026. Offline Topics VII–XIV deliberately receive no false
  publication date.
- **Verification and publication:** ESLint, the production and capped Pages
  builds, all 43 tests, the Pages verifier, date-label scans, route-boundary
  checks, and live HTTP checks pass. Topics I–VI return HTTP 200, Topic VII
  returns HTTP 404, and the live PDF retains SHA-256
  `a0ecbaa4ebcda7bbc6ddcc07834bcf10e4768d6269cb0d899f1c97f48b72a323`.
  Source implementation commit: `5aff28d`; static-only Pages commit:
  `dc6d0ee`.

## Current milestone — Conventional polygon and closed-return terminology (16 August 2026)

- **The polygon hypothesis is now stated directly:** Definition 1.2 records
  that the displayed cyclic list contains every extreme point of a
  nondegenerate convex polygon exactly once. Subsequent statements simply say
  “polygon.” A supporting line is said to expose a vertex precisely when its
  contact face is that singleton. The stable label `def:strict-polygon` and all
  existing cross-reference targets remain unchanged.
- **Closed-return language is conventional and explicit:** the manuscript and
  readers now use “closed-return product,” with “monodromy” retained once as a
  standard parenthetical gloss at first use. Generic “realizer” language has
  been replaced by “realizing stochastic matrix” or “realizing stochastic
  matrices”; exact bibliographic titles are unchanged.
- **Compatibility is preserved:** all 368 canonical labels and all 524
  generated Part I/II IDs match the preceding source exactly. Legacy words may
  remain inside invisible compatibility anchors, component keys, and historical
  records, but not in reader-visible mathematical prose.
- **Verification and artifacts:** deterministic generation, a clean 100-page
  Tectonic build, ESLint, all 44 tests, the capped Pages build and verifier, and
  visible-text/fragment audits for Topics I–IX pass. Canonical TeX SHA-256 is
  `6066a1bfca14502104345969535216b06975f0f51e76a35c35baf4fc4c7a1fff`;
  generated Part I and Part II SHA-256 values are
  `862a3beae6877bdfdfab933802b0dc6214e718d8ee3fb5712e88ecf2921de5b1`
  and `f55d88322827c964d1b9e54a1a87ead3d277a88d55cfc8e257b619a51d3b1bf0`;
  the compiled/public PDF SHA-256 is
  `8f1f6f212acd98bc5f9501ce4c211d5601eb1e0064ffbba40c03239bb2728965`.
- **Publication status:** source implementation commit `5d9e9a5`; static-only
  Pages commit `ca56019`. Topics I–VI and the synchronized manuscript PDF are
  live, Topic VII remains HTTP 404, and the owner-only hosted production copy
  has also been updated.

## Current milestone — Topic VII publication (20 August 2026)

- **The Topic VI–VII transition is explicit:** Topic VI now hands its three
  first-return cases to Topic VII, where an always-visible setup defines the
  inherited contact data, the normalized argument, the first-return shift, and
  the three disjoint cases before any Farey statement is used.
- **The formal route is self-contained and correctly ordered:** Theorem 1.4 is
  stated once before Lemma 8.4 and proved once after Lemma 8.7. Proposition 8.6
  now states the required `1 <= kappa < N` scope and verifies all Farey ranges,
  reducedness claims, and the existence and uniqueness of its auxiliary
  integer. The page contains eight result cards and eight complete proofs.
- **Figures and terminology were repaired:** Plate VII.1 uses separate
  desktop/mobile interval scales with nonoverlapping labels. Plate VII.2 shows
  the included and excluded endpoints and the correct direction as the
  parameter tends to one. Reader-visible prose consistently uses Farey
  intervals, polynomial relations, and closed-return products while preserving
  all stable anchors.
- **Verification and artifacts:** ESLint, all 46 tests, deterministic Part I
  and Part II generation, a clean Tectonic build, the Pages verifier, fragment
  and privacy audits, proof controls, and desktop/390-pixel browser QA pass.
  The canonical/public manuscript is now 101 pages with SHA-256
  `e087092f5c235b50671055ae35b1b927b796fd95c609d787cdde3cc3fd9a2e1e`.
- **Publication status:** source implementation commit `b641334`; static-only
  Pages commit `ba910d7`. Topic VII was first published on 20 August 2026 and
  returns HTTP 200; Topic VIII remains forthcoming and returns HTTP 404. The
  owner-only Sites production copy is version 4 and is synchronized to the
  same source commit.

## Current milestone — Topic VIII publication (20 August 2026)

- **The Topic VII–VIII handoff is explicit:** Topic VII closes its conditional
  theorem for an `N`-critical planar map, and Topic VIII then proves that a
  radial boundary point new at order `N` has exactly the required stochastic
  vertex-count properties. The reader defines the eigenvalue regions before
  use and introduces the radial function only after compactness and
  star-shapedness justify the attained maximum.
- **The formal stochastic interface is complete:** the invariant-polytope
  criterion treats the singleton case and matrix-order padding explicitly;
  the eigenvalue regions are compact, nested, and star-shaped with respect to
  the origin; the unit-circle and interior-origin arguments are literal; and
  the proof of Lemma II.4.5 retains the positive factor `rho^k`. For `N >= 4`,
  Proposition II.4.7 concludes both `nu_poly(T_lambda)=N` and
  `nu_poly(tT_lambda)>N` for every `t>1`. All formal labels and anchors remain
  stable.
- **Both plates are now exact:** Plate VIII.1 is the centered equilateral
  midpoint construction for `lambda=(1/2)e^(i pi/3)`, and Plate VIII.2 is a
  one-dimensional radial-endpoint diagram showing the strict order between
  the order-`N-1` and order-`N` endpoints and the excluded outward ray. Each
  has a dedicated accessible mobile layout with true SVG subscripts and no
  overflow.
- **Verification and artifacts:** Tectonic compiles a clean 101-page PDF;
  canonical TeX SHA-256 is
  `504602336bd3515e7a36fba08ff7116f12156dab4c0297d92754fe52a248a73d`;
  generated Part II and Topic VIII–XI proof-data SHA-256 values are
  `992f7c65745249a513d541107d190fb4086a492b30ac8db698ab4812613faa37`
  and `f78f3687134d607ad0760c1b6b9519b9f62d01dce6426743e817bb670436e9d6`;
  and the compiled/public PDF SHA-256 is
  `c5ef3583e3d54014a69bbbf6d006efe75cbddc5b6c3a89cbb54ae0e423a55fb2`.
  ESLint, all 52 tests, deterministic generation, Pages verification,
  standalone/bundle integrity, fragment/privacy checks, and live
  desktop/390-pixel browser QA pass.
- **Portable editions:** the individual Topic VIII HTML has SHA-256
  `6487912ccedd78efd7c6702331e065d9bee9fc2156404a28190343247415ccd6`
  and marks Topic IX forthcoming. The two-member Topic VIII–IX review bundle
  has SHA-256
  `66f21cdabc5f74d25de8bd467e2585c55d199746902b7b311486093bfb94a8a4`
  and contains exactly the two cross-linked, self-contained HTML files.
- **Publication status:** source implementation commit `210815b`; static-only
  Pages commit `abdeb5d`. Topic VIII was first published on 20 August 2026 and
  returns HTTP 200; Topic IX remains offline and returns HTTP 404. The
  owner-only Sites production copy is version 5 and is synchronized to source
  commit `210815b`.

## Current milestone — Topic VII audit repair (20 August 2026)

- **The formal argument is now explicit at every disputed step:** Lemma 8.1
  states the primitive-segment argument precisely; Lemma 8.3 fixes the chosen
  real arguments under conjugation and reversal; Proposition 8.5 rejoins its
  two branches explicitly; and Lemma 8.7 defines `M` unconditionally and proves
  `0 < A < M < pi` with `M > pi/2`. Proposition 8.6 again renders its two cases
  as `(a)` and `(b)`. All 368 canonical labels and 267 generated Part I IDs are
  unchanged.
- **Both Topic VII plates now state only true geometry:** Plate VII.1 marks the
  order-seven Farey endpoints as included and the denominator-eight mediants as
  excluded. Plate VII.2 places the limiting point in the second quadrant,
  displays the unit horizontal displacement and half-open endpoint convention,
  and has dedicated desktop and mobile layouts with legible labels.
- **Terminology is continuous from Topic VI through Topic VIII:** reader-visible
  prose now uses consecutive Farey fractions, finite recurrences, finite product
  identities, and chosen real arguments. Compatibility anchors retain their
  stable internal names, while the public title and downstream references use
  the literal mathematical descriptions.
- **Verification and artifacts:** deterministic generated-content SHA-256 values
  are `f3ff23c4882082b04e4c89201910f230ce2f08806120e9c559cba82ecd036fb1`
  for Part I, `18d4effb6a9951bde6b5c4af2dacfe793571a1845973e5da1fab0041e6ccfbc1`
  for Part II, and
  `2810c7653f9e739c0c21b80b3e78581563a064dc1b44cabbf8fda62a15809c70`
  for the Topic VIII–XI proof data. The 101-page manuscript PDF has SHA-256
  `e9e4044b348484d043ab6f8e4c9bbe764319ed2f79b4c375c1d5b0894af8c5af`.
  ESLint, all 53 tests, the capped Pages verifier, standalone integrity, and
  desktop/320-pixel figure QA pass. The standalone Topic VII HTML has SHA-256
  `6fc29c97949f4d955250689772d442bfda51d43948cf67bddd8352f5d2a5a6ab`.
- **Publication status:** source implementation commit `b12be90`; static-only
  Pages commit `a718278`. Live Topics VII and VIII return HTTP 200, Topic IX
  remains offline and returns HTTP 404, and the live manuscript is byte-identical
  to the verified local PDF. The owner-only Sites production copy is version 6
  and is synchronized to source commit `b12be90`.
