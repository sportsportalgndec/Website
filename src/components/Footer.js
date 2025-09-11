import React from "react";
import { FaInstagram,  FaGlobe } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-about">
          <h3>About Us</h3>
           <p>
            Welcome to the official <strong>GNDEC Sports Portal</strong> – a digital hub
            dedicated to fostering sports culture, fitness, and competitive spirit among
            students. 
          </p>
          <p>
            From tournaments to training sessions, we aim to build a strong community
            where passion meets performance.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            {/* <li><a href="/about">About</a></li> */}
            <li><a href="/intra">Intramural Events</a></li>
            <li><a href="/extra">Extramural Events</a></li>
            {/* <li><a href="/gallery">Gallery</a></li> */}
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Activities Links */}
        <div className="footer-links">
          <h3>Activities</h3>
          <ul>
            <li><a href="https://gndec.ac.in/gndec/yoga.mp4">Fitness Training by Dr. Gunjan Bhardwaj </a></li>
            <li><a href="https://youtu.be/UqN1L9BNGSM?si=PfMZ69GDtXfFY7rc">Lower Back Strengthening Workout</a></li>
            {/* <li><a href="/sports-day">Sports Day</a></li>
            <li><a href="/tournaments">Tournaments</a></li>
            <li><a href="/workshops">Workshops</a></li> */}
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            {/* <a href="#"><FaFacebookF /></a> */}
            <a href="https://www.instagram.com/gndec_sports/"><FaInstagram /></a>
            {/* <a href="#"><FaTwitter /></a> */}
            <a href="/"><FaGlobe /></a>
            {/* <a href="#"><FaLinkedinIn /></a> */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} GNDEC SPORTS | All Rights Reserved</p>
        <p>Made by <strong>Genconians</strong></p>
      </div>
    </footer>
  );
};

export default Footer;
