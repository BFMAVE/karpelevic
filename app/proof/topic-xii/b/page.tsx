import type { Metadata } from "next";
import { ProofChapterShell } from "../../../components/proof/ProofChapterShell";
import { TopicXIIBContent } from "../../../data/proof-topics/topic-xii";
import { getPageTimestamp } from "../../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic XII-B — Exhaustive Candidate Nesting",
  description:
    "A complete annotated proof that Farey–Ito candidate radii are nested as the stochastic-matrix order increases.",
};

const updatedAt = getPageTimestamp("app/data/proof-topics/topic-xii.tsx");

export default function TopicXIIBPage() {
  return (
    <ProofChapterShell
      routeKey="topic-xii-b"
      updatedAt={updatedAt}
      manuscriptPages="83–85"
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
