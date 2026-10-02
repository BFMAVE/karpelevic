import { readerOrientations } from "../../data/reader-orientation";
import { sitePath } from "../../lib/site-path";
import { toRomanNumeral } from "../../data/proof-reader";

const entryIdeas = [
  "Read each row as a weighted average. The eigenvector's complex coordinates form a polygon that contains its rotated and contracted image.",
  "An interior image leaves room to enlarge the multiplier. Deflation makes that contradiction precise; polarity applies it to sides as well as vertices.",
  "Minimize the interior-contact count before minimizing area. Then let each half-open side own its ending corner, so every image is assigned once.",
  "A factor reversal gives a legal vertex replacement. Its coefficient changes reveal why the interior contacts form one consecutive run.",
  "Keep both the residue and the full-turn count. Consecutive records organize all vertices into towers with two possible return heights.",
  "A skipped return would let us preserve the required contacts while moving one image strictly inward. Universal boundary contact then supplies the contradiction.",
  "Multiply the return equations to cancel vertices, but add their real angles separately. The product forgets full turns; the winding identity retains them.",
  "Use the Farey angle budget to build a strictly increasing scalar equation. Its unique root is a candidate radius whose sharpness is still to be proved.",
  "The real winding fixes an average factor angle. Convexity of the logarithmic sizes bounds the product, with equality precisely at equal weights.",
  "Construct a stochastic graph whose eigenvector recurrences reproduce the equal-weight product. This proves attainment without assuming the boundary theorem.",
  "A maximizer may have smaller least realizing order. Compare the scalar candidates directly before identifying them with the actual regions.",
  "Combine the upper bound, independent order comparison and attainment. Check the small orders and endpoints separately; radial filling gives the whole region.",
  "The completed theorem now gives the best polygonal contraction factor. Keep endpoint distance visible when estimating how rapidly the boundary approaches the circle.",
  "Follow the same eight-state example through its returns, winding, matrix rows and actual polygon. Then compare its radius with order seven.",
];

export function ReaderTopicOrientation({ number }: { number: number }) {
  const orientation = readerOrientations[number];
  const route = (topic: number) => topic === 1 ? "/proof/" : `/proof/topic-${toRomanNumeral(topic).toLowerCase()}/`;
  return <section className="reader-orientation proof-guided-layer" aria-labelledby="reader-orientation-heading">
    <div className="reader-strategy"><h2 id="reader-orientation-heading">The idea of the argument</h2><p>{entryIdeas[number - 1]}</p></div>
    <details className="reader-orientation-details"><summary>What we bring in, and what we build here</summary>
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
    <div className="reader-strategy"><h3>The construction in more detail</h3><p>{orientation.strategy}</p></div>
    <p className="reader-payoff"><strong>What this gives us.</strong> {orientation.payoff}</p>
    </details>
  </section>;
}
