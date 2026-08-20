"use client";

import { Reveal } from "@/components/Reveal";
import { PlayfulDecor } from "@/components/PlayfulDecor";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Letter() {
  const { t } = useLanguage();

  return (
    <section
      id="letter"
      className="section-blue relative scroll-mt-24 overflow-hidden py-14 sm:scroll-mt-28 sm:py-20 lg:py-28"
    >
      <PlayfulDecor variant="a" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-8 text-center sm:mb-10">
          <p className="inline-flex rounded-full bg-c-accent px-3 py-1 text-xs font-medium text-white">
            {t.letter.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl">
            {t.letter.title}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <article className="letter-paper relative mx-auto max-w-2xl px-5 py-8 text-ink sm:px-8 sm:py-10 md:px-12 md:py-14">
            <div
              className="pointer-events-none absolute inset-x-5 top-20 bottom-8 sm:inset-x-8 sm:top-24 sm:bottom-10 md:inset-x-12"
              aria-hidden="true"
            />
            <p className="relative font-display text-lg sm:text-xl md:text-2xl">
              {t.letter.greeting}
            </p>
            <div className="relative mt-6 space-y-4 text-sm leading-[1.85] text-muted text-pretty sm:mt-8 sm:space-y-5 sm:text-base sm:leading-[1.9] md:text-[1.05rem]">
              {t.letter.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 28)}>{paragraph}</p>
              ))}
            </div>
            <div className="relative mt-8 space-y-1 sm:mt-10">
              <p className="text-sm text-muted sm:text-base">{t.letter.closing}</p>
              <p className="font-display text-lg text-c-accent sm:text-xl">
                {t.letter.signature}
              </p>
              <p className="text-sm text-muted sm:text-base">
                {t.letter.signatureRole}
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
