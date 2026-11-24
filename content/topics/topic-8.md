### Turning a Farey interval into one candidate radius

Consider a point on the segment from $1$ to $i$. If it lies on the ray making an angle of $\pi/4$, its real and imaginary parts agree, so it is $(1+i)/2$. Its radius is $1/\sqrt2$. The first arc at order four has precisely this shape. On a more complicated arc we should still be able to fix a ray and solve for just one real number. Which equation takes the place of intersecting that segment with the ray?

::: {.reader-sharpness-ledger}
**Upper bound — still to prove.** Topic IX will show that a product with the specified real winding cannot have radius beyond this candidate. Topic XI will compare candidates at different orders.

**Attainment — still to prove.** Topic X will build a stochastic matrix whose eigenvalue reaches the candidate. A scalar solution alone establishes neither of these two claims.
:::

The polygon supplies its data at the least order that realises a point. For the moment we can perform the following construction at any given order. We write $K_n(\theta)$ for the distance it assigns to the ray of angle $\theta$.

Let $n\ge4$ be the required matrix order. Write $F_n$ for the increasing list of reduced fractions in $[0,1]$ with denominator at most $n$. Fix an angle $\theta$ in the upper half-plane and set $x=\theta/(2\pi)$. Suppose $x$ lies strictly between consecutive fractions $f<g$ in $F_n\cap[0,1/2]$. Consecutive fractions $p/q<r/s$ satisfy

$$
rq-ps=1,\qquad q+s>n.
$$

The first identity says that their separation is exactly $1/(qs)$. The second says that their mediant, $(p+r)/(q+s)$, has denominator too large to appear at order $n$.

The product formula is oriented so that its left endpoint has the smaller denominator. If that is already true, set $p/q=f$, $r/s=g$, and $y=x$. Otherwise set $p/q=1-g$, $r/s=1-f$, and $y=1-x$. Reflection reverses the endpoints because conjugation gives $e^{2\pi iy}=e^{-i\theta}$. It preserves the modulus we want to determine. In both cases $q<s$ and $p/q<y<r/s$. When we have reflected, $y>1/2$, so the corresponding ray lies in the lower half-plane.

Set $\vartheta=2\pi y$, and introduce

$$
m=\lfloor n/q\rfloor,\qquad
A=q\vartheta-2\pi p,\qquad
B=\frac{2\pi r-s\vartheta}{m}.
$$

The integer $m$ counts the product factors. The positive angles $A$ and $B$ measure how far our ray is from the two endpoint rays, after the scalings needed by that product. Their sizes become transparent if we use the fractional position

$$
t=\frac{y-p/q}{r/s-p/q}\in(0,1).
$$

Since the interval length is $1/(qs)$,

$$
A=\frac{2\pi t}{s},\qquad
B=\frac{2\pi(1-t)}{mq}.
$$

Both denominators in these last expressions are at least three. Indeed, $q<s$ and $q+s>n\ge4$ give $s\ge3$. For $q=1$ we have $mq=n$, for $q=2$ we have $m\ge2$, and for $q\ge3$ already $mq\ge3$. Hence $A+B$ is a convex combination of $2\pi/s$ and $2\pi/(mq)$, each at most $2\pi/3$. In particular $A$, $B$ and $A+B$ have positive sines.

Here is an example where reflection is necessary. At order five, take $x=7/24$ in $(1/4,1/3)$. The smaller denominator is on the right. Set $y=1-x=17/24$ and use the reflected interval $(2/3,3/4)$. Now $p=2$, $q=3$, $r=3$, $s=4$, and $m=\lfloor5/3\rfloor=1$. The determinant is $3\cdot3-2\cdot4=1$, and the denominator sum is seven, larger than five. The position is $t=1/2$, giving

$$
A=\frac\pi4,\qquad B=\frac\pi3,\qquad A+B=\frac{7\pi}{12}<\pi.
$$

The original angle is $\theta=7\pi/12$, whereas the oriented angle is $\vartheta=17\pi/12$. We keep $K_5(\theta)$ as the radius of the original upper ray; only the coordinates used in its equation have been reflected. Although $e^{i\vartheta}$ is in the lower half-plane, its third power has argument $A=\pi/4$ after subtracting the full turns. That upper-half-plane factor is what the convexity calculation in Topic IX needs. In the drawing, follow the endpoint $1/3$ as it becomes $2/3$. The marked angle is halfway across the interval on either side of the drawing.

<!-- reader-figure:late-extra -->

### Selecting a branch requires the turn count

Let $z=\rho e^{i\vartheta}$ and put $e=s-mq$. When these are the least-order data furnished by Topic VII, its geometric construction supplies weights $0\le\beta_j<1$ and factor arguments $u_j=\operatorname{Arg}(z^q-\beta_j)$ satisfying

$$
z^e\prod_{j=1}^{m}(z^q-\beta_j)=\prod_{j=1}^{m}(1-\beta_j),
\qquad
e\vartheta+\sum_{j=1}^{m}u_j=2\pi(r-mp).
$$

Divide the real equality by $m$ and collect the two terms involving $\vartheta$. Each of the $m$ factors then has the same share of the total *on average*, even while their weights differ.

$$
\frac1m\sum_j u_j
=\frac{2\pi r-s\vartheta}{m}+q\vartheta-2\pi p=B+A.
$$

If $e<0$, the product is used for $z\ne0$, or written without negative powers as $z^s\prod_j(z^q-\beta_j)=z^{mq}\prod_j(1-\beta_j)$. Clearing powers does not make zero a valid root of the original nonzero product.

### Why the scalar equation has exactly one answer

What radius would we obtain if all $m$ factors had the same weight $\beta$? Put $\alpha=1-\beta$ and $w=z^q$. All the factor angles would then equal the mean $A+B$ just calculated. Taking absolute values in $z^e((w-\beta)/\alpha)^m=1$ gives $|w-\beta|=\alpha\rho^{-e/m}$.

Draw the triangle with vertices $0$, $\beta$ and $w$. The vector from $0$ to $w$ makes angle $A$ with the positive real axis. The vector from $\beta$ to $w$ makes angle $A+B$, so the angle inside the triangle at $\beta$ is $\pi-(A+B)$. The angle at $w$ is therefore $B$. The sine rule relates their lengths.
$$
\frac{\beta}{\sin B}
=\frac{\rho^q}{\sin(A+B)}
=\frac{\alpha\rho^{-e/m}}{\sin A}.
$$
For a candidate on an open arc, $B>0$ gives a genuine triangle: if $\beta=0$ then $w-\beta$ would have angle $A$.

![At order six, halfway between zero and one sixth of a turn, the two row entries are $\alpha=\beta=1/2$. Here $q=1$, $e=0$ and $A=B=\pi/6$. The ray from zero makes angle $A$. The ray from $\beta$ makes angle $A+B$ with the positive real direction. The third side of the triangle is the weight $\beta$ itself.](/figures/equal-weight-sine-triangle.svg)

The first equality gives $\beta=\rho^q\sin B/\sin(A+B)$. The second gives $\alpha=\rho^{q+e/m}\sin A/\sin(A+B)$, where $q+e/m=s/m$. Thus the equation we want is simply the condition $\alpha+\beta=1$. For any given interval data we define $K_n(\theta)$ to be the solution $\rho\in(0,1)$ of

$$
\rho^{s/m}\sin A+\rho^q\sin B=\sin(A+B).
$$

All powers are real powers of a positive number. The left side is a continuous, strictly increasing function of $\rho$. At zero it is zero, whereas the right side is positive. At one the left side exceeds the right side because

$$
\sin A+\sin B-\sin(A+B)
=4\sin(A/2)\sin(B/2)\sin((A+B)/2)>0.
$$

The intermediate value theorem now gives a solution between zero and one. Strict increase gives uniqueness and a way to compute it. If the left side is too small at the midpoint of a trial interval, retain the upper half. Otherwise retain the lower half.

Return to the ray through $(1+i)/2$. At order four its interval is $(0/1,1/4)$, so $q=1$, $s=m=4$, and $A=B=\pi/4$. Substituting gives $2\rho\sin(\pi/4)=1$. We recover the radius $1/\sqrt2$ that we read off the segment.

The candidate changes continuously with the angle. To see this without assuming a differentiability theorem, take angles tending to an interior angle and any convergent subsequence of their radii in $[0,1]$. Passing to the limit in the equation gives the equation at the limiting angle. Its unique solution determines every possible subsequential limit, so the whole sequence converges.

At the left endpoint $A\to0$, while $B\to2\pi/(mq)\in(0,\pi)$. The limiting equation is $\rho^q\sin B=\sin B$, hence $\rho=1$. At the right endpoint the same reasoning gives $\rho^{s/m}=1$. Assigning $K_n=1$ at Farey fractions joins the candidates continuously to the endpoint roots of unity.

### A calculation to check

At order seven, $1/3$ and $2/5$ are consecutive: $2\cdot3-1\cdot5=1$ and $3+5>7$. Choose $\theta=5\pi/7$, so $x=5/14$. Here $q=3$, $s=5$, and $m=2$, giving $A=\pi/7$ and $B=3\pi/14$. The candidate solves

$$
\rho^{5/2}\sin(\pi/7)+\rho^3\sin(3\pi/14)=\sin(5\pi/14).
$$

Here $e=5-6=-1$ in the product. Its radius equation still has the two positive exponents $5/2$ and $3$.

Try two values before finding the zero to many places. At $\rho=0.94$ the left side minus the target is approximately $-0.0114$. At $0.95$ it is about $0.0153$. Strict increase places the root between these two radii. Repeating the check on successively smaller intervals gives $K_7(5\pi/7)\approx0.94430114$. In the plot, the horizontal coordinate is this trial radius.

<!-- reader-figure:late -->

Order three needs a separate endpoint convention. Its nonreal boundary radius approaches $1/2$ as $\theta\uparrow\pi$, although $-1$ is itself an order-three eigenvalue. Topic XII explains this discontinuity; the continuous endpoint rule above is for $n\ge4$.
