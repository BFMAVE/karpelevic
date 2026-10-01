### Eliminate the vertices, but keep the number of turns

The preceding topics began with a nonreal extremal eigenvalue $\zeta$, its least realising order $N\ge4$, and an invariant $N$-gon. Its interior contacts form one run of $\varphi$ sides. Write $\delta=\gcd(N,\kappa)$, where $\kappa$ is the cyclic contact shift.

If $\varphi>\delta$, Topic VI gives $\Delta=1$ and hence $\delta=1$. Since $\varphi\ge\delta$, the possibilities are: $\delta=1$ with more than one interior contact; $\delta=1$ with just one; or $\varphi=\delta\ge2$. They all lead to the same product after choosing an orientation, but their closing paths differ.

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

The second is an equality of real numbers. It specifies the full number of turns, information that the first equation alone cannot retain.

The product has two kinds of information to carry. Its absolute value measures accumulated contraction along the return paths. Its angle measures their accumulated turning. Complex multiplication records the latter only modulo a full turn, so we must carry the real angular sum alongside the algebra. Losing that integer here would later allow the convexity calculation to compare the wrong branch of the polynomial.

### The cancellation mechanism

Suppose successive nonzero base coordinates $W_0,\ldots,W_m$ satisfy

$$
(\omega^q-\beta_j)W_{j-1}=\alpha_jW_j\quad(1\le j\le m),
\qquad\omega^eW_m=W_0.
$$

Multiplying the first $m$ equations cancels $W_1,\ldots,W_{m-1}$. Substituting the closing relation cancels the remaining $W_0,W_m$ and gives the product. No factor can vanish because the right side of its recurrence is nonzero.

Every $\alpha_j$ is positive, so it contributes no angle. The factor angle equals the real angular increment from $W_{j-1}$ to $W_j$ once that increment is shown to lie in $(0,\pi)$. Adding these increments makes the intermediate vertex angles cancel as well. The closing path retains the integer multiples of $2\pi$.

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

Multiplying the five equations cancels all five vertices and gives $(\lambda-1/2)^5=(1/2)^5$. Each factor $\lambda-1/2=\eta/2$ has principal argument $2\pi/5$, and their real argument sum is $2\pi$, although the product is positive real. Here $q=1$, $m=5$, and $e=0$. This exact invariant-polygon example illustrates elimination and winding; the argument below must obtain comparable equations from an arbitrary extremal polygon, without assuming regularity or equal coefficients.

<!-- reader-figure:early -->

### Coprime shift with more than one interior contact

Assume $\delta=1$ and $\varphi>1$. The return arithmetic supplies integers $q,p,h$ with

$$
q\kappa-pN=1,\qquad q\varphi+h=N.
$$

In particular $1\le q<N$. Put $m=\lfloor N/q\rfloor$ and $e=N-mq$, so $m\ge\varphi$ and $0\le e<q$. We enlarge the base list to $v_1,\ldots,v_m$. A new base beyond $\varphi$ is an existing vertex on a vertex-to-vertex path; it has $\beta_j=0$ and introduces no new interior contact.

Adding a base is just splitting an already known path into shorter pieces. A zero-coefficient contact contributes the factor $\zeta^q$ and a right-side coefficient one. The product still represents the same total path, but its $m$ factors now all have the common exponent $q$. This regularity is what will make a comparison of their arguments possible.

The suspension argument of Topic V applies to these $m$ bases with displacement one and extra height $e$, since

$$
q\kappa\equiv1\pmod N,\qquad
e\kappa\equiv-m\pmod N,\qquad qm+e=N.
$$

The second congruence follows by subtracting $m(q\kappa-pN)=m$ from $N\kappa$. Each base returns to the next one after $q$ steps, except the last, whose closing path has $q+e$ steps. That path reaches $v_0=v_N$ after $e$ steps. Thus

$$
(\zeta^q-\beta_j)v_{j-1}=\alpha_jv_j\quad(1\le j\le m),
\qquad\zeta^ev_m=v_0.
$$

The $q$-step path from $v_0$ ends inside side one. With the continued vertex angles $\Phi_{i+N}=\Phi_i+2\pi$, its index advance $q\kappa=pN+1$ gives

$$
0<q\theta_\zeta-2\pi p<\Phi_1-\Phi_0.
$$

Together with Topic III's bound $\theta_\zeta/(2\pi)<\kappa/N$, this places the angle between $p/q$ and $\kappa/N$. We take $\omega=\zeta$, $r=\kappa$, and $s=N$.

Each factor angle is the side increment $u_j=\Phi_j-\Phi_{j-1}\in(0,\pi)$. Define the integer $g=\kappa-mp$. The closing path has unreduced index advance

$$
m+e\kappa=gN,
$$

so $\Phi_m+e\theta_\zeta=\Phi_0+2\pi g$. Therefore

$$
e\vartheta+\sum_j u_j=2\pi g=2\pi(r-mp).
$$

When $e=0$, the equality uses the continued angle at $v_N=v_0$; those two labels still differ by a full turn.

### Coprime shift with a single interior contact

If $\delta=\varphi=1$, there is no next record from which to obtain $q$. Instead choose the unique $q\in\{1,\ldots,N-1\}$ satisfying $q\kappa\equiv1$ modulo $N$, and put $p=(q\kappa-1)/N$. This inverse exists because $\kappa,N$ are coprime.

Set $m=\lfloor N/q\rfloor$ and $e=N-mq$ as before. The original interior contact is on side one, so the enlarged base list includes it. The same congruences and suspension partition give exactly the preceding recurrences, angle bounds, and closing equality. Thus the one-contact case is covered without applying the no-skipping theorem or assuming that a successor record exists.

For an arithmetic check, $N=7$ and $\kappa=3$ give $q=5$, $p=2$, because $5\cdot3-2\cdot7=1$. Then $m=1$, $e=2$, and the product would be $\zeta^2(\zeta^5-\beta_1)=1-\beta_1$, with real phase $2\vartheta+u_1=2\pi$. This illustrates the algebra of this case; it does not assert that these data alone provide an extremal polygon.

### Several index cycles: reverse the orientation

Assume $\varphi=\delta\ge2$. Define $L=N/\delta$ and $K=\kappa/\delta$. Each index cycle has length $L$ and contains one interior contact. Every base therefore first returns to its own assigned side after $L$ steps. Choose $h\in\{1,\ldots,L-1\}$ with $Kh\equiv-1$ modulo $L$, and put

$$
b=\frac{Kh+1}{L},\qquad s_0=N-h,\qquad r_0=\kappa-b.
$$

The integer $b$ records turns. The path from $v_\delta$ reaches $v_0$ after $h$ steps, with no intermediate interior contact. Unlike the preceding case, the first-return equations link bases backwards:

$$
(\zeta^L-\alpha_i)v_i=\beta_i v_{i-1}\quad(1\le i\le\delta),
\qquad\zeta^hv_\delta=v_0.
$$

Here all $\alpha_i,\beta_i$ lie strictly between zero and one. Let $\gamma_i=\Phi_i-\Phi_{i-1}$ and $\Gamma=\sum_{i=1}^{\delta}\gamma_i$. The real return inequalities and closing equality give

$$
0<2\pi K-L\theta_\zeta<\gamma_i,\qquad
\Gamma+h\theta_\zeta=2\pi b.
$$

These imply $r_0/s_0<\theta_\zeta/(2\pi)<K/L$. The determinant relation $Ks_0-r_0L=1$ and inequality $L+s_0>N$ make these consecutive Farey fractions. Their smaller denominator is on the right.

Conjugation changes the angle to $\vartheta=2\pi-\theta_\zeta$. Reverse the base list at the same time, setting $W_j=\overline v_{\delta-j}$ for $0\le j\le\delta$. Define

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

The negative exponent is harmless because $\omega\ne0$. Multiplying the product by $\omega^{mq}$ gives the polynomial form

$$
\omega^s\prod_j(\omega^q-\beta_j)
=\omega^{mq}\prod_j(1-\beta_j).
$$

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

For the converse, let $U=(q,p)$ and $V=(s,r)$ encode neighbouring fractions and set $D=\det(U,V)>0$. Because $p,q$ are coprime, choose an integer vector $B$ with $\det(U,B)=1$ by Bézout's identity. Write $V=aU+DB$; the reducedness of $r/s$ gives $\gcd(a,D)=1$. If $D>1$, form the integer vector

$$
Q=\left\lceil\frac aD\right\rceil U+B
=\left(\left\lceil\frac aD\right\rceil-\frac aD\right)U+\frac1D V.
$$

Both coefficients lie in $(0,1)$. If their sum is larger than one, replace $Q$ by $U+V-Q$. We obtain $Q=\xi U+\eta V$ with $\xi,\eta>0$ and $\xi+\eta\le1$. Writing $Q=(d,c)$ gives a fraction strictly between the neighbours, with $0<d=\xi q+\eta s\le\max(q,s)\le N$. Reducing it can only decrease its denominator, contradicting adjacency. Thus $D=1$. If $q+s\le N$, the mediant $(p+r)/(q+s)$ would also be an intermediate fraction, proving the other required inequality.

### The factor angles lie in one controlled interval

Put $A=q\vartheta-2\pi p$. Farey adjacency and $N\ge4$ give $0<A<2\pi/s<\pi$. Thus $\omega^q=\rho^qe^{iA}$ lies in the upper half-plane. Subtracting a real number $t\in[0,1]$ moves it horizontally left; its principal argument increases strictly from $A$ to $M=\operatorname{Arg}(\omega^q-1)<\pi$. The principal argument is the representative in $(-\pi,\pi]$.

Therefore each $\beta_j\in[0,1)$ gives $A\le u_j<M$. These are exactly the positive side increments used above, so no extra multiples of $2\pi$ need to be inserted into individual factor arguments.

A product equation with a positive real right side says only that its total argument is an integer multiple of $2\pi$. It does not identify that integer. For example, three factors each of argument $2\pi/3$ multiply to argument zero modulo $2\pi$, but their real argument sum is $2\pi$. Our continued vertex angles retain this distinction and produce the specific integer $r-mp$. Topics VIII and IX need this exact equality to fix the average factor angle before bounding the modulus.
