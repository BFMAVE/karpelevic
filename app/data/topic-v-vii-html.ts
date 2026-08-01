import {
  partIHtmlByTopic,
  partIMainTheoremHtmlById,
  topicVHtmlByItem,
  topicVIHtmlByItem,
  topicVIIHtmlByItem,
} from "./part-i-content.generated";
import { sitePath } from "../lib/site-path";

type HtmlMap = Readonly<Record<number, string>>;
type ProofIdMap = Readonly<Record<number, string>>;

const allPartIHtml = Object.values(partIHtmlByTopic).join("");

const routeByAnchor: Readonly<Record<string, string>> = {
  "def:strict-polygon": "/proof/",
  "prop:adapted-complex": "/proof/",
  "lem:origin-interior": "/proof/",
  "lem:oriented-boundary-order": "/proof/",
  "lem:triple-sign": "/proof/topic-ii/",
  "lem:simultaneous-convex-admissibility": "/proof/topic-ii/",
  "lem:support-face-test": "/proof/topic-ii/",
  "lem:angular-monotonicity": "/proof/topic-ii/",
  "lem:angular-gaps": "/proof/topic-ii/",
  "lem:triple-sign-criterion": "/proof/topic-ii/",
  "lem:simultaneous-convex-openness": "/proof/topic-ii/",
  "thm:hereditary-saturation": "/proof/topic-ii/",
  "lem:one-sided-contact": "/proof/topic-iv/",
  "lem:one-block": "/proof/topic-iv/",
  "lem:contact-surgery": "/proof/topic-iv/",
  "cor:intrinsic-mutation-law": "/proof/topic-iv/",
  "thm:rotation-section": "/proof/topic-v/",
  "cor:endpoint-padded-section": "/proof/topic-v/",
  "lem:lattice-parallelogram-count": "/proof/topic-v/",
  "lem:short-corridor-supports": "/proof/topic-v/",
  "lem:proper-corridor-chain": "/proof/topic-v/",
  "prop:return-edge-ledger": "/proof/topic-v/",
  "def:projective-corridor": "/proof/topic-v/",
  "prop:holonomy-chart": "/proof/topic-v/",
  "lem:holonomy-calibration": "/proof/topic-vi/a/",
  "lem:projective-fixed-point-escape": "/proof/topic-vi/a/",
  "thm:projective-corridor-escape": "/proof/topic-vi/a/",
  "lem:deformation-admissibility": "/proof/topic-vi/b/",
  "thm:global-return-deformation": "/proof/topic-vi/b/",
  "thm:unit-return": "/proof/topic-vi/b/",
  "thm:critical-polygon-normal-form": "/proof/topic-vi/b/",
  "lem:farey-adjacency-expanded": "/proof/topic-vii/",
  "lem:farey-reflection": "/proof/topic-vii/",
  "lem:backward-strip-reflection": "/proof/topic-vii/",
  "lem:kappa-N": "/proof/topic-vii/",
  "prop:large-block-product": "/proof/topic-vii/",
  "prop:minimal-block-product": "/proof/topic-vii/",
  "lem:compression-branch": "/proof/topic-vii/",
  "thm:complex-monodromy": "/proof/topic-vii/",
  "lem:lifted-endpoint-paths": "/proof/topic-iv/",
  "eq:one-sided-contact": "/proof/topic-iv/",
  "eq:kappa-angle": "/proof/topic-iv/",
  "eq:other-side-strictness": "/proof/topic-ii/",
  "eq:tower-bijection": "/proof/topic-v/",
  "eq:internal-tower": "/proof/topic-v/",
  "eq:return-identities": "/proof/topic-v/",
  "eq:preceding-record": "/proof/topic-v/",
  "eq:return-field-partition": "/proof/topic-v/",
  "eq:return-inverse-status": "/proof/topic-v/",
  "eq:return-edge-closure": "/proof/topic-v/",
  "eq:corridor-contact-chain": "/proof/topic-v/",
  "eq:corridor-seed-transport": "/proof/topic-v/",
  "eq:forward-return-range": "/proof/topic-v/",
};

function qualifyCrossTopicLinks(html: string, localAnchors: ReadonlySet<string>): string {
  return html.replace(/href="#([^"]+)"/g, (match, anchor: string) => {
    if (localAnchors.has(anchor)) return match;
    const route = routeByAnchor[anchor];
    return route ? 'href="' + sitePath(route + "#" + anchor) + '"' : match;
  });
}

function idsInHtml(html: string): string[] {
  return Array.from(html.matchAll(/\bid=["']([^"']+)["']/g), (match) => match[1]);
}

function extractBalancedDivAt(
  html: string,
  start: number,
): { html: string; end: number } {
  const divTag = /<\/?div\b[^>]*>/gi;
  divTag.lastIndex = start;
  let depth = 0;
  let match: RegExpExecArray | null;
  while ((match = divTag.exec(html)) !== null) {
    depth += match[0].startsWith("</") ? -1 : 1;
    if (depth === 0) {
      return { html: html.slice(start, divTag.lastIndex), end: divTag.lastIndex };
    }
  }
  throw new Error("Could not close generated div beginning at offset " + start);
}

function extractProofAfterStatement(theoremId: string): string {
  const statementStart = allPartIHtml.indexOf('<div id="' + theoremId + '"');
  if (statementStart < 0) {
    throw new Error("Could not find generated statement " + theoremId);
  }
  const statement = extractBalancedDivAt(allPartIHtml, statementStart);
  const nextDiv = allPartIHtml.indexOf("<div", statement.end);
  if (nextDiv < 0 || !allPartIHtml.startsWith('<div class="proof">', nextDiv)) {
    throw new Error("No proof follows generated statement " + theoremId);
  }
  if (allPartIHtml.slice(statement.end, nextDiv).trim() !== "") {
    throw new Error("Unexpected generated content before proof of " + theoremId);
  }
  return extractBalancedDivAt(allPartIHtml, nextDiv).html;
}

function transformMap(
  source: Readonly<Record<string, string>>,
  localAnchors: readonly string[],
  proofIds: ProofIdMap = {},
  additionalLocalHtml = "",
): HtmlMap {
  const completeSource = Object.fromEntries(
    Object.entries(source).map(([key, statement]) => {
      const proofId = proofIds[Number(key)];
      return [key, statement + (proofId ? extractProofAfterStatement(proofId) : "")];
    }),
  );
  const local = new Set([
    ...localAnchors,
    ...idsInHtml(Object.values(completeSource).join("")),
    ...idsInHtml(additionalLocalHtml),
  ]);
  return Object.fromEntries(
    Object.entries(completeSource).map(([key, html]) => [
      Number(key),
      qualifyCrossTopicLinks(html, local),
    ]),
  );
}

function endOfProofAfterStatement(theoremId: string): number {
  const statementStart = allPartIHtml.indexOf('<div id="' + theoremId + '"');
  if (statementStart < 0) throw new Error("Could not find generated statement " + theoremId);
  const statement = extractBalancedDivAt(allPartIHtml, statementStart);
  const proofStart = allPartIHtml.indexOf("<div", statement.end);
  if (proofStart < 0 || !allPartIHtml.startsWith('<div class="proof">', proofStart)) {
    throw new Error("No proof follows generated statement " + theoremId);
  }
  return extractBalancedDivAt(allPartIHtml, proofStart).end;
}

function extractProofOf(html: string, theoremId: string): string {
  const marker =
    '<div class="proof">\n<p><em>Proof of <a href="#' + theoremId + '"';
  const start = html.indexOf(marker);
  if (start < 0) throw new Error("Could not find generated proof of " + theoremId);
  return extractBalancedDivAt(html, start).html;
}

const topicVAnchors = [
  "thm:rotation-section",
  "cor:endpoint-padded-section",
  "rem:lattice-sail",
  "lem:short-corridor-supports",
  "lem:proper-corridor-chain",
  "prop:return-edge-ledger",
  "def:projective-corridor",
  "prop:holonomy-chart",
  "lem:lattice-parallelogram-count",
] as const;

const topicVIAAnchors = [
  "lem:holonomy-calibration",
  "lem:projective-fixed-point-escape",
  "thm:projective-corridor-escape",
] as const;

const topicVIBAnchors = [
  "lem:deformation-admissibility",
  "thm:global-return-deformation",
  "thm:unit-return",
  "rem:no-skipping-boundary-ledger",
  "rem:protective-holonomy",
  "thm:critical-polygon-normal-form",
] as const;

const topicVIIAnchors = [
  "lem:farey-adjacency-expanded",
  "lem:farey-reflection",
  "lem:backward-strip-reflection",
  "lem:kappa-N",
  "prop:large-block-product",
  "prop:minimal-block-product",
  "lem:compression-branch",
  "thm:complex-monodromy",
] as const;

const topicVProofIds: ProofIdMap = {
  37: "thm:rotation-section",
  38: "cor:endpoint-padded-section",
  40: "lem:short-corridor-supports",
  41: "lem:proper-corridor-chain",
  42: "prop:return-edge-ledger",
  44: "prop:holonomy-chart",
  70: "lem:lattice-parallelogram-count",
};

const topicVIProofIds: ProofIdMap = {
  45: "lem:holonomy-calibration",
  46: "lem:projective-fixed-point-escape",
  47: "thm:projective-corridor-escape",
  48: "lem:deformation-admissibility",
  49: "thm:global-return-deformation",
  50: "thm:unit-return",
};

const topicVIIProofIds: ProofIdMap = {
  53: "lem:farey-adjacency-expanded",
  54: "lem:farey-reflection",
  55: "lem:backward-strip-reflection",
  56: "lem:kappa-N",
  57: "prop:large-block-product",
  58: "prop:minimal-block-product",
  59: "lem:compression-branch",
};

const rotationHeading = '<h3 id="sec:rotation">';
const rotationStart = allPartIHtml.indexOf(rotationHeading);
const rotationBodyStart = allPartIHtml.indexOf("</h3>", rotationStart) + 5;
const rotationTheoremStart = allPartIHtml.indexOf(
  '<div id="thm:rotation-section"',
);
if (
  rotationStart < 0 ||
  rotationTheoremStart < 0 ||
  rotationBodyStart <= 4 ||
  rotationBodyStart >= rotationTheoremStart
) {
  throw new Error("Could not locate the generated finite-rotation setup");
}
const rotationSetupRaw = allPartIHtml.slice(
  rotationBodyStart,
  rotationTheoremStart,
);

const noSkippingHeading = '<h3 id="sec:no-skipping">';
const noSkippingStart = allPartIHtml.indexOf(noSkippingHeading);
const noSkippingBodyStart = allPartIHtml.indexOf("</h3>", noSkippingStart) + 5;
const shortCorridorStart = allPartIHtml.indexOf('<div id="lem:short-corridor-supports"');
if (noSkippingStart < 0 || shortCorridorStart < 0 || noSkippingBodyStart <= 4) {
  throw new Error("Could not locate the generated projective no-skipping setup");
}
const returnSetupRaw = allPartIHtml.slice(noSkippingBodyStart, shortCorridorStart);

const shortCorridorProofEnd = endOfProofAfterStatement("lem:short-corridor-supports");
const properCorridorStart = allPartIHtml.indexOf('<div id="lem:proper-corridor-chain"');
if (properCorridorStart < 0 || shortCorridorProofEnd >= properCorridorStart) {
  throw new Error("Could not locate the generated corridor branch dictionary");
}
const corridorDictionaryRaw = allPartIHtml.slice(
  shortCorridorProofEnd,
  properCorridorStart,
);
const topicVAdditionalHtml =
  rotationSetupRaw + returnSetupRaw + corridorDictionaryRaw;

export const topicVReaderHtmlByItem = transformMap(
  topicVHtmlByItem,
  topicVAnchors,
  topicVProofIds,
  topicVAdditionalHtml,
);

const topicVLocal = new Set([
  ...topicVAnchors,
  ...idsInHtml(Object.values(topicVHtmlByItem).join("")),
  ...idsInHtml(topicVAdditionalHtml),
]);

export const topicVRotationSetup = {
  id: "topic-v-rotation-setup",
  title: "Finite rotation notation and upper records",
  html: qualifyCrossTopicLinks(rotationSetupRaw, topicVLocal),
} as const;

export const topicVReturnSetup = {
  id: "topic-v-return-setup",
  title: "Return heights, terminal transport, and pulled-back supports",
  html: qualifyCrossTopicLinks(returnSetupRaw, topicVLocal),
} as const;

export const topicVCorridorDictionary = {
  id: "topic-v-corridor-dictionary",
  title: "The forward and reverse corridor dictionary",
  html: qualifyCrossTopicLinks(corridorDictionaryRaw, topicVLocal),
} as const;

export const topicVFormalSetups = [topicVRotationSetup] as const;

const topicVIAStatements = Object.fromEntries(
  [45, 46, 47].map((key) => [String(key), topicVIHtmlByItem[key]]),
);

const topicVIBStatements = Object.fromEntries(
  [48, 49, 50, 51, 52].map((key) => [String(key), topicVIHtmlByItem[key]]),
);

export const topicVIAReaderHtmlByItem = transformMap(
  topicVIAStatements,
  topicVIAAnchors,
  topicVIProofIds,
);

export const topicVIBReaderHtmlByItem = transformMap(
  topicVIBStatements,
  topicVIBAnchors,
  topicVIProofIds,
);

export const topicVIIReaderHtmlByItem = transformMap(
  topicVIIHtmlByItem,
  topicVIIAnchors,
  topicVIIProofIds,
);

function extractStatement(theoremId: string): string {
  const exported =
    partIMainTheoremHtmlById[
      theoremId as keyof typeof partIMainTheoremHtmlById
    ];
  if (exported) return exported;
  const start = allPartIHtml.indexOf('<div id="' + theoremId + '"');
  if (start < 0) throw new Error("Could not find generated statement " + theoremId);
  return extractBalancedDivAt(allPartIHtml, start).html;
}

const theorem13Statement = extractStatement(
  "thm:critical-polygon-normal-form",
);
const theorem13Proof = extractProofOf(
  partIHtmlByTopic["unit-return"],
  "thm:critical-polygon-normal-form",
);

export const theorem13CompleteHtml = qualifyCrossTopicLinks(
  theorem13Statement + theorem13Proof,
  new Set(topicVIBAnchors),
);

const theorem14Statement = extractStatement("thm:complex-monodromy");
const theorem14Proof = extractProofOf(
  partIHtmlByTopic["farey-return"],
  "thm:complex-monodromy",
);

const theorem14Html = theorem14Statement + theorem14Proof;
export const theorem14CompleteHtml = qualifyCrossTopicLinks(
  theorem14Html,
  new Set([...topicVIIAnchors, ...idsInHtml(theorem14Html)]),
);
