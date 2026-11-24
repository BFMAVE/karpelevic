### Measuring a rotation with a polygon

Draw a square centred at the origin, with a horizontal top side. A quarter turn takes it onto itself. An eighth of a turn puts one of its corners above the middle of its top side. The two rotations preserve every Euclidean length, yet the square measures them differently. If we can choose the polygon, how much of this dependence on direction can we remove?

For a fixed rotation and dilation, we can answer the question with the boundary radius from Topic XII. The shape used in Topic XIV gives a concrete example at eight vertices.

Let $N\ge4$, take $0\le\theta\le\pi$, let $R_\theta$ denote rotation through $\theta$, and set $T=\rho R_\theta$ with $\rho>0$. Reflection covers the other directions. Choose a convex polygon $P$ with at most $N$ vertices and zero in its interior. Define its gauge by

$$
V_P(x)=\inf\{a>0:x\in aP\},\qquad x\in\mathbb R^2.
$$

Imagine enlarging a copy of $P$ from the origin until it first contains $x$. Its scale at that instant is $V_P(x)$. Multiplying $x$ by $a\ge0$ multiplies the required scale by $a$.

For example, take the asymmetric rectangle $P=[-1,2]\times[-1,1]$ and $e_1=(1,0)$. Containing $e_1$ requires scale $1/2$, but containing $-e_1$ requires scale one. Thus $V_P(e_1)=1/2$ and $V_P(-e_1)=1$. This asymmetry is possible for a gauge. For contraction we seek one factor that controls every vector measured by this gauge.

A factor $\gamma>0$ satisfies

$$
TP\subseteq\gamma P
\quad\Longleftrightarrow\quad
V_P(Tx)\le\gamma V_P(x)\quad\text{for every }x.
$$

To see both directions, first note that $P$ is the unit sublevel set $\{x:V_P(x)\le1\}$. For $x\ne0$, the gauge is positive because $P$ is bounded. The polygon is closed, so the least scale is attained and $x/V_P(x)\in P$. If $TP\subseteq\gamma P$, apply the inclusion to this rescaled vector and use homogeneity to obtain the gauge inequality. At $x=0$ both sides are zero. Conversely, if the inequality holds for every vector, then every $x\in P$ has $V_P(x)\le1$, so $V_P(Tx)\le\gamma$ and $Tx\in\gamma P$.

Dividing the inclusion by $\gamma$ makes $P$ invariant under multiplication by $(\rho/\gamma)e^{i\theta}$. The polygon criterion from Topic I puts this number in $\Theta_N$. Its modulus cannot exceed $K_N(\theta)$, hence $\gamma\ge\rho/K_N(\theta)$.

This bound is attained. A nonreal boundary point inside the unit disk supplies an invariant polygon with zero in its interior. A nonreal unit-circle boundary point is a root of unity of order at most $N$. Its orbit gives a regular invariant polygon. At angles zero and $\pi$, a centred square works. Thus, if $\Gamma_N(T)$ denotes the smallest factor over allowed polygons,

$$
\Gamma_N(\rho R_\theta)=\frac{\rho}{K_N(\theta)}.
$$

Strict contraction in some such gauge is possible exactly when $\rho<K_N(\theta)$. At angle $\pi$ the bound $N\ge4$ lets us choose the square. A triangle containing zero in its interior cannot be invariant under $-1$, since central symmetry pairs up the vertices.

### The worst angle and a numerical check

Let $Q$ be the convex hull of the $N$th roots of unity. For $z\in Q$, express $z$ as a convex combination of those roots. Multiplying by any vertex of $Q$ permutes the roots, so every image vertex under multiplication by $z$ is again in $Q$. Thus $zQ\subseteq Q$, and the polygon criterion gives $Q\subseteq\Theta_N$. Its inscribed disk has radius $\cos(\pi/N)$, so $K_N(\theta)\ge\cos(\pi/N)$ at every angle.

On the first Farey arc, from angle zero to $2\pi/N$, the scalar equation has $q=1$ and $s=m=N$. The sum-of-sines identity gives

$$
K_N(\theta)=\frac{\cos(\pi/N)}{\cos(\theta-\pi/N)}.
$$

At $\theta=\pi/N$ the radius equals $\cos(\pi/N)$. The largest value of $\Gamma_N(\rho R_\theta)/\rho$ over the angles is therefore $\sec(\pi/N)$.

What if we have to draw the polygon *before* learning the angle? Our polygon $Q$ has circumradius one. Let $D$ be the closed unit disk. Every rotated copy of $Q$ lies in $D$. Distance from the origin to each side of $Q$ is $\cos(\pi/N)$, so enlarging $Q$ by $\sec(\pi/N)$ makes it contain $D$. We have proved

$$
R_\theta Q\subseteq D\subseteq\sec(\pi/N)Q
$$

for every $\theta$, with one fixed polygon. At $\theta=\pi/N$ even the best polygon for that particular rotation needs the factor $\sec(\pi/N)$. Thus $Q$ attains the smallest possible worst-case factor.

![A regular hexagon after a rotation through $\pi/6$. The marked vertex meets a side of the enlarged hexagon. The enlarged hexagon has inradius one, so it also contains every other rotation of the original hexagon.](/figures/bachelor-assembly-fixed-polygon.svg)

For $N=4$ and $\theta=\pi/4$, $K_4=1/\sqrt2$. A map with $\rho=0.7$ therefore has optimal gauge factor $0.7\sqrt2\approx0.98995<1$. Replacing $0.7$ by $0.8$ gives a factor $0.8\sqrt2>1$, so no four-vertex gauge gives strict contraction at that angle, even though the map decreases Euclidean lengths.

The centred square $P=[-1,1]^2$ makes these numbers visible. Its gauge is $V_P(x_1,x_2)=\max\{|x_1|,|x_2|\}$. Its corner $(1,1)$ has gauge one. After a $\pi/4$ rotation and dilation $\rho$, it becomes $(0,\rho\sqrt2)$, with gauge $\rho\sqrt2$. The entire rotated square is the diamond with extreme coordinates $\pm\rho\sqrt2$, so its containment condition is exactly that factor. The theorem shows that changing to another four-vertex polygon cannot improve it at this angle.

<!-- reader-figure:late -->

The angle $5\pi/7$ of the worked octagon gives a different answer to the same practical question. For dilation $0.95$, its optimal eight-vertex factor is $0.95/K_8(5\pi/7)\approx0.97876$, below one. Now suppose we know only the dilation. For eight vertices the best guarantee over all rotations is $0.95/\cos(\pi/8)\approx1.02827$. To guarantee strict contraction we need $\cos(\pi/N)>0.95$. Nine vertices give about $0.93969$ for the cosine and ten give $0.95106$. A regular decagon therefore suffices for every angle, and ten is the least possible vertex budget for that guarantee.

### The gap near the unit circle

To estimate how many vertices are needed, fix an angle inside an order-$N$ Farey interval. Use the conjugate orientation of Topic VIII so that $p/q<y<r/s$, $q<s$, and $y=\theta/(2\pi)$ or $1-\theta/(2\pi)$. Put

$$
m=\lfloor N/q\rfloor,\qquad
t=\frac{y-p/q}{r/s-p/q},\qquad
A=\frac{2\pi t}{s},\qquad B=\frac{2\pi(1-t)}{mq}.
$$

Here $0<t<1$ measures position within the interval. The gap is small for two reasons. The endpoint angles differ by only $2\pi/(qs)$, and the sines in the radius equation are nearly linear at this scale. The first nonzero term is

$$
1-K_N(\theta)=
\frac{2\pi^2t(1-t)}{qs}
\left(\frac ts+\frac{1-t}{mq}\right)
\bigl(1+O(N^{-2})\bigr).
$$

Write $L_N(\theta)$ for the product preceding $1+O(N^{-2})$. There are constants $C>0$ and $N_0$, independent of the interval and $t$, such that for every $N\ge N_0$ and every angle strictly inside an order-$N$ Farey interval,

$$
\left|(1-K_N(\theta))-L_N(\theta)\right|
\le\frac{C}{N^2}L_N(\theta).
$$

A single relative bound covers positions arbitrarily close to either endpoint, where the gap itself is especially small. To put a scale on the formula, take the eight-state ray $y=5/14$. Between $1/3$ and $3/8$ its relative position is
$$
t=\frac{5/14-1/3}{3/8-1/3}=\frac47.
$$
Here $q=3$, $s=8$ and $m=2$. The two terms $t/s$ and $(1-t)/(mq)$ are both $1/14$, giving $L_8=\pi^2/343\approx0.02877$. The radius equation gives an actual gap of about $1-0.970613=0.02939$. The relative error in using the leading term is about two per cent in this example. The uniform estimate states how the error behaves as $N$ grows.

<details>
<summary>Where does the leading term come from?</summary>

To estimate how far the scalar root lies below one, compare the function at the root and at one. Set $H(u)=u^{s/m}\sin A+u^q\sin B$ and $K=K_N(\theta)$. Since $q+s>N$ and $q<s$, we have $s>N/2$. Also $(m+1)q>N$ and $m\ge1$, so $mq>N/2$. Thus $A+B=O(N^{-1})$. The scalar equation gives $H(K)=\sin(A+B)$, while

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

The mean-value theorem gives $D=(1-K)H'(\xi)$ for some $K<\xi<1$. Replacing $H'(\xi)$ by $H'(1)$ needs care. The bound $K\ge\cos(\pi/N)$ first gives $1-K=O(N^{-2})$, enough for derivative relative error $O(N^{-1})$. Substituting this weaker estimate back gives $1-K=O(mN^{-3})=O((qN^2)^{-1})$. Since $s/m<2q$, the powers of $\xi$ in the derivative now differ from one by $O(N^{-2})$. This improves the derivative comparison to the required relative error. Therefore

$$
1-K=\frac{mAB(A+B)}{4\pi}\,(1+O(N^{-2})),
$$

which gives the formula upon substituting $A$ and $B$.

</details>

The relative statement is for open intervals. At an endpoint the gap and its leading term are both zero, so their ratio is undefined.

The first Farey interval gives a useful check on the word uniform. There $q=1$ and $s=m=N$, so the leading gap simplifies to $2\pi^2t(1-t)/N^2$. If we choose a moving angle with $t=N^{-10}$, the gap is of order $N^{-12}$, and the same relative error $O(N^{-2})$ still applies. An absolute bound of order $N^{-4}$ would be larger than the entire gap at these moving angles.

At the midpoint of the same interval, $t=1/2$ and the exact gap is $1-\cos(\pi/N)$. Expanding the cosine gives

$$
1-\cos(\pi/N)=\frac{\pi^2}{2N^2}
\left(1-\frac{\pi^2}{12N^2}+O(N^{-4})\right).
$$

Here the leading term is exactly the one predicted above. The first correction has relative size proportional to $N^{-2}$. Thus even on this single sequence of midpoints the relative error has the order claimed by the uniform estimate.

### Rational angles, irrational angles, and vertex budgets

If $x=\theta/(2\pi)=a/b$ in lowest terms, the radius is exactly one once $N\ge b$, and only then. This follows from the unit-circle classification. If $x$ is irrational, the radius is below one at every finite order. To find the rate at a fixed irrational angle, we have to understand how close it can come to the endpoints of successive Farey intervals.

A badly approximable irrational $x$ satisfies $|x-a/b|\ge c_x/b^2$ for all rationals, with some constant $c_x>0$. Reflection from $x$ to $1-x$ preserves this condition. The Farey interval has width $1/(qs)$, so its two endpoint distances are $t/(qs)$ and $(1-t)/(qs)$. Applying the condition to those distances gives $t\ge c_xs/q$ and $1-t\ge c_xq/s$. Since $t<1$, the first inequality gives $q>c_xs$. Also $s>N/2$ and $s\le N$, so both denominators are between positive constant multiples of $N$. The inequalities now give $t\ge c_x$ and $1-t>c_x^2$. In the formula for the gap, $1/(qs)$ contributes two powers of $1/N$ and the expression in parentheses contributes a third. It follows that

$$
1-K_N(2\pi x)\asymp_x N^{-3},\qquad
\frac{\Gamma_N(\rho R_{2\pi x})}{\rho}-1\asymp_x N^{-3}.
$$

The notation $\asymp_x$ means two positive constant bounds depending on $x$. Thus achieving relative gauge loss at most $\varepsilon$ at a fixed badly approximable angle needs a vertex budget comparable to $\varepsilon^{-1/3}$. For a guarantee at every angle solve $\sec(\pi/N)-1\le\varepsilon$. The least integer budget is

$$
\max\left\{4,\left\lceil\frac{\pi}{\arccos((1+\varepsilon)^{-1})}\right\rceil\right\}
\sim\frac{\pi}{\sqrt{2\varepsilon}}.
$$

The worst-angle loss is $1/\cos(\pi/N)-1\sim\pi^2/(2N^2)$. For example, a guarantee of one per cent excess over the Euclidean factor needs 23 vertices. With 22 the worst excess is about 1.028 per cent, and with 23 it is about 0.940 per cent.

The blue loss samples in the figure use $x=(\sqrt5-1)/4$, which is indeed badly approximable. To check the hypothesis, set $f(u)=4u^2+2u-1$, so $f(x)=0$. For a rational $a/b\in[0,1/2]$, the nonzero integer $4a^2+2ab-b^2$ gives $|f(a/b)|\ge1/b^2$. Since $|f'(u)|\le6$ on this interval, the mean-value theorem gives $|x-a/b|\ge1/(6b^2)$. Rationals outside the interval have distance at least $\min\{x,1/2-x\}$, so decreasing the positive constant if needed covers all rationals. This gives the required positive constant for the blue series.
