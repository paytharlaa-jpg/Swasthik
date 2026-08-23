export function TherapyShowcase() {
  const therapies = [
    "Spine alignment", "Agnikarma", "Fire cupping", "Vacuum cupping",
    "Deep-tissue therapy", "Steam therapy", "Vasti therapy"
  ];
  return (
    <section id="therapies" className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3 lg:sticky lg:top-32 self-start">
          <p className="text-gold font-medium uppercase tracking-widest text-sm mb-4">Ancient Therapies. Purposeful Care.</p>
          <h2 className="text-h2 font-display font-bold text-forest-deep mb-6">Every therapy has a role in the healing journey.</h2>
          <p className="text-body-lg text-ink/80 mb-8">Authentic Ayurvedic techniques delivered through a comfortable clinical experience. Suitability depends on professional assessment.</p>
          <a href="#appointment" className="inline-block px-6 py-3 bg-forest text-white hover:bg-forest-deep transition-colors rounded font-semibold">Discover the Right Therapy</a>
        </div>
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {therapies.map((therapy, i) => (
            <div key={i} className="p-8 rounded-2xl bg-ivory border border-champagne hover:border-gold transition-colors">
              <h3 className="text-xl font-display font-bold text-forest-deep mb-2">{therapy}</h3>
              <p className="text-sm text-ink/70">Supportive care option evaluated during your consultation.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}