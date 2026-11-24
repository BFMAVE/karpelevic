### An extremal eigenvalue has no room to move outward

Choose the outermost eigenvalue on a ray in $\Theta_n$ and call it $\zeta=\rho e^{i\theta_\zeta}$. We consider the nonreal case with $0<\rho<1$ and choose $0<\theta_\zeta<2\pi$. Draw a polygon $P$ for which $TP\subseteq P$, where $Tx=\zeta x$. If the whole image $TP$ lies in the interior of $P$, we can increase $\rho$ a little. There are finitely many vertices, and each image has a positive distance to the boundary. Moving all of them outward by less than the smallest of these distances still gives an invariant polygon. This contradicts the choice of $\zeta$.

Now suppose only **one** image lies inside. A second image may already touch a side. Enlarging both images about zero could carry the second one out of the polygon immediately. How can we use the room around the first image? We will turn that room into a choice of strictly positive coefficients in one matrix row. Subtracting a little from that row and normalising the matrix will move the eigenvalue outward.

Use $N$ for the least number of vertices that suffice for $\zeta$. Topic I identifies this number with the least order of a stochastic matrix having eigenvalue $\zeta$. A three-state realisation can be padded to order eight by adding five fixed states, so we keep $N$ distinct from the requested order $n$. Any realisation of $t\zeta$, $t>1$, with at most $N$ states could likewise be padded to $n$, contradicting our original choice. This property at order $N$ is **radial extremality**. Topic XI compares the eventual formulas at $N$ and $n$.

We will prove that in **every** invariant polygon with at most $N$ vertices each vertex image is on the boundary and every side meets $TP$. This lets us apply the theorem again after changing the polygon. Reflection replaces $\zeta$ by $\bar\zeta$ and its chosen argument by $2\pi-\theta_\zeta$.

### Lesson 1: watch deflation move an eigenvalue outward

The subtraction and normalization can be seen before introducing their general machinery. Let $\omega=e^{2\pi i/3}$ and $v=(1,\omega,\omega^2)^T$, so $1+\omega+\omega^2=0$. Take

$$
A=\frac16\begin{pmatrix}1&4&1\\1&1&4\\4&1&1\end{pmatrix},
\qquad \pi^T=(1/3,1/3,1/3).
$$

Every row and column sums to one, so $A$ is stochastic and $\pi^TA=\pi^T$. Its first row gives $(1+4\omega+\omega^2)/6=\omega/2$. Cyclically, the other rows give $Av=(\omega/2)v$.

Subtract the same small reset row from all three rows:

$$
B=A-\tfrac14\mathbf1\pi^T
=\frac1{12}\begin{pmatrix}1&7&1\\1&1&7\\7&1&1\end{pmatrix}.
$$

Each entry remains positive, and each row now sums to $r=3/4$. Because $\pi^Tv=0$, the subtracted rank-one matrix annihilates $v$, so $Bv=(\omega/2)v$. Dividing by the new row sum gives the stochastic matrix

$$
\widehat A=\frac{B}{r}
=\frac19\begin{pmatrix}1&7&1\\1&1&7\\7&1&1\end{pmatrix},
\qquad \widehat Av=\frac{2\omega}{3}v.
$$

The chosen eigenvalue has moved from radius $1/2$ to radius $2/3$ at the same angle. This is an exact nonextremal example. All its rows are positive, allowing a uniform subtraction and an especially simple normalization. The general proof below needs only one positive row; then the row sums differ. A positive diagonal change of coordinates makes every row sum equal to $r$, and division by $r$ restores the stochastic row sum one. At a radially extremal eigenvalue, that outward movement is forbidden.

### The positive eigenvector needed for the general normalization

A nonnegative matrix is **irreducible** if its directed graph has a path from every vertex to every other, drawing an arrow $i\to j$ when $a_{ij}>0$. For an irreducible stochastic matrix, a stationary probability row $\pi^T$ has strictly positive entries. More generally, an irreducible nonnegative matrix has a positive right eigenvector for its spectral radius and a positive left eigenvector; a positive left eigenvector identifies that radius. These are the precise Perron–Frobenius facts used below. They extend familiar eigenvector theory to matrices with nonnegative entries.

<details class="reader-proof-derivation">
<summary>Derive the positive eigenvectors from stationary averages</summary>

A stationary probability row of an irreducible stochastic matrix is positive. If $\pi_j=0$, then $0=\sum_i\pi_i a_{ij}$ forces $\pi_i=0$ for each predecessor $i$ with $a_{ij}>0$. Every vertex has a path to $j$, so all entries of $\pi$ would vanish. This contradicts $\sum_i\pi_i=1$.

Below we have an irreducible nonnegative matrix $B$ and a strictly positive row with $\pi^TB=r\pi^T$, $r>0$. Write $P_\pi=\operatorname{diag}(\pi_1,\ldots,\pi_N)$ and put $Q=r^{-1}P_\pi^{-1}B^TP_\pi$. Since $B^T\pi=r\pi$, we get $Q\mathbf1=\mathbf1$. The new matrix is stochastic and irreducible. Topic I gives it a stationary row $\mu^T$, which is positive by the argument above. From $Q^T\mu=\mu$ it follows that $h=P_\pi^{-1}\mu$ satisfies $Bh=rh$ with $h>0$. Also $B$ is similar to $rQ^T$, whose spectral radius is $r$ by the unit-disk bound.

</details>

Any stochastic realization from an invariant $N$-gon is irreducible. If not, its graph has a nonempty proper set $I$ with no arrows leaving it. The submatrix on $I$ is stochastic and the corresponding coordinates of the polygon eigenvector still realize $\zeta$. Those coordinates are nonzero because zero is interior to the polygon. This would realize $\zeta$ with fewer than $N$ states.

### Lower one eigenvalue and preserve the others

Suppose one row of a realizing matrix $A$ is strictly positive. Let $e_i$ be the column with a $1$ in position $i$ and zeros elsewhere. Choose $\varepsilon>0$ small enough to keep that row positive, and set

$$B=A-\varepsilon e_i\pi^T,\qquad r=1-\varepsilon\pi_i\in(0,1).$$

Then $\pi^TB=r\pi^T$. Since the pattern of positive entries is unchanged, $B$ remains irreducible. Perron–Frobenius gives a positive column $h$ with $Bh=rh$.

Why are the other eigenvalues preserved? The subspace $H=\{x:\pi^Tx=0\}$ is invariant under both matrices, and $Bx=Ax$ on $H$. The space splits as $H\oplus\operatorname{span}\{\mathbf1\}$. In a basis adapted to this splitting, $A$ and $B$ have the same block on $H$, with final diagonal entries $1$ and $r$. Their other eigenvalues, including algebraic multiplicities, agree.

For the one eigenvalue we are following, we can see the cancellation directly. Write $Av=\zeta v$. Then
$$
\pi^Tv=\pi^TAv=\zeta\pi^Tv.
$$
Since $\zeta\ne1$, we have $\pi^Tv=0$, so $Bv=Av=\zeta v$. The positive row provided room for the subtraction, and the stationary mean ensured that our chosen eigenvector survived it.

Put $D=\operatorname{diag}(h_1,\ldots,h_N)$ and

$$C=r^{-1}D^{-1}BD.$$

Similarity by $D$ preserves the eigenvalues of $B$. Dividing by $r$ then multiplies each eigenvalue by $1/r$. Also $C\mathbf1=r^{-1}D^{-1}Bh=\mathbf1$, so $C$ is stochastic. In particular it realizes $\zeta/r$, on the same ray and strictly farther from zero. Extremality forbids a positive row.

::: {.reader-checkpoint #deflation-two-operations}
**Distinguish the operations.** Suppose $Bv=\zeta v$ and $Bh=rh$ with $h>0$ and $0<r<1$. A student says: “The diagonal similarity $D^{-1}BD$ is already stochastic, and its chosen eigenvalue is $\zeta/r$.” Identify both errors. What are its row sums and chosen eigenvector, and what changes when we next divide by $r$?

<details>
<summary>Hint</summary>

Compute $D^{-1}BD\mathbf1$ using $D\mathbf1=h$. Then apply $D^{-1}BD$ to $D^{-1}v$. Similarity changes coordinates; scalar multiplication changes eigenvalues.

</details>
<details>
<summary>Solution</summary>

The row sums of $D^{-1}BD$ are $r$, because $D^{-1}Bh=r\mathbf1$. Its eigenvector is $D^{-1}v$ and its eigenvalue is still $\zeta$, since

$$
D^{-1}BD(D^{-1}v)=D^{-1}Bv=\zeta D^{-1}v.
$$

Thus the similarity makes the row sums equal, but does not yet make them one or enlarge the eigenvalue. Dividing the whole matrix by $r$ does both: $C\mathbf1=\mathbf1$ and $C(D^{-1}v)=(\zeta/r)D^{-1}v$. The nonnegative entries remain nonnegative in each operation because $D$ has positive diagonal entries and $r>0$. In the numerical example above, $h=\mathbf1$ and $D$ is the identity, so only the scalar division is visible.

</details>
:::

<details class="reader-proof-derivation">
<summary>Calculate a normalisation when the row sums differ</summary>

Return to the three-state matrix in Lesson 1. Subtract $\pi^T/4$ from the **first row only**. In units of $1/12$ the new matrix is

$$
12B=\begin{pmatrix}1&7&1\\2&2&8\\8&2&2\end{pmatrix}.
$$

Its row sums, after division by twelve, are $3/4,1,1$. Its column sums are all $11/12$, in agreement with $r=1-(1/4)(1/3)$. The vector $h=(65,82,76)^T$ satisfies $12Bh=11h$. For example, the first row gives $65+7\cdot82+76=715=11\cdot65$. Thus the first row of $D^{-1}BD$ sums to $715/(12\cdot65)=11/12$, and the other two sums equal $11/12$ by the same eigenvector identity. The choice of $D$ has removed the discrepancy between the row sums. Dividing by $11/12$ now carries the eigenvalue $\omega/2$ to $6\omega/11$.

</details>

### An interior image would give exactly that forbidden row

Let the polygon vertices be $v_1,\ldots,v_N$. If $\zeta v_i$ lies in the interior, choose $0<\eta<1/N$ small enough that

$$w=\frac{\zeta v_i-\eta\sum_jv_j}{1-N\eta}\in P.$$

This is possible because $w\to\zeta v_i$ as $\eta\to0$. Express $w$ as a convex combination of the vertices. Rearranging expresses $\zeta v_i$ with weight at least $\eta$ on every vertex. That makes row $i$ of the realizing matrix strictly positive, giving the contradiction just proved. Every vertex image therefore lies on the boundary.

For a numerical picture, use the diamond with vertices $1,i,-1,-i$ from Topic I. The interior point $(1+i)/4$ is

$$
\frac38(1)+\frac38(i)+\frac18(-1)+\frac18(-i).
$$

Every vertex has positive weight. The boundary midpoint $(1+i)/2$ cannot have such a representation: the side inequality $x+y\le1$ is strict at $-1$ and $-i$, so giving either of them positive weight would lower the average below one. The distinction is geometric, rather than a special choice of matrix entries.

### Lesson 2: exchange points for side inequalities

To transfer the vertex conclusion to sides, encode a side by a linear inequality. Identify the complex plane with $\mathbb R^2$ and write $\langle a,x\rangle$ for the usual dot product. Because zero is interior, each supporting side line can be normalized to $\langle a,x\rangle=1$, with the polygon in $\langle a,x\rangle\le1$.

The **polar polygon** is

$$P^\circ=\{a:\langle a,x\rangle\le1\text{ for every }x\in P\}.$$

The **adjoint** $T^*$ is the transpose map in real coordinates; it satisfies $\langle T^*a,x\rangle=\langle a,Tx\rangle$. For multiplication by $\zeta$, it is multiplication by $\bar\zeta$. The dictionary we will prove and use is:

| Original polygon $P$ | Polar polygon $P^\circ$ |
| --- | --- |
| A vertex $x$ to be tested. | An inequality $\langle a,x\rangle\le1$ imposed on polar points $a$. |
| A side with normalized outward normal $a_i$. | A vertex $a_i$, determined by its two endpoint equalities. |
| The original image $Tx$ meets that side. | The polar image $T^*a_i$ has equality in the inequality associated with $x$. |

For the same diamond $P=\{|x|+|y|\le1\}$, the polar is the square $P^\circ=[-1,1]^2$. A polar vertex $a=(1,1)$ represents the original side $x+y=1$. With the contact map $Tz=((1+i)/2)z$, its adjoint sends $a$ to $(1,0)$, a point on the polar boundary. Choosing the original vertex $x=(1,0)$ gives $\langle T^*a,x\rangle=1$, and its image $Tx=(1/2,1/2)$ lies on $x+y=1$. This exact model shows how a polar vertex contact certifies an original side contact; the general proof obtains that contact from extremality.

<!-- reader-figure:early -->

We need to prove that this new polygon has exactly one vertex for each original side. First, checking its inequalities at the original vertices is enough, by convexity:

$$
P^\circ=\{a:\langle a,v_j\rangle\le1\quad(1\le j\le N)\}.
$$

It is bounded because $P$ contains a disk of some radius $r>0$ about zero: for nonzero $a$, testing the point $r a/|a|$ gives $|a|\le1/r$, and $a=0$ already satisfies that bound. It has interior because all its inequalities are strict for $a$ sufficiently close to zero. It is therefore a genuine polygon described by finitely many half-planes.

Let $a_i$ be the normal defining the original side from $v_{i-1}$ to $v_i$, so that $\langle a_i,v_{i-1}\rangle=\langle a_i,v_i\rangle=1$. The two endpoint vectors are linearly independent: their line does not pass through zero, since zero is interior to $P$. These two linear equations determine $a_i$ uniquely. If $a_i$ were a nontrivial average of two polar points, both points would have to satisfy both equalities; otherwise their average would be strictly below one. Uniqueness forces them both to be $a_i$. Thus $a_i$ is a polar vertex.

Conversely, a polar vertex has two linearly independent **active inequalities**, meaning inequalities attaining equality there. If the active endpoint vectors spanned at most one line, a small motion perpendicular to that line in both directions would keep all active equalities, and the finitely many strict inequalities would remain strict. The point would lie inside a polar segment and would not be a vertex. Two independent active original vertices lie on the supporting line $\langle a,x\rangle=1$; in a polygon they are the endpoints of one side. This identifies the polar vertex as its normal. The correspondence is therefore exact, and $P^\circ$ has $N$ vertices.

For the diamond from Topic I, the side endpoints $(1,0)$ and $(0,1)$ give the equations $a_x=1$ and $a_y=1$. They meet at the polar vertex $a=(1,1)$. The next figure displays the original side and these two active polar inequalities in their respective coordinate planes.

<!-- reader-figure:early-extra -->

Invariance of $P$ gives $T^*P^\circ\subseteq P^\circ$: for $a\in P^\circ$ and $x\in P$, the adjoint identity reads $\langle T^*a,x\rangle=\langle a,Tx\rangle\le1$, because $Tx\in P$.

Conjugation preserves the two extremality assumptions. Apply the vertex-contact result to $P^\circ$: for each polar vertex $a$, $T^*a$ is on its boundary. A polar point satisfying all $N$ vertex inequalities strictly has a whole small neighbourhood satisfying them, so it is interior. Thus at least one original vertex $x$ satisfies $\langle T^*a,x\rangle=1$. Equivalently $Tx$ lies on the original side $\langle a,Tx\rangle=1$. Every side meets $TP$.

### Boundary averages use one face

A supporting functional takes its maximum on a boundary face. If a convex combination with all weights positive attains that maximum, each point given positive weight attains it. A single smaller value would lower the average. Thus a boundary average lies in one common face. In a polygon, it uses either one vertex or the two endpoints of one side. A **relative-interior contact** means an image strictly between those endpoints.

At an interior point we can assign a little weight to every vertex. On a side all positive weight goes to its endpoints. In the next chapter we count how often both endpoints receive a positive weight.
