"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { PlayfulDecor } from "@/components/PlayfulDecor";
import { useLanguage } from "@/i18n/LanguageProvider";

const slideTones = [
  "bg-c-blue",
  "bg-c-green",
  "bg-c-orange",
  "bg-[#FFE566]",
] as const;

const AUTO_MS = 4500;

export function Reviews() {
  const { t } = useLanguage();
  const items = t.reviews.items;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const count = items.length;

  const goPrev = useCallback(() => {
    setActive((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setActive((i) => (i + 1) % count);
  }, [count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const section = document.getElementById("reviews");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  useEffect(() => {
    if (paused || count < 2) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % count);
    }, AUTO_MS);

    return () => window.clearInterval(id);
  }, [paused, count, active]);

  return (
    <section
      id="reviews"
      className="section-cream relative scroll-mt-24 overflow-hidden py-14 sm:scroll-mt-28 sm:py-20 lg:py-28"
    >
      <PlayfulDecor variant="b" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="inline-flex rounded-full bg-c-accent px-3 py-1 text-xs font-medium text-white">
            {t.reviews.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl">
            {t.reviews.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base lg:text-lg">
            {t.reviews.subtitle}
          </p>
        </Reveal>
      </div>

      <Reveal delay={120} className="relative z-10 mt-8 sm:mt-12">
        <div
          className="reviews-carousel relative mx-auto max-w-6xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setPaused(false);
            }
          }}
        >
          <div
            className="relative overflow-hidden px-4 sm:px-6 lg:px-8"
            onTouchStart={(e) => {
              setPaused(true);
              touchStartX.current = e.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current == null) return;
              const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
              const delta = endX - touchStartX.current;
              touchStartX.current = null;
              if (Math.abs(delta) < 40) {
                setPaused(false);
                return;
              }
              if (delta > 0) goPrev();
              else goNext();
              window.setTimeout(() => setPaused(false), 2500);
            }}
          >
            <div
              className="reviews-track flex items-stretch transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(calc(var(--peek) - ${active} * (var(--slide-w) + var(--gap))))`,
              }}
            >
              {items.map((item, index) => {
                const isActive = index === active;
                return (
                  <article
                    key={`${item.name}-${index}`}
                    className={`reviews-slide relative shrink-0 overflow-hidden rounded-3xl shadow-soft-sm transition-all duration-500 ${
                      slideTones[index % slideTones.length]
                    } ${isActive ? "scale-100 opacity-100" : "scale-[0.96] opacity-50 sm:scale-[0.94]"}`}
                    aria-hidden={!isActive}
                  >
                    <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/25" />
                    <div className="pointer-events-none absolute -bottom-8 left-8 h-16 w-16 rounded-full bg-white/20" />

                    <div className="relative flex min-h-[260px] flex-col justify-between p-5 sm:min-h-[320px] sm:p-8 md:min-h-[360px] md:p-10 lg:min-h-[400px] lg:p-12">
                      <div className="flex items-start justify-between gap-3 text-[10px] font-medium uppercase tracking-[0.14em] text-ink/55 sm:gap-4 sm:text-[11px] sm:tracking-[0.16em] md:text-xs">
                        <span className="min-w-0 truncate">{item.name}</span>
                        <span className="shrink-0 text-right">{item.role}</span>
                      </div>

                      <blockquote className="my-6 font-display text-xl leading-snug text-ink sm:my-8 sm:text-2xl md:text-3xl lg:text-[2.35rem] lg:leading-tight">
                        “{item.quote}”
                      </blockquote>

                      <div className="flex items-center justify-center">
                        <span
                          className={`flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-semibold text-ink shadow-soft-sm transition-transform duration-300 sm:h-14 sm:w-14 ${
                            isActive ? "scale-100" : "scale-90"
                          }`}
                          aria-hidden="true"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-soft-md transition-opacity duration-200 hover:opacity-90 sm:left-[max(0.5rem,calc(var(--peek)-0.25rem))] sm:h-11 sm:w-11 sm:-translate-x-1/2 md:h-12 md:w-12"
              aria-label="Previous review"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-soft-md transition-opacity duration-200 hover:opacity-90 sm:right-[max(0.5rem,calc(var(--peek)-0.25rem))] sm:h-11 sm:w-11 sm:translate-x-1/2 md:h-12 md:w-12"
              aria-label="Next review"
            >
              <ChevronRight />
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 sm:mt-8">
            {items.map((item, index) => (
              <button
                key={`dot-${item.name}`}
                type="button"
                onClick={() => setActive(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === active
                    ? "w-6 bg-c-accent"
                    : "w-2 bg-ink/20 hover:bg-ink/35"
                }`}
                aria-label={`Go to review ${index + 1}`}
                aria-current={index === active}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 6L9 12L15 18"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
