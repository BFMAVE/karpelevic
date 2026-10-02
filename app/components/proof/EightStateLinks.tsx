import { Fragment } from "react";

export const eightStateRows = [
  { state: 0, targets: [{ state: 3, weight: "1" }] },
  { state: 1, targets: [{ state: 4, weight: "1" }] },
  { state: 2, targets: [{ state: 5, weight: "1" }] },
  { state: 3, targets: [{ state: 6, weight: "1" }] },
  { state: 4, targets: [{ state: 7, weight: "1" }] },
  { state: 5, targets: [{ state: 0, weight: "1" }] },
  { state: 6, targets: [{ state: 0, weight: "β" }, { state: 1, weight: "α" }], contact: 1 },
  { state: 7, targets: [{ state: 1, weight: "β" }, { state: 2, weight: "α" }], contact: 2 },
] as const;

function Coordinate({ index }: { index: number }) {
  return <msub><mi>v</mi><mn>{index}</mn></msub>;
}

function MatrixEntry({ row, column }: { row: number; column: number }) {
  return <msub><mi>M</mi><mrow><mn>{row}</mn><mo>,</mo><mn>{column}</mn></mrow></msub>;
}

export function EightStateLinks() {
  return <section className="eight-state-links" data-eight-state-links data-eight-state-default="6" aria-label="Connect an eight-state matrix row to its coordinate and image">
    <div className="eight-state-controls" data-eight-state-controls hidden>
      <label htmlFor="eight-state-row">Choose a matrix row / state</label>
      <select id="eight-state-row" data-eight-state-select defaultValue="6" aria-controls="eight-state-selected-relation">
        {eightStateRows.map(row => <option key={row.state} value={row.state}>State {row.state}{row.state >= 6 ? " — averaging row" : " — deterministic row"}</option>)}
      </select>
    </div>
    <div id="eight-state-selected-relation" className="eight-state-relation">
      {eightStateRows.map(row => {
        const branching = "contact" in row;
        const spoken = branching
          ? `Row ${row.state}: z times v ${row.state} equals beta times v ${row.targets[0].state} plus alpha times v ${row.targets[1].state}, which is contact c ${row.contact}.`
          : `Row ${row.state}: z times v ${row.state} equals v ${row.targets[0].state}.`;
        return <div key={row.state} data-eight-state-relation={row.state} data-eight-state-announcement-text={spoken} hidden={row.state !== 6}>
          <p><strong>Row {row.state}: {branching ? "a strict convex average" : "one deterministic destination"}.</strong></p>
          <math display="block" aria-label={spoken}>
            <mrow><mi>z</mi><Coordinate index={row.state} /><mo>=</mo>
              {row.targets.map((target, index) => <Fragment key={target.state}>
                {index > 0 ? <mo>+</mo> : null}
                {target.weight !== "1" ? <mi>{target.weight}</mi> : null}
                <Coordinate index={target.state} />
              </Fragment>)}
              {branching ? <><mo>=</mo><msub><mi>c</mi><mn>{row.contact}</mn></msub></> : null}
            </mrow>
          </math>
          <p>Its nonzero matrix {branching ? "entries are" : "entry is"}{" "}
            <math>
              <mrow>{row.targets.map((target, index) => <Fragment key={target.state}>
                {index > 0 ? <mo>,</mo> : null}
                <MatrixEntry row={row.state} column={target.state} /><mo>=</mo>
                {target.weight === "1" ? <mn>1</mn> : <mi>{target.weight}</mi>}
              </Fragment>)}</mrow>
            </math>.
          </p>
          <p>{branching
            ? "The two outgoing edges supply two terms of the average. Positive weights summing to one place the image strictly inside the side joining those two coordinates."
            : "The weight-one edge sends this coordinate exactly to its destination coordinate. Its image marker coincides with that polygon vertex."}</p>
        </div>;
      })}
    </div>
    <p className="eight-state-key"><strong>Double circle:</strong> selected source coordinate. <strong>Diamond:</strong> its image. <strong>Triangles:</strong> the coordinate or coordinates used in its row average. The adjacent graph shows that row&apos;s outgoing edges; the complete graph above identifies the same row.</p>
    <p className="visually-hidden" data-eight-state-announcement role="status" aria-live="polite" aria-atomic="true" />
  </section>;
}
