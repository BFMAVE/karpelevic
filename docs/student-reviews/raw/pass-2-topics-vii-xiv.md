# Independent student-perspective review — Pass 2, Topics VII–XIV

## Scope and reader model

This is an independent second student-perspective reading of the following physical pages:

- Topic VII: `/proof/topic-vii/`
- Topic VIII: `/proof/topic-viii/`
- Topic IX: `/proof/topic-ix/`
- Topic X: `/proof/topic-x/`
- Topic XI: `/proof/topic-xi/`
- Topic XII, Part A: `/proof/topic-xii/a/`
- Topic XII, Part B: `/proof/topic-xii/b/`
- Topic XIII: `/proof/topic-xiii/`
- Topic XIV: `/proof/topic-xiv/`

I did not read or rely on another student-review report. I read the rendered pages in order and opened every proof and explainer. The reader model is a mathematics student who has completed a standard linear-algebra course but has no prior specialist knowledge of convex geometry, Farey arithmetic, projective dynamics, stochastic spectra, lattice sails, or the Karpelevič–Ito theorem.

For every transition I asked:

1. Has every symbol and nonstandard phrase been defined locally or imported by a precise link?
2. Can the student verify the implication from material already available?
3. Is a purported explanation actually explanatory, or does it merely repeat the formal sentence?
4. Does the page itself reach the conclusion advertised by its title?
5. Are links, equation references, source entries, and displayed formulas intelligible in the rendered page?

Recommendation classes:

- **Needed:** an undefined dependency, a broken rendered reference, a missing step required to reach the advertised conclusion, or a mathematical transition that the stated reader cannot verify.
- **Advised:** the argument is valid and traceable in principle, but the conceptual jump is too large for the intended student or notation materially obstructs reading.
- **Would be nice to add:** optional examples, diagrams, or reinforcement that improve retention without closing a logical gap.

No page-code change is made in this report.

---

## Topic VII — The Farey carrier and return monodromy

### Reading log and what works

The page has a sensible three-stage route: establish Farey adjacency and reflection, build a product in each return regime, then place every factor on a common argument sheet. The opening Plate VII.1 makes reflection of the order-seven cell immediately concrete. Lemmas 8.1 and 8.2 are self-contained at the intended level, and Lemma 8.3 is unusually careful about the fact that conjugation also reverses the strip, changes the closing exponent, and requires a new lifted-angle audit.

The definitions before Propositions 8.5 and 8.6 are useful. In particular, the page explicitly distinguishes genuine factors from algebraic padding and warns that \(S,R\) are local arithmetic symbols. Lemma 8.7 and Plate VII.2 give the first genuinely intuitive picture of the “Jensen sheet”: the factor moves horizontally in the upper half-plane while its argument rises along one branch. The four-case table in Theorem 1.4 is also an effective way to assemble a long proof without pretending the regimes are identical.

### Student questions and blockers, in reading order

1. **Lemma 8.1, `#lem:farey-adjacency-expanded`, converse.** The proof invokes “Lemma A.6” for the exact lattice-representative count. The dependency contract links broadly to Topic V, but the proof does not provide a direct link or a one-line restatement. A student arriving here asks which exact statement guarantees a representative in the half-open parallelogram and why primitiveness rules out both coordinate edges.

2. **Lemma 8.3, `#lem:backward-strip-reflection`.** The algebra is checkable, but the density of \(z_i,w_j,a_i,b_i,\alpha'_j,\beta'_j,\Theta_i,\Phi_j,h,e,s,m\) is high enough that the reader needs a before/after notation table. The guide repeats the operations but does not show one small indexed example, such as \(d=3\), that lets the student verify the reversal \(i=d-j+1\).

3. **Lemma 8.4, `#lem:kappa-N`.** The proof imports Lemma 2.10 for \(0<\Theta_i-\Theta_{i-1}<\pi\) and equation (4.13) for the angle estimate, but neither appears in the dependency contract. The student can follow the reflection only after locating two undeclared earlier dependencies.

4. **Proposition 8.5, `#prop:large-block-product`.** The sentence “This is the continuous rooted branch selected by the return path” introduces “rooted branch” without a definition. More importantly, the proof revives \(E=(e,c)\), \(L(E)\), the maximal backward arithmetic run, upper records, and the padded interval \(J\) after several pages. The Topic V link says these ideas exist, but a compact notation recap is needed at the point of use.

5. **Proposition 8.6, `#prop:minimal-block-product`, opening.** The result asks the reader to accept the existence and uniqueness of \(h\in\{1,\ldots,L-1\}\) with \(Kh\equiv-1\pmod L\). The page has said that addition by \(K\) modulo \(L\) is one complete orbit, but it never explicitly extracts \(\gcd(K,L)=1\) and the resulting modular inverse. That implication is elementary but not automatic to the stated reader.

6. **Proposition 8.6, same proof.** The switch between the \(\delta\ge2\) reflected case and the \(\delta=1\) padded case is correct but very compressed. A student can reproduce neither case without continually scrolling between equations (8.18)–(8.27). There is no numerical instance showing why one case has \(e=-h<0\) while the other has a nonnegative Euclidean remainder.

7. **Theorem 1.4, `#thm:complex-monodromy`, final proof paragraph.** The rendered sentence says **“30 verifies that the factor arguments…”**. This is a broken reference, apparently intended to name Lemma 8.7. It interrupts the theorem’s decisive assembly step and is not interpretable as printed.

8. **Across the formal proofs.** Several links render as “equation equation (8.7),” “Equation equation (8.23),” and similar duplicated wording. This is not a mathematical gap, but it makes a page with many cross-references feel mechanically unreliable.

### Needed

- Repair the broken “30 verifies…” reference at the end of Theorem 1.4 and audit all duplicated “equation equation” renderings on this page.
- Add the precise imported links for Lemma 2.10, equation (4.13), Lemma A.6, Theorem 6.1/Corollary 6.2, and the relevant Topic V record notation at the first proof that uses each one.
- Before Proposition 8.6, state explicitly that \(\delta=\gcd(N,\kappa)\) gives \(\gcd(K,L)=1\), hence the required modular inverse \(h\) exists uniquely modulo \(L\).

### Advised

- Add a two-column “before reflection / after reflection” notation table to Lemma 8.3, with one \(d=3\) index check.
- Insert a compact record-section notation refresher before Proposition 8.5 instead of requiring a return to Topic V for every symbol.
- Give one small arithmetic example for each branch of Proposition 8.6, displaying \((N,\kappa,\delta,L,K,h,S,R,q,s,d,e)\). This would make the orientation choice and sign of \(e\) visible.
- Define or replace “continuous rooted branch” in Proposition 8.5 with the already established language of lifted arguments.

### Would be nice to add

- Animate or step through Plate VII.2 as \(\beta\) moves from zero toward one, with the interval \([A,M)\) updating.
- Add a final one-page notation ledger for Theorem 1.4, separating geometric input, Farey data, factor data, and phase data.

---

## Topic VIII — Returning to stochastic spectra

### Reading log and what works

This page is a welcome reset after the technical return dynamics. The stochastic–polygon dictionary in Theorem II.4.2 is explained from both directions, and Plate VIII.1 makes the eigenvector-coordinate construction memorable. Proposition II.4.1 gives a clean compactness proof rather than simply declaring that a radial maximum exists. The “two meanings of new-shell extremality” paragraph and Plate VIII.2 do an excellent job of matching order-newness with the lower vertex bound and radial maximality with failure under outward scaling.

The proof of Proposition II.4.7 is especially clear: it verifies ellipticity in the real basis, obtains at most \(N\) vertices, rules out \(N-1\), and then rules out every outward \(N\)-vertex witness. This is the exact bridge the reader needs before Topic X.

### Student questions and blockers, in reading order

1. **Opening, “From stochastic matrices to a radial region.”** The text defines \(R_n(\theta)\) for a “positive integer \(n\)” as a maximum over radii with \(\rho e^{i\theta}\in\Theta_n\). For \(n=1\) and a nonzero ray that set is empty. Even for \(n\ge2\), the page has not yet stated why zero belongs to \(\Theta_n\). Compactness only makes a nonempty set attain its supremum. The definition should be restricted to \(n\ge2\) and accompanied by a one-line stochastic matrix with eigenvalue zero.

2. **Opening and section VIII.A.** The rendered prose contains missing spaces: “all suchn×n matrices” and “the global shape of Θₙand prove.” These are small errors in the first conceptual introduction.

3. **Theorem II.4.2, `#karp:thm:polygon-criterion`, padding step.** “Append absorbing states and extend the eigenvector by zero coordinates” is correct, but the formal proof does not display the block matrix \(A\oplus I_{n-m}\) and vector \((x,0)\). One displayed line would remove the common student worry that the new identity block changes the eigenvalue equation.

4. **Corollary II.4.3, `#karp:cor:radial-filling`, unit-modulus segment case.** The conclusion that a minimal invariant segment forces \(\lambda=-1\) is only stated. The guide says that a unit complex multiplier preserving a real line is \(\pm1\), but the proof should also explain why inclusion of equal-length segments makes the supporting line invariant; \(\lambda=1\) was handled separately.

5. **Lemma II.4.5, `#karp:lem:origin-interior`, boundary contradiction.** A supporting functional at zero is defined, but its existence at a boundary point of a compact convex polygon is neither proved nor listed in the dependency contract. This is convex geometry, not standard linear algebra. The proof cannot start for the intended reader until that existence fact is supplied.

6. **Lemma II.4.5 versus Topic I.** This is essentially the earlier interior-origin lemma, yet the import link at the top names only polygonal complexity and radial criticality. The card classification says it is imported from Topic I, but the dependency contract does not link directly to Lemma 2.5.

7. **“Exact source shelf,” `#topic-viii-exact-sources`.** The cards visibly cite Horn–Johnson, Schneider, Karpelevič, Dmitriev–Dynkin, Swift, and Ito, but the final shelf lists only Dmitriev–Dynkin, Swift, Ito, and Johnson–Paparella. A student trying to follow the supporting-line or matrix-analysis sources cannot recover all sources cited on the page from the promised exact shelf.

### Needed

- Restrict the raywise definition to \(n\ge2\), explicitly prove \(0\in\Theta_n\) for those orders, and then explain why compactness makes the maximum exist.
- Add supporting-line existence either as a two-sentence polygon argument before Lemma II.4.5 or as an exact import from Topic I/standard convexity with a direct anchor.
- Make the dependency contract link directly to Topic I Lemma 2.5 if the proof is intentionally repeated from there.
- Make the final exact source shelf complete for every source actually cited on the result cards, or rename it so it does not promise completeness.

### Advised

- Display the absorbing-state block matrix and padded eigenvector in Theorem II.4.2.
- Add the missing line-invariance/equal-length sentence in the segment case of Corollary II.4.3 and Proposition II.4.4.
- Correct the missing spaces in the opening prose and audit similar math/prose joins on the page.
- In Proposition II.4.1, explicitly say that the determinant equation is continuous as a real map in the real and imaginary parts of \(\lambda\); this reassures students who have only seen real compactness.

### Would be nice to add

- Give an explicit \(3\times3\) stochastic matrix and plot the three coordinates of one complex eigenvector beside Plate VIII.1.
- Add a tiny diagram showing why the regular root-of-unity orbit polygon contains zero.

---

## Topic IX — The candidate Farey–Ito boundary

### Reading log and what works

The architecture is strong: exact Farey arithmetic first, then the Ito polynomial family, then a monotone real equation that selects one algebraic branch, then endpoint closure and an executable algorithm. Plate IX.1 makes the exact cell-selection step tangible, and Plate IX.2 gives a useful geometric interpretation of the rooted chord identity. The page is also commendably explicit that this is only a candidate: neither stochastic realization nor outer-boundary status is silently imported.

Proposition II.2.3 uses a good strategy. The scalar residual is strictly increasing, its values at zero and one bracket a root, and the explicit exponential fixes the fractional-power sheet. Proposition II.2.4 treats the order-three degeneration rather than hiding it in a generic endpoint statement. Definition II.2.5 then checks the algebraic identity on the added real segment.

### Student questions and blockers, in reading order

1. **Opening, `#karp:eq:A-B-absolute`, and Proposition II.2.3.** The page says that the manuscript proves all sine factors have the right signs, and the guide later says determinant one gives formulas implying \(A>0\), \(B>0\), and \(A+B<\pi\). Those formulas and their proof never appear. Yet positivity of \(\sin A\), \(\sin B\), and \(\sin(A+B)\) is what makes the scalar residual strictly increasing and makes \(\alpha,\beta\) nonnegative. This is a central missing lemma, not optional intuition.

2. **Opening prose.** “The signed integere is retained” and “seek ρ∈(0,1)satisfying” are visible missing-space errors. Because both occur beside first-use notation, they are more distracting than ordinary typos.

3. **Proposition II.2.3, `#karp:prop:scalar-ray`, root-sheet algebra.** The proof defines \(z=\bar\lambda^{-1}\) and \(\omega z^{s/d}\) carefully, but the final step jumps from the rooted identity to the Ito polynomial. The guide mentions \(\omega^d=1\), clearing inverse powers, and conjugating; the formal proof should display those intermediate equalities so the student can check exactly where the sheet disappears after taking the \(d\)-th power.

4. **Proposition II.2.4, `#karp:prop:scalar-continuity`.** The subsequential radius limit is named \(r\), although \(r/s\) is already one Farey endpoint throughout the page. The proof then alternates between “\(r\)” as a real limit and “\(r\)” as an integer numerator. This is a serious local notation collision for a student.

5. **Proposition II.2.4, exceptional-case identification.** The proof states that \(dq=2\), together with the order and Farey restrictions, is “exactly” the order-three terminal cell. It also states \(s\ge3\) at the other endpoint. Neither short arithmetic classification is shown. Both are plausible, but this is precisely the kind of “why exactly?” step the student audit is meant to catch.

6. **Algorithm II.2.6, `#karp:alg:boundary`, final paragraph.** The rendered page says **“7 constructs a stochastic matrix realizing it, and karp:sec:nesting and karp:sec:completion prove…”**. These are raw or broken cross-references. The student cannot identify the promised future theorem or sections.

7. **Algorithm II.2.6, numerical solve.** “Solve by bisection or Newton iteration” is not yet a reproducible certified algorithm. Bisection is certified by the bracket, but unconstrained Newton iteration can leave \((0,1)\) or fail without an initial guess and safeguard. The page has called the procedure exact, so it should either specify safeguarded Newton/bisection or give only the guaranteed method.

### Needed

- Insert and prove the determinant-one angle formulas that yield \(A>0\), \(B>0\), and \(A+B<\pi\) before Proposition II.2.3. All later sine signs should link to this result.
- Repair the raw future references in Algorithm II.2.6 and name/link the exact Topic XI–XIII results that provide realization, nesting, and completion.
- Rename the subsequential limit in Proposition II.2.4, for example \(\rho_*\), so it cannot collide with the Farey numerator \(r\).
- Make the extraction algorithm genuinely certified: specify bisection, or a safeguarded Newton method with derivative, initial bracket, and fallback.

### Advised

- Add the missing \(\omega^d=1\), inverse-power clearing, and conjugation lines to the formal proof of Proposition II.2.3.
- Expand the two-line arithmetic classification that makes \(dq=2\) equivalent to the order-three terminal cell and justifies \(s\ge3\) elsewhere.
- Correct the missing spaces and audit all math/prose boundaries on the page.
- Give the scalar residual and its derivative explicitly in Algorithm II.2.6, together with the sign at each endpoint.

### Would be nice to add

- Work the ray \(x=3/8\) completely for one order: identify the cell, calculate \(q,s,d,e,A,B\), bracket \(\rho\), and recover \(\alpha,\beta\).
- Add a small “denominator labels versus left-to-right labels” diagram; this is the page’s most persistent notational reversal.

---

## Topic X — The sharp radial upper bound

### Reading log and what works

The page is disciplined about its scope: it says repeatedly that only an upper comparison is proved here and that stochastic attainment belongs to Topic XI. The wrapper theorem clearly states the exact data imported from the geometric engine, and the reflection dictionary resolves a genuine orientation hazard rather than hand-waving conjugation. Plate X.1 makes that repair easy to remember.

The log-sine idea is powerful and pedagogically promising. Once the factor potential is accepted, the proof of Theorem II.6.1 has a clean skeleton: the phase identity fixes the mean argument, the product fixes the sum of potentials, strict Jensen equalizes the arguments, and trigonometry converts the result back to a radial inequality. The guide correctly identifies the equality condition.

### Student questions and blockers, in reading order

1. **Analytic-engine introduction, `#karp:eq:oriented-cell`.** The page asserts that \(A,B>0\) and \(A+B<\pi\), but does not derive this or link to a proved angle lemma in Topic IX. Topic IX currently only asserts the same fact. These inequalities control every logarithm and sine denominator in the central argument.

2. **Same introduction, definition of \(F\).** “Elementary triangle trigonometry” is asked to carry the key identity
   \[
   F(u)=\log\sin M-\log\sin(M-u).
   \]
   No triangle with the points \(\beta,1,\lambda^q\) is drawn, no sine-rule calculation is displayed, and \(\beta\) as a function of \(u\) is not explicitly established before \(F(u)\) is treated as a function. For the stated reader, this is the main missing derivation of the chapter.

3. **Analytic-engine prose.** Two visible joins are broken: “sox=y” and “>0throughout.” They occur exactly where the abstract \(\lambda\) is identified with the selected \(\mu\) and where strict convexity is asserted.

4. **Theorem II.6.1, `#karp:thm:hetero-sharp`, equality step.** The proof says that \(\beta\mapsto\operatorname{Arg}(\lambda^q-\beta)\) is strictly increasing. This is true on the upper-half-plane segment, but the page does not calculate the derivative or give a geometric proof. Since this implication converts equality of arguments into equality of all parameters, it should be explicit.

5. **Theorem II.6.1, equations (II.6.9)–(II.6.10).** The exponentiation and trigonometric reduction are correct in outline but fast. A student must independently reconstruct why inversion does not reverse the wrong inequality and why every sine used as a divisor is positive. The guide promises a sign audit but does not display it algebraically.

6. **End of the page.** The page title and opening promise the radial conclusion \(\rho\le\rho_*\). The formal theorem proves only
   \[
   G(\rho)\le \sin(A+B),
   \]
   while Topic IX defines \(\rho_*\) by \(G(\rho_*)=\sin(A+B)\). The final strict-monotonicity inference \(\rho\le\rho_*\), followed by the reflection transfer to the original \(\lambda\), is never stated as a formal corollary. The page stops one logical step before its advertised result.

### Needed

- Supply or directly link a proved angle-range lemma establishing \(A,B>0\) and \(A+B<\pi\).
- Derive the factor-potential identity with a labelled triangle and the sine rule before differentiating \(F\). Also state why the argument map gives a one-to-one parameterization by \(u\).
- Add a terminal corollary: compare Theorem II.6.1 with the unique equality radius from Topic IX, use strict monotonicity of the scalar left side to obtain \(\rho\le\rho_*\), and invoke Lemma II.5.2 when the selected multiplier is the conjugate.

### Advised

- Show \(d\,\operatorname{Arg}(\lambda^q-\beta)/d\beta>0\), or give the equivalent fixed-height horizontal-segment argument, at the equality step.
- Expand the sign-preserving exponentiation from (II.6.9) and the substitution leading to (II.6.10) by two or three displayed lines.
- Correct the broken word joins and audit the abstract-\(\lambda\)/selected-\(\mu\) transition for typography.
- Define “constant profile” explicitly the first time Lemma II.5.2 uses it: all \(\beta_j\) equal, hence the scalar candidate of Topic IX.

### Would be nice to add

- Replace or supplement Plate X.2 with the actual triangle that proves the log-sine identity; the current plate illustrates Jensen but not the unfamiliar geometric calculation.
- Give a three-factor numerical example showing a heterogeneous list, its fixed mean, and the lower equal-profile potential.

---

## Topic XI — Explicit stochastic realizers and attainment

### Reading log and what works

This page has a convincing constructive spine. It derives the determinant sign rule from Leibniz rather than quoting a graph formula, classifies every possible simple cycle in the sparse graph, treats both signs of \(s-dq\), verifies row sums, and only then invokes the construction for the scalar candidate. The deliberate placement of Corollary II.6.2 after attainment is logically responsible: the reverse inequality is genuinely independent of the Jensen upper comparison.

Lemma II.7.1 is an excellent student-level proof, including the loop case. Lemma II.7.2 also succeeds at explaining the global-cycle dichotomy in words. The two-regime overview and Plate XI.2 make clear why interior entry shortens a route and subdivision lengthens one. The characteristic-polynomial calculations in Theorem II.7.3 match the cycle ledger transparently once the graph has been understood.

### Student questions and blockers, in reading order

1. **Opening and matrix convention, `#karp:eq:tail-row-adjacency`.** The rendered prose contains three conspicuous missing-space errors: “Asparse directed block graph,” “weight wis stored,” and “factor tin det(tI−A).” They occur before the reader has stabilized the graph convention.

2. **Plate XI.1 and Lemma II.7.2, `#karp:lem:sparse-cycle-collections`.** The generic lemma refers to “the block graph used in Theorem II.7.3,” but the exact graph has not yet been defined. Its prose hypotheses are nearly sufficient, yet the reader does not know at this point that cross edges may enter an interior vertex of the next block. The proof uses an “already visited entry vertex,” so the entry-position convention should be part of the lemma statement or a preceding graph definition.

3. **Theorem II.7.3, `#karp:thm:sparse-realization`, construction.** This is the central constructive result, but there is no fully labelled instance of the graph. A student must visualize \(d\) blocks, cyclic block indices, terminals, local returns, cross-edge tails, entry indices \(q-\ell_j\), and possible subdivision vertices from prose alone. Plate XI.2 is schematic and does not show enough labels to verify the characteristic polynomial.

4. **Theorem II.7.3, case \(s\le dq\).** The implication \(q+s>n\ge dq\Rightarrow s>(d-1)q\) is one line, but it is the fact that makes \(1\le\ell_1\le q\) and hence makes the entry vertex valid. The proof never explicitly checks the upper bound \(\ell_1\le q\), which comes from the case assumption \(s\le dq\).

5. **Theorem II.7.3, characteristic-polynomial sums.** The binomial sum is correct, but the student must infer that every selected local cycle has weight \(\beta\), length \(q\), and that unused subdivision vertices contribute the extra \(t^{s-dq}\). The guide says this, but a small ledger table—collection, count, weight, used vertices, contribution—would make the determinant calculation independently checkable.

6. **Theorem II.7.3, endpoints \(\alpha=0\) or \(\beta=0\).** The formal construction permits zero-weight edges, whereas “directed cycle” normally suggests an edge actually present. The guide says to retain zero-weight formal edges or extend the polynomial identity, but the formal proof does not state which convention it adopts. This matters to the claim that the cycle list remains complete at the parameter endpoints.

7. **Corollary II.7.4, `#karp:cor:attainment`.** The complete proof is only “Use equation (II.2.9) in Theorem II.7.3.” The guided steps supply the missing reasoning, but the formal proof should itself say that Proposition II.2.3 makes the candidate a nonzero carrier root and that padding gives exact order \(n\). This is the page’s attainment statement and deserves more than a cross-reference fragment.

8. **Corollary II.6.2, `#karp:cor:equal-profile`.** This closes the missing last step from Topic X well. However, its proof says “By Theorem II.7.3, it is attained in order \(N\)” when the immediately preceding Corollary II.7.4 is the exact attainment result, and Theorem II.7.3 initially constructs active order \(N_0\le N\). Citing the corollary or explicitly mentioning absorbing-state padding would make the order statement exact.

### Needed

- Define the sparse graph completely before Lemma II.7.2, including whether a cross edge may enter an interior block vertex and how zero-weight formal edges are treated.
- Expand the formal proof of Corollary II.7.4 to include the carrier-root fact, the stochastic realization, and padding to exact order \(n\).
- At the endpoint parameters, state a single consistent graph convention—zero-weight formal edges retained, or a continuity/polynomial-identity argument—inside the formal proof of Theorem II.7.3.

### Advised

- Add one fully labelled worked graph, preferably with \(d=3\), for each regime. List all vertices and edges and compute its characteristic polynomial from the cycle ledger.
- Explicitly check \(1\le\ell_1\le q\) in the shortening case.
- Add a cycle-contribution table beside equations (II.7.3) and (II.7.4).
- In Corollary II.6.2, cite Corollary II.7.4 for attainment or mention the exact padding step when citing Theorem II.7.3.
- Correct the visible missing spaces in the introduction and matrix convention.

### Would be nice to add

- Provide the actual sparse matrix for the worked graph, so readers can compare rows with the tail-row diagram.
- Include a short computational check of the determinant for that small matrix without using it as a substitute for the proof.

---

## Topic XII, Part A — Farey refinement: mediants and multiplicity

### Reading log and what works

The page correctly isolates the two local mechanisms that can change an interior-ray formula: a Farey cell splits, or the cell stays fixed while its multiplicity rises. The reciprocal-radius idea is well motivated, the determinant sign convention removes ambiguous visual language, and the derivative formulas for the positive-real intercept are useful. The multiplicity-padding lemma is particularly successful: the identity factor is explicit, the lifted phase is audited, all arguments are placed on the permitted sheet, and strict Jensen is used only after proving that the padded list is genuinely heterogeneous.

The page also makes a real effort to manage notation. The warning that \(d\) is an endpoint denominator in Lemma II.8.1 while \(m,M\) are multiplicities is necessary and helpful. The special \(b=1\) calculation prevents an unspoken divisibility exception, and the final conjugation argument ensures both denominator orientations are covered.

### Student questions and blockers, in reading order

1. **Comparison-language block, `#karp:eq:log-line`.** The dependency contract promises that the “two-line derivation is reproduced,” but the page only states
   \(\ell(\phi)=c-\log\cos(\phi-\phi_0)\) and \(\ell''=\sec^2(\phi-\phi_0)\). A student has not been shown how an arbitrary line produces that formula or on which angular interval the cosine stays positive. This formula powers the whole mediant proof.

2. **Lemma II.8.1, `#karp:lem:mediant-expansion`, scale and branch setup.** The proof passes from the rooted identity to
   \(U=R^be^{iA}\), \(V=R^{d/m}e^{-iB}\), and later \(W=VU^{1/m}\). The fractional power \(U^{1/m}\) is not explicitly anchored; only the desired argument of \(W\) is stated afterward. On a site that elsewhere avoids hidden root conventions, this should be a definition, not an inference.

3. **Lemma II.8.1, equation (II.8.5).** The inequality between the two integrands follows from \(-B+t<mt\) and strict increase of \(\ell'\), while the final equality also uses \(\ell(0)=0\). These facts are available but not placed beside the displayed calculation. The student must reconstruct the comparison interval.

4. **Lemma II.8.1, left-subcell geometry.** The claim \(V^*\in[V,1]\) assumes that the ray at angle \(\phi\) meets the old line on that segment, not merely somewhere on the full line. This is geometrically true in the chosen angular interval, but it is not justified. The subsequent collinearity determinant depends on that placement.

5. **Lemma II.8.1, right-subcell calculation.** The transition from equation (II.8.7) to \(\eta=\gamma Z\) with \(0<\gamma<1\), followed by multiplication of determinants by \(|V|^{2m}\), is correct but extremely compressed. It introduces \(X,Y,Z,\eta,\gamma\) in quick succession without a diagram. This is the densest local argument in the reviewed Part II pages.

6. **Lemma II.8.1, reflected denominator orientation.** The proof says that conjugating and translating both fractions by the same integer preserves roots, scalar equations, and positive-real intercepts. The roots-of-unity statement is easy, but preservation of the full rooted scalar equation deserves one displayed substitution or a direct link to the reflection dictionary.

7. **Lemma II.8.2, `#karp:lem:multiplicity-padding`, opening angle audit.** The proof cites “the determinant-one calculation used in equation (II.6.3)” for \(A>0\), \(B_m>0\), and \(A+B_m<\pi\). Equation (II.6.3) is not exposed or linked in Topic X’s rendered page. This is another manifestation of the missing angle-range lemma from Topics IX–X.

8. **Lemma II.8.2, final scalar sign.** To read the strict defect against the new zero, the proof also needs \(A+B_M<\pi\). It follows immediately from \(B_M=(m/M)B_m<B_m\), but that positivity/sign line is not stated where equation (II.8.18) is interpreted.

### Needed

- Actually derive the log-radial formula from a line equation and state the exact interval on which the radial intersection and cosine are positive.
- Anchor \(U^{1/m}\) explicitly in Lemma II.8.1, for example by defining its modulus and argument \(A/m\).
- Replace the inaccessible reference to equation (II.6.3) with a direct, proved angle-range lemma and link it at Lemma II.8.2.
- Justify that the radial points \(V^*\) and \(Z\) lie on the stated old-line segments, not only on the infinite line.

### Advised

- Split Lemma II.8.1’s proof into four named sublemmas or visibly separate claims: generic left cell, right cell, \(b=1\), and reversed denominator orientation.
- Add an exact chord diagram carrying \(U,V,1,W,V^*,X,Y,Z\) and the relevant rays. Plate XII.1 shows Farey splitting but not the proof geometry.
- Put the inequalities that compare the arguments of \(\ell'\) directly under (II.8.5) and (II.8.7).
- In the reflection step, show explicitly how the rooted endpoints transform under conjugation and integer translation.
- State \(A+B_M<A+B_m<\pi\) before interpreting the sign in (II.8.18).
- Change the purpose line “Show that…” on the Lemma II.8.1 card to “Shows that…”.

### Would be nice to add

- Work the split \(1/3<2/5\) at order eight on one chosen ray, calculating both the old and new rooted endpoints.
- Add a small multiplicity example, such as two equal factors padded by one zero factor, with the phase sums written numerically.

---

## Topic XII, Part B — Exhaustive candidate nesting

### Reading log and what works

Part B is substantially easier to follow than Part A because it turns the local geometry into one monotone-zero argument. The definition of \(K_n\) carefully distinguishes candidate status from actual stochastic boundary status and explicitly handles the order-three terminal discontinuity. Lemma II.8.3 gives a clean exhaustive Farey ledger. Theorem II.8.4 then uses one defect function in every interior case, and Plate XII.3 accurately depicts the logic of comparing an old test point with a unique new zero.

The proof of the refinement ledger is concise and complete: a new primitive vector has positive integer coordinates in the determinant-one basis, and the two opposite denominator inequalities force the mediant. The final theorem also handles new endpoints, inherited endpoints, zero, the terminal ray, and conjugation rather than proving only a generic open-cell claim.

### Student questions and blockers, in reading order

1. **Candidate-radius definition, `#karp:eq:Kn-pi-definition`.** The block defines \(K_n(\pi)=1\), but the proof later calls this “equation (II.8.19).” In the rendered page there is no visible equation number or permalink attached to that definition. The reference is therefore not navigable and looks as if a formula is missing.

2. **Lemma II.8.3, `#karp:lem:nesting-case-split`, determinant-one basis vocabulary.** The vocabulary says that a vector with intermediate slope has positive integer coordinates in the basis. The proof uses this crucially, but does not show the determinant formulas for those coordinates. A linear-algebra student can understand basis uniqueness but may not see why the coordinates are positive integers rather than merely positive reals.

3. **Theorem II.8.4, `#karp:thm:candidate-nesting`, derivative sign.** The derivative is positive only because \(\sin A,\sin B>0\). That still depends on the missing angle-range proof identified in Topics IX, X, and XII-A. Once that shared lemma is supplied, the step is clear.

4. **Theorem II.8.4, mediant case and equation (II.8.23).** The identity is the bridge from the reciprocal intercept to the scalar defect. It is correct, but the proof says “Direct subtraction” without writing the one intermediate numerator line. Since this is the only place the difficult Part A geometry enters the global theorem, showing the algebra would materially improve auditability.

5. **Theorem II.8.4, endpoint conclusion.** The special order-three terminal convention is explained well, but the text jumps between \(K_3(\theta)\), \(K_3(\pi)\), and the nonreal limit. A student would benefit from one explicit three-value display distinguishing “limit along open rays,” “defined terminal candidate,” and “actual root of unity.”

### Needed

- Attach the visible number/permalink (II.8.19) to the candidate-radius definition, or stop referring to it by a number that the rendered reader cannot locate.
- Make the shared positivity lemma for \(A,B,A+B\) available by direct link before using the derivative sign.
- In Lemma II.8.3, give the determinant formulas for the two lattice-basis coefficients and use the slope inequalities to prove their positivity.

### Advised

- Expand “direct subtraction” in equation (II.8.23) by one displayed numerator calculation.
- Add a small terminal-ray box: \(\lim_{\theta\uparrow\pi}K_3(\theta)=1/2\), while \(K_3(\pi)=1\) because the endpoint is \(-1\).
- Change the purpose line “Prove that…” on the Lemma II.8.3 card to “Proves that…”.

### Would be nice to add

- Include a one-order Farey diagram that color-codes the four exhaustive cases for a concrete transition, such as \(F_4^+\to F_5^+\).
- Add a final compact flowchart mapping each ledger case to the exact comparison used: equality, new endpoint, multiplicity padding, or mediant expansion.

---

## Topic XIII — The Karpelevič–Ito theorem

### Reading log and what works

The final assembly is logically well organized. Lemma II.9.1 closes the topological gap instead of identifying radial maxima with the boundary by assertion. Proposition II.9.2 takes the order-three exception seriously and derives both its upper bound and its realizations. The main theorem’s new-shell/inherited split is the correct induction: attainment gives \(K_n\le R_n\), criticality handles a genuinely new outer point, while natural order embedding, the induction hypothesis, and candidate nesting squeeze an inherited point.

The topological lemma is one of the clearest results on the page. Its vocabulary distinguishes Euclidean interior from relative interior, continuity supplies angular room, and positivity at every direction supplies a disk around zero. The main theorem also checks endpoint rays with cyclic permutation matrices before invoking continuity, so no root-of-unity endpoint is hidden in an open-cell argument.

### Student questions and blockers, in reading order

1. **Lemma II.9.1, `#karp:lem:continuous-radial-boundary`, interior-ball step.** The phrase “a sufficiently small Euclidean ball” is correct but asks the student to fill two simultaneous estimates: choose the ball small enough to avoid zero so its arguments stay near \(\phi\), and small enough that its moduli stay below \(r+\eta\). One explicit radius choice or continuity statement for \(w\mapsto(|w|,\arg w)\) near nonzero \(z\) would complete the proof at the promised level.

2. **Proposition II.9.2, `#karp:prop:small-orders`, triangular containment.** The trace inequalities bound nonreal eigenvalues by \(x\ge-1/2\) and \(3y^2\le(1-x)^2\). The proof then says that boundary realizations plus radial filling fill the triangle. It does not explicitly state that \(0=(1+\omega+\bar\omega)/3\) lies inside the triangle or explain why the radial hull of its three attained sides is the full convex triangle.

3. **Proposition II.9.2, first-cell labeling.** The proof refers to “the denominator labeling of equation (II.2.2),” but Topic IX’s rendered page does not expose a numbered equation (II.2.2) or a matching permalink. The student can infer the convention from prose, but the reference itself is not usable.

4. **Proposition II.9.2, ray uniqueness on both pieces.** The proof differentiates the argument of a complex path twice, but never states the identity
   \[
   \frac{d}{dt}\arg z(t)=\operatorname{Im}\frac{z'(t)}{z(t)}
   \]
   for a zero-free differentiable path. Those derivative signs are what prove that each chord/vertical segment meets each ray exactly once.

5. **Proposition II.9.2, terminal quadratic roots.** The formulas are mathematically standard, but this is where the exceptional segment and nonreal arc are born. A student would benefit from seeing the discriminant split \(1-4\alpha\ge0\) versus \(<0\) and the two roots written on separate lines before reading their ranges.

6. **Theorem II.3.1, `#karp:thm:main`, inherited branch.** The sentence “Because an open order-\(n\) ray cannot be an inherited Farey endpoint, the induction hypothesis applies…” is unnecessarily opaque. The induction hypothesis already asserts \(R_{n-1}=K_{n-1}\) on every ray. If the intended point is that an \(F_{n-1}\) endpoint would remain an \(F_n\) endpoint, that should be said directly or the sentence should be removed.

7. **Theorem II.3.1, full-circle continuity.** The proof correctly says that the values at \(-\pi\) and \(\pi\) are both one. It would still help to say explicitly that Proposition II.2.4 gives the one-sided approach to that value for every \(n\ge4\), which is exactly why the exceptional \(n=3\) case was excluded from this topological step.

### Needed

- Repair or replace the inaccessible reference to equation (II.2.2) in the order-three base proof.
- State and justify the derivative-of-argument identity before using it to prove one-ray/one-point parametrization of the two order-three boundary pieces.
- Add the short geometric conclusion that the attained triangle sides have radial hull equal to the entire triangle because the triangle is convex and contains zero.

### Advised

- Make the “sufficiently small ball” step of Lemma II.9.1 quantitative enough to track both argument and modulus.
- Split the terminal quadratic-root discussion at \(\alpha=1/4\) and show the roots explicitly in the two regimes.
- Remove or clarify the inherited-Farey-endpoint sentence in the induction proof.
- At the full-circle step, explicitly connect terminal continuity for \(n\ge4\) to Proposition II.2.4.
- Change the Proposition II.9.2 purpose line “Prove the induction base…” to “Proves the induction base…”, and likewise use “Identifies” rather than “Identify” on the main theorem card.

### Would be nice to add

- Add a compact induction dependency diagram with arrows labelled “attainment,” “new-shell equality,” “order embedding,” and “candidate nesting.”
- Show the \(3\times3\) terminal sparse matrix explicitly next to its factorized characteristic polynomial.
- Add a small polar plot of \(R_3\) emphasizing the jump between the open terminal arc’s limit and the value on the negative-real ray.

---

## Topic XIV — The complete order-seven example and boundary laboratory

### Reading log and what works

This is an effective closing chapter because it does not pretend that computation is part of the proof completed in Topic XIII. The order-seven atlas makes the finite Farey structure visible, the ray \(x=3/8\) connects exact arithmetic to a single scalar solve and then to a concrete stochastic matrix, and the page repeatedly distinguishes symbolic data from numerical plotting. The matrix itself is especially valuable: a student can identify the two local three-cycles, the five-cycle, the absorbing state, and the resulting factorization without having to infer that a realizer merely exists.

I also exercised the interactive laboratory at orders \(1,2,3,7\), and outside its displayed input range. The exact descriptions at orders one and two are clear. At order three the widget explicitly distinguishes the sampled nonreal arcs from the exact terminal segment, which is the right treatment of the exceptional case. The order-seven cell ledger agrees with the atlas, and the exact/numerical labels correctly warn that an SVG polyline is not the symbolic boundary curve.

### Student questions and blockers, in reading order

1. **Topic orientation.** The page says that the chapter “will” document the routine, “will” publish the code, and “will” provide a widget, although all three are already present lower on the page. The generic reading convention also promises manuscript proofs and added line-by-line explanations even though Topic XIV contains no new formal theorem or proof. This makes the finished chapter sound like a plan or placeholder.

2. **Exact-atlas introduction, `#karp:sec:n7`.** The sentence “Only the radius changes continuously inside the cell” is not correct as written. As \(x\) moves inside a cell, the direction \(x\), the angular gaps \(A,B\), the radius \(\rho\), and the weights \(\alpha,\beta\) all vary; only the discrete data \((q,s,d,e)\) remain fixed.

3. **Cell ledger and equation (II.10.1), `#karp:eq:F7`.** The table declares that \(q\le s\), so for cells such as \(1/7\to1/6\) these symbols no longer follow the left-to-right denominator order. That convention is legitimate, but the page does not remind the student how the associated numerators and orientation are retained. Nor does it state the two generic carrier forms that explain the table:
   \[
   z^e(z^q-\beta)^d-\alpha^d\quad(e\ge0),
   \qquad
   (z^q-\beta)^d-\alpha^d z^{-e}\quad(e<0).
   \]
   Without those lines, the nine polynomials look like a list to trust rather than a calculation to reproduce.

4. **Worked ray, cell identification.** The determinant calculation \(3\cdot2-1\cdot5=1\) does not by itself prove that \(1/3\) and \(2/5\) are adjacent in the Farey sequence of order seven. The order-specific criterion also needs the denominator sum \(3+5=8>7\). For example, determinant-one fractions can have further fractions between them in a higher-order Farey sequence.

5. **Worked ray, angular gaps.** The page states \(A=\pi/4\) and \(B=\pi/8\), while the manuscript expansion visibly uses
   \[
   A=2\pi(3x-1),\qquad B=\pi(2-5x).
   \]
   A student asks why one expression has \(2\pi\) and the other \(\pi\). The general definitions \(A=2\pi|qx-p|\) and \(B=(2\pi/d)|sx-r|\) are not restated, so the factor \(1/d=1/2\) is invisible exactly where the page claims to work the ray from beginning to end.

6. **Scalar solve, equation (II.10.2), `#karp:eq:n7-ray-equation`.** Strict increase proves uniqueness, but bisection also needs an initial sign-changing bracket. The page does not show that at \(\rho=0\) the left side is below \(\sin(3\pi/8)\), whereas at \(\rho=1\) it is above it. Thus existence and the actual starting bracket are left implicit.

7. **Numerical values, equation (II.10.3), `#karp:eq:n7-numbers`.** The introductory sentence says that only the decimal radius and plotted coordinates are approximations, but the displayed decimals for \(\alpha\), \(\beta\), and \(\lambda\) are approximations as well. More importantly, the page never gives the formula that recovers \(\alpha\) from the solved \(\rho\). The calculation therefore jumps from \(\rho\) to two unexplained weights and is not yet “from beginning to end.”

8. **Carrier equation and matrix, `#karp:eq:n7-worked-poly` and `#karp:eq:n7-matrix`.** The factorization is believable after Topic XI, but a student checking this concrete example would benefit from the three-line cycle ledger: two disjoint local cycles contribute the binomial terms, the unique cross cycle contributes \(\alpha^2t\), and the absorbing loop contributes \(t-1\). At present the text names those cycles but asks the reader to reconstruct how their signs and unused vertices produce the displayed determinant.

9. **Reproducible extraction section.** “IEEE-754 double precision,” “safe-integer order range,” and “regression test” are computer-science terms that are not defined or linked. The page also reports a \(10^{-15}\) regression tolerance without showing the test, its expected value, or a link to a test file. A mathematics student can understand bisection but cannot audit what part of the software claim has actually been verified from this page.

10. **Interactive laboratory.** Invalid entries are silently transformed: entering \(41\) draws order \(40\), and entering \(2.5\) draws order \(2\). The widget says “Enter an integer from 1 to 40,” but it gives no visible message that clamping or truncation has occurred. That behavior can cause a reader to think the requested order was accepted.

### Needed

- Correct the atlas sentence so that it says the discrete carrier data remain fixed while the ray, angular gaps, radius, and weights vary.
- Complete the Farey-neighbour check for \(1/3<2/5\) with the order-seven denominator-sum condition \(3+5>7\).
- Restate the general formulas for \(A\) and \(B\) before substituting \(x=3/8\), making the factor \(1/d\) in \(B\) explicit.
- Show the two endpoint signs that start bisection and give the formula used to recover \(\alpha\) and \(\beta\) from \(\rho\).
- Correct the exact/approximate sentence to include the displayed decimals for \(\alpha,\beta,\lambda\).

### Advised

- Replace the future-tense orientation and the irrelevant proof-opening convention with a short statement of what the completed computational chapter contains.
- Put the two generic reduced-carrier formulas above the order-seven table and explain how the ordered denominator pair \((q,s)\) is related to the oriented cell endpoints.
- Add a compact cycle-contribution ledger for the \(7\times7\) realization.
- Define IEEE-754 double precision and safe integers in a short optional software note; link the actual regression test and state precisely what it checks.
- Show a visible validation message when widget input is nonintegral or outside \([1,40]\), rather than silently truncating or clamping it.

### Would be nice to add

- Label the order-seven plot’s root-of-unity nodes by their Farey fractions, at least on focus or hover.
- Show the first three bisection brackets for \(x=3/8\), then jump to the final numerical interval.
- Add a copyable one-block “reproduce this ray” code example using the downloadable module.

---

## Cross-page conclusion from Pass 2

The route from Topic VII to Topic XIV is mathematically coherent and far more auditable than a conventional high-level summary. The strongest pages expose their dependency chain, distinguish formal proof from intuition, and give a concrete object—a factor list, graph, matrix, or plotted cell—that the student can inspect.

The recurring obstacle is not lack of mathematical substance but incomplete local closure. Several later proofs rely on an angle-range fact \(A>0\), \(B>0\), \(A+B<\pi\) that is repeatedly cited rather than derived in an accessible place. Other dependencies appear as unusable equation numbers or undeclared earlier lemmas. Topic XII-A contains the sharpest single exposition bottleneck, while Topics XI and XIV would gain the most from fully labelled worked objects.

Across the nine physical pages, the first revision pass should therefore prioritize broken references, the shared angle-range lemma, precise dependency links, and the few missing algebraic or geometric bridges marked **Needed** above. A second pass can then reduce notation pressure with diagrams, ledgers, and small numerical examples. Cosmetic polish and optional interactive reinforcement should come only after those closure issues are resolved.
