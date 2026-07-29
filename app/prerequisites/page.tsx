import type { Metadata } from "next";
import { PrerequisitePlate } from "../components/PrerequisitePlate";
import { primaryNavigation } from "../data/home";
import {
  getPrerequisiteReference,
  prerequisiteChapters,
  prerequisiteReferences,
  prerequisitesContent,
} from "../data/prerequisites";
import {
  formatDate,
  getBuildTimestamp,
  getPageTimestamp,
} from "../lib/git-dates";
import { sitePath } from "../lib/site-path";

export const metadata: Metadata = {
  title: "Prerequisites for Topic I",
  description:
    "An illustrated mathematical library for Topic I: intrinsic real-linear maps, elliptic contractions, invariant polygons, orientation, and strict separation.",
};

const pageTimestamp = getPageTimestamp("app/data/prerequisites.ts");
const buildTimestamp = getBuildTimestamp();
const referenceNumbers = new Map(
  prerequisiteReferences.map((reference, index) => [reference.id, index + 1]),
);

function ChapterSources({ ids }: { ids: readonly string[] }) {
  return (
    <div className="prerequisite-chapter-sources">
      <span>Background sources</span>
      <ol>
        {ids.map((id) => {
          const reference = getPrerequisiteReference(id);
          const referenceNumber = referenceNumbers.get(id);

          if (!reference || !referenceNumber) {
            return null;
          }

          return (
            <li key={id}>
              <a href={`#prerequisite-reference-${id}`}>
                [{referenceNumber}] {reference.authors}
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default function PrerequisitesPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to the prerequisite library
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
            <a href={sitePath(item.href)} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="prerequisites-page" id="main-content">
        <header className="prerequisites-hero">
          <div className="prerequisites-hero-title">
            <p className="kicker">{prerequisitesContent.title}</p>
            <h1>{prerequisitesContent.subtitle}</h1>
            <p className="prerequisites-topic-line">
              {prerequisitesContent.topicTitle}
            </p>
          </div>
          <div className="prerequisites-hero-copy">
            <p>{prerequisitesContent.deck}</p>
            <p>
              Read a chapter from beginning to end if its language is new, or
              use the contents below as a dictionary while working through
              Topic I. Routine linear algebra is assumed, and nothing here is
              claimed as new.
            </p>
            <div className="prerequisites-hero-actions">
              <a className="button button-primary" href="#library-contents">
                Open the library
              </a>
              <a className="text-link" href={sitePath("/proof/")}>
                Return to Topic I →
              </a>
            </div>
            <time dateTime={pageTimestamp}>
              Last updated {formatDate(pageTimestamp)}.
            </time>
          </div>
        </header>

        <nav
          className="prerequisites-contents"
          id="library-contents"
          aria-label="Prerequisite chapters"
        >
          <header>
            <p className="section-label">Contents</p>
            <h2>Three shelves for Topic I, in the order they are needed</h2>
          </header>
          <ol>
            {prerequisiteChapters.map((chapter) => (
              <li key={chapter.slug}>
                <a href={`#${chapter.slug}`}>
                  <span>{chapter.numeral}</span>
                  <strong>{chapter.title}</strong>
                  <small>{chapter.deck}</small>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="prerequisite-chapters">
          {prerequisiteChapters.map((chapter) => (
            <article
              className="prerequisite-chapter"
              id={chapter.slug}
              key={chapter.slug}
            >
              <header className="prerequisite-chapter-heading">
                <p className="section-number">{chapter.numeral}</p>
                <p className="section-label">Topic I prerequisite</p>
                <h2>{chapter.title}</h2>
                <p>{chapter.deck}</p>
              </header>

              <PrerequisitePlate slug={chapter.slug} />

              <section
                className="prerequisite-vocabulary"
                aria-labelledby={`${chapter.slug}-vocabulary`}
              >
                <header>
                  <p className="section-label">Definitions</p>
                  <h3 id={`${chapter.slug}-vocabulary`}>
                    The words used in Topic I
                  </h3>
                  <p>
                    These are working definitions for this reader. The
                    references at the end of the chapter give the broader
                    theory.
                  </p>
                </header>
                <dl>
                  {chapter.vocabulary.map((entry) => (
                    <div key={entry.term}>
                      <dt>{entry.term}</dt>
                      <dd>{entry.definition}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section
                className="prerequisite-facts"
                aria-labelledby={`${chapter.slug}-facts`}
              >
                <header>
                  <p className="section-label">Portable facts</p>
                  <h3 id={`${chapter.slug}-facts`}>
                    Four facts to carry into the proof
                  </h3>
                </header>
                <ol>
                  {chapter.facts.map((fact, index) => (
                    <li key={fact.title}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h4>{fact.title}</h4>
                        <p className="prerequisite-statement">
                          {fact.statement}
                        </p>
                        <p>{fact.explanation}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section
                className="prerequisite-example"
                aria-labelledby={`${chapter.slug}-example`}
              >
                <header>
                  <p className="section-label">Worked example</p>
                  <h3 id={`${chapter.slug}-example`}>
                    {chapter.example.title}
                  </h3>
                  <p>{chapter.example.introduction}</p>
                </header>
                <ol>
                  {chapter.example.steps.map((step, index) => (
                    <li key={step.label}>
                      <span>{index + 1}</span>
                      <div>
                        <strong>{step.label}</strong>
                        <p>{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="prerequisite-example-conclusion">
                  <span>What this shows</span>
                  {chapter.example.conclusion}
                </p>
              </section>

              <section
                className="prerequisite-return"
                aria-labelledby={`${chapter.slug}-return`}
              >
                <header>
                  <p className="section-label">Return to the argument</p>
                  <h3 id={`${chapter.slug}-return`}>
                    Where Topic I uses this shelf
                  </h3>
                </header>
                <div>
                  {chapter.partIUse.map((use) => (
                    <a href={sitePath(use.href)} key={`${use.label}-${use.href}`}>
                      <span>{use.label}</span>
                      <p>{use.text}</p>
                      <strong>Open this part →</strong>
                    </a>
                  ))}
                </div>
              </section>

              <ChapterSources ids={chapter.referenceIds} />

              <a className="prerequisite-back-to-contents" href="#library-contents">
                Back to the three shelves ↑
              </a>
            </article>
          ))}
        </div>

        <section
          className="prerequisite-references"
          aria-labelledby="prerequisite-references-heading"
        >
          <header>
            <p className="section-label">Reference shelf</p>
            <h2 id="prerequisite-references-heading">
              Standard sources for the background
            </h2>
            <p>
              These sources are included for readers who want a fuller
              treatment than this proof-specific library can provide.
            </p>
          </header>
          <ol>
            {prerequisiteReferences.map((reference, index) => (
              <li
                id={`prerequisite-reference-${reference.id}`}
                key={reference.id}
              >
                <span>[{index + 1}]</span>
                <p>
                  {reference.authors}.{" "}
                  {reference.href ? (
                    <a href={reference.href}>{reference.title}</a>
                  ) : (
                    <cite>{reference.title}</cite>
                  )}
                  . {reference.publication}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="prerequisite-responsibility">
          <div>
            <p className="footer-disclosure-label">Corrections are welcome</p>
            <h2>A library should become clearer when readers use it.</h2>
          </div>
          <p>
            This page was made through vibecoding with generative-AI
            assistance. Mathematical and editorial responsibility remains
            with the authors. If a definition is misleading, an illustration
            needs qualification, or a useful prerequisite is missing, please{" "}
            <a href={sitePath("/#contact-heading")}>send a correction</a>.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-meta">
          <time dateTime={pageTimestamp}>
            Last updated {formatDate(pageTimestamp)}.
          </time>
          <time dateTime={buildTimestamp}>
            Site build {formatDate(buildTimestamp)}.
          </time>
          <span>© {new Date(buildTimestamp).getUTCFullYear()} The authors</span>
          <a href={sitePath("/proof/")}>The Proof</a>
          <a className="to-top" href="#top">
            To the top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
