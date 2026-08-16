export type HistoryReference = {
  id: string;
  authors: string;
  title: string;
  publication: string;
  links: readonly {
    label: string;
    href: string;
  }[];
};

export const historyReferences: readonly HistoryReference[] = [
  {
    id: "dmitriev-dynkin-1946",
    authors: "N. A. Dmitriev and E. B. Dynkin",
    title: "On characteristic roots of stochastic matrices",
    publication:
      "Izv. Akad. Nauk SSSR Ser. Mat. 10, no. 2 (1946), 167–184.",
    links: [
      {
        label: "MathNet",
        href: "https://www.mathnet.ru/eng/im3595",
      },
    ],
  },
  {
    id: "karpelevic-1951",
    authors: "F. I. Karpelevič",
    title: "On the characteristic roots of matrices with nonnegative elements",
    publication:
      "Izv. Akad. Nauk SSSR Ser. Mat. 15, no. 4 (1951), 361–383.",
    links: [
      {
        label: "MathNet",
        href: "https://www.mathnet.ru/eng/im3317",
      },
    ],
  },
  {
    id: "swift-1972",
    authors: "J. Swift",
    title: "The Location of Characteristic Roots of Stochastic Matrices",
    publication: "M.Sc. thesis, McGill University, 1972.",
    links: [
      {
        label: "McGill",
        href: "https://escholarship.mcgill.ca/concern/theses/12579t72d",
      },
    ],
  },
  {
    id: "djokovic-1990",
    authors: "D. Ž. Đoković",
    title:
      "Cyclic polygons, roots of polynomials with decreasing nonnegative coefficients, and eigenvalues of stochastic matrices",
    publication: "Linear Algebra Appl. 142 (1990), 173–193.",
    links: [
      {
        label: "Publisher",
        href: "https://www.sciencedirect.com/science/article/pii/002437959090266F",
      },
      {
        label: "DOI",
        href: "https://doi.org/10.1016/0024-3795(90)90266-F",
      },
    ],
  },
  {
    id: "kirkland-leslie-1992",
    authors: "S. Kirkland",
    title: "An eigenvalue region for Leslie matrices",
    publication:
      "SIAM J. Matrix Anal. Appl. 13, no. 2 (1992), 507–529.",
    links: [
      {
        label: "Journal",
        href: "https://epubs.siam.org/doi/10.1137/0613033",
      },
      {
        label: "DOI",
        href: "https://doi.org/10.1137/0613033",
      },
    ],
  },
  {
    id: "ito-1997",
    authors: "H. Ito",
    title:
      "A new statement about the theorem determining the region of eigenvalues of stochastic matrices",
    publication: "Linear Algebra Appl. 267 (1997), 241–246.",
    links: [
      {
        label: "Publisher",
        href: "https://www.sciencedirect.com/science/article/pii/S0024379597800523",
      },
      {
        label: "DOI",
        href: "https://doi.org/10.1016/S0024-3795(97)80052-3",
      },
    ],
  },
  {
    id: "johnson-paparella-2017",
    authors: "C. R. Johnson and P. Paparella",
    title: "A matricial view of the Karpelevič theorem",
    publication: "Linear Algebra Appl. 520 (2017), 1–15.",
    links: [
      {
        label: "Publisher",
        href: "https://www.sciencedirect.com/science/article/pii/S0024379517300253",
      },
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/1611.06970",
      },
      {
        label: "DOI",
        href: "https://doi.org/10.1016/j.laa.2017.01.009",
      },
    ],
  },
  {
    id: "kirkland-laffey-smigoc-2020",
    authors: "S. Kirkland, T. Laffey, and H. Šmigoc",
    title: "The Karpelevič region revisited",
    publication:
      "J. Math. Anal. Appl. 490, no. 2 (2020), article 124332.",
    links: [
      {
        label: "Publisher",
        href: "https://www.sciencedirect.com/science/article/pii/S0022247X20304947",
      },
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2005.02452",
      },
      {
        label: "DOI",
        href: "https://doi.org/10.1016/j.jmaa.2020.124332",
      },
    ],
  },
  {
    id: "kirkland-smigoc-2022",
    authors: "S. Kirkland and H. Šmigoc",
    title:
      "Stochastic matrices realising the boundary of the Karpelevič region",
    publication: "Linear Algebra Appl. 635 (2022), 116–138.",
    links: [
      {
        label: "Publisher",
        href: "https://www.sciencedirect.com/science/article/pii/S0024379521004225",
      },
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2110.01040",
      },
      {
        label: "DOI",
        href: "https://doi.org/10.1016/j.laa.2021.11.016",
      },
    ],
  },
  {
    id: "munger-nickerson-paparella-2024",
    authors: "D. N. Munger, A. L. Nickerson, and P. Paparella",
    title: "Demystifying the Karpelevič theorem",
    publication: "Linear Algebra Appl. 702 (2024), 46–62.",
    links: [
      {
        label: "Publisher",
        href: "https://www.sciencedirect.com/science/article/pii/S0024379524003276",
      },
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2309.03849",
      },
      {
        label: "DOI",
        href: "https://doi.org/10.1016/j.laa.2024.08.006",
      },
    ],
  },
  {
    id: "joshi-kirkland-smigoc-2024",
    authors: "P. Joshi, S. Kirkland, and H. Šmigoc",
    title:
      "Powers of Karpelevič arcs and their sparsest realising matrices",
    publication: "Linear Algebra Appl. 703 (2024), 463–503.",
    links: [
      {
        label: "Publisher",
        href: "https://www.sciencedirect.com/science/article/pii/S002437952400380X",
      },
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2306.05039",
      },
      {
        label: "DOI",
        href: "https://doi.org/10.1016/j.laa.2024.10.001",
      },
    ],
  },
  {
    id: "verbeken-ginis-2026",
    authors: "B. Verbeken and V. Ginis",
    title:
      "Critical Invariant Polygons and the Farey–Ito Boundary of Stochastic Spectra",
    publication: "Manuscript, version dated 24 July 2026.",
    links: [
      {
        label: "Zenodo",
        href: "https://zenodo.org/records/21529144",
      },
      {
        label: "DOI",
        href: "https://doi.org/10.5281/zenodo.21529144",
      },
    ],
  },
] as const;

export const historyContent = {
  title: "How a geometric question became an arithmetic boundary",
  deck:
    "The Karpelevič region has been described through invariant polygons, boundary arcs, Farey fractions, polynomial families, and explicit stochastic matrices. The history is partly the story of learning how those descriptions fit together.",
  disclaimer:
    "This is the history as I learned it while working through the field. It is not a complete overview of stochastic spectra, nor a claim to settle questions of priority. It is an attempt to tell a coherent story about the ideas that led to the modern form of the problem. Corrections, missing references, and alternative readings are very welcome.",
  origins: [
    {
      text:
        "A row-stochastic matrix describes a finite redistribution of probability or mass. The number 1 is always an eigenvalue, and every other eigenvalue lies in the closed unit disc. The harder question asks for the exact set Θₙ of complex numbers that can occur as an eigenvalue when the matrix size n is fixed. Later literature traces that problem to a question of Andrey Kolmogorov in 1937.",
      citations: ["johnson-paparella-2017"],
    },
    {
      text:
        "The decisive early observation was geometric. If Az = λz and P is the convex hull of the complex coordinates of z, then every coordinate of λz is a convex combination of the coordinates of z. Thus λP lies inside P. Conversely, the convex coefficients in such an inclusion can be read as the rows of a stochastic matrix. A spectral existence problem can therefore be studied as a problem about a contracted and rotated polygon.",
      citations: [
        "dmitriev-dynkin-1946",
        "johnson-paparella-2017",
        "verbeken-ginis-2026",
      ],
    },
    {
      text:
        "That bridge is elementary to state, but it opens two different kinds of difficulty. One must understand which polygonal contacts are forced at an extremal multiplier, and one must translate the resulting geometry into the arithmetic data that index the boundary arcs. Much of the later literature can be read as choosing a particularly effective language for one side of that bridge.",
      citations: [
        "dmitriev-dynkin-1946",
        "ito-1997",
        "kirkland-laffey-smigoc-2020",
      ],
    },
  ],
  farey: {
    title: "How rational angles organize the boundary",
    paragraphs: [
      {
        text:
          "First comes a rigidity fact. If an eigenvalue of an n × n stochastic matrix lies on the unit circle, then it is a root of unity whose order is at most n. Conversely, every root of unity of order at most n occurs: a cyclic permutation matrix already realizes it. Thus the points of Θₙ that actually reach the unit circle are exactly these finitely many roots of unity.",
        citations: [
          "karpelevic-1951",
          "johnson-paparella-2017",
          "kirkland-laffey-smigoc-2020",
        ],
      },
      {
        text:
          "A Farey fraction of order n is simply a reduced fraction p/q between 0 and 1 whose denominator q is at most n. Read p/q as the fraction of one complete turn: it marks the root of unity exp(2πip/q). Farey fractions therefore provide an ordered address book for the accessible points around the unit circle.",
        citations: ["ito-1997", "johnson-paparella-2017"],
      },
      {
        text:
          "Two fractions are Farey neighbours at order n when no other reduced fraction with denominator at most n lies between them. If a/b < c/d are neighbours, then bc − ad = 1 and b + d > n. Their mediant (a+c)/(b+d) is the first new, simplest fraction between them, but its denominator is still too large to appear at order n. The classical boundary arc joins the roots of unity belonging to such a neighbouring pair.",
        citations: [
          "ito-1997",
          "johnson-paparella-2017",
          "kirkland-laffey-smigoc-2020",
        ],
      },
    ],
    fractions: [
      { numerator: "0", denominator: "1", angle: "0°", emphasis: false },
      { numerator: "1", denominator: "5", angle: "72°", emphasis: false },
      { numerator: "1", denominator: "4", angle: "90°", emphasis: false },
      { numerator: "1", denominator: "3", angle: "120°", emphasis: true },
      { numerator: "2", denominator: "5", angle: "144°", emphasis: true },
      { numerator: "1", denominator: "2", angle: "180°", emphasis: false },
    ],
    example:
      "At order five, 1/3 and 2/5 are neighbours. Their mediant is 3/8: it lies between them, but denominator eight exceeds the current budget. It first becomes available at order eight—the same fraction that appears in the manuscript’s worked ray.",
  },
  timeline: [
    {
      year: "1937",
      label: "The question",
      title: "Kolmogorov asks for the possible eigenvalues",
      text:
        "As reported in the modern literature, Kolmogorov asked for the region occupied by the individual eigenvalues of all n × n stochastic matrices. This is deliberately a one-eigenvalue question: it is more focused than prescribing an entire spectrum, but already has a rich boundary.",
      citations: ["johnson-paparella-2017"],
    },
    {
      year: "1946",
      label: "The geometric beginning",
      title: "Dmitriev and Dynkin introduce the polygonal viewpoint",
      text:
        "Dmitriev and Dynkin developed the invariant-polygon criterion, obtained general structural information, and determined the low-order regions through n = 5. Their cyclic-polygon ideas made the geometry visible, while also leaving conjectures whose limits would only become clear later.",
      citations: [
        "dmitriev-dynkin-1946",
        "djokovic-1990",
        "johnson-paparella-2017",
      ],
    },
    {
      year: "1951",
      label: "The classical theorem",
      title: "Karpelevič solves the problem for every order",
      text:
        "Karpelevič completed the general description. The unit-circle points are roots of unity of bounded order, and the remaining boundary is formed by curvilinear arcs joining consecutive such points in their circular order. The result determines Θₙ, but its original statement and proof are intricate. This theorem—not the present manuscript—is the classical solution of the eigenvalue-region problem.",
      citations: [
        "karpelevic-1951",
        "ito-1997",
        "johnson-paparella-2017",
      ],
    },
    {
      year: "1972",
      label: "An English route into the literature",
      title: "Swift gathers the difficult early sources",
      text:
        "Joanne Swift’s master’s thesis gives a comprehensive account of the stochastic-root problem, with examples, diagrams, and edited translations from the Russian literature. It became a practical route into results whose original presentation and language otherwise make them difficult to enter.",
      citations: ["swift-1972"],
    },
    {
      year: "1990",
      label: "Cyclic polygons revisited",
      title: "Đoković clarifies what the powers of λ can and cannot do",
      text:
        "Đoković studied polygons generated by 1, λ, λ², …, simplified the statement of the Karpelevič theorem, and showed that a Dmitriev–Dynkin conjecture fails for 6 × 6 matrices. The episode is a useful warning: the cyclic polygon is a powerful model, but it does not by itself capture every extremal polygon in higher order.",
      citations: ["djokovic-1990"],
    },
    {
      year: "1992",
      label: "A structured all-dimensional region",
      title: "Kirkland determines the Leslie-matrix region",
      text:
        "Kirkland constructed a sharp eigenvalue region for row-stochastic Leslie matrices. This is an important structured analogue of the unrestricted Karpelevič region: a nontrivial matrix subclass still admits a description valid in every order, something that is exceptionally rare in stochastic spectral geometry.",
      citations: ["kirkland-leslie-1992"],
    },
    {
      year: "1997",
      label: "A shorter statement",
      title: "Ito exposes the Farey-indexed polynomial families",
      text:
        "Ito replaced the long classical formulation by a compact description in which neighbouring Farey fractions determine a one-parameter polynomial family for each boundary arc. This is the form most visible in current work. A later proof audit stresses an important nuance: Ito established equivalence with Karpelevič’s formulation, rather than supplying a fully independent proof of every analytic arc property.",
      citations: ["ito-1997", "munger-nickerson-paparella-2024"],
    },
    {
      year: "2017",
      label: "Back to matrices",
      title: "Johnson and Paparella give each arc a realizing family",
      text:
        "The polynomial description says where a boundary point must lie; a matricial description asks which stochastic matrix actually has it as an eigenvalue. Johnson and Paparella exhibited, for every Karpelevič arc, one relatively simple parameterized family of stochastic matrices that realizes the whole arc. They also recorded differentiability observations and further questions.",
      citations: ["johnson-paparella-2017"],
    },
    {
      year: "2020",
      label: "Radial precision",
      title: "Kirkland, Laffey, and Šmigoc identify the boundary by angle",
      text:
        "Their alternative characterization sharpens the classical description by identifying the boundary point of a prescribed argument. They also prove that every point of Θₙ can occur as a subdominant eigenvalue of some stochastic matrix of the same order, connecting the planar region more directly to long-term Markov behaviour.",
      citations: ["kirkland-laffey-smigoc-2020"],
    },
    {
      year: "2022",
      label: "Sparse realizations",
      title: "Kirkland and Šmigoc classify the extremal matrix patterns",
      text:
        "The realizing-matrix problem was pushed from existence toward structure. Kirkland and Šmigoc characterize every stochastic matrix with a Type 0 or Type I reduced Ito characteristic polynomial, and all sparsest realizing matrices for Types II and III. The boundary can now be studied through the weighted directed graphs of its leanest matrix models.",
      citations: ["kirkland-smigoc-2022"],
    },
    {
      year: "2024",
      label: "Proof architecture",
      title: "Recent work separates inherited statements from proved arc properties",
      text:
        "Munger, Nickerson, and Paparella revisit the logical architecture behind the standard modern statement. For Type I families they establish continuity and simplicity of the relevant arcs, and they give an elementary extremality argument for boundary points when n > 3. Their discussion makes unusually explicit which parts follow from equivalence, realization, or additional analysis.",
      citations: ["munger-nickerson-paparella-2024"],
    },
    {
      year: "2024",
      label: "Relations among arcs",
      title: "Joshi, Kirkland, and Šmigoc characterize powers",
      text:
        "A different line asks when one Karpelevič arc is the pointwise power of another. Joshi, Kirkland, and Šmigoc give a complete characterization and determine when a sparsest realizing matrix is itself a power of another stochastic matrix. Farey arithmetic, arc geometry, and graph structure meet in the same question.",
      citations: ["joshi-kirkland-smigoc-2024"],
    },
    {
      year: "2026",
      label: "This manuscript",
      title: "Returning to the invariant polygon",
      text:
        "Our manuscript starts from a radially critical elliptic contraction and studies the contact geometry of an invariant polygon. Permitted vertex replacements and a finite first-return decomposition are followed, for N≥4, by a projective argument ruling out skipped returns; the resulting structure has a product of possibly varying Ito factors as its scalar consequence. The aim is a new geometric route to the already classical Farey–Ito boundary, not a claim that the boundary theorem itself is new.",
      citations: ["verbeken-ginis-2026"],
    },
  ],
  languages: [
    {
      number: "I",
      title: "Invariant polygons",
      text:
        "The eigenvector coordinates form a polygon P and stochasticity becomes the inclusion λP ⊆ P. Extremality is encoded by where the image touches the boundary. This is the natural geometric language of Dmitriev–Dynkin and of the present manuscript.",
      citations: ["dmitriev-dynkin-1946", "verbeken-ginis-2026"],
    },
    {
      number: "II",
      title: "Boundary arcs and Farey data",
      text:
        "Roots of unity organize the endpoints. Consecutive fractions in the Farey sequence specify which endpoints are neighbours and which one-parameter polynomial family carries the arc between them. Ito’s formulation makes this arithmetic indexing especially concise.",
      citations: [
        "karpelevic-1951",
        "ito-1997",
        "munger-nickerson-paparella-2024",
      ],
    },
    {
      number: "III",
      title: "Realizing matrices and graphs",
      text:
        "A boundary equation becomes concrete when one writes down a stochastic matrix that has the chosen root as an eigenvalue. Parameterized and sparsest realizing stochastic matrices, together with their directed graphs, reveal how an extremal eigenvalue is assembled combinatorially.",
      citations: [
        "johnson-paparella-2017",
        "kirkland-smigoc-2022",
        "joshi-kirkland-smigoc-2024",
      ],
    },
  ],
  establishedBefore: [
    {
      title: "The full eigenvalue region",
      text:
        "The determination of Θₙ for every n is the Karpelevič theorem of 1951. Its boundary arcs and roots-of-unity endpoints are classical.",
      citations: ["karpelevic-1951", "johnson-paparella-2017"],
    },
    {
      title: "The Farey–polynomial formulation",
      text:
        "The compact Farey-neighbour and polynomial description is due to Ito’s 1997 reformulation, with later work clarifying the proof obligations hidden by equivalence of formulations.",
      citations: ["ito-1997", "munger-nickerson-paparella-2024"],
    },
    {
      title: "Realizing boundary matrices",
      text:
        "A parameterized stochastic family for every arc was already available in 2017, and the sparsest realizing patterns were substantially classified in 2022.",
      citations: ["johnson-paparella-2017", "kirkland-smigoc-2022"],
    },
    {
      title: "Radial and angular boundary characterizations",
      text:
        "The unique boundary point at a prescribed angle and the subdominant-eigenvalue realization theorem were established in the 2020 revisit.",
      citations: ["kirkland-laffey-smigoc-2020"],
    },
    {
      title: "The claim made here",
      text:
        "The present manuscript seeks a derivation of the known Farey–Ito boundary from the contact-return structure of critical invariant polygons. Its contribution must therefore be judged as proof architecture, structural geometry, and interpretation—not as discovery of the classical region.",
      citations: ["verbeken-ginis-2026"],
    },
  ],
  sourceNote:
    "The 1946 and 1951 papers were published in Russian; the English titles used here follow their bibliographic records. For claims about how the formulations relate, this page also cites later papers that explicitly compare them. This working bibliography should grow when a missing branch of the story becomes relevant.",
} as const;
