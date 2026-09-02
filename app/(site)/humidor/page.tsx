import { PageHero } from "@/components/PageHero";
import { EditorialImage } from "@/components/EditorialImage";
import { imageSet } from "@/lib/constants";
import { getCigars } from "@/lib/cms";

export const metadata = {
  title: "Humidor",
  description: "Discover the BURN Indianapolis humidor, premium cigar collection, cigar filters, and cigar of the month."
};

export default async function HumidorPage() {
  const cigars = await getCigars();
  return (
    <main>
      <PageHero eyebrow="04 / Humidor" title="The collection humidor." copy="Hundreds of premium cigars. One carefully curated collection for in-person discovery." image={imageSet.humidor} />
      <section className="bg-[#100D0B] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap gap-3">
            {["Brand", "Strength", "Origin", "Wrapper", "Format"].map((filter) => <button className="focus-ring border border-[#B48A52]/35 px-4 py-2 text-sm uppercase tracking-[0.16em] text-[#A79E94] hover:border-[#D8642A]" key={filter}>{filter}</button>)}
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {cigars.map((cigar) => (
              <article key={`${cigar.brand}-${cigar.name}`} className="border border-[#B48A52]/20 bg-[#211713]/55 p-5">
                <p className="font-display text-sm uppercase tracking-[0.18em] text-[#B48A52]">{cigar.brand}</p>
                <h2 className="font-display mt-4 text-4xl uppercase leading-none">{cigar.name}</h2>
                <dl className="mt-7 space-y-3 text-sm text-[#A79E94]">
                  <div><dt className="text-[#EAE2D5]">Origin</dt><dd>{cigar.origin}</dd></div>
                  <div><dt className="text-[#EAE2D5]">Wrapper</dt><dd>{cigar.wrapper}</dd></div>
                  <div><dt className="text-[#EAE2D5]">Strength</dt><dd>{cigar.strength}</dd></div>
                </dl>
                <p className="mt-5 text-sm leading-6 text-[#A79E94]">{cigar.notes}</p>
              </article>
            ))}
          </div>
          <div className="mt-20 grid gap-10 md:grid-cols-2 md:items-center">
            <EditorialImage src={imageSet.cigar} alt="Cigar of the month detail" />
            <div>
              <p className="font-display text-sm uppercase tracking-[0.3em] text-[#B48A52]">Cigar of the Month</p>
              <h2 className="font-display mt-5 text-7xl uppercase leading-none">Rocky Patel Emerald</h2>
              <p className="mt-6 text-lg leading-8 text-[#A79E94]">Cream, toasted almond, citrus peel, and a recommended pairing with Woodford Reserve Double Oaked.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
