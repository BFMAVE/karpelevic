;(() => {
"use strict";
/**
 * Numerical Karpelevic boundary curves from exact Farey-Ito data.
 *
 * This dependency-free module is the single numerical source used by the
 * website, the GitHub Pages controller, and the downloadable source file.
 * `scripts/generate-boundary-module.mjs` copies it byte-for-byte to
 * `public/code/karpelevic-boundary.js`.
 *
 * Exact combinatorial data: reduced Farey fractions, consecutive pairs,
 * endpoint relabelling, and the integers d=floor(n/q) and e=s-dq.
 * Numerical data: moduli on open Farey intervals, obtained in binary64
 * arithmetic by bisection.
 */

// Every cross-product used to order fractions is then at most
// MAX_EXACT_ORDER^2 and therefore remains a safe JavaScript integer.
const MAX_EXACT_ORDER = Math.floor(Math.sqrt(Number.MAX_SAFE_INTEGER));
const DEFAULT_BISECTION_ITERATIONS = 90;

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

function greatestCommonDivisor(a, b) {
  let left = Math.abs(a);
  let right = Math.abs(b);
  while (right !== 0) [left, right] = [right, left % right];
  return left;
}

function reducedFraction(value, name) {
  if (
    !value ||
    !Number.isSafeInteger(value.numerator) ||
    !Number.isSafeInteger(value.denominator) ||
    value.denominator < 1 ||
    value.numerator < 0 ||
    value.numerator > value.denominator ||
    greatestCommonDivisor(value.numerator, value.denominator) !== 1
  ) {
    throw new RangeError(
      `${name} must be a reduced fraction between zero and one`,
    );
  }
  return value;
}

function fareySequence(order) {
  const n = exactOrder(order);
  const fractions = [];
  for (let denominator = 1; denominator <= n; denominator += 1) {
    for (let numerator = 0; numerator <= denominator; numerator += 1) {
      if (greatestCommonDivisor(numerator, denominator) === 1) {
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

function arcData(angleFraction, left, right, order) {
  const n = exactOrder(order);
  if (n < 3) {
    throw new RangeError(
      "Use the exact order-one or order-two boundary description",
    );
  }
  if (!Number.isFinite(angleFraction)) {
    throw new RangeError("angleFraction must be finite");
  }
  const leftFraction = reducedFraction(left, "left");
  const rightFraction = reducedFraction(right, "right");
  const parameters = fareyPairParameters(leftFraction, rightFraction, n);
  const leftValue = leftFraction.numerator / leftFraction.denominator;
  const rightValue = rightFraction.numerator / rightFraction.denominator;
  return {
    n,
    leftFraction,
    rightFraction,
    parameters,
    leftValue,
    rightValue,
  };
}

// Math.sin(Math.PI * value) loses most of its relative accuracy when value is
// very close to an integer. Reducing first keeps the order-three terminal
// limit stable even at the last representable binary64 values below 1/2.
function sineOfPiMultiple(value) {
  const nearestInteger = Math.round(value);
  const remainder = value - nearestInteger;
  if (Math.abs(remainder) < 0.25) {
    const sign = nearestInteger % 2 === 0 ? 1 : -1;
    return sign * Math.sin(Math.PI * remainder);
  }
  return Math.sin(Math.PI * value);
}

/**
 * Solve the Ito scalar equation on the strict interior of one Farey interval.
 * Endpoint values are deliberately excluded: at n=3 and x=1/2 the nonreal
 * arc has one-sided limiting modulus 1/2, whereas the outer radial boundary
 * value is 1 because the boundary also contains -1.
 */
function itoArcRadius(
  angleFraction,
  left,
  right,
  order,
  iterations = DEFAULT_BISECTION_ITERATIONS,
) {
  positiveInteger(iterations, "iterations");
  const {
    n,
    leftValue,
    rightValue,
    parameters,
  } = arcData(
    angleFraction,
    left,
    right,
    order,
  );
  if (!(leftValue < angleFraction && angleFraction < rightValue)) {
    throw new RangeError(
      "angleFraction must lie strictly inside the specified Farey interval",
    );
  }

  const { p, q, r, s, d } = parameters;
  // Subtract the represented endpoint first. The algebraically equivalent
  // forms q*x-p and s*x-r can round to zero at the next binary64 number after
  // a Farey endpoint and would erase a valid strict-interior displacement.
  const terminalOrderThreeArc =
    n === 3 && p === 1 && q === 2 && r === 1 && s === 3;
  const terminalDistance = terminalOrderThreeArc
    ? rightValue - angleFraction
    : 0;
  const aOverPi = terminalOrderThreeArc
    ? 4 * terminalDistance
    : 2 * q * Math.abs(angleFraction - p / q);
  const bOverPi = terminalOrderThreeArc
    ? 1 - 6 * terminalDistance
    : (2 * s * Math.abs(angleFraction - r / s)) / d;
  const sineA = sineOfPiMultiple(aOverPi);
  const sineB = sineOfPiMultiple(bOverPi);
  // On the terminal order-three arc, A+B=pi(1-2*delta). Computing
  // sin(2*pi*delta) directly preserves the final binary64 point below 1/2.
  const target = terminalOrderThreeArc
    ? sineOfPiMultiple(2 * terminalDistance)
    : sineOfPiMultiple(aOverPi + bOverPi);
  const residual = (rho) =>
    rho ** (s / d) * sineA +
    rho ** q * sineB -
    target;

  const lowerResidual = residual(0);
  // This factored identity avoids catastrophic cancellation in
  // sin(A)+sin(B)-sin(A+B) at representable points next to an endpoint.
  const upperResidual =
    4 *
    sineOfPiMultiple(aOverPi / 2) *
    sineOfPiMultiple(bOverPi / 2) *
    sineOfPiMultiple((aOverPi + bOverPi) / 2);
  if (
    !Number.isFinite(lowerResidual) ||
    !Number.isFinite(upperResidual) ||
    !(lowerResidual < 0 && upperResidual > 0)
  ) {
    throw new RangeError(
      "the scalar radial equation must have a finite sign-changing bracket on (0,1)",
    );
  }

  let lower = 0;
  let upper = 1;
  for (let iteration = 0; iteration < iterations; iteration += 1) {
    const midpoint = (lower + upper) / 2;
    if (midpoint === lower || midpoint === upper) break;
    if (residual(midpoint) < 0) lower = midpoint;
    else upper = midpoint;
  }
  const estimate = (lower + upper) / 2;
  return estimate < 1 ? estimate : lower;
}

/**
 * Return the outer radial boundary value associated with a Farey interval.
 * Every Farey endpoint has radial value 1, including x=1/2 at order three.
 * Use `itoArcRadius` for the open nonreal arc and its one-sided limit.
 */
function radialBoundaryRadius(
  angleFraction,
  left,
  right,
  order,
  iterations = DEFAULT_BISECTION_ITERATIONS,
) {
  positiveInteger(iterations, "iterations");
  const { leftValue, rightValue } = arcData(
    angleFraction,
    left,
    right,
    order,
  );
  if (angleFraction === leftValue || angleFraction === rightValue) return 1;
  return itoArcRadius(angleFraction, left, right, order, iterations);
}

/**
 * @deprecated Use `radialBoundaryRadius`; this name is retained for backward
 * compatibility with earlier downloadable examples.
 */
function boundaryRadius(
  angleFraction,
  left,
  right,
  order,
  iterations = DEFAULT_BISECTION_ITERATIONS,
) {
  return radialBoundaryRadius(
    angleFraction,
    left,
    right,
    order,
    iterations,
  );
}

function polarPoint(angleFraction, radius) {
  return {
    real: radius * Math.cos(2 * Math.PI * angleFraction),
    imaginary: radius * Math.sin(2 * Math.PI * angleFraction),
    angleFraction,
    radius,
  };
}

/**
 * Sample the closed upper boundary. `samplesPerInterval` counts the points on
 * each nonreal Farey branch, including its two endpoints before shared
 * endpoints are deduplicated. The exceptional real segment at order three is
 * represented exactly by its two endpoints.
 */
function upperBoundary(order, samplesPerInterval = 80) {
  const n = exactOrder(order);
  if (n < 3) {
    throw new RangeError("upperBoundary is defined here for order at least 3");
  }
  positiveInteger(samplesPerInterval, "samplesPerInterval");
  if (samplesPerInterval < 2) {
    throw new RangeError(
      "samplesPerInterval must be at least 2 for a sampled boundary",
    );
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
      for (let sample = 1; sample < samplesPerInterval - 1; sample += 1) {
        const x =
          leftValue +
          ((rightValue - leftValue) * sample) / (samplesPerInterval - 1);
        points.push(polarPoint(x, itoArcRadius(x, left, right, n)));
      }
      // The open nonreal arc tends to -1/2, while the outer radial endpoint
      // on the same ray is -1. Together they give the exact attached segment.
      points.push({
        real: -0.5,
        imaginary: 0,
        angleFraction: 0.5,
        radius: 0.5,
      });
      points.push({
        real: -1,
        imaginary: 0,
        angleFraction: 0.5,
        radius: 1,
      });
      continue;
    }

    for (let sample = 0; sample < samplesPerInterval; sample += 1) {
      if (index > 0 && sample === 0) continue;
      const x =
        leftValue +
        ((rightValue - leftValue) * sample) / (samplesPerInterval - 1);
      const radius =
        sample === 0 || sample === samplesPerInterval - 1
          ? 1
          : itoArcRadius(x, left, right, n);
      points.push(polarPoint(x, radius));
    }
  }
  return points;
}

/**
 * Sample the full boundary. At order three the closed SVG walk necessarily
 * traverses the attached real segment once in each direction.
 */
function fullBoundary(order, samplesPerInterval = 80) {
  const n = exactOrder(order);
  positiveInteger(samplesPerInterval, "samplesPerInterval");
  if (n === 1) {
    return [{ real: 1, imaginary: 0, angleFraction: 0, radius: 1 }];
  }
  if (n === 2) {
    return [
      { real: -1, imaginary: 0, angleFraction: 0.5, radius: 1 },
      { real: 1, imaginary: 0, angleFraction: 0, radius: 1 },
    ];
  }
  const upper = upperBoundary(n, samplesPerInterval);
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

const boundaryExplorerRoot = document.querySelector(".boundary-explorer");

if (boundaryExplorerRoot) {
  const svgNamespace = "http://www.w3.org/2000/svg";
  const plotSize = 760;
  const plotPadding = 78;
  const plotRadius = (plotSize - 2 * plotPadding) / 2;
  const plotCenter = plotSize / 2;
  const fullMarkerOrderLimit = 12;
  const sparseMarkerDenominatorLimit = 12;
  const samplesPerInterval = 55;
  const orderInput = boundaryExplorerRoot.querySelector("[data-boundary-order-input]");
  const orderHelp = boundaryExplorerRoot.querySelector("#boundary-order-help");
  const plot = boundaryExplorerRoot.querySelector('svg[role="img"]');
  const plotDescription = plot?.querySelector("desc");
  const plotCaption = boundaryExplorerRoot.querySelector("figure figcaption");
  const sidePanel = boundaryExplorerRoot.querySelector(".boundary-explorer-grid aside");
  const numericalCopy = sidePanel?.querySelector("section:nth-of-type(2) p:last-child");
  const fareyPairDetails = sidePanel?.querySelector("details");
  const fareyPairSummary = fareyPairDetails?.querySelector("summary");
  const fareyPairTable = fareyPairDetails?.querySelector(".farey-pair-table");
  const fareyPairTableCaption = fareyPairTable?.querySelector("caption");
  const fareyPairRows = fareyPairTable?.querySelector("[data-farey-pair-rows]");
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
      error.className = "boundary-explorer-error";
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
    const firstLabel = plot.querySelector(".boundary-plot-label");
    plot.insertBefore(element, firstLabel);
  }

  function fractionLabel(fraction) {
    return fraction.numerator + "/" + fraction.denominator;
  }

  function updateFareyTable(order) {
    const fractions = order >= 3 ? upperFarey(order) : [];
    const fareyPairs = fractions.slice(0, -1).map((left, index) => {
      const right = fractions[index + 1];
      return { left, right, ...fareyPairParameters(left, right, order) };
    });

    if (!fareyPairDetails || !fareyPairSummary || !fareyPairRows) {
      return fareyPairs;
    }
    fareyPairDetails.hidden = fareyPairs.length === 0;
    fareyPairSummary.textContent = "Open all Farey pairs for n=" + order;
    if (fareyPairTableCaption) {
      fareyPairTableCaption.textContent =
        "Consecutive Farey pairs and relabelled data with q<s for n=" + order;
    }
    fareyPairRows.replaceChildren();
    for (const fareyPair of fareyPairs) {
      const row = document.createElement("tr");
      const pair = document.createElement("th");
      const denominators = document.createElement("td");
      const d = document.createElement("td");
      const e = document.createElement("td");
      pair.scope = "row";
      pair.textContent =
        fractionLabel(fareyPair.left) +
        " → " +
        fractionLabel(fareyPair.right);
      denominators.textContent =
        "(" +
        fareyPair.p +
        "/" +
        fareyPair.q +
        "," +
        fareyPair.r +
        "/" +
        fareyPair.s +
        ")";
      d.textContent = String(fareyPair.d);
      e.textContent = String(fareyPair.e);
      row.append(pair, denominators, d, e);
      fareyPairRows.append(row);
    }
    return fareyPairs;
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
      const upperMarker = createSvgElement("circle", {
        "aria-hidden": "true",
        class: "boundary-plot-root",
        cx: upperCoordinate.x,
        cy: upperCoordinate.y,
        "data-farey-root": "",
        r: 4.5,
      });
      const upperTitle = createSvgElement("title", {});
      upperTitle.textContent =
        "e^(2πi·" +
        fractionLabel(fraction) +
        "), endpoint root; normalized angle x=" +
        fractionLabel(fraction);
      upperMarker.append(upperTitle);
      insertPlotElement(upperMarker);
      markerCount += 1;
      if (Math.abs(Math.sin(angle)) > 1e-12) {
        const lowerCoordinate = toSvgCoordinate(
          Math.cos(angle),
          -Math.sin(angle),
        );
        const lowerMarker = createSvgElement("circle", {
          "aria-hidden": "true",
          class: "boundary-plot-root",
          cx: lowerCoordinate.x,
          cy: lowerCoordinate.y,
          "data-farey-root": "",
          r: 4.5,
        });
        const lowerTitle = createSvgElement("title", {});
        lowerTitle.textContent =
          "e^(−2πi·" +
          fractionLabel(fraction) +
          "), conjugate of the endpoint root corresponding to the upper-half parameter x=" +
          fractionLabel(fraction);
        lowerMarker.append(lowerTitle);
        insertPlotElement(lowerMarker);
        markerCount += 1;
      }
    }
    return markerCount;
  }

  function updatePlot(order) {
    if (!plot || !orderInput) return;

    plot.querySelectorAll(
      ".boundary-plot-region, .boundary-plot-interval, .boundary-plot-point, .boundary-plot-root",
    ).forEach((element) => element.remove());

    const kind = order === 1 ? "point" : order === 2 ? "interval" : "region";
    let boundary = [];
    if (kind === "point") {
      const coordinate = toSvgCoordinate(1, 0);
      insertPlotElement(
        createSvgElement("circle", {
          class: "boundary-plot-point",
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
          class: "boundary-plot-interval",
          x1: left.x,
          x2: right.x,
          y1: left.y,
          y2: right.y,
          "data-boundary-interval": "",
        }),
      );
    } else {
      boundary = fullBoundary(order, samplesPerInterval);
      insertPlotElement(
        createSvgElement("path", {
          class: "boundary-plot-region",
          d: boundaryPath(boundary),
          "data-boundary-region": "",
        }),
      );
    }

    const markerCount = appendFareyMarkers(order);
    const fareyPairs = updateFareyTable(order);
    plot.setAttribute("aria-label", "Boundary of Theta " + order);
    if (plotDescription) {
      plotDescription.textContent =
        kind === "point"
          ? "The stochastic eigenvalue region of order one, the exact single point one in the complex plane. The dashed circle is the unit circle."
          : kind === "interval"
            ? "The stochastic eigenvalue region of order two, the exact real interval from minus one to one. The dashed circle is the unit circle."
            : "The boundary of the stochastic eigenvalue region of order " +
              order +
              ", drawn from exact Farey-pair data and numerical solutions of the scalar radial equation. The dashed circle is the unit circle." +
              (order === 3
                ? " The exceptional real segment from minus one to minus one half is included exactly."
                : "");
    }
    if (plotCaption) {
      const markerCopy =
        order <= fullMarkerOrderLimit
          ? "The roots of unity associated with the Farey endpoints are marked on the closed upper semicircle and, except for ±1, at their conjugates below the real axis."
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
              fareyPairs.length +
              " Farey interval" +
              (fareyPairs.length === 1 ? "" : "s") +
              " in 0≤x≤1/2, reflected across the real axis." +
              (order === 3
                ? " The segment [−1,−1/2] is exact; the closed SVG walk traverses this attached segment once in each direction."
                : "") +
              " The dashed circle is |λ|=1. Farey fractions specify endpoint roots exactly, but their SVG coordinates and all sampled arc coordinates are floating-point approximations; region-path coordinates are rounded to the nearest 0.01 in viewBox coordinates. " +
              markerCopy;
    }
    if (numericalCopy) {
      numericalCopy.textContent =
        kind === "region"
          ? "Moduli for parameters in the open Farey intervals are found by IEEE 754 binary64 (double-precision) bisection. Each nonreal branch uses " +
            samplesPerInterval +
            " points, and the SVG joins them by line segments. No bound on the geometric error of this polyline approximation is asserted." +
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
    boundaryExplorerRoot.dataset.boundaryFareyPairCount = String(
      fareyPairs.length,
    );
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
