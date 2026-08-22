export const homeContent = {
  title:
    "Critical Invariant Polygons and the Farey–Ito Boundary of Stochastic Spectra",
  subtitle:
    "Boundary Contacts, First Returns, and the Karpelevič Theorem in Ito’s Formulation",
  authors: ["Brecht Verbeken", "Vincent Ginis"],
  descriptor:
    "A geometric route from invariant polygons to the classical boundary of stochastic eigenvalue regions.",
  projectAim:
    "The aim of this project is to make the paper, together with its archival Zenodo record, more approachable and digestible—both for me and for the wider community.",
  readingRoutes: [
    {
      label: "The paper",
      title: "Go directly to the manuscript",
      text:
        "Open the archival 24 July 2026 version on Zenodo and begin with that citable record.",
      href: "https://zenodo.org/records/21529144",
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
  invariantPolygon:
    "The bridge to geometry is simple to state. An eigenvalue λ belongs to Θₙ exactly when multiplication by λ leaves some polygon with at most n vertices invariant. On the boundary, the contracted and rotated image presses against the polygon. The resulting contacts turn a spectral question into a finite geometric return problem.",
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
  personalPrompt:
    "Author prompt — replace before publication: How did you first encounter the Karpelevič region? What feature of the problem made you keep returning to it, and when did invariant polygons become the decisive point of view?",
  manuscript: {
    status: "Archival Zenodo record (24 July 2026)",
    zenodoUrl: "https://zenodo.org/records/21529144",
    zenodoPages: 93,
    websiteEditionUrl: "/paper/critical-invariant-polygons.pdf",
    websiteEditionPages: 108,
    zenodoChecksum:
      "ca3be77169053635302798aa1ba204502db0a3267d2e76e4d8e763cede138f3b",
    localArxivDraftChecksum:
      "0d9caf5979606b2f680b285419cdb690bb381736bd7160b1c7ae4dc3a9d0497a",
  },
} as const;

export const primaryNavigation = [
  { label: "Problem", href: "/" },
  { label: "History", href: "/history/" },
  { label: "My Journey", href: "/journey/" },
  { label: "The Proof", href: "/proof/" },
] as const;
