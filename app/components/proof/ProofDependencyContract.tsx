export type ProofDependency = {
  label: string;
  href?: string;
  explanation: React.ReactNode;
};

type ProofDependencyContractProps = {
  imported: readonly ProofDependency[];
  background?: readonly ProofDependency[];
  provedHere: React.ReactNode;
};

function DependencyList({ items }: { items: readonly ProofDependency[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={`${item.label}-${item.href ?? "local"}`}>
          {item.href ? <a href={item.href}>{item.label}</a> : <strong>{item.label}</strong>}
          {": "}
          {item.explanation}
        </li>
      ))}
    </ul>
  );
}

export function ProofDependencyContract({
  imported,
  background = [],
  provedHere,
}: ProofDependencyContractProps) {
  return (
    <section className="topic-ii-reader-contract proof-chapter-contract" aria-labelledby="chapter-contract-heading">
      <header>
        <p className="section-label">A closed dependency chain</p>
        <h3 id="chapter-contract-heading">What this chapter is allowed to use</h3>
        <p>
          Nothing is smuggled in. Every ingredient below has already been
          proved, is stated here with a precise source, or is established in
          full before the chapter uses it.
        </p>
      </header>
      <div className="topic-ii-contract-grid">
        <section>
          <h4>Imported from earlier topics</h4>
          <DependencyList items={imported} />
        </section>
        {background.length > 0 ? (
          <section>
            <h4>Standard background, stated with sources</h4>
            <DependencyList items={background} />
          </section>
        ) : null}
        <section>
          <h4>Proved on this page</h4>
          <div>{provedHere}</div>
        </section>
      </div>
    </section>
  );
}

