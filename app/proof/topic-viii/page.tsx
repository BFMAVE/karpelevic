import type { Metadata } from "next";
import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { TopicVIIIChapter } from "../../data/proof-topics/topics-viii-xi";
import { getPageTimestamp } from "../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic VIII — Returning to Stochastic Spectra",
  description:
    "A complete, illustrated account of stochastic eigenvalue regions, invariant polygons, star-shapedness, and polygonal criticality at non-inherited radial maxima.",
};

const updatedAt = getPageTimestamp("app/data/proof-topics/topics-viii-xi.tsx");

export default function TopicVIIIPage() {
  return (
    <ProofChapterShell
      routeKey="topic-viii"
      manuscriptPages="71–73"
      overview={[
        "This topic reattaches the intrinsic polygon geometry to row-stochastic matrices. It proves both directions of the invariant-polygon criterion as an exact equivalence.",
        "Compactness, star-shapedness with respect to the origin, and the unit-circle classification make radial extrema precise. For N≥4, a radial maximum not inherited from order N−1 is shown to satisfy exactly the N-critical hypothesis required by Part I; orders one, two, and three are reserved for the direct proof in Topic XIII.",
      ]}
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
