import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("proof-route-test", `${process.pid}-${Date.now()}`);
const workerPromise = import(workerUrl.href).then(({ default: worker }) => worker);

async function render(pathname) {
  const worker = await workerPromise;
  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

const chapters = [
  ["/proof/topic-ii", 10, 9],
  ["/proof/topic-iii", 10, 9],
  ["/proof/topic-iv", 10, 10],
  ["/proof/topic-v", 9, 7],
  ["/proof/topic-vi", 9, 7],
  ["/proof/topic-vii", 8, 8],
  ["/proof/topic-viii", 7, 6],
  ["/proof/topic-ix", 6, 3],
  ["/proof/topic-x", 3, 3],
  ["/proof/topic-xi", 5, 5],
  ["/proof/topic-xii/a", 2, 2],
  ["/proof/topic-xii/b", 2, 2],
  ["/proof/topic-xiii", 3, 3],
];

const proofRoutes = ["/proof", ...chapters.map(([pathname]) => pathname), "/proof/topic-xiv"];

for (const [pathname, expectedResults, expectedProofs] of chapters) {
  test(`${pathname} preserves its complete formal structure`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    const classLists = [...html.matchAll(/class="([^"]*)"/g)].map((match) =>
      match[1].split(/\s+/),
    );
    const resultCount = classLists.filter((tokens) =>
      tokens.includes("topic-i-textbook-item"),
    ).length;
    const proofCount = classLists.filter((tokens) =>
      tokens.includes("topic-i-proof-disclosure"),
    ).length;

    assert.equal(resultCount, expectedResults, "formal result-card count");
    assert.equal(proofCount, expectedProofs, "complete manuscript-proof count");
    assert.match(html, /<section[^>]*data-proof-chapter-controls="true"[^>]*>/);
    assert.match(html, /<script src="\/proof-chapter\.js" defer=""><\/script>/);
    assert.match(html, /<time dateTime="[^"]+"/);
    assert.doesNotMatch(html, /Previously claimed/);
    assert.doesNotMatch(html, /Unhandled Script Error|Internal Server Error/i);
  });
}

test("legacy Topic VI part routes redirect to the unified chapter", async () => {
  const aliases = [
    ["/proof/topic-vi/a", "#lem:holonomy-calibration"],
    ["/proof/topic-vi/b", "#lem:deformation-admissibility"],
  ];

  for (const [pathname, fragment] of aliases) {
    const response = await render(pathname);
    assert.equal(response.status, 307);
    assert.equal(
      new URL(response.headers.get("location")).pathname,
      "/proof/topic-vi/",
    );
    assert.equal(new URL(response.headers.get("location")).hash, fragment);
  }
});

test("the N=3 exception and the N>=4 projective scope remain coherent across topics", async () => {
  const topicV = await (await render("/proof/topic-v")).text();
  const topicVI = await (await render("/proof/topic-vi")).text();
  const topicVII = await (await render("/proof/topic-vii")).text();
  const topicVIII = await (await render("/proof/topic-viii")).text();
  const topicX = await (await render("/proof/topic-x")).text();
  const topicXI = await (await render("/proof/topic-xi")).text();
  const topicXIII = await (await render("/proof/topic-xiii")).text();
  const visibleText = (html) =>
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<annotation\b[\s\S]*?<\/annotation>/gi, " ")
      .replace(/<[^>]*>/g, " ")
      .replaceAll("&gt;", ">")
      .replaceAll("&lt;", "<")
      .replaceAll("&amp;", "&")
      .replace(/\s+/g, " ");
  const topicVText = visibleText(topicV);
  const topicVIText = visibleText(topicVI);
  const topicVIIText = visibleText(topicVII);
  const topicVIIIText = visibleText(topicVIII);
  const topicXText = visibleText(topicX);
  const topicXIText = visibleText(topicXI);
  const topicXIIIText = visibleText(topicXIII);

  const supersededTopicVToVIIITerms =
    /right-admissible|one-sided contact|projective corridor|\bcorridor\b|\bledger\b|hereditary saturation|contact rotation|side[- ]continuation|legal mutation|\bstrict set\b|\bunit return\b|return strip|Jensen sheet|Farey carrier|\bnew-shell\b|radial filling|stochastic.?polygon dictionary|no-skipping|\bnontransversal\b|(?:strict|endpoint|padding) fields?|return section/i;
  for (const [topic, text] of [
    ["V", topicVText],
    ["VI", topicVIText],
    ["VII", topicVIIText],
    ["VIII", topicVIIIText],
  ]) {
    assert.doesNotMatch(
      text,
      supersededTopicVToVIIITerms,
      `Topic ${topic} still exposes superseded private terminology`,
    );
  }

  assert.match(
    topicVText,
    /The cyclic arithmetic is isolated in this section[\s\S]*Fix integers N\s*≥\s*2/i,
  );
  assert.match(topicVText, /Throughout this section assume N\s*≥\s*4/i);
  assert.match(topicVText, /Critical invariant triangles with Δ=2/i);
  assert.match(topicVText, /Exceptional order N=3 · unnumbered proposition/i);
  assert.match(
    topicVText,
    /Unnumbered proposition\. For every 1\/2<a<1,[\s\S]*\(φ,κ,δ,Δ\)=\(3,2,1,2\)/i,
  );
  assert.match(topicVText, /Why the projective proof that Δ=1 requires N\s*≥\s*4/i);
  assert.match(topicVText, /Exceptional case N=3/);
  assert.match(
    topicVText,
    /ν\s*poly\s*\(T\) as the minimum number of vertices[\s\S]*calls T N-critical/i,
  );
  assert.match(topicV, /href="\/proof\/#def:N-critical"/);
  assert.match(topicV, /\\lambda P\\subseteq P/);
  assert.match(
    topicVText,
    /ν\s*poly\s*\(tTₐ\)>3 for every t>1/i,
  );
  assert.doesNotMatch(topicVText, /check radial criticality/i);
  assert.match(topicVText, /Four-stage roadmap/i);
  assert.match(
    topicVText,
    /Record vectors → first-return bijection → the Δ=1 progression → polygon contact identities/i,
  );
  assert.match(topicVText, /H₀=\{u∈ℝ³:u₀\+u₁\+u₂=0\}/);
  assert.match(topicVText, /tTₐQ=QΓ/);
  assert.match(topicVText, /ker\(Q\) invariant under Γ/);
  assert.doesNotMatch(topicVText, /tTₐA=AC|ker\(A\) invariant under C/);
  assert.match(
    topicVText,
    /This is the precise bridge to the record terminology used below/i,
  );
  assert.match(
    topicVText,
    /every earlier residue is smaller, and its deficit is therefore φ/i,
  );
  assert.match(
    topicVText,
    /declared time-zero record, whose deficit is N\s*=\s*φ/i,
  );
  assert.match(
    topicVText,
    /how does Topic V prepare the N≥4 proof of Δ=1 completed in Topic VI/i,
  );
  assert.match(topicV, /B_a=\\begin\{pmatrix\}0&amp;1-a&amp;a/);
  assert.match(topicVText, /\(φ,κ\)=\(3,2\)/);
  assert.match(topicVText, /Δ=3−1=2/);
  assert.match(topicVText, /Topic XIII is forthcoming on the public site/);
  const exceptionalCaseStart = topicV.indexOf("Exceptional case N=3");
  const projectiveScopeStart = topicV.indexOf('id="topic-v-return-setup"');
  const lemmaSevenOneStart = topicV.indexOf('id="part-i-item-40"');
  assert.ok(
    exceptionalCaseStart >= 0 &&
      exceptionalCaseStart < projectiveScopeStart &&
      projectiveScopeStart < lemmaSevenOneStart,
    "the N=3 interlude is separate from the N>=4 scope preceding Lemma 7.1",
  );
  const kleinSailDefinition = topicV.indexOf("Klein sail");
  const plateVOne = topicV.indexOf("Plate V.1.");
  assert.ok(
    kleinSailDefinition >= 0 && kleinSailDefinition < plateVOne,
    "the Klein sail is defined before Plate V.1",
  );
  assert.match(
    topicVText,
    /closed cone bounded by the positive b-axis and the ray L\(h,b\)=0[\s\S]*boundary visible from the origin/i,
  );
  assert.match(
    topicVText,
    /edges corresponding to α=1 or β=1 are excluded[\s\S]*every lattice coset has exactly one representative/i,
  );
  assert.doesNotMatch(topicVText, /open upper edges/i);
  assert.match(topicVText, /A matrix is doubly stochastic when its entries are nonnegative/);
  assert.match(topicVText, /e₀,e₁,e₂ be the standard coordinate vectors of ℝ³/);
  assert.match(topicVText, /Barycentric coordinates are nonnegative coefficients summing to one/);
  assert.match(topicVText, /the induced map on ℝ³\/ker\(Q\) is conjugate to tT/);
  assert.match(topicVText, /P=conv\{x₀,x₁,x₂\} lies in H₀; it is independent of a/);
  assert.match(topicVText, /Counted with algebraic multiplicity/);
  assert.match(
    topicVText,
    /for every t\s*>\s*1 the map tTₐ admits no invariant polygon with at most three vertices/i,
  );
  assert.match(topicVText, /ℓᵢ=λ\^\{-Hᵢ\} aff\(Eᵣ₍ᵢ₎\)/);
  assert.match(topicVText, /M∖\{b\*\}/);
  assert.match(topicVText, /The selected boundary arc omits at least one side/);
  assert.match(topicVText, /The two cyclic-orientation cases/);
  assert.match(topicVText, /Boundary-contact projection chain The consecutive vertices/);
  assert.match(topicVText, /Π:Λ₁→K/);
  assert.match(topicVText, /Choose endpoint supporting lines outside a finite exceptional set/);
  assert.doesNotMatch(topicVText, /An explicit interval of target indices in the selected cyclic orientation/);
  assert.doesNotMatch(topicVText, /The remaining target indices:/);
  assert.match(topicVText, /ω\(z\)≥ε₀ for every z∈P/);
  assert.match(topicVText, /All results assigned to this topic are proved/);
  assert.doesNotMatch(topicVText, /Supporting lines at the return vertices/i);
  assert.doesNotMatch(topicVText, /These are all three eigenvalues/i);
  assert.doesNotMatch(topicVText, /M°/);

  assert.match(topicVIText, /A projective deformation and the first-return step Δ\s*=\s*1/i);
  assert.match(topicVIText, /9 results/);
  assert.match(topicVIText, /7 complete proofs/);
  assert.match(topicVIText, /Notation and exact facts imported from Topics II–V/);
  assert.match(topicVIText, /Let V be the underlying two-dimensional real vector space/i);
  assert.match(topicVIText, /let T:V→V be the fixed invertible real-linear contraction/i);
  assert.match(topicVIText, /Ext\(Q\) denotes its set of extreme points and int\(Q\) its interior in V/i);
  assert.match(topicVIText, /there are integers q>0 and h≥0 such that every return time H\s*j belongs to \{q,q\+h\}/i);
  assert.match(topicVIText, /Assume N\s*≥\s*4\s*\. If φ\s*>\s*δ , then Δ\s*=\s*1/i);
  assert.match(topicVIText, /Supporting line ℒᵢ/);
  assert.match(
    topicVIText,
    /ℒᵢ is the supporting line whose intersection with the polygon is exactly \{Xᵢ\}[\s\S]*slope\(ℒᵢ\)/i,
  );
  assert.match(topicVIText, /M∖\{b\*\}/);
  assert.match(topicVIText, /supporting lines ℒ\s*i meeting P only at X\s*i/i);
  assert.match(topicVIText, /These are exactly the boundary-contact data of Definition 7\.4/i);
  assert.match(topicVIText, /Affine determinant function 𝒮 and its one-dimensional restriction d/);
  assert.match(topicVIText, /𝒮\(x,τ\)>0 defines (?:an?|the) open half-plane/);
  assert.match(topicVIText, /d\(t,τ\)=γ\(τ\)\(t[-−]u\(τ\)\)/);
  assert.match(topicVIText, /Side index kᵢ/);
  assert.match(topicVIText, /Index flow used in the proof/);
  assert.match(topicVIText, /𝓑=D⊔R⊔\{c\}⊔A records exactly which endpoint of the final incidence varies/);
  assert.match(topicVIText, /u\(τ\)<τ/);
  assert.match(topicVIText, /The first-return step satisfies Δ\s*=\s*1/);
  assert.match(topicVIText, /Contact and first-return structure of an N-critical invariant polygon/);
  assert.match(topicVIText, /First-return cases/);
  assert.match(topicVIText, /A half-open contact assignment is a cyclic-order-preserving bijection χ/);
  assert.match(topicVIText, /permitted local vertex replacement at e/);
  assert.match(topicVIText, /replaces head\(e\) by v′/);
  assert.doesNotMatch(topicVIText, /replaces h\(e\) by/);
  assert.match(topicVIText, /induced bijection between the old and new side sets, denoted by b in Theorem 1\.3/);
  assert.match(topicVIText, /formal theorem calls this operation a permitted local vertex replacement/);
  assert.match(topicVIText, /relative-interior contact set is I/);
  assert.match(topicVIText, /contact permutation is σ/);
  assert.match(topicVIText, /one representative from each σ-orbit means that I meets every orbit/);
  assert.doesNotMatch(topicVIText, /M°/);
  assert.doesNotMatch(
    topicVIText,
    /(?:supporting line|strict support)\s+L[ᵢₘ]/i,
  );
  assert.doesNotMatch(topicVIText, /contact-field|target field|strict field/i);
  assert.doesNotMatch(topicVIText, /\bseed\b|\bledger\b|\banchor\b/i);
  assert.doesNotMatch(
    topicVIText,
    /corridor holonomy|local holonomy|nonidentity holonomy|holonomy coordinate/i,
  );
  assert.doesNotMatch(topicVIText, /Part A|Part B|Topic VI-A|Topic VI-B/i);
  assert.doesNotMatch(
    topicVIText,
    /first principal theorem|four-set accounting|image-polygon vertex|invariant replacement polygon|strict convex order/i,
  );

  const topicVICard = (number, nextNumber) => {
    const start = topicVI.indexOf(`id="part-i-item-${number}"`);
    const end = topicVI.indexOf(`id="part-i-item-${nextNumber}"`, start + 1);
    assert.notEqual(start, -1, `Topic VI card ${number} exists`);
    return topicVI.slice(start, end < 0 ? topicVI.length : end);
  };
  assert.doesNotMatch(topicVICard(45, 46), /proof-chapter-provenance/);
  assert.doesNotMatch(topicVICard(46, 47), /proof-chapter-provenance/);
  assert.doesNotMatch(topicVICard(48, 49), /proof-chapter-provenance/);

  assert.match(topicVIIText, /Standing scope for critical-polygon monodromy: N\s*≥\s*4/);
  assert.match(topicVIIText, /More than one relative-interior contact in some orbit:?\s*φ\s*>\s*δ[\s\S]*Assume N\s*≥\s*4/i);
  assert.match(topicVIIText, /Return factors lie on (?:one|the) common continuous argument interval[\s\S]*Assume N\s*≥\s*4/i);

  assert.match(topicVIIIText, /orders one, two, and three are reserved for the direct proof in Topic XIII/i);
  assert.match(topicXText, /non-inherited radial maximum[\s\S]*N\s*≥\s*4/i);
  assert.match(topicXIText, /Orders at most three are handled independently in Topic XIII/i);
  assert.match(topicXIIIText, /At this induction stage n\s*≥\s*4/i);
});

test("Topic IV exposes its local setup, typed set-update guide, and five unique plates", async () => {
  const response = await render("/proof/topic-iv");
  assert.equal(response.status, 200);

  const html = await response.text();
  const figureCount = [...html.matchAll(/class="[^"]*\btopic-ii-concept-figure\b[^"]*"/g)].length;
  const deltaIds = [...html.matchAll(/\sid="eq:delta"/g)].length;
  const properShiftIds = [...html.matchAll(/\sid="eq:kappa-proper"/g)].length;

  assert.match(html, /Topic IV at a glance/);
  assert.match(html, /The proof in four steps/);
  assert.match(html, /From boundary order to one interval/);
  assert.match(html, /Recall from Topic III/);
  assert.match(html, /Standing assumptions for the half-open contact data/);
  assert.match(html, /following five assumptions/);
  for (let assumption = 0; assumption <= 4; assumption += 1) {
    assert.match(html, new RegExp("\\(A" + assumption + "\\)"));
  }
  assert.match(html, /Multiplication by λ is <i>N<\/i>-critical in the sense of Definition 1\.1/);
  assert.match(html, /for the closed side[^<]*and[\s\S]*for the corresponding right-half-open side/);
  assert.match(html, /tuple satisfying \(A0\)–\(A4\)/);
  assert.doesNotMatch(html, /tuple satisfying \(A1\)–\(A4\)/);
  assert.match(html, /standing contact data<\/dfn> means precisely a tuple satisfying \(A0\)–\(A4\)/);
  assert.match(html, /λ=ρe<sup>iθ<\/sup>/);
  assert.match(html, /θ=arg<sub>\+<\/sub>\(λ\)∈\(0,2π\)/);
  assert.match(html, /The same contact data in two notations/);
  assert.match(html, /Call a set <dfn>reachable<\/dfn> when it is obtained[\s\S]{0,200}by finitely many updates realized by Proposition 5\.1/);
  assert.match(html, /Connected components and cyclic relabelling/);
  assert.match(html, /comp\(<i>S<\/i>\).*number of connected components/s);
  assert.match(html, /φ=\|<i>S<\/i>\|/);
  assert.match(html, /Equivariance under the label-preserving bijection between old and new side sets/);
  assert.match(html, /The label-preserving bijection b/);
  assert.match(html, /The cyclic permutation σ/);
  assert.match(html, /<i>T<\/i> is the same real-linear map[^<]*multiplication by λ/);
  assert.doesNotMatch(html, /Side-continuation bijection b/);
  assert.match(html, /Stage 1 · Identify the retained-half-plane intersection/);
  assert.match(html, /Assumption \(A0\)[^<]*says that the unchanged multiplier is <i>N<\/i>-critical[^<]*Theorem 3\.2 applies/);
  assert.match(html, /Stage 3 · Locate the changed image before reading its barycentric coefficients/);
  assert.match(html, /Realization of the successive updates used in Lemma 5\.5/);
  assert.match(html, /complete right-to-left component update<\/dfn> applies Proposition 5\.1 successively/);
  assert.match(html, /Reduction to one cyclic interval and a first-entrance identity/);
  assert.match(html, /Standing assumption for Section 5/);
  assert.equal(properShiftIds, 1, "equation 4.18 has one permalink target");
  assert.match(html, /<mn>1<\/mn><mo>≤<\/mo><mi>κ<\/mi><mo>&lt;<\/mo><mi>N<\/mi><mi>\.<\/mi>/);
  assert.equal(
    [...html.matchAll(/aria-label="Equation 4\.18, permalink"/g)].length,
    1,
    "equation 4.18 is displayed exactly once",
  );
  const topicIVCard = (number) => {
    const start = html.indexOf(`id="part-i-item-${number}"`);
    const end = html.indexOf(`id="part-i-item-${number + 1}"`, start + 1);
    assert.notEqual(start, -1, `Topic IV card ${number} exists`);
    return html.slice(start, end < 0 ? html.length : end);
  };
  assert.doesNotMatch(topicIVCard(27), /proof-chapter-provenance/);
  assert.doesNotMatch(topicIVCard(28), /proof-chapter-provenance/);
  assert.match(topicIVCard(29), /proof-chapter-provenance[^>]*>Previously known</);
  assert.match(topicIVCard(30), /proof-chapter-provenance[^>]*>Strengthened</);
  assert.doesNotMatch(topicIVCard(31), /proof-chapter-provenance/);
  assert.match(topicIVCard(29), /Supporting Theorem III/);
  assert.doesNotMatch(topicIVCard(29), /<dt>Bijection<\/dt>/);
  assert.doesNotMatch(topicIVCard(29), /proof-chapter-guided-proof/);
  assert.match(
    topicIVCard(29),
    /Thus every image vertex belongs to exactly one half-open side, and every half-open side contains exactly one image vertex\./,
  );
  assert.doesNotMatch(
    topicIVCard(29),
    /Equivalently, no image vertex can be assigned to two sides and no side can receive two image vertices/,
  );
  assert.match(topicIVCard(30), /Basic Theorem 5\.1/);
  assert.doesNotMatch(topicIVCard(30), /<dt>Greatest common divisor<\/dt>/);
  assert.match(topicIVCard(31), /standard covering-space lift/);
  assert.match(topicIVCard(31), /Iteration of endpoint equalities for lifted arguments/);
  assert.doesNotMatch(topicIVCard(31), /<dt>Endpoint path<\/dt>/);
  assert.doesNotMatch(topicIVCard(33), /proof-chapter-guided-proof/);
  assert.doesNotMatch(topicIVCard(35), /proof-chapter-guided-proof/);
  assert.equal(deltaIds, 1, "equation 5.11 appears exactly once");
  assert.match(html, /aria-label="Equation 5\.11, permalink"/);
  assert.equal(figureCount, 5, "repeated explanatory figures are references, not copies");
  assert.match(html, /Exact finite example/);
  assert.match(html, /Exact geometric configuration/);
  assert.match(html, /Schematic lifted-angle example with κ=3/);
  assert.match(html, /hollow circle is the excluded left endpoint Θ₂/);
  assert.match(html, /Schematic local geometry · exact symbolic update/);
  assert.match(html, /No numerical contact system is asserted by the plate/);
  assert.doesNotMatch(html, /S=\{1\}/);
  assert.match(html, /Exact finite arithmetic example/);
  assert.match(html, /Q=λP/);
  assert.match(html, /S=\{4,5,6,7\}/);
  const visibleTopicIVText = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<annotation\b[\s\S]*?<\/annotation>/gi, " ")
    .replace(/<[^>]*>/g, " ");
  assert.doesNotMatch(
    visibleTopicIVText,
    /\b(?:chip|chips|boolean board|mutation|mutations|surgery|surgeries|ledger|one-sided|right-admissible|block|blocks|score|scores|collision|collisions|strict landing|strict side|strict sides|strict-index|edge-cap|controlled reflection|endpoint path)\b|intrinsic contact rotation|contact rotation|side continuation/i,
  );
  for (let plate = 1; plate <= 5; plate += 1) {
    assert.match(html, new RegExp(`Plate IV\\.${plate}\\.`));
  }
  assert.match(html, /href="#plate-iv-3-lifted-shift"/);
  assert.match(html, /id="plate-iv-4-contact-surgery"/);
  assert.match(html, /Hatcher[^<]*Algebraic Topology/);
  assert.match(html, /<h3 id="topic-iv-sources">References<\/h3>/);
  assert.equal(
    [...html.matchAll(/class="proof-chapter-scope-reminder"/g)].length,
    2,
    "both finite-update corollaries repeat the proper-shift scope",
  );
});

test("Topic III states half-open side membership without invented boundary jargon", async () => {
  const response = await render("/proof/topic-iii");
  assert.equal(response.status, 200);

  const html = await response.text();
  const documentHtml = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<annotation\b[\s\S]*?<\/annotation>/gi, "");
  const visibleText = documentHtml.replace(/<[^>]*>/g, " ");
  assert.match(html, /Half-open sides and image-edge half-plane intersections/);
  assert.match(html, /Right-half-open side convention/);
  assert.match(html, /This is only the membership statement/);
  assert.match(visibleText, /indices are read modulo/);
  assert.match(visibleText, /Positive closed and open boundary arcs/);
  assert.match(visibleText, /Discarded arc and old-vertex count/);
  assert.match(visibleText, /Plate III\.3/);
  assert.match(visibleText, /Plate III\.4/);
  assert.match(visibleText, /Plate III\.5/);
  assert.match(visibleText, /Plate III\.6/);
  assert.match(visibleText, /Direct dependencies from earlier topics/);
  assert.match(visibleText, /Definitions and notation used here/);
  assert.doesNotMatch(visibleText, /terms? first used here/i);
  assert.match(visibleText, /Definition 4\.2 and Lemmas 4\.3–4\.7 form the first strand/);
  assert.match(visibleText, /This begins the second strand/);
  assert.match(visibleText, /continuity of area yield a least-area member/);
  assert.match(visibleText, /strict area monotonicity is then used to rule out proper normalized cuts/);
  assert.match(visibleText, /Rudin[^.]*Principles of Mathematical Analysis/);
  assert.match(visibleText, /Rudin[^.]*Real and Complex Analysis/);
  assert.match(visibleText, /Key conclusion/);
  assert.match(visibleText, /Proper cut/);
  assert.match(visibleText, /homothetic image/);
  assert.match(visibleText, /positive-area disk/);
  assert.doesNotMatch(visibleText, /additional open triangle|creates an open triangle/i);
  assert.doesNotMatch(visibleText, /xᵢ₊₁=ξᵢ₊₁/);

  const lemma43Html = html.match(/id="part-i-item-20"[\s\S]*?id="part-i-item-21"/)?.[0] ?? "";
  assert.match(lemma43Html, /Classical result/);
  assert.doesNotMatch(lemma43Html, /Previously known/);
  assert.doesNotMatch(lemma43Html, /<dt>Partition<\/dt>/);
  assert.match(lemma43Html, /Open the complete manuscript proof/);
  assert.doesNotMatch(lemma43Html, /Open the manuscript proof and its guided explanation/);

  const lemmaA5Html =
    html.match(/id="part-i-item-69"[\s\S]*?id="topic-iii-sources"/)?.[0] ?? "";
  assert.ok(lemmaA5Html.length > 0);
  assert.doesNotMatch(lemmaA5Html, /<dt>Proper inclusion<\/dt>/);

  const lemma47Html = html.match(/id="part-i-item-24"[\s\S]*?id="part-i-item-25"/)?.[0] ?? "";
  assert.match(lemma47Html, /Open the manuscript proof and its guided explanation/);
  assert.doesNotMatch(
    visibleText,
    /labelled boundary slot|labeled boundary slot|determinant atlas|zero-side signature|transparent vertex budget|radius-one anchor|One endpoint, one owner|strict mixture|shared-side edge|source shelf|support gap|boundary mixture|collinear candidates|closed dependency chain|Nothing is smuggled|\bcap(?:s|ped|ping)?\b|admissible (?:polygon|candidate)|cyclic shift[^<]*κ and source vertex/i,
  );
});

test("Topic XIV provides the complete example and executable boundary explorer", async () => {
  const response = await render("/proof/topic-xiv");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /complete order-seven/i);
  assert.match(html, /worked direction[^<]*x=3\/8/i);
  assert.match(html, /Download the [^<]*boundary generator/i);
  assert.match(html, /Interactive boundary explorer/i);
  assert.match(html, /<time dateTime="[^"]+"/);
  assert.doesNotMatch(html, /Unhandled Script Error|Internal Server Error/i);
});

test("every internal proof-reader fragment resolves on its target page", async () => {
  const rendered = new Map();
  for (const pathname of proofRoutes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, `render ${pathname}`);
    rendered.set(pathname, await response.text());
  }

  const normalizePath = (pathname) =>
    pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const idsByRoute = new Map(
    [...rendered].map(([pathname, html]) => [
      normalizePath(pathname),
      new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1])),
    ]),
  );

  for (const [pathname, html] of rendered) {
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(new Set(ids).size, ids.length, `${pathname} has duplicate ids`);

    for (const match of html.matchAll(/href="([^"]+)"/g)) {
      const href = match[1].replaceAll("&amp;", "&");
      if (!href.includes("#")) continue;
      const target = new URL(href, `http://localhost${pathname}`);
      const targetPath = normalizePath(target.pathname);
      if (!targetPath.startsWith("/proof")) continue;
      const targetIds = idsByRoute.get(targetPath);
      assert.ok(targetIds, `${pathname} links to an unknown proof route ${targetPath}`);
      const fragment = decodeURIComponent(target.hash.slice(1));
      assert.ok(
        targetIds.has(fragment),
        `${pathname} links to missing ${targetPath}#${fragment}`,
      );
    }
  }
});
