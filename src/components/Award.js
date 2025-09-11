import React from "react";
import "./awards.css";
import img1 from "../assets/awards/Basketball Boys-1st.jpeg";
import img2 from "../assets/awards/Winner Handball Team (Girls).jpg";
import img3 from "../assets/awards/boys winner.jpeg";
import img6 from "../assets/awards/cricket.jpeg";
import img4 from "../assets/awards/Basketball girls-1st.jpeg"
import img5 from "../assets/awards/Handball Boys.jpeg"
import img7 from "../assets/awards/Chess Boys-2nd.jpeg"
import img8 from "../assets/awards/Chess girls-2nd.jpeg"
import img9 from "../assets/awards/Cross-country-2nd.jpeg"
import img10 from "../assets/awards/Cycling (Men & Women)-1st.jpg"
import img11 from "../assets/awards/Hockey Team-1st.jpeg"
import img12 from "../assets/awards/Swimming team-1st.jpeg"
import img13 from "../assets/awards/T.T Teams 2nd and 3rd.jpg"

const Awards = () => {
  const awardsData = [
  { img: img1, text: "🥇 Basketball Champions (2024–25)" },
  { img: img2, text: "🥇 Handball Champions (2024–25)" },
  { img: img3, text: "🥇 Badminton Winners (2024–25)" },
  { img: img4, text: "🥇 Basketball Winners (2024–25)" },
  { img: img5, text: "🥇 Handball Winners (2024–25)" },
  { img: img6, text: "🥇 Cricket Champions (2024–25)" },
  { img: img7, text: "🥈 Chess – 2nd Place (2024–25)" },
  { img: img8, text: "🥈 Chess – 2nd Place (2024–25)" },
  { img: img9, text: "🥈 Cross-Country – 2nd Place (2024–25)" },
  { img: img10, text: "🥇 Cycling Champions (2024–25)" },
  { img: img11, text: "🥇 Hockey Champions (2024–25)" },
  { img: img12, text: "🥇 Swimming Champions (2024–25)" },
  { img: img13, text: "🥈 Boys & 🥉 Girls – Table Tennis (2024–25)" },
];


  return (
    <section className="awards-section">
      {/* Awards Intro */}
      
      <div className="awards-intro">
        // <h2>Awards & Achievements 🏅</h2>
        <p>
          Celebrating the triumphs of our athletes who inspire with passion,
          dedication, and teamwork.
        </p>
      </div>

      {/* Awards Grid */}
      <div className="awards-grid">
        {awardsData.map((award, index) => (
          <div className="award-card" key={index}>
            <img src={award.img} alt={award.text} />
            <div className="overlay-text">{award.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;

