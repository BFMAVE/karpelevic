import { CurrentProofChapter, readerMetadata } from "../../components/proof/CurrentProofChapter";

export const metadata = readerMetadata(11);

export default function TopicPage() {
  return <CurrentProofChapter number={11} />;
}
