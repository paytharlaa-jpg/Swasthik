import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { TreatmentCard } from "@/components/treatments/TreatmentCard";
import { conditionsData } from "@/content/treatments/treatmentData";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Phone,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return conditionsData.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const condition = conditionsData.find((c) => c.slug === slug);
  if (!condition) {
    return {
      title: "Treatment Not Found | Swasthik Ayurveda",
    };
  }

  return {
    title: `${condition.name} Treatment in Hyderabad | Swasthik Ayurveda`,
    description: condition.shortDescription,
    keywords: [
      `${condition.name} treatment Hyderabad`,
      `Ayurvedic care for ${condition.name}`,
      `${condition.name} Kukatpally`,
      `Dr Krishna Mohan ${condition.name}`,
      "Ayurvedic spine doctor Hyderabad",
    ],
    openGraph: {
      title: `${condition.name} Treatment in Hyderabad | Swasthik Ayurveda`,
      description: condition.shortDescription,
      url: `https://www.swastikayurveda.com/treatments/${condition.slug}`,
      siteName: siteConfig.name,
      images: [
        {
          url: condition.image,
          width: 800,
          height: 600,
          alt: condition.name,
        },
      ],
    },
  };
}

export default async function ConditionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const condition = conditionsData.find((c) => c.slug === slug);

  if (!condition) {
    notFound();
  }

  const relatedConditions = conditionsData.filter((c) =>
    condition.relatedConditionSlugs.includes(c.slug)
  );

  return (
    <main className="min-h-screen bg-midnight text-ivory pt-28 pb-20 font-body">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: "Treatments", href: "/treatments" },
            { label: condition.name },
          ]}
        />

        {/* Condition-Specific Hero */}
        <div className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mb-4">
              <Sparkles size={14} />
              <span>{condition.badge}</span>
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-ivory tracking-tight mb-6 leading-tight">
              {condition.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-ivory/80 leading-relaxed font-body mb-8">
              {condition.heroSubheadline}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={contactConfig.getWhatsAppUrl(
                  `Hello Dr. Krishna Mohan, I would like to consult for ${condition.name}. Please share available appointment slots.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold hover:bg-gold-soft text-midnight font-heading font-semibold text-sm transition-all shadow-[0_0_24px_rgba(212,175,55,0.3)] hover:scale-105"
              >
                <MessageCircle size={16} />
                <span>Book WhatsApp Consultation</span>
              </a>

              <a
                href={contactConfig.getPhoneUrl()}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-gold/40 text-gold hover:bg-gold/10 font-heading font-semibold text-sm transition-all"
              >
                <Phone size={15} />
                <span>Call Clinic: {siteConfig.phone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md h-72 sm:h-96 rounded-3xl overflow-hidden border border-gold/30 shadow-2xl">
              <Image
                src={condition.image}
                alt={condition.name}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-midnight/80 backdrop-blur-md border border-white/10 text-xs text-gold">
                Personalized Care Supervised by {siteConfig.leadDoctor}
              </div>
            </div>
          </div>
        </div>

        {/* 1. Patient-Friendly Overview */}
        <section className="py-12 border-t border-white/10">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-ivory mb-6">
            Understanding {condition.name}
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-ivory/80 leading-relaxed max-w-4xl">
            {condition.overview.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* 2. Symptoms & Contributing Factors Grid */}
        <section className="py-12 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Symptoms */}
            <div className="p-8 rounded-3xl bg-navy-deep/40 border border-white/10">
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-gold mb-6 flex items-center gap-2">
                <CheckCircle2 size={20} />
                <span>Common Symptoms</span>
              </h3>
              <ul className="space-y-3.5 text-sm sm:text-base text-ivory/80 leading-relaxed">
                {condition.symptoms.map((symptom, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contributing Factors */}
            <div className="p-8 rounded-3xl bg-navy-deep/40 border border-white/10">
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-champagne mb-6 flex items-center gap-2">
                <Sparkles size={20} />
                <span>Contributing Factors</span>
              </h3>
              <ul className="space-y-3.5 text-sm sm:text-base text-ivory/80 leading-relaxed">
                {condition.contributingFactors.map((factor, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0 mt-2" />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3. When to Seek Care (Red Flags) */}
        <section className="py-12 border-t border-white/10">
          <div className="p-8 rounded-3xl bg-saffron/10 border border-saffron/30">
            <h3 className="text-xl sm:text-2xl font-heading font-semibold text-saffron mb-4 flex items-center gap-2">
              <AlertCircle size={22} />
              <span>When Professional Assessment is Appropriate</span>
            </h3>
            <p className="text-sm text-ivory/80 mb-4">
              Schedule an evaluation with our clinical team if you experience any of the following:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-ivory/90">
              {condition.whenToSeekCare.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Ayurvedic Approach & Therapies Offered */}
        <section className="py-12 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-ivory mb-6">
                How Classical Ayurveda Approaches {condition.name}
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-ivory/80 leading-relaxed">
                {condition.ayurvedicApproach.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 p-8 rounded-3xl bg-navy-deep/50 border border-gold/30">
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-gold mb-6">
                Core Therapies Offered at Swasthik
              </h3>
              <ul className="space-y-3.5 text-sm sm:text-base text-ivory/90">
                {condition.therapiesOffered.map((therapy, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0 text-xs font-bold">
                      ✓
                    </div>
                    <span>{therapy}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Consultation Steps */}
        <section className="py-12 border-t border-white/10">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-ivory mb-8 text-center">
            Your Consultation Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {condition.consultationSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-navy-deep/40 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-heading font-bold text-gold font-mono block mb-2">
                    0{step.step}
                  </span>
                  <h4 className="text-base font-heading font-semibold text-ivory mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed font-body">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Frequently Asked Questions */}
        <section className="py-12 border-t border-white/10">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-ivory mb-8 text-center">
            Frequently Asked Questions About {condition.name}
          </h2>
          <Accordion items={condition.faqs} />
        </section>

        {/* 7. Related Conditions */}
        {relatedConditions.length > 0 && (
          <section className="py-12 border-t border-white/10">
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-ivory mb-8 text-center">
              Related Conditions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedConditions.map((rel) => (
                <TreatmentCard key={rel.slug} condition={rel} />
              ))}
            </div>
          </section>
        )}

        {/* 8. Medical Safety Disclaimer & Appointment CTA */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-midnight border border-gold/40 text-center max-w-4xl mx-auto shadow-2xl">
          <ShieldCheck size={32} className="text-gold mx-auto mb-4" />
          <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-ivory mb-4">
            Arrange Your Consultation with Dr. Krishna Mohan
          </h3>
          <p className="text-sm text-ivory/70 leading-relaxed font-body max-w-2xl mx-auto mb-8">
            Take a responsible, non-surgical step towards relieving {condition.name}. Connect with
            our coordination desk on WhatsApp or call our Hyderabad clinic directly.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={contactConfig.getWhatsAppUrl(
                `Hello Dr. Krishna Mohan, I would like to schedule an appointment for ${condition.name} at Swasthik Ayurveda.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold hover:bg-gold-soft text-midnight font-heading font-semibold text-sm transition-all shadow-lg"
            >
              <MessageCircle size={16} />
              <span>Book Consultation on WhatsApp</span>
            </a>

            <a
              href={contactConfig.getPhoneUrl()}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-gold/40 text-gold hover:bg-gold/10 font-heading font-semibold text-sm transition-all"
            >
              <Phone size={15} />
              <span>Call: {siteConfig.phone}</span>
            </a>
          </div>

          <p className="text-xs text-ivory/40 mt-8 max-w-xl mx-auto font-body">
            Disclaimer: Ayurvedic supportive therapies are personalized after individual clinical
            assessment. We do not claim guaranteed results or promise that Ayurvedic therapies
            substitute for required emergency interventions.
          </p>
        </div>
      </div>
    </main>
  );
}

