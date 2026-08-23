"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function LuxuryCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string>("");

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      gsap.to(cursor, {
        x: mouseX - 24,
        y: mouseY - 24,
        duration: 0.6,
        ease: "power3.out"
      });
      
      gsap.to(dot, {
        x: mouseX - 4,
        y: mouseY - 4,
        duration: 0.1,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Add magnetic / hover states to interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest("a, button, input, textarea, .cursor-pointer");
      
      if (clickable) {
        const text = clickable.getAttribute("data-cursor") || "";
        setLabel(text);
        
        gsap.to(cursor, {
          scale: 1.5,
          borderColor: "rgba(212, 175, 55, 0.8)", // Gold
          backgroundColor: text ? "rgba(11, 11, 13, 0.8)" : "transparent",
          duration: 0.3
        });
        
        if (text) {
          gsap.to(dot, { opacity: 0, duration: 0.2 });
        }
      } else {
        setLabel("");
        gsap.to(cursor, {
          scale: 1,
          borderColor: "rgba(212, 175, 55, 0.4)",
          backgroundColor: "transparent",
          duration: 0.3
        });
        gsap.to(dot, { opacity: 1, duration: 0.2 });
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-gold/40 pointer-events-none z-[9999] mix-blend-exclusion flex items-center justify-center transition-colors overflow-hidden hidden md:flex"
      >
        <span className="text-[8px] uppercase tracking-widest text-gold text-center leading-none mt-0.5 font-semibold">
          {label}
        </span>
      </div>
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-gold rounded-full pointer-events-none z-[9999] mix-blend-exclusion hidden md:block"
      />
    </>
  );
}
