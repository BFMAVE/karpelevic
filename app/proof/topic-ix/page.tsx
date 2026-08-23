import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { TopicIXChapter } from "../../data/proof-topics/topics-viii-xi";
import { publicationDates } from "../../data/publication-dates";
import { getPageTimestamp } from "../../lib/git-dates";
import { createPageMetadata } from "../../lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Topic IX — Candidate Curves from the Ito Equation on Farey Intervals",
  description:
    "A complete, illustrated construction of the unique modulus at each prescribed argument between consecutive Farey fractions, including endpoint limits and the case n=3.",
  pathname: "/proof/topic-ix/",
});

const updatedAt = getPageTimestamp([
  "app/proof/topic-ix/page.tsx",
  "app/data/proof-topics/topics-viii-xi.tsx",
  "app/data/topics-viii-xi-reader.tsx",
  "app/data/part-ii-content.generated.ts",
  "app/data/topics-viii-xi-proofs.generated.ts",
  "app/components/proof/ProofChapterShell.tsx",
  "app/components/proof/ProofChapterReadingControls.tsx",
  "public/proof-chapter.js",
]);
const firstPublishedAt = publicationDates.pages.topicIX;

export default function TopicIXPage() {
  return (
    <ProofChapterShell
      firstPublishedAt={firstPublishedAt}
      routeKey="topic-ix"
      manuscriptPages="76–82"
      overview={[
        "Topic VIII defined the Karpelevič region Θₙ from row-stochastic matrices. Topic IX fixes two consecutive Farey fractions and, at each prescribed unit-circle argument between them, uses a strictly increasing real equation to determine one modulus and connect the resulting point to the reduced Ito polynomial.",
        "Endpoint limits and the additional segment [−1,−1/2] for n=3 are proved before these points are assembled into a compact candidate arc over the closed Farey interval. Stochastic realization and identification with the boundary of Θₙ are deliberately deferred.",
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
