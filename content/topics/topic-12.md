### Closing the gap between the candidate and the boundary

The earlier topics have produced three ingredients: an upper bound from every extremal polygon, a stochastic matrix attaining the scalar candidate, and an independent comparison between candidate radii at different orders. This topic assembles them. Small orders and the unit circle must be treated explicitly, because the geometric product applies to nonreal eigenvalues of modulus less than one whose least realising order is at least four.

Write $\Theta_n$ for the set of individual eigenvalues of real row-stochastic $n\times n$ matrices. Such a matrix has nonnegative entries and row sums one. Its action cannot increase the largest absolute coordinate of a vector, so every eigenvalue has modulus at most one. Compactness of the matrix set and continuity of the determinant make $\Theta_n$ compact. Hence a largest radius on each ray exists whenever that ray meets the set.

### The first three orders

At order one the only matrix is $[1]$, so $\Theta_1=\{1\}$. At order two write

$$
A=\begin{pmatrix}a&1-a\\b&1-b\end{pmatrix},\qquad a,b\in[0,1].
$$

Its eigenvalues are $1$ and $a-b$. Every value in $[-1,1]$ occurs, giving $\Theta_2=[-1,1]$.

For order three put $\xi=e^{2\pi i/3}$. The answer is

$$
\Theta_3=\operatorname{conv}\{1,\xi,\bar\xi\}\ \cup\ [-1,-1/2].
$$

Here $\operatorname{conv}$ means all convex combinations. To obtain the upper restriction, let $\lambda=u+iv$, $v\ne0$, be an eigenvalue. The three eigenvalues are $1,\lambda,\bar\lambda$. Nonnegative diagonal entries give $1+2u=\operatorname{tr}A\ge0$. Also

$$
\operatorname{tr}(A^2)\ge\sum_i a_{ii}^2,\qquad
(\operatorname{tr}A)^2\le3\sum_i a_{ii}^2.
$$

Since $\operatorname{tr}(A^2)=1+2u^2-2v^2$, combining the inequalities yields $u\ge-1/2$ and $3v^2\le(1-u)^2$. Together with $u\le1$, these describe the triangle.

Conversely, let $C_3$ be the three-cycle permutation matrix. For nonnegative $a,b,c$ summing to one, $aI+bC_3+cC_3^2$ is stochastic and has eigenvalue $a+b\xi+c\bar\xi$. This realises the triangle. An order-two matrix enlarged by an identity block realises the remaining real segment.

The upper boundary of the triangle ends at the vertical segment from $\xi$ to $-1/2$. Its radial maximum tends to $1/2$ as $\theta\uparrow\pi$. On the negative real ray itself, the extra segment reaches $-1$, so the radial maximum is one. This is a genuine discontinuity. The order-three scalar equations describe the nonreal rays, with limiting equation $2\rho^3+3\rho^2=1$ at that endpoint; they must not be continuously assigned value one there.

The order-three scalar candidates really do give the radii of these triangle sides. For $0<x=\theta/(2\pi)<1/3$, the data are $q=1$ and $s=m=3$. Topic X's positive equal weights $\alpha,\beta$, with $\alpha+\beta=1$, give $(z-\beta)^3=\alpha^3$. The selected upper root is $z=\beta+\alpha\xi$, on the side from one to $\xi$.

For $1/3<x<1/2$, use the conjugate-oriented point $w=\rho e^{2\pi i(1-x)}$. Here $q=2$, $s=3$, and $m=1$. Cancelling nonzero powers in the Ito equation gives

$$
w^3-\beta w-\alpha=(w-1)(w^2+w+\alpha)=0.
$$

Its nonreal roots have real part $-1/2$. Conjugating back gives the point $z=-1/2+(i/2)\sqrt{4\alpha-1}$ on the vertical side. The selected factor argument and the scalar root's uniqueness identify the radius in both ranges with the ray's intersection with the corresponding triangle side.

We may therefore begin the comparison at order four with these scalar radii. The interval $(0,1/3)$ splits by insertion of $1/4$, and Topic XI's split argument applies. On $(1/3,1/2)$ the endpoints stay fixed while the factor count rises from one to two, so its adding-factor argument applies. At the relevant endpoints direct realisations give the required comparison. Thus the order-three radial maximum is at most $K_4$ on every upper ray.

### Exactly which points lie on the unit circle?

Every root of unity of order $\ell\le n$ is an eigenvalue of an $\ell$-cycle permutation matrix enlarged to order $n$. The converse has a useful elementary proof. Suppose $Av=\lambda v$, $v\ne0$, and $|\lambda|=1$. Let $M=\max_j|v_j|$ and let $S$ be the indices attaining this positive maximum. For $i\in S$,

$$
M=\left|\sum_j a_{ij}v_j\right|
\le\sum_j a_{ij}|v_j|\le M.
$$

Equality forces every positive-weight destination $j$ to belong to $S$ and to satisfy $v_j=\lambda v_i$. Following positive-weight arrows within the finite set $S$ eventually produces a directed cycle of length $\ell\le n$. Around that cycle $v_i=\lambda^\ell v_i$, so $\lambda^\ell=1$. There are no other unit-circle points.

### The two inequalities meet

Fix $n\ge4$ and an upper angle $\theta$. Define $R_n(\theta)$ to be the largest attainable radius. At Farey angles the unit-circle classification gives $R_n=K_n=1$. At any other angle Topic X gives $K_n\le R_n$.

Choose the maximiser $z=R_n(\theta)e^{i\theta}$ and let $k\le n$ be its least realising order. It is nonzero, nonreal, and strictly inside the unit disk. It is also a radial maximiser in $\Theta_k$: a larger point there would remain available at order $n$ by adjoining an identity block.

If $k=3$, the small-order description and comparisons give

$$
|z|\le R_3(\theta)\le K_4(\theta)\le K_n(\theta)\le |z|.
$$

If $k\ge4$, the invariant polygon with the smallest vertex count satisfies the extremality hypotheses used in Topics IV–VII. Its product and real phase give $|z|\le K_k(\theta)$ by Topic IX. Topic XI then gives

$$
|z|\le K_k(\theta)\le K_n(\theta)\le|z|.
$$

Both chains force $R_n(\theta)=K_n(\theta)$. Complex conjugation supplies the lower half-plane.

### Filling the region and a check

Every segment from zero to an attainable point is attainable for $n\ge2$. One matrix explanation uses a stationary probability row $\pi^T$, satisfying $\pi^TA=\pi^T$, and the column $\mathbf1$ of ones. If $Av=\lambda v$ and $\lambda\ne1$, then $\pi^Tv=0$. For $0\le t\le1$, the stochastic matrix $tA+(1-t)\mathbf1\pi^T$ has eigenvalue $t\lambda$. The segment $[0,1]$ is already realised at order two, covering $\lambda=1$.

Thus, for $n\ge4$,

$$
\Theta_n=\{re^{i\theta}:-\pi\le\theta\le\pi,\ 0\le r\le K_n(\theta)\}.
$$

The positive continuous radius means its boundary is exactly the outer curve $K_n(\theta)e^{i\theta}$. Topic X's equal weights trace the Ito arcs between the appropriate roots of unity.

Does order three have a boundary point of modulus $3/4$ at an angle just below $\pi$? Its radial maximum tends to $1/2$, so for angles sufficiently close to $\pi$ the answer is no. At angle exactly $\pi$, $-3/4$ is available on the extra real segment. This check prevents the small-order exception from being hidden by a picture of a continuous radial curve.
