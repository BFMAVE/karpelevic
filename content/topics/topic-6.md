### Why a return cannot skip a base

In the eight-vertex calculation of Topic V, base $1$ returns to the side ending at base $2$, and base $2$ returns to the side ending at base $1$. With seven bases, arithmetic alone would also allow a return that adds three to each base label. Then base $1$ would return on the side ending at base $4$. What property of a boundary eigenvalue rules out such a skip?

Assume $N\ge4$ and $\varphi>\gcd(N,\kappa)$, the case in which the record for $\varphi$ has a successor. The first returns add $\Delta$ modulo $\varphi$ and take $q$ or $q+h$ steps, with

$$
q\varphi+h\Delta=N,\qquad1\le\Delta<\varphi,
\qquad\gcd(\Delta,\varphi)=\gcd(N,\kappa).
$$

Suppose $\Delta>1$. Along the boundary there is space between a moving base and the side that receives its return. We use those intermediate vertices to adjust the side lines one at a time. Each has to pass through an already known contact. At the last side we can make the returning point fall strictly inside the polygon. Moving all the higher vertices along with their bases then preserves containment for the same map $F(x)=\zeta x$.

The contradiction uses the word *every* in Topic II. The deformed polygon still has $N$ vertices and is invariant under $F$, so even here each vertex image has to touch the boundary. Our construction would give a vertex whose image lies in the interior.

### Lesson 1: find the lines along which bases may move

Draw a line through a side of $P$. All of $P$ lies on one side of the line. Such a line **supports** $P$, and we can describe it by an equation $\ell(x)=c$ with $\ell$ linear and $\ell(x)\le c$ throughout $P$. The points where equality holds form a side or a single vertex. We call these sets faces and also count $P$ itself as a face. Thus a point between the ends of a side belongs to two faces, that side and $P$. The side is the smaller one.

Let $x=(1-t)a+tb$ lie between the distinct endpoints of a side, with $0<t<1$. An affine map $F$ sends it to $(1-t)F(a)+tF(b)$. Suppose $F(P)\subseteq P$ and $F(x)$ lies on a supporting line where a linear function reaches its maximum. Both endpoints have function value at most that maximum. Their weighted average equals it, so both values equal it. Thus the whole segment $[F(a),F(b)]$ lies on that line. If $F(x)$ were a corner, we could repeat the argument with its other supporting side. The two lines meet only at the corner, forcing $F(a)=F(b)$, which is impossible for invertible $F$. More generally the image of the smallest face at $x$ lies in the smallest face at $F(x)$.

Applying an invertible map to a segment with two distinct ends again gives a segment with two distinct ends. The face containing its image therefore has dimension at least one. Once a point between the ends of a side ceases to be on a side, its only possible destination is the interior. It then stays there because $F$ carries an open neighbourhood of the point to an open set contained in $P$.

Follow the side $E_i=[v_{i-1},v_i]$ for $r$ applications of $F$. If $F^rE_i$ is still on the boundary, we can identify its starting endpoint at every earlier step. In the cyclic numbering of the vertices it is

$$
F^tv_{i-1}=v_{i-1+t\kappa}\quad(0\le t\le r).
$$

At the first step, the assigned images of the two endpoints lie on successive half-open sides. For their joining segment to lie on one side, the first image has to equal their shared corner. Repeating proves the statement. A point inside the image segment, together with the supporting-functional argument, ensures that the whole next side remains on the boundary for the remaining steps.

To move a base without losing its return, first ask where the base is allowed to move. Take $j\ge2$ and let $H_j$ be the number of steps from $v_j$ to the contact on $E_{\sigma(j)}$. All starting points that reach the line of that side after $H_j$ steps lie on the line

$$
L_j=F^{-H_j}(\operatorname{aff}E_{\sigma(j)}).
$$

Here $\operatorname{aff}E$ means the full line containing the side. The entire image $F^{H_j}P$ is on the inward side of that line, with $F^{H_j}v_j$ on the line. Taking preimages gives a supporting line at $v_j$. If it touched a second point of $P$, it would contain one of the two sides meeting at $v_j$.

Consider first $E_{j+1}=[v_j,v_{j+1}]$. Its starting endpoint is $v_j$. The preceding argument would keep $F^{H_j}v_j$ a vertex, but this is the open-side contact defining $H_j$. For $E_j=[v_{j-1},v_j]$, the starting endpoint is $v_{j-1}$. Its return time satisfies $H_{j-1}\le H_j$, since the short towers come first. At time $H_{j-1}$ this vertex is already between the endpoints of a side and can never again be a vertex. This rules out the other incident side as well. Thus $L_j$ **exposes** $v_j$, meaning that $P\cap L_j=\{v_j\}$.

The first lesson supplies movement lines, rather than a finished deformation. A base moved along $L_j$ has its returning image on the required target line by definition of $F^{-H_j}$. Each neighbouring base also has a contact to preserve. The next lesson shows how successive line intersections do that.

### Lesson 2: calculate one local motion before proving the general lemma

We can try the construction on the quadrilateral whose consecutive vertices are

$$
X_0=(0,0),\quad X_1=(1,0),\quad X_2=(2,1),\quad X_3=(3,3)
$$

Mark the midpoints $C_2=(3/2,1/2)$ and $C_3=(5/2,2)$ of its last two sides. We use this quadrilateral only to study the motion of the lines. To see that $L_2:y=3x/2-2$ touches it only at $X_2$, evaluate $y-3x/2+2$ at the four vertices. The values in order are $2,1/2,0,1/2$. Thus $L_2$ exposes $X_2$.

Move $X_1$ to $X_1(t)=(1-t,0)$. We want the next vertex to satisfy two conditions. It has to stay on $L_2$, and the side from $X_1(t)$ to it has to pass through $C_2$. A point on that second line has coordinates
$$
X_1(t)+s\bigl(C_2-X_1(t)\bigr)
=\left(1-t+s(\tfrac12+t),\tfrac{s}{2}\right).
$$
Substituting its coordinates in $y=3x/2-2$ gives $s=2(1+3t)/(1+6t)$. At $t=0$ we get $s=2$, as expected since $C_2$ is the midpoint. Substitution back into the line gives

$$
X_2(t)=\left(\frac{2(1+5t)}{1+6t},\frac{1+3t}{1+6t}\right).
$$

Measure position on the line $K=C_2C_3$ by $Y(t)=(5/2-t,2-3t/2)$, so that $Y(0)=C_3$ and $Y(1)=C_2$. Where does the new line from $X_2(t)$ to $X_3$ cross $K$? Write the crossing as $Y(u)$. Substituting $Y(u)$ for a point on that new line and solving for $u$ gives

$$
u(t)=\frac{t}{1+6t},\qquad t-u(t)=\frac{6t^2}{1+6t}.
$$

Which side of the moving line contains $Y(t)$? On $K$, increasing the parameter moves towards $C_2$. At $t=0$ the point $C_2$ lies strictly on the polygon side of the final line $X_2X_3$. We can check the direction by taking the determinant of $X_3-X_2=(1,2)$ and $C_2-C_3=(-1,-3/2)$, which gives $1/2>0$. For sufficiently small $t$ the same direction still points inward. The line crosses $K$ at $Y(u(t))$. From that crossing to $Y(t)$ we move by $(t-u(t))(C_2-C_3)$, so a positive difference puts $Y(t)$ inward. At $t=0$ the first derivative of the difference is zero, so the actual movement is detected at second order. Starting the same projection chain at $X_0$ instead of $X_1$ corresponds to $t=1$ and gives $Z_2=(12/7,4/7)$ and

$$
\Pi(X_0)=(33/14,25/14)=C_3+(C_2-C_3)/7.
$$

The coefficient $1/7$ puts this last point strictly between $C_3$ and $C_2$. We will prove the same ordering for a chain of any length. It will give us enough information at $t=1$ to choose a small motion near $t=0$.

Notice which conditions the intersection enforces. For each small $t$ we have $X_2(t)\in L_2$, and the line joining $X_1(t)$ to $X_2(t)$ passes through $C_2$. To belong to the *side*, $C_2$ has to lie between the two endpoints as well. At $t=0$ it is their midpoint. Both this strict ordering and the strict turns at the corners persist for small $t$, so the moving quadrilateral remains convex.

<div class="reader-checkpoint" data-retrieval-checkpoint>

**Check the motion in both directions.** Take $t=1/20$ and then $t=-1/20$. In each case, is $Y(t)$ farther towards $C_2$ than the crossing $Y(u(t))$? What would the derivative of $t-u(t)$ at zero tell us?

<details class="reader-checkpoint-hint">
<summary>Hint</summary>

Compare the two coordinates by subtracting them. In $6t^2/(1+6t)$ the denominators for these choices are $13/10$ and $7/10$. What sign does the numerator have?

</details>
<details class="reader-checkpoint-solution">
<summary>Solution</summary>

At $t=1/20$ we obtain $t-u(t)=3/260$. At $t=-1/20$ we obtain $3/140$. Both differences put $Y(t)$ on the inward side. Dividing the difference by $t$ gives $6t/(1+6t)$, which tends to zero. The derivative alone would therefore have given no preference for either direction.

</details>
</div>

<!-- reader-figure:early -->

#### Build the general motion by intersecting lines

Take a chain of consecutive vertices $X_0,X_1,\ldots,X_{\ell+1}$ with $\ell\ge2$. We may read the boundary in either direction. Leave at least one side of the polygon outside the chain. Mark a point $C_i$ strictly between $X_{i-1}$ and $X_i$ for each $i=2,\ldots,\ell+1$. At each $X_i$ with $2\le i\le\ell$, choose a line $L_i$ that exposes that vertex.

The endpoints $X_0$ and $X_{\ell+1}$ stay where they are. Slide $X_1$ a little along $X_0X_1$. Once $X_{i-1}(t)$ is known, the new vertex has to lie on $L_i$ and its side line has to pass through $C_i$. We therefore take

$$
X_i(t)=L_i\cap\operatorname{aff}(X_{i-1}(t),C_i),\qquad2\le i\le\ell.
$$

At $t=0$ each pair of lines crosses at $X_i$. The crossing is unique because $C_i$ is on the side and $L_i$ touches the polygon only at $X_i$. For a small change in $t$ the lines still cross, and their intersection depends smoothly on $t$. We can therefore follow the construction to its last side. We have yet to determine on which side of that moving line the returning point will lie.

Consider one of these steps on its own. From a point with coordinate $\tau$ on the first line, draw the line through the fixed contact and mark its crossing on the second line. In coordinates on the two lines this operation has the form

$$
\tau\longmapsto\frac{a\tau+b}{d\tau+e},\qquad ae-bd\ne0.
$$

The letters $a,b,d,e$ here are real coefficients of this particular function, not the tower parameters. The formula follows by solving two linear equations for the intersection; their common denominator is linear in the starting coordinate $\tau$. The projection centre lies off both lines. Projection back from the same centre is then its inverse. A zero denominator describes a parallel intersection, represented by a point at infinity. Adding that one direction-point to each line makes the projection invertible everywhere. This is what “projective” means in this proof: compositions of these ordinary line-intersection maps.

#### Why the long comparison has a definite direction

Denote the first line $X_0X_1$ by $\Lambda$ and the line through $C_\ell,C_{\ell+1}$ by $K$. Starting anywhere on $\Lambda$, project through $C_2$ onto $L_2$ and continue through $C_i$ onto $L_i$. For the last projection use the fixed vertex $X_{\ell+1}$ as centre and $K$ as target. Write $\Pi$ for the composition. Every centre lies off the two lines it connects. Indeed, each exposing line touches the polygon only at its own vertex, while $C_i$ lies between vertices. Also $C_2$ lies off the first side line, and $C_\ell,C_{\ell+1}$ lie inside two different sides, so their line misses $X_{\ell+1}$.

We know one value of $\Pi$ immediately. A start at $X_1$ reproduces the original chain and ends at $C_{\ell+1}$. Now start at the other marked point on $\Lambda$, namely $X_0$. We claim that

$$
\Pi(X_0)\in(C_{\ell+1},C_\ell).
$$

In our four-vertex calculation the point was $1/7$ of the way from $C_3$ to $C_2$. Its precise position played no role in choosing an inward motion. We need the intersection to lie **strictly between** the two contacts. We can test this without computing the intersection itself. Draw the line through the final projected vertex and the fixed endpoint. If the two contacts are strictly on opposite sides of this line, their segment crosses it in its interior. The calculation below proves those signs for any chain satisfying the hypotheses.

<details class="reader-proof-derivation">
<summary>Prove the opposite signs for a chain of any length</summary>

Choose nonnegative affine functions $\eta_0,\eta_1$ on $P$ vanishing only at $X_0,X_{\ell+1}$ respectively. Each can be obtained by adding the two side inequalities incident to its vertex. Their sum $\eta=\eta_0+\eta_1$ is strictly positive throughout $P$. With a third independent affine function $\psi$, use coordinates

$$
\left(\frac{\eta_0(x)}{\eta(x)},\frac{\psi(x)}{\eta(x)}\right).
$$

In the first coordinate $t=\eta_0/\eta$ we have $0\le t\le1$. Equality at zero singles out $X_0$, and equality at one singles out $X_{\ell+1}$ because $1-t=\eta_1/\eta$. To see what happens to a segment, take two points $U,V$ with weights $1-\lambda,\lambda$. Their images acquire weights proportional to $(1-\lambda)\eta(U)$ and $\lambda\eta(V)$. These denominators are positive. Given any two image weights, dividing by the same denominators and rescaling their sum to one recovers the starting weights. Thus a whole segment goes onto a whole segment, with points strictly between its ends staying strictly between. In particular the polygon is still convex in these coordinates.

Cut this polygon by a vertical line $t=\tau$ with $0<\tau<1$. The cut is an interval by convexity. It contains an interior point since we can join an interior point to either extreme vertex and reach the required value of $\tau$ while keeping a positive weight on the interior point. A small disk about that point shrinks to a smaller disk along the segment, so the cut has positive length. Only its endpoints can lie on the boundary. A supporting line through a point strictly between them would have to contain the cut, giving a vertical supporting side. Yet a vertical supporting side could only occur at $t=0$ or $t=1$, where the polygon has just one point. The bottom and top of the cuts therefore trace two distinct chains from $X_0$ to $X_{\ell+1}$.

Our vertices follow one of these chains. Reflect the vertical coordinate if necessary so that they follow the bottom of each cut. Every vertical line then meets the chain just once, and the first coordinate increases as we go from $X_0$ to $X_{\ell+1}$. Write $f(t)$ for the height of the chain. Join the points over $t$ and $u$ by a straight segment. This segment lies in the polygon, so every point on it lies at or above the bottom of its own cut. This gives

$$
f((1-\lambda)t+\lambda u)
\le(1-\lambda)f(t)+\lambda f(u),\qquad0\le\lambda\le1.
$$

This inequality says that $f$ is convex. Between two successive vertices its graph is a straight side. The change of coordinates has thus given us a convex, piecewise linear function whose side slopes we can compare in the order of the chain.

Let $X_i=(t_i,f_i)$, so $t_0<\cdots<t_{\ell+1}$. Denote the slope on $[t_{i-1},t_i]$ by $d_i$. For $2\le i\le\ell$ the exposing line $L_i$ is not vertical because $t_i$ lies strictly between the two horizontal extremes. Write $s_i$ for its slope. The inequalities we need are

$$
d_1<\cdots<d_{\ell+1},\qquad d_i<s_i<d_{i+1}.
$$

At each vertex the lower graph turns upwards. The turn is strict because two successive sides of equal slope would form one side with no vertex between them. The line $L_i$ lies below the graph and passes through $X_i$. On the left of $X_i$ this requires slope at least $d_i$, and on the right it requires slope at most $d_{i+1}$. Either equality would put a neighbouring vertex on $L_i$, contrary to exposure.

For the first line use $s_1=d_1$. The horizontal width of side $i$ is $h_i=t_i-t_{i-1}>0$. Starting from $X_i$ and going back a fraction $\gamma_i$ of that side brings us to its contact, so

$$
C_i=X_i-\gamma_i h_i(1,d_i),\qquad0<\gamma_i<1.
$$

Now start the projection at $Z_1=X_0$, which is $r_1=h_1$ units to the left of $X_1$. Write the next intersection on $L_i$ as $Z_i=X_i-r_i(1,s_i)$. Its position is fixed by requiring $Z_{i-1},C_i,Z_i$ to be collinear. The equation is easier to solve for the reciprocal $x_i=1/r_i$. Expanding the determinant gives

$$
x_i=\frac{(1-\gamma_i)(s_i-d_i)}{\gamma_i(d_i-s_{i-1})}x_{i-1}
+\frac{s_i-s_{i-1}}{\gamma_i h_i(d_i-s_{i-1})}.
$$

<details class="reader-proof-derivation">
<summary>Derivation: expand the determinant and justify every division</summary>

Consider the step from $Z_{i-1}$ to $Z_i$, for $2\le i\le\ell$. We know that the side has width $h_i>0$ and its contact divides it with $0<\gamma_i<1$. The three slopes used in this step satisfy

$$
s_{i-1}<d_i<s_i.
$$

When $i=2$ the left inequality reads $d_1<d_2$. For $i>2$ it follows by comparing $L_{i-1}$ with the side on its right. Start the step with $r_{i-1}>0$ finite, as is the case for $r_1=h_1$. We can determine the sign of $r_i$ directly from the collinearity equation.

To form that equation, subtract the coordinates of successive points on the projected line. Using $X_i-X_{i-1}=h_i(1,d_i)$ gives

$$
\begin{aligned}
C_i-Z_{i-1}
&=(1-\gamma_i)h_i(1,d_i)+r_{i-1}(1,s_{i-1}),\\
Z_i-C_i
&=\gamma_i h_i(1,d_i)-r_i(1,s_i).
\end{aligned}
$$

A zero determinant says exactly that these differences are parallel. In expanding it, each pair of directions contributes its difference of slopes since $\det((1,a),(1,b))=b-a$. We obtain

$$
\begin{aligned}
0={}&\gamma_i h_i r_{i-1}(d_i-s_{i-1})\\
&-(1-\gamma_i)h_i r_i(s_i-d_i)
-r_{i-1}r_i(s_i-s_{i-1}).
\end{aligned}
$$

The first term is known already. Moving the other two to the right and factoring out $r_i$ gives

$$
\gamma_i h_i r_{i-1}(d_i-s_{i-1})
=r_i\bigl[(1-\gamma_i)h_i(s_i-d_i)
+r_{i-1}(s_i-s_{i-1})\bigr].
$$

The known quantity on the left is positive, as is each term in the bracket on the right. Their quotient gives a unique finite $r_i>0$. We can now take reciprocals without losing any solutions. Dividing the bracket by $\gamma_i h_i r_{i-1}(d_i-s_{i-1})$ gives the reciprocal

$$
\frac1{r_i}
=\frac{(1-\gamma_i)(s_i-d_i)}{\gamma_i(d_i-s_{i-1})}\frac1{r_{i-1}}
+\frac{s_i-s_{i-1}}{\gamma_i h_i(d_i-s_{i-1})}.
$$

In terms of $x_i=1/r_i$ this is the stated recurrence. Its first summand is positive. Dropping it gives

$$
\frac1{r_i}>
\frac{s_i-s_{i-1}}{\gamma_i h_i(d_i-s_{i-1})}.
$$

Both sides are positive, so taking reciprocals reverses this inequality. The remaining comparison uses $d_i-s_{i-1}<s_i-s_{i-1}$. We have established finiteness for the intersections in the new coordinates, which is where we need the bound.

Try the recurrence on the quadrilateral above. The values $h_2=1$, $\gamma_2=1/2$, $d_2=1$, $s_1=0$ and $s_2=3/2$ give $x_2=x_1/2+3$. From $x_1=1$ we obtain $r_2=2/7$. Moving that far to the left on $L_2$ gives $Z_2=(2,1)-(2/7)(1,3/2)=(12/7,4/7)$, as in the direct calculation.

</details>

Starting at $x_1=1/h_1$, each use of the recurrence adds a positive constant to a positive multiple of the preceding value. All the $x_i$ are therefore finite and positive. Their reciprocals give points $Z_i$ on the required lines, and the determinant calculation puts $Z_{i-1},C_i,Z_i$ on one line. These points are the required intersections because each projection has a unique value. Retaining just the constant term in the lower bound for $x_i$ gives

$$
0<r_i<\gamma_i h_i\frac{d_i-s_{i-1}}{s_i-s_{i-1}}<\gamma_i h_i.
$$

We need the position of the final crossing on $K$. To shorten this last calculation write $r=r_\ell$, $g=\gamma_\ell h_\ell$, $H=h_{\ell+1}$, $d=d_\ell$, $s=s_\ell$, and $D=d_{\ell+1}$. Test which side of the line through $Z_\ell$ and $X_{\ell+1}$ contains a point $W$ by evaluating

$$
G(W)=\det(X_{\ell+1}-Z_\ell,W-Z_\ell)
$$

This signed determinant vanishes on the line. Its signs at the two contacts will tell us whether their joining segment crosses the line. Substituting their coordinates gives

$$
G(C_\ell)=H(g-r)(D-s)+g(H+r)(s-d)>0,
$$

$$
G(C_{\ell+1})=-\gamma_{\ell+1}Hr(D-s)<0.
$$

The signs follow from $0<r<g$, $H>0$, and $d<s<D$. Since $G$ is affine, it crosses zero strictly between the contacts. The final projection therefore lands inside their segment. We calculated the signs in coordinates in which the required intersections are finite. The two contacts and the open segment between them correspond to the original ones.

</details>

#### The closing motion can have zero first derivative

We have compared the two endpoints of the initial side. To turn this comparison into a motion, take an invertible fractional-linear map $S$ from $\overline\Lambda$ to $\overline K$ with $S(X_0)=C_\ell$ and $S(X_1)=C_{\ell+1}$. Such a map is called a **projectivity**. A bar on a line includes its point at infinity. In the polygon argument a power of $F$ will give us $S$. Give $K$ the coordinate that puts $C_{\ell+1}$ at zero and $C_\ell$ at one by writing

$$
Y(t)=(1-t)C_{\ell+1}+tC_\ell,\qquad X_1(t)=S^{-1}Y(t).
$$

From the same starting point $X_1(t)$ we can reach $K$ by following the chain of projections. Denote the coordinate of that crossing by $u(t)$, so $\Pi(S^{-1}Y(t))=Y(u(t))$. The original chain gives $u(0)=0$, and the comparison starting at $X_0$ gives $0<u(1)<1$. A fractional-linear map fixing zero has the form

$$
u(t)=\frac{at}{1+bt},\qquad a\ne0,\qquad0<u(1)<1.
$$

The moving final side meets $K$ at $Y(u(t))$. At parameter zero the line is the final side, and increasing the coordinate on $K$ moves from $C_{\ell+1}$ towards $C_\ell$ on the adjacent side. This direction points strictly inward and keeps that property for all sufficiently small motions. Consequently the signed distance of $Y(t)$ from that side has the same sign, for small $t$, as

$$
t-u(t)=\frac{(1-a)t+bt^2}{1+bt}.
$$

If $a\ne1$, choose the sign of $t$ so that $(1-a)t>0$. If $a=1$, the inequality $0<u(1)<1$ forces $b>0$; then every sufficiently small nonzero $t$ places the return inward by a quantity of second order. This handles a possible zero first derivative. The comparison at parameter one selects a direction near zero; the construction need not remain finite at every intermediate parameter.

For example, $u(t)=t/(1+t)$ has $u'(0)=1$. Thus the crossing and the returning point initially move at the same rate. Their difference is nevertheless $t^2/(1+t)>0$ for every sufficiently small $t\ne0$. It takes a second-order term to put one point inside.

### Lesson 3: preserve the polygon’s complete contact network

The local projection lemma opens one contact inward. To obtain a contradiction, we have to keep all the other returns inside that same deformed polygon. Keep the following four cases in view while choosing the chain and transporting its vertices:

| Which base returns? | Does its target line move? | How do we handle the return? |
| --- | --- | --- |
| Fixed | Yes | Draw the new side through the original contact. |
| Moving | No | Slide the base along the preimage of its target line. |
| Fixed | No | Both the returning point and its side keep their positions. |
| Moving | Yes | At the closing side choose the motion that sends the image inward. |

In the first three cases we know that the image still lies on its target *line*. We will check that it lies between the endpoints after the bases and their towers have all been moved. The fourth case is the one where the returning point enters the inward half-plane.

With $\Delta>1$ we can choose the shorter of two chains along the boundary. Write $\varepsilon$ for its direction and $a$ for the exponent of the closing map $F^a$. In terms of the base indices we take

$$
(\varepsilon,\ell,X_i,a)=
\begin{cases}
(1,\Delta,v_i,q),&2\Delta\le\varphi+1,\\
(-1,\varphi-\Delta+1,v_{\varphi-i},q+h),&2\Delta>\varphi+1,
\end{cases}
\quad0\le i\le\ell+1.
$$

Here $\varepsilon$ specifies the boundary direction. Its length satisfies $2\le\ell\le(\varphi+1)/2$. The chain uses $\ell+1$ sides. If $\varphi<N$, then $\ell+1\le\varphi<N$, since a skipped return requires $\varphi\ge3$. If $\varphi=N$, then $\ell+1\le(N+3)/2<N$ for $N\ge4$. In both cases at least one side lies outside the chain. The exposing lines already constructed supply its $L_i$. Keep $X_0,X_{\ell+1}$ fixed. If $X_0=v_0$, that vertex remains fixed because $v_0=F^hv_\varphi$ and base $v_\varphi$ is fixed. On the forward chain the last two sides are $E_\Delta,E_{\Delta+1}$. We have $F^qv_0=F^{q+h}v_\varphi=c_\Delta$ and $F^qv_1=c_{\Delta+1}$. On the reverse chain the side from $X_{i-1}$ to $X_i$ is $E_{\varphi-i+1}$, so the last two sides are $E_\Delta,E_{\Delta-1}$. Both starting vertices $v_\varphi,v_{\varphi-1}$ have height $q+h$, and their images after that many steps are $c_\Delta,c_{\Delta-1}$. In either direction $F^aX_0=C_\ell$ and $F^aX_1=C_{\ell+1}$. Hence the restriction of $F^a$ to the initial line $\Lambda$ gives exactly the map $S$ used in Lesson 2.

Take the reverse chain with $N=17$, $\varphi=7$, $\kappa=5$, $\Delta=5$, $q=1$ and $h=2$. The identity $7+2\cdot5=17$ counts its vertices. The chain starts at $v_7$ and passes through $v_6,v_5,v_4$ to $v_3$. A side is always named by its ending vertex **in the original cyclic order**. Thus the step from $v_6$ to $v_5$ follows $E_6=[v_5,v_6]$ backwards. Its contact is $c_6$, supplied by the fixed base $v_1$ in one step since $1+5=6$. Between the two moved vertices we have a fixed point through which their side line can turn.

The moving bases $6,5,4$ return to sides $4,3,2$, respectively. For instance the tower from $6$ follows $v_6\to v_{11}\to v_{16}\to c_4$ since $16+5\equiv4\pmod{17}$. The last side of the chain is $E_4$, so this return is the one we intend to move inside. At the other end, $F^3v_7=c_5$. Hence $F^3$ sends the initial line through $v_7,v_6$ onto the line through $c_5,c_4$, in exactly the order the local calculation requires.

![Read the chain from left to right, in decreasing vertex order. The diamonds on $E_6$ and $E_5$ mark the fixed contacts about which those lines can turn. The closing return from $v_6$ has to move inward across $E_4$. The drawing shows index order.](/figures/bachelor-foundations-reverse-chain.svg)

Which of the other returns could be disturbed by moving these particular vertices? Denote the moving base indices by $M$. Let $k_*$ be the side where the first moving base returns. In direction $\varepsilon$ the return sides from $M$ run *forward* from $k_*$, while the internal sides of the chain run *back* from it. Modulo $\varphi$ these two lists are

$$
\sigma(M)=\{k_*+\varepsilon t:0\le t<\ell\},\qquad
J=\{k_*-\varepsilon r:1\le r<\ell\}.
$$

They are disjoint: an intersection would require $\varphi$ to divide $t+r$, but $1\le t+r\le2\ell-2<\varphi$. Thus the contacts on internal moving sides come from fixed bases. The projection construction keeps those fixed contacts on their moving sides. Every moving base except the first lies on its exposing preimage line, so its return stays on its fixed target side line. The first side line can also receive a moving return. When $2\Delta=\varphi+1$, for instance, base $\Delta$ returns to side $1$. Its endpoint $X_1$ slides along the original first line, so that line stays fixed. Among the moving bases only the first returns to a line that moves, namely the final side line. The closing comparison puts its return strictly inward.

We can read the same separation of indices on a forward chain. Suppose the integers in the return calculation are

$$
(N,\kappa,\varphi,\Delta,q,h)=(17,10,7,3,2,1).
$$

The count is $2\cdot7+1\cdot3=17$. Here $\ell=3$ and $M=\{1,2,3\}$. Adding three modulo seven gives their target sides $\sigma(M)=\{4,5,6\}$. The internal sides $J=\{2,3\}$ receive their contacts from bases six and seven, both fixed, so we draw the new side lines through those points. Bases two and three move, but the lines of their target sides five and six stay fixed. This leaves one return to move inward, from base one to side four. We are testing the proposed skip on its indices. The contradiction below will exclude it for an extremal polygon.

<!-- reader-figure:early-extra -->

Once a base is moved to $\widehat v_j$, put its next $H_j-1$ vertices at $F\widehat v_j,\ldots,F^{H_j-1}\widehat v_j$. Every vertex occurs at exactly one such level, counting the base as level zero, by the partition of Topic V. Each intermediate step is then an application of $F$ by construction. For instance our three moving towers consist of $(1,11)$, $(2,12)$ and $(3,13)$. Moving base one carries vertex eleven with it. Only at the top of a tower do we need the return conditions from the table.

What remains is to pass from lines to segments and from one inward inequality to membership in the whole polygon. We kept the required line incidences by construction. We obtained a *new* strict inequality at the closing side from $t-u(t)>0$. At every other side the closing contact already had positive distance to the line before the motion.

Originally every side has every vertex except its two ends strictly on the inward side of its line. There are finitely many such inequalities. By continuity one sufficiently small motion preserves all of them, and also keeps the vertices distinct. We therefore still have a convex $N$-gon in the same order. Each contact kept on a line started strictly between its endpoints and stays between them for a small motion. As for the closing contact, every other side already had it strictly on the inside. Giving it a strict inward inequality at the last side puts it in the interior of the new polygon $Q$.

Every vertex image belongs to $Q$, so convexity gives $FQ\subseteq Q$. Which vertex has an interior image? Start at the moving base $X_1$ and follow its tower up to the last vertex before the return. Applying $F$ once more gives $F^aX_1(\tau)$, the point placed strictly inside $Q$ by the closing calculation; here $\tau$ is the small motion parameter. The universal contact theorem contradicts that conclusion, proving $\Delta=1$. Since $\gcd(\Delta,\varphi)=\gcd(N,\kappa)$, this case also forces $\gcd(N,\kappa)=1$.
