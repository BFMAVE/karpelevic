import type { Metadata } from "next";
import { ProofChapterShell } from "../../../components/proof/ProofChapterShell";
import { TopicXIIAContent } from "../../../data/proof-topics/topic-xii";
import { getPageTimestamp } from "../../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic XII-A — Local Farey Refinement",
  description:
    "A complete annotated proof of the mediant-chord and multiplicity-padding mechanisms behind candidate nesting.",
};

const updatedAt = getPageTimestamp("app/data/proof-topics/topic-xii.tsx");

export default function TopicXIIAPage() {
  return (
    <ProofChapterShell
      routeKey="topic-xii-a"
      updatedAt={updatedAt}
      manuscriptPages="93–98"
      stats={[
        { value: 2, label: "lemmas" },
        { value: 2, label: "refinement mechanisms" },
      ]}
    >
      <TopicXIIAContent />
    </ProofChapterShell>
  );
}
