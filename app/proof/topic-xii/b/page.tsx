import { permanentRedirect } from "next/navigation";
import { sitePath } from "../../../lib/site-path";

export default function LegacyTopicXIIBPage() {
  permanentRedirect(sitePath("/proof/topic-xii/#karp:lem:nesting-case-split"));
}
