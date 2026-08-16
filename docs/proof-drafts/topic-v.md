# Topic V authoring blueprint

## Page identity

- Working title: **Rotation arithmetic and the projective corridor**
- Reader marker: **Topic V of XIV**
- Proposed local route: **/proof/topic-v/**
- Status: local authoring blueprint only. Do not publish from this file.
- Canonical source: Complete_Karp_arXiv.pdf, PDF viewer pages 31-40, with the end of Proposition 7.5 on viewer page 41; supporting Lemma A.6 is on viewer page 65.
- Manuscript sections: Section 6, the opening of Section 7, and Section 7.1 through Proposition 7.5.
- Reader promise: by the end of the page, the reader should be able to move in both directions between a rational rotation, its record vectors, its two-height return towers, the exact return-edge ledger, and the geometric object called a projective corridor.

The page must keep the visual language of Topic I: navy theorem frames, restrained oxblood intuition panels, copper figure rules, expandable proofs closed by default, numbered equations, and deterministic SVG plates. It must not compress the manuscript into a survey. Every formal statement listed below appears in full, followed by the manuscript proof with explanatory sentences inserted at the exact points where a non-specialist is likely to lose the thread.

## Why this topic exists

Topic IV ends with a strict-contact set that is one consecutive block in a cyclic set of \(N\) side labels. The contact rotation advances every label by a fixed step \(\kappa\). Topic V asks what happens when one follows that finite rotation until it returns to the block.

The answer has two layers:

1. The arithmetic layer turns record residues into a bijective family of return towers. Consecutive records are unimodular lattice neighbours.
2. The geometric layer reads the tower tops as contacted polygon sides. It identifies a shortest boundary corridor and records exactly which return incidence may move.

The main narrative sentence should be:

> A rational rotation looks one-dimensional, but its first-return structure is encoded by a two-dimensional lattice sail; that lattice record becomes the edge-by-edge itinerary of a projective deformation.

Do not use "Euclidean algorithm" as an unexplained shortcut. The manuscript deliberately proves the record structure directly, with no parity convention or semiconvergent exception.

## Exact manuscript inventory

The website must retain these numbers, kinds, titles, and labels.

1. **Theorem 6.1, Finite rotation return-section theorem** (label thm:rotation-section), PDF viewer pages 31-34. Its proof has four explicit stages and must retain all four.
2. **Corollary 6.2, Endpoint-padded upper-record sections** (label cor:endpoint-padded-section), pages 34-35.
3. **Remark 6.3, Lattice-sail interpretation** (label rem:lattice-sail), page 35.
4. **Lemma 7.1, Strict supports on the short return corridor** (label lem:short-corridor-supports), page 36.
5. **Lemma 7.2, Proper corridor chain, including boundary values** (label lem:proper-corridor-chain), page 37.
6. **Proposition 7.3, Exact return-edge ledger** (label prop:return-edge-ledger), pages 38-39.
7. **Definition 7.4, Projective corridor and holonomy** (label def:projective-corridor), page 40.
8. **Proposition 7.5, Admissible projective chart** (label prop:holonomy-chart), pages 40-41. The page split in the PDF must not split the proof on the website.
9. **Lemma A.6, Lattice parallelogram count** (label lem:lattice-parallelogram-count), PDF viewer page 65. Present it in an expandable "Lattice fact used twice" panel immediately before its first use in Theorem 6.1. Link back to the appendix source location.

Also reproduce, as numbered setup rather than as an additional result, equations (6.1)-(6.2), (7.1)-(7.10), and the forward/reverse branch dictionary. The theorem cards must link every citation to its on-page imported contract or to the previous topic.

## Dependency ledger

### Imported from Topic I

Give a one-sentence recap and a link, not a new proof, for each item:

- Under Definition 1.2, a polygon has nonempty interior and its genuine extreme vertices are listed once in cyclic order, with no other displayed points.
- A supporting line exposes a vertex when it meets the polygon only at that vertex.
- \(\operatorname{relint}\) means relative interior in the line containing a side.
- The support-face test says that a supporting line through a polygon vertex is strict once neither neighbouring vertex lies on it.
- Multiplication by the nonreal contraction is invertible, so incidence with a pulled-back line may be checked after applying the relevant power of the multiplier.

### Imported from Topics II-IV

Place these in one expandable "What the previous reduction gives us" panel before Section 6 begins. State the contracts explicitly:

- A right-admissible one-sided contact system has side labels \(E_i=[x_{i-1},x_i]\), contact points \(\xi_i\), and a strict-field set \(S\). A strict field has \(\xi_i\in\operatorname{relint}(E_i)\); an endpoint field has \(\xi_i=x_i\).
- After the Topic IV mutation reduction, the strict fields form one interval \(I=\{N-\varphi,\ldots,N-1\}\), after a common cyclic relabelling.
- The contact rotation is addition of \(\kappa\) modulo \(N\), and \(\delta=\gcd(N,\kappa)\) is the number of its orbits.
- If \(\varphi<N\), the first time the terminal chip enters the interval gives an upper record whose deficit is \(\varphi\). If \(\varphi=N\), the time-zero record is used.
- Endpoint contacts propagate exactly: when a destination field is not strict, the corresponding image point is the relevant polygon endpoint. This is what later turns an arithmetic tower state into an equality \(\lambda^t x_i=x_j\).

The page must say where each imported fact first enters. Do not write "as above" without a linked statement.

### New internal dependencies on this page

- Lemma A.6 is used in Theorem 6.1 and again in Lemma 8.1 on Topic VII.
- Theorem 6.1 supplies the numerical data used in Lemmas 7.1-7.2 and Proposition 7.3.
- Lemmas 7.1-7.2 show that the selected boundary chain has the strict supports and properness required by Definition 7.4.
- Proposition 7.3 certifies that exactly one return edge is left as the closing edge.
- Proposition 7.5 supplies the affine chart used by Lemma 7.6 on Topic VI-A.

## First-use glossary and symbol register

Each term below must be defined before it occurs in prose. Terms likely to be known after a standard linear-algebra course may be concise; finite-rotation, lattice, contact, and projective terms need an example or a figure.

### Finite rotation language

- \(\mathbb Z/N\mathbb Z\): the \(N\) cyclic labels, with addition performed modulo \(N\).
- \([a]_N\): the unique representative of the residue class of \(a\) in \(\{0,\ldots,N-1\}\).
- \(\kappa\): the positive rotation step, with \(1\leq\kappa<N\).
- \(\delta=\gcd(N,\kappa)\): both the greatest common divisor and the number of orbits of addition by \(\kappa\) on \(\mathbb Z/N\mathbb Z\). Explain why each orbit has \(N/\delta\) points.
- \(L(a,b)=a\kappa-bN\): an integer-valued linear functional on the lattice \(\mathbb Z^2\). Explain that \(L=0\) is the rational line of slope \(\kappa/N\) in \((a,b)\)-coordinates.
- Upper-record time \(h\): a time for which \([h\kappa]_N\) is larger than every earlier residue. "Upper" refers to the ordered representatives \(0,\ldots,N-1\), not to a direction on the cycle.
- Deficit \(\nu=N-[h\kappa]_N\): the remaining distance from that record residue to \(N\). The time-zero convention is \(\nu=N\).
- Record vector \(V=(h,b)\), where \(b=1\) at \(h=0\) and \(b=\lceil h\kappa/N\rceil\) for \(h>0\). Show directly that \(L(V)=-\nu\).
- Terminal record: the final upper record, whose deficit is \(\delta\).
- Consecutive records: adjacent entries in chronological order among upper-record times, not consecutive integers.

### Lattice language

- Primitive vector: an integer vector whose coordinates have no common divisor larger than one; equivalently, it is not a positive integer multiple of a shorter integer vector.
- Determinant \(\det(U,V)\): the signed area of the parallelogram spanned by \(U,V\).
- Unimodular pair or basis: two integer vectors with determinant \(+1\) or \(-1\); their integer combinations give every lattice point in \(\mathbb Z^2\).
- Half-open fundamental parallelogram: \(\{\alpha u+\beta v:0\leq\alpha,\beta<1\}\). Explain why using one closed and one open endpoint in each direction avoids double-counting boundary representatives.
- Quotient lattice \(\mathbb Z^2/(\mathbb Zu+\mathbb Zv)\): integer points identified when their difference is an integer combination of \(u,v\). A short clickable explanation may describe cosets as residue classes for the sublattice.
- Smith normal form: only the contract needed by Lemma A.6, namely that the index of a full-rank rank-two sublattice equals the absolute determinant. No algorithmic detour is needed in the main flow.
- Lattice sail: the broken line of primitive record vectors on the boundary visible from the cone between the vertical ray and the rational ray of slope \(\kappa/N\). State that Remark 6.3 is an interpretation, not a new dependency.

### Return-tower language

- \(V'=(h',b')\): the next upper-record vector after \(V=(h,b)\).
- \(U=V'-V=(q,p)\): the record-edge vector.
- \(\nu'\): the deficit of \(V'\), and \(\Delta=\nu-\nu'>0\): the improvement in deficit.
- Base \(i\): one of the labels \(1,\ldots,\nu\) from which a return tower starts.
- Height \(H_i\): the number of states in the tower above base \(i\), equal to \(q\) or \(q+h\).
- Tower state \((t,i)\): level \(t\) above base \(i\), with \(0\leq t<H_i\).
- Tower map \(F(t,i)=[i+t\kappa]_N\): the actual cyclic label reached from base \(i\) after \(t\) rotation steps.
- First-return map: the map from a base to the next base reached when its tower ends. Here it is addition of \(\Delta\) modulo \(\nu\).
- Short and long towers: the towers of heights \(q\) and \(q+h\). "Long" does not mean infinite.
- Endpoint padding: enlarging the actual strict block to a record interval by adding nonstrict endpoint fields. State that these create algebraic factors later but not new strict contacts.

### Corridor language

- Pulled-back support \(L_i=\lambda^{-H_i}\operatorname{aff}(E_{r(i)})\): the preimage under multiplication by \(\lambda^{H_i}\) of the line containing the return side. Explain why it supports \(P\) at \(x_i\).
- Forward and reverse corridor: the shorter of the two cyclic arcs determined by \(\Delta\) and \(\varphi-\Delta+1\). They are two readings of the same return arithmetic, chosen to keep the boundary chain proper.
- Proper consecutive boundary chain: distinct consecutive boundary vertices that omit at least one side of the polygon.
- Projective completion of an affine line: the affine line plus one point at infinity representing its direction.
- Perspectivity: projection from a fixed centre from one projective line to another.
- Projectivity: a composition of perspectivities; on a projective line it becomes a fractional-linear map in an affine coordinate.
- Pencil of lines through a point: all projective lines through that point.
- Projective affine chart: the affine plane obtained by choosing one projective line as the line at infinity.
- Corridor holonomy: the projectivity obtained by following the successive corridor projections and returning to the final contact line. Say explicitly that the projections are not orthogonal projections.

## Recommended page sequence

### 1. Opening orientation

Use a compact visual recap of the reduced strict block from Topic IV. Then introduce the worked arithmetic example

\[
N=13,\qquad \kappa=5,\qquad \delta=1.
\]

The residue list begins \(0,5,10,2,7,12,\ldots\). The upper records occur at times \(0,1,2,5\), with deficits \(13,8,3,1\). Use this same example throughout the arithmetic half of the page so that every new symbol has a visible instance.

### 2. Records as lattice geometry

Define (6.1)-(6.2), place the cyclic residue strip beside the lattice plot, and let the reader highlight a record in either view. The highlight should update both the time-residue point and \(V=(h,b)\).

Open Lemma A.6 here. Its proof must be complete but collapsed. Include a two-panel example with determinant \(1\) and determinant \(3\), showing exactly one and three half-open representatives.

### 3. Theorem 6.1

State the theorem in full. Follow it with a short "What it gives" panel:

- consecutive record vectors form a unimodular cell;
- the return bases split into two tower heights;
- when \(\Delta=1\), record vectors propagate backwards in one arithmetic run;
- a polygonal contact system inherits exact endpoint identities from the tower.

The proof should be one expandable panel with four anchored stages corresponding exactly to the manuscript. A reader may jump to a stage, but opening the proof reveals all stages in order.

#### Proof architecture for Theorem 6.1

**Stage 1: consecutive records are unimodular.**

1. Divide \(N,\kappa\) by \(\delta\) to show that multiplication by \(\kappa/\delta\) permutes residues modulo \(N/\delta\). This produces the terminal residue \(N-\delta\).
2. Prove every record vector is primitive. If \(V=gW\) with \(g>1\), then \(W\) has an earlier time coordinate and a smaller positive deficit, contradicting the record property.
3. For consecutive records \(V,V'\), compute the sign of \(\det(V,V')\) from their times and deficits.
4. Suppose \(-\det(V,V')>1\). Lemma A.6 gives a nonzero lattice point in the half-open parallelogram. Primitivity excludes its lying on either radial edge.
5. If necessary replace \(W\) by \(V+V'-W\), locating an integer point strictly inside the record triangle. Its time is earlier than \(h'\), while its deficit is smaller than \(\nu\), contradicting consecutiveness.
6. Conclude \(\det(V,V')=-1\), hence \(\det(U,V)=1\).
7. Apply \(L\) to \(U=V'-V\) to get \(q\kappa-pN=\Delta\), and expand the determinant to obtain \(q\nu+h\Delta=N\).
8. Since \(U,V\) form an integer basis, the subgroup generated by \(L(U)=\Delta\) and \(L(V)=-\nu\) equals \(L(\mathbb Z^2)=\delta\mathbb Z\). Therefore \(\gcd(\Delta,\nu)=\delta\).
9. Verify separately that \(h=0\) is equivalent to the declared initial record \(\nu=N\).

**Stage 2: the tower map is bijective.**

1. Define the two heights \(H_i=q\) and \(q+h\) and the successor map on tower states.
2. Check the congruence \(F(\sigma(t,i))=F(t,i)+\kappa\pmod N\) in each of the three successor cases.
3. Addition of \(\Delta\) on \(\nu\) bases has \(\delta\) cycles. Count the short and long bases in one cycle.
4. Use \(q\nu+h\Delta=N\) to show that each state cycle has \(N/\delta\) points, the same length as a \(\kappa\)-orbit in \(\mathbb Z/N\mathbb Z\).
5. Note \(F(t,i)\equiv i\pmod\delta\). Different base cycles land in different \(\kappa\)-orbits.
6. An equivariant map between finite cycles of equal length is a bijection. Conclude that \(F\) labels all \(N\) states exactly once.

**Stage 3: a unit record edge propagates backwards.**

1. Assume \(\Delta=1\), subtract \(w=\lfloor h/q\rfloor\) copies of \(U\), and define \(E=V-wU=(e,c)\) with \(0\leq e<q\).
2. Compute \(L(E)=-(\nu+w)=-d\), preserve \(\det(U,E)=1\), and derive \(qd+e=N\).
3. Expand an arbitrary integer vector uniquely as \(Z=AE+BU\).
4. Use the inequalities on \(L(Z)\) and on the time coordinate to exclude an earlier improved record before \(E\).
5. Repeat the same coefficient argument for \(E+jU\), proving that the displayed arithmetic progression contains consecutive records with deficits decreasing by one.

**Stage 4: translate towers into polygon identities.**

1. Assume all strict fields lie in the base interval.
2. If an internal destination were also a base, the tower bijection would give it two preimages. Hence every internal destination lies outside the strict block and is an endpoint contact.
3. Iterate the endpoint contact equality to obtain \(\lambda^t x_i=x_{F(t,i)}\).
4. Apply one final multiplier at the short and long tower tops to obtain (6.10)-(6.11).
5. Read the labels \(F(h,\nu)=0\) and the long top at base \(\nu\) to obtain the closure relations (6.12)-(6.13).

### 4. Endpoint padding and the lattice sail

State Corollary 6.2 in full. Explain "padding" before the proof: the interval \(J=\{1,\ldots,d\}\) may be larger than the actual strict block; the added fields satisfy \(\xi_j=x_j\), so later they correspond to \(\beta_j=0,\alpha_j=1\).

The proof architecture is short but should not be omitted:

1. Apply Theorem 6.1 to \(E\) and \(E+U\), so \(\nu=d,\Delta=1,h=e\).
2. Read off the two heights and successor return.
3. Use \(S\subseteq J\) to force every internal destination outside \(J\) to be an endpoint field.
4. Convert the short return, virtual short return, and closure into (6.17)-(6.18).
5. Translate nonstrict fields into the padding parameters.

Render Remark 6.3 as an engraved-margin explanation beside the lattice figure, not as a theorem card. Define "sail" visually.

### 5. From a return rotation to a short boundary corridor

Begin Section 7 with the temporary assumption \(\varphi>\delta\) and the data (7.1)-(7.5). Explain "no-skipping" precisely:

> The first-return map on the strict bases adds \(\Delta\). Unit return means \(\Delta=1\), so each base returns to its immediate successor. A value \(\Delta>1\) skips one or more bases.

Define \(L_i\) by (7.6), explicitly pronounce it "ell sub i," and explain in one sentence why the pulled-back return-side line supports \(P\) at \(x_i\).

### 6. Lemmas 7.1 and 7.2

#### Proof architecture for Lemma 7.1

1. Invoke the support-face test from Topic I: it is enough to exclude both neighbours of \(x_i\) from \(L_i\).
2. Apply \(\lambda^{H_i}\), reducing the question to whether the two neighbour images lie on the affine line of the return side.
3. Away from the short-long interface, neighbouring bases have the same height and return to strict points on adjacent sides, which cannot lie on the current side line.
4. Check the last short base separately, including \(h>0\) and \(h=0\).
5. Check the first long base using the transported terminal side (7.5).
6. Observe that each stated index range crosses the interface at most once. Conclude every listed support is strict.

The intuition panel must clarify that "strict support" is stronger than "support": a support may contain a whole side, while a strict support touches only the vertex.

#### Proof architecture for Lemma 7.2

1. In the forward branch set \(m=\Delta\). Prove \(m+1<N\) first when \(\varphi<N\), then treat \(\varphi=N\) by contradiction with the branch inequality.
2. Confirm the boundary cases \(\Delta=2\) and \(2\Delta=\varphi+1\).
3. In the reverse branch set \(m=\varphi-\Delta+1\), prove \(m\geq2\), and derive \(m+1<N\) separately for \(\varphi<N\) and \(\varphi=N\).
4. Translate the strict index inequality into distinct labels modulo \(N\).
5. Explain that fewer than \(N\) traversed sides means at least one polygon side is omitted, which is exactly "proper."

### 7. Proposition 7.3: the exact return-edge ledger

This is the first point where the number of label sets can overwhelm the reader. Introduce their roles before their formulas:

- \(M\): bases whose tower vertices move.
- \(b_*\): the seed base.
- \(M^\circ\): moved bases that have a supporting line constraint.
- \(D\): destination fields whose side lines move under the corridor recursion.
- \(R\): fields reached from supported moved bases; their side lines remain fixed.
- \(c\): the unique closing field.
- \(A\): all remaining fixed fields.
- \(r\): first-return addition by \(\Delta\); \(s=r^{-1}\).

Use the forward and reverse formulas exactly as in (7.12)-(7.17). Do not turn the formulas into prose only.

#### Proof architecture for Proposition 7.3

1. Note that \(r\) is a bijection because it is a translation of a finite cyclic set.
2. Forward branch: compute \(r(i)=i+\Delta\) on \(M^\circ\), isolate the wrap at \(2\Delta=\varphi+1\), and identify \(R\).
3. Verify \(D,R,\{c\},A\) are disjoint and exhaustive, then apply the inverse formula for \(s\).
4. Read fixed and moving side lines from which endpoint bases lie in \(M\). Handle the possible label \(j=\varphi=N\) explicitly.
5. Reverse branch: compute the single wrap \(r(i)=i+\Delta-\varphi\), identify \(R\), and repeat disjointness and inverse-source checks.
6. Verify the special fixed lines \(E_\varphi\) and \(E_1\) in the reverse branch.
7. Conclude that every strict return edge belongs to exactly one class and only field \(c\) is the closing edge.

Do not use a dense HTML table for the return-edge classes. Use four vertically stacked colour-coded cards with arrows from source base to target side line. Preserve a plain-text equivalent for screen readers.

### 8. Definition 7.4 and Proposition 7.5

The definition card should animate, on request, one perspectivity at a time. A static fallback must show the same incidence data. Label every centre \(C_i\), support \(L_i\), and chain vertex \(X_i\).

#### Proof architecture for Proposition 7.5

1. At \(X_0\), choose a strict support \(M_0\).
2. At \(X_{m+1}\), vary a strict support \(M_1\). Exclude finitely many choices so the intersection \(O=M_0\cap M_1\) is finite and lies on none of the side or corridor lines in the finite family \(\mathcal F\).
3. Prove \(O\notin P\): otherwise both strict supports would force \(O\) to equal two distinct endpoint vertices.
4. Strictly separate \(O\) from compact \(P\) by an affine functional. The level line \(J\) through \(O\) is disjoint from \(P\).
5. Send \(J\) to the line at infinity by a projective automorphism \(T(z)=(Az+b)/d(z)\).
6. Choose the sign so \(d>0\) on \(P\). Use equation (7.22) to prove segments and their relative interiors map to segments and relative interiors. This positivity is the reason the projective map preserves the relevant convex polygon.
7. Since \(M_0,M_1\) met on \(J\), their images are parallel. The avoidance condition ensures no chain side or \(L_i\) becomes parallel to them.
8. Choose a transverse affine coordinate \(t\). The two boundary arcs become graphs; on the displayed lower graph, convexity gives nondecreasing slopes and strictness makes them strictly increasing.

End with a handoff panel:

> Topic VI-A uses this chart to calculate where the corridor holonomy sends one calibrated point. Topic VI-B transports that local calculation to every vertex of the polygon.

## Deterministic figure and example plan

All figures must be SVG generated from explicit integer or affine coordinates. No AI-generated mathematical image is acceptable.

1. **Plate V.1: One rotation, two records.** For \(N=13,\kappa=5\), show the residue clock and the linearly ordered residue strip together. Highlight times \(0,1,2,5\) and deficits \(13,8,3,1\).
2. **Plate V.2: The lattice sail.** Plot the vectors \((0,1),(1,1),(2,1),(5,2)\), the ray \(b=(5/13)h\), and the determinant-one cells. A toggle reveals \(L(h,b)=5h-13b\).
3. **Plate V.3: A two-height tower partition.** Use the consecutive pair \(V=(1,1)\), \(V'=(2,1)\): \(U=(1,0)\), \(\nu=8\), \(\Delta=5\), \(q=1\), \(h=1\). Show three short towers and five long towers, totalling \(13\) states, and the base return \(i\mapsto i+5\pmod8\).
4. **Plate V.4: Endpoint padding.** Show an actual strict block inside a larger record interval; padded fields are outlined, not filled, and labelled \(\beta=0,\alpha=1\).
5. **Plate V.5: Choosing the shorter corridor.** Give forward and reverse diagrams for the branch inequality. Animate only label highlighting; do not move geometry here.
6. **Plate V.6: Four return-edge roles.** Four stacked source-to-side diagrams for \(D,R,\{c\},A\), with the closing field alone left unconstrained.
7. **Plate V.7: A projective corridor.** Draw a strict polygonal chain, contacts \(C_i\), strict supports \(L_i\), projection rays, and the final contact line.
8. **Plate V.8: Sending an exterior intersection to infinity.** Show the strict endpoint supports meeting at \(O\), the separating line \(J\), then the transformed chart where the supports are parallel and the chain is a convex graph with increasing slopes.

Every plate needs a written alternative description that states the mathematical conclusion, not merely the colours.

## Provenance and source treatment

Use only the four public result badges already approved for the project. A manuscript mechanism whose only located antecedent is Karpelevič's original proof must not receive "Previously known."

- Theorem 6.1: no public badge. Source note: arithmetic and return ideas have antecedents in Karpelevič (1951) and classical finite-rotation work such as Slater (1967), but this exact statement is not labelled previously known without an independently verified complete source.
- Corollary 6.2: no public badge. Source note: manuscript consequence of Theorem 6.1; Karpelevič antecedent only.
- Remark 6.3: no result badge. Context link to the classical lattice-sail viewpoint; the project source ledger currently points to German (2005) for general sail language.
- Lemma 7.1: no public badge. Karpelevič antecedent only; full proof supplied here.
- Lemma 7.2: no public badge. Karpelevič antecedent only; full boundary-case proof supplied here.
- Proposition 7.3: **New result**. Source note: the exact four-set ledger appears to be new; Karpelevič is the closest structural antecedent.
- Definition 7.4: no badge. It names the corridor object used in the manuscript.
- Proposition 7.5: **Classical result**. Source category: elementary real projective geometry plus strict separation; the manuscript gives the complete argument.
- Lemma A.6: **Classical result**. Source category: lattice index and Smith normal form; the manuscript proves the precise form used.

Full bibliography entries on the page:

- F. I. Karpelevič, "On the characteristic roots of matrices with nonnegative elements," *Izv. Akad. Nauk SSSR Ser. Mat.* 15(4) (1951), 361-383.
- N. B. Slater, "Gaps and steps for the sequence \(n\theta\bmod 1\)," *Proceedings of the Cambridge Philosophical Society* 63(4) (1967), 1115-1123.
- O. N. German, "Klein polyhedra and lattices with positive norm minima" (2005), arXiv:math/0504483.

The projective and lattice facts should be labelled by subject rather than padded with a citation not present in the manuscript's source audit.

## Preliminary adversarial read 1: novice dependency attack

### Findings and incorporated corrections

1. "Upper" can be misread as clockwise or geometrically above. Define it using the ordered representatives and show the record strip before the lattice plot.
2. Deficit can be mistaken for a residue. Display both \([h\kappa]_N\) and \(\nu=N-[h\kappa]_N\) on every highlighted record.
3. "Consecutive record vectors" can be mistaken for consecutive lattice points. State that it means consecutive in chronological record order.
4. A tower diagram can hide why there are exactly \(N\) states. Print \(q\nu+h\Delta=N\) beside the two tower groups and explain the cycle argument.
5. "Endpoint padding" may sound like an approximation. State that it is an exact insertion of fields satisfying \(\xi_j=x_j\), and later of factors \((\alpha_j,\beta_j)=(1,0)\).
6. "Projection" may be read as orthogonal projection. Define a perspectivity as drawing a line through a fixed centre; put "not generally perpendicular" in the caption.
7. "Proper" may be read as merely well-behaved. Repeat its exact requirements: distinct consecutive vertices and at least one omitted side.
8. Proposition 7.3 is unreadable if formulas come first. Introduce role cards before (7.12)-(7.17), then retain the exact formulas.

## Preliminary adversarial read 2: proof and provenance attack

### Findings and incorporated corrections

1. Determinant orientation is easy to reverse: the proof gets \(\det(V,V')=-1\), while the theorem states \(\det(U,V)=1\). Show \(\det(V'-V,V)=-\det(V,V')\) at the transition.
2. Lemma A.6 gives a nonzero parallelogram point only when the determinant exceeds one. State that hypothesis before selecting the representative, then separately use primitivity to rule out radial edges.
3. A general projective transformation need not preserve an affine convex set. Keep the positivity of \(d\) on \(P\) and formula (7.22) visible.
4. Proposition 7.5 crosses the proposed Topic V/VI page boundary in the PDF. Include its entire proof on Topic V and import only its conclusion on Topic VI-A.
5. The wrap \(2\Delta=\varphi+1\), \(h=0\), and \(\varphi=N\) can create silent duplicate labels. Retain every boundary check from Lemma 7.2 and Proposition 7.3.
6. Theorem 6.1 is arithmetic until its final stage. Keep rotation symbols visually separate from polygon symbols and introduce \(x_i,E_i,\xi_i\) only in Stage 4.
7. A Karpelevič antecedent does not justify a "Previously known" badge. Leave those items unbadged and give a precise source note.
8. The lattice sail is an interpretation, not a substitute for the proof. Place Remark 6.3 after Theorem 6.1 and Corollary 6.2.

## Completion checklist for the eventual webpage

- Every symbol in (6.1)-(7.22) is defined before first use.
- Every imported statement has an exact linked contract.
- All nine formal items appear with manuscript numbering and complete proofs where applicable.
- Proposition 7.5 is not cut at the PDF page boundary.
- The \(N=13,\kappa=5\) example is verified by code.
- SVG tower counts and residue labels come from the same data object.
- The forward/reverse ledger includes every boundary case.
- Proof panels are keyboard-operable and closed by default.
- Reduced-motion mode replaces animation with numbered static frames.
- No result with only a Karpelevič antecedent is labelled "Previously known."
- Nothing from this blueprint is deployed before author review.
