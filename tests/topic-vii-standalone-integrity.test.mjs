import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const exporter = path.join(projectRoot, "scripts/export-proof-standalone.mjs");

function visibleTextFromHtml(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<annotation\b[\s\S]*?<\/annotation>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

test("the individual Topic VII standalone preserves the current publication contract", async () => {
  const temporaryDirectory = await mkdtemp(
    path.join(os.tmpdir(), "karpelevic-topic-vii-individual-"),
  );
  const output = path.join(temporaryDirectory, "topic-vii.html");

  try {
    execFileSync(process.execPath, [exporter], {
      cwd: projectRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
      env: {
        ...process.env,
        PROOF_ROUTE: "/proof/topic-vii",
        PROOF_HTML_OUTPUT: output,
      },
    });

    const html = await readFile(output, "utf8");
    const visibleText = visibleTextFromHtml(html);

    assert.match(html, /data-proof-route="topic-vii"/);
    assert.match(
      visibleText,
      /Consecutive Farey fractions and the finite product identity for N≥4/i,
    );
    assert.match(visibleText, /First published 20 August 2026\s*\./);
    assert.match(visibleText, /Last revised 21 August 2026\s*\./);
    assert.match(
      visibleText,
      /This reader was developed with generative-AI assistance\./,
    );
    assert.doesNotMatch(visibleText, /made through vibecoding/i);
    assert.match(
      html,
      /class="[^"]*proof-topic-control-next[^"]*"[^>]*href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-viii\//i,
    );
    assert.doesNotMatch(
      html,
      /href="Critical_Invariant_Polygons_Topic_[IVX]+\.html/i,
    );
    assert.match(
      html,
      /id="prop:minimal-block-product"[\s\S]*?<ol class="part-i-alpha-enumeration">[\s\S]*?\(a\)[\s\S]*?\(b\)/,
    );
    assert.doesNotMatch(
      visibleText,
      /\bmonodromy\b|closed-return product|return-recurrence|lifted phase|phase identity|common continuous argument interval|contact-return normal form/i,
    );
  } finally {
    await rm(temporaryDirectory, { force: true, recursive: true });
  }
});
