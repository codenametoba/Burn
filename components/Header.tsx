"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Camera, MapPin, CalendarCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { imageSet, navFull, navPrimary, venue } from "@/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#100D0B]/88 py-3 shadow-2xl shadow-black/20 backdrop-blur-md" : "bg-transparent py-6"
        }`}
      >
        <nav className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-5 md:px-8" aria-label="Primary navigation">
          <button className="focus-ring flex h-12 w-12 items-center justify-center border border-[#EAE2D5]/20 text-[#EAE2D5] transition hover:border-[#D8642A]" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={21} />
          </button>
          <Link href="/" className="focus-ring text-center" aria-label="BURN Indianapolis home">
            <span className="font-display block text-3xl font-semibold uppercase leading-none tracking-[0.12em]">BURN</span>
            <span className="font-editorial block text-xs italic text-[#B48A52]">by Rocky Patel</span>
          </Link>
          <div className="hidden items-center justify-end gap-8 md:flex">
            {navPrimary.map((item) => (
              <Link key={item.href} className="focus-ring font-display text-lg uppercase tracking-[0.12em] text-[#EAE2D5]/82 transition hover:text-[#D8642A]" href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="focus-ring inline-flex items-center gap-2 border border-[#B48A52]/55 px-5 py-3 font-display text-lg uppercase tracking-[0.14em] transition hover:border-[#D8642A] hover:text-[#D8642A]" href="/contact">
              <CalendarCheck size={17} />
              Reserve
            </Link>
          </div>
        </nav>
      </header>

      <div className={`fixed inset-0 z-[60] transition ${open ? "visible opacity-100" : "invisible opacity-0"}`} aria-hidden={!open}>
        <div className="absolute inset-0">
          <Image src={imageSet.lounge} alt="" fill sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-[#100D0B]/86" />
          <div className="smoke-field" />
        </div>
        <div className="relative mx-auto flex h-full max-w-7xl flex-col px-6 py-7 md:px-10">
          <div className="flex items-center justify-between">
            <span className="font-display text-3xl uppercase tracking-[0.16em]">BURN</span>
            <button className="focus-ring flex h-12 w-12 items-center justify-center border border-[#EAE2D5]/20 text-[#EAE2D5] hover:border-[#D8642A]" onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={21} />
            </button>
          </div>
          <div className="mt-12 grid flex-1 gap-10 md:grid-cols-[1.4fr_0.8fr] md:items-end">
            <div className="space-y-2">
              {navFull.slice(0, 7).map((item, index) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="focus-ring group grid max-w-3xl grid-cols-[3.5rem_1fr] items-baseline gap-4 py-2">
                  <span className="font-display text-lg text-[#B48A52]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-display text-5xl font-semibold uppercase leading-[0.88] transition group-hover:translate-x-2 group-hover:text-[#D8642A] md:text-8xl">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
            <div className="border-l border-[#B48A52]/30 pl-6 text-sm text-[#A79E94]">
              <p className="font-display mb-5 text-2xl uppercase text-[#EAE2D5]">Downtown Indianapolis</p>
              <p>{venue.address}</p>
              <p>{venue.cityState}</p>
              <p className="mt-4">Mon-Sat 4 PM - 2 AM</p>
              <p>Sunday 4 PM - 12 AM</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="focus-ring inline-flex items-center gap-2 border border-[#EAE2D5]/20 px-4 py-3 text-[#EAE2D5] hover:border-[#D8642A]" href={venue.instagram}>
                  <Camera size={16} /> Instagram
                </a>
                <Link className="focus-ring inline-flex items-center gap-2 border border-[#EAE2D5]/20 px-4 py-3 text-[#EAE2D5] hover:border-[#D8642A]" href="/visit">
                  <MapPin size={16} /> Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
