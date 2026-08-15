import type { Metadata } from "next";
import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { TopicIXChapter } from "../../data/proof-topics/topics-viii-xi";
import { getPageTimestamp } from "../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic IX — Constructing the Farey–Ito Candidate Curves",
  description:
    "A complete, illustrated construction of the unique scalar candidate on each Farey cell, including endpoint limits and the order-three exception.",
};

const updatedAt = getPageTimestamp("app/data/proof-topics/topics-viii-xi.tsx");

export default function TopicIXPage() {
  return (
    <ProofChapterShell
      routeKey="topic-ix"
      manuscriptPages="67–70"
      overview={[
        "Consecutive Farey fractions determine one arithmetic cell. On each open ray in that cell, a strictly monotone scalar equation selects one radius and an explicitly anchored fractional-power branch connects it to the reduced Ito polynomial.",
        "Endpoint limits and the exceptional order-three real segment are proved before the candidate is packaged as a closed cellwise curve. No stochastic realization and no boundary theorem are assumed here.",
      ]}
      updatedAt={updatedAt}
      stats={[
        { value: 2, label: "definitions" },
        { value: 3, label: "results" },
        { value: 1, label: "algorithm" },
      ]}
    >
      <TopicIXChapter />
    </ProofChapterShell>
  );
}
