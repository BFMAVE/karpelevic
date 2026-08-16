# Topic VII authoring blueprint

## Page identity

- Working title: **Farey data and the closed-return product**
- Reader marker: **Topic VII of XIV**
- Proposed local route: **/proof/topic-vii/**
- Status: local authoring blueprint only. Do not publish from this file.
- Canonical source: Complete_Karp_arXiv.pdf, PDF viewer pages 51-58, with the end of Lemma 8.7 and the proof of Theorem 1.4 on viewer page 59.
- Manuscript section: Section 8, including Section 8.1, followed by the proof of Theorem 1.4.
- Reader promise: by the end of the page, the reader should understand why the adjacent first-return strip is carried by one Farey cell, how contact recurrences multiply to a heterogeneous Ito product, why reflection sometimes changes the selected eigenvalue, and how lifted vertex angles place all factors on one unambiguous upper-half-plane branch.

This page is the bridge from polygon geometry to scalar complex equations. It must not present the product formula as a miraculous cancellation. Every factor should first appear as a relation between consecutive polygon vertices, and every phase should be tied to a lifted geometric path.

## Exact manuscript inventory

Retain these statement numbers, kinds, titles, labels, and complete proofs:

1. **Lemma 8.1, Farey adjacency criterion** (label lem:farey-adjacency-expanded), PDF viewer page 51.
2. **Lemma 8.2, Reflection of a Farey cell** (label lem:farey-reflection), page 52.
3. **Lemma 8.3, Reflection of a backward return strip** (label lem:backward-strip-reflection), pages 52-53.
4. **Lemma 8.4, The identity contact rotation closes after reflection** (label lem:kappa-N), pages 53-54.
5. **Proposition 8.5, The nontransversal case \(\varphi>\delta\)** (label prop:large-block-product), pages 54-55.
6. **Proposition 8.6, The transversal case \(\varphi=\delta\)** (label prop:minimal-block-product), pages 56-58.
7. **Lemma 8.7, The return factors lie on the Jensen sheet** (label lem:compression-branch), pages 58-59.
8. **Theorem 1.4, Complex monodromy and Farey carrier** (label thm:complex-monodromy): show its complete statement in an expandable panel, with a source link to its first appearance on viewer pages 4-5; include the complete assembly proof on viewer page 59.

Retain equations (8.1)-(8.28), all references to the theorem-level identities (1.5)-(1.9), and the precise distinction between the homogeneous polynomial identity (1.6) and Laurent identity (1.7).

## The organizing question

Open with:

> Topic VI proved that a nontransversal return cannot skip: it advances to the adjacent base. Why should that geometric adjacency force the rotation angle to lie in a Farey cell and the multiplier to satisfy an Ito-type product?

Then preview the answer:

1. A determinant-one record edge is exactly the arithmetic certificate for Farey adjacency.
2. Each return cell gives a complex factor \(\mu^q-\beta_j\) connecting consecutive vertices.
3. Multiplication around the strip cancels the vertices and produces the heterogeneous product.
4. Lifted vertex arguments, not the product alone, select a common branch for every factor.

## Dependency ledger

### Imported from Topic VI-B

- Theorem 1.3 supplies a one-sided contact system reduced to a strict interval.
- If the contact rotation is the identity, every contact is strict.
- If the strict interval is a complete transversal, every base has the common orbit return time.
- If it is nontransversal, the first return is the cyclic successor and its towers have the two heights from Theorem 6.1.

### Imported from Topic V

- For a unit record edge, integers \(q,p,d,e\) satisfy
  \[
  q\kappa-pN=1,\qquad N=qd+e,\qquad 0\leq e<q
  \]
  in the nonreflected regime.
- Endpoint padding extends the actual strict interval to \(\{1,\ldots,d\}\) and inserts only endpoint fields.
- Lemma A.6 counts integer representatives in a half-open lattice parallelogram.

### Imported from Topics I-IV

State these exact contracts in one expandable "Geometric angle data" panel:

- An adapted complex coordinate makes the elliptic contraction multiplication by one of its conjugate eigenvalues.
- Every polygon vertex is nonzero because the origin lies in the polygon interior.
- Consecutive vertices have lifted angular gaps in \((0,\pi)\).
- The lifted endpoint-path lemma gives exact inequalities for an iterate landing strictly in a side, with no hidden multiple of \(2\pi\).
- A strict contact has coefficients \(0<\alpha,\beta<1\), \(\alpha+\beta=1\); an endpoint padding cell has \(\beta=0,\alpha=1\).
- The contact orientation is intermediate. The monodromy output may select the conjugate eigenvalue after the completed strip is reflected.

The page must never change from \(\lambda\) to \(\overline\lambda\) silently. Every orientation change gets a labelled reflection panel.

### Export from this page

Theorem 1.4 supplies exactly the data used later:

- a selected eigenvalue \(\mu\in\{\lambda,\overline\lambda\}\);
- an ordered Farey cell \(p/q<y<r/s\) with \(q\leq s\);
- \(d=\lfloor N/q\rfloor\) and signed \(e=s-dq\);
- coefficients \(0\leq\beta_j<1\), \(\alpha_j=1-\beta_j>0\);
- the homogeneous and Laurent product identities;
- the common argument sheet \(0<A<M<\pi\), \(u_j\in[A,M)\);
- the exact phase identity.

Later topics must not import the case-specific symbols \(\varphi,\delta,h,L,K,S,R,b\); those are eliminated in the theorem output.

## First-use glossary and symbol register

### Farey arithmetic

- Farey sequence \(F_N\): the increasing list of all reduced fractions \(a/b\) in \([0,1]\) with \(1\leq b\leq N\).
- Reduced fraction: numerator and denominator have greatest common divisor one.
- Consecutive Farey fractions or Farey neighbours: two entries with no member of \(F_N\) strictly between them.
- Open Farey cell: the open interval between consecutive entries.
- Farey determinant: for \(a/b<c/d\), the positive integer \(bc-ad\).
- Mediant: \((a+c)/(b+d)\), which lies strictly between \(a/b\) and \(c/d\).
- Reflection of a cell: apply \(x\mapsto1-x\), reverse endpoint order, and reduce nothing because reducedness is preserved.
- Ordered denominator condition \(q\leq s\): an orientation choice made for the final output; it is not automatic before reflection.

Use the exact example

\[
\frac13<\frac38<\frac25
\]

in \(F_7\). The endpoints are neighbours because \(3\cdot2-1\cdot5=1\) and \(3+5=8>7\). Reflection gives

\[
\frac35<\frac58<\frac23,
\]

and swaps endpoint denominators \(3,5\) to \(5,3\).

### Complex and angular language

- \(\arg_+(z)\in(0,2\pi)\): the positive lifted argument for a nonzero complex number that is not positive real.
- Lifted vertex arguments \(\Theta_i\): real numbers, not residues modulo \(2\pi\), chosen consistently along the positively oriented polygon boundary.
- Contact eigenvalue \(\lambda\): the multiplier in the orientation used to build the one-sided contact system.
- Output eigenvalue \(\mu\): either \(\lambda\) or \(\overline\lambda\), selected only after the return regime is known.
- \(\vartheta=\arg_+(\mu)\) and \(y=\vartheta/(2\pi)\): the selected rotation angle in turns.
- Factor argument \(u_j\): the unique angle in \((0,\pi)\) of \(\mu^q-\beta_j\), selected by a consecutive-vertex recurrence.
- \(A=q\vartheta-2\pi p\): the argument of the unshifted factor \(\mu^q\) relative to the left Farey endpoint.
- \(M=\arg_+(\mu^q-1)\): the limiting factor angle at \(\beta=1\).
- Jensen sheet: the common interval \([A,M)\subset(0,\pi)\) on which all factor arguments lie. Explain that "sheet" means a consistent branch of argument; Jensen's inequality is used only in a later topic.

### Return-strip language

- Backward cell relation: \((\lambda^q-b_i)z_i=a_i z_{i-1}\).
- Closure relation: \(\lambda^h z_d=z_0\).
- Reflected points \(w_j=\overline z_{d-j}\): conjugate and reverse the strip so the recurrence points forward in the new order.
- Reflected multiplier \(\mu=\overline\lambda\), with \(\arg_+(\mu)=2\pi-\arg_+(\lambda)\).
- Signed closing exponent \(e=-h\) in the reflected strip.
- Homogeneous product: the polynomial identity obtained after multiplying by enough powers of \(\mu\) to remove a negative exponent.
- Laurent identity: an equivalent identity containing \(\mu^e\), allowed because \(\mu\neq0\). If \(e<0\), it is not a polynomial identity.
- Heterogeneous product: the factors may have different parameters \(\beta_j\). "Heterogeneous" does not mean random.
- Algebraic padding: factors with \(\beta_j=0,\alpha_j=1\) inserted to complete a return strip; they are not additional strict contacts.

### Return regimes

- Identity contact rotation: integer lift \(\kappa=N\).
- Nontransversal regime: \(\kappa<N\) and \(\varphi>\delta\); Topic VI forces adjacent return.
- Transversal regime: \(\varphi=\delta\); the strict block contains one field in each orbit.
- \(L=N/\delta\), \(K=\kappa/\delta\): orbit length and reduced rotation step in the transversal case.
- \(h\): unique integer in \(\{1,\ldots,L-1\}\) with \(Kh\equiv-1\pmod L\).
- \(b=(Kh+1)/L\), \(S=N-h\), \(R=\kappa-b\): arithmetic quantities used only inside Proposition 8.6. Put a warning that uppercase \(S,R\) here are integers, not the strict-field set or a polygon.

## Recommended page sequence

### 1. Lemma 8.1: what Farey adjacency really certifies

Define \(F_N\), reducedness, neighbours, and mediants before the lemma. State the lemma in full.

#### Complete proof architecture for Lemma 8.1

**Forward implication from determinant one.**

1. Assume \(bc-ad=1\).
2. For an intermediate reduced fraction \(h/k\), define positive integers \(m=ck-dh\) and \(\ell=bh-ak\).
3. Use the determinant-one identity to derive the exact lattice decomposition
   \[
   (k,h)=m(b,a)+\ell(d,c).
   \]
4. Compare first coordinates: \(k=mb+\ell d\geq b+d\).
5. If \(b+d>N\), no intermediate fraction can have denominator at most \(N\). Thus the endpoints are consecutive in \(F_N\).

**Converse from Farey adjacency.**

6. Let \(D=bc-ad>0\).
7. If \(D>1\), Lemma A.6 gives a nonzero integer point in the half-open parallelogram spanned by primitive vectors \(u=(b,a)\), \(v=(d,c)\).
8. Primitivity excludes a nonzero point on either open coordinate edge, so write it with \(0<\alpha,\beta<1\).
9. Both \(w\) and \(u+v-w\) have slopes strictly between the endpoint slopes.
10. Their positive first coordinates sum to \(b+d\); one is at most \((b+d)/2\leq N\).
11. Reducing that slope can only lower its denominator, contradicting consecutiveness.
12. Hence \(D=1\).
13. If \(b+d\leq N\), the reduced mediant has denominator at most \(N\) and lies between the endpoints. Therefore consecutiveness also forces \(b+d>N\).

The diagram must show why one of the complementary parallelogram points has a small enough first coordinate.

### 2. Lemma 8.2: reflection

State and prove the lemma:

1. Show \((d-c)/d\) and \((b-a)/b\) remain reduced.
2. Subtract the original inequalities from \(1\), which reverses their order.
3. Compute the reflected determinant and show it remains one.
4. The denominator sum remains \(b+d>N\), so Lemma 8.1 gives a Farey cell.
5. Read the swapped denominator order.

Use the \(F_7\) example beside the algebra.

### 3. Lemma 8.3: reflecting an entire return strip

Before the statement, draw a backward strip and define every symbol \(z_i,a_i,b_i,\Theta_i,q,d,h,m\). Then state the lemma in full.

#### Complete proof architecture for Lemma 8.3

1. Set \(\mu=\overline\lambda\), reverse and conjugate the vertices by \(w_j=\overline z_{d-j}\), and reverse the coefficients.
2. Conjugate the \(i=d-j+1\) cell relation to obtain the forward reflected recurrence (8.7).
3. Conjugate the closure \(\lambda^h z_d=z_0\). Since \(\mu\neq0\), rewrite it as \(\mu^e w_d=w_0\) with \(e=-h\).
4. Multiply all forward cell equations. Cancel nonzero endpoint vertices using the signed closure to get the Laurent product (8.9).
5. Multiply by \(\mu^{dq}\) to obtain the homogeneous identity (8.10), with positive exponent \(s=dq-h\).
6. Define reflected lifted arguments \(\Phi_j=-\Theta_{d-j}+C\).
7. Their gaps are \(u_j=\Theta_{d-j+1}-\Theta_{d-j}\in(0,\pi)\), so each is the unique upper-half-plane argument of its factor.
8. Telescope the original lifted closure and combine \(\vartheta=2\pi-\theta\), \(e=-h\), obtaining the exact phase identity (8.11).

The figure must make all three operations visible: conjugation, reversal of index order, and sign change of the closing exponent.

### 4. The four monodromy regimes

Do not use a dense comparison table. Use a vertical case tree. Each case card must state:

- which eigenvalue is selected;
- the ordered Farey cell;
- the values of \(q,s,d,e\);
- whether \(e\) is nonnegative or negative;
- where the recurrence and phase identity come from.

#### Case 1: Lemma 8.4, identity contact rotation

Complete proof architecture:

1. Every contact is strict, so \(0<\alpha_i,\beta_i<1\).
2. Extend vertices and coefficients periodically and lift one full boundary turn.
3. Rearrange \(\lambda x_i=\beta_i x_{i-1}+\alpha_i x_i\) into a backward strip relation.
4. Apply Lemma 8.3 with \(q=1,d=N,h=0,m=1\), after swapping the contact coefficients.
5. Use \(\alpha_i+\beta_i=1\) to recover the required parameter form.
6. Obtain the product and phase identities.
7. Use the earlier angle estimate \((N-1)/N<x<1\), then reflect to the cell \(0<1-x<1/N\), which has smaller denominator first.

#### Case 2: Proposition 8.5, nontransversal return

Complete proof architecture:

1. Theorem 7.11 gives \(\Delta=1\); equation (6.5) then gives \(\delta=1\).
2. Treat \(\varphi=N\): the initial record pair forces \(\kappa=1\); set \(q=1,p=0,d=N,e=0\).
3. Treat \(\varphi<N\): extend the unit record edge backwards to \(E=(e,c)\); Theorem 6.1 gives \(q\kappa-pN=1\), \(N=qd+e\), \(0\leq e<q\).
4. Apply endpoint padding to obtain \(\lambda^q x_{j-1}=\xi_j\) for \(1\leq j\leq d\) and closure \(\lambda^e x_d=x_0\).
5. Substitute strict contact equations for \(j\leq\varphi\); for padded fields take \((\alpha_j,\beta_j)=(1,0)\).
6. Multiply, cancel nonzero vertices, and use the closure to obtain the Laurent product; homogenize with \(N=qd+e=s\).
7. Use \(q\kappa-pN=1\), \(q<N\), and \(q+N>N\) to identify consecutive Farey endpoints \(p/q,\kappa/N\).
8. Use the lifted \(q\)-step path from \(x_0\) into side \(E_{pN+1}\) to prove \(p/q<x<\kappa/N\).
9. Assign each factor argument from the consecutive vertex gap.
10. Derive \(d+e\kappa=(\kappa-dp)N\), read the lifted closure, and telescope to the phase identity.

#### Case 3 and 4: Proposition 8.6, transversal return

First prove the common setup:

1. There are \(\delta\) orbits, each of length \(L=N/\delta\), and exactly one strict field in each orbit.
2. The first \(L-1\) destinations are endpoint fields; the last returns strictly to the same field. This gives \(\lambda^L x_i=\xi_i\).
3. Swap the contact coefficients to form backward relations.
4. Choose \(h\) from \(Kh\equiv-1\pmod L\). The orbit from \(x_\delta\) reaches \(x_0\) through endpoint fields, so \(\lambda^h x_\delta=x_0\).
5. Multiply to obtain the initial Laurent relation (8.23).
6. Compute \(KS-RL=1\) and \(L+S>N\).
7. Use the strict \(L\)-return and the endpoint closure to obtain the exact lifted relations (8.24).
8. Compare phase increments to prove \(R/S<x<K/L\); apply Lemma 8.1.

Then separate:

- **If \(\delta\geq2\):** \(S>L\), so reflect the cell to put denominator \(L\) first. Apply Lemma 8.3 with \(d=\delta,e=-h\). Show \(r-dp=b-h\), matching the phase identity.
- **If \(\delta=1\):** \(S=N-h<N=L\), so retain the contact eigenvalue. Rewrite (8.23) as (8.25), let \(d=\lfloor N/S\rfloor\), and pad all but the first factor. Derive the genuine first recurrence (8.26), assign \(u_1\) geometrically and each padded argument to \(A\), then verify the phase identity.

Make explicit that the \(\delta=1\) transversal case and the \(\varphi>\delta\) nontransversal case are different even though both have \(\delta=1\).

### 5. Lemma 8.7: the Jensen sheet

State the lemma in full. Define "sheet" before the statement.

#### Complete proof architecture for Lemma 8.7

1. The final Farey cell has \(q+s>N\geq4\) and \(q\leq s\), so \(s\geq3\).
2. Determinant one and the cell inequality give
   \[
   0<A<\frac{2\pi}{s}<\pi.
   \]
3. For \(0\leq\beta<1\),
   \[
   \operatorname{Im}(\mu^q-\beta)=|\mu|^q\sin A>0.
   \]
   Thus every factor lies in the open upper half-plane and has one argument in \((0,\pi)\).
4. As \(\beta\) increases from \(0\) to \(1\), the point moves left along a horizontal segment. Its argument increases continuously and strictly from \(A\) to \(M\), not including \(M\) because \(\beta<1\).
5. Match the abstract unique argument with the geometric lift in each regime:
   - direct consecutive-vertex gaps in Proposition 8.5;
   - Lemma 8.3 in both reflected cases;
   - recurrence (8.26) plus explicitly assigned padded angles in the \(\delta=1\) transversal case.
6. These cases exhaust the constructions, so every \(u_j\in[A,M)\).

The accompanying SVG should draw the horizontal factor segment \(\mu^q-\beta\) in the upper half-plane and its rays from the origin. It must not depict \(M\) as attained.

### 6. Assembly proof of Theorem 1.4

Show the full theorem statement in an expandable panel, then give the complete proof as a case tree:

1. Apply the one-sided contact theorem and retain \(\lambda\) for its intermediate contact orientation.
2. Do not choose the output eigenvalue until the return regime is known.
3. Identity case: select \(\overline\lambda\), apply Lemma 8.4.
4. Nontransversal case: select \(\lambda\), apply Proposition 8.5 and Theorem 7.11.
5. Transversal with \(\delta\geq2\): select \(\overline\lambda\), apply Proposition 8.6(a); the signed exponent is negative.
6. Transversal with \(\delta=1\): retain \(\lambda\), apply Proposition 8.6(b); the signed exponent is nonnegative.
7. In every case the selected cell has \(q\leq s\), and the same selected \(\mu\) satisfies the product, phase, and factor recurrence statements.
8. Apply Lemma 8.7 to obtain the normalized argument interval and common Jensen sheet.
9. State explicitly that no symbol is silently restored and no orientation is changed after \(\mu\) has been selected.

End with:

> The polygonal part of the proof has now been compressed into a finite scalar carrier: a Farey cell, a heterogeneous product, and an exact phase identity. The next topics return to stochastic spectra and turn this carrier into the sharp boundary equation.

## Deterministic figure and example plan

1. **Plate VII.1: A Farey cell in \(F_7\).** Display \(1/3<3/8<2/5\), determinant one, denominator sum eight, and the absence of an order-seven fraction between the endpoints.
2. **Plate VII.2: The lattice proof of Farey adjacency.** Show the parallelogram for \((b,a),(d,c)\), an intermediate lattice point when determinant exceeds one, and the complementary small-denominator point.
3. **Plate VII.3: Reflection of the \(F_7\) cell.** Animate \(x\mapsto1-x\), ending at \(3/5<5/8<2/3\); label the swapped denominators.
4. **Plate VII.4: Reflecting a return strip.** Three static frames: original backward recurrence, complex conjugation, then reversed forward recurrence with \(e=-h\).
5. **Plate VII.5: Multiplying around the strip.** Show vertex factors cancelling one by one, while the closure contributes \(\mu^e\).
6. **Plate VII.6: Four-regime case tree.** A vertical, accessible flow diagram showing selected eigenvalue, denominator order, and sign of \(e\), without a table.
7. **Plate VII.7: Strict contacts and padded cells.** Filled cells for \(0<\beta<1\), outlined cells for \(\beta=0,\alpha=1\).
8. **Plate VII.8: The Jensen sheet.** Draw the exact horizontal segment traced by \(\mu^q-\beta\), rays of arguments \(A\leq u<M\), and the open upper half-plane.
9. **Plate VII.9: From geometry to carrier.** A final three-column flow: consecutive polygon vertices, complex recurrence, scalar product and phase.

All arithmetic examples must be verified by deterministic code. Complex-plane plates may use chosen exact rational coordinates for illustration, but they must be labelled schematic unless they come from a verified manuscript example.

## Provenance and source treatment

- Lemma 8.1: **Classical result**. Source category: classical Farey arithmetic and lattice index; the manuscript gives a complete proof.
- Lemma 8.2: **Classical result**. It is an elementary consequence of Farey adjacency.
- Lemma 8.3: no public badge. Source note: reflection of the return strip has a Karpelevič antecedent; the exact branch-controlled statement is not labelled "Previously known."
- Lemma 8.4: no public badge. Karpelevič antecedent only; complete proof supplied here.
- Proposition 8.5: **Strengthened**. Source note: the classical return product is supplemented by exact lifted phase and padding information; cite the verified antecedent explicitly once the source ledger is final.
- Proposition 8.6: **Strengthened**. Source note: the transversal cases include explicit orientation selection, signed closing exponent, and exact lifted phase beyond the older carrier mechanism.
- Lemma 8.7: **New result**. Source note: the common Jensen-sheet control appears to be new; closest context is the Karpelevič-Ito-Dokovic product literature.
- Theorem 1.4: **New result** for the exact assembled intrinsic carrier theorem as audited by the project, while the classical boundary product and Farey framework are not claimed as new.

Full bibliography entries:

- F. I. Karpelevič, "On the characteristic roots of matrices with nonnegative elements," *Izv. Akad. Nauk SSSR Ser. Mat.* 15(4) (1951), 361-383.
- D. Z. Djokovic, "Cyclic polygons, roots of polynomials with decreasing nonnegative coefficients, and eigenvalues of stochastic matrices," *Linear Algebra and its Applications* 142 (1990), 173-193.
- H. Ito, "A new statement about the theorem determining the region of eigenvalues of stochastic matrices," *Linear Algebra and its Applications* 267 (1997), 241-246.

The page must say that the classical Farey-Ito boundary is established prior work. The newness badges concern the manuscript's intrinsic carrier, strengthened case control, and proof route, not discovery of the classical region.

## Preliminary adversarial read 1: novice dependency attack

### Findings and incorporated corrections

1. Farey sequence order can be confused with numerical ordering. Define both: \(F_N\) is indexed by denominator bound and listed increasingly by value.
2. Determinant one alone does not imply adjacency in \(F_N\). Keep the second condition \(b+d>N\) visible wherever adjacency is asserted.
3. Reflection reverses inequalities. Animate the endpoint swap, not merely the movement of the interior point.
4. Conjugating and reversing a strip are separate operations. Show both and write \(\mu=\overline\lambda\) explicitly.
5. A negative \(e\) can make the "polynomial identity" appear to contain negative powers. Present the homogeneous identity first in reflected cases and label the other one Laurent.
6. "Heterogeneous" and "padding" can sound probabilistic or approximate. Define both algebraically before the first product.
7. The variables \(S,R\) in Proposition 8.6 collide visually with prior set names. Put a local-notation warning and call them "integer \(S\)" and "integer \(R\)" in prose.
8. "Jensen sheet" may suggest Jensen's inequality has already been used. Define it only as the shared branch interval and state that convex equalization comes later.
9. The product identity determines phase only modulo \(2\pi\). Emphasize that the consecutive lifted vertex recurrences select the actual \(u_j\).

## Preliminary adversarial read 2: proof, branch, and provenance attack

### Findings and incorporated corrections

1. Lemma 8.1's converse needs primitive endpoint vectors to exclude lattice points on radial edges. State reducedness at that exact step.
2. In Lemma 8.3, the closing exponent changes sign only after conjugating the closure and solving for the reversed endpoint. Keep that algebra visible.
3. The reflected phase computation uses \(\arg_+(\overline\lambda)=2\pi-\arg_+(\lambda)\), valid because the eigenvalue is nonreal. Import nonreality explicitly.
4. Proposition 8.5 has a special \(\varphi=N\) case. Do not force it into the backward record extension used for \(\varphi<N\).
5. Proposition 8.6's \(\delta\geq2\) and \(\delta=1\) cases require opposite denominator-order decisions. Keep both branches complete.
6. Padded zero factors need an assigned argument even though their recurrence is algebraically trivial. Retain the assignment \(u_j=A\) and verify it lies in \((0,\pi)\).
7. Lemma 8.7 excludes \(M\) because \(\beta_j<1\). Every interval must be \([A,M)\), never \([A,M]\).
8. The final theorem must select one \(\mu\) and keep it fixed through product and phase. Do not switch back to the contact orientation in notation.
9. The classical Karpelevič-Ito boundary must not inherit a "New result" claim from Lemma 8.7. Separate the theorem's exact intrinsic carrier statement from the later classical boundary conclusion.
10. The logical proof spills onto PDF viewer page 59. Include the complete ending and assembly proof even though the architecture summary says pages 51-58.

## Completion checklist for the eventual webpage

- All seven numbered Section 8 results and Theorem 1.4 retain exact numbering and complete proofs.
- Every reflected formula displays the conjugation bar correctly.
- Farey adjacency always includes determinant and denominator-sum conditions.
- The \(F_7\) example is verified by code and labelled as an arithmetic illustration.
- The homogeneous identity is primary whenever \(e<0\).
- Strict contacts and padded factors are visually and verbally distinct.
- Every factor argument is tied to a lifted geometric recurrence.
- The four return regimes form an accessible case tree, not a dense table.
- \(M\) is never shown as attained in the Jensen-sheet figure.
- Classical boundary prior art is stated explicitly.
- Proof panels are closed by default and keyboard-operable.
- Nothing is deployed before author review.
