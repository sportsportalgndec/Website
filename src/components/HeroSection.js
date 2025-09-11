import React, { useState, useEffect } from "react";
import "./HeroSection.css";

function HeroSection({ slides }) {
  const [current] = useState(() => Math.floor(Math.random() * slides.length));
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const slide = slides[current];

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
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
        <h1 style={{ fontSize: isMobile ? slide.mobileTextStyle?.fontSize : slide.textStyle?.fontSize }}>
          <span className="line1" style={{ color: slide.line1Color }}>
            {slide.line1Text}
          </span>
          <span className="line2" style={{ color: slide.line2Color }}>
            {slide.line2Text}
          </span>
        </h1>
      </div>
    </div>
  );
}

export default HeroSection;
