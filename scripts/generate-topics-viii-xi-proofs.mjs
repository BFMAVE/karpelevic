import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, unlinkSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const baseGeneratorPath = path.join(projectRoot, "scripts/generate-part-ii-content.mjs");
const temporaryGeneratorPath = path.join(
  projectRoot,
  "scripts/.generate-topics-viii-xi-proofs.tmp.mjs",
);

let source = readFileSync(baseGeneratorPath, "utf8");

source = source.replace(
  "// Generated mechanically from the canonical Part II TeX source.\\n// Regenerate with: npm run content:part-ii",
  "// Generated mechanically from the canonical Part II TeX source.\\n// Regenerate with: node scripts/generate-topics-viii-xi-proofs.mjs",
);

source = source.replace(
  'const outputPath = path.join(projectRoot, "app/data/part-ii-content.generated.ts");',
  'const outputPath = path.join(projectRoot, "app/data/topics-viii-xi-proofs.generated.ts");',
);

const extractionAnchor = `const partIIHtmlByLabel = Object.fromEntries(
  labels.map(([id, kind]) => [id, statementBlock(id, kind)]),
);`;

const extractionReplacement = `${extractionAnchor}

const proofTargets = new Set([
  "karp:prop:compact",
  "karp:thm:polygon-criterion",
  "karp:cor:radial-filling",
  "karp:prop:unit-circle",
  "karp:lem:origin-interior",
  "karp:prop:new-shell-critical",
  "karp:lem:farey-adjacency-expanded",
  "karp:prop:scalar-ray",
  "karp:prop:scalar-continuity",
  "karp:thm:compression",
  "karp:lem:reflection-dictionary",
  "karp:thm:hetero-sharp",
  "karp:cor:equal-profile",
  "karp:lem:cycle-cover",
  "karp:lem:sparse-cycle-collections",
  "karp:thm:sparse-realization",
  "karp:cor:attainment",
]);

function proofBlockFollowing(id, kind) {
  const statementStart = start(\`<div id="\${id}" class="\${kind}">\`);
  const statementHtml = divBlockAt(statementStart);
  const afterStatement = statementStart + statementHtml.length;
  const proofStart = html.indexOf('<div class="proof">', afterStatement);
  if (proofStart < 0) throw new Error(\`Missing proof following \${id}\`);
  const nextStatement = html.slice(afterStatement).search(
    /<div id="[^"]+" class="(?:theorem|proposition|lemma|corollary|definition|algorithm|remark)">/,
  );
  if (nextStatement >= 0 && proofStart >= afterStatement + nextStatement) {
    throw new Error(\`The next statement occurs before the proof of \${id}\`);
  }
  return divBlockAt(proofStart);
}

const topicsVIIItoXIProofHtmlByLabel = Object.fromEntries(
  labels
    .filter(([id]) => proofTargets.has(id))
    .map(([id, kind]) => [id, proofBlockFollowing(id, kind)]),
);`;

if (!source.includes(extractionAnchor)) {
  throw new Error("The Part II generator extraction anchor has changed");
}
source = source.replace(extractionAnchor, extractionReplacement);

const outputAnchor = `export const partIIHtmlByLabel = \${JSON.stringify(partIIHtmlByLabel)} as const;`;
const outputReplacement = `${outputAnchor}\\n\\nexport const topicsVIIItoXIProofHtmlByLabel = \${JSON.stringify(topicsVIIItoXIProofHtmlByLabel)} as const;`;

if (!source.includes(outputAnchor)) {
  throw new Error("The Part II generator output anchor has changed");
}
source = source.replace(outputAnchor, outputReplacement);

writeFileSync(temporaryGeneratorPath, source, "utf8");
try {
  execFileSync(process.execPath, [temporaryGeneratorPath], {
    cwd: projectRoot,
    stdio: "inherit",
  });
} finally {
  unlinkSync(temporaryGeneratorPath);
}
