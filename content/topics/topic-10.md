### Building a matrix that reaches the bound

At order four we found the candidate $(1+i)/2$. Can we produce a stochastic matrix with that eigenvalue? Let $C_4$ shift the four coordinates of a column vector one place, so that $C_4(1,i,-1,-i)^T=i(1,i,-1,-i)^T$. At each state, stay with probability $1/2$ and take the next step with probability $1/2$. The transition matrix is $(I+C_4)/2$. Applied to the same vector, it multiplies it by $(1+i)/2$.

For a general arc, one row that chooses between staying and moving no longer suffices. Instead we let it choose between two *return paths*. Their lengths will supply the powers of $z$ in the product equation.

::: {.reader-sharpness-ledger}
**Upper bound — supplied by Topic IX.** A product with the required real winding is bounded by the candidate, with equal weights precisely at equality.

**Attainment.** For every ray we will put the candidate point into the spectrum of an explicit stochastic matrix. Comparing the upper bound at different matrix orders remains for Topics XI and XII.
:::

Fix an open Farey interval at order $n$, in the orientation of Topic VIII. Its endpoints are $p/q<r/s$ with $q<s$, its angle is $\vartheta=2\pi y$, and it gives $m=\lfloor n/q\rfloor$ factors. Use the candidate radius $\rho=K_n(\theta)$ and put $z=\rho e^{i\vartheta}$. With $A=q\vartheta-2\pi p$ and $B=(2\pi r-s\vartheta)/m$, the two lengths obtained from the triangle in Topic VIII give the row weights

$$
\alpha=\frac{\rho^{s/m}\sin A}{\sin(A+B)},\qquad
\beta=\frac{\rho^q\sin B}{\sin(A+B)}.
$$

The scalar equation gives $\alpha+\beta=1$, and both sines in the numerators are positive. To recover the complex factor, compare $z^q=\rho^q e^{iA}$ with a point in direction $A+B$. Subtracting a real $\beta$ leaves the height $\rho^q\sin A$ fixed, so the length along that direction has to be $\rho^q\sin A/\sin(A+B)$. The horizontal difference is
$$
\rho^q\left(\cos A-\frac{\sin A\cos(A+B)}{\sin(A+B)}\right)
=\frac{\rho^q\sin B}{\sin(A+B)}=\beta .
$$
Together the two coordinates give

$$
z^q-\beta
=\frac{\rho^q\sin A}{\sin(A+B)}e^{i(A+B)}
=\alpha\rho^{q-s/m}e^{i(A+B)}.
$$

The direction of $z^q-\beta$ is therefore $A+B$, precisely the mean angle required in Topic IX. To see what happens to the directions when we multiply $m$ copies of this factor and include the closing power of $z$, use

$$
(s-mq)\vartheta+m(A+B)=2\pi(r-mp)
$$

The right side is a whole number of turns, so the complex number with this argument and positive modulus is positive real. The lengths from the factor identity give $z^{s-mq}(z^q-\beta)^m=\alpha^m$. Multiplying by $z^{mq}$ and using $\alpha=1-\beta$ yields the Ito equation

$$
z^s(z^q-\beta)^m=(1-\beta)^mz^{mq}.
$$

### The transition graph

The graph can be built with a separate weight $\beta_j\in[0,1]$ for every block $j=0,\ldots,m-1$. Write $\alpha_j=1-\beta_j$. For now assume $q<s$ and $s>(m-1)q$, and let $n_0=\max\{mq,s\}$. In block $j$, label the $q$ states $v_{j,0},\ldots,v_{j,q-1}$. From each state before the last, move to the next with probability one. At the last state there are two choices. The weight $\beta_j$ takes us back to the start of this block. The weight $\alpha_j$ takes us towards the next block, with the last connection specified below. For $q=1$ the return to the start is a loop.

A directed arrow of weight $a$ from vertex $u$ to vertex $v$ means that the matrix entry $M_{uv}$ is $a$, where $M$ denotes the transition matrix. Rows describe departure vertices. At the last vertex of a block the row sum is $\beta_j+\alpha_j=1$. Every other vertex has a single outgoing arrow of weight one. Thus $M$ is row-stochastic. We use $M$ for the matrix to distinguish it from the scalar angle $A$.

Keep track of what the graph and the polygon each label. A vertex $u$ of the graph is a state and indexes a row. Its complex coordinate $x_u$ comes from a chosen eigenvector. Distinct states can have the same coordinate, and a coordinate can lie inside the convex hull of the others. To draw row $u$, attach the point $x_v$ to the end of each outgoing arrow and take their weighted average. The equation $\lambda x_u=\sum_v M_{uv}x_v$ says that this average is where multiplication by $\lambda$ sends $x_u$.

For instance, take a block on states $0,1,2$, with the next block starting at $3$. Compare the row at $0$, which offers a single move, with the row at $2$, which offers two.

| Outgoing arrows | Nonzero entries when the weights are positive | What the row gives |
|---|---|---|
| $0\to1$ with probability one | $M_{01}=1$ | $x_1=\lambda x_0$ |
| From $2$, return to $0$ with probability $\beta_0$ or move to $3$ with probability $\alpha_0$. | $M_{20}=\beta_0$, $M_{23}=\alpha_0$ | $\lambda x_2=\beta_0x_0+\alpha_0x_3$ |

Each arrow accounts for one summand. Only after summing the outgoing arrows do we know the image of the coordinate at their common starting state. Whether each coordinate is a corner of the polygon is a further question. Topic XIV will verify this for all eight states of the worked example.

Read the first two deterministic rows together. They give $x_2=\lambda x_1=\lambda^2x_0$. Substitute this into the branching row shown in the table to obtain

$$
\lambda x_2=\beta_0x_0+\alpha_0x_3,
\qquad (\lambda^3-\beta_0)x_0=\alpha_0x_3.
$$

For a block of length $q$ there are $q-1$ steps of weight one before this last row. They replace each intermediate coordinate by a power of $\lambda$ times the first one, giving the factor $\lambda^q-\beta_j$. On multiplying across blocks the coordinate at a shared end cancels. Where the final arrow returns decides which power of $\lambda$ is still needed to close the path.

Always choose the return within a given block and we have a cycle of length $q$. Its arrow weights multiply to $\beta_j$ because the other weights are one. Instead choose the connection to the next block at each exit. Connecting the last state straight back to the first would give a cycle of length $mq$. We want length $s$, so we adjust just that last connection.

Suppose first that $s\le mq$. We need to omit $d=mq-s$ steps. Since $s>(m-1)q$ we have $d<q$, so the state $v_{0,d}$ exists in the first block. End the final connecting arrow there. The cycle now omits exactly the states $v_{0,0},\ldots,v_{0,d-1}$, none when $d=0$. It visits $s$ of the $mq$ states.

When $s>mq$, keep the return to the first state but insert $s-mq$ new states on the way. Choose this route with the usual weight $\alpha_{m-1}$ at the last block and give each subsequent step probability one. Now the connecting cycle visits all $s$ states. Together the two constructions give $n_0=\max\{mq,s\}$ states.

For the example from Topic VII, $q=3$, $m=2$ and $s=8$. The two blocks use six states. Send the last connecting arrow from state $5$ through the two additional states $6$ and $7$ before returning to $0$. Following the connecting arrows now uses eight steps, while taking a local return still uses three. Writing down the eigenvector rows along these routes recovers the two factors with exponent three and the extra power $z^2$ found in the closing path.

### Why these cycles determine the polynomial

Expand $\det(tI-M)$ by permutations. If a term selects a nondiagonal entry in row $u$, its column is the next state of an arrow out of $u$. A permutation uses each column once, so these moves form directed cycles with disjoint vertices. A cycle of length $\ell\ge2$ has permutation sign $(-1)^{\ell-1}$. Its $\ell$ entries from $-M$ contribute another $(-1)^\ell$, leaving a single minus sign times the product of arrow weights. At a fixed vertex the diagonal entry $t-M_{ii}$ lets us choose either $t$ or a loop of weight $M_{ii}$ with the same minus sign.

In block $j$ we can leave all its $q$ vertices unused, contributing $t^q$, or take its return cycle, contributing $-\beta_j$. Different blocks use disjoint vertices, so these choices multiply. Any states outside the $m$ blocks still contribute $t$. Thus the terms using only local cycles sum to

$$
t^{n_0-mq}\prod_{j=0}^{m-1}(t^q-\beta_j).
$$

The connecting $s$-cycle meets every local cycle, so it can only be selected alone. Its contribution is $-t^{n_0-s}\prod_j\alpha_j$. To exhaust the possibilities, start a simple cycle at a block's last vertex. If its first arrow is a local return, the next $q-1$ steps lead straight back to that vertex and the cycle is complete. Thus a cycle containing *any* local return is one of the local cycles. A cycle using only connecting exits has all its steps forced. It is the one of length $s$. This argument includes loops when $q=1$. Consequently

$$
\det(tI-M)
=t^{n_0-mq}\prod_{j=0}^{m-1}(t^q-\beta_j)
-t^{n_0-s}\prod_{j=0}^{m-1}(1-\beta_j).
$$

The exponent $n_0-mq$ counts the states outside the blocks, while $n_0-s$ counts those outside the connecting cycle. Both counts are nonnegative. We have therefore obtained the characteristic polynomial directly, with the correct multiplicity even at $t=0$.

Now choose every $\beta_j$ equal to the weight $\beta$ calculated from the scalar radius. At our point $z\ne0$ the Ito equation and $\det(zI-M)=0$ differ only by a power of $z$. Hence $M$ has the desired eigenvalue. For these Farey endpoints, $q+s>n$ gives $s>n-q\ge(m-1)q$, exactly the condition needed for the last connecting arrow. Also $s\le n$ and $mq\le n$. If $n_0<n$, adjoining an identity block supplies the remaining states and keeps $z$ as an eigenvalue. When the interval was reflected, complex conjugation gives the eigenvalue on the original ray because $M$ is real.

### A six-state construction to check

Take two blocks of three states, labelled $0,1,2$ and $3,4,5$, and ask for a connecting cycle of length five. Inside the blocks use $0\to1\to2$ and $3\to4\to5$, with weight one at every step. The two exits from $2$ go to $0$ and $3$ with weights $\beta_0$ and $1-\beta_0$. At $5$ return to $3$ with weight $\beta_1$ or go to $1$ with weight $1-\beta_1$. This last arrow skips state $0$, giving the five-cycle $1\to2\to3\to4\to5\to1$. The two three-cycles can appear in the same determinant term. The five-cycle meets both, so its term contains neither. We obtain

$$
\det(tI-M)=(t^3-\beta_0)(t^3-\beta_1)-t(1-\beta_0)(1-\beta_1).
$$

We can also check the five terms one at a time. Each chosen cycle contributes a minus sign, and each unused state contributes a factor $t$.

$$
\begin{array}{c|c}
\text{no cycle} & t^6\\
\text{first local cycle only} & -\beta_0t^3\\
\text{second local cycle only} & -\beta_1t^3\\
\text{both local cycles} & +\beta_0\beta_1\\
\text{connecting cycle only} & -\alpha_0\alpha_1t
\end{array}
$$

Selecting both local cycles gives two minus signs, hence the positive constant term. Selecting the five-cycle leaves state $0$ outside it, hence its factor $t$.

Can we see that extra $t$ in the eigenvector itself? Write $x_j$ for its entries. The four arrows of weight one give $x_1=tx_0$, $x_2=t^2x_0$, $x_4=tx_3$ and $x_5=t^2x_3$. Only the two branching rows remain. They read

$$
(t^3-\beta_0)x_0=\alpha_0x_3,\qquad
(t^3-\beta_1)x_3=\alpha_1x_1=\alpha_1t x_0.
$$

The final arrow enters state $1$. Its coordinate is already one multiplication by $t$ beyond $x_0$. When $0<\beta_0,\beta_1<1$, we can use these two rows to construct the vector. Set $x_0=1$ and take $x_3=(t^3-\beta_0)/\alpha_0$ from the first equation. The second row now holds exactly when $(t^3-\beta_0)(t^3-\beta_1)=\alpha_0\alpha_1t$. Every root of the polynomial gives six coordinates satisfying the original rows.

For the weights $\beta_0=0.4$ and $\beta_1=0.7$ in the drawing, the product of the two connecting weights is $0.6\cdot0.3=0.18$. The polynomial is $t^6-1.1t^3-0.18t+0.28$. At $t=1$ it vanishes, and the construction gives $x_3=(1-0.4)/0.6=1$. The four deterministic rows then give the familiar eigenvector of all ones.

<details>
<summary>Use the same graph to construct a nonconstant eigenvector</summary>

Keep the arrows in the drawing and give both local returns a common weight $0<\beta<1$. Can we choose it so that $t=1/4$ is an eigenvalue? With $x_0=1$ the two branching equations reduce to $x_3^2=t$. Take $x_3=-1/2$. The first branching equation now requires
$$
\frac1{64}-\beta=-\frac{1-\beta}{2},
$$
so $\beta=11/32$ and $\alpha=21/32$. Following the deterministic arrows gives
$$
x=(1,1/4,1/16,-1/2,-1/8,-1/32)^T.
$$
For instance the last row averages states $3$ and $1$. It gives $(11/32)(-1/2)+(21/32)(1/4)=-1/128$, exactly one quarter of $x_5$.

</details>

<!-- reader-figure:late -->

At $\beta_j=1$ for all $j$, the connecting route has weight zero and the local $q$-cycles give the $q$th roots of unity. At $\beta_j=0$ for all $j$, only the connecting $s$-cycle remains and gives the $s$th roots of unity. In each case any other eigenvalues are zero. For $0<\beta_j<1$ we can follow the connecting arrows through all blocks and the local return arrows to reach the states skipped by that route. Thus each state can reach every other. For Farey data the cycle lengths $q$ and $s$ are coprime. The period, which divides both lengths, is one. Consequently every sufficiently high power of this finite irreducible matrix has positive entries.

Return to the six-state example with both local weights equal to $\beta\in(0,1)$. Its characteristic polynomial is $C(t)=(t^3-\beta)^2-(1-\beta)^2t$. What happens at zero if we use the Ito equation with nonnegative exponents instead? Taking its two sides to the left gives

$$
t^5(t^3-\beta)^2-(1-\beta)^2t^6=t^5C(t).
$$

The extra factor $t^5$ vanishes at zero, while $C(0)=\beta^2>0$. Thus the five zero roots on this last line come entirely from clearing powers. The matrix has precisely the roots of $C$, which is why we checked the equivalence with the Ito equation at a nonzero point.

### How the weight changes from one endpoint to the other {#why-the-weight-traverses-the-selected-arc-exactly-once}

For each angle of the oriented interval we have found a weight $\beta$. Does increasing the angle run through all weights between zero and one exactly once? Follow the scalar radius $\rho=\rho(\vartheta)$ along the interval. By its defining equation $\mathcal R(\rho,\vartheta)=0$, where

$$
\mathcal R(\rho,\vartheta)=\rho^{s/m}\sin A+\rho^q\sin B-\sin(A+B).
$$

First vary $\rho$ while holding $\vartheta$ fixed. The derivative of the difference, denoted by $\mathcal R_\rho$, is

$$
\mathcal R_\rho=\frac{s}{m}\rho^{s/m-1}\sin A+q\rho^{q-1}\sin B>0.
$$

Along the arc, $\mathcal R$ has value zero before and after a small change in $\vartheta$. Split that zero change into one change at fixed angle and one at fixed radius. By the mean-value theorem the first is $\Delta\rho$ times an intermediate value of $\mathcal R_\rho$, and the second is $\Delta\vartheta$ times an intermediate value of $\mathcal R_\vartheta$. Topic VIII gives $\Delta\rho\to0$ as $\Delta\vartheta\to0$. Dividing by $\Delta\vartheta$ and using $\mathcal R_\rho>0$ therefore gives $\rho'=-\mathcal R_\vartheta/\mathcal R_\rho$. This quotient is continuous along the open arc, so the formula for $\beta$ also gives it a continuous derivative.

To decide whether $\beta'$ can reach zero, put $e=s-mq$ and write the product equation as $H(z,\beta)=0$, where

$$
H(z,\beta)=z^e(z^q-\beta)^m-(1-\beta)^m.
$$

Near our point $z\ne0$ even a negative power $z^e$ can be differentiated. Holding $\beta$ fixed and factoring out the common powers of $z$ and $z^q-\beta$ gives

$$
H_z=z^{e-1}(z^q-\beta)^{m-1}(sz^q-e\beta)\ne0.
$$

The last factor $sz^q-e\beta$ has imaginary part $s\rho^q\sin A>0$. For the same reason $z^q-\beta$ is nonzero, and $z$ has radius $\rho>0$. This verifies every nonvanishing factor in the derivative.

As $\vartheta$ varies, the identity $H(z(\vartheta),\beta(\vartheta))=0$ continues to hold. Differentiating along the arc gives

$$
H_z z'+H_\beta\beta'=0,\qquad
z'=e^{i\vartheta}(\rho'+i\rho)\ne0.
$$

Since $\rho>0$, the imaginary part of $\rho'+i\rho$ is positive and hence $z'\ne0$. If $\beta'$ vanished, the first identity would give $H_z z'=0$, although both factors are nonzero. Thus the continuous derivative $\beta'$ keeps one sign on the interval. At the left end $\rho$ tends to one and $A$ to zero, giving $\beta\to1$. At the right end $B$ tends to zero and hence $\beta\to0$. The sign is therefore negative. Continuity and strict decrease show that each weight in $(0,1)$ occurs exactly once. On a reflected interval the original angle $\theta=2\pi-\vartheta$ runs in the opposite direction.

On the first order-four arc we can calculate the weight directly. Its data are $q=1$ and $s=m=4$, and $A+B=\pi/2$. The factor identity says $z-\beta=i(1-\beta)$, so

$$
z=\beta+(1-\beta)i,\qquad
\rho=\frac1{\cos\theta+\sin\theta},\qquad
\beta=\frac{\cos\theta}{\cos\theta+\sin\theta},
\quad 0\le\theta\le\frac\pi2.
$$

Direct differentiation gives $\beta'=-1/(\cos\theta+\sin\theta)^2<0$. At $\theta=\pi/4$ the two arrows have equal weight. We recover the matrix $(I+C_4)/2$ and the point $(1+i)/2$ from the beginning of the chapter. Moving along the segment toward $i$ increases the probability of taking the next step. At $i$ itself the transition is deterministic.

<!-- reader-figure:late-extra -->

Allowing the block weights to differ still gives a stochastic matrix. To decide whether one of its eigenvalues reaches this particular arc, we need its factor angles as well as its characteristic equation. Topic IX bounds the radius for a root with the required real sum of angles and forces equal weights at equality. The construction here selects the root attaining that bound among the roots of the equal-weight matrix.
