import { Gem, Users, Wine } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { VipInquiryForm } from "@/components/InquiryForms";
import { imageSet } from "@/lib/constants";

export const metadata = {
  title: "VIP",
  description: "Request VIP seating, private gatherings, celebrations, and group booking experiences at BURN Indianapolis."
};

export default function VipPage() {
  return (
    <main>
      <PageHero eyebrow="05 / VIP" title="Your night. Your room." copy="VIP seating, celebrations, corporate gatherings, birthdays, bachelor parties, bottle service where available, and private hospitality." image={imageSet.table} />
      <section className="bg-[#100D0B] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-[#B48A52]">Private Events</p>
            <h2 className="font-display mt-5 text-6xl uppercase leading-none">Designed for arrivals, toasts, and second rounds.</h2>
            <div className="mt-10 grid gap-5">
              {[
                [Gem, "Premium table experiences"],
                [Wine, "Cocktail and cigar pairing support"],
                [Users, "Birthdays, corporate nights, celebrations"]
              ].map(([Icon, text]) => (
                <div className="flex items-center gap-4 border-l border-[#B48A52]/40 pl-5 text-[#A79E94]" key={String(text)}>
                  <Icon className="text-[#D8642A]" size={22} />
                  <span>{String(text)}</span>
                </div>
              ))}
            </div>
          </div>
          <VipInquiryForm />
        </div>
      </section>
    </main>
  );
}
