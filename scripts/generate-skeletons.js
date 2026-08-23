const fs = require('fs');
const path = require('path');

const components = [
  { path: 'components/layout/Header.tsx', name: 'Header' },
  { path: 'components/layout/Footer.tsx', name: 'Footer' },
  { path: 'components/campaign/ProtectionSection.tsx', name: 'ProtectionSection', id: 'protection' },
  { path: 'components/campaign/SignatureProgram.tsx', name: 'SignatureProgram', id: 'program' },
  { path: 'components/campaign/BodyPainMap.tsx', name: 'BodyPainMap', id: 'conditions' },
  { path: 'components/campaign/TherapyShowcase.tsx', name: 'TherapyShowcase', id: 'therapies' },
  { path: 'components/campaign/DoctorSection.tsx', name: 'DoctorSection', id: 'doctors' },
  { path: 'components/campaign/WellnessGift.tsx', name: 'WellnessGift', id: 'gift' },
  { path: 'components/campaign/PatientStories.tsx', name: 'PatientStories', id: 'stories' },
  { path: 'components/campaign/WhyChooseUs.tsx', name: 'WhyChooseUs', id: 'why-us' },
  { path: 'components/campaign/ClinicGallery.tsx', name: 'ClinicGallery', id: 'gallery' },
  { path: 'components/campaign/FAQSection.tsx', name: 'FAQSection', id: 'faq' },
  { path: 'components/campaign/AppointmentSection.tsx', name: 'AppointmentSection', id: 'appointment' },
  { path: 'components/campaign/LocationSection.tsx', name: 'LocationSection', id: 'location' }
];

components.forEach(comp => {
  const fullPath = path.join(process.cwd(), comp.path);
  const content = `export function ${comp.name}() {
  return (
    <section ${comp.id ? `id="${comp.id}"` : ''} className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
      <h2 className="text-h2 font-display font-bold mb-8">${comp.name} Placeholder</h2>
      <p className="text-body-lg text-muted">This section is currently under construction.</p>
    </section>
  );
}
`;
  fs.writeFileSync(fullPath, content);
  console.log(`Created ${comp.path}`);
});
