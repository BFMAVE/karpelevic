import { ProofChapterShell } from "./ProofChapterShell";
import { BoundaryExplorer } from "./BoundaryExplorer";
import { readerTopics } from "../../data/reader-topics";
import reader from "../../data/reader.generated.json";
import { publicationDates } from "../../data/publication-dates";
import { createPageMetadata } from "../../lib/site-metadata";
import { sitePath } from "../../lib/site-path";
import { getPageTimestamp } from "../../lib/git-dates";

const numerals = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii", "xiv"];
export function readerMetadata(number: number) {
  const topic = readerTopics[number - 1];
  return createPageMetadata({ title: `Topic ${numerals[number - 1].toUpperCase()} — ${topic.title}`, description: topic.question, pathname: number === 1 ? "/proof/" : `/proof/topic-${numerals[number - 1]}/` });
}

function ContactDiagram() {
  const points = Array.from({ length: 5 }, (_, i) => ({ x: 180 + 130 * Math.cos(-Math.PI / 2 + 2 * Math.PI * i / 5), y: 160 - 130 * Math.sin(-Math.PI / 2 + 2 * Math.PI * i / 5) }));
  const midpoints = points.map((p, i) => ({ x: (p.x + points[(i + 1) % 5].x) / 2, y: (p.y + points[(i + 1) % 5].y) / 2 }));
  const coordinates = (nodes: { x: number; y: number }[]) => nodes.map((p) => `${p.x},${p.y}`).join(" ");
  return <figure className="reader-diagram proof-guided-layer">
    <svg viewBox="0 0 360 320" role="img" aria-labelledby="contact-diagram-title contact-diagram-desc">
      <title id="contact-diagram-title">An invariant regular pentagon with midpoint contacts</title>
      <desc id="contact-diagram-desc">Multiplication by cos(pi/5) times exp(i pi/5) sends each vertex to the midpoint of its following side. The inner pentagon lies inside the original pentagon.</desc>
      <polygon points={coordinates(points)} fill="#f2f5f8" stroke="#18334a" strokeWidth="2" />
      <polygon points={coordinates(midpoints)} fill="#e6b9a433" stroke="#8c3429" strokeWidth="2" />
      {points.map((p, i) => <g key={i}><line x1={p.x} y1={p.y} x2={midpoints[i].x} y2={midpoints[i].y} stroke="#8c3429" strokeDasharray="4 3" /><circle cx={p.x} cy={p.y} r="4" fill="#18334a" /><circle cx={midpoints[i].x} cy={midpoints[i].y} r="4" fill="#8c3429" /></g>)}
      <circle cx="180" cy="160" r="3" fill="#18334a" /><text x="188" y="177">0</text>
    </svg>
    <figcaption>The exact midpoint model: λ = cos(π/5)e<sup>iπ/5</sup>. It illustrates invariance and side contact. It does not assert radial extremality among all pentagons.</figcaption>
  </figure>;
}

function ProjectionDiagram() {
  const pt = (x: number, y: number) => `${65 + 155 * x},${320 - 80 * y}`;
  const nodes: [string, number, number][] = [["X₀", 0, 0], ["X₁", 1, 0], ["X₂", 2, 1], ["X₃", 3, 3], ["C₂", 1.5, .5], ["C₃", 2.5, 2], ["Z₂", 12 / 7, 4 / 7], ["Π(X₀)", 33 / 14, 25 / 14]];
  return <figure className="reader-diagram reader-wide-diagram proof-guided-layer">
    <svg viewBox="0 0 650 370" role="img" aria-labelledby="projection-title projection-desc">
      <title id="projection-title">Two exact projection chains</title><desc id="projection-desc">The source&apos;s ell equals two model. The line from X zero through C two meets the exposing line at Z two. Projection from X three sends Z two to Pi of X zero on the line through C two and C three, strictly between those contacts.</desc>
      <polygon points={[pt(0, 0), pt(1, 0), pt(2, 1), pt(3, 3)].join(" ")} fill="#edf1f5" stroke="#18334a" strokeWidth="2" />
      <polyline points={[pt(0, 0), pt(12 / 7, 4 / 7), pt(3, 3)].join(" ")} fill="none" stroke="#315e86" strokeWidth="2" />
      <line x1={65 + 155 * 1.3} y1={320 + 80 * .05} x2={65 + 155 * 2.65} y2={320 - 80 * 1.975} stroke="#18334a" strokeDasharray="5 4" />
      <line x1={65 + 155 * 1.3} y1={320 - 80 * .2} x2={65 + 155 * 2.8} y2={320 - 80 * 2.45} stroke="#a24728" strokeWidth="2" />
      {nodes.map(([label, x, y], i) => <g key={label}><circle cx={65 + 155 * x} cy={320 - 80 * y} r="3" fill="#18334a" /><text x={65 + 155 * x + (i === 7 ? -95 : 7)} y={320 - 80 * y + (i === 6 ? 22 : -10)}>{label}</text></g>)}
      <text x="550" y="100">K</text><text x="465" y="180">L₂</text>
    </svg>
    <figcaption>Source Figure 1, redrawn from its exact coordinates. Here X₀=(0,0), X₁=(1,0), X₂=(2,1), X₃=(3,3); Z₂=(12/7,4/7), and Π(X₀)=(33/14,25/14). The two intersections make the projective transfer concrete.</figcaption>
  </figure>;
}

export function CurrentProofChapter({ number }: { number: number }) {
  const topic = readerTopics[number - 1];
  const chapter = reader.chapters[number - 1];
  const firstPublished = Object.values(publicationDates.pages).slice(4)[number - 1];
  const sourceHtml = chapter.sourceHtml.replace(/href="(\/proof\/[^\"]*)"/g, (_, href: string) => `href="${sitePath(href)}"`);
  const revised = getPageTimestamp([`content/topics/topic-${number}.md`, "content/paper/karpelevic-invariant-polygons.tex", "app/components/proof/CurrentProofChapter.tsx"]);
  return <ProofChapterShell routeKey={`topic-${numerals[number - 1]}`} updatedAt={revised} firstPublishedAt={firstPublished} question={topic.question} overview={[topic.takeaway, "Read the guided explanation first, then open the source argument to check every detail. Topic XII completes the boundary theorem; Topics XIII and XIV develop its consequences and examples."]} manuscriptPages={topic.source} completionMessage={topic.takeaway} readingConvention={<>The guided layer introduces the background as it is needed. The complete source passage is available below, with links to referenced results in other topics.</>} deck={<>A route from basic analysis and linear algebra through the complete geometric proof. Every topic has a fresh explanation, checked examples, and the source argument.</>}>
    <aside className="reader-source-note">
      <p>This reader follows the supplied manuscript, <em>A proof of the Karpelevič theorem via invariant polygons</em>. The current arXiv preprint is <a href="https://arxiv.org/abs/2609.26058v2"><em>A structural proof of the Karpelevič theorem</em>, v2</a>, revised 23 September 2026. The supplied manuscript expands its exposition; the mathematical route is the same.</p>
    </aside>
    <div className="reader-guide proof-guided-layer" dangerouslySetInnerHTML={{ __html: chapter.guideHtml }} />
    {number === 1 ? <ContactDiagram /> : null}
    {number === 6 ? <ProjectionDiagram /> : null}
    <section className="reader-formal">
      <h3>The complete source argument</h3>
      <p>{topic.source}. Definitions, hypotheses, proofs, and the original source references are retained. <a href={sitePath("/paper/teaching-manuscript.pdf")}>Open the supplied manuscript PDF</a> for its original drawings and layout.</p>
      <details className="proof-chapter-proof reader-source-proof" data-complete-proof>
        <summary><span>Complete argument</span>Open the source statements and proofs for Topic {numerals[number - 1].toUpperCase()}</summary>
        <div className="part-i-manuscript reader-source-text" dangerouslySetInnerHTML={{ __html: sourceHtml }} />
      </details>
    </section>
    {number === 14 ? <><BoundaryExplorer /><p className="reader-guide"><a href={sitePath("/code/karpelevic-boundary.mjs")} download>Download the boundary computation module</a> · <a href={sitePath("/code/karpelevic-boundary.test.mjs")} download>Download its numerical checks</a></p></> : null}
  </ProofChapterShell>;
}
