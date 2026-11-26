## Which eigenvalues occur? {#the-results}

A real matrix is **doubly stochastic** when its entries are nonnegative and each row and each column sums to one. Fix its order $N$, the number of rows and columns. A complex number $z$ is an **eigenvalue** of $A$ if $Av=zv$ for a nonzero column $v$. Which values of $z$ occur as $A$ varies over these matrices? Write $D_N$ for that set.

Put the $j$th roots of unity, the solutions of $w^j=1$, in the complex plane. Their convex hull $\Pi_j$ consists of all their weighted averages with nonnegative weights summing to one. The cases $j=1$ and $j=2$ give the point $1$ and the segment $[-1,1]$. For $j\ge3$ this is the regular $j$-gon with a vertex at $1$. A cyclic permutation and its powers supply every point of $\Pi_j$ when $j\le N$, by [the construction in Topic II](/perfect-mirsky/topic-ii/#cycle-polygons). Thus
$$
 U_N=\bigcup_{j=1}^N\Pi_j\subseteq D_N.
$$
Perfect and Mirsky asked whether any eigenvalues lie outside these polygons.

> **For every integer $N\ge450$, we have $D_N=U_N$.** This is [Theorem 6 of the arXiv preprint](https://arxiv.org/html/2611.30905v2#Thmtheorem6). Its proof uses a computer to certify inequalities. [Theorem 5](https://arxiv.org/html/2611.30905v2#Thmtheorem5) proves equality for $N\ge10^{30}$ by pencil and paper. The eight topics below follow that argument.

| Order $N$ | What is known |
|:---|:---|
| $1$ through $4$ | $D_N=U_N$. |
| $5$ | $D_5$ strictly contains $U_5$. Add the segments from zero to two arcs traced by roots of degree-four polynomials. The arcs are reflections of each other across the real axis. [Description and proof in Appendix B](https://arxiv.org/html/2611.30905v2#A2). |
| $6$ | $D_6=U_6=\Pi_4\cup\Pi_5\cup\Pi_6$. The eigenvalue outside $U_5$ in Topic II is inside the hexagon. [Order-six proof in Appendix B](https://arxiv.org/html/2611.30905v2#A2.SS3). |
| $7$ through $449$ | Equality remains open in the account given by version 2. |
| $450$ and higher | $D_N=U_N$, by Theorem 6. |

The descriptions at orders five and six use computer-checked certificates. The certificates let the verifier check inequalities across whole intervals along the proposed boundary.

## How the question changed {#history}

In 1965, Hazel Perfect and Leon Mirsky proved equality through order three. At order four, Levick, Pereira and Kribs also considered sums of two distinct eigenvector coordinates. The extra restriction gives equality there, as they proved in 2015. Mashreghi and Rivard had found the exception at order five in 2007. In [Topic II](/perfect-mirsky/topic-ii/#order-five) we can see where their eigenvalue falls relative to the triangle and pentagon.

Harlev, Johnson and Lim sampled eigenvalues of convex combinations of two permutation matrices. They conjectured equality for orders six through eleven. Order six is settled by the preprint. To prove equality at a given order, one has to rule out every eigenvalue beyond the polygons, including those of matrices formed from many permutations.

## Choose a reading route {#reading-routes}

The guided lessons start from matrix multiplication, complex numbers and calculus. Start with [Topic I](/perfect-mirsky/topic-i/) to see why the column sums add a restriction that the convex hull alone cannot express. The same column sums bound how much squared distance a near-boundary eigenvalue can leave. We follow that bound until it contradicts the motion needed to complete a quarter turn.

On a first reading, follow [Topics II and III](/perfect-mirsky/topic-ii/), take the [outer-ring estimate in V](/perfect-mirsky/topic-v/#ring-estimate) as given, and continue through [VI to VIII](/perfect-mirsky/topic-vi/). For a line-by-line check, open the detailed proofs in order. Topics IV and V use finite Fourier series and conditional averages. The numerical tables there track how much room each estimate leaves for the next one.

## The eight topics {#topics}

<!-- mirsky-topics -->

## References {#references}

- [B. Verbeken and V. Ginis, *Eigenvalues of doubly stochastic matrices in large orders*](https://arxiv.org/abs/2611.30905v2). arXiv preprint, version 2, revised 24 November 2026. The record links to the paper and its computational supplement.
- [H. Perfect and L. Mirsky, *Spectral properties of doubly-stochastic matrices*](https://doi.org/10.1007/BF01313442). Monatsh. Math. **69** (1965), 35–57.
- [J. Levick, R. Pereira and D. W. Kribs, *The four-dimensional Perfect–Mirsky conjecture*](https://doi.org/10.1090/S0002-9939-2014-12412-9). Proc. Amer. Math. Soc. **143** (2015), 1951–1956.
- [J. Mashreghi and R. Rivard, *On a conjecture about the eigenvalues of doubly stochastic matrices*](https://doi.org/10.1080/03081080600899296). Linear Multilinear Algebra **55** (2007), 491–498.
- [A. Harlev, C. R. Johnson and D. Lim, *The doubly stochastic single eigenvalue problem: A computational approach*](https://arxiv.org/abs/1908.03647). Exp. Math. **31** (2022), 936–945.
- [S. Sherman]{#reference-sherman}, [*On a theorem of Hardy, Littlewood, Polya, and Blackwell*](https://doi.org/10.1073/pnas.37.12.826). Proc. Natl. Acad. Sci. USA **37** (1951), 826–831.
- [J. L. Doob]{#reference-doob}, [*Stochastic Processes*](https://books.google.com/books/about/Stochastic_Processes.html?id=KvJQAAAAMAAJ). Wiley, 1953, Chapter VII.
