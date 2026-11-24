### Move a vertex without changing the eigenvalue

At a side with an interior contact, an orbit that has so far followed vertices reaches a genuine average of two different vertices. We would like all these transitions to occur on one run of consecutive sides. The polygon chosen in Topic III gives us some freedom to arrange this. It minimises the number of images in open sides, then minimises area after scaling its largest vertex radius to one.

Write the contact on the side ending at $v_i$ as

$$
\zeta v_{i-\kappa}=c_i=\beta_i v_{i-1}+\alpha_i v_i,
\qquad \alpha_i=1-\beta_i>0.
$$

Suppose this contact is inside its side and the next contact is a vertex, so $\beta_i>0$ and $\beta_{i+1}=0$. Try replacing the corner $v_i$ by $c_i$. The smaller polygon has retained the image that previously landed on this side. But the moved corner has its own image under $\zeta$. Where does that image go? We will calculate it by changing one coordinate of the eigenvector. This gives a stochastic matrix for the smaller polygon and tells us exactly which contact has moved.

Consider the eight-state indices from Topic III, with shift $\kappa=3$. Suppose only sides 1 and 2 receive images between their endpoints, as in the [worked octagon](/proof/topic-xiv/#guide-14-checking-the-actual-invariant-octagon). Move $v_2$ to $v'_2=c_2=\beta_2v_1+\alpha_2v_2$. Two images explain what this move does. First, $\zeta v_7=c_2=v'_2$, so the old contact on side 2 becomes a corner. Next, by linearity,
$$
\zeta v'_2=\beta_2\zeta v_1+\alpha_2\zeta v_2
          =\beta_2 v_4+\alpha_2 v_5.
$$
The last equality uses the fact that sides 4 and 5 each received an image at their ending corner. Both those corners stay fixed. Hence the moved vertex now lands between $v_4$ and $v_5$. We have transferred the contact from side 2 to side 5, three places ahead. The matrix calculation explains why a transfer works at the end of any run.

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

The new corners remain in cyclic order, since $v_i$ moved along the preceding side. We can use the same side labels to count the contacts again.

### The contact theorem controls the changed row

Put $j=i+\kappa$ and $t=\beta_i$. Before reversing the factors we copied coordinate $i$ in $\widehat B$. Moving $S_i(t)$ through the cyclic shift moves its row index from $i$ to $j$. Indeed $S_i(t)C^\kappa=C^\kappa S_j(t)$. The new averaging rows therefore come from $S_j(t)\widehat B$. Row $j$ now takes a fraction $t$ of the preceding row of $\widehat B$ and a fraction $1-t$ of its own. Apply it to the new vertex list $v'$. The three possible terms are

$$
t\widehat\beta_{j-1}v'_{j-2}
+\bigl(t\widehat\alpha_{j-1}+(1-t)\beta_j\bigr)v'_{j-1}
+(1-t)\alpha_jv'_j .
$$

A hat denotes the coefficient after replacing row $i$ by a copying row. Since $0<t<1$ and all endpoint coefficients $\widehat\alpha$ are positive, the last two vertices occur with positive weights. The sum is a boundary point by Topic II. A supporting functional reaches its maximum at this point, so each vertex with positive weight belongs to the same supporting line. The last two vertices already determine the side. Its line excludes $v'_{j-2}$, so the first coefficient is zero. We can now read off the coefficient at the ending vertex, $(1-t)\alpha_j=\alpha_i\alpha_j$.

Consequently the new contacts retain the same two-endpoint form, with

$$
\alpha_i'=1,\qquad\alpha_{i+\kappa}'=\alpha_i\alpha_{i+\kappa},
\qquad\alpha_j'=\alpha_j\text{ at every other index}.
$$

Introduce $w_j=-\log\alpha_j\ge0$. The update becomes addition:

$$
w_i'=0,\qquad w_{i+\kappa}'=w_i+w_{i+\kappa}.
$$

For a permitted transfer in the selected polygon, take $\alpha_i=1/2$ and $\alpha_{i+\kappa}=1$. Their new values are $1$ and $1/2$: the positive weight $\log2$ moves from $i$ to $i+\kappa$, while the number of positive weights stays the same. Could the target already carry positive weight? If instead $\alpha_{i+\kappa}=3/4$, the new coefficient would be $3/8$, with weight $-\log(3/8)=-\log(1/2)-\log(3/4)$. Two positive weights would merge into one, reducing the minimum contact count. Thus every permitted move in the selected polygon has a target that previously had weight zero.

<!-- reader-figure:early -->

### Why all interior contacts form one run

Let $I=\{i:w_i>0\}$ and $\varphi=|I|$. If $I$ contains every index, it is already one cyclic run. Otherwise each run has an ending index with $\beta_i>0$ and $\beta_{i+1}=0$, so the move applies there. It removes part of a corner and produces a proper subpolygon with the same minimum count.

Every contact has modulus at most $\rho<1$. If any radius-one vertex other than $v_i$ remained, the subpolygon would still be normalised and would have smaller area. Therefore the ending vertex of each run would have to be the unique radius-one vertex. Two distinct runs have different ending vertices, which is impossible. After choosing the starting label, we have

$$
I=\{1,\ldots,\varphi\}.
$$

The area argument is applied separately to the original polygon at each possible run ending. It does not assume that successive intermediate polygons continue to minimise area. Once one run has been obtained, later transfers preserve only the minimum contact count; that is enough to prevent a weight collision.

After a transfer, a rescaling may be needed to put a vertex back at radius one. Rescaling has no effect on the number of interior contacts, so the next transfer still cannot merge two positive weights.

Let $\delta=\gcd(N,\kappa)$, the greatest common divisor. Adding $\kappa$ modulo $N$ runs through each residue class modulo $\delta$ separately. Every class meets $I$, or it would consist entirely of vertex-to-vertex contacts and would give $v=\zeta^{N/\delta}v$. Hence $\varphi\ge\delta$.

### A record in the cyclic shift

For an integer $a$, write $[a]_N$ for its residue in $\{0,\ldots,N-1\}$. If $\varphi<N$, relabel the positive indices temporarily as $\{N-\varphi+1,\ldots,N-1\}\cup\{0\}$. Move the weight at zero repeatedly by the permitted operation. Before reaching the final block, its successive positions are $[t\kappa]_N<N-\varphi$, so its next ordinary neighbour has zero weight and the operation remains available.

That block contains $\varphi\ge\delta$ consecutive residues, so it contains a multiple of $\delta$. The orbit of zero under addition by $\kappa$ visits every multiple of $\delta$, proving that an entrance occurs. The first entrance cannot land on an already positive index. It therefore lands exactly at $N-\varphi$. There is therefore a time $h>0$ such that

$$
[h\kappa]_N=N-\varphi,\qquad[t\kappa]_N<N-\varphi\quad(0\le t<h).
$$

Try this walk with $N=8$, $\kappa=3$ and two positive weights. In the temporary labelling they occupy $7$ and $0$. The weight at $0$ may move because label $1$ is empty. It lands on $3$. Its neighbour $4$ is empty too, so it moves again, arriving at $6$. This time its neighbour is the occupied label $7$. The walk stops. The residues visited were $0,3,6$, and $8-6=2$ recovers the number of occupied sides. Topic V will read the same three integers as information about return times.

The new residue exceeds every earlier one: it is a strict record. For $\varphi=N$, the initial record at time zero has deficit $N$. Topic V translates these records into exact first-return paths; later moves require only the minimum contact count, so rescaling them never requires a new area-minimisation argument.
