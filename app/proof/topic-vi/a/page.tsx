import { redirect } from "next/navigation";
import { sitePath } from "../../../lib/site-path";

export default function TopicVILegacyPartAPage() {
  redirect(sitePath("/proof/topic-vi/#lem:holonomy-calibration"));
}
