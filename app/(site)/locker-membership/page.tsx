import Link from "next/link";
import { KeyRound, Martini, Ticket, Trophy } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { imageSet } from "@/lib/constants";

export const metadata = {
  title: "Locker Membership",
  description: "Learn about BURN Indianapolis locker membership benefits, private cigar storage, member privileges, and event access."
};

export default function MembershipPage() {
  return (
    <main>
      <PageHero eyebrow="06 / Membership" title="Make BURN yours." copy="A private cigar locker, member privileges, priority access, and a reason to let downtown become familiar." image={imageSet.cigar} />
      <section className="bg-[#100D0B] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {[
            [KeyRound, "Private cigar locker", "Dedicated storage for your personal collection."],
            [Ticket, "Priority event access", "First look at tastings, cigar nights, and member moments."],
            [Martini, "Member-only offers", "Rotating privileges for cocktails, cigars, and specials."],
            [Trophy, "BURN Platinum Card", "A polished welcome for new locker members."]
          ].map(([Icon, title, copy]) => (
            <article className="border border-[#B48A52]/20 bg-[#211713]/60 p-6" key={String(title)}>
              <Icon className="text-[#D8642A]" size={28} />
              <h2 className="font-display mt-8 text-4xl uppercase leading-none">{String(title)}</h2>
              <p className="mt-5 text-[#A79E94]">{String(copy)}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-7xl">
          <Link href="/contact" className="focus-ring inline-flex border border-[#B48A52]/60 px-6 py-4 font-display text-xl uppercase tracking-[0.16em] hover:border-[#D8642A]">Inquire about membership</Link>
        </div>
      </section>
    </main>
  );
}
