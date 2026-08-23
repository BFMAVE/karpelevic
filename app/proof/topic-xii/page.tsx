import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { TopicXIIContent } from "../../data/proof-topics/topic-xii";
import { publicationDates } from "../../data/publication-dates";
import { getPageTimestamp } from "../../lib/git-dates";
import { createPageMetadata } from "../../lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Topic XII — Farey Refinement and Monotonicity of the Candidate Radius",
  description:
    "A continuous proof that the candidate radius K_n(theta) is nondecreasing with the matrix size n, including both strict local comparisons and the exhaustive Farey case split.",
  pathname: "/proof/topic-xii/",
});

const updatedAt = getPageTimestamp([
  "app/proof/topic-xii/page.tsx",
  "app/data/proof-topics/topic-xii.tsx",
  "app/data/part-ii-content.generated.ts",
  "app/components/proof/ProofChapterShell.tsx",
  "app/components/proof/ProofChapterReadingControls.tsx",
  "public/proof-chapter.js",
]);
const firstPublishedAt = publicationDates.pages.topicXII;

export default function TopicXIIPage() {
  return (
    <ProofChapterShell
      routeKey="topic-xii"
      updatedAt={updatedAt}
      firstPublishedAt={firstPublishedAt}
      manuscriptPages="94–102"
      stats={[
        { value: 3, label: "lemmas" },
        { value: 1, label: "theorem" },
        { value: 4, label: "exhaustive cases" },
      ]}
    >
      <TopicXIIContent />
    </ProofChapterShell>
  );
}
