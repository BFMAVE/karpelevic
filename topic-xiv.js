;(() => {
/**
 * Farey–Ito boundary generator for the Karpelevič region.
 *
 * Exact combinatorial data: reduced Farey fractions, consecutive pairs,
 * denominator ordering, and the integers d=floor(n/q) and e=s-dq.
 * Numerical data: interior radii, obtained by 90 fixed bisection steps.
 *
 * This file has no dependencies and can be imported as an ES module.
 */

// Every cross-product used to order fractions is then at most
// MAX_EXACT_ORDER² and therefore remains a safe JavaScript integer.
const MAX_EXACT_ORDER = Math.floor(Math.sqrt(Number.MAX_SAFE_INTEGER));

function positiveInteger(value, name) {
  if (!Number.isSafeInteger(value) || value < 1) {
    throw new RangeError(`${name} must be a positive safe integer`);
  }
  return value;
}

function exactOrder(value) {
  const order = positiveInteger(value, "order");
  if (order > MAX_EXACT_ORDER) {
    throw new RangeError(
      `order must not exceed ${MAX_EXACT_ORDER} if Farey cross-products are to remain exact`,
    );
  }
  return order;
}

function reducedFraction(value, name) {
  if (
    !value ||
    !Number.isSafeInteger(value.numerator) ||
    !Number.isSafeInteger(value.denominator) ||
    value.denominator < 1 ||
    value.numerator < 0 ||
    value.numerator > value.denominator ||
    gcd(value.numerator, value.denominator) !== 1
  ) {
    throw new RangeError(
      `${name} must be a reduced fraction between zero and one`,
    );
  }
  return value;
}

function gcd(a, b) {
  let left = Math.abs(a);
  let right = Math.abs(b);
  while (right !== 0) [left, right] = [right, left % right];
  return left;
}

function fareySequence(order) {
  const n = exactOrder(order);
  const fractions = [];
  for (let denominator = 1; denominator <= n; denominator += 1) {
    for (let numerator = 0; numerator <= denominator; numerator += 1) {
      if (gcd(numerator, denominator) === 1) {
        fractions.push({ numerator, denominator });
      }
    }
  }
  return fractions.sort(
    (left, right) =>
      left.numerator * right.denominator -
      right.numerator * left.denominator,
  );
}

function upperFarey(order) {
  return fareySequence(order).filter(
    (fraction) => 2 * fraction.numerator <= fraction.denominator,
  );
}

function fareyPairParameters(left, right, order) {
  const n = exactOrder(order);
  const leftFraction = reducedFraction(left, "left");
  const rightFraction = reducedFraction(right, "right");
  const determinant =
    leftFraction.denominator * rightFraction.numerator -
    leftFraction.numerator * rightFraction.denominator;
  if (
    leftFraction.denominator > n ||
    rightFraction.denominator > n ||
    determinant !== 1 ||
    leftFraction.denominator + rightFraction.denominator <= n
  ) {
    throw new RangeError(
      "left and right must be consecutive increasing fractions in the Farey sequence of this order",
    );
  }
  const first =
    leftFraction.denominator <= rightFraction.denominator
      ? leftFraction
      : rightFraction;
  const second = first === leftFraction ? rightFraction : leftFraction;
  const d = Math.floor(n / first.denominator);
  return {
    p: first.numerator,
    q: first.denominator,
    r: second.numerator,
    s: second.denominator,
    d,
    e: second.denominator - d * first.denominator,
  };
}

function boundaryRadius(angleFraction, left, right, order, iterations = 90) {
  const n = exactOrder(order);
  if (n < 3) throw new RangeError("Use the exact order-one or order-two description");
  positiveInteger(iterations, "iterations");
  if (!Number.isFinite(angleFraction)) {
    throw new RangeError("angleFraction must be finite");
  }
  const leftFraction = reducedFraction(left, "left");
  const rightFraction = reducedFraction(right, "right");
  const parameters = fareyPairParameters(leftFraction, rightFraction, n);
  const leftValue = leftFraction.numerator / leftFraction.denominator;
  const rightValue = rightFraction.numerator / rightFraction.denominator;
  if (angleFraction === leftValue || angleFraction === rightValue) return 1;
  if (!(leftValue < angleFraction && angleFraction < rightValue)) {
    throw new RangeError("angleFraction must lie in the specified Farey interval");
  }

  const { p, q, r, s, d } = parameters;
  const A = 2 * Math.PI * Math.abs(q * angleFraction - p);
  const B = (2 * Math.PI * Math.abs(s * angleFraction - r)) / d;
  const target = Math.sin(A + B);
  const residual = (rho) =>
    rho ** (s / d) * Math.sin(A) +
    rho ** q * Math.sin(B) -
    target;

  let lower = 0;
  let upper = 1;
  for (let iteration = 0; iteration < iterations; iteration += 1) {
    const midpoint = (lower + upper) / 2;
    if (residual(midpoint) < 0) lower = midpoint;
    else upper = midpoint;
  }
  return (lower + upper) / 2;
}

function polarPoint(angleFraction, radius) {
  return {
    real: radius * Math.cos(2 * Math.PI * angleFraction),
    imaginary: radius * Math.sin(2 * Math.PI * angleFraction),
    angleFraction,
    radius,
  };
}

function upperBoundary(order, samplesPerCell = 80) {
  const n = exactOrder(order);
  if (n < 3) throw new RangeError("upperBoundary is defined here for order at least 3");
  positiveInteger(samplesPerCell, "samplesPerCell");
  if (samplesPerCell < 2) {
    throw new RangeError("samplesPerCell must be at least 2 for a sampled boundary");
  }
  const fractions = upperFarey(n);
  const points = [];

  for (let index = 0; index < fractions.length - 1; index += 1) {
    const left = fractions[index];
    const right = fractions[index + 1];
    const leftValue = left.numerator / left.denominator;
    const rightValue = right.numerator / right.denominator;
    const terminalOrderThree =
      n === 3 &&
      left.numerator === 1 &&
      left.denominator === 3 &&
      right.numerator === 1 &&
      right.denominator === 2;

    if (terminalOrderThree) {
      for (let sample = 1; sample < samplesPerCell; sample += 1) {
        const x = leftValue + ((rightValue - leftValue) * sample) / samplesPerCell;
        points.push(polarPoint(x, boundaryRadius(x, left, right, n)));
      }
      points.push({ real: -0.5, imaginary: 0, angleFraction: 0.5, radius: 0.5 });
      for (let sample = 1; sample < samplesPerCell; sample += 1) {
        const real = -0.5 - (0.5 * sample) / (samplesPerCell - 1);
        points.push({ real, imaginary: 0, angleFraction: 0.5, radius: Math.abs(real) });
      }
      continue;
    }

    for (let sample = 0; sample < samplesPerCell; sample += 1) {
      if (index > 0 && sample === 0) continue;
      const x =
        sample === 0
          ? leftValue
          : sample === samplesPerCell - 1
            ? rightValue
          : leftValue +
            ((rightValue - leftValue) * sample) / (samplesPerCell - 1);
      points.push(polarPoint(x, boundaryRadius(x, left, right, n)));
    }
  }
  return points;
}

function fullBoundary(order, samplesPerCell = 80) {
  const n = exactOrder(order);
  positiveInteger(samplesPerCell, "samplesPerCell");
  if (n === 1) {
    return [{ real: 1, imaginary: 0, angleFraction: 0, radius: 1 }];
  }
  if (n === 2) {
    return [
      { real: -1, imaginary: 0, angleFraction: 0.5, radius: 1 },
      { real: 1, imaginary: 0, angleFraction: 0, radius: 1 },
    ];
  }
  const upper = upperBoundary(n, samplesPerCell);
  const lower = upper
    .slice(1, -1)
    .reverse()
    .map((point) => ({
      ...point,
      imaginary: -point.imaginary,
      angleFraction: 1 - point.angleFraction,
    }));
  return [...upper, ...lower];
}

const boundaryExplorerRoot = document.querySelector(".boundary-laboratory");

if (boundaryExplorerRoot) {
  const svgNamespace = "http://www.w3.org/2000/svg";
  const plotSize = 760;
  const plotPadding = 78;
  const plotRadius = (plotSize - 2 * plotPadding) / 2;
  const plotCenter = plotSize / 2;
  const fullMarkerOrderLimit = 12;
  const sparseMarkerDenominatorLimit = 12;
  const orderInput = boundaryExplorerRoot.querySelector("[data-boundary-order-input]");
  const orderHelp = boundaryExplorerRoot.querySelector("#boundary-order-help");
  const plot = boundaryExplorerRoot.querySelector('svg[role="img"]');
  const plotDescription = plot?.querySelector("desc");
  const plotCaption = boundaryExplorerRoot.querySelector("figure figcaption");
  const sidePanel = boundaryExplorerRoot.querySelector(".boundary-laboratory-grid aside");
  const numericalCopy = sidePanel?.querySelector("section:nth-of-type(2) p:last-child");
  const cellDetails = sidePanel?.querySelector("details");
  const cellSummary = cellDetails?.querySelector("summary");
  const cellLedger = cellDetails?.querySelector(".boundary-cell-ledger");
  const cellTableCaption = cellLedger?.querySelector("caption");
  const cellRows = cellLedger?.querySelector("[data-boundary-cell-rows]");
  let acceptedOrder = 7;

  function parseExplorerOrder(value) {
    if (!/^\d+$/.test(value)) return null;
    const candidate = Number(value);
    return Number.isSafeInteger(candidate) && candidate >= 1 && candidate <= 40
      ? candidate
      : null;
  }

  function setInputError(message) {
    let error = boundaryExplorerRoot.querySelector("[data-boundary-order-error]");
    if (!error) {
      error = document.createElement("p");
      error.className = "boundary-laboratory-error";
      error.dataset.boundaryOrderError = "";
      error.id = "boundary-order-error";
      error.setAttribute("role", "alert");
      orderHelp?.insertAdjacentElement("afterend", error);
    }
    error.textContent = message;
    error.hidden = !message;
    if (message) {
      orderInput?.setAttribute("aria-invalid", "true");
      orderInput?.setAttribute("aria-errormessage", "boundary-order-error");
      orderInput?.setAttribute(
        "aria-describedby",
        "boundary-order-help boundary-order-error",
      );
    } else {
      orderInput?.removeAttribute("aria-invalid");
      orderInput?.removeAttribute("aria-errormessage");
      orderInput?.setAttribute("aria-describedby", "boundary-order-help");
    }
  }

  function toSvgCoordinate(real, imaginary) {
    return {
      x: plotCenter + real * plotRadius,
      y: plotCenter - imaginary * plotRadius,
    };
  }

  function boundaryPath(points) {
    return points
      .map((point, index) => {
        const coordinate = toSvgCoordinate(point.real, point.imaginary);
        return (
          (index === 0 ? "M" : "L") +
          " " +
          coordinate.x.toFixed(2) +
          " " +
          coordinate.y.toFixed(2)
        );
      })
      .join(" ")
      .concat(" Z");
  }

  function createSvgElement(name, attributes) {
    const element = document.createElementNS(svgNamespace, name);
    for (const [attribute, value] of Object.entries(attributes)) {
      element.setAttribute(attribute, String(value));
    }
    return element;
  }

  function insertPlotElement(element) {
    const firstLabel = plot.querySelector(".boundary-lab-label");
    plot.insertBefore(element, firstLabel);
  }

  function fractionLabel(fraction) {
    return fraction.numerator + "/" + fraction.denominator;
  }

  function updateFareyTable(order) {
    const fractions = order >= 3 ? upperFarey(order) : [];
    const cells = fractions.slice(0, -1).map((left, index) => {
      const right = fractions[index + 1];
      return { left, right, ...fareyPairParameters(left, right, order) };
    });

    if (!cellDetails || !cellSummary || !cellRows) return cells;
    cellDetails.hidden = cells.length === 0;
    cellSummary.textContent = "Open all Farey pairs for n=" + order;
    if (cellTableCaption) {
      cellTableCaption.textContent =
        "Consecutive Farey pairs and denominator-ordered data for n=" + order;
    }
    cellRows.replaceChildren();
    for (const cell of cells) {
      const row = document.createElement("tr");
      const pair = document.createElement("th");
      const denominators = document.createElement("td");
      const d = document.createElement("td");
      const e = document.createElement("td");
      pair.scope = "row";
      pair.textContent =
        fractionLabel(cell.left) + " → " + fractionLabel(cell.right);
      denominators.textContent = "(" + cell.q + "," + cell.s + ")";
      d.textContent = String(cell.d);
      e.textContent = String(cell.e);
      row.append(pair, denominators, d, e);
      cellRows.append(row);
    }
    return cells;
  }

  function appendFareyMarkers(order) {
    const upper = upperFarey(order);
    const selected =
      order <= fullMarkerOrderLimit
        ? upper
        : upper.filter(
            (fraction) =>
              fraction.denominator <= sparseMarkerDenominatorLimit,
          );
    let markerCount = 0;
    for (const fraction of selected) {
      const angle = (2 * Math.PI * fraction.numerator) / fraction.denominator;
      const upperCoordinate = toSvgCoordinate(Math.cos(angle), Math.sin(angle));
      insertPlotElement(
        createSvgElement("circle", {
          "aria-hidden": "true",
          class: "boundary-lab-root",
          cx: upperCoordinate.x,
          cy: upperCoordinate.y,
          "data-farey-root": "",
          r: 4.5,
        }),
      );
      markerCount += 1;
      if (Math.abs(Math.sin(angle)) > 1e-12) {
        const lowerCoordinate = toSvgCoordinate(
          Math.cos(angle),
          -Math.sin(angle),
        );
        insertPlotElement(
          createSvgElement("circle", {
            "aria-hidden": "true",
            class: "boundary-lab-root",
            cx: lowerCoordinate.x,
            cy: lowerCoordinate.y,
            "data-farey-root": "",
            r: 4.5,
          }),
        );
        markerCount += 1;
      }
    }
    return markerCount;
  }

  function updatePlot(order) {
    if (!plot || !orderInput) return;

    plot.querySelectorAll(
      ".boundary-lab-region, .boundary-lab-interval, .boundary-lab-point, .boundary-lab-root",
    ).forEach((element) => element.remove());

    const kind = order === 1 ? "point" : order === 2 ? "interval" : "region";
    let boundary = [];
    if (kind === "point") {
      const coordinate = toSvgCoordinate(1, 0);
      insertPlotElement(
        createSvgElement("circle", {
          class: "boundary-lab-point",
          cx: coordinate.x,
          cy: coordinate.y,
          "data-boundary-point": "",
          r: 9,
        }),
      );
    } else if (kind === "interval") {
      const left = toSvgCoordinate(-1, 0);
      const right = toSvgCoordinate(1, 0);
      insertPlotElement(
        createSvgElement("line", {
          class: "boundary-lab-interval",
          x1: left.x,
          x2: right.x,
          y1: left.y,
          y2: right.y,
          "data-boundary-interval": "",
        }),
      );
    } else {
      boundary = fullBoundary(order, 54);
      insertPlotElement(
        createSvgElement("path", {
          class: "boundary-lab-region",
          d: boundaryPath(boundary),
          "data-boundary-region": "",
        }),
      );
    }

    const markerCount = appendFareyMarkers(order);
    const cells = updateFareyTable(order);
    plot.setAttribute("aria-label", "Boundary of Theta " + order);
    if (plotDescription) {
      plotDescription.textContent =
        kind === "point"
          ? "The stochastic eigenvalue region of order one, the exact single point one in the complex plane. The dashed circle is the unit circle."
          : kind === "interval"
            ? "The stochastic eigenvalue region of order two, the exact real interval from minus one to one. The dashed circle is the unit circle."
            : "The stochastic eigenvalue region of order " +
              order +
              ", drawn from exact Farey-pair data and numerical solutions of the scalar radial equation. The dashed circle is the unit circle." +
              (order === 3
                ? " The exceptional real segment from minus one to minus one half is included exactly."
                : "");
    }
    if (plotCaption) {
      const markerCopy =
        order <= fullMarkerOrderLimit
          ? "All endpoint roots are marked in both half-planes."
          : "To reduce overlap above order 12, markers are limited to endpoints with denominator at most 12; the table retains every Farey pair.";
      plotCaption.innerHTML =
        kind === "point"
          ? "<span>Numerical boundary plot.</span> Θ<sub>1</sub> is the exact single point 1. The dashed circle is |λ|=1. Farey fractions specify endpoint roots exactly, but their SVG coordinates are floating-point approximations. " +
            markerCopy
          : kind === "interval"
            ? "<span>Numerical boundary plot.</span> Θ<sub>2</sub> is the exact real interval [−1,1]. The dashed circle is |λ|=1. Farey fractions specify endpoint roots exactly, but their SVG coordinates are floating-point approximations. " +
              markerCopy
            : "<span>Numerical boundary plot.</span> Θ<sub>" +
              order +
              "</sub> has " +
              cells.length +
              " Farey interval" +
              (cells.length === 1 ? "" : "s") +
              " in 0≤x≤1/2, reflected across the real axis." +
              (order === 3 ? " The segment [−1,−1/2] is exact." : "") +
              " The dashed circle is |λ|=1. Farey fractions specify endpoint roots exactly, but their SVG coordinates and all sampled arc coordinates are floating-point approximations. " +
              markerCopy;
    }
    if (numericalCopy) {
      numericalCopy.textContent =
        kind === "region"
          ? "Interior moduli are found by fixed-iteration bisection. The SVG joins finitely many sampled points, so it is a numerical plot of the proved boundary formula, not an exact symbolic curve." +
            (order === 3
              ? " The exceptional real segment is added from exact endpoints rather than sampled from that equation."
              : "")
          : "No numerical modulus solve is used at this order; the plotted description is exact.";
    }

    acceptedOrder = order;
    boundaryExplorerRoot.dataset.standaloneBoundaryExplorer = "enhanced";
    boundaryExplorerRoot.dataset.boundaryOrder = String(order);
    boundaryExplorerRoot.dataset.boundaryKind = kind;
    boundaryExplorerRoot.dataset.boundaryPointCount = String(boundary.length);
    boundaryExplorerRoot.dataset.boundaryCellCount = String(cells.length);
    boundaryExplorerRoot.dataset.boundaryMarkerCount = String(markerCount);
  }

  if (orderInput && plot) {
    orderInput.addEventListener("input", () => {
      const candidate = parseExplorerOrder(orderInput.value);
      if (candidate === null) {
        setInputError(
          "Enter an integer from 1 to 40. The plot remains at n=" +
            acceptedOrder +
            ".",
        );
        return;
      }
      setInputError("");
      updatePlot(candidate);
    });
    const initialOrder = parseExplorerOrder(orderInput.value);
    updatePlot(initialOrder ?? acceptedOrder);
  }
}

})();
