"use client";

import { useState } from "react";
import { MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { contactConfig } from "@/config/contact";
import { siteConfig } from "@/config/site";

export function AppointmentForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [condition, setCondition] = useState("Sciatica");
  const [preferredDay, setPreferredDay] = useState("Today / Earliest Available");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Swasthik Ayurveda, I would like to book a consultation with ${siteConfig.leadDoctor}.%0A%0A• Patient Name: ${encodeURIComponent(
      fullName
    )}%0A• Phone: ${encodeURIComponent(phone)}%0A• Condition/Pain Area: ${encodeURIComponent(
      condition
    )}%0A• Preferred Time: ${encodeURIComponent(preferredDay)}`;

    setSubmitted(true);
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <div className="rounded-3xl bg-navy-deep/70 border border-gold/30 p-8 md:p-10 shadow-2xl backdrop-blur-md">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold block mb-2">
          Direct Appointment Desk
        </span>
        <h3 className="text-2xl md:text-3xl font-heading font-semibold text-ivory mb-2">
          Consult With Dr. Krishna Mohan
        </h3>
        <p className="text-sm text-ivory/70 font-body leading-relaxed">
          Fill in your details below to instantly connect with our Hyderabad clinic coordination
          desk via WhatsApp or telephone.
        </p>
      </div>

      {submitted ? (
        <div className="p-6 rounded-2xl bg-emerald/20 border border-emerald/40 text-center animate-in fade-in">
          <CheckCircle2 size={36} className="text-emerald mx-auto mb-3" />
          <h4 className="text-lg font-heading font-semibold text-ivory mb-2">
            Consultation Request Initiated
          </h4>
          <p className="text-sm text-ivory/80 font-body mb-6">
            Your WhatsApp chat has opened. Our clinic desk will confirm available doctor slots with
            you right away.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs uppercase tracking-wider text-gold hover:underline"
          >
            Submit Another Request &rarr;
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 font-body">
          <div>
            <label className="block text-xs uppercase tracking-wider text-ivory/70 mb-1.5 font-medium">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Ramesh Kumar"
              className="w-full px-4 py-3 rounded-xl bg-midnight/70 border border-white/15 focus:border-gold focus:outline-none text-ivory text-sm placeholder:text-ivory/30"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-ivory/70 mb-1.5 font-medium">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +91 98765 43210"
              className="w-full px-4 py-3 rounded-xl bg-midnight/70 border border-white/15 focus:border-gold focus:outline-none text-ivory text-sm placeholder:text-ivory/30"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-ivory/70 mb-1.5 font-medium">
                Primary Pain / Condition
              </label>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-midnight/70 border border-white/15 focus:border-gold focus:outline-none text-ivory text-sm"
              >
                <option value="Sciatica">Sciatica (Radiating Leg Pain)</option>
                <option value="Slip Disc">Slip Disc / Herniation</option>
                <option value="L4-L5 Disc Bulge">L4-L5 Disc Bulge</option>
                <option value="Lower Back Pain">Lower Back Pain</option>
                <option value="Knee Pain">Knee Joint Pain</option>
                <option value="Knee Osteoarthritis">Knee Osteoarthritis</option>
                <option value="Cervical Spondylosis">Cervical Spondylosis (Neck/Arm)</option>
                <option value="General Spine Assessment">General Spine Assessment</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-ivory/70 mb-1.5 font-medium">
                Preferred Day
              </label>
              <select
                value={preferredDay}
                onChange={(e) => setPreferredDay(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-midnight/70 border border-white/15 focus:border-gold focus:outline-none text-ivory text-sm"
              >
                <option value="Today / Earliest Available">Today / Earliest Available</option>
                <option value="Tomorrow">Tomorrow</option>
                <option value="This Weekend">This Weekend</option>
                <option value="Next Week">Next Week</option>
              </select>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-gold to-saffron hover:from-gold-soft hover:to-gold text-midnight font-heading font-semibold text-base transition-all duration-300 shadow-[0_0_24px_rgba(212,175,55,0.3)] hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle size={18} />
              <span>Request Consultation on WhatsApp</span>
            </button>
          </div>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-white/10" />
            <span className="flex-shrink mx-4 text-xs text-ivory/40 uppercase tracking-widest">
              Or Call Directly
            </span>
            <div className="flex-grow border-t border-white/10" />
          </div>

          <a
            href={contactConfig.getPhoneUrl()}
            className="w-full py-3.5 rounded-xl border border-gold/40 hover:bg-gold/10 text-gold font-heading font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <Phone size={16} />
            <span>Call Clinic: {siteConfig.phone}</span>
          </a>
        </form>
      )}
    </div>
  );
}

