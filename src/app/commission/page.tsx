import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commission — Jack",
  description: "Request an original, made-to-order piece.",
};

const INSTAGRAM_URL = "https://instagram.com/assreverie";

export default function CommissionPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 pt-16 sm:px-8 sm:pt-24">
      <p className="placard">Commissions open</p>
      <h1 className="section-title mt-3">Request a piece</h1>
      <p className="mt-4 text-muted">
        Send Jack a DM on Instagram if you want a commission. Include what
        you&apos;re after — subject, size, where it will live — and he&apos;ll
        reply to talk through scope, timeline, and price.
      </p>

      <div className="mt-10 border border-line bg-white p-8 sm:p-10">
        <p className="font-display text-2xl font-semibold">
          DM @assreverie on Instagram
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block bg-ink px-6 py-3 font-display font-semibold text-paper transition-opacity hover:opacity-90"
        >
          Message on Instagram ↗
        </a>
      </div>
    </section>
  );
}
