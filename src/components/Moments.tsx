"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PlayfulDecor } from "@/components/PlayfulDecor";
import { useLanguage } from "@/i18n/LanguageProvider";
import { eventCovers } from "@/lib/moments";

export function Moments() {
  const { t, locale } = useLanguage();

  return (
    <section
      id="moments"
      className="section-cream relative scroll-mt-24 overflow-hidden py-14 sm:scroll-mt-28 sm:py-20 lg:py-28"
    >
      <PlayfulDecor variant="c" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="inline-flex rounded-full bg-c-accent px-3 py-1 text-xs font-medium text-white">
            {t.moments.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl">
            {t.moments.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {t.events.intro}
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-8 grid gap-6 md:grid-cols-2 sm:mt-10">
          {eventCovers.map((imageSrc, index) => (
            <Link
              key={imageSrc}
              href={`/events?lang=${locale}#event-${index}`}
              className={`group overflow-hidden rounded-[2rem] text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-c-accent ${index === 0 ? "bg-c-orange/45" : "bg-c-blue/50"}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={imageSrc}
                  alt=""
                  fill
                  sizes="(min-width: 1152px) 532px, (min-width: 768px) 46vw, 92vw"
                  className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-ink">
                  {t.nav.events}
                </span>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-sm text-muted">{t.events.items[index].theme}</p>
                <h3 lang="en" className="mt-2 font-display text-2xl leading-snug sm:text-3xl">
                  {t.events.items[index].title}
                </h3>
                <span className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-c-accent group-hover:underline">
                  {t.moments.viewEvent}
                  <span aria-hidden="true" className="motion-safe:transition-transform motion-safe:group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
