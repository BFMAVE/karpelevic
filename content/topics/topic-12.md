### Closing the gap between the candidate and the boundary

The earlier topics have produced three ingredients: an upper bound from every extremal polygon, a stochastic matrix attaining the scalar candidate, and an independent comparison between candidate radii at different orders. This topic assembles them. Small orders and the unit circle must be treated explicitly, because the geometric product applies to nonreal eigenvalues of modulus less than one whose least realising order is at least four.

The small orders are both a useful first answer and a necessary part of the final proof: order two gives the whole real interval, while order three gives a triangle with one attached segment. A maximiser requested at a larger order might already occur at order three, where the product machinery is not the argument we use. We therefore establish this case before closing the inequalities.

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

The order-three scalar candidates really do give the radii of these triangle sides. The equal-weight algebra in Topic X needs positive $A,B$ with $A+B<\pi$, rather than an order-four assumption. We check those conditions before using it at order three.

For $0<x=\theta/(2\pi)<1/3$, the data are $q=1$ and $s=m=3$. Thus $A=\theta$, $B=2\pi/3-\theta$, and $A+B=2\pi/3<\pi$. The same increasing scalar function has a unique positive root $\rho<1$. Its equal weights $\alpha,\beta$ are positive and sum to one. With $z=\rho e^{i\theta}\ne0$, the reduced product is $(z-\beta)^3=\alpha^3$. The selected factor argument is $2\pi/3$, giving $z=\beta+\alpha\xi$, on the side from one to $\xi$.

For $1/3<x<1/2$, use the conjugate-oriented point $w=\rho e^{i\vartheta}$, where $\vartheta=2\pi(1-x)=2\pi-\theta$. The oriented interval is $(1/2,2/3)$, so $q=2$, $s=3$, and $m=1$. Now $A=2\pi-2\theta>0$, $B=3\theta-2\pi>0$, and $A+B=\theta<\pi$. Thus the scalar root and positive equal weights are valid here as well. Since $w\ne0$, we may cancel its powers in the Ito equation, obtaining

$$
w^3-\beta w-\alpha=(w-1)(w^2+w+\alpha)=0.
$$

The point $w$ is nonreal, so it cannot be the root one and must solve $w^2+w+\alpha=0$. A nonreal quadratic root requires $4\alpha-1>0$, hence $1/4<\alpha<1$. Its real part is $-1/2$. Conjugating back gives $z=-1/2+(i/2)\sqrt{4\alpha-1}$, strictly between $-1/2$ and $\xi$ on the vertical side. The selected factor argument and the scalar root's uniqueness identify the radius in both ranges with the ray's intersection with the corresponding triangle side.

We may therefore begin the comparison at order four with these scalar radii. The interval $(0,1/3)$ splits by insertion of $1/4$, and Topic XI's split argument applies because its old angle sum is $2\pi/3<\pi$. On $(1/3,1/2)$ the endpoints stay fixed while the factor count rises from one to two, so its adding-factor argument applies because the old angle sum is $\theta<\pi$. At the inserted fraction $1/4$, the new radius is one while the triangle radius is smaller than one. At $x=0,1/3,1/2$, both actual maxima are one, realised directly. Thus the order-three radial maximum is at most $K_4$ on every upper ray, including the exceptional negative ray itself.

On that vertical triangle side, the real coordinate of $\rho e^{i\theta}$ is $\rho\cos\theta=-1/2$. Therefore

$$
R_3(\theta)=-\frac1{2\cos\theta}\qquad(2\pi/3\le\theta<\pi).
$$

At $\theta=5\pi/6$ this gives $1/\sqrt3\approx0.57735$; at $11\pi/12$ it is approximately $0.51764$. The radii approach $1/2$, while the extra real segment gives $R_3(\pi)=1$. The two panels below show why approaching a direction and evaluating at that direction can give different answers at order three.

<!-- reader-figure:late -->

### Exactly which points lie on the unit circle?

Every root of unity of order $\ell\le n$ is an eigenvalue of an $\ell$-cycle permutation matrix enlarged to order $n$. The converse has a useful elementary proof. Suppose $Av=\lambda v$, $v\ne0$, and $|\lambda|=1$. Let $M=\max_j|v_j|$ and let $S$ be the indices attaining this positive maximum. For $i\in S$,

$$
M=\left|\sum_j a_{ij}v_j\right|
\le\sum_j a_{ij}|v_j|\le M.
$$

Equality forces every positive-weight destination $j$ to belong to $S$ and to satisfy $v_j=\lambda v_i$. Following positive-weight arrows within the finite set $S$ eventually produces a directed cycle of length $\ell\le n$. Around that cycle $v_i=\lambda^\ell v_i$, so $\lambda^\ell=1$. There are no other unit-circle points.

### The two inequalities meet

::: {.reader-checkpoint #proof-closure-retrieval}
**Retrieval checkpoint.** In the main case $k\ge4$, identify the ingredient behind each link of $R_n\le K_k\le K_n\le R_n$. Which link would be missing if we had only solved the scalar equation?

<details>
<summary>Hint</summary>

Match the three links with “upper bound”, “independent order comparison”, and “attainment”. Then distinguish defining a candidate from proving it is an eigenvalue.

</details>
<details>
<summary>Solution</summary>

Topics VII and IX give the least-order upper bound $R_n\le K_k$. Topic XI gives $K_k\le K_n$. Topic X constructs an eigenvalue at the candidate, giving $K_n\le R_n$. Solving the scalar equation alone supplies the definition of $K_n$ and none of these three proofs. In particular, it supplies no attaining matrix. The order-three case replaces the first bound by the explicit triangle calculation and the comparison $R_3\le K_4$.

</details>
:::

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

The order of these inequalities matters. Attainment puts the proposed radius below the actual maximum. The geometric product bounds that maximum at its least realising order, and the independent order comparison carries that bound up to order $n$. We obtain both inequalities without assuming the conclusion in either one. The diagram records these dependencies and shows where the separate order-three argument enters.

<!-- reader-figure:late-extra -->

### Filling the region and a check

Every segment from zero to an attainable point is attainable for $n\ge2$. One matrix explanation uses a stationary probability row $\pi^T$, satisfying $\pi^TA=\pi^T$, and the column $\mathbf1$ of ones. If $Av=\lambda v$ and $\lambda\ne1$, then $\pi^Tv=0$. For $0\le t\le1$, the stochastic matrix $tA+(1-t)\mathbf1\pi^T$ has eigenvalue $t\lambda$. The segment $[0,1]$ is already realised at order two, covering $\lambda=1$.

The added matrix $\mathbf1\pi^T$ resets every row to the same probability distribution. It annihilates this eigenvector because its weighted mean $\pi^Tv$ is zero. For a small exact check, take $A=\left(\begin{smallmatrix}1/5&4/5\\4/5&1/5\end{smallmatrix}\right)$, whose vector $(1,-1)^T$ has eigenvalue $-3/5$ and whose stationary row is $(1/2,1/2)$. At $t=1/2$, the reset mixture is $\left(\begin{smallmatrix}7/20&13/20\\13/20&7/20\end{smallmatrix}\right)$ and has eigenvalue $-3/10$. It has moved exactly halfway toward zero while retaining stochastic rows.

Thus, for $n\ge4$,

$$
\Theta_n=\{re^{i\theta}:-\pi\le\theta\le\pi,\ 0\le r\le K_n(\theta)\}.
$$

We should also justify why this radial description has exactly the stated boundary. For a nonzero point with $r<K_n(\theta)$, there is a positive gap between its radius and the outer radius. Radius and angle vary continuously in a sufficiently small neighbourhood of that point, and $K_n$ is continuous. Shrink the neighbourhood until the gap remains positive throughout it. Every point of that neighbourhood still belongs to $\Theta_n$, so the original point is interior. The origin is interior too: the positive continuous function $K_n$ has a positive minimum on the circle of angles, and the disk of any smaller radius lies in $\Theta_n$.

Conversely, at a point $K_n(\theta)e^{i\theta}$, moving outward by any positive distance on the same ray leaves $\Theta_n$. Such exterior points approach the given point arbitrarily closely. The given point itself belongs to the compact, hence closed, set $\Theta_n$, so it is a boundary point. Every other point of the set was shown to be interior. Therefore its boundary is exactly the outer curve. The endpoint values $K_n(0)=K_n(\pi)=1$ and conjugation join this continuous curve around the full circle for $n\ge4$. Topic X's strictly varying equal weights trace its Ito arcs between the appropriate roots of unity.

Does order three have a boundary point of modulus $3/4$ at an angle just below $\pi$? Its radial maximum tends to $1/2$, so for angles sufficiently close to $\pi$ the answer is no. At angle exactly $\pi$, $-3/4$ is available on the extra real segment. This check prevents the small-order exception from being hidden by a picture of a continuous radial curve.

Continue with Topic XIV to follow the eight-state example from return paths through its actual invariant polygon. Topic XIII is an optional continuation about polygonal measurement and asymptotics; the worked example can be read first.
