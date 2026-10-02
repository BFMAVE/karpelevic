import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const script = fileURLToPath(import.meta.url);
const root = path.resolve(path.dirname(script), "..");
const inputPath = path.join(root, "app/data/reader-notation.json");
const outputPath = path.join(root, "app/data/reader-notation.generated.json");
const inputText = readFileSync(inputPath, "utf8");
const input = JSON.parse(inputText);
const digest = (value) => createHash("sha256").update(value).digest("hex");
const hashes = { input: digest(inputText), generator: digest(readFileSync(script, "utf8")) };
const numbers = Array.from({ length: 14 }, (_, index) => String(index + 1));

if (Object.keys(input.topics).join(",") !== numbers.join(",")) throw new Error("Notation must cover exactly Topics I–XIV.");
for (const number of numbers) {
  const entries = input.topics[number];
  if (!Array.isArray(entries) || !entries.length || entries.some((entry) => !Array.isArray(entry) || entry.length !== 2 || entry.some((value) => typeof value !== "string" || !value.trim()))) {
    throw new Error("Invalid notation entry in Topic " + number + ".");
  }
  const local = input.localDefinitionIndices[number];
  if (!Array.isArray(local) || !local.length || new Set(local).size !== local.length || local.some((index) => !Number.isInteger(index) || index < 0 || index >= entries.length)) {
    throw new Error("Invalid local definition indices in Topic " + number + ".");
  }
}
if (process.argv.includes("--check")) {
  const stored = JSON.parse(readFileSync(outputPath, "utf8"));
  if (JSON.stringify(stored.hashes) !== JSON.stringify(hashes)) throw new Error("Notation is stale: run npm run content:reader-notation with Pandoc installed.");
  console.log("Chapter-scoped notation input and generator hashes verified.");
  process.exit(0);
}

// Search aliases retain both common Greek shapes and their usual TeX names.
const greek = {
  alpha: ["α", "Α"], beta: ["β", "Β"], gamma: ["γ", "Γ"], delta: ["δ", "Δ"],
  epsilon: ["ε", "ϵ", "Ε", "varepsilon"], zeta: ["ζ", "Ζ"], eta: ["η", "Η"],
  theta: ["θ", "ϑ", "Θ", "vartheta"], iota: ["ι", "Ι"], kappa: ["κ", "ϰ", "Κ", "varkappa"],
  lambda: ["λ", "Λ"], mu: ["μ", "Μ"], nu: ["ν", "Ν"], xi: ["ξ", "Ξ"],
  omicron: ["ο", "Ο"], pi: ["π", "ϖ", "Π", "varpi"], rho: ["ρ", "ϱ", "Ρ", "varrho"],
  sigma: ["σ", "ς", "Σ", "varsigma"], tau: ["τ", "Τ"], upsilon: ["υ", "Υ"],
  phi: ["φ", "ϕ", "Φ", "varphi"], chi: ["χ", "Χ"], psi: ["ψ", "Ψ"], omega: ["ω", "Ω"],
};
function aliasesFor(values) {
  const commands = new Set(values.join(" ").match(/\\[A-Za-z]+/g)?.map((command) => command.slice(1).toLowerCase()) ?? []);
  return Object.entries(greek).filter(([name, variants]) => commands.has(name) || variants.some((variant) => commands.has(variant)))
    .flatMap(([name, variants]) => [name, "\\" + name, ...variants]).join(" ");
}

const fragments = numbers.flatMap((number) => input.topics[number].flatMap((entry, index) => entry.map((markdown, part) => ({ key: number + "-" + index + "-" + part, markdown }))));
const markdown = fragments.map(({ key, markdown }) => "<!-- reader-notation-fragment:" + key + " -->\n\n" + markdown + "\n").join("\n");
const html = execFileSync("pandoc", ["-f", "markdown", "-t", "html5", "--mathml", "--wrap=none"], { input: markdown, encoding: "utf8", maxBuffer: 8 * 1024 * 1024 });
if (/class="math (?:inline|display)"/.test(html)) throw new Error("Notation contains an unrendered formula.");
const rendered = new Map();
for (const match of html.matchAll(/<!-- reader-notation-fragment:([^ ]+) -->\s*([\s\S]*?)(?=<!-- reader-notation-fragment:|$)/g)) {
  const paragraph = match[2].trim();
  if ((paragraph.match(/<p>/g) ?? []).length !== 1 || !paragraph.startsWith("<p>") || !paragraph.endsWith("</p>")) {
    throw new Error("Notation fragment " + match[1] + " must be a single inline paragraph.");
  }
  rendered.set(match[1], paragraph.slice(3, -4));
}
if (rendered.size !== fragments.length) throw new Error("Pandoc omitted a notation fragment.");
const topics = Object.fromEntries(numbers.map((number) => [number, input.topics[number].map((entry, index) => ({
  termHtml: rendered.get(number + "-" + index + "-0"),
  meaningHtml: rendered.get(number + "-" + index + "-1"),
  aliases: aliasesFor(entry),
}))]));
writeFileSync(outputPath, JSON.stringify({ hashes, topics }, null, 2) + "\n");
console.log("Generated native MathML for " + fragments.length / 2 + " chapter-scoped notation entries.");

