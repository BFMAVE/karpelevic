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
    "A complete, illustrated account of assigning boundary contacts to half-open sides, invariant edge clipping, Hausdorff compactness, and the least-area boundary-arc bound.",
};

const updatedAt = getPageTimestamp("app/data/proof-topics/topic-iii.tsx");

export default function TopicIIIPage() {
  return (
    <ProofChapterShell
      routeKey="topic-iii"
      updatedAt={updatedAt}
      overview={[
        "A contact in the relative interior of a side belongs to only that side, but a polygon vertex belongs to two closed sides. Replacing each closed side [xᵢ₋₁,xᵢ] by the half-open side (xᵢ₋₁,xᵢ] assigns every boundary point to exactly one side. Definition 4.2 and Lemmas 4.3–4.7 develop this convention and the local vertex replacement used in Topic IV.",
        "The second strand begins with clipping along an edge of the image polygon. Clipping preserves invariance and bounds the number of vertices of the clipped polygon. Compactness of the normalized class and continuity of area yield a least-area member; strict area monotonicity is then used to rule out proper normalized cuts and prove the boundary-arc bound.",
      ]}
      stats={[
        { value: 1, label: "definition" },
        { value: 9, label: "results" },
      ]}
    >
      <TopicIIIChapter />
      <ProofSourceShelf
        sourceIds={topicIIISourceIds}
        headingId="topic-iii-sources"
        heading="References for Topic III"
      />
    </ProofChapterShell>
  );
}
