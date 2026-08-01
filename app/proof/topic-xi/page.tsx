import type { Metadata } from "next";
import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { TopicXIChapter } from "../../data/proof-topics/topics-viii-xi";
import { getPageTimestamp } from "../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic XI — Explicit Stochastic Realizers and Attainment",
  description:
    "A complete, illustrated construction of sparse stochastic realizers from cycle covers, followed by attainment and the deferred equality profile.",
};

const updatedAt = getPageTimestamp("app/data/proof-topics/topics-viii-xi.tsx");

export default function TopicXIPage() {
  return (
    <ProofChapterShell
      routeKey="topic-xi"
      manuscriptPages="76–79"
      overview={[
        "A sparse directed block graph turns the reduced Ito polynomial into the characteristic polynomial of a row-stochastic matrix. The proof derives its cycle-cover signs and audits every possible directed cycle.",
        "This independently realizes every scalar candidate. Only after that reverse inclusion is established does the chapter combine it with Topic X and activate the strict Jensen equality condition.",
      ]}
      updatedAt={updatedAt}
      stats={[{ value: 5, label: "results" }]}
    >
      <TopicXIChapter />
    </ProofChapterShell>
  );
}
