import React from "react";
import { FaMedal } from "react-icons/fa";
import "./visionmission.css";
import Winner202425 from "../assets/ptu2024-2025.JPG"
import ptu23winner from "../assets/23ptuwinner.jpg"
import ptu25 from "../assets/ptu25.jpeg"

const VisionMission = () => {
  return (
   <section className="vision-mission-section">
      {/* Left side images */}
      <div className="vm-images">
         <h2 className="awards-heading">
  <FaMedal className="medal-icon" />
  Awards
  <FaMedal className="medal-icon" />
</h2>
<p className="awards-description">
  Our college has consistently excelled in sports, achieving recognition and awards 
  that highlight teamwork, dedication, and true sportsmanship.
</p>

        <div className="row single">
          <div className="image-box">
            <img src={Winner202425} alt="Sports 3" />
            <div className="overlay-text">Winner of the 26<sup>th</sup> IKPTU Annual Athletic Meet</div>
          </div>
          
        </div>

        <div className="row">
          <div className="image-box">
            <img src={ptu25} alt="Sports 1" />
            <div className="overlay-text">Winner of the 25<sup>th</sup> IKPTU Annual Athletic Meet</div>
          </div>

          <div className="image-box">
            <img src={ptu23winner} alt="Sports 2" />
            <div className="overlay-text">Winner of the 23<sup>th</sup> IKPTU Annual Athletic Meet</div>
          </div>
        </div>
       
      </div>

      {/* Right side content */}
      <div className="vm-content">

        <div className="ellipse-box vision">
          <h3>Vision</h3>
          <p>
            Promotion of the personal and professional development of students through designing and 
            implementing programs of international standard that support healthy lifestyles and academic success.
          </p>
        </div>

       <div className="ellipse-box mission">
  <h3>Mission</h3>
  <ul className="mission-points">
    <li>To honor academic mission of the college by promoting general welfare of the students.</li>
    <li>To promote physical activity and help individuals to enhance their health, fitness and quality of life.</li>
    <li>To develop state of art infrastructure of international standard.</li>
    <li>To develop overall personality of the students with focus on core values like teamwork, respect, integrity, balance, humility, accountability and sportsmanship.</li>
    <li>To inculcate moral, ethical and spiritual values through intramural and extramural activities.</li>
    <li>To engage the mind, to elevate the spirit and stimulate the best effort of all who are associated with the college.</li>
  </ul>
</div>

      </div>
    </section>
  );
};

export default VisionMission;
