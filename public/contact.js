document.addEventListener("submit", (event) => {
  const form = event.target;

  if (!(form instanceof HTMLFormElement) || !form.matches(".contact-form")) {
    return;
  }

  if (event.defaultPrevented) {
    return;
  }

  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") ?? "").trim();
  const replyTo = String(data.get("email") ?? "").trim();
  const subject =
    String(data.get("subject") ?? "").trim() ||
    "Question about Critical Invariant Polygons";
  const message = String(data.get("message") ?? "").trim();
  const address = `${["brecht", "verbeken"].join(".")}@${[
    "gmail",
    "com",
  ].join(".")}`;
  const body = [
    message,
    "",
    "—",
    `From: ${name}`,
    `Reply-to: ${replyTo}`,
    "Sent from the paper website contact form.",
  ].join("\n");

  window.location.href = `mailto:${address}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
});

document.addEventListener("click", (event) => {
  const link = event.target instanceof Element
    ? event.target.closest("a.skip-link")
    : null;
  if (!(link instanceof HTMLAnchorElement)) return;

  const href = link.getAttribute("href");
  if (!href || !href.startsWith("#")) return;
  const target = document.getElementById(href.slice(1));
  if (!target) return;

  window.requestAnimationFrame(() => {
    if (typeof target.focus === "function") {
      target.focus({ preventScroll: true });
    }
  });
});

function revealFallbackContactForms() {
  document.querySelectorAll("form.contact-form").forEach((form) => {
    if (!(form instanceof HTMLFormElement)) return;
    if (form.dataset.contactController === "react") return;

    form.dataset.contactController = "fallback";
    form.hidden = false;
    form.removeAttribute("aria-hidden");
    const submit = form.querySelector("[data-contact-submit]");
    if (submit instanceof HTMLButtonElement) submit.disabled = false;
  });
}

if (document.readyState === "complete") {
  window.setTimeout(revealFallbackContactForms, 0);
} else {
  window.addEventListener(
    "load",
    () => window.setTimeout(revealFallbackContactForms, 0),
    { once: true },
  );
}
