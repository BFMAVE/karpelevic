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
    requestPath: "/prerequisites",
    outputPath: "prerequisites/index.html",
  },
];

function makeStatic(html, requestPath) {
  const withoutScripts = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel="modulepreload"[^>]*>/gi, "")
    // Keep mathematical forward-reference labels visible, but do not publish
    // live links to unavailable proof routes. The chapter atlas already
    // renders later topics as text with a Forthcoming label.
    .replace(
      /\s+href="(?:\/karpelevic)?\/proof\/topic-(?:vii|viii|ix|x|xi|xii(?:\/[ab])?|xiii|xiv)\/?[^\"]*"/gi,
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

await writeFile(path.join(outputRoot, ".nojekyll"), "", "utf8");
