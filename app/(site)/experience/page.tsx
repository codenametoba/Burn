import Link from "next/link";
import { EditorialImage } from "@/components/EditorialImage";
import { ExperienceSelector } from "@/components/ExperienceSelector";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { imageSet } from "@/lib/constants";

export const metadata = {
  title: "Experience",
  description: "Explore the BURN Indianapolis lounge experience: premium cigars, cocktails, music, service, and downtown nightlife."
};

export default function ExperiencePage() {
  return (
    <main>
      <PageHero eyebrow="01 / Experience" title="Come for the cigar. Stay for the night." copy="A modern luxury social club where the bar, humidor, music, and room all move at the pace of a good conversation." image={imageSet.lounge} />
      <section className="bg-[#100D0B] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <EditorialImage src={imageSet.cocktail} alt="Craft cocktail poured over ice" />
          <div>
            <SectionIntro number="01" label="The Room" title="Emerald light. Warm leather. A slower kind of night." />
            <p className="text-lg leading-8 text-[#A79E94]">BURN Indianapolis is built for the whole evening: arrive for a cocktail, choose a cigar, settle into the room, and let the night stretch. It is energetic after dark without becoming a nightclub, polished without feeling stiff.</p>
            <Link href="/contact" className="focus-ring mt-8 inline-flex border border-[#B48A52]/60 px-6 py-4 font-display text-xl uppercase tracking-[0.16em] hover:border-[#D8642A]">Reserve</Link>
          </div>
        </div>
      </section>
      <ExperienceSelector />
    </main>
  );
}
