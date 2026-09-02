"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Joining...");
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget).entries()))
    });
    if (response.ok) {
      event.currentTarget.reset();
      setMessage("You are on the list.");
    } else {
      setMessage("Please try again in a moment.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-[1fr_1.2fr_auto] md:items-end">
      <div className="md:col-span-3">
        <p className="font-display text-5xl uppercase leading-none">Stay in the know.</p>
        <p className="mt-3 max-w-2xl text-[#A79E94]">Events, cigar releases, special nights and everything happening at BURN Indianapolis.</p>
      </div>
      <label className="grid gap-2 text-xs uppercase tracking-[0.18em] text-[#B48A52]">
        First Name
        <input name="firstName" className="focus-ring min-h-12 border border-[#EAE2D5]/15 bg-[#100D0B] px-4 text-base normal-case tracking-normal text-[#EAE2D5]" />
      </label>
      <label className="grid gap-2 text-xs uppercase tracking-[0.18em] text-[#B48A52]">
        Email
        <input required type="email" name="email" className="focus-ring min-h-12 border border-[#EAE2D5]/15 bg-[#100D0B] px-4 text-base normal-case tracking-normal text-[#EAE2D5]" />
      </label>
      <button className="focus-ring min-h-12 border border-[#B48A52]/70 px-6 font-display text-lg uppercase tracking-[0.16em] hover:border-[#D8642A] hover:text-[#D8642A]">Join the list</button>
      {message ? <p className="text-sm text-[#A79E94] md:col-span-3">{message}</p> : null}
    </form>
  );
}
