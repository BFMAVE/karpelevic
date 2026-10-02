const ink = "#1d3347", blue = "#306580", red = "#7c302e";
import { ReaderFigureCaption } from "./ReaderFigureCaption";

export function WeightedAverageFigure() {
  return <figure className="reader-teaching-figure reader-average-figure" aria-labelledby="average-heading" data-weighted-average>
    <h3 id="average-heading">One matrix row, one point in a polygon</h3>
    <p className="reader-figure-scroll-hint">Scroll the diagram sideways; when focused, use the arrow keys.</p>
    <div className="reader-figure-visual" tabIndex={0} role="region" aria-label="Weighted-average diagram">
      <svg viewBox="0 0 660 355" role="img" aria-labelledby="average-title average-description">
        <title id="average-title">A weighted average stays on the segment from 1 to i</title>
        <desc id="average-description" data-average-description>The four coordinates 1, i, minus 1, minus i form a diamond. The row with weights alpha, one minus alpha, zero, zero selects the point alpha plus one minus alpha times i. Its current coordinates are 0.5 and 0.5.</desc>
        <g fill="none" stroke={ink} strokeWidth="1" opacity=".3">
          <path d="M65 188H390M230 28V340" />
          <circle cx="230" cy="188" r="125" strokeDasharray="4 6" />
        </g>
        <polygon points="355,188 230,63 105,188 230,313" fill="#3065800c" stroke={blue} strokeWidth="2" />
        <path d="M230 63L355 188" stroke={red} strokeWidth="4" />
        {[[355, 188], [230, 63], [105, 188], [230, 313]].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill={blue} />)}
        <polygon points="292.5,117.5 300.5,125.5 292.5,133.5 284.5,125.5" fill={red} stroke="#fffaf0" strokeWidth="2" data-average-point />
        <g fill={ink} fontSize="21">
          <text x="364" y="213">1</text><text x="242" y="56">i</text>
          <text x="71" y="180">−1</text><text x="242" y="336">−i</text>
          <text x="216" y="211">0</text>
          <text x="428" y="89">Column coordinates</text>
          <text x="428" y="125" fill={blue}>(1, i, −1, −i)</text>
          <text x="428" y="190">Weights in one row</text>
          <text x="428" y="226" fill={red} data-average-row>(0.5, 0.5, 0, 0)</text>
          <text x="428" y="291" data-average-coordinate>Average: 0.5 + 0.5i</text>
        </g>
      </svg>
    </div>
    <div className="reader-average-controls">
      <label htmlFor="average-weight">Weight α on the coordinate 1: <span data-average-weight>0.5</span></label>
      <input id="average-weight" type="range" min="0" max="1" step=".05" defaultValue="0.5" disabled data-average-input aria-valuetext="0.5 on 1; 0.5 on i" aria-describedby="average-result" />
      <div className="reader-average-presets" role="group" aria-label="Try a weighted average">
        {[["Choose i", 0], ["Equal weights", .5], ["Choose 1", 1]].map(([label, value]) => <button key={label} type="button" disabled aria-pressed={value === .5} data-average-preset={value}>{label}</button>)}
      </div>
      <p id="average-result" className="reader-average-result" role="status" data-average-status>The average is <strong>0.5 + 0.5i</strong>. Its absolute value is approximately 0.707, at most 1. Both weights are positive, so the average lies between the two endpoints.</p>
    </div>
    <noscript><p>The diagram shows the equal-weight example. JavaScript enables the slider and the three choices.</p></noscript>
    <ReaderFigureCaption takeaway="Changing two nonnegative weights moves the average along the segment joining the two coordinates." status="Exact one-row averaging model; it does not by itself establish extremality."><strong>From averaging to geometry.</strong> A nonnegative row whose entries sum to one chooses a convex combination of the column coordinates. This diagram shows one row. For an eigenvector, every row&apos;s average equals λ times its corresponding coordinate. Taking all rows together gives λP ⊆ P, where P is the polygon spanned by those coordinates.</ReaderFigureCaption>
  </figure>;
}
