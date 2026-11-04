"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Condition } from "@/types";

export function TreatmentCard({ condition }: { condition: Condition }) {
  return (
    <div className="group relative rounded-3xl overflow-hidden bg-navy-deep/60 border border-white/10 hover:border-gold/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(212,175,55,0.18)] flex flex-col justify-between">
      {/* Golden Corner Accent Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/20 transition-all duration-500 pointer-events-none" />

      {/* Card Image */}
      <div className="relative h-56 w-full overflow-hidden bg-midnight">
        <Image
          src={condition.image}
          alt={condition.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />

        {/* Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-midnight/80 backdrop-blur-md border border-gold/40 text-gold text-xs font-semibold uppercase tracking-wider">
          {condition.badge}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-heading font-semibold text-ivory group-hover:text-gold transition-colors mb-3">
            {condition.name}
          </h3>
          <p className="text-sm text-ivory/70 leading-relaxed font-body mb-6 line-clamp-3">
            {condition.shortDescription}
          </p>
        </div>

        {/* Bottom Link Action */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <Link
            href={`/treatments/${condition.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-gold group-hover:text-champagne transition-colors"
          >
            <span>View Clinical Care</span>
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

