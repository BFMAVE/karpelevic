import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = readFileSync(path.join(root, "content/paper/karpelevic-invariant-polygons.tex"), "utf8");
const digest = (text) => createHash("sha256").update(text).digest("hex");
const output = path.join(root, "app/data/reader.generated.json");
const guides = Array.from({ length: 14 }, (_, i) => readFileSync(path.join(root, `content/topics/topic-${i + 1}.md`), "utf8"));
const hashes = { manuscript: digest(source), guides: guides.map(digest), generator: digest(readFileSync(fileURLToPath(import.meta.url), "utf8")) };
if (process.argv.includes("--check")) {
  const stored = JSON.parse(readFileSync(output, "utf8"));
  if (JSON.stringify(stored.hashes) !== JSON.stringify(hashes)) throw new Error("Reader is stale: run npm run content:reader with Pandoc installed.");
  console.log("Reader source and fourteen guide hashes verified.");
  process.exit(0);
}

const markers = [
  "\\section{Saturation and cyclic contacts}",
  "For the geometric reduction, fix a nonreal number",
  "\\subsection{Counting vertex images}",
  "\\subsection{The local operation and the global normal form}",
  "\\section{Return geometry}",
  "\\subsection{Face persistence and projective transfer}",
  "\\section{The product and its winding}",
  "\\section{The bound on the modulus and its attainment}",
  "\\begin{theorem}[The bound on the modulus]",
  "\\subsection{Stochastic realization of the bound}",
  "\\section{Farey refinement and completion}",
  "\\subsection{Small orders and the boundary}",
  "\\section{Measuring contraction with polygons}",
  "\\section*{Funding}",
];
const positions = markers.map((marker) => {
  const position = source.indexOf(marker);
  if (position < 0) throw new Error(`Missing source boundary: ${marker}`);
  return position;
});
const slices = positions.slice(0, -1).map((start, i) => source.slice(start, positions[i + 1]));
const theoremStart = source.indexOf("\\begin{theorem}[Karpelevi");
const theoremEnd = source.indexOf("\\end{theorem}", theoremStart) + "\\end{theorem}".length;
slices[11] = source.slice(theoremStart, theoremEnd) + "\n" + slices[11];
const exampleStart = source.indexOf("\\subsection*{The eight-state example, continued}");
slices.push(source.slice(exampleStart, positions[7]));
const bibliographyStart = source.indexOf("\\begin{thebibliography}");
const bibliographyEnd = source.indexOf("\\end{thebibliography}");
const bibliography = source.slice(bibliographyStart, bibliographyEnd)
  .replace(/\\begin\{thebibliography\}\{[^}]+\}/, "\\section*{References}")
  .replace(/\\bibitem\{([^}]+)\}/g, (_, key) => `\\hypertarget{ref-${key}}{}\\paragraph{[${key}]}`);
slices[12] += "\n" + bibliography;

const route = (i) => i === 0 ? "/proof/" : `/proof/topic-${["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii", "xiv"][i]}/`;
const labelTopics = new Map();
slices.forEach((slice, i) => {
  for (const match of slice.matchAll(/\\label\{([^}]+)\}/g)) {
    if (!labelTopics.has(match[1])) labelTopics.set(match[1], i);
  }
});

// Recover the source's section-based numbering before partitioning the text.
const labelNames = new Map();
let section = 0, statement = 0, equation = 0, figure = 0, current = "", appendix = false;
for (const match of source.matchAll(/\\appendix\b|\\section(\*)?\{|\\begin\{(theorem|lemma|proposition|corollary|definition|example|remark|equation|figure)\}|\\label\{([^}]+)\}/g)) {
  if (match[0] === "\\appendix") { appendix = true; section = 0; continue; }
  const sectionName = () => appendix ? String.fromCharCode(64 + section) : String(section);
  if (match[0].startsWith("\\section")) {
    if (!match[1]) { section++; statement = 0; equation = 0; }
    current = sectionName();
  } else if (match[2]) {
    current = match[2] === "figure" ? String(++figure) : `${sectionName()}.${match[2] === "equation" ? ++equation : ++statement}`;
  } else labelNames.set(match[3], current);
}

function captionOf(figure) {
  const start = figure.indexOf("\\caption{");
  if (start < 0) return "See the diagram in the supplied manuscript.";
  let depth = 1, end = start + 9;
  for (; end < figure.length && depth > 0; end++) {
    if (figure[end] === "{" && figure[end - 1] !== "\\") depth++;
    if (figure[end] === "}" && figure[end - 1] !== "\\") depth--;
  }
  return figure.slice(start + 9, end - 1);
}

function foldSourceProofs(html) {
  const parts = [];
  let cursor = 0;
  while (true) {
    const start = html.indexOf('<div class="proof">', cursor);
    if (start < 0) break;
    const statements = [...html.slice(0, start).matchAll(/<div id="[^"]+" class="(?:theorem|lemma|proposition|corollary)">\s*<p><strong>([^<]+)<\/strong>/g)];
    const label = statements.at(-1)?.[1].replace(/\.\s*$/, "") ?? "the source result";
    const tags = /<\/?div\b[^>]*>/g;
    tags.lastIndex = start;
    let depth = 0, end = start;
    for (let tag; (tag = tags.exec(html));) {
      depth += tag[0].startsWith("</") ? -1 : 1;
      if (depth === 0) { end = tags.lastIndex; break; }
    }
    if (end === start) throw new Error(`Unclosed source proof for ${label}`);
    parts.push(html.slice(cursor, start), `<details class="proof-chapter-proof reader-result-proof" data-source-proof><summary>Proof of ${label}</summary>${html.slice(start, end)}</details>`);
    cursor = end;
  }
  parts.push(html.slice(cursor));
  return parts.join("");
}

function convert(tex, topicIndex) {
  const equations = [];
  tex = tex.replace(/\\begin\{figure\}[\s\S]*?\\end\{figure\}/g, (figure) => {
    const anchors = [...figure.matchAll(/\\label\{([^}]+)\}/g)].map((m) => `\\hypertarget{${m[1]}}{}`).join("\n");
    return `${anchors}\n\\paragraph{Source diagram.} ${captionOf(figure)} \\textit{The original drawing is available in the supplied manuscript PDF.}\n`;
  });
  tex = tex.replace(/\\begin\{equation\}([\s\S]*?)\\end\{equation\}/g, (_, body) => {
    const labels = [...body.matchAll(/\\label\{([^}]+)\}/g)].map((m) => m[1]);
    const index = equations.length;
    equations.push(labels);
    return `\\hypertarget{reader-equation-${index}}{}\\[${body.replace(/\\label\{[^}]+\}/g, "")}\\]`;
  });
  tex = tex.replace(/\\(eqref|ref)\{([^}]+)\}/g, (_, kind, label) => {
    const index = labelTopics.get(label);
    if (index === undefined) throw new Error(`Unmapped source reference ${label}`);
    const name = labelNames.get(label) ?? label;
    const text = kind === "eqref" ? `(${name})` : name;
    return `\\href{${route(index)}#${label}}{${text}}`;
  });
  tex = tex.replace(/\\cite(?:\[([^\]]*)\])?\{([^}]+)\}/g, (_, locator, keys) => {
    const refs = keys.split(",").map((key) => `\\href{/proof/topic-xiii/#ref-${key}}{[${key}]}`).join(", ");
    return locator ? `${refs}, ${locator}` : refs;
  });
  tex = tex.replaceAll("\\hbox", "\\text").replace(/\\Needspace\{[^}]+\}/g, "");
  const preamble = source.slice(0, source.indexOf("\\begin{document}"));
  let html = execFileSync("pandoc", ["-f", "latex", "-t", "html5", "--mathml", "--wrap=none"], { input: `${preamble}\\begin{document}\n${tex}\n\\end{document}`, encoding: "utf8", maxBuffer: 40 * 1024 * 1024 });
  html = html.replace(/<(?:div|span) id="reader-equation-(\d+)">\s*<\/(?:div|span)>/g, (_, number) => { const labels = equations[Number(number)]; return labels.map((label) => `<span id="${label}" class="source-equation-anchor"></span>`).join("") + (labels.length ? `<small class="source-equation-label">(${labelNames.get(labels[0])})</small>` : ""); });
  html = html.replace(/<div id="([^"]+)" class="(theorem|lemma|proposition|corollary|definition|example|remark)">\s*<p><strong>([^<]+)<\/strong>/g, (_, label, kind, text) => {
    const aliases = [];
    // Consecutive labels on one source statement are synonyms.
    for (const match of tex.matchAll(/\\label\{([^}]+)\}\\label\{([^}]+)\}/g)) {
      if (match[1] === label) aliases.push(match[2]);
      if (match[2] === label) aliases.push(match[1]);
    }
    return `${aliases.filter((id) => !html.includes(`id="${id}"`)).map((id) => `<span id="${id}"></span>`).join("")}<div id="${label}" class="${kind}"><p><strong>${text.replace(/\d+$/, labelNames.get(label) ?? "")}</strong>`;
  });
  html = html.replace(/<h([1-6])\b/g, (_, n) => `<h${Math.min(6, Number(n) + 2)}`).replace(/<\/h([1-6])>/g, (_, n) => `</h${Math.min(6, Number(n) + 2)}>`);
  if (/class="math (?:inline|display)"/.test(html) || /data-reference="/.test(html)) throw new Error(`Unrendered formula or reference in topic ${topicIndex + 1}`);
  return foldSourceProofs(html);
}

function convertGuide(markdown, index) {
  let html = execFileSync("pandoc", ["-f", "markdown", "-t", "html5", "--mathml", "--wrap=none"], { input: markdown, encoding: "utf8", maxBuffer: 8 * 1024 * 1024 });
  const prefix = `guide-${index + 1}-`;
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  html = html.replace(/\bid="([^"]+)"/g, (_, id) => `id="${prefix}${id}"`);
  html = html.replace(/href="#([^"]+)"/g, (original, id) => ids.includes(id) ? `href="#${prefix}${id}"` : original);
  if ((html.match(/<!-- reader-figure:(?:early|late) -->/g) ?? []).length !== 1) throw new Error(`Topic ${index + 1} needs one teaching-figure placement marker`);
  return html;
}

const chapters = slices.map((slice, i) => ({
  guideHtml: convertGuide(guides[i], i),
  sourceHtml: convert(slice, i),
}));

// Fail generation if a source reference would land on a missing anchor.
for (const chapter of chapters) {
  for (const match of chapter.sourceHtml.matchAll(/href="(\/proof\/[^"#]*)#([^"]+)"/g)) {
    const targetIndex = Array.from({ length: 14 }, (_, i) => route(i)).indexOf(match[1]);
    if (targetIndex < 0 || !chapters[targetIndex].sourceHtml.includes(`id="${match[2]}"`)) throw new Error(`Unresolved source link ${match[0]}`);
  }
}
writeFileSync(output, JSON.stringify({ hashes, chapters }, null, 2) + "\n");
console.log("Generated fourteen guides and complete source passages, with checked references.");
