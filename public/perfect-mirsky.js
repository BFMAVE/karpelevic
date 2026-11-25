import { sixMarkState, chordState, pathState } from "./code/perfect-mirsky-model.mjs";

function text(root, key, value) {
  root.querySelector('[data-mirsky-text="' + key + '"]').textContent = value;
}

function toggle(root, selector, show) {
  root.querySelector(selector).toggleAttribute("hidden", !show);
}

function project([x, y], { cx, cy, scale }) {
  return [cx + scale * x, cy - scale * y];
}

function points(vertices) {
  return vertices.map((point) => point.join(",")).join(" ");
}

function move(root, key, [x, y]) {
  const mark = root.querySelector('[data-mirsky-mark="' + key + '"]');
  mark.setAttribute("cx", x);
  mark.setAttribute("cy", y);
}

function enable(root) {
  root.querySelectorAll("[data-mirsky-control]").forEach((control) => { control.disabled = false; });
}

function enhanceSquare(root) {
  const slider = root.querySelector("input[type=range]");
  const plane = JSON.parse(root.dataset.mirskySquare);
  const choices = [...root.querySelectorAll("[data-mirsky-spacing]")];

  function update() {
    const step = slider.valueAsNumber;
    const sample = sixMarkState(step);
    const positive = project([sample.a, 0], plane);
    const negative = project([-sample.a, 0], plane);
    const target = project([0, .75 * sample.a], plane);
    move(root, "a", positive);
    move(root, "minus-a", negative);
    move(root, "target-a", target);
    root.querySelector("[data-mirsky-label-positive]").setAttribute("x", positive[0] + 5);
    root.querySelector("[data-mirsky-label-negative]").setAttribute("x", negative[0]);
    root.querySelector("[data-mirsky-label-target]").setAttribute("y", target[1] - 7);
    root.querySelectorAll("[data-mirsky-when-apart]").forEach((part) => part.toggleAttribute("hidden", !step));
    toggle(root, "[data-mirsky-when-together]", !step);
    root.querySelector(".mirsky-demand-two").style.width = (50 * sample.a) + "%";
    text(root, "spacing", sample.spacing);
    text(root, "row", sample.rowDemand);
    text(root, "total", sample.total);
    text(root, "supply-status", sample.status);
    text(root, "sharp-bound", sample.bound);
    slider.setAttribute("aria-valuetext", "a equals " + sample.spacing);
    choices.forEach((choice) => choice.setAttribute("aria-pressed", String(Number(choice.dataset.mirskySpacing) === step)));
  }

  slider.addEventListener("input", update);
  choices.forEach((choice) => choice.addEventListener("click", () => {
    slider.value = choice.dataset.mirskySpacing;
    update();
  }));
  enable(root);
  update();
}

function enhanceUnion(root) {
  const choices = [...root.querySelectorAll("[data-mirsky-order]")];
  const polygons = [...root.querySelectorAll("[data-mirsky-polygon]")];
  choices.forEach((choice) => choice.addEventListener("click", () => {
    const order = Number(choice.dataset.mirskyOrder);
    polygons.forEach((polygon) => polygon.toggleAttribute("hidden", Number(polygon.dataset.mirskyPolygon) > order));
    toggle(root, "[data-mirsky-witness]", order >= 5);
    choices.forEach((other) => other.setAttribute("aria-pressed", String(other === choice)));
    text(root, "order", order);
    text(root, "region-title", "Union of the regular polygons of order at most " + order
      + (order >= 5 ? ". The highlighted point is the order-five witness." : "."));
  }));
  enable(root);
}

function enhanceChord(root) {
  const slider = root.querySelector("input[type=range]");
  const plane = JSON.parse(root.dataset.mirskyChord);
  function update() {
    const { u, x, y, chance, loss } = chordState(slider.valueAsNumber);
    const point = project([x, y], plane);
    move(root, "eta", point);
    root.querySelector("[data-mirsky-chord-ray]").setAttribute("points", points([[plane.cx, plane.cy], point]));
    const label = root.querySelector("[data-mirsky-eta-label]");
    label.setAttribute("x", point[0] - 14);
    label.setAttribute("y", point[1] - 9);
    slider.setAttribute("aria-valuetext", u);
    text(root, "u", u);
    text(root, "chance", chance);
    text(root, "distance", loss);
    text(root, "loss", loss);
    text(root, "chord-status", "At u = " + u + ", both ways of measuring the loss give " + loss + ".");
  }
  slider.addEventListener("input", update);
  enable(root);
  update();
}

function enhancePath(root) {
  const slider = root.querySelector("input[type=range]");
  const plane = JSON.parse(root.dataset.mirskyPath);
  const play = root.querySelector("[data-mirsky-play]");
  const previous = root.querySelector("[data-mirsky-previous]");
  const next = root.querySelector("[data-mirsky-next]");
  const last = Number(slider.max);
  let timer = null;

  function show(step) {
    const sample = pathState(step);
    const chart = sample.trace.map((value, k) => [44 + 41 * k, 222 - 560 * value]);
    move(root, "visited", project(sample.visited[step], plane));
    move(root, "expected", project(sample.expected, plane));
    move(root, "distance", chart[step]);
    root.querySelector("[data-mirsky-visited-edges]").setAttribute("points", points(sample.visited.map((point) => project(point, plane))));
    root.querySelector("[data-mirsky-trace]").setAttribute("points", points(chart));
    previous.disabled = step === 0;
    next.disabled = step === last;
    slider.value = step;
    text(root, "step", step);
    text(root, "path-status", "Step " + step + ". Label " + sample.label + " is at " + (10 * sample.label)
      + "°. The mean angle is " + (15 * step) + "°. The corrected distance is " + sample.distance
      + ", with largest distance so far " + sample.largest + ".");
  }

  function stop() {
    if (timer !== null) window.clearInterval(timer);
    timer = null;
    play.textContent = "Play path";
    root.querySelector("output").setAttribute("aria-live", "polite");
  }

  function choose(step) {
    stop();
    show(step);
  }

  slider.addEventListener("input", () => choose(slider.valueAsNumber));
  previous.addEventListener("click", () => choose(slider.valueAsNumber - 1));
  next.addEventListener("click", () => choose(slider.valueAsNumber + 1));
  root.querySelectorAll("[data-mirsky-go]").forEach((button) => {
    button.addEventListener("click", () => choose(Number(button.dataset.mirskyGo)));
  });
  play.addEventListener("click", () => {
    if (timer !== null) { stop(); return; }
    if (slider.valueAsNumber === last) show(0);
    play.textContent = "Pause path";
    root.querySelector("output").setAttribute("aria-live", "off");
    timer = window.setInterval(() => {
      const step = slider.valueAsNumber + 1;
      if (step === last) stop();
      show(step);
    }, 800);
  });
  window.addEventListener("pagehide", stop);
  enable(root);
  show(slider.valueAsNumber);
}

function enhanceLoops(root) {
  const button = root.querySelector("[data-mirsky-erase]");
  button.addEventListener("click", () => {
    const erased = button.getAttribute("aria-pressed") === "false";
    button.setAttribute("aria-pressed", String(erased));
    button.textContent = erased ? "Restore the loop" : "Erase the loop";
    toggle(root, "[data-mirsky-loop-edges]", !erased);
    text(root, "loop-title", erased ? "Retained path from A through B and D to E." : "Path from A to B to C, back to B, then through D to E.");
    text(root, "loop-heading", erased ? "Retained path" : "Original path");
    text(root, "loop-sequence", erased ? "A, B, D, E" : "A, B, C, B, D, E");
    text(root, "loop-status", erased ? "Three edges. Same endpoints." : "Five edges. B occurs twice.");
    root.querySelector("[data-mirsky-loop-c] circle").setAttribute("class", erased ? "mirsky-mark mirsky-quiet-point" : "mirsky-mark mirsky-fixed");
  });
  enable(root);
}

function enhanceFigures() {
  for (const [selector, enhance] of [
    ["[data-mirsky-square]", enhanceSquare], ["[data-mirsky-union]", enhanceUnion],
    ["[data-mirsky-chord]", enhanceChord], ["[data-mirsky-path]", enhancePath],
    ["[data-mirsky-loops]", enhanceLoops],
  ]) document.querySelectorAll(selector).forEach(enhance);
}

if (document.readyState === "complete") window.setTimeout(enhanceFigures, 0);
else window.addEventListener("load", () => window.setTimeout(enhanceFigures, 0), { once: true });
