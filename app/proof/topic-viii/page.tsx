import type { Metadata } from "next";
import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { TopicVIIIChapter } from "../../data/proof-topics/topics-viii-xi";
import { publicationDates } from "../../data/publication-dates";
import { getPageTimestamp } from "../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic VIII — Returning to Stochastic Eigenvalue Regions",
  description:
    "A complete, illustrated account of stochastic eigenvalue regions, invariant polytopes, star-shapedness, and the N-criticality of non-inherited radial maxima.",
};

const updatedAt = getPageTimestamp("app/data/proof-topics/topics-viii-xi.tsx");
const firstPublishedAt = publicationDates.pages.topicVIII;

export default function TopicVIIIPage() {
  return (
    <ProofChapterShell
      firstPublishedAt={firstPublishedAt}
      routeKey="topic-viii"
      manuscriptPages="80–83"
      overview={[
        "Topic VII proved the closed-return product theorem conditionally for an N-critical planar map. Topic VIII now returns to row-stochastic matrices and verifies that the relevant radial boundary points satisfy that hypothesis.",
        "Compactness, star-shapedness with respect to the origin, and the unit-circle classification make the radial function precise. For N≥4, a non-inherited radial maximum gives νpoly(Tλ)=N and νpoly(tTλ)>N for every t>1; in the manuscript’s terminology, Tλ is N-critical. Orders one, two, and three are reserved for the direct proof in Topic XIII.",
      ]}
      readingConvention={
        <>
          The page first proves the stochastic eigenvalue-region facts that
          justify the radial function. It then restates the manuscript terms
          <i> polygonal complexity</i>, <i>N</i>-critical, and
          <i> elliptic contraction</i> with their literal formulas before the
          final proposition uses them. Complete manuscript proofs remain
          closed by default.
        </>
      }
      updatedAt={updatedAt}
      stats={[
        { value: 1, label: "definition" },
        { value: 6, label: "results" },
      ]}
    >
      <TopicVIIIChapter />
    </ProofChapterShell>
  );
}
