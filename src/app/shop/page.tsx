import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop — Jack",
  description: "T-shirts and prints, made to order.",
};

// Placeholder catalogue. Replace with a fetch to your POD provider
// (Fourthwall Storefront API, or Printful products), then render real
// prices, variants, and a checkout button. See README "Wiring the shop".
const products = [
  { name: "Untitled (I) — Tee", price: "$32", note: "Bella+Canvas · made to order" },
  { name: "Study, Morning — Tee", price: "$32", note: "Bella+Canvas · made to order" },
  { name: "Nightwork — Print", price: "$45", note: "Giclée · 18 × 24 in" },
];

export default function ShopPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-24">
      <p className="placard">Made to order · ships worldwide</p>
      <h1 className="section-title mt-3">Shop</h1>
      <p className="mt-4 max-w-xl text-muted">
        Tees and prints are produced on demand — nothing is warehoused, so each
        order is printed and shipped when you buy it.
      </p>

      {/* Integration reminder — delete once the store is live. */}
      <div className="mt-8 border border-line bg-white p-4 text-sm text-muted">
        <span className="placard">Setup note</span>
        <p className="mt-2">
          These cards are placeholders. Connect a print-on-demand provider and
          replace this grid with real products + a checkout button. The README
          walks through both routes (Fourthwall, or Printful + Stripe). No
          separate backend needed — checkout is handled by the provider or a
          Next.js API route.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div key={p.name} className="group border border-line bg-white">
            <div className="flex aspect-square items-center justify-center bg-paper">
              <span className="placard">Product image</span>
            </div>
            <div className="border-t border-line p-4">
              <p className="font-display text-base font-semibold">{p.name}</p>
              <p className="placard mt-1">{p.note}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-display text-lg font-semibold">
                  {p.price}
                </span>
                <button
                  type="button"
                  disabled
                  className="placard cursor-not-allowed border border-line px-3 py-2 text-muted"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
