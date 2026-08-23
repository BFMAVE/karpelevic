import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { TopicVIIIChapter } from "../../data/proof-topics/topics-viii-xi";
import { publicationDates } from "../../data/publication-dates";
import { getPageTimestamp } from "../../lib/git-dates";
import { createPageMetadata } from "../../lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Topic VIII — Returning to Stochastic Eigenvalue Regions",
  description:
    "A complete, illustrated account of Karpelevič regions, invariant polytopes, star-shapedness, and the N-criticality of radial boundary points new at a given matrix order.",
  pathname: "/proof/topic-viii/",
});

const updatedAt = getPageTimestamp([
  "app/proof/topic-viii/page.tsx",
  "app/data/proof-topics/topics-viii-xi.tsx",
  "app/data/topics-viii-xi-reader.tsx",
  "app/data/part-ii-content.generated.ts",
  "app/data/topics-viii-xi-proofs.generated.ts",
  "app/components/proof/ProofChapterShell.tsx",
  "app/components/proof/ProofChapterReadingControls.tsx",
  "public/proof-chapter.js",
]);
const firstPublishedAt = publicationDates.pages.topicVIII;

export default function TopicVIIIPage() {
  return (
    <ProofChapterShell
      firstPublishedAt={firstPublishedAt}
      routeKey="topic-viii"
      manuscriptPages="83–86"
      overview={[
        "Topic VII proved Theorem 1.4's finite product equation conditionally for an N-critical planar map. Topic VIII now returns to row-stochastic matrices and verifies that the relevant radial boundary points satisfy that hypothesis.",
        "Compactness, star-shapedness with respect to the origin, and the unit-circle classification make the radial function of each Karpelevič region precise. For N≥4, a radial boundary point that first appears at order N yields an N-critical multiplication map. Orders one, two, and three are reserved for the direct proof in Topic XIII.",
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
        { value: 1, label: "numbered definition" },
        { value: 6, label: "numbered results" },
      ]}
    >
      <TopicVIIIChapter />
    </ProofChapterShell>
  );
}
