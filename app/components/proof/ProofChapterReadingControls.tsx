export function ProofChapterReadingControls() {
  return (
    <section
      className="proof-chapter-reading-controls"
      aria-labelledby="proof-chapter-reading-controls-heading"
      data-proof-chapter-controls
      hidden
    >
      <div>
        <h2 id="proof-chapter-reading-controls-heading" className="proof-visually-hidden">Choose the reading layer</h2>
      </div>
      <div className="proof-chapter-reading-actions">
        <div role="group" aria-label="Reading layer">
          <span>View</span>
          <button
            aria-pressed="true"
            data-chapter-reading-mode-button="guided"
            type="button"
          >
            Guided lesson
          </button>
          <button
            aria-pressed="false"
            data-chapter-reading-mode-button="formal"
            type="button"
          >
            Source proof
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
