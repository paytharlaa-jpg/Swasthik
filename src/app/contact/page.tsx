import { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AppointmentForm } from "@/components/contact/AppointmentForm";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Clinic Location | Swasthik Ayurveda Hyderabad",
  description:
    "Contact Swasthik Ayurveda in Kukatpally, Hyderabad. Find our clinic address, Google Maps directions, WhatsApp consultation desk, and telephone booking details.",
  keywords: [
    "Swasthik Ayurveda contact",
    "Ayurvedic clinic Kukatpally address",
    "Dr Krishna Mohan appointment",
    "Swasthik Ayurveda phone number",
    "Ayurvedic clinic Hyderabad directions",
  ],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-midnight text-ivory pt-28 pb-20 font-body">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ label: "Contact Us" }]} />

        {/* Hero Header */}
        <div className="py-12 md:py-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            <Building2 size={14} />
            <span>Hyderabad Clinic Location</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold text-ivory tracking-tight mb-6">
            Begin Your Healing Journey
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-ivory/80 leading-relaxed font-body">
            Have a question about your spinal or joint condition? Reach out directly to the Swasthik
            Ayurveda coordination desk to schedule an in-person or remote consultation.
          </p>
        </div>

        {/* Contact Info & Appointment Form Grid */}
        <div className="anim-cta-section grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-navy-deep/60 border border-gold/30 shadow-xl">
              <h2 className="text-2xl font-heading font-semibold text-ivory mb-6">
                Clinic Information
              </h2>

              <div className="space-y-6 text-sm md:text-base text-ivory/80">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <strong className="text-ivory block font-medium">Clinic Address</strong>
                    <p className="text-ivory/70 leading-relaxed">{siteConfig.address}</p>
                    <a
                      href={siteConfig.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gold text-xs font-semibold uppercase tracking-wider mt-2 hover:underline"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <strong className="text-ivory block font-medium">Telephone Inquiries</strong>
                    <a
                      href={contactConfig.getPhoneUrl()}
                      className="text-gold font-semibold hover:underline block"
                    >
                      {siteConfig.phone}
                    </a>
                    <span className="text-xs text-ivory/50">Direct clinic reception line</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-1">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <strong className="text-ivory block font-medium">WhatsApp Booking</strong>
                    <a
                      href={contactConfig.getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] font-semibold hover:underline block"
                    >
                      +91 83674 95666
                    </a>
                    <span className="text-xs text-ivory/50">Fastest response for slot confirmation</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <strong className="text-ivory block font-medium">Email Address</strong>
                    <a
                      href={contactConfig.getEmailUrl()}
                      className="text-ivory/70 hover:text-gold transition-colors block"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-1">
                    <Clock size={20} />
                  </div>
                  <div>
                    <strong className="text-ivory block font-medium">Consultation Hours</strong>
                    <p className="text-ivory/70 leading-relaxed">{siteConfig.hours}</p>
                    <span className="text-xs text-gold/80 block mt-1">
                      Prior booking is strongly recommended to avoid waiting time.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Preparation Card */}
            <div className="p-6 rounded-2xl bg-midnight/80 border border-white/10 text-xs sm:text-sm text-ivory/70 leading-relaxed space-y-2">
              <div className="flex items-center gap-2 text-gold font-semibold uppercase tracking-wider">
                <ShieldCheck size={16} />
                <span>What to Bring for Your Consultation</span>
              </div>
              <p>
                1. Recent MRI, CT scans, or spinal/joint X-ray films and written radiological reports.
              </p>
              <p>2. Blood test reports from the past 6 months if available.</p>
              <p>3. List of currently prescribed allopathic or herbal medications.</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <AppointmentForm />
          </div>
        </div>

        {/* Google Maps Embed Section */}
        <div className="rounded-3xl overflow-hidden border border-gold/30 shadow-2xl bg-navy-deep/60 p-4">
          <div className="p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 mb-4">
            <div>
              <h3 className="text-xl font-heading font-semibold text-ivory">
                Clinic Location & Directions
              </h3>
              <p className="text-xs sm:text-sm text-ivory/70 font-body">
                Above HDFC Bank, Dharmareddy Colony Phase-II, Hydernagar, Kukatpally, Hyderabad
              </p>
            </div>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gold hover:bg-gold-soft text-midnight text-xs font-semibold uppercase tracking-wider transition-all shrink-0"
            >
              <span>Open Google Maps</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Clean Map Visual Container */}
          <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-midnight flex items-center justify-center text-center p-6 border border-white/5">
            <div className="max-w-md space-y-4">
              <MapPin size={40} className="text-gold mx-auto animate-bounce" />
              <h4 className="text-lg font-heading font-semibold text-ivory">
                Swasthik Ayurveda, Kukatpally
              </h4>
              <p className="text-xs text-ivory/70 font-body">
                Located conveniently on the main road Above HDFC Bank in Dharmareddy Colony
                Phase-II, easily accessible via Kukatpally and JNTU metro stations.
              </p>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 rounded-full bg-white/10 hover:bg-gold hover:text-midnight text-xs font-semibold uppercase tracking-wider text-ivory transition-all"
              >
                Click for Turn-by-Turn GPS Directions &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

