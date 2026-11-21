import { ArrowUpRight } from "lucide-react";
import { AppointmentForm } from "@/components/contact/AppointmentForm";
import { Label, PageHero } from "@/components/ui/blocks";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact & Book | Swasthik Ayurveda, Kukatpally, Hyderabad",
  description:
    "Book a consultation at Swasthik Ayurveda, Above HDFC Bank, Hydernagar, Kukatpally, Hyderabad. Call or WhatsApp +91 83674 95666. Open Monday to Saturday, 9 AM to 8 PM.",
  path: "/contact",
  keywords: ["Swasthik Ayurveda contact", "Ayurvedic clinic Kukatpally address", "Dr Krishna Mohan appointment", "Ayurvedic clinic near KPHB"],
});

export default function ContactPage() {
  const rows = [
    { k: "Call", v: siteConfig.phone, href: contactConfig.getPhoneUrl() },
    { k: "WhatsApp", v: "Fastest replies", href: contactConfig.getWhatsAppUrl(), ext: true },
    { k: "Email", v: siteConfig.email, href: contactConfig.getEmailUrl() },
    { k: "Visit", v: siteConfig.address, href: siteConfig.mapsUrl, ext: true },
  ];
  return (
    <main>
      <PageHero
        eyebrow="Contact & booking"
        title="Let's get you"
        accent="moving."
        intro="Questions about your back, neck or knees? Message us and the clinic desk will confirm a time with the doctor."
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <section className="pb-24 md:pb-32">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <ul className="border-t hairline" data-stagger>
              {rows.map((r) => (
                <li key={r.k}>
                  <a
                    href={r.href}
                    {...(r.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-start justify-between gap-6 border-b hairline py-7"
                  >
                    <span>
                      <span className="eyebrow block text-ash">{r.k}</span>
                      <span className="mt-2 block text-xl md:text-2xl font-medium leading-snug group-hover:text-lime">{r.v}</span>
                    </span>
                    <ArrowUpRight className="mt-6 shrink-0 transition-transform duration-500 group-hover:rotate-45" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="eyebrow text-ash">Hours</p>
                <p className="mt-2 font-medium">Mon – Sat: 9:00 AM – 8:00 PM</p>
                <p className="text-bone/70">Sunday: by prior appointment</p>
              </div>
              <div>
                <p className="eyebrow text-ash">Nearby</p>
                <p className="mt-2 text-bone/80">Close to KPHB, JNTU and Kukatpally metro stations; easy from Miyapur and Nizampet.</p>
              </div>
            </div>
            <div className="mt-10 rounded-[22px] bg-ink-3 p-7">
              <Label n="✓">Bring with you</Label>
              <ol className="mt-5 space-y-3 text-bone/80">
                <li>1. Recent MRI, CT or X-ray films and reports</li>
                <li>2. Blood test reports from the last 6 months</li>
                <li>3. A list of your current medicines</li>
              </ol>
            </div>
          </div>
          <div className="lg:col-span-6">
            <AppointmentForm />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-10">
        <div className="relative overflow-hidden rounded-[28px] border hairline">
          <iframe
            title="Swasthik Ayurveda location on Google Maps"
            src="https://www.google.com/maps?q=Swasthik+Ayurveda+Hydernagar+Kukatpally+Hyderabad&output=embed"
            className="h-[60vh] w-full saturate-[0.8]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
