import Image from "next/image";
import Link from "next/link";
import { CalendarPlus, Share2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { imageSet } from "@/lib/constants";
import { getEvents } from "@/lib/cms";

export const metadata = {
  title: "Events",
  description: "Live music, tastings, cigar events, sports nights, DJ nights, and private events at BURN Indianapolis."
};

export default async function EventsPage() {
  const events = await getEvents();
  return (
    <main>
      <PageHero eyebrow="03 / Events" title="What's burning." copy="Large-format event stories for music, pairings, tastings, sports, private gatherings, and nights worth planning around." image={imageSet.table} />
      <section className="bg-[#100D0B] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-6">
          {events.map((event, index) => (
            <article id={event.slug} key={event.slug} className={`grid overflow-hidden border border-[#B48A52]/20 md:grid-cols-2 ${index % 2 ? "" : "md:[&>*:first-child]:order-2"}`}>
              <div className="relative min-h-[24rem]">
                <Image src={event.image} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="flex flex-col justify-center bg-[#211713] p-8 md:p-12">
                <p className="font-display text-sm uppercase tracking-[0.24em] text-[#B48A52]">{event.category} · {event.date} · {event.time}</p>
                <h2 className="font-display mt-5 text-6xl uppercase leading-none">{event.title}</h2>
                <p className="mt-6 text-lg leading-8 text-[#A79E94]">{event.description}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact" className="focus-ring border border-[#B48A52]/60 px-5 py-3 font-display text-lg uppercase tracking-[0.14em] hover:border-[#D8642A]">Reserve</Link>
                  <button className="focus-ring inline-flex items-center gap-2 border border-[#EAE2D5]/15 px-5 py-3 text-sm uppercase tracking-[0.14em] text-[#A79E94]"><CalendarPlus size={16} /> Calendar</button>
                  <button className="focus-ring inline-flex items-center gap-2 border border-[#EAE2D5]/15 px-5 py-3 text-sm uppercase tracking-[0.14em] text-[#A79E94]"><Share2 size={16} /> Share</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
