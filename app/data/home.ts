import { SITE_NAME, SITE_SUBTITLE } from "../lib/site-metadata";

export const homeContent = {
  title: SITE_NAME,
  subtitle: SITE_SUBTITLE,
  authors: ["Brecht Verbeken", "Vincent Ginis"],
  descriptor:
    "Which complex numbers can be eigenvalues of an averaging matrix? Follow the answer from elementary linear algebra to polygons, rational angles, and the exact boundary.",
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
    "A row-stochastic matrix is a nonnegative matrix whose rows each add to one. Such matrices encode finite Markov chains, averaging processes, and many other systems in which mass or probability is redistributed without being lost.",
    "For a fixed size n, which complex numbers can occur as an eigenvalue of one of these matrices? The union of all possibilities is denoted by Θₙ. The problem is to determine this set for every n.",
  ],
  problemOrientation:
    "The eigenvalue 1 is always present, and every eigenvalue lies in the closed unit disc. Those bounds leave much unanswered: at a fixed matrix size, most points on the unit circle are impossible, and the boundary inside the disc has a precise curved shape. The atlas above shows how the allowed region grows as n increases.",
  invariantPolygon:
    "Place the complex coordinates of an eigenvector in the plane and take their convex hull. Each row of the matrix forms an average of these points, so the eigenvalue equation says that multiplication by λ sends the hull into itself. For a nonreal eigenvalue, this hull is a genuine polygon. Conversely, the averages expressing that inclusion give the rows of a stochastic matrix. Topic I proves both directions and handles the real eigenvalues and smaller matrix sizes separately.",
  proofOrientation: [
    {
      title: "Averages become geometry",
      text: "For a nonreal eigenvalue, multiplication rotates and scales the plane. The problem becomes finding a polygon, with at most n vertices, that contains its rotated and scaled image.",
    },
    {
      title: "The boundary forces contact",
      text: "Fix a direction and push the eigenvalue as far from the origin as possible. The image polygon must then touch the original in a rigid pattern. The middle topics explain how these contacts lead to first returns and a finite product equation.",
    },
    {
      title: "Geometry determines the curve",
      text: "An inequality turns the product equation into a sharp bound. Explicit stochastic matrices attain it, and rational angles identify the endpoints of every boundary arc. The final topics assemble the theorem and work through an example.",
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
