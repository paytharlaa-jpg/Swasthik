import { Activity } from "lucide-react";

export function BodyPainMap() {
  const conditions = [
    "Back pain", "Knee pain", "Neck pain", "Shoulder pain", 
    "Sciatica", "Slip-disc support", "Cervical spondylosis", 
    "Posture-related pain", "Work-related body pain", 
    "Joint stiffness", "Muscular tightness", "Mobility concerns"
  ];

  return (
    <section id="conditions" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto bg-ivory">
      <div className="text-center mb-16">
        <h2 className="text-h2 font-display font-bold text-forest-deep mb-4">
          The protection your body needs.
        </h2>
        <p className="text-body-lg text-ink/80 max-w-2xl mx-auto">
          Explore personalized Ayurvedic support for common pain, stiffness and mobility concerns.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Pain Map Visual */}
        <div className="flex-1 w-full flex justify-center relative">
          <div className="relative w-full max-w-md aspect-[3/4] bg-beige rounded-3xl overflow-hidden border border-champagne flex items-center justify-center">
            {/* Placeholder for anatomical visual */}
            <div className="absolute inset-0 bg-[url('/images/generated/anatomy-placeholder.jpg')] bg-cover bg-center opacity-30 mix-blend-multiply"></div>
            
            {/* Example Hotspots */}
            <button className="absolute top-[20%] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold/80 border-2 border-white flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-forest/30" aria-label="Neck">
              <span className="absolute w-full h-full rounded-full bg-gold animate-ping opacity-50"></span>
              <div className="absolute opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-forest text-white text-xs px-3 py-1 rounded top-full mt-2 whitespace-nowrap transition-opacity">Neck Area</div>
            </button>
            <button className="absolute top-[25%] left-[30%] w-8 h-8 rounded-full bg-gold/80 border-2 border-white flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-forest/30" aria-label="Shoulder">
              <span className="absolute w-full h-full rounded-full bg-gold animate-ping opacity-50"></span>
              <div className="absolute opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-forest text-white text-xs px-3 py-1 rounded top-full mt-2 whitespace-nowrap transition-opacity">Shoulder</div>
            </button>
            <button className="absolute top-[45%] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold/80 border-2 border-white flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-forest/30" aria-label="Lower Back">
              <span className="absolute w-full h-full rounded-full bg-gold animate-ping opacity-50"></span>
              <div className="absolute opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-forest text-white text-xs px-3 py-1 rounded top-full mt-2 whitespace-nowrap transition-opacity">Lower Back</div>
            </button>
            <button className="absolute top-[70%] left-[35%] w-8 h-8 rounded-full bg-gold/80 border-2 border-white flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-forest/30" aria-label="Knee">
              <span className="absolute w-full h-full rounded-full bg-gold animate-ping opacity-50"></span>
              <div className="absolute opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-forest text-white text-xs px-3 py-1 rounded top-full mt-2 whitespace-nowrap transition-opacity">Knee</div>
            </button>
          </div>
        </div>

        {/* Conditions List */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {conditions.map((condition, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-ivory shadow-sm hover:border-gold/30 hover:shadow-md transition-all">
                <Activity className="text-forest shrink-0" size={18} />
                <span className="text-ink font-medium text-sm md:text-base">{condition}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted italic">
            *Supportive care may be considered after professional assessment.
          </p>
        </div>
      </div>
    </section>
  );
}
