import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { imageSet } from "@/lib/constants";
import { getArticle } from "@/lib/cms";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);
  return article ? { title: article.title, description: article.excerpt } : {};
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();
  return (
    <main>
      <PageHero eyebrow={`${article.category} / ${article.date}`} title={article.title} copy={article.excerpt} image={article.image || imageSet.cigar} />
      <article className="bg-[#100D0B] px-6 py-24">
        <div className="mx-auto max-w-3xl text-lg leading-9 text-[#A79E94]">
          <p>BURN Indianapolis treats the evening as a sequence: arrival, first pour, cigar selection, conversation, music, and one more reason to stay.</p>
          <p className="mt-8">Inside the journal, BURN shares cigar notes, cocktail pairings, event recaps, Rocky Patel releases, and downtown Indianapolis culture stories.</p>
        </div>
      </article>
    </main>
  );
}
