# SenseToSteps

Landing page for SenseToSteps — a bilingual (TH/EN) marketing site that guides customers to your Line Official Account.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Share with others on your network

The dev server listens on all interfaces (`0.0.0.0`), so phones on the same Wi‑Fi can open:

```text
http://<your-lan-ip>:3000
```

Example: `http://192.168.1.37:3000`

For a more stable preview, use the production build above, then share the same URL.

## Share over the internet (tunnel)

Requires [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) (`cloudflared`):

```bash
winget install Cloudflare.cloudflared
```

Run in two terminals:

```bash
# Terminal 1 — app
npm run dev

# Terminal 2 — public URL
npm run tunnel
```

Copy the `https://….trycloudflare.com` link from the tunnel output.

## Configure Line OA

Create `.env.local` (see `.env.local.example` if present) or edit `src/lib/site.ts`:

```env
NEXT_PUBLIC_LINE_OA_URL=https://line.me/R/ti/p/@yourlineoa
NEXT_PUBLIC_LINE_QR_SRC=/line-qr.png
NEXT_PUBLIC_HERO_VIDEO_SRC=/hero.mp4
NEXT_PUBLIC_HERO_POSTER_SRC=/hero-poster.jpg
NEXT_PUBLIC_ASSET_VERSION=1
```

Drop assets in `public/`:

| File | Purpose |
|------|---------|
| `hero.mp4` | Hero background video |
| `hero-poster.jpg` | Poster before video loads |
| `logo.png` / `logo_nobg.png` | Brand logos |
| `line-qr.png` | Line QR code in contact section |
| `moment-play.jpg` / `moment-music.jpg` | Section photos |

Bump `NEXT_PUBLIC_ASSET_VERSION` when you replace any file so browsers fetch the new copy.

## Language

Toggle TH/EN in the header, or open with a query param:

```text
http://localhost:3000?lang=th
http://localhost:3000?lang=en
```

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
