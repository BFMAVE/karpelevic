import { CurrentProofChapter, readerMetadata } from "../../components/proof/CurrentProofChapter";

export const metadata = readerMetadata(4);

export default function TopicPage() {
  return <CurrentProofChapter number={4} />;
}
