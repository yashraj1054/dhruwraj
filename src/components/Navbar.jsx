import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#f6fbfb] shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-primary">
  <Link
    to="/"
    className="flex items-center gap-2"
  >
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
            className="bg-teal-100 text-black px-4 py-2 rounded "
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow">
          <ul>
            <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link to="/services" onClick={() => setOpen(false)}>Treatments</Link></li>
            <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
    
            
          </ul>
          <Link
            to="/book"
            className="block bg-teal-100 text-black px-4 py-2 rounded"
            onClick={() => setOpen(false)}
          >
            Book Appointment
          </Link>
          
          
          
          
          
        </div>
      )}
    </nav>
  );
}
