import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stethoscope, FileSearch, Sparkles, Activity } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Initial Consultation & Diagnostic Review",
    description:
      "Dr. Krishna Mohan reviews your detailed medical history, pain chronicity, recent MRI or X-ray reports, and daily occupational postures.",
    icon: Stethoscope,
  },
  {
    number: "02",
    title: "Ayurvedic Dosha & Physical Assessment",
    description:
      "Assessing your unique Prakriti-Vikriti balance, palpatory spinal examination, nerve stretch tests, and joint range-of-motion grading.",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "Tailored In-Clinic Therapy Sessions",
    description:
      "Administering focused therapies such as Kati Vasti, Agnikarma, or Janu Vasti with individualized polyherbal oils and fomentation.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Rehabilitation & Relapse Prevention",
    description:
      "Providing spinal strengthening exercises, workplace ergonomic adjustments, anti-inflammatory nutrition, and scheduled progress checks.",
    icon: Activity,
  },
];

export function ConsultationJourneySection() {
  return (
    <section className="py-24 md:py-32 bg-midnight relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          badge="Structured Clinical Pathway"
          title="How Your Healing Journey Unfolds"
          subtitle="Every patient receives individual attention. We never follow a one-size-fits-all formula, ensuring safe and purposeful progress."
        />

        <div className="anim-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl bg-navy-deep/50 border border-white/10 hover:border-gold/40 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(212,175,55,0.1)] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-heading font-bold text-gold/40 group-hover:text-gold transition-colors font-mono">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-midnight transition-all duration-300">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-heading font-semibold text-ivory mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-ivory/70 leading-relaxed font-body">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs text-gold font-semibold uppercase tracking-wider">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
