import { readFile } from "node:fs/promises";
import path from "node:path";

export async function readCanonicalBoundarySource(projectRoot) {
  const canonicalPath = path.join(
    projectRoot,
    "app/lib/karpelevic-boundary-core.js",
  );
  const publicPath = path.join(
    projectRoot,
    "public/code/karpelevic-boundary.js",
  );
  const [canonical, published] = await Promise.all([
    readFile(canonicalPath, "utf8"),
    readFile(publicPath, "utf8"),
  ]);
  if (canonical !== published) {
    throw new Error(
      "The downloadable boundary module is not synchronized with the canonical numerical core.",
    );
  }
  if (/^\s*import\b/m.test(canonical) || /^\s*export\s+(?:default|\{)/m.test(canonical)) {
    throw new Error(
      "The boundary core must remain a dependency-free module with declaration exports only.",
    );
  }
  return canonical;
}

export function boundarySourceForClassicScript(source) {
  const stripped = source.replace(
    /^export\s+(?=(?:const|function)\b)/gm,
    "",
  );
  if (/^\s*export\b/m.test(stripped)) {
    throw new Error("Could not convert every boundary-core export for a classic script.");
  }
  return stripped;
}

export async function composeTopicXIVRuntime(projectRoot) {
  const [source, controller] = await Promise.all([
    readCanonicalBoundarySource(projectRoot),
    readFile(path.join(projectRoot, "scripts/standalone-topic-xiv.js"), "utf8"),
  ]);
  return `;(() => {\n"use strict";\n${boundarySourceForClassicScript(source)}\n${controller}\n})();\n`;
}
