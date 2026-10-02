### Why equal contact weights give the largest radius

The geometric product permits different weights on different sides. To prove a sharp bound, we must compare all those possibilities at once. Normalising each factor puts them on a single straight line. On that line, the logarithm of the distance from zero is a strictly convex function of the angle. Averaging then says precisely why equal weights are optimal.

::: {.reader-sharpness-ledger}
**Upper bound — proved here.** Under the product and exact real phase hypotheses, no radius can exceed the scalar candidate. We will also identify exactly when equality holds.

**Attainment — next in Topic X.** Knowing the equality condition does not yet produce a stochastic matrix. That construction supplies the other half of sharpness.
:::

The product fixes a multiplicative constraint on factor sizes, while the real phase fixes an additive constraint on their angles. Taking logarithms makes the sizes additive too. We can then compare factors by moving their angles toward the same average. The straight-line normalisation is what makes their sizes a single function of those angles; without it, an average angle alone would not determine a size comparison.

Use the oriented Farey data from Topic VIII: integers $p,r$, positive integers $q<s$ and $m$, and an angle $\vartheta$ between $2\pi p/q$ and $2\pi r/s$. Set

$$
A=q\vartheta-2\pi p,\qquad
B=(2\pi r-s\vartheta)/m,\qquad e=s-mq,
$$

with $A,B>0$ and $A+B<\pi$. Let $z=\rho e^{i\vartheta}$, where $0<\rho<1$. Suppose $0\le\beta_j<1$ for $j=1,\ldots,m$, and suppose both the product and the real argument identity of Topic VIII hold. These are the hypotheses; an arbitrary polynomial root need not satisfy the second one.

Write

$$
w=z^q=\rho^qe^{iA}=a+ib.
$$

Here $a=\rho^q\cos A$ and $b=\rho^q\sin A>0$. Also $a<1$ because $\rho^q<1$. Define the normalised factors and their arguments by

$$
g_j=\frac{w-\beta_j}{1-\beta_j},\qquad
u_j=\operatorname{Arg}(w-\beta_j),\qquad
c=\frac{1-a}{b}>0.
$$

The denominator $1-\beta_j$ is positive, so normalisation leaves the argument unchanged. It changes the complex product into $z^e\prod_jg_j=1$.

### A line becomes a convex function

The same linear equation holds for every $g_j$:

$$
\operatorname{Re}g_j+c\operatorname{Im}g_j
=\frac{a-\beta_j+cb}{1-\beta_j}=1.
$$

Writing $g_j=|g_j|e^{iu_j}$, define

$$
\mathcal D(u)=\cos u+c\sin u.
$$

Then $|g_j|\mathcal D(u_j)=1$. Thus the size of a normalised factor is determined by its angle, rather than by a separate unknown weight.

Let $M=\operatorname{Arg}(w-1)\in(A,\pi)$. Subtracting a real number from $w$ moves it horizontally to the left in the upper half-plane. Its angle therefore increases from $A$ to $M$ as that number increases from zero to one. Since every $\beta_j<1$, we have $A\le u_j<M$. The relation $c=-\cot M$ gives

$$
\mathcal D(u)=\frac{\sin(M-u)}{\sin M}>0
\qquad(0<u<M).
$$

We may consequently define

$$
F(u)=-\log\mathcal D(u),\qquad 0<u<M.
$$

For our factors $F(u_j)=\log|g_j|$. Equivalently, $F$ is a constant minus the logarithm of a sine, which explains the term log-sine convexity. The derivatives are $\mathcal D'=-\sin u+c\cos u$ and $\mathcal D''=-\mathcal D$. First $F'=-\mathcal D'/\mathcal D$; differentiating this quotient gives

$$
F''(u)=1+\left(\frac{\mathcal D'(u)}{\mathcal D(u)}\right)^2\ge1.
$$

The denominator is positive on the entire domain, so these derivatives are valid there. This proves strict convexity: bending the argument to either side of its average increases the average logarithmic size. We also need to distinguish weights. For a moving upper-half-plane point $X+iY$, its argument derivative is $(XY'-YX')/(X^2+Y^2)$. Here $X=a-\beta$ and $Y=b$, so $X'=-1$ and $Y'=0$. Thus

$$
\frac{d}{d\beta}\operatorname{Arg}(w-\beta)
=\frac{b}{|w-\beta|^2}>0.
$$

Different weights have different factor arguments.

::: {.reader-checkpoint #jensen-prediction}
**Prediction checkpoint.** Keep the average of two unequal factor angles fixed. If both angles are replaced by that common average on the normalised line, should the product of factor sizes increase, decrease, or stay the same? Make a prediction before reading the numbers below.

<details>
<summary>Hint</summary>

The size is $e^{F(u)}$, so the product of two sizes is $e^{F(u_1)+F(u_2)}$. Compare the point on a strictly convex graph at the average angle with the midpoint of the chord.

</details>
<details>
<summary>Solution</summary>

It decreases. With $\bar u=(u_1+u_2)/2$ and $u_1\ne u_2$, strict convexity gives $2F(\bar u)<F(u_1)+F(u_2)$. Exponentiation preserves this inequality. This prediction concerns the factors at a fixed $w$; it does not assert that both weight choices satisfy an eigenvalue product. The next calculation isolates this comparison.

</details>
:::

For a concrete line calculation, choose $w=(1+i)/2$. Then $a=b=1/2$, $c=1$, and the line is $\operatorname{Re}g+\operatorname{Im}g=1$. At weight zero the normalised factor is $g(0)=(1+i)/2$, with angle $\pi/4$ and size $1/\sqrt2$. At weight $1/2$ it is $g(1/2)=i$, with angle $\pi/2$ and size one. Their average angle is $3\pi/8$. Hence

$$
\frac{F(\pi/4)+F(\pi/2)}2=-\frac14\log2\approx-0.1733,
$$

whereas

$$
F(3\pi/8)=-\log\bigl(\sqrt2\cos(\pi/8)\bigr)\approx-0.2674.
$$

The logarithmic size at the average angle is strictly smaller. Two factors at that average angle therefore have a smaller product of sizes than these two unequal factors. Their common weight would be $1-1/\sqrt2$. This calculation illustrates the convexity mechanism only; these illustrative weights are not being asserted to satisfy an eigenvalue product or its real phase identity.

<!-- reader-figure:late -->

### Applying the average fixed by geometry

We can prove the finite form of Jensen's inequality needed here from ordinary calculus. Let $\bar u=m^{-1}\sum_j u_j$. This average also lies in $(0,M)$. Since $F''>0$, the derivative $F'$ is strictly increasing. Integrating $F'$ between $\bar u$ and any $u$ shows

$$
F(u)\ge F(\bar u)+F'(\bar u)(u-\bar u),
$$

with equality only at $u=\bar u$. For $u>\bar u$, the integrand $F'(v)$ is larger than $F'(\bar u)$; for $u<\bar u$, reverse the integral and use the smaller derivative. The graph therefore lies above its tangent at $\bar u$. Sum these tangent-line inequalities over $u_1,\ldots,u_m$. Their linear terms cancel because $\sum_j(u_j-\bar u)=0$, leaving

$$
F(\bar u)\le\frac1m\sum_j F(u_j).
$$

Equality is possible precisely when every $u_j=\bar u$. This is Jensen's inequality, including its equality condition, proved for our function. The geometric argument identity fixes the average itself:

$$
\bar u=\frac1m\sum_j u_j
=\frac{2\pi(r-mp)-e\vartheta}{m}=A+B.
$$

Taking absolute values in $z^e\prod_jg_j=1$ and then real logarithms gives $\sum_jF(u_j)=-e\log\rho$. This remains valid when $e<0$, since $\rho>0$. Therefore

$$
F(A+B)\le-\frac em\log\rho,
\qquad
\mathcal D(A+B)\ge\rho^{e/m}.
$$

Substitute the value $c=(1-\rho^q\cos A)/(\rho^q\sin A)$. The angle-addition formulas reduce the left side to

$$
\mathcal D(A+B)
=\frac{\sin(A+B)-\rho^q\sin B}{\rho^q\sin A}.
$$

Multiplication by the positive denominator, and $q+e/m=s/m$, now give

$$
\rho^{s/m}\sin A+\rho^q\sin B\le\sin(A+B).
$$

The left side strictly increases with $\rho$. Its equality radius is the candidate $K_n$ from Topic VIII, so $\rho\le K_n$. Every algebraic step after Jensen is reversible. Equality holds exactly when all $u_j$ agree, and the strictly increasing weight-to-angle map makes that equivalent to $\beta_1=\cdots=\beta_m$.

::: {.reader-checkpoint #phase-hypothesis-transfer}
**Changed-hypothesis checkpoint.** Keep the product and the factor assumptions, but replace the real phase identity by equality only modulo $2\pi$. A student proposes to use exactly the same Jensen calculation and conclude $\rho\le K_n$. Which step no longer follows? Does the convexity calculation itself fail?

<details>
<summary>Hint</summary>

Allow an unknown integer $k$ in $e\vartheta+\sum_j u_j=2\pi(r-mp)+2\pi k$. What is the resulting average factor angle?

</details>
<details>
<summary>Solution</summary>

Jensen's inequality still holds at the actual average, because every $u_j$ and its average lie in $(0,M)$. What fails is identifying that average with the prescribed angle $A+B$. With only the congruence, we know instead

$$
\bar u=A+B+\frac{2\pi k}{m}
$$

for an integer $k$ that has not been determined. We cannot substitute $F(A+B)$ for $F(\bar u)$, so this calculation does not give the claimed candidate bound until the exact winding fixes $k=0$. The product supplies a modular phase relation automatically; the polygon's real angle lift in Topic VII supplies the additional information. This is why convexity and a characteristic equation cannot replace the winding argument.

</details>
:::

### Check the source of strictness

Suppose $m=2$ and the factor arguments are $\bar u-h$ and $\bar u+h$, both in $(0,M)$, where $h\ne0$. Do they give the same bound as two factors with argument $\bar u$? No. Strict convexity gives

$$
\frac{F(\bar u-h)+F(\bar u+h)}2>F(\bar u).
$$

In fact $F''\ge1$ gives a gap of at least $h^2/2$. These unequal arguments therefore produce a strict scalar inequality and a radius strictly below the candidate. When $m=1$, equality of all weights is automatic; the one-factor product and the specified real phase already force the scalar equality. Topic X supplies the missing existence step by building a stochastic matrix at the equality radius.
