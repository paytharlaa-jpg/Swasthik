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