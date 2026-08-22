import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const inputA = path.resolve(
  process.env.TOPIC_XII_INPUT_A ??
    path.join(projectRoot, "share/Critical_Invariant_Polygons_Topic_XII_A.html"),
);
const inputB = path.resolve(
  process.env.TOPIC_XII_INPUT_B ??
    path.join(projectRoot, "share/Critical_Invariant_Polygons_Topic_XII_B.html"),
);
const output = path.resolve(
  process.env.TOPIC_XII_OUTPUT ??
    path.join(projectRoot, "share/Critical_Invariant_Polygons_Topic_XII.html"),
);

function extractMain(html) {
  const start = html.indexOf("<main");
  const end = html.indexOf("</main>", start);
  if (start < 0 || end < 0) throw new Error("Standalone file has no main element.");
  return html.slice(start, end + "</main>".length);
}

function visibleTextFromHtml(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<annotation\b[\s\S]*?<\/annotation>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
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

function localizeTopicXIIReferences(html) {
  const partA = "https://bfmave.github.io/karpelevic/proof/topic-xii/a/";
  const partB = "https://bfmave.github.io/karpelevic/proof/topic-xii/b/";
  return html
    .replaceAll(`${partA}#`, "#")
    .replaceAll(`${partB}#`, "#")
    .replaceAll(`href="${partA}"`, 'href="#top"')
    .replaceAll(`href="${partB}"`, 'href="#top"');
}

const [htmlA, htmlB] = await Promise.all([readFile(inputA, "utf8"), readFile(inputB, "utf8")]);
let main = extractMain(htmlA);
const mainB = extractMain(htmlB);
const articleA = extractArticle(main);
const articleB = extractArticle(mainB);
const contentA = articleContent(articleA);
const contentB = articleContent(articleB);

const portableScopeNote = `<section class="proof-chapter-reading-note" aria-labelledby="topic-xii-portable-scope-heading"><h3 id="topic-xii-portable-scope-heading">Scope of this single-file edition</h3><p>This portable file contains the complete statements and proofs assigned to Topic XII. It uses the published prerequisites from Topics IX and X, which remain linked at their exact statements rather than being duplicated here.</p></section>`;

const combinedNavigation = `<nav class="proof-topic-controls proof-topic-controls-with-previous" aria-label="Proof chapter navigation"><div class="proof-topic-complete"><span>End of Topic XII</span><strong>All results assigned to this topic are proved</strong></div><a class="proof-topic-control proof-topic-control-previous" data-proof-topic-number="11" href="https://bfmave.github.io/karpelevic/proof/topic-xi/"><span>Previous</span><strong>Explicit stochastic realization of the candidate curve</strong></a><span class="proof-topic-control proof-topic-control-next proof-chapter-unavailable" data-proof-topic-number="13" aria-disabled="true"><span>Next</span><strong>The Karpelevič theorem in Ito’s formulation</strong><small>Forthcoming</small></span></nav>`;
const combinedArticle =
  articleA.slice(0, articleA.indexOf("</header>") + "</header>".length) +
  contentA.beforeContract +
  portableScopeNote +
  contentA.afterContract +
  contentB.afterContract +
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
  '<span>2<!-- --> <!-- -->lemmas</span><span>2<!-- --> <!-- -->comparison cases</span>',
  '<span>3<!-- --> <!-- -->lemmas</span><span>1<!-- --> <!-- -->theorem</span><span>4<!-- --> <!-- -->exhaustive cases</span>',
);
main = main.replace(
  'data-proof-route="topic-xii-a"',
  'data-proof-route="topic-xii"',
);
main = main.replace(
  "Topic <!-- -->XII<!-- --> · Part A<!-- --> · Manuscript pages <!-- -->94–100",
  "Topic <!-- -->XII<!-- --> · Parts A–B<!-- --> · Manuscript pages <!-- -->94–101",
);
main = main.replace(
  "Farey refinement and monotonicity of the candidate radius — two Farey-refinement comparisons",
  "Farey refinement and monotonicity of the candidate radius",
);
main = localizeTopicXIIReferences(main);

let outputHtml = htmlA.replace(/<title>[\s\S]*?<\/title>/i, "<title>Topic XII — Farey Refinement and Monotonicity of the Candidate Radius · Critical Invariant Polygons</title>");
outputHtml = outputHtml.replace(
  /<meta name="description" content="[^"]*"\s*\/>/i,
  '<meta name="description" content="A portable single-file Topic XII chapter with complete local proofs and explicit links to prerequisite Topics IX and X."/>',
);
outputHtml = outputHtml.slice(0, outputHtml.indexOf("<main")) + main + outputHtml.slice(outputHtml.indexOf("</main>") + "</main>".length);

const ids = [...outputHtml.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicates.length) throw new Error(`Duplicate IDs in combined Topic XII: ${duplicates.join(", ")}`);
const missing = [...outputHtml.matchAll(/\bhref="#([^"]+)"/g)]
  .map((match) => match[1])
  .filter((id) => !ids.includes(id));
if (missing.length) throw new Error(`Missing local fragments in combined Topic XII: ${missing.join(", ")}`);
for (const match of outputHtml.matchAll(/\b(?:aria-labelledby|aria-describedby)="([^"]+)"/g)) {
  for (const id of match[1].trim().split(/\s+/)) {
    if (!ids.includes(id)) throw new Error(`Missing ARIA reference in combined Topic XII: ${id}`);
  }
}
if (/<link\b[^>]+rel="stylesheet"/i.test(outputHtml) || /<script\b[^>]+src=/i.test(outputHtml)) {
  throw new Error("Combined Topic XII must remain self-contained.");
}
for (const number of [1, 2, 3]) {
  const count = outputHtml.match(new RegExp(`Plate XII\\.${number}\\.`, "g"))?.length ?? 0;
  if (count !== 1) throw new Error(`Combined Topic XII must contain Plate XII.${number} exactly once; found ${count}.`);
}
if (/data-proof-topic-number="12"(?:(?!<\/li>)[\s\S])*Forthcoming/i.test(outputHtml)) {
  throw new Error("Combined Topic XII still marks the current topic as forthcoming.");
}
if (/href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-xii\/[ab]\//i.test(outputHtml)) {
  throw new Error("Combined Topic XII still contains a remote link to one of its own parts.");
}
if (!/Topic[^<]*XII[^<]*Parts A–B[^<]*Manuscript pages[^<]*94–101/i.test(outputHtml.replace(/<!-- -->/g, ""))) {
  throw new Error("Combined Topic XII has the wrong topic or manuscript range.");
}
if (!/3\s*lemmas[\s\S]*?1\s*theorem[\s\S]*?4\s*exhaustive cases/i.test(visibleTextFromHtml(outputHtml))) {
  throw new Error("Combined Topic XII has the wrong formal-result summary.");
}

await writeFile(output, outputHtml);
console.log(`Wrote combined Topic XII standalone (${Buffer.byteLength(outputHtml)} bytes) to ${output}`);
