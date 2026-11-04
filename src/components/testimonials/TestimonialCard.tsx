import { Quote, CheckCircle2, MapPin } from "lucide-react";
import { Testimonial } from "@/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-3xl bg-navy-deep/60 border border-white/10 hover:border-gold/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(212,175,55,0.12)] flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
            <Quote size={18} />
          </div>
          {testimonial.verified && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald/10 border border-emerald/30 text-emerald-light text-xs font-semibold">
              <CheckCircle2 size={13} />
              <span>Verified Patient Care</span>
            </div>
          )}
        </div>

        <p className="text-sm md:text-base text-ivory/85 leading-relaxed font-body italic mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="pt-6 border-t border-white/10 flex items-center justify-between">
        <div>
          <h4 className="text-base font-heading font-semibold text-gold">
            {testimonial.patientName}
          </h4>
          <div className="flex items-center gap-1 text-xs text-ivory/60 font-body">
            <MapPin size={12} />
            <span>{testimonial.location}</span>
          </div>
        </div>

        {testimonial.treatmentDuration && (
          <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-champagne font-mono">
            {testimonial.treatmentDuration}
          </span>
        )}
      </div>
    </div>
  );
}

