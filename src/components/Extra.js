import React from "react";
import "./extramural.css";
import activity2 from "../assets/extra/basketball.JPG"
import activity3 from "../assets/extra/swimming.JPG"
import activity4 from "../assets/extra/athletic.JPG"


const ExtraMural = () => {

  const activities = [
    // { img: activity1, title:"Cross country (M/W)" },
    // { img: activity1, title:"Table-Tennis (M/W)" },
    // { img: activity1, title:"N/S Kabaddi (M)" },
    // { img: activity1, title:"Cycling (M/W)" },
    // { img: activity1, title:"Badminton (M/W)" },
    { img: activity3, title:"Swimming (M/W)" },
    { img: activity2, title:"Basketball (M/W)" },
    // { img: activity1, title:"Lawn-Tennis (M/W)" },
    // { img: activity1, title:"volleyball (M/W)" },
    // { img: activity1, title:"Footabll (M/W)" },
    { img: activity4, title:"Athletics (M/W)" },
    // { img: activity1, title:"Chess (M/W)" },
    // { img: activity1, title:"Weightlifting (M)" },
    //  { img: activity1, title: "Powerlifting (M)" },
    //   { img: activity1, title: "Best Physique (M)"},
    // { img: activity1, title:"Cricket (M)" },
    // { img: activity1, title:"Handball (M/W)" },
    // { img: activity1, title:"Hockey (M/W)" },
    
  ];

  return (
    <div className="extra-container">
      <p className="extra-intro">
        Our campus encourages students to explore their passions beyond academics. Dive into activities that spark creativity, teamwork, and leadership.
      </p>

      <div className="extra-grid">
        {activities.map((act, index) => (
          <div className="extra-card" key={index}>
            <div className="extra-card-img-wrapper">
              <img src={act.img} alt={act.title} className="extra-card-img" />
            </div>
            <div className="extra-card-body">
              <h2 className="extra-card-title">{act.title}</h2>
              <p className="extra-card-desc">{act.desc}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraMural;
