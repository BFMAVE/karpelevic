import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const clientRoot = path.join(projectRoot, "dist/client");
const outputPath = path.resolve(
  process.env.PROOF_HTML_OUTPUT ??
    path.join(
      projectRoot,
      "share/Critical_Invariant_Polygons_Topics_I_II.html",
    ),
);
const proofRoute = process.env.PROOF_ROUTE ?? "/proof";
const publicSite = "https://bfmave.github.io/karpelevic";
const publishedTopicMaximum = 9;
const bundleLinkMode = process.env.PROOF_STANDALONE_BUNDLE_LINKS === "1";
const reviewBundleFiles = new Map([
  ["/proof/topic-v", "Critical_Invariant_Polygons_Topic_V.html"],
  ["/proof/topic-vi", "Critical_Invariant_Polygons_Topic_VI.html"],
  ["/proof/topic-vii", "Critical_Invariant_Polygons_Topic_VII.html"],
  ["/proof/topic-viii", "Critical_Invariant_Polygons_Topic_VIII.html"],
  ["/proof/topic-ix", "Critical_Invariant_Polygons_Topic_IX.html"],
]);
const proofTopicNumbers = new Map([
  ["/proof/topic-ii", 2],
  ["/proof/topic-iii", 3],
  ["/proof/topic-iv", 4],
  ["/proof/topic-v", 5],
  ["/proof/topic-vi", 6],
  ["/proof/topic-vii", 7],
  ["/proof/topic-viii", 8],
  ["/proof/topic-ix", 9],
  ["/proof/topic-x", 10],
  ["/proof/topic-xi", 11],
  ["/proof/topic-xii", 12],
  ["/proof/topic-xii/a", 12],
  ["/proof/topic-xii/b", 12],
  ["/proof/topic-xiii", 13],
  ["/proof/topic-xiv", 14],
]);
const explicitlyBundledTopicNumbers = new Set(
  (process.env.PROOF_STANDALONE_BUNDLE_TOPICS ?? "")
    .split(",")
    .map((value) => Number(value.trim()))
    .filter((value) => Number.isInteger(value) && value > 0),
);

function isExplicitlyBundledTopic(routePath) {
  if (explicitlyBundledTopicNumbers.size === 0) return true;
  const topicNumber = proofTopicNumbers.get(routePath);
  return topicNumber !== undefined && explicitlyBundledTopicNumbers.has(topicNumber);
}

function normalizeRoutePath(routePath) {
  const normalized = routePath.replace(/\/+$/, "");
  return normalized || "/";
}

function validateBundleConfiguration() {
  if (!bundleLinkMode && explicitlyBundledTopicNumbers.size > 0) {
    throw new Error(
      "PROOF_STANDALONE_BUNDLE_TOPICS requires PROOF_STANDALONE_BUNDLE_LINKS=1.",
    );
  }
  if (!bundleLinkMode || explicitlyBundledTopicNumbers.size === 0) return;

  const hasTopicVIII = explicitlyBundledTopicNumbers.has(8);
  const hasTopicIX = explicitlyBundledTopicNumbers.has(9);
  if (hasTopicVIII !== hasTopicIX) {
    throw new Error(
      "The offline Topic VIII–IX review bundle must declare both topics 8 and 9.",
    );
  }

  const normalizedRoute = normalizeRoutePath(proofRoute);
  const routeTopicNumber = proofTopicNumbers.get(normalizedRoute);
  if (
    routeTopicNumber !== undefined &&
    !explicitlyBundledTopicNumbers.has(routeTopicNumber)
  ) {
    throw new Error(
      `The exported route ${normalizedRoute} is not declared in PROOF_STANDALONE_BUNDLE_TOPICS.`,
    );
  }

  const expectedFilename = reviewBundleFiles.get(normalizedRoute);
  if (expectedFilename && path.basename(outputPath) !== expectedFilename) {
    throw new Error(
      `Bundle export for ${normalizedRoute} must be named ${expectedFilename}.`,
    );
  }
}

validateBundleConfiguration();

const mimeTypes = new Map([
  [".avif", "image/avif"],
  [".gif", "image/gif"],
  [".jpeg", "image/jpeg"],
  [".jpg", "image/jpeg"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
]);

async function replaceAsync(input, pattern, replacer) {
  const pieces = [];
  let cursor = 0;
  let match;

  pattern.lastIndex = 0;
  while ((match = pattern.exec(input))) {
    pieces.push(input.slice(cursor, match.index));
    pieces.push(await replacer(match));
    cursor = match.index + match[0].length;
  }
  pieces.push(input.slice(cursor));
  return pieces.join("");
}

function localAssetPath(assetUrl, referringDirectory) {
  const withoutQuery = assetUrl.split(/[?#]/, 1)[0];
  const resolved = withoutQuery.startsWith("/")
    ? path.resolve(clientRoot, `.${withoutQuery}`)
    : path.resolve(referringDirectory, withoutQuery);
  const relative = path.relative(clientRoot, resolved);

  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Asset lies outside the built site: ${assetUrl}`);
  }
  return resolved;
}

async function inlineCssAssets(css, referringDirectory) {
  return replaceAsync(
    css,
    /url\(\s*(["']?)([^"')]+)\1\s*\)/gi,
    async (match) => {
      const assetUrl = match[2].trim();
      if (
        /^(?:data:|https?:|#)/i.test(assetUrl) ||
        assetUrl.startsWith("var(")
      ) {
        return match[0];
      }

      const assetPath = localAssetPath(assetUrl, referringDirectory);
      const mimeType =
        mimeTypes.get(path.extname(assetPath).toLowerCase()) ??
        "application/octet-stream";
      const contents = await readFile(assetPath);
      return `url("data:${mimeType};base64,${contents.toString("base64")}")`;
    },
  );
}

async function inlineStylesheets(html) {
  return replaceAsync(
    html,
    /<link\b(?=[^>]*\brel="stylesheet")(?=[^>]*\bhref="([^"]+)")[^>]*>/gi,
    async (match) => {
      const stylesheetUrl = match[1];
      const stylesheetPath = localAssetPath(stylesheetUrl, clientRoot);
      const stylesheet = await readFile(stylesheetPath, "utf8");
      const portableStylesheet = await inlineCssAssets(
        stylesheet,
        path.dirname(stylesheetPath),
      );
      return `<style data-standalone-styles>${portableStylesheet}</style>`;
    },
  );
}

function rewriteInternalLinks(html) {
  return html.replace(
    /\b(href|src)="([^"]+)"/gi,
    (match, attribute, originalUrl) => {
      if (
        originalUrl.startsWith("#") ||
        /^(?:data:|mailto:|https?:|tel:)/i.test(originalUrl)
      ) {
        return match;
      }

      let siteUrl = originalUrl;
      if (siteUrl.startsWith("/karpelevic/")) {
        siteUrl = siteUrl.slice("/karpelevic".length);
      }

      const fragmentIndex = siteUrl.indexOf("#");
      const sitePathname =
        fragmentIndex >= 0 ? siteUrl.slice(0, fragmentIndex) : siteUrl;
      const fragment = fragmentIndex >= 0 ? siteUrl.slice(fragmentIndex) : "";
      const normalizedPathname = normalizeRoutePath(sitePathname);
      const normalizedCurrentRoute = normalizeRoutePath(proofRoute);

      if (normalizedPathname === normalizedCurrentRoute) {
        return `${attribute}="${fragment || "#top"}"`;
      }

      if (
        bundleLinkMode &&
        reviewBundleFiles.has(normalizedPathname) &&
        isExplicitlyBundledTopic(normalizedPathname)
      ) {
        return `${attribute}="${reviewBundleFiles.get(normalizedPathname)}${fragment}"`;
      }
      if (siteUrl.startsWith("/")) {
        return `${attribute}="${publicSite}${siteUrl}"`;
      }
      return match;
    },
  );
}

function markUnavailableTopicLinks(html) {
  const configuredMaximumValue = Number(
    process.env.PROOF_STANDALONE_TOPIC_MAX ?? String(publishedTopicMaximum),
  );
  const configuredPublicMaximum = Number.isFinite(configuredMaximumValue)
    ? configuredMaximumValue
    : publishedTopicMaximum;
  const usesExplicitBundleSet =
    bundleLinkMode && explicitlyBundledTopicNumbers.size > 0;

  return html.replace(
    /<a\b([^>]*\bdata-proof-topic-number="(\d+)"[^>]*)>([\s\S]*?)<\/a>/gi,
    (match, rawAttributes, topicNumberText, children) => {
      const topicNumber = Number(topicNumberText);
      const isAvailable = usesExplicitBundleSet
        ? topicNumber <= configuredPublicMaximum ||
          normalizedRoutePathFromUrl(
            rawAttributes.match(/\bhref="([^"]+)"/i)?.[1] ?? "",
          ) === normalizeRoutePath(proofRoute) ||
          explicitlyBundledTopicNumbers.has(topicNumber)
        : topicNumber <= configuredPublicMaximum ||
          normalizedRoutePathFromUrl(
            rawAttributes.match(/\bhref="([^"]+)"/i)?.[1] ?? "",
          ) === normalizeRoutePath(proofRoute);
      if (!Number.isFinite(topicNumber) || isAvailable) {
        return match;
      }

      let attributes = rawAttributes
        .replace(/\s+href="[^"]*"/i, "")
        .replace(/\s+aria-current="[^"]*"/i, "");
      if (/\bclass="[^"]*"/i.test(attributes)) {
        attributes = attributes.replace(
          /\bclass="([^"]*)"/i,
          'class="$1 proof-chapter-unavailable"',
        );
      } else {
        attributes += ' class="proof-chapter-unavailable"';
      }

      return `<span${attributes} aria-disabled="true">${children}<small>Forthcoming</small></span>`;
    },
  );
}

function topicNumberFromUrl(url) {
  let pathname = url;
  if (/^https?:/i.test(url)) {
    try {
      pathname = new URL(url).pathname;
    } catch {
      return undefined;
    }
  }
  if (pathname.startsWith("/karpelevic/")) {
    pathname = pathname.slice("/karpelevic".length);
  }
  pathname = normalizeRoutePath(pathname.split(/[?#]/, 1)[0]);
  return proofTopicNumbers.get(pathname);
}

function normalizedRoutePathFromUrl(url) {
  let pathname = url;
  if (pathname.startsWith("/karpelevic/")) {
    pathname = pathname.slice("/karpelevic".length);
  }
  return normalizeRoutePath(pathname.split(/[?#]/, 1)[0]);
}

function markUnavailableProofAnchors(html) {
  const configuredMaximumValue = Number(
    process.env.PROOF_STANDALONE_TOPIC_MAX ?? String(publishedTopicMaximum),
  );
  const configuredMaximum = Number.isFinite(configuredMaximumValue)
    ? configuredMaximumValue
    : publishedTopicMaximum;
  const usesExplicitBundleSet =
    bundleLinkMode && explicitlyBundledTopicNumbers.size > 0;

  return html.replace(
    /<a\b([^>]*\bhref="([^"]+)"[^>]*)>([\s\S]*?)<\/a>/gi,
    (match, rawAttributes, href, children) => {
      const topicNumber = topicNumberFromUrl(href);
      const isAvailable = usesExplicitBundleSet
        ? topicNumber !== undefined &&
          (topicNumber <= configuredMaximum ||
            normalizedRoutePathFromUrl(href) === normalizeRoutePath(proofRoute) ||
            explicitlyBundledTopicNumbers.has(topicNumber))
        : topicNumber !== undefined &&
          (topicNumber <= configuredMaximum ||
            normalizedRoutePathFromUrl(href) === normalizeRoutePath(proofRoute));
      if (topicNumber === undefined || isAvailable) {
        return match;
      }
      let attributes = rawAttributes
        .replace(/\s+href="[^"]*"/i, "")
        .replace(/\s+aria-current="[^"]*"/i, "");
      if (/\bclass="[^"]*"/i.test(attributes)) {
        attributes = attributes.replace(
          /\bclass="([^"]*)"/i,
          'class="$1 proof-chapter-unavailable"',
        );
      } else {
        attributes += ' class="proof-chapter-unavailable"';
      }
      const forthcoming = /Forthcoming/i.test(children)
        ? ""
        : "<small>Forthcoming</small>";
      return `<span${attributes} aria-disabled="true">${children}${forthcoming}</span>`;
    },
  );
}

function visibleTextFromHtml(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<annotation\b[\s\S]*?<\/annotation>/gi, " ")
    .replace(/<[^>]*>/g, " ");
}

function removeRuntimeMarkup(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(
      /<link\b(?=[^>]*\brel="(?:modulepreload|preload)")[^>]*>/gi,
      "",
    )
    .replace(
      /<link\b(?=[^>]*\brel="(?:shortcut icon|icon)")[^>]*>/gi,
      "",
    );
}

async function addStandaloneProofScript(html) {
  const isCombinedReader = proofRoute === "/proof";
  const isChapter = proofRoute.startsWith("/proof/topic-");
  if (!isCombinedReader && !isChapter) return html;

  const scriptName = isCombinedReader ? "proof.js" : "proof-chapter.js";
  const marker = isCombinedReader
    ? "data-standalone-proof-script"
    : "data-standalone-proof-chapter-script";
  const proofScript = await readFile(
    path.join(projectRoot, "public", scriptName),
    "utf8",
  );
  const safeScript = proofScript.replace(/<\/script/gi, "<\\/script");
  return html.replace(
    "</body>",
    `<script ${marker}>${safeScript}</script></body>`,
  );
}

function verifyStandaloneHtml(html) {
  const forbidden = [
    [
      /<link\b(?=[^>]*\brel="(?:stylesheet|modulepreload|preload)")/i,
      "an external stylesheet or preload",
    ],
    [/\b(?:href|src)="\/(?!\/)/i, "a root-relative file dependency"],
    [/url\(\s*["']?\/assets\//i, "a root-relative CSS asset"],
    [/Before beginning Topic I/i, "the removed prerequisite heading"],
    [/class="proof-prerequisites"/i, "the removed prerequisite section"],
  ];

  for (const [pattern, description] of forbidden) {
    if (pattern.test(html)) {
      throw new Error(`Standalone proof HTML still contains ${description}.`);
    }
  }

  const scripts = html.match(/<script\b[\s\S]*?<\/script>/gi) ?? [];
  if (proofRoute === "/proof") {
    if (
      scripts.length !== 1 ||
      !/<script data-standalone-proof-script>(?![\s\S]*\bsrc=)/i.test(
        scripts[0],
      )
    ) {
      throw new Error(
        "The combined standalone proof reader must contain one marked inline reading-mode script.",
      );
    }
  } else if (proofRoute.startsWith("/proof/topic-")) {
    if (
      scripts.length !== 1 ||
      !/<script data-standalone-proof-chapter-script>(?![\s\S]*\bsrc=)/i.test(
        scripts[0],
      )
    ) {
      throw new Error(
        "A standalone proof chapter must contain one marked inline chapter-controls script.",
      );
    }
  } else if (scripts.length !== 0) {
    throw new Error(
      "A standalone chapter must not contain unused reading-mode scripts.",
    );
  }

  const requiredByRoute =
    proofRoute === "/proof/topic-iii"
      ? [
          "Topic III",
          "Half-open sides and image-edge half-plane intersections",
          "Hausdorff convergence",
          "Old-vertex bound on discarded boundary arcs",
          "Forthcoming",
          "data-proof-route=\"topic-iii\"",
        ]
      : proofRoute === "/proof/topic-ii"
        ? [
            "Topic II",
            "Support inequalities and boundary contact",
            "data-proof-route=\"topic-ii\"",
            "Forthcoming",
          ]
      : proofRoute === "/proof/topic-iv"
        ? [
            "Topic IV",
            "From endpoint order to one interval of relative-interior contacts",
            "data-proof-route=\"topic-iv\"",
          ]
        : proofRoute === "/proof/topic-v"
          ? [
              "Topic V",
              "Rotation arithmetic, the first-return decomposition, and projective preparation",
              "Lattice parallelogram count",
              "data-proof-route=\"topic-v\"",
              "Forthcoming",
            ]
          : proofRoute === "/proof/topic-vi"
            ? [
                "Topic VI",
                "A projective deformation and the first-return step Δ = 1",
                "Notation and exact facts imported from Topics II–V",
                "The first-return step satisfies Δ = 1",
                "data-proof-route=\"topic-vi\"",
                "Forthcoming",
              ]
          : proofRoute === "/proof/topic-vii"
                ? [
                    "Topic VII",
                    "Consecutive Farey fractions and the finite product identity",
                    "Consecutive Farey fractions and reflection",
                    "data-proof-route=\"topic-vii\"",
                    "Forthcoming",
                  ]
              : proofRoute === "/proof/topic-viii"
                ? [
                    "Topic VIII",
                    "Returning to stochastic eigenvalue regions",
                    "Stochastic eigenvalues and invariant polytopes",
                    "A radial boundary point new at order N is N-critical",
                    'data-proof-route="topic-viii"',
                    "Forthcoming",
                  ]
                : proofRoute === "/proof/topic-ix"
                  ? [
                      "Topic IX",
                      "Candidate curves from the Ito equation on Farey intervals",
                      "Criterion for consecutive Farey fractions",
                      "A unique modulus at each prescribed argument",
                      "Endpoint limits, including the case n=3",
                      "Certified numerical evaluation",
                      'data-proof-route="topic-ix"',
                      "Forthcoming",
                    ]
                  : proofRoute === "/proof/topic-x"
                    ? [
                        "Topic X",
                        "The Sharp Radial Upper Bound",
                        "The sharp inequality for varying parameters",
                        'data-proof-route="topic-x"',
                        "Forthcoming",
                      ]
                    : proofRoute === "/proof/topic-xi"
                      ? [
                          "Topic XI",
                          "Constructing Stochastic Matrices and Proving Attainment",
                          "Sparse stochastic realization and attainment",
                          'data-proof-route="topic-xi"',
                          "Forthcoming",
                        ]
                      : proofRoute === "/proof/topic-xii/a"
                        ? [
                            "Topic XII-A",
                            "Local Farey Refinement",
                            "Every nontrivial refinement moves the candidate outward",
                            'data-proof-route="topic-xii-a"',
                            "Forthcoming",
                          ]
                        : proofRoute === "/proof/topic-xii/b"
                          ? [
                              "Topic XII-B",
                              "Exhaustive Candidate Nesting",
                              "From two local signs to one global nesting theorem",
                              'data-proof-route="topic-xii-b"',
                              "Forthcoming",
                            ]
        : [
            "How the Proof Works",
            "Definition 1.1",
            "Definition 1.2",
            "Proposition 2.1",
            "Proposition 2.2",
            "Proposition 2.3",
            "Lemma 2.4",
            "Lemma 2.5",
            "Lemma 2.6",
            "Lemma A.2",
            "data-topic-slug=\"language\"",
            "equation (2.3)",
            "What does it mean for a functional to expose a face?",
            "data-reading-mode-button",
          ];

  for (const required of requiredByRoute) {
    if (!html.includes(required)) {
      throw new Error(
        `Standalone proof HTML is missing required text: ${required}`,
      );
    }
  }

  if (proofRoute === "/proof/topic-ii") {
    if (
      !/class="[^"]*proof-topic-control-previous[^"]*"[^>]*href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/"/i.test(
        html,
      )
    ) {
      throw new Error(
        "Standalone Topic II must link Previous to the public Topic I page.",
      );
    }
    if (
      !/href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-iii\//i.test(
        html,
      )
    ) {
      throw new Error(
        "Standalone Topic II must link to the published Topic III page.",
      );
    }
    if (
      /Symbolic endpoint ownership|The following finite model fixes the endpoint convention/i.test(
        html,
      )
    ) {
      throw new Error(
        "Standalone Topic II still contains the orphaned Topic III endpoint introduction.",
      );
    }
  }

  if (proofRoute === "/proof/topic-iii") {
    if (
      !/href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-iv\//i.test(
        html,
      )
    ) {
      throw new Error(
        "Standalone Topic III must link to the published Topic IV page.",
      );
    }
    const visibleText = visibleTextFromHtml(html);
    if (
      /labelled boundary slot|ownership word|zero-side signature|radius-one anchor|strict mixture|shared-side edge|source shelf|support gap|boundary mixture|collinear candidates|closed dependency chain|Nothing is smuggled|\bcap(?:s|ped|ping)?\b/i.test(
        visibleText,
      )
    ) {
      throw new Error(
        "Standalone Topic III still contains avoidable reader-facing jargon.",
      );
    }
  }

  if (proofRoute === "/proof/topic-v" && !bundleLinkMode) {
    const requiredPublishedRoutes = [
      "/proof/",
      "/proof/topic-ii/",
      "/proof/topic-iii/",
      "/proof/topic-iv/",
      "/proof/topic-vi/",
      "/proof/topic-vii/",
    ];
    for (const route of requiredPublishedRoutes) {
      if (!html.includes(`href="${publicSite}${route}`)) {
        throw new Error(
          `Standalone Topic V must link to the published route ${route}`,
        );
      }
    }
    if (
      /href="Critical_Invariant_Polygons_Topic_(?:V|VI|VII)\.html/i.test(
        html,
      )
    ) {
      throw new Error(
        "Standalone Topic V must not require sibling review files.",
      );
    }
  }

  if (proofRoute === "/proof/topic-vi" && !bundleLinkMode) {
    const requiredPublishedRoutes = [
      "/proof/",
      "/proof/topic-ii/",
      "/proof/topic-iii/",
      "/proof/topic-iv/",
      "/proof/topic-v/",
      "/proof/topic-vii/",
    ];
    for (const route of requiredPublishedRoutes) {
      if (!html.includes(`href="${publicSite}${route}`)) {
        throw new Error(
          `Standalone Topic VI must link to the published route ${route}`,
        );
      }
    }
    if (
      /href="Critical_Invariant_Polygons_Topic_(?:V|VII)\.html/i.test(
        html,
      )
    ) {
      throw new Error(
        "Standalone Topic VI must not require sibling review files.",
      );
    }
    if (
      !/class="[^"]*proof-topic-control-next[^"]*"[^>]*href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-vii\//i.test(
        html,
      )
    ) {
      throw new Error(
        "Standalone Topic VI must link Next to the published Topic VII page.",
      );
    }
  }

  if (proofRoute === "/proof/topic-vii" && !bundleLinkMode) {
    const requiredPublishedRoutes = [
      "/proof/",
      "/proof/topic-ii/",
      "/proof/topic-iii/",
      "/proof/topic-iv/",
      "/proof/topic-v/",
      "/proof/topic-vi/",
      "/proof/topic-viii/",
    ];
    for (const route of requiredPublishedRoutes) {
      if (!html.includes(`href="${publicSite}${route}`)) {
        throw new Error(
          `Standalone Topic VII must link to the published route ${route}`,
        );
      }
    }
    if (/href="Critical_Invariant_Polygons_Topic_[IVX]+\.html/i.test(html)) {
      throw new Error(
        "The individual Topic VII standalone must not require sibling HTML files.",
      );
    }
    if (
      !/class="[^"]*proof-topic-control-next[^"]*"[^>]*href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-viii\//i.test(
        html,
      )
    ) {
      throw new Error(
        "Standalone Topic VII must link Next to the published Topic VIII page.",
      );
    }

    const visibleText = visibleTextFromHtml(html).replace(/\s+/g, " ").trim();
    if (
      !/Consecutive Farey fractions and the finite product identity for N≥4/i.test(
        visibleText,
      )
    ) {
      throw new Error(
        "Standalone Topic VII must expose the current literal chapter title.",
      );
    }
    if (
      !/First published 20 August 2026\s*\./i.test(visibleText) ||
      !/Last revised 21 August 2026\s*\./i.test(visibleText)
    ) {
      throw new Error(
        "Standalone Topic VII must expose its current first-publication and revision dates.",
      );
    }
    if (
      !/This reader was developed with generative-AI assistance\./i.test(
        visibleText,
      ) ||
      /made through vibecoding/i.test(visibleText)
    ) {
      throw new Error(
        "Standalone Topic VII must expose the current authorship disclosure.",
      );
    }
    if (
      /\bmonodromy\b|closed-return product|return-recurrence|lifted phase|phase identity|common continuous argument interval|contact-return normal form/i.test(
        visibleText,
      )
    ) {
      throw new Error(
        "Standalone Topic VII still contains superseded reader-facing terminology.",
      );
    }
  }

  if (proofRoute === "/proof/topic-viii" && !bundleLinkMode) {
    const requiredPublishedRoutes = [
      "/proof/",
      "/proof/topic-ii/",
      "/proof/topic-iii/",
      "/proof/topic-iv/",
      "/proof/topic-v/",
      "/proof/topic-vi/",
      "/proof/topic-vii/",
    ];
    for (const route of requiredPublishedRoutes) {
      if (!html.includes(`href="${publicSite}${route}"`)) {
        throw new Error(
          `Standalone Topic VIII must link to the published route ${route}`,
        );
      }
    }
    if (/href="Critical_Invariant_Polygons_Topic_[IVX]+\.html/i.test(html)) {
      throw new Error(
        "The individual Topic VIII standalone must not require sibling HTML files.",
      );
    }
    if (
      !/class="[^"]*proof-topic-control-next[^"]*"[^>]*href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-ix\//i.test(
        html,
      )
    ) {
      throw new Error(
        "The individual Topic VIII standalone must link Next to published Topic IX.",
      );
    }
    if (
      /data-proof-topic-number="9"(?:(?!<\/li>)[\s\S])*Forthcoming/i.test(
        html,
      )
    ) {
      throw new Error(
        "The individual Topic VIII standalone must not mark published Topic IX as forthcoming.",
      );
    }
  }

  if (proofRoute === "/proof/topic-ix" && !bundleLinkMode) {
    if (/href="Critical_Invariant_Polygons_Topic_[IVX]+\.html/i.test(html)) {
      throw new Error(
        "The individual Topic IX standalone must not require sibling HTML files.",
      );
    }
    if (
      !/class="[^"]*proof-topic-control-previous[^"]*"[^>]*href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-viii\//i.test(
        html,
      )
    ) {
      throw new Error(
        "The individual Topic IX standalone must link Previous to published Topic VIII.",
      );
    }
    if (
      !/data-proof-topic-number="10"(?:(?!<\/li>)[\s\S])*Forthcoming/i.test(
        html,
      )
    ) {
      throw new Error(
        "The individual Topic IX standalone must mark Topic X as forthcoming.",
      );
    }
    if (
      /href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-x\//i.test(
        html,
      )
    ) {
      throw new Error(
        "The individual Topic IX standalone must not link to unpublished Topic X.",
      );
    }
  }

  if (
    bundleLinkMode &&
    explicitlyBundledTopicNumbers.size === 0 &&
    /href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-(?:v(?:i(?:i)?(?:\/[ab])?)?)(?:\/|#)/i.test(
      html,
    )
  ) {
    throw new Error(
      "A review-bundle chapter still links to an unpublished public Topic V–VII route.",
    );
  }
  if (bundleLinkMode && explicitlyBundledTopicNumbers.size > 0) {
    const allowedFilenames = new Set(
      [...reviewBundleFiles]
        .filter(([route]) => isExplicitlyBundledTopic(route))
        .map(([, filename]) => filename),
    );
    const relativeHtmlTargets = [
      ...html.matchAll(/href="([^":/#?]+\.html)(?:#[^"]*)?"/gi),
    ].map((match) => match[1]);
    for (const target of relativeHtmlTargets) {
      if (!allowedFilenames.has(target)) {
        throw new Error(
          `A standalone bundle chapter links to undeclared archive member ${target}.`,
        );
      }
    }

    for (const [route, topicNumber] of proofTopicNumbers) {
      if (
        explicitlyBundledTopicNumbers.has(topicNumber) &&
        html.includes(`href="${publicSite}${route}/`)
      ) {
        throw new Error(
          `A standalone bundle chapter still links publicly to bundled Topic ${topicNumber}.`,
        );
      }
    }

    if (
      explicitlyBundledTopicNumbers.has(8) &&
      explicitlyBundledTopicNumbers.has(9)
    ) {
      const companionFilename =
        normalizeRoutePath(proofRoute) === "/proof/topic-viii"
          ? reviewBundleFiles.get("/proof/topic-ix")
          : normalizeRoutePath(proofRoute) === "/proof/topic-ix"
            ? reviewBundleFiles.get("/proof/topic-viii")
            : undefined;
      if (companionFilename && !html.includes(`href="${companionFilename}`)) {
        throw new Error(
          `The Topic VIII–IX bundle chapter is missing its companion link to ${companionFilename}.`,
        );
      }
    }
  }
}

const serverEntry = pathToFileURL(
  path.join(projectRoot, "dist/server/index.js"),
);
serverEntry.searchParams.set("standalone-proof", Date.now().toString());
const { default: worker } = await import(serverEntry.href);
const response = await worker.fetch(
  new Request(`https://bfmave.github.io${proofRoute}`, {
    headers: { accept: "text/html" },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    passThroughOnException() {},
    waitUntil() {},
  },
);

if (!response.ok) {
  throw new Error(`Could not render the proof page: HTTP ${response.status}`);
}

let html = await response.text();
html = await inlineStylesheets(html);
html = await inlineCssAssets(html, clientRoot);
html = removeRuntimeMarkup(html);
html = rewriteInternalLinks(html);
html = markUnavailableTopicLinks(html);
html = markUnavailableProofAnchors(html);
html = await addStandaloneProofScript(html);
html = html.replace(
  "<head>",
  '<head><meta name="generator" content="Standalone HTML edition generated from the Critical Invariant Polygons companion site"/>',
);

verifyStandaloneHtml(html);
await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, html, "utf8");

console.log(
  `Wrote self-contained proof page (${Buffer.byteLength(html).toLocaleString("en")} bytes) to ${outputPath}`,
);
