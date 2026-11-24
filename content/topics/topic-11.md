### Comparing the candidates without assuming the theorem

Keep the ray through $e^{5\pi i/7}$ fixed and allow one more state. Its angular fraction $5/14$ lies between $1/3$ and $2/5$ at order seven. At order eight a new fraction $3/8$ lies between them. Thus the two equations for the radius use different endpoints. How can we be sure the new equation places its point at least as far from zero?

We can certainly keep a seven-state eigenvalue by adjoining an eighth, absorbing state. That argument concerns eigenvalues of matrices. We still have to compare the two numbers computed by the scalar equations.

Write $R_n(\theta)$ for the actual largest eigenvalue radius on the ray, and let $k\le n$ be the least order of a matrix with eigenvalue $R_n(\theta)e^{i\theta}$. For $k\ge4$, the final proof needs the chain

$$
R_n(\theta)\le K_k(\theta)\le K_n(\theta)\le R_n(\theta).
$$

| Comparison | Where it comes from |
|---|---|
| $R_n\le K_k$ | The least-order geometric product in Topic VII and the upper bound in Topic IX |
| $K_k\le K_n$ | The independent scalar comparison proved in this topic |
| $K_n\le R_n$ | The attaining matrix in Topic X |

The middle inequality is the one we shall establish. If the least order is three, Topic XII uses the triangle description for the initial comparison with $K_4$.

::: {.reader-checkpoint #independent-order-comparison}
**Retrieval checkpoint.** Why does adjoining an identity block fail to prove $K_{n-1}\le K_n$ at this stage?

<details>
<summary>Hint</summary>

State separately what is known about the actual eigenvalue region and what remains to be proved about its scalar candidate.

</details>
<details>
<summary>Solution</summary>

The identity block proves that the actual region $\Theta_{n-1}$ is contained in $\Theta_n$, hence that their actual radial maxima increase. Attainment only gives $K_j\le R_j$. Two lower bounds for nested maxima need not themselves be ordered. Identifying $K_j=R_j$ first would use the theorem whose proof requires this comparison. We therefore compare the scalar equations directly.

</details>
:::

Insert the old radius into the new equation. When the left side is below the target, strict increase puts the new equality radius farther out.

When the order increases by one, the Farey interval containing an angle can change in only two ways. Its endpoints may stay the same, in which case its number of product factors may increase. Alternatively it is split by a mediant. Topic VIII defined the scalar candidate $K_n(\theta)$; below all angles remain strictly inside the intervals used in a scalar equation.

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

Fix oriented endpoints $p/q<r/s$, with $q<s$ and $rq-ps=1$, and a fractional angle $y$ between them. Put $\vartheta=2\pi y$ and

$$
A=q\vartheta-2\pi p,\qquad B_k=(2\pi r-s\vartheta)/k.
$$

Assume $A+B_m<\pi$ for the old count $m$. Since $0<B_{m+1}<B_m$, both counts satisfy the angle condition of Topic VIII. For $k=m,m+1$, let $\rho_k$ be the unique positive solution of the scalar equation with $k$ factors. Topic X supplies a common weight $\beta\in(0,1)$ at $z=\rho_me^{i\vartheta}$, with

$$
z^{s-mq}(z^q-\beta)^m=(1-\beta)^m.
$$

Append the factor $z^q-0=z^q$ and decrease the initial exponent by $q$. The product remains unchanged. Its real phase changes in exactly the required way, since $\operatorname{Arg}(z^q)=A$ and

$$
[s-(m+1)q]\vartheta+m(A+B_m)+A
=2\pi[r-(m+1)p].
$$

Both hypotheses of Topic IX hold for these $m+1$ factors. Their weights $(\beta,\ldots,\beta,0)$ differ because $\beta>0$. Strict convexity therefore puts the new scalar left side strictly below its target at $\rho_m$. The new root satisfies $\rho_{m+1}>\rho_m$.

### Why new fractions are mediants

Suppose $a/b<c/d$ are consecutive in $F_{n-1}$ and a new reduced fraction $h/n$ lies between them. Farey adjacency gives $bc-ad=1$ and $b+d\ge n$. The integers $cn-dh$ and $bh-an$ are positive, and

$$
(n,h)=(cn-dh)(b,a)+(bh-an)(d,c).
$$

Comparing first coordinates gives $n\ge b+d\ge n$. Since $b,d$ are positive, equality forces both coefficients to be one, and $b+d=n$, $h=a+c$. The inserted fraction is exactly the mediant $\xi=(a+c)/(b+d)$. If no such fraction appears, the old interval stays unchanged.

### The calculus behind a split interval

The split comparison needs a sign test for powers along a complex segment. Let $z_0,z_1$ be distinct complex numbers, let $k\ge1$ be an integer, and let $\chi$ be a real angle. The ordinary fundamental theorem of calculus, applied to real and imaginary parts, gives

$$
(\overline{z_1}-\overline{z_0})(z_1^k-z_0^k)
=|z_1-z_0|^2\int_0^1k[z_0+t(z_1-z_0)]^{k-1}\,dt.
$$

If every integrand, after multiplication by $e^{i\chi}$, has positive imaginary part, the left side has positive imaginary part after that same rotation. We will verify this by keeping the derivative's angle strictly between zero and $\pi$.

The square case shows the mechanism without an integral calculation. When $k=2$, the identity reduces to

$$
(\overline{z_1}-\overline{z_0})(z_1^2-z_0^2)
=|z_1-z_0|^2(z_1+z_0).
$$

For $z_0=4/5$, $z_1=e^{i\pi/6}$, and $\chi=\pi/8$, points of the segment have arguments from zero to $\pi/6$. The rotated derivative $e^{i\chi}2z$ has arguments from $\pi/8$ to $7\pi/24$, all strictly above the real axis. Averaging these derivative vectors cannot change the sign of their imaginary parts. The mediant calculation uses this same observation for arbitrary $m$, with segments chosen to match its algebra.

Fix the original upper angle $\theta$, and set $x=\theta/(2\pi)$. It lies in an old interval that is split at order $n$. Define $\rho=K_{n-1}(\theta)$ before making any reflection: this radius always belongs to the original upper ray. Write the oriented old endpoints as $a/b<c/d$, with $b<d$, and use $y=x$ if their original order already had the smaller denominator on the left, or $y=1-x$ after reflection. The new fraction is $\xi=(a+c)/(b+d)$ in these oriented coordinates. Assume $y\ne\xi$, and define

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

A positive value means that the old radius is too small for the new equality.

Put $\eta=A/m$, $u=\rho^{b/m}$, $v=\rho^{d/m}$, and define $G_m(z,w)=(\bar z-\bar w)(z^m-w^m)$. Eliminating one term with the old equation and using angle-addition identities gives

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

which is $D_L$ after eliminating $\rho^{n/m}=uv$ using the old equation. On the right, the identity

$$
\sin(A+B)\sin(mB)+\sin B\sin(A-mB)
=\sin A\sin((m+1)B)
$$

and the old equation give

$$
\frac{\sin B}{\sin A}D_R
=\sin B-v^m\sin((m+1)B)+v^{m+1}\sin(mB).
$$

This is the imaginary part of $e^{iB}(1-ve^{-iB})(1-v^me^{imB})$; its extra term $-v$ is real. That product is $e^{iB}G_m(1,ve^{iB})$, which verifies the stated right reduction.

</details>

On the left, the segment from $u$ to $e^{i\eta}$ has arguments between zero and $\eta$. The rotated derivative $e^{iB}mz^{m-1}$ therefore has arguments between $B$ and $B+(m-1)\eta$, all in $(0,\pi)$ because $A+B<\pi$. Thus $D_L>0$. On the right, the segment from $ve^{iB}$ to one has arguments between zero and $B$. Its rotated derivative has arguments between $B$ and $mB$. Here $mB<A<\pi$, so $D_R>0$. Neither segment contains zero. The sign lemma applies also when $m=1$, when the derivative is constant.

The right subinterval uses the smaller denominator $d$. Since $b<d$ and $n=b+d$, its count is $\lfloor(b+d)/d\rfloor=1$, the count used in $D_R$. The left required count $\lfloor n/b\rfloor$ differs from $m$ only if $b$ divides $n$, equivalently $d$. Coprimality forces $b=1$. In that case the adding-factor argument increases the left root once more. Every new open subinterval therefore has a strictly larger candidate radius.

### An arithmetic check and the equality cases

Unchanged endpoints can still give a larger radius. Return to Topic VIII's reflected example $x=7/24$, $y=17/24$ in $(2/3,3/4)$. These endpoints remain consecutive at orders four, five, and six: their denominators sum to seven. The factor count is one at orders four and five, so the two scalar equations agree and $K_4(7\pi/12)=K_5(7\pi/12)\approx0.86752212$. At order six the count rises to two. Now $A=\pi/4$ stays fixed, but $B$ decreases from $\pi/3$ to $\pi/6$. Appending a zero weight gives the strict comparison, and the new numerical radius is $K_6(7\pi/12)\approx0.91141595$. A Farey interval can therefore stay unchanged while its product has gained one factor.

From order seven to eight, the interval $(1/3,2/5)$ splits because $3+5=8$, inserting $3/8$. The angle fraction $5/14$ satisfies $1/3<5/14<3/8$, so the split comparison gives $K_8(5\pi/7)>K_7(5\pi/7)$.

The computed radii are approximately $0.94430114$ and $0.97061308$. In this example the new equation simplifies to $\rho^4+\rho^3=2\cos(\pi/7)$. At the old radius its left side minus the target is about $-0.164763$. The function $\rho\mapsto\rho^4+\rho^3-2\cos(\pi/7)$ is strictly increasing on $(0,1)$. Its negative sign at the old radius puts its zero farther out. This numerical check illustrates the general sign proof; the proof covers every angle in the two new open intervals.

<!-- reader-figure:late -->

If an old Farey endpoint is retained, both radii are one. Inside an unchanged interval the radii agree exactly when $\lfloor(n-1)/q\rfloor=\lfloor n/q\rfloor$, with $q$ the smaller denominator; otherwise the inequality is strict. At an inserted mediant the new radius is one and the old one is below one. These cases prove $K_{n-1}\le K_n$ for $n\ge5$. Topic XII handles the initial passage from order three to four and then completes the boundary theorem.
