import Image from "next/image";
import { ArrowUpRight, Stethoscope } from "lucide-react";
import { CtaBand, Label, PageHero } from "@/components/ui/blocks";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { pageMetadata, jsonLd, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Dr. Krishna Mohan | Ayurvedic Spine & Joint Doctor in Kukatpally, Hyderabad",
  description:
    "Meet Dr. Krishna Mohan, lead Ayurvedic physician at Swasthik Ayurveda, Kukatpally, Hyderabad, and associate Dr. Rajeev Raj. Non-surgical care for sciatica, slip disc, L4-L5 bulge and knee pain.",
  path: "/doctors",
  image: "/images/doctor/dr-krishna-mohan.jpg",
  keywords: [
    "Dr Krishna Mohan",
    "Ayurvedic doctor Kukatpally",
    "best Ayurvedic doctor for sciatica Hyderabad",
    "Ayurvedic spine specialist Hyderabad",
    "Dr Rajeev Raj Ayurveda",
  ],
});

const FOCUS = [
  "Sciatica (Gridhrasi) & nerve compression",
  "L4-L5 & L5-S1 disc bulge / herniation",
  "Knee osteoarthritis (Sandhigata Vata)",
  "Cervical spondylosis & tech neck",
  "Agnikarma thermal micro-stimulation",
  "Classical Panchakarma & Vasti",
];

export default function DoctorsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE_URL}/#dr-krishna-mohan`,
    name: siteConfig.leadDoctor,
    jobTitle: siteConfig.doctorRole,
    image: `${SITE_URL}/images/doctor/dr-krishna-mohan.jpg`,
    telephone: siteConfig.phoneClean,
    medicalSpecialty: "Musculoskeletal",
    knowsAbout: FOCUS,
    worksFor: { "@id": `${SITE_URL}/#clinic` },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Above HDFC Bank, Dharmareddy Colony Phase-II, Hydernagar, Kukatpally",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: siteConfig.pincode,
      addressCountry: "IN",
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
      <PageHero
        eyebrow="Clinical leadership"
        title="The doctors"
        accent="behind your care."
        crumbs={[{ name: "Doctors", path: "/doctors" }]}
      />

      <section className="pb-24 md:pb-32">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div data-reveal="clip" className="sticky top-24 aspect-[4/5] overflow-hidden rounded-[28px] bg-ink-3">
              <Image
                src="/images/doctor/dr-krishna-mohan.jpg"
                alt={`${siteConfig.leadDoctor}, Ayurvedic spine and joint specialist, Hyderabad`}
                fill
                priority
                sizes="(min-width:768px) 40vw, 100vw"
                className="object-cover"
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-lime px-4 py-2 text-sm font-medium text-ink">
                Lead physician
              </span>
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="eyebrow text-saffron">{siteConfig.doctorRole}</p>
            <h2 data-split className="display mt-4 text-[9vw] md:text-[4.5vw]">
              {siteConfig.leadDoctor}
            </h2>
            <div data-reveal className="mt-8 space-y-5 text-lg text-bone/80 leading-relaxed">
              <p>
                {siteConfig.leadDoctor} is the lead practitioner at Swasthik Ayurveda. He has extensive clinical experience
                with spinal disc prolapse, lumbar nerve compression and chronic joint conditions, and approaches every
                patient with careful diagnosis and genuine empathy.
              </p>
              <p>
                He doesn&apos;t see sciatica or an L4-L5 bulge as just a structural flaw. He looks at how Vata
                imbalance, metabolic build-up (Ama) and daily mechanical stress work together to produce inflammation
                and pain.
              </p>
              <p>
                Under his care, hundreds of patients have found meaningful, non-surgical relief through structured
                programmes combining Kati Vasti, Janu Vasti, Agnikarma and classical Vasti Panchakarma.
              </p>
            </div>

            <p className="eyebrow mt-12 text-ash">Clinical focus</p>
            <ul className="mt-4" data-stagger>
              {FOCUS.map((f, i) => (
                <li key={f} className="flex items-baseline gap-5 border-b hairline py-4 text-xl font-medium">
                  <span className="display text-2xl text-saffron">{String(i + 1).padStart(2, "0")}</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={contactConfig.getWhatsAppUrl(`Hello, I would like to book an appointment with ${siteConfig.leadDoctor} at Swasthik Ayurveda Hyderabad.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-saffron"
              >
                Book with Dr. Krishna Mohan <ArrowUpRight size={18} />
              </a>
              <a href={contactConfig.getPhoneUrl()} className="btn btn-ghost">
                {siteConfig.phone}
              </a>
            </div>

            <div data-reveal className="mt-20 rounded-[28px] bg-ink-3 p-8 md:p-10">
              <Stethoscope className="text-lime" size={36} />
              <p className="eyebrow mt-6 text-ash">Consultant Ayurvedic practitioner</p>
              <h2 className="display mt-2 text-6xl">{siteConfig.associateDoctor}</h2>
              <p className="mt-4 text-bone/75 leading-relaxed">
                Works alongside Dr. Krishna Mohan on personalised Panchakarma therapies, constitution analysis and
                follow-up care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t hairline py-20">
        <div className="wrap grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <Label n="→">Before you come</Label>
            <h2 className="display mt-5 text-6xl md:text-7xl">Bring your reports</h2>
          </div>
          <p className="md:col-span-7 text-lg text-bone/75 leading-relaxed">
            Please bring any recent MRI, X-ray or CT scans, blood reports, and a list of current medicines or past
            physiotherapy. It helps the doctor give you the most accurate assessment.
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
