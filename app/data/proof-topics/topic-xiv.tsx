import { BoundaryExplorer } from "../../components/proof/BoundaryExplorer";
import { ProofDependencyContract } from "../../components/proof/ProofDependencyContract";
import { partIIOrderSevenHtml } from "../part-ii-content.generated";
import { sitePath } from "../../lib/site-path";

const manuscriptHtml = partIIOrderSevenHtml
  .replaceAll("<h1", "<h3")
  .replaceAll("</h1>", "</h3>")
  .replaceAll("<h2", "<h4")
  .replaceAll("</h2>", "</h4>");

export function TopicXIVContent() {
  return (
    <>
      <ProofDependencyContract
        imported={[
          {
            label: "Topic IX · Farey intervals and the equation for the modulus",
            href: sitePath("/proof/topic-ix/"),
            explanation:
              "supplies the exact Farey-interval data, the unique modulus at each prescribed argument, and the certified numerical procedure.",
          },
          {
            label: "Topic XI · Sparse stochastic realization",
            href: sitePath("/proof/topic-xi/"),
            explanation:
              "turns a reduced Ito polynomial into an explicit row-stochastic matrix that has the selected boundary point as an eigenvalue.",
          },
          {
            label: "Topic XIII · Karpelevič theorem in Ito’s formulation",
            href: sitePath("/proof/topic-xiii/"),
            explanation:
              "justifies interpreting the assembled boundary arc chain as the complete boundary rather than merely a candidate curve.",
          },
        ]}
        background={[
          {
            label: "Bisection",
            explanation:
              "the elementary root-finding method that repeatedly halves an interval on which a continuous function changes sign. Its error is at most the initial interval length divided by 2 to the number of iterations.",
          },
          {
            label: "Complex polar coordinates",
            explanation:
              "the identity λ=ρe^{2πix}, where ρ is the modulus and x is the angle measured in turns.",
          },
        ]}
        provedHere={
          <p>
            No new theorem is needed. The page performs the complete order-seven
            computation, checks the ray <i>x</i>=3/8 independently, publishes the
            deterministic extraction routine, and exposes the same Farey-cell
            arithmetic and scalar equation in a reader-controlled plot.
          </p>
        }
      />

      <section className="topic-i-textbook proof-chapter-group topic-xiv-atlas">
        <header>
          <div>
            <p className="section-label">1 · The complete order-seven Farey table</p>
            <h3>Nine cells cover the upper half-turn</h3>
          </div>
          <div>
            <p>
              The upper boundary is organized by consecutive fractions in the
              Farey sequence of order seven. Each cell fixes four integers:
              denominators <i>q</i> and <i>s</i>, the repeat count{" "}
              <i>d</i>=⌊7/<i>q</i>⌋, and the closing exponent{" "}
              <i>e</i>=<i>s</i>−<i>dq</i>. Only the radius changes continuously
              inside the cell.
            </p>
          </div>
        </header>

        <div className="topic-xiv-cell-strip" aria-label="Order-seven Farey intervals">
          {[
            ["0/1", "1/7", "q=1, s=7, d=7, e=0"],
            ["1/7", "1/6", "q=6, s=7, d=1, e=1"],
            ["1/6", "1/5", "q=5, s=6, d=1, e=1"],
            ["1/5", "1/4", "q=4, s=5, d=1, e=1"],
            ["1/4", "2/7", "q=4, s=7, d=1, e=3"],
            ["2/7", "1/3", "q=3, s=7, d=2, e=1"],
            ["1/3", "2/5", "q=3, s=5, d=2, e=−1"],
            ["2/5", "3/7", "q=5, s=7, d=1, e=2"],
            ["3/7", "1/2", "q=2, s=7, d=3, e=1"],
          ].map(([left, right, data], index) => (
            <article key={`${left}-${right}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{left} → {right}</strong>
              <small>{data}</small>
            </article>
          ))}
        </div>

        <details className="proof-topic-overview topic-xiv-manuscript">
          <summary>
            <span>Complete manuscript section</span>
            Open the order-seven table, worked ray, matrix, and formulas
          </summary>
          <div
            className="part-i-manuscript topic-xiv-manuscript-body"
            dangerouslySetInnerHTML={{ __html: manuscriptHtml }}
          />
        </details>
      </section>

      <section className="topic-i-textbook proof-chapter-group topic-xiv-ray">
        <header>
          <div>
            <p className="section-label">2 · One ray from beginning to end</p>
            <h3>The worked direction x=3/8</h3>
          </div>
          <div>
            <p>
              This calculation separates the exact choices from the numerical
              solve. Every fraction and exponent below is exact; only the
              decimal radius and the plotted coordinates are approximations.
            </p>
          </div>
        </header>

        <ol className="topic-xiv-worked-steps">
          <li>
            <span>1</span>
            <div>
              <h4>Locate the Farey interval</h4>
              <p>
                Since 1/3 &lt; 3/8 &lt; 2/5, the argument belongs to the interval with
                ordered denominator data <i>q</i>=3 and <i>s</i>=5. The
                determinant check 3·2−1·5=1 confirms that the endpoints are
                Farey neighbours.
              </p>
            </div>
          </li>
          <li>
            <span>2</span>
            <div>
              <h4>Compute the discrete return data</h4>
              <p>
                The order is <i>n</i>=7, so <i>d</i>=⌊7/3⌋=2 and{" "}
                <i>e</i>=5−2·3=−1. A negative closing exponent is allowed; it
                tells us which homogeneous form of the reduced Ito equation to
                use, not that any return time is negative.
              </p>
            </div>
          </li>
          <li>
            <span>3</span>
            <div>
              <h4>Measure the angular gaps</h4>
              <p>
                The exact gaps are <i>A</i>=π/4 and <i>B</i>=π/8. They measure
                how far the selected ray lies from the two rational endpoint
                directions after the denominators have rescaled the angle.
              </p>
            </div>
          </li>
          <li>
            <span>4</span>
            <div>
              <h4>Solve one increasing scalar equation</h4>
              <p>
                On 0&lt;ρ&lt;1 solve
                ρ<sup>5/2</sup>sin(π/4)+ρ<sup>3</sup>sin(π/8)=sin(3π/8).
                Both powers increase with ρ, so the left side is strictly
                increasing. Bisection therefore cannot select the wrong root.
              </p>
              <p className="proof-chapter-check">
                <strong>Verified manuscript value.</strong>{" "}
                ρ=0.940100221928822853… . The downloadable routine performs
                ninety bisection updates; in exact
                arithmetic the bracket would then have width 2<sup>−90</sup>.
                In the browser, ordinary IEEE-754 double precision limits the
                trustworthy decimal accuracy to roughly fifteen digits, which
                is the tolerance used by the regression test.
              </p>
            </div>
          </li>
          <li>
            <span>5</span>
            <div>
              <h4>Recover the boundary point and coefficients α, β</h4>
              <p>
                Using the manuscript’s higher-precision radius gives
                α=0.655850787368397414… and
                β=1−α=0.344149212631602586… . The boundary point is
                λ=ρe<sup>3πi/4</sup>=−0.664751241920849+
                0.664751241920849<i>i</i> and satisfies
                (λ<sup>3</sup>−β)<sup>2</sup>=α<sup>2</sup>λ.
              </p>
            </div>
          </li>
          <li>
            <span>6</span>
            <div>
              <h4>Realize the point by a stochastic matrix</h4>
              <p>
                Topic XI’s sparse stochastic realization gives a six-state
                active block. Adding one absorbing state pads it to order
                seven. The cycle-cover expansion factors its characteristic
                polynomial as (t−1)((t<sup>3</sup>−β)<sup>2</sup>−α
                <sup>2</sup>t), so λ is verified directly as an eigenvalue.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="topic-i-textbook proof-chapter-group topic-xiv-code">
        <header>
          <div>
            <p className="section-label">3 · Reproducible extraction</p>
            <h3>The code is part of the mathematical record</h3>
          </div>
          <div>
            <p>
              The downloadable module uses integer Farey arithmetic and a
              fixed ninety-step bisection. It has no external dependencies and
              includes the exceptional real segment at order three.
            </p>
          </div>
        </header>
        <div className="topic-xiv-code-ledger">
          <div>
            <span>Exact</span>
            <p>Reduced fractions, neighbour tests, denominator ordering, d, e, endpoint angles, and the symbolic roots of unity they name.</p>
          </div>
          <div>
            <span>Numerical</span>
            <p>Interior radii, complex coordinates, finite sampling, and the coordinates used by the SVG polyline.</p>
          </div>
          <div>
            <span>Regression check</span>
            <p>The implementation reproduces the manuscript’s x=3/8 radius within 10<sup>−15</sup>, the stated browser double-precision tolerance.</p>
          </div>
        </div>
        <p className="topic-xiv-download">
          <a href={sitePath("/code/karpelevic-boundary.js")} download>
            Download the dependency-free boundary generator
          </a>
        </p>
        <p>
          The public functions reject fractional, non-finite, or nonpositive
          orders and sampling counts. Farey cross-products are exact throughout
          the module’s declared safe-integer order range; the browser widget
          deliberately stays in the practical range 1–40.
        </p>
      </section>

      <BoundaryExplorer />
    </>
  );
}
