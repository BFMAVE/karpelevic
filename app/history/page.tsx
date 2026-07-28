import type { Metadata } from "next";
import { historyContent, historyReferences } from "../data/history";
import { primaryNavigation } from "../data/home";
import {
  formatDate,
  getBuildTimestamp,
  getPageTimestamp,
} from "../lib/git-dates";
import { sitePath } from "../lib/site-path";

export const metadata: Metadata = {
  title: "History",
  description:
    "A sourced history of the Karpelevič problem, from invariant polygons to the Farey–Ito boundary and realizing stochastic matrices.",
};

const pageTimestamp = getPageTimestamp("app/data/history.ts");
const buildTimestamp = getBuildTimestamp();
const referenceNumbers = new Map(
  historyReferences.map((reference, index) => [reference.id, index + 1]),
);

function Citations({ ids }: { ids: readonly string[] }) {
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
            <a
              href={`#reference-${id}`}
              aria-label={`Reference ${number}`}
            >
              {number}
            </a>
          </span>
        );
      })}
    </sup>
  );
}

export default function HistoryPage() {
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
            aria-label="Karpelevic — Home"
          >
            <span className="site-monogram" aria-hidden="true">
              Θ
            </span>
            <span>
              <strong>Karpelevic</strong>
              <small>A companion to the manuscript</small>
            </span>
          </a>
        </div>

        <nav className="primary-navigation" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <a
              aria-current={item.href === "/history/" ? "page" : undefined}
              href={sitePath(item.href)}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="history-page" id="main-content">
        <header className="history-hero">
          <div className="history-hero-title">
            <p className="kicker">History of the problem</p>
            <h1>{historyContent.title}</h1>
          </div>

          <div className="history-hero-copy">
            <p className="history-deck">{historyContent.deck}</p>
          </div>

          <aside className="history-disclaimer" aria-label="Scope of this history">
            <p className="section-label">A personal historiographical note</p>
            <p>{historyContent.disclaimer}</p>
            <time dateTime={pageTimestamp}>
              Last updated {formatDate(pageTimestamp)}.
            </time>
          </aside>
        </header>

        <div className="article-rule" aria-hidden="true">
          <span>✦</span>
        </div>

        <section className="history-origins" aria-labelledby="origins-heading">
          <header className="history-section-heading">
            <p className="section-number">I</p>
            <p className="section-label">Before the named region</p>
            <h2 id="origins-heading">The question before the theorem</h2>
          </header>
          <div className="history-reading-column">
            {historyContent.origins.map((paragraph) => (
              <p key={paragraph.text}>
                {paragraph.text}
                <Citations ids={paragraph.citations} />
              </p>
            ))}
          </div>
        </section>

        <section className="history-farey" aria-labelledby="farey-heading">
          <header className="history-section-heading">
            <p className="section-number">II</p>
            <p className="section-label">A small arithmetic dictionary</p>
            <h2 id="farey-heading">{historyContent.farey.title}</h2>
          </header>

          <div className="farey-explainer">
            {historyContent.farey.paragraphs.map((paragraph) => (
              <p key={paragraph.text}>
                {paragraph.text}
                <Citations ids={paragraph.citations} />
              </p>
            ))}

            <div className="farey-unit-circle-statement">
              <p className="proposition-label">The unit-circle points</p>
              <p aria-label="Theta n intersect the unit circle equals the roots of unity of order at most n.">
                Θ<sub>n</sub> ∩ &#123;|z| = 1&#125; = &#123;e
                <sup>2πip/q</sup> : gcd(p,q) = 1, q ≤ n&#125;.
              </p>
            </div>

            <figure className="farey-figure">
              <div className="farey-figure-heading">
                <span>Upper half-turn</span>
                <span>Farey order V</span>
              </div>
              <div
                className="farey-strip"
                role="img"
                aria-label="The Farey fractions from zero to one half at order five: zero, one fifth, one quarter, one third, two fifths, and one half."
              >
                {historyContent.farey.fractions.map((fraction) => (
                  <div
                    className={`farey-point${fraction.emphasis ? " farey-point-emphasis" : ""}`}
                    key={`${fraction.numerator}/${fraction.denominator}`}
                  >
                    <span className="farey-tick" aria-hidden="true" />
                    <span className="stacked-fraction">
                      <span>{fraction.numerator}</span>
                      <span>{fraction.denominator}</span>
                    </span>
                    <small>{fraction.angle}</small>
                  </div>
                ))}
              </div>
              <figcaption>
                <span>Figure 1.</span> Reduced fractions with denominator at
                most five, shown from one to minus one around the upper
                semicircle. The oxblood pair is neighbouring in this order.
              </figcaption>
            </figure>

            <aside className="farey-mediant-note">
              <p className="section-label">Why nothing fits between them</p>
              <p>
                <span className="inline-fraction">1/3</span>
                <span aria-hidden="true"> ⊕ </span>
                <span className="inline-fraction">2/5</span>
                <span aria-hidden="true"> = </span>
                <span className="inline-fraction">3/8</span>
              </p>
              <p>{historyContent.farey.example}</p>
            </aside>
          </div>
        </section>

        <section className="history-chronology" aria-labelledby="timeline-heading">
          <header className="history-wide-heading">
            <div>
              <p className="section-number">III</p>
              <p className="section-label">An annotated chronology</p>
            </div>
            <div>
              <h2 id="timeline-heading">From polygons to arcs and back again</h2>
              <p>
                The milestones below are not a complete genealogy. They trace
                the line most directly connected to the present manuscript:
                geometry, the classical boundary, shorter formulations, and
                concrete realizations.
              </p>
            </div>
          </header>

          <ol className="history-timeline">
            {historyContent.timeline.map((entry, index) => (
              <li className="timeline-entry" key={`${entry.year}-${entry.title}`}>
                <div className="timeline-marker" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="timeline-date">
                  <time dateTime={entry.year}>{entry.year}</time>
                  <span>{entry.label}</span>
                </div>
                <div className="timeline-copy">
                  <h3>{entry.title}</h3>
                  <p>
                    {entry.text}
                    <Citations ids={entry.citations} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="history-languages" aria-labelledby="languages-heading">
          <header className="history-centered-heading">
            <p className="section-label">One region, several descriptions</p>
            <h2 id="languages-heading">
              Three languages that should not be confused
            </h2>
            <p>
              These are not rival versions of Θ<sub>n</sub>. They answer
              different questions about the same object, and the deepest
              results explain how to pass from one language to another.
            </p>
          </header>

          <div className="history-language-grid">
            {historyContent.languages.map((language) => (
              <article className="history-language-card" key={language.number}>
                <p className="language-number">{language.number}</p>
                <h3>{language.title}</h3>
                <p>
                  {language.text}
                  <Citations ids={language.citations} />
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="history-known" aria-labelledby="known-heading">
          <header className="history-section-heading">
            <p className="section-number">IV</p>
            <p className="section-label">A boundary against overclaiming</p>
            <h2 id="known-heading">What was known before this paper</h2>
          </header>

          <div className="known-ledger">
            {historyContent.establishedBefore.map((item, index) => (
              <article className="known-ledger-row" key={item.title}>
                <p className="known-ledger-index">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3>{item.title}</h3>
                  <p>
                    {item.text}
                    <Citations ids={item.citations} />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="history-references" aria-labelledby="references-heading">
          <header className="history-wide-heading history-references-heading">
            <div>
              <p className="section-number">V</p>
              <p className="section-label">Source ledger</p>
            </div>
            <div>
              <h2 id="references-heading">References and further reading</h2>
              <p>{historyContent.sourceNote}</p>
            </div>
          </header>

          <ol className="reference-list">
            {historyReferences.map((reference) => (
              <li id={`reference-${reference.id}`} key={reference.id}>
                <p>
                  <span className="reference-authors">{reference.authors}.</span>{" "}
                  <cite>{reference.title}</cite>. {reference.publication}
                </p>
                <p className="reference-links">
                  {reference.links.map((link) => (
                    <a href={link.href} key={link.href}>
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-disclosure history-footer-disclosure">
          <div>
            <p className="footer-disclosure-label">Corrections are welcome</p>
            <h2>A history should remain corrigible.</h2>
          </div>
          <p>
            This page is a guided reading of the literature, not a final
            bibliography. Mathematical, historical, technical, and
            typographical corrections are welcome. This site is being made
            through vibecoding with generative-AI assistance; the authors
            remain responsible for every claim.
          </p>
        </div>
        <div className="footer-meta">
          <time dateTime={pageTimestamp}>
            Last updated {formatDate(pageTimestamp)}.
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
