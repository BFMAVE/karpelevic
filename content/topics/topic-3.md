### Matching the images to the sides {#what-must-be-organised-before-we-can-multiply-equations}

Mark the $N$ vertices of $P$ on its boundary, then mark the $N$ images of these vertices in a second colour. Topic II puts all the second marks on the boundary and guarantees that each closed side contains one or more of them. Would it follow that each side has one image? An image at a corner already touches two sides. Counting it twice would leave too few images to describe the other side contacts.

We may choose our polygon. Fix the nonreal multiplier $\zeta$ at its largest modulus on its ray in $\Theta_N$, where $N\ge4$ is its least realising order and $0<|\zeta|<1$. Write $T(x)=\zeta x$. Our aim is to put the two kinds of marks in alternating order, allowing a vertex and an image to coincide. We first choose an invariant $N$-gon in which as many images as possible are already vertices. We then test what would happen if two consecutive image marks enclosed two old corners. Their joining chord gives us a smaller polygon to compare with the one we chose.

### Count interior contacts before minimising area

For a polygon with vertex set $V$, define

$$
d_T(P)=|\{v\in V:Tv\in V\}|,\qquad b_T(P)=|V|-d_T(P).
$$

The vertical bars around a finite set mean its number of elements. Because every image is on the boundary, $b_T(P)$ counts images strictly inside sides. An image at a vertex is excluded from this count.

Scale the polygon about zero until $\max_{x\in P}|x|=1$. Scaling preserves invariance and both counts. Among these normalised polygons, first minimise $b_T(P)$. Among polygons attaining this count choose one with the smallest area. The order matters. We will move vertices while controlling the count, and use area only when a replacement also preserves the chosen scale.

Without fixing scale, area could be made arbitrarily small just by multiplying every coordinate by $1/2$ repeatedly. Without first fixing the contact count, a smaller-area polygon might have more contacts to organise. The two choices solve different problems: the integer count prevents unnecessary branching in the image paths, and the fixed-scale area prevents a corner from being cut away while all those paths remain just as complicated.

These minima exist. Every vertex is in the closed unit disk, so a sequence has a subsequence with convergent vertex coordinates. Their convex hull remains invariant, contains zero, and has maximal radius one. The last two properties exclude collapse to a point. A nonreal rotation cannot preserve a nonzero line segment containing zero; therefore it cannot collapse to a segment. A limit with fewer than $N$ vertices would contradict the least realising order. Thus the limit is still an $N$-gon. Vertex-to-vertex equalities persist under limits, and new equalities can appear, so a minimum count is preserved. Area is continuous in the vertex coordinates and therefore attains its minimum on that class.

### Why a permitted cut cannot increase the count

Suppose another polygon $Q$ satisfies

$$
TP\subseteq Q\subseteq P,\qquad |\operatorname{ext}Q|=|\operatorname{ext}P|,
\qquad\operatorname{ext}Q\subseteq V\cup TV.
$$

Here $\operatorname{ext}$ denotes the vertices. The last condition says that every new vertex is the image of an old one. Since $TQ\subseteq TP\subseteq Q$, the new polygon is invariant.

The subtlety is that removing a vertex can destroy a vertex-to-vertex image relation. A new image vertex compensates for that loss. The following count matches those gains and losses without assuming that the particular old relation survives. It is the reason we restrict new vertices to old vertices and their images.

Let $R$ be the removed old vertices and $U$ the newly added vertices. Equal vertex counts give $|R|=|U|$. No removed vertex belongs to $TV$, because all of $TV$ lies in $Q$; an old vertex retained in $Q$ remains a vertex there. Because $T$ is one-to-one, the set $S=T^{-1}U$ contains exactly $|U|$ old vertices. Let $E$ be the old vertices that already mapped to old vertices.

Every vertex in $E\setminus R$ still maps to a retained old vertex. Every vertex in $S\setminus R$ maps to a new vertex. These two groups are disjoint. Therefore

$$
d_T(Q)\ge |E\setminus R|+|S\setminus R|
=|E|+|R|-|E\cap R|-|S\cap R|\ge |E|.
$$

The last inequality holds because $E\cap R$ and $S\cap R$ are disjoint subsets of $R$. Thus $b_T(Q)\le b_T(P)$. Minimum-count selection forces equality. If the cut retains a radius-one vertex, it also preserves normalisation, and a proper cut would reduce area. Such a cut is impossible for the selected polygon.

If a cut removes all vertices with radius one, restoring the original scale increases its area. We then have no area comparison with $P$. We use the area argument only for cuts that leave a radius-one vertex in place.

### Assign each corner contact only once

List the vertices of $TP$ as $y_1,\ldots,y_N$ counterclockwise. Both $y_j$ and $y_{j+1}$ lie on the boundary of the outer polygon $P$. Write $(y_j,y_{j+1}]$ for the arc **along that outer boundary** from one to the next, excluding its starting point and including its ending point. These arcs partition the boundary, so each old vertex is counted exactly once.

At a shared corner $v_i$, the incoming side $(v_{i-1},v_i]$ includes the point and the outgoing side $(v_i,v_{i+1}]$ excludes it. Nothing moves geometrically when we make this convention. It is a bookkeeping rule, like a half-open partition of a real interval, except that the included endpoint here is the ending one.

<!-- reader-figure:early -->

What difficulty can the choice of endpoint solve? Use the four corners $A,B,C,D$ of the square below. Place $y_1$ midway along $DA$, put $y_2=B$ and $y_3=C$, and place $y_4$ midway along $CD$. These are four marks for a counting example. Follow the *outer boundary* of the square from one mark to the next.

![The dashed chords cut across corners $A$ and $D$. Counting corners along the solid boundary, the arc from $y_1$ to $y_2$ passes through $A$ and ends at $B$. The arc from $y_3$ to $y_4$ begins at $C$ and passes no other corner.](/figures/half-open-boundary-count.svg)

| Corners counted on the arc | $y_1$ to $y_2$ | $y_2$ to $y_3$ | $y_3$ to $y_4$ | $y_4$ to $y_1$ |
|---|:---:|:---:|:---:|:---:|
| Include the end | $A,B$ | $C$ | none | $D$ |
| Include the start | $A$ | $B$ | $C$ | $D$ |

The second convention moves $B$ into the next arc and $C$ into the empty one. Now each arc receives one corner. Why does a *single* choice of endpoint always work for the polygon we selected? We use the area condition to rule out a second excess.

Cut $P$ along the line joining $y_j$ to $y_{j+1}$, retaining the half-plane containing $TP$. If their closed boundary arc contains $k_j$ old vertices, a proper cut has at most $N+2-k_j$ vertices: it discards those vertices and adds back the two image endpoints. The new polygon is invariant, so minimal order requires at least $N$ vertices. Consequently $k_j\le2$.

A cut with $k_j=2$ preserves the vertex count and cannot increase $b_T$. If it left a radius-one vertex in place, its smaller area would contradict our choice of $P$. Different discarded arcs are disjoint, so there is at most one such proper cut.

Let $r_j$ count old vertices on $(y_j,y_{j+1}]$, and let $\varepsilon_j$ be one when $y_j$ is an old vertex and zero otherwise. Then

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

**Ownership checkpoint.** A contact lands exactly at $v_i$. Which side owns it, and is its coefficient $\beta_i$ positive or zero?

<details class="reader-checkpoint-hint">
<summary>Hint</summary>

Use the included endpoint of $(v_{i-1},v_i]$, and then compare the contact with its two-endpoint formula.

</details>
<details class="reader-checkpoint-solution">
<summary>Solution</summary>

It belongs to $(v_{i-1},v_i]$, not $(v_i,v_{i+1}]$. Since $c_i=\beta_i v_{i-1}+(1-\beta_i)v_i=v_i$ and the endpoints are distinct, $\beta_i=0$. A side-interior contact instead has $\beta_i>0$.

</details>
</div>

Choose increasing real vertex angles $\Phi_i$ and continue them by $\Phi_{i+N}=\Phi_i+2\pi$. Retain the argument representative $0<\theta_\zeta<2\pi$ for the multiplier after any reflection. Each side spans less than half a turn because zero lies inside the polygon. Its image assignment gives

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
