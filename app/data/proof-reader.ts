import { proofTopics } from "./proof";

export type ProofReaderPart = {
  label: "A" | "B";
  title: string;
  href: string;
};

export type ProofReaderRoute = {
  key: string;
  topicNumber: number;
  part?: "A" | "B";
  href: string;
  title: string;
  shortTitle: string;
};

const topicTitle = (topicNumber: number): string =>
  proofTopics[topicNumber - 1]?.title ?? `Topic ${topicNumber}`;

export const proofReaderRoutes: readonly ProofReaderRoute[] = [
  {
    key: "topic-i",
    topicNumber: 1,
    href: "/proof/",
    title: topicTitle(1),
    shortTitle: "Critical polygons",
  },
  {
    key: "topic-ii",
    topicNumber: 2,
    href: "/proof/topic-ii/",
    title: topicTitle(2),
    shortTitle: "Active sides",
  },
  {
    key: "topic-iii",
    topicNumber: 3,
    href: "/proof/topic-iii/",
    title: topicTitle(3),
    shortTitle: "Ownership",
  },
  {
    key: "topic-iv",
    topicNumber: 4,
    href: "/proof/topic-iv/",
    title: topicTitle(4),
    shortTitle: "Mutations",
  },
  {
    key: "topic-v",
    topicNumber: 5,
    href: "/proof/topic-v/",
    title: topicTitle(5),
    shortTitle: "Rotation section",
  },
  {
    key: "topic-vi-a",
    topicNumber: 6,
    part: "A",
    href: "/proof/topic-vi/a/",
    title: `${topicTitle(6)} — local projective escape`,
    shortTitle: "Projective escape",
  },
  {
    key: "topic-vi-b",
    topicNumber: 6,
    part: "B",
    href: "/proof/topic-vi/b/",
    title: `${topicTitle(6)} — global admissibility and unit return`,
    shortTitle: "Unit return",
  },
  {
    key: "topic-vii",
    topicNumber: 7,
    href: "/proof/topic-vii/",
    title: topicTitle(7),
    shortTitle: "Farey return",
  },
  {
    key: "topic-viii",
    topicNumber: 8,
    href: "/proof/topic-viii/",
    title: topicTitle(8),
    shortTitle: "Stochastic spectra",
  },
  {
    key: "topic-ix",
    topicNumber: 9,
    href: "/proof/topic-ix/",
    title: topicTitle(9),
    shortTitle: "Candidate boundary",
  },
  {
    key: "topic-x",
    topicNumber: 10,
    href: "/proof/topic-x/",
    title: topicTitle(10),
    shortTitle: "Sharp radius",
  },
  {
    key: "topic-xi",
    topicNumber: 11,
    href: "/proof/topic-xi/",
    title: topicTitle(11),
    shortTitle: "Realization",
  },
  {
    key: "topic-xii-a",
    topicNumber: 12,
    part: "A",
    href: "/proof/topic-xii/a/",
    title: `${topicTitle(12)} — mediants and multiplicity`,
    shortTitle: "Farey refinement",
  },
  {
    key: "topic-xii-b",
    topicNumber: 12,
    part: "B",
    href: "/proof/topic-xii/b/",
    title: `${topicTitle(12)} — exhaustive nesting`,
    shortTitle: "Nesting",
  },
  {
    key: "topic-xiii",
    topicNumber: 13,
    href: "/proof/topic-xiii/",
    title: topicTitle(13),
    shortTitle: "The theorem",
  },
  {
    key: "topic-xiv",
    topicNumber: 14,
    href: "/proof/topic-xiv/",
    title: topicTitle(14),
    shortTitle: "Order seven",
  },
] as const;

export const proofReaderTopicLinks = Array.from(
  { length: proofTopics.length },
  (_, index) => {
    const topicNumber = index + 1;
    const firstRoute = proofReaderRoutes.find(
      (route) => route.topicNumber === topicNumber,
    );
    return {
      topicNumber,
      title: topicTitle(topicNumber),
      href: firstRoute?.href ?? "/proof/",
    };
  },
);

export function getProofReaderRoute(key: string): ProofReaderRoute {
  const route = proofReaderRoutes.find((candidate) => candidate.key === key);
  if (!route) throw new Error(`Unknown proof-reader route: ${key}`);
  return route;
}

export function getProofReaderNeighbours(key: string): {
  previous?: ProofReaderRoute;
  next?: ProofReaderRoute;
} {
  const index = proofReaderRoutes.findIndex((route) => route.key === key);
  if (index < 0) return {};
  return {
    previous: proofReaderRoutes[index - 1],
    next: proofReaderRoutes[index + 1],
  };
}

export function getProofReaderParts(topicNumber: number): readonly ProofReaderPart[] {
  return proofReaderRoutes
    .filter(
      (route): route is ProofReaderRoute & { part: "A" | "B" } =>
        route.topicNumber === topicNumber && route.part !== undefined,
    )
    .map((route) => ({
      label: route.part,
      title: route.title.replace(/^.*?—\s*/, ""),
      href: route.href,
    }));
}

export function toRomanNumeral(number: number): string {
  const numerals: readonly [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let remainder = Math.max(1, Math.trunc(number));
  let result = "";
  for (const [value, numeral] of numerals) {
    while (remainder >= value) {
      result += numeral;
      remainder -= value;
    }
  }
  return result;
}
