import type { Metadata } from "next";
import CommissionForm from "@/components/CommissionForm";

export const metadata: Metadata = {
  title: "Commission — Jack",
  description: "Request an original, made-to-order piece.",
};

export default function CommissionPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 pt-16 sm:px-8 sm:pt-24">
      <p className="placard">Commissions open</p>
      <h1 className="section-title mt-3">Request a piece</h1>
      <p className="mt-4 text-muted">
        Tell Jack what you&apos;re after. The more specific, the better —
        subject, size, where it will live. He&apos;ll reply by email to talk
        through scope, timeline, and price before anything is committed.
      </p>

      <div className="mt-10">
        <CommissionForm />
      </div>
    </section>
  );
}
