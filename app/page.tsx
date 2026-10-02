import { ContactForm } from "./components/ContactForm";
import { PrerequisitePlate } from "./components/PrerequisitePlate";
import { SiteHeader } from "./components/SiteHeader";
import { ThetaAtlasPlate } from "./components/ThetaAtlasPlate";
import { homeContent } from "./data/home";
import { publicationDates } from "./data/publication-dates";
import {
  formatDate,
  getBuildRevision,
  getBuildTimestamp,
  getPageTimestamp,
} from "./lib/git-dates";
import { sitePath } from "./lib/site-path";
import { createPageMetadata } from "./lib/site-metadata";

export const metadata = createPageMetadata({
  title: homeContent.title,
  description:
    "An illustrated geometric proof of the Karpelevič theorem for readers with basic analysis and linear algebra, by Brecht Verbeken and Vincent Ginis.",
  pathname: "/",
  scholarlyLandingPage: true,
});

const pageTimestamp = getPageTimestamp([
  "app/page.tsx",
  "app/data/home.ts",
  "app/components/SiteHeader.tsx",
  "app/components/PrerequisitePlate.tsx",
  "app/components/ThetaAtlasPlate.tsx",
  "app/components/ContactForm.tsx",
  "app/lib/site-metadata.ts",
  "public/contact.js",
]);
const buildTimestamp = getBuildTimestamp();
const buildRevision = getBuildRevision();
const firstPublished = publicationDates.pages.home;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to the article
      </a>

      <SiteHeader current="problem" />

      <main id="main-content" tabIndex={-1}>
        <div className="first-block">
          <section className="hero-section" aria-labelledby="paper-title">
            <header className="hero-copy">
              <p className="kicker">From averaging matrices to the eigenvalue region</p>
              <h1 id="paper-title">{homeContent.title}</h1>
              <p className="subtitle">{homeContent.subtitle}</p>
              <p className="authors">
                {homeContent.authors.join(" · ")}
              </p>
              <p className="hero-deck">{homeContent.descriptor}</p>

              <nav className="reader-home-actions" aria-label="Start here">
                <a href={sitePath("/prerequisites/#theorem-preview")}>Start learning →</a>
                <a href="#region-atlas">Explore the region</a>
                <a href="https://arxiv.org/abs/2609.26058v2">Read the research paper ↗</a>
              </nav>
              <details className="reader-home-publication"><summary>Publication, editions and verification</summary><dl className="paper-facts">
                <div><dt>Current preprint</dt><dd><a href="https://arxiv.org/abs/2609.26058v2">arXiv:2609.26058v2</a></dd></div>
                <div><dt>Last revised on arXiv</dt><dd><time dateTime="2026-09-23">23 September 2026</time></dd></div>
                <div><dt>arXiv edition</dt><dd>40 pages · <a href="https://arxiv.org/pdf/2609.26058v2">Read the paper</a></dd></div>
                <div><dt>Teaching manuscript</dt><dd><a href={sitePath("/paper/teaching-manuscript.pdf")}>A proof of the Karpelevič theorem via invariant polygons</a></dd></div>
                <div><dt>Source revision</dt><dd><code>{buildRevision}</code></dd></div>
              </dl>
              <details className="checksum">
                <summary>Verify the downloadable arXiv PDF</summary>
                <code>SHA-256 {homeContent.manuscript.localArxivDraftChecksum}</code>
                <p>The <a href={sitePath("/paper/critical-invariant-polygons.pdf")}>downloadable PDF</a> is the current arXiv v2. The chapter explanations and detailed proofs follow the teaching manuscript linked above. The two documents have different titles and exposition.</p>
              </details>
              </details>

              <p className="page-publication-meta">
                <time dateTime={firstPublished}>
                  First published {formatDate(firstPublished)}
                </time>{" "}
                <span aria-hidden="true">·</span>{" "}
                <time dateTime={pageTimestamp}>
                  Last revised {formatDate(pageTimestamp)}
                </time>
              </p>
            </header>

            <ThetaAtlasPlate />
          </section>

          <div className="article-rule" aria-hidden="true">
            <span>✦</span>
          </div>

          <section
            className="section-grid problem-section"
            aria-labelledby="problem-heading"
          >
            <header className="section-heading">
              <p className="section-number">I</p>
              <p className="section-label">The problem</p>
              <h2 id="problem-heading">
                Where can a stochastic eigenvalue live?
              </h2>
            </header>

            <div className="reading-column">
              {homeContent.problemIntroduction.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="display-equation">
                <math
                  display="block"
                  aria-label="Theta n is the union of the spectra of nonnegative n by n matrices A satisfying A one equals one."
                >
                  <msub>
                    <mi>Θ</mi>
                    <mi>n</mi>
                  </msub>
                  <mo>=</mo>
                  <munder>
                    <mo>⋃</mo>
                    <mrow>
                      <mi>A</mi>
                      <mo>≥</mo>
                      <mn>0</mn>
                      <mo>,</mo>
                      <mspace width="0.4em" />
                      <mi>A</mi>
                      <mi mathvariant="bold">1</mi>
                      <mo>=</mo>
                      <mi mathvariant="bold">1</mi>
                    </mrow>
                  </munder>
                  <mrow>
                    <mi>spec</mi>
                    <mo>⁡</mo>
                    <mo>(</mo>
                    <mi>A</mi>
                    <mo>)</mo>
                  </mrow>
                </math>
              </div>
              <p className="problem-statement">
                Determine Θ<sub>n</sub> for every integer n ≥ 1.
              </p>
              <p>{homeContent.problemOrientation}</p>
            </div>
          </section>

          <div className="article-rule" aria-hidden="true"><span>✦</span></div>

          <section className="section-grid" aria-labelledby="geometric-idea-heading">
            <header className="section-heading">
              <p className="section-number">II</p>
              <p className="section-label">The geometric idea</p>
              <h2 id="geometric-idea-heading">Turn an eigenvector into a polygon</h2>
            </header>
            <div className="reading-column">
              <p>{homeContent.invariantPolygon}</p>
              <div className="display-equation">
                <math display="block" aria-label="The matrix equation A z equals lambda z gives the geometric inclusion lambda P is a subset of P.">
                  <mrow><mi>A</mi><mi>z</mi><mo>=</mo><mi>λ</mi><mi>z</mi><mo>⇒</mo><mi>λ</mi><mi>P</mi><mo>⊆</mo><mi>P</mi></mrow>
                </math>
              </div>
              <PrerequisitePlate slug="invariant-polygons" />
              <p className="context-note">No background in polygon geometry or number theory is assumed. The reader introduces convex combinations, supporting lines, first returns, and Farey fractions at the points where the proof needs them.</p>
              <a className="text-link" href={sitePath("/proof/")}>See the bridge worked out in Topic I →</a>
            </div>
          </section>

          <section className="section-grid" aria-labelledby="proof-route-heading">
            <header className="section-heading">
              <p className="section-number">III</p>
              <p className="section-label">The route through the proof</p>
              <h2 id="proof-route-heading">Three ideas hold the argument together</h2>
            </header>
            <div className="reading-column">
              {homeContent.proofOrientation.map((step) => (
                <article key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
              <p>Choose <a href={sitePath("/prerequisites/#main-ideas")}>the main-ideas route</a> to see the complete mechanism with identified lemmas accepted temporarily, or <a href={sitePath("/proof/")}>study the complete proof through Topics I–XII</a>. Both lead to <a href={sitePath("/proof/topic-xiv/")}>the eight-state example</a>; XIII is an optional extension.</p>
            </div>
          </section>
        </div>

        <section className="reading-routes" aria-labelledby="routes-heading">
          <header className="reading-routes-heading">
            <p className="section-label">Continue reading</p>
            <h2 id="routes-heading">Choose where to go next</h2>
            <p>
              Begin with <a href={sitePath("/proof/")}>Topic I</a> for the guided proof. You can also read the current paper, trace the history of the problem, or follow the personal story behind this project.
            </p>
          </header>

          <nav className="reading-route-grid" aria-label="Ways to continue">
            {homeContent.readingRoutes.map((route, index) => (
              <a
                className="reading-route-card"
                href={route.external ? route.href : sitePath(route.href)}
                key={route.href}
              >
                <span className="reading-route-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="section-label">{route.label}</span>
                <strong>{route.title}</strong>
                <span className="reading-route-description">{route.text}</span>
                <span className="reading-route-link">
                  Continue <span aria-hidden="true">→</span>
                </span>
              </a>
            ))}
          </nav>
        </section>

        <section
          className="purpose-and-ai"
          aria-labelledby="purpose-heading"
        >
          <div>
            <p className="section-label">Purpose</p>
            <h2 id="purpose-heading">Why this site exists</h2>
            <p>{homeContent.projectAim}</p>
          </div>
          <div>
            <p className="section-label">Generative AI</p>
            <h2>How this site is being made</h2>
            <p>
              This website is being developed with generative-AI assistance.
              AI tools assist with design, coding,
              and editorial organization; the authors remain responsible for
              the mathematics, historical claims, wording, and final
              presentation.
            </p>
          </div>
        </section>

        <section className="bottom-information">
          <article className="arxiv-note" aria-labelledby="arxiv-heading">
            <p className="section-label">Manuscript status</p>
            <h2 id="arxiv-heading">The current arXiv version</h2>
            <p><a href="https://arxiv.org/abs/2609.26058v2">A structural proof of the Karpelevič theorem</a>, by Brecht Verbeken and Vincent Ginis, is available as arXiv:2609.26058v2, revised 23 September 2026. The <a href="https://arxiv.org/abs/2609.26058">unversioned record</a> points to the latest arXiv version.</p>
            <p>The fourteen topics follow <a href={sitePath("/paper/teaching-manuscript.pdf")}>A proof of the Karpelevič theorem via invariant polygons</a>, the teaching manuscript used for this website. The earlier <a href="https://zenodo.org/records/21529144">Zenodo record</a> remains available as an archival edition.</p>
          </article>

          <ContactForm />
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-meta">
          <time dateTime={publicationDates.websiteOnlineSince}>
            Website online since{" "}
            {formatDate(publicationDates.websiteOnlineSince)}.
          </time>
          <span>© {new Date(buildTimestamp).getUTCFullYear()} The authors</span>
          <a className="to-top" href="#top">
            To the top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
