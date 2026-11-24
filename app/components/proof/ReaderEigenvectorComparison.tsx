import { svgPath, thetaBoundary } from "../../lib/theta-region";

function Axes() {
  return <g>
    <g stroke="#879394" strokeWidth="1">
      <line x1="17" x2="243" y1="130" y2="130" />
      <line x1="130" x2="130" y1="19" y2="242" />
      {[38, 84, 176, 222].map(x => <line key={x} x1={x} x2={x} y1="127" y2="133" />)}
      {[38, 84, 176, 222].map(y => <line key={y} x1="127" x2="133" y1={y} y2={y} />)}
    </g>
    <g fontSize="15" fill="#253d48">
      <text x="170" y="150" textAnchor="end">1</text>
      <text x="222" y="149" textAnchor="middle">2</text>
      <text x="38" y="149" textAnchor="middle">−2</text>
      <text x="120" y="78" textAnchor="end">i</text>
      <text x="120" y="42" textAnchor="end">2i</text>
      <text x="121" y="227" textAnchor="end">−2i</text>
      <text x="115" y="147">0</text>
    </g>
  </g>;
}

export function ReaderEigenvectorComparison() {
  const region = svgPath(thetaBoundary(4, 41).boundary, 260, 84);
  return <figure className="reader-teaching-figure" id="two-complex-planes">
    <div className="reader-plane-pair">
      <div>
        <strong>The eigenvector coordinates</strong>
        <svg viewBox="0 0 260 250" role="img" aria-labelledby="coordinates-title coordinates-desc">
          <title id="coordinates-title">A row takes the midpoint of 2 and 2i</title>
          <desc id="coordinates-desc">Four entries form a diamond. Their four side midpoints form the dashed square. The marked midpoint is one plus i, the image of the entry two.</desc>
          <polygon points="222,130 130,38 38,130 130,222" fill="#e6efec" stroke="#39696d" strokeWidth="2.5" />
          <Axes />
          <polygon points="176,84 84,84 84,176 176,176" fill="none" stroke="#39696d" strokeWidth="2" strokeDasharray="5 4" />
          <circle cx="222" cy="130" r="4" fill="#253d48" />
          <circle cx="130" cy="38" r="4" fill="#253d48" />
          <circle cx="176" cy="84" r="4.5" fill="#933e2d" />
          <text x="184" y="83" fontSize="16" fill="#933e2d">1 + i</text>
        </svg>
      </div>
      <div>
        <strong>The eigenvalue region Θ₄</strong>
        <svg viewBox="0 0 260 250" role="img" aria-labelledby="multiplier-title multiplier-desc">
          <title id="multiplier-title">The eigenvalue is the multiplier that sent 2 to 1 + i</title>
          <desc id="multiplier-desc">The shaded four-state region contains the marked point with real and imaginary parts one half. Doubling every entry of the eigenvector leaves the marked point in the same place.</desc>
          <path d={region} fill="#e6efec" stroke="#39696d" strokeWidth="2.5" />
          <Axes />
          <line x1="130" y1="130" x2="153" y2="107" stroke="#933e2d" strokeWidth="2" />
          <circle cx="153" cy="107" r="4.5" fill="#933e2d" />
          <text x="159" y="102" fontSize="16" fill="#933e2d">½ + ½i</text>
        </svg>
      </div>
    </div>
    <figcaption>Both panels use the same scale. The first row sends 2 to 1 + i. Dividing its output by its input gives the point to mark in Θ₄, namely (1 + i)/2. Doubling the eigenvector doubles every coordinate in its polygon. Its output and input both double, so their ratio stays at the same point in the second drawing. The outline of Θ₄ is sampled from the boundary equation.</figcaption>
  </figure>;
}
