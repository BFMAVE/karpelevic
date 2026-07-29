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
  const guidedLayers = Array.from(
    reader.querySelectorAll("[data-guided-layer]"),
  );
  const totalTopics = Number(reader.dataset.totalTopics) || panels.length;
  const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

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
    const target = document.getElementById(hash.replace(/^#/, ""));
    return target?.closest("[data-topic-slug]") || panels[0];
  }

  function showPanel(panel, shouldFocus) {
    const slug = panel.dataset.topicSlug;
    const index = panels.indexOf(panel);

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
      counter.textContent =
        `Topic ${roman[index] || index + 1} of ${roman[totalTopics - 1] || totalTopics}`;
    }

    if (shouldFocus) {
      const heading = panel.querySelector("h2");
      if (heading) {
        heading.setAttribute("tabindex", "-1");
        heading.focus({ preventScroll: true });
      }
      reader.scrollIntoView({ block: "start" });
    }
  }

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const panel = panels.find(
        (candidate) => candidate.dataset.topicSlug === link.dataset.proofTarget,
      );
      if (!panel) return;
      event.preventDefault();
      history.pushState({}, "", `#${panel.id}`);
      showPanel(panel, true);
    });
  });

  readingModeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setReadingMode(button.dataset.readingModeButton);
    });
  });

  window.addEventListener("popstate", () => {
    showPanel(panelForHash(window.location.hash), false);
  });

  window.addEventListener("hashchange", () => {
    showPanel(panelForHash(window.location.hash), false);
  });

  window.addEventListener(
    "load",
    () => {
      showPanel(panelForHash(window.location.hash), false);
      setReadingMode(reader.dataset.readingMode);
    },
    { once: true },
  );
})();
