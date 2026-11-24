import { sitePath } from "../../lib/site-path";
import { ReaderOrderComparison } from "./ReaderOrderComparison";

export function ReaderLearningRoutes() {
  return <section className="reader-learning-routes" id="reading-routes" aria-labelledby="learning-routes-heading">
    <h2 id="learning-routes-heading">Choose your route</h2>
    <p>If you know how to multiply a matrix by a vector, you can try the first construction. The overview follows one ray through the argument. The complete proof explains why the construction works on every ray.</p>
    <div className="reader-learning-route-grid">
      <article><h3>Understand the theorem and its main ideas</h3><p>Calculate how far seven and eight states can reach on the same ray. You can take three intermediate results as given and open their proofs as you go.</p><a href="#main-ideas">Begin the main-ideas route →</a></article>
      <article><h3>Study the complete proof</h3><p>Topics I–XII build the boundary theorem from the rows of a matrix. After Topic XII, try the eight-state example in XIV or use the theorem to measure contraction in XIII.</p><p><a href="#theorem-preview">Review the theorem&apos;s picture</a></p><a href={sitePath("/proof/")}>Begin the complete-proof route →</a></article>
    </div>
  </section>;
}

export function ReaderMainIdeas() {
  return <section className="reader-main-ideas" id="main-ideas" aria-labelledby="main-ideas-heading">
    <p className="section-label">The main-ideas route</p><h2 id="main-ideas-heading">Averages, returns, and a sharp radius</h2>
    <p>Take a ray making 5/14 of a turn with the positive real axis. Could an eight-state matrix have an eigenvalue on that ray at distance 0.98 from zero? The drawing gives us a target for the proof. We have to find the last point a matrix can reach and explain why every matrix stops there or earlier.</p>
    <ReaderOrderComparison />
    <article><h3>1. Draw a row of the matrix</h3><p>A stochastic row is a list of nonnegative weights adding to one. If Av = λv, each λvⱼ is an average of the coordinates of v. Their convex hull P therefore contains λP. Conversely, expressing each λvⱼ as such an average constructs the rows of a stochastic matrix. <a href={sitePath("/proof/")}>Topic I develops both directions.</a></p>
      <p>On the diamond with corners 1, i, −1, −i, the multiplier (1 + i)/2 takes each corner to the midpoint of the next side. We can write down the matrix at once. Give each row weight ½ on its own coordinate and ½ on the next. To find the boundary we also have to consider every other polygon allowed by the number of states.</p>
      <details><summary>Checkpoint: why is checking the vertices enough?</summary><p>If x = Σaⱼvⱼ is an average, then λx = Σaⱼλvⱼ. Each image vertex belongs to P, and an average of points of P is still in P. Thus λP ⊆ P.</p></details>
    </article>
    <article><h3>2. Follow a vertex until it lands inside a side</h3><p>Keep the angle fixed and choose the farthest attainable point λ on the ray. Its least realizing order is the smallest number of states that can produce it. At that order every vertex image touches the boundary. If it lands on a corner, we can multiply by λ again. When it lands between two corners, its position along their side gives us two averaging weights.</p>
      <aside className="reader-accepted-result"><strong>Accepted here: the contact and return structure.</strong> Every eligible polygon has boundary contacts; a chosen polygon can be organized into return paths; in the ordinary coprime case, a return cannot skip a base. <a href={sitePath("/proof/topic-ii/#thm:saturation")}>II proves universal contact</a>, <a href={sitePath("/proof/topic-v/#lem:suspension")}>V proves the tower partition</a>, and <a href={sitePath("/proof/topic-vi/#thm:no-skipping")}>VI rules out skipping</a>. VII handles the exceptional cases separately.</aside>
      <p>On the eight-state arc between 1/3 and 3/8 of a turn, two contacts give two factors. Multiply the return equations and the vertex coordinates cancel. Now follow the angles on the polygon. Two steps of angle θ and the angles u₁, u₂ of the factors make one complete turn. Thus 2θ + u₁ + u₂ = 2π. At θ = 5π/7 their sum is 4π/7 and their mean is 2π/7. <a href={sitePath("/proof/topic-vii/")}>Topic VII pairs them.</a></p>
      <details><summary>Checkpoint: what does a polynomial forget?</summary><p>An equation between complex products only determines angles modulo 2π. It cannot distinguish a total turn of 2π from 4π. The winding identity retains the actual sum and selects the branch attached to the chosen arc.</p></details>
    </article>
    <article><h3>3. Compare the two contact weights</h3>
      <p>Call the two weights β₁ and β₂. The product equation has a particularly simple form if we divide each factor λ³ − βⱼ by its positive complementary weight 1 − βⱼ. Write gⱼ for the quotient. This division preserves its angle, and the equation becomes λ²g₁g₂ = 1. Taking absolute values and then logarithms gives log|g₁| + log|g₂| = −2 log|λ|.</p>
      <p>Where can gⱼ lie? Write it as 1 + (λ³ − 1)/(1 − βⱼ). As βⱼ increases from zero towards one, the point starts at λ³ and moves along the line away from 1. Along that line, the logarithm of the distance from zero is a strictly convex function of the angle. Draw the chord joining the graph at u₁ and u₂. Its midpoint lies directly above their mean angle, 2π/7. If the angles differ, that midpoint lies strictly above the graph.</p>
      <aside className="reader-accepted-result"><strong>Accepted here: the sharp product bound.</strong> Applying this chord inequality to the product gives an upper bound on the radius of the extremal polygon at its least order. Equality requires equal weights. <a href={sitePath("/proof/topic-ix/#thm:convex-product")}>Topic IX proves the inequality along the factor line.</a></aside>
      <p>For eight states on our ray, equal weights give the equation ρ⁴ + ρ³ = 2 cos(π/7). The left side increases from 0 to 2 as ρ goes from 0 to 1. Its unique root is approximately 0.970613. We write K₈(5π/7) for this candidate radius. <a href={sitePath("/proof/topic-viii/")}>Topic VIII derives the radius equation from the endpoint angles.</a></p>
      <p>We can actually reach this number. At each of two branching states, give one edge the common weight β and the other edge 1 − β. Following the eigenvector around the graph recovers the same product. <a href={sitePath("/proof/topic-x/")}>Topic X constructs the matrix.</a></p>
    </article>
    <article><h3>4. Close the gap between orders</h3><p>Write Rₙ for the farthest attainable radius and Kₙ for the radius calculated from the scalar equation at order n. The polygon used to bound Rₙ may have only k vertices, with k smaller than n. Its bound is Kₖ. We have a construction reaching Kₙ, so we need to know how these two calculated radii compare.</p>
      <aside className="reader-accepted-result"><strong>Accepted here: independent scalar comparison.</strong> Kₖ(θ) ≤ Kₙ(θ) for k ≤ n in the main case. <a href={sitePath("/proof/topic-xi/#thm:order-monotonicity")}>XI compares the scalar equations before identifying them with the eigenvalue region.</a></aside>
      <p><strong>Main case: k ≥ 4.</strong></p><p className="reader-closure-chain">Rₙ(θ) ≤ Kₖ(θ) ≤ Kₙ(θ) ≤ Rₙ(θ)</p>
      <p>Starting at Rₙ and returning to it through three upper bounds forces equality at every step. On our ray this answers the opening question. Eight states can reach 0.970613 to the precision shown in the figure. At 0.98 the left side of the eight-state equation is about 1.864, already larger than 2 cos(π/7) ≈ 1.802. A radius of 0.98 is too large. Topic XII checks endpoint rays and the small orders, then uses a stationary reset matrix to fill the segment from zero to each boundary point for n ≥ 2. <a href={sitePath("/proof/topic-xii/")}>XII completes the theorem.</a></p>
      <details><summary>Checkpoint: why not infer the middle inequality from nested eigenvalue regions?</summary><p>Nesting applies to the actual eigenvalue regions. At this point Kₙ is only a scalar candidate. Using nesting to compare these candidates would already assume the equality the argument is trying to prove.</p></details>
    </article>
    <p className="reader-route-finish"><a href={sitePath("/proof/topic-xiv/")}>Finish with the eight-state matrix, its polygon, and the boundary explorer →</a></p>
    <p>To see how a side contact determines the next turn, <a href={sitePath("/proof/")}>continue through the complete proof from Topic I</a>. After the example, <a href={sitePath("/proof/topic-xiii/")}>XIII asks what the theorem tells us about polygonal measurement</a>.</p>
  </section>;
}
