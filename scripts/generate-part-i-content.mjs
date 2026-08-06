import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const manuscriptPath =
  process.env.PART_I_TEX_PATH ??
  "/Users/brechtverbeken/Desktop/research/on arxiv or submitted/Karp/Files and check/arxiv/Complete_Karp_arXiv.tex";
const outputPath = path.join(
  projectRoot,
  "app/data/part-i-content.generated.ts",
);

const source = readFileSync(manuscriptPath, "utf8");
const partEndMarker = "% ===== END UNCHANGED PART I TECHNICAL BODY =====";
const partEnd = source.indexOf(partEndMarker);

if (partEnd < 0) {
  throw new Error(`Could not locate the Part I end marker in ${manuscriptPath}`);
}

const partISource = source.slice(0, partEnd);

function stripTeXComments(tex) {
  return tex
    .split(/\r?\n/)
    .map((line) => {
      for (let index = 0; index < line.length; index += 1) {
        if (line[index] !== "%") continue;

        let precedingBackslashes = 0;
        for (
          let cursor = index - 1;
          cursor >= 0 && line[cursor] === "\\";
          cursor -= 1
        ) {
          precedingBackslashes += 1;
        }
        if (precedingBackslashes % 2 === 0) {
          return line.slice(0, index);
        }
      }
      return line;
    })
    .join("\n");
}

function appendixLetter(index) {
  let value = index;
  let label = "";
  while (value > 0) {
    value -= 1;
    label = String.fromCharCode(65 + (value % 26)) + label;
    value = Math.floor(value / 26);
  }
  return label;
}

function splitAlignRows(body) {
  const rows = [];
  let rowStart = 0;
  let braceDepth = 0;
  let nestedEnvironmentDepth = 0;

  for (let index = 0; index < body.length - 1; index += 1) {
    const environmentToken = body
      .slice(index)
      .match(/^\\(begin|end)\{([^}]+)\}/);
    if (environmentToken) {
      nestedEnvironmentDepth += environmentToken[1] === "begin" ? 1 : -1;
      index += environmentToken[0].length - 1;
      continue;
    }

    if (body[index] === "{" && body[index - 1] !== "\\") {
      braceDepth += 1;
      continue;
    }
    if (body[index] === "}" && body[index - 1] !== "\\") {
      braceDepth = Math.max(0, braceDepth - 1);
      continue;
    }
    if (
      braceDepth !== 0 ||
      nestedEnvironmentDepth !== 0 ||
      body[index] !== "\\" ||
      body[index + 1] !== "\\"
    ) {
      continue;
    }

    rows.push(body.slice(rowStart, index));
    index += 1;

    if (body[index + 1] === "[") {
      const optionEnd = body.indexOf("]", index + 2);
      if (optionEnd >= 0) index = optionEnd;
    }
    rowStart = index + 1;
  }

  rows.push(body.slice(rowStart));
  return rows;
}

function collectEquationLabels(tex) {
  const cleanSource = stripTeXComments(tex);
  const unsupportedNumbering = [
    {
      pattern:
        /\\begin\{(?:subequations|gather|multline|flalign|alignat)\*?\}/,
      description: "an unsupported numbered display environment",
    },
    {
      pattern:
        /\\tag\*?\s*\{|\\(?:setcounter|addtocounter)\s*\{equation\}/,
      description: "a manual equation-number override",
    },
  ];
  for (const { pattern, description } of unsupportedNumbering) {
    if (pattern.test(cleanSource)) {
      throw new Error(
        `Part I contains ${description}; extend the equation-number scanner before generating the site.`,
      );
    }
  }

  const labels = new Map();
  const tokenPattern =
    /\\appendix\b|\\section(\*)?\s*(?:\[[^\]]*\]\s*)?\{|\\begin\{(equation|align\*?)\}/g;
  let sectionCounter = 0;
  let appendixCounter = 0;
  let inAppendix = false;
  let currentSection = "";
  let equationCounter = 0;
  let token;

  function recordLabels(fragment) {
    for (const match of fragment.matchAll(/\\label\{([^}]+)\}/g)) {
      const id = match[1];
      if (labels.has(id)) {
        throw new Error(`Duplicate equation label in Part I: ${id}`);
      }
      labels.set(id, `${currentSection}.${equationCounter}`);
    }
  }

  while ((token = tokenPattern.exec(cleanSource))) {
    if (token[0].startsWith("\\appendix")) {
      inAppendix = true;
      appendixCounter = 0;
      continue;
    }

    if (token[0].startsWith("\\section")) {
      if (token[1] === "*") continue;

      equationCounter = 0;
      if (inAppendix) {
        appendixCounter += 1;
        currentSection = appendixLetter(appendixCounter);
      } else {
        sectionCounter += 1;
        currentSection = String(sectionCounter);
      }
      continue;
    }

    const environment = token[2];
    const endToken = `\\end{${environment}}`;
    const environmentEnd = cleanSource.indexOf(
      endToken,
      tokenPattern.lastIndex,
    );
    if (environmentEnd < 0) {
      throw new Error(`Unclosed ${environment} environment in Part I.`);
    }
    if (!currentSection) {
      throw new Error(
        `Numbered ${environment} environment found before a Part I section.`,
      );
    }

    const body = cleanSource.slice(tokenPattern.lastIndex, environmentEnd);
    if (environment === "equation") {
      equationCounter += 1;
      recordLabels(body);
    } else if (environment === "align") {
      for (const row of splitAlignRows(body)) {
        const rowWithoutLabels = row
          .replace(/\\label\{[^}]+\}/g, "")
          .trim();
        if (!rowWithoutLabels) continue;

        const isNumbered = !/\\(?:notag|nonumber)\b/.test(row);
        if (isNumbered) equationCounter += 1;
        if (isNumbered) recordLabels(row);
      }
    }

    tokenPattern.lastIndex = environmentEnd + endToken.length;
  }

  return labels;
}

const equationLabels = collectEquationLabels(partISource);

function parenthesizeNamedOperators(tex) {
  const texAtom = String.raw`(?:\\(?:widetilde|widehat|overline)\s*(?:\{[A-Za-z]\}|[A-Za-z])|[A-Za-z](?:'|_\{[^{}]+\}|_(?:\\[A-Za-z]+|[A-Za-z0-9]+))*)`;
  const unaryOperator = new RegExp(
    String.raw`\\(tr|det|Ext|relint|aff)(?![A-Za-z])\s*(${texAtom})`,
    "g",
  );
  const explicitInterior = new RegExp(
    String.raw`\\operatorname\{int\}\s*(${texAtom})`,
    "g",
  );

  return tex
    .replace(
      unaryOperator,
      (_match, operator, argument) => `\\${operator}(${argument})`,
    )
    .replace(
      explicitInterior,
      (_match, argument) => `\\operatorname{int}(${argument})`,
    )
    .replaceAll("\\conv\\{a,b,c\\}", "\\conv(\\{a,b,c\\})")
    .replace(/\(\\tr\(([^()]*)\)\)\^2/g, "\\tr($1)^2");
}

function polishWebsiteEquationTypesetting(tex) {
  const label = String.raw`\label{eq:triple-sign-criterion}`;
  const labelIndex = tex.indexOf(label);
  const equationEnd = tex.indexOf(String.raw`\end{equation}`, labelIndex);
  const undottedProduct = String.raw`\varepsilon\det`;

  if (labelIndex < 0 || equationEnd < 0) {
    throw new Error("Could not locate equation (2.9) for web typesetting.");
  }

  const equation = tex.slice(labelIndex, equationEnd);
  if (!equation.includes(undottedProduct)) {
    throw new Error("Equation (2.9) no longer contains the expected product.");
  }

  return (
    tex.slice(0, labelIndex) +
    equation.replace(undottedProduct, String.raw`\varepsilon\cdot\det`) +
    tex.slice(equationEnd)
  );
}

const webSource = polishWebsiteEquationTypesetting(
  parenthesizeNamedOperators(partISource),
);
const pandocInput = `${webSource}
\\end{document}
`
  .replaceAll("\\hbox", "\\text")
  .replaceAll("\\notag", "");

let html = execFileSync(
  "pandoc",
  ["--from=latex", "--to=html5", "--mathml", "--wrap=none"],
  {
    encoding: "utf8",
    input: pandocInput,
    maxBuffer: 32 * 1024 * 1024,
  },
);

const firstSection = html.indexOf('<h3 id="sec:intro">');
if (firstSection < 0) {
  throw new Error("Pandoc output does not contain the first Part I section.");
}
html = html.slice(firstSection);
html = html.replaceAll(
  "<mo>:</mo>",
  '<mo lspace="0.32em" rspace="0.32em">:</mo>',
);
html = html.replaceAll(
  '<mo accent="true">̃</mo>',
  '<mo accent="true" stretchy="true">∼</mo>',
);
const sectionLabels = new Map([
  ["sec:intro", "1"],
  ["sec:prelim", "2"],
  ["sec:saturation", "3"],
  ["sec:one-sided", "4"],
  ["sec:mutation", "5"],
  ["sec:rotation", "6"],
  ["sec:no-skipping", "7"],
  ["sec:monodromy", "8"],
  ["sec:stochastic", "9"],
  ["conclusion", "10"],
  ["app:foundations", "A"],
]);
const statementKinds = new Set([
  "theorem",
  "proposition",
  "lemma",
  "corollary",
  "definition",
  "remark",
]);
const statementLabels = new Map();
const tokenPattern =
  /<h3 id="([^"]+)">|<div id="([^"]+)" class="([^"]+)">/g;
let currentSection = "";
let statementCounter = 0;
let token;

while ((token = tokenPattern.exec(html))) {
  if (token[1]) {
    currentSection = sectionLabels.get(token[1]) ?? currentSection;
    statementCounter = 0;
    continue;
  }

  const [, , id, kind] = token;
  if (!statementKinds.has(kind) || !currentSection) continue;
  statementCounter += 1;
  const displayKind = kind[0].toUpperCase() + kind.slice(1);
  statementLabels.set(id, {
    kind: displayKind,
    number: `${currentSection}.${statementCounter}`,
  });
}

html = html.replace(
  /<div id="([^"]+)" class="(theorem|proposition|lemma|corollary|definition|remark)">\s*<p><strong>[^<]+<\/strong>/g,
  (match, id, kind) => {
    const label = statementLabels.get(id);
    if (!label) return match;
    return `<div id="${id}" class="${kind}">\n<p><strong>${label.kind} ${label.number}</strong>`;
  },
);
html = html.replace(
  /<div id="([^"]+)" class="remark">\s*<p><em>[^<]+<\/em>/g,
  (match, id) => {
    const label = statementLabels.get(id);
    if (!label) return match;
    return `<div id="${id}" class="remark">\n<p><strong>${label.kind} ${label.number}</strong>`;
  },
);

html = html.replace(
  /<math display="block"([^>]*)>([\s\S]*?)<\/math>/g,
  (match, attributes, body) => {
    const labels = Array.from(
      body.matchAll(/\\label\{([^}]+)\}/g),
      (labelMatch) => labelMatch[1],
    );
    if (labels.length === 0 || /\sid=/.test(attributes)) return match;

    const numbers = labels.map((label) => {
      const number = equationLabels.get(label);
      if (!number) {
        throw new Error(`Missing manuscript number for equation label: ${label}`);
      }
      return { label, number };
    });
    const extraAnchors = numbers
      .slice(1)
      .map(
        ({ label }) =>
          `<span class="part-i-equation-anchor" id="${label}" aria-hidden="true"></span>`,
      )
      .join("");
    const visibleNumbers = numbers
      .map(
        ({ label, number }) =>
          `<a class="part-i-equation-number" href="#${label}" aria-label="Equation ${number}, permalink">(${number})</a>`,
      )
      .join("");

    return `<span class="part-i-numbered-equation" id="${numbers[0].label}">${extraAnchors}<math display="block"${attributes}>${body}</math><span class="part-i-equation-numbers">${visibleNumbers}</span></span>`;
  },
);

function statementLinks(referenceList) {
  const ids = referenceList.split(",");
  const rendered = ids.map((id) => {
    const label = statementLabels.get(id);
    const text = label ? `${label.kind} ${label.number}` : id;
    return `<a href="#${id}">${text}</a>`;
  });
  return rendered.length === 2
    ? `${rendered[0]} and ${rendered[1]}`
    : rendered.join(", ");
}

html = html.replace(
  /<a href="#[^"]+" data-reference-type="ref\+label" data-reference="([^"]+)">[\s\S]*?<\/a>/g,
  (_match, references) => statementLinks(references),
);

html = html.replace(
  /<a href="#[^"]+" data-reference-type="eqref" data-reference="([^"]+)">[\s\S]*?<\/a>/g,
  (_match, references) =>
    references
      .split(",")
      .map((id) => {
        const cleanId = id.trim();
        const number = equationLabels.get(cleanId);
        if (!number) {
          throw new Error(
            `Could not resolve manuscript number for equation reference: ${cleanId}`,
          );
        }
        return `<a class="part-i-equation-reference" href="#${cleanId}">equation (${number})</a>`;
      })
      .join(" and "),
);

function start(marker) {
  const index = html.indexOf(marker);
  if (index < 0) throw new Error(`Missing generated marker: ${marker}`);
  return index;
}

function section(startMarker, endMarker) {
  return html.slice(start(startMarker), start(endMarker));
}

function statementBlock(marker) {
  const blockStart = start(marker);
  const divToken = /<div\b[^>]*>|<\/div>/g;
  divToken.lastIndex = blockStart;
  let depth = 0;
  let token;

  while ((token = divToken.exec(html)) !== null) {
    if (token[0].startsWith("</")) {
      depth -= 1;
      if (depth === 0) return html.slice(blockStart, divToken.lastIndex);
    } else {
      depth += 1;
    }
  }

  throw new Error(`Could not close generated statement block: ${marker}`);
}

const markers = {
  intro: '<h3 id="sec:intro">',
  nCritical:
    '<div id="def:N-critical" class="definition">',
  strictPolygon:
    '<div id="def:strict-polygon" class="definition">',
  firstMainTheorem:
    '<div id="thm:critical-polygon-normal-form" class="theorem">',
  secondMainTheorem:
    '<div id="thm:complex-monodromy" class="theorem">',
  prelim: '<h3 id="sec:prelim">',
  adaptedComplex:
    '<div id="prop:adapted-complex" class="proposition">',
  affineInvariance:
    '<div id="prop:affine-invariance" class="proposition">',
  contactCovariance:
    '<div id="prop:contact-geometry-covariance" class="proposition">',
  coordinateReversal:
    '<div id="lem:coordinate-reversal" class="lemma">',
  originInterior:
    '<div id="lem:origin-interior" class="lemma">',
  orientedBoundaryOrder:
    '<div id="lem:oriented-boundary-order" class="lemma">',
  firstTopicTwoLemma:
    '<div id="lem:triple-sign-criterion" class="lemma">',
  simultaneousConvexOpenness:
    '<div id="lem:simultaneous-convex-openness" class="lemma">',
  supportFaceTest:
    '<div id="lem:support-face-test" class="lemma">',
  angularGaps:
    '<div id="lem:angular-gaps" class="lemma">',
  saturation: '<h3 id="sec:saturation">',
  normalFanTransfer:
    '<div id="lem:normal-fan-transfer" class="proposition">',
  hereditarySaturation:
    '<div id="thm:hereditary-saturation" class="theorem">',
  heredityRemark:
    '<div id="rem:heredity-key" class="remark">',
  oneSided: '<h3 id="sec:one-sided">',
  sideWitness:
    '<div id="lem:side-witness" class="lemma">',
  ownershipWord:
    '<div id="def:ownership-word" class="definition">',
  halfOpenSideAtlas:
    '<div id="lem:half-open-side-atlas" class="lemma">',
  boundaryFaceRigidity:
    '<div id="lem:boundary-face-rigidity" class="lemma">',
  boundarySegmentLocator:
    '<div id="lem:boundary-segment-locator" class="lemma">',
  labeledSideMatrix:
    '<div id="lem:labeled-side-matrix" class="lemma">',
  ownershipSurgeryModel:
    '<div id="lem:ownership-surgery-model" class="lemma">',
  edgeCaps: '<h4 id="edge-caps-and-one-sided-interlacing">',
  edgeCap:
    '<div id="lem:edge-cap" class="lemma">',
  areaCapBound:
    '<div id="lem:area-cap-bound" class="lemma">',
  cyclicEndpointLedger:
    '<div id="lem:cyclic-endpoint-ledger" class="lemma">',
  cyclicInterlacing:
    '<div id="lem:cyclic-interlacing" class="lemma">',
  globalHalfOpenOwnership:
    '<div id="cor:global-half-open-ownership" class="corollary">',
  oneSidedContact:
    '<div id="lem:one-sided-contact" class="lemma">',
  liftedEndpointPaths:
    '<div id="lem:lifted-endpoint-paths" class="lemma">',
  mutation: '<h3 id="sec:mutation">',
  contactSurgery:
    '<div id="lem:contact-surgery" class="proposition">',
  intrinsicMutationLaw:
    '<div id="cor:intrinsic-mutation-law" class="corollary">',
  legalChipSequence:
    '<div id="cor:legal-chip-sequence" class="corollary">',
  booleanSweeps:
    '<div id="cor:boolean-sweeps-geometric" class="corollary">',
  oneBlock:
    '<div id="lem:one-block" class="lemma">',
  rotation: '<h3 id="sec:rotation">',
  rotationSection:
    '<div id="thm:rotation-section" class="theorem">',
  endpointPaddedSection:
    '<div id="cor:endpoint-padded-section" class="corollary">',
  latticeSail:
    '<div id="rem:lattice-sail" class="remark">',
  noSkipping: '<h3 id="sec:no-skipping">',
  shortCorridorSupports:
    '<div id="lem:short-corridor-supports" class="lemma">',
  properCorridorChain:
    '<div id="lem:proper-corridor-chain" class="lemma">',
  returnEdgeLedger:
    '<div id="prop:return-edge-ledger" class="proposition">',
  corridor: '<h4 id="the-projective-corridor-theorem">',
  projectiveCorridor:
    '<div id="def:projective-corridor" class="definition">',
  holonomyChart:
    '<div id="prop:holonomy-chart" class="proposition">',
  holonomyCalibration:
    '<div id="lem:holonomy-calibration" class="lemma">',
  projectiveFixedPointEscape:
    '<div id="lem:projective-fixed-point-escape" class="lemma">',
  projectiveCorridorEscape:
    '<div id="thm:projective-corridor-escape" class="theorem">',
  deformationAdmissibility:
    '<div id="lem:deformation-admissibility" class="lemma">',
  globalReturnDeformation:
    '<div id="thm:global-return-deformation" class="theorem">',
  unitReturn:
    '<div id="thm:unit-return" class="theorem">',
  noSkippingBoundaryLedger:
    '<div id="rem:no-skipping-boundary-ledger" class="remark">',
  protectiveHolonomy:
    '<div id="rem:protective-holonomy" class="remark">',
  monodromy: '<h3 id="sec:monodromy">',
  fareyAdjacency:
    '<div id="lem:farey-adjacency-expanded" class="lemma">',
  fareyReflection:
    '<div id="lem:farey-reflection" class="lemma">',
  backwardStripReflection:
    '<div id="lem:backward-strip-reflection" class="lemma">',
  identityRotationReflection:
    '<div id="lem:kappa-N" class="lemma">',
  largeBlockProduct:
    '<div id="prop:large-block-product" class="proposition">',
  minimalBlockProduct:
    '<div id="prop:minimal-block-product" class="proposition">',
  compressionBranch:
    '<div id="lem:compression-branch" class="lemma">',
  stochastic: '<h3 id="sec:stochastic">',
  strictSeparation:
    '<div id="lem:strict-separation" class="lemma">',
  perronTools:
    '<div id="lem:perron-tools" class="lemma">',
  polygonPolarity:
    '<div id="lem:polygon-polarity" class="lemma">',
  polygonHausdorff:
    '<div id="lem:polygonal-hausdorff-continuity" class="lemma">',
  strictAreaMonotonicity:
    '<div id="lem:strict-area-monotonicity" class="lemma">',
  latticeParallelogramCount:
    '<div id="lem:lattice-parallelogram-count" class="lemma">',
};

const introHeadingEnd = html.indexOf("</h3>", start(markers.intro)) + 5;
const prelimHeadingEnd = html.indexOf("</h3>", start(markers.prelim)) + 5;
const saturationHeadingEnd =
  html.indexOf("</h3>", start(markers.saturation)) + 5;
const oneSidedHeadingEnd =
  html.indexOf("</h3>", start(markers.oneSided)) + 5;
const topicISetupHtml = html.slice(
  introHeadingEnd,
  start(markers.nCritical),
);
const topicIHtmlByItem = {
  1: section(markers.nCritical, markers.strictPolygon),
  2: section(markers.strictPolygon, markers.firstMainTheorem),
  5:
    html.slice(prelimHeadingEnd, start(markers.adaptedComplex)) +
    section(markers.adaptedComplex, markers.affineInvariance),
  6: section(markers.affineInvariance, markers.contactCovariance),
  7: section(markers.contactCovariance, markers.coordinateReversal),
  8: section(markers.coordinateReversal, markers.originInterior),
  9: section(markers.originInterior, markers.orientedBoundaryOrder),
  10: section(markers.orientedBoundaryOrder, markers.firstTopicTwoLemma),
  66: section(markers.strictSeparation, markers.polygonPolarity),
};

const topicIISetupHtml = html.slice(
  saturationHeadingEnd,
  start(markers.normalFanTransfer),
);
const topicIIHtmlByItem = {
  11: section(
    markers.firstTopicTwoLemma,
    markers.simultaneousConvexOpenness,
  ),
  12: section(
    markers.simultaneousConvexOpenness,
    markers.supportFaceTest,
  ),
  13: section(markers.supportFaceTest, markers.angularGaps),
  14: section(markers.angularGaps, markers.saturation),
  15: section(markers.normalFanTransfer, markers.hereditarySaturation),
  16: section(markers.hereditarySaturation, markers.heredityRemark),
  17: section(markers.heredityRemark, markers.oneSided),
  18: html.slice(oneSidedHeadingEnd, start(markers.ownershipWord)),
  65: section(markers.perronTools, markers.strictSeparation),
  67: section(markers.polygonPolarity, markers.polygonHausdorff),
};

const topicIIIHtmlByItem = {
  19: statementBlock(markers.ownershipWord),
  20: statementBlock(markers.halfOpenSideAtlas),
  21: statementBlock(markers.boundaryFaceRigidity),
  22: statementBlock(markers.boundarySegmentLocator),
  23: statementBlock(markers.labeledSideMatrix),
  24: statementBlock(markers.ownershipSurgeryModel),
  25: statementBlock(markers.edgeCap),
  26: statementBlock(markers.areaCapBound),
  68: statementBlock(markers.polygonHausdorff),
  69: statementBlock(markers.strictAreaMonotonicity),
};

const topicIVHtmlByItem = {
  27: statementBlock(markers.cyclicEndpointLedger),
  28: statementBlock(markers.cyclicInterlacing),
  29: statementBlock(markers.globalHalfOpenOwnership),
  30: statementBlock(markers.oneSidedContact),
  31: statementBlock(markers.liftedEndpointPaths),
  32: statementBlock(markers.contactSurgery),
  33: statementBlock(markers.intrinsicMutationLaw),
  34: statementBlock(markers.legalChipSequence),
  35: statementBlock(markers.booleanSweeps),
  36: statementBlock(markers.oneBlock),
};

const topicVHtmlByItem = {
  37: statementBlock(markers.rotationSection),
  38: statementBlock(markers.endpointPaddedSection),
  39: statementBlock(markers.latticeSail),
  40: statementBlock(markers.shortCorridorSupports),
  41: statementBlock(markers.properCorridorChain),
  42: statementBlock(markers.returnEdgeLedger),
  43: statementBlock(markers.projectiveCorridor),
  44: statementBlock(markers.holonomyChart),
  70: statementBlock(markers.latticeParallelogramCount),
};

const topicVIHtmlByItem = {
  45: statementBlock(markers.holonomyCalibration),
  46: statementBlock(markers.projectiveFixedPointEscape),
  47: statementBlock(markers.projectiveCorridorEscape),
  48: statementBlock(markers.deformationAdmissibility),
  49: statementBlock(markers.globalReturnDeformation),
  50: statementBlock(markers.unitReturn),
  51: statementBlock(markers.noSkippingBoundaryLedger),
  52: statementBlock(markers.protectiveHolonomy),
};

const topicVIIHtmlByItem = {
  53: statementBlock(markers.fareyAdjacency),
  54: statementBlock(markers.fareyReflection),
  55: statementBlock(markers.backwardStripReflection),
  56: statementBlock(markers.identityRotationReflection),
  57: statementBlock(markers.largeBlockProduct),
  58: statementBlock(markers.minimalBlockProduct),
  59: statementBlock(markers.compressionBranch),
};

const partIMainTheoremHtmlById = {
  "thm:critical-polygon-normal-form": statementBlock(markers.firstMainTheorem),
  "thm:complex-monodromy": statementBlock(markers.secondMainTheorem),
};

const topicHtml = {
  language:
    '<h3 id="topic-i-basic-setting">Basic setting and notation</h3>' +
    topicISetupHtml +
    Object.values(topicIHtmlByItem).join(""),
  "active-sides":
    '<h3 id="topic-ii-convex-preliminaries">Convex preliminaries</h3>' +
    [11, 12, 13, 14]
      .map((itemNumber) => topicIIHtmlByItem[itemNumber])
      .join("") +
    '<h3 id="topic-ii-hereditary-saturation">Hereditary saturation</h3>' +
    topicIISetupHtml +
    [15, 65, 67, 16, 17, 18]
      .map((itemNumber) => topicIIHtmlByItem[itemNumber])
      .join(""),
  ownership: section(markers.oneSided, markers.edgeCaps),
  mutation:
    '<h3 class="continued-heading">One-sided contact selection — continued</h3>' +
    section(markers.edgeCaps, markers.mutation) +
    section(markers.mutation, markers.rotation),
  rotation:
    section(markers.rotation, markers.noSkipping) +
    section(markers.noSkipping, markers.corridor),
  "unit-return":
    '<h3 class="continued-heading">Projective no-skipping — continued</h3>' +
    section(markers.corridor, markers.monodromy),
  "farey-return": section(markers.monodromy, markers.stochastic),
  spectra: html.slice(start(markers.stochastic)),
};

const sourceHash = createHash("sha256").update(source).digest("hex");
const statementCount = [...statementLabels.keys()].length;
const proofCount = (html.match(/class="proof"/g) ?? []).length;
const displayMathCount = (html.match(/<math display="block"/g) ?? []).length;

const generated = `// Generated mechanically from the canonical Part I TeX source.
// Regenerate with: npm run content:part-i
export const partIContentMetadata = ${JSON.stringify(
  {
    sourceHash,
    statementCount,
    proofCount,
    displayMathCount,
  },
  null,
  2,
)} as const;

export const partIHtmlByTopic = ${JSON.stringify(topicHtml)} as const;

export const topicISetupHtml = ${JSON.stringify(topicISetupHtml)} as const;

export const topicIHtmlByItem = ${JSON.stringify(topicIHtmlByItem)} as const;

export const topicIISetupHtml = ${JSON.stringify(topicIISetupHtml)} as const;

export const topicIIHtmlByItem = ${JSON.stringify(topicIIHtmlByItem)} as const;

export const topicIIIHtmlByItem = ${JSON.stringify(topicIIIHtmlByItem)} as const;

export const topicIVHtmlByItem = ${JSON.stringify(topicIVHtmlByItem)} as const;

export const topicVHtmlByItem = ${JSON.stringify(topicVHtmlByItem)} as const;

export const topicVIHtmlByItem = ${JSON.stringify(topicVIHtmlByItem)} as const;

export const topicVIIHtmlByItem = ${JSON.stringify(topicVIIHtmlByItem)} as const;

export const partIMainTheoremHtmlById = ${JSON.stringify(partIMainTheoremHtmlById)} as const;
`;

writeFileSync(outputPath, generated, "utf8");
