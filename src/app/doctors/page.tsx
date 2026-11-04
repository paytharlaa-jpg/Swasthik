import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { ShieldCheck, CheckCircle2, MessageCircle, Phone, Stethoscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Doctors | Dr. Krishna Mohan | Swasthik Ayurveda Hyderabad",
  description:
    "Meet Dr. Krishna Mohan and the clinical team at Swasthik Ayurveda Hyderabad. Specializing in non-surgical Ayurvedic management for Sciatica, Slip Disc, L4-L5 Bulge, and Knee Pain.",
  keywords: [
    "Dr Krishna Mohan",
    "Ayurvedic Doctor Hyderabad",
    "Spine Doctor Kukatpally",
    "Best Ayurvedic Doctor for Sciatica Hyderabad",
    "Swasthik Ayurveda Doctors",
  ],
};

export default function DoctorsPage() {
  return (
    <main className="min-h-screen bg-midnight text-ivory pt-28 pb-20 font-body">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ label: "Our Doctors" }]} />

        {/* Page Header */}
        <div className="py-12 md:py-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            <Stethoscope size={14} />
            <span>Clinical Leadership</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold text-ivory tracking-tight mb-6">
            Meet the Doctors Behind Your Care
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-ivory/80 leading-relaxed font-body">
            Experienced Ayurvedic practitioners committed to diagnosing the true root cause of
            musculoskeletal distress and delivering targeted, conservative care.
          </p>
        </div>

        {/* Lead Doctor Feature Profile */}
        <div className="rounded-3xl bg-navy-deep/50 border border-gold/30 p-8 md:p-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Portrait */}
            <div className="anim-doctor-img lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-96 sm:w-80 sm:h-[450px] rounded-3xl overflow-hidden border-2 border-gold/40 shadow-[0_16px_40px_rgba(212,175,55,0.25)] group">
                <Image
                  src="/images/doctor/dr-krishna-mohan.jpg"
                  alt={siteConfig.leadDoctor}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold text-midnight text-xs font-bold uppercase tracking-wider mb-2">
                    <ShieldCheck size={14} />
                    <span>Lead Physician</span>
                  </span>
                  <h2 className="text-2xl font-heading font-semibold text-ivory">
                    {siteConfig.leadDoctor}
                  </h2>
                </div>
              </div>
            </div>

            {/* Profile Narrative */}
            <div className="anim-doctor-text lg:col-span-7">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-2">
                Consultant Ayurvedic Physician & Spine Specialist
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-ivory mb-6">
                {siteConfig.leadDoctor}
              </h2>

              <div className="space-y-4 text-sm md:text-base text-ivory/80 leading-relaxed font-body mb-8">
                <p>
                  {siteConfig.leadDoctor} serves as the chief medical officer and lead practitioner
                  at Swasthik Ayurveda in Hyderabad. With extensive clinical experience treating
                  spinal disc prolapse, lumbar nerve compressions, and chronic joint pathologies,
                  he approaches each patient with thorough diagnostic diligence and personal empathy.
                </p>
                <p>
                  Rather than viewing conditions such as Sciatica or L4-L5 disc bulges purely as
                  isolated structural flaws, Dr. Krishna Mohan evaluates how systemic Vata dosha
                  stagnation, metabolic accumulation (Ama), and postural mechanical stress interact
                  to produce inflammatory pain.
                </p>
                <p>
                  Under his care, hundreds of patients have experienced meaningful, non-surgical
                  relief through structured programs combining Kati Vasti, Janu Vasti, precision
                  Agnikarma thermal desensitization, and classical Vasti Panchakarma.
                </p>
              </div>

              {/* Areas of Clinical Focus */}
              <h4 className="text-xs uppercase tracking-widest text-gold font-semibold mb-4">
                Primary Clinical Focus:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm text-ivory/90 font-body">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-gold shrink-0" />
                  <span>Sciatica (Gridhrasi) & Nerve Pinches</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-gold shrink-0" />
                  <span>L4-L5 & L5-S1 Disc Bulge / Herniation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-gold shrink-0" />
                  <span>Knee Osteoarthritis (Sandhigata Vata)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-gold shrink-0" />
                  <span>Cervical Spondylosis & Tech Neck</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-gold shrink-0" />
                  <span>Agnikarma Thermal Micro-Stimulation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-gold shrink-0" />
                  <span>Classical Panchakarma & Vasti Protocols</span>
                </div>
              </div>

              {/* Consultation Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={contactConfig.getWhatsAppUrl(
                    `Hello, I would like to book an appointment with ${siteConfig.leadDoctor} at Swasthik Ayurveda Hyderabad.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-soft text-midnight font-heading font-semibold text-sm transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105"
                >
                  <MessageCircle size={16} />
                  <span>Book Consultation with Dr. Krishna Mohan</span>
                </a>

                <a
                  href={contactConfig.getPhoneUrl()}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-gold/40 text-gold hover:bg-gold/10 font-heading font-semibold text-sm transition-all"
                >
                  <Phone size={15} />
                  <span>Call: {siteConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Associate Doctor Profile */}
        <div className="rounded-3xl bg-navy-deep/30 border border-white/10 p-8 md:p-10 mb-20 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center text-gold shrink-0">
              <Stethoscope size={36} />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-1">
                Consultant Ayurvedic Practitioner
              </span>
              <h3 className="text-2xl font-heading font-semibold text-ivory mb-2">
                {siteConfig.associateDoctor}
              </h3>
              <p className="text-sm text-ivory/70 leading-relaxed font-body">
                Working collaboratively with Dr. Krishna Mohan to deliver personalized Panchakarma
                therapies, constitutional analysis, and clinical follow-up care for patients at
                Swasthik Ayurveda.
              </p>
            </div>
          </div>
        </div>

        {/* Consultation Process Strip */}
        <div className="p-8 md:p-12 rounded-3xl bg-midnight border border-white/10 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-heading font-semibold text-ivory mb-4">
            How to Prepare for Your Consultation
          </h3>
          <p className="text-sm text-ivory/70 font-body mb-8 leading-relaxed max-w-2xl mx-auto">
            Please bring any recent MRI, X-ray films, CT scans, blood test reports, and a summary of
            previous medications or physical therapy. This ensures our medical team can provide the
            most accurate and personalized assessment.
          </p>
          <a
            href={contactConfig.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold hover:bg-gold-soft text-midnight font-heading font-semibold text-sm transition-all shadow-lg"
          >
            <MessageCircle size={16} />
            <span>Connect on WhatsApp to Schedule</span>
          </a>
        </div>
      </div>
    </main>
  );
}

