import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { blogPosts } from "@/content/blog/blogData";
import { conditionsData } from "@/content/treatments/treatmentData";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import {
  Calendar,
  Clock,
  User,
  ShieldCheck,
  Share2,
  MessageCircle,
  Phone,
  ArrowRight,
  List,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Article Not Found | Swasthik Ayurveda",
    };
  }

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: `https://www.swastikayurveda.com/blog/${post.slug}`,
      siteName: siteConfig.name,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedTreatments = conditionsData.filter((c) =>
    post.relatedTreatmentSlugs.includes(c.slug)
  );

  return (
    <main className="min-h-screen bg-midnight text-ivory pt-28 pb-20 font-body">
      {/* Schema.org MedicalWebPage / Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            headline: post.title,
            description: post.metaDescription,
            image: `https://www.swastikayurveda.com${post.featuredImage}`,
            author: {
              "@type": "Person",
              name: post.author.name,
              jobTitle: post.author.role,
              worksFor: {
                "@type": "MedicalClinic",
                name: siteConfig.name,
              },
            },
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              logo: {
                "@type": "ImageObject",
                url: `https://www.swastikayurveda.com/images/brand/swasthik-ayurveda-logo.png`,
              },
            },
            datePublished: post.publishedDate,
            mainEntityOfPage: `https://www.swastikayurveda.com/blog/${post.slug}`,
          }),
        }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        {/* Article Header */}
        <header className="py-8 md:py-12 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-3 text-xs text-ivory/60 mb-4">
            <span className="px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold font-semibold uppercase tracking-wider">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar size={13} />
              {post.publishedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={13} />
              {post.readTime}
            </span>
          </div>

          <h1 className="anim-heading text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-ivory tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold">
                <User size={18} />
              </div>
              <div>
                <span className="text-xs text-ivory/50 block">Medically Authored By</span>
                <span className="text-sm font-heading font-semibold text-gold">
                  {post.author.name}
                </span>
                <span className="text-xs text-ivory/70 block">{post.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={contactConfig.getWhatsAppUrl(
                  `Hello Swasthik Ayurveda, I just read your article "${post.title}" and would like to consult with Dr. Krishna Mohan.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-semibold"
              >
                <Share2 size={13} />
                <span>Share via WhatsApp</span>
              </a>
            </div>
          </div>
        </header>

        {/* Featured Banner Image */}
        <div className="anim-card relative w-full h-72 sm:h-96 md:h-[460px] rounded-3xl overflow-hidden my-10 border border-white/10 shadow-2xl">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Table of Contents */}
        {post.tableOfContents.length > 0 && (
          <div className="p-6 md:p-8 rounded-2xl bg-navy-deep/60 border border-gold/30 mb-12">
            <h2 className="text-base font-heading font-semibold text-gold uppercase tracking-wider mb-4 flex items-center gap-2">
              <List size={18} />
              <span>Table of Contents</span>
            </h2>
            <ol className="space-y-2.5 text-sm text-ivory/80 font-body">
              {post.tableOfContents.map((item, idx) => (
                <li key={item.id} className="flex items-center gap-2">
                  <span className="text-gold font-mono text-xs">{idx + 1}.</span>
                  <a href={`#${item.id}`} className="hover:text-gold transition-colors underline-offset-4 hover:underline">
                    {item.text}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Article Body Content */}
        <article className="prose prose-invert prose-gold max-w-none space-y-12 text-ivory/85 text-base sm:text-lg leading-relaxed font-body">
          {post.content.map((section, idx) => {
            const sectionId =
              post.tableOfContents[idx]?.id || `section-${idx}`;
            return (
              <section key={idx} id={sectionId} className="pt-4 scroll-mt-32">
                <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-ivory tracking-tight mb-4 text-gold border-b border-white/10 pb-3">
                  {section.h2}
                </h2>
                <div className="space-y-4">
                  {section.body.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-3 mt-4 list-none pl-0">
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}
        </article>

        {/* Article FAQs */}
        {post.faqs.length > 0 && (
          <div id="faqs" className="mt-16 pt-12 border-t border-white/10 scroll-mt-32">
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-ivory mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion items={post.faqs} />
          </div>
        )}

        {/* Related Treatments */}
        {relatedTreatments.length > 0 && (
          <div className="mt-16 pt-12 border-t border-white/10">
            <h3 className="text-xl sm:text-2xl font-heading font-semibold text-ivory mb-6 text-center">
              Related Treatment Pathways
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTreatments.map((item) => (
                <div
                  key={item.slug}
                  className="p-6 rounded-2xl bg-navy-deep/40 border border-white/10 hover:border-gold/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs uppercase text-gold font-semibold tracking-wider block mb-1">
                      {item.badge}
                    </span>
                    <h4 className="text-lg font-heading font-semibold text-ivory mb-2">
                      {item.name}
                    </h4>
                    <p className="text-xs text-ivory/70 leading-relaxed font-body mb-4 line-clamp-2">
                      {item.shortDescription}
                    </p>
                  </div>
                  <Link
                    href={`/treatments/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold hover:text-champagne transition-colors"
                  >
                    <span>View Treatment</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Medical Disclaimer & Consultation CTA */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-midnight border border-gold/40 text-center max-w-3xl mx-auto shadow-2xl">
          <ShieldCheck size={32} className="text-gold mx-auto mb-4" />
          <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-ivory mb-4">
            Consult Dr. Krishna Mohan on This Condition
          </h3>
          <p className="text-sm text-ivory/70 leading-relaxed font-body mb-8 max-w-xl mx-auto">
            If you or a loved one are experiencing symptoms discussed in this article, schedule a
            personal evaluation at Swasthik Ayurveda Hyderabad.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={contactConfig.getWhatsAppUrl(
                `Hello Dr. Krishna Mohan, I read your article "${post.title}" and would like to arrange an appointment.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold hover:bg-gold-soft text-midnight font-heading font-semibold text-sm transition-all shadow-lg"
            >
              <MessageCircle size={16} />
              <span>Book Appointment on WhatsApp</span>
            </a>

            <a
              href={contactConfig.getPhoneUrl()}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-gold/40 text-gold hover:bg-gold/10 font-heading font-semibold text-sm transition-all"
            >
              <Phone size={15} />
              <span>Call Clinic: {siteConfig.phone}</span>
            </a>
          </div>

          <div className="pt-8 mt-8 border-t border-white/10 text-xs text-ivory/40 leading-relaxed text-left">
            <strong>Medical Disclaimer:</strong> This article is published solely for educational
            purposes and should not be used as a substitute for professional medical advice, clinical
            diagnosis, or direct treatment. Individual results vary based on personal pathology and
            constitutional factors. Swasthik Ayurveda does not claim that Ayurvedic therapies
            replace emergency neurosurgical interventions.
          </div>
        </div>
      </div>
    </main>
  );
}

