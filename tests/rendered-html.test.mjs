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
