"use client";

import { useState } from "react";
import { MessageCircle, Phone, X, Calendar } from "lucide-react";
import { contactConfig } from "@/config/contact";
import { siteConfig } from "@/config/site";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = contactConfig.getWhatsAppUrl();
  const phoneUrl = contactConfig.getPhoneUrl();

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 font-body">
      {/* Expanded Menu */}
      {isOpen && (
        <div className="mb-3 flex flex-col items-end gap-2.5 animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Quick Doctor Consult Info */}
          <div className="bg-navy-deep/95 border border-gold/30 rounded-2xl p-4 shadow-2xl backdrop-blur-md max-w-[280px] sm:max-w-xs text-right text-ivory">
            <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-1">
              Consultation Desk
            </p>
            <p className="text-sm font-heading font-medium text-ivory mb-2">
              Book with {siteConfig.leadDoctor}
            </p>
            <p className="text-xs text-ivory/70 leading-relaxed mb-3">
              Direct consultation for Sciatica, Slip Disc, and Chronic Spine/Joint Pain.
            </p>

            <div className="flex flex-col gap-2">
              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold shadow-md transition-all duration-200"
                aria-label="Book on WhatsApp"
              >
                <MessageCircle size={16} />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Direct Telephone Call Button */}
              <a
                href={phoneUrl}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gold hover:bg-gold-soft text-midnight text-xs font-semibold shadow-md transition-all duration-200"
                aria-label={`Call Clinic at ${siteConfig.phone}`}
              >
                <Phone size={15} />
                <span>Call Clinic: {siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-gold to-saffron text-midnight shadow-[0_4px_24px_rgba(212,175,55,0.4)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gold/30 cursor-pointer"
        aria-label={isOpen ? "Close contact options" : "Open quick contact options"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X size={26} className="text-midnight stroke-[2.5]" />
        ) : (
          <div className="relative flex items-center justify-center">
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald animate-ping" />
            <Calendar size={24} className="text-midnight stroke-[2.2]" />
          </div>
        )}
      </button>
    </div>
  );
}

