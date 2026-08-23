import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { TopicXIChapter } from "../../data/proof-topics/topics-viii-xi";
import { publicationDates } from "../../data/publication-dates";
import { getPageTimestamp } from "../../lib/git-dates";
import { createPageMetadata } from "../../lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Topic XI — Explicit Stochastic Realization of the Candidate Curve",
  description:
    "An explicit sparse stochastic-matrix construction, an exact directed-cycle expansion of its characteristic polynomial, and the resulting attainment theorem.",
  pathname: "/proof/topic-xi/",
});

const updatedAt = getPageTimestamp([
  "app/proof/topic-xi/page.tsx",
  "app/data/proof-topics/topics-viii-xi.tsx",
  "app/data/topics-viii-xi-reader.tsx",
  "app/data/part-ii-content.generated.ts",
  "app/data/topics-viii-xi-proofs.generated.ts",
  "app/components/proof/ProofChapterShell.tsx",
  "app/components/proof/ProofChapterReadingControls.tsx",
  "public/proof-chapter.js",
]);
const firstPublishedAt = publicationDates.pages.topicXI;

export default function TopicXIPage() {
  return (
    <ProofChapterShell
      firstPublishedAt={firstPublishedAt}
      routeKey="topic-xi"
      manuscriptPages="91–93"
      overview={[
        "An explicit sparse row-stochastic matrix is defined by a weighted digraph. The proof derives its characteristic polynomial from pairwise vertex-disjoint directed cycles and shows that it is the reduced Ito polynomial.",
        "For every Farey interval in Topic IX, this independently proves that the complete candidate curve lies in the corresponding Karpelevič region. The chapter then combines this inclusion with Topic X and applies the equality condition in Jensen’s inequality.",
      ]}
      updatedAt={updatedAt}
      stats={[{ value: 5, label: "results" }]}
    >
      <TopicXIChapter />
    </ProofChapterShell>
  );
}
