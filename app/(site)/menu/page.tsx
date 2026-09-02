import { GlassWater } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { imageSet } from "@/lib/constants";
import { getMenu } from "@/lib/cms";

export const metadata = {
  title: "Menu",
  description: "Explore cocktails, whiskey, bourbon, small plates, and cigar selections at BURN Indianapolis."
};

export default async function MenuPage() {
  const menuCategories = await getMenu();
  return (
    <main>
      <PageHero eyebrow="02 / Menu" title="Pour. Pair. Repeat." copy="Cocktails, whiskey, tequila, small plates, and premium cigars for nights that keep unfolding." image={imageSet.whiskey} />
      <section className="bg-[#100D0B] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[18rem_1fr]">
          <aside className="top-28 h-fit border-l border-[#B48A52]/40 pl-5 lg:sticky">
            {menuCategories.map((category) => (
              <a key={category.title} href={`#${category.title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`} className="focus-ring block py-3 font-display text-2xl uppercase text-[#A79E94] hover:text-[#D8642A]">{category.title}</a>
            ))}
          </aside>
          <div className="space-y-16">
            {menuCategories.map((category) => (
              <section id={category.title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")} key={category.title}>
                <h2 className="font-display text-6xl uppercase leading-none">{category.title}</h2>
                <div className="mt-8 grid gap-5">
                  {category.items.map((item) => (
                    <article key={item.name} className="grid gap-4 border-y border-[#B48A52]/20 py-6 md:grid-cols-[1fr_auto]">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl">{item.name}</h3>
                          {item.featured ? <span className="inline-flex items-center gap-1 border border-[#D8642A]/50 px-2 py-1 text-xs uppercase tracking-[0.16em] text-[#D8642A]"><GlassWater size={13} /> Featured</span> : null}
                        </div>
                        <p className="mt-2 text-[#A79E94]">{item.description}</p>
                      </div>
                      <p className="font-display text-3xl text-[#B48A52]">{item.price}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
