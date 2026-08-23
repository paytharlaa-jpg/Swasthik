export function SignatureProgram() {
  const steps = [
    { title: "Personal Consultation", desc: "Understand the pain, routine, posture, lifestyle and health history." },
    { title: "Ayurvedic Assessment", desc: "Identify imbalances and select suitable therapies." },
    { title: "Focused Treatment Plan", desc: "Combine therapies according to the individual condition." },
    { title: "14 Therapeutic Sittings", desc: "Deliver carefully planned sessions across the treatment period." },
    { title: "Progress Review", desc: "Review comfort, flexibility, movement and next-step recommendations." },
  ];

  return (
    <section id="program" className="bg-forest-deep text-ivory py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold font-medium uppercase tracking-widest text-sm mb-4">
            Our Signature Care Program
          </p>
          <h2 className="text-h2 font-display font-bold mb-6">
            7 Days of Treatment. 14 Focused Sittings.
          </h2>
          <p className="text-body-lg text-ivory/80 max-w-2xl mx-auto">
            A structured Ayurvedic care journey designed around personalized assessment, focused therapies and gradual improvement.
          </p>
        </div>

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-[2px] bg-gold/30"></div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-4 flex-1 group">
                <div className="w-12 h-12 rounded-full bg-forest border-2 border-gold text-gold flex items-center justify-center font-bold text-lg shrink-0 group-hover:bg-gold group-hover:text-forest transition-colors">
                  {i + 1}
                </div>
                <div className="md:text-center pt-2 md:pt-0">
                  <h3 className="font-display font-bold text-xl mb-2 text-ivory">{step.title}</h3>
                  <p className="text-sm text-ivory/70 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-sm text-ivory/50 italic mb-8 max-w-xl mx-auto">
            *Treatment duration, therapy selection and outcomes may vary according to the individual condition and response.
          </p>
          <a href="#appointment" className="inline-flex items-center justify-center px-8 py-4 bg-gold text-forest-deep hover:bg-gold/90 transition-colors rounded font-semibold text-lg">
            Check Whether This Program Is Suitable for You
          </a>
        </div>
      </div>
    </section>
  );
}
