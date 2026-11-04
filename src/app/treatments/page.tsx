import { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TreatmentCard } from "@/components/treatments/TreatmentCard";
import { BodyPainMap } from "@/components/treatments/BodyPainMap";
import { conditionsData } from "@/content/treatments/treatmentData";
import { contactConfig } from "@/config/contact";
import { siteConfig } from "@/config/site";
import { MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Ayurvedic Spine & Joint Treatments in Hyderabad | Swasthik Ayurveda",
  description:
    "Explore our complete range of non-surgical Ayurvedic therapies for Sciatica, Slip Disc, L4-L5 Bulge, Knee Osteoarthritis, and Cervical Spondylosis at Swasthik Ayurveda Hyderabad.",
  keywords: [
    "Ayurvedic treatments Hyderabad",
    "Spine care Ayurveda",
    "Sciatica treatment Kukatpally",
    "Knee pain Ayurvedic therapy",
    "Kati Vasti Hyderabad",
    "Agnikarma therapy",
  ],
};

export default function TreatmentsPage() {
  return (
    <main className="min-h-screen bg-midnight text-ivory pt-28 pb-20 font-body">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ label: "Treatments" }]} />

        {/* Page Hero Header */}
        <div className="py-12 md:py-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            <span>Targeted Clinical Specialization</span>
          </div>

          <h1 className="anim-heading text-4xl sm:text-5xl md:text-6xl font-heading font-semibold text-ivory tracking-tight mb-6">
            Non-Surgical Spine & Joint Treatments
          </h1>

          <p className="anim-subtitle text-base sm:text-lg md:text-xl text-ivory/80 leading-relaxed font-body">
            Combining traditional Ayurvedic methodologies—such as Kati Vasti, Janu Vasti, and
            precision Agnikarma—with thorough clinical evaluation to restore freedom of movement.
          </p>
        </div>

        {/* Interactive Pain Map Section */}
        <div className="mb-24">
          <SectionHeading
            badge="Interactive Navigator"
            title="Identify Your Pain Pattern"
            subtitle="Select the anatomical region causing you discomfort to discover our specific Ayurvedic treatment pathway."
          />
          <BodyPainMap />
        </div>

        {/* 8 Condition Cards Grid */}
        <div className="mb-24">
          <SectionHeading
            badge="Dedicated Condition Care"
            title="Conditions Addressed at Swasthik Ayurveda"
            subtitle="Click on any condition below to explore common symptoms, MRI correlation, and our specialized conservative therapies."
          />

          <div className="anim-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conditionsData.map((condition) => (
              <TreatmentCard key={condition.slug} condition={condition} />
            ))}
          </div>
        </div>

        {/* Medical Safety Disclaimer Strip */}
        <div className="anim-card p-8 md:p-12 rounded-3xl bg-navy-deep/40 border border-gold/30 text-center max-w-4xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mx-auto mb-4">
            <ShieldCheck size={24} />
          </div>
          <h3 className="text-xl md:text-2xl font-heading font-semibold text-ivory mb-3">
            Responsible Healthcare Standards
          </h3>
          <p className="text-sm text-ivory/70 leading-relaxed font-body mb-6 max-w-2xl mx-auto">
            Ayurvedic therapies are conservative, non-invasive supportive interventions. Suitability
            and expected outcomes are determined following an in-person physical assessment by{" "}
            {siteConfig.leadDoctor}. We encourage patients with acute neurological red flags to seek
            appropriate urgent medical evaluation.
          </p>
          <a
            href={contactConfig.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-soft text-midnight font-heading font-semibold text-sm transition-all shadow-lg"
          >
            <MessageCircle size={16} />
            <span>Consult Our Clinical Team on WhatsApp</span>
          </a>
        </div>
      </div>
    </main>
  );
}

