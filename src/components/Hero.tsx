"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";
import { handleAnchorClick } from "@/lib/smoothScroll";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Hero() {
    const { t } = useLanguage();
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let cancelled = false;

        video.defaultMuted = true;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;

        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

        const play = () => {
            if (cancelled || reduced.matches) return;
            video.muted = true;
            void video.play().catch(() => {
                /* Autoplay blocked or Strict Mode race — poster stays visible */
            });
        };

        const onReducedChange = () => {
            if (reduced.matches) video.pause();
            else play();
        };

        if (!reduced.matches) play();

        video.addEventListener("canplay", play);
        reduced.addEventListener("change", onReducedChange);

        return () => {
            cancelled = true;
            video.removeEventListener("canplay", play);
            reduced.removeEventListener("change", onReducedChange);
            video.pause();
        };
    }, []);

    return (
        <section id="top" className="relative min-h-[100dvh] overflow-hidden">
            <div
                className="pointer-events-none absolute inset-0 min-h-[100dvh] overflow-hidden"
                aria-hidden="true"
            >
                <video
                    ref={videoRef}
                    src={site.heroVideoSrc}
                    className="absolute inset-0 block h-full min-h-[100dvh] w-full scale-[1.02] object-cover object-center"
                    poster={site.heroPosterSrc}
                    width={1280}
                    height={720}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="auto"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0870B0]/50 via-[#B8D9EC]/40 to-[#FFF6E8]/65" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFF6E8]/55 via-transparent to-[#FFF6E8]/20" />
            </div>

            <div className="relative z-10 mx-auto grid min-h-[calc(100dvh-var(--header-offset))] max-w-6xl grid-cols-1 items-center gap-8 px-4 pb-10 pt-[var(--header-offset)] sm:gap-10 sm:px-6 sm:pb-12 md:grid-cols-[1.25fr_0.75fr] md:gap-12 md:px-8 lg:pb-14">
                <div className="flex min-w-0 flex-col items-center text-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={site.logoNobgSrc}
                        alt={site.name}
                        width={507}
                        height={493}
                        fetchPriority="high"
                        decoding="async"
                        className="mb-4 h-28 w-auto max-w-full drop-shadow-sm sm:mb-5 sm:h-36 md:h-48 lg:h-64"
                    />
                    <h1 className="max-w-xl font-display text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl md:text-4xl lg:text-5xl">
                        {t.hero.headline}
                    </h1>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted sm:mt-4 sm:text-base md:text-lg lg:text-xl">
                        {t.hero.tagline}
                    </p>
                </div>

                <aside className="w-full min-w-0 self-center">
                    <div className="rounded-2xl bg-c-orange/95 p-5 shadow-soft-md backdrop-blur-sm sm:p-7 md:p-9">
                        <p className="inline-flex rounded-full bg-c-accent px-3 py-1 text-xs font-medium text-white">
                            {t.hero.ctaLabel}
                        </p>
                        <p className="mt-3 font-display text-xl font-medium leading-snug text-ink sm:mt-4 sm:text-2xl md:text-4xl">
                            {t.hero.ctaTitle}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                            {t.hero.ctaBody}
                        </p>
                        <a
                            href="#contact"
                            onClick={(e) => handleAnchorClick(e, "#contact")}
                            className="btn-accent mt-5 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-base font-semibold sm:mt-6"
                        >
                            {t.hero.ctaButton}
                        </a>
                        {/* <p className="mt-3 text-center text-xs text-muted">{t.hero.ctaHint}</p> */}
                    </div>
                </aside>
            </div>
        </section>
    );
}
