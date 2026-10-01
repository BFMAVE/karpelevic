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
  chapterSections?: readonly { id: string; title: string }[];
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
          <nav className="proof-chapter-atlas reader-topic-directory" aria-label="Fourteen proof topics">
            <details data-reader-directory open>
              <summary>The proof, topic by topic</summary>
              <a className="proof-chapter-prerequisite-link" href={sitePath("/prerequisites/")}>Background reminders</a>
              <ol>
                {proofReaderTopicLinks.map((link) => {
                  const isCurrent = link.topicNumber === route.topicNumber;
                  return <li key={link.topicNumber}>
                    {link.available ? <a aria-current={isCurrent ? "step" : undefined} data-proof-topic-number={link.topicNumber} href={sitePath(link.href)}>
                      <span>{toRomanNumeral(link.topicNumber)}</span><strong>{link.title}</strong>
                    </a> : <span aria-disabled="true" className="proof-chapter-unavailable"><span>{toRomanNumeral(link.topicNumber)}</span><strong>{link.title}</strong><small>Forthcoming</small></span>}
                  </li>;
                })}
              </ol>
            </details>
          </nav>
          {chapterSections.length ? <nav className="reader-section-directory" aria-label="On this topic">
            <p className="section-label">On this topic</p>
            <ol>{chapterSections.map((section) => <li key={section.id}><a href={"#" + section.id}>{section.title}</a></li>)}</ol>
            <a href="#source-argument">Source statements and proofs</a>
          </nav> : null}
        </aside>
        <article className="proof-topic-panel proof-chapter-panel reader-chapter" data-chapter-reading-mode="guided" data-proof-chapter data-proof-route={routeKey}>
          <header className="proof-chapter-heading reader-chapter-heading">
            <p className="section-label">Topic {roman} of XIV</p>
            <h1>{route.title}</h1>
            <p className="reader-chapter-question">{question ?? topic.question}</p>
            <p className="reader-chapter-source">{manuscriptPages ?? topic.manuscriptPages}</p>
            <div className="proof-edition-meta reader-chapter-meta">
              {stats.map((stat) => <span key={stat.label}>{stat.value} {stat.label}</span>)}
              {firstPublishedAt ? <time dateTime={firstPublishedAt}>First published {formatDate(firstPublishedAt)}.</time> : null}
              <time dateTime={updatedAt}>Last revised {formatDate(updatedAt)}.</time>
            </div>
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
        <div><p className="footer-disclosure-label">Corrections are welcome</p><h2>Accessibility does not lower the standard of proof.</h2></div>
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
  </>;
}
