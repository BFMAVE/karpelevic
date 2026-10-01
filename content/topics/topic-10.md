### Building a matrix that reaches the bound

An upper bound becomes a boundary formula only when a stochastic matrix attains it. We will construct such a matrix by drawing its transitions. The same graph also permits unequal weights, and its directed cycles explain its full characteristic polynomial.

Start with the oriented data of Topic VIII and the scalar solution $\rho=K_n(\theta)$. Thus $q<s$, $m=\lfloor n/q\rfloor$, $\vartheta=2\pi y$, $A=q\vartheta-2\pi p$, and $B=(2\pi r-s\vartheta)/m$. Set $z=\rho e^{i\vartheta}$ and choose

$$
\alpha=\frac{\rho^{s/m}\sin A}{\sin(A+B)},\qquad
\beta=\frac{\rho^q\sin B}{\sin(A+B)}.
$$

Both are positive and the scalar equation says $\alpha+\beta=1$. Taking imaginary and real parts, respectively, verifies

$$
z^q-\beta
=\frac{\rho^q\sin A}{\sin(A+B)}e^{i(A+B)}
=\alpha\rho^{q-s/m}e^{i(A+B)}.
$$

Every factor thus has the equality argument $A+B$. The exact angle calculation

$$
(s-mq)\vartheta+m(A+B)=2\pi(r-mp)
$$

ensures that the product has positive real phase. Raising the factor identity to the $m$th power gives the Ito equation

$$
z^s(z^q-\beta)^m=(1-\beta)^mz^{mq}.
$$

### The transition graph

We can also let $\beta_0,\ldots,\beta_{m-1}\in[0,1]$ be independent weights and set $\alpha_j=1-\beta_j$. Keep $q<s$, assume $s>(m-1)q$, and put $n_0=\max\{mq,s\}$. For each $j$, make a block of $q$ vertices $v_{j,0},\ldots,v_{j,q-1}$. Connect successive vertices within the block by arrows of weight one. From its last vertex, place an arrow of weight $\beta_j$ back to its first vertex, and an arrow of weight $\alpha_j$ toward the next block. When $q=1$, the local closing arrow is a loop at the block's sole vertex; the same construction applies.

A directed arrow of weight $a$ from vertex $u$ to vertex $v$ means that the matrix entry $A_{uv}$ is $a$. Rows describe departure vertices. The final row of a block splits its total weight as $\beta_j+\alpha_j=1$; every other row has one arrow of weight one. This is why the matrix is row-stochastic.

The blocks are designed to reproduce the product factors. For a three-vertex block labelled $0,1,2$ followed by a block starting at $3$, consider an eigenvector with coordinates $x_i$ and eigenvalue $\lambda$. Its two weight-one rows require $x_1=\lambda x_0$ and $x_2=\lambda x_1$. The branching row then requires

$$
\lambda x_2=\beta_0x_0+\alpha_0x_3,
\qquad (\lambda^3-\beta_0)x_0=\alpha_0x_3.
$$

Thus a deterministic path followed by one averaging row produces exactly a factor $\lambda^q-\beta_j$. The links between blocks let those coordinate ratios telescope around a cycle. The final route length supplies the remaining power of $\lambda$.

Following the closing arrows gives $m$ separate cycles of length $q$, each with product of weights $\beta_j$. Following the connecting arrows gives a cycle through the blocks. Its length would initially be $mq$; only its final connection needs adjustment to make its length $s$.

If $s\le mq$, set $d=mq-s$. Redirect the last connecting arrow into $v_{0,d}$. The assumption $s>(m-1)q$ guarantees $0\le d<q$. The connecting cycle skips the first $d$ vertices of block zero and has length $s$. The graph has $mq$ vertices.

If $s>mq$, insert $s-mq$ new vertices into that final connection. Give the first arrow weight $\alpha_{m-1}$ and the remaining arrows weight one. The connecting cycle and the graph now have $s$ vertices. In either case the graph has exactly $n_0$ vertices.

### Why these cycles determine the polynomial

Let $t$ be the variable in the characteristic polynomial $\det(tI-A)$. Its determinant expansion can be organised by collections of directed cycles that have no vertex in common. A selected cycle contributes one minus sign and the product of its weights. Vertices outside the selected cycles contribute factors of $t$.

Any subset of the $m$ local $q$-cycles can be selected because they are disjoint. Summing those choices gives

$$
t^{n_0-mq}\prod_{j=0}^{m-1}(t^q-\beta_j).
$$

The connecting $s$-cycle meets every local cycle, so it can only be selected alone. Its contribution is $-t^{n_0-s}\prod_j\alpha_j$. There are no other simple cycles: once a path chooses a local closing arrow it closes that block, and otherwise it follows the connecting route. Consequently

$$
\det(tI-A)
=t^{n_0-mq}\prod_{j=0}^{m-1}(t^q-\beta_j)
-t^{n_0-s}\prod_{j=0}^{m-1}(1-\beta_j).
$$

This is the full polynomial, including zero roots and their multiplicities. The displayed powers are nonnegative because of the definition of $n_0$.

Take all $\beta_j=\beta$ from the equality construction. For a nonzero $z$, the Ito equation is equivalent to this characteristic polynomial vanishing at $z$, after multiplying or dividing by a power of $z$. Thus $z$ is an eigenvalue. With Farey data, $q+s>n$ implies $s>n-q\ge(m-1)q$, and $n_0\le n$. An identity block enlarges the matrix to order $n$ if necessary. If we used conjugate orientation, a real matrix also has the conjugate eigenvalue, recovering the original angle $\theta$.

### A six-state construction to check

Choose $q=3$, $m=2$, and $s=5$. Label the blocks $0,1,2$ and $3,4,5$. Give $0\to1$, $1\to2$, $3\to4$, and $4\to5$ weight one. Set $2\to0$ to $\beta_0$, $2\to3$ to $1-\beta_0$, $5\to3$ to $\beta_1$, and $5\to1$ to $1-\beta_1$. The connecting cycle is $1\to2\to3\to4\to5\to1$, with five steps. Can the two local three-cycles be selected together in the determinant? Yes: their vertices are disjoint. Can either be selected with that five-cycle? No: they share vertices. Hence

$$
\det(tI-A)=(t^3-\beta_0)(t^3-\beta_1)-t(1-\beta_0)(1-\beta_1).
$$

For the concrete weights $\beta_0=0.4$ and $\beta_1=0.7$, the two branch rows have weights $(0.4,0.6)$ and $(0.7,0.3)$. Their connecting-cycle weight is $0.6\cdot0.3=0.18$, so the polynomial is $t^6-1.1t^3-0.18t+0.28$. At $t=1$ it vanishes: $1-1.1-0.18+0.28=0$. This checks the expected eigenvalue one of a stochastic matrix. The graph below shows exactly which cycles account for these terms.

<!-- reader-figure:late -->

At all weights one, the nonzero eigenvalues are the $q$th roots of unity; at all weights zero, they are the $s$th roots of unity, with any remaining eigenvalues zero. For weights strictly between zero and one the graph is connected in both directions by directed paths. For Farey data $q$ and $s$ are coprime, which also ensures positivity of every sufficiently high matrix power.

Unequal weights produce valid stochastic matrices too. Topic IX compares their roots with the boundary only when those roots also satisfy the specified real argument identity. The characteristic polynomial alone allows other roots. Equal weights attain the boundary on the selected branch; they do not make every root of the polynomial a boundary point.
