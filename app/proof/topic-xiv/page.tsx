import type { Metadata } from "next";
import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { TopicXIVContent } from "../../data/proof-topics/topic-xiv";
import { getPageTimestamp } from "../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic XIV — The Complete Order-Seven Example",
  description:
    "A complete order-seven Farey–Ito atlas, the worked ray x=3/8, reproducible source code, and an interactive boundary laboratory.",
};

const updatedAt = getPageTimestamp("app/data/proof-topics/topic-xiv.tsx");

export default function TopicXIVPage() {
  return (
    <ProofChapterShell
      routeKey="topic-xiv"
      updatedAt={updatedAt}
      stats={[
        { value: 9, label: "Farey cells" },
        { value: 1, label: "worked ray" },
        { value: 1, label: "interactive laboratory" },
      ]}
    >
      <TopicXIVContent />
    </ProofChapterShell>
  );
}
