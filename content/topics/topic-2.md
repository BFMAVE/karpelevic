### An extremal eigenvalue has no room to move outward

Choose the outermost eigenvalue on a ray in $\Theta_n$ and call it $\zeta=\rho e^{i\theta_\zeta}$. We consider the nonreal case with $0<\rho<1$ and choose $0<\theta_\zeta<2\pi$. Draw a polygon $P$ for which $TP\subseteq P$, where $Tx=\zeta x$. If the whole image $TP$ lies in the interior of $P$, we can increase $\rho$ a little. There are finitely many vertices, and each image has a positive distance to the boundary. Moving all of them outward by less than the smallest of these distances still gives an invariant polygon. This contradicts the choice of $\zeta$.

Now suppose only **one** image lies inside. A second image may already touch a side. Enlarging both images about zero could carry the second one out of the polygon immediately. How can we use the room around the first image? We will turn that room into a choice of strictly positive coefficients in one matrix row. Subtracting a little from that row and normalising the matrix will move the eigenvalue outward.

Use $N$ for the least number of vertices that suffice for $\zeta$. Topic I identifies this number with the least order of a stochastic matrix having eigenvalue $\zeta$. A three-state realisation can be padded to order eight by adding five fixed states, so we keep $N$ distinct from the requested order $n$. Any realisation of $t\zeta$, $t>1$, with at most $N$ states could likewise be padded to $n$, contradicting our original choice. This property at order $N$ is **radial extremality**. Topic XI compares the eventual formulas at $N$ and $n$.

We will prove that in **every** invariant polygon with at most $N$ vertices each vertex image is on the boundary and every side meets $TP$. This lets us apply the theorem again after changing the polygon. Reflection replaces $\zeta$ by $\bar\zeta$ and its chosen argument by $2\pi-\theta_\zeta$.

### Lesson 1: watch deflation move an eigenvalue outward

Take three points at equal distances around the unit circle. If $\omega=e^{2\pi i/3}$, the column $v=(1,\omega,\omega^2)^T$ lists these points in order. Their sum is zero. Consider the matrix

$$
A=\frac16\begin{pmatrix}1&4&1\\1&1&4\\4&1&1\end{pmatrix},
\qquad \pi^T=(1/3,1/3,1/3).
$$

In the first row, each point receives weight $1/6$ and $\omega$ receives an extra $3/6$. The three equal contributions cancel, leaving $\omega/2$. In each successive row the extra weight moves to the next vertex. Thus the three averages are $\omega/2$, $\omega^2/2$ and $1/2$, giving $Av=(\omega/2)v$. The row sums are one, making $A$ stochastic. Its column sums are also one, which gives $\pi^TA=\pi^T$ for the uniform row $\pi^T$ above.

How much of each average can we take away while keeping this eigenvector equation? The uniform average of our three points is zero. Take one quarter of that average out of every row, subtracting $1/12$ from each entry of $A$. This gives

$$
B=A-\tfrac14\mathbf1\pi^T
=\frac1{12}\begin{pmatrix}1&7&1\\1&1&7\\7&1&1\end{pmatrix}.
$$

The smallest entry of $A$ was $1/6$, so all entries of $B$ are still positive. Each row has lost a total weight of $1/4$ and now sums to $r=3/4$. On the column $v$ the subtraction has taken away $\tfrac14\mathbf1(\pi^Tv)=0$. Hence $Bv=(\omega/2)v$. Dividing each entry by $r$ restores the row sums and gives

$$
\widehat A=\frac{B}{r}
=\frac19\begin{pmatrix}1&7&1\\1&1&7\\7&1&1\end{pmatrix},
\qquad \widehat Av=\frac{2\omega}{3}v.
$$

Division by $3/4$ changes the multiplier from $\omega/2$ to $2\omega/3$. Its argument stays the same and its modulus increases from $1/2$ to $2/3$. The example therefore gives two points on the same ray, with the first strictly inside the second radius. We could make the same subtraction everywhere because all three rows were positive. If only one row is positive, we can still subtract from that row, but now the row sums differ. The next construction first makes those sums equal. If it succeeded at the outermost point of a ray, it would produce a point farther out.

### The positive eigenvector needed for the general normalization

A nonnegative matrix is **irreducible** if its directed graph has a path from every vertex to every other, drawing an arrow $i\to j$ when $a_{ij}>0$. For an irreducible stochastic matrix, a stationary probability row $\pi^T$ has strictly positive entries. The spectral radius of a matrix is the largest absolute value of its eigenvalues. An irreducible nonnegative matrix has positive left and right eigenvectors for that radius. In particular, once we find a strictly positive left eigenvector with eigenvalue $r$, we also have a strictly positive column with eigenvalue $r$. These are the precise Perron–Frobenius facts used below. They extend familiar eigenvector theory to matrices with nonnegative entries.

<details class="reader-proof-derivation">
<summary>Derive the positive eigenvectors from stationary averages</summary>

A stationary probability row of an irreducible stochastic matrix is positive. If $\pi_j=0$, then $0=\sum_i\pi_i a_{ij}$ forces $\pi_i=0$ for each predecessor $i$ with $a_{ij}>0$. Every vertex has a path to $j$, so all entries of $\pi$ would vanish. This contradicts $\sum_i\pi_i=1$.

Below we have an irreducible nonnegative matrix $B$ and a strictly positive row with $\pi^TB=r\pi^T$, $r>0$. Write $P_\pi=\operatorname{diag}(\pi_1,\ldots,\pi_N)$ and put $Q=r^{-1}P_\pi^{-1}B^TP_\pi$. Since $B^T\pi=r\pi$, we get $Q\mathbf1=\mathbf1$. The new matrix is stochastic and irreducible. Topic I gives it a stationary row $\mu^T$, which is positive by the argument above. From $Q^T\mu=\mu$ it follows that $h=P_\pi^{-1}\mu$ satisfies $Bh=rh$ with $h>0$. Also $B$ is similar to $rQ^T$, whose spectral radius is $r$ by the unit-disk bound.

</details>

Why can we apply this fact to a matrix obtained from our polygon? In a graph that is not irreducible there is a vertex from which some other vertex cannot be reached. Let $I$ be the set of vertices reachable from the starting vertex, including the starting vertex itself. No arrow leaves $I$. The rows indexed by $I$ therefore give a smaller stochastic matrix, and the eigenvector equation on these rows uses only the coordinates in $I$. Every such coordinate is a vertex of $P$, hence is nonzero because zero lies in the interior. We would have realised $\zeta$ with fewer than $N$ states. Thus every matrix obtained from this polygon is irreducible.

### Lower one eigenvalue and preserve the others

Let row $i$ be positive. We want to remove a small multiple of the stationary row $\pi^T$ from this one row. Left multiplication of $\pi^T$ by the coordinate column $e_i$ places it in row $i$ and puts zeros in all other rows. Choose $0<\varepsilon<1$ small enough that each difference $a_{ij}-\varepsilon\pi_j$ stays positive. Write

$$B=A-\varepsilon e_i\pi^T,\qquad r=1-\varepsilon\pi_i\in(0,1).$$

Multiplying on the left by $\pi^T$ gives $\pi^TB=\pi^TA-\varepsilon(\pi^Te_i)\pi^T=(1-\varepsilon\pi_i)\pi^T$. The subtraction kept every arrow of the graph, so $B$ is irreducible. The positive left eigenvector $\pi^T$ now identifies $r$ as its spectral radius. The Perron–Frobenius theorem gives a column $h$ with positive entries and $Bh=rh$.

To see which part of the spectrum changes, take a column whose stationary mean is zero. On $H=\{x:\pi^Tx=0\}$ we have $Bx=Ax$, and $\pi^TAx=\pi^Tx=0$ places the image back in $H$. Any column splits into its constant mean times $\mathbf1$ and a column in $H$, since $\pi^T\mathbf1=1$. In a basis of $H$ followed by $\mathbf1$, both matrices are block triangular. Their common block on $H$ gives the same eigenvalues with the same multiplicities. The last diagonal entry records the mean after applying the matrix to $\mathbf1$. For $A$ it is $1$, and for $B$ it is $\pi^TB\mathbf1=r$.

For the one eigenvalue we are following, we can see the cancellation directly. Write $Av=\zeta v$. Then
$$
\pi^Tv=\pi^TAv=\zeta\pi^Tv.
$$
Since $\zeta\ne1$, we have $\pi^Tv=0$, so $Bv=Av=\zeta v$. The positive row provided room for the subtraction, and the stationary mean ensured that our chosen eigenvector survived it.

How should we restore the row sums? If we divide row $j$ by its own sum $s_j$, then $(Bv)_j=\zeta v_j$ becomes $\zeta v_j/s_j$. After the subtraction the row sums are $1-\varepsilon$ in row $i$ and $1$ elsewhere. These divisions would give our nonzero vertex coordinates two different multipliers.

Instead measure coordinate $j$ in units of $h_j$. An entry $B_{jk}$ then becomes $B_{jk}h_k/h_j$, and the sum in row $j$ is $(Bh)_j/h_j=r$ for every $j$. We can now divide by a *single* number. Put $D=\operatorname{diag}(h_1,\ldots,h_N)$ and

$$C=r^{-1}D^{-1}BD.$$

Similarity by $D$ preserves the eigenvalues of $B$. Dividing by $r$ then multiplies each eigenvalue by $1/r$. Also $C\mathbf1=r^{-1}D^{-1}Bh=\mathbf1$, so $C$ is stochastic. In particular it realizes $\zeta/r$, on the same ray and strictly farther from zero. Extremality forbids a positive row.

::: {.reader-checkpoint #deflation-two-operations}
**Check the two operations.** Let $Bv=\zeta v$ and $Bh=rh$ with $h>0$ and $0<r<1$. In the new coordinates the column $h$ becomes $\mathbf1$. What does that tell us about the row sums of $D^{-1}BD$? Find the column that represents $v$ in these same coordinates. At which step does its multiplier change to $\zeta/r$?

<details>
<summary>Hint</summary>

Multiply $D^{-1}BD$ by $\mathbf1$, starting with $D\mathbf1=h$. For the other eigenvector, write $v=Dy$ and calculate $D^{-1}BDy$.

</details>
<details>
<summary>Solution</summary>

The product with $\mathbf1$ is $D^{-1}Bh=D^{-1}(rh)=r\mathbf1$, so each row sums to $r$. The same change of coordinates sends $v$ to $D^{-1}v$. Multiplying this column by the new matrix gives

$$
D^{-1}BD(D^{-1}v)=D^{-1}Bv=\zeta D^{-1}v.
$$

The multiplier in the last display is still $\zeta$. Dividing the matrix by $r$ now gives $C\mathbf1=\mathbf1$ and $C(D^{-1}v)=(\zeta/r)D^{-1}v$. All the row and column factors used in these operations are positive, so $C$ is nonnegative as well as stochastic. In the example with three equal row sums we can take $h=\mathbf1$. Then $D=I$ and division by $r$ alone does the work.

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

Let $x=\zeta v_i$ lie inside the polygon with vertices $v_1,\ldots,v_N$. We want a representation of $x$ using every vertex. Their average $g=(v_1+\cdots+v_N)/N$ already has that property. Starting at $g$, draw the line to $x$ and continue a little beyond $x$ to a point $w$. Since $x$ is interior, we can keep $w$ in the polygon. Thus $x$ lies on the segment from $g$ to $w$. In symbols, choose a small $s>0$ with $s<1$ and set
$$
w=\frac{x-sg}{1-s}\in P,\qquad x=sg+(1-s)w.
$$
If $g=x$, the same formula gives $w=x$. Express $w$ as any average of the vertices. Each vertex already receives weight $s/N$ from $sg$, so every coefficient in the combined average is positive. This gives the forbidden positive row, and proves that every vertex image lies on the boundary.

We can check the construction on the diamond with vertices $1,i,-1,-i$. Look for weights giving the interior point $(1+i)/4$. Its real part is the weight at $1$ minus the weight at $-1$, and its imaginary part is the corresponding difference at $i$ and $-i$. One choice is

$$
\frac38(1)+\frac38(i)+\frac18(-1)+\frac18(-i).
$$

The four weights add to one and both differences are $1/4$. Now move to the midpoint $(1+i)/2$ on the side $x+y=1$. The quantity $x+y$ equals $1$ at the two endpoints and $-1$ at the other two vertices. An average can reach $1$ only by giving all its weight to the endpoints. Thus an interior image permits the positive row used above, whereas the midpoint forces two entries of its row to vanish.

### Lesson 2: exchange points for side inequalities

We know where the images of vertices land. To use that conclusion for a side, we would like to represent the side by a point of another polygon. Identify $\mathbb C$ with $\mathbb R^2$ and use the dot product $\langle a,x\rangle$. If $u$ is an outward normal to a side, its supporting line has equation $\langle u,x\rangle=c$ with $c>0$, since zero lies strictly on the inner side of the line. Dividing $u$ by $c$ gives a point $a$ for which the side equation is $\langle a,x\rangle=1$ and all of $P$ satisfies $\langle a,x\rangle\le1$.

Collect all points $a$ whose inequality holds throughout $P$. We call the set of these points the **polar polygon** of $P$ and write

$$P^\circ=\{a:\langle a,x\rangle\le1\text{ for every }x\in P\}.$$

Which map on the polar corresponds to $T$? To check the inequality at the image $Tx$, write $\langle a,Tx\rangle=\langle T^*a,x\rangle$. In real coordinates $T^*$ is the transpose matrix. Multiplication by $\zeta$ rotates and scales, so its transpose rotates through the opposite angle and uses the same scale. Thus $T^*$ multiplies by $\bar\zeta$. We will use the following correspondences.

| Original polygon $P$ | Polar polygon $P^\circ$ |
| --- | --- |
| Choose a vertex $x$. | It gives one condition on $a$, namely $\langle a,x\rangle\le1$. |
| Choose a side with outward normal $a_i$ scaled as above. | The two endpoints determine the vertex $a_i$ by equality in their conditions. |
| Ask whether $Tx$ lies on this side. | Check whether $T^*a_i$ satisfies $\langle T^*a_i,x\rangle=1$. |

For the diamond $P=\{|x|+|y|\le1\}$, the four vertices impose $-1\le a_x\le1$ and $-1\le a_y\le1$. The polar is the square $[-1,1]^2$. Take its corner $a=(1,1)$, which represents the side $x+y=1$ of the diamond. For $Tz=((1+i)/2)z$, multiplication by $(1-i)/2$ sends $a$ to $(1,0)$. This polar point satisfies the inequality for the original vertex $x=(1,0)$ with equality. Indeed $Tx=(1/2,1/2)$ lies on the chosen side. We have read the same contact in the two pictures.

<!-- reader-figure:early -->

It remains to justify the use of a vertex for each side. Start with the polar inequalities. A linear functional at any convex combination of vertices gives the same combination of its values there. Checking the vertices therefore suffices:

$$
P^\circ=\{a:\langle a,v_j\rangle\le1\quad(1\le j\le N)\}.
$$

This intersection of half-planes contains a neighbourhood of zero, since each of its finitely many inequalities is strict at zero. It is also bounded. Choose $r>0$ such that $P$ contains the closed disk of radius $r$ about zero. For each $a\ne0$ in the polar, the disk contains $x=ra/|a|$. Its inequality reads $r|a|\le1$, which bounds the distance of every polar point from zero.

Consider the side with endpoints $v_{i-1},v_i$ and normal $a_i$ scaled to give $\langle a_i,v_{i-1}\rangle=\langle a_i,v_i\rangle=1$. The endpoints are linearly independent as vectors from zero. Otherwise the side line would pass through zero, an interior point. Hence these two equations determine $a_i$ uniquely. Could $a_i$ lie strictly between two other polar points? The dot product with either endpoint would then be an average of two numbers at most one. Its value is one, so both numbers would equal one. Both polar points would solve the same two equations and would coincide with $a_i$. Thus $a_i$ is a vertex.

Conversely, a polar vertex has two linearly independent **active inequalities**, meaning inequalities attaining equality there. If the active endpoint vectors spanned at most one line, a small motion perpendicular to that line in both directions would keep all active equalities, and the finitely many strict inequalities would remain strict. The point would lie inside a polar segment and would not be a vertex. Two independent active original vertices lie on the supporting line $\langle a,x\rangle=1$; in a polygon they are the endpoints of one side. This identifies the polar vertex as its normal. The correspondence is therefore exact, and $P^\circ$ has $N$ vertices.

In the drawing, follow the endpoints $(1,0)$ and $(0,1)$ of the marked side into the polar picture. Their conditions become $a_x\le1$ and $a_y\le1$. The two boundary lines meet at $(1,1)$, so their intersection records precisely the side joining the two original endpoints.

<!-- reader-figure:early-extra -->

Finally, take any $a\in P^\circ$ and any $x\in P$. Since $Tx$ stays in $P$, we have $\langle T^*a,x\rangle=\langle a,Tx\rangle\le1$. This holds for *every* $x$ in $P$, which is exactly the condition for $T^*a$ to belong to $P^\circ$. Thus the polar is invariant under $T^*$.

The polar construction has changed the multiplier to $\bar\zeta$. A smaller matrix realising $\bar\zeta$ would also realise $\zeta$, since the matrix is real. The conjugate of any point farther out on this new ray would lie farther out on the original ray. Thus $\bar\zeta$ has the same least order $N$ and the same maximality property. Apply the vertex-contact result to $P^\circ$: for each polar vertex $a$, $T^*a$ is on its boundary. A polar point satisfying all $N$ vertex inequalities strictly has a whole small neighbourhood satisfying them, so it is interior. Thus at least one original vertex $x$ satisfies $\langle T^*a,x\rangle=1$. Equivalently $Tx$ lies on the original side $\langle a,Tx\rangle=1$. Every side meets $TP$.

### Boundary averages use one face

A supporting functional takes its maximum on a boundary face. If a convex combination with all weights positive attains that maximum, each point given positive weight attains it. A single smaller value would lower the average. Thus a boundary average lies in one common face. In a polygon, it uses either one vertex or the two endpoints of one side. A **relative-interior contact** means an image strictly between those endpoints.

At an interior point we can assign a little weight to every vertex. On a side all positive weight goes to its endpoints. In the next chapter we count how often both endpoints receive a positive weight.
