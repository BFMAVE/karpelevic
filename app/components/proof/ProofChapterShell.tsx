import { primaryNavigation } from "../../data/home";
import { publicationDates } from "../../data/publication-dates";
import { proofTopics } from "../../data/proof";
import {
  getProofReaderNeighbours,
  getProofReaderRoute,
  isProofTopicAvailable,
  proofReaderTopicLinks,
  toRomanNumeral,
} from "../../data/proof-reader";
import { formatDate } from "../../lib/git-dates";
import { sitePath } from "../../lib/site-path";
import { ProofChapterReadingControls } from "./ProofChapterReadingControls";

type ChapterStat = {
  label: string;
  value: string | number;
};

type ProofChapterShellProps = {
  routeKey: string;
  question?: string;
  overview?: readonly string[];
  manuscriptPages?: string;
  firstPublishedAt?: string;
  updatedAt: string;
  stats?: readonly ChapterStat[];
  readingConvention?: React.ReactNode;
  deck?: React.ReactNode;
  showReadingControls?: boolean;
  completionMessage?: React.ReactNode;
  children: React.ReactNode;
};

export function ProofChapterShell({
  routeKey,
  question,
  overview,
  manuscriptPages,
  firstPublishedAt,
  updatedAt,
  stats = [],
  readingConvention,
  deck,
  showReadingControls = true,
  completionMessage,
  children,
}: ProofChapterShellProps) {
  const route = getProofReaderRoute(routeKey);
  const topic = proofTopics[route.topicNumber - 1];
  const neighbours = getProofReaderNeighbours(routeKey);
  const roman = toRomanNumeral(route.topicNumber);
  const resolvedQuestion = question ?? topic.question;
  const resolvedOverview = overview ?? topic.overview;
  const resolvedPages = manuscriptPages ?? topic.manuscriptPages;

  return (
    <>
      <a className="skip-link" href="#chapter-content">
        Skip to this proof chapter
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
              href={sitePath(item.href)}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="proof-page proof-chapter-page" id="chapter-content" tabIndex={-1}>
        <header className="proof-hero proof-chapter-hero">
          <div>
            <p className="kicker">The fourteen-topic proof reader</p>
            <h1>How the Proof Works</h1>
            <p className="proof-subtitle">
              Critical invariant polygons and the Karpelevič theorem in Ito&apos;s
              formulation
            </p>
          </div>
          <div className="proof-hero-copy">
            <p className="proof-deck">
              {deck ?? (
                <>
                  A complete, source-aware mathematical reading in which every
                  nonstandard object is defined locally or linked to its
                  earlier definition, and every proof remains available in
                  full.
                </>
              )}
            </p>
            <div className="proof-edition-meta">
              <span>
                Topic {roman} of XIV
              </span>
              {stats.map((stat) => (
                <span key={stat.label}>
                  {stat.value} {stat.label}
                </span>
              ))}
              {firstPublishedAt ? (
                <time dateTime={firstPublishedAt}>
                  First published {formatDate(firstPublishedAt)}.
                </time>
              ) : null}
              <time dateTime={updatedAt}>
                Last revised {formatDate(updatedAt)}.
              </time>
            </div>
          </div>
        </header>

        <nav className="proof-chapter-atlas" aria-label="Fourteen proof topics">
          <p className="section-label">Proof topics</p>
          <a
            className="proof-chapter-prerequisite-link"
            href={sitePath("/prerequisites/")}
          >
            Prerequisites for Topic I
          </a>
          <ol>
            {proofReaderTopicLinks.map((link) => {
              const isCurrent = link.topicNumber === route.topicNumber;
              return (
                <li key={link.topicNumber}>
                  {link.available ? (
                    <a
                      aria-current={isCurrent ? "step" : undefined}
                      data-proof-topic-number={link.topicNumber}
                      href={sitePath(link.href)}
                    >
                      <span>{toRomanNumeral(link.topicNumber)}</span>
                      <strong>{link.title}</strong>
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="proof-chapter-unavailable"
                      data-proof-topic-number={link.topicNumber}
                    >
                      <span>{toRomanNumeral(link.topicNumber)}</span>
                      <strong>{link.title}</strong>
                      <small>Forthcoming</small>
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <article
          className="proof-topic-panel proof-chapter-panel"
          data-chapter-reading-mode="guided"
          data-proof-chapter
          data-proof-route={routeKey}
          data-topic-tone={route.topicNumber % 2 === 0 ? "oxblood" : "navy"}
        >
          <header className="proof-topic-header proof-chapter-heading">
            <p className="section-label">
              Topic {roman} · Manuscript pages {resolvedPages}
            </p>
            <h2>{route.title}</h2>
            <p className="proof-topic-question">{resolvedQuestion}</p>
          </header>

          <details className="proof-topic-overview proof-chapter-orientation">
            <summary>
              <span>Topic orientation</span>
              What this chapter proves and why it comes here
            </summary>
            <div>
              {resolvedOverview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                <strong>Reading convention.</strong>{" "}
                {readingConvention ?? (
                  <>
                    Essential definitions appear before the first statement
                    that needs them. Complete manuscript proofs are closed by
                    default. When a result has an added line-by-line
                    explanation, it appears inside the same disclosure as the
                    proof.
                  </>
                )}
              </p>
            </div>
          </details>

          {showReadingControls ? (
            <>
              <ProofChapterReadingControls />
              <noscript>
                <p className="proof-noscript">
                  JavaScript is unavailable. Reading-mode and bulk-proof
                  controls are hidden, but every statement and each individual
                  proof disclosure remains readable.
                </p>
              </noscript>
            </>
          ) : null}

          {children}

          <nav className="proof-topic-controls proof-topic-controls-with-previous" aria-label="Proof chapter navigation">
            <div className="proof-topic-complete">
              <span>
                End of Topic {roman}
              </span>
              <strong>
                {completionMessage ?? "All results assigned to this topic are proved"}
              </strong>
            </div>
            {neighbours.previous &&
            isProofTopicAvailable(neighbours.previous.topicNumber) ? (
              <a
                className="proof-topic-control proof-topic-control-previous"
                data-proof-topic-number={neighbours.previous.topicNumber}
                href={sitePath(neighbours.previous.href)}
              >
                <span>Previous</span>
                <strong>{neighbours.previous.title}</strong>
              </a>
            ) : null}
            {neighbours.next &&
            isProofTopicAvailable(neighbours.next.topicNumber) ? (
              <a
                className="proof-topic-control proof-topic-control-next"
                data-proof-topic-number={neighbours.next.topicNumber}
                href={sitePath(neighbours.next.href)}
              >
                <span>Next</span>
                <strong>{neighbours.next.title}</strong>
              </a>
            ) : neighbours.next ? (
              <span
                aria-disabled="true"
                className="proof-topic-control proof-topic-control-next proof-topic-control-unavailable"
                data-proof-topic-number={neighbours.next.topicNumber}
              >
                <span>Next</span>
                <strong>{neighbours.next.title}</strong>
                <small>Forthcoming</small>
              </span>
            ) : null}
          </nav>
        </article>

        <section className="proof-responsibility">
          <div>
            <p className="footer-disclosure-label">Corrections are welcome</p>
            <h2>Accessibility does not lower the standard of proof.</h2>
          </div>
          <p>
            This reader was developed with generative-AI assistance.
            Mathematical and editorial responsibility remains
            with the authors. If a definition, proof step, source, diagram, or
            historical classification is unclear or incorrect, please{" "}
            <a href={sitePath("/#contact-heading")}>send a correction</a>.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-meta">
          <time dateTime={updatedAt}>
            Last revised {formatDate(updatedAt)}.
          </time>
          <time dateTime={publicationDates.websiteOnlineSince}>
            Website online since{" "}
            {formatDate(publicationDates.websiteOnlineSince)}.
          </time>
          <span>© {new Date(updatedAt).getUTCFullYear()} The authors</span>
          <a className="to-top" href="#top">
            To the top ↑
          </a>
        </div>
      </footer>
      {showReadingControls ? (
        <script src={sitePath("/proof-chapter.js")} defer />
      ) : null}
    </>
  );
}
