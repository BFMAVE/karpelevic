### Turn the contact pattern into return paths

At a vertex $v_j$ there are two possibilities for the next iterate. The contact on side $j+\kappa$ either equals the vertex $v_{j+\kappa}$ or lies between the endpoints of that side. Topic IV arranged the sides of the second kind in one block, $I=\{1,\ldots,\varphi\}$. All indices on the polygon are read modulo $N$.

Choose a vertex whose index belongs to $I$ and call it a **base**. Add $\kappa$ to its index until the next label in $I$ occurs. Until the last step, the actual orbit under $T(x)=\zeta x$ visits precisely the vertices in this list. At the last step it reaches a point inside the side with the new label. The vertices visited before that step form a **tower**. Its height counts the applications of $T$ needed to reach the open side.

With $N=8$, $\kappa=3$ and $I=\{1,2\}$, the paths are

$$
1\to4\to7\to2,\qquad2\to5\to0\to3\to6\to1.
$$

Their heights are three and five. They use each of the eight indices once before their returns. The tower equations are $\zeta^3v_1=c_2$ and $\zeta^5v_2=c_1$. These equations describe what an invariant polygon with this contact data would satisfy; index arithmetic alone does not prove that such a polygon exists.

Keep the distinction between a destination index and a destination point. Returning to index two means that the image lands at $c_2$, inside the side ending at $v_2$; it does not mean that it equals $v_2$. All intermediate destinations outside the base set really are vertices. This is why a height records a power of $\zeta$ up to one final averaging equation.

<div class="reader-checkpoint" data-retrieval-checkpoint>

**Return checkpoint.** Starting at base two, the index path is $2\to5\to0\to3\to6\to1$. Does reaching index zero after two steps count as a return? What is the actual point at the five-step return?

<details class="reader-checkpoint-hint">
<summary>Hint</summary>

A return is tested against the designated base set $I=\{1,2\}$, not against a familiar label or the origin of the index circle.

</details>
<details class="reader-checkpoint-solution">
<summary>Solution</summary>

Zero is outside $I$, so it is an intermediate vertex: $\zeta^2v_2=v_0$. The first later index in $I$ is one, reached after five steps. Its actual point is $c_1$, strictly inside side $(v_0,v_1)$, not vertex $v_1$.

</details>
</div>

### Compute the records before introducing the integer basis

For the same $N=8$, $\kappa=3$, the complete residue period is shown below. A strict record is larger than every earlier residue; time zero is the initial record. The full-wrap counter is $\lfloor3t/8\rfloor$, so

$$
3t=8\lfloor3t/8\rfloor+[3t]_8.
$$

The two right-hand terms answer different questions: where are we among the eight labels, and how many complete label wraps preceded that position?

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

Topic IV proved that $\varphi$ is the deficit of a record in $a_t=[t\kappa]_N$: a record exceeds every earlier residue, and its deficit is $N-a_t$. Let $\delta=\gcd(N,\kappa)$. Only multiples of $\delta$ occur, so the last record has deficit $\delta$.

Define a linear function on integer pairs by

$$
L(a,b)=a\kappa-bN.
$$

For a record at time $h>0$, put $b=\lceil h\kappa/N\rceil$, where the ceiling is the smallest integer at least its argument. The pair $V=(h,b)$ satisfies $L(V)=-\nu$, where $\nu$ is the deficit. Encode the initial record by $V=(0,1)$, with deficit $N$.

Take consecutive record pairs $V=(h,b)$ and $V'=(h',b')$, with deficits $\nu>\nu'$. Put

$$
U=V'-V=(q,p),\qquad\Delta=\nu-\nu'.
$$

The record-basis lemma in the paper proves

$$
qb-ph=1,\qquad q\kappa-pN=\Delta,\qquad h\kappa-bN=-\nu,
$$

$$
q\nu+h\Delta=N,\qquad\gcd(\Delta,\nu)=\delta.
$$

Here $q=h'-h>0$ and $0<\Delta<\nu$. The determinant $qb-ph$ is the signed area of the parallelogram spanned by the two integer vectors $U,V$. Determinant one means that every integer pair has unique integer coordinates in this basis: the inverse of the $2\times2$ matrix has integer entries.

Why introduce a second coordinate $b$ when the residues are one-dimensional? Reducing $h\kappa$ modulo $N$ forgets how many multiples of $N$ were crossed. The pair $(h,b)$ retains that information. Its determinant relates elapsed time to the change in the remaining gap, and the identity $q\nu+h\Delta=N$ will count exactly how many vertices the towers contain.

For a picture of the determinant argument, consider a possible pair of records at $N=17$, $\kappa=3$. At times two and five the residues are $6$ and $15$, with deficits $11$ and $2$. Their record vectors are $V=(2,1)$ and $V'=(5,1)$. On squared paper join them by a segment. It passes through the integer point $(3,1)$. That point represents time three and deficit $17-3\cdot3=8$, already better than the deficit at time two. The two records cannot be consecutive.

For the general pair, consider the triangle with corners $0,V,V'$. An integer point of the form $W=\xi V+\eta V'$ with $\xi,\eta>0$ and $\xi+\eta\le1$ would give the same contradiction. Its time is positive and less than $h'$, and its deficit is positive and less than $\nu$, since time and deficit are linear functions of the pair. Thus consecutive records exclude such an integer point. The following argument shows that a determinant with absolute value greater than one always supplies one.

<details class="reader-proof-derivation">
<summary>Find the extra integer point if the determinant exceeds one in absolute value</summary>

A record vector has coprime coordinates. If both were divisible by $g>1$, dividing by $g$ would yield an earlier positive time with smaller deficit, contradicting the record. The initial vector $(0,1)$ is also coprime. Using this coprimality, an integer vector complementary to $V$ can be found with determinant one, by Bézout's identity: coprime integers have an integer linear combination equal to one.

<details class="reader-proof-derivation">
<summary>Recover Bézout’s identity by division with remainder</summary>

For integers $h,b$ not both zero, take the smallest positive integer $d=hr+bs$ obtainable with integer coefficients $r,s$. Such a positive combination exists. Divide $h$ by $d$ with remainder $0\le z<d$. That remainder is also an integer combination of $h,b$, so minimality forces $z=0$. The same argument gives $d\mid b$. Conversely, every common divisor of $h,b$ divides $d$. Hence $d=\gcd(h,b)$; for a coprime pair it is one. We can therefore choose $r,s$ below with $hr+bs=1$.

</details>

Here is the integer-vector construction. Set $D=-\det(V,V')=(h'\nu-h\nu')/N$, which is a positive integer. Choose integers $r,s$ with $hr+bs=1$, and put $W_0=(s,-r)$, so $\det(V,W_0)=-1$. These vectors form an integer basis, and we can write $V'=aV+DW_0$ for an integer $a$. Since $V'$ has coprime coordinates, $\gcd(a,D)=1$.

If $D>1$, the integer vector

$$
W=\left\lceil\frac aD\right\rceil V+W_0
=\left(\left\lceil\frac aD\right\rceil-\frac aD\right)V+\frac1D V'
$$

has the form $W=\xi V+\eta V'$ with $0<\xi,\eta<1$. If $\xi+\eta>1$, replace $W$ by $V+V'-W$; its two coefficients remain positive and now sum to less than one. Thus we can take $\xi+\eta\le1$. The time coordinate is $0<\xi h+\eta h'<h'$, because $h<h'$ and $\xi,\eta>0$. Its deficit is $0<\xi\nu+\eta\nu'<\nu$, because $\nu'<\nu$. Calling these two integers $t$ and $d$, we have $t\kappa\equiv-d\pmod N$ and $0<d<\nu\le N$. Its residue $N-d$ really does exceed $N-\nu$. This integer time would improve the old record before the next record, a contradiction. Therefore $D=1$, which gives $\det(U,V)=1$.

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

Correct return destinations alone do not prove first returns: the lists could overlap or enter $I$ sooner. To exclude this, initially regard each pair $(t,j)$ with $0\le t<H_j$ as a separate tower position. There are

$$
(\varphi-\Delta)q+\Delta(q+h)=q\varphi+h\Delta=N
$$

positions. Join each tower top to the base $\sigma(j)$. Every step then adds $\kappa$ modulo $N$.

The return permutation adds $\Delta$ modulo $\varphi$. Its period is $\varphi/\delta$ because $\gcd(\Delta,\varphi)=\delta$. Thus it visits every base in one residue class modulo $\delta$ before returning. Which of them have a taller tower? The last $\Delta$ consecutive base labels give exactly $\Delta/\delta$ labels from each class, since $\delta$ divides $\Delta$. Consequently its joined tower cycle contains

$$
q\frac\varphi\delta+h\frac\Delta\delta=\frac N\delta
$$

positions. Addition by $\kappa$ modulo $N$ also has period $N/\delta$, so these positions visit every index in their class exactly once. Different cycles use different classes. All $N$ indices therefore occur once. No intermediate level can lie in $I$, because that index already occurs as a base. Hence the displayed $H_j$ really is the first-return time.

For the eight-index check, the records of $0,3,6,1,4,7,\ldots$ have deficits $8,5,2,1$. The record of deficit two has $V=(2,1)$, and its successor has $V'=(5,2)$. Thus $(q,p)=(3,1)$ and $\Delta=1$. The determinant is $3\cdot1-1\cdot2=1$, and $q\varphi+h\Delta=3\cdot2+2=8$. The formulas recover the two paths above.

<!-- reader-figure:early -->

This example also explains why the count is a proof of **first** returns. There are eight tower positions and exactly eight residues. If, say, an intermediate level of the first tower were already base two, that residue would occur both at that level and at the second tower's base. The joined-cycle calculation rules out every such repetition, so no return can happen earlier than the displayed height.

### Preserve the full turns as well as the residues

Let $\Phi_i$ be increasing real vertex angles, continued by $\Phi_{i+N}=\Phi_i+2\pi$. A vertex-to-vertex path of length $t$ satisfies

$$
\Phi_a+t\theta_\zeta=\Phi_{a+t\kappa}.
$$

The index on the right is kept as an integer. Reducing it modulo $N$ would lose its full turns. If the last image is inside a side, the equality becomes

$$
\Phi_{a+t\kappa-1}<\Phi_a+t\theta_\zeta<\Phi_{a+t\kappa}.
$$

The tower starting at $\varphi$ reaches $v_0=v_N$ after $h$ steps and its return contact $c_\Delta$ after another $q$. Therefore $\zeta^hv_\varphi=v_0$ and $\zeta^qv_0=c_\Delta$. These powers and their real angle changes will become the closing relation in Topic VII.

At this point a first return advances by $\Delta$ among the bases. If $\Delta>1$, it passes over at least one base. Arithmetic permits this; Topic VI uses extremal polygon geometry to rule it out. The case $\varphi=\delta$ has no next record and is handled separately in Topic VII.
