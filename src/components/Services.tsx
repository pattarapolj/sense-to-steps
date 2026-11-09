"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { PlayfulDecor } from "@/components/PlayfulDecor";
import { useLanguage } from "@/i18n/LanguageProvider";

const visuals = [
  { color: "bg-c-blue", path: "M4 13h7v7H4z M13 13h7v7h-7z M8 4h8v7H8z" },
  { color: "bg-c-green", path: "M20 11a8 8 0 0 1-8 8H5l-3 3V11a9 9 0 0 1 18 0Z M7 10h8 M7 14h5" },
  { color: "bg-c-orange", path: "M14 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z M4 10l5-1 3-3 3 5 5 1 M12 7l-2 7-5 7 M10 14l6 2 2 5" },
  { color: "bg-c-cream", path: "M12 21 3.5 12.5a5.7 5.7 0 0 1 8.5-7.6 5.7 5.7 0 0 1 8.5 7.6Z" },
] as const;

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" aria-labelledby="services-title" className="section-blue relative scroll-mt-24 overflow-hidden py-14 sm:scroll-mt-28 sm:py-20 lg:py-28">
      <PlayfulDecor variant="b" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="grid items-center gap-8 sm:grid-cols-[1.3fr_1fr] sm:gap-12">
          <div>
            <p className="inline-flex rounded-full bg-c-accent px-3 py-1 text-xs font-medium text-white">
              {t.services.eyebrow}
            </p>
            <h2 id="services-title" className="mt-4 max-w-xl font-display text-2xl leading-snug tracking-tight text-ink sm:text-3xl lg:text-4xl">
              {t.services.title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
              {t.services.subtitle}
            </p>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] rounded-tr-[5rem] border-8 border-white/60 sm:rounded-tr-[7rem]">
            <Image src="/services-children-play.jpg" alt={t.services.imageAlt} fill sizes="(min-width: 1152px) 420px, (min-width: 640px) 40vw, 100vw" className="object-cover" />
          </div>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          {t.services.items.map((item, index) => (
            <Reveal key={item.title} as="li" delay={index * 60} className="rounded-[1.75rem] bg-white p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${visuals[index].color}`} aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-ink">
                    <path d={visuals[index].path} />
                  </svg>
                </span>
                <span className="font-display text-sm text-muted" aria-hidden="true">0{index + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-lg leading-relaxed text-ink sm:text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-loose text-muted sm:text-base">{item.detail}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
