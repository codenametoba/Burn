import Image from "next/image";
import Link from "next/link";
import { ArrowDown, CalendarCheck, Clock, Flame, GlassWater, MapPin } from "lucide-react";
import { EditorialImage } from "@/components/EditorialImage";
import { ExperienceSelector } from "@/components/ExperienceSelector";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { imageSet, venue } from "@/lib/constants";
import { getEvents, getHomepage, getMenu, getSpecials } from "@/lib/cms";

export default async function Home() {
  const [homepage, menuCategories, weeklySpecials, events] = await Promise.all([getHomepage(), getMenu(), getSpecials(), getEvents()]);
  const today = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" }).format(new Date());
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden px-6 pt-32">
        <Image src={homepage.heroImage} alt="Craft cocktails and smoke-lit lounge atmosphere" fill priority sizes="100vw" className="object-cover opacity-48" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#100D0B_0%,rgba(16,13,11,.72)_42%,rgba(16,13,11,.2)_100%)]" />
        <div className="smoke-field" />
        <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-end pb-14">
          <p className="font-display mb-5 text-sm uppercase tracking-[0.36em] text-[#B48A52]">110 S Meridian · Downtown Indianapolis</p>
          <h1 className="font-display text-7xl font-semibold uppercase leading-[0.82] md:text-[12rem]">{homepage.heroHeadline.split("\n").map((line) => <span className="block" key={line}>{line}</span>)}</h1>
          <p className="mt-7 max-w-xl text-xl text-[#EAE2D5]">{homepage.heroSubheadline}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="focus-ring border border-[#B48A52] bg-[#B48A52]/10 px-6 py-4 font-display text-xl uppercase tracking-[0.16em] transition hover:border-[#D8642A] hover:text-[#D8642A]">Reserve a table</Link>
            <Link href="/experience" className="focus-ring border border-[#EAE2D5]/20 px-6 py-4 font-display text-xl uppercase tracking-[0.16em] transition hover:border-[#D8642A]">Explore BURN</Link>
          </div>
          <a href="#enter" className="focus-ring mt-12 inline-flex w-fit items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#A79E94]"><ArrowDown size={16} /> Scroll to enter</a>
        </div>
      </section>

      <section id="enter" className="paper-grain overflow-hidden bg-[#100D0B] px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.1fr_0.7fr] md:items-center">
          <Reveal>
            <p className="font-display text-7xl font-semibold uppercase leading-[0.86] md:text-[10rem]">Not just a cigar lounge.</p>
            <p className="font-editorial mt-7 max-w-3xl text-4xl italic text-[#B48A52]">An evening worth lingering over.</p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#A79E94]">{homepage.featuredExperience}</p>
          </Reveal>
          <EditorialImage src={imageSet.cigar} alt="Cigar smoke in warm evening light" className="min-h-[34rem]" />
        </div>
      </section>

      <section className="bg-[#211713] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro number="00" label="Tonight" title="Tonight at BURN" copy="A living snapshot for hours, specials, pairings, entertainment, and reservations." />
          <div className="grid border border-[#B48A52]/25 md:grid-cols-5">
            <div className="bg-[#100D0B] p-6 md:col-span-2">
              <p className="font-display text-xl uppercase tracking-[0.2em] text-[#B48A52]">{today}</p>
              <h2 className="font-display mt-8 text-7xl uppercase leading-none">Open</h2>
              <p className="mt-3 text-2xl text-[#EAE2D5]">4 PM - 2 AM</p>
            </div>
            <div className="grid gap-0 md:col-span-3 md:grid-cols-3">
              {[
                ["Tonight", homepage.tonight.special],
                ["Featured", homepage.tonight.featured],
                ["Music", homepage.tonight.event]
              ].map(([label, value]) => (
                <div key={label} className="border-t border-[#B48A52]/20 p-6 md:border-l md:border-t-0">
                  <p className="font-display text-sm uppercase tracking-[0.22em] text-[#B48A52]">{label}</p>
                  <p className="mt-6 text-2xl leading-tight">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <Link href="/contact" className="focus-ring mt-6 inline-flex items-center gap-2 font-display text-2xl uppercase tracking-[0.14em] text-[#D8642A]"><Flame size={18} /> Make tonight BURN</Link>
        </div>
      </section>

      <section className="bg-[#100D0B] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_0.8fr] md:items-center">
          <div className="relative">
            <EditorialImage src={imageSet.lounge} alt="Upscale lounge seating at night" className="min-h-[42rem]" />
            <EditorialImage src={imageSet.cocktail} alt="Cocktail detail" className="absolute -bottom-10 right-0 hidden min-h-[16rem] w-64 md:block" />
          </div>
          <Reveal>
            <p className="font-display text-sm uppercase tracking-[0.32em] text-[#B48A52]">01 / Experience</p>
            <h2 className="font-display mt-5 text-6xl font-semibold uppercase leading-[0.9] md:text-8xl">Come for the cigar.<br />Stay for the night.</h2>
            <p className="mt-8 text-lg leading-8 text-[#A79E94]">Settle into green-lit corners, full-service bars, curated cigars, polished cocktails, music, and a crowd that knows how to make a weeknight feel deliberate.</p>
            <Link href="/experience" className="focus-ring mt-8 inline-flex border border-[#B48A52]/60 px-6 py-4 font-display text-xl uppercase tracking-[0.16em] hover:border-[#D8642A]">Discover the experience</Link>
          </Reveal>
        </div>
      </section>

      <ExperienceSelector />

      <section className="bg-[linear-gradient(180deg,#123B2E_0%,#211713_44%,#541E22_100%)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro number="02" label="Menu" title="Pour. Pair. Repeat." copy="An elegant preview of cocktails, whiskey, small plates, and cigars, with every item ready to be managed in Sanity." />
          <div className="grid gap-6 md:grid-cols-2">
            {menuCategories.map((category) => (
              <div key={category.title} className="border-y border-[#B48A52]/25 py-6">
                <h3 className="font-display text-4xl uppercase">{category.title}</h3>
                <div className="mt-7 space-y-6">
                  {category.items.slice(0, 2).map((item) => (
                    <div key={item.name} className="grid grid-cols-[1fr_auto] gap-4">
                      <div>
                        <p className="text-xl text-[#EAE2D5]">{item.name}</p>
                        <p className="mt-1 text-sm text-[#A79E94]">{item.description}</p>
                      </div>
                      <p className="font-display text-xl text-[#B48A52]">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link href="/menu" className="focus-ring mt-10 inline-flex border border-[#B48A52]/60 px-6 py-4 font-display text-xl uppercase tracking-[0.16em] hover:border-[#D8642A]">View the full menu</Link>
        </div>
      </section>

      <section className="bg-[#100D0B] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro number="03" label="Specials" title="Every night has a reason." />
          <div className="grid gap-px bg-[#B48A52]/20 md:grid-cols-7">
            {weeklySpecials.map((special) => (
              <div className="bg-[#100D0B] p-5" key={special.day}>
                <p className="font-display text-4xl uppercase text-[#D8642A]">{special.day}</p>
                <h3 className="mt-7 font-display text-2xl uppercase">{special.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#A79E94]">{special.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#211713] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro number="04" label="Events" title="What's burning" />
          <div className="grid gap-4 md:grid-cols-3">
            {events.map((event, index) => (
              <Link href={`/events#${event.slug}`} key={event.slug} className={`focus-ring group relative min-h-[28rem] overflow-hidden border border-[#B48A52]/20 ${index === 0 ? "md:col-span-2" : ""}`}>
                <Image src={event.image} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-55 transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#100D0B] via-[#100D0B]/35 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <p className="font-display text-sm uppercase tracking-[0.22em] text-[#B48A52]">{event.category} · {event.time}</p>
                  <h3 className="font-display mt-4 text-5xl uppercase leading-none">{event.title}</h3>
                  <p className="mt-4 max-w-xl text-[#A79E94]">{event.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/events" className="focus-ring mt-10 inline-flex border border-[#B48A52]/60 px-6 py-4 font-display text-xl uppercase tracking-[0.16em] hover:border-[#D8642A]">View all events</Link>
        </div>
      </section>

      <section className="bg-[#100D0B] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.32em] text-[#B48A52]">05 / Humidor</p>
            <h2 className="font-display mt-5 text-7xl uppercase leading-[0.84] md:text-9xl">The collection humidor.</h2>
            <p className="mt-7 text-lg leading-8 text-[#A79E94]">Hundreds of premium hand-rolled cigars, curated for discovery rather than online checkout.</p>
            <Link href="/humidor" className="focus-ring mt-8 inline-flex border border-[#B48A52]/60 px-6 py-4 font-display text-xl uppercase tracking-[0.16em] hover:border-[#D8642A]">Enter the humidor</Link>
          </div>
          <EditorialImage src={imageSet.humidor} alt="Warm humidor lighting and cigar collection" className="min-h-[42rem]" />
        </div>
      </section>

      <section className="bg-[#211713] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          {["Private-room celebrations", "Curated Instagram-style imagery", "Selected editorial reviews"].map((title, index) => (
            <div key={title} className="border-l border-[#B48A52]/40 pl-6">
              <p className="font-display text-sm text-[#D8642A]">{String(index + 6).padStart(2, "0")}</p>
              <h2 className="font-display mt-5 text-4xl uppercase leading-none">{title}</h2>
              <p className="mt-5 text-[#A79E94]">The final pages turn the venue into a complete evening: VIP, membership, gallery, visit details, journal, careers, and conversion paths.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
