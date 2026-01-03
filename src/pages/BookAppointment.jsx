// import { useEffect, useState } from "react";
// import API from "../services/api";

// export default function BookAppointment() {
//   const [services, setServices] = useState([]);
//   const [success, setSuccess] = useState("");

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     service: "",
//     date: "",
//     message: "",
//   });

//   useEffect(() => {
//     API.get("/services").then((res) => {
//       setServices(res.data || []);
//     });
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     if (!form.name || !form.phone || !form.service || !form.date) {
//       alert("Please fill all required fields");
//       return;
//     }

//     try {
//       await API.post("/appointments", form);
//       setSuccess("Appointment booked successfully ✅");
//       setForm({
//         name: "",
//         phone: "",
//         service: "",
//         date: "",
//         message: "",
//       });
//     } catch (err) {
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen mt-16 sm:mt-20">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">

//         {/* Heading */}
//         <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
//           Book Appointment
//         </h1>

//         <p className="text-center text-gray-600 text-sm sm:text-base mb-8 sm:mb-10">
//           Fill the form below and our team will contact you shortly
//         </p>

//         {/* Form */}
//         <form
//           onSubmit={submitHandler}
//           className="bg-white shadow rounded-xl p-5 sm:p-8 space-y-5 sm:space-y-6"
//         >

//           {/* Name */}
//           <div>
//             <label className="block text-gray-700 mb-1 text-sm sm:text-base">
//               Full Name *
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none"
//               placeholder="Enter your name"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-gray-700 mb-1 text-sm sm:text-base">
//               Phone Number *
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               value={form.phone}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none"
//               placeholder="Enter phone number"
//             />
//           </div>

//           {/* Service Dropdown */}
//           <div>
//             <label className="block text-gray-700 mb-1 text-sm sm:text-base">
//               Select Treatment *
//             </label>
//             <select
//               name="service"
//               value={form.service}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none"
//             >
//               <option value="">-- Select Service --</option>
//               {services.map((s) => (
//                 <option key={s._id} value={s.title}>
//                   {s.title}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Date */}
//           <div>
//             <label className="block text-gray-700 mb-1 text-sm sm:text-base">
//               Preferred Date *
//             </label>
//             <input
//               type="date"
//               name="date"
//               value={form.date}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none"
//             />
//           </div>

//           {/* Message */}
//           <div>
//             <label className="block text-gray-700 mb-1 text-sm sm:text-base">
//               Message (optional)
//             </label>
//             <textarea
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none"
//               rows="4"
//               placeholder="Describe your concern"
//             />
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-teal-100 text-black py-3 rounded-lg text-base sm:text-lg hover:opacity-90 transition"
//           >
//             Book Appointment
//           </button>

//           {success && (
//             <p className="text-green-600 text-center text-sm sm:text-base mt-4">
//               {success}
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import API from "../services/api";

export default function BookAppointment() {
  const [services, setServices] = useState([]);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  useEffect(() => {
    API.get("/services").then((res) => {
      setServices(res.data || []);
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.service || !form.date) {
      alert("Please fill all required fields");
      return;
    }

    /* ===========================
       OPTIONAL: SAVE TO DATABASE
       (Uncomment if needed)
    ============================ */
    // try {
    //   await API.post("/appointments", form);
    // } catch (err) {
    //   console.error("DB save failed");
    // }

    /* ===========================
       WHATSAPP MESSAGE
    ============================ */
    const whatsappNumber = "919795053040"; // 👈 CHANGE TO YOUR NUMBER (no +)

    const message = `
 *New Appointment Request*

 Name: ${form.name}
 Phone: ${form.phone}
 Treatment: ${form.service}
 Date: ${form.date}

 Message:
${form.message || "N/A"}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    // Reset form
    setForm({
      name: "",
      phone: "",
      service: "",
      date: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen mt-16 sm:mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
          Book Appointment
        </h1>

        <p className="text-center text-gray-600 text-sm sm:text-base mb-8 sm:mb-10">
          Fill the form below and book instantly via WhatsApp
        </p>

        {/* Form */}
        <form
          onSubmit={submitHandler}
          className="bg-white shadow rounded-xl p-5 sm:p-8 space-y-5 sm:space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-1 text-sm sm:text-base">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 mb-1 text-sm sm:text-base">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none"
              placeholder="Enter phone number"
            />
          </div>

          {/* Service */}
          <div>
            <label className="block text-gray-700 mb-1 text-sm sm:text-base">
              Select Treatment *
            </label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none"
            >
              <option value="">-- Select Service --</option>
              {services.map((s) => (
                <option key={s._id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-700 mb-1 text-sm sm:text-base">
              Preferred Date *
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 mb-1 text-sm sm:text-base">
              Message (optional)
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none"
              rows="4"
              placeholder="Describe your concern"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-teal-100 text-black py-3 rounded-lg text-base sm:text-lg hover:opacity-90 transition"
          >
            Book via WhatsApp
          </button>
        </form>

        {/* =========================
          FLOATING WHATSAPP BUTTON
      ========================== */}
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
    </div>
  );
}

