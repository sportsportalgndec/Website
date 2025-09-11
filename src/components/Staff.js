import React from "react";
import "./staff.css";
import staff1 from "../assets/Staff/Dr. JS.jpeg";
import staff2 from "../assets/Staff/Dr.gunjan.jpeg";
import staff3 from "../assets/Staff/prof.surminder.jpeg";
import staff4 from "../assets/Staff/Gulvir Singh.jpeg";
import staff5 from "../assets/Staff/ranjodh kaur.jpg";
import staff6 from "../assets/Staff/gurjot kaur.jpeg";
import staff7 from "../assets/Staff/Kapil sharma.jpg";
import staff8 from "../assets/Staff/Rajvir Kaur.jpg";
import staff9 from "../assets/Staff/Prabhjot Singh.jpg";
import staff10 from "../assets/Staff/Kuldeep Kooner.jpeg";
import staff11 from "../assets/Staff/Gulraj Singh.jpeg";
import staff12 from "../assets/Staff/Neha Gupta.JPG";
import staff13 from "../assets/Staff/Harneet Kaur.jpg";
import staff14 from "../assets/Staff/VANSH SINGH.jpg";
import staff15 from "../assets/Staff/Pawan Singh.png";
import staff16 from "../assets/Staff/Sam Dhingra.jpeg";
import staff17 from "../assets/Staff/Manvir.jpeg";
import staff18 from "../assets/Staff/Jashan.jpg";
import staff19 from "../assets/Staff/Aditi Kaushal.jpg";
import staff20 from "../assets/Staff/sunny.jpg";
import staff21 from "../assets/Staff/amanpreet.jpeg";



// Group photo import
import groupPhoto from "../assets/Staff/group-photo.JPG";  // <-- apna actual path rakhna

const staffMembers = [
  { name: "Dr. J.S Grewal", role: "President of Sports Department", img: staff1 },
  { name: "Dr. Gunjan Bhardwaj", role: "Head of Sports Department", img: staff2 },
  { name: "Prof. Suminder Singh", role: "Sports Department", img: staff3 },
  { name: "Dr. Gulvir Singh", role: "Department of Mechanical Engineering", img: staff4 },
  { name: "Prof. Ranjodh Kaur", role: "Department of Information Technology", img: staff5 },
  { name: "Dr. Gurjot Kaur Walia", role: "Department of Electronics and Communication Engineering", img: staff6 },
  { name: "Dr. Kapil Sharma", role: "Department of Computer Science and Engineering", img: staff7 },
  { name: "Dr. Rajvir Kaur Sraw", role: "Department of Applied Sciences", img: staff8 },
  { name: "Prof. Prabhjot Singh", role: "Department of Civil Engineering", img: staff9 },
  { name: "Prof. Kuldeep Singh Kooner", role: "Department of Electrical Engineering", img: staff10 },
  { name: "Prof. Gulraj Singh", role: "Department of Mechanical Engineering", img: staff11 },
  { name: "Prof. Neha Gupta", role: "Department of Master of Computer Applications (MCA)", img: staff12 },
  { name: "Prof. Harneet Kaur", role: "Department of Master of Business Administration (MBA)", img: staff13 },
  { name: "Vansh Singh", role: "Branch: Information Technology (4th Year)", img: staff14 },
  { name: "Pawan Singh Bishit", role: "Branch: Computer Science and Engineering (4th Year)", img: staff15 },
  { name: "Saumya Dhingra", role: "Branch: Computer Science and Engineering (3rd Year)", img: staff16 },
  { name: "Manvir Singh", role: "Branch: Civil Engineering (3rd Year)", img: staff17 },
  { name: "Jashandeep Kaur", role: "Branch: Electrical Engineering (3rd Year)", img: staff18 },
  { name: "Aditi Kaushal", role: "Branch: Computer Science and Engineering (3rd Year)", img: staff19 },
  { name: "Sunny Kumar", role: "Branch: Information Technology (4th Year)", img: staff20 },
  { name: "Amanpreet", role: "Branch: Bachelor of Architecture (4th Year)", img: staff21 },
];


const Staff = () => {
  return (
    <div className="staff-page">
      <main className="staff-content">
        <div className="staff-container">
         
          
       

          {/* Group Photo Section (moved above cards) */}
        <div className="group-photo-section">
             <p className="staff-subtitle-box">
            Behind every success of our students stands the dedication of our
            respected committee.
          </p>
  <div className="group-photo-box">
    <img src={groupPhoto} alt="Committee Group" className="group-photo" />
    {/* <h2 className="group-photo-title">Our Committee</h2> Overlay Text */}
  </div>
</div>


          {/* Staff Cards Grid */}
          <div className="staff-grid">
            {staffMembers.map((staff, index) => (
              <div className="staff-card" key={index}>
                <div className="staff-img-container">
                  <img src={staff.img} alt={staff.name} className="staff-img" />
                </div>
                <div className="staff-body">
                  <h3 className="staff-name">{staff.name}</h3>
                  <p className="staff-role">{staff.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
};

export default Staff;
