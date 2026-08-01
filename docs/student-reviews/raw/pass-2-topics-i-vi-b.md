# Independent student-perspective review — Pass 2

## Scope and reader model

This is an independent second pass over the following physical proof-reader pages:

- Topic I: `/proof`
- Topic II: `/proof/topic-ii/`
- Topic III: `/proof/topic-iii/`
- Topic IV: `/proof/topic-iv/`
- Topic V: `/proof/topic-v/`
- Topic VI, Part A: `/proof/topic-vi/a/`
- Topic VI, Part B: `/proof/topic-vi/b/`

I did not read or rely on another student-review report. I read each rendered page in order, including the definitions, dependency contract, formal statements, complete proofs, guided proof notes, figures, and source notes. I used the following student model throughout: one standard linear-algebra course, ordinary undergraduate mathematical maturity, and no prior knowledge of convex geometry, projective geometry, lattice sails, contact representations, or Karpelevič's proof.

At every step I asked:

1. Do I already know this term, or has this page or an earlier linked page defined it?
2. Do I know exactly what every symbol denotes at this point?
3. Can I explain why this implication follows, rather than merely recognize that it sounds plausible?
4. Can I find the imported dependency at the address supplied by the page?
5. Does the intuition actually illuminate the formal proof, or merely restate its conclusion?

The recommendation classes used below have deliberately different thresholds:

- **Needed:** a missing or incorrect dependency, undefined notation, a transition that the stated reader cannot presently verify, or wording that materially misdescribes the theorem.
- **Advised:** the proof is valid and in principle traceable, but the page asks too large a conceptual jump for the intended reader or misses an important explanatory opportunity.
- **Would be nice to add:** optional reinforcement, a worked example, an animation, or an alternative viewpoint that improves retention without closing a logical gap.

No recommendation in this report has been implemented.

---

## Topic I — The language of critical polygons

### Overall student verdict

This page gives the best first-contact experience in the reviewed range. The definitions of compactness, ambient versus relative interior, strict polygon, Hausdorff convergence, dense rotation orbits, and degree (+1) are unusually conscientious. A student can understand the purpose of radial criticality and can follow Propositions 2.1–2.2 and Lemmas 2.4–2.6 with only local pauses.

The principal remaining problem is not the elementary material. It is Proposition 2.3: the formal statement suddenly uses the complete contact-system language before that language has been given a minimal local definition. The later roadmap disclaimer correctly says that some constructions are introduced later, but it does not make the proposition itself readable at its point of occurrence.

### Parts that genuinely work

- **Opening foundations, “Boundary, affine hull, and relative interior.”** The two examples distinguish ambient interior from relative interior much more effectively than a dictionary definition alone.
- **Opening foundations, “Why must the polygon be compact?”** The whole-plane counterexample makes clear that compactness is structural rather than decorative.
- **Definition 1.1 (`#part-i-item-1`).** “Last, outermost radial scale” correctly orients the radial inequality. The optional explanation separates existence of an (N)-gon from radial extremality.
- **Definition 1.2 (`#part-i-item-2`).** The page explicitly warns that the custom word “strict” does not mean strictly convex. The explanations of maximal sides and strict support are useful.
- **Proposition 2.2 (`#part-i-item-6`).** The six-step expansion is at the right level for the intended reader. In particular, it proves preservation of extreme points rather than treating it as a picture.
- **Lemma 2.4 (`#part-i-item-8`).** The Hausdorff-distance disclosure is self-contained, and the endpoint audit makes the reversal of half-open ownership checkable.
- **Lemma 2.5 (`#part-i-item-9`).** The finite- and infinite-order cases are separated cleanly; the factor (\rho^k>0) is now explicitly used.
- **Lemma 2.6 (`#part-i-item-10`).** The degree disclosure is much better than merely writing “the radial map has degree one.”

### Questions and unresolved comprehension gaps

1. **Proposition 2.3 (`#part-i-item-7`), complete statement.** A student meets


   \(\mathcal E(P),\chi,I,s,\sigma,A_{\mathcal E}\)


   before receiving a minimal definition of the side set, the contact assignment, the strict-contact set, the successor map, or the contact rotation. The first-use vocabulary defines “covariance,” “clipping,” and exposed faces, but not these objects. The sentence after the proof says that still later objects are merely a roadmap; that is helpful, but the core equation (2.3) is already unreadable without the missing dictionary.

   The student's literal questions are: “What is the domain and codomain of \(\chi\)? Is \(I\) a set of vertices or sides? Is \(s\) the geometric successor of a side? How is \(\sigma\) constructed from \(\chi\)? What does \(A_{\mathcal E}^{-1}\) act on?”

2. **Lemma 2.5 (`#part-i-item-9`), start of the boundary contradiction.** The proof says to choose a supporting functional at (0\in\partial P). The page defines what such a functional is, but it does not prove or directly link the fact that every boundary point of a compact convex polygon has one. A novice can understand the rest of the contradiction only after accepting this unaddressed existence step.

3. **Proposition 2.1 (`#part-i-item-5`), adapted metric paragraph.** The formula


   \(g(x,y)=g_0(x,y)+g_0(Jx,Jy)\)


   is elegant, but a student may still ask why it is an inner product and why (g(Jx,Jy)=g(x,y)). Both are one-line calculations, but neither is displayed. The statement that (J^*=-J) then depends on those two facts.

4. **Lemma 2.6 (`#part-i-item-10`), final geometric equivalence.** The degree disclosure explains why the radial map preserves cyclic order. The next sentence—rays to (a,b,c) occur counterclockwise exactly when \(\det(b-a,c-a)>0\)—is still a nontrivial change of base point from (o) to (a). It is true, but a student would benefit from seeing the oriented-triangle argument rather than being asked to recognize it.

5. **Lemma A.2 (`#part-i-item-66`), nearest-point proof.** The one-sided derivative (f'(0)\ge 0) is standard calculus, but the page's stated entry contract mentions linear algebra rather than calculus. Expanding (f(t)-f(0)) directly would make the same argument fully elementary and remove this small assumption.

### Needed

- Add a compact **contact-system dictionary immediately before Proposition 2.3**. At minimum define \(\mathcal E(P)\), the tail and head of a side, \(\chi\), \(I\), \(s\), \(\sigma\), and the induced side map \(A_{\mathcal E}\), with domains and codomains. If the later constructions are intentionally deferred, split the proposition into the presently defined geometric covariance statement and a later corollary for functorially constructed return data.
- At Lemma 2.5, supply either a two-sentence polygon proof of the supporting-line existence claim or a precise link to the earlier exposed-face/supporting-line explanation that includes existence, not only terminology.

### Advised

- Expand the adapted-inner-product calculation in Proposition 2.1: positivity of (g), the equality (g(Jx,Jy)=g(x,y)), and the deduction (J^*=J^{-1}=-J).
- Add a small oriented-triangle diagram or determinant identity at the last geometric step of Lemma 2.6.
- In Lemma A.2, replace or accompany the derivative sentence with the direct quadratic expansion.
- Keep Proposition 2.3's later “mutation sequences / tower partitions” paragraph visually labelled as a roadmap and add direct future-topic links once each object is defined.

### Would be nice to add

- A single worked (2\times2) elliptic matrix in Proposition 2.1, carrying the reader from trace and determinant to \(\rho,\theta,J\).
- A three-frame illustration for Proposition 2.3: original polygon, transformed polygon, and the same side/contact labels after applying (A\).
- A one-line geometric-series verification that a finite nontrivial root-of-unity orbit sums to zero in Lemma 2.5.

---

## Topic II — From convex order to active sides

### Overall student verdict

The page has a strong architecture: it declares what may be imported, moves the two appendix lemmas to their first use, defines previously troublesome words such as “meets,” “slack,” “positive spanning,” and “Neumann series,” and gives three particularly useful explainers for finite openness, the normal fan, and saturation.

The central hereditary-saturation argument is mathematically traceable. The main student-level weakness is the abrupt rise in assumed background inside Lemma A.1 and one unproved planar-cone separation step in Theorem 3.2. There is also a circular phrase in the very first cyclic-triple definition.

### Parts that genuinely work

- **Dependency contract, “What is allowed into Topic II.”** Imported results and standard background are separated clearly, and the appendix tools are visibly brought forward.
- **Lemma 2.8 (`#part-i-item-12`).** The common-neighbourhood disclosure states the finite-intersection argument in ordinary language before the abstract lemma.
- **Normal-fan setup and Proposition 3.1 (`#part-i-item-15`).** The page defines normals, support numbers, fan cones, and the rows of (B_\Phi(\theta)) before the proposition. The exact (30^\circ) figure makes one row of the matrix concrete.
- **Theorem 3.2 (`#part-i-item-16`).** “Meets,” “support slack,” “vanishing slack,” “recession cone,” “complementarity,” and “Neumann series” are all defined before use. The three compressed implications below the formal proof genuinely unpack hidden transitions rather than merely repeat the theorem.
- **Lemma A.3 (`#part-i-item-67`).** The vertex–side duality is presented with a clear purpose, and the proof explains irredundancy instead of treating polar face counts as automatic.
- **Lemma 4.1 (`#part-i-item-18`).** The witness upgrade is short and understandable.

### Questions and unresolved comprehension gaps

1. **Lemma 2.7 (`#part-i-item-11`), “Cyclic triple.”** The vocabulary calls \((z_i,z_j,z_k)\) “a triple of boundary points in increasing cyclic order around the polygon,” but the lemma's input is only a cyclic list and its purpose is to prove that this list is a polygonal vertex list. A student asks: “Which polygon boundary am I already allowed to use?” This wording is circular even though the formal statement itself is not.

   The proof also says that (i,i+1,k) occur in positive cyclic order for every (k\notin\{i,i+1\}). The wrap-around convention for (i=N-1) should be stated at this exact point; the earlier vocabulary's phrase “with indices (i<j<k) in one chosen starting point” does not make the modular case effortless.

2. **Lemma A.1 (`#part-i-item-65`), general nonnegative matrix part.** The full proof introduces an operator norm, Jordan blocks \(J_\zeta=\zeta I+N\), a nilpotent part (N), a binomial matrix-power formula, absolute convergence of a matrix series, a resolvent \((cI-B)^{-1}\), \(\limsup\), and compact subsequences. Most are not defined in the first-use vocabulary, and the guided explanation compresses the entire general-matrix argument into one sentence. A student with one linear-algebra course cannot reconstruct why the Perron roots (r_\varepsilon) converge from the current guided layer.

3. **Theorem 3.2 (`#part-i-item-16`), proof that the support (S=\{i:w_i>0\}) positively spans.** The proof uses the dichotomy: if the positive cone is proper, a nonzero separating functional is nonnegative on all selected normals; the positive relation then forces all normals into one line. Neither this finite-cone separation fact nor the dichotomy is proved or linked at its point of use. The earlier strict-separation lemma concerns a point and a compact convex set, not directly a possibly unbounded cone. This is the one central inference in the saturation proof that the stated student cannot presently verify from the page.

4. **Proposition 3.1 (`#part-i-item-15`), boundary fan ray.** The explainer says that choosing either adjacent cone for a direction on a fan ray gives the same coefficient vector. This is true, but an explicit one-line coefficient calculation would reassure the student that the definition of the row of (B_\Phi\) is not ambiguous.

5. **Lemma A.3 (`#part-i-item-67`), strict support at each polygon vertex.** The proof invokes a strict supporting functional (u_i) at a vertex. Topic I explains strict support but does not give this existence fact as a named result. The proof would be easier to audit with a direct link to the interior of the vertex normal cone or a two-edge construction.

### Needed

- Rewrite “cyclic triple” so it refers to the **displayed cyclic order of labels**, not to boundary points of a polygon not yet known to exist. Explicitly state how cyclic order is read across the (N-1\to0) wrap in the sufficiency proof.
- Give Lemma A.1 a genuinely student-level second layer for the general (B\ge0) case. Define the newly used matrix-analysis terms, split the convergence argument into smaller claims, and explain what each comparison proves. A precise source remains useful, but it does not replace the promised unpacking of the proof reproduced here.
- Insert and prove a small planar **positive-cone separation lemma** before Theorem 3.2, or give an exact earlier result from which the dichotomy follows. Then link the theorem's (S)-argument to it.

### Advised

- Add a concrete four-normal example of (B_\Phi(\theta)), its support vector (h), and one nonzero slack coordinate before Theorem 3.2.
- Show explicitly why strict positivity of all entries of (A) makes (A(Mx-Ax)>0) coordinatewise in Lemma A.1.
- Add the one-line argument that a direction on a fan ray has a unique global coefficient vector, although it lies in two closed fan cones.
- Link the strict-support choice in Lemma A.3 back to the normal-cone explanation in Topic I.
- Give one small geometric example for Lemma 2.8 showing a moving side point through its affine coordinate \(\alpha(\tau)\).

### Would be nice to add

- An optional “short proof for readers who know Perron–Frobenius” alongside the expanded Lemma A.1 proof.
- A toggle on Figure II.3 that highlights a vertex of (R), its dual side in (R^\circ), and the equality \(\langle y,x\rangle=1\).
- A three-side example showing visually the distinction among a tight support, a positive support slack, and a missing contact.

---

## Topic III — Building one-sided ownership

### Overall student verdict

The progression from half-open ownership to edge clipping and then to a least-area representative is well chosen. The page defines more of its bookkeeping language than Topic I and does a particularly good job separating exact collinearity/contact statements from later global existence. The compactness tools are placed where they are needed.

The main local gap is Lemma 4.7: it uses the shift (\kappa) and a “shifted contact system” before either is defined on this page or established in the logical sequence. There are also two short convex-geometric transitions that deserve proof for the advertised reader.

### Parts that genuinely work

- **Definition 4.2 (`#part-i-item-19`).** The page explicitly says that the convention does not yet prove existence of a global contact assignment. “Field” and “owns” are disambiguated from their everyday mathematical meanings.
- **Lemma 4.3 (`#part-i-item-20`).** The zero-side atlas gives an independently checkable signature for side-interior and vertex contacts.
- **Lemmas 4.4–4.5 (`#part-i-item-21`, `#part-i-item-22`).** Supporting-functional rigidity followed by the half-open label intersection is a good pedagogical sequence.
- **Lemma 4.8 (`#part-i-item-25`).** The old-vertex/new-endpoint count is written as an actual ledger, and the proof explains why collinear candidates produce an inequality rather than an equality.
- **Lemma A.4 (`#part-i-item-68`).** Hausdorff distance, sequential compactness, indicator functions, dominated convergence, and area-zero boundary are all defined locally.
- **Lemma 4.9 (`#part-i-item-26`).** The normalization issue is explained before minimization, and the proof treats singleton and segment limits rather than silently assuming full dimension survives.

### Questions and unresolved comprehension gaps

1. **Lemma 4.7 (`#part-i-item-24`), complete statement and proof.** The page suddenly says “In a shifted contact system,” uses a shift (\kappa), and identifies the source of field (i+1) as (x_{i+1-\kappa}). The global single-shift theorem is Lemma 4.13 on the next page, so it cannot be imported here. A student asks: “Is this a conditional local model in which (\kappa) is simply fixed? If so, what is the hypothesis \(\xi_j=\lambda x_{j-\kappa}\), and why is it allowed before the existence theorem?” The current first-use vocabulary defines “changed source” but not the shifted system itself.

2. **Lemma 4.8 (`#part-i-item-25`), line-section argument.** The proof says that if the clip is nontrivial, (P) has points on both sides of the image-edge line, and therefore every point in the relative interior of the section (I=P\cap\operatorname{aff}(y_j,y_{j+1})) is an interior point of (P). That planar convexity fact is plausible but not immediate to the target reader. It is the step that proves (y_j,y_{j+1}) are the section endpoints, so it should not be left as a picture-only inference.

3. **Lemma A.4 (`#part-i-item-68`), interior-point persistence.** The proof chooses (r>0) with (z+r\overline{\mathbb D}\subset P), quotes uniform convergence of support functions, and immediately concludes \(h_{P_k}(u)>\langle u,z\rangle\). The missing visible line is


   \(h_P(u)\ge \langle u,z\rangle+r\)


   for every unit (u), followed by (d_H(P_k,P)<r). The guided note calls this a “uniform support gap,” but the formal proof never displays it.

4. **Lemma 4.9 (`#part-i-item-26`), exclusion of a segment limit.** “Multiplication by a nonreal number maps its supporting line to a different line” is true in the required invariant setting, but the affine-line argument is not shown. A direct reference to Lemma 2.5, which was designed to exclude one-dimensional invariant hulls, would be clearer and stronger.

### Needed

- Before Lemma 4.7, define the conditional shifted-contact notation explicitly: fix an integer (\kappa), state \(\xi_j=\lambda x_{j-\kappa}\), and explain that the lemma is a local bookkeeping statement conditional on such a labeling; Lemma 4.13 will later prove that a global labeling of this form exists. Without that sentence, the page is logically out of order for a novice.
- Add the missing support-gap inequality in Lemma A.4 so the interior-point persistence argument can be verified line by line.
- Give a short proof of the line-section fact used in Lemma 4.8, for example by taking points of (P) strictly on both sides and using convex combinations with a compact subsegment of \(\operatorname{relint}(I)\).

### Advised

- Replace the ad hoc segment sentence in Lemma 4.9 with a direct invocation of Lemma 2.5, or spell out why an invariant nondegenerate segment would give an invariant real direction.
- Add one worked quadrilateral side atlas with its complete (D_i(z)) zero pattern.
- Add a tiny numerical (C_{r,k}/D_{r,j}) matrix for Lemma 4.6 so “certificate” becomes a calculation rather than only a definition.
- In the cap figure, mark which endpoint counts toward (k_j) in each of the four endpoint-status possibilities.

### Would be nice to add

- An animation that switches closed sides to right-half-open sides and shows duplicate endpoint ownership disappear.
- A compactness diagram showing a sequence of labelled (N)-tuples, their hulls, and the limiting hull with a repeated generator.
- A one-paragraph “why area rather than perimeter?” motivation before Lemma 4.9.

---

## Topic IV — From endpoint order to contact reduction

### Overall student verdict

This page contains a coherent mathematical story, but it is the first page where the educational layer no longer keeps pace with the proof density. Lemmas 4.10–4.14 are reasonably navigable. Proposition 5.1 and especially Lemma 5.5 demand sustained control of several cyclic index systems, a Boolean process, residue classes, and geometric realizability. The page provides many definitions, yet two notational dependencies are still wrong or absent, and the reduction lemma needs a worked state-by-state example to meet the stated audience.

### Parts that genuinely work

- **Lemma 4.10 (`#part-i-item-27`).** The (r/c/\ell) ledger and its eight-field figure make the finite transition argument transparent.
- **Lemma 4.11 (`#part-i-item-28`).** The proof explicitly handles both endpoint conventions and tracks complex conjugation rather than saying “reverse orientation if necessary.”
- **Lemma 4.13 (`#part-i-item-30`).** GCD, lifted angles, and winding integers are defined before use. The proof treats (\kappa=N) separately and explains why the upper inequality is strict.
- **The scope boundary before Proposition 5.1.** The page states that mutation assumes (1\le\kappa<N) and explains why the (\kappa=N) branch has no legal starting move.
- **The coincidence register before Proposition 5.1.** The (\kappa=1), (\kappa=2), generic, and (N=3) overlaps are all visibly registered.
- **Proposition 5.1 (`#part-i-item-32`).** The formal proof really does audit clipping, convexity, invariance, changed and unchanged fields, coefficient updates, and global ownership. It is long, but it is not hand-waving.
- **Corollaries 5.3–5.4 (`#part-i-item-34`, `#part-i-item-35`).** They correctly distinguish a Boolean history from its geometric realization.

### Questions and unresolved comprehension gaps

1. **Dependency contract, “Definition 1.2.”** It claims that Definition 1.2 supplies “oriented sides, one-sided contact representations, successors, and contact rotation.” Definition 1.2 supplies strict-polygon language, but it does not define the latter contact-system objects. This is an incorrect dependency address, not merely a missing elaboration.

2. **Corollary 5.2 (`#part-i-item-33`).** The formal statement uses (I) and (I') as strict-side sets and writes \(\sigma(E_i)=\chi(h(E_i))\). The vocabulary defines \(\chi\), successor (s), and contact rotation (\sigma), but never explicitly defines (I) or the head map (h\). A student asks: “Is (I=\{E_i:\beta_i>0\}\)? Is (h(E_i)=x_i\)?” The proof uses exactly those identities, so they should not remain implicit.

3. **Proposition 5.1 (`#part-i-item-32`), equation (5.4).** The proof says convexity makes \(D(x_{i-1},x_{i+1},x_k)\) nonnegative for all relevant (k), including (k=i-1), while the second summand is positive. This is a chord-separation fact for a convex polygon. It is central to proving that only (x_i) is clipped, but the page does not state or illustrate it.

4. **Lemma 5.5 (`#part-i-item-36`), setup and sweep proof.** New formal notation appears faster than the definitions:

   - \(2^{\mathbb Z/N\mathbb Z}\) for the power set;
   - \(\dot\cup\) for disjoint union;
   - (G+\kappa) for a translated block;
   - (c(T)) and (g(T)) for the two score components;
   - a “complete group sweep” and its intermediate sets (S^{(r)}\);
   - cyclic residue intervals in \(\mathbb Z/\delta\mathbb Z\).

   A student can infer each eventually, but not quickly enough to verify the repeatability invariant. The guided layer reduces several pages of state bookkeeping to nine high-level bullets and does not show one sweep as a sequence of actual sets.

5. **Lemma 5.5, residue-interval merger.** The proof says pairwise disjoint proper cyclic intervals cover the residue circle, chooses two consecutive ones, and translates one block so their associated groups merge. This is the conceptual heart of “one group,” yet there is no diagram or small numerical instance connecting the residue-circle picture to legal (\kappa)-sweeps on the original (N)-cycle.

6. **Lemma 4.13, shifted angle sums.** The identities


   \(\sum_{i=1}^N\Theta_{i-\kappa}=\sum_{i=1}^N\Theta_i-2\pi\kappa\)


   and the corresponding (i-1) identity are correct, but this is a place where a novice will ask why wrapping (\kappa) labels subtracts exactly (2\pi\kappa). A one-line index-unwrapping example would help.

### Needed

- Correct the dependency contract: do not attribute one-sided contact representations, successors, and contact rotation to Definition 1.2. Point to the first actual definitions on Topics III–IV, and add a minimal local recap where Proposition 2.3 was previously used.
- Before Corollary 5.2, define \(I=\{E_i:\beta_i>0\}\), (h(E_i)=x_i), (s(E_i)=E_{i+1}), and \(\sigma(E_i)=\chi(h(E_i))\) in one displayed dictionary.
- State and prove the convex-chord sign fact used in equation (5.4), or explicitly derive the nonnegative determinant from cyclic order.
- Give Lemma 5.5 a dedicated combinatorial prelude defining its set notation, score, translation, complete sweep, and repeatability invariant. Include at least one fully written small example from initial strict set through a completed sweep, a collision, and a merger.

### Advised

- Add a concrete (N=7\) or (N=8) instance of Proposition 5.1 with (\kappa=2), showing old and new (S), the replaced vertex, the changed target, and the exceptional unchanged endpoint.
- Break Proposition 5.1's complete proof into visibly numbered internal subsections matching its four formal stages; the current single disclosure is difficult to resume after a pause.
- Add an unwrapped-angle strip for Lemma 4.13 that visually proves both shifted-sum identities.
- Add a residue-circle figure for Lemma 5.5 with two blocks sharing or not sharing residue classes, then show one translated sweep.
- In Lemma 5.5, state explicitly that “reachable minimizer” is a minimizer among the finite family of strict sets, not among polygons or areas, before introducing \(\mathcal R\); the formal statement says this, but the proof begins far below it.

### Would be nice to add

- A user-steppable chip-board widget that disables illegal moves and displays the synchronized polygon update.
- A compact “notation after Topic IV” card listing (N,\lambda,\kappa,\xi_i,\alpha_i,\beta_i,S,I,s,\sigma,\delta,\varphi\).
- A short proof-mode toggle for readers already familiar with cyclic chip-firing.

---

## Topic V — Rotation arithmetic and the projective corridor

### Overall student verdict

The page is logically ambitious and generally honest about its dependencies. The formal setups appear before the groups that use them, and the forward/reverse corridor table is an effective reference. Nevertheless, Theorem 6.1 is too steep for the stated entry level: seven vocabulary items do not bridge the distance from a residue example to a long lattice-basis and tower-bijection proof. A serious notation collision in Proposition 7.3 also risks corrupting the reader's mental model.

### Parts that genuinely work

- **Formal setup, “Finite rotation notation and upper records.”** The page isolates the arithmetic from the polygon and defines the linear form (L), record times, deficits, and terminal record before Theorem 6.1.
- **Lemma A.6 (`#part-i-item-70`).** Primitive vectors, the half-open fundamental parallelogram, quotient classes, and the Smith-normal-form consequence are introduced before the proof.
- **Theorem 6.1 (`#part-i-item-37`) figure.** The (N=13), \(\nu=8\), \(\Delta=5\) tower picture makes \(q\nu+h\Delta=N\) visible.
- **Formal setup, “Return heights, terminal transport, and pulled-back supports.”** It consolidates equations (7.1)–(7.6) before the projective corridor arguments.
- **Formal forward/reverse corridor dictionary.** The two branches, lengths, vertices, contacts, exponents, moved bases, and closing fields can be compared in one place.
- **Lemma 7.2 (`#part-i-item-41`).** The proper-chain inequalities are elementary enough to verify, and all advertised boundary values are checked.
- **Proposition 7.5 (`#part-i-item-44`).** The proof explains why the denominator is positive on the polygon and derives a convex-combination formula rather than merely invoking “projective maps preserve convexity.”

### Questions and unresolved comprehension gaps

1. **Theorem 6.1 (`#part-i-item-37`), whole proof.** The first-use vocabulary does not define ceiling and floor notation, lattice index, unimodular row/column operations, nil concepts such as “radial edge” of the record triangle, or why a unimodular pair is an integer basis. More importantly, no single example follows the proof's symbols all the way through


   \(V,V',U=(q,p),\nu,\nu',\Delta,h,F,H_i\).


   The tower figure gives final numbers, but not how the record vectors produce them. A student can read each displayed equation and still not know what the theorem has constructed.

2. **Theorem 6.1, Stage 1 “Exclude a determinant gap.”** The use of Lemma A.6 requires several implicit facts: primitivity excludes nonzero integer points on the two half-open radial edges; reflecting (W) to (V+V'-W) puts it in the record triangle; and the resulting time/deficit gives a residue exceeding the current record before (h'). The guided “check” states the final contradiction but not these intermediate implications.

3. **Theorem 6.1, Stage 3 “A unit record edge propagates backwards.”** The proof changes to the unimodular coordinates (Z=AE+BU) and performs a multi-case inequality argument. The guided explanation compresses this entire stage to “a coefficient argument.” This is a comprehension blocker for a nonspecialist even if every inequality is correct. The edge case (e=0) is also not explicitly reconciled with the special time-zero record convention.

4. **Return setup, equation (7.5).** The second vertex identity and transported-side identity are attributed to “the same internal-tower calculation applied to (\varphi-1).” This is a formal setup, not a proved lemma, and the actual tower labels needed for that calculation are not displayed. A student cannot independently reconstruct why both endpoints of (E_\varphi) land on the endpoints of (E_0) from this sentence alone.

5. **Proposition 7.3 (`#part-i-item-42`).** The page defines \(s=r^{-1}\) for the inverse first-return map. In Topics I and IV, (s) already denotes the cyclic side-successor map. Both meanings are live in the proof reader. This is a substantive notation collision: “(s(D)\cap M=\varnothing)” can easily be misread as applying the side successor rather than the inverse return.

6. **Proposition 7.3, figure caption.** The figure rendered inside Topic V is labelled “Plate VI-B.1,” although it occurs in Topic V and introduces Proposition 7.3. The reused plate is mathematically relevant, but the numbering makes the student suspect that a page or dependency has been skipped.

7. **Definition 7.4 (`#part-i-item-43`).** The prose says to project successively through (C_i) onto \(\mathcal L_i\) and finally through (X_{m+1}), but it never writes the chain of maps with domains and codomains. A novice cannot tell at a glance that the intended maps are


   \(\operatorname{aff}(X_0,X_1)\to\mathcal L_2\to\cdots\to\mathcal L_m\to\operatorname{aff}(C_m,C_{m+1}).\)

8. **Proposition 7.5, terminology.** The statement says “strict convexity” is preserved, although Topic I carefully warned that the custom property is a “strict polygon,” not strict convexity in the standard sense. That phrase reintroduces the exact collision the earlier page avoided.

### Needed

- Rebuild Theorem 6.1's educational layer around one complete numerical example. Compute the residue record list, its vectors, one consecutive pair, determinant, (U,\Delta,q,h), the tower heights, and the bijection (F). Then expand Stages 1 and 3 into smaller claims that explicitly explain the lattice-point reflection and the (A,B) coefficient cases.
- Rename the inverse first-return map in Proposition 7.3—e.g. (r^{-1}\) throughout or a new symbol—to avoid collision with the already established side successor (s). If manuscript fidelity requires (s), place a prominent warning before the proposition and never use the two meanings on the same page without subscripts.
- Expand the derivation of equation (7.5), including the tower state corresponding to (\varphi-1), so both endpoint identities and the transported relative interior are proved rather than asserted in setup prose.
- In Definition 7.4, display every perspectivity with its source line, centre, and target line.

### Advised

- Correct or contextualize the “Plate VI-B.1” caption where the global-ledger figure appears on Topic V.
- Define the remaining integer-arithmetic notation before Lemma A.6/Theorem 6.1: floor, ceiling, lattice index, and why determinant-one vectors form a \(\mathbb Z^2\)-basis.
- Add one forward-branch and one reverse-branch numerical instance of Proposition 7.3, listing (M,M^\circ,D,R,c,A) explicitly.
- Clarify in Proposition 7.3 that the “corridor motion” is a conditional motion to be constructed globally in Topic VI-B; this proposition is proving the label ledger it must satisfy.
- Replace “strict convexity” by “strict-polygon property” or “strictness of the displayed polygon” in Proposition 7.5.
- Explain in Remark 6.3 that the ray (L=0) has equation (b=(\kappa/N)h), which is why its slope is (\kappa/N) in the chosen lattice coordinates.

### Would be nice to add

- An interactive residue/tower diagram: choose (N,\kappa), display upper records, and color the two return heights.
- A lattice-sail plate that overlays the record triangle used in Stage 1 and animates the forbidden interior lattice point.
- A projective-corridor diagram with each perspectivity numbered and its source/target line highlighted in sequence.

---

## Topic VI, Part A — Local projective escape

### Overall student verdict

This is the strongest dense page in the reviewed range. It has only three formal results, the slope proof in Lemma 7.6 is genuinely line-by-line, Lemma 7.7 isolates the one-dimensional algebra, and Theorem 7.8 delays the escape choice until all open conditions share one interval. The main remaining issues are a few unintroduced projective symbols and one normal-form assertion that the background contract claims to prove directly but currently only states.

### Parts that genuinely work

- **Lemma 7.6 (`#part-i-item-45`).** Edge, support, and incoming-ray slopes are separately named. Equations (7.31)–(7.33) visibly locate each intersection and preserve the induction invariant.
- **Lemma 7.7 (`#part-i-item-46`).** The proof cleanly separates (a\ne1) from (a=1), and “arbitrarily small” is explicitly defined.
- **Theorem 7.8 (`#part-i-item-47`).** Every perspectivity is checked for degeneracy before composition. The proof constructs one global projectivity, removes the finite poles, factors the determinant, fixes the scale sign, preserves all triple signs, and only then selects (\tau).
- **Plate VI-A.1.** The scalar inequality \(\tau-u(\tau)>0\) and its geometric half-plane meaning are communicated effectively.
- **Triple-sign persistence.** The page uses the finite certificate from Topic II exactly as advertised rather than relying on “small perturbations preserve convexity” as a slogan.

### Questions and unresolved comprehension gaps

1. **Lemma 7.7 (`#part-i-item-46`), normal form.** The background contract says the fractional-linear normal form is “stated and proved directly where it is used,” but the proof begins by asserting


   \(u(\tau)=\frac{a\tau}{1+c\tau}.\)


   A student needs the one-line derivation from \(u(\tau)=(A\tau+B)/(C\tau+D)\), (u(0)=0), and projective rescaling. As written, it is stated but not proved.

2. **Theorem 7.8 (`#part-i-item-47`).** The symbols \(\mathbb P^1(\mathbb R)\), “projective isomorphism,” and the projective completion bar on a line are used heavily. Topic V defines projective completion in words, but it never explicitly says that \(\mathbb P^1(\mathbb R)\) is the real affine line plus its point at infinity, nor what makes a perspectivity an isomorphism of projective lines.

3. **Lemma 7.6, support-slope interval.** The proof states that the full supporting-slope interval at (X_i) is \([s_i,s_{i+1}]\) and that a strict support excludes the endpoints. This is geometrically correct, but the student would benefit from a local two-edge diagram: the slope interval is not a standard fact from one linear-algebra course.

4. **Theorem 7.8, “each coordinate map has at most one pole.”** This follows from fractional-linear form, but it is not connected back to Lemma 7.7's formula. A short reminder would make the common pole-free interval feel proved rather than imported.

### Needed

- Derive the fixed-point normal form in Lemma 7.7 in one line from a general fractional-linear map, matching the background contract's claim.
- Add a minimal projective-line dictionary before Theorem 7.8: \(\mathbb P^1(\mathbb R)\), affine chart, point at infinity, projective isomorphism, and why a perspectivity with centre on neither line is such an isomorphism.

### Advised

- Add a local coordinate plate for Lemma 7.6 showing (c_i<z_i<t_i), the slopes (r_i<s_i<\ell_i<s_{i+1}), and the two sign changes.
- Explicitly connect “at most one pole” to the denominator of a fractional-linear coordinate map.
- In the Theorem 7.8 statement, remind the reader that (X_{m+1}) and all (C_i\) remain fixed while only (X_1,\ldots,X_m\) move.

### Would be nice to add

- A slider for (\tau) showing the recursive intersections and the scalar points (u(\tau),\tau) on the final contact segment.
- A short alternative proof of Lemma 7.7 using the graph of a Möbius transformation and its fixed-point multiplicity.

---

## Topic VI, Part B — Global admissibility and unit return

### Overall student verdict

The page successfully closes the global logical loop. Lemma 7.9 is exhaustive: it assigns every base, tower state, side line, top return, and inequality one mechanism, and Theorems 7.10–7.11 then make the contradiction genuinely short. The student-facing difficulty is scale. The page introduces seven new functions on top of the (M,M^\circ,D,R,c,A,F,H,r,s\) notation imported from Topic V. A short guide with eleven steps does not by itself make a 20,000-character proof digestible.

There are also two concrete precision problems: the purpose text for Theorem 7.11 misdescribes its conclusion, and Remark 7.13 uses \(\operatorname{PGL}_2(\mathbb R)\) without definition.

### Parts that genuinely work

- **Lemma 7.9 (`#part-i-item-48`).** “Exact collinearity” is explicitly distinguished from relative-interior membership. That distinction prevents a common hidden openness gap.
- **Lemma 7.9, proof Stages 2 and 4.** The tower bijection first proves unique global assignment, then the internal/top partition counts (N-\varphi\) and \(\varphi\) sources. This is a real exhaustive ledger.
- **Lemma 7.9, proof Stage 5.** The closing image is checked against all (N-1) nonclosing sides, including sides outside the drawn corridor.
- **Lemma 7.9, proof Stage 6.** The source (k_*=F(a-1,b_*)) is identified explicitly, so (Y\in\operatorname{Ext}(\lambda P_\tau)) is proved rather than inferred from the picture.
- **Theorem 7.10 (`#part-i-item-49`).** It correctly takes the local accumulating escape set only after intersecting it with the global admissibility interval.
- **Theorem 7.11 (`#part-i-item-50`).** Once Lemma 7.9 is available, the contradiction with hereditary image-vertex saturation is exact and concise.
- **Theorem 1.3 (`#part-i-item-3`).** Identity, transversal, and nontransversal regimes are separated cleanly, and the assembly proof does not reopen the internal corridor calculation.

### Questions and unresolved comprehension gaps

1. **Lemma 7.9 (`#part-i-item-48`), notation load.** The new vocabulary defines \(\iota_i,\gamma_i,B_j,\widehat x_k,\widehat V_k\), exact collinearity, and closing defect. The formal statement then immediately also relies on (M,b_*,M^\circ,D,R,c,A,F,H_j,r,s,a,\varphi,\delta,\Delta\). These are imported, but there is no compact symbol table on this physical page. A student repeatedly has to leave the proof to remember whether a symbol is a base, a field, a map, a height, or a set.

2. **Lemma 7.9 and Proposition 7.3 dependency.** The symbol (s) still means (r^{-1}), while earlier topics use (s) for side successor. In the assembly theorem on the same page, “cyclic successor” is again a live concept. This cross-page collision is particularly dangerous here because \(s(k)\) is the source base of a top return, not the next side.

3. **Theorem 7.11 (`#part-i-item-50`), purpose text.** The card says “Uses criticality to force the final return projectivity to be the identity.” The theorem proves \(\Delta=1\): the finite-rotation first-return map advances by one base. It does **not** prove that the corridor holonomy/projectivity is the identity. For a student who has just learned two distinct projectivities and return maps, this wording conflates them.

4. **Remark 7.13 (`#part-i-item-52`).** The formal remark names the fixed-point germ in \(\operatorname{PGL}_2(\mathbb R)\), but PGL is neither in the first-use vocabulary nor in the projective dictionary. A standard linear-algebra student may know (GL_2\) but not the quotient by nonzero scalar matrices.

5. **Theorem 1.3 (`#part-i-item-3`).** The assembly statement uses one-sided contact representation, strict set (I), legal mutation, \(\sigma\), and \(\mathcal E(P)\). These are valid imports from earlier topics, but the only local vocabulary entries are “complete transversal” and “return dichotomy.” As the principal theorem is meant to be reusable, it needs a compact notation recap independent of the reader's memory of Topic IV.

6. **Lemma 7.9, forward/reverse label maps.** The proof is complete but has no small instance in which one can list the chain labels (\iota_i\), contact labels (\gamma_i\), moved bases, tower states, and the four top-return classes simultaneously. Without such an instance, the reader can check formulas locally but cannot form a global mental model.

7. **Typography in equation (7.53).** The rendered expression reads as \(\operatorname{relint}(\widehat E)_k(\tau)\), while the surrounding prose treats \(\widehat E_k(\tau)\) as the side. Even if the manuscript source is unambiguous, the webpage grouping invites a student to wonder whether the index applies before or after relative interior.

### Needed

- Correct Theorem 7.11's purpose text to say that criticality forces the **first-return step (\Delta) to equal one**, not that a projectivity is the identity.
- Remove the (s)-notation collision by renaming the inverse return map or qualifying it throughout Topics V–VI. This is even more important on VI-B because side successor and return successor are both discussed.
- Define \(\operatorname{PGL}_2(\mathbb R)\) in Remark 7.13, or replace it by “fractional-linear projectivities of the real projective line” if the group notation adds no value.
- Add a persistent notation dashboard before Lemma 7.9, grouped by type: arithmetic data, base/field sets, return maps and heights, local chain labels, and deformed point functions. The page is logically complete but not presently accessible to the stated reader without this map.

### Advised

- Work one small forward-branch example through all of Lemma 7.9: list (M,M^\circ,D,R,c,A\), the relevant (F(t,j)\), the (B_j\), and which mechanism handles each top return.
- Split the complete proof of Lemma 7.9 into six nested disclosures or anchored subsections matching its own six stages, while preserving one uninterrupted formal-proof option.
- Add an “assembly notation” box before Theorem 1.3 defining \(\mathcal E(P),\chi,I,s,\sigma,\delta,\varphi\) and linking each to its first proof.
- Correct the grouping of \(\operatorname{relint}(\widehat E_k(\tau))\) in equation (7.53) if the current rendering reflects the generated source.
- In Theorem 7.10, state explicitly that the half-plane containing the nonincident chain vertex is the positive side of (G_c\) by the established cyclic orientation.

### Would be nice to add

- A global-deformation animation with a toggle for internal sources, (D\), (R\), (A\), and the closing field (c\).
- A “trace one source vertex” control that follows it from base through tower levels to its top-return side.
- A one-page downloadable notation sheet for Topics IV–VI.

---

## Cross-page conclusions from Pass 2

### What the reader already does unusually well

- It preserves complete formal statements and proofs while exposing intuition separately.
- It is honest about historical antecedents and does not use a Karpelevič-only occurrence as an automatic “previously known” badge.
- It gives exact source locations for major imported areas rather than a decorative bibliography alone.
- It repeatedly turns vague perturbation language into finite common-neighbourhood arguments.
- It treats endpoint ownership and orientation reversal with exceptional care.
- The visual hierarchy makes definitions, manuscript text, proof, guided proof, and source status easy to distinguish.

### Highest-priority recurring issues

1. **Define the contact-system symbols before their first formal use.** The missing Topic I dictionary propagates into the incorrect Topic IV dependency claim and the assembly theorem's notation load.
2. **Do not reuse (s) for both side successor and inverse first return.** This is the most dangerous cross-topic notation collision.
3. **Match the educational layer to proof density.** Lemma A.1, Lemma 5.5, Theorem 6.1, and Lemma 7.9 need multi-stage worked examples, not only high-level summaries.
4. **Separate maps that are conceptually different.** “Contact rotation,” “cyclic successor,” “first-return map,” and “corridor holonomy” should never be described by interchangeable words such as “the return projectivity.”
5. **Make every imported address truthful.** A direct link is valuable only when the linked result actually defines or proves the object claimed.

### Bottom-line assessment

The mathematical narrative is recoverable and, in most places, rigorous. A determined graduate student could use the reader successfully. A student with only the advertised linear-algebra background would understand Topics I–III with a few repairs, but would not yet be able to reconstruct Lemma 5.5, Theorem 6.1, or Lemma 7.9 without substantial external help. The next revision should therefore focus less on adding more thematic prose and more on three concrete interventions: truthful notation/dependency dictionaries, worked numerical state examples, and finer-grained unpacking of the three densest proofs.
