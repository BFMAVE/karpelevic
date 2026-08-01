# Topic X authoring blueprint - From monodromy to the radial upper inequality

Status: local-only authoring blueprint. Do not publish or link publicly.

Canonical source: Part II, Section II.5 and Section II.6 through Theorem II.6.1, PDF pages 73-76. Corollary II.6.2 is intentionally deferred to Topic XI because its proof uses the realization theorem from Section II.7.

Website counter: `Topic X of XIV`

Suggested visible count: `2 theorems - 1 lemma`

Suggested title: `From critical monodromy to the radial upper inequality`

Guiding question: `Why must every heterogeneous contact profile lie no farther out than the equal-profile scalar candidate?`

## Educational contract

This page is the analytic compression point of the proof. Topics I-VII built a critical polygon and extracted monodromy; Topic VIII supplied criticality from a stochastic extremum; Topic IX constructed one scalar candidate on every Farey ray. Topic X puts these three pieces into one controlled logarithmic sheet and applies strict convexity.

The visible argument should be understandable to a reader who knows complex numbers, logarithms, derivatives, and the elementary statement of Jensen's inequality. Everything more specialized is defined locally.

The page proves an upper comparison only:

\[
\rho_{\text{new shell}}
\leq
\rho_{\text{scalar candidate}}.
\]

It must not yet assert equality, attainment, or membership of the candidate in \(\Theta_N\). Those require Topic XI.

## Exact manuscript inventory

1. **Theorem II.5.1 - Part I critical-polygon monodromy.** PDF pages 73-74. Label: `karp:thm:compression`. Parameter display `(II.5.1)`, homogeneous product `(II.5.2)`, Laurent product `(II.5.3)`, Jensen sheet `(II.5.4)`, and lifted phase `(II.5.5)`.
2. **Lemma II.5.2 - Reflection dictionary for the selected orientation.** PDF pages 74-75. Label: `karp:lem:reflection-dictionary`.
3. The oriented-cell setup `(II.6.1)`-`(II.6.3)` and the unnumbered **factor-potential construction**, PDF page 75. Displays `(II.6.4)`-`(II.6.6)`.
4. **Theorem II.6.1 - Heterogeneous sharp inequality.** PDF page 76. Label: `karp:thm:hetero-sharp`. Inequality `(II.6.7)`, equality condition `(II.6.8)`, Jensen step `(II.6.9)`, and trigonometric reduction `(II.6.10)`.

Do not include Corollary II.6.2 on this page. Topic XI will display it under its original label and numbering after proving realization.

## Closed dependency ledger

### Imported from prior topics

- Topic VII, Part I Theorem 1.4: complex monodromy and Farey carrier. This is the sole deep geometric import. Topic X does not reproduce its proof, because Topic VII already presents it in full; it restates every output used and maps each hypothesis explicitly.
- Topic VIII, Proposition II.4.7: a new-shell radial extremum yields an \(N\)-critical elliptic contraction.
- Topic IX, Lemma II.2.1: determinant-one characterization of Farey neighbours.
- Topic IX, Proposition II.2.3: existence and uniqueness of the equality radius on a fixed Farey ray.
- Topic IX's denominator-based labels, signed \(e=s-dq\), angles \(A,B\), and scalar equation.
- Elementary complex arithmetic: modulus of a product and argument of a product on a fixed lifted branch.
- Jensen's inequality for a strictly convex function, restated and illustrated locally.

### Proved on this page

- The Part I output applies to the selected multiplier \(\mu\in\{\lambda,\overline\lambda\}\) with all required branch data.
- Reflection transfers the selected orientation back to the original upper-half-plane ray without changing \(q,s,d,e\) or the scalar equation.
- The factor potential has \(F''>0\) on one common interval.
- The product fixes the sum of the potentials; the phase fixes the mean of their arguments.
- Strict Jensen gives the scalar radial inequality and characterizes equality among profiles.
- A new-shell radius cannot exceed Topic IX's scalar candidate.

### Deliberately not imported

- No stochastic realization from Topic XI.
- No nesting from Topic XII.
- No final boundary theorem from Topic XIII.

This makes the upper comparison independent of the reverse inclusion.

## First-use glossary and local explainers

### Selected multiplier

Part I can choose either adapted complex orientation. In one orientation the real-linear map is multiplication by \(\lambda\); in the opposite orientation it is multiplication by \(\overline\lambda\). The theorem therefore returns

\[
\mu\in\{\lambda,\overline\lambda\}.
\]

This is an existential selection, not a claim that invariant polygons or complex coordinates are unique.

### Positive lifted argument

For nonzero \(z\) that is not positive real, \(\operatorname{arg}_+(z)\in(0,2\pi)\) is the unique representative of its angle in that interval. Unlike an argument modulo \(2\pi\), it records how much phase has accumulated before reduction.

Expandable example: distinguish \(-\pi/4\pmod{2\pi}\) from the positive lift \(7\pi/4\).

### Heterogeneous profile

The numbers \(\beta_1,\ldots,\beta_d\) may differ from one return block to the next. Set \(\alpha_j=1-\beta_j\). A constant or equal profile is the special case \(\beta_1=\cdots=\beta_d\).

### Homogeneous product and Laurent product

The homogeneous identity

\[
\mu^s\prod_{j=1}^d(\mu^q-\beta_j)
=\mu^{dq}\prod_{j=1}^d\alpha_j
\]

is meaningful without checking the sign of \(e=s-dq\). Since \(\mu\neq0\), it is equivalent to

\[
\mu^e\prod_{j=1}^d(\mu^q-\beta_j)
=\prod_{j=1}^d\alpha_j.
\]

Call the second identity `Laurent` when \(e<0\), because a negative power is present. Never call it a polynomial identity in that case.

### Algebraic padding

A zero factor may be inserted to complete the algebraic return strip. It is bookkeeping, not an extra geometric strict contact. Keep this warning adjacent to Theorem II.5.1.

### Argument sheet

An argument sheet is one continuous interval on which all factor arguments are represented by actual real numbers rather than values modulo \(2\pi\). Here every \(u_j\) lies in \([A,M)\subset(0,\pi)\).

### Strict convexity and Jensen

A twice differentiable function with \(F''>0\) bends strictly upward. Jensen's inequality says

\[
F\left(\frac{u_1+\cdots+u_d}{d}\right)
\leq
\frac{F(u_1)+\cdots+F(u_d)}{d},
\]

with equality exactly when all \(u_j\) are equal. Include a two-point chord illustration before using the \(d\)-point statement.

### Why logarithms appear

Moduli multiply in the monodromy product. Taking logarithms turns that product into a sum, which is the form Jensen's inequality can compare.

## Page opening

Open with a three-line dependency strip:

\[
\boxed{\text{Topic VIII: criticality}}
\longrightarrow
\boxed{\text{Topic VII: monodromy data}}
\longrightarrow
\boxed{\text{Topic IX: scalar equality radius}}.
\]

Then state the idea in ordinary language:

> The polygonal dynamics may return with different contact parameters in different blocks. The product identity knows their combined size, while the lifted phase identity knows their average direction. On one common argument sheet, strict convexity says that the equal profile is the outermost possible profile.

The word `outermost` here describes the inequality among profiles. Do not yet claim that the equal profile is attained by a stochastic matrix.

## Result-by-result authoring plan

### Theorem II.5.1 - Part I critical-polygon monodromy

**Exact statement.** Let \(N\geq4\) and let \(\lambda=|\lambda|e^{i\theta}\) be a new-shell radial extremum as in `(II.4.3)`, with \(x=\theta/(2\pi)\). There exist

\[
\mu\in\{\lambda,\overline\lambda\},
\qquad
\vartheta=\operatorname{arg}_+(\mu),
\qquad
y=\frac{\vartheta}{2\pi},
\]

and consecutive reduced fractions

\[
\frac pq<y<\frac rs,
\qquad rq-ps=1,
\qquad q\leq s.
\]

Thus \(y=x\) for \(\mu=\lambda\), while \(y=1-x\) for \(\mu=\overline\lambda\). Put

\[
d=\left\lfloor\frac Nq\right\rfloor,
\qquad
e=s-dq.
\]

There are parameters

\[
0\leq\beta_j<1,
\qquad
\alpha_j=1-\beta_j>0
\quad(1\leq j\leq d) \tag{II.5.1}
\]

satisfying

\[
\mu^s\prod_{j=1}^d(\mu^q-\beta_j)
=\mu^{dq}\prod_{j=1}^d\alpha_j, \tag{II.5.2}
\]

equivalently

\[
\mu^e\prod_{j=1}^d(\mu^q-\beta_j)
=\prod_{j=1}^d\alpha_j. \tag{II.5.3}
\]

With

\[
A=q\vartheta-2\pi p,
\qquad
M=\operatorname{arg}_+(\mu^q-1),
\]

the uniquely selected factor arguments \(u_j\in(0,\pi)\) obey

\[
0<A<M<\pi,
\qquad
u_j\in[A,M), \tag{II.5.4}
\]

and

\[
e\vartheta+\sum_{j=1}^d u_j
=2\pi(r-dp). \tag{II.5.5}
\]

**Intuition.** This theorem is a data interface. The many pages of contact geometry are compressed into two equations and one branch interval: a product, a lifted phase, and a common sheet.

**Complete proof architecture as an import map.**

1. Proposition II.4.7 supplies exactly the input required by Part I Theorem 1.4: \(T_\lambda\) is an \(N\)-critical elliptic contraction.
2. Topic I's adapted-complex-structure result gives the two possible complex orientations, corresponding to \(\lambda\) and \(\overline\lambda\). Part I Theorem 1.4 existentially selects one; call it \(\mu\).
3. Topic VII's monodromy theorem supplies consecutive Farey endpoints, ordered denominators, \(d,e\), the complementary parameters, both product identities, the common argument interval, and the exact lifted phase.
4. Topic IX, Lemma II.2.1 converts `consecutive in \(F_N\)` into the displayed determinant identity \(rq-ps=1\) in the chosen left-to-right orientation.
5. No uniqueness statement is used. No realization or nesting statement is imported.

Do not replace this dependency map by `apply Theorem 1.4`. The map is what makes the page educational and auditable, while the complete proof remains in Topic VII.

**Deterministic figure.** A compact `data packet` plate with five labeled compartments: orientation, Farey cell, parameters, product, sheet and phase. Each compartment links backward to the exact earlier result that produced it.

**Provenance.** Category: **New result**. Exact internal source: Part I Theorem 1.4, presented in Topic VII. The wrapper is the manuscript's new-shell interface to that theorem. Closest classical endpoint: Karpelevič (1951) and Ito (1997) for the eventual Farey-indexed carrier, not for this heterogeneous monodromy statement.

### Lemma II.5.2 - Reflection dictionary for the selected orientation

**Exact statement.** If \(\mu=\overline\lambda\), so \(y=1-x\), then the reflected cell is

\[
\frac{s-r}{s}<x<\frac{q-p}{q}.
\]

With Topic IX's denominator labeling,

\[
2\pi|qx-(q-p)|=2\pi(qy-p)=A,
\]

\[
\frac{2\pi}{d}|sx-(s-r)|
=\frac{2\pi}{d}(r-sy)
=\frac{2\pi r-s\vartheta}{d}.
\]

Reflection preserves \(q,s,d,e\), \(|\lambda|=|\mu|\), and the scalar equation. Conjugating a constant-profile carrier for \(\mu\) gives the Ito carrier for \(\lambda\) in the reflected cell.

**Intuition.** Part I is free to use the orientation in which the contact dynamics are cleanest. Reflection is the bookkeeping operation that returns its conclusion to the upper-half-plane point the reader started with.

**Complete proof architecture.**

1. The map \(t\mapsto1-t\) reverses order and sends a reduced fraction \(p/q\) to \((q-p)/q\); denominators and reducedness are unchanged.
2. Therefore \(p/q<y<r/s\) becomes \((s-r)/s<x<(q-p)/q\).
3. Substitute \(x=1-y\):
   \[
   qx-(q-p)=p-qy<0,
   \qquad
   sx-(s-r)=r-sy>0.
   \]
4. Taking absolute values gives the displayed \(A,B\) identities.
5. Because denominators are unchanged, so are \(d=\lfloor N/q\rfloor\) and \(e=s-dq\). Complex conjugation preserves modulus.
6. Conjugate the constant-profile polynomial identity. Its reflected exponents and real parameters are unchanged, so it is exactly the original cell's Ito identity.

**Deterministic figure.** Mirror the interval \([0,1]\) at \(1/2\), showing \(p/q,r/s\) and their reflected fractions. Beneath it, mirror a point across the real axis in the complex plane. Keep denominator colors fixed through both reflections.

**Provenance.** Category: **Classical result**. Exact sources: the reflection symmetry of Farey fractions follows directly from the classical Farey definitions; complex conjugation symmetry for real stochastic matrices is Proposition II.4.1. The exact dictionary is recorded here to prevent an orientation gap.

### Oriented-cell setup

For the analytic calculation, work first in the orientation

\[
\frac pq<x<\frac rs,
\qquad
rq-ps=1,
\qquad
q\leq s. \tag{II.6.1}
\]

Set \(\theta=2\pi x\) and

\[
A=q\theta-2\pi p,
\qquad
B=\frac{2\pi r-s\theta}{d}. \tag{II.6.2}
\]

Because this orientation fixes the signs, the absolute values from Topic IX disappear. Reuse the determinant-one calculation to establish

\[
A>0,
\qquad
B>0,
\qquad
A+B<\pi. \tag{II.6.3}
\]

### The factor potential

Fix \(\lambda=\rho e^{i\theta}\), \(0<\rho<1\), and choose

\[
M=\operatorname{Arg}(\lambda^q-1)
\]

on the branch for which \(A<M<\pi\). Since \(\lambda^q=\rho^qe^{iA}\) lies in the open upper half-plane, the horizontal segment \(\lambda^q-[0,1)\) never reaches zero.

For \(0\leq\beta<1\), define

\[
u=\operatorname{Arg}(\lambda^q-\beta)\in[A,M).
\]

**Why \(u\) is strictly increasing.** Write \(\lambda^q=a+ib\), with \(b>0\). Then

\[
\frac{du}{d\beta}
=\frac{b}{(a-\beta)^2+b^2}>0.
\]

This derivative belongs in an expandable `Why the argument moves upward` panel; the main text can use the horizontal-segment figure.

The triangle with vertices \(\beta,1,\lambda^q\) gives

\[
F(u):=\log\frac{|\lambda^q-\beta|}{1-\beta}
=\log\sin M-\log\sin(M-u). \tag{II.6.4}
\]

Differentiate explicitly:

\[
F'(u)=\cot(M-u),
\qquad
F''(u)=\csc^2(M-u)>0. \tag{II.6.5}
\]

At \(\beta=0\), \(u=A\), so the same triangle yields

\[
\rho^q=\frac{\sin M}{\sin(M-A)}. \tag{II.6.6}
\]

**Deterministic figure.** Plot \(\lambda^q\) above the real axis and slide the real point \(\beta\) from 0 toward 1 in four fixed frames. Mark \(A,u,M\) and the two triangle sides whose ratio defines \(F\). A second small plot shows the strictly convex graph of \(-\log\sin(M-u)\).

The factor-potential construction is not a separately numbered result and receives no novelty badge. Cite Jensen's original inequality for the classical analytic tool.

### Theorem II.6.1 - Heterogeneous sharp inequality

**Exact statement.** Suppose \(\lambda=\rho e^{i\theta}\) and parameters `(II.5.1)` satisfy the product `(II.5.3)` in the oriented cell `(II.6.1)`. Let every \(u_j\in[A,M)\) be the branch just defined and suppose the lifted phase `(II.5.5)` holds. Then

\[
\rho^{s/d}\sin A+\rho^q\sin B
\leq\sin(A+B). \tag{II.6.7}
\]

Equality holds if and only if

\[
\beta_1=\cdots=\beta_d. \tag{II.6.8}
\]

**Intuition.** The phase identity fixes the mean argument at \(A+B\). The product identity fixes the total potential. Strict convexity says the total potential is smallest when all arguments equal their mean. Rewriting that one inequality gives the scalar radius bound.

**Complete proof architecture, phase mean.**

1. Recall \(e=s-dq\).
2. From `(II.5.5)`,
   \[
   \sum_{j=1}^d u_j
   =2\pi(r-dp)-e\theta.
   \]
3. Expand \(d(A+B)\) using `(II.6.2)`:
   \[
   d(A+B)
   =dq\theta-2\pi dp+2\pi r-s\theta
   =2\pi(r-dp)-e\theta.
   \]
4. Hence the arithmetic mean of the \(u_j\) is exactly \(A+B\).

**Complete proof architecture, product sum.**

1. Take moduli in `(II.5.3)`:
   \[
   \rho^e\prod_j|\lambda^q-\beta_j|
   =\prod_j\alpha_j.
   \]
2. Every \(\alpha_j=1-\beta_j>0\), so logarithms are legitimate.
3. Rearranging gives
   \[
   \sum_{j=1}^d
   \log\frac{|\lambda^q-\beta_j|}{1-\beta_j}
   =-e\log\rho
   =(dq-s)\log\rho.
   \]
4. By `(II.6.4)`, this is \(\sum_jF(u_j)=(dq-s)\log\rho\).

**Complete proof architecture, Jensen and equality.**

1. Every \(u_j\in[A,M)\), and their mean \(A+B\) lies in the same interval.
2. Since \(F''>0\) throughout their convex hull, strict Jensen gives
   \[
   dF(A+B)\leq(dq-s)\log\rho. \tag{II.6.9}
   \]
3. Equality occurs exactly when all \(u_j\) coincide.
4. The map \(\beta\mapsto\operatorname{Arg}(\lambda^q-\beta)\) is strictly increasing, so equality of all \(u_j\) is equivalent to equality of all \(\beta_j\).

**Complete proof architecture, return to the scalar inequality.**

1. Substitute `(II.6.4)` into `(II.6.9)`, divide by \(d\), and exponentiate:
   \[
   \frac{\sin(M-A-B)}{\sin M}
   \geq\rho^{s/d-q}.
   \]
2. From `(II.6.6)`, \(\sin(M-A)=\rho^{-q}\sin M\).
3. Use the exact identity
   \[
   \sin(M-A)\sin(A+B)-\sin M\sin B
   =\sin A\sin(M-A-B).
   \]
4. Divide by \(\sin M\sin A>0\) to obtain
   \[
   \frac{\sin(M-A-B)}{\sin M}
   =\frac{\rho^{-q}\sin(A+B)-\sin B}{\sin A}. \tag{II.6.10}
   \]
5. Combine the last two inequalities and multiply by the positive number \(\rho^q\sin A\). The result is `(II.6.7)`.

**Deterministic figure.** A Jensen equalization plate with \(d=3\): three unequal \(u_j\) on the convex graph and their average, followed by three equal arguments. The caption states precisely which quantity is fixed by phase and which sum is fixed by the product.

**Provenance.** Category: **New result**. The heterogeneous sharp inequality and its equality profile are the manuscript's log-sine compression of the new Part I monodromy data. Classical analytic ingredient: J. L. W. V. Jensen, "Sur les fonctions convexes et les inégalités entre les valeurs moyennes," *Acta Mathematica* 30 (1906), 175-193. Classical boundary antecedents: Karpelevič (1951) and Ito (1997).

### Unnumbered consequence - the upper comparison only

Let \(\lambda=\rho e^{2\pi ix}\) be a new-shell extremum.

1. Theorem II.5.1 supplies \(\mu\), product, phase, and sheet.
2. Apply Theorem II.6.1 to \(\mu\).
3. If \(\mu=\lambda\), the oriented \(A,B\) are Topic IX's absolute \(A,B\). If \(\mu=\overline\lambda\), Lemma II.5.2 makes the same identification after reflection.
4. Hence the original radius satisfies
   \[
   \rho^{s/d}\sin A+\rho^q\sin B\leq\sin(A+B).
   \]
5. Let \(\rho_*\) be Topic IX's unique equality radius. Because the left side is strictly increasing in \(\rho\), the inequality gives
   \[
   \rho\leq\rho_*.
   \]

Stop here. The reverse inequality \(\rho_*\leq R_N(\theta)=\rho\) requires a stochastic matrix attaining \(\rho_*\), which Topic XI has not yet supplied.

## Suggested page rhythm

1. Three-box dependency strip and one-paragraph compression idea.
2. Theorem II.5.1 as a fully labeled data packet.
3. Reflection dictionary and mirrored-cell plate.
4. Oriented \(A,B\) setup.
5. Factor triangle and strict convexity.
6. Theorem II.6.1 in four proof movements: mean, sum, Jensen, trigonometry.
7. Upper-comparison consequence.
8. A visibly bordered `Why equality waits` panel pointing forward to Topic XI without using its result.

The theorem proof is closed by default but the mean/sum/Jensen flow remains visible as a four-step diagram. There is no duplicate `walkthrough`; each optional explainer handles one genuine conceptual obstacle.

## Deterministic figure specification

- `X.1 The monodromy data packet`: SVG dependency diagram with exact equation labels.
- `X.2 Reflection dictionary`: exact rational labels and complex conjugation.
- `X.3 The factor triangle`: SVG constructed from chosen numerical \(\rho,A,\beta\), with every angle recomputed rather than hand-positioned.
- `X.4 Strict Jensen equalization`: SVG plot of the exact \(F(u)\) for the same parameters.
- `X.5 Upper comparison`: monotone scalar residual showing a heterogeneous radius to the left of the equality root. Label the realization arrow as unavailable until Topic XI.

## Preliminary adversarial audit A - dependency and circularity attack

Attack: calling the inequality `sharp` can silently use the candidate's attainability; the manuscript's Corollary II.6.2 explicitly invokes Theorem II.7.3, which belongs to the next topic.

Fixes incorporated:

- Corollary II.6.2 is removed from Topic X and inventoried for Topic XI.
- Topic X concludes only \(\rho\leq\rho_*\).
- The dependency ledger expressly excludes realization and nesting.
- Theorem II.5.1's import map begins with Topic VIII criticality and ends with Topic VII monodromy, with no stochastic reverse inclusion.
- `Sharp` is retained only in the exact manuscript theorem title and explained as an equality characterization among admissible profiles, not yet as stochastic attainment.

Residual implementation check: search the rendered Topic X text for `attain`, `belongs to Theta`, and `equals the candidate`; each occurrence must either be a negation or a forward pointer to Topic XI.

## Preliminary adversarial audit B - branch, sign, and logarithm attack

Attack: an argument modulo \(2\pi\) cannot be averaged, \(e\) may be negative, logarithms require positive factors, and exponentiating can reverse or corrupt an inequality if signs are hidden.

Fixes incorporated:

- The positive lift and the common interval \([A,M)\) are defined before any phase sum.
- Both homogeneous and Laurent identities are shown; \(e=s-dq\) remains signed.
- The proof states \(\alpha_j=1-\beta_j>0\) before taking logarithms.
- Every multiplier used after Jensen is explicitly positive: \(\rho^q>0\), \(\sin A>0\), and \(\sin M>0\).
- The derivative of the argument map is provided, closing the equality implication \(u_i=u_j\Rightarrow\beta_i=\beta_j\).
- The algebra proving \(\sum u_j=d(A+B)\) is displayed rather than described.

Residual implementation check: symbolically verify `(II.6.10)` and numerically test `(II.6.7)` for random admissible constant and nonconstant profiles generated from the product/phase constraints before drawing any quantitative plate.

## Source ledger

- Part I, Theorem 1.4, "Complex monodromy and Farey carrier," in the canonical manuscript; complete website proof in Topic VII.
- F. I. Karpelevič, "On the characteristic roots of matrices with nonnegative elements," *Izv. Akad. Nauk SSSR Ser. Mat.* 15(4) (1951), 361-383.
- H. Ito, "A new statement about the theorem determining the region of eigenvalues of stochastic matrices," *Linear Algebra and its Applications* 267 (1997), 241-246. DOI: 10.1016/S0024-3795(97)80052-3.
- C. R. Johnson and P. Paparella, "A matricial view of the Karpelevič theorem," *Linear Algebra and its Applications* 520 (2017), 1-15.
- S. Kirkland, T. Laffey, and H. Šmigoc, "The Karpelevič region revisited," *Journal of Mathematical Analysis and Applications* 490(2) (2020), 124332.
- J. L. W. V. Jensen, "Sur les fonctions convexes et les inégalités entre les valeurs moyennes," *Acta Mathematica* 30 (1906), 175-193.
