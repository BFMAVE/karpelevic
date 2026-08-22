import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(projectRoot, "share/Critical_Invariant_Polygons_Topic_XII.html");
const exporter = path.join(projectRoot, "scripts/export-proof-standalone.mjs");

execFileSync(process.execPath, [exporter], {
  cwd: projectRoot,
  env: {
    ...process.env,
    PROOF_ROUTE: "/proof/topic-xii",
    PROOF_HTML_OUTPUT: output,
    PROOF_STANDALONE_TOPIC_MAX: "14",
  },
  stdio: "inherit",
});
