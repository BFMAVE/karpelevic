import { CurrentProofChapter, readerMetadata } from "../../components/proof/CurrentProofChapter";

export const metadata = readerMetadata(6);

export default function TopicPage() {
  return <CurrentProofChapter number={6} />;
}
