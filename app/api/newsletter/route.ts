import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as { email?: string; firstName?: string };
    if (!payload.email) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.BURN_INQUIRY_FROM || "BURN Indianapolis <onboarding@resend.dev>",
        to: process.env.BURN_INQUIRY_TO || "indy@burnbyrockypatel.com",
        subject: "New newsletter signup - BURN Indianapolis",
        text: `First name: ${payload.firstName || ""}\nEmail: ${payload.email}\nLocation: Indianapolis`
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
