import { Shield, Target, User } from "lucide-react";

export function ProtectionSection() {
  return (
    <section id="protection" className="relative py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto bg-ivory">
      
      {/* Decorative Gold Line */}
      <div className="absolute top-0 left-8 md:left-1/2 w-[2px] h-32 bg-gradient-to-b from-gold to-transparent opacity-50 -translate-x-1/2"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-12">
        <div className="flex flex-col gap-6">
          <p className="text-gold font-medium uppercase tracking-widest text-sm">
            Protection Beyond the Thread
          </p>
          <h2 className="text-h2 font-display font-bold text-forest-deep leading-tight max-w-xl">
            A promise to protect their health naturally.
          </h2>
          <p className="text-body-lg text-ink/80 max-w-lg mt-4">
            At Swasthik Ayurveda, we combine traditional Ayurvedic wisdom, personalized assessment and focused therapies to support pain relief, mobility and long-term wellness.
          </p>
          
          <div className="mt-8 flex items-center justify-center lg:justify-start">
             {/* This could be a placeholder for the editorial illustration of spine/joints/herbs */}
             <div className="w-full max-w-md h-80 rounded-2xl bg-beige border border-champagne flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gold/10 mix-blend-multiply group-hover:bg-gold/20 transition-colors duration-500"></div>
               <p className="text-forest/60 text-sm italic font-display">Ayurvedic Wellness Illustration</p>
             </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-12 mt-8 lg:mt-0">
          <div className="flex gap-6 group hover:-translate-y-1 transition-transform duration-300">
            <div className="shrink-0 w-12 h-12 rounded-full bg-champagne/30 flex items-center justify-center text-forest mt-1 group-hover:bg-gold/20 transition-colors">
              <Target size={24} />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-forest-deep mb-2">Root-Cause Focused</h3>
              <p className="text-body text-ink/70">
                We look beyond temporary relief to understand the underlying imbalance.
              </p>
            </div>
          </div>
          
          <div className="flex gap-6 group hover:-translate-y-1 transition-transform duration-300">
            <div className="shrink-0 w-12 h-12 rounded-full bg-champagne/30 flex items-center justify-center text-forest mt-1 group-hover:bg-gold/20 transition-colors">
              <User size={24} />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-forest-deep mb-2">Personalized Therapies</h3>
              <p className="text-body text-ink/70">
                Every treatment journey is planned according to the individual&apos;s condition and needs.
              </p>
            </div>
          </div>
          
          <div className="flex gap-6 group hover:-translate-y-1 transition-transform duration-300">
            <div className="shrink-0 w-12 h-12 rounded-full bg-champagne/30 flex items-center justify-center text-forest mt-1 group-hover:bg-gold/20 transition-colors">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-forest-deep mb-2">Traditional Wisdom, Modern Care</h3>
              <p className="text-body text-ink/70">
                Authentic Ayurvedic techniques delivered through a comfortable and professional clinical experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
