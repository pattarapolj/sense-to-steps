"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { site } from "@/lib/site";
import { handleAnchorClick } from "@/lib/smoothScroll";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="section-cream border-t border-border py-8 pb-[max(2rem,env(safe-area-inset-bottom))] sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-start gap-3 sm:items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.logoNobgSrc}
            alt=""
            className="h-11 w-auto shrink-0 sm:h-12"
            aria-hidden="true"
          />
          <div className="min-w-0">
            <p className="font-display text-base text-ink sm:text-lg">
              {site.name}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {t.hero.tagline}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 text-sm font-medium text-c-accent">
          <a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, "#contact")}
            className="transition-opacity duration-200 hover:opacity-80"
          >
            {t.footer.talk}
          </a>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-6xl px-4 text-xs text-muted sm:mt-8 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} {site.name}. {t.footer.rights}.{" "}
        <a href="/privacy" className="underline-offset-4 hover:underline">
          {t.footer.privacy}
        </a>
      </p>
      <p className="mx-auto mt-2 max-w-6xl px-4 text-xs leading-relaxed text-muted sm:px-6 lg:px-8">
        {t.footer.imageryDisclosure}
      </p>
    </footer>
  );
}
