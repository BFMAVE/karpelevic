### From an averaging matrix to a picture

Put the numbers $1$ and $i$ at two positions. A row that gives them equal weight produces $(1+i)/2$, halfway along the segment joining them. Now put a complex number $v_j$ at each of $n$ positions. Row $i$ of a matrix $A$ gives the weights with which we average them to obtain $(Av)_i$. We call the matrix **row-stochastic** when every weight is nonnegative and the weights in each row add to one.

An eigenvector $v$ gives us a particularly simple way of doing all these averages. We can multiply each old value by the same complex number $\lambda$ and obtain its new value. Which multipliers can occur if we have only $n$ positions? The set of all such individual eigenvalues is $\Theta_n$. We can choose a different matrix for each $\lambda$.

Throughout this construction $v$ is a column of values. A row of probabilities evolves by multiplication on the other side, $\mu^T\mapsto\mu^TA$. We will use both conventions when we fill the region along a ray.

How far from zero can $\lambda$ be? Choose a coordinate $v_i$ farthest from zero. Row $i$ takes a weighted average of coordinates, each at distance at most $|v_i|$. Applying the triangle inequality to this row gives

$$|\lambda|\,|v_i|=\left|\sum_j a_{ij}v_j\right|\le\sum_j a_{ij}|v_j|\le |v_i|.$$

Our chosen coordinate is nonzero because $v$ is an eigenvector. Dividing the inequality by $|v_i|$ gives $|\lambda|\le1$. We can reach the point $1$ on the unit circle. Every entry of $A\mathbf1$ is a weighted average of ones, so $A\mathbf1=\mathbf1$. Which other points in the disk can we reach?

Mark $v_1,\ldots,v_n$ in the complex plane. What points could a row send us to if we were free to choose its weights? A row can produce any sum $\sum_j c_jv_j$ with $c_j\ge0$ and $\sum_j c_j=1$. Such a sum is a **convex combination** of the coordinates. The set of all these sums is their **convex hull**,

$$P=\operatorname{conv}\{v_1,\ldots,v_n\}.$$

Take a finite set of at least two distinct points in the complex plane. In this walkthrough we call its convex hull a [**polygon**]{#polygon}. If the points do not all lie on a line, the polygon includes the whole region inside its sides. If all the points lie on one line, the polygon is the segment between the two outermost points. You can [move the weights](/prerequisites/#average-heading) to trace the segment from $1$ to $i$. Why exclude a single point? If we could choose $P=\{0\}$, then $\lambda P\subseteq P$ would hold for every complex number, even for $\lambda=2$, which our matrix bound has already ruled out.

The eigenvector equation puts each image $\lambda v_i$ in $P$. The hull of these images is $\lambda P$, the original hull multiplied by $\lambda$. Since $P$ contains every average of points in $P$, it contains that image hull too. Multiplying by $\lambda=\rho e^{i\theta}$ rotates every point through $\theta$ and scales its distance from zero by $\rho$. The matrix equation has given us the containment $\lambda P\subseteq P$.

A point of $P$ is a **vertex** if we cannot draw a segment in $P$ that extends past that point in both directions. In a triangle the three corners have this property. Every vertex of the hull comes from one of our coordinates, although a coordinate can also lie on a side, lie inside, or repeat an earlier coordinate. There are therefore at most $n$ vertices.

We can already settle order two. Write the two averaging rows as $(1-a,a)$ and $(b,1-b)$, with $0\le a,b\le1$. Subtract their outputs on a column $x$:

$$
(Ax)_1-(Ax)_2=(1-a-b)(x_1-x_2).
$$

On constant columns the multiplier is one. On an eigenvector with unequal entries, dividing by $x_1-x_2$ gives the real multiplier $1-a-b$. Indeed the characteristic polynomial is $(z-1)(z-(1-a-b))$. Taking $a=b$ from zero to one gives every value in $[-1,1]$. At $a=b=1/2$ the entries become equal in one step. At $a=b=1$ the two entries exchange places. For three or more positions a new possibility appears. The hull of the values can enclose area, and the common multiplier can rotate it through an angle other than a half-turn.

![Apply the two rows to the column $(0,1)^T$. The circle is at $a$ and the diamond at $1-a$ when $a=b$. Their signed separation passes through zero when the two rows agree.](/figures/bachelor-foundations-two-rows.svg)

### An exact four-point picture

Place the four numbers $1,i,-1,-i$ around the unit circle in this order and collect them in the column $v$. The matrix $C$ reads the next entry in the list, starting again at $1$ after $-i$. Thus $Cv=(i,-1,-i,1)^T=iv$. To average an entry with its neighbour, give equal weight to leaving the list in place and shifting it. With $I$ the identity matrix, this gives

$$
A=\begin{pmatrix}
1/2&1/2&0&0\\
0&1/2&1/2&0\\
0&0&1/2&1/2\\
1/2&0&0&1/2
\end{pmatrix}.
$$

For the entry at $1$ we get

$$
(Av)_1=\tfrac12(1)+\tfrac12(i)=\frac{1+i}{2}.
$$

The point $(1+i)/2$ is halfway from $1$ to $i$. The next row averages $i$ and $-1$. Its output is $i$ times the first midpoint, since both inputs have been multiplied by $i$. The same quarter turn takes us from each row to the next. All four midpoints are therefore obtained from their starting vertices by the same multiplier. In matrix form we have

$$
Av=\frac{1+i}{2}v=\lambda v,\qquad
\lambda=\frac{1+i}{2}=\frac1{\sqrt2}e^{i\pi/4}.
$$

How much contraction did this *particular* diamond require? The image of $1$ at radius $r$ and angle $\pi/4$ has coordinates $(r/\sqrt2,r/\sqrt2)$. The line through $1$ and $i$ has equation $x+y=1$, so containment at that vertex requires $\sqrt2\,r\le1$. The other vertices give the same inequality by quarter-turn symmetry. Thus $r=1/\sqrt2$ is exactly the largest radius for this diamond at this angle. To determine the largest radius in $\Theta_4$, we still have to allow the polygon itself to vary.

Join the four midpoints in the drawing. The smaller square is $\lambda P$. Each stochastic row could choose any point on its side. The eigenvector equation ties the four choices to one rotation and one scale.

<!-- reader-figure:early -->

### Why the translation works in both directions

Now start with the picture. We have a polygon $P$ with vertices $w_1,\ldots,w_k$, and we know that $\lambda P\subseteq P$. Where can we get the entries of a matrix? The point $\lambda w_i$ lies in the hull of the vertices, so we can choose weights $a_{ij}$ for which

$$\lambda w_i=\sum_{j=1}^k a_{ij}w_j,\qquad a_{ij}\ge0,\quad\sum_j a_{ij}=1.$$

Use the weights for $\lambda w_i$ as row $i$ of $A$. The row sums are one, and reading the displayed equations down the rows gives $Aw=\lambda w$ for $w=(w_1,\ldots,w_k)^T$. At least one vertex differs from zero, so $w$ is an eigenvector. If we need $n>k$ states, add $n-k$ states that each stay where they are. The enlarged matrix has diagonal blocks $A$ and $I_{n-k}$, and extending $w$ by zeros gives the same eigenvalue.

Together the two constructions give the following criterion for every $n\ge2$.

$$\lambda\in\Theta_n\quad\Longleftrightarrow\quad\text{there is a polygon }P\text{ with at most }n\text{ vertices and }\lambda P\subseteq P.$$

One case in the construction from a matrix deserves a check. If every coordinate of $v$ is the same number $c$, then $c\ne0$, and each row returns $c$. Hence $\lambda c=c$ and $\lambda=1$. For this eigenvalue the segment $[0,1]$ supplies the polygon in the criterion. At order one the only stochastic matrix is $(1)$, so $\Theta_1=\{1\}$.

In a drawing we only have to check the $k$ points $\lambda w_j$. To see why, choose any $x\in P$ and write it as a convex combination $x=\sum_j c_jw_j$. Its image $\lambda x=\sum_j c_j(\lambda w_j)$ uses the same weights. As soon as the vertex images lie in $P$, every such average lies there as well. This lets us check containment again after moving a vertex.

To describe the boundary, we will rotate about zero and measure distance along a ray. We first need to know where zero lies in an invariant polygon.

### Why zero is inside a nonreal invariant polygon

Consider a nonreal eigenvalue $\lambda$. Multiplication by $\lambda$ turns a segment through an angle different from a multiple of $\pi$. Its image then lies on a line with a different direction and cannot fit in the original segment. Our polygon therefore has interior. Where is zero in relation to its sides?

Choose $w\in P$. By containment, $w,\lambda w,\lambda^2w,\ldots$ all belong to $P$. If $|\lambda|<1$, their distances from zero tend to zero. The polygon is closed, so it contains their limit. If $|\lambda|=1$, average the first $k$ points instead. Their average is $w(1-\lambda^k)/(k(1-\lambda))$. Its numerator stays bounded and $1-\lambda\ne0$, so it also tends to zero. Each average belongs to $P$ by convexity.

Could zero be on a side or at a corner? There would then be a line through zero with all of $P$ in one closed half-plane. Follow the directions of any $w\ne0$ in $P$. If the rotation repeats after $m$ steps, the $m$ unit vectors in these directions sum to zero by the geometric sum formula. Take components perpendicular to the line, choosing the positive direction into the half-plane. These components are all nonnegative and their sum is zero. Each one would have to vanish, putting all the directions on the line. Yet two successive directions form an angle different from a multiple of $\pi$. If the rotation never repeats, its directions enter every open arc, including one on the other side of the line. In both cases we get a contradiction. Thus zero lies in the interior, and we can order the vertices by their angles around it.

<details class="reader-proof-derivation">
<summary>Why an irrational rotation visits every open arc</summary>

Write the rotation angle as $2\pi\alpha$ with $\alpha$ irrational. Divide $[0,1)$ into $M$ equal intervals, and place the $M+1$ fractional parts of $0,\alpha,\ldots,M\alpha$ in them. The fractional part of $x$ is $x$ minus its integer part. One interval contains at least two points. Their difference gives a positive integer $r$ with $r\alpha=k+d$, where $k$ is an integer and $0<|d|<1/M$. Nonzero $d$ follows from irrationality. The positive iterates with indices $0,r,2r,\ldots$ have fractional parts equal to those of $0,d,2d,\ldots$. The first $\lfloor1/|d|\rfloor+1$ such points step around the circle in one direction with every remaining gap at most $|d|$; here $\lfloor a\rfloor$ means the greatest integer at most $a$. Choosing $M$ arbitrarily large makes these points arbitrarily close to every direction. All the indices used here are nonnegative, as required for the forward orbit.

</details>

### The boundary is a problem on each ray

Fix a ray on which a nonzero eigenvalue is possible, and let $r$ be the supremum of the possible radii there. The unit-disk bound gives $r\le1$. Choose realising matrices $A_k$ with eigenvalues $\lambda_k$ on this ray and $|\lambda_k|\to r$. Their entries are bounded by one, so a subsequence converges entry by entry. The limit $A$ is still stochastic. Along the same subsequence $\lambda_k\to\lambda$ with $|\lambda|=r$, and continuity of the determinant gives $\det(\lambda I-A)=0$. We can therefore choose an **outermost eigenvalue** on this ray. The same argument for any convergent sequence of attainable eigenvalues shows that $\Theta_n$ is closed, and hence compact.

Two operations tell us where else to look for eigenvalues. Taking complex conjugates gives $A\overline v=\overline\lambda\,\overline v$, since the entries of $A$ are real. It is therefore enough to draw the upper half of the region and reflect it. Adding a state that stays fixed preserves the old eigenvalue, so $\Theta_n\subseteq\Theta_{n+1}$.

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

Try radial filling on a triangle. Write $\omega=e^{2\pi i/3}$ and take $v=(1,\omega,\omega^2)^T$. The cycle matrix $A=\begin{pmatrix}0&1&0\\0&0&1\\1&0&0\end{pmatrix}$ gives $Av=(\omega,\omega^2,1)^T=\omega v$. Its action on the triangle is a turn through $2\pi/3$. Now $1+\omega+\omega^2=0$, so a row giving weight $1/3$ to each vertex sends it to the centre. Giving each row weight $t$ on the cycle instruction and $1-t$ on this average gives $tA+(1-t)\mathbf1\mathbf1^T/3$. Its eigenvalue on $v$ is $t\omega$ for every $0\le t\le1$.

<div class="reader-checkpoint" data-retrieval-checkpoint>

**Row checkpoint.** In the square example, give the first row weights $(1/4,3/4,0,0)$ and leave the other three rows alone. Mark the new image of $1$ on the square. Is there still one multiplier that gives all four images of the original column?

<details class="reader-checkpoint-hint">
<summary>Hint</summary>

Multiply that row by $(1,i,-1,-i)^T$. Check the multiplier from the second row as well.

</details>
<details class="reader-checkpoint-solution">
<summary>Solution</summary>

The row computes $(1+3i)/4$, strictly inside the side from $1$ to $i$ and closer to $i$. Its modulus is $\sqrt{10}/4<1$. This is a valid averaging instruction, but the unchanged other rows still give the old multiplier $(1+i)/2$. Thus the one altered row does not make this same column an eigenvector for a new common multiplier. The construction of an eigenpair requires compatible averaging instructions at every vertex.

</details>
</div>

Take a nonreal outermost point on a ray and choose an invariant polygon with as few vertices as possible. Can even one vertex land strictly inside it? Topic II answers this question by changing the averaging rows.
