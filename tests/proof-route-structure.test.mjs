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
  ["/proof/topic-vi/a", 3, 3],
  ["/proof/topic-vi/b", 6, 4],
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
  assert.match(html, /Standing assumptions for the one-sided contact data/);
  for (let assumption = 1; assumption <= 4; assumption += 1) {
    assert.match(html, new RegExp("\\(A" + assumption + "\\)"));
  }
  assert.match(html, /right-admissible<\/dfn>[^<]*, when it appears in the manuscript proof, is only shorthand/);
  assert.match(html, /λ=ρe<sup>iθ<\/sup>/);
  assert.match(html, /θ=arg<sub>\+<\/sub>\(λ\)∈\(0,2π\)/);
  assert.match(html, /The same contact data in two notations/);
  assert.match(html, /Connected components and cyclic relabelling/);
  assert.match(html, /comp\(<i>S<\/i>\).*number of connected components/s);
  assert.match(html, /φ=\|<i>S<\/i>\|/);
  assert.match(html, /Equivariance under the label-preserving map between side sets/);
  assert.match(html, /The label-preserving map b/);
  assert.match(html, /The cyclic permutation σ/);
  assert.doesNotMatch(html, /Side-continuation bijection b/);
  assert.match(html, /Stage 1 · Identify the retained-half-plane intersection/);
  assert.match(html, /Stage 3 · Locate the changed image before defining its coefficients/);
  assert.match(html, /Realization of the successive updates used in Lemma 5\.5/);
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
    /\b(?:chip|chips|boolean board|mutation|mutations|surgery|surgeries|group|groups|block|blocks|score|scores|collision|collisions|strict landing|strict side|strict sides|strict-index|edge-cap|controlled reflection|endpoint path)\b/i,
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
  assert.match(html, /Half-open boundary assignments and edge clipping/);
  assert.match(html, /Assignment to half-open sides/);
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
  assert.match(lemma43Html, /Open the complete manuscript proof/);
  assert.doesNotMatch(lemma43Html, /Open the manuscript proof and its guided explanation/);

  const lemma47Html = html.match(/id="part-i-item-24"[\s\S]*?id="part-i-item-25"/)?.[0] ?? "";
  assert.match(lemma47Html, /Open the manuscript proof and its guided explanation/);
  assert.doesNotMatch(
    visibleText,
    /labelled boundary slot|labeled boundary slot|determinant atlas|zero-side signature|transparent vertex budget|radius-one anchor|One endpoint, one owner|strict mixture|shared-side edge|source shelf|support gap|boundary mixture|collinear candidates|closed dependency chain|Nothing is smuggled|\bcap(?:s|ped|ping)?\b|admissible (?:polygon|candidate)|cyclic shift[^<]*κ and source vertex/i,
  );
});

test("Topic XIV provides the complete example and executable boundary lab", async () => {
  const response = await render("/proof/topic-xiv");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /complete order-seven/i);
  assert.match(html, /worked direction[^<]*x=3\/8/i);
  assert.match(html, /Download the [^<]*boundary generator/i);
  assert.match(html, /Interactive boundary laboratory/i);
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
