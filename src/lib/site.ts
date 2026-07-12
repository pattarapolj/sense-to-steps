/** Replace with your real Line Official Account URL when ready */
export const LINE_OA_URL =
  process.env.NEXT_PUBLIC_LINE_OA_URL ?? "https://line.me/R/ti/p/@YOUR_LINE_OA";

/** Bump when replacing files in public/ so browsers fetch fresh copies. */
export const ASSET_VERSION =
  process.env.NEXT_PUBLIC_ASSET_VERSION ?? "5";

/** Cache-busted URL for static files served from /public. */
export function assetUrl(path: string): string {
  const joiner = path.includes("?") ? "&" : "?";
  return `${path}${joiner}v=${ASSET_VERSION}`;
}

/** Drop your file at public/hero.mp4 */
export const HERO_VIDEO_SRC =
  process.env.NEXT_PUBLIC_HERO_VIDEO_SRC ?? "/hero.mp4";

/** Still poster shown before video / when motion is reduced */
export const HERO_POSTER_SRC =
  process.env.NEXT_PUBLIC_HERO_POSTER_SRC ?? "/hero-poster.jpg";

/** Drop your LineOA QR image at public/line-qr.png */
export const LINE_QR_SRC =
  process.env.NEXT_PUBLIC_LINE_QR_SRC ?? "/line-qr.png";

export const site = {
  name: "SenseToSteps",
  tagline: "ทุกร้อยยิ้มคือความสุขของเรา",
  description:
    "บริการที่ช่วยเล่าเรื่องราวและพาคุณจากความรู้สึกไปสู่ก้าวถัดไปอย่างชัดเจน",
  lineOaUrl: LINE_OA_URL,
  heroVideoSrc: assetUrl(HERO_VIDEO_SRC),
  heroPosterSrc: assetUrl(HERO_POSTER_SRC),
  lineQrSrc: assetUrl(LINE_QR_SRC),
  /** Full logo with cream background */
  logoSrc: assetUrl("/logo.png"),
  /** Transparent logo for nav / overlays */
  logoNobgSrc: assetUrl("/logo_nobg.png"),
  /** Atmosphere photos */
  momentPlaySrc: assetUrl("/moment-play.jpg"),
  momentMusicSrc: assetUrl("/moment-music.jpg"),
} as const;
