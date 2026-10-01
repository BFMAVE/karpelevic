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

test("individual Topics VIII and IX use live published links without sibling-file dependencies", async () => {
  const temporaryDirectory = await mkdtemp(
    path.join(os.tmpdir(), "karpelevic-topic-viii-individual-"),
  );
  const topicVIIIOutput = path.join(temporaryDirectory, "topic-viii.html");
  const topicIXOutput = path.join(temporaryDirectory, "topic-ix.html");

  try {
    exportChapter("/proof/topic-viii", topicVIIIOutput);
    exportChapter("/proof/topic-ix", topicIXOutput);
    const html = await readFile(topicVIIIOutput, "utf8");
    const topicIX = await readFile(topicIXOutput, "utf8");

    assert.match(html, /data-proof-route="topic-viii"/);
    assert.match(
      html,
      /Consecutive Farey fractions and the finite product equation for N≥4/,
    );
    assert.match(
      html,
      /class="[^"]*proof-topic-control-next[^"]*"[^>]*href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-ix\//,
    );
    assert.doesNotMatch(
      html,
      /data-proof-topic-number="9"(?:(?!<\/li>)[\s\S])*Forthcoming/,
    );
    const visibleText = html
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<annotation\b[\s\S]*?<\/annotation>/gi, " ")
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ");
    assert.doesNotMatch(
      visibleText,
      /non-inherited radial max|polygonally critical|stochastic interface|νpoly/i,
    );
    assert.doesNotMatch(
      html,
      /href="Critical_Invariant_Polygons_Topic_IX\.html/,
    );
    assert.match(
      html,
      /href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-ix\//,
    );

    assert.match(topicIX, /data-proof-route="topic-ix"/);
    assert.match(
      topicIX,
      /Candidate curves from the Ito equation on Farey intervals/,
    );
    assert.match(
      topicIX,
      /class="[^"]*proof-topic-control-previous[^"]*"[^>]*href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-viii\//,
    );
    assert.doesNotMatch(
      topicIX,
      /data-proof-topic-number="10"(?:(?!<\/li>)[\s\S])*Forthcoming/,
    );
    assert.doesNotMatch(
      topicIX,
      /href="Critical_Invariant_Polygons_Topic_VIII\.html/,
    );
    assert.match(
      topicIX,
      /class="[^"]*proof-topic-control-next[^"]*"[^>]*href="https:\/\/bfmave\.github\.io\/karpelevic\/proof\/topic-x\//,
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
  const individualTopicIXPath = path.join(temporaryDirectory, "individual-topic-ix.html");
  const memberDirectory = path.join(temporaryDirectory, "bundle-members");
  const topicVIIIPath = path.join(memberDirectory, topicVIIIName);
  const topicIXPath = path.join(memberDirectory, topicIXName);
  const bundleEnvironment = {
    PROOF_STANDALONE_BUNDLE_LINKS: "1",
    PROOF_STANDALONE_BUNDLE_TOPICS: "8,9",
    PROOF_STANDALONE_TOPIC_MAX: "9",
  };

  try {
    exportChapter("/proof/topic-ix", individualTopicIXPath);
    const individualTopicIX = await readFile(individualTopicIXPath, "utf8");

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

    assert.equal(
      await readFile(individualTopicIXPath, "utf8"),
      individualTopicIX,
      "creating cross-linked bundle members must not overwrite individual Topic IX",
    );

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
        await access(path.join(memberDirectory, target));
      }
    }
  } finally {
    await rm(temporaryDirectory, { force: true, recursive: true });
  }
});
