import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const sourcePath = path.join(
  projectRoot,
  "app/lib/karpelevic-boundary-core.js",
);
const publicModulePath = path.join(
  projectRoot,
  "public/code/karpelevic-boundary.mjs",
);
const legacyPublicPath = path.join(
  projectRoot,
  "public/code/karpelevic-boundary.js",
);

const source = await readFile(sourcePath, "utf8");
if (process.argv.includes("--check")) {
  const [published, legacyPublished] = await Promise.all([
    readFile(publicModulePath, "utf8"),
    readFile(legacyPublicPath, "utf8"),
  ]);
  if (published !== source || legacyPublished !== source) {
    throw new Error(
      "The public boundary modules are not synchronized with the canonical numerical core; run npm run content:boundary",
    );
  }
} else {
  await Promise.all([
    writeFile(publicModulePath, source, "utf8"),
    writeFile(legacyPublicPath, source, "utf8"),
  ]);
}
