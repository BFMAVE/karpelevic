import { primaryNavigation } from "../../data/home";
import { proofTopics } from "../../data/proof";
import {
  getProofReaderNeighbours,
  getProofReaderParts,
  getProofReaderRoute,
  proofReaderTopicLinks,
  toRomanNumeral,
} from "../../data/proof-reader";
import { formatDate, getBuildTimestamp } from "../../lib/git-dates";
import { sitePath } from "../../lib/site-path";

type ChapterStat = {
  label: string;
  value: string | number;
};

type ProofChapterShellProps = {
  routeKey: string;
  question?: string;
  overview?: readonly string[];
  manuscriptPages?: string;
  updatedAt: string;
  stats?: readonly ChapterStat[];
  children: React.ReactNode;
};

const buildTimestamp = getBuildTimestamp();

export function ProofChapterShell({
  routeKey,
  question,
  overview,
  manuscriptPages,
  updatedAt,
  stats = [],
  children,
}: ProofChapterShellProps) {
  const route = getProofReaderRoute(routeKey);
  const topic = proofTopics[route.topicNumber - 1];
  const neighbours = getProofReaderNeighbours(routeKey);
  const topicParts = getProofReaderParts(route.topicNumber);
  const roman = toRomanNumeral(route.topicNumber);
  const resolvedQuestion = question ?? topic.question;
  const resolvedOverview = overview ?? topic.overview;
  const resolvedPages = manuscriptPages ?? topic.manuscriptPages;
  const partLabel = route.part ? ` · Part ${route.part}` : "";

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
              aria-current={item.href === "/proof/" ? "page" : undefined}
              href={sitePath(item.href)}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="proof-page proof-chapter-page" id="chapter-content">
        <header className="proof-hero proof-chapter-hero">
          <div>
            <p className="kicker">The fourteen-topic proof reader</p>
            <h1>How the Proof Works</h1>
            <p className="proof-subtitle">
              Critical invariant polygons and the route to Karpelevič–Ito
            </p>
          </div>
          <div className="proof-hero-copy">
            <p className="proof-deck">
              A complete, source-aware mathematical reading in which every
              nonstandard object is defined before it is used and every proof
              remains available in full.
            </p>
            <div className="proof-edition-meta">
              <span>
                Topic {roman}{partLabel} of XIV
              </span>
              {stats.map((stat) => (
                <span key={stat.label}>
                  {stat.value} {stat.label}
                </span>
              ))}
              <time dateTime={updatedAt}>
                Last updated {formatDate(updatedAt)}.
              </time>
            </div>
          </div>
        </header>

        <nav className="proof-chapter-atlas" aria-label="Fourteen proof topics">
          <p className="section-label">The complete route</p>
          <ol>
            {proofReaderTopicLinks.map((link) => {
              const isCurrent = link.topicNumber === route.topicNumber;
              return (
                <li key={link.topicNumber}>
                  <a
                    aria-current={isCurrent ? "step" : undefined}
                    href={sitePath(link.href)}
                  >
                    <span>{toRomanNumeral(link.topicNumber)}</span>
                    <strong>{link.title}</strong>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        {topicParts.length > 0 ? (
          <nav className="proof-chapter-parts" aria-label={`Parts of Topic ${roman}`}>
            {topicParts.map((part) => (
              <a
                aria-current={route.part === part.label ? "page" : undefined}
                href={sitePath(part.href)}
                key={part.label}
              >
                <span>Part {part.label}</span>
                <strong>{part.title}</strong>
              </a>
            ))}
          </nav>
        ) : null}

        <article
          className="proof-topic-panel proof-chapter-panel"
          data-proof-route={routeKey}
          data-topic-tone={route.topicNumber % 2 === 0 ? "oxblood" : "navy"}
        >
          <header className="proof-topic-header proof-chapter-heading">
            <p className="section-label">
              Topic {roman}{partLabel} · Manuscript pages {resolvedPages}
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
                <strong>Reading convention.</strong> Essential definitions
                appear before the first statement that needs them. Complete
                manuscript proofs are closed by default; opening one also
                reveals the added line-by-line explanation.
              </p>
            </div>
          </details>

          {children}

          <nav className="proof-topic-controls proof-topic-controls-with-previous" aria-label="Proof chapter navigation">
            <div className="proof-topic-complete">
              <span>
                End of Topic {roman}{partLabel}
              </span>
              <strong>This chapter is complete</strong>
            </div>
            {neighbours.previous ? (
              <a
                className="proof-topic-control proof-topic-control-previous"
                href={sitePath(neighbours.previous.href)}
              >
                <span>Previous</span>
                <strong>{neighbours.previous.title}</strong>
              </a>
            ) : null}
            {neighbours.next ? (
              <a
                className="proof-topic-control proof-topic-control-next"
                href={sitePath(neighbours.next.href)}
              >
                <span>Next</span>
                <strong>{neighbours.next.title}</strong>
              </a>
            ) : null}
          </nav>
        </article>

        <section className="proof-responsibility">
          <div>
            <p className="footer-disclosure-label">Corrections are welcome</p>
            <h2>Accessibility does not lower the standard of proof.</h2>
          </div>
          <p>
            This reader was made through vibecoding with generative-AI
            assistance. Mathematical and editorial responsibility remains
            with the authors. If a definition, proof step, source, diagram, or
            historical classification is unclear or incorrect, please{" "}
            <a href={sitePath("/#contact-heading")}>send a correction</a>.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-meta">
          <time dateTime={updatedAt}>
            Last updated {formatDate(updatedAt)}.
          </time>
          <time dateTime={buildTimestamp}>
            Site build {formatDate(buildTimestamp)}.
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
