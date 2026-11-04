"use client";

import { useState } from "react";
import Link from "next/link";
import { Activity, ArrowRight, ShieldCheck } from "lucide-react";
import { contactConfig } from "@/config/contact";

interface PainPoint {
  id: string;
  title: string;
  ayurvedicName: string;
  slug: string;
  description: string;
  top: string;
  left: string;
  commonIn: string;
}

const painPoints: PainPoint[] = [
  {
    id: "cervical",
    title: "Neck & Cervical Spine",
    ayurvedicName: "Manyastambha",
    slug: "cervical-spondylosis",
    description: "Cervical disc stiffness, suboccipital tension, vertigo, and radiating shoulder pain.",
    top: "18%",
    left: "50%",
    commonIn: "IT professionals, desk workers, smart-device users",
  },
  {
    id: "upper-back",
    title: "Thoracic & Mid Back",
    ayurvedicName: "Prishta Shoola",
    slug: "back-pain",
    description: "Postural fatigue, rhomboid trigger knots, and paraspinal contracture.",
    top: "32%",
    left: "48%",
    commonIn: "Prolonged sitting, heavy backpacks, poor sleeping postures",
  },
  {
    id: "lumbar",
    title: "L4-L5 Lower Back",
    ayurvedicName: "Kati Shoola / Kati Graha",
    slug: "l4-l5-disc-bulge",
    description: "Acute beltline pain, disc bulge, morning lumbar rigidity, and nerve pinching.",
    top: "45%",
    left: "51%",
    commonIn: "Heavy lifting, sedentary chairs, age-related disc dehydration",
  },
  {
    id: "sciatica",
    title: "Sciatic Nerve & Hip",
    ayurvedicName: "Gridhrasi",
    slug: "sciatica",
    description: "Radiating pain shooting from glute down into the hamstring, calf, and foot.",
    top: "58%",
    left: "40%",
    commonIn: "Disc herniation, piriformis syndrome, driving strain",
  },
  {
    id: "knee",
    title: "Knee Joint & Cartilage",
    ayurvedicName: "Sandhigata Vata",
    slug: "knee-osteoarthritis",
    description: "Synovial fluid depletion, cartilage friction, crepitus sound, and stair difficulty.",
    top: "76%",
    left: "42%",
    commonIn: "Adults 45+, sports strain, excess body weight",
  },
];

export function BodyPainMap() {
  const [activePoint, setActivePoint] = useState<PainPoint>(painPoints[2]); // default to L4-L5

  return (
    <div className="rounded-3xl bg-navy-deep/40 border border-white/10 p-6 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Interactive Silhouette Visualization */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-72 h-96 md:w-80 md:h-[460px] rounded-3xl bg-midnight/80 border border-gold/30 p-4 flex items-center justify-center overflow-hidden">
            {/* Subtle anatomical spine outline */}
            <svg
              viewBox="0 0 200 400"
              className="w-full h-full opacity-30 text-gold stroke-current fill-none stroke-[1.5]"
            >
              {/* Head & Neck */}
              <circle cx="100" cy="45" r="25" />
              <path d="M100 70 L100 120" strokeWidth="3" />
              {/* Shoulder & Ribs */}
              <path d="M60 110 Q100 95 140 110" />
              <path d="M70 135 Q100 120 130 135" />
              <path d="M75 160 Q100 145 125 160" />
              {/* Spine Column */}
              <line x1="100" y1="120" x2="100" y2="240" strokeWidth="4" strokeDasharray="4 2" />
              {/* Pelvis */}
              <path d="M70 240 Q100 230 130 240 L120 270 Q100 280 80 270 Z" />
              {/* Legs */}
              <path d="M85 270 L80 340 L75 390" strokeWidth="3" />
              <path d="M115 270 L120 340 L125 390" strokeWidth="3" />
            </svg>

            {/* Clickable Hotspots */}
            {painPoints.map((point) => {
              const isActive = activePoint.id === point.id;
              return (
                <button
                  key={point.id}
                  onClick={() => setActivePoint(point)}
                  style={{ top: point.top, left: point.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                  aria-label={`Select ${point.title}`}
                >
                  <span
                    className={`absolute inset-0 rounded-full animate-ping opacity-60 ${
                      isActive ? "bg-gold" : "bg-emerald"
                    }`}
                  />
                  <div
                    className={`relative w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isActive
                        ? "bg-gold text-midnight border-white scale-125 shadow-[0_0_16px_rgba(212,175,55,0.8)]"
                        : "bg-midnight/90 text-gold border-gold/60 hover:scale-110"
                    }`}
                  >
                    <Activity size={14} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Pain Detail Card */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-3 w-fit">
            <ShieldCheck size={14} />
            <span>Ayurvedic Correlation: {activePoint.ayurvedicName}</span>
          </div>

          <h3 className="text-2xl md:text-4xl font-heading font-semibold text-ivory mb-4">
            {activePoint.title}
          </h3>

          <p className="text-base md:text-lg text-ivory/80 leading-relaxed font-body mb-6">
            {activePoint.description}
          </p>

          <div className="p-4 rounded-2xl bg-midnight/60 border border-white/10 mb-8">
            <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-1">
              Commonly Seen Among:
            </span>
            <span className="text-sm text-ivory/90 font-body">{activePoint.commonIn}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={`/treatments/${activePoint.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold hover:bg-gold-soft text-midnight text-sm font-semibold transition-all shadow-[0_0_16px_rgba(212,175,55,0.3)]"
            >
              <span>Explore Treatment Approach</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href={contactConfig.getWhatsAppUrl(
                `Hello Dr. Krishna Mohan, I am seeking guidance for ${activePoint.title} (${activePoint.ayurvedicName}). Please share consultation options.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/10 text-sm font-semibold transition-all"
            >
              <span>Consult on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

