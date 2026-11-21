"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { conditionsData } from "@/content/treatments/treatmentData";

const DAYS = ["Earliest available", "Tomorrow", "This weekend", "Next week"];

export function AppointmentForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [condition, setCondition] = useState(conditionsData[0].name);
  const [day, setDay] = useState(DAYS[0]);
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `Hello Swasthik Ayurveda, I would like to book a consultation with ${siteConfig.leadDoctor}.`,
      "",
      `• Name: ${name}`,
      `• Phone: ${phone}`,
      `• Condition: ${condition}`,
      `• Preferred time: ${day}`,
    ].join("\n");
    window.open(contactConfig.getWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const field =
    "w-full border-0 border-b-2 border-bone/20 bg-transparent py-4 text-xl md:text-2xl font-medium text-bone placeholder:text-bone/30 focus:border-lime focus:outline-none focus:ring-0 transition-colors";

  return (
    <div className="rounded-[28px] bg-saffron p-7 text-ink md:p-10">
      <p className="eyebrow">Appointment desk</p>
      <h2 className="display mt-3 text-6xl md:text-7xl">Book a consult</h2>
      <p className="mt-3 max-w-md text-ink/75">
        Fill this in and WhatsApp opens with your details ready to send. We reply with available slots.
      </p>

      {sent ? (
        <div className="mt-10 rounded-2xl bg-ink p-8 text-bone">
          <Check className="text-lime" size={40} />
          <p className="display mt-4 text-5xl">Request ready</p>
          <p className="mt-3 text-bone/75">
            WhatsApp should have opened in a new tab. Press send there and the clinic will confirm your slot.
          </p>
          <button type="button" onClick={() => setSent(false)} className="mt-6 font-medium text-lime underline underline-offset-4">
            Send another request
          </button>
        </div>
      ) : (
        <form onSubmit={submit} className="mt-8 rounded-2xl bg-ink p-6 md:p-8 space-y-6">
          <label className="block">
            <span className="eyebrow text-ash">Full name *</span>
            <input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="Your name" className={field} />
          </label>
          <label className="block">
            <span className="eyebrow text-ash">Phone *</span>
            <input
              required
              type="tel"
              inputMode="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
              placeholder="+91"
              className={field}
            />
          </label>
          <fieldset>
            <legend className="eyebrow text-ash">Where does it hurt?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {[...conditionsData.map((c) => c.name.replace(/ \(.*\)/, "")), "Not sure"].map((c) => (
                <button
                  type="button"
                  key={c}
                  onClick={() => setCondition(c)}
                  aria-pressed={condition === c}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    condition === c ? "border-lime bg-lime text-ink" : "border-bone/20 text-bone/80 hover:border-bone/50"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="eyebrow text-ash">When?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {DAYS.map((d) => (
                <button
                  type="button"
                  key={d}
                  onClick={() => setDay(d)}
                  aria-pressed={day === d}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    day === d ? "border-saffron bg-saffron text-ink" : "border-bone/20 text-bone/80 hover:border-bone/50"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </fieldset>
          <button type="submit" className="btn btn-lime w-full justify-center !py-5 text-lg">
            Send on WhatsApp <ArrowUpRight size={20} />
          </button>
          <p className="text-xs text-ash">Your details go only into the WhatsApp message you send. Nothing is stored on this website.</p>
        </form>
      )}
    </div>
  );
}
