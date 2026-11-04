"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
  question: string;
  answer: string;
  isOpenDefault?: boolean;
}

export function Accordion({ items }: { items: AccordionItemProps[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={cn(
              "border rounded-2xl transition-all duration-300 overflow-hidden",
              isOpen
                ? "bg-navy-deep/80 border-gold/40 shadow-[0_4px_24px_rgba(212,175,55,0.08)]"
                : "bg-navy-deep/40 border-white/10 hover:border-white/20"
            )}
          >
            <button
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <span className="text-base md:text-lg font-heading font-semibold text-ivory pr-4">
                {item.question}
              </span>
              <span
                className={cn(
                  "shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300",
                  isOpen
                    ? "bg-gold text-midnight border-gold rotate-180"
                    : "border-white/20 text-ivory/60"
                )}
              >
                <ChevronDown size={18} />
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 text-sm md:text-base text-ivory/75 leading-relaxed font-body border-t border-white/5 pt-4">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

