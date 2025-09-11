import React from "react";
import { Routes, Route } from "react-router-dom"; // only Routes and Route

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IntraMural from "./pages/Intramural";

// pages
import Home from "./pages/Home";
import Facilities from "./pages/Facilities";
import StaffPage from "./pages/StaffPage";
import ExtraMural from "./pages/ExtraMural";
import AwardsPage from "./pages/AwardsPage";
import Contactpage from "./pages/Contactpage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facilities" element={<Facilities />} />
       <Route path="/intra" element={<IntraMural />} />
       
      <Route path="/staff" element={<StaffPage />} />
      <Route path="/extra" element={<ExtraMural />} />
      <Route path="/awards" element={<AwardsPage />} />
      <Route path="/contact" element={<Contactpage />} />
    
      </Routes>

      <Footer />
    </>
  );
}

export default App;
