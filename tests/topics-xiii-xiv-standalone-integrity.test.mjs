import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const exporter = path.join(projectRoot, "scripts/export-proof-standalone.mjs");
const packager = path.join(projectRoot, "scripts/package-topics-xiii-xiv-review.mjs");
const topicXIIIName = "Critical_Invariant_Polygons_Topic_XIII.html";
const topicXIVName = "Critical_Invariant_Polygons_Topic_XIV.html";
const bundleEnvironment = {
  PROOF_STANDALONE_BUNDLE_LINKS: "1",
  PROOF_STANDALONE_BUNDLE_TOPICS: "13,14",
  PROOF_STANDALONE_TOPIC_MAX: "14",
};

function exportChapter(route, output) {
  execFileSync(process.execPath, [exporter], {
    cwd: projectRoot,
    env: {
      ...process.env,
      ...bundleEnvironment,
      PROOF_ROUTE: route,
      PROOF_HTML_OUTPUT: output,
    },
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function visibleText(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<annotation\b[\s\S]*?<\/annotation>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function assertPortable(html) {
  assert.equal((html.match(/<script\b/gi) ?? []).length, 1, "one inline script");
  assert.doesNotMatch(html, /<script\b[^>]*\bsrc=/i);
  assert.doesNotMatch(
    html,
    /<link\b(?=[^>]*\brel="(?:stylesheet|modulepreload|preload)")/i,
  );
  assert.doesNotMatch(html, /\b(?:href|src)="\/(?!\/)/i);

  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length, "standalone IDs are unique");
  const idSet = new Set(ids);
  for (const fragment of [...html.matchAll(/href="#([^"]+)"/g)].map((match) => match[1])) {
    assert.ok(idSet.has(fragment), "local fragment #" + fragment + " resolves");
  }
  for (const match of html.matchAll(/\b(?:aria-labelledby|aria-describedby)="([^"]+)"/g)) {
    for (const id of match[1].trim().split(/\s+/)) {
      assert.ok(idSet.has(id), "ARIA reference " + id + " resolves");
    }
  }
}

test("Topics XIII and XIV export as a published, cross-linked standalone pair", async () => {
  const temporaryDirectory = await mkdtemp(
    path.join(os.tmpdir(), "karpelevic-topics-xiii-xiv-"),
  );
  const topicXIIIPath = path.join(temporaryDirectory, topicXIIIName);
  const topicXIVPath = path.join(temporaryDirectory, topicXIVName);

  try {
    assert.throws(
      () =>
        execFileSync(process.execPath, [exporter], {
          cwd: projectRoot,
          env: {
            ...process.env,
            PROOF_ROUTE: "/proof/topic-xiii",
            PROOF_HTML_OUTPUT: topicXIIIPath,
            PROOF_STANDALONE_BUNDLE_LINKS: "1",
            PROOF_STANDALONE_BUNDLE_TOPICS: "13",
            PROOF_STANDALONE_TOPIC_MAX: "14",
          },
          stdio: ["ignore", "pipe", "pipe"],
        }),
      /must declare both topics 13 and 14/,
    );

    exportChapter("/proof/topic-xiii", topicXIIIPath);
    exportChapter("/proof/topic-xiv", topicXIVPath);
    const [topicXIII, topicXIV, boundaryGenerator, boundaryTests] =
      await Promise.all([
        readFile(topicXIIIPath, "utf8"),
        readFile(topicXIVPath, "utf8"),
        readFile(path.join(projectRoot, "public/code/karpelevic-boundary.js")),
        readFile(path.join(projectRoot, "public/code/karpelevic-boundary.test.mjs")),
      ]);

    assertPortable(topicXIII);
    assertPortable(topicXIV);
    assert.doesNotMatch(
      topicXIII + "\n" + topicXIV,
      /data-proof-topic-number="(?:13|14)"(?:(?!<\/li>)[\s\S])*?Forthcoming/i,
    );

    const publishedRoutes = [
      "/proof/",
      "/proof/topic-ii/",
      "/proof/topic-iii/",
      "/proof/topic-iv/",
      "/proof/topic-v/",
      "/proof/topic-vi/",
      "/proof/topic-vii/",
      "/proof/topic-viii/",
      "/proof/topic-ix/",
      "/proof/topic-x/",
      "/proof/topic-xi/",
      "/proof/topic-xii/",
    ];
    for (const html of [topicXIII, topicXIV]) {
      for (const [index, route] of publishedRoutes.entries()) {
        const topicNumber = index + 1;
        assert.match(
          html,
          new RegExp(
            '<a\\b(?=[^>]*data-proof-topic-number="' +
              topicNumber +
              '")(?=[^>]*href="https:\\/\\/bfmave\\.github\\.io\\/karpelevic' +
              route.replaceAll("/", "\\/") +
              '")[^>]*>',
          ),
        );
      }
    }

    const topicXIIIText = visibleText(topicXIII);
    assert.match(topicXIII, /data-proof-route="topic-xiii"/);
    assert.match(topicXIIIText, /Topic XIII · Manuscript pages 102–106/);
    assert.match(topicXIIIText, /First published 22 August 2026/);
    assert.match(topicXIIIText, /Compact star-shaped sets with continuous radial function/);
    assert.match(topicXIIIText, /Karpelevič theorem in Ito’s formulation/);
    assert.match(
      topicXIII,
      new RegExp(
        'class="[^"]*proof-topic-control-next[^"]*"[^>]*href="' +
          topicXIVName,
      ),
    );
    assert.equal(
      [...topicXIII.matchAll(/class="([^"]+)"/g)]
        .map((match) => match[1].split(/\s+/))
        .filter((tokens) => tokens.includes("topic-i-textbook-item")).length,
      3,
    );

    const topicXIVText = visibleText(topicXIV);
    assert.match(topicXIV, /data-proof-route="topic-xiv"/);
    assert.match(topicXIVText, /Topic XIV · Manuscript pages 107–108/);
    assert.match(topicXIVText, /First published 22 August 2026/);
    assert.match(topicXIVText, /Nine Farey intervals cover 0≤x≤1\/2/);
    assert.match(topicXIVText, /The worked direction x=3\/8/);
    assert.match(topicXIVText, /Interactive numerical boundary plot/);
    assert.match(
      topicXIV,
      new RegExp(
        'class="[^"]*proof-topic-control-previous[^"]*"[^>]*href="' +
          topicXIIIName,
      ),
    );
    assert.match(topicXIV, /data-standalone-topic-xiv-script/);
    assert.doesNotMatch(topicXIV, /data-standalone-proof-chapter-script/);
    assert.match(topicXIV, /standaloneBoundaryExplorer = "enhanced"/);
    assert.match(topicXIV, /function parseExplorerOrder/);
    assert.doesNotMatch(topicXIV, /Math\.trunc/);
    assert.match(topicXIV, /data-order-seven-boundary-svg/);
    assert.match(topicXIV, /data-order-seven-boundary-path/);
    assert.doesNotMatch(topicXIV, /data-proof-chapter-controls="true"/);

    const table = topicXIV.match(
      /<table class="topic-xiv-interval-table"[\s\S]*?<\/table>/i,
    )?.[0];
    assert.ok(table);
    assert.equal([...table.matchAll(/<tr>/g)].length, 10);

    const sourceDownload = topicXIV.match(
      /href="data:text\/javascript;charset=utf-8;base64,([^"]+)" data-standalone-boundary-download data-standalone-boundary-source-download[^>]*download="karpelevic-boundary\.js"/i,
    );
    const testDownload = topicXIV.match(
      /href="data:text\/javascript;charset=utf-8;base64,([^"]+)" data-standalone-boundary-test-download[^>]*download="karpelevic-boundary\.test\.mjs"/i,
    );
    assert.ok(sourceDownload, "Topic XIV embeds the source module");
    assert.ok(testDownload, "Topic XIV embeds the regression tests");
    assert.deepEqual(Buffer.from(sourceDownload[1], "base64"), boundaryGenerator);
    assert.deepEqual(Buffer.from(testDownload[1], "base64"), boundaryTests);

    assert.match(topicXIII, new RegExp('href="' + topicXIVName));
    assert.match(topicXIV, new RegExp('href="' + topicXIIIName));
  } finally {
    await rm(temporaryDirectory, { force: true, recursive: true });
  }
});

test("the XIII–XIV review archive contains exactly the two cross-linked HTML files", async () => {
  const temporaryDirectory = await mkdtemp(
    path.join(os.tmpdir(), "karpelevic-topics-xiii-xiv-zip-"),
  );
  const archive = path.join(temporaryDirectory, "topics-xiii-xiv.zip");
  try {
    execFileSync(process.execPath, [packager], {
      cwd: projectRoot,
      env: {
        ...process.env,
        PROOF_REVIEW_BUNDLE_OUTPUT: archive,
      },
      stdio: ["ignore", "pipe", "pipe"],
    });
    const entries = execFileSync("unzip", ["-Z1", archive], {
      encoding: "utf8",
    })
      .trim()
      .split(/\r?\n/);
    assert.deepEqual(entries, [topicXIIIName, topicXIVName]);
    const topicXIII = execFileSync("unzip", ["-p", archive, topicXIIIName], {
      encoding: "utf8",
      maxBuffer: 20 * 1024 * 1024,
    });
    const topicXIV = execFileSync("unzip", ["-p", archive, topicXIVName], {
      encoding: "utf8",
      maxBuffer: 20 * 1024 * 1024,
    });
    assert.match(topicXIII, new RegExp('href="' + topicXIVName));
    assert.match(topicXIV, new RegExp('href="' + topicXIIIName));
  } finally {
    await rm(temporaryDirectory, { force: true, recursive: true });
  }
});
