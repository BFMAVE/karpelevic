# Topic VI-B authoring blueprint

## Page identity

- Working title: **Projective escape, Part B: global admissibility and unit return**
- Reader marker: **Topic VI of XIV, Part B**
- Proposed local route: **/proof/topic-vi-b/**
- Status: local authoring blueprint only. Do not publish from this file.
- Canonical source: Complete_Karp_arXiv.pdf, PDF viewer pages 45-51.
- Manuscript sections: Sections 7.2 and 7.3, followed by the proof of Theorem 1.3.
- Reader promise: by the end of the page, the reader should see every local moving point assigned to exactly one of the \(N\) polygon labels, every image edge accounted for, every nonclosing side inequality preserved, and the one remaining escape converted into a contradiction with hereditary saturation.

This page is the global audit that makes the local projective argument mathematically usable. It should be longer than the printed six pages if needed. The educational goal is not to hide the bookkeeping; it is to make the bookkeeping legible and to show why each class of indices exists.

## Exact manuscript inventory

Retain these numbers, kinds, titles, labels, and proofs:

1. **Lemma 7.9, Deformation admissibility for the global return corridor** (label lem:deformation-admissibility), PDF viewer pages 45-49.
2. **Theorem 7.10, Global return-corridor deformation** (label thm:global-return-deformation), page 50.
3. **Theorem 7.11, Projective unit return** (label thm:unit-return), page 50.
4. **Remark 7.12, Boundary-value ledger for no-skipping** (label rem:no-skipping-boundary-ledger), page 50.
5. **Remark 7.13, Protective invariant** (label rem:protective-holonomy), page 50.
6. **Theorem 1.3, Critical-polygon contact-return normal form** (label thm:critical-polygon-normal-form): display its complete statement again through an expandable "What has now been proved" panel, with a source link to its first statement on PDF viewer pages 3-4; give its complete assembly proof from viewer pages 50-51.

Retain equations (7.48)-(7.61), the state partition (7.60), and all five conclusions (i)-(v) of Lemma 7.9. The manuscript proof has six stages; the website proof must retain all six and make their relation to conclusions (i)-(v) explicit.

## Opening orientation

Start with the limitation left by Topic VI-A:

> The local corridor theorem moves only \(m\) displayed vertices. An invariant \(N\)-gon has \(N\) labelled vertices and \(N\) image incidences. A local escape is useful only if every label, side, and image is still valid after the movement.

Then show the global target:

\[
\text{one local seed motion}
\longrightarrow
\text{all tower vertices}
\longrightarrow
\text{all return edges}
\longrightarrow
\text{one closing inequality}
\longrightarrow
\text{one interior image vertex}.
\]

The phrase "global admissibility" must be defined here: the moved points remain the cyclic extreme vertices of a strict \(N\)-gon \(P_\tau\), satisfy \(\lambda P_\tau\subseteq P_\tau\), and retain the prescribed image contacts except at the deliberately opened closing edge.

## Dependency ledger

### Imported from Topic VI-A

- The corridor motion \(X_1(\tau),\ldots,X_m(\tau)\) is finite and continuous on a pole-free interval around \(0\).
- It preserves strict convex order for sufficiently small \(\tau\).
- Arbitrarily small nonzero parameters make \(Y(\tau)\) lie on the interior side of the moving closing line.

### Imported from Topic V

Repeat the exact contracts in an expandable panel:

- The tower map
  \[
  F(t,j)=[j+t\kappa]_N
  \]
  is a bijection from the two-height state set to all \(N\) polygon labels.
- Internal tower steps satisfy exact endpoint propagation.
- The first-return map \(r\) is addition of \(\Delta\) on \(B=\{1,\ldots,\varphi\}\), with inverse \(s\).
- The sets \(D,R,\{c\},A\) are disjoint and exhaust \(B\).
- The source relations are \(s(R)=M^\circ\), \(s(c)=b_*\), while sources for \(D\) and \(A\) lie outside \(M\).
- \(D\) contains moving side lines controlled by the corridor, \(R\cup A\) contains fixed side lines, and \(c\) is the unique closing field.
- Lemma 7.2 has already verified that the selected corridor is proper in every boundary case needed here.

### Imported from Topics I-II

- The simultaneous convex-admissibility lemma: finitely many strict determinant inequalities and relative-interior incidences persist for a sufficiently small continuous perturbation.
- A point satisfies all strict side inequalities of a strict polygon exactly when it is in the polygon's interior.
- An invertible linear map sends extreme points bijectively to extreme points.
- **Hereditary image-vertex saturation, Theorem 3.2:** for an \(N\)-critical map, every strict invariant polygon with at most \(N\) vertices has exactly \(N\) vertices, every side is touched by the image polygon, and every vertex of the image polygon lies on the boundary of the outer polygon. This exact third clause is the contradiction used in Theorem 7.11.

### Imported from Topics III-IV

- The right-admissible contact system and all endpoint identities used to construct the towers.
- The geometric realization of legal contact mutations.
- The existence of a mutation-reachable strict interval with length \(\varphi\geq\delta\).
- If \(\varphi=\delta\), that interval is already a complete transversal; projective no-skipping is needed only when \(\varphi>\delta\).

### Export from this page

- Theorem 7.11 gives \(\Delta=1\) whenever \(\varphi>\delta\).
- The proof of Theorem 1.3 combines this with the transversal and identity cases to complete the critical-polygon contact-return normal form.
- Topic VII may use only that theorem-level return dichotomy, not the deformation's internal index sets.

## First-use glossary and symbol register

### Branch labels

- \(\iota_i\): the polygon label of chain vertex \(X_i\). It equals \(i\) in the forward branch and \(\varphi-i\) in the reverse branch.
- \(\gamma_i\): the side-field label of contact \(C_i\). It equals \(i\) forward and \(\varphi-i+1\) in reverse.
- \(M\): the moved bases; \(M^\circ\): moved bases constrained to a pulled-back strict support.
- \(b_*\): the seed base; \(c=r(b_*)\): the closing field.
- \(a=H_{b_*}\): the return height of the seed, equal to \(q\) forward and \(q+h\) in reverse.

Avoid using \(\gamma_i\) on this page before reminding the reader that the same Greek letter was used for an unrelated angle gap elsewhere; local scope should be explicit.

### Global moving polygon

- \(B_j(\tau)\): the base point for tower \(j\). It is a moving chain point when \(j\in M\) and the original \(x_j\) otherwise.
- \(\widehat x_{F(t,j)}(\tau)=\lambda^tB_j(\tau)\): the global vertex function assigned to label \(F(t,j)\). The hat means "deformed," not a unit vector or estimator.
- \(\widehat E_k(\tau)=[\widehat x_{k-1}(\tau),\widehat x_k(\tau)]\): the deformed side with label \(k\).
- \(P_\tau=\operatorname{conv}\{\widehat x_k(\tau):k\in\mathbb Z/N\mathbb Z\}\): the deformed polygon.
- Unique global assignment: the bijection \(F\) gives every label exactly one formula. This is stronger than saying the formulas cover all labels.

### Return-edge registry

- \(\widehat V_k(\tau)=\lambda^{H_{s(k)}}B_{s(k)}(\tau)\): the top image whose target field is \(k\).
- \(\ell_k(\tau)=\operatorname{aff}(\widehat x_{k-1}(\tau),\widehat x_k(\tau))\): the line containing deformed side \(k\).
- Internal state: a tower state whose next step remains inside its tower.
- Top state: the final source state of a tower; its next image is a return point \(\widehat V_k\).
- \(\mathcal D_{\mathrm{int}}\) and \(\mathcal D_{\mathrm{top}}\): the disjoint sets of internal and top source states. Use calligraphic \(\mathcal D\) for the entire state set so it cannot be confused with the field class \(D\).
- Exact collinearity: a return point lies on the line of its assigned side by an algebraic incidence identity.
- Relative-interior persistence: after exact collinearity is known, openness keeps the point away from both side endpoints for small \(\tau\).

### Side inequalities and the defect

- \(G_k(\tau)\): the oriented determinant side test for the closing image \(Y(\tau)\) against side \(k\).
- Nonclosing inequality: \(G_k(\tau)>0\) for \(k\neq c\), meaning \(Y(\tau)\) remains on the interior side of every side other than the closing side.
- Closing defect: the only inequality not guaranteed by continuity alone, \(G_c(\tau)\).
- \(k_*=F(a-1,b_*)\): the source label whose image is \(Y(\tau)\).
- \(Y(\tau)\in\operatorname{Ext}(\lambda P_\tau)\): \(Y\) is an image-polygon vertex because it is the image under invertible multiplication by \(\lambda\) of the polygon vertex \(\widehat x_{k_*}\).
- Unique interior image vertex: every other image vertex lies on \(\partial P_\tau\), while \(Y(\tau)\) lies in \(\operatorname{int}(P_\tau)\).

## Recommended page sequence

### 1. Lemma 7.9 as a five-part contract

Before the statement, show five concise promises matching (i)-(v):

1. Every global vertex label receives one continuous point.
2. Internal tower images propagate exactly.
3. Every strict return edge except the closing edge remains in its assigned side interior.
4. The closing image satisfies every nonclosing side inequality.
5. If it also crosses the closing side inward, the result is an invariant strict \(N\)-gon with exactly one interior image vertex.

Then state Lemma 7.9 in full. The proof should be one expandable panel with six anchored stages. A small sticky proof navigator may list the six stages only while the panel is open.

### 2. Complete proof architecture for Lemma 7.9

#### Stage 1: local chain and fixed endpoints

1. Import strictness of every \(L_i\) and the corridor incidences, so Topic VI-A supplies a pole-free interval \(U_0\).
2. Verify \(X_i(0)=X_i\) inductively. At each intersection, the defining lines meet at \(X_i\) and are distinct.
3. Check that \(X_0\) and \(X_{m+1}\) are not merely drawn as fixed; they are fixed global tower vertices in both branches.
4. Forward branch: use the tower identity at \(F(h,\varphi)=0\) to identify \(\widehat x_0(\tau)=x_0=X_0\), including \(h=0,\varphi=N\).
5. Reverse branch: read both endpoint labels directly as unmoved bases and use \(\Delta\geq3\) to keep the last label in \(B\).

#### Stage 2: unique continuous global labelling

1. Prove \(i\mapsto\iota_i\) is a bijection from the moving chain indices to \(M\). Therefore (7.49) defines each base function once.
2. Invoke the tower bijection \(F\): every polygon label has one and only one state preimage. This turns (7.50) into a unique definition rather than an ambiguous family of formulas.
3. Continuity follows from continuity of each base and of multiplication by fixed \(\lambda^t\).
4. At \(\tau=0\), import the exact tower identity to get \(\widehat x_k(0)=x_k\) for every label.
5. Apply simultaneous convex admissibility to the finite vertex family. Shrink to \(U_1\), so the labels remain distinct extreme points in the original positive cyclic order.
6. Prove the internal propagation equation (7.51) by direct multiplication. Emphasize that it is an identity for every \(\tau\), not merely a stable inequality.

#### Stage 3: register every strict side line

1. Define the deformed side lines \(\ell_k(\tau)\) for \(k\in B\).
2. Prove \(i\mapsto\gamma_i\) maps the middle corridor contacts bijectively onto \(D\) and the final contact to \(c\).
3. For \(k\in D\), identify \(\ell_k(\tau)\) with the recursion line through \(X_{\psi(k)-1}(\tau)\) and fixed contact \(C_{\psi(k)}\).
4. For \(k\in R\cup A\), import Proposition 7.3 to conclude that \(\ell_k(\tau)\) is fixed.
5. Identify the only remaining side \(c\) as the moving closing side, with endpoints \(X_m(\tau),X_{m+1}\). Note that reverse branch endpoint order may oppose the positive orientation, while the geometric segment remains the same.
6. Conclude that \(D,R,\{c\},A\) account for every strict side exactly once.

#### Stage 4: register every return edge

1. Partition the entire tower-state set into internal and top source states as in (7.60).
2. Count them: \(N-\varphi\) internal states and \(\varphi\) top states. Through the bijection \(F\), these are disjoint source-label sets exhausting all \(N\) vertices.
3. Internal sources are already handled by (7.51).
4. Since \(r\) is a bijection, top edges can be indexed once by their target field \(k\), with source base \(s(k)\).
5. Treat the four field classes separately:
   - For \(k\in D\), the source base is fixed and the fixed top image is the contact point built into the moving side line.
   - For \(k\in R\), the source base moves on a pulled-back support, while the target side line is fixed.
   - For \(k\in A\), source and target line are both fixed.
   - For \(k=c\), the seed return is the unique unconstrained image \(Y(\tau)\).
6. Derive the exact affine formula
   \[
   Y(\tau)=(1-\tau)C_{m+1}+\tau C_m
   \]
   from the seed interpolation and transport identities.
7. Exact collinearity is now known for every nonclosing strict field. Since at \(\tau=0\) each point lies in its side relative interior, apply finite openness to retain every relative-interior incidence on a smaller interval \(U_2\).

This stage should use four stacked visual cards, never a wide table.

#### Stage 5: preserve every nonclosing inequality for \(Y\)

1. At \(\tau=0\), \(Y(0)=C_{m+1}=\xi_c\) lies in the relative interior of the closing side.
2. Therefore it satisfies the strict interior-side inequality for every other side of the original strict polygon.
3. Define \(G_k(\tau)\) for all side labels, not only strict fields.
4. Apply simultaneous convex admissibility to the finite family \((Y(\tau),k)\) for \(k\neq c\).
5. Shrink to one common interval \(U\) on which all \(N-1\) nonclosing inequalities remain positive.

Make explicit why checking all polygon sides matters: many sides are internal tower sides and do not appear in the drawn corridor.

#### Stage 6: exact admissibility and uniqueness of the defect

1. For a source label \(k\), take its unique tower preimage \((t,j)\).
2. If the state is internal, its image is another polygon vertex.
3. If it is a nonclosing top state, its image lies in the relative interior of the assigned side.
4. Thus every image vertex except \(Y\) lies on \(\partial P_\tau\).
5. Set \(k_*=F(a-1,b_*)\). Then \(\lambda\widehat x_{k_*}(\tau)=Y(\tau)\).
6. Since \(\widehat x_{k_*}\) is extreme in \(P_\tau\) and multiplication by nonzero \(\lambda\) is invertible, \(Y\) is extreme in \(\lambda P_\tau\).
7. If \(G_c(\tau)>0\), combine it with the \(N-1\) nonclosing inequalities to place \(Y\) in \(\operatorname{int}(P_\tau)\).
8. Every image vertex is now in \(P_\tau\). Convexity yields \(\lambda P_\tau\subseteq P_\tau\).
9. The boundary register and the single interior point prove
   \[
   \operatorname{Ext}(\lambda P_\tau)\cap\operatorname{int}(P_\tau)=\{Y(\tau)\}.
   \]

### 3. Theorem 7.10: choose the escaping parameter

State the theorem in full. Its short proof should remain complete:

1. Theorem 7.8 supplies arbitrarily small nonzero parameters for which \(Y(\tau)\) lies on the side of the closing line containing \(X_{m-1}(\tau)\).
2. Choose one inside the common admissibility interval \(U\) from Lemma 7.9.
3. Because the vertex order is still strict, the nonincident vertex \(X_{m-1}(\tau)\) lies on the polygon-interior side of the closing side.
4. Thus the escape condition is exactly \(G_c(\tau)>0\).
5. Apply Lemma 7.9(v) to obtain the invariant polygon and unique interior image vertex.

### 4. Theorem 7.11: why skipping is impossible

Before the theorem, restate the target:

- \(\Delta>1\) means the first return skips a strict base.
- Theorem 7.10 turns such a skip into an invariant replacement polygon with an interior image vertex.
- Hereditary saturation forbids any image vertex from leaving the boundary.

Then state and prove Theorem 7.11:

1. Assume \(\Delta>1\).
2. Lemma 7.2 supplies a proper corridor in every boundary case.
3. Lemma 7.1 and Proposition 7.3 supply strict supports and the exact return-edge ledger.
4. Therefore Lemma 7.9 and Theorem 7.10 apply.
5. The resulting strict invariant \(N\)-gon has \(Y(\tau)\in\operatorname{Ext}(\lambda P_\tau)\cap\operatorname{int}(P_\tau)\).
6. This contradicts the image-vertex clause of hereditary saturation.
7. Since \(\Delta\) is a positive integer, the only remaining possibility is \(\Delta=1\).

The contradiction must name the precise clause of Theorem 3.2. Do not summarize it as "criticality is contradicted."

### 5. Boundary-value and invariant remarks

Render Remark 7.12 as four expandable edge-case cards:

- \(\Delta=2\);
- \(2\Delta=\varphi+1\);
- \(h=0\), equivalently \(\varphi=N\);
- arbitrary orbit number \(\delta\), including \(\delta=1\).

Each card should say exactly which displayed formula remains literal.

Render Remark 7.13 as a closing conceptual panel:

- local protective invariant: the fixed-point behaviour of the normalized holonomy;
- global protective contract: one label per tower state, one mechanism per return edge, one unconstrained closing edge, and all \(N\) side inequalities checked before choosing \(\tau\).

### 6. Assembly proof of Theorem 1.3

Show the full theorem statement in an expandable panel, then give the manuscript's complete assembly proof. Organize the proof by return regime without a comparison table:

1. Choose an adapted complex coordinate.
2. Import hereditary saturation.
3. Use least-area selection and cyclic interlacing to obtain a one-sided contact representation.
4. **Identity case \(\kappa=N\):** the contact rotation is the identity, every contact is strict, no legal mutations exist, and \(\varphi=N=\delta\).
5. **Nonidentity case \(1\leq\kappa<N\):** import exact indexed surgery and mutation covariance.
6. Choose a lexicographically minimal mutation-reachable strict set. Topic IV makes it one interval of length \(\varphi\geq\delta\).
7. **Transversal case \(\varphi=\delta\):** one strict point lies in each orbit, so every return time is \(N/\delta\).
8. **Nontransversal case \(\varphi>\delta\):** Theorem 6.1 gives a two-height return section and a first-return rotation by \(\Delta\); Theorem 7.11 forces \(\Delta=1\).
9. Conclude all four parts of Theorem 1.3, including conjugacy invariance.

End with a "What has genuinely been achieved" paragraph:

> The intrinsic polygonal engine is now complete. It has proved that every nontransversal first return advances to the adjacent strict base. No Farey fraction, stochastic matrix, or scalar boundary equation has yet been used.

## Deterministic figure plan

1. **Plate VI-B.1: From one moving base to all \(N\) labels.** Show base functions at level zero, powers of \(\lambda\) filling towers, and the bijection \(F\) assigning each cyclic label once.
2. **Plate VI-B.2: Unique assignment test.** For a small exact tower example, colour every state and its polygon label; a checksum panel verifies no missing or repeated label.
3. **Plate VI-B.3: Side-line registry.** Four vertically stacked diagrams for \(D,R,\{c\},A\), indicating moving/fixed source and moving/fixed target line.
4. **Plate VI-B.4: Internal versus top sources.** Partition a tower diagram into \(N-\varphi\) internal arrows and \(\varphi\) top arrows.
5. **Plate VI-B.5: All side inequalities.** Draw the corridor in one colour but show faintly every other polygon side; mark the \(N-1\) inequalities preserved by openness and the single closing test \(G_c\).
6. **Plate VI-B.6: One interior image vertex.** Two exact-coordinate frames: at \(\tau=0\), all image vertices touch the boundary; after escape, only \(Y(\tau)\) is interior.
7. **Plate VI-B.7: Saturation contradiction.** Juxtapose the clause "every vertex of \(\lambda P_\tau\) lies on \(\partial P_\tau\)" with the constructed \(Y(\tau)\in\operatorname{int}(P_\tau)\).
8. **Plate VI-B.8: The return dichotomy.** A flow diagram with identity, transversal, and nontransversal branches, ending respectively in identity return, orbit-length return, and adjacent-successor return.

Every figure must be generated from a single exact labelled data model so the visual edge registry cannot disagree with the formulas.

## Provenance and source treatment

- Lemma 7.9: **New result**. Source note: the exact global admissibility contract and exhaustive return-edge audit appear to be new; Karpelevič (1951) is the closest antecedent.
- Theorem 7.10: no public badge. Source note: the global corridor-deformation mechanism has a Karpelevič antecedent, but the exact theorem is not labelled "Previously known."
- Theorem 7.11: no public badge. Source note: no-skipping belongs to the mechanism of Karpelevič's argument; the current page provides a complete proof and makes no independent-knownness claim.
- Remarks 7.12-7.13: no badges. They audit boundary values and explain the invariant.
- Theorem 1.3: no public badge as a single monolithic result. Its hereditary saturation component is classified separately as strengthened; several contact and no-skipping mechanisms have antecedents in Dmitriev-Dynkin and Karpelevič; the exact assembled intrinsic theorem is proved in the manuscript.

Page bibliography:

- N. A. Dmitriev and E. B. Dynkin, "On characteristic roots of stochastic matrices," *Izv. Akad. Nauk SSSR Ser. Mat.* 10(2) (1946), 167-184.
- F. I. Karpelevič, "On the characteristic roots of matrices with nonnegative elements," *Izv. Akad. Nauk SSSR Ser. Mat.* 15(4) (1951), 361-383.

Do not infer a novelty badge for the composite theorem from the novelty of one internal lemma.

## Preliminary adversarial read 1: novice dependency attack

### Findings and incorporated corrections

1. Hats on \(\widehat x,\widehat E,\widehat V\) are easy to miss. Define them as deformed objects and keep original objects un-hatted in all diagrams.
2. \(D\) is both a field class and visually close to the state set. Use \(\mathcal D\) for the state set in explanatory text and reserve \(D\) for the field class.
3. It is unclear why tower formulas cannot conflict. State the bijectivity of \(F\) before defining global vertices, then explicitly say "one preimage, one formula."
4. Exact collinearity and relative-interior membership are different claims. Treat them in that order: algebra first, openness second.
5. A reader may think only corridor sides are checked. Emphasize that \(G_k\) runs over all \(N\) polygon sides, including internal-tower sides absent from the corridor picture.
6. "Unique defect" may sound like a singularity. Define it as the single side inequality not settled by openness.
7. The claim that \(Y\) is extreme in \(\lambda P_\tau\) needs a reason. Show the source vertex \(k_*\) and invoke invertibility of multiplication by \(\lambda\).
8. The final contradiction can feel circular if called merely "criticality." Quote the exact hereditary image-vertex saturation clause.

## Preliminary adversarial read 2: proof and precision attack

### Findings and incorporated corrections

1. The fixed endpoints must be global tower vertices, not merely fixed in the local drawing. Retain both branch-specific label checks in Stage 1.
2. Reverse orientation can invert side endpoint order. State that the unordered segment and affine line are unchanged while determinant orientation is handled by the global positive labelling.
3. The four-set ledger covers strict return fields only. The proof must separately cover all internal tower images and later all polygon side inequalities.
4. Relative-interior persistence uses finitely many incidences and one common interval. Do not choose a different untracked neighbourhood for each field.
5. The inclusion \(\lambda P_\tau\subseteq P_\tau\) follows only after every image vertex is shown to lie in \(P_\tau\). Retain the convex-hull line in Stage 6.
6. Theorem 7.10 must choose its parameter inside the final common admissibility interval, not merely inside the local interval from Topic VI-A.
7. The boundary cases \(\Delta=2\), \(2\Delta=\varphi+1\), and \(h=0\) cannot be dismissed by continuity. Preserve Remark 7.12's literal checks.
8. The proof of Theorem 1.3 must treat \(\kappa=N\) before assuming \(1\leq\kappa<N\), and must not apply Theorem 6.1 in the identity case.

## Completion checklist for the eventual webpage

- The page is Topic VI of XIV, Part B.
- Lemma 7.9 retains all five conclusions and all six proof stages.
- Every one of the \(N\) labels and image sources is accounted for exactly once.
- The four field classes are shown as stacked cards, not a dense table.
- All side inequalities, not just strict fields, are checked for \(Y\).
- The source of the image vertex \(Y\) is explicitly identified.
- The exact hereditary saturation clause is quoted at the contradiction.
- All edge cases in Remark 7.12 are retained.
- Theorem 1.3's full statement and complete assembly proof are present.
- No Karpelevič-only antecedent receives a "Previously known" badge.
- Proofs remain closed by default and fully keyboard accessible.
- Nothing is deployed before author review.
