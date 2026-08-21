import type { Metadata } from "next";
import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { TopicXChapter } from "../../data/proof-topics/topics-viii-xi";
import { publicationDates } from "../../data/publication-dates";
import { getPageTimestamp } from "../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic X — The Sharp Radial Upper Bound",
  description:
    "A complete, illustrated Jensen comparison for a strictly convex log-sine function, yielding the radial upper bound against Topic IX’s unique radius.",
};

const updatedAt = getPageTimestamp("app/data/proof-topics/topics-viii-xi.tsx");
const firstPublishedAt = publicationDates.pages.topicX;

export default function TopicXPage() {
  return (
    <ProofChapterShell
      firstPublishedAt={firstPublishedAt}
      routeKey="topic-x"
      manuscriptPages="86–90"
      overview={[
        "For a radial boundary point that first appears at order N≥4, Part I supplies a finite product equation, the phase equation eϑ+Σuⱼ=2π(r−dp), and the bounds uⱼ∈[A,M). Complex conjugation transfers these data between the two possible orientations without changing the modulus or Farey denominators.",
        "Jensen’s inequality for the strictly convex function F(u)=log sin M−log sin(M−u) gives ρ≤ρ*, where ρ* is the unique radius defined by Topic IX’s scalar equation. This page proves only that upper bound; Topic XI independently constructs a stochastic matrix attaining ρ* and then obtains equality.",
      ]}
      updatedAt={updatedAt}
      stats={[{ value: 3, label: "results" }]}
    >
      <TopicXChapter />
    </ProofChapterShell>
  );
}
