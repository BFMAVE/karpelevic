import { redirect } from "next/navigation";
import { sitePath } from "../../../lib/site-path";

export default function TopicVILegacyPartBPage() {
  redirect(sitePath("/proof/topic-vi/#lem:deformation-admissibility"));
}
