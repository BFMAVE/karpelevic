# Student-perspective review, pass 1 — Topics VII–XIV

- Routes reviewed: **/proof/topic-vii**, **/proof/topic-viii**,
  **/proof/topic-ix**, **/proof/topic-x**, **/proof/topic-xi**,
  **/proof/topic-xii/a**, **/proof/topic-xii/b**,
  **/proof/topic-xiii**, and **/proof/topic-xiv**.
- Method: every rendered page was read linearly, including material initially
  hidden in vocabulary, intuition, proof, and guided-proof panels.
- Baseline: one undergraduate linear-algebra course; no specialist convexity,
  Farey arithmetic, projective geometry, stochastic spectra, combinatorial
  matrix theory, topology, or Karpelevič literature.
- Status: raw findings and recommendations only. No page was edited.

The labels below use the project's rubric: **Needed** means the stated student
cannot responsibly continue without the repair; **Advised** means the chain is
recoverable only with disproportionate specialist effort; **Would be nice to
add** is optional enrichment.

## Topic VII — The Farey carrier and return monodromy

Route: **/proof/topic-vii**

### Where understanding holds

- Plate VII.1 makes the Farey reflection concrete and checks both determinant
  one and the denominator-sum condition.
- Lemmas 8.1–8.2 define the Farey vocabulary before use, and their guided
  proofs genuinely unpack the formal proofs.
- Lemma 8.3 carefully separates conjugation, reversal, signed closure, and
  lifted phase. The negative exponent is not allowed to look like a negative
  return time.
- Plate VII.2 makes the common upper-half-plane argument branch visible.
- The case table in Theorem 1.4 is a strong summary of orientation,
  denominator order, and the sign of \(e\).

### Questions and friction, in reading order

1. **Lemma 8.1, converse — Advised.** “Half-open fundamental
   parallelogram,” “quotient-group representative,” and “primitive vector”
   arrive together. Topic V is linked, but these notions are not recalled.
   Student question: “Why must the nonzero representative have both
   coefficients strictly between zero and one?”

2. **Transition from Lemma 8.3 to Lemma 8.4 — Needed.** Lemma 8.4 promises
   equations (1.5)–(1.9), but these are first displayed much later inside
   Theorem 1.4. “Monodromy output” names a package without showing it. A linear
   reader does not yet know the parameter, product, normalized-factor, and
   phase requirements this case is proving.

3. **Lemmas 8.4–8.6 — Advised.** The symbols
   \(\xi_i,\kappa,\varphi,\delta,\Delta,U,E,L(E)\), “strict field,”
   “endpoint field,” and “record edge” return in a dense cluster. Earlier
   results are linked, so the import is locatable, but repeated back-navigation
   is required. A local notation recap is warranted.

4. **Proposition 8.5, lower Farey endpoint — Advised.** The formal proof has
   the lifted-side inequality, but the guide compresses it to “the lifted
   \(q\)-step return places \(x\) strictly between them.” Show explicitly how
   landing on \(E_{pN+1}\) becomes \(p/q<x\), including division by
   \(2\pi q\).

5. **Proposition 8.6, first sentence — Needed.** Existence and uniqueness of
   \(h\in\{1,\ldots,L-1\}\) satisfying
   \(Kh\equiv-1\pmod L\) are not justified. The missing line is
   \(\delta=\gcd(\kappa,N)\), hence
   \(\gcd(K,L)=1\), so \(K\) is invertible modulo \(L\).

6. **Proposition 8.6, case \(\delta=1\) — Advised.** The small bridges
   \(e+(d-1)q=h\) and \(b-(d-1)p=r-dp\) are correct but not expanded.
   Derive them from \(e=N-dq\), \(q=N-h\), \(p=\kappa-b\), and
   \(r=\kappa\).

7. **Lemma 8.7, angle bound — Advised.** Expand
   \(qy-p<q(r/s)-p=(rq-ps)/s=1/s\), which is the missing one-line reason
   for \(A<2\pi/s\).

8. **Theorem 1.4, final paragraph of proof — Needed.** The rendered link is
   labelled only **“30”** where Lemma 8.7 should be invoked. This makes the
   final logical hand-off look broken.

### Recommendations

#### Needed

- Add a boxed monodromy-output contract before Lemma 8.4, displaying and
  defining \(p,q,r,s,d,e,\alpha_j,\beta_j,u_j\) and target equations
  (1.5)–(1.9). Alternatively state Theorem 1.4 as a roadmap before the cases.
- State \(\gcd(K,L)=1\) and justify the modular inverse defining \(h\).
- Replace “30” by an explicit link and words invoking Lemma 8.7.

#### Advised

- Add a return-notation legend before Section II.
- Recall or precisely deep-link the lattice terms in Lemma 8.1.
- Expand the lifted-angle/Farey step in 8.5, the small arithmetic identities in
  8.6, and the determinant calculation in 8.7.

#### Would be nice to add

- A collapsible two- or three-factor strip example showing recurrence,
  cancellation, Laurent form, homogeneous form, and phase sum.

## Topic VIII — Returning to stochastic spectra

Route: **/proof/topic-viii**

### Where understanding holds

- The transition from geometric Part I language to row-stochastic matrices is
  well staged.
- Proposition II.4.1's maximum-coordinate disk bound is ideal for the assumed
  reader.
- Plate VIII.1 and Theorem II.4.2 give a clear eigenvector-to-polygon
  dictionary.
- Corollary II.4.3 explicitly writes
  \((t\lambda)P=t(\lambda P)\subseteq tP\subseteq P\).
- Lemma II.4.5 restores the suppressed positive factor \(\rho^k\).
- Plate VIII.2 cleanly separates order-newness from outward radial maximality.

### Questions and friction, in reading order

1. **Proposition II.4.1 — Advised.** The required compactness facts are stated,
   but “projection of a compact set is compact” is the first topological
   import. A small diagram of
   \(\mathcal E_n\subset\mathcal S_n\times\overline{\mathbb D}\) and its
   projection would distinguish matrix and eigenvalue variables.

2. **Corollary II.4.3, regular orbit polygon — Advised.** The proof says
   \(Q=\operatorname{conv}\{1,\lambda,\ldots,\lambda^{k-1}\}\) contains zero
   without giving the one-line reason:
   \(1+\lambda+\cdots+\lambda^{k-1}=0\), so zero is the equal-weight average.

3. **Lemma II.4.5, supporting functional — Advised.** The term is defined,
   but existence at a boundary point is neither proved nor linked to an exact
   earlier lemma. Give a two-sentence separation statement or deep-link Topic
   I's supporting-line result.

4. **“What ‘new shell’ means” — Needed.** The prose assigns the two clauses
   the wrong roles. The modulus condition \(0<|\lambda|<1\) excludes zero and
   the unit circle; the set difference
   \(\lambda\in\Theta_N\setminus\Theta_{N-1}\) says the point is new at order
   \(N\). The current prose reverses these roles relative to the displayed
   order.

5. **Definition II.4.6 — Advised.** The page promises a self-contained
   restatement but does not recall
   \(\operatorname{Ext}(P)\). Add: these are vertices not expressible as
   convex combinations of the others.

6. **Proposition II.4.7 — Would be nice to add.** A parenthetical reminder
   that \(t|\lambda|>1\) is already excluded by the disk bound would reassure
   the reader that “every \(t>1\)” is covered.

### Recommendations

#### Needed

- Correct the clause explanation below equation (II.4.3).

#### Advised

- Add the geometric-series sentence for the regular orbit polygon.
- Give a local separation theorem or exact link for the supporting functional.
- Recall \(\operatorname{Ext}(P)\) in Definition II.4.6.
- Optionally add an eigenpair-set projection diagram.

#### Would be nice to add

- Plot the coordinate hull of one actual \(3\times3\) stochastic eigenvector.

## Topic IX — The candidate Farey–Ito boundary

Route: **/proof/topic-ix**

### Where understanding holds

- Denominator labels versus left-to-right labels are distinguished prominently.
- “Polynomial family” versus “root branch” prevents an important shortcut.
- Proposition II.2.3 defines the fractional-power sheet explicitly rather than
  invoking an unexplained principal root.
- The order-three first-order limit and separate real segment are treated
  honestly.
- The algorithm separates exact rational arithmetic from numerical solving.

### Questions and friction, in reading order

1. **Lemma II.2.1, converse — Advised.** The quotient-group/lattice step is
   imported from Topic V, but only “primitive lattice vector” is recalled.
   Deep-link the precise lattice-count lemma beside its use.

2. **Before and inside Proposition II.2.3 — Needed.** The page says the angle
   ranges are proved, and the guide begins “First prove the angle range,” but
   neither formal proof nor guide prints the determinant-one formulas. The
   proof immediately needs \(A>0\), \(B>0\), and \(A+B<\pi\) for positive
   sine coefficients, strict increase, nonnegative weights, and the selected
   sheet. Student question: “Where is the key sign lemma?”

3. **Proposition II.2.3, “common choice of sign” — Advised.** Because
   denominator ordering may oppose geometric ordering, give a two-row table
   for “\(p/q\) is left” and “\(p/q\) is right.”

4. **Proposition II.2.3, return to the polynomial — Advised.** Print
   \(\omega^d=e^{-2\pi ir}=1\) and the last clearing-and-conjugating line.

5. **Proposition II.2.4, endpoint constants — Advised.** Derive
   \(B_0=2\pi/(dq)\) and \(A_0=2\pi/s\) explicitly from determinant one,
   including the reversed-label case.

6. **Proposition II.2.4, exceptional case — Advised.** Expand why
   \(dq=2\), under all order and Farey restrictions, is exactly the order-three
   terminal cell.

7. **Algorithm II.2.6, numerical method — Needed.** “Bisection or Newton”
   puts a certified bracket method and unguarded Newton iteration on equal
   footing. Strict monotonicity does not guarantee arbitrary Newton iterates
   remain in \((0,1)\) or converge. Specify bisection or safeguarded Newton
   within a maintained bracket.

8. **Algorithm II.2.6, step 4 — Needed.** The rendered text contains a link
   labelled **“7”** for Topic XI and unresolved labels
   **“karp:sec:nesting”** and **“karp:sec:completion.”** These are not usable
   mathematical references.

### Recommendations

#### Needed

- Insert and prove an angle-range lemma covering both denominator orientations
  and deriving \(A,B>0\), \(A+B<\pi\), and the endpoint limits.
- Make the numerical method certified: bisection or safeguarded Newton.
- Replace the three broken/unresolved algorithm references by linked result
  names.

#### Advised

- Add the sign-case table, the \(\omega^d=1\) line, the final conjugation
  algebra, and the endpoint/exception calculations.
- Link the exact Topic V lattice lemma.

#### Would be nice to add

- One full numerical open-cell example before Proposition II.2.3.

## Topic X — The sharp radial upper bound

Route: **/proof/topic-x**

### Where understanding holds

- The page clearly says it proves an upper comparison, not realization.
- \(\arg_+\) is defined before orientation-sensitive statements.
- Theorem II.5.1 is a useful wrapper for the exact imported data.
- Lemma II.5.2 explicitly repairs the selected orientation.
- Plate X.2 communicates “fixed mean plus strict convexity implies equal
  profile,” and the theorem retains the equality condition.

### Questions and friction, in reading order

1. **“Why one convex function controls every factor” — Needed.** This prose
   contains the analytic engine:
   the relation between \(u\) and \(\beta\),
   \(F(u)=\log\sin M-\log\sin(M-u)\),
   \(F''(u)=\csc^2(M-u)>0\), and
   \(\rho^q=\sin M/\sin(M-A)\).
   These are attributed to “elementary triangle trigonometry,” but the triangle
   and calculation are not given. Theorem II.6.1 then relies on them.
   Student question: “Which sides and angles are involved, and where did
   \(1-\beta\) go?”

2. **Same section, stable dependencies — Needed.** The formal theorem refers
   to cell (II.6.1), a branch “just defined,” and equation (II.6.6), while the
   central setup is transition prose rather than a formal lemma. The theorem is
   not independently auditable.

3. **Theorem II.6.1, equality — Advised.** Display
   \[
   \frac{d}{d\beta}\operatorname{Arg}(z-\beta)
   =\frac{\operatorname{Im}z}{|z-\beta|^2}>0
   \]
   on the selected sheet instead of relying only on the horizontal-line
   picture.

4. **Theorem II.6.1, exponentiation — Advised.** Print the intermediate
   exponential inequality before inverting the sine ratio. This will show that
   the direction is not affected by \(\log\rho<0\) or a negative \(e\).

### Recommendations

#### Needed

- Promote the full triangle calculation to a numbered lemma: define the
  \(\beta\)-to-\(u\) correspondence, derive the sine-law ratios and \(F\),
  compute \(F''\), and derive the \(\beta=0\) identity.
- Put assumptions and equations (II.6.1)–(II.6.6) in stable formal targets.

#### Advised

- Display the argument derivative and the intermediate exponentiation line.

#### Would be nice to add

- A two-factor numerical Jensen example and a graph of \(F\).

## Topic XI — Explicit stochastic realizers and attainment

Route: **/proof/topic-xi**

### Where understanding holds

- The tail-row convention is declared before graph-to-matrix translation.
- Lemma II.7.1 derives the cycle sign from Leibniz and includes loops; it is
  well pitched for a student who has not seen Coates graphs.
- Lemma II.7.2 directly audits the risk of unlisted cycles.
- The split at \(s=dq\) is motivated before the construction: enter blocks
  late to shorten, subdivide one cross edge to lengthen.
- Both characteristic polynomials are computed completely, and attainment is
  proved before the Topic X equality case is activated.

### Questions and friction, in reading order

1. **Lemma II.7.2 and Plate XI.1 — Advised.** “Entry vertex,”
   “deterministic suffix,” and the global route are reconstructible but dense
   before actual vertex notation appears. A labelled \(d=2,q=3\) graph would
   remove considerable effort.

2. **Theorem II.7.3, case \(s\le dq\) — Advised.** Expand
   \(q+s>n\ge dq\) to
   \(s>dq-q=(d-1)q\), showing directly why
   \(\ell_1=s-(d-1)q\) is between 1 and \(q\).

3. **Theorem II.7.3, endpoint parameters — Needed.** The theorem includes
   \(\alpha=0\) and \(\alpha=1\), but the formal proof invokes Lemma II.7.2
   as though every local and global edge defines a cycle. At an endpoint, one
   edge class has weight zero and can be regarded as absent. The guided proof
   notices this and suggests retaining zero-weight formal edges or extending
   the polynomial identity, but the complete formal proof states neither
   convention.

4. **Theorem II.7.3, order wording — Advised.** The statement promises active
   order \(N_0\le n\), then the proof pads to order \(n\). State explicitly:
   construct order \(N_0\), then obtain the order-\(n\) realizer by
   absorbing-state padding.

5. **Corollary II.7.4 — Successful.** The four guided steps are exactly the
   expansion needed for the one-line manuscript proof.

### Recommendations

#### Needed

- Close \(\alpha,\beta\in\{0,1\}\) in the formal proof of Theorem II.7.3.
  Either define zero-weight formal edges and explain why their cycle terms
  vanish, or prove the identity for \(0<\alpha,\beta<1\) and extend matrix
  entries and characteristic polynomials continuously.

#### Advised

- Add a labelled small graph before Lemma II.7.2.
- Expand the entry-length inequality.
- Clarify active order versus padded order.

#### Would be nice to add

- Pair one \(d=2,q=3,s=5\) sparse matrix with its graph and colour-matched
  cycle ledger.

## Topic XII-A — Farey refinement and nesting: mediants and multiplicity

Route: **/proof/topic-xii/a**

### Where understanding holds

- The warning that \(d\) is a denominator in Lemma II.8.1 while multiplicity
  is \(m\) is necessary and effective.
- The determinant sign convention is algebraic, not dependent on an ambiguous
  drawing.
- Reciprocal radius, intercept, relative interior, log-radial function,
  padding factor, Jensen sheet, lifted argument, and scalar defect are defined.
- Lemma II.8.2 explicitly audits the padded product, phase, sheet, and
  strictness.
- Plate XII.2 is a good mnemonic for multiplication by the identity factor.

### Questions and friction, in reading order

1. **Comparison language, log-radial formula — Needed.** The page says the
   “two-line derivation is reproduced,” but only states
   \(\ell(\phi)=c-\log\cos(\phi-\phi_0)\) and
   \(\ell''=\sec^2>0\). The derivation from a line equation is absent, yet
   this is central to Lemma II.8.1. Student question: “Why does every line have
   this polar radius, and where is cosine positive?”

2. **Lemma II.8.1, first old chord — Advised.** The claim
   \(V_*\in[V,1]\) is geometrically true on the chosen angular interval but is
   not explained. State why argument varies monotonically along this segment,
   which does not meet the origin.

3. **Lemma II.8.1, new rooted endpoints — Needed.** The proof asserts without
   derivation that the left new subcell has endpoints
   \(U,W=VU^{1/m}\), while the right has
   \(X=UV^m,Y=V^m\). These formulas are the bridge from Farey insertion to the
   log-line comparison. A student who followed Topic IX still cannot derive
   the powers from the new denominators and multiplicities.

4. **Lemma II.8.1, determinant reductions — Advised.** Equations (II.8.6) and
   (II.8.8) use collinearity to collapse determinants in one step. Show the
   bilinear expansion.

5. **Lemma II.8.1, \(b=1\) special case — Needed.** The proof changes to the
   radial intersection of the chord from 1 to \(e^{i\phi}\), but does not show
   why the old and new first-cell candidates are these chords. Derive this from
   the \(q=1\) Ito equation before using \(r_\phi(\theta)\).

6. **Lemma II.8.1, \(d<b\) reflection — Advised.** Conjugation followed by an
   integer translation is efficient but hard to visualize. Print the reflected
   endpoints and say explicitly why integer translation leaves roots and
   intercepts unchanged.

7. **Lemma II.8.2, first paragraph — Needed.** The reference called equation
   (II.6.3) links only to a Topic X section; equation (II.6.3) is not visibly
   available as a stable target. The angle facts \(A,B_m>0\) and
   \(A+B_m<\pi\) should be reproduced or linked exactly.

8. **Lemma II.8.2, equation (II.8.13) — Advised.** “Direct resolution” skips
   the real-part identity. Print it so the argument \(A+B_m\) is checkable.

### Recommendations

#### Needed

- Prove the polar line formula and identify its positive-cosine interval.
- Add a denominator/multiplicity table deriving \(U,W,X,Y\) for the old cell
  and both new subcells.
- Derive the unit-circle chord in the \(b=1\) branch from the carrier.
- Replace the inaccessible (II.6.3) reference by a precise target or a local
  angle calculation.

#### Advised

- Explain \(V_*\in[V,1]\), show the determinant expansions, expand the
  \(d<b\) reduction, and print the real-part check for (II.8.13).

#### Would be nice to add

- Carry the named \(1/3,2/5,3/8\) example through one full reciprocal-chord
  comparison.

## Topic XII-B — Farey refinement and nesting: exhaustive nesting

Route: **/proof/topic-xii/b**

### Where understanding holds

- \(K_n\) is defined before the results, with a clear warning that “outer” is
  not yet a boundary theorem.
- The separate \(K_n(\pi)=1\) convention is well motivated by order three.
- Lemma II.8.3 proves, rather than merely cites, why a new interior fraction is
  the mediant.
- The scalar-defect plate and Theorem II.8.4 reduce all cases to one
  monotone-zero comparison.
- The intercept-defect identity removes orientation ambiguity.

### Questions and friction, in reading order

1. **Lemma II.8.3, determinant-one basis — Advised.** The vocabulary states
   that an intermediate primitive vector has positive integer basis
   coordinates. Give a coordinate formula or cone picture showing why a slope
   strictly between the endpoint slopes forces both signs positive.

2. **Theorem II.8.4, \(A,B\) reference — Advised.** Equation (II.2.6) links to
   a broad Topic IX section rather than the exact anchor. This proof depends on
   those signs, so use a precise target.

3. **Theorem II.8.4, strictness — Advised.** Among rays interior to both Farey
   decompositions, strictness means split or increased multiplicity. Globally,
   a newly inserted endpoint is also strict. Qualify the guide's “strict
   exactly” sentence to avoid reading it as a global claim.

### Recommendations

#### Needed

- No independent blocker was found once the two Part A lemmas are accepted;
  this page inherits the Needed repairs listed for Topic XII-A.

#### Advised

- Give the positive-coordinate formula/picture for the lattice basis.
- Link the exact \(A,B\) definition.
- Qualify the strictness sentence.

#### Would be nice to add

- Add an order-seven-to-eight ledger illustrating inherited endpoint, new
  endpoint, unchanged cell, and split cell. Normalize card-purpose grammar
  (“Prove,” “Assemble”) with the rest of the reader.

## Topic XIII — The Karpelevič–Ito theorem

Route: **/proof/topic-xiii**

### Where understanding holds

- “Three tasks remain” is an excellent orientation device.
- Lemma II.9.1 defines boundary in the full plane and separates outer points,
  nonzero shorter points, and the origin.
- The positive-minimum argument at the origin is clear.
- Proposition II.9.2 derives the triangular bound, gives realizers, and matches
  both nonreal pieces to \(K_3\).
- Plate XIII.3 and the guide make the new-shell and inherited induction branches
  easy to compare.
- The proof distinguishes outer-ray equality from the topological-boundary
  conclusion.

### Questions and friction, in reading order

1. **Lemma II.9.1, small Euclidean ball — Advised.** The proof uses that a
   sufficiently small ball about nonzero \(z\) has nearby arguments and
   moduli. Name continuity of modulus and argument away from zero.

2. **Proposition II.9.2, filling the triangle — Advised.** After realizing the
   four boundary pieces, the proof says radial filling fills the triangle.
   State that \(1+\omega+\bar\omega=0\), hence zero lies inside the triangle,
   and the realized pieces form its full boundary.

3. **Theorem II.3.1, inherited branch — Advised.** Explain the sentence “an
   open order-\(n\) ray cannot be an inherited Farey endpoint” by noting
   \(F_{n-1}\subset F_n\): every old endpoint remains an order-\(n\) endpoint.

4. **Theorem II.3.1, endpoint realization — Advised.** Give a one-line
   verification that the order-\(q\) cyclic permutation has the
   \(q\)-th roots of unity as eigenvalues, via \(t^q-1\) or an eigenvector.

### Recommendations

#### Needed

- No independent fatal gap was found, assuming imported Topics IX–XII receive
  their Needed repairs.

#### Advised

- Name continuity of polar coordinates away from zero.
- Explain the radial hull of the realized order-three boundary.
- Add \(F_{n-1}\subset F_n\) at the inherited-endpoint step.
- Verify the cyclic-permutation eigenvalue in one line.

#### Would be nice to add

- A final dependency-flow diagram and a small “chord branch / vertical branch /
  real segment” schematic for the order-three base.

## Topic XIV — The complete order-seven example and boundary laboratory

Route: **/proof/topic-xiv**

### Where understanding holds

- Exact and numerical data are distinguished throughout.
- The nine-cell ledger audits the full order before computation.
- \(x=3/8\) exercises a negative closing exponent, \(d=2\), the scalar
  equation, and a six-state active realizer.
- The discussion of ninety bisection steps versus browser precision is precise
  and honest.
- The matrix is checked by cycle-cover factorization.
- The widget caption says roots of unity are exact and curved arcs are sampled
  polylines.

### Questions and friction, in reading order

1. **Opening paragraphs — Advised.** Future tense (“will document,” “will
   provide”) remains although code and widget are present. Use present tense,
   with public GitHub status stated separately if needed.

2. **Exact atlas, denominator labels — Needed.** Arrows show left-to-right
   Farey order, but \((q,s)\) are assigned by smaller denominator. In
   \(3/7\to1/2\), the ledger says \(q=2,s=7\): \(q\) belongs to the right
   endpoint. The prominent atlas does not explain this, so a student can infer
   the false rule “\(q\) is the left denominator.”

3. **Worked ray, \(\alpha,\beta\) — Advised.** The page jumps from the radius
   to decimal weights. Repeat Topic IX's two formulas and substitute
   \(A=\pi/4,B=\pi/8\) so the laboratory is reproducible on its own.

4. **Worked ray, verification — Advised.** A numerical scalar and polynomial
   residual would help distinguish decimal agreement from the exact
   cycle-cover reason.

5. **Downloadable module — Advised.** Add a minimal import-and-call example
   naming the public entry points. Currently the reader must inspect source to
   know how to use it.

6. **Interactive ledger — Advised.** Repeat beside the widget that \(q\) is
   the smaller denominator and may be the right endpoint.

### Recommendations

#### Needed

- State beside both ledgers that \(q\) denotes the smaller denominator, not
  necessarily the left denominator; point out the final cell as an example.

#### Advised

- Replace obsolete future tense with present-tense descriptions and a separate
  publication-status sentence.
- Show the \(\alpha,\beta\) substitution and optionally numerical residuals.
- Add a minimal module usage example.

#### Would be nice to add

- Make a ledger row or plotted arc disclose its exact equation and one sampled
  point on click.

## Pass-1 cross-page observations

### Successful global choices

- The repeated order “definitions → intuition → complete statement → complete
  proof → guided proof → takeaway” lowers navigation cost.
- Dependency contracts usually name the earlier topic and the exact role of
  its result.
- Candidate, attainment, upper bound, and final boundary status remain
  separate, which protects Topics IX–XIII from circularity.
- Topic XIV's exact-versus-numerical language matches the mathematical standard
  of the proof pages.

### Recurrent student-level risks

- Central arguments sometimes live in unproved transition prose despite the
  promise that all ingredients are established: Topic IX's angle ranges,
  Topic X's triangle/log-sine calculation, and Topic XII-A's polar-line formula
  and rooted-endpoint transformations. These should become local formal lemmas.
- Dense later pages have exact earlier links but still need short local notation
  recaps to avoid repeated back-navigation.
- Generated links that render as numbers or unresolved labels are especially
  damaging on pages that promise a closed dependency chain.
