// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-[#f6fbfb] shadow z-50">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
//         {/* Logo */}
//         <h1 className="text-xl font-bold text-primary">
//   <Link
//     to="/"
//     className="flex items-center gap-2"
//   >
//     <img
//       src="/images/brandicon.png"
//       alt="Dhruwraj Ayurveda & Panchkarma"
//       className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
//     />
//     <span>Dhruwraj Ayurveda & Panchkarma</span>
//   </Link>
// </h1>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-6 items-center">
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/services">Treatments</Link>
//           <Link to="/contact">Contact</Link>

//           <Link
//             to="/book"
//             className="bg-teal-100 text-black px-4 py-2 rounded "
//           >
//             Book Appointment
//           </Link>
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setOpen(!open)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow">
//           <ul>
//             <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
//             <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
//             <li><Link to="/services" onClick={() => setOpen(false)}>Treatments</Link></li>
//             <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
    
            
//           </ul>
//           <Link
//             to="/book"
//             className="block bg-teal-100 text-black px-4 py-2 rounded"
//             onClick={() => setOpen(false)}
//           >
//             Book Appointment
//           </Link>
          
          
          
          
          
//         </div>
//       )}
//     </nav>
//   );
// }


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  LuHouse,
  LuCalendarPlus2,
  LuStickyNote,
  LuBriefcaseMedical,
  LuContactRound,
  LuX,
  LuMenu
} from "react-icons/lu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // 🔹 Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-[#f6fbfb] shadow z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

          {/* Logo */}
          <h1 className="text-xl font-bold text-primary">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/images/brandicon.png"
                alt="Dhruwraj Ayurveda & Panchkarma"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
              />
              <span>Dhruwraj Ayurveda & Panchkarma</span>
            </Link>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Treatments</Link>
            <Link to="/contact">Contact</Link>

            <Link
              to="/book"
              className="bg-teal-100 text-black px-4 py-2 rounded"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <LuX size={22} /> : <LuMenu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow relative z-50">
            <ul>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 bg-[#f6fbfb] text-black px-4 py-2 rounded mb-2"
                  onClick={() => setOpen(false)}
                >
                  <LuHouse /> Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="flex items-center gap-2 bg-[#f6fbfb] text-black px-4 py-2 rounded mb-2"
                  onClick={() => setOpen(false)}
                >
                  <LuStickyNote /> About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="flex items-center gap-2 bg-[#f6fbfb] text-black px-4 py-2 rounded mb-2"
                  onClick={() => setOpen(false)}
                >
                  <LuBriefcaseMedical /> Treatments
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 bg-[#f6fbfb] text-black px-4 py-2 rounded mb-2"
                  onClick={() => setOpen(false)}
                >
                  <LuContactRound /> Contact
                </Link>
              </li>
            </ul>

            <Link
              to="/book"
              className="flex items-center gap-2 bg-teal-100 text-black px-4 py-2 rounded"
              onClick={() => setOpen(false)}
            >
              <LuCalendarPlus2 />
              Book Appointment
            </Link>
          </div>
        )}
      </nav>

      {/* 🔹 BLUR BACKGROUND OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
        />
      )}
    </>
  );
}

