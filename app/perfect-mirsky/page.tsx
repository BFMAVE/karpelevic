import { SiteHeader } from "../components/SiteHeader";
import { mirskyHomePath, mirskyPaperRecord, mirskySiteName, mirskyTopicPath, mirskyTopics } from "../data/perfect-mirsky";
import reader from "../data/perfect-mirsky.generated.json";
import { createPageMetadata } from "../lib/site-metadata";
import { sitePath } from "../lib/site-path";
import { MirskyFooter, withMirskyBasePath } from "./chapter";

export const metadata = createPageMetadata({
  title: "Eigenvalues of doubly stochastic matrices",
  description: "Eigenvalues of doubly stochastic matrices. The Perfect–Mirsky region from order 450, the exact regions at orders five and six, and the illustrated pencil-and-paper proof.",
  pathname: mirskyHomePath,
  siteName: mirskySiteName,
});

const [introduction, references] = withMirskyBasePath(reader.overview).split("<!-- mirsky-topics -->");

export default function PerfectMirskyPage() {
  return <>
    <a className="skip-link" href="#chapter-content">Skip to the overview</a>
    <SiteHeader current="mirsky" section="mirsky" />
    <main className="proof-page reader-page mirsky-overview" id="chapter-content" tabIndex={-1}
      data-mirsky-former-topic={sitePath(mirskyTopicPath(0))}>
      <article className="reader-chapter">
        <header className="reader-chapter-heading mirsky-overview-heading">
          <p className="kicker">An illustrated proof</p>
          <h1>Eigenvalues of doubly stochastic matrices</h1>
          <p className="reader-chapter-question">The regular polygons give the whole eigenvalue region from order 450 onward. These eight topics follow the proof by pencil and paper from order 10³⁰.</p>
          <div className="reader-home-actions mirsky-actions">
            <a href={sitePath(mirskyTopicPath(0))}>Start with Topic I</a>
            <a href={mirskyPaperRecord}>Read the arXiv preprint</a>
          </div>
        </header>
        <div className="reader-guide" dangerouslySetInnerHTML={{ __html: introduction }} />
        <ol className="mirsky-overview-topics" aria-labelledby="topics">
          {mirskyTopics.map((topic, index) => <li key={topic.numeral}>
            <a href={sitePath(mirskyTopicPath(index))}>
              <span>{topic.numeral}</span> {topic.title}
            </a>
          </li>)}
        </ol>
        <div className="reader-guide" dangerouslySetInnerHTML={{ __html: references }} />
      </article>
    </main>
    <MirskyFooter />
    <script type="module" src={sitePath("/perfect-mirsky.js")} defer />
  </>;
}
