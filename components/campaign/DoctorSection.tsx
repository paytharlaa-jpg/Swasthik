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