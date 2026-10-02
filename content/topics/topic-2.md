### An extremal eigenvalue has no room to move outward

Fix a nonreal number $\zeta=\rho e^{i\theta_\zeta}$ with $0<\rho<1$, choosing its argument representative $0<\theta_\zeta<2\pi$. We study it under two assumptions. First, $N$ is the least number of vertices of a polygon invariant under $Tz=\zeta z$. By Topic I, $N$ is also its least realizing stochastic-matrix order. Second, no $t\zeta$ with $t>1$ has an invariant polygon with at most $N$ vertices. This is **radial extremality**: increasing the modulus without changing the angle costs more vertices. If we later conjugate $\zeta$, its chosen argument becomes $2\pi-\theta_\zeta$.

These assumptions hold when we choose a maximal eigenvalue on a ray in $\Theta_n$ and let $N\le n$ be its least realizing order. Indeed, an outward realization of order at most $N$ would also be one of order $n$ after padding. We do not assume that $N=n$. That distinction is why the independent order comparison in Topic XI is necessary.

For example, any three-state realization can be enlarged to eight states by appending a five-state identity block. Those extra states preserve its eigenvalue; they do not force its geometric proof to use eight vertices. Our reduction therefore starts at the least order $N$. Later we obtain a radius formula at that order and must compare it independently with the formula for the requested order $n$, before identifying either formula with the full boundary.

Every invariant polygon under consideration has exactly $N$ vertices. The goal is stronger than finding a single well-chosen polygon: **for every such polygon, each vertex image lies on the boundary and every side meets the image polygon**. We will need this universal statement after changing vertices in Topics IV and VI.

If the entire image polygon were strictly inside $P$, increasing $\rho$ a little would preserve containment by continuity. But that argument does not settle a mixed configuration: perhaps one vertex image is interior while all the others already touch the boundary. Those other contacts prevent a direct outward expansion of the same polygon. Deflation changes the realising matrix, and with it the polygon, so that even one interior vertex image becomes impossible at an extremal eigenvalue.

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

The chosen eigenvalue has moved from radius $1/2$ to radius $2/3$ at the same angle. This is an exact nonextremal example. All its rows are positive, allowing a uniform subtraction and an especially simple normalization. The general proof below needs only one positive row; then the row sums differ, and a positive diagonal change of coordinates restores them before division by $r$. At a radially extremal eigenvalue, that outward movement is forbidden.

### The positive eigenvector needed for the general normalization

A nonnegative matrix is **irreducible** if its directed graph has a path from every vertex to every other, drawing an arrow $i\to j$ when $a_{ij}>0$. For an irreducible stochastic matrix, a stationary probability row $\pi^T$ has strictly positive entries. More generally, an irreducible nonnegative matrix has a positive right eigenvector for its spectral radius and a positive left eigenvector; a positive left eigenvector identifies that radius. These are the precise Perron–Frobenius facts used below. They extend familiar eigenvector theory to matrices with nonnegative entries.

These particular facts can also be obtained from Topic I's averaging argument. A stationary probability row of an irreducible stochastic matrix is positive: if its $j$th entry were zero, stationarity and nonnegative entries would force every incoming predecessor with a positive arrow to have zero stationary mass too. Connectivity propagates this to all states, contradicting total mass one.

For the nonnegative irreducible matrix $B$ used below, we explicitly know $\pi^TB=r\pi^T$ with $\pi>0$ and $r>0$. Put $P_\pi=\operatorname{diag}(\pi_1,\ldots,\pi_N)$. The matrix $Q=r^{-1}P_\pi^{-1}B^TP_\pi$ is irreducible and row-stochastic, since $Q\mathbf1=\mathbf1$. Its stationary probability column $\mu>0$ satisfies $Q^T\mu=\mu$. Therefore $h=P_\pi^{-1}\mu>0$ satisfies $Bh=rh$. This proves the exact positive-eigenvector statement our deflation needs using only stationary averages and matrix algebra. Also $B$ is similar to $rQ^T$, so its spectral radius is $r$ by the unit-disk bound from Topic I.

Any stochastic realization from an invariant $N$-gon is irreducible. If not, its graph has a nonempty proper set $I$ with no arrows leaving it. The submatrix on $I$ is stochastic and the corresponding coordinates of the polygon eigenvector still realize $\zeta$. Those coordinates are nonzero because zero is interior to the polygon. This would realize $\zeta$ with fewer than $N$ states.

The graph language has a concrete matrix meaning: a set with no arrows leaving it has zero entries in columns outside the set. Its own rows still sum to one, so those rows can run independently as a smaller stochastic matrix. Least order excludes precisely this way of hiding the chosen eigenvalue in a smaller closed subsystem.

### Lower one eigenvalue and preserve the others

Suppose one row of a realizing matrix $A$ is strictly positive. Let $e_i$ be the column with a $1$ in position $i$ and zeros elsewhere. Choose $\varepsilon>0$ small enough to keep that row positive, and set

$$B=A-\varepsilon e_i\pi^T,\qquad r=1-\varepsilon\pi_i\in(0,1).$$

Then $\pi^TB=r\pi^T$. Since the pattern of positive entries is unchanged, $B$ remains irreducible. Perron–Frobenius gives a positive column $h$ with $Bh=rh$.

Why are the other eigenvalues preserved? The subspace $H=\{x:\pi^Tx=0\}$ is invariant under both matrices, and $Bx=Ax$ on $H$. The space splits as $H\oplus\operatorname{span}\{\mathbf1\}$. In a basis adapted to this splitting, $A$ and $B$ have the same block on $H$, with final diagonal entries $1$ and $r$. Their other eigenvalues, including algebraic multiplicities, agree.

The subtraction acts only on vectors whose stationary weighted average is nonzero. Every eigenvector of an eigenvalue other than one has weighted average zero, since $\pi^TAv=\pi^Tv=\zeta\pi^Tv$. On those vectors the rank-one term vanishes. The block argument adds what an eigenvector calculation alone would miss: it also preserves algebraic multiplicities and covers matrices that cannot be diagonalised.

Put $D=\operatorname{diag}(h_1,\ldots,h_N)$ and

$$C=r^{-1}D^{-1}BD.$$

Similarity by $D$ preserves eigenvalues, while division by $r$ enlarges the non-Perron ones. Also $C\mathbf1=r^{-1}D^{-1}Bh=\mathbf1$, so $C$ is stochastic. In particular it realizes $\zeta/r$, on the same ray and strictly farther from zero. Extremality forbids a positive row.

### An interior image would give exactly that forbidden row

Let the polygon vertices be $v_1,\ldots,v_N$. If $\zeta v_i$ lies in the interior, choose $0<\eta<1/N$ small enough that

$$w=\frac{\zeta v_i-\eta\sum_jv_j}{1-N\eta}\in P.$$

This is possible because $w\to\zeta v_i$ as $\eta\to0$. Express $w$ as a convex combination of the vertices. Rearranging expresses $\zeta v_i$ with weight at least $\eta$ on every vertex. That makes row $i$ of the realizing matrix strictly positive, giving the contradiction just proved. Every vertex image must therefore lie on the boundary.

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

Conversely, a polar vertex must have two linearly independent **active inequalities**, meaning inequalities attaining equality there. If the active endpoint vectors spanned at most one line, a small motion perpendicular to that line in both directions would keep all active equalities, and the finitely many strict inequalities would remain strict. The point would lie inside a polar segment and would not be a vertex. Two independent active original vertices lie on the supporting line $\langle a,x\rangle=1$; in a polygon they are the endpoints of one side. This identifies the polar vertex as its normal. The correspondence is therefore exact, and $P^\circ$ has $N$ vertices.

For the diamond from Topic I, the side endpoints $(1,0)$ and $(0,1)$ give the equations $a_x=1$ and $a_y=1$. They meet at the polar vertex $a=(1,1)$. The next figure displays the original side and these two active polar inequalities in their respective coordinate planes.

<!-- reader-figure:early-extra -->

Invariance of $P$ gives $T^*P^\circ\subseteq P^\circ$: for $a\in P^\circ$ and $x\in P$, the adjoint identity reads $\langle T^*a,x\rangle=\langle a,Tx\rangle\le1$, because $Tx\in P$.

Conjugation preserves the two extremality assumptions. Apply the vertex-contact result to $P^\circ$: for each polar vertex $a$, $T^*a$ is on its boundary. A polar point satisfying all $N$ vertex inequalities strictly has a whole small neighbourhood satisfying them, so it is interior. Thus at least one original vertex $x$ satisfies $\langle T^*a,x\rangle=1$. Equivalently $Tx$ lies on the original side $\langle a,Tx\rangle=1$. Every side meets $TP$.

### Boundary averages use one face

A supporting functional takes its maximum on a boundary face. If a convex combination with all weights positive attains that maximum, every point used must also attain it: averaging smaller values could not give the maximum. Thus a boundary average lies in one common face. In a polygon, it uses either one vertex or the two endpoints of one side. A **relative-interior contact** means an image strictly between those endpoints.

Check why an interior image is different: it can be expressed with positive weights on every vertex after the small adjustment above. A side-interior point cannot do this, because vertices away from that side satisfy its supporting inequality strictly. This distinction drives both deflation and the contact arithmetic.

We now know that every vertex image touches the boundary. Topic III counts which images touch vertices and which lie inside sides, then chooses a polygon whose contacts can be organized without losing extremality.
