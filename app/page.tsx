import type { Metadata } from "next";
import { ContactForm } from "./components/ContactForm";
import { ThetaAtlasPlate } from "./components/ThetaAtlasPlate";
import { homeContent, primaryNavigation } from "./data/home";
import { publicationDates } from "./data/publication-dates";
import {
  formatDate,
  getBuildTimestamp,
  getPageTimestamp,
} from "./lib/git-dates";
import { sitePath } from "./lib/site-path";

export const metadata: Metadata = {
  title:
    "Critical Invariant Polygons and the Farey–Ito Boundary of Stochastic Spectra",
  description:
    "An accessible companion to the paper by Brecht Verbeken and Vincent Ginis.",
};

const pageTimestamp = getPageTimestamp("app/data/home.ts");
const buildTimestamp = getBuildTimestamp();
const firstPublished = publicationDates.pages.home;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to the article
      </a>

      <header className="site-header" id="top">
        <div className="masthead">
          <a
            className="site-identity"
            href={sitePath("/")}
            aria-label="Critical Invariant Polygons — Home"
          >
            <span className="site-monogram" aria-hidden="true">
              Θ
            </span>
            <span>
              <strong>Critical Invariant Polygons</strong>
              <small>A companion to the manuscript</small>
            </span>
          </a>
        </div>

        <nav className="primary-navigation" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <a
              aria-current={item.href === "/" ? "page" : undefined}
              href={sitePath(item.href)}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <p className="construction-notice" role="status">
          <span aria-hidden="true">🚧</span>
          <span>Under construction</span>
        </p>
      </header>

      <main id="main-content">
        <div className="first-block">
          <section className="hero-section" aria-labelledby="paper-title">
            <header className="hero-copy">
              <p className="kicker">A paper in two parts</p>
              <h1 id="paper-title">{homeContent.title}</h1>
              <p className="subtitle">{homeContent.subtitle}</p>
              <p className="authors">
                {homeContent.authors.join(" · ")}
              </p>
              <p className="hero-deck">{homeContent.descriptor}</p>

              <dl className="paper-facts">
                <div>
                  <dt>Status</dt>
                  <dd>
                    <a
                      className="manuscript-link"
                      href={homeContent.manuscript.zenodoUrl}
                    >
                      {homeContent.manuscript.status}{" "}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Published on Zenodo</dt>
                  <dd>
                    <time dateTime={publicationDates.manuscript.zenodoPublished}>
                      {formatDate(publicationDates.manuscript.zenodoPublished)}
                    </time>
                  </dd>
                </div>
                <div>
                  <dt>Zenodo edition</dt>
                  <dd>{homeContent.manuscript.zenodoPages} pages</dd>
                </div>
                <div>
                  <dt>Website edition</dt>
                  <dd>
                    <a
                      className="manuscript-link"
                      href={sitePath(homeContent.manuscript.websiteEditionUrl)}
                    >
                      Last revised{" "}
                      <time
                        dateTime={
                          publicationDates.manuscript.websiteEditionRevised
                        }
                      >
                        {formatDate(
                          publicationDates.manuscript.websiteEditionRevised,
                        )}
                      </time>{" "}
                      <span aria-hidden="true">↗</span>
                    </a>
                    <small className="paper-fact-note">
                      {`${homeContent.manuscript.websiteEditionPages}-page site-hosted PDF`}
                    </small>
                  </dd>
                </div>
              </dl>

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
            </div>
          </section>
        </div>

        <section className="reading-routes" aria-labelledby="routes-heading">
          <header className="reading-routes-heading">
            <p className="section-label">Continue reading</p>
            <h2 id="routes-heading">Choose where to go next</h2>
            <p>
              If you want to go to the paper immediately, read a little
              history first, or learn more about where I encountered this
              problem, choose one of the three paths below.
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
              This website is being developed through vibecoding with
              generative-AI assistance. AI tools assist with design, coding,
              and editorial organization; the authors remain responsible for
              the mathematics, historical claims, wording, and final
              presentation.
            </p>
          </div>
        </section>

        <section className="bottom-information">
          <article className="arxiv-note" aria-labelledby="arxiv-heading">
            <p className="section-label">Manuscript status</p>
            <h2 id="arxiv-heading">Why is this paper not on arXiv?</h2>
            <p>
              Generative AI makes projects such as this website possible, but
              it has also contributed to a flood of submissions on arXiv. This
              paper is currently in the moderation queue. Once it gets through,
              I will update this website with the arXiv record.
            </p>
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
