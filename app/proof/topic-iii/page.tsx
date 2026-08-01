import type { Metadata } from "next";
import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { ProofSourceShelf } from "../../components/proof/ProofSourceShelf";
import {
  TopicIIIChapter,
  topicIIISourceIds,
} from "../../data/proof-topics/topic-iii";
import { getPageTimestamp } from "../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic III — Building One-Sided Ownership",
  description:
    "A complete, illustrated account of half-open contact ownership, invariant edge-cap clipping, Hausdorff compactness, and the area-minimal cap bound.",
};

const updatedAt = getPageTimestamp("app/data/proof-topics/topic-iii.tsx");

export default function TopicIIIPage() {
  return (
    <ProofChapterShell
      routeKey="topic-iii"
      updatedAt={updatedAt}
      overview={[
        "A contact in the relative interior of a side has an obvious address, but a polygon vertex belongs to two closed sides. The right-half-open convention removes that ambiguity, and the determinant atlas proves that it does so without overlap.",
        "Exact edge clipping then preserves invariance while making the vertex count visible. Hausdorff compactness and strict area monotonicity produce a least-area representative whose image-edge caps obey the sharp local bound proved on this page.",
      ]}
      stats={[
        { value: 1, label: "definition" },
        { value: 9, label: "results" },
      ]}
    >
      <TopicIIIChapter />
      <ProofSourceShelf sourceIds={topicIIISourceIds} headingId="topic-iii-sources" />
    </ProofChapterShell>
  );
}
