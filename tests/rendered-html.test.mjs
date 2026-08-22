import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

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

function visibleText(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function assertPageDateSemantics(html, firstPublished) {
  const text = visibleText(html);
  assert.match(text, new RegExp(`First published ${firstPublished}`));
  assert.match(text, /Last revised \d{1,2} [A-Z][a-z]+ 2026/);
  assert.match(text, /Website online since 28 July 2026/);
  assert.doesNotMatch(text, /Site build|Last updated/);
}

test("server-renders the scholarly Home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /Critical Invariant Polygons and the Farey–Ito Boundary of Stochastic Spectra/,
  );
  assert.match(html, /Brecht Verbeken/);
  assert.match(html, /Vincent Ginis/);
  assert.doesNotMatch(
    html,
    /class="primary-navigation"[\s\S]*?href="\/explore\/"/,
  );
  assert.doesNotMatch(
    html,
    /class="primary-navigation"[\s\S]*?href="\/paper\/"/,
  );
  assert.match(
    html,
    /class="primary-navigation"[\s\S]*?href="(?:\/karpelevic)?\/proof\/">The Proof/,
  );
  assert.match(html, /Where can a stochastic eigenvalue live/);
  assert.match(html, /Under construction/);
  assert.match(html, /role="status"/);
  assert.match(html, /Determine Θ/);
  assert.match(html, /Why this site exists/);
  assert.match(html, /Choose where to go next/);
  assert.match(html, /go to the paper immediately/);
  assert.match(html, /where I encountered this problem/);
  assert.match(html, /Go directly to the manuscript/);
  assert.match(html, /Read a little of the story first/);
  assert.match(html, /Learn where I encountered the problem/);
  assert.match(html, /How this site is being made/);
  assert.match(html, /generative-AI assistance/);
  assert.match(html, /Why is this paper not on arXiv/);
  assert.match(html, /currently in the moderation queue/);
  assert.match(html, /href="https:\/\/zenodo\.org\/records\/21529144"/);
  const homeText = visibleText(html);
  assert.match(homeText, /Archival Zenodo record/);
  assert.match(homeText, /Published on Zenodo 24 July 2026/);
  assert.match(homeText, /Zenodo edition 93 pages/);
  assert.match(
    homeText,
    /Website edition Last revised 22 August 2026 ↗ 106-page site-hosted PDF/,
  );
  assert.match(
    html,
    /href="(?:\/karpelevic)?\/paper\/critical-invariant-polygons\.pdf"/,
  );
  assertPageDateSemantics(html, "28 July 2026");
  assert.match(
    html,
    /aria-current="page" href="(?:\/karpelevic)?\/">Problem<\/a>/,
  );
  assert.match(html, /name="message"/);
  assert.match(html, /Open email to send/);
  assert.match(html, /mathematics as a cultural and community endeavour/);
  assert.match(html, /especially if you spot an error/);
  assert.match(html, /<time dateTime="[^"]+"/);
  assert.match(
    html,
    /aria-labelledby="theta-atlas-title theta-atlas-description"/,
  );
  assert.match(html, /Orders I–VII/);
  assert.match(html, /To the top/);
  assert.doesNotMatch(html, /No\. I · 2026/);
  assert.doesNotMatch(html, /Local manuscript/);
  assert.doesNotMatch(html, /Zenodo · forthcoming/);
  assert.doesNotMatch(html, /@gmail\.com/);
  assert.doesNotMatch(html, /href="\/contribution\/"/);
  assert.doesNotMatch(html, /Continue to the full introduction/);
  assert.doesNotMatch(html, /footer-navigation/);
  assert.doesNotMatch(html, /google-analytics|googletagmanager|cookie consent/i);
});

test("keeps the verified local manuscript available", async () => {
  const pdfUrl = new URL(
    "../public/paper/critical-invariant-polygons.pdf",
    import.meta.url,
  );
  await access(pdfUrl);

  const pdf = await readFile(pdfUrl);
  assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
  assert.equal(pdf.byteLength, 641_358);

  const checksum = createHash("sha256").update(pdf).digest("hex");
  const homeSource = await readFile(
    new URL("../app/data/home.ts", import.meta.url),
    "utf8",
  );
  assert.match(homeSource, new RegExp(`localArxivDraftChecksum:\\s*"${checksum}"`));
});

test("server-renders the sourced History page", async () => {
  const response = await render("/history");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /How a geometric question became an arithmetic boundary/,
  );
  assert.match(html, /This is the history as I learned it/);
  assert.match(html, /not a complete overview of stochastic spectra/);
  assert.match(html, /How rational angles organize the boundary/);
  assert.match(html, /A Farey fraction of order n is simply a reduced fraction/);
  assert.match(html, /root of unity whose order is at most/);
  assert.match(html, /At order five, 1\/3 and 2\/5 are neighbours/);
  assert.match(html, /Farey order V/);
  assert.match(html, /Dmitriev and Dynkin introduce the polygonal viewpoint/);
  assert.match(html, /Karpelevič solves the problem for every order/);
  assert.match(html, /Ito exposes the Farey-indexed polynomial families/);
  assert.match(html, /Swift gathers the difficult early sources/);
  assert.match(html, /Kirkland determines the Leslie-matrix region/);
  assert.match(html, /What was known before this paper/);
  assert.match(html, /References and further reading/);
  assert.match(html, /id="reference-dmitriev-dynkin-1946"/);
  assert.match(html, /id="reference-verbeken-ginis-2026"/);
  assert.match(
    html,
    /aria-current="page" href="(?:\/karpelevic)?\/history\/">History/,
  );
  assert.match(html, /href="https:\/\/www\.mathnet\.ru\/eng\/im3595"/);
  assert.match(
    html,
    /href="https:\/\/escholarship\.mcgill\.ca\/concern\/theses\/12579t72d"/,
  );
  assert.match(html, /href="https:\/\/doi\.org\/10\.1137\/0613033"/);
  assert.match(html, /href="https:\/\/doi\.org\/10\.1016\/j\.laa\.2017\.01\.009"/);
  assert.match(html, /href="https:\/\/doi\.org\/10\.5281\/zenodo\.21529144"/);
  assert.match(html, /<time dateTime="[^"]+"/);
  assertPageDateSemantics(html, "28 July 2026");
  assert.match(html, /generative-AI assistance/);
  assert.match(html, /To the top/);
});

test("server-renders the personal Journey page", async () => {
  const response = await render("/journey");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /How I found my way to Karpelevič/);
  assert.match(html, /between 2018 and 2024/);
  assert.match(html, /Arne Mertens/);
  assert.match(html, /Joanne Swift/);
  assert.match(html, /Two conjectures on the final pages/);
  assert.match(html, /Brando and I decided to attack both/);
  assert.match(html, /GenAI pioneers/);
  assert.match(html, /gave me the courage to rethink/);
  assert.match(html, /Brando was at the conference with me/);
  assert.match(html, /generalize the four-cycle classification/);
  assert.match(html, /every matrix size are exceptionally rare/);
  assert.match(html, /row-stochastic Leslie matrices/);
  assert.match(html, /An eigenvalue region for Leslie matrices/);
  assert.match(html, /href="https:\/\/doi\.org\/10\.1137\/0613033"/);
  assert.match(html, /postdoctoral research with Vincent Ginis/);
  assert.match(html, /From arcs to realizing matrices/);
  assert.match(html, /The Type III realisation conjecture/);
  assert.match(html, /Type II reduced Ito polynomials/);
  assert.match(html, /New region of interest/);
  assert.match(html, /Another interesting family/);
  assert.match(html, /Every order/);
  assert.match(html, /Returning to Karpelevič/);
  assert.match(html, /href="https:\/\/zenodo\.org\/records\/21219088"/);
  assert.match(html, /href="https:\/\/zenodo\.org\/records\/21529144"/);
  assert.match(html, /href="https:\/\/doi\.org\/10\.1137\/0613033"/);
  assert.match(html, /href="https:\/\/doi\.org\/10\.13001\/ela\.2026\.10159"/);
  assert.match(
    html,
    /Eigenvalue regions and realising monotone stochastic matrices/,
  );
  assert.match(html, /id="journey-reference-ran-teng-2024"/);
  assert.match(html, /id="journey-reference-kirkland-leslie-1992"/);
  assert.match(
    html,
    /aria-current="page" href="(?:\/karpelevic)?\/journey\/">My Journey/,
  );
  assert.match(html, /<time dateTime="[^"]+"/);
  assertPageDateSemantics(html, "28 July 2026");
  assert.match(html, /generative-AI assistance/);
  assert.match(html, /To the top/);
  assert.doesNotMatch(html, /pull quote/i);
  assert.doesNotMatch(html, /too obscure to approach/i);
  assert.doesNotMatch(html, /was not there in person/i);
});

test("preserves machine-readable TeX control sequences on Topics I–III", async () => {
  const responses = await Promise.all([
    render("/proof"),
    render("/proof/topic-ii"),
    render("/proof/topic-iii"),
  ]);
  for (const response of responses) {
    assert.equal(response.status, 200);
  }

  const renderedPages = await Promise.all(
    responses.map((response) => response.text()),
  );
  const texAnnotations = renderedPages.flatMap((renderedHtml) =>
    [
      ...renderedHtml.matchAll(
        /<annotation\b[^>]*\bencoding="application\/x-tex"[^>]*>([\s\S]*?)<\/annotation>/g,
      ),
    ].map((match) => match[1]),
  );
  assert.ok(texAnnotations.length > 0);

  const brokenControlSequence =
    /(^|[^\\])(?:\\\\)*\\\r?\n[ \t]*[A-Za-z@]/m;
  assert.match("\\" + "\n" + "u", brokenControlSequence);
  for (const annotation of texAnnotations) {
    assert.doesNotMatch(annotation, brokenControlSequence);
  }
  for (const command of [String.raw`\nu`, String.raw`\neq`, String.raw`\notin`]) {
    assert.ok(
      texAnnotations.some((annotation) => annotation.includes(command)),
      `Expected a rendered TeX annotation containing ${command}`,
    );
  }
});

test("server-renders the Part I proof reader", async () => {
  const response = await render("/proof");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  const topicIPanelStart = html.indexOf('data-topic-slug="language"');
  assert.ok(topicIPanelStart >= 0);
  assert.equal(html.indexOf('data-topic-slug="active-sides"'), -1);
  const topicIPanelHtml = html.slice(topicIPanelStart);
  const topicIIResponse = await render("/proof/topic-ii");
  assert.equal(topicIIResponse.status, 200);
  const topicIIPanelHtml = await topicIIResponse.text();
  const terminologyAuditHtml = `${topicIPanelHtml}\n${topicIIPanelHtml}`
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");
  assert.match(html, /How the Proof Works/);
  assert.match(
    html,
    /Critical invariant polygons and the Karpelevič theorem in Ito(?:&#x27;|&apos;|’)s formulation/,
  );
  assert.match(html, /Topic I of (?:<!-- -->)?XIV/);
  assert.doesNotMatch(html, /Topic I of fourteen|Topic 1 of 14/);
  assert.doesNotMatch(html, /How to read this page|orientation layer/);
  const atlasStart = html.indexOf('class="proof-chapter-atlas"');
  const atlasEnd = html.indexOf('class="proof-reader', atlasStart);
  assert.ok(atlasStart >= 0 && atlasEnd > atlasStart);
  const atlasHtml = html.slice(atlasStart, atlasEnd);
  assert.match(atlasHtml, /Proof topics/);
  assert.match(atlasHtml, /Critical maps and invariant polygons/);
  assert.match(atlasHtml, /The complete order-seven example/);
  assert.match(
    atlasHtml,
    /aria-current="step"[^>]*href="(?:\/karpelevic)?\/proof\/"/,
  );
  assert.equal(
    (atlasHtml.match(/<li>/g) ?? []).length,
    14,
  );
  assert.doesNotMatch(html, /Before beginning Topic I/);
  assert.doesNotMatch(html, /The small library this reader assumes/);
  assert.doesNotMatch(html, /class="proof-prerequisites"/);
  assert.doesNotMatch(html, /href="(?:\/karpelevic)?\/prerequisites\//);
  assert.match(html, /The objects, one at a time/);
  assert.match(html, /Real plane/);
  assert.match(html, /Real-linear map/);
  assert.match(html, /Compact nondegenerate convex polygon/);
  assert.match(html, /Why must the polygon be compact/);
  assert.match(html, /whole plane satisfies/);
  assert.match(html, /vertex-count minimum[\s\S]*?collapse to zero/);
  assert.match(html, /Relative to what/);
  assert.match(html, /ambient interior/);
  assert.match(html, /Absolute interior/);
  assert.match(html, /is not standard terminology/);
  assert.match(html, /Example 1 · A segment in the plane/);
  assert.match(html, /Example 2 · A triangle and one of its sides/);
  assert.match(html, /no open disk fits inside it/);
  assert.match(html, /open bottom edge/);
  assert.match(html, /Inside the plane ℝ²/);
  assert.match(html, /Inside its affine hull/);
  assert.match(html, /The full-dimensional triangle/);
  assert.match(html, /Its one-dimensional side/);
  assert.equal(
    (html.match(/class="topic-i-interior-comparison"/g) ?? []).length,
    2,
  );
  assert.equal(
    (html.match(/class="topic-i-interior-examples"/g) ?? []).length,
    1,
  );
  assert.match(html, /Invariant polygon/);
  assert.match(html, /Polygonal complexity/);
  assert.match(html, /Elliptic map/);
  assert.match(html, /Spectral radius/);
  assert.match(html, /Elliptic contraction/);
  assert.doesNotMatch(html, /The manuscript’s numbered definitions/);
  assert.doesNotMatch(html, /Two definitions before the first result/);
  assert.doesNotMatch(html, /These are not results/);
  assert.doesNotMatch(html, /Small library invoked in this definition/);
  assert.match(html, /Seven results, with complete proofs/);
  assert.match(html, /2(?:<!-- -->)? numbered definitions/);
  assert.match(html, /7(?:<!-- -->)? results/);
  assert.doesNotMatch(html, /Result (?:<!-- -->)?I/);
  assert.doesNotMatch(html, /Result (?:<!-- -->)?VII/);
  assert.match(html, /proof-result-sequence">Proposition 2\.1/);
  assert.match(html, /proof-result-sequence">Proposition 2\.2/);
  assert.match(html, /proof-result-sequence">Proposition 2\.3/);
  assert.match(html, /proof-result-sequence">Lemma 2\.4/);
  assert.match(html, /proof-result-sequence">Lemma A\.2/);
  assert.equal(
    (
      topicIPanelHtml.match(
        /class="topic-i-result-primer proof-guided-layer"/g,
      ) ?? []
    ).length,
    6,
  );
  assert.match(
    html,
    /class="[^"]*\bproof-reader\b[^"]*"[^>]*data-reading-mode="guided"/,
  );
  assert.doesNotMatch(html, /class="proof-topic-index"/);
  assert.match(html, /aria-label="Reading mode"/);
  assert.match(html, /data-reading-mode-button="guided"/);
  assert.match(html, /data-reading-mode-button="compact"/);
  assert.match(html, /Topic orientation/);
  assert.match(html, /Guided foundations/);
  assert.match(html, /First-use vocabulary/);
  assert.equal(
    (html.match(/class="topic-i-library-invocation"/g) ?? []).length,
    0,
  );
  assert.equal(
    (
      html.match(
        /class="topic-i-library-invocation topic-i-definition-library-invocation"/g,
      ) ?? []
    ).length,
    0,
  );
  const strictDefinitionStart = html.indexOf('id="part-i-item-2"');
  const firstResultStart = html.indexOf('id="part-i-item-5"');
  assert.ok(strictDefinitionStart >= 0);
  assert.ok(firstResultStart > strictDefinitionStart);
  const strictDefinitionHtml = html.slice(
    strictDefinitionStart,
    firstResultStart,
  );
  assert.doesNotMatch(
    strictDefinitionHtml,
    /\/prerequisites\/#convex-background/,
  );
  assert.doesNotMatch(
    strictDefinitionHtml,
    /\/prerequisites\/#oriented-boundary/,
  );
  assert.match(
    strictDefinitionHtml,
    /class="strict-polygon-explainer"/,
  );
  assert.doesNotMatch(
    strictDefinitionHtml,
    /class="strict-polygon-explainer" open/,
  );
  assert.match(strictDefinitionHtml, /Adjacent and collinear sides/);
  assert.match(strictDefinitionHtml, /maximal boundary segment/);
  assert.match(
    strictDefinitionHtml,
    /Normal cones and vertex-exposing supporting lines/,
  );
  assert.match(
    strictDefinitionHtml,
    /supporting line[\s\S]*?<em>exposes<\/em>[\s\S]*?a vertex/,
  );
  assert.match(strictDefinitionHtml, /EXPOSES A WHOLE SIDE/);
  assert.match(strictDefinitionHtml, /EXPOSES ONE VERTEX/);
  assert.match(
    strictDefinitionHtml,
    /Both lines pictured below pass through the vertex/,
  );
  assert.match(
    strictDefinitionHtml,
    /left one exposes an entire incident side[\s\S]*?right one exposes[\s\S]*?only/,
  );
  assert.match(
    strictDefinitionHtml,
    /is not a power of[\s\S]*?half-open line segment/,
  );
  assert.match(
    strictDefinitionHtml,
    /excluding[\s\S]*?starting endpoint[\s\S]*?including[\s\S]*?ending endpoint/,
  );
  assert.match(
    strictDefinitionHtml,
    /normal cone is two-dimensional[\s\S]*?nonempty interior/,
  );
  assert.match(strictDefinitionHtml, /dual plane/);
  assert.match(strictDefinitionHtml, /auxiliary inner product/);
  assert.match(strictDefinitionHtml, /nonzero covector/);
  assert.match(strictDefinitionHtml, /complete cyclic vertex list/);
  assert.match(strictDefinitionHtml, /standing convention/);
  assert.match(strictDefinitionHtml, /Figure I\.3/);
  assert.match(strictDefinitionHtml, /Figure I\.4/);
  assert.equal(
    (
      strictDefinitionHtml.match(
        /class="strict-polygon-plate-grid"/g,
      ) ?? []
    ).length,
    2,
  );
  const proposition21Start = html.indexOf('id="part-i-item-5"');
  const proposition22Start = html.indexOf('id="part-i-item-6"');
  const proposition23Start = html.indexOf('id="part-i-item-7"');
  const lemma24Start = html.indexOf('id="part-i-item-8"');
  const lemma25Start = html.indexOf('id="part-i-item-9"');
  const lemma26Start = html.indexOf('id="part-i-item-10"');
  const lemmaA2Start = html.indexOf('id="part-i-item-66"');
  const sourceShelfStart = html.indexOf(
    'class="proof-topic-sources"',
    lemmaA2Start,
  );
  assert.ok(proposition21Start > firstResultStart - 1);
  assert.ok(proposition22Start > proposition21Start);
  assert.ok(proposition23Start > proposition22Start);
  assert.ok(lemma24Start > proposition23Start);
  assert.ok(lemma25Start > lemma24Start);
  assert.ok(lemma26Start > lemma25Start);
  assert.ok(lemmaA2Start > lemma26Start);
  assert.ok(sourceShelfStart > lemmaA2Start);
  const proposition21Html = html.slice(
    proposition21Start,
    proposition22Start,
  );
  const proposition22Html = html.slice(
    proposition22Start,
    proposition23Start,
  );
  const proposition23Html = html.slice(
    proposition23Start,
    lemma24Start,
  );
  const lemma24Html = html.slice(lemma24Start, lemma25Start);
  const lemma25Html = html.slice(lemma25Start, lemma26Start);
  const lemma26Html = html.slice(lemma26Start, lemmaA2Start);
  const lemmaA2Html = html.slice(lemmaA2Start, sourceShelfStart);
  assert.match(
    proposition21Html,
    /Open the complete proof of Proposition 2\.1/,
  );
  assert.doesNotMatch(
    proposition21Html,
    /class="topic-i-proof-disclosure" open/,
  );
  assert.doesNotMatch(proposition21Html, /class="proof-badge/);
  assert.doesNotMatch(proposition21Html, /class="proof-item-provenance"/);
  assert.doesNotMatch(proposition21Html, /Source and classification/);
  assert.match(
    proposition21Html,
    /What is the adjoint in the adapted inner product/,
  );
  assert.match(proposition21Html, /unique linear map/);
  assert.match(proposition21Html, /represented by the transpose matrix/);
  assert.match(proposition21Html, /isometry satisfies/);
  assert.doesNotMatch(
    proposition21Html,
    /id="adjoint-explained"[^>]* open/,
  );
  assert.match(
    proposition22Html,
    /Open the proof of Proposition 2\.2/,
  );
  assert.doesNotMatch(
    proposition22Html,
    /class="topic-i-proof-disclosure" open/,
  );
  assert.doesNotMatch(proposition22Html, /class="topic-i-result-primer"/);
  assert.doesNotMatch(proposition22Html, /No new definitions/);
  assert.doesNotMatch(proposition22Html, /Small library invoked here/);
  assert.doesNotMatch(
    proposition22Html,
    /class="proof-item-commentary proof-item-explainer"/,
  );
  assert.match(proposition22Html, /Open the six-step proof/);
  assert.match(
    proposition22Html,
    /class="topic-i-expanded-proof-disclosure"/,
  );
  assert.match(
    proposition22Html,
    /The correspondence[\s\S]*?preserves convexity/,
  );
  assert.match(
    proposition22Html,
    /The candidate polygons correspond bijectively/,
  );
  assert.match(
    proposition22Html,
    /The two minimisation problems are identical/,
  );
  assert.match(
    proposition22Html,
    /This proves every assertion of Proposition 2\.2/,
  );
  assert.match(
    proposition23Html,
    /What does it mean for a functional to expose a face/,
  );
  assert.match(
    proposition23Html,
    /What does “homeomorphism” contribute here/,
  );
  assert.match(
    proposition23Html,
    /continuous bijection whose[\s\S]*?inverse is also continuous/,
  );
  assert.match(
    proposition23Html,
    /Every invertible real-linear map[\s\S]*?is a homeomorphism/,
  );
  assert.doesNotMatch(
    proposition23Html,
    /id="homeomorphism-explained"[^>]* open/,
  );
  assert.match(proposition23Html, /A functional exposes a face/);
  assert.match(
    proposition23Html,
    /F=\{x∈P:ℓ\(x\)=max\{ℓ\(y\):y∈P\}\}/,
  );
  assert.match(
    proposition23Html,
    /face exposed by[\s\S]*?<i>ℓ<\/i>/,
  );
  assert.match(
    proposition23Html,
    /class="topic-i-local-figure"/,
  );
  assert.match(proposition23Html, /Figure I\.5/);
  assert.match(
    proposition23Html,
    /How does a coordinate change transport the side data/,
  );
  assert.match(
    proposition23Html,
    /same combinatorial rule after[\s\S]*?change of labels/,
  );
  assert.match(
    proposition23Html,
    /class="part-i-equation-reference" href="#eq:affine-contact-conjugacy">\(2\.3\)<\/a>/,
  );
  assert.match(
    proposition23Html,
    /class="part-i-numbered-equation" id="eq:affine-contact-conjugacy"/,
  );
  assert.match(
    proposition23Html,
    /class="part-i-equation-number" href="#eq:affine-contact-conjugacy"[^>]*>\(2\.3\)<\/a>/,
  );
  assert.match(proposition23Html, /Return to equation \(2\.3\)/);
  assert.match(proposition23Html, /Consequences used in later topics/);
  assert.match(
    proposition23Html,
    /Every nonempty proper face of a polygon is exposed/,
  );
  assert.doesNotMatch(
    proposition23Html,
    /class="proof-item-commentary proof-item-explainer"/,
  );
  assert.doesNotMatch(
    proposition23Html,
    /the “affine contact conjugacy” equation/,
  );
  assert.doesNotMatch(
    proposition23Html,
    /the three contact-transport identities/,
  );
  assert.match(
    lemma24Html,
    /Open the complete proof of Lemma 2\.4/,
  );
  assert.doesNotMatch(
    lemma24Html,
    /class="topic-i-proof-disclosure" open/,
  );
  assert.doesNotMatch(
    lemma24Html,
    /class="proof-item-commentary proof-item-explainer"/,
  );
  assert.match(lemma24Html, /What exactly is Hausdorff convergence/);
  assert.match(lemma24Html, /Hausdorff distance/);
  assert.match(lemma24Html, /every point of[\s\S]*?lies within/);
  assert.match(lemma24Html, /A moving polygon/);
  assert.match(lemma24Html, /Why conjugation preserves it/);
  assert.match(lemma24Html, /preserves every point-to-set distance/);
  assert.match(lemma24Html, /Schneider/);
  assert.match(lemma24Html, /§1\.8/);
  assert.doesNotMatch(
    lemma24Html,
    /id="hausdorff-convergence-explained"[^>]* open/,
  );
  assert.match(lemma24Html, /Roadmap for later topics/);
  assert.match(
    lemma25Html,
    /Open the complete proof of Lemma 2\.5/,
  );
  assert.doesNotMatch(
    lemma25Html,
    /class="topic-i-proof-disclosure" open/,
  );
  assert.match(
    lemma25Html,
    /class="proof-item-commentary proof-item-explainer"/,
  );
  assert.match(
    lemma25Html,
    /What does “dense in the unit circle” mean, and why is it true/,
  );
  assert.match(lemma25Html, /every nonempty open arc/);
  assert.match(lemma25Html, /<strong>closed subgroup<\/strong>/);
  assert.match(lemma25Html, /open semicircle/);
  assert.doesNotMatch(
    lemma25Html,
    /id="dense-rotation-explained"[^>]* open/,
  );
  assert.match(lemma25Html, /possibly a segment/);
  assert.match(lemma25Html, /\\rho\^k&gt;0/);
  assert.match(
    lemma26Html,
    /Open the complete proof of Lemma 2\.6/,
  );
  assert.doesNotMatch(
    lemma26Html,
    /class="topic-i-proof-disclosure" open/,
  );
  assert.doesNotMatch(
    lemma26Html,
    /class="proof-item-commentary proof-item-explainer"/,
  );
  assert.match(lemma26Html, /What does degree \+1 mean here/);
  assert.match(lemma26Html, /signed number of turns/);
  assert.match(lemma26Html, /degree is \+1 and it preserves cyclic order/);
  assert.doesNotMatch(
    lemma26Html,
    /id="degree-one-explained"[^>]* open/,
  );
  assert.match(
    lemmaA2Html,
    /Open the complete proof of Lemma A\.2/,
  );
  assert.doesNotMatch(
    lemmaA2Html,
    /class="topic-i-proof-disclosure" open/,
  );
  assert.doesNotMatch(
    lemmaA2Html,
    /class="proof-item-commentary proof-item-explainer"/,
  );
  assert.match(
    html,
    /class="part-i-equation-reference" href="#eq:adapted-J">\(2\.1\)<\/a>/,
  );
  assert.match(
    html,
    /class="part-i-equation-reference" href="#eq:T-similarity-form">\(2\.2\)<\/a>/,
  );
  assert.match(
    html,
    /class="part-i-equation-reference" href="#eq:coordinate-reversal-intertwining">\(2\.6\)<\/a>/,
  );
  assert.match(
    html,
    /class="part-i-equation-reference" href="#eq:coordinate-reversal-half-open">\(2\.7\)<\/a>/,
  );
  assert.match(
    html,
    /class="part-i-equation-reference" href="#eq:oriented-boundary-determinant">\(2\.8\)<\/a>/,
  );
  assert.doesNotMatch(
    html,
    /class="part-i-equation-reference"[^>]*>the “/,
  );
  assert.match(html, /Definitions first used in this result/);
  assert.doesNotMatch(html, /No new definitions/);
  assert.doesNotMatch(html, /Small library invoked here/);
  assert.doesNotMatch(html, /Source and classification/);
  assert.doesNotMatch(html, /Context and source/);
  assert.doesNotMatch(html, /class="proof-item-provenance"/);
  assert.doesNotMatch(html, /class="proof-badge/);
  assert.doesNotMatch(html, /Topic I provenance/);
  assert.doesNotMatch(html, /Classical background, stated in full/);
  assert.equal(
    (html.match(/class="topic-i-definition-question"/g) ?? []).length,
    2,
  );
  assert.equal(
    (
      topicIPanelHtml.match(
        /class="proof-item-commentary proof-item-explainer"/g,
      ) ?? []
    ).length,
    4,
  );
  assert.doesNotMatch(
    html,
    /<details class="proof-item-commentary proof-item-explainer" open/,
  );
  assert.match(html, /Open intuition and proof walkthrough/);
  assert.match(html, /Optional explanation/);
  assert.doesNotMatch(html, /Shelf (?:<!-- -->)?I(?:<!-- -->)? ·/);
  assert.doesNotMatch(html, /Shelf (?:<!-- -->)?II(?:<!-- -->)? ·/);
  assert.doesNotMatch(html, /Shelf (?:<!-- -->)?III(?:<!-- -->)? ·/);
  assert.match(html, /The first condition/);
  assert.match(html, /Construct the complex structure/);
  assert.match(html, /Use the rotation orbit/);
  assert.equal(
    (topicIPanelHtml.match(/class="proof-item-intuition"/g) ?? []).length,
    4,
  );
  assert.equal(
    (topicIPanelHtml.match(/class="topic-i-concept-figure"/g) ?? []).length,
    2,
  );
  assert.equal(
    (topicIPanelHtml.match(/class="topic-i-local-explainer"/g) ?? []).length,
    7,
  );
  assert.match(html, /Figure I\.1/);
  assert.match(html, /Figure I\.2/);
  assert.match(html, /eⁱ⁰ᶿz=z exactly|eⁱ⁰ᶿz=z/);
  assert.match(html, /positive factor ρᵏ does not change the sign/);
  const orbitMarks = [
    ...html.matchAll(
      /<circle data-orbit-index="(\d+)" data-orbit-x="([^"]+)" data-orbit-y="([^"]+)"[^>]*>/g,
    ),
  ];
  assert.equal(orbitMarks.length, 5);
  for (const mark of orbitMarks) {
    const x = Number(mark[2]);
    const y = Number(mark[3]);
    assert.ok(
      Math.abs((x - 258) ** 2 + (y - 205) ** 2 - 112 ** 2) < 1e-6,
    );
  }
  assert.match(orbitMarks[0][0], /data-z="true"/);
  assert.ok(Number(orbitMarks[0][3]) < 205);
  assert.ok(orbitMarks.slice(1).some((mark) => Number(mark[3]) > 205));
  assert.equal((topicIPanelHtml.match(/class="topic-i-formal"/g) ?? []).length, 9);
  assert.doesNotMatch(html, /9(?:<!-- -->)? numbered items/);
  assert.match(html, /7(?:<!-- -->)? complete proofs/);
  assert.match(html, /41(?:<!-- -->)? displayed formulas/);
  assert.doesNotMatch(
    html,
    /Topic I makes no claim of a new mathematical result/,
  );
  assert.match(html, /id="part-i-item-1"/);
  assert.match(html, /id="part-i-item-66"/);
  assert.equal((topicIPanelHtml.match(/id="part-i-item-\d+"/g) ?? []).length, 9);
  assert.equal((html.match(/class="proof-topic-panel"/g) ?? []).length, 1);
  assert.equal((topicIPanelHtml.match(/class="proof"/g) ?? []).length, 8);
  assert.equal(
    (topicIPanelHtml.match(/<math[^>]*display="block"/g) ?? []).length,
    41,
  );
  assert.match(html, /Definition 1\.1/);
  assert.match(html, /Proposition 2\.1/);
  assert.match(html, /Lemma 2\.6/);
  assert.match(html, /Lemma A\.2/);
  assert.match(topicIPanelHtml, /Real-linear covariance of faces and boundary incidences/);
  assert.doesNotMatch(topicIPanelHtml, /Real-linear covariance of contact geometry/);
  assert.match(topicIPanelHtml, /It contains the zero/);
  assert.match(topicIPanelHtml, /each nonzero member determines a supporting line/);
  assert.match(topicIPanelHtml, /succ\(e\)[\s\S]*?head\(e\)[\s\S]*?σ\(e\)=χ\(head\(e\)\)/);
  assert.match(html, /id="def:N-critical"/);
  assert.match(html, /id="prop:adapted-complex"/);
  assert.match(html, /id="lem:origin-interior"/);
  assert.match(html, /id="lem:strict-separation"/);
  assert.match(html, /id="eq:polygonal-complexity"/);
  assert.match(html, /tr\(<i>T<\/i>\)/);
  assert.match(html, /det\(<i>T<\/i>\)/);
  assert.match(html, /Ext\(<i>P<\/i>\)/);
  assert.match(html, /\\mathop\{\\mathrm\{tr\}\}\(T\)/);
  assert.match(html, /\\det\(T\)/);
  assert.match(html, /\\mathop\{\\mathrm\{Ext\}\}\(P\)/);
  assert.match(html, /\\mathop\{\\mathrm\{relint\}\}\(F\)/);
  assert.match(html, /\\mathop\{\\mathrm\{aff\}\}\(S\)/);
  assert.match(html, /\\operatorname\{int\}\(P\)/);
  assert.match(html, /where the overline denotes closure/);
  assert.match(html, /compact convex set used here is closed/);
  assert.match(html, /\\det\(T\)&gt;0/);
  assert.match(
    html,
    /traversing[\s\S]*?boundary once makes the direction[\s\S]*?traverse[\s\S]*?unit circle once counterclockwise/,
  );
  assert.match(html, /No three vertices of/);
  assert.match(
    html,
    /<mo lspace="0\.32em" rspace="0\.32em">:<\/mo>/,
  );
  assert.doesNotMatch(html, /<mo>:<\/mo>/);
  assert.match(
    html,
    /<mo accent="true" stretchy="true">∼<\/mo>/,
  );
  assert.match(html, /<mi mathvariant="normal">Ext<\/mi>/);
  assert.doesNotMatch(html, /mathVariant=/);
  assert.doesNotMatch(
    html,
    /<mo accent="true"(?: stretchy="false")?>[̃˜]<\/mo>/,
  );
  assert.ok(
    html.indexOf('id="topic-i-setup-heading"') <
      html.indexOf('id="part-i-item-1"'),
  );
  assert.match(html, /Scientific plate/);
  assert.match(html, /Plate I/);
  assert.match(
    html,
    /Topic (?:<!-- -->)?I(?:<!-- -->)? of(?:<!-- -->)? (?:<!-- -->)?XIV(?:<!-- -->)? complete/,
  );
  assert.doesNotMatch(html, /Theorem 1\.3/);
  assert.doesNotMatch(html, /Theorem 1\.4/);
  assert.doesNotMatch(topicIPanelHtml, /Lemma 2\.7/);
  assert.doesNotMatch(topicIPanelHtml, /Hereditary saturation/);
  assert.doesNotMatch(topicIPanelHtml, /Projective unit return/);
  assert.doesNotMatch(topicIPanelHtml, /Return factors lie on the Jensen sheet/);
  assert.match(html, /Returning to stochastic eigenvalue regions/);
  assert.match(html, /href="(?:\/karpelevic)?\/proof\/topic-ii\/"/);
  assert.doesNotMatch(
    html,
    /local instalment|current instalment|Topics II–VIII|developing annotated edition/i,
  );
  assert.match(html, /src="(?:\/karpelevic)?\/proof\.js"/);
  assert.match(
    html,
    /aria-current="page" href="(?:\/karpelevic)?\/proof\/">The Proof/,
  );
  assert.match(html, /<time dateTime="[^"]+"/);
  assertPageDateSemantics(html, "29 July 2026");
  assert.match(html, /generative-AI assistance/);
  assert.match(html, /To the top/);
  assert.doesNotMatch(html, /evidence status/i);
  assert.doesNotMatch(html, /proof status/i);
  const sourceShelfHtml = html.slice(sourceShelfStart);
  assert.doesNotMatch(sourceShelfHtml, /<table\b/);

  assert.match(topicIIPanelHtml, /7(?:<!-- -->|\s)*core results/);
  assert.match(topicIIPanelHtml, /Support inequalities and boundary contact/);
  assert.match(topicIIPanelHtml, /Where each prerequisite is established/);
  assert.match(topicIIPanelHtml, /Prerequisites and sources/);
  assert.match(topicIIPanelHtml, /Imported from Topic I/);
  assert.match(topicIIPanelHtml, /Standard background, stated with sources/);
  assert.match(topicIIPanelHtml, /Proved on this page/);
  assert.match(topicIIPanelHtml, /How the results depend on one another/);
  assert.match(topicIIPanelHtml, /Lemma 2\.7[\s\S]*?Lemma 2\.8/);
  assert.match(topicIIPanelHtml, /Proposition 3\.1[\s\S]*?Lemma A\.1/);
  assert.match(
    topicIIPanelHtml,
    /Lemma A\.3[\s\S]*?every vertex of[\s\S]*?lies on the boundary/,
  );
  assert.match(
    topicIIPanelHtml,
    /Lemma 4\.1[\s\S]*?side[\s\S]*?intersects[\s\S]*?contains a vertex/,
  );
  assert.match(topicIIPanelHtml, /No irreducibility, smoothness, or generic-position/);
  assert.match(topicIIPanelHtml, /href="(?:\/karpelevic)?\/proof\/#part-i-item-2"/);
  assert.match(topicIIPanelHtml, /href="(?:\/karpelevic)?\/proof\/#part-i-item-10"/);
  assert.match(topicIIPanelHtml, /Schneider/);
  assert.match(topicIIPanelHtml, /Horn and C\. R\. Johnson/);
  assert.match(topicIIPanelHtml, /Bitsoris/);
  assert.match(topicIIPanelHtml, /Dmitriev–Dynkin/);
  assert.match(topicIIPanelHtml, /Swift’s 1972 thesis/);

  const topicIIOrder = [11, 12, 13, 14, 15, 65, 67, 16, 17, 18];
  let precedingPosition = -1;
  for (const itemNumber of topicIIOrder) {
    const position = topicIIPanelHtml.indexOf(`id="part-i-item-${itemNumber}"`);
    assert.ok(position > precedingPosition, `Topic II item ${itemNumber} is out of order`);
    precedingPosition = position;
  }

  for (const label of [
    "Lemma 2.7",
    "Lemma 2.8",
    "Lemma 2.9",
    "Lemma 2.10",
    "Proposition 3.1",
    "Lemma A.1",
    "Lemma A.3",
    "Theorem 3.2",
    "Remark 3.3",
    "Lemma 4.1",
  ]) {
    assert.match(topicIIPanelHtml, new RegExp(label.replace(".", "\\.")));
  }

  assert.equal(
    (topicIIPanelHtml.match(/id="part-i-item-\d+"/g) ?? []).length,
    10,
  );
  assert.equal(
    (topicIIPanelHtml.match(/class="topic-i-formal"/g) ?? []).length,
    10,
  );
  assert.equal(
    (topicIIPanelHtml.match(/class="proof"/g) ?? []).length,
    9,
  );
  assert.equal(
    (topicIIPanelHtml.match(/class="topic-i-proof-disclosure"/g) ?? []).length,
    9,
  );
  assert.doesNotMatch(
    topicIIPanelHtml,
    /class="topic-i-proof-disclosure" open/,
  );
  assert.equal(
    (
      topicIIPanelHtml.match(
        /<span>Definitions before the result<\/span>/g,
      ) ?? []
    ).length,
    9,
  );
  assert.match(topicIIPanelHtml, /The finite-continuity argument, without shorthand/);
  assert.match(topicIIPanelHtml, /Output 1 — the points remain in strict convex position/);
  assert.match(topicIIPanelHtml, /Output 2 — the selected points remain in side interiors/);
  assert.match(topicIIPanelHtml, /Output 3 — the prescribed determinant signs remain strict/);
  assert.match(topicIIPanelHtml, /Why adjacent normals determine one support value/);
  assert.match(topicIIPanelHtml, /Boundedness, contact, and complementarity unpacked/);
  assert.match(topicIIPanelHtml, /Two appendix lemmas before the contact theorem/);
  assert.match(topicIIPanelHtml, /The support-function criterion in a fixed normal fan/);
  assert.match(topicIIPanelHtml, /normal fan consists of the zero cone/);
  assert.match(topicIIPanelHtml, /cyclically ordered unit ray generators/);
  assert.match(topicIIPanelHtml, /Contact on every side and at every image vertex/);
  assert.doesNotMatch(topicIIPanelHtml, /Normal-fan transfer|Hereditary saturation|Why heredity matters/);
  assert.match(topicIIPanelHtml, /Their labels A\.1 and A\.3 are retained/);
  assert.match(topicIIPanelHtml, /id="eq:sine-coefficients"/);
  assert.match(topicIIPanelHtml, /id="eq:fan-containment"/);
  assert.match(topicIIPanelHtml, /id="eq:critical-spectral-radius"/);
  assert.match(topicIIPanelHtml, /id="eq:stress-complementarity"/);
  assert.match(topicIIPanelHtml, /id="eq:full-side-touch"/);
  assert.match(topicIIPanelHtml, /winding number/);
  assert.doesNotMatch(topicIIPanelHtml, /the cyclic rays generated by the outward side normals/i);
  assert.match(topicIIPanelHtml, /complex vector/);
  assert.match(topicIIPanelHtml, /Planar positive-cone fact/);
  assert.doesNotMatch(topicIIPanelHtml, /Symbolic endpoint ownership/);
  assert.doesNotMatch(
    topicIIPanelHtml,
    /The following finite model fixes the endpoint convention/,
  );
  assert.match(topicIIPanelHtml, /Plate II/);
  assert.match(
    topicIIPanelHtml,
    /aria-label="T equals rho e to the i theta, with rho equals cosine of pi over seven and theta equals pi over seven"/,
  );
  assert.equal(
    (topicIIPanelHtml.match(/data-contact-side="\d+"/g) ?? []).length,
    7,
  );
  assert.match(topicIIPanelHtml, /Figure II\.1/);
  assert.match(topicIIPanelHtml, /Figure II\.2/);
  assert.match(topicIIPanelHtml, /Figure II\.3/);
  assert.match(topicIIPanelHtml, /data-min-determinant="[^"]+"/);
  assert.match(topicIIPanelHtml, /data-coefficient-a="[^"]+"/);
  assert.match(topicIIPanelHtml, /data-supporting-edge="z0-z1"/);
  assert.match(topicIIPanelHtml, /topic-ii-figure-half-plane/);
  assert.match(topicIIPanelHtml, /Schematic polarity correspondence/);
  assert.match(topicIIPanelHtml, /data-figure-layout="mobile"/);
  assert.match(
    topicIIPanelHtml,
    /id="eq:triple-sign-criterion"[\s\S]*?<mi>ε<\/mi><mo>⋅<\/mo>[\s\S]*?aria-label="Equation 2\.9/,
  );
  assert.equal(
    (topicIIPanelHtml.match(/class="topic-ii-vocabulary-formula"/g) ?? [])
      .length,
    3,
  );
  assert.match(
    topicIIPanelHtml,
    /aria-label="Theta sub i plus N equals Theta sub i plus two pi"[\s\S]*?<msub>[\s\S]*?<mi>Θ<\/mi>/,
  );
  assert.match(
    topicIIPanelHtml,
    /aria-label="h sub P of u equals the maximum over z in P/,
  );
  assert.match(
    topicIIPanelHtml,
    /aria-label="If the spectral radius of M is less than one/,
  );
  assert.doesNotMatch(topicIIPanelHtml, /Θᵢ₊ₙ=Θᵢ\+2π/);
  const proposition31Start = topicIIPanelHtml.indexOf('id="part-i-item-15"');
  const proposition31End = topicIIPanelHtml.indexOf(
    'id="part-i-item-65"',
    proposition31Start,
  );
  assert.ok(proposition31Start >= 0 && proposition31End > proposition31Start);
  const proposition31Html = topicIIPanelHtml.slice(
    proposition31Start,
    proposition31End,
  );
  assert.doesNotMatch(proposition31Html, /proof-chapter-provenance/);
  assert.match(proposition31Html, /Status and references/);
  assert.match(proposition31Html, /broader polyhedral-invariance antecedent/);
  assert.match(proposition31Html, /no claim is made that this precise proposition appears/i);

  const theorem32Start = topicIIPanelHtml.indexOf('id="part-i-item-16"');
  const theorem32End = topicIIPanelHtml.indexOf(
    'id="part-i-item-17"',
    theorem32Start,
  );
  assert.ok(theorem32Start >= 0 && theorem32End > theorem32Start);
  const theorem32Html = topicIIPanelHtml.slice(theorem32Start, theorem32End);
  assert.doesNotMatch(theorem32Html, /proof-chapter-provenance/);
  assert.doesNotMatch(theorem32Html, /<dt>Nonempty intersection<\/dt>/);
  assert.match(theorem32Html, /Status and references/);
  assert.match(theorem32Html, /earlier antecedent for side-intersection arguments/);
  assert.match(theorem32Html, /no priority category is assigned/i);
  assert.match(topicIIPanelHtml, /Guided explanation/);
  assert.match(topicIIPanelHtml, /Status and references/);
  assert.doesNotMatch(topicIIPanelHtml, /admissible subpolygon/i);
  assert.doesNotMatch(topicIIPanelHtml, /<table\b/);
  assert.doesNotMatch(
    terminologyAuditHtml,
    /vertex budget|right-admissible|right-handed|handedness|\bownership\b|\bsurgery\b|no-skipping|projective-holonomy|continuous point function|complete certificate|finite convex certificate|fan cone|active sides?|critical polygons?|affine contact conjugacy|contact rotation|strict side set|positive radial graph|polar direction|radial scale|genuine (?:vertex|corner)|source shelf/i,
  );

  for (const [index, itemNumber] of topicIIOrder.entries()) {
    const itemStart = topicIIPanelHtml.indexOf(`id="part-i-item-${itemNumber}"`);
    const nextItemNumber = topicIIOrder[index + 1];
    const itemEnd = nextItemNumber
      ? topicIIPanelHtml.indexOf(`id="part-i-item-${nextItemNumber}"`, itemStart)
      : topicIIPanelHtml.indexOf(
          '<section class="proof-topic-sources"',
          itemStart,
        );
    assert.ok(itemStart >= 0 && itemEnd > itemStart);
    const itemHtml = topicIIPanelHtml.slice(itemStart, itemEnd);
    assert.ok(
      (itemHtml.match(/data-conceptual-layer/g) ?? []).length <= 1,
      `Topic II item ${itemNumber} has more than one conceptual layer`,
    );
  }

  const ids = [...topicIIPanelHtml.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length, "The proof page has duplicate ids");
  const idSet = new Set(ids);
  for (const match of topicIIPanelHtml.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(idSet.has(match[1]), `Fragment target #${match[1]} is missing`);
  }
});

test("server-renders the illustrated prerequisites", async () => {
  const response = await render("/prerequisites");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /The background used in Topic I/);
  assert.match(html, /Prerequisites for Topic I/);
  assert.match(html, /Topic I · The language of critical polygons/);
  assert.match(
    html,
    /Three prerequisite sections, in the order they are needed/,
  );
  assert.match(html, /id="elliptic-maps"/);
  assert.match(html, /id="convex-background"/);
  assert.match(html, /id="oriented-boundary"/);
  assert.equal(
    (html.match(/class="prerequisite-chapter"/g) ?? []).length,
    3,
  );
  assert.equal(
    (html.match(/class="prerequisite-plate"/g) ?? []).length,
    3,
  );
  assert.match(html, /Recovering J from a rotation-contraction/);
  assert.match(html, /A displayed point that is not a vertex/);
  assert.match(html, /What an orientation-reversing coordinate change does/);
  assert.match(html, /J=\(T−αI\)\/β/);
  assert.match(html, /m ∈ relint/);
  assert.match(html, /Routine linear algebra is assumed/);
  assert.match(html, /Where Topic I uses this section/);
  assert.match(html, /Standard sources for the background/);
  assert.match(html, /Matrix Analysis/);
  assert.match(html, /Convex Bodies: The Brunn–Minkowski Theory/);
  assert.match(html, /Return to Topic I/);
  assert.doesNotMatch(html, /Real planes, linear maps, and coordinates/);
  assert.doesNotMatch(html, /One map in two coordinate systems/);
  assert.doesNotMatch(
    html,
    /Later topics|Topics II–VIII|as this reader develops|instalment/i,
  );
  assert.doesNotMatch(html, /Finite cyclic arithmetic and first returns/);
  assert.doesNotMatch(html, /Projective geometry and Farey cells/);
  assert.doesNotMatch(html, /The cell from 1\/3 to 2\/5/);
  assert.match(html, /<time dateTime="[^"]+"/);
  assertPageDateSemantics(html, "29 July 2026");
  assert.match(html, /generative-AI assistance/);
  assert.match(html, /To the top/);
  assert.doesNotMatch(html, /analytics|google-analytics|googletagmanager/i);
});
