import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const plateSourcePromise = readFile(
  new URL("../app/components/PrerequisitePlate.tsx", import.meta.url),
  "utf8",
);
const dataSourcePromise = readFile(
  new URL("../app/data/prerequisites.ts", import.meta.url),
  "utf8",
);

function functionSource(source, name, nextName) {
  const start = source.indexOf(`function ${name}()`);
  const end = source.indexOf(`function ${nextName}()`, start);
  assert.ok(start >= 0, `${name} is present`);
  assert.ok(end > start, `${name} has a following function boundary`);
  return source.slice(start, end);
}

function parsePoints(serialized) {
  return serialized.trim().split(/\s+/).map((pair) => {
    const [x, y] = pair.split(",").map(Number);
    return { x, y };
  });
}

function determinant(a, b, c) {
  // SVG y-coordinates increase downward, so negate y for Cartesian orientation.
  const ab = { x: b.x - a.x, y: a.y - b.y };
  const ac = { x: c.x - a.x, y: a.y - c.y };
  return ab.x * ac.y - ab.y * ac.x;
}

function squaredDistance(a, b) {
  return (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
}

test("the convex-background plate draws four vertices and a nonvertex midpoint", async () => {
  const source = await plateSourcePromise;
  const drawing = functionSource(
    source,
    "ConvexBackgroundDrawing",
    "OrientedBoundaryDrawing",
  );
  const serialized = drawing.match(
    /className="prerequisite-polygon"\s+points="([^"]+)"/,
  )?.[1];
  assert.ok(serialized, "the polygon point list is present");

  const vertices = parsePoints(serialized);
  assert.equal(vertices.length, 4, "the depicted polygon is a quadrilateral");

  const midpointMatch = drawing.match(
    /className="prerequisite-point" cx="([\d.]+)" cy="([\d.]+)"/,
  );
  assert.ok(midpointMatch, "the displayed point m is present");
  const midpoint = { x: Number(midpointMatch[1]), y: Number(midpointMatch[2]) };
  const [topLeft, topRight] = [vertices[1], vertices[2]];

  assert.equal(determinant(topLeft, topRight, midpoint), 0);
  assert.equal(midpoint.x, (topLeft.x + topRight.x) / 2);
  assert.equal(midpoint.y, (topLeft.y + topRight.y) / 2);
  assert.ok(midpoint.x > topLeft.x && midpoint.x < topRight.x);
  assert.ok(vertices.every((vertex) => squaredDistance(vertex, midpoint) > 0));
  assert.match(drawing, /ℓ\(x\) = h_P\(ℓ\)/);
  assert.doesNotMatch(drawing, />\s*ℓ = hP\(ℓ\)\s*</);
});

test("the oriented-boundary plate transports one indexed traversal through a reflection", async () => {
  const source = await plateSourcePromise;
  const drawing = functionSource(
    source,
    "OrientedBoundaryDrawing",
    "OrientationSeparationDrawing",
  );
  const labelledPoints = [...drawing.matchAll(
    /\[(\d+),\s*(\d+),\s*"(S?v[\u2081\u2082\u2083])"\]/g,
  )].map((match) => ({
    x: Number(match[1]),
    y: Number(match[2]),
    label: match[3],
  }));
  const original = Object.fromEntries(
    labelledPoints
      .filter(({ label }) => !label.startsWith("S"))
      .map((point) => [point.label, point]),
  );
  const reflected = Object.fromEntries(
    labelledPoints
      .filter(({ label }) => label.startsWith("S"))
      .map((point) => [point.label.slice(1), point]),
  );

  assert.deepEqual(Object.keys(original).sort(), ["v₁", "v₂", "v₃"]);
  assert.deepEqual(Object.keys(reflected).sort(), ["v₁", "v₂", "v₃"]);
  assert.ok(determinant(original["v₁"], original["v₂"], original["v₃"]) > 0);
  assert.ok(
    determinant(reflected["v₁"], reflected["v₂"], reflected["v₃"]) < 0,
  );
  for (const label of ["v₁", "v₂", "v₃"]) {
    assert.equal(original[label].x + reflected[label].x, 778);
    assert.equal(original[label].y, reflected[label].y);
  }

  const arrows = [...drawing.matchAll(
    /className="prerequisite-angle"\s+d="M(\d+) (\d+) Q(\d+) (\d+) (\d+) (\d+)"/g,
  )].map((match) => ({
    start: { x: Number(match[1]), y: Number(match[2]) },
    control: { x: Number(match[3]), y: Number(match[4]) },
    end: { x: Number(match[5]), y: Number(match[6]) },
  }));
  assert.equal(arrows.length, 2);
  assert.ok(squaredDistance(arrows[0].start, original["v₃"]) < 60 ** 2);
  assert.ok(squaredDistance(arrows[0].end, original["v₁"]) < 60 ** 2);
  assert.ok(squaredDistance(arrows[1].start, reflected["v₃"]) < 60 ** 2);
  assert.ok(squaredDistance(arrows[1].end, reflected["v₁"]) < 60 ** 2);
  assert.equal(arrows[0].start.x + arrows[1].start.x, 778);
  assert.equal(arrows[0].control.x + arrows[1].control.x, 778);
  assert.equal(arrows[0].end.x + arrows[1].end.x, 778);
  assert.match(drawing, /det\(v₂−v₁, v₃−v₁\) &gt; 0/);
  assert.match(drawing, /det\(Sv₂−Sv₁, Sv₃−Sv₁\) &lt; 0/);

  assert.match(
    source,
    /ordered vertices v one, v two, v three run counterclockwise in Cartesian coordinates/,
  );
  assert.match(source, /reflected images S v one, S v two, S v three run clockwise/);
});

test("the prerequisite text separates transport from orientation normalisation", async () => {
  const source = await dataSourcePromise;
  assert.match(
    source,
    /For an elliptic real-linear map T, the only adapted complex structures are J and −J/,
  );
  assert.match(
    source,
    /For every invertible real-linear S, the structure adapted to STS⁻¹ is SJS⁻¹, and the multiplier remains μ/,
  );
  assert.match(
    source,
    /Transporting J as SJS⁻¹ preserves μ for every invertible S/,
  );
  assert.match(
    source,
    /fixed ambient orientation and det S<0, it uses −SJS⁻¹ and the multiplier is μ̄/,
  );
  assert.match(
    source,
    /orientation reversal does not by itself conjugate the multiplier/,
  );
  assert.doesNotMatch(
    source,
    /An orientation-reversing coordinate change exchanges μ and μ̄/,
  );
});
