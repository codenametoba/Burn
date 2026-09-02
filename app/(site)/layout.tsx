import Script from "next/script";
import { venue } from "@/lib/constants";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReserveBar } from "@/components/ReserveBar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    name: "BURN by Rocky Patel Indianapolis",
    description: "Premium cigar lounge, cocktail bar, humidor, VIP venue, and downtown Indianapolis nightlife destination.",
    telephone: venue.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: venue.address,
      addressLocality: "Indianapolis",
      addressRegion: "IN",
      postalCode: "46204",
      addressCountry: "US"
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "16:00", closes: "02:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "16:00", closes: "00:00" }
    ],
    servesCuisine: "Cocktails, premium spirits, cigars, small plates",
    priceRange: "$$$"
  };

  return (
    <>
      <Script id="burn-local-business" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <Header />
      {children}
      <Footer />
      <ReserveBar />
    </>
  );
}
