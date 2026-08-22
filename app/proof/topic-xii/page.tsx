import { permanentRedirect } from "next/navigation";
import { sitePath } from "../../lib/site-path";

export default function TopicXIIPage() {
  permanentRedirect(sitePath("/proof/topic-xii/a/"));
}
