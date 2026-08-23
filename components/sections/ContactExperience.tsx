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
              
              <form ref={formRef} className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="relative w-full group">
                    <input type="text" id="name" className="w-full bg-transparent border-b border-ivory/20 py-4 text-ivory focus:outline-none focus:border-gold transition-colors peer" placeholder=" " />
                    <label htmlFor="name" className="absolute left-0 top-4 text-ivory/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs uppercase tracking-widest cursor-text">Full Name</label>
                  </div>
                  <div className="relative w-full group">
                    <input type="email" id="email" className="w-full bg-transparent border-b border-ivory/20 py-4 text-ivory focus:outline-none focus:border-gold transition-colors peer" placeholder=" " />
                    <label htmlFor="email" className="absolute left-0 top-4 text-ivory/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs uppercase tracking-widest cursor-text">Email Address</label>
                  </div>
                </div>

                <div className="relative w-full group">
                  <input type="text" id="interest" className="w-full bg-transparent border-b border-ivory/20 py-4 text-ivory focus:outline-none focus:border-gold transition-colors peer" placeholder=" " />
                  <label htmlFor="interest" className="absolute left-0 top-4 text-ivory/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs uppercase tracking-widest cursor-text">Condition (e.g. Back Pain)</label>
                </div>

                <div className="relative w-full group">
                  <textarea id="message" rows={3} className="w-full bg-transparent border-b border-ivory/20 py-4 text-ivory focus:outline-none focus:border-gold transition-colors peer resize-none" placeholder=" "></textarea>
                  <label htmlFor="message" className="absolute left-0 top-4 text-ivory/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs uppercase tracking-widest cursor-text">Your Message</label>
                </div>

                <button className="mt-8 relative overflow-hidden bg-transparent border border-gold text-gold py-5 rounded-full uppercase tracking-[2px] font-semibold hover:text-midnight group transition-colors duration-500 w-full md:w-auto md:px-16 md:self-start">
                  <span className="relative z-10">Submit Enquiry</span>
                  <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
