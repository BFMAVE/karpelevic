import { ProofDependencyContract } from "../../components/proof/ProofDependencyContract";
import { ProofResultGroup } from "../../components/proof/ProofResultGroup";
import { StochasticFareyFigure } from "../../components/proof/figures/StochasticFareyFigures";
import { sitePath } from "../../lib/site-path";
import {
  topicVIIIExactSources,
  topicVIIIResults,
  topicIXExactSources,
  topicIXResults,
  topicXExactSources,
  topicXResults,
  topicXIExactSources,
  topicXIResults,
} from "../topics-viii-xi-reader";

function ExactSourceShelf({
  headingId,
  sources,
}: {
  headingId: string;
  sources: readonly string[];
}) {
  return (
    <section className="proof-topic-sources" aria-labelledby={headingId}>
      <p className="section-label">Sources cited in this topic</p>
      <h3 id={headingId}>Sources and provenance</h3>
      <p>
        These entries support inherited statements and historical classifications.
        A classification describes the result, not the originality of the proof
        printed on this page.
      </p>
      <ol>
        {sources.map((source) => (
          <li key={source}>{source}</li>
        ))}
      </ol>
    </section>
  );
}

function SetupBlock({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="topic-i-textbook proof-chapter-group">
      <header>
        <div>
          <p className="section-label">{eyebrow}</p>
          <h3>{title}</h3>
        </div>
        <div>{children}</div>
      </header>
    </section>
  );
}

export function TopicVIIIChapter() {
  return (
    <>
      <ProofDependencyContract
        imported={[
          {
            label: "Topic I — polygonal complexity and radial criticality",
            href: sitePath("/proof/"),
            explanation:
              "supplies the intrinsic definition that Definition II.4.6 restates in stochastic language.",
          },
          {
            label: "Topic II — strict area monotonicity",
            href: sitePath("/proof/topic-ii/"),
            explanation:
              "justifies that two full-dimensional compact convex bodies of equal area cannot be properly nested.",
          },
        ]}
        background={[
          {
            label: "Finite-dimensional compactness",
            explanation:
              "closed and bounded subsets of Euclidean space are compact; closed subsets and continuous images of compact sets are compact.",
          },
          {
            label: "Real characteristic polynomials",
            explanation:
              "nonreal roots occur in conjugate pairs, and eigenvalues are the zeros of det(λI−A). See Horn–Johnson, Matrix Analysis, Chapters 1 and 8.",
          },
          {
            label: "Finite rotation or dense rotation",
            explanation:
              "the powers of a unit complex number either form a finite root-of-unity orbit or are dense on the unit circle.",
          },
        ]}
        provedHere={
          <p>
            We prove compactness and star-shapedness of Θ<sub>n</sub>, the exact
            equivalence between stochastic eigenpairs and invariant polygons,
            the unit-circle classification, the interior-origin lemma, and the
            implication from a non-inherited radial maximum to an
            <var>N</var>-critical planar contraction.
          </p>
        }
      />

      <SetupBlock eyebrow="The object being studied" title="From stochastic matrices to a radial region">
        <p>
          A real <strong>row-stochastic matrix</strong> has nonnegative entries
          and every row sums to one. For a positive integer <var>n</var>,
          Θ<sub>n</sub> is the set of all complex eigenvalues of all such
          <var>n</var>×<var>n</var> matrices. The matrices vary as well as the
          eigenvalue: Θ<sub>n</sub> is one region assembled from an entire class
          of matrices.
        </p>
        <p>
          Along the ray of angle θ we write
          {" "}<span className="math-inline">Rₙ(θ)=max{"{"}ρ∈[0,1] : ρeⁱθ∈Θₙ{"}"}</span>.
          Proposition II.4.1 and Corollary II.4.3 will prove that this maximum
          exists and that every smaller radius on the same ray is also present.
          Thus <span className="math-inline">Rₙ(θ)eⁱθ</span> really is the
          outermost attainable point on that ray.
        </p>
        <details className="proof-item-commentary proof-item-explainer">
          <summary>
            <span>Why the subscript is matrix order</span>
            Open the state-count interpretation
          </summary>
          <div className="proof-item-explainer-body">
            <p>
              The order <var>n</var> counts stochastic states. Theorem II.4.2
              proves that allowing <var>n</var> states is equivalent to allowing
              an invariant polygon with at most <var>n</var> vertices. This is
              why a change of matrix order becomes a change of vertex budget.
            </p>
          </div>
        </details>
      </SetupBlock>

      <ProofResultGroup
        number="VIII.A"
        title="The stochastic–polygon equivalence"
        introduction={
          <p>
            The first five statements establish the global shape of Θ<sub>n</sub>
            and prove that stochastic eigenpairs and finite invariant polygons
            encode exactly the same existence question.
          </p>
        }
        results={topicVIIIResults.slice(0, 5)}
      />

      <SetupBlock eyebrow="The extremal condition" title="A radial maximum not inherited from order N−1">
        <p>
          Fix an order <span className="math-inline">N≥4</span> and an angle
          {" "}<span className="math-inline">0&lt;θ&lt;π</span>. A point is a
          <strong> non-inherited radial maximum</strong> when it satisfies
        </p>
        <p id="karp:eq:new-shell" className="display-equation proof-setup-equation">
          <span className="math-inline">
            λ=Rᴺ(θ)eⁱθ ∈ Θᴺ∖Θᴺ⁻¹, 0&lt;|λ|&lt;1.
          </span>{" "}
          <a className="part-i-equation-number" href="#karp:eq:new-shell" aria-label="Equation II.4.3, permalink">
            (II.4.3)
          </a>
        </p>
        <p>
          The first clause
          excludes the origin and the already classified unit circle. The second
          says the point genuinely appears at order <var>N</var>; it was not
          inherited from a smaller stochastic matrix.
        </p>
        <p>
          There are two independent extremal statements. Non-inheritance from
          order <var>N</var>−1 rules out every polygon with at most
          <var>N</var>−1 vertices. Being outermost on the order-<var>N</var> ray
          rules out every outward enlargement that still has an invariant
          polygon with at most <var>N</var> vertices. Proposition II.4.7 matches
          these clauses, one by one, with radial polygonal criticality.
        </p>
        <StochasticFareyFigure kind="new-shell" />
      </SetupBlock>

      <ProofResultGroup
        number="VIII.B"
        title="From a non-inherited radial maximum to critical geometry"
        introduction={
          <p>
            The definition is repeated here deliberately: the final proposition
            should be readable without translating notation back to Topic I.
          </p>
        }
        results={topicVIIIResults.slice(5)}
      />

      <ExactSourceShelf headingId="topic-viii-exact-sources" sources={topicVIIIExactSources} />
    </>
  );
}

export function TopicIXChapter() {
  return (
    <>
      <ProofDependencyContract
        imported={[
          {
            label: "Topic V — the determinant-one lattice cell",
            href: sitePath("/proof/topic-v/"),
            explanation:
              "supplies the elementary lattice-parallelogram fact used in the converse direction of Farey adjacency.",
          },
          {
            label: "Topic VIII — compact radial stochastic regions",
            href: sitePath("/proof/topic-viii/"),
            explanation:
              "explains why one eventually wants one candidate radius on every ray, although no stochastic realization is used in this chapter.",
          },
        ]}
        background={[
          {
            label: "Intermediate-value and monotonicity principles",
            explanation:
              "a continuous function changing sign has a zero; a strictly increasing function has at most one zero.",
          },
          {
            label: "Elementary trigonometry",
            explanation:
              "sine addition, the signs of sine on (0,π), and first-order limits sin t/t→1 are used explicitly in the proofs.",
          },
        ]}
        provedHere={
          <p>
            We prove the Farey-neighbour criterion, define the reduced Ito
            polynomial, solve one scalar equation uniquely on every open cell
            ray, control both endpoints including the order-three exception,
            and package the result as an exact extraction algorithm.
          </p>
        }
      />

      <SetupBlock eyebrow="Arithmetic coordinates" title="Farey cells, with every symbol fixed">
        <p>
          Fix <span className="math-inline">n≥3</span>. The Farey sequence <span className="math-inline">Fₙ</span> contains
          every reduced fraction in [0,1] whose denominator is at most
          <var> n</var>, in increasing order. We use its upper half
          {" "}<span className="math-inline">Fₙ⁺=Fₙ∩[0,1/2]</span>. Two
          consecutive entries <span className="math-inline">f&lt;g</span> form
          one <strong>Farey cell</strong>. Fractions are always reduced and
          denominators are positive. For the formulas, label the endpoint with
          smaller denominator as <span className="math-inline">p/q</span> and
          the other as <span className="math-inline">r/s</span>, so
          {" "}<span className="math-inline">q≤s</span>. These labels need not
          follow the left-to-right order <span className="math-inline">f&lt;g</span>.
        </p>
        <p>
          Inside this cell choose <span className="math-inline">x</span> and set
          {" "}<span className="math-inline">θ=2πx</span>,
          {" "}<span className="math-inline">d=⌊n/q⌋</span>, and
          {" "}<span className="math-inline">e=s−dq</span>. The signed integer
          <var>e</var> is retained; it may be positive, zero, or negative. The
          positive angular distances used by the scalar equation are
        </p>
        <p id="karp:eq:A-B-absolute" className="display-equation proof-setup-equation">
          <span className="math-inline">
            A=2π|qx−p|, B=(2π/d)|sx−r|.
          </span>{" "}
          <a
            className="part-i-equation-number"
            href="#karp:eq:A-B-absolute"
            aria-label="Equation II.2.6, permalink"
          >
            (II.2.6)
          </a>
        </p>
        <p>
          On the open
          cell, the manuscript proves that all sine factors occurring below
          lie in ranges where their displayed signs are correct.
        </p>
        <StochasticFareyFigure kind="farey-five" />
      </SetupBlock>

      <ProofResultGroup
        number="IX.A"
        title="The Farey cell and its Ito polynomial"
        introduction={
          <p>
            Determinant-one arithmetic identifies adjacent fractions. The Ito
            polynomial then names the algebraic family whose correct radial
            branch must still be selected.
          </p>
        }
        results={topicIXResults.slice(0, 2)}
      />

      <SetupBlock eyebrow="The scalar selection rule" title="One real equation replaces an ambiguous algebraic branch">
        <p>
          For the fixed cell and ray, seek <span className="math-inline">ρ∈(0,1)</span>
          satisfying
          {" "}<span className="math-inline">ρˢ⁄ᵈ sin A + ρᑫ sin B = sin(A+B)</span>.
          The left side is strictly increasing in ρ. Proposition II.2.3 proves
          that it starts below and ends above the right side, so exactly one
          solution exists. This uniqueness is the branch-selection mechanism.
        </p>
        <p>
          The associated point is <span className="math-inline">λ=ρe²πⁱˣ</span>.
          The proof constructs complementary coefficients α and β, fixes one
          fractional-power branch by an explicit exponential, and derives the
          reciprocal-coordinate identity. No phrase such as “take the principal root” is
          left implicit.
        </p>
        <StochasticFareyFigure kind="rooted-chord" />
      </SetupBlock>

      <ProofResultGroup
        number="IX.B"
        title="Unique raywise candidate and its closed cell curve"
        introduction={
          <p>
            The next statements prove existence, uniqueness, algebraic
            membership, endpoint continuity, and the exact exceptional real
            segment before the candidate curve receives its formal definition.
          </p>
        }
        results={topicIXResults.slice(2, 5)}
      />

      <ProofResultGroup
        number="IX.C"
        title="An exact extraction algorithm"
        introduction={
          <p>
            The algorithm separates exact rational cell selection from the one
            numerical operation: solving a strictly monotone scalar equation
            on a certified interval.
          </p>
        }
        results={topicIXResults.slice(5)}
      />

      <ExactSourceShelf headingId="topic-ix-exact-sources" sources={topicIXExactSources} />
    </>
  );
}

export function TopicXChapter() {
  return (
    <>
      <ProofDependencyContract
        imported={[
          {
            label: "Topic VII — complex monodromy and the Farey equation",
            href: sitePath("/proof/topic-vii/"),
            explanation:
              "supplies, for N≥4, the varying-parameter product, lifted phase identity, and common continuous argument interval obtained from critical polygons.",
          },
          {
            label: "Topic VIII — criticality of a non-inherited radial maximum",
            href: sitePath("/proof/topic-viii/"),
            explanation:
              "turns the stochastic extremum into the critical planar contraction required by Topic VII.",
          },
          {
            label: "Topic IX — the unique scalar candidate",
            href: sitePath("/proof/topic-ix/"),
            explanation:
              "provides the unique equality radius and the branch-controlled scalar equation used for comparison.",
          },
        ]}
        background={[
          {
            label: "Strict Jensen inequality",
            explanation:
              "for a strictly convex function, the value at an average is at most the average of the values, with equality only when all inputs coincide.",
          },
          {
            label: "Continuous arguments on a zero-free path",
            explanation:
              "a continuous complex path avoiding zero has a continuous real-valued argument after one initial value is fixed.",
          },
        ]}
        provedHere={
          <p>
            We transfer Part I monodromy to the stochastic extremum, audit both
            possible complex orientations, construct the log-sine potential,
            and prove that every varying parameter list has radius no larger than
            the constant-parameter case.
          </p>
        }
      />

      <SetupBlock eyebrow="Scope boundary" title="This chapter proves an upper comparison—nothing is realized here">
        <p>
          Let <span className="math-inline">λ=ρeⁱθ</span> be a non-inherited radial
          maximum. By Topic VIII&apos;s definition this chapter is in the range
          <span className="math-inline"> N≥4</span>. Topic VII may choose either
          λ or its conjugate as the multiplier μ best adapted to the oriented
          contact system. Theorem
          II.5.1 records every output of that choice; Lemma II.5.2 later returns
          the conclusion to the original upper-half-plane orientation.
        </p>
        <p>
          For a nonzero complex number <var>z</var> that is not positive real,
          {" "}<span className="math-inline">arg₊(z)</span> means the unique
          argument in <span className="math-inline">(0,2π)</span>. We write
          {" "}<span className="math-inline">ϑ=arg₊(μ)</span> and
          {" "}<span className="math-inline">y=ϑ/(2π)</span>. Keeping this
          lifted real angle, instead of reducing every equation modulo
          {" "}<span className="math-inline">2π</span>, is what makes the phase
          average in Theorem II.6.1 exact.
        </p>
        <p>
          The result of this page is the one-sided inequality
          {" "}<span className="math-inline">ρ≤ρ*</span>, where ρ* is Topic
          IX&apos;s unique constant-parameter radius. We do <strong>not</strong> yet
          know from this argument that ρ* is an eigenvalue of a stochastic
          matrix. That independent construction belongs to Topic XI, and only
          then may the equality conclusion be closed.
        </p>
        <StochasticFareyFigure kind="reflection" />
      </SetupBlock>

      <ProofResultGroup
        number="X.A"
        title="Compress the geometry and repair orientation"
        introduction={
          <p>
            The imported monodromy theorem states exactly which Part I
            conclusions enter.
            The reflection lemma shows that an existential orientation choice
            cannot change the modulus comparison.
          </p>
        }
        results={topicXResults.slice(0, 2)}
      />

      <SetupBlock eyebrow="The convexity argument" title="Why one convex function controls every factor">
        <p>
          In the abstract analytic theorem, write the multiplier being analysed
          as <span className="math-inline">λ=ρe<sup>2πix</sup></span>. In the application
          to Theorem II.5.1 this multiplier is the selected <var>μ</var>, so
          <span className="math-inline">x=y=ϑ/(2π)</span>.
        </p>
        <p id="karp:eq:oriented-cell" className="display-equation proof-setup-equation">
          <span className="math-inline">
            p/q&lt;x&lt;r/s, rq−ps=1, q≤s.
          </span>{" "}
          <a className="part-i-equation-number" href="#karp:eq:oriented-cell" aria-label="Equation II.6.1, permalink">
            (II.6.1)
          </a>
        </p>
        <p>
          In the selected orientation set
          {" "}<span className="math-inline">A=qϑ−2πp</span> and
          {" "}<span className="math-inline">B=(2πr−sϑ)/d</span>. These are
          positive and satisfy <span className="math-inline">A+B&lt;π</span>.
          Choose
          {" "}<span className="math-inline">M=Arg(μᑫ−1)</span> on the common
          continuous argument interval supplied by Theorem II.5.1, where
          {" "}<span className="math-inline">A&lt;M&lt;π</span>. For a factor
          parameter β, let <span className="math-inline">u=Arg(μᑫ−β)</span> on
          that same continuous branch and define
          {" "}<span className="math-inline">F(u)=log(|μᑫ−β|/(1−β))</span>.
          Elementary triangle trigonometry rewrites this as
          {" "}<span className="math-inline">F(u)=log sin M−log sin(M−u)</span>.
        </p>
        <p>
          Therefore <span className="math-inline">F″(u)=csc²(M−u)&gt;0</span>
          throughout the selected interval: <var>F</var> is strictly convex.
          The lifted monodromy phase fixes the average of the factor arguments,
          while the product identity fixes the sum of their potentials. Jensen
          then compares every varying parameter list with the constant list.
        </p>
        <p id="karp:eq:rhoq-sine" className="display-equation proof-setup-equation">
          At β=0, the same triangle gives
          {" "}<span className="math-inline">ρᑫ=sin M/sin(M−A)</span>.{" "}
          <a className="part-i-equation-number" href="#karp:eq:rhoq-sine" aria-label="Equation II.6.6, permalink">
            (II.6.6)
          </a>
        </p>
        <StochasticFareyFigure kind="jensen" />
      </SetupBlock>

      <ProofResultGroup
        number="X.B"
        title="The sharp inequality for varying parameters"
        introduction={
          <p>
            Every sign, branch, and equality condition is part of the formal
            theorem. The guide additionally expands the phase arithmetic and
            the monotonicity step that converts the trigonometric inequality
            into a radial one.
          </p>
        }
        results={topicXResults.slice(2)}
      />

      <ExactSourceShelf headingId="topic-x-exact-sources" sources={topicXExactSources} />
    </>
  );
}

export function TopicXIChapter() {
  return (
    <>
      <ProofDependencyContract
        imported={[
          {
            label: "Topic IX — scalar candidate and complementary coefficients",
            href: sitePath("/proof/topic-ix/"),
            explanation:
              "supplies the reduced Ito polynomial, the candidate root, and parameters α,β with α+β=1.",
          },
          {
            label: "Topic X — the upper comparison",
            href: sitePath("/proof/topic-x/"),
            explanation:
              "is used only in the final deferred corollary, after stochastic attainment has been proved independently.",
          },
        ]}
        background={[
          {
            label: "Leibniz determinant expansion",
            explanation:
              "determinants are sums over permutations; each permutation decomposes uniquely into vertex-disjoint cycles.",
          },
          {
            label: "Block-diagonal padding",
            explanation:
              "adjoining absorbing states adds eigenvalues equal to one but preserves every eigenvalue of the original stochastic block.",
          },
        ]}
        provedHere={
          <p>
            We derive the cycle-cover coefficient rule, classify every directed
            cycle of the sparse realization graph, compute its characteristic polynomial in
            both signs of <span className="math-inline">s−dq</span>, realize
            every scalar candidate at order at most <var>n</var>, and only then
            close the constant-parameter conclusion deferred from Topic X.
          </p>
        }
      />

      <SetupBlock eyebrow="Matrix convention" title="A weighted graph is a stochastic matrix with its rows drawn">
        <p>
          We use the <strong>tail-row convention</strong>: a directed edge
          {" "}<span className="math-inline">u→v</span> of weight <var>w</var>
          is stored as follows.
        </p>
        <p id="karp:eq:tail-row-adjacency" className="display-equation proof-setup-equation">
          <span className="math-inline">Aᵤᵥ=w(u,v)</span>.{" "}
          <a
            className="part-i-equation-number"
            href="#karp:eq:tail-row-adjacency"
            aria-label="Equation II.7.1, permalink"
          >
            (II.7.1)
          </a>
        </p>
        <p>
          Thus the
          entries in row <var>u</var> are the weights leaving vertex <var>u</var>.
          The matrix is row-stochastic exactly when all edge weights are
          nonnegative and the weights leaving each vertex sum to one.
        </p>
        <p>
          A <strong>cycle cover term</strong> chooses vertex-disjoint directed
          cycles; every unused vertex contributes a diagonal factor <var>t</var>
          in <span className="math-inline">det(tI−A)</span>. Lemma II.7.1
          derives its sign rather than asking the reader to remember a graph
          determinant formula.
        </p>
        <StochasticFareyFigure kind="cycle-ledger" />
      </SetupBlock>

      <ProofResultGroup
        number="XI.A"
        title="Cycle-cover classification"
        introduction={
          <>
            <p>
              First the determinant rule is proved from Leibniz. Then the sparse
              realization graph is checked so that no unlisted directed cycle can
              contribute to its characteristic polynomial.
            </p>
            <p>
              Lemma II.7.2 mentions the realization theorem that follows only
              to identify where its generic graph lemma will be applied. Its
              hypotheses describe the graph completely, and its proof does not
              assume the later theorem.
            </p>
          </>
        }
        results={topicXIResults.slice(0, 2)}
      />

      <SetupBlock eyebrow="Two graph regimes" title="Why the construction splits at s=dq">
        <p>
          The target polynomial contains local cycles of length <var>q</var> and
          one global cycle of length <var>s</var>. With <var>d</var> local
          blocks, the unmodified global route has length <span className="math-inline">dq</span>.
          If <span className="math-inline">s≤dq</span>, cross edges enter some
          blocks part-way through and shorten that route. If
          {" "}<span className="math-inline">s&gt;dq</span>, deterministic
          subdivision vertices lengthen one cross edge. Neither operation
          changes the local <var>q</var>-cycles.
        </p>
        <p>
          The construction uses
          {" "}<span className="math-inline">N₀=max(dq,s)</span> states before padding. Farey
          arithmetic gives both <span className="math-inline">dq≤n</span> and
          {" "}<span className="math-inline">s≤n</span>, so the construction
          never uses more than <var>n</var> states. Absorbing-state padding then
          reaches exactly order <var>n</var> when necessary.
        </p>
        <StochasticFareyFigure kind="sparse-cases" />
      </SetupBlock>

      <ProofResultGroup
        number="XI.B"
        title="Sparse stochastic realization and attainment"
        introduction={
          <p>
            The theorem handles both regimes with an explicit graph, checks
            row sums and endpoint weights, and computes the exact reduced Ito
            polynomial. The following corollary inserts Topic IX&apos;s candidate.
          </p>
        }
        results={topicXIResults.slice(2, 4)}
      />

      <SetupBlock eyebrow="Deferred conclusion" title="Only now do the two inequalities meet">
        <p>
          Topic X proved <span className="math-inline">ρ≤ρ*</span> without
          assuming a stochastic matrix at the candidate radius. Corollary
          II.7.4 has now constructed that matrix, so maximality of
          {" "}<span className="math-inline">ρ=Rᴺ(θ)</span> gives the reverse
          inequality <span className="math-inline">ρ*≤ρ</span>. Equality is
          therefore forced, and the strict equality condition in Jensen forces
          all varying parameters to coincide.
        </p>
        <StochasticFareyFigure kind="squeeze" />
      </SetupBlock>

      <ProofResultGroup
        number="XI.C"
        title="The outermost parameters are constant"
        introduction={
          <p>
            Corollary II.6.2 appears here rather than in Topic X because its
            proof logically depends on the independent realization established
            immediately above.
          </p>
        }
        results={topicXIResults.slice(4)}
      />

      <ExactSourceShelf headingId="topic-xi-exact-sources" sources={topicXIExactSources} />
    </>
  );
}
