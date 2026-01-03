

import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import BookAppointment from "./pages/BookAppointment";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SingleService from "./pages/SingleService";



export default function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route
          path="/*"
          element={
          <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<SingleService />} />
            <Route path="/book" element={<BookAppointment />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </>}
      />
      
        
      
    </Routes>
    </BrowserRouter>
  );
}


