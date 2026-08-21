import type { Metadata } from "next";
import { AdvancedProofChapter } from "../../components/proof/AdvancedProofChapter";
import {
  topicVIIBackground,
  topicVIIGroups,
  topicVIIImported,
  topicVIISetup,
  topicVIISourceIds,
} from "../../data/topic-vii-reader";
import { publicationDates } from "../../data/publication-dates";
import { getPageTimestamp } from "../../lib/git-dates";

export const metadata: Metadata = {
  title:
    "Topic VII — Consecutive Farey Fractions and the Finite Product Equation for N≥4",
  description:
    "For N≥4, a complete guided derivation of consecutive Farey fractions, finite recurrence and product equations, and bounds for chosen real arguments of the factors.",
};

const updatedAt = getPageTimestamp("app/data/topic-vii-reader.tsx");
const firstPublishedAt = publicationDates.pages.topicVII;

export default function TopicVIIPage() {
  return (
    <AdvancedProofChapter
      background={topicVIIBackground}
      deck={
        <>
          A complete, source-aware continuation of Topic VI: the three
          first-return cases are translated into conventional Farey arithmetic,
          finite product equations, and exact equalities for chosen real
          arguments.
        </>
      }
      firstPublishedAt={firstPublishedAt}
      formalSetups={[topicVIISetup]}
      groups={topicVIIGroups}
      imported={topicVIIImported}
      leadFigure="farey-reflection"
      leadFigureAfterSetups
      manuscriptPages="4–5 and 58–67"
      overview={[
        "The first-return structure completed in Topic VI is converted into intervals between consecutive Farey fractions. When the opposite complex orientation is needed, every equation in the finite recurrence is conjugated and reversed, and its chosen real arguments are recomputed.",
        "Theorem 1.4 and equations (1.5)–(1.9) are stated before the three return cases that prove them. Those cases produce the same finite product equation with possibly different parameters βⱼ, and consecutive vertex angles place each chosen factor argument in [A,M).",
        "This completes the conditional geometric theorem for N-critical maps. Topic VIII returns to stochastic eigenvalue regions and proves that a radial boundary point new at order N satisfies that N-critical hypothesis.",
      ]}
      provedHere={
        <p>
          This page proves the Farey criterion, conjugation and reversal of the
          finite recurrence, the product equation in every return case, the
          bounds u<sub>j</sub>∈[A,M), and the complete assembly of Theorem 1.4
          for its stated range N≥4. Orders one, two, and three are handled
          directly in Topic XIII.
        </p>
      }
      question="For N≥4, how do the first-return cases from Topic VI yield consecutive Farey fractions, a finite product equation, and an equality for chosen real arguments?"
      readingConvention={
        <>
          The notation inherited from Topic VI is stated locally. The target
          theorem appears before the case analysis, while its proof assembly is
          deferred to the final disclosure. All eight result statements and all
          eight complete proofs remain present exactly once. Every equality of
          arguments is an equality between specified real lifts, not merely a
          congruence modulo 2π.
        </>
      }
      routeKey="topic-vii"
      sourceIds={topicVIISourceIds}
      stats={[
        { value: 1, label: "theorem" },
        { value: 2, label: "propositions" },
        { value: 5, label: "lemmas" },
      ]}
      updatedAt={updatedAt}
    />
  );
}
