"use client";

import { HeroFrameSequence } from "@/components/animation/HeroFrameSequence";
import { Sparkles, ArrowRight, ShieldCheck, HeartPulse } from "lucide-react";

export function HeroSection() {
  return (
    <HeroFrameSequence>
      {/* 1. Primary Hero Content (Visible on initial load, fades out as camera zooms out) */}
      <div className="hero-primary-content absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pt-16 md:pt-20">
        
        {/* Festive Auspicious Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-amber-300 text-xs md:text-sm font-semibold tracking-wider uppercase mb-5 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.25)]">
          <Sparkles className="w-4 h-4 text-gold animate-pulse" />
          <span>Ganesh Chaturthi Festive Care</span>
          <span>🕉️</span>
        </div>

        {/* Swasthik Ayurveda Grand Brand Logo */}
        <div className="flex justify-center mb-5 w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto">
          <img 
            src="/images/SwasthiK Ayurveda Logo New.png" 
            alt="Swasthik Ayurveda Logo"
            className="w-full h-auto object-contain drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]" 
          />
        </div>

        {/* Telugu Brand Callout */}
        <p className="text-sm md:text-base font-medium text-amber-200/90 mb-3 tracking-wide drop-shadow">
          స్వస్తిక్ కి రండి! మీ నొప్పులకి స్వస్తి పలకండి!
        </p>

        {/* Subtitle / Specialization */}
        <p className="text-sm sm:text-base md:text-lg text-ivory/90 max-w-2xl mx-auto mb-7 font-light tracking-wide drop-shadow-md">
          Back Pain &bull; Sciatica &bull; Slip Disc &bull; Knee Osteoarthritis &bull; Cervical Spondylosis
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 z-20">
          <a 
            href="#treatments"
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-gold via-amber-500 to-gold text-midnight font-bold text-sm tracking-wider uppercase hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300"
          >
            Explore Treatments
          </a>
          <a 
            href="#appointment"
            className="px-7 py-3.5 rounded-full bg-midnight/70 backdrop-blur-md border border-ivory/30 hover:border-gold text-ivory hover:text-gold font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Book Consultation
          </a>
        </div>

      </div>

      {/* 2. Mid-Scroll Divine Festive Blessing Overlay (Emerges as Ganesha reveals full form) */}
      <div className="hero-blessing-content absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 opacity-0 pointer-events-none">
        <div className="max-w-2xl mx-auto bg-midnight/80 backdrop-blur-xl border border-gold/40 p-7 sm:p-9 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] pointer-events-auto">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            <span>🌺</span>
            <span>Auspicious Healing Energy</span>
            <span>🌺</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-ivory font-bold mb-3 tracking-wide">
            May Vighnaharta Remove All Obstacles to Health
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-ivory/80 leading-relaxed mb-6 font-light">
            Embrace classical Ayurvedic therapies designed to heal the root cause of spinal and musculoskeletal pain without invasive surgery.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6 text-left">
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-gold/20">
              <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0" />
              <div>
                <p className="text-[11px] uppercase tracking-wider text-gold font-bold">Approach</p>
                <p className="text-xs text-ivory font-medium">100% Non-Surgical</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-gold/20">
              <HeartPulse className="w-5 h-5 text-gold flex-shrink-0" />
              <div>
                <p className="text-[11px] uppercase tracking-wider text-gold font-bold">Track Record</p>
                <p className="text-xs text-ivory font-medium">22,950+ Recoveries</p>
              </div>
            </div>
          </div>

          <a
            href="#appointment"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-midnight font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors shadow-lg"
          >
            <span>Begin Your Healing Journey</span>
            <ArrowRight className="w-4 h-4" />
          </a>

        </div>
      </div>

      {/* 3. Bottom Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 z-10 pointer-events-none">
        <span className="text-[11px] uppercase tracking-[3px] text-amber-200/80 font-medium">
          Scroll to Experience
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold via-amber-400 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-bounce" />
        </div>
      </div>
    </HeroFrameSequence>
  );
}
