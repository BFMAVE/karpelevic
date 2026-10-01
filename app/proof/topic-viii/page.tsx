import { CurrentProofChapter, readerMetadata } from "../../components/proof/CurrentProofChapter";

export const metadata = readerMetadata(8);

export default function TopicPage() {
  return <CurrentProofChapter number={8} />;
}
