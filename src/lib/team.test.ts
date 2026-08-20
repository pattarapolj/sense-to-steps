import { describe, expect, it } from "vitest";
import {
  advanceTeamMarquee,
  normalizeInfiniteScrollPosition,
  nextTeamIndex,
  previousTeamIndex,
  teamMembers,
} from "./team";
import { dictionaries } from "../i18n/dictionaries";
import { contactHandles, LINE_OA_URL, site, socialLinks } from "./site";
import { momentStories } from "./moments";

describe("teamMembers", () => {
  it("exposes every supplied staff photo with a human-readable name and role", () => {
    expect(teamMembers).toHaveLength(6);
    expect(teamMembers[0]).toEqual({
      name: "Ayutchet Loruangsin",
      role: "Occupational Therapist",
      imageSrc: "/Ayutchet_Loruangsin_OcupationalTherapist.jpg",
      alt: "Ayutchet Loruangsin, Occupational Therapist",
      imageClassName: "scale-[3] origin-[50%_45%]",
    });
  });
});

describe("team carousel navigation", () => {
  it("wraps from the first member to the last when going backward", () => {
    expect(previousTeamIndex(0, 6)).toBe(5);
  });

  it("wraps from the final member to the first when going forward", () => {
    expect(nextTeamIndex(5, 6)).toBe(0);
  });
});

describe("infinite carousel scrolling", () => {
  it("returns to the middle list after moving into the trailing duplicate", () => {
    expect(
      normalizeInfiniteScrollPosition({ scrollLeft: 1400, segmentWidth: 700 }),
    ).toBe(700);
  });

  it("returns to the middle list after moving into the leading duplicate", () => {
    expect(
      normalizeInfiniteScrollPosition({ scrollLeft: 0, segmentWidth: 700 }),
    ).toBe(700);
  });
});

describe("team marquee", () => {
  it("advances the carousel at a gentle, time-based pace", () => {
    expect(
      advanceTeamMarquee({
        scrollLeft: 2547.5,
        elapsedMs: 100,
        segmentWidth: 1274,
      }),
    ).toBeCloseTo(1275.3);
  });
});

describe("little moments", () => {
  it("uses the supplied stories with Thai and English captions", () => {
    expect(momentStories).toEqual([
      {
        imageSrc: "/qimono-children-1730248_1920.jpg",
        captionKey: "writingCaption",
      },
      {
        imageSrc: "/sunriseforever-boys-5987483_1920.jpg",
        captionKey: "worldCaption",
      },
      {
        imageSrc: "/pezibear-children-767034_1920.jpg",
        captionKey: "sensoryCaption",
      },
    ]);
    expect(dictionaries.th.moments.writingCaption).toBe(
      "การเล่นที่สนุก นำไปสู่การเขียนที่ดี",
    );
    expect(dictionaries.en.moments.writingCaption).toBe(
      "Fun play leads to confident writing",
    );
  });
});

describe("contact handles", () => {
  it("publishes the requested social contact details", () => {
    expect(contactHandles).toEqual([
      ["Facebook", "Sense to steps"],
      ["Instagram", "sensetosteps"],
      ["LINE", "@sensetosteps"],
    ]);
  });

  it("uses the real Line Official Account when no environment override is set", () => {
    expect(LINE_OA_URL).toBe("https://line.me/R/ti/p/@sensetosteps");
  });

  it("links the published social accounts and keeps the public tagline accurate", () => {
    expect(socialLinks).toEqual([
      ["Facebook", "Sense to steps", "https://www.facebook.com/share/1BeTTJx2Ho/?mibextid=wwXIfr"],
      ["Instagram", "sensetosteps", "https://www.instagram.com/sensetosteps?igsh=MzkxYXpkc29hMzcz&igsi=MzkxYXpkc29hMzcz"],
    ]);
    expect(site.tagline).toBe("ทุกรอยยิ้มคือความสุขของเรา");
  });

  it("labels stock imagery as illustrative rather than client photography", () => {
    expect(dictionaries.th.footer.imageryDisclosure).toContain("ไม่ใช่ภาพของผู้รับบริการ");
    expect(dictionaries.en.footer.imageryDisclosure).toContain("do not depict our clients");
  });
});
