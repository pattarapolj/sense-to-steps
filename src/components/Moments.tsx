"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { PlayfulDecor } from "@/components/PlayfulDecor";
import { useLanguage } from "@/i18n/LanguageProvider";
import { momentStories } from "@/lib/moments";

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
          <div className="overflow-hidden" aria-label={t.moments.title}>
            <div className="moments-marquee-track flex w-max">
              {[0, 1].map((groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex gap-4 pr-4 sm:gap-6 sm:pr-6"
                  aria-hidden={groupIndex === 1}
                >
                  {momentStories.map((story) => (
                    <figure
                      key={`${story.imageSrc}-${groupIndex}`}
                      className="relative aspect-[4/3] w-[min(82vw,28rem)] overflow-hidden rounded-[2rem] bg-c-blue sm:rounded-[2.5rem]"
                    >
                      <Image
                        src={story.imageSrc}
                        alt={groupIndex === 0 ? t.moments[story.captionKey] : ""}
                        fill
                        sizes="(min-width: 640px) 28rem, 82vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0870B0]/70 via-transparent to-transparent" aria-hidden="true" />
                      <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                        <p className="font-display text-lg text-white drop-shadow-sm sm:text-xl">
                          {t.moments[story.captionKey]}
                        </p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
