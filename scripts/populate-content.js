const fs = require('fs');
const path = require('path');

const components = {
  'components/campaign/TherapyShowcase.tsx': `
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
`,
  'components/campaign/DoctorSection.tsx': `
import Image from "next/image";
export function DoctorSection() {
  return (
    <section id="doctors" className="py-24 md:py-32 px-6 md:px-12 bg-ivory max-w-7xl mx-auto text-center">
      <h2 className="text-h2 font-display font-bold text-forest-deep mb-16">Meet the doctors behind your care journey.</h2>
      <div className="flex flex-col md:flex-row justify-center gap-16">
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gold mb-6 relative bg-champagne">
            <Image src="/images/doctors/dr-krishna-mohan.jpg" alt="Dr. Krishna Mohan" fill className="object-cover" />
          </div>
          <h3 className="text-2xl font-display font-bold text-forest-deep">Dr. Krishna Mohan</h3>
          <p className="text-gold font-medium">Lead Ayurvedic Doctor</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gold mb-6 relative bg-champagne">
             <div className="absolute inset-0 flex items-center justify-center text-forest/20"><span className="text-4xl">👨‍⚕️</span></div>
          </div>
          <h3 className="text-2xl font-display font-bold text-forest-deep">Dr. Rajeev Raj</h3>
          <p className="text-gold font-medium">Ayurvedic Doctor</p>
        </div>
      </div>
      <div className="mt-16">
        <a href="#appointment" className="inline-block px-8 py-4 bg-forest text-white hover:bg-forest-deep transition-colors rounded font-semibold">Consult Our Doctors</a>
      </div>
    </section>
  );
}
`,
  'components/campaign/WellnessGift.tsx': `
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
`,
  'components/campaign/PatientStories.tsx': `
export function PatientStories() {
  return null; // Hidden in production as per instructions if no verified testimonials are supplied
}
`,
  'components/campaign/WhyChooseUs.tsx': `
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
`,
  'components/campaign/ClinicGallery.tsx': `
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
`,
  'components/campaign/FAQSection.tsx': `
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
`,
  'components/campaign/AppointmentSection.tsx': `
export function AppointmentSection() {
  return (
    <section id="appointment" className="py-24 md:py-32 px-6 md:px-12 bg-forest-deep text-ivory">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2">
          <h2 className="text-h2 font-display font-bold mb-6">Protect the people you love with thoughtful care.</h2>
          <p className="text-body-lg text-ivory/80 mb-8">Book a personalized Ayurvedic consultation for yourself, your sibling or your family.</p>
        </div>
        <div className="md:w-1/2 bg-white rounded-3xl p-8 text-ink">
          <form className="space-y-4 flex flex-col">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="p-3 border border-gray-200 rounded focus:border-forest outline-none w-full" />
              <input type="text" placeholder="Phone Number" className="p-3 border border-gray-200 rounded focus:border-forest outline-none w-full" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Age" className="p-3 border border-gray-200 rounded focus:border-forest outline-none w-full" />
              <input type="text" placeholder="Pain Area or Condition" className="p-3 border border-gray-200 rounded focus:border-forest outline-none w-full" />
            </div>
            <button type="button" className="mt-4 px-6 py-4 bg-forest text-white rounded font-bold w-full hover:bg-forest-deep transition-colors">Request My Consultation</button>
            <a href="https://wa.me/918367495666?text=Hello%20Swasthik%20Ayurveda%2C%20I%20would%20like%20to%20request%20an%20Ayurvedic%20consultation." target="_blank" rel="noopener noreferrer" className="block text-center mt-4 text-forest font-bold underline">Or Chat with Swasthik Ayurveda on WhatsApp</a>
          </form>
        </div>
      </div>
    </section>
  );
}
`,
  'components/campaign/LocationSection.tsx': `
export function LocationSection() {
  return (
    <section id="location" className="py-24 md:py-32 px-6 md:px-12 bg-ivory text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-h2 font-display font-bold text-forest-deep mb-8">Begin your healing journey near you.</h2>
        <p className="text-xl text-ink mb-2">Hydernagar, Kukatpally, Hyderabad</p>
        <p className="text-ink/80 mb-8">Phone: +91 8367495666 | Email: contact@swastikayurveda.com</p>
        <a href="https://maps.app.goo.gl/Mih2LEQSktxGrdiJA" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-gold text-forest-deep hover:bg-gold/90 transition-colors rounded font-semibold text-lg">Get Directions</a>
      </div>
    </section>
  );
}
`,
  'components/layout/Footer.tsx': `
export function Footer() {
  return (
    <footer className="bg-black text-ivory/60 py-12 px-6 md:px-12 text-center text-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <p className="mb-4">Swasthik Ayurveda. Traditional Ayurvedic Wisdom. Personalized Care. A Healthier Way Forward.</p>
        <p className="mb-8">Made with care for healthier lives.</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms and Conditions</a>
          <a href="#" className="hover:text-gold transition-colors">Medical Disclaimer</a>
        </div>
      </div>
    </footer>
  );
}
`
};

for (const [filepath, content] of Object.entries(components)) {
  fs.writeFileSync(path.join(process.cwd(), filepath), content.trim());
}
console.log("All remaining components populated.");
