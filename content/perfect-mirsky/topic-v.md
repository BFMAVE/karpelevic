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

Let $r=|z|$ and $\theta=\arg z$. Suppose $z$ lies outside both polygons. Stochasticity gives $r\le1$ by using a coordinate of largest modulus, and the even polygon includes the interval $[-1,1]$, so $z$ is nonreal. The incircle of $\Pi_h$ gives $x=1-r^2<10/h^2$ and $r>.99$.

The outward normal is the vector perpendicular to a side of $\Pi_m$ and pointing away from the origin. Let its angle be $\alpha_0$. If the ray at angle $\alpha$ meets that side, projection onto the normal gives $\rho_m(\alpha)\cos(\alpha-\alpha_0)=\cos(\pi/m)$, where $\rho_m$ is the radius on that ray. Thus
$$
 \rho_m(\alpha)=\frac{\cos(\pi/m)}{\cos(\alpha-\alpha_0)} .
$$
On the side, $|\alpha-\alpha_0|\le\pi/m$. Differentiating shows $|(\log\rho_m)'|\le\tan(\pi/m)$ and $|(\rho_m^2)'|\le2\tan(\pi/m)$. Both bounds hold across successive sides because the formulas agree at endpoints. If $\delta_\theta=\operatorname{dist}(\theta,\pi\mathbb Z)$, the even polygon has radius one at the nearest real direction. Here $\operatorname{dist}$ denotes the smallest distance to the stated set. For $z$ outside that polygon,
$$
 x\le -2\log r\le 8\delta_\theta/h.
$$
Since $|1-z^2|^2=x^2+4r^2\sin^2\theta$ and $|\sin\theta|\ge2\delta_\theta/\pi$, we have $|1-z^2|\ge hx/8$ and $|1-z|\ge hx/16$.

### Account for the omitted permutations

Use independent draws $P,Q$ from a permutation decomposition of $A$. Let $\langle\,\cdot\,\rangle$ now denote the mean over the $h$ prefix labels. Set $K=5000$, let $s$ be the expected fraction of those labels sent outside, and write $\Gamma=1-\mathbb E\langle|v_{P(i)}|^2\rangle$. If a draw sends $c_P$ labels outside, each replacement costs at least $K/h$ in the **sum** of squared moduli. Its cost in the mean is at least $Kc_P/h^2$. On averaging, $\mathbb E c_P=hs$, so $s/h\le\Gamma/K$, with both quantities zero for a full prefix.

Even for draws that leave $H$, use $E$ and $B$ from the [pair estimates](/perfect-mirsky/topic-iv/#pair-estimates), averaging over $i\in H$. Define $E_{P,z}=\langle|v_{P(i)}-zv_i|^2\rangle$. Expanding the two squares gives
$$
 x=\Gamma+\tfrac12\mathbb E E,\qquad
 \mathbb E E_{P,z}=x-\Gamma,\qquad
 \mathbb E[E\mid P]=E_{P,z}+x-\Gamma .
$$
The conditional expectation on the right averages over $Q$ with $P$ fixed. If $x=0$, every positive-probability draw preserves the group and acts there by $z$. The quotient product then gives $z^h=1$, a contradiction. We may use $x>0$ below.

Write $c=\langle v_i\rangle$ and $M_2=\langle v_i^2\rangle$. Replacing each outside target by a missing inside target changes the mean by at most $3s$, and changes the mean of squares by at most $3s$. The eigenvector relation gives
$$
 |(1-z)c|\le3s,\qquad |(1-z^2)M_2-\tfrac12\mathbb E B|\le3s .
$$
In particular $|c|\le48/K<.01$, so the pair estimates apply when both draws preserve the group and have all angular errors at most $10^{-4}$.

Call the other draws bad. Let $p$ be the probability of one bad draw, $F$ the event at least one draw is bad, and $U=\mathbb E[\mathbf 1_F E]$. Here $\mathbf1_F$ is one on the event and zero elsewhere. A draw that leaves $H$ takes at least one outside target, giving probability at most $\mathbb E c_P=hs$. A draw that stays inside but has an angular error larger than $10^{-4}$ has $E_{P,z}\ge10^{-9}/h$, by $|v_j-zv_i|^2\ge\tau_{ij}^2/3$. The conditional identity for $E$ shows that the mean of $E_{P,z}$ over bad draws, counted with their original probabilities, is at most $U$. It is also at most $x$. Consequently
$$
 p\le hs+10^9hU,\qquad p\le 10/K+10^{10}/h<1/4.
$$
For a bad draw assign the same integer $k_*$, nearest to $\theta/g$ with $g=2\pi/h$. For a good draw the square of its mean angular error is at most $3E_{P,z}$. The inequality $(a+b)^2\le2a^2+2b^2$ gives $\mathbb E[(k_P-k_*)^2\mid P\text{ good}]\le6x/(g^2(1-p))+1/2<4$. As two bad draws have equal integers, the pairs on $F$ satisfy
$$
 a\mathbb E[\mathbf1_F|k|]\le a\mathbb E[\mathbf1_F k^2]\le320p/h^2,\qquad
 p/h^2\le s/h+10^9 U/h,
$$
where $k=k_Q-k_P$ and $a=4\sin^2(\pi/h)$.

### Reserve a nonnegative margin

Write $\mathbb E k_P=j+u$ with $j$ an integer and $0\le u<1$. Put $\eta=e^{igj}(1-u+ue^{ig})$, $b=\mathbb E e^{igk_P}$ and
$$
 L=|\eta|^2-r^2,\qquad W=a\big(\tfrac12\mathbb E|k|-u(1-u)\big)\ge0.
$$
Let $p_e$ be the probability that both draws are good and the indicator $e$ of Topic IV equals one. On pairs of good draws take the excess $D$ of that topic, with $d=|c|$, and set $J=\mathbb E[\mathbf1_{F^{\mathsf c}}D]+U$. Here $F^{\mathsf c}$ is the complementary event. Since $ap_e\le1.02\mathbb E E\le3x$, the average mean correction $A_c=10ap_e|c|^2$ is at most $1440s/h$ by the bound for $|(1-z)c|$. Expanding $x$ in terms of the excess gives
$$
 L=\Gamma+\tfrac12J+W-\tfrac12\big(A_c+a\mathbb E[\mathbf1_F|k|]\big).
$$
The last half-sum is at most $880s/h+1.6\cdot10^{11} U/h$. Using $h\ge10^{16}$ gives
$$
 L\ge W+\Gamma/2+J/3,\qquad 320p/h^2\le L .
$$

To bound $|b-\eta|$, interpolate $f(y)=e^{igy}$ linearly between the integers $j,j+1$. For any integer $y$ the error is at most $a(y-j)(y-j-1)/2$, by summing second differences $\Delta^2 f(y)=e^{igy}(e^{ig}-1)^2$. The mean of the interpolant equals $\eta$. Independence gives $\operatorname{Var}(k_P)=\tfrac12\mathbb E k^2$, where the variance is the mean squared difference from the mean. Hence $|b-\eta|\le W/2+(a/4)\mathbb E(k^2-|k|)\le3L$, using the excess bound on good pairs and the estimates for $F$.

### Transfer the margin to the ray of the eigenvalue

The equation for the ordinary second moment and the pair bound for $B$ give $|(1-z^2-ap_e/2)M_2|\le MJ+3s$, with $M=10^7$. Since $|1-z^2|\ge hx/8$ and $ap_e\le3x$, the coefficient has modulus at least $hx/16$. Using $|M_2|\le1$ gives $ap_e|M_2|^2\le(48/h)(MJ+3s)$. The pair bound for $T$ now gives $\mathbb E[\mathbf1_{F^{\mathsf c}}T]\le7ML$. Conditioned on both draws being good they remain independent. Divide by the probability $(1-p)^2>1/2$ of that event to bound the conditional mean of $T$. The [logarithmic estimate](/perfect-mirsky/topic-iv/#average-rotations) then bounds the mean logarithmic error for good draws by $140ML$.

Let $z_i^G=\mathbb E[v_{P(i)}/v_i\mid P\text{ good}]$ and $b_G=\mathbb E[e^{igk_P}\mid P\text{ good}]$. After rotation by $e^{-i\theta}$, both of these quantities and $b,z$ have real part above $.99$. On that half-plane the logarithm has derivative of modulus less than two. The omitted draws change the mean of $|z_i^G-z|$ by at most $2\sqrt{pU}$, by the eigenvector equation and Cauchy–Schwarz. They change the mean rotation by $|b-b_G|\le13p/h$, using the conditional second moment of $k_P-k_*$. Combining these estimates with $|b-\eta|\le3L$ gives
$$
 \operatorname{dist}(\arg z,\arg\eta)\le150ML+26p/h+4\sqrt{pU},
$$
where on angles the distance is measured modulo $2\pi$. For comparison with $\eta$, the chord inequality bounds angular distance by twice Euclidean distance for these moduli, all at least $.99$.

Multiply by the Lipschitz bound $8/h$ for $\rho_h^2$. The cost of changing the ray is at most $(1200M/h)L+208p/h^2+32\sqrt{pU}/h$. To check it against $L$, use $p/h^2\le\Gamma/K+10^9 U/h$, $\Gamma/2+U/3\le L$, and $\sqrt{\Gamma U}\le\sqrt6 L/2$. This bounds the cost by
$$
 \left(\frac{1200M}{h}+\frac{416}{K}+\frac{624\cdot10^9}{h}
       +16\sqrt{6/K}+96\sqrt{10^9/h}\right)L.
$$
At $h=10^{16}, K=5000$ the coefficient is less than $.67$ and decreases with $h$. The squared radius at the angle of $\eta$ is $|\eta|^2$ because $\eta$ lies on a side. Hence $\rho_h(\theta)^2\ge |\eta|^2-L=r^2$. That places $z$ in $\Pi_h$ and completes the estimate.
