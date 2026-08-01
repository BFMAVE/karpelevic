import { ProofDependencyContract } from "../../components/proof/ProofDependencyContract";
import { ProofResultGroup } from "../../components/proof/ProofResultGroup";
import type { ProofResultData } from "../../components/proof/ProofResult";
import { OwnershipMutationFigure } from "../../components/proof/figures/OwnershipMutationFigures";
import { partIHtmlByTopic, topicIVHtmlByItem } from "../part-i-content.generated";
import { sitePath } from "../../lib/site-path";

type TopicIVItem = keyof typeof topicIVHtmlByItem;

const crossTopicLinks: Readonly<Record<string, string>> = {
  "lem:area-cap-bound": sitePath("/proof/topic-iii/#lem:area-cap-bound"),
  "lem:edge-cap": sitePath("/proof/topic-iii/#lem:edge-cap"),
  "lem:side-witness": sitePath("/proof/topic-ii/#lem:side-witness"),
  "lem:boundary-segment-locator": sitePath("/proof/topic-iii/#lem:boundary-segment-locator"),
  "lem:labeled-side-matrix": sitePath("/proof/topic-iii/#lem:labeled-side-matrix"),
  "thm:hereditary-saturation": sitePath("/proof/topic-ii/#thm:hereditary-saturation"),
  "prop:contact-geometry-covariance": sitePath("/proof/#prop:contact-geometry-covariance"),
  "eq:affine-contact-conjugacy": sitePath("/proof/#eq:affine-contact-conjugacy"),
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

function completeHtml(item: TopicIVItem, id: string): string {
  const statement = topicIVHtmlByItem[item];
  const sectionHtml = partIHtmlByTopic.mutation;
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

const dmitriev = ["dmitriev-dynkin-1946", "swift-1972"] as const;
const karpelevicOnly = ["karpelevic-1951"] as const;
const karpelevicHistory = {
  surgery: <>Karpelevič (1951), §3, Lemma 1, contains the corner-mutation antecedent. The exact side labels, coincidence register, and global ownership certificate proved here are fuller; under the author’s rule, this source alone does not justify a “Previously known” badge.</>,
  intrinsic: <>Karpelevič (1951), §3, contains the indexed chip-move antecedent. The intrinsic covariance formulation is the manuscript’s packaging, so the item remains deliberately unbadged.</>,
  sequences: <>Karpelevič (1951), §3, uses admissible chip configurations as the historical antecedent. The exact finite realization induction is proved here and receives no badge on that source alone.</>,
  sweeps: <>Karpelevič (1951), §3, contains the group-sweep mechanism. The geometric reachability certificate is proved here and remains deliberately unbadged.</>,
  block: <>Karpelevič (1951), §3, Lemma 3 and Theorems I–II, contain the reduction antecedent. The repeatability, residue, and first-entry ledgers here are substantially fuller, so no “Previously known” badge is inferred from that source alone.</>,
};

const selectionResults: readonly ProofResultData[] = [
  {
    id: "part-i-item-27",
    label: "Lemma 4.10",
    kind: "Lemma",
    title: "Finite cyclic endpoint ledger",
    purpose: "Convert one possible overfull boundary gap and one possible empty gap into a uniform opposite half-open count.",
    manuscriptHtml: completeHtml("27", "lem:cyclic-endpoint-ledger"),
    vocabulary: [
      { term: "Cyclic word", definition: <>A finite list whose last entry is followed again by its first; every index is read modulo <i>N</i>.</> },
      { term: "Binary transition", definition: <>A change 0→1 or 1→0 between adjacent entries, including the wrap from entry <i>N−1</i> back to entry 0.</> },
      { term: "Endpoint correction", definition: <><i>c</i><sub>j</sub>−<i>c</i><sub>j+1</sub> changes a right-half-open count into the opposite left-half-open count.</> },
    ],
    intuition: <>If one of <i>N</i> counts is 2 while their total remains <i>N</i>, exactly one count must be 0. A cyclic binary word has equally many upward and downward transitions, so the two exceptional counts cancel after the endpoint correction.</>,
    figure: <OwnershipMutationFigure kind="endpoint-ledger" id="topic-iv-endpoint-ledger" />,
    proofSteps: [
      { title: "Handle the uniform case", explanation: <>Without an entry 2, all <i>N</i> entries are at most 1 and sum to <i>N</i>, so every entry is 1.</> },
      { title: "Locate the unique deficit", explanation: <>One entry 2 contributes one unit above baseline. Since no other entry exceeds 1, the total forces one and only one zero.</> },
      { title: "Balance cyclic transitions", explanation: <>The telescoping sum Σ(<i>c</i><sub>j+1</sub>−<i>c</i><sub>j</sub>)=0 says upward and downward transitions occur equally often.</> },
      { title: "Use the allowed transition sites", explanation: <>The prescribed rise occurs at the unique 2; every fall may occur only at a zero, so the unique zero carries the unique fall.</> },
      { title: "Evaluate the corrected counts", explanation: <>At the 2, at the 0, and at every ordinary index, <i>ℓ</i><sub>j</sub>=<i>r</i><sub>j</sub>+<i>c</i><sub>j</sub>−<i>c</i><sub>j+1</sub>=1.</> },
    ],
    takeaway: <>The exceptional 2/0 pair disappears when the other half-open endpoint convention is used.</>,
    provenance: "Previously known",
    sourceIds: dmitriev,
    sourceRelation: <>Dmitriev–Dynkin’s one-sided contact argument, available in Swift’s translation, contains the finite endpoint mechanism. The explicit <i>r</i>–<i>c</i>–<i>ℓ</i> ledger is the manuscript’s modern packaging.</>,
  },
  {
    id: "part-i-item-28",
    label: "Lemma 4.11",
    kind: "Lemma",
    title: "Cyclic interlacing with endpoint bookkeeping",
    purpose: "Upgrade the local cap bound into a global assertion: one consistently oriented half-open gap contains exactly one outer vertex everywhere.",
    manuscriptHtml: completeHtml("28", "lem:cyclic-interlacing"),
    vocabulary: [
      { term: "Interlacing", definition: <>Two cyclic point sets interlace when exactly one point of one set occurs in each specified gap between consecutive points of the other.</> },
      { term: "Orientation reversal", definition: <>Complex conjugation reflects the plane and reverses boundary order. Reindexing by <span>x̃<sub>i</sub>=conj(x<sub>−i</sub>)</span> restores positive order.</> },
      { term: "Cap count versus gap count", definition: <><i>k</i><sub>j</sub> counts the closed cap arc; <i>r</i><sub>j</sub> counts the right-half-open gap. Their difference is whether the left endpoint is already a polygon vertex.</> },
    ],
    intuition: <>Topic III allows at most one gap of size 2. If it occurs, the total creates one gap of size 0. Side touching dictates where endpoint status can change, exactly matching Lemma 4.10’s finite ledger.</>,
    figure: <OwnershipMutationFigure kind="interlacing" id="topic-iv-cyclic-interlacing" />,
    proofSteps: [
      { title: "Create the geometric words", explanation: <>The right-half-open gaps partition the <i>N</i> outer vertices, giving Σ<i>r</i><sub>j</sub>=<i>N</i>; endpoint flag <i>c</i><sub>j</sub> relates <i>r</i><sub>j</sub> to the closed cap count.</> },
      { title: "Import the cap bound", explanation: <>Shared-side gaps have count at most 1; nontrivial caps have count at most 2; only one nontrivial cap may attain 2.</> },
      { title: "Find the mandatory rise", explanation: <>At the unique two-gap the left endpoint cannot be an outer vertex, while the right endpoint must be one—otherwise a side between consecutive outer vertices would contain no image vertex.</> },
      { title: "Confine every fall", explanation: <>A 1→0 endpoint transition away from the unique zero would create a second nontrivial two-cap, contradicting Topic III.</> },
      { title: "Apply the finite ledger", explanation: <>Lemma 4.10 makes every opposite half-open count equal to one.</> },
      { title: "Translate gaps into sides", explanation: <>The unique outer vertex in each image gap gives one image vertex in each outer half-open side.</> },
      { title: "Repair the other orientation", explanation: <>If the first alternative holds, conjugate and reindex. Track the included and excluded endpoints explicitly to obtain right-half-open sides in positive order.</> },
    ],
    takeaway: <>After at most one controlled reflection, the entire polygon uses one right-half-open contact convention.</>,
    provenance: "Previously known",
    sourceIds: dmitriev,
    sourceRelation: <>Dmitriev–Dynkin’s supporting one-sided contact theorem, available in Swift’s translation, supplies the interlacing antecedent; this manuscript gives the complete cap and endpoint ledger.</>,
  },
  {
    id: "part-i-item-29",
    label: "Corollary 4.12",
    kind: "Corollary",
    title: "Collision-free global half-open ownership",
    purpose: "Turn interlacing into a labelled bijection between all image vertices and all half-open outer sides.",
    manuscriptHtml: completeHtml("29", "cor:global-half-open-ownership"),
    vocabulary: [
      { term: "Collision-free", definition: <>No image vertex is assigned to two fields and no field receives two image vertices.</> },
    ],
    intuition: <>Every side receives at least one image vertex. There are exactly <i>N</i> sides and <i>N</i> image vertices, while disjoint half-open sides prevent double ownership; finite counting forces a bijection.</>,
    proofSteps: [
      { title: "Use the half-open partition", explanation: <>Topic III proved that the sides are disjoint and cover the boundary.</> },
      { title: "Use interlacing", explanation: <>The chosen orientation supplies at least one image vertex in each of the <i>N</i> sides.</> },
      { title: "Compare cardinalities", explanation: <>A surjection between two <i>N</i>-element sets is a bijection; disjointness prevents duplicate ownership.</> },
      { title: "Fix the labels", explanation: <>Call the unique image in <i>E</i><sub>i</sub><sup>+</sup> the point <i>ξ</i><sub>i</sub>.</> },
    ],
    takeaway: <>Every field has exactly one owned contact, so source and target labels can now be compared globally.</>,
    provenance: "Previously known",
    sourceIds: dmitriev,
    sourceRelation: <>This is the labelled finite form of Supporting Theorem III in Dmitriev–Dynkin’s contact argument; Swift supplies the accessible English translation.</>,
  },
  {
    id: "part-i-item-30",
    label: "Lemma 4.13",
    kind: "Lemma",
    title: "One-sided contact representative",
    purpose: "Show that every source-to-side contact label is one fixed cyclic shift and trap the multiplier angle in its corresponding rational interval.",
    manuscriptHtml: completeHtml("30", "lem:one-sided-contact"),
    vocabulary: [
      { term: "Cyclic-order-preserving bijection", definition: <>A bijection sending each successor to the successor of its image. Once the image of one index is known, all others follow, so the map is a single translation modulo <i>N</i>.</> },
      { term: "Integer lift κ", definition: <>The cyclic shift is initially defined modulo <i>N</i>. Choosing <i>κ∈</i>{"{1,…,N}"} records the representative compatible with the positive multiplier angle.</> },
      { term: "Greatest common divisor", definition: <><span>gcd(<i>N</i>,<i>κ</i>)</span> is the largest positive integer dividing both <i>N</i> and <i>κ</i>. Repeated addition of <i>κ</i> modulo <i>N</i> returns after exactly <i>N</i>/gcd(<i>N</i>,<i>κ</i>) steps.</> },
      { term: "Lifted polar angle", definition: <>A real angle <i>Θ</i><sub>i</sub>, not just an angle modulo 2π, chosen with <i>Θ</i><sub>i+N</sub>=<i>Θ</i><sub>i</sub>+2π.</> },
      { term: "Winding integer", definition: <>The possible multiple 2π<i>m</i><sub>i</sub> introduced before the correct lift of a cyclic angle relation has been identified.</> },
    ],
    intuition: <>Multiplication by a nonzero complex number preserves cyclic order. Therefore the contact bijection cannot scramble the labels: it shifts all of them by the same <i>κ</i>. Unwrapping the angles shows exactly which interval contains the rotation.</>,
    figure: <OwnershipMutationFigure kind="lifted-shift" id="topic-iv-contact-shift" />,
    proofSteps: [
      { title: "Select one orientation", explanation: <>Keep the area-minimal representative or use its conjugate, according to Lemma 4.11, so every right-half-open side owns one image vertex.</> },
      { title: "Prove the single-shift claim", explanation: <>An order-preserving bijection of cyclic <i>N</i>-sets sends successors to successors; after one image is fixed it must be <i>j↦j+κ</i>.</> },
      { title: "Read barycentric contact coefficients", explanation: <>Membership in <span>(x<sub>i−1</sub>,x<sub>i</sub>]</span> gives the unique coefficients in equation (4.12), with the left coefficient allowed to vanish only at the owned endpoint.</> },
      { title: "Introduce and eliminate winding", explanation: <>Side incidence first gives equation (4.14) with 2π<i>m</i><sub>i</sub>. If <i>κ&lt;N</i>, the difference spans fewer than all angular gaps; if <i>κ=N</i>, its endpoints are computed directly. In either case only <i>m</i><sub>i</sub>=0 is compatible with 0&lt;<i>ϑ</i>&lt;2π.</> },
      { title: "Sum one complete period", explanation: <>The two shifted angle sums differ from Σ<i>Θ</i><sub>i</sub> by 2π<i>κ</i> and 2π. This gives the weak upper bound and strict lower bound.</> },
      { title: "Make the upper bound strict", explanation: <>Equality would make every contact an endpoint. Following a shift orbit gives <span>x<sub>i</sub>=μ<sup>N/gcd(N,κ)</sup>x<sub>i</sub></span>, impossible because vertices are nonzero and |μ|&lt;1.</> },
      { title: "Handle κ=N", explanation: <>An endpoint would give μ<i>x</i><sub>i</sub>=<i>x</i><sub>i</sub>, the same contraction contradiction; every contact is strict.</> },
    ],
    takeaway: <>The contact system is now encoded by one integer shift <i>κ</i>, side coefficients, and the strict bracket <span>(κ−1)/N&lt;ϑ/(2π)&lt;κ/N</span>.</>,
    provenance: "Previously known",
    sourceIds: [...dmitriev, "karpelevic-1951"],
    sourceRelation: <>Dmitriev–Dynkin’s Basic Theorem gives the one-sided representative, and Karpelevič (1951), §2, quotes and uses that contact theorem. The manuscript adds the explicit cyclic shift, winding, and endpoint-equality audits.</>,
  },
  {
    id: "part-i-item-31",
    label: "Lemma 4.14",
    kind: "Lemma",
    title: "Exact lifted endpoint paths",
    purpose: "Iterate endpoint contacts on the real angle line without losing an unrecorded multiple of 2π.",
    manuscriptHtml: completeHtml("31", "lem:lifted-endpoint-paths"),
    vocabulary: [
      { term: "Right-admissible system and contact eigenvalue", definition: <>After the possible conjugation in Lemma 4.13, the selected multiplier <i>μ</i> is renamed <i>λ</i> once and for all, with <i>θ</i>=arg<sub>+</sub>(<i>λ</i>)∈(0,2π) and <i>x</i>=<i>θ</i>/(2π). A right-admissible system is the tuple <span>(P,λ,κ;(α<sub>i</sub>,β<sub>i</sub>))</span>: <i>P</i> is a positively oriented strict invariant <i>N</i>-gon for the fixed <i>N</i>-critical map, equation (4.12) holds in every field, every right-half-open side owns exactly one image vertex, and the full side/image-vertex touching of Theorem 3.2 is included. No later mutation silently reverses this orientation.</> },
      { term: "Endpoint path", definition: <>A sequence of destination fields whose contacts are all endpoints, so each angular side inequality becomes an exact equality.</> },
    ],
    intuition: <>Endpoint contacts telescope exactly. The first strict contact breaks the equality and places the final lifted angle strictly between the two endpoint angles of its side.</>,
    figure: <OwnershipMutationFigure kind="lifted-shift" id="topic-iv-endpoint-paths" />,
    proofSteps: [
      { title: "Repeat the lift check", explanation: <>Begin with a possible winding integer and use the same two range estimates as Lemma 4.13 to force it to zero for every field.</> },
      { title: "Recognize endpoint equality", explanation: <>At an endpoint, the image equals the right endpoint <i>x</i><sub>j</sub>, so the right-hand angle inequality is equality.</> },
      { title: "Telescope exact steps", explanation: <>Successive destination fields differing by <i>κ</i> produce equation (4.16) after <i>t</i> equal endpoint steps.</> },
      { title: "Stop at the first strict field", explanation: <>Use the endpoint equalities for the first <i>t−1</i> steps, then apply the strict side-interior inequality at the final destination to get (4.17).</> },
    ],
    takeaway: <>The later return calculation can add contact angles as ordinary real numbers rather than congruence classes.</>,
    provenance: "Classical result",
    sourceIds: ["standard-convexity"],
    sourceRelation: <>Hatcher, <cite>Algebraic Topology</cite>, §1.3, supplies the covering-space lift for circle angles; Schneider, Chapter 1, supplies convex-boundary angular order. The endpoint-path notation is the manuscript’s specialization.</>,
  },
];

const mutationResults: readonly ProofResultData[] = [
  {
    id: "part-i-item-32",
    label: "Proposition 5.1",
    kind: "Proposition",
    title: "Contact-surgery certificate: the exact local move",
    purpose: "Prove that replacing one contacted corner realizes the chip update while preserving every geometric and labelled requirement.",
    manuscriptHtml: completeHtml("32", "lem:contact-surgery"),
    vocabulary: [
      { term: "Strict and endpoint fields", definition: <>Field <i>i</i> is strict when β<sub>i</sub>&gt;0 and is an endpoint field when β<sub>i</sub>=0.</> },
      { term: "Chip", definition: <>A marker that says a field is strict. It is not a polygon vertex and not an image vertex.</> },
      { term: "Legal move", definition: <>Field <i>i</i> is strict and its next field <i>i+1</i> is endpoint. Geometry then replaces <i>x</i><sub>i</sub> by its strict contact <i>ξ</i><sub>i</sub>.</> },
      { term: "Source and target", definition: <>The source field <i>i</i> loses its strict-status chip; the target field <i>i+κ</i> receives strict status. These names refer to the Boolean status update, not to deletion or coalescence of geometric image vertices.</> },
      { term: "Collision", definition: <>The target status <i>i+κ</i> was already strict, so the set of strict statuses loses one element. Nonzero multiplication keeps all geometric image vertices distinct.</> },
    ],
    intuition: <>This proposition earns the right to use the chip game. It separately checks the clip, strict convex position, invariance, changed image, every unchanged label, coefficient update, and the same integer lift.</>,
    figure: <OwnershipMutationFigure kind="surgery" id="topic-iv-contact-surgery" />,
    proofSteps: [
      { title: "Identify one exact edge clip", explanation: <>Legality makes <i>ξ</i><sub>i</sub> strict and <i>ξ</i><sub>i+1</sub>=<i>x</i><sub>i+1</sub>. They are consecutive image vertices. Determinants (5.3)–(5.4) put only <i>x</i><sub>i</sub> in the discarded half-plane.</> },
      { title: "Preserve invariance and strictness", explanation: <>The clip contains <i>Q=λP</i>, hence contains <i>λP′</i>. The three changed turn determinants are positive; together with the convex intersection, the primed list has <i>N</i> distinct extreme vertices.</> },
      { title: "Recover hereditary touching", explanation: <>The primed polygon is another invariant <i>N</i>-gon for the same critical multiplier, so Theorem 3.2 supplies full side and image-vertex touching.</> },
      { title: "Exhaust unchanged fields", explanation: <>The incidence ledger separates field <i>i</i>, field <i>i+1</i> when κ≠1, changed target <i>j</i><sub>0</sub>=<i>i+κ</i>, and every other field. At <i>N=3</i>, the κ=2 row also covers κ=<i>N−1</i>.</> },
      { title: "Locate the changed image", explanation: <>Write <i>A=λx</i><sub>i−1</sub>, <i>B=λx</i><sub>i</sub>, and <i>η</i><sub>j0</sub>=β<i>A</i>+α<i>B</i>. It is a boundary vertex of <i>λP′</i>. Lemma 4.5 forces <i>A=x′</i><sub>j0−1</sub> and [<i>A,B</i>] onto side <i>E′</i><sub>j0</sub>.</> },
      { title: "Expose the forced endpoint consequence", explanation: <>For κ≥2, the identity <i>A=ξ</i><sub>j0−1</sub>=<i>x′</i><sub>j0−1</sub> shows that field <i>j</i><sub>0</sub>−1 was already endpoint. This makes the “unchanged” ledger consistent; it is not an extra hypothesis.</> },
      { title: "Read the new coefficients", explanation: <>Parameterize <i>B</i> on its side by <i>t∈(0,1]</i>. Substitution gives the exact coefficients in (5.1) and strict-set update in (5.2).</> },
      { title: "Close the global ownership audit", explanation: <>The half-open partition makes all labelled incidences collision-free. Lemma 4.6 supplies every side inequality, and <span>η<sub>j</sub>=λx′<sub>j−κ</sub></span> proves that the integer lift itself is unchanged.</> },
    ],
    takeaway: <>Every legal Boolean move is backed by a new right-admissible strict invariant polygon with exactly the predicted strict set.</>,
    sourceIds: karpelevicOnly,
    sourceRelation: karpelevicHistory.surgery,
  },
  {
    id: "part-i-item-33",
    label: "Corollary 5.2",
    kind: "Corollary",
    title: "Intrinsic form of the exact mutation law",
    purpose: "Rewrite the indexed move using only successor and contact-rotation maps, so it survives a change of coordinates.",
    manuscriptHtml: completeHtml("33", "cor:intrinsic-mutation-law"),
    vocabulary: [
      { term: "Intrinsic", definition: <>Stated in terms of the polygon’s own side set and maps rather than a chosen numbering of its sides.</> },
      { term: "One-sided representation and successor", definition: <><i>χ</i> pairs each source vertex with the unique half-open side owning its image. The successor <i>s(e)</i> is the next oriented side after <i>e</i>.</> },
      { term: "Contact rotation σ", definition: <>The side reached by applying the contact assignment to the head vertex of the current side.</> },
    ],
    intuition: <>Positive indexing turns “next side” into +1 and contact rotation into +κ. The indexed update is therefore exactly the coordinate-free update <span>{"I′ = (I ∖ {e}) ∪ {σ(e)}"}</span>.</>,
    proofSteps: [
      { title: "Translate successor", explanation: <>By definition of positive indexing, <i>s(E</i><sub>i</sub>)=<i>E</i><sub>i+1</sub>.</> },
      { title: "Translate contact rotation", explanation: <>The head of <i>E</i><sub>i</sub> is <i>x</i><sub>i</sub>, whose owned target side is <i>E</i><sub>i+κ</sub>.</> },
      { title: "Translate legality and update", explanation: <>Strict sides are exactly <i>I</i>, so “<i>i</i> strict, <i>i+1</i> endpoint” becomes “<i>e∈I</i>, <i>s(e)∉I</i>,” and equation (5.2) becomes (5.10).</> },
      { title: "Transport by conjugacy", explanation: <>Topic I’s covariance result transports successors, strict sides, and contact rotation together; no sign change is introduced.</> },
    ],
    takeaway: <>The mutation belongs to the contact geometry itself, not to a convenient set of indices.</>,
    sourceIds: karpelevicOnly,
    sourceRelation: karpelevicHistory.intrinsic,
  },
  {
    id: "part-i-item-34",
    label: "Corollary 5.3",
    kind: "Corollary",
    title: "Geometric realization of every legal chip sequence",
    purpose: "Guarantee an actual invariant polygon after every step of any finite legal Boolean move sequence.",
    manuscriptHtml: completeHtml("34", "cor:legal-chip-sequence"),
    intuition: <>Proposition 5.1 returns exactly the same kind of right-admissible object it receives. It can therefore be applied again, with the same shift and ownership convention.</>,
    proofSteps: [
      { title: "Induct on sequence length", explanation: <>The empty sequence is the starting polygon.</> },
      { title: "Identify Boolean and geometric legality", explanation: <>At each stage, occupied source and empty next field mean exactly strict source and endpoint neighbour.</> },
      { title: "Apply the surgery certificate", explanation: <>The new polygon is right-admissible, preserves κ, and updates its strict set by the Boolean rule.</> },
      { title: "Continue in the same labels", explanation: <>Preserved ownership and integer lift make the next proposed move meaningful without relabelling.</> },
    ],
    takeaway: <>A legal chip history is a compressed record of a genuine polygon history.</>,
    sourceIds: karpelevicOnly,
    sourceRelation: karpelevicHistory.sequences,
  },
  {
    id: "part-i-item-35",
    label: "Corollary 5.4",
    kind: "Corollary",
    title: "Boolean sweeps are geometrically reachable",
    purpose: "Specialize finite realization to the right-to-left group sweeps used in the reduction lemma.",
    manuscriptHtml: completeHtml("35", "cor:boolean-sweeps-geometric"),
    vocabulary: [
      { term: "Boolean sweep", definition: <>A finite sequence moving the strict statuses of one consecutive group from right to left by the same target shift κ, provided every source has an empty right neighbour when used.</> },
    ],
    intuition: <>The group argument that follows is allowed to manipulate finite sets because every one of its legal status updates has already been certified geometrically.</>,
    figure: <OwnershipMutationFigure kind="surgery" id="topic-iv-boolean-sweeps" />,
    proofSteps: [
      { title: "Read one proposed source", explanation: <>Current Boolean legality is exactly Proposition 5.1’s strict/endpoint hypothesis.</> },
      { title: "Perform one polygon surgery", explanation: <>The certificate returns the next strict invariant polygon and exact updated set.</> },
      { title: "Preserve the induction data", explanation: <>Right-admissibility and the same lifted κ are part of the conclusion, so the next Boolean move is again geometric.</> },
      { title: "Finish the finite induction", explanation: <>Repeating for the listed sources realizes the entire sweep.</> },
    ],
    takeaway: <>No separate reachability assumption enters the group reduction: the Boolean sweep is already a polygonal deformation sequence.</>,
    sourceIds: karpelevicOnly,
    sourceRelation: karpelevicHistory.sweeps,
  },
  {
    id: "part-i-item-36",
    label: "Lemma 5.5",
    kind: "Lemma",
    title: "Reduced strict block and its first record",
    purpose: "Minimize the reachable contact pattern and prove that all remaining strict fields form one block meeting every shift orbit.",
    manuscriptHtml: completeHtml("36", "lem:one-block"),
    vocabulary: [
      { term: "Group of strict fields", definition: <>A maximal consecutive block of occupied fields, including adjacency across the wrap from <i>N−1</i> to 0. Here “group” means a block, not an algebraic group.</> },
      { term: "Lexicographic minimum", definition: <>First minimize the number of strict fields; among ties, minimize the number of strict groups.</> },
      { term: "Shift orbit and δ", definition: <><i>δ=gcd(N,κ)</i>. Repeated addition of κ visits one residue class modulo δ, and each orbit has <i>N/δ</i> fields.</> },
      { term: "Representative [a]N", definition: <>The unique integer in <span>{`{0,…,N−1}`}</span> congruent to <i>a</i> modulo <i>N</i>.</> },
      { term: "First record here", definition: <>The first positive time <i>h</i> at which [<i>hκ</i>]<sub>N</sub> enters the terminal interval. The proof shows that the first value is exactly its left endpoint <i>N−φ</i>.</> },
    ],
    intuition: <>A collision would improve score coordinate one; a completed merger would improve coordinate two. A minimal reachable state permits neither. Repeated group sweeps then force different groups to occupy disjoint residue classes, which is incompatible with covering every orbit unless there is one group.</>,
    figure: <OwnershipMutationFigure kind="residue-block" id="topic-iv-residue-block" />,
    proofSteps: [
      { title: "Choose a reachable minimizer", explanation: <>Reachable strict sets lie in the finite power set of the cyclic fields, so the two-coordinate score attains a minimum.</> },
      { title: "Audit a complete group sweep", explanation: <>Move sources from right to left. The first source has an empty right neighbour by maximality; every later source sees the field removed one step earlier. Premature reinsertion would already have caused a collision.</> },
      { title: "Record the three outcomes", explanation: <>A collision lowers chip count; a collision-free adjacent translate lowers group count; a disjoint nonadjacent translate preserves the score. Minimality permits only the third.</> },
      { title: "Make sweeps repeatable", explanation: <>After a permitted complete sweep, the translated group is again proper, maximal, disjoint, and nonadjacent to the unchanged remainder. Induction permits arbitrarily many complete translates.</> },
      { title: "Force every residue orbit to contain a chip", explanation: <>If one κ-orbit had only endpoint contacts, iterating their exact identities around its length <i>N/δ</i> would give <span>x<sub>j</sub>=λ<sup>N/δ</sup>x<sub>j</sub></span>, impossible for a nonzero vertex and |λ|&lt;1.</> },
      { title: "Separate residues of distinct groups", explanation: <>If two groups shared a residue modulo δ, repeated complete sweeps would move a chip of one group onto a chip of the other, or would improve the score earlier. Both contradict minimality.</> },
      { title: "Force one group", explanation: <>A group of length at least δ already meets every residue. If all are shorter, their disjoint residue intervals cover the residue circle; two consecutive intervals can be merged after a suitable number of κ-translates, again improving the score.</> },
      { title: "Bound the block length", explanation: <>The unique group must meet every one of the δ residues, so after cyclic relabelling it is <span>{`{1,…,φ}`}</span> with φ≥δ.</> },
      { title: "Extract the first record without Topic V", explanation: <>Move only the terminal chip. Before its first entry into <span>{`{N−φ,…,N−1}`}</span>, its right neighbour is empty; landing inside the fixed part would collide. Hence the first entry is exactly <i>N−φ</i>, with every earlier residue smaller.</> },
    ],
    takeaway: <>All contact complexity has been compressed to one strict block and one first-entry relation for the finite rotation by κ.</>,
    sourceIds: karpelevicOnly,
    sourceRelation: karpelevicHistory.block,
  },
];

export const topicIVSourceIds = Array.from(
  new Set([...selectionResults, ...mutationResults].flatMap((result) => result.sourceIds ?? [])),
);

function ProperShiftBoundary() {
  return (
    <section className="topic-ii-reader-contract" id="eq:kappa-proper" aria-labelledby="proper-shift-heading">
      <header>
        <p className="section-label">Equation (4.18) · scope boundary</p>
        <h3 id="proper-shift-heading">The mutation module assumes 1≤κ&lt;N</h3>
        <p>When κ=N, Lemma 4.13 already shows that every contact is strict, so there is no endpoint neighbour on which the local move can begin. Topic IV makes no mutation claim in that branch and imports no later result to dispose of it.</p>
      </header>
    </section>
  );
}

function ShiftBoundaryRegister() {
  return (
    <section className="topic-ii-reader-contract" aria-labelledby="shift-boundary-register-heading">
      <header>
        <p className="section-label">Before Proposition 5.1 · complete coincidence register</p>
        <h3 id="shift-boundary-register-heading">Which labels can coincide during one legal move?</h3>
        <p>Put <i>j</i><sub>0</sub>=<i>i+κ</i> modulo <i>N</i>. These are all possibilities; wrap-around creates no extra case.</p>
      </header>
      <div className="topic-ii-contract-grid">
        <section>
          <h4>κ=1</h4>
          <p><i>j</i><sub>0</sub>=<i>i+1</i>. The changed source field and changed target field are the same, so the “unchanged field <i>i+1</i>” row is omitted.</p>
        </section>
        <section>
          <h4>κ=2</h4>
          <p><i>j</i><sub>0</sub>−1=<i>i+1</i>. The point <i>A</i> in the proof is the unchanged endpoint <i>x</i><sub>i+1</sub>; legality supplies its endpoint status.</p>
        </section>
        <section>
          <h4>κ=N−1 or 3≤κ≤N−2</h4>
          <p>Both use the generic incidence row. When κ=<i>N</i>−1, the target is field <i>i−1</i>, but neither endpoint of that target side is the replaced vertex.</p>
        </section>
        <section>
          <h4>Small-order overlap</h4>
          <p>For <i>N</i>=3, κ=2 is also κ=<i>N</i>−1. The κ=2 row applies, so the two descriptions are not counted as separate cases.</p>
        </section>
      </div>
    </section>
  );
}

export function TopicIVChapter() {
  return (
    <>
      <ProofDependencyContract
        imported={[
          { label: "Definition 1.2", href: sitePath("/proof/#part-i-item-2"), explanation: <>oriented sides, one-sided contact representations, successors, and contact rotation.</> },
          { label: "Proposition 2.3", href: sitePath("/proof/#part-i-item-7"), explanation: <>real-linear covariance of contact geometry.</> },
          { label: "Lemma 2.4", href: sitePath("/proof/#part-i-item-8"), explanation: <>the exact effect of complex conjugation on orientation and handedness.</> },
          { label: "Lemma 2.5", href: sitePath("/proof/#part-i-item-9"), explanation: <>the origin lies in the interior of the invariant polygon.</> },
          { label: "Lemma 2.6", href: sitePath("/proof/#part-i-item-10"), explanation: <>positive cyclic order on a convex boundary.</> },
          { label: "Lemma 2.7", href: sitePath("/proof/topic-ii/#part-i-item-11"), explanation: <>positive triple determinants characterize strict convex position.</> },
          { label: "Lemma 2.10", href: sitePath("/proof/topic-ii/#part-i-item-14"), explanation: <>lifted polar angles increase along the positively oriented boundary.</> },
          { label: "Theorem 3.2", href: sitePath("/proof/topic-ii/#part-i-item-16"), explanation: <>hereditary side and image-vertex touching.</> },
          { label: "Lemma 4.1", href: sitePath("/proof/topic-ii/#part-i-item-18"), explanation: <>a vertex witness on every touched side.</> },
          { label: "Definition 4.2 and Lemmas 4.3–4.9", href: sitePath("/proof/topic-iii/#part-i-item-19"), explanation: <>half-open ownership, boundary rigidity, labelled side inequalities, exact cap clipping, and the least-area cap bound.</> },
        ]}
        provedHere={<p>Lemmas 4.10–4.14, Proposition 5.1, Corollaries 5.2–5.4, and Lemma 5.5. The cyclic transitions, greatest common divisor, residue orbits, and first-record relation are all defined and proved locally; no Topic V result is imported. These are exactly the global selection and contact-reduction results on manuscript pages 19–30.</p>}
      />

      <ProofResultGroup
        number="IV-A · Endpoint order"
        title="Turn local cap counts into one global contact shift"
        introduction={<p>A finite endpoint ledger chooses the correct half-open orientation. Cyclic order then turns the contact bijection into one shift κ, and lifted angles record it without hidden turns.</p>}
        results={selectionResults}
      />

      <ProperShiftBoundary />

      <ProofResultGroup
        number="IV-B · Contact reduction"
        title="Prove the chip move geometrically, then reduce to one block"
        introduction={<p>The polygon and the Boolean board remain synchronized. Proposition 5.1 proves one move in full; its corollaries justify finite sweeps; Lemma 5.5 uses only those reachable states.</p>}
        prelude={<ShiftBoundaryRegister />}
        results={mutationResults}
      />
    </>
  );
}
