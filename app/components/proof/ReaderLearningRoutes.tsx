import { sitePath } from "../../lib/site-path";
import { ReaderEigenvectorComparison } from "./ReaderEigenvectorComparison";
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
    <p>Take a ray making 5/14 of a turn with the positive real axis. In radians its angle is θ = 2π · 5/14 = 5π/7. Could an eight-state matrix have an eigenvalue on that ray at distance 0.98 from zero? The drawing gives us a target for the proof. We have to find the last point a matrix can reach and explain why every matrix stops there or earlier.</p>
    <ReaderOrderComparison />
    <article><h3>1. Draw a row of the matrix</h3><p>A stochastic row is a list of nonnegative weights adding to one. If Av = λv, each λvⱼ is an average of the coordinates of v. Their convex hull P therefore contains λP. Conversely, start with a polygon P containing λP. Expressing each image vertex as an average of the vertices gives the rows of a stochastic matrix. <a href={sitePath("/proof/#guide-1-polygon")}>Topic I defines the polygon and works through both constructions.</a></p>
      <p>For example, give each of four rows weight ½ on its own coordinate and ½ on the next, returning to the first after the fourth. Choose the column (2, 2i, −2, −2i). The first row gives 1 + i. Each of the other three rows makes the same midpoint construction a quarter turn farther round. All four outputs are therefore their inputs multiplied by the same number, λ = (1 + i)/2.</p>
      <ReaderEigenvectorComparison />
      <details><summary>Checkpoint: why is checking the vertices enough?</summary><p>If x = Σaⱼvⱼ is an average, then λx = Σaⱼλvⱼ. Each image vertex belongs to P, and an average of points of P is still in P. Thus λP ⊆ P.</p></details>
    </article>
    <article><h3>2. Follow a vertex until it lands inside a side</h3><p>Keep the angle fixed and choose the farthest attainable point λ on the ray. Its least realizing order is the smallest number of states that can produce it. At that order every vertex image touches the boundary. If it lands on a corner, we can multiply by λ again. When it lands between two corners, its position along their side gives us two averaging weights.</p>
      <aside className="reader-accepted-result"><strong>Accepted here: the contact and return structure.</strong> The proof chooses a polygon whose contacts can be followed in order. We can see how this works with the eight-state contact pattern on the arc from 1/3 to 3/8 of a turn. We first calculate what this pattern permits and then check that a matrix attains the bound. <a href={sitePath("/proof/topic-ii/#thm:saturation")}>II proves contact</a>, <a href={sitePath("/proof/topic-v/#lem:suspension")}>V counts the steps</a>, and <a href={sitePath("/proof/topic-vi/#thm:no-skipping")}>VI determines which side each return reaches</a>.</aside>
      <p>Number the vertices v₀ through v₇ counterclockwise. Start at v₀. Its first image is v₃, its second is v₆, and its third lands on the side from v₀ to v₁. Call the weight on v₀ at this contact β₁. The same three steps from v₁ land between v₁ and v₂, with weight β₂ on v₁. The remaining path takes v₂ to v₅ and then back to v₀.</p>
      <p>What multiplier takes v₀ to v₁? The first contact gives λ³v₀ = β₁v₀ + (1 − β₁)v₁. Subtract β₁v₀ and divide by (1 − β₁)v₀. We get g₁ = v₁/v₀ = (λ³ − β₁)/(1 − β₁). The second contact gives g₂ = v₂/v₁ in the same way. On the closing path λ² = v₀/v₂. Multiply all three ratios, and each vertex cancels with itself.</p>
      <math display="block" aria-label="The product g one times g two times lambda squared equals one because the vertex ratios cancel.">
        <mrow>
          <msub><mi>g</mi><mn>1</mn></msub><msub><mi>g</mi><mn>2</mn></msub><msup><mi>λ</mi><mn>2</mn></msup><mo>=</mo>
          <mfrac><msub><mi>v</mi><mn>1</mn></msub><msub><mi>v</mi><mn>0</mn></msub></mfrac><mo>·</mo>
          <mfrac><msub><mi>v</mi><mn>2</mn></msub><msub><mi>v</mi><mn>1</mn></msub></mfrac><mo>·</mo>
          <mfrac><msub><mi>v</mi><mn>0</mn></msub><msub><mi>v</mi><mn>2</mn></msub></mfrac><mo>=</mo><mn>1</mn>
        </mrow>
      </math>
      <p>There is one more fact we can read from the vertex order. Go from the direction of v₀ to that of v₁, then to that of v₂. These positive angles, u₁ and u₂, are the arguments of the ratios g₁ = v₁/v₀ and g₂ = v₂/v₁. Together they make less than one turn because v₀, v₁ and v₂ occur in that order around the origin. From v₂, two rotations of θ take us back to the starting direction. Those two rotations also make less than one turn. We end where we started, so the total is a whole number of turns. It is positive and smaller than two, hence exactly one. Thus u₁ + u₂ = 2π − 2θ = 4π/7. We know the mean, 2π/7, even before we know either weight. <a href={sitePath("/proof/topic-vii/#guide-7-continue-the-eight-state-towers-through-the-closing-path")}>Follow the paths in the drawing in Topic VII.</a></p>
      <details><summary>Checkpoint: what does a polynomial forget?</summary><p>An equation between complex products only determines angles modulo 2π. It cannot distinguish a total turn of 2π from 4π. The winding identity retains the actual sum and selects the branch attached to the chosen arc.</p></details>
    </article>
    <article><h3>3. Compare the two contact weights</h3>
      <p>The vertex coordinates have disappeared. What remains is the radius ρ = |λ| and the two factors g₁ and g₂. Since |λ²g₁g₂| = 1, taking logarithms gives log|g₁| + log|g₂| = −2 log ρ.</p>
      <p>Where can gⱼ lie? Write it as 1 + (λ³ − 1)/(1 − βⱼ). As βⱼ increases from zero towards one, the point starts at λ³ and moves along the line away from 1. Along that line, the logarithm of the distance from zero is a strictly convex function of the angle. Draw the chord joining the graph at u₁ and u₂. Its midpoint lies directly above their mean angle, 2π/7. If the angles differ, that midpoint lies strictly above the graph.</p>
      <aside className="reader-accepted-result"><strong>Accepted here: the sharp product bound.</strong> Applying this chord inequality to the product gives an upper bound on the radius of the extremal polygon at its least order. Equality requires equal weights. <a href={sitePath("/proof/topic-ix/#thm:convex-product")}>Topic IX proves the inequality along the factor line.</a></aside>
      <p>At equality both factors have the same angle, 2π/7. The ray at that angle meets the line through 1 and λ³ in just one point, since λ³ is nonreal and that line misses zero. The two factors coincide there. Their product has modulus 1/ρ², so each has length 1/ρ. This fixes the common factor completely. Substituting it into the contact equation gives ρ³(1 + ρ) = 2 cos(π/7).</p>
      <details><summary>How do the equal factors give this radius equation?</summary>
        <p>Put h = π/7. The common factor is g = (1/ρ)e<sup>2ih</sup>. Solving g = (λ³ − β)/(1 − β) for λ³ expresses it as the sum of a horizontal vector of length β and a vector of length (1 − β)/ρ at angle 2h. Since λ has angle 5h, its cube has angle 15h = 2π + h. The sum points exactly halfway between the two vectors.</p>
        <p>Rotate the sum back through h. The first vector now points down at angle −h and the second up at angle h. Their vertical components cancel, which gives β sin h = ((1 − β)/ρ) sin h. Thus the two lengths are equal and β = 1/(1 + ρ). Their horizontal components add to 2β cos h. This equals |λ³| = ρ³, giving ρ³(1 + ρ) = 2 cos h. <a href={sitePath("/proof/topic-xiv/#guide-14-choosing-and-checking-the-radius")}>See the two vectors in the worked example.</a></p>
      </details>
      <p>We can now find the radius numerically. The left side, ρ⁴ + ρ³, increases from 0 to 2 as ρ goes from 0 to 1. The target lies strictly between those values. Its unique solution is approximately 0.970613. We write K₈(5π/7) for this candidate radius. <a href={sitePath("/proof/topic-viii/")}>Topic VIII derives the equation for other rays.</a></p>
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
