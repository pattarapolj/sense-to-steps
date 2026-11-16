"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "@/components/Reveal";
import { PlayfulDecor } from "@/components/PlayfulDecor";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Letter() {
  const { t } = useLanguage();
  const mailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mail = mailRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mail || reducedMotion.matches || !("IntersectionObserver" in window)) return;

    mail.dataset.motion = "ready";
    const open = () => {
      mail.dataset.motion = "open";
      observer.disconnect();
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) open();
    }, { threshold: 0, rootMargin: "0px 0px -18% 0px" });
    observer.observe(mail);
    reducedMotion.addEventListener("change", open, { once: true });

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", open);
      delete mail.dataset.motion;
    };
  }, []);

  return (
    <section id="letter" className="section-blue relative scroll-mt-24 overflow-hidden py-14 sm:scroll-mt-28 sm:py-20 lg:py-28">
      <PlayfulDecor variant="a" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center sm:mb-14">
          <p className="inline-flex rounded-full bg-c-accent px-3 py-1 text-xs font-medium text-white">{t.letter.eyebrow}</p>
          <h2 className="mt-4 font-display text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl">{t.letter.title}</h2>
        </Reveal>

        <div ref={mailRef} className="letter-mail relative mx-auto max-w-2xl">
          <div className="letter-envelope" aria-hidden="true">
            <span className="letter-envelope-flap" />
            <span className="letter-envelope-address">
              <span className="font-display text-lg sm:text-2xl">{t.letter.eyebrow}</span>
              <span className="mt-2 text-xs tracking-widest sm:text-sm">Sense to Steps</span>
            </span>
            <span className="letter-seal">♡</span>
          </div>
          <article className="letter-paper relative px-7 py-12 sm:px-14 sm:py-16" aria-label={t.letter.title}>
            <p className="letter-letterhead text-xs tracking-[0.22em]" lang="en">Sense to Steps</p>
            <p className="letter-greeting mt-9 font-display text-lg sm:text-xl">{t.letter.greeting}</p>
            <div className="letter-body mt-7 space-y-6 sm:mt-9 sm:space-y-7">
              {t.letter.paragraphs.map((paragraph) => (
                <p className="letter-copy" key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="letter-signoff mt-10 sm:mt-12">
              <p className="text-sm sm:text-base">{t.letter.closing}</p>
              <p className="letter-signature mt-3 text-3xl">{t.letter.signature}</p>
              <p className="mt-2 max-w-sm text-xs leading-relaxed sm:text-sm">{t.letter.signatureRole}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
