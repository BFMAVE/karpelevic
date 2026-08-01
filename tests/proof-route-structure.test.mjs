import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("proof-route-test", `${process.pid}-${Date.now()}`);
const workerPromise = import(workerUrl.href).then(({ default: worker }) => worker);

async function render(pathname) {
  const worker = await workerPromise;
  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
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
}

const chapters = [
  ["/proof/topic-ii", 10, 9],
  ["/proof/topic-iii", 10, 9],
  ["/proof/topic-iv", 10, 10],
  ["/proof/topic-v", 9, 7],
  ["/proof/topic-vi/a", 3, 3],
  ["/proof/topic-vi/b", 6, 4],
  ["/proof/topic-vii", 8, 8],
  ["/proof/topic-viii", 7, 6],
  ["/proof/topic-ix", 6, 3],
  ["/proof/topic-x", 3, 3],
  ["/proof/topic-xi", 5, 5],
  ["/proof/topic-xii/a", 2, 2],
  ["/proof/topic-xii/b", 2, 2],
  ["/proof/topic-xiii", 3, 3],
];

const proofRoutes = ["/proof", ...chapters.map(([pathname]) => pathname), "/proof/topic-xiv"];

for (const [pathname, expectedResults, expectedProofs] of chapters) {
  test(`${pathname} preserves its complete formal structure`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    const classLists = [...html.matchAll(/class="([^"]*)"/g)].map((match) =>
      match[1].split(/\s+/),
    );
    const resultCount = classLists.filter((tokens) =>
      tokens.includes("topic-i-textbook-item"),
    ).length;
    const proofCount = classLists.filter((tokens) =>
      tokens.includes("topic-i-proof-disclosure"),
    ).length;

    assert.equal(resultCount, expectedResults, "formal result-card count");
    assert.equal(proofCount, expectedProofs, "complete manuscript-proof count");
    assert.match(html, /<time dateTime="[^"]+"/);
    assert.doesNotMatch(html, /Previously claimed/);
    assert.doesNotMatch(html, /Unhandled Script Error|Internal Server Error/i);
  });
}

test("Topic XIV provides the complete example and executable boundary lab", async () => {
  const response = await render("/proof/topic-xiv");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /complete order-seven/i);
  assert.match(html, /worked direction[^<]*x=3\/8/i);
  assert.match(html, /Download the [^<]*boundary generator/i);
  assert.match(html, /Interactive boundary laboratory/i);
  assert.match(html, /<time dateTime="[^"]+"/);
  assert.doesNotMatch(html, /Unhandled Script Error|Internal Server Error/i);
});

test("every internal proof-reader fragment resolves on its target page", async () => {
  const rendered = new Map();
  for (const pathname of proofRoutes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, `render ${pathname}`);
    rendered.set(pathname, await response.text());
  }

  const normalizePath = (pathname) =>
    pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const idsByRoute = new Map(
    [...rendered].map(([pathname, html]) => [
      normalizePath(pathname),
      new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1])),
    ]),
  );

  for (const [pathname, html] of rendered) {
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(new Set(ids).size, ids.length, `${pathname} has duplicate ids`);

    for (const match of html.matchAll(/href="([^"]+)"/g)) {
      const href = match[1].replaceAll("&amp;", "&");
      if (!href.includes("#")) continue;
      const target = new URL(href, `http://localhost${pathname}`);
      const targetPath = normalizePath(target.pathname);
      if (!targetPath.startsWith("/proof")) continue;
      const targetIds = idsByRoute.get(targetPath);
      assert.ok(targetIds, `${pathname} links to an unknown proof route ${targetPath}`);
      const fragment = decodeURIComponent(target.hash.slice(1));
      assert.ok(
        targetIds.has(fragment),
        `${pathname} links to missing ${targetPath}#${fragment}`,
      );
    }
  }
});
