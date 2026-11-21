import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { conditionsData } from "@/content/treatments/treatmentData";
import { therapiesData } from "@/content/therapies/therapyData";
import { NEW_YEAR } from "@/config/countdown";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-24 md:pt-32 border-t hairline">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow text-saffron mb-5">Your {NEW_YEAR} starts here</p>
            <h2 data-split className="display text-[9vw] md:text-[4.2vw] leading-[0.86]">
              Ready to move <span className="text-lime">without pain?</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={contactConfig.getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-saffron">
                Book on WhatsApp <ArrowUpRight size={18} />
              </a>
              <a href={contactConfig.getPhoneUrl()} className="btn btn-ghost">
                Call {siteConfig.phone}
              </a>
            </div>
          </div>

          <nav aria-label="Conditions" className="md:col-span-2 md:col-start-8">
            <p className="eyebrow text-ash mb-4">Conditions</p>
            <ul className="space-y-2 text-sm">
              {conditionsData.map((c) => (
                <li key={c.slug}>
                  <Link href={`/treatments/${c.slug}`} className="text-bone/80 hover:text-lime">
                    {c.name.replace(/ \(.*\)/, "")}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Therapies" className="md:col-span-2">
            <p className="eyebrow text-ash mb-4">Therapies</p>
            <ul className="space-y-2 text-sm">
              {therapiesData.map((t) => (
                <li key={t.slug}>
                  <Link href={`/therapies/${t.slug}`} className="text-bone/80 hover:text-lime">
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-2">
            <p className="eyebrow text-ash mb-4">Clinic</p>
            <ul className="space-y-2 text-sm">
              {[
                ["About", "/about"],
                ["Doctors", "/doctors"],
                ["Patient stories", "/testimonials"],
                ["Journal", "/blog"],
                ["Contact", "/contact"],
              ].map(([l, h]) => (
                <li key={h}>
                  <Link href={h} className="text-bone/80 hover:text-lime">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <address className="not-italic mt-16 grid gap-6 border-t hairline pt-8 text-sm text-bone/70 md:grid-cols-3">
          <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-bone">
            {siteConfig.address} – {siteConfig.pincode}
          </a>
          <span>{siteConfig.hours}</span>
          <span className="md:text-right">
            <a href={contactConfig.getEmailUrl()} className="hover:text-bone">
              {siteConfig.email}
            </a>
          </span>
        </address>
      </div>

      {/* Giant wordmark */}
      <div aria-hidden className="mt-12 select-none overflow-hidden">
        <p className="display whitespace-nowrap text-center text-[15vw] leading-[0.78] text-saffron translate-y-[8%]">
          Swasthik
        </p>
      </div>
      <div className="wrap flex flex-col gap-2 border-t hairline py-5 text-xs text-ash md:flex-row md:justify-between">
        <span>
          © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
        </span>
        <span>Information on this site is educational and not a substitute for an in-person medical consultation.</span>
      </div>
    </footer>
  );
}
