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
  "lem:contact-surgery": sitePath("/proof/topic-iv/#lem:contact-surgery"),
};

function repairCrossTopicLinks(html: string): string {
  return html.replace(/href="#([^"]+)"/g, (match, id: string) => {
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
  dmitriev: ["dmitriev-dynkin-1946", "swift-1972"] as const,
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
        definition: <>The index <i>i</i> labels the side <i>E</i><sub>i</sub>=[<i>x</i><sub>i−1</sub>,<i>x</i><sub>i</sub>]. It has no meaning beyond this label.</>,
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
        term: "Vanishing-index set",
        definition: <><span><i>Z</i>(<i>z</i>)=&#123;<i>r</i> : <i>D</i><sub>r</sub>(<i>z</i>)=0&#125;</span> is the set of side indices whose lines contain <i>z</i>. A point in the relative interior of one side gives one index; a vertex gives the two indices of its incident sides.</>,
      },
      {
        term: "Partition",
        definition: <>A family of pairwise disjoint sets whose union is the whole set under discussion.</>,
      },
    ],
    intuition: <>The equations <i>D</i><sub>r</sub>(<i>z</i>)=0 say exactly which side lines pass through <i>z</i>. One vanishing determinant identifies a side-interior point; two adjacent ones identify a vertex. At that vertex, the half-open convention retains only the incoming side.</>,
    proofSteps: [
      { title: "Write the polygon as half-planes", explanation: <>Positive orientation gives <i>D</i><sub>i</sub>(<i>z</i>)≥0 for every point of the polygon.</> },
      { title: "Identify equality faces", explanation: <>Equality in row <i>i</i> cuts out side <i>E</i><sub>i</sub>. A relative-side-interior point lies on no other side line.</> },
      { title: "Count the vertex zeros", explanation: <>Vertex <i>x</i><sub>i</sub> lies precisely on incoming side <i>E</i><sub>i</sub> and outgoing side <i>E</i><sub>i+1</sub>.</> },
      { title: "Apply the endpoint convention", explanation: <>Relative side interiors already do not overlap. Assigning <i>x</i><sub>i</sub> to the incoming side gives coverage without duplication.</> },
    ],
    takeaway: <>Every boundary point belongs to one half-open side, and the vanishing determinants distinguish side-interior points from vertices.</>,
    provenance: "Previously known",
    sourceIds: commonSources.dmitriev,
    sourceRelation: <>The cyclic half-open decomposition is present in the Dmitriev–Dynkin contact argument; this lemma states the partition and the exact vanishing-determinant sets explicitly.</>,
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
      { term: "Supporting affine functional", definition: <>An affine function bounded above by <i>c</i> on the polygon and equal to <i>c</i> on the touched boundary face.</>, example: <>Imagine parallel level lines moving toward a polygon. The first level line to touch it exposes a vertex or a side.</> },
    ],
    intuition: <>A supporting functional cannot average two values below its maximum and somehow obtain the maximum. Both endpoint values must already be maximal.</>,
    figure: <OwnershipMutationFigure kind="face-rigidity" id="topic-iii-face-rigidity" />,
    proofSteps: [
      { title: "Expose the boundary point", explanation: <>Choose <i>f</i>≤<i>c</i> with equality at the displayed strict mixture.</> },
      { title: "Use affinity", explanation: <>The maximum <i>c</i> is a positive weighted average of <i>f</i>(<i>A</i>) and <i>f</i>(<i>B</i>), both at most <i>c</i>.</> },
      { title: "Force equality at both ends", explanation: <>Both endpoint values equal <i>c</i>, so <i>A</i> and <i>B</i> belong to the same exposed face.</> },
      { title: "Recognize the face", explanation: <>Because the endpoints are distinct, that polygon face is a nondegenerate side and contains their full segment.</> },
    ],
    takeaway: <>A strict mixture on the boundary is evidence that both ingredients already lie on one flat face.</>,
    provenance: "Classical result",
    sourceIds: commonSources.convex,
    sourceRelation: <>Schneider, Chapter 1, §§1.1 and 1.3, supplies the supporting-hyperplane and exposed-face facts. The displayed argument is their planar polygonal specialization.</>,
  },
  {
    id: "part-i-item-22",
    label: "Lemma 4.5",
    kind: "Lemma",
    title: "Locating the common side from adjacent labels",
    purpose: "Use two adjacent half-open side memberships to determine the common side and the forced endpoint.",
    manuscriptHtml: completeHtml("22", "ownership", "lem:boundary-segment-locator"),
    intuition: <>The previous lemma gives one common side. The possible vanishing indices for <i>A</i> and <i>B</i> have only <i>j</i> in common, so that side must be <i>E</i><sub>j</sub>. This forces <i>A</i> to be the shared vertex <i>x</i><sub>j−1</sub>.</>,
    proofSteps: [
      { title: "Obtain a common side", explanation: <>Boundary-face rigidity makes <i>Z</i>(<i>A</i>)∩<i>Z</i>(<i>B</i>) nonempty.</> },
      { title: "Intersect the possible labels", explanation: <><i>A</i> can use only labels <i>j−1,j</i>; <i>B</i> can use only <i>j,j+1</i>. Their only possible common label is <i>j</i>.</> },
      { title: "Locate the forced endpoint", explanation: <>Within <i>E</i><sub>j−1</sub><sup>+</sup>, the point also lying on side line <i>j</i> is exactly its included endpoint <i>x</i><sub>j−1</sub>.</> },
      { title: "Parameterize the side", explanation: <>The other endpoint has the unique barycentric form on <i>E</i><sub>j</sub>; every strict mixture lies in that side’s relative interior.</> },
    ],
    takeaway: <>Adjacent half-open labels turn a qualitative face statement into the exact identity <i>A=x</i><sub>j−1</sub>.</>,
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
      { term: "Determinant matrix", definition: <>The entry <i>D</i><sub>r,j</sub> tests candidate point <i>η</i><sub>j</sub> against the supporting half-plane of side <i>E</i><sub>r</sub>. Thus row <i>r</i> checks one side inequality and column <i>j</i> checks one point.</> },
      { term: "Bilinearity of the determinant", definition: <>The determinant is linear in each vector separately; therefore the determinant of a barycentric point is the same barycentric combination of determinant values.</> },
    ],
    intuition: <>If every candidate point satisfies every oriented side inequality, all candidates lie in the polygon. The prescribed zero in column <i>j</i> simultaneously records its contact with side <i>j</i>.</>,
    proofSteps: [
      { title: "Separate endpoint and interior columns", explanation: <>Each <i>η</i><sub>j</sub> is either <i>x</i><sub>j</sub> or a strict barycentric point of side <i>E</i><sub>j</sub>.</> },
      { title: "Expand the determinant", explanation: <>Bilinearity gives the displayed convex combination of the two vertex entries <i>C</i><sub>r,j−1</sub> and <i>C</i><sub>r,j</sub>.</> },
      { title: "Read the signs from the polygon", explanation: <>Incident vertex entries vanish; all nonincident vertices lie strictly inside the relevant oriented half-plane.</> },
      { title: "Recover containment", explanation: <>All matrix entries are nonnegative, exactly the half-plane description of <i>P</i>. Convexity then contains the hull of all candidate points.</> },
    ],
    takeaway: <>The determinant equalities give the assigned side, while the nonnegative inequalities place every candidate point inside the polygon.</>,
    provenance: "Previously known",
    sourceIds: ["bitsoris-1988"],
    sourceRelation: <>Bitsoris supplies the general half-space test for polyhedral invariance; the cyclic side labels and half-open memberships are the planar specialization used here.</>,
  },
  {
    id: "part-i-item-24",
    label: "Lemma 4.7",
    kind: "Lemma",
    title: "What remains true after replacing one vertex",
    purpose: "Check which side memberships remain valid when one corner is replaced by a contact point in the relative interior of a side.",
    manuscriptHtml: completeHtml("24", "ownership", "lem:ownership-surgery-model"),
    vocabulary: [
      { term: "Cyclic shift κ and source vertex", definition: <>Assume the contacts are indexed by a fixed cyclic shift <i>κ</i>, so the image vertex assigned to side <i>E</i><sub>j</sub><sup>+</sup> is <i>ξ</i><sub>j</sub>=<i>λx</i><sub>j−κ</sub>. The vertex <i>x</i><sub>j−κ</sub> is its source. This lemma is conditional on that indexing; Topic IV proves the global choice of <i>κ</i>.</> },
    ],
    intuition: <>After replacing <i>x</i><sub>i</sub> by <i>ξ</i><sub>i</sub>, the new point is the right endpoint of its incoming side and the excluded left endpoint of the next side. The same convention protects the unchanged endpoint at <i>x</i><sub>i+1</sub>.</>,
    figure: <OwnershipMutationFigure kind="half-open" id="topic-iii-half-open-surgery" />,
    proofSteps: [
      { title: "Write the old local order", explanation: <>The four points occur as <i>x</i><sub>i−1</sub>&lt;<i>ξ</i><sub>i</sub>&lt;<i>x</i><sub>i</sub>&lt;<i>x</i><sub>i+1</sub>=<i>ξ</i><sub>i+1</sub>.</> },
      { title: "Replace the corner", explanation: <>The adjacent new sides are [<i>x</i><sub>i−1</sub>,<i>ξ</i><sub>i</sub>] and [<i>ξ</i><sub>i</sub>,<i>x</i><sub>i+1</sub>].</> },
      { title: "Apply the right-half-open convention", explanation: <>Each displayed shared endpoint belongs only to the side arriving there.</> },
      { title: "Check whether the source was replaced", explanation: <>The source of <i>ξ</i><sub>i+1</sub> is <i>x</i><sub>i+1−κ</sub>. It equals the replaced vertex <i>x</i><sub>i</sub> precisely when <i>κ=1</i>; that case is not covered by this lemma.</> },
    ],
    takeaway: <>The stated side membership remains valid when its source vertex is unchanged; the case in which that source was replaced is handled separately in Topic IV.</>,
    provenance: "Classical result",
    sourceIds: commonSources.convex,
    sourceRelation: <>Schneider, Chapter 1, supplies the convex-boundary and face background. The manuscript proof checks the shifted side labels directly with half-open intervals.</>,
  },
];

const capResults: readonly ProofResultData[] = [
  {
    id: "part-i-item-25",
    label: "Lemma 4.8",
    kind: "Lemma",
    title: "Clipping along an image edge and bounding the number of vertices",
    purpose: "Cut along a genuine edge of the image polygon while preserving invariance and counting every lost or introduced vertex.",
    manuscriptHtml: completeHtml("25", "mutation", "lem:edge-cap"),
    vocabulary: [
      { term: "Image polygon", definition: <><i>Q=λP</i> is obtained by applying the multiplier to every point of <i>P</i>. Because <i>λ≠0</i>, its vertices correspond bijectively to those of <i>P</i>.</> },
      { term: "Edge cap", definition: <>The portion of <i>P</i> removed when the line of an actual edge of <i>Q</i> is used as a cut and the half-plane containing <i>Q</i> is retained.</> },
      { term: "Image edge on a supporting line of P", definition: <>If the line containing an edge of <i>Q</i> also supports <i>P</i>, then <i>P</i> already lies in the retained half-plane and the clipping operation removes nothing. The manuscript calls this a “shared-side edge.”</> },
      { term: "Meets", definition: <>Two sets meet when their intersection is nonempty.</> },
      { term: "Boundary arc and cap count", definition: <>Between two boundary points there are two connected boundary arcs. The positive orientation chooses the discarded one <i>A</i><sub>j</sub>; <i>k</i><sub>j</sub> counts the old vertices of <i>P</i> on that closed arc, including an endpoint only when that endpoint was already a vertex of <i>P</i>.</> },
    ],
    intuition: <>The retained half-plane contains all of <i>Q</i>. Hence it also contains the image of the smaller clipped polygon. To bound the number of vertices, remove the old vertices on the discarded boundary arc and add an edge endpoint only when it was not already a vertex of <i>P</i>.</>,
    figure: <OwnershipMutationFigure kind="cap" id="topic-iii-edge-cap" />,
    proofSteps: [
      { title: "Preserve cyclic order", explanation: <>Nonzero complex multiplication is orientation-preserving. Because all image vertices lie on ∂<i>P</i>, two consecutive image vertices delimit a boundary arc of <i>P</i> containing no other image vertex.</> },
      { title: "Preserve invariance", explanation: <>From <i>Q⊆P</i><sub>j</sub><i>⊆P</i>, obtain <i>λP</i><sub>j</sub><i>⊆λP=Q⊆P</i><sub>j</sub>.</> },
      { title: "Locate the line endpoints", explanation: <>In a nontrivial clip the outer polygon has points on both sides of the line. Interior points of its line section are therefore interior to the polygon, so the two boundary image vertices are the section endpoints.</> },
      { title: "Count candidates", explanation: <>Remove old vertices internal to the cap arc and add each edge endpoint that was not already an old vertex. The count simplifies to <i>N+2−k</i><sub>j</sub>.</> },
      { title: "Allow collinearity", explanation: <>Deleting collinear candidates can only reduce the number of extreme points, which explains the inequality rather than equality.</> },
    ],
    takeaway: <>The clipped polygon is invariant and has at most <i>N+2−k</i><sub>j</sub> vertices.</>,
    provenance: "Previously known",
    sourceIds: commonSources.dmitriev,
    sourceRelation: <>The clipping mechanism is due to Dmitriev–Dynkin; the endpoint cases and resulting vertex-count bound are written out explicitly here.</>,
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
      { title: "Control interior points", explanation: <>An interior disk supplies a uniform support gap. If the point stayed outside an approximating polygon, strict separation would contradict that gap.</> },
      { title: "Pass area to the limit", explanation: <>Indicator functions converge away from the finite union of boundary segments, a set of area zero; dominated convergence applies inside one common disk.</> },
      { title: "Pass invariance and radius", explanation: <>Approximate each limit point by points in the polygons to preserve <i>AP⊆P</i>; maximal radius reduces to the maximum of finitely many generator norms.</> },
    ],
    takeaway: <>Finite vertex convergence is strong enough to produce an admissible limiting polygon and preserve its area and normalization.</>,
    provenance: "Classical result",
    sourceIds: commonSources.convex,
    sourceRelation: <>Schneider, Chapter 1, §§1.6–1.7 and Chapter 2, §§2.1 and 2.4, supplies Hausdorff/support-function continuity for convex bodies. The indicator-function passage uses the dominated-convergence source listed in the dependency contract.</>,
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
    intuition: <>Separate one new point of the larger body from the smaller body. Joining it to a small disk inside the smaller body creates an open triangular wedge of genuinely new area.</>,
    proofSteps: [
      { title: "Choose and separate a new point", explanation: <>Take <i>y∈L\K</i> and a functional whose value at <i>y</i> is strictly above its maximum on <i>K</i>.</> },
      { title: "Anchor with an interior disk", explanation: <>A closed disk inside <i>K</i> has positive width in every direction.</> },
      { title: "Build the positive-area wedge", explanation: <>The convex hull of the disk and <i>y</i> lies in <i>L</i>; above the separating level it contains a nonempty open triangle disjoint from <i>K</i>.</> },
      { title: "Compare areas", explanation: <>That triangle has positive area, so the proper inclusion increases area strictly.</> },
    ],
    takeaway: <>A proper convex clip that preserves nonempty interior must reduce area strictly.</>,
    provenance: "Classical result",
    sourceIds: commonSources.convex,
    sourceRelation: <>Schneider, Chapter 1, §§1.1 and 1.3, supplies strict separation and convex-body monotonicity; the proof here exhibits the positive-area triangular wedge explicitly.</>,
  },
  {
    id: "part-i-item-26",
    label: "Lemma 4.9",
    kind: "Lemma",
    title: "Area-minimal cap bound",
    purpose: "Choose a normalized critical polygon of least area and use it to rule out every large removable image-edge cap.",
    manuscriptHtml: completeHtml("26", "mutation", "lem:area-cap-bound"),
    vocabulary: [
      { term: "Unit maximal-radius normalization about the origin", definition: <>Rescale the polygon so <span>max<sub>z∈P</sub>|z|=1</span>. The centre is fixed at the origin; this is not the movable-centre circumradius used elsewhere in geometry. Without a fixed scale, every candidate could be shrunk and “least area” would be meaningless.</> },
      { term: "Area-minimizer", definition: <>A normalized admissible polygon with no more area than any other normalized admissible polygon. Lemma A.4 is what proves that such a smallest-area candidate actually exists.</> },
      { term: "Nontrivial cap", definition: <>A cap whose clip is a proper subset of the original polygon.</> },
    ],
    intuition: <>A cap with three old vertices produces an invariant polygon with too few vertices. A cap with two old vertices produces a smaller normalized competitor unless its removal would delete the chosen vertex <i>v</i> with |<i>v</i>|=1.</>,
    figure: <OwnershipMutationFigure kind="cap" id="topic-iii-area-cap" />,
    proofSteps: [
      { title: "Extract a convergent subsequence", explanation: <>Write each polygon as the hull of <i>N</i> points in the closed unit disk, allow repetitions, and take a convergent subsequence of these <i>N</i>-tuples.</> },
      { title: "Preserve admissibility", explanation: <>Lemma A.4 preserves the hull, invariance, radius one, and area. A singleton would force <i>λv=v</i>; a segment would require an invariant real direction. Both are impossible for a nonreal contraction.</> },
      { title: "Use criticality at the limit", explanation: <>Fewer than <i>N</i> extreme points would contradict <i>ν</i><sub>poly</sub>(<i>T</i>)=<i>N</i>. Hence the limit is an admissible strict <i>N</i>-gon and attains least area.</> },
      { title: "Exclude three-vertex caps", explanation: <>The clipping count would give an invariant polygon with at most <i>N−1</i> vertices, contradicting criticality.</> },
      { title: "Exclude ordinary two-vertex caps", explanation: <>If the cap misses a radius-one vertex <i>v</i>, the clip stays normalized and has exactly <i>N</i> vertices but strictly smaller area by Lemma A.5.</> },
      { title: "Count the sole exception", explanation: <>Because <i>Q</i> lies in the disk of radius |<i>λ</i>|&lt;1, <i>v</i> is not a <i>Q</i>-vertex and belongs to exactly one boundary arc between consecutive <i>Q</i>-vertices. Only that arc is not ruled out by the area comparison.</> },
    ],
    takeaway: <>Every nontrivial cap contains at most two old vertices, and at most one cap can attain two.</>,
    provenance: "Previously known",
    sourceIds: commonSources.dmitriev,
    sourceRelation: <>Dmitriev–Dynkin contain the minimal-polygon cap mechanism. This manuscript closes it with explicit Hausdorff compactness and strict area monotonicity.</>,
  },
];

export const topicIIISourceIds = Array.from(
  new Set([...localResults, ...capResults, ...compactnessResults].flatMap((result) => result.sourceIds ?? [])),
);

export function TopicIIIChapter() {
  return (
    <>
      <ProofDependencyContract
        imported={[
          { label: "Definition 1.1", href: sitePath("/proof/#part-i-item-1"), explanation: <>polygonal complexity and radial <i>N</i>-criticality.</> },
          { label: "Definition 1.2", href: sitePath("/proof/#part-i-item-2"), explanation: <>strict polygons, their complete cyclic vertex list, and oriented sides.</> },
          { label: "Lemma 2.5", href: sitePath("/proof/#part-i-item-9"), explanation: <>the origin lies in the interior of every invariant polygon for a nonreal contraction.</> },
          { label: "Lemma 2.6", href: sitePath("/proof/#part-i-item-10"), explanation: <>positive cyclic boundary order agrees with orientation from an interior point.</> },
          { label: "Lemma 2.9", href: sitePath("/proof/topic-ii/#part-i-item-13"), explanation: <>supporting functionals expose exactly the side or vertex on which equality holds.</> },
          { label: "Theorem 3.2", href: sitePath("/proof/topic-ii/#part-i-item-16"), explanation: <>hereditary side and image-vertex saturation.</> },
          { label: "Lemma 4.1", href: sitePath("/proof/topic-ii/#part-i-item-18"), explanation: <>a vertex witness on every touched side.</> },
          { label: "Lemma A.2", href: sitePath("/proof/#part-i-item-66"), explanation: <>strict separation, used in the two compactness tools brought forward here.</> },
        ]}
        background={[
          { label: "Finite-dimensional compactness", explanation: <>Heine–Borel and Bolzano–Weierstrass imply that a sequence in a finite product of closed disks has a convergent subsequence; see W. Rudin, <cite>Principles of Mathematical Analysis</cite>, 3rd ed., Chapter 2 (“Basic Topology”).</> },
          { label: "Dominated convergence", explanation: <>the exact form used in Lemma A.4 is defined there; see W. Rudin, <cite>Real and Complex Analysis</cite>, 3rd ed., Chapter 1 (“Abstract Integration”), under the Dominated Convergence Theorem. Convex-body continuity facts are sourced to Schneider in the source shelf below.</> },
        ]}
        provedHere={<p>Definition 4.2, Lemmas 4.3–4.9, and the supporting Appendix Lemmas A.4–A.5. The global interlacing theorem is deliberately not assumed.</p>}
      />

      <ProofResultGroup
        number="III-A · Half-open side assignments"
        title="Assign every boundary point to exactly one side"
        introduction={<p>The half-open sides <i>E</i><sub>i</sub><sup>+</sup>=(<i>x</i><sub>i−1</sub>,<i>x</i><sub>i</sub>] form a disjoint partition of ∂<i>P</i>. Supporting functionals and determinant inequalities then identify the relevant side without introducing another geometric relation.</p>}
        results={localResults}
      />
      <ProofResultGroup
        number="III-B · Edge clipping"
        title="Clip along an actual edge of the image polygon"
        introduction={<p>The retained half-plane contains the entire image polygon. That single containment preserves invariance and leaves an exact old-vertex/new-endpoint count.</p>}
        results={capResults}
      />
      <ProofResultGroup
        number="III-C · The minimizing representative"
        title="Existence of a least-area normalized polygon and the cap bound"
        introduction={<p>The appendix tools are moved to the point where they are needed. Their numbering remains unchanged, and the area-minimal cap lemma follows without a hidden existence assumption.</p>}
        results={compactnessResults}
      />
    </>
  );
}
