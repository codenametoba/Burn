import { ContactForm } from "@/components/InquiryForms";
import { PageHero } from "@/components/PageHero";
import { imageSet, venue } from "@/lib/constants";

export const metadata = {
  title: "Contact",
  description: "Contact BURN Indianapolis for reservations, VIP requests, membership inquiries, and private event questions."
};

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="10 / Contact" title="Reserve the night." copy="Tables, VIP, membership, private events, and general questions all begin here." image={imageSet.table} />
      <section className="bg-[#100D0B] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <h2 className="font-display text-6xl uppercase leading-none">Downtown Indianapolis</h2>
            <p className="mt-6 text-[#A79E94]">{venue.address}<br />{venue.cityState}</p>
            <p className="mt-6 text-2xl">{venue.phone}</p>
            <p className="mt-2 text-[#B48A52]">{venue.email}</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
