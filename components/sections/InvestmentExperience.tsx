"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function InvestmentExperience() {
  const containerRef = useRef<HTMLElement>(null);
  const metrics = [
    { label: "Patients Treated", value: 22, suffix: ",950+", id: "patients" },
    { label: "Days Program", value: 7, suffix: "", id: "days" },
    { label: "Natural Care", value: 100, suffix: "%", id: "natural" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        }
      });

      tl.from(".investment-card", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        duration: 1
      });

      // Number counting animation
      metrics.forEach((metric) => {
        const el = document.getElementById(`metric-${metric.id}`);
        if (!el) return;

        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
          innerHTML: metric.value,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: metric.value % 1 === 0 ? 1 : 0.1 },
          onUpdate: function() {
            el.innerHTML = Number(this.targets()[0].innerHTML).toFixed(metric.value % 1 === 0 ? 0 : 1);
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, [metrics]);

  return (
    <section ref={containerRef} className="section-padding bg-[#0B0B0D] relative overflow-hidden text-ivory">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="container-luxury relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-h2 font-heading text-gold mb-6">Proven Success</h2>
          <p className="text-body-lg text-ivory/70 max-w-2xl mx-auto">
            Swasthik Ayurveda has helped thousands regain their mobility and live pain-free through natural, root-cause healing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {metrics.map((metric) => (
            <div key={metric.id} className="investment-card glass-card p-12 text-center group hover:-translate-y-4 transition-transform duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500" />
              
              <div className="text-gold-soft text-sm uppercase tracking-widest mb-8">{metric.label}</div>
              <div className="text-h1 font-hero flex items-baseline justify-center">
                {metric.prefix && <span className="text-h3 text-gold/60 mr-2">{metric.prefix}</span>}
                <span id={`metric-${metric.id}`}>0</span>
                {metric.suffix && <span className="text-h3 text-gold/60 ml-2">{metric.suffix}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
