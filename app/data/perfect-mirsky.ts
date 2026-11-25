export const mirskyPaper = "https://arxiv.org/html/2611.30905v2";
export const mirskyPaperRecord = "https://arxiv.org/abs/2611.30905v2";

export const mirskyTopics = [
  {
    numeral: "I",
    title: "When the columns also sum to one",
    question: "What do two interior marks tell us that their hull cannot?",
    idea: "Keep one unit of mass at each coordinate of the eigenvector. A row still takes an average, and the column sums tell us how much each source can supply to all the rows together.",
    takeaway: "A fixed hull can admit different multipliers when the positions of the interior marks change.",
    source: "Section 1 and Figure 1",
    anchor: "#S1",
  },
  {
    numeral: "II",
    title: "The region Perfect and Mirsky asked for",
    question: "Which eigenvalues can a single cycle supply, and do they account for every eigenvalue?",
    idea: "Use all powers of a cycle on the same eigenvector. Their convex combinations fill a regular polygon. The theorem says when the union of these polygons gives the whole region.",
    takeaway: "The cycle construction gives one inclusion in every order. The reverse inclusion is the large-order theorem.",
    source: "Section 1 and Appendix B.1",
    anchor: "#S1",
  },
  {
    numeral: "III",
    title: "How much can an average spread?",
    question: "How much squared distance from the row means can a counterexample afford?",
    idea: "The column sums preserve the total second moment before averaging. The eigenvalue determines how much of that moment remains in the row means.",
    takeaway: "A point outside the polygons leaves less than π²/N² of variance for a unit eigenvector.",
    source: "Section 1.1, especially equation (1)",
    anchor: "#S1.SS1",
  },
  {
    numeral: "IV",
    title: "What two permutations tell us",
    question: "Why does comparing two draws lead back to an edge of a regular polygon?",
    idea: "Multiplying coordinate quotients gives an integer number of turns. The cost of changing that integer has an exact model on the side of a regular polygon.",
    takeaway: "Winding distinguishes the low-cost rotations. The pair estimates also control how well they approximate the actual images.",
    source: "Section 2 and Lemmas 3–4",
    anchor: "#S2",
  },
  {
    numeral: "V",
    title: "When the outer marks force a polygon bound",
    question: "What can we prove when the outer labels have nearly equal radii and a gap follows them?",
    idea: "An outside target costs squared radius. For the draws that stay in the outer group, use winding to compare with one side, then account for the difference between the two angles.",
    takeaway: "A sufficiently large, narrow outer group forces a regular-polygon bound if it contains every label or has a large enough gap below it.",
    source: "Theorem 2 and Section 3",
    anchor: "#Thmtheorem2",
  },
  {
    numeral: "VI",
    title: "Find a small turn and count the outer marks",
    question: "Why does an eigenvalue outside the polygons force many marks near the unit circle?",
    idea: "Take a power that turns the same marks by a small angle. Their hull contains a large disk, and an estimate on directed cycles forces many hull vertices.",
    takeaway: "More than .332N distinct hull vertices lie at radius at least 1 − 40/N.",
    source: "Section 4, proof of Theorem 5 through equation (23) and the vertex count",
    anchor: "#Thmtheorem5",
  },
  {
    numeral: "VII",
    title: "Follow a random mark through a quarter turn",
    question: "How do we control an excursion in the middle of a path?",
    idea: "Use the matrix entries as transition probabilities. Divide out the expected rotation and contraction at each step. The corrected position has a conditional mean equal to its current value.",
    takeaway: "The corrected path stays near its start with high probability. The original path costs less than 29.7/N on average.",
    source: "Section 4, Figure 4 and equations (24)–(25)",
    anchor: "#S4",
  },
  {
    numeral: "VIII",
    title: "Why the annuli force a contradiction",
    question: "How much squared motion is needed to turn using only the labels in one annulus?",
    idea: "The prefix estimate makes every gap small. Many paths get a quarter turn within a single thin annulus. Once we erase loops, the number of labels bounds how many edges are left.",
    takeaway: "The annuli require more squared motion than the eigenvalue equation allows, completing the large-order theorem.",
    source: "Section 4, Theorem 5 and the numerical cutoff",
    anchor: "#Thmtheorem5",
  },
] as const;

export function mirskyTopicPath(index: number): string {
  return index === 0
    ? "/perfect-mirsky/"
    : "/perfect-mirsky/topic-" + mirskyTopics[index].numeral.toLowerCase() + "/";
}
