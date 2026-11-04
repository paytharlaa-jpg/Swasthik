import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { conditionsData } from "@/content/treatments/treatmentData";

export function Footer() {
  return (
    <footer className="anim-footer bg-[#05070c] border-t border-white/10 text-ivory/80 pt-20 pb-12 font-body">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-52 h-14">
                <Image
                  src="/images/brand/swasthik-ayurveda-logo.png"
                  alt={siteConfig.name}
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-ivory/70 leading-relaxed mb-6 font-body">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-gold font-semibold uppercase tracking-wider">
              <ShieldCheck size={16} />
              <span>Certified Classical Ayurvedic Practice</span>
            </div>
          </div>

          {/* Quick Treatment Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-6">
              Conditions We Treat
            </h4>
            <ul className="space-y-3 text-sm">
              {conditionsData.slice(0, 6).map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/treatments/${item.slug}`}
                    className="text-ivory/70 hover:text-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-6">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-ivory/70 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-ivory/70 hover:text-gold transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="text-ivory/70 hover:text-gold transition-colors">
                  All Treatments
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-ivory/70 hover:text-gold transition-colors">
                  Patient Stories
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-ivory/70 hover:text-gold transition-colors">
                  Health Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ivory/70 hover:text-gold transition-colors">
                  Clinic Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-6">
              Clinic Contact
            </h4>
            <div className="space-y-4 text-sm text-ivory/75">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <a
                  href={contactConfig.getPhoneUrl()}
                  className="hover:text-gold transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <a
                  href={contactConfig.getEmailUrl()}
                  className="hover:text-gold transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-gold shrink-0 mt-0.5" />
                <span>{siteConfig.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer & Copyright */}
        <div className="pt-8 text-xs text-ivory/50 space-y-4 font-body leading-relaxed">
          <p>
            <strong className="text-ivory/70 font-semibold">Medical Information Disclaimer:</strong>{" "}
            The information provided on this website is for educational and informational purposes
            only and is not intended as medical advice, diagnosis, or treatment. Ayurvedic care and
            therapies are personalized and depend on an individual clinical assessment by a
            qualified Ayurvedic physician. Swasthik Ayurveda does not claim that Ayurvedic therapies
            cure structural spinal conditions, replace emergency surgical intervention, or
            guarantee specific outcomes.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Hyderabad,
              India.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/contact" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors flex items-center gap-1"
              >
                <span>Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
