# Topic III authoring blueprint — Building one-sided ownership

Status: local authoring document; not a public page and not a substitute for the canonical manuscript.

Canonical authority: `Complete_Karp_arXiv.tex`, lines 1270–1604 and 5515–5595, checked against PDF pages 15–19 and 64. The page must preserve the manuscript's hypotheses, labels, displayed equations, endpoint conventions, and logical order. Explanatory additions may expand the argument but may not silently strengthen a claim.

## Reader promise and page identity

The page should be labelled:

> Topic III of XIV · 1 definition · 9 results<br>
> **Building one-sided ownership**<br>
> When a contact lands at a polygon vertex, which of its two incident sides owns it?

The reader should leave with four ideas that can be stated without specialist vocabulary:

1. A half-open convention gives every boundary point exactly one address.
2. Supporting lines turn a geometric boundary event into an equality test.
3. Cutting along an actual edge of the inner polygon preserves invariance and gives an exact vertex count.
4. Among normalized critical polygons, an area-minimizer cannot have large removable caps.

Topic III deliberately stops before the global interlacing and one-sided-contact theorem. It builds all of the local geometry and compactness needed for that conclusion, but does not borrow it from Topic IV.

## Exact manuscript inventory

The public page should use the following exact manuscript numbering and titles.

- **Definition 4.2 — Half-open ownership word**, PDF page 15, TeX label `def:ownership-word`.
- **Lemma 4.3 — Half-open side atlas**, PDF pages 15–16, TeX label `lem:half-open-side-atlas`.
- **Lemma 4.4 — Boundary-face rigidity**, PDF page 16, TeX label `lem:boundary-face-rigidity`.
- **Lemma 4.5 — Boundary segment locator**, PDF page 16, TeX label `lem:boundary-segment-locator`.
- **Lemma 4.6 — Labeled side-matrix certificate**, PDF pages 16–17, TeX label `lem:labeled-side-matrix`.
- **Lemma 4.7 — Local ownership of unchanged image vertices**, PDF page 17, TeX label `lem:ownership-surgery-model`.
- **Lemma 4.8 — Edge-cap clipping with exact vertex count**, PDF page 18, TeX label `lem:edge-cap`; equations (4.1) and (4.2).
- **Lemma 4.9 — Area-minimal cap bound**, PDF page 19, TeX label `lem:area-cap-bound`; equations (4.3) and (4.4).
- **Lemma A.4 — Hausdorff limits of finitely generated polygons**, PDF page 64, TeX label `lem:polygonal-hausdorff-continuity`.
- **Lemma A.5 — Strict area monotonicity**, PDF page 64, TeX label `lem:strict-area-monotonicity`.

Lemma 4.1, “Side contact is witnessed by an image vertex,” is imported from Topic II. It is not repeated as a Topic III result. Lemma 4.10 belongs to Topic IV even though its statement begins at the bottom of manuscript page 19.

## Dependency ledger — nothing may be assumed silently

### Imported from Topic I

- **Definition 1.1:** `N`-criticality and the meaning of `ν_poly(T)=N`.
- **Definition 1.2:** strict polygons, oriented sides, heads and tails, and right-half-open sides.
- **Lemma 2.5:** the origin lies in the interior of every nondegenerate invariant polygon for a nonreal contraction. This is used in the nondegeneracy part of Lemma 4.9.
- **Lemma 2.6:** an orientation-preserving invertible linear map preserves the cyclic order of vertices on convex boundaries. This is used in Lemma 4.8 for `Q=λP`.
- **Lemma A.2:** strict separation from a compact convex set. It is used inside the proofs of Lemmas A.4 and A.5.
- Standard first-course material already explained in Topic I: convex hull, extreme point, boundary, relative interior, affine hull, supporting functional, exposed face, and oriented determinant.

### Imported from Topic II

- **Theorem 3.2:** hereditary saturation. In particular, every invariant polygon with at most `N` vertices for the fixed `N`-critical multiplier actually has exactly `N` vertices; every side meets its image; and every image vertex lies on the outer boundary.
- **Lemma 4.1:** if a side of `P` meets a polygon `Q⊆P`, that side contains a vertex of `Q`.

### Result-by-result dependency check

- Definition 4.2 uses only the strict-polygon and orientation conventions from Topic I.
- Lemma 4.3 uses Definition 4.2 and the oriented side inequalities for a strict polygon.
- Lemma 4.4 uses the supporting-functional definition from Topic I.
- Lemma 4.5 uses Lemmas 4.3 and 4.4.
- Lemma 4.6 uses the strict-polygon side inequalities and the half-open atlas, Lemma 4.3.
- Lemma 4.7 uses Definition 4.2, cyclic order, and the fact that the cutting segment is an edge of `Q`.
- Lemma 4.8 uses Lemma 2.6 and its own explicit hypotheses that every vertex of `Q` lies on `∂P`.
- Lemma A.4 uses Lemma A.2 and elementary compactness of a finite product of compact sets.
- Lemma A.5 uses Lemma A.2 and elementary planar area.
- Lemma 4.9 uses Definition 1.1, Lemma 2.5, Theorem 3.2, Lemma 4.8, Lemma A.4, and Lemma A.5.

No statement on this page may cite Lemma 4.10, Lemma 4.11, or any mutation result from Section 5.

## First-use glossary for a non-specialist

These explanations must appear before the first result that needs them, preferably as short closed `<details>` panels. They should not be collected in a remote prerequisite page.

- **Image polygon:** `Q=λP` is the set obtained by multiplying every point of `P` by `λ`. Since `λ≠0`, vertices and edges of `P` correspond bijectively to vertices and edges of `Q`.
- **Field:** field `i` is simply the labelled boundary slot attached to side `E_i=[x_{i-1},x_i]`. It is not a vector field or a scalar field.
- **Incoming versus outgoing side:** at vertex `x_i`, side `E_i` arrives and side `E_{i+1}` leaves when the boundary is traversed positively.
- **Half-open side:** `(x_{i-1},x_i]` contains the right endpoint `x_i` and excludes the left endpoint `x_{i-1}`. This convention assigns a shared endpoint to exactly one incident side.
- **Owns:** saying that field `i` owns a point means only that the point belongs to `E_i^+`; ownership is a bookkeeping rule, not an additional geometric relation.
- **Zero-side set:** `Z(z)={r:D_r(z)=0}` lists the side lines on which `z` lies. A relative-side-interior point has one zero; a polygon vertex has the two zeros of its incident sides.
- **Strict convex combination:** `(1-s)A+sB` with `0<s<1`; it lies strictly between `A` and `B` and is neither endpoint.
- **Supporting affine functional:** an affine function `f` with `f≤c` on the polygon and equality on a boundary face. A closed explainer should show parallel level lines moving until first contact.
- **Certificate:** a finite list of checkable equalities and inequalities that implies the desired geometric conclusion. The side matrix in Lemma 4.6 is called a certificate because nonnegative entries prove that every labelled point lies in every required half-plane.
- **Meets:** “a side meets `Q`” means the set intersection is nonempty: `E∩Q≠∅`.
- **Boundary arc:** one of the two connected portions of `∂P` joining two boundary points; the orientation specifies which one is intended.
- **Edge cap:** the portion of `P` removed by cutting along the line of an actual edge of `Q` and keeping the half-plane that contains `Q`.
- **Shared-side edge:** an edge of `Q` whose supporting line is also a supporting line of `P`; then the cut removes nothing.
- **Circumradius normalization:** rescale `P` so that `max_{z∈P}|z|=1`. This removes the irrelevant freedom to enlarge or shrink all candidates simultaneously.
- **Hausdorff distance:** for compact sets `K,L`, `d_H(K,L)` is the least `ε` such that every point of either set lies within distance `ε` of the other. Include a diagram of two nearby polygons and the two-sided nature of the condition.
- **Minimizing sequence and subsequence:** a sequence whose areas approach the infimum; compactness supplies a convergent subsequence whose limit remains admissible.
- **Nontrivial cap:** a cap for which the clipped polygon `P_j` is a proper subset of `P`.

## Page narrative and complete proof architecture

### Opening orientation — the endpoint ambiguity

Begin with one concrete regular hexagon. Give its vertices positive cyclic labels and show that an image vertex landing at `x_i` belongs to both closed sides `E_i` and `E_{i+1}`. Then color only the incoming half-open side. The opening should state the problem in ordinary language before introducing a word or formula:

> A contact in the middle of a side has an obvious address. A contact at a vertex has two incident sides. The next arguments need exactly one address, consistently around the whole boundary.

Do not mention the later chip model yet.

### Definition 4.2 — Half-open ownership word

**Exact content to display.** For a positively oriented strict polygon, field `i` owns

`E_i^+=(x_{i-1},x_i]`.

Thus `x_i` is assigned to the incoming field `i`. A one-sided contact has `ξ_i∈E_i^+`, so the local word is either `x_{i-1}<ξ_i<x_i` or `x_{i-1}<x_i=ξ_i`. The cap gap `(y_j,y_{j+1}]_{∂P}` follows the same convention.

**Intuitive purpose.** This definition converts an overlap of closed sides into a disjoint address system. It does not assert that such a global contact labelling already exists.

**Required visual.** Plate III.1: a vertex with its incoming side in navy, outgoing side in oxblood, an open circle at the excluded endpoint, and a filled circle at the owned endpoint. A toggle may switch between a strict side-interior contact and an endpoint contact.

### Lemma 4.3 — Half-open side atlas

**Before the statement.** Define

`D_i(z)=det(x_i-x_{i-1},z-x_{i-1})`.

Explain that positive orientation makes `D_i(z)≥0` the half-plane inequality for side `E_i`, while `D_i(z)=0` means that `z` lies on that side’s line.

**Intuitive purpose.** The atlas proves that the half-open convention really is an address system and records exactly which side equalities occur at a side-interior point and at a vertex.

**Complete proof architecture.**

1. Write `P` as the intersection of its oriented side half-planes `D_i(z)≥0`.
2. Use strictness of the displayed polygon to identify its nondegenerate boundary faces with exactly the displayed sides.
3. A point in `relint(E_i)` lies on the line of `E_i` and on no other side line, so `Z(z)={i}`.
4. Vertex `x_i` lies on precisely the incoming and outgoing sides, so `Z(x_i)={i,i+1}`.
5. If `z∈P` and `D_i(z)=0`, equality in the `i`th side inequality places `z` on the exposed face `E_i`.
6. Relative side interiors partition the nonvertex boundary; the convention assigns vertex `x_i` to `E_i^+` and excludes it from `E_{i+1}^+`.
7. Conclude both coverage and pairwise disjointness, hence uniqueness of the owner.

**Example.** On a regular pentagon, click a point in a side interior and then at a vertex; highlight the one and two zero determinant entries respectively.

**Provenance.** Previously known. Cite N. Dmitriev and E. Dynkin, “On characteristic roots of stochastic matrices,” *Izv. Akad. Nauk SSSR Ser. Mat.* 10(2) (1946), 167–184, with J. Swift, *The Location of Characteristic Roots of Stochastic Matrices*, M.Sc. thesis, McGill University (1972), as the accessible English translation route. State that the manuscript’s exact zero-set atlas is an explicit modern packaging of the half-open cyclic convention.

### Lemma 4.4 — Boundary-face rigidity

**Intuitive purpose.** If an interior point of segment `[A,B]` reaches the boundary of a convex polygon, the whole segment is trapped in one flat boundary face. It cannot touch the boundary “accidentally” while its endpoints lie on different faces.

**Complete proof architecture.**

1. Put `z=(1-s)A+sB` and choose a supporting affine functional `f≤c` at `z`.
2. Use affinity: `c=f(z)=(1-s)f(A)+sf(B)`.
3. Since both `f(A)` and `f(B)` are at most `c`, and both coefficients are positive, equality of the weighted average with `c` forces `f(A)=f(B)=c`.
4. Therefore `A` and `B` lie in the same exposed face `R∩{f=c}`.
5. Because `A≠B`, that face contains a nondegenerate segment; for a polygon with interior, such a face is a side.
6. Convexity of the face gives `[A,B]` inside that side.

**Required visual.** Plate III.2 contains two panels: a legal segment lying in one supporting line, and an impossible segment joining different sides whose strict interior lies in `int(R)`. The functional’s parallel level lines must be visible.

**Provenance.** Classical result. Cite R. Schneider, *Convex Bodies: The Brunn–Minkowski Theory*, expanded edition (2014), Chapter 1, especially §§1.1 and 1.3, for faces exposed by supporting hyperplanes and equality in convex combinations.

### Lemma 4.5 — Boundary segment locator

**Intuitive purpose.** Lemma 4.4 says “one common side”; the half-open labels now determine exactly which side and force `A` to be the common vertex `x_{j-1}`.

**Complete proof architecture.**

1. Apply Lemma 4.4 to place `A` and `B` on a common side.
2. Translate “common side” into `Z(A)∩Z(B)≠∅`.
3. From `A∈E_{j-1}^+`, Lemma 4.3 gives `Z(A)⊆{j-1,j}`.
4. From `B∈E_j^+`, it gives `Z(B)⊆{j,j+1}`.
5. Their only possible common index is `j`.
6. Within `E_{j-1}^+`, index `j` enters the zero set only at its right endpoint, so `A=x_{j-1}`.
7. The common face is therefore `E_j`, and `B∈E_j`.
8. Parameterize the nondegenerate side uniquely as `B=(1-t)x_{j-1}+tx_j`, `t∈(0,1]`.
9. Every strict mixture of `A` and `B` has parameter in `(0,t)`, hence lies in `relint(E_j)`.

**Example.** A three-frame boundary animation should narrow the possible zero-set intersection from two labels on each side to the single common label `j`.

**Provenance.** Classical result. Use the same Schneider citation as Lemma 4.4; describe this exact indexed locator as an elementary consequence specialized to a polygonal half-open atlas.

### Lemma 4.6 — Labeled side-matrix certificate

**Before the statement.** Explain a matrix with row `r` testing the supporting half-plane of side `E_r` and column `j` representing the candidate point `η_j`. Avoid calling the polygon “strictly convex”; use “strict polygon” in the manuscript’s custom sense.

**Intuitive purpose.** The geometry can be verified by finitely many determinant signs. Nonnegative entry `(r,j)` says `η_j` is on the inward side of the line of `E_r`; an exact zero in row `j` records the assigned contact side.

**Complete proof architecture.**

1. Split each column into its two permitted cases: endpoint `η_j=x_j`, or strict barycentric point on `[x_{j-1},x_j]`.
2. Apply the half-open atlas to prove `η_j∈E_j^+` and collision-free ownership.
3. Define `C_{r,k}` for original vertices and `D_{r,j}` for candidate points.
4. In the endpoint case, substitute directly to get `D_{r,j}=C_{r,j}`.
5. In the barycentric case, use bilinearity of the determinant to obtain `D_{r,j}=(1-t_j)C_{r,j-1}+t_jC_{r,j}`.
6. For a positively oriented strict polygon, incident entries are zero and every nonincident vertex lies strictly inside the corresponding side half-plane, so the relevant `C` entries are positive.
7. Conclude `D_{r,j}≥0` for all rows and columns, with the exact zero and strict off-side signs claimed in the statement.
8. The inequalities are precisely the half-plane description of `P`, so every `η_j∈P`.
9. Convexity then gives `conv{η_j}⊆P`.

**Required visual.** Plate III.3 synchronizes a polygon with a small sign matrix. Hovering over a matrix cell highlights side `r`, point `η_j`, and the oriented triangle whose determinant supplies the entry. This is deterministic SVG plus DOM highlighting, not numerical geometry.

**Provenance.** Previously known. Cite G. Bitsoris, “On the positive invariance of polyhedral sets for discrete-time systems,” *Systems & Control Letters* 11(3) (1988), 243–248, for polyhedral invariance certificates in half-space form. State that the exact cyclic labels and half-open collision statement are the manuscript’s planar specialization.

### Lemma 4.7 — Local ownership of unchanged image vertices

**Intuitive purpose.** Replacing `x_i` by its strict contact `ξ_i` changes two adjacent sides. This lemma checks that the two visible contacts are still assigned to the intended incoming sides; it does not claim anything about a field whose source vertex has itself changed.

**Complete proof architecture.**

1. Record the original local order `x_{i-1}<ξ_i<x_i<x_{i+1}=ξ_{i+1}`.
2. The clipping edge `[ξ_i,ξ_{i+1}]` discards only `x_i` in this local model.
3. Identify the new adjacent sides as `[x_{i-1},ξ_i]` and `[ξ_i,x_{i+1}]`.
4. Apply the right-half-open rule: `ξ_i` is the included right endpoint of the first and excluded left endpoint of the second.
5. Likewise, `x_{i+1}=ξ_{i+1}` is the included right endpoint of the second and excluded left endpoint of the following side.
6. Translate this endpoint bookkeeping into the two ownership assertions.
7. Check the source of field `i+1`: it is `x_{i+1-κ}` and equals the replaced vertex exactly when `κ=1`.
8. Therefore the old endpoint status of field `i+1` is asserted only when its source is unchanged; the changed-source case is deliberately left open for Topic IV’s surgery certificate.

**Required visual.** Reproduce the manuscript’s before/after ownership figure as a responsive SVG, but add open and filled endpoint marks and an explicit note that no geometric conclusion about the `κ=1` changed image is being smuggled in.

**Provenance.** Classical result in the site ledger: elementary cyclic-order and half-open-interval bookkeeping. Cite Schneider (2014), Chapter 1, for the convex-boundary background, while stating that this exact local label audit is manuscript-specific exposition.

### Lemma 4.8 — Edge-cap clipping with exact vertex count

**Before the statement.** Define the edge half-plane `H_j`, the clipped polygon `P_j=P∩H_j`, the discarded boundary arc `A_j`, and the count `k_j`. Show what counts as an endpoint when it is or is not already a vertex of `P`.

**Intuitive purpose.** Cutting along an edge of `Q=λP` is safe because `Q` remains inside the retained half-plane. The lemma counts exactly how many old vertices disappear and how many new intersection vertices can appear.

**Complete proof architecture.**

1. Since `λ≠0`, multiplication by `λ` is an invertible orientation-preserving real-linear map; hence `Q` is a strict polygon with the same number of vertices as `P`.
2. Every `Q`-vertex lies on `∂P` by hypothesis. Apply Lemma 2.6 to identify the cyclic order inherited from `∂P` with the order on `∂Q`.
3. Consecutive `Q`-vertices therefore delimit a unique boundary gap containing no other `Q`-vertex.
4. The line of their edge supports `Q`; by construction `Q⊆H_j`, so `Q⊆P_j⊆P`.
5. Apply `λ` to `P_j⊆P`: `λP_j⊆λP=Q⊆P_j`. Thus the clipped polygon remains invariant.
6. In the nontrivial case, `P` has points on the discarded side, while the two-dimensional polygon `Q` supplies points on the retained side. Let `I=P∩aff(y_j,y_{j+1})`.
7. A point in `relint(I)` cannot lie on `∂P`, because the polygon has local points on both sides of the line there; hence `y_j,y_{j+1}`, already known to be boundary points, are the two endpoints of `I`.
8. The discarded boundary portion is therefore exactly the named arc `A_j`, and it contains no other `Q`-vertex because all of `Q` lies in `H_j`.
9. Count candidates after clipping: start with `N`; remove each old vertex internal to `A_j`; retain each endpoint already an old vertex; add each endpoint that was not an old vertex. This simplifies to `N+2-k_j`.
10. Some candidates may become collinear, so the number of extreme points is at most that count.
11. In the shared-side case, the edge line supports both polygons. Its contact face in strict `P` is one side, so the half-open boundary gap contains at most one `P`-vertex.

**Worked exact example.** Use the regular hexagon with vertices on the unit circle and `λ=cos(π/6)e^{iπ/6}`. Its image vertices are exact side midpoints. For one image edge, highlight the cap and count old internal vertices and newly introduced endpoints explicitly. State that the example illustrates Lemma 4.8’s counting, not the later minimal-area conclusion.

**Provenance.** Previously known. Cite Dmitriev–Dynkin (1946), with Swift (1972) for the English translation, as the clipping antecedent. Say explicitly that the manuscript makes the exact `N+2-k_j` count and shared-side case fully explicit.

### Toolbox interlude — Hausdorff convergence and area

Place Lemmas A.4 and A.5 here, before Lemma 4.9, rather than hiding them at the end. Their statements retain the appendix numbers.

#### Lemma A.4 — Hausdorff limits of finitely generated polygons

**Intuitive purpose.** If each of finitely many labelled generators moves only a little, its convex hull moves only a little. Invariance, maximal radius, and area then survive the limiting process needed to produce an area-minimizer.

**Complete proof architecture.**

1. Set `ε_k=max_j|z_{k,j}-z_j|`.
2. Match a convex combination `Σt_jz_{k,j}` with `Σt_jz_j`; their distance is at most `ε_k`. Repeat in the reverse direction.
3. Conclude `d_H(P_k,P)≤ε_k→0`.
4. Put all polygons in one large disk to obtain a common integrable bound for indicator functions.
5. If `z∉P`, its positive distance from compact `P` keeps it out of `P_k` eventually.
6. If `z∈int(P)`, choose `r>0` with `z+rD̄⊆P`. This gives the uniform support-function gap `h_P(u)≥⟨u,z⟩+r` for all unit `u`.
7. Hausdorff convergence gives uniform convergence of support functions, so for large `k`, `h_{P_k}(u)>⟨u,z⟩` for all unit `u`.
8. If such a `z` were outside `P_k`, strict separation (Lemma A.2) would produce the opposite inequality for one unit functional, a contradiction.
9. Therefore indicator functions converge away from `∂P`; a polygon boundary has area zero; dominated convergence gives area convergence.
10. To pass invariance to the limit, approximate `x∈P` by `x_k∈P_k`; from `Ax_k∈P_k` and convergence obtain `Ax∈P`.
11. A convex norm attains its maximum over a finite convex hull at a generator; convergence of the finitely many generator norms gives convergence of maximal radius.

**Required visual.** Plate III.4 shows three ghosted polygons converging to a limit, with the largest two-sided vertex displacement `ε_k` and a separate inset showing an interior disk around `z`.

**Provenance.** Classical result. Use the site’s exact citation: R. Schneider, *Convex Bodies: The Brunn–Minkowski Theory*, expanded ed. (2014), Chapter 1, §§1.1, 1.3, 1.6, 1.7, and Chapter 2, §§2.1, 2.4, for Hausdorff convergence and support-function material.

#### Lemma A.5 — Strict area monotonicity

**Intuitive purpose.** Proper inclusion between two genuine planar convex bodies creates a region of positive width and positive area; a larger body cannot have exactly the same area.

**Complete proof architecture.**

1. Choose `y∈L\K`.
2. Strictly separate `y` from compact convex `K`: `ℓ(y)>a=max_Kℓ`.
3. Choose a closed disk `D⊂int(K)`.
4. The cone-like convex hull `C=conv(D∪{y})` lies in `L`.
5. Above the level `a`, `C` contains a nonempty open triangle.
6. That triangle is disjoint from `K` and has positive area.
7. Hence `L\K` has positive area and `area(K)<area(L)`.

**Required visual.** A support line separates `y` from `K`; the triangle between `y` and a short chord of the interior disk is shaded as the guaranteed positive-area gain.

**Provenance.** Classical result. Cite Schneider (2014), Chapter 1, for separation and volume monotonicity of convex bodies.

### Lemma 4.9 — Area-minimal cap bound

**Before the statement.** Explain why a normalization is necessary: scaling an invariant polygon changes its area but not the inclusion `λP⊆P`, so “least area” has no meaning until the largest radius is fixed to one.

**Intuitive purpose.** Choose the tightest normalized representative. A cap containing three or more old vertices would reduce the vertex budget below `N`; a cap containing exactly two would reduce area without changing the budget. Only the unique cap containing the radius-one anchor can evade the latter contradiction.

**Complete proof architecture.**

1. Represent every normalized candidate as `conv(z_1,…,z_N)` with all generators in the closed unit disk, allowing repetitions.
2. Use sequential compactness of the `N`-fold product of that disk to obtain coordinatewise convergence of a subsequence.
3. Apply Lemma A.4 to identify the Hausdorff limit as a convex polygon with at most `N` vertices, preserve `λP⊆P`, and preserve `max|z|=1`.
4. Exclude a singleton limit: normalization would give a point `v` with `|v|=1`, but invariance of `{v}` would force `λv=v`, impossible for `0<|λ|<1`.
5. Exclude a nondegenerate segment: multiplication by a nonreal number rotates its supporting line to a different line, so it cannot map into the same segment.
6. The limit therefore has nonempty interior. If it had fewer than `N` extreme points, it would contradict `ν_poly(T)=N`.
7. It is consequently another strict invariant `N`-gon. Lemma A.4 gives area continuity, so the infimum is attained by a least-area normalized representative.
8. Choose a vertex `v` with `|v|=1`. Since `Q=λP` lies inside the disk of radius `ρ=|λ|<1`, `v` is not a vertex of `Q`.
9. If a nontrivial cap had `k_j≥3`, Lemma 4.8 would produce an invariant polygon with at most `N-1` vertices, contradicting criticality.
10. Suppose a nontrivial cap has `k_j=2` and its relative interior does not contain `v`. The clip is proper, retains `v`, hence remains normalized, and has at most `N` vertices.
11. Criticality forbids fewer than `N`, so the clip is another strict invariant `N`-gon.
12. Lemma A.5 makes its area strictly smaller, contradicting the minimizing choice.
13. The relative interiors of the boundary gaps between consecutive `Q`-vertices are disjoint and cover `∂P\Ext(Q)`.
14. Because `v∉Ext(Q)`, exactly one such gap contains `v`; therefore at most one `k_j=2` nontrivial cap can escape Step 10.

**Required visual.** Plate III.5 has three synchronized layers: the normalized outer polygon with radius-one anchor `v`, its inner image `Q`, and candidate cap clips. A selector illustrates `k=1`, `k=2` away from `v` (area contradiction), `k=2` containing `v` (the sole possible exception), and `k≥3` (vertex-budget contradiction).

**Provenance.** Previously known. Cite Dmitriev–Dynkin (1946), with Swift (1972) as the translation route, for the minimal-polygon/cap argument. State that the manuscript supplies the modern Hausdorff compactness and strict-area closure in Lemmas A.4 and A.5.

## End-of-page synthesis

Close with a compact chain, not a preview full of undefined later machinery:

`half-open addresses → boundary rigidity → finite side certificate → invariant edge clips → area-minimal cap bound`.

The final paragraph should say only:

> We now know that local endpoint ownership is unambiguous and that the gaps between consecutive image vertices are severely constrained. Topic IV turns those local constraints into one global cyclic ownership and then studies the exact geometric move it permits.

## Deterministic figure and example implementation plan

All plates must be SVG generated from explicit coordinates. No plate is evidence unless its coordinates satisfy the stated hypotheses; schematic plates must say “schematic.”

- **Plate III.1:** regular hexagon, half-open endpoint ownership; exact unit-circle coordinates.
- **Plate III.2:** boundary-face rigidity; one triangle/pentagon with explicit rational coordinates and parallel functional levels.
- **Plate III.3:** regular pentagon plus determinant sign matrix; compute signs from the same coordinates used to draw it.
- **Plate III.4:** labelled polygon generators converging linearly to a limit; expose `ε_k` and the interior disk.
- **Plate III.5:** regular-hexagon cap example with `λ=cos(π/6)e^{iπ/6}` for exact side-midpoint contacts; separately mark the area-minimal cases as logical diagrams rather than claims about this example.
- **Local surgery plate:** adapt the manuscript TikZ geometry exactly; synchronize old/new side labels and open/closed endpoint glyphs.

Every plate needs a prose caption, screen-reader description, keyboard-accessible controls if interactive, and a reduced-motion static state.

## Provenance rule for this page

Use only the four public categories agreed with the author: Classical result, Previously known, Strengthened, and New result. Definitions have no badge. There is no evidence-status badge and proofs are not classified. For every Classical or Previously known item, the source named above must appear beside the result in a closed “History of this statement” panel. No result in Topic III is classified as Strengthened or New result in the current site ledger.

### Exact source records

- N. A. Dmitriev and E. B. Dynkin, “On characteristic roots of stochastic matrices,” *Izv. Akad. Nauk SSSR Ser. Mat.* 10(2) (1946), 167–184; [Math-Net record](https://www.mathnet.ru/eng/im3595).
- J. Swift, *The Location of Characteristic Roots of Stochastic Matrices*, M.Sc. thesis, McGill University (1972), including an English translation of Dmitriev–Dynkin; [McGill record](https://escholarship.mcgill.ca/concern/theses/12579t72d).
- G. Bitsoris, “On the positive invariance of polyhedral sets for discrete-time systems,” *Systems & Control Letters* 11(3) (1988), 243–248; [DOI](https://doi.org/10.1016/0167-6911(88)90065-5).
- R. Schneider, *Convex Bodies: The Brunn–Minkowski Theory*, expanded ed., Cambridge University Press (2014), Chapter 1, §§1.1, 1.3, 1.6, 1.7 and Chapter 2, §§2.1, 2.4; [DOI](https://doi.org/10.1017/CBO9781139003858).

## Adversarial read 1 — mathematical integrity

### Findings

1. **Risk: treating “strict polygon” as standard strict convexity.** A polygon is never strictly convex in the usual no-boundary-segments sense. The proof of Lemma 4.6 must say “the oriented side inequalities of a strict polygon,” not “strict convexity” without qualification.
2. **Risk: circular use of global ownership.** Lemmas 4.7–4.9 may use vertex touching from Theorem 3.2 and local half-open ownership, but not Lemma 4.11 or Corollary 4.12.
3. **Risk: incomplete line-intersection argument in Lemma 4.8.** The page must state why the nontrivial clip puts points of `P` on both sides of the edge line and why this forces the boundary intersection points to be endpoints of `P∩aff(y_j,y_{j+1})`.
4. **Risk: claiming an area-minimizer without closure.** The proof must include repeated generators, subsequence extraction, preservation of normalization and invariance, exclusion of singleton and segment limits, and area continuity.
5. **Risk: hidden use of Euclidean structure.** Area, norm, disk, and Hausdorff distance enter only after adapted complex coordinates have already been fixed; say this once at the compactness interlude.
6. **Risk: overlooking the radius-one anchor.** The last step of Lemma 4.9 requires `v∉Ext(Q)` and the fact that exactly one half-open `Q`-gap contains it.
7. **Risk: overstating a schematic cap drawing.** The deterministic hexagon verifies the clipping count, but it is not asserted to be the area-minimal representative of an `N`-critical multiplier.

### Fixes incorporated into this blueprint

- Custom strict-polygon language is used throughout.
- The dependency ledger forbids all forward Topic IV assumptions.
- Lemma 4.8 has an explicit two-sided line and endpoint argument.
- Lemma 4.9 contains the entire compactness closure, including degeneracy exclusions.
- The Euclidean-coordinate transition and logical status of each figure are stated explicitly.
- The radius-one anchor is shown in both the proof architecture and Plate III.5.

## Adversarial read 2 — novice clarity and reading pace

### Findings

1. “Field,” “owns,” “certificate,” “meets,” “cap,” and “shared-side” can sound technical or metaphorical before they are defined.
2. The zero-side notation is difficult without first seeing the oriented half-plane test.
3. The count `N+2-k_j` is easy to mistrust if old vertices removed and new endpoints added are described only verbally.
4. Hausdorff convergence is not standard first-course linear algebra and must not be relegated to a source shelf.
5. “Choose a least-area polygon” sounds magical unless normalization, compactness, and attainment are separated.
6. Ten formal blocks in one page can feel repetitive if every result receives the same number of decorative panels.

### Fixes incorporated into this blueprint

- Every nonstandard word receives a local first-use explainer.
- The oriented determinant is animated before `Z(z)` appears.
- The cap-count example shows the subtraction and addition as separate visual stages.
- Lemma A.4 is moved to the exact point where the minimizer needs it and gets its own two-sided-distance figure.
- The area-minimizer argument is divided into “normalize,” “take a limit,” “exclude degeneration,” and “attain the minimum.”
- Routine proofs retain one collapsible full proof with margin annotations; only Lemmas 4.8 and 4.9 receive an additional visible proof map because they introduce genuinely new proof architecture for the reader.

## Completion checks before coding

- Verify exact MathML rendering of superscripts `E_i^+`, boundary subscripts on cyclic arcs, `Ext(P)`, `relint(E_i)`, and `d_H(P_k,P)`.
- Keep every proof closed by default but show the complete statement and a one-paragraph purpose.
- Ensure equation links use printed numbers (4.1)–(4.4), not generated nicknames.
- Add PDF deep links to pages 15–19 and 64.
- Run the mathematical and novice audits again against the rendered page; the audits above are preliminary authoring checks, not publication approval.
