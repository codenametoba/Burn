import Link from "next/link";
import { MapPinned, Phone, CalendarCheck } from "lucide-react";
import { venue } from "@/lib/constants";

export function ReserveBar() {
  return (
    <>
      <Link className="focus-ring fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 border-y border-l border-[#B48A52]/50 bg-[#100D0B]/90 px-3 py-7 font-display text-lg uppercase tracking-[0.22em] text-[#EAE2D5] backdrop-blur transition hover:text-[#D8642A] md:block [writing-mode:vertical-rl]" href="/contact">
        Reserve
      </Link>
      <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 border-t border-[#B48A52]/25 bg-[#100D0B]/94 text-[#EAE2D5] backdrop-blur md:hidden">
        <a className="focus-ring flex min-h-16 flex-col items-center justify-center gap-1 text-xs uppercase tracking-[0.16em]" href={`tel:${venue.phone.replace(/[^0-9]/g, "")}`}><Phone size={18} /> Call</a>
        <a className="focus-ring flex min-h-16 flex-col items-center justify-center gap-1 border-x border-[#B48A52]/20 text-xs uppercase tracking-[0.16em]" href="https://www.google.com/maps/search/?api=1&query=110+S+Meridian+St+Indianapolis+IN+46204"><MapPinned size={18} /> Directions</a>
        <Link className="focus-ring flex min-h-16 flex-col items-center justify-center gap-1 text-xs uppercase tracking-[0.16em]" href="/contact"><CalendarCheck size={18} /> Reserve</Link>
      </div>
    </>
  );
}
