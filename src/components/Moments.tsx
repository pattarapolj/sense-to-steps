"use client";

import { Reveal } from "@/components/Reveal";
import { PlayfulDecor } from "@/components/PlayfulDecor";
import { useLanguage } from "@/i18n/LanguageProvider";
import { site } from "@/lib/site";

export function Moments() {
  const { t } = useLanguage();

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
        </Reveal>

        <Reveal delay={100} className="mt-10 sm:mt-14">
          <figure className="relative aspect-[16/10] overflow-hidden rounded-[2rem] sm:aspect-[21/9] sm:rounded-[2.5rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={site.momentMusicSrc}
              alt={t.moments.musicCaption}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0870B0]/55 via-transparent to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute left-5 top-5 h-3 w-12 rotate-[-24deg] rounded-full bg-[#F8B800] sm:left-8 sm:top-8"
              aria-hidden="true"
            />
            <div
              className="absolute left-5 top-10 h-3 w-16 rotate-[-10deg] rounded-full bg-[#F87000] sm:left-8 sm:top-14"
              aria-hidden="true"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
              <p className="font-display text-lg text-white drop-shadow-sm sm:text-2xl">
                {t.moments.musicCaption}
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
