import { Link } from "react-router-dom";

export default function Treatments() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
          Our Treatments
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {["Panchkarma", "PCOD", "Arthritis"].map((t) => (
            <div
              key={t}
              className="p-5 sm:p-6 shadow rounded-xl text-center sm:text-left"
            >
              <h3 className="font-semibold text-base sm:text-lg">
                {t}
              </h3>

              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Natural Ayurvedic treatment for {t}.
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-10">
          <Link
            to="/services"
            className="text-primary font-medium text-sm sm:text-base"
          >
            View All Treatments →
          </Link>
        </div>

      </div>
    </section>
  );
}
