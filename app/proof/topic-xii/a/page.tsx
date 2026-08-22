import { permanentRedirect } from "next/navigation";
import { sitePath } from "../../../lib/site-path";

export default function LegacyTopicXIIAPage() {
  permanentRedirect(sitePath("/proof/topic-xii/"));
}
