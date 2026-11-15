import { describe, expect, it } from "vitest";
import { reviews } from "./reviews";

describe("bilingual parent reviews", () => {
  it("keeps each localized excerpt verbatim in its complete review", () => {
    for (const review of reviews) {
      for (const locale of ["th", "en"] as const) {
        expect(review.excerpt[locale].length).toBeGreaterThan(0);
        expect(review.quote[locale]).toContain(review.excerpt[locale]);
        expect(review.quote[locale].length).toBeGreaterThan(review.excerpt[locale].length);
      }
    }
  });
});
