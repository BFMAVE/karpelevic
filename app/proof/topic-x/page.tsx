import type { Metadata } from "next";
import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { TopicXChapter } from "../../data/proof-topics/topics-viii-xi";
import { publicationDates } from "../../data/publication-dates";
import { getPageTimestamp } from "../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic X — The Radial Upper Bound and Its Equality Case",
  description:
    "An illustrated Jensen comparison proving the radial upper bound for a new order-N boundary point and characterizing equality under the finite-product hypotheses.",
};

const updatedAt = getPageTimestamp("app/data/proof-topics/topics-viii-xi.tsx");
const firstPublishedAt = publicationDates.pages.topicX;

export default function TopicXPage() {
  return (
    <ProofChapterShell
      firstPublishedAt={firstPublishedAt}
      routeKey="topic-x"
      manuscriptPages="86–91"
      overview={[
        "For an upper-half-plane radial boundary point that first appears at order N≥4, Topics VII and VIII supply a finite product equation, a phase equation for chosen arguments of its factors, and bounds placing those arguments in one interval. Lower-half-plane points follow by complex conjugation.",
        "Topic X turns those identities into a Jensen comparison with the candidate radius constructed in Topic IX and characterizes equality under the finite-product hypotheses. Topic XI independently realizes the common-parameter case; Topic XII proves the pointwise monotonicity Kₙ₋₁(θ)≤Kₙ(θ) needed for inherited lower-order boundary points.",
      ]}
      updatedAt={updatedAt}
      stats={[{ value: 3, label: "results" }]}
    >
      <TopicXChapter />
    </ProofChapterShell>
  );
}
