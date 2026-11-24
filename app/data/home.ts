import { SITE_NAME, SITE_SUBTITLE } from "../lib/site-metadata";

export const homeContent = {
  title: SITE_NAME,
  subtitle: SITE_SUBTITLE,
  authors: ["Brecht Verbeken", "Vincent Ginis"],
  descriptor:
    "How far can an eigenvalue of an n-state stochastic matrix lie from zero in a given direction? A drawing of its eigenvector turns this question into a problem about fitting one polygon inside another.",
  projectAim:
    "The fourteen topics develop the proof for readers with basic analysis and linear algebra. Each topic introduces the extra ideas it needs, connects them to a geometric picture, and includes the detailed source argument. The aim is to understand why the theorem is true, as well as what it says.",
  readingRoutes: [
    {
      label: "The paper",
      title: "Go directly to the manuscript",
      text:
        "Read the current arXiv v2, revised 23 September 2026.",
      href: "https://arxiv.org/abs/2609.26058v2",
      external: true,
    },
    {
      label: "History",
      title: "Read a little of the story first",
      text:
        "Follow the problem from invariant polygons and the classical theorem to Farey-indexed arcs and realizing matrices.",
      href: "/history/",
      external: false,
    },
    {
      label: "My journey",
      title: "Learn where I encountered the problem",
      text:
        "Read how I came across the question, why it held my attention, and how the project developed.",
      href: "/journey/",
      external: false,
    },
  ],
  problemIntroduction: [
    "A row-stochastic matrix has nonnegative entries and each row adds to one. A row such as (½, ½, 0, 0) takes the midpoint of the first two coordinates of a vector. Another row may choose different weights. What restricts the eigenvalues when all four rows are free to choose?",
    "We can already find one eigenvalue by choosing the rows in a particular way. Let the first row take the second coordinate, the second take the third, and so on around a cycle. Applied to the column with entries 1, i, −1, −i, this matrix gives i, −1, −i, 1. Each entry has been multiplied by i. Four states can therefore produce an exact quarter turn.",
  ],
  problemOrientation:
    "Write Θₙ for the set of eigenvalues we can obtain with n states. The point i belongs to Θ₄. Could three states also produce i? On the atlas the three-state region falls short of i, although both regions lie in the same unit disk. The theorem tells us exactly how far each region reaches in every direction.",
  invariantPolygon:
    "Put the entries of an eigenvector on a sheet of paper. A row with two nonzero weights picks a point on a joining segment. With more weights it can pick any point in the convex hull P of the entries. If the eigenvalue is λ, row j has to land at λ times entry j. Every one of these targets lies in P, so the whole rotated and scaled copy λP fits inside P. Conversely, if such a copy fits, the weights that locate its vertices give us the rows of a matrix.",
  proofOrientation: [
    {
      title: "How far can the polygon turn and stretch?",
      text: "Fix the angle of rotation. For each polygon with at most n vertices we can ask how much of the rotated copy still fits inside. The largest radius attainable by any such polygon is the distance from zero to the boundary along that ray.",
    },
    {
      title: "What can we read from a contact?",
      text: "At a radial maximum of least order, every vertex of the image polygon touches the boundary of the original. Some vertices land on corners. Following these corner images until one lands inside a side gives an equation with two weights, one for each end of that side. Following the same path in the plane also records how far it has turned.",
    },
    {
      title: "Which weights reach the boundary?",
      text: "Multiplying the contact equations removes the vertex coordinates. The total turn fixes the average angle of the factors that remain. A convexity inequality bounds the radius, and equality tells us to give every factor the same weight. We can then build a stochastic matrix that reaches this radius.",
    },
  ],
  contributionSummary: [
    {
      label: "Part I",
      title: "Critical polygon geometry",
      text: "For a radially critical elliptic contraction, the manuscript proves contact with every side and boundary placement of every image vertex for all invariant polygons within the vertex bound. It then fixes a consistent half-open side assignment, studies permitted vertex replacements and a finite first-return decomposition, and, for N≥4, uses a projective argument to rule out skipped returns.",
    },
    {
      label: "Part II",
      title: "Return to stochastic eigenvalue regions",
      text: "For orders at least four, the resulting finite product equation is combined with a sharp scalar comparison, explicit sparse realizations, and Farey refinement; the smaller orders are treated directly. Together these arguments derive the boundary of the Karpelevič region in Ito’s formulation from invariant polygons.",
    },
  ],
  noveltyLedger: [
    {
      established: "The eigenvalue-region problem and its classical solution",
      thisPaper:
        "Uses the Karpelevič theorem in Ito’s formulation as the classical destination, not as a new claim.",
    },
    {
      established: "Farey-indexed boundary formulations and matrix realizations",
      thisPaper:
        "Organizes a different proof route through critical invariant-polygon contacts and a finite product equation.",
    },
    {
      established: "Elementary convexity, compactness, and stochastic-matrix background",
      thisPaper:
        "Includes the background needed to keep the geometric argument self-contained.",
    },
  ],
  paperSummary:
    "The paper studies the least polygonal complexity of an elliptic contraction and, for complexities at least four, derives a finite first-return description and product equation at radial criticality. Combined with a direct treatment of the smaller orders, this produces a geometric derivation of the classical boundary of the Karpelevič region in Ito’s formulation for real row-stochastic matrices.",
  manuscript: {
    status: "Archival Zenodo record (24 July 2026)",
    zenodoUrl: "https://zenodo.org/records/21529144",
    zenodoPages: 93,
    websiteEditionUrl: "/paper/critical-invariant-polygons.pdf",
    websiteEditionPages: 40,
    zenodoChecksum:
      "ca3be77169053635302798aa1ba204502db0a3267d2e76e4d8e763cede138f3b",
    localArxivDraftChecksum:
      "82fb42c36499d19b7c7e1f3f14c86b53ff6ae035d11ccd5bf7a1ed7dfc50d21f",
  },
} as const;

export const primaryNavigation = [
  { label: "Problem", href: "/" },
  { label: "History", href: "/history/" },
  { label: "My Journey", href: "/journey/" },
  { label: "The Proof", href: "/proof/" },
] as const;
