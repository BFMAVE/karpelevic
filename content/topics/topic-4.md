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

Taking an average of averages still gives an average of the original entries. In matrix language, if $H$ and $S$ are stochastic, then $HS$ has nonnegative entries and $(HS)\mathbf1=H(S\mathbf1)=H\mathbf1=\mathbf1$. We can take the averages in the reverse order and reach the same conclusion about the row sums of $SH$.

The two orders generally give different matrices. But suppose that $A=HS$ and that $S$ is invertible. Multiplying $A$ on the left by $S$ and on the right by $S^{-1}$ gives

$$
A'=SH=SAS^{-1}.
$$

Start with $Av=\zeta v$, where $v=(v_1,\ldots,v_N)^T$ lists the polygon vertices. Multiplication by $S$ gives $A'(Sv)=SAv=\zeta(Sv)$. Thus the entries of $Sv$ give a new list of complex coordinates for the same multiplier. We will choose $S$ so that just the coordinate $v_i$ changes.

We need both properties of the factors here. Stochasticity lets us read the rows of $A'$ as convex combinations. Invertibility makes $A'$ similar to $A$, and ensures that $Sv$ is still an eigenvector. Together they let us move a corner and continue to use $\zeta$.

To move $v_i$ towards $v_{i-1}$, first consider the matrix $E_i$ which replaces coordinate $i$ by coordinate $i-1$ and leaves all the others fixed. A second application copies exactly the same entry, giving $E_i^2=E_i$. We can move part of the way by averaging this operation with the identity. For $0\le t<1$ set

$$
S_i(t)=(1-t)I+tE_i,\qquad S_i(t)^{-1}=\frac{I-tE_i}{1-t},
$$

where $I$ denotes the identity. Multiplying the proposed inverse by $S_i(t)$ and using $E_i^2=E_i$ gives $I$. The new $i$th coordinate of the vertex list is $(1-t)v_i+tv_{i-1}$. We reach $c_i$ by choosing $t=\beta_i$.

There are two operations in each contact equation. One takes an average of neighbouring coordinates, and one shifts the index by $\kappa$. To write them as matrices, put

$$
(Cx)_r=x_{r+1},\qquad(Bx)_j=\beta_jx_{j-1}+\alpha_jx_j.
$$

For an arbitrary column $x$ with $N$ entries, $C$ reads the next coordinate and row $j$ of $B$ averages the two endpoints of side $j$. In particular $(C^\kappa Bv)_r=c_{r+\kappa}=\zeta v_r$, so $A=C^\kappa B$ realises our multiplier. To separate the desired factor $S_i(\beta_i)$ from $B$, first replace row $i$ of $B$ by the row that returns $x_i$ unchanged. Call this matrix $\widehat B$. We claim that

$$
B=\widehat B S_i(\beta_i),\qquad H=C^\kappa\widehat B.
$$

To check the first identity, apply $\widehat B S_i(\beta_i)$ to a column $x$, starting with $S_i(\beta_i)x$. Its $i$th coordinate is already the average wanted in row $i$ of $B$, and $\widehat B$ copies this entry. Row $i+1$ is the only other row that could read the modified coordinate. Its weight on that coordinate is $\beta_{i+1}=0$. This verifies the factorisation and explains why we chose the end of a run.

We can now reverse the factors in $A=H S_i(\beta_i)$. The rows of the new stochastic matrix express every $\zeta v'_j$ as a convex combination of the entries of $v'=S_i(\beta_i)v$. Their hull $P'$ is therefore invariant. There are $N$ entries and a polygon realising $\zeta$ needs at least $N$ vertices. Thus all $N$ are vertices of $P'$, and the contact theorem of Topic II puts every one of their images on the boundary of $P'$.

The new corners remain in cyclic order, since $v_i$ moved along the preceding side. We can use the same side labels to count the contacts again.

### The contact theorem controls the changed row

Put $j=i+\kappa$ and $t=\beta_i$. Before reversing the factors we copied coordinate $i$ in $\widehat B$. Moving $S_i(t)$ through the cyclic shift moves its row index from $i$ to $j$. Indeed $S_i(t)C^\kappa=C^\kappa S_j(t)$. The new averaging rows therefore come from $S_j(t)\widehat B$. Row $j$ now takes a fraction $t$ of the preceding row of $\widehat B$ and a fraction $1-t$ of its own. Apply it to the new vertex list $v'$. The three possible terms are

$$
t\widehat\beta_{j-1}v'_{j-2}
+\bigl(t\widehat\alpha_{j-1}+(1-t)\beta_j\bigr)v'_{j-1}
+(1-t)\alpha_jv'_j .
$$

A hat denotes the coefficient after replacing row $i$ by a copying row. Since $0<t<1$ and all endpoint coefficients $\widehat\alpha$ are positive, the last two vertices occur with positive weights. The sum is a boundary point by Topic II. A supporting functional reaches its maximum at this point, so each vertex with positive weight belongs to the same supporting line. The last two vertices already determine the side. Its line excludes $v'_{j-2}$, so the first coefficient is zero. We can now read off the coefficient at the ending vertex, $(1-t)\alpha_j=\alpha_i\alpha_j$.

Only sides $i$ and $i+\kappa$ can have changed their coefficients. On side $i$ the image is now the ending vertex. On side $i+\kappa$ the weight at the ending vertex has been multiplied by $\alpha_i$. The complete update is

$$
\alpha_i'=1,\qquad\alpha_{i+\kappa}'=\alpha_i\alpha_{i+\kappa},
\qquad\alpha_j'=\alpha_j\text{ at every other index}.
$$

We want to follow that product through several moves. Let $w_j=-\log\alpha_j$. Since $0<\alpha_j\le1$, this number is nonnegative, and it vanishes precisely when the image is the ending vertex. Taking logarithms gives

$$
w_i'=0,\qquad w_{i+\kappa}'=w_i+w_{i+\kappa}.
$$

For a permitted transfer in the selected polygon, take $\alpha_i=1/2$ and $\alpha_{i+\kappa}=1$. Their new values are $1$ and $1/2$: the positive weight $\log2$ moves from $i$ to $i+\kappa$, while the number of positive weights stays the same. Could the target already carry positive weight? If instead $\alpha_{i+\kappa}=3/4$, the new coefficient would be $3/8$, with weight $-\log(3/8)=-\log(1/2)-\log(3/4)$. Two positive weights would merge into one, reducing the minimum contact count. Thus every permitted move in the selected polygon has a target that previously had weight zero.

<!-- reader-figure:early -->

### Why all interior contacts form one run

Mark the indices $I=\{i:w_i>0\}$ and write $\varphi=|I|$. These marks are precisely the sides whose contacts lie in their interiors. If every index is marked, they already make one run around the polygon. Otherwise the final index $i$ of each run is marked and $i+1$ is unmarked. At such an index the move just proved replaces a corner by a point strictly inside the preceding side. The smaller polygon still has the smallest possible count of interior contacts.

Take a vertex of modulus one in our chosen polygon. Any move at a *different* vertex would leave it in place. We would then have produced a smaller area at the same scale and with the same count, which is impossible. The move at a run ending removes $v_i$ and replaces it by $c_i$ of modulus at most $\rho<1$. Thus the ending vertex of each run has to be the only vertex of modulus one. There can be just one such ending. Starting our numbering at the beginning of its run gives

$$
I=\{1,\ldots,\varphi\}.
$$

We tested each possible move on the polygon originally chosen to have smallest area. This is why we could compare the areas separately at the ends of two putative runs. For the sequence of moves below we use a different consequence which survives every move. The number of interior contacts is still the smallest possible, so a positive weight always moves to an unoccupied index.

After a transfer, a rescaling may be needed to put a vertex back at radius one. Rescaling has no effect on the number of interior contacts, so the next transfer still cannot merge two positive weights.

Let $\delta=\gcd(N,\kappa)$, the greatest common divisor. Adding $\kappa$ modulo $N$ runs through each residue class modulo $\delta$ separately. Every class meets $I$, or it would consist entirely of vertex-to-vertex contacts and would give $v=\zeta^{N/\delta}v$. Hence $\varphi\ge\delta$.

### A record in the cyclic shift

Write $[a]_N$ for the remainder in $\{0,\ldots,N-1\}$ after dividing $a$ by $N$. Suppose $\varphi<N$. For this calculation only, label the end of the run $0$, so its other indices are $N-\varphi+1,\ldots,N-1$. Leave those other weights in place and move the one initially at $0$. Its label after $t$ moves is $[t\kappa]_N$. As long as it is below $N-\varphi$, the next label in ordinary order is empty. We can therefore make another move of $\kappa$ places.

That block contains $\varphi\ge\delta$ consecutive residues, so it contains a multiple of $\delta$. The orbit of zero under addition by $\kappa$ visits every multiple of $\delta$, proving that an entrance occurs. The first entrance cannot land on an already positive index. It therefore lands exactly at $N-\varphi$. There is therefore a time $h>0$ such that

$$
[h\kappa]_N=N-\varphi,\qquad[t\kappa]_N<N-\varphi\quad(0\le t<h).
$$

Try this walk with $N=8$, $\kappa=3$ and two positive weights. In the temporary labelling they occupy $7$ and $0$. The weight at $0$ may move because label $1$ is empty. It lands on $3$. Its neighbour $4$ is empty too, so it moves again, arriving at $6$. This time its neighbour is the occupied label $7$. The walk stops. The residues visited were $0,3,6$, and $8-6=2$ recovers the number of occupied sides. Topic V will read the same three integers as information about return times.

At time $h$ the remainder first reaches $N-\varphi$. Every earlier remainder was smaller, which is what makes this value a *record*. Its distance from $N$ tells us exactly how many interior contacts there are. When all $N$ weights are positive, the initial value $0$ already has the required distance $N$ and we take $h=0$. In Topic V we use the times of these records to calculate how many steps separate successive visits to the marked sides.
