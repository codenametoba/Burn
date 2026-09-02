import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { imageSet } from "@/lib/constants";

export const metadata = {
  title: "Careers",
  description: "Join the BURN Indianapolis team across management, general staff, and bar staff opportunities."
};

export default function CareersPage() {
  return (
    <main>
      <PageHero eyebrow="11 / Careers" title="Join the BURN family." copy="Hospitality, bar service, guest experience, and leadership roles for a downtown Indianapolis destination." image={imageSet.lounge} />
      <section className="bg-[#100D0B] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {["Management Opportunities", "General Staff", "Bar Staff"].map((role) => (
            <article className="border border-[#B48A52]/20 bg-[#211713]/55 p-7" key={role}>
              <h2 className="font-display text-4xl uppercase leading-none">{role}</h2>
              <p className="mt-5 text-[#A79E94]">Join a polished hospitality team built around service, pace, atmosphere, and memorable downtown nights.</p>
              <Link className="focus-ring mt-8 inline-flex border border-[#B48A52]/60 px-5 py-3 font-display text-lg uppercase tracking-[0.14em] hover:border-[#D8642A]" href="/contact">Apply</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
