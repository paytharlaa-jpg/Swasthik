"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function FeaturedProperties() {
  const containerRef = useRef<HTMLElement>(null);
  
  const treatments = [
    {
      id: 1,
      title: "Agnikarma Therapy",
      location: "Root Cause Healing",
      image: "/treatmentimages/ayurvedic-panchakarma-treatment.jpg",
      animClass: "card-scale"
    },
    {
      id: 2,
      title: "Panchakarma Detox",
      location: "Deep Cleansing",
      image: "/treatmentimages/detoxify-body-with-ayurvedic-treatment.jpg",
      animClass: "card-rotate"
    },
    {
      id: 3,
      title: "Cupping Therapy",
      location: "Muscle Relaxation",
      image: "/treatmentimages/Ayurvedashirodharamassagetreatment_9e5f39db-e42e-40f4-ba57-0411b3661327.webp",
      animClass: "card-lift"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.from(".card-scale", {
        scrollTrigger: {
          trigger: ".card-scale",
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
        scale: 0.8,
        opacity: 0,
        ease: "power2.out"
      });

      gsap.from(".card-rotate", {
        scrollTrigger: {
          trigger: ".card-rotate",
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
        rotationY: 15,
        rotationX: 10,
        y: 100,
        opacity: 0,
        ease: "power2.out"
      });

      gsap.from(".card-lift", {
        scrollTrigger: {
          trigger: ".card-lift",
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
        y: 200,
        opacity: 0,
        ease: "power3.out"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="treatments" className="section-padding bg-midnight text-ivory relative scroll-mt-24">
      <div className="container-luxury">
        <div className="mb-24">
          <h2 className="text-h2 font-heading mb-4 text-gold">Specialized Treatments</h2>
          <div className="w-24 h-[1px] bg-gold-soft" />
        </div>

        <div className="flex flex-col gap-32">
          {treatments.map((prop, idx) => (
            <div 
              key={prop.id} 
              className={`${prop.animClass} group relative w-full h-[60vh] md:h-[80vh] rounded-2xl overflow-hidden cursor-pointer perspective-[1000px]`}
            >
              <div className="absolute inset-0 bg-glass-bg border border-transparent group-hover:border-gold/50 transition-colors duration-700 z-10 pointer-events-none rounded-2xl" />
              
              <Image
                src={prop.image}
                alt={prop.title}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80 z-[5]" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-16 z-20 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                <p className="text-gold tracking-widest text-sm mb-2 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">{prop.location}</p>
                <h3 className="text-h3 font-heading mb-6">{prop.title}</h3>
                
                <button className="glass-panel px-8 py-3 text-sm text-gold opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 hover:bg-gold hover:text-midnight">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
