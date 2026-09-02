import Link from "next/link";
import { Camera, ExternalLink } from "lucide-react";
import { navFull, venue } from "@/lib/constants";
import { NewsletterForm } from "@/components/NewsletterForm";

export function Footer() {
  return (
    <footer className="paper-grain bg-[#211713] px-6 pb-28 pt-20 text-[#EAE2D5] md:pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <p className="font-display text-6xl font-semibold uppercase leading-none">BURN</p>
            <p className="font-editorial text-2xl italic text-[#B48A52]">by Rocky Patel Indianapolis</p>
            <p className="mt-8 max-w-md text-[#A79E94]">
              Premium cigars, crafted cocktails, private-room hospitality, and downtown Indianapolis nights worth lingering over.
            </p>
          </div>
          <NewsletterForm />
        </div>
        <div className="cigar-line my-14" />
        <div className="grid gap-10 text-sm text-[#A79E94] md:grid-cols-4">
          <div>
            <h2 className="font-display mb-4 text-xl uppercase text-[#EAE2D5]">Indianapolis</h2>
            <p>{venue.address}</p>
            <p>{venue.cityState}</p>
            <p className="mt-3">{venue.phone}</p>
            <p>Mon-Sat 4 PM - 2 AM</p>
          </div>
          <div>
            <h2 className="font-display mb-4 text-xl uppercase text-[#EAE2D5]">Explore</h2>
            {navFull.slice(0, 5).map((link) => (
              <Link className="focus-ring block py-1 hover:text-[#D8642A]" href={link.href} key={link.href}>{link.label}</Link>
            ))}
          </div>
          <div>
            <h2 className="font-display mb-4 text-xl uppercase text-[#EAE2D5]">Members</h2>
            <Link className="focus-ring block py-1 hover:text-[#D8642A]" href="/locker-membership">Locker Membership</Link>
            <Link className="focus-ring block py-1 hover:text-[#D8642A]" href="/vip">Private Events</Link>
            <Link className="focus-ring block py-1 hover:text-[#D8642A]" href="/careers">Careers</Link>
          </div>
          <div>
            <h2 className="font-display mb-4 text-xl uppercase text-[#EAE2D5]">Connect</h2>
            <a className="focus-ring flex items-center gap-2 py-1 hover:text-[#D8642A]" href={venue.instagram}><Camera size={15} /> Instagram</a>
            <a className="focus-ring flex items-center gap-2 py-1 hover:text-[#D8642A]" href={venue.facebook}><ExternalLink size={15} /> Facebook</a>
            <Link className="focus-ring block py-1 hover:text-[#D8642A]" href="/contact">Contact</Link>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap gap-5 text-xs uppercase tracking-[0.2em] text-[#A79E94]">
          <span>© BURN by Rocky Patel</span>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <span>21+ venue. Tobacco and alcohol enjoyed on premises only.</span>
        </div>
      </div>
    </footer>
  );
}
