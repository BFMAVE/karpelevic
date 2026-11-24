import type { ReactNode } from "react";
import { radialBoundaryRadius, upperFarey } from "../../lib/karpelevic-boundary-core.js";
import { ReaderFigureCaption } from "./ReaderFigureCaption";

const ink = "#18334a";
const red = "#8c3429";
const teal = "#315e86";
const copper = "#a24728";
const pale = "#edf1f5";
const faint = "#becbd5";

type Point = { x: number; y: number };

function path(points: Point[]) {
  return points.map((point, i) => `${i ? "L" : "M"}${point.x.toFixed(3)},${point.y.toFixed(3)}`).join(" ");
}

function curve(count: number, start: number, end: number, point: (value: number) => Point) {
  return path(Array.from({ length: count + 1 }, (_, i) => point(start + (end - start) * i / count)));
}

function Dot({ x, y, color = ink, open = false, r = 5 }: Point & { color?: string; open?: boolean; r?: number }) {
  return <circle cx={x} cy={y} r={r} fill={open ? "white" : color} stroke={color} strokeWidth="2" />;
}

function Square({ x, y, color, r = 5 }: Point & { color: string; r?: number }) {
  return <rect x={x - r} y={y - r} width={2 * r} height={2 * r} fill={color} stroke={color} strokeWidth="2" />;
}

function numericalRadius(order: number, x: number) {
  const fractions = upperFarey(order);
  for (let i = 0; i < fractions.length - 1; i++) {
    const left = fractions[i], right = fractions[i + 1];
    if (x >= left.numerator / left.denominator && x <= right.numerator / right.denominator) {
      return radialBoundaryRadius(x, left, right, order);
    }
  }
  throw new RangeError("Late teaching figures require an upper-half angle fraction.");
}

function Axes({ left, top, width, height, xLabel, yLabel }: { left: number; top: number; width: number; height: number; xLabel: string; yLabel: string }) {
  return <g stroke={ink} strokeWidth="1.5">
    <line x1={left} y1={top + height} x2={left + width} y2={top + height} />
    <line x1={left} y1={top} x2={left} y2={top + height} />
    <text x={left + width} y={top + height + 55} textAnchor="end" stroke="none" fill={ink}>{xLabel}</text>
    <text x={left} y={top - 18} stroke="none" fill={ink}>{yLabel}</text>
  </g>;
}

function ScalarFigure() {
  const h = Math.PI / 7;
  const residual = (rho: number) => rho ** 2.5 * Math.sin(h) + rho ** 3 * Math.sin(1.5 * h) - Math.sin(2.5 * h);
  const radius = numericalRadius(7, 5 / 14);
  const sx = (rho: number) => 90 + 580 * rho;
  const sy = (value: number) => 306 - 220 * (value + 0.92) / 1.12;
  const zero = sy(0);
  return <>
    <text x="380" y="33" textAnchor="middle" fill={ink}>Order seven · θ = 5π/7 · interval (1/3, 2/5)</text>
    <Axes left={90} top={68} width={580} height={238} xLabel="radius ρ" yLabel="scalar left side − target" />
    <line x1="90" x2="670" y1={zero} y2={zero} stroke={faint} strokeWidth="2" />
    <path d={curve(120, 0, 1, (rho) => ({ x: sx(rho), y: sy(residual(rho)) }))} fill="none" stroke={red} strokeWidth="3.5" data-scalar-residual />
    <line x1={sx(radius)} x2={sx(radius)} y1={zero} y2="306" stroke={teal} strokeDasharray="5 4" />
    <Dot x={sx(radius)} y={zero} color={teal} />
    <text x="73" y={zero + 6} textAnchor="end" fill={ink}>0</text>
    <text x="90" y="336" fill={ink}>0</text><text x="670" y="336" textAnchor="middle" fill={ink}>1</text>
    <text x="610" y="150" textAnchor="end" fill={teal}>one crossing: K₇ ≈ {radius.toFixed(6)}</text>
    <text x="130" y="225" fill={red}>negative: radius too small</text>
    <text x="380" y="388" textAnchor="middle" fill={ink}>ρ⁵ᐟ² sin(π/7) + ρ³ sin(3π/14) − sin(5π/14)</text>
  </>;
}

function ConvexFigure() {
  const F = (u: number) => -Math.log(Math.cos(u) + Math.sin(u));
  const u0 = Math.PI / 4, u1 = Math.PI / 2, average = 3 * Math.PI / 8;
  const meanValue = (F(u0) + F(u1)) / 2;
  const sx = (x: number) => 85 + 195 * x;
  const sy = (y: number) => 315 - 195 * y;
  const fx = (u: number) => 427 + (u - u0) / (1.9 - u0) * 275;
  const fy = (value: number) => 307 - (value + 0.4) * 210;
  return <>
    <text x="195" y="35" textAnchor="middle" fill={ink}>Normalised factors: x + y = 1</text>
    <text x="568" y="35" textAnchor="middle" fill={ink}>Their logarithmic sizes are convex</text>
    <line x1="55" x2="322" y1={sy(0)} y2={sy(0)} stroke={faint} />
    <line x1={sx(0)} x2={sx(0)} y1="80" y2="337" stroke={faint} />
    <line x1={sx(-.05)} y1={sy(1.05)} x2={sx(1.05)} y2={sy(-.05)} stroke={ink} strokeWidth="2.5" />
    <line x1={sx(0)} y1={sy(0)} x2={sx(.5)} y2={sy(.5)} stroke={red} strokeDasharray="5 4" />
    <line x1={sx(0)} y1={sy(0)} x2={sx(0)} y2={sy(1)} stroke={red} strokeWidth="2" />
    <line x1={sx(0)} y1={sy(0)} x2={sx(1 - Math.SQRT1_2)} y2={sy(Math.SQRT1_2)} stroke={teal} strokeWidth="2.5" />
    <Dot x={sx(.5)} y={sy(.5)} color={red} />
    <Dot x={sx(0)} y={sy(1)} color={red} />
    <Dot x={sx(1 - Math.SQRT1_2)} y={sy(Math.SQRT1_2)} color={teal} />
    <Dot x={sx(1)} y={sy(0)} open />
    <text x="100" y="100" fill={red}>g(1/2) = i</text>
    <text x="190" y="209" fill={red}>g(0) = (1+i)/2</text>
    <text x="174" y="172" fill={teal}>u = 3π/8</text>
    <text x="302" y="343" fill={ink}>1</text><text x="59" y="343" fill={ink}>0</text>
    <Axes left={427} top={72} width={275} height={235} xLabel="factor angle u" yLabel="F(u) = −log(cos u + sin u)" />
    <path d={curve(100, u0, 1.9, (u) => ({ x: fx(u), y: fy(F(u)) }))} stroke={ink} strokeWidth="3" fill="none" />
    <line x1={fx(u0)} y1={fy(F(u0))} x2={fx(u1)} y2={fy(F(u1))} stroke={red} strokeWidth="2.5" />
    <line x1={fx(average)} y1={fy(F(average))} x2={fx(average)} y2={fy(meanValue)} stroke={teal} strokeWidth="3" />
    <Dot x={fx(average)} y={fy(F(average))} color={teal} />
    <Dot x={fx(average)} y={fy(meanValue)} color={red} />
    <text x={fx(u0)} y="335" textAnchor="middle" fill={ink}>π/4</text>
    <text x={fx(average)} y="359" textAnchor="middle" fill={teal}>3π/8</text>
    <text x={fx(u1)} y="335" textAnchor="middle" fill={ink}>π/2</text>
    <text x="380" y="393" textAnchor="middle" fill={ink}>F(average) ≈ −0.2674 &lt; average F ≈ −0.1733</text>
  </>;
}

function GraphNode({ x, y, label, state }: Point & { label: string; state?: number }) {
  return <g data-eight-state-node={state} data-eight-state-role={state === undefined ? undefined : state === 6 ? "source" : state === 0 || state === 1 ? "target" : "other"}><circle cx={x} cy={y} r="19" fill="white" stroke={ink} strokeWidth="2" /><text x={x} y={y + 6} fill={ink} textAnchor="middle">{label}</text></g>;
}

function Edge({ d, label, x, y, marker, color = ink, from, to }: { d: string; label?: string; x?: number; y?: number; marker: string; color?: string; from?: number; to?: number }) {
  return <g data-eight-state-edge-from={from} data-eight-state-edge-to={to} data-eight-state-active={from === undefined ? undefined : String(from === 6)}><path d={d} stroke={color} strokeWidth="2.5" fill="none" markerEnd={`url(#${marker})`} />{label ? <text x={x} y={y} fill={color} textAnchor="middle">{label}</text> : null}</g>;
}

function RealisationFigure({ marker }: { marker: string }) {
  return <>
    <text x="380" y="30" textAnchor="middle" fill={ink}>Six states: q = 3, m = 2, s = 5</text>
    <Edge d="M179 123 L311 123" label="1" x={245} y={110} marker={marker} />
    <Edge d="M349 123 L481 123" label="1" x={415} y={110} marker={marker} />
    <Edge d="M481 276 L349 276" label="1" x={415} y={305} marker={marker} />
    <Edge d="M311 276 L179 276" label="1" x={245} y={305} marker={marker} />
    <Edge d="M486 108 C430 41 219 41 174 108" label="β₀ = 0.4" x={330} y={88} marker={marker} color={red} />
    <Edge d="M174 291 C230 358 441 358 486 291" label="β₁ = 0.7" x={330} y={324} marker={marker} color={red} />
    <Edge d="M500 142 L500 257" label="1−β₀ = 0.6" x={596} y={210} marker={marker} color={teal} />
    <Edge d="M172 259 L318 138" label="1−β₁ = 0.3" x={190} y={198} marker={marker} color={teal} />
    {[[160, 123, "0"], [330, 123, "1"], [500, 123, "2"], [500, 276, "3"], [330, 276, "4"], [160, 276, "5"]].map(([x, y, label]) => <GraphNode key={label} x={Number(x)} y={Number(y)} label={String(label)} />)}
    <text x="380" y="396" textAnchor="middle" fill={ink}>det(tI−M) = (t³−0.4)(t³−0.7) − 0.18t</text>
  </>;
}

function RefinementFigure() {
  const start = 1 / 3, end = 2 / 5, mediant = 3 / 8;
  const sx = (x: number) => 87 + (x - start) / (end - start) * 598;
  const sy = (radius: number) => 307 - (radius - .92) / .085 * 226;
  const worked = 5 / 14;
  return <>
    <text x="380" y="30" textAnchor="middle" fill={ink}>The same angle is compared before and after insertion of 3/8</text>
    <Axes left={87} top={73} width={598} height={234} xLabel="angle fraction x = θ/(2π)" yLabel="candidate radius K" />
    <line x1="87" x2="685" y1={sy(1)} y2={sy(1)} stroke={faint} strokeDasharray="4 4" />
    <line x1={sx(mediant)} x2={sx(mediant)} y1={sy(1)} y2="307" stroke={copper} strokeDasharray="5 5" />
    <path d={curve(120, start, end, (x) => ({ x: sx(x), y: sy(numericalRadius(7, x)) }))} fill="none" stroke={red} strokeWidth="3" data-order-seven-comparison />
    <path d={curve(90, start, mediant, (x) => ({ x: sx(x), y: sy(numericalRadius(8, x)) }))} fill="none" stroke={teal} strokeWidth="3" strokeDasharray="8 5" />
    <path d={curve(60, mediant, end, (x) => ({ x: sx(x), y: sy(numericalRadius(8, x)) }))} fill="none" stroke={teal} strokeWidth="3" strokeDasharray="8 5" />
    <line x1={sx(worked)} x2={sx(worked)} y1={sy(numericalRadius(7, worked))} y2={sy(numericalRadius(8, worked))} stroke={copper} strokeWidth="3" />
    <Dot x={sx(worked)} y={sy(numericalRadius(7, worked))} color={red} />
    <Square x={sx(worked)} y={sy(numericalRadius(8, worked))} color={teal} />
    <text x="67" y={sy(1) + 6} textAnchor="end" fill={ink}>1</text>
    <text x="67" y={sy(.94) + 6} textAnchor="end" fill={ink}>0.94</text>
    <text x={sx(start)} y="339" textAnchor="middle" fill={ink}>1/3</text>
    <text x={sx(mediant)} y="339" textAnchor="middle" fill={copper}>3/8</text>
    <text x={sx(end)} y="339" textAnchor="middle" fill={ink}>2/5</text>
    <text x="193" y="283" fill={red}>order seven</text><text x="520" y="170" fill={teal}>order eight</text>
    <text x="380" y="391" textAnchor="middle" fill={ink}>At x = 5/14: K₇ ≈ 0.944301 &lt; K₈ ≈ 0.970613</text>
  </>;
}

function CompletionFigure() {
  const centre = { x: 211, y: 210 }, scale = 145;
  const cp = (real: number, imaginary: number) => ({ x: centre.x + scale * real, y: centre.y - scale * imaginary });
  const triangle = [cp(1, 0), cp(-.5, Math.sqrt(3) / 2), cp(-.5, -Math.sqrt(3) / 2)];
  const sx = (theta: number) => 462 + (theta - 2 * Math.PI / 3) / (Math.PI / 3) * 238;
  const sy = (radius: number) => 314 - (radius - .45) / .6 * 240;
  return <>
    <text x="208" y="32" textAnchor="middle" fill={ink}>The exact order-three region</text>
    <text x="581" y="32" textAnchor="middle" fill={ink}>Its terminal radial maximum</text>
    <line x1="40" x2="380" y1="210" y2="210" stroke={faint} />
    <line x1="211" x2="211" y1="57" y2="365" stroke={faint} />
    <circle cx="211" cy="210" r={scale} fill="none" stroke={faint} strokeDasharray="5 4" />
    <polygon points={triangle.map(p => `${p.x},${p.y}`).join(" ")} fill={pale} stroke={ink} strokeWidth="2.5" />
    <line x1={cp(-1, 0).x} y1="210" x2={cp(-.5, 0).x} y2="210" stroke={red} strokeWidth="5" />
    {triangle.map((p, i) => <Dot key={i} {...p} />)}
    <Dot {...cp(-1, 0)} color={red} /><Dot {...cp(-.5, 0)} color={red} />
    <text x="362" y="235" fill={ink}>1</text>
    <text x="107" y="76" fill={ink}>ξ</text><text x="107" y="357" fill={ink}>ξ̄</text>
    <text x="57" y="239" fill={red}>−1</text><text x="116" y="239" fill={red}>−1/2</text>
    <text x="222" y="235" fill={ink}>0</text>
    <Axes left={462} top={75} width={238} height={239} xLabel="angle θ" yLabel="R₃(θ)" />
    <path d={curve(90, 2 * Math.PI / 3, Math.PI, theta => ({ x: sx(theta), y: sy(-1 / (2 * Math.cos(theta))) }))} fill="none" stroke={teal} strokeWidth="3" />
    <Dot x={sx(Math.PI)} y={sy(.5)} color={teal} open r={6} />
    <Dot x={sx(Math.PI)} y={sy(1)} color={red} r={6} />
    <text x="442" y={sy(1) + 6} textAnchor="end" fill={ink}>1</text>
    <text x="442" y={sy(.5) + 6} textAnchor="end" fill={ink}>1/2</text>
    <text x="462" y="342" textAnchor="middle" fill={ink}>2π/3</text><text x="700" y="342" textAnchor="middle" fill={ink}>π</text>
    <text x="542" y="129" fill={red}>R₃(π) = 1</text>
    <text x="566" y="213" fill={teal}>limit = 1/2</text>
    <text x="380" y="393" textAnchor="middle" fill={ink}>An extra real segment changes the endpoint value, not nearby nonreal rays.</text>
  </>;
}

function GaugeFigure() {
  const c = { x: 204, y: 196 }, scale = 108;
  const p = (x: number, y: number) => ({ x: c.x + scale * x, y: c.y - scale * y });
  const diamond = (rho: number) => [[0, rho * Math.SQRT2], [rho * Math.SQRT2, 0], [0, -rho * Math.SQRT2], [-rho * Math.SQRT2, 0]].map(([x, y]) => p(x, y));
  const pointString = (points: Point[]) => points.map(point => `${point.x},${point.y}`).join(" ");
  const orders = [4, 6, 8, 12, 16, 24, 32, 48, 64];
  const x = (Math.sqrt(5) - 1) / 4;
  const px = (n: number) => 456 + Math.log2(n / 4) / 4 * 239;
  const py = (loss: number) => 319 - (Math.log10(loss) + 5.5) / 5.3 * 244;
  const worst = (n: number) => 1 / Math.cos(Math.PI / n) - 1;
  const fixed = (n: number) => 1 / numericalRadius(n, x) - 1;
  return <>
    <text x="205" y="32" textAnchor="middle" fill={ink}>Square gauge at θ = π/4</text>
    <text x="579" y="32" textAnchor="middle" fill={ink}>Computed relative gauge loss</text>
    <polygon points={pointString([p(-1, -1), p(1, -1), p(1, 1), p(-1, 1)])} fill={pale} stroke={ink} strokeWidth="2.5" />
    <polygon points={pointString(diamond(.8))} fill="none" stroke={red} strokeWidth="2.5" strokeDasharray="6 4" />
    <polygon points={pointString(diamond(.7))} fill="none" stroke={teal} strokeWidth="3" />
    <Dot {...c} r={3} />
    <text x="113" y="192" fill={teal}>ρ = 0.7</text><text x="249" y="264" fill={red}>ρ = 0.8</text>
    <text x="205" y="349" textAnchor="middle" fill={ink}>V(x,y) = max(|x|,|y|)</text>
    <Axes left={456} top={75} width={239} height={244} xLabel="vertex bound N (log scale)" yLabel="Γₙ/ρ − 1 (log scale)" />
    <path d={path(orders.map(n => ({ x: px(n), y: py(worst(n)) })))} fill="none" stroke={red} strokeWidth="2.5" />
    <path d={path(orders.map(n => ({ x: px(n), y: py(fixed(n)) })))} fill="none" stroke={teal} strokeWidth="2.5" strokeDasharray="7 5" />
    {orders.map(n => <g key={n}><Dot x={px(n)} y={py(worst(n))} color={red} r={3} /><Square x={px(n)} y={py(fixed(n))} color={teal} r={3} /></g>)}
    {[4, 16, 64].map(n => <text key={n} x={px(n)} y="342" fill={ink} textAnchor="middle">{n}</text>)}
    {[.1, .001, .00001].map(loss => <text key={loss} x="446" y={py(loss) + 5} fill={ink} textAnchor="end" fontSize="14">{loss.toExponential(0)}</text>)}
    <text x="520" y="90" fill={red}>worst angle</text><text x="522" y="279" fill={teal}>fixed irrational x</text>
    <text x="380" y="397" textAnchor="middle" fill={ink}>The square image is an exact model. Loss samples use the scalar solver.</text>
  </>;
}

function EightStateFigure({ marker }: { marker: string }) {
  const radius = numericalRadius(8, 5 / 14);
  const beta = 1 / (1 + radius), alpha = 1 - beta;
  return <>
    <text x="380" y="31" textAnchor="middle" fill={ink}>The source&apos;s eight-state stochastic realisation</text>
    <Edge d="M99 139 L171 139" label="1" x={135} y={125} marker={marker} from={0} to={3} />
    <Edge d="M209 139 L281 139" label="1" x={245} y={125} marker={marker} from={3} to={6} />
    <Edge d="M429 139 L501 139" label="1" x={465} y={125} marker={marker} from={1} to={4} />
    <Edge d="M539 139 L611 139" label="1" x={575} y={125} marker={marker} from={4} to={7} />
    <Edge d="M289 122 C252 63 126 63 91 122" label="β" x={190} y={67} marker={marker} color={red} from={6} to={0} />
    <Edge d="M619 122 C582 63 456 63 421 122" label="β" x={520} y={67} marker={marker} color={red} from={7} to={1} />
    <Edge d="M319 139 L391 139" label="α" x={355} y={125} marker={marker} color={teal} from={6} to={1} />
    <Edge d="M630 158 L630 231" label="α" x={654} y={201} marker={marker} color={teal} from={7} to={2} />
    <Edge d="M611 250 L391 250" label="1" x={500} y={275} marker={marker} from={2} to={5} />
    <Edge d="M351 250 L98 151" label="1" x={224} y={230} marker={marker} from={5} to={0} />
    {[[80, 139, "0"], [190, 139, "3"], [300, 139, "6"], [410, 139, "1"], [520, 139, "4"], [630, 139, "7"], [630, 250, "2"], [370, 250, "5"]].map(([x, y, label]) => <GraphNode key={label} x={Number(x)} y={Number(y)} label={String(label)} state={Number(label)} />)}
    <text x="380" y="321" textAnchor="middle" fill={ink}>ρ ≈ {radius.toFixed(8)} · β ≈ {beta.toFixed(6)} · α ≈ {alpha.toFixed(6)}</text>
    <text x="380" y="354" textAnchor="middle" fill={teal}>Each branch row sums to α + β = 1; every other row has weight 1.</text>
    <text x="380" y="390" textAnchor="middle" fill={ink}>θ = 5π/7, u₁ = u₂ = 2π/7 ⇒ 2θ + u₁ + u₂ = 2π</text>
  </>;
}

const copy: Record<number, { title: string; description: string; caption: string }> = {
  8: { title: "The radius is the zero of an increasing function", description: "The horizontal axis runs from radius zero to radius one. The vertical axis measures the left side of the order-seven equation minus its target on the ray at five pi over seven. The curve rises from below zero and crosses the horizontal zero line at about 0.944301. A dashed vertical line marks that radius.", caption: "At order seven the ray between 1/3 and 2/5 of a turn gives q=3, s=5 and m=2. Subtract the target from the left side of the equation. A negative value means that the trial radius is too small. At radius one the value is positive. The two powers of the radius increase strictly, giving one crossing between zero and one. The curve joins 121 computed values, and bisection locates the marked crossing." },
  9: { title: "How the mean angle lowers the product", description: "For w=(1+i)/2, the left panel marks two factors on the line x+y=1. The ray to the point (one half, one half) makes an angle of pi over four, and the ray to i makes an angle of pi over two. A third ray bisects these angles. On the right, directly above their mean angle three pi over eight, a dot on the graph lies below a dot on the chord joining the two original graph points.", caption: "The two selected weights, 0 and 1/2, give the angles π/4 and π/2. On the right, F(u)=−log(cos u+sin u) is the logarithm of the distance from zero to the line along the ray at u. The red chord gives the average of the two original heights, about −0.1733. At the same horizontal position the graph has height F(3π/8)≈−0.2674. Giving both factors this mean angle therefore reduces the sum of their logarithms, and hence their product of lengths." },
  10: { title: "Three cycles determine the six-state polynomial", description: "The upper row of arrows gives the cycle zero, one, two, zero with return probability 0.4. The lower row gives three, four, five, three with return probability 0.7. Two further arrows, from two to three and from five to one, have probabilities 0.6 and 0.3. Together with the arrows of weight one they complete a third cycle, one, two, three, four, five, one.", caption: "Start at state 2. Its red arrow returns to 0 and closes the first three-cycle. At state 5 the red arrow closes the other three-cycle. These cycles share no state, so their contributions give the product (t³−0.4)(t³−0.7). Taking both blue arrows instead gives a five-cycle of weight 0.6×0.3=0.18. It meets both three-cycles and leaves one state unused, accounting for the term −0.18t in det(tI−M)." },
  11: { title: "Comparing seven and eight states on the same rays", description: "Both curves start at radius one at one third of a turn and end at radius one at two fifths. The solid red curve represents seven states. The dashed blue curve for eight states also reaches one at three eighths, a new endpoint. At the mark five fourteenths, a vertical line joins the lower circle at 0.944301 to the higher square at 0.970613.", caption: "Use a vertical line to compare the two radii at a fixed angle. At 5/14 of a turn, the circle marks the radius for seven states and the square marks the radius for eight. At 3/8 the new curve reaches one because this fraction has just become an endpoint. The proof gives a strictly larger radius throughout each new open interval. At the old endpoints 1/3 and 2/5 the radii still agree." },
  12: { title: "Why the radius jumps at the negative real axis", description: "The left panel shows the triangle with vertices one and the two nonreal cube roots of unity. A segment continues from its left side at minus one half to minus one on the real axis. The right panel shows the greatest radius as the ray turns from two pi over three towards pi. The curve tends to an open dot at one half. A filled dot directly above it marks radius one at pi.", caption: "Follow the ray towards the negative real axis. Until it reaches that axis, it meets the vertical side of the triangle at real part −1/2, so R₃(θ)=−1/(2cos θ) for 2π/3≤θ<π. The radius tends to 1/2. At θ=π the ray lies along the extra segment and goes all the way to −1. The two dots show the limit and the actual value at the same angle." },
  13: { title: "What a polygon measures after rotation", description: "On the left, rotate a centred square through pi over four and shrink it by 0.7 or by 0.8. The first diamond fits inside the square. A corner of the second extends beyond its side. On the right, both logarithmic axes show how the excess in the factor changes with the number of vertices, from four to sixty-four. Red circles on a solid line are worst angles. Blue squares on a dashed line use the fixed fraction of a turn (square root of five minus one) divided by four.", caption: "In the square P=[−1,1]² the gauge is max(|x|,|y|). After rotation by π/4 the extreme coordinates are 0.7√2≈0.98995 or 0.8√2≈1.13137 for the two dilations. At this angle no quadrilateral improves on the square. On the right we plot the relative excess Γₙ/ρ−1=1/Kₙ−1 for vertex counts 4, 6, 8, 12, 16, 24, 32, 48 and 64. The circles use the worst value sec(π/N)−1. The squares use the same irrational angular fraction x=(√5−1)/4 at every count. The lines join samples on logarithmic axes." },
  14: { title: "Read the eight-state matrix from its arrows", description: "The paths zero to three to six, one to four to seven, and two to five to zero use arrows of probability one. From six, arrows go to zero with probability beta and to one with probability alpha. From seven they go to one with probability beta and to two with probability alpha. The numerical labels use the radius at angle five pi over seven, with beta equal to one over one plus rho and alpha equal to rho over one plus rho.", caption: "Follow an arrow from i to j to find the entry in row i, column j. In each of six rows the probability one forces the image to be the coordinate at the unique destination. Rows 6 and 7 give two weighted averages. Substituting the eigenvector from the lesson checks all eight equations, and the angles in the product add up to one turn. The node positions here show which states connect. The octagon below plots their complex coordinates." },
};

const captionNotes: Record<number, { takeaway: string; status: string }> = {
  8: { takeaway: "Read the radius below the crossing. On this ray the equation gives about 0.944301.", status: "The curve samples the order-seven equation. The endpoint signs and strict increase prove that the root exists and is unique." },
  9: { takeaway: "Replace the angles π/4 and π/2 by two angles of 3π/8. Their sum stays the same, and the product of the two lengths decreases.", status: "The line is exact and the graph of F is sampled. The example illustrates convexity alone. Whether factors also satisfy the eigenvalue product is a separate condition." },
  10: { takeaway: "The two disjoint three-cycles can occur together in the determinant. The five-cycle meets both, so it contributes a term of its own.", status: "The arrows and their probabilities specify an exact matrix. Their layout is schematic. This example allows unequal weights and establishes no boundary property for the other roots." },
  11: { takeaway: "The extra state inserts the fraction 3/8. Between the two old endpoints the new radius is larger, including at 3/8 itself.", status: "Each curve joins sampled roots of the scalar equation. The strict comparison follows from the proof. There is no error bound here for the connecting line segments." },
  12: { takeaway: "A ray just above the negative real axis meets the triangle near −1/2. The negative real ray itself reaches −1.", status: "The triangle and segment on the left are drawn to scale with the unit circle dashed. The graph on the right samples the explicit radius formula." },
  13: { takeaway: "The square detects contraction for the dilation 0.7. For 0.8 an image corner falls outside. With more vertices the smallest possible excess depends on the angle.", status: "The square calculation is exact. The blue samples use numerical radii at a badly approximable angle, the hypothesis for the N⁻³ estimate." },
  14: { takeaway: "Row 6 averages coordinates 0 and 1. Row 7 averages coordinates 1 and 2. The other six rows copy the coordinate at their single destination.", status: "The connections are exact. State positions are schematic and the displayed probabilities are rounded." },
};

export function ReaderLateFigure({ number }: { number: number }) {
  const content = copy[number];
  if (!content) return null;
  const marker = `reader-late-${number}-arrow`;
  let drawing: ReactNode;
  switch (number) {
    case 8: drawing = <ScalarFigure />; break;
    case 9: drawing = <ConvexFigure />; break;
    case 10: drawing = <RealisationFigure marker={marker} />; break;
    case 11: drawing = <RefinementFigure />; break;
    case 12: drawing = <CompletionFigure />; break;
    case 13: drawing = <GaugeFigure />; break;
    case 14: drawing = <EightStateFigure marker={marker} />; break;
    default: return null;
  }
  return <figure className="reader-teaching-figure" data-reader-late-figure={number}>
    <h4>{content.title}</h4>
    <div className="reader-figure-visual" tabIndex={0} role="region" aria-label={`${content.title}. Scroll horizontally when needed to see the full diagram.`}>
      <svg viewBox="0 0 760 420" role="img" aria-labelledby={`reader-late-${number}-title reader-late-${number}-desc`} fontSize="17" fontFamily="inherit">
        <title id={`reader-late-${number}-title`}>{content.title}</title>
        <desc id={`reader-late-${number}-desc`}>{content.description}</desc>
        <defs><marker id={marker} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="context-stroke" /></marker></defs>
        {drawing}
      </svg>
    </div>
    <ReaderFigureCaption takeaway={captionNotes[number].takeaway} status={captionNotes[number].status}>{content.caption}</ReaderFigureCaption>
  </figure>;
}
