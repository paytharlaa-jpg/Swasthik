"use client";

import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { contactConfig } from "@/config/contact";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <div
        className={cn(
          "flex flex-col items-end gap-2 transition-all duration-500 ease-out-expo",
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        <a
          href={contactConfig.getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={open ? 0 : -1}
          className="btn btn-lime !py-3 text-sm shadow-2xl"
        >
          <MessageCircle size={16} /> WhatsApp the clinic
        </a>
        <a
          href={contactConfig.getPhoneUrl()}
          tabIndex={open ? 0 : -1}
          className="btn btn-ghost !py-3 text-sm bg-ink/90 backdrop-blur"
        >
          <Phone size={16} /> {siteConfig.phone}
        </a>
      </div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close contact options" : "Contact the clinic"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-saffron text-ink shadow-[0_10px_40px_rgba(226,85,15,0.35)] transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        {open ? <X size={24} strokeWidth={2.5} /> : <MessageCircle size={24} strokeWidth={2.4} />}
      </button>
    </div>
  );
}
