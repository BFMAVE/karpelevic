import notation from "./reader-notation.json";
import rendered from "./reader-notation.generated.json";

function topicKey(number: number) {
  const key = String(number) as keyof typeof notation.topics;
  if (!notation.topics[key]) throw new RangeError("Unknown notation topic: " + number);
  return key;
}

// The string tuple export also supplies the topic catalogue's search index.
export function readerNotationEntries(number: number): [string, string, string][] {
  const key = topicKey(number);
  return notation.topics[key].map(([term, meaning], index) => [term, meaning, rendered.topics[key][index].aliases]);
}

export function readerNotationHtml(number: number) {
  return rendered.topics[topicKey(number)];
}

export function readerLocalDefinitionHtml(number: number) {
  const key = topicKey(number);
  return notation.localDefinitionIndices[key].map((index) => rendered.topics[key][index]);
}
