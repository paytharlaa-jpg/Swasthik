"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { conditionsData } from "@/content/treatments/treatmentData";
import { Label } from "@/components/ui/blocks";

gsap.registerPlugin(ScrollTrigger);

const TONES = ["#e2550f", "#2f6e3b", "#c4831f"];

/** Pinned horizontal scroll on desktop; plain vertical list on phones. */
export function ConditionsRail() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const track = trackRef.current!;
      const distance = () => track.scrollWidth - window.innerWidth;
      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => gsap.set(barRef.current, { scaleX: self.progress }),
        },
      });
      // Images drift inside their frames as the rail moves
      gsap.utils.toArray<HTMLElement>("[data-rail-img]").forEach((img) => {
        gsap.fromTo(
          img,
          { xPercent: -12 },
          {
            xPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              containerAnimation: tween,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          }
        );
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="conditions" className="relative overflow-hidden bg-ink lg:h-svh">
      <div ref={trackRef} className="flex flex-col lg:h-full lg:flex-row lg:items-stretch lg:will-change-transform">
        {/* Intro panel */}
        <div className="wrap flex shrink-0 flex-col justify-center py-20 lg:w-[46vw] lg:max-w-none lg:py-0 lg:pl-10 lg:pr-16">
          <Label n="02">Conditions we treat</Label>
          <h2 data-split className="display mt-6 text-[10.2vw] lg:text-[4.9vw]">
            Pain has a <span className="text-saffron">root.</span> We find it.
          </h2>
          <p className="mt-8 max-w-md text-lg text-bone/70 leading-relaxed">
            Eight conditions, one approach: a proper diagnosis, classical therapies and a plan that fits your life.
            Non-surgical first.
          </p>
          <p className="eyebrow mt-10 hidden text-ash lg:block">Keep scrolling →</p>
        </div>

        {conditionsData.map((c, i) => (
          <Link
            key={c.slug}
            href={`/treatments/${c.slug}`}
            className="group relative flex shrink-0 flex-col justify-between border-t hairline px-4 py-10 md:px-10 lg:w-[38vw] lg:border-l lg:border-t-0 lg:py-28"
          >
            <div className="flex items-start justify-between">
              <span className="display text-7xl lg:text-8xl" style={{ color: TONES[i % 3] }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex h-14 w-14 items-center justify-center rounded-full border hairline transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
                <ArrowUpRight size={22} />
              </span>
            </div>

            <div className="duotone my-8 aspect-[4/3] w-full rounded-2xl lg:my-0 lg:aspect-auto lg:h-[34vh]" style={{ ["--duo" as string]: TONES[i % 3] }}>
              <div data-rail-img className="absolute inset-y-0 -inset-x-[14%]">
                <Image src={c.image} alt={`${c.name} Ayurvedic treatment at Swasthik Ayurveda Hyderabad`} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
              </div>
            </div>

            <div>
              <p className="eyebrow mb-3 text-ash">{c.badge}</p>
              <h3 className="display text-5xl md:text-6xl lg:text-[2.5vw] transition-colors group-hover:text-lime">
                {c.name.replace(/ \(.*\)/, "")}
              </h3>
              <p className="mt-4 max-w-sm text-bone/70 leading-relaxed">{c.shortDescription}</p>
            </div>
          </Link>
        ))}

        {/* End panel */}
        <div className="flex shrink-0 items-center justify-center bg-saffron px-10 py-20 text-ink lg:w-[40vw]">
          <Link href="/treatments" className="group text-center">
            <span className="display block text-[9.6vw] lg:text-[4.2vw] leading-none">All</span>
            <span className="display block text-[9.6vw] lg:text-[4.2vw] leading-none">conditions</span>
            <span className="mt-6 inline-flex items-center gap-2 font-medium">
              Explore treatment guides <ArrowUpRight className="transition-transform group-hover:rotate-45" />
            </span>
          </Link>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute inset-x-0 bottom-0 hidden h-1 bg-bone/10 lg:block">
        <div ref={barRef} className="h-full origin-left scale-x-0 bg-saffron" />
      </div>
    </section>
  );
}
