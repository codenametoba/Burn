"use client";

import Image from "next/image";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { imageSet } from "@/lib/constants";

const panels = [
  { title: "The Lounge", kicker: "Conversation, leather, low light", image: imageSet.lounge },
  { title: "Cocktails", kicker: "Smoked, stirred, poured slow", image: imageSet.cocktail },
  { title: "Humidor", kicker: "Hundreds of hand-selected cigars", image: imageSet.humidor },
  { title: "VIP", kicker: "Private rooms and elevated service", image: imageSet.table }
];

export function ExperienceSelector() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 30%"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (shouldReduceMotion) return;

    const nextActive = Math.min(panels.length - 1, Math.max(0, Math.round(latest * (panels.length - 1))));
    setActive((current) => (current === nextActive ? current : nextActive));
  });

  return (
    <section ref={sectionRef} className="relative min-h-[46rem] overflow-hidden bg-[#123B2E]">
      <div className="relative min-h-[46rem] overflow-hidden">
        {panels.map((panel, index) => (
          <Image
            key={panel.title}
            src={panel.image}
            alt=""
            fill
            sizes="100vw"
            className={`object-cover transition duration-700 ${
              active === index ? "opacity-55 scale-100" : "opacity-0 scale-105"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#100D0B] via-[#100D0B]/72 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#100D0B] to-transparent md:hidden" />
        <div className="relative mx-auto grid min-h-[46rem] max-w-7xl items-end gap-10 px-6 py-24 md:grid-cols-[0.8fr_1fr] md:py-20">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.35em] text-[#B48A52]">Interactive Experience</p>
            <h2 className="font-display mt-5 text-6xl font-semibold uppercase leading-[0.88] md:text-8xl">Choose the room.</h2>
          </div>
          <div className="grid gap-2">
            {panels.map((panel, index) => (
              <button
                key={panel.title}
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                className={`focus-ring group grid grid-cols-[4rem_1fr] items-center border-b border-[#EAE2D5]/15 py-5 text-left transition ${
                  active === index ? "text-[#D8642A]" : "text-[#EAE2D5]"
                }`}
              >
                <span className="font-display text-xl text-[#B48A52]">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <span className="font-display block text-4xl uppercase leading-none md:text-6xl">{panel.title}</span>
                  <span className="mt-2 block text-sm text-[#A79E94]">{panel.kicker}</span>
                </span>
              </button>
            ))}
            <div className="mt-5 grid grid-cols-4 gap-2" aria-hidden="true">
              {panels.map((panel, index) => (
                <span key={panel.title} className="h-px overflow-hidden bg-[#EAE2D5]/15">
                  <motion.span
                    className="block h-full origin-left bg-[#D8642A]"
                    animate={{ scaleX: active >= index ? 1 : 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
