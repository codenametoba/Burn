import { GalleryLightbox } from "@/components/GalleryLightbox";
import { PageHero } from "@/components/PageHero";
import { imageSet } from "@/lib/constants";
import { getGallery } from "@/lib/cms";

export const metadata = {
  title: "Gallery",
  description: "Explore the BURN Indianapolis lounge, cocktails, cigars, events, humidor, and detail photography."
};

export default async function GalleryPage() {
  const gallery = await getGallery();
  return (
    <main>
      <PageHero eyebrow="07 / Gallery" title="Seen at BURN." copy="An editorial masonry gallery for lounge, cocktail, cigar, event, guest, humidor, and detail photography." image={imageSet.detail} />
      <section className="bg-[#100D0B] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <GalleryLightbox items={gallery} />
        </div>
      </section>
    </main>
  );
}
