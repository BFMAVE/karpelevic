### Choose the outer marks {#outer-prefix}

Order the marks by decreasing modulus, placing tied labels in any order. A **prefix** $H$ consists of the first $h$ labels in this list. If a permutation sends a label of $H$ outside $H$, one of the outer targets is missing from its list. Each replacement decreases the sum of squared moduli of the targets by at least the difference between the smallest squared modulus inside and the largest squared modulus outside.

### The estimate we need for an outer ring {#ring-estimate}

> **Outer-ring estimate.** Suppose $Av=zv$ with $A$ real and doubly stochastic and $v\ne0$. Let $H$ be a prefix of size $h\ge10^{16}$. Normalize the marks so that $h^{-1}\sum_{i\in H}|v_i|^2=1$. Suppose $.995\le|v_i|\le1.005$ on $H$. If $H$ contains all the labels, or if the gap in squared moduli after $H$ is at least $5000/h$, then $z\in\Pi_h\cup\Pi_{2\lfloor h/2\rfloor}$.

Here $\lfloor x\rfloor$ is the greatest integer at most $x$, so the second polygon has the largest even order at most $h$. It supplies both real directions as vertices and is used to control angles close to the real line. Both polygons belong to the union $U_N$. This is [Theorem 2 of the paper](https://arxiv.org/html/2611.30905v2#Thmtheorem2). Readers following the main ideas can accept it here and continue to [Topic VI](/perfect-mirsky/topic-vi/).

Read the estimate in the direction that we will use it. Suppose an eigenvalue lies outside $U_N$ and the first $h$ marks meet the size and modulus conditions. Then the prefix cannot contain all the labels. The gap after it is smaller than $5000/h$ in the normalized squared moduli. In VIII this will turn a bound for one group of marks into a count in every thin interval of radii.

### Spend the excess on changing the angle {#compare-rays}

Here is how the pair comparison works. The normalization in the estimate makes the **mean** squared modulus over $H$ equal to one. Put $x=1-|z|^2$. The row means on $H$ therefore have mean squared modulus $|z|^2$. A permutation may send outer labels to smaller marks, so the expected mean squared modulus of the assigned sources is $1-\Gamma$ for some $\Gamma\ge0$. Let $E$ be the mean squared difference of two independent assignments over the $h$ rows. The pair identity from Topic III now gives
$$
 x=\Gamma+\tfrac12\mathbb E E.
$$
The first term pays for targets leaving the prefix. The second is the mean pair cost from Topic IV. When every draw preserves the group the first term is zero.

The winding integers of the good draws give an average number of turns. Replace their distribution, with a rounded choice for each omitted draw, by weights $1-u,u$ at the two adjacent integers that have the same mean $j+u$. The two corresponding roots of unity give a point $\eta$ on a side of $\Pi_h$. A distribution on integers with mean $j+u$ has half its mean pair difference at least $u(1-u)$. To see this, fix one draw and replace the other by its mean using convexity of absolute value. The graph of $|y-j-u|$ at integer $y$ lies above the extension of its chord between $j$ and $j+1$. Averaging that line gives $2u(1-u)$. This recovers the exact squared loss on the side from Topic IV.

The proof shows that the margin $L=|\eta|^2-|z|^2$ is nonnegative and pays for the difference between their angles. The radius of $\Pi_h$ may fall when we move from $\arg\eta$ to $\arg z$. We bound that fall by less than $L$ if $L>0$, and by zero if $L=0$. This proves that the ray of $z$ reaches at least as far as $z$ within $\Pi_h$.

<!-- mirsky-figure:rays -->

::: {.reader-checkpoint}
**Why two comparisons?** Suppose we know $|z|\le|\eta|$ for a point $\eta$ on the polygon. What additional information do we need to place $z$ in the polygon?

<details><summary>Check your answer</summary>

We need the polygon's radius at the angle of $z$. If the two rays differ, compare the change in squared radius with $L$. A bound on $|z|$ by the length of a point on another ray alone cannot decide inclusion.

</details>
:::

<!-- proof-details -->

### Bounds supplied by the polygon sides {#polygon-sides}

Take the first $h$ labels of $v$ in decreasing order of modulus, with the normalization and gap in the [outer-ring estimate](#ring-estimate). Let $r=|z|$ and $\theta=\arg z$. Suppose $z$ lies outside $\Pi_h$ and $\Pi_{2\lfloor h/2\rfloor}$. Stochasticity gives $r\le1$ by using a coordinate of largest modulus. The even polygon includes the interval $[-1,1]$, so $z$ is nonreal. The [disk inside $\Pi_h$](/perfect-mirsky/topic-iii/#incircle) gives $x=1-r^2<10/h^2$ and $r>.99$.

The outward normal is the vector perpendicular to a side of $\Pi_m$ and pointing away from the origin. Let its angle be $\alpha_0$. If the ray at angle $\alpha$ meets that side, projection onto the normal gives $\rho_m(\alpha)\cos(\alpha-\alpha_0)=\cos(\pi/m)$, where $\rho_m$ is the radius on that ray. Thus
$$
 \rho_m(\alpha)=\frac{\cos(\pi/m)}{\cos(\alpha-\alpha_0)} .
$$
On the side, $|\alpha-\alpha_0|\le\pi/m$. Differentiating shows $|(\log\rho_m)'|\le\tan(\pi/m)$ and $|(\rho_m^2)'|\le2\tan(\pi/m)$. The formulas agree at vertices, so the same rates bound the total change across consecutive sides. If $\delta_\theta=\operatorname{dist}(\theta,\pi\mathbb Z)$, the even polygon has radius one at the nearest real direction. Here $\operatorname{dist}$ denotes the smallest distance to the stated set. For $z$ outside that polygon,
$$
 x\le -2\log r\le 8\delta_\theta/h.
$$
Since $|1-z^2|^2=x^2+4r^2\sin^2\theta$ and $|\sin\theta|\ge2\delta_\theta/\pi$, we have $|1-z^2|\ge hx/8$ and $|1-z|\ge hx/16$.

### Account for the omitted permutations

Use independent draws $P,Q$ from a permutation decomposition of $A$. Let $\langle\,\cdot\,\rangle$ now denote the mean over the $h$ prefix labels. Set $K=5000$, let $s$ be the expected fraction of those labels sent outside, and write $\Gamma=1-\mathbb E\langle|v_{P(i)}|^2\rangle$. If a draw sends $c_P$ labels outside, each replacement costs at least $K/h$ in the **sum** of squared moduli. Its cost in the mean is at least $Kc_P/h^2$. On averaging, $\mathbb E c_P=hs$, so $s/h\le\Gamma/K$, with both quantities zero for a full prefix.

Even for draws that leave $H$, use $E$ and $B_2$ from the [pair estimates](/perfect-mirsky/topic-iv/#pair-estimates), averaging over $i\in H$. Define $E_{P,z}=\langle|v_{P(i)}-zv_i|^2\rangle$. Expanding the two squares gives
$$
 x=\Gamma+\tfrac12\mathbb E E,\qquad
 \mathbb E E_{P,z}=x-\Gamma,\qquad
 \mathbb E[E\mid P]=E_{P,z}+x-\Gamma .
$$
The conditional expectation on the right averages over $Q$ with $P$ fixed. If $x=0$, every positive-probability draw preserves the group and acts there by $z$. The quotient product then gives $z^h=1$, a contradiction. We may use $x>0$ below.

Write $c=\langle v_i\rangle$ and $M_2=\langle v_i^2\rangle$. In one draw, replace each outside target by a missing inside target. Each replacement changes a summand in the mean or the mean of squares by at most three, so each change of mean is at most $3c_P/h$. Averaging gives the bound $3s$. To see which mean of squares occurs, expand $B_2$. The product $v_{P(i)}v_{Q(i)}$ has expectation $(zv_i)^2$ by independence and the eigenvector equation. Its coefficient in the square is $-2$, so
$$
 \tfrac12\mathbb E B_2=\mathbb E\langle v_{P(i)}^2\rangle-z^2 M_2.
$$
Compare $\mathbb E\langle v_{P(i)}\rangle=zc$ with $c$, and $\mathbb E\langle v_{P(i)}^2\rangle$ with $M_2$. The two replacement bounds give
$$
 |(1-z)c|\le3s,\qquad |(1-z^2)M_2-\tfrac12\mathbb E B_2|\le3s .
$$
In particular $|c|\le48/K<.01$, so the pair estimates apply when both draws preserve the group and have all angular errors at most $10^{-4}$.

Call the other draws bad. Let $p$ be the probability of one bad draw and $F$ the event that at least one of the two draws is bad. Write $E_{\mathrm{om}}=\mathbb E[\mathbf 1_F E]$ for the contribution of the omitted pairs to the mean squared distance. Here $\mathbf1_F$ is one on the event and zero elsewhere. A draw that leaves $H$ takes at least one outside target, giving probability at most $\mathbb E c_P=hs$. A draw that stays inside with an angular error larger than $10^{-4}$ has $E_{P,z}\ge10^{-9}/h$, by $|v_j-zv_i|^2\ge\tau_{ij}^2/3$. The conditional identity for $E$ shows that the mean of $E_{P,z}$ over bad draws, counted with their original probabilities, is at most $E_{\mathrm{om}}$. It is also at most $x$. Consequently
$$
 p\le hs+10^9hE_{\mathrm{om}},\qquad p\le 10/K+10^{10}/h<1/4.
$$
For a bad draw assign the same integer $k_*$, nearest to $\theta/g$ with $g=2\pi/h$. For a good draw the square of its mean angular error is at most $3E_{P,z}$. The inequality $(\alpha+\beta)^2\le2\alpha^2+2\beta^2$ gives $\mathbb E[(k_P-k_*)^2\mid P\text{ good}]\le6x/(g^2(1-p))+1/2<4$. As two bad draws have equal integers, the pairs on $F$ satisfy
$$
 a_h\mathbb E[\mathbf1_F|k|]\le a_h\mathbb E[\mathbf1_F k^2]\le320p/h^2,\qquad
 p/h^2\le s/h+10^9 E_{\mathrm{om}}/h,
$$
where $k=k_Q-k_P$ and $a_h=4\sin^2(\pi/h)$.

### Reserve a nonnegative margin

Write $\mathbb E k_P=j+u$ with $j$ an integer and $0\le u<1$. Put $\eta=e^{igj}(1-u+ue^{ig})$, $\xi=\mathbb E e^{igk_P}$ and
$$
 L=|\eta|^2-r^2,\qquad W=a_h\big(\tfrac12\mathbb E|k|-u(1-u)\big)\ge0.
$$
Let $p_\chi$ be the probability that both draws are good and the indicator $\chi$ of Topic IV equals one. In the next estimate we count only the excess $\Delta$ on good pairs, using $\mu=|c|$. On omitted pairs we count the full squared distance. Their combined contribution is
$$
 S_{\mathrm{pair}}=\mathbb E[\mathbf1_{F^{\mathsf c}}\Delta]+E_{\mathrm{om}},
$$
where $F^{\mathsf c}$ is the event that both draws are good. The correction for the mean of the marks is $A_c=10a_h p_\chi|c|^2$. Since $a_h p_\chi\le1.02\mathbb E E\le3x$ and $(hx/16)|c|\le3s$, we have $A_c\le1440(s/h)|c|\le1440s/h$. Expanding $x$ in terms of the excess gives
$$
 L=\Gamma+\tfrac12S_{\mathrm{pair}}+W-\tfrac12\big(A_c+a_h\mathbb E[\mathbf1_F|k|]\big).
$$
The half-sum is at most $880s/h+1.6\cdot10^{11} E_{\mathrm{om}}/h$. The first term uses at most $.176\Gamma$ because $s/h\le\Gamma/5000$. The second uses at most $.000016 S_{\mathrm{pair}}$ because $h\ge10^{16}$. The same bounds on $s/h$ and $E_{\mathrm{om}}/h$ place $320p/h^2$ below $\Gamma/2+S_{\mathrm{pair}}/3$. Thus
$$
 L\ge W+\Gamma/2+S_{\mathrm{pair}}/3,\qquad 320p/h^2\le L .
$$

To bound $|\xi-\eta|$, interpolate $f(y)=e^{igy}$ linearly between the integers $j,j+1$. A second difference $f(y+2)-2f(y+1)+f(y)$ equals $e^{igy}(e^{ig}-1)^2$ and has modulus $a_h$. Summing these differences bounds the error at any integer $y$ by $a_h(y-j)(y-j-1)/2$. The mean of the interpolant equals $\eta$. Independence gives $\operatorname{Var}(k_P)=\tfrac12\mathbb E k^2$, where the variance is the mean squared difference from the mean. Hence $|\xi-\eta|\le W/2+(a_h/4)\mathbb E(k^2-|k|)\le3L$, using the excess bound on good pairs and the estimates for $F$.

### Transfer the margin to the ray of the eigenvalue

The equation for the ordinary second moment and the pair bound for $B_2$ give $|(1-z^2-a_h p_\chi/2)M_2|\le M S_{\mathrm{pair}}+3s$, with $M=10^7$. Since $|1-z^2|\ge hx/8$ and $a_h p_\chi\le3x$, the coefficient has modulus at least $hx/16$. Using $|M_2|\le1$ gives $a_h p_\chi|M_2|^2\le(48/h)(M S_{\mathrm{pair}}+3s)$. The pair bound for $E_{\mathrm{rot}}$ now gives $\mathbb E[\mathbf1_{F^{\mathsf c}}E_{\mathrm{rot}}]\le7ML$. Conditioned on both draws being good they remain independent. Divide by the probability $(1-p)^2>1/2$ of that event to bound the conditional mean of $E_{\mathrm{rot}}$. The [logarithmic estimate](/perfect-mirsky/topic-iv/#average-rotations) then bounds the mean logarithmic error for good draws by $140ML$.

Let $G$ be the event that $P$ is good. For a draw $P$ put $Z_i=v_{P(i)}/v_i$, $z_i^G=\mathbb E[Z_i\mid G]$ and $\xi_G=\mathbb E[e^{igk_P}\mid G]$. Since $\mathbb E Z_i=z$, the mean of $Z_i-z$ on $G$ cancels its mean on the omitted draws when both are weighted by their probabilities. This gives
$$
 z_i^G-z=-\frac{\mathbb E[\mathbf1_{G^{\mathsf c}}(Z_i-z)]}{1-p}.
$$
Cauchy–Schwarz over draws and then over labels bounds $\langle|z_i^G-z|\rangle$ by $\sqrt{p E_{\mathrm{om}}}/(.995(1-p))\le2\sqrt{p E_{\mathrm{om}}}$. Here division by $v_i$ costs at most $1/.995$, and the contribution of the omitted draws to $\mathbb E E_{P,z}$ is at most $E_{\mathrm{om}}$.

The omitted draws all have the same assigned rotation $e^{igk_*}$. Thus $|\xi-\xi_G|=p|e^{igk_*}-\xi_G|$. On good draws $|e^{igk_P}-e^{igk_*}|\le g|k_P-k_*|$. The conditional second moment of $k_P-k_*$ is less than four, so $|\xi-\xi_G|\le13p/h$.

After rotation by $e^{-i\theta}$, the numbers $z$, $z_i^G$, $\xi_G$ and $\xi$ all have real part above $.99$. Use the logarithm $\ell(w)=\log(e^{-i\theta}w)$ on that half-plane. Its derivative has modulus less than two. The difference $\ell(z)-\ell(\xi)$ splits into three terms.
$$
 \langle\ell(z)-\ell(z_i^G)\rangle
 +\langle\ell(z_i^G)-\ell(\xi_G)\rangle
 +\ell(\xi_G)-\ell(\xi).
$$
Their moduli are bounded by $4\sqrt{pE_{\mathrm{om}}}$, $140ML$ and $26p/h$, respectively. The middle term is the mean logarithmic error bounded in Topic IV. Taking imaginary parts compares the angles of $z$ and $\xi$. For the last comparison, from $\xi$ to $\eta$, the chord bound for moduli at least $.99$ gives an angular difference at most $2|\xi-\eta|\le6L$. In total,
$$
 \operatorname{dist}(\arg z,\arg\eta)\le150ML+26p/h+4\sqrt{p E_{\mathrm{om}}},
$$
where on angles the distance is measured modulo $2\pi$.

Multiply by the Lipschitz bound $8/h$ for $\rho_h^2$. The cost of changing the ray is at most $(1200M/h)L+208p/h^2+32\sqrt{p E_{\mathrm{om}}}/h$. To check it against $L$, use $p/h^2\le\Gamma/K+10^9 E_{\mathrm{om}}/h$, $\Gamma/2+E_{\mathrm{om}}/3\le L$, and $\sqrt{\Gamma\, E_{\mathrm{om}}}\le\sqrt6 L/2$. This bounds the cost by
$$
 \left(\frac{1200M}{h}+\frac{416}{K}+\frac{624\cdot10^9}{h}
       +16\sqrt{6/K}+96\sqrt{10^9/h}\right)L.
$$
At $h=10^{16}$ and $K=5000$ the coefficient is less than $.66788$ and decreases with $h$. The squared radius at the angle of $\eta$ is $|\eta|^2$ because $\eta$ lies on a side. Hence $\rho_h(\theta)^2\ge |\eta|^2-L=r^2$. That places $z$ in $\Pi_h$ and completes the estimate.

### Where the constants enter {#prefix-constants}

| Constant | Where it enters | Room in the estimate |
|:---|:---|:---|
| $10^{-4}$ and $10^9$ | An angular error past the cutoff costs at least $10^{-9}/h$ in the mean $E_{P,z}$. | The chord bound already gives $10^{-8}/(3h)$ there. |
| $K=5000$ and $1440$ | The gap gives $s/h\le\Gamma/K$. The mean correction is at most $1440s/h$. | Together with the omitted integer contribution, at most $.176\Gamma$ is used. The estimate allows $\Gamma/2$. |
| $h\ge 10^{16}$ and $1.6\cdot10^{11}$ | Absorb the omitted squared distances in the bound on $L$. | This uses at most $.000016 S_{\mathrm{pair}}$ out of $S_{\mathrm{pair}}/2$. |
| $M=10^7$ | Use the bounds for the ordinary square and the rotation error from IV. | The term $1200M/h$ in the final coefficient is at most $.0000012$. |
| $.67$ | Bound the loss in squared radius at the angle of $z$. | At the smallest $h$ the five terms sum to about $.667878$. The comparison requires a coefficient at most one. |

The paper writes $U,J,b,b_G$ for $E_{\mathrm{om}},S_{\mathrm{pair}},\xi,\xi_G$ in this calculation. Here $U_N$ denotes the union of the cycle polygons throughout.
