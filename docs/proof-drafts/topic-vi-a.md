# Topic VI-A authoring blueprint

## Page identity

- Working title: **Projective escape, Part A: the local corridor**
- Reader marker: **Topic VI of XIV, Part A**
- Proposed local route: **/proof/topic-vi-a/**
- Status: local authoring blueprint only. Do not publish from this file.
- Canonical source: Complete_Karp_arXiv.pdf, PDF viewer pages 41-45.
- Manuscript section: the remainder of Section 7.1, after Proposition 7.5 and before Section 7.2.
- Reader promise: by the end of this page, the reader should understand how a chain of elementary projections becomes one fractional-linear return map, why that map has an escaping nearby point, and how the escape is translated into a strict half-plane inequality without losing convexity.

This is one of the two most technical pages in Part I. Its length should be determined by the number of logical steps, not by the length of the printed manuscript. Keep the complete manuscript proofs, but insert explanatory diagrams and short local glosses inside them. Do not place a second paraphrased proof after the complete proof.

## Exact manuscript inventory

Retain the following statement numbers, kinds, titles, labels, and complete proofs.

1. **Lemma 7.6, Convex-chain calibration** (label lem:holonomy-calibration), PDF viewer pages 41-43.
2. **Lemma 7.7, Fixed-point escape for a projectivity** (label lem:projective-fixed-point-escape), page 43.
3. **Theorem 7.8, Projective corridor escape** (label thm:projective-corridor-escape), pages 43-45.

Proposition 7.5 begins on Topic V and its proof ends at the top of viewer page 41. The website must keep the whole proposition on Topic V. This page imports its conclusion through a linked recap and begins with Lemma 7.6.

Retain all displayed equations (7.23)-(7.47), with the manuscript numbers. In particular, do not replace the inequalities (7.25)-(7.37) by an informal picture: the picture illustrates the sign chain, while the equations prove it.

## The question that organizes the page

The page should open with:

> Suppose a point starts on the first side of a projective corridor. Projecting through one contact after another eventually returns it to the final contact line. If the return map is not exactly the identity, can an arbitrarily small movement of the starting point push the closing image to the polygon's interior side?

Then give the three-result answer:

- Lemma 7.6 calibrates one test point and proves that its return lies strictly between the final two contacts.
- Lemma 7.7 turns that strict between-ness into a local inequality for a fractional-linear map.
- Theorem 7.8 converts the one-dimensional inequality into the desired two-dimensional half-plane escape, while preserving strict convex order.

The page must distinguish these three levels visually: geometric calibration, one-dimensional projectivity, and moving polygonal chain.

## Dependency ledger

### Imported from Topic V

Use one expandable "Corridor contract" panel. It must state the exact data rather than merely cite Topic V:

- A projective corridor has a proper consecutive boundary chain \(X_0,\ldots,X_{m+1}\), with \(m\geq2\).
- For \(2\leq i\leq m+1\), the contact centre \(C_i\) lies in \(\operatorname{relint}[X_{i-1},X_i]\).
- For \(2\leq i\leq m\), the line \(L_i\) is a strict support at \(X_i\).
- The corridor holonomy projects from the initial side line through \(C_2,\ldots,C_m\), then through \(X_{m+1}\), to the line through \(C_m,C_{m+1}\).
- Proposition 7.5 supplies an affine chart in which the polygon is bounded, the chain is a lower convex graph over strictly increasing coordinates, consecutive edge slopes are strictly increasing, endpoint strict supports are parallel, and none of the chain lines or \(L_i\) is parallel to them.
- The projective transformation and its inverse preserve all side segments and relative interiors belonging to the polygon.

### Imported from Topic I

- The determinant sign of every cyclically ordered triple of vertices of a strict polygon is nonzero and common.
- The triple-sign criterion is an open condition for a finite family of continuous point functions: if all the signs persist, the moving points remain distinct, cyclically ordered extreme points of a strict polygon.
- Relative interior is preserved by the admissible projective chart from Proposition 7.5.

The page must link "triple-sign criterion" to its exact earlier statement. Do not assume the reader remembers the phrase.

### Export to Topic VI-B

The only contract needed later is Theorem 7.8:

- There is a pole-free interval around \(\tau=0\).
- Arbitrarily close to \(0\), one can choose a nonzero signed \(\tau\) for which the closing point \(Y(\tau)\) lies strictly on the side of the moving closing line containing \(X_{m-1}(\tau)\).
- Throughout a sufficiently small interval, the moving chain remains in strict convex position with its original order.

Topic VI-B must not depend on the internal slope variables \(s_i,\ell_i,r_i,\eta\); it imports only this theorem-level contract.

## First-use glossary and symbol register

### Projective geometry

- Projective line \(\mathbb P^1(\mathbb R)\): an ordinary real line together with one point at infinity. It is the natural domain on which a fractional-linear map has no missing direction, although it may have a pole in a chosen affine coordinate.
- Projective completion \(\overline A\) of an affine line \(A\): the corresponding projective line. The manuscript suppresses the overline in some geometric notation; the page should explain the convention once.
- \(AB\): the projective line through two distinct points \(A,B\). This is not multiplication.
- Perspectivity from centre \(C\): the map sending a point \(Z\) on one projective line to the intersection of \(CZ\) with another projective line.
- Projective isomorphism: a bijective projectivity between projective lines.
- Pole: the affine coordinate value mapped to the point at infinity by a projectivity.
- Pole-free interval: an ordinary real interval on which all projective intersections remain finite and the affine formulas are continuous.
- Fractional-linear map: \(u(\tau)=(a\tau+b)/(c\tau+d)\), with \(ad-bc\neq0\). After \(u(0)=0\), it has the local form \(a\tau/(1+c\tau)\) after rescaling.
- Fixed-point germ at \(0\): the behaviour of the projectivity in an arbitrarily small neighbourhood of its fixed point \(0\). Avoid using "germ" in the main theorem statement; define it only if referenced in the closing outlook.

### Convex-chain coordinates

- \(t_i,f_i\): the horizontal and vertical coordinates of \(X_i\) in the admissible chart.
- \(s_i\): the slope of edge \([X_{i-1},X_i]\). Strict convexity of the lower graph gives \(s_1<\cdots<s_{m+1}\).
- \(\ell_i\): the slope of strict support \(L_i\) at \(X_i\). It lies strictly between the two incident edge slopes: \(s_i<\ell_i<s_{i+1}\).
- \(C_i=(c_i,\chi_i)\): the contact point on the \(i\)-th side; \(t_{i-1}<c_i<t_i\).
- \(Z_1=X_0\) and \(Z_i=L_i\cap Z_{i-1}C_i\): the calibrated chain of projected points.
- \(R_i=Z_{i-1}C_i\) and \(r_i\): its line and slope.
- \(H=Z_mX_{m+1}\) and \(\eta\): the final projected line and its slope.
- \(W_*=Z_mX_{m+1}\cap C_mC_{m+1}\): the calibrated return point. Explain that \(\operatorname{relint}[C_{m+1},C_m]\) and \(\operatorname{relint}[C_m,C_{m+1}]\) are the same open segment.

### Motion and half-plane language

- Signed parameter \(\tau\): the seed is \(X_1(\tau)=(1-\tau)X_1+\tau X_0\). Positive \(\tau\) moves toward \(X_0\); negative \(\tau\) moves through \(X_1\) in the opposite direction. The theorem may need either sign.
- Recursive moving chain: \(X_i(\tau)=L_i\cap X_{i-1}(\tau)C_i\).
- \(Y(\tau)=(1-\tau)C_{m+1}+\tau C_m\): the corresponding point on the final contact line.
- Normalized final-line coordinate \(\upsilon\): \(\upsilon(C_{m+1})=0\) and \(\upsilon(C_m)=1\).
- Holonomy coordinate \(u=\upsilon\circ H\): the one-dimensional projectivity sending seed parameter to return parameter.
- Calibration sign \(\varepsilon\): chosen so the preceding chain vertex gives a positive determinant.
- \(D(t,\tau)\): the signed determinant that tests on which side of the moving closing line the point \(z(t)\) lies.
- \(\gamma(\tau)\): the nonzero scale factor in \(D(t,\tau)=\gamma(\tau)(t-u(\tau))\). Its positivity near \(0\) makes the sign of the planar half-plane test agree with the scalar difference \(t-u(\tau)\).

## Recommended page sequence

### 1. A visual recap, not a second introduction

Show the final corridor plate from Topic V in a compact form. Let the reader press "follow one point" to see the chain

\[
\operatorname{aff}(X_0,X_1)
\longrightarrow L_2\longrightarrow\cdots\longrightarrow L_m
\longrightarrow \operatorname{aff}(C_m,C_{m+1}).
\]

The caption must say: each arrow is projection through a labelled centre, not an orthogonal projection. The composition is a projectivity of lines.

### 2. Lemma 7.6: calibrating one return

State the lemma in full. Before the proof, include an intuition panel:

> In the special chart from Proposition 7.5, convexity is encoded by increasing slopes. Every projection can therefore be located by comparing two line values at two horizontal coordinates. Those repeated sign changes force the final return point to land strictly between the last two contacts.

The phrase "calibration" means that the seed is the particular point \(Z_1=X_0\). It does not mean a numerical approximation.

#### Complete proof architecture for Lemma 7.6

1. Apply Proposition 7.5 and reuse the same symbols after the projective transformation. Explain why the recursion defining \(Z_i\) is projectively natural: projectivities preserve lines and incidences.
2. Write \(X_i=(t_i,f_i)\) with \(t_0<\cdots<t_{m+1}\), and define edge slopes \(s_i\).
3. Since the chain is the lower graph of a strict polygon, derive \(s_1<\cdots<s_{m+1}\).
4. For each strict support \(L_i\), explain the supporting-slope interval and obtain \(s_i<\ell_i<s_{i+1}\).
5. Express \(C_i=(c_i,\chi_i)\) on its side: \(t_{i-1}<c_i<t_i\) and \(\chi_i=f_i+s_i(c_i-t_i)\).
6. Begin the induction. At \(i=2\), compute \(r_2\) as the positive weighted average in (7.29), hence \(s_1<r_2<s_2\).
7. Inductive step: the previous point lies above the backward extension of the next edge. Since \(z_{i-1}<t_{i-1}<c_i\), subtract line values and divide by a positive denominator to get \(r_i<s_i\).
8. Compare \(R_i\) and \(L_i\) at \(t=c_i\): equation (7.31) is positive because \(\ell_i>s_i\) and \(t_i>c_i\).
9. Compare them at \(t=t_i\): equation (7.32) is negative because \(r_i<s_i\).
10. Since \(r_i<\ell_i\), the lines meet once. The opposite signs locate \(Z_i\) strictly between \(c_i\) and \(t_i\), so \(Z_i\) is finite.
11. Use (7.33) to establish the induction's extra claim: \(Z_i\) lies above the backward extension of the following edge.
12. At the final step, compute the slope \(\eta\) of \(H=Z_mX_{m+1}\) as a strict weighted average of \(\ell_m\) and \(s_{m+1}\); hence \(\ell_m<\eta<s_{m+1}\).
13. Compare \(H\) with the contact line \(K=C_mC_{m+1}\). Equations (7.36)-(7.37) give opposite signs at \(c_m,c_{m+1}\).
14. The unique zero lies at a coordinate strictly between those contacts. This is \(W_*\).
15. Apply the inverse admissible projective transformation. Because it maps polygon segments and relative interiors exactly, \(W_*\) lies in the same relative-interior segment in the original chart.
16. Repeat conceptually for the reversed boundary orientation. No internal sign or index rewrite is needed because Proposition 7.5 is reapplied to that oriented chain.

Place a small "sign spine" beside steps 7-14:

\[
r_i<s_i<\ell_i<s_{i+1},\qquad
\ell_m<\eta<s_{m+1}.
\]

This spine is a navigation aid, not a substitute for the equations.

### 3. Lemma 7.7: the one-dimensional escape

State the lemma in full. Explain "arbitrarily small" with quantifiers:

> For every neighbourhood of \(0\), however small, at least one nonzero \(\tau\) in that neighbourhood satisfies \(\tau-u(\tau)>0\).

#### Complete proof architecture for Lemma 7.7

1. Since \(u\) is a nonconstant projectivity fixing \(0\), choose a pole-free neighbourhood and write \(u(\tau)=a\tau/(1+c\tau)\), \(a\neq0\).
2. Subtract to obtain (7.40):
   \[
   \tau-u(\tau)=\frac{\tau(1-a+c\tau)}{1+c\tau}.
   \]
3. If \(a\neq1\), choose the sign of \(\tau\) so \(\tau(1-a)>0\). Then make \(|\tau|\) small enough that both denominator and perturbed numerator retain their signs.
4. If \(a=1\), use \(0<u(1)<1\) to infer \(c>0\), and compute the positive expression \(c\tau^2/(1+c\tau)\) for all sufficiently small nonzero \(\tau\).
5. Because the permitted size can be made arbitrarily small in either case, the desired parameters accumulate at \(0\).

Add two mini-plots, one for \(a<1\) and one for \(a=1,c>0\). They must be generated from exact rational coefficients and labelled as illustrations, not as proof.

### 4. Theorem 7.8: from scalar escape to geometric escape

State the theorem in full. Then show the architecture in one line:

\[
\text{corridor incidences}
\Rightarrow
\text{global line projectivity}
\Rightarrow
\tau-u(\tau)>0
\Rightarrow
\text{positive half-plane determinant}.
\]

#### Complete proof architecture for Theorem 7.8

**Part 1: verify the projective maps.**

1. Define the projective source and target lines \(A_1,\ldots,A_m,K\).
2. For the first projection, show \(C_2\) lies on neither \(A_1\) nor \(A_2\).
3. For each middle projection, use \(C_i\in\operatorname{relint}[X_{i-1},X_i]\) and strictness of both adjacent supports to exclude the centre from source and target lines.
4. For the closing projection, prove \(X_{m+1}\) lies on neither \(A_m\) nor \(K\). The second exclusion uses the fact that otherwise an adjacent contact would lie on the wrong side line.
5. Conclude that every projection is a projective isomorphism, so their composition with the compactified seed parametrization is one global projectivity \(H:\mathbb P^1(\mathbb R)\to K\).

**Part 2: normalize and calibrate the return.**

6. Define \(\upsilon\) on \(K\) by the two contact values, and set \(u=\upsilon\circ H\).
7. At \(\tau=0\), the recursion returns \(C_{m+1}\), so \(u(0)=0\).
8. At \(\tau=1\), the seed is \(X_0\); projective naturality identifies the returned point with \(W_*\) from Lemma 7.6. Since \(W_*\) lies strictly between the contacts, \(0<u(1)<1\).

**Part 3: remove poles locally.**

9. At \(\tau=0\), every recursive intersection is the original finite vertex and the closing intersection is \(C_{m+1}\).
10. Each projective coordinate map has at most one pole. Choose an open interval \(I\) around \(0\) avoiding every one of the finitely many poles.
11. On \(I\), all \(X_i(\tau)\), \(W(\tau)\), and \(u(\tau)\) are finite and continuous, and the local recursion agrees with the global projectivity.
12. Apply Lemma 7.7 but postpone choosing \(\tau\) until all convexity and sign conditions have also been made open.

**Part 4: translate the scalar inequality into a half-plane test.**

13. Parametrize the final contact line by \(z(t)=(1-t)C_{m+1}+tC_m\).
14. Choose \(\varepsilon\) so the preceding vertex \(X_{m-1}\) determines the positive side of the original closing line.
15. Define \(D(t,\tau)\) by (7.45). Because \(z(u(\tau))\) is the line intersection, \(D\) factors as \(\gamma(\tau)(t-u(\tau))\).
16. Write \(C_m=(1-\sigma)X_{m-1}+\sigma X_m\), \(0<\sigma<1\), and compute \(\gamma(0)>0\) in (7.47).
17. Shrink \(I\) so \(\gamma(\tau)>0\) throughout.

**Part 5: preserve strict convex order and choose the parameter.**

18. At \(\tau=0\), all cyclic triple determinants are nonzero with one sign. There are finitely many.
19. By continuity, shrink \(I\) so all signs persist. Invoke the earlier triple-sign criterion to conclude that the moving chain remains distinct, in the same cyclic order, and in strict convex position.
20. Therefore \(D(t,\tau)>0\) is exactly the open half-plane containing \(X_{m-1}(\tau)\).
21. Now choose a nonzero \(\tau\in I\) with \(\tau-u(\tau)>0\).
22. Evaluate \(D(\tau,\tau)=\gamma(\tau)(\tau-u(\tau))>0\). Since \(Y(\tau)=z(\tau)\), this is the required escape.
23. The escape parameters accumulate at \(0\), so the deformation can be made arbitrarily small.

End the page with a precise caution:

> Theorem 7.8 moves only the displayed corridor chain. It has not yet proved that all \(N\) polygon vertices remain consistently labelled, or that every image vertex still lies in the polygon. Topic VI-B is the global admissibility audit.

## Deterministic figure plan

1. **Plate VI-A.1: A chain of perspectivities.** An SVG with selectable steps. Each step draws the line through the current point and centre \(C_i\), then marks its intersection with \(L_i\). A static numbered-frame alternative is required.
2. **Plate VI-A.2: Increasing slopes in the admissible chart.** Plot a convex piecewise-linear lower chain with \(s_1<\cdots<s_{m+1}\), and strict support slopes inside \((s_i,s_{i+1})\).
3. **Plate VI-A.3: The induction window.** Zoom on one stage, showing the opposite signs of \(R_i-L_i\) at \(c_i\) and \(t_i\), and the resulting intersection \(c_i<z_i<t_i\).
4. **Plate VI-A.4: Final calibration.** Show \(H-K\) changing sign between \(C_m\) and \(C_{m+1}\), forcing \(W_*\) into their open segment.
5. **Plate VI-A.5: Two projective fixed-point germs.** Exact examples for the cases \(a\neq1\) and \(a=1,c>0\), with the region \(\tau-u(\tau)>0\) marked.
6. **Plate VI-A.6: Scalar-to-planar dictionary.** The final contact line is parametrized from \(0\) to \(1\); the point \(u(\tau)\) is the moving-line intersection and \(\tau\) is \(Y(\tau)\). The signed distance along the line corresponds to the determinant side test.
7. **Plate VI-A.7: Local escape.** Two frames, \(\tau=0\) and an escaping small \(\tau\), showing the closing point on the interior side while triple orientation remains unchanged.

No image should depict the projections as perpendicular, preserve Euclidean angles, or imply that the chosen projective chart is canonical.

## Provenance and source treatment

- Lemma 7.6: **New result**. Source note: the precise convex-chain calibration appears to be new; Karpelevič (1951) is the closest antecedent for the projective mechanism.
- Lemma 7.7: **Classical result**. Source category: elementary real projective geometry. The manuscript supplies the complete fractional-linear proof, so no external theorem needs to be taken on trust.
- Theorem 7.8: no public badge. Source note: a projective escape mechanism is present in Karpelevič's argument, but the exact theorem is not labelled "Previously known" without independent verification of a complete source proof.

The page bibliography should repeat the full Karpelevič reference and link "classical real projective geometry" to the project's subject-level source note. Do not invent a theorem number from an external textbook.

## Preliminary adversarial read 1: novice dependency attack

### Findings and incorporated corrections

1. The notation \(AB\) looks like multiplication. Define it as the projective line through two points before equation (7.23).
2. "Projectively natural" is too compressed. Explain that a projectivity maps lines to lines and preserves intersections, so applying the map before or after the recursion gives the same point.
3. The many slopes can become alphabet soup. Keep a persistent legend: \(s\) for side, \(\ell\) for support, \(r\) for incoming ray, and \(\eta\) for the final ray.
4. The reason for each strict inequality is not visually obvious. Add the sign-spine panel and link each inequality to the proof line that establishes it.
5. A signed \(\tau\) may surprise readers who think interpolation requires \(0\leq\tau\leq1\). Define negative \(\tau\) as affine continuation and explain that convexity is recovered by the finite determinant audit, not by remaining on the initial segment.
6. "Arbitrarily small" must not be read as "some small number." Give the neighbourhood quantifier before Lemma 7.7.
7. The map \(H\) and line \(H=Z_mX_{m+1}\) use the same letter in the manuscript proof. In explanatory prose call the line "the final ray line" while retaining the manuscript formulas; use \(\mathcal H\) only in diagrams if needed, with an explicit notation note.
8. Half-plane orientation is otherwise opaque. Show how \(\varepsilon\) is chosen from the preceding vertex and why \(\gamma(0)>0\).

## Preliminary adversarial read 2: proof and precision attack

### Findings and incorporated corrections

1. The slope proof is valid only after Proposition 7.5 creates a suitable affine chart. Never discuss slopes before importing that proposition.
2. A projective image of a convex polygon is not automatically a bounded convex polygon in an arbitrary chart. Import the exact segment-preservation and boundedness contract from Proposition 7.5.
3. The final intersection lines must be distinct. Retain the incidence exclusions in Theorem 7.8 and the distinctness conclusion of Lemma 7.6.
4. Lemma 7.7 requires a nonconstant projectivity. Theorem 7.8 must explicitly obtain this from a composition of projective isomorphisms, not merely call the holonomy a projectivity.
5. The condition \(0<u(1)<1\) depends on the order of the normalized contacts. Retain \(\upsilon(C_{m+1})=0,\upsilon(C_m)=1\) and Lemma 7.6's exact relative-interior conclusion.
6. Pole avoidance and preservation of convexity are two separate interval shrinkages. Show each shrinkage and choose the escaping parameter only after all open conditions are fixed.
7. The sign factorization \(D(t,\tau)=\gamma(\tau)(t-u(\tau))\) needs uniqueness of the line intersection. Retain the distinct-line statement on the whole pole-free interval.
8. The theorem proves local corridor convexity, not global polygon invariance. End with the explicit limitation and defer global admissibility to VI-B.

## Completion checklist for the eventual webpage

- The page is labelled Topic VI of XIV, Part A, not Topic XV.
- All three statements retain manuscript numbering and full proofs.
- Proposition 7.5 is imported in full contractual form but not duplicated.
- Every projective term is defined before use.
- Every pole exclusion and interval shrinkage remains visible.
- The slope legend persists while Lemma 7.6 is on screen.
- All SVG examples use exact coordinates and verify their inequalities in code.
- The figures never imply orthogonal projection or angle preservation.
- The page does not claim global admissibility.
- Proof panels are keyboard-operable, closed by default, and contain anchored stages.
- Nothing is deployed before author review.
