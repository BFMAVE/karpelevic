### Turn the contact pattern into return paths

At a vertex $v_j$ there are two possibilities for the next iterate. The contact on side $j+\kappa$ either equals the vertex $v_{j+\kappa}$ or lies between the endpoints of that side. Topic IV arranged the sides of the second kind in one block, $I=\{1,\ldots,\varphi\}$. All indices on the polygon are read modulo $N$.

Choose a vertex whose index belongs to $I$ and call it a **base**. Add $\kappa$ to its index until the next label in $I$ occurs. Until the last step, the actual orbit under $T(x)=\zeta x$ visits precisely the vertices in this list. At the last step it reaches a point inside the side with the new label. The vertices visited before that step form a **tower**. Its height counts the applications of $T$ needed to reach the open side.

Take the eight labels $0,\ldots,7$ and mark the bases $I=\{1,2\}$. Here $\kappa=3$. From each marked label, keep adding three modulo eight and stop at the first marked label you meet again. The two walks in label order are

$$
1\to4\to7\to2,\qquad2\to5\to0\to3\to6\to1.
$$

Starting at $1$, we reach an open side on the third step. Starting at $2$, we reach one on the fifth. The lists *before* the last arrows are $(1,4,7)$ and $(2,5,0,3,6)$, accounting for all eight vertices exactly once. On a polygon with these contacts, the last arrows give $\zeta^3v_1=c_2$ and $\zeta^5v_2=c_1$. For now we are deducing equations that such a polygon would satisfy. Its existence will require a separate construction.

Read the last arrow of the first list carefully. From $v_7$ the map reaches the contact on side $2$, at the point $c_2=\beta_2v_1+\alpha_2v_2$. The label $2$ tells us which side receives the image. On the earlier arrows the destination labels were outside $I$, so the images there were the actual vertices $v_4$ and $v_7$. This is how a list of indices produces an equation for a power of $\zeta$.

<div class="reader-checkpoint" data-retrieval-checkpoint>

**Check the second tower.** Follow $2\to5\to0\to3\to6\to1$. At which step do we first reach a side with an interior contact? Identify the two points $\zeta^2v_2$ and $\zeta^5v_2$.

<details class="reader-checkpoint-hint">
<summary>Hint</summary>

Mark $1$ and $2$ on the list. At a label outside this set the contact is the ending vertex of its side. At a marked label it is strictly between the endpoints.

</details>
<details class="reader-checkpoint-solution">
<summary>Solution</summary>

At step two we read label $0$. Its side has an endpoint contact, giving $\zeta^2v_2=v_0$. Labels $3$ and $6$ are outside $I$ as well. The first marked destination is $1$ at step five, so $\zeta^5v_2=c_1$ lies strictly between $v_0$ and $v_1$.

</details>
</div>

### Compute the records before introducing the integer basis

Start at label zero and keep a tally of the *total* advance, three per step. Every eight places bring us once around the labels. After $t$ steps the number of completed turns in the labels is $\lfloor3t/8\rfloor$, the integer quotient of $3t$ by eight. The remainder is the current label. For one period these quantities are related by

$$
3t=8\lfloor3t/8\rfloor+[3t]_8.
$$

For example, at $t=3$ we have advanced nine places. We have completed one turn in the labels and stand at label one. As you read down the last column, mark a value whenever it exceeds every previous value. Call each such value a *record*, including zero as the initial record.

| Time $t$ | $3t$ | Full label wraps | Residue $[3t]_8$ |
| --- | --- | --- | --- |
| $0$ | $0$ | $0$ | **0** |
| $1$ | $3$ | $0$ | **3** |
| $2$ | $6$ | $0$ | **6** |
| $3$ | $9$ | $1$ | $1$ |
| $4$ | $12$ | $1$ | $4$ |
| $5$ | $15$ | $1$ | **7** |
| $6$ | $18$ | $2$ | $2$ |
| $7$ | $21$ | $2$ | $5$ |
| $8$ | $24$ | $3$ | $0$ |

The records are shown in bold. At time two the deficit is $8-6=2$. At time five it falls to $8-7=1$.

![Each diamond stands higher than all earlier residues. At time two the distance from the record $6$ to the level $8$ is $2$. This is the record belonging to the two bases.](/figures/bachelor-foundations-records.svg)

The table follows the **index permutation**, which continues for as many steps as we please. The geometric identity $\zeta^tv_0=v_{[3t]_8}$ holds only while the orbit has visited vertices at every step. At a positive record time $h$, put $b=\lceil3h/8\rceil$. It is $8b$ that gives the next multiple of eight above $3h$. At $h=2$, for instance, $3h=6$, the next multiple is $8$, and $b=1$. The difference $8b-3h=2$ is the deficit. Thus the records at times two and five give $(h,b)=(2,1)$ and $(5,2)$.

There is a short way to see what the pair can tell us. From the first base we need a net gain of one label to reach the second. Three additions of $3$ give $9=8+1$, so three steps will do it. From the second base to the first we need a net change of $-1$. Five additions give $15=16-1$, so five steps will do it. The numbers of full turns of the *labels* in these two calculations differ. Later, when we multiply complex contact equations, the analogous distinction for *angles* will tell us which argument the product has accumulated.

For this example we could inspect all eight labels to check the first returns. For general $N$ we need an argument that proves how long each path is and that no two paths share an intermediate vertex. The two successive records supply both facts.

### Encode records with integer pairs

Return to an arbitrary $N$ and $\kappa$. Write $a_t=[t\kappa]_N$. Topic IV showed that for some record $a_h$, the number of bases is its remaining distance $\varphi=N-a_h$ from $N$. The residues visited from zero are exactly $0,\delta,2\delta,\ldots,N-\delta$, where $\delta=\gcd(N,\kappa)$. Hence $N-\delta$ is the last record and $\delta$ its distance from $N$.

For a pair of integers $(a,b)$, count the net advance of $a$ steps of size $\kappa$ after subtracting $b$ turns of $N$ labels. Call this number $L(a,b)$, so that

$$
L(a,b)=a\kappa-bN.
$$

At a positive record time $h$, choose $b$ so that $bN$ is the first multiple of $N$ above $h\kappa$. Explicitly $b=\lceil h\kappa/N\rceil$, obtained by rounding up. If $\nu$ denotes the record deficit, then $bN-h\kappa=\nu$, or $L(h,b)=-\nu$. The initial record has deficit $N$ and is represented by $(h,b)=(0,1)$, which obeys the same equation.

We need the change from one record to the next. Let $V=(h,b)$ describe a record of deficit $\nu$ and $V'=(h',b')$ the very next one, with smaller deficit $\nu'$. Write their difference and the gain in the residue as

$$
U=V'-V=(q,p),\qquad\Delta=\nu-\nu'.
$$

The record at $h$ falls short of $bN$ by $\nu$. Between records we gain $\Delta$ places after removing $p$ full turns. The additional fact that these records are consecutive gives a determinant of one. We will prove the identities

$$
qb-ph=1,\qquad q\kappa-pN=\Delta,\qquad h\kappa-bN=-\nu,
$$

$$
q\nu+h\Delta=N,\qquad\gcd(\Delta,\nu)=\delta.
$$

Here $q=h'-h$ counts the extra steps, so $q>0$, and $0<\Delta<\nu$ because some deficit remains. Place $U$ and $V$ in the columns of a matrix. Its determinant $qb-ph$ gives the signed area of their parallelogram. When it equals one, the inverse matrix has integer entries by the two-by-two inverse formula. Thus every integer pair has unique integer coordinates in the basis $U,V$.

A single residue keeps the current label but loses the complete turns that led there. The second coordinate $b$ lets us put them back. The identity $q\nu+h\Delta=N$ can now be read as $\nu$ paths of length $q$, with $h$ extra steps on $\Delta$ of them. These lengths add to precisely the number of polygon vertices. We still have to justify that they describe the first returns.

For a picture of the determinant argument, consider a possible pair of records at $N=17$, $\kappa=3$. At times two and five the residues are $6$ and $15$, with deficits $11$ and $2$. Their record vectors are $V=(2,1)$ and $V'=(5,1)$. On squared paper join them by a segment. It passes through the integer point $(3,1)$. That point represents time three and deficit $17-3\cdot3=8$, already better than the deficit at time two. The two records cannot be consecutive.

For the general pair, consider the triangle with corners $0,V,V'$. An integer point of the form $W=\xi V+\eta V'$ with $\xi,\eta>0$ and $\xi+\eta\le1$ would give the same contradiction. Its time is positive and less than $h'$, and its deficit is positive and less than $\nu$, since time and deficit are linear functions of the pair. Thus consecutive records exclude such an integer point. The following argument shows that a determinant with absolute value greater than one always supplies one.

<details class="reader-proof-derivation">
<summary>Find the extra integer point if the determinant exceeds one in absolute value</summary>

A record vector has coprime coordinates. If both were divisible by $g>1$, dividing by $g$ would yield an earlier positive time with smaller deficit, contradicting the record. The initial vector $(0,1)$ is also coprime. Using this coprimality, an integer vector complementary to $V$ can be found with determinant one, by Bézout's identity: coprime integers have an integer linear combination equal to one.

<details class="reader-proof-derivation">
<summary>Recover Bézout’s identity by division with remainder</summary>

For integers $h,b$ not both zero, take the smallest positive integer $d=hr+bs$ obtainable with integer coefficients $r,s$. Such a positive combination exists. Divide $h$ by $d$ with remainder $0\le z<d$. That remainder is also an integer combination of $h,b$, so minimality forces $z=0$. The same argument gives $d\mid b$. Conversely, every common divisor of $h,b$ divides $d$. Hence $d=\gcd(h,b)$; for a coprime pair it is one. We can therefore choose $r,s$ below with $hr+bs=1$.

</details>

Measure the area of the parallelogram with sides $V,V'$ by the positive integer $D=-\det(V,V')=(h'\nu-h\nu')/N$. The last equality follows by substituting $bN=h\kappa+\nu$ and $b'N=h'\kappa+\nu'$. Take $r,s$ from Bézout's identity above and set $W_0=(s,-r)$. Then $\det(V,W_0)=-hr-bs=-1$. In the integer basis $V,W_0$, write $V'=aV+DW_0$. The second coefficient is $D$ by taking the determinant with $V$. A common divisor of $a,D$ would divide both coordinates of $V'$, so $\gcd(a,D)=1$.

Suppose $D>1$. Taking one copy of $W_0$ gives us a fraction $1/D$ of the way towards $V'$. To place the coefficient of $V$ strictly between zero and one as well, choose

$$
W=\left\lceil\frac aD\right\rceil V+W_0
=\left(\left\lceil\frac aD\right\rceil-\frac aD\right)V+\frac1D V'
$$

The first expression makes $W$ an integer vector. In the second expression its coefficients $\xi=\lceil a/D\rceil-a/D$ and $\eta=1/D$ both lie strictly between zero and one, since $\gcd(a,D)=1$ and $D>1$. If their sum exceeds one, use the integer vector $V+V'-W$ instead. Its coefficients $1-\xi$ and $1-\eta$ are again positive and now sum to less than one. We have found an integer point in the triangle with $\xi,\eta>0$ and $\xi+\eta\le1$.

Its time $t=\xi h+\eta h'$ satisfies $0<t<h'$, and its deficit $d=\xi\nu+\eta\nu'$ satisfies $0<d<\nu$. Since $d=-L(W)$, the residue at time $t$ is $N-d>N-\nu$. If $t\le h$, this contradicts the record at $h$. If $h<t<h'$, it puts a better residue between our consecutive records. Both possibilities contradict their choice, which proves $D=1$.

</details>

It follows that $\det(U,V)=1$. The two equations involving $L$ follow from the record deficits. Expanding the determinant gives $q\nu+h\Delta=N$. Finally, because $U,V$ form an integer basis, the possible values of $L$ are all integer combinations of $\Delta,\nu$. By definition they are also all integer combinations of $\kappa,N$. Their positive greatest common divisors are therefore equal.

### The tower partition is a counting proof

Assume $\varphi>\delta$, so its record has a successor, and put $\nu=\varphi$. Begin at a base $j\in\{1,\ldots,\varphi\}$. Taking $q$ steps adds $q\kappa=pN+\Delta$ to the label, the same as moving forward $\Delta$ places modulo $N$. If $j+\Delta\le\varphi$, this already gives a base. For the last $\Delta$ bases we instead take $q+h$ steps. The extra $h$ steps add $h\kappa=bN-\varphi$, putting the final label at $j+\Delta-\varphi\in\{1,\ldots,\Delta\}$. These are candidate destinations. We still have to exclude an earlier return on either path. Writing $H_j$ for the proposed height and $\sigma(j)$ for the destination gives

$$
H_j=\begin{cases}q,&1\le j\le\varphi-\Delta,\\q+h,&\varphi-\Delta<j\le\varphi,\end{cases}
$$

$$
\sigma(j)=\begin{cases}j+\Delta,&j\le\varphi-\Delta,\\j+\Delta-\varphi,&j>\varphi-\Delta.\end{cases}
$$

Thus the original vertex labels are read modulo $N$, while $\sigma$ adds $\Delta$ among the $\varphi$ base labels, returning to $1$ after $\varphi$.

A proposed path can end at the correct base even if it has already passed another base on the way. To rule this out, number each proposed position by $(t,j)$, where $j$ is the starting base and $0\le t<H_j$ is the number of steps so far. Keep these positions separate until we know which labels they carry. Counting them from the proposed heights gives

$$
(\varphi-\Delta)q+\Delta(q+h)=q\varphi+h\Delta=N
$$

positions. From the last position of tower $j$, take one more step and join it to the starting position of tower $\sigma(j)$. Within a tower the label advances by $\kappa$ at each step. The congruence $j+H_j\kappa\equiv\sigma(j)\pmod N$ shows that the step between towers has this same advance.

The return permutation adds $\Delta$ modulo $\varphi$. Its period is $\varphi/\delta$ because $\gcd(\Delta,\varphi)=\delta$. Thus it visits every base in one residue class modulo $\delta$ before returning. Which of them have a taller tower? The last $\Delta$ consecutive base labels give exactly $\Delta/\delta$ labels from each class, since $\delta$ divides $\Delta$. Consequently its joined tower cycle contains

$$
q\frac\varphi\delta+h\frac\Delta\delta=\frac N\delta
$$

positions. The first repeated label on a walk adding $\kappa$ occurs exactly $N/\delta$ steps after the start. Indeed, $m\kappa$ is divisible by $N$ precisely when $m$ is divisible by $N/\delta$. Thus each joined cycle uses every label of its residue class once, and the distinct cycles cover distinct classes. This accounts for all $N$ labels with no repetitions. Each member of $I$ already occurs as a starting position, so none can occur partway up a tower. The step at height $H_j$ is therefore the first return.

For $N=8$, $\kappa=3$ the record residues are $0,3,6,7$, leaving deficits $8,5,2,1$. For $\varphi=2$ we take $V=(2,1)$ at residue six and $V'=(5,2)$ at residue seven. Subtracting gives $(q,p)=(3,1)$, and the deficit drops by $\Delta=1$. We can check both counts directly. The determinant is $3\cdot1-1\cdot2=1$. The two towers have heights $q=3$ and $q+h=5$, with $q\varphi+h\Delta=3\cdot2+2=8$ positions altogether.

<!-- reader-figure:early -->

Follow the two towers in the drawing as a single cycle of labels, joining the top of the first to base $2$ and the top of the second to base $1$. From $1$ it takes eight additions of $3$ modulo $8$ before a label repeats. Since the eight positions already include both bases, neither base can appear a second time on an intermediate level. This proves the *first* in “first return” for this example.

### Preserve the full turns as well as the residues

We also want the angle through which a point has actually turned. As in Topic III, list the angles $\Phi_i$ in increasing order and continue them by $\Phi_{i+N}=\Phi_i+2\pi$. Suppose we start at $v_a$ and land on a vertex for the next $t$ steps. Each step adds $\theta_\zeta$ to the angle and $\kappa$ to the index. Adding the $t$ equalities from Topic III gives

$$
\Phi_a+t\theta_\zeta=\Phi_{a+t\kappa}.
$$

For example, $\Phi_{N+1}$ describes the same vertex direction as $\Phi_1$, but its value is $\Phi_1+2\pi$. Keeping the integer index $a+t\kappa$ preserves this extra turn. If the first $t-1$ images are vertices and the last lies inside side $a+t\kappa$, the final angle is strictly between the angles of its endpoints. In that case we have

$$
\Phi_{a+t\kappa-1}<\Phi_a+t\theta_\zeta<\Phi_{a+t\kappa}.
$$

One tower will later close the product around the polygon. From base $\varphi$ its height is $q+h$ and its destination is $\Delta$. At level $h$ its label is $\varphi+h\kappa\equiv0\pmod N$. Since $q>0$, this occurs before the return and the actual point is $v_0=v_N$. Thus the first $h$ steps give $\zeta^hv_\varphi=v_0$, including the possibility $h=0$. The last $q$ steps give $\zeta^qv_0=c_\Delta$. Topic VII uses both equalities and their accumulated angles.

At this point a first return advances by $\Delta$ among the bases. If $\Delta>1$, it passes over at least one base. Arithmetic permits this; Topic VI uses extremal polygon geometry to rule it out. The case $\varphi=\delta$ has no next record and is handled separately in Topic VII.
