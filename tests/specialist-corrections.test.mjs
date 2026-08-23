import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("..", import.meta.url);
const source = (path) => readFile(new URL(path, root), "utf8");

test("Topic VIII separates lambda equals one before the root-orbit sum", async () => {
  const reader = await source("app/data/topics-viii-xi-reader.tsx");
  const start = reader.indexOf('id: "topic-viii-radial-filling"');
  const end = reader.indexOf('id: "topic-viii-unit-circle"', start);
  const result = reader.slice(start, end);

  assert.match(result, /purpose: "For n≥2/);
  assert.match(result, /Treat λ=1 directly/);
  assert.match(result, /2≤k≤n/);
  assert.match(result, /Because λᵏ=1 and λ≠1/);
  assert.match(result, /\(tλ\)Q=tQ⊆Q/);
  assert.ok(
    result.indexOf("Treat λ=1 directly") <
      result.indexOf("1+λ+⋯+λᵏ⁻¹=0"),
  );
});

test("Topic XIII states small orders separately and uses valid provenance", async () => {
  const topic = await source("app/data/proof-topics/topic-xiii.tsx");
  assert.doesNotMatch(topic, /Standard lemma; proof included/);
  assert.doesNotMatch(topic, /Classical special case; direct proof included/);
  assert.match(topic, /provenance: "Classical result"/);
  assert.match(topic, /For <i>n<\/i>≥3, on an open Farey interval/);
  assert.match(topic, /Θ<sub>1<\/sub>=\{"\{"\}1\{"\}"\}/);
  assert.match(topic, /Θ<sub>2<\/sub>=\[−1,1\]/);
  assert.match(topic, /single vertical side/);
  assert.match(topic, /other remains in \[−1\/2,0\]/);
});

test("the order-three plate derives its ordinate from one common scale", async () => {
  const figure = await source(
    "app/components/proof/figures/CompletionFigures.tsx",
  );
  assert.match(figure, /const unitScale = \(rightX - halfX\) \/ 1\.5/);
  assert.match(figure, /Math\.sqrt\(3\) \/ 2/);
  assert.match(figure, /const topY = realAxisY - omegaImaginaryOffset/);
  assert.match(figure, /const bottomY = realAxisY \+ omegaImaginaryOffset/);
});

test("Topic I and II use the corrected notation and shared proof controller", async () => {
  const [commentary, explainer, topicII] = await Promise.all([
    source("app/data/topic-i-commentary.ts"),
    source("app/components/TopicILocalExplainers.tsx"),
    source("app/components/TopicIIChapter.tsx"),
  ]);
  assert.match(commentary, /next-side map succ/);
  assert.match(explainer, /next side <i>succ<\/i>\(<i>e<\/i>\)/);
  assert.match(topicII, /topic-i-proof-disclosure proof-chapter-proof/);
  assert.match(topicII, /formulation used here/);
  assert.doesNotMatch(topicII, /stronger version used here/);
});
