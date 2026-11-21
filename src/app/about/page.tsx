import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBand, Label, Marquee, PageHero } from "@/components/ui/blocks";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Swasthik Ayurveda | Ayurvedic Spine & Joint Clinic, Kukatpally",
  description:
    "Swasthik Ayurveda is a doctor-led classical Ayurvedic clinic in Kukatpally, Hyderabad, focused on non-surgical care for spine, joint and chronic pain conditions.",
  path: "/about",
  keywords: ["About Swasthik Ayurveda", "Ayurvedic clinic Kukatpally", "Ayurvedic spine clinic Hyderabad", "Dr Krishna Mohan"],
});

const PILLARS = [
  {
    t: "Senior doctor, every time",
    d: "Every consultation and therapy plan is supervised directly by Dr. Krishna Mohan, from first assessment to rehab.",
  },
  {
    t: "No false promises",
    d: "We don't sell miracle cures or guaranteed outcomes. You get honest, evidence-informed expectations.",
  },
  {
    t: "You leave stronger",
    d: "Ergonomics, sleep posture, core exercises and diet, so you can protect your spine at home.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About the clinic"
        title="Ancient science."
        accent="Modern honesty."
        intro="Swasthik Ayurveda was founded for one purpose: authentic, evidence-informed classical Ayurvedic care for people living with spine, joint and chronic pain in Hyderabad."
        crumbs={[{ name: "About", path: "/about" }]}
      />

      <div className="border-y hairline py-5">
        <Marquee items={["Charaka Samhita", "Sushruta Samhita", "Ashtanga Hridaya", "Non-surgical first", "Root-cause care"]} className="display text-4xl md:text-6xl text-outline" speed={45} />
      </div>

      <section className="py-24 md:py-32">
        <div className="wrap grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <Label n="01">Our philosophy</Label>
            <p data-scrub-words className="display mt-8 text-5xl md:text-7xl leading-[0.95]">
              Ayurveda never treats a disease in isolation. Every pain is a story of Vata, tissue and posture.
            </p>
            <div data-reveal className="mt-10 space-y-5 text-lg text-bone/75 leading-relaxed">
              <p>
                Whether it&apos;s an acute sciatica flare, a lumbar disc protrusion or knee crepitus, we see it as an
                imbalance in Vata dosha, tissue dryness (Asthi-Majja Kshaya) and mechanical strain.
              </p>
              <p>
                So we combine classical procedures with a careful modern exam: range-of-motion testing, nerve checks and
                MRI and X-ray review. Then we build a care plan around your real daily life.
              </p>
              <p>
                We put conservative, non-surgical care first. Instead of masking pain with painkillers, our therapies
                work on the biological and mechanical causes of inflammation and stiffness.
              </p>
            </div>
          </div>
          <div className="md:col-span-6">
            <div data-reveal="clip" className="duotone relative aspect-[4/5] rounded-[28px]">
              <Image src="/images/treatments/ayurveda-history.jpg" alt="Classical Ayurvedic texts and herbs" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t hairline py-24 md:py-32">
        <div className="wrap">
          <Label n="02">What we stand for</Label>
          <div className="mt-12 grid gap-5 md:grid-cols-3" data-stagger>
            {PILLARS.map((p, i) => (
              <div key={p.t} className={`flex min-h-[360px] flex-col justify-between rounded-[28px] p-8 ${i === 0 ? "bg-saffron text-ink" : i === 1 ? "bg-ink-3" : "bg-lime text-ink"}`}>
                <span className="display text-8xl opacity-90">0{i + 1}</span>
                <div>
                  <h2 className="display text-5xl">{p.t}</h2>
                  <p className="mt-4 leading-relaxed opacity-80">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-24 text-ink md:py-32">
        <div className="wrap grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-4">
            <div data-reveal="clip" className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
              <Image src="/images/doctor/dr-krishna-mohan.jpg" alt={siteConfig.leadDoctor} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
            </div>
          </div>
          <div className="md:col-span-8 md:pl-10">
            <Label n="03" className="!text-ink/60">
              Lead physician
            </Label>
            <h2 data-split className="display mt-5 text-[9vw] md:text-[4.2vw]">
              {siteConfig.leadDoctor}
            </h2>
            <p data-reveal className="mt-6 max-w-2xl text-xl leading-relaxed text-ink/75">
              With years of focused clinical experience in Ayurvedic musculoskeletal care, Dr. Krishna Mohan has guided
              hundreds of patients through non-surgical management of sciatica, disc herniation, cervical spondylosis and
              degenerative arthritis.
            </p>
            <Link href="/doctors" className="btn mt-10 bg-ink text-bone before:bg-saffron hover:text-ink">
              Meet the doctors <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="wrap grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Label n="04">Visit us</Label>
            <h2 data-split className="display mt-5 text-[8.4vw] md:text-[4.2vw]">
              Kukatpally, <span className="text-saffron">Hyderabad</span>
            </h2>
          </div>
          <div data-reveal className="md:col-span-5 space-y-4 text-lg text-bone/75">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.hours}</p>
            <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Get directions <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
