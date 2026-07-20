# Jack — Artist site

Portfolio gallery, made-to-order shop, and a commission intake form.
One Next.js app on Vercel. No separate backend.

## Stack

- **Next.js (App Router) + TypeScript** — pages and API routes in one deploy
- **Tailwind** — styling via design tokens in `tailwind.config.ts`
- **Vercel** — hosting (serverless API routes handle the dynamic bits)
- **Resend** — delivers commission requests to Jack's inbox
- **Sticker Mule** — the shop; site links out to Jack's storefront, no inventory or custom payments here

## Run it locally

```bash
npm install
cp .env.example .env.local   # fill in when you're ready (site runs without it)
npm run dev                  # http://localhost:3000
```

The commission form works before any keys are set — it just logs the
submission to the server console until Resend is configured.

## Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. In Vercel, **New Project → import the repo**. Framework auto-detects as Next.js; no build settings to change.
3. Add env vars from `.env.example` under **Settings → Environment Variables**.
4. Deploy. Add Jack's domain under **Settings → Domains**.

## Where things live

```
src/
  app/
    page.tsx              Home — wordmark hero + featured work
    gallery/page.tsx      Full gallery grid
    shop/page.tsx         Store — links out to Sticker Mule
    commission/page.tsx   Commission intake
    api/commission/route  Form handler → Resend email
  components/             Nav, Footer, ArtCard, CommissionForm
  data/artworks.ts        The gallery's data source (edit this to add art)
public/art/               Image files
```

## Adding artwork

1. Drop web-sized images into `public/art/` (long edge ~2000px, webp/jpg).
2. Add an entry to the `artworks` array in `src/data/artworks.ts`.

That array is the whole "CMS" for now. When Jack wants to manage the site
himself without touching code, replace the array with a fetch to a headless
CMS (Sanity is the usual pick) — the components read `Artwork[]` and don't
care where it comes from.

## The shop

`/shop` is a static page that links out to Jack's Sticker Mule storefront
(stickermule.com/jlep). Sticker Mule handles printing, checkout, and
shipping — no payment code, webhooks, or env vars needed here. To change
the destination URL, edit `STICKER_MULE_URL` in `src/app/shop/page.tsx`.

## Wiring commissions (Resend)

1. Create a free account at resend.com and generate an API key.
2. Set `RESEND_API_KEY`, `COMMISSION_TO_EMAIL`, and `COMMISSION_FROM_EMAIL`.
   Until your own domain is verified, `onboarding@resend.dev` works as the FROM.
3. Reference-image uploads are intentionally left out of v1 (they need file
   storage). The form tells requesters to mention references so Jack can ask by
   email. Add uploads later with an S3/UploadThing step if volume justifies it.
