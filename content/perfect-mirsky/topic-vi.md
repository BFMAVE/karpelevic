### Put a small angle on the same marks {#small-turn}

Suppose $z=re^{i\theta}$ lies in $D_N$ outside $U_N$, and let $Av=zv$. Throughout the next three topics $N\ge10^{30}$. Divide the vector by a coordinate of largest modulus. The marks then have moduli at most one and one mark is at $1$. The polygon estimate of [Topic V](/perfect-mirsky/topic-v/#ring-estimate) will control the gaps near that modulus. First we need to know how many labels are already there.

Among the $N+1$ directions $0,\theta,\ldots,N\theta$, some pair is separated on the circle by at most $2\pi/(N+1)$. Indeed, put the directions in circular order and add the gaps between successive directions. Their sum is one turn. The difference of the two indices gives $1\le d\le N$ such that $d\theta$ is within $2\pi/(N+1)$ of a multiple of $2\pi$. Set $m=d\lfloor N/d\rfloor$, so $N/2<m\le N$. The $d$th roots of unity are also vertices of $\Pi_m$. If $d\theta$ were exactly a multiple of $2\pi$, the ray through $z$ would meet such a vertex and its whole segment from zero would lie in $\Pi_m$. Thus the angular error $\varphi$ is positive. By conjugating the eigenvalue and the marks when needed we obtain
$$
 B=A^d,\qquad Bv=\lambda v,\qquad
 \lambda=z^d=Re^{i\varphi},\quad 0<\varphi\le2\pi/N .
$$
Products of doubly stochastic matrices remain doubly stochastic, since they preserve the column of ones on multiplication from the right and the row of ones from the left.

### How far can one small step move? {#edge-energy}

The exponent $d$ gives a small turn. The polygon order $m$ lets us bound the contraction during that turn. Taking the largest multiple of $d$ up to $N$ retains every $d$th root of unity and makes the rate of change of the polygon radius small. For example, with $N=9$ and $d=4$ the octagon retains all four corners of the square.

The ray through $z$ is within $\varphi/d$ of one of the retained vertices. By [the side formula](/perfect-mirsky/topic-v/#polygon-sides), the logarithm of the radius changes at a rate at most $\tan(\pi/m)$. Since $z$ lies outside $\Pi_m$, this bounds $-\log R=-d\log r$ by $6.29\varphi/N$ for $N\ge10^6$. It follows that
$$
 1-R\cos\varphi\le9.44\varphi/N,\qquad R\sin\varphi\ge.999\varphi .
$$
The first quantity is the drop in the real part per step. The second is the positive angular part. We will use both. With $B=(b_{ij})$, the sum
$$
 E_{\mathrm{step}}:=\sum_{i,j} b_{ij}|v_j-v_i|^2
     =2(1-R\cos\varphi)\sum_i|v_i|^2
     \le18.88\varphi
$$
comes from expanding the squares and using both sums of $B$. In the final inequality each squared modulus is at most one.

### Why the hull has many outer marks {#outer-marks}

Write $P$ for the hull of the marks. We have $\lambda P\subseteq P$, and $1$ belongs to $P$, so $1,\lambda,\lambda^2,\ldots$ all belong to $P$. During one turn these points start near the unit circle and their directions are separated by at most $\varphi$. Their projections show that $P$ contains the disk of radius $1-40/N$. Every vertex of $P$ has at least that modulus.

<!-- mirsky-figure:spiral -->

A disk this large could still fit inside a polygon with only a number of sides of order $\sqrt N$. Here the small angle of $\lambda$ imposes more. Let $m_v$ be the number of distinct hull vertices. Express each image of a vertex as an average of the vertices. This produces a row-stochastic matrix on the vertices. A stationary flow for that matrix is a collection of nonnegative edge weights with equal total incoming and outgoing weight at each vertex. It can be split into closed cycles. Along each cycle, the sum of the signed angular terms is bounded by half of $\cot(\pi/m_v)$ times the sum of squared edge lengths. The detailed proof derives this bound by expanding the cycle in the Fourier modes of Topic IV.

The balanced flows preserve the sum of the squared radii. We can therefore use the signed angular terms to measure the turn and the squared edges to measure its cost. Averaging over the cycles gives
$$
 R\sin\varphi \le \cot(\pi/m_v)(1-R\cos\varphi).
$$
Use the two bounds from the small step and $\cot(\pi/m_v)\le m_v/\pi$. We obtain $m_v>.332N$. Thus a positive proportion of all labels already lie near the outside. Those labels give a large enough prefix for the estimate in V whenever we cut just below them.

::: {.reader-checkpoint}
**Use the same vector.** Why does passing from $A$ to $A^d$ multiply the angle by $d$ while preserving the marks?

<details><summary>Check your answer</summary>

Applying $A$ to $v$ gives $zv$, and applying it again gives $z^2v$ by linearity. After $d$ steps the eigenvalue is $z^d$ on the same vector. The choice of $d$ brings its angle close to a whole turn.

</details>
:::

<!-- proof-details -->

### Check the small-angle constants and the disk

If $d>N/2$ then $m=d$, and otherwise $m>N-d\ge N/2$. By the side estimate,
$$
 -\log R\le \varphi\tan(\pi/m)\le 6.29\varphi/N .
$$
Use $1-R\le-\log R$ and $1-\cos\varphi\le\varphi^2/2$. Since $\varphi\le2\pi/N$, we get $1-R\cos\varphi\le(6.29+\pi)\varphi/N<9.44\varphi/N$. Also $R\ge1-6.29\varphi/N$ and $\sin\varphi\ge\varphi-\varphi^3/6$, giving $R\sin\varphi\ge.999\varphi$. For the sum $E_{\mathrm{step}}$, the square terms sum to $2\sum_i|v_i|^2$. The cross term is $-2\operatorname{Re}\sum_i\bar v_i(Bv)_i=-2R\cos\varphi\sum_i|v_i|^2$.

For $0\le k\le\lfloor2\pi/\varphi\rfloor$, each $|\lambda^k|$ is at least $\exp(-12.58\pi/N)$. The last gap back to angle zero is at most $\varphi$. In any direction one of these points has projection at least $\exp(-12.58\pi/N)\cos(\varphi/2)\ge1-40/N$. A convex hull is the intersection of its supporting half-planes, the half-planes bounded by lines that touch the hull and contain it on one side. This projection bound puts the disk in the hull.

### Bound the angular part on a cycle

Let $u_1,\ldots,u_{m_v}$ be the hull vertices and $S$ a row-stochastic matrix with $Su=\lambda u$. We obtained $S$ by choosing an average for each vertex. To balance its flows, use a stationary probability row $\pi_0$ satisfying $\pi_0 S=\pi_0$. To find one, start from any probability row and take a convergent subsequence of the averages of its first $m$ iterates. Probability rows form a closed bounded set, and applying $S$ to an average changes only two terms of weight $1/m$. The limit is stationary.

At vertex $i$ write $\pi_{0,i}$ for its weight. The flow weights $\pi_{0,i}S_{ij}$ sum to $\pi_{0,i}$ over outgoing edges, and the weights of the incoming edges also sum to $\pi_{0,i}$. This balance allows us to keep following positive edges until a label repeats. Subtract the smallest weight on that simple directed cycle from its edges, preserving the balance. At least one positive edge disappears at each subtraction, so the process ends.

For a cycle $y_0,\ldots,y_{\ell-1},y_\ell=y_0$ with $\ell\le m_v$, expand $y_j$ in the modes $e^{2\pi i kj/\ell}$. For $k\ne0$ the ratio of the signed term $\operatorname{Im}(\bar y_j y_{j+1})$ to the squared edge cost, after summing that mode around the cycle, is
$$
 \frac{\sin(2\pi k/\ell)}{4\sin^2(\pi k/\ell)}
      =\tfrac12\cot(\pi k/\ell)\le\tfrac12\cot(\pi/m_v).
$$
Orthogonality of the modes removes the cross terms. Constant modes and cycles of length one contribute zero to both sums. Hence the same inequality holds after summing over cycles with their flow weights. On the left we get $R\sin\varphi\sum_i\pi_{0,i}|u_i|^2$ by $Su=\lambda u$. The squared edge sum is $2(1-R\cos\varphi)\sum_i\pi_{0,i}|u_i|^2$ by stationarity and the same square expansion as above. The common factor is positive because every hull vertex has positive modulus. Divide it out and use $.999\pi/9.44>.332$ to get the claimed count.
