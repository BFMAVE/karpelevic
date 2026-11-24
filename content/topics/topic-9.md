### Why equal contact weights give the largest radius

In the eight-state example the closing path gives $2\vartheta+u_1+u_2=2\pi$. Fix $\vartheta=5\pi/7$. Then the two angles can change only in opposite directions around their mean $2\pi/7$. What does moving them apart do to the two factor lengths? If we can answer that question on one line in the complex plane, the same argument will compare all $m$ factors.

::: {.reader-sharpness-ledger}
**Upper bound — proved here.** Under the product and exact real phase hypotheses, no radius can exceed the scalar candidate. We will also identify exactly when equality holds.

**Attainment.** Equality will tell us which weights to choose. Topic X then uses them as entries of a stochastic matrix with the required eigenvalue.
:::

Two operations put the comparison within reach of ordinary calculus. Divide each factor by its positive weight $1-\beta_j$. Then take the logarithm of its length, so that multiplying lengths becomes adding real numbers.

Fix the interval from Topic VIII, in the orientation with $q<s$. Thus $p/q<\vartheta/(2\pi)<r/s$, and $m$ counts the factors. For the two endpoint angles and the closing exponent, put

$$
A=q\vartheta-2\pi p,\qquad
B=(2\pi r-s\vartheta)/m,\qquad e=s-mq,
$$

Here $A,B>0$ and $A+B<\pi$. Take $z=\rho e^{i\vartheta}$ with $0<\rho<1$, together with weights $0\le\beta_j<1$ for $1\le j\le m$. Assume the product and the real angle sum of Topic VIII. In particular we know the number of full turns, which a polynomial equation for $z$ alone would leave undetermined.

All the factors start from the same complex point. Write its coordinates as

$$
w=z^q=\rho^qe^{iA}=a+ib.
$$

Its height $b=\rho^q\sin A$ is positive, and its horizontal coordinate $a=\rho^q\cos A$ is less than one. Draw the line from $1$ through $w$. We will express its points using the ratio $c$ of the horizontal distance $1-a$ to the height $b$. For each factor put

$$
g_j=\frac{w-\beta_j}{1-\beta_j},\qquad
u_j=\operatorname{Arg}(w-\beta_j),\qquad
c=\frac{1-a}{b}>0.
$$

Dividing by $1-\beta_j$ changes the length but leaves the angle $u_j$ unchanged. Performing this division for every factor cancels all the weights on the right of the product, leaving $z^e\prod_j g_j=1$.

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

Where does this line meet a ray of angle $u_j$? The coordinates of the intersection are $|g_j|\cos u_j$ and $|g_j|\sin u_j$. Substitution in the line equation introduces the function

$$
\mathcal D(u)=\cos u+c\sin u.
$$

The line equation becomes $|g_j|\mathcal D(u_j)=1$. Knowing the direction of the intersection now gives its distance from zero, namely $1/\mathcal D(u_j)$.

The ray from zero to $w$ has angle $A$. As $\beta$ increases from zero to one, $w-\beta$ moves to the left at a fixed positive height, so its direction increases to $M=\operatorname{Arg}(w-1)\in(A,\pi)$. Our factor angles satisfy $A\le u_j<M$ because $\beta_j<1$. The coordinates of $w-1$ give $\cot M=(a-1)/b=-c$. The sine subtraction formula then gives

$$
\mathcal D(u)=\frac{\sin(M-u)}{\sin M}>0
\qquad(0<u<M).
$$

At angle $u$ the ray meets the line at distance $1/\mathcal D(u)$ from zero. Its logarithm is therefore the real function

$$
F(u)=-\log\mathcal D(u),\qquad 0<u<M.
$$

In particular $F(u_j)=\log|g_j|$. We want to know how two such lengths compare when their angles move apart. It suffices to determine the curvature of $F$. We have $F'=-\mathcal D'/\mathcal D$, where $\mathcal D'=-\sin u+c\cos u$ and $\mathcal D''=-\mathcal D$. The quotient rule gives

$$
F''(u)=1+\left(\frac{\mathcal D'(u)}{\mathcal D(u)}\right)^2\ge1.
$$

The denominator is positive on the entire domain, so these derivatives are valid there. This proves strict convexity. For two angles, the point on the graph at their mean lies strictly below the chord whenever the angles differ. We also need to distinguish weights. For a moving upper-half-plane point $X+iY$, its argument derivative is $(XY'-YX')/(X^2+Y^2)$. Here $X=a-\beta$ and $Y=b$, so $X'=-1$ and $Y'=0$. Thus

$$
\frac{d}{d\beta}\operatorname{Arg}(w-\beta)
=\frac{b}{|w-\beta|^2}>0.
$$

Thus two factors with the same direction have the same weight. We will use this when we identify the case of equality.

::: {.reader-checkpoint #jensen-prediction}
**Prediction checkpoint.** Keep the average of two unequal factor angles fixed. If both angles are replaced by that common average on the normalised line, should the product of factor sizes increase, decrease, or stay the same? Make a prediction before reading the numbers below.

<details>
<summary>Hint</summary>

At angle $u$, the length is $e^{F(u)}$. Taking logarithms changes the question into one about $F(u_1)+F(u_2)$. On the graph, what is the height of the midpoint of the chord between these two angles?

</details>
<details>
<summary>Solution</summary>

The product decreases. At $\bar u=(u_1+u_2)/2$ the height $F(\bar u)$ lies strictly below the chord midpoint when $u_1\ne u_2$. Hence $2F(\bar u)<F(u_1)+F(u_2)$. Exponentiating compares the two products of lengths at this fixed $w$. We can try the comparison numerically before imposing the eigenvalue product.

</details>
:::

Return to $w=(1+i)/2$. Read off the angles and lengths of the two factors we already placed on the line. The point $w$ has angle $\pi/4$ and length $1/\sqrt2$. The point $i$ has angle $\pi/2$ and length one. Their mean angle is $3\pi/8$.

Hence

$$
\frac{F(\pi/4)+F(\pi/2)}2=-\frac14\log2\approx-0.1733,
$$

At the same angle the graph itself has height

$$
F(3\pi/8)=-\log\bigl(\sqrt2\cos(\pi/8)\bigr)\approx-0.2674.
$$

Read the two panels from left to right. In the complex plane the middle ray meets $x+y=1$ at angle $3\pi/8$. Its weight is $1-1/\sqrt2$. On the graph at that same angle, the point on the curve lies below the midpoint of the chord. The vertical difference measures exactly how much *average logarithmic length* we lose by bringing the angles together. The product and turn assumptions enter in the next step.

<!-- reader-figure:late -->

### Applying the average fixed by geometry

Let $\bar u=(u_1+\cdots+u_m)/m$. Each angle belongs to $(0,M)$, so the mean does too. To compare $F(\bar u)$ with the mean height, draw the tangent at $\bar u$. Since $F''>0$, its slope $F'(\bar u)$ is smaller than $F'(v)$ to the right of $\bar u$ and larger to the left. Integrating the slope gives

$$
F(u)\ge F(\bar u)+F'(\bar u)(u-\bar u),
$$

Equality holds at the point of tangency. At any other $u$ the inequality is strict, because the derivative is strictly increasing, with the integration limits reversed when $u<\bar u$. Add this tangent bound at each $u_j$. The slope terms sum to $F'(\bar u)\sum_j(u_j-\bar u)=0$ by the definition of the mean. Dividing by $m$ leaves

$$
F(\bar u)\le\frac1m\sum_j F(u_j).
$$

This proves Jensen's inequality for $F$. A single angle different from $\bar u$ makes the sum strictly larger. Thus equality holds exactly when the angles are all equal. Their mean is known from the real turn count in Topic VII.

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

It remains to express the bound in terms of the radius. Replace $c$ by $(1-\rho^q\cos A)/(\rho^q\sin A)$ and put the two terms in $\mathcal D(A+B)$ over the same denominator. The terms multiplied by $\rho^q$ combine to $\sin(A-(A+B))=-\sin B$, giving

$$
\mathcal D(A+B)
=\frac{\sin(A+B)-\rho^q\sin B}{\rho^q\sin A}.
$$

Every factor in the denominator is positive. On multiplying through, the term $\rho^{e/m}\rho^q$ becomes $\rho^{s/m}$ because $e=s-mq$. We obtain

$$
\rho^{s/m}\sin A+\rho^q\sin B\le\sin(A+B).
$$

If $\rho$ exceeded $K_n$, strict increase of the left side would make it larger than the right. Thus $\rho\le K_n$. All steps from Jensen's inequality to this bound were equalities or multiplication by positive quantities. Consequently $\rho=K_n$ precisely when all factor angles coincide. Their strict increase with $\beta$ makes this equivalent to $\beta_1=\cdots=\beta_m$.

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

for some integer $k$. Convexity still compares the product with the value at this actual mean. To evaluate the scalar bound at $A+B$, however, we have to know $k=0$. The product determines angles only up to full turns. Following the vertices in Topic VII is what determined that missing integer.

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

For two factors we can even estimate the cost of separating their angles. Write them as $\bar u-h$ and $\bar u+h$ in $(0,M)$, with $h\ne0$. The chord joining their graph points has its midpoint at $\bar u$. Comparing its height with the height of the curve gives

$$
\frac{F(\bar u-h)+F(\bar u+h)}2>F(\bar u).
$$

One can even measure the loss. The function $F(u)-u^2/2$ has nonnegative second derivative. Apply its midpoint inequality at $\bar u-h$ and $\bar u+h$. The quadratic terms contribute $[(\bar u-h)^2+(\bar u+h)^2-2\bar u^2]/4=h^2/2$, so the displayed difference is at least $h^2/2$. These unequal arguments therefore produce a strict scalar inequality and a radius strictly below the candidate. When $m=1$, equality of all weights is automatic; the one-factor product and the specified real phase already force the scalar equality. Topic X supplies the missing existence step by building a stochastic matrix at the equality radius.
