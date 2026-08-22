import type { Metadata } from "next";
import { ProofChapterShell } from "../../../components/proof/ProofChapterShell";
import { TopicXIIAContent } from "../../../data/proof-topics/topic-xii";
import { publicationDates } from "../../../data/publication-dates";
import { getPageTimestamp } from "../../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic XII-A — Two Farey-Refinement Comparisons",
  description:
    "Complete proofs of the two strict comparisons used when a Farey mediant is inserted or the factor count increases.",
};

const updatedAt = getPageTimestamp("app/data/proof-topics/topic-xii.tsx");
const firstPublishedAt = publicationDates.pages.topicXII;

export default function TopicXIIAPage() {
  return (
    <ProofChapterShell
      routeKey="topic-xii-a"
      updatedAt={updatedAt}
      firstPublishedAt={firstPublishedAt}
      manuscriptPages="94–100"
      stats={[
        { value: 2, label: "lemmas" },
        { value: 2, label: "comparison cases" },
      ]}
    >
      <TopicXIIAContent />
    </ProofChapterShell>
  );
}
