# Topic I — Student-perspective review report

- Route: /proof/
- Manuscript scope: PDF pages 2–3 and 6–10; Lemma A.2 on page 63.
- Formal inventory: 2 definitions and 7 results.
- Student baseline: one standard linear-algebra course; no specialist
  background.
- Review status: recommendations only; no page changes implemented.

## Independent reading 1

### Where the reader’s understanding holds

- The opening real-plane setup explains why complex notation is an adapted
  coordinate rather than part of the original data.
- The foundation panels on boundary, affine hull, relative interior,
  compactness, strict polygons, supporting lines, exposed faces, and normal
  cones answer genuine first-course questions. The two relative-interior
  examples and the warning that “strict polygon” does not mean “strictly convex
  set” are particularly effective.
- Definition 1.1 (/proof/#part-i-item-1) gives radial criticality the correct
  direction: the last outward scale at which \(N\) vertices still suffice.
- Proposition 2.2 (/proof/#part-i-item-6) is an exemplary expanded proof:
  admissible polygons, extreme points, invariance, and the minimization problem
  are all transported explicitly.
- Lemmas 2.4–2.6 (/proof/#part-i-item-8 through
  /proof/#part-i-item-10) successfully introduce Hausdorff convergence, split
  finite and infinite rotation orbits, and explain the degree-\(+1\) radial
  projection.

### Questions and points of friction, in reading order

1. Definition 1.2 (/proof/#part-i-item-2) contains the later contact-system
   vocabulary, but it arrives before the reader has seen its purpose. It is
   formally present yet creates a large working-memory demand.
2. Proposition 2.1 (/proof/#part-i-item-5) introduces
   \(\rho=\sqrt{\det T}\) without first stating the short inference
   \(\det T>0\). The adapted-inner-product construction is correct, but the
   checks that it is positive definite and \(J\)-invariant are compressed.
3. Proposition 2.3 (/proof/#part-i-item-7) uses the fact that every face of a
   polygon is exposed without a planar proof or an exact theorem location.
4. Lemma 2.5 (/proof/#part-i-item-9) chooses a supporting functional at a
   boundary point after defining such functionals, but does not establish their
   existence. Its exclusion of a segment also suppresses the affine-hull step
   that would force an invariant real line.
5. Lemma 2.6 (/proof/#part-i-item-10) explains degree well, but the last move
   from ray order to the determinant at \(a\) and the exclusion of three
   collinear extreme points are brief.
6. Lemma A.2 (/proof/#part-i-item-66) leaves nearest-point existence implicit
   and uses a one-sided derivative although a direct quadratic expansion would
   stay closer to the declared baseline.

## Independent reading 2

### Where the reader’s understanding holds

- This reader judged Topic I the best first-contact page in the reviewed range.
  The compactness counterexample, relative-interior examples, Hausdorff panel,
  root-of-unity/dense-orbit split, and degree disclosure all worked.
- Definitions 1.1–1.2 (/proof/#part-i-item-1 and
  /proof/#part-i-item-2), Proposition 2.2
  (/proof/#part-i-item-6), and Lemmas 2.4–2.6 were locally traceable.
- The endpoint audit in Lemma 2.4 and explicit use of \(\rho^k>0\) in Lemma
  2.5 were singled out as successful precision.

### Questions and points of friction, in reading order

1. At Proposition 2.3 (/proof/#part-i-item-7), this reader could not readily
   recover the domains and meanings of
   \(\mathcal E(P),\chi,I,s,\sigma,A_{\mathcal E}\). Reading 1 observed that
   these objects are formally introduced earlier in Definition 1.2; the
   disagreement therefore indicates poor local retrievability rather than a
   literally absent definition.
2. Lemma 2.5 (/proof/#part-i-item-9) has the same supporting-functional
   existence gap found in Reading 1.
3. Proposition 2.1 (/proof/#part-i-item-5) would be easier to verify with the
   two omitted adapted-metric calculations.
4. Lemma 2.6 (/proof/#part-i-item-10) changes from radial order about an interior
   point to an oriented determinant without showing the short triangle
   argument.
5. Lemma A.2 (/proof/#part-i-item-66) could avoid assuming calculus by expanding
   the squared distance directly.

## Cross-reading synthesis

Both readers found the foundational exposition unusually strong. Their main
difference concerns Proposition 2.3: one reader retained the contact dictionary
from Definition 1.2, while the other did not. Because the definitions are
present, the synthesis does not overstate this as undefined notation. It
recommends a local recap. By contrast, both the exposed-face existence fact and
the supporting-functional existence step are genuine dependency gaps for the
stated reader.

### Needed

1. **Proposition 2.3, /proof/#part-i-item-7 — every polygonal face is exposed.**
   The student knows the definition but cannot verify that every face used in
   the covariance proof has a supporting functional. Add a short planar
   classification proof (whole polygon, side, vertex, empty face) or cite an
   exact theorem and map its hypotheses.
2. **Lemma 2.5, /proof/#part-i-item-9 — supporting functional at
   \(0\in\partial P\).** Definition alone does not guarantee existence. Insert a
   two-dimensional polygon proof using an incident side/vertex normal cone, or
   link to an exact supporting-hyperplane theorem that explicitly supplies this
   functional.

### Advised

1. **Proposition 2.3, /proof/#part-i-item-7 — contact-data retrievability.**
   A reader who did not retain Definition 1.2 cannot parse equation (2.3). Add a
   compact local dictionary with domains and codomains for
   \(\mathcal E(P),\chi,I,s,\sigma,A_{\mathcal E}\); keep genuinely later
   return/tower claims labelled as a roadmap.
2. **Proposition 2.1, /proof/#part-i-item-5 — determinant and adapted metric.**
   State \(4\det T>(\operatorname{tr}T)^2\ge0\), then verify positivity of \(g\),
   \(g(Jx,Jy)=g(x,y)\), and \(J^*=J^{-1}=-J\).
3. **Lemma 2.5, /proof/#part-i-item-9 — segment exclusion.** Display the
   affine-hull inclusion and explain why two one-dimensional linear subspaces
   of the same dimension must coincide, forcing multiplication by the nonreal
   eigenvalue to preserve a real line.
4. **Lemma 2.6, /proof/#part-i-item-10 — final orientation step.** Add the short
   oriented-triangle identity or a small diagram connecting radial cyclic order
   with \(\det(b-a,c-a)>0\), and state why a middle collinear point is not
   extreme.
5. **Lemma A.2, /proof/#part-i-item-66 — nearest point and calculus.** Mention
   compactness/continuity for the minimizer and accompany the derivative with
   the direct expansion of the squared distance.

### Would be nice to add

1. **Proposition 2.1, /proof/#part-i-item-5.** Work one explicit
   \(2\times2\) elliptic matrix through \(\rho,\theta,J\).
2. **Proposition 2.3, /proof/#part-i-item-7.** Add a three-frame diagram showing
   the original polygon, its image under \(A\), and transported side/contact
   labels.
3. **Before Definition 1.2, /proof/#part-i-item-2.** Add a one-line proof map:
   critical polygon \(\to\) contacts \(\to\) mutations \(\to\) return dynamics.

## Recommendation count

- Needed: 2
- Advised: 5
- Would be nice to add: 3

## Author decisions

Pending.
