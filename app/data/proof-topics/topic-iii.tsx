import { ProofDependencyContract } from "../../components/proof/ProofDependencyContract";
import { ProofResultGroup } from "../../components/proof/ProofResultGroup";
import type { ProofResultData } from "../../components/proof/ProofResult";
import { OwnershipMutationFigure } from "../../components/proof/figures/OwnershipMutationFigures";
import {
  partIHtmlByTopic,
  topicIIIHtmlByItem,
} from "../part-i-content.generated";
import { sitePath } from "../../lib/site-path";

type TopicIIIItem = keyof typeof topicIIIHtmlByItem;
type PartISection = keyof typeof partIHtmlByTopic;

const crossTopicLinks: Readonly<Record<string, string>> = {
  "lem:oriented-boundary-order": sitePath("/proof/#lem:oriented-boundary-order"),
  "lem:strict-separation": sitePath("/proof/#lem:strict-separation"),
  "lem:triple-sign-criterion": sitePath("/proof/topic-ii/#lem:triple-sign-criterion"),
  "thm:hereditary-saturation": sitePath("/proof/topic-ii/#thm:hereditary-saturation"),
};

function repairCrossTopicLinks(html: string): string {
  const withoutUnpublishedLink = html.replace(
    /<a\b[^>]*href="#lem:contact-surgery"[^>]*>[\s\S]*?<\/a>/g,
    '<span class="proof-forthcoming-reference">Topic IV, forthcoming</span>',
  );
  return withoutUnpublishedLink.replace(/href="#([^"]+)"/g, (match, id: string) => {
    const href = crossTopicLinks[id];
    return href ? `href="${href}"` : match;
  });
}

function proofBlockEnd(html: string, proofStart: number): number {
  const divToken = /<div\b[^>]*>|<\/div>/g;
  divToken.lastIndex = proofStart;
  let depth = 0;
  let token: RegExpExecArray | null;
  while ((token = divToken.exec(html)) !== null) {
    if (token[0].startsWith("</")) {
      depth -= 1;
      if (depth === 0) return divToken.lastIndex;
    } else {
      depth += 1;
    }
  }
  return -1;
}

function completeHtml(item: TopicIIIItem, section: PartISection, id: string): string {
  const statement = topicIIIHtmlByItem[item];
  const sectionHtml = partIHtmlByTopic[section];
  const resultStart = sectionHtml.indexOf(`id="${id}"`);
  if (resultStart < 0) return repairCrossTopicLinks(statement);
  const nextResult = sectionHtml.indexOf('\n<div id="', resultStart + id.length);
  const proofStart = sectionHtml.indexOf('<div class="proof">', resultStart);
  if (proofStart < 0 || (nextResult >= 0 && proofStart > nextResult)) {
    return repairCrossTopicLinks(statement);
  }
  const proofEnd = proofBlockEnd(sectionHtml, proofStart);
  const complete = proofEnd < 0
    ? statement
    : statement + sectionHtml.slice(proofStart, proofEnd);
  return repairCrossTopicLinks(complete);
}

const commonSources = {
  convex: ["standard-convexity"] as const,
  swift: ["swift-1972"] as const,
  dmitrievSwift: ["dmitriev-dynkin-1946", "swift-1972"] as const,
  analysis: ["rudin-principles", "rudin-real-complex"] as const,
};

const localResults: readonly ProofResultData[] = [
  {
    id: "part-i-item-19",
    label: "Definition 4.2",
    kind: "Definition",
    title: "Assignment to half-open sides",
    purpose: "Define which one of the two incident sides receives a boundary point that is exactly a polygon vertex.",
    manuscriptHtml: completeHtml("19", "ownership", "def:ownership-word"),
    vocabulary: [
      {
        term: "Side index i",
        definition: <>The index <i>i</i> labels the side <i>E</i><sub>i</sub>=[<i>x</i><sub>i−1</sub>,<i>x</i><sub>i</sub>]. All vertex and side indices are read modulo <i>N</i>, so an index that passes <i>N−1</i> continues again at 0.</>,
      },
      {
        term: "Incoming side",
        definition: <>At vertex <i>x</i><sub>i</sub>, side <i>E</i><sub>i</sub> arrives when the boundary is traversed positively; <i>E</i><sub>i+1</sub> leaves.</>,
      },
      {
        term: "Half-open side",
        definition: <><span>(x<sub>i−1</sub>,x<sub>i</sub>]</span> excludes its left endpoint and includes its right endpoint.</>,
        example: <>Two closed sides share <i>x</i><sub>i</sub>. Their half-open versions do not: the incoming side includes it and the outgoing side excludes it.</>,
      },
      {
        term: "Assigned to a side",
        definition: <>A point is assigned to side index <i>i</i> precisely when it belongs to <i>E</i><sub>i</sub><sup>+</sup>. This is only the membership statement <i>z</i>∈<i>E</i><sub>i</sub><sup>+</sup>; it introduces no additional geometric relation.</>,
      },
      {
        term: "Image vertex and half-open side assignment",
        definition: <>If <i>Q=λP</i>, an image vertex is a point <i>λx</i><sub>j</sub> obtained from a vertex of <i>P</i>. Assigning that image vertex to side index <i>i</i> means proving <i>λx</i><sub>j</sub>∈<i>E</i><sub>i</sub><sup>+</sup>. Definition 4.2 fixes what happens at an endpoint; it does not yet prove a simultaneous assignment for all image vertices.</>,
      },
    ],
    intuition: <>A point in the relative interior of a side belongs to only that side. At a vertex, two closed sides overlap. Excluding each side’s left endpoint and including its right endpoint removes that overlap everywhere around the boundary.</>,
    figure: <OwnershipMutationFigure kind="half-open" id="topic-iii-half-open-definition" />,
    takeaway: <>This defines a boundary partition only; a simultaneous assignment of all image vertices still has to be proved.</>,
    takeawayLabel: "Key conclusion",
  },
  {
    id: "part-i-item-20",
    label: "Lemma 4.3",
    kind: "Lemma",
    title: "Half-open sides partition the boundary",
    purpose: "Prove that every boundary point belongs to exactly one half-open side and identify which side determinants vanish there.",
    manuscriptHtml: completeHtml("20", "ownership", "lem:half-open-side-atlas"),
    vocabulary: [
      {
        term: "Oriented side determinant",
        definition: <>The value <i>D</i><sub>i</sub>(<i>z</i>) tests on which side of the directed line <i>x</i><sub>i−1</sub>→<i>x</i><sub>i</sub> the point <i>z</i> lies. Positive orientation makes membership in the polygon equivalent to all these values being nonnegative.</>,
      },
      {
        term: "Indices of side lines through z",
        definition: <><span><i>Z</i>(<i>z</i>)=&#123;<i>r</i> : <i>D</i><sub>r</sub>(<i>z</i>)=0&#125;</span> is the set of side indices whose lines contain <i>z</i>. A point in the relative interior of one side gives one index; a vertex gives the two indices of its incident sides.</>,
      },
      {
        term: "Partition",
        definition: <>A family of pairwise disjoint sets whose union is the whole set under discussion.</>,
      },
    ],
    intuition: <>The equations <i>D</i><sub>r</sub>(<i>z</i>)=0 say exactly which side lines pass through <i>z</i>. One vanishing determinant identifies a side-interior point; two adjacent ones identify a vertex. At that vertex, the half-open convention retains only the incoming side.</>,
    provenance: "Classical result",
    sourceIds: [...commonSources.convex, ...commonSources.swift],
    sourceRelation: <>The partition and determinant-zero description follow from the classical irredundant half-plane representation of a convex polygon, as treated in Schneider, Chapter 1, §§1.1 and 1.3. Swift&apos;s translation, Appendix A, p. A-6, records the closed, left-half-open, and right-half-open side conventions.</>,
  },
  {
    id: "part-i-item-21",
    label: "Lemma 4.4",
    kind: "Lemma",
    title: "A boundary convex combination lies on one side",
    purpose: "Show that an interior point of a segment can reach a convex boundary only when the whole segment lies in one boundary face.",
    manuscriptHtml: completeHtml("21", "ownership", "lem:boundary-face-rigidity"),
    vocabulary: [
      { term: "Strict convex combination", definition: <><span>(1−s)A+sB</span> with 0&lt;<i>s</i>&lt;1; it is a point strictly between <i>A</i> and <i>B</i>.</> },
      { term: "Supporting affine functional", definition: <>A nonconstant affine function <i>f</i>(<i>z</i>)=ℓ(<i>z</i>)+<i>b</i>, with ℓ≠0, that is bounded above by <i>c</i> on the polygon and equals <i>c</i> on the touched boundary face.</>, example: <>Imagine parallel level lines moving toward a polygon. The first level line to touch it exposes a vertex or a side.</> },
    ],
    intuition: <>A supporting functional cannot average two values below its maximum and somehow obtain the maximum. Both endpoint values must already be maximal.</>,
    figure: <OwnershipMutationFigure kind="face-rigidity" id="topic-iii-face-rigidity" />,
    provenance: "Classical result",
    sourceIds: commonSources.convex,
    sourceRelation: <>Schneider, Chapter 1, §§1.1 and 1.3, supplies the supporting-hyperplane and exposed-face facts. The displayed argument is their planar polygonal specialization.</>,
  },
  {
    id: "part-i-item-22",
    label: "Lemma 4.5",
    kind: "Lemma",
    title: "Locating the common side from adjacent half-open memberships",
    purpose: "Use two adjacent half-open side memberships to determine the common side and the forced endpoint.",
    manuscriptHtml: completeHtml("22", "ownership", "lem:boundary-segment-locator"),
    intuition: <>The previous lemma gives one common side. The possible vanishing indices for <i>A</i> and <i>B</i> have only <i>j</i> in common, so that side must be <i>E</i><sub>j</sub>. This forces <i>A</i> to be the shared vertex <i>x</i><sub>j−1</sub>.</>,
    provenance: "Classical result",
    sourceIds: commonSources.convex,
    sourceRelation: <>Schneider, Chapter 1, §§1.1 and 1.3, supplies the face structure used here; the conclusion from the two adjacent side labels is the elementary polygonal consequence proved on this page.</>,
  },
  {
    id: "part-i-item-23",
    label: "Lemma 4.6",
    kind: "Lemma",
    title: "Determinant test for side membership and containment",
    purpose: "Replace the containment claim by a finite matrix of oriented determinant inequalities.",
    manuscriptHtml: completeHtml("23", "ownership", "lem:labeled-side-matrix"),
    vocabulary: [
      { term: "Determinant matrix", definition: <>The entry <i>D</i><sub>r,j</sub> tests the selected point <i>η</i><sub>j</sub> against the supporting half-plane of side <i>E</i><sub>r</sub>. Thus row <i>r</i> checks one side inequality and column <i>j</i> checks one point.</> },
      { term: "Bilinearity of the determinant", definition: <>The determinant is linear in each vector separately; therefore its value at a convex combination of points is the same convex combination of their determinant values.</> },
    ],
    intuition: <>If every selected point satisfies every oriented side inequality, all of them lie in the polygon. The prescribed zero in column <i>j</i> simultaneously records its contact with side <i>j</i>.</>,
    provenance: "Classical result",
    sourceIds: commonSources.convex,
    sourceRelation: <>Schneider, Chapter 1, §§1.1 and 1.3, supplies the half-plane and exposed-face facts. The exact cyclic determinant matrix is the planar specialization proved on this page.</>,
  },
  {
    id: "part-i-item-24",
    label: "Lemma 4.7",
    kind: "Lemma",
    title: "Side membership after replacing one vertex",
    purpose: "Check the local half-open side memberships after one vertex is replaced by a point in the relative interior of an adjacent side.",
    manuscriptHtml: completeHtml("24", "ownership", "lem:ownership-surgery-model"),
    intuition: <>After replacing <i>x</i><sub>i</sub> by <i>ξ</i><sub>i</sub>, the new point is the right endpoint of its incoming side and the excluded left endpoint of the next side. The same convention protects the unchanged endpoint at <i>x</i><sub>i+1</sub>.</>,
    figure: <OwnershipMutationFigure kind="replacement" id="topic-iii-vertex-replacement" />,
    proofSteps: [
      { title: "Define the modified polygon", explanation: <>Replace <i>x</i><sub>i</sub> by the chosen point <i>ξ</i><sub>i</sub> in the relative interior of the incoming side, and take the convex hull of the resulting <i>N</i> points.</> },
      { title: "Verify the new boundary", explanation: <>Supporting lines and determinant signs show that all <i>N</i> displayed points remain extreme, in the same cyclic order. Hence the adjacent new sides are [<i>x</i><sub>i−1</sub>,<i>ξ</i><sub>i</sub>] and [<i>ξ</i><sub>i</sub>,<i>x</i><sub>i+1</sub>].</> },
      { title: "Apply the right-half-open convention", explanation: <>Each displayed shared endpoint belongs only to the side arriving there.</> },
    ],
    takeaway: <>Replacing one vertex changes only the two adjacent sides; the half-open endpoint convention determines both local memberships without a global index shift.</>,
    takeawayLabel: "Key conclusion",
  },
];

const clippingResults: readonly ProofResultData[] = [
  {
    id: "part-i-item-25",
    label: "Lemma 4.8",
    kind: "Lemma",
    title: "Clipping along an image edge and bounding the number of vertices",
    purpose: "Cut along a genuine edge of the image polygon while preserving invariance and counting every lost or introduced vertex.",
    manuscriptHtml: completeHtml("25", "mutation", "lem:edge-cap"),
    vocabulary: [
      { term: "Image polygon", definition: <><i>Q=λP</i> is obtained by applying the multiplier to every point of <i>P</i>. Because <i>λ≠0</i>, its vertices correspond bijectively to those of <i>P</i>.</> },
      { term: "Clipped polygon and removed region", definition: <>The line through one edge of <i>Q</i> bounds a closed half-plane <i>H</i><sub>j</sub> containing <i>Q</i>. The clipped polygon is <i>P</i><sub>j</sub>=<i>P</i>∩<i>H</i><sub>j</sub>; the two-dimensional part removed from <i>P</i> is <i>P</i>∖<i>P</i><sub>j</sub>.</> },
      { term: "Positive closed and open boundary arcs", definition: <>For boundary points <i>a</i> and <i>b</i>, the positive closed arc from <i>a</i> to <i>b</i> is the part of ∂<i>P</i> traversed from <i>a</i> to <i>b</i> in the positive orientation, with both endpoints included. Its open arc is obtained by deleting those endpoints.</> },
      { term: "Discarded arc and old-vertex count", definition: <>The discarded closed arc <i>A</i><sub>j</sub> is the boundary path cut off by the image edge, not the two-dimensional removed region. Its open part is <i>A</i><sub>j</sub><sup>∘</sup>, and <i>k</i><sub>j</sub>=#(Ext(<i>P</i>)∩<i>A</i><sub>j</sub>) counts the old vertices on the closed arc.</> },
      { term: "Image edge on a supporting line of P", definition: <>If the line containing an edge of <i>Q</i> also supports <i>P</i>, then <i>P</i> already lies in the retained half-plane and <i>P</i><sub>j</sub>=<i>P</i>; no region is removed.</> },
    ],
    intuition: <>The retained half-plane contains all of <i>Q</i>. Hence it also contains the image of the smaller clipped polygon. To bound the number of vertices, remove the old vertices on the discarded boundary arc and add an edge endpoint only when it was not already a vertex of <i>P</i>.</>,
    figure: <OwnershipMutationFigure kind="clip" id="topic-iii-edge-clip" />,
    proofSteps: [
      { title: "Preserve cyclic order", explanation: <>Multiplication by <i>λ≠0</i> is orientation-preserving because its real determinant is |<i>λ</i>|<sup>2</sup>&gt;0. Because all image vertices lie on ∂<i>P</i>, two consecutive image vertices delimit a boundary arc of <i>P</i> containing no other image vertex.</> },
      { title: "Preserve invariance", explanation: <>From <i>Q⊆P</i><sub>j</sub><i>⊆P</i>, obtain <i>λP</i><sub>j</sub><i>⊆λP=Q⊆P</i><sub>j</sub>.</> },
      { title: "Locate the line endpoints", explanation: <>For a proper cut, the outer polygon has points on both sides of the line. Interior points of its line section are therefore interior to the polygon, so the two boundary image vertices are the section endpoints.</> },
      { title: "Count the remaining vertices", explanation: <>Remove the old vertices on the discarded closed arc and add an edge endpoint only when it was not already an old vertex. The count simplifies to <i>N+2−k</i><sub>j</sub>.</> },
      { title: "Allow collinearity", explanation: <>Deleting any listed point that lies in the interior of a straight boundary segment can only reduce the number of extreme points, which explains the inequality rather than equality.</> },
    ],
    takeaway: <>The clipped polygon is invariant and has at most <i>N+2−k</i><sub>j</sub> vertices.</>,
    takeawayLabel: "Key conclusion",
    provenance: "Previously known",
    sourceIds: commonSources.dmitrievSwift,
    sourceRelation: <>Dmitriev–Dynkin is the primary source for this clipping mechanism. Swift&apos;s English translation, Appendix A, pp. A-8–A-9, Lemma II, gives the polygonal boundary-segment replacement and its vertex count. The endpoint cases are written out explicitly here.</>,
  },
];

const compactnessResults: readonly ProofResultData[] = [
  {
    id: "part-i-item-68",
    label: "Lemma A.4",
    kind: "Lemma",
    title: "Hausdorff limits of finitely generated polygons",
    purpose: "Prove that labelled vertex convergence controls the whole polygon and preserves every closed condition needed by the area minimization.",
    manuscriptHtml: completeHtml("68", "spectra", "lem:polygonal-hausdorff-continuity"),
    vocabulary: [
      { term: "Hausdorff distance", definition: <>The least <i>ε</i> such that every point of either compact set lies within distance <i>ε</i> of the other. Both directions are essential.</>, example: <>A set cannot converge in Hausdorff distance merely by lying near the limit; the limit must also lie near the approximating set.</> },
      { term: "Sequential compactness", definition: <>A set is sequentially compact when every sequence in it has a convergent subsequence whose limit still lies in the set. In finite-dimensional Euclidean space, every closed bounded set—and every finite product of such sets—has this property.</> },
      { term: "Support function", definition: <><i>h</i><sub>K</sub>(<i>u</i>) is the largest value of the linear functional <i>z↦⟨u,z⟩</i> on <i>K</i>.</> },
      { term: "Indicator function", definition: <>The function equal to 1 on a set and 0 outside it; integrating it gives planar area.</> },
      { term: "Dominated convergence theorem", definition: <>If measurable functions converge at almost every point and one integrable function bounds all their absolute values, then their integrals converge to the integral of the limit. Here one fixed disk supplies the bound.</> },
      { term: "Area-zero boundary", definition: <>A finite union of line segments has planar area zero. Consequently, pointwise convergence may fail on a polygon boundary without affecting the area integral.</> },
    ],
    intuition: <>Matching the same convex coefficients in the approximating and limiting vertex lists gives an immediate two-sided distance bound. The deeper point is that interior points eventually stay inside, enabling area convergence.</>,
    figure: <OwnershipMutationFigure kind="hausdorff" id="topic-iii-hausdorff" />,
    proofSteps: [
      { title: "Match convex combinations", explanation: <>Replacing every labelled generator by its limit moves any convex combination by at most the largest generator displacement. Repeat in reverse.</> },
      { title: "Control exterior points", explanation: <>A point outside compact <i>P</i> has positive distance from it, so Hausdorff-near polygons eventually miss that point.</> },
      { title: "Control interior points", explanation: <>An interior disk supplies a fixed positive margin in every support direction. If the point stayed outside an approximating polygon, strict separation would contradict that margin.</> },
      { title: "Pass area to the limit", explanation: <>Indicator functions converge away from the finite union of boundary segments, a set of area zero; dominated convergence applies inside one common disk.</> },
      { title: "Pass invariance and radius", explanation: <>Approximate each limit point by points in the polygons to preserve <i>AP⊆P</i>; maximal radius reduces to the maximum of finitely many generator norms.</> },
    ],
    takeaway: <>Finite vertex convergence is strong enough to produce the limiting polygon and preserve its area, maximal radius, and invariance under the fixed map.</>,
    takeawayLabel: "Key conclusion",
    provenance: "Classical result",
    sourceIds: [...commonSources.convex, ...commonSources.analysis],
    sourceRelation: <>Schneider, Chapter 1, §§1.6–1.7 and Chapter 2, §§2.1 and 2.4, supplies Hausdorff/support-function continuity for convex bodies. Rudin&apos;s <cite>Principles of Mathematical Analysis</cite> supplies the finite-dimensional compactness background, and <cite>Real and Complex Analysis</cite> supplies dominated convergence.</>,
  },
  {
    id: "part-i-item-69",
    label: "Lemma A.5",
    kind: "Lemma",
    title: "Strict area monotonicity",
    purpose: "Show that proper inclusion of two full-dimensional planar convex bodies creates a strictly positive area gain.",
    manuscriptHtml: completeHtml("69", "spectra", "lem:strict-area-monotonicity"),
    vocabulary: [
      { term: "Proper inclusion", definition: <><i>K⊊L</i> means every point of <i>K</i> belongs to <i>L</i>, but at least one point of <i>L</i> is missing from <i>K</i>.</> },
    ],
    intuition: <>Separate one new point of the larger body from the smaller body. Moving a small interior disk toward that point produces a smaller disk of positive area inside the larger body but outside the smaller one.</>,
    proofSteps: [
      { title: "Choose and separate a new point", explanation: <>Take <i>y∈L\K</i> and a functional whose value at <i>y</i> is strictly above its maximum on <i>K</i>.</> },
      { title: "Choose an interior disk", explanation: <>A closed disk inside <i>K</i> has positive width in every direction.</> },
      { title: "Move the disk beyond the support level", explanation: <>For a parameter <i>t</i> sufficiently close to 1, the homothetic image <i>D</i><sub>t</sub>=(1−<i>t</i>)<i>D</i>+<i>t y</i> is a disk of positive area contained in <i>L</i> and strictly beyond the maximum of the separating functional on <i>K</i>.</> },
      { title: "Compare areas", explanation: <>The disk <i>D</i><sub>t</sub> lies in <i>L</i>∖<i>K</i> and has positive area, so the proper inclusion increases area strictly.</> },
    ],
    takeaway: <>A proper convex clip that preserves nonempty interior must reduce area strictly.</>,
    takeawayLabel: "Key conclusion",
    provenance: "Classical result",
    sourceIds: commonSources.convex,
    sourceRelation: <>Schneider, Chapter 1, §§1.1 and 1.3, supplies strict separation and convex-body monotonicity; the proof here exhibits an explicit positive-area disk inside <i>L</i>∖<i>K</i>.</>,
  },
  {
    id: "part-i-item-26",
    label: "Lemma 4.9",
    kind: "Lemma",
    title: "Boundary-arc bound for a least-area normalized polygon",
    purpose: "Choose a least-area normalized invariant N-gon and bound how many old vertices can lie on each discarded boundary arc.",
    manuscriptHtml: completeHtml("26", "mutation", "lem:area-cap-bound"),
    vocabulary: [
      { term: "Unit maximal-radius normalization about the origin", definition: <>Rescale the polygon so <span>max<sub>z∈P</sub>|z|=1</span>. The centre is fixed at the origin; this is not the movable-centre circumradius used elsewhere in geometry. Without a fixed scale, every polygon could be shrunk and “least area” would be meaningless.</> },
      { term: "Area-minimizer", definition: <>A normalized invariant polygon with exactly <i>N</i> vertices whose area is no larger than that of any other normalized invariant polygon with exactly <i>N</i> vertices. Lemma 4.9 proves existence by combining finite-dimensional compactness, the limit properties in Lemma A.4, and continuity of area.</> },
      { term: "Proper cut", definition: <>A clipping for which <i>P</i><sub>j</sub> is a proper subset of <i>P</i>, so a nonempty two-dimensional region is actually removed.</> },
    ],
    intuition: <>If a discarded arc contains three old vertices, clipping produces an invariant polygon with too few vertices. If it contains two, clipping produces a smaller normalized invariant <i>N</i>-gon unless the open arc contains the chosen vertex <i>v</i> with |<i>v</i>|=1.</>,
    figure: <OwnershipMutationFigure kind="area-minimizer" id="topic-iii-area-minimizer" />,
    proofSteps: [
      { title: "Extract a convergent subsequence", explanation: <>Write each polygon as the hull of <i>N</i> points in the closed unit disk, allow repetitions, and take a convergent subsequence of these <i>N</i>-tuples.</> },
      { title: "Preserve the defining conditions", explanation: <>Lemma A.4 preserves the hull, invariance, maximal radius one, and area. A singleton would force <i>λv=v</i>; a segment would require an invariant real direction. Both are impossible for a nonreal contraction.</> },
      { title: "Use criticality at the limit", explanation: <>Fewer than <i>N</i> extreme points would contradict <i>ν</i><sub>poly</sub>(<i>T</i>)=<i>N</i>. Hence the limit is a strict invariant <i>N</i>-gon and attains least area.</> },
      { title: "Exclude arcs with three old vertices", explanation: <>The clipping count would give an invariant polygon with at most <i>N−1</i> vertices, contradicting <i>ν</i><sub>poly</sub>(<i>T</i>)=<i>N</i>.</> },
      { title: "Exclude ordinary two-vertex arcs", explanation: <>If the open discarded arc misses a maximal-radius vertex <i>v</i>, the clipped polygon remains normalized. Criticality forces it to have exactly <i>N</i> vertices, while Lemma A.5 gives it strictly smaller area.</> },
      { title: "Count the sole exception", explanation: <>Because <i>Q</i> lies in the disk of radius |<i>λ</i>|&lt;1, <i>v</i> is not a vertex of <i>Q</i>. The open discarded arcs are pairwise disjoint, so <i>v</i> belongs to at most one of them. Only that arc escapes the area comparison.</> },
    ],
    takeaway: <>Every proper cut discards an arc containing at most two old vertices, and at most one discarded arc can contain two.</>,
    takeawayLabel: "Key conclusion",
    provenance: "Previously known",
    sourceIds: commonSources.dmitrievSwift,
    sourceRelation: <>Dmitriev–Dynkin is the primary source for the minimal-polygon clipping argument; Swift&apos;s English translation, Appendix A, pp. A-8–A-9, Lemma II, gives the discarded-arc vertex count. The normalized least-area existence is supplied self-contained here through compactness and continuity of area; strict area monotonicity is used afterwards to exclude a proper normalized cut.</>,
  },
];

export const topicIIISourceIds = Array.from(
  new Set([...localResults, ...clippingResults, ...compactnessResults].flatMap((result) => result.sourceIds ?? [])),
);

export function TopicIIIChapter() {
  return (
    <>
      <ProofDependencyContract
        importedHeading="Direct dependencies from earlier topics"
        imported={[
          { label: "Definition 1.1", href: sitePath("/proof/#part-i-item-1"), explanation: <>polygonal complexity and radial <i>N</i>-criticality.</> },
          { label: "Definition 1.2", href: sitePath("/proof/#part-i-item-2"), explanation: <>strict polygons, their complete cyclic vertex list, and oriented sides.</> },
          { label: "Lemma 2.6", href: sitePath("/proof/#part-i-item-10"), explanation: <>positive cyclic boundary order agrees with orientation from an interior point.</> },
          { label: "Lemma 2.7", href: sitePath("/proof/topic-ii/#part-i-item-11"), explanation: <>the strict determinant-sign criterion used to prove that the modified list in Lemma 4.7 is exactly the cyclic list of extreme points.</> },
          { label: "Theorem 3.2", href: sitePath("/proof/topic-ii/#part-i-item-16"), explanation: <>for every invariant polygon with at most <i>N</i> vertices, its image intersects every side and every image vertex lies on the outer boundary.</> },
          { label: "Lemma A.2", href: sitePath("/proof/#part-i-item-66"), explanation: <>strict separation, used in the two compactness tools brought forward here.</> },
        ]}
        background={[
          { label: "Finite-dimensional compactness", explanation: <>Heine–Borel and Bolzano–Weierstrass imply that a sequence in a finite product of closed disks has a convergent subsequence; see W. Rudin, <cite>Principles of Mathematical Analysis</cite>, 3rd ed., Chapter 2 (“Basic Topology”).</> },
          { label: "Dominated convergence", explanation: <>the exact form used in Lemma A.4 is defined there; see W. Rudin, <cite>Real and Complex Analysis</cite>, 3rd ed., Chapter 1 (“Abstract Integration”), under the Dominated Convergence Theorem. Convex-body continuity facts are sourced to Schneider in the references below.</> },
        ]}
        provedHere={<p>Definition 4.2, Lemmas 4.3–4.9, and the supporting Appendix Lemmas A.4–A.5. The global interlacing theorem is deliberately not assumed.</p>}
      />

      <ProofResultGroup
        number="III-A · Half-open side assignments"
        title="Assign every boundary point to exactly one side"
        introduction={<p>The half-open sides <i>E</i><sub>i</sub><sup>+</sup>=(<i>x</i><sub>i−1</sub>,<i>x</i><sub>i</sub>] form a disjoint partition of ∂<i>P</i>. Supporting functionals and determinant inequalities then identify the relevant side without introducing another geometric relation. Definition 4.2 and Lemmas 4.3–4.7 form the first strand of this chapter: they prepare the endpoint-order argument in Topic IV and are not used to prove the clipping bound below.</p>}
        results={localResults}
      />
      <ProofResultGroup
        number="III-B · Edge clipping"
        title="Clip along an actual edge of the image polygon"
        introduction={<p>This begins the second strand. The retained half-plane contains the entire image polygon. That single containment preserves invariance and leaves an exact count of the vertices that remain and the possible new endpoints.</p>}
        results={clippingResults}
      />
      <ProofResultGroup
        number="III-C · The least-area invariant polygon"
        title="Existence of a least-area normalized polygon and the boundary-arc bound"
        introduction={<p>The appendix tools are placed where they are needed. Their numbering remains unchanged, and the boundary-arc bound follows only after the existence of a least-area normalized invariant <i>N</i>-gon has been proved.</p>}
        results={compactnessResults}
      />
    </>
  );
}
