import { Link } from "react-router-dom";


export default function About() {
  return (
    
    <div className="bg-white pt-16 md:pt-20">

      {/* =========================
          MEET OUR EXPERT
      ========================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="relative flex justify-center md:justify-start">
          <img
            src="/images/doctor.jpg"
            alt="Vaidya Namrata Vashishtha"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-[40px] md:rounded-[60px] shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <p className="text-xs sm:text-sm uppercase text-gray-400 mb-2">
            Meet Our Expert
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
            Dr. R.K Pal ( M.D. - Ayurveda, C.A.R.D)
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
      </section>

      {/* =========================
          ABOUT AYURVEDA BLISS
      ========================== */}
      <section className="bg-[#f6fbfb] py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/brandicon.png"
              alt="Ayurveda"
              className="w-40 sm:w-56 md:w-full rounded-xl shadow"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <p className="text-gray-700 leading-7 sm:leading-8 text-sm sm:text-lg">
              At Dhruwraj Ayurveda & Panchkarma, we believe that nature holds
              the key to true healing. Based in the heart of India,
              our ayurvedic hospital is committed to helping people
              overcome health challenges like diabetes, psoriasis,
              asthma, piles, fissures, knee pain, arthritis, PCOD,
              and more.
            </p>

            <p className="text-gray-700 leading-7 sm:leading-8 text-sm sm:text-lg mt-4 sm:mt-6">
              Inspired by the wisdom of ancient Ayurveda, we combine
              time-tested techniques, natural herbs, therapeutic
              exercises, and wholesome foods to promote holistic
              well-being. Our goal is to restore balance in your
              body, mind, and soul, bringing long-lasting relief
              without the side effects of modern medicines.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          MISSION & VISION
      ========================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12">

        {/* Mission */}
        <div className="border rounded-xl p-6 sm:p-8 shadow-sm text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 md:mb-4">
            Our Mission
          </h3>
          <p className="text-gray-700 leading-7 sm:leading-8 text-sm sm:text-base">
            Our mission at Dhruwraj Ayurveda & Panchkarma is to make holistic
            healing accessible to every individual. We aim to harness
            the power of Ayurveda to naturally treat chronic and
            lifestyle-related health conditions while educating
            people about the benefits of living in harmony with
            nature.
          </p>
        </div>

        {/* Vision */}
        <div className="border rounded-xl p-6 sm:p-8 shadow-sm text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 md:mb-4">
            Our Vision
          </h3>
          <p className="text-gray-700 leading-7 sm:leading-8 text-sm sm:text-base">
            Our vision is to become a trusted name in Ayurvedic
            healthcare, renowned for delivering natural and
            sustainable cures across India and beyond. We dream
            of a world where everyone experiences the transformative
            power of Ayurveda.
          </p>
        </div>
      </section>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919795053040"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-105 transition z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="w-6 h-6"
        >
          <path d="M16 .5C7.5.5.7 7.3.7 15.8c0 2.8.8 5.6 2.3 8L.5 31.5l7.9-2.4c2.3 1.3 5 2 7.6 2 8.5 0 15.3-6.8 15.3-15.3C31.3 7.3 24.5.5 16 .5zm0 27.9c-2.3 0-4.6-.6-6.6-1.8l-.5-.3-4.7 1.4 1.5-4.6-.3-.5c-1.3-2.1-2-4.5-2-6.9C3.4 8.8 9.1 3.1 16 3.1S28.6 8.8 28.6 15.7 22.9 28.4 16 28.4zm7.7-9.2c-.4-.2-2.2-1.1-2.6-1.2-.4-.2-.6-.2-.9.2-.2.4-1 1.2-1.2 1.4-.2.2-.4.2-.8 0-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.2-.4.4-.6.2-.2.2-.4 0-.6-.2-.2-.9-2.2-1.2-3-.3-.8-.6-.7-.9-.7h-.8c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 3s1.2 3.5 1.4 3.8c.2.2 2.3 3.6 5.7 5 .8.4 1.4.6 1.9.8.8.3 1.6.3 2.2.2.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z" />
        </svg>
      </a>

    </div>
  );
}

