import type { ProofProvenance } from "../../data/proof";
import { getProofSource } from "../../data/proof";

export type ProofVocabularyEntry = {
  term: string;
  definition: React.ReactNode;
  example?: React.ReactNode;
};

export type GuidedProofStep = {
  title: string;
  explanation: React.ReactNode;
  check?: React.ReactNode;
};

export type ProofResultData = {
  id: string;
  label: string;
  kind: "Definition" | "Lemma" | "Proposition" | "Theorem" | "Corollary" | "Remark" | "Algorithm";
  title: string;
  purpose: React.ReactNode;
  manuscriptHtml: string;
  vocabulary?: readonly ProofVocabularyEntry[];
  intuition?: React.ReactNode;
  proofSteps?: readonly GuidedProofStep[];
  takeaway?: React.ReactNode;
  figure?: React.ReactNode;
  provenance?: ProofProvenance;
  sourceIds?: readonly string[];
  sourceRelation?: React.ReactNode;
};

function splitFormalProof(html: string): {
  statementHtml: string;
  proofHtml: string;
} {
  const proofStart = html.indexOf('<div class="proof">');
  if (proofStart < 0) return { statementHtml: html, proofHtml: "" };
  return {
    statementHtml: html.slice(0, proofStart),
    proofHtml: html.slice(proofStart),
  };
}

function shortLabel(label: string): string {
  return label.replace(
    /^(?:Definition|Lemma|Proposition|Theorem|Corollary|Remark|Algorithm)\s+/,
    "",
  );
}

export function ProofResult({ result }: { result: ProofResultData }) {
  const { statementHtml, proofHtml } = splitFormalProof(result.manuscriptHtml);
  const sources = (result.sourceIds ?? [])
    .map((sourceId) => getProofSource(sourceId))
    .filter((source): source is NonNullable<typeof source> => Boolean(source));

  return (
    <li className="topic-i-textbook-item proof-chapter-result" id={result.id}>
      <header className="topic-i-textbook-item-heading">
        <span aria-hidden="true">{shortLabel(result.label)}</span>
        <div>
          <div className="proof-item-labels">
            <span className="proof-result-sequence">{result.label}</span>
            {result.provenance ? (
              <span className="proof-chapter-provenance">{result.provenance}</span>
            ) : null}
          </div>
          <h3>{result.title}</h3>
          <p>{result.purpose}</p>
        </div>
      </header>

      {result.vocabulary?.length ? (
        <details className="topic-i-result-primer proof-chapter-vocabulary">
          <summary>
            <span>Definitions before the result</span>
            {result.vocabulary.length} term{result.vocabulary.length === 1 ? "" : "s"} first used here
          </summary>
          <div className="topic-i-new-vocabulary">
            <dl>
              {result.vocabulary.map((entry) => (
                <div key={entry.term}>
                  <dt>{entry.term}</dt>
                  <dd>
                    {entry.definition}
                    {entry.example ? (
                      <details className="proof-chapter-example">
                        <summary>Open an example</summary>
                        <div>{entry.example}</div>
                      </details>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </details>
      ) : null}

      {result.intuition ? (
        <details className="proof-item-commentary proof-item-explainer proof-chapter-intuition">
          <summary>
            <span>Before reading the statement</span>
            Open the geometric idea and the role of the result
          </summary>
          <div className="proof-item-explainer-body">
            <p className="proof-item-intuition">
              <span>Intuition</span>
              {result.intuition}
            </p>
            {result.figure}
          </div>
        </details>
      ) : result.figure ? (
        result.figure
      ) : null}

      <section
        className="topic-i-formal proof-chapter-formal"
        aria-label={`Complete statement and proof of ${result.label}`}
      >
        <p className="section-label">Complete manuscript statement</p>
        <div
          className="part-i-manuscript topic-i-formal-text"
          dangerouslySetInnerHTML={{ __html: statementHtml }}
        />

        {proofHtml ? (
          <details className="topic-i-proof-disclosure proof-chapter-proof">
            <summary>
              <span>Complete proof</span>
              Open the manuscript proof and its guided explanation
            </summary>
            <div
              className="part-i-manuscript topic-i-collapsible-proof-text"
              dangerouslySetInnerHTML={{ __html: proofHtml }}
            />
            {result.proofSteps?.length ? (
              <section className="proof-chapter-guided-proof" aria-label={`Guided explanation of ${result.label}`}>
                <header>
                  <p className="section-label">Making every step explicit</p>
                  <h4>The same proof, unpacked</h4>
                  <p>
                    The numbered notes below do not replace the proof. They
                    explain its choices, identify the imported facts, and make
                    implicit transitions visible.
                  </p>
                </header>
                <ol>
                  {result.proofSteps.map((step, index) => (
                    <li key={`${index}-${step.title}`}>
                      <span>{index + 1}</span>
                      <div>
                        <h5>{step.title}</h5>
                        <div>{step.explanation}</div>
                        {step.check ? (
                          <p className="proof-chapter-check">
                            <strong>Check.</strong> {step.check}
                          </p>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}
          </details>
        ) : null}
      </section>

      {result.takeaway ? (
        <p className="proof-item-takeaway proof-chapter-takeaway">
          <span>What survives</span>
          {result.takeaway}
        </p>
      ) : null}

      {result.provenance || sources.length > 0 || result.sourceRelation ? (
        <details className="proof-chapter-source-note">
          <summary>
            <span>Classification and sources</span>
            Why this result carries its displayed label
          </summary>
          <div>
            {result.provenance ? (
              <p>
                <strong>{result.provenance}.</strong>{" "}
                {result.sourceRelation ??
                  "The classification concerns the mathematical statement, not the proof given on this page."}
              </p>
            ) : result.sourceRelation ? <p>{result.sourceRelation}</p> : null}
            {sources.length > 0 ? (
              <ul>
                {sources.map((source) => (
                  <li key={source.id}>
                    {source.href ? (
                      <a href={source.href}>{source.citation}</a>
                    ) : (
                      source.citation
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </details>
      ) : null}
    </li>
  );
}

