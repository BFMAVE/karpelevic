import type { Metadata } from "next";
import { ProofTopicFigure } from "../../components/ProofTopicFigure";
import { TopicIIChapter } from "../../components/TopicIIChapter";
import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { ProofSourceShelf } from "../../components/proof/ProofSourceShelf";
import { getProofItems, proofTopics } from "../../data/proof";
import { publicationDates } from "../../data/publication-dates";
import { getPageTimestamp } from "../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic II — Support Inequalities and Boundary Contact",
  description:
    "A complete, annotated account of determinant criteria for convex position, the fixed-normal-fan support criterion, and contact on every side and at every image vertex.",
};

const topic = proofTopics[1];
const items = getProofItems(topic.itemNumbers);
const sourceIds = items.flatMap((item) => item.sourceIds);
const updatedAt = getPageTimestamp("app/data/topic-ii-result-guide.ts");
const firstPublishedAt = publicationDates.pages.topicII;

export default function TopicIIPage() {
  return (
    <ProofChapterShell
      firstPublishedAt={firstPublishedAt}
      routeKey="topic-ii"
      updatedAt={updatedAt}
      stats={[
        { value: 7, label: "core results" },
        { value: 2, label: "foundational lemmas" },
        { value: 1, label: "remark" },
      ]}
    >
      <ProofTopicFigure slug="active-sides" />
      <TopicIIChapter />
      <ProofSourceShelf
        sourceIds={sourceIds}
        headingId="topic-ii-sources"
        heading="References and provenance"
      />
    </ProofChapterShell>
  );
}
