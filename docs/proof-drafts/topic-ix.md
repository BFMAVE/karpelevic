# Topic IX authoring blueprint - The candidate Farey-Ito boundary

Status: local-only authoring blueprint. Do not publish or add to navigation before author review.

Canonical source: Part II, Section II.2, "Farey data, candidate arcs, and direct extraction," PDF pages 67-70. The main theorem printed on page 71 is not part of this topic; it is reserved for Topic XIII.

Website counter: `Topic IX of XIV`

Suggested visible count: `2 definitions - 3 results - 1 algorithm`

Suggested title: `Constructing the candidate boundary, one ray at a time`

Guiding question: `Once a Farey cell is fixed, how can one locate exactly one algebraic candidate on every ray?`

## Educational contract

This page builds an object; it does not yet prove that the object is the stochastic boundary. That distinction must remain visible in the title, captions, conclusion, and algorithm.

The reader should finish the page able to perform the following calculation without trusting a black-box polynomial root tracker:

1. list the relevant Farey neighbours;
2. choose one ray inside their cell;
3. compute two positive angles \(A\) and \(B\);
4. solve one strictly increasing scalar equation for \(\rho\);
5. recover \(\alpha\) and \(\beta\);
6. verify that \(\lambda=\rho e^{2\pi ix}\) satisfies the Ito polynomial.

The page repeatedly uses `candidate`, never `boundary point`, until Topic XI proves attainment and Topic XIII proves the outer-boundary statement.

## Exact manuscript inventory

1. **Lemma II.2.1 - Farey adjacency criterion.** PDF page 67. Label: `karp:lem:farey-adjacency-expanded`. Display `(II.2.1)`, label `karp:eq:farey-neighbor`.
2. **Definition II.2.2 - Ito polynomial family.** PDF page 68. Label: `karp:def:ito-family`. Displays `(II.2.4)` and `(II.2.5)`, labels `karp:eq:Ito-carrier` and `karp:eq:reduced-carrier`.
3. **Proposition II.2.3 - One scalar equation per ray.** PDF pages 68-69. Label: `karp:prop:scalar-ray`. Displays `(II.2.8)`, `(II.2.9)`, and rooted identity `(II.2.10)`.
4. **Proposition II.2.4 - Endpoint limits, including the order-three exception.** PDF pages 69-70. Label: `karp:prop:scalar-continuity`. Exceptional limits `(II.2.11)`.
5. **Definition II.2.5 - Farey-Ito carrier.** PDF page 70. Label: `karp:def:carrier`. Displays `(II.2.12)` and `(II.2.13)`.
6. **Algorithm II.2.6 - Boundary extraction.** PDF page 70. Label: `karp:alg:boundary`.

The unnumbered endpoint labeling and integers

\[
\frac pq,\ \frac rs,\quad q\leq s,\quad |rq-ps|=1,
\qquad
d=\left\lfloor\frac nq\right\rfloor,
\qquad
e=s-dq
\]

must appear between Lemma II.2.1 and Definition II.2.2.

## Closed dependency ledger

### Imported from previous topics

- Topic V, Lemma A.6: a half-open parallelogram spanned by integer vectors \(u,v\) contains exactly \(|\det(u,v)|\) integer representatives. This is used only in the converse direction of Lemma II.2.1 and receives an expandable reminder at the point of use.
- Topic VII: reduced fractions, Farey reflection, and why determinant-one cells arise from return arithmetic. Topic IX restates the elementary Farey definitions so that a reader can also enter here directly.
- Topic VIII: the notation \(\Theta_n\) and the reason a future radial boundary description is meaningful. No proof on this page uses stochastic matrices or invariant polygons.
- One-variable calculus: continuity, strict monotonicity, the intermediate value theorem, and \(\sin u\sim u\) as \(u\to0\). Each receives a local reminder where used.

### Defined and proved here

- \(F_n\) and \(F_n^+\), Farey adjacency, denominator-based endpoint labels, \(d\), and signed \(e\).
- The Ito polynomial and its reduced form for either sign of \(e\).
- The angles \(A,B\), their range, and the unique scalar radius.
- The rooted chord identity on an explicitly chosen branch.
- All endpoint limits, including the order-three terminal cell.
- The carrier as a radial graph and the extraction algorithm.

### Outputs to later topics

- Topic X uses the scalar equation as the target upper-bound inequality and uses the denominator-based labeling in its reflection dictionary.
- Topic XI uses \(\alpha,\beta\) and the reduced carrier to build a stochastic realizer.
- Topic XII compares these candidates between successive orders.
- Topic XIII is the first topic allowed to identify the ordered carrier chain with \(\partial\Theta_n\).

There are no forward assumptions in Topic IX.

## First-use glossary and local explainers

### Reduced fraction and denominator

A fraction \(a/b\) is reduced when \(b>0\) and \(\gcd(a,b)=1\). Its denominator is then unambiguous.

Expandable example: \(2/6\) is the same rational number as \(1/3\), but only \(1/3\) is reduced; Farey sequences list rational numbers in reduced form once.

### Farey sequence and Farey cell

\[
F_n=\left\{\frac ab\in[0,1]:\gcd(a,b)=1,\ 0\leq a\leq b\leq n\right\}
\]

in increasing order. Two entries are consecutive when no element of \(F_n\) lies strictly between them. Their closed interval is a Farey cell. The upper-half-plane list is \(F_n^+=F_n\cap[0,1/2]\).

Expandable plate: show \(F_5^+=\{0,1/5,1/4,1/3,2/5,1/2\}\) on a number line, with denominators printed below.

### Mediant

The mediant of \(a/b<c/d\) is \((a+c)/(b+d)\). It lies strictly between the two fractions. It need not already be reduced, but reducing it can only lower its denominator.

### Primitive integer vector

The vector \((b,a)\in\mathbb Z^2\) is primitive exactly when \(a/b\) is reduced: no integer greater than one divides both coordinates.

### Why slopes encode fractions

The slope of \((b,a)\) is \(a/b\). Positive combinations of two nonparallel vectors have slopes strictly between the endpoint slopes. Include a deterministic lattice figure with the cone between \((b,a)\) and \((d,c)\).

### Floor and signed remainder

\(d=\lfloor n/q\rfloor\) is the number of complete blocks of length \(q\) that fit within \(n\). The number \(e=s-dq\) is signed: it may be negative. Never call it a remainder without the word `signed`, because an ordinary Euclidean remainder is nonnegative.

### Polynomial family versus root branch

A polynomial family gives many roots for each parameter. A root branch is a continuous choice of one of those roots as the parameter changes. Definition II.2.2 does not silently assume that such a branch has already been selected; Proposition II.2.3 constructs the desired point ray by ray.

### Complex argument and a chosen root sheet

Arguments are defined only modulo \(2\pi\), and a fractional power such as \(z^{s/d}\) depends on a branch. The rooted chord identity specifies the branch by anchoring it at the endpoint \(r/s\). Include an expandable refresher with one example of the two square roots of a complex number.

### Closure of a curve

\(\overline\Gamma\) contains the curve and every limit point approached by sequences on it. This is why nonexceptional root-of-unity endpoints can be included without adding them separately.

## Page opening

Begin with a finite number-line plate for \(F_5^+\). Then place one polar ray inside the cell \([1/3,2/5]\). State the construction problem before any formula:

> The cell tells us which two roots of unity the arc should connect. It does not yet tell us how far from the origin the arc meets an intermediate ray. The central achievement of this topic is to reduce that two-dimensional question to one strictly increasing equation in one real variable \(\rho\).

Immediately display a `candidate only` notice:

> This topic constructs the Farey-Ito carrier. It does not yet prove that every point is attainable by a stochastic matrix or that no stochastic eigenvalue lies farther out.

## Result-by-result authoring plan

### Lemma II.2.1 - Farey adjacency criterion

**Exact statement.** Reduced fractions \(a/b<c/d\) in \(F_n\) are consecutive if and only if

\[
bc-ad=1,
\qquad
b+d>n. \tag{II.2.1}
\]

**Intuition.** The determinant measures the number of lattice cells between the two primitive rays. Determinant one means there is no hidden lattice ray in their fundamental parallelogram; \(b+d>n\) says even their mediant arrives too late to enter order \(n\).

**Complete proof architecture, sufficient direction.**

1. Assume \(bc-ad=1\) and suppose \(a/b<h/k<c/d\).
2. Define the positive integers
   \[
   m=ck-dh,
   \qquad
   \ell=bh-ak.
   \]
   Positivity follows by cross multiplication from the two strict inequalities.
3. Verify coordinate by coordinate, using \(bc-ad=1\), that
   \[
   (k,h)=m(b,a)+\ell(d,c).
   \]
4. First coordinates give \(k=mb+\ell d\geq b+d\).
5. If \(b+d>n\), then \(k>n\), so no reduced fraction with denominator at most \(n\) lies between the endpoints.

**Complete proof architecture, necessary direction.**

1. Assume the fractions are consecutive and put \(D=bc-ad\in\mathbb Z_{>0}\).
2. Suppose \(D>1\). The primitive vectors \(u=(b,a)\) and \(v=(d,c)\) span a half-open fundamental parallelogram containing \(D\) integer representatives by Topic V, Lemma A.6.
3. Since \(D>1\), choose a representative \(w\neq0\). It cannot lie in the relative interior of either coordinate edge: that would be a nonintegral proper multiple of a primitive vector. Thus
   \[
   w=\alpha u+\beta v,
   \qquad 0<\alpha,\beta<1.
   \]
4. Both \(w\) and \(u+v-w\) are positive combinations of \(u,v\), so their slopes lie strictly between \(a/b\) and \(c/d\).
5. Their positive first coordinates add to \(b+d\). At least one is at most \((b+d)/2\leq n\), because \(b,d\leq n\).
6. Reducing that intermediate slope cannot increase its denominator, producing an element of \(F_n\) between the endpoints, contradiction. Hence \(D=1\).
7. If \(b+d\leq n\), the reduced mediant lies in \(F_n\) between the endpoints. Therefore consecutiveness forces \(b+d>n\).

**Deterministic figure.** A lattice parallelogram switch: determinant one with no nonzero interior representative, then determinant three with two additional representatives. A synchronized number line shows the intermediate slopes.

**Provenance.** Category: **Classical result**. Exact source: G. H. Hardy and E. M. Wright, *An Introduction to the Theory of Numbers*, 6th ed., Oxford University Press (2008), Chapter 3 on Farey series; the lattice-count proof uses Topic V, Lemma A.6.

### Denominator-based endpoint labels

For consecutive \(f<g\) in \(F_n^+\), label the endpoint with the smaller denominator as \(p/q\) and the other as \(r/s\), so \(q\leq s\) and \(|rq-ps|=1\).

Do not imply that \(p/q\) is always the left endpoint. The absolute values in \(A\) and \(B\) exist precisely because denominator order and left-right order are independent.

Add one two-cell example:

- In \([1/3,2/5]\), denominator and left-right order agree: \(p/q=1/3\), \(r/s=2/5\).
- In \([2/5,1/2]\), they do not: \(p/q=1/2\), \(r/s=2/5\).

### Definition II.2.2 - Ito polynomial family

For \(0\leq\alpha\leq1\), set \(\beta=1-\alpha\) and display

\[
\lambda^s(\lambda^q-\beta)^d
=\alpha^d\lambda^{dq}. \tag{II.2.4}
\]

For \(\lambda\neq0\), cancel the common power and write the two honest polynomial forms:

\[
\begin{cases}
\lambda^e(\lambda^q-\beta)^d=\alpha^d,&e\geq0,\\[2mm]
(\lambda^q-\beta)^d=\alpha^d\lambda^{-e},&e<0.
\end{cases} \tag{II.2.5}
\]

Explain why the split is necessary: a negative \(e\) cannot remain as a negative exponent in a polynomial. Definitions receive no novelty badge. Exact antecedent: Ito (1997), boundary polynomial family.

### Preparing the scalar equation

Let \(x\in(f,g)\), \(\lambda=\rho e^{2\pi ix}\), and define

\[
A=2\pi|qx-p|,
\qquad
B=\frac{2\pi}{d}|sx-r|. \tag{II.2.6}
\]

Show the range rather than announcing it. With

\[
t=\frac{|x-p/q|}{|r/s-p/q|}\in(0,1),
\]

determinant one gives

\[
|qx-p|=\frac{t}{s},
\qquad
|sx-r|=\frac{1-t}{q}.
\]

Therefore

\[
\frac{A+B}{2\pi}=\frac ts+\frac{1-t}{dq}<\frac12,
\]

with the manuscript's explicit check when \(dq=2\). Conclude

\[
A>0,\qquad B>0,\qquad A+B<\pi. \tag{II.2.7}
\]

Provide an expandable algebra check for the determinant-one identities.

### Proposition II.2.3 - One scalar equation per ray

**Exact statement.** There is a unique \(\rho_{f,g}^{(n)}(x)\in(0,1)\) satisfying

\[
\rho^{s/d}\sin A+\rho^q\sin B=\sin(A+B). \tag{II.2.8}
\]

For this radius,

\[
\alpha=\frac{\rho^{s/d}\sin A}{\sin(A+B)},
\qquad
\beta=\frac{\rho^q\sin B}{\sin(A+B)} \tag{II.2.9}
\]

are nonnegative, sum to one, and make \(\lambda=\rho e^{2\pi ix}\) satisfy `(II.2.4)`. The rooted identity below varies continuously on the open cell on the specified sheet.

**Intuition.** Two vectors with angular separation \(A+B<\pi\) can be scaled so that their transverse components cancel and their horizontal components add to one. The scalar equation is exactly the condition that the two coefficients add to one.

**Complete proof architecture, existence and uniqueness.**

1. Let \(G(\rho)=\rho^{s/d}\sin A+\rho^q\sin B\) on \([0,1]\).
2. Since \(s/d>0\), \(q>0\), and \(\sin A,\sin B>0\), \(G\) is continuous and strictly increasing.
3. \(G(0)=0<\sin(A+B)\).
4. At \(\rho=1\), use
   \[
   \sin A+\sin B-\sin(A+B)
   =4\sin\frac A2\sin\frac B2\sin\frac{A+B}{2}>0.
   \]
5. The intermediate value theorem gives one root in \((0,1)\), and strict increase makes it unique.
6. Formula `(II.2.9)` has positive denominator and nonnegative numerators. Equation `(II.2.8)` gives \(\alpha+\beta=1\).

**Complete proof architecture, polynomial identity and branch.**

1. Put \(z=\overline\lambda^{-1}=\rho^{-1}e^{2\pi ix}\).
2. Anchor the \(d\)-th-root sheet at \(r/s\) by
   \[
   \omega=e^{-2\pi ir/d},
   \qquad
   \omega z^{s/d}=\rho^{-s/d}\exp\left(\frac{2\pi i(sx-r)}d\right).
   \]
3. Because \(x\) lies strictly between the two endpoint fractions, \(qx-p\) and \(sx-r\) have opposite signs. With one consistent sign,
   \[
   z^q=\rho^{-q}e^{\pm iA},
   \qquad
   \omega z^{s/d}=\rho^{-s/d}e^{\mp iB}.
   \]
4. Formula `(II.2.9)` gives
   \[
   \beta\rho^{-q}=\frac{\sin B}{\sin(A+B)},
   \qquad
   \alpha\rho^{-s/d}=\frac{\sin A}{\sin(A+B)}.
   \]
5. Resolve the two vectors into real and imaginary parts. The imaginary parts cancel, while the real parts add by the sine addition formula. Thus
   \[
   1=\beta z^q+\alpha\omega z^{s/d}. \tag{II.2.10}
   \]
6. Move the first term, raise to the \(d\)-th power, and use \(\omega^d=e^{-2\pi ir}=1\):
   \[
   (1-\beta\overline\lambda^{-q})^d
   =\alpha^d\overline\lambda^{-s}.
   \]
7. Multiply by \(\overline\lambda^{dq}\), then conjugate, obtaining `(II.2.4)`.
8. Every displayed branch quantity is continuous in \(x\) on the open cell because the explicit exponential never requires a branch jump.

**Deterministic figure.** The rooted chord identity as a vector triangle: the two colored vectors have arguments \(+A\) and \(-B\), their vertical components cancel, and their sum is the unit vector 1. A second mini-plot shows the strictly increasing residual \(G(\rho)-\sin(A+B)\) crossing zero once.

**Worked example.** Use order \(n=5\), cell \([1/3,2/5]\), and ray \(x=3/8\). Then \(q=3\), \(s=5\), \(d=1\), and

\[
A=B=\frac\pi4,
\qquad
\frac{\rho^5+\rho^3}{\sqrt2}=1.
\]

Do not quote a decimal without computing and testing its residual in the implementation. This example is intentionally smaller than the complete order-seven laboratory of Topic XIV.

**Provenance.** Category: **Strengthened**. Exact antecedent: Ito (1997) gives the Farey-indexed polynomial family. The manuscript strengthens the usable formulation by proving one unique point on each open ray, specifying the fractional-power sheet, and deriving the continuous rooted chord identity without assuming an algebraic root branch.

### Proposition II.2.4 - Endpoint limits, including the order-three exception

**Exact statement.** The radius is continuous on every open cell. For \(n\geq4\), it extends to both endpoints with radius 1. For \(n=3\), the same is true except at the terminal cell \([1/3,1/2]\), where

\[
\lim_{x\downarrow1/3}\rho_{1/3,1/2}^{(3)}(x)=1,
\qquad
\lim_{x\uparrow1/2}\rho_{1/3,1/2}^{(3)}(x)=\frac12. \tag{II.2.11}
\]

**Intuition.** At an ordinary cell endpoint, one of the two sine terms disappears and the other forces \(\rho=1\). Only when the surviving sine also vanishes is a finer first-order calculation needed; that simultaneous degeneracy occurs exactly at order three near \(-1\).

**Complete proof architecture, open-cell continuity.**

Offer two versions. The main proof uses a sequence: if \(x_k\to x\), compactness gives subsequential limits of \(\rho(x_k)\) in \([0,1]\); continuity of the scalar equation makes every limit solve the unique equation at \(x\), so all limits equal \(\rho(x)\). An expandable calculus note may mention the implicit-function theorem and verify that the \(\rho\)-derivative is positive.

**Complete proof architecture, ordinary endpoints.**

1. Let \(x_k\) approach an endpoint and take a subsequence with \(\rho(x_k)\to r\in[0,1]\).
2. At \(p/q\), \(A\to0\) and determinant one gives \(B_0=2\pi/(dq)\).
3. Unless \(B_0=\pi\), the limiting equation is \(r^q\sin B_0=\sin B_0\), so \(r=1\).
4. At \(r/s\), \(B\to0\) and \(A_0=2\pi/s\in(0,\pi)\). The limit equation \(r^{s/d}\sin A_0=\sin A_0\) again gives \(r=1\).
5. Because every convergent subsequence has the same limit, the full endpoint limit is 1.

**Why there is exactly one exception.** \(B_0=\pi\) means \(dq=2\). With \(n\geq3\), \(q\leq s\), and an upper-half-plane Farey cell, this forces \(n=3\), \(q=2\), \(d=1\), and the terminal pair \(1/3,1/2\). Spell out this short arithmetic rather than calling it obvious.

**Complete exceptional calculation.** Put \(x=1/2-\varepsilon\). Then

\[
A=4\pi\varepsilon,
\quad
B=\pi-6\pi\varepsilon,
\quad
A+B=\pi-2\pi\varepsilon.
\]

The scalar equation becomes

\[
\rho^3\sin(4\pi\varepsilon)
+\rho^2\sin(6\pi\varepsilon)
=\sin(2\pi\varepsilon).
\]

Divide by \(2\pi\varepsilon\), use \(\sin u/u\to1\), and obtain for every subsequential limit

\[
2r^3+3r^2=1,
\qquad
(2r-1)(r+1)^2=0.
\]

The unique root in \([0,1]\) is \(r=1/2\). Also compute \(\alpha\to1/4\), showing that the nonreal arc and the real segment meet at the same algebraic parameter.

**Deterministic figure.** A zoom around the negative real axis for \(n=3\), with the nonreal radial graph approaching \(-1/2\) and the added real segment continuing to \(-1\). Label the limit, not the curve shape, as exact.

**Provenance.** Category: **Strengthened**. Exact antecedents: Ito (1997) for the carrier family and the classical order-three boundary; the manuscript supplies a branch-independent continuity proof and isolates the terminal limit \(1/2\) directly from the scalar equation.

### Definition II.2.5 - Farey-Ito carrier

Define the open radial graph

\[
\Gamma_{f,g}^{(n),\circ}
=\{\rho_{f,g}^{(n)}(x)e^{2\pi ix}:f<x<g\}. \tag{II.2.12}
\]

For an ordinary cell, take its closure. For the exceptional cell, define

\[
\Gamma_{1/3,1/2}^{(3)}
=\overline{\Gamma_{1/3,1/2}^{(3),\circ}}
\cup[-1,-1/2]. \tag{II.2.13}
\]

Verify the real segment algebra on the page. For \(\lambda\in[-1,-1/2]\), set \(\alpha=-\lambda(\lambda+1)\in[0,1/4]\); then

\[
\lambda^3-(1-\alpha)\lambda-\alpha
=(\lambda-1)(\lambda^2+\lambda+\alpha)=0.
\]

Definitions receive no novelty badge. Source relation: the polynomial family is Ito's; the radial-graph packaging prevents an unproved choice of root branch.

### Algorithm II.2.6 - Boundary extraction

Preserve the four manuscript steps, but add an explicit output status after each:

1. Generate \(F_n^+\): exact arithmetic.
2. Label endpoints, compute \(d,e\), record the reduced carrier: exact arithmetic/algebra.
3. Compute \(A,B\) and solve the monotone scalar equation: numerical unless a closed form happens to exist; bisection has a guaranteed bracket \([0,1]\).
4. Recover \(\alpha,\beta\): candidate verified to satisfy the polynomial; not yet proved attainable or outermost.

Add pseudocode that uses rational pairs for Farey data and a tolerance plus residual report for numerical \(\rho\). Do not use floating-point comparisons to decide Farey adjacency.

Algorithms receive no novelty badge.

## Suggested page rhythm

1. Farey number-line plate and `candidate only` notice.
2. Lemma II.2.1 and the lattice plate.
3. Endpoint labeling, \(d,e\), and Definition II.2.2.
4. Derivation of \(A,B\) and their range.
5. Proposition II.2.3 with the rooted chord and residual plots.
6. A complete hand calculation for \(n=5,x=3/8\).
7. Proposition II.2.4 and the exceptional \(n=3\) plate.
8. Definition II.2.5 and Algorithm II.2.6.
9. `What is proved / what is not yet proved`: constructed unique candidates and their endpoints; attainment, upper bound, nesting, and boundary identification remain later.

The formal proofs are closed by default. Definitions, the geometric idea, the worked calculation, and the exact equation remain visible.

## Deterministic figure specification

- `IX.1 Farey cells at order five`: exact SVG number line generated from integer pairs.
- `IX.2 Determinant-one lattice cell`: exact SVG lattice vectors and fundamental parallelogram.
- `IX.3 The rooted chord`: exact trigonometric vector diagram driven by symbolic \(A,B\).
- `IX.4 One monotone crossing`: Canvas or SVG plot from the exact scalar residual, with axes and endpoint signs.
- `IX.5 The order-three terminal exception`: exact endpoints and limiting point; any interpolated curve is labeled schematic or generated from verified numerical roots.

## Preliminary adversarial audit A - branch and orientation attack

Attack: denominator labeling can reverse left-right order, fractional powers can hide a branch jump, and raising a rooted identity can lose the intended root.

Fixes incorporated:

- Two explicit cells show that \(p/q\) can be either the left or right endpoint.
- \(A,B\) use absolute values and the proof states that \(qx-p\) and \(sx-r\) have opposite signs.
- The fractional-power sheet is defined by an explicit exponential anchored at \(r/s\), not by generic \(z^{s/d}\) notation alone.
- The proof first establishes the rooted vector identity and only then raises it; it claims that the constructed point satisfies the polynomial, not that every polynomial root lies on the selected branch.
- Signed \(e=s-dq\) is retained and the two reduced polynomial cases are both displayed.

Residual implementation check: sample one cell in each denominator orientation and numerically verify `(II.2.10)` before rendering the figure.

## Preliminary adversarial audit B - candidate/boundary and endpoint attack

Attack: a visually polished carrier can be mistaken for the already proved boundary; continuity can be asserted without checking the order-three degeneracy.

Fixes incorporated:

- `Candidate only` is visible at the opening and closing.
- The algorithm labels the output a scalar candidate until Topics XI-XIII add the missing implications.
- Open-cell continuity has a complete sequential proof available without invoking an undefined theorem.
- Both ordinary endpoint limits are computed separately.
- The exact condition \(dq=2\) is traced to the unique terminal cell, and the \(1/2\) limit is derived rather than drawn.
- The added segment \([-1,-1/2]\) is checked in the same algebraic family.

Residual implementation check: automated tests should verify endpoint radii for every order \(3\leq n\leq20\), with a dedicated assertion for the exceptional terminal limit.

## Source ledger

- G. H. Hardy and E. M. Wright, *An Introduction to the Theory of Numbers*, 6th ed., Oxford University Press (2008), Chapter 3, Farey series.
- H. Ito, "A new statement about the theorem determining the region of eigenvalues of stochastic matrices," *Linear Algebra and its Applications* 267 (1997), 241-246. DOI: 10.1016/S0024-3795(97)80052-3.
- F. I. Karpelevič, "On the characteristic roots of matrices with nonnegative elements," *Izv. Akad. Nauk SSSR Ser. Mat.* 15(4) (1951), 361-383.
- C. R. Johnson and P. Paparella, "A matricial view of the Karpelevič theorem," *Linear Algebra and its Applications* 520 (2017), 1-15.
- S. Kirkland, T. Laffey, and H. Šmigoc, "The Karpelevič region revisited," *Journal of Mathematical Analysis and Applications* 490(2) (2020), 124332.
- S. Kirkland and H. Šmigoc, "Stochastic matrices realising the boundary of the Karpelevič region," *Linear Algebra and its Applications* 635 (2022), 116-138, especially Theorem 2.1 for Ito's formulation. DOI: 10.1016/j.laa.2021.11.016.
