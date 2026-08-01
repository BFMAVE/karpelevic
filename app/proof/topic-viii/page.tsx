import type { Metadata } from "next";
import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { TopicVIIIChapter } from "../../data/proof-topics/topics-viii-xi";
import { getPageTimestamp } from "../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic VIII — Returning to Stochastic Spectra",
  description:
    "A complete, illustrated account of stochastic eigenvalue regions, invariant polygons, radial filling, and new-shell polygonal criticality.",
};

const updatedAt = getPageTimestamp("app/data/proof-topics/topics-viii-xi.tsx");

export default function TopicVIIIPage() {
  return (
    <ProofChapterShell
      routeKey="topic-viii"
      manuscriptPages="71–73"
      overview={[
        "This topic reattaches the intrinsic polygon geometry to row-stochastic matrices. It proves both directions of the invariant-polygon criterion rather than treating the dictionary as a heuristic.",
        "Compactness, radial filling, and the unit-circle classification make radial extrema precise. A genuinely new order-N shell is then shown to satisfy exactly the N-critical hypothesis required by Part I.",
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
