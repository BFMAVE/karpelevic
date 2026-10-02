### From an averaging matrix to a picture

The question is simple to ask. Fix a positive integer $n$. Which complex numbers can be eigenvalues of real $n\times n$ matrices whose entries are nonnegative and whose rows add to one? Such a matrix is **row-stochastic**. We write $\Theta_n$ for the set of individual eigenvalues that occur. We are not prescribing a whole list of eigenvalues at once.

One row, such as $(1/2,1/2,0,0)$, asks us to replace four available values by the average of the first two. A matrix applies one such instruction at every coordinate. The eigenvector condition asks for a pattern of complex values that all these instructions reproduce after one common multiplication by $\lambda$. The coordinates may have different arguments, so this common multiplication rotates the whole pattern. Geometry lets us see which rotations an averaging operation can reproduce.

Here $Av$ averages a **column of values**. Under the row-stochastic convention, a probability distribution instead evolves as a **row** $\mu^T\mapsto\mu^TA$. The eigenvector picture uses the first interpretation; stationary probabilities later use the second.

If $Av=\lambda v$, choose a coordinate $v_i$ of largest absolute value. The triangle inequality gives

$$|\lambda|\,|v_i|=\left|\sum_j a_{ij}v_j\right|\le\sum_j a_{ij}|v_j|\le |v_i|.$$

Since $v\ne0$, this proves $|\lambda|\le1$. Also $A\mathbf1=\mathbf1$, where $\mathbf1$ is the column of ones, so $1$ is always an eigenvalue. The interesting question is where the other eigenvalues can lie inside the unit disk.

View each complex coordinate $v_j$ as a point of the plane. A **convex combination** is a weighted average $\sum_j c_jv_j$ with $c_j\ge0$ and $\sum_jc_j=1$. The **convex hull** of the coordinates is the set of all these averages:

$$P=\operatorname{conv}\{v_1,\ldots,v_n\}.$$

Before proceeding, [move the weights in the background interaction](/prerequisites/#average-heading). Keep the two points fixed and vary their nonnegative weights while their sum stays one. The average travels along their joining segment. A stochastic row makes exactly this choice among its available coordinates.

The eigenvector equation says that $\lambda v_i$ is a convex combination of the original points. Consequently $\lambda P\subseteq P$. Multiplying by $\lambda=\rho e^{i\theta}$ rotates every point through $\theta$ and scales its distance from zero by $\rho$. The matrix equation has become a rotation and contraction fitting inside a polygon.

A **vertex** is an extreme point: it cannot be expressed as a nontrivial average of other points of the hull. Some coordinates may repeat or lie inside the hull, so the polygon has at most $n$ vertices. A finite convex hull is called a **polytope**; in the plane it can also be a segment or a single point.

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

The hull is the diamond $P=\{x+iy:|x|+|y|\le1\}$. Its vertex $1$ goes to $(1+i)/2$, the midpoint of the side from $1$ to $i$. The other three vertices go to the other three side midpoints. A rotation of $45$ degrees at unit scale would move $1$ outside the diamond; contraction by $1/\sqrt2$ brings its image to the side midpoint. The eigenvector calculation and the polygon containment describe the same four averaging instructions. We use this as a model of the correspondence; maximality will require a separate argument.

<!-- reader-figure:early -->

### Why the translation works in both directions

Suppose conversely that a non-singleton polytope $P$ has vertices $w_1,\ldots,w_k$ and $\lambda P\subseteq P$. For each vertex, choose coefficients expressing its image as an average:

$$\lambda w_i=\sum_{j=1}^k a_{ij}w_j,\qquad a_{ij}\ge0,\quad\sum_j a_{ij}=1.$$

These coefficients are the rows of a stochastic matrix, and the nonzero column $(w_1,\ldots,w_k)^T$ is an eigenvector for $\lambda$. If $k<n$, append an identity block. This leaves the old eigenvalues present and gives order $n$.

For $n\ge2$ we therefore have the exact correspondence

$$\lambda\in\Theta_n\quad\Longleftrightarrow\quad\lambda P\subseteq P\text{ for a non-singleton polytope with at most }n\text{ vertices}.$$

There is one small detail in the forward direction. If all eigenvector coordinates are the same nonzero number, the equation forces $\lambda=1$. We then use any nontrivial segment, which multiplication by $1$ preserves. The one-state case is handled separately: $\Theta_1=\{1\}$.

Why check only vertex images? Any point of $P$ is an average $x=\sum_jc_jw_j$. Linearity gives $\lambda x=\sum_jc_j\lambda w_j$. If each vertex image belongs to $P$, convexity puts this average in $P$ too. Conversely, invariance of the whole polygon certainly includes the vertices. This observation will let later deformations verify finitely many contacts instead of every point of a two-dimensional region.

The main bridge is now complete: stochastic eigenvectors and invariant finite hulls describe the same objects. The rest of this topic supplies three tools used later: zero lies inside a nonreal invariant polygon, maximal radii are attained, and attainable rays are filled inward. On a first pass through the main ideas, retain those statements; the complete-proof route includes their justifications below.

### Why zero is inside a nonreal invariant polygon

For nonreal $\lambda$, a nontrivial segment cannot contain its rotated image: the two segments have different directions. Thus the invariant hull is a genuine two-dimensional polygon.

When $0<|\lambda|<1$, every orbit $w,\lambda w,\lambda^2w,\ldots$ converges to zero. Closedness puts zero in $P$. For $|\lambda|=1$ and $\lambda\ne1$, the averages of the first $k$ iterates converge to zero by the finite geometric-series formula, so convexity again puts zero in $P$.

Zero cannot lie on the boundary. A supporting line through zero would put the polygon in one closed half-plane. The directions of a nonzero orbit cannot remain in that half-plane. A finite nonreal rotation orbit goes around zero and its direction vectors sum to zero and are not collinear; an infinite rotation orbit is dense in the circle. Either possibility contradicts that half-plane restriction. This is why later arguments may order vertices by their angles about zero.

The density fact has an elementary proof. Write the rotation angle as $2\pi\alpha$ with $\alpha$ irrational. Divide $[0,1)$ into $M$ equal intervals, and place the $M+1$ fractional parts of $0,\alpha,\ldots,M\alpha$ in them. The fractional part of $x$ is $x$ minus its integer part. Two points must share an interval. Their difference gives a positive integer $r$ with $r\alpha=k+d$, where $k$ is an integer and $0<|d|<1/M$. Nonzero $d$ follows from irrationality. The positive iterates with indices $0,r,2r,\ldots$ have fractional parts equal to those of $0,d,2d,\ldots$. The first $\lfloor1/|d|\rfloor+1$ such points step around the circle in one direction with every remaining gap at most $|d|$; here $\lfloor a\rfloor$ means the greatest integer at most $a$. Choosing $M$ arbitrarily large makes these points arbitrarily close to every direction. Their indices are all nonnegative, so this proves density of the forward orbit we actually use.

### The boundary is a problem on each ray

The set of stochastic matrices of fixed order is closed and bounded in a finite-dimensional space, hence compact. If matrices $A_k$ converge to $A$ and their eigenvalues $\lambda_k$ converge to $\lambda$, then $\det(\lambda_k I-A_k)=0$ passes to the limit. Thus $\Theta_n$ is compact. A largest feasible radius on a ray is attained whenever that ray has nonzero feasible points. The completed theorem will establish those radii in every direction for $n\ge3$.

Real matrices give conjugate eigenvalues, so reflection in the real axis preserves $\Theta_n$. Appending an identity block gives $\Theta_n\subseteq\Theta_{n+1}$.

We also need **radial filling**: for $n\ge2$, an attainable $\lambda$ brings the whole segment from zero to $\lambda$. Here is a matrix proof. A stationary probability row $\pi^T$ satisfies $\pi^TA=\pi^T$, $\pi_j\ge0$, and $\sum_j\pi_j=1$. Such a row exists: average the rows $\mu^T,\mu^TA,\ldots,\mu^TA^{k-1}$ from any initial probability row, take a convergent subsequence in the probability simplex, and use that the difference between the average and its image tends to zero.

The probability simplex is simply the set of nonnegative rows whose entries sum to one. It is closed and bounded, so those averages have a convergent subsequence. If their average is $\pi_k^T$, the cancellation is explicit:

$$
\pi_k^TA-\pi_k^T=\frac{\mu^TA^k-\mu^T}{k}\longrightarrow0.
$$

Both rows in the numerator are probability rows, hence bounded. The limiting row is therefore stationary. Operationally, $\pi_j$ records a distribution of mass that one averaging step leaves unchanged.

If $Av=\lambda v$ and $\lambda\ne1$, then $(\lambda-1)\pi^Tv=0$, so $\pi^Tv=0$. For $0\le t\le1$ the matrix

$$A_t=tA+(1-t)\mathbf1\pi^T$$

is stochastic and satisfies $A_tv=t\lambda v$. For $\lambda=1$, the stochastic matrix with rows $(1,0)$ and $(1-t,t)$ has eigenvalues $1,t$. Padding gives every order $n\ge2$. This also explains why radial filling must not be asserted for $n=1$.

### A worked check

Take the three-cycle matrix $A=\begin{pmatrix}0&1&0\\0&0&1\\1&0&0\end{pmatrix}$ and $\omega=e^{2\pi i/3}$. With $v=(1,\omega,\omega^2)^T$, direct multiplication gives $Av=\omega v$. Its coordinate hull is an equilateral triangle; multiplication by $\omega$ permutes the vertices. For $0\le t\le1$, the matrix $tA+(1-t)\mathbf1\mathbf1^T/3$ realizes $t\omega$.

<div class="reader-checkpoint" data-retrieval-checkpoint>

**Row checkpoint.** Replace the first row of the four-point example by $(1/4,3/4,0,0)$. Which point does that row compute, and where does it lie? Does changing this row alone establish a new eigenpair for the whole matrix?

<details class="reader-checkpoint-hint">
<summary>Hint</summary>

Multiply that row by $(1,i,-1,-i)^T$. The eigenvector equation must use the same multiplier at every row, not just the first.

</details>
<details class="reader-checkpoint-solution">
<summary>Solution</summary>

The row computes $(1+3i)/4$, strictly inside the side from $1$ to $i$ and closer to $i$. Its modulus is $\sqrt{10}/4<1$. This is a valid averaging instruction, but the unchanged other rows still give the old multiplier $(1+i)/2$. Thus the one altered row does not make this same column an eigenvector for a new common multiplier. To build a matrix eigenpair from geometry, we must specify compatible averaging instructions at every vertex.

</details>
</div>

Topic II asks what must happen when this rotation and contraction has the largest feasible radius for its angle. The answer is boundary contact at every vertex image and at every side.
