"use client";

import { Reveal } from "@/components/Reveal";
import { PlayfulDecor } from "@/components/PlayfulDecor";
import { useLanguage } from "@/i18n/LanguageProvider";

const photoTones = [
  "bg-c-blue",
  "bg-c-orange",
  "bg-c-green",
  "bg-[#FFE566]",
] as const;

export function Team() {
  const { t } = useLanguage();

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

        <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 min-[480px]:grid-cols-2 sm:mt-14 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4">
          {t.team.members.map((member, index) => (
            <Reveal key={member.name} delay={index * 80} as="li">
              <div className="min-w-0">
                <div
                  className={`relative aspect-[4/5] overflow-hidden rounded-[1.75rem] ${photoTones[index % photoTones.length]}`}
                >
                  <span
                    className="absolute -right-3 -top-3 h-12 w-12 rounded-full bg-white/30"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-4xl text-ink/25 sm:text-5xl">
                      {member.initials}
                    </span>
                  </div>
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink sm:mt-5 sm:text-lg">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-c-accent">
                  {member.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-3">
                  {member.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
