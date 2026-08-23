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