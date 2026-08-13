import { getProofSource } from "../../data/proof";

export function ProofSourceShelf({
  sourceIds,
  headingId,
  heading = "Source shelf",
}: {
  sourceIds: readonly string[];
  headingId: string;
  heading?: string;
}) {
  const sources = Array.from(new Set(sourceIds))
    .map((sourceId) => getProofSource(sourceId))
    .filter((source): source is NonNullable<typeof source> => Boolean(source));

  if (sources.length === 0) return null;

  return (
    <section className="proof-topic-sources" aria-labelledby={headingId}>
      <p className="section-label">Sources cited in this topic</p>
      <h3 id={headingId}>{heading}</h3>
      <ol>
        {sources.map((source) => (
          <li key={source.id}>
            {source.href ? (
              <a href={source.href}>{source.citation}</a>
            ) : (
              source.citation
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
