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
const bundleLinkMode = process.env.PROOF_STANDALONE_BUNDLE_LINKS === "1";
const reviewBundleFiles = new Map([
  ["/proof/topic-v", "Critical_Invariant_Polygons_Topic_V.html"],
  ["/proof/topic-vi", "Critical_Invariant_Polygons_Topic_VI.html"],
  ["/proof/topic-vii", "Critical_Invariant_Polygons_Topic_VII.html"],
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
  ["/proof/topic-xiii", 13],
  ["/proof/topic-xiv", 14],
]);

function normalizeRoutePath(routePath) {
  const normalized = routePath.replace(/\/+$/, "");
  return normalized || "/";
}

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

      if (bundleLinkMode && reviewBundleFiles.has(normalizedPathname)) {
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
  const routeTopicNumber = proofTopicNumbers.get(normalizeRoutePath(proofRoute));
  if (routeTopicNumber === undefined) return html;
  const configuredPublicMaximum = Number(
    process.env.PROOF_STANDALONE_TOPIC_MAX ?? "4",
  );
  const availableTopicMaximum = Math.max(
    routeTopicNumber,
    Number.isFinite(configuredPublicMaximum) ? configuredPublicMaximum : 3,
  );

  return html.replace(
    /<a\b([^>]*\bdata-proof-topic-number="(\d+)"[^>]*)>([\s\S]*?)<\/a>/gi,
    (match, rawAttributes, topicNumberText, children) => {
      const topicNumber = Number(topicNumberText);
      if (
        !Number.isFinite(topicNumber) ||
        topicNumber <= availableTopicMaximum
      ) {
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

function markUnavailableProofAnchors(html) {
  const routeTopicNumber = proofTopicNumbers.get(normalizeRoutePath(proofRoute));
  if (routeTopicNumber === undefined) return html;
  const configuredMaximum = Number(
    process.env.PROOF_STANDALONE_TOPIC_MAX ?? String(routeTopicNumber),
  );
  const availableMaximum = Math.max(
    routeTopicNumber,
    Number.isFinite(configuredMaximum) ? configuredMaximum : routeTopicNumber,
  );

  return html.replace(
    /<a\b([^>]*\bhref="([^"]+)"[^>]*)>([\s\S]*?)<\/a>/gi,
    (match, rawAttributes, href, children) => {
      const topicNumber = topicNumberFromUrl(href);
      if (topicNumber === undefined || topicNumber <= availableMaximum) {
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
          "Half-open boundary assignments and edge clipping",
          "Hausdorff convergence",
          "Old-vertex bound on discarded boundary arcs",
          "Forthcoming",
          "data-proof-route=\"topic-iii\"",
        ]
      : proofRoute === "/proof/topic-ii"
        ? [
            "Topic II",
            "From convex order to contact on every side",
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
                    "Farey product data and return monodromy",
                    "Farey adjacency and exact reflection",
                    "data-proof-route=\"topic-vii\"",
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

  if (proofRoute === "/proof/topic-vi") {
    if (
      !/href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-v\//i.test(
        html,
      )
    ) {
      throw new Error(
        "Standalone Topic VI must link to the published Topic V prerequisite.",
      );
    }
    if (
      /href="(?:Critical_Invariant_Polygons_Topic_(?:V|VII)\.html|https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-vii\/)/i.test(
        html,
      )
    ) {
      throw new Error(
        "Standalone Topic VI must not require sibling review files or link to unpublished Topic VII.",
      );
    }
    if (!/data-proof-topic-number="7"[\s\S]{0,500}Forthcoming/i.test(html)) {
      throw new Error(
        "Standalone Topic VI must mark Topic VII as forthcoming.",
      );
    }
  }

  if (
    bundleLinkMode &&
    /href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-(?:v(?:i(?:i)?(?:\/[ab])?)?)(?:\/|#)/i.test(
      html,
    )
  ) {
    throw new Error(
      "A review-bundle chapter still links to an unpublished public Topic V–VII route.",
    );
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
