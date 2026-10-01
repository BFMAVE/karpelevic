import { CurrentProofChapter, readerMetadata } from "../../components/proof/CurrentProofChapter";

export const metadata = readerMetadata(7);

export default function TopicPage() {
  return <CurrentProofChapter number={7} />;
}
