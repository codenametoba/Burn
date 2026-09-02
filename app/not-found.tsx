import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen px-6 pt-40 text-[#EAE2D5]">
      <section className="mx-auto max-w-5xl">
        <p className="font-display text-sm uppercase tracking-[0.35em] text-[#B48A52]">404</p>
        <h1 className="font-display mt-5 max-w-3xl text-7xl font-semibold uppercase leading-[0.85] md:text-9xl">Looks like this one burned out.</h1>
        <p className="mt-8 max-w-xl text-lg text-[#A79E94]">Return to the lounge and find the night you were looking for.</p>
        <Link className="focus-ring mt-10 inline-flex border border-[#B48A52]/60 px-6 py-3 font-display text-lg uppercase tracking-[0.16em] text-[#EAE2D5] hover:border-[#D8642A]" href="/">
          Return to the lounge
        </Link>
      </section>
    </main>
  );
}
