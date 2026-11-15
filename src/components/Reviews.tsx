"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { reviews } from "@/lib/reviews";

export function Reviews() {
  const { t, locale } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let previousTime = performance.now();
    let position = 0;
    let segmentWidth = 0;
    let touching = false;
    let measuredWidth = 0;
    const measure = () => {
      if (measuredWidth === list.clientWidth) return;
      measuredWidth = list.clientWidth;
      const first = list.children[0];
      const nextGroup = list.children[reviews.length];
      if (!(first instanceof HTMLElement) || !(nextGroup instanceof HTMLElement)) return;
      segmentWidth = nextGroup.offsetLeft - first.offsetLeft;
      position = segmentWidth;
      list.scrollLeft = position;
    };
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    measure();
    const touchStart = () => { touching = true; };
    const touchEnd = () => { touching = false; };
    const move = (time: number) => {
      const elapsed = Math.min(time - previousTime, 100);
      previousTime = time;
      if (motion.matches || touching || list.matches(":hover") || list.contains(document.activeElement)) {
        position = list.scrollLeft;
      } else if (segmentWidth > 0) {
        position -= elapsed * 0.018;
        if (position < segmentWidth) position += segmentWidth;
        if (position >= segmentWidth * 2) position -= segmentWidth;
        list.scrollLeft = position;
      }
      frame = window.requestAnimationFrame(move);
    };
    list.addEventListener("touchstart", touchStart, { passive: true });
    list.addEventListener("touchend", touchEnd);
    list.addEventListener("touchcancel", touchEnd);
    frame = window.requestAnimationFrame(move);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      list.removeEventListener("touchstart", touchStart);
      list.removeEventListener("touchend", touchEnd);
      list.removeEventListener("touchcancel", touchEnd);
    };
  }, []);

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="relative scroll-mt-24 overflow-hidden bg-c-blue/40 py-14 sm:scroll-mt-28 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex rounded-full bg-c-accent px-3 py-1 text-xs font-medium text-white">
            {t.reviews.eyebrow}
          </p>
          <h2 id="reviews-heading" className="mt-4 font-display text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl">
            {t.reviews.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base lg:text-lg">
            {t.reviews.subtitle}
          </p>
        </div>

        <ul
          id="reviews-list"
          ref={listRef}
          tabIndex={0}
          aria-label={t.reviews.eyebrow}
          style={{ scrollbarWidth: "none" }}
          className="reviews-carousel mt-8 flex gap-4 overflow-x-auto sm:mt-12 sm:gap-6"
        >
          {[0, 1, 2].flatMap((group) => reviews.map((review) => (
            <li key={`${group}-${review.id}`} aria-hidden={group !== 1 ? true : undefined} className="reviews-slide flex shrink-0">
              <figure className="flex w-full flex-col rounded-2xl bg-white p-6 sm:p-8">
                <figcaption className="mb-6 flex items-center gap-3 border-b border-ink/10 pb-5">
                  <span aria-hidden="true" className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${review.source === "facebook" ? "bg-c-accent text-white" : "bg-c-green/40 text-c-accent"}`}>
                    {review.source === "facebook" ? (
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.8 1.8-1.8H17V2.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4v2.8H7.5V13h2.8v9h3.2Z" />
                      </svg>
                    ) : (
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 11.5a8 8 0 0 1-8 8H4l1.5-4A8 8 0 1 1 20 11.5Z" />
                        <path d="M8 10h8m-8 4h5" />
                      </svg>
                    )}
                  </span>
                  <div className="min-w-0">
                    <p className="text-base font-semibold text-ink">
                      {review.author === "parent" ? t.reviews.parent : review.author === "georgeFamily" ? t.reviews.georgeFamily : review.author}
                    </p>
                    <p className="mt-1 text-xs text-muted">{review.source === "facebook" ? t.reviews.facebook : t.reviews.directMessage}</p>
                  </div>
                </figcaption>
                <svg aria-hidden="true" className="mb-4 h-6 w-6 text-c-accent/60" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M5 23V13c0-5 3-8 8-9v4c-3 1-4 3-4 5h5v10H5Zm14 0V13c0-5 3-8 8-9v4c-3 1-4 3-4 5h5v10h-9Z" />
                </svg>
                <blockquote id={`review-${group}-${review.id}`} lang={locale} className="mb-3 text-base leading-8 text-ink sm:text-lg">
                  <p>{expandedId === review.id ? review.quote[locale] : review.excerpt[locale]}</p>
                </blockquote>
                <div className="mt-auto pt-4">
                  <button
                    type="button"
                    tabIndex={group === 1 ? 0 : -1}
                    aria-expanded={expandedId === review.id}
                    aria-controls={`review-${group}-${review.id}`}
                    onClick={() => setExpandedId(expandedId === review.id ? null : review.id)}
                    className="min-h-11 text-sm font-semibold text-c-accent underline decoration-c-accent/30 underline-offset-4 hover:text-c-accent-hover"
                  >
                    {expandedId === review.id ? t.reviews.readLess : t.reviews.readMore}
                  </button>
                  <div className="min-h-5">
                    {review.originalLocale !== locale && (
                      <p className="mt-1 text-xs text-muted">{t.reviews.translated}</p>
                    )}
                  </div>
                </div>
              </figure>
            </li>
          )))}
        </ul>

      </div>
    </section>
  );
}
