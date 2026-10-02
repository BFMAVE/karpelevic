# Learning-route mathematical audit — 2 October 2026

This is an independent review of the mathematical changes prompted by the supplied teaching review. It supplements the baseline and clarity audits. The reviewer did not edit the guides, components, source manuscripts, or generator.

## Route and dependency semantics

Two routes are mathematically honest when they state their obligations clearly:

- An ideas route may accept named structural lemmas and continue to the consequences, while identifying what has been accepted rather than proved on that route.
- A complete-proof route must discharge Topics I–XII, including the supporting source arguments. The worked example XIV may follow XII before the optional gauge/asymptotic extension XIII.

The upper-bound/attainment distinction must persist until completion. A scalar root alone does not identify the boundary. The least-order maximiser is bounded at its own order; an independent comparison then passes that bound to the requested order. Radial filling uses the stationary reset from Topic I, not mixing with the identity. Universal saturation applies to every eligible polygon, including the deformed one. The unequal-parameter product must retain its case-dependent real winding identity, not just a polynomial congruence. A full proof also covers the small orders, root-of-unity endpoints, and the topological boundary argument.

## Independently checked early examples

For the numerical deflation example, let the cyclic matrix C satisfy Cv=ωv with v=(1,ω,ω²)ᵀ and ω=exp(2πi/3), and let πᵀ=(1/3,1/3,1/3). Then

```
A = (1/6) [[1,4,1],[1,1,4],[4,1,1]],
B = A − (1/4)1πᵀ = (1/12) [[1,7,1],[1,1,7],[7,1,1]].
```

A has row sums one; B has row sums 3/4; Av=Bv=(ω/2)v. Consequently (4/3)B is stochastic and has eigenvalue 2ω/3. This is an explicitly nonextremal teaching example, not an application of the extremal contradiction.

The square with coordinates (1,i,−1,−i) and multiplier i is a correct convention-only half-open ownership example. Its unit modulus must remain visible: it does not meet the strict-contraction hypotheses of Topic III.

For η=exp(2πi/5), the two numbers (1+η)/2 and (1+η²)/2 both solve (2λ−1)⁵=1 and are eigenvalues of (I+C₅)/2. Their five principal factor angles sum to 2π and 4π respectively. This correctly demonstrates the polynomial's lost winding information; the second candidate does not meet the first arc's one-turn requirement.

## Certified eight-state polygon

Put h=π/7 and let ρ be the unique positive root of

```
ρ⁴ + ρ³ = 2 cos h.
```

Uniqueness follows from strict monotonicity on (0,1). The exact source eigenvector has the following coordinates in cyclic order:

| Index | Coordinate |
|---|---|
| 0 | 1 |
| 1 | ρ⁻¹ exp(2ih) |
| 2 | ρ⁻² exp(4ih) |
| 3 | ρ exp(5ih) |
| 4 | −1 |
| 5 | ρ⁻¹ exp(9ih) |
| 6 | ρ² exp(10ih) |
| 7 | ρ exp(12ih) |

The angles increase strictly from zero to 12h, and the final gap is 2h. Define

```
D(i,j) = det(v_(i+1) − v_i, v_j − v_i),
```

with indices modulo eight. The exact-rational interval certificate below proves, throughout the entire interval 97/100 ≤ ρ ≤ 98/100:

- All 48 D(i,j), with j different from i and i+1, are greater than 1/10.
- All eight determinants det(v_(i+1)−v_i,−v_i) are greater than 2/5.

Each directed side is therefore a supporting side with every other coordinate strictly inward. All eight coordinates are distinct extreme vertices in the displayed counterclockwise order, and zero lies strictly inside. This is stronger than a floating-point convex-hull observation.

The same certificate brackets the actual root by

```
0.97061308028062 < ρ < 0.97061308028063.
```

The conservative support interval with the smallest lower endpoint is approximately [0.15146845858,0.19433766607], at edge 5 and vertex 7. The smallest origin support interval is approximately [0.40787832531,0.43837360245]. These decimals summarize exact rational enclosures; the comparisons in the certificate use rational numbers.

Let z=ρ exp(5ih), β=1/(1+ρ) and α=ρ/(1+ρ). Then 0<α,β<1. The root equation gives 2β cos h=ρ³. Consequently the six endpoint images are exactly

```
zv0=v3, zv1=v4, zv2=v5, zv3=v6, zv4=v7, zv5=v0.
```

The remaining images are exactly

```
zv6 = ρ³ exp(ih) = βv0+αv1,
zv7 = ρ² exp(3ih) = βv1+αv2.
```

These are strictly interior to the two respective sides because their coefficients are positive and sum to one. Thus every image satisfies zv_i ∈ (v_(i+2),v_(i+3)] and precisely two lie inside sides. Linearity then proves zP⊆P.

This verifies the assumed contact geometry for this particular example. It does not infer geometric extremality from a general graph/eigenvector construction. Boundary maximality still depends on the independent convexity and Farey comparison proved in the main argument. The SVG may show numerically evaluated coordinates while its geometric assertions are certified separately.

## Local-deformation interaction

The exact quadrilateral interaction was checked throughout its entire slider interval −1/20 ≤ t ≤ 1/10, not just at its initial state. Put

```
d=1+6t, a=1−t, b=2(1+5t)/d, c=(1+3t)/d,
X0=(0,0), X1=(a,0), X2=(b,c), X3=(3,3).
```

All nonincident-vertex supporting determinants reduce to the four positive expressions

```
a c, 3a, (1+3t)(1+5t)/d, 3(1+7t)/d.
```

The fixed C2=(3/2,1/2) has interpolation coefficient d/[2(1+3t)], strictly between zero and one. X2 stays exactly on y=3x/2−2. For Y(t)=(5/2−t,2−3t/2), the inward determinant at the moved final side is exactly 3t²/d. The other three side determinants are

```
a(2−3t/2), (1+3t)(1−t)/2, 3(1+t)/2,
```

all positive. Thus Y(t) is strictly inside the moved quadrilateral for every nonzero allowed t; at zero the closing determinant is zero. The same model has u=t/d and coordinate gap t−u=6t²/d, yielding the guide's exact checkpoint values 3/260 and 3/140 at t=±1/20.

An independent execution of the actual standalone controller checked all 151 slider values, including its actual drawn coordinates, polygon supports, fixed contact, exposing line, inward sign, live scope description, accessible value text and reset. The example remains visibly a local projection model, not an asserted invariant eigenvalue polygon.

## Reproducible certificate

The script uses only Python's standard library. It constructs rigorous rational bounds for π from Machin's identity and alternating arctangent series, bounds sine and cosine with Taylor remainders, and propagates exact rational intervals through every determinant. The broad radius box already certifies convexity, so the conclusion does not depend on the last displayed radius digits.

```python
#!/usr/bin/env python3
"""Exact rational interval certificate; only Python standard library is used."""
from fractions import Fraction as F
from math import factorial
import json

class I:
    def __init__(self,a,b=None):
        self.a,self.b=F(a),F(a if b is None else b)
        assert self.a<=self.b
    def __add__(self,o):
        o=as_i(o); return I(self.a+o.a,self.b+o.b)
    __radd__=__add__
    def __neg__(self): return I(-self.b,-self.a)
    def __sub__(self,o): return self+-as_i(o)
    def __rsub__(self,o): return as_i(o)+-self
    def __mul__(self,o):
        o=as_i(o); v=[self.a*o.a,self.a*o.b,self.b*o.a,self.b*o.b];return I(min(v),max(v))
    __rmul__=__mul__
    def reciprocal(self):
        assert not self.a<=0<=self.b
        return I(1/self.b,1/self.a)
    def __truediv__(self,o):return self*as_i(o).reciprocal()
    def __rtruediv__(self,o):return as_i(o)*self.reciprocal()
    def __pow__(self,n):
        if n<0:return self.reciprocal()**(-n)
        if n==0:return I(1)
        if n%2==0 and self.a<0<self.b:return I(0,max(self.a**n,self.b**n))
        v=[self.a**n,self.b**n];return I(min(v),max(v))
    def decimals(self):return [float(self.a),float(self.b)]

def as_i(v):return v if isinstance(v,I) else I(v)
def atan_bounds(x,N=50):
    x=F(x); s=sum(((-1)**k*x**(2*k+1)/F(2*k+1) for k in range(N)),F(0))
    t=(-1)**N*x**(2*N+1)/F(2*N+1)
    return I(min(s,s+t),max(s,s+t))
pi=16*atan_bounds(F(1,5))-4*atan_bounds(F(1,239))
h=pi/7

def sin(x,N=30):
    x=as_i(x)
    s=sum(((-1)**k*x**(2*k+1)/factorial(2*k+1) for k in range(N)),I(0))
    e=max(abs(x.a),abs(x.b))**(2*N+1)/factorial(2*N+1)
    return s+I(-e,e)
def cos(x,N=30):
    x=as_i(x)
    s=sum(((-1)**k*x**(2*k)/factorial(2*k) for k in range(N)),I(0))
    e=max(abs(x.a),abs(x.b))**(2*N)/factorial(2*N)
    return s+I(-e,e)

def cross(u,v):return u[0]*v[1]-u[1]*v[0]
def sub(u,v):return (u[0]-v[0],u[1]-v[1])
def point(radius,angle):return (radius*cos(angle*h),radius*sin(angle*h))

f=lambda r:r**4+r**3-2*cos(h)
assert f(I(F(97,100))).b<0<f(I(F(98,100))).a
r=I(F(97,100),F(98,100))
vertices=[point(r**power,angle) for power,angle in [(0,0),(-1,2),(-2,4),(1,5),(0,7),(-1,9),(2,10),(1,12)]]
supports=[]
origins=[]
for i in range(8):
    e=sub(vertices[(i+1)%8],vertices[i])
    origins.append(cross(e,(-vertices[i][0],-vertices[i][1])))
    for j in range(8):
        if j in [i,(i+1)%8]:continue
        d=cross(e,sub(vertices[j],vertices[i]));supports.append((d,i,j))
        assert d.a>F(1,10), (i,j,d.decimals())
assert all(d.a>F(2,5) for d in origins)
# The much narrower bracket is independently certified by the same exact arithmetic.
narrow=I(F(97061308028062,10**14),F(97061308028063,10**14))
assert f(I(narrow.a)).b<0<f(I(narrow.b)).a
lo=min(supports,key=lambda item:item[0].a)
report={
 'root_bracket':[str(narrow.a),str(narrow.b)],
 'coarse_root_signs':[f(I(F(97,100))).decimals(),f(I(F(98,100))).decimals()],
 'support_count':len(supports),
 'all_support_lower_bound':'1/10',
 'lowest_support_interval':{'edge':lo[1],'vertex':lo[2],'bounds':lo[0].decimals()},
 'all_origin_support_lower_bound':'2/5',
 'lowest_origin_support_interval':min(origins,key=lambda d:d.a).decimals(),
 'alpha_bounds':(r/(1+r)).decimals(),
 'beta_bounds':(1/(1+r)).decimals(),
 'method':'Machin atan alternating bounds (50 terms); Taylor trig interval bounds (30 terms); exact Fraction arithmetic; assertions compare exact rationals, displayed decimals are only summaries.'
}
print(json.dumps(report,indent=2))
```

## Final implementation review

The completed changes passed independent mathematical review:

- All fourteen revised guides, including the row/column convention, altered-row checkpoint, deflation example, half-open ownership, cut/replacement ledgers, complete record table, three-stage no-skipping lesson, local interaction, winding comparison, sharpness roles, closure checkpoints and eight-state geometric verification.
- The two reading routes, theorem preview, persistent notation and all figure scope labels. The review caught and corrected an inversion of the record-time roles of q and h, distinguished the chosen argument θζ from the later upper-half angle θ, made the k≥4 closure case visible, and ensured numerical atlas shading is described as a representation.
- The exact octagon coordinate/contact formulas, analytic sample determinant, origin argument, all eight half-open assignments and least-order-eight conclusion. Its certified geometry supplements the source; the source proof itself remains unchanged.
- The updated order-eight explorer entry point and the order-seven comparison's stated radii and Farey intervals.

After final guide generation, `node scripts/generate-reader.mjs --check` verified the manuscript, all fourteen guide hashes and generator hash. A separate retention check confirmed that all fourteen formal source HTML chapters are byte-for-byte unchanged from the previous committed edition. All 86 labels, 50 labelled equations, 26 proof disclosures and 35 bibliography entries remain. All 181 internal source crosslinks and 37 imported orientation anchors resolve. The generated guides contain their fourteen original figure markers and seven supplementary markers.

No unresolved mathematical defect was found in this implementation. Browser behaviour, layout, release checks and deployment verification are performed separately by the main agent. This mathematical audit is not a proof-assistant certification or a complete accessibility assessment; ordinary sampled drawings do not acquire an error bound merely because their underlying formulas have been proved.
