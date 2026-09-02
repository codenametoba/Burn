import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { imageSet } from "@/lib/constants";
import { getArticles } from "@/lib/cms";

export const metadata = {
  title: "The BURN Journal",
  description: "Luxury magazine-style stories about cigars, cocktails, events, Indianapolis culture, and Rocky Patel."
};

export default async function NewsPage() {
  const articles = await getArticles();
  return (
    <main>
      <PageHero eyebrow="09 / Journal" title="The BURN Journal." copy="Cigars, cocktails, events, Indianapolis, culture, and Rocky Patel stories with a magazine rhythm." image={imageSet.whiskey} />
      <section className="bg-[#100D0B] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <Link className="focus-ring border-y border-[#B48A52]/25 py-8 hover:text-[#D8642A]" href={`/news/${article.slug}`} key={article.slug}>
              <p className="font-display text-sm uppercase tracking-[0.18em] text-[#B48A52]">{article.category} · {article.date}</p>
              <h2 className="font-display mt-5 text-5xl uppercase leading-none">{article.title}</h2>
              <p className="mt-5 text-[#A79E94]">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
