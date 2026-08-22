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

test("the Topic XII download is one continuous self-contained chapter", async () => {
  const temporaryDirectory = await mkdtemp(path.join(os.tmpdir(), "karpelevic-topic-xii-test-"));
  const output = path.join(temporaryDirectory, "Critical_Invariant_Polygons_Topic_XII.html");

  const exportChapter = () =>
    execFileSync(process.execPath, [exporter], {
      cwd: projectRoot,
      env: {
        ...process.env,
        PROOF_ROUTE: "/proof/topic-xii",
        PROOF_HTML_OUTPUT: output,
        PROOF_STANDALONE_TOPIC_MAX: "12",
      },
      stdio: ["ignore", "pipe", "pipe"],
    });

  try {
    exportChapter();

    const html = await readFile(output, "utf8");
    const text = visibleText(html);
    assert.match(html, /data-proof-route="topic-xii"/);
    assert.match(html, /<script data-standalone-proof-chapter-script>/);
    assert.doesNotMatch(
      html,
      /<link\b(?=[^>]*\brel="(?:stylesheet|modulepreload|preload)")/i,
    );
    assert.doesNotMatch(html, /<script\b[^>]*\bsrc=/i);
    assert.doesNotMatch(html, /\b(?:href|src)="\/(?!\/)/i);
    assert.match(text, /Topic XII · Manuscript pages 94–101/);
    assert.match(text, /First published 22 August 2026/);
    assert.match(text, /Last revised 22 August 2026/);
    assert.match(text, /3 lemmas 1 theorem 4 exhaustive cases/);

    const classLists = [...html.matchAll(/class="([^"]*)"/g)].map((match) =>
      match[1].split(/\s+/),
    );
    assert.equal(
      classLists.filter((tokens) => tokens.includes("topic-i-textbook-item")).length,
      4,
      "all four formal results are present",
    );
    assert.equal(
      classLists.filter((tokens) => tokens.includes("topic-i-proof-disclosure")).length,
      4,
      "all four formal proofs are present",
    );

    for (const number of [1, 2, 3]) {
      assert.equal(
        [...html.matchAll(new RegExp(`Plate XII\\.${number}\\.`, "g"))].length,
        1,
        `Plate XII.${number} appears exactly once`,
      );
    }
    assert.match(html, /data-farey-row="n-1"/);
    assert.match(html, /data-residual-axis="t"/);
    assert.match(text, /βM=0|β M =0|βM =0/i);
    assert.match(text, /corresponding factor[^.]*equals 1/i);

    assert.match(html, /href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-ix\//);
    assert.match(
      html,
      /href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-x\/#karp:thm:hetero-sharp"/,
    );
    assert.doesNotMatch(
      html,
      /href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-xii\/[ab]\//,
    );
    assert.doesNotMatch(html, /<nav\b[^>]*class="[^"]*proof-chapter-parts/i);
    assert.doesNotMatch(text, /Part A|Part B|Topic XII-A|Topic XII-B/i);
    assert.doesNotMatch(
      html,
      /data-proof-topic-number="12"(?:(?!<\/li>)[\s\S])*Forthcoming/i,
    );
    assert.match(
      html,
      /data-proof-topic-number="13"[^>]*aria-disabled="true"[\s\S]*?Forthcoming/i,
    );
    assert.doesNotMatch(
      text,
      /Farey cell|subcell|reciprocal chord|multiplicity padding|candidate outer radius|candidate nesting|moves outward|radial excess/i,
    );

    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(new Set(ids).size, ids.length, "Topic XII IDs are unique");
    const idSet = new Set(ids);
    for (const fragment of [...html.matchAll(/href="#([^"]+)"/g)].map((match) => match[1])) {
      assert.ok(idSet.has(fragment), `local fragment #${fragment} resolves`);
    }
    for (const match of html.matchAll(/\b(?:aria-labelledby|aria-describedby)="([^"]+)"/g)) {
      for (const id of match[1].trim().split(/\s+/)) {
        assert.ok(idSet.has(id), `ARIA reference ${id} resolves`);
      }
    }
  } finally {
    await rm(temporaryDirectory, { force: true, recursive: true });
  }
});
