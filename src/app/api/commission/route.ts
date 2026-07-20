import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  medium?: string;
  size?: string;
  budget?: string;
  deadline?: string;
  description?: string;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const description = (body.description || "").trim();

  if (!name || !email || !description) {
    return NextResponse.json(
      { error: "Name, email, and a description are required." },
      { status: 400 }
    );
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Medium", body.medium || "—"],
    ["Size", body.size || "—"],
    ["Budget", body.budget || "—"],
    ["Deadline", body.deadline || "—"],
    ["Details", description],
  ];

  const html = rows
    .map(
      ([k, v]) =>
        `<p style="margin:0 0 8px"><strong>${k}:</strong> ${escapeHtml(v)}</p>`
    )
    .join("");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.COMMISSION_TO_EMAIL;
  const from = process.env.COMMISSION_FROM_EMAIL || "onboarding@resend.dev";

  // Not configured yet: don't fail the person filling out the form.
  // Log it so nothing is lost while you finish setup.
  if (!apiKey || !to) {
    console.warn(
      "[commission] RESEND_API_KEY / COMMISSION_TO_EMAIL not set. Submission:",
      rows
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Commission request — ${name}`,
      html,
    });
    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[commission] send failed:", err);
    return NextResponse.json(
      { error: "Couldn't send right now. Please email directly." },
      { status: 502 }
    );
  }
}
