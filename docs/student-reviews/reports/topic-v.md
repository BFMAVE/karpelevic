# Topic V — Student-perspective review report

- Route: /proof/topic-v/
- Manuscript scope: PDF pages 31–40; Proposition 7.5 closes on page 41;
  Lemma A.6 is on page 65.
- Formal inventory: 1 theorem, 5 lemmas/propositions, 1 definition, and 2 items
  comprising a corollary and a remark.
- Student baseline: one standard linear-algebra course; no specialist
  background.
- Review status: recommendations only; no page changes implemented.

## Independent reading 1

### Where the reader’s understanding holds

- The finite-rotation setup appears before the theorem and Plate V.1 fixes a
  useful example \(N=13,\kappa=5\).
- Lemma A.6 (/proof/topic-v/#part-i-item-70) states the lattice
  determinant/index fact and supplies an exact Cassels source.
- Theorem 6.1 (/proof/topic-v/#part-i-item-37) has a visible four-stage
  architecture, and its tower figure makes the two return heights and
  \(q\nu+h\Delta=N\) tangible.
- The return setup before Lemmas 7.1–7.2
  (/proof/topic-v/#part-i-item-40 and #part-i-item-41) consolidates the base
  interval, heights, branches, and endpoint dictionary.
- Proposition 7.3 (/proof/topic-v/#part-i-item-42) gives an exact four-set
  return ledger.
- Once an affine projective chart is available, Proposition 7.5
  (/proof/topic-v/#part-i-item-44) derives an explicit fractional convex-
  combination formula rather than relying on a slogan.

### Questions and points of friction, in reading order

1. The ceiling notation in the finite-rotation setup and the geometric meaning
   of lattice index in Lemma A.6 are not illustrated.
2. Theorem 6.1 asserts that each base cycle has \(\Delta/\delta\) long bases,
   passes from \(L(\mathbb Z^2)=\delta\mathbb Z\) to a gcd identity, and invokes
   a “corresponding level-zero state” in the injectivity proof without displaying
   the residue count, Bézout step, or state \((0,F(t,i))\).
3. Stage 3’s coefficient argument and inequalities
   \(-d<L(Z)<0\) remain abstract without a worked record vector.
4. Equation (7.5) attributes two endpoint identities to “the same
   internal-tower calculation” without showing
   \(F(h,\varphi-1)=-1\) and the height inequality.
5. Proposition 7.3 reuses \(s\) for \(r^{-1}\), colliding with the established
   side-successor map. Its figure is labelled “Plate VI-B.1” while appearing in
   Topic V.
6. Definition 7.4 (/proof/topic-v/#part-i-item-43) describes successive
   projections verbally but does not display their domains, codomains, and
   final composition.
7. Proposition 7.5 assumes the projective plane, homogeneous coordinates,
   points at infinity, and a chart sending \(J\) to infinity without a local
   primer at the declared level.

## Independent reading 2

### Where the reader’s understanding holds

- This reader praised the separation between finite-rotation notation, return
  setup, and the forward/reverse corridor dictionary.
- Lemma A.6, the final tower picture in Theorem 6.1, Lemma 7.2, the four-set
  ledger, and the explicit convex-combination calculation in Proposition 7.5
  all worked.
- The proof was judged logically ambitious but honest about the modules it
  imports.

### Questions and points of friction, in reading order

1. This reading considered Theorem 6.1’s educational layer insufficient for
   the baseline. It wanted one example carrying
   \(V,V',U,\nu,\nu',\Delta,h,F,H_i\) through the entire proof.
2. Stages 1 and 3 leave the lattice-point reflection and the \((A,B)\)
   coefficient cases too compressed, including the time-zero edge case.
3. It independently found equation (7.5) unproved in its present setup prose.
4. It independently identified the \(s=r^{-1}\) notation collision and the
   wrong-topic plate caption.
5. It wanted Definition 7.4’s chain of perspectivities displayed explicitly.
6. It also noted that Proposition 7.5 says “strict convexity” although the site
   uses the custom “strict polygon” property, and requested definitions of
   floor/ceiling, lattice index, and determinant-one integer bases.

## Cross-reading synthesis

The readings agree that Theorem 6.1 needs a worked proof-level example,
equation (7.5) needs its calculation, \(s\) must not denote two live maps, and
the projective holonomy needs explicit maps. Reading 1 additionally found the
local projective-coordinate primer missing; Reading 2 additionally identified
the broader pedagogical failure of Stages 1 and 3. Both perspectives are
retained, without treating all desired illustrations as formal gaps.

### Needed

1. **Theorem 6.1, /proof/topic-v/#part-i-item-37 — omitted Stage 1 and Stage 3
   implications.** Expand the lattice-point reflection in Stage 1 and the
   \((A,B)\)-coefficient cases in Stage 3, including the \(e=0\) time-zero
   record convention. These are proof transitions the stated reader cannot
   presently verify; the illustrative example recommended below is supporting
   pedagogy rather than the missing proof itself.
2. **Theorem 6.1, /proof/topic-v/#part-i-item-37 — essential count and
   injectivity steps.** Prove the \(\Delta/\delta\) long-base count per orbit,
   include the Bézout/gcd sentence, and name the competing state as
   \((0,F(t,i))\) with its domain condition.
3. **Return setup, equation (7.5), before
   /proof/topic-v/#part-i-item-40.** Display the tower state for
   \(\varphi-1\), including \(F(h,\varphi-1)=-1\) and
   \(h<H_{\varphi-1}\), then derive both endpoint and relative-interior
   identities.
4. **Proposition 7.3, /proof/topic-v/#part-i-item-42 — notation collision.**
   Replace \(s=r^{-1}\) by \(r^{-1}\) or a new symbol distinct from the side
   successor \(s\), and propagate the change through Topics V–VI-B.
5. **Definition 7.4, /proof/topic-v/#part-i-item-43 — holonomy chain.** Display
   every perspectivity with source line, centre, and target line; write their
   composition and explain the final identification that makes it a return map.
6. **Before Proposition 7.5, /proof/topic-v/#part-i-item-44 — projective
   coordinate primer.** Define the real projective plane, homogeneous
   coordinates, affine charts and points at infinity; construct the denominator
   that vanishes on \(J\); and state why projective maps preserve lines and
   intersections.

### Advised

1. **Finite-rotation setup and Lemma A.6,
   /proof/topic-v/#part-i-item-70.** Define floor, ceiling, lattice index, and
   why determinant-one integer vectors form a \(\mathbb Z^2\)-basis; add one
   \(2\times2\) quotient-class example.
2. **Theorem 6.1, /proof/topic-v/#part-i-item-37 — proof-level numerical
   example and record geometry.** Carry one concrete rotation through its
   residue records, vectors \(V,V'\), determinant, \(U,\Delta,q,h\), tower
   heights, and bijection \(F\). Include one upper-record lattice point from the
   \(N=13,\kappa=5\) example and translate \(-d<L(Z)<0\) back into residue
   language.
3. **Proposition 7.3, /proof/topic-v/#part-i-item-42 — return ledger.** Give one
   forward and one reverse numerical instance listing
   \(M,M^\circ,D,R,c,A\).
4. **Proposition 7.3 figure, /proof/topic-v/#part-i-item-42.** Give “Plate
   VI-B.1” a Topic V number, or caption it explicitly as a later plate reproduced
   here.
5. **Proposition 7.5, /proof/topic-v/#part-i-item-44 — terminology.** Replace
   “strict convexity” with “strict-polygon property” or the exact property the
   proposition preserves.
6. **Remark 6.3, /proof/topic-v/#part-i-item-39 — lattice-sail ray.** State that
   \(L=0\) has equation \(b=(\kappa/N)h\), explaining the displayed slope.
7. **Proposition 7.3, /proof/topic-v/#part-i-item-42 — scope.** Say explicitly
   that the corridor motion is conditional here; Topic VI-B will construct and
   globally validate it.

### Would be nice to add

1. **Theorem 6.1, /proof/topic-v/#part-i-item-37.** Add an interactive
   residue/tower diagram parameterized by \(N,\kappa\).
2. **Theorem 6.1, Stage 1.** Add a lattice-sail plate showing the record triangle
   and the forbidden interior lattice point.
3. **Definition 7.4, /proof/topic-v/#part-i-item-43.** Add a corridor diagram
   that highlights each perspectivity’s source and target line in order.

## Recommendation count

- Needed: 6
- Advised: 7
- Would be nice to add: 3

## Author decisions

Pending.
