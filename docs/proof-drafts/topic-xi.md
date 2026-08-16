# Topic XI authoring blueprint - Constructing stochastic matrices and proving attainment

Status: local-only authoring blueprint. Do not publish or add to public navigation.

Canonical source: Part II, Section II.7, PDF pages 77-79, followed pedagogically by the deferred Corollary II.6.2 from PDF pages 76-77. The labels and manuscript numbering remain unchanged even though Corollary II.6.2 is presented last on the website page.

Website counter: `Topic XI of XIV`

Suggested visible count: `2 lemmas - 1 theorem - 2 corollaries`

Suggested title: `Building the matrices that attain the candidate`

Guiding question: `How can the Ito carrier be turned into an explicit row-stochastic matrix, and why does that force equality in the upper comparison?`

## Educational contract

Topic X ended with an asymmetry:

\[
\rho_{\text{new shell}}
\leq
\rho_{\text{candidate}}.
\]

Topic XI supplies the missing reverse inequality by constructing a matrix. The construction is independent of the critical-polygon upper-bound argument. This separation is mathematically important and should be visible throughout the page:

- the graph calculation proves that every scalar candidate is attainable;
- only after that independent result is complete do we return to a new-shell extremum and force equality.

A non-specialist reader should be able to trace every term of the characteristic polynomial to either a family of local cycles or one global cycle.

## Exact manuscript inventory and pedagogical order

The website order differs from the printed numbering for one stated reason: avoid using realization before proving it.

1. Unnumbered tail-row convention, display `(II.7.1)`, PDF page 77, label `karp:eq:tail-row-adjacency`.
2. **Lemma II.7.1 - Cycle-cover coefficient rule.** PDF page 77. Label: `karp:lem:cycle-cover`.
3. **Lemma II.7.2 - Cycle collections in the sparse block graph.** PDF pages 77-78. Label: `karp:lem:sparse-cycle-collections`.
4. **Theorem II.7.3 - Sparse carrier realization.** PDF pages 78-79. Label: `karp:thm:sparse-realization`. Active order `(II.7.2)` and characteristic polynomials `(II.7.3)`-`(II.7.4)`.
5. **Corollary II.7.4 - Attainment of the scalar boundary.** PDF page 79. Label: `karp:cor:attainment`.
6. **Corollary II.6.2 - Outermost equality profile.** PDF pages 76-77. Label: `karp:cor:equal-profile`. It is shown last and explicitly marked `deferred from Topic X`.

## Closed dependency ledger

### Imported from previous topics

- Topic VIII: \(\Theta_n\), row-stochastic matrices, spectra, padding by absorbing states, radial maximum \(R_n(\theta)\), and new-shell extrema.
- Topic IX: Farey pairs, denominator labels \(q\leq s\), \(d=\lfloor n/q\rfloor\), the reduced Ito carrier `(II.2.5)`, the scalar radius, and the recovered parameters `(II.2.9)`.
- Topic X: Theorem II.5.1's selected monodromy data, Lemma II.5.2's reflection dictionary, and Theorem II.6.1's upper inequality with equality criterion.
- Elementary determinant expansion. It is re-explained as Lemma II.7.1 rather than assumed in graph language.

### Proved on this page

- The sign and degree contribution of every collection of vertex-disjoint directed cycles.
- The complete list of cycle collections in the tailored sparse block graph.
- A row-stochastic matrix of active order \(N_0=\max\{dq,s\}\leq n\) whose characteristic polynomial is the reduced carrier.
- Attainment of every scalar candidate.
- Equality between a new-shell radius and the scalar candidate, and equality of all monodromy parameters.

### Not used

- No Farey nesting from Topic XII.
- No induction or boundary-topology argument from Topic XIII.
- No prior stochastic realization theorem is used in the proof, although prior realization results are cited in provenance.

## First-use glossary and local explainers

### Directed graph and weighted edge

A directed edge \(u\to v\) can be followed only from \(u\) to \(v\). A weight \(w(u,v)\geq0\) is attached to that transition.

### Tail-row adjacency convention

The matrix entry is

\[
A_{uv}=w(u,v), \tag{II.7.1}
\]

so row \(u\) records all arrows leaving \(u\). A row is stochastic exactly when the outgoing weights at its vertex sum to one.

Expandable warning: some graph texts use the transpose convention. Every figure should draw `row = tail` in its legend so readers can reconstruct the matrix correctly.

### Deterministic path

A path segment is deterministic when each nonterminal vertex has one outgoing arrow of weight 1. Once the path is entered, the next steps are forced until a branching terminal is reached.

### Terminal, local return, and cross edge

Each block ends at a terminal vertex. It has two possible exits: a local return of weight \(\beta\) to its own block start, and a cross edge of weight \(\alpha=1-\beta\) toward the next block.

### Simple cycle

A directed simple cycle returns to its start without repeating any other vertex. A loop is a cycle of length one.

### Vertex-disjoint cycle collection

The cycles in the collection share no vertex. This is exactly what a permutation term in a determinant permits: one vertex cannot be sent along two different cycles.

### Cycle cover in this page

The phrase means a collection of pairwise vertex-disjoint directed cycles, not necessarily covering every vertex. Vertices outside the cycles contribute a diagonal factor \(t\) in \(\det(tI-A)\).

### Characteristic polynomial and spectrum

\(\det(tI-A)\) is the characteristic polynomial. Its complex roots, counted with algebraic multiplicity, are the eigenvalues of \(A\).

### Sparse matrix

Sparse means that most entries are zero. Here every nonterminal row has one nonzero entry and every terminal row has at most two.

### Subdividing an edge

Replacing \(u\to v\) by \(u\to w_1\to\cdots\to w_K\to v\) inserts \(K\) new vertices. It lengthens every cycle using that edge by \(K\) without creating a new choice of route.

## Page opening

Begin with the scalar equation on the left and a graph on the right:

\[
(t^q-\beta)^d-\alpha^dt^{dq-s}
\qquad\longleftrightarrow\qquad
\begin{matrix}
d\text{ local }q\text{-cycles}\cr
1\text{ global }s\text{-cycle}
\end{matrix}
\]

Then say:

> Instead of guessing a dense matrix and expanding a large determinant, we design a graph with exactly the cycles needed by the polynomial. The binomial term comes from independently choosing local cycles; the remaining monomial comes from the one global cycle.

Include a bordered reminder that this is the reverse inclusion and is logically independent of Topic X's upper bound.

## Result-by-result authoring plan

### Lemma II.7.1 - Cycle-cover coefficient rule

**Exact statement.** Let \(A\) be the weighted adjacency matrix of a finite directed graph on \(N\) vertices. In \(\det(tI-A)\), a collection of \(k\) pairwise vertex-disjoint directed cycles contributes

\[
(-1)^k t^{N-L}
\]

times the product of its edge weights, where \(L\) is the total number of vertices on the selected cycles. Every vertex not on a cycle contributes a factor \(t\).

**Intuition.** Every selected directed cycle contributes one minus sign, regardless of its length. Unused vertices simply stay fixed and contribute \(t\).

**Complete proof architecture.**

1. Start from the Leibniz formula
   \[
   \det(tI-A)=\sum_{\sigma\in S_N}\operatorname{sgn}(\sigma)
   \prod_{u=1}^N(t\delta_{u,\sigma(u)}-A_{u,\sigma(u)}).
   \]
2. A directed cycle \(u_1\to u_2\to\cdots\to u_\ell\to u_1\) corresponds to the permutation cycle \(u_i\mapsto u_{i+1}\).
3. Its permutation sign is \((-1)^{\ell-1}\).
4. Selecting the \(-A\) entry at all \(\ell\) cycle vertices contributes another \((-1)^\ell\).
5. Their product is \((-1)^{2\ell-1}=-1\), independent of \(\ell\), times the product of edge weights.
6. For a loop \(u\to u\), this says to select \(-A_{uu}\) from \(t-A_{uu}\), so the same sign rule includes \(\ell=1\).
7. Disjoint cycles correspond to disjoint cycles of one permutation and their contributions multiply. Thus \(k\) cycles give \((-1)^k\).
8. At each of the \(N-L\) unused vertices select the diagonal \(t\), giving \(t^{N-L}\).
9. Conversely, every nonzero expanded determinant term selects disjoint permutation cycles plus diagonal \(t\)'s, so the accounting is exhaustive.

**Expandable example.** Use a three-vertex graph with a loop and a disjoint 2-cycle. List the four allowed cycle collections and match them to the four polynomial terms.

**Provenance.** Category: **Classical result**. Exact sources: C. Coates, "Flow-graph solutions of linear algebraic equations," *IRE Transactions on Circuit Theory* CT-6 (1959), 170-187; Kirkland and Šmigoc (2022), Theorem 2.2, states the weighted cycle-cover coefficient formula used for reduced Ito realizations.

### Lemma II.7.2 - Cycle collections in the sparse block graph

**Exact statement.** In the block graph used below, every simple directed cycle is either a local \(q\)-cycle in one block or the unique global cycle using all \(d\) cross edges. Every local cycle shares its terminal with the global cycle. Hence a vertex-disjoint cycle collection is exactly either an arbitrary subset of the \(d\) local cycles or the singleton global cycle.

**Intuition.** Before a terminal there is no choice. At a terminal, choosing `local` traps and closes the cycle in that block; choosing `cross` forces the cycle to keep choosing cross edges until it has visited every block and returns.

**Complete proof architecture.**

1. A cycle using no cross edge remains in one block. Its deterministic path reaches the terminal, and its only within-block exit is the local return. The path back to the terminal is then forced, giving the entire local \(q\)-cycle.
2. Suppose a simple cycle uses a cross edge into a block. The deterministic suffix forces it to that block's terminal.
3. If it takes the local return, the deterministic block path reaches the already visited entry vertex before the original cycle closes. That repeats a vertex, contradicting simplicity.
4. Therefore it must take the cross edge at that terminal. The same reasoning repeats in every subsequent block.
5. Cross edges advance through the blocks cyclically, so the route is the unique global cycle using all \(d\) cross edges.
6. Subdivision vertices lie on one cross route and have one outgoing edge; they lengthen this global cycle but create no alternative cycle.
7. The global cycle visits every terminal. The local cycle in each block also visits that terminal, so no local cycle is disjoint from the global cycle.
8. Different local cycles occupy different blocks and are mutually disjoint. Therefore any subset of them is allowed.

**Deterministic figure.** Draw three short blocks twice. In the first copy highlight one local return. In the second highlight the global cross route. A red collision marker at a terminal explains why the global cycle cannot coexist with any local cycle.

**Endpoint weights.** At \(\alpha=0\) or \(\beta=0\), retain the zero-weight arrows as formal edges for the combinatorial identity; every cycle using one contributes weight zero. Alternatively prove for \(0<\alpha<1\) and extend the polynomial identity to endpoints. State one of these conventions explicitly in the implementation.

**Provenance.** Category: **Previously known**. Exact antecedent: the reduced-Ito realization graphs and their cycle analysis in Johnson and Paparella (2017), and Kirkland and Šmigoc (2022), especially Sections 2-3 and Theorem 2.2. This lemma isolates the exact cycle list for the manuscript's uniform two-case construction.

### Theorem II.7.3 - Sparse carrier realization

**Exact statement.** Let \(p/q,r/s\) be a Farey pair of order \(n\), labeled by \(q\leq s\), and let \(d=\lfloor n/q\rfloor\). For every \(\alpha\in[0,1]\), \(\beta=1-\alpha\), there is a row-stochastic matrix of order

\[
N_0=\max\{dq,s\}\leq n \tag{II.7.2}
\]

whose spectrum contains every root of the reduced carrier `(II.2.5)`, and hence every nonzero root of the homogeneous Ito carrier `(II.2.4)`.

**Why the order bound is immediate.** \(dq\leq n\) by the definition of the floor, and \(s\leq n\) because \(r/s\in F_n\). Thus their maximum is at most \(n\).

**Common graph construction.**

1. Create \(d\) blocks
   \[
   B_j=\{v_{j,0},\ldots,v_{j,q-1}\}.
   \]
2. Add deterministic arrows \(v_{j,k}\to v_{j,k+1}\) of weight 1 for \(k<q-1\).
3. At terminal \(v_{j,q-1}\), add a local return to \(v_{j,0}\) of weight \(\beta\) and a cross edge toward block \(j+1\) of weight \(\alpha\), with block indices modulo \(d\).
4. Every terminal row sums to \(\alpha+\beta=1\); every other current row has one outgoing weight 1.

**Case 1: \(s\leq dq\).**

1. Farey adjacency gives \(q+s>n\geq dq\), hence \(s>(d-1)q\).
2. Set
   \[
   \ell_1=s-(d-1)q,
   \qquad
   \ell_2=\cdots=\ell_d=q.
   \]
   The inequalities give \(1\leq\ell_1\leq q\), and \(\sum_j\ell_j=s\).
3. Route the cross edge entering block \(j\) to \(v_{j,q-\ell_j}\). The global route visits exactly \(\ell_j\) vertices in block \(j\), so its length is \(s\) and its weight is \(\alpha^d\).
4. Every local cycle has length \(q\) and weight \(\beta\).
5. By Lemma II.7.2, local cycle collections are indexed by subsets \(J\subseteq\{1,\ldots,d\}\). Lemma II.7.1 gives
   \[
   \sum_J(-1)^{|J|}\beta^{|J|}t^{dq-q|J|}
   =(t^q-\beta)^d.
   \]
6. The singleton global cycle contributes \(-\alpha^dt^{dq-s}\).
7. Hence
   \[
   \det(tI-A)=(t^q-\beta)^d-\alpha^dt^{dq-s}. \tag{II.7.3}
   \]

**Case 2: \(s>dq\).**

1. Route every cross edge into the first vertex of the next block and put \(K=s-dq>0\).
2. Choose one cross edge \(u\to v\) and replace it by
   \[
   u\xrightarrow{\alpha}w_1\xrightarrow{1}\cdots
   \xrightarrow{1}w_K\xrightarrow{1}v.
   \]
3. The total number of vertices is \(dq+K=s\). The global cycle now has length \(s\) and weight \(\alpha^d\).
4. Local cycles remain \(d\) disjoint length-\(q\) cycles of weight \(\beta\). A local-cycle collection uses none of the \(K\) subdivision vertices, so each contributes the additional factor \(t^K\).
5. Therefore the local subsets contribute \(t^{s-dq}(t^q-\beta)^d\), while the global cycle contributes \(-\alpha^d\).
6. Hence
   \[
   \det(tI-A)=t^{s-dq}(t^q-\beta)^d-\alpha^d. \tag{II.7.4}
   \]

**Finish both cases.**

1. Check every row sum: deterministic and subdivision vertices have outgoing total 1; terminals have \(\alpha+\beta=1\). Entries are nonnegative.
2. Equations `(II.7.3)` and `(II.7.4)` are exactly the two sign cases in the reduced carrier `(II.2.5)`.
3. Thus every root of the reduced carrier is an eigenvalue of the constructed row-stochastic matrix.
4. If \(N_0<n\), pad by \(n-N_0\) absorbing states. The block-diagonal matrix remains row-stochastic and retains the carrier roots.
5. The homogeneous equation may contain extra zero roots introduced by cancellation; every nonzero homogeneous root is a reduced-carrier root, which is the precise claim.

**Worked graph A, \(s\leq dq\).** Use order \(n=6\), Farey pair \(1/3,2/5\). Then \(q=3,s=5,d=2\), and the six-state matrix is

\[
A=\begin{pmatrix}
0&1&0&0&0&0\\
0&0&1&0&0&0\\
\beta&0&0&\alpha&0&0\\
0&0&0&0&1&0\\
0&0&0&0&0&1\\
0&\alpha&0&\beta&0&0
\end{pmatrix}.
\]

Verify row sums and use the cycle plate to obtain

\[
\det(tI-A)=(t^3-\beta)^2-\alpha^2t.
\]

**Worked graph B, \(s>dq\).** Use order \(n=5\), Farey cell \([2/5,1/2]\), labeled by \(q=2,s=5,d=2\). Two length-2 blocks give \(dq=4\), and one subdivision vertex makes the global cycle length 5. The characteristic polynomial is

\[
t(t^2-\beta)^2-\alpha^2.
\]

Draw and verify this second case; it prevents readers from treating `(II.7.4)` as a cosmetic rearrangement of the first.

**Provenance.** Category: **Previously known**. Exact sources: Ito (1997) for the reduced carrier family; Johnson and Paparella (2017) construct stochastic matrices for the reduced Ito polynomials; Kirkland and Šmigoc (2022), Remark 2.2 and Sections 3-7, analyze and classify sparse stochastic realizations. The manuscript gives one uniform active-order construction and proves its characteristic polynomial directly without importing those realization theorems.

### Corollary II.7.4 - Attainment of the scalar boundary

**Exact statement.** For every open Farey ray \(x\),

\[
\rho_{f,g}^{(n)}(x)e^{2\pi ix}\in\Theta_n.
\]

**Complete proof architecture.**

1. Topic IX, Proposition II.2.3 supplies the candidate radius and parameters
   \[
   \alpha=\frac{\rho^{s/d}\sin A}{\sin(A+B)},
   \qquad
   \beta=\frac{\rho^q\sin B}{\sin(A+B)}.
   \]
2. They lie in \([0,1]\), sum to one, and make the candidate satisfy the Ito carrier.
3. Apply Theorem II.7.3 to these parameters. The candidate is a nonzero carrier root, so it is an eigenvalue of a row-stochastic matrix of order at most \(n\), padded to order \(n\) if necessary.
4. By the definition of \(\Theta_n\), the candidate belongs to \(\Theta_n\).

**What this proves.** It proves inner inclusion/attainment. It does not use the upper inequality and does not yet show the candidate is on the topological boundary.

**Provenance.** Category: **Previously known**. Exact sources: the boundary realization result is classical through Ito's formulation and the explicit matrices of Johnson and Paparella (2017); see also Kirkland and Šmigoc (2022).

### Corollary II.6.2 - Outermost equality profile (deferred from Topic X)

Place a visible note above the statement:

> This corollary appears earlier in the manuscript, but its proof uses Theorem II.7.3. It is placed here so the website's logical order has no forward dependency.

**Exact statement.** For a new-shell radial extremum in an open Farey cell, the parameters selected by Theorem II.5.1 satisfy

\[
\beta_1=\cdots=\beta_d=\beta,
\qquad
\alpha=1-\beta,
\]

and the original point lies on the Ito carrier `(II.2.4)`. Its modulus is the unique solution of the scalar equation `(II.2.8)`.

**Intuition.** Topic X put the actual extremum at or inside the scalar candidate. Topic XI has now built a stochastic matrix at the candidate, so radial maximality puts the candidate at or inside the actual extremum. Both inequalities must be equalities, and strict Jensen then forces all parameters to agree.

**Complete proof architecture.**

1. Let \(\mu,\vartheta,y,p/q,r/s,d,e\) and the heterogeneous parameters be supplied by Theorem II.5.1. Put
   \[
   B_\mu=\frac{2\pi r-s\vartheta}{d}.
   \]
2. Theorem II.5.1 supplies the product, phase, and argument-sheet hypotheses of Theorem II.6.1. Apply that theorem to \(\mu\):
   \[
   \rho^{s/d}\sin A+\rho^q\sin B_\mu
   \leq\sin(A+B_\mu),
   \qquad \rho=|\mu|.
   \]
3. If \(\mu=\lambda\), these are already the original cell's absolute quantities. If \(\mu=\overline\lambda\), Lemma II.5.2 identifies them after reflection. In either case \(\rho=|\lambda|\) satisfies the Topic IX scalar inequality on the original ray.
4. Let \(\rho_*\) be Topic IX's unique equality radius. Since the scalar left side is strictly increasing, the inequality gives \(\rho\leq\rho_*\).
5. Corollary II.7.4 gives \(\rho_*e^{i\theta}\in\Theta_N\). Since \(\rho=R_N(\theta)\) is the maximal attainable radius on that ray, \(\rho_*\leq\rho\).
6. Hence \(\rho=\rho_*\), and equality holds in Theorem II.6.1.
7. Its strict equality criterion gives \(\beta_1=\cdots=\beta_d\), and therefore \(\alpha_j=1-\beta_j\) are also equal.
8. If \(\mu=\lambda\), the constant-profile product is the Ito carrier directly. If \(\mu=\overline\lambda\), conjugate and use Lemma II.5.2 to recover the original cell's carrier.

**Deterministic figure.** A two-arrow squeeze:

\[
\rho\leq\rho_* \quad\text{(Topic X, upper inequality)},
\qquad
\rho_*\leq\rho \quad\text{(Topic XI, realization and maximality)}.
\]

The arrows meet at equality, after which a small Jensen diagram changes from unequal points to one common point.

**Provenance.** Category: **New result**. The conclusion that the new-shell monodromy profile must equalize is specific to the manuscript's critical-polygon/Jensen route. Classical antecedents establish the Farey-Ito boundary and its realization but do not supply this heterogeneous-profile equality statement.

## Suggested page rhythm

1. Polynomial-to-graph opening plate and independence notice.
2. Tail-row convention and graph glossary.
3. Lemma II.7.1 with a three-vertex sign example.
4. Lemma II.7.2 with local/global cycle highlighting.
5. Theorem II.7.3, visibly split into common construction, \(s\leq dq\), and \(s>dq\).
6. Two complete small graph examples, one for each sign of \(s-dq\).
7. Corollary II.7.4: candidate attainment.
8. Deferred Corollary II.6.2: the squeeze and equality profile.
9. `What Topic XI has earned`: reverse inclusion for open rays and equality for new-shell extrema; nesting and full boundary identification remain.

## Deterministic figure specification

- `XI.1 One polynomial, two kinds of cycles`: symbolic SVG.
- `XI.2 Determinant sign ledger`: SVG permutation-cycle diagram, including a loop.
- `XI.3 Local versus global cycles`: graph SVG with selectable highlight, accessible without interaction.
- `XI.4 Case s <= dq`: exact six-state graph and matrix for \(n=6,q=3,s=5,d=2\).
- `XI.5 Case s > dq`: exact five-state subdivided graph for \(n=5,q=2,s=5,d=2\).
- `XI.6 The two-inequality squeeze`: simple logical SVG, not a numerical plot.

All matrices and characteristic polynomials used in plates must be generated from the same graph data structure and checked symbolically or by coefficient comparison. Do not hand-maintain independent matrix and SVG versions.

## Preliminary adversarial audit A - determinant and graph attack

Attack: determinant-cycle correspondences often hide a transpose convention, omit loops, double-count cycles, or forget unused subdivision vertices.

Fixes incorporated:

- Tail-row convention is displayed before the first graph.
- Lemma II.7.1 starts from the Leibniz formula and treats \(\ell=1\) explicitly.
- Lemma II.7.2 proves exhaustiveness in both directions and explains why local/global coexistence is impossible.
- The \(s>dq\) proof explicitly assigns \(t^{s-dq}\) to unused subdivision vertices in local-cycle terms.
- The zero-weight endpoint convention for \(\alpha=0\) or \(\beta=0\) is stated.
- Both graph regimes receive independent worked examples.

Residual implementation check: generate the adjacency matrices for both examples, compute \(\det(tI-A)\) symbolically, and compare every coefficient with `(II.7.3)` or `(II.7.4)`.

## Preliminary adversarial audit B - logical direction and equality attack

Attack: attainment can be conflated with boundary status, and the equality profile can be proved circularly by assuming the candidate is outermost.

Fixes incorporated:

- Corollary II.7.4 says only that the candidate belongs to \(\Theta_n\).
- The sparse realization proof never imports Topic X.
- Corollary II.6.2 is placed after attainment and writes both opposite inequalities with their distinct reasons.
- Boundary identification remains assigned to Topic XIII; nesting remains assigned to Topic XII.
- The selected orientation is returned to the original ray through Lemma II.5.2 in an explicit separate step.

Residual implementation check: search for the phrase `on the boundary` in Topic XI. It may appear only in provenance or as a future conclusion, not as a result of Corollary II.7.4 alone.

## Source ledger

- C. Coates, "Flow-graph solutions of linear algebraic equations," *IRE Transactions on Circuit Theory* CT-6 (1959), 170-187.
- H. Ito, "A new statement about the theorem determining the region of eigenvalues of stochastic matrices," *Linear Algebra and its Applications* 267 (1997), 241-246. DOI: 10.1016/S0024-3795(97)80052-3.
- C. R. Johnson and P. Paparella, "A matricial view of the Karpelevič theorem," *Linear Algebra and its Applications* 520 (2017), 1-15.
- S. Kirkland, T. Laffey, and H. Šmigoc, "The Karpelevič region revisited," *Journal of Mathematical Analysis and Applications* 490(2) (2020), 124332.
- S. Kirkland and H. Šmigoc, "Stochastic matrices realising the boundary of the Karpelevič region," *Linear Algebra and its Applications* 635 (2022), 116-138, especially Theorem 2.1, Remark 2.2, Theorem 2.2, and Sections 3-7. DOI: 10.1016/j.laa.2021.11.016.
