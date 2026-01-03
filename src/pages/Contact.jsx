



import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!form.name) newErrors.name = "This field is required.";
    if (!form.phone) newErrors.phone = "This field is required.";
    return newErrors;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // ✅ WhatsApp Message
    const whatsappMessage = `
*New Query from Website:*

Name: ${form.name}
Phone: ${form.phone}
Message: ${form.message || "N/A"}
    `;

    // 🔁 Replace with your WhatsApp number (no +, no spaces)
    const whatsappNumber = "919795053040";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Reset form
    setForm({ name: "", phone: "", message: "" });
    setErrors({});
  };

  return (
    <div className="bg-white mt-25">

      {/* Section Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-8 mb-6 text-center px-4">
        Contact Us
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 grid md:grid-cols-2 gap-12 md:gap-16">

        {/* LEFT: CONTACT DETAILS */}
        <div className="text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6">
            Contact Details
          </h2>

          <ul className="space-y-4 text-gray-700 text-sm sm:text-base md:text-lg">
            <li className="flex gap-3">
              📞 <span>+91-97950 53040</span>
            </li>

            <li className="flex gap-3 break-all">
              ✉ <span>dhruwrajayurveda@gmail.com</span>
            </li>

            <li className="flex gap-3">
              📍
              <span>
                20, Zoo Rd, Vikas Nagar, Nawabganj, Kanpur,
                Uttar Pradesh 208002
              </span>
            </li>

            <li className="flex gap-3">
              ⏰
              <span>
                Mon–Sat: 4 pm – 8:30 pm
                <br className="md:hidden" />
                (Sunday closed)
              </span>
            </li>

            {/* Social Icons */}
            <li className="flex items-center gap-4 pt-2">
              🌐 <span className="mr-2">Follow Us:</span>

              <a
                href="https://www.instagram.com/dr_rk_pal_ayurveda/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/src/assets/instagram.png"
                  alt="Instagram"
                  className="w-6 h-6 hover:scale-110 transition"
                />
              </a>

              <a
                href="https://www.facebook.com/drrkpaldhruwraj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/src/assets/facebook.png"
                  alt="Facebook"
                  className="w-6 h-6 hover:scale-110 transition"
                />
              </a>

              <a
                href="https://www.youtube.com/@drrkpaldruwrajayurveda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/src/assets/youtube.png"
                  alt="Youtube"
                  className="w-6 h-6 hover:scale-110 transition"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT: FORM */}
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6 text-center md:text-left">
            Ask Your Query
          </h2>

          <form onSubmit={submitHandler} className="space-y-5">

            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 text-sm sm:text-base border rounded-lg focus:outline-none ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={form.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 text-sm sm:text-base border rounded-lg focus:outline-none ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message or Comments"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full cursor-pointer sm:w-auto bg-teal-100 text-black px-8 py-3 rounded-lg shadow hover:opacity-90 transition"
            >
              Send via WhatsApp
            </button>

          </form>
        </div>
      </div>
           {/* GOOGLE MAP */}

      <section className="w-full px-4 sm:px-6 md:px-0 my-10">
        <h2 className="text-center text-xl font-semibold mb-4 ">
          Find Us on Google Maps
        </h2>
        <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] rounded-xl overflow-hidden shadow-sm ">
          <iframe
            title="clinic-map"
            src="https://www.google.com/maps?q=Dhruwraj%20Ayurveda&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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





