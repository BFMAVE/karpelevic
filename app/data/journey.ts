export type JourneyReference = {
  id: string;
  authors: string;
  title: string;
  publication: string;
  links: readonly {
    label: string;
    href: string;
  }[];
};

export type JourneyParagraph = {
  text: string;
  citations: readonly string[];
};

export type JourneyChapter = {
  number: string;
  era: string;
  label: string;
  title: string;
  paragraphs: readonly JourneyParagraph[];
};

export const journeyReferences: readonly JourneyReference[] = [
  {
    id: "verbeken-thesis-2024",
    authors: "B. Verbeken",
    title:
      "On models and metrics: Improving stochastic model performance in manpower planning",
    publication: "PhD thesis, Vrije Universiteit Brussel, 2024.",
    links: [
      {
        label: "VUB record",
        href:
          "https://researchportal.vub.be/en/publications/on-models-and-metrics-improving-stochastic-model-performance-in-m/",
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
    id: "ams-translations-1988",
    authors: "N. A. Dmitriev, E. B. Dynkin, and F. I. Karpelevič",
    title:
      "Characteristic roots of stochastic matrices; On the characteristic roots of matrices with nonnegative elements",
    publication:
      "English translations in American Mathematical Society Translations, Series 2, vol. 140, 1988.",
    links: [
      {
        label: "AMS volume",
        href: "https://bookstore.ams.org/TRANS2/140",
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
    id: "monotone-2025",
    authors: "B. Vagenende, B. Verbeken, and M.-A. Guerry",
    title: "Eigenvalue regions and realising monotone stochastic matrices",
    publication: "Electronic Journal of Linear Algebra 42 (2026), 387–398.",
    links: [
      {
        label: "Journal",
        href: "https://journals.uwyo.edu/index.php/ela/article/view/10159",
      },
      {
        label: "DOI",
        href: "https://doi.org/10.13001/ela.2026.10159",
      },
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2502.01314",
      },
    ],
  },
  {
    id: "ran-teng-2024",
    authors: "A. C. M. Ran and Z. E. Teng",
    title:
      "The nonnegative inverse eigenvalue problem with prescribed zero patterns in dimension three",
    publication: "Electron. J. Linear Algebra 40 (2024), 506–537.",
    links: [
      {
        label: "Journal",
        href: "https://journals.uwyo.edu/index.php/ela/article/view/7965",
      },
      {
        label: "DOI",
        href: "https://doi.org/10.13001/ela.2024.7965",
      },
    ],
  },
  {
    id: "vibe-proving-2026",
    authors:
      "B. Verbeken, B. Vagenende, M.-A. Guerry, A. Algaba, and V. Ginis",
    title:
      "Early Evidence of Vibe-Proving with Consumer LLMs: A Case Study on Spectral Region Characterization with ChatGPT-5.2 (Thinking)",
    publication: "Preprint, arXiv:2602.18918, 2026.",
    links: [
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2602.18918",
      },
    ],
  },
  {
    id: "four-cycle-2026",
    authors:
      "B. Vagenende, B. Verbeken, A. Algaba, and M.-A. Guerry",
    title: "On the Spectral Region of 4-Cycle Stochastic Matrices",
    publication: "Preprint, arXiv:2605.06743, 2026.",
    links: [
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2605.06743",
      },
    ],
  },
  {
    id: "tridiagonal-2026",
    authors: "B. Vagenende, B. Verbeken, and M.-A. Guerry",
    title:
      "Nonnegativity of the second largest eigenvalue of 4 × 4 tridiagonal stochastic matrices",
    publication: "Preprint, arXiv:2605.07591, 2026.",
    links: [
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2605.07591",
      },
    ],
  },
  {
    id: "ilas-2026",
    authors: "B. Verbeken and V. Ginis",
    title:
      "Spectrally Complete Subsets and Eigenvalue Regions of Classes of Stochastic Matrices",
    publication:
      "Minisymposium talk, 27th Conference of the International Linear Algebra Society, 21 May 2026.",
    links: [
      {
        label: "Programme",
        href: "https://indico.math.vt.edu/event/2/contributions/44/",
      },
    ],
  },
  {
    id: "n-cycle-2026",
    authors: "B. Verbeken and V. Ginis",
    title: "On the Spectral Region of n-Cycle Stochastic Matrices",
    publication: "Preprint, arXiv:2606.10143, 2026.",
    links: [
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2606.10143",
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
    id: "type-three-2026",
    authors: "B. Verbeken and V. Ginis",
    title: "The Type III realisation conjecture of Kirkland and Šmigoc",
    publication: "Zenodo, 2026.",
    links: [
      {
        label: "Zenodo",
        href: "https://zenodo.org/records/21219088",
      },
      {
        label: "DOI",
        href: "https://doi.org/10.5281/zenodo.21219088",
      },
    ],
  },
  {
    id: "type-two-2026",
    authors: "B. Verbeken and V. Ginis",
    title:
      "Stochastic realisers of non-degenerate full-degree Type II reduced Ito polynomials",
    publication: "Zenodo, 2026.",
    links: [
      {
        label: "Zenodo",
        href: "https://zenodo.org/records/21653759",
      },
      {
        label: "DOI",
        href: "https://doi.org/10.5281/zenodo.21653759",
      },
    ],
  },
  {
    id: "two-layer-2026",
    authors: "Working paper",
    title: "The Spectral Region of Two-Layer Renewal Stochastic Matrices",
    publication: "Unpublished working paper, 2026.",
    links: [],
  },
  {
    id: "critical-polygons-2026",
    authors: "B. Verbeken and V. Ginis",
    title:
      "Critical Invariant Polygons and the Farey–Ito Boundary of Stochastic Spectra",
    publication: "Zenodo, version dated 24 July 2026.",
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

export const journeyContent = {
  title: "How I found my way to Karpelevič",
  deck:
    "I first knew the theorem only by reputation. A colleague’s persistence, two conjectures about structured matrices, and a series of experiments with generative AI gradually gave me the courage to look again.",
  disclaimer:
    "This is a personal account of how I encountered the problem and how the work developed. It is not intended as a complete history of stochastic eigenvalue regions; that belongs on the History page.",
  route: [
    { era: "2018–2024", label: "A theorem at the edge of my PhD" },
    { era: "After 2024", label: "Brando, Swift, and a translation" },
    { era: "Early 2026", label: "Two conjectures on the final pages" },
    { era: "2026", label: "GenAI changes the ambition" },
    { era: "May–June", label: "From cycles to realizing matrices" },
    { era: "July", label: "Invariant polygons" },
  ],
  openingChapters: [
    {
      number: "I",
      era: "2018–2024",
      label: "A difficult field nearby",
      title: "A theorem at the edge of my PhD",
      paragraphs: [
        {
          text:
            "I first encountered the Karpelevič theorem during my PhD, between 2018 and 2024, but only indirectly. My doctoral research concerned stochastic models, Markov and semi-Markov systems, and questions of model performance. Eigenvalue regions of stochastic matrices and their subclasses formed a nearby field that I knew was considered difficult.",
          citations: ["verbeken-thesis-2024"],
        },
        {
          text:
            "I knew that the classical theorem answered the single-eigenvalue question for stochastic matrices. I did not know its proof closely. It was one of those results one learns to recognize before one has the courage to enter.",
          citations: ["ams-translations-1988"],
        },
      ],
    },
    {
      number: "II",
      era: "After 2024",
      label: "The paper comes closer",
      title: "Brando, Swift, and an elusive translation",
      paragraphs: [
        {
          text:
            "The theorem moved closer when my colleague Brando Vagenende began his PhD on eigenvalue regions of subclasses of stochastic matrices, especially monotone stochastic matrices. He could not immediately obtain the English translation of Karpelevič’s paper, so he initially worked through Joanne Swift’s 1972 master’s thesis.",
          citations: ["swift-1972", "monotone-2025"],
        },
        {
          text:
            "Through my friend Arne Mertens, I was eventually able to help Brando obtain the translated paper. He worked through it for months and described it as remarkably obscure. His experience made me increasingly curious, although for a long time I still did not have the courage to begin dissecting the proof myself.",
          citations: ["ams-translations-1988"],
        },
      ],
    },
  ] satisfies readonly JourneyChapter[],
  conjectures: {
    introduction:
      "An important turning point came from a paper by André Ran and Zhixuan Emily Teng. Their main subject is the nonnegative inverse eigenvalue problem with prescribed zero patterns in dimension three, but its final pages propose two questions about structured four-dimensional stochastic matrices. Brando and I decided to attack both.",
    cards: [
      {
        number: "01",
        pattern: "A four-cycle support",
        question:
          "Which nonreal numbers can occur as eigenvalues of this cyclic stochastic family?",
        outcome:
          "The resulting paper determines the exact nonreal region and gives explicit boundary constructions.",
        reference: "four-cycle-2026",
      },
      {
        number: "02",
        pattern: "A tridiagonal support",
        question:
          "Can the second-largest eigenvalue of an irreducible 4 × 4 tridiagonal stochastic matrix ever be negative?",
        outcome:
          "The resulting paper proves nonnegativity and extends the treatment to reducible matrices.",
        reference: "tridiagonal-2026",
      },
    ],
  },
  laterChapters: [
    {
      number: "III",
      era: "2026",
      label: "A change in research practice",
      title: "GenAI and a change in ambition",
      paragraphs: [
        {
          text:
            "I am part of the Data Analytics Laboratory at the Vrije Universiteit Brussel. Within the Data Lab, we sometimes call ourselves GenAI pioneers: we began experimenting relatively early with the role that generative AI might play in research, while remaining conscious that mathematical verification and responsibility cannot be delegated to a language model.",
          citations: ["vibe-proving-2026"],
        },
        {
          text:
            "The four-cycle problem became a concrete case study. Generative AI helped us propose proof directions, reformulate the problem, test possible routes, and identify gaps that still required human repair. We documented that process rather than presenting the final proof as if it had appeared fully formed.",
          citations: ["vibe-proving-2026", "four-cycle-2026"],
        },
        {
          text:
            "Those successes changed my sense of what could reasonably be attempted. GenAI did not make the Karpelevič theorem easy, but it gave me the courage to rethink a problem that I had previously regarded as too difficult to approach.",
          citations: [],
        },
      ],
    },
    {
      number: "IV",
      era: "May–June 2026",
      label: "Structured families",
      title: "From one cycle to arbitrary cycles",
      paragraphs: [
        {
          text:
            "After the four-cycle result, I went to ILAS 2026 asking whether the same kind of reasoning could be pushed beyond a single four-dimensional pattern. Brando was at the conference with me, and I tried to generalize the four-cycle classification into a theorem for a broader family.",
          citations: ["four-cycle-2026", "ilas-2026"],
        },
        {
          text:
            "Complete spectral-region classifications that work for every matrix size are exceptionally rare. The full row-stochastic class is covered by Karpelevič’s theorem; among structured subclasses, the principal all-dimensional example I knew was Kirkland’s classification for row-stochastic Leslie matrices. That scarcity made an all-n cycle result particularly attractive.",
          citations: ["ams-translations-1988", "kirkland-leslie-1992"],
        },
        {
          text:
            "I now do my postdoctoral research with Vincent Ginis. Working together, we turned to n-cycle stochastic matrices. The resulting paper determines the complete spectral region for every cycle length. Its proof is independent of the Karpelevič theorem, but roots of unity, exposed boundary pieces, argument coordinates, and questions of visibility were already central.",
          citations: ["n-cycle-2026"],
        },
      ],
    },
    {
      number: "V",
      era: "June–July 2026",
      label: "Boundary equations become matrices",
      title: "From arcs to realizing matrices",
      paragraphs: [
        {
          text:
            "The work of Stephen Kirkland and Helena Šmigoc brought another question into focus. It is one thing to know a polynomial equation describing a boundary arc; it is another to understand the stochastic matrices that realize that polynomial.",
          citations: ["kirkland-smigoc-2022"],
        },
        {
          text:
            "Vincent and I studied the Type III and Type II reduced Ito families separately. The Type III paper resolves the Kirkland–Šmigoc realization conjecture over the full nonzero parameter range. The Type II paper classifies the corresponding non-degenerate full-degree realizing stochastic matrices. These projects forced us to examine cycles, allowed transitions, weights, and the way local pieces combine into a global characteristic polynomial.",
          citations: ["type-three-2026", "type-two-2026"],
        },
      ],
    },
  ] satisfies readonly JourneyChapter[],
  workingPaper: {
    label: "New region of interest",
    title: "Another interesting family",
    paragraphs: [
      {
        text:
          "Another interesting family emerged from the Type II work: two-layer renewal stochastic matrices. For every q ≥ 2, this family consists of 2q × 2q stochastic matrices formed by coupling two renewal chains and allowing all renewal parameters and probability vectors to vary.",
        citations: ["two-layer-2026"],
      },
      {
        text:
          "The working paper develops a complete description of the spectral region of this entire structured family—not merely a selection of numerical examples. Its boundary is selected through Farey arithmetic and contact with power polygons, while a radial-filling argument recovers the complete region below that boundary.",
        citations: ["two-layer-2026"],
      },
      {
        text:
          "This was a useful intermediate laboratory: much smaller than the class of all stochastic matrices, but rich enough for mechanisms that later appear in the invariant-polygon paper to become visible.",
        citations: ["critical-polygons-2026"],
      },
    ],
  },
  returnChapter: {
    number: "VI",
    era: "July 2026",
    label: "The classical problem revisited",
    title: "Returning to Karpelevič",
    paragraphs: [
      {
        text:
          "By then, the theorem no longer looked like a single impenetrable proof. It looked like a meeting point of several ideas we had encountered separately: structured stochastic families, cyclic supports and return patterns, roots of unity, boundary realization, radial extremality, and polygonal contact under multiplication by an eigenvalue.",
        citations: ["n-cycle-2026", "type-three-2026", "type-two-2026"],
      },
      {
        text:
          "The decisive change was to look at the problem through invariant polygons. Instead of beginning with the classical boundary equations, Vincent and I asked what an extremal eigenvalue forces an invariant polygon to do. Contact, return structure, and cyclic order then offered a route from geometry to the boundary of the Karpelevič region in Ito’s formulation.",
        citations: ["critical-polygons-2026"],
      },
      {
        text:
          "I did not arrive at this problem through a single moment of inspiration. I approached it through other people’s questions, smaller matrix families, computational experiments, and a growing willingness to reconsider what might be possible.",
        citations: [],
      },
    ],
  } satisfies JourneyChapter,
  sourceNote:
    "These are the works mentioned in this personal account. The longer historical and mathematical bibliography belongs on the History and Paper pages.",
} as const;
