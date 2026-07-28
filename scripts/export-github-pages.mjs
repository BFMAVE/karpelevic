import { cp, mkdir, rm, writeFile } from "node:fs/promises";
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
];

function makeStatic(html) {
  const withoutScripts = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel="modulepreload"[^>]*>/gi, "");
  const withProjectAssets = withoutScripts.replaceAll(
    "/assets/",
    `${basePath}/assets/`,
  );

  return withProjectAssets.replace(
    "</body>",
    `<script src="${basePath}/contact.js" defer></script></body>`,
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

  return makeStatic(await response.text());
}

await rm(outputRoot, { force: true, recursive: true });
await mkdir(outputRoot, { recursive: true });
await cp(path.join(projectRoot, "dist/client"), outputRoot, {
  recursive: true,
});

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
