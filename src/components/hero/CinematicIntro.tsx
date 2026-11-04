"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

interface CinematicIntroProps {
  onComplete: () => void;
}

export function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    // Smooth progress counter from 0% to 100% over ~1.8s
    const startTime = performance.now();
    const duration = 1800; // ms

    let animId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      // Smooth easeInOutQuad easing
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      const currentPct = Math.round(eased * 100);

      setProgress(currentPct);

      if (t < 1) {
        animId = requestAnimationFrame(tick);
      } else {
        // Complete! Trigger graceful fadeout curtain
        setIsFadingOut(true);
        setTimeout(() => {
          setHasDismissed(true);
          onComplete();
        }, 650);
      }
    };

    animId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setHasDismissed(true);
      onComplete();
    }, 200);
  };

  if (hasDismissed) return null;

  return (
    <aside
      aria-label="Loading Swasthik Ayurveda"
      className={`fixed inset-0 z-[120] flex flex-col items-center justify-center bg-midnight transition-all duration-700 select-none ${
        isFadingOut ? "opacity-0 pointer-events-none scale-105" : "opacity-100 pointer-events-auto scale-100"
      }`}
    >
      {/* Background Sacred Ambient Golden Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gold/10 blur-[100px] pointer-events-none animate-pulse" />

      {/* Decorative Traditional Diya Aura */}
      <div className="relative mb-8 flex items-center justify-center">
        {/* Pulsing Concentric Rings */}
        <div className="absolute w-44 h-44 rounded-full border border-gold/20 animate-ping opacity-25" />
        <div className="absolute w-36 h-36 rounded-full border border-gold/30 animate-pulse" />
        <div className="w-28 h-28 rounded-full bg-gradient-to-b from-gold/20 via-gold/5 to-transparent border border-gold/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_40px_rgba(212,175,55,0.3)]">
          {/* Animated 2D Diya & Flame Icon */}
          <div className="relative flex flex-col items-center">
            {/* Flickering Flame */}
            <div className="w-3.5 h-6 rounded-full bg-gradient-to-t from-orange-500 via-amber-400 to-yellow-200 animate-bounce shadow-[0_0_20px_#ffa500]" />
            {/* Brass Diya Bowl */}
            <div className="w-10 h-3.5 rounded-b-full bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 shadow-md -mt-1 border-t border-amber-300" />
          </div>
        </div>
      </div>

      {/* Official Swasthik Ayurveda Logo Reveal */}
      <div className="relative flex flex-col items-center px-6 max-w-md text-center">
        <div className="relative w-64 h-20 md:w-80 md:h-24 mb-4 filter drop-shadow-[0_0_24px_rgba(212,175,55,0.35)]">
          <Image
            src="/images/brand/swasthik-ayurveda-logo.png"
            alt={siteConfig.name}
            fill
            priority
            className="object-contain"
          />
        </div>

        <p className="text-xs md:text-sm font-heading tracking-[0.25em] uppercase text-gold font-medium mb-8">
          Traditional Wisdom • Spine & Joint Care
        </p>

        {/* Loading Progress Bar Container */}
        <div className="w-64 md:w-72 h-1.5 rounded-full bg-white/10 overflow-hidden relative mb-3">
          <div
            className="h-full bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-300 transition-all duration-100 ease-out rounded-full shadow-[0_0_12px_rgba(255,215,0,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Text & Percentage */}
        <div className="flex items-center justify-between w-64 md:w-72 text-[11px] font-mono tracking-wider text-ivory/60">
          <span>
            {progress < 35
              ? "Preparing Sanctuary..."
              : progress < 70
              ? "Lighting Royal Diyas..."
              : progress < 99
              ? "Awakening Ayurvedic Care..."
              : "Welcome to Swasthik Ayurveda"}
          </span>
          <span className="text-gold font-bold">{progress}%</span>
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 z-20 text-xs font-semibold uppercase tracking-widest text-ivory/50 hover:text-gold border border-white/10 hover:border-gold/40 px-4 py-2 rounded-full transition-all backdrop-blur-sm cursor-pointer"
        aria-label="Skip to website"
      >
        Skip Intro &rarr;
      </button>
    </aside>
  );
}
