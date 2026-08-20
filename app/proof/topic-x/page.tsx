import type { Metadata } from "next";
import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { TopicXChapter } from "../../data/proof-topics/topics-viii-xi";
import { getPageTimestamp } from "../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic X — The Sharp Radial Upper Bound",
  description:
    "A complete, illustrated derivation of the varying-parameter log-sine inequality and the resulting upper comparison with the scalar Farey–Ito candidate.",
};

const updatedAt = getPageTimestamp("app/data/proof-topics/topics-viii-xi.tsx");

export default function TopicXPage() {
  return (
    <ProofChapterShell
      routeKey="topic-x"
      manuscriptPages="73–76"
      overview={[
        "For a non-inherited radial maximum with N≥4, Part I supplies a finite product with varying parameters, the equality eϑ+Σuⱼ=2π(r−dp), and the bounds uⱼ∈[A,M). Reflection formulas make those data independent of which adapted complex orientation was selected.",
        "A strictly convex log-sine potential proves that every varying parameter list lies radially inside the constant-parameter case. This page proves only that upper comparison; stochastic attainment and the final equality conclusion are deliberately deferred to Topic XI.",
      ]}
      updatedAt={updatedAt}
      stats={[{ value: 3, label: "results" }]}
    >
      <TopicXChapter />
    </ProofChapterShell>
  );
}
