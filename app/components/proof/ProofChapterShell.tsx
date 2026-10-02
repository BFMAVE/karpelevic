import { SiteHeader } from "../SiteHeader";
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
import { readerOrientations } from "../../data/reader-orientation";
import { readerNotationEntries } from "./ReaderNotation";

const stages = [
  { title: "Foundations", topics: [1, 2] },
  { title: "The structural core", topics: [3, 4, 5, 6, 7] },
  { title: "Bound, attainment, completion", topics: [8, 9, 10, 11, 12] },
  { title: "Worked example", topics: [14] },
  { title: "Optional extension", topics: [13] },
];
const checkpoints = [
  "Explain how one stochastic row becomes a point in a convex hull, and why containment alone does not prove extremality.",
  "Explain why universal contact applies to a new admissible polygon, even when that polygon was not the chosen minimizer.",
  "Assign a corner to its half-open side, and distinguish the contact-count minimization from the area minimization.",
  "Identify what the vertex replacement changes and which averaging relations it preserves.",
  "Distinguish a return to the base set from a visit to a familiar vertex label.",
  "Explain why the closing contact becomes interior and how every other contact survives the deformation.",
  "Give two solutions of the same product polynomial that have different accumulated winding angles.",
  "Explain why a unique scalar root is still a candidate until bound and attainment are proved.",
  "Explain why logarithms turn the product bound into an inequality about an average, and identify its equality case.",
  "Translate a graph edge into a matrix entry and an eigenvector equation; distinguish a state from an extreme coordinate.",
  "Explain why comparing scalar candidates needs an independent argument before they are identified with the region.",
  "Identify the result behind each inequality in the closing chain, and explain the order-three negative-axis exception.",
  "Explain why uniform relative error near an endpoint is stronger than a uniform absolute estimate.",
  "Check one deterministic row, one branching row and one polygon contact in the eight-state example.",
];

type ProofChapterShellProps = {
  routeKey: string;
  question?: string;
  overview?: readonly string[];
  manuscriptPages?: string;
  firstPublishedAt?: string;
  updatedAt: string;
  stats?: readonly { label: string; value: string | number }[];
  readingConvention?: React.ReactNode;
  deck?: React.ReactNode;
  showReadingControls?: boolean;
  completionMessage?: React.ReactNode;
  chapterSections?: readonly { id: string; title: string; children?: readonly { id: string; title: string }[] }[];
  children: React.ReactNode;
};

export function ProofChapterShell({
  routeKey, question, manuscriptPages, firstPublishedAt, updatedAt,
  stats = [], showReadingControls = true, completionMessage,
  chapterSections = [], children,
}: ProofChapterShellProps) {
  const route = getProofReaderRoute(routeKey);
  const topic = proofTopics[route.topicNumber - 1];
  const neighbours = getProofReaderNeighbours(routeKey);
  const roman = toRomanNumeral(route.topicNumber);

  return <>
    <a className="skip-link" href="#chapter-content">Skip to this proof chapter</a>
    <SiteHeader current="proof" />
    <main className="proof-page proof-chapter-page reader-page" id="chapter-content" tabIndex={-1}>
      <div className="reader-series-heading">
        <p className="kicker">The illustrated proof · fourteen topics</p>
        <a href="https://arxiv.org/abs/2609.26058v2">Read the current preprint ↗</a>
      </div>
      <div className="reader-page-grid">
        <aside className="reader-sidebar">
          {chapterSections.length ? <nav className="reader-section-directory" aria-label="On this topic">
            <details data-reader-section-directory open>
            <summary>On this topic · {roman}</summary>
            <ol>{chapterSections.map((section) => <li key={section.id}><a href={"#" + section.id}>{section.title}</a>
              {section.children?.length ? <ol>{section.children.map((child) => <li key={child.id}><a href={"#" + child.id}>{child.title}</a></li>)}</ol> : null}
            </li>)}</ol>
            <a href="#source-argument">Source statements and proofs</a>
            </details>
          </nav> : null}
          <nav className="proof-chapter-atlas reader-topic-directory" aria-label="Fourteen proof topics">
            <details data-reader-directory>
              <summary>All topics and reading routes</summary>
              <a className="proof-chapter-prerequisite-link" href={sitePath("/prerequisites/#theorem-preview")}>See the theorem, then choose a route</a>
              <label className="reader-topic-search" hidden data-topic-search-label>Find a topic or symbol<input type="search" data-topic-search placeholder="For example: convexity, κ, winding" /></label>
              {stages.map((stage) => <section key={stage.title} data-topic-stage><h2>{stage.title}</h2><ol>
                {proofReaderTopicLinks.filter((link) => stage.topics.includes(link.topicNumber)).map((link) => {
                  const isCurrent = link.topicNumber === route.topicNumber;
                  const searchText = [link.title, toRomanNumeral(link.topicNumber), String(link.topicNumber), ...readerNotationEntries(link.topicNumber).flat(), ...readerOrientations[link.topicNumber].imports.map((item) => item.term)].join(" ");
                  return <li key={link.topicNumber} data-topic-entry data-topic-search-text={searchText}>
                    {link.available ? <a aria-current={isCurrent ? "step" : undefined} data-proof-topic-number={link.topicNumber} href={sitePath(link.href)}>
                      <span>{toRomanNumeral(link.topicNumber)}</span><strong>{link.title}</strong>
                    </a> : <span aria-disabled="true" className="proof-chapter-unavailable"><span>{toRomanNumeral(link.topicNumber)}</span><strong>{link.title}</strong><small>Forthcoming</small></span>}
                  </li>;
                })}
              </ol></section>)}
              <p className="reader-search-status" aria-live="polite" data-topic-search-status />
            </details>
          </nav>
        </aside>
        <article className="proof-topic-panel proof-chapter-panel reader-chapter" data-chapter-reading-mode="guided" data-proof-chapter data-proof-route={routeKey}>
          <header className="proof-chapter-heading reader-chapter-heading">
            <p className="section-label">Topic {roman} of XIV</p>
            <h1>{route.title}</h1>
            <p className="reader-chapter-question">{question ?? topic.question}</p>
            {route.topicNumber === 1 ? <p className="reader-preview-link"><a href={sitePath("/prerequisites/#theorem-preview")}>First see the theorem&apos;s picture and statement →</a></p> : null}
            <details className="reader-chapter-publication"><summary>Source and revision</summary><p className="reader-chapter-source">{manuscriptPages ?? topic.manuscriptPages}</p><div className="proof-edition-meta reader-chapter-meta">
              {stats.map((stat) => <span key={stat.label}>{stat.value} {stat.label}</span>)}
              {firstPublishedAt ? <time dateTime={firstPublishedAt}>First published {formatDate(firstPublishedAt)}.</time> : null}
              <time dateTime={updatedAt}>Last revised {formatDate(updatedAt)}.</time>
            </div></details>
          </header>
          {showReadingControls ? <>
            <ProofChapterReadingControls />
            <noscript><p className="proof-noscript">Every source statement and proof remains available below. JavaScript adds reading-mode and bulk-proof controls.</p></noscript>
          </> : null}
          {children}
          <nav className="proof-topic-controls proof-topic-controls-with-previous reader-neighbours" aria-label="Proof chapter navigation">
            <div className="proof-topic-complete"><span>From Topic {roman}</span><strong>{completionMessage ?? topic.overview[0]}</strong></div>
            {neighbours.previous && isProofTopicAvailable(neighbours.previous.topicNumber) ? <a className="proof-topic-control proof-topic-control-previous" data-proof-topic-number={neighbours.previous.topicNumber} href={sitePath(neighbours.previous.href)}><span>Previous topic</span><strong>{neighbours.previous.title}</strong></a> : null}
            {neighbours.next && isProofTopicAvailable(neighbours.next.topicNumber) ? <a className="proof-topic-control proof-topic-control-next" data-proof-topic-number={neighbours.next.topicNumber} href={sitePath(neighbours.next.href)}><span>Next topic</span><strong>{neighbours.next.title}</strong></a> : null}
          </nav>
        </article>
      </div>
      <section className="proof-responsibility reader-responsibility">
        <div><p className="footer-disclosure-label">Before you continue</p><h2>Check your understanding</h2><p>{checkpoints[route.topicNumber - 1]}</p></div>
        <p>This reader was developed with generative-AI assistance. Mathematical and editorial responsibility remains with the authors. If a definition, proof step, source, diagram, or historical classification is unclear or incorrect, please <a href={sitePath("/#contact-heading")}>send a correction</a>.</p>
      </section>
    </main>
    <footer className="site-footer"><div className="footer-meta">
      <time dateTime={updatedAt}>Last revised {formatDate(updatedAt)}.</time>
      <time dateTime={publicationDates.websiteOnlineSince}>Website online since {formatDate(publicationDates.websiteOnlineSince)}.</time>
      <span>© {new Date(updatedAt).getUTCFullYear()} The authors</span>
      <a className="to-top" href="#top">To the top ↑</a>
    </div></footer>
    <script src={sitePath("/proof-chapter.js")} defer />
    <script src={sitePath("/reader-learning.js")} defer />
    {route.topicNumber === 14 ? <script src={sitePath("/eight-state-links.js")} defer /> : null}
  </>;
}
