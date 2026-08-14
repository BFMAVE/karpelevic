import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = path.resolve(new URL("..", import.meta.url).pathname);
const shareDirectory = path.join(projectRoot, "share");
const partAPath = path.join(
  shareDirectory,
  "Critical_Invariant_Polygons_Topic_VI_Part_A.html",
);
const partBPath = path.join(
  shareDirectory,
  "Critical_Invariant_Polygons_Topic_VI_Part_B.html",
);
const outputPath = path.join(
  shareDirectory,
  "Critical_Invariant_Polygons_Topic_VI.html",
);

function requiredIndex(input, marker, description) {
  const index = input.indexOf(marker);
  if (index < 0) throw new Error(`Could not find ${description}.`);
  return index;
}

function extractChapterCore(html) {
  const articleStart = requiredIndex(
    html,
    '<article class="proof-topic-panel',
    "the chapter article",
  );
  const articleEnd = requiredIndex(
    html.slice(articleStart),
    "</article>",
    "the chapter article end",
  );
  const article = html.slice(articleStart, articleStart + articleEnd);
  const controlsStart = requiredIndex(
    article,
    '<section class="proof-chapter-reading-controls"',
    "the chapter reading controls",
  );
  const controlsEnd = requiredIndex(
    article.slice(controlsStart),
    "</section>",
    "the chapter reading controls end",
  );
  const navigationStart = requiredIndex(
    article,
    '<nav class="proof-topic-controls',
    "the chapter navigation",
  );
  return {
    controls: article.slice(controlsStart, controlsStart + controlsEnd + 10),
    core: article.slice(controlsStart + controlsEnd + 10, navigationStart),
  };
}

function replaceEditionMeta(shell) {
  const metaStart = requiredIndex(
    shell,
    '<div class="proof-edition-meta">',
    "the edition metadata",
  );
  const metaEnd = requiredIndex(
    shell.slice(metaStart),
    "</div>",
    "the edition metadata end",
  );
  const oldMeta = shell.slice(metaStart, metaStart + metaEnd + 6);
  const time = oldMeta.match(/<time\b[\s\S]*?<\/time>/i)?.[0];
  if (!time) throw new Error("The edition metadata has no timestamp.");
  const newMeta = `<div class="proof-edition-meta"><span>Topic VI</span><span>9 results</span><span>7 complete proofs</span>${time}</div>`;
  return shell.replace(oldMeta, newMeta);
}

function replacePartsNavigation(shell) {
  const navigationPattern =
    /<nav class="proof-chapter-parts"[\s\S]*?<\/nav>/i;
  if (!navigationPattern.test(shell)) {
    throw new Error("The Topic VI parts navigation is missing.");
  }
  return shell.replace(
    navigationPattern,
    '<nav class="proof-chapter-parts" aria-label="Parts of Topic VI"><a aria-current="page" href="#topic-vi-part-a"><span>Part A</span><strong>local projective escape</strong></a><a href="#topic-vi-part-b"><span>Part B</span><strong>global admissibility and unit return</strong></a></nav>',
  );
}

const [partA, partB] = await Promise.all([
  readFile(partAPath, "utf8"),
  readFile(partBPath, "utf8"),
]);
const partAChapter = extractChapterCore(partA);
const partBChapter = extractChapterCore(partB);

let shell = partA.slice(
  requiredIndex(partA, "<main", "the main element"),
  requiredIndex(partA, '<article class="proof-topic-panel', "the first article"),
);
shell = replaceEditionMeta(shell);
shell = replacePartsNavigation(shell);

const partACore = partAChapter.core.replaceAll(
  "Critical_Invariant_Polygons_Topic_VI_Part_B.html#",
  "#",
).replaceAll(
  "Critical_Invariant_Polygons_Topic_VI_Part_B.html",
  "#topic-vi-part-b",
);
const partBCore = partBChapter.core
  .replaceAll(
    "Critical_Invariant_Polygons_Topic_VI_Part_A.html#",
    "#",
  )
  .replaceAll(
    "Critical_Invariant_Polygons_Topic_VI_Part_A.html",
    "#topic-vi-part-a",
  )
  .replaceAll(
    'id="chapter-contract-heading"',
    'id="chapter-contract-heading-b"',
  )
  .replaceAll(
    'aria-labelledby="chapter-contract-heading"',
    'aria-labelledby="chapter-contract-heading-b"',
  );

const combinedArticle = `<article class="proof-topic-panel proof-chapter-panel" data-chapter-reading-mode="guided" data-proof-chapter data-proof-route="topic-vi" data-topic-tone="oxblood"><header class="proof-topic-header proof-chapter-heading"><p class="section-label">Topic VI · Manuscript pages 41–50</p><h2>Projective escape and unit return</h2><p class="proof-topic-question">How can a local projective escape be transported through every label until radial criticality forces unit return?</p></header><details class="proof-topic-overview proof-chapter-orientation"><summary><span>Topic orientation</span>What this chapter proves and why it comes here</summary><div><p>Topic VI combines two linked arguments. Part A calibrates a projective corridor and proves that a nonidentity return map can be opened inward by a small signed motion.</p><p>Part B transports that motion through every polygon label, checks every boundary case, and assembles the contradiction with hereditary saturation. The two parts are shown together here so the complete mechanism can be read as one chapter.</p><p><strong>Reading convention.</strong> Essential definitions appear before the first statement that needs them. Complete manuscript proofs are closed by default. When a result has an added line-by-line explanation, it appears inside the same disclosure as the proof.</p></div></details>${partAChapter.controls}<section class="topic-i-textbook proof-chapter-group" id="topic-vi-part-a"><header><div><p class="section-label">Part A · Local projective escape</p><h3>Calibrate the projective return</h3></div><div><p>The admissible chart turns convexity into ordered slopes. A carefully chosen seed then returns strictly between the final contacts.</p></div></header>${partACore}</section><section class="topic-i-textbook proof-chapter-group" id="topic-vi-part-b"><header><div><p class="section-label">Part B · Global admissibility and unit return</p><h3>Transport the escape through every label</h3></div><div><p>The local motion is propagated through the return towers, every strict inequality is checked, and the resulting invariant replacement contradicts hereditary saturation unless the return step is one.</p></div></header>${partBCore}</section><nav class="proof-topic-controls proof-topic-controls-with-previous" aria-label="Proof chapter navigation"><div class="proof-topic-complete"><span>End of Topic VI</span><strong>This combined chapter is complete</strong></div><a class="proof-topic-control proof-topic-control-previous" href="Critical_Invariant_Polygons_Topic_V.html"><span>Previous</span><strong>Rotation records, first-return towers, and projective preparation</strong></a><a class="proof-topic-control proof-topic-control-next" href="Critical_Invariant_Polygons_Topic_VII.html"><span>Next</span><strong>The Farey carrier and return monodromy</strong></a></nav></article>`;

const responsibilityStart = requiredIndex(
  partA,
  '<section class="proof-responsibility"',
  "the responsibility section",
);
const combinedTail = partA.slice(responsibilityStart);
let output = `${partA.slice(0, partA.indexOf("<main"))}${shell}${combinedArticle}${combinedTail}`;
output = output.replace(
  "Topic VI, Part A — The Local Projective Escape · Critical Invariant Polygons",
  "Topic VI — Projective Escape and Unit Return · Critical Invariant Polygons",
);

const ids = [...output.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
if (duplicateIds.length > 0) {
  throw new Error(`Combined Topic VI has duplicate IDs: ${duplicateIds.join(", ")}`);
}
if (!output.includes('data-proof-route="topic-vi"')) {
  throw new Error("Combined Topic VI is missing its route marker.");
}

await writeFile(outputPath, output, "utf8");
console.log(
  `Wrote combined standalone Topic VI (${Buffer.byteLength(output).toLocaleString("en")} bytes) to ${outputPath}`,
);
