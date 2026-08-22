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
  ["/proof/topic-xii", 4, 4],
  ["/proof/topic-xiii", 3, 3],
];

const proofRoutes = ["/proof", ...chapters.map(([pathname]) => pathname), "/proof/topic-xiv"];

const publicTopicPublicationDates = [
  ["/proof", "2026-07-29", "29 July 2026"],
  ["/proof/topic-ii", "2026-08-06", "6 August 2026"],
  ["/proof/topic-iii", "2026-08-13", "13 August 2026"],
  ["/proof/topic-iv", "2026-08-13", "13 August 2026"],
  ["/proof/topic-v", "2026-08-14", "14 August 2026"],
  ["/proof/topic-vi", "2026-08-15", "15 August 2026"],
  ["/proof/topic-vii", "2026-08-20", "20 August 2026"],
  ["/proof/topic-viii", "2026-08-20", "20 August 2026"],
  ["/proof/topic-ix", "2026-08-20", "20 August 2026"],
  ["/proof/topic-x", "2026-08-21", "21 August 2026"],
  ["/proof/topic-xi", "2026-08-22", "22 August 2026"],
  ["/proof/topic-xii", "2026-08-22", "22 August 2026"],
  ["/proof/topic-xiii", "2026-08-22", "22 August 2026"],
  ["/proof/topic-xiv", "2026-08-22", "22 August 2026"],
];

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

test("proof-reader dates distinguish publication, revision, and website launch", async () => {
  for (const [pathname, isoDate, displayDate] of publicTopicPublicationDates) {
    const html = await (await render(pathname)).text();
    const markup = html.replace(/<script[\s\S]*?<\/script>/gi, "");

    assert.match(
      markup,
      new RegExp(
        `<time dateTime="${isoDate}">First published (?:<!-- -->)?${displayDate}(?:<!-- -->)?\\.<\\/time>`,
      ),
      `${pathname} shows its actual first-publication date`,
    );
    assert.equal(
      [...markup.matchAll(/First published/g)].length,
      1,
      `${pathname} shows first publication in the chapter hero only`,
    );
    assert.match(
      markup,
      /Last revised (?:<!-- -->)?\d{1,2} [A-Z][a-z]+ 20\d{2}(?:<!-- -->)?\./,
    );
    assert.match(
      markup,
      /<time dateTime="2026-07-28">Website online since(?:<!-- -->|\s)*28 July 2026(?:<!-- -->)?\.<\/time>/,
    );
    assert.doesNotMatch(markup, /Site build|Last updated/);
  }

  for (const pathname of proofRoutes.filter(
    (route) =>
      !publicTopicPublicationDates.some(
        ([publishedRoute]) => publishedRoute === route,
      ),
  )) {
    const html = await (await render(pathname)).text();
    const markup = html.replace(/<script[\s\S]*?<\/script>/gi, "");
    assert.doesNotMatch(
      markup,
      /First published/,
      `${pathname} is not falsely presented as already published`,
    );
  }
});

test("reader-visible proof terminology uses the coordinated conventional vocabulary", async () => {
  const rendered = new Map();
  for (const pathname of [...proofRoutes, "/prerequisites"]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, `render ${pathname}`);
    const html = await response.text();
    const text = html
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<annotation\b[\s\S]*?<\/annotation>/gi, " ")
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    rendered.set(pathname, text);

    assert.doesNotMatch(
      text,
      /\bstrict polygon(?:s)?\b|strict supporting line(?:s)?|\breturn monodromy\b|\brealizer(?:s)?\b/i,
      `${pathname} exposes superseded terminology`,
    );
  }

  assert.match(
    rendered.get("/proof") ?? "",
    /Polygon and vertex-list convention/,
  );
  assert.match(
    rendered.get("/proof/topic-vii") ?? "",
    /Consecutive Farey fractions and the finite product equation for N≥4/i,
  );
  assert.match(
    rendered.get("/proof/topic-vii") ?? "",
    /Manuscript pages 4–5 and 58–67/i,
  );
  assert.match(
    rendered.get("/proof/topic-viii") ?? "",
    /Manuscript pages 83–86/i,
  );
  assert.doesNotMatch(
    rendered.get("/proof/topic-vii") ?? "",
    /\bmonodromy\b|closed-return product|return-recurrence|lifted phase|phase identity|common continuous argument interval|contact-return normal form/i,
  );
  assert.match(
    rendered.get("/proof/topic-xi") ?? "",
    /Explicit stochastic realization of the candidate curve/i,
  );
  assert.doesNotMatch(
    rendered.get("/proof/topic-xi") ?? "",
    /cycle cover term|global cross cycle|cross edge|tail-row adjacency|constant parameter list|Rᴺ|Θᴺ/i,
  );
});

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

test("Topics VII and VIII form a defined-before-use stochastic handoff", async () => {
  const topicVII = await (await render("/proof/topic-vii")).text();
  const topicVIII = await (await render("/proof/topic-viii")).text();
  const visibleText = topicVIII
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<annotation\b[\s\S]*?<\/annotation>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replaceAll("&gt;", ">")
    .replaceAll("&lt;", "<")
    .replaceAll("&amp;", "&")
    .replace(/\s+/g, " ");

  assert.match(topicVIII, /Returning to stochastic eigenvalue regions/i);
  assert.match(
    topicVII,
    /class="[^"]*proof-topic-control-next[^"]*"[^>]*href="\/proof\/topic-viii\//,
  );
  assert.match(
    topicVIII,
    /href="\/proof\/topic-vii\/#part-i-item-4"/,
  );

  const orderedIds = [
    "topic-viii-compact",
    "topic-viii-polygon-criterion",
    "topic-viii-radial-filling",
    "topic-viii-radial-function",
    "topic-viii-unit-circle",
    "topic-viii-origin-interior",
    "topic-viii-criticality-definition",
    "topic-viii-membership-complexity-equivalence",
    "karp:eq:new-shell",
    "topic-viii-new-shell-critical",
  ];
  let previousIndex = -1;
  for (const id of orderedIds) {
    const index = topicVIII.indexOf(`id="${id}"`);
    assert.ok(index > previousIndex, `${id} appears in dependency order`);
    previousIndex = index;
  }

  assert.match(visibleText, /Let n≥2 and θ∈ℝ/i);
  assert.match(
    visibleText,
    /compact, hence the maximum is attained[\s\S]*star-shapedness[\s\S]*whole ray intersection/i,
  );
  assert.match(topicVIII, /<i>R<\/i><sub>n<\/sub>\(θ\)=max/);
  assert.match(
    topicVIII,
    /λ=<i>R<\/i><sub>N<\/sub>\(θ\)e<sup>iθ<\/sup>∈Θ<sub>N<\/sub>∖Θ<sub>N−1<\/sub>/,
  );
  assert.doesNotMatch(visibleText, /Rᴺ|Θᴺ|Θᴺ⁻¹|Θᴺ₋₁/);
  assert.match(
    topicVIII,
    /order-<var>n<\/var>[^<]*<strong>Karpelevič region<\/strong>/,
  );
  assert.match(
    topicVIII,
    /<i>T<\/i><sub>λ<\/sub>:ℂ→ℂ[^<]*for the real-linear[^<]*<i>T<\/i><sub>λ<\/sub>\(<i>z<\/i>\)=λ<i>z<\/i>/,
  );
  assert.match(topicVIII, /1<!-- --> <!-- -->numbered definition/);
  assert.match(topicVIII, /6<!-- --> <!-- -->numbered results/);
  assert.match(
    topicVIII,
    /href="\/proof\/topic-iii\/#part-i-item-69"/,
  );

  assert.match(visibleText, /Extreme-point set Ext\(P\)/i);
  assert.match(
    visibleText,
    /points that do not lie in the open segment joining two distinct points of P/i,
  );
  assert.match(
    visibleText,
    /When P is a polytope, these extreme points are precisely its vertices/i,
  );
  const correctedUnitIntervalPower =
    '<msup><mrow><mo stretchy="false" form="prefix">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy="false" form="postfix">]</mo></mrow><msup><mi>n</mi><mn>2</mn></msup></msup>';
  const malformedUnitIntervalPower =
    '<mrow><mo stretchy="false" form="prefix">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><msup><mo stretchy="false" form="postfix">]</mo><msup><mi>n</mi><mn>2</mn></msup></msup></mrow>';
  assert.ok(
    topicVIII.includes(correctedUnitIntervalPower),
    "[0,1]^{n²} applies the exponent to the complete fenced interval",
  );
  assert.ok(
    !topicVIII.includes(malformedUnitIntervalPower),
    "[0,1]^{n²} does not attach the exponent to the closing fence",
  );
  assert.match(visibleText, /Spectral radius The value spr\(\s*A\s*\)/i);
  assert.match(visibleText, /Supporting linear functional for P at 0/i);
  assert.match(visibleText, /Elliptic contraction — manuscript terminology/i);
  assert.match(visibleText, /N-critical — manuscript terminology/i);
  assert.match(
    topicVIII,
    /ν<sub>poly<\/sub>\(T<sub>λ<\/sub>\)=<var>N<\/var>/,
  );
  assert.match(
    topicVIII,
    /ν<sub>poly<\/sub>\(tT<sub>λ<\/sub>\)&gt;<var>N<\/var>/,
  );
  assert.match(
    topicVIII,
    /λ∈Θ<sub>n<\/sub> ⇔ ν<sub>poly<\/sub>\(<i>T<\/i><sub>λ<\/sub>\)≤<var>n<\/var>/,
  );

  const conditionStart = topicVIII.indexOf(
    'id="topic-viii-non-inherited-radial-maximum"',
  );
  const conditionEnd = topicVIII.indexOf(
    'id="topic-viii-new-shell-critical"',
    conditionStart,
  );
  const condition = topicVIII.slice(conditionStart, conditionEnd);
  assert.match(condition, /excludes the origin/);
  assert.match(condition, /occurs as an eigenvalue at order/);
  assert.ok(
    condition.indexOf("excludes the origin") <
      condition.indexOf("occurs as an eigenvalue at order"),
    "the two clauses of (II.4.3) are explained in the intended order",
  );
  assert.match(
    condition,
    /<i>R<\/i><sub>N−1<\/sub>\(θ\)&lt;<i>R<\/i><sub>N<\/sub>\(θ\)/,
  );
  assert.match(visibleText, /outward multiples still in the unit disk/i);
  assert.match(visibleText, /outward multiples beyond the unit disk/i);
  assert.doesNotMatch(
    visibleText,
    /vertex budget|least-vertex witness|absorbing-state padding|outward (?:enlargement|rescaling|witness)|non-inherited radial max|polygonally critical|stochastic interface|νpoly/i,
  );
  assert.match(
    visibleText,
    /Topic VII proved[\s\S]{0,100}finite product equation/i,
    "Topic VIII names Topic VII's result with the same literal terminology",
  );

  const propositionStart = topicVIII.indexOf(
    'id="topic-viii-new-shell-critical"',
  );
  const shelfStart = topicVIII.indexOf('id="topic-viii-exact-sources"');
  const proposition = topicVIII.slice(propositionStart, shelfStart);
  assert.doesNotMatch(proposition, /proof-chapter-provenance/);
  assert.match(proposition, /no separate literature-priority claim is made here/i);

  const originLemmaStart = topicVIII.indexOf('id="topic-viii-origin-interior"');
  const definitionStart = topicVIII.indexOf(
    'id="topic-viii-criticality-definition"',
    originLemmaStart,
  );
  const originLemma = topicVIII.slice(originLemmaStart, definitionStart);
  assert.doesNotMatch(originLemma, /proof-chapter-provenance/);
  assert.match(originLemma, /no literature-priority classification is asserted/i);

  const shelfEnd = topicVIII.indexOf("</section>", shelfStart);
  const shelf = topicVIII.slice(shelfStart, shelfEnd);
  assert.equal(
    [...shelf.matchAll(/<li>/g)].length,
    7,
    "the Topic VIII source shelf is generated from all seven cited sources",
  );
});

test("Topics VIII and IX form a self-contained terminology and provenance handoff", async () => {
  const topicVIII = await (await render("/proof/topic-viii")).text();
  const topicIX = await (await render("/proof/topic-ix")).text();
  const visibleText = topicIX
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<annotation\b[\s\S]*?<\/annotation>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replaceAll("&gt;", ">")
    .replaceAll("&lt;", "<")
    .replaceAll("&amp;", "&")
    .replace(/\s+/g, " ");
  const renderedTextContent = topicIX
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<annotation\b[\s\S]*?<\/annotation>/gi, " ")
    .replace(/<\/(?:p|h[1-6]|li|section|div|summary|dt|dd|figure|figcaption)>/gi, " ")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]*>/g, "")
    .replaceAll("&gt;", ">")
    .replaceAll("&lt;", "<")
    .replaceAll("&amp;", "&")
    .replaceAll("&#x27;", "'")
    .replaceAll("&apos;", "'")
    .replace(/\s+/g, " ");

  assert.match(
    topicVIII,
    /class="[^"]*proof-topic-control-next[^"]*"[^>]*href="\/proof\/topic-ix\//,
  );
  assert.match(
    topicIX,
    /class="[^"]*proof-topic-control-previous[^"]*"[^>]*href="\/proof\/topic-viii\//,
  );
  assert.match(
    visibleText,
    /Candidate curves from the Ito equation on Farey intervals/i,
  );
  assert.match(
    visibleText,
    /row-stochastic[\s\S]{0,220}?Θₙ is the set of all complex eigenvalues/i,
  );
  assert.match(visibleText, /exp\(2πit\) runs once along the upper unit semicircle/i);
  assert.match(
    visibleText,
    /the ray at argument 2πx is \{\s*ρ exp\(2πix\)\s*:\s*ρ≥0\s*\}/i,
  );
  assert.match(visibleText, /q<s/);
  assert.match(
    visibleText,
    /Topic VII obtains a necessary equation[\s\S]{0,320}?coefficients β₁,…,β\s*d may differ/i,
  );
  assert.match(
    visibleText,
    /common-coefficient subfamily[\s\S]{0,260}?Ito’s polynomial equation/i,
  );
  assert.match(
    visibleText,
    /Topic X proves the sharp modulus comparison and its equality case[\s\S]{0,120}?Topic XI constructs the realizing stochastic matrices/i,
  );
  assert.match(
    visibleText,
    /For Part II self-containment[\s\S]{0,180}?standard Farey-neighbor criterion/i,
  );
  assert.match(
    visibleText,
    /\(A\+B\)\/\(2π\)=u\/s\+\(1−u\)\/\(dq\)<1\/2/i,
  );
  assert.match(visibleText, /0<A,B,A\+B<π/i);
  assert.match(
    visibleText,
    /Topic IX of the online proof reader[\s\S]{0,220}?numbering systems are independent/i,
  );
  assert.match(visibleText, /superscript \+ refers to the upper semicircle/i);
  assert.doesNotMatch(visibleText, /Farey cell/i);
  assert.match(visibleText, /A unique modulus at each prescribed argument/i);
  assert.match(
    visibleText,
    /Implicit-function theorem A calculus theorem that gives a continuously differentiable local solution when the defining function is continuously differentiable/i,
  );
  for (const equationId of [
    "karp:eq:endpoint-labels",
    "karp:eq:mult-d",
    "karp:eq:A-B-absolute",
    "karp:eq:A+B-range",
  ]) {
    assert.equal(
      topicIX.split(`id="${equationId}"`).length - 1,
      1,
      `${equationId} appears exactly once in the visible setup`,
    );
  }
  assert.match(visibleText, /Certified numerical evaluation/i);
  assert.match(
    visibleText,
    /Proposition II\.2\.3 has already proved exact existence and uniqueness[\s\S]{0,180}?certifies an enclosure of that exact modulus/i,
  );
  assert.match(
    visibleText,
    /The underlying radius is already defined exactly by Proposition II\.2\.3; only its certified enclosure is numerical/i,
  );
  assert.match(visibleText, /U−L≤2ε/i);
  assert.match(visibleText, /radial error (?:is )?at most ε/i);
  assert.match(visibleText, /If an exact zero is certified, return m immediately/i);
  assert.match(
    visibleText,
    /outward-rounded interval enclosure containing zero[\s\S]{0,140}?derivative lower bound/i,
  );
  assert.match(visibleText, /polar output \(ρ̂,x\)/i);
  assert.match(
    visibleText,
    /Cartesian (?:output|target)[\s\S]{0,180}?τ\/2[\s\S]{0,100}?τ\/2/i,
  );
  assert.match(
    visibleText,
    /two possible outputs[\s\S]{0,180}?Except when[\s\S]{0,180}?exact interval \[−1,−1\/2\]/i,
  );
  assert.doesNotMatch(visibleText, /tagged union|exact compact fibre|total (?:Cartesian )?target/i);
  assert.doesNotMatch(visibleText, /Set-valued output is uniform/i);

  for (const phrase of [
    "n×n row-stochastic matrices",
    "sin(A+B) on [0,1]",
    "<1/2 because s≥3",
    "s≥3 and dq≥2",
    "The signed integer e is retained",
  ]) {
    assert.ok(
      renderedTextContent.includes(phrase),
      `rendered text preserves inline spacing in “${phrase}”`,
    );
  }
  assert.doesNotMatch(
    renderedTextContent,
    /n×nrow-stochastic|sin\(A\+B\)on \[0,1\]|<1\/2because|anddq|integere\b/,
  );
  assert.match(
    renderedTextContent,
    /Topic V(?:’s| — the) lattice-parallelogram lemma|the lattice-parallelogram lemma from Topic V/i,
  );
  assert.doesNotMatch(renderedTextContent, /lem:lattice-parallelogram-count/);
  const exactMidpointResidual =
    2 * 0.5 * Math.sin(Math.PI / 3) - Math.sin((2 * Math.PI) / 3);
  assert.ok(
    Math.abs(exactMidpointResidual) < 1e-15,
    "n=3 and x=1/6 produce the exact first bisection midpoint root",
  );

  const orderedIds = [
    "topic-ix-common-coefficient-specialization",
    "topic-ix-farey-adjacency",
    "topic-ix-ito-family",
    "topic-ix-scalar-ray",
    "topic-ix-endpoints",
    "topic-ix-carrier",
    "topic-ix-algorithm",
    "topic-ix-exact-sources",
  ];
  let previousIndex = -1;
  for (const id of orderedIds) {
    const index = topicIX.indexOf(`id="${id}"`);
    assert.ok(index > previousIndex, `${id} appears in dependency order`);
    previousIndex = index;
  }
  assert.ok(
    topicIX.indexOf('id="topic-ix-farey-adjacency"') <
      topicIX.indexOf('id="karp:eq:endpoint-labels"'),
    "Lemma II.2.1 is rendered before the endpoint and angle coordinates that use it",
  );

  const scalarStart = topicIX.indexOf('id="topic-ix-scalar-ray"');
  const endpointStart = topicIX.indexOf('id="topic-ix-endpoints"');
  const carrierStart = topicIX.indexOf('id="topic-ix-carrier"');
  const scalarProposition = topicIX.slice(scalarStart, endpointStart);
  const endpointProposition = topicIX.slice(endpointStart, carrierStart);
  for (const proposition of [scalarProposition, endpointProposition]) {
    assert.doesNotMatch(proposition, /proof-chapter-provenance/);
    assert.match(proposition, /Kirkland–Laffey–Šmigoc \(2020\)/);
    assert.doesNotMatch(proposition, /literature-priority classification/i);
  }
  assert.match(scalarProposition, /Theorem 1\.2 and Lemma 4\.4/);
  assert.match(
    visibleText,
    /The Karpelevič region revisited[\s\S]{0,180}?Theorem 1\.2 and Lemma 4\.4/i,
  );
  assert.doesNotMatch(visibleText, /Determinant distances|Attack determinant|Cancel transverse/i);
});

test("Topics IX and X form a self-contained scalar-to-Jensen handoff", async () => {
  const topicIX = await (await render("/proof/topic-ix")).text();
  const topicX = await (await render("/proof/topic-x")).text();
  const visibleText = topicX
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<annotation\b[\s\S]*?<\/annotation>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replaceAll("&gt;", ">")
    .replaceAll("&lt;", "<")
    .replaceAll("&amp;", "&")
    .replace(/\s+/g, " ");

  assert.match(
    topicIX,
    /class="[^"]*proof-topic-control-next[^"]*"[^>]*href="\/proof\/topic-x\//,
  );
  assert.match(
    topicX,
    /class="[^"]*proof-topic-control-previous[^"]*"[^>]*href="\/proof\/topic-ix\//,
  );
  assert.match(visibleText, /radial boundary point that first appears at order N/i);
  assert.match(visibleText, /Θ N ∖Θ N−1|ΘN∖ΘN−1/i);
  assert.match(visibleText, /consecutive fractions of F N|consecutive reduced fractions in F N/i);
  assert.match(
    visibleText,
    /ϑ∈\(0,2π\)[\s\S]{0,80}?unique[\s\S]{0,100}?μ=ρe\s*iϑ[\s\S]{0,80}?y=ϑ\/\(2π\)/i,
  );
  assert.match(visibleText, /p\/q<y<r\/s[\s\S]{0,80}?rq−ps=1[\s\S]{0,80}?q<s/i);
  assert.match(visibleText, /μ=ρe iϑ|μ=ρe\s*iϑ/i);
  assert.match(visibleText, /du\/dβ=ρᑫ sin A\/\|μᑫ−β\|²>0/i);
  assert.match(visibleText, /A<A\+B<M<π/i);
  assert.match(visibleText, /sines of A, B, A\+B, M, M−A, and M−A−B are positive/i);
  assert.match(visibleText, /ρ≤ρ\*/);
  assert.match(visibleText, /equality[\s\S]{0,100}?β₁=⋯=β/i);
  assert.match(visibleText, /10\.1007\/BF02418571/);
  assert.match(visibleText, /finite product equation[\s\S]{0,180}?phase equation[\s\S]{0,180}?bounds uⱼ∈\[A,M\)/i);
  assert.doesNotMatch(
    visibleText,
    /log-sine potential|convex equalization|strict Jensen|non-inherited radial maximum|continuous arguments on a zero-free path|factor potential|absolute scalar angles/i,
  );

  for (const id of [
    "topic-x-compression",
    "topic-x-reflection",
    "topic-x-heterogeneous",
  ]) {
    const start = topicX.indexOf(`id="${id}"`);
    assert.ok(start >= 0, `${id} exists`);
    const end = topicX.indexOf('class="topic-i-textbook-item', start + 1);
    const card = topicX.slice(start, end < 0 ? undefined : end);
    assert.doesNotMatch(card, /proof-chapter-provenance/);
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
  assert.match(
    topicVText,
    /Manuscript pages 31–40; Proposition 7\.5 closes on 41; Lemma A\.6 on 74/i,
  );
  assert.doesNotMatch(topicVText, /Lemma A\.6 on (?:page )?65/i);
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
  assert.match(topicVText, /Topic XIII gives that direct small-order proof/);
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
  assert.match(topicVText, /Forward and reverse data/);
  assert.match(topicVText, /M=\{1,…,Δ\}/);
  assert.match(topicVText, /M=\{Δ−1,…,φ−1\}/);
  assert.match(topicVText, /s\(R\)=M∖\{b\*\}/);
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
  assert.doesNotMatch(
    topicV,
    /data-reference="thm:rotation-section">\s*4\s*<\/a>/,
  );
  assert.ok(
    [...topicV.matchAll(/>Exact diagram<\/span>/g)].length >= 3,
    "Plates V.1–V.3 identify themselves as exact diagrams",
  );

  assert.match(topicVIText, /A projective deformation and the first-return step Δ\s*=\s*1/i);
  assert.match(topicVIText, /Manuscript pages 41–58/i);
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
  assert.match(
    topicVIText,
    /consecutive boundary chain whose displayed sides do not exhaust the sides of P/i,
  );
  assert.match(
    topicVIText,
    /invariant polygon of an N-critical map with N≥4/i,
  );
  assert.match(topicVIText, /Final intersection W\* when Z₁=X₀/);
  assert.match(topicVIText, /Normalized real projectivity u/);
  assert.match(topicVIText, /Interior image vertex excluded by Theorem 3\.2/);
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
  assert.match(
    topicVIText,
    /Topic VII translates these three first-return cases into consecutive Farey fractions, a finite product equation, and an equality for chosen real arguments/i,
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

  assert.match(topicVIIText, /Standing scope for Theorem 1\.4: N\s*≥\s*4/);
  assert.match(topicVIIText, /More than one relative-interior contact in some orbit:?\s*φ\s*>\s*δ[\s\S]*Assume N\s*≥\s*4/i);
  assert.match(
    topicVIIText,
    /Bounds for the arguments of(?: the factors)?[\s\S]*Assume N\s*≥\s*4/i,
  );
  assert.match(topicVIIText, /Notation and return cases imported from Topics I–VI/);
  assert.match(topicVIIText, /θ\s*=\s*arg\s*\+\s*\(λ\).*x\s*=\s*θ\/\(2π\)/i);
  assert.match(topicVIIText, /α\s*i\s*>\s*0,\s*β\s*i\s*≥\s*0.*α\s*i\s*\+\s*β\s*i\s*=\s*1/i);
  assert.match(
    topicVIIText,
    /first-return map on 𝓑 is the cyclic shift j↦j\+Δ modulo φ, and Topic VI proves Δ=1/i,
  );
  assert.match(
    topicVIIText,
    /ξ\s*i\s*=\s*λx\s*i−κ\s*=\s*β\s*i\s*x\s*i−1\s*\+\s*α\s*i\s*x\s*i/i,
  );
  assert.match(topicVIIText, /0\s*<\s*β\s*i\s*<\s*1.*relative-interior contact/i);
  assert.match(topicVIIText, /β\s*i\s*=\s*0 is the retained endpoint x\s*i/i);
  assert.match(topicVIIText, /lifted vertex arguments Θ\s*i are real representatives/i);
  assert.match(topicVIIText, /finite product equation/i);
  assert.doesNotMatch(topicVIIText, /\bproduct identity\b|Laurent identity|polynomial identity/i);
  assert.match(
    topicVIIText,
    /Corollary 6\.2 supplies q,p,d,e with qκ-pN=1 and N=qd\+e/i,
  );
  assert.match(
    topicVIIText,
    /the equations λ\^q xⱼ₋₁=ξⱼ and λ\^e x_d=x₀/i,
  );
  assert.match(
    topicVIIText,
    /endpoint-contact indices that become factors with β=0/i,
  );
  assert.doesNotMatch(
    topicVIIText,
    /\bmonodromy\b|closed-return product|return-recurrence|lifted phase|phase identity|common continuous argument interval|contact-return normal form/i,
  );
  assert.doesNotMatch(
    topicVIIText,
    /heterogeneous Ito product|homogeneous product|signed remainder|Farey carrier|Jensen sheet/i,
  );

  const theoremStatement = topicVII.indexOf('id="part-i-item-4"');
  const lemmaEightFour = topicVII.indexOf('id="part-i-item-56"');
  const lemmaEightSeven = topicVII.indexOf('id="part-i-item-59"');
  const theoremProof = topicVII.indexOf('id="topic-vii-theorem-1-4-proof"');
  assert.ok(
    theoremStatement >= 0 &&
      theoremStatement < lemmaEightFour &&
      lemmaEightFour < lemmaEightSeven &&
      lemmaEightSeven < theoremProof,
    "Theorem 1.4 is stated before the return cases and proved once at the end",
  );
  assert.equal(
    [...topicVII.matchAll(/\sid="thm:complex-monodromy"/g)].length,
    1,
    "Theorem 1.4 has one anchor",
  );
  assert.match(
    topicVII,
    /id="prop:minimal-block-product"[\s\S]*?<ol class="part-i-alpha-enumeration">[\s\S]*?<span class="part-i-alpha-label">\(a\)<\/span>[\s\S]*?<span class="part-i-alpha-label">\(b\)<\/span>/,
    "Proposition 8.6 visibly preserves its (a) and (b) case labels",
  );
  for (const equationId of [
    "eq:hetero-parameters",
    "eq:hetero-product-homogeneous",
    "eq:hetero-product",
    "eq:hetero-normalized-factor",
    "eq:hetero-phase",
  ]) {
    assert.equal(
      [...topicVII.matchAll(new RegExp(`\\sid="${equationId}"`, "g"))].length,
      1,
      `${equationId} is stated once`,
    );
  }
  assert.doesNotMatch(topicVII, /data-reference-type="ref\+Label"/);
  assert.match(
    topicVII,
    /href="#lem:compression-branch"[^>]*>Lemma 8\.7<\/a>/,
  );
  const theoremCardEnd = topicVII.indexOf('id="part-i-item-56"', theoremStatement);
  const theoremCard = topicVII.slice(theoremStatement, theoremCardEnd);
  assert.doesNotMatch(theoremCard, /proof-chapter-provenance/);
  assert.match(
    topicVII,
    /class="[^"]*proof-chapter-setup[^"]*" id="topic-vii-imported-notation"[\s\S]*?<h3>Notation and return cases imported from Topics I–VI<\/h3>/,
  );
  assert.match(
    topicVII,
    /class="[^"]*proof-chapter-setup[^"]*" id="topic-vii-n-ge-4-scope"[\s\S]*?<h4>Standing scope/,
  );
  assert.match(topicVII, /proof-chapter-result[\s\S]*?<h4>/);
  assert.match(topicVII, /proof-chapter-guided-proof[\s\S]*?<h5>Guided proof<\/h5>[\s\S]*?<h6>/);
  assert.doesNotMatch(topicVIIText, /The same proof, unpacked/);

  assert.match(topicVIIIText, /orders one, two, and three are reserved for the direct proof in Topic XIII/i);
  assert.match(topicXText, /radial boundary point that first appears at order N[\s\S]*N\s*≥\s*4/i);
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
  assert.match(html, /The boundary objects and estimates used below/);
  assert.match(html, /Supporting image-edge line/);
  assert.match(html, /positive half-open boundary interval[\s\S]{0,300}contains at most one vertex of <i>P<\/i>/);
  assert.match(html, /Proper image-edge cut[\s\S]{0,200}<i>k<\/i><sub>j<\/sub>≤2/);
  assert.match(html, /at most one proper cut can attain <i>k<\/i><sub>j<\/sub>=2/);
  assert.match(html, /endpoint indicator <i>c<\/i><sub>j<\/sub> and half-open count[\s\S]{0,100}<i>r<\/i><sub>j<\/sub> used in Lemma 4\.11 are defined locally/);
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
  assert.match(html, /Ellipticity makes λ nonreal, so the positive-argument convention gives/);
  assert.match(html, /θ=arg<sub>\+<\/sub>\(λ\)∈\(0,2π\)/);
  assert.match(html, /The same contact data in two notations/);
  assert.match(html, /<dt>head\(<i>E<\/i><sub>i<\/sub>\)=<i>x<\/i><sub>i<\/sub><\/dt>/);
  assert.match(html, /<dt>succ\(<i>E<\/i><sub>i<\/sub>\)=<i>E<\/i><sub>i\+1<\/sub><\/dt>/);
  assert.doesNotMatch(html, /<dt><i>h<\/i>\(<i>E<\/i>/);
  assert.doesNotMatch(html, /<dt><i>s<\/i>\(<i>E<\/i>/);
  assert.match(html, /interval-reduction results/);
  assert.match(html, /Call a set <dfn>reachable<\/dfn> when it is obtained[\s\S]{0,200}by finitely many updates realized by Proposition 5\.1/);
  assert.match(html, /Connected components and cyclic relabelling/);
  assert.match(html, /comp\(<i>S<\/i>\).*number of connected components/s);
  assert.match(html, /φ=\|<i>S<\/i>\|/);
  assert.match(html, /Equivariance under the label-preserving bijection between old and new side sets/);
  assert.match(html, /The label-preserving bijection b/);
  assert.match(html, /The side-label translation σ/);
  assert.match(html, /The maps χ and succ/);
  assert.doesNotMatch(html, /The maps χ and s<\/dt>/);
  assert.doesNotMatch(html, /The cyclic permutation σ/);
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
  assert.match(html, /Indices increase counterclockwise, matching Plate IV\.2/);
  assert.match(html, /side-label translation σ\(j\)=j\+κ/);
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
  assert.match(html, /Download source module/i);
  assert.match(html, /Download regression tests/i);
  assert.match(html, /Interactive numerical boundary plot/i);
  assert.match(html, /class="topic-xiv-interval-table"/);
  const tableStart = html.indexOf('class="topic-xiv-interval-table"');
  const tableEnd = html.indexOf("</table>", tableStart);
  assert.ok(tableStart >= 0 && tableEnd > tableStart);
  assert.equal(
    [...html.slice(tableStart, tableEnd).matchAll(/<tr>/g)].length,
    10,
    "the header and all nine Farey-pair rows are present",
  );
  assert.match(html, /data-order-seven-boundary-figure/);
  assert.match(html, /data-order-seven-boundary-path/);
  assert.match(html, /data-worked-ray/);
  assert.match(html, /data-worked-boundary-point/);
  assert.doesNotMatch(html, /data-proof-chapter-controls="true"/);
  assert.doesNotMatch(html, /src="\/proof-chapter\.js"/);
  assert.match(html, /Worked example, source, tests, and numerical plot complete/);
  assert.doesNotMatch(html, /Only the radius changes|homogeneous form/i);
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

test("Topic XII publishes as one continuous monotonicity argument", async () => {
  const [legacyA, legacyB] = await Promise.all([
    render("/proof/topic-xii/a"),
    render("/proof/topic-xii/b"),
  ]);
  assert.equal(legacyA.status, 308);
  assert.equal(legacyB.status, 308);
  assert.equal(
    new URL(legacyA.headers.get("location") ?? "", "http://localhost").pathname,
    "/proof/topic-xii/",
  );
  const legacyBTarget = new URL(
    legacyB.headers.get("location") ?? "",
    "http://localhost",
  );
  assert.equal(legacyBTarget.pathname, "/proof/topic-xii/");
  assert.equal(legacyBTarget.hash, "#karp:lem:nesting-case-split");

  const [topicXI, topicXII] = await Promise.all([
    render("/proof/topic-xi").then((response) => response.text()),
    render("/proof/topic-xii").then((response) => {
      assert.equal(response.status, 200);
      return response.text();
    }),
  ]);
  const visibleText = (html) =>
    html
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<annotation\b[\s\S]*?<\/annotation>/gi, " ")
      .replace(/<[^>]*>/g, " ")
      .replaceAll("&gt;", ">")
      .replaceAll("&lt;", "<")
      .replaceAll("&amp;", "&")
      .replace(/\s+/g, " ");

  assert.match(
    topicXI,
    /class="[^"]*proof-topic-control-next[^"]*"[^>]*href="\/proof\/topic-xii\//,
  );
  assert.match(
    topicXII,
    /class="[^"]*proof-topic-control-previous[^"]*"[^>]*href="\/proof\/topic-xi\//,
  );
  assert.match(
    topicXII,
    /class="[^"]*proof-topic-control-next[^"]*"[^>]*href="\/proof\/topic-xiii\//,
  );

  assert.match(topicXII, /data-proof-route="topic-xii"/);
  assert.match(topicXII, /href="\/proof\/topic-ix\//);
  assert.match(topicXII, /href="\/proof\/topic-x\/#karp:thm:hetero-sharp"/);
  for (const anchor of [
    "karp:eq:padding-explicit-scalar-sign",
    "karp:lem:mediant-expansion",
    "karp:eq:Kn-pi-definition",
  ]) {
    assert.match(topicXII, new RegExp(`href="#${anchor}"`));
  }

  const setup = topicXII.indexOf("data-topic-xii-setup");
  const firstResult = topicXII.indexOf('id="topic-xii-mediant-expansion"');
  assert.ok(setup >= 0 && firstResult > setup, "K_n is defined before its first use");
  for (const anchor of [
    "karp:lem:mediant-expansion",
    "karp:lem:multiplicity-padding",
    "karp:lem:nesting-case-split",
    "karp:thm:candidate-nesting",
  ]) {
    assert.match(topicXII, new RegExp(`id="${anchor}"`));
  }
  assert.match(topicXII, /id="karp:eq:Kn-pi-definition"/);
  assert.equal(
    [...topicXII.matchAll(/\sid="topic-xii-contract-heading"/g)].length,
    1,
  );
  assert.doesNotMatch(topicXII, /proof-chapter-parts|\/proof\/topic-xii\/[ab]\//i);

  const card = (id, nextId) => {
    const start = topicXII.indexOf(`id="${id}"`);
    const end = nextId ? topicXII.indexOf(`id="${nextId}"`, start + 1) : topicXII.length;
    assert.notEqual(start, -1, `${id} exists`);
    return topicXII.slice(start, end < 0 ? topicXII.length : end);
  };
  assert.doesNotMatch(
    card("topic-xii-mediant-expansion", "topic-xii-multiplicity-padding"),
    /proof-chapter-provenance/,
  );
  assert.doesNotMatch(
    card("topic-xii-multiplicity-padding", "topic-xii-refinement-split"),
    /proof-chapter-provenance/,
  );
  assert.doesNotMatch(
    card("topic-xii-refinement-split", "topic-xii-candidate-nesting"),
    /proof-chapter-provenance/,
  );
  assert.doesNotMatch(
    card("topic-xii-candidate-nesting"),
    /proof-chapter-provenance/,
  );

  assert.doesNotMatch(
    visibleText(topicXII),
    /Part A|Part B|Topic XII-A|Topic XII-B|Farey cell|subcell|reciprocal chord|multiplicity padding|candidate outer radius|candidate nesting|moves outward|radial excess/i,
  );
});
