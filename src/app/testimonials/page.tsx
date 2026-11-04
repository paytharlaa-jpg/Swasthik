import { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { testimonialsData } from "@/content/testimonials/testimonialData";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { ShieldCheck, MessageCircle, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Experiences & Reviews | Swasthik Ayurveda Hyderabad",
  description:
    "Read genuine, permission-based testimonials and recovery stories from patients treated for Sciatica, Slip Disc, and Knee Pain at Swasthik Ayurveda Hyderabad.",
  keywords: [
    "Swasthik Ayurveda reviews",
    "Dr Krishna Mohan patient stories",
    "Sciatica recovery Hyderabad Ayurveda",
    "Ayurvedic clinic reviews Kukatpally",
  ],
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-midnight text-ivory pt-28 pb-20 font-body">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ label: "Patient Experiences" }]} />

        {/* Page Hero Header */}
        <div className="py-12 md:py-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            <HeartHandshake size={14} />
            <span>Real Patient Experiences</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold text-ivory tracking-tight mb-6">
            Words of Trust, Relief, and Healing
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-ivory/80 leading-relaxed font-body">
            Authentic reflections from patients who experienced our conservative, root-cause
            treatment approach for chronic spinal and joint distress.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Ethical Verification Standards */}
        <div className="p-8 md:p-12 rounded-3xl bg-navy-deep/40 border border-gold/30 text-center max-w-4xl mx-auto mb-16">
          <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mx-auto mb-4">
            <ShieldCheck size={24} />
          </div>
          <h3 className="text-2xl font-heading font-semibold text-ivory mb-3">
            Our Ethical Review Commitment
          </h3>
          <p className="text-sm text-ivory/70 leading-relaxed font-body max-w-2xl mx-auto mb-6">
            All testimonials published by Swasthik Ayurveda represent genuine, unaltered feedback
            provided with patient consent. In accordance with medical ethics, we do not fabricate
            patient reviews, manipulate recovery timelines, or claim that every individual achieves
            the same outcome. Clinical results depend on condition chronicity and adherence to care.
          </p>
          <a
            href={contactConfig.getWhatsAppUrl(
              `Hello Swasthik Ayurveda, I would like to consult Dr. Krishna Mohan regarding my spinal/joint condition.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold hover:bg-gold-soft text-midnight font-heading font-semibold text-sm transition-all shadow-lg"
          >
            <MessageCircle size={16} />
            <span>Consult Our Clinical Team on WhatsApp</span>
          </a>
        </div>
      </div>
    </main>
  );
}

