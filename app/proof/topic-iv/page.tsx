import type { Metadata } from "next";
import { ProofChapterShell } from "../../components/proof/ProofChapterShell";
import { ProofSourceShelf } from "../../components/proof/ProofSourceShelf";
import {
  TopicIVChapter,
  topicIVSourceIds,
} from "../../data/proof-topics/topic-iv";
import { getPageTimestamp } from "../../lib/git-dates";

export const metadata: Metadata = {
  title: "Topic IV — From Endpoint Order to One Interval of Relative-Interior Contacts",
  description:
    "A complete, illustrated account of consistent half-open contact assignment, exact vertex replacement, permitted updates of a cyclic index set, and reduction to one interval of relative-interior contacts.",
};

const updatedAt = getPageTimestamp("app/data/proof-topics/topic-iv.tsx");

export default function TopicIVPage() {
  return (
    <ProofChapterShell
      routeKey="topic-iv"
      updatedAt={updatedAt}
      overview={[
        "The boundary-interval bound from Topic III and a finite endpoint count select one consistent half-open orientation. Cyclic order turns the global contact assignment into a single shift κ, while lifted angles encode that shift without hidden multiples of 2π.",
        "An exact vertex replacement then realizes one permitted update of the subset S, and finite induction realizes every permitted finite update sequence. Among the sets obtained by finitely many such updates, a lexicographically minimal one reduces to one cyclic interval. Source notes identify Karpelevič’s antecedent arguments and state precisely what is proved on this page.",
      ]}
      stats={[
        { value: 5, label: "selection results" },
        { value: 5, label: "contact-reduction results" },
      ]}
    >
      <TopicIVChapter />
      <ProofSourceShelf sourceIds={topicIVSourceIds} headingId="topic-iv-sources" heading="References" />
    </ProofChapterShell>
  );
}
