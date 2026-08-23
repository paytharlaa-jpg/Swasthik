export function WellnessGift() {
  return (
    <section id="gift" className="py-24 md:py-32 px-6 md:px-12 bg-forest text-ivory text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-gold font-medium uppercase tracking-widest text-sm mb-4">A Meaningful Rakhi Gift</p>
        <h2 className="text-h2 font-display font-bold mb-6">Gift care that stays long after the celebration.</h2>
        <p className="text-body-lg text-ivory/80 mb-12 max-w-2xl mx-auto">This Raksha Bandhan, encourage your sibling or loved one to take the first step toward better mobility, comfort and natural wellness.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {["Ayurvedic Consultation", "Pain Assessment", "Therapy Recommendation", "Wellness Follow-Up"].map((item, i) => (
            <div key={i} className="p-4 bg-forest-deep rounded-xl border border-gold/20 text-sm font-medium">{item}</div>
          ))}
        </div>
        
        <a href="#appointment" className="inline-block px-8 py-4 bg-gold text-forest-deep hover:bg-gold/90 transition-colors rounded font-semibold text-lg">Enquire About Rakhi Wellness Packages</a>
      </div>
    </section>
  );
}