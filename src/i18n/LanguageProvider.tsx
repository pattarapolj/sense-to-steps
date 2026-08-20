"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { flushSync } from "react-dom";
import {
  dictionaries,
  type Dictionary,
  type Locale,
} from "@/i18n/dictionaries";

type LanguageContextValue = {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "sensetosteps-locale";

function readLocaleFromUrl(): Locale | null {
  if (typeof window === "undefined") return null;
  const lang = new URLSearchParams(window.location.search).get("lang");
  if (lang === "en" || lang === "th") return lang;
  return null;
}

function readLocaleFromStorage(): Locale | null {
  if (typeof window === "undefined") return null;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "th") return saved;
  } catch {
    /* private browsing */
  }
  return null;
}

function persistLocale(next: Locale) {
  document.documentElement.lang = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* private browsing */
  }
  const url = new URL(window.location.href);
  url.searchParams.set("lang", next);
  window.history.replaceState(null, "", url);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function runLocaleTransition(update: () => void) {
  const doc = document as Document & {
    startViewTransition?: (callback: () => void) => unknown;
  };

  if (typeof doc.startViewTransition === "function" && !prefersReducedMotion()) {
    doc.startViewTransition(() => {
      flushSync(update);
    });
    return;
  }

  update();
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("th");

  useEffect(() => {
    const next = readLocaleFromUrl() ?? readLocaleFromStorage() ?? "th";
    document.documentElement.lang = next;
    if (next === "th") return;

    const frame = window.requestAnimationFrame(() => setLocaleState(next));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const applyLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    persistLocale(next);
  }, []);

  const setLocale = useCallback(
    (next: Locale) => {
      if (locale === next) return;
      runLocaleTransition(() => applyLocale(next));
    },
    [applyLocale, locale],
  );

  const toggleLocale = useCallback(() => {
    setLocale(locale === "th" ? "en" : "th");
  }, [locale, setLocale]);

  const value = useMemo(
    () => ({
      locale,
      t: dictionaries[locale] as Dictionary,
      setLocale,
      toggleLocale,
    }),
    [locale, setLocale, toggleLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
