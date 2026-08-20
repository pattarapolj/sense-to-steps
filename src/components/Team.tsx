"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { PlayfulDecor } from "@/components/PlayfulDecor";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";
import {
  advanceTeamMarquee,
  normalizeInfiniteScrollPosition,
  teamMembers,
} from "@/lib/team";

const CARD_SCROLL_DISTANCE = 224;
const carouselGroups = [teamMembers, teamMembers, teamMembers] as const;

export function Team() {
  const { t } = useLanguage();
  const listRef = useRef<HTMLUListElement>(null);
  const marqueePositionRef = useRef(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    list.scrollLeft = list.scrollWidth / 3;
    marqueePositionRef.current = list.scrollLeft;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let previousTime = performance.now();
    let paused = false;
    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };
    const move = (time: number) => {
      const elapsed = Math.min(time - previousTime, 100);
      previousTime = time;
      if (!paused) {
        marqueePositionRef.current = advanceTeamMarquee({
          scrollLeft: marqueePositionRef.current,
          elapsedMs: elapsed,
          segmentWidth: list.scrollWidth / 3,
        });
        list.scrollLeft = marqueePositionRef.current;
      }
      frame = window.requestAnimationFrame(move);
    };

    list.addEventListener("pointerenter", pause);
    list.addEventListener("pointerleave", resume);
    list.addEventListener("focusin", pause);
    list.addEventListener("focusout", resume);
    frame = window.requestAnimationFrame(move);

    return () => {
      window.cancelAnimationFrame(frame);
      list.removeEventListener("pointerenter", pause);
      list.removeEventListener("pointerleave", resume);
      list.removeEventListener("focusin", pause);
      list.removeEventListener("focusout", resume);
    };
  }, []);

  const scrollCards = (direction: "previous" | "next") => {
    const list = listRef.current;
    if (!list) return;

    list.scrollBy({
      left: direction === "next" ? CARD_SCROLL_DISTANCE : -CARD_SCROLL_DISTANCE,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="team"
      className="section-cream relative scroll-mt-24 overflow-hidden py-14 sm:scroll-mt-28 sm:py-20 lg:py-28"
    >
      <PlayfulDecor variant="a" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="inline-flex rounded-full bg-c-accent px-3 py-1 text-xs font-medium text-white">
            {t.team.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl">
            {t.team.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base lg:text-lg">
            {t.team.subtitle}
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-8 sm:mt-12">
          <div className="relative">
            <ul
              ref={listRef}
              className="flex overflow-x-auto px-1 pb-4 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label={t.team.title}
              onScroll={(event) => {
                const list = event.currentTarget;
                const nextPosition = normalizeInfiniteScrollPosition({
                  scrollLeft: list.scrollLeft,
                  segmentWidth: list.scrollWidth / 3,
                });
                if (nextPosition !== list.scrollLeft) {
                  list.scrollLeft = nextPosition;
                }
                marqueePositionRef.current = nextPosition;
              }}
            >
              {carouselGroups.map((members, groupIndex) => (
                <li
                  key={groupIndex}
                  className="flex shrink-0 gap-3 pr-3 sm:gap-5 sm:pr-5"
                  aria-hidden={groupIndex !== 1}
                >
                  {members.map((member) => (
                    <article
                      key={`${member.imageSrc}-${groupIndex}`}
                      className="w-[10.5rem] shrink-0 overflow-hidden rounded-[1.5rem] bg-white shadow-soft-md sm:w-48"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden bg-c-blue">
                        <Image
                          src={member.imageSrc}
                          alt={groupIndex === 1 ? member.alt : ""}
                          fill
                          sizes="(min-width: 640px) 12rem, 10.5rem"
                          className={`object-cover ${member.imageClassName ?? ""}`}
                        />
                      </div>
                      <div className="min-h-[7.75rem] p-4 sm:min-h-[8.5rem] sm:p-5">
                        <p className="break-words font-display text-lg leading-snug text-ink sm:text-xl">
                          {member.name}
                        </p>
                        <p className="mt-1 text-sm font-medium leading-snug text-c-accent">
                          {member.role}
                        </p>
                      </div>
                    </article>
                  ))}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => scrollCards("previous")}
              className="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-soft-md transition-opacity hover:opacity-85 sm:-left-5 sm:h-11 sm:w-11"
              aria-label={t.team.previous}
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => scrollCards("next")}
              className="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-soft-md transition-opacity hover:opacity-85 sm:-right-5 sm:h-11 sm:w-11"
              aria-label={t.team.next}
            >
              <ChevronRight />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 6 9 12l6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
