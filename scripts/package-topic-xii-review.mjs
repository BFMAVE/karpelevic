import { execFileSync } from "node:child_process";
import { mkdtemp, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const temporaryDirectory = await mkdtemp(path.join(os.tmpdir(), "karpelevic-topic-xii-"));
const inputA = path.join(temporaryDirectory, "Topic_XII_A.html");
const inputB = path.join(temporaryDirectory, "Topic_XII_B.html");
const output = path.join(projectRoot, "share/Critical_Invariant_Polygons_Topic_XII.html");
const exporter = path.join(projectRoot, "scripts/export-proof-standalone.mjs");
const packager = path.join(projectRoot, "scripts/package-topic-xii-standalone.mjs");

function exportPart(route, destination) {
  execFileSync(process.execPath, [exporter], {
    cwd: projectRoot,
    env: {
      ...process.env,
      PROOF_ROUTE: route,
      PROOF_HTML_OUTPUT: destination,
      PROOF_STANDALONE_TOPIC_MAX: "12",
    },
    stdio: "inherit",
  });
}

try {
  exportPart("/proof/topic-xii/a", inputA);
  exportPart("/proof/topic-xii/b", inputB);
  execFileSync(process.execPath, [packager], {
    cwd: projectRoot,
    env: {
      ...process.env,
      TOPIC_XII_INPUT_A: inputA,
      TOPIC_XII_INPUT_B: inputB,
      TOPIC_XII_OUTPUT: output,
    },
    stdio: "inherit",
  });
} finally {
  await rm(temporaryDirectory, { force: true, recursive: true });
}
