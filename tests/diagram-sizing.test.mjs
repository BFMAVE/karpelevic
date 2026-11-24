import assert from "node:assert/strict";
import { readdir } from "node:fs/promises";
import test from "node:test";
import { chromiumFixture } from "./helpers/chromium.mjs";

const assets = new URL("../dist/client/assets/", import.meta.url);
const controller = new URL("../public/reader-learning.js", import.meta.url);

test("both diagram formats enlarge and fit their scroll region on desktop and mobile", async (t) => {
  const dumpDOM = await chromiumFixture(t);
  if (!dumpDOM) return;

  const styles = (await readdir(assets)).filter((name) => name.endsWith(".css"));
  assert.ok(styles.length, "the built site includes its stylesheet");
  const links = styles.map((name) => `<link rel="stylesheet" href="${new URL(name, assets)}">`).join("");
  const html = `<!doctype html><meta charset="utf-8">${links}
    <div data-figure-frame data-figure-view="fit">
      <div data-figure-controls hidden>
        <button data-figure-view-button="fit">Fit diagram</button>
        <button data-figure-view-button="enlarge">Enlarge labels</button>
      </div>
      <figure class="reader-teaching-figure"><div class="reader-figure-visual">
        <svg style="width:100%" viewBox="0 0 480 60"><text x="10" y="32">Label</text></svg>
      </div></figure>
      <figure class="reader-chapter-drawing"><div class="reader-figure-visual">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 60'/%3E">
      </div></figure>
    </div>
    <output></output><script src="${controller}"></script><script>
      window.addEventListener("load", () => setTimeout(() => {
        const regions = [...document.querySelectorAll(".reader-figure-visual")];
        const sizes = () => regions.map(region => region.firstElementChild.getBoundingClientRect().width);
        const labelHeight = () => document.querySelector("svg text").getBoundingClientRect().height;
        const fit = sizes(), smallLabel = labelHeight();
        document.querySelector('[data-figure-view-button="enlarge"]').click();
        const large = sizes(), largeLabel = labelHeight();
        const panned = regions.map(region => { region.scrollLeft = 80; return region.scrollLeft; });
        document.querySelector('[data-figure-view-button="fit"]').click();
        document.querySelector("output").textContent = JSON.stringify({
          fit, large, smallLabel, largeLabel, panned, restored: sizes(),
          scrollLeft: regions.map(region => region.scrollLeft), overflow: document.documentElement.scrollWidth - innerWidth
        });
      }, 0));
    </script>`;

  for (const width of [390, 1280]) {
    const stdout = await dumpDOM(html, width);
    const result = JSON.parse(stdout.match(/<output>([^<]+)<\/output>/)[1]);
    assert.ok(result.largeLabel > result.smallLabel * 1.4, `inline label grows at ${width}px`);
    for (const [i, fit] of result.fit.entries()) {
      assert.ok(result.large[i] > fit * 1.4, `drawing ${i} grows at ${width}px`);
      assert.equal(result.panned[i], 80);
      assert.equal(result.restored[i], fit);
      assert.equal(result.scrollLeft[i], 0);
    }
    assert.equal(result.overflow, 0);
  }
});
