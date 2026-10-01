### Turning a Farey interval into one candidate radius

The geometric work in Topics IV–VII has reduced an extremal eigenvalue to a product and an exact count of its turns. This topic constructs the radius that this information will eventually force. At this stage it is a candidate: Topic IX proves the upper bound, Topic X constructs a matrix attaining it, and Topics XI–XII identify it with the complete boundary.

Fixing the angle means fixing a ray from the origin. The only unknown position on that ray is its distance from zero. A complex polynomial can have several roots, including roots on other rays or on another winding branch. We therefore look for an equation in the one positive real variable $\rho$, together with the turn count that identifies which polynomial branch it represents. An increasing scalar left side will turn this selection into a checkable crossing of one target value.

Let $n\ge4$ be the required matrix order. Write $F_n$ for the increasing list of reduced fractions in $[0,1]$ with denominator at most $n$. Fix an angle $\theta$ in the upper half-plane and set $x=\theta/(2\pi)$. Suppose $x$ lies strictly between consecutive fractions $f<g$ in $F_n\cap[0,1/2]$. Consecutive fractions $p/q<r/s$ satisfy

$$
rq-ps=1,\qquad q+s>n.
$$

The first identity says that their separation is exactly $1/(qs)$. The second says that their mediant, $(p+r)/(q+s)$, has denominator too large to appear at order $n$.

The product formula is oriented so that its left endpoint has the smaller denominator. If that is already true, set $p/q=f$, $r/s=g$, and $y=x$. Otherwise set $p/q=1-g$, $r/s=1-f$, and $y=1-x$. Reflection reverses the endpoints and corresponds to complex conjugation: $e^{2\pi iy}=e^{-i\theta}$. It preserves the modulus we want to determine. In both cases $q<s$ and $p/q<y<r/s$. The reflected interval may lie in the lower half-plane; its fractional coordinate $y$ remains in $[0,1]$.

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

For these order-$n$ data, $s,mq\ge3$. Consequently $A+B<\pi$. All the sines appearing below are positive; this is a domain condition that makes the comparison work.

Here is an example where reflection is necessary. At order five, take $x=7/24$ in $(1/4,1/3)$. The smaller denominator is on the right. Set $y=1-x=17/24$ and use the reflected interval $(2/3,3/4)$. Now $p=2$, $q=3$, $r=3$, $s=4$, and $m=\lfloor5/3\rfloor=1$. The determinant is $3\cdot3-2\cdot4=1$, and the denominator sum is seven, larger than five. The position is $t=1/2$, giving

$$
A=\frac\pi4,\qquad B=\frac\pi3,\qquad A+B=\frac{7\pi}{12}<\pi.
$$

The original angle is $\theta=7\pi/12$, whereas the oriented angle is $\vartheta=17\pi/12$. We keep $K_5(\theta)$ as the radius of the original upper ray; only the coordinates used in its equation have been reflected. Although $e^{i\vartheta}$ is in the lower half-plane, its third power has argument $A=\pi/4$ after subtracting the full turns. That upper-half-plane factor is what the convexity calculation in Topic IX needs. The two angle budgets in the diagram add to less than a half-turn.

<!-- reader-figure:late-extra -->

### Why the scalar equation has exactly one answer

Define $K_n(\theta)$ inside the interval to be the solution $\rho\in(0,1)$ of

$$
\rho^{s/m}\sin A+\rho^q\sin B=\sin(A+B).
$$

Fractional powers cause no ambiguity: $\rho$ is a positive real number. The left side is a continuous, strictly increasing function of $\rho$. At zero it is zero, whereas the right side is positive. At one the left side exceeds the right side because

$$
\sin A+\sin B-\sin(A+B)
=4\sin(A/2)\sin(B/2)\sin((A+B)/2)>0.
$$

The intermediate value theorem gives a solution between zero and one; strict increase proves uniqueness. Bisection therefore computes the candidate reliably: if the left side is too small, increase the radius; if too large, decrease it.

For a first calculation, take order four and the interval $(0/1,1/4)$ at $\theta=\pi/4$. Then $q=1$, $s=m=4$, and $A=B=\pi/4$. Both powers in the equation are just $\rho$, so it reduces to

$$
\rho\left(\frac1{\sqrt2}+\frac1{\sqrt2}\right)=1,
\qquad \rho=\frac1{\sqrt2}.
$$

The candidate point is $\rho e^{i\pi/4}=(1+i)/2$. This example explains the equation's role: it locates where a prescribed ray meets an arc. The order-seven example below requires fractional powers, but the same increasing-function argument gives its unique answer without solving a polynomial by hand.

The candidate changes continuously with the angle. To see this without assuming a differentiability theorem, take angles tending to an interior angle and any convergent subsequence of their radii in $[0,1]$. Passing to the limit in the equation gives the equation at the limiting angle. Its unique solution determines every possible subsequential limit, so the whole sequence converges.

At the left endpoint $A\to0$, while $B\to2\pi/(mq)\in(0,\pi)$. The limiting equation is $\rho^q\sin B=\sin B$, hence $\rho=1$. At the right endpoint the same reasoning gives $\rho^{s/m}=1$. Assigning $K_n=1$ at Farey fractions joins the candidates continuously to the endpoint roots of unity.

### Selecting a branch requires the turn count

Let $z=\rho e^{i\vartheta}$ and put $e=s-mq$. When these are the least-order data furnished by Topic VII, its geometric construction supplies weights $0\le\beta_j<1$ and factor arguments $u_j=\operatorname{Arg}(z^q-\beta_j)$ satisfying

$$
z^e\prod_{j=1}^{m}(z^q-\beta_j)=\prod_{j=1}^{m}(1-\beta_j),
\qquad
e\vartheta+\sum_{j=1}^{m}u_j=2\pi(r-mp).
$$

The second equality holds in the real numbers. A complex product by itself determines the sum only modulo $2\pi$, and may have other polynomial roots. The polygon's continued angles specify the actual turn count. In particular the average factor argument is

$$
\frac1m\sum_j u_j=A+B.
$$

If $e<0$, the product is used for $z\ne0$, or written without negative powers as $z^s\prod_j(z^q-\beta_j)=z^{mq}\prod_j(1-\beta_j)$. Clearing powers does not make zero a valid root of the original nonzero product.

### A calculation to check

At order seven, $1/3$ and $2/5$ are consecutive: $2\cdot3-1\cdot5=1$ and $3+5>7$. Choose $\theta=5\pi/7$, so $x=5/14$. Here $q=3$, $s=5$, and $m=2$, giving $A=\pi/7$ and $B=3\pi/14$. The candidate solves

$$
\rho^{5/2}\sin(\pi/7)+\rho^3\sin(3\pi/14)=\sin(5\pi/14).
$$

Why can there be only one radius? Both powers are positive and both sine coefficients are positive, so the left side strictly increases. Notice also that $e=5-6=-1$. This is a legitimate example of the negative-exponent case, not a reason to change the Farey data.

The numerical crossing is $\rho\approx0.94430114$. Substituting a smaller trial radius makes the left side too small; substituting a larger one makes it too large. The following plot is computed from this actual scalar function, rather than an assumed curve shape.

<!-- reader-figure:late -->

Order three needs a separate endpoint convention. Its nonreal boundary radius approaches $1/2$ as $\theta\uparrow\pi$, although $-1$ is itself an order-three eigenvalue. Topic XII explains this discontinuity; the continuous endpoint rule above is for $n\ge4$.
