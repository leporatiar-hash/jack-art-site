"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "mt-1 w-full border border-line bg-white px-3 py-2.5 text-ink outline-none focus:border-ink";
const labelClass = "placard block";

export default function CommissionForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/commission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-line bg-white p-8">
        <p className="section-title">Request received.</p>
        <p className="mt-3 text-muted">
          Jack will read the details and reply by email, usually within a few
          days. Thanks for the interest in a piece.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="placard link-underline mt-6"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-white p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="medium" className={labelClass}>
            Preferred medium
          </label>
          <input
            id="medium"
            name="medium"
            placeholder="Oil, ink, acrylic…"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="size" className={labelClass}>
            Size
          </label>
          <input
            id="size"
            name="size"
            placeholder="e.g. 24 × 36 in"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget
          </label>
          <input
            id="budget"
            name="budget"
            placeholder="Optional"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="deadline" className={labelClass}>
            Deadline
          </label>
          <input
            id="deadline"
            name="deadline"
            placeholder="Optional"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="description" className={labelClass}>
          What do you have in mind?
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          required
          className={inputClass}
          placeholder="Subject, mood, where it'll hang, references you like…"
        />
      </div>

      {status === "error" ? (
        <p className="mt-4 text-sm text-ink">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 bg-ink px-6 py-3 font-display font-semibold text-paper transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send request"}
      </button>

      <p className="placard mt-4">
        Reference images? Mention them here and Jack will ask by email.
      </p>
    </form>
  );
}
