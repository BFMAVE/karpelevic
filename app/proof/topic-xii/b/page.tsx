import type { Metadata } from "next";
import { ProofChapterShell } from "../../../components/proof/ProofChapterShell";
import { TopicXIIBContent } from "../../../data/proof-topics/topic-xii";
import { publicationDates } from "../../../data/publication-dates";
import { getPageTimestamp } from "../../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic XII-B — Monotonicity of the Candidate Radius",
  description:
    "A complete proof that K_n(theta) is nondecreasing as the matrix size n increases, on every ray.",
};

const updatedAt = getPageTimestamp("app/data/proof-topics/topic-xii.tsx");
const firstPublishedAt = publicationDates.pages.topicXII;

export default function TopicXIIBPage() {
  return (
    <ProofChapterShell
      routeKey="topic-xii-b"
      updatedAt={updatedAt}
      firstPublishedAt={firstPublishedAt}
      manuscriptPages="100–101"
      stats={[
        { value: 1, label: "lemma" },
        { value: 1, label: "theorem" },
        { value: 4, label: "exhaustive cases" },
      ]}
    >
      <TopicXIIBContent />
    </ProofChapterShell>
  );
}
