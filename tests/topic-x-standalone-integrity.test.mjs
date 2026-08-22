import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const exporter = path.join(projectRoot, "scripts/export-proof-standalone.mjs");

test("the Topic X standalone is self-contained and links to published Topic XI", async () => {
  const temporaryDirectory = await mkdtemp(path.join(os.tmpdir(), "karpelevic-topic-x-"));
  const output = path.join(temporaryDirectory, "Critical_Invariant_Polygons_Topic_X.html");
  try {
    execFileSync(process.execPath, [exporter], {
      cwd: projectRoot,
      env: {
        ...process.env,
        PROOF_ROUTE: "/proof/topic-x",
        PROOF_HTML_OUTPUT: output,
        PROOF_STANDALONE_TOPIC_MAX: "11",
      },
      stdio: ["ignore", "pipe", "pipe"],
    });
    const html = await readFile(output, "utf8");
    const visibleText = html
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<annotation\b[\s\S]*?<\/annotation>/gi, " ")
      .replace(/<[^>]*>/g, " ")
      .replaceAll("&lt;", "<")
      .replaceAll("&gt;", ">")
      .replaceAll("&amp;", "&")
      .replace(/\s+/g, " ");

    assert.match(html, /data-proof-route="topic-x"/);
    assert.match(html, /<script data-standalone-proof-chapter-script>/);
    assert.doesNotMatch(html, /<link\b(?=[^>]*\brel="(?:stylesheet|modulepreload|preload)")/i);
    assert.doesNotMatch(html, /\b(?:href|src)="\/(?!\/)/i);
    assert.match(visibleText, /Topic X · Manuscript pages 86–91/);
    assert.match(visibleText, /First published 21 August 2026/);
    assert.match(visibleText, /Last revised 22 August 2026/);
    assert.match(
      html,
      /class="[^"]*proof-topic-control-previous[^"]*"[^>]*href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-ix\//,
    );
    assert.doesNotMatch(html, /data-proof-topic-number="10"(?:(?!<\/li>)[\s\S])*Forthcoming/);
    assert.doesNotMatch(html, /data-proof-topic-number="11"(?:(?!<\/li>)[\s\S])*Forthcoming/);
    assert.match(
      html,
      /class="[^"]*proof-topic-control-next[^"]*"[^>]*href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-xi\//,
    );
    assert.doesNotMatch(html, /href="Critical_Invariant_Polygons_Topic_[IVX]+\.html/i);
    assert.match(visibleText, /Reflection reverses the selected Farey interval/);
    assert.match(visibleText, /Equality in Jensen’s inequality forces equal factor arguments/);
    assert.match(visibleText, /ρ≤ρ\*/);
    assert.doesNotMatch(
      visibleText,
      /log-sine potential|convex equalization|strict Jensen|non-inherited radial maximum|continuous arguments on a zero-free path/i,
    );

    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(new Set(ids).size, ids.length, "standalone IDs are unique");
    const idSet = new Set(ids);
    const localFragments = [...html.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);
    for (const fragment of localFragments) {
      assert.ok(idSet.has(fragment), `local fragment #${fragment} resolves`);
    }
  } finally {
    await rm(temporaryDirectory, { force: true, recursive: true });
  }
});
