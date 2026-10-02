### Comparing the candidates without assuming the theorem

The product geometry uses the smallest order at which an eigenvalue can be realised. The website's boundary, however, is requested at a specified order $n$. We therefore need to prove that the scalar candidates increase with the order. Using the boundary theorem for this comparison would be circular: the comparison is one of the ingredients proving that theorem.

Here is the obligation this comparison will discharge. Write $R_n(\theta)$ for the actual largest eigenvalue radius on the ray, and let $k\le n$ be the least realising order of a maximiser, as Topic XII will do. For $k\ge4$, the final proof needs the chain

$$
R_n(\theta)\le K_k(\theta)\le K_n(\theta)\le R_n(\theta).
$$

| Comparison | Where it comes from |
|---|---|
| $R_n\le K_k$ | The least-order geometric product in Topic VII and the upper bound in Topic IX |
| $K_k\le K_n$ | The independent scalar comparison proved in this topic |
| $K_n\le R_n$ | The attaining matrix in Topic X |

The actual regions do grow with matrix order: an identity block retains every eigenvalue of the smaller matrix. At this stage, however, $K_n$ is still a proposed radius, so nesting the actual regions cannot establish the middle comparison. If the least order is three, the triangle description provides a separate initial comparison with $K_4$ in Topic XII.

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

The practical test is a sign test. Insert the old radius into the new scalar equation. If its left side is still below the new target, the increasing function has not yet reached its zero, so the new radius must be larger. Most of the work below proves that sign without already knowing where either boundary lies. The figure near the worked comparison shows the actual old and new roots.

When the order increases by one, the Farey interval containing an angle can change in only two ways. Its endpoints may stay the same, in which case its number of product factors may increase. Alternatively it is split by a mediant. Topic VIII defined the scalar candidate $K_n(\theta)$; below all angles remain strictly inside the intervals used in a scalar equation.

### Adding a product factor

Fix oriented endpoints $p/q<r/s$, with $q<s$ and $rq-ps=1$, and a fractional angle $y$ between them. Put $\vartheta=2\pi y$ and

$$
A=q\vartheta-2\pi p,\qquad B_k=(2\pi r-s\vartheta)/k.
$$

For a positive integer $k$, let $\rho_k$ solve the scalar equation with $k$ factors. Assume $A+B_m<\pi$ for the old count $m$. Topic X supplies a common weight $\beta\in(0,1)$ at $z=\rho_me^{i\vartheta}$, with

$$
z^{s-mq}(z^q-\beta)^m=(1-\beta)^m.
$$

Append the factor $z^q-0=z^q$ and decrease the initial exponent by $q$. The product remains unchanged. Its real phase changes in exactly the required way, since $\operatorname{Arg}(z^q)=A$ and

$$
[s-(m+1)q]\vartheta+m(A+B_m)+A
=2\pi[r-(m+1)p].
$$

We now have $m+1$ admissible factors with weights $(\beta,\ldots,\beta,0)$. They are unequal. Topic IX gives a strict scalar inequality at $\rho_m$ for the new count. Because the new scalar left side increases with the radius, its equality root must be larger: $\rho_{m+1}>\rho_m$.

### Why new fractions are mediants

Suppose $a/b<c/d$ are consecutive in $F_{n-1}$ and a new reduced fraction $h/n$ lies between them. Farey adjacency gives $bc-ad=1$ and $b+d\ge n$. The integers $cn-dh$ and $bh-an$ are positive, and

$$
(n,h)=(cn-dh)(b,a)+(bh-an)(d,c).
$$

Comparing first coordinates gives $n\ge b+d\ge n$. Both positive coefficients must therefore equal one, and $b+d=n$, $h=a+c$. The inserted fraction is exactly the mediant $\xi=(a+c)/(b+d)$. If no such fraction appears, the old interval stays unchanged.

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

The old scalar equation is $\rho^{d/m}\sin A+\rho^b\sin B=\sin(A+B)$. We evaluate it using $y$, without writing $K_{n-1}(2\pi y)$ at a lower-half-plane angle. The Farey calculation above gives $n=b+d$, so $mB-A=2\pi(a+c-ny)$. Its sign tells us which new interval contains $y$: it is positive on the left of $\xi$ and negative on the right. Reflection may interchange left and right in the original picture, but it leaves this radius comparison unchanged.

Evaluate each new equation at the old radius. For the left interval, temporarily keep $m$ factors. For the right interval, reflection makes $d$ the smaller denominator and its required factor count is one. The right side minus the left side is respectively

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

For example, the left expression expands as

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

On the left, the segment from $u$ to $e^{i\eta}$ has arguments between zero and $\eta$. The rotated derivative $e^{iB}mz^{m-1}$ therefore has arguments between $B$ and $B+(m-1)\eta$, all in $(0,\pi)$ because $A+B<\pi$. Thus $D_L>0$. On the right, the segment from $ve^{iB}$ to one has arguments between zero and $B$. Its rotated derivative has arguments between $B$ and $mB$. Here $mB<A<\pi$, so $D_R>0$. Neither segment contains zero. The sign lemma applies also when $m=1$, when the derivative is constant.

The right count is already correct. The left required count $\lfloor n/b\rfloor$ differs from $m$ only if $b$ divides $n$, equivalently $d$. Coprimality forces $b=1$. In that case the adding-factor argument increases the left root once more. Every new open subinterval therefore has a strictly larger candidate radius.

### An arithmetic check and the equality cases

Unchanged endpoints can still give a larger radius. Return to Topic VIII's reflected example $x=7/24$, $y=17/24$ in $(2/3,3/4)$. These endpoints remain consecutive at orders four, five, and six: their denominators sum to seven. The factor count is one at orders four and five, so the two scalar equations agree and $K_4(7\pi/12)=K_5(7\pi/12)\approx0.86752212$. At order six the count rises to two. Now $A=\pi/4$ stays fixed, but $B$ decreases from $\pi/3$ to $\pi/6$. Appending a zero weight gives the strict comparison, and the new numerical radius is $K_6(7\pi/12)\approx0.91141595$. A Farey interval can therefore stay unchanged while its product has gained one factor.

From order seven to eight, the interval $(1/3,2/5)$ splits because $3+5=8$, inserting $3/8$. The angle fraction $5/14$ satisfies $1/3<5/14<3/8$, so the split comparison gives $K_8(5\pi/7)>K_7(5\pi/7)$.

The computed radii are approximately $0.94430114$ and $0.97061308$. In this example the new equation simplifies to $\rho^4+\rho^3=2\cos(\pi/7)$. At the old radius its left side minus the target is about $-0.164763$. The new increasing function therefore needs a larger radius to reach zero. This numerical check illustrates the general sign proof; the proof covers every angle in the two new open intervals.

<!-- reader-figure:late -->

If an old Farey endpoint is retained, both radii are one. Inside an unchanged interval the radii agree exactly when $\lfloor(n-1)/q\rfloor=\lfloor n/q\rfloor$, with $q$ the smaller denominator; otherwise the inequality is strict. At an inserted mediant the new radius is one and the old one is below one. These cases prove $K_{n-1}\le K_n$ for $n\ge5$. Topic XII handles the initial passage from order three to four and then completes the boundary theorem.
