import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";

export default function SingleService() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await API.get(`/services/${id}`);
        setService(res.data);
      } catch (err) {
        console.error("Service not found");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-sm sm:text-base">
        Loading treatment...
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-sm sm:text-base">
        Service not found
      </div>
    );
  }

  return (
    <div className="bg-white mt-16 sm:mt-20">

      {/* 🔙 Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6 mt-20">
        <Link
          to="/services"
          className="text-sm sm:text-base text-gray-600 hover:text-black"
        >
          ← Back to Treatments
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-gray-800 mt-3 px-4">
        {service.title}
      </h1>

      {/* 🟢 TOP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Image */}
        <div className="overflow-hidden rounded-xl shadow">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-[220px] sm:h-[320px] md:h-[420px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <p className="text-gray-700 leading-7 sm:leading-8 mb-4 sm:mb-6 text-sm sm:text-base">
            {service.description}
          </p>

          <p className="text-gray-700 leading-7 sm:leading-8 mb-6 sm:mb-8 text-sm sm:text-base">
            {service.detaildescrition}
          </p>

          <Link
            to="/book"
            className="inline-flex items-center justify-center gap-2 bg-teal-100 text-black px-6 py-3 rounded-lg text-sm sm:text-base w-full sm:w-auto"
          >
            Book An Appointment
          </Link>
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
