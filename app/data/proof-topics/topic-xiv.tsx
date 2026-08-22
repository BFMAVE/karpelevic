import { BoundaryExplorer } from "../../components/proof/BoundaryExplorer";
import { OrderSevenBoundaryFigure } from "../../components/proof/OrderSevenBoundaryFigure";
import { ProofDependencyContract } from "../../components/proof/ProofDependencyContract";
import { sitePath } from "../../lib/site-path";
import { partIIOrderSevenHtml } from "../part-ii-content.generated";
import { isProofTopicAvailable } from "../proof-reader";

const manuscriptHtml = partIIOrderSevenHtml
  .replaceAll("<h1", "<h3")
  .replaceAll("</h1>", "</h3>")
  .replaceAll("<h2", "<h4")
  .replaceAll("</h2>", "</h4>")
  .replace(
    /<h4 id="the-order-seven-region">[\s\S]*?<figure id="karp:fig:n7-region"[\s\S]*?<\/figure>/,
    "",
  );

const orderSevenIntervals = [
  { left: "0/1", right: "1/7", q: 1, s: 7, d: 7, e: 0, polynomial: "(z − β)^7 − α^7" },
  { left: "1/7", right: "1/6", q: 6, s: 7, d: 1, e: 1, polynomial: "z(z^6 − β) − α" },
  { left: "1/6", right: "1/5", q: 5, s: 6, d: 1, e: 1, polynomial: "z(z^5 − β) − α" },
  { left: "1/5", right: "1/4", q: 4, s: 5, d: 1, e: 1, polynomial: "z(z^4 − β) − α" },
  { left: "1/4", right: "2/7", q: 4, s: 7, d: 1, e: 3, polynomial: "z^3(z^4 − β) − α" },
  { left: "2/7", right: "1/3", q: 3, s: 7, d: 2, e: 1, polynomial: "z(z^3 − β)^2 − α^2" },
  { left: "1/3", right: "2/5", q: 3, s: 5, d: 2, e: -1, polynomial: "(z^3 − β)^2 − α^2z" },
  { left: "2/5", right: "3/7", q: 5, s: 7, d: 1, e: 2, polynomial: "z^2(z^5 − β) − α" },
  { left: "3/7", right: "1/2", q: 2, s: 7, d: 3, e: 1, polynomial: "z(z^2 − β)^3 − α^3" },
] as const;

export function TopicXIVContent() {
  return (
    <>
      <ProofDependencyContract
        imported={[
          {
            label: "Topic IX · Farey intervals and the equation for the modulus",
            href: sitePath("/proof/topic-ix/"),
            explanation:
              "supplies the Farey-pair data, the exact scalar equation with its existence-and-uniqueness proof, and the fixed-iteration bisection algorithm.",
          },
          {
            label: "Topic XI · Sparse stochastic realization",
            href: sitePath("/proof/topic-xi/"),
            explanation:
              "turns a reduced Ito polynomial into an explicit row-stochastic matrix that has the selected boundary point as an eigenvalue.",
          },
          {
            label: isProofTopicAvailable(13)
              ? "Topic XIII · Karpelevič theorem in Ito’s formulation"
              : "Manuscript Topic XIII · Karpelevič theorem in Ito’s formulation",
            href: isProofTopicAvailable(13)
              ? sitePath("/proof/topic-xiii/")
              : undefined,
            explanation:
              "identifies the union of the parametrized Karpelevič arcs with the complete boundary of the stochastic eigenvalue region.",
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
        provedHeading="Computed and checked here"
        provedHere={
          <p>
            No new theorem is needed. This page lists all order-seven data,
            recomputes the direction <i>x</i>=3/8 independently, publishes the
            implementation and its regression tests, and presents the same
            exact Farey arithmetic and numerical modulus calculation in an
            interactive plot.
          </p>
        }
      />

      <section className="topic-i-textbook proof-chapter-group topic-xiv-atlas">
        <header>
          <div>
            <p className="section-label">1 · The complete order-seven Farey table</p>
            <h3>Nine Farey intervals cover 0≤x≤1/2</h3>
          </div>
          <div>
            <p>
              For <i>n</i>≥1, Θ<sub>n</sub> is the set of eigenvalues of all{" "}
              <i>n</i>×<i>n</i> row-stochastic matrices: matrices with
              nonnegative entries whose rows each sum to one.
            </p>
            <p>
              Let <i>u</i>/<i>v</i>&lt;<i>w</i>/<i>y</i> be consecutive Farey
              fractions of order <i>n</i>. Relabel the endpoints as{" "}
              <i>p</i>/<i>q</i> and <i>r</i>/<i>s</i> so that <i>q</i>&lt;<i>s</i>.
              This is denominator order and need not agree with left-to-right
              order. Put <i>d</i>=⌊<i>n</i>/<i>q</i>⌋,{" "}
              <i>e</i>=<i>s</i>−<i>dq</i>.
            </p>
            <p>
              For an argument <i>x</i> strictly between the two endpoints, set{" "}
              <i>A</i>=2π|<i>qx</i>−<i>p</i>| and{" "}
              <i>B</i>=(2π/<i>d</i>)|<i>sx</i>−<i>r</i>|. The modulus ρ is the
              unique number in (0,1) satisfying ρ<sup>s/d</sup>sin <i>A</i>
              +ρ<sup>q</sup>sin <i>B</i>=sin(<i>A</i>+<i>B</i>). Define{" "}
              α=ρ<sup>s/d</sup>sin <i>A</i>/sin(<i>A</i>+<i>B</i>) and{" "}
              β=ρ<sup>q</sup>sin <i>B</i>/sin(<i>A</i>+<i>B</i>); then α+β=1
              and λ=ρe<sup>2πix</sup> is the corresponding boundary point.
            </p>
            <p>
              After clearing a possible negative power of <i>z</i>, every
              interval has the reduced Ito polynomial{" "}
              <i>P</i><sub>α</sub>(<i>z</i>)=<i>z</i><sup>max(e,0)</sup>
              (<i>z</i><sup>q</sup>−β)<sup>d</sup>−α<sup>d</sup>
              <i>z</i><sup>max(−e,0)</sup>. Within one open interval the
              integers <i>p,q,r,s,d,e</i> remain fixed; the angular gaps{" "}
              <i>A,B</i>, modulus ρ, coefficients α,β, and boundary point λ
              vary smoothly with <i>x</i>.
            </p>
          </div>
        </header>

        <div className="topic-xiv-table-wrap">
          <table className="topic-xiv-interval-table">
            <caption>
              All consecutive Farey pairs for order seven in 0≤x≤1/2, with
              denominator-ordered data and the resulting reduced Ito polynomial.
            </caption>
            <thead>
              <tr>
                <th scope="col">Farey pair</th>
                <th scope="col">(q,s)</th>
                <th scope="col">d</th>
                <th scope="col">e</th>
                <th scope="col">Reduced Ito polynomial</th>
              </tr>
            </thead>
            <tbody>
              {orderSevenIntervals.map((interval) => (
                <tr key={interval.left + "-" + interval.right}>
                  <th scope="row">{interval.left} → {interval.right}</th>
                  <td>({interval.q},{interval.s})</td>
                  <td>{interval.d}</td>
                  <td>{interval.e < 0 ? "−" + Math.abs(interval.e) : interval.e}</td>
                  <td><code>{interval.polynomial}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <details className="proof-topic-overview topic-xiv-manuscript">
          <summary>
            <span>Complete manuscript section</span>
            Open the manuscript’s order-seven table, worked direction, matrix,
            and formulas
          </summary>
          <div
            className="part-i-manuscript topic-xiv-manuscript-body"
            dangerouslySetInnerHTML={{ __html: manuscriptHtml }}
          />
        </details>
        <OrderSevenBoundaryFigure />
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
              solve. Every fraction, determinant, and exponent below is exact;
              only the decimal radius, coefficients, and complex coordinates
              are approximations.
            </p>
          </div>
        </header>

        <ol className="topic-xiv-worked-steps">
          <li>
            <span>1</span>
            <div>
              <h4>Locate the Farey interval</h4>
              <p>
                Since 1/3&lt;3/8&lt;2/5, the argument belongs to the interval with
                denominator-ordered data <i>q</i>=3 and <i>s</i>=5. The
                determinant check 3·2−1·5=1 confirms that the endpoints are
                Farey neighbours.
              </p>
            </div>
          </li>
          <li>
            <span>2</span>
            <div>
              <h4>Compute and clear the exponent</h4>
              <p>
                The order is <i>n</i>=7, so <i>d</i>=⌊7/3⌋=2 and{" "}
                <i>e</i>=5−2·3=−1. For <i>z</i>≠0 the corresponding Laurent
                equation is <i>z</i><sup>−1</sup>(<i>z</i><sup>3</sup>−β)
                <sup>2</sup>=α<sup>2</sup>. Multiplication by <i>z</i> removes
                the negative power and gives (<i>z</i><sup>3</sup>−β)
                <sup>2</sup>−α<sup>2</sup><i>z</i>=0.
              </p>
            </div>
          </li>
          <li>
            <span>3</span>
            <div>
              <h4>Measure the angular gaps</h4>
              <p>
                With <i>p</i>=1, <i>q</i>=3, <i>r</i>=2, <i>s</i>=5, and{" "}
                <i>d</i>=2, the definitions give{" "}
                <i>A</i>=2π|3·(3/8)−1|=π/4 and{" "}
                <i>B</i>=π|5·(3/8)−2|=π/8.
              </p>
            </div>
          </li>
          <li>
            <span>4</span>
            <div>
              <h4>Prove that the scalar equation has one root</h4>
              <p>
                Let <i>g</i>(ρ)=ρ<sup>5/2</sup>sin(π/4)+ρ<sup>3</sup>
                sin(π/8)−sin(3π/8). Then <i>g</i>(0)&lt;0&lt;<i>g</i>(1), while{" "}
                <i>g</i>′(ρ)=(5/2)ρ<sup>3/2</sup>sin(π/4)+3ρ<sup>2</sup>
                sin(π/8)&gt;0 for 0&lt;ρ&lt;1. The intermediate value theorem
                gives existence and strict monotonicity gives uniqueness.
                Bisection on [0,1] therefore converges to this root.
              </p>
              <p className="proof-chapter-check">
                <strong>Numerical check against the manuscript.</strong>{" "}
                ρ=0.940100221928822853… . The downloadable routine performs
                ninety bisection updates; in exact arithmetic the bracket
                would then have width 2<sup>−90</sup>. In the browser,
                IEEE-754 double precision limits trustworthy decimal accuracy
                to roughly fifteen digits, which is the regression tolerance.
              </p>
            </div>
          </li>
          <li>
            <span>5</span>
            <div>
              <h4>Recover α, β, and the boundary point</h4>
              <p>
                Define α=ρ<sup>5/2</sup>sin(π/4)/sin(3π/8) and
                β=ρ<sup>3</sup>sin(π/8)/sin(3π/8). The scalar equation gives
                α+β=1. Numerically, α=0.655850787368397414… and
                β=0.344149212631602586… .
              </p>
              <p>
                Since 2π<i>x</i>=3π/4, λ=ρe<sup>3πi/4</sup>
                =−0.664751241920848908…+0.664751241920848908…<i>i</i>.
                Substitution gives (λ<sup>3</sup>−β)<sup>2</sup>
                =α<sup>2</sup>λ.
              </p>
            </div>
          </li>
          <li>
            <span>6</span>
            <div>
              <h4>Realize the point by a stochastic matrix</h4>
              <p>
                Topic XI’s construction gives a 6×6 row-stochastic matrix. Its
                direct sum with the 1×1 matrix [1] is row-stochastic of order
                seven. A direct determinant calculation gives the
                characteristic polynomial (t−1)((t<sup>3</sup>−β)<sup>2</sup>
                −α<sup>2</sup>t), so substitution confirms that λ is an
                eigenvalue.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="topic-i-textbook proof-chapter-group topic-xiv-code">
        <header>
          <div>
            <p className="section-label">3 · Reproducible computation</p>
            <h3>Source and regression tests</h3>
          </div>
          <div>
            <p>
              The dependency-free module uses integer Farey arithmetic and a
              fixed ninety-step bisection. Its public helper validates that an
              input pair is consecutive in the Farey sequence of the supplied
              order, and the implementation includes the exceptional
              order-three real segment.
            </p>
          </div>
        </header>
        <div className="topic-xiv-code-ledger">
          <div>
            <span>Exact combinatorial data</span>
            <p>Reduced fractions, Farey-neighbour tests, denominator ordering, d, e, and rational endpoint arguments.</p>
          </div>
          <div>
            <span>Floating-point data</span>
            <p>Trigonometric values, interior radii, complex coordinates, finite sampling, and SVG coordinates.</p>
          </div>
          <div>
            <span>Regression check</span>
            <p>The published test reproduces the x=3/8 radius within 10<sup>−15</sup> and checks the reduced polynomial residual.</p>
          </div>
        </div>
        <nav className="topic-xiv-download" aria-label="Boundary generator source files">
          <a href={sitePath("/code/karpelevic-boundary.js")} download>
            Download source module
          </a>
          <a href={sitePath("/code/karpelevic-boundary.test.mjs")} download>
            Download regression tests
          </a>
          <a href="https://github.com/BFMAVE/karpelevic/blob/main/code/karpelevic-boundary.js">
            View source on GitHub
          </a>
          <a href="https://github.com/BFMAVE/karpelevic/blob/main/code/karpelevic-boundary.test.mjs">
            View tests on GitHub
          </a>
        </nav>
        <p>
          The exported safe-integer limit states when Farey cross-products
          remain exactly representable in JavaScript; it is not a practical
          runtime promise. The browser plot deliberately accepts only integer
          orders from 1 through 40.
        </p>
      </section>

      <BoundaryExplorer />
    </>
  );
}
