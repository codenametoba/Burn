import { Accessibility, Landmark, MapPinned, Shirt } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { imageSet, venue } from "@/lib/constants";

export const metadata = {
  title: "Visit",
  description: "Find BURN Indianapolis at 110 S Meridian St, including hours, directions, parking, dress code, and venue information."
};

export default function VisitPage() {
  return (
    <main>
      <PageHero eyebrow="08 / Visit" title="Find your way to BURN." copy="In the heart of Indy, close to downtown entertainment, sporting venues, hotels, and the rhythm of Meridian Street." image={imageSet.city} />
      <section className="bg-[#100D0B] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-6xl uppercase leading-none">110 S Meridian St</h2>
            <p className="mt-4 text-2xl text-[#B48A52]">{venue.cityState}</p>
            <p className="mt-6 text-xl">{venue.phone}</p>
            <div className="mt-8 space-y-3 text-[#A79E94]">
              {venue.hours.map((hour) => <p key={hour.label}>{hour.label}: {hour.value}</p>)}
            </div>
          </div>
          <div className="min-h-[28rem] overflow-hidden border border-[#B48A52]/20 bg-[#211713]">
            <iframe title="Map to BURN Indianapolis" src="https://www.google.com/maps?q=110%20S%20Meridian%20St%20Indianapolis%20IN%2046204&output=embed" className="h-full min-h-[28rem] w-full grayscale invert-[.85]"></iframe>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl gap-5 md:grid-cols-4">
          {[
            [MapPinned, "Parking", "Nearby garages and street parking serve the Meridian Street corridor."],
            [Landmark, "Landmarks", "A short downtown walk from entertainment, dining, and sporting venues."],
            [Shirt, "Dress", "Appropriate, tasteful attire is required. No excessively ripped clothing."],
            [Accessibility, "Access", "Call ahead for accessibility questions or specific accommodation needs."]
          ].map(([Icon, title, copy]) => (
            <article className="border-l border-[#B48A52]/40 pl-5" key={String(title)}>
              <Icon className="text-[#D8642A]" size={22} />
              <h2 className="font-display mt-5 text-3xl uppercase">{String(title)}</h2>
              <p className="mt-3 text-sm leading-6 text-[#A79E94]">{String(copy)}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
