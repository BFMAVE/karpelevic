### Why a return cannot skip a base

The arithmetic in Topic V produced $\varphi$ base vertices, first-return heights $q$ or $q+h$, and a return permutation $\sigma(j)=j+\Delta$ modulo $\varphi$. Its parameters satisfy

$$
q\varphi+h\Delta=N,\qquad1\le\Delta<\varphi,
\qquad\gcd(\Delta,\varphi)=\gcd(N,\kappa).
$$

Here $N$ is the polygon's vertex count, $\kappa$ its contact-index shift, and $I=\{1,\ldots,\varphi\}$ its consecutive interior-contact indices. If $\Delta=1$, each first return lands on the side ending at the next base. If $\Delta>1$, it skips bases. This topic proves $\Delta=1$ whenever these return data apply.

The proof constructs a small deformation of the polygon while keeping the map $F(x)=\zeta x$ fixed. All vertex images will stay inside the new polygon, and one will become strictly interior. Topic II's contact theorem forbids that for **every** invariant polygon with at most $N$ vertices. The theorem's universal scope is essential: the deformed polygon need not minimise area or contact count.

A side contact is an equality constraint: its image must remain on one particular line. Moving a base freely would generally break several such equalities. The construction moves a chain by solving those equalities one after another as line intersections. Only the final contact is left unconstrained. The projective calculation determines whether that one contact falls inward, while the tower arithmetic ensures that no other contact was accidentally broken.

### Lesson 1: find the lines along which bases may move

A supporting line touches a convex polygon while leaving it in one closed half-plane. A supporting linear functional is a linear function maximised on that touching part. A face is a vertex, a side, or the whole polygon. The smallest face containing a point is the vertex itself, its side if it lies strictly inside that side, or the whole polygon if it is interior.

An invertible affine map is a map $x\mapsto Mx+a$ with invertible matrix $M$. If such a map sends $P$ into itself, it sends the smallest face at $x$ into the smallest face at its image. To verify the boundary case, take a supporting functional maximised at the image. Composing with the map gives an affine function maximised at $x$. If $x$ is inside a side, that function must be constant along the side: a nonconstant linear function on a segment cannot have a maximum away from its endpoints. Applying every supporting functional gives the face inclusion.

An invertible map preserves the dimension of a segment. Therefore the dimension of the smallest containing face cannot decrease. In particular, a point inside a side cannot become a vertex at a later iterate. Interior points also stay interior, since invertible maps send open sets to open sets.

Write $E_i=[v_{i-1},v_i]$. If $F^rE_i$ remains on the boundary, then its starting endpoint remains a vertex at every step:

$$
F^tv_{i-1}=v_{i-1+t\kappa}\quad(0\le t\le r).
$$

At the first step, the assigned images of the two endpoints lie on successive half-open sides. For their joining segment to lie on one side, the first image must equal their shared corner. Repeating proves the statement. A point inside the image segment, together with the supporting-functional argument, ensures that the whole next side remains on the boundary for the remaining steps.

This gives lines along which bases can move. If base $v_j$, with $j\ge2$, first returns at time $H_j$ to a contact on side $E_{\sigma(j)}$, define

$$
L_j=F^{-H_j}(\operatorname{aff}E_{\sigma(j)}).
$$

Here $\operatorname{aff}E$ means the full line containing the side. This preimage line supports $P$ at $v_j$. It touches no other point of $P$. Otherwise it would contain an incident side. One incident side would force $F^{H_j}v_j$ to be a vertex; the other would force the preceding base's image to remain a vertex. The heights from Topic V are $q$ on an initial block and $q+h$ on the final block, so $H_{j-1}\le H_j$. The preceding base has therefore already returned inside a side by time $H_j$, and face persistence prevents it from becoming a vertex during any extra steps. Both incident-side possibilities are impossible. Thus $L_j$ **exposes** $v_j$: its intersection with $P$ is the single point $v_j$. This height ordering handles the transition between short and tall towers.

The first lesson supplies movement lines, rather than a finished deformation. A base moved along $L_j$ has its returning image on the required target line by definition of $F^{-H_j}$. We must still coordinate neighbouring bases so that their other contacts remain on their side lines. The next lesson shows how successive line intersections do that.

### Lesson 2: calculate one local motion before proving the general lemma

The polygon with consecutive vertices

$$
X_0=(0,0),\quad X_1=(1,0),\quad X_2=(2,1),\quad X_3=(3,3)
$$

is a model for the projection lemma. It is not being proposed as an invariant eigenvalue polygon. Take $C_2=(3/2,1/2)$ and $C_3=(5/2,2)$, the midpoints of its last two chain sides. The line $L_2:y=3x/2-2$ exposes $X_2$: the affine function $y-3x/2+2$ vanishes there and is positive at the other three vertices.

Move $X_1$ to $X_1(t)=(1-t,0)$ and project through $C_2$ onto $L_2$. Solving the two line equations gives

$$
X_2(t)=\left(\frac{2(1+5t)}{1+6t},\frac{1+3t}{1+6t}\right).
$$

On the contact line $K=C_2C_3$, write $Y(t)=(5/2-t,2-3t/2)$. The moving final line through $X_2(t)$ and fixed $X_3$ meets $K$ at $Y(u(t))$, where direct substitution gives

$$
u(t)=\frac{t}{1+6t},\qquad t-u(t)=\frac{6t^2}{1+6t}.
$$

This positive difference, for sufficiently small nonzero $t$, puts the returning point $Y(t)$ inward of the moving final side. At $t=0$ the first derivative of the difference is zero, so the actual movement is detected at second order. Starting the same projection chain at $X_0$ instead of $X_1$ corresponds to $t=1$ and gives $Z_2=(12/7,4/7)$ and

$$
\Pi(X_0)=(33/14,25/14)=C_3+(C_2-C_3)/7.
$$

The global comparison lies strictly between the contacts; the formula then identifies the locally usable motion. The following proof obtains the same strict comparison for every permitted chain, without relying on these special coordinates.

Two equalities hold because we constructed $X_2(t)$ by an intersection: $X_2(t)\in L_2$ and $C_2\in\operatorname{aff}(X_1(t),X_2(t))$. They hold exactly for every sufficiently small parameter, not approximately. Convexity of the moved quadrilateral and the fact that $C_2$ stays between its moving endpoints are separate strict inequalities; they persist only after restricting the parameter to a sufficiently small neighbourhood of zero.

<div class="reader-checkpoint" data-retrieval-checkpoint>

**Second-order checkpoint.** Evaluate the closing defect at $t=1/20$ and $t=-1/20$. Does either sign fail? Would the derivative at zero detect this movement?

<details class="reader-checkpoint-hint">
<summary>Hint</summary>

Use $6t^2/(1+6t)$. The numerator is positive for either nonzero sign; check that both denominators remain positive.

</details>
<details class="reader-checkpoint-solution">
<summary>Solution</summary>

The two defects are $3/260$ and $3/140$, respectively, both positive. The first derivative at zero is zero, because the numerator begins with $t^2$. An argument requiring a nonzero first derivative would miss both inward motions.

</details>
</div>

<!-- reader-figure:early -->

#### Build the general motion by intersecting lines

Consider consecutive vertices $X_0,X_1,\ldots,X_{\ell+1}$ of a convex polygon, in either boundary direction, with $\ell\ge2$ and at least one side outside the chain. For each internal side choose a contact $C_i\in(X_{i-1},X_i)$, for $2\le i\le\ell+1$. At $X_i$, for $2\le i\le\ell$, choose an exposing line $L_i$.

Keep $X_0,X_{\ell+1}$ fixed and move $X_1$ slightly along the line $X_0X_1$. Define successive moved vertices by

$$
X_i(t)=L_i\cap\operatorname{aff}(X_{i-1}(t),C_i),\qquad2\le i\le\ell.
$$

The parameter $t$ measures a small real motion. Each intersection keeps contact $C_i$ on the corresponding side line. At zero the intersections are the original vertices, so for sufficiently small $t$ they are finite and vary smoothly. The issue is how the final side moves relative to its returning contact.

A projection from a fixed point between two lines is a fractional-linear function of line coordinates:

$$
\tau\longmapsto\frac{a\tau+b}{d\tau+e},\qquad ae-bd\ne0.
$$

The letters $a,b,d,e$ here are real coefficients of this particular function, not the tower parameters. The formula follows by solving two linear equations for the intersection; their common denominator is linear in the starting coordinate $\tau$. The projection centre must lie on neither the source nor the target line. Projection back from the same centre is then its inverse. A zero denominator describes a parallel intersection, represented by a point at infinity. Adding that one direction-point to each line makes the projection invertible everywhere. This is what “projective” means in this proof: compositions of these ordinary line-intersection maps.

#### Why the long comparison has a definite direction

Let $\Lambda$ be the initial line $X_0X_1$, and let $K$ be the line through $C_\ell,C_{\ell+1}$. Project from $\Lambda$ through $C_2$ to $L_2$, continue through the remaining contacts to the exposing lines, then project through $X_{\ell+1}$ to $K$. Call this combined projection $\Pi$. The centre condition holds at every step: exposure excludes interior contacts from both adjoining exposing lines, and distinct adjoining sides exclude $C_2$ from $\Lambda$. At the last step, exposure excludes $X_{\ell+1}$ from $L_\ell$, and the two contacts on distinct adjacent sides ensure $X_{\ell+1}\notin K$.

Starting at $X_1$ follows the original vertices and gives $\Pi(X_1)=C_{\ell+1}$. The decisive geometric comparison is

$$
\Pi(X_0)\in(C_{\ell+1},C_\ell).
$$

Its proof uses coordinates with positive denominators, so segments and interior points retain their meanings. To construct them, choose nonnegative affine functions $\eta_0,\eta_1$ on $P$ vanishing only at $X_0,X_{\ell+1}$ respectively. Each can be obtained by adding the two side inequalities incident to its vertex. Their sum $\eta=\eta_0+\eta_1$ is strictly positive throughout $P$. With a third independent affine function $\psi$, use coordinates

$$
\left(\frac{\eta_0(x)}{\eta(x)},\frac{\psi(x)}{\eta(x)}\right).
$$

The first coordinate has unique minimum zero at $X_0$ and unique maximum one at $X_{\ell+1}$. A transformed convex combination is a convex combination with weights multiplied by the positive denominators and renormalised. Conversely, divide any desired image weights by the positive endpoint denominators and renormalise to recover preimage weights; this shows that every segment between image points belongs to the image. Thus the transformed polygon is convex, its sides are still segments, and side-interior contacts stay inside those segments. Positivity is doing real work here: a change of chart with a denominator vanishing on the polygon would not justify these conclusions.

To see why a graph now describes our chain, intersect the transformed polygon with a vertical line $t=\tau$, where $0<\tau<1$. Convexity makes the intersection an interval. It has positive length: interpolate an interior point with the left or right extreme to reach $\tau$; the positive weight on the interior point leaves a small disk inside the polygon. No side can be vertical: the line containing a vertical side would support the polygon at a horizontal extreme, whereas both horizontal extremes are single vertices. Consequently the lower and upper endpoints of every such slice are its only boundary points. A supporting line through a point strictly between them would have to contain the vertical slice, contradicting the absence of vertical supporting sides. As $\tau$ runs from zero to one, the lower endpoints trace one boundary chain from $X_0$ to $X_{\ell+1}$, and the upper endpoints trace the other. The chains cannot switch places in the interior, where their heights are distinct.

Our consecutive vertices belong to one of those two chains. If it is the upper one, reflect the second coordinate. It is then the lower graph, and traversal from $X_0$ to $X_{\ell+1}$ strictly increases the first coordinate: each vertical line meets that chain once, and there are no vertical sides. Write its height as $f(t)$. For two points $(t,f(t))$ and $(u,f(u))$, their convex combination belongs to the polygon, so its height is at least the lower boundary height at its first coordinate. Therefore

$$
f((1-\lambda)t+\lambda u)
\le(1-\lambda)f(t)+\lambda f(u),\qquad0\le\lambda\le1.
$$

This is exactly convexity of $f$. It is piecewise linear because the chain consists of finitely many side segments. We have now justified the graph representation and its direction, rather than assuming that an arbitrary boundary chain is already monotone in ordinary coordinates.

Write $X_i=(t_i,f_i)$ in these coordinates, with $t_0<\cdots<t_{\ell+1}$. Let $d_i$ be the slope of side $X_{i-1}X_i$, and $s_i$ the slope of exposing line $L_i$. Convexity gives

$$
d_1<\cdots<d_{\ell+1},\qquad d_i<s_i<d_{i+1}.
$$

The side slopes increase strictly because the $X_i$ are genuine vertices, with no collinear successive sides. The exposing line at $X_i$ lies below the lower graph. Testing it at the preceding vertex gives $d_i\le s_i$, and testing it at the following vertex gives $s_i\le d_{i+1}$. Equality would put that neighbour on the exposing line too, so exposure makes both inequalities strict. That line is nonvertical, since a vertical supporting line could touch only a horizontal extreme.

Put $s_1=d_1$, let $h_i=t_i-t_{i-1}>0$, and express each contact as

$$
C_i=X_i-\gamma_i h_i(1,d_i),\qquad0<\gamma_i<1.
$$

For the comparison starting at $X_0$, seek intersections of the form $Z_i=X_i-r_i(1,s_i)$, with $r_1=h_1$. Collinearity of $Z_{i-1},C_i,Z_i$ is expressed by a zero $2\times2$ determinant. Reciprocal variables $x_i=1/r_i$ turn that condition into an affine recurrence:

$$
x_i=\frac{(1-\gamma_i)(s_i-d_i)}{\gamma_i(d_i-s_{i-1})}x_{i-1}
+\frac{s_i-s_{i-1}}{\gamma_i h_i(d_i-s_{i-1})}.
$$

<details class="reader-proof-derivation">
<summary>Derivation: expand the determinant and justify every division</summary>

Fix a step $2\le i\le\ell$. The established assumptions are $h_i>0$, $0<\gamma_i<1$, and

$$
s_{i-1}<d_i<s_i.
$$

For $i=2$, the first inequality follows from $s_1=d_1<d_2$; at later steps it is the upper slope bound for the preceding exposing line. Suppose inductively that $r_{i-1}$ is finite and positive. We have not yet assumed any sign or finiteness for the next intersection.

The side vector is $X_i-X_{i-1}=h_i(1,d_i)$. Subtracting the contact coordinates gives

$$
\begin{aligned}
C_i-Z_{i-1}
&=(1-\gamma_i)h_i(1,d_i)+r_{i-1}(1,s_{i-1}),\\
Z_i-C_i
&=\gamma_i h_i(1,d_i)-r_i(1,s_i).
\end{aligned}
$$

These two vectors are collinear precisely when their determinant is zero. Use $\det((1,a),(1,b))=b-a$ and expand bilinearly. The result is

$$
\begin{aligned}
0={}&\gamma_i h_i r_{i-1}(d_i-s_{i-1})\\
&-(1-\gamma_i)h_i r_i(s_i-d_i)
-r_{i-1}r_i(s_i-s_{i-1}).
\end{aligned}
$$

Collecting the terms containing $r_i$ gives

$$
\gamma_i h_i r_{i-1}(d_i-s_{i-1})
=r_i\bigl[(1-\gamma_i)h_i(s_i-d_i)
+r_{i-1}(s_i-s_{i-1})\bigr].
$$

Every factor on the left is strictly positive. Both summands in brackets are strictly positive too. We may therefore first solve this equation for a unique finite positive $r_i$. This avoids assuming that the remote projection is finite before proving it. Now $r_i$ and $r_{i-1}$ are nonzero, so division is justified and yields

$$
\frac1{r_i}
=\frac{(1-\gamma_i)(s_i-d_i)}{\gamma_i(d_i-s_{i-1})}\frac1{r_{i-1}}
+\frac{s_i-s_{i-1}}{\gamma_i h_i(d_i-s_{i-1})}.
$$

This is the displayed recurrence with $x_i=1/r_i$. Its intercept is positive, so

$$
\frac1{r_i}>
\frac{s_i-s_{i-1}}{\gamma_i h_i(d_i-s_{i-1})}.
$$

Reciprocating positive quantities gives the strict upper bound on $r_i$ below. Its second inequality uses $d_i<s_i$. The entire calculation takes place in the chosen chart; it proves that the remote intersections are finite there, without requiring them to be finite in the original affine coordinates.

For a check using the earlier coordinate model, take $h_2=1$, $\gamma_2=1/2$, $d_2=1$, $s_1=0$, $s_2=3/2$, and $x_1=1$. The recurrence gives $x_2=(1/2)x_1+3=7/2$, so $r_2=2/7$. Therefore $Z_2=(2,1)-(2/7)(1,3/2)=(12/7,4/7)$, exactly the first remote intersection in the figure.

</details>

Every coefficient is positive. Define $x_i$ by this recurrence, starting from $x_1=1/h_1>0$. Induction gives finite $x_i>0$, so $r_i=1/x_i$ is finite and positive. Substitution verifies the collinearity equations; uniqueness of each projective intersection identifies these constructed points with the required projections. Moreover,

$$
0<r_i<\gamma_i h_i\frac{d_i-s_{i-1}}{s_i-s_{i-1}}<\gamma_i h_i.
$$

Set $r=r_\ell$, $g=\gamma_\ell h_\ell$, $H=h_{\ell+1}$, $d=d_\ell$, $s=s_\ell$, and $D=d_{\ell+1}$. For a plane point $W$, the affine function

$$
G(W)=\det(X_{\ell+1}-Z_\ell,W-Z_\ell)
$$

vanishes on the final projection line. The determinant of two plane vectors is their signed $2\times2$ determinant. Substituting the displayed contact coordinates gives

$$
G(C_\ell)=H(g-r)(D-s)+g(H+r)(s-d)>0,
$$

$$
G(C_{\ell+1})=-\gamma_{\ell+1}Hr(D-s)<0.
$$

The signs follow from $0<r<g$, $H>0$, and $d<s<D$. Since $G$ is affine, it crosses zero strictly between the contacts. The final projection therefore lands inside their segment. This establishes the comparison without assuming that an arbitrary projection chain stays finite in the original coordinates.

#### The closing motion can have zero first derivative

Let $S:\overline\Lambda\to\overline K$ be a **projectivity**, an invertible fractional-linear map between the completed lines, sending $X_0$ to $C_\ell$ and $X_1$ to $C_{\ell+1}$. The bar here means that the direction-point at infinity is included, not complex conjugation. In the application $S$ is the restriction of a power of $F$, hence is such a projectivity. Parametrise the finite part of $K$ by

$$
Y(t)=(1-t)C_{\ell+1}+tC_\ell,\qquad X_1(t)=S^{-1}Y(t).
$$

Define $u(t)$ by $\Pi(S^{-1}Y(t))=Y(u(t))$. This fractional-linear function fixes zero, so, with new real constants $a,b$, it has the form

$$
u(t)=\frac{at}{1+bt},\qquad a\ne0,\qquad0<u(1)<1.
$$

The moving final side meets $K$ at $Y(u(t))$. Increasing the coordinate on $K$ initially enters its inward half-plane. Consequently the signed distance of $Y(t)$ from that side has the same sign, for small $t$, as

$$
t-u(t)=\frac{(1-a)t+bt^2}{1+bt}.
$$

If $a\ne1$, choose the sign of $t$ so that $(1-a)t>0$. If $a=1$, the inequality $0<u(1)<1$ forces $b>0$; then every sufficiently small nonzero $t$ gives positive inward displacement, of second order. This handles a possible zero first derivative. The comparison at parameter one selects a direction near zero; the construction need not remain finite at every intermediate parameter.

As a check, $u(t)=t/(1+t)$ has derivative one at zero, yet $t-u(t)=t^2/(1+t)>0$ near zero for both nonzero signs. A purely first-order argument would miss the usable motion.

### Lesson 3: preserve the polygon’s complete contact network

The local projection lemma opens one contact inward. To obtain a contradiction, all other returns must remain admissible in the *same* deformed polygon. Keep the following four cases in view while choosing the chain and transporting its vertices:

| Returning base source | Target side line | How its constraint is handled |
| --- | --- | --- |
| Fixed | Moving | The contact is fixed; the projection intersection keeps it on the moving line. |
| Moving | Fixed | The base moves on the preimage of that fixed target line. |
| Fixed | Fixed | The returning point and its line are unchanged. |
| Moving | Moving | This is the unique exceptional closing return; the local lemma places it strictly inward. |

The first three rows preserve line equalities exactly. Being on a line does not yet prove that a point is on the side segment; that requires the endpoint and convexity inequalities checked after the tower extension below. The last row deliberately replaces a line equality by an inward inequality.

Suppose now that $\Delta>1$. Choose the chain and the power $a$ explicitly:

$$
(\varepsilon,\ell,X_i,a)=
\begin{cases}
(1,\Delta,v_i,q),&2\Delta\le\varphi+1,\\
(-1,\varphi-\Delta+1,v_{\varphi-i},q+h),&2\Delta>\varphi+1,
\end{cases}
\quad0\le i\le\ell+1.
$$

Here $\varepsilon$ specifies the boundary direction. Its length satisfies $2\le\ell\le(\varphi+1)/2$. Because $N\ge4$, at least one polygon side lies outside it. The exposing lines already constructed supply its $L_i$. Keep $X_0,X_{\ell+1}$ fixed. If $X_0=v_0$, that vertex remains fixed because $v_0=F^hv_\varphi$ and base $v_\varphi$ is fixed. The tower identities give $F^aX_0=C_\ell$ and $F^aX_1=C_{\ell+1}$, so $S$ is the restriction of $F^a$ to $\Lambda$.

The index check ensures that this local construction respects all return relations. Let $M$ be the moving base indices, let $k_*$ be the return side of the first moving base, and let $\varepsilon=1$ for the forward chain and $-1$ for the backward chain. Modulo $\varphi$, its moving-base return sides and internal chain sides are

$$
\sigma(M)=\{k_*+\varepsilon t:0\le t<\ell\},\qquad
J=\{k_*-\varepsilon r:1\le r<\ell\}.
$$

They are disjoint: an intersection would require $\varphi$ to divide $t+r$, but $1\le t+r\le2\ell-2<\varphi$. Thus the contacts on internal moving sides come from fixed bases. The projection construction keeps those fixed contacts on their moving sides. Every moving base except the first lies on its exposing preimage line, so its return stays on its fixed target side line. The first moving base alone has both a moving source and the final moving target side; the closing comparison puts its return strictly inward.

The following index example displays the three kinds of contact that this argument separates. Take the hypothetical skipped-return data

$$
(N,\kappa,\varphi,\Delta,q,h)=(17,10,7,3,2,1).
$$

They satisfy $q\varphi+h\Delta=17$. Here $\ell=3$, the moving bases are $M=\{1,2,3\}$, their target sides are $\sigma(M)=\{4,5,6\}$, and the internal moving sides are $J=\{2,3\}$. Fixed bases six and seven return to the moving side lines two and three; the projections keep these fixed contacts on those lines. Moving bases two and three return to fixed side lines five and six; their exposing lines preserve those returns. Only moving base one returns to the moving final side four. Its image is the contact made interior. These integer data illustrate the contradiction construction; the no-skipping theorem says that an extremal polygon with this skipped return cannot exist.

<!-- reader-figure:early-extra -->

Propagate each moved base $\widehat v_j$ along its entire tower by setting the new level-$t$ vertex equal to $F^t\widehat v_j$ for $0\le t<H_j$. Topic V's partition ensures this defines every vertex exactly once. All intermediate vertex-to-vertex identities are preserved. The remaining returns either stay on their corresponding side lines or are unchanged. In the displayed example the moving towers are $(1,11)$, $(2,12)$, and $(3,13)$, each of height two; the fixed towers contain every other index. A moved base therefore carries its subsequent vertices with it, rather than leaving incompatible copies behind.

The final admissibility check uses two kinds of reasoning:

| Exact because of the construction | Retained for a sufficiently small motion |
| --- | --- |
| Each tower level is $F^t$ of its moved base, so intermediate vertex identities hold. | Distinctness and all strict supporting-side inequalities preserve the convex $N$-gon and its cyclic order. |
| Projection intersections keep fixed contacts on moving side lines. | Those contacts remain between their moving endpoints. |
| Exposing preimage lines keep moving returns on fixed target lines. | Those returns remain in the relative interiors of their side segments. |
| The closing lemma proves positive inward defect for arbitrarily small nonzero parameters. | The exceptional image remains strictly inside every other supporting half-plane, where it already had positive slack. |

The closing defect is a newly proved inequality. Continuity alone cannot open it inward, since its original value is zero; continuity preserves the strict inequalities that were already present.

For sufficiently small motion, the vertices remain distinct and form a convex $N$-gon in the same cyclic order. This follows from finitely many strict side inequalities: each original side has every other vertex strictly on its inward side, and these inequalities persist by continuity. Every preserved contact remains strictly between its endpoints. The exceptional contact starts inside its final side and strictly inside every other supporting half-plane. Moving it inward across the final line therefore makes it strictly interior to the new $N$-gon $Q$.

All vertex images belong to $Q$, so convexity gives $FQ\subseteq Q$. One vertex image is interior. The universal contact theorem contradicts that conclusion, proving $\Delta=1$. Since $\gcd(\Delta,\varphi)=\gcd(N,\kappa)$, this case also forces $\gcd(N,\kappa)=1$.
