import {
  topicIIHtmlByItem,
  topicIISetupHtml,
} from "../data/part-i-content.generated";
import { topicIICommentary } from "../data/topic-ii-commentary";
import {
  topicIIPedagogicalOrder,
  topicIIResultGuides,
} from "../data/topic-ii-result-guide";
import { getProofItems, getProofSource } from "../data/proof";
import { TopicIIConceptFigure } from "./TopicIIConceptFigure";
import {
  FiniteOpennessExplainer,
  NormalFanExplainer,
  SaturationGapExplainer,
} from "./TopicIILocalExplainers";
import { sitePath } from "../lib/site-path";

function resultNumber(label: string): string {
  return label.replace(/^(?:Proposition|Lemma|Theorem|Remark)\s+/, "");
}

function sourceRelation(itemNumber: number, fallback?: string): string | undefined {
  if (itemNumber === 15) {
    return "Bitsoris gives the previously known nonnegative-matrix criterion for invariance of a polyhedron described by linear inequalities. Proposition 3.1 proves the planar fixed-normal-fan specialization used here and records its first-harmonic identity explicitly.";
  }
  if (itemNumber === 18) {
    return "Dmitriev–Dynkin, as translated in Swift’s thesis, is the historical antecedent for side-contact arguments in this problem. The exact image-vertex witness used here is also an elementary exposed-face consequence and is proved completely on this page.";
  }
  return fallback;
}

function splitFormalProof(html: string): {
  statementHtml: string;
  proofHtml: string;
} {
  const proofStart = html.indexOf('<div class="proof">');
  if (proofStart < 0) {
    return { statementHtml: html, proofHtml: "" };
  }
  return {
    statementHtml: html.slice(0, proofStart),
    proofHtml: html.slice(proofStart),
  };
}

const topicIImportAnchors = new Set([
  "lem:oriented-boundary-order",
  "lem:origin-interior",
  "prop:affine-invariance",
]);

function qualifyTopicIImports(html: string): string {
  return html.replace(/href="#([^"]+)"/g, (match, anchor: string) =>
    topicIImportAnchors.has(anchor)
      ? `href="${sitePath(`/proof/#${anchor}`)}"`
      : match,
  );
}

function ImportedTopicILink({
  anchor,
  children,
}: {
  anchor: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={sitePath(`/proof/#${anchor}`)}
    >
      {children}
    </a>
  );
}

function TopicIIResult({ itemNumber }: { itemNumber: number }) {
  const item = getProofItems([itemNumber])[0];
  const guide = topicIIResultGuides[itemNumber];
  const commentary = topicIICommentary[itemNumber];
  const formalHtml = qualifyTopicIImports(
    topicIIHtmlByItem[itemNumber as keyof typeof topicIIHtmlByItem],
  );
  const { statementHtml, proofHtml } = splitFormalProof(formalHtml);
  const isRemark = item.kind === "Remark";
  const sources = isRemark
    ? []
    : item.sourceIds
        .map((sourceId) => getProofSource(sourceId))
        .filter((source): source is NonNullable<typeof source> => Boolean(source));

  return (
    <li
      className={`topic-i-textbook-item topic-ii-result${
        guide.role === "Foundation brought forward"
          ? " topic-ii-result-foundation"
          : ""
      }`}
      id={`part-i-item-${itemNumber}`}
    >
      <header className="topic-i-textbook-item-heading">
        <span aria-hidden="true">{resultNumber(guide.manuscriptLabel)}</span>
        <div>
          <div className="proof-item-labels">
            <span className="proof-result-sequence">
              {guide.manuscriptLabel}
            </span>
            {item.provenance ? (
              <span className="proof-chapter-provenance">{item.provenance}</span>
            ) : null}
            {guide.role === "Foundation brought forward" ? (
              <span className="topic-ii-role">Foundation brought forward</span>
            ) : null}
          </div>
          <h3>{item.title}</h3>
          <p>{item.reading}</p>
        </div>
      </header>

      {guide.newVocabulary.length > 0 ? (
        <details
          className="topic-i-result-primer proof-guided-layer"
          suppressHydrationWarning
          data-guided-layer
        >
          <summary>
            <span>Definitions before the result</span>
            Terms first used here
          </summary>
          <div className="topic-i-new-vocabulary">
            <dl>
              {guide.newVocabulary.map((entry) => (
                <div key={entry.term}>
                  <dt>{entry.term}</dt>
                  <dd>{entry.definition}</dd>
                </div>
              ))}
            </dl>
          </div>
        </details>
      ) : null}

      {itemNumber === 12 ? <FiniteOpennessExplainer /> : null}

      <section
        className="topic-i-formal"
        aria-label={`${isRemark ? "Complete text" : "Statement and proof"} for ${guide.manuscriptLabel}`}
      >
        <p className="section-label">
          {isRemark ? "Complete remark" : "Complete statement"}
        </p>
        <div
          className="part-i-manuscript topic-i-formal-text"
          dangerouslySetInnerHTML={{ __html: statementHtml }}
        />

        {proofHtml ? (
          <details className="topic-i-proof-disclosure">
            <summary>
              <span>Proof</span>
              Open the complete proof of {guide.manuscriptLabel}
            </summary>
            <div
              className="part-i-manuscript topic-i-collapsible-proof-text"
              dangerouslySetInnerHTML={{ __html: proofHtml }}
            />
          </details>
        ) : null}
      </section>

      {itemNumber === 15 ? <NormalFanExplainer /> : null}
      {itemNumber === 16 ? <SaturationGapExplainer /> : null}

      {commentary ? (
        <details className="proof-item-commentary proof-item-explainer">
          <summary>
            <span>Conceptual route</span>
            Open intuition and proof architecture
          </summary>
          <div className="proof-item-explainer-body">
            <p className="proof-item-intuition">
              <span>Intuition</span>
              {commentary.intuition}
            </p>
            {commentary.figure ? (
              <TopicIIConceptFigure kind={commentary.figure} />
            ) : null}
            <ol>
              {commentary.architecture.map((step, index) => (
                <li key={step}>
                  <span>{index + 1}</span>
                  <div>
                    <h4>Step {index + 1}</h4>
                    <p>{step}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="proof-item-takeaway">
              <span>Keep in mind</span>
              {commentary.takeaway}
            </p>
          </div>
        </details>
      ) : null}

      {!isRemark && (item.provenance || sources.length > 0) ? (
        <details className="proof-chapter-source-note">
          <summary>
            <span>Classification and sources</span>
            Why this mathematical statement carries its displayed label
          </summary>
          <div>
            {item.provenance ? (
              <p>
                <strong>{item.provenance}.</strong>{" "}
                {sourceRelation(itemNumber, item.sourceRelation) ??
                  "The classification concerns the mathematical statement, not the proof reproduced on this page."}
              </p>
            ) : null}
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

const openingResults = [11, 12, 13, 14] as const;
const transferResult = [15] as const;
const foundations = [65, 67] as const;
const saturationResults = [16, 17, 18] as const;

export function TopicIIChapter() {
  const proofCount = topicIIPedagogicalOrder.filter(
    (itemNumber) => itemNumber !== 17,
  ).length;

  return (
    <>
      <section className="topic-ii-reader-contract" aria-labelledby="topic-ii-contract-heading">
        <header>
          <p className="section-label">A closed dependency chain</p>
          <h3 id="topic-ii-contract-heading">What is allowed into Topic II</h3>
          <p>
            Every ingredient has one of three addresses: an earlier result
            in Topic I, an explicitly named standard source, or a complete
            proof on this page. The manuscript’s appendix tools are moved
            forward to the point where the saturation theorem first needs
            them; their PDF labels remain unchanged.
          </p>
        </header>

        <div className="topic-ii-contract-grid">
          <section>
            <h4>Imported from Topic I</h4>
            <ul>
              <li>
                <ImportedTopicILink anchor="part-i-item-2">
                  Definition 1.2
                </ImportedTopicILink>
                : strict polygons, maximal sides, strict support, and cyclic
                side order.
              </li>
              <li>
                <ImportedTopicILink anchor="part-i-item-5">
                  Proposition 2.1
                </ImportedTopicILink>
                : an adapted complex coordinate and Euclidean inner product
                in which <i>T</i> is multiplication by{" "}
                <i>λ</i>=<i>ρe</i>
                <sup>iθ</sup>.
              </li>
              <li>
                <ImportedTopicILink anchor="part-i-item-6">
                  Proposition 2.2
                </ImportedTopicILink>
                : polygonal complexity and criticality are invariant under
                real-linear conjugacy; the adjoint is also critical.
              </li>
              <li>
                <ImportedTopicILink anchor="part-i-item-9">
                  Lemma 2.5
                </ImportedTopicILink>
                : every nontrivial invariant polygon for a nonreal
                contraction contains 0 in its interior.
              </li>
              <li>
                <ImportedTopicILink anchor="part-i-item-10">
                  Lemma 2.6
                </ImportedTopicILink>
                : determinant sign and positive cyclic boundary order agree.
              </li>
            </ul>
          </section>

          <section>
            <h4>Standard background, stated with sources</h4>
            <ul>
              <li>
                Support functions, exposed faces, normal cones, polarity,
                recession cones, and polygonal face duality: R. Schneider,{" "}
                <cite>Convex Bodies: The Brunn–Minkowski Theory</cite>, 2nd
                ed., Chapter 1 §§1.1, 1.3, 1.6, 1.7 and Chapter 2 §§2.1,
                2.4.
              </li>
              <li>
                Spectral radius, operator norms, Jordan form, and
                nonnegative-matrix terminology: R. A. Horn and C. R.
                Johnson, <cite>Matrix Analysis</cite>, 2nd ed., especially
                Chapter 8. The exact Perron statement used here is nevertheless
                proved as Lemma A.1 below.
              </li>
              <li>
                The polyhedral invariance viewpoint has an antecedent in G.
                Bitsoris, “On the positive invariance of polyhedral sets for
                discrete-time systems” (1988). Proposition 3.1 proves the
                fixed-normal-fan formula used here.
              </li>
              <li>
                Earlier side-contact arguments occur in
                Dmitriev–Dynkin (1946), accessible in Swift’s 1972 thesis.
                Theorem 3.2 proves the hereditary strengthening used by this
                manuscript.
              </li>
            </ul>
          </section>

          <section>
            <h4>Proved on this page</h4>
            <p>
              Lemmas 2.7–2.10, Proposition 3.1, Lemmas A.1 and A.3, Theorem
              3.2, and Lemma 4.1 all appear with their complete proofs.
              Remark 3.3 records the exact consequence carried into later
              topics. No irreducibility, smoothness, or generic-position
              hypothesis is used without being stated.
            </p>
          </section>
        </div>
      </section>

      <section className="topic-i-textbook topic-ii-textbook" aria-labelledby="topic-ii-convex-heading">
        <header>
          <div>
            <p className="section-label">1 · Finite convex certificates</p>
            <h3 id="topic-ii-convex-heading">
              From determinant signs to stable geometry
            </h3>
          </div>
          <p>
            The first four lemmas concern finite point configurations in a
            real plane; they do not yet assume criticality or even introduce a
            linear map. They replace geometric order by finitely many
            inequalities: strict polygonal convex position, persistence under
            perturbation, strict support, and monotonic polar angle. The
            contraction <i>T</i> and its vertex budget enter only in the later
            saturation theorem. There <i>N := ν</i>
            <sub>poly</sub>(<i>T</i>) is the smallest number of vertices among
            all <i>T</i>-invariant polygons, and the theorem formally assumes
            that this number is finite and that <i>T</i> is <i>N</i>-critical.
            <span>Four complete proofs</span>
          </p>
        </header>
        <ol className="topic-i-textbook-list">
          {openingResults.map((itemNumber) => (
            <TopicIIResult itemNumber={itemNumber} key={itemNumber} />
          ))}
        </ol>
      </section>

      <section className="topic-ii-normal-fan-setup" aria-labelledby="topic-ii-normal-fan-heading">
        <header>
          <p className="section-label">2 · Support coordinates</p>
          <h3 id="topic-ii-normal-fan-heading">
            The normal fan and its transfer matrix
          </h3>
          <p>
            We now work in the adapted Euclidean coordinate supplied by
            Proposition 2.1. The inner product, unit normals, and angles
            below refer to that coordinate. This is a coordinate choice
            already justified in Topic I, not a new assumption.
          </p>
        </header>

        <dl className="topic-ii-setup-definitions">
          <div>
            <dt>Outward unit normal <i>u</i><sub>i</sub></dt>
            <dd>
              The unit vector perpendicular to side <i>i</i> and pointing
              away from the polygon. The side is the equality set in{" "}
              ⟨<i>u</i>
              <sub>i</sub>,<i>z</i>⟩≤<i>h</i>
              <sub>i</sub>.
            </dd>
          </div>
          <div>
            <dt>Support number <i>h</i><sub>i</sub></dt>
            <dd>
              The maximum <i>h</i>
              <sub>P</sub>(<i>u</i>
              <sub>i</sub>) of the functional ⟨<i>u</i>
              <sub>i</sub>,·⟩ on <i>P</i>. It is positive because 0 is
              strictly inside every side inequality.
            </dd>
          </div>
          <div>
            <dt>Fan cone</dt>
            <dd>
              The nonnegative cone spanned by two adjacent normal rays.
              Every nonzero direction belongs to at least one such cone,
              and every direction not itself a fan ray belongs to exactly
              one.
            </dd>
          </div>
          <div>
            <dt><i>B</i><sub>Φ</sub>(<i>θ</i>)</dt>
            <dd>
              The nonnegative matrix whose <i>i</i>th row contains the two
              coefficients expressing the backward-rotated normal{" "}
              <i>e</i>
              <sup>−iθ</sup>
              <i>u</i>
              <sub>i</sub> in its containing fan cone.
            </dd>
          </div>
        </dl>

        <div
          className="part-i-manuscript topic-ii-setup-formal"
          dangerouslySetInnerHTML={{ __html: topicIISetupHtml }}
        />
        <NormalFanExplainer />
      </section>

      <section className="topic-i-textbook topic-ii-textbook" aria-labelledby="topic-ii-transfer-heading">
        <header>
          <div>
            <p className="section-label">3 · Geometry becomes a matrix inequality</p>
            <h3 id="topic-ii-transfer-heading">The normal-fan transfer</h3>
          </div>
          <p>
            One proposition translates polygon invariance into finitely many
            support inequalities and identifies the rotating first harmonic
            of the transfer matrix.
            <span>One complete proof</span>
          </p>
        </header>
        <ol className="topic-i-textbook-list">
          {transferResult.map((itemNumber) => (
            <TopicIIResult itemNumber={itemNumber} key={itemNumber} />
          ))}
        </ol>
      </section>

      <section className="topic-ii-foundations" aria-labelledby="topic-ii-foundations-heading">
        <header>
          <p className="section-label">4 · Foundations at the point of use</p>
          <h3 id="topic-ii-foundations-heading">
            Two appendix lemmas before saturation
          </h3>
          <p>
            The PDF proves these tools in Appendix A. This reader places
            them here because Theorem 3.2 uses both. Their labels A.1 and
            A.3 are retained so every citation still agrees with the
            manuscript.
          </p>
        </header>
        <ol className="topic-i-textbook-list">
          {foundations.map((itemNumber) => (
            <TopicIIResult itemNumber={itemNumber} key={itemNumber} />
          ))}
        </ol>
      </section>

      <section className="topic-i-textbook topic-ii-textbook" aria-labelledby="topic-ii-saturation-heading">
        <header>
          <div>
            <p className="section-label">5 · The structural conclusion</p>
            <h3 id="topic-ii-saturation-heading">
              Hereditary side and vertex saturation
            </h3>
          </div>
          <p>
            The theorem closes the chain. The final lemma converts its
            set-level side contact into the image-vertex witnesses needed
            for Topic III.
            <span>{proofCount} complete proofs in Topic II</span>
          </p>
        </header>
        <ol className="topic-i-textbook-list">
          {saturationResults.map((itemNumber) => (
            <TopicIIResult itemNumber={itemNumber} key={itemNumber} />
          ))}
        </ol>
      </section>
    </>
  );
}
