type SectionIntroProps = {
  number: string;
  label: string;
  title: string;
  copy?: string;
};

export function SectionIntro({ number, label, title, copy }: SectionIntroProps) {
  return (
    <div className="mb-12 grid gap-8 md:grid-cols-[0.4fr_1fr] md:items-end">
      <p className="font-display text-sm uppercase tracking-[0.32em] text-[#B48A52]">{number} / {label}</p>
      <div>
        <h2 className="font-display text-5xl font-semibold uppercase leading-[0.9] md:text-8xl">{title}</h2>
        {copy ? <p className="mt-6 max-w-2xl text-[#A79E94] md:text-lg">{copy}</p> : null}
      </div>
    </div>
  );
}
