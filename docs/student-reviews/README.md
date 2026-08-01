# Student-perspective proof-reader reviews

## Purpose

These reports test the website as a mathematical student would encounter it,
not merely as a source or implementation auditor would inspect it.

The assumed reader has completed a standard undergraduate linear-algebra
course. The reader is not assumed to know specialist convex geometry,
topological degree or covering spaces, symbolic dynamics, projective geometry,
Farey arithmetic, stochastic spectral theory, lattice sails, cycle-cover
determinants, or the Karpelevič literature.

## The two independent readings

Every physical proof page receives two separate linear readings. Each reviewer
starts at the top and repeatedly asks:

1. Do I already know this concept under the assumed background?
2. If not, is it defined before its first use?
3. Can I tell why this statement follows from the preceding material?
4. If an earlier result is imported, can I locate it and see exactly what it
   supplies?
5. Does the added intuition explain the formal step, rather than merely repeat
   it in different words?
6. Is the notation readable and stable?
7. Would a small example, counterexample, calculation, or figure remove a real
   comprehension obstacle?

The raw readings are retained in [`raw/`](./raw/). One consolidated report per
physical page appears in the [`reports/` index](./reports/README.md).

## Completion status

Both independent readings are complete for all sixteen physical pages. The
sixteen consolidated reports contain 44 Needed, 107 Advised, and 45 Would be
nice to add recommendations. None has been implemented; author selection is
the next step.

The four raw evidence files are:

- [`pass-1-topics-i-vi-b.md`](./raw/pass-1-topics-i-vi-b.md)
- [`pass-2-topics-i-vi-b.md`](./raw/pass-2-topics-i-vi-b.md)
- [`pass-1-topics-vii-xiv.md`](./raw/pass-1-topics-vii-xiv.md)
- [`pass-2-topics-vii-xiv.md`](./raw/pass-2-topics-vii-xiv.md)

## Recommendation classes

### Needed

A student cannot responsibly continue without the change. Typical cases are
an undefined nonstandard concept, a missing logical implication, an imported
result whose role cannot be found, ambiguous notation that changes the
meaning, or an explanation/figure that teaches something false.

### Advised

The formal chain can be reconstructed, but only with disproportionate effort
or specialist maturity. These changes materially improve learnability—for
example by adding a short derivation, relocating a definition, identifying the
exact earlier lemma used, or inserting a concrete example at a dense step.

### Would be nice to add

Optional enrichment that improves memory, motivation, or visual intuition but
is not required to follow the argument. Examples include a second worked
example, an optional animation, a historical aside, or an additional exercise.

Recommendations are reports, not automatic editing instructions. They remain
unimplemented until the author reviews and selects them.

## Physical-page inventory

The fourteen mathematical topics occupy sixteen physical pages because Topics
VI and XII are each split into Parts A and B:

1. Topic I
2. Topic II
3. Topic III
4. Topic IV
5. Topic V
6. Topic VI-A
7. Topic VI-B
8. Topic VII
9. Topic VIII
10. Topic IX
11. Topic X
12. Topic XI
13. Topic XII-A
14. Topic XII-B
15. Topic XIII
16. Topic XIV
