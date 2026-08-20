import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { access, mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const exporter = path.join(projectRoot, "scripts/export-proof-standalone.mjs");

function exportChapter(route, output, extraEnv = {}) {
  return execFileSync(process.execPath, [exporter], {
    cwd: projectRoot,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    env: {
      ...process.env,
      PROOF_ROUTE: route,
      PROOF_HTML_OUTPUT: output,
      ...extraEnv,
    },
  });
}

test("an individual Topic VIII HTML cannot expose an unavailable Topic IX", async () => {
  const temporaryDirectory = await mkdtemp(
    path.join(os.tmpdir(), "karpelevic-topic-viii-individual-"),
  );
  const output = path.join(temporaryDirectory, "topic-viii.html");

  try {
    exportChapter("/proof/topic-viii", output);
    const html = await readFile(output, "utf8");

    assert.match(html, /data-proof-route="topic-viii"/);
    assert.match(html, /data-proof-topic-number="9"[\s\S]{0,500}Forthcoming/);
    assert.doesNotMatch(
      html,
      /href="Critical_Invariant_Polygons_Topic_IX\.html/,
    );
    assert.doesNotMatch(
      html,
      /href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-ix\//,
    );
  } finally {
    await rm(temporaryDirectory, { force: true, recursive: true });
  }
});

test("the Topic VIII–IX bundle requires and contains both canonical members", async () => {
  const temporaryDirectory = await mkdtemp(
    path.join(os.tmpdir(), "karpelevic-topic-viii-ix-bundle-"),
  );
  const topicVIIIName = "Critical_Invariant_Polygons_Topic_VIII.html";
  const topicIXName = "Critical_Invariant_Polygons_Topic_IX.html";
  const topicVIIIPath = path.join(temporaryDirectory, topicVIIIName);
  const topicIXPath = path.join(temporaryDirectory, topicIXName);
  const bundleEnvironment = {
    PROOF_STANDALONE_BUNDLE_LINKS: "1",
    PROOF_STANDALONE_BUNDLE_TOPICS: "8,9",
    PROOF_STANDALONE_TOPIC_MAX: "8",
  };

  try {
    assert.throws(
      () =>
        exportChapter("/proof/topic-viii", topicVIIIPath, {
          PROOF_STANDALONE_BUNDLE_LINKS: "1",
          PROOF_STANDALONE_BUNDLE_TOPICS: "8",
        }),
      /must declare both topics 8 and 9/,
    );

    exportChapter(
      "/proof/topic-viii",
      topicVIIIPath,
      bundleEnvironment,
    );
    exportChapter("/proof/topic-ix", topicIXPath, bundleEnvironment);

    const members = new Map([
      [topicVIIIName, await readFile(topicVIIIPath, "utf8")],
      [topicIXName, await readFile(topicIXPath, "utf8")],
    ]);
    assert.match(members.get(topicVIIIName), new RegExp(`href="${topicIXName}`));
    assert.match(members.get(topicIXName), new RegExp(`href="${topicVIIIName}`));

    for (const [filename, html] of members) {
      const relativeHtmlTargets = [
        ...html.matchAll(/href="([^":/#?]+\.html)(?:#[^"]*)?"/gi),
      ].map((match) => match[1]);
      assert.ok(relativeHtmlTargets.length > 0, `${filename} links to its companion`);
      for (const target of relativeHtmlTargets) {
        assert.ok(members.has(target), `${filename} declares archive member ${target}`);
        await access(path.join(temporaryDirectory, target));
      }
    }
  } finally {
    await rm(temporaryDirectory, { force: true, recursive: true });
  }
});
