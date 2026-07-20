import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop — Jack",
  description: "Stickers and tees, printed by Sticker Mule.",
};

const STICKER_MULE_URL = "https://www.stickermule.com/jlep";

export default function ShopPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-24">
      <p className="placard">Printed by Sticker Mule</p>
      <h1 className="section-title mt-3">Shop</h1>
      <p className="mt-4 max-w-xl text-muted">
        Stickers and tees are sold through Jack&apos;s Sticker Mule storefront —
        checkout, printing, and shipping all happen there.
      </p>

      <div className="mt-10 border border-line bg-white p-8 sm:p-10">
        <p className="font-display text-2xl font-semibold">
          Visit the Sticker Mule store
        </p>
        <p className="mt-2 max-w-md text-muted">
          Browse and buy stickers, tees, and prints directly — orders ship
          from Sticker Mule, not from this site.
        </p>
        <a
          href={STICKER_MULE_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block bg-ink px-6 py-3 font-display font-semibold text-paper transition-opacity hover:opacity-90"
        >
          Shop on Sticker Mule ↗
        </a>
      </div>
    </section>
  );
}
