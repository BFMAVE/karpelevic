### Move a vertex without changing the eigenvalue

Topic III gave a normalised invariant $N$-gon $P$, chosen first to minimise the number of images inside sides and then to minimise area. Its vertices are $v_i$ in counterclockwise order, with indices modulo $N$, and

$$
\zeta v_{i-\kappa}=c_i=\beta_i v_{i-1}+\alpha_i v_i,
\qquad \alpha_i=1-\beta_i>0.
$$

The positive coefficients $\beta_i$ identify the sides with interior contacts. We will show that their indices form one consecutive run. The permitted move is concrete: if $\beta_i>0$ and $\beta_{i+1}=0$, replace $v_i$ by its side contact $c_i$. The proof must verify invariance and preserve the eigenvalue; a picture of a smaller polygon alone does not do that.

Think of following vertex images until a path reaches a point inside a side. Those points are the places where the motion stops being a permutation of vertices and becomes an average of two endpoints. Fewer such stopping places make the later path equations simpler. The operation below moves one stopping place along the index shift while retaining the same eigenvalue, so two stopping places cannot collide when the count has already been minimised.

### Reversing stochastic factors

A row-stochastic matrix has nonnegative entries and row sums one. Products of such matrices are row-stochastic, because multiplying a vector of all ones still gives that vector and all product entries are nonnegative.

Suppose $A=HS$, where $H,S$ are row-stochastic and $S$ is invertible. Reversing the factors gives

$$
A'=SH=SAS^{-1}.
$$

Thus $A'$ is stochastic and similar to $A$. Similarity preserves eigenvalues: if $Av=\zeta v$, then $A'(Sv)=\zeta(Sv)$. We use a matrix $S$ that changes just one coordinate of the vertex vector $v=(v_1,\ldots,v_N)^T$.

The factor order has two separate jobs. Both factors are stochastic, so either order still gives nonnegative averaging rows. Invertibility of $S$ makes the reversal a change of basis, so the eigenvalue does not move. An arbitrary inward corner movement would give neither assurance; the factorisation is what makes this particular geometric move legitimate.

Define $E_i$ to copy coordinate $i-1$ into coordinate $i$, leaving every other coordinate unchanged. It satisfies $E_i^2=E_i$. For $0\le t<1$,

$$
S_i(t)=(1-t)I+tE_i,\qquad S_i(t)^{-1}=\frac{I-tE_i}{1-t},
$$

where $I$ is the identity matrix. The transformed vertex is $(1-t)v_i+t v_{i-1}$. With $t=\beta_i$, it is exactly $c_i$.

To see the factorisation, define matrices $C$ and $B$ by

$$
(Cx)_r=x_{r+1},\qquad(Bx)_j=\beta_jx_{j-1}+\alpha_jx_j.
$$

Here $x$ is any column vector of $N$ coordinates. The contact equations say that $A=C^\kappa B$ satisfies $Av=\zeta v$. Replace row $i$ of $B$ by the row that copies coordinate $i$, calling the result $\widehat B$. Then

$$
B=\widehat B S_i(\beta_i),\qquad H=C^\kappa\widehat B.
$$

Right multiplication restores row $i$. The only other row that could change is row $i+1$, and it does not use coordinate $i$ because $\beta_{i+1}=0$. This explains the condition on the neighbouring contact.

The new eigenvector has one moved vertex, so its convex hull $P'$ is invariant. It has at most $N$ vertices; least realising order forces exactly $N$. Topic II's universal contact theorem applies to $P'$ as well: every vertex image is on its boundary.

The algebra and the geometry are two descriptions of the same replacement:

| Check | Matrix description | Polygon description |
| --- | --- | --- |
| Fixed data | $A$ and $A'=SAS^{-1}$ have the same eigenvalue $\zeta$. | The multiplier $z\mapsto\zeta z$ is unchanged. |
| Changed data | The eigenvector becomes $Sv$; only coordinate $i$ changes. | Corner $v_i$ moves to its known contact $c_i$. |
| Admissibility | Reversing the stochastic factors keeps entries nonnegative and row sums one. | The new coordinate hull is invariant and has at most $N$ vertices. |
| Vertex budget | Least realizing order excludes a smaller realization. | No coordinate can disappear from the extreme vertex list: $P'$ still has $N$ corners. |
| Contact constraints | Universal saturation and the face rule remove any third positive coefficient in a changed row. | Every vertex image stays on a single vertex or side face. |

The next calculation determines the new contact count; being a smaller-looking polygon is not enough to establish that count.

### The contact theorem controls the changed row

Set $j=i+\kappa$, modulo $N$. Reversing the factors changes one additional contact row. Before using geometry, that row can involve three consecutive vertices $v'_{j-2},v'_{j-1},v'_j$. The coefficients at the last two vertices are positive. Its image is on the boundary of $P'$.

A boundary point expressed as a convex combination can use positive weights only on one supporting face. Indeed, a linear functional maximal at the boundary point is at most that maximum on every vertex. A weighted average can attain the maximum only if each positive-weight vertex attains it. Two consecutive distinct vertices already determine the side; a third polygon vertex cannot lie on it. The coefficient at $v'_{j-2}$ must therefore vanish.

Consequently the new contacts retain the same two-endpoint form, with

$$
\alpha_i'=1,\qquad\alpha_{i+\kappa}'=\alpha_i\alpha_{i+\kappa},
\qquad\alpha_j'=\alpha_j\text{ at every other index}.
$$

Introduce $w_j=-\log\alpha_j\ge0$. The update becomes addition:

$$
w_i'=0,\qquad w_{i+\kappa}'=w_i+w_{i+\kappa}.
$$

For a permitted transfer in the selected polygon, take $\alpha_i=1/2$ and $\alpha_{i+\kappa}=1$. Their new values are $1$ and $1/2$: the positive weight $\log2$ moves from $i$ to $i+\kappa$, while the number of positive weights stays the same. Why must the target have weight zero? If instead $\alpha_{i+\kappa}=3/4$, the new coefficient would be $3/8$, with weight $-\log(3/8)=-\log(1/2)-\log(3/4)$. Two positive weights would merge into one, reducing the minimum contact count. Thus every permitted move in the selected polygon has a target that previously had weight zero.

<!-- reader-figure:early -->

The numerical update in the figure shows the allowed transfer. The two-positive-weight calculation is the contradiction that excludes a collision; those data cannot occur at a permitted move in our selected polygon. Later transfers preserve the contact count by the same zero-target rule.

### Why all interior contacts form one run

Let $I=\{i:w_i>0\}$ and $\varphi=|I|$. If $I$ contains every index, it is already one cyclic run. Otherwise each run has an ending index with $\beta_i>0$ and $\beta_{i+1}=0$, so the move applies there. It removes part of a corner and produces a proper subpolygon with the same minimum count.

Every contact has modulus at most $\rho<1$. If any radius-one vertex other than $v_i$ remained, the subpolygon would still be normalised and would have smaller area. Therefore the ending vertex of each run would have to be the unique radius-one vertex. Two distinct runs have different ending vertices, which is impossible. After choosing the starting label, we have

$$
I=\{1,\ldots,\varphi\}.
$$

The area argument is applied separately to the original polygon at each possible run ending. It does not assume that successive intermediate polygons continue to minimise area. Once one run has been obtained, later transfers preserve only the minimum contact count; that is enough to prevent a weight collision.

There are consequently two different contradictions available. A collision reduces the contact count and is forbidden at every count-minimizing intermediate polygon. A proper inward replacement reduces area only when another radius-one vertex remains; that contradiction uses the original count-then-area choice. Keeping these hypotheses separate is what makes the later repeated weight walk legitimate.

Let $\delta=\gcd(N,\kappa)$, the greatest common divisor. Adding $\kappa$ modulo $N$ runs through each residue class modulo $\delta$ separately. Every class must meet $I$, or it would consist entirely of vertex-to-vertex contacts and would give $v=\zeta^{N/\delta}v$. Hence $\varphi\ge\delta$.

### A record in the cyclic shift

For an integer $a$, write $[a]_N$ for its residue in $\{0,\ldots,N-1\}$. If $\varphi<N$, relabel the positive indices temporarily as $\{N-\varphi+1,\ldots,N-1\}\cup\{0\}$. Move the weight at zero repeatedly by the permitted operation. Before reaching the final block, its successive positions are $[t\kappa]_N<N-\varphi$, so its next ordinary neighbour has zero weight and the operation remains available.

That block contains $\varphi\ge\delta$ consecutive residues, so it contains a multiple of $\delta$. The orbit of zero under addition by $\kappa$ visits every multiple of $\delta$, proving that an entrance occurs. The first entrance cannot land on an already positive index. It must land exactly at $N-\varphi$. There is therefore a time $h>0$ such that

$$
[h\kappa]_N=N-\varphi,\qquad[t\kappa]_N<N-\varphi\quad(0\le t<h).
$$

The new residue exceeds every earlier one: it is a strict record. For $\varphi=N$, the initial record at time zero has deficit $N$. Topic V translates these records into exact first-return paths; later moves require only the minimum contact count, so rescaling them never requires a new area-minimisation argument.
