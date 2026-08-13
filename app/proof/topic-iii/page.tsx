import type { Metadata } from "next";
import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { ProofSourceShelf } from "../../components/proof/ProofSourceShelf";
import {
  TopicIIIChapter,
  topicIIISourceIds,
} from "../../data/proof-topics/topic-iii";
import { getPageTimestamp } from "../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic III — Half-Open Boundary Assignments and Edge Clipping",
  description:
    "A complete, illustrated account of assigning boundary contacts to half-open sides, invariant edge clipping, Hausdorff compactness, and the least-area cap bound.",
};

const updatedAt = getPageTimestamp("app/data/proof-topics/topic-iii.tsx");

export default function TopicIIIPage() {
  return (
    <ProofChapterShell
      routeKey="topic-iii"
      updatedAt={updatedAt}
      overview={[
        "A contact in the relative interior of a side belongs to only that side, but a polygon vertex belongs to two closed sides. Replacing each closed side [xᵢ₋₁,xᵢ] by the half-open side (xᵢ₋₁,xᵢ] assigns every boundary point to exactly one side. Lemma 4.3 proves this directly.",
        "Clipping along an edge of the image polygon preserves invariance and gives an explicit upper bound for the number of remaining vertices. Hausdorff compactness and strict area monotonicity then produce a least-area normalized polygon whose removable caps satisfy the bound proved on this page.",
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
