(() => {
  const reader = document.querySelector("[data-proof-reader]");
  if (!reader) return;

  const panels = Array.from(reader.querySelectorAll("[data-topic-slug]"));
  const links = Array.from(reader.querySelectorAll("[data-proof-target]"));
  const indexLinks = Array.from(reader.querySelectorAll(".proof-topic-link"));
  const counter = reader.querySelector(".proof-topic-counter");
  const readingModeButtons = Array.from(
    reader.querySelectorAll("[data-reading-mode-button]"),
  );
  const readingControls = reader.querySelector("[data-proof-reading-controls]");
  const guidedLayers = Array.from(
    reader.querySelectorAll("[data-guided-layer]"),
  );
  const totalTopics = Math.max(0, Number(reader.dataset.totalTopics) || panels.length);

  function toRomanNumeral(number) {
    const value = Math.max(0, Number(number) || 0);
    if (!Number.isFinite(value) || value <= 0) return null;

    const numerals = [
      [1000, "M"],
      [900, "CM"],
      [500, "D"],
      [400, "CD"],
      [100, "C"],
      [90, "XC"],
      [50, "L"],
      [40, "XL"],
      [10, "X"],
      [9, "IX"],
      [5, "V"],
      [4, "IV"],
      [1, "I"],
    ];

    let remainder = Math.trunc(value);
    let result = "";

    for (const [amount, numeral] of numerals) {
      const repeats = Math.floor(remainder / amount);
      if (repeats > 0) {
        result += numeral.repeat(repeats);
        remainder -= repeats * amount;
      }
    }

    return result || null;
  }

  function topicLabel(index) {
    return toRomanNumeral(index + 1) || String(index + 1);
  }

  function totalTopicLabel() {
    return toRomanNumeral(totalTopics) || String(totalTopics || 0);
  }

  function setReadingMode(mode) {
    const resolvedMode = mode === "compact" ? "compact" : "guided";
    reader.dataset.readingMode = resolvedMode;

    readingModeButtons.forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.readingModeButton === resolvedMode),
      );
    });

    guidedLayers.forEach((layer) => {
      layer.open = resolvedMode === "guided";
    });
  }

  function panelForHash(hash) {
    if (!hash) return panels[0];
    if (!panels.length) return undefined;
    const target = document.getElementById(hash.replace(/^#/, ""));
    return target?.closest("[data-topic-slug]") || panels[0];
  }

  function showPanel(panel, shouldFocus) {
    if (!panel || !panel.dataset) return;
    const slug = panel.dataset.topicSlug;
    const index = panels.indexOf(panel);
    if (index < 0) return;

    panels.forEach((candidate) => {
      candidate.hidden = candidate !== panel;
    });

    indexLinks.forEach((link) => {
      if (link.dataset.proofTarget === slug) {
        link.setAttribute("aria-current", "step");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    if (counter) {
      counter.textContent = `Topic ${topicLabel(index)} of ${totalTopicLabel()}`;
    }

    if (shouldFocus) {
      const heading = panel.querySelector("h2");
      if (heading) {
        heading.setAttribute("tabindex", "-1");
        if (typeof heading.focus === "function") {
          heading.focus({ preventScroll: true });
        }
      }
      if (typeof reader.scrollIntoView === "function") {
        reader.scrollIntoView({ block: "start" });
      }
    }
  }

  function revealAnchor(anchorId, shouldFocus) {
    if (!anchorId) return;
    const target = document.getElementById(anchorId);
    if (!target) return;
    const panel = target.closest("[data-topic-slug]");
    if (panel) showPanel(panel, false);

    requestAnimationFrame(() => {
      if (typeof target.scrollIntoView === "function") {
        target.scrollIntoView({ block: "start" });
      }
      if (shouldFocus && typeof target.focus === "function") {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    });
  }

  function onPanelClick(link) {
    const panel = panels.find(
      (candidate) => candidate.dataset.topicSlug === link.dataset.proofTarget,
    );
    if (!panel) return;

    link.addEventListener("click", (event) => {
      event.preventDefault();
      const anchorId = link.dataset.proofAnchor;
      history.pushState({}, "", `#${anchorId || panel.id}`);
      if (anchorId) {
        revealAnchor(anchorId, true);
      } else {
        showPanel(panel, true);
      }
    });
  }

  links.forEach(onPanelClick);

  readingModeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setReadingMode(button.dataset.readingModeButton);
    });
  });

  window.addEventListener("popstate", () => {
    showPanel(panelForHash(window.location.hash), false);
    const anchorId = window.location.hash.replace(/^#/, "");
    revealAnchor(anchorId, false);
  });

  window.addEventListener("hashchange", () => {
    showPanel(panelForHash(window.location.hash), false);
    const anchorId = window.location.hash.replace(/^#/, "");
    revealAnchor(anchorId, false);
  });

  function initializeReader() {
      showPanel(panelForHash(window.location.hash), false);
      setReadingMode(reader.dataset.readingMode);
      const anchorId = window.location.hash.replace(/^#/, "");
      if (anchorId && !anchorId.startsWith("topic-")) {
        revealAnchor(anchorId, false);
      }
      if (readingControls) {
        readingControls.dataset.enhanced = "true";
        readingControls.hidden = false;
      }
  }

  if (document.readyState === "complete") {
    window.setTimeout(initializeReader, 0);
  } else {
    window.addEventListener("load", initializeReader, { once: true });
  }
})();
