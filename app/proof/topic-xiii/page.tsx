import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { publicationDates } from "../../data/publication-dates";
import { TopicXIIIContent } from "../../data/proof-topics/topic-xiii";
import { getPageTimestamp } from "../../lib/git-dates";
import { createPageMetadata } from "../../lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Topic XIII — The Karpelevič Theorem in Ito’s Formulation",
  description:
    "A complete annotated proof assembling the Topic IX candidate curve, the sharp bound, realization, nesting, and topology into the classical stochastic eigenvalue-region theorem.",
  pathname: "/proof/topic-xiii/",
});

const updatedAt = getPageTimestamp([
  "app/proof/topic-xiii/page.tsx",
  "app/data/proof-topics/topic-xiii.tsx",
  "app/data/part-ii-content.generated.ts",
  "app/components/proof/ProofChapterShell.tsx",
  "app/components/proof/ProofChapterReadingControls.tsx",
  "app/components/proof/figures/CompletionFigures.tsx",
  "public/proof-chapter.js",
]);

export default function TopicXIIIPage() {
  return (
    <ProofChapterShell
      firstPublishedAt={publicationDates.pages.topicXIII}
      routeKey="topic-xiii"
      updatedAt={updatedAt}
      stats={[
        { value: 1, label: "topological lemma" },
        { value: 1, label: "base-case proposition" },
        { value: 1, label: "classical theorem" },
      ]}
    >
      <TopicXIIIContent />
    </ProofChapterShell>
  );
}
