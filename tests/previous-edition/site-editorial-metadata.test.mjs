import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function source(relativePath) {
  return readFile(new URL(`../${relativePath}`, import.meta.url), "utf8");
}

test("archival links distinguish the Zenodo record from the website edition", async () => {
  const [home, journeyPage, websiteEdition] = await Promise.all([
    source("app/data/home.ts"),
    source("app/journey/page.tsx"),
    readFile(
      new URL(
        "../public/paper/critical-invariant-polygons.pdf",
        import.meta.url,
      ),
    ),
  ]);
  const websiteEditionChecksum = createHash("sha256")
    .update(websiteEdition)
    .digest("hex");

  assert.match(home, /archival 24 July 2026 version on Zenodo/);
  assert.match(home, /Archival Zenodo record \(24 July 2026\)/);
  assert.match(
    home,
    new RegExp(websiteEditionChecksum),
  );
  assert.match(journeyPage, /archival 24 July 2026 version on Zenodo/);
  assert.doesNotMatch(home, /current archival version/);
  assert.doesNotMatch(journeyPage, /current paper on Zenodo/);
});

test("rights notices preserve the archival v1 CC BY 4.0 license", async () => {
  const [rights, publicRights, readme] = await Promise.all([
    source("RIGHTS.md"),
    source("public/RIGHTS.txt"),
    source("README.md"),
  ]);

  for (const notice of [rights, publicRights]) {
    assert.match(notice, /10\.5281\/zenodo\.21529144/);
    assert.match(notice, /CC BY 4\.0/);
    assert.match(notice, /continues to\s+govern the archived edition/);
  }
  assert.match(readme, /archived 24 July 2026 manuscript v1 is licensed CC BY 4\.0/);
  assert.doesNotMatch(readme, /^No open license has been selected\./m);
});

test("history states the finite root-of-unity set and literal Farey arithmetic", async () => {
  const [historyPage, historyData] = await Promise.all([
    source("app/history/page.tsx"),
    source("app/data/history.ts"),
  ]);

  assert.match(historyPage, /1 ≤ q ≤ n, 0 ≤ p &lt; q/);
  assert.match(historyPage, /p and q are coprime/);
  assert.match(historyPage, /Farey definitions/);
  assert.match(historyData, /Farey sequence of order n/);
  assert.match(historyData, /denominator, 8, is greater than 5/);
  assert.match(
    historyData,
    /classify Type 0\/I realizations and the sparsest Type II\/III cases/,
  );
  assert.doesNotMatch(historyData, /ordered address book|current budget/);
});

test("reader-facing terminology is conventional while the manuscript title is preserved", async () => {
  const [
    home,
    historyData,
    journeyData,
    atlas,
    proofPage,
    proofData,
    prerequisitesPage,
    prerequisitesData,
    prerequisitePlate,
  ] = await Promise.all([
    source("app/data/home.ts"),
    source("app/data/history.ts"),
    source("app/data/journey.ts"),
    source("app/components/ThetaAtlasPlate.tsx"),
    source("app/proof/page.tsx"),
    source("app/data/proof.ts"),
    source("app/prerequisites/page.tsx"),
    source("app/data/prerequisites.ts"),
    source("app/components/PrerequisitePlate.tsx"),
  ]);

  assert.match(
    home,
    /Critical Invariant Polygons and the Farey–Ito Boundary of Stochastic Spectra/,
  );
  assert.match(home, /Karpelevič Theorem in Ito’s Formulation/);
  assert.match(historyData, /boundary of the Karpelevič region in Ito’s formulation/);
  assert.match(journeyData, /boundary of the Karpelevič region in Ito’s formulation/);
  assert.doesNotMatch(home, /Karpelevič–Ito Theorem/);
  assert.doesNotMatch(journeyData, /Farey–Ito boundary/);

  assert.match(atlas, /exact triangle and real interval/);
  assert.doesNotMatch(atlas, /exact polygon and tail|real tail/);

  assert.match(proofPage, />\s*Formal\s*<\/button>/);
  assert.doesNotMatch(proofPage, />\s*Compact\s*<\/button>/);
  assert.match(proofPage, /onlineTopicNumbers/);
  assert.match(proofPage, /forthcomingTopicNumbers/);
  assert.match(proofPage, /proofReaderTopicLinks/);
  assert.match(
    proofData,
    /The complete order-seven example and an interactive boundary plot/,
  );

  assert.match(prerequisitesData, /The background used in Topic I/);
  assert.match(prerequisitesPage, /Three prerequisite sections/);
  assert.match(prerequisitesPage, /Where Topic I uses this section/);
  assert.match(prerequisitePlate, /Illustrated definition/);
  assert.doesNotMatch(
    `${prerequisitesData}\n${prerequisitesPage}\n${prerequisitePlate}`,
    /small library|three shelves|reference shelf|Illustrated dictionary/,
  );
});
