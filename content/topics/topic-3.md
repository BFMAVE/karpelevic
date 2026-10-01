### What must be organised before we can multiply equations

Topic II fixed a nonreal number $\zeta=\rho e^{i\theta_\zeta}$, with $0<\rho<1$, whose modulus is maximal at its angle. Its least stochastic realising order is $N\ge4$. The map $T(x)=\zeta x$ rotates the plane and then contracts it. There is a convex polygon $P$ with exactly $N$ vertices, with zero in its interior, such that $TP\subseteq P$.

Every vertex image lies on the boundary of $P$, and every side meets $TP$. These properties apply to every invariant polygon with at most $N$ vertices for this same $\zeta$. The remaining problem is organisation: an image might be an old vertex or might lie strictly between the endpoints of a side. We want one unambiguous image assignment per side.

### Count interior contacts before minimising area

For a polygon with vertex set $V$, define

$$
d_T(P)=|\{v\in V:Tv\in V\}|,\qquad b_T(P)=|V|-d_T(P).
$$

The vertical bars around a finite set mean its number of elements. Because every image is on the boundary, $b_T(P)$ counts images strictly inside sides. An image at a vertex is excluded from this count.

Scale the polygon about zero until $\max_{x\in P}|x|=1$. Scaling preserves invariance and both counts. Among these normalised polygons, first minimise $b_T(P)$; among the minimisers of that count, minimise area. The order matters. We will move vertices while controlling the count, and use area only when a replacement also preserves the chosen scale.

These minima exist. Every vertex is in the closed unit disk, so a sequence has a subsequence with convergent vertex coordinates. Their convex hull remains invariant, contains zero, and has maximal radius one. The last two properties exclude collapse to a point. A nonreal rotation cannot preserve a nonzero line segment containing zero; therefore it cannot collapse to a segment. A limit with fewer than $N$ vertices would contradict the least realising order. Thus the limit is still an $N$-gon. Vertex-to-vertex equalities persist under limits, and new equalities can appear, so a minimum count is preserved. Area is continuous in the vertex coordinates and therefore attains its minimum on that class.

### Why a permitted cut cannot increase the count

Suppose another polygon $Q$ satisfies

$$
TP\subseteq Q\subseteq P,\qquad |\operatorname{ext}Q|=|\operatorname{ext}P|,
\qquad\operatorname{ext}Q\subseteq V\cup TV.
$$

Here $\operatorname{ext}$ denotes the vertices. The last condition says that every new vertex is the image of an old one. Since $TQ\subseteq TP\subseteq Q$, the new polygon is invariant.

Let $R$ be the removed old vertices and $U$ the newly added vertices. Equal vertex counts give $|R|=|U|$. No removed vertex belongs to $TV$, because all of $TV$ lies in $Q$; an old vertex retained in $Q$ remains a vertex there. Because $T$ is one-to-one, the set $S=T^{-1}U$ contains exactly $|U|$ old vertices. Let $E$ be the old vertices that already mapped to old vertices.

Every vertex in $E\setminus R$ still maps to a retained old vertex. Every vertex in $S\setminus R$ maps to a new vertex. These two groups are disjoint. Therefore

$$
d_T(Q)\ge |E\setminus R|+|S\setminus R|
=|E|+|R|-|E\cap R|-|S\cap R|\ge |E|.
$$

The last inequality holds because $E\cap R$ and $S\cap R$ are disjoint subsets of $R$. Thus $b_T(Q)\le b_T(P)$. Minimum-count selection forces equality. If the cut retains a radius-one vertex, it also preserves normalisation, and a proper cut would reduce area. Such a cut is impossible for the selected polygon.

### Assign each corner contact only once

List the vertices of $TP$ as $y_1,\ldots,y_N$ counterclockwise. The boundary arc $(y_j,y_{j+1}]$ excludes its starting point and includes its ending point. These arcs partition the boundary, so each old vertex is counted exactly once.

Cut $P$ along the line joining $y_j$ to $y_{j+1}$, retaining the half-plane containing $TP$. If their closed boundary arc contains $k_j$ old vertices, a proper cut has at most $N+2-k_j$ vertices: it discards those vertices and adds back the two image endpoints. The new polygon is invariant, so minimal order requires at least $N$ vertices. Consequently $k_j\le2$.

A cut with $k_j=2$ preserves the vertex count and cannot increase $b_T$. It must therefore remove every radius-one vertex, or it would contradict minimum area. Different discarded arcs are disjoint, so there is at most one such proper cut.

Let $r_j$ count old vertices on $(y_j,y_{j+1}]$, and let $\varepsilon_j$ be one when $y_j$ is an old vertex and zero otherwise. Then

$$
\sum_j r_j=N,\qquad k_j=r_j+\varepsilon_j,\qquad 0\le r_j\le2.
$$

There is at most one count of two. Either every $r_j=1$, or exactly one is two and exactly one is zero. In the latter case, the count of two forces a change from a nonvertex image to a vertex image. Every change back must occur at the count of zero; another would create a second forbidden cut with $k_j=2$. Switching endpoint conventions therefore changes every count to one:

$$
|V\cap[y_j,y_{j+1})|=r_j+\varepsilon_j-\varepsilon_{j+1}=1.
$$

Every side meets $TP$, as Topic II proved. This excludes the possibility that the two counted old vertices sit strictly inside an image-to-image arc with no image vertex on their joining side. That is the geometric fact needed in the preceding endpoint argument.

The images and old vertices consequently alternate in one of these two endpoint conventions. Reflect across the real axis if necessary. Reflection reverses boundary order and replaces $\zeta$ by its conjugate. We can arrange that each half-open side $(v_{i-1},v_i]$ contains exactly one image vertex.

### The contact equations and their real angular lift

Multiplication by $\zeta$ preserves cyclic order. The assignment must therefore be one constant cyclic shift. For some $1\le\kappa<N$,

$$
c_i=\zeta v_{i-\kappa}=\beta_i v_{i-1}+\alpha_i v_i,
\qquad \alpha_i=1-\beta_i>0,\quad 0\le\beta_i<1.
$$

All vertex indices are read modulo $N$. The coefficient $\beta_i=0$ means the image is the ending vertex; $\beta_i>0$ means it is strictly inside the side. The exceptional shift $N$ can be converted to shift one by reflection, so it need not be retained.

Choose increasing real vertex angles $\Phi_i$ and continue them by $\Phi_{i+N}=\Phi_i+2\pi$. Each side spans less than half a turn because zero lies inside the polygon. Its image assignment gives

$$
\Phi_{i-1}<\Phi_{i-\kappa}+\theta_\zeta\le\Phi_i,
\qquad\frac{\kappa-1}{N}<\frac{\theta_\zeta}{2\pi}<\frac\kappa N.
$$

Summing yields the angle bounds. Equality at the upper bound would make every image a vertex; following the resulting finite cycle would give $v=\zeta^L v$ for a positive integer $L$, impossible when $v\ne0$ and $|\zeta|<1$.

As a small check, if $\beta_i=1/4$, then $c_i=(1/4)v_{i-1}+(3/4)v_i$ is inside the side and contributes one to $b_T$. If $\beta_i=0$, it contributes zero and belongs only to the half-open side ending at $v_i$. This convention prevents double counting throughout the later return paths.
