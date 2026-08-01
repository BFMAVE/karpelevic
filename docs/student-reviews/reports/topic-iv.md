# Topic IV — Student-perspective review report

- Route: /proof/topic-iv/
- Manuscript scope: PDF pages 19–30.
- Formal inventory: 5 selection results and 5 mutation results.
- Student baseline: one standard linear-algebra course; no specialist
  background.
- Review status: recommendations only; no page changes implemented.

## Independent reading 1

### Where the reader’s understanding holds

- The page has a coherent two-part goal: finish global one-sided selection, then
  turn the exact corner surgery into a finite mutation system.
- Lemma 4.10 (/proof/topic-iv/#part-i-item-27) makes the \(r/c/\ell\) endpoint
  ledger finite and visible.
- Lemma 4.11 (/proof/topic-iv/#part-i-item-28) explicitly audits endpoint
  inclusion under both orientations; Corollary 4.12
  (/proof/topic-iv/#part-i-item-29) then follows without unnecessary
  repetition.
- Lemma 4.13 (/proof/topic-iv/#part-i-item-30) defines cyclic shift, gcd, lifted
  angles, and winding before using them.
- Proposition 5.1 (/proof/topic-iv/#part-i-item-32) is exhaustive: clipping,
  strictness, invariance, changed/unchanged fields, coefficients, and global
  ownership are all checked.
- Lemma 5.5 (/proof/topic-iv/#part-i-item-36) distinguishes partial sweeps from
  complete group sweeps and defines the first-record event.

### Questions and points of friction, in reading order

1. Two distinct figures are labelled “Plate IV.1,” making references to the
   endpoint ledger/global interlacing ambiguous.
2. In Lemma 4.11, the shared-side proof presents \(c_j=0\) before foregrounding
   the premise that \(r_j=2\) forces the nontrivial-cap case. The \(1\to0\)
   transition is difficult to picture.
3. Lemma 4.13 states
   \(\sum_i\Theta_{i-\kappa}=\sum_i\Theta_i-2\pi\kappa\) without unwrapping the
   indices. Its removal of the possible \(2\pi m_i\) corrections is algebraically
   correct but hard to visualize.
4. Lemma 4.14 (/proof/topic-iv/#part-i-item-31) says iteration gives its formula
   without an induction step, and its prose names Hatcher §1.3 although the
   rendered result sources expose only Schneider.
5. Proposition 5.1 asks the reader to track \(i,i+1,j_0\) without a numerical
   ledger.
6. Lemma 5.5 uses \(2^{\mathbb Z/N\mathbb Z}\), \(\dot\cup\), translated
   blocks, and residue intervals without a compact notation prelude. Its
   residue-color figure does not show an actual sequence of legal sets.

## Independent reading 2

### Where the reader’s understanding holds

- This reader found Lemmas 4.10–4.14 navigable and praised the scope boundary
  excluding \(\kappa=N\) from the mutation module.
- The coincidence register before Proposition 5.1 and the full proof audit were
  judged mathematically responsible.
- Corollaries 5.3–5.4
  (/proof/topic-iv/#part-i-item-34 and
  /proof/topic-iv/#part-i-item-35) clearly distinguish Boolean histories from
  geometric realizations.

### Questions and points of friction, in reading order

1. The opening dependency contract attributes one-sided representations,
   successors, and contact rotation to Definition 1.2 in a way this reader
   judged inaccurate or at least insufficiently local.
2. Corollary 5.2 (/proof/topic-iv/#part-i-item-33) uses \(I,I'\) and the head map
   \(h\) without a displayed local dictionary, making
   \(\sigma(E_i)=\chi(h(E_i))\) harder to parse.
3. Proposition 5.1’s equation (5.4) uses the convex-chord determinant sign for
   all relevant \(k\) without stating or illustrating the fact.
4. Lemma 5.5 introduces its Boolean process, scores, group sweep, repeatability
   invariant, and residue mergers faster than the guided layer explains them.
   This reader regarded one complete state-by-state example as essential for the
   stated audience.
5. The residue-interval merger is the conceptual heart of the reduction but has
   no small numerical instance connecting the residue circle to legal
   \(\kappa\)-sweeps.
6. This reading independently wanted the shifted-angle sum unwrapped.

## Cross-reading synthesis

Both readings regard Proposition 5.1 as formally serious and Lemma 5.5 as the
main educational bottleneck. They agree that the modular-angle calculation and
the Boolean sweep need more local work. Reading 2 found a dependency/dictionary
problem where Reading 1 could reconstruct the imported notation; this is
resolved by requiring a truthful local contract, not by repeating all earlier
theory. A full worked sweep is classified as Advised rather than Needed because
Reading 1 could follow the formal ledger, while the presently undefined set
notation itself remains Needed.

### Needed

1. **Opening dependency contract and Corollary 5.2,
   /proof/topic-iv/#part-i-item-33 — contact dictionary.** Point to the actual
   first definitions and display
   \(I=\{E_i:\beta_i>0\}\), \(h(E_i)=x_i\),
   \(s(E_i)=E_{i+1}\), and
   \(\sigma(E_i)=\chi(h(E_i))\). Do not claim that a linked definition supplies
   more than it actually does.
2. **Proposition 5.1, /proof/topic-iv/#part-i-item-32 — convex-chord sign in
   equation (5.4).** State and prove that the oriented chord
   \([x_{i-1},x_{i+1}]\) places every other polygon vertex in the required
   closed half-plane, or derive the determinant sign directly from cyclic order.
3. **Lemma 5.5, /proof/topic-iv/#part-i-item-36 — combinatorial notation.**
   Define the power set \(2^{\mathbb Z/N\mathbb Z}\), disjoint union
   \(\dot\cup\), translated block \(G+\kappa\), the score components, complete
   group sweep, intermediate states, and repeatability invariant before the
   proof uses them.

### Advised

1. **Figures near Lemmas 4.10–4.11,
   /proof/topic-iv/#part-i-item-27 and #part-i-item-28 — duplicate plate label.**
   Give the endpoint-ledger and global-interlacing figures distinct numbers and
   update all references. The ambiguity impairs navigation, but it does not
   block the mathematical argument.
2. **Lemma 4.14, /proof/topic-iv/#part-i-item-31 — source address.** Render the
   Hatcher §1.3 source named in the prose, or replace it with the actual intended
   source. The proof is present, so this is a source-traceability problem rather
   than a logical gap.
3. **Lemma 4.11, /proof/topic-iv/#part-i-item-28 — shared-side transition.**
   Reorder the premise and conclusion in the \(r_j=2\) case, then add a
   three-gap endpoint diagram for the \(1\to0\) transition.
4. **Lemma 4.13, /proof/topic-iv/#part-i-item-30 — lifted-angle sums.** Show the
   wrapped-index calculation producing \(-2\pi\kappa\) and add an unwrapped
   angle strip excluding the nonzero winding corrections.
5. **Lemma 4.14, /proof/topic-iv/#part-i-item-31 — iteration.** Write the
   \(t=1\) case and one induction step rather than saying only “iteration
   gives.”
6. **Proposition 5.1, /proof/topic-iv/#part-i-item-32 — index load.** Divide the
   proof into internal stages matching its formal conclusions and work one
   \(N=7\) or \(N=8,\kappa=2\) ledger with \(i,i+1,j_0\), old/new fields, and
   the exceptional endpoint.
7. **Lemma 5.5, /proof/topic-iv/#part-i-item-36 — complete sweep example.**
   List every state in one legal sweep, then show a collision and group merger
   on the corresponding residue circle. Before introducing
   \(\mathcal R\), also say that a “reachable minimizer” minimizes the score
   among the finite family of reachable strict sets, not among polygons or
   areas.
8. **Lemma 5.5, /proof/topic-iv/#part-i-item-36 — interval arithmetic.** State
   why any \(\delta\) consecutive integers contain one representative of every
   residue modulo \(\delta\).

### Would be nice to add

1. **Proposition 5.1, /proof/topic-iv/#part-i-item-32.** Add a toggle overlaying
   intrinsic edge labels and indexed labels.
2. **End of Topic IV.** Add a compact notation card for
   \(N,\lambda,\kappa,\xi_i,\alpha_i,\beta_i,S,I,s,\sigma,\delta,\varphi\).
3. **End of Topic IV.** Add a three-line checkpoint: exact mutation law,
   invariant orbit structure, and interval normal form.

## Recommendation count

- Needed: 3
- Advised: 8
- Would be nice to add: 3

## Author decisions

Pending.
