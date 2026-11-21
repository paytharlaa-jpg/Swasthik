import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { UruliHero } from "@/components/hero/UruliHero";
import { ConditionsRail } from "@/components/home/ConditionsRail";
import { TherapiesStack } from "@/components/home/TherapiesStack";
import { CtaBand, Faq, Label, Marquee } from "@/components/ui/blocks";
import { siteConfig } from "@/config/site";
import { NEW_YEAR } from "@/config/countdown";
import { testimonialsData } from "@/content/testimonials/testimonialData";
import { blogPosts } from "@/content/blog/blogData";
import { therapiesData } from "@/content/therapies/therapyData";
import { conditionsData } from "@/content/treatments/treatmentData";

export const metadata: Metadata = {
  title: { absolute: "Swasthik Ayurveda Hyderabad | Ayurvedic Spine, Back & Knee Pain Treatment" },
};

const STEPS = [
  {
    t: "Listen & examine",
    d: "A full history, posture and movement checks, nerve tests and a careful look at your MRI or X-ray.",
  },
  {
    t: "Find the root",
    d: "Your Ayurvedic constitution and dosha imbalance, mapped against the mechanical cause of your pain.",
  },
  {
    t: "Treat precisely",
    d: "Only the therapies you need, such as Kati Vasti, Agnikarma or Janu Vasti, plus internal herbal medicine.",
  },
  {
    t: "Stay strong",
    d: "Ergonomics, yoga-based exercises and diet changes so the pain doesn't come back in 2027.",
  },
];

const HOME_FAQ = [
  {
    question: "Can Ayurveda treat a slip disc or L4-L5 disc bulge without surgery?",
    answer:
      "Many disc bulge and slip disc cases without serious nerve damage respond well to conservative care. At Swasthik Ayurveda, Dr. Krishna Mohan combines Kati Vasti, Patra Pinda Sweda, Vasti Panchakarma and internal medicines with core rehab. Emergencies such as loss of bladder control are referred for surgical evaluation immediately.",
  },
  {
    question: "Where is Swasthik Ayurveda located in Hyderabad?",
    answer: `We are ${siteConfig.address}. The clinic is easy to reach from KPHB, Miyapur, JNTU and Nizampet.`,
  },
  {
    question: "What are the clinic timings?",
    answer: `${siteConfig.hours}. Booking ahead on WhatsApp or by phone avoids waiting time.`,
  },
  {
    question: "What should I bring to my first consultation?",
    answer:
      "Recent MRI, X-ray or CT reports, any blood test reports from the last six months and a list of your current medicines.",
  },
];

export default function HomePage() {
  const posts = blogPosts.slice(0, 3);

  return (
    <main>
      <UruliHero />

      {/* ───────── Marquee */}
      <div className="relative z-10 -mt-px -rotate-2 scale-105 bg-saffron py-4 text-ink md:py-6">
        <Marquee
          items={["Non-surgical spine care", `Countdown to ${NEW_YEAR}`, "Sciatica", "Slip disc", "Knee osteoarthritis", "Cervical spondylosis", "Kukatpally · Hyderabad"]}
          className="display text-4xl md:text-6xl"
          speed={35}
        />
      </div>

      {/* ───────── 01 Manifesto */}
      <section className="relative py-28 md:py-44">
        <div className="wrap">
          <Label n="01">The Swasthik way</Label>
          <p data-scrub-words className="display mt-10 text-[6.6vw] md:text-[3.8vw] leading-[0.95]">
            Pain is not just a disc on an MRI. It&apos;s how you sit, sleep, eat and move. We treat <span className="text-saffron">all of it</span> with
            classical Ayurveda and a doctor who <span className="text-lime">actually listens.</span>
          </p>

          <div className="mt-20 grid grid-cols-2 border-t hairline md:grid-cols-4">
            {[
              { n: conditionsData.length, s: "", l: "Spine & joint conditions" },
              { n: therapiesData.length, s: "", l: "Classical therapies" },
              { n: 6, s: "", l: "Days a week, Mon–Sat" },
              { n: 1, s: ":1", l: "Doctor-led consultations" },
            ].map((x, i) => (
              <div key={x.l} className={`py-8 ${i % 2 ? "pl-4 md:pl-8 border-l hairline" : "md:pl-8"} ${i === 2 ? "md:border-l hairline" : ""}`}>
                <span className="display block text-7xl md:text-8xl text-bone">
                  <span data-counter={x.n}>{x.n}</span>
                  {x.s}
                </span>
                <span className="eyebrow mt-3 block text-ash">{x.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 02 Conditions (horizontal) */}
      <ConditionsRail />

      {/* ───────── 03 Therapies (sticky stack) */}
      <TherapiesStack />

      {/* ───────── 04 Doctor */}
      <section className="relative overflow-hidden bg-bone py-24 text-ink md:py-36">
        <div className="wrap grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <div data-reveal="clip" className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-ink">
              <div data-parallax="0.08" className="absolute -inset-y-[10%] inset-x-0">
                <Image
                  src="/images/doctor/dr-krishna-mohan.jpg"
                  alt={`${siteConfig.leadDoctor}, lead Ayurvedic physician at Swasthik Ayurveda Hyderabad`}
                  fill
                  sizes="(min-width:768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <span className="absolute bottom-4 left-4 rounded-full bg-saffron px-4 py-2 text-sm font-medium">
                Lead physician
              </span>
            </div>
          </div>
          <div className="md:col-span-7 md:pl-8">
            <Label n="04" className="!text-ink/60">
              Your doctor
            </Label>
            <h2 data-split className="display mt-6 text-[9.6vw] md:text-[4.8vw]">
              Dr. Krishna <span className="text-saffron">Mohan</span>
            </h2>
            <Quote className="mt-8 text-saffron" size={40} />
            <p data-reveal className="mt-4 text-2xl md:text-3xl font-medium leading-snug">
              We don&apos;t treat an MRI report. We treat the person carrying it: their work, their sleep, their fear
              of surgery.
            </p>
            <p data-reveal className="mt-6 max-w-xl text-ink/70 leading-relaxed">
              {siteConfig.doctorRole}. He has guided hundreds of patients through non-surgical care for sciatica, disc
              herniation, cervical spondylosis and knee arthritis, with every treatment plan supervised personally.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/doctors" className="btn bg-ink text-bone before:bg-saffron hover:text-ink">
                Meet the doctors <ArrowUpRight size={18} />
              </Link>
              <Link href="/about" className="btn border border-ink/25 before:bg-ink hover:text-bone">
                Our approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 05 Process */}
      <section className="relative py-24 md:py-36">
        <div className="wrap">
          <Label n="05">Your first visit</Label>
          <h2 data-split className="display mt-6 text-[9.6vw] md:text-[4.8vw] max-w-[12ch]">
            Four steps to <span className="text-lime">moving again.</span>
          </h2>
          <ol className="mt-16 grid gap-px overflow-hidden rounded-[28px] border hairline bg-[var(--line)] md:grid-cols-4" data-stagger>
            {STEPS.map((s, i) => (
              <li key={s.t} className="group flex min-h-[340px] flex-col justify-between bg-ink p-7 transition-colors duration-500 hover:bg-saffron hover:text-ink md:p-9">
                <span className="display text-8xl text-outline-saffron transition-all group-hover:[-webkit-text-stroke-color:var(--color-ink)]">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="display text-4xl">{s.t}</h3>
                  <p className="mt-3 leading-relaxed opacity-75">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── 06 Stories */}
      <section className="relative overflow-hidden border-y hairline py-24 md:py-32">
        <div className="wrap flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Label n="06">Patient stories</Label>
            <h2 data-split className="display mt-6 text-[9.6vw] md:text-[4.8vw]">
              Back on <span className="text-saffron">their feet.</span>
            </h2>
          </div>
          <Link href="/testimonials" className="btn btn-ghost self-start md:self-auto">
            All stories <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="mt-14 flex gap-5 overflow-x-auto px-4 pb-4 md:px-10 [scrollbar-width:none]" data-stagger data-lenis-prevent>
          {testimonialsData.map((t, i) => (
            <figure
              key={t.id}
              className={`flex w-[85vw] shrink-0 flex-col justify-between rounded-[28px] p-7 md:w-[440px] md:p-9 ${
                i % 2 ? "bg-ink-3" : "bg-lime text-ink"
              }`}
            >
              <blockquote className="text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-8 border-t border-current/20 pt-5">
                <span className="block font-medium">{t.patientName}</span>
                <span className="eyebrow mt-1 block opacity-70">
                  {t.condition} · {t.location}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ───────── 07 Journal */}
      <section className="py-24 md:py-32">
        <div className="wrap">
          <Label n="07">Journal</Label>
          <h2 data-split className="display mt-6 text-[9.6vw] md:text-[4.8vw]">
            Know your <span className="text-outline">spine.</span>
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3" data-stagger>
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                <div className="duotone relative aspect-[4/3] rounded-[22px]">
                  <Image src={p.featuredImage} alt={p.title} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
                </div>
                <p className="eyebrow mt-5 text-ash">
                  {p.category} · {p.readTime}
                </p>
                <h3 className="mt-3 text-2xl font-medium leading-snug group-hover:text-lime">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Faq faqs={HOME_FAQ} />
      <CtaBand />
    </main>
  );
}
