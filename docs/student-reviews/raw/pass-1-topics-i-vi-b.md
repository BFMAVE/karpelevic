# Student-perspective adversarial review — Pass 1, Topics I–VI-B

- Review date: 1 August 2026
- Physical pages reviewed: Topic I, Topic II, Topic III, Topic IV, Topic V,
  Topic VI-A, and Topic VI-B
- Routes reviewed: `/proof/`, `/proof/topic-ii/`, `/proof/topic-iii/`,
  `/proof/topic-iv/`, `/proof/topic-v/`, `/proof/topic-vi/a/`, and
  `/proof/topic-vi/b/`
- Reader assumed: a motivated mathematics student who has completed a standard
  undergraduate linear-algebra course, but has not studied specialist convex
  geometry, topological degree, projective geometry, symbolic dynamics, lattice
  theory, or stochastic spectral theory.
- Method: each rendered page was read live and linearly from its opening through
  its final result. Every expandable definition, intuition panel, proof, and
  guided explanation was opened. At each transition I asked whether the reader
  knows the terms, whether definitions precede use, whether an implication can
  be verified from the page or a precisely identified earlier result, whether
  notation remains stable, and whether an example or figure is genuinely
  needed.
- Scope of this file: this is the first independent student reading. It records
  evidence and candidate recommendations only. It does **not** assert that a
  second reading has occurred, and none of the recommendations below has been
  implemented.

The recommendation labels follow the project rubric:

- **Needed**: the intended student cannot responsibly decode or verify a step,
  a nonstandard object is undefined, a visible error changes the meaning, or a
  dependency cannot be located.
- **Advised**: the argument can be reconstructed, but only with
  disproportionate effort or background beyond the declared reader.
- **Would be nice to add**: optional enrichment that would improve intuition,
  memory, pacing, or navigation without closing a logical gap.

---

## Topic I — Adapted coordinates and the elementary plane toolkit

Route: `/proof/`

### Linear-reading log

1. **Chapter opening and real-plane setup.** The page starts at the right level:
   it says what the real plane is, what a real-linear map is, and why complex
   notation is an adapted coordinate rather than an assumption. This prevents
   the common misconception that the original problem already comes with a
   canonical Euclidean metric or complex structure. The definitions of compact
   nondegenerate polygon, invariant polygon, boundary, affine hull, relative
   interior, supporting line, exposed face, normal cone, positive orientation,
   conjugacy, polygonal complexity, and elliptic contraction are all encountered
   before the main results use them.

2. **Expandable explanation of interior versus relative interior.** The two
   examples—a two-dimensional set in the plane and a segment in its affine
   line—successfully answer the student question “relative to what?”. The page
   also states the general boundary formula with closure before specializing to
   closed convex sets. This is a strong self-contained repair of a subtle point.

3. **Strict polygons and support geometry.** The prose and diagrams distinguish
   a reduced cyclic vertex list from a polygon with redundant collinear points.
   The page explicitly warns that its custom term “strict polygon” does not mean
   “strictly convex set.” The supporting-line and normal-cone illustrations make
   contact faces and strict support visible. A student can now understand why a
   boundary normal inside the vertex cone exposes only the vertex, while a
   boundary normal may expose a side.

4. **Definition 1.1, polygonal complexity.** The admissible class and the value
   infinity in the empty case are intelligible. The word “vertex budget” is
   translated into a concrete count. The minimum exists because the possible
   counts form a nonempty subset of the positive integers, although that last
   well-ordering step is not foregrounded.

5. **Definition 1.2, radial criticality and one-sided contact data.** The radial
   direction is now described correctly as the last outward scale at which
   (N) vertices suffice. The later contact vocabulary—one-sided ownership,
   strict set, contact rotation, and legal mutation—is defined, but it arrives in
   a large block before the student has seen why these objects are useful. It is
   logically complete but cognitively expensive.

6. **Proposition 2.1, adapted complex structures.** The statement is readable,
   and the proof provides the needed calculations: Cayley–Hamilton gives
   (J^2=-I); averaging an auxiliary inner product makes (J) orthogonal; the
   adjoint is computed; and an orientation-reversing reflection changes (J)
   to (-J). The student can follow the algebra from a linear-algebra course.
   The one inference likely to cause a pause is the introduction of
   (\rho=\sqrt{\det T}): the proof does not explicitly say at that point that
   ellipticity implies (det T>0), although it follows immediately from
   ((\operatorname{tr}T)^2<4\det T).

7. **Proposition 2.2, real-linear invariance of polygonal complexity.** This is
   one of the strongest student-facing proofs on the site. The map (P\mapsto
   AP) is treated as an actual bijection of admissible polygons, extreme points
   are transported explicitly, invariance is checked by a displayed inclusion,
   and the minimization problems are then identified. The expanded proof is
   longer than a research proof, but the added length performs real pedagogical
   work.

8. **Proposition 2.3, real-linear covariance of contact geometry.** The page
   correctly transports sides, relative interiors, exposed faces, clipping,
   mutation, labels, successor maps, and cyclic order. The optional explanation
   of relative interiors under affine maps is helpful. The proof nevertheless
   uses “every face of a polygon is exposed” as a fact without proving the planar
   polygon case or pointing to an exact theorem. A reader who knows only the
   definition of exposed face cannot verify this existence statement. The last
   paragraph is honestly marked as a roadmap for later functorial constructions,
   which avoids pretending that return maps and towers have already been
   defined.

9. **Lemma 2.4, coordinate reversal and handedness.** The conjugacy calculation,
   reindexing, and half-open endpoint audit are explicit. The expandable
   Hausdorff-convergence panel is particularly successful: it defines the
   Hausdorff distance, explains why conjugacy respects it, and supplies exactly
   the concept that a linear-algebra student would otherwise lack.

10. **Lemma 2.5, the origin is interior.** The proof has a clear two-stage
    architecture: compactness gives (0\in P), then a supporting functional
    rules out (0\in\partial P). The finite-order root-of-unity sum and the
    infinite-order density argument are separately explained, and the orbit
    diagram now has the correct radius and (k=0) point. Two transitions remain
    compressed. First, a boundary supporting functional is asserted to exist;
    the page defines such a functional but does not prove existence at a polygon
    boundary point or give an exact source location. Second, the segment case
    says invariance would preserve a real line without spelling out the affine-
    hull equality that makes this follow.

11. **Lemma 2.6, oriented order on a convex boundary.** Radial projection,
    determinant sign, and positive cyclic order are tied together well. The
    expandable degree-(+1) explanation says why the boundary is a radial graph
    and why one circuit makes one full turn; this is precisely the topological
    bridge the assumed reader needs. The final claim about vertices could be a
    little more explicit that a middle point among three collinear boundary
    points is not extreme, but the current text is followable.

12. **Lemma A.2, strict separation.** The nearest-point proof is economical and
    accessible. The existence of the nearest point follows from compactness and
    continuity, but that sentence is left implicit. The one-sided derivative and
    the resulting functional are otherwise completely transparent.

### Blockers and confusions

- At Proposition 2.3, “every face of a polygon is exposed” is indispensable to
  the transport statement but is not derivable from anything previously proved
  on the page. A student knows what the words mean but not why the assertion is
  true.
- At Lemma 2.5, the supporting-hyperplane existence step has the same issue: the
  object is defined, but existence at the chosen boundary point is not supplied.
- Definition 1.2 asks the reader to retain a substantial contact-system
  vocabulary before the first examples establish its purpose. This is not a
  formal gap, but it creates an avoidable working-memory bottleneck.

### Successful explanations worth preserving

- The absolute/relative-interior examples.
- The warning that “strict polygon” is not “strictly convex set.”
- The support-line, exposed-face, and normal-cone diagrams.
- The expanded conjugacy proof in Proposition 2.2.
- The Hausdorff-distance definition placed at the exact point of first need.
- The finite-order versus irrational-rotation split in Lemma 2.5.
- The degree-(+1) radial-graph explanation in Lemma 2.6.

### Candidate recommendations

#### Needed

1. **Proposition 2.3 — exposed faces.** Insert a short planar proof that every
   face of a polygon is exposed (classify it as the whole polygon, a maximal
   side, a vertex, or the empty face, and exhibit a supporting functional), or
   cite an exact theorem/section that supplies this fact. Merely defining
   “exposed” is not enough.
2. **Lemma 2.5 — support at a boundary point.** Add either a two-dimensional
   polygon proof—choose a side through the point or a normal in the adjacent
   vertex cone—or an exact supporting-hyperplane theorem citation and state
   explicitly that its hypotheses hold.

#### Advised

1. **Proposition 2.1.** Before defining (\rho), state in one sentence that
   ellipticity implies (det T>0), because
   (4\det T>(\operatorname{tr}T)^2\geq0).
2. **Definition 1.2.** Separate the radial-critical definition from the contact
   convention visually, and say which two pieces of the contact convention the
   next results actually need. This lowers memory load without removing content.
3. **Lemma 2.5 — segment exclusion.** Add: “From (\lambda P\subseteq P), the
   affine hull of (\lambda P) is contained in the affine hull of (P); both
   are one-dimensional linear subspaces through the origin, so they are equal.
   Thus multiplication by (e^{i\theta}) would preserve a real line.”
4. **Lemma 2.6 — noncollinearity.** State explicitly that a middle point of
   three collinear boundary points lies in the segment joining the other two and
   therefore cannot be an extreme point.
5. **Lemma A.2.** Mention that compactness of the convex set and continuity of
   the distance function guarantee the nearest point.

#### Would be nice to add

1. Add a tiny worked Definition 1.1 example comparing the triangle and square
   budgets for a simple contraction.
2. Add a one-line “proof map” before Definition 1.2 showing: critical polygon
   (→) contacts (→) mutations (→) return dynamics. This would motivate the
   vocabulary before the reader must retain it.

---

## Topic II — Stability, polarity, and hereditary saturation

Route: `/proof/topic-ii/`

### Linear-reading log

1. **Opening model and dependency contract.** The regular-heptagon example gives
   a concrete meaning to saturation before the abstractions begin. The page
   clearly distinguishes results imported from Topic I, standard background,
   and arguments proved here. It also says that the first four lemmas concern
   finite point configurations before any critical map is introduced. This
   orientation is effective.

2. **First-use vocabulary.** “Continuous point function,” “complete
   certificate,” “meets,” “support slack,” “vanishing slack,” “vertex budget,”
   and “Neumann series” receive explanations. In particular, “meets” is
   translated into nonempty intersection, and side saturation is stated as
   (E\cap TR\neq\varnothing). Those changes remove several plausible novice
   misunderstandings.

3. **Lemma 2.7, determinant certificate for strict convex position.** The
   determinant plate makes the orientation test concrete, and the finite family
   of strict inequalities explains why the certificate is stable under small
   perturbations. There is one definitional problem: the glossary explains a
   “cyclic triple” using boundary points, but the converse direction starts with
   an abstract cyclic list before any polygonal boundary has been constructed.
   That makes the definition circular at the exact point where the lemma needs
   it. The final step—from all determinant signs to “all points are extreme and
   consecutive segments are precisely the edges”—is correct but compressed.

4. **Lemma 2.8, stability of a strict convex polygon.** The finite intersection
   of open neighborhoods is explained clearly. The proof chooses a functional
   nonzero on a side direction; a linear-algebra student can reconstruct why
   such a functional exists, but one sentence about extending a nonzero vector
   to a basis would remove the pause.

5. **Lemma 2.10, angular monotonicity.** The page defines the moving point and
   what is meant by a continuous point-valued function. The derivative of the
   argument is the central calculation. It is stated in a compact complex form,
   but no derivation is supplied; a student who has had linear algebra but not
   complex analysis may not know this identity.

6. **Lemma A.1, positive near-minimizers and the Neumann construction.** The
   overall strategy is mathematically clear: treat a positive matrix using
   Perron data, approximate a nonnegative matrix by positive matrices, and
   control the limit with a weighted norm/resolvent construction. The page
   defines a weighted norm, the positive simplex, and Perron vectors. In the
   proof, however, “operator norm,” “resolvent,” “Jordan block,” “nilpotent
   part,” “absolute convergence of a matrix series,” and the telescoping
   Neumann identity appear in quick succession. These are not all guaranteed by
   the declared background, and the current definition of a Neumann series does
   not by itself justify the polynomial-times-geometric convergence required for
   Jordan blocks.

7. **Lemma A.3, polygonal approximation and polar bookkeeping.** The geometric
   idea is good: inner and outer disk bounds let one choose finitely many support
   directions, and polarity exchanges sides and vertices. The result is
   plausible to a student, but several transitions are compressed—the existence
   of those disk bounds, why a chosen support is strict at a selected vertex, and
   why the polar has at most (N) sides. A small triangle or pentagon polarity
   example would make the bookkeeping considerably easier to verify.

8. **Proposition 3.1, the support-matrix criterion.** This is the largest formal
   gap on the page. The displayed statement begins with
   (\rho B_{\Phi}(\theta)h\leq h), but the local setup never formally specifies
   (P), the number and cyclic order of its sides, the fan (Phi), normals
   (u_i=e^{i\phi_i}), support numbers (h_i), the cone containing
   (e^{-i\theta}u_i), or the rule forming the corresponding row of
   (B_{\Phi}(\theta)). The surrounding prose gestures at these objects, so an
   expert can reconstruct the intended statement, but a student cannot read it
   as a closed mathematical proposition.

9. **Theorem 3.2, hereditary saturation.** The proof architecture is strong.
   Boundedness, complementarity, and support equality are each unpacked, and the
   theorem visibly connects strict inequalities in support space with an outward
   enlargement of the contraction. The positive-cone alternative uses a
   separation theorem for a proper cone without proving the specialized
   finite-dimensional statement or locating an exact earlier result. The step
   that a strict inequality survives replacing (\rho) by
   ((1+\eta)\rho) is right, but it would be clearer to exhibit the finite
   positive margin.

### Blockers and confusions

- Proposition 3.1 is not a formally closed statement on the rendered page. The
  student cannot know exactly what (B_{\Phi}(\theta)) is or which hypotheses
  are in force without reverse-engineering the proof or manuscript.
- Lemma 2.7’s definition of a cyclic triple presupposes the boundary whose
  existence the converse is meant to prove.
- Lemma A.1 requires a compact bridge through Jordan form and Neumann-series
  convergence that the page currently does not supply at the assumed level.
- Theorem 3.2 imports a cone-separation alternative in a central step without an
  exact theorem citation or a self-contained finite-dimensional proof.

### Successful explanations worth preserving

- The regular-heptagon saturation model.
- The explicit translations of “meet,” “slack,” “continuous point function,”
  and “complete certificate.”
- The determinant-sign plate in Lemma 2.7.
- The common-neighborhood argument in Lemma 2.8.
- The compressed support-space implications in Theorem 3.2.
- The distinction between exact geometry and limiting/perturbative geometry.

### Candidate recommendations

#### Needed

1. **Lemma 2.7 — cyclic triples.** Define an abstract cyclic list without using
   a polygonal boundary: indices live in (\mathbb Z/m\mathbb Z), a starting
   point fixes a linear representative, and a cyclically ordered triple is one
   encountered in that chosen positive circular order. Only after the conclusion
   may the order be identified with boundary order.
2. **Lemma A.1 — linear-algebra bridge.** Add an expandable primer defining the
   induced operator norm, the resolvent, Jordan blocks and nilpotent parts, and
   prove that a polynomial times (r_0^k) tends to zero for (r_0<1). Then show
   explicitly why the matrix series converges absolutely and telescopes to the
   claimed inverse.
3. **Proposition 3.1 — restore the complete setup.** Before the formal statement,
   state the polygon (P), its (m) side normals (u_i=e^{i\phi_i}), its
   support vector (h), the normal fan (Phi), the adjacent cone in which
   (e^{-i\theta}u_i) lies, and the row-by-row definition of
   (B_{\Phi}(\theta)). The original manuscript setup can be retained verbatim,
   followed by the explanatory prose.
4. **Theorem 3.2 — cone alternative.** Prove the finite-dimensional cone
   separation statement used in the dichotomy, or cite an exact theorem and map
   each hypothesis to the current cone. A thematic “convexity” source is not
   sufficient for this central implication.

#### Advised

1. **Lemma 2.7.** After the determinant inequalities, add that each directed
   line through consecutive points supports the convex hull and only those two
   endpoints attain equality; hence every point is extreme and the consecutive
   segments are exactly the boundary edges.
2. **Lemma 2.8.** Explain in one sentence why a functional nonzero on a given
   side vector exists.
3. **Lemma 2.10.** Derive
   (\frac{d}{dt}\arg z(t)=\operatorname{Im}(z'(t)/z(t))) in two lines, or cite
   the precise elementary complex-calculus result.
4. **Lemma A.3.** Add a compact polarity walkthrough for one triangle or
   pentagon, labelling a vertex, its strict support, the dual side, and the count
   reversal.
5. **Theorem 3.2.** Name the positive finite margin in the strict coordinate
   inequalities and choose (eta) smaller than that margin divided by the
   relevant finite maximum. This makes persistence under outward scaling
   inspectable.

#### Would be nice to add

1. Add a single (N=5) schematic for Theorem 3.2 showing the support vector
   (h), the image (B h), a separating vector, and the retained support set.
2. Offer a short “research-proof view” for Proposition 2.2/Lemma A.1 after the
   guided proof, so advanced readers can see the argument’s compact spine.

---

## Topic III — Minimal polygons, one-sided contacts, and exact surgery

Route: /proof/topic-iii/

### Linear-reading log

1. **Chapter opening and dependency contract.** The page states exactly what is
   imported from Topics I and II: adapted coordinates, strict polygons,
   saturation, compactness tools, and determinant stability. It also explains
   the chapter’s task—replace two-sided contact ambiguity with an owned,
   one-sided contact system and then perform a controlled clipping operation.
   This is a good conceptual handoff.

2. **Definition 4.2, half-open ownership.** The picture is genuinely useful.
   A contact at a vertex belongs to exactly one adjacent side because one endpoint
   is included and the other excluded. The distinction between contact existence
   and contact ownership is made explicit, so later counting does not look like
   an arbitrary convention.

3. **Lemma 4.3, the zero-side atlas.** The case analysis is long but locally
   readable: the student can see how many image vertices or image sides can meet
   each polygon side and how half-open ownership removes double counting. The
   explanations track the geometry rather than simply restating the formal
   clauses.

4. **Lemma 4.4, side balance.** The plate and the weighted-average calculation
   make the balancing identity plausible. The term “supporting affine
   functional” is used with a normalization on the polygon, but the page does
   not explicitly require a nonconstant affine functional or a nonzero linear
   part. With the literal broad definition, a constant functional would expose
   the entire polygon rather than a proper face. The intended object is clear to
   an expert, but the definition needs the missing qualification.

5. **Lemma 4.6, matrix certificate.** This is a successful bridge from local
   determinant signs to a global finite geometric certificate. The proof says
   “strict convexity gives” the positive signs. Because Topic I carefully warned
   that a “strict polygon” is not a strictly convex set, this phrase risks
   reopening a terminology confusion. The mathematical fact used is positive
   cyclic order of the reduced polygon’s vertices.

6. **Lemma 4.7, shifted contact systems.** This is the only result on the page
   where a symbol arrives without a local contract. The proof and conclusion use
   the shift \(\kappa\) and the source formula \(x_{i+1-\kappa}\), but this
   Topic III page has not defined \(\kappa\) or formally introduced the shifted
   image-vertex list that makes this expression meaningful. The symbol is fully
   developed later in Topic IV, which is too late for a linear reader.

7. **Lemma 4.8, clipping one vertex.** The diagram, exact vertex ledger, and
   determinant checks make the surgery understandable. The page explains which
   old vertex disappears, which two new vertices appear, which edges persist,
   and why the vertex total has the desired value. This is one of the clearest
   places where a figure materially reduces proof difficulty.

8. **Lemma A.4, continuity of area.** Hausdorff convergence, support functions,
   and the dominated convergence theorem are defined before use. The proof is
   detailed and correct. Nevertheless, the declared student may not have taken
   measure theory, so “dominated convergence” is a substantial external import,
   not routine linear-algebra background. The page cites it, but the dependency
   should be marked as an optional analytic branch or replaced with an elementary
   polygon-specific continuity argument.

9. **Lemma A.5, positive area.** The proof says a compact convex set with an
   interior point contains a nonempty open triangle. This is true, but the
   construction is not shown. At this point a one-line choice of three nearby
   noncollinear points inside an interior disk would close the small gap.

10. **Lemma 4.9, least-area selection.** Compactness, area continuity, and the
    minimum argument are arranged coherently. The exclusion of a segment is
    compressed in the same way as Lemma 2.5: the page should say explicitly why
    inclusion forces the one-dimensional affine hull to be invariant. The proof
    that the selected contact point is not a vertex of the comparison polygon
    and hence creates exactly one removable gap is otherwise well signposted.

### Blockers and confusions

- Lemma 4.7 uses \(\kappa\) before Topic III has defined it. The student cannot
  tell whether it is a vertex offset, an angle, a contact count, or an arbitrary
  integer, nor can the shifted-source formula be verified.
- Lemma 4.4’s literal “supporting affine functional” definition is too broad
  unless a nonzero linear part/nonconstancy is stipulated.
- Lemma A.4 is self-contained only for a reader who already accepts dominated
  convergence as an imported theorem; that is beyond the declared baseline and
  needs a clearer dependency decision.

### Successful explanations worth preserving

- The half-open side-ownership figure in Definition 4.2.
- The finite case atlas in Lemma 4.3.
- The weighted-average plate in Lemma 4.4.
- The determinant certificate in Lemma 4.6.
- The clipping diagram and explicit vertex ledger in Lemma 4.8.
- The complete statement of the Hausdorff/support-function route in Lemma A.4.

### Candidate recommendations

#### Needed

1. **Lemma 4.4 — supporting affine functional.** Require the affine functional
   to have nonzero linear part (equivalently, to be nonconstant), and say that
   its maximum set is the contact face. This excludes the constant-functional
   counterexample.
2. **Lemma 4.7 — define the shift.** Before the statement, define \(\kappa\),
   the shifted image vertices (for example \(\xi_j=\lambda x_{j-\kappa}\)),
   and the indexing convention from which \(x_{i+1-\kappa}\) follows. If the
   shift is logically unavailable until Topic IV, move only that
   \(\kappa\)-dependent clause to Topic IV rather than using an undefined future
   symbol.

#### Advised

1. **Lemma 4.4.** Pair the supporting-functional existence claim with the exact
   planar supporting-line result supplied or added in Topic I.
2. **Lemma 4.6.** Replace “strict convexity gives” with “the positive cyclic
   order of the vertices of the strict polygon gives.” This preserves the custom
   terminology established in Topic I.
3. **Lemma 4.7.** State that multiplication by nonzero \(\lambda\) is an
   orientation-preserving real-linear isomorphism, so consecutive image vertices
   retain their cyclic order.
4. **Lemma A.4.** Either label dominated convergence as a genuine optional
   prerequisite with a precise source, or provide a polygonal shoelace/support-
   number proof of area continuity that stays within finite-dimensional analysis.
5. **Lemma A.5.** Construct the positive-area triangle explicitly inside a small
   disk centered at an interior point.
6. **Lemma 4.9.** Spell out the affine-hull argument excluding a segment, as in
   the recommended expansion for Lemma 2.5.

#### Would be nice to add

1. Add a before/after animation or second static frame for Lemma 4.8 showing the
   support line moving until the old vertex is clipped.
2. Add one sentence after Definition 4.2 explaining that the half-open convention
   is a bookkeeping choice, not a perturbation of the underlying geometry.

---

## Topic IV — Contact mutation and reduction to one interval

Route: /proof/topic-iv/

### Linear-reading log

1. **Chapter opening.** The page gives a clear local goal: identify the exact
   mutation update, prove that it is geometrically realizable, and reduce the
   set of strict contacts to one cyclic interval. The dependency contract names
   the one-sided data and clipping machinery inherited from Topic III.

2. **Lemma 4.10, finite endpoint ledger.** The proof is a careful combinatorial
   count. The endpoint diagram lets the student see why half-open ownership
   produces exactly one owner for each contact. The local notation is defined
   before use.

3. **Lemma 4.11, cyclic interlacing.** The result carries out the full endpoint
   audit, including shared-side and vertex-contact cases. One ordering of the
   proof is unnecessarily hard to parse: it invokes \(c_j=0\) by a later
   displayed relation before emphasizing that \(r_j=2\) forces a nontrivial cap,
   which is the reason that relation applies. The ingredients are present, but
   the causal order is momentarily obscured. The \(1\to0\) transition across a
   shared side is particularly difficult to visualize from prose alone.

4. **Corollary 4.12.** The finite-count bijection follows clearly once Lemma
   4.11 is accepted. This is a good example of a short corollary not receiving
   more ceremony than it needs.

5. **Lemma 4.13, shift, winding, and the contact rotation.** Cyclic shifts, the
   gcd, lifted angles, and winding are all introduced. The crucial identity
   \(\sum_i\Theta_{i-\kappa}=\sum_i\Theta_i-2\pi\kappa\) is stated without
   showing the wrapped-index calculation. The subsequent elimination of the
   possible integer winding corrections \(m_i\) is correct but visually hard:
   the student must simultaneously retain an angle interval, a lift, and the
   forbidden \(\pm2\pi\) alternatives.

6. **Lemma 4.14, iterating the contact shift.** The page says iteration gives the
   displayed formula. A linear-algebra student can perform the induction, but
   because the formula drives later tower dynamics, writing the \(t=1\) case and
   one induction step would establish the indexing securely. The prose names
   Hatcher, *Algebraic Topology*, §1.3 as a source for the covering-space idea,
   while the rendered source links in this result expose only a Schneider
   convex-geometry source. That mismatch prevents the student from following the
   stated dependency.

7. **Proposition 5.1, indexed surgery certificate.** The proposition is
   impressively complete: it verifies the clip, strictness, invariant inclusion,
   inherited and changed fields, source and target labels, determinant signs,
   and preservation of \(\kappa\). The determinant and field tables are correct,
   but they require the reader to track three indices at once—\(i\), \(i+1\),
   and the replaced label \(j_0\)—without a small numerical instance.

8. **Corollaries 5.2–5.4.** The translation from the indexed update to the
   intrinsic mutation law is clear. The covariance and iteration consequences
   are stated at an appropriate level and explicitly identify the proposition
   they use.

9. **Lemma 5.5, lexicographic reduction and group sweeps.** The event table
   distinguishes a partial sweep from a complete group sweep, and “first record”
   is defined. Two pieces of notation are not guaranteed by the declared
   background: \(2^{\mathbb Z/N\mathbb Z}\) as the power set and
   \(\dot\cup\) as disjoint union. The proof also uses the arithmetic fact that
   every interval of length at least \(\delta\) meets the multiples of
   \(\delta\) modulo \(N\), but gives no one-line explanation. The residue-color
   plate is helpful for orbit classes, yet it does not show an actual sequence of
   legal updates, so the sweep mechanism remains more abstract than necessary.

10. **Plate numbering.** Two different figures are visibly labelled “Plate
    IV.1”: the finite endpoint ledger and the global interlacing figure. This is
    an editorial navigation error; references to “Plate IV.1” are ambiguous.

### Blockers and confusions

- Lemma 5.5 uses power-set and disjoint-union notation without defining either;
  the objects can be guessed but the exact state space is not formally readable
  at the declared level.
- Lemma 4.14 promises an external source that is not actually rendered as the
  result’s source link.
- The duplicate “Plate IV.1” label makes figure references ambiguous.
- The wrapped-angle sum in Lemma 4.13 is a central numerical identity, but the
  missing index calculation forces the student to trust rather than verify it.

### Successful explanations worth preserving

- Lemma 4.10’s endpoint ledger.
- Lemma 4.11’s explicit inclusion/exclusion audit.
- The clean statement of contact rotation via \(\kappa\) and
  \(\gcd(N,\kappa)\).
- Proposition 5.1’s exhaustive verification structure.
- The event table separating partial and complete group sweeps in Lemma 5.5.

### Candidate recommendations

#### Needed

1. **Plate numbering.** Give the endpoint ledger and global-interlacing figure
   distinct plate numbers and update every local reference.
2. **Lemma 4.14 — source consistency.** Render the exact Hatcher §1.3 source
   promised by the prose, or remove the claim and supply the intended source.
   A student must be able to reach the imported theorem named on the page.
3. **Lemma 5.5 — notation.** Define
   \(2^{\mathbb Z/N\mathbb Z}\) as the set of all subsets of the cyclic label
   set and \(A\dot\cup B\) as a union of disjoint sets.
4. **Lemma 4.13 — wrapped sum.** Show the finite index calculation that produces
   the \(-2\pi\kappa\) term. This identity fixes the contact rotation and is too
   central to leave as an unexplained reindexing.

#### Advised

1. **Lemma 4.11.** Reorder the shared-side argument: first state that \(r_j=2\)
   forces a nontrivial cap, then invoke the relation yielding \(c_j=0\). This
   presents premise before consequence.
2. **Lemma 4.11.** Add a three-gap diagram for the \(1\to0\) transition, marking
   which endpoint is included under the right-half-open convention.
3. **Lemma 4.13.** Add a one-field lifted-angle line showing the permitted
   interval and why shifts by \(\pm2\pi\) are excluded.
4. **Lemma 4.14.** Write the \(t=1\) formula and one induction step rather than
   saying only “iteration gives.”
5. **Proposition 5.1.** Add a worked mini-ledger, for example \(N=6\) with a
   concrete \(\kappa\), listing \(i\), \(i+1\), \(j_0\), the old field, and the
   new field.
6. **Lemma 5.5 — interval arithmetic.** Explain: among any \(\delta\)
   consecutive integers exactly one has each residue modulo \(\delta\), hence in
   particular one is divisible by \(\delta\).
7. **Lemma 5.5.** Add one complete numerical group-sweep state sequence rather
   than only coloring residue classes.

#### Would be nice to add

1. Add a toggle that overlays the intrinsic edge labels and the indexed labels
   on the same Proposition 5.1 diagram.
2. At the end of the page, give a three-line checkpoint: exact mutation law,
   invariant orbit structure, and interval normal form. This would consolidate a
   very dense chapter before Topic V.

---

## Topic V — Finite rotation, lattice sails, and return holonomy

Route: /proof/topic-v/

### Linear-reading log

1. **Formal setup: finite rotation and upper records.** The page correctly places
   the arithmetic setup before the results that use it. \(N,\kappa,\delta\), the
   reduced orbit, return times, upper records, and the interval length are all
   connected to the contact rotation inherited from Topic IV. Plate V.1, with
   \(N=13\) and \(\kappa=5\), is a valuable fixed example. The ceiling symbol
   \(\lceil\cdot\rceil\) is used without a first-use definition; most mathematics
   students have seen it, but it is not part of linear algebra itself.

2. **Lemma A.6, two-dimensional lattice index.** The determinant/index relation
   is stated and proved through Smith normal form/Euclidean reduction, with an
   exact Cassels source. The words “lattice index” and “order of the quotient”
   are not made concrete by an example, so a student may understand the algebraic
   theorem without seeing what the quotient counts geometrically.

3. **Theorem 6.1, finite rotation section and lattice sail.** The theorem has a
   useful four-stage proof. Stage 1 constructs the section; Stage 2 reads the two
   return heights; Stage 3 connects upper records to a lattice sail; Stage 4
   proves the tower partition and injectivity. Several central arithmetic claims
   pass too quickly:

   - each base cycle is said to contain \(\Delta/\delta\) long bases, but the
     residue-count argument is not shown;
   - \(L(\mathbb Z^2)=\delta\mathbb Z\) is converted to
     \(\gcd(\Delta,\nu)=\delta\) without the Bézout step;
   - when an internal state \(F(t,i)\) lies in the base, the proof says it has the
     same image as “the corresponding level-zero state” without naming that
     state as \((0,F(t,i))\).

   None of these is false, but the first is part of the return-count formula and
   the third is part of injectivity, so the student should not have to infer them.
   Stage 3’s inequalities \(-d<L(Z)<0\) are especially abstract without a
   numerical lattice point from the running \(N=13\) example.

4. **Return setup before Lemmas 7.1–7.2.** The page defines the base interval,
   return map, tower levels, predecessor/successor branches, and the dictionary
   that later geometry uses. This is good placement. Equation (7.5) invokes “the
   same internal-tower calculation applied to \(\varphi-1\)” to obtain
   \(\lambda^h x_{\varphi-1}=x_{-1}\); the student would benefit from seeing the
   two actual checks \(F(h,\varphi-1)=-1\) and \(h<H_{\varphi-1}\).

5. **Lemmas 7.1 and 7.2.** Once the return setup is accepted, the local branch
   identities and the endpoint organization are readable. The page is careful
   to locate sources and targets in the tower rather than relying on a picture
   alone.

6. **Proposition 7.3, the return ledger.** The four-set partition of labels is
   exact and the proof audits it. The symbol \(s\) is reassigned here to
   \(r^{-1}\), even though earlier topics use \(s\) for the side-successor map.
   The page does not warn the reader about the collision. Because both maps are
   cyclic “successor-like” operations, the overload is genuinely dangerous, not
   merely stylistic. The accompanying figure is labelled “Plate VI-B.1” despite
   appearing on Topic V, which looks like a wrong-topic reference until the
   reader reaches VI-B.

7. **Definition 7.4, projective holonomy.** The page verbally describes a chain
   of central projections between lines. It does not write the individual maps
   \(\pi_i:A_{i-1}\to A_i\) or identify the final line with the initial one in a
   formula. Consequently, a student who does not already know holonomy may not
   see why a succession of maps between different lines is ultimately a self-map
   or what normalization is being used.

8. **Proposition 7.5, projective flattening.** The proof is strong after the
   coordinate chart has been chosen: it computes the fractional-linear image of
   a segment and uses that formula to preserve order and convexity. The initial
   projective step is not accessible at the declared baseline. It assumes the
   real projective plane, homogeneous coordinates, points at infinity, and the
   existence of a projective automorphism sending a line \(J\) to infinity.
   Coxeter is cited, but the website’s stated educational aim requires at least a
   short local primer explaining what these objects are and constructing the
   chart—for example by choosing a denominator \(d\) that vanishes precisely on
   \(J\).

### Blockers and confusions

- In Proposition 7.3, the re-use of \(s\) for \(r^{-1}\) conflicts with the
  established side-successor map and can change how formulas are read.
- Definition 7.4 does not formally exhibit the maps whose composition is called
  holonomy or the identification that makes the composition a return map.
- Proposition 7.5 requires projective-plane language that is outside the
  declared baseline and not defined before use.
- “Plate VI-B.1” on Topic V is a visible cross-topic numbering problem.
- Theorem 6.1’s per-cycle count of long bases is essential and currently
  asserted rather than demonstrated.

### Successful explanations worth preserving

- The \(N=13,\kappa=5\) running arithmetic example.
- The four-stage architecture of Theorem 6.1.
- The explicit return setup placed before Lemmas 7.1 and 7.2.
- Proposition 7.3’s four-set ledger.
- Proposition 7.5’s explicit fractional formula after choosing an affine chart.

### Candidate recommendations

#### Needed

1. **Theorem 6.1, Stage 2.** Prove the count of long bases per base cycle: cycles
   are residue classes modulo \(\delta\), and an interval of \(\Delta\)
   consecutive bases contains exactly \(\Delta/\delta\) representatives of each
   residue because \(\delta\mid\Delta\).
2. **Theorem 6.1, Stage 4.** Name the colliding level-zero state explicitly as
   \((0,F(t,i))\), then state why it is a valid domain state. This makes the
   injectivity contradiction checkable.
3. **Proposition 7.3 — notation collision.** Do not reuse \(s\) for \(r^{-1}\).
   Write \(r^{-1}\) throughout or give the inverse return map a visibly distinct
   symbol and explicitly contrast it with the side successor from Topic I.
4. **Plate label in Proposition 7.3.** Give the Topic V return ledger a Topic V
   plate number; if it is intentionally reused in VI-B, say “reproduced from
   Plate V.x” there.
5. **Definition 7.4.** Write every projection map with domain and codomain and
   display their composition. Explain the final identification or normalization
   that turns a map between projective lines into the stated holonomy map.
6. **Proposition 7.5 — projective primer.** Before the proof, define the real
   projective plane and homogeneous coordinates, explain the affine chart
   obtained by \(d\ne0\), construct a projective transformation whose denominator
   vanishes on \(J\), and state why projective maps preserve lines and
   intersections. Then the existing segment computation can do the remaining
   educational work.

#### Advised

1. **Finite-rotation setup.** Define the ceiling function at first use.
2. **Lemma A.6.** Add a \(2\times2\) example: draw two lattice generators,
   compute the determinant, and list the corresponding finite quotient classes.
3. **Theorem 6.1, Stage 2.** Add the Bézout sentence connecting
   \(L(\mathbb Z^2)=\delta\mathbb Z\) with
   \(\gcd(\Delta,\nu)=\delta\).
4. **Theorem 6.1, Stage 3.** Work one upper-record lattice point in the
   \(N=13,\kappa=5\) example and translate \(-d<L(Z)<0\) into a statement about
   ordinary residues.
5. **Return setup, equation (7.5).** Display
   \(F(h,\varphi-1)=-1\) and \(h<H_{\varphi-1}\) rather than referring only to
   “the same calculation.”
6. **Proposition 7.3.** Put actual numerical labels into one four-set ledger so
   the reader can test disjointness and exhaustion.

#### Would be nice to add

1. Add a small animation of the \(N=13\) rotation orbit stopping at successive
   returns to the base interval.
2. Add a terminology note distinguishing the deficit \(\nu\) in Topic V from
   polygonal complexity \(\nu_{\mathrm{poly}}\) in Topic I.
3. Include a one-paragraph historical note on why the composition in Definition
   7.4 is called “holonomy,” kept separate from the formal argument.

---

## Topic VI-A — Projective corridors and the sign of the return map

Route: /proof/topic-vi/a/

### Linear-reading log

1. **Opening and dependency contract.** The page promises not to hide a
   projective theorem inside the corridor argument; Lemma 7.7 is indeed proved
   directly. This is a good response to the specialized nature of the material.
   The heading statistic “Topic VI · Part A of XIV” can be read as though Part A
   itself is one of fourteen parts, rather than Topic VI being one of fourteen
   topics.

2. **Lemma 7.6, slope alternation along the corridor.** The roles of the support
   slopes, corridor lines, poles, and intersections are defined, and the sign
   induction is complete. The geometric inequality
   \(s_i<\ell_i<s_{i+1}\) is central: the support line at a strict polygon vertex
   lies between the adjacent side directions. It appears as a known fact in the
   glossary, but no one-line proof or local wedge picture is provided. The main
   corridor plate does not label the moving points \(Z_i\) and \(R_i\) or show a
   slope crossing, so the proof’s key mechanism is more abstract than its figure.

3. **Lemma 7.7, composition of projectivities.** This is concise and genuinely
   self-contained once projective maps are understood from Topic V. It shows how
   determinant signs multiply and does not appeal to an unstated high-level
   theorem.

4. **Theorem 7.8, projective return sign.** Each central projection is checked,
   the pole-free interval is identified, the global projectivity is constructed,
   and the determinant factor is connected to cyclic order. The proof is careful
   about the initial state at \(\tau=0\), but a student would still benefit from a
   labelled picture showing why the recursion returns \(X_i\) at each stage and
   why the final intersection is \(C_{m+1}\). Plate VI-A.1, translating a scalar
   determinant into a planar orientation sign, is especially effective.

5. **Inherited projective dependency.** The page’s own argument is strong, but
   it necessarily inherits Topic V’s undefined projective-plane/chart language.
   Once the Topic V primer is supplied, VI-A is close to self-contained at its
   intended level.

### Blockers and confusions

- No new internal logical blocker was found in VI-A after accepting the projective
  vocabulary imported from Topic V.
- Without the recommended Topic V primer, however, the student still cannot
  independently parse projective lines, perspectivities, poles, or determinant
  signs of projective representatives.

### Successful explanations worth preserving

- The explicit promise and delivery of a direct composition proof in Lemma 7.7.
- The complete sign induction in Lemma 7.6.
- The stepwise verification of every perspectivity in Theorem 7.8.
- Plate VI-A.1’s scalar-to-planar determinant translation.

### Candidate recommendations

#### Needed

1. **Inherited prerequisite.** Ensure Topic V’s projective-coordinate primer is
   in place and link to the exact subsection from the VI-A dependency contract.
   Without it, this page does not meet the stated linear-algebra-only baseline.

#### Advised

1. **Lemma 7.6.** Add a one-line proof of
   \(s_i<\ell_i<s_{i+1}\): a strict supporting line through the vertex must point
   inside the open angular wedge between its two incident side directions.
2. **Lemma 7.6.** Add a calibrated two-step diagram containing \(Z_i\), \(R_i\),
   both adjacent support lines, and the corresponding slope interval.
3. **Theorem 7.8.** Annotate the \(\tau=0\) frame so the reader can see the
   recursion \(X_i\mapsto X_{i+1}\) and the final point \(C_{m+1}\) without
   reconstructing the entire corridor.

#### Would be nice to add

1. Change the heading statistic to “Topic VI of XIV · Part A” for unambiguous
   hierarchy.
2. If Plate V.3 is intentionally reused, caption it as “Plate V.3, reproduced
   from Topic V” rather than making the repeated number look accidental.

---

## Topic VI-B — Global reconstruction and projective no-skipping

Route: /proof/topic-vi/b/

### Linear-reading log

1. **Opening and dependency contract.** The page clearly identifies the global
   task: convert the local projective escape into a complete \(N\)-vertex
   deformation, audit every field, and use global admissibility to force unit
   return. Dependencies on the tower, corridor, and mutation system are named.

2. **Lemma 7.9, global deformation ledger.** This is dense but impressively
   complete. The proof constructs all \(N\) vertices through the tower
   bijection, invokes Lemma 2.8 to preserve cyclic order, splits source labels
   into internal and top levels, defines the sets \(D,R,A,c\), and checks every
   side inequality. The six-stage proof and eleven-step guided outline are not
   redundant: the first is formal and the second exposes the bookkeeping
   architecture. A real small labelled tower would nevertheless help because
   the existing abstract ledger does not show actual values of \(F(t,j)\) or the
   resulting perturbed labels.

3. **Equation (7.53) in Lemma 7.9.** The rendered grouping reads like
   \(\widehat V_k\in\operatorname{relint}(\widehat E)_k(\tau)\), rather than the
   intended
   \(\widehat V_k\in\operatorname{relint}(\widehat E_k(\tau))\). Because relative
   interior is an operation on the edge, the current grouping is ambiguous and
   should be fixed at source/rendering level.

4. **Theorem 7.10, global admissibility interval.** The proof clearly intersects
   the local escape interval with the finitely many global half-plane
   inequalities. The claim that a nonincident vertex lies in the open supporting
   half-plane follows from the strict polygon setup and is used consistently.
   This is a good example of a global argument reduced to finitely many explicit
   margins.

5. **Theorem 7.11, projective unit return.** The contradiction is short and
   satisfying after the previous machinery: a non-unit return would permit a
   nontrivial deformation, which contradicts the global critical/minimal
   configuration. The theorem explicitly states which earlier results supply
   the deformation and admissibility, so the student can trace the chain.

6. **Theorem 1.3, critical-polygon contact-return normal form.** The final
   assembly successfully separates the identity, transversal, and
   nontransversal cases. Each major clause names the earlier theorem or lemma
   that supplies it. The identity calculation
   \(\kappa=N\Rightarrow\sigma=\mathrm{id}\) and
   \(\varphi=N=\delta\) is clear; the nonidentity case invokes Proposition 5.1,
   Lemma 5.5, Theorem 6.1, and Theorem 7.11 in a traceable order. Two pieces of
   prose are less student-facing than the proof:

   - “Complete transversal” is defined as containing one “base” from each orbit,
     but at this point the primary objects are strict-contact edges; the word
     base could mean a tower base, an edge, or an element of \(I\).
   - The intuition says every “module exports exactly the contract needed by the
     next” and that the proof “never reopens the internal projective indices.”
     This is software/process language rather than mathematical intuition and
     does not help a student understand the three cases.

   The orientation note uses “an intermediate eigenvalue for the contact-return
   analysis,” which is not a term defined on this page. It would be clearer to
   say which of the conjugate eigenvalues is chosen and why reflection may swap
   it later.

### Blockers and confusions

- Equation (7.53) has visibly ambiguous relative-interior grouping.
- The inverse-return notation collision \(s=r^{-1}\), introduced in Topic V,
  continues to burden the global ledger.
- Theorem 1.3’s definition of complete transversal uses “base” where the set’s
  exact element type should be stated.
- Lemma 7.9 is formally complete, but without one concrete labelled tower a
  first-time reader is likely to lose the distinction between base labels,
  internal labels, moved vertices, and contact fields.

### Successful explanations worth preserving

- Lemma 7.9’s division into six formal stages and a separate guided ledger.
- The exhaustive internal/top-source partition.
- Theorem 7.10’s finite-margin intersection argument.
- Theorem 7.11’s compact contradiction.
- Theorem 1.3’s explicit identity/transversal/nontransversal case split and
  exact citations to previous modules.

### Candidate recommendations

#### Needed

1. **Lemma 7.9, equation (7.53).** Render the expression with unambiguous
   grouping as
   \(\widehat V_k\in\operatorname{relint}(\widehat E_k(\tau))\), and audit the
   analogous expressions on the page.
2. **Inherited return-map notation.** Apply the Topic V recommendation to remove
   the collision between side successor \(s\) and inverse return \(r^{-1}\), then
   update the VI-B ledger consistently.
3. **Theorem 1.3 — complete transversal.** Define it as a strict-contact set
   containing exactly one edge (or exactly one element of the precisely named
   contact set) from each \(\sigma\)-orbit. Do not use “base” without declaring
   its type.

#### Advised

1. **Lemma 7.9.** Add one fully labelled small tower example. Show numerical
   values of \(F(t,j)\), distinguish internal and top levels, mark the moved base
   vertices, and display the induced \(\widehat x\)-labels and sets \(D,R,A,c\).
2. **Theorem 1.3 — intuition.** Replace the “modules export contracts” paragraph
   with a mathematical proof map: saturation supplies exactly \(N\) contacts;
   mutation reduces the strict set to an interval; finite rotation gives two
   possible return heights; projective no-skipping forces successor return.
3. **Theorem 1.3 — orientation note.** Replace “intermediate eigenvalue” with an
   explicit statement about choosing \(\lambda\) rather than
   \(\overline\lambda\), and state how coordinate reversal changes the half-open
   ownership convention.

#### Would be nice to add

1. Add a final one-page dependency diagram from Theorem 3.2 through Theorem 1.3,
   with each arrow labelled by the exact conclusion imported.
2. Add a compact “what has not yet been used” box after Theorem 1.3: no
   stochastic realization, no Farey boundary formula, and no heterogeneous Ito
   product. The existing sentence already says this; a small visual checkpoint
   could make the scope boundary memorable.

---

## Pass-1 synthesis across Topics I–VI-B

The strongest educational pattern is “definition at first use, formal result,
expandable proof, then a genuinely different geometric explanation.” It works
especially well for relative interior, Hausdorff convergence, Proposition 2.2,
Lemma 2.5, clipping in Lemma 4.8, and the finite-margin argument in Theorem 7.10.

The recurring weakness is not mathematical invalidity. It is a mismatch between
the declared reader and a small number of silently imported specialist bridges:
supporting/exposed-face existence, Jordan/Neumann convergence, cone separation,
projective coordinates, and some modular/lattice counts. These can be repaired
locally. The later pages are unusually careful about bookkeeping; the main
remaining need is to give the student one concrete numerical object whenever
three or more index systems are active simultaneously.

This document is deliberately a raw first reading. It should be compared with an
independent second linear reading before recommendations are consolidated into
the per-page reports.
