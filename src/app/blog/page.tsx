import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/content/blog/blogData";
import { siteConfig } from "@/config/site";
import { Clock, Calendar, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Ayurvedic Spine & Health Knowledge Hub | Swasthik Ayurveda Hyderabad",
  description:
    "Evidence-informed health guides, medical explanations, and classical Ayurvedic insights on Sciatica, L4-L5 disc bulges, knee osteoarthritis, and posture wellness.",
  keywords: [
    "Ayurvedic blog Hyderabad",
    "Sciatica pain treatment guide",
    "L4-L5 disc bulge natural care",
    "Ayurvedic knee pain treatment",
    "Dr Krishna Mohan articles",
  ],
};

export default function BlogListingPage() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-midnight text-ivory pt-28 pb-20 font-body">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "Blog & Articles" }]} />

        {/* Hero Header */}
        <div className="py-12 md:py-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            <BookOpen size={14} />
            <span>Clinical Knowledge & Patient Education</span>
          </div>

          <h1 className="anim-heading text-4xl sm:text-5xl md:text-6xl font-heading font-semibold text-ivory tracking-tight mb-6">
            Spine, Joint & Wellness Insights
          </h1>

          <p className="anim-subtitle text-base sm:text-lg md:text-xl text-ivory/80 leading-relaxed font-body">
            Empowering patients with clear, medically reviewed information on musculoskeletal
            health, anatomical diagnostics, and classical Ayurvedic therapy.
          </p>
        </div>

        {/* Featured Editorial Article */}
        {featuredPost && (
          <div className="mb-20 anim-card">
            <div className="group rounded-3xl bg-navy-deep/60 border border-gold/30 hover:border-gold/60 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 md:p-10 transition-all duration-300">
              <div className="lg:col-span-6">
                <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-midnight">
                  <Image
                    src={featuredPost.featuredImage}
                    alt={featuredPost.title}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-midnight/80 backdrop-blur-md border border-gold/40 text-gold text-xs font-semibold">
                    Featured Guide
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-ivory/60 mb-3 font-body">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {featuredPost.publishedDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      {featuredPost.readTime}
                    </span>
                    <span>•</span>
                    <span className="text-gold font-medium">{featuredPost.category}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-ivory group-hover:text-gold transition-colors mb-4 leading-tight">
                    <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </h2>

                  <p className="text-sm sm:text-base text-ivory/70 leading-relaxed font-body mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-ivory/40 block">Author</span>
                    <span className="text-sm font-heading font-medium text-gold">
                      {featuredPost.author.name}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold hover:bg-gold-soft text-midnight text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Articles Grid */}
        <div className="mb-20">
          <h2 className="anim-heading text-2xl sm:text-3xl font-heading font-semibold text-ivory mb-8">
            All Clinical Articles
          </h2>
          <div className="anim-blog-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

