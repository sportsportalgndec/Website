import React from "react";
import "./Contact.css";
import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Left side: Map & Address */}
      <div className="contact-info">
        <h2 className="section-title">Contact Us</h2>
        <div className="info-card">
          <h3>GNDEC Sports Complex</h3>
          <p>
            <FaMapMarkerAlt className="icon" /> Guru Nanak Dev Engineering College<br />
            Gill Park, Gill Road, Ludhiana, Punjab, India
          </p>
          <p>
            <FaPhoneAlt className="icon" /> +91 98765 43210
          </p>
          <p>
            <IoMdMail className="icon" /> sports@gndec.ac.in
          </p>
        </div>

        {/* Google Map Embed */}
        <div className="map-container">
          <iframe
            title="gndec-map"
            src="https://www.google.com/maps?q=30.858194,75.863139&hl=es;z=14&output=embed"
            width="100%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Right side: Forms List */}
      <div className="contact-form">
        <h2 className="section-title">Download Forms</h2>
       <ul className="forms-list">
  <li>
    <a href="/" download>
      🏊 Swimming Registration Form
    </a>
  </li>
  <li>
    <a href="/" download>
      📝 Ground Lease Form
    </a>
  </li>
</ul>

      </div>
    </div>
  );
};

export default Contact;
