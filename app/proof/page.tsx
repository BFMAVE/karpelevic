import type { Metadata } from "next";
import { ProofTopicFigure } from "../components/ProofTopicFigure";
import { Proposition22ExpandedProof } from "../components/Proposition22ExpandedProof";
import { StrictPolygonExplainer } from "../components/StrictPolygonExplainer";
import { TopicIConceptFigure } from "../components/TopicIConceptFigure";
import { TopicIIChapter } from "../components/TopicIIChapter";
import {
  AdjointExplainer,
  AffineContactExplainer,
  DegreeOneExplainer,
  DenseRotationOrbitExplainer,
  ExposedFaceExplainer,
  HausdorffConvergenceExplainer,
  HomeomorphismExplainer,
} from "../components/TopicILocalExplainers";
import { primaryNavigation } from "../data/home";
import {
  topicIHtmlByItem,
  topicISetupHtml,
} from "../data/part-i-content.generated";
import { topicICommentary } from "../data/topic-i-commentary";
import {
  topicIManuscriptLabels,
  topicIResultGuides,
} from "../data/topic-i-result-guide";
import {
  getProofItems,
  getProofSource,
  proofContent,
  proofTopics,
} from "../data/proof";
import { proofReaderTopicLinks } from "../data/proof-reader";
import { publicationDates } from "../data/publication-dates";
import {
  formatDate,
  getPageTimestamp,
} from "../lib/git-dates";
import { sitePath } from "../lib/site-path";

export const metadata: Metadata = {
  title: "How the Proof Works",
  description:
    "Topic I of a fourteen-topic annotated proof that works from critical invariant polygons to the Karpelevič theorem in Ito's formulation.",
};

const pageTimestamp = getPageTimestamp("app/data/proof.ts");
const firstPublishedAt = publicationDates.pages.topicI;
const visibleProofTopics = proofTopics.slice(0, 1);
const visibleTopicItems = getProofItems(
  visibleProofTopics.flatMap((topic) => topic.itemNumbers),
);
const visibleDefinitionCount = visibleTopicItems.filter(
  (item) => item.kind === "Definition",
).length;
const visibleResultCount = visibleTopicItems.length - visibleDefinitionCount;
const topicIFormalHtml =
  topicISetupHtml + Object.values(topicIHtmlByItem).join("");
const visibleProofCount =
  topicIFormalHtml.match(/class="proof"/g)?.length ?? 0;
// Proposition 2.2 shows the manuscript proof plus five displays in its optional
// six-step expansion.
const visibleDisplayMathCount =
  (topicIFormalHtml.match(/<math display="block"/g)?.length ?? 0) + 5;

const topicIRoadmapRoutes: Readonly<Record<string, string>> = {
  "lem:cyclic-interlacing": "/proof/topic-iv/",
  "lem:one-sided-contact": "/proof/topic-iv/",
  "lem:backward-strip-reflection": "/proof/topic-vii/",
};

function qualifyTopicIRoadmapLinks(html: string): string {
  const readerHtml = html.replaceAll(
    "Real-linear covariance of contact geometry",
    "Real-linear covariance of faces and boundary incidences",
  );

  return readerHtml.replace(/href="#([^"]+)"/g, (match, anchor: string) => {
    const route = topicIRoadmapRoutes[anchor];
    return route ? `href="${sitePath(`${route}#${anchor}`)}"` : match;
  });
}

function toRomanNumeral(n: number): string | null {
  const value = Math.trunc(Math.max(0, n));
  if (value === 0) return null;

  const numerals: readonly [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ] as const;

  let remainder = value;
  let result = "";
  for (const [amount, numeral] of numerals) {
    const repeats = Math.floor(remainder / amount);
    if (repeats > 0) {
      result += numeral.repeat(repeats);
      remainder -= repeats * amount;
    }
  }

  return result || null;
}

const totalTopicNumeral = "XIV";
const proofEditionTopicLabel = `Topic I of ${totalTopicNumeral}`;
const proofTopicCounterLabel = `Topic I of ${totalTopicNumeral}`;

function resultNumber(label: string): string {
  return label.replace(/^(?:Proposition|Lemma|Theorem|Remark)\s+/, "");
}

const topicIReadingOverrides: Readonly<Record<number, string>> = {
  1: "Defines N-criticality by comparing the least invariant-polygon vertex count for T with the counts for every tT with t>1.",
  7: "Shows that an invertible coordinate change preserves vertices, sides, boundary intersections, and the side data in equation (2.3).",
};

const collapsibleProofItems = new Set([5, 6, 8, 9, 10, 66]);
const resultCommentaryOmissions = new Set([6, 7, 8, 10, 66]);

function proofDisclosureLabel(itemNumber: number): string {
  const labels: Record<number, string> = {
    5: "Open the complete proof of Proposition 2.1",
    6: "Open the proof of Proposition 2.2",
    8: "Open the complete proof of Lemma 2.4",
    9: "Open the complete proof of Lemma 2.5",
    10: "Open the complete proof of Lemma 2.6",
    66: "Open the complete proof of Lemma A.2",
  };
  return labels[itemNumber] ?? "Open the complete proof";
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

export default function ProofPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to Topic I
      </a>

      <header className="site-header" id="top">
        <div className="masthead">
          <a
            className="site-identity"
            href={sitePath("/")}
            aria-label="Critical Invariant Polygons — Home"
          >
            <span className="site-monogram" aria-hidden="true">
              Θ
            </span>
            <span>
              <strong>Critical Invariant Polygons</strong>
              <small>A companion to the manuscript</small>
            </span>
          </a>
        </div>

        <nav className="primary-navigation" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <a
              aria-current={item.href === "/proof/" ? "page" : undefined}
              href={sitePath(item.href)}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="proof-page" id="main-content">
        <header className="proof-hero">
          <div>
            <p className="kicker">An annotated route through the argument</p>
            <h1>{proofContent.title}</h1>
            <p className="proof-subtitle">{proofContent.subtitle}</p>
          </div>

          <div className="proof-hero-copy">
            <p className="proof-deck">{proofContent.deck}</p>
                <div className="proof-edition-meta">
                  <span suppressHydrationWarning>{proofEditionTopicLabel}</span>
              <span>{visibleDefinitionCount} numbered definitions</span>
              <span>{visibleResultCount} results</span>
              <span>{visibleProofCount} complete proofs</span>
              <span>{visibleDisplayMathCount} displayed formulas</span>
              <time dateTime={firstPublishedAt}>
                First published {formatDate(firstPublishedAt)}.
              </time>
              <time dateTime={pageTimestamp}>
                Last revised {formatDate(pageTimestamp)}.
              </time>
            </div>
          </div>
        </header>

        <nav className="proof-chapter-atlas" aria-label="Fourteen proof topics">
          <p className="section-label">Proof topics</p>
          <ol>
            {proofReaderTopicLinks.map((link) => (
              <li key={link.topicNumber}>
                {link.available ? (
                  <a
                    aria-current={link.topicNumber === 1 ? "step" : undefined}
                    data-proof-topic-number={link.topicNumber}
                    href={sitePath(link.href)}
                  >
                    <span>
                      {toRomanNumeral(link.topicNumber) ?? link.topicNumber}
                    </span>
                    <strong>{link.title}</strong>
                  </a>
                ) : (
                  <span
                    className="proof-chapter-unavailable"
                    data-proof-topic-number={link.topicNumber}
                  >
                    <span>
                      {toRomanNumeral(link.topicNumber) ?? link.topicNumber}
                    </span>
                    <strong>{link.title}</strong>
                    <small>Forthcoming</small>
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div
          className={`proof-reader${
            visibleProofTopics.length === 1 ? " proof-reader-single" : ""
          }`}
          data-proof-reader
          data-reading-mode="guided"
          data-total-topics={proofTopics.length}
        >
          {visibleProofTopics.length > 1 ? (
            <nav className="proof-topic-index" aria-label="Part I topics">
              <div className="proof-topic-index-heading">
                <p className="section-label">Part I reader</p>
                <p
                  className="proof-topic-counter"
                  aria-live="polite"
                  suppressHydrationWarning
                >
                  {proofTopicCounterLabel}
                </p>
              </div>
              <ol>
                {visibleProofTopics.map((topic, index) => (
                  <li key={topic.slug}>
                    <a
                      className="proof-topic-link"
                      data-proof-target={topic.slug}
                      href={`#topic-${topic.slug}`}
                      aria-current={index === 0 ? "step" : undefined}
                    >
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {topic.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          <div className="proof-topic-stage">
            {visibleProofTopics.map((topic, topicIndex) => {
              const items = getProofItems(topic.itemNumbers);
              const definitionItems = items.filter(
                (item) => item.kind === "Definition",
              );
              const resultItems = items.filter(
                (item) => item.kind !== "Definition",
              );
              const sourceIds = Array.from(
                new Set(items.flatMap((item) => item.sourceIds)),
              );

              return (
                <article
                  className="proof-topic-panel"
                  data-topic-tone={topicIndex % 2 === 0 ? "navy" : "oxblood"}
                  data-topic-slug={topic.slug}
                  hidden={topicIndex !== 0}
                  id={`topic-${topic.slug}`}
                  key={topic.slug}
                  aria-labelledby={`topic-${topic.slug}-heading`}
                >
                  <header className="proof-topic-header">
                    <p className="section-label">{topic.eyebrow}</p>
                    <h2 id={`topic-${topic.slug}-heading`}>{topic.title}</h2>
                    <p className="proof-topic-question">{topic.question}</p>
                    <div
                      className="proof-reading-mode"
                      role="group"
                      aria-label="Reading mode"
                    >
                      <span>Reading mode</span>
                      <button
                        aria-pressed="true"
                        data-reading-mode-button="guided"
                        type="button"
                      >
                        Guided
                      </button>
                      <button
                        aria-pressed="false"
                        data-reading-mode-button="compact"
                        type="button"
                      >
                        Compact
                      </button>
                    </div>
                  </header>

                  <details
                    className="proof-topic-overview proof-guided-layer"
                    suppressHydrationWarning
                    data-guided-layer
                  >
                    <summary>
                      <span>Topic orientation</span>
                      Why these definitions and results come first
                    </summary>
                    <div>
                      {topic.overview.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </details>

                  {topic.slug === "language" ? (
                    <>
                  <section
                    className="topic-i-setup"
                    aria-labelledby="topic-i-setup-heading"
                  >
                    <details
                      className="topic-i-foundations proof-guided-layer"
                      suppressHydrationWarning
                      data-guided-layer
                    >
                      <summary>
                        <span>Guided foundations</span>
                        Definitions and examples before the formal text
                      </summary>
                      <div className="topic-i-foundations-body">
                        <header>
                          <p className="section-label">1 · Definitions</p>
                          <h3 id="topic-i-setup-heading">
                            The objects, one at a time
                          </h3>
                          <p>
                            Nothing in the first formal definition is left
                            implicit. The list below fixes the ambient space,
                            the transformation, the polygon, the invariance
                            condition, and the two numerical quantities that
                            describe the transformation.
                          </p>
                        </header>

                        <dl className="topic-i-definition-list">
                      <div>
                        <dt>Real plane</dt>
                        <dd>
                          A vector space <i>V</i> of dimension two over the
                          real numbers. It has vector addition and
                          multiplication by real scalars, but no preferred
                          axes, lengths, angles, or complex coordinate.
                        </dd>
                      </div>
                      <div>
                        <dt>Real-linear map</dt>
                        <dd>
                          A function <i>A</i> : <i>V</i> → <i>V</i> satisfying{" "}
                          <i>A</i>(<i>x</i> + <i>y</i>) = <i>Ax</i> +{" "}
                          <i>Ay</i> and <i>A</i>(<i>cx</i>) = <i>cAx</i> for
                          all vectors <i>x</i>, <i>y</i> and real scalars{" "}
                          <i>c</i>. Once a basis is chosen, this is an ordinary
                          real 2 × 2 matrix.
                        </dd>
                      </div>
                      <div>
                        <dt>Compact nondegenerate convex polygon</dt>
                        <dd>
                          The convex hull of finitely many points, bounded and
                          closed, with nonempty two-dimensional interior.
                          “Nondegenerate” rules out a single point or a line
                          segment. Its extreme points form{" "}
                          Ext(<i>P</i>), the set of extreme points of{" "}
                          <i>P</i>.
                          <details className="topic-i-definition-question">
                            <summary>Why must the polygon be compact?</summary>
                            <p>
                              In the usual finite-dimensional definition, a
                              convex polygon is the convex hull of finitely
                              many points and is therefore automatically
                              closed, bounded, and compact. The adjective is
                              written explicitly because the proof uses those
                              properties: extrema are attained, supporting
                              faces exist, iterated points retain their limit,
                              area is finite, and Hausdorff limits remain
                              available.
                            </p>
                            <p>
                              Allowing arbitrary unbounded polyhedral sets
                              would define a different and largely degenerate
                              problem. For example, the whole plane satisfies{" "}
                              <i>AV</i> ⊆ <i>V</i> for every linear map and has
                              no extreme points, so a vertex-count minimum
                              would immediately collapse to zero.
                            </p>
                          </details>
                        </dd>
                      </div>
                      <div>
                        <dt>Invariant polygon</dt>
                        <dd>
                          A polygon <i>P</i> is invariant under <i>A</i> when{" "}
                          <i>AP</i> ⊆ <i>P</i>: applying <i>A</i> to every
                          point of <i>P</i> produces a set contained in{" "}
                          <i>P</i>. Equality is not required.
                        </dd>
                      </div>
                      <div>
                        <dt>Boundary, affine hull, and relative interior</dt>
                        <dd>
                          For every set <i>K</i>, the boundary is ∂<i>K</i> ={" "}
                          <span className="topic-i-overline">
                            <i>K</i>
                          </span>{" "}
                          \ int(<i>K</i>), where the overline denotes closure.
                          Since every compact convex set used here is closed,
                          this reduces to <i>K</i> \ int(<i>K</i>). The affine
                          hull aff(<i>S</i>) is the smallest affine subspace
                          containing <i>S</i>. The relative interior relint(
                          <i>S</i>) is the interior measured inside aff(
                          <i>S</i>); for a side, it is the open segment without
                          its endpoints.
                          <details className="topic-i-definition-question">
                            <summary>
                              Relative to what—and is there an absolute
                              interior?
                            </summary>
                            <p>
                              Unqualified “interior” means interior in the
                              ambient space. A line segment in the plane has
                              empty ambient interior because no two-dimensional
                              open disk fits inside it. Its affine hull is its
                              supporting line, and relative to that line the
                              segment does have an interior: the open segment
                              obtained by removing both endpoints.
                            </p>
                            <p>
                              “Absolute interior” is not standard terminology;
                              the usual contrast is between ambient interior
                              and relative interior.
                            </p>
                            <div className="topic-i-interior-examples">
                              <article>
                                <strong>Example 1 · A segment in the plane</strong>
                                <p>
                                  Let <i>L</i> = {"{"}(<i>t</i>,0) | 0 ≤{" "}
                                  <i>t</i> ≤ 1{"}"}. As a subset of{" "}
                                  <strong>ℝ²</strong>, <i>L</i> has empty
                                  interior: no open disk fits inside it. But
                                  aff(<i>L</i>) is the <i>x</i>-axis, and
                                  relint(<i>L</i>) = {"{"}(<i>t</i>,0) | 0
                                  &lt; <i>t</i> &lt; 1{"}"}. Thus the relative
                                  interior is the segment without its two
                                  endpoints.
                                </p>
                                <dl className="topic-i-interior-comparison">
                                  <div>
                                    <dt>Inside the plane ℝ²</dt>
                                    <dd>
                                      int<sub>ℝ²</sub>(<i>L</i>) = ∅
                                    </dd>
                                  </div>
                                  <div>
                                    <dt>Inside its affine hull</dt>
                                    <dd>
                                      relint(<i>L</i>) = {"{"}(<i>t</i>,0) |
                                      0 &lt; <i>t</i> &lt; 1{"}"}
                                    </dd>
                                  </div>
                                </dl>
                              </article>
                              <article>
                                <strong>
                                  Example 2 · A triangle and one of its sides
                                </strong>
                                <p>
                                  For the filled triangle Δ = conv({"{"}
                                  (0,0),(1,0),(0,1){"}"}) in ℝ², aff(Δ) = ℝ²,
                                  so relint(Δ) = int(Δ): the points satisfying{" "}
                                  <i>x</i> &gt; 0, <i>y</i> &gt; 0, and{" "}
                                  <i>x</i> + <i>y</i> &lt; 1. For its bottom
                                  side <i>E</i> = [(0,0),(1,0)], however,
                                  int(<i>E</i>) is empty in ℝ² while relint(
                                  <i>E</i>) is the open bottom edge.
                                </p>
                                <dl className="topic-i-interior-comparison">
                                  <div>
                                    <dt>The full-dimensional triangle</dt>
                                    <dd>
                                      int<sub>ℝ²</sub>(Δ) = relint(Δ)
                                    </dd>
                                  </div>
                                  <div>
                                    <dt>Its one-dimensional side</dt>
                                    <dd>
                                      int<sub>ℝ²</sub>(<i>E</i>) = ∅, while
                                      relint(<i>E</i>) is the open edge
                                    </dd>
                                  </div>
                                </dl>
                              </article>
                            </div>
                          </details>
                        </dd>
                      </div>
                      <div>
                        <dt>Supporting line, exposed face, and normal cone</dt>
                        <dd>
                          A supporting line touches a convex set while the set
                          remains in one closed half-plane. The touched points
                          form an exposed face. At a vertex <i>x</i> of a
                          polygon <i>P</i>, the normal cone is{" "}
                          <i>N</i><sub><i>P</i></sub>(<i>x</i>)={"{"}ℓ∈<i>V</i>
                          <sup>*</sup> : ℓ(<i>y</i>−<i>x</i>)≤0 for every{" "}
                          <i>y</i>∈<i>P</i>{"}"}. It contains the zero
                          functional; each nonzero member determines a
                          supporting line through <i>x</i>. After choosing an
                          auxiliary inner product, these covectors may be drawn
                          as familiar normal arrows.
                        </dd>
                      </div>
                      <div>
                        <dt>Positive orientation and cyclic order</dt>
                        <dd>
                          The positive boundary direction keeps the polygon’s
                          interior on the left. A cyclic order records which
                          vertices or sides follow which around that boundary,
                          without choosing a permanent starting point.
                        </dd>
                      </div>
                      <div>
                        <dt>Real-linear conjugacy</dt>
                        <dd>
                          The maps <i>T</i> and <i>A</i> <i>T</i> <i>A</i>
                          <sup>−1</sup> describe the same dynamics after the
                          invertible coordinate change <i>A</i>. An intrinsic
                          quantity should have the same value for both.
                        </dd>
                      </div>
                      <div>
                        <dt>Polygonal complexity</dt>
                        <dd>
                          The number ν<sub>poly</sub>(<i>A</i>) is the smallest
                          possible number of extreme points among all
                          nondegenerate compact convex polygons invariant
                          under <i>A</i>. It is ∞ if no such polygon exists.
                        </dd>
                      </div>
                      <div>
                        <dt>Elliptic map</dt>
                        <dd>
                          An invertible real-linear map <i>T</i> is called
                          elliptic when tr(<i>T</i>)<sup>2</sup> &lt; 4 det(
                          <i>T</i>). This says that the discriminant of its
                          characteristic polynomial is negative, so its two
                          eigenvalues are a nonreal conjugate pair.
                        </dd>
                      </div>
                      <div>
                        <dt>Spectral radius</dt>
                        <dd>
                          The spectral radius ρ(<i>T</i>) is the largest
                          absolute value of an eigenvalue of <i>T</i>. For an
                          elliptic map the two eigenvalues have the same
                          modulus, so ρ(<i>T</i>) = √det(<i>T</i>).
                        </dd>
                      </div>
                      <div>
                        <dt>Elliptic contraction</dt>
                        <dd>
                          An elliptic map whose spectral radius lies strictly
                          between 0 and 1. In suitable coordinates it rotates
                          the plane through a nonzero, non-half-turn angle and
                          shrinks every distance by the common factor ρ(
                          <i>T</i>).
                        </dd>
                      </div>
                        </dl>
                      </div>
                    </details>

                    <div className="topic-i-formal-baseline">
                      <p className="section-label">
                        The same setup in compact mathematical form
                      </p>
                      <p>
                        The displayed minimum below packages the first five
                        definitions into one coordinate-free quantity. Read{" "}
                        Ext(<i>P</i>) as “the extreme points of <i>P</i>.”
                      </p>
                    </div>
                    <div
                      className="part-i-manuscript topic-i-setup-text"
                      dangerouslySetInnerHTML={{ __html: topicISetupHtml }}
                    />

                    <section
                      className="topic-i-numbered-definitions"
                      aria-label="Definitions"
                    >
                      {definitionItems.map((item) => {
                        const commentary = topicICommentary[item.number];
                        const formalHtml = qualifyTopicIRoadmapLinks(
                          topicIHtmlByItem[
                            item.number as keyof typeof topicIHtmlByItem
                          ],
                        );

                        return (
                          <article
                            className="topic-i-definition-entry"
                            id={`part-i-item-${item.number}`}
                            key={item.number}
                          >
                            <header>
                              <p className="section-label">
                                {topicIManuscriptLabels[item.number]}
                              </p>
                              <h5>{item.title}</h5>
                              <p>
                                {topicIReadingOverrides[item.number] ??
                                  item.reading}
                              </p>
                            </header>

                            <section
                              className="topic-i-formal"
                              aria-label={`Complete ${topicIManuscriptLabels[item.number]}`}
                            >
                              <p className="section-label">
                                Complete definition
                              </p>
                              <div
                                className="part-i-manuscript topic-i-formal-text"
                                dangerouslySetInnerHTML={{
                                  __html: formalHtml,
                                }}
                              />
                            </section>

                            {item.number === 2 ? (
                              <>
                                <p className="topic-i-half-open-note">
                                  Here <i>e</i>
                                  <sup>⊳</sup> is not a power of <i>e</i>: it
                                  denotes the half-open line segment{" "}
                                  (<i>t</i>(<i>e</i>), <i>h</i>(<i>e</i>)]
                                  obtained from the oriented side <i>e</i> by
                                  excluding its starting endpoint <i>t</i>(
                                  <i>e</i>) and including its ending endpoint{" "}
                                  <i>h</i>(<i>e</i>).
                                </p>
                                <StrictPolygonExplainer />
                              </>
                            ) : null}

                            {commentary ? (
                              <details className="proof-item-commentary proof-item-explainer">
                                <summary>
                                  <span>Optional explanation</span>
                                  Reading the definition
                                </summary>
                                <div className="proof-item-explainer-body">
                                  <p className="proof-item-intuition">
                                    <span>Why this definition is needed</span>
                                    {commentary.intuition}
                                  </p>
                                  <ol>
                                    {commentary.details.map((detail, index) => (
                                      <li key={detail.title}>
                                        <span>{index + 1}</span>
                                        <div>
                                          <h6>{detail.title}</h6>
                                          <p>{detail.text}</p>
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
                          </article>
                        );
                      })}
                    </section>
                  </section>

                  <ProofTopicFigure slug={topic.slug} />

                  <section
                    className="topic-i-textbook"
                    aria-labelledby="topic-i-textbook-heading"
                  >
                    <header>
                      <div>
                        <p className="section-label">2 · The mathematical chapter</p>
                        <h3 id="topic-i-textbook-heading">
                          Seven results, with complete proofs
                        </h3>
                      </div>
                      <p>
                        The labels below are the labels printed in the PDF.
                        Every formal statement is visible immediately.
                        Supporting vocabulary and sources appear only where
                        they add something; selected complete proofs open on
                        demand.
                        <span>{resultItems.length} results in Topic I</span>
                      </p>
                    </header>
                    <ol className="topic-i-textbook-list">
                      {resultItems.map((item) => {
                        const commentary = topicICommentary[item.number];
                        const guide = topicIResultGuides[item.number];
                        const formalHtml = qualifyTopicIRoadmapLinks(
                          topicIHtmlByItem[
                            item.number as keyof typeof topicIHtmlByItem
                          ],
                        );
                        const { statementHtml, proofHtml } =
                          splitFormalProof(formalHtml);
                        const proofIsCollapsible =
                          collapsibleProofItems.has(item.number);

                        return (
                          <li
                            className="topic-i-textbook-item"
                            id={`part-i-item-${item.number}`}
                            key={item.number}
                          >
                            <header className="topic-i-textbook-item-heading">
                              <span aria-hidden="true">
                                {resultNumber(guide.manuscriptLabel)}
                              </span>
                              <div>
                                <div className="proof-item-labels">
                                  <span className="proof-result-sequence">
                                    {guide.manuscriptLabel}
                                  </span>
                                </div>
                                <h3>{item.title}</h3>
                                <p>
                                  {topicIReadingOverrides[item.number] ??
                                    item.reading}
                                </p>
                              </div>
                            </header>

                            {guide.newVocabulary.length > 0 ? (
                            <details
                                className="topic-i-result-primer proof-guided-layer"
                                suppressHydrationWarning
                                data-guided-layer
                              >
                                <summary>
                                  <span>First-use vocabulary</span>
                                  Definitions first used in this result
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

                            {item.number === 7 ? (
                              <>
                                <HomeomorphismExplainer />
                                <ExposedFaceExplainer />
                              </>
                            ) : null}

                            {item.number === 5 ? <AdjointExplainer /> : null}
                            {item.number === 8 ? (
                              <HausdorffConvergenceExplainer />
                            ) : null}
                            {item.number === 9 ? (
                              <DenseRotationOrbitExplainer />
                            ) : null}
                            {item.number === 10 ? (
                              <DegreeOneExplainer />
                            ) : null}

                            {proofIsCollapsible ? (
                              <section
                                className="topic-i-formal"
                                aria-label={`Statement and proof for ${guide.manuscriptLabel}`}
                              >
                                <p className="section-label">
                                  Complete statement
                                </p>
                                <div
                                  className="part-i-manuscript topic-i-formal-text"
                                  dangerouslySetInnerHTML={{
                                    __html: statementHtml,
                                  }}
                                />

                                <details className="topic-i-proof-disclosure">
                                  <summary>
                                    <span>Proof</span>
                                    {proofDisclosureLabel(item.number)}
                                  </summary>
                                  {item.number === 6 ? (
                                    <>
                                      <div
                                        className="part-i-manuscript topic-i-collapsible-proof-text"
                                        dangerouslySetInnerHTML={{
                                          __html: proofHtml,
                                        }}
                                      />
                                      <details className="topic-i-expanded-proof-disclosure">
                                        <summary>
                                          <span>Detailed version</span>
                                          Open the six-step proof
                                        </summary>
                                        <Proposition22ExpandedProof />
                                      </details>
                                    </>
                                  ) : (
                                    <div
                                      className="part-i-manuscript topic-i-collapsible-proof-text"
                                      dangerouslySetInnerHTML={{
                                        __html: proofHtml,
                                      }}
                                    />
                                  )}
                                </details>
                              </section>
                            ) : (
                              <section
                                className="topic-i-formal"
                                aria-label={`Formal text for ${item.title}`}
                              >
                                <p className="section-label">
                                  Complete statement and proof
                                </p>
                                <div
                                  className="part-i-manuscript topic-i-formal-text"
                                  dangerouslySetInnerHTML={{
                                    __html: formalHtml,
                                  }}
                                />
                              </section>
                            )}

                            {item.number === 7 ? (
                              <AffineContactExplainer />
                            ) : null}

                            {commentary &&
                            !resultCommentaryOmissions.has(item.number) ? (
                              <details className="proof-item-commentary proof-item-explainer">
                                <summary>
                                  <span>Optional explanation</span>
                                  Open intuition and proof walkthrough
                                </summary>
                                <div className="proof-item-explainer-body">
                                  <p className="proof-item-intuition">
                                    <span>Intuition</span>
                                    {commentary.intuition}
                                  </p>

                                  {commentary.figure ? (
                                    <TopicIConceptFigure
                                      kind={commentary.figure}
                                    />
                                  ) : null}

                                  <ol>
                                    {commentary.details.map((detail, index) => (
                                      <li key={detail.title}>
                                        <span>{index + 1}</span>
                                        <div>
                                          <h4>{detail.title}</h4>
                                          <p>{detail.text}</p>
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
                          </li>
                        );
                      })}
                    </ol>
                  </section>

                    </>
                  ) : (
                    <>
                      <ProofTopicFigure slug={topic.slug} />
                      <TopicIIChapter />
                    </>
                  )}

                  <section className="proof-topic-sources" aria-labelledby={`topic-${topic.slug}-sources`}>
                    <p className="section-label">Sources cited in this topic</p>
                    <h3 id={`topic-${topic.slug}-sources`}>
                      References and provenance
                    </h3>
                    <ol>
                      {sourceIds.map((sourceId) => {
                        const source = getProofSource(sourceId);
                        if (!source) return null;
                        return (
                          <li key={source.id}>
                            {source.href ? (
                              <a href={source.href}>{source.citation}</a>
                            ) : (
                              source.citation
                            )}
                          </li>
                        );
                      })}
                    </ol>
                  </section>

                  <nav
                    className={`proof-topic-controls${
                      topicIndex > 0
                        ? " proof-topic-controls-with-previous"
                        : ""
                    }`}
                    aria-label={`End of ${topic.title}`}
                  >
                    <div className="proof-topic-complete">
                      <span>
                        End of Topic {toRomanNumeral(topicIndex + 1) ?? topicIndex + 1}
                      </span>
                      <strong>
                        {`Topic ${toRomanNumeral(topicIndex + 1) ?? topicIndex + 1} of ${totalTopicNumeral} complete`}
                      </strong>
                    </div>
                    {topicIndex > 0 ? (
                      <a
                        className="proof-topic-control proof-topic-control-previous"
                        data-proof-target={visibleProofTopics[topicIndex - 1].slug}
                        href={`#topic-${visibleProofTopics[topicIndex - 1].slug}`}
                      >
                        <span>Previous</span>
                        <strong>{visibleProofTopics[topicIndex - 1].title}</strong>
                      </a>
                    ) : null}
                    {topicIndex < visibleProofTopics.length - 1 ? (
                      <a
                        className="proof-topic-control proof-topic-control-next"
                        data-proof-target={visibleProofTopics[topicIndex + 1].slug}
                        href={`#topic-${visibleProofTopics[topicIndex + 1].slug}`}
                      >
                        <span>Next</span>
                        <strong>{visibleProofTopics[topicIndex + 1].title}</strong>
                      </a>
                    ) : (
                      <a
                        className="proof-topic-control proof-topic-control-next"
                        href={sitePath("/proof/topic-ii/")}
                      >
                        <span>Next</span>
                        <strong>
                          Topic II · Support inequalities and boundary contact
                        </strong>
                      </a>
                    )}
                  </nav>
                </article>
              );
            })}
          </div>
        </div>

        <noscript>
          <style>{`.proof-topic-panel[hidden]{display:block!important}`}</style>
          <p className="proof-noscript">
            JavaScript is unavailable. Topic I remains fully readable, and
            Topic II is available through the ordinary next-page link.
          </p>
        </noscript>

        <section className="proof-responsibility">
          <div>
            <p className="footer-disclosure-label">Corrections are welcome</p>
            <h2>The classification is part of the scholarship.</h2>
          </div>
          <p>
            This page was developed with generative-AI assistance.
            Mathematical and editorial responsibility remains
            with the authors. If a result has an earlier source, a stronger
            antecedent, or a qualification missing here, please{" "}
            <a href={sitePath("/#contact-heading")}>send a correction</a>.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-meta">
          <time dateTime={pageTimestamp}>
            Last revised {formatDate(pageTimestamp)}.
          </time>
          <time dateTime={publicationDates.websiteOnlineSince}>
            Website online since{" "}
            {formatDate(publicationDates.websiteOnlineSince)}.
          </time>
          <span>© {new Date(pageTimestamp).getUTCFullYear()} The authors</span>
          <a className="to-top" href="#top">
            To the top ↑
          </a>
        </div>
      </footer>

      <script src={sitePath("/proof.js")} defer />
    </>
  );
}
