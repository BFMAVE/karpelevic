### Follow a mark using the matrix entries {#markov-chain}

Take the matrix $B$ and eigenvalue $\lambda=Re^{i\varphi}$ from [Topic VI](/perfect-mirsky/topic-vi/). Choose a starting label $X_0$ uniformly from $1,\ldots,N$. When the current label is $i$, choose the next label $j$ with probability $b_{ij}$. This is a finite **Markov chain**. Its next-step probabilities depend only on the current label. The uniform distribution stays uniform, because the probability of arriving at label $j$ is $\sum_i b_{ij}/N=1/N$. We call this property **stationarity** of the uniform distribution.

At step $k$ the mark is $v_{X_k}$. Given the path so far, its next expected value is $(Bv)_{X_k}=\lambda v_{X_k}$. A **conditional expectation** here means the average over the possible continuations with the already observed labels fixed. Averaging from a fixed starting label gives mean position $\lambda^k v_{X_0}$ at time $k$. We will use this moving mean to measure an excursion of an individual path.

### A path whose endpoint conceals its excursion {#quarter-turn}

Place 36 marks at $v_j=\zeta^j$ for $j=0,\ldots,35$, where $\zeta=e^{2\pi i/36}$. From each label take one or two steps around the ring with equal probability, wrapping around after label 35. The common multiplier is $(\zeta+\zeta^2)/2=\cos(\pi/36)e^{i\pi/12}$. Start at label zero. In six moves the mean position has turned by $\pi/2$, a right angle. Follow the possible path with increments $1,1,1,2,2,2$. At step three its angle is $30^\circ$ while the mean angle is $45^\circ$. At step six both are $90^\circ$. Compare those two steps in the drawing.

<!-- mirsky-figure:quarter-turn -->

We can compare all the times in the same coordinates by undoing the expected rotation and contraction. Put $Y_k=\lambda^{-k}v_{X_k}$. In the 36-state example write $R=\cos(\pi/36)$. At step three on the displayed path, $Y_3=R^{-3}e^{-i\pi/12}$ because the mark is $15^\circ$ behind the mean angle. At step six $Y_6=R^{-6}$ because the angles agree. The graph compares their distances from $Y_0=1$.

For the general chain, multiply the conditional averaging equation by $\lambda^{-(k+1)}$. Given all labels through step $k$, the next mean in the corrected coordinates is $\lambda^{-(k+1)}\lambda v_{X_k}=Y_k$. A process with that property and a finite mean absolute value at each time is called a **martingale**. Here the average runs over finitely many paths at every fixed time.

### Control the whole path {#path-control}

For the proof put $T=\lfloor\pi/(2\varphi)\rfloor$. Then $T\varphi$ is within $\varphi$ of a quarter turn. By stationarity $v_{X_T}$ and $v_{X_0}$ have the same mean squared modulus. The martingale property gives $\mathbb E[Y_T\mid X_0]=Y_0$. These facts yield
$$
 \mathbb E|Y_T-Y_0|^2
   =(R^{-2T}-1)\mathbb E|v_{X_0}|^2
   \le20/N .
$$
To control an earlier excursion, ask for the first time the corrected mark exceeds a distance $\varepsilon$ from $Y_0$. At that time the squared distance is already above $\varepsilon^2$. Conditional averaging cannot decrease its expected final square, by convexity of the squared modulus. Since the first-crossing events are disjoint, their total probability is at most $20/(N\varepsilon^2)$. This is Doob's maximal inequality for the squared distance, applied over a finite number of steps. [Doob (1953)](/perfect-mirsky/#reference-doob)

Keep the two measurements separate when reading the next topic. Excursions of $Y_k$ tell us which labels the original path can visit. The sum of squared edge lengths is measured on the marks $v_{X_k}$ in the original plane. Stationarity gives probability $b_{ij}/N$ for edge $i\to j$ at each step. Apply [the bound on $E_{\mathrm{step}}$](/perfect-mirsky/topic-vi/#edge-energy) to obtain
$$
 \mathbb E\sum_{k=0}^{T-1}|v_{X_{k+1}}-v_{X_k}|^2
   =T E_{\mathrm{step}}/N <29.7/N .
$$
Topic VIII will obtain a larger lower bound from paths that stay within their starting annulus.

::: {.reader-checkpoint}
**Why divide by $\lambda^k$?** If we divided only by $R^k$, what would the conditional mean of the corrected process do at the next step?

<details><summary>Check your answer</summary>

It would still rotate by $e^{i\varphi}$. Dividing by the whole factor $\lambda^k$ removes the rotation as well as the change in modulus.

</details>
:::

<!-- proof-details -->

### Derive the bound at time $T$

Expanding the squared difference gives the cross term $-2\operatorname{Re}\mathbb E(\bar Y_0Y_T)$. Once $X_0$ is given, $\bar Y_0$ is fixed and the mean of $Y_T$ is $Y_0$. Averaging this conditional identity gives $\mathbb E(\bar Y_0Y_T)=\mathbb E|Y_0|^2$. Thus only $\mathbb E|Y_T|^2-\mathbb E|Y_0|^2$ remains. Since the initial label is uniform, so is the final one, and
$$
 \mathbb E|Y_T|^2=R^{-2T}\mathbb E|v_{X_T}|^2=R^{-2T}\mathbb E|Y_0|^2.
$$
Now $T\le\pi/(2\varphi)$ and $-\log R\le6.29\varphi/N$, so $R^{-2T}\le e^{6.29\pi/N}$. All original marks have modulus at most one. For $N\ge10^6$, $e^{6.29\pi/N}-1<20/N$, which follows for instance from $e^s-1\le s e^s$ for $s\ge0$. The same logarithmic bound gives $1-R^T<10/N$.

### Sum the first-crossing events

Let $F_j$ be the event that $j\le T$ is the first time with $|Y_j-Y_0|>\varepsilon$. Knowing the path up to $j$ determines $F_j$. By iterated conditional averaging and the martingale identity, the conditional mean of $Y_T$ at that time is $Y_j$. Jensen's inequality for $w\mapsto |w-Y_0|^2$ therefore gives
$$
 \mathbb E\big[\mathbf1_{F_j}|Y_T-Y_0|^2\big]
       \ge\mathbb E\big[\mathbf1_{F_j}|Y_j-Y_0|^2\big]
       \ge\varepsilon^2\mathbb P(F_j).
$$
The notation $\mathbf1_{F_j}$ includes only paths in the stated event. Summing in $j$ proves the bound on the probability of any crossing. Finally $T E_{\mathrm{step}}\le18.88\pi/2<29.7$ gives the claimed upper bound for squared motion.
