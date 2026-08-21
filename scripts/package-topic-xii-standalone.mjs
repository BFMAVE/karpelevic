import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const inputA = path.join(
  projectRoot,
  "share/Critical_Invariant_Polygons_Topic_XII_A.html",
);
const inputB = path.join(
  projectRoot,
  "share/Critical_Invariant_Polygons_Topic_XII_B.html",
);
const output = path.join(
  projectRoot,
  "share/Critical_Invariant_Polygons_Topic_XII.html",
);

function extractMain(html) {
  const start = html.indexOf("<main");
  const end = html.indexOf("</main>", start);
  if (start < 0 || end < 0) throw new Error("Standalone file has no main element.");
  return html.slice(start, end + "</main>".length);
}

function extractArticle(main) {
  const start = main.indexOf("<article");
  const end = main.indexOf("</article>", start);
  if (start < 0 || end < 0) throw new Error("Standalone file has no article element.");
  return main.slice(start, end + "</article>".length);
}

function articleContent(article) {
  const headerEnd = article.indexOf("</header>");
  const controls = article.indexOf('<section class="proof-chapter-reading-controls"');
  const contract = article.indexOf('<section class="topic-ii-reader-contract');
  const controlsEnd = article.indexOf(
    '</section><section class="topic-ii-reader-contract',
    controls,
  );
  const navigation = article.indexOf('<nav class="proof-topic-controls');
  if ([headerEnd, controls, contract, controlsEnd, navigation].some((index) => index < 0)) {
    throw new Error("Unexpected Topic XII standalone structure.");
  }
  return {
    beforeContract: article.slice(headerEnd + "</header>".length, controlsEnd + "</section>".length),
    afterContract: article.slice(contract, navigation),
    navigation: article.slice(navigation, article.indexOf("</article>", navigation)),
  };
}

function renameCombinedLocalIds(html) {
  for (const id of ["chapter-contract-heading", "nest-mediant-title", "nest-mediant-desc"]) {
    html = html.replaceAll(`id="${id}"`, `id="xii-b-${id}"`);
    html = html.replaceAll(`#${id}`, `#xii-b-${id}`);
  }
  return html;
}

const [htmlA, htmlB] = await Promise.all([readFile(inputA, "utf8"), readFile(inputB, "utf8")]);
let main = extractMain(htmlA);
const mainB = extractMain(htmlB);
const articleA = extractArticle(main);
const articleB = extractArticle(mainB);
const contentA = articleContent(articleA);
const contentB = articleContent(articleB);

const combinedNavigation = `<nav class="proof-topic-controls proof-topic-controls-with-previous" aria-label="Proof chapter navigation"><div class="proof-topic-complete"><span>End of Topic XII</span><strong>All results assigned to this topic are proved</strong></div><span class="proof-topic-control proof-topic-control-previous proof-chapter-unavailable" data-proof-topic-number="11" aria-disabled="true"><span>Previous</span><strong>Constructing stochastic matrices and proving attainment</strong><small>Forthcoming</small></span><span class="proof-topic-control proof-topic-control-next proof-chapter-unavailable" data-proof-topic-number="13" aria-disabled="true"><span>Next</span><strong>The Karpelevič–Ito theorem</strong><small>Forthcoming</small></span></nav>`;
const combinedArticle =
  articleA.slice(0, articleA.indexOf("</header>") + "</header>".length) +
  contentA.beforeContract +
  contentA.afterContract +
  renameCombinedLocalIds(contentB.afterContract) +
  combinedNavigation +
  "</article>";

main = main.replace(
  /<nav class="proof-chapter-parts"[\s\S]*?<\/nav>/,
  "",
);
main = main.replace(articleA, combinedArticle);
main = main.replace(
  "Topic <!-- -->XII<!-- --> · Part A<!-- --> of XIV",
  "Topic <!-- -->XII<!-- --> · Parts A–B<!-- --> of XIV",
);
main = main.replace(
  '<span>2<!-- --> <!-- -->lemmas</span><span>2<!-- --> <!-- -->refinement mechanisms</span>',
  '<span>3<!-- --> <!-- -->lemmas</span><span>1<!-- --> <!-- -->theorem</span><span>4<!-- --> <!-- -->exhaustive cases</span>',
);
main = main.replace(
  'data-proof-route="topic-xii-a"',
  'data-proof-route="topic-xii"',
);
main = main.replace(
  "Topic <!-- -->XII<!-- --> · Part A<!-- --> · Manuscript pages <!-- -->79–83",
  "Topic <!-- -->XII<!-- --> · Parts A–B<!-- --> · Manuscript pages <!-- -->79–85",
);
main = main.replace(
  "Farey refinement and nesting — mediants and multiplicity",
  "Farey refinement and nesting",
);

let outputHtml = htmlA.replace(/<title>[\s\S]*?<\/title>/i, "<title>Topic XII — Farey Refinement and Nesting · Critical Invariant Polygons</title>");
outputHtml = outputHtml.replace(
  /<meta name="description" content="[^"]*"\s*\/>/i,
  '<meta name="description" content="A complete standalone proof of Farey refinement, multiplicity padding, and candidate nesting."/>',
);
outputHtml = outputHtml.slice(0, outputHtml.indexOf("<main")) + main + outputHtml.slice(outputHtml.indexOf("</main>") + "</main>".length);

const ids = [...outputHtml.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicates.length) throw new Error(`Duplicate IDs in combined Topic XII: ${duplicates.join(", ")}`);
const missing = [...outputHtml.matchAll(/\bhref="#([^"]+)"/g)]
  .map((match) => match[1])
  .filter((id) => !ids.includes(id));
if (missing.length) throw new Error(`Missing local fragments in combined Topic XII: ${missing.join(", ")}`);
if (/<link\b[^>]+rel="stylesheet"/i.test(outputHtml) || /<script\b[^>]+src=/i.test(outputHtml)) {
  throw new Error("Combined Topic XII must remain self-contained.");
}

await writeFile(output, outputHtml);
console.log(`Wrote combined Topic XII standalone (${Buffer.byteLength(outputHtml)} bytes) to ${output}`);
