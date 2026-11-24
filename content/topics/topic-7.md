### Five midpoint averages show the mechanism

Let $\eta=e^{2\pi i/5}$ and take the regular pentagon with vertices $v_j=\eta^j$. The number

$$
\lambda=\frac{1+\eta}{2}=\cos(\pi/5)e^{i\pi/5}
$$

sends each vertex to the midpoint of the side from that vertex to the next. Thus the contact equation is

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

Every $\alpha_j$ is positive, so it contributes no angle. The factor angle equals the real angular increment from $W_{j-1}$ to $W_j$ once that increment is shown to lie in $(0,\pi)$. Adding these increments makes the intermediate vertex angles cancel as well. The closing path retains the integer multiples of $2\pi$.

### Eliminate the vertices, but keep the number of turns

The preceding topics began with a nonreal extremal eigenvalue $\zeta$, its least realising order $N\ge4$, and an invariant $N$-gon. Its interior contacts form one run of $\varphi$ sides. Write $\delta=\gcd(N,\kappa)$, where $\kappa$ is the cyclic contact shift.

When $\varphi>\delta$, Topic VI gives $\Delta=1$ and hence $\delta=1$. We therefore begin with the coprime case $\delta=1$, including the special possibility of just one contact in an open side. Since $\varphi\ge\delta$, the remaining case has $\varphi=\delta\ge2$. Its closing path goes in the other direction.

The final statement uses $\omega=\zeta$ or its conjugate, written $\omega=\rho e^{i\vartheta}$ with $0<\vartheta<2\pi$. There are consecutive reduced fractions $p/q<r/s$ in the Farey list $F_N$, the ordered fractions in $[0,1]$ with denominators at most $N$, such that

$$
\frac pq<\frac{\vartheta}{2\pi}<\frac rs,\qquad q<s.
$$

Define $m=\lfloor N/q\rfloor$, the integer part of $N/q$, and $e=s-mq$. For coefficients $0\le\beta_j<1$ and $\alpha_j=1-\beta_j>0$, the desired identities are

$$
\omega^e\prod_{j=1}^{m}(\omega^q-\beta_j)=\prod_{j=1}^{m}\alpha_j,
$$

$$
e\vartheta+\sum_{j=1}^{m}u_j=2\pi(r-mp),
\qquad u_j=\operatorname{Arg}(\omega^q-\beta_j).
$$

Here $\operatorname{Arg}$ is the principal argument, the representative in $(-\pi,\pi]$. The construction puts every $u_j$ in $(0,\pi)$. The second equation is an equality of real numbers. It specifies the full number of turns, information that the first equation alone cannot retain.

<aside class="reader-notation-panel" aria-label="Multiplier and angle notation">

| Symbol | Meaning to retain throughout the topic |
| --- | --- |
| $\zeta$, $\theta_\zeta$ | The multiplier after arranging half-open contacts, with its angle in $(0,2\pi)$. |
| $\omega$, $\vartheta$ | Either that multiplier or its conjugate, oriented so that the smaller Farey denominator comes first. |
| $u_j$ | The principal argument of $\omega^q-\beta_j$, proved to be a positive side-angle increment. |
| $\Phi_i$ | Continued real vertex angles, with $\Phi_{i+N}=\Phi_i+2\pi$, retaining full turns. |

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

Assume $\delta=1$ and $\varphi>1$. The return arithmetic supplies integers $q,p,h$ with

$$
q\kappa-pN=1,\qquad q\varphi+h=N.
$$

In particular $1\le q<N$. Put $m=\lfloor N/q\rfloor$ and $e=N-mq$, so $m\ge\varphi$ and $0\le e<q$. We enlarge the base list to $v_1,\ldots,v_m$. A new base beyond $\varphi$ is an existing vertex on a vertex-to-vertex path; it has $\beta_j=0$ and introduces no new interior contact.

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

The $q$-step path from $v_0$ ends inside side one. With the continued vertex angles $\Phi_{i+N}=\Phi_i+2\pi$, its index advance $q\kappa=pN+1$ gives

$$
0<q\theta_\zeta-2\pi p<\Phi_1-\Phi_0.
$$

Together with Topic III's bound $\theta_\zeta/(2\pi)<\kappa/N$, this places the angle between $p/q$ and $\kappa/N$. We take $\omega=\zeta$, $r=\kappa$, and $s=N$.

Each factor angle is the side increment $u_j=\Phi_j-\Phi_{j-1}\in(0,\pi)$. Define the integer $g=\kappa-mp$. Starting from index $m$, the closing path adds $e\kappa$, so its unreduced ending index is

$$
m+e\kappa=gN.
$$

Hence $\Phi_m+e\theta_\zeta=\Phi_0+2\pi g$. Adding the side increments gives

$$
e\vartheta+\sum_j u_j=2\pi g=2\pi(r-mp).
$$

When $e=0$ we have $q=1$ and $m=N$, since $q\kappa-pN=1$ and $q$ divides $N$. Then $\Phi_m=\Phi_N=\Phi_0+2\pi$ already contains the full turn.

### Continue the eight-state towers through the closing path

Topic V's index example had $N=8$, $\kappa=3$, and two interior-contact bases. Its return data give $q=3$, $m=2$, $e=2$, and the Farey pair $p/q=1/3$, $r/s=3/8$. There is no need to add bases. The five-step return from $v_2$ passes through $v_0$ after two steps, leaving a three-step path to contact $c_1$. Thus the paths yield

$$
(\zeta^3-\beta_1)v_0=\alpha_1v_1,\qquad
(\zeta^3-\beta_2)v_1=\alpha_2v_2,\qquad
\zeta^2v_2=v_0.
$$

The two averaging equations eliminate $v_1$, and the closing equation eliminates $v_0,v_2$:

$$
\zeta^2(\zeta^3-\beta_1)(\zeta^3-\beta_2)=\alpha_1\alpha_2.
$$

Read the angles from the same paths. The factor angles are $u_1=\Phi_1-\Phi_0$ and $u_2=\Phi_2-\Phi_1$. Starting from index two, the closing path advances by $2\cdot3=6$ index positions, so its unreduced ending index is $2+2\cdot3=8$. Therefore

$$
\Phi_2+2\theta_\zeta=\Phi_8=\Phi_0+2\pi,
\qquad2\theta_\zeta+u_1+u_2=2\pi.
$$

The complex coordinate gives $v_8=v_0$. The continued index says that we arrived there one turn later. Notice where $u_j$ is measured. The power $\zeta^3$ turns through $3\theta_\zeta$, whereas $u_j$ is the direction from the real point $\beta_j$ to $\zeta^3$. In the angle bar, take $\theta_\zeta=5\pi/7$ and $u_1=u_2=2\pi/7$. The parts sum to $10\pi/7+2\pi/7+2\pi/7=2\pi$. Topic XIV constructs the polygon and verifies that both these angles occur.

<!-- reader-figure:early-extra -->

### Complete-proof continuation: the single-contact exception

If $\delta=\varphi=1$, there is no next record from which to obtain $q$. Instead choose the unique $q\in\{1,\ldots,N-1\}$ satisfying $q\kappa\equiv1$ modulo $N$, and put $p=(q\kappa-1)/N$. This inverse exists because $\kappa,N$ are coprime.

Set $m=\lfloor N/q\rfloor$ and $e=N-mq$ as before. The original interior contact is on side one, so the enlarged base list includes it. The same congruences and suspension partition give exactly the preceding recurrences, angle bounds, and closing equality. Thus the one-contact case is covered without applying the no-skipping theorem or assuming that a successor record exists.

For an arithmetic check, $N=7$ and $\kappa=3$ give $q=5$, $p=2$, because $5\cdot3-2\cdot7=1$. Then $m=1$, $e=2$, and the product would be $\zeta^2(\zeta^5-\beta_1)=1-\beta_1$, with real phase $2\vartheta+u_1=2\pi$. This illustrates the algebra of this case; it does not assert that these data alone provide an extremal polygon.

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

Here all $\alpha_i,\beta_i$ lie strictly between zero and one. Let $\gamma_i=\Phi_i-\Phi_{i-1}$ and $\Gamma=\sum_{i=1}^{\delta}\gamma_i$. The real return inequalities and closing equality give

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

and $\widetilde\beta_j=\alpha_{\delta-j+1}$, $\widetilde\alpha_j=\beta_{\delta-j+1}$. The backwards recurrences become

$$
(\omega^q-\widetilde\beta_j)W_{j-1}=\widetilde\alpha_jW_j,
\qquad\omega^{-h}W_m=W_0.
$$

They now have the cancellation form, with $q<s$. Reversal and conjugation make the factor increments positive: $u_j=\gamma_{\delta-j+1}$. Their real phase is

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

The three cases now have one common output. This table keeps track of the changes made before using the product; $L,K,h,b,s_0,r_0$ in its last row are the integers just defined for the multiple-cycle case.

| Contact pattern | How $q$ is obtained | Orientation and Farey endpoints | Closing data |
| --- | --- | --- | --- |
| $\delta=1$, $\varphi>1$ | No-skipping gives $q\kappa-pN=1$ from the record basis. | $\omega=\zeta$; endpoints $p/q<\kappa/N$. | $m=\lfloor N/q\rfloor$, $s=N$, $e=N-mq\ge0$. |
| $\delta=\varphi=1$ | Choose the modular inverse of $\kappa$ directly, without a successor record. | $\omega=\zeta$; the same endpoint form $p/q<\kappa/N$. | The same $m,s,e$; the suspension also covers a single base. |
| $\varphi=\delta\ge2$ | Each index cycle has length $q=L=N/\delta$. | Conjugate and reverse: $\omega=\bar\zeta$; endpoints $(L-K)/L<(s_0-r_0)/s_0$. | $m=\delta$, $s=s_0=N-h$, $e=-h$. |

In the last case conjugation sends a fraction $f$ to $1-f$ and reverses the ordered interval. It takes the smaller denominator from the right endpoint to the left. Reversing the base list then restores forward recurrences with positive side-angle increments. The negative closing exponent records this reversed path; it is consistent with the exact real phase, which may now be a negative number of full turns.

### Why these endpoints really are Farey neighbours

For reduced fractions with denominators at most $N$, the neighbour criterion is

$$
rq-ps=1,\qquad q+s>N.
$$

The pairs found above satisfy both conditions. Any fraction $c/d$ strictly between such a pair has

$$
(d,c)=(rd-sc)(q,p)+(qc-pd)(s,r).
$$

Both coefficients are positive integers, so $d\ge q+s>N$. No allowed fraction fits between them.

<details>
<summary>Why consecutive Farey fractions satisfy both conditions</summary>

For the converse, let $U=(q,p)$ and $V=(s,r)$ encode neighbouring fractions and set $D=\det(U,V)>0$. Because $p,q$ are coprime, choose an integer vector $B$ with $\det(U,B)=1$ by Bézout's identity. Write $V=aU+DB$; the reducedness of $r/s$ gives $\gcd(a,D)=1$. If $D>1$, form the integer vector

$$
Q=\left\lceil\frac aD\right\rceil U+B
=\left(\left\lceil\frac aD\right\rceil-\frac aD\right)U+\frac1D V.
$$

Both coefficients lie in $(0,1)$. If their sum is larger than one, replace $Q$ by $U+V-Q$. We obtain $Q=\xi U+\eta V$ with $\xi,\eta>0$ and $\xi+\eta\le1$. Writing $Q=(d,c)$ gives a fraction strictly between the neighbours, with $0<d=\xi q+\eta s\le\max(q,s)\le N$. Reducing it can only decrease its denominator, contradicting adjacency. Thus $D=1$. If $q+s\le N$, the mediant $(p+r)/(q+s)$ would also be an intermediate fraction, proving the other required inequality.

</details>

### The factor angles lie in one controlled interval

Put $A=q\vartheta-2\pi p$. The determinant identity gives $r/s-p/q=1/(qs)$, hence $0<A<2\pi/s$. Since $q<s$ and $q+s>N\ge4$, the larger denominator satisfies $s\ge3$, so $2\pi/s<\pi$. Thus $\omega^q=\rho^qe^{iA}$ lies in the upper half-plane. Subtracting a real number $t\in[0,1]$ moves it horizontally left; its principal argument increases strictly from $A$ to $M=\operatorname{Arg}(\omega^q-1)<\pi$.

Therefore each $\beta_j\in[0,1)$ gives $A\le u_j<M$. These are exactly the positive side increments used above, so no extra multiples of $2\pi$ need to be inserted into individual factor arguments.

We can now hand two quantities to the next calculation. Multiplying the factors determines their product of lengths. Adding their continued angles on the polygon determines their mean *as a real number*. The two sixth roots in the example show why we need both.
