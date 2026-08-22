import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const outputRoot = path.join(projectRoot, "pages-out");
const basePath = "/karpelevic";
const routes = [
  { requestPath: "/", outputPath: "index.html" },
  { requestPath: "/history", outputPath: "history/index.html" },
  { requestPath: "/journey", outputPath: "journey/index.html" },
  { requestPath: "/proof", outputPath: "proof/index.html" },
  {
    requestPath: "/proof/topic-ii",
    outputPath: "proof/topic-ii/index.html",
  },
  {
    requestPath: "/proof/topic-iii",
    outputPath: "proof/topic-iii/index.html",
  },
  {
    requestPath: "/proof/topic-iv",
    outputPath: "proof/topic-iv/index.html",
  },
  {
    requestPath: "/proof/topic-v",
    outputPath: "proof/topic-v/index.html",
  },
  {
    requestPath: "/proof/topic-vi",
    outputPath: "proof/topic-vi/index.html",
  },
  {
    requestPath: "/proof/topic-vii",
    outputPath: "proof/topic-vii/index.html",
  },
  {
    requestPath: "/proof/topic-viii",
    outputPath: "proof/topic-viii/index.html",
  },
  {
    requestPath: "/proof/topic-ix",
    outputPath: "proof/topic-ix/index.html",
  },
  {
    requestPath: "/proof/topic-x",
    outputPath: "proof/topic-x/index.html",
  },
  {
    requestPath: "/proof/topic-xi",
    outputPath: "proof/topic-xi/index.html",
  },
  {
    requestPath: "/proof/topic-xii",
    outputPath: "proof/topic-xii/index.html",
  },
  {
    requestPath: "/prerequisites",
    outputPath: "prerequisites/index.html",
  },
];
const compatibilityRedirects = [
  {
    outputPath: "proof/topic-vi/a/index.html",
    target: `${basePath}/proof/topic-vi/#lem:holonomy-calibration`,
    title: "Topic VI has moved",
    message: "Topic VI is now one chapter.",
  },
  {
    outputPath: "proof/topic-vi/b/index.html",
    target: `${basePath}/proof/topic-vi/#lem:deformation-admissibility`,
    title: "Topic VI has moved",
    message: "Topic VI is now one chapter.",
  },
  {
    outputPath: "proof/topic-xii/a/index.html",
    target: `${basePath}/proof/topic-xii/`,
    title: "Topic XII has moved",
    message: "Topic XII is now one continuous chapter.",
  },
  {
    outputPath: "proof/topic-xii/b/index.html",
    target: `${basePath}/proof/topic-xii/#karp:lem:nesting-case-split`,
    title: "Topic XII has moved",
    message: "Topic XII is now one continuous chapter.",
  },
];

function redirectPage(target, title, message) {
  const escapedTarget = target.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="refresh" content="0; url=${escapedTarget}">
  <link rel="canonical" href="https://bfmave.github.io${escapedTarget}">
  <title>${title}</title>
</head>
<body>
  <p>${message} <a href="${escapedTarget}">Continue.</a></p>
</body>
</html>`;
}

function makeStatic(html, requestPath) {
  const withoutScripts = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel="modulepreload"[^>]*>/gi, "")
    // Keep mathematical forward-reference labels visible, but do not publish
    // live links to unavailable proof routes. The chapter atlas already
    // renders later topics as text with a Forthcoming label.
    .replace(
      /\s+href="(?:\/karpelevic)?\/proof\/topic-(?:xiii|xiv)\/?[^\"]*"/gi,
      "",
    );
  const withProjectAssets = withoutScripts.replaceAll(
    "/assets/",
    `${basePath}/assets/`,
  );

  const proofReaderScript =
    requestPath === "/proof"
      ? `<script src="${basePath}/proof.js" defer></script>`
      : "";
  const proofChapterScript = requestPath.startsWith("/proof/topic-")
    ? `<script src="${basePath}/proof-chapter.js" defer></script>`
    : "";
  return withProjectAssets.replace(
    "</body>",
    `<script src="${basePath}/contact.js" defer></script>${proofReaderScript}${proofChapterScript}</body>`,
  );
}

async function renderRoute(worker, requestPath) {
  const response = await worker.fetch(
    new Request(`https://bfmave.github.io${requestPath}`, {
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
    throw new Error(
      `Could not render ${requestPath}: HTTP ${response.status}`,
    );
  }

  return makeStatic(await response.text(), requestPath);
}

await rm(outputRoot, { force: true, recursive: true });
await mkdir(outputRoot, { recursive: true });
await cp(path.join(projectRoot, "dist/client"), outputRoot, {
  recursive: true,
});

// The client build contains artifacts for every local proof route. The public
// Pages edition intentionally publishes only the rendered routes above, so
// remove build metadata, later-topic downloads, and client bundles that the
// script-free static pages do not reference.
await rm(path.join(outputRoot, ".vite"), { force: true, recursive: true });
await rm(path.join(outputRoot, "code"), { force: true, recursive: true });
const assetDirectory = path.join(outputRoot, "assets");
for (const entry of await readdir(assetDirectory, { withFileTypes: true })) {
  if (entry.isFile() && entry.name.endsWith(".js")) {
    await rm(path.join(assetDirectory, entry.name), { force: true });
  }
}

const serverEntry = pathToFileURL(
  path.join(projectRoot, "dist/server/index.js"),
);
serverEntry.searchParams.set("static-export", Date.now().toString());
const { default: worker } = await import(serverEntry.href);

for (const route of routes) {
  const destination = path.join(outputRoot, route.outputPath);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(
    destination,
    await renderRoute(worker, route.requestPath),
    "utf8",
  );
}

for (const redirect of compatibilityRedirects) {
  const destination = path.join(outputRoot, redirect.outputPath);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(
    destination,
    redirectPage(redirect.target, redirect.title, redirect.message),
    "utf8",
  );
}

await writeFile(path.join(outputRoot, ".nojekyll"), "", "utf8");
