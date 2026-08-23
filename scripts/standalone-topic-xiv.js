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
