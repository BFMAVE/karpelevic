### What the absence of a gap gives us {#annuli}

Keep the assumed counterexample and the normalization from [Topic VI](/perfect-mirsky/topic-vi/). Put $\delta=1/200$ and $\gamma=1/201$. A prefix whose moduli lie in $[1-\gamma,1]$ has root mean square in that same interval. The **root mean square** takes the square root of the mean of squared moduli. Divide by it to put the prefix in the range $[1-\delta,1+\delta]$ of [the outer-ring estimate](/perfect-mirsky/topic-v/#ring-estimate).

If all marks are that close to one, the estimate on the full set gives $z\in U_N$. Otherwise the range between the smallest and largest moduli contains the interval
$$
 I=[1-\gamma,\ 1-.001\gamma].
$$
All hull vertices have moduli above this interval, by the disk estimate in VI. A gap between consecutive moduli that meets the interior of $I$ follows a prefix containing all the hull vertices. That prefix has more than $.332N$ labels, so it is large enough for V. A wide gap would put $z$ in $U_N$. The calculation gives width at most $C/N$ with $C=7600$. An interval of length $s$ inside $I$ therefore contains at least $sN/C-1$ labels. With $k$ labels we can cut the interval into at most $k+1$ pieces of length at most $C/N$.

Divide $I$ into $J$ equal intervals of width $w$. An interval of moduli describes an **annulus**, the portion of the plane between two circles about zero. Start from the middle 60 percent of any one interval. The starting radius is at least $.2w$ from both edges of that interval. If the corrected mark from Topic VII stays within $.199w$ of its start, the small contraction through time $T$ keeps the total change in radius below $.2w$. All visited labels then belong to the starting annulus. The straight edge joining two visited marks can pass inside its inner circle. The next count uses only the radii of the labels. The final mark is nearly a quarter turn away from the first.

### Erase loops and count the remaining steps {#erase-loops}

If a label occurs twice in a path, delete the piece between its two occurrences. This keeps the endpoints and only removes edges. Repeating gives a path with each label used once. In an annulus containing $n_j$ labels, the shortened path has at most $n_j-1$ edges. Let $d_1,\ldots,d_s$ be their differences in the original plane. Then
$$
 \left|\sum_{\ell=1}^s d_\ell\right|^2
      \le s\sum_{\ell=1}^s|d_\ell|^2
      \le n_j\sum_{k<T}|v_{X_{k+1}}-v_{X_k}|^2 .
$$
The sum of the differences is the same endpoint difference as before erasing loops. Its squared modulus exceeds $1.97$ here. Every such path in annulus $j$ therefore costs more than $1.97/n_j$ in squared edge lengths.

<!-- mirsky-figure:loops -->

The paths start uniformly over the labels. Each middle interval contains enough labels to give a positive starting probability. The total probability of a large excursion of the corrected path is small compared with the sum of those starting probabilities. This leaves successful paths in many annuli. A large $n_j$ makes the path lower bound in its annulus smaller and uses some of the labels available to the other annuli. Cauchy–Schwarz combines the lower bounds using $\sum_j n_j\le N$. The expected cost exceeds $30/N$, while Topic VII gave an upper bound of $29.7/N$ for the same expectation. The assumed $z$ cannot occur. This proves $D_N\subseteq U_N$, and the cycle construction in Topic II gives equality.

### Where the large order enters {#cutoff}

Why use so many annuli? More intervals make it costlier to turn within a single one on average, since the intervals share the same $N$ labels. The lower bound requires $\gamma J/C\ge40$. This gives $J=61\,104\,000$ and width $w=(.999/201)/J$, about $8.13\cdot10^{-11}$. The probability of a large excursion depends on $1/(Nw^2)$, so this small width requires a very large order. The calculation below gives a sufficient bound strictly below $10^{30}$. The [computer-assisted proof](https://arxiv.org/html/2611.30905v2#A1) gives the common region for every $N\ge450$.

::: {.reader-checkpoint}
**What pays for the quarter turn?** Why would counting all $T$ edges give a weaker lower bound than counting the labels in the annulus?

<details><summary>Check your answer</summary>

The original path may visit labels repeatedly, and $T$ may be very large. Removing loops retains the endpoint difference while leaving at most $n_j-1$ edges. That smaller number in Cauchy–Schwarz gives the lower bound that can compete with $29.7/N$.

</details>
:::

<!-- proof-details -->

### Turn the prefix estimate into an interval count

Write $1=b_1\ge\cdots\ge b_N$ for the ordered moduli and $K=5000$. Choose
$$
 \gamma=1/201,\quad C=1.52K,\quad
 J=\lceil 40C/\gamma\rceil,\quad w=.999\gamma/J.
$$
Here $\lceil x\rceil$ is the least integer at least $x$. It suffices to take
$$
 N\ge\max\left\{4\cdot10^{16},\frac{4250C}{\gamma w^2}\right\}.
$$
This bound implies each of the size conditions we will use below.
$$
 N\ge \max\{10^6,\ 50000/\gamma,\ 4000K,\ 1000C/w,\ 20000/w\}.
$$
In particular $40/N<.001\gamma$ and each hull vertex has modulus above $I$.

Suppose an open gap $(b_{h+1},b_h)$ meets the interior of $I$. Its upper endpoint is at least $1-\gamma$, and its lower endpoint is below the hull vertices. The prefix of size $h>.332N$ contains them and has $h\ge10^{16}$. Dividing by its root mean square can only increase its squared gap because that mean is at most one. The estimate in V therefore gives
$$
 b_h-b_{h+1}<\frac{K}{h(b_h+b_{h+1})}.
$$
First $b_h+b_{h+1}\ge .995$ gives a gap at most $3.03K/N<.001$. Substituting back gives $b_h+b_{h+1}\ge 2(1-\gamma)-.001\ge1.989$. Now $1/(.332\cdot1.989)<1.52$, so the width is at most $C/N$. The interval count follows.

### Stay within the annulus and get far from the start

Assign shared endpoints of the $J$ intervals to the interval on their right, and keep the last right endpoint in the last interval. Write $n_j$ for the number of labels in interval $j$. Its central interval of length $.6w$ contains at least $.6wN/C-1$ labels. Thus the probability of starting there is at least $m_0=.599w/C$, since $N\ge1000C/w$.

By Topic VII the probability of $\max_{k\le T}|Y_k-Y_0|>.199w$ is at most $20/(.199^2Nw^2)\le m_0J/5$. For the last comparison insert the bound on $N$ and use $m_0J=.599\cdot.999\gamma/C$. A path starting in the central interval and satisfying the uniform distance bound also satisfies
$$
 \big||v_{X_k}|-|v_{X_0}|\big|\le .199w+1-R^T<.2w .
$$
It stays strictly inside its starting interval of moduli. Since $1-R^T<10/N$ and $\cos(T\varphi)\le\varphi$, we have $|1-\lambda^T|^2\ge2-(20+4\pi)/N$, so $|1-\lambda^T|>1.4142$. The endpoint difference is at least $|1-\lambda^T||v_{X_0}|-.199w>1.414(1-\gamma)-.199w$. Squaring gives the bound $1.97$ used above.

### Add the costs across the annuli

Let $f_j$ be the probability of starting in the central interval of annulus $j$ and violating the [uniform distance bound](/perfect-mirsky/topic-vii/#path-control). These events have disjoint starting intervals. Thus $\sum_j f_j\le m_0J/5$ and the success probabilities are at least $q_j=\max\{m_0-f_j,0\}$. We have $0\le q_j\le m_0$ and $\sum_jq_j\ge4m_0J/5$. All $n_j$ are positive. The expected contribution from successful paths starting in annulus $j$ is at least $1.97q_j/n_j$. To combine these contributions, write $\sqrt{q_j}=\sqrt{q_j/n_j}\sqrt{n_j}$ and apply Cauchy–Schwarz using $\sum_jn_j\le N$. Also $\sqrt{q_j}\ge q_j/\sqrt{m_0}$. This gives
$$
 1.97\sum_j\frac{q_j}{n_j}
 \ \ge\ \frac{1.97}{N}\left(\sum_j\sqrt{q_j}\right)^2
 \ \ge\ \frac{1.97(4/5)^2m_0J^2}{N}
 \ >\ \frac{30}{N}.
$$
For the last step use $m_0J^2=.599\cdot.999\gamma J/C$ and $\gamma J/C\ge40$. This is the lower bound on expected squared edge cost that contradicts the upper bound.

Substitution gives $J=61\,104\,000$ and
$$
 \left\lceil\frac{4250C}{\gamma w^2}\right\rceil
 =981\,293\,676\,405\,877\,185\,293\,401\,509\,618
 <10^{30}.
$$
Since $4\cdot10^{16}<10^{30}$ as well, the contradiction applies at every integer $N\ge10^{30}$.
