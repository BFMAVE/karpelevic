import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const exporter = path.join(projectRoot, "scripts/export-proof-standalone.mjs");

const visibleText = (html) =>
  html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<annotation\b[\s\S]*?<\/annotation>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&")
    .replace(/\s+/g, " ");

test("the Topic XI standalone is self-contained and links to published Topic XII", async () => {
  const temporaryDirectory = await mkdtemp(path.join(os.tmpdir(), "karpelevic-topic-xi-"));
  const output = path.join(temporaryDirectory, "Critical_Invariant_Polygons_Topic_XI.html");
  try {
    execFileSync(process.execPath, [exporter], {
      cwd: projectRoot,
      env: {
        ...process.env,
        PROOF_ROUTE: "/proof/topic-xi",
        PROOF_HTML_OUTPUT: output,
        PROOF_STANDALONE_TOPIC_MAX: "12",
      },
      stdio: ["ignore", "pipe", "pipe"],
    });

    const html = await readFile(output, "utf8");
    const text = visibleText(html);
    assert.match(html, /data-proof-route="topic-xi"/);
    assert.match(html, /<script data-standalone-proof-chapter-script>/);
    assert.doesNotMatch(html, /<link\b(?=[^>]*\brel="(?:stylesheet|modulepreload|preload)")/i);
    assert.doesNotMatch(html, /\b(?:href|src)="\/(?!\/)/i);
    assert.match(text, /Topic XI · Manuscript pages 91–93/);
    assert.match(text, /First published 22 August 2026/);
    assert.match(text, /Last revised 22 August 2026/);
    assert.match(text, /Directed-cycle expansion of the characteristic polynomial/i);
    assert.match(text, /Stochastic realization of the compact candidate (?:arc|curve)/i);
    assert.match(html, /data-topic-xi-equation-plate="attainment"/);
    assert.match(
      html,
      /class="[^"]*proof-topic-control-previous[^"]*"[^>]*href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-x\//,
    );
    assert.doesNotMatch(html, /data-proof-topic-number="12"(?:(?!<\/li>)[\s\S])*Forthcoming/);
    assert.match(
      html,
      /class="[^"]*proof-topic-control-next[^"]*"[^>]*href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-xii\//,
    );
    assert.doesNotMatch(
      text,
      /cycle cover term|global cross cycle|cross edge|tail-row adjacency|constant parameter list|Rᴺ|Θᴺ/i,
    );
    assert.doesNotMatch(html, /<\/(?:var|sub|sup)>[A-Za-z]/);

    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(new Set(ids).size, ids.length, "standalone IDs are unique");
    const idSet = new Set(ids);
    for (const fragment of [...html.matchAll(/href="#([^"]+)"/g)].map((match) => match[1])) {
      assert.ok(idSet.has(fragment), `local fragment #${fragment} resolves`);
    }
  } finally {
    await rm(temporaryDirectory, { force: true, recursive: true });
  }
});
