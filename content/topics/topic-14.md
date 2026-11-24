### Following one complete eight-state example

On the ray of angle $5\pi/7$, how far can an eigenvalue of an eight-state stochastic matrix lie from zero? We will find the point, write down a matrix that reaches it and draw the eight coordinates of an eigenvector. A state will therefore have two pictures. In the transition graph it has a label and arrows to its successors. In the complex plane it is a point, and its successors tell us where multiplication by the eigenvalue sends that point.

We first work out what the proposed contacts would force. Once we have a value of $z$, we can check the contacts by constructing the polygon.

Suppose an invariant polygon has eight vertices $v_0,\ldots,v_7$ in counterclockwise order. Multiplication by $z=\rho e^{i\theta}$ sends each vertex into the assigned side $(v_{i+2},v_{i+3}]$, with indices modulo eight. Two images fall strictly between the endpoints of a side, namely $c_1\in(v_0,v_1)$ and $c_2\in(v_1,v_2)$. Thus the order is $N=8$, the cyclic shift is $\kappa=3$, and the number of interior contacts is two.

Where do the fractions come from in this example? The ray makes $5/14$ of a turn. With denominators at most eight, its neighbours are $1/3$ below and $3/8$ above. Indeed $3\cdot3-1\cdot8=1$ and their denominator sum is $11>8$, so no fraction of order eight fits between them. In the notation $p/q<r/s$ we have $q=3$, $s=8$ and $m=\lfloor8/3\rfloor=2$. There is room for two blocks of three steps and two steps left over. We shall find all eight in the following paths.

### The return paths and the real turn count

Starting at $v_1$ or $v_2$, each image that lands on a vertex advances its index by three modulo eight. Following the images from the two starting points gives

$$
v_1\longrightarrow v_4\longrightarrow v_7\longrightarrow c_2,
$$

$$
v_2\longrightarrow v_5\longrightarrow v_0\longrightarrow v_3
\longrightarrow v_6\longrightarrow c_1.
$$

The first line tells us $z^3v_1=c_2$. Why does the second line continue past $v_0$? Our target consists of the sides $(v_0,v_1]$ and $(v_1,v_2]$. The bracket convention assigns the endpoint $v_0$ to the side ending there, $(v_7,v_0]$, which is outside this target. Starting at $v_2$, we therefore spend two steps getting to $v_0$ and three more getting from $v_0$ to $c_1$. The return takes five steps.

::: {.reader-checkpoint #eight-state-first-return}
**Retrieval checkpoint.** Trace the second path without looking at its endpoint. The second image is $v_0$. Which side owns that endpoint, and after how many multiplications does the path first reach the target?

<details>
<summary>Hint</summary>

Write out the target set using the two half-open sides. The square bracket identifies the endpoint each side includes.

</details>
<details>
<summary>Solution</summary>

The target set is $(v_0,v_1]\cup(v_1,v_2]$, and $v_0$ belongs to the preceding side $(v_7,v_0]$. The two-step arrival at $v_0$ therefore continues through $v_3$ and $v_6$. Only the fifth image, $c_1\in(v_0,v_1)$, belongs to the target set. Counting $v_0$ as a return would discard the extra two-step closing relation and change the product's exponent.

</details>
:::

For $j=1,2$, the contact $c_j$ is strictly inside the segment from $v_{j-1}$ to $v_j$. Write $c_j=\beta_jv_{j-1}+\alpha_jv_j$ with $0<\beta_j<1$ and $\alpha_j=1-\beta_j$. Now read three pieces of the paths separately. From $v_0$ it takes three steps to $c_1$, from $v_1$ three to $c_2$, and from $v_2$ two back to $v_0$. Substitution gives

$$
(z^3-\beta_1)v_0=\alpha_1v_1,\qquad
(z^3-\beta_2)v_1=\alpha_2v_2,\qquad
z^2v_2=v_0.
$$

Now divide the first two relations by their positive weights and their starting coordinates, and multiply by the closing ratio. We obtain

$$
z^2(z^3-\beta_1)(z^3-\beta_2)=\alpha_1\alpha_2.
$$

For example, the intermediate coordinate $v_1$ occurs once in a numerator and once in a denominator. In full, the three ratios are $v_1/v_0$, $v_2/v_1$ and $v_0/v_2$. Their product equals one regardless of the scale of the drawing. There is also information in the order in which the vertices occur.

Here we can count the turn directly. Write the vertex angles as increasing real numbers $\Phi_0<\cdots<\Phi_7<\Phi_8=\Phi_0+2\pi$. The two closing steps go from $v_2$ to $v_5$ and then to $v_0$. Each adds the angle $\theta=5\pi/7$. On the first step we meet index $5$ farther along the same list. On the second we pass the end of the list and meet index $0$ on the next turn. Thus $\Phi_5-\Phi_2=\theta$ and $\Phi_8-\Phi_5=\theta$.

The first factor $z^3-\beta_1$ is $\alpha_1v_1/v_0$, so its angle is $u_1=\Phi_1-\Phi_0$. The second has angle $u_2=\Phi_2-\Phi_1$. These are the successive counterclockwise gaps between the first three vertices. Together with the two closing steps they take us from $\Phi_0$ to $\Phi_8$. Hence

$$
2\theta+u_1+u_2=2\pi.
$$

The right side records one full turn. Taking the argument of the product alone would leave an unknown multiple of $2\pi$ here. The path supplies the integer $r-mp=3-2=1$.

### Choosing and checking the radius

For our ray $\theta=5\pi/7$, the lower Farey endpoint $1/3$ makes a whole turn after three steps. Our ray has then turned a little farther. This excess is $A$. At the upper endpoint $3/8$ it would take eight steps to complete three turns. Our ray falls short there, and half the shortfall is $B$ because there are two factors. Putting the two calculations side by side gives

$$
A=3\theta-2\pi=\pi/7,\qquad
B=(6\pi-8\theta)/2=\pi/7.
$$

The equation of Topic VIII has the form $\rho^{s/m}\sin A+\rho^q\sin B=\sin(A+B)$. Here $s/m=4$, $q=3$, and both sine coefficients equal $\sin(\pi/7)$. Using $\sin(2h)=2\sin h\cos h$ with $h=\pi/7$ and dividing by $\sin h>0$ gives

$$
\rho^4+\rho^3=2\cos(\pi/7).
$$

At $\rho=0$ the left side is zero, and at $\rho=1$ it is two. Between these values both powers increase strictly and continuously. Since $0<2\cos(\pi/7)<2$, the equation picks out exactly one radius in $(0,1)$. Bisection gives $\rho\approx0.97061308$.

How do we find the weights for the matrix? Equality in Topic IX's convexity bound makes the two weights equal. Write $\beta_1=\beta_2=\beta$ and $\alpha=1-\beta$. The two equal factor arguments have sum $2\pi-2\theta=4h$, so each is $2h$. The modulus of the product gives $|z^3-\beta|=\alpha/\rho$. Hence

$$
 z^3=\beta+\frac{\alpha}{\rho}e^{2ih}.
$$

The left side has argument $h$, exactly between $0$ and $2h$. Rotate the equation through $-h$ and take imaginary parts. The two terms on the right have imaginary parts $-\beta\sin h$ and $(\alpha/\rho)\sin h$, which cancel. We obtain $\beta=\alpha/\rho$. Together with $\alpha+\beta=1$ this gives

$$
\beta=\frac{1}{1+\rho},\qquad \alpha=\frac{\rho}{1+\rho}.
$$

![After rotation through $-h$, the first vector drops by $\beta\sin h$ and the second rises by $(\alpha/\rho)\sin h$. Their sum lies on the real axis.](/figures/bachelor-assembly-weights.svg)

We can now check these weights directly. Since $z^3=\rho^3e^{ih}$ and $\rho^3=2\cos h/(1+\rho)=2\beta\cos h$,

$$
z^3-\beta=\beta(2\cos h\,e^{ih}-1)=\beta e^{2ih}.
$$

Thus both factor arguments are $2\pi/7$. The product's modulus is $\rho^2\beta^2=\alpha^2$, and its real total argument is $2(5\pi/7)+2(2\pi/7)=2\pi$.

### The matrix and its eigenvector

We now use the indices of the polygon vertices as state labels. In Topic X the states were numbered block by block. In the present labels the first block is $(0,3,6)$, the second is $(1,4,7)$, and the two states on the closing path are $(2,5)$. Reading these lists in order identifies each state of the earlier graph with its label here. Give the six arrows

$$
0\to3\to6,\qquad 1\to4\to7,\qquad 2\to5\to0
$$

probability one. State $6$ splits its probability between $0$ and $1$ in the proportions $\beta,\alpha$. State $7$ splits it between $1$ and $2$ in the same proportions. To form $M$, put each probability in row $i$, column $j$ for the arrow $i\to j$, and fill the unused entries with zeros. A row now sums either to $1$ or to $\beta+\alpha=1$.

<!-- reader-figure:late -->

We can construct an eigenvector by following these same arrows. Choose the scale so that $v_0=1$. The contact equation $(z^3-\beta)v_0=\alpha v_1$ determines $v_1$, and the closing equation $z^2v_2=v_0$ determines $v_2$. Thus our starting values are

$$
v_0=1,\qquad v_1=(z^3-\beta)/\alpha,\qquad v_2=z^{-2},
$$

On an arrow $i\to j$ with probability one, row $i$ of $Mv=zv$ reads $v_j=zv_i$. Starting with the three values above, this gives $v_3=z$, $v_6=z^2$, $v_4=zv_1$, $v_7=z^2v_1$ and $v_5=z^{-1}$. Row $6$ gives $\beta v_0+\alpha v_1=z^3=zv_6$ by the choice of $v_1$. To check row $7$, use $z^2(z^3-\beta)^2=\alpha^2$ from the product. Dividing by $\alpha z^2$ gives $(z^3-\beta)v_1=\alpha z^{-2}=\alpha v_2$. Thus $\beta v_1+\alpha v_2=z^3v_1=zv_7$. All eight rows hold, and $v_0=1$ ensures we have a nonzero vector.

For instance the last deterministic path closes because $zv_5=z\cdot z^{-1}=1$. Rows six and seven place a point strictly inside a side once we know that the two coordinates in each average are consecutive hull vertices.

We can check this last condition from the coordinates themselves.

### Checking the actual invariant octagon

Recall $h=\pi/7$. Since $\beta/\alpha=1/\rho$ and $z^3-\beta=\beta e^{2ih}$, the coordinates have the following polar forms.

| Vertex | Eigenvector coordinate | Angle measured counterclockwise from $v_0$ |
|---|---|---|
| $v_0$ | $1$ | $0$ |
| $v_1$ | $\rho^{-1}e^{2ih}$ | $2h$ |
| $v_2$ | $\rho^{-2}e^{4ih}$ | $4h$ |
| $v_3$ | $\rho e^{5ih}$ | $5h$ |
| $v_4$ | $-1$ | $7h$ |
| $v_5$ | $\rho^{-1}e^{9ih}$ | $9h$ |
| $v_6$ | $\rho^2e^{10ih}$ | $10h$ |
| $v_7$ | $\rho e^{12ih}$ | $12h$ |

The angles increase around one full turn, including the final gap $2h$ from $v_7$ to $v_0$. First this proves that the polygon has no crossings. Every side joins two positive-radius points whose angular separation is $h$ or $2h$, less than $\pi$. A point strictly inside that side is a positive combination of its two endpoint vectors, so its angle lies strictly between their angles. The interiors of nonadjacent sides occupy disjoint angular sectors. Adjacent sides meet only at their shared vertex. The polygon is simple.

The remaining danger is a dent. A list of points can be ordered perfectly well by angle and still have a point hidden inside the convex hull of the others. To rule this out, take three consecutive vertices. A positive determinant of the incoming and outgoing edge vectors says that the path turns left at the middle vertex. Since the polygon is simple and winds counterclockwise, a strict left turn at every vertex gives a convex polygon with eight genuine corners.

Write $r_j=|v_j|$ and let $a,b$ be the angular gaps on either side of $v_j$. The turn at $v_j$, divided by the positive number $r_{j-1}r_{j+1}$, is

$$
\frac{r_j}{r_{j+1}}\sin a+\frac{r_j}{r_{j-1}}\sin b-\sin(a+b).
$$

The last term depends only on the two outer rays. How close can the middle point come to the origin before the turn ceases to be positive?

The powers of $\rho$ in the table are $0,-1,-2,1,0,-1,2,1$. Neighbouring exponents differ by at most three, including the last and first. As $\rho<1$, each of the two radius ratios is at least $\rho^3$. The scalar equation gives a convenient lower bound,

$$
\rho^3=\frac{2\cos h}{1+\rho}>\cos h .
$$

Each gap is $h$ or $2h$. Thus $\cos a,\cos b\le\cos h$, and

$$
\sin(a+b)=\sin a\cos b+\cos a\sin b
\le\cos h\,(\sin a+\sin b).
$$

The sum of the two positive terms in the turn is strictly larger than this upper bound. This proves strict convexity at the exact root $\rho$.

<details>
<summary>Derive the turn formula</summary>

For two vectors at angles $\phi$ and $\psi$, their determinant is the product of their lengths times $\sin(\psi-\phi)$. Expand the turn by bilinearity,

$$
\det(v_j-v_{j-1},v_{j+1}-v_j)
=\det(v_{j-1},v_j)+\det(v_j,v_{j+1})-\det(v_{j-1},v_{j+1}).
$$

The three angle differences are $a,b,a+b$. Dividing each term by $r_{j-1}r_{j+1}$ gives the displayed formula.

</details>

<details>
<summary>Check the side inequalities over a whole interval of radii</summary>

There is also a [calculation with rational bounds](https://github.com/BFMAVE/karpelevic/blob/main/docs/proof-audits/reader-learning-mathematics-2026-10-02.md). For each directed side $v_i v_{i+1}$, test the six vertices other than its endpoints. The determinant $D_{ij}=\det(v_{i+1}-v_i,v_j-v_i)$ is positive exactly when $v_j$ lies to the left of that side. There are $8\cdot6=48$ such tests. The calculation brackets our root between $97/100$ and $98/100$ and proves $D_{ij}>1/10$ in all 48 tests throughout that interval. Our turn calculation established convexity directly at the root. These bounds show that every other vertex stays strictly to the left of each directed side even if we vary the radius within this interval.

</details>

To locate zero, walk along each side in counterclockwise order. Since the vertices go round counterclockwise, the interior lies to the left of each side. A point strictly to the left of them all is inside the polygon. For the side from $v_i$ to $v_{i+1}$, the vector from $v_i$ to zero is $-v_i$. Using $v_i=r_i e^{i\phi_i}$ gives

$$
\det(v_{i+1}-v_i,-v_i)=r_ir_{i+1}\sin(\phi_{i+1}-\phi_i)>0,
$$

The two radii are positive, and the turn from one radius vector to the next is either $h$ or $2h$, also on the last side. Both angles are less than $\pi$, so their sines are positive. The determinant has the required sign on every side, placing zero in the interior.

Now compare the polygon with its image. The six rows with a single successor take a vertex exactly to the next vertex on its path,

$$
zv_0=v_3,\quad zv_1=v_4,\quad zv_2=v_5,\quad
zv_3=v_6,\quad zv_4=v_7,\quad zv_5=v_0.
$$

Rows $6$ and $7$ each have two destinations. In these rows the eigenvector equation gives the position of the image on the side joining the two destinations. With our coordinates this reads

$$
zv_6=\rho^3e^{ih}=\beta v_0+\alpha v_1=c_1,
\qquad
zv_7=\rho^2e^{3ih}=\beta v_1+\alpha v_2=c_2.
$$

For the first equality of averages, use $1+e^{2ih}=2\cos h\,e^{ih}$ and $2\beta\cos h=\rho^3$. The second uses the same identity after multiplication by $\rho^{-1}e^{2ih}$. Since $0<\alpha,\beta<1$ and $\alpha+\beta=1$, the contacts are strictly inside their respective sides. We can read off the assigned side of each image.

| Vertex before multiplication | Image under $z$ | Side containing the image (left endpoint excluded) |
|---|---|---|
| $v_0$ | $v_3$ | $(v_2,v_3]$ |
| $v_1$ | $v_4$ | $(v_3,v_4]$ |
| $v_2$ | $v_5$ | $(v_4,v_5]$ |
| $v_3$ | $v_6$ | $(v_5,v_6]$ |
| $v_4$ | $v_7$ | $(v_6,v_7]$ |
| $v_5$ | $v_0$ | $(v_7,v_0]$ |
| $v_6$ | $c_1$ | $(v_0,v_1]$ |
| $v_7$ | $c_2$ | $(v_1,v_2]$ |

Each vertex image belongs to $P=\operatorname{conv}\{v_0,\ldots,v_7\}$. Linearity preserves convex combinations, so $zP\subseteq P$. In the diagram select row six. Its two arrows end at states zero and one. The corresponding two corners of the octagon span the side containing the image of $v_6$. Select row zero for comparison. Its single arrow ends at state three, and its image lands exactly on $v_3$.

<!-- reader-figure:late-extra -->

### Connecting this example to order seven

Removing the eighth state changes the interval containing $5/14$. The fraction $3/8$ drops out of the Farey list, leaving $1/3$ and $2/5$ as neighbours. The determinant $2\cdot3-1\cdot5=1$ and denominator sum $3+5=8>7$ verify the order-seven interval. Its data are $q=3$, $s=5$, $m=2$, $A=\pi/7$, and $B=3\pi/14$, so its candidate solves

$$
\rho^{5/2}\sin(\pi/7)+\rho^3\sin(3\pi/14)=\sin(5\pi/14).
$$

At order seven, two groups of $q=3$ leave the leading exponent $s-mq=5-2\cdot3=-1$. The product therefore reads $z^{-1}(z^3-\beta)^2=(1-\beta)^2$. We are looking for a point of positive radius, so $z\ne0$ and we can clear the power of $z$ in the denominator. In the polynomial form from Topic X this gives $z^5(z^3-\beta)^2=(1-\beta)^2z^6$.

In the explorer, keep the ray fixed and change the order from seven to eight. The new Farey fraction is the mediant $(1+2)/(3+5)=3/8$. The ray stays to its left, where Topic XI gives strict increase. The two radii on the same ray are

$$
K_7(5\pi/7)\approx0.94430114,\qquad K_8(5\pi/7)\approx0.97061308 .
$$

We can now verify the least realising order as well. Topic XII has identified $R_7=K_7$, so this point at radius $K_8>K_7$ cannot occur at order seven or any smaller order. Its eight-state matrix does realise it. Eight is the least possible number of states for this boundary point.
