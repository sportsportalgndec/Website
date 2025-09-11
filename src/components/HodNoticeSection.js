import React from "react";
import "./HodNoticeSection.css";
import hodPic from "../assets/Staff/Dr.gunjan.jpeg";

const HodNoticeSection = () => {
  return (
    <section className="hod-notice-section">
      
      {/* Left: Notice Board */}
      <div className="notice-board">
        <h2>Notice Board</h2>
        <ul>
  <li>🏆 Inter-year matches have started.</li>
  <li>🎓 PTU inter-college matches are starting from 15th Sept onwards.</li>
  <li>🏊‍♂️ Registration for swimming has started.</li>
</ul>

      </div>

      {/* Center: Description */}
      <div className="description">
       
        <p>
          Established in <strong>1956</strong>, the Sports Department at Guru Nanak Dev Engineering College fosters a strong sports culture among students and staff. Guided by the values of Guru Nanak Dev Ji and a commitment to diversity, we inspire students to lead <strong>healthy lifestyles</strong> through physical education and sports activities that promote lifelong well-being.
        </p>
        <p>
          Our programs prepare students to face a rapidly changing world with <strong>confidence and responsibility</strong>, encouraging them to discover, develop, and test their skills. The department provides <strong>state-of-the-art infrastructure</strong> for all students, ensuring opportunities regardless of gender or background.
        </p>
        <p>
          We organize <strong>intramural events, tournaments, and inter-college competitions</strong>, nurturing teamwork, leadership, and a competitive spirit. Through these activities, we emphasize the six dimensions of wellness — <strong>physical, emotional, social, spiritual, intellectual, and environmental</strong>.
        </p>
        <p>
          Our goal is to create a <strong>safe, enjoyable, and dynamic atmosphere</strong> encouraging personal growth and lifelong engagement in physical activity. At GNDEC, sports are a way of building character, health, and community.
        </p>
      </div>

      {/* Right: HOD Section */}
      <div className="hod-section">
        <div className="hod-image-wrapper">
          <img src={hodPic} alt="HOD" className="hod-image" />
        </div>
        <h3>Dr. Gunjan Bhardwaj</h3>
        <h4 className="hod-designation">Head of Sports Department</h4>
        <p>
Welcome to the GNDEC Sports Department. We nurture talent, encourage teamwork, and foster sportsmanship.
Our goal is to provide every student with opportunities to grow, excel, and become confident, responsible individuals through sports and physical activities </p>      </div>

    </section>
  );
};

export default HodNoticeSection;
