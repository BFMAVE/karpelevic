### Following one complete eight-state example

This example lets us check the route from return paths to a product, from a product to a radius, and from that radius to a stochastic matrix. It is the eight-state example in the paper. The website's order-seven explorer concerns a different Farey interval, so we will relate the two only after keeping their arithmetic separate.

Suppose an invariant polygon has eight vertices $v_0,\ldots,v_7$ in cyclic order. Multiplication by $z=\rho e^{i\theta}$ sends each vertex into the assigned side $(v_{i+2},v_{i+3}]$, with indices modulo eight. Only two images are strictly inside sides: $c_1\in(v_0,v_1)$ and $c_2\in(v_1,v_2)$. Thus the order is $N=8$, the cyclic shift is $\kappa=3$, and the number of interior contacts is two.

The integer relation $3\cdot3-1\cdot8=1$ gives $p=1$, $q=3$, $r=3$, and $s=8$. The fractions $1/3<3/8$ are consecutive at order eight because their determinant is one and $3+8>8$. The product count is $m=\lfloor8/3\rfloor=2$, and the closing exponent is $e=8-2\cdot3=2$.

### The return paths and the real turn count

The two paths are

$$
v_1\longrightarrow v_4\longrightarrow v_7\longrightarrow c_2,
$$

$$
v_2\longrightarrow v_5\longrightarrow v_0\longrightarrow v_3
\longrightarrow v_6\longrightarrow c_1.
$$

Each arrow is one multiplication by $z$. A return means reaching one of the assigned sides $(v_0,v_1]$ or $(v_1,v_2]$. The point $v_0$ is excluded from the first half-open side, so the second path has not yet returned when it reaches $v_0$. It takes two steps to reach $v_0$ and three more to reach $c_1$.

Write $c_j=\beta_jv_{j-1}+\alpha_jv_j$, where $\alpha_j=1-\beta_j$ and $0<\beta_j<1$. Splitting the longer path gives

$$
(z^3-\beta_1)v_0=\alpha_1v_1,\qquad
(z^3-\beta_2)v_1=\alpha_2v_2,\qquad
z^2v_2=v_0.
$$

Multiplying cancels the nonzero vertex coordinates:

$$
z^2(z^3-\beta_1)(z^3-\beta_2)=\alpha_1\alpha_2.
$$

Let $\Phi_j$ be continued real vertex angles, with $\Phi_8=\Phi_0+2\pi$. Define $u_1=\Phi_1-\Phi_0$ and $u_2=\Phi_2-\Phi_1$. The closing path says $\Phi_2+2\theta=\Phi_8$. Hence

$$
2\theta+u_1+u_2=2\pi.
$$

This is one full turn as a real equality, not merely a phase congruence. It matches $r-mp=3-2=1$.

### Choosing and checking the radius

Take $\theta=5\pi/7$, whose fractional angle is $5/14\in(1/3,3/8)$. The two scalar angles are

$$
A=3\theta-2\pi=\pi/7,\qquad
B=(6\pi-8\theta)/2=\pi/7.
$$

Topic VIII's scalar equation simplifies, after dividing by $\sin(\pi/7)>0$, to

$$
\rho^4+\rho^3=2\cos(\pi/7).
$$

Its left side strictly increases from zero to two on $[0,1]$, and the right side lies strictly between zero and two. There is exactly one root $\rho\in(0,1)$, numerically about $0.97061308$.

Set $\beta_1=\beta_2=\beta=1/(1+\rho)$ and $\alpha_1=\alpha_2=\alpha=\rho/(1+\rho)$. To check the factor identity directly, let $h=\pi/7$. Since $z^3=\rho^3e^{ih}$ and $\rho^3=2\cos h/(1+\rho)=2\beta\cos h$,

$$
z^3-\beta=\beta(2\cos h\,e^{ih}-1)=\beta e^{2ih}.
$$

Thus both factor arguments are $2\pi/7$. The product's modulus is $\rho^2\beta^2=\alpha^2$, and its real total argument is $2(5\pi/7)+2(2\pi/7)=2\pi$. Both product requirements are checked.

### The matrix and its eigenvector

Use rows and columns numbered zero through seven. Give the six arrows

$$
0\to3\to6,\qquad 1\to4\to7,\qquad 2\to5\to0
$$

weight one. The remaining arrows are $6\to0$ with weight $\beta$, $6\to1$ with weight $\alpha$, $7\to1$ with weight $\beta$, and $7\to2$ with weight $\alpha$. Let $M$ be the matrix whose entries are these arrow weights, with all other entries zero. Every row sums to one, so $M$ is stochastic.

To prove that $z$ is an eigenvalue, set

$$
v_0=1,\qquad v_1=(z^3-\beta)/\alpha,\qquad v_2=z^{-2},
$$

and define the remaining coordinates along each weight-one arrow by $v_j=zv_i$. Thus $v_3=z$, $v_6=z^2$, $v_4=zv_1$, $v_7=z^2v_1$, and $v_5=z^{-1}$. All six weight-one rows satisfy $Mv=zv$. Row six satisfies it because $\beta v_0+\alpha v_1=z^3=zv_6$. For row seven the product identity gives $(z^3-\beta)v_1=\alpha v_2$, hence $\beta v_1+\alpha v_2=z^3v_1=zv_7$. The vector is nonzero since $v_0=1$.

This eigenvector construction establishes a stochastic realisation. By itself it does not show that all eight coordinates are extreme vertices of a polygon with the assumed contact arrangement. That geometric arrangement was the starting illustration; the independent convexity and Farey arguments prove boundary maximality.

### Connecting this example to order seven

At order seven, the angle fraction $5/14$ lies between $1/3$ and $2/5$, not between $1/3$ and $3/8$; the latter endpoint has denominator eight. The determinant $2\cdot3-1\cdot5=1$ and denominator sum $3+5=8>7$ verify the order-seven interval. Its data are $q=3$, $s=5$, $m=2$, $A=\pi/7$, and $B=3\pi/14$, so its candidate solves

$$
\rho^{5/2}\sin(\pi/7)+\rho^3\sin(3\pi/14)=\sin(5\pi/14).
$$

Its closing exponent is $e=-1$. Clearing that negative power gives $z^5(z^3-\beta)^2=(1-\beta)^2z^6$ for the equal-weight construction, used with $z\ne0$.

Why must the eight-state radius be larger at the chosen angle? Increasing the order from seven to eight inserts the mediant $(1+2)/(3+5)=3/8$. Topic XI proves a strict increase on both new open intervals. Since $5/14<3/8$, it is on the new left interval and $K_8(5\pi/7)>K_7(5\pi/7)$. The explorer and the source example therefore illustrate two adjacent stages of the same proof, while their matrices and scalar equations retain their respective orders.
