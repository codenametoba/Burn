import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
};

export function PageHero({ eyebrow, title, copy, image }: PageHeroProps) {
  return (
    <section className="relative min-h-[78vh] overflow-hidden px-6 pt-36">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-38" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#100D0B]/30 via-[#100D0B]/70 to-[#100D0B]" />
      <div className="smoke-field" />
      <div className="relative mx-auto flex min-h-[58vh] max-w-7xl flex-col justify-end pb-16">
        <p className="font-display text-sm uppercase tracking-[0.35em] text-[#B48A52]">{eyebrow}</p>
        <h1 className="font-display mt-5 max-w-5xl text-7xl font-semibold uppercase leading-[0.85] md:text-[10rem]">{title}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#A79E94] md:text-xl">{copy}</p>
      </div>
    </section>
  );
}
