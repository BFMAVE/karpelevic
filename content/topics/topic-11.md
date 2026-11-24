### Comparing the candidates without assuming the theorem

Keep the ray through $e^{5\pi i/7}$ fixed and allow one more state. Its angular fraction $5/14$ lies between $1/3$ and $2/5$ at order seven. At order eight a new fraction $3/8$ lies between them. Thus the two equations for the radius use different endpoints. How can we be sure the new equation places its point at least as far from zero?

We can certainly keep a seven-state eigenvalue by adjoining an eighth, absorbing state. That argument concerns eigenvalues of matrices. We still have to compare the two numbers computed by the scalar equations.

Write $R_n(\theta)$ for the actual largest eigenvalue radius on the ray, and let $k\le n$ be the least order of a matrix with eigenvalue $R_n(\theta)e^{i\theta}$. For $k\ge4$, the final proof needs the chain

$$
R_n(\theta)\le K_k(\theta)\le K_n(\theta)\le R_n(\theta).
$$

| Inequality | What we use to prove it |
|---|---|
| $R_n\le K_k$ | A matrix of least order $k$ gives the product in Topic VII. Topic IX bounds its radius. |
| $K_k\le K_n$ | Compare the roots of the two radius equations. We do this below. |
| $K_n\le R_n$ | Topic X constructs a matrix of order $n$ with an eigenvalue of radius $K_n$. |

The middle inequality is the one we shall establish. If the least order is three, Topic XII uses the triangle description for the initial comparison with $K_4$.

::: {.reader-checkpoint #independent-order-comparison}
**Retrieval checkpoint.** Suppose we have already proved $\Theta_{n-1}\subseteq\Theta_n$. Can we deduce that the two numbers $K_{n-1}(\theta)$ and $K_n(\theta)$ occur in the same order?

<details>
<summary>Hint</summary>

On a fixed ray, the inclusion compares the two *largest* radii. What does the matrix construction tell us about the radius $K_j$ relative to the largest radius at order $j$?

</details>
<details>
<summary>Solution</summary>

The larger matrix keeps the eigenvalues of the smaller one, so $R_{n-1}\le R_n$. Our construction gives one point of radius $K_j$ at each order $j$. For all we know so far, either point could lie strictly inside its region. The point we constructed at order $n$ could then lie closer to zero than the one we constructed at order $n-1$. To rule this out we use the equations that selected those two points.

</details>
:::

Insert the old radius into the new equation. When the left side is below the target, strict increase puts the new equality radius farther out.

On increasing the order from $n-1$ to $n$, first look at the two Farey fractions on either side of the ray. If they stay in place, only the number of factors in the equation of Topic VIII can change. If a new fraction enters between them, it divides the old interval in two. We shall identify that fraction and compare radii in each of the two smaller intervals. The equations below concern angles strictly between the endpoints. We return to the endpoints at the end.

There is a case where we can see the comparison without estimating a derivative. On the first interval at orders four and five the candidate follows the segment from $1$ to $e^{2\pi i/n}$. Here $q=1$ and $m=s=n$, so the factor identity in Topic X gives $z=\beta+(1-\beta)e^{2\pi i/n}$. The line containing the segment has unit normal in direction $\pi/n$ and passes through $1$, so its equation on our ray is
$$
\rho\cos(\theta-\pi/n)=\cos(\pi/n).
$$
For $\theta=\pi/4$, both segments meet the ray in their interiors. Dividing by $\cos(\pi/n)$ gives
$$
\rho=\frac{1}{\cos\theta+\tan(\pi/n)\sin\theta}.
$$
Increasing $n$ from four to five decreases $\tan(\pi/n)$, so the new segment meets the ray farther out. In the drawing, compare the two marked intersections along the *same ray*. For other intervals the arcs can bend. Evaluating the new equation at the old radius gives us a comparison that works there too.

![Starting at zero on the ray of angle π/4, we meet the solid order-four segment at the circle, then the dashed order-five segment at the square. Both segments have endpoint 1.](/figures/bachelor-product-first-arcs.svg)

### Adding a product factor

First keep both endpoints fixed. As in Topic VIII, reflect the ray and interval together if necessary so that the endpoint with smaller denominator lies on the left. Write the endpoints as $p/q<r/s$, with $q<s$ and $rq-ps=1$, and the chosen fraction of a turn as $p/q<y<r/s$. The ray angle is $\vartheta=2\pi y$. For $k$ factors the angles in the radius equation are

$$
A=q\vartheta-2\pi p,\qquad B_k=(2\pi r-s\vartheta)/k.
$$

Assume $A+B_m<\pi$ for the old count $m$. Since $0<B_{m+1}<B_m$, both counts satisfy the angle condition of Topic VIII. For $k=m,m+1$, let $\rho_k$ be the unique positive solution of the scalar equation with $k$ factors. Topic X supplies a common weight $\beta\in(0,1)$ at $z=\rho_me^{i\vartheta}$, with

$$
z^{s-mq}(z^q-\beta)^m=(1-\beta)^m.
$$

To build a product with one more factor, choose the extra weight to be zero. Its factor on the left is $z^q$ and on the right it is $1-0=1$. Taking $q$ off the exponent in front of the product cancels the extra $z^q$. We also need the sum of the angles as a real number. Each of the original factors has angle $A+B_m$, while the extra one has angle $A$. Together with the new leading power they give

$$
[s-(m+1)q]\vartheta+m(A+B_m)+A
=2\pi[r-(m+1)p].
$$

Both hypotheses of Topic IX hold for these $m+1$ factors. Their weights $(\beta,\ldots,\beta,0)$ differ because $\beta>0$. Strict convexity therefore puts the new scalar left side strictly below its target at $\rho_m$. The new root satisfies $\rho_{m+1}>\rho_m$.

### Why new fractions are mediants

Which interval can split when the denominator $n$ first becomes available? Take consecutive fractions $a/b<c/d$ at order $n-1$, and suppose they enclose a new reduced fraction $h/n$. The Farey properties give $bc-ad=1$ and $b+d>n-1$. Cross-multiplication of $a/b<h/n<c/d$ shows that $bh-an$ and $cn-dh$ are positive integers. Using $bc-ad=1$, we can express the new denominator and numerator together as

$$
(n,h)=(cn-dh)(b,a)+(bh-an)(d,c).
$$

Comparing first coordinates gives $n\ge b+d\ge n$. Since $b,d$ are positive, equality forces both coefficients to be one, and $b+d=n$, $h=a+c$. The inserted fraction is exactly the mediant $\xi=(a+c)/(b+d)$. If no such fraction appears, the old interval stays unchanged.

### The calculus behind a split interval

After an interval splits we shall need the sign of an expression involving powers at two points $z_0\ne z_1$. Join the points by $z(t)=z_0+t(z_1-z_0)$ for $0\le t\le1$, and take an integer $k\ge1$. Differentiating $z(t)^k$ gives $kz(t)^{k-1}(z_1-z_0)$. Integrate the real and imaginary parts from $0$ to $1$, then multiply by $\overline{z_1-z_0}$. We obtain

$$
(\overline{z_1}-\overline{z_0})(z_1^k-z_0^k)
=|z_1-z_0|^2\int_0^1k[z_0+t(z_1-z_0)]^{k-1}\,dt.
$$

Rotate both sides by the same angle $\chi$, that is, multiply by $e^{i\chi}$. If every rotated derivative $e^{i\chi}kz(t)^{k-1}$ lies above the real axis, its imaginary part has positive integral. The remaining factor $|z_1-z_0|^2$ is positive, so the rotated expression on the left also lies above the real axis.

For $k=2$ we can check this directly. Factor $z_1^2-z_0^2=(z_1-z_0)(z_1+z_0)$ to obtain

$$
(\overline{z_1}-\overline{z_0})(z_1^2-z_0^2)
=|z_1-z_0|^2(z_1+z_0).
$$

Try $z_0=4/5$, $z_1=e^{i\pi/6}$ and $\chi=\pi/8$. The whole segment lies between the rays of angles $0$ and $\pi/6$. The derivative $2z$ points in the same direction as $z$, so after rotation its angle lies between $\pi/8$ and $\pi/8+\pi/6=7\pi/24$. Both bounds lie strictly between $0$ and $\pi$. This is the calculation we can repeat for higher powers once we know the endpoint rays.

Return to an angle $\theta$ in the upper half-plane and put $x=\theta/(2\pi)$. Suppose the order-$n-1$ interval containing $x$ splits. Keep the radius $\rho=K_{n-1}(\theta)$ fixed. To write the old equation with its smaller denominator first, use either the angle fraction $y=x$ or its reflection $y=1-x$, as above. Call the endpoints in this order $a/b<c/d$, with $b<d$. The new endpoint between them is $\xi=(a+c)/(b+d)$. Consider $y\ne\xi$. The old count and angles are

$$
m=\lfloor(n-1)/b\rfloor,\quad
A=2\pi(by-a),\quad B=2\pi(c-dy)/m.
$$

The old scalar equation is $\rho^{d/m}\sin A+\rho^b\sin B=\sin(A+B)$. We evaluate it using $y$, without writing $K_{n-1}(2\pi y)$ at a lower-half-plane angle. The Farey calculation above gives $n=b+d$, so $mB-A=2\pi(a+c-ny)$. Its sign tells us which equation to use. It is positive on the left of $\xi$ and negative on the right. Reflection may interchange left and right in the original picture, but it leaves this radius comparison unchanged.

Which angles enter the two new equations? On the left of $\xi$ the lower endpoint $a/b$ stays in place, so its angle is still $A$. Temporarily keep the old factor count $m$. The upper endpoint is now $(a+c)/n$, giving second angle $2\pi(a+c-ny)/m=B-A/m$.

On the right of $\xi$ the smaller denominator $d$ is on the right. Reflect. The fraction being tested becomes $1-y$ and the endpoints, in increasing order, are $(d-c)/d$ and $(n-a-c)/n$. The new count is one because $d<n=b+d<2d$. Substitution gives the two angles

$$
2\pi\bigl(d(1-y)-(d-c)\bigr)=mB,\qquad
2\pi\bigl((n-a-c)-n(1-y)\bigr)=A-mB.
$$

For example, at order seven take $y=7/18$ in $(1/3,2/5)$. The new fraction $3/8$ lies to its left. The original angles are $A=\pi/3$ and $B=\pi/18$, with $m=2$. At order eight the reflected fraction is $11/18$, between $3/5$ and $5/8$. The angles in its equation are $\pi/9$ and $2\pi/9$. Their sum is the original $A$.

In each interval evaluate the new equation at the old radius $\rho$. Subtract its left side from its right side. In the first interval the difference is $D_L$, and in the second it is $D_R$, where

$$
D_L=\sin(A+B-A/m)-\rho^{n/m}\sin A-\rho^b\sin(B-A/m),
$$

$$
D_R=\sin A-\rho^n\sin(mB)-\rho^d\sin(A-mB).
$$

The left side of each new equation increases with radius. A positive difference on either interval means the left side at the old radius falls short of its target. The new equation reaches equality only at a larger radius.

To apply the segment calculation, write $\eta=A/m$, $u=\rho^{b/m}$ and $v=\rho^{d/m}$. Denote the product $(\bar z-\bar w)(z^m-w^m)$ by $G_m(z,w)$. The old equation gives $v\sin A+u^m\sin B=\sin(A+B)$, letting us eliminate one of the powers in each difference. After expanding the sines of sums and differences, we obtain

$$
D_L=\operatorname{Im}\bigl(e^{iB}G_m(e^{i\eta},u)\bigr),\qquad
D_R=\frac{\sin A}{\sin B}\operatorname{Im}\bigl(e^{iB}G_m(1,ve^{iB})\bigr).
$$

<details>
<summary>Check both reductions using the old scalar equation</summary>

The left expression expands as

$$
\sin(B+(m-1)\eta)-u\sin(B+m\eta)
-u^m\sin(B-\eta)+u^{m+1}\sin B,
$$

To recover $D_L$, multiply the old equation by $u$. It gives $uv\sin A=u\sin(A+B)-u^{m+1}\sin B$, and $uv=\rho^{n/m}$ since $n=b+d$. Substitute in $D_L$ and use $A=m\eta$. For $D_R$, the angle addition that we need is

$$
\sin(A+B)\sin(mB)+\sin B\sin(A-mB)
=\sin A\sin((m+1)B)
$$

Multiply $D_R$ by $\sin B/\sin A$ and use $u^m\sin B=\sin(A+B)-v\sin A$ to eliminate $u^m$ from $\rho^n=u^mv^m$. The identity just above then gives

$$
\frac{\sin B}{\sin A}D_R
=\sin B-v^m\sin((m+1)B)+v^{m+1}\sin(mB).
$$

Expand $e^{iB}(1-ve^{-iB})(1-v^me^{imB})$. Three of its four terms give the sines on the right when we take imaginary parts. The fourth term is $-v$, which is real. Recognising the product as $e^{iB}G_m(1,ve^{iB})$ gives the formula for $D_R$.

</details>

For $D_L$ the segment runs from $u>0$ to $e^{i\eta}$. Every point on it has an angle $\phi$ between $0$ and $\eta$, since the opening between its endpoint rays is less than $\pi$. The rotated derivative has angle $B+(m-1)\phi$. Its smallest possible value is $B>0$ and its largest is $B+(m-1)\eta<A+B<\pi$. The segment calculation gives $D_L>0$.

For $D_R$ the segment runs from $ve^{iB}$ to $1$. Now $0\le\phi\le B$, so the rotated derivative has angle between $B$ and $mB$. On this side of the mediant we have $mB<A<\pi$. Thus its imaginary part is positive throughout, and so is $D_R$ since $\sin A/\sin B>0$. Both segments avoid zero. For $m=1$ the derivative is constant and its rotated angle is simply $B$.

The right subinterval uses the smaller denominator $d$. Since $b<d$ and $n=b+d$, its count is $\lfloor(b+d)/d\rfloor=1$, the count used in $D_R$. The left required count $\lfloor n/b\rfloor$ differs from $m$ only if $b$ divides $n$, equivalently $d$. Coprimality forces $b=1$. In that case the adding-factor argument increases the left root once more. Every new open subinterval therefore has a strictly larger candidate radius.

### An arithmetic check and the equality cases

Return to the reflected fraction $y=17/24$ from Topic VIII, corresponding to $x=7/24$. Its endpoints $2/3$ and $3/4$ have denominator sum seven, so they are neighbours at orders four, five and six. What changes as we add the two states? At four and five the count $\lfloor n/3\rfloor$ is one, giving the same equation and the same radius $K_4(7\pi/12)=K_5(7\pi/12)\approx0.86752212$. At six we can fit two groups of three. The first angle stays $A=\pi/4$ and the second is now $B=\pi/6$, half its old value $\pi/3$. The argument with the extra zero weight gives a strictly larger root, $K_6(7\pi/12)\approx0.91141595$.

For the ray we started with, the change happens at the endpoints themselves. The fractions $1/3$ and $2/5$ are neighbours at order seven. Their mediant $3/8$ enters at order eight. Our angular fraction $5/14$ lies between $1/3$ and $3/8$. This is the left part of the split, so $D_L>0$ gives $K_7(5\pi/7)<K_8(5\pi/7)$.

The computed radii are approximately $0.94430114$ and $0.97061308$. In this example the new equation simplifies to $\rho^4+\rho^3=2\cos(\pi/7)$. At the old radius its left side minus the target is about $-0.164763$. The function $\rho\mapsto\rho^4+\rho^3-2\cos(\pi/7)$ is strictly increasing on $(0,1)$. Its negative sign at the old radius puts its zero farther out. This numerical check illustrates the general sign proof; the proof covers every angle in the two new open intervals.

<!-- reader-figure:late -->

We can now tell exactly when two successive orders give equality. At an old Farey endpoint both radii are one. Inside an interval whose endpoints stay fixed, write $q$ for their smaller denominator. The roots agree if $\lfloor(n-1)/q\rfloor=\lfloor n/q\rfloor$, and adding one factor makes the new root strictly larger. A split increases the radius on each of its two open subintervals. At the mediant itself the old radius was below one and the new radius is one. This proves $K_{n-1}(\theta)\le K_n(\theta)$ for $n\ge5$. To use the comparison starting from three states, we still need to examine the triangle at order three.
