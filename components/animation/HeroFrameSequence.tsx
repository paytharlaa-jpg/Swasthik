"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FRAME_COUNT, getFramePath } from "@/lib/framePath";

gsap.registerPlugin(ScrollTrigger);

type FocalPoint = {
  x: number;
  y: number;
};

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

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    // On mobile, maybe cap at 1.5, we'll keep 2 for now, or check window.innerWidth
    if (window.innerWidth < 768) {
      dpr = Math.min(dpr, 1.5);
    }

    const images: HTMLImageElement[] = [];
    const loadedStatus = new Array(FRAME_COUNT).fill(false);
    let loadedCount = 0;

    let requestedFrame = 0;
    let renderedFrame = -1;
    let animationFrameId: number;
    let canvasWidth = 0;
    let canvasHeight = 0;

    const focalPoint: FocalPoint = { x: 0.5, y: 0.5 };

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
      
      // If requested frame isn't loaded, find the closest loaded frame within +/- 12
      if (!loadedStatus[index]) {
        let found = false;
        for (let i = 1; i <= 12; i++) {
          if (index - i >= 0 && loadedStatus[index - i]) {
            frameToDraw = index - i;
            found = true;
            break;
          }
          if (index + i < FRAME_COUNT && loadedStatus[index + i]) {
            frameToDraw = index + i;
            found = true;
            break;
          }
        }
        if (!found) {
          // If no frame nearby is loaded, fall back to previously rendered frame
          frameToDraw = Math.max(0, renderedFrame);
        }
      }

      if (frameToDraw === renderedFrame) return; // Already drawn

      const img = images[frameToDraw];
      if (!img || !loadedStatus[frameToDraw]) return;

      const iw = img.width;
      const ih = img.height;
      if (iw === 0 || ih === 0) return;

      const w = canvasWidth;
      const h = canvasHeight;

      // Object-fit: cover equivalent
      const r = Math.max(w / iw, h / ih);
      const nw = iw * r;
      const nh = ih * r;

      const cx = (w - nw) * focalPoint.x;
      const cy = (h - nh) * focalPoint.y;

      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, iw, ih, cx, cy, nw, nh);
      
      renderedFrame = frameToDraw;
      updateDiagnostics();
    };

    const renderLoop = () => {
      drawFrame(requestedFrame);
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    const resizeCanvas = () => {
      const rect = section.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const viewWidth = window.innerWidth;
      
      canvasWidth = viewWidth;
      canvasHeight = viewHeight;
      
      canvas.width = canvasWidth * dpr;
      canvas.height = canvasHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${canvasHeight}px`;

      // Adjust focal point for mobile if needed
      focalPoint.x = viewWidth < 768 ? 0.5 : 0.5;
      
      // Force redraw
      renderedFrame = -1;
      drawFrame(requestedFrame);
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
          
          // Draw first frame immediately when it loads
          if (i === 0 && requestedFrame === 0) {
            drawFrame(0);
          }
        };
        img.onerror = () => {
          console.error(`Failed to load frame ${i}`);
        };
      }

      // Priority loading sequence
      // 1. Frame 0
      images[0].src = getFramePath(0);
      
      // 2. Frames 1-9
      for (let i = 1; i < 10; i++) {
        images[i].src = getFramePath(i);
      }
      
      // 3. Remaining frames progressively
      let loadIndex = 10;
      const loadNextBatch = () => {
        if (loadIndex >= FRAME_COUNT) return;
        const batchEnd = Math.min(loadIndex + 2, FRAME_COUNT);
        for (let i = loadIndex; i < batchEnd; i++) {
          images[i].src = getFramePath(i);
        }
        loadIndex = batchEnd;
        setTimeout(loadNextBatch, 250);
      };
      
      setTimeout(loadNextBatch, 1000);
    };

    // Initialize
    loadImages();
    resizeCanvas();
    renderLoop();

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(section);

    const trigger = ScrollTrigger.create({
      trigger: section,
      pin: true,
      start: "top top",
      end: "+=500%",
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.max(0, Math.round(progress * (FRAME_COUNT - 1)))
        );
        requestedFrame = frameIndex;
        updateDiagnostics(progress);
      },
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      trigger.kill();
    };
  }, [showDiagnostics]);

  return (
    <section ref={sectionRef} className="relative w-full h-screen bg-[#081f18] overflow-hidden">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/55 via-black/10 to-transparent" />

      <div className="relative z-10 h-full w-full">
        {children}
      </div>
      
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

