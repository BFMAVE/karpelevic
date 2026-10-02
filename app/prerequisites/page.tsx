import { SiteHeader } from "../components/SiteHeader";
import { sitePath } from "../lib/site-path";
import { createPageMetadata } from "../lib/site-metadata";
import { formatDate, getPageTimestamp } from "../lib/git-dates";
import { WeightedAverageFigure } from "../components/proof/WeightedAverageFigure";
import { ReaderLearningRoutes, ReaderMainIdeas } from "../components/proof/ReaderLearningRoutes";
import { ReaderTheoremPreview } from "../components/proof/ReaderTheoremPreview";
import { ReaderFigureFrame } from "../components/proof/ReaderFigureFrame";

export const metadata = createPageMetadata({ title: "Background for the proof reader", description: "Basic analysis and linear algebra reminders, with a map of where the proof teaches its additional tools.", pathname: "/prerequisites/" });
const revised = getPageTimestamp(["app/prerequisites/page.tsx", "app/components/proof/WeightedAverageFigure.tsx", "app/components/proof/ReaderLearningRoutes.tsx", "app/components/proof/ReaderTheoremPreview.tsx", "public/weighted-average.js", "public/reader-learning.js", "app/globals.css"]);
const basics = [
  ["Complex numbers as points", "Write z=x+iy. Its absolute value is its distance from zero. Multiplication by ρeⁱθ rotates through θ and multiplies distances by ρ. Conjugation x−iy reflects in the real axis. Angles are measured in radians.", "Topic I uses this picture to interpret an eigenvector."],
  ["Matrices and eigenvectors", "An eigenvector v is a nonzero column satisfying Av=λv. Similarity S⁻¹AS changes coordinates and preserves eigenvalues. The determinant det(λI−A) vanishes exactly at eigenvalues. In the plane, det(u,v)=u₁v₂−u₂v₁ records signed area and which side of a line a point lies on.", "Topics I–II translate matrices into polygons. Topics IV and X use similarity and determinants."],
  ["Limits and one-variable calculus", "Closed bounded subsets of a finite-dimensional real space are compact: every sequence has a convergent subsequence. Continuous functions pass to limits and attain extrema on compact sets. The intermediate value theorem locates a root; strict monotonicity makes it unique. A positive second derivative gives strict convexity.", "Topic III chooses a minimizing polygon. Topics VIII–IX use monotonicity and convexity; Topic XI uses integration along a line segment."],
];
const introduced = [
  ["I", "Convex combinations, vertices, invariant polygons, and stationary probability rows"],
  ["II", "Irreducibility, positive eigenvectors, supporting lines, and polar polygons"],
  ["III–IV", "Half-open side ownership, the two minimizations, and legal vertex replacement"],
  ["V–VII", "Farey fractions, integer bases, return paths, elementary projective transfers, and continued angles"],
  ["VIII–XII", "Branch selection, Jensen's inequality, realizing graphs, and the boundary comparison"],
  ["XIII", "Polygonal gauges, uniform relative errors, and badly approximable angles"],
];

export default function BackgroundPage() {
  return <>
    <a className="skip-link" href="#main-content">Skip to the background reminders</a>
    <SiteHeader current="proof" />
    <main className="proof-page reader-background" id="main-content" tabIndex={-1}>
      <header><p className="kicker">Start learning</p><h1>Basic analysis and linear algebra are enough to begin</h1><p className="proof-deck">Begin with the theorem&apos;s picture, then choose an overview or the complete proof. The reader teaches its additional tools as they become necessary.</p><p><a href="#reading-routes">Choose a route</a> · <a href="#background-reminders">Refresh the starting tools</a></p></header>
      <div className="reader-guide">
        <ReaderLearningRoutes />
        <ReaderTheoremPreview />
        <ReaderMainIdeas />
        <section id="background-reminders" aria-labelledby="background-reminders-heading"><h2 id="background-reminders-heading">Background reminders</h2>
        {basics.map(([title, explanation, use]) => <section key={title}><h2>{title}</h2><p>{explanation}</p><p>{use}</p></section>)}
        <h2>The first estimate, worked out</h2>
        <p>Suppose a matrix row has entries a₁, …, aₙ ≥ 0 with a₁ + ⋯ + aₙ = 1. Multiplying it by a column with complex coordinates v₁, …, vₙ gives the average a₁v₁ + ⋯ + aₙvₙ. The triangle inequality gives</p>
        <p className="reader-basic-estimate">|a₁v₁ + ⋯ + aₙvₙ| ≤ a₁|v₁| + ⋯ + aₙ|vₙ| ≤ maxⱼ |vⱼ|.</p>
        <p>The last step uses the sum of the weights: replacing each |vⱼ| by the largest one leaves that largest value multiplied by 1. If Av = λv, apply this bound to a coordinate of v with largest absolute value. It is nonzero, so dividing gives |λ| ≤ 1. The proof starts by asking what the geometry of these averages tells us beyond this disk bound.</p>
        <div id="weighted-average"><ReaderFigureFrame><WeightedAverageFigure /></ReaderFigureFrame></div>
        <h2>The tools taught inside the topics</h2>
        <dl>{introduced.map(([topic, tools]) => <div key={topic}><dt><strong>Topic {topic}</strong></dt><dd>{tools}</dd></div>)}</dl>
        <h2>A route through the argument</h2>
        <ol className="reader-proof-route">
          <li><a href={sitePath("/proof/")}>I–II: turn an eigenvector into a polygon.</a> Convex combinations become geometric containment; boundary contacts identify the constraints that cannot be relaxed.</li>
          <li><a href={sitePath("/proof/topic-iii/")}>III–VI: simplify the polygon and organise its returns.</a> Minimisation fixes the contact pattern. Integer arithmetic organises the first returns; projections prevent one from skipping an intervening base in the polygon&apos;s cyclic order.</li>
          <li><a href={sitePath("/proof/topic-vii/")}>VII–IX: turn the return paths into one scalar bound.</a> Track the actual angle winding, then use a calculus inequality to compare unequal factors with equal ones.</li>
          <li><a href={sitePath("/proof/topic-x/")}>X–XII: attain the bound and identify the boundary.</a> Construct stochastic matrices, compare successive orders, and close the two inequalities.</li>
        </ol>
        <p>The main theorem is complete at the end of Topic XII. Continue to <a href={sitePath("/proof/topic-xiv/")}>XIV&apos;s worked example and interactive boundary plot</a>, then explore <a href={sitePath("/proof/topic-xiii/")}>XIII&apos;s optional applications and asymptotics</a>.</p>
        <p><a href={sitePath("/proof/")}>Begin Topic I: from stochastic matrices to invariant polygons</a></p>
        </section>
      </div>
    </main>
    <footer className="site-footer"><div className="footer-meta"><time dateTime="2026-07-29">First published 29 July 2026.</time><time dateTime={revised}>Last revised {formatDate(revised)}.</time><time dateTime="2026-07-28">Website online since 28 July 2026.</time></div></footer>
    <script src={sitePath("/weighted-average.js")} defer />
    <script src={sitePath("/reader-learning.js")} defer />
  </>;
}
