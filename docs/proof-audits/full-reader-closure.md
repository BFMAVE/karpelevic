# Full proof-reader closure audit

Date: 1 August 2026

Scope: Topics I–XIV, rendered on sixteen local routes because Topics VI and
XII are each divided into Parts A and B.

## Canonical-content closure

- The Part I and Part II website content was regenerated from
  `Complete_Karp_arXiv.tex` before the final build.
- Topics I–XIII contain 93 formal statement cards and 81 complete manuscript
  proof blocks. Topic XIV is a worked example and computational laboratory,
  not an additional proof dependency.
- Every proof-bearing card presents the canonical manuscript statement and
  proof before the added guided explanation. The explanatory layer never
  replaces or silently shortens the formal proof.
- Balanced nested-block extraction now protects proofs containing Pandoc
  tables. This restored the previously truncated second halves of Proposition
  5.1 and Lemma 5.5; all Topic III–IV proofs were then checked against their
  canonical terminal proof markers.

## Dependency, link, and provenance closure

- The dependency graph runs only from an earlier topic to a later one. Formal
  setups needed by a proof are rendered before that proof; locative roadmap
  references are explicitly distinguished from premises.
- A route-wide audit loaded all sixteen pages, required every internal
  proof-reader fragment to resolve on its target page, and required every DOM
  identifier to be unique. This caught and repaired stale Topic I/II links and
  duplicate deterministic figures in Topics VIII–XI.
- The only visible statement categories are `Classical result`, `Previously
  known`, `Strengthened`, and `New result`. Every Classical, Previously known,
  and Strengthened item has at least one registered source. Items whose only
  antecedent is Karpelevič’s original argument remain cited but unbadged.
- Lemma 4.14 now cites Hatcher, *Algebraic Topology*, §1.3 for path lifting and
  Schneider for the convex-boundary ingredient.

## Mathematical and visual corrections found during adversarial review

- Corrected the positive-spanning sign argument in Topic II's boundedness
  explainer.
- Corrected false or misleading mathematical plates in Topics II–IV and XIII,
  including exact vector angles, side membership, mutation arrows, residue
  displacement, and the order-three real segment.
- Corrected the Topic XIV sampler to the numerical appendix's endpoint
  convention, strengthened input validation, separated exact Farey data from
  floating-point output, and removed an SVG hydration failure.
- Rechecked the order-seven ledger, the worked ray `x=3/8`, the carrier
  identity, all cell-midpoint residuals through order 12, the exceptional
  order-three segment, and conjugation symmetry.

## Final verification

- Manuscript-content regeneration: passed.
- ESLint: passed.
- Production build: passed with all sixteen proof routes in the manifest.
- Automated suite: 28/28 tests passed.
- Clean local route sweep: all sixteen proof routes and the downloadable
  boundary module returned HTTP 200.
- Clean route-wide closure sweep: no error banner, duplicate identifier, or
  unresolved proof fragment.
- GitHub project-subpath build: Topic XIV's previous-topic link and downloadable
  code link were verified under `/karpelevic/`.

## Publication state

Topics II–XIV remain local. No deployment or push formed part of this closure
audit; Topic I remains the only public proof chapter pending author review.
