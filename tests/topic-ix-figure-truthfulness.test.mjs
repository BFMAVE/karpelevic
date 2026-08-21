import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("topic-ix-figure-truthfulness", `${process.pid}-${Date.now()}`);
const workerPromise = import(workerUrl.href).then(({ default: worker }) => worker);

async function render(pathname) {
  const worker = await workerPromise;
  const response = await worker.fetch(
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

  assert.equal(response.status, 200);
  return response.text();
}

const topicIXHtmlPromise = render("/proof/topic-ix");

function figureMarkup(html, kind) {
  const title = `<title id="sf-${kind}-title">`;
  const titleIndex = html.indexOf(title);
  assert.notEqual(titleIndex, -1, `${kind} title exists`);

  const figureStart = html.lastIndexOf("<figure", titleIndex);
  const figureEnd = html.indexOf("</figure>", titleIndex);
  assert.ok(figureStart >= 0 && figureEnd > titleIndex, `${kind} figure is complete`);
  return html.slice(figureStart, figureEnd + "</figure>".length);
}

function svgMarkup(figure, layout) {
  const marker = `data-figure-layout="${layout}"`;
  const markerIndex = figure.indexOf(marker);
  assert.notEqual(markerIndex, -1, `${layout} layout exists`);

  const svgStart = figure.lastIndexOf("<svg", markerIndex);
  const svgEnd = figure.indexOf("</svg>", markerIndex);
  assert.ok(svgStart >= 0 && svgEnd > markerIndex, `${layout} SVG is complete`);
  return figure.slice(svgStart, svgEnd + "</svg>".length);
}

function tagsWithAttribute(markup, tag, name, value) {
  return [...markup.matchAll(new RegExp(`<${tag}[^>]*>`, "g"))]
    .map((match) => match[0])
    .filter((candidate) => candidate.includes(`${name}="${value}"`));
}

function attribute(tag, name) {
  const match = tag.match(new RegExp(`${name}="([^"]+)"`));
  assert.ok(match, `${name} exists on ${tag}`);
  return match[1];
}

function numberAttribute(tag, name) {
  return Number(attribute(tag, name));
}

function assertClose(actual, expected, message, epsilon = 1e-8) {
  assert.ok(Math.abs(actual - expected) <= epsilon, `${message}: ${actual} != ${expected}`);
}

function visibleText(markup) {
  return markup
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&")
    .replace(/\s+/g, " ");
}

function assertAccessibleLayouts(figure, kind) {
  assert.match(figure, new RegExp(`aria-labelledby="sf-${kind}-title sf-${kind}-desc"`));
  assert.match(
    figure,
    new RegExp(`aria-labelledby="sf-${kind}-mobile-title sf-${kind}-mobile-desc"`),
  );
  assert.equal([...figure.matchAll(/data-figure-layout="(?:desktop|mobile)"/g)].length, 2);

  const ids = [...figure.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length, `${kind} uses unique SVG IDs`);

  const mobile = svgMarkup(figure, "mobile");
  assert.match(mobile, /viewBox="0 0 320 390"/);
  const declaredMinimum = Number(attribute(mobile.slice(0, mobile.indexOf(">") + 1), "data-mobile-min-label-size"));
  assert.ok(declaredMinimum >= 14, `${kind} declares at least 14px mobile labels`);

  const textTags = [...mobile.matchAll(/<text[^>]*>/g)].map((match) => match[0]);
  assert.ok(textTags.length > 0, `${kind} mobile layout has visible labels`);
  for (const textTag of textTags) {
    assert.ok(
      numberAttribute(textTag, "font-size") >= declaredMinimum,
      `${kind} mobile text respects its declared minimum`,
    );
  }
}

function markerFill(svg, markerId) {
  const opening = `<marker id="${markerId}"`;
  const start = svg.indexOf(opening);
  assert.notEqual(start, -1, `${markerId} marker exists`);
  const end = svg.indexOf("</marker>", start);
  assert.ok(end > start, `${markerId} marker is complete`);
  const marker = svg.slice(start, end + "</marker>".length);
  const path = marker.match(/<path[^>]*>/)?.[0];
  assert.ok(path, `${markerId} marker has a path`);
  return attribute(path, "fill");
}

test("Plate IX.1 places F5 fractions and x = 3/8 exactly in both layouts", async () => {
  const figure = figureMarkup(await topicIXHtmlPromise, "farey-five");
  const text = visibleText(figure);

  assertAccessibleLayouts(figure, "farey-five");
  assert.match(figure, />Exact rational diagram<\/span>/);
  assert.match(text, /The fractions of F₅ in \[0, 1\/2\]/);
  assert.match(text, /Plate IX\.1\./);
  assert.doesNotMatch(text, /upper Farey sequence|Deterministic mathematical plate/i);

  for (const layout of ["desktop", "mobile"]) {
    const svg = svgMarkup(figure, layout);
    const positions = new Map(
      [...svg.matchAll(/<g[^>]*data-farey-fraction="([^"]+)"[^>]*>/g)].map((match) => [
        match[1],
        numberAttribute(match[0], "data-farey-position"),
      ]),
    );
    assert.equal(positions.size, 6, `${layout} shows all six fractions`);

    const start = positions.get("0");
    const end = positions.get("1/2");
    assert.ok(Number.isFinite(start) && Number.isFinite(end) && start < end);
    for (const [label, value] of [["1/5", 1 / 5], ["1/4", 1 / 4], ["1/3", 1 / 3], ["2/5", 2 / 5]]) {
      assertClose((positions.get(label) - start) / (end - start), 2 * value, `${layout} ${label} position`);
    }

    const interval = tagsWithAttribute(svg, "rect", "data-farey-interval", "1/3,2/5")[0];
    assert.ok(interval, `${layout} highlighted Farey interval exists`);
    assertClose(numberAttribute(interval, "x"), positions.get("1/3"), `${layout} interval starts at 1/3`);
    assertClose(
      numberAttribute(interval, "width"),
      positions.get("2/5") - positions.get("1/3"),
      `${layout} interval ends at 2/5`,
    );

    const prescribed = tagsWithAttribute(svg, "line", "data-prescribed-argument", "3/8")[0];
    const prescribedX = numberAttribute(prescribed, "x1");
    assertClose(prescribedX, start + 0.75 * (end - start), `${layout} x=3/8 position`);
    assert.ok(positions.get("1/3") < prescribedX && prescribedX < positions.get("2/5"));
  }
});

test("Plate IX.2 uses the exact obtuse n=3 example with matching, non-overlapping arrowheads", async () => {
  const figure = figureMarkup(await topicIXHtmlPromise, "rooted-chord");
  const text = visibleText(figure);

  assertAccessibleLayouts(figure, "rooted-chord");
  assert.match(figure, />Exact obtuse vector-equation diagram<\/span>/);
  assert.match(text, /An obtuse n = 3 instance of 1 = βz\^q \+ αw/);
  assert.match(text, /x=11\/24, so A=π\/6 and B=3π\/4/);
  assert.match(text, /βz\^q has argument −A=−π\/6 and αw has argument B=3π\/4/);
  assert.match(text, /αw has negative real component/);
  assert.match(text, /−A/);
  assert.match(text, /Plate IX\.2\./);
  assert.doesNotMatch(text, /reciprocal-coordinate|rooted chord/i);

  for (const layout of ["desktop", "mobile"]) {
    const svg = svgMarkup(figure, layout);
    const redVector = tagsWithAttribute(svg, "line", "data-vector", "beta-z-q")[0];
    const tealVector = tagsWithAttribute(svg, "line", "data-vector", "alpha-w")[0];
    const totalVector = tagsWithAttribute(svg, "line", "data-vector", "sum-one")[0];
    const baseMarker = layout === "desktop" ? "sf-arrow-rooted-chord" : "sf-arrow-rooted-chord-mobile";

    assert.equal(attribute(redVector, "marker-end"), `url(#${baseMarker})`);
    assert.equal(attribute(tealVector, "marker-end"), `url(#${baseMarker}-teal)`);
    assert.equal(attribute(totalVector, "marker-end"), `url(#${baseMarker}-ink)`);
    assert.equal(markerFill(svg, baseMarker), attribute(redVector, "stroke"));
    assert.equal(markerFill(svg, `${baseMarker}-teal`), attribute(tealVector, "stroke"));
    assert.equal(markerFill(svg, `${baseMarker}-ink`), attribute(totalVector, "stroke"));

    const redDx = numberAttribute(redVector, "x2") - numberAttribute(redVector, "x1");
    const redDy = numberAttribute(redVector, "y2") - numberAttribute(redVector, "y1");
    const tealDx = numberAttribute(tealVector, "x2") - numberAttribute(tealVector, "x1");
    const tealDy = numberAttribute(tealVector, "y2") - numberAttribute(tealVector, "y1");
    const totalDx = numberAttribute(totalVector, "x2") - numberAttribute(totalVector, "x1");
    const totalDy = numberAttribute(totalVector, "y2") - numberAttribute(totalVector, "y1");
    const redAngle = Math.atan2(-redDy, redDx);
    const tealAngle = Math.atan2(-tealDy, tealDx);

    assertClose(numberAttribute(redVector, "x2"), numberAttribute(tealVector, "x1"), `${layout} vectors join x`);
    assertClose(numberAttribute(redVector, "y2"), numberAttribute(tealVector, "y1"), `${layout} vectors join y`);
    assertClose(redDx + tealDx, totalDx, `${layout} horizontal components add`);
    assertClose(redDy + tealDy, totalDy, `${layout} imaginary components cancel`);
    assertClose(totalDy, 0, `${layout} total vector is real`);
    assertClose(redAngle, -Math.PI / 6, `${layout} minus A is -pi/6`);
    assertClose(tealAngle, (3 * Math.PI) / 4, `${layout} B is 3pi/4`);
    assert.ok(redDx > 0, `${layout} beta z^q has positive real component`);
    assert.ok(tealDx < 0, `${layout} alpha w has negative real component`);
    assert.equal(attribute(redVector, "data-example-x"), "11/24");
    assert.equal(attribute(tealVector, "data-example-x"), "11/24");
    assert.equal(attribute(redVector, "data-real-component-sign"), "positive");
    assert.equal(attribute(tealVector, "data-real-component-sign"), "negative");
    assert.notEqual(numberAttribute(totalVector, "y1"), numberAttribute(tealVector, "y2"));

    assert.equal(attribute(redVector, "data-mathematical-angle"), "-pi/6");
    assert.equal(attribute(tealVector, "data-mathematical-angle"), "3pi/4");
    assert.equal(tagsWithAttribute(svg, "path", "data-vector-angle", "minus-A").length, 1);
    assert.equal(tagsWithAttribute(svg, "path", "data-vector-angle", "B").length, 1);
    assert.equal(tagsWithAttribute(svg, "line", "data-vector-guide", "B-horizontal").length, 1);
  }
});

test("Plate IX.3 is the exact vertical-plus-horizontal exceptional curve", async () => {
  const figure = figureMarkup(await topicIXHtmlPromise, "terminal-three");
  const text = visibleText(figure);

  assertAccessibleLayouts(figure, "terminal-three");
  assert.match(figure, />Exact algebraic diagram<\/span>/);
  assert.match(text, /The exceptional candidate curve for n = 3/);
  assert.match(text, /Plate IX\.3\./);
  assert.match(text, /vertical segment \{−1\/2\+iy: 0≤y≤√3\/2\}/);
  assert.match(text, /−1\/2 \+ \(√3\/2\)i/);
  assert.match(figure, /data-complex-point="exp-plus-2pi-i-over-3"/);
  assert.doesNotMatch(figure, /data-complex-point="exp-2pi-i-over-3"/);
  assert.doesNotMatch(figure, /e²πⁱ⁄³/);
  assert.doesNotMatch(text, /curved interpolation|nonreal graph tends/i);

  for (const layout of ["desktop", "mobile"]) {
    const svg = svgMarkup(figure, layout);
    const nonreal = tagsWithAttribute(svg, "line", "data-exceptional-branch", "nonreal")[0];
    const real = tagsWithAttribute(svg, "line", "data-exceptional-branch", "real")[0];
    const imaginaryAxis = tagsWithAttribute(svg, "line", "data-complex-axis", "imaginary")[0];
    const imaginaryTick = tagsWithAttribute(svg, "line", "data-axis-tick", "sqrt(3)/2")[0];
    const exactCoordinate = tagsWithAttribute(svg, "text", "data-exact-coordinate", "-1/2+(sqrt(3)/2)i")[0];

    assert.equal(attribute(nonreal, "data-real-part"), "-0.5");
    assert.equal(attribute(real, "data-real-interval"), "[-1,-1/2]");
    assert.ok(imaginaryAxis, `${layout} imaginary axis exists`);
    assert.ok(imaginaryTick, `${layout} sqrt(3)/2 imaginary tick exists`);
    assert.ok(exactCoordinate, `${layout} exact Cartesian endpoint label exists`);
    assertClose(numberAttribute(nonreal, "x1"), numberAttribute(nonreal, "x2"), `${layout} nonreal branch is vertical`);
    assertClose(numberAttribute(real, "y1"), numberAttribute(real, "y2"), `${layout} real branch is horizontal`);
    assertClose(numberAttribute(nonreal, "x2"), numberAttribute(real, "x2"), `${layout} branches meet x`);
    assertClose(numberAttribute(nonreal, "y2"), numberAttribute(real, "y2"), `${layout} branches meet y`);

    const verticalLength = Math.abs(numberAttribute(nonreal, "y2") - numberAttribute(nonreal, "y1"));
    const horizontalLength = Math.abs(numberAttribute(real, "x2") - numberAttribute(real, "x1"));
    assertClose(verticalLength / horizontalLength, Math.sqrt(3), `${layout} exact complex-plane scale`);
    assert.doesNotMatch(svg, /<path[^>]*d="[^"]*\bC/);
  }
});
