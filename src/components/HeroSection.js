import React, { useState, useEffect } from "react";
import "./HeroSection.css";

function HeroSection({ slides }) {
  const [current] = useState(() => Math.floor(Math.random() * slides.length));
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showPopup, setShowPopup] = useState(false);

  const slide = slides[current];
  const registrationLink = "https://athletic.gndecsports.com/register";

  // 🔒 Registration open date
  const registrationOpenDate = new Date("2026-02-09");

  const handleRegisterClick = () => {
    const today = new Date();

    if (today >= registrationOpenDate) {
      window.open(registrationLink, "_blank");
    } else {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* 🔶 Registration Box */}
     <div className="registration-box">
  <span
    className="registration-text"
    onClick={handleRegisterClick}
  >
    Registrations for the{" "}
    <span className="edition">
      65<sup>th</sup>
    </span>{" "}
    Annual Athletic Championship
  </span>

  <span
    className="register-link"
    onClick={handleRegisterClick}
  >
    Click Here
  </span>
</div>

      {/* 🔔 Popup Message */}
      {showPopup && (
        <div className="popup-message">
          ❌ Sorry! Registration opens from{" "}
          <strong>9 February 2026</strong>
        </div>
      )}

      {/* 🔥 Hero Section */}
      <div className="hero-container">
        {/* Background */}
        <img src={slide.bg} alt="Sports Background" className="bg-img" />

        {/* Player */}
        <img
          src={slide.player}
          alt="Player"
          className="player-img"
          style={isMobile ? slide.mobileStyle : slide.style}
        />

        {/* Text */}
        <div
          className="hero-right"
          style={isMobile ? slide.mobileTextStyle : slide.textStyle}
        >
          <h1
            style={{
              fontSize: isMobile
                ? slide.mobileTextStyle?.fontSize
                : slide.textStyle?.fontSize,
            }}
          >
            <span className="line1" style={{ color: slide.line1Color }}>
              {slide.line1Text}
            </span>
            <span className="line2" style={{ color: slide.line2Color }}>
              {slide.line2Text}
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
