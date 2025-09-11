import React from "react";
import "./intramural.css";
import activity1 from "../assets/Cricket pitches  Sports stadium.jpeg";
import activity7 from "../assets/intra/basketball.JPG";
import activity12 from "../assets/intra/chess.JPG";
import activity10 from "../assets/intra/football.JPG";
import activity19 from "../assets/intra/cricket faculty.JPG";
import activity20 from "../assets/intra/yoga staff.jpeg";
import activity21 from "../assets/intra/cyclingstaff.jpg"
import activity22 from "../assets/intra/fitindia.JPG"

const IntraMural = () => {
  const activities = [
    { img: activity1, title:"Cross country (M/W)" },
    // { img: activity1, title:"Table-Tennis (M/W)" },
    { img: activity1, title:"N/S Kabaddi (M)" },
    // { img: activity1, title:"Cycling (M/W)" },
    // { img: activity1, title:"Badminton (M/W)" },
    // { img: activity1, title:"Swimming (M/W)" },
    { img: activity7, title:"Basketball (M/W)" },
    { img: activity1, title:"Lawn-Tennis (M/W)" },
    { img: activity1, title:"Volleyball (M/W)" },
    { img: activity10, title:"Footabll (M/W)" },
    // { img: activity1, title:"Athletics (M/W)" },
    { img: activity12, title:"Chess (M/W)" },
    // { img: activity1, title:"Weightlifting (M)" },
    //  { img: activity1, title: "Powerlifting (M)" },
    //   { img: activity1, title: "Best Physique (M)"},
    { img: activity1, title:"Cricket (M)" },
    // { img: activity1, title:"Handball (M/W)" },
    // { img: activity1, title:"Hockey (M/W)" },
    { img: activity19, title:"Cricket (Staff)" },
    { img: activity20, title:"Yoga (Staff)" },
    { img: activity21, title:"Cycling (Staff)" },
    { img: activity22, title:"Fit-India" },
  ];

  return (
    <div className="intra-container">
      
      <p className="intra-subtitle">
        Intra Mural Activities foster teamwork, leadership, and healthy competition,
        giving students a platform to showcase their talent and build lifelong memories on campus
      </p>
      <div className="intra-grid">
        {activities.map((act, index) => (
          <div className="intracard" key={index}>
            <img src={act.img} alt={act.title} className="card-img" />
            <div className="card-body">
              <h2 className="card-title">{act.title}</h2>
              <p className="card-desc">{act.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntraMural;
