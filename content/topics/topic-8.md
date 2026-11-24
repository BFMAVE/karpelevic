### Turning a Farey interval into one candidate radius

Consider a point on the segment from $1$ to $i$. If it lies on the ray making an angle of $\pi/4$, its real and imaginary parts agree, so it is $(1+i)/2$. Its radius is $1/\sqrt2$. The first arc at order four has precisely this shape. On a more complicated arc we should still be able to fix a ray and solve for just one real number. Which equation takes the place of intersecting that segment with the ray?

::: {.reader-sharpness-ledger}
**Upper bound — still to prove.** Topic IX will show that a product with the specified real winding cannot have radius beyond this candidate. Topic XI will compare candidates at different orders.

**Attainment.** Even after finding a radius, we still need a matrix with an eigenvalue at that point. Topic X will construct one.
:::

The polygon supplies its data at the least order that realises a point. For the moment we can perform the following construction at any given order. We write $K_n(\theta)$ for the distance it assigns to the ray of angle $\theta$.

Fix the matrix order $n\ge4$. To find the equation for a ray of angle $\theta$ in the upper half-plane, measure its direction in turns, $x=\theta/(2\pi)$. Arrange all reduced fractions in $[0,1]$ with denominator at most $n$ in increasing order. This list is $F_n$. Suppose $x$ lies in a gap with endpoints $f<g$ in its upper-ray portion $[0,1/2]$. For any two neighbours $p/q<r/s$ of $F_n$, Topic VII gives

$$
rq-ps=1,\qquad q+s>n.
$$

Indeed, subtracting the fractions gives $(rq-ps)/(qs)=1/(qs)$. If the denominator sum $q+s$ were at most $n$, the intermediate fraction $(p+r)/(q+s)$ would be available already. Its numerator and denominator are coprime since a common divisor would divide $q(p+r)-p(q+s)=1$.

The product formula is oriented so that its left endpoint has the smaller denominator. If that is already true, set $p/q=f$, $r/s=g$, and $y=x$. Otherwise set $p/q=1-g$, $r/s=1-f$, and $y=1-x$. Reflection reverses the endpoints because conjugation gives $e^{2\pi iy}=e^{-i\theta}$. It preserves the modulus we want to determine. In both cases $q<s$ and $p/q<y<r/s$. When we have reflected, $y>1/2$, so the corresponding ray lies in the lower half-plane.

Using the oriented angle $\vartheta=2\pi y$, put

$$
m=\lfloor n/q\rfloor,\qquad
A=q\vartheta-2\pi p,\qquad
B=\frac{2\pi r-s\vartheta}{m}.
$$

There are $m$ factors to compare. The angle $A$ counts $q$ copies of the angular distance from the left endpoint. The angle $B$ counts $s$ copies of the distance to the right endpoint, shared equally among the $m$ factors. Both are positive. To see their sizes, measure the distance from the left endpoint as a fraction of the interval width. Denote that fraction by

$$
t=\frac{y-p/q}{r/s-p/q}\in(0,1).
$$

Then $y-p/q=t/(qs)$ and $r/s-y=(1-t)/(qs)$. Substituting in the definitions gives

$$
A=\frac{2\pi t}{s},\qquad
B=\frac{2\pi(1-t)}{mq}.
$$

Both denominators in these last expressions are at least three. Indeed, $q<s$ and $q+s>n\ge4$ give $s\ge3$. For $q=1$ we have $mq=n$, for $q=2$ we have $m\ge2$, and for $q\ge3$ already $mq\ge3$. Hence $A+B$ is a convex combination of $2\pi/s$ and $2\pi/(mq)$, each at most $2\pi/3$. In particular $A$, $B$ and $A+B$ have positive sines.

Take $n=5$ and $x=7/24$. The neighbours $1/4=6/24$ and $1/3=8/24$ put the smaller denominator on the right. Reflection gives $y=17/24$ between $2/3=16/24$ and $3/4=18/24$. We read off $p=2$, $q=3$, $r=3$, $s=4$ and $m=\lfloor5/3\rfloor=1$. The check $3\cdot3-2\cdot4=1$ and $3+4>5$ confirms adjacency. The midpoint is still the midpoint, so $t=1/2$ gives

$$
A=\frac\pi4,\qquad B=\frac\pi3,\qquad A+B=\frac{7\pi}{12}<\pi.
$$

The original angle is $\theta=7\pi/12$, whereas the oriented angle is $\vartheta=17\pi/12$. We keep $K_5(\theta)$ as the radius of the original upper ray; only the coordinates used in its equation have been reflected. Although $e^{i\vartheta}$ is in the lower half-plane, its third power has argument $A=\pi/4$ after subtracting the full turns. That upper-half-plane factor is what the convexity calculation in Topic IX needs. In the drawing, follow the endpoint $1/3$ as it becomes $2/3$. The marked angle is halfway across the interval on either side of the drawing.

<!-- reader-figure:late-extra -->

### Selecting a branch requires the turn count

Write $z=\rho e^{i\vartheta}$ and $e=s-mq$. Recall the setting of Topic VII. There we took a nonreal eigenvalue at the greatest radius on its ray, with modulus less than one and least realising order at least four. A tower ending on a side gives a weight $0\le\beta_j<1$ and a factor angle $u_j=\operatorname{Arg}(z^q-\beta_j)$. Multiplication gives the first equality below. Counting the turns along the same paths gives the second.

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

For a negative $e$, the first equation involves a reciprocal power of $z$, so $z\ne0$. One can also multiply it by $z^{mq}$ to obtain $z^s\prod_j(z^q-\beta_j)=z^{mq}\prod_j(1-\beta_j)$. This polynomial equation holds at zero as well. Only its nonzero roots can be checked in the original product.

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

Vary the angle inside one Farey interval. If a sequence of angles tends to $\theta$, each corresponding radius lies in $[0,1]$, so every subsequence has a further convergent subsequence. Taking limits in the equation shows that its limit solves the equation at $\theta$. There is just one such radius, $K_n(\theta)$. Thus the radii themselves converge to it.

What happens as the ray reaches an endpoint? On the left, $A$ tends to zero and $B$ tends to $2\pi/(mq)$, with positive sine. Any limiting radius therefore satisfies $\rho^q\sin B=\sin B$, forcing $\rho=1$. On the right, $B$ tends to zero and the surviving equation gives $\rho^{s/m}=1$. The arc thus joins the two roots of unity continuously if we set $K_n=1$ at their directions.

### A calculation to check

On the ray $\theta=5\pi/7$ we have $x=5/14$. At order seven the fractions on either side are $1/3$ and $2/5$, with determinant $2\cdot3-1\cdot5=1$ and denominator sum eight. The smaller denominator is on the left, so $\vartheta=\theta$. Substituting $q=3$, $s=5$ and $m=2$ gives $A=3(5\pi/7)-2\pi=\pi/7$ and $B=(4\pi-5(5\pi/7))/2=3\pi/14$. The equation for the radius becomes

$$
\rho^{5/2}\sin(\pi/7)+\rho^3\sin(3\pi/14)=\sin(5\pi/14).
$$

Here $e=5-6=-1$ in the product. Its radius equation still has the two positive exponents $5/2$ and $3$.

Try two values before finding the zero to many places. At $\rho=0.94$ the left side minus the target is approximately $-0.0114$. At $0.95$ it is about $0.0153$. Strict increase places the root between these two radii. Repeating the check on successively smaller intervals gives $K_7(5\pi/7)\approx0.94430114$. In the plot, the horizontal coordinate is this trial radius.

<!-- reader-figure:late -->

The endpoint convention uses $n\ge4$. At order three the nonreal boundary approaches the point $-1/2$ as $\theta$ tends to $\pi$ from below, but along the negative real ray the boundary point is $-1$. We will see both pieces of the order-three region in Topic XII.
