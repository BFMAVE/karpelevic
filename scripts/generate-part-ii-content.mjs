import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  readCanonicalManuscript,
  sha256,
  writeOrCheckGeneratedFile,
} from "./lib/manuscript-source.mjs";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { manuscriptPath, source, manuscriptHash } =
  readCanonicalManuscript("PART_II_TEX_PATH");
const checkMode = process.argv.includes("--check");
const outputPath = path.join(projectRoot, "app/data/part-ii-content.generated.ts");

const beginDocument = source.indexOf("\\begin{document}");
const partStartMarker = "% ===== BEGIN NAMESPACED PART II TECHNICAL BODY =====";
const partEndMarker = "% ===== END NAMESPACED PART II TECHNICAL BODY =====";
const partStart = source.indexOf(partStartMarker);
const partEnd = source.indexOf(partEndMarker);

if (beginDocument < 0 || partStart < 0 || partEnd < 0 || partEnd <= partStart) {
  throw new Error(`Could not locate the namespaced Part II body in ${manuscriptPath}`);
}

const preamble = source.slice(0, beginDocument + "\\begin{document}".length);
const partIISource = source.slice(partStart + partStartMarker.length, partEnd);

function stripTeXComments(tex) {
  return tex
    .split(/\r?\n/)
    .map((line) => {
      for (let index = 0; index < line.length; index += 1) {
        if (line[index] !== "%") continue;
        let slashes = 0;
        for (let cursor = index - 1; cursor >= 0 && line[cursor] === "\\"; cursor -= 1) {
          slashes += 1;
        }
        if (slashes % 2 === 0) return line.slice(0, index);
      }
      return line;
    })
    .join("\n");
}

function splitAlignRows(body) {
  const rows = [];
  let rowStart = 0;
  let braceDepth = 0;
  let environmentDepth = 0;
  for (let index = 0; index < body.length - 1; index += 1) {
    const environment = body.slice(index).match(/^\\(begin|end)\{([^}]+)\}/);
    if (environment) {
      environmentDepth += environment[1] === "begin" ? 1 : -1;
      index += environment[0].length - 1;
      continue;
    }
    if (body[index] === "{" && body[index - 1] !== "\\") braceDepth += 1;
    if (body[index] === "}" && body[index - 1] !== "\\") braceDepth = Math.max(0, braceDepth - 1);
    if (
      braceDepth !== 0 ||
      environmentDepth !== 0 ||
      body[index] !== "\\" ||
      body[index + 1] !== "\\"
    ) {
      continue;
    }
    rows.push(body.slice(rowStart, index));
    index += 1;
    if (body[index + 1] === "[") {
      const end = body.indexOf("]", index + 2);
      if (end >= 0) index = end;
    }
    rowStart = index + 1;
  }
  rows.push(body.slice(rowStart));
  return rows;
}

function collectEquationLabels(tex) {
  const clean = stripTeXComments(tex);
  const labels = new Map();
  const tokenPattern = /\\section(\*)?\s*(?:\[[^\]]*\]\s*)?\{|\\begin\{(equation|align\*?)\}/g;
  let section = 0;
  let equation = 0;
  let token;

  function record(fragment) {
    for (const match of fragment.matchAll(/\\label\{([^}]+)\}/g)) {
      labels.set(match[1], `II.${section}.${equation}`);
    }
  }

  while ((token = tokenPattern.exec(clean))) {
    if (token[0].startsWith("\\section")) {
      if (!token[1]) {
        section += 1;
        equation = 0;
      }
      continue;
    }
    const environment = token[2];
    const endToken = `\\end{${environment}}`;
    const environmentEnd = clean.indexOf(endToken, tokenPattern.lastIndex);
    if (environmentEnd < 0) throw new Error(`Unclosed ${environment} in Part II`);
    const body = clean.slice(tokenPattern.lastIndex, environmentEnd);
    if (environment === "equation") {
      equation += 1;
      record(body);
    } else if (environment === "align") {
      for (const row of splitAlignRows(body)) {
        const content = row.replace(/\\label\{[^}]+\}/g, "").trim();
        if (!content || /\\(?:notag|nonumber)\b/.test(row)) continue;
        equation += 1;
        record(row);
      }
    }
    tokenPattern.lastIndex = environmentEnd + endToken.length;
  }
  return labels;
}

function parenthesizeNamedOperators(tex) {
  const atom = String.raw`(?:\\(?:widetilde|widehat|overline)\s*(?:\{[A-Za-z]\}|[A-Za-z])|[A-Za-z](?:'|_\{[^{}]+\}|_(?:\\[A-Za-z]+|[A-Za-z0-9]+))*)`;
  const unary = new RegExp(
    String.raw`\\(tr|det|Ext|relint|aff)(?![A-Za-z])\s*(${atom})`,
    "g",
  );
  return tex
    .replace(unary, (_match, operator, argument) => `\\${operator}(${argument})`)
    .replace(/\\rm\s+([A-Za-z]+)/g, "\\mathrm{$1}")
    .replaceAll("\\hbox", "\\text")
    .replaceAll("\\notag", "");
}

const equationLabels = collectEquationLabels(partIISource);
const pandocInput = `${preamble}\n${parenthesizeNamedOperators(partIISource)}\n\\end{document}\n`;
let html = execFileSync(
  "pandoc",
  ["--from=latex", "--to=html5", "--mathml", "--wrap=none"],
  { encoding: "utf8", input: pandocInput, maxBuffer: 64 * 1024 * 1024 },
);

const firstSectionMatch = html.match(/<h1(?: id="[^"]+")?>Introduction and proof architecture<\/h1>/);
if (!firstSectionMatch || firstSectionMatch.index === undefined) {
  throw new Error("Pandoc output does not contain the first Part II section");
}
html = html.slice(firstSectionMatch.index);
html = html.replaceAll("<mo>:</mo>", '<mo lspace="0.32em" rspace="0.32em">:</mo>');
html = html.replaceAll(
  '<mo accent="true">̃</mo>',
  '<mo accent="true" stretchy="true">∼</mo>',
);

// Pandoc 3.8.3 can attach the exponent in [0,1]^{n^2} to the closing
// fence instead of to the complete fenced interval. Repair that one known
// accessibility defect structurally while preserving the TeX annotation.
const malformedUnitIntervalPower =
  '<mrow><mo stretchy="false" form="prefix">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><msup><mo stretchy="false" form="postfix">]</mo><msup><mi>n</mi><mn>2</mn></msup></msup></mrow>';
const correctedUnitIntervalPower =
  '<msup><mrow><mo stretchy="false" form="prefix">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy="false" form="postfix">]</mo></mrow><msup><mi>n</mi><mn>2</mn></msup></msup>';
const malformedUnitIntervalPowerCount = html.split(malformedUnitIntervalPower).length - 1;
if (malformedUnitIntervalPowerCount !== 1) {
  throw new Error(
    `Expected one malformed [0,1]^{n^2} MathML expression, found ${malformedUnitIntervalPowerCount}`,
  );
}
html = html.replace(malformedUnitIntervalPower, correctedUnitIntervalPower);

const statementKinds = new Set([
  "theorem",
  "proposition",
  "lemma",
  "corollary",
  "definition",
  "algorithm",
  "remark",
]);
const statementLabels = new Map();
const statementToken = /<h1(?: id="([^"]+)")?>|<div id="([^"]+)" class="([^"]+)">/g;
let section = 0;
let statement = 0;
let statementMatch;
while ((statementMatch = statementToken.exec(html))) {
  if (statementMatch[0].startsWith("<h1")) {
    section += 1;
    statement = 0;
    continue;
  }
  const id = statementMatch[2];
  const kind = statementMatch[3];
  if (!statementKinds.has(kind)) continue;
  statement += 1;
  statementLabels.set(id, {
    kind: kind[0].toUpperCase() + kind.slice(1),
    number: `II.${section}.${statement}`,
  });
}

html = html.replace(
  /<div id="([^"]+)" class="(theorem|proposition|lemma|corollary|definition|algorithm|remark)">\s*<p><(?:strong|em)>[^<]+<\/(?:strong|em)>/g,
  (match, id, kind) => {
    const label = statementLabels.get(id);
    if (!label) return match;
    return `<div id="${id}" class="${kind}">\n<p><strong>${label.kind} ${label.number}</strong>`;
  },
);

const externalStatements = new Map([
  ["thm:critical-polygon-normal-form", { kind: "Theorem", number: "1.3", href: "/proof/#part-i-item-3" }],
  ["thm:complex-monodromy", { kind: "Theorem", number: "1.4", href: "/proof/topic-vii/#topic-vii-monodromy" }],
  ["lem:origin-interior", { kind: "Lemma", number: "2.5", href: "/proof/#part-i-item-9" }],
  ["lem:lattice-parallelogram-count", { kind: "Lemma", number: "A.6", href: "#lem:lattice-parallelogram-count" }],
]);

function statementLinks(referenceList) {
  return referenceList
    .split(",")
    .map((rawId) => rawId.trim())
    .map((id) => {
      const local = statementLabels.get(id);
      if (local) return `<a href="#${id}">${local.kind} ${local.number}</a>`;
      const external = externalStatements.get(id);
      if (external) return `<a href="${external.href}">${external.kind} ${external.number}</a>`;
      return `<a href="#${id}">${id}</a>`;
    })
    .join(" and ");
}

html = html.replace(
  /<a href="#[^"]+" data-reference-type="ref\+label" data-reference="([^"]+)">[\s\S]*?<\/a>/gi,
  (_match, references) => statementLinks(references),
);

html = html.replace(
  /<a href="#[^"]+" data-reference-type="eqref" data-reference="([^"]+)">[\s\S]*?<\/a>/g,
  (_match, references) =>
    references
      .split(",")
      .map((rawId) => rawId.trim())
      .map((id) => {
        const number = equationLabels.get(id);
        return number
          ? `<a class="part-i-equation-reference" href="#${id}">equation (${number})</a>`
          : `<a class="part-i-equation-reference" href="#${id}">${id}</a>`;
      })
      .join(" and "),
);

html = html.replace(
  /<math display="block"([^>]*)>([\s\S]*?)<\/math>/g,
  (match, attributes, body) => {
    const labels = Array.from(body.matchAll(/\\label\{([^}]+)\}/g), (entry) => entry[1]);
    if (labels.length === 0 || /\sid=/.test(attributes)) return match;
    const numbered = labels
      .map((label) => ({ label, number: equationLabels.get(label) }))
      .filter((entry) => entry.number);
    if (numbered.length === 0) return match;
    const anchors = numbered
      .slice(1)
      .map(({ label }) => `<span class="part-i-equation-anchor" id="${label}" aria-hidden="true"></span>`)
      .join("");
    const links = numbered
      .map(({ label, number }) => `<a class="part-i-equation-number" href="#${label}" aria-label="Equation ${number}, permalink">(${number})</a>`)
      .join("");
    return `<span class="part-i-numbered-equation" id="${numbered[0].label}">${anchors}<math display="block"${attributes}>${body}</math><span class="part-i-equation-numbers">${links}</span></span>`;
  },
);

function start(marker) {
  const index = html.indexOf(marker);
  if (index < 0) throw new Error(`Missing Part II marker: ${marker}`);
  return index;
}

function divBlockAt(blockStart) {
  const token = /<div\b[^>]*>|<\/div>/g;
  token.lastIndex = blockStart;
  let depth = 0;
  let match;
  while ((match = token.exec(html))) {
    if (match[0].startsWith("</")) {
      depth -= 1;
      if (depth === 0) return html.slice(blockStart, token.lastIndex);
    } else {
      depth += 1;
    }
  }
  throw new Error(`Could not close Part II div at ${blockStart}`);
}

function statementBlock(id, kind) {
  return divBlockAt(start(`<div id="${id}" class="${kind}">`));
}

const labels = [
  ["karp:lem:farey-adjacency-expanded", "lemma"],
  ["karp:def:ito-family", "definition"],
  ["karp:prop:scalar-ray", "proposition"],
  ["karp:prop:scalar-continuity", "proposition"],
  ["karp:def:carrier", "definition"],
  ["karp:alg:boundary", "algorithm"],
  ["karp:thm:main", "theorem"],
  ["karp:prop:compact", "proposition"],
  ["karp:thm:polygon-criterion", "theorem"],
  ["karp:cor:radial-filling", "corollary"],
  ["karp:prop:unit-circle", "proposition"],
  ["karp:lem:origin-interior", "lemma"],
  ["karp:def:polygonal-criticality", "definition"],
  ["karp:prop:new-shell-critical", "proposition"],
  ["karp:thm:compression", "theorem"],
  ["karp:lem:reflection-dictionary", "lemma"],
  ["karp:thm:hetero-sharp", "theorem"],
  ["karp:cor:equal-profile", "corollary"],
  ["karp:lem:cycle-cover", "lemma"],
  ["karp:lem:sparse-cycle-collections", "lemma"],
  ["karp:thm:sparse-realization", "theorem"],
  ["karp:cor:attainment", "corollary"],
  ["karp:lem:mediant-expansion", "lemma"],
  ["karp:lem:multiplicity-padding", "lemma"],
  ["karp:lem:nesting-case-split", "lemma"],
  ["karp:thm:candidate-nesting", "theorem"],
  ["karp:lem:continuous-radial-boundary", "lemma"],
  ["karp:prop:small-orders", "proposition"],
];

const partIIHtmlByLabel = Object.fromEntries(
  labels.map(([id, kind]) => [id, statementBlock(id, kind)]),
);

function proofBlockAfterStatement(id, kind) {
  const statementStart = start(`<div id="${id}" class="${kind}">`);
  const statementHtml = divBlockAt(statementStart);
  const statementEnd = statementStart + statementHtml.length;
  const nextContent = html.slice(statementEnd).match(/\S/);
  if (!nextContent || nextContent.index === undefined) return "";
  const proofStart = statementEnd + nextContent.index;
  if (!html.startsWith('<div class="proof">', proofStart)) return "";
  return divBlockAt(proofStart);
}

const partIIProofHtmlByLabel = Object.fromEntries(
  labels
    .map(([id, kind]) => [id, proofBlockAfterStatement(id, kind)])
    .filter(([, proofHtml]) => proofHtml),
);

const inductionHeading = start('<h2 id="induction-on-the-order">');
const theoremProofStart = html.indexOf('<div class="proof">', inductionHeading);
if (theoremProofStart < 0) throw new Error("Could not locate the final theorem proof");
const mainTheoremProofHtml = divBlockAt(theoremProofStart);

const orderSevenStart = start('<h1 id="karp:sec:n7">');
const concludingStart = start('<h1 id="concluding-structural-remarks">');
const orderSevenHtml = html.slice(orderSevenStart, concludingStart);

const generated = `// Generated mechanically from the canonical Part II TeX source.\n// Regenerate with: npm run content:part-ii\nexport const partIIContentMetadata = ${JSON.stringify(
  {
    sourceHash: sha256(partIISource),
    manuscriptHash,
    statementCount: statementLabels.size,
    equationCount: equationLabels.size,
  },
  null,
  2,
)} as const;\n\nexport const partIIHtmlByLabel = ${JSON.stringify(partIIHtmlByLabel)} as const;\n\nexport const partIIProofHtmlByLabel = ${JSON.stringify(partIIProofHtmlByLabel)} as const;\n\nexport const partIIMainTheoremProofHtml = ${JSON.stringify(mainTheoremProofHtml)} as const;\n\nexport const partIIOrderSevenHtml = ${JSON.stringify(orderSevenHtml)} as const;\n`;

writeOrCheckGeneratedFile({
  outputPath,
  generated,
  check: checkMode,
  regenerateCommand: "npm run content:part-ii",
});
