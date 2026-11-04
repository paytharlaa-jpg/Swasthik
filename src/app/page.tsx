"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CinematicIntro } from "@/components/hero/CinematicIntro";
import { HeroSection } from "@/components/hero/HeroSection";
import { DoctorIntroSection } from "@/components/home/DoctorIntroSection";
import { TherapiesShowcaseSection } from "@/components/home/TherapiesShowcaseSection";
import { ConsultationJourneySection } from "@/components/home/ConsultationJourneySection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { HomeAppointmentSection } from "@/components/home/HomeAppointmentSection";
import { BodyPainMap } from "@/components/treatments/BodyPainMap";
import { TreatmentCard } from "@/components/treatments/TreatmentCard";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { BlogCard } from "@/components/blog/BlogCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { conditionsData } from "@/content/treatments/treatmentData";
import { testimonialsData } from "@/content/testimonials/testimonialData";
import { blogPosts } from "@/content/blog/blogData";

export default function HomePage() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      {/* 2.5-3s Cinematic Introduction (Session-Aware) */}
      {!introFinished && <CinematicIntro onComplete={() => setIntroFinished(true)} />}

      <main className="min-h-screen bg-midnight text-ivory overflow-x-hidden">
        {/* Section 2: Main 3D Hero */}
        <HeroSection />

        {/* Section 3: Doctor Introduction */}
        <DoctorIntroSection />

        {/* Section 4: Conditions We Address (Pain Map + Condition Cards) */}
        <section id="conditions-we-treat" className="py-24 md:py-32 bg-[#05070c] relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionHeading
              badge="Conditions We Address"
              title="Targeted Clinical Care for Spine & Joint Disorders"
              subtitle="Explore our condition-focused clinical pathways for sciatica, lumbar disc bulges, knee osteoarthritis, and cervical stiffness."
            />

            {/* Interactive Anatomical Pain Navigator */}
            <div className="anim-pain-map mb-20">
              <BodyPainMap />
            </div>

            {/* Grid of 3D Treatment Cards */}
            <div className="anim-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {conditionsData.map((condition) => (
                <TreatmentCard key={condition.slug} condition={condition} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/treatments"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-midnight font-heading font-semibold text-sm transition-all duration-300"
              >
                <span>View Complete Treatment Details</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5: Ayurvedic Treatment Approaches */}
        <TherapiesShowcaseSection />

        {/* Section 7: Consultation Journey */}
        <ConsultationJourneySection />

        {/* Section 8: Patient Experiences */}
        <section className="py-24 md:py-32 bg-[#06080e] relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionHeading
              badge="Genuine Patient Feedback"
              title="Stories of Healing and Restored Mobility"
              subtitle="Verified reflections from patients who received personalized Ayurvedic spine and joint care at Swasthik Ayurveda."
            />

            <div className="anim-blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonialsData.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold hover:text-champagne transition-colors"
              >
                <span>Read More Patient Experiences</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 9: Why Choose Swasthik Ayurveda */}
        <WhyChooseSection />

        {/* Section 11: Blog Preview */}
        <section className="py-24 md:py-32 bg-midnight relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionHeading
              badge="Clinical Knowledge Hub"
              title="Recent Health Articles & Guides"
              subtitle="Educational insights on spinal alignment, disc preservation, and evidence-informed Ayurvedic care."
            />

            <div className="anim-blog-grid grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-midnight font-heading font-semibold text-sm transition-all duration-300"
              >
                <span>Explore All Articles</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 12: Appointment Consultation CTA */}
        <HomeAppointmentSection />
      </main>
    </>
  );
}
