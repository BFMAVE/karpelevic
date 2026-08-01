import type { Metadata } from "next";
import { AdvancedProofChapter } from "../../components/proof/AdvancedProofChapter";
import {
  topicVBackground,
  topicVFormalSetups,
  topicVGroups,
  topicVImported,
  topicVSourceIds,
} from "../../data/topic-v-reader";
import { getPageTimestamp } from "../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic V — Rotation Arithmetic and the Projective Corridor",
  description:
    "A complete guided account of finite rotation records, lattice-sail return towers, the exact return-edge ledger, and the projective corridor.",
};

const updatedAt = getPageTimestamp("app/data/topic-v-reader.tsx");

export default function TopicVPage() {
  return (
    <AdvancedProofChapter
      background={topicVBackground}
      groups={topicVGroups}
      formalSetups={topicVFormalSetups}
      imported={topicVImported}
      leadFigure="rotation-records"
      manuscriptPages="31–40; Proposition 7.5 closes on 41; Lemma A.6 on 65"
      overview={[
        "The reduced strict-contact block is now studied as a finite rotation. Upper records become primitive lattice-sail vertices, and consecutive records produce a bijective two-height return section.",
        "The tower tops are then read as polygon contacts. A proper short boundary chain and an exhaustive four-set edge ledger leave exactly one closing incidence for the projective argument.",
      ]}
      provedHere={
        <p>
          The page proves the finite rotation return-section theorem,
          endpoint padding, strict and proper corridor support, the exact
          return-edge ledger, and the admissible projective chart. Lemma A.6
          supplies its complete lattice dependency.
        </p>
      }
      question="How does one reduced contact block determine both a lattice-sail return section and the exact boundary corridor needed for projective no-skipping?"
      routeKey="topic-v"
      sourceIds={topicVSourceIds}
      stats={[
        { value: 1, label: "theorem" },
        { value: 5, label: "lemmas and propositions" },
        { value: 1, label: "definition" },
        { value: 2, label: "corollary and remark" },
      ]}
      updatedAt={updatedAt}
    />
  );
}
