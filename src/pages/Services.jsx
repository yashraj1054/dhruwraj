import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await API.get("/services");
        setServices(res.data || []);
      } catch (err) {
        console.error("Failed to load services", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="p-6 sm:p-10 text-center text-gray-500 text-sm sm:text-base">
        Loading services...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 pt-16 sm:pt-20 mt-20">

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
        Our Treatments
      </h1>

      {services.length === 0 ? (
        <p className="text-center text-gray-500 text-sm sm:text-base">
          No services available.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white shadow rounded-xl overflow-hidden flex flex-col"
            >

              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="h-44 sm:h-48 w-full object-cover"
              />

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg font-semibold">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2 flex-grow">
                  {service.description
                    ? service.description.substring(0, 100)
                    : ""}
                  ...
                </p>

                <Link
                  to={`/services/${service._id}`}
                  className="inline-block mt-4 text-primary font-medium text-sm sm:text-base"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

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
