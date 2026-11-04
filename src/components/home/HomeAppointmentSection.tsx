import { AppointmentForm } from "@/components/contact/AppointmentForm";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

export function HomeAppointmentSection() {
  return (
    <section id="book-consultation" className="py-24 md:py-32 bg-midnight relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="anim-cta-section grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck size={14} />
              <span>Personalized Clinical Consultation</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading font-semibold text-ivory tracking-tight mb-6 leading-tight">
              Take the First Step Towards{" "}
              <span className="text-gold">Better Mobility</span>
            </h2>

            <p className="text-base text-ivory/80 leading-relaxed font-body mb-8">
              Speak with the Swasthik Ayurveda team to arrange a consultation with{" "}
              <strong>{siteConfig.leadDoctor}</strong>. Whether you are dealing with chronic
              sciatica, disc herniation, or persistent knee pain, we are here to support your path
              forward.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-sm text-ivory/80 font-body">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <span>{siteConfig.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <span>{siteConfig.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-gold shrink-0 mt-0.5" />
                <span>{siteConfig.hours}</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
