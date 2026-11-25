import { chordEnd as sideEnd, chordState, circularPath, correctedDistances, onCircle, pathLabels, pathState, sixMarkState } from "../lib/perfect-mirsky-model.mjs";

type Point = [number, number];
type Plane = { cx: number; cy: number; scale: number };

function projected([x, y]: Point, { cx, cy, scale }: Plane): Point {
  return [cx + scale * x, cy - scale * y];
}

function pointList(points: Point[], plane: Plane) {
  return points.map((point) => projected(point, plane).map((value) => value.toFixed(3)).join(",")).join(" ");
}

function regularPolygon(order: number): Point[] {
  return Array.from({ length: order }, (_, j) => onCircle(1, 2 * Math.PI * j / order));
}

function Mark({ at, plane, kind, name, apart }: { at: Point; plane: Plane; kind: string; name?: string; apart?: boolean }) {
  const [cx, cy] = projected(at, plane);
  return <circle cx={cx} cy={cy} r={5} className={"mirsky-mark " + kind}
    data-mirsky-mark={name} data-mirsky-when-apart={apart || undefined} />;
}

const corners: Point[] = [[1, 0], [0, 1], [-1, 0], [0, -1]];
const squarePlane = { cx: 180, cy: 151, scale: 105 };
const levels = [{ step: 0, label: "0" }, { step: 20, label: "1/3" }, { step: 30, label: "1/2" }];

export function SixMarks() {
  const step = 30;
  const { a, spacing, rowDemand, total, bound, status } = sixMarkState(step);
  const t = 3 / 4;

  return <div className="mirsky-experiment" data-mirsky-square={JSON.stringify(squarePlane)}>
    <div className="mirsky-diagram-grid">
      <div className="reader-figure-visual" tabIndex={0} role="region" aria-label="Positions of the six marks">
        <svg viewBox="0 0 360 304" role="img" aria-labelledby="mirsky-square-title">
          <title id="mirsky-square-title">The four fixed corners and the two marks at a and minus a. Hollow marks on the imaginary axis show the targets for the rows at one and a.</title>
          <path d="M42 151H318 M180 27V275" className="mirsky-axis" />
          <polygon points={pointList(corners, squarePlane)} className="mirsky-outline" />
          <polygon points={pointList(corners.map(([x, y]) => [t * x, t * y]), squarePlane)} className="mirsky-trial" />
          {corners.map((point, index) => <Mark key={index} at={point} plane={squarePlane} kind={index === 1 ? "mirsky-source" : "mirsky-fixed"} />)}
          <Mark at={[a, 0]} plane={squarePlane} kind="mirsky-interior" name="a" />
          <Mark at={[-a, 0]} plane={squarePlane} kind="mirsky-interior" name="minus-a" apart />
          <Mark at={[0, t]} plane={squarePlane} kind="mirsky-target" />
          <Mark at={[0, t * a]} plane={squarePlane} kind="mirsky-target" name="target-a" />
          <text x="203" y="44">i</text><text x="203" y="263">−i</text>
          <text x="300" y="157">1</text><text x="58" y="157" textAnchor="end">−1</text>
          <text x={squarePlane.cx + squarePlane.scale * a + 5} y="176" data-mirsky-label-positive data-mirsky-when-apart>a</text>
          <text x={squarePlane.cx - squarePlane.scale * a} y="176" textAnchor="end" data-mirsky-label-negative data-mirsky-when-apart>−a</text>
          <text x="180" y="178" textAnchor="middle" data-mirsky-when-together {...{ hidden: true }}>two marks at 0</text>
          <text x="193" y="76" className="mirsky-label-accent">3i/4</text>
          <text x="193" y={squarePlane.cy - squarePlane.scale * t * a - 7} className="mirsky-label-accent" data-mirsky-label-target>3ai/4</text>
          <text x="180" y="294" textAnchor="middle">The eigenvector and two of its targets</text>
        </svg>
      </div>
      <div className="mirsky-readout">
        <p className="mirsky-readout-heading">Supply at i</p>
        <dl>
          <div><dt>Row at 1 needs</dt><dd>3/4</dd></div>
          <div><dt>Row at a needs</dt><dd data-mirsky-text="row">{rowDemand}</dd></div>
          <div><dt>Total needed</dt><dd data-mirsky-text="total">{total}</dd></div>
        </dl>
        <div className="mirsky-mass-bar" aria-hidden="true">
          <span className="mirsky-demand-one" />
          <span className="mirsky-demand-two" style={{ width: (50 * a) + "%" }} />
          <span className="mirsky-supply-mark" />
        </div>
        <p className="mirsky-supply-key">Vertical line at the one unit available</p>
        <output className="mirsky-status" htmlFor="mirsky-mark-spacing" aria-live="polite">
          <span data-mirsky-text="supply-status">{status}</span>
          <strong>The largest t on these marks is <span data-mirsky-text="sharp-bound">{bound}</span>.</strong>
        </output>
      </div>
    </div>
    <div className="reader-average-controls mirsky-controls">
      <label htmlFor="mirsky-mark-spacing">Distance a of each interior mark from zero <strong data-mirsky-text="spacing">{spacing}</strong></label>
      <input id="mirsky-mark-spacing" type="range" min={0} max={54} defaultValue={step}
        aria-valuetext={"a equals " + spacing} disabled data-mirsky-control />
      <div className="reader-average-presets" role="group" aria-label="Example spacings">
        {levels.map((level) => <button type="button" key={level.step} aria-pressed={step === level.step}
          disabled data-mirsky-control data-mirsky-spacing={level.step}>a = {level.label}</button>)}
      </div>
    </div>
  </div>;
}

const witness: Point = [-0.2792925778257751, 0.7635163746738518];
const regionPlane = { cx: 168, cy: 142, scale: 108 };

export function PolygonRegion() {
  const order = 5;
  const [witnessX, witnessY] = projected(witness, regionPlane);
  const zoom = ([x, y]: Point) => [42 + (x + .33) * 2900, 233 - (y - .727) * 3900];
  const triangleSide = (x: number) => (1 - x) / Math.sqrt(3);
  const pentagon = regularPolygon(5);
  const [px, py] = pentagon[1];
  const [qx, qy] = pentagon[2];
  const pentagonSide = (x: number) => py + (qy - py) * (x - px) / (qx - px);
  const [windowX, windowY] = zoom(witness);
  return <div className="mirsky-experiment" data-mirsky-union>
    <div className="reader-average-presets" role="group" aria-label="Order of the polygon union">
      {[3, 4, 5, 6].map((n) => <button key={n} type="button" aria-pressed={order === n}
        disabled data-mirsky-control data-mirsky-order={n}>Order {n}</button>)}
    </div>
    <div className="mirsky-diagram-grid">
      <div className="reader-figure-visual" tabIndex={0} role="region" aria-label="Union of regular polygons and the unit circle">
        <svg viewBox="0 0 336 303" role="img" aria-labelledby="mirsky-union-title">
          <title id="mirsky-union-title" data-mirsky-text="region-title">Union of the regular polygons of order at most five. The highlighted point is the order-five witness.</title>
          <path d="M37 142H299 M168 19V264" className="mirsky-axis" />
          <circle cx="168" cy="142" r="108" className="mirsky-unit" />
          <line x1="60" y1="142" x2="276" y2="142" className="mirsky-n2" />
          {[3, 4, 5, 6].map((n) => <polygon key={n} points={pointList(regularPolygon(n), regionPlane)}
            className={"mirsky-region mirsky-n" + n} data-mirsky-polygon={n} {...{ hidden: n > order }} />)}
          <g data-mirsky-witness><rect x={witnessX - 7} y={witnessY - 7} width="14" height="14" className="mirsky-zoom-frame" />
            <Mark at={witness} plane={regionPlane} kind="mirsky-interior" /></g>
          <text x="284" y="163">1</text><text x="169" y="14" textAnchor="middle">Im z</text>
          <text x="296" y="135">Re z</text>
          <text x="168" y="286" textAnchor="middle">The union U<tspan baselineShift="sub" fontSize="12" data-mirsky-text="order">{order}</tspan></text>
        </svg>
      </div>
      <div className="reader-figure-visual" tabIndex={0} role="region" aria-label="Enlarged order-five witness">
        <svg viewBox="0 0 336 303" role="img" aria-labelledby="mirsky-zoom-title">
          <title id="mirsky-zoom-title">Enlargement at order five. The witness lies above both the descending triangle side and the rising pentagon side.</title>
          <defs><clipPath id="mirsky-zoom-clip"><rect x="42" y="33" width="262" height="200" /></clipPath></defs>
          <rect x="42" y="33" width="262" height="200" className="mirsky-zoom-frame" />
          {[.74, .75, .76, .77].map((v) => (
            <g key={v}><line x1="42" x2="304" y1={zoom([-.33, v])[1]} y2={zoom([-.33, v])[1]} className="mirsky-gridline" />
              <text x="37" y={zoom([-.33, v])[1] + 4} textAnchor="end">{v.toFixed(2)}</text></g>
          ))}
          <g clipPath="url(#mirsky-zoom-clip)">
            <polyline points={[-.33, -.24].map((x) => zoom([x, triangleSide(x)]).join(",")).join(" ")} className="mirsky-zoom-triangle" />
            <polyline points={[-.33, -.24].map((x) => zoom([x, pentagonSide(x)]).join(",")).join(" ")} className="mirsky-zoom-pentagon" />
          </g>
          <circle cx={windowX} cy={windowY} r="5" className="mirsky-mark mirsky-interior" />
          <text x={windowX - 8} y={windowY - 15} className="mirsky-label-accent" textAnchor="middle">witness</text>
          <text x="48" y="64">triangle</text>
          <text x="234" y="104">pentagon</text>
          <text x="43" y="254">−.33</text><text x="303" y="254" textAnchor="end">−.24</text>
          <text x="173" y="286" textAnchor="middle">Close to the boundary of U₅</text>
        </svg>
      </div>
    </div>
  </div>;
}

const chordPlane = { cx: 160, cy: 140, scale: 97 };

export function Chord() {
  const percent = 50;
  const { u, x, y, chance, loss } = chordState(percent);
  const eta: Point = [x, y];
  const [etaX, etaY] = projected(eta, chordPlane);
  return <div className="mirsky-experiment" data-mirsky-chord={JSON.stringify(chordPlane)}>
    <div className="mirsky-diagram-grid">
      <div className="reader-figure-visual" tabIndex={0} role="region" aria-label="Two neighboring roots and the average on their side">
        <svg viewBox="0 0 320 272" role="img" aria-labelledby="mirsky-chord-title">
          <title id="mirsky-chord-title">The two roots at zero and 45 degrees and the average along the side between them.</title>
          <path d="M38 140H281 M160 20V253" className="mirsky-axis" />
          <circle cx="160" cy="140" r="97" className="mirsky-unit" />
          <polygon points={pointList(regularPolygon(8), chordPlane)} className="mirsky-outline" />
          <polyline points={pointList([[1, 0], sideEnd], chordPlane)} className="mirsky-chord" />
          <polyline points={pointList([[0, 0], eta], chordPlane)} className="mirsky-trial" data-mirsky-chord-ray />
          <Mark at={eta} plane={chordPlane} kind="mirsky-interior" name="eta" />
          <text x="266" y="146">1</text><text x="221" y="51">exp(iπ/4)</text>
          <text x={etaX - 14} y={etaY - 9} className="mirsky-label-accent" data-mirsky-eta-label>η</text>
        </svg>
      </div>
      <div className="mirsky-readout">
        <p className="mirsky-readout-heading">Compare two draws</p>
        <dl>
          <div><dt>Chance of different shifts</dt><dd data-mirsky-text="chance">{chance}</dd></div>
          <div><dt>Half the mean squared distance</dt><dd data-mirsky-text="distance">{loss}</dd></div>
          <div><dt>Loss of squared radius</dt><dd data-mirsky-text="loss">{loss}</dd></div>
        </dl>
        <output className="mirsky-status" htmlFor="mirsky-chord-weight" aria-live="polite" data-mirsky-text="chord-status">
          At u = {u}, both ways of measuring the loss give {loss}.
        </output>
      </div>
    </div>
    <div className="reader-average-controls mirsky-controls">
      <label htmlFor="mirsky-chord-weight">Probability u of advancing one label <strong data-mirsky-text="u">{u}</strong></label>
      <input id="mirsky-chord-weight" type="range" min={0} max={100} defaultValue={percent}
        aria-valuetext={u} disabled data-mirsky-control />
    </div>
  </div>;
}

const finalStep = pathLabels.length - 1;
const pathPlane = { cx: 88, cy: 220, scale: 144 };

export function QuarterTurn() {
  const step = 0;
  const { visited, expected, trace, label, distance, largest } = pathState(step);
  const chart = (k: number, value: number) => [44 + 41 * k, 222 - 560 * value];
  const [chartX, chartY] = chart(step, trace[step]);
  return <div className="mirsky-experiment" data-mirsky-path={JSON.stringify(pathPlane)}>
    <div className="mirsky-diagram-grid">
      <div className="reader-figure-visual" tabIndex={0} role="region" aria-label="The path and its expected position on the circle">
        <svg viewBox="0 0 320 282" role="img" aria-labelledby="mirsky-path-title">
          <title id="mirsky-path-title">The filled point shows the visited mark. The open point shows the mean at that step.</title>
          <path d="M62 220H251 M88 54V234" className="mirsky-axis" />
          <path d="M232 220 A144 144 0 0 0 88 76" className="mirsky-unit" />
          {Array.from({ length: 10 }, (_, k) => {
            const [cx, cy] = projected(onCircle(1, k * Math.PI / 18), pathPlane);
            return <circle key={k} cx={cx} cy={cy} r="2.8" className="mirsky-quiet-point" />;
          })}
          <polyline points={pointList(circularPath, pathPlane)} className="mirsky-trial" />
          <polyline points={pointList(visited, pathPlane)} className="mirsky-path" data-mirsky-visited-edges />
          <Mark at={visited[step]} plane={pathPlane} kind="mirsky-fixed" name="visited" />
          <Mark at={expected} plane={pathPlane} kind="mirsky-target" name="expected" />
          <text x="235" y="244">0°</text><text x="65" y="67">90°</text>
          <text x="159" y="272" textAnchor="middle">Visited mark and mean position</text>
        </svg>
      </div>
      <div className="reader-figure-visual" tabIndex={0} role="region" aria-label="Corrected distance by step">
        <svg viewBox="0 0 320 282" role="img" aria-labelledby="mirsky-path-distance-title">
          <title id="mirsky-path-distance-title">The distance from the beginning after dividing by lambda to the power k. The dot shows the selected step.</title>
          {[0, .1, .2, .3].map((value) => <g key={value}>
            <path d={"M44 " + chart(0, value)[1] + "H290"} className="mirsky-gridline" />
            <text x="35" y={chart(0, value)[1] + 5} textAnchor="end">{value.toFixed(1)}</text>
          </g>)}
          <path d="M44 45V222H294" className="mirsky-axis" />
          {pathLabels.map((_, k) => <text key={k} x={chart(k, 0)[0]} y="246" textAnchor="middle">{k}</text>)}
          <polyline points={correctedDistances.map((value, k) => chart(k, value).join(",")).join(" ")} className="mirsky-trial" />
          <polyline points={trace.map((value, k) => chart(k, value).join(",")).join(" ")} className="mirsky-path" data-mirsky-trace />
          <circle cx={chartX} cy={chartY} r="5.5" className="mirsky-mark mirsky-interior" data-mirsky-mark="distance" />
          <text x="165" y="272" textAnchor="middle">Distance |Yₖ − Y₀| by step k</text>
        </svg>
      </div>
    </div>
    <div className="reader-average-controls mirsky-controls">
      <label htmlFor="mirsky-path-step">Step along the path <strong><span data-mirsky-text="step">{step}</span> of {finalStep}</strong></label>
      <input id="mirsky-path-step" type="range" min={0} max={finalStep} defaultValue={step} disabled data-mirsky-control />
      <div className="reader-average-presets">
        <button type="button" disabled data-mirsky-control data-mirsky-previous>Previous step</button>
        <button type="button" disabled data-mirsky-control data-mirsky-next>Next step</button>
        <button type="button" disabled data-mirsky-control data-mirsky-play>Play path</button>
        <button type="button" disabled data-mirsky-control data-mirsky-go="3">Go to step 3</button>
        <button type="button" disabled data-mirsky-control data-mirsky-go="6">Go to step 6</button>
      </div>
      <output className="mirsky-status mirsky-path-status" htmlFor="mirsky-path-step" aria-live="polite" data-mirsky-text="path-status">
        Step {step}. Label {label} is at {label * 10}°. The mean angle is {step * 15}°.
        The corrected distance is {distance}, with largest distance so far {largest}.
      </output>
    </div>
  </div>;
}

const loopMarks = Array.from({ length: 5 }, (_, j) => onCircle(1, j * Math.PI / 8));
const loopPlane = { cx: 52, cy: 179, scale: 144 };

export function LoopErasure() {
  return <div className="mirsky-experiment mirsky-loop" data-mirsky-loops>
    <div className="reader-figure-visual" tabIndex={0} role="region" aria-label="Path in an annulus before or after loop erasure">
      <svg viewBox="0 0 270 215" role="img" aria-labelledby="mirsky-loop-title">
        <title id="mirsky-loop-title" data-mirsky-text="loop-title">Path from A to B to C, back to B, then through D to E.</title>
        <path d="M182 179 A130 130 0 0 0 52 49 M210 179 A158 158 0 0 0 52 21" className="mirsky-unit" />
        <polyline points={pointList([0, 1, 3, 4].map((j) => loopMarks[j]), loopPlane)} className="mirsky-path" />
        <path d="M185 124 Q168 98 154 77 Q184 96 185 124" className="mirsky-chord mirsky-loop-edges" data-mirsky-loop-edges />
        {loopMarks.map((point, j) => {
          const [x, y] = projected(point, loopPlane);
          return <g key={j} data-mirsky-loop-c={j === 2 || undefined}><Mark at={point} plane={loopPlane} kind="mirsky-fixed" />
            <text x={x + 12} y={y - 2}>{String.fromCharCode(65 + j)}</text></g>;
        })}
      </svg>
    </div>
    <div className="mirsky-readout">
      <div aria-live="polite">
        <p className="mirsky-readout-heading" data-mirsky-text="loop-heading">Original path</p>
        <p data-mirsky-text="loop-sequence">A, B, C, B, D, E</p>
        <p data-mirsky-text="loop-status">Five edges. B occurs twice.</p>
      </div>
      <div className="reader-average-presets">
        <button type="button" aria-pressed="false" disabled data-mirsky-control data-mirsky-erase>Erase the loop</button>
      </div>
    </div>
  </div>;
}

const inradius = Math.cos(Math.PI / 8);
const inset: Plane = { cx: 144, cy: 149, scale: 102 };
const midpoint = onCircle(inradius, Math.PI / 8);

export function Incircle() {
  return <div className="mirsky-diagram-grid">
    <div className="reader-figure-visual" tabIndex={0} role="region" aria-label="The incircle and the side of a regular octagon">
      <svg viewBox="0 0 332 298" role="img" aria-labelledby="mirsky-disk-title">
        <title id="mirsky-disk-title">A regular octagon inside the unit circle. Its inscribed disk touches the midpoint of each side.</title>
        <circle cx={inset.cx} cy={inset.cy} r={inset.scale} className="mirsky-unit" />
        <circle cx={inset.cx} cy={inset.cy} r={inset.scale * inradius} className="mirsky-disk" />
        <polygon points={pointList(regularPolygon(8), inset)} className="mirsky-outline" />
        <polygon points={pointList([[0, 0], [1, 0], midpoint], inset)} className="mirsky-triangle" />
        <Mark at={midpoint} plane={inset} kind="mirsky-interior" />
        <text x="149" y="174">0</text><text x="256" y="155">1</text>
        <text x="170" y="128">π/8</text><text x="215" y="91" className="mirsky-label-accent">side midpoint</text>
        <text x="144" y="275" textAnchor="middle">Regular octagon and its inscribed disk</text>
      </svg>
    </div>
    <div className="mirsky-readout">
      <p className="mirsky-readout-heading">Distance to the side</p>
      <p>The hypotenuse is the unit radius ending at 1. The shorter leg from 0 to the midpoint has length cos(π/8).</p>
      <p>For order N the same angle is π/N. Any point outside the union also lies outside the inscribed disk.</p>
    </div>
  </div>;
}

const etaModel: Point = [4 / 5 + sideEnd[0] / 5, sideEnd[1] / 5];
const trialOnRay = onCircle(.9, Math.PI / 8);
const normalPlane = { cx: 87, cy: 191, scale: 197 };

export function CompareRays() {
  const etaRadiusSquared = etaModel[0] ** 2 + etaModel[1] ** 2;
  const rayLoss = etaRadiusSquared - inradius ** 2;
  return <div className="mirsky-diagram-grid">
    <div className="reader-figure-visual" tabIndex={0} role="region" aria-label="Two distinct rays meeting the same side">
      <svg viewBox="0 0 350 233" role="img" aria-labelledby="mirsky-rays-title">
        <title id="mirsky-rays-title">The ray of eta meets the side nearer one, and the ray of z meets it at the midpoint. The radius on the ray of z reaches past z.</title>
        <polyline points={pointList([[1, 0], sideEnd], normalPlane)} className="mirsky-outline" />
        <polyline points={pointList([[0, 0], etaModel], normalPlane)} className="mirsky-trial" />
        <polyline points={pointList([[0, 0], midpoint], normalPlane)} className="mirsky-path" />
        <Mark at={etaModel} plane={normalPlane} kind="mirsky-interior" />
        <Mark at={midpoint} plane={normalPlane} kind="mirsky-target" />
        <Mark at={trialOnRay} plane={normalPlane} kind="mirsky-fixed" />
        <text x="76" y="211">0</text><text x="293" y="196">1</text>
        <text x="191" y="42">exp(iπ/4)</text>
        <text x="283" y="158" className="mirsky-label-accent">η</text>
        <text x="241" y="144">z</text><text x="273" y="110">ρ₈(θ)</text>
        <text x="186" y="226" textAnchor="middle">Two rays to one side</text>
      </svg>
    </div>
    <div className="mirsky-readout">
      <p className="mirsky-readout-heading">Compare squared radii</p>
      <dl>
        <div><dt>Margin |η|² − |z|²</dt><dd>{(etaRadiusSquared - .81).toFixed(4)}</dd></div>
        <div><dt>Cost of changing the angle</dt><dd>{rayLoss.toFixed(4)}</dd></div>
      </dl>
      <p>The margin covers the cost. The side still lies beyond z on its own ray.</p>
    </div>
  </div>;
}

const spiralPlane = { cx: 155, cy: 150, scale: 106 };
const spiral = Array.from({ length: 25 }, (_, k) => onCircle(Math.exp(-.012 * k), Math.PI * k / 12));
const innerDisk = Math.exp(-.012 * 24) * Math.cos(Math.PI / 24);

export function SmallTurn() {
  return <div className="mirsky-diagram-grid">
    <div className="reader-figure-visual" tabIndex={0} role="region" aria-label="One turn of the powers of a complex multiplier">
      <svg viewBox="0 0 330 296" role="img" aria-labelledby="mirsky-spiral-title">
        <title id="mirsky-spiral-title">Twenty-five points through one turn. Their distances from zero decrease slowly. A disk fits inside their hull.</title>
        <circle cx={spiralPlane.cx} cy={spiralPlane.cy} r={spiralPlane.scale} className="mirsky-unit" />
        <circle cx={spiralPlane.cx} cy={spiralPlane.cy} r={spiralPlane.scale * innerDisk} className="mirsky-disk" />
        <polyline points={pointList(spiral, spiralPlane)} className="mirsky-path" />
        {spiral.map((point, index) => {
          const [cx, cy] = projected(point, spiralPlane);
          return <circle key={index} cx={cx} cy={cy} r={index === 0 ? 5 : 2.4} className={index === 0 ? "mirsky-interior" : "mirsky-fixed"} />;
        })}
        <text x="270" y="153">1</text>
        <text x="162" y="145" textAnchor="middle">Guaranteed disk</text>
        <text x="157" y="279" textAnchor="middle">Powers from λ⁰ through λ²⁴</text>
      </svg>
    </div>
    <div className="mirsky-readout">
      <p className="mirsky-readout-heading">Find a point near every direction</p>
      <p>Each step turns by 15°. The nearest visited direction is within 7.5°, and every point is at radius at least exp(−.288).</p>
      <p>The product exp(−.288) cos(π/24) gives the shaded radius by projection.</p>
    </div>
  </div>;
}
