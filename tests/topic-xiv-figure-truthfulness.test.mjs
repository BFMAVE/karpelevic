import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("topic-xiv-figure-test", process.pid + "-" + Date.now());
const workerPromise = import(workerUrl.href).then(({ default: worker }) => worker);

async function renderTopicXIV() {
  const worker = await workerPromise;
  const response = await worker.fetch(
    new Request("http://localhost/proof/topic-xiv", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
  assert.equal(response.status, 200);
  return response.text();
}

function attribute(tag, name) {
  const match = tag.match(new RegExp("\\b" + name + '="([^"]+)"'));
  assert.ok(match, name + " is present");
  return match[1];
}

test("Topic XIV's restored order-seven figure is accessible and geometrically truthful", async () => {
  const html = await renderTopicXIV();
  const figureStart = html.indexOf('id="karp:fig:n7-region"');
  const figureEnd = html.indexOf("</figure>", figureStart);
  assert.ok(figureStart >= 0 && figureEnd > figureStart);
  const figure = html.slice(figureStart, figureEnd);

  assert.equal(
    [...html.matchAll(/\sid="karp:fig:n7-region"/g)].length,
    1,
    "the manuscript placeholder was removed before the real figure was inserted",
  );
  assert.match(figure, /<title id="order-seven-boundary-title">/);
  assert.match(figure, /<desc id="order-seven-boundary-description">/);
  assert.match(
    figure,
    /aria-labelledby="order-seven-boundary-title"[^>]*aria-describedby="order-seven-boundary-description"|aria-describedby="order-seven-boundary-description"[^>]*aria-labelledby="order-seven-boundary-title"/,
  );

  const pathTag = figure.match(/<path\b[^>]*data-order-seven-boundary-path[^>]*>/)?.[0];
  assert.ok(pathTag);
  const pathData = attribute(pathTag, "d");
  assert.ok(pathData.length > 1_000, "the boundary path is nonempty and well sampled");
  assert.doesNotMatch(pathData, /NaN|Infinity/);

  const rayTag = figure.match(/<line\b[^>]*data-worked-ray[^>]*>/)?.[0];
  const pointTag = figure.match(/<circle\b[^>]*data-worked-boundary-point[^>]*>/)?.[0];
  assert.ok(rayTag && pointTag);
  assert.equal(attribute(rayTag, "data-angle-fraction"), "3/8");
  const x1 = Number(attribute(rayTag, "x1"));
  const y1 = Number(attribute(rayTag, "y1"));
  const x2 = Number(attribute(rayTag, "x2"));
  const y2 = Number(attribute(rayTag, "y2"));
  assert.equal(x1, 380);
  assert.equal(y1, 380);
  assert.ok(x2 < x1 && y2 < y1, "argument 3π/4 points to the upper-left");
  assert.ok(Math.abs(Math.abs(x2 - x1) - Math.abs(y2 - y1)) < 1e-9);
  assert.ok(Math.abs(Number(attribute(pointTag, "cx")) - x2) < 1e-9);
  assert.ok(Math.abs(Number(attribute(pointTag, "cy")) - y2) < 1e-9);

  const rootTags = [...figure.matchAll(/<circle\b[^>]*data-farey-root[^>]*>/g)].map(
    (match) => match[0],
  );
  assert.equal(rootTags.length, 18);
  const roots = rootTags.map((tag) => ({
    x: Number(attribute(tag, "cx")),
    y: Number(attribute(tag, "cy")),
  }));
  for (const root of roots) {
    assert.ok(Number.isFinite(root.x) && Number.isFinite(root.y));
    assert.ok(
      roots.some(
        (candidate) =>
          Math.abs(candidate.x - root.x) < 1e-9 &&
          Math.abs(candidate.y - (760 - root.y)) < 1e-9,
      ),
      "each marked endpoint has its conjugate marker",
    );
  }

  const caption = figure.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ");
  assert.match(caption, /pale dashed circle is \|λ\|=1/i);
  assert.match(caption, /marked endpoint is the complex point λ=/i);
  assert.match(caption, /ρ is the unique solution/i);
  assert.match(caption, /floating-point approximations/i);
});
