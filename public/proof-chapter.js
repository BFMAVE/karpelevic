(() => {
  function enhanceProofChapters() {
    document.querySelectorAll("[data-projection-controls]").forEach((controls) => {
      const figure = controls.closest(".reader-teaching-figure");
      const phases = Array.from(figure.querySelectorAll("[data-projection-phase]"));
      const buttons = Array.from(controls.querySelectorAll("[data-projection-step]"));
      const status = figure.querySelector("[data-projection-status]");
      const explanations = [
        "The convex chain, its fixed contacts, and the two target lines.",
        "Project X₀ through the fixed contact C₂ onto the exposing line L₂. The intersection is Z₂.",
        "Project Z₂ from X₃ onto the contact line K. The final point lies strictly between C₂ and C₃.",
      ];
      function showStep(step) {
        phases.forEach((phase) => phase.toggleAttribute("hidden", Number(phase.dataset.projectionPhase) > step));
        buttons.forEach((button) => button.setAttribute("aria-pressed", String(Number(button.dataset.projectionStep) === step)));
        if (status) status.textContent = explanations[step - 1];
      }
      buttons.forEach((button) => button.addEventListener("click", () => showStep(Number(button.dataset.projectionStep))));
      showStep(3);
      controls.hidden = false;
    });
    const directories = Array.from(document.querySelectorAll("[data-reader-directory], [data-reader-section-directory]"));
    const compact = window.matchMedia("(max-width: 860px)");
    function sizeDirectory() {
      directories.forEach((directory) => { directory.open = !compact.matches; });
    }
    sizeDirectory();
    compact.addEventListener("change", sizeDirectory);
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
        if (resolvedMode === "formal") {
          proofs.forEach((proof) => { proof.open = true; });
          updateProofButtons();
        }
        if (shouldAnnounce) {
          announce(
            resolvedMode === "formal"
              ? "Formal view selected. The complete source argument and its proofs are open."
              : "Guided view selected. The illustrated explanation and topic introduction are visible.",
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
        announce(open
          ? "The source argument and all individual proofs are open."
          : "The source argument and all individual proofs are closed.");
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
      function revealSourceTarget() {
        let id;
        try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
        if (!id) return;
        const target = document.getElementById(id);
        if (!target || !chapter.contains(target)) return;
        if (target.closest(".proof-guided-layer")) setMode("guided", true);
        let parent = target.parentElement;
        while (parent && parent !== chapter) {
          if (parent.tagName === "DETAILS") parent.open = true;
          parent = parent.parentElement;
        }
        target.scrollIntoView({ block: "start", behavior: "instant" });
        updateProofButtons();
      }
      revealSourceTarget();
      window.addEventListener("hashchange", revealSourceTarget);
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
