import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/gne_logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // ✅ Disable background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="logo-container">
        <img src={logo} alt="GNDEC Logo" className="logo" />
      </div>

      {/* Hamburger / Close Icon (always fixed at top-right on mobile) */}
      <div className={`hamburger ${isOpen ? "fixed" : ""}`} onClick={toggleMenu}>
        {isOpen ? <FaTimes size={28} color="#e0e0e0" /> : <FaBars size={28} color="#e0e0e0" />}
      </div>

      {/* Center: Links + Login inside mobile */}
      <ul className={`nav-links ${isOpen ? "mobile-active" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/awards">Awards</a></li>
        <li><a href="https://gallery.gndecsports.com">Gallery</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/facilities">Facilities</a></li>
        <li><a href="/intra">IntraMural</a></li>
        <li><a href="/extra">ExtraMural</a></li>
        <li><a href="/staff">Staff</a></li>

        {/* 👇 Login button inside menu for mobile */}
       <li className="mobile-login">
  <a href="https://portal.gndecsports.com" className="login-btn">Login</a>
</li>
</ul>

{/* Right: Login Button (desktop only) */}
<div className="login-container">
  <a href="https://portal.gndecsports.com" className="login-btn">Login</a>
</div>

    </nav>
  );
};

export default Navbar;
