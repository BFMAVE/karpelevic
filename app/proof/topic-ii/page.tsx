import { CurrentProofChapter, readerMetadata } from "../../components/proof/CurrentProofChapter";

export const metadata = readerMetadata(2);

export default function TopicPage() {
  return <CurrentProofChapter number={2} />;
}
