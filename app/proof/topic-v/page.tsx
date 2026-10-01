import { CurrentProofChapter, readerMetadata } from "../../components/proof/CurrentProofChapter";

export const metadata = readerMetadata(5);

export default function TopicPage() {
  return <CurrentProofChapter number={5} />;
}
