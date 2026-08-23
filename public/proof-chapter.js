(() => {
  function enhanceProofChapters() {
    const chapters = Array.from(
      document.querySelectorAll("[data-proof-chapter]"),
    );

    chapters.forEach((chapter) => {
      const controls = chapter.querySelector("[data-proof-chapter-controls]");
      if (!controls) return;

      const modeButtons = Array.from(
        controls.querySelectorAll("[data-chapter-reading-mode-button]"),
      );
      const proofButtons = Array.from(
        controls.querySelectorAll("[data-chapter-proofs]"),
      );
      const proofs = Array.from(
        chapter.querySelectorAll("details.proof-chapter-proof"),
      );
      const announcement = controls.querySelector(
        "[data-proof-chapter-announcement]",
      );
      let printState = [];

      function announce(message) {
        if (announcement) announcement.textContent = message;
      }

      function setMode(mode, shouldAnnounce) {
        const resolvedMode = mode === "formal" ? "formal" : "guided";
        chapter.dataset.chapterReadingMode = resolvedMode;
        modeButtons.forEach((button) => {
          button.setAttribute(
            "aria-pressed",
            String(button.dataset.chapterReadingModeButton === resolvedMode),
          );
        });
        if (shouldAnnounce) {
          announce(
            resolvedMode === "formal"
              ? "Formal view selected. Added vocabulary, intuition, and guided proof notes are hidden."
              : "Guided view selected. Added explanatory layers are available again.",
          );
        }
      }

      function updateProofButtons() {
        const allOpen = proofs.length > 0 && proofs.every((proof) => proof.open);
        const allClosed = proofs.every((proof) => !proof.open);
        proofButtons.forEach((button) => {
          button.disabled =
            button.dataset.chapterProofs === "open" ? allOpen : allClosed;
        });
      }

      function setProofsOpen(open) {
        proofs.forEach((proof) => {
          proof.open = open;
        });
        updateProofButtons();
        announce(
          `${proofs.length} complete proof${proofs.length === 1 ? "" : "s"} ${
            open ? "opened" : "closed"
          }.`,
        );
      }

      modeButtons.forEach((button) => {
        button.addEventListener("click", () => {
          setMode(button.dataset.chapterReadingModeButton, true);
        });
      });

      proofButtons.forEach((button) => {
        button.addEventListener("click", () => {
          setProofsOpen(button.dataset.chapterProofs === "open");
        });
      });

      proofs.forEach((proof) => {
        proof.addEventListener("toggle", updateProofButtons);
      });

      window.addEventListener("beforeprint", () => {
        if (printState.length > 0) return;
        printState = Array.from(
          chapter.querySelectorAll("details"),
          (details) => [details, details.open],
        );
        printState.forEach(([details]) => {
          details.open = true;
        });
      });

      window.addEventListener("afterprint", () => {
        printState.forEach(([details, wasOpen]) => {
          details.open = wasOpen;
        });
        printState = [];
        updateProofButtons();
      });

      setMode(chapter.dataset.chapterReadingMode, false);
      updateProofButtons();
      controls.dataset.enhanced = "true";
      controls.hidden = false;
    });
  }

  // The controls live inside server-rendered React markup. Wait until the
  // initial page load has completed before changing attributes, so React can
  // hydrate the untouched server tree first.
  if (document.readyState === "complete") {
    window.setTimeout(enhanceProofChapters, 0);
  } else {
    window.addEventListener(
      "load",
      () => window.setTimeout(enhanceProofChapters, 0),
      { once: true },
    );
  }
})();
