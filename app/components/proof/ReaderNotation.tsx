import { readerOrientations } from "../../data/reader-orientation";
import { toRomanNumeral } from "../../data/proof-reader";

const returnSymbols = [
  ["N, κ", "N is the polygon's vertex count (the least realizing order); κ is its cyclic contact shift. Indices are taken modulo N unless continued angles are being used."],
  ["φ, Δ", "Consecutive record deficits φ > ψ give Δ = φ − ψ. The no-skipping argument concerns Δ in its stated non-singleton, interior-contact case."],
  ["q, h; a, b", "h is the earlier record time and q is the time difference to the next record. The two tower heights are a = q + h and b = q. Topic VII establishes q's Farey role in the ordinary coprime case."],
];
const angleSymbols = [
  ["ζ, λ; θζ versus θ", "Topics II–VII choose θζ in (0,2π), fixing it again after conjugation. From Topic VIII, θ is the original upper-ray angle in [0,π] used by Kₙ(θ). Symbols ζ and λ retain their local source meanings."],
  ["ω, ϑ; y", "ω is the oriented multiplier, possibly the conjugate of the original one. Its continued rotation angle ϑ corresponds to y = θ/(2π), or y = 1 − θ/(2π) after reflection. Kₙ(θ) still refers to the original upper ray."],
  ["uⱼ versus Φᵢ", "uⱼ is the principal argument of ωᵠ − βⱼ. Φᵢ is a continued vertex angle: Φᵢ₊ₙ = Φᵢ + 2π. Adding the latter retains whole turns; reducing modulo 2π would lose the winding identity."],
  ["p/q < r/s; m, e", "The oriented Farey neighbours put the smaller denominator q on the left. m = floor(N/q), e = s − mq; the closing exponent e can be negative."],
];

export function readerNotationEntries(number: number) {
  const items = readerOrientations[number].definitions.map(({ term, meaning }) => [term, meaning]);
  const inherited = [
    ...(number >= 5 && number <= 7 || number === 14 ? returnSymbols : []),
    ...(number >= 7 ? angleSymbols : []),
    ...(number >= 8 ? [["Θₙ, Rₙ, Kₙ", "Θₙ is the actual eigenvalue region; Rₙ is its actual radial maximum. Kₙ is the scalar candidate, identified with Rₙ for n ≥ 4 only after Topic XII closes the proof."]] : []),
  ];
  return [...inherited, ...items];
}

export function ReaderNotation({ number }: { number: number }) {
  return <details className="reader-notation proof-guided-layer" data-reader-notation>
    <summary>Notation for Topic {toRomanNumeral(number)}</summary>
    <div className="reader-notation-body">
      <label hidden data-notation-search-label>Find a symbol or term<input type="search" data-notation-search placeholder="For example: winding, κ, radius" /></label>
      <dl>{readerNotationEntries(number).map(([term, meaning], index) => <div key={index} data-notation-entry><dt>{term}</dt><dd>{meaning}</dd></div>)}</dl>
      <p data-notation-search-status aria-live="polite" />
    </div>
  </details>;
}
