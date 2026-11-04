import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { ShieldCheck, Heart, Sparkles, Award, ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Swasthik Ayurveda Hyderabad",
  description:
    "Learn about Swasthik Ayurveda, Dr. Krishna Mohan, and our patient-centered classical Ayurvedic approach to spine, joint, and chronic pain care in Hyderabad.",
  keywords: [
    "About Swasthik Ayurveda",
    "Dr Krishna Mohan",
    "Ayurvedic Clinic Hyderabad",
    "Ayurvedic spine doctor Kukatpally",
    "Classical Ayurveda Telangana",
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-midnight text-ivory pt-28 pb-20 font-body">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ label: "About Us" }]} />

        {/* Page Hero Header */}
        <div className="py-12 md:py-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            <span>Rooted in Classical Wisdom</span>
          </div>

          <h1 className="anim-heading text-4xl sm:text-5xl md:text-6xl font-heading font-semibold text-ivory tracking-tight mb-6 leading-tight">
            Traditional Ayurvedic Wisdom.{" "}
            <span className="text-gold">Personalized Healing.</span>
          </h1>

          <p className="anim-subtitle text-base sm:text-lg md:text-xl text-ivory/80 leading-relaxed font-body">
            Swasthik Ayurveda was founded with a singular purpose: to offer authentic,
            evidence-informed classical Ayurvedic care for patients suffering from spinal,
            articular, and chronic pain disorders in Hyderabad.
          </p>
        </div>

        {/* Clinic Story & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6 text-sm sm:text-base text-ivory/80 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-ivory">
              Our Clinical Philosophy
            </h2>
            <p>
              Ayurveda does not treat diseases in isolation. It recognizes that every musculoskeletal
              complaint—whether an acute sciatica flare-up, a lumbar disc protrusion, or progressive
              knee crepitus—is an expression of an underlying imbalance in Vata dosha, tissue
              dehydration (Asthi-Majja Kshaya), and structural misalignment.
            </p>
            <p>
              At Swasthik Ayurveda, we combine ancient classical procedures with careful modern
              clinical examination. Our team conducts physical range-of-motion assessments, analyzes
              MRI and X-ray imaging, and designs a multi-layered therapy roadmap customized to each
              patient&apos;s daily lifestyle.
            </p>
            <p>
              We firmly prioritize conservative, non-surgical approaches. Rather than temporarily
              masking symptoms with pharmaceutical analgesics, our therapies target the biological
              and mechanical factors contributing to inflammation and joint stiffness.
            </p>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg h-80 sm:h-96 rounded-3xl overflow-hidden border border-gold/30 shadow-2xl">
              <Image
                src="/images/treatments/ayurveda-history.jpg"
                alt="Ayurvedic Tradition & Healing at Swasthik"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-midnight/80 backdrop-blur-md border border-white/10 text-xs text-ivory/90">
                <span className="text-gold font-semibold uppercase tracking-wider block mb-1">
                  Time-Tested Tradition
                </span>
                Classical Ayurvedic texts (Charaka & Sushruta Samhitas) form the foundation of our clinical therapies.
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="mb-24">
          <SectionHeading
            badge="Our Standards"
            title="What Sets Swasthik Ayurveda Apart"
            subtitle="Our clinical commitments ensure you receive honest, medically responsible, and dedicated care."
          />

          <div className="anim-card-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-navy-deep/40 border border-white/10 hover:border-gold/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-6">
                <Award size={22} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-ivory mb-3">
                Direct Senior Doctor Care
              </h3>
              <p className="text-sm text-ivory/70 leading-relaxed font-body">
                Every consultation and therapy regimen is supervised directly by Dr. Krishna Mohan,
                ensuring clinical excellence from assessment through rehabilitation.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-navy-deep/40 border border-white/10 hover:border-gold/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-6">
                <ShieldCheck size={22} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-ivory mb-3">
                No False Promises
              </h3>
              <p className="text-sm text-ivory/70 leading-relaxed font-body">
                We believe in ethical medicine. We do not claim miracle cures or guaranteed recovery
                rates. We provide realistic, evidence-informed clinical expectations.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-navy-deep/40 border border-white/10 hover:border-gold/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-6">
                <Heart size={22} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-ivory mb-3">
                Patient Empowerment
              </h3>
              <p className="text-sm text-ivory/70 leading-relaxed font-body">
                Healing does not end at our clinic door. We equip patients with customized ergonomic
                habits, spine-safe sleeping postures, and core strengthening exercises.
              </p>
            </div>
          </div>
        </div>

        {/* Doctor Feature Card */}
        <div className="anim-card rounded-3xl bg-navy-deep/60 border border-gold/30 p-8 md:p-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-48 h-64 md:w-56 md:h-72 rounded-2xl overflow-hidden border border-gold/40">
                <Image
                  src="/images/doctor/dr-krishna-mohan.jpg"
                  alt={siteConfig.leadDoctor}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-8">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-2">
                Lead Physician
              </span>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-ivory mb-4">
                {siteConfig.leadDoctor}
              </h3>
              <p className="text-sm md:text-base text-ivory/80 leading-relaxed font-body mb-6">
                With years of dedicated clinical experience in Ayurvedic musculoskeletal disorders,
                Dr. Krishna Mohan has guided hundreds of patients through non-surgical management of
                sciatica, intervertebral disc herniations, cervical spondylosis, and degenerative
                arthritis.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/doctors"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold hover:bg-gold-soft text-midnight text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <span>Meet Our Doctors</span>
                  <ArrowRight size={14} />
                </Link>
                <a
                  href={contactConfig.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/10 text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp Consultation</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Clinic Location & CTA */}
        <div className="anim-card p-8 md:p-12 rounded-3xl bg-midnight border border-white/10 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-heading font-semibold text-ivory mb-4">
            Visit Swasthik Ayurveda in Hyderabad
          </h3>
          <p className="text-sm text-ivory/70 font-body mb-8 leading-relaxed">
            Conveniently located Above HDFC Bank in Dharmareddy Colony Phase-II, Hydernagar,
            Kukatpally. Reach out to arrange a consultation at a time convenient for you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={contactConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-soft text-midnight font-semibold text-sm transition-all shadow-lg"
            >
              <MessageCircle size={16} />
              <span>Book Appointment</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gold/40 text-gold hover:bg-gold/10 font-semibold text-sm transition-all"
            >
              <span>Get Directions & Details</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

