export function ProofChapterReadingControls() {
  return (
    <section
      className="proof-chapter-reading-controls"
      aria-labelledby="proof-chapter-reading-controls-heading"
      data-proof-chapter-controls
      hidden
    >
      <div>
        <p className="section-label">Reading controls</p>
        <h3 id="proof-chapter-reading-controls-heading">Choose a reading layer</h3>
        <p>
          Guided view keeps the added definitions and explanations available.
          Formal view leaves the manuscript statements and proofs in focus.
        </p>
      </div>
      <div className="proof-chapter-reading-actions">
        <div role="group" aria-label="Reading layer">
          <span>View</span>
          <button
            aria-pressed="true"
            data-chapter-reading-mode-button="guided"
            type="button"
          >
            Guided
          </button>
          <button
            aria-pressed="false"
            data-chapter-reading-mode-button="formal"
            type="button"
          >
            Formal
          </button>
        </div>
        <div role="group" aria-label="Complete proofs">
          <span>Proofs</span>
          <button data-chapter-proofs="open" type="button">
            Open all proofs
          </button>
          <button data-chapter-proofs="close" disabled type="button">
            Close all proofs
          </button>
        </div>
      </div>
      <p
        className="proof-visually-hidden"
        aria-live="polite"
        data-proof-chapter-announcement
      />
    </section>
  );
}
