import type { Metadata } from "next";
import { AdvancedProofChapter } from "../../components/proof/AdvancedProofChapter";
import {
  topicVIIBackground,
  topicVIIGroups,
  topicVIIImported,
  topicVIISourceIds,
} from "../../data/topic-vii-reader";
import { getPageTimestamp } from "../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic VII — The Farey Carrier and Return Monodromy",
  description:
    "A complete guided derivation of Farey adjacency, reflected return strips, heterogeneous Ito products, exact lifted phase, and the Jensen sheet.",
};

const updatedAt = getPageTimestamp("app/data/topic-vii-reader.tsx");

export default function TopicVIIPage() {
  return (
    <AdvancedProofChapter
      background={topicVIIBackground}
      groups={topicVIIGroups}
      imported={topicVIIImported}
      leadFigure="farey-reflection"
      manuscriptPages="51–58; Lemma 8.7 and Theorem 1.4 close on 59"
      overview={[
        "The adjacent return edge is read as a determinant-one Farey cell. Reflection is handled at the level of the complete return strip, including closure exponent and lifted phase.",
        "Identity, nontransversal, and transversal returns each produce a finite heterogeneous product. Consecutive vertex angles place every factor on one upper-half-plane argument branch, completing the complex monodromy theorem.",
      ]}
      provedHere={
        <p>
          This page proves the Farey criterion, exact strip reflection, every
          return-regime product, the common Jensen sheet, and the complete
          assembly of Theorem 1.4.
        </p>
      }
      question="How does adjacent projective return become one Farey cell, one heterogeneous Ito product, and one exact phase identity?"
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
