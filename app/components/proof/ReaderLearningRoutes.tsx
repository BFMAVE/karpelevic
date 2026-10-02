import { sitePath } from "../../lib/site-path";

export function ReaderLearningRoutes() {
  return <section className="reader-learning-routes" id="reading-routes" aria-labelledby="learning-routes-heading">
    <h2 id="learning-routes-heading">Choose your route</h2>
    <p>Basic analysis and linear algebra are enough to start. Following every proof independently also takes practice with constraints, integer arithmetic and accumulated angles. You can first learn the mechanism, then return to its harder justifications.</p>
    <div className="reader-learning-route-grid">
      <article><h3>Understand the theorem and its main ideas</h3><p>Read the overview below, try its checkpoints, then follow the eight-state example. Three results are explicitly accepted along this route, with links to their proofs.</p><a href="#main-ideas">Begin the main-ideas route →</a></article>
      <article><h3>Study the complete proof</h3><p>Read I–XII in order, working through the guided lessons and opening the source proofs. No lemma is omitted from this route. Finish with XIV&apos;s example; XIII is an optional application.</p><a href={sitePath("/proof/")}>Begin the complete-proof route →</a></article>
    </div>
  </section>;
}

export function ReaderMainIdeas() {
  return <section className="reader-main-ideas" id="main-ideas" aria-labelledby="main-ideas-heading">
    <p className="section-label">The main-ideas route</p><h2 id="main-ideas-heading">Averages, returns, and a sharp radius</h2>
    <p>This route explains what the proof accomplishes. It temporarily accepts the three results marked below; their linked lessons supply the justifications for the complete-proof route.</p>
    <article><h3>1. Draw the eigenvector</h3><p>A stochastic row is a list of nonnegative weights adding to one. If Av = λv, each λvⱼ is an average of the coordinates of v. Their convex hull P therefore contains λP. Conversely, expressing each λvⱼ as such an average constructs the rows of a stochastic matrix. <a href={sitePath("/proof/")}>Topic I develops both directions.</a></p>
      <p>Containment supplies an eigenvalue. It does not yet say that the eigenvalue lies farthest out on its ray.</p>
      <details><summary>Checkpoint: why is checking the vertices enough?</summary><p>If x = Σaⱼvⱼ is an average, then λx = Σaⱼλvⱼ. Each image vertex belongs to P, and an average of points of P is still in P. Thus λP ⊆ P.</p></details>
    </article>
    <article><h3>2. Follow a polygon that cannot improve</h3><p>Fix a direction and choose a farthest attainable point λ on it. Work at λ&apos;s least realizing order. Among its invariant polygons at that order, the proof chooses one with the fewest interior side contacts, then the smallest area at a fixed scale. Its contact equations read λvⱼ = (1−βᵢ)vᵢ + βᵢvᵢ₋₁ after the appropriate cyclic index shift.</p>
      <aside className="reader-accepted-result"><strong>Accepted here: the contact and return structure.</strong> Every eligible polygon has boundary contacts; a chosen polygon can be organized into return paths; in the ordinary coprime case, a return cannot skip a base. <a href={sitePath("/proof/topic-ii/#thm:saturation")}>II proves universal contact</a>, <a href={sitePath("/proof/topic-v/#lem:suspension")}>V proves the tower partition</a>, and <a href={sitePath("/proof/topic-vi/#thm:no-skipping")}>VI rules out skipping</a>. VII handles the exceptional cases separately.</aside>
      <p>Multiplying the return equations cancels the vertex coordinates. Adding their real, continued angles separately keeps the number of complete turns. The result is a product equation <em>and</em> a winding identity. <a href={sitePath("/proof/topic-vii/")}>Topic VII pairs them.</a></p>
      <details><summary>Checkpoint: what does a polynomial forget?</summary><p>An equation between complex products only determines angles modulo 2π. It cannot distinguish a total turn of 2π from 4π. The winding identity retains the actual sum and selects the branch attached to the chosen arc.</p></details>
    </article>
    <article><h3>3. Replace unequal weights by equal ones</h3><p>The return arithmetic gives neighbouring fractions p/q and r/s. On a fixed ray, their angle budget gives a strictly increasing real equation with one root Kₙ(θ). This is a proposed radius, whose sharpness still needs proof. <a href={sitePath("/proof/topic-viii/")}>VIII defines that root.</a></p>
      <aside className="reader-accepted-result"><strong>Accepted here: the sharp product bound.</strong> At a fixed real winding, convexity of the logarithmic factor size bounds the radius by this root, with equality precisely when the weights agree. <a href={sitePath("/proof/topic-ix/#thm:convex-product")}>IX derives the calculus inequality and equality case.</a></aside>
      <p>Equal weights also tell us how to build a realizing matrix. Draw return cycles and assign each branch its two complementary weights. The eigenvector equations around the graph reproduce the same product. <a href={sitePath("/proof/topic-x/")}>X proves attainment independently.</a> An upper bound and a construction meeting it are the two halves of sharpness.</p>
    </article>
    <article><h3>4. Close the gap between orders</h3><p>The farthest eigenvalue in order n may already be realizable at a smaller order k. The geometric argument bounds it by Kₖ; the construction gives Kₙ. Those two quantities still need comparison.</p>
      <aside className="reader-accepted-result"><strong>Accepted here: independent scalar comparison.</strong> Kₖ(θ) ≤ Kₙ(θ) for k ≤ n in the main case. <a href={sitePath("/proof/topic-xi/#thm:order-monotonicity")}>XI compares the scalar equations before identifying them with the eigenvalue region.</a></aside>
      <p><strong>Main case: k ≥ 4.</strong></p><p className="reader-closure-chain">Rₙ(θ) ≤ Kₖ(θ) ≤ Kₙ(θ) ≤ Rₙ(θ)</p>
      <p>The first inequality is the geometric product bound; the middle one is order comparison; the last is attainment. Equality follows throughout. The elementary small orders are checked separately. A stationary reset matrix fills each radial segment from zero to an attainable eigenvalue, so the boundary determines the entire region. <a href={sitePath("/proof/topic-xii/")}>XII completes the theorem.</a></p>
      <details><summary>Checkpoint: why not infer the middle inequality from nested eigenvalue regions?</summary><p>Nesting applies to the actual eigenvalue regions. At this point Kₙ is only a scalar candidate. Using nesting to compare these candidates would already assume the equality the argument is trying to prove.</p></details>
    </article>
    <p className="reader-route-finish"><a href={sitePath("/proof/topic-xiv/")}>Finish with the eight-state matrix, its polygon, and the boundary explorer →</a></p>
    <p>You now have the mechanism and its three deferred obligations. To discharge them, <a href={sitePath("/proof/")}>continue through the complete proof from Topic I</a>. After the example, <a href={sitePath("/proof/topic-xiii/")}>XIII asks what the theorem tells us about polygonal measurement</a>.</p>
  </section>;
}
