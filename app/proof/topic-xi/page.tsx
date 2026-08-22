import type { Metadata } from "next";
import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { TopicXIChapter } from "../../data/proof-topics/topics-viii-xi";
import { publicationDates } from "../../data/publication-dates";
import { getPageTimestamp } from "../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic XI — Explicit Stochastic Realization of the Candidate Curve",
  description:
    "An explicit sparse stochastic-matrix construction, an exact directed-cycle expansion of its characteristic polynomial, and the resulting attainment theorem.",
};

const updatedAt = getPageTimestamp("app/data/proof-topics/topics-viii-xi.tsx");
const firstPublishedAt = publicationDates.pages.topicXI;

export default function TopicXIPage() {
  return (
    <ProofChapterShell
      firstPublishedAt={firstPublishedAt}
      routeKey="topic-xi"
      manuscriptPages="90–93"
      overview={[
        "A sparse realization graph turns the reduced Ito polynomial into the characteristic polynomial of a row-stochastic matrix. The proof derives the determinant expansion over pairwise vertex-disjoint directed cycles and classifies every directed cycle in the graph.",
        "This independently realizes every point on the Topic IX candidate curve. Only after that reverse inclusion is established does the chapter combine it with Topic X and activate the strict Jensen equality condition.",
      ]}
      updatedAt={updatedAt}
      stats={[{ value: 5, label: "results" }]}
    >
      <TopicXIChapter />
    </ProofChapterShell>
  );
}
