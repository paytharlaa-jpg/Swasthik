import { ContactExperience } from "@/components/sections/ContactExperience";
import { CinematicFooter } from "@/components/sections/CinematicFooter";

export default function ContactPage() {
  return (
    <main className="bg-midnight min-h-screen text-ivory pt-32">
      <div className="container-luxury section-padding pb-0">
        <h1 className="text-hero font-hero text-gold mb-8 text-center">Private Enquiries</h1>
        <p className="text-h3 font-heading text-ivory/80 max-w-3xl mx-auto text-center mb-16">
          Connect with our advisors to explore the Swasthik Ayurveda portfolio.
        </p>
      </div>
      
      <ContactExperience />
      
      <CinematicFooter />
    </main>
  );
}
