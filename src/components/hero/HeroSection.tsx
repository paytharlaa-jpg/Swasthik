"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight, ShieldCheck, Phone, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ThreeCanvas } from "@/components/three/ThreeCanvas";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const topBadgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !heroRef.current) return;

    const ctx = gsap.context(() => {
      // Cinematic scroll-out animation:
      // Smoothly lifts hero text out as user scrolls downward into the doctor section
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
          y: -40,
          opacity: 0.1,
          scale: 0.97,
          ease: "power2.inOut",
        });
      }

      if (topBadgesRef.current) {
        gsap.to(topBadgesRef.current, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "50% top",
            scrub: 0.5,
          },
          opacity: 0,
          y: -20,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero-section"
      ref={heroRef}
      className="relative h-screen min-h-[640px] w-full overflow-hidden flex flex-col justify-between"
    >
      {/* 1. Real-time 3D Royal Diwali Palace Courtyard Scene (Canvas) */}
      <div className="absolute inset-0 z-0">
        <ThreeCanvas />
      </div>

      {/* 2. Top Navigation Clearance & Festive Status Pills */}
      <div
        ref={topBadgesRef}
        className="relative z-10 w-full pt-20 sm:pt-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 pointer-events-none"
      >
        <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-midnight/80 backdrop-blur-md border border-gold/40 text-gold text-[11px] sm:text-xs font-semibold uppercase tracking-widest shadow-lg pointer-events-auto">
          <ShieldCheck size={14} className="text-gold shrink-0" />
          <span className="hidden sm:inline">Ayurvedic Spine & Joint Care • Hyderabad</span>
          <span className="sm:hidden">Spine & Joint Care • Hyderabad</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-[11px] sm:text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-lg pointer-events-auto animate-pulse">
          <Sparkles size={13} className="text-gold shrink-0" />
          <span className="hidden sm:inline">Tap sky to launch crackers 🎆</span>
          <span className="sm:hidden">Tap sky for crackers 🎆</span>
        </div>
      </div>

      {/* 3. Open Palace Horizon (Dedicated clearance for the 3D Toran, Palace Arch & Happy Diwali) */}
      <div className="flex-1 w-full pointer-events-none" />

      {/* 4. Elegant Editorial Healthcare Presentation (No Heavy Rectangular Card) */}
      <div
        ref={contentRef}
        className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 pb-6 sm:pb-8 md:pb-12 text-center pointer-events-auto"
      >
        {/* Layer 5: Healthcare Category Label & Clinical Leadership */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 text-gold text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-1.5 sm:mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          <span className="hidden sm:inline">Personalized Ayurvedic Care • </span>
          <span>Hyderabad</span>
          <span>•</span>
          <span className="text-ivory/90 font-medium">{siteConfig.leadDoctor}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-heading font-semibold text-ivory tracking-tight leading-snug sm:leading-[1.18] mb-2 sm:mb-3 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
          Rediscover the{" "}
          <span className="bg-gradient-to-r from-gold via-champagne to-gold-soft bg-clip-text text-transparent">
            Freedom
          </span>{" "}
          of Movement
        </h1>

        {/* Supporting Clinical Description */}
        <p className="max-w-2xl mx-auto text-xs sm:text-base text-ivory/85 font-body leading-relaxed mb-4 sm:mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
          Evidence-informed classical Ayurvedic management for sciatica, lumbar disc bulges, and knee osteoarthritis in Kukatpally.
        </p>

        {/* Layer 6: Conversion Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 max-w-sm sm:max-w-none mx-auto w-full">
          <a
            href={contactConfig.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-gold to-saffron hover:from-gold-soft hover:to-gold text-midnight font-heading font-semibold text-xs sm:text-sm transition-all duration-300 shadow-[0_0_28px_rgba(212,175,55,0.45)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            <MessageCircle size={16} />
            <span>Book Your Consultation</span>
          </a>

          <Link
            href="/treatments"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-midnight/80 hover:bg-midnight backdrop-blur-md border border-gold/40 text-gold hover:text-champagne font-heading font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-105"
          >
            <span>Explore Treatments</span>
            <ArrowRight size={14} />
          </Link>

          <a
            href={contactConfig.getPhoneUrl()}
            className="hidden md:inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full bg-midnight/60 hover:bg-midnight/90 backdrop-blur-md border border-white/10 hover:border-gold/40 text-ivory/80 hover:text-gold text-xs font-medium transition-colors"
          >
            <Phone size={13} className="text-gold" />
            <span>{siteConfig.phone}</span>
          </a>

          {/* Quick tap-to-call link for small mobile screens */}
          <a
            href={contactConfig.getPhoneUrl()}
            className="sm:hidden inline-flex items-center justify-center gap-1.5 py-1 text-ivory/70 hover:text-gold text-xs font-medium"
          >
            <Phone size={12} className="text-gold" />
            <span>Call Clinic: {siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
