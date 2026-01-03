export default function YoutubeSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary  mb-6 text-center px-4">
          Ayurvedic Health Tips
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <iframe
            className="w-full h-64 rounded-xl"
            src="https://www.youtube.com/embed/fph1q3Q2SjM"
            title="Ayurvedic Remedy"
            allowFullScreen
          ></iframe>

          <iframe
            className="w-full h-64 rounded-xl"
            src="https://www.youtube.com/embed/dP-figP5kbA"
            title="Ayurvedic Remedy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
