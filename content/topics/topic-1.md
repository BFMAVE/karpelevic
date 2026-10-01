### From an averaging matrix to a picture

The question is simple to ask. Fix a positive integer $n$. Which complex numbers can be eigenvalues of real $n\times n$ matrices whose entries are nonnegative and whose rows add to one? Such a matrix is **row-stochastic**. We write $\Theta_n$ for the set of individual eigenvalues that occur. We are not prescribing a whole list of eigenvalues at once.

If $Av=\lambda v$, choose a coordinate $v_i$ of largest absolute value. The triangle inequality gives

$$|\lambda|\,|v_i|=\left|\sum_j a_{ij}v_j\right|\le\sum_j a_{ij}|v_j|\le |v_i|.$$

Since $v\ne0$, this proves $|\lambda|\le1$. Also $A\mathbf1=\mathbf1$, where $\mathbf1$ is the column of ones, so $1$ is always an eigenvalue. The interesting question is where the other eigenvalues can lie inside the unit disk.

View each complex coordinate $v_j$ as a point of the plane. A **convex combination** is a weighted average $\sum_j c_jv_j$ with $c_j\ge0$ and $\sum_jc_j=1$. The **convex hull** of the coordinates is the set of all these averages:

$$P=\operatorname{conv}\{v_1,\ldots,v_n\}.$$

The eigenvector equation says that $\lambda v_i$ is a convex combination of the original points. Consequently $\lambda P\subseteq P$. Multiplying by $\lambda=\rho e^{i\theta}$ rotates every point through $\theta$ and scales its distance from zero by $\rho$. The matrix equation has become a rotation and contraction fitting inside a polygon.

A **vertex** is an extreme point: it cannot be expressed as a nontrivial average of other points of the hull. Some coordinates may repeat or lie inside the hull, so the polygon has at most $n$ vertices. A finite convex hull is called a **polytope**; in the plane it can also be a segment or a single point.

### Why the translation works in both directions

Suppose conversely that a non-singleton polytope $P$ has vertices $w_1,\ldots,w_k$ and $\lambda P\subseteq P$. For each vertex, choose coefficients expressing its image as an average:

$$\lambda w_i=\sum_{j=1}^k a_{ij}w_j,\qquad a_{ij}\ge0,\quad\sum_j a_{ij}=1.$$

These coefficients are the rows of a stochastic matrix, and the nonzero column $(w_1,\ldots,w_k)^T$ is an eigenvector for $\lambda$. If $k<n$, append an identity block. This leaves the old eigenvalues present and gives order $n$.

For $n\ge2$ we therefore have the exact correspondence

$$\lambda\in\Theta_n\quad\Longleftrightarrow\quad\lambda P\subseteq P\text{ for a non-singleton polytope with at most }n\text{ vertices}.$$

There is one small detail in the forward direction. If all eigenvector coordinates are the same nonzero number, the equation forces $\lambda=1$. We then use any nontrivial segment, which multiplication by $1$ preserves. The one-state case is handled separately: $\Theta_1=\{1\}$.

### Why zero is inside a nonreal invariant polygon

For nonreal $\lambda$, a nontrivial segment cannot contain its rotated image: the two segments have different directions. Thus the invariant hull is a genuine two-dimensional polygon.

When $0<|\lambda|<1$, every orbit $w,\lambda w,\lambda^2w,\ldots$ converges to zero. Closedness puts zero in $P$. For $|\lambda|=1$ and $\lambda\ne1$, the averages of the first $k$ iterates converge to zero by the finite geometric-series formula, so convexity again puts zero in $P$.

Zero cannot lie on the boundary. A supporting line through zero would put the polygon in one closed half-plane. The directions of a nonzero orbit cannot remain in that half-plane. A finite nonreal rotation orbit goes around zero and its direction vectors sum to zero and are not collinear; an infinite rotation orbit is dense in the circle. Either possibility contradicts that half-plane restriction. This is why later arguments may order vertices by their angles about zero.

### The boundary is a problem on each ray

The set of stochastic matrices of fixed order is closed and bounded in a finite-dimensional space, hence compact. If matrices $A_k$ converge to $A$ and their eigenvalues $\lambda_k$ converge to $\lambda$, then $\det(\lambda_k I-A_k)=0$ passes to the limit. Thus $\Theta_n$ is compact. A largest feasible radius on a ray is attained whenever that ray has nonzero feasible points. The completed theorem will establish those radii in every direction for $n\ge3$.

Real matrices give conjugate eigenvalues, so reflection in the real axis preserves $\Theta_n$. Appending an identity block gives $\Theta_n\subseteq\Theta_{n+1}$.

We also need **radial filling**: for $n\ge2$, an attainable $\lambda$ brings the whole segment from zero to $\lambda$. Here is a matrix proof. A stationary probability row $\pi^T$ satisfies $\pi^TA=\pi^T$, $\pi_j\ge0$, and $\sum_j\pi_j=1$. Such a row exists: average the rows $\mu^T,\mu^TA,\ldots,\mu^TA^{k-1}$ from any initial probability row, take a convergent subsequence in the probability simplex, and use that the difference between the average and its image tends to zero.

If $Av=\lambda v$ and $\lambda\ne1$, then $(\lambda-1)\pi^Tv=0$, so $\pi^Tv=0$. For $0\le t\le1$ the matrix

$$A_t=tA+(1-t)\mathbf1\pi^T$$

is stochastic and satisfies $A_tv=t\lambda v$. For $\lambda=1$, the stochastic matrix with rows $(1,0)$ and $(1-t,t)$ has eigenvalues $1,t$. Padding gives every order $n\ge2$. This also explains why radial filling must not be asserted for $n=1$.

### A worked check

Take the three-cycle matrix $A=\begin{pmatrix}0&1&0\\0&0&1\\1&0&0\end{pmatrix}$ and $\omega=e^{2\pi i/3}$. With $v=(1,\omega,\omega^2)^T$, direct multiplication gives $Av=\omega v$. Its coordinate hull is an equilateral triangle; multiplication by $\omega$ permutes the vertices. For $0\le t\le1$, the matrix $tA+(1-t)\mathbf1\mathbf1^T/3$ realizes $t\omega$.

Check the reverse translation: if a vertex image is the midpoint of two adjacent vertices, which matrix row represents it? The answer puts $1/2$ in those two columns and zero elsewhere. Rows are geometric averaging instructions.

Topic II asks what must happen when this rotation and contraction has the largest feasible radius for its angle. The answer is boundary contact at every vertex image and at every side.
