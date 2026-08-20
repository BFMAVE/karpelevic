import { execFileSync } from "node:child_process";
import {
  copyFile,
  mkdir,
  mkdtemp,
  rename,
  rm,
} from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const exporter = path.join(projectRoot, "scripts/export-proof-standalone.mjs");
const outputPath = path.resolve(
  process.env.PROOF_REVIEW_BUNDLE_OUTPUT ??
    path.join(
      projectRoot,
      "share/Critical_Invariant_Polygons_Topics_VIII_IX_Review_Bundle.zip",
    ),
);
const members = [
  {
    route: "/proof/topic-viii",
    filename: "Critical_Invariant_Polygons_Topic_VIII.html",
  },
  {
    route: "/proof/topic-ix",
    filename: "Critical_Invariant_Polygons_Topic_IX.html",
  },
];

const temporaryDirectory = await mkdtemp(
  path.join(os.tmpdir(), "karpelevic-topics-viii-ix-"),
);
const temporaryArchive = path.join(temporaryDirectory, "review-bundle.zip");
const stagedOutput = path.join(
  path.dirname(outputPath),
  `.${path.basename(outputPath)}.tmp-${process.pid}`,
);

try {
  for (const { route, filename } of members) {
    execFileSync(process.execPath, [exporter], {
      cwd: projectRoot,
      stdio: "inherit",
      env: {
        ...process.env,
        PROOF_ROUTE: route,
        PROOF_HTML_OUTPUT: path.join(temporaryDirectory, filename),
        PROOF_STANDALONE_BUNDLE_LINKS: "1",
        PROOF_STANDALONE_BUNDLE_TOPICS: "8,9",
        PROOF_STANDALONE_TOPIC_MAX: "9",
      },
    });
  }

  execFileSync(
    "zip",
    ["-q", "-X", temporaryArchive, ...members.map(({ filename }) => filename)],
    { cwd: temporaryDirectory, stdio: "inherit" },
  );

  await mkdir(path.dirname(outputPath), { recursive: true });
  await copyFile(temporaryArchive, stagedOutput);
  await rename(stagedOutput, outputPath);
  console.log(`Wrote Topic VIII–IX review bundle to ${outputPath}`);
} finally {
  await rm(stagedOutput, { force: true });
  await rm(temporaryDirectory, { force: true, recursive: true });
}
