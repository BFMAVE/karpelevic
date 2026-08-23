import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { publicationDates } from "../../data/publication-dates";
import { TopicXIVContent } from "../../data/proof-topics/topic-xiv";
import { getPageTimestamp } from "../../lib/git-dates";
import { createPageMetadata } from "../../lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Topic XIV — The Complete Order-Seven Example",
  description:
    "A complete order-seven Farey table, the computation at x=3/8, reproducible source code, and an interactive numerical boundary plot.",
  pathname: "/proof/topic-xiv/",
});

const updatedAt = getPageTimestamp([
  "app/proof/topic-xiv/page.tsx",
  "app/data/proof-topics/topic-xiv.tsx",
  "app/data/part-ii-content.generated.ts",
  "app/components/proof/ProofChapterShell.tsx",
  "app/components/proof/BoundaryExplorer.tsx",
  "app/components/proof/OrderSevenBoundaryFigure.tsx",
  "app/lib/karpelevic-boundary-core.js",
  "app/lib/theta-region.ts",
  "public/code/karpelevic-boundary.mjs",
  "public/code/karpelevic-boundary.js",
  "public/code/karpelevic-boundary.test.mjs",
]);

export default function TopicXIVPage() {
  return (
    <ProofChapterShell
      completionMessage="Worked example, source, tests, and numerical plot complete"
      firstPublishedAt={publicationDates.pages.topicXIV}
      routeKey="topic-xiv"
      showReadingControls={false}
      updatedAt={updatedAt}
      stats={[
        { value: 9, label: "Farey intervals" },
        { value: 1, label: "worked value" },
        { value: 1, label: "interactive plot" },
      ]}
    >
      <TopicXIVContent />
    </ProofChapterShell>
  );
}
