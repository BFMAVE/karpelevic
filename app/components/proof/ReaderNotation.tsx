import { readerNotationEntries, readerNotationHtml } from "../../data/reader-notation";
import { toRomanNumeral } from "../../data/proof-reader";

export { readerNotationEntries } from "../../data/reader-notation";

export function ReaderNotation({ number }: { number: number }) {
  const searchEntries = readerNotationEntries(number);
  return <details className="reader-notation" data-reader-notation>
    <summary>Notation for Topic {toRomanNumeral(number)}</summary>
    <div className="reader-notation-body" tabIndex={0} role="region" aria-label={"Notation definitions for Topic " + toRomanNumeral(number)}>
      <label hidden data-notation-search-label>Find a symbol or term<input type="search" data-notation-search placeholder="For example: winding, kappa, radius" /></label>
      <dl>{readerNotationHtml(number).map(({ termHtml, meaningHtml }, index) => <div key={index} data-notation-entry data-notation-search-text={searchEntries[index].join(" ")}>
        <dt dangerouslySetInnerHTML={{ __html: termHtml }} />
        <dd dangerouslySetInnerHTML={{ __html: meaningHtml }} />
      </div>)}</dl>
      <p data-notation-search-status aria-live="polite" />
    </div>
  </details>;
}
