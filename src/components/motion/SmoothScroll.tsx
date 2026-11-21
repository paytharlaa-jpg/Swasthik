"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollFX } from "./ScrollFX";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;
export const getLenis = () => lenisInstance;

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll animations are user-driven, so they run even when the OS
    // "animation effects" setting is off (common on Windows).
    document.documentElement.classList.add("js-motion");

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      touchMultiplier: 1.4,
    });
    lenisInstance = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  // New page → jump to top (Lenis keeps its own scroll position otherwise).
  useEffect(() => {
    if (window.location.hash) return;
    lenisInstance?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ScrollFX />
      {children}
    </>
  );
}
