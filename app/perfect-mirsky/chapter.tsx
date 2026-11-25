import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { ProofChapterReadingControls } from "../components/proof/ProofChapterReadingControls";
import { ReaderFigureCaption } from "../components/proof/ReaderFigureCaption";
import { ReaderFigureFrame } from "../components/proof/ReaderFigureFrame";
import { mirskyPaper, mirskyPaperRecord, mirskyTopicPath, mirskyTopics } from "../data/perfect-mirsky";
import reader from "../data/perfect-mirsky.generated.json";
import { createPageMetadata } from "../lib/site-metadata";
import { sitePath } from "../lib/site-path";
import { Chord, CompareRays, Incircle, LoopErasure, PolygonRegion, QuarterTurn, SixMarks, SmallTurn } from "./figures";

const stages = [
  { title: "From coordinates to a region", indices: [0, 1, 2] },
  { title: "The estimate on the outer marks", indices: [3, 4] },
  { title: "The proof at large order", indices: [5, 6, 7] },
];

const figures = {
  square: {
    title: "Two rows share the source at i",
    Component: SixMarks,
    takeaway: "Move the two real marks and watch the two demands add up. The four corners stay fixed.",
    scope: "Exact six-mark example with trial multiplier 3i/4. The sharp bound refers to these marks.",
    coordinates: "The real interior marks are a and −a. The two highlighted targets are 3i/4 and 3ai/4. Their required imaginary parts have sum 3(1 + a)/4.",
  },
  polygons: {
    title: "An eigenvalue above the two sides at order five",
    Component: PolygonRegion,
    takeaway: "The red point comes from the average of the two permutations. The enlargement shows the gap between that point and the union of polygons.",
    scope: "Regular polygons drawn from their exact vertices. The witness is plotted at numerical coordinates from the quartic.",
    coordinates: "The upper root lies in −0.279293 < Re z < −0.279292, 0.7634 < Im z < 0.7637. The calculation below gives the polynomial and identifies the sides.",
  },
  incircle: {
    title: "Find the largest centred disk in a regular polygon",
    Component: Incircle,
    takeaway: "The perpendicular to the side meets it halfway. Its length is the cosine of half the angle between the neighbouring roots.",
    scope: "Exact right triangle for order eight. The proof uses the same calculation at order N.",
    coordinates: "The two endpoints of the side are 1 and exp(iπ/4). Their midpoint is cos(π/8) exp(iπ/8).",
  },
  chord: {
    title: "Average two neighboring rotations",
    Component: Chord,
    takeaway: "The average moves along the side. Its loss of squared radius equals half the mean squared difference of two independent draws.",
    scope: "Exact identities for an eight-state cyclic example. Distances in the drawing are evaluated numerically.",
    coordinates: "The rotations are 1 and exp(iπ/4). The point on the side is 1 − u + u exp(iπ/4). The squared side length is 2 − √2.",
  },
  rays: {
    title: "How much does the radius fall when the ray changes?",
    Component: CompareRays,
    takeaway: "Subtract the squared radius at the new angle from that at η. The loss is smaller than the margin between η and z.",
    scope: "An octagon model of the comparison. The outer-ring estimate concerns much larger orders.",
    coordinates: "Here η = 4/5 + exp(iπ/4)/5 and z = .9 exp(iπ/8). The radius at π/8 is cos(π/8).",
  },
  spiral: {
    title: "One turn of the powers gives a disk",
    Component: SmallTurn,
    takeaway: "Every direction has a nearby visited mark. Projecting to that direction bounds how far the hull extends.",
    scope: "Exact powers with a visible contraction. The proof uses an angle and contraction bounded in terms of N.",
    coordinates: "Here λ = exp(−.012 + iπ/12). The drawing includes λ⁰ through λ²⁴. Their moduli are at least exp(−.288).",
  },
  "quarter-turn": {
    title: "Watch the third step and the sixth step",
    Component: QuarterTurn,
    takeaway: "At step six the angles agree. The corrected distance in the right-hand plot records the earlier excursion.",
    scope: "One specified path of the 36-state example. The path has probability 1/64 when started at label 0.",
    coordinates: "The labels visited are 0, 1, 2, 3, 5, 7, 9. The average after k steps is λᵏ, with λ = cos(π/36) exp(iπ/12). Divide the actual position by λᵏ to make the corrected distance.",
  },
  loops: {
    title: "Remove the edges between repeated visits",
    Component: LoopErasure,
    takeaway: "The portion B–C–B can go. The endpoints stay A and E, and each of the three retained edges was in the original path.",
    scope: "Five labelled points on a circle inside one illustrative annulus. The drawing explains loop erasure.",
    coordinates: "The labels A, B, C, D and E are at angles 0°, 22.5°, 45°, 67.5° and 90°. The original path has five edges and the retained path has three.",
  },
} as const;

function withBasePath(html: string) {
  return html.replace(/href="(\/(?!\/)[^"]*)"/g,
    (_, path: string) => 'href="' + sitePath(path) + '"');
}

export function mirskyMetadata(index: number): Metadata {
  const topic = mirskyTopics[index];
  return createPageMetadata({
    title: "Perfect–Mirsky Topic " + topic.numeral + " — " + topic.title,
    description: topic.question,
    pathname: mirskyTopicPath(index),
  });
}

export function MirskyChapter({ index }: { index: number }) {
  const topic = mirskyTopics[index];
  const { guide, proof } = reader.chapters[index];
  const sections = Array.from(guide.matchAll(/<h3 id="([^"]+)">([^<]+)<\/h3>/g),
    ([, id, title]) => ({ id, title }));
  const previous = mirskyTopics[index - 1];
  const next = mirskyTopics[index + 1];
  const guideParts = withBasePath(guide).split(/(<!-- mirsky-figure:[\w-]+ -->)/g);

  return <>
    <a className="skip-link" href="#chapter-content">Skip to this proof chapter</a>
    <SiteHeader current="mirsky" />
    <main className="proof-page proof-chapter-page reader-page mirsky-page" id="chapter-content" tabIndex={-1}>
      <div className="reader-series-heading">
        <p className="kicker">Perfect–Mirsky at large orders · an illustrated proof</p>
        <a href={mirskyPaperRecord}>Read the preprint</a>
      </div>
      <div className="reader-page-grid">
        <aside className="reader-sidebar">
          <nav className="reader-section-directory" aria-label="On this topic">
            <details data-reader-section-directory open>
              <summary>On this topic · {topic.numeral}</summary>
              <ol>{sections.map(({ id, title }) => <li key={id}><a href={"#" + id}>{title}</a></li>)}</ol>
              <a href="#mirsky-proof-text">Detailed proof</a>
            </details>
          </nav>
          <nav className="proof-chapter-atlas reader-topic-directory" aria-label="Eight Perfect–Mirsky proof topics">
            <details data-reader-directory>
              <summary>All eight topics</summary>
              <a className="proof-chapter-prerequisite-link" href={sitePath("/perfect-mirsky/#reading-routes")}>Choose a reading route</a>
              {stages.map((stage) => <section key={stage.title} data-topic-stage>
                <h2>{stage.title}</h2>
                <ol>{stage.indices.map((position) => {
                  const chapter = mirskyTopics[position];
                  return <li key={chapter.numeral}>
                    <a data-proof-topic-number={position + 1} aria-current={position === index ? "step" : undefined}
                      href={sitePath(mirskyTopicPath(position))}>
                      <span>{chapter.numeral}</span><strong>{chapter.title}</strong>
                    </a>
                  </li>;
                })}</ol>
              </section>)}
            </details>
          </nav>
        </aside>
        <article className="proof-topic-panel proof-chapter-panel reader-chapter"
          data-proof-chapter data-chapter-close-proofs-in-guide data-chapter-reading-mode="guided">
          <header className="proof-chapter-heading reader-chapter-heading">
            <p className="section-label">Topic {topic.numeral} of VIII</p>
            <h1>{topic.title}</h1>
            <p className="reader-chapter-question">{topic.question}</p>
            {index === 0 && <div className="reader-home-actions mirsky-actions">
              <a href="#mirsky-figure-square">Try the six-mark example</a>
              <a href={sitePath(mirskyTopicPath(1) + "#theorem")}>See the theorem</a>
              <a href="#reading-routes">Choose a reading route</a>
            </div>}
            <details className="reader-chapter-publication">
              <summary>Source and revision</summary>
              <p className="reader-chapter-source">
                <a href={mirskyPaper + topic.anchor}>{topic.source}</a> of <em>Eigenvalues of doubly stochastic matrices in large orders</em> by
                Brecht Verbeken and Vincent Ginis. This reader follows the preprint revised <time dateTime="2026-11-24">24 November 2026</time>.
              </p>
            </details>
          </header>
          <ProofChapterReadingControls formalLabel="Detailed proof" showBulkControls={false} />
          <section className="reader-orientation proof-guided-layer" aria-labelledby="mirsky-idea">
            <div className="reader-strategy">
              <h2 id="mirsky-idea">The idea of the argument</h2>
              <p>{topic.idea}</p>
            </div>
          </section>
          <div className="reader-guide proof-guided-layer">
            {guideParts.map((part, position) => {
              const name = part.match(/^<!-- mirsky-figure:([\w-]+) -->$/)?.[1] as keyof typeof figures | undefined;
              if (!name) return <div key={position} dangerouslySetInnerHTML={{ __html: part }} />;
              const { title, Component, takeaway, scope, coordinates } = figures[name];
              return <ReaderFigureFrame key={name}>
                <figure className="reader-teaching-figure mirsky-figure" aria-labelledby={"mirsky-figure-" + name}>
                  <h4 id={"mirsky-figure-" + name}>{title}</h4>
                  <Component />
                  <ReaderFigureCaption takeaway={takeaway} status={scope}><p>{coordinates}</p></ReaderFigureCaption>
                </figure>
              </ReaderFigureFrame>;
            })}
          </div>
          <section className="reader-formal" id="source-argument" aria-labelledby="mirsky-detail-heading">
            <h2 id="mirsky-detail-heading">Detailed proof</h2>
            <p>The calculations follow <a href={mirskyPaper + topic.anchor}>{topic.source}</a> of the paper.</p>
            <details className="proof-chapter-proof reader-source-proof">
              <summary>Read the argument for Topic {topic.numeral}</summary>
              <div id="mirsky-proof-text" className="reader-source-text mirsky-proof" dangerouslySetInnerHTML={{ __html: withBasePath(proof) }} />
            </details>
          </section>
          <nav className="proof-topic-controls proof-topic-controls-with-previous reader-neighbours" aria-label="Perfect–Mirsky topic navigation">
            <div className="proof-topic-complete">
              <span>From Topic {topic.numeral}</span><strong>{topic.takeaway}</strong>
            </div>
            {previous && <a className="proof-topic-control proof-topic-control-previous" href={sitePath(mirskyTopicPath(index - 1))}>
              <span>Previous topic</span><strong>{previous.title}</strong>
            </a>}
            {next ? <a className="proof-topic-control proof-topic-control-next" href={sitePath(mirskyTopicPath(index + 1))}>
              <span>Next topic</span><strong>{next.title}</strong>
            </a> : <a className="proof-topic-control proof-topic-control-next" href={sitePath(mirskyTopicPath(1) + "#theorem")}>
              <span>Return to the statement</span><strong>The large-order theorem</strong>
            </a>}
          </nav>
        </article>
      </div>
    </main>
    <footer className="site-footer"><div className="footer-meta">
      <span>Perfect–Mirsky at large orders</span>
      <a href={sitePath("/proof/")}>Karpelevič Topic I</a>
      <a className="to-top" href="#top">To the top</a>
    </div></footer>
    <script src={sitePath("/proof-chapter.js")} defer />
    <script src={sitePath("/reader-learning.js")} defer />
    <script src={sitePath("/perfect-mirsky.js")} type="module" defer />
  </>;
}
