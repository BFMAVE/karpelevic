# Topics VIII–XIII connected closure audit

Scope: the seven routes `/proof/topic-viii/`, `/proof/topic-ix/`, `/proof/topic-x/`, `/proof/topic-xi/`, `/proof/topic-xii/a/`, `/proof/topic-xii/b/`, and `/proof/topic-xiii/`.

Canonical source: Part II of `Complete_Karp_arXiv.tex`. The generated content hash and the current TeX hash both equal `36e757ad28970f5f55517a83f3218455d5c343aa1d828bc8a549739fc351dcef`.

## Statement and proof inventory

- Topic VIII: 7 formal cards, 6 complete proof blocks, and 1 definition.
- Topic IX: 6 formal cards, 3 complete proof blocks, 2 definitions, and 1 algorithm.
- Topic X: 3 formal cards and 3 complete proof blocks.
- Topic XI: 5 formal cards and 5 complete proof blocks.
- Topic XII-A: 2 formal cards and 2 complete proof blocks.
- Topic XII-B: 2 formal cards and 2 complete proof blocks.
- Topic XIII: 3 formal cards and 3 complete proof blocks, including the complete deferred proof of Theorem II.3.1.
- Connected total: 28 formal cards and 24 complete manuscript proof blocks. The 24 proof-bearing cards also contain 147 guided proof steps; the four proofless cards are exactly three definitions and one algorithm.

Every proof block begins with the manuscript proof, reaches its terminal proof mark, and is followed by explanatory material rather than a substitute proof. No placeholder, omitted-proof marker, or truncated block remains.

## Dependency closure

The proof chain is acyclic and runs in this order:

1. Topic VIII imports only Topics I–II and standard linear-algebra/topological facts.
2. Topic IX imports the determinant-one lattice fact from Topic V and the radial setting from Topic VIII.
3. Topic X imports the completed Part I monodromy engine from Topic VII, new-shell criticality from Topic VIII, and the scalar candidate from Topic IX.
4. Topic XI first realizes the Topic IX candidate independently; only its final corollary combines that attainment with Topic X's upper comparison.
5. Topic XII-A imports Topics IX–X; Topic XII-B imports XII-A and assembles the exhaustive nesting argument.
6. Topic XIII imports VIII–XII-B and closes topology, base orders, and induction.

The future links in Algorithm II.2.6 are explicitly roadmap links to realization, nesting, and completion; the algorithm does not use those later conclusions to construct the candidate. Lemma II.7.2's mention of Theorem II.7.3 is also locative rather than circular: the lemma states the graph hypotheses in full and proves a generic cycle classification before the theorem applies it.

## First-use and reference audit

- The seven routes provide 107 first-use vocabulary entries in addition to their chapter setup blocks and dependency contracts.
- Nonstandard objects are either defined before the result that uses them or linked to the earlier topic that proves them. This includes the stochastic region and radial maximum, new-shell criticality, Farey cells and denominator labels, root sheets, selected orientation, heterogeneous profiles, the Jensen sheet, tail-row adjacency, cycle covers, reciprocal rooted chords, candidate radius, radial hull, and the actual-versus-candidate radius distinction.
- Added visible, numbered setup targets for equations (II.4.3), (II.2.6), (II.6.1), (II.6.6), and (II.7.1), because the formal proofs referred to those equations before the route exposed an anchor for them.
- Repaired the cross-topic link dictionary for the stochastic, Farey, equalization, realization, nesting, and completion routes. All local formal-proof anchors resolve, and every external proof anchor reaches an existing target.

## Provenance audit

Only the approved result categories occur:

- 9 `Classical result` badges;
- 6 `Previously known` badges;
- 2 `Strengthened` badges;
- 7 `New result` badges.

All 24 visible result badges have at least one registered `sourceId`. Every identifier resolves to a precise bibliography entry in the shared source registry. Definitions and the extraction algorithm carry no result badge, so they do not blur statement novelty with proof originality.

## Outcome

Connected closure status: **pass**. The sequence has no unresolved formal-proof link, no future theorem used as a hidden premise, no unsupported visible provenance badge, and no incomplete formal proof block.

Final connected-scope validation:

- the production build completes;
- all seven routes return HTTP 200;
- all 15 proof-route structure checks pass;
- 0 local anchors are unresolved;
- all 79 rendered cross-route proof references reach an existing target.
