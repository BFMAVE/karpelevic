(() => {
  function enhanceLearning() {
    document.querySelectorAll("[data-chain-motion-controls]").forEach((controls) => {
      const figure = controls.closest(".reader-teaching-figure");
      const input = controls.querySelector("[data-chain-motion-input]");
      const reset = controls.querySelector("[data-chain-motion-reset]");
      const status = controls.querySelector("[data-chain-motion-status]");
      const geometry = figure.querySelector("[data-chain-motion-geometry]");
      const graph = figure.querySelector("[data-chain-motion-graph]");
      if (!input || !geometry || !graph) return;
      const node = (name) => figure.querySelector(`[data-chain-motion-${name}]`);
      const screen = ([x, y]) => [Number(geometry.dataset.originX) + Number(geometry.dataset.scale) * x, Number(geometry.dataset.originY) - Number(geometry.dataset.scale) * y];
      const graphPoint = (t, u) => [Number(graph.dataset.originX) + (t - Number(graph.dataset.tMin)) / Number(graph.dataset.tSpan) * Number(graph.dataset.width), Number(graph.dataset.originY) - (u - Number(graph.dataset.uMin)) / Number(graph.dataset.uSpan) * Number(graph.dataset.height)];
      function dot(element, [x, y]) { if (element) { element.setAttribute("cx", x); element.setAttribute("cy", y); } }
      function line(element, [x1, y1], [x2, y2]) { if (element) { Object.entries({ x1, y1, x2, y2 }).forEach(([key, value]) => element.setAttribute(key, value)); } }
      function update() {
        const t = Number(input.value), denominator = 1 + 6 * t;
        if (!Number.isFinite(t) || t < -.05 || t > .1 || denominator <= 0) return;
        const u = t / denominator, gap = 6 * t * t / denominator;
        const x0 = screen([0, 0]), x1 = screen([1 - t, 0]), x2 = screen([2 * (1 + 5 * t) / denominator, (1 + 3 * t) / denominator]), x3 = screen([3, 3]);
        const returned = screen([2.5 - t, 2 - 1.5 * t]), intersection = screen([2.5 - u, 2 - 1.5 * u]);
        node("polygon").setAttribute("points", [x0, x1, x2, x3].map((p) => p.join(",")).join(" "));
        dot(node("x1"), x1); dot(node("x2"), x2); dot(node("y"), returned); dot(node("intersection"), intersection);
        line(node("contact-side"), x1, x2); line(node("final-side"), x2, x3); line(node("model-gap"), returned, intersection);
        line(node("graph-gap"), graphPoint(t, t), graphPoint(t, u)); dot(node("curve-point"), graphPoint(t, u));
        [["x1", x1, -12, 35], ["x2", x2, 16, 18]].forEach(([name, point, dx, dy]) => {
          const label = figure.querySelector(`[data-chain-motion-label="${name}"]`);
          if (label) { label.setAttribute("x", point[0] + dx); label.setAttribute("y", point[1] + dy); }
        });
        const message = `t = ${t.toFixed(3)}, u(t) = ${u.toFixed(6)}, inward coordinate gap = ${gap.toFixed(6)}. ${t === 0 ? "The original contact has not moved inward." : "The returning point lies strictly inward of the final side."} C₂ remains exactly on its moving side line; X₂ remains on its exposing line.`;
        if (status) status.textContent = message;
        input.setAttribute("aria-valuetext", `t ${t.toFixed(3)}; inward gap ${gap.toFixed(6)}`);
        const description = figure.querySelector("svg desc");
        if (description) description.textContent = `Exact local projection model, not an invariant eigenvalue polygon. ${message} The dashed outline is the original quadrilateral. The gold contact and red returning point have different roles.`;
      }
      input.addEventListener("input", update);
      if (reset) reset.addEventListener("click", () => { input.value = "0"; update(); });
      input.disabled = false; controls.hidden = false; update();
    });
    document.querySelectorAll("[data-figure-frame]").forEach((frame) => {
      const controls = frame.querySelector("[data-figure-controls]");
      const buttons = Array.from(frame.querySelectorAll("[data-figure-view-button]"));
      if (!controls || !buttons.length) return;
      function setView(view) {
        frame.dataset.figureView = view;
        buttons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.figureViewButton === view)));
      }
      buttons.forEach((button) => button.addEventListener("click", () => setView(button.dataset.figureViewButton)));
      controls.hidden = false;
    });
    // One spelling for Greek names, glyph variants and TeX commands in both searches.
    const greekSearchNames = {
      "α": "alpha", "β": "beta", "γ": "gamma", "δ": "delta", "ε": "epsilon", "ϵ": "epsilon",
      "ζ": "zeta", "η": "eta", "θ": "theta", "ϑ": "theta", "ι": "iota", "κ": "kappa", "ϰ": "kappa",
      "λ": "lambda", "μ": "mu", "ν": "nu", "ξ": "xi", "ο": "omicron", "π": "pi", "ϖ": "pi",
      "ρ": "rho", "ϱ": "rho", "σ": "sigma", "ς": "sigma", "τ": "tau", "υ": "upsilon",
      "φ": "phi", "ϕ": "phi", "χ": "chi", "ψ": "psi", "ω": "omega",
    };
    function searchSpelling(value) {
      return value.normalize("NFKC").toLocaleLowerCase()
        .replace(/\\([a-z]+)/g, "$1")
        .replace(/[α-ωϵϑϰϖϱϕ]/g, (letter) => " " + (greekSearchNames[letter] || letter) + " ")
        .replace(/\bvar(epsilon|theta|kappa|pi|rho|sigma|phi)\b/g, "$1")
        .replace(/\s+/g, " ").trim();
    }
    document.querySelectorAll("[data-reader-notation]").forEach((panel) => {
      const input = panel.querySelector("[data-notation-search]");
      const label = panel.querySelector("[data-notation-search-label]");
      const entries = Array.from(panel.querySelectorAll("[data-notation-entry]"));
      const status = panel.querySelector("[data-notation-search-status]");
      if (!input || !label) return;
      input.addEventListener("input", () => {
        const query = searchSpelling(input.value);
        entries.forEach((entry) => { entry.hidden = !searchSpelling(entry.dataset.notationSearchText || entry.textContent).includes(query); });
        const count = entries.filter((entry) => !entry.hidden).length;
        if (status) status.textContent = query ? `${count} matching notation ${count === 1 ? "entry" : "entries"}.` : "";
      });
      label.hidden = false;
    });
    document.querySelectorAll("[data-reader-directory]").forEach((directory) => {
      const input = directory.querySelector("[data-topic-search]");
      const label = directory.querySelector("[data-topic-search-label]");
      const entries = Array.from(directory.querySelectorAll("[data-topic-entry]"));
      const stages = Array.from(directory.querySelectorAll("[data-topic-stage]"));
      const status = directory.querySelector("[data-topic-search-status]");
      if (!input || !label) return;
      input.addEventListener("input", () => {
        const query = searchSpelling(input.value);
        entries.forEach((entry) => { entry.hidden = !searchSpelling(entry.dataset.topicSearchText || entry.textContent).includes(query); });
        stages.forEach((stage) => { stage.hidden = Array.from(stage.querySelectorAll("[data-topic-entry]")).every((entry) => entry.hidden); });
        const count = entries.filter((entry) => !entry.hidden).length;
        if (status) status.textContent = query ? `${count} matching ${count === 1 ? "topic" : "topics"}.` : "";
      });
      label.hidden = false;
    });
  }
  if (document.readyState === "complete") window.setTimeout(enhanceLearning, 0);
  else window.addEventListener("load", () => window.setTimeout(enhanceLearning, 0), { once: true });
})();
