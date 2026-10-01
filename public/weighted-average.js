(() => {
  const display = (value) => Number(value.toFixed(2)).toString();
  function enhanceAverages() {
    document.querySelectorAll("[data-weighted-average]").forEach((figure) => {
      const input = figure.querySelector("[data-average-input]");
      const point = figure.querySelector("[data-average-point]");
      const row = figure.querySelector("[data-average-row]");
      const coordinate = figure.querySelector("[data-average-coordinate]");
      const weight = figure.querySelector("[data-average-weight]");
      const description = figure.querySelector("[data-average-description]");
      const status = figure.querySelector("[data-average-status]");
      const presets = Array.from(figure.querySelectorAll("[data-average-preset]"));
      if (!input || !point || !row || !coordinate || !weight || !description || !status) return;
      function showAverage(alpha) {
        const other = 1 - alpha;
        const x = 230 + 125 * alpha, y = 188 - 125 * other;
        const a = display(alpha), b = display(other);
        point.setAttribute("points", `${x},${y - 8} ${x + 8},${y} ${x},${y + 8} ${x - 8},${y}`);
        row.textContent = `(${a}, ${b}, 0, 0)`;
        coordinate.textContent = `Average: ${a} + ${b}i`;
        weight.textContent = a;
        description.textContent = `The four coordinates 1, i, minus 1, minus i form a diamond. The row with weights alpha, one minus alpha, zero, zero selects the point alpha plus one minus alpha times i. Its current coordinates are ${a} and ${b}.`;
        status.textContent = `The average is ${a} + ${b}i. Its absolute value is approximately ${Math.hypot(alpha, other).toFixed(3)}, at most 1. ${alpha === 0 || alpha === 1 ? "One weight is zero, so the average is an endpoint." : "Both weights are positive, so the average lies between the two endpoints."}`;
        input.value = String(alpha);
        input.setAttribute("aria-valuetext", `${a} on 1; ${b} on i`);
        presets.forEach((preset) => preset.setAttribute("aria-pressed", String(Number(preset.dataset.averagePreset) === alpha)));
      }
      input.addEventListener("input", () => showAverage(Number(input.value)));
      presets.forEach((preset) => {
        preset.addEventListener("click", () => showAverage(Number(preset.dataset.averagePreset)));
        preset.disabled = false;
      });
      showAverage(Number(input.value));
      input.disabled = false;
    });
  }
  if (document.readyState === "complete") window.setTimeout(enhanceAverages, 0);
  else window.addEventListener("load", () => window.setTimeout(enhanceAverages, 0), { once: true });
})();
