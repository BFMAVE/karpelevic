### How much squared length survives an average? {#variance-identity}

Let $A=(a_{ij})$ be a real doubly stochastic $N$ by $N$ matrix with $Av=zv$. Dividing the eigenvector by $\sqrt{\sum_i|v_i|^2}$ preserves its eigenvalue and puts $\sum_i|v_i|^2=1$. For each row measure the squared distance of every source from the centre $zv_i$, with weight $a_{ij}$. We call this weighted mean the **variance** of the row. The variance is zero precisely when every source with positive weight lies at the centre.

The identity behind the proof is
$$
 \sum_{i,j} a_{ij}|v_j-zv_i|^2=1-|z|^2.
$$
To see it, expand one row. The middle term in the expansion uses $\sum_j a_{ij}v_j=zv_i$, leaving $\sum_j a_{ij}|v_j|^2-|zv_i|^2$. On adding the rows, each $|v_j|^2$ receives total weight one. This is where the column condition enters. The total squared length of the means is $|z|^2$.

For example, use four marks $1,i,-1,-i$ and take half the mass in each row from its own mark and half from the next mark. The multiplier is $(1+i)/2$. After dividing the marks by two, their total squared length is one. Each row has variance $1/8$, and the four variances sum to $1/2=1-|z|^2$.

### The room left outside the polygons {#incircle}

For $N\ge3$, the segment from the origin perpendicular to a side of $\Pi_N$ meets it halfway between its two endpoints. With either endpoint it makes a right triangle with hypotenuse one and angle $\pi/N$ at the origin. The distance to the side is therefore $\cos(\pi/N)$. Every point of modulus at most this distance lies in $\Pi_N$ and hence in $U_N$.

<!-- mirsky-figure:incircle -->

Now suppose $z$ is an eigenvalue outside $U_N$. It lies beyond the disk of radius $\cos(\pi/N)$. The variance identity also gives $|z|\le1$, since its left-hand side is nonnegative. These two bounds give
$$
 0\le 1-|z|^2<\sin^2(\pi/N)\le \frac{\pi^2}{N^2}.
$$
The next two topics compare permutations when the eigenvalue is close to the unit circle. There we normalize the **mean** squared modulus over a group of marks to one, so the identity will use a mean over that group. Later we keep distances in the plane on the scale where the largest mark has modulus one. That scale lets us count labels by radius and follow a path for nearly a right angle.

### Draw a permutation instead of a row {#permutations}

A permutation $P$ chooses a source $P(i)$ for every row $i$ and uses each source once. The **Birkhoff–von Neumann decomposition** expresses a doubly stochastic matrix as a convex combination of such permutation matrices. Draw a random $P$ with probability equal to its coefficient. The probability, written $\mathbb{P}(P(i)=j)$, is $a_{ij}$. The expectation $\mathbb{E}[v_{P(i)}]$ averages the possible images and equals $zv_i$. The choices of sources for different rows in a single draw are linked, since they come from one permutation.

Let $Q$ be a second draw of an entire permutation with the same probabilities. Independence means that knowing $P$ leaves the law of $Q$ unchanged. For example, in the four-mark construction from the first section, each draw picks either the identity or the shift with probability $1/2$. The two draws disagree half the time. In row 1 the two distinct images are $1/2$ and $i/2$, at squared distance $1/2$. Half the mean squared distance is $1/8$, as before.

For any fixed row the two images have common mean $zv_i$. Expanding their squared difference and using independence gives
$$
 \tfrac12\mathbb{E}|v_{Q(i)}-v_{P(i)}|^2
 =\mathbb{E}|v_{P(i)}-zv_i|^2.
$$
We can therefore measure the variance by comparing the two images directly. This will let us compare the integer turns of the two permutations in [Topic IV](/perfect-mirsky/topic-iv/).

::: {.reader-checkpoint}
**A zero variance.** Suppose $|z|=1$ and $v_i\neq0$. Follow label $i$ around a cycle of any permutation with positive weight. What does returning to $i$ say about $z$?

<details><summary>Check your answer</summary>

Every step multiplies the coordinate by $z$. After the cycle length $j\leq N$ we have $z^jv_i=v_i$. Dividing by $v_i$ gives $z^j=1$.

</details>
:::

<!-- proof-details -->

### Expand the two squared distances

For complex $w$ write $\bar w$ for its conjugate and $\operatorname{Re}w$ for its real part. With $m_i=zv_i$ and row sum one,
$$
 \sum_j a_{ij}|v_j-m_i|^2
 =\sum_j a_{ij}|v_j|^2-2\operatorname{Re}(\bar m_i m_i)+|m_i|^2.
$$
For independent images $X$ and $Y$ with mean $m_i$, the cross term is $\mathbb E[X\bar Y]=m_i\bar m_i$. Thus $\mathbb E|X-Y|^2=2(\mathbb E|X|^2-|m_i|^2)$.

### Obtain the permutation decomposition

Connect each row to the source columns in which its entries are positive. A **matching** chooses some of these connections with each row and column used at most once. We need one that uses every row. A set of $k$ rows needs at least $k$ neighbouring columns because it has total weight $k$ and each column has capacity one.

To see why that count suffices, take a matching using as many rows as possible. Suppose it leaves a row unmatched. From that row follow connections to neighbouring columns. From each matched column follow its matched connection back to its row, then continue to further columns. If an unmatched column is reached, switch the chosen and unchosen connections along the path to it. This matches both ends of the path and keeps the internal labels matched, increasing the total. Otherwise all the reached columns are matched to reached rows and the starting row is unmatched. The reached rows would have fewer neighbouring columns than rows, contradicting the capacity count. This is the needed case of Hall's matching theorem.

Subtract the smallest entry on the chosen permutation times its permutation matrix. If this smallest entry is one, the matrix already is that permutation matrix. Otherwise divide by the remaining common row and column sum to obtain a doubly stochastic matrix with fewer positive entries. Iterating terminates, because at least one entry vanishes at each step. Undoing the divisions writes the original matrix as the required convex combination.
