"use client";

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PlayfulDecor } from "@/components/PlayfulDecor";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <div className="locale-page flex flex-1 flex-col">
        <main className="relative isolate flex min-h-[75svh] flex-1 items-center justify-center overflow-hidden px-5 pb-16 pt-[calc(var(--header-offset)+3rem)] sm:pb-24">
          <PlayfulDecor variant="a" className="-z-10" />
          <div className="max-w-xl text-center">
            <p className="font-display text-7xl text-c-accent sm:text-8xl">404</p>
            <h1 className="mt-6 text-balance font-display text-2xl leading-snug text-ink sm:text-4xl">
              {t.notFound.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {t.notFound.body}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/" className="btn-accent rounded-full px-6 py-3 text-sm font-medium">
                {t.notFound.home}
              </Link>
              <Link href="/events" className="rounded-full px-6 py-3 text-sm font-medium text-c-accent underline-offset-4 hover:underline">
                {t.notFound.events}
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
