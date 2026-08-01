# Topic II independent re-audit — From convex order to active sides

Route: `/proof/topic-ii/`

Canonical source: Part I, manuscript pages 10–15, with Lemmas A.1 and A.3
brought forward from manuscript pages 61 and 63.

## Read 1 — formal proof and source fidelity

- Confirmed the pedagogical order against the PDF labels: Lemmas 2.7–2.10,
  Proposition 3.1, Lemmas A.1 and A.3, Theorem 3.2, Remark 3.3, and Lemma 4.1.
- Confirmed that the route contains ten formal cards and nine complete proofs;
  the only non-proof item is Remark 3.3.
- Checked that every formal statement and proof is supplied by the generated
  manuscript extraction rather than a rewritten substitute. The appendix
  labels are retained even though the two lemmas are moved to their first
  point of use.
- Re-read the complete proof chain. The finite determinant criteria feed the
  fixed-normal-fan transfer; the Perron and polarity lemmas are then available
  before the hereditary saturation theorem invokes them; Lemma 4.1 converts
  set contact to an image-vertex witness only after saturation is proved.
- Added a visible statement-classification badge and a closed source panel to
  every result. The four public categories are used; proofs are not
  classified and no evidence-status badge was introduced.
- Tightened the Bitsoris note: the cited paper supplies the known
  nonnegative-matrix polyhedral-invariance criterion, while Proposition 3.1
  proves the fixed planar normal-fan specialization and records its
  first-harmonic identity explicitly.
- Tightened the Lemma 4.1 note: Dmitriev–Dynkin/Swift is identified as the
  historical side-contact antecedent, while the exact exposed-face witness
  used here is proved in full on the page. This avoids claiming an unverified
  word-for-word predecessor.

One mathematical error was found outside the formal manuscript proof. The
expanded boundedness explainer wrote `-d` as a positive combination of the
normals and concluded `-|d|^2 >= 0`; that implication is false. Positive
spanning expresses `d` itself as a nonnegative combination, and pairing with
the recession inequalities gives `|d|^2 <= 0`, hence `d=0`. The explainer now
uses the correct argument.

Status after read 1: **formal chain passes; one explanatory error corrected**.

## Read 2 — first-use accessibility and rendered mathematics

- Rewrote the opening so the purely convex Lemmas 2.7–2.10 do not prematurely
  assume an elliptic contraction, a finite vertex budget, or support slack.
  The text now introduces `T`, `N`, finiteness, and `N`-criticality only when
  the later saturation theorem needs them.
- Corrected the definition of a continuous point function. Its codomain is
  the real plane `V`, identifiable with `R^2` or `C`; the former text said
  `C^2`, which is four-dimensional over the reals and contradicted the
  manuscript.
- Removed two literal source-encoding artefacts that rendered as `i&lt;j` and
  `{"exposes"}` rather than mathematical prose.
- Rechecked first-use explanations for complete certificate, exposed face,
  lifted argument, support number, normal fan, componentwise inequality,
  spectral radius, Perron vectors, polarity, vertex budget, support slack,
  recession cone, complementarity, Neumann series, saturation, “meets,” and
  witness. Each appears before the formal result that first uses it.
- Corrected Figure II.2. The old SVG rays did not have the unit directions
  claimed in its caption. The displayed vectors now have equal length and
  exact angles `0`, `pi/6`, and `pi/3`, so
  `(sqrt(3)/2,1/2)=(u_j+u_(j+1))/sqrt(3)` is represented geometrically as
  well as textually.
- Restored the intended semantic colour aliases used by the multi-page proof
  reader. Without them, active topic tabs, guided checks, and muted source
  text silently lost their declared colours.
- Opened the normal-fan guided layer in a desktop browser and visually checked
  labels, arrows, angle marks, equation, caption, and reading order.
- A clean browser load reported ten result cards, nine proofs, nine source
  panels, the expected provenance sequence, and no runtime exception or
  “unhandled script error” banner.
- A 390-pixel mobile pass showed no document-width overflow; the source panel,
  long citation, provenance badge, and disclosure labels remained readable.
- Targeted ESLint and the full site compilation passed after these changes.

Status after read 2: **Topic II passes locally**. The full site build compiled;
the combined proof-route and numerical suite passed all 21 tests; and
`/proof/topic-ii` returned HTTP 200 in the final local check.
