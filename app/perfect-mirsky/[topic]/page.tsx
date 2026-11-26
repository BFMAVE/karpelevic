import { notFound } from "next/navigation";
import { mirskyTopics } from "../../data/perfect-mirsky";
import { MirskyChapter, mirskyMetadata } from "../chapter";

const slugs = mirskyTopics.map(({ numeral }) => "topic-" + numeral.toLowerCase());

export function generateStaticParams() {
  return slugs.map((topic) => ({ topic }));
}

type Props = { params: Promise<{ topic: string }> };

export async function generateMetadata({ params }: Props) {
  const index = slugs.indexOf((await params).topic);
  if (index < 0) notFound();
  return mirskyMetadata(index);
}

export default async function PerfectMirskyTopicPage({ params }: Props) {
  const index = slugs.indexOf((await params).topic);
  if (index < 0) notFound();
  return <MirskyChapter index={index} />;
}
