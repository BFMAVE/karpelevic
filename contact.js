document.addEventListener("submit", (event) => {
  const form = event.target;

  if (!(form instanceof HTMLFormElement) || !form.matches(".contact-form")) {
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
