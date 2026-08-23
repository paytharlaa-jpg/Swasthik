"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function ContactExperience() {
  const containerRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-anim", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section-padding relative overflow-hidden bg-midnight">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/luxury_apartment_interior_1785743347556.png"
          alt="Contact Background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/90 to-midnight/40" />
      </div>

      <div className="container-luxury relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Left: Info */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h2 className="contact-anim text-h2 font-heading text-ivory mb-6">Begin Your <br/><span className="text-gold italic">Healing Journey</span></h2>
            <div className="contact-anim w-16 h-[2px] bg-gold mb-12" />
            
            <p className="contact-anim text-body-lg text-ivory/70 mb-12">
              Book your consultation with Dr. Krishna Mohan today.
            </p>

            <div className="flex flex-col gap-8">
              <div className="contact-anim flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                  <span className="text-gold">📍</span>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gold-soft mb-1">Clinic Location</h4>
                  <p className="text-ivory/80">Above HDFC Bank, Dharmareddy Colony Phase-II<br/>Hydernagar, Kukatpally, Hyderabad</p>
                </div>
              </div>
              <div className="contact-anim flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                  <span className="text-gold">✉</span>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gold-soft mb-1">Private Enquiries</h4>
                  <p className="text-ivory/80">contact@swasthikayurveda.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-7/12">
            <div className="contact-anim glass-panel p-8 md:p-16 relative overflow-hidden rounded-[32px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[100px]" />
              
              <h3 className="text-h3 font-heading text-ivory mb-8">Book a Consultation</h3>
              
              <div className="flex flex-col gap-6 mt-8">
                <p className="text-ivory/80 text-lg mb-4">
                  Skip the wait. Message us directly on WhatsApp to book your consultation instantly. Our team is ready to assist you.
                </p>
                <a 
                  href="https://api.whatsapp.com/send/?phone=918367495666&text=Hello%2521%2520I%2520want%2520to%2520book%2520Free%2520Consultation%2520and%2520want%2520to%2520know%2520more%2520about%2520Offer&type=phone_number&app_absent=0&utm_source=ig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden bg-[#25D366] text-white py-5 px-8 rounded-full uppercase tracking-[2px] font-semibold hover:bg-[#128C7E] transition-colors duration-300 w-full md:w-auto self-start flex items-center justify-center gap-4 shadow-lg shadow-[#25D366]/20"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

