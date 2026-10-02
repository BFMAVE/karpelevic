import { Fragment } from "react";
import { ProofChapterShell } from "./ProofChapterShell";
import { BoundaryExplorer } from "./BoundaryExplorer";
import { ReaderTopicOrientation } from "./ReaderTopicOrientation";
import { ReaderEarlyFigure } from "./ReaderEarlyFigures";
import { ReaderLateFigure } from "./ReaderLateFigures";
import { ReaderEarlyExtra } from "./ReaderEarlyExtras";
import { ReaderLateExtra } from "./ReaderLateExtras";
import { ReaderFigureFrame } from "./ReaderFigureFrame";
import { ReaderNotation } from "./ReaderNotation";
import { readerTopics } from "../../data/reader-topics";
import reader from "../../data/reader.generated.json";
import { publicationDates } from "../../data/publication-dates";
import { createPageMetadata } from "../../lib/site-metadata";
import { sitePath } from "../../lib/site-path";
import { getPageTimestamp } from "../../lib/git-dates";

const numerals = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii", "xiv"];
export function readerMetadata(number: number) {
  const topic = readerTopics[number - 1];
  return createPageMetadata({ title: "Topic " + numerals[number - 1].toUpperCase() + " — " + topic.title, description: topic.question, pathname: number === 1 ? "/proof/" : "/proof/topic-" + numerals[number - 1] + "/" });
}

function GuidedChapter({ number, html }: { number: number; html: string }) {
  const parts = html.replace(/href="(\/(?!\/)[^"]*)"/g, (_, href: string) => 'href="' + sitePath(href) + '"').split(/<!-- reader-figure:(early|late|early-extra|late-extra) -->\s*/);
  return <div className="reader-guide proof-guided-layer">
    {parts.map((part, index) => index % 2 === 0
      ? <div key={index} dangerouslySetInnerHTML={{ __html: part }} />
      : <Fragment key={index}><ReaderFigureFrame>{part === "early" ? <ReaderEarlyFigure number={number} />
        : part === "late" ? <ReaderLateFigure number={number} />
        : part === "early-extra" ? <ReaderEarlyExtra number={number} />
        : <ReaderLateExtra number={number} />}</ReaderFigureFrame></Fragment>)}
  </div>;
}

export function CurrentProofChapter({ number }: { number: number }) {
  const topic = readerTopics[number - 1];
  const chapter = reader.chapters[number - 1];
  const firstPublished = Object.values(publicationDates.pages).slice(4)[number - 1];
  const sourceHtml = chapter.sourceHtml.replace(/href="(\/proof\/[^\"]*)"/g, (_, href: string) => 'href="' + sitePath(href) + '"');
  const sections: { id: string; title: string; children: { id: string; title: string }[] }[] = [];
  for (const match of chapter.guideHtml.matchAll(/<h([34]) id="([^"]+)">([\s\S]*?)<\/h\1>/g)) {
    const section = {
      id: match[2],
      title: match[3].replace(/<annotation\b[\s\S]*?<\/annotation>/g, "").replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"'),
    };
    if (match[1] === "4" && sections.length) sections[sections.length - 1].children.push(section);
    else sections.push({ ...section, children: [] });
  }
  const revised = getPageTimestamp([
    "content/topics/topic-" + number + ".md",
    "content/paper/karpelevic-invariant-polygons.tex",
    "app/components/proof/CurrentProofChapter.tsx",
    "app/components/proof/ProofChapterShell.tsx",
    "app/components/proof/ReaderTopicOrientation.tsx",
    "app/components/proof/ReaderNotation.tsx",
    "app/data/reader-notation.json",
    "app/data/reader-notation.generated.json",
    "app/data/reader-notation.ts",
    "app/components/proof/ReaderFigureFrame.tsx",
    "app/components/proof/ReaderFigureCaption.tsx",
    "public/reader-learning.js",
    number <= 7 ? "app/data/reader-orientation-early.ts" : "app/data/reader-orientation-late.ts",
    number <= 7 ? "app/components/proof/ReaderEarlyFigures.tsx" : "app/components/proof/ReaderLateFigures.tsx",
    number <= 7 ? "app/components/proof/ReaderEarlyExtras.tsx" : "app/components/proof/ReaderLateExtras.tsx",
    "public/proof-chapter.js",
    ...(number === 14 ? ["app/components/proof/EightStateLinks.tsx", "public/eight-state-links.js"] : []),
    "app/globals.css",
  ]);
  return <ProofChapterShell routeKey={"topic-" + numerals[number - 1]} updatedAt={revised} firstPublishedAt={firstPublished} question={topic.question} manuscriptPages={topic.source} completionMessage={topic.takeaway} chapterSections={sections}>
    <ReaderTopicOrientation number={number} />
    <ReaderNotation number={number} />
    <GuidedChapter number={number} html={chapter.guideHtml} />
    <section className="reader-formal" id="source-argument" aria-labelledby="source-argument-heading">
      <p className="section-label">Check the mathematics</p>
      <h2 id="source-argument-heading">The source statements and proofs</h2>
      <p>The guided explanation above develops the ideas. Here you can read the complete source passage, with individual proofs to open as needed and links to the results used in other topics.</p>
      <aside className="reader-source-note">
        <p>This reader follows <em>A proof of the Karpelevič theorem via invariant polygons</em>, the teaching manuscript supplied by the author. The current preprint is <a href="https://arxiv.org/abs/2609.26058v2"><em>A structural proof of the Karpelevič theorem</em>, arXiv v2</a> (23 September 2026). <a href={sitePath("/paper/teaching-manuscript.pdf")}>Read the teaching manuscript PDF</a> for its original drawings and layout.</p>
      </aside>
      <details className="proof-chapter-proof reader-source-proof" data-complete-proof>
        <summary>Read the source argument for Topic {numerals[number - 1].toUpperCase()}</summary>
        <div className="part-i-manuscript reader-source-text" dangerouslySetInnerHTML={{ __html: sourceHtml }} />
      </details>
    </section>
    {number === 14 ? <><BoundaryExplorer /><p className="reader-guide"><a href={sitePath("/code/karpelevic-boundary.mjs")} download>Download the boundary computation module</a> · <a href={sitePath("/code/karpelevic-boundary.test.mjs")} download>Download its numerical checks</a></p></> : null}
  </ProofChapterShell>;
}
