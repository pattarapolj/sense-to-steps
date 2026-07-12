"use client";

import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";
import { site } from "@/lib/site";

export function Process() {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      className="section-orange scroll-mt-24 overflow-hidden py-14 sm:scroll-mt-28 sm:py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="relative mx-auto flex w-full max-w-md items-center justify-center py-6 sm:max-w-lg sm:py-8 lg:mx-0 lg:max-w-none">
          {/* Soft playful blobs */}
          <span
            className="absolute left-[8%] top-[12%] h-16 w-16 rounded-full bg-c-blue/70 sm:h-20 sm:w-20"
            aria-hidden="true"
          />
          <span
            className="absolute bottom-[10%] right-[6%] h-12 w-12 rounded-full bg-c-green/80 sm:h-14 sm:w-14"
            aria-hidden="true"
          />
          <span
            className="absolute right-[18%] top-[6%] h-3 w-3 rounded-full bg-c-accent"
            aria-hidden="true"
          />

          {/* Sunburst bars — reference playful style */}
          <div className="process-burst" aria-hidden="true">
            <span className="process-burst-bar process-burst-bar-1" />
            <span className="process-burst-bar process-burst-bar-2" />
            <span className="process-burst-bar process-burst-bar-3" />
            <span className="process-burst-bar process-burst-bar-4" />
          </div>

          <div className="process-photo relative z-10 aspect-square w-[78%] max-w-[22rem] overflow-hidden rounded-full shadow-soft-md sm:w-[82%] sm:max-w-[26rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={site.momentPlaySrc}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>

        <div className="flex min-w-0 flex-col justify-center">
          <Reveal className="max-w-xl">
            <p className="inline-flex rounded-full bg-c-accent px-3 py-1 text-xs font-medium text-white">
              {t.process.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl">
              {t.process.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
              {t.process.subtitle}
            </p>
          </Reveal>

          <ol className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8">
            {t.process.steps.map((item, index) => (
              <Reveal key={item.step} delay={index * 70} as="li">
                <div className="min-w-0">
                  <p className="font-display text-2xl text-c-accent sm:text-3xl">
                    {item.step}
                  </p>
                  <h3 className="mt-1.5 text-base font-semibold text-ink sm:mt-2">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
