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
| 8 | Fourteen-topic annotated proof reader | **Complete locally; two independent student readings and 16 classified reports complete; Topic I remains the latest published edition** |

## Canonical Proof-Reader Architecture

The proof reader has **fourteen topics**. Topics I–XIII form the necessary
mathematical route to the Karpelevič–Ito theorem. Topic XIV is a worked example
and is not a dependency of the proof.

The order is pedagogical rather than a copy of the manuscript’s section order:
the reader first completes the intrinsic polygonal engine, then returns to
stochastic matrices, constructs and bounds the candidate boundary, proves
attainment and nesting, and states the classical theorem only after all of its
ingredients are available.

1. **Topic I — The language of critical polygons.**
   PDF pages 2–3 and 6–10; supporting Lemma A.2 on page 63.
   Complete locally and published.
2. **Topic II — From convex order to active sides.**
   PDF pages 10–15; supporting Lemmas A.1 and A.3 on pages 61 and 63.
   Complete locally; deliberately offline pending author review.
3. **Topic III — Building one-sided ownership.**
   PDF pages 15–19; supporting Lemmas A.4 and A.5 on page 64.
4. **Topic IV — From endpoint order to contact reduction.**
   PDF pages 19–30.
5. **Topic V — Rotation arithmetic and the projective corridor.**
   PDF pages 31–40; supporting Lemma A.6 on page 65.
6. **Topic VI — Projective escape and unit return.**
   PDF pages 41–50. This is expected to be the hardest single topic; Topics
   V–VI together are the principal structural bottleneck.
7. **Topic VII — The Farey carrier and return monodromy.**
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
11. **Topic XI — Explicit stochastic realizers and attainment.**
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
  topics. Topic I is public; Topic II is exposed only in the local reader.
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
- Topics II–XIV are complete locally in the guided textbook format but have
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

Review Topics II–XIV locally in order, beginning with Topic II. Revise each
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
  included. Static release commit: `89e7cb5`.

## Current milestone — Topics I–II textbook chapters

- **Done locally:** The Proof is now a staged reader with a fourteen-topic map.
  Topics I and II are rendered in the local reader. Topic I alone is public;
  Topic II remains offline pending author review.
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
  faces, normal cones, and strict supporting lines, with two deterministic
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
  described as the last outward scale at which the vertex budget suffices.
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
- **Author decision:** no source table was added. The existing end-of-topic
  Source shelf remains a simple bibliography, as requested.
- **Verified locally:** production build, ESLint, and all six rendered-output
  tests pass. The self-contained HTML has been regenerated at both
  `share/Critical_Invariant_Polygons_Topic_I.html` and
  `/Users/brechtverbeken/Desktop/Critical_Invariant_Polygons_Topic_I.html`;
  its reading-mode controls work without a server.
- **Next:** author review of Topic II, followed by Topic III. Later topics
  remain offline until separately approved.
- **Publication status:** live at
  <https://bfmave.github.io/karpelevic/proof/>; public GitHub Pages commit
  `89e7cb5`. The public edition contains Topic I only.

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
- **Publication status:** local only. Topics II–XIV have not been pushed or
  deployed, and the public GitHub Pages exporter still excludes their routes.
  Topic I remains the sole public proof chapter until the author approves
  later topics.
- **Next:** author review in sequence, starting with Topic II, followed by
  targeted revisions. Do not deploy the complete reader without explicit
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
