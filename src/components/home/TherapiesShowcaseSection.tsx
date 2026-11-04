import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const therapies = [
  {
    title: "Agnikarma Therapy",
    subtitle: "Precision Thermal Micro-Stimulation",
    description:
      "A classical Ayurvedic pain management modality where controlled micro-heat is delivered to exact trigger points, quickly desensitizing pain pathways for sciatica, heel pain, and severe muscle knots.",
    image: "/images/treatments/agnikarma-cupping-therapy.jpg",
    badge: "Acute Pain Relief",
  },
  {
    title: "Authentic Panchakarma",
    subtitle: "Cellular Detoxification & Vasti Chikitsa",
    description:
      "The gold standard of classical Ayurvedic internal cleansing. Includes specialized Vasti (therapeutic lipid administration), Vamana, Virechana, and Nasya to eliminate deep-seated metabolic Ama and pacify Vata.",
    image: "/images/treatments/panchakarma-therapy.jpg",
    badge: "Dhatu Rejuvenation",
  },
  {
    title: "Kati Vasti & Spine Care",
    subtitle: "Lumbar Oil Pooling & Decompression",
    description:
      "Warm medicated herbal oils are retained within a herbal dough reservoir over the lower lumbar spine, deeply nourishing paraspinal ligaments, rehydrating disc tissue, and calming nerve root irritation.",
    image: "/images/treatments/spine-care-assessment.jpg",
    badge: "Disc & Spine",
  },
  {
    title: "Janu Vasti Joint Therapy",
    subtitle: "Knee Cartilage Lubrication",
    description:
      "Designed specifically for knee osteoarthritis and joint crepitus. Warm medicated lipid retention replenishes Sleshaka Kapha, reduces bone-on-bone friction, and restores walking ease.",
    image: "/images/treatments/joint-pain-therapy.jpg",
    badge: "Joint & Mobility",
  },
  {
    title: "Shirodhara Therapy",
    subtitle: "Neurological Calming & Stress Relief",
    description:
      "A rhythmic, continuous stream of warm medicated herbal oil gently poured over the forehead (Ajna chakra), soothing the central nervous system, relieving cervicogenic vertigo, and promoting restorative sleep.",
    image: "/images/treatments/shirodhara-therapy.jpg",
    badge: "Nerve & Sleep Care",
  },
  {
    title: "Cupping & Myofascial Release",
    subtitle: "Vacuum & Fire Cupping",
    description:
      "Negative-pressure decompressive therapy that breaks stubborn fascial adhesions, increases micro-capillary perfusion, and releases deep gluteal and piriformis contractures.",
    image: "/images/treatments/oil-therapy-massage.avif",
    badge: "Fascial Release",
  },
];

export function TherapiesShowcaseSection() {
  return (
    <section className="py-24 md:py-32 bg-[#06080e] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          badge="Authentic Clinical Therapies"
          title="Time-Tested Ayurvedic Therapies for Spine & Joints"
          subtitle="Administered with clinical precision under professional medical guidance. Every therapy is calibrated to your individual constitutional state."
        />

        <div className="anim-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapies.map((therapy, idx) => (
            <div
              key={idx}
              className="group rounded-3xl bg-navy-deep/40 border border-white/10 hover:border-gold/50 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(212,175,55,0.15)]"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-midnight">
                  <Image
                    src={therapy.image}
                    alt={therapy.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-midnight/80 backdrop-blur-md border border-gold/40 text-gold text-xs font-semibold">
                    {therapy.badge}
                  </span>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-ivory group-hover:text-gold transition-colors mb-1">
                    {therapy.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-3">
                    {therapy.subtitle}
                  </p>
                  <p className="text-sm text-ivory/70 leading-relaxed font-body">
                    {therapy.description}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8 pt-0">
                <Link
                  href="/treatments"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold hover:text-champagne transition-colors"
                >
                  <Sparkles size={14} />
                  <span>Learn How It Works</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
