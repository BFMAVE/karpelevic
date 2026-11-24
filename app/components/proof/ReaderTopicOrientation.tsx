import { readerOrientations } from "../../data/reader-orientation";
import { sitePath } from "../../lib/site-path";
import { toRomanNumeral } from "../../data/proof-reader";
import { readerLocalDefinitionHtml } from "../../data/reader-notation";

const entryIdeas = [
  "Plot the coordinates of an eigenvector. One row takes a weighted average of these points. Reading all the rows together tells us exactly where the rotated and scaled polygon has to fit.",
  "Suppose one vertex lands strictly inside the polygon. We can give every entry in its matrix row a small positive weight. That spare room lets us change the matrix and move the eigenvalue farther out on the same ray.",
  "A corner belongs to two sides. Counting an image twice would spoil the argument, so we assign it to the side ending there. We can now count the images that land strictly between two corners and choose a polygon with as few of them as possible.",
  "What if the sides with interior contacts came in two separate runs? We could replace one vertex, keep the same eigenvalue, and improve one of the quantities used to choose the polygon.",
  "Starting at a base vertex, follow its images until one lands between two corners. The shift in the vertex indices determines the number of steps. Keeping track of complete turns as well gives the fractions that will label the boundary arc.",
  "If a return skips a base, the vertices between the base and its target side give us room to move. We keep the other contacts on their sides and move one image into the interior. Yet Topic II required that image to touch the boundary.",
  "Two products can agree even when one list of factors turns once more around zero. Following each contact along its side records the actual angle. This lets us eliminate the vertex coordinates and still know the sum of the factor angles.",
  "Choose a ray between two neighbouring roots of unity. Its angular distances from the endpoints are fixed. The radius is now the only unknown in an equation whose left side increases with that radius.",
  "Plot the logarithm of a factor’s length against its angle. At the mean angle the graph lies below each chord joining two different points. Because the polygon fixes that mean, we can compare unequal contact weights with equal ones.",
  "At a branching state, give one weight to the edge that closes a short cycle and the remaining weight to the edge that continues. The lengths of the cycles tell us which powers occur in the characteristic polynomial.",
  "An eigenvalue of an eight-state matrix might already occur with seven states. A bound proved at its smallest possible order therefore raises a question about the formulas themselves. How does the proposed radius change when we add a state?",
  "The construction supplies a matrix at the proposed radius. Contact geometry and the comparison between orders bound every eigenvalue on the ray by that same number. The two inequalities identify the boundary.",
  "Rotate a square and ask how much the original square has to grow to cover it. Its corners make the answer depend on the angle. The boundary theorem lets us choose the best polygon under a limit on the number of vertices.",
  "Fix the ray at 5π/7. With eight states we can compute its boundary radius, build a matrix with that eigenvalue, and draw its eigenvector. In the drawing, six vertex images land on corners and two land between corners.",
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
        <dl>{readerLocalDefinitionHtml(number).map((item, index) => <div key={index}><dt dangerouslySetInnerHTML={{ __html: item.termHtml }} /><dd dangerouslySetInnerHTML={{ __html: item.meaningHtml }} /></div>)}</dl>
      </section>
    </div>
    <div className="reader-strategy"><h3>The construction in more detail</h3><p>{orientation.strategy}</p></div>
    <p className="reader-payoff"><strong>What this gives us.</strong> {orientation.payoff}</p>
    </details>
  </section>;
}
