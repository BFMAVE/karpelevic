### Measuring a rotation with a polygon

The boundary theorem also answers a concrete question about measuring vector size. Suppose a planar map rotates through $\theta$ and multiplies Euclidean lengths by a positive number $\rho$. If the measuring shape is a polygon with at most $N$ vertices, how small can its contraction factor be? The answer is controlled by the same boundary radius $K_N(\theta)$.

Let $N\ge4$, take $0\le\theta\le\pi$, let $R_\theta$ denote rotation through $\theta$, and set $T=\rho R_\theta$. Reflection covers the other directions. Choose a convex polygon $P$ with at most $N$ vertices and zero in its interior. Define its gauge by

$$
V_P(x)=\inf\{a>0:x\in aP\},\qquad x\in\mathbb R^2.
$$

This is the scale of $P$ needed to contain $x$. The polygon may be asymmetric, so $V_P(-x)$ may differ from $V_P(x)$; a gauge need not be a norm. Scaling is positively homogeneous: $V_P(ax)=aV_P(x)$ for $a\ge0$. A factor $\gamma>0$ satisfies

$$
TP\subseteq\gamma P
\quad\Longleftrightarrow\quad
V_P(Tx)\le\gamma V_P(x)\quad\text{for every }x.
$$

Dividing the inclusion by $\gamma$ makes $P$ invariant under multiplication by $(\rho/\gamma)e^{i\theta}$. The polygon criterion from Topic I puts this number in $\Theta_N$. Its modulus cannot exceed $K_N(\theta)$, hence $\gamma\ge\rho/K_N(\theta)$.

This bound is attained. A nonreal boundary point inside the unit disk supplies an invariant polygon with zero in its interior. A nonreal unit-circle boundary point is a root of unity of order at most $N$; its orbit gives a regular invariant polygon. At angles zero and $\pi$, a centred square works. Thus, if $\Gamma_N(T)$ denotes the smallest factor over allowed polygons,

$$
\Gamma_N(\rho R_\theta)=\frac{\rho}{K_N(\theta)}.
$$

Strict contraction in some such gauge is possible exactly when $\rho<K_N(\theta)$. The requirement $N\ge4$ matters at angle $\pi$: invariance under multiplication by $-1$ forces a polygon to be centrally symmetric, which a triangle cannot be.

### The worst angle and a numerical check

The regular $N$-gon with vertices at the $N$th roots of unity lies in $\Theta_N$: multiplying one of its convex combinations by a vertex merely permutes the roots. Its inscribed disk has radius $\cos(\pi/N)$, so $K_N(\theta)\ge\cos(\pi/N)$ at every angle.

On the first Farey arc, from angle zero to $2\pi/N$, the scalar equation has $q=1$ and $s=m=N$. The sum-of-sines identity gives

$$
K_N(\theta)=\frac{\cos(\pi/N)}{\cos(\theta-\pi/N)}.
$$

At $\theta=\pi/N$ the lower bound is attained. Consequently the largest relative factor is $1/\cos(\pi/N)$.

For $N=4$ and $\theta=\pi/4$, $K_4=1/\sqrt2$. A map with $\rho=0.7$ therefore has optimal gauge factor $0.7\sqrt2\approx0.98995<1$. Replacing $0.7$ by $0.8$ gives a factor $0.8\sqrt2>1$, so no four-vertex gauge gives strict contraction at that angle, even though the map decreases Euclidean lengths.

### The gap near the unit circle

To estimate how many vertices are needed, fix an angle inside an order-$N$ Farey interval. Use the conjugate orientation of Topic VIII so that $p/q<y<r/s$, $q<s$, and $y=\theta/(2\pi)$ or $1-\theta/(2\pi)$. Put

$$
m=\lfloor N/q\rfloor,\qquad
t=\frac{y-p/q}{r/s-p/q},\qquad
A=\frac{2\pi t}{s},\qquad B=\frac{2\pi(1-t)}{mq}.
$$

Here $0<t<1$ measures position within the interval. The boundary theorem yields the uniform estimate

$$
1-K_N(\theta)=
\frac{2\pi^2t(1-t)}{qs}
\left(\frac ts+\frac{1-t}{mq}\right)
\bigl(1+O(N^{-2})\bigr).
$$

The notation $O(N^{-2})$ means an error bounded in absolute value by a constant times $N^{-2}$. Here that constant is independent of the Farey interval and of $t$. The error is relative to the displayed leading term, even when $t$ approaches either endpoint arbitrarily fast.

For the derivation set $H(u)=u^{s/m}\sin A+u^q\sin B$ and $K=K_N(\theta)$. Since $q+s>N$ and $q<s$, we have $s>N/2$; also $mq>N/2$. Thus $A+B=O(N^{-1})$. The scalar equation gives $H(K)=\sin(A+B)$, while

$$
D:=H(1)-\sin(A+B)
=4\sin(A/2)\sin(B/2)\sin((A+B)/2)
=\frac{AB(A+B)}2\bigl(1+O(N^{-2})\bigr).
$$

The ratios $\sin h/h$ approach one with error $O(h^2)$ uniformly as $h\to0$. Factoring the defect into positive sines retains the small factor $t(1-t)$ instead of losing it in an absolute error estimate. Similarly

$$
H'(1)=\frac{s}{m}\sin A+q\sin B
=\frac{2\pi}{m}\bigl(1+O(N^{-2})\bigr).
$$

The mean-value theorem gives $D=(1-K)H'(\xi)$ for some $K<\xi<1$. Replacing $H'(\xi)$ by $H'(1)$ needs care. The bound $K\ge\cos(\pi/N)$ first gives $1-K=O(N^{-2})$, enough for derivative relative error $O(N^{-1})$. Substituting this weaker estimate back gives $1-K=O(mN^{-3})=O((qN^2)^{-1})$. Since $s/m<2q$, the powers of $\xi$ in the derivative now differ from one by $O(N^{-2})$. This improves the derivative comparison to the required relative error. Therefore $1-K=mAB(A+B)/(4\pi)\,(1+O(N^{-2}))$, which gives the formula above.

The relative statement is for open intervals. At an endpoint both the leading term and the gap vanish; dividing them there would be undefined.

### Rational angles, irrational angles, and vertex budgets

If $x=\theta/(2\pi)=a/b$ in lowest terms, the radius is exactly one once $N\ge b$, and only then. This follows from the unit-circle classification. If $x$ is irrational, the radius is below one at every finite order. The uniform formula applies to every irrational angle, but does not assign the same power-law rate to all of them.

A badly approximable irrational $x$ satisfies $|x-a/b|\ge c_x/b^2$ for all rationals, with some constant $c_x>0$. Applied to the two Farey endpoints, this gives $t\ge c_xs/q$ and $1-t\ge c_xq/s$. Consequently $q,s$ are comparable to $N$ and $t$ stays away from both endpoints, with bounds depending on $x$. The formula then gives

$$
1-K_N(2\pi x)\asymp_x N^{-3},\qquad
\frac{\Gamma_N(\rho R_{2\pi x})}{\rho}-1\asymp_x N^{-3}.
$$

The notation $\asymp_x$ means two positive constant bounds depending on $x$. Thus achieving relative gauge loss at most $\varepsilon$ at a fixed badly approximable angle needs a vertex budget comparable to $\varepsilon^{-1/3}$. For every angle, allowing the polygon to depend on the angle, the exact required budget is

$$
\max\left\{4,\left\lceil\frac{\pi}{\arccos((1+\varepsilon)^{-1})}\right\rceil\right\}
\sim\frac{\pi}{\sqrt{2\varepsilon}}.
$$

The worst-angle loss is $1/\cos(\pi/N)-1\sim\pi^2/(2N^2)$. This explains the different exponents: accuracy at one badly approximable angle and accuracy at every angle are different demands. Both relative budgets are independent of the dilation $\rho$.
