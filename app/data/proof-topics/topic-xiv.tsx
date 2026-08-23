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
  )
  .replaceAll(
    'href="#karp:lem:cycle-cover"',
    `href="${sitePath("/proof/topic-xi/#karp:lem:cycle-cover")}"`,
  );

const orderSevenIntervals = [
  { left: "0/1", right: "1/7", p: 0, q: 1, r: 1, s: 7, d: 7, e: 0, polynomial: "(z − β)^7 − α^7" },
  { left: "1/7", right: "1/6", p: 1, q: 6, r: 1, s: 7, d: 1, e: 1, polynomial: "z(z^6 − β) − α" },
  { left: "1/6", right: "1/5", p: 1, q: 5, r: 1, s: 6, d: 1, e: 1, polynomial: "z(z^5 − β) − α" },
  { left: "1/5", right: "1/4", p: 1, q: 4, r: 1, s: 5, d: 1, e: 1, polynomial: "z(z^4 − β) − α" },
  { left: "1/4", right: "2/7", p: 1, q: 4, r: 2, s: 7, d: 1, e: 3, polynomial: "z^3(z^4 − β) − α" },
  { left: "2/7", right: "1/3", p: 1, q: 3, r: 2, s: 7, d: 2, e: 1, polynomial: "z(z^3 − β)^2 − α^2" },
  { left: "1/3", right: "2/5", p: 1, q: 3, r: 2, s: 5, d: 2, e: -1, polynomial: "(z^3 − β)^2 − α^2z" },
  { left: "2/5", right: "3/7", p: 2, q: 5, r: 3, s: 7, d: 1, e: 2, polynomial: "z^2(z^5 − β) − α" },
  { left: "3/7", right: "1/2", p: 1, q: 2, r: 3, s: 7, d: 3, e: 1, polynomial: "z(z^2 − β)^3 − α^3" },
] as const;

export function TopicXIVContent() {
  return (
    <>
      <ProofDependencyContract
        imported={[
          {
            label: "Topic IX · Candidate curves from the Ito equation on Farey intervals",
            href: sitePath("/proof/topic-ix/"),
            explanation:
              "supplies the Farey-pair data, the exact scalar equation with its existence-and-uniqueness proof, and the bisection algorithm used for the numerical approximation.",
          },
          {
            label: "Topic XI · Explicit stochastic realization of the candidate curve",
            href: sitePath("/proof/topic-xi/"),
            explanation:
              "turns a reduced Ito polynomial into an explicit row-stochastic matrix that has the selected boundary point as an eigenvalue.",
          },
          {
            label: isProofTopicAvailable(13)
              ? "Topic XIII · The Karpelevič theorem in Ito’s formulation"
              : "Manuscript Topic XIII · The Karpelevič theorem in Ito’s formulation",
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
              "the elementary root-finding method that repeatedly halves an interval on which a continuous function changes sign. In IEEE 754 binary64 double-precision arithmetic, the implementation stops when the midpoint can no longer refine its bracket.",
          },
          {
            label: "Complex polar coordinates",
            explanation:
              "the identity λ=ρe^{2πix}, where ρ is the modulus and x is the normalized angular parameter; the angle in radians is 2πx.",
          },
        ]}
        provedHeading="Calculations and numerical verification"
        provedHere={
          <p>
            No new theorem is needed. This page lists all order-seven data,
            recomputes the value <i>x</i>=3/8 independently, publishes the
            implementation and its regression tests, and presents the same
            exact Farey arithmetic and numerical modulus calculation in an
            interactive plot.
          </p>
        }
      />

      <section className="topic-i-textbook proof-chapter-group topic-xiv-overview">
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
              Orders one and two have the exact descriptions Θ<sub>1</sub>={"{"}1{"}"}{" "}
              and Θ<sub>2</sub>=[−1,1]. For the construction from the Ito
              polynomial associated with consecutive Farey fractions below,
              assume <i>n</i>≥3. Retain <i>F</i><sub>n</sub> for the increasing
              sequence of reduced fractions <i>a</i>/<i>b</i>∈[0,1] with
              1≤<i>b</i>≤<i>n</i>. Reduced fractions <i>a</i>/<i>b</i>
              &lt;<i>c</i>/<i>k</i> are consecutive in <i>F</i><sub>n</sub>{" "}
              exactly when <i>bc</i>−<i>ak</i>=1 and <i>b</i>+<i>k</i>&gt;<i>n</i>.
              Write <i>F</i><sub>n</sub><sup>+</sup>=<i>F</i><sub>n</sub>∩[0,1/2].
            </p>
            <p>
              Let <i>f</i>&lt;<i>g</i> be consecutive elements of <i>F</i><sub>n</sub>
              {" "}in [0,1/2]. Relabel them, if necessary, as <i>p</i>/<i>q</i>{" "}and
              <i>r</i>/<i>s</i> so that <i>q</i>&lt;<i>s</i>; this need not agree
              with their left-to-right order. Put <i>d</i>=⌊<i>n</i>/<i>q</i>⌋
              and <i>e</i>=<i>s</i>−<i>dq</i>.
            </p>
            <p>
              For the normalized angular parameter <i>x</i>∈(<i>f</i>,<i>g</i>),
              write λ=ρe<sup>2πix</sup>, so arg λ=2π<i>x</i> modulo 2π. Set{" "}
              <i>A</i>=2π|<i>qx</i>−<i>p</i>| and{" "}
              <i>B</i>=(2π/<i>d</i>)|<i>sx</i>−<i>r</i>|. The modulus ρ is the
              unique number in (0,1) satisfying ρ<sup>s/d</sup>sin <i>A</i>
              +ρ<sup>q</sup>sin <i>B</i>=sin(<i>A</i>+<i>B</i>). Define{" "}
              α=ρ<sup>s/d</sup>sin <i>A</i>/sin(<i>A</i>+<i>B</i>) and{" "}
              β=ρ<sup>q</sup>sin <i>B</i>/sin(<i>A</i>+<i>B</i>); then
              0&lt;α&lt;1, 0&lt;β&lt;1, and α+β=1.{" "}
              By Topic XIII, λ=ρe<sup>2πix</sup> lies on ∂Θ<sub>n</sub>.
            </p>
            <p>
              Moving the two sides of the Ito equation together gives{" "}
              <i>z</i><sup>s</sup>(<i>z</i><sup>q</sup>−β)<sup>d</sup>
              −α<sup>d</sup><i>z</i><sup>dq</sup>. Removing its common factor{" "}
              <i>z</i><sup>min(s,dq)</sup> gives the reduced Ito polynomial{" "}
              <i>P</i><sub>α</sub>(<i>z</i>)=<i>z</i><sup>max(e,0)</sup>
              (<i>z</i><sup>q</sup>−β)<sup>d</sup>−α<sup>d</sup>
              <i>z</i><sup>max(−e,0)</sup>. Within one open interval the
              integers <i>p,q,r,s,d,e</i> remain fixed; the angles{" "}
              <i>A</i> and <i>B</i>, modulus ρ, coefficients α,β, and boundary point λ
              vary smoothly with <i>x</i>.
            </p>
          </div>
        </header>

        <div className="topic-xiv-table-wrap">
          <table className="topic-xiv-interval-table">
            <caption>
              All consecutive Farey pairs for order seven in 0≤x≤1/2, with
              the endpoints relabelled so that q&lt;s and the resulting reduced
              Ito polynomial.
            </caption>
            <thead>
              <tr>
                <th scope="col">Farey pair</th>
                <th scope="col">(p/q,r/s), q&lt;s</th>
                <th scope="col">d</th>
                <th scope="col">e</th>
                <th scope="col">Reduced Ito polynomial</th>
              </tr>
            </thead>
            <tbody>
              {orderSevenIntervals.map((interval) => (
                <tr key={interval.left + "-" + interval.right}>
                  <th scope="row">{interval.left} → {interval.right}</th>
                  <td>({interval.p}/{interval.q},{interval.r}/{interval.s})</td>
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
            Open the manuscript’s order-seven table, worked computation, matrix,
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
            <p className="section-label">2 · Detailed computation</p>
            <h3>The computation at x=3/8</h3>
          </div>
          <div>
            <p>
              This calculation separates the exact choices from numerical
              root-finding. Every fraction, determinant, and exponent below is exact;
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
                The normalized angular parameter satisfies 1/3&lt;3/8&lt;2/5.
                Both endpoint denominators are at most seven, while
                3·2−1·5=1 and 3+5=8&gt;7. These two conditions show
                that 1/3 and 2/5 are consecutive in <i>F</i><sub>7</sub>.
                Relabelling so that <i>q</i>&lt;<i>s</i> gives
                {" "}<i>p</i>/<i>q</i>=1/3 and <i>r</i>/<i>s</i>=2/5.
              </p>
            </div>
          </li>
          <li>
            <span>2</span>
            <div>
              <h4>Compute d and e, then multiply by z</h4>
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
              <h4>Compute A and B</h4>
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
              <h4>Prove existence and uniqueness of ρ∈(0,1)</h4>
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
                A high-precision computation gives ρ=0.940100221928822853… .
                The downloadable binary64 routine reports
                ρ≈0.940100221928823. It requests at most ninety bisection
                updates and stops when the midpoint no longer changes the
                bracket; roughly fifteen significant decimal digits are
                trustworthy in the browser.
              </p>
            </div>
          </li>
          <li>
            <span>5</span>
            <div>
              <h4>Compute α, β, and the boundary point</h4>
              <p>
                Define α=ρ<sup>5/2</sup>sin(π/4)/sin(3π/8) and
                β=ρ<sup>3</sup>sin(π/8)/sin(3π/8). The scalar equation gives
                0&lt;α,β&lt;1 and α+β=1. In binary64 arithmetic,
                α≈0.655850787368397 and β≈0.344149212631603.
              </p>
              <p>
                Since 2π<i>x</i>=3π/4, λ=ρe<sup>3πi/4</sup>
                ≈−0.664751241920849+0.664751241920849<i>i</i>.
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
                Here deg <i>P</i><sub>α</sub>=max{"{"}<i>s</i>,<i>dq</i>{"}"}
                =max{"{"}5,6{"}"}=6, so Topic XI’s construction gives a
                6×6 row-stochastic matrix. Its
                direct sum with the 1×1 matrix [1] is row-stochastic of order
                seven. In the leading block, the cycles 1→2→3→1 and
                4→5→6→4 have entry products β, while 2→3→4→5→6→2 has
                entry product α<sup>2</sup>. The directed-cycle determinant
                expansion gives the
                characteristic polynomial (t−1)((t<sup>3</sup>−β)<sup>2</sup>
                −α<sup>2</sup>t). Since λ satisfies
                (λ<sup>3</sup>−β)<sup>2</sup>=α<sup>2</sup>λ, it follows that
                det(λ<i>I</i>−<i>A</i><sub>7</sub>)=0, so λ is an eigenvalue.
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
              One dependency-free numerical core is used by the React reader,
              the static GitHub Pages controller, the standalone HTML, and the
              downloadable module. It uses integer Farey arithmetic and
              IEEE 754 binary64 double-precision bisection with at most
              ninety updates.
            </p>
          </div>
        </header>
        <div className="topic-xiv-computation-summary">
          <div>
            <span>Exact combinatorial data</span>
            <p>Reduced fractions, tests for consecutive fractions in <i>F</i><sub>n</sub>, relabelling so q&lt;s, d, e, and rational endpoint parameters.</p>
          </div>
          <div>
            <span>Floating-point data</span>
            <p>Trigonometric values, moduli on open Farey intervals, complex coordinates, finite sampling, and SVG coordinates.</p>
          </div>
          <div>
            <span>Regression check</span>
            <p>The published tests cover the complete order-seven table, the direct formulas at x=3/8, the worked matrix and its determinant, exact orders one and two, the distinction at order three between the one-sided branch limit, radial endpoint value, and real segment, bisection brackets and interval residuals, degree bounds, finite angularly ordered plots through order 40, conjugation, and invalid inputs.</p>
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
          The exported safe-integer limit is the largest order for which all
          Farey cross-products remain exactly representable as JavaScript
          integers; it is not a practical runtime promise. The browser plot
          deliberately accepts only integer orders from 1 through 40. The
          function <code>itoArcRadius</code> is defined only for interior
          points of a Farey interval. The function{" "}
          <code>radialBoundaryRadius</code> also handles Farey endpoints and
          returns value 1 there, including x=1/2 at order three. The nonreal
          order-three branch instead has one-sided limiting modulus 1/2 before
          the exact segment [−1,−1/2] is inserted. The older name{" "}
          <code>boundaryRadius</code> remains only as a deprecated
          compatibility alias for <code>radialBoundaryRadius</code>.
        </p>
      </section>

      <BoundaryExplorer />
    </>
  );
}
