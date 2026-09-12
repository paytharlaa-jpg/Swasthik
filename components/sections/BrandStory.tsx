"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Award, CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function BrandStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const badge1Ref = useRef<HTMLDivElement>(null);
  const badge2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation when section scrolls into view
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".story-badge", { y: 20, opacity: 0, duration: 0.5, ease: "power2.out" })
        .from(".story-title-line", { y: 30, opacity: 0, stagger: 0.12, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .to(".story-divider", { scaleX: 1, duration: 0.5, ease: "power2.out" }, "-=0.3")
        .from(".story-desc", { y: 20, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
        .from(".story-pillar", { y: 25, opacity: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" }, "-=0.2")
        .from(".story-cta", { y: 20, opacity: 0, duration: 0.4, ease: "power2.out" }, "-=0.2");

      // Doctor portrait reveal
      tl.from(".doctor-frame", {
        opacity: 0,
        scale: 0.94,
        duration: 0.8,
        ease: "power2.out",
      }, "<0.1")
      .from(badge1Ref.current, {
        x: 30,
        opacity: 0,
        scale: 0.85,
        duration: 0.6,
        ease: "back.out(1.6)",
      }, "-=0.4")
      .from(badge2Ref.current, {
        x: -30,
        opacity: 0,
        scale: 0.85,
        duration: 0.6,
        ease: "back.out(1.6)",
      }, "-=0.4");

      // Dignified parallax float for portrait during scroll
      gsap.to(imgWrapperRef.current, {
        y: -45,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(badge1Ref.current, {
        y: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.8,
        },
      });

      gsap.to(badge2Ref.current, {
        y: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="lead-doctor"
      className="relative bg-marble text-midnight overflow-hidden w-full pt-36 pb-24 md:pt-44 md:pb-28 border-y border-bronze/10 scroll-mt-24"
    >
      <div className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay pointer-events-none" />
      
      {/* Subtle ambient luxury backdrop glow */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-bronze/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-luxury relative z-10 w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Credibility & Story */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Badge */}
            <div className="story-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bronze/10 border border-bronze/25 text-bronze text-xs uppercase tracking-widest font-semibold w-fit mb-5">
              <ShieldCheck className="w-4 h-4 text-bronze" />
              <span>Chief Ayurvedic Consultant</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-midnight leading-tight mb-3">
              <span className="story-title-line block">Dr. Krishna Mohan</span>
              <span className="story-title-line block text-bronze italic font-normal text-2xl sm:text-3xl md:text-4xl mt-1">
                Pioneering Non-Surgical Ayurvedic Healing
              </span>
            </h2>

            {/* Divider */}
            <div className="story-divider h-[2px] w-24 bg-bronze origin-left scale-x-0 mb-6" />

            {/* Bio Description */}
            <p className="story-desc text-base md:text-lg text-midnight/80 max-w-xl leading-relaxed mb-6">
              With over 22,950+ patients treated, Dr. Krishna Mohan specializes in non-surgical pain management and chronic spinal rehabilitation, uniting ancient Ayurvedic wisdom with precision diagnostic care.
            </p>

            {/* Clinical Highlights / Pillars */}
            <div className="space-y-3 mb-8 max-w-xl">
              <div className="story-pillar flex items-start gap-3.5 p-3.5 rounded-xl bg-white/70 border border-bronze/15 shadow-sm hover:border-bronze/30 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-bronze" />
                </div>
                <div>
                  <h4 className="font-semibold text-midnight text-sm md:text-base">Root-Cause Classical Formulations</h4>
                  <p className="text-xs md:text-sm text-midnight/70 mt-0.5">Treating the structural pathology of pain rather than merely numbing the symptoms.</p>
                </div>
              </div>

              <div className="story-pillar flex items-start gap-3.5 p-3.5 rounded-xl bg-white/70 border border-bronze/15 shadow-sm hover:border-bronze/30 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-bronze" />
                </div>
                <div>
                  <h4 className="font-semibold text-midnight text-sm md:text-base">Specialized Spine & Joint Care</h4>
                  <p className="text-xs md:text-sm text-midnight/70 mt-0.5">Non-invasive rehabilitation for sciatica, cervical spondylosis, and lumbar disc herniations.</p>
                </div>
              </div>

              <div className="story-pillar flex items-start gap-3.5 p-3.5 rounded-xl bg-white/70 border border-bronze/15 shadow-sm hover:border-bronze/30 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-bronze" />
                </div>
                <div>
                  <h4 className="font-semibold text-midnight text-sm md:text-base">Tailored 7-Day Panchakarma Protocols</h4>
                  <p className="text-xs md:text-sm text-midnight/70 mt-0.5">Custom medicated herbal oils and therapeutic basti for long-lasting joint vitality.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="story-cta flex flex-wrap items-center gap-4">
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-midnight text-ivory hover:bg-bronze transition-all duration-300 rounded-full font-medium text-sm shadow-md hover:shadow-xl hover:scale-[1.02]"
              >
                <span>Consult Dr. Krishna Mohan</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-midnight/60 font-medium">
                In-Clinic (Hyderabad) & Virtual Consultations
              </span>
            </div>

          </div>

          {/* Right Column: Doctor Portrait Frame with Floating Credibility Accents */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div ref={imgWrapperRef} className="relative w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-gold/30 via-bronze/20 to-transparent rounded-[32px] blur-2xl -z-10 opacity-80" />

              {/* Doctor Framed Image Container */}
              <div className="doctor-frame relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/40 bg-midnight/5">
                <Image 
                  src="/images/doctors/dr-krishna-mohan.jpg" 
                  alt="Dr Krishna Mohan - Lead Ayurvedic Doctor"
                  fill 
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 90vw, 400px"
                />
                
                {/* Subtle luxury vignette to blend the doctor image gracefully */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge 1: Patients Treated */}
              <div 
                ref={badge1Ref}
                className="absolute top-8 -right-3 sm:-right-6 bg-midnight/95 backdrop-blur-md text-ivory px-4 py-3 rounded-xl border border-gold/50 shadow-2xl flex items-center gap-3 z-20"
              >
                <div className="w-9 h-9 rounded-lg bg-gold/20 border border-gold/40 flex items-center justify-center text-gold flex-shrink-0">
                  <Award className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-[10px] tracking-wider uppercase text-gold font-semibold leading-none mb-1">Proven Results</p>
                  <p className="text-xs sm:text-sm font-bold text-ivory leading-tight">22,950+ Patients Treated</p>
                </div>
              </div>

              {/* Floating Badge 2: Non-Surgical Care */}
              <div 
                ref={badge2Ref}
                className="absolute -bottom-4 -left-3 sm:-left-4 bg-white/95 backdrop-blur-md text-midnight px-4 py-3 rounded-xl border border-bronze/35 shadow-2xl flex items-center gap-3 z-20"
              >
                <div className="w-9 h-9 rounded-lg bg-bronze/15 border border-bronze/30 flex items-center justify-center text-bronze flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-bronze" />
                </div>
                <div>
                  <p className="text-[10px] tracking-wider uppercase text-bronze font-semibold leading-none mb-1">Holistic Protocol</p>
                  <p className="text-xs sm:text-sm font-bold text-midnight leading-tight">100% Non-Surgical Care</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
