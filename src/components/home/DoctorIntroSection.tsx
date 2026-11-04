import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";

export function DoctorIntroSection() {
  return (
    <section className="py-24 md:py-32 bg-midnight relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Doctor Portrait with Cinematic Gold Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="anim-doctor-img relative w-72 h-96 sm:w-80 sm:h-[450px] md:w-96 md:h-[500px] rounded-3xl overflow-hidden border-2 border-gold/40 shadow-[0_16px_48px_rgba(212,175,55,0.2)] group">
              <Image
                src="/images/doctor/dr-krishna-mohan.jpg"
                alt={siteConfig.leadDoctor}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent" />

              {/* Verified Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-midnight/80 backdrop-blur-md border border-gold/30">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold mb-1">
                  <ShieldCheck size={16} />
                  <span>Verified Clinical Practitioner</span>
                </div>
                <h4 className="text-xl font-heading font-semibold text-ivory">
                  {siteConfig.leadDoctor}
                </h4>
                <p className="text-xs text-ivory/70 font-body">
                  Lead Ayurvedic Physician • Hyderabad
                </p>
              </div>
            </div>
          </div>

          {/* Doctor Bio & Clinical Philosophy */}
          <div className="lg:col-span-7 anim-doctor-text">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mb-4">
              <span>Personalized Clinical Consultation</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading font-semibold text-ivory tracking-tight mb-6 leading-tight">
              A Root-Cause Approach to{" "}
              <span className="text-gold">Spine & Joint Healing</span>
            </h2>

            <div className="space-y-4 text-sm md:text-base text-ivory/80 leading-relaxed font-body mb-8">
              <p>
                At Swasthik Ayurveda, treatment begins with listening. We believe that chronic
                conditions like sciatica, slip disc, and osteoarthritis require understanding the
                individual patient&apos;s unique daily routine, occupational strain, spinal biomechanics,
                and constitutional Dosha balance.
              </p>
              <p>
                Under the clinical direction of <strong>{siteConfig.leadDoctor}</strong>, our
                practice integrates classical Ayurvedic science—such as Kati Vasti, targeted
                Agnikarma, and authentic Panchakarma—with contemporary orthomedical understanding to
                deliver conservative, non-invasive relief.
              </p>
            </div>

            {/* Key Clinical Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm text-ivory/90 font-body">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-gold shrink-0" />
                <span>Thorough Physical & MRI Review</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-gold shrink-0" />
                <span>Targeted Non-Surgical Therapies</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-gold shrink-0" />
                <span>Classical Panchakarma & Agnikarma</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-gold shrink-0" />
                <span>Postural & Ergonomic Guidance</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={contactConfig.getWhatsAppUrl(
                  `Hello Dr. Krishna Mohan, I would like to book an in-person consultation at Swasthik Ayurveda Hyderabad.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold hover:bg-gold-soft text-midnight font-heading font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105"
              >
                <MessageCircle size={16} />
                <span>Book Doctor Appointment</span>
              </a>

              <Link
                href="/doctors"
                className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full border border-gold/40 text-gold hover:bg-gold/10 font-heading font-semibold text-sm transition-all"
              >
                <span>Read Full Profile</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
