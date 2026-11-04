import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldCheck, HeartHandshake, Award, Sparkles, MapPin, Stethoscope } from "lucide-react";
import { siteConfig } from "@/config/site";

const pillars = [
  {
    title: "Dedicated Spine & Joint Focus",
    description:
      "Deep clinical specialization in complex conditions including Sciatica, Slip Disc, L4-L5 Bulge, and Knee Osteoarthritis.",
    icon: Award,
  },
  {
    title: "Direct Doctor Care",
    description:
      `Personalized examination and therapy oversight by ${siteConfig.leadDoctor}, ensuring clinical continuity at every visit.`,
    icon: Stethoscope,
  },
  {
    title: "Authentic Classical Medicines",
    description:
      "Pure, high-potency classical Ayurvedic herbal oils, decoctions, and rasayanas prepared according to authentic Ayurvedic pharmacopoeia.",
    icon: Sparkles,
  },
  {
    title: "Conservative, Non-Surgical First",
    description:
      "Our priority is to relieve nerve irritation, restore muscular balance, and preserve natural joint anatomy without premature invasive surgery.",
    icon: ShieldCheck,
  },
  {
    title: "Patient-Centered Empathy",
    description:
      "We explain your MRI findings and treatment steps in plain, transparent language so you understand every phase of your recovery.",
    icon: HeartHandshake,
  },
  {
    title: "Prime Hyderabad Accessibility",
    description:
      "Conveniently situated above HDFC Bank in Hydernagar, Kukatpally, easily accessible from across Hyderabad and Secunderabad.",
    icon: MapPin,
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-24 md:py-32 bg-[#06080e] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          badge="Verified Clinical Strengths"
          title="Why Patients Trust Swasthik Ayurveda"
          subtitle="Combining classical Ayurvedic healing with genuine clinical rigor, patient transparency, and personalized care."
        />

        <div className="anim-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-navy-deep/40 border border-white/10 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-midnight transition-colors duration-300">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-ivory group-hover:text-gold transition-colors mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-ivory/70 leading-relaxed font-body">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
