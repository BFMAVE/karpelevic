import type { ProofDependency } from "../components/proof/ProofDependencyContract";
import type {
  GuidedProofStep,
  ProofVocabularyEntry,
} from "../components/proof/ProofResult";
import type {
  AdvancedProofGroup,
  AdvancedProofSetup,
} from "../components/proof/AdvancedProofChapter";
import { sitePath } from "../lib/site-path";
import {
  topicVCorridorDictionary,
  topicVFormalSetups as topicVGeneratedFormalSetups,
  topicVReaderHtmlByItem,
  topicVReturnSetup,
} from "./topic-v-vii-html";
import {
  collectSourceIds,
  makeReaderResult,
  type ReaderResultGuide,
} from "./topic-v-vii-result-builder";

const vocabulary = (
  term: string,
  definition: React.ReactNode,
  example?: React.ReactNode,
): ProofVocabularyEntry => ({ term, definition, example });

const step = (
  title: string,
  explanation: React.ReactNode,
  check?: React.ReactNode,
): GuidedProofStep => ({ title, explanation, check });

const topicVContactNotation: AdvancedProofSetup = {
  id: "topic-v-contact-notation",
  title: "Polygon and contact notation imported from Topic IV",
  html: String.raw`
    <p>
      Let λ be the nonreal complex multiplier fixed in Topic IV, with
      |λ|&lt;1, and let
      <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>P</mi><mo>=</mo><mi mathvariant="normal">conv</mi><mo stretchy="false">{</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>x</mi><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">P=\operatorname{conv}\{x_0,\ldots,x_{N-1}\}</annotation></semantics></math>
      be the strict invariant polygon obtained in Topic IV. Here “strict” is the
      custom term from Definition 1.2: the displayed vertices are precisely
      the extreme points, each listed once; it does not mean that the convex
      set is strictly convex. The vertices are listed counterclockwise, and
      every vertex, side, and contact index below is interpreted modulo
      <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mi>N</mi></math>.
    </p>
    <p>
      Put
      <math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>E</mi><mi>i</mi></msub><mo>=</mo><mo stretchy="false">[</mo><msub><mi>x</mi><mrow><mi>i</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>,</mo><msub><mi>x</mi><mi>i</mi></msub><mo stretchy="false">]</mo><mo>,</mo><mspace width="1.5em"></mspace><msub><mi>ξ</mi><mi>i</mi></msub><mo>=</mo><mi>λ</mi><msub><mi>x</mi><mrow><mi>i</mi><mo>−</mo><mi>κ</mi></mrow></msub><mo>=</mo><msub><mi>β</mi><mi>i</mi></msub><msub><mi>x</mi><mrow><mi>i</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>α</mi><mi>i</mi></msub><msub><mi>x</mi><mi>i</mi></msub><mo>,</mo></mrow><annotation encoding="application/x-tex">E_i=[x_{i-1},x_i],\qquad \xi_i=\lambda x_{i-\kappa}=\beta_i x_{i-1}+\alpha_i x_i,</annotation></semantics></math>
      where
      <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>α</mi><mi>i</mi></msub><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width="0.5em"></mspace><msub><mi>β</mi><mi>i</mi></msub><mo>≥</mo><mn>0</mn><mo>,</mo><mspace width="0.5em"></mspace><msub><mi>α</mi><mi>i</mi></msub><mo>+</mo><msub><mi>β</mi><mi>i</mi></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">\alpha_i&gt;0,\ \beta_i\geq0,\ \alpha_i+\beta_i=1</annotation></semantics></math>.
      Thus
      <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>ξ</mi><mi>i</mi></msub><mo>∈</mo><mi mathvariant="normal">relint</mi><mo stretchy="false">(</mo><msub><mi>E</mi><mi>i</mi></msub><mo stretchy="false">)</mo><mo>⇔</mo><msub><mi>β</mi><mi>i</mi></msub><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">\xi_i\in\operatorname{relint}(E_i)\iff\beta_i&gt;0</annotation></semantics></math>;
      when <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>β</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">\beta_i=0</annotation></semantics></math>,
      the contact is the included endpoint
      <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>ξ</mi><mi>i</mi></msub><mo>=</mo><msub><mi>x</mi><mi>i</mi></msub></mrow><annotation encoding="application/x-tex">\xi_i=x_i</annotation></semantics></math>.
      These are the standing contact data: the positive orientation, the
      half-open endpoint convention, and the common shift
      <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mi>κ</mi></math>.
      No additional admissibility hypothesis is being imposed.
    </p>
    <p>
      Write
      <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>δ</mi><mo>=</mo><mi mathvariant="normal">gcd</mi><mo stretchy="false">(</mo><mi>N</mi><mo>,</mo><mi>κ</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\delta=\gcd(N,\kappa)</annotation></semantics></math>.
      This is the number of orbits of addition by
      <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mi>κ</mi></math>
      on the cyclic labels. When two consecutive record deficits are
      <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ν</mi><mo>&gt;</mo><msup><mi>ν</mi><mo>′</mo></msup></mrow><annotation encoding="application/x-tex">\nu&gt;\nu'</annotation></semantics></math>,
      their difference
      <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>Δ</mi><mo>=</mo><mi>ν</mi><mo>−</mo><msup><mi>ν</mi><mo>′</mo></msup></mrow><annotation encoding="application/x-tex">\Delta=\nu-\nu'</annotation></semantics></math>
      will be the first-return step on the base interval. These symbols are
      defined again in the formal rotation statement where their identities
      are proved.
    </p>
    <p>
      Define the relative-interior contact indices by
      <math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>S</mi><mo>=</mo><mo stretchy="false">{</mo><mi>i</mi><mo>:</mo><msub><mi>ξ</mi><mi>i</mi></msub><mo>∈</mo><mi mathvariant="normal">relint</mi><mo stretchy="false">(</mo><msub><mi>E</mi><mi>i</mi></msub><mo stretchy="false">)</mo><mo stretchy="false">}</mo><mo>=</mo><mo stretchy="false">{</mo><mn>1</mn><mo>,</mo><mo>…</mo><mo>,</mo><mi>φ</mi><mo stretchy="false">}</mo><mo>.</mo></mrow><annotation encoding="application/x-tex">S=\{i:\xi_i\in\operatorname{relint}(E_i)\}=\{1,\ldots,\varphi\}.</annotation></semantics></math>
      The final equality is the cyclic relabelling and reduction proved in
      Topic IV. When the first-return map is introduced, the same representative
      set is denoted by 𝓑={1,…,φ}.
    </p>
    <p>
      The display 𝓑={1,…,φ} is a list of cyclic labels, not an ordinary
      interval of new integers. In the full-length case φ=N, the terminal
      label N denotes the same residue as 0 modulo N, so the list still
      contains exactly N labels. The same convention applies to every
      full-length interval written below.
    </p>
    <p>
      If <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi><mo>&lt;</mo><mi>N</mi></mrow><annotation encoding="application/x-tex">\varphi&lt;N</annotation></semantics></math>,
      let <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mi>h</mi></math>
      be the least positive integer for which
      <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">[</mo><mi>h</mi><mi>κ</mi><msub><mo stretchy="false">]</mo><mi>N</mi></msub><mo>∈</mo><mo stretchy="false">{</mo><mi>N</mi><mo>−</mo><mi>φ</mi><mo>,</mo><mo>…</mo><mo>,</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">[h\kappa]_N\in\{N-\varphi,\ldots,N-1\}</annotation></semantics></math>.
      Topic IV proves the sharper first-entrance identities
      <math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">[</mo><mi>h</mi><mi>κ</mi><msub><mo stretchy="false">]</mo><mi>N</mi></msub><mo>=</mo><mi>N</mi><mo>−</mo><mi>φ</mi><mo>,</mo><mspace width="1.5em"></mspace><mo stretchy="false">[</mo><mi>m</mi><mi>κ</mi><msub><mo stretchy="false">]</mo><mi>N</mi></msub><mo>&lt;</mo><mi>N</mi><mo>−</mo><mi>φ</mi><mspace width="0.5em"></mspace><mo stretchy="false">(</mo><mn>0</mn><mo>≤</mo><mi>m</mi><mo>&lt;</mo><mi>h</mi><mo stretchy="false">)</mo><mo>.</mo></mrow><annotation encoding="application/x-tex">[h\kappa]_N=N-\varphi,\qquad[m\kappa]_N&lt;N-\varphi\quad(0\leq m&lt;h).</annotation></semantics></math>
      If <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi><mo>=</mo><mi>N</mi></mrow><annotation encoding="application/x-tex">\varphi=N</annotation></semantics></math>,
      we use <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>h</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">h=0</annotation></semantics></math>.
    </p>
    <p>
      This is the precise bridge to the record terminology used below. If
      <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi><mo>&lt;</mo><mi>N</mi></mrow><annotation encoding="application/x-tex">\varphi&lt;N</annotation></semantics></math>,
      then <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>h</mi><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">h&gt;0</annotation></semantics></math>
      is a record time: its residue is
      <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>N</mi><mo>−</mo><mi>φ</mi></mrow><annotation encoding="application/x-tex">N-\varphi</annotation></semantics></math>,
      every earlier residue is smaller, and its deficit is therefore
      <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mi>φ</mi></math>.
      If <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi><mo>=</mo><mi>N</mi></mrow><annotation encoding="application/x-tex">\varphi=N</annotation></semantics></math>,
      then <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>h</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">h=0</annotation></semantics></math>
      is the declared time-zero record, whose deficit is
      <math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>N</mi><mo>=</mo><mi>φ</mi></mrow><annotation encoding="application/x-tex">N=\varphi</annotation></semantics></math>.
    </p>
    <p>
      Plate V.1 also mentions the <strong>Klein sail</strong>. Let C be the
      closed cone bounded by the positive b-axis and the ray L(h,b)=0. The
      Klein sail of C is the boundary visible from the origin of
      conv((C∩ℤ²)∖{0}). The proof uses the complete polygonal chain
      through the lattice vectors associated with successive upper-record
      times, including any such vector lying in the relative interior of a
      straight sail edge; it never assumes that every record vector is a
      vertex of the sail.
    </p>
  `,
};

const topicVArithmeticGeometryDictionary: AdvancedProofSetup = {
  id: "topic-v-arithmetic-geometry-dictionary",
  title: "How the return arithmetic becomes polygon geometry",
  html: String.raw`
    <p>
      The rotation theorem is first proved without a polygon. The following
      dictionary states exactly how its symbols are used once the polygon is
      restored.
    </p>
    <details class="proof-item-commentary proof-item-explainer">
      <summary><span>Arithmetic-to-geometry dictionary</span>Open the five correspondences</summary>
      <div class="proof-item-explainer-body">
        <ul>
          <li><strong>Base i.</strong> The cyclic label i names the polygon vertex xᵢ from which one return tower starts.</li>
          <li><strong>Height Hᵢ.</strong> This is the number of multiplications by λ made before the orbit first returns to the base interval.</li>
          <li><strong>Target r(i).</strong> The top of the tower issued from i lands on the side Eᵣ₍ᵢ₎.</li>
          <li><strong>Top identity.</strong> The equality λᴴⁱxᵢ=ξᵣ₍ᵢ₎ says that the returned image point is exactly the contact assigned to that side.</li>
          <li><strong>Internal levels.</strong> Every state before the top lies outside the relative-interior contact interval and therefore gives an endpoint identity, not an additional relative-interior contact.</li>
        </ul>
      </div>
    </details>
  `,
};

const topicVProjectiveScope: AdvancedProofSetup = {
  id: "topic-v-projective-scope",
  title: "Why the projective proof that Δ=1 requires N≥4: an explicit critical triangle",
  html: String.raw`
    <p>
      Topic I defines ν<sub>poly</sub>(T) as the minimum number of vertices
      of a nondegenerate polygon P satisfying TP⊆P. It calls T
      <em>N-critical</em> when ν<sub>poly</sub>(T)=N but
      ν<sub>poly</sub>(tT)&gt;N for every t&gt;1. The calculation below uses
      exactly these definitions from
      <a href="${sitePath("/proof/#def:N-critical")}">Definition 1.1</a>.
    </p>
    <p>
      The assumption N≥4 is essential. The following family is 3-critical,
      places all three image vertices in the relative interiors of their
      assigned sides, and has (φ,κ,Δ)=(3,2,2).
    </p>
    <details class="proof-item-commentary proof-item-explainer">
      <summary><span>Why the projective proof that Δ=1 requires N≥4</span>Open the explicit critical-triangle calculation</summary>
      <div class="proof-item-explainer-body">
        <p>
          Fix 1/2&lt;a&lt;1. A matrix is <dfn>doubly stochastic</dfn> when its
          entries are nonnegative and every row and every column sums to one.
          Consider
        </p>
        <math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>B</mi><mi>a</mi></msub><mo>=</mo><mrow><mo>(</mo><mtable><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn><mo>−</mo><mi>a</mi></mtd><mtd><mi>a</mi></mtd></mtr><mtr><mtd><mi>a</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn><mo>−</mo><mi>a</mi></mtd></mtr><mtr><mtd><mn>1</mn><mo>−</mo><mi>a</mi></mtd><mtd><mi>a</mi></mtd><mtd><mn>0</mn></mtd></mtr></mtable><mo>)</mo></mrow><mo>.</mo></mrow><annotation encoding="application/x-tex">B_a=\begin{pmatrix}0&amp;1-a&amp;a\\a&amp;0&amp;1-a\\1-a&amp;a&amp;0\end{pmatrix}.</annotation></semantics></math>
        <p>
          Let e₀,e₁,e₂ be the standard coordinate vectors of ℝ³, let
          H₀={u∈ℝ³:u₀+u₁+u₂=0}, let 𝟙=(1,1,1), and put xᵢ=eᵢ−𝟙/3. The
          triangle P=conv{x₀,x₁,x₂} lies in H₀; it is independent of a.
          Because Bₐ is doubly stochastic, it preserves H₀ and fixes 𝟙. Its restriction
          Tₐ=Bₐ|H₀ therefore satisfies
        </p>
        <math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mtable columnalign="left"><mtr><mtd><mrow><msub><mi>T</mi><mi>a</mi></msub><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mi>a</mi><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mo>(</mo><mn>1</mn><mo>−</mo><mi>a</mi><mo>)</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi>T</mi><mi>a</mi></msub><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mo>(</mo><mn>1</mn><mo>−</mo><mi>a</mi><mo>)</mo><msub><mi>x</mi><mn>0</mn></msub><mo>+</mo><mi>a</mi><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi>T</mi><mi>a</mi></msub><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>a</mi><msub><mi>x</mi><mn>0</mn></msub><mo>+</mo><mo>(</mo><mn>1</mn><mo>−</mo><mi>a</mi><mo>)</mo><msub><mi>x</mi><mn>1</mn></msub><mo>.</mo></mrow></mtd></mtr></mtable><annotation encoding="application/x-tex">\begin{aligned}T_ax_0&amp;=ax_1+(1-a)x_2,\\T_ax_1&amp;=(1-a)x_0+ax_2,\\T_ax_2&amp;=ax_0+(1-a)x_1.\end{aligned}</annotation></semantics></math>
        <p>
          Identify H₀ with ℂ by sending xⱼ to exp(2πij/3). Substitution in the
          three displayed formulas shows that Tₐ is multiplication by
        </p>
        <math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mtable columnalign="left"><mtr><mtd><mrow><msub><mi>λ</mi><mi>a</mi></msub><mo>=</mo><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mi>i</mi><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><mo>(</mo><mn>2</mn><mi>a</mi><mo>−</mo><mn>1</mn><mo>)</mo><mo>,</mo></mrow></mtd></mtr><mtr><mtd><mrow><msup><mrow><mo>|</mo><msub><mi>λ</mi><mi>a</mi></msub><mo>|</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>+</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><msup><mrow><mo>(</mo><mn>2</mn><mi>a</mi><mo>−</mo><mn>1</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>&lt;</mo><mn>1</mn><mo>.</mo></mrow></mtd></mtr></mtable><annotation encoding="application/x-tex">\begin{aligned}\lambda_a&amp;=-\frac12+i\frac{\sqrt3}{2}(2a-1),\\ |\lambda_a|^2&amp;=\frac14+\frac34(2a-1)^2&lt;1.\end{aligned}</annotation></semantics></math>
        <p>
          The displayed vertex formulas also say
          Tₐx<sub>i−2</sub>∈relint[x<sub>i−1</sub>,x<sub>i</sub>] for every
          cyclic label i. Hence all three contacts lie in relative interiors,
          and the page&apos;s convention gives (φ,κ)=(3,2). Thus Tₐ is a nonreal
          contraction and TₐP⊆P, so three vertices suffice.
          No nondegenerate polygon has fewer than three vertices, hence
          ν<sub>poly</sub>(Tₐ)=3.
        </p>
        <p>
          It remains to check radial criticality. Suppose t&gt;1 and some
          nondegenerate triangle R=conv{q₀,q₁,q₂} satisfied tTₐR⊆R. Barycentric
          coordinates are nonnegative coefficients summing to one. Writing
          every image vertex in those coordinates gives tTₐQ=QΓ, where
          Q:ℝ³→H₀ sends c to Σⱼcⱼqⱼ and Γ is nonnegative with every column
          summing to one (that is, column-stochastic). The map Q is surjective,
          the identity QΓ=tTₐQ makes ker(Q) invariant under Γ, and the induced
          map on ℝ³/ker(Q) is conjugate to tTₐ. It therefore has eigenvalues
          tλₐ and tλ̄ₐ. Column sums equal to one give 𝟙ᵀΓ=𝟙ᵀ, so 1 is a left
          eigenvalue of Γ and hence an eigenvalue of Γ. Counted with algebraic
          multiplicity, 1, tλₐ, and tλ̄ₐ are all three eigenvalues of the
          3×3 matrix Γ, and therefore
        </p>
        <math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mtable columnalign="left"><mtr><mtd><mrow><mi mathvariant="normal">tr</mi><mo stretchy="false">(</mo><mi>Γ</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><mi>t</mi><msub><mi>λ</mi><mi>a</mi></msub><mo>+</mo><mi>t</mi><msub><mover><mi>λ</mi><mo>¯</mo></mover><mi>a</mi></msub></mrow></mtd></mtr><mtr><mtd><mrow><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>t</mi><mi mathvariant="normal">Re</mi><mo stretchy="false">(</mo><msub><mi>λ</mi><mi>a</mi></msub><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mo>−</mo><mi>t</mi><mo>&lt;</mo><mn>0</mn><mo>.</mo></mrow></mtd></mtr></mtable><annotation encoding="application/x-tex">\begin{aligned}\operatorname{tr}(\Gamma)&amp;=1+t\lambda_a+t\overline\lambda_a,\\&amp;=1+2t\operatorname{Re}(\lambda_a)=1-t&lt;0.\end{aligned}</annotation></semantics></math>
        <p>
          This is impossible because the trace of a nonnegative matrix is the
          sum of its nonnegative diagonal entries. Therefore, for no t&gt;1 does
          the scalar multiple tTₐ admit an invariant triangle, and Tₐ is
          3-critical.
          Explicitly: P is an invariant triangle for Tₐ, whereas for every
          t&gt;1 the map tTₐ admits no invariant polygon with at most three
          vertices.
        </p>
        <p>
          Finally, the residues for (N,κ)=(3,2) begin 0,2,1,0. Time zero has
          the declared deficit 3; time one reaches residue 2 and therefore has
          deficit 1. Thus δ=gcd(3,2)=1 and
          Δ=3−1=2. Hence φ&gt;δ but Δ≠1. Topic XIII proves the stochastic
          eigenvalue region for orders one, two, and three directly; it does
          not pass this exceptional triangle through the projective-geometric
          proof that Δ=1. <strong>Topic XIII is forthcoming on the public site.</strong>
        </p>
      </div>
    </details>
  `,
};

const guides: readonly ReaderResultGuide[] = [
  {
    itemNumber: 70,
    label: "Lemma A.6",
    vocabulary: [
      vocabulary(
        "Primitive lattice vector",
        "An integer vector whose coordinates have no common divisor greater than one. It is not a positive integer multiple of a shorter integer vector.",
        "The vector (5,2) is primitive; (6,4)=2(3,2) is not.",
      ),
      vocabulary(
        "Half-open fundamental parallelogram",
        "The set αu+βv with 0≤α,β<1. The edges corresponding to α=1 or β=1 are excluded, so every lattice coset has exactly one representative.",
      ),
      vocabulary(
        "Finite quotient group",
        "Two integer points represent the same coset in ℤ²/(ℤu+ℤv) when their difference is an integer combination of u and v.",
      ),
      vocabulary(
        "Smith normal form",
        "A diagonal form obtained by invertible integer row and column operations. Here only its consequence is needed: a rank-two sublattice has index equal to the absolute determinant of its two generators.",
      ),
    ],
    intuition:
      "The absolute determinant is simultaneously an area and a count of residue classes. If it exceeds one, the fundamental parallelogram contains a nonzero integer representative; that extra point will contradict the assumption that two rotation records are consecutive.",
    proofSteps: [
      step(
        "Reduce every point to the half-open cell",
        "Write a real vector uniquely as au+bv and subtract the integer parts of a and b. An integer input remains integer after this subtraction.",
      ),
      step(
        "Prove uniqueness",
        "If two points of the half-open cell differ by mu+nv with integers m,n, both coefficient differences lie in (-1,1). Hence m=n=0.",
      ),
      step(
        "Count the quotient",
        "Unimodular integer operations preserve lattice index and absolute determinant. Smith normal form reduces the generators to (d₁,0),(0,d₂), where both counts equal d₁d₂.",
      ),
    ],
    takeaway:
      "A determinant larger than one always leaves a nonzero integer representative inside the half-open cell.",
  },
  {
    itemNumber: 37,
    label: "Theorem 6.1",
    vocabulary: [
      vocabulary(
        "Record time of the residue sequence",
        "A time h for which the representative [hκ]ₙ is larger than every representative seen at earlier times.",
        "For N=13 and κ=5 the residues begin 0,5,10,2,7,12. The record times are 0,1,2,5.",
      ),
      vocabulary(
        "Deficit",
        "The number ν=N-[hκ]ₙ. It measures the remaining distance from the record residue to N. At time zero the declared deficit is N.",
      ),
      vocabulary(
        "Record vector",
        "The lattice point V=(h,b), with b=ceil(hκ/N) for h>0 and V=(0,1) at time zero. The linear form L(h,b)=hκ-bN equals -ν.",
      ),
      vocabulary(
        "Unimodular pair",
        "Two integer vectors whose determinant is ±1. Their integer combinations produce every point of Z².",
      ),
      vocabulary(
        "First-return tower",
        "A base label together with the finite list of its successive κ-rotates before the first return to the base interval. Its height is the number of states in that list.",
      ),
      vocabulary(
        "Equivariant map",
        "A map that respects the dynamics: applying one successor step before or after the map gives the same result.",
      ),
    ],
    intuition:
      "Successive record vectors form a primitive unimodular chain. Their determinant-one relation is exactly strong enough to partition every cyclic label into a short or long first-return tower, without omissions or repetitions. A record vector lying inside a straight sail edge is retained in this chain even though it is not itself a sail vertex.",
    figure: "return-towers",
    proofSteps: [
      step(
        "Locate the terminal record",
        "After dividing by δ=gcd(N,κ), multiplication by κ/δ permutes residues modulo N/δ. Thus the largest attainable residue is N-δ and the final deficit is δ.",
      ),
      step(
        "Prove record vectors are primitive",
        "If V=gW with g>1, the integer vector W has an earlier time and deficit ν/g, which would already improve the record.",
      ),
      step(
        "Exclude a determinant gap",
        "If consecutive records V,V′ enclosed determinant area larger than one, Lemma A.6 would supply a nonzero lattice point in their fundamental parallelogram. Primitivity excludes the radial edges; reflecting the point if needed puts it in conv{0,V,V′}.",
        "That point has time strictly before h′ and deficit strictly smaller than ν, contradicting consecutiveness.",
      ),
      step(
        "Derive the arithmetic identities",
        "With U=V′-V=(q,p), linearity gives L(U)=Δ and determinant expansion gives qν+hΔ=N. The unimodular basis also gives gcd(Δ,ν)=δ.",
      ),
      step(
        "Build the two-height successor",
        "Give bases 1,…,ν height q or q+h. The successor advances one tower level, then returns the top base by addition of Δ modulo ν.",
      ),
      step(
        "Prove the tower map is bijective",
        "The base return has δ cycles. Each state cycle has N/δ states by qν+hΔ=N, exactly the length of a κ-orbit. Equivariance and matching residue classes modulo δ make the restriction a bijection on each cycle.",
      ),
      step(
        "Propagate a consecutive record pair with Δ=1 backwards",
        "When Δ=1, subtract floor(h/q) copies of U. A coefficient argument in the unimodular basis rules out every earlier improving vector and proves the displayed arithmetic run consists of consecutive records.",
      ),
      step(
        "Read the towers geometrically",
        "An internal state cannot return to the base interval without giving the bijection two preimages. It is therefore an endpoint contact, so repeated multiplication gives the exact vertex identities and the two top relations.",
      ),
    ],
    takeaway:
      "The rational rotation is now a bijective two-height tower system, and its internal states become exact polygon-vertex equalities.",
  },
  {
    itemNumber: 38,
    label: "Corollary 6.2",
    vocabulary: [
      vocabulary(
        "Extending the interval by endpoint contacts",
        "Enlarging the interval of relative-interior contact indices to the record interval by inserting indices whose contact is already the endpoint ξⱼ=xⱼ. Later these give factors (αⱼ,βⱼ)=(1,0); they do not create additional relative-interior contacts.",
      ),
      vocabulary(
        "Short-return identity at the cyclic endpoint",
        "The short return starting at x₀. It is a genuine tower identity, even though x₀ is written outside the base list 1,…,d.",
      ),
    ],
    intuition:
      "The interval of relative-interior contact indices need not fill the entire arithmetic record interval. The remaining positions are endpoint-contact indices, so the same first-return formulas apply without changing the genuine relative-interior contacts.",
    proofSteps: [
      step(
        "Apply the consecutive record vectors",
        "Use Theorem 6.1 with V=E and V′=E+U, where U=(q,p) and qκ−pN=1. Thus ν=d, Δ=1, and h=e.",
      ),
      step(
        "Read the first-return decomposition",
        "The first d-1 bases have height q, the last has height q+e, and the first return is the successor.",
      ),
      step(
        "Force internal endpoint contacts",
        "All relative-interior contact indices lie in J. An internal destination cannot lie in J by tower bijectivity, so its contact is an endpoint contact.",
      ),
      step(
        "Translate to equations",
        "The short returns, the identity at x₀, and the closing identity give equations (6.17)–(6.18). For j outside the relative-interior contact set, the fixed half-open convention gives ξⱼ=xⱼ.",
      ),
    ],
    takeaway:
      "Extending the record interval changes the range of the formulas, not the set of relative-interior contacts.",
  },
  {
    itemNumber: 39,
    label: "Remark 6.3",
    vocabulary: [
      vocabulary(
        "Lattice sail",
        "For the closed cone C bounded by the positive b-axis and the ray L(h,b)=0, the Klein sail is the boundary visible from the origin of conv((C∩ℤ²)∖{0}). The chain through the vectors associated with successive upper-record times retains collinear intermediate points, so not every such vector is a sail vertex.",
      ),
    ],
    intuition:
      "Continued-fraction structure is visible in the record vectors. The polygonal chain through the vectors associated with successive upper-record times, rather than an identification of every record with a sail vertex, is the formal object used in the proof.",
    takeaway:
      "The sail gives geometric context; the direct record argument remains the formal dependency.",
  },
  {
    itemNumber: 40,
    label: "Lemma 7.1",
    vocabulary: [
      vocabulary(
        "Preimage supporting line",
        "The line ℓᵢ=λ^{-Hᵢ} aff(Eᵣ₍ᵢ₎). Applying λ^{Hᵢ} sends it to the line containing the side reached by the return. The lemma proves that ℓᵢ supports P and exposes xᵢ.",
      ),
      vocabulary(
        "Index where the return height changes",
        "The index φ−Δ is the unique transition in the ordered base set from return height q to return height q+h.",
      ),
    ],
    intuition:
      "For most indices, neighbouring bases return to neighbouring sides, which immediately shows that the supporting line exposes one vertex. Only the interface between short and long towers can break that pattern, so the proof isolates and checks it directly.",
    proofSteps: [
      step(
        "Check the two adjacent vertices",
        "A supporting line through xᵢ exposes only xᵢ exactly when neither adjacent vertex xᵢ₋₁ nor xᵢ₊₁ lies on that line.",
      ),
      step(
        "Transport the question forward",
        "Because λ^{Hᵢ} is invertible, test the neighbour images against the line of Eᵣ₍ᵢ₎ instead of testing the original vertices against ℓᵢ.",
      ),
      step(
        "Handle equal-height neighbours",
        "They return to relative-interior points on adjacent strict sides, which do not lie on the current side line.",
      ),
      step(
        "Audit the interface",
        "Check the last short base and first long base separately, including h=0. The transported terminal-side identity supplies the missing neighbour.",
      ),
    ],
    takeaway:
      "Every supporting line used along the selected boundary arc exposes exactly one polygon vertex.",
  },
  {
    itemNumber: 41,
    label: "Lemma 7.2",
    vocabulary: [
      vocabulary(
        "The displayed boundary arc",
        "The consecutive vertices X₀,…,Xₘ₊₁ and the sides between them. The lemma proves that these sides do not exhaust the sides of P.",
      ),
      vocabulary(
        "The two cyclic orientations",
        "The selected boundary arc can be read in either cyclic direction. The branch inequality chooses an orientation in which the displayed arc cannot wrap around the entire polygon.",
      ),
    ],
    intuition:
      "The construction in Definition 7.4 requires at least one side of P not belonging to the displayed boundary arc. The applicable inequality chooses an orientation and the proof checks that even the limiting parameter values leave at least one side unused.",
    proofSteps: [
      step(
        "Forward branch",
        "Set m=Δ. If φ<N, then m+1≤φ<N. If φ=N, equality m+1=N would contradict 2Δ≤N+1 when N≥4.",
      ),
      step(
        "Reverse branch",
        "Set m=φ-Δ+1≥2. The strict reverse inequality forces m+1<N, including φ=N.",
      ),
      step(
        "Convert inequalities to labels",
        "Index variation smaller than N makes all displayed cyclic labels distinct. Fewer than N traversed sides means one polygon side is omitted.",
      ),
      step(
        "Retain the boundary cases",
        "The same computations cover Δ=2, equality 2Δ=φ+1, and h=0, which is equivalent to φ=N.",
      ),
    ],
    takeaway:
      "In the orientation determined by the applicable branch inequality, the arc has at least two internal steps and omits at least one polygon side.",
  },
  {
    itemNumber: 42,
    label: "Proposition 7.3",
    vocabulary: [
      vocabulary(
        "The base set 𝓑",
        "The representative set {1,…,φ} on which the first-return map acts.",
      ),
      vocabulary(
        "The translation r and its inverse s",
        "The map r adds Δ modulo φ in 𝓑, and s=r⁻¹ subtracts Δ modulo φ.",
      ),
      vocabulary(
        "The interval M, its distinguished source, and its target",
        "The displayed formulas choose an interval M of base indices, one distinguished source b*, and its target c=r(b*). Whenever that source is omitted, the set is written explicitly as M∖{b*}.",
      ),
    ],
    intuition:
      "The proposition is finite combinatorics. It separates the targets whose inverse lies in M∖{b*}, the single target c=r(b*), and the remaining targets, then records the four disjoint sets displayed in the statement. No polygonal deformation is assumed here.",
    figure: "global-ledger",
    proofSteps: [
      step(
        "Use translation bijectivity",
        "The first-return map r is addition of Δ on a finite cyclic set, so interval images can be computed exactly and cannot collide.",
      ),
      step(
        "Compute the forward image",
        "On M∖{b*} the labels advance without wrap except at the explicit equality 2Δ=φ+1. This gives R and isolates r(b*)=c.",
      ),
      step(
        "Compute inverse sources",
        "The inverse formula proves sources for D lie outside M, while s(R)=M∖{b*} and s(c)=b*.",
      ),
      step(
        "Verify the inverse-source identities",
        "Apply s=r⁻¹ to D, R, {c}, and A. This proves s(D)∩M=∅, s(R)=M∖{b*}, s(c)=b*, and s(A)∩M=∅.",
      ),
      step(
        "Repeat in the reverse branch",
        "There is exactly one modular wrap. The explicit interval gives R, disjointness, and the inverse-source identities.",
      ),
    ],
    takeaway:
      "Every source–target pair (i,r(i)) is classified exactly once by its target in D, R, {c}, or A, together with the source information recorded by s.",
  },
  {
    itemNumber: 43,
    label: "Definition 7.4",
    vocabulary: [
      vocabulary(
        "Perspectivity",
        "Projection from a fixed centre C: join the input point to C and intersect a target projective line. It is not generally perpendicular.",
      ),
      vocabulary(
        "Projectivity",
        "A composition of perspectivities. In an affine coordinate on a projective line it is fractional-linear.",
      ),
      vocabulary(
        "Projective completion",
        "An affine line together with its point at infinity, representing its direction.",
      ),
      vocabulary(
        "Initial and terminal projective lines",
        "The construction begins on Λ₁, the projective completion of aff(X₀,X₁), and ends on K, the projective completion of aff(Cₘ,Cₘ₊₁). These lines need not be the same, so the composition is not yet a self-map.",
      ),
      vocabulary(
        "Boundary-contact projection chain",
        "The consecutive vertices, relative-interior contact points, and exposing supporting lines listed in Definition 7.4. Successive projections through the contact points associate a line-to-line projectivity with these data.",
      ),
    ],
    intuition:
      "Successive projections package the incidence constraints into one projectivity Π:Λ₁→K. Topic VI specifies the identification needed to turn this into a self-map and then studies that self-map.",
    figure: "projective-corridor",
    takeaway:
      "The selected boundary arc and its projection centres define a projectivity from the initial line to the terminal line without using lengths or angles.",
  },
  {
    itemNumber: 44,
    label: "Proposition 7.5",
    vocabulary: [
      vocabulary(
        "Pencil of lines",
        "All projective lines through one fixed point. Removing finitely many forbidden members still leaves valid choices among the supporting lines that expose the chosen vertex.",
      ),
      vocabulary(
        "Affine chart of the projective plane",
        "The affine plane obtained after declaring one projective line to be the line at infinity.",
      ),
      vocabulary(
        "Line at infinity",
        "The projective line containing one point for every affine direction. Lines meeting there appear parallel in the affine chart.",
      ),
      vocabulary(
        "Homogeneous-coordinate model of a projective automorphism",
        "An invertible 3×3 matrix acts on projective points, and multiplying that matrix by a nonzero scalar does not change the projective map. In an affine chart the map has the form Φ(z)=(Az+b)/ω(z); the zero line of the affine function ω is exactly the line sent to infinity.",
      ),
      vocabulary(
        "Convex piecewise-linear graph",
        "A boundary arc written as height versus a strictly increasing transverse coordinate; its consecutive slopes are nondecreasing, and here strictly increasing.",
      ),
    ],
    intuition:
      "Projective geometry lets us choose coordinates adapted to the proof. Sending the intersection of two endpoint supporting lines to infinity makes them parallel, and the selected boundary arc becomes an ordinary convex graph whose slopes can be compared.",
    proofSteps: [
      step(
        "Choose endpoint supporting lines outside a finite exceptional set",
        "Fix M₀ exposing X₀ and vary M₁ among the supporting lines exposing Xₘ₊₁. Excluding the finite family of forbidden choices keeps their intersection O off every side line and every selected supporting line used below.",
      ),
      step(
        "Place O outside the polygon",
        "If O belonged to P, the singleton contact conditions M₀∩P={X₀} and M₁∩P={Xₘ₊₁} would force O to equal two distinct endpoint vertices.",
      ),
      step(
        "Separate O from P",
        "Strict separation supplies a line J through O disjoint from the compact convex polygon.",
      ),
      step(
        "Send J to infinity",
        "Use a projective automorphism Φ(z)=(Az+b)/ω(z). The affine denominator ω has one constant sign on P and, because P is compact and disjoint from its zero line, |ω| is bounded away from zero there. After changing the homogeneous representative's sign, take ω>0 on P and choose ε₀>0 with ω(z)≥ε₀ for every z∈P. Formula (7.22) then writes every image of a segment point as a positive convex combination of endpoint images.",
        "The uniform bound ω≥ε₀ keeps the map finite on P and preserves the relevant segments and their relative interiors.",
      ),
      step(
        "Read the new geometry",
        "The endpoint supporting lines are parallel because their intersection lay on J, which is now the line at infinity. By the finite-exception choice, no side line of the selected arc and no selected supporting line is parallel to them.",
      ),
      step(
        "Make the chain a convex graph",
        "A transverse coordinate is strictly increasing along the selected boundary arc. Choose the displayed arc as the lower graph. Convexity makes consecutive slopes nondecreasing; equality would make three consecutive listed vertices collinear, so the slopes are strictly increasing.",
      ),
    ],
    takeaway:
      "The selected boundary arc can be studied in an affine chart as a graph with strictly increasing edge slopes, without changing any incidence needed later.",
  },
] as const;

const byNumber = new Map(
  guides.map((guide) => [
    guide.itemNumber,
    makeReaderResult(topicVReaderHtmlByItem, guide),
  ]),
);

const take = (numbers: readonly number[]) =>
  numbers.map((number) => {
    const result = byNumber.get(number);
    if (!result) throw new Error("Missing Topic V guide " + number);
    return result;
  });

export const topicVGroups: readonly AdvancedProofGroup[] = [
  {
    number: "I",
    title: "Records, lattice index, and the first-return decomposition",
    introduction: (
      <p>
        The cyclic orbit is first studied without a polygon. The lattice
        count closes the only arithmetic gap; the resulting towers are then
        read as exact endpoint identities.
      </p>
    ),
    results: take([70, 37, 38, 39]),
  },
  {
    number: "Interlude",
    title: "Exceptional case N=3",
    introduction: (
      <p>
        The projective-geometric proof that Δ=1 requires N≥4. Before imposing
        that standing assumption, this complete calculation shows why: a
        3-critical triangle can have first-return step Δ=2.
      </p>
    ),
    formalSetups: [
      {
        ...topicVProjectiveScope,
        title: "A complete 3-critical example with Δ=2",
      },
    ],
    results: [],
  },
  {
    number: "II",
    title: "Supporting lines at the base vertices",
    introduction: (
      <p>
        The tower tops determine preimage supporting lines. The only index
        where the return height changes is checked separately, including its
        endpoint case.
      </p>
    ),
    formalSetups: [
      {
        ...topicVReturnSetup,
        title: "Scope N≥4, return heights, and preimage supporting lines",
      },
      topicVArithmeticGeometryDictionary,
    ],
    results: take([40]),
  },
  {
    number: "III",
    title: "Select a boundary arc that omits a side and classify its source–target pairs",
    introduction: (
      <p>
        One of the two cyclic orientations gives consecutive boundary vertices
        while omitting at least one side. The corresponding index formulas partition every source–target pair
        and record whether its inverse source lies outside M, in {"M∖{b*}"}, or at b*.
      </p>
    ),
    formalSetups: [
      {
        ...topicVCorridorDictionary,
        title: "The two cyclic-orientation cases",
      },
    ],
    results: take([41, 42]),
  },
  {
    number: "IV",
    title: "Composition of perspectivities and an affine chart",
    introduction: (
      <p>
        Lemma 7.1 supplies supporting lines exposing the intermediate vertices,
        Lemma 7.2 guarantees that the displayed sides do not exhaust the
        polygon, and Proposition 7.3 separates one source–target pair from the
        remaining pairs. Definition 7.4 composes the perspectivities associated
        with this boundary-contact chain. A carefully chosen affine chart then
        turns the selected polygonal arc into a convex graph with strictly
        increasing slopes.
      </p>
    ),
    results: take([43, 44]),
  },
] as const;

export const topicVImported: readonly ProofDependency[] = [
  {
    label: "Topic I: minimum invariant-polygon vertex count and N-criticality",
    href: sitePath("/proof/#def:N-critical"),
    explanation:
      "Definition 1.1 defines νpoly(T) as the minimum number of vertices of a nondegenerate T-invariant polygon and defines N-criticality by νpoly(T)=N together with νpoly(tT)>N for every t>1.",
  },
  {
    label: "Topic I: strict separation",
    href: sitePath("/proof/#lem:strict-separation"),
    explanation:
      "A point outside a compact convex polygon can be strictly separated from it; Proposition 7.5 uses this to choose the line sent to infinity.",
  },
  {
    label: "Topic II: supporting lines that expose one vertex",
    href: sitePath("/proof/topic-ii/#part-i-item-13"),
    explanation:
      "A supporting line at a polygon vertex exposes that vertex alone once neither neighbouring vertex lies on the line.",
  },
  {
    label: "Topic III: half-open assignment of endpoint contacts",
    href: sitePath("/proof/topic-iii/"),
    explanation:
      "A contact outside the relative interior is the included endpoint, so internal first-return steps become exact vertex equalities.",
  },
  {
    label: "Topic IV: one cyclic interval of relative-interior contact indices",
    href: sitePath("/proof/topic-iv/"),
    explanation:
      "The relative-interior contact indices form one cyclic interval, the contact permutation is the cyclic shift by κ, and Topic IV supplies the exact first-entrance identities restated above.",
  },
] as const;

export const topicVBackground: readonly ProofDependency[] = [
  {
    label: "Rank-two lattice index",
    explanation:
      "Lemma A.6 is moved to its first use and proved in full on this page.",
  },
  {
    label: "Elementary real projective geometry",
    explanation:
      "Definition 7.4 defines the composition of perspectivities used here; Proposition 7.5 proves the exact chart and convexity facts needed later.",
  },
] as const;

export const topicVSourceIds = collectSourceIds(
  topicVGroups.flatMap((group) => group.results),
);

export const topicVFormalSetups: readonly AdvancedProofSetup[] = [
  topicVContactNotation,
  ...topicVGeneratedFormalSetups,
];
