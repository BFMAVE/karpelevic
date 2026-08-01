import type { Metadata } from "next";
import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { ProofSourceShelf } from "../../components/proof/ProofSourceShelf";
import {
  TopicIVChapter,
  topicIVSourceIds,
} from "../../data/proof-topics/topic-iv";
import { getPageTimestamp } from "../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic IV — From Endpoint Order to Contact Reduction",
  description:
    "A complete, illustrated account of global one-sided contact selection, exact contact surgery, legal chip sequences, and reduction to one strict block.",
};

const updatedAt = getPageTimestamp("app/data/proof-topics/topic-iv.tsx");

export default function TopicIVPage() {
  return (
    <ProofChapterShell
      routeKey="topic-iv"
      updatedAt={updatedAt}
      overview={[
        "The cap bound from Topic III and a finite endpoint ledger select one consistent half-open orientation. Cyclic order turns the global contact assignment into a single shift κ, while lifted angles record that shift without hidden multiples of 2π.",
        "An exact corner surgery then realizes one legal Boolean move, and finite induction realizes every legal sweep. A lexicographically minimal reachable contact pattern reduces to one strict block. Karpelevič is cited as a historical antecedent where relevant, but an occurrence there alone is not treated as proof that the exact result was previously established.",
      ]}
      stats={[
        { value: 5, label: "selection results" },
        { value: 5, label: "mutation results" },
      ]}
    >
      <TopicIVChapter />
      <ProofSourceShelf sourceIds={topicIVSourceIds} headingId="topic-iv-sources" />
    </ProofChapterShell>
  );
}
