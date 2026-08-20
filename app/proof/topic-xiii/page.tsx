import type { Metadata } from "next";
import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { TopicXIIIContent } from "../../data/proof-topics/topic-xiii";
import { getPageTimestamp } from "../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic XIII — The Karpelevič–Ito Theorem",
  description:
    "A complete annotated proof assembling the Topic IX candidate curve, the sharp bound, realization, nesting, and topology into the classical stochastic eigenvalue-region theorem.",
};

const updatedAt = getPageTimestamp("app/data/proof-topics/topic-xiii.tsx");

export default function TopicXIIIPage() {
  return (
    <ProofChapterShell
      routeKey="topic-xiii"
      updatedAt={updatedAt}
      stats={[
        { value: 1, label: "topological lemma" },
        { value: 1, label: "base-case proposition" },
        { value: 1, label: "classical theorem" },
      ]}
    >
      <TopicXIIIContent />
    </ProofChapterShell>
  );
}
