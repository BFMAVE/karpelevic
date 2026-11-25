### What a row receives {#row-receives}

Put the coordinates of a nonzero column $v=(v_1,\ldots,v_N)^{\mathsf T}$ in the complex plane. A **mark** is a label $j$ together with its position $v_j$. Two marks can occupy one point. A nonnegative matrix $A=(a_{ij})$ is **row-stochastic** when each row sums to one. Row $i$ takes the weighted average $\sum_{j=1}^N a_{ij}v_j$. If this equals $zv_i$ for each $i$, then $Av=zv$. We call $z$ an eigenvalue and $v$ an eigenvector. Multiplication by $z\ne0$ scales distances from zero by $|z|$ and rotates by the angle of $z$. Multiplication by zero sends every mark to zero.

Let $P$ be the convex hull of the marks, namely the set of all their weighted averages with nonnegative weights summing to one. Every $zv_i$ lies in $P$, so $zP\subseteq P$. For a row-stochastic matrix the converse works for this list of marks. If each $zv_i$ lies in $P$, choose weights for each row independently. This is the correspondence used in [Karpelevič Topic I](/proof/).

When the columns also sum to one, the matrix is **doubly stochastic**. Put one unit of mass at each marked source $v_j$. In the entry $a_{ij}$, the first index names the row that receives the mass and the second names its source. For example, $a_{23}=1/4$ sends a quarter of the unit at $v_3$ to row 2. Its row sum says that it receives one unit in total. The eigenvector equation says that this unit must have centre $zv_2$. The column sum leaves three quarters of the unit at $v_3$ for the other rows. Several rows can ask for mass from the same source. Can they all get what they need?

### Move two marks inside a square {#six-marks}

Begin with $1,i,-1,-i,0,0$, where $i^2=-1$. Multiplying by $i$ permutes the four corners and fixes the two marks at zero. Move those marks to $a,-a$, with $0\leq a<1$. The hull is still the same square. How much of the quarter turn can the six marks realize now?

For a multiplier $it$ with $t\geq0$, the rows at $1$ and $a$ ask for centres $it$ and $ita$. Only the source at $i$ supplies positive imaginary part. If the two rows draw $x$ and $y$ units from it, their imaginary parts are at most $x$ and $y$. The source supplies at most one unit altogether. Thus
$$
 t+ta\leq1,\qquad t\leq\frac{1}{1+a}.
$$
The bound is sharp for this list of marks. The [allocation of all six units](#allocate-six) gives a matrix attaining it and shows how to realize smaller $t$. In the drawing we hold the trial multiplier at $3i/4$ and vary $a$. At $a=1/3$ the two rows together ask for exactly the unit available at $i$.

<!-- mirsky-figure:square -->

::: {.reader-checkpoint}
**Check the supply.** At $a=1/2$, how much of the source at $i$ do the two rows ask for if $t=3/4$?

<details><summary>Check your answer</summary>

They need at least $3/4$ and $3/8$. The total $9/8$ exceeds the unit available. At the sharp multiplier $2i/3$ the two amounts are $2/3$ and $1/3$.

</details>
:::

The bound depends on the positions of the marks. At $a=0$ the same six labels can realize $i$, so a bound for $a=1/2$ gives a restriction on realizations with that eigenvector. In Topic II we allow the eigenvector to vary and ask what a matrix of a given order can realize.

### Choose how far to follow the proof {#reading-routes}

**Main ideas.** Read [II](/perfect-mirsky/topic-ii/#theorem) for the candidate region and [III](/perfect-mirsky/topic-iii/) for the squared spread. Accept [the outer-ring estimate in V](/perfect-mirsky/topic-v/#ring-estimate) on a first reading. Then follow [VI](/perfect-mirsky/topic-vi/), [VII](/perfect-mirsky/topic-vii/) and [VIII](/perfect-mirsky/topic-viii/) to see why a counterexample would require more motion than the matrix permits.

**The full argument.** Read all eight topics in order and open **Detailed proof** where you want to see the estimates. Topic IV supplies the estimates used in V. The later topics introduce finite Fourier series and conditional expectation before using them. We start with matrix multiplication, complex numbers and one-variable calculus.

<!-- proof-details -->

### Allocate all six units {#allocate-six}

Take $t=1/(1+a)$. Give rows $1$ and $a$ the amounts $t$ and $ta$ from source $i$, and give rows $-1$ and $-a$ the same amounts from source $-i$. These two imaginary sources have now been used in full. Give the row at $i$ the amounts $(1-t)/2$ from $1$ and $(1+t)/2$ from $-1$. Its mean is $-t$. Reverse these amounts for the row at $-i$ to obtain $t$. The two real corners have now each supplied one unit.

The four rows at $1,a,-1,-a$ still need altogether two units because each pair has so far received one. Give each row half of its outstanding amount from $a$ and half from $-a$. Equal weights on opposite marks add zero to a row mean. Since the outstanding amounts sum to two, the last two columns now each sum to one. The construction includes $a=0$ because the two labels at zero are distinct.

Let $J_6$ be the matrix with every entry $1/6$. It sends this vector to zero because the six positions sum to zero. If $A$ realizes $it$, then $sA+(1-s)J_6$ realizes $ist$ on the same vector for $0\le s\le1$. This fills the interval up to the sharp radius on the positive imaginary axis.

### One inequality for all the rows

A function $f$ on the plane is **convex** when its value at a weighted average is at most the weighted average of its values. For example, $f(w)=\max(0,\operatorname{Im}w)$ counts the positive imaginary part of $w$. If $Av=zv$, convexity gives
$$
 f(zv_i)\leq\sum_j a_{ij}f(v_j).
$$
Summing over $i$ gives $\sum_i f(zv_i)\leq\sum_j f(v_j)$ because each column has total weight one. For the six marks those sums are $t(1+a)$ and $1$. In Topic III we use $f(w)=|w|^2$ and calculate the difference exactly. The paper's [Proposition 1](https://arxiv.org/html/2611.30905v2#Thmtheorem1) gives the converse when the inequality holds for every convex $f$.
