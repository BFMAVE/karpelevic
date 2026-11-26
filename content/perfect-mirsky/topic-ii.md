### Make a polygon from one cycle {#cycle-polygons}

Write $D_N$ for the set of complex numbers that are eigenvalues of at least one real doubly stochastic matrix of order $N$. An order is the number of rows, which here is also the number of columns. We can choose a different matrix for each point of $D_N$.

A **$j$th root of unity** is a complex number whose $j$th power equals one. Write $\zeta_j=e^{2\pi i/j}$, where $e^{i\theta}=\cos\theta+i\sin\theta$. The roots are $1,\zeta_j,\ldots,\zeta_j^{j-1}$. Their convex hull is $\Pi_j$. We include $\Pi_1=\{1\}$ and the segment $\Pi_2=[-1,1]$ in this notation. For $j\ge3$, $\Pi_j$ is the regular $j$-gon with one corner at $1$.

Let $C$ send a column $(v_1,\ldots,v_j)^{\mathsf T}$ to $(v_2,\ldots,v_j,v_1)^{\mathsf T}$. This is a **cyclic permutation** of the labels. A permutation matrix has a single $1$ in every row and every column, with zero everywhere else. On the column $v=(1,\zeta_j,\ldots,\zeta_j^{j-1})^{\mathsf T}$, the matrix $C^k$ acts as multiplication by $\zeta_j^k$ for $0\le k<j$. Choose nonnegative weights $p_0,\ldots,p_{j-1}$ summing to one. Then $A=\sum_k p_kC^k$ is doubly stochastic and has eigenvalue $\sum_k p_k\zeta_j^k$. Thus every point of $\Pi_j$ occurs. To reach order $N\ge j$, append zeros to the eigenvector and add $N-j$ fixed labels using an identity block.

Try the multiplier $3i/4$ from Topic I. On the four corner marks $C$ acts by $i$ and $C^3$ by $-i$. The weights on $i$ and $-i$ have to add to one and have difference $3/4$. They are $7/8$ and $1/8$. Choose $A=\tfrac78 C+\tfrac18 C^3$ and add two fixed labels at zero to realize the multiplier at order six.

### The statement at large order {#theorem}

Denote the union of the cycle polygons by $U_N$. The construction gives
$$
 U_N:=\bigcup_{j=1}^{N}\Pi_j\ \subseteq\ D_N.
$$
Perfect and Mirsky asked whether every eigenvalue comes from this union. To belong to $U_N$, a point has to lie in at least one of the displayed polygons. The polygons extend in different directions. For example $i\in\Pi_4$ and $e^{2\pi i/3}\in\Pi_3$, and each point lies outside the other polygon. The union retains both corners.

Verbeken and Ginis prove $D_N=U_N$ for every integer $N\ge450$ using computer-certified inequalities. The proof in this reader follows their pencil-and-paper argument. [Theorem 6 of the arXiv preprint](https://arxiv.org/html/2611.30905v2#Thmtheorem6)

> **Pencil-and-paper theorem.** For every integer $N\ge10^{30}$, every eigenvalue of a real doubly stochastic matrix of order $N$ belongs to $U_N$. Consequently $D_N=U_N$ in this range.

The argument rules out an eigenvalue outside $U_N$. The size condition comes from fitting many thin annuli near the unit circle and estimating the chance that a path leaves one. [Theorem 5](https://arxiv.org/html/2611.30905v2#Thmtheorem5) · [The cutoff calculation in Topic VIII](/perfect-mirsky/topic-viii/#cutoff)

### A point that escapes at order five {#order-five}

The converse fails in order five. Mashreghi and Rivard take the average of two permutation matrices. It has a nonreal eigenvalue near $-0.279293+0.763516i$ that lies outside all five polygons. The dashed unit circle sets the scale in the full view. The enlargement uses the same scale on both axes. [Mashreghi and Rivard (2007)](https://doi.org/10.1080/03081080600899296) · [Appendix B.1](https://arxiv.org/html/2611.30905v2#A2.SS1)

<!-- mirsky-figure:polygons -->

At order five, the imaginary part of the point exceeds the upper side of each polygon at that real coordinate. Add the hexagon at order six and the same point lies inside. The preprint establishes that the square, pentagon and hexagon give all of $D_6$. To prove equality at other orders, we need a restriction that applies to every doubly stochastic matrix. [Appendix B.3](https://arxiv.org/html/2611.30905v2#A2.SS3)

::: {.reader-checkpoint}
**Why take a union?** Which step of the cycle construction would let us take a convex combination of points within one $\Pi_j$? Why does that step give no such claim for a point in $\Pi_3$ combined with a point in $\Pi_4$?

<details><summary>Check your answer</summary>

The powers of a single $C$ act by scalars on the same eigenvector. Convex combinations preserve that eigenvector equation. The two constructions for different cycle lengths need not share the eigenvector, even after both are enlarged to the same order.

</details>
:::

<!-- proof-details -->

### Check the matrix for the exceptional point

The two permutations on labels $1$ through $5$ take the lists of source labels $(2,3,1,5,4)$ and $(2,3,4,1,5)$, respectively. Their average is
$$
 A=\frac12
 \begin{pmatrix}
 0&2&0&0&0\\
 0&0&2&0&0\\
 1&0&0&1&0\\
 1&0&0&0&1\\
 0&0&0&1&1
 \end{pmatrix}.
$$
The characteristic polynomial, the determinant of $zI-A$, is $(z-1)(4z^4+2z^3+z^2-z-1)/4$. The factor $z-1$ comes from the constant eigenvector. For the nonreal root $z=x+iy$ with $y>0$, dividing the imaginary part of the quartic by $y$ gives
$$
 y^2=\frac{16x^3+6x^2+2x-1}{16x+2}.
$$
Write $s$ for the right-hand side. The real part of the quartic becomes
$$
4(x^4-6x^2s+s^2)+2(x^3-3xs)+x^2-s-x-1.
$$
Substituting the two rational endpoints $x=-.279293$ and $x=-.279292$ gives a negative and a positive value, respectively. The denominator in $s$ stays away from zero on the interval, and the positive square root of $s$ lies between $.7634$ and $.7637$. Continuity gives an $x$ in the interval satisfying both equations.

We can now compare the whole rectangle with the sides, using its lower height $.7634$. For the triangle the upper side is $y=(1-x)/\sqrt3$ and for the square it is $y=1+x$ here. The pentagon side joins the roots at angles $2\pi/5$ and $4\pi/5$. Each of the three heights is linear in $x$, so checking its two endpoints suffices to place it below $.7634$. The two smaller sets lie on the real axis. The [paper's witness check](https://arxiv.org/html/2611.30905v2#A2.SS1) gives the rational bounds used for these comparisons.
