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
  "lem:angular-gaps": sitePath("/proof/topic-ii/#lem:angular-gaps"),
  "thm:hereditary-saturation": sitePath("/proof/topic-ii/#thm:hereditary-saturation"),
  "prop:contact-geometry-covariance": sitePath("/proof/#prop:contact-geometry-covariance"),
  "eq:affine-contact-conjugacy": sitePath("/proof/#eq:affine-contact-conjugacy"),
  "lem:origin-interior": sitePath("/proof/#lem:origin-interior"),
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

function PlateAnchor({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div className="proof-chapter-plate-anchor" id={id}>
      {children}
    </div>
  );
}

function PlateReference({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="proof-chapter-plate-reference" aria-label={`Reference to ${label}`}>
      <strong>Diagram.</strong> <a href={href}>{label}</a> {children}
    </aside>
  );
}

function TopicIIIRecall() {
  return (
    <section className="proof-chapter-local-setup proof-chapter-recall" aria-labelledby="topic-iv-topic-iii-recall-heading">
      <p className="section-label">Recall from Topic III</p>
      <h4 id="topic-iv-topic-iii-recall-heading">The boundary objects and estimates used below</h4>
      <dl>
        <div>
          <dt><i>Q</i> and <i>y</i><sub>j</sub></dt>
          <dd><i>Q</i>=λ<i>P</i> is the image polygon, and the <i>y</i><sub>j</sub> are its vertices in positive cyclic order.</dd>
        </div>
        <div>
          <dt><i>k</i><sub>j</sub></dt>
          <dd>The number of vertices of <i>P</i> on the closed positive boundary interval from <i>y</i><sub>j</sub> to <i>y</i><sub>j+1</sub>.</dd>
        </div>
        <div>
          <dt>Supporting image-edge line</dt>
          <dd>If the line through [<i>y</i><sub>j</sub>,<i>y</i><sub>j+1</sub>] also supports <i>P</i>, the positive half-open boundary interval <span>(<i>y</i><sub>j</sub>,<i>y</i><sub>j+1</sub>]</span> lies on one side of <i>P</i> and contains at most one vertex of <i>P</i>.</dd>
        </div>
        <div>
          <dt>Proper image-edge cut</dt>
          <dd>If that line makes a proper cut, then <i>k</i><sub>j</sub>≤2, and at most one proper cut can attain <i>k</i><sub>j</sub>=2.</dd>
        </div>
      </dl>
      <p>
        These are the only counting estimates imported from Topic III. The
        endpoint indicator <i>c</i><sub>j</sub> and half-open count
        {" "}<i>r</i><sub>j</sub> used in Lemma 4.11 are defined locally in its proof.
      </p>
    </section>
  );
}

function StandingContactAssumptions() {
  return (
    <section className="proof-chapter-local-setup proof-chapter-standing-setup" aria-labelledby="right-admissible-setup-heading">
      <p className="section-label">Standing setup · unnumbered</p>
      <h4 id="right-admissible-setup-heading">Standing assumptions for the half-open contact data</h4>
      <p>
        After the possible conjugation in Lemma 4.13, rename the selected
        multiplier λ and keep that orientation fixed. Write
        {" "}<span>λ=ρe<sup>iθ</sup></span>. Ellipticity makes λ nonreal, so the
        positive-argument convention gives
        {" "}<span>θ=arg<sub>+</sub>(λ)∈(0,2π)</span>. The arguments below use the
        following five assumptions. For every index <i>i</i> modulo <i>N</i>, write
        {" "}<span><i>E</i><sub>i</sub>=[<i>x</i><sub>i−1</sub>,<i>x</i><sub>i</sub>]</span>
        {" "}for the closed side and
        {" "}<span><i>E</i><sub>i</sub><sup>+</sup>=(<i>x</i><sub>i−1</sub>,<i>x</i><sub>i</sub>]</span>
        {" "}for the corresponding right-half-open side.
      </p>
      <ol>
        <li><strong>(A0)</strong> Multiplication by λ is <i>N</i>-critical in the sense of Definition 1.1.</li>
        <li><strong>(A1)</strong> <i>P</i>=conv{"{"}<i>x</i><sub>0</sub>,…,<i>x</i><sub><i>N</i>−1</sub>{"}"} is a convex <i>N</i>-gon, and the displayed list contains exactly its extreme points in positive cyclic order.</li>
        <li><strong>(A2)</strong> λ<i>P</i>⊆<i>P</i> with 0&lt;|λ|&lt;1; every side of <i>P</i> intersects λ<i>P</i>, and every vertex of λ<i>P</i> lies on ∂<i>P</i>.</li>
        <li><strong>(A3)</strong> One representative κ∈{"{1,…,N}"} is fixed, and <span>ξ<sub>i</sub>=λ<i>x</i><sub>i−κ</sub>∈<i>E</i><sub>i</sub><sup>+</sup></span> for every <i>i</i>. Thus every right-half-open side contains exactly one assigned image vertex, and equation (4.12) supplies its barycentric coefficients.</li>
        <li><strong>(A4)</strong> <span><i>S</i>={"{"}<i>i</i>∈ℤ/<i>N</i>ℤ:ξ<sub>i</sub>∈relint(<i>E</i><sub>i</sub>){"}"}</span> records exactly the sides whose assigned image vertex lies in the relative interior.</li>
      </ol>
      <p>Every later reference to the <dfn>standing contact data</dfn> means precisely a tuple satisfying (A0)–(A4).</p>
      <p>No later vertex replacement silently reverses the orientation or changes the side labels.</p>
    </section>
  );
}

function ProperShiftReminder({ children }: { children: React.ReactNode }) {
  return (
    <aside className="proof-chapter-scope-reminder">
      <strong>Standing scope.</strong> The vertex-replacement section continues under
      {" "}1≤κ&lt;<i>N</i>. {children}
    </aside>
  );
}

function ContactIndexDictionary() {
  return (
    <section className="proof-chapter-local-setup" aria-labelledby="topic-iv-index-dictionary-heading">
      <p className="section-label">Before Proposition 5.1 · indexed and side-based notation</p>
      <h4 id="topic-iv-index-dictionary-heading">The same contact data in two notations</h4>
      <p>
        The subset
        {" "}<span><i>S</i>={"{"}<i>i</i>∈ℤ/<i>N</i>ℤ:β<sub>i</sub>&gt;0{"}"}</span>
        {" "}is the set of indices of the sides with relative-interior contact.
        The corresponding set of sides is <i>I</i>. With
        {" "}<span><i>E</i><sub>i</sub>=[<i>x</i><sub>i−1</sub>,<i>x</i><sub>i</sub>]</span>,
        the complete dictionary is
      </p>
      <dl>
        <div>
          <dt><i>I</i>={"{"}<i>E</i><sub>i</sub>:β<sub>i</sub>&gt;0{"}"}</dt>
          <dd>The side-based form of the indexed set <i>S</i>.</dd>
        </div>
        <div>
          <dt>head(<i>E</i><sub>i</sub>)=<i>x</i><sub>i</sub></dt>
          <dd>The head of the oriented side is its included endpoint.</dd>
        </div>
        <div>
          <dt>succ(<i>E</i><sub>i</sub>)=<i>E</i><sub>i+1</sub></dt>
          <dd>The successor map advances to the next side.</dd>
        </div>
        <div>
          <dt><i>σ</i>(<i>E</i><sub>i</sub>)=<i>E</i><sub>i+κ</sub></dt>
          <dd>The side-label translation advances by the fixed shift κ.</dd>
        </div>
      </dl>
      <p>All indices are read modulo <i>N</i>.</p>
    </section>
  );
}

function CyclicIntervalReminder() {
  return (
    <section className="proof-chapter-local-setup" aria-labelledby="topic-iv-block-terms-heading">
      <p className="section-label">Language used in Lemma 5.5</p>
      <h4 id="topic-iv-block-terms-heading">Connected components and cyclic relabelling</h4>
      <p>
        Regard the indices as the vertices of the cycle graph <i>C</i><sub>N</sub>.
        A connected component of <i>S</i> is therefore a maximal
        cyclic interval of consecutive indices, including adjacency across the
        wrap from <i>N</i>−1 to 0. A <dfn>cyclic
        relabelling</dfn> adds one fixed index to every label modulo <i>N</i>;
        it changes where the list begins, not the polygon or its cyclic order.
      </p>
      <p>
        Write <span>comp(<i>S</i>)</span> for the number of connected components
        of the induced graph <span><i>C</i><sub>N</sub>[<i>S</i>]</span>. Once the
        proof has reduced <i>S</i> to one cyclic interval, <span>φ=|<i>S</i>|</span>
        denotes the number of indices in that interval.
      </p>
    </section>
  );
}

function TopicIVProofSpine() {
  return (
    <section className="proof-chapter-local-setup" aria-labelledby="topic-iv-proof-spine-heading">
      <p className="section-label">The proof in four steps</p>
      <h3 id="topic-iv-proof-spine-heading">From boundary order to one interval</h3>
      <ol>
        <li><strong>Choose one half-open convention.</strong> Endpoint counts and cyclic order place exactly one image vertex in every half-open side.</li>
        <li><strong>Identify one cyclic shift.</strong> The side assignment is order preserving, so under the chosen labels it is the translation <span><i>E</i><sub>i</sub>↦<i>E</i><sub>i+κ</sub></span>; lifted angles locate κ without an unaccounted multiple of 2π.</li>
        <li><strong>Realize one index-set update.</strong> Proposition 5.1 replaces one polygon vertex and proves the exact change <span><i>S</i>↦(<i>S</i>∖{"{i}"})∪{"{i+κ}"}</span>.</li>
        <li><strong>Minimize among realizable sets.</strong> Call a set <dfn>reachable</dfn> when it is obtained from the initial <i>S</i> by finitely many updates realized by Proposition 5.1. Among these reachable sets, one consists of a single cyclic interval.</li>
      </ol>
    </section>
  );
}

function TopicIVContents() {
  return (
    <nav className="proof-chapter-contents" aria-labelledby="topic-iv-contents-heading">
      <div>
        <p className="section-label">On this page</p>
        <h3 id="topic-iv-contents-heading">Topic IV at a glance</h3>
      </div>
      <div>
        <section aria-labelledby="topic-iv-contents-a">
          <h4 id="topic-iv-contents-a">IV-A · Choose one cyclic shift of the side labels</h4>
          <ol>
            <li><a href="#part-i-item-27"><span>4.10</span> Endpoint counts</a></li>
            <li><a href="#part-i-item-28"><span>4.11</span> Cyclic interlacing</a></li>
            <li><a href="#part-i-item-29"><span>4.12</span> One image per side</a></li>
            <li><a href="#part-i-item-30"><span>4.13</span> One cyclic shift</a></li>
            <li><a href="#part-i-item-31"><span>4.14</span> Iterated endpoint equalities</a></li>
          </ol>
        </section>
        <section aria-labelledby="topic-iv-contents-b">
          <h4 id="topic-iv-contents-b">IV-B · Reduce the indices with relative-interior contact</h4>
          <ol>
            <li><a href="#part-i-item-32"><span>5.1</span> Exact vertex replacement</a></li>
            <li><a href="#part-i-item-33"><span>5.2</span> Equivariant update</a></li>
            <li><a href="#part-i-item-34"><span>5.3</span> Permitted sequences</a></li>
            <li><a href="#part-i-item-35"><span>5.4</span> Successive updates</a></li>
            <li><a href="#part-i-item-36"><span>5.5</span> One cyclic interval</a></li>
          </ol>
        </section>
      </div>
    </nav>
  );
}

const dmitriev = ["dmitriev-dynkin-1946", "swift-1972"] as const;
const karpelevicOnly = ["karpelevic-1951"] as const;
const karpelevicHistory = {
  surgery: <>Karpelevič (1951), §3, Lemma 1, contains an antecedent of the vertex replacement. The proof here supplies the exact side labels, all coincidence cases, and every global incidence used later.</>,
  intrinsic: <>Karpelevič (1951), §3, contains an antecedent of the indexed set update. This corollary records the corresponding equivariant formula after the old and new labelled side sets are identified.</>,
  sequences: <>Karpelevič (1951), §3, uses admissible finite index configurations as a historical antecedent. The finite induction realizing every stated update by invariant polygons is proved here.</>,
  sweeps: <>Karpelevič (1951), §3, contains the successive-update mechanism. This corollary verifies that every step used in Lemma 5.5 is realized by an actual polygon vertex replacement.</>,
  block: <>Karpelevič (1951), §3, Lemma 3 and Theorems I–II, contain antecedents of the reduction mechanism. The repeatability, orbit, and least-first-entrance arguments used here are supplied in full.</>,
};

const selectionResults: readonly ProofResultData[] = [
  {
    id: "part-i-item-27",
    label: "Lemma 4.10",
    kind: "Lemma",
    title: "Finite cyclic endpoint count",
    purpose: "Convert one possible arc containing two vertices and one possible arc containing none into a uniform count for the opposite half-open convention.",
    manuscriptHtml: completeHtml("27", "lem:cyclic-endpoint-ledger"),
    vocabulary: [
      { term: "Cyclic word", definition: <>A finite list whose last entry is followed again by its first; every index is read modulo <i>N</i>.</> },
      { term: "Binary transition", definition: <>A change 0→1 or 1→0 between adjacent entries, including the wrap from entry <i>N−1</i> back to entry 0.</> },
      { term: "Changing the included endpoint", definition: <>Adding <i>c</i><sub>j</sub>−<i>c</i><sub>j+1</sub> to the right-half-open count removes the old included endpoint when necessary and includes the opposite endpoint instead.</> },
    ],
    intuition: <>If one of <i>N</i> counts is 2 while their total remains <i>N</i>, exactly one count must be 0. A cyclic binary word has equally many upward and downward transitions, so changing which endpoint is included cancels these two exceptional counts.</>,
    figure: <PlateAnchor id="plate-iv-1-endpoint-count"><OwnershipMutationFigure kind="endpoint-ledger" id="topic-iv-endpoint-ledger" /></PlateAnchor>,
    proofSteps: [
      { title: "Handle the uniform case", explanation: <>Without an entry 2, all <i>N</i> entries are at most 1 and sum to <i>N</i>, so every entry is 1.</> },
      { title: "Locate the unique deficit", explanation: <>One entry 2 contributes one unit above baseline. Since no other entry exceeds 1, the total forces one and only one zero.</> },
      { title: "Balance cyclic transitions", explanation: <>The telescoping sum Σ(<i>c</i><sub>j+1</sub>−<i>c</i><sub>j</sub>)=0 says upward and downward transitions occur equally often.</> },
      { title: "Use the allowed transition sites", explanation: <>The prescribed rise occurs at the unique 2; every fall may occur only at a zero, so the unique zero carries the unique fall.</> },
      { title: "Evaluate the corrected counts", explanation: <>At the 2, at the 0, and at every ordinary index, <i>ℓ</i><sub>j</sub>=<i>r</i><sub>j</sub>+<i>c</i><sub>j</sub>−<i>c</i><sub>j+1</sub>=1.</> },
    ],
    takeaway: <>The exceptional 2/0 pair disappears when the other half-open endpoint convention is used.</>,
    sourceIds: dmitriev,
    sourceRelation: <>Dmitriev–Dynkin’s half-open contact argument, available in Swift’s translation, is the historical antecedent. The precise finite <i>r</i>–<i>c</i>–<i>ℓ</i> identity used here is proved on this page.</>,
  },
  {
    id: "part-i-item-28",
    label: "Lemma 4.11",
    kind: "Lemma",
    title: "Cyclic interlacing with endpoint membership",
    purpose: "Upgrade Topic III’s boundary-interval bound into a global assertion: one consistently oriented half-open gap contains exactly one vertex of P everywhere.",
    manuscriptHtml: completeHtml("28", "lem:cyclic-interlacing"),
    prelude: <TopicIIIRecall />,
    vocabulary: [
      { term: "Interlacing", definition: <>Two cyclic point sets interlace when exactly one point of one set occurs in each specified gap between consecutive points of the other.</> },
      { term: "Orientation reversal", definition: <>Complex conjugation reflects the plane and reverses boundary order. Reindexing by <span>x̃<sub>i</sub>=conj(x<sub>−i</sub>)</span> restores positive order.</> },
      { term: "Closed-interval count versus half-open count", definition: <><i>k</i><sub>j</sub> counts vertices on the closed positive boundary interval; <i>r</i><sub>j</sub> counts them on the corresponding right-half-open interval. Their difference is whether the left endpoint is already a polygon vertex.</> },
    ],
    intuition: <>Topic III allows at most one boundary interval containing two vertices. If it occurs, the total forces one interval to contain none. Side touching dictates where endpoint membership can change, exactly matching Lemma 4.10’s finite count.</>,
    figure: <PlateAnchor id="plate-iv-2-interlacing"><OwnershipMutationFigure kind="interlacing" id="topic-iv-cyclic-interlacing" /></PlateAnchor>,
    proofSteps: [
      { title: "Create the two boundary counts", explanation: <>The right-half-open intervals partition the <i>N</i> vertices of <i>P</i>, giving Σ<i>r</i><sub>j</sub>=<i>N</i>; the endpoint indicator <i>c</i><sub>j</sub> relates <i>r</i><sub>j</sub> to the closed-interval count.</> },
      { title: "Import the boundary-interval bound", explanation: <>If the image edge lies on a side of <i>P</i>, the count is at most 1. A proper image-edge cut has count at most 2, and only one such cut may attain 2.</> },
      { title: "Find the mandatory rise", explanation: <>On the unique interval containing two vertices of <i>P</i>, the left endpoint cannot be a vertex of <i>P</i>, while the right endpoint must be one—otherwise a side between consecutive vertices of <i>P</i> would contain no image vertex.</> },
      { title: "Confine every fall", explanation: <>A 1→0 endpoint transition away from the unique interval containing no vertex would create a second proper cut whose closed interval contains two old vertices, contradicting Topic III.</> },
      { title: "Apply the endpoint count", explanation: <>Lemma 4.10 makes every opposite half-open count equal to one.</> },
      { title: "Translate gaps into sides", explanation: <>The unique vertex of <i>P</i> in each image gap gives one image vertex in each half-open side of <i>P</i>.</> },
      { title: "Repair the other orientation", explanation: <>If the first alternative holds, conjugate and reindex. Track the included and excluded endpoints explicitly to obtain right-half-open sides in positive order.</> },
    ],
    takeaway: <>After complex conjugation and positive reindexing when necessary, the entire polygon uses one right-half-open endpoint convention.</>,
    sourceIds: dmitriev,
    sourceRelation: <>Dmitriev–Dynkin’s theorem assigning contacts to half-open sides, available in Swift’s translation, is the historical antecedent. The complete boundary-interval and endpoint-count argument used here is proved on this page.</>,
  },
  {
    id: "part-i-item-29",
    label: "Corollary 4.12",
    kind: "Corollary",
    title: "One image vertex in every half-open side",
    purpose: "Turn interlacing into a labelled bijection between the image vertices and the half-open sides of P.",
    manuscriptHtml: completeHtml("29", "cor:global-half-open-ownership"),
    takeaway: <>Every side index has exactly one assigned image vertex, so the vertex labels and side labels can now be compared globally.</>,
    provenance: "Previously known",
    sourceIds: dmitriev,
    sourceRelation: <>Swift (1972), Appendix A, §2, Supporting Theorem III, together with the proof of Basic Theorem 5.1 at A-16 (PDF p. 119), contains the one-image-per-side result. The present page fixes the labels and half-open convention explicitly.</>,
  },
  {
    id: "part-i-item-30",
    label: "Lemma 4.13",
    kind: "Lemma",
    title: "Order-preserving half-open contact assignment",
    purpose: "Show that every vertex-to-side contact label is one fixed cyclic shift and place the argument of the multiplier in its corresponding rational interval.",
    manuscriptHtml: completeHtml("30", "lem:one-sided-contact"),
    vocabulary: [
      { term: "Cyclic-order-preserving bijection", definition: <>A bijection sending each successor to the successor of its image. Once the image of one index is known, all others follow, so the map is a single translation modulo <i>N</i>.</> },
      { term: "Integer representative κ", definition: <>The cyclic shift is initially defined modulo <i>N</i>. The choice <i>κ∈</i>{"{1,…,N}"} is the representative compatible with the positive argument of the multiplier.</> },
      { term: "Lifted polar angle", definition: <>A real angle <i>Θ</i><sub>i</sub>, not just an angle modulo 2π, chosen with <i>Θ</i><sub>i+N</sub>=<i>Θ</i><sub>i</sub>+2π.</> },
      { term: "The integer mᵢ", definition: <>Before the correct real-valued lift has been identified, two representatives of the same cyclic angle may differ by 2π<i>m</i><sub>i</sub> for some integer <i>m</i><sub>i</sub>.</> },
    ],
    intuition: <>Multiplication by a nonzero complex number preserves cyclic order. Therefore the contact bijection cannot scramble the labels: it shifts all of them by the same <i>κ</i>. Unwrapping the angles shows exactly which interval contains the rotation. Plate IV.3 draws the case <i>κ</i>=3 and labels the excluded left endpoint explicitly; its arrow simply means “add the multiplier’s argument.”</>,
    figure: <PlateAnchor id="plate-iv-3-lifted-shift"><OwnershipMutationFigure kind="lifted-shift" id="topic-iv-contact-shift" /></PlateAnchor>,
    proofSteps: [
      { title: "Select one orientation", explanation: <>Keep the area-minimal representative or use its conjugate, according to Lemma 4.11, so every right-half-open side contains one assigned image vertex.</> },
      { title: "Prove the single-shift claim", explanation: <>An order-preserving bijection of cyclic <i>N</i>-sets sends successors to successors; after one image is fixed it must be <i>j↦j+κ</i>.</> },
      { title: "Read the barycentric coefficients", explanation: <>Membership in <span>(x<sub>i−1</sub>,x<sub>i</sub>]</span> gives the unique barycentric coefficients in equation (4.12), with the left coefficient allowed to vanish only when the contact is the included endpoint.</> },
      { title: "Eliminate the possible 2π shift", explanation: <>Side incidence first gives equation (4.14) with the integer term 2π<i>m</i><sub>i</sub>, which accounts for a possible shift by a whole number of turns. If <i>κ&lt;N</i>, the difference spans fewer than all angular gaps; if <i>κ=N</i>, its endpoints are computed directly. In either case only <i>m</i><sub>i</sub>=0 is compatible with 0&lt;<i>ϑ</i>&lt;2π.</> },
      { title: "Sum one complete period", explanation: <>The two shifted angle sums differ from Σ<i>Θ</i><sub>i</sub> by 2π<i>κ</i> and 2π. This gives the weak upper bound and strict lower bound.</> },
      { title: "Make the upper bound strict", explanation: <>Equality would make every contact an endpoint. Following a shift orbit gives <span>x<sub>i</sub>=μ<sup>N/gcd(N,κ)</sup>x<sub>i</sub></span>, impossible because vertices are nonzero and |μ|&lt;1.</> },
      { title: "Handle κ=N", explanation: <>An endpoint would give μ<i>x</i><sub>i</sub>=<i>x</i><sub>i</sub>, the same contraction contradiction; therefore every assigned image vertex lies in the relative interior of its side.</> },
    ],
    takeaway: <>The side assignment is now encoded by the representative <i>κ</i> of its cyclic shift, the barycentric coefficients, and the strict inequality <span>(κ−1)/N&lt;ϑ/(2π)&lt;κ/N</span>.</>,
    provenance: "Strengthened",
    sourceIds: [...dmitriev, "karpelevic-1951"],
    sourceRelation: <>Swift (1972), Appendix A, §2, Basic Theorem 5.1, with the statement at A-5 and the relevant proof at A-16, supplies the half-open contact assignment. Karpelevič (1951), §2, quotes and uses that contact theorem. The statement here strengthens that antecedent by adding the explicit cyclic shift, the lift check, and the endpoint-equality argument.</>,
  },
  {
    id: "part-i-item-31",
    label: "Lemma 4.14",
    kind: "Lemma",
    title: "Iteration of endpoint equalities for lifted arguments",
    purpose: "Iterate endpoint contacts on the real angle line after resolving the integer ambiguity in the chosen arguments.",
    manuscriptHtml: completeHtml("31", "lem:lifted-endpoint-paths"),
    prelude: <StandingContactAssumptions />,
    intuition: <>Endpoint contacts telescope exactly. The first relative-interior contact breaks the equality and places the final lifted angle strictly between the two endpoint angles of its side.</>,
    figure: <PlateReference href="#plate-iv-3-lifted-shift" label="See Plate IV.3 above.">The same lifted angle line shows both one endpoint step and a sequence of exact endpoint cases.</PlateReference>,
    proofSteps: [
      { title: "Repeat the lift check", explanation: <>Begin with an integer accounting for a possible 2π shift and use the same two range estimates as Lemma 4.13 to force it to zero at every side index.</> },
      { title: "Recognize endpoint equality", explanation: <>At an endpoint, the image equals the right endpoint <i>x</i><sub>j</sub>, so the right-hand angle inequality is equality.</> },
      { title: "Telescope exact steps", explanation: <>Successive side indices differing by <i>κ</i> produce equation (4.16) after <i>t</i> equal endpoint steps.</> },
      { title: "Stop at the first relative-interior contact", explanation: <>Use the endpoint equalities for the first <i>t−1</i> steps, then apply the relative-interior inequality at the final side index to get (4.17).</> },
    ],
    takeaway: <>The later return calculation can add contact angles as ordinary real numbers rather than congruence classes.</>,
    sourceIds: ["standard-covering-spaces", "standard-convexity"],
    sourceRelation: <>Hatcher, <cite>Algebraic Topology</cite>, §1.3, supplies the standard covering-space lift for circle angles; Schneider, Chapter 1, supplies convex-boundary angular order. The exact consequence for an iterated sequence of endpoint equalities is derived here.</>,
  },
];

const mutationResults: readonly ProofResultData[] = [
  {
    id: "part-i-item-32",
    label: "Proposition 5.1",
    kind: "Proposition",
    title: "Exact local vertex replacement",
    purpose: "Prove that replacing one contacted vertex realizes the update of the set S while preserving every geometric and labelled requirement.",
    manuscriptHtml: completeHtml("32", "lem:contact-surgery"),
    vocabulary: [
      { term: "Relative-interior and endpoint indices", definition: <>Side index <i>i</i> has relative-interior contact when β<sub>i</sub>&gt;0 and endpoint contact when β<sub>i</sub>=0.</> },
      { term: "The set S", definition: <><i>S</i>={"{"}<i>j</i>:β<sub>j</sub>&gt;0{"}"}⊆ℤ/<i>N</i>ℤ consists exactly of the indices of sides whose assigned image vertex lies in the relative interior.</> },
      { term: "Permitted replacement at i", definition: <>The hypotheses <i>i∈S</i> and <i>i+1∉S</i> say that side <i>i</i> has relative-interior contact and the following side has endpoint contact. The construction replaces <i>x</i><sub>i</sub> by <i>ξ</i><sub>i</sub>.</> },
      { term: "Removed and added side indices", definition: <>The update removes side index <i>i</i> from <i>S</i> and includes side index <i>i+κ</i>. These are changes of side-index membership; no geometric image vertices merge.</> },
      { term: "Decrease in cardinality", definition: <>If <i>i+κ</i> already belongs to <i>S</i>, then removing <i>i</i> and re-including <i>i+κ</i> decreases |<i>S</i>| by one.</> },
    ],
    intuition: <>This proposition justifies working with the finite subset <i>S</i>. It separately checks the retained-half-plane intersection, that the displayed points remain exactly the extreme points in positive cyclic order, invariance, the changed image, every unchanged label, the barycentric-coefficient update, and preservation of the representative κ of the cyclic shift.</>,
    figure: <PlateAnchor id="plate-iv-4-contact-surgery"><OwnershipMutationFigure kind="surgery" id="topic-iv-contact-surgery" /></PlateAnchor>,
    proofSteps: [
      { title: "Stage 1 · Identify the retained-half-plane intersection", explanation: <>The hypotheses make <i>ξ</i><sub>i</sub> a relative-interior contact and give <i>ξ</i><sub>i+1</sub>=<i>x</i><sub>i+1</sub>. The image-edge line through these points bounds a half-plane containing <i>Q=λP</i>. Determinants (5.3)–(5.4) show that intersecting <i>P</i> with this half-plane discards only <i>x</i><sub>i</sub>. The three changed turn determinants remain positive. Assumption (A0) says that the unchanged multiplier is <i>N</i>-critical, so Theorem 3.2 applies to the new invariant <i>N</i>-gon and shows that each side has nonempty intersection with the new image polygon and every image vertex lies on the new boundary.</> },
      { title: "Stage 2 · Account for every unchanged vertex image and side", explanation: <>The incidence table separates the removed side index <i>i</i>, index <i>i+1</i> when κ≠1, the added side index <i>j</i><sub>0</sub>=<i>i+κ</i>, and every other index. At <i>N=3</i>, the κ=2 row also covers κ=<i>N−1</i>.</> },
      { title: "Stage 3 · Locate the changed image before reading its barycentric coefficients", explanation: <>Write <i>A=λx</i><sub>i−1</sub>, <i>B=λx</i><sub>i</sub>, and <i>η</i><sub>j0</sub>=β<i>A</i>+α<i>B</i>. Lemma 4.5 first places <i>A=x′</i><sub>j0−1</sub> and the whole segment [<i>A,B</i>] on <i>E′</i><sub>j0</sub>. Thus <i>η</i><sub>j0</sub> belongs to that new half-open side; only then are its unique barycentric coefficients read off, yielding (5.1) and the set update (5.2).</> },
      { title: "Stage 4 · Complete the assignment and check every side inequality", explanation: <>The half-open partition makes the assignment one-to-one. Lemma 4.6 supplies every side inequality, while <span>η<sub>j</sub>=λx′<sub>j−κ</sub></span> shows that the same representative κ of the cyclic shift still describes all labels.</> },
    ],
    takeaway: <>Every update at an index satisfying <span><i>i</i>∈<i>S</i></span> and <span><i>i</i>+1∉<i>S</i></span> is realized by a new invariant convex <i>N</i>-gon satisfying (A0)–(A4), with <span><i>S</i><sup>′</sup>=(<i>S</i>∖{"{i}"})∪{"{i+κ}"}</span>.</>,
    sourceIds: karpelevicOnly,
    sourceRelation: karpelevicHistory.surgery,
  },
  {
    id: "part-i-item-33",
    label: "Corollary 5.2",
    kind: "Corollary",
    title: "Equivariance under the label-preserving bijection between old and new side sets",
    purpose: "Rewrite the indexed update after identifying each old labelled side with the correspondingly labelled new side.",
    manuscriptHtml: completeHtml("33", "cor:intrinsic-mutation-law"),
    prelude: <p>In this corollary, <i>T</i> is the same real-linear map that the present complex coordinates write as multiplication by λ. Only the notation changes; the map does not.</p>,
    vocabulary: [
      { term: "The maps χ and succ", definition: <><i>χ</i> assigns to each polygon vertex the unique half-open side containing its image. The successor succ(<i>E</i><sub>i</sub>)=<i>E</i><sub>i+1</sub> is the next side in positive cyclic order.</> },
      { term: "The side-label translation σ", definition: <><i>σ</i>(<i>E</i><sub>i</sub>)=<i>E</i><sub>i+κ</sub> is the cyclic-order-preserving permutation induced by the contact assignment; under the chosen labels, it is translation by κ modulo <i>N</i>.</> },
      { term: "The label-preserving bijection b", definition: <><i>b</i>(<i>E</i><sub>j</sub>)=<i>E</i><sub>j</sub><sup>′</sup> identifies each old side with the new side carrying the same index. This bijection is needed because the unprimed and primed maps have different side sets as domains.</> },
    ],
    takeaway: <>With <i>b</i>(<i>E</i><sub>j</sub>)=<i>E</i><sub>j</sub><sup>′</sup>, one has <span><i>b</i>∘succ=succ<sup>′</sup>∘<i>b</i></span>, <span><i>σ</i><sup>′</sup>=<i>b</i>∘<i>σ</i>∘<i>b</i><sup>−1</sup></span>, and the stated set update.</>,
    sourceIds: karpelevicOnly,
    sourceRelation: karpelevicHistory.intrinsic,
  },
  {
    id: "part-i-item-34",
    label: "Corollary 5.3",
    kind: "Corollary",
    title: "Geometric realization of every permitted update sequence",
    purpose: "Guarantee an actual invariant polygon after every step of any finite sequence of permitted updates to the subset S.",
    manuscriptHtml: completeHtml("34", "cor:legal-chip-sequence"),
    prelude: <ProperShiftReminder>Each stage begins and ends with a tuple satisfying (A0)–(A4).</ProperShiftReminder>,
    intuition: <>Induct on the number of updates. Proposition 5.1 preserves (A0)–(A4), including the representative κ and the half-open side assignment, and realizes the stated change of <i>S</i>. The next permitted update can therefore be applied to the resulting polygon with the same labels.</>,
    takeaway: <>Every finite sequence of permitted set updates corresponds to a genuine sequence of invariant polygons.</>,
    sourceIds: karpelevicOnly,
    sourceRelation: karpelevicHistory.sequences,
  },
  {
    id: "part-i-item-35",
    label: "Corollary 5.4",
    kind: "Corollary",
    title: "Realization of the successive updates used in Lemma 5.5",
    purpose: "Apply Corollary 5.3 to the finite right-to-left update sequences used in the reduction argument.",
    manuscriptHtml: completeHtml("35", "cor:boolean-sweeps-geometric"),
    prelude: <ProperShiftReminder>After choosing consecutive representatives <span>C={"{"}<i>a</i>,<i>a</i>+1,…,<i>b</i>{"}"}</span> for one connected component of <i>S</i>, a <dfn>complete right-to-left component update</dfn> applies Proposition 5.1 successively at <i>b</i>,<i>b</i>−1,…,<i>a</i>. The index <i>b</i>+1 is initially outside <i>S</i>; after each update, the index immediately to the left has just lost its following neighbour from <i>S</i>, so the next update is permitted. The same fixed shift κ is used at every step. This corollary is the direct specialization of Corollary 5.3 needed in Lemma 5.5.</ProperShiftReminder>,
    sourceIds: karpelevicOnly,
    sourceRelation: karpelevicHistory.sweeps,
  },
  {
    id: "part-i-item-36",
    label: "Lemma 5.5",
    kind: "Lemma",
    title: "Reduction to one cyclic interval and a first-entrance identity",
    purpose: "Minimize within the reachable sets S and prove that the remaining indices form one cyclic interval meeting every shift orbit.",
    manuscriptHtml: completeHtml("36", "lem:one-block"),
    prelude: <CyclicIntervalReminder />,
    vocabulary: [
      { term: "Lexicographic minimum", definition: <>First minimize |<i>S</i>|; among sets with the same cardinality, minimize the number of connected components of the induced subgraph <i>C</i><sub>N</sub>[<i>S</i>].</> },
      { term: "Shift orbit and δ", definition: <><i>δ=gcd(N,κ)</i>. Repeated addition of κ visits one residue class modulo δ, and each orbit has <i>N/δ</i> indices.</> },
      { term: "Representative [a]N", definition: <>The unique integer in <span>{`{0,…,N−1}`}</span> congruent to <i>a</i> modulo <i>N</i>.</> },
      { term: "First entrance time", definition: <>When φ&lt;<i>N</i>, this is the least positive <i>h</i> for which [<i>hκ</i>]<sub>N</sub> enters the terminal interval <span>{`{N−φ,…,N−1}`}</span>. The proof shows that the first value is exactly the interval’s left endpoint <i>N−φ</i>. When φ=<i>N</i>, the separate initial value <i>h</i>=0 is used.</> },
    ],
    intuition: <>If an update adds an index already in <i>S</i>, then |<i>S</i>| decreases. If a translated connected component joins another component without decreasing cardinality, then the number of components decreases. A lexicographically minimal reachable set permits neither event. Repeated updates then force distinct components to occupy disjoint residue classes, which is incompatible with meeting every shift orbit unless there is only one component.</>,
    figure: <PlateAnchor id="plate-iv-5-residue-block"><OwnershipMutationFigure kind="residue-block" id="topic-iv-residue-block" /></PlateAnchor>,
    proofSteps: [
      { title: "Choose a reachable minimizer", explanation: <>The reachable sets <i>S</i> lie in the finite power set of the cyclic indices, so the ordered pair <span>(|<i>S</i>|, comp(<i>S</i>))</span> attains a lexicographic minimum.</> },
      { title: "Update one connected component from right to left", explanation: <>The first index updated has its following index outside <i>S</i> by maximality; every later index sees the index immediately to its right removed one step earlier. If an added side index had already belonged to <i>S</i>, cardinality would have decreased already.</> },
      { title: "List the three possible outcomes", explanation: <>An added side index already in <i>S</i> lowers |<i>S</i>|; a disjoint translate adjacent to another component lowers the component count; a disjoint nonadjacent translate preserves both entries. Minimality permits only the third outcome.</> },
      { title: "Make the successive updates repeatable", explanation: <>After each complete update, the translated interval is again a connected component of <span><i>C</i><sub>N</sub>[<i>S</i>]</span>, disjoint from and nonadjacent to every unchanged component. Induction therefore permits arbitrarily many complete translates.</> },
      { title: "Force every orbit of addition by κ to meet S", explanation: <>If one orbit of <span><i>j</i>↦<i>j</i>+κ</span> contained only endpoint contacts, iterating their exact identities around its length <i>N/δ</i> would give <span>x<sub>j</sub>=λ<sup>N/δ</sup>x<sub>j</sub></span>, impossible for a nonzero vertex and |λ|&lt;1.</> },
      { title: "Separate residues of distinct components", explanation: <>If two components contained indices congruent modulo δ, repeated complete updates would send an index of one component to an index of the other, or would improve the lexicographic pair earlier. Both contradict minimality.</> },
      { title: "Force one connected component", explanation: <>A component of length at least δ already meets every residue class modulo δ. If all components are shorter, their disjoint intervals in the cyclic order of these residue classes cover every class; suitable κ-translates make two consecutive intervals adjacent, decreasing the component count.</> },
      { title: "Bound the cyclic interval length", explanation: <>The unique component must meet every one of the δ residues, so after cyclic relabelling it is <span>{"{1,…,φ}"}</span>, where <span>φ=|<i>S</i>|≥δ</span>.</> },
      { title: "Extract the first-entrance identity without Topic V", explanation: <>When φ&lt;<i>N</i>, update only the terminal index. Before its first entry into <span>{`{N−φ,…,N−1}`}</span>, its following index is outside <i>S</i>; entering the fixed part above its left endpoint would decrease cardinality. Hence the first entry is exactly <i>N−φ</i>, with every earlier residue smaller. The case φ=<i>N</i> uses the separate initial value <i>h</i>=0.</> },
    ],
    takeaway: <>The reachable set <i>S</i> has been reduced to one cyclic interval, together with one exact first-entrance relation for addition by κ modulo <i>N</i>.</>,
    sourceIds: karpelevicOnly,
    sourceRelation: karpelevicHistory.block,
  },
];

export const topicIVSourceIds = Array.from(
  new Set([...selectionResults, ...mutationResults].flatMap((result) => result.sourceIds ?? [])),
);

function ProperShiftBoundary() {
  return (
    <section className="topic-ii-reader-contract" aria-labelledby="proper-shift-heading">
      <header>
        <p className="section-label">Section 5 · standing assumption</p>
        <h3 id="proper-shift-heading">Standing assumption for Section 5</h3>
        <p>When κ=N, Lemma 4.13 already shows that every contact lies in a relative interior, so there is no following endpoint contact at which the local replacement can begin. Topic IV makes no replacement claim in that branch and imports no later result to dispose of it.</p>
      </header>
      <span className="part-i-numbered-equation" id="eq:kappa-proper">
        <math display="block" xmlns="http://www.w3.org/1998/Math/MathML">
          <semantics>
            <mrow>
              <mn>1</mn>
              <mo>≤</mo>
              <mi>κ</mi>
              <mo>&lt;</mo>
              <mi>N</mi>
              <mi>.</mi>
            </mrow>
            <annotation encoding="application/x-tex">{String.raw`1\leq\kappa<N.`}</annotation>
          </semantics>
        </math>
        <span className="part-i-equation-numbers">
          <a
            className="part-i-equation-number"
            href="#eq:kappa-proper"
            aria-label="Equation 4.18, permalink"
          >
            (4.18)
          </a>
        </span>
      </span>
    </section>
  );
}

function ShiftBoundaryRegister() {
  return (
    <>
      <ContactIndexDictionary />
      <section className="topic-ii-reader-contract" aria-labelledby="shift-boundary-register-heading">
        <header>
          <p className="section-label">Before Proposition 5.1 · all coincidence cases</p>
          <h3 id="shift-boundary-register-heading">Which labels can coincide during one permitted replacement?</h3>
          <p>Put <i>j</i><sub>0</sub>=<i>i+κ</i> modulo <i>N</i>. These are all possibilities; wrap-around creates no extra case.</p>
        </header>
        <div className="topic-ii-contract-grid">
          <section>
            <h4>κ=1</h4>
            <p><i>j</i><sub>0</sub>=<i>i+1</i>. The removed side index and added side index are the same, so the “unchanged index <i>i+1</i>” row is omitted.</p>
          </section>
          <section>
            <h4>κ=2</h4>
            <p><i>j</i><sub>0</sub>−1=<i>i+1</i>. The point <i>A</i> in the proof is the unchanged endpoint <i>x</i><sub>i+1</sub>; the hypothesis <i>i+1∉S</i> supplies its endpoint contact.</p>
          </section>
          <section>
            <h4>κ=N−1 or 3≤κ≤N−2</h4>
            <p>Both use the generic incidence row. When κ=<i>N</i>−1, the added side index is <i>i−1</i>, but neither endpoint of that side is the replaced vertex.</p>
          </section>
          <section>
            <h4>Small-order overlap</h4>
            <p>For <i>N</i>=3, κ=2 is also κ=<i>N</i>−1. The κ=2 row applies, so the two descriptions are not counted as separate cases.</p>
          </section>
        </div>
      </section>
    </>
  );
}

export function TopicIVChapter() {
  return (
    <>
      <TopicIVContents />
      <TopicIVProofSpine />

      <ProofDependencyContract
        imported={[
          { label: "Definition 1.1", href: sitePath("/proof/#part-i-item-1"), explanation: <>polygonal complexity and <i>N</i>-criticality, including the outward radial condition used by Theorem 3.2.</> },
          { label: "Definition 1.2", href: sitePath("/proof/#part-i-item-2"), explanation: <>oriented sides, assignment to half-open sides, successors, and the induced cyclic-order-preserving translation of side labels.</> },
          { label: "Proposition 2.3", href: sitePath("/proof/#part-i-item-7"), explanation: <>real-linear covariance of contact geometry.</> },
          { label: "Lemma 2.4", href: sitePath("/proof/#part-i-item-8"), explanation: <>the exact effect of complex conjugation on orientation and handedness.</> },
          { label: "Lemma 2.5", href: sitePath("/proof/#part-i-item-9"), explanation: <>the origin lies in the interior of the invariant polygon.</> },
          { label: "Lemma 2.6", href: sitePath("/proof/#part-i-item-10"), explanation: <>positive cyclic order on a convex boundary.</> },
          { label: "Lemma 2.7", href: sitePath("/proof/topic-ii/#part-i-item-11"), explanation: <>positive triple determinants characterize strict convex position.</> },
          { label: "Lemma 2.10", href: sitePath("/proof/topic-ii/#part-i-item-14"), explanation: <>lifted polar angles increase along the positively oriented boundary.</> },
          { label: "Theorem 3.2", href: sitePath("/proof/topic-ii/#part-i-item-16"), explanation: <>every side has nonempty intersection with the image polygon, and every image vertex lies on the boundary of <i>P</i>.</> },
          { label: "Lemma 4.1", href: sitePath("/proof/topic-ii/#part-i-item-18"), explanation: <>a side whose intersection with the image polygon is nonempty contains a vertex of that image polygon.</> },
          { label: "Definition 4.2 and Lemmas 4.3–4.9", href: sitePath("/proof/topic-iii/#part-i-item-19"), explanation: <>half-open side assignment, boundary rigidity, labelled side inequalities, exact image-edge clipping, and the least-area boundary-interval bound.</> },
        ]}
        provedHere={<p>Lemmas 4.10–4.14, Proposition 5.1, Corollaries 5.2–5.4, and Lemma 5.5. The cyclic transitions, orbits of addition by κ, and least-first-entrance relation are all defined and proved locally; no Topic V result is imported. These are exactly the endpoint-selection, vertex-replacement, and interval-reduction results on manuscript pages 19–30.</p>}
      />

      <ProofResultGroup
        number="IV-A · Endpoint order"
        title="Turn local boundary-interval counts into one cyclic shift of the side labels"
        introduction={<p>A finite endpoint count chooses the right-half-open endpoint convention. Cyclic order then turns the contact assignment into the side-label translation <span><i>E</i><sub>i</sub>↦<i>E</i><sub>i+κ</sub></span>, and lifted angles encode it without an unaccounted multiple of 2π.</p>}
        results={selectionResults}
      />

      <ProperShiftBoundary />

      <ProofResultGroup
        number="IV-B · Reduction to one interval"
        title="Prove the set update geometrically, then reduce to one cyclic interval"
        introduction={<p>The polygon and the subset <i>S</i> remain synchronized. Proposition 5.1 proves one vertex replacement in full; its corollaries justify finite sequences of the same update; Lemma 5.5 uses only the sets <i>S</i> reached in this way.</p>}
        prelude={<ShiftBoundaryRegister />}
        results={mutationResults}
      />
    </>
  );
}
