import { Link } from "react-router-dom";

export default function MeetExpert() {
  return (
    <section className="bg-[#f6fbfb] py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/images/doctor.jpg"
            alt="Dr. R.K Pal"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl shadow"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <p className="text-xs sm:text-sm uppercase text-gray-400 mb-2">
            Meet Our Expert
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
            Dr. R.K Pal ( M.D. – Ayurveda, C.A.R.D)
          </h1>

          <p className="text-gray-700 leading-7 sm:leading-8 mb-4 md:mb-6 text-sm sm:text-base">
            Inspired by the teachings of Ayurveda, Dr. R.K Pal
            believes that every person’s body is unique,
            and the best way to heal is by balancing the mind, body,
            and soul naturally.
          </p>

          <p className="text-gray-700 leading-7 sm:leading-8 mb-6 md:mb-8 text-sm sm:text-base">
            At Dhruwraj Ayurveda & Panchkarma, we bring the ancient wisdom
            of Ayurveda to help people live healthier, happier lives.
            At our center in Kanpur, India, we use best Ayurvedic
            techniques, natural herbs, simple exercises, soothing
            therapies, and healthy foods to treat common problems
            like Diabetes, Psoriasis, Asthma, Piles, Fissures,
            Knee Pain, Arthritis, PCOD, and many more.
          </p>

          <Link
            to="/book"
            className="inline-flex items-center justify-center gap-2 bg-teal-100 text-black px-6 py-3 rounded-lg text-sm sm:text-base w-full sm:w-auto"
          >
            Book An Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
