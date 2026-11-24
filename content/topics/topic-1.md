### From an averaging matrix to a picture

Put the numbers $1$ and $i$ at two positions. A row that gives them equal weight produces $(1+i)/2$, halfway along the segment joining them. Now put a complex number $v_j$ at each of $n$ positions. Row $i$ of a matrix $A$ gives the weights with which we average them to obtain $(Av)_i$. We call the matrix **row-stochastic** when every weight is nonnegative and the weights in each row add to one.

An eigenvector $v$ gives us a particularly simple way of doing all these averages. We can multiply each old value by the same complex number $\lambda$ and obtain its new value. Which multipliers can occur if we have only $n$ positions? The set of all such individual eigenvalues is $\Theta_n$. We can choose a different matrix for each $\lambda$.

Throughout this construction $v$ is a column of values. A row of probabilities evolves by multiplication on the other side, $\mu^T\mapsto\mu^TA$. We will use both conventions when we fill the region along a ray.

If $Av=\lambda v$, choose a coordinate $v_i$ of largest absolute value. The triangle inequality gives

$$|\lambda|\,|v_i|=\left|\sum_j a_{ij}v_j\right|\le\sum_j a_{ij}|v_j|\le |v_i|.$$

Since $v\ne0$, this proves $|\lambda|\le1$. Also $A\mathbf1=\mathbf1$, where $\mathbf1$ is the column of ones, so $1$ is always an eigenvalue. The interesting question is where the other eigenvalues can lie inside the unit disk.

View each complex coordinate $v_j$ as a point of the plane. A **convex combination** is a weighted average $\sum_j c_jv_j$ with $c_j\ge0$ and $\sum_jc_j=1$. The **convex hull** of the coordinates is the set of all these averages:

$$P=\operatorname{conv}\{v_1,\ldots,v_n\}.$$

With just two points the hull is their joining segment. You can [move the weights](/prerequisites/#average-heading) to see the row choose different points on this segment.

The eigenvector equation puts each image $\lambda v_i$ in $P$. The hull of these images is $\lambda P$, the whole original hull multiplied by $\lambda$. Since $P$ contains every average of points in $P$, it contains that image hull too. Multiplying by $\lambda=\rho e^{i\theta}$ rotates every point through $\theta$ and scales its distance from zero by $\rho$. The matrix equation has become a rotation and contraction fitting inside a polygon.

A **vertex** is an extreme point: it cannot be expressed as a nontrivial average of other points of the hull. Some coordinates may repeat or lie inside the hull, so the polygon has at most $n$ vertices. A finite convex hull is called a **polytope**; in the plane it can also be a segment or a single point.

We can already settle order two. Write the two averaging rows as $(1-a,a)$ and $(b,1-b)$, with $0\le a,b\le1$. Subtract their outputs on a column $x$:

$$
(Ax)_1-(Ax)_2=(1-a-b)(x_1-x_2).
$$

On constant columns the multiplier is one. On an eigenvector with unequal entries, dividing by $x_1-x_2$ gives the real multiplier $1-a-b$. Indeed the characteristic polynomial is $(z-1)(z-(1-a-b))$. Taking $a=b$ from zero to one gives every value in $[-1,1]$. At $a=b=1/2$ the entries become equal in one step. At $a=b=1$ the two entries exchange places. For three or more positions a new possibility appears. The hull of the values can enclose area, and the common multiplier can rotate it through an angle other than a half-turn.

![Apply the two rows to the column $(0,1)^T$. The circle is at $a$ and the diamond at $1-a$ when $a=b$. Their signed separation passes through zero when the two rows agree.](/figures/bachelor-foundations-two-rows.svg)

### An exact four-point picture

Take $v=(1,i,-1,-i)^T$, and let $C$ shift each coordinate to the next one, returning from the fourth to the first. Then $Cv=iv$. Writing out the stochastic matrix $A=(I+C)/2$, where $I$ is the identity, gives

$$
A=\begin{pmatrix}
1/2&1/2&0&0\\
0&1/2&1/2&0\\
0&0&1/2&1/2\\
1/2&0&0&1/2
\end{pmatrix}.
$$

Its first row computes

$$
(Av)_1=\tfrac12(1)+\tfrac12(i)=\frac{1+i}{2}.
$$

Algebraically, this is the first coordinate of $\lambda v$. Geometrically, it is the midpoint of the side joining the points $1$ and $i$. The remaining rows make the same midpoint choice on the other three sides. Hence

$$
Av=\frac{1+i}{2}v=\lambda v,\qquad
\lambda=\frac{1+i}{2}=\frac1{\sqrt2}e^{i\pi/4}.
$$

How much contraction did this *particular* diamond require? The image of $1$ at radius $r$ and angle $\pi/4$ has coordinates $(r/\sqrt2,r/\sqrt2)$. The line through $1$ and $i$ has equation $x+y=1$, so containment at that vertex requires $\sqrt2\,r\le1$. The other vertices give the same inequality by quarter-turn symmetry. Thus $r=1/\sqrt2$ is exactly the largest radius for this diamond at this angle. To determine the largest radius in $\Theta_4$, we still have to allow the polygon itself to vary.

Join the four midpoints in the drawing. The smaller square is $\lambda P$. Each stochastic row could choose any point on its side. The eigenvector equation ties the four choices to one rotation and one scale.

<!-- reader-figure:early -->

### Why the translation works in both directions

Suppose conversely that a non-singleton polytope $P$ has vertices $w_1,\ldots,w_k$ and $\lambda P\subseteq P$. For each vertex, choose coefficients expressing its image as an average:

$$\lambda w_i=\sum_{j=1}^k a_{ij}w_j,\qquad a_{ij}\ge0,\quad\sum_j a_{ij}=1.$$

These coefficients are the rows of a stochastic matrix, and the nonzero column $(w_1,\ldots,w_k)^T$ is an eigenvector for $\lambda$. If $k<n$, append an identity block. This leaves the old eigenvalues present and gives order $n$.

For $n\ge2$ we therefore have the exact correspondence

$$\lambda\in\Theta_n\quad\Longleftrightarrow\quad\lambda P\subseteq P\text{ for a non-singleton polytope with at most }n\text{ vertices}.$$

There is one small detail in the forward direction. If all eigenvector coordinates are the same nonzero number, the equation forces $\lambda=1$. We then use any nontrivial segment, which multiplication by $1$ preserves. The one-state case is handled separately: $\Theta_1=\{1\}$.

Why check only vertex images? Any point of $P$ is an average $x=\sum_jc_jw_j$. Linearity gives $\lambda x=\sum_jc_j\lambda w_j$. If each vertex image belongs to $P$, convexity puts this average in $P$ too. Conversely, invariance of the whole polygon certainly includes the vertices. This observation will let later deformations verify finitely many contacts instead of every point of a two-dimensional region.

To describe the boundary, we will rotate about zero and measure distance along a ray. We first need to know where zero lies in an invariant polygon.

### Why zero is inside a nonreal invariant polygon

For nonreal $\lambda$, a nontrivial segment cannot contain its rotated image: the two segments have different directions. Thus the invariant hull is a genuine two-dimensional polygon.

When $0<|\lambda|<1$, every orbit $w,\lambda w,\lambda^2w,\ldots$ converges to zero. Closedness puts zero in $P$. For $|\lambda|=1$ and $\lambda\ne1$, the averages of the first $k$ iterates converge to zero by the finite geometric-series formula, so convexity again puts zero in $P$.

Zero cannot lie on the boundary. A supporting line through zero would put the polygon in one closed half-plane. The directions of a nonzero orbit cannot remain in that half-plane. A finite nonreal rotation orbit goes around zero and its direction vectors sum to zero and are not collinear; an infinite rotation orbit is dense in the circle. Either possibility contradicts that half-plane restriction. This is why later arguments may order vertices by their angles about zero.

<details class="reader-proof-derivation">
<summary>Why an irrational rotation visits every open arc</summary>

Write the rotation angle as $2\pi\alpha$ with $\alpha$ irrational. Divide $[0,1)$ into $M$ equal intervals, and place the $M+1$ fractional parts of $0,\alpha,\ldots,M\alpha$ in them. The fractional part of $x$ is $x$ minus its integer part. One interval contains at least two points. Their difference gives a positive integer $r$ with $r\alpha=k+d$, where $k$ is an integer and $0<|d|<1/M$. Nonzero $d$ follows from irrationality. The positive iterates with indices $0,r,2r,\ldots$ have fractional parts equal to those of $0,d,2d,\ldots$. The first $\lfloor1/|d|\rfloor+1$ such points step around the circle in one direction with every remaining gap at most $|d|$; here $\lfloor a\rfloor$ means the greatest integer at most $a$. Choosing $M$ arbitrarily large makes these points arbitrarily close to every direction. All the indices used here are nonnegative, as required for the forward orbit.

</details>

### The boundary is a problem on each ray

Fix a ray on which a nonzero eigenvalue is possible, and let $r$ be the supremum of the possible radii there. The unit-disk bound gives $r\le1$. Choose realising matrices $A_k$ with eigenvalues $\lambda_k$ on this ray and $|\lambda_k|\to r$. Their entries are bounded by one, so a subsequence converges entry by entry. The limit $A$ is still stochastic. Along the same subsequence $\lambda_k\to\lambda$ with $|\lambda|=r$, and continuity of the determinant gives $\det(\lambda I-A)=0$. We can therefore choose an **outermost eigenvalue** on this ray. The same argument for any convergent sequence of attainable eigenvalues shows that $\Theta_n$ is closed, and hence compact.

Real matrices give conjugate eigenvalues, so reflection in the real axis preserves $\Theta_n$. Appending an identity block gives $\Theta_n\subseteq\Theta_{n+1}$.

Return to the diamond with $\lambda=(1+i)/2$. Its first vertex goes to a side midpoint. Halve the multiplier. The image now lies halfway from zero to that midpoint, still inside the diamond. The same is true at every vertex. For any nonreal attainable $\lambda$, the polygon contains both $0$ and $\lambda v_j$, so it contains the segment between them. Hence $(t\lambda)P\subseteq P$ for $0\le t\le1$. The polygon correspondence gives a matrix at every point of that radial segment. For real eigenvalues the two-state calculation already fills $[-1,1]$.

We can also construct a matrix for $t\lambda$ from one for $\lambda$. We want a row whose weighted average of the eigenvector coordinates is zero. Averaging against a **stationary probability row** $\pi^T$ does just this when $\lambda\ne1$. Its entries are nonnegative and sum to one, and stationarity means $\pi^TA=\pi^T$.

<details class="reader-proof-derivation">
<summary>Why a stationary probability row exists</summary>

Start from any probability row $\mu^T$ and average the first $k$ rows $\mu^T,\mu^TA,\ldots,\mu^TA^{k-1}$. The averages $\pi_k^T$ are probability rows, so a subsequence converges to a probability row $\pi^T$. Multiplying the sum by $A$ shifts it one term to the right. Only its ends survive subtraction:

$$
\pi_k^TA-\pi_k^T=\frac{\mu^TA^k-\mu^T}{k}\longrightarrow0.
$$

The numerator is the difference of two bounded probability rows. At the limit we get $\pi^TA=\pi^T$.

</details>

Indeed, $\pi^TAv$ equals $\pi^Tv$ by stationarity and equals $\lambda\pi^Tv$ by the eigenvector equation. Thus $\pi^Tv=0$ when $\lambda\ne1$. Give weight $t$ to the original row and weight $1-t$ to the stationary average in every row. The matrix

$$A_t=tA+(1-t)\mathbf1\pi^T$$

is stochastic and sends $v$ to $t\lambda v+(1-t)\mathbf1(\pi^Tv)=t\lambda v$. This gives **radial filling** for $n\ge2$. At order one the only point is $1$.

### A worked check

Take the three-cycle matrix $A=\begin{pmatrix}0&1&0\\0&0&1\\1&0&0\end{pmatrix}$ and $\omega=e^{2\pi i/3}$. With $v=(1,\omega,\omega^2)^T$, direct multiplication gives $Av=\omega v$. Its coordinate hull is an equilateral triangle; multiplication by $\omega$ permutes the vertices. For $0\le t\le1$, the matrix $tA+(1-t)\mathbf1\mathbf1^T/3$ realizes $t\omega$.

<div class="reader-checkpoint" data-retrieval-checkpoint>

**Row checkpoint.** Replace the first row of the four-point example by $(1/4,3/4,0,0)$. Which point does that row compute, and where does it lie? Does changing this row alone establish a new eigenpair for the whole matrix?

<details class="reader-checkpoint-hint">
<summary>Hint</summary>

Multiply that row by $(1,i,-1,-i)^T$. Check the multiplier from the second row as well.

</details>
<details class="reader-checkpoint-solution">
<summary>Solution</summary>

The row computes $(1+3i)/4$, strictly inside the side from $1$ to $i$ and closer to $i$. Its modulus is $\sqrt{10}/4<1$. This is a valid averaging instruction, but the unchanged other rows still give the old multiplier $(1+i)/2$. Thus the one altered row does not make this same column an eigenvector for a new common multiplier. The construction of an eigenpair requires compatible averaging instructions at every vertex.

</details>
</div>

At the outermost point of a ray, can even one vertex image lie inside the polygon? Topic II answers this question by changing the averaging rows.
