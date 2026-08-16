import type { ProofResultData } from "./ProofResult";
import type { ProofDependency } from "./ProofDependencyContract";
import type { AdvancedProofFigureKind } from "./AdvancedProofFigure";
import { AdvancedProofFigure } from "./AdvancedProofFigure";
import { ProofChapterShell } from "./ProofChapterShell";
import { ProofDependencyContract } from "./ProofDependencyContract";
import { ProofResultGroup } from "./ProofResultGroup";
import { ProofSourceShelf } from "./ProofSourceShelf";

export type AdvancedProofGroup = {
  number: string;
  title: string;
  introduction: React.ReactNode;
  results: readonly ProofResultData[];
  formalSetups?: readonly AdvancedProofSetup[];
};

export type AdvancedProofSetup = {
  id: string;
  title: string;
  html: string;
  eyebrow?: string;
};

type AdvancedProofChapterProps = {
  routeKey: string;
  firstPublishedAt?: string;
  updatedAt: string;
  question: string;
  overview: readonly string[];
  manuscriptPages: string;
  stats: readonly { value: string | number; label: string }[];
  leadFigure: AdvancedProofFigureKind;
  imported: readonly ProofDependency[];
  background?: readonly ProofDependency[];
  provedHere: React.ReactNode;
  groups: readonly AdvancedProofGroup[];
  sourceIds: readonly string[];
  formalSetups?: readonly AdvancedProofSetup[];
  leadFigureAfterSetups?: boolean;
  readingConvention?: React.ReactNode;
  deck?: React.ReactNode;
};

function FormalSetup({ setup }: { setup: AdvancedProofSetup }) {
  return (
    <section
      className="topic-i-formal proof-chapter-formal proof-chapter-setup"
      id={setup.id}
    >
      <p className="section-label">
        {setup.eyebrow ?? "Formal setup used below"}
      </p>
      <h2>{setup.title}</h2>
      <div
        className="part-i-manuscript topic-i-formal-text"
        dangerouslySetInnerHTML={{ __html: setup.html }}
      />
    </section>
  );
}

export function AdvancedProofChapter({
  routeKey,
  firstPublishedAt,
  updatedAt,
  question,
  overview,
  manuscriptPages,
  stats,
  leadFigure,
  imported,
  background = [],
  provedHere,
  groups,
  sourceIds,
  formalSetups = [],
  leadFigureAfterSetups = false,
  readingConvention,
  deck,
}: AdvancedProofChapterProps) {
  return (
    <ProofChapterShell
      manuscriptPages={manuscriptPages}
      overview={overview}
      firstPublishedAt={firstPublishedAt}
      question={question}
      routeKey={routeKey}
      stats={stats}
      updatedAt={updatedAt}
      readingConvention={readingConvention}
      deck={deck}
    >
      {!leadFigureAfterSetups && <AdvancedProofFigure kind={leadFigure} />}
      <ProofDependencyContract
        background={background}
        imported={imported}
        provedHere={provedHere}
      />
      {formalSetups.map((setup) => (
        <FormalSetup key={setup.id} setup={setup} />
      ))}
      {leadFigureAfterSetups && <AdvancedProofFigure kind={leadFigure} />}
      {groups.map((group) => (
        <ProofResultGroup
          introduction={group.introduction}
          key={group.number}
          number={group.number}
          prelude={group.formalSetups?.map((setup) => (
            <FormalSetup key={setup.id} setup={setup} />
          ))}
          results={group.results}
          title={group.title}
        />
      ))}
      <ProofSourceShelf
        headingId={routeKey + "-sources"}
        sourceIds={sourceIds}
      />
    </ProofChapterShell>
  );
}
