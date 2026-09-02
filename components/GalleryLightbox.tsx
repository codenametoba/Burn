"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";
import { venueImages } from "@/lib/constants";

const fallbackGallery = venueImages;

type GalleryItem = {
  src: string;
  category: string;
  caption?: string;
};

export function GalleryLightbox({ items = fallbackGallery }: { items?: GalleryItem[] }) {
  const gallery = items.map((item, index) => ({
    ...item,
    span: index === 0 ? "md:col-span-2 md:row-span-2" : index === 3 ? "md:col-span-2" : ""
  }));
  const [active, setActive] = useState<(typeof gallery)[number] | null>(null);
  return (
    <>
      <div className="grid auto-rows-[18rem] gap-3 md:grid-cols-4">
        {gallery.map((item) => (
          <button key={item.src} onClick={() => setActive(item)} className={`focus-ring group relative overflow-hidden text-left ${item.span}`}>
            <Image src={item.src} alt={`${item.category} at BURN Indianapolis`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
            <span className="absolute bottom-4 left-4 bg-[#100D0B]/80 px-3 py-2 font-display text-xl uppercase tracking-[0.12em] text-[#EAE2D5]">{item.category}</span>
          </button>
        ))}
      </div>
      {active ? (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-[#100D0B]/94 p-4" role="dialog" aria-modal="true">
          <button className="focus-ring absolute right-5 top-5 flex h-12 w-12 items-center justify-center border border-[#EAE2D5]/20" onClick={() => setActive(null)} aria-label="Close gallery image">
            <X />
          </button>
          <div className="relative h-[78vh] w-full max-w-5xl">
            <Image src={active.src} alt={`${active.category} at BURN Indianapolis`} fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      ) : null}
    </>
  );
}
