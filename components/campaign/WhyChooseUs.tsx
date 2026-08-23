export function WhyChooseUs() {
  const values = [
    "Personalized Diagnosis", "Root-Cause Approach", "Experienced Doctors", "Traditional Therapies", "Comfortable Clinical Care"
  ];
  return (
    <section id="why-us" className="py-24 md:py-32 px-6 md:px-12 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-h2 font-display font-bold text-forest-deep mb-6">Ayurveda shaped around you.</h2>
        <p className="text-body-lg text-ink/80 mb-16">No two bodies, routines or pain experiences are the same. Our care begins with listening.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {values.map((v, i) => (
            <div key={i} className="px-6 py-3 rounded-full bg-ivory border border-champagne text-forest font-medium">{v}</div>
          ))}
        </div>
      </div>
    </section>
  );
}