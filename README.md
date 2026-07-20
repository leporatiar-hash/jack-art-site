# Jack — Artist site

Portfolio gallery, made-to-order shop, and a commission intake form.
One Next.js app on Vercel. No separate backend.

## Stack

- **Next.js (App Router) + TypeScript** — pages and API routes in one deploy
- **Tailwind** — styling via design tokens in `tailwind.config.ts`
- **Vercel** — hosting (serverless API routes handle the dynamic bits)
- **Gmail SMTP (nodemailer)** — delivers commission requests to Jack's inbox, free
- **Sticker Mule** — the shop; site links out to Jack's storefront, no inventory or custom payments here

## Run it locally

```bash
npm install
cp .env.example .env.local   # fill in when you're ready (site runs without it)
npm run dev                  # http://localhost:3000
```

The commission form works before any keys are set — it just logs the
submission to the server console until Gmail is configured.

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
    api/commission/route  Form handler → Gmail SMTP
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

## Wiring commissions (Gmail SMTP)

Free, no domain verification, no paid service — just a Gmail account sending
to itself (or anywhere).

1. Turn on 2-Step Verification on the sending Gmail account, if it isn't
   already: https://myaccount.google.com/security
2. Generate an App Password at https://myaccount.google.com/apppasswords
   (pick "Mail" as the app). Copy the 16-character password.
3. Set `GMAIL_USER` (the Gmail address) and `GMAIL_APP_PASSWORD` (the app
   password, not the account's real password) and `COMMISSION_TO_EMAIL`
   (where requests should land — can be the same address or different).
4. Reference-image uploads are intentionally left out of v1 (they need file
   storage). The form tells requesters to mention references so Jack can ask by
   email. Add uploads later with an S3/UploadThing step if volume justifies it.
