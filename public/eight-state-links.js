(() => {
  function enhanceEightStateLinks() {
    document.querySelectorAll("[data-eight-state-links]").forEach((links) => {
      if (links.dataset.eightStateEnhanced === "true") return;
      const scope = links.closest(".reader-guide") || links.closest("[data-proof-chapter]") || document;
      const select = links.querySelector("[data-eight-state-select]");
      const controls = links.querySelector("[data-eight-state-controls]");
      const relations = Array.from(links.querySelectorAll("[data-eight-state-relation]"));
      const announcement = links.querySelector("[data-eight-state-announcement]");
      if (!select || !controls || relations.length !== 8) return;
      links.dataset.eightStateEnhanced = "true";

      function showRow(state, announce) {
        if (!Number.isInteger(state) || state < 0 || state > 7) return;
        const relation = relations.find((item) => Number(item.dataset.eightStateRelation) === state);
        if (!relation) return;
        const targets = state < 6 ? [(state + 3) % 8] : state === 6 ? [0, 1] : [1, 2];
        relations.forEach((item) => { item.hidden = item !== relation; });
        scope.querySelectorAll("[data-eight-state-row-diagram]").forEach((item) => {
          item.style.display = Number(item.dataset.eightStateRowDiagram) === state ? "" : "none";
        });
        scope.querySelectorAll("[data-eight-state-source-highlight]").forEach((item) => {
          item.style.display = Number(item.dataset.eightStateSourceHighlight) === state ? "" : "none";
        });
        scope.querySelectorAll("[data-eight-state-image-highlight]").forEach((item) => {
          item.style.display = Number(item.dataset.eightStateImageHighlight) === state ? "" : "none";
        });
        scope.querySelectorAll("[data-eight-state-target-highlight]").forEach((item) => {
          item.style.display = targets.includes(Number(item.dataset.eightStateTargetHighlight)) ? "" : "none";
        });
        scope.querySelectorAll("[data-eight-state-node]").forEach((item) => {
          const node = Number(item.dataset.eightStateNode);
          item.dataset.eightStateRole = node === state ? "source" : targets.includes(node) ? "target" : "other";
        });
        scope.querySelectorAll("[data-eight-state-edge-from]").forEach((item) => {
          item.dataset.eightStateActive = String(Number(item.dataset.eightStateEdgeFrom) === state);
        });
        select.value = String(state);
        links.dataset.eightStateSelected = String(state);
        if (announce && announcement) announcement.textContent = relation.dataset.eightStateAnnouncementText || "";
      }

      select.addEventListener("change", () => showRow(Number(select.value), true));
      showRow(Number(select.value || links.dataset.eightStateDefault), false);
      controls.hidden = false;
    });
  }

  if (document.readyState === "complete") window.setTimeout(enhanceEightStateLinks, 0);
  else window.addEventListener("load", () => window.setTimeout(enhanceEightStateLinks, 0), { once: true });
})();
