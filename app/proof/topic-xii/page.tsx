import type { Metadata } from "next";
import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { TopicXIIContent } from "../../data/proof-topics/topic-xii";
import { publicationDates } from "../../data/publication-dates";
import { getPageTimestamp } from "../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic XII — Farey Refinement and Monotonicity of the Candidate Radius",
  description:
    "A continuous proof that the candidate radius K_n(theta) is nondecreasing with the matrix size n, including both strict local comparisons and the exhaustive Farey case split.",
};

const updatedAt = getPageTimestamp("app/data/proof-topics/topic-xii.tsx");
const firstPublishedAt = publicationDates.pages.topicXII;

export default function TopicXIIPage() {
  return (
    <ProofChapterShell
      routeKey="topic-xii"
      updatedAt={updatedAt}
      firstPublishedAt={firstPublishedAt}
      manuscriptPages="94–102"
      stats={[
        { value: 3, label: "lemmas" },
        { value: 1, label: "theorem" },
        { value: 4, label: "exhaustive cases" },
      ]}
    >
      <TopicXIIContent />
    </ProofChapterShell>
  );
}
