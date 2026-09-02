import { NextResponse } from "next/server";
import { Resend } from "resend";

async function sendInquiry(subject: string, payload: Record<string, unknown>) {
  if (!process.env.RESEND_API_KEY) {
    return { skipped: true };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.BURN_INQUIRY_TO || "indy@burnbyrockypatel.com";
  const from = process.env.BURN_INQUIRY_FROM || "BURN Indianapolis <onboarding@resend.dev>";
  const body = Object.entries(payload)
    .map(([key, value]) => `${key}: ${String(value || "")}`)
    .join("\n");

  await resend.emails.send({
    from,
    to,
    subject,
    text: body
  });

  return { skipped: false };
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Record<string, unknown>;
    await sendInquiry("New VIP inquiry - BURN Indianapolis", payload);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
