"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { contactConfig } from "@/config/contact";
import { NEW_YEAR } from "@/config/countdown";
import { CountdownStrip, useCountdown } from "./Countdown";
import type { BowlScene } from "./BowlScene";

gsap.registerPlugin(ScrollTrigger);

const BOOK_MSG =
  "Hello Swasthik Ayurveda, I would like to book my New Year 2027 spine & joint assessment with Dr. Krishna Mohan.";

export function UruliHero() {
  const wrapRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phaseARef = useRef<HTMLDivElement>(null);
  const phaseBRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<BowlScene | null>(null);
  const [gl, setGl] = useState<"loading" | "ok" | "fail">("loading");
  const parts = useCountdown();
  const celebrating = parts?.done ?? false;

  /* Boot three.js lazily so it never blocks the first paint */
  useEffect(() => {
    let dead = false;
    let io: IntersectionObserver | undefined;
    let ro: ResizeObserver | undefined;
    const canvas = canvasRef.current!;
    (async () => {
      try {
        const probe = document.createElement("canvas");
        if (!(probe.getContext("webgl2") || probe.getContext("webgl"))) throw new Error("no webgl");
        const { BowlScene } = await import("./BowlScene");
        if (dead) return;
        const scene = new BowlScene(canvas);
        sceneRef.current = scene;
        setGl("ok");
        gsap.to(scene.state, { intro: 1, duration: 2.6, ease: "power3.out" });
        io = new IntersectionObserver(([e]) => (e.isIntersecting ? scene.start() : scene.stop()));
        io.observe(wrapRef.current!);
        ro = new ResizeObserver(() => scene.resize());
        ro.observe(canvas);
      } catch {
        if (!dead) setGl("fail");
      }
    })();
    const onMove = (e: PointerEvent) =>
      sceneRef.current?.setPointer(e.clientX / window.innerWidth - 0.5, e.clientY / window.innerHeight - 0.5);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      dead = true;
      io?.disconnect();
      ro?.disconnect();
      window.removeEventListener("pointermove", onMove);
      sceneRef.current?.dispose();
      sceneRef.current = null;
    };
  }, []);

  /* Scroll: herbs rise around the bowl, then the camera dives into the oil */
  useEffect(() => {
    if (gl === "loading") return;
    const state = sceneRef.current?.state ?? { dive: 0, fly: 0, intro: 1 };
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: wrapRef.current, start: "top top", end: "bottom bottom", scrub: 1 },
      });
      tl.to(state, { fly: 1, ease: "none", duration: 0.55 }, 0);
      tl.to(phaseARef.current, { autoAlpha: 0, y: -60, ease: "power2.in", duration: 0.3 }, 0.15);
      tl.to(state, { dive: 1, ease: "power2.inOut", duration: 0.5 }, 0.3);
      tl.fromTo(phaseBRef.current, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, ease: "expo.out", duration: 0.25 }, 0.62);
      tl.to({}, { duration: 0.15 });
    }, wrapRef);
    return () => ctx.revert();
  }, [gl]);

  return (
    <section ref={wrapRef} className="relative h-[250vh] bg-ink" aria-labelledby="hero-title">
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        {/* soft daylight wash */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 60% at 70% 55%, #fffaf0 0%, rgba(255,250,240,0) 70%), radial-gradient(35% 40% at 15% 20%, rgba(47,110,59,0.07) 0%, transparent 70%), radial-gradient(30% 35% at 85% 90%, rgba(226,85,15,0.08) 0%, transparent 70%)",
          }}
        />

        {/* 3D canvas: right side on desktop, top on phones */}
        <canvas
          ref={canvasRef}
          aria-hidden
          className="absolute inset-0 h-full w-full"
        />
        {gl === "fail" && (
          <div className="absolute inset-x-4 top-20 h-[46svh] overflow-hidden rounded-[28px] md:inset-y-24 md:left-auto md:right-10 md:h-auto md:w-[50%]">
            <Image src="/images/treatments/shirodhara-therapy.jpg" alt="" fill priority sizes="50vw" className="object-cover" />
          </div>
        )}

        {/* ───────── Phase A */}
        <div ref={phaseARef} className="pointer-events-none absolute inset-0">
          <div className="wrap flex h-full flex-col justify-end pb-6 md:justify-center md:pb-0 md:pt-16">
            <div className="pointer-events-auto max-w-xl md:max-w-[38%]">
              <p data-hero-in style={{ animationDelay: "0.15s" }} className="eyebrow inline-flex items-center gap-2 text-lime">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-saffron opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-saffron" />
                </span>
                {celebrating ? `Happy New Year ${NEW_YEAR}` : `Countdown to ${NEW_YEAR}`}
              </p>
              <h1
                id="hero-title"
                data-hero-in
                style={{ animationDelay: "0.3s" }}
                className="display mt-4 text-[11vw] md:text-[5.2vw] lg:text-[4.8vw]"
              >
                {celebrating ? (
                  <>
                    Welcome {NEW_YEAR}, <span className="text-lime">pain-free.</span>
                  </>
                ) : (
                  <>
                    Begin {NEW_YEAR} <span className="text-lime">pain-free.</span>
                  </>
                )}
              </h1>
              <p data-hero-in style={{ animationDelay: "0.45s" }} className="mt-5 hidden max-w-md text-lg text-bone/70 leading-relaxed sm:block">
                Warm medicated oils, healing herbs and a doctor who finds the root cause. Classical Ayurveda for back,
                neck and knee pain in Kukatpally, Hyderabad.
              </p>
              <div data-hero-in style={{ animationDelay: "0.6s" }} className="mt-6 max-w-md rounded-2xl border hairline bg-ink/70 px-4 backdrop-blur md:px-5">
                {celebrating ? (
                  <p className="display py-4 text-4xl text-saffron">It&apos;s {NEW_YEAR}!</p>
                ) : (
                  <CountdownStrip parts={parts} />
                )}
              </div>
              <div data-hero-in style={{ animationDelay: "0.75s" }} className="mt-6 flex flex-wrap items-center gap-3">
                <a href={contactConfig.getWhatsAppUrl(BOOK_MSG)} target="_blank" rel="noopener noreferrer" className="btn btn-saffron">
                  Book your {NEW_YEAR} reset <ArrowUpRight size={18} />
                </a>
                <Link href="/therapies" className="btn btn-ghost">
                  Our therapies
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 right-6 hidden items-center gap-6 md:flex">
            <span className="eyebrow text-ash">Brass uruli · medicated oil · tulsi · neem · haridra</span>
            <span className="eyebrow inline-flex items-center gap-2 text-bone">
              <ArrowDown size={14} className="animate-bounce" /> Scroll
            </span>
          </div>
        </div>

        {/* ───────── Phase B: camera is inside the oil */}
        <div ref={phaseBRef} className="invisible absolute inset-0 flex items-end justify-center pb-10 opacity-0 md:items-center md:pb-0">
          <div className="wrap">
            <div className="mx-auto max-w-2xl rounded-[28px] bg-ink/85 p-7 text-center shadow-[0_30px_80px_-30px_rgba(60,40,10,0.45)] backdrop-blur-md md:p-12">
              <p className="eyebrow text-saffron">Shirodhara · Kati Vasti · Janu Vasti</p>
              <h2 className="display mt-4 text-[9.5vw] md:text-[4vw]">
                Every drop brings you closer to <span className="text-lime">{NEW_YEAR}.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-md text-bone/70 leading-relaxed">
                Oils prepared to classical recipes, chosen for your body and your condition, never one-size-fits-all.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a href={contactConfig.getWhatsAppUrl(BOOK_MSG)} target="_blank" rel="noopener noreferrer" className="btn btn-lime">
                  Claim a New Year slot <ArrowUpRight size={18} />
                </a>
                <Link href="/treatments" className="btn btn-ghost">
                  Conditions we treat
                </Link>
              </div>
            </div>
          </div>
        </div>

        <p className="sr-only">
          Swasthik Ayurveda, Kukatpally, Hyderabad: non-surgical Ayurvedic treatment for sciatica, slip disc, L4-L5 disc
          bulge, back pain, knee osteoarthritis and cervical spondylosis with Dr. Krishna Mohan.
        </p>
      </div>
    </section>
  );
}
