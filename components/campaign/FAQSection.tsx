export function FAQSection() {
  const faqs = [
    { q: "What happens during the first consultation?", a: "The doctor reviews your condition, pain pattern, routine, posture, lifestyle and medical history before recommending the next steps." },
    { q: "Is the 7-day program suitable for everyone?", a: "Suitability depends on the individual condition and must be confirmed after consultation." },
    { q: "How many therapy sittings will I need?", a: "The number and type of sittings may vary according to the treatment plan and individual response." },
    { q: "Do you offer non-surgical pain-management options?", a: "Ayurvedic care may offer supportive non-surgical options for certain conditions, subject to professional assessment." },
    { q: "Do I need an appointment?", a: "Booking an appointment is recommended to reduce waiting time and help confirm doctor availability." },
    { q: "Where is Swasthik Ayurveda located?", a: "Swasthik Ayurveda is located in Hydernagar, Kukatpally, Hyderabad." }
  ];
  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-12 bg-white max-w-4xl mx-auto">
      <h2 className="text-h2 font-display font-bold text-forest-deep mb-12 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="group border border-champagne rounded-xl bg-ivory overflow-hidden">
            <summary className="p-6 font-display font-bold text-xl text-forest-deep cursor-pointer list-none flex justify-between items-center">
              {faq.q}
              <span className="text-gold group-open:rotate-45 transition-transform text-2xl">+</span>
            </summary>
            <div className="px-6 pb-6 text-ink/80">{faq.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}