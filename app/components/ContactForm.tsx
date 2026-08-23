"use client";

import { useEffect, useRef, type FormEvent } from "react";

function contactAddress(): string {
  return `${["brecht", "verbeken"].join(".")}@${["gmail", "com"].join(".")}`;
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    form.dataset.contactController = "react";
    form.hidden = false;
    form.removeAttribute("aria-hidden");
    const submit = form.querySelector<HTMLButtonElement>("[data-contact-submit]");
    if (submit) submit.disabled = false;
  }, []);

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const replyTo = String(form.get("email") ?? "").trim();
    const subject =
      String(form.get("subject") ?? "").trim() ||
      "Question about Critical Invariant Polygons";
    const message = String(form.get("message") ?? "").trim();
    const body = [
      message,
      "",
      "—",
      `From: ${name}`,
      `Reply-to: ${replyTo}`,
      "Sent from the paper website contact form.",
    ].join("\n");

    window.location.href = `mailto:${contactAddress()}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="contact-panel" aria-labelledby="contact-heading">
      <p className="section-label">Contact</p>
      <h2 id="contact-heading">Send a note</h2>
      <p className="contact-invitation">
        I regard mathematics as a cultural and community endeavour. All
        comments are welcome—especially if you spot an error.
      </p>
      <form
        ref={formRef}
        className="contact-form"
        hidden
        aria-hidden="true"
        onSubmit={prepareEmail}
      >
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="contact-wide">
          <span>Subject</span>
          <input
            name="subject"
            type="text"
            defaultValue="Question about Critical Invariant Polygons"
          />
        </label>
        <label className="contact-wide">
          <span>Message</span>
          <textarea name="message" rows={6} required />
        </label>
        <div className="contact-actions contact-wide">
          <button
            className="button button-primary"
            data-contact-submit
            disabled
            type="submit"
          >
            Open email to send
          </button>
          <p>
            This opens your email application with a prepared message.
            Nothing is transmitted through the website itself.
          </p>
        </div>
      </form>
      <noscript>
        <p className="contact-noscript">
          The contact form needs JavaScript so that no message data can enter a
          website URL. You can instead email{" "}
          <a href="mailto:brecht.verbeken%40gmail.com?subject=Question%20about%20Critical%20Invariant%20Polygons">
            brecht.verbeken&#64;gmail.com
          </a>
          .
        </p>
      </noscript>
    </section>
  );
}
