### Matching the images to the sides {#what-must-be-organised-before-we-can-multiply-equations}

Mark the $N$ vertices of $P$ on its boundary, then mark the $N$ images of these vertices in a second colour. Topic II puts all the second marks on the boundary and guarantees that each closed side contains one or more of them. Would it follow that each side has one image? An image at a corner already touches two sides. Counting it twice would leave too few images to describe the other side contacts.

We may choose our polygon. Fix the nonreal multiplier $\zeta$ at its largest modulus on its ray in $\Theta_N$, where $N\ge4$ is its least realising order and $0<|\zeta|<1$. Write $T(x)=\zeta x$. Our aim is to put the two kinds of marks in alternating order, allowing a vertex and an image to coincide. We first choose an invariant $N$-gon in which as many images as possible are already vertices. We then test what would happen if two consecutive image marks enclosed two old corners. Their joining chord gives us a smaller polygon to compare with the one we chose.

### Count interior contacts before minimising area

Take a vertex $v$ in the vertex set $V$ of $P$ and ask whether its image $Tv$ is another vertex. To count the two possible answers, put

$$
d_T(P)=|\{v\in V:Tv\in V\}|,\qquad b_T(P)=|V|-d_T(P).
$$

Here $|V|$ is the number of vertices. The first count, $d_T(P)$, includes each starting vertex whose image is a vertex. Topic II puts every image on the boundary. Each of the remaining $b_T(P)$ starting vertices therefore has its image strictly between the endpoints of a side.

Scale the polygon about zero until $\max_{x\in P}|x|=1$. Scaling preserves invariance and both counts. Among these normalised polygons, first minimise $b_T(P)$. Among polygons attaining this count choose one with the smallest area. The order matters. We will move vertices while controlling the count, and use area only when a replacement also preserves the chosen scale.

Halving every vertex coordinate divides the area by four and leaves every contact of the same kind. This explains why an area comparison needs a fixed radius. It also explains what sort of smaller polygon would lead to a contradiction. A cut that preserves both the radius and the smallest possible value of $b_T$ gives a better choice of polygon. A cut that creates more images inside sides gives us no such comparison.

To see that we can make both choices, take a sequence of normalised polygons with the smallest contact count and areas tending to the infimum. All $N$ vertices lie in the closed unit disk. After taking a subsequence we may assume each vertex coordinate converges. The convex hull of the limits still contains zero and a point of modulus one. It is still invariant, since the inclusions $TP\subseteq P$ pass to the limit. A segment through zero cannot contain its image under multiplication by the nonreal number $\zeta$, so the limiting hull has interior. Fewer than $N$ vertices would contradict the choice of $N$.

There are only finitely many possible pairs $(i,j)$ with $Tv_i=v_j$. Pass to a further subsequence on which the list of equalities is fixed. Each equality persists in the limit. Thus the number of images inside sides can only fall, and it was already as small as possible. Finally, polygon area is continuous in the cyclically ordered coordinates, so the limiting polygon attains the desired area.

### Why a permitted cut cannot increase the count

We want to cut off part of $P$ and still have a polygon with the same multiplier and vertex count. Consider a choice of $Q$ for which

$$
TP\subseteq Q\subseteq P,\qquad |\operatorname{ext}Q|=|\operatorname{ext}P|,
\qquad\operatorname{ext}Q\subseteq V\cup TV.
$$

The notation $\operatorname{ext}Q$ means the set of vertices of $Q$. The inclusions already prove invariance. Indeed, applying $T$ to $Q\subseteq P$ gives $TQ\subseteq TP$, which is contained in $Q$. The last condition tells us where to look for the vertices introduced by the cut. Each is an image of an old vertex.

What happens to $d_T$ when a corner disappears? If the removed corner started a path from one vertex to another, we lose that path. On the other hand, each corner added by the cut is of the form $Tv$ and hence gives a possible endpoint. We count how many of these paths still have their starting vertex in $Q$.

Write $R=V\setminus\operatorname{ext}Q$ for the lost vertices and $U=\operatorname{ext}Q\setminus V$ for the new ones. The polygons have equally many vertices, so $|U|=|R|$. An old vertex lying in $Q$ is still a vertex of $Q$, since expressing it as an average of other points of $Q$ would also express it that way in $P$. In particular, no old vertex in $TV$ can be lost, because $TV\subseteq Q$. Each new vertex in $U$ has a unique old preimage under $T$. Write $S=T^{-1}U$ for these $|U|$ starting vertices, and $E=\{v\in V:Tv\in V\}$ for the starting vertices we counted in $P$.

For $v\in E\setminus R$, both $v$ and its old endpoint $Tv$ survive. For $v\in S\setminus R$, the endpoint $Tv$ is one of the new vertices. Each such $v$ counts towards $d_T(Q)$, and the two groups cannot overlap because their endpoints belong to disjoint sets. This gives

$$
d_T(Q)\ge |E\setminus R|+|S\setminus R|
=|E|+|R|-|E\cap R|-|S\cap R|\ge |E|.
$$

In the last step, at most $|R|$ starting vertices have been lost from the two groups together. Thus $d_T(Q)\ge d_T(P)$ and, since the total vertex count is fixed, $b_T(Q)\le b_T(P)$. Our choice of $P$ forces equal counts. If $Q$ also keeps a vertex of modulus one, its scale is already correct. Any proper cut would now give the same count and a smaller area, contradicting our second choice.

If a cut removes all vertices with radius one, restoring the original scale increases its area. We then have no area comparison with $P$. We use the area argument only for cuts that leave a radius-one vertex in place.

### Assign each corner contact only once

List the vertices of $TP$ as $y_1,\ldots,y_N$ counterclockwise. Both $y_j$ and $y_{j+1}$ lie on the boundary of the outer polygon $P$. Write $(y_j,y_{j+1}]$ for the arc **along that outer boundary** from one to the next, excluding its starting point and including its ending point. These arcs partition the boundary, so each old vertex is counted exactly once.

Imagine walking counterclockwise through the corner $v_i$. The side just completed is $(v_{i-1},v_i]$, so it counts the corner. The next side starts there and excludes it. In this way a mark right at a corner contributes to one side, just as a point at a division between two half-open intervals contributes to one interval.

<!-- reader-figure:early -->

What difficulty can the choice of endpoint solve? Use the four corners $A,B,C,D$ of the square below. Place $y_1$ midway along $DA$, put $y_2=B$ and $y_3=C$, and place $y_4$ midway along $CD$. These are four marks for a counting example. Follow the *outer boundary* of the square from one mark to the next.

![The dashed chords cut across corners $A$ and $D$. Counting corners along the solid boundary, the arc from $y_1$ to $y_2$ passes through $A$ and ends at $B$. The arc from $y_3$ to $y_4$ begins at $C$ and passes no other corner.](/figures/half-open-boundary-count.svg)

| Corners counted on the arc | $y_1$ to $y_2$ | $y_2$ to $y_3$ | $y_3$ to $y_4$ | $y_4$ to $y_1$ |
|---|:---:|:---:|:---:|:---:|
| Include the end | $A,B$ | $C$ | none | $D$ |
| Include the start | $A$ | $B$ | $C$ | $D$ |

The second convention moves $B$ into the next arc and $C$ into the empty one. Now each arc receives one corner. Why does a *single* choice of endpoint always work for the polygon we selected? We use the area condition to rule out a second excess.

Join $y_j$ to $y_{j+1}$ by a line and keep the part of $P$ on the same side as $TP$. Suppose this cuts off a corner or several corners. To count the remaining vertices, erase the $k_j$ old vertices on the closed boundary arc from $y_j$ to $y_{j+1}$ and put back its two endpoints. This gives at most $N-k_j+2$ vertices, including endpoints that were themselves old vertices. The polygon still contains $TP$ and lies in $P$. It is therefore invariant and has at least $N$ vertices. The two bounds give $k_j\le2$.

A cut with $k_j=2$ preserves the vertex count and cannot increase $b_T$. If it left a radius-one vertex in place, its smaller area would contradict our choice of $P$. Different discarded arcs are disjoint, so there is at most one such proper cut.

To count without duplication, let $r_j$ be the number of old vertices on the arc with its end included, $(y_j,y_{j+1}]$. We recover $k_j$ by putting back the starting point if it too is an old vertex. Denote this extra contribution by $\varepsilon_j$, equal to one in that case and zero otherwise. Because the half-open arcs partition the boundary, we obtain

$$
\sum_j r_j=N,\qquad k_j=r_j+\varepsilon_j,\qquad 0\le r_j\le2.
$$

A chord that already lies on a side makes no cut. Its half-open boundary arc contains at most one old vertex. Consequently an arc with $r_j=2$ always makes a proper cut, and at most one such arc exists. The sum of the $N$ counts is $N$. If they are not all one, we have exactly one double count and exactly one empty arc. Call their indices $s$ and $t$.

Look at the ends of the doubled arc. Since $r_s=2$ and $k_s\le2$, its starting point is not an old vertex. Its ending point *is* an old vertex. Otherwise the two counted corners would both be strictly between $y_s$ and $y_{s+1}$. The side joining those two corners would contain no image vertex. Yet Topic II guarantees a contact there. A linear functional supporting that side attains its maximum on $TP$ at some image vertex, which gives the contradiction.

The sequence $\varepsilon_j$ therefore changes from zero to one at $s$. Where can it change back? If it changes from one to zero at a position with $r_j=1$, then $k_j=2$. Its chord makes a proper cut. Indeed an uncut arc going from an old corner to a point inside the same side would have $r_j=0$. This would be a second proper cut with $k_j=2$. The only available change back to zero is at $t$. Since the sequence is cyclic, these are its only two changes.

Now count with the starting endpoint included instead. We gain the old vertex at the start if $\varepsilon_j=1$, and lose the one at the end if $\varepsilon_{j+1}=1$. Thus

$$
|V\cap[y_j,y_{j+1})|=r_j+\varepsilon_j-\varepsilon_{j+1}=1.
$$

At $s$ the count falls from two to one, at $t$ it rises from zero to one, and at every other position it stays one. We have found a direction in which the two sets of marks alternate. More explicitly, if $u_j$ is the unique old vertex in $[y_j,y_{j+1})$, then $y_j$ belongs to $(u_{j-1},u_j]$. If the original arcs $(y_j,y_{j+1}]$ already had one old vertex each, the image lies on the half-open side with the *starting* endpoint included instead. Reflect both polygon and multiplier across the real axis in this case. Relabelling counterclockwise reverses the endpoint convention and gives the desired assignment $(v_{i-1},v_i]$ in either case.

### The contact equations and their real angular lift

Multiplication by $\zeta$ preserves cyclic order. Once we know which side receives the first image, each succeeding image belongs to the succeeding side. The assignment is a constant cyclic shift. For some $1\le\kappa<N$,

$$
c_i=\zeta v_{i-\kappa}=\beta_i v_{i-1}+\alpha_i v_i,
\qquad \alpha_i=1-\beta_i>0,\quad 0\le\beta_i<1.
$$

All vertex indices are read modulo $N$. The coefficient $\beta_i=0$ means the image is the ending vertex; $\beta_i>0$ means it is strictly inside the side. There is one apparent extra possibility, a shift of zero modulo $N$. In that case $c_i=\zeta v_i$ cannot equal $v_i$, because $v_i\ne0$ and $|\zeta|<1$. Every contact then lies strictly between its endpoints. Reflection interchanges the endpoints of every side in the cyclic order, so the image of each vertex now belongs to the side ending at its successor. This gives $\kappa=1$.

<div class="reader-checkpoint" data-retrieval-checkpoint>

**Check the endpoint convention.** Suppose the image on side $i$ is the corner $v_i$ itself. To which half-open side do we assign it? How much weight can its expression as an average give to $v_{i-1}$?

<details class="reader-checkpoint-hint">
<summary>Hint</summary>

Write down the two sides meeting at $v_i$. Locate the closed bracket in each interval, then set $c_i=v_i$ in the contact equation.

</details>
<details class="reader-checkpoint-solution">
<summary>Solution</summary>

The ending bracket places $v_i$ on $(v_{i-1},v_i]$. In the expression for $c_i$, subtract $v_i$ from both sides. This gives $\beta_i(v_{i-1}-v_i)=0$. The vertices are distinct, hence $\beta_i=0$. As soon as the contact moves strictly between these two vertices, both weights are positive.

</details>
</div>

Follow the vertices counterclockwise and keep a running angle $\Phi_i$, adding $2\pi$ each time we go round the polygon. Thus $\Phi_{i+N}=\Phi_i+2\pi$. From the interior point zero, a side subtends an angle strictly less than $\pi$. As a point moves from $v_{i-1}$ to $v_i$ along that side, its angle runs from $\Phi_{i-1}$ to $\Phi_i$. Use $0<\theta_\zeta<2\pi$ for the angle of the multiplier after any reflection. Rotating $v_{i-\kappa}$ through this angle places its image on side $i$. The location of that image and the bounds on the rotation angle are

$$
\Phi_{i-1}<\Phi_{i-\kappa}+\theta_\zeta\le\Phi_i,
\qquad\frac{\kappa-1}{N}<\frac{\theta_\zeta}{2\pi}<\frac\kappa N.
$$

There is no hidden multiple of $2\pi$ in the first inequality. After subtracting $\Phi_{i-\kappa}$, its interval lies between zero and $2\pi$, because $1\le\kappa<N$; the chosen $\theta_\zeta$ lies there too. The geometric argument relation therefore selects this exact representative. To sum the upper bounds, write $\Phi_i-\Phi_{i-\kappa}$ as the sum of the $\kappa$ angle gaps from index $i-\kappa$ to $i$. As $i$ runs around the polygon, each of the $N$ gaps occurs exactly $\kappa$ times. The gaps together make $2\pi$, so the upper bounds sum to $2\pi\kappa$. Each lower bound has one fewer gap. We obtain $2\pi(\kappa-1)<N\theta_\zeta\le2\pi\kappa$. Equality at the upper bound would make every image a vertex; following that finite cycle would give $v=\zeta^L v$ for a positive integer $L$, impossible when $v\ne0$ and $|\zeta|<1$.

The angle already determines the shift. For the eight-state example we will meet again, $N=8$ and $\theta_\zeta=5\pi/7$. Its angle in turns is $5/14$, and
$$
2<8\cdot\frac{5}{14}=\frac{20}{7}<3.
$$
So $\kappa=3$. An image starting at $v_1$ belongs to side $4$. Its exact position on that side still depends on the polygon. The next chapter asks which of these positions are genuine averages and which coincide with the ending vertex.
