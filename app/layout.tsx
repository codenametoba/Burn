import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-barlow" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-cormorant" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BURN by Rocky Patel Indianapolis | Premium Cigar & Cocktail Lounge",
    template: "%s | BURN Indianapolis"
  },
  description:
    "BURN by Rocky Patel Indianapolis is a premium cigar lounge, cocktail bar, humidor, VIP venue, and downtown Indianapolis nightlife destination.",
  keywords: [
    "cigar lounge Indianapolis",
    "premium cigar lounge Indianapolis",
    "cigar bar Indianapolis",
    "cocktail lounge Indianapolis",
    "downtown Indianapolis nightlife",
    "Rocky Patel Indianapolis",
    "BURN Indianapolis",
    "Indianapolis cigar bar"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "BURN by Rocky Patel Indianapolis",
    description: "Premium cigars. Crafted cocktails. Elevated nights in downtown Indianapolis.",
    url: "/",
    siteName: "BURN Indianapolis",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "BURN Indianapolis Ember After Dark" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "BURN by Rocky Patel Indianapolis",
    description: "Premium cigars. Crafted cocktails. Elevated nights."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#100D0B"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning className={`${inter.variable} ${barlow.variable} ${cormorant.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
