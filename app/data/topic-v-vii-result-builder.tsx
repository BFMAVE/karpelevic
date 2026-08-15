import { AdvancedProofFigure, type AdvancedProofFigureKind } from "../components/proof/AdvancedProofFigure";
import type {
  GuidedProofStep,
  ProofResultData,
  ProofVocabularyEntry,
} from "../components/proof/ProofResult";
import { getProofItems } from "./proof";

export type ReaderResultGuide = {
  itemNumber: number;
  label: string;
  vocabulary?: readonly ProofVocabularyEntry[];
  intuition: React.ReactNode;
  proofSteps?: readonly GuidedProofStep[];
  takeaway: React.ReactNode;
  figure?: AdvancedProofFigureKind;
  sourceRelation?: React.ReactNode;
};

export function makeReaderResult(
  htmlByItem: Readonly<Record<number, string>>,
  guide: ReaderResultGuide,
): ProofResultData {
  const item = getProofItems([guide.itemNumber])[0];
  if (!item) throw new Error("Unknown proof item " + guide.itemNumber);
  const manuscriptHtml = htmlByItem[guide.itemNumber];
  if (!manuscriptHtml) {
    throw new Error("Missing generated manuscript HTML for item " + guide.itemNumber);
  }

  const unverifiedAntecedent = item.karpelevicOnlyAntecedent;
  return {
    id: "part-i-item-" + guide.itemNumber,
    label: guide.label,
    kind: item.kind,
    title: item.title,
    purpose: item.reading,
    manuscriptHtml,
    vocabulary: guide.vocabulary,
    intuition: guide.intuition,
    proofSteps: guide.proofSteps,
    takeaway: guide.takeaway,
    figure: guide.figure ? <AdvancedProofFigure kind={guide.figure} /> : undefined,
    provenance: unverifiedAntecedent ? undefined : item.provenance,
    sourceIds: item.sourceIds,
    sourceRelation:
      guide.sourceRelation ??
      (unverifiedAntecedent
        ? "Karpelevič’s original argument contains an antecedent of this mechanism. That occurrence alone does not justify a “Previously known” label, so no category or priority claim is assigned here."
        : item.sourceRelation),
  };
}

export function collectSourceIds(results: readonly ProofResultData[]): string[] {
  return results.flatMap((result) => [...(result.sourceIds ?? [])]);
}
