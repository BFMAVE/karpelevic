export const homeContent = {
  title:
    "Critical Invariant Polygons and the Farey–Ito Boundary of Stochastic Spectra",
  subtitle:
    "Contact Return Normal Forms, Projective Holonomy, and the Karpelevič–Ito Theorem",
  authors: ["Brecht Verbeken", "Vincent Ginis"],
  descriptor:
    "A geometric route from invariant polygons to the classical boundary of stochastic spectra.",
  projectAim:
    "The aim of this project is to make the paper, together with its archival Zenodo record, more approachable and digestible—both for me and for the wider community.",
  readingRoutes: [
    {
      label: "The paper",
      title: "Go directly to the manuscript",
      text:
        "Open the current archival version on Zenodo and begin with the paper itself.",
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
      text: "The manuscript develops an intrinsic contact theory for radially critical elliptic contractions, passing through hereditary saturation, one-sided contacts and mutations, a finite rotation section, and, for N≥4, a projective argument ruling out skipped returns.",
    },
    {
      label: "Part II",
      title: "Return to stochastic spectra",
      text: "For orders at least four, the resulting monodromy is combined with a sharp scalar comparison, explicit sparse realizations, and Farey refinement; the smaller orders are treated directly. Together these arguments derive the Farey–Ito boundary from invariant polygons.",
    },
  ],
  noveltyLedger: [
    {
      established: "The eigenvalue-region problem and its classical solution",
      thisPaper:
        "Uses the Karpelevič–Ito theorem as the classical destination, not as a new claim.",
    },
    {
      established: "Farey-indexed boundary formulations and matrix realizations",
      thisPaper:
        "Organizes a different proof route through critical invariant-polygon contacts and return monodromy.",
    },
    {
      established: "Elementary convexity, compactness, and stochastic-matrix background",
      thisPaper:
        "Includes the background needed to keep the geometric argument self-contained.",
    },
  ],
  paperSummary:
    "The paper studies the least polygonal complexity of an elliptic contraction and, for complexities at least four, develops a contact-return normal form at radial criticality. Combined with a direct treatment of the smaller orders, this produces a geometric derivation of the classical Farey–Ito boundary for real row-stochastic matrices.",
  personalPrompt:
    "Author prompt — replace before publication: How did you first encounter the Karpelevič region? What feature of the problem made you keep returning to it, and when did invariant polygons become the decisive point of view?",
  manuscript: {
    status: "Zenodo record",
    zenodoUrl: "https://zenodo.org/records/21529144",
    prepared: "24 July 2026",
    pages: 93,
    zenodoChecksum:
      "ca3be77169053635302798aa1ba204502db0a3267d2e76e4d8e763cede138f3b",
    localArxivDraftChecksum:
      "2eeeb486b959edab4badf08e2585cde84227cc0896ec5371ea39f2e1d999bf66",
  },
} as const;

export const primaryNavigation = [
  { label: "Problem", href: "/" },
  { label: "History", href: "/history/" },
  { label: "My Journey", href: "/journey/" },
  { label: "The Proof", href: "/proof/" },
] as const;
