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
  title: "Topic V — Rotation Records, First-Return Towers, and Projective Preparation",
  description:
    "A complete guided account of finite rotation records, two-height first-return towers, the return-incidence partition, and the projective preparation used in Topic VI.",
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
        "The cyclic interval of relative-interior contact indices is now studied as a finite rotation. Consecutive record vectors produce a bijective two-height first-return decomposition.",
        "The tower tops are then read as polygon contacts. A proper consecutive boundary arc and an exhaustive four-set partition prepare the chain of perspectivities used in Topic VI.",
      ]}
      provedHere={
        <p>
          This topic proves the finite-rotation first-return decomposition,
          its extension to endpoint-contact indices, the exposing supporting
          lines and proper boundary arc, the exact return-incidence partition,
          and an affine chart adapted to the chain of perspectivities. It does
          not yet prove Δ=1: Topic VI supplies the projective deformation and
          completes the contradiction under the temporary assumption Δ&gt;1.
          Lemma A.6 supplies the complete lattice dependency.
        </p>
      }
      question="How does one cyclic interval of relative-interior contacts determine a finite first-return decomposition and the boundary data needed to prove Δ=1?"
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
