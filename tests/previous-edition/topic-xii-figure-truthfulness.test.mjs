import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const figureSourceUrl = new URL(
  "../app/components/proof/figures/NestingFigures.tsx",
  import.meta.url,
);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("topic-xii-figure-test", `${process.pid}-${Date.now()}`);
const workerPromise = import(workerUrl.href).then(({ default: worker }) => worker);

async function render(pathname) {
  const worker = await workerPromise;
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("Topic XII plates encode the exact interval, factor, and residual claims", async () => {
  const source = await readFile(figureSourceUrl, "utf8");
  const mediant = source.slice(
    source.indexOf("function MediantFigure"),
    source.indexOf("function PaddingFigure"),
  );
  const padding = source.slice(
    source.indexOf("function PaddingFigure"),
    source.indexOf("function DefectFigure"),
  );
  const residual = source.slice(
    source.indexOf("function DefectFigure"),
    source.indexOf("const copy"),
  );

  assert.match(mediant, /data-farey-row="n-1"/);
  assert.equal([...mediant.matchAll(/data-farey-row="n"/g)].length, 2);
  assert.match(mediant, /\(a\+c\)\/\(b\+d\)/);
  assert.match(mediant, /insert denominator b\+d=n/);
  assert.doesNotMatch(mediant, /<path\b/);
  assert.doesNotMatch(mediant, /cell|subcell/i);
  assert.match(source, /Positions are schematic and not to scale/);

  assert.match(padding, /<tspan>β<\/tspan><tspan baselineShift="sub"[^>]*>M<\/tspan><tspan>=0<\/tspan>/);
  assert.match(padding, /baselineShift="super"/);
  assert.match(padding, /baselineShift="sub"/);
  assert.match(padding, /<tspan>\)=1<\/tspan>/);
  assert.doesNotMatch(padding, /μ[⁻⁰¹²³⁴⁵⁶⁷⁸⁹ᑫ]/);
  assert.doesNotMatch(padding, /new factor/i);
  assert.match(source, /Exact algebraic identity; schematic tuple layout/);
  assert.match(source, /with 0<β<1/);
  assert.match(source, /appended zero is therefore distinct/);

  assert.match(residual, /data-residual-axis="t"/);
  assert.match(residual, /data-residual-axis="value"/);
  assert.match(residual, /data-residual-curve="strict-case"/);
  assert.match(residual, /Fₙ,θ\(t\)/);
  assert.match(residual, /Fₙ,θ\(ρ₋\)&lt;0/);
  assert.match(residual, /ρ₋=Kₙ₋₁\(θ\)/);
  assert.match(residual, /ρ₊=Kₙ\(θ\)/);
  assert.match(residual, /unique zero/);
  assert.match(source, /curve shape and scale are not/);

  const topicXII = await render("/proof/topic-xii").then((response) => response.text());
  const markupOnly = (html) => html.replace(/<script\b[\s\S]*?<\/script>/gi, " ");
  const rendered = markupOnly(topicXII);
  for (const number of [1, 2, 3]) {
    assert.equal(
      [...rendered.matchAll(new RegExp(`Plate XII\\.${number}\\.`, "g"))].length,
      1,
      `rendered Plate XII.${number} appears exactly once`,
    );
  }
  assert.equal([...rendered.matchAll(/data-farey-row="n-1"/g)].length, 1);
  assert.equal([...rendered.matchAll(/data-residual-axis="t"/g)].length, 1);
  assert.match(
    rendered,
    /<span>Append the zero parameter<\/span>[\s\S]*?<title id="nest-padding-title">Append the zero parameter<\/title>/,
  );
  assert.doesNotMatch(
    rendered,
    /<(?:h6|span|title)\b[^>]*>[^<]*βM=0[^<]*<\/(?:h6|span|title)>/,
  );
  assert.match(
    rendered,
    /<figcaption>Plate XII\.3\. Schematic for the strict interior cases:/,
  );
  assert.doesNotMatch(
    rendered,
    /Plate XII\.3\.[^<]*In the unchanged case, the old radius is already the zero\./,
  );
  assert.doesNotMatch(
    rendered,
    /<h6>[^<]*&amp;(?:lt|gt);[^<]*<\/h6>/,
    "guided-proof headings must not expose double-escaped inequality entities",
  );
  assert.doesNotMatch(
    rendered,
    /style="[^"]*text-decoration\s*:\s*overline[^"]*"/i,
    "complex conjugation must not depend on a visual-only CSS overline",
  );

  const ids = new Set([...rendered.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
  for (const match of rendered.matchAll(/\baria-labelledby="([^"]+)"/g)) {
    for (const id of match[1].trim().split(/\s+/)) {
      assert.ok(ids.has(id), `Topic XII ARIA label ${id} resolves`);
    }
  }
});
