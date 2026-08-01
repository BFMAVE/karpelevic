import type { Metadata } from "next";
import { AdvancedProofChapter } from "../../../components/proof/AdvancedProofChapter";
import {
  topicVIBBackground,
  topicVIBGroups,
  topicVIBImported,
  topicVIBSourceIds,
} from "../../../data/topic-vi-b-reader";
import { getPageTimestamp } from "../../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic VI, Part B — Global Admissibility and Unit Return",
  description:
    "A complete guided proof that the local corridor motion extends to every polygon label and forces adjacent first return by hereditary saturation.",
};

const updatedAt = getPageTimestamp("app/data/topic-vi-b-reader.tsx");

export default function TopicVIBGlobalPage() {
  return (
    <AdvancedProofChapter
      background={topicVIBBackground}
      groups={topicVIBGroups}
      imported={topicVIBImported}
      leadFigure="unit-return"
      manuscriptPages="45–51"
      overview={[
        "The local motion is propagated through the bijective return towers to all N polygon vertices. Every internal image, top return, side line, and nonclosing side inequality receives one explicit mechanism.",
        "The sole closing return is opened inward. This creates an invariant replacement polygon with one interior image vertex, contradicting hereditary saturation and forcing the first-return step to equal one.",
      ]}
      provedHere={
        <p>
          This page proves global deformation admissibility, the
          return-corridor deformation, projective unit return, every boundary
          case, and the complete assembly of Theorem 1.3.
        </p>
      }
      question="How can a motion of one short corridor be transported to all N vertices without losing a single label, incidence, or side inequality?"
      routeKey="topic-vi-b"
      sourceIds={topicVIBSourceIds}
      stats={[
        { value: 3, label: "theorems" },
        { value: 1, label: "lemma" },
        { value: 2, label: "audit remarks" },
      ]}
      updatedAt={updatedAt}
    />
  );
}
