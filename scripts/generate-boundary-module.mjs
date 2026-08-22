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
const publicPath = path.join(
  projectRoot,
  "public/code/karpelevic-boundary.js",
);

const source = await readFile(sourcePath, "utf8");
if (process.argv.includes("--check")) {
  const published = await readFile(publicPath, "utf8");
  if (published !== source) {
    throw new Error(
      "public/code/karpelevic-boundary.js is not synchronized with the canonical numerical core; run npm run content:boundary",
    );
  }
} else {
  await writeFile(publicPath, source, "utf8");
}
