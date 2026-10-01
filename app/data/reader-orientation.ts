import { earlyOrientations } from "./reader-orientation-early";
import { lateOrientations } from "./reader-orientation-late";

export type TopicOrientation = {
  imports: { term: string; from: number | null; anchor?: string; use: string }[];
  definitions: { term: string; meaning: string }[];
  strategy: string;
  payoff: string;
};

export const readerOrientations: Record<number, TopicOrientation> = {
  ...earlyOrientations,
  ...lateOrientations,
};
