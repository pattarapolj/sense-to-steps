# SenseToSteps

Landing page for SenseToSteps — a professional contact-first site that guides customers to Line Official Account.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configure LineOA

Edit `src/lib/site.ts` (or set `NEXT_PUBLIC_LINE_OA_URL` in `.env.local`):

```env
NEXT_PUBLIC_LINE_OA_URL=https://line.me/R/ti/p/@yourlineoa
```

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
