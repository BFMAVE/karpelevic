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

      if (/^\/proof\/?(?:#top)?$/.test(siteUrl)) {
        return `${attribute}="#top"`;
      }
      if (siteUrl.startsWith("/")) {
        return `${attribute}="${publicSite}${siteUrl}"`;
      }
      return match;
    },
  );
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
  const proofScript = await readFile(
    path.join(projectRoot, "public/proof.js"),
    "utf8",
  );
  const safeScript = proofScript.replace(/<\/script/gi, "<\\/script");
  return html.replace(
    "</body>",
    `<script data-standalone-proof-script>${safeScript}</script></body>`,
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
  if (
    scripts.length !== 1 ||
    !/<script data-standalone-proof-script>(?![\s\S]*\bsrc=)/i.test(
      scripts[0],
    )
  ) {
    throw new Error(
      "Standalone proof HTML must contain exactly one marked inline reading-mode script.",
    );
  }

  const requiredByRoute =
    proofRoute === "/proof/topic-iii"
      ? [
          "Topic III",
          "Building one-sided ownership",
          "Hausdorff convergence",
          "data-proof-route=\"topic-iii\"",
          "data-reading-mode-button",
        ]
      : proofRoute === "/proof/topic-ii"
        ? [
            "Topic II",
            "From convex order to active sides",
            "data-proof-route=\"topic-ii\"",
            "data-reading-mode-button",
          ]
      : proofRoute === "/proof/topic-iv"
        ? [
            "Topic IV",
            "From endpoint order to contact reduction",
            "data-proof-route=\"topic-iv\"",
            "data-reading-mode-button",
          ]
        : [
            "How the Proof Works",
            "Proposition 2.1",
            "Lemma 2.6",
            "Lemma A.2",
            "Lemma 2.7",
            "Proposition 3.1",
            "Lemma A.1",
            "Lemma A.3",
            "Theorem 3.2",
            "Remark 3.3",
            "Lemma 4.1",
            "What is allowed into Topic II",
            "data-topic-slug=\"active-sides\"",
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
html = await addStandaloneProofScript(html);
html = html.replace(
  "<head>",
  '<head><meta name="generator" content="Portable offline edition generated from the Critical Invariant Polygons companion site"/>',
);

verifyStandaloneHtml(html);
await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, html, "utf8");

console.log(
  `Wrote self-contained proof page (${Buffer.byteLength(html).toLocaleString("en")} bytes) to ${outputPath}`,
);
