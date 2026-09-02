"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

async function submitForm(endpoint: string, form: HTMLFormElement) {
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error("Submission failed");
}

export function VipInquiryForm({ endpoint = "/api/vip-inquiry" }: { endpoint?: string }) {
  const [state, setState] = useState<FormState>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    try {
      await submitForm(endpoint, event.currentTarget);
      event.currentTarget.reset();
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 border border-[#B48A52]/25 bg-[#211713]/70 p-5 md:grid-cols-2 md:p-8">
      {["Name", "Email", "Phone", "Date", "Party Size", "Preferred Time"].map((label) => (
        <label key={label} className="grid gap-2 text-sm uppercase tracking-[0.16em] text-[#B48A52]">
          {label}
          <input required={["Name", "Email"].includes(label)} name={label.toLowerCase().replaceAll(" ", "")} type={label === "Email" ? "email" : label === "Date" ? "date" : "text"} className="focus-ring min-h-12 border border-[#EAE2D5]/15 bg-[#100D0B] px-4 text-base normal-case tracking-normal text-[#EAE2D5]" />
        </label>
      ))}
      <label className="grid gap-2 text-sm uppercase tracking-[0.16em] text-[#B48A52] md:col-span-2">
        Occasion
        <select name="occasion" className="focus-ring min-h-12 border border-[#EAE2D5]/15 bg-[#100D0B] px-4 text-base normal-case tracking-normal text-[#EAE2D5]">
          {["Birthday", "Corporate", "Bachelor Party", "Celebration", "Networking Event", "Private Party", "Other"].map((option) => <option key={option}>{option}</option>)}
        </select>
      </label>
      <label className="grid gap-2 text-sm uppercase tracking-[0.16em] text-[#B48A52] md:col-span-2">
        Special Requests
        <textarea name="requests" rows={5} className="focus-ring border border-[#EAE2D5]/15 bg-[#100D0B] p-4 text-base normal-case tracking-normal text-[#EAE2D5]" />
      </label>
      <button disabled={state === "loading"} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 border border-[#B48A52]/70 px-6 font-display text-xl uppercase tracking-[0.16em] text-[#EAE2D5] transition hover:border-[#D8642A] hover:text-[#D8642A] disabled:opacity-60 md:col-span-2">
        <Send size={17} /> {state === "loading" ? "Sending" : "Request VIP"}
      </button>
      {state === "success" ? <p className="text-[#EAE2D5] md:col-span-2">Your request is in. The Indianapolis team will follow up soon.</p> : null}
      {state === "error" ? <p className="text-[#D8642A] md:col-span-2">Something interrupted the request. Please call {`(317) 602-2260`} or try again.</p> : null}
    </form>
  );
}

export function ContactForm() {
  return <VipInquiryForm endpoint="/api/contact" />;
}
