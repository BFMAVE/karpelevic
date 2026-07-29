import assert from "node:assert/strict";
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
  assert.match(html, /Zenodo record/);
  assert.match(html, /93(?:<!-- -->)? pages/);
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
  assert.equal(pdf.byteLength, 556_518);
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
  assert.match(html, /From arcs to their realizers/);
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
  assert.match(html, /generative-AI assistance/);
  assert.match(html, /To the top/);
  assert.doesNotMatch(html, /pull quote/i);
  assert.doesNotMatch(html, /too obscure to approach/i);
  assert.doesNotMatch(html, /was not there in person/i);
});

test("server-renders the Part I proof reader", async () => {
  const response = await render("/proof");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /How the Proof Works/);
  assert.match(html, /Part I · Critical invariant polygons and the Farey return/);
  assert.match(html, /Topic I of VIII/);
  assert.doesNotMatch(html, /Topic I of eight|Topic 1 of 8/);
  assert.doesNotMatch(html, /How to read this page|orientation layer/);
  assert.match(html, /Where the website topics sit in the manuscript/);
  assert.match(html, /printed page numbers in the 91-page manuscript/);
  assert.match(html, /Main text: pages (?:<!-- -->)?2–3 and 6–10/);
  assert.match(html, /Lemma A\.2 on page 63/);
  assert.match(html, /Main text: pages (?:<!-- -->)?51–58/);
  assert.match(html, /Main text: pages (?:<!-- -->)?3–5 and 59–60/);
  assert.equal(
    (html.match(/class="proof-manuscript-map"/g) ?? []).length,
    1,
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
      html.match(
        /class="topic-i-result-primer proof-guided-layer"/g,
      ) ?? []
    ).length,
    6,
  );
  assert.match(
    html,
    /class="proof-reader proof-reader-single"[^>]*data-reading-mode="guided"/,
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
  assert.match(strictDefinitionHtml, /Normal cones and strict supporting lines/);
  assert.match(
    strictDefinitionHtml,
    /strict supporting line[^<]*mean/,
  );
  assert.match(strictDefinitionHtml, /NOT STRICT · A WHOLE SIDE/);
  assert.match(strictDefinitionHtml, /STRICT · ONE VERTEX ONLY/);
  assert.match(
    strictDefinitionHtml,
    /Both lines pictured below pass through the vertex/,
  );
  assert.match(
    strictDefinitionHtml,
    /left one is[\s\S]*?not strict[\s\S]*?right one is[\s\S]*?strict/,
  );
  assert.match(
    strictDefinitionHtml,
    /is not a power of[\s\S]*?half-open line segment/,
  );
  assert.match(
    strictDefinitionHtml,
    /excluding[\s\S]*?tail[\s\S]*?including[\s\S]*?head/,
  );
  assert.match(strictDefinitionHtml, /two-dimensional wedge with nonempty/);
  assert.match(strictDefinitionHtml, /dual plane/);
  assert.match(strictDefinitionHtml, /auxiliary inner product/);
  assert.match(strictDefinitionHtml, /nonzero covector/);
  assert.match(strictDefinitionHtml, /does <strong>not<\/strong> mean/);
  assert.match(strictDefinitionHtml, /strictly convex/);
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
    /What does “affine contact conjugacy” mean here/,
  );
  assert.match(
    proposition23Html,
    /same combinatorial rule after[\s\S]*?change of labels/,
  );
  assert.match(
    proposition23Html,
    /class="part-i-equation-reference" href="#eq:affine-contact-conjugacy">equation \(2\.3\)<\/a>/,
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
  assert.match(proposition23Html, /Every face of a polygon is exposed/);
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
    /class="part-i-equation-reference" href="#eq:adapted-J">equation \(2\.1\)<\/a>/,
  );
  assert.match(
    html,
    /class="part-i-equation-reference" href="#eq:T-similarity-form">equation \(2\.2\)<\/a>/,
  );
  assert.match(
    html,
    /class="part-i-equation-reference" href="#eq:coordinate-reversal-intertwining">equation \(2\.6\)<\/a>/,
  );
  assert.match(
    html,
    /class="part-i-equation-reference" href="#eq:coordinate-reversal-half-open">equation \(2\.7\)<\/a>/,
  );
  assert.match(
    html,
    /class="part-i-equation-reference" href="#eq:oriented-boundary-determinant">equation \(2\.8\)<\/a>/,
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
      html.match(
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
    (html.match(/class="proof-item-intuition"/g) ?? []).length,
    4,
  );
  assert.equal(
    (html.match(/class="topic-i-concept-figure"/g) ?? []).length,
    2,
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
  assert.equal((html.match(/class="topic-i-formal"/g) ?? []).length, 9);
  assert.doesNotMatch(html, /9(?:<!-- -->)? numbered items/);
  assert.match(html, /7(?:<!-- -->)? complete proofs/);
  assert.match(html, /39(?:<!-- -->)? displayed formulas/);
  assert.doesNotMatch(
    html,
    /Topic I makes no claim of a new mathematical result/,
  );
  assert.match(html, /id="part-i-item-1"/);
  assert.match(html, /id="part-i-item-66"/);
  assert.equal((html.match(/id="part-i-item-\d+"/g) ?? []).length, 9);
  assert.equal((html.match(/class="proof-topic-panel"/g) ?? []).length, 1);
  assert.equal((html.match(/class="proof"/g) ?? []).length, 8);
  assert.equal((html.match(/<math[^>]*display="block"/g) ?? []).length, 39);
  assert.match(html, /Definition 1\.1/);
  assert.match(html, /Proposition 2\.1/);
  assert.match(html, /Lemma 2\.6/);
  assert.match(html, /Lemma A\.2/);
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
  assert.match(html, /positive radial graph/);
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
  assert.match(html, /Topic I of VIII complete/);
  assert.doesNotMatch(html, /Theorem 1\.3/);
  assert.doesNotMatch(html, /Theorem 1\.4/);
  assert.doesNotMatch(html, /Lemma 2\.7/);
  assert.doesNotMatch(html, /Hereditary saturation/);
  assert.doesNotMatch(html, /Projective unit return/);
  assert.doesNotMatch(html, /Return factors lie on the Jensen sheet/);
  assert.match(html, /Returning to stochastic spectra/);
  assert.doesNotMatch(html, /data-topic-slug="active-sides"/);
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
  assert.match(html, /generative-AI assistance/);
  assert.match(html, /To the top/);
  assert.doesNotMatch(html, /evidence status/i);
  assert.doesNotMatch(html, /proof status/i);
  const sourceShelfHtml = html.slice(sourceShelfStart);
  assert.doesNotMatch(sourceShelfHtml, /<table\b/);
});

test("server-renders the illustrated prerequisite library", async () => {
  const response = await render("/prerequisites");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /The small library this reader assumes/);
  assert.match(html, /Prerequisites for Topic I/);
  assert.match(html, /Topic I · The language of critical polygons/);
  assert.match(
    html,
    /Three shelves for Topic I, in the order they are needed/,
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
  assert.match(html, /Where Topic I uses this shelf/);
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
  assert.match(html, /generative-AI assistance/);
  assert.match(html, /To the top/);
  assert.doesNotMatch(html, /analytics|google-analytics|googletagmanager/i);
});
