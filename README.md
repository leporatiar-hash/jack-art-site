# Jack — Artist site

Portfolio gallery, made-to-order shop, and a commission intake page.
One Next.js app on Vercel. No backend, no env vars.

## Stack

- **Next.js (App Router) + TypeScript**
- **Tailwind** — styling via design tokens in `tailwind.config.ts`
- **Vercel** — hosting
- **Instagram DM** — how commissions are requested; the site just links out
- **Sticker Mule** — the shop; site links out to Jack's storefront, no inventory or custom payments here

## Run it locally

```bash
npm install
npm run dev   # http://localhost:3000
```

## Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. In Vercel, **New Project → import the repo**. Framework auto-detects as Next.js; no build settings to change, no env vars to set.
3. Deploy. Add Jack's domain under **Settings → Domains**.

## Where things live

```
src/
  app/
    page.tsx              Home — wordmark hero + featured work
    gallery/page.tsx      Full gallery grid
    shop/page.tsx         Store — links out to Sticker Mule
    commission/page.tsx   Commission intake — links out to Instagram DM
  components/             Nav, Footer, ArtCard, ArtworkGallery, Lightbox
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

## Commissions

`/commission` is a static page that links out to Instagram DM
(instagram.com/assreverie). No form, no email backend — people just message
Jack directly. To change the handle, edit `INSTAGRAM_URL` in
`src/app/commission/page.tsx`.
