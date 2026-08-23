import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

export function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

export function readCanonicalManuscript(legacyEnvironmentName) {
  const configuredPath =
    process.env.KARPELEVIC_TEX_PATH ??
    process.env[legacyEnvironmentName];

  if (!configuredPath) {
    throw new Error(
      "Set KARPELEVIC_TEX_PATH to the canonical Complete_Karp_arXiv.tex file.",
    );
  }

  const manuscriptPath = path.resolve(configuredPath);
  const source = readFileSync(manuscriptPath, "utf8");

  return {
    manuscriptPath,
    source,
    manuscriptHash: sha256(source),
  };
}

export function writeOrCheckGeneratedFile({
  outputPath,
  generated,
  check,
  regenerateCommand,
}) {
  if (!check) {
    writeFileSync(outputPath, generated, "utf8");
    return;
  }

  const current = readFileSync(outputPath, "utf8");
  if (current !== generated) {
    throw new Error(
      `${path.relative(process.cwd(), outputPath)} is stale; run ${regenerateCommand}`,
    );
  }
}
