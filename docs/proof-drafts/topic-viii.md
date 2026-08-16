# Topic VIII authoring blueprint - Returning to stochastic spectra

Status: local-only authoring blueprint. Do not route, export, deploy, or link from the public site.

Canonical source: Part II, Section II.4, "Invariant polygons and elementary structure," PDF pages 71-73. This topic deliberately contains only Section II.4. It does not import the Part II introduction, the candidate-carrier construction of Section II.2, or the Part I monodromy wrapper of Section II.5.

Website counter: `Topic VIII of XIV`

Suggested visible count: `1 numbered definition - 6 results`

Suggested title: `Returning to stochastic spectra`

Guiding question: `How does a stochastic eigenvalue on a genuinely new radial shell become a critical planar contraction?`

## Educational contract

The page begins again from a row-stochastic matrix. A reader who has completed Topics I-VII knows the polygonal machinery, but should not be expected to remember how a matrix eigenpair becomes a planar polygon. Every bridge is therefore rebuilt in both directions.

By the end, the reader must be able to explain all four arrows

\[
\text{stochastic eigenpair}
\Longleftrightarrow
\text{invariant polygon}
\Longrightarrow
\text{radial region}
\Longrightarrow
\text{new-shell }N\text{-criticality}.
\]

The prose must not yet mention the Jensen inequality, equality profiles, sparse realizing stochastic matrices, or the final boundary theorem. Those belong to later topics.

## Exact manuscript inventory

Keep the manuscript numbering even though this is Topic VIII on the website.

1. **Proposition II.4.1 - Compactness, conjugation, and disk bound.** PDF page 71. Label: `karp:prop:compact`.
2. **Theorem II.4.2 - Invariant-polygon criterion.** PDF pages 71-72. Label: `karp:thm:polygon-criterion`. Displayed inclusion: `(II.4.1)`, label `karp:eq:invariant-polygon`.
3. **Corollary II.4.3 - Radial filling.** PDF page 72. Label: `karp:cor:radial-filling`.
4. **Proposition II.4.4 - Unit-circle points.** PDF page 72. Label: `karp:prop:unit-circle`.
5. **Lemma II.4.5 - Interior origin for a nonreal contraction.** PDF page 72. Label: `karp:lem:origin-interior`.
6. **Definition II.4.6 - Polygonal complexity and radial criticality.** PDF pages 72-73. Label: `karp:def:polygonal-criticality`.
7. **Proposition II.4.7 - New-shell extrema are polygonally critical.** PDF page 73. Label: `karp:prop:new-shell-critical`. It uses the unnumbered radial function and displayed new-shell condition `(II.4.3)`, labels `karp:eq:Rn` and `karp:eq:new-shell`.

There are also two indispensable unnumbered definitions that must be displayed before Proposition II.4.7:

- the radial function \(R_n(\theta)\);
- a new-shell radial extremum.

## Closed dependency ledger

### Imported from earlier topics

- From Topic I: a compact convex polygon, nondegeneracy, extreme points, polygonal complexity, elliptic contraction, and radial criticality. Definition II.4.6 is nevertheless restated in full because this page must work as the re-entry point from matrices.
- From Topic I, Lemma 2.5: the interior-origin result. Part II repeats it as Lemma II.4.5, so the statement and proof are both shown again. The repeated proof must include the positive factor \(\rho^k>0\), which makes the half-plane implication explicit.
- From Topic II, strict area monotonicity for planar convex bodies: if \(K\subsetneq L\) and both have interior, then \(\operatorname{area}(K)<\operatorname{area}(L)\). This is invoked in the unit-modulus argument and linked through a short expandable reminder.
- From Topic VII: what an open Farey cell is. It is used only to observe that its interior contains no root-of-unity direction of order at most \(n\).

### Defined and proved on this page

- \(\Theta_n\), row-stochastic matrices, spectrum, eigenpair, and the closed unit disk.
- The matrix-to-polygon and polygon-to-matrix constructions.
- Radial filling and the radial maximum \(R_n(\theta)\).
- The unit-circle classification.
- The new-shell condition and its conversion into \(N\)-criticality.

### Outputs to later topics

- Topic X may apply Part I monodromy only after Proposition II.4.7 supplies an \(N\)-critical elliptic contraction.
- Topic XIII may use compactness, radial filling, and the unit-circle classification to identify the final topological boundary.
- No claim on this page depends on Topic IX, X, XI, XII, or XIII.

## First-use glossary and expandable explanations

The main line should define each term in one sentence. The longer entry opens only when requested.

### Row-stochastic matrix

Main line: A real matrix \(A=(a_{ij})\) is row-stochastic when every entry is nonnegative and every row sums to one.

Expandable explanation: each row is a list of convex weights. Therefore \((Av)_i=\sum_j a_{ij}v_j\) is a weighted average of the coordinates \(v_j\).

### Spectrum and eigenpair

Main line: \(\operatorname{spec}(A)\) is the set of complex numbers \(\lambda\) for which some nonzero complex vector \(v\) satisfies \(Av=\lambda v\).

Expandable explanation: real matrices may have nonreal eigenvalues; they then occur in conjugate pairs because the characteristic polynomial has real coefficients.

### Compact set

Main line: in finite-dimensional Euclidean space, compact means closed and bounded; continuous images and coordinate projections of compact sets are compact.

Expandable reminder: include why the set of row-stochastic matrices is closed and bounded in \(\mathbb R^{n^2}\).

### Convex hull and barycentric coordinates

Main line: \(\operatorname{conv}\{z_1,\ldots,z_m\}\) consists exactly of the sums \(\sum_j a_jz_j\) with \(a_j\geq0\) and \(\sum_j a_j=1\).

Expandable example: show a point inside a triangle as three nonnegative weights. Explain that the weights need not be unique when redundant points are used, but existence is all the proof needs.

### Absorbing state and padding

Main line: an absorbing state contributes a row with a single diagonal 1; adding such states enlarges a stochastic matrix without changing an already present eigenpair after zero coordinates are appended.

Expandable formula:

\[
\widetilde A=\begin{pmatrix}A&0\\0&I_{n-m}\end{pmatrix},
\qquad
\widetilde v=(v,0),
\qquad
\widetilde A\widetilde v=\lambda\widetilde v.
\]

### Radial filling and radial function

Main line: radial filling means that membership of \(\lambda\) forces membership of the whole segment \(\{t\lambda:0\leq t\leq1\}\). The number \(R_n(\theta)\) is the farthest attainable radius on angle \(\theta\).

### New shell

Main line: a point lies on the new shell of order \(N\) when it belongs to \(\Theta_N\) but not to \(\Theta_{N-1}\), and it is outermost on its ray.

Expandable explanation: `new` concerns the matrix order; `outermost` concerns radial position. Both are needed. The first forces exactly \(N\) vertices, while the second prevents any outward rescaling with \(N\) vertices.

### Elliptic real-linear map

Main line: for multiplication by a nonreal \(\lambda\), the associated real matrix has negative discriminant \((\operatorname{tr}T)^2-4\det T\), so it is elliptic.

## Page opening

Open with the concrete fact hidden inside a stochastic eigenvector:

> Each coordinate \(v_i\) is a point of the complex plane. Because the \(i\)-th row of a stochastic matrix is a list of convex weights, the equation \(Av=\lambda v\) says that \(\lambda v_i\) lies in the convex hull of all coordinates. One matrix eigenpair therefore draws an invariant polygon.

Follow this with a deterministic three-state plate. Use the cyclic permutation matrix

\[
C_3=\begin{pmatrix}0&1&0\\0&0&1\\1&0&0\end{pmatrix},
\qquad
v=(1,\omega,\omega^2),
\qquad
\omega=e^{2\pi i/3}.
\]

Draw the three coordinates, their convex hull, and the rotated copy \(\omega P=P\). Label the rows of \(C_3\) as deterministic convex combinations. This example previews both directions of Theorem II.4.2 without pretending that every invariant polygon is regular.

## Result-by-result authoring plan

### Proposition II.4.1 - Compactness, conjugation, and disk bound

**Exact statement.** For every \(n\), \(\Theta_n\) is compact, invariant under complex conjugation, and contained in the closed unit disk.

**Intuition.** There are three separate facts. Stochastic averaging cannot increase the largest coordinate magnitude, real coefficients reflect nonreal roots, and compactness says attainable eigenvalues cannot disappear in a convergent limit.

**Complete proof architecture.**

1. Define \(\mathcal S_n\) by the finitely many inequalities \(a_{ij}\geq0\) and equations \(\sum_j a_{ij}=1\). Every entry lies in \([0,1]\), so \(\mathcal S_n\) is closed and bounded, hence compact.
2. If \(Av=\lambda v\), choose \(i\) with \(|v_i|=\|v\|_\infty>0\). Then
   \[
   |\lambda|\|v\|_\infty=|(Av)_i|
   \leq\sum_j a_{ij}|v_j|
   \leq\sum_j a_{ij}\|v\|_\infty
   =\|v\|_\infty.
   \]
   Divide by the positive norm to obtain \(|\lambda|\leq1\).
3. Define the eigenpair set
   \[
   \mathcal E_n=\{(A,\lambda)\in\mathcal S_n\times\overline{\mathbb D}:\det(\lambda I-A)=0\}.
   \]
   The determinant is continuous, so this zero set is closed in a compact product and is compact.
4. Project \(\mathcal E_n\) onto its \(\lambda\)-coordinate. A continuous image of a compact set is compact, and this image is exactly \(\Theta_n\).
5. Since \(A\) is real, its characteristic polynomial has real coefficients. Thus \(p_A(\lambda)=0\) implies \(p_A(\overline\lambda)=0\).

**Expandable proof architecture.** Explain why choosing the largest coordinate is the matrix version of the statement that an average stays inside the largest disk.

**Provenance.** Category: **Classical result**. Exact sources: Horn and Johnson, *Matrix Analysis*, 2nd ed. (Cambridge University Press, 2013), Chapter 8, for stochastic/nonnegative spectral bounds; Ito (1997), Theorem statement, for the classical disk and conjugation properties of \(\Theta_n\).

### Theorem II.4.2 - Invariant-polygon criterion

**Exact statement.** Let \(n\geq2\). For \(\lambda\in\mathbb C\), the following are equivalent:

1. \(\lambda\in\Theta_n\).
2. There is a non-singleton convex polygon \(P\subset\mathbb C\) with at most \(n\) vertices such that
   \[
   \lambda P\subseteq P. \tag{II.4.1}
   \]

**Intuition.** The rows of a stochastic matrix are barycentric-coordinate lists. Conversely, barycentric coordinates of the images of polygon vertices are exactly the rows of a stochastic matrix.

**Complete proof architecture, matrix to polygon.**

1. Choose a nonzero eigenvector \(v=(v_1,\ldots,v_n)\in\mathbb C^n\) with \(Av=\lambda v\).
2. Set \(P=\operatorname{conv}\{v_1,\ldots,v_n\}\). It has at most \(n\) extreme points.
3. For each coordinate,
   \[
   \lambda v_i=(Av)_i=\sum_j a_{ij}v_j\in P,
   \]
   because row \(i\) supplies nonnegative weights summing to one.
4. A linear map carries a convex hull to the convex hull of the images. Hence \(\lambda P=\operatorname{conv}\{\lambda v_i\}\subseteq P\).
5. If \(P\) is a singleton, all \(v_i=c\). Since \(v\neq0\), \(c\neq0\), and \(Av=v\) for a constant vector, so \(\lambda=1\). Replace the singleton by any non-singleton segment, which is fixed by multiplication by 1.

**Complete proof architecture, polygon to matrix.**

1. List the distinct vertices as \(x_1,\ldots,x_m\), with \(m\leq n\).
2. Because \(\lambda x_i\in P\), choose barycentric coordinates
   \[
   \lambda x_i=\sum_{j=1}^m a_{ij}x_j,
   \qquad a_{ij}\geq0,
   \qquad \sum_j a_{ij}=1.
   \]
3. The matrix \(A=(a_{ij})\) is row-stochastic. With \(x=(x_1,\ldots,x_m)^T\), the displayed equations say \(Ax=\lambda x\).
4. The vector \(x\) is nonzero because a non-singleton polygon cannot have every vertex equal to zero. Thus \(\lambda\) is genuinely an eigenvalue.
5. If \(m<n\), use the explicit block-diagonal absorbing-state padding above and append zeros to the eigenvector.

**Deterministic figure.** A two-panel SVG: left panel turns rows of \(A\) into points \(\lambda v_i\) inside \(P\); right panel turns the barycentric coefficients of each \(\lambda x_i\) into a matrix row. Use the same triangle and colors in both panels to make the equivalence visual.

**Provenance.** Category: **Previously known**. Exact sources: Dmitriev and Dynkin (1946), with the English translation in Swift (1972), for the invariant-polygon formulation; Johnson and Paparella (2017), Sections 2-3, for a modern matricial formulation and realization viewpoint.

### Corollary II.4.3 - Radial filling

**Exact statement.** If \(n\geq2\), \(\lambda\in\Theta_n\), and \(0\leq t\leq1\), then \(t\lambda\in\Theta_n\).

**Intuition.** Once the invariant polygon contains the origin, shrinking its rotated copy only moves that copy closer to the origin and keeps it inside the same polygon.

**Complete proof architecture for \(|\lambda|<1\).**

1. Choose an invariant polygon \(P\).
2. For every \(x\in P\), invariance gives \(\lambda^kx\in P\), and \(\lambda^kx\to0\).
3. Polygons are closed, so \(0\in P\).
4. Convexity gives \(tP\subseteq P\) for \(0\leq t\leq1\).
5. Therefore \((t\lambda)P=t(\lambda P)\subseteq tP\subseteq P\). Apply Theorem II.4.2.

**Complete proof architecture for \(|\lambda|=1\).**

1. If \(\lambda=1\), use \([0,1]\).
2. Otherwise choose an invariant polygon with the least number of vertices.
3. If it has area, then \(\lambda P\subseteq P\) and \(\operatorname{area}(\lambda P)=|\lambda|^2\operatorname{area}(P)=\operatorname{area}(P)\). Strict area monotonicity forces \(\lambda P=P\).
4. Multiplication by \(\lambda\) permutes the finite vertex set. The orbit of any nonzero vertex closes after some \(k\leq n\), so \(\lambda^k=1\).
5. The regular orbit polygon \(Q=\operatorname{conv}\{1,\lambda,\ldots,\lambda^{k-1}\}\) contains zero and satisfies \(\lambda Q=Q\), hence \((t\lambda)Q=tQ\subseteq Q\).
6. If the minimal polygon is a segment, its line is invariant under multiplication by \(\lambda\), so \(\lambda=-1\); use \([-1,1]\).

**Provenance.** Category: **Previously known**. Exact sources: Dmitriev and Dynkin (1946), translated in Swift (1972), for star-shaped/radial structure; Kirkland and Šmigoc (2022), Introduction, explicitly records that \(\Theta_n\) is star-shaped with respect to the origin.

### Proposition II.4.4 - Unit-circle points

**Exact statement.** If \(n\geq2\), \(\lambda\in\Theta_n\), and \(|\lambda|=1\), then \(\lambda\) is a root of unity of order at most \(n\). Conversely every such root belongs to \(\Theta_n\).

**Intuition.** A rotation of modulus one cannot fit a positive-area polygon strictly inside itself. It must carry the polygon onto itself and hence permute finitely many vertices.

**Complete proof architecture.**

1. Use a least-vertex invariant polygon.
2. In the positive-area case, area equality and inclusion imply \(\lambda P=P\).
3. Multiplication by \(\lambda\) permutes at most \(n\) vertices. A nonzero vertex returns after \(k\leq n\) steps, giving \(\lambda^k=1\).
4. In the segment case, the supporting real line must be invariant; a complex unit multiplier preserving a real line is \(1\) or \(-1\).
5. Conversely, if \(\lambda^k=1\) with \(k\leq n\), the \(k\)-cycle permutation matrix has \(\lambda\) as an eigenvalue. Pad with absorbing states if \(k<n\).

**Deterministic figure.** A polygon and a same-area rotated copy. A slider-free sequence of three frames shows why strict inclusion would create an open cap and increase area, while equality permutes vertices.

**Provenance.** Category: **Classical result**. Exact sources: Karpelevič (1951), theorem on the unit-circle part of the region; Ito (1997), boundary theorem; Horn and Johnson (2013), Chapter 8, for the equality case in the spectral bound for stochastic matrices.

### Lemma II.4.5 - Interior origin for a nonreal contraction

**Exact statement.** Let \(P\) be a non-singleton compact convex polygon and \(\lambda=\rho e^{i\theta}\), where \(0<\rho<1\) and \(\theta\not\equiv0,\pi\pmod{2\pi}\). If \(\lambda P\subseteq P\), then \(P\) has nonempty interior and \(0\in\operatorname{int}P\).

**Intuition.** Repeated multiplication spirals every point toward zero. If zero were only on the boundary, all rotated iterates would have to remain in one closed half-plane, which a genuinely nonreal rotation cannot do.

**Complete proof architecture.**

1. For any \(z\in P\), \(\lambda^kz\in P\) and \(\lambda^kz\to0\). Closedness gives \(0\in P\).
2. If \(P\) were a segment, its affine line must pass through zero: otherwise the shrinking iterates lie on distinct parallel/rotated lines while converging to zero and cannot all lie in the original segment. More directly, once \(0\in P\), the affine hull is a real line through zero, and \(\lambda P\subset P\) forces the rotation \(e^{i\theta}\) to preserve that line. This is possible only for angles 0 or \(\pi\), excluded here.
3. Thus \(P\) has nonempty planar interior.
4. Assume for contradiction that \(0\in\partial P\). Choose a nonzero real-linear functional \(\ell\) supporting \(P\) at zero, with \(\ell\geq0\) on \(P\), and choose \(z\in P\) with \(\ell(z)>0\).
5. Invariance gives \(\lambda^kz=\rho^ke^{ik\theta}z\in P\), hence \(\rho^k\ell(e^{ik\theta}z)\geq0\). Since \(\rho^k>0\),
   \[
   \ell(e^{ik\theta}z)\geq0 \qquad(k\geq0).
   \]
6. If the rotation has finite order \(m\geq3\), sum the orbit identity \(\sum_{k=0}^{m-1}e^{ik\theta}z=0\). The nonnegative numbers \(\ell(e^{ik\theta}z)\) sum to zero and must all vanish, contradicting \(\ell(z)>0\).
7. If the rotation has infinite order, its powers are dense on the unit circle. Some iterate enters the open half-plane \(\ell<0\), again a contradiction.

**Expandable background.** Give a one-paragraph proof of the finite geometric-series identity and a visual explanation of dense irrational rotation. Link back to Topic I for the fuller rotation discussion.

**Provenance.** Category: **Classical result**. Exact internal source: Topic I, Lemma 2.5, where this result is proved before angular boundary order is introduced. External background: standard supporting-hyperplane theory in Schneider, *Convex Bodies*, expanded ed. (2014), Chapter 1.

### Definition II.4.6 - Polygonal complexity and radial criticality

Display the manuscript definition exactly:

\[
\nu_{\mathrm{poly}}(A)
=\min\{ |\operatorname{Ext}P|:
P\text{ is a nondegenerate compact convex polygon and }AP\subseteq P\},
\]

with value \(\infty\) when there is no witness. An elliptic contraction \(T\) is \(N\)-critical when

\[
\nu_{\mathrm{poly}}(T)=N,
\qquad
\nu_{\mathrm{poly}}(tT)>N\quad(t>1).
\]

Immediately restate the directional meaning: this is the **last outward radial scale** at which \(N\) vertices suffice.

Definitions receive no novelty badge.

### Unnumbered radial definitions

For \(0<\theta<\pi\), show

\[
R_n(\theta)=\max\{\rho\geq0:\rho e^{i\theta}\in\Theta_n\}. \tag{II.4.2}
\]

Explain existence in three explicit steps: \(0\in\Theta_n\) by radial filling from 1, the admissible radii form a closed subset of \([0,1]\) by compactness, and it is nonempty; hence the maximum exists.

Then define, for \(N\geq4\), a new-shell radial extremum by

\[
\lambda=R_N(\theta)e^{i\theta}
\in\Theta_N\setminus\Theta_{N-1},
\qquad 0<|\lambda|<1. \tag{II.4.3}
\]

### Proposition II.4.7 - New-shell extrema are polygonally critical

**Exact statement.** If `(II.4.3)` holds and \(T_\lambda\) is multiplication by \(\lambda\), regarded as a real-linear map, then \(T_\lambda\) is an \(N\)-critical elliptic contraction.

**Intuition.** The two clauses in `new shell` become the two clauses in `criticality`: not belonging to order \(N-1\) says fewer than \(N\) vertices cannot work; being outermost on the ray says \(N\) vertices cannot survive any outward enlargement.

**Complete proof architecture.**

1. In the real basis \((1,i)\), write
   \[
   [T_\lambda]=\begin{pmatrix}
   \operatorname{Re}\lambda&-\operatorname{Im}\lambda\\
   \operatorname{Im}\lambda&\operatorname{Re}\lambda
   \end{pmatrix}.
   \]
2. Since \(0<\theta<\pi\), \(\operatorname{Im}\lambda\neq0\), and
   \[
   (\operatorname{tr}T_\lambda)^2-4\det T_\lambda
   =-4(\operatorname{Im}\lambda)^2<0.
   \]
   Since \(|\lambda|\in(0,1)\), the spectral radius is in \((0,1)\). Thus \(T_\lambda\) is an elliptic contraction.
3. Membership \(\lambda\in\Theta_N\) and Theorem II.4.2 give an invariant polygon with at most \(N\) vertices. Lemma II.4.5 makes every such nonreal-contraction witness nondegenerate. Therefore \(\nu_{\mathrm{poly}}(T_\lambda)\leq N\).
4. If the complexity were at most \(N-1\), Theorem II.4.2 would put \(\lambda\) in \(\Theta_{N-1}\), contradicting `(II.4.3)`. Hence \(\nu_{\mathrm{poly}}(T_\lambda)=N\).
5. Because \(|\lambda|=R_N(\theta)\), every \(t>1\) gives a point \(t\lambda\) farther out on the same ray, so \(t\lambda\notin\Theta_N\).
6. If \(\nu_{\mathrm{poly}}(tT_\lambda)\leq N\), an invariant polygon and Theorem II.4.2 would imply \(t\lambda\in\Theta_N\), contradiction. Thus \(\nu_{\mathrm{poly}}(tT_\lambda)>N\) for all \(t>1\).

**Deterministic figure.** Draw two nested radial sets \(\Theta_{N-1}\subseteq\Theta_N\), a ray, its new outer endpoint, and three labels aligned with the proof: `at most N`, `not at most N-1`, and `no outward N-vertex witness`. Do not draw the actual Farey boundary here; the figure is logical, not a claimed numerical plot.

**Provenance.** Category: **New result**. This is the manuscript-specific bridge that turns a new-shell stochastic extremum into the exact intrinsic criticality hypothesis used by Part I. Closest antecedents: Dmitriev and Dynkin (1946) for invariant polygons and Karpelevič (1951) for radial extremality.

## Suggested page rhythm

1. Matrix eigenpair plate and the four-arrow map.
2. Proposition II.4.1.
3. Theorem II.4.2 with the two-panel equivalence figure.
4. Corollary II.4.3 and Proposition II.4.4 as the geometry of the whole region.
5. Lemma II.4.5 as the local planar fact needed for nonreal interior points.
6. Definition II.4.6 and the two radial definitions.
7. Proposition II.4.7 as the chapter climax.
8. A compact `What Topic VIII has earned` panel listing only the three outputs in the dependency ledger.

The default proof panels remain closed, but the statement, one-paragraph intuition, definitions, and proof architecture are visible. The full proof in each panel is the manuscript proof expanded with the steps above; there is no separate duplicate `original proof` panel.

## Deterministic figure specification

- `VIII.1 Eigenvectors draw polygons`: SVG, exact \(C_3\) example.
- `VIII.2 The criterion in both directions`: SVG, one triangle and its barycentric weights.
- `VIII.3 Radial filling`: SVG, one invariant polygon containing zero and three nested copies \(t\lambda P\).
- `VIII.4 New shell becomes criticality`: SVG, schematic nested radial sets and a single ray.

Every SVG includes a prose caption, a visible legend, and an accessible long description. No picture should suggest that a schematic curve is the exact boundary of \(\Theta_n\).

## Preliminary adversarial audit A - logical closure

Attack: the first version could have silently used compactness of \(\Theta_n\), existence of the radial maximum, nondegeneracy of the invariant polygon, and strict area equality without naming their justifications.

Fixes incorporated:

- Proposition II.4.1 now proves compactness via the closed eigenpair set rather than continuity of unordered roots.
- The radial maximum has an explicit nonempty/closed/bounded argument.
- Lemma II.4.5 is placed before the criticality bridge and explicitly supplies nondegeneracy.
- Radial filling links area equality to the already proved strict area monotonicity result from Topic II.
- The padding matrix and padded eigenvector are written explicitly.

Residual check for implementation: all cross-links must point backward only, to Topics I, II, and VII.

## Preliminary adversarial audit B - novice readability

Attack: `vertex budget`, `new shell`, `radial maximum`, `absorbing state`, and `elliptic` can sound intuitive while remaining undefined; the two directions of the polygon criterion can blur together.

Fixes incorporated:

- `Vertex budget` is avoided in the main prose; use `at most N vertices`.
- New-shell and radial terminology receive first-use definitions before they appear in a result.
- Matrix-to-polygon and polygon-to-matrix are separate proof subsections and separate halves of one figure.
- The role of each new-shell clause is matched explicitly to one clause of criticality.
- The half-plane step in Lemma II.4.5 includes the omitted positive scalar \(\rho^k\).

Residual check for implementation: ask a reader with one linear algebra course to paraphrase the four-arrow map without opening any proof panel. If they cannot, simplify the visible introduction before adding more detail.

## Source ledger

- N. A. Dmitriev and E. B. Dynkin, "On characteristic roots of stochastic matrices," *Izv. Akad. Nauk SSSR Ser. Mat.* 10(2) (1946), 167-184.
- J. Swift, *The Location of Characteristic Roots of Stochastic Matrices*, M.Sc. thesis, McGill University (1972), including an English translation of Dmitriev-Dynkin.
- F. I. Karpelevič, "On the characteristic roots of matrices with nonnegative elements," *Izv. Akad. Nauk SSSR Ser. Mat.* 15(4) (1951), 361-383.
- H. Ito, "A new statement about the theorem determining the region of eigenvalues of stochastic matrices," *Linear Algebra and its Applications* 267 (1997), 241-246. DOI: 10.1016/S0024-3795(97)80052-3.
- C. R. Johnson and P. Paparella, "A matricial view of the Karpelevič theorem," *Linear Algebra and its Applications* 520 (2017), 1-15.
- S. Kirkland and H. Šmigoc, "Stochastic matrices realising the boundary of the Karpelevič region," *Linear Algebra and its Applications* 635 (2022), 116-138. DOI: 10.1016/j.laa.2021.11.016.
- R. A. Horn and C. R. Johnson, *Matrix Analysis*, 2nd ed., Cambridge University Press (2013), Chapter 8.
- R. Schneider, *Convex Bodies: The Brunn-Minkowski Theory*, expanded ed., Cambridge University Press (2014), Chapter 1.
