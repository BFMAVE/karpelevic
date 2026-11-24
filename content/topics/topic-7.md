### Five midpoint averages show the mechanism

On a circle draw the five points $v_j=\eta^j$, where $\eta=e^{2\pi i/5}$. Multiplication by $\eta$ carries each point to the next. To move only as far as the midpoint between them, take the multiplier

$$
\lambda=\frac{1+\eta}{2}=\cos(\pi/5)e^{i\pi/5}
$$

Indeed, multiplying $v_{j-1}$ by $\lambda$ averages $v_{j-1}$ with $\eta v_{j-1}=v_j$. We can put one vertex on each side by rearranging the midpoint equation.

$$
\lambda v_{j-1}=\tfrac12v_{j-1}+\tfrac12v_j,
\qquad(\lambda-\tfrac12)v_{j-1}=\tfrac12v_j.
$$

Multiply the five equations. The same five nonzero vertices occur on the two sides, so we can cancel them and obtain $(\lambda-1/2)^5=(1/2)^5$. Each individual factor is $\eta/2$ and has angle $2\pi/5$. Their angles add to one full turn. Seen only at the end of the multiplication, the product is positive real. The five steps around the pentagon tell us how it got there.

<!-- reader-figure:early -->

### The cancellation mechanism

Call the multiplier $\omega$. Suppose we can group its steps into $m$ paths of length $q$, each ending in an average with weights $\beta_j$ and $\alpha_j=1-\beta_j>0$. A remaining signed exponent $e$ closes the path. For the pentagon just drawn, $m=5$, $q=1$ and $e=0$. In general the nonzero base coordinates $W_0,\ldots,W_m$ then satisfy

$$
(\omega^q-\beta_j)W_{j-1}=\alpha_jW_j\quad(1\le j\le m),
\qquad\omega^eW_m=W_0.
$$

Multiplying the first $m$ equations cancels $W_1,\ldots,W_{m-1}$. Substituting the closing relation cancels the remaining $W_0,W_m$ and gives the product. In particular $\omega^q-\beta_j=\alpha_j W_j/W_{j-1}\ne0$. This ratio also lets us read an angle from a side of the polygon.

Multiplication by the positive number $\alpha_j$ leaves a direction unchanged. Once we know that the angle from $W_{j-1}$ to $W_j$ in boundary order lies between zero and $\pi$, it is exactly $\operatorname{Arg}(\omega^q-\beta_j)$. When adding the angles, keep counting past $2\pi$. Then the direction of each intermediate vertex occurs once with each sign, and the final continued angle records how many turns the closed path has made.

### Eliminate the vertices, but keep the number of turns

Let $\zeta$ be the nonreal eigenvalue of largest modulus on its ray, and $N\ge4$ the smallest matrix order that realises it. We use the invariant polygon chosen in the preceding chapters. Its $\varphi$ contacts strictly between the ends of their sides occupy consecutive sides. Adding $\kappa$ to an index gives the side assigned to its image. This shift has $\delta=\gcd(N,\kappa)$ cycles.

When $\varphi>\delta$, Topic VI gives $\Delta=1$ and hence $\delta=1$. We therefore begin with the coprime case $\delta=1$, including the special possibility of just one contact in an open side. Since $\varphi\ge\delta$, the remaining case has $\varphi=\delta\ge2$. Its closing path goes in the other direction.

We will choose between $\zeta$ and $\overline\zeta$ so that the fractions at the ends of the interval occur in a convenient order. Call that choice $\omega=\rho e^{i\vartheta}$, with $0<\vartheta<2\pi$. List the reduced fractions in $[0,1]$ with denominator at most $N$ in increasing order. In this Farey list $F_N$ we will find neighbours $p/q$ and $r/s$ satisfying

$$
\frac pq<\frac{\vartheta}{2\pi}<\frac rs,\qquad q<s.
$$

Take $m=\lfloor N/q\rfloor$, the number of complete groups of $q$ in $N$, and put $e=s-mq$. This $e$ can have either sign or be zero. We will obtain $m$ weights $\beta_j$ with $0\le\beta_j<1$ and write $\alpha_j=1-\beta_j$. The path equations will determine both a complex product and the sum of its factor angles.

$$
\omega^e\prod_{j=1}^{m}(\omega^q-\beta_j)=\prod_{j=1}^{m}\alpha_j,
$$

$$
e\vartheta+\sum_{j=1}^{m}u_j=2\pi(r-mp),
\qquad u_j=\operatorname{Arg}(\omega^q-\beta_j).
$$

Here $\operatorname{Arg}$ is the principal argument, the representative in $(-\pi,\pi]$. The construction puts every $u_j$ in $(0,\pi)$. The second equation is an equality of real numbers. It specifies the full number of turns, information that the first equation alone cannot retain.

<aside class="reader-notation-panel" aria-label="Multiplier and angle notation">

| Notation | How to read the angle calculation |
| --- | --- |
| $\zeta$, $\theta_\zeta$ | In the cyclic numbering chosen for the contacts, a step multiplies by $\zeta$ and turns through $\theta_\zeta\in(0,2\pi)$. |
| $\omega$, $\vartheta$ | After choosing the Farey interval, the multiplier is $\zeta$ or $\bar\zeta$ and its angle is $\vartheta$. |
| $u_j$ | Measure the direction from $\beta_j$ to $\omega^q$. It will equal the positive angle between the two base vertices in the recurrence. |
| $\Phi_i$ | Follow the directions of the vertices in order, using $\Phi_{i+N}=\Phi_i+2\pi$ on reaching the same vertex again. |

</aside>

<div class="reader-checkpoint" data-retrieval-checkpoint>

**Which root belongs to the first arc?** At order six the first interval is $(0,1/6)$. To belong to its open arc, a root has to have angle between $0$ and $\pi/3$. Take six equal weights $\beta=2/3$. The product becomes $(z-2/3)^6=(1/3)^6$. Two of the roots are
$$
z_1=\frac23+\frac13e^{i\pi/3}=\frac{5+i\sqrt3}{6},
\qquad
z_2=\frac23+\frac13e^{2\pi i/3}=\frac{3+i\sqrt3}{6}.
$$
Check the sector condition for each root. Which one also satisfies the required turn count?

<details class="reader-checkpoint-hint">
<summary>Hint</summary>

Measure the angle of $z$ at zero and the angle of $z-2/3$ at $2/3$. Which of these belongs in the sum of six factor arguments?

</details>
<details class="reader-checkpoint-solution">
<summary>Solution</summary>

Both points lie in the first quadrant. The slopes of their rays from zero are $\sqrt3/5$ and $\sqrt3/3$, both below $\tan(\pi/3)=\sqrt3$. Both therefore pass the sector check. From $2/3$, however, the rays have angles $\pi/3$ and $2\pi/3$. Six copies of the first angle sum to $2\pi$ and six of the second to $4\pi$. Here $p=0$, $r=1$ and $e=0$, so the closing path requires $2\pi$. It selects $z_1$. Knowing the sector and the polynomial still leaves this choice to be made.

</details>

</div>

![Both roots lie below the ray of angle π/3 from zero. The solid and dashed segments start at 2/3. Their angles, measured from the positive real direction, are π/3 and 2π/3.](/figures/bachelor-product-two-roots.svg)

We now recover the recurrence from the return paths in Topic VI. There are two choices to justify. Which vertices serve as bases? At which continued index does the last path close?

### The core construction: a coprime shift with several interior contacts

First suppose the shift has one cycle, $\delta=1$, and at least two sides receive a contact between their ends. The no-skipping conclusion $\Delta=1$ turns the return equations into

$$
q\kappa-pN=1,\qquad q\varphi+h=N.
$$

We have $1\le q<N$. If we divide $N$ into groups of $q$, their number is $m=\lfloor N/q\rfloor$ and the remainder is $e=N-mq$. Since $N=q\varphi+h$, there is room for all $\varphi$ original bases. Use $v_1,\ldots,v_m$ as bases, marking an existing vertex wherever another base is needed. At such a vertex the incoming image equals the vertex itself. Its coefficient is therefore $\alpha_j=1$ and the coefficient of the preceding vertex is $\beta_j=0$.

For this added base the factor $\zeta^q-0$ is just $\zeta^q$, and $\alpha_j=1$. Cutting a path at a vertex thus brings its exponent into the same form as those ending at an average.

The suspension argument of Topic V applies to these $m$ bases with each ordinary return advancing the base index by one and the last tower receiving $e$ additional levels, since

$$
q\kappa\equiv1\pmod N,\qquad
e\kappa\equiv-m\pmod N,\qquad qm+e=N.
$$

To check the second congruence, substitute $e=N-mq$ and reduce $q\kappa$ modulo $N$. Starting at $v_{j-1}$, the $q$th image lands on the side ending at $v_j$. There it equals $\beta_jv_{j-1}+\alpha_jv_j$. If $\beta_j=0$ it lands exactly on $v_j$. Starting at the last base $v_m$ takes $q+e$ steps to reach the contact on side one. This longer path passes through $v_0=v_N$ after $e$ steps. Thus

$$
(\zeta^q-\beta_j)v_{j-1}=\alpha_jv_j\quad(1\le j\le m),
\qquad\zeta^ev_m=v_0.
$$

To locate the angle, follow $v_0$ for $q$ steps. Its image lies strictly between $v_0$ and $v_1$ on side one, after an index advance of $q\kappa=pN+1$. Count the $p$ full circuits before comparing directions. If $\Phi_{i+N}=\Phi_i+2\pi$ denotes the continued angle of a vertex, this gives

$$
0<q\theta_\zeta-2\pi p<\Phi_1-\Phi_0.
$$

The left inequality gives $p/q<\theta_\zeta/(2\pi)$ on dividing by $2\pi q$. Topic III gives the other inequality $\theta_\zeta/(2\pi)<\kappa/N$. We can keep $\omega=\zeta$ and choose $r=\kappa$, $s=N$, since already $q<N$.

Divide the $j$th recurrence by $v_{j-1}$. The positive real coefficient $\alpha_j$ leaves the angle of $v_j/v_{j-1}$ unchanged, so $u_j=\Phi_j-\Phi_{j-1}\in(0,\pi)$. To find their total we still need the continued index at the end of the closing path. Start at $m$ and add $\kappa$ for each of its $e$ steps. Put $g=\kappa-mp$. Substituting $e=N-mq$ and $q\kappa=pN+1$ gives the exact ending index

$$
m+e\kappa=gN.
$$

Hence $\Phi_m+e\theta_\zeta=\Phi_0+2\pi g$. Adding the side increments gives

$$
e\vartheta+\sum_j u_j=2\pi g=2\pi(r-mp).
$$

When $e=0$ we have $q=1$ and $m=N$, since $q\kappa-pN=1$ and $q$ divides $N$. Then $\Phi_m=\Phi_N=\Phi_0+2\pi$ already contains the full turn.

### Continue the eight-state towers through the closing path

In the example with eight vertices, a step adds three to the vertex index. Both bases already occur in the product since $q=3$ and $m=\lfloor8/3\rfloor=2$. The Farey interval runs from $1/3$ to $3/8$, giving $e=8-2\cdot3=2$. The longer tower starts at $v_2$, reaches $v_0$ after two steps, then takes three steps to its contact $c_1$. Read its last three steps together with the three from $v_1$ to $c_2$ to obtain

$$
(\zeta^3-\beta_1)v_0=\alpha_1v_1,\qquad
(\zeta^3-\beta_2)v_1=\alpha_2v_2,\qquad
\zeta^2v_2=v_0.
$$

Divide each of the first two relations by its starting vertex. On multiplication the ratios give $(v_1/v_0)(v_2/v_1)=v_2/v_0$. Substituting $v_0=\zeta^2v_2$ gives

$$
\zeta^2(\zeta^3-\beta_1)(\zeta^3-\beta_2)=\alpha_1\alpha_2.
$$

For the angles the same cancellation reads $u_1+u_2=(\Phi_1-\Phi_0)+(\Phi_2-\Phi_1)=\Phi_2-\Phi_0$. Closing from index two takes two steps of three positions. Keeping their sum as $2+2\cdot3=8$ tells us to use the continued angle $\Phi_8$. Hence

$$
\Phi_2+2\theta_\zeta=\Phi_8=\Phi_0+2\pi,
\qquad2\theta_\zeta+u_1+u_2=2\pi.
$$

The complex coordinate gives $v_8=v_0$. The continued index says that we arrived there one turn later. Notice where $u_j$ is measured. The power $\zeta^3$ turns through $3\theta_\zeta$, whereas $u_j$ is the direction from the real point $\beta_j$ to $\zeta^3$. In the angle bar, take $\theta_\zeta=5\pi/7$ and $u_1=u_2=2\pi/7$. The parts sum to $10\pi/7+2\pi/7+2\pi/7=2\pi$. Topic XIV constructs the polygon and verifies that both these angles occur.

<!-- reader-figure:early-extra -->

### Complete-proof continuation: the single-contact exception

Suppose there is one cycle and just one open-side contact, so $\delta=\varphi=1$. There is now a direct way to choose the length $q$. We want a path that advances one vertex modulo $N$, meaning $q\kappa\equiv1\pmod N$. Since $\gcd(\kappa,N)=1$, there is exactly one such $q$ between $1$ and $N-1$. Put $p=(q\kappa-1)/N$.

Dividing $N$ by this $q$ again gives $m=\lfloor N/q\rfloor$ and $e=N-mq$. Base one carries the sole contact between vertices. Mark the other bases up to $m$ on paths of vertex images. The congruences $q\kappa\equiv1$ and $e\kappa\equiv-m$ supply the same tower partition and closing index as before. All the product and angle calculations therefore apply even though the record with deficit one has no successor.

For example, at $N=7$ and $\kappa=3$, the equality $5\cdot3=2\cdot7+1$ gives $q=5$, $p=2$. There is one factor because $7=1\cdot5+2$. Its equations read $\zeta^2(\zeta^5-\beta_1)=1-\beta_1$ and $2\vartheta+u_1=2\pi$. This calculation gives the restrictions an extremal polygon would have to satisfy for these indices.

### Complete-proof continuation: several index cycles require reversal

Take the indices $N=6$ and $\kappa=2$ to see what changes when the shift has two cycles. The even indices go $2,4,0,2$ and the odd indices go $1,3,5,1$. If sides one and two each receive an interior contact, the return from $v_2$ ends on the side from $v_1$ to $v_2$. Writing $\zeta^3v_2=\alpha_2v_2+\beta_2v_1$ gives a recurrence from $v_2$ back to $v_1$. This is the reason to read the bases backwards. The two earlier steps $v_2\to v_4\to v_0$ give $\zeta^2v_2=v_0$. When the reversed list starts at $v_2$ and ends at $v_0$, its closing equation therefore uses $\zeta^{-2}v_0=v_2$.

For the general case assume $\varphi=\delta\ge2$. Define $L=N/\delta$ and $K=\kappa/\delta$. Each index cycle has length $L$ and contains one interior contact. Every base therefore first returns to its own assigned side after $L$ steps. Choose $h\in\{1,\ldots,L-1\}$ with $Kh\equiv-1$ modulo $L$, and put

$$
b=\frac{Kh+1}{L},\qquad s_0=N-h,\qquad r_0=\kappa-b.
$$

Multiply $Kh+1=bL$ by $\delta$. The equation becomes $\delta+h\kappa=bN$, so a path starting at index $\delta$ ends at the continued index $bN$, another label for $v_0$. Why are all $h$ images vertices? The path stays in residue class zero modulo $\delta$. The only open-side contact assigned to that class has index $\delta$ itself, and the indices return there for the first time after $L>h$ steps. The $L$-step return, in contrast, ends on the side *behind* the base. Its equations are

$$
(\zeta^L-\alpha_i)v_i=\beta_i v_{i-1}\quad(1\le i\le\delta),
\qquad\zeta^hv_\delta=v_0.
$$

Each return lands strictly between the ends of its side, so both weights are strictly between zero and one. Put $\gamma_i=\Phi_i-\Phi_{i-1}$ and $\Gamma=\sum_{i=1}^{\delta}\gamma_i$. After $L$ steps the index has advanced $K$ circuits, but the return is still short of the base by an angle strictly smaller than $\gamma_i$. The path from $v_\delta$ to $v_0$ closes exactly at index $bN$. These two angle counts read

$$
0<2\pi K-L\theta_\zeta<\gamma_i,\qquad
\Gamma+h\theta_\zeta=2\pi b.
$$

The upper endpoint $K/L$ follows directly from $2\pi K-L\theta_\zeta>0$. For the lower endpoint add the $\delta$ strict upper bounds $2\pi K-L\theta_\zeta<\gamma_i$ and use the closing equality. This gives

$$
s_0\theta_\zeta-2\pi r_0=\Gamma-\delta(2\pi K-L\theta_\zeta)>0 .
$$

Our angle therefore lies between $r_0/s_0$ and $K/L$. Substituting $s_0=N-h$ and $r_0=\kappa-b$ gives $Ks_0-r_0L=bL-Kh=1$, while $L+s_0=N+(L-h)>N$. These fractions are Farey neighbours, with the smaller denominator $L$ on the right.

Two changes put this case in the notation of the product. Conjugate the multiplier, so the fraction $K/L$ becomes the *left* endpoint $1-K/L$ at angle $\vartheta=2\pi-\theta_\zeta$. Next read the bases in reverse order, so a recurrence that originally led from $i$ to $i-1$ now leads from $j-1$ to $j$. Set $W_j=\overline v_{\delta-j}$ for $0\le j\le\delta$. Define

$$
(p,q,r,s)=(L-K,L,s_0-r_0,s_0),\qquad
m=\delta,\qquad e=-h,
$$

and give the weights in the new order by $\widetilde\beta_j=\alpha_{\delta-j+1}$, $\widetilde\alpha_j=\beta_{\delta-j+1}$. In particular the weight subtracted from $\omega^q$ comes from the term originally on the same side as $\zeta^Lv_i$. We obtain

$$
(\omega^q-\widetilde\beta_j)W_{j-1}=\widetilde\alpha_jW_j,
\qquad\omega^{-h}W_m=W_0.
$$

In the reversed list each step originally went from $v_i$ to $v_{i-1}$. Conjugation changes the sign of that angular difference, giving the positive increment $u_j=\gamma_{\delta-j+1}$. The recurrence now has the required order $q<s$. Adding these increments to the closing angle $-h\vartheta$ gives

$$
e\vartheta+\sum_j u_j
=-h(2\pi-\theta_\zeta)+2\pi b-h\theta_\zeta
=2\pi(b-h)=2\pi(r-mp).
$$

Here is the angle calculation for those same six indices. We have $L=3$, $K=1$, $h=2$ and $b=1$. The original interval is $(1/4,1/3)$ of a turn. Choose $\theta_\zeta=105^\circ$ inside it to check the arithmetic. The closing equality gives $\Gamma=360^\circ-2(105^\circ)=150^\circ$. After conjugation the ray is at $255^\circ$ and the endpoints are $2/3$ and $3/4$. Hence $m=2$, $e=-2$, and the lifted sum is $-2(255^\circ)+150^\circ=-360^\circ$. Both factor angles are positive. The negative turn comes from reading the closing path backwards. These data illustrate the index and angle calculation under the return hypotheses.

The negative exponent is defined because $\omega\ne0$. Multiplying the product by $\omega^{mq}$ gives the polynomial form

$$
\omega^s\prod_j(\omega^q-\beta_j)
=\omega^{mq}\prod_j(1-\beta_j).
$$

To use the product on a given ray, we need to know which multiplier and closing exponent to insert. The choices depend on how many cycles and contacts we started with.

| Shift cycles and contacts | Path length $q$ | Multiplier and endpoints | Closing path |
| --- | --- | --- | --- |
| $\delta=1$, $\varphi>1$ | Advancing one base gives $q\kappa-pN=1$. | Use $\omega=\zeta$ between $p/q$ and $\kappa/N$. | $m=\lfloor N/q\rfloor$, $s=N$, $e=N-mq\ge0$. |
| $\delta=\varphi=1$ | Solve $q\kappa\equiv1\pmod N$ for $1\le q<N$. | Use the same multiplier $\omega=\zeta$ and endpoints $p/q<\kappa/N$. | Again $s=N$ and $e=N-mq$, with $m=\lfloor N/q\rfloor$. |
| $\varphi=\delta\ge2$ | One return visits the $L=N/\delta$ indices of a cycle, so $q=L$. | Use $\omega=\bar\zeta$ and the reflected endpoints $(L-K)/L<(s_0-r_0)/s_0$. | $m=\delta$, $s=s_0=N-h$ and $e=-h$. |

In the last row the fraction $K/L$ was originally on the right. Conjugation carries each fraction $f$ to $1-f$, putting $1-K/L$ on the left. Reading the conjugated vertices backwards makes each side increment positive again. The closing angle still has coefficient $-h$, so their sum with the closing angle can count a negative number of turns.

### Why these endpoints really are Farey neighbours

For any two reduced fractions $p/q<r/s$ in the list of order $N$, the criterion for being neighbours is

$$
rq-ps=1,\qquad q+s>N.
$$

In each case above, $rq-ps=1$ and the denominators sum to more than $N$. To see why this leaves no space for another fraction of the list, suppose $p/q<c/d<r/s$. The determinant identity gives

$$
(d,c)=(rd-sc)(q,p)+(qc-pd)(s,r).
$$

The two strict fraction inequalities say $rd-sc>0$ and $qc-pd>0$. These coefficients are integers, hence each is at least one. Reading the first coordinate gives $d\ge q+s>N$, too large for order $N$.

<details>
<summary>Why consecutive Farey fractions satisfy both conditions</summary>

Conversely, suppose no fraction in the list lies between $p/q$ and $r/s$. Represent them by the integer vectors $U=(q,p)$ and $V=(s,r)$, with $D=\det(U,V)>0$. Bézout's identity gives an integer $B$ with $\det(U,B)=1$, so $U,B$ form a basis of the integer lattice. In this basis $V=aU+DB$ for some integer $a$. The coordinates $a,D$ are coprime since $s,r$ are. If $D>1$, consider the integer vector

$$
Q=\left\lceil\frac aD\right\rceil U+B
=\left(\left\lceil\frac aD\right\rceil-\frac aD\right)U+\frac1D V.
$$

Since $a/D$ is not an integer, both coefficients of $U,V$ in this expression for $Q$ are strictly between zero and one. If they sum to more than one, take $U+V-Q$ instead. Its coefficients are their complements to one. Either way we have an integer vector $(d,c)=\xi U+\eta V$ with both coefficients positive and $\xi+\eta\le1$. Its slope lies strictly between the two endpoint fractions, and $0<d=\xi q+\eta s\le\max(q,s)\le N$. Even before reduction this gives a fraction in the gap, contradicting our choice of neighbours. Thus $D=1$. Also the mediant $(p+r)/(q+s)$ lies strictly between the endpoints, so $q+s$ has to exceed $N$.

</details>

### The factor angles lie in one controlled interval

Each factor has the form $\omega^q-t$ for a real $t$ between zero and one. First locate $\omega^q$. Put $A=q\vartheta-2\pi p$. The width of the Farey interval is $1/(qs)$, so $0<A<2\pi/s$. Its larger denominator satisfies $s\ge3$ since $q<s$ and $q+s>N\ge4$. Thus $\omega^q=\rho^q e^{iA}$ has positive imaginary part. As $t$ runs from zero to one, $\omega^q-t$ moves left at that fixed height. Its principal argument increases strictly from $A$ to $M=\operatorname{Arg}(\omega^q-1)<\pi$.

Our weights may equal zero but are always smaller than one, so the factor angles satisfy $A\le u_j<M$. This also identifies their principal arguments with the positive side angles in the real turn count.

We can now hand two quantities to the next calculation. Multiplying the factors determines their product of lengths. Adding their continued angles on the polygon determines their mean *as a real number*. The two sixth roots in the example show why we need both.
