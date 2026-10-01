### Turn the contact pattern into return paths

The map $T(x)=\zeta x$ sends vertex $v_j$ to the contact on side $j+\kappa$, with vertex indices modulo $N$. Interior contacts occur exactly on sides indexed by $I=\{1,\ldots,\varphi\}$. If a destination index is outside $I$, its contact coefficient $\beta$ is zero and the image is the ending vertex itself.

Start at a base vertex $v_j$ with $j\in I$. Follow the indices $j,j+\kappa,j+2\kappa,\ldots$ until they first return to $I$. Before that return, all images are vertices. The final image is a point inside a side. The list before the return is called a tower, and its number of vertices is its height. This is a finite list of iterates, not an additional geometric object.

With $N=8$, $\kappa=3$ and $I=\{1,2\}$, the paths are

$$
1\to4\to7\to2,\qquad2\to5\to0\to3\to6\to1.
$$

Their heights are three and five. They use each of the eight indices once before their returns. The tower equations are $\zeta^3v_1=c_2$ and $\zeta^5v_2=c_1$. These equations describe what an invariant polygon with this contact data would satisfy; index arithmetic alone does not prove that such a polygon exists.

Keep the distinction between a destination index and a destination point. Returning to index two means that the image lands at $c_2$, inside the side ending at $v_2$; it does not mean that it equals $v_2$. All intermediate destinations outside the base set really are vertices. This is why a height records a power of $\zeta$ up to one final averaging equation.

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

Why must it be one? A record vector has coprime coordinates. If both were divisible by $g>1$, dividing by $g$ would yield an earlier positive time with smaller deficit, contradicting the record. Using this coprimality, an integer vector complementary to $V$ can be found with determinant one, by Bézout's identity. Bézout's identity says that coprime integers have an integer linear combination equal to one.

Here is the integer-vector construction. Set $D=-\det(V,V')=(h'\nu-h\nu')/N$, which is a positive integer. Choose integers $r,s$ with $hr+bs=1$, and put $W_0=(s,-r)$, so $\det(V,W_0)=-1$. These vectors form an integer basis, and we can write $V'=aV+DW_0$ for an integer $a$. Since $V'$ has coprime coordinates, $\gcd(a,D)=1$.

If $D>1$, the integer vector

$$
W=\left\lceil\frac aD\right\rceil V+W_0
=\left(\left\lceil\frac aD\right\rceil-\frac aD\right)V+\frac1D V'
$$

has the form $W=\xi V+\eta V'$ with $0<\xi,\eta<1$. If $\xi+\eta>1$, replace $W$ by $V+V'-W$; its two coefficients remain positive and now sum to less than one. The time coordinate is $0<\xi h+\eta h'<h'$, and its deficit is $0<\xi\nu+\eta\nu'<\nu$. This integer time would improve the old record before the next record, a contradiction. Therefore $D=1$, which gives $\det(U,V)=1$.

The two equations involving $L$ follow by subtraction. Expanding the determinant gives $q\nu+h\Delta=N$. Finally, because $U,V$ form an integer basis, the possible values of $L$ are all integer combinations of $\Delta,\nu$. By definition they are also all integer combinations of $\kappa,N$. Their positive greatest common divisors are therefore equal.

### The tower partition is a counting proof

Assume $\varphi>\delta$, so its record has a successor, and use the preceding formulas with $\nu=\varphi$. The proposed first-return heights and destinations are

$$
H_j=\begin{cases}q,&1\le j\le\varphi-\Delta,\\q+h,&\varphi-\Delta<j\le\varphi,\end{cases}
$$

$$
\sigma(j)=\begin{cases}j+\Delta,&j\le\varphi-\Delta,\\j+\Delta-\varphi,&j>\varphi-\Delta.\end{cases}
$$

Thus $\sigma$ adds $\Delta$ modulo $\varphi$, returning an index in $I$. The congruences $q\kappa\equiv\Delta$ and $h\kappa\equiv-\varphi$ modulo $N$ show that $j+H_j\kappa$ has residue $\sigma(j)$. Congruence means that the difference is divisible by $N$.

Correct return destinations alone do not prove first returns: the lists could overlap or enter $I$ sooner. To exclude this, initially regard each pair $(t,j)$ with $0\le t<H_j$ as a separate tower position. There are

$$
(\varphi-\Delta)q+\Delta(q+h)=q\varphi+h\Delta=N
$$

positions. Join each tower top to the base $\sigma(j)$. Every step then adds $\kappa$ modulo $N$.

The return permutation $\sigma$ has $\delta$ cycles, one in each residue class modulo $\delta$. Each cycle contains $\varphi/\delta$ bases, including exactly $\Delta/\delta$ of the taller towers. Consequently its joined tower cycle contains

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

At this point a first return advances by $\Delta$ among the bases. If $\Delta>1$, it skips intervening bases. Arithmetic permits this; Topic VI uses extremal polygon geometry to rule it out. The case $\varphi=\delta$ has no next record and is handled separately in Topic VII.
