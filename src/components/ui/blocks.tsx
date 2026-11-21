import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { contactConfig } from "@/config/contact";
import { siteConfig } from "@/config/site";
import { NEW_YEAR } from "@/config/countdown";
import { jsonLd, breadcrumbSchema, faqSchema } from "@/lib/seo";

/* ───────── Breadcrumbs (visual + BreadcrumbList schema) */
export function Crumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(items))} />
      <nav aria-label="Breadcrumb" className="eyebrow text-ash">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-bone">
              Home
            </Link>
          </li>
          {items.map((it, i) => (
            <li key={it.path} className="flex items-center gap-2">
              <span aria-hidden>/</span>
              {i === items.length - 1 ? (
                <span aria-current="page" className="text-bone">
                  {it.name}
                </span>
              ) : (
                <Link href={it.path} className="hover:text-bone">
                  {it.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

/* ───────── Big-type page hero for inner pages */
export function PageHero({
  eyebrow,
  title,
  accent,
  intro,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  intro?: string;
  crumbs: { name: string; path: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-14 md:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[20vw] -top-[20vw] h-[60vw] w-[60vw] rounded-full opacity-25 blur-[120px]"
        style={{ background: "radial-gradient(circle, #e2550f 0%, transparent 65%)" }}
      />
      <div className="wrap relative">
        <Crumbs items={crumbs} />
        <p className="eyebrow mt-10 text-saffron">{eyebrow}</p>
        <h1 data-split className="display mt-4 text-[9vw] sm:text-[7.2vw] md:text-[5.4vw] lg:text-[4.8vw] max-w-[14ch]">
          {title} {accent && <span className="text-lime">{accent}</span>}
        </h1>
        {intro && (
          <p data-reveal className="mt-8 max-w-2xl text-lg md:text-xl text-bone/75 leading-relaxed">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

/* ───────── Section label: "01 — Conditions" */
export function Label({ n, children, className = "" }: { n?: string; children: React.ReactNode; className?: string }) {
  return (
    <p className={`eyebrow flex items-center gap-3 text-ash ${className}`}>
      {n && <span className="text-saffron">{n}</span>}
      <span className="h-px w-8 bg-current opacity-40" />
      {children}
    </p>
  );
}

/* ───────── FAQ (native details, zero JS) + FAQPage schema */
export function Faq({ faqs, title = "Questions, answered" }: { faqs: { question: string; answer: string }[]; title?: string }) {
  return (
    <section className="py-20 md:py-28 border-t hairline">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />
      <div className="wrap grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <Label n="?">FAQ</Label>
          <h2 data-split className="display mt-5 text-6xl md:text-7xl">
            {title}
          </h2>
        </div>
        <div className="md:col-span-8" data-stagger>
          {faqs.map((f) => (
            <details key={f.question} className="group border-b hairline">
              <summary className="flex cursor-pointer items-start justify-between gap-6 py-6 text-lg md:text-2xl font-medium leading-snug hover:text-lime">
                <span>{f.question}</span>
                <Plus
                  size={26}
                  className="mt-1 shrink-0 transition-transform duration-500 ease-out-expo group-open:rotate-45 group-open:text-saffron"
                />
              </summary>
              <p className="pb-7 pr-10 text-bone/75 leading-relaxed md:text-lg">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Marquee strip */
export function Marquee({
  items,
  className = "",
  reverse = false,
  speed = 30,
}: {
  items: string[];
  className?: string;
  reverse?: boolean;
  speed?: number;
}) {
  const row = (
    <div className="marquee__track" aria-hidden>
      {items.map((t, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 md:px-10">{t}</span>
          <span className="text-[0.5em]">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div
      className={`marquee ${reverse ? "marquee--reverse" : ""} ${className}`}
      style={{ ["--marquee-speed" as string]: `${speed}s` }}
    >
      {row}
      {row}
    </div>
  );
}

/* ───────── Closing CTA band */
export function CtaBand({
  title = "Book your",
  accent = `${NEW_YEAR} reset`,
  message,
}: {
  title?: string;
  accent?: string;
  message?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-lime text-ink">
      <Marquee
        items={["Sciatica", "Slip disc", "L4-L5 bulge", "Back pain", "Knee pain", "Neck pain", "Panchakarma", "Agnikarma"]}
        className="display border-b border-ink/15 py-4 text-3xl md:text-5xl"
        speed={40}
      />
      <div className="wrap grid gap-8 py-16 md:grid-cols-12 md:items-end md:py-24">
        <h2 data-split className="display text-[10.2vw] md:col-span-8 md:text-[5.4vw]">
          {title} <span className="text-outline-ink">{accent}</span>
        </h2>
        <div className="md:col-span-4 flex flex-col gap-5">
          <p className="text-base md:text-lg leading-relaxed text-ink/75">
            One conversation with {siteConfig.leadDoctor}. A clear diagnosis, an honest plan, and no surgery talk unless
            it&apos;s truly needed.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={contactConfig.getWhatsAppUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-ink text-bone before:bg-saffron hover:text-ink"
            >
              WhatsApp now <ArrowUpRight size={18} />
            </a>
            <a href={contactConfig.getPhoneUrl()} className="btn border border-ink/30 before:bg-ink hover:text-bone">
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Pill tag */
export function Tag({ children, tone = "line" }: { children: React.ReactNode; tone?: "line" | "lime" | "saffron" }) {
  const cls =
    tone === "lime"
      ? "bg-lime text-ink"
      : tone === "saffron"
        ? "bg-saffron text-ink"
        : "border hairline text-bone/80";
  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${cls}`}>{children}</span>;
}
