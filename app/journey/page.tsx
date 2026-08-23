import { primaryNavigation } from "../data/home";
import { publicationDates } from "../data/publication-dates";
import {
  journeyContent,
  journeyReferences,
  type JourneyChapter,
  type JourneyParagraph,
} from "../data/journey";
import {
  formatDate,
  getBuildTimestamp,
  getPageTimestamp,
} from "../lib/git-dates";
import { sitePath } from "../lib/site-path";
import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata({
  title: "My Journey",
  description:
    "Brecht Verbeken’s personal account of finding the Karpelevič problem through structured stochastic matrices, collaboration, and generative-AI-assisted research.",
  pathname: "/journey/",
});

const pageTimestamp = getPageTimestamp([
  "app/journey/page.tsx",
  "app/data/journey.ts",
]);
const buildTimestamp = getBuildTimestamp();
const firstPublished = publicationDates.pages.journey;
const referenceNumbers = new Map(
  journeyReferences.map((reference, index) => [reference.id, index + 1]),
);

function Citations({ ids }: { ids: readonly string[] }) {
  if (ids.length === 0) {
    return null;
  }

  return (
    <sup className="citation-cluster" aria-label="References">
      {ids.map((id, index) => {
        const number = referenceNumbers.get(id);

        if (!number) {
          return null;
        }

        return (
          <span key={id}>
            {index > 0 ? ", " : ""}
            <a href={`#journey-reference-${id}`} aria-label={`Reference ${number}`}>
              {number}
            </a>
          </span>
        );
      })}
    </sup>
  );
}

function Paragraph({ paragraph }: { paragraph: JourneyParagraph }) {
  return (
    <p>
      {paragraph.text}
      <Citations ids={paragraph.citations} />
    </p>
  );
}

function Chapter({ chapter }: { chapter: JourneyChapter }) {
  return (
    <section className="journey-chapter" aria-labelledby={`journey-${chapter.number}`}>
      <header className="journey-chapter-heading">
        <p className="section-number">{chapter.number}</p>
        <p className="section-label">{chapter.label}</p>
        <span className="journey-era">{chapter.era}</span>
        <h2 id={`journey-${chapter.number}`}>{chapter.title}</h2>
      </header>
      <div className="journey-reading-column">
        {chapter.paragraphs.map((paragraph) => (
          <Paragraph key={paragraph.text} paragraph={paragraph} />
        ))}
      </div>
    </section>
  );
}

export default function JourneyPage() {
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
              aria-current={item.href === "/journey/" ? "page" : undefined}
              href={sitePath(item.href)}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="journey-page" id="main-content" tabIndex={-1}>
        <header className="journey-hero">
          <div className="journey-hero-title">
            <p className="kicker">My journey</p>
            <h1>{journeyContent.title}</h1>
          </div>
          <p className="journey-deck">{journeyContent.deck}</p>
          <aside className="journey-scope" aria-label="Scope of this personal account">
            <p className="section-label">A personal account</p>
            <p>{journeyContent.disclaimer}</p>
            <p className="page-publication-meta">
              <time dateTime={firstPublished}>
                First published {formatDate(firstPublished)}
              </time>{" "}
              <span aria-hidden="true">·</span>{" "}
              <time dateTime={pageTimestamp}>
                Last revised {formatDate(pageTimestamp)}
              </time>
            </p>
          </aside>
        </header>

        <section className="journey-route-section" aria-labelledby="route-heading">
          <header>
            <p className="section-label">The path in brief</p>
            <h2 id="route-heading">From a distant theorem to a working problem</h2>
          </header>
          <ol className="journey-route">
            {journeyContent.route.map((stop, index) => (
              <li key={`${stop.era}-${stop.label}`}>
                <span className="journey-route-marker" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="journey-era">{stop.era}</span>
                <p>{stop.label}</p>
              </li>
            ))}
          </ol>
        </section>

        {journeyContent.openingChapters.map((chapter) => (
          <Chapter chapter={chapter} key={chapter.number} />
        ))}

        <section className="journey-conjectures" aria-labelledby="conjectures-heading">
          <header className="journey-conjectures-heading">
            <div>
              <p className="section-label">A page that changed the direction</p>
              <h2 id="conjectures-heading">Two conjectures on the final pages</h2>
            </div>
            <p>
              {journeyContent.conjectures.introduction}
              <Citations ids={["ran-teng-2024"]} />
            </p>
          </header>

          <div className="journey-conjecture-grid">
            {journeyContent.conjectures.cards.map((card) => (
              <article key={card.number}>
                <p className="conjecture-number">{card.number}</p>
                <p className="conjecture-pattern">{card.pattern}</p>
                <h3>{card.question}</h3>
                <p>
                  {card.outcome}
                  <Citations ids={[card.reference]} />
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="journey-genai">
          <Chapter chapter={journeyContent.laterChapters[0]} />
          <div className="journey-genai-note" aria-label="Research responsibility">
            <p className="section-label">The boundary that remains</p>
            <p>
              Generative AI widened the search. It did not decide which claims
              were correct. Mathematical and editorial responsibility remained
              with us.
            </p>
          </div>
        </section>

        {journeyContent.laterChapters.slice(1).map((chapter) => (
          <Chapter chapter={chapter} key={chapter.number} />
        ))}

        <section className="journey-working-paper" aria-labelledby="working-paper-heading">
          <header>
            <p className="section-label">{journeyContent.workingPaper.label}</p>
            <h2 id="working-paper-heading">{journeyContent.workingPaper.title}</h2>
            <p className="working-paper-status">Working paper · 2026</p>
          </header>
          <div>
            {journeyContent.workingPaper.paragraphs.map((paragraph) => (
              <Paragraph key={paragraph.text} paragraph={paragraph} />
            ))}
          </div>
          <aside className="working-paper-family" aria-label="Scope of the working paper">
            <p className="section-label">Scope</p>
            <p>
              Every order <em>q</em> ≥ 2
            </p>
            <p>
              Every pair of renewal parameters and every probability vector in
              the defining two-layer family
            </p>
            <p>
              Exact boundary classification and radial filling of the resulting
              spectral region
            </p>
          </aside>
        </section>

        <section className="journey-return" aria-labelledby="journey-VI">
          <header>
            <p className="section-number">{journeyContent.returnChapter.number}</p>
            <p className="section-label">{journeyContent.returnChapter.label}</p>
            <span className="journey-era">{journeyContent.returnChapter.era}</span>
            <h2 id="journey-VI">{journeyContent.returnChapter.title}</h2>
          </header>
          <div>
            {journeyContent.returnChapter.paragraphs.map((paragraph) => (
              <Paragraph key={paragraph.text} paragraph={paragraph} />
            ))}
            <a
              className="journey-paper-link"
              href="https://zenodo.org/records/21529144"
            >
              Read the archival 24 July 2026 version on Zenodo{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="journey-references" aria-labelledby="journey-references-heading">
          <header className="history-wide-heading journey-references-heading">
            <div>
              <p className="section-number">VII</p>
              <p className="section-label">Works along the way</p>
            </div>
            <div>
              <h2 id="journey-references-heading">References</h2>
              <p>{journeyContent.sourceNote}</p>
            </div>
          </header>

          <ol className="reference-list">
            {journeyReferences.map((reference) => (
              <li id={`journey-reference-${reference.id}`} key={reference.id}>
                <p>
                  <span className="reference-authors">{reference.authors}.</span>{" "}
                  <cite>{reference.title}</cite>. {reference.publication}
                </p>
                {reference.links.length > 0 ? (
                  <p className="reference-links">
                    {reference.links.map((link) => (
                      <a href={link.href} key={link.href}>
                        {link.label} <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-disclosure history-footer-disclosure">
          <div>
            <p className="footer-disclosure-label">Corrections are welcome</p>
            <h2>This account can grow with the project.</h2>
          </div>
          <p>
            Mathematics is a cultural and community endeavour. Comments,
            corrections, and missing parts of the story are welcome, especially
            if you spot an error. This site is being developed with
            generative-AI assistance; the authors remain responsible for
            every claim.
          </p>
        </div>
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
