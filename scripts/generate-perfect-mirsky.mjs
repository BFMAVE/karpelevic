import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const slugs = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"];
const marker = "<!-- proof-details -->";
const output = new URL("../app/data/perfect-mirsky.generated.json", import.meta.url);
const model = readFileSync(new URL("../app/lib/perfect-mirsky-model.mjs", import.meta.url), "utf8");
const publicModel = new URL("../public/code/perfect-mirsky-model.mjs", import.meta.url);
const overviewInput = readFileSync(new URL("../content/perfect-mirsky/overview.md", import.meta.url), "utf8");
const inputs = slugs.map((slug) => readFileSync(
  new URL("../content/perfect-mirsky/topic-" + slug + ".md", import.meta.url),
  "utf8",
));
const hash = createHash("sha256").update(readFileSync(new URL(import.meta.url))).update(overviewInput);
for (const input of inputs) hash.update(input);
const digest = hash.digest("hex");

if (process.argv.includes("--check")) {
  if (JSON.parse(readFileSync(output, "utf8")).digest !== digest || readFileSync(publicModel, "utf8") !== model) {
    throw new Error("Perfect–Mirsky assets are stale. Run node scripts/generate-perfect-mirsky.mjs");
  }
} else {
  function render(markdown, title) {
    const html = execFileSync("pandoc", ["-f", "markdown", "-t", "html5", "--mathml", "--wrap=none"], {
      input: markdown, encoding: "utf8", maxBuffer: 2 * 1024 * 1024,
    });
    if (/class="math (inline|display)"/.test(html)) throw new Error("Unrendered formula in " + title);
    return html;
  }
  const overview = render(overviewInput, "the Perfect–Mirsky overview");
  const chapters = inputs.map((input, i) => {
    const parts = input.split(marker);
    if (parts.length !== 2 || parts.some((part) => !part.trim())) {
      throw new Error("Topic " + slugs[i] + " needs a guided lesson and a detailed proof");
    }
    const [guide, proof] = parts.map((part) => render(part, "Topic " + slugs[i]));
    return { guide, proof };
  });

  const chapterTexts = chapters.map(({ guide, proof }) => guide + proof);
  for (const html of [overview, ...chapterTexts]) {
    for (const [, topic, fragment] of html.matchAll(/href="\/perfect-mirsky\/(?:topic-([iv]+)\/)?(?:#([^"#]+))?"/g)) {
      const target = topic ? chapterTexts[slugs.indexOf(topic)] : overview;
      if (!target || (fragment && !target.includes('id="' + fragment + '"'))) {
        throw new Error("Unresolved Perfect–Mirsky reference to " + topic + "#" + fragment);
      }
    }
  }
  writeFileSync(output, JSON.stringify({ digest, overview, chapters }, null, 2) + "\n");
  mkdirSync(new URL(".", publicModel), { recursive: true });
  writeFileSync(publicModel, model);
  console.log("Generated the Perfect–Mirsky overview and eight chapters with native MathML.");
}
