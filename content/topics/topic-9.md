### Why equal contact weights give the largest radius

In the eight-state example the closing path gives $2\vartheta+u_1+u_2=2\pi$. Fix $\vartheta=5\pi/7$. Then the two angles can change only in opposite directions around their mean $2\pi/7$. What does moving them apart do to the two factor lengths? If we can answer that question on one line in the complex plane, the same argument will compare all $m$ factors.

::: {.reader-sharpness-ledger}
**Upper bound — proved here.** Under the product and exact real phase hypotheses, no radius can exceed the scalar candidate. We will also identify exactly when equality holds.

**Attainment — next in Topic X.** Knowing the equality condition does not yet produce a stochastic matrix. That construction supplies the other half of sharpness.
:::

Two operations put the comparison within reach of ordinary calculus. Divide each factor by its positive weight $1-\beta_j$. Then take the logarithm of its length, so that multiplying lengths becomes adding real numbers.

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

Fix $w$. Where can the point $g(\beta)$ move? Write
$$
g(\beta)=1+\frac{w-1}{1-\beta}.
$$
At $\beta=0$ we are at $w$. Increasing $\beta$ moves the point farther from $1$ along the straight line through $1$ and $w$. For example, take $w=(1+i)/2$. One endpoint is $g(0)=w$, and $g(1/2)=i$ lies farther along the same line $x+y=1$. For general $w$, its equation follows from $a+cb=1$.

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

The denominator is positive on the entire domain, so these derivatives are valid there. This proves strict convexity. For two angles, the point on the graph at their mean lies strictly below the chord whenever the angles differ. We also need to distinguish weights. For a moving upper-half-plane point $X+iY$, its argument derivative is $(XY'-YX')/(X^2+Y^2)$. Here $X=a-\beta$ and $Y=b$, so $X'=-1$ and $Y'=0$. Thus

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

Return to $w=(1+i)/2$. Read off the angles and lengths of the two factors we already placed on the line. The point $w$ has angle $\pi/4$ and length $1/\sqrt2$. The point $i$ has angle $\pi/2$ and length one. Their mean angle is $3\pi/8$.

Hence

$$
\frac{F(\pi/4)+F(\pi/2)}2=-\frac14\log2\approx-0.1733,
$$

whereas

$$
F(3\pi/8)=-\log\bigl(\sqrt2\cos(\pi/8)\bigr)\approx-0.2674.
$$

Read the two panels from left to right. In the complex plane the middle ray meets $x+y=1$ at angle $3\pi/8$. Its weight is $1-1/\sqrt2$. On the graph at that same angle, the point on the curve lies below the midpoint of the chord. The vertical difference measures exactly how much *average logarithmic length* we lose by bringing the angles together. The product and turn assumptions enter in the next step.

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

On the ray at the mean angle $A+B$, the line $\operatorname{Re}g+c\operatorname{Im}g=1$ meets the ray at distance $1/\mathcal D(A+B)$. Jensen says that this distance is at most the geometric mean of the actual distances $|g_1|,\ldots,|g_m|$. The product equation tells us that mean exactly. Taking absolute values in $z^e\prod_jg_j=1$ gives $\prod_j |g_j|=\rho^{-e}$, even for $e<0$. Taking logarithms gives $\sum_jF(u_j)=-e\log\rho$. In logarithms and then in reciprocals the same bound reads

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

Every factor in the denominator is positive. On multiplying through, the term $\rho^{e/m}\rho^q$ becomes $\rho^{s/m}$ because $e=s-mq$. We obtain

$$
\rho^{s/m}\sin A+\rho^q\sin B\le\sin(A+B).
$$

The left side strictly increases with $\rho$. Its equality radius is the candidate $K_n$ from Topic VIII, so $\rho\le K_n$. Every algebraic step after Jensen is reversible. Equality holds exactly when all $u_j$ agree, and the strictly increasing weight-to-angle map makes that equivalent to $\beta_1=\cdots=\beta_m$.

::: {.reader-checkpoint #phase-hypothesis-transfer}
**Changed-hypothesis checkpoint.** Keep the product and the factor assumptions, but replace the real phase identity by equality only modulo $2\pi$. A student proposes to use exactly the same Jensen calculation and conclude $\rho\le K_n$. Which step no longer follows? Does the convexity calculation itself fail?

<details>
<summary>Hint</summary>

Allow an unknown integer $k$ in $e\vartheta+\sum_j u_j=2\pi(r-mp)+2\pi k$. What average does this give?

</details>
<details>
<summary>Solution</summary>

Jensen's inequality still holds at the actual average, because every $u_j$ and its average lie in $(0,M)$. What fails is identifying that average with the known angle $A+B$. With only the congruence, we know instead

$$
\bar u=A+B+\frac{2\pi k}{m}
$$

for an integer $k$ that has not been determined. We cannot substitute $F(A+B)$ for $F(\bar u)$, so this calculation does not give the claimed candidate bound until the exact winding fixes $k=0$. The product supplies a modular phase relation automatically; the polygon's real angle lift in Topic VII supplies the additional information. This is why convexity and a characteristic equation cannot replace the winding argument.

</details>
:::

### Return to the ray through the eight-state example

For $\vartheta=5\pi/7$ in the interval $(1/3,3/8)$ at order eight, $q=3$, $s=8$, $m=2$. Hence $A=B=\pi/7$. Dividing the scalar bound by $\sin(\pi/7)>0$ gives
$$
\rho^4+\rho^3\le 2\cos(\pi/7).
$$
Try the radius $0.98$ from the overview *on the factor line*. Here $w=0.98^3e^{i\pi/7}\approx0.8480+0.4084i$, so $c=(1-\operatorname{Re}w)/\operatorname{Im}w\approx0.3723$. At the mean angle the intersection lies at distance
$$
\frac{1}{\cos(2\pi/7)+c\sin(2\pi/7)}\approx1.0935.
$$
If two contact weights produced this radius on the eight-state arc, the geometric mean of their factor lengths would have to be $\rho^{-e/m}=1/0.98\approx1.0204$. Even the smallest geometric mean compatible with that angle is larger. This is how a chord inequality for a fixed $w$ rules out a trial radius.

The closing path fixed the sum $u_1+u_2=4\pi/7$. If one of these angles exceeds $2\pi/7$, the other is smaller by the same amount. Strict convexity makes the displayed inequality strict. Thus a point attaining the equality radius requires $u_1=u_2=2\pi/7$, and the two averaging rows then have the same weight. We can already predict a feature of the attaining matrix before constructing it.

### Check the source of strictness

Suppose $m=2$ and the factor arguments are $\bar u-h$ and $\bar u+h$, both in $(0,M)$, where $h\ne0$. Do they give the same bound as two factors with argument $\bar u$? No. Strict convexity gives

$$
\frac{F(\bar u-h)+F(\bar u+h)}2>F(\bar u).
$$

One can even measure the loss. The function $F(u)-u^2/2$ has nonnegative second derivative. Apply its midpoint inequality at $\bar u-h$ and $\bar u+h$. The quadratic terms contribute $[(\bar u-h)^2+(\bar u+h)^2-2\bar u^2]/4=h^2/2$, so the displayed difference is at least $h^2/2$. These unequal arguments therefore produce a strict scalar inequality and a radius strictly below the candidate. When $m=1$, equality of all weights is automatic; the one-factor product and the specified real phase already force the scalar equality. Topic X supplies the missing existence step by building a stochastic matrix at the equality radius.
