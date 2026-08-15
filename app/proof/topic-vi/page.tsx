import type { Metadata } from "next";
import { AdvancedProofChapter } from "../../components/proof/AdvancedProofChapter";
import {
  topicVIBackground,
  topicVIGroups,
  topicVIImported,
  topicVISetup,
  topicVISourceIds,
} from "../../data/topic-vi-reader";
import { getPageTimestamp } from "../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic VI — A Projective Deformation and the First-Return Step Δ = 1",
  description:
    "For N≥4, one continuous chapter proving that a small projective deformation and the boundary condition for invariant replacement polygons force the first-return step to be one.",
};

const updatedAt = getPageTimestamp("app/data/topic-vi-reader.tsx");

export default function TopicVIPage() {
  return (
    <AdvancedProofChapter
      background={topicVIBackground}
      deck={
        <>
          A complete, source-aware mathematical reading in which
          chapter-specific definitions are stated locally, earlier concepts
          are summarized with precise links, and every proof remains
          available in full.
        </>
      }
      formalSetups={[topicVISetup]}
      groups={topicVIGroups}
      imported={topicVIImported}
      leadFigure="topic-vi-projective-chain"
      leadFigureAfterSetups
      manuscriptPages="41–51"
      overview={[
        "Under the standing assumption N≥4, an affine projective chart turns the selected boundary chain into a convex graph. Successive perspectivities define a real projective map, and its behaviour near a fixed point supplies a small signed deformation into the polygon-interior half-plane.",
        "The return-time bijection defines all N deformed vertices. Exact identities and finitely many open inequalities make the resulting polygon invariant, while one image-polygon vertex lies in its interior. Topic II rules this out for an N-critical map, so the first-return step is Δ=1.",
      ]}
      provedHere={
        <p>
          This page proves Lemmas 7.6, 7.7, and 7.9; Theorems 7.8,
          7.10, and 7.11; records the boundary cases and the precise local
          and global inputs; and then gives the complete proof of Theorem
          1.3. The projective argument is used only for N≥4.
        </p>
      }
      question="For N≥4, why does a hypothetical first-return step Δ>1 produce an invariant polygon forbidden by criticality?"
      readingConvention={
        <>
          Chapter-specific definitions are stated locally. Earlier notions
          and results are summarized precisely and linked to their complete
          proofs. All seven complete proofs are closed by default, and their
          optional guided explanations appear in the same disclosures.
        </>
      }
      routeKey="topic-vi"
      sourceIds={topicVISourceIds}
      stats={[
        { value: 9, label: "results" },
        { value: 7, label: "complete proofs" },
      ]}
      updatedAt={updatedAt}
    />
  );
}
