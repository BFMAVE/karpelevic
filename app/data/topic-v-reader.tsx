import type { ProofDependency } from "../components/proof/ProofDependencyContract";
import type {
  GuidedProofStep,
  ProofVocabularyEntry,
} from "../components/proof/ProofResult";
import type { AdvancedProofGroup } from "../components/proof/AdvancedProofChapter";
import { sitePath } from "../lib/site-path";
import {
  topicVCorridorDictionary,
  topicVFormalSetups,
  topicVReaderHtmlByItem,
  topicVReturnSetup,
} from "./topic-v-vii-html";
import {
  collectSourceIds,
  makeReaderResult,
  type ReaderResultGuide,
} from "./topic-v-vii-result-builder";

const vocabulary = (
  term: string,
  definition: React.ReactNode,
  example?: React.ReactNode,
): ProofVocabularyEntry => ({ term, definition, example });

const step = (
  title: string,
  explanation: React.ReactNode,
  check?: React.ReactNode,
): GuidedProofStep => ({ title, explanation, check });

const guides: readonly ReaderResultGuide[] = [
  {
    itemNumber: 70,
    label: "Lemma A.6",
    vocabulary: [
      vocabulary(
        "Primitive lattice vector",
        "An integer vector whose coordinates have no common divisor greater than one. It is not a positive integer multiple of a shorter integer vector.",
        "The vector (5,2) is primitive; (6,4)=2(3,2) is not.",
      ),
      vocabulary(
        "Half-open fundamental parallelogram",
        "The set αu+βv with 0≤α,β<1. The open upper edges prevent the same lattice class from being counted twice.",
      ),
      vocabulary(
        "Quotient lattice",
        "Two integer points represent the same class modulo Zu+Zv when their difference is an integer combination of u and v.",
      ),
      vocabulary(
        "Smith normal form",
        "A diagonal form obtained by invertible integer row and column operations. Here only its consequence is needed: a rank-two sublattice has index equal to the absolute determinant of its two generators.",
      ),
    ],
    intuition:
      "The absolute determinant is simultaneously an area and a count of residue classes. If it exceeds one, the fundamental parallelogram contains a nonzero integer representative; that extra point will contradict the assumption that two rotation records are consecutive.",
    proofSteps: [
      step(
        "Reduce every point to the half-open cell",
        "Write a real vector uniquely as au+bv and subtract the integer parts of a and b. An integer input remains integer after this subtraction.",
      ),
      step(
        "Prove uniqueness",
        "If two points of the half-open cell differ by mu+nv with integers m,n, both coefficient differences lie in (-1,1). Hence m=n=0.",
      ),
      step(
        "Count the quotient",
        "Unimodular integer operations preserve lattice index and absolute determinant. Smith normal form reduces the generators to (d₁,0),(0,d₂), where both counts equal d₁d₂.",
      ),
    ],
    takeaway:
      "A determinant larger than one always leaves a visible nonzero lattice representative inside the half-open cell.",
  },
  {
    itemNumber: 37,
    label: "Theorem 6.1",
    vocabulary: [
      vocabulary(
        "Upper-record time",
        "A time h for which the representative [hκ]ₙ is larger than every representative seen at earlier times. “Upper” refers to the ordinary order 0,…,N-1.",
        "For N=13 and κ=5 the residues begin 0,5,10,2,7,12. The upper-record times are 0,1,2,5.",
      ),
      vocabulary(
        "Deficit",
        "The number ν=N-[hκ]ₙ. It measures the remaining distance from the record residue to N. At time zero the declared deficit is N.",
      ),
      vocabulary(
        "Record vector",
        "The lattice point V=(h,b), with b=ceil(hκ/N) for h>0 and V=(0,1) at time zero. The linear form L(h,b)=hκ-bN equals -ν.",
      ),
      vocabulary(
        "Unimodular pair",
        "Two integer vectors whose determinant is ±1. Their integer combinations produce every point of Z².",
      ),
      vocabulary(
        "Return tower",
        "A base label together with the finite list of its successive κ-rotates before the first return to the base interval. Its height is the number of states in that list.",
      ),
      vocabulary(
        "Equivariant map",
        "A map that respects the dynamics: applying one successor step before or after the map gives the same result.",
      ),
      vocabulary(
        "Right-admissible contact system and strict field",
        "The positively oriented strict invariant polygon and one-sided contact labels fixed in Topic IV. In field i, the contact has the form λxᵢ₋κ=βᵢxᵢ₋₁+αᵢxᵢ with αᵢ>0, βᵢ≥0, and αᵢ+βᵢ=1. The field is strict when βᵢ>0, so the image lies in the side interior; βᵢ=0 is an endpoint contact.",
      ),
    ],
    intuition:
      "Successive upper records are adjacent primitive points of a lattice sail. Their determinant-one relation is exactly strong enough to partition every cyclic label into a short or long return tower, without omissions or repetitions.",
    figure: "return-towers",
    proofSteps: [
      step(
        "Locate the terminal record",
        "After dividing by δ=gcd(N,κ), multiplication by κ/δ permutes residues modulo N/δ. Thus the largest attainable residue is N-δ and the final deficit is δ.",
      ),
      step(
        "Prove record vectors are primitive",
        "If V=gW with g>1, the integer vector W has an earlier time and deficit ν/g, which would already improve the record.",
      ),
      step(
        "Exclude a determinant gap",
        "If consecutive records V,V′ enclosed determinant area larger than one, Lemma A.6 would supply a nonzero lattice point in their fundamental parallelogram. Primitivity excludes the radial edges; reflecting the point if needed puts it in the record triangle.",
        "That point has time strictly before h′ and deficit strictly smaller than ν, contradicting consecutiveness.",
      ),
      step(
        "Derive the arithmetic identities",
        "With U=V′-V=(q,p), linearity gives L(U)=Δ and determinant expansion gives qν+hΔ=N. The unimodular basis also gives gcd(Δ,ν)=δ.",
      ),
      step(
        "Build the two-height successor",
        "Give bases 1,…,ν height q or q+h. The successor advances one tower level, then returns the top base by addition of Δ modulo ν.",
      ),
      step(
        "Prove the tower map is bijective",
        "The base return has δ cycles. Each state cycle has N/δ states by qν+hΔ=N, exactly the length of a κ-orbit. Equivariance and matching residue classes modulo δ make the restriction a bijection on each cycle.",
      ),
      step(
        "Propagate a unit record edge backwards",
        "When Δ=1, subtract floor(h/q) copies of U. A coefficient argument in the unimodular basis rules out every earlier improving vector and proves the displayed arithmetic run consists of consecutive records.",
      ),
      step(
        "Read the towers geometrically",
        "An internal state cannot return to the base interval without giving the bijection two preimages. It is therefore an endpoint contact, so repeated multiplication gives the exact vertex identities and the two top relations.",
      ),
    ],
    takeaway:
      "The rational rotation is now a bijective two-height tower system, and its internal states become exact polygon-vertex equalities.",
  },
  {
    itemNumber: 38,
    label: "Corollary 6.2",
    vocabulary: [
      vocabulary(
        "Endpoint padding",
        "Enlarging the actual strict block to a record interval by inserting fields whose contact point is already the endpoint ξⱼ=xⱼ. Later these are factors (αⱼ,βⱼ)=(1,0), not extra strict contacts.",
      ),
      vocabulary(
        "Virtual short return",
        "The short return starting at the cyclic endpoint x₀. It uses the same exact tower identity even though x₀ is written outside the base list 1,…,d.",
      ),
    ],
    intuition:
      "A strict block need not fill the entire arithmetic record interval. Empty positions can be completed by exact endpoint cells, giving one uniform return strip without changing the genuine contacts.",
    proofSteps: [
      step(
        "Apply the unit-edge record pair",
        "Use Theorem 6.1 with V=E and V′=E+U, so ν=d, Δ=1, and h=e.",
      ),
      step(
        "Read the section",
        "The first d-1 bases have height q, the last has height q+e, and the first return is the successor.",
      ),
      step(
        "Force internal endpoint contacts",
        "All strict fields lie in J. An internal destination cannot lie in J by tower bijectivity, so it is a nonstrict endpoint field.",
      ),
      step(
        "Translate to equations",
        "The short returns, virtual short return, and closure give equations (6.17)-(6.18). For j outside the actual strict set, right-admissibility gives ξⱼ=xⱼ.",
      ),
    ],
    takeaway:
      "Padding changes the length of the algebraic strip, never the set of genuine strict contacts.",
  },
  {
    itemNumber: 39,
    label: "Remark 6.3",
    vocabulary: [
      vocabulary(
        "Lattice sail",
        "The broken boundary formed by primitive visible lattice points between two rays. Here its vertices are exactly the upper-record vectors.",
      ),
    ],
    intuition:
      "Continued fractions are hidden in the record vectors, but the sail description keeps determinant signs, endpoint ownership, and the terminal record in one geometric picture.",
    takeaway:
      "The lattice sail explains the arithmetic; the direct record proof remains the formal dependency.",
  },
  {
    itemNumber: 40,
    label: "Lemma 7.1",
    vocabulary: [
      vocabulary(
        "Pulled-back support",
        "The line Lᵢ=λ^{-Hᵢ} aff(Eᵣ₍ᵢ₎). Applying λ^{Hᵢ} sends it to the line of the side reached by the return, so it supports P at xᵢ.",
      ),
      vocabulary(
        "Short-long interface",
        "The unique place in the ordered bases where return height changes from q to q+h.",
      ),
    ],
    intuition:
      "Most strictness checks are automatic because neighbouring bases return to neighbouring sides. Only the interface between short and long towers can break that pattern, so the proof isolates and checks it directly.",
    proofSteps: [
      step(
        "Use the support-face test",
        "A supporting line at xᵢ is strict once neither neighbouring vertex lies on it.",
      ),
      step(
        "Transport the question forward",
        "Because λ^{Hᵢ} is invertible, test the neighbour images against the line of Eᵣ₍ᵢ₎ instead of testing the original vertices against Lᵢ.",
      ),
      step(
        "Handle equal-height neighbours",
        "They return to relative-interior points on adjacent strict sides, which do not lie on the current side line.",
      ),
      step(
        "Audit the interface",
        "Check the last short base and first long base separately, including h=0. The transported terminal-side identity supplies the missing neighbour.",
      ),
    ],
    takeaway:
      "Every support used by the selected short corridor touches the polygon at one vertex only.",
  },
  {
    itemNumber: 41,
    label: "Lemma 7.2",
    vocabulary: [
      vocabulary(
        "Proper boundary chain",
        "A list of distinct consecutive boundary vertices that omits at least one polygon side.",
      ),
      vocabulary(
        "Forward and reverse corridor",
        "The two cyclic readings of the return step. The shorter branch is chosen so the displayed chain cannot wrap around the whole polygon.",
      ),
    ],
    intuition:
      "The projective construction needs room outside its moving chain. The branch inequality chooses the shorter arc and the proof checks that even the limiting parameter values leave at least one side unused.",
    proofSteps: [
      step(
        "Forward branch",
        "Set m=Δ. If φ<N, then m+1≤φ<N. If φ=N, equality m+1=N would contradict 2Δ≤N+1 when N≥4.",
      ),
      step(
        "Reverse branch",
        "Set m=φ-Δ+1≥2. The strict reverse inequality forces m+1<N, including φ=N.",
      ),
      step(
        "Convert inequalities to labels",
        "Index variation smaller than N makes all displayed cyclic labels distinct. Fewer than N traversed sides means one polygon side is omitted.",
      ),
      step(
        "Retain the boundary cases",
        "The same computations cover Δ=2, equality 2Δ=φ+1, and h=0, which is equivalent to φ=N.",
      ),
    ],
    takeaway:
      "Whichever orientation is selected, the corridor has at least two internal steps and never consumes the complete boundary.",
  },
  {
    itemNumber: 42,
    label: "Proposition 7.3",
    vocabulary: [
      vocabulary("Moved bases M", "The bases whose tower vertices change under the corridor motion."),
      vocabulary("Supported moved bases M°", "Moved bases constrained to their pulled-back strict support."),
      vocabulary("Controlled fields D", "Target side lines constructed by the moving corridor recursion."),
      vocabulary("Return fields R", "Fields reached from supported moved bases; their target side lines remain fixed."),
      vocabulary("Closing field c", "The unique target field whose return is deliberately left unconstrained."),
      vocabulary("Fixed remainder A", "Every strict field not belonging to D, R, or {c}."),
    ],
    intuition:
      "The four-set ledger is a conservation law for incidences. Every top return has one source class and one target-line mechanism, and exactly one return remains available to open.",
    figure: "global-ledger",
    proofSteps: [
      step(
        "Use translation bijectivity",
        "The first-return map r is addition of Δ on a finite cyclic set, so interval images can be computed exactly and cannot collide.",
      ),
      step(
        "Compute the forward image",
        "On M° the labels advance without wrap except at the explicit equality 2Δ=φ+1. This gives R and isolates r(b*)=c.",
      ),
      step(
        "Compute inverse sources",
        "The inverse formula proves sources for D lie outside M, while s(R)=M° and s(c)=b*.",
      ),
      step(
        "Register forward side lines",
        "Only bases in M move. Endpoint inspection shows all R∪A lines fixed, D controlled by the chain, and c closing.",
      ),
      step(
        "Repeat in the reverse branch",
        "There is exactly one modular wrap. The explicit interval gives R, disjointness, inverse sources, and fixed lines Eφ and E₁.",
      ),
    ],
    takeaway:
      "No return edge is omitted or counted twice; c is the sole unconstrained closing edge.",
  },
  {
    itemNumber: 43,
    label: "Definition 7.4",
    vocabulary: [
      vocabulary(
        "Perspectivity",
        "Projection from a fixed centre C: join the input point to C and intersect a target projective line. It is not generally perpendicular.",
      ),
      vocabulary(
        "Projectivity",
        "A composition of perspectivities. In an affine coordinate on a projective line it is fractional-linear.",
      ),
      vocabulary(
        "Projective completion",
        "An affine line together with its point at infinity, representing its direction.",
      ),
      vocabulary(
        "Corridor holonomy",
        "The return projectivity obtained by projecting successively through all corridor contacts and finally through Xₘ₊₁ to the last contact line.",
      ),
    ],
    intuition:
      "The corridor packages a long chain of incidence constraints into one map of a line. Topic VI will inspect whether that return map is the identity.",
    figure: "projective-corridor",
    takeaway:
      "A projective corridor is exactly the data needed to define one return projectivity without using lengths or angles.",
  },
  {
    itemNumber: 44,
    label: "Proposition 7.5",
    vocabulary: [
      vocabulary(
        "Pencil of lines",
        "All projective lines through one fixed point. Removing finitely many forbidden members still leaves valid choices inside an open interval of strict supports.",
      ),
      vocabulary(
        "Projective affine chart",
        "The affine plane obtained after declaring one projective line to be the line at infinity.",
      ),
      vocabulary(
        "Line at infinity",
        "The projective line containing one point for every affine direction. Lines meeting there appear parallel in the affine chart.",
      ),
      vocabulary(
        "Convex piecewise-linear graph",
        "A boundary arc written as height versus a strictly increasing transverse coordinate; its consecutive slopes are nondecreasing, and here strictly increasing.",
      ),
    ],
    intuition:
      "Projective geometry lets us choose coordinates adapted to the proof. Sending the intersection of two endpoint supports to infinity makes them parallel, and the boundary chain becomes an ordinary convex graph whose slopes can be compared.",
    proofSteps: [
      step(
        "Choose two generic strict supports",
        "Fix M₀ at X₀ and vary M₁ at Xₘ₊₁. Excluding finitely many lines keeps their intersection O off every side and corridor line that will be used.",
      ),
      step(
        "Place O outside the polygon",
        "If O belonged to P, strictness of M₀ and M₁ would force it to be both distinct endpoint vertices.",
      ),
      step(
        "Separate O from P",
        "Strict separation supplies a line J through O disjoint from the compact convex polygon.",
      ),
      step(
        "Send J to infinity",
        "Use a projective automorphism T(z)=(Az+b)/d(z), with d positive on P. Formula (7.22) writes every image of a segment point as a positive convex combination of endpoint images.",
        "The positivity of d is the precise reason the relevant segments and relative interiors are preserved.",
      ),
      step(
        "Read the new geometry",
        "The endpoint supports are parallel because they met on J. No chain or corridor line is parallel to them by the genericity choice.",
      ),
      step(
        "Make the chain a convex graph",
        "A transverse coordinate is strictly increasing along each boundary arc. Choose the displayed arc as the lower graph; convexity orders the slopes and strictness prevents equality.",
      ),
    ],
    takeaway:
      "The corridor can be studied in an affine chart where its boundary is an increasing-slope graph, without changing any incidence needed later.",
  },
] as const;

const byNumber = new Map(
  guides.map((guide) => [
    guide.itemNumber,
    makeReaderResult(topicVReaderHtmlByItem, guide),
  ]),
);

const take = (numbers: readonly number[]) =>
  numbers.map((number) => {
    const result = byNumber.get(number);
    if (!result) throw new Error("Missing Topic V guide " + number);
    return result;
  });

export const topicVGroups: readonly AdvancedProofGroup[] = [
  {
    number: "I",
    title: "Records, lattice cells, and return towers",
    introduction: (
      <p>
        The cyclic orbit is first studied without a polygon. The lattice
        count closes the only arithmetic gap; the resulting towers are then
        read as exact endpoint identities.
      </p>
    ),
    results: take([70, 37, 38, 39]),
  },
  {
    number: "II",
    title: "Build the strict return supports",
    introduction: (
      <p>
        The tower tops determine pulled-back supports, and the only
        short-long interface is checked without suppressing an endpoint case.
      </p>
    ),
    formalSetups: [topicVReturnSetup],
    results: take([40]),
  },
  {
    number: "III",
    title: "Choose the proper branch and close the ledger",
    introduction: (
      <p>
        The shorter cyclic branch is proper. Its exact forward or reverse
        dictionary then partitions every return edge and leaves one closing
        field.
      </p>
    ),
    formalSetups: [topicVCorridorDictionary],
    results: take([41, 42]),
  },
  {
    number: "IV",
    title: "The projective object and its admissible chart",
    introduction: (
      <p>
        The incidence chain becomes one projectivity. A carefully chosen
        chart turns the selected polygonal arc into a convex graph with
        strictly increasing slopes.
      </p>
    ),
    results: take([43, 44]),
  },
] as const;

export const topicVImported: readonly ProofDependency[] = [
  {
    label: "Topic I: strict separation",
    href: sitePath("/proof/#lem:strict-separation"),
    explanation:
      "A point outside a compact convex polygon can be strictly separated from it; Proposition 7.5 uses this to choose the line sent to infinity.",
  },
  {
    label: "Topic II: strict supports and the support-face test",
    href: sitePath("/proof/topic-ii/#part-i-item-13"),
    explanation:
      "A support at a vertex is strict once neither neighbouring vertex lies on its line.",
  },
  {
    label: "Topic III: one-sided endpoint ownership",
    href: sitePath("/proof/topic-iii/"),
    explanation:
      "A nonstrict destination is an exact endpoint contact, so internal tower steps become vertex equalities.",
  },
  {
    label: "Topic IV: reduced strict block",
    href: sitePath("/proof/topic-iv/"),
    explanation:
      "The strict fields form one cyclic interval, the contact rotation is addition by κ, and its first entrance supplies the record deficit φ.",
  },
] as const;

export const topicVBackground: readonly ProofDependency[] = [
  {
    label: "Rank-two lattice index",
    explanation:
      "Lemma A.6 is moved to its first use and proved in full on this page.",
  },
  {
    label: "Elementary real projective geometry",
    explanation:
      "Definition 7.4 introduces perspectivities; Proposition 7.5 proves the exact chart and convexity facts used later.",
  },
] as const;

export const topicVSourceIds = collectSourceIds(
  topicVGroups.flatMap((group) => group.results),
);

export { topicVFormalSetups };
