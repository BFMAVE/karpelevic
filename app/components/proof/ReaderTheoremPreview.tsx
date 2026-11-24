import { radialBoundaryRadius } from "../../lib/karpelevic-boundary-core.js";
import { sitePath } from "../../lib/site-path";
import { ReaderFigureCaption } from "./ReaderFigureCaption";
import { ReaderFigureFrame } from "./ReaderFigureFrame";

export function ReaderTheoremPreview() {
  const map = (x: number, y: number) => [330 + 185 * x, 252 - 185 * y];
  const left = { numerator: 1, denominator: 3 }, right = { numerator: 2, denominator: 5 };
  const arc = Array.from({ length: 61 }, (_, i) => {
    const x = 1 / 3 + (2 / 5 - 1 / 3) * i / 60;
    const r = radialBoundaryRadius(x, left, right, 5);
    return map(r * Math.cos(2 * Math.PI * x), r * Math.sin(2 * Math.PI * x)).join(",");
  }).join(" ");
  return <section className="reader-theorem-preview" id="theorem-preview" aria-labelledby="theorem-preview-heading">
    <h2 id="theorem-preview-heading">See the answer before the machinery</h2>
    <p>Take a cycle on q states. Its matrix C shifts every coordinate to the next and returns the last to the first. If ω<sup>q</sup> = 1, shifting the column (1, ω, …, ω<sup>q−1</sup>) multiplies it by ω. Thus every qth root of unity occurs. Conversely C<sup>q</sup> is the identity, so every eigenvalue of C has qth power one. A point at p/q of a turn is one of these roots.</p>
    <ReaderFigureFrame defaultView="fit"><figure className="reader-teaching-figure">
      <div className="reader-figure-visual" tabIndex={0} role="region" aria-label="Roots of unity and the order-five arc; scroll horizontally if needed">
        <svg viewBox="0 0 660 350" role="img" aria-labelledby="preview-roots-title preview-roots-desc">
          <title id="preview-roots-title">Neighbouring fractions mark the ends of a boundary arc</title>
          <desc id="preview-roots-desc">The upper unit semicircle with the order-five fractions zero, one fifth, one quarter, one third, two fifths and one half. A solid curve inside the circle joins the one-third and two-fifths roots. Those are neighbours when denominators are at most five; three eighths enters between them at order eight.</desc>
          <path d="M145,252 A185,185 0 0 1 515,252" fill="none" stroke="#8a969a" strokeDasharray="5 5" strokeWidth="2" />
          <line x1="115" x2="550" y1="252" y2="252" stroke="#8a969a" />
          <polyline points={arc} fill="none" stroke="#8c3429" strokeWidth="4" />
          {[0, 1 / 5, 1 / 4, 1 / 3, 2 / 5, 1 / 2].map((x, i) => {
            const [cx, cy] = map(Math.cos(2 * Math.PI * x), Math.sin(2 * Math.PI * x));
            const labels = ["0/1", "1/5", "1/4", "1/3", "2/5", "1/2"];
            return <g key={i}><circle cx={cx} cy={cy} r="5" fill={i === 3 || i === 4 ? "#8c3429" : "#18334a"} /><text x={cx} y={cy - 15} textAnchor="middle" fontSize="19" fill="#18334a">{labels[i]}</text></g>;
          })}
          <text x="330" y="303" textAnchor="middle" fontSize="22" fill="#18334a">Order five: denominators at most five</text>
          <text x="330" y="331" textAnchor="middle" fontSize="18" fill="#8c3429">The boundary follows an inward arc between neighbouring roots.</text>
        </svg>
      </div>
      <ReaderFigureCaption takeaway="At order five, the boundary leaves the unit circle at 1/3 of a turn and meets it again at 2/5." status="Exact endpoints; sampled numerical curve. The theorem, rather than the drawing, proves that this is the boundary.">
        At order five, 1/3 and 2/5 are adjacent: 2·3 − 1·5 = 1 and 3 + 5 &gt; 5. The curve samples the proved scalar equation at 61 angles. At order eight, the mediant 3/8 appears between them and replaces this interval by two intervals.
      </ReaderFigureCaption>
    </figure></ReaderFigureFrame>
    <p>Could a different choice of rows reach the unit circle between those marks? The theorem says that a matrix with five states can reach only the roots marked on this semicircle and their reflections. Between two consecutive marks there is a boundary arc. On any such ray every radius from zero up to the arc is attainable. The same description holds at every order n ≥ 4, using the fractions with denominators at most n. <a href={sitePath("/history/#farey-heading")}>The History page explains the fraction list</a>. Topic VII derives it from the polygon contacts.</p>
    <details className="reader-preview-statement"><summary>State the answer precisely</summary>
      <p>Let Rₙ(θ) be the largest r for which reⁱθ is an eigenvalue of an n-state row-stochastic matrix. For n ≥ 4, Rₙ(θ) = Kₙ(θ), where Topic VIII defines Kₙ by the unique positive scalar root on each open Farey interval and by the value 1 at its endpoints. Extend it to 0 ≤ θ &lt; 2π by reflection. Thus Θₙ = {"{"}reⁱθ : 0 ≤ θ &lt; 2π, 0 ≤ r ≤ Kₙ(θ){"}"}. <a href={sitePath("/proof/topic-xii/#thm:karpelevic")}>The exact source theorem and small-order cases are in Topic XII.</a></p>
      <p>Order one gives {"{1}"}. Order two gives [−1,1]. Order three gives the triangle with corners 1, e²πⁱᐟ³, e⁴πⁱᐟ³ together with [−1,−1/2]. In particular, its nonreal radial limit near the negative axis is 1/2 although the radius on that axis is 1.</p>
    </details>
    <p><a href="#reading-routes">Choose how you want to study the theorem →</a></p>
  </section>;
}
