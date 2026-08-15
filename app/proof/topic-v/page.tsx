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
  title: "Topic V — Rotation Arithmetic, the First-Return Decomposition, and Projective Preparation",
  description:
    "A complete guided account of finite rotation records for N≥2 and the projective construction used in Topic VI to prove Δ=1 for N≥4.",
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
      leadFigureAfterSetups
      manuscriptPages="31–40; Proposition 7.5 closes on 41; Lemma A.6 on 65"
      overview={[
        "Theorem 6.1 is arithmetic and holds for N≥2. The projective argument beginning in Section 7 assumes N≥4; the exceptional N=3 family is proved explicitly on this page.",
        "The cyclic interval of relative-interior contact indices is now studied as a finite rotation. Consecutive record vectors produce a bijective two-height first-return decomposition.",
        "The tower tops are then read as polygon contacts. For N≥4, consecutive boundary vertices omitting at least one side and an exhaustive four-set partition prepare the sequence of perspectivities used in Topic VI.",
      ]}
      provedHere={
        <p>
          This topic proves the first-return decomposition for a finite cyclic rotation,
          its extension to endpoint-contact indices, the exposing supporting
          lines and omitted-side boundary arc, the exact source–target partition,
          and an affine chart adapted to the sequence of perspectivities. It does
          not yet prove Δ=1. For N≥4, Topic VI supplies the projective-geometric
          proof and completes the contradiction under the temporary
          assumption Δ&gt;1. Critical invariant triangles form a genuine
          exception and are treated explicitly below.
          Lemma A.6 supplies the complete lattice dependency.
        </p>
      }
      question="How does one cyclic interval determine its first-return decomposition, and how does Topic V prepare the N≥4 proof of Δ=1 completed in Topic VI?"
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
