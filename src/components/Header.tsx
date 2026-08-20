"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { handleAnchorClick } from "@/lib/smoothScroll";
import { useLanguage } from "@/i18n/LanguageProvider";

const navHrefs = [
  { href: "#letter", key: "letter" },
  { href: "#process", key: "process" },
  { href: "#team", key: "team" },
  { href: "#contact", key: "contact" },
] as const;

export function Header() {
  const { t, locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const navItems = navHrefs.map((item) => ({
    href: item.href,
    label: t.nav[item.key],
  }));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-5 sm:pt-4">
      <div
        className={`nav-shell mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 rounded-2xl border px-2.5 sm:h-16 sm:gap-3 sm:px-5 ${
          scrolled || open
            ? "border-border bg-surface shadow-soft-md"
            : "border-transparent bg-c-cream/90"
        }`}
      >
        <a
          href="#top"
          className="group flex min-w-0 items-center gap-2 rounded-xl sm:gap-2.5"
          onClick={(e) => {
            handleAnchorClick(e, "#top");
            setOpen(false);
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.logoNobgSrc}
            alt={site.name}
            width={507}
            height={493}
            className="h-9 w-auto shrink-0 sm:h-10 md:h-11"
          />
          <span className="truncate font-display text-base tracking-tight text-ink sm:text-lg md:text-xl">
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleAnchorClick(e, item.href)}
              className="rounded-xl px-3 py-2 text-sm text-muted transition-colors duration-200 hover:bg-c-blue hover:text-ink"
            >
              {item.label}
            </a>
          ))}

          <div
            className="relative ml-2 grid grid-cols-2 rounded-full bg-c-blue/80 p-0.5"
            role="group"
            aria-label="Language"
          >
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute inset-y-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-c-accent transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                locale === "en" ? "translate-x-full" : "translate-x-0"
              }`}
            />
            <button
              type="button"
              onClick={() => setLocale("th")}
              className={`relative z-10 rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors duration-200 ${
                locale === "th" ? "text-white" : "text-muted hover:text-ink"
              }`}
              aria-pressed={locale === "th"}
            >
              TH
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`relative z-10 rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors duration-200 ${
                locale === "en" ? "text-white" : "text-muted hover:text-ink"
              }`}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, "#contact")}
            className="btn-accent ml-2 rounded-full px-4 py-2 text-sm font-medium"
          >
            {t.nav.talkWithUs}
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 lg:hidden">
          <div
            className="relative grid grid-cols-2 rounded-full bg-c-blue/80 p-0.5"
            role="group"
            aria-label="Language"
          >
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute inset-y-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-c-accent transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                locale === "en" ? "translate-x-full" : "translate-x-0"
              }`}
            />
            <button
              type="button"
              onClick={() => setLocale("th")}
              className={`relative z-10 rounded-full px-2 py-1 text-xs font-semibold transition-colors duration-200 ${
                locale === "th" ? "text-white" : "text-muted"
              }`}
              aria-pressed={locale === "th"}
            >
              TH
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`relative z-10 rounded-full px-2 py-1 text-xs font-semibold transition-colors duration-200 ${
                locale === "en" ? "text-white" : "text-muted"
              }`}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-4 flex-col gap-1">
              <span
                className={`h-0.5 w-full bg-ink transition duration-200 ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-ink transition duration-200 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-ink transition duration-200 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-h-[min(70svh,28rem)] max-w-6xl overflow-y-auto rounded-2xl border border-border bg-surface p-3 shadow-soft-md lg:hidden">
          <nav className="flex flex-col gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-sm text-ink hover:bg-c-blue"
                onClick={(e) => {
                  handleAnchorClick(e, item.href);
                  setOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-accent mt-1 rounded-full px-4 py-3 text-center text-sm font-medium"
              onClick={(e) => {
                handleAnchorClick(e, "#contact");
                setOpen(false);
              }}
            >
              {t.nav.talkWithUs}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
