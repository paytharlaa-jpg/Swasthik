export function ClinicGallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-ivory text-center">
      <h2 className="text-h2 font-display font-bold text-forest-deep mb-16 px-6">A calm space created for healing.</h2>
      <div className="flex overflow-x-auto gap-4 px-6 md:px-12 pb-8 snap-x">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="shrink-0 w-72 h-48 md:w-96 md:h-64 bg-champagne rounded-2xl snap-center flex items-center justify-center text-forest/30">
            [Gallery Image Placeholder]
          </div>
        ))}
      </div>
    </section>
  );
}