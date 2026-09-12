"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FRAME_COUNT, getFramePath } from "@/lib/framePath";

gsap.registerPlugin(ScrollTrigger);

interface HeroFrameSequenceProps {
  showDiagnostics?: boolean;
  children?: React.ReactNode;
}

export function HeroFrameSequence({ showDiagnostics = false, children }: HeroFrameSequenceProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const diagRequestedRef = useRef<HTMLSpanElement>(null);
  const diagRenderedRef = useRef<HTMLSpanElement>(null);
  const diagLoadedRef = useRef<HTMLSpanElement>(null);
  const diagProgressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (window.innerWidth < 768) {
      dpr = Math.min(dpr, 1.5);
    }

    const images: HTMLImageElement[] = [];
    const loadedStatus = new Array(FRAME_COUNT).fill(false);
    let loadedCount = 0;

    let requestedFrame = 0;
    let renderedFrame = -1;
    let canvasWidth = 0;
    let canvasHeight = 0;

    const updateDiagnostics = (progress?: number) => {
      if (!showDiagnostics) return;
      if (diagRequestedRef.current) diagRequestedRef.current.innerText = requestedFrame.toString();
      if (diagRenderedRef.current) diagRenderedRef.current.innerText = renderedFrame.toString();
      if (diagLoadedRef.current) diagLoadedRef.current.innerText = `${loadedCount} / ${FRAME_COUNT}`;
      if (progress !== undefined && diagProgressRef.current) {
        diagProgressRef.current.innerText = progress.toFixed(3);
      }
    };

    const drawFrame = (index: number) => {
      if (index < 0 || index >= FRAME_COUNT) return;

      let frameToDraw = index;

      // If requested frame isn't loaded yet, find nearest loaded frame within +/- 20
      if (!loadedStatus[index]) {
        for (let i = 1; i <= 20; i++) {
          if (index - i >= 0 && loadedStatus[index - i]) {
            frameToDraw = index - i;
            break;
          }
          if (index + i < FRAME_COUNT && loadedStatus[index + i]) {
            frameToDraw = index + i;
            break;
          }
        }
      }

      if (frameToDraw === renderedFrame) return;

      const img = images[frameToDraw];
      if (!img || !loadedStatus[frameToDraw]) return;

      const iw = img.naturalWidth || img.width;
      const ih = img.naturalHeight || img.height;
      if (iw === 0 || ih === 0) return;

      const w = canvasWidth;
      const h = canvasHeight;

      // Object-fit: cover equivalent, centered
      const r = Math.max(w / iw, h / ih);
      const nw = iw * r;
      const nh = ih * r;

      const cx = (w - nw) * 0.5;
      const cy = (h - nh) * 0.5;

      ctx.drawImage(img, 0, 0, iw, ih, cx, cy, nw, nh);

      renderedFrame = frameToDraw;
      updateDiagnostics();
    };

    const resizeCanvas = () => {
      const viewHeight = window.innerHeight;
      const viewWidth = window.innerWidth;

      canvasWidth = viewWidth;
      canvasHeight = viewHeight;

      canvas.width = Math.round(canvasWidth * dpr);
      canvas.height = Math.round(canvasHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${canvasHeight}px`;

      // Force redraw current frame on resize
      const prev = renderedFrame;
      renderedFrame = -1;
      drawFrame(prev >= 0 ? prev : requestedFrame);
    };

    const loadImages = () => {
      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.decoding = "async";
        images.push(img);

        img.onload = () => {
          loadedStatus[i] = true;
          loadedCount++;
          updateDiagnostics();

          // Render immediately if this is frame 0 or the currently requested frame
          if (i === requestedFrame || (i === 0 && renderedFrame === -1)) {
            drawFrame(i);
          }
        };

        img.onerror = () => {
          console.warn(`Frame ${i} load failed`);
        };
      }

      // Step 1: Priority load Frame 0
      images[0].src = getFramePath(0);

      // Step 2: Stride phase - load every 6th frame immediately in parallel (covers 0..239 in ~200ms)
      for (let i = 6; i < FRAME_COUNT; i += 6) {
        images[i].src = getFramePath(i);
      }

      // Step 3: Stream all remaining frames in rapid parallel batches
      let batchIdx = 1;
      const streamRemaining = () => {
        let countInBatch = 0;
        while (batchIdx < FRAME_COUNT && countInBatch < 24) {
          if (!images[batchIdx].src) {
            images[batchIdx].src = getFramePath(batchIdx);
            countInBatch++;
          }
          batchIdx++;
        }

        if (batchIdx < FRAME_COUNT) {
          setTimeout(streamRemaining, 20);
        }
      };

      setTimeout(streamRemaining, 40);
    };

    // Initialize
    loadImages();
    resizeCanvas();

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(section);

    // Master Unified ScrollTrigger Timeline
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "top top",
          end: "+=320%",
          scrub: 0.5,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const frameIndex = Math.min(
              FRAME_COUNT - 1,
              Math.max(0, Math.round(progress * (FRAME_COUNT - 1)))
            );
            requestedFrame = frameIndex;
            drawFrame(requestedFrame);
            updateDiagnostics(progress);
          },
        },
      });

      // Synchronized text animations matching the Ganesha camera motion:
      // Phase 1 (0% -> 25% scroll): Initial branding stays clear, then elevates and dissolves
      tl.to(".hero-primary-content", {
        opacity: 0,
        y: -40,
        scale: 0.95,
        duration: 0.8,
        ease: "power2.inOut",
      }, 0.2);

      tl.to(".scroll-indicator", {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      }, 0.1);

      // Phase 2 (30% -> 75% scroll): Divine festive blessing appears over full statue
      tl.fromTo(
        ".hero-blessing-content",
        { opacity: 0, y: 35, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" },
        0.8
      );

      // Phase 3 (75% -> 100% scroll): Blessing fades away to showcase complete wide statue
      tl.to(
        ".hero-blessing-content",
        { opacity: 0, y: -30, scale: 0.96, duration: 0.8, ease: "power2.in" },
        2.2
      );
    });

    return () => {
      mm.revert();
      resizeObserver.disconnect();
    };
  }, [showDiagnostics]);

  return (
    <section ref={sectionRef} className="relative w-full h-screen bg-[#080B0F] overflow-hidden">
      {/* 240-Frame Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Cinematic Ambient Vignette & Golden Atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-midnight/85 via-black/20 to-black/60" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-radial from-transparent via-black/20 to-black/70 mix-blend-multiply" />

      {/* Content Container */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>

      {/* Optional Diagnostics */}
      {showDiagnostics && (
        <div className="absolute top-4 left-4 z-50 bg-black/80 text-[#00ff00] p-4 font-mono text-sm border border-[#00ff00] rounded">
          <div>Progress: <span ref={diagProgressRef}>0.000</span></div>
          <div>Requested frame: <span ref={diagRequestedRef}>0</span></div>
          <div>Rendered frame: <span ref={diagRenderedRef}>0</span></div>
          <div>Loaded frames: <span ref={diagLoadedRef}>0 / {FRAME_COUNT}</span></div>
          <div>Canvas: active</div>
          <div>ScrollTrigger: active</div>
        </div>
      )}
    </section>
  );
}
