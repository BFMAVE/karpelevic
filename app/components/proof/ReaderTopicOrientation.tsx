import { readerOrientations } from "../../data/reader-orientation";
import { sitePath } from "../../lib/site-path";
import { toRomanNumeral } from "../../data/proof-reader";

export function ReaderTopicOrientation({ number }: { number: number }) {
  const orientation = readerOrientations[number];
  const route = (topic: number) => topic === 1 ? "/proof/" : `/proof/topic-${toRomanNumeral(topic).toLowerCase()}/`;
  return <section className="reader-orientation proof-guided-layer" aria-labelledby="reader-orientation-heading">
    <header><p className="section-label">Before you begin</p><h2 id="reader-orientation-heading">What we bring in, and what we build here</h2></header>
    <div className="reader-orientation-grid">
      <section aria-labelledby="reader-imports-heading">
        <h3 id="reader-imports-heading">{number === 1 ? "The starting tools" : "Imported from earlier topics"}</h3>
        <dl>{orientation.imports.map((item) => <div key={item.term}>
          <dt>{item.from ? <a href={sitePath(route(item.from) + (item.anchor ? "#" + item.anchor : ""))}>{item.term} <span className="reader-origin">· Topic {toRomanNumeral(item.from)}</span></a> : item.term}</dt>
          <dd>{item.use}</dd>
        </div>)}</dl>
      </section>
      <section aria-labelledby="reader-definitions-heading">
        <h3 id="reader-definitions-heading">New ideas and notation</h3>
        <dl>{orientation.definitions.map((item) => <div key={item.term}><dt>{item.term}</dt><dd>{item.meaning}</dd></div>)}</dl>
      </section>
    </div>
    <div className="reader-strategy"><h3>The idea of the argument</h3><p>{orientation.strategy}</p></div>
    <p className="reader-payoff"><strong>What this gives us.</strong> {orientation.payoff}</p>
  </section>;
}
