import { ProofResult, type ProofResultData } from "./ProofResult";

type ProofResultGroupProps = {
  number: string;
  title: string;
  introduction: React.ReactNode;
  prelude?: React.ReactNode;
  postlude?: React.ReactNode;
  results: readonly ProofResultData[];
};

export function ProofResultGroup({
  number,
  title,
  introduction,
  prelude,
  postlude,
  results,
}: ProofResultGroupProps) {
  return (
    <section className="topic-i-textbook proof-chapter-group">
      <header>
        <div>
          <p className="section-label">{number}</p>
          <h3>{title}</h3>
        </div>
        <div>{introduction}</div>
      </header>
      {prelude}
      <ol className="topic-i-textbook-list">
        {results.map((result) => (
          <ProofResult key={result.id} result={result} />
        ))}
      </ol>
      {postlude}
    </section>
  );
}
