### Closing the gap between the candidate and the boundary

Fix an order $n\ge4$ and an angle $\theta$. On this ray Topic X constructed a stochastic matrix with eigenvalue $K_n(\theta)e^{i\theta}$. Could a different matrix of the same order put an eigenvalue farther along the ray? Write $R_n(\theta)$ for the greatest radius any such matrix achieves. The construction gives $K_n\le R_n$. To prove the other inequality we start at the farthest point itself.

There is a small catch in choosing a matrix for that point. Adjoining a $1\times1$ identity block turns a three-state example into a four-state example with the very same eigenvalue. The polygon proof uses the *smallest* order at which the farthest point occurs. We shall find the first three regions directly, then bring the bound at this smallest order back to the order $n$ with which we began.

Recall that $\Theta_n$ is the set of individual eigenvalues of real row-stochastic $n\times n$ matrices. Such a matrix has nonnegative entries and row sums one. Its action cannot increase the largest absolute coordinate of a vector, so every eigenvalue has modulus at most one. Why does a farthest eigenvalue exist? Take eigenvalues approaching the supremum on a ray, and choose a stochastic matrix for each. All entries lie in $[0,1]$, so a subsequence of the matrices converges to a matrix $A$. The row sums are still one and the entries are still nonnegative. If $z$ is the limit of the eigenvalues, continuity gives $\det(zI-A)=0$. Thus $A$ has the eigenvalue at the end of the ray.

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

Here $\operatorname{conv}$ means all convex combinations. To obtain the upper restriction, let $\lambda=u+iv$, $v\ne0$, be an eigenvalue. The three eigenvalues are $1,\lambda,\bar\lambda$. Nonnegative diagonal entries give $1+2u=\operatorname{tr}A\ge0$. For the two sloping sides we need one more restriction. Each entry $(A^2)_{ii}$ contains $a_{ii}^2$ and a sum of nonnegative terms $a_{ij}a_{ji}$. Together with Cauchy–Schwarz for the three diagonal entries, this gives

$$
\operatorname{tr}(A^2)\ge\sum_i a_{ii}^2,\qquad
(\operatorname{tr}A)^2\le3\sum_i a_{ii}^2.
$$

Substituting the eigenvalues gives $(1+2u)^2\le3(1+2u^2-2v^2)$, or $3v^2\le(1-u)^2$. Since $u\le1$, the sloping lines are $v=\pm(1-u)/\sqrt3$. The trace condition $u\ge-1/2$ cuts off their left ends.

Conversely, let $C_3$ be the three-cycle permutation matrix. For nonnegative $a,b,c$ summing to one, $aI+bC_3+cC_3^2$ is stochastic and has eigenvalue $a+b\xi+c\bar\xi$. This realises the triangle. An order-two matrix enlarged by an identity block realises the remaining real segment.

On the vertical side from $\xi$ to $-1/2$, the real coordinate of $\rho e^{i\theta}$ is $\rho\cos\theta=-1/2$. Therefore

$$
R_3(\theta)=-\frac1{2\cos\theta}\qquad(2\pi/3\le\theta<\pi).
$$

At $\theta=5\pi/6$ the radius is $1/\sqrt3\approx0.57735$. Increasing the angle to $11\pi/12$ reduces it to about $0.51764$. The radii approach $1/2$, while the extra real segment gives $R_3(\pi)=1$. In the left panel the red segment extends the triangle along the real axis. In the right panel this jump appears as a discontinuity in the radius at $\pi$.

<!-- reader-figure:late -->

Why do we need the scalar radii for this triangle? The order comparison in Topic XI concerns the solutions $K_n$ of an equation. To start that comparison at order three, we have to check which solution gives the intersection with a triangle side.

<details>
<summary>Identify the two triangle sides in the scalar equation</summary>

Topic X expresses the boundary equation in terms of equal weights when $A,B>0$ and $A+B<\pi$. These inequalities hold on both open intervals at order three.

For $0<x=\theta/(2\pi)<1/3$, the data are $q=1$ and $s=m=3$. Thus $A=\theta$, $B=2\pi/3-\theta$, and $A+B=2\pi/3<\pi$. The same increasing scalar function has a unique positive root $\rho<1$. Its equal weights $\alpha,\beta$ are positive and sum to one. With $z=\rho e^{i\theta}\ne0$, the reduced product is $(z-\beta)^3=\alpha^3$. The selected factor argument is $2\pi/3$, giving $z=\beta+\alpha\xi$, on the side from one to $\xi$.

For $1/3<x<1/2$, use the conjugate-oriented point $w=\rho e^{i\vartheta}$, where $\vartheta=2\pi(1-x)=2\pi-\theta$. The oriented interval is $(1/2,2/3)$, so $q=2$, $s=3$, and $m=1$. Now $A=2\pi-2\theta>0$, $B=3\theta-2\pi>0$, and $A+B=\theta<\pi$. Thus the scalar root and positive equal weights are valid here as well. Since $w\ne0$, we may cancel its powers in the Ito equation, obtaining

$$
w^3-\beta w-\alpha=(w-1)(w^2+w+\alpha)=0.
$$

The nonreal root $w$ solves $w^2+w+\alpha=0$. A nonreal quadratic root requires $4\alpha-1>0$, hence $1/4<\alpha<1$. Its real part is $-1/2$. Conjugating back gives $z=-1/2+(i/2)\sqrt{4\alpha-1}$, strictly between $-1/2$ and $\xi$ on the vertical side. The selected factor argument and the scalar root's uniqueness identify the radius in both ranges with the ray's intersection with the corresponding triangle side.

We may therefore begin the comparison at order four with these scalar radii. The interval $(0,1/3)$ splits by insertion of $1/4$, and Topic XI's split argument applies because its old angle sum is $2\pi/3<\pi$. On $(1/3,1/2)$ the endpoints stay fixed while the factor count rises from one to two, so its adding-factor argument applies because the old angle sum is $\theta<\pi$. At the inserted fraction $1/4$, the new radius is one while the triangle radius is smaller than one. At $x=0,1/3,1/2$, both actual maxima are one, realised directly. Thus the order-three radial maximum is at most $K_4$ on every upper ray, including the exceptional negative ray itself.

</details>

### Exactly which points lie on the unit circle?

Every root of unity of order $\ell\le n$ is an eigenvalue of an $\ell$-cycle permutation matrix enlarged to order $n$. To prove the converse, suppose $Av=\lambda v$, $v\ne0$, and $|\lambda|=1$. Let $M=\max_j|v_j|$ and let $S$ be the indices attaining this positive maximum. For $i\in S$,

$$
M=\left|\sum_j a_{ij}v_j\right|
\le\sum_j a_{ij}|v_j|\le M.
$$

Equality forces every positive-weight destination $j$ to belong to $S$ and to satisfy $v_j=\lambda v_i$. Following positive-weight arrows within the finite set $S$ eventually produces a directed cycle of length $\ell\le n$. Around that cycle $v_i=\lambda^\ell v_i$, so $\lambda^\ell=1$. There are no other unit-circle points.

### The two inequalities meet

Return to order $n\ge4$ and the upper ray chosen at the start. At Farey angles the unit-circle classification gives $R_n=K_n=1$. At any other angle Topic X gives $K_n\le R_n$.

Choose $z=R_n(\theta)e^{i\theta}$ on this non-Farey ray and let $k\le n$ be its least realising order. The construction gives a positive radius, and the unit-circle classification excludes radius one. Since $z$ is nonreal, $k\ge3$. It lies as far out on the ray in $\Theta_k$ as it does in $\Theta_n$. A point farther out at order $k$ would also occur at order $n$ by adjoining an identity block.

If $k=3$, the small-order description and comparisons give

$$
|z|\le R_3(\theta)\le K_4(\theta)\le K_n(\theta)\le |z|.
$$

If $k\ge4$, work at this least order. Topics III–VI choose and arrange a $k$-vertex polygon with as few open sides receiving a contact as possible. Topic VII follows the returns on that polygon. Its product and real phase give $|z|\le K_k(\theta)$ by Topic IX. Topic XI then gives

$$
|z|\le K_k(\theta)\le K_n(\theta)\le|z|.
$$

Both chains force $R_n(\theta)=K_n(\theta)$. Complex conjugation supplies the lower half-plane.

Read the next diagram from the two ends of the argument. On one side we begin with an unknown matrix reaching the outermost point. On the other, we know every row of a matrix that reaches the candidate radius. The order comparison is what lets these conclusions meet at the same $n$.

<!-- reader-figure:late-extra -->

::: {.reader-checkpoint #proof-closure-retrieval}
**Retrieval checkpoint.** In the main case $k\ge4$, identify the ingredient behind each link of $R_n\le K_k\le K_n\le R_n$. Which link uses an explicit stochastic matrix?

<details>
<summary>Hint</summary>

Match the three links with “upper bound”, “independent order comparison”, and “attainment”. Which link requires a matrix having the proposed point as an eigenvalue?

</details>
<details>
<summary>Solution</summary>

Topics VII and IX give the least-order upper bound $R_n\le K_k$. Topic XI gives $K_k\le K_n$. Topic X constructs an eigenvalue at the candidate, giving $K_n\le R_n$. The order-three case replaces the first bound by the explicit triangle calculation and the comparison $R_3\le K_4$.

</details>
:::

#### Finding a point on a reflected arc

For an order-four example, draw the ray at $105^\circ$, or $7/24$ of a turn. Its Farey neighbours are $1/4$ and $1/3$. The radius formula of Topic VIII takes the smaller denominator on the left. Complex conjugation sends the two endpoints to $3/4$ and $2/3$, respectively. Reading the *reflected* arc in increasing angle therefore gives

$$
\frac23<\frac{17}{24}<\frac34.
$$

Use $\vartheta=2\pi(17/24)=17\pi/12$ for this calculation. With $p/q=2/3$, $r/s=3/4$ and $m=1$, we get $A=3\vartheta-4\pi=\pi/4$ and $B=6\pi-4\vartheta=\pi/3$. The radius is the unique positive solution of

$$
\rho^4\sin(\pi/4)+\rho^3\sin(\pi/3)=\sin(7\pi/12).
$$

Both terms on the left increase with $\rho$. Solving gives $\rho\approx0.86752$. Reflection back puts the boundary point at $\rho e^{7\pi i/12}$ on the original ray. Real matrix entries ensure that the same matrix has the conjugate pair of eigenvalues, so the radius belongs to both rays.

![The marked points have the same distance from zero. The upper endpoints at a quarter and a third of a turn become the lower endpoints at three quarters and two thirds. The arcs are sampled from the order-four radius equation.](/figures/bachelor-assembly-reflection.svg)

### Filling the region and a check

Every segment from zero to an attainable point is attainable for $n\ge2$. One matrix explanation uses a stationary probability row $\pi^T$, satisfying $\pi^TA=\pi^T$, and the column $\mathbf1$ of ones. If $Av=\lambda v$, multiply by $\pi^T$ to obtain $\pi^Tv=\pi^TAv=\lambda\pi^Tv$. Thus $\pi^Tv=0$ whenever $\lambda\ne1$. When $\lambda\ne1$ and $0\le t\le1$, multiplying this eigenvector by $tA+(1-t)\mathbf1\pi^T$ gives $t\lambda v$. Each row of this matrix is a convex combination of probability rows. The segment $[0,1]$ is already realised at order two, covering $\lambda=1$.

The added matrix $\mathbf1\pi^T$ resets every row to the same probability distribution. It annihilates this eigenvector because its weighted mean $\pi^Tv$ is zero. For a small exact check, take $A=\left(\begin{smallmatrix}1/5&4/5\\4/5&1/5\end{smallmatrix}\right)$, whose vector $(1,-1)^T$ has eigenvalue $-3/5$ and whose stationary row is $(1/2,1/2)$. At $t=1/2$, the new matrix is $\left(\begin{smallmatrix}7/20&13/20\\13/20&7/20\end{smallmatrix}\right)$ and has eigenvalue $-3/10$. It has moved exactly halfway toward zero while retaining stochastic rows.

Thus, for $n\ge4$,

$$
\Theta_n=\{re^{i\theta}:-\pi\le\theta\le\pi,\ 0\le r\le K_n(\theta)\}.
$$

Take a nonzero point strictly below the outer radius. Since $K_n$ is continuous, the gap stays positive under a sufficiently small change of angle and radius. Thus the point has a neighbourhood in $\Theta_n$. The origin is interior as well. The positive continuous function $K_n$ has a positive minimum on the circle, and the disk of that radius lies in the region.

At the outer radius we have an actual eigenvalue, and arbitrarily close points farther out on its ray lie outside $\Theta_n$. These and only these outer points therefore form the boundary. The equal-weight matrices of Topic X describe each arc between successive roots of unity. At the real endpoints $1$ and $-1$ the upper and lower boundaries meet.

Continue with Topic XIV to follow the eight-state example from return paths through its actual invariant polygon. Topic XIII uses the boundary radius to choose a polygon for measuring contraction.
