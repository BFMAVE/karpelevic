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
  title: "Topic VII — Farey Data and the Closed-Return Product for N≥4",
  description:
    "For N≥4, a complete guided derivation of Farey adjacency, reflected closed return-recurrence chains, varying-parameter product relations, exact lifted phase, and one common continuous argument interval.",
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
          finite product relations, and exact lifted arguments.
        </>
      }
      firstPublishedAt={firstPublishedAt}
      formalSetups={[topicVIISetup]}
      groups={topicVIIGroups}
      imported={topicVIIImported}
      leadFigure="farey-reflection"
      leadFigureAfterSetups
      manuscriptPages="4 and 58–66"
      overview={[
        "The first-return structure completed in Topic VI is converted into determinant-one Farey intervals. Reflection is handled at the level of the complete closed return-recurrence chain, including the integer closing exponent and lifted phase.",
        "Theorem 1.4 and equations (1.5)–(1.9) are stated before the three return cases that prove them. Those cases produce finite varying-parameter product relations, and consecutive vertex angles place every factor on one upper-half-plane argument branch.",
        "This completes the conditional geometric theorem for N-critical maps. Topic VIII returns to stochastic eigenvalue regions and proves that a radial boundary point new at order N satisfies that N-critical hypothesis.",
      ]}
      provedHere={
        <p>
          This page proves the Farey criterion, exact reflection of a closed
          return-recurrence chain, every return-case product, the common
          continuous argument interval, and the complete
          assembly of Theorem 1.4 for its stated range N≥4. Orders one, two,
          and three are handled directly in Topic XIII.
        </p>
      }
      question="For N≥4, how do the first-return cases from Topic VI become one Farey interval, a varying-parameter product relation, and one exact phase identity?"
      readingConvention={
        <>
          The notation inherited from Topic VI is stated locally. The target
          theorem appears before the case analysis, while its proof assembly is
          deferred to the final disclosure. All eight result statements and all
          eight complete proofs remain present exactly once.
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
