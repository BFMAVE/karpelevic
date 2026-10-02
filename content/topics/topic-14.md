### Following one complete eight-state example

This example lets us check the route from return paths to a product, from a product to a radius, and from that radius to a stochastic matrix and its actual invariant polygon. It is the eight-state example in the paper. The explorer starts at order eight to match it. A deliberate comparison with order seven will then show how a different Farey interval changes the radius at the same angle.

Suppose an invariant polygon has eight vertices $v_0,\ldots,v_7$ in cyclic order. Multiplication by $z=\rho e^{i\theta}$ sends each vertex into the assigned side $(v_{i+2},v_{i+3}]$, with indices modulo eight. Only two images are strictly inside sides: $c_1\in(v_0,v_1)$ and $c_2\in(v_1,v_2)$. Thus the order is $N=8$, the cyclic shift is $\kappa=3$, and the number of interior contacts is two.

The integer relation $3\cdot3-1\cdot8=1$ gives $p=1$, $q=3$, $r=3$, and $s=8$. The fractions $1/3<3/8$ are consecutive at order eight because their determinant is one and $3+8>8$. The product count is $m=\lfloor8/3\rfloor=2$, and the closing exponent is $e=8-2\cdot3=2$.

### The return paths and the real turn count

The two paths are

$$
v_1\longrightarrow v_4\longrightarrow v_7\longrightarrow c_2,
$$

$$
v_2\longrightarrow v_5\longrightarrow v_0\longrightarrow v_3
\longrightarrow v_6\longrightarrow c_1.
$$

Each arrow is one multiplication by $z$. A return means reaching one of the assigned sides $(v_0,v_1]$ or $(v_1,v_2]$. The point $v_0$ is excluded from the first half-open side, so the second path has not yet returned when it reaches $v_0$. It takes two steps to reach $v_0$ and three more to reach $c_1$.

::: {.reader-checkpoint #eight-state-first-return}
**Retrieval checkpoint.** Trace the second path without looking at its endpoint. Why is its first return time five rather than two, even though it reaches the familiar vertex $v_0$ after two multiplications?

<details>
<summary>Hint</summary>

Write out the target set using the two half-open sides. Membership in that set, rather than familiarity of a vertex label, defines a return.

</details>
<details>
<summary>Solution</summary>

The target set is $(v_0,v_1]\cup(v_1,v_2]$, which excludes $v_0$. The two-step arrival at $v_0$ therefore continues through $v_3$ and $v_6$. Only the fifth image, $c_1\in(v_0,v_1)$, belongs to the target set. Counting $v_0$ as a return would discard the extra two-step closing relation and change the product's exponent.

</details>
:::

Write $c_j=\beta_jv_{j-1}+\alpha_jv_j$, where $\alpha_j=1-\beta_j$ and $0<\beta_j<1$. Splitting the longer path gives

$$
(z^3-\beta_1)v_0=\alpha_1v_1,\qquad
(z^3-\beta_2)v_1=\alpha_2v_2,\qquad
z^2v_2=v_0.
$$

Multiplying cancels the nonzero vertex coordinates:

$$
z^2(z^3-\beta_1)(z^3-\beta_2)=\alpha_1\alpha_2.
$$

The cancellation has a useful geometric meaning. Dividing the first two recurrences by their positive weights gives the ratios $v_1/v_0$ and $v_2/v_1$. Their product is $v_2/v_0$, so intermediate bases disappear. The closing relation $z^2v_2=v_0$ supplies its inverse. What survives is a condition on the rotation-dilation $z$ and the contact weights, independent of the scale at which the polygon was drawn.

Let $\Phi_j$ be continued real vertex angles, with $\Phi_8=\Phi_0+2\pi$. Define $u_1=\Phi_1-\Phi_0$ and $u_2=\Phi_2-\Phi_1$. The closing path says $\Phi_2+2\theta=\Phi_8$. Hence

$$
2\theta+u_1+u_2=2\pi.
$$

This is one full turn as a real equality, not merely a phase congruence. It matches $r-mp=3-2=1$.

### Choosing and checking the radius

Take $\theta=5\pi/7$, whose fractional angle is $5/14\in(1/3,3/8)$. The two scalar angles are

$$
A=3\theta-2\pi=\pi/7,\qquad
B=(6\pi-8\theta)/2=\pi/7.
$$

Topic VIII's scalar equation simplifies, after dividing by $\sin(\pi/7)>0$, to

$$
\rho^4+\rho^3=2\cos(\pi/7).
$$

Its left side strictly increases from zero to two on $[0,1]$, and the right side lies strictly between zero and two. There is exactly one root $\rho\in(0,1)$, numerically about $0.97061308$.

Set $\beta_1=\beta_2=\beta=1/(1+\rho)$ and $\alpha_1=\alpha_2=\alpha=\rho/(1+\rho)$. To check the factor identity directly, let $h=\pi/7$. Since $z^3=\rho^3e^{ih}$ and $\rho^3=2\cos h/(1+\rho)=2\beta\cos h$,

$$
z^3-\beta=\beta(2\cos h\,e^{ih}-1)=\beta e^{2ih}.
$$

Thus both factor arguments are $2\pi/7$. The product's modulus is $\rho^2\beta^2=\alpha^2$, and its real total argument is $2(5\pi/7)+2(2\pi/7)=2\pi$. Both product requirements are checked.

### The matrix and its eigenvector

Use rows and columns numbered zero through seven. Give the six arrows

$$
0\to3\to6,\qquad 1\to4\to7,\qquad 2\to5\to0
$$

weight one. The remaining arrows are $6\to0$ with weight $\beta$, $6\to1$ with weight $\alpha$, $7\to1$ with weight $\beta$, and $7\to2$ with weight $\alpha$. Let $M$ be the matrix whose entries are these arrow weights, with all other entries zero. Every row sums to one, so $M$ is stochastic.

<!-- reader-figure:late -->

To prove that $z$ is an eigenvalue, set

$$
v_0=1,\qquad v_1=(z^3-\beta)/\alpha,\qquad v_2=z^{-2},
$$

and define the remaining coordinates along each weight-one arrow by $v_j=zv_i$. Thus $v_3=z$, $v_6=z^2$, $v_4=zv_1$, $v_7=z^2v_1$, and $v_5=z^{-1}$. All six weight-one rows satisfy $Mv=zv$. Row six satisfies it because $\beta v_0+\alpha v_1=z^3=zv_6$. For row seven the product identity gives $(z^3-\beta)v_1=\alpha v_2$, hence $\beta v_1+\alpha v_2=z^3v_1=zv_7$. The vector is nonzero since $v_0=1$.

Choosing $v_0=1$ fixes only the eigenvector's scale. The last deterministic path returns to it consistently because $zv_5=z\cdot z^{-1}=1$. The other coordinates then propagate forward along unit-weight arrows; only the two branching rows require the product recurrences. This is why all eight rows can be checked without calculating the roots of an eighth-degree determinant.

The rows prove stochastic realisation. It remains to verify that these particular eight coordinates are extreme vertices and have the contact arrangement used at the beginning. We can complete that geometric check for this specified angle; a general transition graph does not guarantee it.

### Checking the actual invariant octagon

Recall $h=\pi/7$. Since $\beta/\alpha=1/\rho$ and $z^3-\beta=\beta e^{2ih}$, the coordinates simplify to the following exact polar forms:

| Coordinate | Exact value | Continued angle |
|---|---|---|
| $v_0$ | $1$ | $0$ |
| $v_1$ | $\rho^{-1}e^{2ih}$ | $2h$ |
| $v_2$ | $\rho^{-2}e^{4ih}$ | $4h$ |
| $v_3$ | $\rho e^{5ih}$ | $5h$ |
| $v_4$ | $-1$ | $7h$ |
| $v_5$ | $\rho^{-1}e^{9ih}$ | $9h$ |
| $v_6$ | $\rho^2e^{10ih}$ | $10h$ |
| $v_7$ | $\rho e^{12ih}$ | $12h$ |

The angles increase around one full turn, including the final gap $2h$ from $v_7$ to $v_0$. First this proves that the polygon has no crossings. Every side joins two positive-radius points whose angular separation is $h$ or $2h$, less than $\pi$. A point strictly inside that side is a positive combination of its two endpoint vectors, so its angle lies strictly between their angles. The interiors of nonadjacent sides occupy disjoint angular sectors. Adjacent sides meet only at their shared vertex. The resulting polygon is therefore simple.

Its different radii still require a convexity check. We will show that all eight corners turn strictly left. Identify complex points with their real and imaginary coordinates, and define

$$
\det((a,b),(c,d))=ad-bc,\qquad
T_i=\det(v_{i+1}-v_i,\ v_{i+2}-v_i).
$$

Indices are modulo eight. If $e_i=v_{i+1}-v_i$ is the outgoing edge, then $v_{i+2}-v_i=e_i+e_{i+1}$ and $T_i=\det(e_i,e_{i+1})$. A positive determinant means that the next edge turns left through an angle between zero and $\pi$.

Only two expressions are needed for all eight turns. For this calculation, put

$$
U=(\rho+\rho^{-1})\sin(2h)-\sin(3h),
\qquad V=(1+\rho)(1-\rho^7)\sin h.
$$

Since $0<\rho<1$ and $0<h<\pi$, we have $V>0$. To check $U$, write $c=\cos h\in(0,1)$ and use the double- and triple-angle identities:

$$
\frac{U}{\sin h}
=2c(\rho+\rho^{-1})-4c^2+1
\ge1+4c(1-c)>0.
$$

The inequality uses $\rho+\rho^{-1}\ge2$, which follows from $(\rho-1)^2\ge0$ after division by $\rho>0$. Thus $U>0$ too. Expanding the determinants from the coordinate table gives

| $i$ | Consecutive-turn determinant $T_i$ |
|---|---|
| $0$ | $U/\rho^2$ |
| $1$ | $(1+\rho)V/\rho$ |
| $2$ | $V/\rho^2$ |
| $3$ | $U$ |
| $4$ | $\rho(1+\rho)V$ |
| $5$ | $V$ |
| $6$ | $\rho^2U$ |
| $7$ | $U$ |

Every factor is positive, so every corner turns strictly left. A simple polygon is nonconvex only if it has an inward corner, with interior angle greater than $\pi$; such a corner would give a right turn. We have ruled those out, and strict positivity rules out flat corners too. Thus the polygon is strictly convex and all eight coordinates are genuine hull vertices. This argument uses the exact scalar equation, without assigning an exact value to the numerical radius.

<details>
<summary>Expand the turn calculations</summary>

For polar coordinates $v_i=r_ie^{ik_i h}$, expanding the determinant gives

$$
T_i=r_ir_{i+1}\sin((k_{i+1}-k_i)h)
+r_{i+1}r_{i+2}\sin((k_{i+2}-k_{i+1})h)
-r_ir_{i+2}\sin((k_{i+2}-k_i)h).
$$

Use continued angles $k_8=14$ and $k_9=16$ when wrapping around. For instance, $T_0=\rho^{-1}\sin(2h)+\rho^{-3}\sin(2h)-\rho^{-2}\sin(4h)=U/\rho^2$, because $\sin(4h)=\sin(3h)$ at $h=\pi/7$.

The turn at $v_6$ has

$$
T_5=\rho^3\sin(2h)+\rho\sin h-\sin(3h).
$$

Set $s_1=\sin h$. The scalar relation $2\cos h=\rho^3(1+\rho)$ gives

$$
\sin(2h)=\rho^3(1+\rho)s_1,\qquad
\sin(3h)=[\rho^6(1+\rho)^2-1]s_1.
$$

Substitution reduces $T_5/s_1$ to

$$
\rho^6(1+\rho)+\rho-\rho^6(1+\rho)^2+1
=(1+\rho)(1-\rho^7).
$$

Thus $T_5=V$; it is also the supporting-side determinant $D_{5,7}$ from the independent audit. The two turns with different prefactors expand as

$$
T_1=\rho^{-3}\sin(2h)+\rho^{-1}\sin h-\sin(3h),
$$

$$
T_4=\rho^{-1}\sin(2h)+\rho\sin h-\rho^2\sin(3h).
$$

The same substitutions give $T_1=(1+\rho)V/\rho$ and $T_4=\rho(1+\rho)V$. The remaining turns are scaled copies of the $U$ or $V$ expressions shown in the table.

</details>

<details>
<summary>Independent interval check (optional)</summary>

The [reproducible rational certificate](https://github.com/BFMAVE/karpelevic/blob/main/docs/proof-audits/reader-learning-mathematics-2026-10-02.md) independently checks all 48 supporting-side determinants $D_{ij}=\det(v_{i+1}-v_i,v_j-v_i)$ with $j\ne i,i+1$. It proves $D_{ij}>1/10$ throughout $97/100\le\rho\le98/100$, and brackets the actual root inside that interval. This is a stronger computational statement across a whole radius interval. The elementary turn proof above already establishes the convexity needed here at the exact scalar root.

</details>

The origin lies inside too. If $v_i=r_ie^{i\phi_i}$, then

$$
\det(v_{i+1}-v_i,-v_i)=r_ir_{i+1}\sin(\phi_{i+1}-\phi_i)>0,
$$

because each continued angle gap is $h$ or $2h$, between zero and $\pi$. Thus zero is strictly inward from every supporting side.

Now check the images. Six are the exact endpoint images already verified by the deterministic rows:

$$
zv_0=v_3,\quad zv_1=v_4,\quad zv_2=v_5,\quad
zv_3=v_6,\quad zv_4=v_7,\quad zv_5=v_0.
$$

The remaining two are

$$
zv_6=\rho^3e^{ih}=\beta v_0+\alpha v_1=c_1,
\qquad
zv_7=\rho^2e^{3ih}=\beta v_1+\alpha v_2=c_2.
$$

For the first equality of averages, use $1+e^{2ih}=2\cos h\,e^{ih}$ and $2\beta\cos h=\rho^3$. The second uses the same identity after multiplication by $\rho^{-1}e^{2ih}$. Since $0<\alpha,\beta<1$ and $\alpha+\beta=1$, the contacts are strictly inside their respective sides. There are exactly two interior contacts, and all eight assignments are now checked:

| Source | Image | Assigned half-open side |
|---|---|---|
| $v_0$ | $v_3$ | $(v_2,v_3]$ |
| $v_1$ | $v_4$ | $(v_3,v_4]$ |
| $v_2$ | $v_5$ | $(v_4,v_5]$ |
| $v_3$ | $v_6$ | $(v_5,v_6]$ |
| $v_4$ | $v_7$ | $(v_6,v_7]$ |
| $v_5$ | $v_0$ | $(v_7,v_0]$ |
| $v_6$ | $c_1$ | $(v_0,v_1]$ |
| $v_7$ | $c_2$ | $(v_1,v_2]$ |

Each vertex image belongs to $P=\operatorname{conv}\{v_0,\ldots,v_7\}$. Linearity preserves convex combinations, so $zP\subseteq P$. The image polygon in the figure therefore closes the geometric thread with the actual coordinates, while the independently proved upper bound is still what establishes boundary maximality.

<!-- reader-figure:late-extra -->

### Connecting this example to order seven

At order seven, the angle fraction $5/14$ lies between $1/3$ and $2/5$, not between $1/3$ and $3/8$; the latter endpoint has denominator eight. The determinant $2\cdot3-1\cdot5=1$ and denominator sum $3+5=8>7$ verify the order-seven interval. Its data are $q=3$, $s=5$, $m=2$, $A=\pi/7$, and $B=3\pi/14$, so its candidate solves

$$
\rho^{5/2}\sin(\pi/7)+\rho^3\sin(3\pi/14)=\sin(5\pi/14).
$$

Its closing exponent is $e=-1$. Clearing that negative power gives $z^5(z^3-\beta)^2=(1-\beta)^2z^6$ for the equal-weight construction, used with $z\ne0$.

Why must the eight-state radius be larger at the chosen angle? Increasing the order from seven to eight inserts the mediant $(1+2)/(3+5)=3/8$. Topic XI proves a strict increase on both new open intervals. Since $5/14<3/8$, it is on the new left interval and $K_8(5\pi/7)>K_7(5\pi/7)$. The explorer and the source example therefore illustrate two adjacent stages of the same proof, while their matrices and scalar equations retain their respective orders.

We can now verify the least realising order as well. Topic XII has identified $R_7=K_7$, so this point at radius $K_8>K_7$ cannot occur at order seven or any smaller order. Its eight-state matrix does realise it. Its least order is therefore exactly eight, consistent with the eight extreme coordinates and the structural setup used at the beginning.
