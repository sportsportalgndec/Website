import React from "react";
import HeroSection from "../components/HeroSection";
import HodNoticeSection from "../components/HodNoticeSection";
import VisionMission from "../components/vision";
import Carousel from "../components/facilities";

import player1 from "../assets/hero/Footballplayer.png";
import sportsBg1 from "../assets/hero/6.png";
import player2 from "../assets/hero/Badmintonplayer.png";
import sportsBg2 from "../assets/hero/8.png";
import sportsBg3 from "../assets/hero/10.png";
import player3 from "../assets/hero/Athleticplayer.png"
import sportsBg4 from "../assets/hero/12.png";
import player4 from "../assets/hero/Hockeyplayer.png"
import sportsBg5 from "../assets/hero/14.png";
import player5 from "../assets/hero/Volleyballplayer.png";
import sportsBg6 from "../assets/hero/16.png";
import player6 from "../assets/hero/Basketballplayer.png"
import sportsBg7 from "../assets/hero/18.png";
import player7 from "../assets/hero/Handballplayer.png";
import sportsBg8 from "../assets/hero/20.png"
import player8 from "../assets/hero/Cricketplayer.png";




const homeSlides = [
  {
    bg: sportsBg1,
    player: player1,
    style: { 
      top: "48%", 
      left: "5%", 
      transform: "translate(0%, -50%)", 
      width: "30vw"   // scaled width
    },
    textStyle: { top: "22vh", right: "4%" , fontSize: "6vw"}, // font scales
    mobileStyle: { 
      top: "40%", 
      left: "8%", 
      transform: "translate(0%, -50%)", 
      width: "25vw"  // scaled for mobile
    },
    mobileTextStyle: { top: "6vh", right: "4.5%", fontSize: "5vw" }, // scales on mobile
    line1Color: "#ffffff",
    line2Color: "#778fff",
    line1Text: "Welcome to",
    line2Text: "GNDEC SPORTS",
  },
  {
    bg: sportsBg2,
    player: player2,
    style: { 
      top: "45%", 
      right: "8%", 
      transform: "translateY(-50%)", 
      width: "28vw"
    },
    textStyle: { top: "22vh", left: "3%", fontSize: "6vw" },
    mobileStyle: { 
      top: "42%", 
      right: "5%", 
      transform: "translateY(-50%)", 
      width: "28vw" 
    },
    mobileTextStyle: { top: "5vh", left: "5%", fontSize: "5vw" },
    line1Color: "#ffffff",
    line2Color: "#778fff",
    line1Text: "Welcome to",
    line2Text: "GNDEC SPORTS",
  },
  {
    bg: sportsBg3,
    player: player3,
    style: { 
      top: "48%", 
      left: "0.6%", 
      transform: "translate(0%, -50%)", 
      width: "32vw"
    },
    textStyle: { top: "22vh", right: "4%", fontSize: "5vw" },
    mobileStyle: { 
      top: "45%", 
      left: "4%", 
      transform: "translate(0%, -50%)", 
      width: "30vw" 
    },
    mobileTextStyle: { top: "5.5vh", right: "5%", fontSize: "5vw" },
    line1Color: "#ffffff",
    line2Color: "#ffde59",
    line1Text: "Welcome to",
    line2Text: "GNDEC SPORTS",
  },
  {
    bg: sportsBg4,
    player: player4,
    style: { 
      top: "49%", 
      right: "4%", 
      transform: "translateY(-50%)", 
      width: "32vw"
    },
    textStyle: { top: "22vh", left: "2.5%", fontSize: "5.8vw" },
    mobileStyle: { 
      top: "40%", 
      right: "5%", 
      transform: "translateY(-50%)", 
      width: "28vw" 
    },
    mobileTextStyle: { top: "5.5vh", left: "3%", fontSize: "5vw" },
    line1Color: "#ffffff",
    line2Color: "#ffde59",
    line1Text: "Welcome to",
    line2Text: "GNDEC SPORTS",
  },
  // Slides 5-8
  {
    bg: sportsBg5,
    player: player5,
    style: { top: "48%", left: "5%", transform: "translate(0%, -50%)", width: "30vw" },
    textStyle: { top: "22vh", right: "2%", fontSize: "5.8vw" },
    mobileStyle: { top: "42%", left: "10%", transform: "translate(0%, -50%)", width: "28vw" },
    mobileTextStyle: { top: "4.5vh", right: "4%", fontSize: "5vw" },
    line1Color: "#ffffff",
    line2Color: "#6181ccff",
    line1Text: "Welcome to",
    line2Text: "GNDEC SPORTS",
  },
  {
    bg: sportsBg6,
    player: player6,
    style: { top: "45%", right: "8%", transform: "translateY(-50%)", width: "28vw" },
    textStyle: { top: "22vh", left: "3%", fontSize: "6vw" },
    mobileStyle: { top: "42%", right: "5%", transform: "translateY(-50%)", width: "28vw" },
    mobileTextStyle: { top: "5vh", left: "3.5%", fontSize: "5vw" },
    line1Color: "#ffffff",
    line2Color: "#6181ccff",
    line1Text: "Welcome to",
    line2Text: "GNDEC SPORTS",
  },
  {
    bg: sportsBg7,
    player: player7,
    style: { top: "45%", right: "10%", transform: "translateY(-50%)", width: "28vw" },
    textStyle: { top: "22vh", left: "2%", fontSize: "6vw" },
    mobileStyle: { top: "42%", right: "10%", transform: "translateY(-50%)", width: "28vw" },
    mobileTextStyle: { top: "5vh", left: "3%", fontSize: "5vw" },
    line1Color: "#ffffff",
    line2Color: "#ff5252",
    line1Text: "Welcome to",
    line2Text: "GNDEC SPORTS",
  },
  {
    bg: sportsBg8,
    player: player8,
    style: { top: "50%", left: "8%", transform: "translate(0%, -50%)", width: "30vw" },
    textStyle: { top: "22vh", right: "3%", fontSize: "5.5vw" },
    mobileStyle: { top: "42%", left: "5%", transform: "translate(0%, -50%)", width: "30vw" },
    mobileTextStyle: { top: "5vh", right: "4%", fontSize: "5vw" },
    line1Color: "#ffffff",
    line2Color: "#ff5252",
    line1Text: "Welcome to",
    line2Text: "GNDEC SPORTS",
  },
];


function Home() {
  return (
    <>
      <HeroSection slides={homeSlides} />
      <HodNoticeSection />
      <VisionMission />
      <Carousel />
    </>
  );
}

export default Home;
