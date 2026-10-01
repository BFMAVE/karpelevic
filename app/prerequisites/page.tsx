import { primaryNavigation } from "../data/home";
import { sitePath } from "../lib/site-path";
import { createPageMetadata } from "../lib/site-metadata";
import { formatDate, getPageTimestamp } from "../lib/git-dates";

export const metadata = createPageMetadata({ title: "Background for the proof reader", description: "Basic analysis and linear algebra reminders, with a map of where the proof teaches its additional tools.", pathname: "/prerequisites/" });
const revised = getPageTimestamp("app/prerequisites/page.tsx");
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
    <header className="site-header" id="top"><div className="masthead"><a className="site-identity" href={sitePath("/")}><span className="site-monogram" aria-hidden="true">Θ</span><span><strong>Critical Invariant Polygons</strong><small>A companion to the manuscript</small></span></a></div><nav className="primary-navigation" aria-label="Primary navigation">{primaryNavigation.map((item) => <a key={item.href} href={sitePath(item.href)}>{item.label}</a>)}</nav></header>
    <main className="proof-page" id="main-content" tabIndex={-1}>
      <header className="proof-hero"><div><p className="kicker">Before Topic I</p><h1>Basic analysis and linear algebra are enough to begin</h1></div><p className="proof-deck">The reader introduces its additional tools when they become necessary. You do not need previous courses in probability, number theory, or projective geometry. The proof takes sustained work; these reminders show where to start.</p></header>
      <div className="reader-guide">{basics.map(([title, explanation, use]) => <section key={title}><h2>{title}</h2><p>{explanation}</p><p>{use}</p></section>)}<h2>The tools taught inside the topics</h2><dl>{introduced.map(([topic, tools]) => <div key={topic}><dt><strong>Topic {topic}</strong></dt><dd>{tools}</dd></div>)}</dl><h2>A quick starting check</h2><p>If a row has nonnegative entries summing to one, its product with a column is a weighted average of that column&apos;s coordinates. If you can explain why the absolute value of that average is at most the largest coordinate absolute value, you have the first estimate needed in Topic I.</p><p><a href={sitePath("/proof/")}>Begin Topic I: from stochastic matrices to invariant polygons</a></p></div>
    </main>
    <footer className="site-footer"><div className="footer-meta"><time dateTime="2026-07-29">First published 29 July 2026.</time><time dateTime={revised}>Last revised {formatDate(revised)}.</time><time dateTime="2026-07-28">Website online since 28 July 2026.</time></div></footer>
  </>;
}
