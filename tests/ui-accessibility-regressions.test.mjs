import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const projectRoot = new URL("..", import.meta.url);

async function source(relativePath) {
  return readFile(new URL(relativePath, projectRoot), "utf8");
}

test("every page-family skip target is programmatically focusable", async () => {
  const pageSources = await Promise.all(
    [
      "app/page.tsx",
      "app/history/page.tsx",
      "app/journey/page.tsx",
      "app/prerequisites/page.tsx",
      "app/proof/page.tsx",
      "app/components/proof/ProofChapterShell.tsx",
    ].map(source),
  );

  for (const pageSource of pageSources) {
    assert.match(pageSource, /<main\b[^>]*tabIndex=\{-1\}/);
  }
});

test("proof navigation and controls expose only truthful enhanced state", async () => {
  const [topicI, chapterShell, topicIScript, chapterScript] = await Promise.all([
    source("app/proof/page.tsx"),
    source("app/components/proof/ProofChapterShell.tsx"),
    source("public/proof.js"),
    source("public/proof-chapter.js"),
  ]);

  assert.match(topicI, /data-proof-reading-controls[\s\S]*?hidden/);
  assert.match(topicI, /href=\{sitePath\("\/prerequisites\/"\)\}/);
  assert.match(chapterShell, /href=\{sitePath\("\/prerequisites\/"\)\}/);
  assert.doesNotMatch(
    chapterShell,
    /aria-current=\{item\.href === "\/proof\/" \? "page"/,
  );
  assert.match(chapterShell, /aria-current=\{isCurrent \? "step"/);
  assert.ok(
    topicIScript.indexOf("addEventListener") <
      topicIScript.lastIndexOf("readingControls.hidden = false"),
  );
  assert.ok(
    chapterScript.indexOf("addEventListener") <
      chapterScript.lastIndexOf("controls.hidden = false"),
  );
});

test("Journey reserves time elements for machine-readable dates", async () => {
  const journey = await source("app/journey/page.tsx");
  assert.doesNotMatch(journey, /<time>\{(?:chapter|stop).*?\.era\}<\/time>/);
  assert.match(journey, /className="journey-era"/);
  assert.match(journey, /<time dateTime=\{firstPublished\}>/);
  assert.match(journey, /<time dateTime=\{pageTimestamp\}>/);
});

test("the contact form remains inert until a controller has attached", async () => {
  const component = await source("app/components/ContactForm.tsx");
  const css = await source("app/globals.css");
  assert.match(component, /className="contact-form"[\s\S]*?hidden[\s\S]*?aria-hidden="true"/);
  assert.match(css, /\.contact-form\[hidden\]\s*\{\s*display:\s*none/);
  assert.match(component, /data-contact-submit[\s\S]*?disabled/);
  assert.match(component, /<noscript>/);
  assert.match(component, /mailto:brecht\.verbeken%40gmail\.com/);

  class Element {}
  class HTMLButtonElement extends Element {
    disabled = true;
  }
  class HTMLFormElement extends Element {
    dataset = {};
    hidden = true;
    fields = new Map([
      ["name", "Reader"],
      ["email", "reader@example.org"],
      ["subject", "Question"],
      ["message", "Hello"],
    ]);
    submit = new HTMLButtonElement();
    matches(selector) {
      return selector === ".contact-form";
    }
    removeAttribute(name) {
      if (name === "aria-hidden") this.ariaHiddenRemoved = true;
    }
    querySelector(selector) {
      return selector === "[data-contact-submit]" ? this.submit : null;
    }
  }
  class HTMLAnchorElement extends Element {}
  class FakeFormData {
    constructor(form) {
      this.form = form;
    }
    get(name) {
      return this.form.fields.get(name) ?? null;
    }
  }

  const listeners = new Map();
  const scheduled = [];
  const form = new HTMLFormElement();
  const window = {
    location: { href: "https://example.test/" },
    requestAnimationFrame(callback) {
      callback();
    },
    setTimeout(callback) {
      scheduled.push(callback);
    },
    addEventListener() {},
  };
  const document = {
    readyState: "complete",
    addEventListener(type, callback) {
      listeners.set(type, callback);
    },
    querySelectorAll(selector) {
      return selector === "form.contact-form" ? [form] : [];
    },
    getElementById() {
      return null;
    },
  };

  vm.runInNewContext(await source("public/contact.js"), {
    document,
    window,
    Element,
    HTMLAnchorElement,
    HTMLButtonElement,
    HTMLFormElement,
    FormData: FakeFormData,
    encodeURIComponent,
  });

  assert.equal(typeof listeners.get("submit"), "function");
  assert.equal(form.hidden, true);

  const earlySubmit = {
    target: form,
    defaultPrevented: false,
    preventDefault() {
      this.defaultPrevented = true;
    },
  };
  listeners.get("submit")(earlySubmit);
  assert.equal(earlySubmit.defaultPrevented, true);
  assert.match(window.location.href, /^mailto:/);

  window.location.href = "unchanged";
  listeners.get("submit")({ target: form, defaultPrevented: true });
  assert.equal(window.location.href, "unchanged");

  assert.equal(scheduled.length, 1);
  scheduled[0]();
  assert.equal(form.hidden, false);
  assert.equal(form.submit.disabled, false);
  assert.equal(form.dataset.contactController, "fallback");
});

test("responsive CSS fixes content tracks instead of masking overflow", async () => {
  const css = await source("app/globals.css");
  assert.doesNotMatch(css, /main\s*\{\s*overflow:\s*hidden/);
  assert.doesNotMatch(css, /body\s*\{[\s\S]*?min-width:\s*320px/);
  assert.match(css, /\.section-grid > \*[\s\S]*?min-width:\s*0/);
  assert.match(css, /\.display-equation\s*\{[\s\S]*?overflow-x:\s*auto/);
  assert.match(css, /\.proof-chapter-result > \.topic-i-textbook-item-heading\s*\{[\s\S]*?grid-template-columns:\s*minmax\(0, 1fr\)/);
  assert.match(css, /\.topic-xiv-worked-steps p\s*\{[\s\S]*?overflow-wrap:\s*anywhere/);
  assert.match(
    css,
    /@media \(max-width: 590px\)[\s\S]*?\.primary-navigation\s*\{[\s\S]*?overflow-x:\s*visible;[\s\S]*?flex-wrap:\s*wrap/,
  );
  assert.match(
    css,
    /\.proof-chapter-atlas > \.proof-chapter-prerequisite-link\s*\{[\s\S]*?display:\s*inline-block;[\s\S]*?min-height:\s*0;[\s\S]*?padding:\s*0;/,
  );
});
