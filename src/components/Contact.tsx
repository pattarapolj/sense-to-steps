"use client";

import { Reveal } from "@/components/Reveal";
import { PlayfulDecor } from "@/components/PlayfulDecor";
import { useLanguage } from "@/i18n/LanguageProvider";
import { site } from "@/lib/site";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="section-green relative scroll-mt-24 overflow-hidden py-14 sm:scroll-mt-28 sm:py-20 lg:py-28"
    >
      <PlayfulDecor variant="b" />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 sm:gap-12 sm:px-6 md:grid-cols-[auto_1fr] md:gap-16 md:px-8">
        <Reveal className="justify-self-center md:justify-self-start">
          <a
            href={site.lineOaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-fit shrink-0 transition-opacity duration-200 hover:opacity-95"
            aria-label={t.contact.openLine}
          >
            <div className="relative rounded-[1.75rem] bg-c-cream p-4 sm:p-5 md:p-6">
              <span
                className="absolute -left-3 -top-3 h-3 w-10 rotate-[-28deg] rounded-full bg-[#F8B800]"
                aria-hidden="true"
              />
              <span
                className="absolute -left-2 top-2 h-3 w-14 rotate-[-12deg] rounded-full bg-[#F87000]"
                aria-hidden="true"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={site.lineQrSrc}
                alt={t.contact.qrAlt}
                width={220}
                height={220}
                className="h-[180px] w-[180px] object-contain sm:h-[200px] sm:w-[200px] md:h-[220px] md:w-[220px]"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget.nextElementSibling;
                  if (fallback instanceof HTMLElement) {
                    fallback.hidden = false;
                  }
                }}
              />
              <div
                hidden
                className="flex h-[180px] w-[180px] flex-col items-center justify-center gap-3 rounded-xl bg-c-blue sm:h-[200px] sm:w-[200px] md:h-[220px] md:w-[220px]"
              >
                <span className="text-xs font-semibold tracking-[0.2em] text-ink">
                  LINE
                </span>
                <span className="max-w-[9rem] text-center text-xs leading-relaxed text-muted">
                  {t.contact.qrFallback}
                </span>
              </div>
            </div>
          </a>
        </Reveal>

        <Reveal
          delay={100}
          className="max-w-xl text-center md:justify-self-start md:text-left"
        >
          <p className="inline-flex rounded-full bg-c-cream px-3 py-1 text-xs font-medium text-ink">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-2xl leading-snug tracking-tight text-ink sm:text-3xl lg:text-4xl">
            {t.contact.titleLine1}
            <br className="hidden sm:block" />
            {t.contact.titleLine2}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/80 sm:mt-5 sm:text-base lg:text-lg">
            {t.contact.body}
          </p>
          <a
            href={site.lineOaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex text-sm font-medium text-ink underline-offset-4 transition-opacity duration-200 hover:underline sm:mt-7"
          >
            {t.contact.link}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
