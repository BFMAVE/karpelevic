### Multiply the coordinate quotients {#winding}

Suppose $h$ marks have almost the same distance from zero and all are nonzero. Take a permutation $P$ of their labels. Fix a proposed rotation angle $\theta$ and let
$$
 \tau_{iP(i)}=\operatorname{Arg}\frac{v_{P(i)}}{e^{i\theta}v_i}.
$$
The principal argument $\operatorname{Arg}$ is the angle in $(-\pi,\pi]$. Here we use permutations for which every error $\tau_{iP(i)}$ has absolute value at most $10^{-4}$ radians. We call these permutations **good** for the angle $\theta$. Start with $\theta$ and add the small error to choose one real angle for each move. These angles describe the arguments of the quotients $v_{P(i)}/v_i$. Their product is one because $P$ uses each label once. The sum of the chosen angles is therefore a multiple of $2\pi$, and
$$
 k_P=\frac{h\theta+\sum_i\tau_{iP(i)}}{2\pi}
$$
is an integer. It records the total angle in turns when the move from $v_i$ to $v_{P(i)}$ is measured by $\theta+\tau_{iP(i)}$. We call $k_P$ the **winding integer**. The mean angle of such a draw is $gk_P$, where $g=2\pi/h$.

### One side of the regular polygon {#side-model}

Place $h$ marks at the regular $h$th roots of unity. There are two permutations to draw. The first fixes every label. The second advances every label by one step, including the last label back to the first. For $\theta=g/2$ their angular errors are $-g/2$ and $g/2$ at every mark, so their winding integers are $0$ and $1$. Once $h\ge32\,000$, both meet the small error bound.

Draw the two permutations with probabilities $1-u$ and $u$, where $0\le u\le1$. They act on the marks by multiplication by $1$ and $e^{ig}$, respectively. The mean multiplier $\eta=1-u+ue^{ig}$ runs along their common side. The squared side length is $a_h=|e^{ig}-1|^2=4\sin^2(\pi/h)$. Expanding the square shows that
$$
 1-|\eta|^2=a_h u(1-u).
$$
Two independent draws disagree with probability $2u(1-u)$. When they disagree, their images at every label are a squared distance $a_h$ apart. Half the pair's mean squared distance gives exactly the loss of squared radius on the side.

<!-- mirsky-figure:chord -->

The drawing uses eight marks, for which this identity is exact. In the proof the estimates for good permutations will be applied with much larger $h$. There, we compare each pair of draws with this regular case, including pairs that differ by more than one winding.

### When an almost cheapest cycle turns the right way {#fourier-idea}

Take good permutations $P,Q$ and put $k=k_Q-k_P$. Along the edges from $v_{P(i)}$ to $v_{Q(i)}$, the signed angular increments add up to $2\pi k$. On an outer ring each squared edge length bounds a fixed multiple of the squared angle between its ends. For $h$ increments $x_i$, the Cauchy–Schwarz inequality gives $(\sum_i x_i)^2\le h\sum_i x_i^2$. The lower bound for the cost thus grows with the square of the winding difference. We will need an estimate that also gives the sharp cost of a single turn.

The delicate case is $|k|=1$ with a cost close to one squared side length per label. Conjugate the marks if necessary so that $k=1$. The label map $P(i)\mapsto Q(i)$ splits into disjoint cycles, and the signed turns of those cycles add to one. At least one cycle turns positively, and its length has to account for almost all the labels. Along that cycle we can expand the marked positions in **finite Fourier modes**, the columns $(e^{2\pi i m j/\ell})_{j=0}^{\ell-1}$ for frequency $m$ on a cycle of length $\ell$. A mode with $m=1$ turns forward once, and a mode with $m=-1$ turns backward once. They have the same squared edge length per unit of squared norm. The sign of the winding resolves the orientation. The mean of the ordinary squares $v_i^2$ gives information about how much of the opposite mode can remain.

::: {.reader-checkpoint}
**Why keep the integer?** At what value of $u$ does the side model give the largest squared loss? How would a pair of good permutations whose winding difference is two compare to a pair whose difference is one in the angular Cauchy–Schwarz bound?

<details><summary>Check your answer</summary>

The loss peaks at $u=1/2$. The total angle doubles, so its squared lower bound on the edge cost is four times as large.

</details>
:::

<!-- proof-details -->

### The estimates for a pair of good permutations {#pair-estimates}

Use $\langle f_i\rangle=h^{-1}\sum_i f_i$ for the mean over the $h$ labels. Suppose $h\ge100$, $\langle|v_i|^2\rangle=1$, $.995\le |v_i|\le1.005$ and $\mu=|\langle v_i\rangle|\le.01$. Take two permutations $P,Q$ whose angular errors $\tau_{ij}=\operatorname{Arg}(v_j/(e^{i\theta}v_i))$ are at most $10^{-4}$ in absolute value on their assigned edges. Use [the winding integers](#winding) to put $k=k_Q-k_P$. Write $g=2\pi/h$ and $a_h=|e^{ig}-1|^2$ for the angular step and the squared side length. Define
$$
 E=\langle|v_{Q(i)}-v_{P(i)}|^2\rangle,\qquad
 B_2=\langle(v_{Q(i)}-v_{P(i)})^2\rangle,
$$
$$
 E_{\mathrm{rot}}=\langle|v_{Q(i)}-e^{igk}v_{P(i)}|^2\rangle,\qquad M_2=\langle v_i^2\rangle.
$$
$E$ measures how far the assigned marks are apart. In $E_{\mathrm{rot}}$ we first rotate the marks from $P$ by the difference $gk$ of the average angles. $B_2$ and $M_2$ retain the phase of the ordinary complex square. They will let us use the eigenvector relation after squaring in Topic V.

Set $\chi=1$ when $|k|=1$ and $E<(1+10^{-6})a_h$, and $\chi=0$ otherwise. Introduce the excess $\Delta=E-a_h|k|+10\chi a_h \mu^2$ and let $M=10^7$. [Lemma 3](https://arxiv.org/html/2611.30905v2#Thmtheorem3) gives
$$
 \Delta\ge0,\quad \chi a_h\le1.02E,\quad a_h(k^2-|k|)\le3\Delta,
$$
$$
 |B_2-\chi a_h M_2|\le M\Delta,\qquad E_{\mathrm{rot}}\le M\Delta+50\chi a_h|M_2|^2.
$$

To see the first source of excess, let $x_i=\tau_{iQ(i)}-\tau_{iP(i)}$. Its absolute value is at most $2\cdot10^{-4}$. Between two marks of moduli $r_1,r_2$ the squared edge length is $(r_2-r_1)^2+4r_1r_2\sin^2(x_i/2)$, which here is at least $.99x_i^2$. Thus $E\ge.99g^2 k^2\ge.99a_h k^2$. When $k=0$, $\Delta=E_{\mathrm{rot}}=E$. For $|k|\ge2$ the bound gives $\Delta\ge.49E$. If $|k|=1$ and $\chi=0$, then $E-a_h\ge E/(1\,000\,001)$. For all three cases we use $|B_2|\le E$ and $E_{\mathrm{rot}}\le2E+2a_h k^2$. The latter bound follows by adding and subtracting $v_{P(i)}$ and using $|1-e^{igk}|\le |k||1-e^{ig}|$.

For $\chi=1$, conjugation lets us assume $k=1$. A cycle of length $\ell$ with positive winding $w$ contributes at least $.99(2\pi w)^2/(h\ell)$ to $E$. Comparison with $E<(1+10^{-6})a_h$ gives $w=1$ and $q=\ell/h\ge.98$. Set $s_0=1-q$, and let $E_o$ and $V_o$ be the contributions to $E$ and $\langle|v_i|^2\rangle$ from the labels outside the cycle. In particular $V_o\le1.011s_0$.

Number the cycle in its order of travel and write $v_j=\sum_m c_m e^{2\pi i m j/\ell}$. The frequencies $m$ range over the integers modulo $\ell$. To find $c_m$, multiply by $e^{-2\pi i m j/\ell}$ and average over $j$. The other modes cancel because each nonconstant geometric progression of $\ell$th roots sums to zero. The same cancellation shows that the mean squared norm on the cycle is $\sum_m|c_m|^2$. Moving by one position multiplies a mode by $e^{2\pi i m/\ell}$. Its squared edge cost per unit of squared norm is $\lambda_m=4\sin^2(\pi m/\ell)$. Put $a_\ell=\lambda_1$. Then
$$
 q\sum_m|c_m|^2=1-V_o,\qquad
 E=E_o+q\sum_m\lambda_m|c_m|^2 .
$$
The constant coefficient $c_0$ is the mean of the cycle, so $q|c_0|\le \mu+1.005s_0$. In the identity for $E$, subtract the cost at rate $a_\ell$ on all nonconstant modes, then add it back using their total squared norm $1-V_o-q|c_0|^2$. This writes the excess as
$$
\Delta=E_o+q\sum_{m\ne0,\pm1}(\lambda_m-a_\ell)|c_m|^2
  +(a_\ell-a_h)-a_\ell(V_o+q|c_0|^2)+10a_h \mu^2.
$$
The logarithmic derivative of $\sin^2 x$ with respect to $\log x$ is $2x\cot x\in[1.9,2]$ for $0<x\le\pi/98$. Integrating between $\pi/h$ and $\pi/\ell$ places $a_\ell/a_h$ between $q^{-1.9}$ and $q^{-2}$. Using $q\ge.98$ gives $a_\ell/a_h\in[1+1.9s_0,1.042]$ and $a_\ell/a_h-1\le2.1s_0$. The estimate $q|c_0|^2\le2.07(s_0^2+\mu^2)$ and the bound $\lambda_m\ge2a_\ell$ for $m\ne0,\pm1$ now give
$$
 \Delta\ge E_o+.49\sum_{m\ne0,\pm1}\lambda_m|c_m|^2+.8a_h s_0+7a_h \mu^2.
$$
For example, the coefficient of $a_h s_0$ is at least $1.9-1.042(1.011+2.07\cdot.02)>.8$. This inequality bounds all the terms except the two first modes. It also gives $0\le \varepsilon:=\Delta/a_h<.00101$.

By $\sin x\ge2x/\pi$ on $[0,\pi/2]$, the sum of $\lambda_m^{-1}$ over $m\ne0,\pm1$ is at most $\ell^2/4$. Cauchy–Schwarz and the excess estimate bound the absolute sum of those modes at every vertex by $\frac12\ell\sqrt{\Delta/.49}<.15$. Also $|c_0|<.031$. If $|c_1|<1/4$, the squared norm estimate forces $|c_{-1}|>.9$. Then every vertex of the cycle is within $.031+.25+.15$ of the corresponding vertex of the clockwise regular polygon $c_{-1}e^{-2\pi i j/\ell}$. The same bound holds along all corresponding edges. That regular polygon stays at distance at least $.9\cos(\pi/\ell)$ from zero. Moving each of its points linearly to the corresponding cycle point would keep the curves away from zero, so their signed numbers of turns would agree. The cycle turns once in the positive direction. Hence $|c_1|\ge1/4$.

Averaging ordinary squares on the cycle retains only pairs of opposite frequencies. The noncycle marks, the constant term and the higher modes give
$$
 |M_2-2qc_1c_{-1}|\le V_o+q|c_0|^2+q\sum_{m\ne0,\pm1}|c_m|^2\le4\varepsilon .
$$
Using $2q|c_1|\ge.49$ yields $|c_{-1}|^2\le9|M_2|^2+\varepsilon$. In the ordinary square of an edge, opposite modes contribute $\lambda_m c_m c_{-m}$. In $B_2-a_h M_2$ the first modes therefore have coefficient $\lambda_1-a_h$ and the remaining terms are bounded by the excess inequality. In detail, the first-mode contribution is at most $2.1a_h s_0$, the constant mode at most $.35\Delta$, the higher modes at most $\Delta/.49$, and the other cycles at most $E_o+a_h V_o$. Their sum is at most $9\Delta$.

For $E_{\mathrm{rot}}$, the squared coefficient of mode $m$ is $|e^{2\pi i m/\ell}-e^{ig}|^2$. The positive first mode is off by an angle $gs_0/q$, the negative first mode by $g(1+1/q)$. With $g^2/a_h\le1.001$ and $q\ge.98$, the squared coefficients for $m=1,-1,0$ are at most $1.1a_h s_0^2,5a_h,a_h$. For the higher modes, the triangle inequality and $\lambda_m\ge2a_\ell\ge a_h$ give $4\lambda_m$. The complementary cycles contribute at most $2E_o+2a_h V_o$.

The negative first mode contributes at most $45a_h|M_2|^2+5\Delta$ because $q\le1$ and $a_h\varepsilon=\Delta$. For the positive first mode use $q|c_1|^2\le1$ and $s_0\le.02$. Its cost together with $2a_hV_o$ is bounded by $(1.1\cdot.02+2\cdot1.011)a_hs_0$. Dividing by $.8$ bounds that cost in units of $\Delta$. The constant mode uses at most $.35\Delta$, the higher modes at most $4\Delta/.49$, and $2E_o\le2\Delta$. Adding the coefficients gives less than $19$, so in particular
$$
 E_{\mathrm{rot}}\le25\Delta+45a_h|M_2|^2.
$$
This completes the comparison for $\chi=1$.

| Bound | Where it enters | Room in the estimate |
|:---|:---|:---|
| $.995\le\lvert v_i\rvert\le1.005$, $\lvert\tau_{ij}\rvert\le10^{-4}$ | Compare a squared edge with its squared angle. | Put $t=10^{-4}$. The chord coefficient is at least $.995^2(\sin t/t)^2>.99$. |
| $E<(1+10^{-6})a_h$ when $\lvert k\rvert=1$ | Select the case needing the Fourier expansion. | In the other $\lvert k\rvert=1$ case the rotation bound allows $4\,000\,004\Delta$, within $M\Delta$. |
| $q\ge.98$ | Control the first modes on the long cycle. | The cycle bound gives $q\ge .99/(1+10^{-6})>.98$. |
| $.49$, $.8$ and $7$ | Retain part of the higher modes, the omitted label fraction and $\mu^2$ in the excess. | These coefficients give less than $19\Delta$ for the terms in the rotation estimate apart from the second moment. |

The paper writes $a,B,T,D,e$ for $a_h,B_2,E_{\mathrm{rot}},\Delta,\chi$. The same quantities enter the prefix calculation in Topic V.

### Averaging the estimated rotations {#average-rotations}

Now draw $P,Q$ independently from a law supported on good permutations. Let $\xi_G=\mathbb E e^{igk_P}$ and $z_i^G=\mathbb E(v_{P(i)}/v_i)$. The complex logarithm near $1$ is $\log(re^{it})=\log r+it$, with $t$ the argument near zero. [Lemma 4](https://arxiv.org/html/2611.30905v2#Thmtheorem4) bounds $|\langle\log(z_i^G/\xi_G)\rangle|$ by $10\mathbb E E_{\mathrm{rot}}$. Averaging over the labels cancels the linear term. We can see this before estimating the remainder.

For each draw define
$$
 h_{Pi}=\log\frac{|v_{P(i)}|}{|v_i|}+i\big(\tau_{iP(i)}-\langle\tau_{jP(j)}\rangle\big).
$$
Here the mean in the last term is over the index $j$. The moduli permute, and the imaginary errors have been centred, so $\langle h_{Pi}\rangle=0$. Also $e^{h_{Pi}}=v_{P(i)}/(e^{igk_P}v_i)$ and $|h_{Pi}|<.0103$. In $z_i^G/\xi_G=\sum_P\nu_P e^{h_{Pi}}$ the complex weights $\nu_P=\mathbb P(P)e^{igk_P}/\xi_G$ sum to one and obey $|\nu_P|\le1.01\mathbb P(P)$, since the angles $gk_P$ are within $10^{-4}$ of $\theta$.

At a fixed $i$ write $\mu_i=\mathbb E h_{Pi}$ and $x_P=h_{Pi}-\mu_i$. Then $|x_P|<.021$. With $w=\sum_P\nu_P(e^{x_P}-1)$, the exponential remainder gives $|w-\sum_P\nu_P x_P|\le\mathbb E|x_P|^2$ and $|w|\le1.04\mathbb E|x_P|<.022$. The expansion $|\log(1+w)-w|\le|w|^2$ bounds the error in the linear approximation $\log(z_i^G/\xi_G)\approx\sum_P\nu_P h_{Pi}$ by $4\mathbb E|x_P|^2$. The linear terms vanish on averaging over $i$. Finally $\mathbb E|x_P|^2=\frac12\mathbb E|h_{Pi}-h_{Qi}|^2$. Since $|e^u-1|\ge.98|u|$ for $|u|<.021$ and $|v_{P(i)}|\ge.995$, this squared difference is at most $1.04^2|v_{Q(i)}-e^{igk}v_{P(i)}|^2$. This proves the claimed bound.
