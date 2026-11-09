"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import groupPlay from "../../public/halloween-2026/HLW_-350.jpg";
import crafts from "../../public/halloween-2026/19017A7C-C8CC-4137-89C5-A6AD6DF5DA2A.jpg";
import spookyCrawl from "../../public/halloween-2026/HLW_-305.jpg";
import photo370 from "../../public/halloween-2026/HLW_-370.jpg";
import photo426 from "../../public/halloween-2026/HLW_-426.jpg";
import photo436 from "../../public/halloween-2026/HLW_-436.jpg";
import photo459 from "../../public/halloween-2026/HLW_-459.jpg";
import photo481 from "../../public/halloween-2026/HLW_-481.jpg";
import photo517 from "../../public/halloween-2026/HLW_-517.jpg";
import photo75 from "../../public/halloween-2026/HLW_-75.jpg";
import pirate0848 from "../../public/treasure-hunt-2026/IMG_0848.jpg";
import pirate0855 from "../../public/treasure-hunt-2026/IMG_0855.jpg";
import pirate0875 from "../../public/treasure-hunt-2026/IMG_0875.jpg";
import pirate0879 from "../../public/treasure-hunt-2026/IMG_0879.jpg";
import pirate0903 from "../../public/treasure-hunt-2026/IMG_0903.jpg";
import pirate0920 from "../../public/treasure-hunt-2026/IMG_0920.jpg";
import pirate2965 from "../../public/treasure-hunt-2026/IMG_2965.jpg";
import pirate2973 from "../../public/treasure-hunt-2026/IMG_2973.jpg";
import pirate2980 from "../../public/treasure-hunt-2026/IMG_2980.jpg";

const halloweenPhotos = [groupPlay, crafts, spookyCrawl, photo370, photo426, photo436, photo459, photo481, photo517, photo75];
const piratePhotos = [pirate0920, pirate0848, pirate2980, pirate0855, pirate0875, pirate0879, pirate0903, pirate2965, pirate2973];
const albums = [halloweenPhotos, piratePhotos];

export function Events() {
  const { t, locale } = useLanguage();
  const [expanded, setExpanded] = useState<boolean[]>([false, false]);

  return (
    <main id="top" className="flex-1 px-4 pb-16 pt-[calc(var(--header-offset)+3rem)] sm:px-6 sm:pb-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="max-w-3xl text-balance font-display text-3xl leading-snug text-ink sm:text-4xl lg:text-5xl">
          {t.events.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {t.events.intro}
        </p>

        <div className="mt-10 space-y-8 sm:mt-14 sm:space-y-12">
          {t.events.items.map((event, index) => (
            <article key={event.title} aria-labelledby={`event-${index}`} className={`grid items-center gap-7 rounded-[2rem] p-5 sm:p-8 md:grid-cols-[1.05fr_1fr] md:gap-10 lg:p-10 ${index === 0 ? "bg-c-orange/45" : "bg-c-blue/50"}`}>
                <div className="grid grid-cols-[1.4fr_1fr] gap-3 p-1 sm:gap-4">
                  {albums[index].slice(0, 3).map((photo, photoIndex) => (
                    <div key={photo.src} className={`relative overflow-hidden rounded-xl border-[5px] border-white bg-white shadow-soft-sm motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:-translate-y-1 ${photoIndex === 0 ? "row-span-2 aspect-[2/3] -rotate-2" : photoIndex === 1 ? "rotate-2" : "-rotate-1"}`}>
                      <Image src={photo} alt={photoIndex === 0 ? (index === 0 ? (locale === "th" ? "เด็ก ๆ เล่นร่วมกันด้วยผ้าร่มสีสันสดใสในงาน Boo! Spooky Play" : "Children playing together with a colorful parachute at Boo! Spooky Play") : (locale === "th" ? "เด็ก ๆ และทีมงานถ่ายภาพร่วมกันหน้าป้าย Pirate Treasure Hunt" : "Children and facilitators gathered in front of the Pirate Treasure Hunt banner")) : ""} fill sizes={photoIndex === 0 ? "(min-width: 1152px) 300px, (min-width: 768px) 30vw, 60vw" : "(min-width: 1152px) 220px, (min-width: 768px) 20vw, 40vw"} className="object-cover" />
                    </div>
                  ))}
                </div>
              <div>
                <span aria-hidden="true" className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-c-accent">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {index === 0 ? <>
                      <path d="M5 20V10a7 7 0 0 1 14 0v10l-3-2-4 2-4-2-3 2Z" />
                      <path d="M9 10v2m6-2v2m-5 3q2 2 4 0" />
                    </> : <>
                      <circle cx="12" cy="12" r="9" />
                      <path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8Z M12 3V1m0 22v-2M3 12H1m22 0h-2" />
                    </>}
                  </svg>
                </span>
                <h2 id={`event-${index}`} lang="en" className="font-display text-2xl leading-snug text-ink sm:text-3xl">
                  {event.title}
                </h2>
                <p className="mt-4 flex items-center gap-2 text-base leading-relaxed text-ink">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
                  {event.theme}
                </p>
                <p className="mt-3 text-base leading-loose text-muted">{event.description || t.events.detailsSoon}</p>
                <button
                  type="button"
                  aria-expanded={expanded[index]}
                  aria-controls={`event-album-${index}`}
                  onClick={() => setExpanded((current) => current.map((open, albumIndex) => albumIndex === index ? !open : open))}
                  className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-c-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-c-accent-hover"
                >
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {expanded[index] ? <path d="m7 14 5-5 5 5" /> : <><path d="M8 6l1.5-3h5L16 6h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4Z" /><circle cx="12" cy="12.5" r="4" /></>}
                  </svg>
                  {expanded[index] ? t.events.hideAlbum : t.events.viewAlbum}
                </button>
              </div>
                <div id={`event-album-${index}`} hidden={!expanded[index]} role="region" aria-labelledby={`event-${index}`} className="md:col-span-2">
                  {expanded[index] && <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
                    {albums[index].map((photo, photoIndex) => (
                      <a key={photo.src} href={photo.src} aria-label={t.events.openPhoto.replace("{number}", String(photoIndex + 1))} className="relative block aspect-[2/3] overflow-hidden rounded-xl border-4 border-white bg-white shadow-soft-sm motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:-translate-y-1">
                        <Image src={photo} alt="" fill sizes="(min-width: 1152px) 270px, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" className="object-contain" />
                      </a>
                    ))}
                  </div>}
                </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
