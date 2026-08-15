import type { Metadata } from "next";
import { AdvancedProofChapter } from "../../../components/proof/AdvancedProofChapter";
import {
  topicVIABackground,
  topicVIAGroups,
  topicVIAImported,
  topicVIASourceIds,
} from "../../../data/topic-vi-a-reader";
import { getPageTimestamp } from "../../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic VI, Part A — The Local Projective Escape for N≥4",
  description:
    "For N≥4, a complete guided proof of convex-chain calibration, fixed-point escape for a projectivity, and the local projective escape theorem.",
};

const updatedAt = getPageTimestamp("app/data/topic-vi-a-reader.tsx");

export default function TopicVIALocalPage() {
  return (
    <AdvancedProofChapter
      background={topicVIABackground}
      groups={topicVIAGroups}
      imported={topicVIAImported}
      leadFigure="projective-corridor"
      manuscriptPages="41–45"
      overview={[
        "Under the standing assumption N≥4, an admissible projective chart turns the selected boundary arc into a convex graph with strictly increasing side slopes. Repeated sign comparisons calibrate the return point.",
        "The full chain of perspectivities becomes one fractional-linear map. A nearby signed starting point escapes its fixed point, and one determinant converts that scalar inequality into the desired interior half-plane condition.",
      ]}
      provedHere={
        <p>
          This page proves the convex-chain calibration, the elementary
          fixed-point escape lemma, and the local projective corridor escape
          theorem for the N≥4 projective construction. It deliberately stops
          before claiming global polygon invariance.
        </p>
      }
      question="For N≥4, why must a nonidentity return projectivity admit an arbitrarily small starting-point motion that opens the closing contact inward?"
      routeKey="topic-vi-a"
      sourceIds={topicVIASourceIds}
      stats={[
        { value: 1, label: "theorem" },
        { value: 2, label: "lemmas" },
        { value: 20, label: "guided proof steps" },
      ]}
      updatedAt={updatedAt}
    />
  );
}
